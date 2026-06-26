import { visit } from 'unist-util-visit';

const MARKER_RE = /\^(?:\\)?\[([^\]\r\n]+?)(?:\\)?\]|\[source:([^\]\r\n]+?)\]/g;
const URL_RE = /https?:\/\/[^\s)]+/g;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SOURCE_HEADING_RE = /^sources$/i;

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function textContent(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(textContent).join(' ');
  return '';
}

function urlsFrom(node) {
  const urls = [];
  visit(node, (child) => {
    if (child.type === 'link' && child.url) urls.push(String(child.url));
    if (typeof child.value === 'string') {
      for (const match of child.value.matchAll(URL_RE)) urls.push(match[0]);
    }
  });
  return urls;
}

function tokens(value) {
  return String(value)
    .toLowerCase()
    .replace(/^source:/, '')
    .split(/[^a-z0-9]+/)
    .filter((part) => part.length > 1 && !/^\d{4}$/.test(part));
}

function collectSources(tree) {
  const children = Array.isArray(tree.children) ? tree.children : [];
  const sources = [];
  let inSources = false;
  let depth = 0;

  for (const child of children) {
    if (child.type === 'heading') {
      const heading = textContent(child).trim();
      if (SOURCE_HEADING_RE.test(heading)) {
        inSources = true;
        depth = child.depth ?? 2;
        continue;
      }
      if (inSources && (child.depth ?? 1) <= depth) break;
    }
    if (!inSources) continue;

    if (child.type === 'list') {
      for (const item of child.children ?? []) {
        const text = textContent(item).replace(/\s+/g, ' ').trim();
        const urls = urlsFrom(item);
        if (text || urls.length) sources.push({ text: text.toLowerCase(), urls });
      }
    }
  }

  return sources;
}

function sourceHref(value, sources) {
  const raw = String(value).trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  if (!sources.length) return null;

  const key = raw.toLowerCase();
  const exact = sources.find((source) => source.text.includes(key) || source.urls.some((url) => url.toLowerCase().includes(key)));
  if (exact?.urls?.[0]) return exact.urls[0];

  const parts = tokens(raw);
  if (!parts.length) return null;
  let best = null;
  for (const source of sources) {
    const haystack = `${source.text} ${source.urls.join(' ')}`.toLowerCase();
    const hits = parts.filter((part) => haystack.includes(part)).length;
    if (hits > (best?.hits ?? 0)) best = { hits, source };
  }

  return best && best.hits >= Math.min(2, parts.length) ? best.source.urls[0] ?? null : null;
}

function renderSource(value, sources) {
  const raw = String(value).trim();
  const href = sourceHref(raw, sources);
  const title = href ? `Source: ${raw} - ${href}` : `Source: ${raw}`;
  const attrs = `class="prov prov-source" title="${esc(title)}" aria-label="${esc(title)}"`;
  if (!href) return `<sup ${attrs}><a href="#sources">↗</a></sup>`;
  const external = /^https?:\/\//i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<sup ${attrs}><a href="${esc(href)}"${external}>↗</a></sup>`;
}

function renderMarker(payload, sources) {
  const raw = String(payload).trim();
  const lower = raw.toLowerCase();

  if (lower.startsWith('source:')) return renderSource(raw.slice('source:'.length), sources);
  if (lower.startsWith('verified-')) {
    const date = raw.slice('verified-'.length);
    const title = DATE_RE.test(date) ? `Verified on ${date}` : `Verified: ${date}`;
    return `<sup class="prov prov-verified" title="${esc(title)}" aria-label="${esc(title)}">✓</sup>`;
  }
  if (lower.startsWith('extracted')) {
    const title = lower === 'extracted' ? 'Extracted from cited source' : raw;
    return `<sup class="prov prov-extracted" title="${esc(title)}" aria-label="${esc(title)}">•</sup>`;
  }
  if (lower === 'inferred') {
    return '<sup class="prov prov-inferred" title="Inferred from cited sources" aria-label="Inferred from cited sources">•</sup>';
  }
  if (lower === 'ambiguous') {
    return '<sup class="prov prov-ambiguous" title="Ambiguous source support" aria-label="Ambiguous source support">?</sup>';
  }
  if (lower === 'likely') {
    return '<sup class="prov prov-inferred" title="Likely; source support is partial" aria-label="Likely; source support is partial">•</sup>';
  }
  if (lower.includes('needs-verification')) {
    return '<sup class="prov prov-ambiguous" title="Needs verification" aria-label="Needs verification">?</sup>';
  }

  return `<sup class="prov prov-note" title="${esc(raw)}" aria-label="${esc(raw)}">•</sup>`;
}

function hasMarker(value) {
  return String(value ?? '').includes('^[') || String(value ?? '').includes('^\\[') || String(value ?? '').includes('[source:');
}

function renderMarkerParts(value, sources) {
  const source = String(value ?? '');
  const out = [];
  let last = 0;
  let match;
  let previousWasMarker = false;
  MARKER_RE.lastIndex = 0;

  while ((match = MARKER_RE.exec(source))) {
    const payload = match[1] ?? (match[2] ? `source:${match[2]}` : '');
    const bareSource = !match[1] && !!match[2];
    if (bareSource && (!previousWasMarker || match.index !== last)) {
      previousWasMarker = false;
      continue;
    }

    if (match.index > last) out.push({ type: 'text', value: source.slice(last, match.index) });
    out.push({ type: 'html', value: renderMarker(payload, sources) });
    last = match.index + match[0].length;
    previousWasMarker = true;
  }

  if (!out.length) return null;
  if (last < source.length) out.push({ type: 'text', value: source.slice(last) });
  return out;
}

function renderMarkerHtml(value, sources, { escapeText = false } = {}) {
  const parts = renderMarkerParts(value, sources);
  if (!parts) return escapeText ? esc(value) : String(value ?? '');
  return parts.map((part) => (part.type === 'html' ? part.value : escapeText ? esc(part.value) : part.value)).join('');
}

function cleanMarkerUrl(value) {
  return String(value ?? '')
    .replace(/(?:%EF%BC%89|%E3%80%82|[)\uFF09\u3002])?%5E%5B.*$/i, '')
    .replace(/(?:%EF%BC%89|%E3%80%82|[)\uFF09\u3002])+$/i, '')
    .replace(/(?:[)\uFF09\u3002])?\^\\?\[.*$/i, '')
    .replace(/(?:[)\uFF09\u3002])+$/i, '');
}

function splitLinkMarker(tree, sources) {
  visit(tree, 'link', (node, index, parent) => {
    if (!parent || index == null) return;
    const label = textContent(node);
    const url = String(node.url ?? '');
    if (!hasMarker(label) && !hasMarker(url) && !/%5E%5B/i.test(url)) return;

    const payloadMatch = label.match(/\^(?:\\)?\[([^\]\r\n]+?)\]/) || url.match(/\^(?:\\)?\[([^\]\r\n]+?)\]/) || url.match(/%5E%5B([^%\]\r\n]+?)(?:%5D|$)/i);
    const payload = payloadMatch?.[1] ? decodeURIComponent(payloadMatch[1]) : '';
    node.url = cleanMarkerUrl(url);
    node.children = [{ type: 'text', value: label.replace(/\^(?:\\)?\[[^\]\r\n]+?(?:\\)?\].*$/, '').replace(/[)\uFF09\u3002]+$/, '') }];

    if (payload) {
      parent.children.splice(index + 1, 0, { type: 'html', value: renderMarker(payload, sources) });
    }
  });
}

export default function remarkProvenance() {
  return (tree) => {
    const sources = collectSources(tree);
    splitLinkMarker(tree, sources);

    visit(tree, 'text', (node, index, parent) => {
      const value = String(node.value ?? '');
      if (!parent || index == null || !hasMarker(value)) return;
      const out = renderMarkerParts(value, sources);
      if (!out) return;
      parent.children.splice(index, 1, ...out);
    });

    visit(tree, 'html', (node) => {
      const value = String(node.value ?? '');
      if (!hasMarker(value)) return;
      node.value = renderMarkerHtml(value, sources);
    });

    visit(tree, 'code', (node, index, parent) => {
      const value = String(node.value ?? '');
      if (!parent || index == null || !hasMarker(value)) return;
      const lang = esc(node.lang || 'plaintext');
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<pre class="astro-code prov-code" tabindex="0" data-language="${lang}"><code>${renderMarkerHtml(value, sources, { escapeText: true })}</code></pre>`,
      });
    });
  };
}

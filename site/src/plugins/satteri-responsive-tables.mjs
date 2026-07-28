import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DATE_LABEL_RE =
  /^\s*(\d{4}(?:\+|[-–]\d{1,2}(?:[-–]\d{1,2})?)?|\d{4}年(?:\d{1,2}月(?:\d{1,2}日)?)?)(?:(?:\s*[|:：]\s*)|(?:\s+[—–-]\s+))(.+?)\s*$/;
const CARD_HEADERS_PROPERTY = 'dataFinwikiCardHeaders';

function textContent(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(textContent).join(' ');
  return '';
}

function normalizeLabel(value) {
  return String(value ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function inlineTextContent(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(inlineTextContent).join('');
  return '';
}

function isMeaningfulLabel(value) {
  const label = normalizeLabel(value);
  if (!label) return false;
  if (/^[\-–—:/|.・]+$/.test(label)) return false;
  if (/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(label)) return true;
  return label.replace(/[^\p{Letter}\p{Number}]/gu, '').length >= 2;
}

function cloneNode(node) {
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map(cloneNode);

  const clone = {};
  for (const key of Object.keys(node)) {
    if (key.startsWith('_')) continue;
    clone[key] = cloneNode(node[key]);
  }
  return clone;
}

function hProperties(node) {
  node.data ??= {};
  node.data.hProperties ??= {};
  return node.data.hProperties;
}

function setText(node, value) {
  node.children = [{ type: 'text', value }];
}

function addMdastClass(node, className) {
  const props = hProperties(node);
  const current = props.className ?? props.class ?? [];
  const classes = Array.isArray(current) ? current : String(current).split(/\s+/).filter(Boolean);
  if (!classes.includes(className)) classes.push(className);
  props.className = classes;
  delete props.class;
}

function setMdastProperty(node, name, value) {
  hProperties(node)[name] = value;
}

function tableShape(table) {
  const rows = Array.isArray(table.children) ? table.children : [];
  const headerRow = rows[0];
  const headerCells = Array.isArray(headerRow?.children) ? headerRow.children : [];
  const rawHeaders = headerCells.map((cell) => normalizeLabel(textContent(cell)));
  let columnCount = rawHeaders.length;
  while (columnCount > 0 && !isMeaningfulLabel(rawHeaders[columnCount - 1])) columnCount -= 1;
  const headers = rawHeaders.slice(0, columnCount);
  return { rows, columnCount, headers };
}

function repairSplitTableWikilinks(table) {
  for (const row of table.children ?? []) {
    if (!Array.isArray(row.children)) continue;

    for (let index = 0; index < row.children.length - 1; index += 1) {
      const current = textContent(row.children[index]);
      const open = current.lastIndexOf('[[');
      if (open === -1 || current.slice(open).includes(']]')) continue;

      const target = current.slice(open + 2).trim();
      if (!target || target.includes('|') || /\s/.test(target)) continue;

      const next = textContent(row.children[index + 1]);
      const close = next.indexOf(']]');
      if (close === -1) continue;

      const label = next.slice(0, close).trim();
      if (!label) continue;

      const merged = `${current.slice(0, open)}[[${target}|${label}]]${next.slice(close + 2)}`;
      setText(row.children[index], merged);
      row.children.splice(index + 1, 1);
      index -= 1;
    }
  }
}

function hasMeaningfulFirstColumnMdast(rows) {
  const bodyRows = rows.slice(1).filter((row) => Array.isArray(row.children) && row.children.length > 0);
  if (!bodyRows.length) return false;

  let meaningful = 0;
  for (const row of bodyRows) {
    if (isMeaningfulLabel(textContent(row.children[0]))) meaningful += 1;
  }
  return meaningful === bodyRows.length;
}

function enhanceTable(table) {
  repairSplitTableWikilinks(table);

  const { rows, columnCount, headers } = tableShape(table);
  if (columnCount < 2 || rows.length < 2) return false;

  const headerIsMeaningful = hasMeaningfulHeader(headers, columnCount);
  const firstColumnIsMeaningful = hasMeaningfulFirstColumnMdast(rows);

  if (headerIsMeaningful && firstColumnIsMeaningful) {
    addMdastClass(table, 'prose-table--sticky');
  }

  if (columnCount >= 3 && headerIsMeaningful && firstColumnIsMeaningful) {
    addMdastClass(table, 'prose-table--cards');
    setMdastProperty(table, CARD_HEADERS_PROPERTY, JSON.stringify(headers));
  }

  return true;
}

function parseTimeline(value) {
  const lines = String(value ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return null;

  const items = [];
  for (const line of lines) {
    const match = line.match(DATE_LABEL_RE);
    if (!match) return null;
    const date = match[1].trim();
    const event = match[2].trim();
    if (!isMeaningfulLabel(date) || event.length < 3) return null;
    items.push({ date, event });
  }

  return items;
}

function sliceInlineNodes(nodes, startOffset) {
  const sliced = [];
  let offset = 0;

  for (const node of nodes) {
    const length = inlineTextContent(node).length;
    if (offset + length <= startOffset) {
      offset += length;
      continue;
    }

    if (offset >= startOffset) {
      sliced.push(cloneNode(node));
    } else {
      const clone = cloneNode(node);
      if (typeof clone.value === 'string') {
        clone.value = clone.value.slice(startOffset - offset);
      } else if (Array.isArray(clone.children)) {
        clone.children = sliceInlineNodes(clone.children, startOffset - offset);
      }
      sliced.push(clone);
    }

    offset += length;
  }

  while (sliced.length && inlineTextContent(sliced[0]).trim() === '') sliced.shift();
  if (typeof sliced[0]?.value === 'string') sliced[0].value = sliced[0].value.replace(/^\s+/, '');
  return sliced;
}

function timelineFromListItem(item) {
  if (!Array.isArray(item.children) || item.children.length !== 1) return null;
  const paragraph = item.children[0];
  if (paragraph?.type !== 'paragraph' || !Array.isArray(paragraph.children)) return null;

  const value = inlineTextContent(paragraph);
  const match = value.match(DATE_LABEL_RE);
  if (!match) return null;

  const date = match[1].trim();
  const event = match[2].trim();
  if (!isMeaningfulLabel(date) || event.length < 3) return null;

  const eventStart = value.length - match[2].length;
  const eventChildren = sliceInlineNodes(paragraph.children, eventStart);
  if (inlineTextContent({ children: eventChildren }).trim().length < 3) return null;

  return { date, eventChildren };
}

function parseTimelineList(list) {
  if (!Array.isArray(list.children) || list.children.length < 2) return null;

  const items = [];
  for (const item of list.children) {
    const timelineItem = timelineFromListItem(item);
    if (!timelineItem) return null;
    items.push(timelineItem);
  }

  return items;
}

function escHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function timelineNode(items) {
  return {
    type: 'list',
    ordered: true,
    spread: false,
    data: { hProperties: { className: ['timeline'] } },
    children: items.map((item) => ({
      type: 'listItem',
      spread: false,
      data: { hProperties: { className: ['timeline__item'] } },
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'html', value: `<span class="timeline__date">${escHtml(item.date)}</span><span class="timeline__event">` },
            ...(item.eventChildren ?? [{ type: 'text', value: item.event }]),
            { type: 'html', value: '</span>' },
          ],
        },
      ],
    })),
  };
}

export default function satteriResponsiveTables() {
  return {
    name: 'finwiki-responsive-tables-mdast',
    code(node, ctx) {
      if (node.lang || node.meta) return;
      const items = parseTimeline(node.value);
      if (items) ctx.replaceNode(node, timelineNode(items));
    },
    list(node, ctx) {
      if (node.data?.hProperties?.className?.includes?.('timeline')) return;
      const items = parseTimelineList(node);
      if (items) ctx.replaceNode(node, timelineNode(items));
    },
    table(node, ctx) {
      const table = cloneNode(node);
      if (!enhanceTable(table)) {
        ctx.replaceNode(node, table);
        return;
      }

      ctx.insertBefore(node, { type: 'html', value: '<div class="prose-table-scroll" tabindex="0">' });
      ctx.replaceNode(node, table);
      ctx.insertAfter(node, { type: 'html', value: '</div>' });
    },
  };
}

function elementChildren(node, tagName) {
  return (node.children ?? []).filter((child) => child.type === 'element' && (!tagName || child.tagName === tagName));
}

function descendantElements(node, tagName) {
  const out = [];
  const walk = (child) => {
    if (!child || typeof child !== 'object') return;
    if (child.type === 'element' && (!tagName || child.tagName === tagName)) out.push(child);
    for (const grandchild of child.children ?? []) walk(grandchild);
  };
  walk(node);
  return out;
}

function addHastClass(node, ctx, className) {
  const current = node.properties?.className ?? node.properties?.class ?? [];
  const classes = Array.isArray(current) ? current.map(String) : String(current).split(/\s+/).filter(Boolean);
  if (!classes.includes(className)) classes.push(className);
  ctx.setProperty(node, 'className', classes);
}

function hastTableShape(table, ctx) {
  const thead = elementChildren(table, 'thead')[0];
  const tbody = elementChildren(table, 'tbody')[0];
  const headerRow = elementChildren(thead, 'tr')[0] ?? elementChildren(table, 'tr')[0];
  const bodyRows = tbody ? elementChildren(tbody, 'tr') : elementChildren(table, 'tr').slice(1);
  const headerCells = headerRow ? elementChildren(headerRow).filter((cell) => cell.tagName === 'th' || cell.tagName === 'td') : [];
  const rawHeaders = headerCells.map((cell) => normalizeLabel(ctx.textContent(cell)));
  let columnCount = rawHeaders.length;
  while (columnCount > 0 && !isMeaningfulLabel(rawHeaders[columnCount - 1])) columnCount -= 1;
  const headers = rawHeaders.slice(0, columnCount);
  return { bodyRows, columnCount, headers };
}

function hasMeaningfulHeader(headers, columnCount) {
  if (columnCount < 2 || headers.length < 2) return false;
  if (!isMeaningfulLabel(headers[0])) return false;
  return headers.slice(1, columnCount).some(isMeaningfulLabel);
}

function enhanceHastTable(table, ctx) {
  const rawHeaders = table.properties?.[CARD_HEADERS_PROPERTY];
  if (typeof rawHeaders !== 'string') return;

  let headers;
  try {
    headers = JSON.parse(rawHeaders);
  } catch {
    headers = [];
  }
  ctx.setProperty(table, CARD_HEADERS_PROPERTY, null);
  if (!Array.isArray(headers) || headers.length < 3) return;

  const { bodyRows } = hastTableShape(table, ctx);
  for (const row of bodyRows) {
    const cells = elementChildren(row).filter((cell) => cell.tagName === 'td' || cell.tagName === 'th');
    cells.forEach((cell, index) => {
      const header = headers[Math.min(index, headers.length - 1)];
      if (header) ctx.setProperty(cell, 'dataLabel', header);
      addHastClass(cell, ctx, index === 0 ? 'matrix-card__title' : 'matrix-card__field');
    });
  }
}

export function satteriResponsiveTableHast() {
  return {
    name: 'finwiki-responsive-tables-hast',
    element: {
      filter: ['table'],
      visit(node, ctx) {
        if (descendantElements(node, 'tr').length < 2) return;
        enhanceHastTable(node, ctx);
      },
    },
  };
}

async function* walkHtml(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkHtml(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      yield full;
    }
  }
}

function escAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function textFromHtml(value) {
  return normalizeLabel(
    String(value ?? '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"'),
  );
}

function cardTableHeaders(tableHtml) {
  const head = tableHtml.match(/<thead><tr>([\s\S]*?)<\/tr><\/thead>/);
  if (!head) return [];
  return [...head[1].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)]
    .map((match) => textFromHtml(match[1]))
    .filter(Boolean);
}

function removeClassTokens(attrs, tokens) {
  return attrs.replace(/\sclass="([^"]*)"/, (_match, value) => {
    const classes = value.split(/\s+/).filter((className) => className && !tokens.includes(className));
    return classes.length ? ` class="${classes.join(' ')}"` : '';
  });
}

function stripCardTableMarkup(tableHtml) {
  let repairs = 0;
  let html = tableHtml.replace(/<table\b([^>]*)>/, (_match, attrs) => {
    const nextAttrs = removeClassTokens(attrs, ['prose-table--cards']);
    if (nextAttrs !== attrs) repairs += 1;
    return `<table${nextAttrs}>`;
  });

  html = html.replace(/<td\b([^>]*)>/g, (_match, attrs) => {
    let nextAttrs = attrs.replace(/\sdata-label="[^"]*"/g, '');
    nextAttrs = removeClassTokens(nextAttrs, ['matrix-card__title', 'matrix-card__field']);
    if (nextAttrs !== attrs) repairs += 1;
    return `<td${nextAttrs}>`;
  });

  return { html, repairs };
}

function repairCardTableDataLabels(tableHtml) {
  const headers = cardTableHeaders(tableHtml);
  if (!headers.length) return { html: tableHtml, repairs: 0 };
  if (headers.length < 3) return stripCardTableMarkup(tableHtml);

  let repairs = 0;
  const html = tableHtml.replace(/<tbody>([\s\S]*?)<\/tbody>/, (_tbody, body) => {
    const repairedBody = body.replace(/<tr>([\s\S]*?)<\/tr>/g, (_row, row) => {
      let cellIndex = 0;
      const repairedRow = row.replace(/<td\b([^>]*)>/g, (match, attrs) => {
        const label = headers[Math.min(cellIndex, headers.length - 1)];
        cellIndex += 1;
        if (!label || /\bdata-label\s*=/.test(attrs)) return match;
        repairs += 1;
        return `<td data-label="${escAttribute(label)}"${attrs}>`;
      });
      return `<tr>${repairedRow}</tr>`;
    });
    return `<tbody>${repairedBody}</tbody>`;
  });

  return { html, repairs };
}

function timelineItemFromHtml(listItemHtml) {
  const datePattern = String.raw`(\d{4}(?:\+|[-–]\d{1,2}(?:[-–]\d{1,2})?)?|\d{4}年(?:\d{1,2}月(?:\d{1,2}日)?)?)`;
  const match = listItemHtml.match(
    new RegExp(String.raw`^<li>\s*<strong>${datePattern}</strong>\s*(?:[|:：]|[—–-])\s*([\s\S]*?)\s*</li>$`),
  );
  if (!match) return null;

  const date = textFromHtml(match[1]);
  const event = match[2].trim();
  if (!isMeaningfulLabel(date) || textFromHtml(event).length < 3) return null;

  return { date, event };
}

function repairTimelineListsInHtml(html) {
  let repairs = 0;
  const updated = html.replace(/<ul>([\s\S]*?)<\/ul>/g, (listHtml, body) => {
    const items = [...body.matchAll(/<li>[\s\S]*?<\/li>/g)].map((match) => match[0]);
    if (items.length < 2) return listHtml;
    if (body.replace(/<li>[\s\S]*?<\/li>/g, '').trim()) return listHtml;

    const timelineItems = items.map(timelineItemFromHtml);
    if (timelineItems.some((item) => !item)) return listHtml;

    repairs += 1;
    return `<ol class="timeline">${timelineItems
      .map(
        (item) =>
          `<li class="timeline__item"><p><span class="timeline__date">${escHtml(item.date)}</span><span class="timeline__event">${item.event}</span></p></li>`,
      )
      .join('')}</ol>`;
  });

  return { html: updated, repairs };
}

async function repairResponsiveTablesInHtml(distDir) {
  let tableRepairs = 0;
  let timelineRepairs = 0;
  const root = typeof distDir === 'string' ? distDir : fileURLToPath(distDir);

  for await (const file of walkHtml(root)) {
    const html = await readFile(file, 'utf8');
    let fileTableRepairs = 0;
    let updated = html.replace(/<table\b[^>]*\bprose-table--cards\b[^>]*>[\s\S]*?<\/table>/g, (tableHtml) => {
      const result = repairCardTableDataLabels(tableHtml);
      fileTableRepairs += result.repairs;
      return result.html;
    });

    const timelineResult = repairTimelineListsInHtml(updated);
    updated = timelineResult.html;

    if (updated !== html) await writeFile(file, updated);
    tableRepairs += fileTableRepairs;
    timelineRepairs += timelineResult.repairs;
  }

  if (tableRepairs > 0) console.log(`[finwiki] responsive table data-label repairs: ${tableRepairs}`);
  if (timelineRepairs > 0) console.log(`[finwiki] responsive timeline repairs: ${timelineRepairs}`);
}

export function responsiveTableHtmlRepair() {
  return {
    name: 'finwiki-responsive-table-html-repair',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        await repairResponsiveTablesInHtml(dir);
      },
    },
  };
}

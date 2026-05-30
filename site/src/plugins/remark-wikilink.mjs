import { visit } from 'unist-util-visit';
import { resolveWiki } from '../lib/siteIndex.mjs';

// [[domain/slug|label]] / [[slug]] → 解決できれば站内リンク（data-wl に正規パス、
// href は Base の client script が現在言語で付与）、未解決なら broken span。
const RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default function remarkWikilink() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null || !node.value.includes('[[')) return;
      const out = [];
      let last = 0;
      let m;
      RE.lastIndex = 0;
      while ((m = RE.exec(node.value))) {
        if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
        const target = m[1].trim();
        const label = (m[2] ?? target.split('/').pop() ?? target).trim();
        const path = resolveWiki(target);
        if (path) {
          out.push({ type: 'html', value: `<a class="wl" data-wl="${esc(path)}">${esc(label)}</a>` });
        } else {
          out.push({ type: 'html', value: `<span class="wl wl-broken" title="${esc(target)}">${esc(label)}</span>` });
        }
        last = m.index + m[0].length;
      }
      if (!out.length) return;
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
    });
  };
}

import { visit } from 'unist-util-visit';

// [[domain/slug|label]] / [[slug]] → 可读文本（带样式标记）。
// 真正的跨页 link 解析（alias / 反向链接 / 语言前缀）留待下一轮的 SiteIndex；
// 此处先保证人类可读、不外露裸 [[ ]]，且不产生 404 死链。
const RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

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
        out.push({ type: 'html', value: `<span class="wl" data-target="${target}">${label}</span>` });
        last = m.index + m[0].length;
      }
      if (!out.length) return;
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
    });
  };
}

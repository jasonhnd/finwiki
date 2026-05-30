import { visit } from 'unist-util-visit';

// ^[extracted] / ^[inferred] / ^[ambiguous] → 置信度小徽章（裸标记不外露）。
const RE = /\^\[(extracted|inferred|ambiguous)\]/g;

export default function remarkProvenance() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null || !node.value.includes('^[')) return;
      const out = [];
      let last = 0;
      let m;
      RE.lastIndex = 0;
      while ((m = RE.exec(node.value))) {
        if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
        out.push({ type: 'html', value: `<sup class="prov prov-${m[1]}" title="${m[1]}"></sup>` });
        last = m.index + m[0].length;
      }
      if (!out.length) return;
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
    });
  };
}

// Wiki-placement headings are maintainer orientation. They stay in the
// source Markdown, but they must not render as chapter one on the human site.

const WIKI_HEADING = /^(wiki\s*route|ウィキ上の位置づけ)$/i;
const WIKI_LEAD = /^(wiki\s*route|ウィキ上の位置づけ)\s*[:：]/i;

function textOf(node) {
  if (!node) return '';
  if (typeof node.value === 'string' && !node.children) return node.value;
  if (Array.isArray(node.children)) return node.children.map(textOf).join('');
  return typeof node.value === 'string' ? node.value : '';
}

function withClass(node, className) {
  const current = node.data?.hProperties?.className;
  const classes = new Set([
    ...(Array.isArray(current) ? current : current ? [current] : []),
    className,
  ]);
  node.data = {
    ...node.data,
    hProperties: {
      ...node.data?.hProperties,
      className: [...classes],
    },
  };
}

export default function satteriQuietWikiPlacement() {
  return {
    name: 'finwiki-quiet-wiki-placement',
    heading(node, ctx) {
      if (node.depth !== 2) return;
      const title = textOf(node).replace(/\s+/g, ' ').trim();
      if (!WIKI_HEADING.test(title)) return;

      const parent = ctx.parent(node);
      const start = ctx.indexOf(node);
      if (parent?.children && start >= 0) {
        for (let i = start + 1; i < parent.children.length; i += 1) {
          const next = parent.children[i];
          if (next.type === 'heading') break;
          withClass(next, 'wiki-placement__body');
        }
      }

      ctx.replaceNode(node, {
        type: 'paragraph',
        children: node.children,
        data: { hProperties: { className: ['wiki-placement__kicker'] } },
      });
    },
    paragraph(node, ctx) {
      const parent = ctx.parent(node);
      if (parent?.type !== 'root') return;
      const index = ctx.indexOf(node);
      const prev = index > 0 ? parent.children[index - 1] : null;
      const prevClass = prev?.data?.hProperties?.className;
      const prevClasses = Array.isArray(prevClass) ? prevClass : prevClass ? [prevClass] : [];
      const text = textOf(node).replace(/\s+/g, ' ').trim();
      const followsKicker = prevClasses.includes('wiki-placement__kicker');
      if (!followsKicker && !WIKI_LEAD.test(text)) return;
      withClass(node, 'wiki-placement__body');
      ctx.replaceNode(node, {
        type: 'paragraph',
        children: node.children,
        data: node.data,
      });
    },
  };
}

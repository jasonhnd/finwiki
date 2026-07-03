// Corpus entries open with a level-1 heading that repeats the frontmatter
// title. The layout already renders the title, so the body H1 is a duplicate.
export default function satteriStripTitle() {
  return {
    name: 'finwiki-strip-title',
    heading(node, ctx) {
      const parent = ctx.parent(node);
      if (node.depth === 1 && parent?.type === 'root' && ctx.indexOf(node) === 0) {
        ctx.removeNode(node);
      }
    },
  };
}

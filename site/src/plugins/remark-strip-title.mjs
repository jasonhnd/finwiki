// Corpus entries open with a level-1 heading that repeats the frontmatter
// title. The layout already renders the title, so the body H1 is a duplicate
// (two <h1>s per page) and pollutes the table of contents. Drop the leading
// H1 so the layout owns the title and the TOC starts at the real H2 sections.
export default function remarkStripTitle() {
  return (tree) => {
    const first = tree.children?.[0];
    if (first && first.type === 'heading' && first.depth === 1) {
      tree.children.shift();
    }
  };
}

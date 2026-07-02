// @ts-check
import { defineConfig } from 'astro/config';
import remarkWikilink from './src/plugins/remark-wikilink.mjs';
import remarkProvenance from './src/plugins/remark-provenance.mjs';
import remarkResponsiveTables, { responsiveTableHtmlRepair } from './src/plugins/remark-responsive-tables.mjs';
import remarkStripTitle from './src/plugins/remark-strip-title.mjs';
import localizeWikilinks from './src/plugins/localize-wikilinks.mjs';

// FinWiki human site: bilingual static pages under /ja and /en.
// The content layer reads the canonical root domain corpus directly.
export default defineConfig({
  site: 'https://finwiki.zksc.io',
  base: '/',
  outDir: 'dist',
  build: { format: 'directory' },
  integrations: [localizeWikilinks(), responsiveTableHtmlRepair()],
  markdown: {
    remarkPlugins: [remarkStripTitle, remarkResponsiveTables, remarkWikilink, remarkProvenance],
  },
});

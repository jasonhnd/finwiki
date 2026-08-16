// @ts-check
import { satteri } from '@astrojs/markdown-satteri';
import { defineConfig } from 'astro/config';
import satteriWikilink from './src/plugins/satteri-wikilink.mjs';
import satteriProvenance from './src/plugins/satteri-provenance.mjs';
import satteriResponsiveTables, {
  responsiveTableHtmlRepair,
  satteriResponsiveTableHast,
} from './src/plugins/satteri-responsive-tables.mjs';
import satteriStripTitle from './src/plugins/satteri-strip-title.mjs';
import satteriQuietWikiPlacement from './src/plugins/satteri-quiet-wiki-placement.mjs';
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
    processor: satteri({
      mdastPlugins: [satteriStripTitle, satteriQuietWikiPlacement, satteriResponsiveTables, satteriWikilink, satteriProvenance],
      hastPlugins: [satteriResponsiveTableHast],
    }),
  },
});

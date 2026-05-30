// @ts-check
import { defineConfig } from 'astro/config';
import remarkWikilink from './src/plugins/remark-wikilink.mjs';
import remarkProvenance from './src/plugins/remark-provenance.mjs';

// FinWiki 統一站点 — 人類版（三語 /ja /en /zh）。corpus は build 前に
// scripts/sync-corpus.ts で src/content/entries/ へ同期する。
export default defineConfig({
  site: 'https://finwiki.zksc.io',
  base: '/app/', // サブパス配信：主站(/)を一切触らず finwiki.zksc.io/app/ に人類版を載せる
  outDir: 'dist', // build 出力は site/dist（gitignore 済）。GitHub Actions が _site/app へ配置して配信
  build: { format: 'directory' },
  markdown: {
    remarkPlugins: [remarkWikilink, remarkProvenance],
  },
});

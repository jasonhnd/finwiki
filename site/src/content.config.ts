import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// corpus 经 scripts/sync-corpus.ts 同步到 src/content/entries/（标准位置，零跨目录风险）。
// schema 极宽容：只保证 title 是字符串，其余 frontmatter 原样透传（兼容 1380 篇差异）。
const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.md' }),
  schema: z
    .object({
      title: z.coerce.string().default('(untitled)'),
    })
    .passthrough(),
});

export const collections = { entries };

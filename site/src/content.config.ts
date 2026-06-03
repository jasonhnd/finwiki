import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ENTRY_DOMAIN_DIRS = [
  'agent-economy',
  'banking',
  'business',
  'corporate-strategy',
  'derivatives',
  'exchanges',
  'finance',
  'fintech',
  'insurance',
  'JapanFG',
  'loyalty',
  'manufacturer-finance',
  'money-market',
  'non-profit',
  'payments',
  'policy-finance',
  'real-estate-finance',
  'retail',
  'securities',
  'security',
  'structured-finance',
  'systems',
  'trade',
];

// Astro reads the canonical root corpus directly. site/src/content/entries is no
// longer a build input; it only exists in old ignored worktrees.
const entries = defineCollection({
  loader: glob({
    base: '../',
    pattern: [
      ...ENTRY_DOMAIN_DIRS.map((domain) => `${domain}/**/*.md`),
      '!**/INDEX.md',
    ],
  }),
  schema: z
    .object({
      title: z.coerce.string().default('(untitled)'),
    })
    .passthrough(),
});

// Machine translation output. id = {lang}/{domain}/{slug}.
const i18n = defineCollection({
  loader: glob({ base: './src/content/i18n', pattern: '**/*.md' }),
  schema: z
    .object({
      title: z.coerce.string().default(''),
    })
    .passthrough(),
});

export const collections = { entries, i18n };

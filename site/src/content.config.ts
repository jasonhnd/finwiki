import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ENTRY_DOMAIN_DIRS = [
  'agent-economy',
  'asset-managers',
  'banking',
  'business',
  'card-issuers',
  'consumer-finance',
  'cooperative-banks',
  'corporate-strategy',
  'derivatives',
  'exchanges',
  'finance',
  'financial-conglomerates',
  'financial-licenses',
  'financial-regulators',
  'fintech',
  'foreign-financial-institutions',
  'insurance',
  'JapanFG',
  'leasing-firms',
  'life-insurers',
  'loyalty',
  'manufacturer-finance',
  'megabanks',
  'money-market',
  'non-life-insurers',
  'non-profit',
  'payment-firms',
  'payments',
  'policy-finance',
  'real-estate-finance',
  'regional-banks',
  'retail',
  'securities',
  'securities-firms',
  'security',
  'structured-finance',
  'systems',
  'trade',
  'trading-company-finance',
  'trust-banks',
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

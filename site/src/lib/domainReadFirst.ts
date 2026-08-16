import { compareEntryRoute, entryRoute } from './routes';

type EntryLike = {
  id: string;
  data?: Record<string, unknown>;
};

const DOMAIN_READ_FIRST: Record<string, readonly string[]> = {
  megabanks: ['megabanks/mufg', 'megabanks/smfg', 'megabanks/mizuho-fg'],
  'financial-regulators': ['financial-regulators/fsa', 'financial-regulators/boj'],
  banking: ['banking/japan-banking-license-tier-comparison-matrix'],
  payments: ['payments/japan-payment-clearing-and-settlement-infrastructure'],
  securities: ['securities/japan-market-infrastructure-map'],
};

const READ_FIRST_TERMS = [
  'overview',
  'map',
  'matrix',
  'comparison',
  'system',
  'landscape',
  'operating-model',
  'registry',
  'timeline',
  'framework',
];

function lexicalScore(route: string, title: string): number {
  const haystack = `${route} ${title}`.toLowerCase();
  return READ_FIRST_TERMS.reduce(
    (score, term, index) => (haystack.includes(term) ? score + READ_FIRST_TERMS.length - index : score),
    0,
  );
}

export function readFirstEntries<T extends EntryLike>(
  domain: string,
  entries: T[],
  titleFor: (entry: T) => string,
): T[] {
  const byRoute = new Map(entries.map((entry) => [entryRoute(entry), entry]));
  const edited = (DOMAIN_READ_FIRST[domain] ?? [])
    .map((route) => byRoute.get(route))
    .filter((entry): entry is T => Boolean(entry));
  if (edited.length) return edited.slice(0, 3);

  return [...entries]
    .map((entry) => ({
      entry,
      score: lexicalScore(entryRoute(entry), titleFor(entry)),
    }))
    .sort((a, b) => b.score - a.score || compareEntryRoute(a.entry, b.entry))
    .slice(0, Math.min(3, entries.length))
    .map(({ entry }) => entry);
}

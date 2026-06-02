import { join } from 'node:path';

export const HERE = import.meta.dir;
export const REPO = join(HERE, '..', '..');
export const I18N = join(HERE, '..', 'src', 'content', 'i18n');

export const ENTRY_DOMAIN_DIRS = [
  'agent-economy',
  'banking',
  'business',
  'corporate-strategy',
  'derivatives',
  'exchanges',
  'finance',
  'fintech',
  'governance',
  'insurance',
  'JapanFG',
  'loyalty',
  'manufacturing',
  'money-market',
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

export function* walkEntries(walk) {
  for (const domain of ENTRY_DOMAIN_DIRS) {
    yield* walk(join(REPO, domain), domain);
  }
}

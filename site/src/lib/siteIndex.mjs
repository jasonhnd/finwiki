import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const SITE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(SITE_ROOT, '..');

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

let map = null;
const titleMaps = new Map();

const DOMAIN_TITLES = {
  ja: {
    japanfg: '日本金融機関',
    megabanks: 'メガバンク',
    'regional-banks': '地方銀行',
    'cooperative-banks': '協同組織金融',
    'trust-banks': '信託銀行',
    'life-insurers': '生命保険',
    'non-life-insurers': '損害保険',
    'securities-firms': '証券会社',
    'asset-managers': '資産運用',
    'payment-firms': '決済事業者',
    'card-issuers': 'カード会社',
    'leasing-firms': 'リース',
    'consumer-finance': '消費者金融',
    'trading-company-finance': '商社金融',
    'financial-conglomerates': '総合商社',
    'foreign-financial-institutions': '外資系金融機関',
    'financial-regulators': '金融規制当局',
    'financial-licenses': '金融免許',
    exchanges: '取引所・VASP',
    fintech: 'フィンテック',
    systems: 'システム基盤',
    'agent-economy': 'エージェント経済',
    payments: '決済',
    banking: '銀行・政策',
    'policy-finance': '政策金融',
    derivatives: 'デリバティブ',
    insurance: '保険',
    securities: '証券',
    'structured-finance': 'ストラクチャードファイナンス',
    'real-estate-finance': '不動産金融',
    finance: '金融・M&A',
    business: '事業ケース',
    loyalty: 'ポイント経済',
    'money-market': '短期金融市場',
    'manufacturer-finance': '製造業金融',
    retail: '小売',
    'corporate-strategy': '企業戦略',
    security: 'セキュリティ',
    'non-profit': '非営利',
    trade: '貿易',
  },
  en: {
    japanfg: 'Japanese Financial Groups',
    megabanks: 'Megabanks',
    'regional-banks': 'Regional banks',
    'cooperative-banks': 'Cooperative banks',
    'trust-banks': 'Trust banks',
    'life-insurers': 'Life insurers',
    'non-life-insurers': 'Non-life insurers',
    'securities-firms': 'Securities firms',
    'asset-managers': 'Asset managers',
    'payment-firms': 'Payment firms',
    'card-issuers': 'Card issuers',
    'leasing-firms': 'Leasing firms',
    'consumer-finance': 'Consumer finance',
    'trading-company-finance': 'Trading-company finance',
    'financial-conglomerates': 'Financial conglomerates',
    'foreign-financial-institutions': 'Foreign institutions',
    'financial-regulators': 'Financial regulators',
    'financial-licenses': 'Financial licenses',
    exchanges: 'Exchanges & VASP',
    fintech: 'Fintech',
    systems: 'Systems & Infrastructure',
    'agent-economy': 'Agent Economy',
    payments: 'Payments',
    banking: 'Banking',
    'policy-finance': 'Policy Finance',
    derivatives: 'Derivatives',
    insurance: 'Insurance',
    securities: 'Securities',
    'structured-finance': 'Structured Finance',
    'real-estate-finance': 'Real-Estate Finance',
    finance: 'Corporate Finance',
    business: 'Business Cases',
    loyalty: 'Loyalty',
    'money-market': 'Money Market',
    'manufacturer-finance': 'Manufacturer Finance',
    retail: 'Retail',
    'corporate-strategy': 'Corporate Strategy',
    security: 'Security',
    'non-profit': 'Non-Profit',
    trade: 'Trade',
  },
};

function toPosix(value) {
  return String(value).replace(/\\/g, '/');
}

function routePath(value) {
  return toPosix(value).replace(/\.md$/i, '').toLowerCase();
}

function walk(dir, rel = '') {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const nextRel = rel ? `${rel}/${entry.name}` : entry.name;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(fullPath, nextRel));
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'INDEX.md') {
      out.push(nextRel);
    }
  }
  return out;
}

function parseAliases(text) {
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return [];

  const values = [];
  const inline = frontmatter[1].match(/^aliases:\s*\[([^\]]*)\]/m);
  if (inline) values.push(...inline[1].split(','));

  const block = frontmatter[1].match(/^aliases:\s*\n((?:[ \t]*-[ \t]*.+\n?)+)/m);
  if (block) {
    for (const line of block[1].split('\n')) {
      const match = line.match(/^[ \t]*-[ \t]*(.+?)[ \t]*$/);
      if (match) values.push(match[1]);
    }
  }

  return values
    .map((item) => item.trim().replace(/^["']|["']$/g, '').toLowerCase())
    .filter(Boolean);
}

function cleanTitle(value) {
  return String(value ?? '')
    .replace(/^\uFEFF/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function unquoteScalar(value) {
  const raw = String(value ?? '').trim();
  if (!raw || raw === '""' || raw === "''") return '';
  const quoted = raw.match(/^["']([\s\S]*)["']$/);
  return cleanTitle(quoted ? quoted[1] : raw);
}

function parseTitle(text) {
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const body = frontmatter ? text.slice(frontmatter[0].length) : text;
  const titleLine = frontmatter?.[1].match(/^title:\s*(.*)$/m)?.[1];
  const frontmatterTitle = unquoteScalar(titleLine);
  if (frontmatterTitle) return frontmatterTitle;

  const heading = body.match(/^\uFEFF?#\s+(.+?)\s*$/m)?.[1];
  return cleanTitle(heading);
}

function register(index, key, target) {
  if (!key) return;
  const normalized = String(key).trim().toLowerCase();
  if (normalized && !index.has(normalized)) index.set(normalized, target);
}

function build() {
  const index = new Map();
  for (const domain of ENTRY_DOMAIN_DIRS) {
    const domainRoot = path.join(REPO_ROOT, domain);
    if (!existsSync(domainRoot)) continue;

    for (const rel of walk(domainRoot)) {
      const sourcePath = `${domain}/${rel}`;
      const target = routePath(sourcePath);
      const stem = target.split('/').pop();
      register(index, target, target);
      register(index, sourcePath.replace(/\.md$/i, ''), target);
      register(index, stem, target);

      try {
        const text = readFileSync(path.join(domainRoot, rel), 'utf8');
        for (const alias of parseAliases(text)) {
          register(index, alias, target);
        }
      } catch {
        // Ignore unreadable files; the audit gate catches real corpus issues.
      }
    }
  }
  return index;
}

function buildLocalizedTitles(lang) {
  const titles = new Map();
  const domainTitles = DOMAIN_TITLES[lang] ?? {};
  for (const [domain, title] of Object.entries(domainTitles)) {
    titles.set(`domains/${domain}`, title);
  }

  const root = path.join(SITE_ROOT, 'src', 'content', 'i18n', lang);
  if (!existsSync(root)) return titles;

  for (const rel of walk(root)) {
    const target = routePath(rel);
    try {
      const title = parseTitle(readFileSync(path.join(root, rel), 'utf8'));
      if (title) titles.set(target, title);
    } catch {
      // Best-effort title lookup. The main content build reports hard failures.
    }
  }
  return titles;
}

export function resolveWiki(target) {
  if (!map) map = build();
  const raw = String(target || '').trim();
  if (!raw) return null;

  const normalized = raw.split('|', 1)[0].split('#', 1)[0].trim();
  const indexMatch = normalized.match(/^([^/]+)(?:\/.*)?\/INDEX$/i);
  if (indexMatch) {
    return `domains/${indexMatch[1].toLowerCase()}`;
  }

  const key = normalized.toLowerCase();
  return map.get(key) ?? map.get(key.split('/').pop()) ?? null;
}

export function localizedTitle(lang, target) {
  const safeLang = ['ja', 'en'].includes(lang) ? lang : 'ja';
  if (!titleMaps.has(safeLang)) {
    titleMaps.set(safeLang, buildLocalizedTitles(safeLang));
  }
  return titleMaps.get(safeLang).get(routePath(target)) ?? null;
}

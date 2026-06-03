import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const SITE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(SITE_ROOT, '..');

const ENTRY_DOMAIN_DIRS = [
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

let map = null;
const titleMaps = new Map();

const DOMAIN_TITLES = {
  ja: {
    japanfg: '日本金融機関',
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
    manufacturing: '製造業',
    retail: '小売',
    'corporate-strategy': '企業戦略',
    security: 'セキュリティ',
    governance: 'ガバナンス',
    trade: '貿易',
  },
  en: {
    japanfg: 'Japanese Financial Groups',
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
    manufacturing: 'Manufacturing',
    retail: 'Retail',
    'corporate-strategy': 'Corporate Strategy',
    security: 'Security',
    governance: 'Governance',
    trade: 'Trade',
  },
  zh: {
    japanfg: '日本金融机构',
    exchanges: '交易所与 VASP',
    fintech: '金融科技',
    systems: '系统基础设施',
    'agent-economy': '智能体经济',
    payments: '支付',
    banking: '银行',
    'policy-finance': '政策金融',
    derivatives: '衍生品',
    insurance: '保险',
    securities: '证券',
    'structured-finance': '结构化融资',
    'real-estate-finance': '房地产金融',
    finance: '金融与并购',
    business: '商业案例',
    loyalty: '积分经济',
    'money-market': '货币市场',
    manufacturing: '制造业',
    retail: '零售',
    'corporate-strategy': '企业战略',
    security: '安全',
    governance: '治理',
    trade: '贸易',
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
  const safeLang = ['ja', 'en', 'zh'].includes(lang) ? lang : 'ja';
  if (!titleMaps.has(safeLang)) {
    titleMaps.set(safeLang, buildLocalizedTitles(safeLang));
  }
  return titleMaps.get(safeLang).get(routePath(target)) ?? null;
}

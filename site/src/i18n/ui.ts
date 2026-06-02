// FinWiki human-edition UI strings (trilingual). Entry-body translation is a
// separate layer; site chrome / labels are centralized here.
export const languages = { ja: '日本語', en: 'English', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const langCodes = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'ja';

export const ui = {
  ja: {
    'site.title': 'FinWiki — 金融ナレッジグラフ',
    'site.tagline': '公開一次情報にもとづく、三言語・出典つきの金融事実ベース。',

    'nav.home': 'ホーム',
    'nav.domains': '領域マップ',
    'nav.browse': '全項目',
    'nav.ai': 'AI surface',
    'nav.search': '検索',

    'home.intro':
      'FinWiki は日本と世界の金融機関・制度・市場構造を、出典付きで構造化した公開ナレッジベースです。',
    'home.searchPlaceholder': '機関・制度・キーワードで検索…',
    'home.startReading': 'まず読む',
    'home.recent': '最近更新された項目',
    'home.recentNote': '出典に紐づく最新の更新から。',
    'home.domainMap': '領域マップ',
    'home.domainMapNote': '関心のある領域から辿る。',
    'home.viewAllDomains': 'すべての領域を見る',
    'home.ai': 'AI・クローラー向け surface',
    'home.aiNote': '人間向けページと機械可読マニフェストは同一コーパスから生成されます。',

    'domains.title': '領域マップ',
    'domains.note': '{entries} 項目 / {domains} 領域',

    'domain.entries': '項目',
    'domain.translated': 'この言語の訳',
    'domain.viewAll': 'この領域の全項目',

    'browse.title': '全項目',
    'browse.filter': '項目名で絞り込み…',
    'browse.noMatch': '一致する項目がありません。',

    'entry.confidence': '確度',
    'entry.updated': '更新',
    'entry.reviewBy': '要再確認',
    'entry.sources': '出典',
    'entry.tags': 'タグ',
    'entry.related': '関連項目',
    'entry.original': '原文（日本語）',
    'entry.machine': '機械翻訳',
    'entry.needsReview': '要確認',
    'entry.onThisPage': '目次',
    'entry.inThisDomain': '同じ領域の項目',

    'footer.note': '公開一次情報にもとづく金融ナレッジベース。事実は各項目の出典に遡れます。',
    'footer.snapshot': '最終公開スナップショット',
  },
  en: {
    'site.title': 'FinWiki — Financial Knowledge Graph',
    'site.tagline': 'A trilingual, source-backed financial fact base built on public primary information.',

    'nav.home': 'Home',
    'nav.domains': 'Domains',
    'nav.browse': 'All entries',
    'nav.ai': 'AI surface',
    'nav.search': 'Search',

    'home.intro':
      'FinWiki is a public knowledge base that structures Japanese and global financial institutions, regimes, and market plumbing with sourced facts.',
    'home.searchPlaceholder': 'Search institutions, regimes, keywords…',
    'home.startReading': 'Start reading',
    'home.recent': 'Recently updated',
    'home.recentNote': 'The latest source-linked revisions.',
    'home.domainMap': 'Domain map',
    'home.domainMapNote': 'Navigate from the area you care about.',
    'home.viewAllDomains': 'View all domains',
    'home.ai': 'AI & crawler surface',
    'home.aiNote': 'Human pages and machine-readable manifests are generated from the same corpus.',

    'domains.title': 'Domain map',
    'domains.note': '{entries} entries · {domains} domains',

    'domain.entries': 'entries',
    'domain.translated': 'translated here',
    'domain.viewAll': 'All entries in this domain',

    'browse.title': 'All entries',
    'browse.filter': 'Filter by entry name…',
    'browse.noMatch': 'No entries match.',

    'entry.confidence': 'Confidence',
    'entry.updated': 'Updated',
    'entry.reviewBy': 'Review by',
    'entry.sources': 'Sources',
    'entry.tags': 'Tags',
    'entry.related': 'Related entries',
    'entry.original': 'Original (JA)',
    'entry.machine': 'Machine-translated',
    'entry.needsReview': 'needs review',
    'entry.onThisPage': 'On this page',
    'entry.inThisDomain': 'In this domain',

    'footer.note': 'A public-source financial knowledge base. Every fact traces back to the sources cited in each entry.',
    'footer.snapshot': 'Last public snapshot',
  },
  zh: {
    'site.title': 'FinWiki — 金融知识图谱',
    'site.tagline': '基于公开一手信源的三语、带出处金融事实库。',

    'nav.home': '首页',
    'nav.domains': '领域地图',
    'nav.browse': '全部条目',
    'nav.ai': 'AI surface',
    'nav.search': '搜索',

    'home.intro':
      'FinWiki 是一个公开知识库，用带出处的事实结构化呈现日本与全球的金融机构、制度与市场基础设施。',
    'home.searchPlaceholder': '搜索机构、制度、关键词…',
    'home.startReading': '从这里开始',
    'home.recent': '最近更新',
    'home.recentNote': '最新的、可溯源的修订。',
    'home.domainMap': '领域地图',
    'home.domainMapNote': '从你关心的领域进入。',
    'home.viewAllDomains': '查看全部领域',
    'home.ai': '面向 AI 与爬虫的 surface',
    'home.aiNote': '人类页面与机器可读清单由同一套语料生成。',

    'domains.title': '领域地图',
    'domains.note': '{entries} 条目 · {domains} 个领域',

    'domain.entries': '条目',
    'domain.translated': '本语言已译',
    'domain.viewAll': '本领域全部条目',

    'browse.title': '全部条目',
    'browse.filter': '按条目名筛选…',
    'browse.noMatch': '没有匹配的条目。',

    'entry.confidence': '置信度',
    'entry.updated': '更新',
    'entry.reviewBy': '复核期限',
    'entry.sources': '出处',
    'entry.tags': '标签',
    'entry.related': '相关条目',
    'entry.original': '原文（日）',
    'entry.machine': '机器翻译',
    'entry.needsReview': '待校',
    'entry.onThisPage': '本页目录',
    'entry.inThisDomain': '同领域条目',

    'footer.note': '基于公开一手信源的金融事实库。每条事实都可回溯到条目所列出处。',
    'footer.snapshot': '最近公开快照',
  },
} as const;

export type UIKey = keyof (typeof ui)['ja'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

// base path (supports subpath hosting). Normalized without trailing slash.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' or '/app'

// Language-prefixed internal URL with base. u('ja','japanfg/mufg/') -> '/ja/japanfg/mufg/'.
export function u(lang: Lang, rest = ''): string {
  return `${BASE}/${lang}/${rest.replace(/^\//, '')}`;
}

// Remaining path after base + language prefix (for language switch links).
export function restOf(pathname: string): string {
  let p = pathname;
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  p = p.replace(/^\/(ja|en|zh)(?=\/|$)/, '');
  return p.replace(/^\//, '');
}

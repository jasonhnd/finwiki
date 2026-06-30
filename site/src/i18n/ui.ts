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
    'site.subtitle': '公開情報の金融フィールドガイド',

    'nav.home': 'ホーム',
    'nav.domains': '領域マップ',
    'nav.allDomains': 'すべての領域',
    'nav.browse': '全項目',
    'nav.ai': 'AI向け資料',
    'nav.search': '検索',

    'home.intro':
      'FinWiki は日本と世界の金融機関・制度・市場構造を、出典付きで構造化した公開ナレッジベースです。',
    'home.headline': '金融機関・制度・市場構造を、読む順番まで含めて辿る。',
    'home.deck':
      '公開情報だけを使い、金融グループ、決済、証券市場、政策金融、規制制度を相互に接続して読むための入口です。検索はすぐ使えますが、まずは編集済みの導線から全体像をつかめます。',
    'home.searchKicker': '検索',
    'home.searchPlaceholder': '機関・制度・キーワードで検索…',
    'home.startReading': 'まず読む',
    'home.recent': '最近更新された項目',
    'home.recentNote': '出典に紐づく最新の更新から。',
    'home.latestReviewed': 'Latest reviewed',
    'home.latestReviewedNote': '更新日が明示された項目から、直近レビューの入口を並べています。',
    'home.canonicalRoutes': 'Canonical routes',
    'home.canonicalRoutesNote': '制度・市場・比較表を横断して読むための基準ルート。',
    'home.domainMap': '領域マップ',
    'home.domainMapNote': '関心のある領域から辿る。',
    'home.guidedTaxonomy': '読むための領域地図',
    'home.guidedTaxonomyNote': '分類名ではなく、調べたい問いから入りやすいように領域をまとめています。',
    'home.corpusProof': '収録状況',
    'home.viewAllDomains': 'すべての領域を見る',
    'home.ai': 'AI・クローラー向け資料',
    'home.aiNote': '人間向けページと機械可読マニフェストは同一コーパスから生成されます。',
    'home.aiTechLabel': 'technical metadata',
    'home.aiGuide': '案内',
    'home.aiManifest': '全体マニフェスト',
    'home.aiIndex': '検索用マップ',
    'home.aiSitemap': 'URL一覧',

    'domains.title': '領域マップ',
    'domains.note': '{entries} 項目 / {domains} 領域',
    'domains.deck':
      '金融機関、決済、資本市場、保険、政策・規制、企業戦略を、読者の調査導線に近い編集セクションとして整理しています。',
    'domains.groupEntryCount': 'このセクションの項目数',

    'domain.entries': '項目',
    'domain.translated': 'この言語の訳',
    'domain.viewAll': 'この領域の全項目',
    'domain.openerLabel': 'Domain briefing',
    'domain.covers': 'この領域で扱うこと',
    'domain.readFirst': 'まず読む',
    'domain.canonicalAnchors': '基準アンカー',
    'domain.routeList': '項目一覧',
    'domain.routeListNote': 'ルート名は確認・引用しやすいように表示しています。',
    'domain.routeSlug': 'route',

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
    'footer.llms': 'LLM向け案内',
    'footer.aiIndex': 'AIインデックス',
    'footer.sitemap': 'サイトマップ',
    'footer.langs': '日本語 · 英語 · 中国語',

    'skip.content': '本文へスキップ',
    'aria.home': 'FinWiki ホーム',
    'aria.primary': '主要ナビゲーション',
    'aria.footer': 'フッター',
    'aria.language': '言語',
    'aria.breadcrumb': 'パンくずリスト',
    'aria.jumpToDomain': '領域へのジャンプ',
    'theme.toggle': '配色テーマを切り替え',
    'theme.toggleTitle': '配色テーマ',
  },
  en: {
    'site.title': 'FinWiki — Financial Knowledge Graph',
    'site.tagline': 'A trilingual, source-backed financial fact base built on public primary information.',
    'site.subtitle': 'Public-source finance field guide',

    'nav.home': 'Home',
    'nav.domains': 'Domains',
    'nav.allDomains': 'All domains',
    'nav.browse': 'All entries',
    'nav.ai': 'AI surface',
    'nav.search': 'Search',

    'home.intro':
      'FinWiki is a public knowledge base that structures Japanese and global financial institutions, regimes, and market plumbing with sourced facts.',
    'home.headline': 'Read financial institutions, rules, and market structure in a deliberate order.',
    'home.deck':
      'FinWiki connects public-source coverage of financial groups, payments, securities markets, policy finance, and regulation. Search is still in reach, but the first path is editorial: start with the routes that explain the map.',
    'home.searchKicker': 'Search',
    'home.searchPlaceholder': 'Search institutions, regimes, keywords…',
    'home.startReading': 'Start reading',
    'home.recent': 'Recently updated',
    'home.recentNote': 'The latest source-linked revisions.',
    'home.latestReviewed': 'Latest reviewed',
    'home.latestReviewedNote': 'Recent entry points with explicit update metadata.',
    'home.canonicalRoutes': 'Canonical routes',
    'home.canonicalRoutesNote': 'Reference paths for reading across regimes, markets, and comparison tables.',
    'home.domainMap': 'Domain map',
    'home.domainMapNote': 'Navigate from the area you care about.',
    'home.guidedTaxonomy': 'Guided taxonomy',
    'home.guidedTaxonomyNote': 'Sections are organized around reader intent, not only inventory counts.',
    'home.corpusProof': 'Corpus proof',
    'home.viewAllDomains': 'View all domains',
    'home.ai': 'AI & crawler surface',
    'home.aiNote': 'Human pages and machine-readable manifests are generated from the same corpus.',
    'home.aiTechLabel': 'technical metadata',
    'home.aiGuide': 'guide',
    'home.aiManifest': 'manifest',
    'home.aiIndex': 'retrieval map',
    'home.aiSitemap': 'URL inventory',

    'domains.title': 'Domain map',
    'domains.note': '{entries} entries · {domains} domains',
    'domains.deck':
      'Financial institutions, payments, capital markets, insurance, policy, regulation, and corporate strategy are grouped as editorial sections for research, not as a raw directory.',
    'domains.groupEntryCount': 'entries in section',

    'domain.entries': 'entries',
    'domain.translated': 'translated here',
    'domain.viewAll': 'All entries in this domain',
    'domain.openerLabel': 'Domain briefing',
    'domain.covers': 'What this domain covers',
    'domain.readFirst': 'Read first',
    'domain.canonicalAnchors': 'Canonical anchors',
    'domain.routeList': 'Entry routes',
    'domain.routeListNote': 'Route slugs stay visible for citation and verification.',
    'domain.routeSlug': 'route',

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
    'footer.llms': 'llms.txt',
    'footer.aiIndex': 'ai-index.json',
    'footer.sitemap': 'sitemap.xml',
    'footer.langs': 'JA · EN · ZH',

    'skip.content': 'Skip to content',
    'aria.home': 'FinWiki home',
    'aria.primary': 'Primary navigation',
    'aria.footer': 'Footer',
    'aria.language': 'Language',
    'aria.breadcrumb': 'Breadcrumb',
    'aria.jumpToDomain': 'Jump to domain',
    'theme.toggle': 'Toggle color theme',
    'theme.toggleTitle': 'Toggle theme',
  },
  zh: {
    'site.title': 'FinWiki — 金融知识图谱',
    'site.tagline': '基于公开一手信源的三语、带出处金融事实库。',
    'site.subtitle': '公开来源金融指南',

    'nav.home': '首页',
    'nav.domains': '领域地图',
    'nav.allDomains': '全部领域',
    'nav.browse': '全部条目',
    'nav.ai': 'AI 资料',
    'nav.search': '搜索',

    'home.intro':
      'FinWiki 是一个公开知识库，用带出处的事实结构化呈现日本与全球的金融机构、制度与市场基础设施。',
    'home.headline': '按清晰阅读顺序理解金融机构、制度与市场结构。',
    'home.deck':
      'FinWiki 只使用公开来源，把金融集团、支付、证券市场、政策金融与监管制度连接成可阅读的知识入口。搜索仍在首屏，但页面先给出经过编辑的阅读路径。',
    'home.searchKicker': '搜索',
    'home.searchPlaceholder': '搜索机构、制度、关键词…',
    'home.startReading': '从这里开始',
    'home.recent': '最近更新',
    'home.recentNote': '最新的、可溯源的修订。',
    'home.latestReviewed': '最近复核',
    'home.latestReviewedNote': '基于带有更新日期的条目，给出最新可读入口。',
    'home.canonicalRoutes': '基准路径',
    'home.canonicalRoutesNote': '跨制度、市场与对照表阅读时优先使用的路径。',
    'home.domainMap': '领域地图',
    'home.domainMapNote': '从你关心的领域进入。',
    'home.guidedTaxonomy': '阅读导向的领域地图',
    'home.guidedTaxonomyNote': '按读者问题组织领域，而不是只展示库存数量。',
    'home.corpusProof': '语料覆盖',
    'home.viewAllDomains': '查看全部领域',
    'home.ai': '面向 AI 与爬虫的资料',
    'home.aiNote': '人类页面与机器可读清单由同一套语料生成。',
    'home.aiTechLabel': 'technical metadata',
    'home.aiGuide': '指南',
    'home.aiManifest': '完整清单',
    'home.aiIndex': '检索地图',
    'home.aiSitemap': 'URL 清单',

    'domains.title': '领域地图',
    'domains.note': '{entries} 条目 · {domains} 个领域',
    'domains.deck':
      '金融机构、支付、资本市场、保险、政策监管与企业战略被整理成面向研究路径的编辑分区，而不是原始目录。',
    'domains.groupEntryCount': '本分区条目数',

    'domain.entries': '条目',
    'domain.translated': '本语言已译',
    'domain.viewAll': '本领域全部条目',
    'domain.openerLabel': '领域简报',
    'domain.covers': '本领域覆盖',
    'domain.readFirst': '先读这些',
    'domain.canonicalAnchors': '基准锚点',
    'domain.routeList': '条目路径',
    'domain.routeListNote': '保留 route slug，方便引用与核验。',
    'domain.routeSlug': 'route',

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
    'footer.llms': 'LLM 指南',
    'footer.aiIndex': 'AI 索引',
    'footer.sitemap': '站点地图',
    'footer.langs': '日文 · 英文 · 中文',

    'skip.content': '跳到正文',
    'aria.home': 'FinWiki 首页',
    'aria.primary': '主导航',
    'aria.footer': '页脚',
    'aria.language': '语言',
    'aria.breadcrumb': '面包屑',
    'aria.jumpToDomain': '跳转到领域',
    'theme.toggle': '切换配色主题',
    'theme.toggleTitle': '配色主题',
  },
} as const;

export type UIKey = keyof (typeof ui)['ja'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

export const rootEditorial = {
  kicker: 'Public finance field guide',
  decks: {
    ja: '日本と世界の金融機関・制度・市場構造を、公開情報だけで辿るための編集済みフィールドガイドです。',
    en: 'A public-source field guide for reading financial institutions, regimes, payments, markets, and policy across Japan and global contexts.',
    zh: '面向日本与全球金融机构、制度、支付、市场与政策的公开来源阅读指南。',
  },
  entryPaths: [
    { href: '/ja/', code: 'JA', label: '日本語', note: '一次情報のニュアンスを最も細かく辿る入口。' },
    { href: '/en/', code: 'EN', label: 'English', note: 'Use translated routes for global comparison and cross-border reading.' },
    { href: '/zh/', code: 'ZH', label: '简体中文', note: '用简体中文阅读机构、制度与市场结构。' },
  ],
  startLanes: [
    {
      id: 'japan-core',
      title: { ja: '日本の中核金融機関', en: 'Japan core institutions', zh: '日本核心金融机构' },
      note: {
        ja: 'メガバンク、金融グループ、地方銀行、協同組織を俯瞰する入口。',
        en: 'Start with the banks, groups, regional banks, and cooperative systems that anchor Japan finance.',
        zh: '从大型银行、金融集团、地方银行与协同组织金融理解日本金融核心。',
      },
      href: '/ja/domains/japanfg/',
      domains: ['japanfg', 'megabanks', 'regional-banks'],
      routes: ['finance/japan-listed-financial-groups-investable-universe', 'banking/japan-banking-license-tier-comparison-matrix'],
    },
    {
      id: 'payments-cards',
      title: { ja: '決済・カード', en: 'Payments & cards', zh: '支付与银行卡' },
      note: {
        ja: 'カード、コード決済、清算、加盟店手数料、発行・加盟店管理の分解図。',
        en: 'Read card issuing, acquiring, clearing, merchant economics, and Japan cashless rails together.',
        zh: '连接发卡、收单、清算、商户费率与日本无现金支付轨道。',
      },
      href: '/ja/domains/payments/',
      domains: ['payments', 'payment-firms', 'card-issuers'],
      routes: ['payments/japan-payment-clearing-and-settlement-infrastructure', 'payments/japan-interchange-and-merchant-fee-stack'],
    },
    {
      id: 'markets-securities',
      title: { ja: '取引所・証券市場', en: 'Exchanges & securities', zh: '交易所与证券市场' },
      note: {
        ja: '市場インフラ、証券会社、VASP、暗号資産自主規制まで横断します。',
        en: 'Connect market infrastructure, broker-dealers, VASPs, and crypto self-regulation.',
        zh: '横向阅读市场基础设施、证券公司、VASP 与加密资产自律规则。',
      },
      href: '/ja/domains/exchanges/',
      domains: ['exchanges', 'securities', 'securities-firms'],
      routes: ['securities/japan-market-infrastructure-map', 'exchanges/jp-vasp-regulatory-timeline'],
    },
    {
      id: 'policy-regulation',
      title: { ja: '政策・規制', en: 'Policy & regulation', zh: '政策与监管' },
      note: {
        ja: '金融庁、日銀、政策金融、免許制度を制度側から読むための導線。',
        en: 'Use regulator, central-bank, policy-finance, and licensing routes as the institutional frame.',
        zh: '以监管机构、央行、政策金融与牌照制度作为制度框架。',
      },
      href: '/ja/domains/financial-regulators/',
      domains: ['financial-regulators', 'financial-licenses', 'policy-finance'],
      routes: ['financial-regulators/fsa', 'financial-regulators/boj', 'policy-finance/japan-policy-finance-system'],
    },
    {
      id: 'comparison-matrices',
      title: { ja: '比較表・グローバル視点', en: 'Global comparison matrices', zh: '全球对照矩阵' },
      note: {
        ja: '制度差、資本規制、決済、保険、M&A を比較表から読み始めます。',
        en: 'Begin with matrices that compare regimes, capital rules, payments, insurance, and deal mechanics.',
        zh: '从对照矩阵进入制度差异、资本规则、支付、保险与交易机制。',
      },
      href: '/ja/insurance/global-solvency-framework-comparison-matrix/',
      domains: ['insurance', 'finance', 'policy-finance'],
      routes: ['insurance/global-solvency-framework-comparison-matrix', 'finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework'],
    },
  ],
} as const;

const confidenceLabels: Record<Lang, Record<string, string>> = {
  ja: {
    certain: '確定',
    confirmed: '確認済み',
    high: '高い',
    likely: '概ね確度あり',
    possible: '可能性あり',
    tentative: '暫定',
    extracted: '抽出済み',
    unlikely: '可能性低い',
    'needs-review': '要確認',
  },
  en: {
    certain: 'Certain',
    confirmed: 'Confirmed',
    high: 'High',
    likely: 'Likely',
    possible: 'Possible',
    tentative: 'Tentative',
    extracted: 'Extracted',
    unlikely: 'Unlikely',
    'needs-review': 'Needs review',
  },
  zh: {
    certain: '确定',
    confirmed: '已确认',
    high: '高',
    likely: '大致可信',
    possible: '可能',
    tentative: '暂定',
    extracted: '已抽取',
    unlikely: '可能性低',
    'needs-review': '待校',
  },
};

export function confidenceLabel(lang: Lang, value: string): string {
  const raw = String(value ?? '').trim();
  const token = raw.match(/^[\s*_`]*([A-Za-z][A-Za-z-]*)/)?.[1]?.toLowerCase();
  if (!token) return raw;
  return confidenceLabels[lang]?.[token] ?? confidenceLabels[defaultLang][token] ?? raw;
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

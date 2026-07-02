// FinWiki human-edition UI strings (bilingual). Entry-body translation is a
// separate layer; site chrome / labels are centralized here.
export type Lang = 'ja' | 'en';
export const languages: Record<Lang, string> = { ja: '日本語', en: 'English' } as const;
export const langCodes = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'ja';

export const ui = {
  ja: {
    'site.title': 'FinWiki — 金融ナレッジグラフ',
    'site.tagline': '公開一次情報にもとづく、日英二言語・出典つきの金融事実ベース。',
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
    'home.canonicalRoutesKicker': '読む順番',
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
    'wikilink.preview': 'リンク先プレビュー',

    'footer.note': '公開一次情報にもとづく金融ナレッジベース。事実は各項目の出典に遡れます。',
    'footer.snapshot': '最終公開スナップショット',
    'footer.llms': 'LLM向け案内',
    'footer.aiIndex': 'AIインデックス',
    'footer.sitemap': 'サイトマップ',
    'footer.langs': '日本語 · English',

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
    'site.tagline': 'A bilingual Japanese-English, source-backed financial fact base built on public primary information.',
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
    'home.canonicalRoutesKicker': 'Route guide',
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
    'wikilink.preview': 'Link preview',

    'footer.note': 'A public-source financial knowledge base. Every fact traces back to the sources cited in each entry.',
    'footer.snapshot': 'Last public snapshot',
    'footer.llms': 'llms.txt',
    'footer.aiIndex': 'ai-index.json',
    'footer.sitemap': 'sitemap.xml',
    'footer.langs': 'JA · EN',

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
  },
  entryPaths: [
    { href: '/ja/', code: 'JA', label: '日本語', note: '一次情報のニュアンスを最も細かく辿る入口。' },
    { href: '/en/', code: 'EN', label: 'English', note: 'Use translated routes for global comparison and cross-border reading.' },
  ],
  startLanes: [
    {
      id: 'japan-core',
      title: { ja: '日本の中核金融機関', en: 'Japan core institutions' },
      note: {
        ja: 'メガバンク、金融グループ、地方銀行、協同組織を俯瞰する入口。',
        en: 'Start with the banks, groups, regional banks, and cooperative systems that anchor Japan finance.',
      },
      href: '/ja/domains/japanfg/',
      domains: ['japanfg', 'megabanks', 'regional-banks'],
      routes: ['finance/japan-listed-financial-groups-investable-universe', 'banking/japan-banking-license-tier-comparison-matrix'],
    },
    {
      id: 'payments-cards',
      title: { ja: '決済・カード', en: 'Payments & cards' },
      note: {
        ja: 'カード、コード決済、清算、加盟店手数料、発行・加盟店管理の分解図。',
        en: 'Read card issuing, acquiring, clearing, merchant economics, and Japan cashless rails together.',
      },
      href: '/ja/domains/payments/',
      domains: ['payments', 'payment-firms', 'card-issuers'],
      routes: ['payments/japan-payment-clearing-and-settlement-infrastructure', 'payments/japan-interchange-and-merchant-fee-stack'],
    },
    {
      id: 'markets-securities',
      title: { ja: '取引所・証券市場', en: 'Exchanges & securities' },
      note: {
        ja: '市場インフラ、証券会社、VASP、暗号資産自主規制まで横断します。',
        en: 'Connect market infrastructure, broker-dealers, VASPs, and crypto self-regulation.',
      },
      href: '/ja/domains/exchanges/',
      domains: ['exchanges', 'securities', 'securities-firms'],
      routes: ['securities/japan-market-infrastructure-map', 'exchanges/jp-vasp-regulatory-timeline'],
    },
    {
      id: 'policy-regulation',
      title: { ja: '政策・規制', en: 'Policy & regulation' },
      note: {
        ja: '金融庁、日銀、政策金融、免許制度を制度側から読むための導線。',
        en: 'Use regulator, central-bank, policy-finance, and licensing routes as the institutional frame.',
      },
      href: '/ja/domains/financial-regulators/',
      domains: ['financial-regulators', 'financial-licenses', 'policy-finance'],
      routes: ['financial-regulators/fsa', 'financial-regulators/boj', 'policy-finance/japan-policy-finance-system'],
    },
    {
      id: 'comparison-matrices',
      title: { ja: '比較表・グローバル視点', en: 'Global comparison matrices' },
      note: {
        ja: '制度差、資本規制、決済、保険、M&A を比較表から読み始めます。',
        en: 'Begin with matrices that compare regimes, capital rules, payments, insurance, and deal mechanics.',
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
  p = p.replace(/^\/(ja|en)(?=\/|$)/, '');
  return p.replace(/^\//, '');
}

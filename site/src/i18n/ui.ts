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
    'home.headline': '金融機関と制度を、読む順番で辿る。',
    'home.deck':
      '公開情報だけを使い、金融グループ、決済、証券市場、政策金融、規制制度を相互に接続して読むための入口です。検索はすぐ使えますが、まずは編集済みの導線から全体像をつかめます。',
    'home.searchKicker': '検索',
    'home.searchPlaceholder': '機関・制度・キーワードで検索…',
    'home.startHere': 'まず読む',
    'home.startHereNote': '編集した入口から読む。最近更新したファイル一覧ではない。',
    'home.startHere.megabanksTitle': 'メガバンク',
    'home.startHere.fsaTitle': '金融庁',
    'home.startHere.bankingLicenseTitle': '銀行免許の比較',
    'home.startHere.paymentsTitle': '決済・清算インフラ',
    'home.startHere.marketsTitle': '証券市場の地図',
    'home.startHere.allDomainsTitle': 'すべての領域',
    'home.startHere.megabanks': '三大メガと金融グループの入口。',
    'home.startHere.fsa': '監督と制度を読む基準点。',
    'home.startHere.bankingLicense': '銀行免許の階層と比較。',
    'home.startHere.payments': '決済と清算の基盤。',
    'home.startHere.markets': '証券市場インフラの地図。',
    'home.startHere.allDomains': '領域一覧へ進む。',
    'home.catalog': 'カタログ',
    'home.catalogNote': '第一画面の続き。領域地図、最近の更新、同一主体、機械可読リンク。',
    'home.startReading': 'まず読む',
    'home.recent': '最近更新された項目',
    'home.recentNote': '出典に紐づく最新の更新から。',
    'home.latestReviewed': '最近レビュー',
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
    'home.aiTechLabel': '機械可読',
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
    'domain.openerLabel': '領域案内',
    'domain.covers': 'この領域で扱うこと',
    'domain.readFirst': 'まず読む',
    'domain.canonicalAnchors': '基準アンカー',
    'domain.routeList': '項目一覧',
    'domain.routeListNote': '題名と要約から選ぶ。',
    'domain.routeSlug': 'route',

    'browse.title': '全項目',
    'browse.filter': '項目名で絞り込み…',
    'browse.noMatch': '一致する項目がありません。',
    'browse.results': '項目一覧',
    'browse.sortLabel': '並び替え',
    'browse.sort.recommended': 'おすすめ',
    'browse.sort.recent': '更新順',
    'browse.sort.title': 'タイトル順',
    'browse.sort.domain': '領域順',

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
    'entry.discovery': '続けて読む',
    'entry.discovery.kicker': '発見',
    'entry.discovery.related': '関連',
    'entry.discovery.next': '次に読む',
    'entry.discovery.backlinks': 'ここへリンク',
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
    'home.headline': 'Read institutions and rules in order.',
    'home.deck':
      'FinWiki connects public-source coverage of financial groups, payments, securities markets, policy finance, and regulation. Search is still in reach, but the first path is editorial: start with the routes that explain the map.',
    'home.searchKicker': 'Search',
    'home.searchPlaceholder': 'Search institutions, regimes, keywords…',
    'home.startHere': 'Start here',
    'home.startHereNote': 'Edited reading entries. Not a list of recently touched files.',
    'home.startHere.megabanksTitle': 'Megabanks',
    'home.startHere.fsaTitle': 'FSA',
    'home.startHere.bankingLicenseTitle': 'Bank-license comparison',
    'home.startHere.paymentsTitle': 'Payment infrastructure',
    'home.startHere.marketsTitle': 'Market map',
    'home.startHere.allDomainsTitle': 'All domains',
    'home.startHere.megabanks': 'The megabanks and financial-group door.',
    'home.startHere.fsa': 'The supervisory starting point.',
    'home.startHere.bankingLicense': 'Bank-license tiers and comparisons.',
    'home.startHere.payments': 'Payment and settlement infrastructure.',
    'home.startHere.markets': 'The securities-market map.',
    'home.startHere.allDomains': 'Go to the domain list.',
    'home.catalog': 'Catalog',
    'home.catalogNote': 'Below the first screen: domain map, recent updates, same-entity pairs, and machine-readable links.',
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
    'domain.routeListNote': 'Choose by title and lead.',
    'domain.routeSlug': 'route',

    'browse.title': 'All entries',
    'browse.filter': 'Filter by entry name…',
    'browse.noMatch': 'No entries match.',
    'browse.results': 'Entry list',
    'browse.sortLabel': 'Sort',
    'browse.sort.recommended': 'Recommended',
    'browse.sort.recent': 'Recently updated',
    'browse.sort.title': 'Title',
    'browse.sort.domain': 'Domain',

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
    'entry.discovery': 'Keep reading',
    'entry.discovery.kicker': 'Discovery',
    'entry.discovery.related': 'Related',
    'entry.discovery.next': 'Read next',
    'entry.discovery.backlinks': 'Links here',
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
} as const;

export const homeStartHere = [
  { id: 'megabanks', path: 'domains/megabanks/', titleKey: 'home.startHere.megabanksTitle', noteKey: 'home.startHere.megabanks' },
  { id: 'fsa', path: 'financial-regulators/fsa/', titleKey: 'home.startHere.fsaTitle', noteKey: 'home.startHere.fsa' },
  { id: 'bankingLicense', path: 'banking/japan-banking-license-tier-comparison-matrix/', titleKey: 'home.startHere.bankingLicenseTitle', noteKey: 'home.startHere.bankingLicense' },
  { id: 'payments', path: 'payments/japan-payment-clearing-and-settlement-infrastructure/', titleKey: 'home.startHere.paymentsTitle', noteKey: 'home.startHere.payments' },
  { id: 'markets', path: 'securities/japan-market-infrastructure-map/', titleKey: 'home.startHere.marketsTitle', noteKey: 'home.startHere.markets' },
  { id: 'allDomains', path: 'domains/', titleKey: 'home.startHere.allDomainsTitle', noteKey: 'home.startHere.allDomains' },
] as const;

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

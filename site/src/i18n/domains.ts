import type { Lang } from './ui';

// Domain display names and short reader-facing descriptions.
// entry.id is normalized to lowercase, so keys are lowercase route slugs.
// UI ラベル用。条目本文の翻訳とは別レイヤー。
export const domainNames: Record<string, Record<Lang, string>> = {
  'agent-economy': { ja: 'エージェント経済', en: 'Agent Economy' },
  'asset-managers': { ja: '資産運用会社', en: 'Asset Managers' },
  banking: { ja: '銀行・政策', en: 'Banking' },
  business: { ja: '事業ケース', en: 'Business Cases' },
  'card-issuers': { ja: 'カード会社', en: 'Card Issuers' },
  'consumer-finance': { ja: '消費者金融', en: 'Consumer Finance' },
  'cooperative-banks': { ja: '協同組織金融', en: 'Cooperative Banks' },
  'corporate-strategy': { ja: '企業戦略', en: 'Corporate Strategy' },
  derivatives: { ja: 'デリバティブ', en: 'Derivatives' },
  exchanges: { ja: '取引所・VASP', en: 'Exchanges & VASP' },
  finance: { ja: '金融・M&A', en: 'Corporate Finance' },
  'financial-conglomerates': { ja: '金融コングロマリット', en: 'Financial Conglomerates' },
  'financial-licenses': { ja: '金融免許', en: 'Financial Licenses' },
  'financial-regulators': { ja: '金融規制当局', en: 'Financial Regulators' },
  fintech: { ja: 'フィンテック', en: 'Fintech' },
  'foreign-financial-institutions': { ja: '外資系金融機関', en: 'Foreign Financial Institutions' },
  governance: { ja: 'ガバナンス', en: 'Governance' },
  insurance: { ja: '保険', en: 'Insurance' },
  japanfg: { ja: '日本金融機関', en: 'Japanese Financial Groups' },
  'leasing-firms': { ja: 'リース会社', en: 'Leasing Firms' },
  'life-insurers': { ja: '生命保険会社', en: 'Life Insurers' },
  loyalty: { ja: 'ポイント経済', en: 'Loyalty' },
  'manufacturer-finance': { ja: '製造業金融', en: 'Manufacturer Finance' },
  manufacturing: { ja: '製造業', en: 'Manufacturing' },
  megabanks: { ja: 'メガバンク', en: 'Megabanks' },
  'money-market': { ja: '短期金融市場', en: 'Money Market' },
  'non-life-insurers': { ja: '損害保険会社', en: 'Non-Life Insurers' },
  'non-profit': { ja: '非営利・公益法人', en: 'Non-Profit & Public Interest' },
  'payment-firms': { ja: '決済事業者', en: 'Payment Firms' },
  payments: { ja: '決済', en: 'Payments' },
  'policy-finance': { ja: '政策金融', en: 'Policy Finance' },
  'real-estate-finance': { ja: '不動産金融', en: 'Real-Estate Finance' },
  'regional-banks': { ja: '地方銀行', en: 'Regional Banks' },
  retail: { ja: '小売', en: 'Retail' },
  securities: { ja: '証券', en: 'Securities' },
  'securities-firms': { ja: '証券会社', en: 'Securities Firms' },
  security: { ja: 'セキュリティ', en: 'Security' },
  'structured-finance': { ja: 'ストラクチャードファイナンス', en: 'Structured Finance' },
  systems: { ja: 'システム基盤', en: 'Systems & Infrastructure' },
  trade: { ja: '貿易', en: 'Trade' },
  'trading-company-finance': { ja: '商社金融', en: 'Trading-Company Finance' },
  'trust-banks': { ja: '信託銀行', en: 'Trust Banks' },
};

export function domainName(slug: string, lang: Lang): string {
  return domainNames[slug]?.[lang] ?? slug;
}

export const domainDescriptions: Record<string, Record<Lang, string>> = {
  'agent-economy': {
    ja: '金融・決済・市場業務に入ってくる AI エージェント、ウォレット、決済プロトコル、運用リスクを扱います。',
    en: 'AI agents, wallets, payment protocols, and operating risks entering finance, payments, and market workflows.',
  },
  'asset-managers': {
    ja: '資産運用会社、運用プラットフォーム、商品供給、グループ内の運用機能を読む領域です。',
    en: 'Asset managers, product platforms, investment functions, and group-level asset-management roles.',
  },
  banking: {
    ja: '銀行免許、ネット銀行、共同センター、信託・決済・預金の制度境界を扱います。',
    en: 'Bank licenses, digital banks, shared infrastructure, trust, payment, and deposit boundaries.',
  },
  business: {
    ja: '金融・決済・テクノロジー企業の事業モデル、競争構造、戦略ケースを整理します。',
    en: 'Business models, competitive structures, and strategy cases across finance, payments, and technology.',
  },
  'card-issuers': {
    ja: 'カード発行会社、ブランド提携、与信、加盟店・決済グループとの接続を扱います。',
    en: 'Card issuers, brand partnerships, credit functions, and connections to acquiring and payment groups.',
  },
  'consumer-finance': {
    ja: '消費者金融、個人向け与信、保証、グループ内リテール金融機能を扱います。',
    en: 'Consumer lenders, personal credit, guarantees, and retail-finance functions inside financial groups.',
  },
  'cooperative-banks': {
    ja: '信用金庫、信用組合、農協・漁協系金融など協同組織金融の構造を扱います。',
    en: 'Shinkin banks, credit cooperatives, JA/JF finance, and cooperative financial architecture.',
  },
  'corporate-strategy': {
    ja: '企業戦略、資本政策、組織再編、事業ポートフォリオの読み方を扱います。',
    en: 'Corporate strategy, capital policy, reorganization, and portfolio decisions.',
  },
  derivatives: {
    ja: '先物、オプション、清算、証拠金、デリバティブ市場インフラを扱います。',
    en: 'Futures, options, clearing, margining, and derivatives market infrastructure.',
  },
  exchanges: {
    ja: '暗号資産交換業者、VASP 規制、自主規制、海外取引所の日本向け接点を扱います。',
    en: 'Crypto exchanges, VASP regulation, self-regulation, and foreign-platform touchpoints with Japan.',
  },
  finance: {
    ja: 'M&A、資本政策、企業価値評価、上場金融グループの投資可能性を扱います。',
    en: 'M&A, capital policy, valuation, and investable-universe framing for listed financial groups.',
  },
  'financial-conglomerates': {
    ja: '金融・商社・事業会社をまたぐ複合グループの事業接点を扱います。',
    en: 'Cross-sector conglomerates where finance, trading companies, and operating businesses meet.',
  },
  'financial-licenses': {
    ja: '銀行、証券、保険、資金移動、前払式支払手段など金融免許の境界を扱います。',
    en: 'License boundaries across banking, securities, insurance, funds transfer, and prepaid instruments.',
  },
  'financial-regulators': {
    ja: '金融庁、日銀、業界団体、保証・保護機構など制度側の主体を扱います。',
    en: 'Regulators, the central bank, industry bodies, guarantee schemes, and protection institutions.',
  },
  fintech: {
    ja: 'ステーブルコイン、デジタル金融、クロスボーダー規制、新しい金融技術の制度接点を扱います。',
    en: 'Stablecoins, digital finance, cross-border regulation, and institutional interfaces for new financial technology.',
  },
  'foreign-financial-institutions': {
    ja: '外資系金融機関の日本拠点、撤退・再編、国内制度との接続を扱います。',
    en: 'Foreign financial institutions in Japan, retreat or refocus patterns, and domestic regulatory interfaces.',
  },
  governance: {
    ja: '企業統治、規制上の責任分界、意思決定と監督の枠組みを扱います。',
    en: 'Corporate governance, regulatory accountability, and decision/supervision frameworks.',
  },
  insurance: {
    ja: '保険制度、販売チャネル、ソルベンシー、再保険、共済との境界を扱います。',
    en: 'Insurance regimes, distribution channels, solvency, reinsurance, and cooperative-insurance boundaries.',
  },
  japanfg: {
    ja: '日本の主要金融機関とグループ構造を、公開情報ベースで横断する入口です。',
    en: 'A cross-domain entry point for major Japanese financial institutions and group structures.',
  },
  'leasing-firms': {
    ja: 'リース会社、設備金融、ベンダーファイナンス、親会社グループとの接点を扱います。',
    en: 'Leasing companies, equipment finance, vendor finance, and parent-group interfaces.',
  },
  'life-insurers': {
    ja: '生命保険会社、商品チャネル、資産運用、相互会社・株式会社構造を扱います。',
    en: 'Life insurers, product channels, asset management, mutual/company structures.',
  },
  loyalty: {
    ja: 'ポイント経済、会員基盤、決済・小売・金融グループのデータ接点を扱います。',
    en: 'Loyalty economics, membership platforms, and data interfaces across payments, retail, and finance.',
  },
  'manufacturer-finance': {
    ja: 'メーカー系金融、販売金融、輸出・設備・在庫金融の事業モデルを扱います。',
    en: 'Manufacturer finance, sales finance, export finance, equipment finance, and floorplan models.',
  },
  manufacturing: {
    ja: '製造業と金融機能が接続する投資・販売・輸出の領域です。',
    en: 'Where manufacturing connects to investment, sales finance, and export finance.',
  },
  megabanks: {
    ja: 'メガバンク、銀行持株会社、信託・証券・カードを含むグループ構造を扱います。',
    en: 'Megabanks, bank holding companies, and group structures spanning trust, securities, and cards.',
  },
  'money-market': {
    ja: '短期金融市場、資金取引、担保、中央銀行オペレーションとの接点を扱います。',
    en: 'Money markets, short-term funding, collateral, and central-bank operations.',
  },
  'non-life-insurers': {
    ja: '損害保険会社、料率、再保険、自然災害リスク、グループ戦略を扱います。',
    en: 'Non-life insurers, rates, reinsurance, natural-catastrophe risk, and group strategy.',
  },
  'non-profit': {
    ja: '公益法人、NPO、財団・社団、学校・医療・宗教法人の制度比較を扱います。',
    en: 'Public-interest entities, NPOs, foundations, associations, schools, medical and religious corporations.',
  },
  'payment-firms': {
    ja: '決済事業者、資金移動、BNPL、送金、加盟店向けサービスを扱います。',
    en: 'Payment firms, funds transfer, BNPL, remittance, and merchant services.',
  },
  payments: {
    ja: '決済インフラ、カード、電子マネー、コード決済、清算・加盟店経済を扱います。',
    en: 'Payment infrastructure, cards, e-money, code payments, clearing, and merchant economics.',
  },
  'policy-finance': {
    ja: '政策金融機関、信用保証、輸出信用、地方債、政府系金融の役割を扱います。',
    en: 'Policy finance institutions, guarantees, export credit, local bonds, and government-backed finance.',
  },
  'real-estate-finance': {
    ja: '不動産ファンド、REIT、ブリッジ、担保・評価・融資構造を扱います。',
    en: 'Real-estate funds, REITs, bridge structures, collateral, valuation, and financing.',
  },
  'regional-banks': {
    ja: '地方銀行、持株会社化、統合、地域金融モデル、広域提携を扱います。',
    en: 'Regional banks, holding-company transitions, consolidation, regional models, and alliances.',
  },
  retail: {
    ja: '小売業と金融・決済・ポイントの接続、店舗基盤の金融化を扱います。',
    en: 'Retail connections to finance, payments, loyalty, and store-network financialization.',
  },
  securities: {
    ja: '資本市場、証券制度、市場インフラ、上場・売買・清算のルートを扱います。',
    en: 'Capital markets, securities regimes, market infrastructure, listing, trading, and clearing routes.',
  },
  'securities-firms': {
    ja: '証券会社、オンライン証券、投資銀行、プライムブローカレッジの事業構造を扱います。',
    en: 'Securities firms, online brokers, investment banking, and prime-brokerage structures.',
  },
  security: {
    ja: '金融システムのセキュリティ、サプライチェーン、攻撃経路、運用上の防御を扱います。',
    en: 'Financial-system security, supply chains, attack paths, and operational controls.',
  },
  'structured-finance': {
    ja: '証券化、SPC、ローン、信用補完、ストラクチャード商品を扱います。',
    en: 'Securitization, SPCs, loans, credit enhancement, and structured products.',
  },
  systems: {
    ja: '金融・決済・市場を支えるシステム基盤、共同センター、運用リスクを扱います。',
    en: 'Systems, shared centers, and operating risks behind finance, payments, and markets.',
  },
  trade: {
    ja: '貿易金融、輸出信用、政府支援、商社・保険・金融の接点を扱います。',
    en: 'Trade finance, export credit, public support, and interfaces among trading companies, insurance, and finance.',
  },
  'trading-company-finance': {
    ja: '商社の金融機能、投資、貿易、資源・インフラ案件との接続を扱います。',
    en: 'Trading-company finance, investment, trade, and links to resources and infrastructure projects.',
  },
  'trust-banks': {
    ja: '信託銀行、資産管理、年金・カストディ、信託機能の制度境界を扱います。',
    en: 'Trust banks, asset administration, pensions, custody, and trust-function boundaries.',
  },
};

const fallbackDescription: Record<Lang, string> = {
  ja: 'この領域の公開情報ベースの項目を、制度・企業・市場構造の観点から整理しています。',
  en: 'Public-source entries in this domain are organized around institutions, regimes, and market structure.',
};

export function domainDescription(slug: string, lang: Lang): string {
  return domainDescriptions[slug]?.[lang] ?? fallbackDescription[lang];
}

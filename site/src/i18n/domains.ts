import type { Lang } from './ui';

// Domain display names and short reader-facing descriptions.
// entry.id is normalized to lowercase, so keys are lowercase route slugs.
// UI ラベル用。条目本文の翻訳とは別レイヤー。
export const domainNames: Record<string, Record<Lang, string>> = {
  'agent-economy': { ja: 'エージェント経済', en: 'Agent Economy', zh: '智能体经济' },
  'asset-managers': { ja: '資産運用会社', en: 'Asset Managers', zh: '资产管理机构' },
  banking: { ja: '銀行・政策', en: 'Banking', zh: '银行' },
  business: { ja: '事業ケース', en: 'Business Cases', zh: '商业案例' },
  'card-issuers': { ja: 'カード会社', en: 'Card Issuers', zh: '发卡机构' },
  'consumer-finance': { ja: '消費者金融', en: 'Consumer Finance', zh: '消费金融' },
  'cooperative-banks': { ja: '協同組織金融', en: 'Cooperative Banks', zh: '协同组织金融' },
  'corporate-strategy': { ja: '企業戦略', en: 'Corporate Strategy', zh: '企业战略' },
  derivatives: { ja: 'デリバティブ', en: 'Derivatives', zh: '衍生品' },
  exchanges: { ja: '取引所・VASP', en: 'Exchanges & VASP', zh: '交易所与 VASP' },
  finance: { ja: '金融・M&A', en: 'Corporate Finance', zh: '金融与并购' },
  'financial-conglomerates': { ja: '金融コングロマリット', en: 'Financial Conglomerates', zh: '金融集团' },
  'financial-licenses': { ja: '金融免許', en: 'Financial Licenses', zh: '金融牌照' },
  'financial-regulators': { ja: '金融規制当局', en: 'Financial Regulators', zh: '金融监管机构' },
  fintech: { ja: 'フィンテック', en: 'Fintech', zh: '金融科技' },
  'foreign-financial-institutions': { ja: '外資系金融機関', en: 'Foreign Financial Institutions', zh: '外资金融机构' },
  governance: { ja: 'ガバナンス', en: 'Governance', zh: '治理' },
  insurance: { ja: '保険', en: 'Insurance', zh: '保险' },
  japanfg: { ja: '日本金融機関', en: 'Japanese Financial Groups', zh: '日本金融机构' },
  'leasing-firms': { ja: 'リース会社', en: 'Leasing Firms', zh: '租赁公司' },
  'life-insurers': { ja: '生命保険会社', en: 'Life Insurers', zh: '寿险公司' },
  loyalty: { ja: 'ポイント経済', en: 'Loyalty', zh: '积分经济' },
  'manufacturer-finance': { ja: '製造業金融', en: 'Manufacturer Finance', zh: '厂商金融' },
  manufacturing: { ja: '製造業', en: 'Manufacturing', zh: '制造业' },
  megabanks: { ja: 'メガバンク', en: 'Megabanks', zh: '大型银行' },
  'money-market': { ja: '短期金融市場', en: 'Money Market', zh: '货币市场' },
  'non-life-insurers': { ja: '損害保険会社', en: 'Non-Life Insurers', zh: '产险公司' },
  'non-profit': { ja: '非営利・公益法人', en: 'Non-Profit & Public Interest', zh: '非营利与公益法人' },
  'payment-firms': { ja: '決済事業者', en: 'Payment Firms', zh: '支付机构' },
  payments: { ja: '決済', en: 'Payments', zh: '支付' },
  'policy-finance': { ja: '政策金融', en: 'Policy Finance', zh: '政策金融' },
  'real-estate-finance': { ja: '不動産金融', en: 'Real-Estate Finance', zh: '房地产金融' },
  'regional-banks': { ja: '地方銀行', en: 'Regional Banks', zh: '地方银行' },
  retail: { ja: '小売', en: 'Retail', zh: '零售' },
  securities: { ja: '証券', en: 'Securities', zh: '证券' },
  'securities-firms': { ja: '証券会社', en: 'Securities Firms', zh: '证券公司' },
  security: { ja: 'セキュリティ', en: 'Security', zh: '安全' },
  'structured-finance': { ja: 'ストラクチャードファイナンス', en: 'Structured Finance', zh: '结构化融资' },
  systems: { ja: 'システム基盤', en: 'Systems & Infrastructure', zh: '系统基础设施' },
  trade: { ja: '貿易', en: 'Trade', zh: '贸易' },
  'trading-company-finance': { ja: '商社金融', en: 'Trading-Company Finance', zh: '商社金融' },
  'trust-banks': { ja: '信託銀行', en: 'Trust Banks', zh: '信托银行' },
};

export function domainName(slug: string, lang: Lang): string {
  return domainNames[slug]?.[lang] ?? slug;
}

export const domainDescriptions: Record<string, Record<Lang, string>> = {
  'agent-economy': {
    ja: '金融・決済・市場業務に入ってくる AI エージェント、ウォレット、決済プロトコル、運用リスクを扱います。',
    en: 'AI agents, wallets, payment protocols, and operating risks entering finance, payments, and market workflows.',
    zh: '覆盖进入金融、支付与市场流程的 AI 智能体、钱包、支付协议与运营风险。',
  },
  'asset-managers': {
    ja: '資産運用会社、運用プラットフォーム、商品供給、グループ内の運用機能を読む領域です。',
    en: 'Asset managers, product platforms, investment functions, and group-level asset-management roles.',
    zh: '覆盖资产管理机构、产品平台、投资功能及集团内资管角色。',
  },
  banking: {
    ja: '銀行免許、ネット銀行、共同センター、信託・決済・預金の制度境界を扱います。',
    en: 'Bank licenses, digital banks, shared infrastructure, trust, payment, and deposit boundaries.',
    zh: '覆盖银行牌照、网络银行、共同基础设施、信托、支付与存款边界。',
  },
  business: {
    ja: '金融・決済・テクノロジー企業の事業モデル、競争構造、戦略ケースを整理します。',
    en: 'Business models, competitive structures, and strategy cases across finance, payments, and technology.',
    zh: '整理金融、支付与科技公司的商业模式、竞争结构与战略案例。',
  },
  'card-issuers': {
    ja: 'カード発行会社、ブランド提携、与信、加盟店・決済グループとの接続を扱います。',
    en: 'Card issuers, brand partnerships, credit functions, and connections to acquiring and payment groups.',
    zh: '覆盖发卡机构、品牌合作、授信功能及与收单和支付集团的连接。',
  },
  'consumer-finance': {
    ja: '消費者金融、個人向け与信、保証、グループ内リテール金融機能を扱います。',
    en: 'Consumer lenders, personal credit, guarantees, and retail-finance functions inside financial groups.',
    zh: '覆盖消费金融、个人信贷、担保及金融集团内零售金融功能。',
  },
  'cooperative-banks': {
    ja: '信用金庫、信用組合、農協・漁協系金融など協同組織金融の構造を扱います。',
    en: 'Shinkin banks, credit cooperatives, JA/JF finance, and cooperative financial architecture.',
    zh: '覆盖信用金库、信用组合、农协/渔协金融等协同组织金融结构。',
  },
  'corporate-strategy': {
    ja: '企業戦略、資本政策、組織再編、事業ポートフォリオの読み方を扱います。',
    en: 'Corporate strategy, capital policy, reorganization, and portfolio decisions.',
    zh: '覆盖企业战略、资本政策、组织重组与业务组合判断。',
  },
  derivatives: {
    ja: '先物、オプション、清算、証拠金、デリバティブ市場インフラを扱います。',
    en: 'Futures, options, clearing, margining, and derivatives market infrastructure.',
    zh: '覆盖期货、期权、清算、保证金与衍生品市场基础设施。',
  },
  exchanges: {
    ja: '暗号資産交換業者、VASP 規制、自主規制、海外取引所の日本向け接点を扱います。',
    en: 'Crypto exchanges, VASP regulation, self-regulation, and foreign-platform touchpoints with Japan.',
    zh: '覆盖加密资产交易所、VASP 监管、自律规则及境外平台与日本的连接。',
  },
  finance: {
    ja: 'M&A、資本政策、企業価値評価、上場金融グループの投資可能性を扱います。',
    en: 'M&A, capital policy, valuation, and investable-universe framing for listed financial groups.',
    zh: '覆盖并购、资本政策、估值及上市金融集团投资范围。',
  },
  'financial-conglomerates': {
    ja: '金融・商社・事業会社をまたぐ複合グループの事業接点を扱います。',
    en: 'Cross-sector conglomerates where finance, trading companies, and operating businesses meet.',
    zh: '覆盖金融、商社与运营业务交叉的复合型集团。',
  },
  'financial-licenses': {
    ja: '銀行、証券、保険、資金移動、前払式支払手段など金融免許の境界を扱います。',
    en: 'License boundaries across banking, securities, insurance, funds transfer, and prepaid instruments.',
    zh: '覆盖银行、证券、保险、资金转移、预付式支付工具等牌照边界。',
  },
  'financial-regulators': {
    ja: '金融庁、日銀、業界団体、保証・保護機構など制度側の主体を扱います。',
    en: 'Regulators, the central bank, industry bodies, guarantee schemes, and protection institutions.',
    zh: '覆盖监管机构、央行、行业团体、担保与保护机构等制度主体。',
  },
  fintech: {
    ja: 'ステーブルコイン、デジタル金融、クロスボーダー規制、新しい金融技術の制度接点を扱います。',
    en: 'Stablecoins, digital finance, cross-border regulation, and institutional interfaces for new financial technology.',
    zh: '覆盖稳定币、数字金融、跨境监管与新金融技术的制度接口。',
  },
  'foreign-financial-institutions': {
    ja: '外資系金融機関の日本拠点、撤退・再編、国内制度との接続を扱います。',
    en: 'Foreign financial institutions in Japan, retreat or refocus patterns, and domestic regulatory interfaces.',
    zh: '覆盖外资金融机构在日本的布局、收缩/重组及与本地制度的接口。',
  },
  governance: {
    ja: '企業統治、規制上の責任分界、意思決定と監督の枠組みを扱います。',
    en: 'Corporate governance, regulatory accountability, and decision/supervision frameworks.',
    zh: '覆盖公司治理、监管责任分界以及决策与监督框架。',
  },
  insurance: {
    ja: '保険制度、販売チャネル、ソルベンシー、再保険、共済との境界を扱います。',
    en: 'Insurance regimes, distribution channels, solvency, reinsurance, and cooperative-insurance boundaries.',
    zh: '覆盖保险制度、销售渠道、偿付能力、再保险及共济边界。',
  },
  japanfg: {
    ja: '日本の主要金融機関とグループ構造を、公開情報ベースで横断する入口です。',
    en: 'A cross-domain entry point for major Japanese financial institutions and group structures.',
    zh: '面向日本主要金融机构与集团结构的跨领域入口。',
  },
  'leasing-firms': {
    ja: 'リース会社、設備金融、ベンダーファイナンス、親会社グループとの接点を扱います。',
    en: 'Leasing companies, equipment finance, vendor finance, and parent-group interfaces.',
    zh: '覆盖租赁公司、设备金融、厂商金融及母集团接口。',
  },
  'life-insurers': {
    ja: '生命保険会社、商品チャネル、資産運用、相互会社・株式会社構造を扱います。',
    en: 'Life insurers, product channels, asset management, mutual/company structures.',
    zh: '覆盖寿险公司、产品渠道、资产运用及相互会社/股份公司结构。',
  },
  loyalty: {
    ja: 'ポイント経済、会員基盤、決済・小売・金融グループのデータ接点を扱います。',
    en: 'Loyalty economics, membership platforms, and data interfaces across payments, retail, and finance.',
    zh: '覆盖积分经济、会员平台，以及支付、零售与金融的数据接口。',
  },
  'manufacturer-finance': {
    ja: 'メーカー系金融、販売金融、輸出・設備・在庫金融の事業モデルを扱います。',
    en: 'Manufacturer finance, sales finance, export finance, equipment finance, and floorplan models.',
    zh: '覆盖厂商金融、销售金融、出口、设备与库存融资模式。',
  },
  manufacturing: {
    ja: '製造業と金融機能が接続する投資・販売・輸出の領域です。',
    en: 'Where manufacturing connects to investment, sales finance, and export finance.',
    zh: '覆盖制造业与投资、销售金融、出口金融的连接。',
  },
  megabanks: {
    ja: 'メガバンク、銀行持株会社、信託・証券・カードを含むグループ構造を扱います。',
    en: 'Megabanks, bank holding companies, and group structures spanning trust, securities, and cards.',
    zh: '覆盖大型银行、银行控股公司及信托、证券、卡业务等集团结构。',
  },
  'money-market': {
    ja: '短期金融市場、資金取引、担保、中央銀行オペレーションとの接点を扱います。',
    en: 'Money markets, short-term funding, collateral, and central-bank operations.',
    zh: '覆盖货币市场、短期资金、抵押品与央行操作接口。',
  },
  'non-life-insurers': {
    ja: '損害保険会社、料率、再保険、自然災害リスク、グループ戦略を扱います。',
    en: 'Non-life insurers, rates, reinsurance, natural-catastrophe risk, and group strategy.',
    zh: '覆盖产险公司、费率、再保险、自然灾害风险与集团战略。',
  },
  'non-profit': {
    ja: '公益法人、NPO、財団・社団、学校・医療・宗教法人の制度比較を扱います。',
    en: 'Public-interest entities, NPOs, foundations, associations, schools, medical and religious corporations.',
    zh: '覆盖公益法人、NPO、财团/社团以及学校、医疗、宗教法人制度。',
  },
  'payment-firms': {
    ja: '決済事業者、資金移動、BNPL、送金、加盟店向けサービスを扱います。',
    en: 'Payment firms, funds transfer, BNPL, remittance, and merchant services.',
    zh: '覆盖支付机构、资金转移、BNPL、汇款与商户服务。',
  },
  payments: {
    ja: '決済インフラ、カード、電子マネー、コード決済、清算・加盟店経済を扱います。',
    en: 'Payment infrastructure, cards, e-money, code payments, clearing, and merchant economics.',
    zh: '覆盖支付基础设施、银行卡、电子货币、扫码支付、清算与商户经济。',
  },
  'policy-finance': {
    ja: '政策金融機関、信用保証、輸出信用、地方債、政府系金融の役割を扱います。',
    en: 'Policy finance institutions, guarantees, export credit, local bonds, and government-backed finance.',
    zh: '覆盖政策金融机构、信用担保、出口信用、地方债与政府系金融。',
  },
  'real-estate-finance': {
    ja: '不動産ファンド、REIT、ブリッジ、担保・評価・融資構造を扱います。',
    en: 'Real-estate funds, REITs, bridge structures, collateral, valuation, and financing.',
    zh: '覆盖房地产基金、REIT、过桥结构、抵押、估值与融资。',
  },
  'regional-banks': {
    ja: '地方銀行、持株会社化、統合、地域金融モデル、広域提携を扱います。',
    en: 'Regional banks, holding-company transitions, consolidation, regional models, and alliances.',
    zh: '覆盖地方银行、控股公司化、整合、地域金融模式与广域合作。',
  },
  retail: {
    ja: '小売業と金融・決済・ポイントの接続、店舗基盤の金融化を扱います。',
    en: 'Retail connections to finance, payments, loyalty, and store-network financialization.',
    zh: '覆盖零售与金融、支付、积分及门店网络金融化的连接。',
  },
  securities: {
    ja: '資本市場、証券制度、市場インフラ、上場・売買・清算のルートを扱います。',
    en: 'Capital markets, securities regimes, market infrastructure, listing, trading, and clearing routes.',
    zh: '覆盖资本市场、证券制度、市场基础设施、上市、交易与清算路径。',
  },
  'securities-firms': {
    ja: '証券会社、オンライン証券、投資銀行、プライムブローカレッジの事業構造を扱います。',
    en: 'Securities firms, online brokers, investment banking, and prime-brokerage structures.',
    zh: '覆盖证券公司、网络券商、投资银行与主经纪业务结构。',
  },
  security: {
    ja: '金融システムのセキュリティ、サプライチェーン、攻撃経路、運用上の防御を扱います。',
    en: 'Financial-system security, supply chains, attack paths, and operational controls.',
    zh: '覆盖金融系统安全、供应链、攻击路径与运营防御。',
  },
  'structured-finance': {
    ja: '証券化、SPC、ローン、信用補完、ストラクチャード商品を扱います。',
    en: 'Securitization, SPCs, loans, credit enhancement, and structured products.',
    zh: '覆盖证券化、SPC、贷款、信用增级与结构化产品。',
  },
  systems: {
    ja: '金融・決済・市場を支えるシステム基盤、共同センター、運用リスクを扱います。',
    en: 'Systems, shared centers, and operating risks behind finance, payments, and markets.',
    zh: '覆盖支撑金融、支付与市场的系统基础设施、共同中心与运营风险。',
  },
  trade: {
    ja: '貿易金融、輸出信用、政府支援、商社・保険・金融の接点を扱います。',
    en: 'Trade finance, export credit, public support, and interfaces among trading companies, insurance, and finance.',
    zh: '覆盖贸易金融、出口信用、公共支持及商社、保险、金融接口。',
  },
  'trading-company-finance': {
    ja: '商社の金融機能、投資、貿易、資源・インフラ案件との接続を扱います。',
    en: 'Trading-company finance, investment, trade, and links to resources and infrastructure projects.',
    zh: '覆盖商社金融功能、投资、贸易及资源/基础设施项目连接。',
  },
  'trust-banks': {
    ja: '信託銀行、資産管理、年金・カストディ、信託機能の制度境界を扱います。',
    en: 'Trust banks, asset administration, pensions, custody, and trust-function boundaries.',
    zh: '覆盖信托银行、资产管理、养老金/托管及信托功能边界。',
  },
};

const fallbackDescription: Record<Lang, string> = {
  ja: 'この領域の公開情報ベースの項目を、制度・企業・市場構造の観点から整理しています。',
  en: 'Public-source entries in this domain are organized around institutions, regimes, and market structure.',
  zh: '本领域的公开来源条目按机构、制度与市场结构整理。',
};

export function domainDescription(slug: string, lang: Lang): string {
  return domainDescriptions[slug]?.[lang] ?? fallbackDescription[lang];
}

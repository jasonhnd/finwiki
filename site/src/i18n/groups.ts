import type { Lang } from './ui';

// Super-groups give the current domain set an information architecture instead of a
// flat list. Order is editorial: institutions first, then markets, payments,
// frontier, corporate, governance.
export interface DomainGroup {
  id: string;
  ja: string;
  en: string;
  zh: string;
  description: Record<Lang, string>;
  domains: string[];
}

export const domainGroups: DomainGroup[] = [
  {
    id: 'institutions',
    ja: '金融機関・グループ',
    en: 'Institutions & groups',
    zh: '金融机构与集团',
    description: {
      ja: '銀行、信託、協同組織、外資、商社金融まで、金融グループの輪郭を掴む入口です。',
      en: 'Banks, trusts, cooperatives, foreign institutions, and trading-company finance as group structures.',
      zh: '从银行、信托、协同组织、外资机构到商社金融，把握金融集团轮廓。',
    },
    domains: ['japanfg', 'megabanks', 'regional-banks', 'cooperative-banks', 'trust-banks', 'foreign-financial-institutions', 'financial-conglomerates', 'trading-company-finance'],
  },
  {
    id: 'banking',
    ja: '銀行・政策金融',
    en: 'Banking & policy finance',
    zh: '银行与政策金融',
    description: {
      ja: '銀行制度、政策金融、短期金融市場を、免許・資金供給・公共目的の観点で読みます。',
      en: 'Banking regimes, policy finance, and money markets through licenses, funding, and public mandates.',
      zh: '从牌照、资金供给与公共使命阅读银行制度、政策金融和货币市场。',
    },
    domains: ['banking', 'policy-finance', 'money-market'],
  },
  {
    id: 'markets',
    ja: '市場・証券・商品',
    en: 'Markets, securities & products',
    zh: '市场、证券与产品',
    description: {
      ja: '証券市場、運用、デリバティブ、ストラクチャード商品、不動産金融を横断します。',
      en: 'Securities markets, asset management, derivatives, structured products, and real-estate finance.',
      zh: '横向阅读证券市场、资产管理、衍生品、结构化产品与房地产金融。',
    },
    domains: ['securities', 'securities-firms', 'asset-managers', 'derivatives', 'structured-finance', 'real-estate-finance'],
  },
  {
    id: 'insurance',
    ja: '保険',
    en: 'Insurance',
    zh: '保险',
    description: {
      ja: '生命保険・損害保険・制度横断の保険論点を、販売・資本・リスクから読みます。',
      en: 'Life, non-life, and cross-insurance regimes through distribution, capital, and risk.',
      zh: '从销售、资本与风险阅读寿险、产险及跨保险制度议题。',
    },
    domains: ['insurance', 'life-insurers', 'non-life-insurers'],
  },
  {
    id: 'payments',
    ja: '決済・フィンテック',
    en: 'Payments & fintech',
    zh: '支付与金融科技',
    description: {
      ja: 'カード、電子マネー、送金、BNPL、フィンテックを、決済レールと事業者の両面から読みます。',
      en: 'Cards, e-money, remittance, BNPL, and fintech across rails and operators.',
      zh: '从支付轨道与运营主体两面阅读银行卡、电子货币、汇款、BNPL 与金融科技。',
    },
    domains: ['payments', 'payment-firms', 'card-issuers', 'leasing-firms', 'consumer-finance', 'fintech', 'loyalty'],
  },
  {
    id: 'crypto',
    ja: '暗号資産・基盤',
    en: 'Crypto & infrastructure',
    zh: '加密资产与基础设施',
    description: {
      ja: '暗号資産交換業、VASP 規制、金融システム基盤、運用リスクを接続します。',
      en: 'Crypto exchanges, VASP regulation, financial infrastructure, and operating risk.',
      zh: '连接加密资产交易、VASP 监管、金融基础设施与运营风险。',
    },
    domains: ['exchanges', 'systems'],
  },
  {
    id: 'agent',
    ja: 'エージェント経済',
    en: 'Agent economy',
    zh: '智能体经济',
    description: {
      ja: 'AI エージェント、ウォレット、プログラマブル決済が金融実務へ入る接点を扱います。',
      en: 'Where AI agents, wallets, and programmable payments meet financial operations.',
      zh: '覆盖 AI 智能体、钱包与可编程支付进入金融运营的接口。',
    },
    domains: ['agent-economy'],
  },
  {
    id: 'corporate',
    ja: 'コーポレート・事業',
    en: 'Corporate & business',
    zh: '公司与业务',
    description: {
      ja: 'M&A、企業戦略、製造業金融、小売、貿易を事業側の金融接点として読みます。',
      en: 'M&A, corporate strategy, manufacturer finance, retail, and trade as business-side finance.',
      zh: '把并购、企业战略、厂商金融、零售与贸易作为业务侧金融接口来阅读。',
    },
    domains: ['finance', 'business', 'corporate-strategy', 'manufacturer-finance', 'retail', 'trade'],
  },
  {
    id: 'governance',
    ja: '制度・ガバナンス',
    en: 'Governance & security',
    zh: '治理与安全',
    description: {
      ja: '規制当局、免許、非営利制度、セキュリティを、制度の運用面から整理します。',
      en: 'Regulators, licenses, non-profit regimes, and security through institutional operation.',
      zh: '从制度运营角度整理监管机构、牌照、非营利制度与安全。',
    },
    domains: ['financial-regulators', 'financial-licenses', 'non-profit', 'security'],
  },
];

export function groupName(group: DomainGroup, lang: Lang): string {
  return group[lang] ?? group.en;
}

export function groupDescription(group: DomainGroup, lang: Lang): string {
  return group.description[lang] ?? group.description.en;
}

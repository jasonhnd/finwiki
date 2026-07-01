import type { Lang } from './ui';

// Super-groups give the current domain set an information architecture instead of a
// flat list. Order is editorial: institutions first, then markets, payments,
// frontier, corporate, governance.
export interface DomainGroup {
  id: string;
  ja: string;
  en: string;
  description: Record<Lang, string>;
  domains: string[];
}

export const domainGroups: DomainGroup[] = [
  {
    id: 'institutions',
    ja: '金融機関・グループ',
    en: 'Institutions & groups',
    description: {
      ja: '銀行、信託、協同組織、外資、商社金融まで、金融グループの輪郭を掴む入口です。',
      en: 'Banks, trusts, cooperatives, foreign institutions, and trading-company finance as group structures.',
    },
    domains: ['japanfg', 'megabanks', 'regional-banks', 'cooperative-banks', 'trust-banks', 'foreign-financial-institutions', 'financial-conglomerates', 'trading-company-finance'],
  },
  {
    id: 'banking',
    ja: '銀行・政策金融',
    en: 'Banking & policy finance',
    description: {
      ja: '銀行制度、政策金融、短期金融市場を、免許・資金供給・公共目的の観点で読みます。',
      en: 'Banking regimes, policy finance, and money markets through licenses, funding, and public mandates.',
    },
    domains: ['banking', 'policy-finance', 'money-market'],
  },
  {
    id: 'markets',
    ja: '市場・証券・商品',
    en: 'Markets, securities & products',
    description: {
      ja: '証券市場、運用、デリバティブ、ストラクチャード商品、不動産金融を横断します。',
      en: 'Securities markets, asset management, derivatives, structured products, and real-estate finance.',
    },
    domains: ['securities', 'securities-firms', 'asset-managers', 'derivatives', 'structured-finance', 'real-estate-finance'],
  },
  {
    id: 'insurance',
    ja: '保険',
    en: 'Insurance',
    description: {
      ja: '生命保険・損害保険・制度横断の保険論点を、販売・資本・リスクから読みます。',
      en: 'Life, non-life, and cross-insurance regimes through distribution, capital, and risk.',
    },
    domains: ['insurance', 'life-insurers', 'non-life-insurers'],
  },
  {
    id: 'payments',
    ja: '決済・フィンテック',
    en: 'Payments & fintech',
    description: {
      ja: 'カード、電子マネー、送金、BNPL、フィンテックを、決済レールと事業者の両面から読みます。',
      en: 'Cards, e-money, remittance, BNPL, and fintech across rails and operators.',
    },
    domains: ['payments', 'payment-firms', 'card-issuers', 'leasing-firms', 'consumer-finance', 'fintech', 'loyalty'],
  },
  {
    id: 'crypto',
    ja: '暗号資産・基盤',
    en: 'Crypto & infrastructure',
    description: {
      ja: '暗号資産交換業、VASP 規制、金融システム基盤、運用リスクを接続します。',
      en: 'Crypto exchanges, VASP regulation, financial infrastructure, and operating risk.',
    },
    domains: ['exchanges', 'systems'],
  },
  {
    id: 'agent',
    ja: 'エージェント経済',
    en: 'Agent economy',
    description: {
      ja: 'AI エージェント、ウォレット、プログラマブル決済が金融実務へ入る接点を扱います。',
      en: 'Where AI agents, wallets, and programmable payments meet financial operations.',
    },
    domains: ['agent-economy'],
  },
  {
    id: 'corporate',
    ja: 'コーポレート・事業',
    en: 'Corporate & business',
    description: {
      ja: 'M&A、企業戦略、製造業金融、小売、貿易を事業側の金融接点として読みます。',
      en: 'M&A, corporate strategy, manufacturer finance, retail, and trade as business-side finance.',
    },
    domains: ['finance', 'business', 'corporate-strategy', 'manufacturer-finance', 'retail', 'trade'],
  },
  {
    id: 'governance',
    ja: '制度・ガバナンス',
    en: 'Governance & security',
    description: {
      ja: '規制当局、免許、非営利制度、セキュリティを、制度の運用面から整理します。',
      en: 'Regulators, licenses, non-profit regimes, and security through institutional operation.',
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

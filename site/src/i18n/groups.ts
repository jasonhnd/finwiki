import type { Lang } from './ui';

// Super-groups give the current domain set an information architecture instead of a
// flat list. Order is editorial: institutions first, then markets, payments,
// frontier, corporate, governance.
export interface DomainGroup {
  id: string;
  ja: string;
  en: string;
  zh: string;
  domains: string[];
}

export const domainGroups: DomainGroup[] = [
  {
    id: 'institutions',
    ja: '金融機関・グループ',
    en: 'Institutions & groups',
    zh: '金融机构与集团',
    domains: ['japanfg', 'megabanks', 'regional-banks', 'cooperative-banks', 'trust-banks', 'foreign-financial-institutions', 'financial-conglomerates', 'trading-company-finance'],
  },
  {
    id: 'banking',
    ja: '銀行・政策金融',
    en: 'Banking & policy finance',
    zh: '银行与政策金融',
    domains: ['banking', 'policy-finance', 'money-market'],
  },
  {
    id: 'markets',
    ja: '市場・証券・商品',
    en: 'Markets, securities & products',
    zh: '市场、证券与产品',
    domains: ['securities', 'securities-firms', 'asset-managers', 'derivatives', 'structured-finance', 'real-estate-finance'],
  },
  {
    id: 'insurance',
    ja: '保険',
    en: 'Insurance',
    zh: '保险',
    domains: ['insurance', 'life-insurers', 'non-life-insurers'],
  },
  {
    id: 'payments',
    ja: '決済・フィンテック',
    en: 'Payments & fintech',
    zh: '支付与金融科技',
    domains: ['payments', 'payment-firms', 'card-issuers', 'leasing-firms', 'consumer-finance', 'fintech', 'loyalty'],
  },
  {
    id: 'crypto',
    ja: '暗号資産・基盤',
    en: 'Crypto & infrastructure',
    zh: '加密资产与基础设施',
    domains: ['exchanges', 'systems'],
  },
  {
    id: 'agent',
    ja: 'エージェント経済',
    en: 'Agent economy',
    zh: '智能体经济',
    domains: ['agent-economy'],
  },
  {
    id: 'corporate',
    ja: 'コーポレート・事業',
    en: 'Corporate & business',
    zh: '公司与业务',
    domains: ['finance', 'business', 'corporate-strategy', 'manufacturer-finance', 'retail', 'trade'],
  },
  {
    id: 'governance',
    ja: '制度・ガバナンス',
    en: 'Governance & security',
    zh: '治理与安全',
    domains: ['financial-regulators', 'financial-licenses', 'non-profit', 'security'],
  },
];

export function groupName(group: DomainGroup, lang: Lang): string {
  return group[lang] ?? group.en;
}

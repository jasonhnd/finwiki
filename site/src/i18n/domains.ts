import type { Lang } from './ui';

// 23 domain の三語表示名（entry.id は小文字なので key も小文字）。
// UI ラベル用。条目本文の翻訳とは別レイヤー。
export const domainNames: Record<string, Record<Lang, string>> = {
  japanfg: { ja: '日本金融機関', en: 'Japanese Financial Groups', zh: '日本金融机构' },
  exchanges: { ja: '取引所・VASP', en: 'Exchanges & VASP', zh: '交易所与 VASP' },
  fintech: { ja: 'フィンテック', en: 'Fintech', zh: '金融科技' },
  systems: { ja: 'システム基盤', en: 'Systems & Infrastructure', zh: '系统基础设施' },
  'agent-economy': { ja: 'エージェント経済', en: 'Agent Economy', zh: '智能体经济' },
  payments: { ja: '決済', en: 'Payments', zh: '支付' },
  banking: { ja: '銀行・政策', en: 'Banking', zh: '银行' },
  'policy-finance': { ja: '政策金融', en: 'Policy Finance', zh: '政策金融' },
  derivatives: { ja: 'デリバティブ', en: 'Derivatives', zh: '衍生品' },
  insurance: { ja: '保険', en: 'Insurance', zh: '保险' },
  securities: { ja: '証券', en: 'Securities', zh: '证券' },
  'structured-finance': { ja: 'ストラクチャードファイナンス', en: 'Structured Finance', zh: '结构化融资' },
  'real-estate-finance': { ja: '不動産金融', en: 'Real-Estate Finance', zh: '房地产金融' },
  finance: { ja: '金融・M&A', en: 'Corporate Finance', zh: '金融与并购' },
  business: { ja: '事業ケース', en: 'Business Cases', zh: '商业案例' },
  loyalty: { ja: 'ポイント経済', en: 'Loyalty', zh: '积分经济' },
  'money-market': { ja: '短期金融市場', en: 'Money Market', zh: '货币市场' },
  manufacturing: { ja: '製造業', en: 'Manufacturing', zh: '制造业' },
  retail: { ja: '小売', en: 'Retail', zh: '零售' },
  'corporate-strategy': { ja: '企業戦略', en: 'Corporate Strategy', zh: '企业战略' },
  security: { ja: 'セキュリティ', en: 'Security', zh: '安全' },
  governance: { ja: 'ガバナンス', en: 'Governance', zh: '治理' },
  trade: { ja: '貿易', en: 'Trade', zh: '贸易' },
};

export function domainName(slug: string, lang: Lang): string {
  return domainNames[slug]?.[lang] ?? slug;
}

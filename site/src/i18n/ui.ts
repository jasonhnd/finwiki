// FinWiki 人類版の UI 文字列（三語）。条目本文の三語化とは別に、
// ナビ・ラベル等のサイト共通文言をここで一元管理する。
export const languages = { ja: '日本語', en: 'English', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const langCodes = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'ja';

export const ui = {
  ja: {
    'site.title': 'FinWiki — 金融ナレッジグラフ',
    'site.tagline': '公開一次情報にもとづく、三言語・AI 可読の金融事実ベース。',
    'nav.domains': '領域マップ',
    'nav.guide': '読み方ガイド',
    'nav.matrices': '比較マトリクス',
    'nav.search': '検索',
    'home.intro':
      'FinWiki は日本と世界の金融機関・制度・市場構造を、出典付きで構造化した公開ナレッジベースです。本サイトは精選した中核項目を三言語で読める「人間版」と、AI 向けの機械可読 surface を同一サイトで配信します。',
    'home.human': '人間向け（精選・三言語）',
    'home.ai': 'AI 向け surface',
    'home.curated': '精選中核項目',
    'footer.note': '公開一次情報にもとづく金融ナレッジベース。事実は各項目の出典に遡れます。',
  },
  en: {
    'site.title': 'FinWiki — Financial Knowledge Graph',
    'site.tagline': 'A trilingual, AI-readable financial fact base built on public primary sources.',
    'nav.domains': 'Domain map',
    'nav.guide': 'Reading guide',
    'nav.matrices': 'Comparison matrices',
    'nav.search': 'Search',
    'home.intro':
      'FinWiki is a public knowledge base that structures Japanese and global financial institutions, regimes, and market plumbing with sourced facts. This site serves a curated trilingual "human edition" of the core entries and machine-readable AI surfaces from one unified site.',
    'home.human': 'For humans (curated, trilingual)',
    'home.ai': 'AI surfaces',
    'home.curated': 'Curated core entries',
    'footer.note': 'A public-source financial knowledge base. Every fact traces back to the sources cited in each entry.',
  },
  zh: {
    'site.title': 'FinWiki — 金融知识图谱',
    'site.tagline': '基于公开一手信源的三语、AI 可读金融事实库。',
    'nav.domains': '领域地图',
    'nav.guide': '阅读指南',
    'nav.matrices': '对照矩阵',
    'nav.search': '搜索',
    'home.intro':
      'FinWiki 是一个公开知识库，用带出处的事实结构化呈现日本与全球的金融机构、制度与市场基础设施。本站在同一站点上同时提供：面向人类、精选并三语化的「人类版」，以及面向 AI 的机器可读 surface。',
    'home.human': '人类版（精选·三语）',
    'home.ai': 'AI surface',
    'home.curated': '精选核心条目',
    'footer.note': '基于公开一手信源的金融事实库。每条事实都可回溯到条目所列出处。',
  },
} as const;

export type UIKey = keyof (typeof ui)['ja'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

// base path（/app/ 等のサブパス配信に対応）。Astro の BASE_URL を末尾スラッシュ無しに正規化。
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' or '/app'

// 言語付き内部 URL を base 込みで生成（例: u('ja','japanfg/mufg/') → '/app/ja/japanfg/mufg/'）。
export function u(lang: Lang, rest = ''): string {
  return `${BASE}/${lang}/${rest.replace(/^\//, '')}`;
}

// 現パスから base と言語プレフィックスを除いた残りを返す（言語切替リンク用）。
export function restOf(pathname: string): string {
  let p = pathname;
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  p = p.replace(/^\/(ja|en|zh)(?=\/|$)/, '');
  return p.replace(/^\//, '');
}

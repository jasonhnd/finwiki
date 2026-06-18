---
source: banking/japan-trust-bank-vs-global-custodian-comparison-matrix
source_hash: 4622638c37358ebc
lang: ja
status: machine
fidelity: ok
title: "日本の信託銀行 対 グローバルカストディアン 比較マトリクス"
translated_at: 2026-06-18T23:33:48.328Z
---

# 日本の信託銀行 対 グローバルカストディアン 比較マトリクス

## TL;DR

日本の信託銀行系カストディ事業者 (フルサービス信託銀行、資産管理専業、中小信託銀行) と、日本で営業するグローバルカストディアン (BNY メロン、ステート・ストリート、JP モルガン、シティ) との横並び比較。両陣営は直接の代替関係にはない: 日本の信託銀行は 信託業法 + 銀行法 の二重ルートの下で国内 JGB / 株式 / 公的年金 のカストディを支配し、一方グローバルカストディアンは外国投資家のためのサブカストディ・マンデートと、ICSD ゲートウェイ経由のクロスボーダー資産サービシングを担う。マトリクスを正しく読むことで、「信託口」名義をあたかも銀行自身が経済的投資家であるかのように扱うという頻発する誤りを避けられる。

## Wiki ルート

本エントリは [[banking/INDEX|banking index]] の配下に位置する。既存のカストディドメイン図についてはピアエントリ [[banking/japan-trust-bank-custody-map|Japan trust bank and custody map]]、[[banking/japan-master-trust-and-custody-bank-landscape|master trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] とともに; エンティティの文脈については [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]]、[[trust-banks/mizuho-trust-bank|みずほ信託銀行]]、[[trust-banks/smtb|三井住友信託銀行]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] とともに; システムアンカーとしては [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行]] と [[trust-banks/custody-bank|日本カストディ銀行]] とともに; そしてクリアリング / 決済インフラについては [[securities/japan-securities-clearing-corp|JSCC]] と [[securities/japan-securities-depository-center|JASDEC]] とともに、加えてクライアントサイドについては [[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] とともに読まれたい。

## カバーする母集団

**日本の信託銀行系カストディ側 (10 社)**

- フルサービス信託銀行: [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行 (MUFG Trust)]]、[[trust-banks/mizuho-trust-bank|みずほ信託銀行 (Mizuho Trust)]]、[[trust-banks/smtb|三井住友信託銀行 (SMTB)]]
- 外国銀行系列のリテール / ウェルス信託銀行: [[trust-banks/smbc-trust-bank|SMBC信託銀行]]
- スペシャルティ / グループ内信託銀行: [[trust-banks/nomura-trust-bank|野村信託銀行]]、[[trust-banks/nochu-trust-bank|農中信託銀行]]、[[trust-banks/sbi-shinsei-trust-bank|SBI新生信託銀行]]、[[trust-banks/jsf-trust-bank|JSF信託銀行]]
- 資産管理専業 (信託口 名義のアンカー): [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行]]、[[trust-banks/custody-bank|日本カストディ銀行]]

**グローバルカストディアン側 (4 社)**

- [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] (BNY メロン信託 + 東京支店 + AM JP)
- [[foreign-financial-institutions/state-street-japan|State Street Japan]]
- [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Custody Japan]] (Securities Services 部門)
- [[foreign-financial-institutions/citigroup-japan|Citi custody Japan]] (Citigroup Global Markets Japan + Citibank N.A. Tokyo)

## 比較マトリクス (日本の信託銀行)

| 項目 | MUFG 信託 | みずほ信託 | SMTB | SMBC 信託 | 野村信託 | 農中信託 | マスタートラスト | 日本カストディ銀行 | SBI 新生信託 | JSF 信託 |
|---|---|---|---|---|---|---|---|---|---|---|
| 法人区分 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 (専業) | 信託銀行 (専業) | 信託銀行 | 信託銀行 |
| ライセンスルート | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 (カストディ専業) | 銀行法 + 信託業法 兼営 (カストディ専業) | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 |
| 法定カストディアン機能 | 受託 / カストディ / 名義代行 / DVP 決済 | 受託 / カストディ / 名義代行 / DVP 決済 | 受託 / カストディ / 名義代行 / DVP 決済 | リテール信託中心 / カストディ限定 | グループ内信託 + 投信信託受託 | 農林系信託受託 | カストディ + 年金信託 + 投信受託 専業 | カストディ + 年金信託 + 投信受託 専業 | グループ内 + 不動産信託中心 | 証券金融グループ内信託 |
| AUC / AuA クラス | ¥100兆+ | ¥10–100兆 | ¥100兆+ | <¥10兆 | <¥10兆 | <¥10兆 | ¥823兆 (受託資産, 2025) | ¥696兆 (受託財産合計, 2025-03) | <¥10兆 | <¥10兆 |
| 主要顧客タイプ | 公的年金 / 投信 / 機関投資家 / 事業法人 | 投信 / 機関投資家 / 公的年金 | 公的年金 / 投信 / 機関投資家 / 事業法人 | 個人富裕層 / 信託代理 | グループ証券・投信 / 機関投資家 | 農林系金融機関・JA バンク | GPIF / 大手投信 / グローバルカストディ sub-route | 大手投信 / 公的年金 / 機関投資家 | グループ内 / 不動産投資家 | 証券金融子会社 + 機関投資家 |
| クロスボーダーカストディ | あり (海外サブカストディ網) | あり | あり | 限定的 | 限定的 | なし | 海外資産は外資カストディに再委託 | 海外資産は外資カストディに再委託 | なし | なし |
| DVP-X1/X2/X3 決済 | フル参加 | フル参加 | フル参加 | 部分参加 | 部分参加 | 部分参加 | フル参加 (大量) | フル参加 (大量) | 部分参加 | 部分参加 |
| JSCC 接続 | 直接 | 直接 | 直接 | 親銀行経由 | 直接 (証券系) | 親系統経由 | 直接 (大量) | 直接 (大量) | 親銀行経由 | 直接 (証券金融) |
| JASDEC 接続 | 直接 | 直接 | 直接 | 直接 | 直接 | 直接 | 直接 (大量) | 直接 (大量) | 直接 | 直接 |
| ICSD ゲートウェイ (Euroclear / Clearstream) | 直接 + サブカストディ | 直接 + サブカストディ | 直接 + サブカストディ | 親銀行 SMBC 経由 | 親 (野村) 経由 + 自社限定 | 外資カストディ経由 | 外資 ICSD 接続 (BNY / State Street サブ) | 外資 ICSD 接続 (BNY / State Street サブ) | 外資カストディ経由 | 外資カストディ経由 |
| M&A / 統合歴 | 三菱信託 + UFJ 信託 (2005-10) | みずほ信託 (旧 安田 + 第一勧業 + 富士 信託統合系譜) | 中央三井 + 住友 (2011-04) | 旧 SMBC 信託 + プレスティア (シティ NA 個人部門 2015 譲受) | 1993 設立 (野村系子会社) | 設立統合 | 2000-05 設立 (MUFG + 日本生命 + 明治安田 + 農中信託) | **2020-07-27 JTSB + TCSB 合併** ★ | SBI 系 (旧 新生信託) | 日本証券金融子会社 |
| 価格交渉力 | 強 (規模 + リレーション) | 中強 | 強 | 中 (リテール富裕層) | 中 (グループ内) | 中 (系統内) | 強 (規模独占に近い) | 強 (規模独占に近い) | 弱 (規模小) | 弱 (専業狭領域) |

## 比較マトリクス (日本のグローバルカストディアン)

| 項目 | BNY メロン日本 | ステート・ストリート日本 | JP モルガン日本 | シティ日本 |
|---|---|---|---|---|
| 法人区分 | 信託銀行 (BNY メロン信託) + 外国銀行支店 (東京支店) + AM 子会社 | 信託銀行 (ステート・ストリート信託) + 外国銀行支店 | 信託銀行 + 外国銀行支店 (JPMorgan Chase Bank N.A. Tokyo) + 証券子会社 | 外国銀行支店 (Citibank N.A. Tokyo) + 証券子会社 (Citigroup Global Markets Japan) |
| ライセンスルート | 銀行法 (支店) + 信託業法 (信託銀行) | 銀行法 (支店) + 信託業法 (信託銀行) | 銀行法 (支店) + 信託業法 (信託銀行) | 銀行法 (支店) + 金商法 (証券) |
| 法定カストディアン機能 | グローバルカストディ / 海外資産保管 / ADR 代理人 / sub-custodian | グローバルカストディ / 公的年金 sub-custodian / 投信 sub-custodian | グローバルカストディ + 機関投資家サービス + ADR 代理人 | グローバルカストディ + ADR 代理人 + 証券業務 |
| AUC / AuA クラス (Japan 専有部分) | 非開示 (親会社グローバル AUC/A 約 $52兆, 2024-12 ^[extracted]) | 非開示 (親会社グローバル AUC/A 約 $46.6兆, 2024-12) | 非開示 (親会社 Securities Services AUC 約 $35.8兆, 2024Q3) | 非開示 (親会社 Securities Services AUC/A 約 $26兆, 2024) |
| 主要顧客タイプ | GPIF / 公的年金 / 大手投信 / 邦銀海外運用 / 外国年金 / SWF | GPIF / 公的年金 / SSGA 系投信 / 外国年金 / SWF | 米国機関投資家 / 邦銀グローバル分業 / 米国上場日本企業 ADR | 外国年金 / SWF / 邦銀海外運用 / ADR / 米国機関投資家 |
| クロスボーダーカストディ | コア機能 (世界最大) | コア機能 (Custodian + 投信 admin) | コア機能 + 米証券業務一体 | コア機能 + 多通貨決済網 |
| DVP-X1/X2/X3 決済 | 直接 (信託銀行経由) | 直接 (信託銀行経由) | 直接 (信託銀行経由) | 限定 (証券業務側) |
| JSCC 接続 | 直接 (信託銀行 + 支店) | 直接 (信託銀行 + 支店) | 直接 (信託銀行 + 支店) | 証券子会社 (CGMJ) 経由 |
| JASDEC 接続 | 直接 | 直接 | 直接 | 直接 (支店) |
| ICSD ゲートウェイ (Euroclear / Clearstream) | グローバル ICSD ネットワーク直接接続 | グローバル ICSD ネットワーク直接接続 | グローバル ICSD ネットワーク直接接続 | グローバル ICSD ネットワーク直接接続 |
| スペシャルティ領域 | ADR / Securities Services / トークン化資産 (検討) / 米国 OFAC 対応 | Asset servicing + 投信 administration + SSGA との連携 (パッシブ ETF custody) | 米証券一体 + プライムブローカレッジ周辺 + ADR / DR | 多通貨決済 + 新興国 sub-custody + 大手 EM カストディ |
| 価格交渉力 対 邦銀 | 高 (グローバル必須機能で価格は手数料率より相対安定) | 高 (パッシブ ETF / 投信 admin で規模効果) | 高 (米国一体サービス) | 中高 (新興国 + 米国強み) |

## 陣営横断マトリクスビュー

| 次元 | 日本の信託銀行 | グローバルカストディアン (日本) |
|---|---|---|
| 主管規制当局 | 金融庁 (FSA) — 銀行法 + 信託業法 | 金融庁 (FSA) + 母国規制 (FRB / OCC / ECB / 英 PRA) |
| 主たる資産ユニバース | 国内株式 / JGB / 国内投信 / 公的年金資産 (うち国内分) | 海外株式 / 海外債券 / 邦銀の海外運用資産 / ADR / 外国年金資金の日本投資 |
| 決済インフラ | [[securities/japan-securities-depository-center|JASDEC]] / [[securities/japan-securities-clearing-corp|JSCC]] / BoJ JGB システム 直接接続 | グローバル ICSD (Euroclear / Clearstream) + 日本側は JASDEC / JSCC へ |
| 受益者集中度 | GPIF + 大手投信 + 公的年金 (国内ベース) | 邦銀グローバル + 外国年金 / SWF + 海外投信 (国際ベース) |
| 議決権 / ガバナンス機能 | 「信託口」名義 — 議決権指図は委託者 (運用機関 / 年金) | sub-custodian として通過、議決権は最終 beneficial owner / global custodian の委託者 |
| 価格交渉力 | 国内インフラ 2 強 (Master Trust + CBJ) は強い独占的価格、その他は中程度 | 高い (グローバル必須機能性 + 規模) — 邦銀代替は構造的に困難 |
| 直近の集約 | **2020-07 JTSB + TCSB → CBJ** に類する集中化が継続 | グローバル統合は完了済 (BNY + Mellon 2007、State Street 単一系統、Citi / JPM は内部統合) |

## マスタートラスト 対 日本カストディ銀行 — 2020 統合の意味

**2020-07-27 JTSB (日本トラスティ・サービス信託銀行) + TCSB (資産管理サービス信託銀行) → [[trust-banks/custody-bank|日本カストディ銀行]]** という統合は、日本のカストディ・インフラの 2 強体制を **MUFG 系 [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行]] vs SMTB / Mizuho / Resona / 第一生命系 [[trust-banks/custody-bank|日本カストディ銀行]]** として明確化したイベントである。^[extracted]

統合理由として公開資料は次を示す:

1. 国内パッシブ運用拡大 + 公的年金資産の規模拡大による情報処理能力要件
2. システム重複コストの圧縮 (JTSB + TCSB は別個の投信計算 / カストディ システムを保有していた)
3. 議決権電子行使 / コーポレートアクション電子化への対応投資集約

## 価格交渉力のダイナミクス

| 側面 | 国内信託銀行 | グローバルカストディアン |
|---|---|---|
| 顧客交渉力 | 規模効果 + リレーションで Master Trust / CBJ は強い | グローバル必須機能性で全社強い |
| 代替可能性 | 国内インフラ集約により国内では限定的 | 母国規制 + 母国システム接続性で邦銀代替は構造的困難 |
| クロス販売 | 不動産 / 年金 / 相続 / 投資銀行リレーション (full-service trust bank) | グローバル運用 / 証券業務 / プライムブローカレッジ |
| 規制資本コスト | 国内 RWA 中心 | グローバル統合資本 (G-SIB バッファ含む — BNY Mellon / State Street / JPM / Citi 全社 G-SIB 認定) |

## 解釈ルール

| 公開情報の見方 | 正しい読み方 |
|---|---|
| 「日本マスタートラスト信託銀行 (信託口)」が筆頭株主に登場 | 名義人。受益者は GPIF / 投信 / 機関投資家。議決権指図は委託者側。^[extracted] |
| 「日本カストディ銀行 (信託口)」が筆頭株主に登場 | 同上。CBJ は名義人で、SMTB / Mizuho / Resona / 第一生命系の委託資産の集約。^[extracted] |
| 「BNY Mellon」や「State Street」が外国法人株主に登場 | 外国機関投資家のグローバルカストディ口座経由の名寄せ。BNY / State Street 自体の戦略保有ではない。^[extracted] |

## リサーチチェックリスト

1. オーナーシップに関する結論を導く前に、カストディバンクへの言及が **エンティティ / 株主名義人 / マンデートホルダー** のいずれであるかを [[banking/japan-trust-bank-custody-map|trust-bank custody map]] を用いて確認すること。
2. スペシャリストバンクについては、**銀行法 + 信託業法 の下の正規の信託銀行**であるか、それとも純粋な 信託会社 であるかを確認すること — 銀行ルートのみが DVP / JGB 振替に直接参加できる。
3. グローバルカストディアンについては、その日本オペレーションが **自社の 信託銀行 ライセンス** を持つ (BNY / State Street / JPM) か、それとも 外国銀行支店 + 証券子会社 のルートのみで運営する (シティのパターン) かを特定すること。
4. ICSD ゲートウェイへのアクセス (Euroclear / Clearstream) を、真にグローバルなカストディアンと国内スペシャリストとの間の **分水嶺** として扱うこと — 国内スペシャリストは通常、外国資産をグローバルカストディアン経由で再ルーティングする。
5. すべての AUC / AuA / 受託資産 の数値は、市場価格や新規マンデートとともに動くため、出典日付を付すこと; マスタートラストの ¥823兆 (2025) および CBJ の ¥696兆 (2025-03) のアンカーは公式開示の要約点であり、リアルタイムの数値ではない。
6. マンデートのフローを理解するため、[[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] を通じてクライアントサイドを相互リンクすること。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smtb]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nomura-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[trust-banks/sbi-shinsei-trust-bank]]
- [[trust-banks/jsf-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[INDEX|FinWiki index]]

## 出典

- 信託協会: 信託銀行の説明、会員一覧、信託資産統計。
- 日本マスタートラスト信託銀行: 公式会社 / 事業概要 (受託資産 ¥823兆 アンカー, https://www.mastertrust.co.jp/about/overview.html)。
- 日本カストディ銀行: 公式会社 / 事業説明 (2020-07-27 JTSB + TCSB 合併を含む); ディスクロージャー報告 受託財産合計 ¥696兆 / 信託財産 ¥476兆 2025-03-31時点 (https://www.custody.jp/data/disclosure/index.html)。
- BNY メロン日本: 公式日本ページおよびアセットサービシング開示; グループ AUC/A $52.1兆 2024-12-31時点 (Q4 2024 決算リリース, https://www.bny.com/assets/corporate/documents/pdf/investor-relations/earnings-press-release-january-2025.pdf)。
- ステート・ストリート日本: 公式日本ページ; グループ AUC/A $46.6兆 2024-12-31時点 (Q4/FY2024 決算プレスリリース, https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx)。
- JP モルガン: Securities Services AUC $35.8兆 2024Q3 時点 (JPMorgan Chase 3Q24 決算プレゼンテーション, SEC Form 8-K, https://www.sec.gov/Archives/edgar/data/0000019617/000001961724000558/a3q24_earningsxpresentat.htm)。
- シティ: Securities Services AUC/A 約 $26兆 2024 向け (Citigroup Q4/FY2024 決算プレスリリース, https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q42024/4Q24-earnings-press-release.pdf)。
- FSA: 信託業金融機関一覧 (信託銀行 セクション)、銀行ライセンス一覧、監督指針セクション。
- JASDEC: 証券振替および保管振替システム資料。
- JSCC: クリアリングおよび DVP 現物株式資料。
- BoJ: JGB 振替決済システム資料。

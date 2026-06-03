---
source: banking/japan-trust-bank-vs-global-custodian-comparison-matrix
source_hash: 41061d3e6a74f90e
lang: ja
status: machine
fidelity: ok
title: "日本の信託銀行 対 グローバルカストディアン 比較マトリクス"
translated_at: 2026-06-02T11:47:37.322Z
---

# 日本の信託銀行 対 グローバルカストディアン 比較マトリクス

## 要約

日本の信託銀行カストディ事業者（フルサービス信託銀行、資産管理専業、中小信託銀行）と、日本で営業するグローバルカストディアン（BNY Mellon、State Street、JP Morgan、Citi）を並べて比較する。この二陣営は直接の代替関係にはない。日本の信託銀行は 信託業法 + 銀行法 のデュアル経路の下で国内 JGB / 株式 / 公的年金 のカストディを支配し、一方グローバルカストディアンは外国人投資家向けのサブカストディ受託と、ICSD ゲートウェイ経由のクロスボーダー資産サービシングを担う。マトリクスを正しく読むことで、「信託口」の名義人名を、あたかも銀行自身が経済的投資家であるかのように扱う頻出の誤りを避けられる。

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の配下にある。既存のカストディ領域マップについてはピアエントリの [[banking/japan-trust-bank-custody-map|Japan trust bank and custody map]]、[[banking/japan-master-trust-and-custody-bank-landscape|master trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] と；エンティティの文脈については [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]]、[[JapanFG/mizuho-trust-bank|みずほ信託銀行]]、[[JapanFG/smtb|三井住友信託銀行]]、[[JapanFG/bny-mellon-japan|BNY Mellon Japan]] と；システムのアンカーとして [[JapanFG/master-trust-bank|日本マスタートラスト信託銀行]] と [[JapanFG/custody-bank|日本カストディ銀行]] と；そしてクリアリング / 決済インフラについては [[securities/japan-securities-clearing-corp|JSCC]] と [[securities/japan-securities-depository-center|JASDEC]]、加えてクライアント側については [[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] と照らし合わせて読むこと。

## 対象母集団

**日本の信託銀行カストディ側（10 社）**

- フルサービス信託銀行: [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行 (MUFG Trust)]]、[[JapanFG/mizuho-trust-bank|みずほ信託銀行 (Mizuho Trust)]]、[[JapanFG/smtb|三井住友信託銀行 (SMTB)]]
- 外資系列のリテール / ウェルス信託銀行: [[JapanFG/smbc-trust-bank|SMBC信託銀行]]
- 専門 / グループ内部信託銀行: [[JapanFG/nomura-trust-bank|野村信託銀行]]、[[JapanFG/nochu-trust-bank|農中信託銀行]]、[[JapanFG/sbi-shinsei-trust-bank|SBI新生信託銀行]]、[[JapanFG/jsf-trust-bank|JSF信託銀行]]
- 資産管理専業（信託口の名義アンカー）: [[JapanFG/master-trust-bank|日本マスタートラスト信託銀行]]、[[JapanFG/custody-bank|日本カストディ銀行]]

**グローバルカストディアン側（4 社）**

- [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] (BNY メロン信託 + 東京支店 + AM JP)
- [[JapanFG/state-street-japan|State Street Japan]]
- [[JapanFG/jpmorgan-japan|JP Morgan Custody Japan]] (Securities Services 部門)
- [[JapanFG/citigroup-japan|Citi custody Japan]] (Citigroup Global Markets Japan + Citibank N.A. Tokyo)

## 比較マトリクス（日本の信託銀行）

| 項目 | MUFG Trust | Mizuho Trust | SMTB | SMBC Trust | Nomura Trust | Norinchukin Trust | Master Trust | Custody Bank of Japan | SBI Shinsei Trust | JSF Trust |
|---|---|---|---|---|---|---|---|---|---|---|
| Legal entity type | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 | 信託銀行 (専業) | 信託銀行 (専業) | 信託銀行 | 信託銀行 |
| License route | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 (custody-only) | 銀行法 + 信託業法 兼営 (custody-only) | 銀行法 + 信託業法 兼営 | 銀行法 + 信託業法 兼営 |
| Statutory custodian role | 受託 / カストディ / 名義代行 / DVP 決済 | 受託 / カストディ / 名義代行 / DVP 決済 | 受託 / カストディ / 名義代行 / DVP 決済 | リテール信託中心 / カストディ限定 | グループ内信託 + 投信信託受託 | 農林系信託受託 | カストディ + 年金信託 + 投信受託 専業 | カストディ + 年金信託 + 投信受託 専業 | グループ内 + 不動産信託中心 | 証券金融グループ内信託 |
| AUC / AuA class | ¥100tn+ | ¥10–100tn | ¥100tn+ | <¥10tn | <¥10tn | <¥10tn | ¥823tn (受託資産, 2025) | ¥696tn (受託財産合計, 2025-03) | <¥10tn | <¥10tn |
| Major client types | 公的年金 / 投信 / 機関投資家 / 事業法人 | 投信 / 機関投資家 / 公的年金 | 公的年金 / 投信 / 機関投資家 / 事業法人 | 個人富裕層 / 信託代理 | グループ証券・投信 / 機関投資家 | 農林系金融機関・JA バンク | GPIF / 大手投信 / グローバルカストディ sub-route | 大手投信 / 公的年金 / 機関投資家 | グループ内 / 不動産投資家 | 証券金融子会社 + 機関投資家 |
| Cross-border custody | あり (海外サブカストディ網) | あり | あり | 限定的 | 限定的 | なし | 海外資産は外資カストディに再委託 | 海外資産は外資カストディに再委託 | なし | なし |
| DVP-X1/X2/X3 settlement | フル参加 | フル参加 | フル参加 | 部分参加 | 部分参加 | 部分参加 | フル参加 (大量) | フル参加 (大量) | 部分参加 | 部分参加 |
| JSCC 接続 | 直接 | 直接 | 直接 | 親銀行経由 | 直接 (証券系) | 親系統経由 | 直接 (大量) | 直接 (大量) | 親銀行経由 | 直接 (証券金融) |
| JASDEC 接続 | 直接 | 直接 | 直接 | 直接 | 直接 | 直接 | 直接 (大量) | 直接 (大量) | 直接 | 直接 |
| ICSD gateway (Euroclear / Clearstream) | 直接 + サブカストディ | 直接 + サブカストディ | 直接 + サブカストディ | 親銀行 SMBC 経由 | 親 (野村) 経由 + 自社限定 | 外資カストディ経由 | 外資 ICSD 接続 (BNY / State Street サブ) | 外資 ICSD 接続 (BNY / State Street サブ) | 外資カストディ経由 | 外資カストディ経由 |
| M&A / 統合歴 | 三菱信託 + UFJ 信託 (2005-10) | みずほ信託 (旧 安田 + 第一勧業 + 富士 信託統合系譜) | 中央三井 + 住友 (2011-04) | 旧 SMBC 信託 + プレスティア (シティ NA 個人部門 2015 譲受) | 1993 設立 (野村系子会社) | 設立統合 | 2000-05 設立 (MUFG + 日本生命 + 明治安田 + 農中信託) | **2020-07-27 JTSB + TCSB 合併** ★ | SBI 系 (旧 新生信託) | 日本証券金融子会社 |
| Pricing power | 強 (規模 + リレーション) | 中強 | 強 | 中 (リテール富裕層) | 中 (グループ内) | 中 (系統内) | 強 (規模独占に近い) | 強 (規模独占に近い) | 弱 (規模小) | 弱 (専業狭領域) |

## 比較マトリクス（日本のグローバルカストディアン）

| 項目 | BNY Mellon Japan | State Street Japan | JP Morgan Japan | Citi Japan |
|---|---|---|---|---|
| Legal entity type | 信託銀行 (BNY メロン信託) + 外国銀行支店 (東京支店) + AM 子会社 | 信託銀行 (ステート・ストリート信託) + 外国銀行支店 | 信託銀行 + 外国銀行支店 (JPMorgan Chase Bank N.A. Tokyo) + 証券子会社 | 外国銀行支店 (Citibank N.A. Tokyo) + 証券子会社 (Citigroup Global Markets Japan) |
| License route | 銀行法 (支店) + 信託業法 (信託銀行) | 銀行法 (支店) + 信託業法 (信託銀行) | 銀行法 (支店) + 信託業法 (信託銀行) | 銀行法 (支店) + 金商法 (証券) |
| Statutory custodian role | グローバルカストディ / 海外資産保管 / ADR 代理人 / sub-custodian | グローバルカストディ / 公的年金 sub-custodian / 投信 sub-custodian | グローバルカストディ + 機関投資家サービス + ADR 代理人 | グローバルカストディ + ADR 代理人 + 証券業務 |
| AUC / AuA class (Japan 専有部分) | 非開示 (親会社グローバル AUC/A 約 $52tn, 2024-12 ^[extracted]) | 非開示 (親会社グローバル AUC/A 約 $46.6tn, 2024-12) | 非開示 (親会社 Securities Services AUC 約 $35.8tn, 2024Q3) | 非開示 (親会社 Securities Services AUC/A 約 $26tn, 2024) |
| Major client types | GPIF / 公的年金 / 大手投信 / 邦銀海外運用 / 外国年金 / SWF | GPIF / 公的年金 / SSGA 系投信 / 外国年金 / SWF | 米国機関投資家 / 邦銀グローバル分業 / 米国上場日本企業 ADR | 外国年金 / SWF / 邦銀海外運用 / ADR / 米国機関投資家 |
| Cross-border custody | コア機能 (世界最大) | コア機能 (Custodian + 投信 admin) | コア機能 + 米証券業務一体 | コア機能 + 多通貨決済網 |
| DVP-X1/X2/X3 settlement | 直接 (信託銀行経由) | 直接 (信託銀行経由) | 直接 (信託銀行経由) | 限定 (証券業務側) |
| JSCC 接続 | 直接 (信託銀行 + 支店) | 直接 (信託銀行 + 支店) | 直接 (信託銀行 + 支店) | 証券子会社 (CGMJ) 経由 |
| JASDEC 接続 | 直接 | 直接 | 直接 | 直接 (支店) |
| ICSD gateway (Euroclear / Clearstream) | グローバル ICSD ネットワーク直接接続 | グローバル ICSD ネットワーク直接接続 | グローバル ICSD ネットワーク直接接続 | グローバル ICSD ネットワーク直接接続 |
| Specialty fields | ADR / Securities Services / トークン化資産 (検討) / 米国 OFAC 対応 | Asset servicing + 投信 administration + SSGA との連携 (パッシブ ETF custody) | 米証券一体 + プライムブローカレッジ周辺 + ADR / DR | 多通貨決済 + 新興国 sub-custody + 大手 EM カストディ |
| Pricing power vs 邦銀 | 高 (グローバル必須機能で価格は手数料率より相対安定) | 高 (パッシブ ETF / 投信 admin で規模効果) | 高 (米国一体サービス) | 中高 (新興国 + 米国強み) |

## 陣営横断のマトリクス・ビュー

| 観点 | 日本の信託銀行 | グローバルカストディアン（日本） |
|---|---|---|
| Primary regulator | 金融庁 (FSA) — 銀行法 + 信託業法 | 金融庁 (FSA) + 母国規制 (FRB / OCC / ECB / 英 PRA) |
| Primary asset universe | 国内株式 / JGB / 国内投信 / 公的年金資産 (うち国内分) | 海外株式 / 海外債券 / 邦銀の海外運用資産 / ADR / 外国年金資金の日本投資 |
| Settlement infrastructure | [[securities/japan-securities-depository-center|JASDEC]] / [[securities/japan-securities-clearing-corp|JSCC]] / BoJ JGB システム 直接接続 | グローバル ICSD (Euroclear / Clearstream) + 日本側は JASDEC / JSCC へ |
| Beneficial-owner concentration | GPIF + 大手投信 + 公的年金 (国内ベース) | 邦銀グローバル + 外国年金 / SWF + 海外投信 (国際ベース) |
| Voting / governance role | 「信託口」名義 — 議決権指図は委託者 (運用機関 / 年金) | sub-custodian として通過、議決権は最終 beneficial owner / global custodian の委託者 |
| Pricing power | 国内インフラ 2 強 (Master Trust + CBJ) は強い独占的価格、その他は中程度 | 高い (グローバル必須機能性 + 規模) — 邦銀代替は構造的に困難 |
| Recent consolidation | **2020-07 JTSB + TCSB → CBJ** に類する集中化が継続 | グローバル統合は完了済 (BNY + Mellon 2007、State Street 単一系統、Citi / JPM は内部統合) |

## Master Trust 対 Custody Bank of Japan — 2020 統合の意味

**2020-07-27 JTSB (日本トラスティ・サービス信託銀行) + TCSB (資産管理サービス信託銀行) → [[JapanFG/custody-bank|日本カストディ銀行]]** という統合は、日本のカストディ・インフラの 2 強体制を **MUFG 系 [[JapanFG/master-trust-bank|日本マスタートラスト信託銀行]] vs SMTB / Mizuho / Resona / 第一生命系 [[JapanFG/custody-bank|日本カストディ銀行]]** として明確化したイベントである。^[extracted]

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

1. [[banking/japan-trust-bank-custody-map|trust-bank custody map]] を用いて、カストディ銀行への言及が **エンティティ / 株主名義人 / マンデート保有者** のいずれであるかを、所有に関する結論を導く前に確認する。
2. 専門銀行については、それが **銀行法 + 信託業法 の下の正規の信託銀行** か、それとも純粋な 信託会社 かを確認する — 銀行経路のみが DVP / JGB 振替決済に直接参加できる。
3. グローバルカストディアンについては、その日本拠点が **自前の 信託銀行 ライセンス** を持つ (BNY / State Street / JPM) のか、それとも 外国銀行支店 + 証券子会社 経路のみで運営している (Citi パターン) のかを特定する。
4. ICSD ゲートウェイ・アクセス (Euroclear / Clearstream) を、真にグローバルなカストディアンと国内専門業者を分ける **境界線** として扱う — 国内専門業者は通常、外国資産をグローバルカストディアン経由で再ルーティングする。
5. すべての AUC / AuA / 受託資産 の数値には出典日を付す。これらは市場価格と新規マンデートに伴って変動するためである; Master Trust の ¥823tn (2025) と CBJ の ¥696tn (2025-03) のアンカーは公式開示の要約点であってリアルタイムの数値ではない。
6. マンデートのフローを理解するため、[[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] を介してクライアント側をクロスリンクする。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/smtb]]
- [[JapanFG/smbc-trust-bank]]
- [[JapanFG/nomura-trust-bank]]
- [[JapanFG/nochu-trust-bank]]
- [[JapanFG/sbi-shinsei-trust-bank]]
- [[JapanFG/jsf-trust-bank]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[JapanFG/euroclear-bank-japan]]
- [[JapanFG/clearstream-banking-japan]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[INDEX|FinWiki index]]

## 出典

- 信託協会: 信託銀行の説明、会員一覧、信託資産統計。
- 日本マスタートラスト信託銀行: 公式の会社 / 事業概要 (受託資産 ¥823tn アンカー, https://www.mastertrust.co.jp/about/overview.html)。
- 日本カストディ銀行: 公式の会社 / 事業説明 (2020-07-27 JTSB + TCSB 合併を含む); ディスクロージャー報告書 受託財産合計 ¥696tn / 信託財産 ¥476tn (2025-03-31 時点) (https://www.custody.jp/data/disclosure/index.html)。
- BNY Mellon Japan: 公式の日本ページおよび資産サービシング開示; グループ AUC/A $52.1tn (2024-12-31 時点) (Q4 2024 決算リリース, https://www.bny.com/assets/corporate/documents/pdf/investor-relations/earnings-press-release-january-2025.pdf)。
- State Street Japan: 公式の日本ページ; グループ AUC/A $46.6tn (2024-12-31 時点) (Q4/FY2024 決算プレスリリース, https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx)。
- JP Morgan: Securities Services AUC $35.8tn (2024Q3 時点) (JPMorgan Chase 3Q24 決算プレゼンテーション, SEC Form 8-K, https://www.sec.gov/Archives/edgar/data/0000019617/000001961724000558/a3q24_earningsxpresentat.htm)。
- Citi: Securities Services AUC/A 約 $26tn (2024 ) (Citigroup Q4/FY2024 決算プレスリリース, https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q42024/4Q24-earnings-press-release.pdf)。
- FSA: 信託業務を営む金融機関一覧 (信託銀行 セクション)、銀行免許一覧、監督指針セクション。
- JASDEC: 証券振替および保管制度の資料。
- JSCC: クリアリングおよび DVP 現物株式の資料。
- BoJ: JGB 振替決済制度の資料。

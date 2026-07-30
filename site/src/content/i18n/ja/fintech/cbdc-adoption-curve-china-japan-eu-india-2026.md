---
source: fintech/cbdc-adoption-curve-china-japan-eu-india-2026
source_hash: bb97b0a1de3734d1
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "CBDC プログラムの状況 2026 — 中国 e-CNY・インド eRupee・EU デジタルユーロ・日本の試験運用"
translated_at: 2026-07-29T17:58:52.645Z
---
# CBDC プログラムの状況 2026 — 中国 e-CNY・インド eRupee・EU デジタルユーロ・日本の試験運用

## TL;DR

2026-07-30 時点で、4 法域を単一の「普及曲線」に載せるには注意が必要である。中国は e-CNY の試験運用を広域で継続し、PBoC は e-CNY を M0 統計に含める。インドはリテール / ホールセールの両試験運用を継続し、2026-04-29 更新の RBI FAQ はリテールウォレットを提供する 19 の銀行とホールセールの 16 の参加機関を明記する。ホールセールでは、国債流通市場取引の資金決済、コール市場の銀行間貸借決済、譲渡性預金証書のトークン化された発行 / 決済という 3 つの継続中ユースケースが示される。EU はデジタルユーロを未発行で、2027 H2 の管理されたベータ試験を準備中であり、発行判断は未了である。日本は BoJ の試験運用を継続しているが、DCJPY は民間銀行の預金トークンであり、日本の CBDC の本番展開ではない。

## ウィキ上の位置づけ

この項目は、日付を伴うプログラム状況の比較として [[fintech/INDEX|フィンテック索引]] の配下にある。[[fintech/erupee-india-pilot-status|eRupee の試験状況]]、[[fintech/e-euro-retail-rollout|デジタルユーロの展開]]、[[fintech/jp-stablecoin-dcjpy|DCJPY]]、[[fintech/cbdc-multi-tier-architecture-overview|CBDC アーキテクチャ概要]] とあわせて読む。

## 状況マトリクス

下表は [PBoC の公開説明](https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html)、[RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[ECB デジタルユーロプロジェクト](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[BoJ CBDC ページ](https://www.boj.or.jp/paym/digital/) に基づく 2026-07-30 時点の状況比較である。

| 法域 | 中央銀行プログラム | 公開状況 | 推定してはならないこと |
|---|---|---|---|
| 中国 | e-CNY | 試験プログラムを継続。e-CNY は中央銀行マネーで、M0 統計に算入 | ウォレット登録数や累積取引件数はアクティブ利用者数ではない |
| インド | e₹-R / e₹-W | リテール試験は 19 のウォレット提供銀行、ホールセール試験は 16 の参加機関と 3 つの継続中ユースケース | UPI の取引量は e₹ の取引量ではない |
| ユーロ圏 | デジタルユーロ | 技術準備段階。管理されたベータ試験を 2027 H2に予定。発行判断は未了 | 試験準備は発行ではない |
| 日本 | BoJ のリテール CBDC 試験 | 技術実験と CBDC フォーラムを継続 | DCJPY / Progmat は BoJ の CBDC ではない |

## 公開されている参加指標

以下の表は [PBoC の説明](https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html)、[RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[ECB のプロジェクト / 試験ページ](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[BoJ CBDC ページ](https://www.boj.or.jp/paym/digital/) が明示する範囲に限定する。粒度の異なる値を無理に順位付けしない。

| プログラム | 公式に記載された指標 | 基準日 / 制約 |
|---|---|---|
| e-CNY | PBoC は RMB 13.61B の流通額を 2022 の年末時点で報告し、試験運用が拡大していると説明 | 過去時点の残高であり、現在のアクティブ利用者数ではない |
| e₹ リテール | 現在 19 の銀行が CBDC ウォレットを提供 | RBI FAQ は 2026-04-29 更新、2026-07-30 確認 |
| e₹ ホールセール | 16 の参加機関。国債流通市場決済、コールマネー決済、譲渡性預金証書のトークン化された発行 / 決済を含む 3 つの継続中ユースケース | RBI FAQ は 2026-04-29 更新、2026-07-30 確認 |
| デジタルユーロ | リテール向けデジタルユーロは未発行。ベータ試験は管理されたベータ手段を使用 | ECB の現行プロジェクト / 試験ページ |
| 日本の CBDC | 試験システムのテストとフォーラム活動。一般向けリテール発行はない | BoJ の 2026 試験進捗ページ |

いずれの行も、比較可能な月間アクティブ利用者の系列を提供していない。以前の表は累積ウォレット登録数、取引額、都市数、民間トークン活動を混在させ、示唆される順位を不適切なものにしていた。

## アーキテクチャと流通

下表は [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[ECB プロジェクトページ](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[BoJ 試験資料](https://www.boj.or.jp/paym/digital/)、PBoC の公開説明から確認できる大枠のアーキテクチャを示す。

| プログラム | 債務 / 発行者 | 流通状況 | 既存決済網との関係 |
|---|---|---|---|
| e-CNY | PBoC の中央銀行マネー | 認可事業者を通じた試験流通 | 銀行およびモバイル決済網と併存 |
| e₹ | RBI の中央銀行マネー | リテール試験は 19 の銀行ウォレット提供者と参加ノンバンクを通じて実施。ホールセール試験は 16 の参加機関 | リテールウォレットは UPI QR を読み取り可能。その決済時期は UPI に従う |
| デジタルユーロ | 発行されれば Eurosystem の中央銀行マネー | 監督対象 PSP を通じた流通を提案 | 欧州の決済エコシステムとの統合を目指す設計 |
| 日本の試験運用 | 発行されれば BoJ の中央銀行マネー | 実験段階のみ | フォーラムで民間決済サービスとの併存を試験 |

## 上限、付利、プログラマビリティ

以下の表は決定済み事項と検討中事項を分ける。[RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) と [ECB 進捗ページ](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html) を直接参照する。

| プログラム | 公開資料で裏付けられる記述 |
|---|---|
| e-CNY | ウォレット / KYC の階層が存在。現在の上限は、恒久値として転記せず、公式事業者の規則で確認する必要がある |
| e₹ | リテール残高は無利息。プログラム可能機能とオフライン機能を試験中。ホールセールには、譲渡性預金証書のトークン化された発行 / 決済を含む 3 つの継続中ユースケースがある。RBI FAQ は一律の厳格な保有上限を記載していない |
| デジタルユーロ | 無利息となる予定。保有上限の算定方法を開発中で、最終的なユーロ金額は採択されていない |
| 日本の試験運用 | 設計上の選択肢は評価中。発行済み残高もリテール上限も存在しない |

## プログラムの成熟度

下表は「調査 / 試験運用 / 発行済み」の語を統一して比較する。資料は [ECB](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[RBI](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[BoJ](https://www.boj.or.jp/paym/digital/)、PBoC の公開説明である。

| プログラム | 調査 / 試験 | 限定的な実利用 | 広範な本番利用 |
|---|---|---|---|
| e-CNY | あり | 継続中の試験運用を通じてあり | 確認資料から全国一律の普及を主張しない |
| e₹ リテール / ホールセール | あり | 現行 RBI FAQ に記載された 19 のリテールウォレット提供銀行、16 のホールセール参加機関、3 つの継続中ホールセールユースケースに限定してあり | なし |
| デジタルユーロ | あり | 管理されたベータ試験を予定。まだ稼働していない | なし |
| 日本の CBDC | 試験システムあり | 一般向けリテール発行なし | なし |

有用な比較は「どの国が勝ったか」ではなく、どの証拠が調査環境、限定的な試験運用、または一般提供される通貨商品に属するかである。

## DCJPY は別の民間マネー経路

DCJPY はトークン化された銀行預金のプラットフォームである。流通や DvP の議論には参考となるが、Bank of Japan が発行したかのように CBDC の普及指標へ算入してはならない。事業体、プロジェクト、証拠の境界は [[fintech/jp-stablecoin-dcjpy|DCJPY]] を参照。

## 読み方の原則

1. ウォレット、残高、取引の各指標に日付と資料を付す。
2. 登録数をアクティブ利用者数と同一視しない。
3. UPI / Pix / CoDi の決済網取引量を CBDC 取引量と混同しない。
4. 管理されたベータトークンと発行済み法定通貨を分ける。
5. 商業銀行の預金トークンと民間ステーブルコインを、政府発行 CBDC の普及数に含めない。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/erupee-india-pilot-status|インド eRupee の試験状況]]
- [[fintech/e-euro-retail-rollout|デジタルユーロのリテール展開]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]
- [[fintech/bis-project-agora-overview|Project Agorá]]

## Sources

- PBoC — 2022 financial-statistics briefing / e-CNY in M0: https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html
- RBI — Digital Rupee FAQ (updated 2026-04-29): https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169
- RBI — Annual Report 2024-25: https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436
- ECB — Digital euro project: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — Progress: https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- ECB — Pilot: https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.en.html
- Bank of Japan — CBDC: https://www.boj.or.jp/paym/digital/

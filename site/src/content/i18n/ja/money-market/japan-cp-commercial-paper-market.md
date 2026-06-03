---
source: money-market/japan-cp-commercial-paper-market
source_hash: b67a46f694dbba93
lang: ja
status: machine
fidelity: ok
title: "日本の CP（コマーシャルペーパー）市場"
translated_at: 2026-06-02T16:33:58.489Z
---
# 日本の CP（コマーシャルペーパー）市場

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] の下に位置する。同業比較・対比の文脈は [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]]、より広い制度・規制上の境界は [[money-market/boj-open-market-operations|BoJ open market operations]] とあわせて読む。

## 要約

コマーシャルペーパー（CP）は、日本で適格な事業会社、銀行、ノンバンク金融機関が発行する短期の無担保約束手形型商品である。現在の CP はペーパーレス化され、短期社債振替制度として社債等振替法の枠組みに基づき [[securities/japan-securities-depository-center|JASDEC]] を通じて決済される。FinWiki では、CP は [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]]（銀行発行）および [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]]（国債発行）と並ぶ、事業会社発行体の短期資金調達レーンとして扱う。

CP 市場が重要なのは、社債市場の外側で優良企業の資金調達コストを観測できる最も分かりやすいシグナルであり、また日銀がストレス時や政策拡大期に [[money-market/boj-open-market-operations|open market operation]] のツールキットの一部として CP 買入や CP レポオペを使ってきたためである。

## 市場マップ

| レイヤー | 機能 | FinWiki ルート |
|---|---|---|
| 発行体 | 事業会社、銀行、ノンバンク金融機関、特別目的会社が短期資金を調達する。 | [[finance/japan-corporate-treasury-and-cash-management|corporate treasury]] |
| アレンジャー / ディーラー | 証券会社と銀行が CP 発行の組成、販売、マーケットメイクを担う。 | [[securities/japan-underwriting-market-structure]] |
| 投資家 | 銀行、資産運用会社、MMF / MRF、保険会社、海外投資家が短期利回り商品として CP を保有する。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| 決済 / 登録 | JASDEC の短期社債振替システムが、ペーパーレス形態の CP ポジションを保持する。 | [[securities/japan-securities-depository-center]] |
| オペ対象先 | 日銀は適格 CP を担保として受け入れ、期間によって CP 買入オペも実施してきた。 | [[money-market/boj-open-market-operations]] |
| 統計 | 日銀短期金融市場統計、JSDA CP 発行・残高表。 | 日銀 / JSDA 公開面 |

## 商品メカニクス

| 要素 | 読み方 |
|---|---|
| 法的形態 | 社債等振替法上の短期社債。旧来の約束手形形式を置き換えた。 |
| 期間 | 通常 1 日から 1 年未満。多くの発行は 1 か月、3 か月、および四半期末付近の償還に集中する。 |
| 形態 | JASDEC の短期社債振替制度を通じて完全ペーパーレス化。 |
| 発行方法 | 割引発行。発行価格と償還額の差が投資家の利回りになる。 |
| 格付 | 国内 CP 格付（R&I、JCR、S&P Japan、Moody's Japan）は通常 a-1  / J-1 階層。格付はディーラーの販売力と日銀担保適格性に影響する。 |
| 税務 | 源泉税の取扱いは投資家区分によって異なる。個人投資家向けには機関投資家型 MRF / MMF 保有が主な経路となる。 |

## テナーと発行体構成

CP 発行は短期テナーに集中し、高格付の発行体が中心である。

- **銀行系・銀行グループ CP**: メガバンクグループによる短期資金調達とグループ ALM のための大規模発行。金融子会社 CP や銀行持株会社プログラムを含む。
- **ノンバンク CP**: 消費者信用、リース、商社金融の発行体が、債権や運転資金をロールする CP プログラムで調達する。発行体クラスターは [[finance/japan-consumer-credit-and-leasing-finance-landscape|consumer credit / leasing landscape]] を参照。
- **事業会社 CP**: 優良メーカー、公益、商社が、運転資金、配当、納税タイミング調整のために CP を発行する。商社クラスターは [[finance/japan-trading-house-finance-arm-landscape|sogo shosha finance arms]] と重なる。
- **資産担保 CP（ABCP）**: 売掛債権、リース債権、自動車ローンを裏付けとするコンデュイット。ABCP 発行は通常の CP より小さいが、ストラクチャード・ファイナンスの短期調達レールとして典型的である。

テナー分布は 1か月と 3か月の窓に偏る。MRF、銀行財務、事業会社の余資運用からの需要がそこに集中するためである。四半期末や年度末付近の発行では、バランスシート余力が締まるとスプレッド拡大が見られることがある。

## 日銀適格性とオペ

| 日銀ツール | CP との関係 |
|---|---|
| 担保枠組み | 適格 CP は共通担保資金供給オペ等の日銀貸出担保として受け入れられる。適格要件は格付、残存期間、発行体種別、ペーパーレス化の状態を含む。 |
| CP レポオペ | 日銀は資金供給手段として、買戻条件付き CP 買入オペを実施してきた。 |
| CP アウトライト買入 | 金融ストレス時や量的拡大期に、日銀は資産買入ツールキットの一部として CP の outright 買入を実施してきた。 |
| 2024 後の枠組み | 2024 年 3 月のマイナス金利からの制度変更後、日銀は標準的な担保・レポ設備を維持しつつ、例外的な企業資産買入プログラムを段階的に縮小している。現在のメニューは必ず日銀の市場調節ページで確認する。 |

CP 買入ツールは、歴史的には重要な危機対応面（2008-2009 世界金融危機、2020 COVID-19 資金ストレス）だったが、恒久的な金融政策手段ではない。

## 市場規模と読み方

| 出典 | 何を示すか |
|---|---|
| 日銀短期金融市場統計 | CP、TDB、NCD、コール残高を含む商品別残高。 |
| JSDA CP 発行・残高表 | 発行額、残高、業種別・格付別の発行体内訳。 |
| JASDEC 短期社債統計 | ペーパーレス CP 保有を示す振替登録残高。 |
| 格付会社プログラムレポート | 個別発行体のプログラム枠、格付、直近発行ペース。 |

CP 残高は、企業の短期資金需要のフロー指標として読む。CP 残高を [[money-market/japan-ncd-negotiable-cd-market|NCD]] や [[money-market/japan-tbill-treasury-discount-bill|TDB]] の残高と比較し、短期円流動性がどこに滞留しているかを三角測量する。

## JapanFG での関連性

- メガバンクグループ [[JapanFG/mufg]]、[[JapanFG/smfg]]、[[JapanFG/mizuho-fg]] は、銀行勘定や信託子会社を通じて主要な CP 投資家である。
- 証券会社 [[JapanFG/nomura-hd]]、[[JapanFG/daiwa-sg]]、[[JapanFG/mizuho-securities]]、[[JapanFG/mufg-mums]]、[[JapanFG/smbc-nikko]] は CP プログラムを組成し、プライマリー販売を担う。
- [[JapanFG/tokyo-tanshi]]、[[JapanFG/central-tanshi]]、[[JapanFG/ueda-yagi-tanshi]] は短期資金を仲介し、コール・レポ市場に隣接して CP 市場の仲介支援を提供する。
- [[JapanFG/japan-securities-finance]] は、CP と相互作用する担保・短期資金調達の配管に参加する。

## 境界事例

- **CP vs NCD**: CP は事業会社 / ノンバンク発行であり、NCD は銀行預金発行である。投資家は信用、税務、バランスシート上の取扱いに基づいて選択する。
- **CP vs TDB**: TDB は国の割引短期発行である。CP は発行体信用リスクを持ち、TDB / OIS に対するスプレッドで取引される。
- **CP vs 短期債**: 残存 1年未満の短期社債は経済的に重なるが、法的・登録ルートは異なる。
- **CP vs ABCP**: 通常の事業会社 CP は無担保である。ABCP は債権プールを裏付けとするストラクチャード・ファイナンス発行であり、ストラクチャード・クレジットの観点で読む。

## 読解チェックリスト

1. スプレッドや価格を読む前に、発行体種別（事業会社 / 銀行系 / ノンバンク / ABCP）を確認する。
2. 運用流動性が論点であれば、格付と日銀担保適格性を確認する。
3. テナー分布を確認する。平均テナーが見出し上の満期区分と同じだと仮定しない。
4. プライマリー発行ペースと残高変化を区別する。
5. CP 市場ストレスは [[money-market/jgb-repo-market-japan|JGB repo]] の状態と日銀オペメニューの変化に照らして読む。

## 関連項目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## 出典

- Bank of Japan: 短期金融市場の概要および短期金融市場統計。
- Bank of Japan: CP 適格性と CP 関連オペ手段を記載する市場調節ページ。
- JSDA: CP 発行・残高統計面。
- JASDEC: 短期社債振替制度の概要。
- FSA: 短期社債に関係する金融商品分類についての FIEA FAQ。

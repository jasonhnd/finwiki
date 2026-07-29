---
source: derivatives/topix-futures
source_hash: a2ae1c774d240e08
lang: ja
status: machine
fidelity: ok
title: "TOPIX 先物（OSE）"
translated_at: 2026-07-29T18:49:00+09:00
---

# TOPIX 先物（OSE）

## 要約

TOPIX 先物は、東証株価指数（TOPIX）を原資産とする取引所上場の株価指数先物である。JPX は TOPIX を、投資可能性を備え、日本株市場の広範な部分をカバーする浮動株調整時価総額加重ベンチマークと説明している。現在の構成銘柄は固定数を前提にせず、JPX の最新の構成銘柄情報で確認する必要がある。先物は大阪取引所（OSE）に上場し、[[securities/japan-securities-clearing-corp|JSCC]] で清算される。 ^[Source: https://www.jpx.co.jp/english/markets/indices/topix/.]

OSE は、標準の TOPIX 先物とミニ TOPIX 先物に加え、TOPIX Core30 先物や TOPIX Banks Index 先物など、現在提供されているサブインデックス契約も上場している。商品の存在だけから、利用者の順位、取引高の比較、投資家別シェアを判断することはできない。

FinWiki では、現行の契約仕様、日経 225 との指数算出手法の比較、根拠が確認できる範囲に限定した現物・先物ベーシスの分析枠組み、日本銀行の ETF 政策の経緯、サブインデックス先物、JSCC の証拠金制度を扱う。

## ウィキ上の位置づけ

本項目は [[derivatives/INDEX|デリバティブ索引]] に属する。株価平均型指数を原資産とする先物との比較には [[derivatives/nikkei-225-futures-options]]、個別銘柄の株式デリバティブとの補完関係には [[derivatives/japan-single-stock-options]] を参照する。上場市場は [[securities/osaka-exchange|大阪取引所]]、清算機関は [[securities/japan-securities-clearing-corp|JSCC]] であり、より広い [[securities/tokyo-stock-exchange|東証]] の現物株式市場が構成銘柄を提供する。

## 契約仕様

OSE は TOPIX 連動先物契約を主に二つ、加えて複数のサブインデックス先物を上場している:

以下の表は JPX の現行仕様を反映している。JPX の現行商品一覧に掲載されていない TOPIX 100 先物や、対象を特定していない業種別指数先物は除外した。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/mini-topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-core30futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-banks-index-futures/01.html.]

| 契約 | 原資産 | 乗数 | 呼値 | 上場限月 |
|---|---|---|---|---|
| TOPIX 先物（標準） | TOPIX | JPY 10,000 × 指数 | 0.5 指数ポイント（= 一ティック当たり JPY 5,000） | 六月・十二月限：直近 10 限月、三月・九月限：直近 3 限月 |
| ミニ TOPIX 先物 | TOPIX | JPY 1,000 × 指数（1/10） | 0.25 指数ポイント（= 一ティック当たり JPY 250） | 三月サイクルの直近 3 四半期限月 |
| TOPIX Core30 先物 | TOPIX Core30 | JPY 1,000 × 指数 | 0.5 ポイント（= 一ティック当たり JPY 500） | 三月サイクルの直近 3 四半期限月 |
| TOPIX Banks Index 先物 | TOPIX Banks Index | JPY 10,000 × 指数 | 0.1 ポイント | 三月サイクルの直近 3 四半期限月 |

すべての契約は、各限月の第二金曜日の朝に算出される Special Quotation（SQ）に対して現金決済される。SQ は SQ 日の原資産構成銘柄の始値から計算される。

上記四契約の通常取引時間は、08:45-15:45 JST および 17:00-翌日06:00 JST である。

## TOPIX と Nikkei 225：算出手法の違い

以下の比較は指数の算出手法に限定しており、利用者、業種構成の偏り、流動性、取引高の順位は推定しない。 ^[Sources: https://www.jpx.co.jp/english/markets/indices/topix/; https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225.]

| 観点 | TOPIX | Nikkei 225 |
|---|---|---|
| 公表上の対象範囲 | 日本株市場の広範な部分。JPX の最新の構成銘柄情報を参照 | 選定された 225 銘柄。日経の最新の構成銘柄情報を参照 |
| 加重方式 | 浮動株調整時価総額加重 | 株価平均型 |
| 指数算出者 | JPX 総研 | 日本経済新聞社 |
| 先物の取引単位 | 標準契約は TOPIX × JPY 10,000 | ラージ契約は Nikkei 225 × JPY 1,000 |

ヘッジ手段を比較する際は、実際の現物バスケットを各指数の算出手法に対応づけ、ベーシスリスクを測定する必要がある。商品設計だけでは、特定の投資家がどの契約を利用しているかは判断できない。

## 現物・先物ベーシスの分析枠組み

TOPIX の現物・先物ベーシスは測定できるが、商品ページだけでは、その大きさや方向、取引主体を特定できない。

1. **現物の参照値**：対象を明示した TOPIX 現物バスケット、またはベンチマークと商品構造を確認済みの上場中の TOPIX 連動 ETF を用いる。
2. **先物の参照値**：対応する TOPIX 先物の限月と同一時点の価格を用いる。
3. **キャリーの入力値**：資金調達コスト、予想配当、満期までの期間、取引費用を明記する。
4. **観測ベーシス**：時点をそろえた現物値と先物値を比較する。価格差だけから裁定ポジションを推定しない。

指定参加者やマーケットメイカーは、権限と開示の範囲内で現物と先物を組み合わせる場合があるが、本項目では実際の取引方向やシェアを推定しない。制度上の枠組みは [[securities/japan-market-maker-and-liquidity-provider-landscape|ETF マーケットメイク]] を参照する。

日本銀行は March 19, 2024 付で ETF と J-REIT の買入れを終了した。September 19, 2025 付の決定では、実務上の準備を終えた後、保有 ETF を簿価ベースで年間約 JPY 330 billion のペースで市場に売却するとし、将来そのペースを変更し得ることも明記した。これらの政策上の事実だけから、TOPIX ベーシスの方向や規模を判断することはできない。 ^[Sources: https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm; https://www.boj.or.jp/en/mopo/mpmdeci/state_2025/k250919a.htm.]

## 投資家データの適用範囲

投資家別シェア、口座区分、ヘッジ目的を述べるには、JPX の具体的なデータセット、商品、期間を示す必要がある。本項目では、TOPIX 先物の利用を推測して、生命保険会社、年金基金、銀行、運用会社、証券会社、海外投資家、個人投資家を分類しない。

## サブインデックス先物：Core30 と Banks

以下の表は、主要な TOPIX 商品と併せて、現在上場している TOPIX Core30 先物と TOPIX Banks 指数先物を示す。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/topix-core30futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-banks-index-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/index.html.]

| サブインデックス契約 | 原資産 | 取引単位 | 呼値 | 上場限月 |
|---|---|---|---|---|
| TOPIX Core30 先物 | TOPIX Core30 | JPY 1,000 × 指数 | 0.5 ポイント | 三月サイクルの直近 3 四半期限月 |
| TOPIX Banks Index 先物 | TOPIX Banks Index | JPY 10,000 × 指数 | 0.1 ポイント | 三月サイクルの直近 3 四半期限月 |

現在の取引状況や投資家の関心は、対象期間を明示した JPX の統計で確認する必要がある。本項目では、流動性の順位やイベントに伴う需要を推定しない。

## 清算と証拠金

以下の表は、JPX の現行契約仕様と JSCC の VaR 証拠金制度を反映している。 ^[Sources: https://www.jpx.co.jp/jscc/en/cash/futures/marginsystem/VaR.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/mini-topix-futures/01.html.]

| 要素 | 詳細 |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]]。約定時に債務引受 |
| 証拠金 | JSCC の現行 VaR 方式 |
| 決済 | JPX の現行仕様に基づく、商品別の SQ による現金決済 |
| デフォルト管理 | JSCC の現行規則に準拠 |

JSCC は適用する VaR 証拠金方式と現行パラメータを公表している。本項目では、すべてのポートフォリオの組み合わせに一律の相殺額が適用されるとはしていない。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/INDEX]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 日本取引所グループ／大阪取引所：現行の TOPIX 先物、ミニ TOPIX 先物、TOPIX Core30 先物、TOPIX Banks Index 先物の仕様。
- JPX：現行の TOPIX の説明、構成銘柄情報への経路、浮動株調整時価総額加重方式。
- 日本証券クリアリング機構：現行の VaR 証拠金方式。
- 日本銀行：March 19, 2024 の ETF 買入れ終了と、September 19, 2025 の ETF 売却方針決定。

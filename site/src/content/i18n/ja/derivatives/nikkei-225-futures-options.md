---
source: derivatives/nikkei-225-futures-options
source_hash: 4eb5b2796afefe66
lang: ja
status: machine
fidelity: ok
title: "日経 225 先物・オプション（OSE）"
translated_at: 2026-07-29T20:12:00+09:00
---

# 日経 225 先物・オプション（OSE）

## TL;DR

日本取引所グループ（JPX）傘下の大阪取引所（OSE）に上場する日経 225 先物・オプション群は、日経 225 株式エクスポージャーを取引所で構築する手段を提供する。先物は、日経 225 Futures（ラージ）、日経 225 mini（十分の一のサイズ）、日経 225 Micro Futures（さらに小型）の三サイズで、標準およびミニの日経 225 Options も上場する。いずれも [[securities/japan-securities-clearing-corp|JSCC]] で清算される。

CME Globex も日経 225 先物を上場している。OSE と CME はそれぞれ取引日程、売買高、建玉データを公表している。取引所間の活動や参加者構成は、商品の存在から推定せず、明示した期間について比較すべきである。

本項目は、契約仕様、ミニ／マイクロの小口契約層、週次オプション、OSE の取引時間、参加者構成、ならびに [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei 225 VI]] と [[derivatives/topix-futures|TOPIX futures]] との関係を扱う。

## Wiki ルート

本項目は [[derivatives/INDEX|derivatives index]] に属する。JPX のフラッグシップ指数先物のピアとして [[derivatives/topix-futures]]、同じオプションサーフェスのボラティリティ表現として [[derivatives/nikkei-vix-jpx-vi-equivalent]]、個別銘柄株式オプション市場として [[derivatives/japan-single-stock-options]] と対照しながら読まれたい。上場会場は [[securities/osaka-exchange|Osaka Exchange]]、清算層は [[securities/japan-securities-clearing-corp|JSCC]]、より広範な市場インフラの文脈は [[securities/japan-market-infrastructure-map]] である。

## 契約仕様

OSE は三つの日経 225 先物契約と日経 225 オプションサーフェスを上場している。

契約表は、本レビュー時点の JPX 現行商品仕様に基づく。水曜日／金曜日満期の週次契約は日経 225 mini Options に属し、標準の日経 225 Options 契約ではない。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225mini/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225micro-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225options/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225mini-options/index.html.]

| 契約 | 原資産 | 乗数 | 呼値 | 上場限月 |
|---|---|---|---|---|
| Nikkei 225 Futures（ラージ） | Nikkei 225 stock average | JPY 1,000 × 指数 | JPY 10（ティック当たり JPY 10,000） | 三月サイクルの四半期限月。六月／十二月は最長 8 年、三月／九月は最長 1.5 年 |
| Nikkei 225 mini | Nikkei 225 stock average | JPY 100 × 指数（1/10） | JPY 5（ティック当たり JPY 500） | 四半期限月に直近三つの月次限月を加える |
| Nikkei 225 micro Futures | Nikkei 225 stock average | JPY 10 × 指数（1/100） | JPY 5（ティック当たり JPY 50） | JPX の現行限月スケジュール |
| Nikkei 225 Options | Nikkei 225 stock average | オプション価格 × JPY 1,000 | JPY 1（プレミアム JPY 300 以下）、JPY 5（JPY 300 超） | 四半期限月に直近八つの月次限月を加える |
| Nikkei 225 mini Options | Nikkei 225 stock average | オプション価格 × JPY 100 | JPX の現行プレミアム呼値スケジュール | 水曜日および金曜日満期。第二金曜日の月次シリーズを含む |

ラージ、ミニ、マイクロの先物と標準の日経 225 Options は、各仕様に記載された第二金曜日の SQ サイクルを用いる。日経 225 mini Options はこれとは別に水曜日および金曜日満期を提供し、当該満期の SQ で最終決済する。

## 取引時間：OSE 日中、OSE ナイト、CME Globex

以下の OSE 時間は現行の通常セッション時間を正確に示す。CME は独自のセッション日程と休場規則を公表している。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html; https://www.cmegroup.com/markets/equities/international-indices/nikkei-225-yen.html.]

| 取引所／セッション | 時間 | 活動の位置付け |
|---|---|---|
| OSE 日中セッション | 08:45-15:45 JST | 日本時間帯の国内・クロスボーダー取引 |
| OSE ナイトセッション | 17:00-06:00 JST（翌日） | 欧州・米国時間帯との重複時間における取引 |
| CME Globex Nikkei 225（USD 建て・JPY 建て） | CME 商品カレンダーを参照 | 並行するクロスボーダー取引所 |

OSE と CME は、異なるカレンダーと契約条件を持つ並行取引所である。取引所間比較では、価格差や活動を測定する前に、時刻、通貨、限月を揃える必要がある。

OSE ナイトセッションと CME 上場契約には、取引可能時間が重なる区間がある。実際の利用可能性は各取引所のカレンダーに従い、時間外取引のシェアや口座の地域を述べるには、日付付きの取引所・参加者データが必要である。

## ミニとマイクロ：契約サイズの層

日経 225 mini（2006 年上場）と日経 225 Micro（2023 年上場）は、標準契約を小型化した契約である。

以下の表の契約サイズ比率と上場日は JPX に基づく。証拠金はリスクベースであり、あらゆる時点で機械的にサイズ比率と一致するわけではない。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/225mini/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225micro-futures/index.html; https://www.jpx.co.jp/jscc/en/cash/futures/marginsystem/VaR.html.]

| 側面 | ミニ | マイクロ |
|---|---|---|
| ラージ対比のサイズ | 1/10  | 1/100  |
| 証拠金の枠組み | JSCC VaR 方式 | JSCC VaR 方式 |
| 投資家構成 | 対象商品・期間の JPX 投資部門別統計を参照 | 対象商品・期間の JPX 投資部門別統計を参照 |
| 現在の売買高 | JPX の日次商品統計を参照 | JPX の日次商品統計を参照 |

ミニとマイクロは、ラージ契約に比べて契約サイズを小さくする。現在の利用状況と投資家構成は、契約サイズから推定せず、JPX の商品統計および投資部門別統計から読み取るべきである。

個人投資家のアクセスは、各 [[securities/INDEX|証券会社]]の現行商品メニュー、口座承認、適合性管理によって異なる。提供状況は一般的なオンライン証券一覧から推定せず、各社で直接確認すべきである（[[securities/japan-online-brokerage-competition]] を参照）。

## 週次オプション

以下の表は、日経 225 mini Options が標準的な第二金曜日の月次満期を超えて満期構成を拡張する仕組みを示す。 ^[Source: https://www.jpx.co.jp/english/derivatives/products/domestic/225mini-options/index.html.]

| 側面 | 詳細 |
|---|---|
| 満期サイクル | 毎週水曜日と金曜日。第二金曜日の月次シリーズ以外は週次契約 |
| 上場シリーズ | 第二金曜日以外の直近四つの金曜日満期、直近四つの水曜日満期、直近三つの第二金曜日限月 |
| スタイル | ヨーロピアン。週次 SQ に現金決済 |
| 想定される分析用途 | 短期イベント・ウィンドウ、ガンマ分析、損失限定型オプション構造。実際の利用は推定しない |

追加の水曜日・金曜日満期により、より短いイベント・ウィンドウを切り出すことができる。本稿では、これらを [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei 225 VI]] の直接の入力とは記述しない。日経の公開指数メソドロジーは、指定された期近・次期の日経 225 オプションを入力に用いる。

## 参加者構成

OSE は、取引統計を通じて日経先物・オプションの投資部門別内訳を公表している。

以下の表は公開統計への経路を示すもので、根拠のない固定的な 60-70% シェアを維持しない。 ^[Sources: https://www.jpx.co.jp/english/markets/statistics-derivatives/investor-type/; https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/.]

| 区分 | 読み方 |
|---|---|
| 海外投資家 | 対象商品・期間の現行投資部門別表を確認 |
| 証券会社 | 公表表の定義に応じて、自己勘定および仲介取引を含む |
| 個人投資家 | ラージ、ミニ、マイクロを分けて比較 |
| 銀行、保険会社、その他機関投資家 | 直接報告された活動を読む。仲介経由のアクセスを別途推定しない |

投資部門別シェアは商品と期間によって変動する。再現可能な比較では、JPX の表、契約、対象期間、および指標が売買高か建玉かを明示すべきである。

## 他の日経連動商品との比較

複数の手段が、現物とデリバティブにまたがって日経 225  エクスポージャーを表現する：

以下の表は、取引所および商品の提供状況を各取引所の情報に基づいて示す。ETF の例は商品識別子であり、売買高ランキングではない。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/index.html; https://www.jpx.co.jp/english/equities/products/etfs/issues/01.html; https://www.cmegroup.com/markets/equities/international-indices/nikkei-225-yen.html; https://www.sgx.com/derivatives.]

| 手段 | 会場 | ユースケース |
|---|---|---|
| Nikkei 225 ETFs（1321 Daiwa、1330 Nikko、1320 NEXT FUNDS など） | TSE | TSE 一覧で現行銘柄、ベンチマーク、構造を確認 |
| Nikkei 225 Futures（ラージ、ミニ、マイクロ） | OSE | JPX の現行仕様に基づく三つの契約サイズ |
| Nikkei 225 Options | OSE | 標準およびミニのオプション商品 |
| CME Nikkei 225 Futures（USD・JPY） | CME Globex | 並行する USD 建て・JPY 建て契約 |
| Nikkei 225 Index Futures（SGX） | Singapore Exchange | SGX の現行契約ページとカレンダーを確認 |
| インバース／レバレッジ ETF（例：1357、1570） | TSE | TSE 一覧で現行銘柄とレバレッジ目標を確認 |

各上場契約は別々の取引所経路を提供する。取引所間の連続性、ベーシス・フロー、マーケットメーカーのヘッジについては、時刻を揃えた価格・売買高・開示の根拠が必要であり、上場の有無だけから推定しない（[[securities/japan-market-maker-and-liquidity-provider-landscape]] を参照）。

## TOPIX 先物および JPX プライム 150

[[derivatives/topix-futures|TOPIX futures]] は浮動株調整時価総額加重の TOPIX を参照し、日経 225 先物は 225 銘柄からなる株価加重の日経 225 を参照する。以下は手法上の比較であり、参加者や売買高の順位ではない。 ^[Sources: https://www.jpx.co.jp/english/markets/indices/topix/; https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html.]

| 側面 | 日経 225  先物 | TOPIX 先物 |
|---|---|---|
| ユニバース | 選定された 225 銘柄。株価加重 | JPX の現行手法に基づく TOPIX 構成銘柄。浮動株調整時価総額加重 |
| 加重方式 | 株価加重 | 浮動株調整時価総額加重 |
| 取引単位 | Nikkei 225 × JPY 1,000（ラージ） | TOPIX × JPY 10,000（ラージ） |
| 現在の売買高・利用者 | JPX の商品統計および投資部門別統計を参照 | JPX の商品統計および投資部門別統計を参照 |

JPX は JPX Prime 150 futures と TSE Growth Market 250 Index Futures も上場している。現在の取引状況、および日経 225・TOPIX 商品との比較は、JPX の商品ページと日次統計から読み取るべきである。

## 清算と証拠金

すべての日経 225  先物・オプションは [[securities/japan-securities-clearing-corp|JSCC]] で清算される：

以下の表は、JSCC の現行 VaR 証拠金ページと、商品別の JPX 決済仕様に基づく。 ^[Sources: https://www.jpx.co.jp/jscc/en/cash/futures/marginsystem/VaR.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225options/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225mini-options/index.html.]

| 要素 | 詳細 |
|---|---|
| CCP | JSCC。取引執行時にノベーション |
| 証拠金方式 | JSCC の現行 VaR 方式。パラメーターと認められる相殺は現行 JSCC 規則に従う |
| 決済 | 商品別 SQ。ラージ、ミニ、マイクロの先物および標準オプションは第二金曜日サイクル、mini Options は水曜日／金曜日満期 |
| デフォルト管理 | 現行 JSCC 規則に従う |

認められるポートフォリオ相殺は、現行 JSCC パラメーターに依存する。本稿は、全ての口座・ポジションの組合せについて固定的な相殺またはネッティング結果を主張しない。

## 関連

- [[derivatives/INDEX]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[securities/INDEX]]
- [[securities/osaka-exchange]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-online-brokerage-competition]]
- [[exchanges/INDEX]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## 出典

- 日本取引所グループ / 大阪取引所：日経 225  先物、日経 225  ミニ、日経 225  マイクロ先物、日経 225  オプションの契約仕様。
- JPX：OSE デリバティブの月次取引高統計および投資家カテゴリ別内訳。
- 日本証券クリアリング機構：OSE デリバティブの証拠金方法およびデフォルト管理。
- CME Group：日経 225  先物（USD 建ておよび JPY 建て）の契約ページ。
- 金融庁：上場デリバティブおよびブローカー・ディーラー義務に関する FIEA フレームワーク。
- 日本経済新聞社：日経 225  指数方法論および特別清算指数の計算。

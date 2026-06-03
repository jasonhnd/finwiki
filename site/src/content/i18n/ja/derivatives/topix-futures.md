---
source: derivatives/topix-futures
source_hash: ad870e686022e9b4
lang: ja
status: machine
fidelity: ok
title: "TOPIX 先物（OSE）"
translated_at: 2026-06-02T12:19:04.211Z
---
# TOPIX 先物（OSE）

## 要約

TOPIX 先物は、東京証券取引所株価指数（TOPIX）を対象とする上場株価指数先物である。TOPIX は JPX の旗艦的な浮動株時価総額加重指数で、プライム市場（旧市場第一部）の全構成銘柄、概ね 2,000 stocks を対象とする。日本取引所グループ（JPX）傘下の大阪取引所（OSE）に上場し、[[securities/japan-securities-clearing-corp|JSCC]]で清算される。標準 TOPIX Futures 契約と、より小型の mini TOPIX Futures は、広範な日本株 equity-beta エクスポージャーに対する機関投資家向けヘッジ手段として機能する。

[[derivatives/nikkei-225-futures-options|Nikkei 225 futures]] 複合体と比べると、TOPIX 先物の日次出来高は小さいが、ユーザー層はより機関投資家寄りである。国内年金基金、生命保険会社、資産運用会社、銀行 ALM デスクは、ポートフォリオ全体のヘッジや戦術的ポジショニングに TOPIX 先物を用いる。これは、TOPIX がパッシブ指数マンデートで保有されるユニバースをよりよく代表しているためであり、特に [[insurance/japan-life-insurance-alm-overview|life-insurance ALM]] や年金配分は、価格加重の Nikkei 225 よりも TOPIX 型の広範市場ベンチマークに連動することが多い。

FinWiki では、本項目で契約仕様、Nikkei 225 futures との比較、先物と ETF のベーシス裁定、サブインデックス先物（TOPIX Core 30, TOPIX 100, TOPIX Banks）、機関投資家フローの特徴を扱う。

## ウィキ上の位置づけ

この項目は [[derivatives/INDEX|derivatives index]] に属する。価格加重指数の同等商品として [[derivatives/nikkei-225-futures-options]]、個別株式デリバティブの補完として [[derivatives/japan-single-stock-options]]、機関投資家のエンドユーザー側として [[securities/japan-asset-manager-landscape-matrix]] と併読する。上場市場は [[securities/osaka-exchange|Osaka Exchange]]、清算レイヤーは [[securities/japan-securities-clearing-corp|JSCC]]、より広い [[securities/tokyo-stock-exchange|TSE]] 現物株ユニバースが原資産である。

## 契約仕様

OSE は TOPIX 連動先物契約を主に二つ、加えて複数のサブインデックス先物を上場している:

| 契約 | 原資産 | 乗数 | 呼値 | 上場限月 |
|---|---|---|---|---|
| TOPIX Futures (Standard) | TOPIX（浮動株時価総額加重、約2,000 Prime stocks） | JPY 10,000 × index | 0.5 index points (= JPY 5,000 per tick) | Mar / Jun / Sep / Dec、および近限月 |
| mini TOPIX Futures | TOPIX | JPY 1,000 × index (1/10) | 0.25 index points (= JPY 250 per tick) | 月次 |
| TOPIX Core 30 Futures | TOPIX Core 30 (30 large-caps) | JPY 10,000 × index | 0.5 | 四半期 |
| TOPIX Banks Futures | TOPIX Banks sector index | JPY 10,000 × index | 0.1 | 四半期 |

すべての契約は、限月第2金曜日の朝に算出される Special Quotation（SQ）に対して現金決済される。SQ は SQ 日の原資産構成銘柄の始値から計算される。

取引時間は OSE の二部制（日中立会 ~08:45–15:15 JST、ナイト・セッション ~16:30–06:00 JST 翌日）に従い、[[derivatives/nikkei-225-futures-options|Nikkei 225 futures]] のスケジュールと対応する。

## TOPIX vs Nikkei 225: 手法上の違い

TOPIX と Nikkei 225 の根本的な違いが、どの投資家がどの先物を使うかを決める:

| 観点 | TOPIX | Nikkei 225 |
|---|---|---|
| 構成銘柄 | プライム市場の全銘柄（約2,000） | 225 selected stocks |
| 加重方式 | 浮動株時価総額 | 価格加重（価格 ÷ 除数） |
| セクター偏り | 実際の時価総額分布を反映し、金融セクターや広範市場がよく表れる | 株価の高い銘柄の影響で、テクノロジー・産業セクターが過大加重される（例: Fast Retailing、SoftBank Group が支配的） |
| 追跡ベンチマークとしての用途 | パッシブ指数マンデート、年金基金、資産運用会社の TOPIX トラッカー、広範な日本株エクスポージャー | 国内 retail-flow 指標、海外勢のマクロ Japan-beta proxy、金融メディアのヘッドライン指数 |
| 手法更新 | TSE 市場再編（Prime / Standard / Growth）が TOPIX 加重方針に影響し、浮動株比率を定期見直し | Nikkei Inc. による定期見直し。構成銘柄変更は比較的少ない |

TOPIX は時価総額加重の広範ベンチマークであるため、日本の機関投資家（生命保険会社、地域銀行、年金基金、パッシブ運用マンデートを運用する資産運用会社）は、原資産の保有が広範市場ポートフォリオである場合、Nikkei 225 futures ではなく TOPIX 先物でヘッジする。対照的に Nikkei 225 contract は、225-stock price-weighted の形が戦術的取引に許容される、または好まれる retail や海外マクロポジションをより多く引き付ける。

二つの先物は同じ現物バスケットに対する同等のヘッジではない。TOPIX 追跡ポートフォリオを Nikkei 225 futures でヘッジすると、二つの指数の構成銘柄加重が大きく異なるため、セクターベーシスリスクが残る。

## ETF ベーシス裁定

TOPIX 先物と ETF のベーシス取引は、主要な機関投資家・ディーラー活動である:

1. **現物レッグ**: TOPIX 追跡 ETF（例: NEXT FUNDS TOPIX ETF [1306]、TOPIX ETF iShares [1475]、Daiwa ETF TOPIX [1305]、Nikko TOPIX ETF [1308]）が、原資産バスケットへの現物エクスポージャーを提供する。
2. **先物レッグ**: TOPIX 先物が、証拠金ファイナンス付きの合成エクスポージャーを提供する。
3. **ベーシス**: インプライド配当利回り、キャリーコスト、需給の不均衡が、測定可能な現物・先物ベーシス（指数ポイント）を動かす。
4. **裁定**: Authorized participants と ETF market makers は、ロング ETF / ショート先物（またはその逆）を行い、ベーシスの歪みを捕捉する。

この取引は [[securities/japan-market-maker-and-liquidity-provider-landscape|ETF market making]] とも交差する:

| 方向 | 発動条件 |
|---|---|
| ロング ETF / ショート先物（正のベーシス） | 先物インプライド価格が現物を上回るとき（例: 権利落ち日前、先物買い需要が強いとき） |
| ロング先物 / ショート ETF（負のベーシス） | 先物が現物に対して割安なとき（例: ETF の解約需要により供給が集中するとき） |

TOPIX ベーシスの持続的な駆動要因の一つは、BoJ の過去の ETF 保有である。BoJ は TOPIX 連動 ETF と Nikkei 225 連動 ETF を、2010 through 2024 に金融政策の下で購入しており、BoJ の ETF 残高は現在、保有 / ランオフ局面にある。BoJ の ETF 保有は、原資産 TOPIX 構成銘柄の浮動株を減らし、ETF レベルでの権利落ちダイナミクスに影響する。BoJ オペレーションの文脈は [[money-market/boj-open-market-operations]] を参照。

## 機関投資家フローの特徴

TOPIX 先物のユーザー基盤は Nikkei 225 よりも機関投資家寄りである:

| ユーザー区分 | 用途 |
|---|---|
| 生命保険会社（財務 / equity ALM） | TOPIX 追跡保有の戦術的な株式デュレーション調整、オーバーレイ戦略 |
| 年金基金（GPIF、企業 DB、公的セクター） | リバランスフロー、パッシブ追跡オーバーレイ、四半期見直し前後の transition management |
| 資産運用会社（アクティブ・パッシブ） | 申込 / 解約フローの cash-equitization、インデックスファンドの tracking error 低減 |
| 銀行 treasury / ALM | 政策保有株式 unwind programs に伴う株式ポートフォリオヘッジ |
| 証券会社自己勘定 | マーケットメイク、ETF や Nikkei 先物との裁定取引 |
| 海外機関投資家 | 国単位の Japan-beta sizing、マクロ戦術 |
| リテール | Nikkei mini より小さい比率。mini TOPIX が主なリテールアクセス可能 TOPIX 契約 |

Government Pension Investment Fund（GPIF）は世界最大の年金基金であり、日本株市場の構造的参加者である。TOPIX 連動保有により、TOPIX 先物（または超大型取引では TOPIX swaps）が自然なリバランス手段となる。企業の政策保有株式 unwind programs（[[finance/INDEX|finance]] anchor）では、ブロック取引執行前の移行ヘッジとして TOPIX 先物が頻繁に使われる。

## サブインデックス先物: Core 30, 100, Banks

OSE はより狭いサブインデックス先物を上場している:

| サブインデックス契約 | 原資産 | 用途 |
|---|---|---|
| TOPIX Core 30 Futures | 流動性 / 時価総額上位 30 stocks | 大型株 Japan-beta の分離、政策保有株式 unwind ヘッジ |
| TOPIX 100 Futures | 上位 100 stocks | 中大型株に焦点を当てたヘッジ |
| TOPIX Banks Futures | TOPIX Banks sector | 銀行セクター beta ヘッジ、個別銀行とのペア取引、日本銀行セクターへのマクロ見通し |
| TOPIX Sector Indices (other) | 各種セクター | 流動性は限定的。セクターローテーション・オーバーレイ |

TOPIX Banks Futures は、銀行セクターのレジームシフト（例: NIRP exit speculation、BoJ policy normalization scenarios）の局面で関心を集めてきた。サブインデックスの流動性は代表的な TOPIX 契約よりかなり薄く、Core 30 / Banks 契約はより断続的に取引される。

## 清算と証拠金

| 要素 | 詳細 |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]]。執行時に novation |
| 証拠金 | SPAN 型ポートフォリオ証拠金。TOPIX 先物、mini、サブインデックス、オプション間のオフセットあり |
| 決済 | 限月第2金曜日の SQ に対する現金決済 |
| デフォルト管理 | 標準的な JSCC waterfall |

SPAN ポートフォリオ証拠金方式は、一つの証拠金計算の下で複雑な multi-leg strategies（TOPIX vs Nikkei spreads、TOPIX vs Core 30, TOPIX futures vs ETF hedges）を支える。

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

- Japan Exchange Group / Osaka Exchange: TOPIX Futures、mini TOPIX Futures、サブインデックス先物の契約仕様。
- JPX: TOPIX 指数手法、浮動株比率見直しスケジュール、SQ 算出規則。
- JPX: OSE デリバティブの月次取引高および投資家区分別統計。
- Japan Securities Clearing Corporation: SPAN ベースの証拠金計算手法。
- Bank of Japan: ETF 保有開示およびバランスシート統計。
- Financial Services Agency: 上場デリバティブに関する FIEA 枠組み。

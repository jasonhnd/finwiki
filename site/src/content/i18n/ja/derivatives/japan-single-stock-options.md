---
source: derivatives/japan-single-stock-options
source_hash: 24321043d0b7651b
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の個別株オプション（OSE）"
translated_at: 2026-07-29T20:00:00+09:00
---

# 日本の個別株オプション（OSE）

## 要約

日本取引所グループ（JPX）傘下の大阪取引所（OSE）における個別株オプション（個別証券オプション / Securities Options）は、対象となる株式、ETF、REIT を原資産とする取引所上場オプションである。OSE の現行商品概要によれば対象銘柄は 200 を超えるが、正確な一覧は変動する。実際の取引状況は、JPX の銘柄別日次統計で確認しなければならない。OSE の個別株オプションは [[securities/japan-securities-clearing-corp|JSCC]] で清算される。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html; https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/.]

対象銘柄数は流動性と同義ではない。JPX の銘柄別統計では、ある一日に取引がほとんど、または全くない対象契約も確認し得る。したがって米国との比較には、固定倍率や推定原因ではなく、明示した期間と同一基準の取引所統計が必要である。

本項目は、現行の契約仕様、流動性を比較するための根拠経路、機関投資家が検討し得る相対取引の代替手段、および公開商品ページから確認できる範囲の限界を扱う。

## ウィキ上の位置づけ

本項目は [[derivatives/INDEX|デリバティブ索引]]の配下にある。指数オプションの関連商品として [[derivatives/nikkei-225-futures-options]]、より広い指数デリバティブの文脈として [[derivatives/topix-futures]]、個人向け販売商品の文脈として [[derivatives/structured-product-eb-knockin-japan-retail]] と併読されたい。上場市場は [[securities/osaka-exchange|大阪取引所]]、清算機関は [[securities/japan-securities-clearing-corp|JSCC]] である。

## 契約仕様

OSE 証券オプションは以下の標準仕様を持つ:

以下の表は OSE の現行通常取引仕様に限定している。取引単位は各原資産証券の最低売買単位に従い、一律100株ではない。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html; https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/01.html.]

| 要素 | 詳細 |
|---|---|
| 原資産 | OSE が選定する対象株式、ETF、REIT |
| 原資産数 | OSE の現行商品概要では、株式、ETF、REIT を合わせて 200 を超える。正確な一覧は変動する |
| 取引単位 | 各原資産証券の最低売買単位 |
| 権利行使方式 | ヨーロピアンスタイル |
| 決済 | 権利行使は最終取引日のみ可能。決済は OSE／JSCC の証券オプション規則に従う |
| 限月サイクル | 直近二限月に、三月サイクルの直近二限月を加える |
| 呼値 | 呼値水準および原資産の売買単位に応じて JPY 0.1 から JPY 5,000 まで |
| 通常取引時間 | 09:00-11:35 および 12:30-15:45 JST。通常のナイトセッションはない |

ヨーロピアン方式の権利行使は、標準的な米国個別株オプションとの重要な相違点である。決済の仕組みは、対象となる原資産ごとに OSE の現行規則で確認する必要がある。本稿は、OSE の全ての証券オプションを現金決済と一般化しない。

## 流動性の現実

OSE は銘柄別の取引統計を公表しており、対象銘柄の多くは、ある一日に取引がほとんど、または全くない場合がある。以下は固定的な順位ではなく、流動性を確認するための定性的な整理である。 ^[Sources: https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/; https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html.]

| 根拠の観点 | 公開情報の経路 | 解釈上の境界 |
|---|---|---|
| 対象銘柄 | OSE の現行証券オプション商品一覧 | 対象であることは、活発な気配値や売買高を意味しない |
| 取引活動 | JPX の日次銘柄別売買高および建玉 | 明示した期間で測定し、単日の値から恒久的な順位を推定しない |
| 約定可能な流動性 | 現行の板情報または文書化されたディーラー気配 | 過去の売買高だけでは現在のビッド・アスクの厚みを立証できない |

米国個別株オプション市場との比較:

この比較表は、根拠のない対象数や売買高のレンジを意図的に避けている。現在の銘柄数と売買高は、各取引所の商品一覧および統計から読み取る必要がある。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html; https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/; https://www.cboe.com/us/options/market_statistics/.]

| 側面 | OSE 証券オプション | 米国個別株オプション (Cboe / NASDAQ / NYSE) |
|---|---|---|
| 原資産の範囲 | OSE の現行概要では、株式、ETF、REIT を合わせて 200 を超える | 複数取引所にまたがる、より広い上場オプションの範囲 |
| 売買高の根拠 | OSE は日次の銘柄別統計を公表 | 米国の取引所は日次市場統計を公表 |
| 権利行使方式 | ヨーロピアン | 標準的な株式オプションは一般にアメリカン |
| 複数取引所競争 | 単一会場 (OSE) | 多数の競合取引所; 複雑な SOR ルーティング |

引用した取引所統計は、米国のより広い複数取引所市場との比較経路を提供するが、それだけで時点を問わない流動性倍率が立証されるわけではない。文書化され、利用可能な場合には、ディーラーとの相対取引が代替手段となり得る。本稿は機関投資家フローの割合を推定しない（ディーラー・フランチャイズに関する公開情報の境界は [[derivatives/dealer-bank-derivatives-revenue-mix]] を参照）。

## なぜ流動性が限定的か（構造的要因）

以下は、確立した原因別寄与度ではなく、調査上の問いである。

1. **投資家のチャネル選択**：直接オプションの統計を、同一期間の関連する信用取引、CFD／FX 証拠金取引、[[derivatives/structured-product-eb-knockin-japan-retail|仕組商品]]のデータと比較する。
2. **仕組商品の販売**：個人投資家の株式ボラティリティ需要を EB やノックイン債に帰属させる前に、発行体および販売会社の開示を確認する。
3. **マーケットメーカーの参加**：専業マーケットメーカーの固定数を仮定せず、OSE の現行参加者データと気配値データを確認する。
4. **税務・行為規制**：税務上の取扱いや適合性要件を比較する前に、顧客と商品を特定する。
5. **価格の質**：対象であることから一般化せず、明示したサンプルについて約定可能なスプレッドと厚みを測定する。

公開商品ページから確認できるのは上場市場の存在であり、普遍的な投資家構成や上記各要因の因果的重要性ではない。

## OTC 個別株オプション

OSE で取引できない機関投資家フローについて、ディーラー銀行が OTC 個別株オプションを相対で提供する場合がある。以下は構造上のユースケースを整理したものであり、各仕組みが一般的に利用されていることや、全ての発行体に提供されることの根拠ではない。 ^[Sources: https://www.isda.org/book/equity-derivatives-definitions/; https://www.jpx.co.jp/english/derivatives/rules/flexible/.]

| 想定されるユースケース | 例示的な仕組みと境界 |
|---|---|
| 開示された株式売却のブロック・ヘッジ | 相対プットまたはカラーを検討し得る。実際の利用には取引固有の根拠が必要 |
| 自社株買いの執行 | シンセティック・フォワードまたはカラーが候補となり得るが、自己株式およびインサイダー情報の管理対象となる |
| 仕組債のヘッジ | ディーラーのヘッジ商品は、発行商品のペイオフ、流動性、開示によって異なり、標準的な経路を仮定しない |
| 大口戦略保有株の売却 | 複数レッグのオプションは候補となり得るが、法務、会計、市場インパクトの取扱いは取引固有である |

相対の個別株オプションは、ISDA Master Agreement および該当する場合は CSA に基づいて文書化され得る。カウンターパーティ、担保、評価、契約文書の条件は取引固有であり、上場契約に対する固定的なビッド・アスク上乗せ幅は主張しない。

## 2022年以降の発行体側ヘッジの進展

2022 以降の公開情報は取引単位の調査動機になり得るが、裏付けデータなしにオプション・フローの集計値を立証するものではない。

1. **政策保有株改革**：特定の売却でオプションまたはカラーが用いられたかを、発行体開示で検証する。
2. **自社株買いの執行**：自社株買いの公表だけでは、デリバティブ・ヘッジの存在は立証できない。
3. **仕組商品の発行**：[[derivatives/structured-bond-japan-retail-issuance|個人向け仕組商品の販売チャネル]]にある商品のフローを OSE または OTC オプションに帰属させる前に、開示されたペイオフとヘッジ情報を確認する。
4. **ウェルスマネジメント戦略**：カバードコールやキャッシュ・セキュアード・プットは候補戦略だが、顧客による採用には提供者または投資家の開示が必要である。

市場の変化に関する結論は、明示した期間の銘柄別売買高、建玉、参加者データに基づくべきである。

## 清算と証拠金

| 要素 | 詳細 |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]] |
| 証拠金 | JSCC の現行 VaR 方式で算出 |
| 権利行使 | ヨーロピアン方式。満期日のみ可能 |
| デフォルト管理 | 標準的な JSCC ウォーターフォール |

ヨーロピアン方式では満期前の早期権利行使判断は不要になるが、決済および受渡義務は、原資産証券に適用される OSE／JSCC 規則に引き続き従う。

## 米国個別株オプションの厚みとの比較

以下の表は、固定的な日次売買高レンジではなく、現在の取引所統計へ比較を導く。 ^[Sources: https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/; https://www.cboe.com/us/options/market_statistics/.]

| 市場 | 公開情報による比較経路 |
|---|---|
| OSE 証券オプション | JPX が公表する日次の銘柄別売買高および建玉 |
| 米国上場株式オプション | 米国の各取引所が公表する日次の複数取引所統計 |

出典は米国の取引所群がより広く活発であることを示すが、本稿は特定時点の倍率や順位を固定しない。

指数レベルで表現する日本株エクスポージャーについては、[[derivatives/nikkei-225-futures-options|日経 225 先物・オプション]]が別の商品群となる。その現在の厚みは、固定的な世界順位ではなく JPX 統計で測定すべきである。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[securities/INDEX]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 日本取引所グループ / 大阪取引所: 証券オプション (個別証券オプション) の契約仕様と上場銘柄登録簿。
- JPX: OSE デリバティブの商品別月次売買高統計。
- 日本証券クリアリング機構: 証拠金方法論と決済規則。
- 金融庁: 上場および OTC デリバティブに関する FIEA の枠組み。
- OCC (米国): 比較のため、米国個別株オプション市場データと清算高。
- Cboe Global Markets: 厚み比較のための米国個別株オプションデータ。

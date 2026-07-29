---
source: structured-finance/jhf-mbs-vs-private-rmbs-spread
source_hash: 8ae67df420f41835
lang: ja
status: machine
fidelity: ok
title: "JHF MBSと民間RMBSのスプレッド比較"
translated_at: 2026-07-29T10:06:23.508Z
---

# JHF MBSと民間RMBSのスプレッド比較

## TL;DR

JHF MBSに恒久的な10–30bpのレンジ、民間RMBSに恒久的な50–100bpのレンジがあるわけではない。JHFはシリーズごとに日付が明記されたローンチ・スプレッドを公表しており、April 17, 2026時点の発行実績には、51–55bpがseries 221–227について記載されている。民間RMBSは、公募と私募で担保、ストラクチャー、予想平均年限、開示が異なるため、特定取引と日付に基づいて価格を確認する必要がある。このため、本ページは、根拠のない一般的な水準ではなく、再現可能な根拠を比較する。

## Wiki内の参照先

| 確認したい内容 | 参照先 |
|---|---|
| JHF MBSのストラクチャー | [[structured-finance/jhf-mbs-mechanics]] |
| 民間RMBSのストラクチャー | [[structured-finance/japan-rmbs-issuance-structure]] |
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| 格付方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| JHFの機関情報 | [[policy-finance/japan-housing-finance-agency]] |

## 1. スプレッドのベンチマーク

[April 17, 2026付のJHF発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)は、以下に示す月次シリーズについて、ローンチ・スプレッドを価格決定時のクーポンと新発10年JGB利回りの差として定義している。

| 日付が明記された根拠 | JHF月次MBS | 民間RMBS |
|---|---|---|
| Series 221–225、Sep. 2025–Jan. 2026に価格決定 | 各シリーズのローンチ・スプレッドは51bp | 民間RMBSの観測値ではない |
| Series 226、Feb. 18, 2026に価格決定 | ローンチ・スプレッドは53bp | 民間RMBSの観測値ではない |
| Series 227、Mar. 18, 2026に価格決定 | ローンチ・スプレッドは55bp | 民間RMBSの観測値ではない |
| 再現可能な民間RMBS比較 | 該当なし | [JSDAの調査](https://www.jsda.or.jp/en/statistics/securitization-market/)または取引資料から、特定取引のクーポン / スプレッド、参照金利、価格決定日、予想平均年限を使用する |

上記のJHF観測値は、日付が明記された七シリーズのスナップショットであり、将来のレンジではない。

## 2. スプレッド差の比較要素

[JHFのFAQ](https://www.jhf.go.jp/english/mbs_faq.html)はJHFの仕組みを裏付けている。民間取引の属性は、比較対象取引の資料から確認する必要がある。

| 比較項目 | JHF MBS | 民間RMBS |
|---|---|---|
| 支払義務 | 受益権行使事由の発生前は、JHFが適時支払の責任を負う | 信託 / SPVおよび取引資料で定義される |
| 事由発生後の補完 | 通常の月次MBSは受益権にOCを利用する | 信用補完は取引ごとに異なる |
| 返済特性 | 月次パススルー。JHFはファクターとプール属性を公表する | 予想平均年限と元本返済は取引ごとに異なる |
| 価格観測 | JHFは発行額、クーポン、ローンチ・スプレッドを公表する | 特定取引について開示されている場合に限り記録する |
| 格付 | 日付が明記されたシリーズ格付 | 日付が明記されたトランシェ格付。資産クラスから推測しない |

## 3. 信用力とストラクチャーを固定的なスプレッド要因に分解しない

公開データは、「政府支援」、流動性、複雑性に固定的なベーシスポイントを割り当てることを裏付けていない。以下の項目は比較上の確認事項であり、加算可能なスプレッド寄与ではない。

| 確認項目 | 必要な取扱い |
|---|---|
| 信用力 | 実際の法的支払義務、信用補完、格付資料を比較する |
| デュレーション | 予想平均年限および期限前返済前提を揃える |
| 参照カーブ | 同一のベンチマーク満期と観測慣行を使用する |
| 日付と流動性 | 同じ市場期間の価格を比較し、発行市場・流通市場のいずれの気配値かを明記する |

## 4. 期限前返済動向の相違

[JHFの月次データ](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html)および[JSDAのPSJ統計](https://www.jsda.or.jp/en/statistics/securitization-market/)は、再現可能な入力を提供する。

| 根拠 | JHF MBS | 民間RMBS |
|---|---|---|
| 残高ファクター | JHFが対象シリーズについて公表 | 公開されている場合は、取引の受託者 / サービサー報告書を使用する |
| プール属性 | JHFが発行時に公表し、投資家向けページで更新する | 特定取引の開示を使用する |
| 標準期限前償還率の参照値 | 観測日を明記してPSJ統計を使用できる | 取引資料が当該慣行を利用するか、当該慣行に対応付けている場合に限り適用する |

引用可能な実証データがない限り、一般的な「賞与期の増加」または速い / 遅いという序列は主張しない。

## 5. 機関投資家の選好

[JHFの発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)は、一律の配分を開示するものではない。以下の表は、選好に関する主張に必要な根拠を示す。

| 投資家に関する主張 | JHF MBSに必要な根拠 | 民間RMBSに必要な根拠 |
|---|---|---|
| 保有者区分 | 特定の配分 / 保有状況の開示および日付 | 同左 |
| 金額 / 比率 | 特定シリーズ、分母、報告対象母集団 | 特定取引、分母、報告対象母集団 |
| ALM / スプレッドの動機 | 投資家自身による公開声明 | 投資家自身による公開声明 |
| 海外投資家の参加 | 日付が明記された配分または保有状況の根拠 | 日付が明記された配分または保有状況の根拠 |
| 相対的な選好 | 対応する金融機関、対象期間、比較可能な商品 | 同じ比較 |

上記の根拠がない限り、支配的な買い手、JGB代替という動機、民間RMBSの配分パターンは記載しない。

## 6. カーブ動向

[JHFの日付が明記された発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)および特定の民間取引により、以下のイベント期間比較を支持できる。

| 市場環境 | 必要なJHF観測値 | 必要な民間RMBS観測値 |
|---|---|---|
| 金融政策局面 | 特定シリーズ、価格決定日、ベンチマーク、局面の日付 | 特定取引について同じ項目 |
| リスクオフ期間 | 発行市場 / 流通市場の観測値および市場日 | 同左 |
| 発行期間 | 日付が明記された供給量および比較期間 | 同左 |
| 流動性に関する主張 | 気配値の情報源、ビッド / オファーまたは売買回転率 | 同左 |

対応するイベント分析がない限り、一定の方向または相対的なスプレッド拡大は主張しない。

## 7. ストラクチャリング判断への含意

[JHFの証券化支援業務に関する説明](https://www.jhf.go.jp/english/mbs_faq.html)が以下の表で裏付けるのは、Flat 35の経路に限られる。その他の選択は取引ごとに異なる。

| オリジネーターの選択 | 根拠に基づく読み方 |
|---|---|
| 適格なFlat 35を組成してJHFへ売却 | JHFは適格ローンを買い取り、MBS発行を通じてプログラムの資金を調達する |
| 民間RMBSを実行 | 特定プール、法的ストラクチャー、信用補完、投資家条件、日付が明記された価格根拠が必要 |
| ローンを保有 | 金融機関の実際の資金調達、自己資本、流動性、会計上の取扱いを比較する。本ページでは一般的なスプレッド閾値を記載しない |

価格は判断要素の一つだが、出典のないJHF / 民間RMBSのスプレッド差から判断を推測することはできない。

## 8. 格付機関による取扱い

[金融庁の現行登録簿](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf)、日付が明記されたJHFの発行記録、各格付機関による特定の格付アクションは、以下の確認項目を支持している。

| 格付に関する確認事項 | JHF MBS | 民間RMBS |
|---|---|---|
| 格付機関 / 法人 | 特定シリーズの格付アクションおよび現行登録を確認する | 特定クラスの格付アクションおよび現行登録を確認する |
| 格付 | 格付記号、日付、見通し / ウォッチ、アクションを記録する | 同左 |
| 格付基準 | 格付アクションが引用する版を記録する | 同左 |
| ソブリンとの関係 | 公表された格付機関の理由を使用する | 資産クラスから推測しない |
| スプレッドへの含意 | 日付が明記された市場価格を必要とする | 同左。格付からベーシスポイントを推測しない |

格付機関の方法の詳細については、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]を参照する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[money-market/INDEX]]
- [[financial-regulators/boj-monetary-policy]]
- [[banking/INDEX]]

## 出典

- [JHF, MBS issuance history as of April 17, 2026](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf).
- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, factors and other monthly pool data](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html).
- [JSDA, Securitization Market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).

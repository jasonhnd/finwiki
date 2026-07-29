---
source: structured-finance/japan-securitization-product-matrix
source_hash: 30a81c9df8350389
lang: ja
status: machine
fidelity: ok
title: "日本の証券化商品マトリクス"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本の証券化商品マトリクス

## TL;DR

本ページは根拠マップであり、「典型的な」発行体、ビークル、格付、トランシェ数、年間発行額、投資家、販売会社を示す表ではない。JHFが開示するMBSプログラムとSMBCが開示する契約型カバードボンド・プログラムという二つの限定的な例外を除き、各行には特定取引の根拠が必要である。本ページでは、MUFGのカバードボンド、商品間の価格・発行額の序列、国内・グローバル格付機関または販売会社の優位性を主張しない。

## Wiki内の参照先

仕組みについては、[[structured-finance/jhf-mbs-mechanics]]、[[structured-finance/japan-rmbs-issuance-structure]]、[[structured-finance/japan-cmbs-issuance-structure]]、[[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]、[[structured-finance/japan-consumer-loan-abs-structure]]、[[structured-finance/japan-credit-card-receivable-abs]]、[[structured-finance/japan-equipment-lease-abs]]を参照する。法的ビークルについては、[[structured-finance/spv-tk-gk-vehicle-japan-tax]]、[[structured-finance/tmk-special-purpose-company-mechanics]]、[[structured-finance/japan-trust-beneficial-interest-vs-spv]]を参照する。

## 1. 商品の根拠マップ

[JHFのFAQ](https://www.jhf.go.jp/english/mbs_faq.html)、[SMBCのカバードボンド・プログラム](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html)、[JSDAの調査](https://www.jsda.or.jp/en/statistics/securitization-market/)、特定取引の資料は、以下の範囲を定める。

| 商品 / エクスポージャー | 公開一次資料 | 検証済みの範囲 | 推測してはならないこと |
|---|---|---|---|
| JHF MBS | JHFのFAQおよび日付が明記された投資家向け資料 | JHFは受益権行使事由の発生前に元利金を適時に支払う義務を負う。事由発生後は債券に代わり受益権が交付される。通常の月次MBSはOCを使用し、グリーンMBSは使用しない | シニア / 劣後構成またはJHFによる別個の保証 |
| 民間RMBS | JSDA調査および特定取引 | 引用した定義に該当する住宅ローン担保取引の存在 | ビークル、格付、信用補完、スプレッド |
| CMBS | 特定の募集資料 / 受託者資料 / 格付資料 | 取引固有の担保および支払条件 | 標準的なウォーターフォールまたは現在の市場動向 |
| オートローンABS | 特定取引および格付基準 | 当該シリーズのプールとストラクチャー | 発行体順位、年間発行額、信用補完レンジ |
| 消費者ローンABS | 特定取引および適用法令 | プール条件および法定金利の範囲 | デフォルト、トリガー、保有持分のレンジ |
| カード債権ABS | 特定取引および格付基準 | 資料で確認できる場合に限るリボルビング / 信託の仕組み | マスタートラストの発行頻度、残高、デフォルト率レンジ |
| リース債権ABS | 特定取引および格付基準 | 資料で確認できる場合に限るリースおよび残存価値リスク | プール構成、残存価値、手数料レンジ |
| 日本の金融機関が保有するCLO | 特定銀行の開示および海外取引の資料 | 投資家としてのエクスポージャー | 日本国内での発行 |
| NPL / プロジェクト / シンセティック取引 | 特定の発行体、法的資料および格付資料 | 取引固有のリスク移転 | 標準的なビークル、格付、動向 |
| 航空機 / 船舶ファイナンス | 特定のリース / JOL/JOLCO / ABS資料 | 実際に資料で確認できる商品 | 異なる商品を一つの国内ABSクラスとして扱うこと |
| SMBCの契約型カバードボンド | SMBCのプログラム資料および発行一覧 | SMBCが受託者となる。契約上の二重遡求。適格な国内RMBSのカバープール。最低25%のOC | 法定カバードボンドとしての地位、住宅ローンの直接保有プール、MUFGプログラム、UCITS適格性 |
| リパッケージ債 | 特定の資産、債券、ヘッジ関連資料 | 当該債券の契約上のペイオフ | 標準的な投資家の動機またはリスク変換 |

## 2. ビークルの根拠

[資産の流動化に関する法律](https://laws.e-gov.go.jp/law/410AC0000000105)、[信託法](https://laws.e-gov.go.jp/law/418AC0000000108)、[金融庁の金商法上の分類ガイド](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html)は、以下の法的形態に関する表を裏付けている。

| 形態 / 仕組み | 情報源から確認できること | 特定取引について追加で必要な根拠 |
|---|---|---|
| TMK | 法定の特定目的会社、必要な届出、資産流動化計画 | 募集、上場、税務、会計、担保 |
| GKとTKの組み合わせ | 法人と契約上の持分 / 第2 項有価証券 | 税務、私募、譲渡、連結の分析 |
| 信託受益権 | 信託関係および一般に第2 項有価証券 | 信託類型、譲渡、税務、募集条件 |
| 海外SPV | 日本のビークル法だけからは何も確認できない | 設立準拠法、取引資料、日本での販売規則 |
| JHF MBSの仕組み | 債券と、条件付きの第三者受益信託の仕組み | 日付が明記されたシリーズ条件および格付 |
| SMBCの契約型カバードボンド | 特定金銭信託および契約上の二重遡求 | 日付が明記されたシリーズ条件、格付、投資家適格性 |

ビークルの呼称は、公募、上場、税務上の損金算入、認識中止、倒産隔離を立証するものではない。

## 3. 格付の根拠

[金融庁の登録簿](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf)および[JCRの公開格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)は、以下の確認項目を支持している。

| 確認事項 | 根拠 | 安全に導ける結論 |
|---|---|---|
| 格付機関は日本で登録されているか | 金融庁の現行登録簿 | 特定法人の登録状況および確認日 |
| 当該取引を格付したか | 日付が明記された格付アクション | 特定クラス、格付記号、日付に限る |
| どの格付基準が適用されたか | 格付アクションが引用する格付基準の版 | 取引固有の格付方法 |
| 格付機関間で差があるか | 同一クラスかつ同一日付 | 実際の格付記号を記録し、一定のノッチ差を推測しない |
| 格付が適格性を決定するか | 投資家 / 規制当局の規則 | 格付機関のブランドだけからは決して推測しない |

## 4. 発行額と保有額

[JHFの日付が明記された発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)および[JSDAの調査](https://www.jsda.or.jp/en/statistics/securitization-market/)は、以下の計測ルールを支持している。

| 計測対象 | 情報源 | ルール |
|---|---|---|
| JHFの発行 | 日付が明記されたJHFのシリーズ履歴 | 対象期間と商品定義を明示して合計する |
| 日本の証券化商品の発行 | JSDAの調査表 | 区分、対象期間、改訂を維持する |
| 銀行のストラクチャード・クレジット向けエクスポージャー | 特定銀行の開示 | 発行額ではなく保有額として扱う |
| 私募 / クロスボーダー取引 | 特定発行体または募集開示 | 欠損データは保留し、年間推計を行わない |

商品間順位は記載しない。発行額、保有額、公募、私募は比較可能な計測値ではないためである。

## 5. 価格比較

[JHFの日付が明記された発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)および[SMBCの発行一覧](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html)は、以下の必要項目を例示している。

| 項目 | 必要な根拠 |
|---|---|
| 商品 | 特定のシリーズおよびクラス |
| 時点 | 価格決定日 / 発行日および発行市場・流通市場の別 |
| 通貨 / ベンチマーク | 同一通貨、同一カーブ、同一のスプレッド慣行 |
| 平均残存年限 | 法定満期、予想平均年限、元本返済、コール |
| 信用力 | 実際の債務者、担保、信用補完、日付が明記された格付 |
| 結果 | 開示されたクーポン / スプレッド。資産クラス全体のレンジを設けない |

## 6. 再現性チェックリスト

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の表で利用する確認資料の一つだが、特定取引を立証するものではない。

| 主張 | 最低限必要な公開根拠 |
|---|---|
| 商品が存在する | 特定の発行体 / 募集資料 / 格付記録 |
| ビークル | 法的資料および取引資料 |
| 格付 | 日付が明記された特定クラスの格付アクションおよび格付基準の版 |
| 発行額 | 定義された公的統計または特定取引の発行額 |
| 価格 | 日付が明記された特定取引およびベンチマーク |
| 投資家 / 販売会社 | 公開された配分情報または取引開示 |
| 税務 / 会計 | 現行法および事実関係に即した分析 |
| 市場シェア / 動向 | 対象母集団、期間、計算方法の明示 |

必要な資料が公開されていない場合は、一般的なホームページで代替せず、具体的な保留理由を記録する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure]]
- [[structured-finance/japan-credit-card-receivable-abs]]
- [[structured-finance/japan-equipment-lease-abs]]
- [[structured-finance/japan-covered-bond-mufg-smbc]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/tmk-special-purpose-company-mechanics]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]

## 出典

- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, FY2026 investor material](https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf).
- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).
- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
- [FSA, examples of FIEA paragraph-1 and paragraph-2 securities](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html).
- [Asset Securitization Act](https://laws.e-gov.go.jp/law/410AC0000000105).
- [Trust Act](https://laws.e-gov.go.jp/law/418AC0000000108).
- [SMBC, covered-bond program and issue list](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html).

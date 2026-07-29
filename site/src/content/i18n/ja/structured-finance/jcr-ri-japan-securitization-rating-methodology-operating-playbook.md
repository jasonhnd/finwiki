---
source: structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook
source_hash: 595f57ecb23ff22e
lang: ja
status: machine
fidelity: ok
title: "JCR / R&Iによる日本の証券化格付方法 — 実務確認手順"
translated_at: 2026-07-29T09:50:42.167Z
---
# JCR / R&Iによる日本の証券化格付方法 — 実務確認手順

## TL;DR

固定的なベース・デフォルト率レンジ、4–6×のストレス倍率、1–2ノッチの格下げルール、人員数、格付アクション数、一律の月次 / 四半期モニタリング周期を備えた、単一のJCR/R&I「実務手順」には公開上の根拠がない。両社を別々に扱う。特定取引について、登録法人、格付アクションが引用する格付基準の版、プールおよび法的前提、実際のウォーターフォール、日付が明記された格付 / モニタリング資料を記録する。R&Iの公開資料を確認できない場合は、JCRの前提を格付機関間で転用せず、R&Iについての結論を保留する。

## Wiki内の参照先

本ページは、[[structured-finance/INDEX|structured-finance index]]配下の根拠管理ページである。[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]および[[structured-finance/fitch-moody-sp-japan-criteria|global-agency comparison]]と併せて参照する。各資産クラスのページは、その資産に適用される特定の格付方法と取引根拠を引用する必要がある。

## 1. 格付機関の特定

[金融庁の現行登録簿](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf)は、以下の機関確認項目を支持している。

| 確認項目 | JCR | R&I |
|---|---|---|
| 法人 | 金融庁が記載する法人名および登録項目を使用する | 金融庁が記載する法人名および登録項目を使用する |
| 登録状況 | 確認日時点で検証する | 確認日時点で検証する |
| 所有関係 | 最新の株主開示を必要とする | 最新の株主開示を必要とする |
| 人員数および年間格付アクション数 | 推計しない | 推計しない |
| 格付方法 | 適用されるJCRの公開資料を使用する | 適用されるR&Iの公開資料を使用し、確認できなければ保留する |

登録は、市場での優位性、海外での認定、格付方法の同等性を立証するものではない。

## 2. 格付基準の選択

[JCRのストラクチャード・ファイナンス格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の格付基準選択表における確認先である。

| 手順 | 必要な根拠 |
|---|---|
| 資産クラスの特定 | 特定取引および担保の定義 |
| 格付基準の選択 | 格付方法の正確な名称および改訂日 / 発効日 |
| 階層の確認 | 一般的方法に加え、引用された資産クラス別・法的補足資料のすべて |
| 移行措置の確認 | 旧基準と新基準のいずれが格付に適用されるかを示す格付機関の通知 |
| 除外事項の維持 | 格付資料に記載された対象範囲の制限および取引固有の逸脱 |

資産クラスの呼称だけでは、どの版の格付基準が適用されたかを立証できない。

## 3. 前提の記録

[JCRのストラクチャード・ファイナンス格付に関する一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、従来記載していた根拠のない数値レンジではなく、定性的な確認枠組みを支持している。

| 前提の区分 | 特定の格付資料から記録する内容 |
|---|---|
| プール・パフォーマンス | 定義、観測期間、除外事項、ベースケース |
| デフォルト / 損失 | 開示されている場合は、頻度、損失率、時期、格付ストレス |
| 回収 | 開示されている場合は、回収率、時期、費用、担保区分 |
| 期限前返済 | 開示されている場合は、シナリオおよび元データ |
| カウンターパーティ | 依存関係、交代トリガー、是正の仕組み |
| 法的リスク | 譲渡、対抗要件、混蔵、相殺、分別管理の分析 |

架空の「典型的な」取引から、格付機関のストレス倍率または信用補完目標を逆算してはならない。

## 4. キャッシュフロー・モデリング

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下の取引モデル根拠チェックリストを支持している。

| モデル入力 | 必要な取引根拠 |
|---|---|
| 回収金 | 契約上の元本 / 利息予定およびサービシング前提 |
| デフォルトと回収 | 格付機関が開示する時期別カーブおよび損失前提 |
| 期限前返済 | 資産クラスの固定観念ではなく、特定のシナリオ |
| 金利と通貨 | 実際の資産 / 負債条件およびヘッジ関連資料 |
| 手数料と口座 | 契約上の支払順位および金額 |
| トリガー | 正確な定義およびその結果生じるウォーターフォールの変更 |
| トランシェの支払 | 特定クラスの法的な支払順位 |

モデル結果と格付許容度は格付機関の資料から確認する。本ページでは、一律の「不足額ゼロ」ルールを記載しない。

## 5. モニタリング

[JCRの公開ストラクチャード・ファイナンス格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)は、日付が明記された格付アクションを確認する出発点である。

| モニタリングに関する主張 | 必要な根拠 |
|---|---|
| 見直し頻度 | 格付機関の方針または特定取引の格付資料 |
| サービサー報告 | 取引のサービシング契約 / 報告書 |
| パフォーマンス状況 | 日付が明記された受託者、サービサーまたは格付機関のモニタリング開示 |
| ウォッチ / 見通し | 日付が明記された格付アクション |
| 格付変更 | 日付が明記されたアクションおよび公表理由 |

取引をまたいで、月次報告、四半期委員会、年次再評価、固定的なイベント見直し時期を想定してはならない。

## 6. 格付アクションの分析

[JCRの格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)は、以下の格付アクション比較項目を支持している。

| 確認事項 | 安全な取扱い |
|---|---|
| 何が変わったか | 日付が明記された格付機関の理由を引用する |
| トリガーに抵触したか | 契約上の定義および報告値を引用する |
| 何ノッチ変わったか | 実際のアクションを記録し、固定的な幅を予測しない |
| 自動的なアクションだったか | 格付基準と資料を確認し、一つの指標だけから推測しない |
| 他の格付機関と異なるか | 各社固有の格付基準に基づき、同一トランシェかつ同一日付で比較する |

## 7. 再現可能なアナリスト・パケット

各取引について、以下を保存する。

1. 法的な発行体、シリーズ、クラス
2. 格付機関の法人および登録確認
3. 格付記号、日付、見通し / ウォッチ、アクション種別
4. 引用された格付基準の名称および版
5. 担保基準日およびパフォーマンス期間
6. 信用補完、ウォーターフォール、トリガー、ヘッジ条件
7. 公開されたモニタリング根拠
8. 資料が公開されていない箇所の明示的な不足情報

## 8. 今回の見直しで削除した主張

- 資産クラスごとに固定されたデフォルト率レンジおよびストレス倍率
- 固定的な回収時期、格下げ幅、格付所要期間
- 人員数および年間格付アクション数の推計
- 株主根拠のない所有関係 / 系列関係
- 日本とグローバル格付機関を一律に比較したソブリン上限またはノッチ差
- 一律の格付対象範囲、投資家認知、モニタリング周期

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/fitch-moody-sp-japan-criteria]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure]]
- [[structured-finance/japan-credit-card-receivable-abs]]
- [[structured-finance/japan-equipment-lease-abs]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]

## 出典

- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).

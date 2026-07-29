---
source: structured-finance/japan-equipment-lease-abs
source_hash: b64882d17d577492
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の設備リースABS — 根拠に基づく読み方"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本の設備リースABS — 根拠に基づく読み方

## TL;DR

今回の調査では、従来記載していたJPY 200–400 billionという推計、発行体順位、設備プールの構成比、リース期間、残存価値レンジ、手数料レンジ、信用補完の比較を裏付ける、安定して参照可能な公開取引資料を確認できなかった。これらの数値は削除した。リース債権、所有権、残存価値リスク、期間満了時の受取金は、特定の契約とプールから確認する必要がある。

## Wiki内の参照先

本ページは、[[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]、[[structured-finance/spv-tk-gk-vehicle-japan-tax]]と併せて参照する。

## 1. 発行体と取引の根拠

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)は市場調査の入口である。以下の表は、必要な取引根拠を示す。

| 項目 | 必要な公開根拠 |
|---|---|
| 法的な発行体 / 信託 | 募集資料または格付資料 |
| オリジネーター、賃貸人およびサービサー | 売買、リースおよびサービシング関連資料 |
| 現在の資本関係 | 日付が明記された会社開示 |
| 発行額 | 特定シリーズの発行結果または定義されたJSDAの表 |
| プログラム履歴 | 日付が明記されたシリーズ一覧 |

## 2. プールと残存価値リスク

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、標準的な比率ではなく、以下のプール項目を検証することを支持している。

| 項目 | 特定プールについて必要な根拠 |
|---|---|
| 設備種別 | 適格基準および基準日時点の層別データ |
| リース区分 | 契約および適用される会計上の区分 |
| 所有権と物件回収 | 権原、対抗要件および権利行使条件 |
| 残存リース料 | 支払予定、延滞、賃借人の集中 |
| 残存価値 | 計上された前提、保証人、売却手続、費用および時期 |

## 3. キャッシュフローの支払順位

[JCRのストラクチャード・ファイナンス格付に関する一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下のウォーターフォール確認チェックリストを支持している。

| キャッシュフロー項目 | 必要な根拠 |
|---|---|
| 利用可能な回収金 | 算入されるリース料、解約金、保険金、売却代金 |
| 手数料および費用 | 特定の金額 / 計算式および支払順位 |
| 債券の支払 | クラスごとの利息および元本の支払順位 |
| 準備金 | 目的、目標額、下限および払出し |
| 残存価値による受取金 | 配分および不足額の取扱い |
| 損失配分 | 元本減額および回復の順序 |

## 4. パフォーマンスと格付

[日本リース事業協会の統計ページ](https://www.leasing.or.jp/statistics/)および特定の格付機関資料は、以下の根拠確認項目を支持している。

| 主張 | 必要な根拠 |
|---|---|
| 業界動向 | 定義された協会統計および対象期間 |
| プール・パフォーマンス | 日付が明記された受託者 / サービサー報告書 |
| 残存価値の実現 | 設備単位または開示されたコホートの実績 |
| 格付 | 特定クラス、アクション日および適用された格付基準の版 |
| 信用補完 | 実際の劣後、OC、準備金または保証 |
| スプレッド | 特定取引の価格決定結果およびベンチマーク |

## 5. 保留した主張

発行体の市場シェア、年間ABS発行額、プール構成、残存価値比率、手数料水準、信用補完レンジについては、公開された特定取引または定義された公的統計表で裏付けられるまで保留する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]

## 出典

- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [Japan Leasing Association, statistics](https://www.leasing.or.jp/statistics/).

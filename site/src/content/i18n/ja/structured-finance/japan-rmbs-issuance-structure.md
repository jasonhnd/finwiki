---
source: structured-finance/japan-rmbs-issuance-structure
source_hash: 28596d277446d4cf
lang: ja
status: machine
fidelity: ok
title: "日本の民間RMBS発行ストラクチャー — 特定取引の根拠確認ガイド"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本の民間RMBS発行ストラクチャー — 特定取引の根拠確認ガイド

## TL;DR

従来のページでは、民間RMBSのオリジネーター、信託の選好、トランシェ数、信用補完、格付、スプレッド、投資家を一般化していた。これらの主張は削除した。民間RMBSの条件は取引ごとに異なる。JHF MBSについては別途、公的資料に基づいて記載している。JHFは受益権行使事由の発生前に元利金を適時に支払う義務を負う。このストラクチャーは、一般的なシニア / 劣後構成でも、JHFによる別個の保証でもない。

## Wiki内の参照先

本ページは、[[structured-finance/jhf-mbs-mechanics]]、[[structured-finance/jhf-mbs-vs-private-rmbs-spread]]、[[structured-finance/japan-trust-beneficial-interest-vs-spv]]と併せて参照する。

## 1. 特定の民間RMBS

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)および[JCRの格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)は調査の入口である。以下の表は、必要な根拠一式を示す。

| 項目 | 必要な公開根拠 |
|---|---|
| 法的な発行体 / 信託 | 募集資料、信託資料または格付資料 |
| オリジネーター / サービサー | 売買資料およびサービシング関連資料 |
| 住宅ローン・プール | 適格基準、基準日および層別データ |
| ビークル / 譲渡 | 信託 / SPVおよび対抗要件に関する資料 |
| クラス / 信用補完 | クロージング時残高、ウォーターフォール、準備金およびその他の補完 |
| 格付 / 価格 | 日付が明記されたクラス別の格付アクションおよび特定取引の発行結果 |

## 2. JHFとの比較

[JHFの公式FAQ](https://www.jhf.go.jp/english/mbs_faq.html)はJHF欄を裏付けている。民間RMBS欄は特定取引ごとに確認する。

| 比較項目 | JHF MBS | 民間RMBS |
|---|---|---|
| 発行体 / 債務者 | JHF。受益権行使事由の発生前は元利金の適時支払義務を負う | 特定の信託 / SPV / 債務者 |
| 信託の仕組み | 第三者受益信託。事由発生後は債券に代わり受益権が交付される | 取引ごとに異なる |
| 信用補完 | 通常の月次MBSは、事由発生後の受益権についてOCを使用する。グリーンMBSは使用しない | 取引ごとに異なる |
| 担保 | JHFが買い取った適格なFlat 35住宅ローン | 特定プール |
| 格付 | 日付が明記されたJHFのシリーズ格付 | 日付が明記されたクラス格付 |
| 価格 | 日付が明記されたJHFの発行結果 | 日付が明記された特定取引。一般的なレンジは設けない |

## 3. プール、ウォーターフォール、パフォーマンス

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の分析チェックリストを支持している。

| 項目 | 特定取引について必要な根拠 |
|---|---|
| ローン属性 | 開示されたLTV、金利タイプ、期間、経過期間および地域 |
| デフォルト / 回収 | 定義、前提、費用および時期 |
| 期限前返済 | プールデータおよび引用されたシナリオ |
| ウォーターフォール | クラスの支払順位、トリガーおよび損失配分 |
| カウンターパーティ | サービサー、口座、受託者およびヘッジの条件 |
| パフォーマンス | 日付が明記された受託者 / サービサーまたは格付機関の開示 |

## 4. 保留した主張

オリジネーター順位、信託利用が標準であるとの主張、3–4クラス構成、AAA/AAの格付結果、劣後比率レンジ、投資家層、50–100bpのスプレッドについては、公開された特定取引がない限り保留する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]

## 出典

- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).
- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).

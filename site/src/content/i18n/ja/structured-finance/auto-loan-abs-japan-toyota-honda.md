---
source: structured-finance/auto-loan-abs-japan-toyota-honda
source_hash: b560409d1487c73f
lang: ja
status: machine
fidelity: ok
title: "日本のオートローンABS — 発行体・プールの根拠確認ガイド"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本のオートローンABS — 発行体・プールの根拠確認ガイド

## TL;DR

従来のページでは、継続発行体の順位、最大手オリジネーター、標準的なGK-TKビークル、トランシェ構成、APR・デフォルトの傾向、投資家区分を、公開された特定取引を示さずに記載していた。これらの主張は削除した。日本のオートローンABSは、特定の法的発行体、オリジネーター、プール基準日、サービシング、ウォーターフォール、信用補完、日付が明記された格付・価格情報に基づいて記述する必要がある。

## Wiki内の参照先

本ページは、[[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]、[[structured-finance/spv-tk-gk-vehicle-japan-tax]]と併せて参照する。

## 1. 発行体とプログラム

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)は公開市場情報の入口である。以下の表は、追加で必要となる根拠を示す。

| 項目 | 必要な公開根拠 |
|---|---|
| 法的な発行体 / 信託 | 募集資料または格付資料 |
| オリジネーターおよびサービサー | 売買、信託およびサービシング関連資料 |
| 現在の資本関係 | 日付が明記された会社開示 |
| プログラム / 継続発行の状況 | 対象期間を明示したシリーズ一覧 |
| 発行額 | 特定取引の発行結果または対象範囲が明確なJSDAの表 |

## 2. プール

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下のプール確認チェックリストを支持している。

| 項目 | 特定取引について必要な根拠 |
|---|---|
| 債権種別 | ローン、割賦販売、リースまたはディーラー在庫金融の定義 |
| ビークル | 法的形態および取引関連資料 |
| 新車 / 中古車の構成 | 基準日時点の層別データ |
| APR / 残存期間 | 開示された加重平均値およびレンジ |
| 延滞 / 損失 / 回収 | 定義、コホート、発生時期および費用 |
| 集中 | 車種、販売店、地域および債務者に関する項目 |

## 3. ストラクチャーと格付

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下の根拠確認項目を支持している。

| 主張 | 必要な根拠 |
|---|---|
| ウォーターフォール | 特定取引の支払順位 |
| 信用補完 | 実際の劣後、OC、準備金およびその他の補完 |
| トリガー | 正確な指標、閾値、解消条件および効果 |
| 格付 | 特定クラス、格付機関、日付および適用された格付基準の版 |
| 投資家 / 販売会社 | 公開された取引資料または配分開示 |
| スプレッド | 特定取引の価格決定結果およびベンチマーク |

## 4. 保留した主張

発行体の優位性、年間市場規模、標準的なトランシェ比率、APR・デフォルトのレンジ、損失発生時期、投資家層については、公開された特定取引または対象範囲が明確な公的統計で裏付けられるまで保留する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]

## 出典

- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).

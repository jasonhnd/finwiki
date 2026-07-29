---
source: structured-finance/repackaging-note-japan
source_hash: a42a53c6c92af18c
lang: ja
status: machine
fidelity: ok
title: "日本のリパッケージ債 — 特定取引の根拠確認ガイド"
translated_at: 2026-07-29T09:39:12.134Z
---
# 日本のリパッケージ債 — 特定取引の根拠確認ガイド

## TL;DR

従来のページでは、公開された特定の債券を示さずに、最低投資金額、海外ビークル、販売会社の優位性、格付パターン、投資家の利用目的を一般化していた。これらの主張は削除した。リパッケージ債は、原資産、発行体、債券条件、デリバティブ、担保、カウンターパーティ、販売制限を含む一つの統合取引として分析する必要がある。

## Wiki内の参照先

本ページは、[[structured-finance/japan-securitization-product-matrix]]、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]、[[derivatives/INDEX]]と併せて参照する。

## 1. 取引の特定

[JCRのストラクチャード・ファイナンス格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は分析の出発点となる。以下の表は、特定の債券について必要な根拠を示す。

| 項目 | 必要な公開根拠 |
|---|---|
| 発行体 / ビークル | 設立資料および募集資料 |
| 原資産 | 保管 / 取得および適格条件 |
| 債券 | 元本、クーポン、満期、コール、損失に関する条件 |
| デリバティブ | 締結済みのスワップ / オプション / CDSの条件および担保 |
| カウンターパーティ | 債務、格付および交代条項 |
| 販売 | 募集区分および販売制限 |

## 2. 変換に関する主張

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下の根拠確認項目を支持している。

| 変換 | 必要な取引根拠 | 推測してはならないこと |
|---|---|---|
| 通貨 | 原資産、債券、FXスワップ、担保の条件 | 「為替リスクなし」 |
| 固定 / 変動 | 原資産のクーポン、債券のクーポン、金利スワップ | 完全なマッチング |
| 満期 | 原資産 / 債券の満期、コール、清算の仕組み | リスクのない満期短縮 |
| バスケット / トランシェ | 適格基準、ウォーターフォール、集中 | 分散効果または格付上の利益 |
| クレジット・デリバティブ | 参照対象、決済、カウンターパーティの条件 | 完全な信用補完 |
| リテール向けペイオフ | シナリオ、手数料、制限 | 適合性または投資家の動機 |

## 3. 金商法と募集の範囲

[金融庁の金商法上の分類ガイド](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html)は、以下のチェックリストを支持している。

| 確認事項 | 必要な根拠 |
|---|---|
| 有価証券の区分 | 実際の債券 / 持分および金商法上の分類 |
| 公募または私募 | 募集条件および開示 |
| プロ向け / リテール向け経路 | 販売制限および投資家区分 |
| デリバティブ規制 | 実際の契約およびカウンターパーティ |
| 海外ビークル | 設立準拠法および日本での募集規則 |

## 4. 格付と価格

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は依存関係の分析を支持している。以下の主張には、特定の根拠が必要である。

| 主張 | 必要な根拠 |
|---|---|
| 格付 | 特定の債券、日付、格付基準および依存関係の分析 |
| 信用力の引上げ / 上限 | 公表された格付機関の理由 |
| 最低投資金額 | 特定の募集条件 |
| スプレッド / クーポン | 日付が明記された価格決定結果およびペイオフの定義 |
| 販売会社 / 市場シェア | 対象母集団、期間、計算方法の明示 |

## 5. 保留した主張

標準的なビークル、最低投資金額、販売会社の優位性、格付結果、投資家利用目的の序列については、公開された特定の債券がない限り保留する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/japan-securitization-product-matrix]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[derivatives/INDEX]]

## 出典

- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [FSA, examples of FIEA paragraph-1 and paragraph-2 securities](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html).

---
source: structured-finance/japan-consumer-loan-abs-structure
source_hash: c3953fb990c4d1e3
lang: ja
status: machine
fidelity: ok
title: "日本の消費者ローンABSのストラクチャー — 根拠に基づく読み方"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本の消費者ローンABSのストラクチャー — 根拠に基づく読み方

## TL;DR

利息制限法は元本金額帯ごとの法定上限金利を定めているが、証券化プールのAPR、デフォルト率、トリガー水準、保有持分、返済期間、投資家層を示すものではない。今回の調査では、従来の「生き残った五社」、年間デフォルト率レンジ、例示的な早期償還トリガー、5–10%の保有持分、固定的な買い手区分を裏付ける、安定して参照可能な公開取引資料を確認できなかった。これらの主張は削除した。消費者ローンABSは、特定プールと取引資料だけに基づいて再構成する。

## Wiki内の参照先

本ページは、[[structured-finance/consumer-loan-abs-japan-card-issuer]]、[[structured-finance/japan-credit-card-receivable-abs]]、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]と併せて参照する。

## 1. 発行体と担保資産の特定

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)は公開市場情報の入口である。以下の表は、特定取引について追加で必要な根拠を示す。

| 項目 | 必要な根拠 |
|---|---|
| 法的な発行体 / 信託 | 募集資料または格付資料 |
| オリジネーターおよびサービサー | 売買、信託およびサービシング関連資料 |
| 現在の親会社 / 資本関係 | 日付が明記された会社開示 |
| 債権種別 | 適格基準およびプール基準日 |
| プログラム履歴 | 日付が明記されたシリーズ一覧 |

## 2. 金利法制とプールデータ

[利息制限法第1条](https://laws.e-gov.go.jp/law/329AC0000000100)は、以下の法定上限を定めている。

| 元本金額 | 法定上限年利 |
|---|---:|
| JPY 100,000未満 | 20% |
| JPY 100,000以上JPY 1,000,000未満 | 18% |
| JPY 1,000,000以上 | 15% |

これらは法定上限であり、典型的なAPR、プール利回り、デフォルト率ではない。他の法令や事実関係が適用される場合もある。

## 3. プール・パフォーマンスの根拠

[JCRのストラクチャード・ファイナンス格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の根拠確認チェックリストを支持している。

| 指標 | 必要な定義 |
|---|---|
| 延滞 | 延滞期間区分、分子、分母および観測日 |
| 貸倒償却 / デフォルト | 契約上または報告上の定義および回収の取扱い |
| 利回り | 算入される手数料、利息および分母 |
| 経過期間 / ビンテージ | 貸付実行コホートおよび基準日 |
| 集中 | 開示された商品、地域、チャネルおよび債務者に関する項目 |

## 4. リボルビングと早期償還の仕組み

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、一律の閾値ではなく、以下の取引管理項目を検証することを支持している。

| 管理項目 | 特定取引について必要な根拠 |
|---|---|
| リボルビング / 補充期間 | 開始、終了および適格性テスト |
| パフォーマンス・トリガー | 正確な指標、閾値および観測期間 |
| 効果 | 補充の終了、ウォーターフォールの切替え、準備金の変更 |
| 解消 | 解消期間および可逆性 |
| オリジネーター / サービサー事由 | 契約上の定義および交代の仕組み |

## 5. キャッシュフローと信用補完

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下のモデル入力表を支持している。

| 入力項目 | 必要な根拠 |
|---|---|
| 回収金および手数料 | 口座の定義および支払順位 |
| デフォルトおよび回収 | 特定の前提および発生時期 |
| 信用補完 | 実際の劣後、準備金、OCまたは外部補完 |
| 超過スプレッド | 契約上の計算式、留保および払出し |
| 債券 | クラス残高、利息、元本返済および損失配分 |

## 6. 格付と投資家に関する主張

[JCRの公開格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)と特定取引の募集資料は、以下の確認項目を支持している。

| 主張 | 必要な根拠 |
|---|---|
| 格付 | 特定クラス、日付、格付機関および適用された格付基準の版 |
| 保有持分 | 実際に保有される持分および保有者 |
| 買い手 / 販売 | 公開されている場合は募集資料または配分開示 |
| 海外投資家の参加 | 日付が明記された配分の根拠 |
| スプレッド | 特定取引の価格決定結果およびベンチマーク |

## 7. 保留した主張

削除した数値閾値と市場順位は、公開された特定取引、日付、定義、直接リンクが揃った場合に限り復元できる。一般的な格付機関または発行体のホームページだけでは不十分である。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/japan-credit-card-receivable-abs]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]

## 出典

- [Interest Rate Restriction Act](https://laws.e-gov.go.jp/law/329AC0000000100).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).

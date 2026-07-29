---
source: structured-finance/japan-credit-card-receivable-abs
source_hash: 4881a988182c6c80
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本のクレジットカード債権ABS — 根拠に基づく読み方"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本のクレジットカード債権ABS — 根拠に基づく読み方

## TL;DR

今回の調査では、従来記載していたJPY 400–700 billionという市場規模推計、六社の発行体ランキング、マスタートラストのシリーズ数、3–9か月の発行頻度、債権残高、デフォルト率レンジ、期間延長の時期を裏付ける、安定して参照可能な公開取引資料を確認できなかった。これらの数値は削除した。カード債権取引はリボルビング型または信託を利用する場合があるが、その仕組みは特定取引の資料から確認する必要がある。

## Wiki内の参照先

本ページは、[[structured-finance/consumer-loan-abs-japan-card-issuer]]、[[structured-finance/japan-consumer-loan-abs-structure]]、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]と併せて参照する。

## 1. 発行体とプログラムの検証

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)は市場調査の入口である。以下の表は、追加で必要となるプログラムの根拠を示す。

| 項目 | 必要な公開根拠 |
|---|---|
| 法的な発行体 / 信託 | 募集資料、信託資料または格付資料 |
| オリジネーターおよびサービサー | 取引関連資料 |
| プログラム / シリーズ履歴 | 日付が明記された発行体または受託者の一覧 |
| 発行額 | 特定シリーズの発行結果、または定義を伴うJSDAの表 |
| 親会社 / 資本関係 | 最新の会社開示 |

## 2. 単独シリーズと複数シリーズのストラクチャー

[JCRのストラクチャード・ファイナンス格付に関する一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下のストラクチャー項目を検証することを支持している。

| 項目 | 特定取引について必要な根拠 |
|---|---|
| 資産プール | 専用プールまたは共有プールの定義 |
| シリーズの権利 | 回収金および損失の配分 |
| 補充 | 適格基準、差替え、終了条件 |
| シリーズ間の影響 | 支払順位、希薄化、共有トリガーの条項 |
| 受託者 / 口座 | 法的な保有者および口座管理 |

債権がリボルビング型であるという理由だけで、「マスタートラスト」と呼んではならない。

## 3. 債権構成

[割賦販売法](https://laws.e-gov.go.jp/law/336AC0000000159)は法的枠組みを提供するが、実際のプールについては以下の開示が必要である。

| 債権項目 | 必要な根拠 |
|---|---|
| ショッピング / 割賦 / リボルビング / キャッシング | 適格基準の定義および基準日時点の残高 |
| 利回りおよび手数料 | 契約上の構成要素および分母 |
| 延滞 / 貸倒償却 | 定義、延滞期間および回収 |
| 支払率 | 分子、分母および観測期間 |
| 集中 | 開示された口座、チャネル、地域およびビンテージに関する項目 |

法定区分は、プールのAPRまたはデフォルト率を示すものではない。

## 4. 期間延長と償還

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下の資料確認チェックリストを支持している。

| 管理項目 | 必要な根拠 |
|---|---|
| リボルビング期間 | 契約上の開始日および終了日 |
| 予定償還 | クラス固有の支払計算式 |
| 延長オプション | 権利者、条件、通知および最長期間 |
| 早期償還 | 正確な指標、閾値および効果 |
| 法定満期 | 特定シリーズの条件 |

標準的な期間延長の時期または閾値は主張しない。

## 5. 信用補完と格付

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、標準的な比率ではなく、以下の項目を特定することを支持している。

| 主張 | 必要な根拠 |
|---|---|
| 劣後 / 準備金 / OC | 特定取引のクロージング時ストラクチャー |
| 超過スプレッド | 契約上の計算式および留保 |
| 格付 | 特定クラス、日付および適用された格付基準の版 |
| パフォーマンス | 日付が明記された受託者 / サービサー報告書 |
| スプレッド | 特定取引の価格決定結果およびベンチマーク |

## 6. 保留した主張

市場規模、発行体順位、買い手層、シリーズ発行頻度、残高レンジ、デフォルト率、延長期間については、公開された特定取引または定義された公的統計表で裏付けられるまで保留する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/japan-consumer-loan-abs-structure]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]

## 出典

- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [Installment Sales Act](https://laws.e-gov.go.jp/law/336AC0000000159).

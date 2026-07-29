---
source: structured-finance/japan-abs-market-overview
source_hash: 2e7ee11c40f9439a
lang: ja
status: machine
fidelity: ok
title: "日本のABS市場概観 — 再現可能な根拠確認ガイド"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本のABS市場概観 — 再現可能な根拠確認ガイド

## TL;DR

本ページでは、対象データセットを定義せずに、日本の証券化商品、発行体、ビークル、格付、販売会社、投資家、年間発行額を順位付けしない。JHF MBSには専用の公開シリーズがあるが、その他の商品は、JSDAが定める区分と特定取引の記録から計測する必要がある。公募、私募、保有残高、クロスボーダー取引を一つの市場規模ランキングに合算してはならない。

## Wiki内の参照先

商品の根拠範囲については[[structured-finance/japan-securitization-product-matrix]]、JHFの仕組みについては[[structured-finance/jhf-mbs-mechanics]]を参照する。

## 1. 商品の計測

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)および[JHFの日付が明記された発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)は、以下の計測表を裏付けている。

| 計測対象 | 公開情報源 | ルール |
|---|---|---|
| JHF MBSの発行 | JHFのシリーズ別発行実績 | 商品、シリーズ、対象期間を明記する |
| 証券化商品の発行 | JSDA調査 | 区分、対象期間、改訂を維持する |
| 特定のABS / RMBS / CMBS | 発行体、募集資料または格付記録 | 公募・私募に伴う開示範囲を明記する |
| 銀行のストラクチャード・クレジット向けエクスポージャー | 特定銀行の開示 | 発行額ではなく保有額として扱う |
| クロスボーダー取引 | 海外発行体 / 募集資料 | 日本の投資家が参加したという理由だけで、日本国内発行に分類しない |

## 2. 取引関係者

[JCRの公開格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)から特定の格付対象取引を確認できる。以下の表は、各役割について必要な根拠を示す。

| 役割 | 必要な根拠 |
|---|---|
| 発行体 / オリジネーター | 募集資料、信託資料または格付資料 |
| アレンジャー / 販売会社 | 特定取引の発表または募集資料 |
| 受託者 / 口座銀行 | 信託資料および取引関連資料 |
| サービサー / バックアップ・サービサー | サービシング契約または格付資料 |
| 格付機関 | 日付が明記されたクラス別の格付アクション |
| 投資家 / 配分 | 公開されている場合は配分開示 |

販売会社または格付機関の市場シェアに関する結論は記載しない。

## 3. 時系列分析

[JSDAの調査](https://www.jsda.or.jp/en/statistics/securitization-market/)は、以下の再現性チェックリストを支持している。

| 項目 | 必要な取扱い |
|---|---|
| 対象期間 | 正確な開始日 / 終了日および調査の版 |
| 区分 | 情報源における定義および算入範囲 |
| 金額 / 件数 | 引用した表および改訂状況 |
| 公募 / 私募の範囲 | 判明している未収録範囲を明記する |
| 傾向 | 情報源の事実と計算を分けて示す |
| デフォルト / 損失 | 特定の受託者、サービサーまたは格付アクションを使用する |

## 4. 格付、ストラクチャー、価格

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は分析資料であり、特定の市場慣行を立証するものではない。

| 主張 | 必要な根拠 |
|---|---|
| ビークル | 特定の法的資料 |
| トランシェ / 信用補完 | 特定取引のウォーターフォールおよびクロージング時残高 |
| 格付 | 特定クラス、日付および適用された格付基準の版 |
| スプレッド | 日付が明記された価格決定結果およびベンチマーク |
| 投資家層 | 公開された配分 / 保有状況の開示 |
| 市場順位 | 対象母集団、期間、計算方法の明示 |

## 5. 保留した主張

「最大」、「支配的」、「典型的なビークル」、標準的なAAA取得、年間発行額レンジ、投資家の類型、2008年以降 / 2020年以降の回復という説明は、定義された公開データセットまたは特定取引の集合から再現できない限り保留する。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/japan-securitization-product-matrix]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]

## 出典

- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, dated MBS issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).

---
source: structured-finance/japan-auto-loan-abs-waterfall-mechanics
source_hash: 410640b445de215c
lang: ja
status: machine
fidelity: ok
title: "日本のオートローンABSのウォーターフォール — 根拠に基づく読み方"
translated_at: 2026-07-29T10:06:23.508Z
---

# 日本のオートローンABSのウォーターフォール — 根拠に基づく読み方

## TL;DR

今回の調査では、従来記載していた発行体別発行額、プール構成比、APRレンジ、手数料、バックアップ・サービサーの移管時期、90/5/5の資本構成、信用補完比率、トリガーの効果、格付差を裏付ける、安定して参照可能な公開取引資料を確認できなかった。これらの数値は削除した。オートローンABSの仕組みは、特定取引の債権適格基準、サービシング契約、口座、支払順位、信用補完、トリガー、格付資料から再構成する必要がある。

## Wiki内の参照先

本ページは、[[structured-finance/auto-loan-abs-japan-toyota-honda]]、[[structured-finance/credit-rating-methodology-jcr-r-and-i]]、[[structured-finance/spv-tk-gk-vehicle-japan-tax]]と併せて参照する。

## 1. 取引関係者

[JCRのストラクチャード・ファイナンス格付に関する一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下の関係者リスク確認チェックリストを支持している。

| 役割 | 特定取引について必要な根拠 | 避けるべき短絡 |
|---|---|---|
| オリジネーター | 売買 / 信託資料およびプール基準日 | ブランド名またはグループ名 |
| サービサー | サービシング契約および回収口座の条件 | オリジネーターとサービサーが同一だと想定すること |
| バックアップ・サービサー | 選任、業務開始事由および移管計画 | 標準的な銀行または固定的な業務開始期間を想定すること |
| 発行体 / 受託者 | 法的資料 | 資産クラスだけからGK-TKまたは信託を想定すること |
| アレンジャー / 格付機関 | 募集資料および日付が明記された格付アクション | 販売会社または格付機関の「典型性」 |

## 2. プール構成

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の表に示す分析項目を提供する。各数値には、特定プールの報告書が必要である。

| 項目 | 取得すべき根拠 |
|---|---|
| 債権種別 | ローン、割賦販売またはリース、および準拠契約 |
| 新車 / 中古車 | プールの層別データおよび基準日 |
| APRおよび残存期間 | 加重平均値、レンジおよび除外事項 |
| 経過期間 | 貸付実行日の分布 |
| 集中 | 実際に開示された車種、販売店、地域および債務者に関する項目 |

## 3. 利息ウォーターフォール

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、共通の支払順位ではなく、以下のキャッシュフロー項目を検証することを支持している。

| ウォーターフォール項目 | 必要な根拠 |
|---|---|
| 利息回収金 | 契約上の定義および口座 |
| 優先費用 | 特定の手数料および支払順位 |
| 債券利息 | クラスごとの支払順位、繰延べおよび不足額の取扱い |
| 準備金 / OC | 目標額、下限、払出し、補充の仕組み |
| 残余 | 支払条件および留保条件 |

## 4. 元本ウォーターフォール

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下の元本配分チェックリストを支持している。

| 項目 | 必要な根拠 |
|---|---|
| 元本回収金 | 算入される回収金、回収処分金、資産売却代金 |
| 配分 | 資料に記載されたシークエンシャル、プロラタまたはハイブリッド方式 |
| トリガーによる切替え | 正確な指標、閾値、解消条件および恒久性 |
| 損失配分 | クラスの順序および元本減額 / 回復条項 |
| 償還 | 法定満期、予想平均年限の前提およびコール条項 |

## 5. 信用補完

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の信用補完形態を特定することを支持している。その規模は取引ごとに異なる。

| 信用補完 | 必要な根拠 |
|---|---|
| 劣後 | クロージング時のクラス残高および損失負担順位 |
| 超過担保 | 当初額 / 目標額および積上げ・払出しの計算式 |
| 準備金 | 資金拠出元、認められる用途および下限 |
| 超過スプレッド | 費用および損失控除後の契約上の計算式 |
| 外部補完 | 法的に執行可能な金額、提供者および終了条件 |

## 6. パフォーマンス・トリガー

[JCRの一般的方法](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf)は、以下のトリガー確認項目を支持している。

| 確認項目 | 必要な根拠 |
|---|---|
| 指標 | 正確な分子、分母および観測期間 |
| 閾値 | 取引資料に記載された値 |
| 効果 | ウォーターフォール、補充、準備金または償還の変更 |
| 解消 | 解消期間および可逆性 |
| 報告 | 日付が明記された受託者 / サービサーの数値 |

## 7. 発行と格付

[JSDAの証券化市場調査](https://www.jsda.or.jp/en/statistics/securitization-market/)および特定の格付機関による格付アクションは、以下の根拠確認表を支持している。

| 主張 | 必要な公開情報源 |
|---|---|
| 発行額 | 日付が明記された取引資料、または区分の定義を伴うJSDAの表 |
| 棚登録 / 継続発行の状況 | 日付が明記されたシリーズ履歴 |
| クラス格付 | 特定クラス、格付機関およびアクション日 |
| 格付機関比較 | 各社固有の格付基準に基づき、同一クラスかつ同一日付で比較 |
| スプレッド | 特定取引の価格決定結果およびベンチマークの慣行 |

## 8. 保留した主張

従来の数値表は、その全行を裏付ける公開された特定取引の資料を確認できなかったため、明示的に保留する。将来の更新で数値を復元する場合は、取引、基準日 / 価格決定日、定義、公開一次資料への直接リンクを示す必要がある。

## Wiki内の位置付け

本項目は[[structured-finance/INDEX|ストラクチャード・ファイナンス索引]]に位置付け、分野横断の資本市場文脈は[[finance/INDEX|ファイナンス索引]]を参照する。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]

## 出典

- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).

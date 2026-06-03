---
source: japanfg/legal-financial-licenses/payment-license-stack
source_hash: 06a5abe22155e7d2
lang: ja
status: machine
fidelity: ok
title: "日本の決済ライセンス・スタック"
translated_at: 2026-06-02T14:54:39.046Z
---

# 日本の決済ライセンス・スタック

## 概要

日本の決済商品は、資金移動、前払式支払手段、電子決済等代行、電子決済手段、電子決済等取扱、信用・割賦販売、カード加盟店管理、銀行口座からの直接支払いなど、複数の公開規制カテゴリを組み合わせることがある。そのため、ウォレット、チェックアウト商品、コード決済サービス、ステーブルコイン連動サービスは、複数の法的ルートを持ち得る。

このページは [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] に属し、[[payments/INDEX|payments domain]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]]、[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]]、[[payments/credit-purchase-card-operators-japan-index|credit / card registry]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]、[[fintech/japan-ecisb-license|Japan ECISB license]]、[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] に接続する。

## ライセンス・スタック表

| 機能 | 主な公開カテゴリ | 主な法令・ルート | 認可・登録 | FinWiki ルート |
|---|---|---|---|---|
| 非銀行送金・ウォレット送金 | `資金移動業者` | 資金決済法 | 登録 | [[payments/funds-transfer-service-providers-japan-index]] |
| 第三者への支払いに使う蓄積価値 | 第三者型前払式支払手段発行者 | 資金決済法 | 事前登録 | [[payments/prepaid-payment-instrument-issuers-japan-index]] |
| 自家型の蓄積価値 | 自家型前払式支払手段発行者 | 資金決済法 | 基準超過後の届出 | [[payments/funds-transfer-vs-prepaid-boundary]] |
| 銀行口座情報・支払指図 | `電子決済等代行業者` | 銀行法ルート | 登録 | [[payments/japan-bank-api-payment-agency-route]] |
| ステーブルコイン・EPI の売買、交換、媒介、保管類似取扱い | `電子決済手段等取引業者` | 資金決済法 | 登録 | [[fintech/japan-ecisb-license]] |
| 銀行から委託された電子的な預金債権取扱い | `電子決済等取扱業` | 銀行法ルート | 登録 | [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]] |
| クレジットカード・割賦・BNPL | 割賦販売法・信用購入あっせんルート | 経済産業省ルート | 該当時は登録 | [[payments/credit-purchase-card-operators-japan-index]], [[payments/japan-bnpl-credit-purchase-boundary]] |
| 加盟店向け PSP・アクワイアリング | 加盟店契約・PSP・カード加盟店管理ルート | 割賦販売法、カード規則、サービス規約 | 役割により異なる | [[payments/card-acquiring-japan-stack]], [[payments/psp-merchant-settlement-risk]] |
| 銀行口座からの直接支払い | Bank Pay・J-Debit・Cotra・銀行口座振替ルート | ネットワーク・スキーム・銀行口座ルート | 参加者およびスキームのルート | [[payments/account-to-account-payment-japan]] |

## 資金移動ルート

資金移動ルートは、非銀行送金に関する資金決済法上の登録カテゴリである。FSA 資料では、現在の三類型構造が示されている。

| 類型 | FSA 資料上の公開説明 | 境界項目 |
|---|---|---|
| 第一種 | JPY 1 million を超える送金需要に対応するルート | 高額送金向けの資金移動カテゴリ。 |
| 第二種 | 従来からの中核的な資金移動カテゴリ | 非銀行送金・ウォレット送金の中心カテゴリ。 |
| 第三種 | 少額送金ルート | 少額送金カテゴリ。 |

公開情報での確認には、FSA の資金移動業ページ、資金移動業者一覧、事業者規約、登録番号を用いる。商品規約と法的主体が免許銀行の預金ルートを示していない限り、残高は銀行預金として記録しない。

## 前払式支払手段ルート

前払式支払手段ルートは、蓄積価値に関する資金決済法上のルートである。公開情報上の主な区分は、自家型と第三者型である。

| 区分 | 公開項目 | 公開情報での確認方法 |
|---|---|---|
| 自家型前払式支払手段 | 発行者および利用可能な加盟店・サービス範囲が、発行者自身のグループまたは自社サービスのルートに結びつく。 | FSA の前払式支払手段 Q&A、発行者開示、規約。 |
| 第三者型前払式支払手段 | 蓄積価値を、当該手段のルートに基づいて第三者加盟店またはサービスで利用できる。 | FSA の第三者型前払式支払手段発行者一覧およびサービス規約。 |
| 自家型の基準額項目 | FSA Q&A では、基準日に未使用残高が JPY 10 million を超えると自家型発行者に届出義務が生じるとされる。 | FSA FinTech Support Desk Q&A および発行者記録。 |
| 第三者型の承認項目 | 第三者型前払式支払手段発行者ルートでは事前登録を用いる。 | FSA の第三者型発行者一覧。 |

前払式支払手段ルートは、加盟店支払い・蓄積価値のルートである。資金移動など別のルートが併存しない限り、一般的な送金とは分けて扱う。

## 電子決済手段ルート

資金決済法側では、電子決済手段取引業に `電子決済手段等取引業者` を用いる。FSA の公開 EPI 資料は、このルートをステーブルコイン・電子決済手段の売買、交換、媒介、保管類似取扱いに接続している。

銀行法側では、銀行から委託された預金債権の電子的取扱いに `電子決済等取扱業` を用いる。この公開法令カテゴリは資金決済法上の EPI 取引ルートと同一ではないため、[[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|Japan bank license and BaaS boundary]] では別個に記録する。

## 商品レイヤーの例

| 商品面 | 想定される法的構成要素 |
|---|---|
| QR ウォレット | 資金移動業登録、前払式支払手段発行者登録、加盟店 PSP・アクワイアリング、銀行 API、クレジットカード連携。 |
| 旅行用ウォレット | 資金移動、前払式支払手段、外国為替・送金規約、カードスキーム、開示されている場合は銀行代理業。 |
| BNPL チェックアウト | 割賦販売・信用購入あっせんルート、加盟店契約、PSP 決済、与信審査。 |
| 銀行口座決済 | 銀行口座、銀行 API・電子決済等代行、口座直結型加盟店導入、返金・取消管理。 |
| ステーブルコイン決済 | EPI 取引ルート、電子決済等取扱ルート、発行者・信託・銀行の分類、該当時はウォレットまたは交換業登録。 |
| BaaS 預金ウォレット | 免許銀行、提携先 UI、開示されている場合は銀行代理業または電子決済等代行ルート。 |

## 公開記録で確認する項目

| 項目 | 情報源ルート |
|---|---|
| 運営者の正式名称 | FSA・経済産業省の登録簿および会社開示。 |
| 登録カテゴリ | 資金移動、前払式支払手段、電子決済等代行、EPI、信用・カード、銀行代理業、電子決済等取扱。 |
| 登録番号 | 利用可能な登録簿行。 |
| 資金移動の類型 | FSA 一覧・資料で開示される第一種、第二種、第三種。 |
| 前払式支払手段の分類 | 自家型または第三者型前払式支払手段。 |
| FSA 一覧の基準日 | FSA の事業者一覧行または登録簿ファイル。 |
| サービス範囲 | 商品規約、公式サービスページ、規制当局一覧。 |
| 残高の種類 | 預金、前払残高、資金移動残高、信用債権、電子決済手段、銀行預金債権。 |
| 加盟店ルート | アクワイアラ、PSP、決済ファシリテータ、Bank Pay・J-Debit ルート、またはスキームルート。 |
| 利用者保護・分別管理 | 規制当局ガイダンス、規約、開示資料。 |

## JapanFG の事業者リンク

- ウォレット・資金移動: [[JapanFG/paypay]], [[JapanFG/merpay]], [[JapanFG/au-payment]], [[JapanFG/rakuten-edy]], [[JapanFG/recruit-mufg-business]], [[JapanFG/jal-payment-port]], [[JapanFG/sbi-remit]].
- 加盟店 PSP・アクワイアリング: [[JapanFG/gmo-payment-gateway]], [[JapanFG/gmo-epsilon]], [[JapanFG/sb-payment-service]], [[JapanFG/dg-financial-technology]], [[JapanFG/netstars]].
- 信用・カード・割賦: [[JapanFG/smbc-card]], [[JapanFG/mufg-nicos]], [[JapanFG/rakuten-card]], [[JapanFG/paypay-card]], [[JapanFG/orico]], [[JapanFG/jaccs]], [[JapanFG/paidy]].
- ステーブルコイン・EPI 隣接領域: [[JapanFG/jpyc]], [[JapanFG/progmat]], [[exchanges/jp-exchange-sbi-vc-trade]], [[fintech/jp-stablecoin-progmat]].

## 関連項目

- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/account-to-account-payment-japan]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/japan-ecisb-license]]
- [[INDEX|FinWiki index]]

## 出典

- e-Gov: 資金決済法。
- FSA: 免許・登録事業者一覧。
- FSA: 資金移動業者ページおよび登録簿。
- FSA: 前払式支払手段の政策ページおよび発行者登録簿。
- FSA: FinTech Support Desk Q&A。
- FSA: 2020  資金決済法改正説明。
- FSA: 暗号資産・電子決済手段の政策ページ。
- FSA: 電子決済手段等取引業ページ。
- FSA: 電子決済等取扱業ページ。
- 経済産業省: 割賦販売法の登録事業者一覧。

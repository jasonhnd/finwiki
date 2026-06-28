---
source: financial-licenses/payment-license-stack
source_hash: c0c768134f7f2966
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の決済ライセンス・スタック"
translated_at: 2026-06-26T08:31:59.847Z
---

# 日本の決済ライセンス・スタック

## 概要日本の決済プロダクトは、複数の公的規制カテゴリを組み合わせうる：資金移動、前払式支払手段、電子決済等代行、電子決済手段、電子決済等取扱、信用 / 割賦販売、カードアクワイアリング、銀行口座直接決済。したがって、ウォレット、チェックアウト・プロダクト、コード決済サービス、またはステーブルコイン連動サービスは、複数の法的ルートを持ちうる。

本ページは [[financial-licenses/INDEX|JapanFG legal / financial licenses]] に属し、[[payments/INDEX|payments domain]]・[[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]・[[payments/funds-transfer-service-providers-japan-index|資金移動 registry]]・[[payments/prepaid-payment-instrument-issuers-japan-index|前払式発行会社 registry]]・[[payments/credit-purchase-card-operators-japan-index|credit / card registry]]・[[payments/japan-bank-api-payment-agency-route|bank API route]]・[[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]・[[fintech/japan-ecisb-license|Japan ECISB license]]・[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] にリンクする。

## ライセンス・スタック・マトリクス

| 機能 | 主な公的カテゴリ | 主たる法律 / ルート | 認可 / 登録 | FinWiki ルート |
|---|---|---|---|---|
| ノンバンク送金 / ウォレット送金 | `資金移動業者` | 資金決済法 | 登録 | [[payments/funds-transfer-service-providers-japan-index]] |
| 第三者支払向け価値保存 | 第三者型前払式支払手段発行者 | 資金決済法 | 事前登録 | [[payments/prepaid-payment-instrument-issuers-japan-index]] |
| 自家型価値保存 | 自家型前払式支払手段発行者 | 資金決済法 | 基準額条件超過後の届出 | [[payments/funds-transfer-vs-prepaid-boundary]] |
| 銀行口座情報 / 支払指図 | `電子決済等代行業者` | 銀行法ルート | 登録 | [[payments/japan-bank-api-payment-agency-route]] |
| ステーブルコイン / EPI の販売・交換・媒介・カストディ類似の取扱い | `電子決済手段等取引業者` | 資金決済法 | 登録 | [[fintech/japan-ecisb-license]] |
| 銀行委託による預金債権の電子的取扱い | `電子決済等取扱業` | 銀行法ルート | 登録 | [[financial-licenses/bank-license-and-baas-boundary]] |
| クレジットカード / 割賦 / BNPL | 割賦販売法 / 信用購入あっせんルート | 経産省ルート | 該当する場合は登録 | [[payments/credit-purchase-card-operators-japan-index]]・[[payments/japan-bnpl-credit-purchase-boundary]] |
| 加盟店 PSP / アクワイアリング | 加盟店契約 / PSP / カードアクワイアリングルート | 割賦販売法、カードルール、サービス規約 | 役割による | [[payments/card-acquiring-japan-stack]]・[[payments/psp-merchant-settlement-risk]] |
| 銀行口座直接決済 | Bank Pay / J-Debit / Cotra / 銀行口座振替ルート | ネットワーク / スキーム / 銀行口座ルート | 参加者およびスキームルート | [[payments/account-to-account-payment-japan]] |

## 資金移動ルート資金移動ルートは、ノンバンク送金に係る資金決済法上の登録カテゴリである。FSA 資料は、現行の三類型構造を示している：

| 類型 | FSA 資料における公開記載 | 境界フィールド |
|---|---|---|
| 第一種 | 1 百万円超の送金ニーズ向けルート | より高額な資金移動カテゴリ。 |
| 第二種 | 従来からの中核的資金移動カテゴリ | 主たるノンバンク送金 / ウォレット送金カテゴリ。 |
| 第三種 | より低額な送金ルート | 少額送金カテゴリ。 |

公開検証には、FSA 資金移動業ページ、FSA 資金移動業者一覧、事業者の規約、登録番号を用いる。プロダクトの規約と法人格が認可された銀行預金ルートを示していない限り、残高は銀行預金として記録されない。

## 前払式支払手段ルート前払ルートは、価値保存に係る資金決済法上のルートである。主たる公開上の区分は、自家型前払式支払手段と第三者型前払式支払手段との間にある。

| カテゴリ | 公開フィールド | 公開検証 |
|---|---|---|
| 自家型前払式支払手段 | 発行者および適用される加盟店 / サービスの範囲は、発行者自身のグループまたは自社サービスルートに紐づく。 | FSA 前払 Q&A、発行者開示、規約。 |
| 第三者型前払式支払手段 | 当該手段ルートの下で、価値保存は第三者の加盟店またはサービスに利用できる。 | FSA 第三者型前払発行者一覧およびサービス規約。 |
| 自家型基準額フィールド | FSA Q&A は、自家型発行者が基準日に未使用残高が 10 百万円を超えた時点で届出義務を負うと述べている。 | FSA FinTech サポートデスク Q&A および発行者記録。 |
| 第三者型認可フィールド | 第三者型前払発行者ルートは事前登録を用いる。 | FSA 第三者型前払発行者一覧。 |

前払ルートは加盟店決済 / 価値保存のルートである。資金移動など別のルートが併存しない限り、一般的な送金とは区別される。

## 電子決済手段ルート資金決済法側は、電子決済手段等取引業について `電子決済手段等取引業者` を用いる。FSA の公開 EPI 資料は、このルートをステーブルコイン / 電子決済手段の販売・購入・交換・媒介・カストディ類似の取扱いと結びつけている。

銀行法側は、銀行委託による預金債権の電子的取扱いについて `電子決済等取扱業` を用いる。このルートは [[financial-licenses/bank-license-and-baas-boundary|Japan bank license and BaaS boundary]] に別途記録される。公的な法律カテゴリが資金決済法の EPI 取引ルートと同一ではないためである。

## プロダクト層の例

| プロダクト形態 | 想定される法的構成要素 |
|---|---|
| QR ウォレット | 資金移動業登録、前払発行者登録、加盟店 PSP / アクワイアリング、銀行 API、クレジットカード連携。 |
| トラベルウォレット | 資金移動、前払、外国為替 / 送金規約、カードスキーム、開示されている場合の銀行代理。 |
| BNPL チェックアウト | 割賦販売 / 信用購入あっせんルート、加盟店契約、PSP 決済、与信審査。 |
| 銀行口座決済 | 銀行口座、銀行 API / 電子決済等代行、口座直結の加盟店オンボーディング、返金 / キャンセル管理。 |
| ステーブルコイン決済 | EPI 取引ルート、電子決済等取扱ルート、発行者 / 信託 / 銀行の分類、適用される場合のウォレットまたは取引所登録。 |
| BaaS 預金ウォレット | 認可された銀行、パートナー UI、開示されている場合の銀行代理または電子決済等代行ルート。 |

## 公開記録フィールド

| フィールド | ソースルート |
|---|---|
| 事業者法人名 | FSA / 経産省の登録簿および会社開示。 |
| 登録カテゴリ | 資金移動、前払、電子決済等代行、EPI、信用 / カード、銀行代理、または電子決済等取扱。 |
| 登録番号 | 利用可能な場合の登録簿の行。 |
| 資金移動の類型 | FSA 一覧 / 資料で開示されている場合の第一種、第二種、または第三種。 |
| 前払の分類 | 自家型または第三者型前払式支払手段。 |
| FSA 一覧の基準日 | FSA 事業者一覧の行または登録簿ファイル。 |
| サービス範囲 | プロダクト規約、公式サービスページ、規制当局の一覧。 |
| 残高の種類 | 預金、前払残高、資金移動残高、信用債権、電子決済手段、または銀行預金債権。 |
| 加盟店ルート | アクワイアラー、PSP、ペイメントファシリテーター、Bank Pay / J-Debit ルート、またはスキームルート。 |
| 利用者保護 / 分別管理 | 規制当局のガイダンス、規約、開示文書。 |

## JapanFG 事業者リンク

- ウォレット / 資金移動：[[payment-firms/paypay]]・[[payment-firms/merpay]]・[[payment-firms/au-payment]]・[[payment-firms/rakuten-edy]]・[[payment-firms/recruit-mufg-business]]・[[payment-firms/jal-payment-port]]・[[payment-firms/sbi-remit]]。
- 加盟店 PSP / アクワイアリング：[[payment-firms/gmo-payment-gateway]]・[[payment-firms/gmo-epsilon]]・[[payment-firms/sb-payment-service]]・[[payment-firms/dg-financial-technology]]・[[payment-firms/netstars]]。
- 信用 / カード / 割賦：[[card-issuers/smbc-card]]・[[card-issuers/mufg-nicos]]・[[card-issuers/rakuten-card]]・[[card-issuers/paypay-card]]・[[card-issuers/orico]]・[[card-issuers/jaccs]]・[[payment-firms/paidy]]。
- ステーブルコイン / EPI 隣接：[[payment-firms/jpyc]]・[[payment-firms/progmat]]・[[exchanges/jp-exchange-sbi-vc-trade]]・[[fintech/jp-stablecoin-progmat]]。

## 関連

- [[financial-licenses/INDEX]]
- [[financial-licenses/bank-license-and-baas-boundary]]
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

## ソース

- e-Gov：資金決済法。
- FSA：認可 / 登録事業者一覧。
- FSA：資金移動業者ページおよび登録簿。
- FSA：前払式支払手段の政策ページおよび発行者登録簿。
- FSA：FinTech サポートデスク Q&A。
- FSA：2020 資金決済法改正の解説。
- FSA：暗号資産 / 電子決済手段の政策ページ。
- FSA：電子決済手段等取引業ページ。
- FSA：電子決済等取扱業ページ。
- 経産省：割賦販売法の登録事業者一覧。

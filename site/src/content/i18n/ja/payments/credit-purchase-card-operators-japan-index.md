---
source: payments/credit-purchase-card-operators-japan-index
source_hash: 07b1fbcddfe020a0
lang: ja
status: machine
fidelity: ok
title: "日本の信用購入・カード事業者登録インデックス"
translated_at: 2026-06-02T16:33:58.512Z
---
# 日本の信用購入・カード事業者登録インデックス

## 概要

METI の割賦販売法公開一覧は、日本のクレジットカード発行、ショッピングクレジット、個別割賦信用、加盟店契約 / カード番号取扱いの管理面である。**2026-04 月末**時点で、METI は **241 登録包括信用購入あっせん業者**、**0 少額包括信用購入あっせん業者**、**138 登録個別信用購入あっせん業者**、**275 登録クレジットカード番号等取扱契約締結事業者**を掲載している。

このページは [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] および [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] とあわせて読み、カード信用、加盟店アクワイアリング、PSP 業務、ウォレット / 資金移動商品を切り分ける。公式 METI PDF は、行単位の真実のソースであり続ける。

## 登録スナップショット

| 登録区分 | 時点 | 件数 | ウィキでの扱い |
|---|---:|---:|---|
| 登録包括信用購入あっせん業者 | 2026-04 月末 | 241 | 重要なカード発行会社 / 信販会社をルート化し、地域の長い裾野は METI PDF に残す。 |
| 登録少額包括信用購入あっせん業者 | 2026-04 月末 | 0 | 独立した wiki 対応はしない。 |
| 登録個別信用購入あっせん業者 | 2026-04 月末 | 138 | 重要な割賦信用、自動車金融、BNPL、銀行グループ信用事業者だけを昇格させる。 |
| クレジットカード番号等取扱契約締結事業者 | 2026-04 月末 | 275 | アクワイアラー、加盟店 PSP、カード番号取扱責任に使う。 |

## 境界

| 境界 | 扱い |
|---|---|
| 包括信用購入あっせん業者 | カード / リボ / 信用購入事業者ルート。カード発行会社ページと重なることが多い。 |
| 個別信用購入あっせん業者 | ショッピングクレジット、自動車金融、教育 / 医療クレジット、その他販売金融ルート。 |
| クレジットカード番号等取扱契約締結事業者 | 加盟店契約とカードデータ管理のルート。PSP / アクワイアリング分析に不可欠。 |
| 資金移動業者 | FSA 登録と [[payments/funds-transfer-service-providers-japan-index]] を使う。 |
| 前払式支払手段発行者 | FSA 前払式支払手段登録と [[payments/prepaid-payment-instrument-issuers-japan-index]] を使う。 |

## 既存の重要 wiki ルート

| セグメント | ルート | 独立ページとする理由 |
|---|---|---|
| メガバンク / 銀行グループ系カード発行会社 | [[card-issuers/smbc-card]], [[card-issuers/mufg-nicos]], [[card-issuers/jcb]], [[trust-banks/mitsubishi-ufj-trust-bank]] | イシュイング / アクワイアリング、銀行グループ戦略、カードネットワークまたは信託銀行への隣接性。 |
| 小売 / エコシステム系カード発行会社 | [[card-issuers/rakuten-card]], [[card-issuers/paypay-card]], [[card-issuers/aeon-financial-service]], [[card-issuers/epos-card]], [[card-issuers/seven-card-service]], [[card-issuers/ucs-card]], [[card-issuers/life-card]], [[card-issuers/pocket-card]] | 消費者信用、ロイヤルティ、小売金融、決済データループ。 |
| 消費者金融 / 割賦 | [[consumer-finance/smbc-consumer-finance]], [[consumer-finance/acom]], [[consumer-finance/aiful]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[card-issuers/aplus]], [[consumer-finance/shinsei-financial]], [[card-issuers/toyota-finance]] | 貸付 / 保証 / 割賦信用のオペレーティング会社。 |
| 加盟店 PSP / アクワイアリング | [[payment-firms/gmo-payment-gateway]], [[payment-firms/gmo-epsilon]], [[payment-firms/sb-payment-service]], [[payment-firms/dg-financial-technology]], [[payment-firms/netstars]] | 加盟店オンボーディング、ゲートウェイ、カード番号取扱い、決済リスクインフラ。 |
| ウォレット / 組込金融 | [[payment-firms/recruit-mufg-business]], [[payment-firms/jal-payment-port]], [[payment-firms/paypay]], [[payment-firms/merpay]], [[payment-firms/au-payment]] | ウォレットはプリペイド、資金移動、加盟店決済、カード連携レールを組み合わせることが多い。 |

## 分析レンズ

FinWiki にとって METI 一覧の最も重要な使い方は、「誰が PDF に載っているか」ではなく、「その事業者が信用とアクワイアリングのスタックでどの役割を果たすか」である。

- カード発行会社は消費者信用と返済行動を保有する。
- 個別信用事業者は加盟店、消費者、商品金融を結びつける。
- 加盟店契約事業者は、どの加盟店がカードを受け入れられるかを決め、オンボーディング / モニタリング義務を負う。
- PSP は、最終的な加盟店契約権限が別の登録アクワイアラーにある場合でも、技術的に中核となることがある。
- 複数の一覧に載る事業者もあるため、免許ごとにページを重複させるのではなく、一つの会社ページで境界を説明する。

## 関連項目

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI registered operator lists: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI registered comprehensive credit purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI registered individual credit purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI credit-card-number handling contract concluding operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf

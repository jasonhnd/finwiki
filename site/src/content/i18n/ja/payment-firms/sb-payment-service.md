---
source: payment-firms/sb-payment-service
source_hash: 7b924a58a59eaa8f
lang: ja
status: machine
fidelity: ok
title: "SBペイメントサービス (SB Payment Service)"
translated_at: 2026-06-24T07:24:12.878Z
---
# SBペイメントサービス (SB Payment Service)


## ウィキ上の位置づけ

この項目は [[payment-firms/INDEX|payment-firms INDEX]] の配下に位置する。ピア比較・対比の文脈では [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]]、より広い制度・規制上の境界では [[payments/INDEX|payments index]] とあわせて読む。

## 要約

SBペイメントサービスは SoftBank group の merchant payment / PSP operator。公式事業紹介はオンラインから店舗までの決済サービスと、アクワイアラとしての加盟店審査・管理・決済サービス提供を示しており、[[payments/card-acquiring-japan-stack|card acquiring stack]] の主要ページ。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人名 | SBペイメントサービス株式会社 |
| グループ文脈 | SoftBank / LY / PayPay payment ecosystem |
| 主要レーン | PSP、加盟店アクワイアリング、オンライン・オフライン決済サービス |
| 規制上のルート | カード番号取扱契約締結 / アクワイアリング管理は、METI の信用取引関連資料と公式事業開示で確認する。^[verified-2026-06-24] |

## 2. 事業上の役割

- PayPay の消費者向けウォレットを超える、加盟店向け決済インフラを提供する。同社は消費者ウォレットではなく、事業者向けにオンラインから店舗までの決済サービスを提供すると説明している。^[verified-2026-06-24]
- カード受入、オンラインチェックアウト、セキュリティ、加盟店管理をつなぐ。事業ページは、オンライン決済で契約・精算・システム・運用を支援し、アクワイアラとして加盟店審査・管理・決済サービスを行うと説明している。^[verified-2026-06-24]
- SoftBank ecosystem における加盟店サービス層である。PayPay は消費者向けコード決済ウォレット、[[card-issuers/paypay-card]] はクレジット issuer、SBPS は加盟店向け PSP / acquirer interface である。^[verified-2026-06-24]
- 事業ページは SBPS が Visa、Mastercard、UnionPay のブランドライセンスを保有すると記載しており、カードスキーム受入に直接触れる日本の PSP を整理する際にも有用である。^[verified-2026-06-24]
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/dg-financial-technology|DGFT]] との比較対象として有用。

## 3. この単独ページが重要な理由

SoftBank の決済スタックには、消費者向けウォレット、カード issuer、加盟店 PSP の各レイヤーがある。SBPS は加盟店サービス層であるため、独立した事業会社ページが必要である。

## 関連

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## 出典

- SB Payment Service 会社情報: https://www.sbpayment.co.jp/info/
- SB Payment Service 事業ページ: https://www.sbpayment.co.jp/info/business/
- METI 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI クレジットカード番号等取扱契約締結事業者登録簿 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf

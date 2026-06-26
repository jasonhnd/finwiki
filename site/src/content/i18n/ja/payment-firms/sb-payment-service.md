---
source: payment-firms/sb-payment-service
source_hash: e4cecbd7ca5df385
lang: ja
status: machine
fidelity: ok
title: "SBペイメントサービス (SB Payment Service)"
translated_at: 2026-06-26T03:26:36.041Z
---

# SBペイメントサービス (SB Payment Service)


## Wiki内の位置づけ

このページは [[payment-firms/INDEX|決済事業者の索引]] に属する。比較対象としては [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] を参照し、制度・規制上の広い位置づけは [[payments/INDEX|決済領域の索引]] と併せて読む。

## 要点

SBペイメントサービスは SoftBank グループの加盟店向け決済・PSP 運営会社。公式事業紹介はオンラインから店舗までの決済サービスと、アクワイアラとしての加盟店審査・管理・決済サービス提供を示しており、[[payments/card-acquiring-japan-stack|カード加盟店管理・アクワイアリングの構造]] を読むための主要ページである。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | SBペイメントサービス株式会社 |
| グループ文脈 | SoftBank / LY / PayPay 決済経済圏 |
| 主な領域 | PSP、加盟店契約・アクワイアリング、オンラインおよび店舗向け決済サービス |
| 規制上の確認経路 | 経済産業省の信用取引関連資料と公式事業開示を通じて、クレジットカード番号等取扱契約締結・アクワイアリング管理を確認する。^[verified-2026-06-24] |

## 2. 事業上の役割

- PayPay の消費者向けウォレットとは別に、加盟店向けの決済基盤を提供する。同社は消費者向けウォレット商品ではなく、事業者向けにオンラインから店舗までの決済サービスを説明している。^[verified-2026-06-24]
- カード受入、オンライン決済、セキュリティ、加盟店管理をつなぐ。事業紹介ページは、オンライン決済の契約、精算、システム、運用を支援し、アクワイアラとして加盟店審査・管理・決済サービスを担うと説明している。^[verified-2026-06-24]
- SoftBank 経済圏の中では加盟店向けサービス層を担う。PayPay は消費者向けコード決済ウォレット、[[card-issuers/paypay-card]] はクレジット発行会社、SBPS は加盟店と接続する PSP・アクワイアラの窓口である。^[verified-2026-06-24]
- 事業紹介ページは、SBPS が Visa、Mastercard、UnionPay のブランドライセンスを保有すると記載している。そのため、日本の PSP のうちカードスキーム受入に直接関わる事業者を整理する際に有用である。^[verified-2026-06-24]
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/dg-financial-technology|DGFT]] との比較対象になる。

## 3. 単独ページにする理由

SoftBank の決済スタックには、消費者向けウォレット、カード発行会社、加盟店向け PSP の各層がある。SBPS は加盟店向けサービス層を担うため、独立した運営会社ページとして扱う必要がある。

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SBペイメントサービス 会社情報: https://www.sbpayment.co.jp/info/
- SBペイメントサービス 事業紹介: https://www.sbpayment.co.jp/info/business/
- 経済産業省 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- 経済産業省 登録クレジットカード番号等取扱契約締結事業者一覧 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf

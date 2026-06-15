---
source: card-issuers/paypay-card
source_hash: 068d22ea83d16bf9
lang: ja
status: machine
fidelity: ok
title: "PayPayカード (PayPay Card)"
translated_at: 2026-06-15T03:48:21.931Z
---

# PayPayカード (PayPay Card)


## Wiki ルート

本項目は [[card-issuers/INDEX|card-issuers INDEX]] に属する。隣接する文脈については [[payments/INDEX|payments index]] を、より広い体系の境界については [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] を併せて参照のこと。

## TL;DR

PayPayカードは [[megabanks/paypay-fg|PayPay金融グループ]] のクレジットカード / PayPayクレジット operator。PayPay wallet の支払い体験に credit line を組み込む役割を持つため、wallet と card issuer を分けて管理する必要がある。

## 1. 法人・ライセンス境界

| 項目 | 内容 |
|---|---|
| 法人 | PayPayカード株式会社 |
| グループ | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| 主要レーン | PayPay Card, PayPay Card Gold, PayPay credit products, lending disclosures |
| 規制ルート | 公式会社告知; 割賦販売法に基づくクレジットカード規制について METI 登録事業者一覧。 |

## 2. 事業上の役割

- PayPay のコード決済・アプリ流通基盤に、リボ / クレジットカードの経済性を加える。
- ポイント、アプリ決済、カードアクワイアリングのパートナー、消費者信用を一つのリテールファイナンスのファネルに結び付ける; issuer / acquirer / processor のマップについては [[payments/japan-card-issuer-acquirer-processor-split]] を参照。
- PayPay を、最も近いエコシステム金融のピアである [[card-issuers/rakuten-card|楽天カード]]、さらに au PAY、d払い、伝統的なカード発行会社と比較するうえで重要 — スキームの経済性は [[payments/japan-payment-scheme-economics-matrix]] にある。

## 3. なぜこの独立ページが重要か

ウォレットとしての PayPay と、クレジット operator としての PayPay Card は、ライセンス、バランスシート、消費者保護の論点が異なる。本ページはその境界を可視化し続ける。

## 関連

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## 出典

- PayPay Card 会社ページ: https://www.paypay-card.co.jp/company/
- 割賦販売法に基づく METI 登録事業者: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html

---
source: card-issuers/paypay-card
source_hash: 6773cca9ba6c7e17
lang: ja
status: machine
fidelity: ok
title: "PayPayカード (PayPay Card)"
translated_at: 2026-06-20T09:33:00.420Z
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

- PayPay のコード決済・アプリ流通基盤に、クレジットカードと翌月まとめ払いの経済性を加える。
- ポイント、アプリ決済、PayPay Card、PayPay Card Gold、PayPay Credit、カードアクワイアリングのパートナー、消費者信用、貸金開示、銀行代理、電子決済等代行の表面を、一つのリテールファイナンスのファネルに結び付ける。issuer / acquirer / processor のマップについては [[payments/japan-card-issuer-acquirer-processor-split]] を参照。
- 会社概要は PayPay株式会社を株主として示し、包括信用購入あっせん業、カード番号取扱契約締結、貸金、電子決済等代行、銀行代理の登録を列挙している。したがって、このカードページは PayPay グループ内の信用 operator 境界である。
- PayPay を、最も近いエコシステム金融のピアである [[card-issuers/rakuten-card|楽天カード]]、さらに au PAY、d払い、伝統的なカード発行会社と比較するうえで重要 — スキームの経済性は [[payments/japan-payment-scheme-economics-matrix]] にある。

## 3. イシュアとウォレットの境界

| レイヤー | 公開情報からの読み方 |
|---|---|
| カード商品 | 事業ページは PayPay Card、PayPay Card Gold、PayPay Credit を中核サービスとして説明している。 |
| ウォレット連携 | PayPay Credit は PayPay アプリ上で利用されるが、PayPay Card は登録された信用 operator である。ウォレット残高と信用債権の分析は分けるべきである。 |
| グループ関係 | 会社概要は PayPay株式会社を株主として列挙し、イシュアを PayPay FG / SoftBank-LY の流通に結び付けつつ、独立した法的・規制上の entity として残している。 |
| 規制ルート | METI 一覧は割賦販売法 / カード番号 operator 境界の公開アンカーであり、会社概要は貸金、電子決済等代行、銀行代理の開示を加えている。 |

## 4. なぜこの独立ページが重要か

ウォレットとしての PayPay と、クレジット operator としての PayPay Card は、ライセンス、バランスシート、消費者保護の論点が異なる。本ページはその境界を可視化し続ける。

## 関連

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## 出典

- PayPay Card 会社ページ: https://www.paypay-card.co.jp/company/
- PayPay Card 会社概要: https://www.paypay-card.co.jp/company/profile/
- PayPay Card 事業概要: https://www.paypay-card.co.jp/company/business/
- 割賦販売法に基づく METI 登録事業者: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html

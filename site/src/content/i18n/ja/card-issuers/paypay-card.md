---
source: card-issuers/paypay-card
source_hash: 6353af91f86952d7
lang: ja
status: machine
fidelity: ok
title: "PayPayカード (PayPay Card)"
translated_at: 2026-06-24T07:24:12.872Z
---
# PayPayカード (PayPay Card)


## ウィキ上の位置づけ

この項目は [[card-issuers/INDEX|card-issuers INDEX]] の配下に位置する。隣接する文脈では [[payments/INDEX|payments index]]、より広い制度境界では [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] とあわせて読む。

## 要約

PayPayカードは [[megabanks/paypay-fg|PayPay金融グループ]] のクレジットカード / PayPayクレジット operator。PayPay wallet の支払い体験に credit line を組み込む役割を持つため、wallet と card issuer を分けて管理する必要がある。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人名 | PayPayカード株式会社 |
| グループ | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| 主要レーン | PayPay Card、PayPay Card Gold、PayPay credit products、貸金開示 |
| 規制上のルート | 公式会社通知。クレジットカード / 割賦販売法上の管理は METI 信用取引関連資料で確認する。^[verified-2026-06-24] |
| 会社ページ上の商品切り分け | 公式会社ページの導線は PayPay Card、PayPay Card Gold、PayPay Credit を分けており、会社 footer では貸金業登録も別途開示している。^[verified-2026-06-24] |

## 2. 事業上の役割

- PayPay のコード決済とアプリ配布基盤に revolving / credit-card economics を追加する。会社ページは PayPay Card と PayPay Credit を PayPay app 隣接の credit products として明示的に位置づけている。^[verified-2026-06-24]
- ポイント、アプリ checkout、カード acquiring partners、消費者与信をひとつの retail finance funnel につなぐ。issuer / acquirer / processor map は [[payments/japan-card-issuer-acquirer-processor-split]] を参照。
- card / credit line を [[payment-firms/paypay]] に吸収してはいけない。PayPay は wallet / funds-transfer / prepaid operating company であり、PayPay Card は credit-card と lending disclosures を担う。^[verified-2026-06-24]
- PayPay を最も近い ecosystem-finance peer である [[card-issuers/rakuten-card|楽天カード]]、さらに au PAY、d払い、伝統的カード issuer と比較するうえで重要である。scheme economics は [[payments/japan-payment-scheme-economics-matrix]] に整理されている。

## 3. この単独ページが重要な理由

PayPay the wallet と PayPay Card the credit operator では、ライセンス、バランスシート、消費者保護の問いが異なる。このページはその境界を見える状態に保つ。

## 関連

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## 出典

- PayPay Card 会社ページ: https://www.paypay-card.co.jp/company/
- METI 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI クレジットカード番号等取扱契約締結事業者登録簿 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf

---
title: "payment-firms — Japanese payment-service operator index"
aliases:
  - "payment-firms index"
  - "Japan payment firms index"
  - "資金移動業 / PSP / code-payment operator index"
  - "決済事業者 index"
domain: payment-firms
created: 2026-06-04
last_updated: 2026-06-04
last_tended: 2026-06-04
review_by: 2027-06-04
confidence: likely
tags: [payment-firms, index, JapanFG]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/common/shinsei/dendai/dentori.html"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://paymentsjapan.or.jp/publications/code-payments-20260330/"
  - "https://jvcea.or.jp/"
---

# payment-firms — Japanese payment-service operator index

## Scope

`payment-firms/` contains **53 entity entries** (excluding this INDEX, 54 total) for **Japanese payment-service operating companies** — the regulated and operating-company layer split out of the former [[JapanFG/INDEX|JapanFG]] umbrella. The domain covers:

- **資金移動業 (funds-transfer operators)** — FSA-registered remittance / wallet companies under the Payment Services Act (資金決済法).
- **PSP / acquirers / payment gateways** — merchant-acquiring and payment-gateway operators (決済代行).
- **Code-payment & wallet operators** — QR / barcode code-payment (コード決済) and stored-value wallet services.
- **前払式支払手段 (prepaid / e-money issuers)** — prepaid-instrument and electronic-money operators.
- **International card-brand / scheme entities** — Japanese branches / subsidiaries of global 3-party and 4-party card schemes.
- **BNPL / 後払い (atobarai)** — installment / deferred-payment and B2B working-capital operators.
- **Crypto-asset exchanges & stablecoin / tokenization infrastructure** — JVCEA-member 暗号資産交換業者 and electronic-payment-instrument (EPI) / 信託型 stablecoin platforms.
- **Cross-border remittance & FX operators** — international money-transfer and foreign-exchange operators.
- **Payment-adjacent fintech / group-FG anchors** — PFM / accounting SaaS, robo-advisory, white-label issuing, and the payment-led financial-group holding companies that own the operators above.

These are **operating companies and regulated entities**, not thematic concepts. Member entity files live flat under `payment-firms/`; this INDEX is the navigation surface.

## Disambiguation

- **Thematic payment concepts** (cashless landscape, interchange / merchant-fee stack, funds-transfer-vs-prepaid boundary, code-payment competitive map, card issuer / acquirer / processor split, regulation) → [[payments/INDEX|payments]]. That domain is the source of truth for *concepts and regulatory structure*; this domain is the source of truth for *who the operating companies are*.
- **Card issuers / 信販 (credit-credit card-credit operators)** — JCB, 三井住友カード, 楽天カード, セゾン, ニコス, イオン金融 etc. → [[card-issuers/jcb|card-issuers (JCB etc.)]]. Note: the international **card-brand / scheme** entities (Visa / Mastercard / JCB International / Amex / Diners / UnionPay Japan presences) live *here* in `payment-firms/`; the domestic *issuing* / card-credit companies live in `card-issuers/`.
- **Leasing / auto-finance / non-bank corporate finance** → [[leasing-firms/orix-corp|leasing-firms (ORIX etc.)]].
- **Umbrella namespace** for the full pre-split entity set (and insurance / securities / trust / regional FG operators) → [[JapanFG/INDEX|JapanFG]].

## Start here

- [[payment-firms/paypay|PayPay]]
- [[payment-firms/merpay|メルペイ (Merpay)]]
- [[payment-firms/sb-payment-service|SB Payment Service]]
- [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]
- [[payment-firms/paidy|ペイディ (Paidy)]]
- [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]
- [[payment-firms/bitflyer|bitFlyer]]
- [[payment-firms/bnpl-landscape|Japan BNPL landscape]]

## Code-payment & wallet operators

- [[payment-firms/paypay|PayPay (PayPay株式会社)]]
- [[payment-firms/merpay|メルペイ (Merpay)]]
- [[payment-firms/au-payment|auペイメント (au Payment)]]
- [[payment-firms/recruit-mufg-business|リクルートMUFGビジネス]]
- [[payment-firms/kyash|Kyash]]
- [[payment-firms/pring|pring]]
- [[payment-firms/smartbank|スマートバンク (SmartBank)]]
- [[payment-firms/famima-digital-one|ファミマデジタルワン (FamiMa Digital One)]]
- [[payment-firms/netstars|ネットスターズ (code-payment PSP)]]

## Acquirers / PSP / payment gateway

- [[payment-firms/sb-payment-service|SB Payment Service]]
- [[payment-firms/dock-financial|SBペイメントサービス系 / SoftBank card-financial arm]]
- [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]
- [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]]
- [[payment-firms/dg-financial-technology|DGフィナンシャルテクノロジー (DGFT)]]
- [[payment-firms/airwallex-japan|Airwallex Japan]]

## International card-brand / scheme operators

- [[payment-firms/visa-worldwide-japan|ビザ・ワールドワイド・ジャパン (Visa Worldwide Japan)]]
- [[payment-firms/mastercard-japan|マスターカードジャパン (Mastercard Japan)]]
- [[payment-firms/jcb-international|ジェーシービー・インターナショナル (JCB International)]]
- [[payment-firms/american-express-international-japan|American Express International Japan]]
- [[payment-firms/diners-club-japan|ダイナースクラブ ジャパン (Diners Club Japan)]]
- [[payment-firms/unionpay-international-japan|銀聯インターナショナル日本支社 (UnionPay International Japan)]]

## Prepaid / e-money / travel-finance wallet

- [[payment-firms/rakuten-edy|楽天Edy]]
- [[payment-firms/jal-payment-port|JALペイメント・ポート]]
- [[payment-firms/seven-payment-service|セブン・ペイメントサービス]]
- [[payment-firms/infcurion|インフキュリオン (Infcurion, white-label issuing)]]

## BNPL / 後払い (atobarai)

- [[payment-firms/bnpl-landscape|Japan BNPL landscape]]
- [[payment-firms/paidy|株式会社ペイディ (Paidy)]]
- [[payment-firms/atone|atone (アトネ)]]
- [[payment-firms/net-protections-hd|ネットプロテクションズHD (Net Protections HD)]]
- [[payment-firms/kuroneko-atobarai|クロネコ代金後払いサービス (Kuroneko Atobarai)]]
- [[payment-firms/gmo-postpay|GMO後払い (GMO Postpay)]]
- [[payment-firms/olta|OLTA (オルタ, B2B factoring / working capital)]]

## Crypto-asset exchanges & stablecoin / tokenization

- [[payment-firms/bitflyer|bitFlyer]]
- [[payment-firms/bittrade|ビットトレード (BitTrade)]]
- [[payment-firms/gmo-coin|GMO コイン (GMO Coin)]]
- [[payment-firms/jpyc|JPYC株式会社 (stablecoin / EPI)]]
- [[payment-firms/progmat|株式会社Progmat (信託型 stablecoin / tokenization platform)]]

## Cross-border remittance & FX

- [[payment-firms/sbi-remit|SBIレミット]]
- [[payment-firms/western-union-japan|ウエスタンユニオンジャパン (Western Union Japan)]]
- [[payment-firms/wise-payments-japan|Wise Payments Japan]]
- [[payment-firms/travelex-japan|トラベレックスジャパン (Travelex Japan)]]
- [[payment-firms/payoneer-japan|Payoneer Japan]]
- [[payment-firms/revolut-technologies-japan|Revolut Technologies Japan]]
- [[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]]

## Payment-adjacent fintech & group-FG anchors

- [[payment-firms/mercari-hd|メルカリ HD（株式会社メルカリ）]]
- [[payment-firms/rakuten-fg|楽天グループ金融事業 (Rakuten FG)]]
- [[payment-firms/gmo-financial-hd|GMO フィナンシャルホールディングス (GMO FHD)]]
- [[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行]]
- [[payment-firms/ibank-marketing|iBank マーケティング (iBank Marketing)]]
- [[payment-firms/freee|freee 株式会社]]
- [[payment-firms/money-forward|株式会社マネーフォワード (Money Forward)]]
- [[payment-firms/zaim|Zaim (ザイム)]]
- [[payment-firms/wealthnavi|ウェルスナビ株式会社 (WealthNavi)]]

## Cross-domain bridges

- [[payments/INDEX|payments]] — thematic payment concepts, cashless landscape, interchange / merchant-fee stack, code-payment competitive map, and regulatory structure (concepts source of truth).
- [[card-issuers/jcb|card-issuers]] — domestic card-credit / 信販 issuing companies (JCB, 三井住友カード, 楽天カード, セゾン, ニコス, イオン金融).
- [[fintech/INDEX|fintech]] — stablecoin regulatory landscape, embedded-finance, and broader fintech infrastructure context.
- [[leasing-firms/orix-corp|leasing-firms]] — leasing / auto-finance / non-bank corporate finance operators.
- [[JapanFG/INDEX|JapanFG]] — umbrella namespace for the full pre-split entity set across all financial business types.
- [[INDEX|FinWiki root]] — top-level domain map.

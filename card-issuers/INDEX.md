---
title: "card-issuers — Japanese credit-card / charge-card issuer index"
aliases:
  - "card-issuers index"
  - "card issuer index"
  - "信販・カード会社 index"
domain: card-issuers
created: 2026-06-04
last_updated: 2026-06-04
last_tended: 2026-06-04
review_by: 2027-06-04
confidence: likely
tags: [card-issuers, JapanFG, index, credit-card, installment-credit]
status: active
sources:
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf"
  - "https://www.j-credit.or.jp/"
  - "https://www.global.jcb/ja/about-us/"
  - "https://www.smbc-card.com/company/index.jsp"
  - "https://www.cr.mufg.jp/corporate/company/overview/index.html"
---

# card-issuers — Japanese credit-card / charge-card issuer index

## Scope

`card-issuers/` covers **Japanese credit-card and charge-card issuers, installment-credit (信販) companies, card acquirers, and affinity-card operators** — the operating companies that issue cards, run shopping-credit / installment lanes, and contract merchants under the Installment Sales Act (割賦販売法). This domain was split out of the former `JapanFG/` umbrella so that issuer / acquirer / processor economics can be read as one coherent surface rather than scattered across bank, retail, and transit parent pages.

It contains **23 entries** (excluding this INDEX). Membership spans the international brand [[card-issuers/jcb|JCB]], megabank-affiliated issuers ([[card-issuers/smbc-card|三井住友カード]], [[card-issuers/mufg-nicos|三菱UFJニコス]]), the major independent 信販 cluster ([[card-issuers/credit-saison|クレディセゾン]], [[card-issuers/orico|オリコ]], [[card-issuers/jaccs|ジャックス]]), retail- and ecosystem-affinity cards, transit / airline affinity cards, manufacturer captive finance, a regional-bank card subsidiary, and the governing Installment Sales Act reference.

## Disambiguation

Pick the right surface before landing here:

- **Thematic card / interchange / acquiring concepts** (scheme economics, issuer-acquirer-processor split, cashless landscape) → [[payments/INDEX|payments]]. Key cross-reads: [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]], [[payments/japan-payment-scheme-economics-matrix|scheme economics matrix]], [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card-operator registry]].
- **Payment-service firms** (code-payment wallets, PSPs, BNPL, acquirers-as-firms) → the `payment-firms/` domain, e.g. [[payment-firms/paidy|Paidy]] and [[payment-firms/bnpl-landscape|BNPL landscape]].
- **Consumer lenders** (unsecured cash lending under the Money Lending Business Act) → the `consumer-finance/` domain, e.g. [[consumer-finance/acom|アコム]] and [[consumer-finance/aiful|アイフル]].
- **The former umbrella / namespace map** → [[JapanFG/INDEX|JapanFG]].

A card issuer that also runs a lending book (e.g. [[card-issuers/life-card|Life Card]] inside AIFUL, [[card-issuers/aplus|APLUS]] inside SBI Shinsei) keeps its **card / installment** operating page here; the **lending parent** lives in `consumer-finance/`.

## Start here

- [[card-issuers/jcb|JCB]] — Japan's only international card brand (issuer / acquirer / brand-licence triad)
- [[card-issuers/smbc-card|三井住友カード]] — SMFG card / acquiring / Olive hub
- [[card-issuers/credit-saison|クレディセゾン]] — leading independent issuer (永久不滅ポイント / Amex licence)
- [[card-issuers/orico|オリコ]] — domestic auto-loan No.1 信販
- [[card-issuers/rakuten-card|楽天カード]] — ecosystem-finance issuer, top-tier issuance volume
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]] — the governing credit / acquiring statute

## Bank- and financial-group-affiliated issuers

Card operating companies whose parent is a megabank, a bank-owned consortium, or where a bank holds the controlling / equity-method stake.

- [[card-issuers/jcb|JCB (株式会社ジェーシービー)]] — non-listed, MUFG / SMFG bank-consortium ownership
- [[card-issuers/smbc-card|三井住友カード (SMCC)]] — SMFG
- [[card-issuers/mufg-nicos|三菱UFJニコス (Mitsubishi UFJ NICOS)]] — MUFG
- [[card-issuers/jaccs|株式会社ジャックス (Jaccs)]] — MUFG equity-method
- [[card-issuers/shizugin-card|しずぎんカード (Shizugin Card)]] — Shizuoka FG regional-bank subsidiary

## Independent installment-credit (信販) issuers

The large shinpan / consumer-credit operators — shopping credit, auto loans, cards, and card loans — that compete across issuer and acquirer lanes.

- [[card-issuers/credit-saison|クレディセゾン (Credit Saison)]] — Mizuho-adjacent, PARCO / Amex / Saison投信
- [[card-issuers/orico|株式会社オリエントコーポレーション (Orico)]] — Mizuho equity-method / Itochu-linked, auto-loan No.1
- [[card-issuers/aplus|アプラス (APLUS)]] — SBI Shinsei group shopping-credit operator
- [[card-issuers/life-card|ライフカード (Life Card)]] — AIFUL group card / prepaid arm
- [[card-issuers/pocket-card|ポケットカード (Pocket Card)]] — P-one / co-brand specialist

## Retail- and ecosystem-affinity issuers

Cards whose acquisition channel is a retailer, mall, EC platform, or code-payment ecosystem rather than a deposit base.

- [[card-issuers/aeon-financial-service|イオンフィナンシャルサービス (AEON Financial Service)]] — AEON group finance platform
- [[card-issuers/aeon-bank|イオン銀行 / イオンフィナンシャルサービス (Aeon Bank / AFS)]] — distribution-bank + card + Asia consumer finance
- [[card-issuers/epos-card|エポスカード (EPOS Card)]] — Marui group, tenant / lifestyle finance
- [[card-issuers/seven-card-service|セブン・カードサービス (Seven Card Service)]] — Seven & i / nanaco
- [[card-issuers/ucs-card|UCSカード (UCS)]] — PPIH / Don Quijote / majica
- [[card-issuers/rakuten-card|楽天カード (Rakuten Card)]] — Rakuten ecosystem-finance touchpoint
- [[card-issuers/paypay-card|PayPayカード (PayPay Card)]] — PayPay FG / SoftBank-LY code-payment credit

## Transit / airline affinity issuers

Mobility-economy cards that bind fares, IC stored value, and miles to a credit line.

- [[card-issuers/jr-east-financial|JR東日本 金融グループ (JR-East Financial)]] — View Card + JRE BANK + Suica Pay group anchor
- [[card-issuers/view-card|株式会社ビューカード (Viewcard)]] — Suica-integrated issuer (holds a bank-agency licence)
- [[card-issuers/jal-card|株式会社JALカード (JAL Card)]] — airline miles affinity card, 5-brand issuance

## Manufacturer captive / auto finance

- [[card-issuers/toyota-finance|トヨタファイナンス (Toyota Finance)]] — Toyota domestic sales-finance + TS CUBIC card

## Adjacent corporate-finance anchor

- [[card-issuers/aeon-financial-service-detail|電通グループ金融子会社 (Dentsu Group Financial Arm)]] — captive-finance / CVC anchor sharing the captive-finance peer cluster (note: this slot holds the Dentsu financial arm, not an AEON page)

## Regulatory reference

- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正 (Installment Sales Act 2020 amendment)]] — 包括 / 個別信用購入あっせん, 少額登録制度, acquiring / PSP boundary, card-number management

## Cross-domain bridges

- [[payments/INDEX|payments]] — thematic card / acquiring / scheme-economics layer (issuer-acquirer-processor split, cashless landscape, scheme economics matrix)
- [[payment-firms/paidy|payment-firms → Paidy]] / [[payment-firms/bnpl-landscape|BNPL landscape]] — wallet / PSP / BNPL operating companies (no domain INDEX yet; land on a member)
- [[consumer-finance/acom|consumer-finance → アコム]] / [[consumer-finance/aiful|アイフル]] — unsecured consumer lenders (no domain INDEX yet; land on a member)
- [[loyalty/INDEX|loyalty]] — points / rewards / stored-value ecosystem that drives card economics
- [[JapanFG/INDEX|JapanFG]] — former umbrella namespace and operating-company map
- [[INDEX|root index]] — finwiki top-level map

## Backlog

- A `payment-firms/INDEX` and a `consumer-finance/INDEX` do not yet exist; once authored, the bridge links above should be upgraded from member pages to domain landing pages.
- `aeon-financial-service-detail` occupies an AEON-named slot but documents the Dentsu Group financial arm; a future rename / re-slug would tidy the namespace.

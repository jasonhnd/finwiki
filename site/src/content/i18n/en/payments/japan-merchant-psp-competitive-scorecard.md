---
source: payments/japan-merchant-psp-competitive-scorecard
source_hash: 62f3e83568013e98
lang: en
status: machine
fidelity: ok
title: "Japan merchant PSP competitive scorecard"
translated_at: 2026-06-01T03:31:12.324Z
---

# Japan merchant PSP competitive scorecard

## TL;DR

Japan's merchant PSP (Payment Service Provider) market is more **fragmented and more layered** than the consumer-visible cashless landscape suggests. The market splits along at least four dimensions — (a) traditional card-gateway PSPs ([[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], [[payment-firms/sb-payment-service|SB Payment Service]], [[payment-firms/dg-financial-technology|DG Financial Technology]], [[payment-firms/gmo-epsilon|GMO Epsilon]]), (b) QR aggregator PSPs ([[payment-firms/netstars|Netstars]]), (c) global checkout PSPs (Stripe Japan, PayPal Japan, Square Japan, Komoju), and (d) wallet-platform acquirers (Amazon Pay, Rakuten Payment, Recruit Card / 受取代行) — each with different merchant fee economics, settlement speed, vertical specialization, and M&A history. This scorecard sets twelve major PSPs side-by-side along the axes that matter to a merchant choosing a gateway and to a sector reader trying to understand who actually controls EC payment flows in Japan. It is the merchant-side companion to [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] and the operator-side companion to [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]].

## Wiki route

This sits under [[payments/INDEX|payments index]] as the merchant-side PSP reference. Read it with [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] for the technical-stack view, [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] for the role-separation framework, [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] for the settlement-cycle and merchant-exposure view, [[payments/account-to-account-payment-japan|account-to-account payment in Japan]] for the A2A line that PSPs increasingly carry, [[payments/merchant-bank-pay-account-direct-acquiring|merchant Bank Pay account direct-acquiring]] for the bank-side direct route, [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the cross-scheme economics this entry deliberately complements, and the operator anchors [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], [[payment-firms/gmo-epsilon|GMO Epsilon]], [[payment-firms/sb-payment-service|SB Payment Service]], [[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]], [[payment-firms/netstars|Netstars]], [[payment-firms/freee|freee]], [[payment-firms/money-forward|Money Forward]], [[payment-firms/famima-digital-one|FamiMa Digital One]], and [[payment-firms/seven-payment-service|Seven Payment Service]].

## Why this matrix matters

A merchant choosing a PSP — or a sector reader trying to read the Japan EC stack — typically misreads three structural points without a side-by-side. First, **"PSP" is not one product**: a card-acceptance gateway is structurally different from a QR aggregator, which is structurally different from a global checkout product like Stripe. Second, **the acquiring role**: some PSPs are pure technical processors that pass through to an external acquirer, others are themselves merchant-contracting operators (acquirer) under the Installment Sales Act, and the merchant's risk exposure differs accordingly (see [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]). Third, **settlement speed and fee model**: a small-merchant on a Square or PayPay merchant plan gets a fundamentally different settlement experience than a large enterprise on a GMO-PG or SB Payment Service contract. This scorecard surfaces all three.

### GMO Payment Gateway (GMO-PG, TSE PRIME 3769)

[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] is Japan's largest pure-play PSP by merchant count and processed value. Founded 1995-03-25 as Card Commerce Co., Ltd., renamed GMO-PG in 2000, listed on TSE Mothers in 2005, moved to TSE First Section (now PRIME) in 2008. Consolidated subsidiary of [[business/gmo-internet-group|GMO Internet Group]]. EC merchant base reportedly 30 ten thousand+ stores. Multi-product line: card-gateway, code-payment, convenience-store payment, bank-transfer collection, BtoB invoice / deferred-payment, Pay.JP developer SDK (the Stripe-style competitor), trans-Asia gateway via NextPay (Vietnam), ECPay (Taiwan). Strategic relationship with [[card-issuers/smbc-card|SMBC Card]] via SMBC GMO PAYMENT JV. Trans-action-lending sideline based on merchant payment data.

GMO-PG's distinctive position: **multi-acquirer relationship-broker** — the PSP routes merchants to multiple card acquirers per brand, owns its own merchant-contracting operator registration on the METI creditCard番号等取扱契約締結事業者 list, and competes for high-volume merchant accounts where settlement reliability and integration depth matter more than headline fee rate.

### GMO Epsilon (subsidiary of GMO-PG)

[[payment-firms/gmo-epsilon|GMO Epsilon]] is GMO Payment Gateway's small-and-medium-merchant focused PSP, structured as a separate brand to address a different merchant segment than GMO-PG's enterprise / mid-market book. The two operate as sister entities within the [[business/gmo-internet-group|GMO Internet Group]] payments umbrella, with GMO Epsilon handling the higher-volume / smaller-ticket merchant accounts (smaller EC stores, online services, content-charging merchants) and GMO-PG handling the larger enterprise contracts.

Distinctive position: **two-brand small-merchant + enterprise split within one group** — the GMO Internet Group runs both ends of the merchant-size spectrum via separate-brand PSPs, which is structurally different from Stripe (one product for all sizes) or Square (one product for small-and-micro).

### SB Payment Service (SBPS, SoftBank Group)

[[payment-firms/sb-payment-service|SB Payment Service / SBPaymentService]] is the SoftBank Group's PSP, deeply integrated with [[payment-firms/paypay|PayPay]] for code-payment processing and with Yahoo! Japan Shopping for EC-merchant acceptance. SBPS handles the SoftBank-group EC merchant base and external EC merchant base that wants integrated card + code + PayPay acceptance from a single PSP. It is a merchant-contracting operator on the METI credit-card-number handling contract-operator list and also operates a comprehensive credit-purchase-intermediation line.

Distinctive position: **wallet-anchored PSP** — SBPS's PayPay integration gives it a structural advantage for merchants that want code-payment as a primary channel, while its SoftBank Group anchoring gives it relationship-strength with Yahoo! Japan Shopping / ZOZOTOWN / LINE-attached EC properties.

### DG Financial Technology / DGFT (Digital Garage group)

[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]] is the payment subsidiary of Digital Garage (TSE PRIME 4819), serving high-end EC and enterprise merchants with an emphasis on cross-border acceptance, multi-currency settlement, and integration with Square (Digital Garage was Square's Japan partner before Square established its own Japan entity). DGFT also acts as an aggregator for Veritrans (a long-standing PSP brand acquired by Digital Garage).

Distinctive position: **enterprise + cross-border PSP** — DGFT differentiates on multi-currency handling, advanced fraud-screening, and the technology-partner ecosystem (DG holds investments in many fintech-adjacent startups), targeting merchants where international card acceptance and acceptance-rate optimization justify a premium fee structure over commodity PSPs.

### Netstars (QR-aggregator pure-play)

[[payment-firms/netstars|Netstars]] is the leading **multi-wallet QR aggregator** in Japan, operating the StarPay merchant acceptance product that allows one terminal / one QR code to accept multiple code-payment wallets (PayPay, d Barai, au PAY, Rakuten Pay, Merpay, WeChat Pay, Alipay+, AppPay, and others). Targets merchant categories where multi-wallet acceptance via a single integration is structurally more efficient than signing each wallet contract directly — convenience stores, drugstores, restaurants, retail chains, and inbound-tourist-heavy merchants.

Distinctive position: **wallet-agnostic gateway** — unlike GMO-PG or SBPS (which lean card-first with code as an add-on), Netstars is purpose-built for the code-payment-first merchant and is the natural counterparty for cross-wallet acceptance demand. The structural risk is that wallet operators may push their own direct-merchant economics that bypass aggregators.

### Square Japan (Block Inc. subsidiary)

Square Japan is the Japanese arm of Block, Inc. (formerly Square, Inc.). Targets small / micro merchants with a card-reader + mPOS app + integrated payment-services package, identical in shape to its US product. Settlement speed differentiates Square: next-business-day settlement (and faster with Mizuho Bank / Sumitomo Mitsui Bank account holders) is the headline value proposition versus the T+M traditional merchant batch. Card brand acceptance covers Visa, Mastercard, JCB, AMEX, Diners, Discover, plus QR code payments (PayPay, etc.) and Suica / IC-card via the Square Reader.

Distinctive position: **micro-merchant + frictionless onboarding** — Square's value proposition is "open an account on Saturday, accept payments by Monday" with no monthly fee and no minimum-volume requirement. Competes with Stripe (online-focused) by being more retail-POS-friendly, and with PayPay (free zero-fee promo) by offering credit-card brand acceptance which PayPay does not.

### Stripe Japan

Stripe Japan is the Japanese arm of Stripe, Inc. Targets developers, startups, and digital-first merchants with API-first payment integration, supporting card brands (Visa, Mastercard, JCB, AMEX), code payments (PayPay, Konbini Payment, Bank Transfer, Apple Pay, Google Pay), and recurring billing / subscription primitives. Stripe Japan does not operate its own physical POS hardware; the product is entirely online / app-embedded.

Distinctive position: **developer-API-first** — Stripe's documentation depth, API ergonomics, and SDK quality make it the default choice for technical merchants building custom checkout, despite higher headline fee rates than negotiated rates from GMO-PG or SBPS for similar volume. Pay.JP (GMO-PG's developer-SDK product) is the principal Japan-native competitor on this axis.

### PayPal Japan

PayPal Japan (PayPal Pte. Ltd. Japan branch, [[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]]) operates the PayPal checkout product for Japanese merchants and also owns [[payment-firms/paidy|Paidy]] (acquired 2021-09 for ~USD 2.7bn) which gives PayPal Japan a footprint in deferred-payment / BNPL adjacent to its core checkout business. PayPal's merchant proposition emphasizes cross-border acceptance, buyer-protection, and integration with global checkout flows.

Distinctive position: **cross-border-first** — PayPal's value proposition leans on its global acceptance footprint and is strongest for merchants selling internationally from Japan or selling to inbound foreign buyers. Domestic-first merchants have less PayPal preference than they did pre-2015 because domestic alternatives (GMO-PG, SBPS, Stripe) have matured. The Paidy ownership adds a deferred-payment lane that complements PayPal-checkout's primarily card / wallet base.

### Komoju (Degica, gaming / digital-content focused)

Komoju (Co., Ltd. Degica) is a Tokyo-headquartered PSP focused on **digital content, gaming, software, and inbound cross-border EC** merchants. It supports a wide payment-method mix including international card brands, Konbini Payment, Pay-Easy (Bank Transfer), code payments, and deferred payment / Atobarai (Komoju Atobarai is a Komoju own-brand BNPL product). Komoju Atobarai is a individual credit-purchase-intermediation registration on the METI list.

Distinctive position: **vertical-specialized PSP** — Komoju's gaming / digital-content focus gives it expertise in micro-transaction billing, virtual-currency settlement, and the cross-border buyer mix typical of gaming merchants. Steam / Sony PlayStation / various gaming publishers are illustrative merchant segments.

### Amazon Pay

Amazon Pay (Amazon Japan G.K. / Amazon Web Services Japan) is the Amazon-account-as-checkout product, allowing third-party merchants to accept payments via the buyer's stored Amazon account (card-on-file, address-on-file). Targets EC merchants who want to reduce checkout friction by leveraging Amazon's enrolled buyer base.

Distinctive position: **account-anchor PSP** — Amazon Pay's value is the **buyer-side stored account + Amazon Prime adjacency**, not gateway efficiency. Merchant fee is competitive with card-gateway PSPs, but the strategic value to the merchant is buyer-conversion uplift from frictionless checkout rather than fee-rate efficiency.

### Rakuten Payment / 楽天Payment

Rakuten Payment Inc. operates the [[payment-firms/rakuten-fg|Rakuten FG]] payments stack for merchants — Rakuten Pay (code payment), Rakuten Card acceptance, Rakuten Bank settlement, R-Card linkage. Closely integrated with [[card-issuers/rakuten-card|Rakuten Card]] (card issuer) and the Rakuten Point loyalty layer. Targets merchants that benefit from Rakuten ecosystem buyer acquisition (Rakuten Members enrollment, Rakuten Point earn / redeem).

Distinctive position: **ecosystem-anchored PSP** — like SB Payment Service for SoftBank or Amazon Pay for Amazon, Rakuten Payment's structural advantage is the captive buyer base of the Rakuten ecosystem. Merchants outside the Rakuten ecosystem can still use Rakuten Pay but lose the ecosystem-uplift component of the value proposition.

### Recruit Card / Recruit MUFG Business

[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] is the JV between Recruit Holdings and [[megabanks/mufg|MUFG]] that operates the Recruit Card product and related merchant-services offerings, including Air PAY (a Recruit-operated mPOS / QR acceptance product) and Air Regi (POS integration). Air PAY is a meaningful card / code acceptance product in the small-merchant / restaurant / personal-service merchant segment in Japan.

Distinctive position: **Recruit ecosystem + mPOS** — Recruit's HotPepper Beauty / HotPepper Gourmet / Jalan / SUUMO booking-and-discovery products give Air PAY a merchant-acquisition channel that no other PSP has. The combination of bookings flow + payment acceptance + POS integration is structurally hard to replicate.

## Big comparison matrix table

| PSP | Parent / group | Listing | Founded | Primary merchant base | Reported merchant count | Card brand support | Code payment support | A2A / Bank Pay support | Konbini / bank-transfer | Suica / IC-prepaid | BNPL / deferred-payment integration | Settlement speed (typical) | Fee model (small merchant baseline) | Vertical specialization | Acquirer role (own/external) | M&A / parent history |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/gmo-payment-gateway\|GMO-PG]]** | [[business/gmo-internet-group\|GMO Internet Group]] | TSE PRIME 3769 | 1995 (as CardCommerce) | Enterprise + mid-market EC | ~300,000+ stores | Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d Barai / au PAY / Rakuten Pay via gateway | Bank Pay / bank transfer | Yes (multi-konbini) | Limited | In-house BtoB deferred payment + third-party BNPL | Configurable T+5 to T+M | Negotiated by volume; high-volume rates among lowest | Multi-vertical; enterprise | Own merchant-contracting + multi-acquirer routing | GMO group internal; SMBC GMO PAYMENT JV with [[card-issuers/smbc-card\|SMBC Card]] |
| **[[payment-firms/gmo-epsilon\|GMO Epsilon]]** | [[business/gmo-internet-group\|GMO Internet Group]] | Subsidiary | 2000s era | Small-and-medium EC, content / subscription | Tens of thousands | Visa / MC / JCB / AMEX | PayPay / d Barai / au PAY etc. | Bank Pay | Yes | Limited | third-party deferred-payment integrations | T+M to T+5 | Lower minimum; higher headline rate than GMO-PG enterprise | Small-merchant EC | Pass-through to GMO-PG infrastructure / external acquirer | GMO Internet Group internal positioning |
| **[[payment-firms/sb-payment-service\|SB Payment Service]]** | SoftBank Group + PayPay FG | Subsidiary | 2004 (Yahoo! Wallet predecessor) | Yahoo! Japan Shopping, ZOZOTOWN, LINE-EC, external | Hundreds of thousands | Visa / MC / JCB / AMEX | PayPay (deep integration) + Rakuten Pay / au PAY / d Barai | Bank Pay | Yes | Limited | PayPay deferred-payment / BNPL integration | T+M traditional; faster on PayPay-anchored | Negotiated; PayPay-merchant favorable rates | SoftBank ecosystem + LINE-tied EC | Own merchant-contracting | Yahoo! Wallet predecessor; restructured under PayPay FG |
| **[[payment-firms/dg-financial-technology\|DG Financial Technology]]** | Digital Garage (TSE PRIME 4819) | Subsidiary | Veritrans heritage | Enterprise + cross-border EC | Tens of thousands | Visa / MC / JCB / AMEX / Diners / UnionPay | Yes (multi-wallet) | Bank Pay | Yes | Limited | third-party deferred-payment integrations | Configurable | Premium for enterprise cross-border | Enterprise cross-border | Own merchant-contracting | Digital Garage acquired Veritrans; was Square Japan-partner pre-Square direct entry |
| **[[payment-firms/netstars\|Netstars]]** | Independent (Recruit Strategic Partners / others equity-back) | Non-listed | 2009 | Multi-wallet merchant acceptance | Hundreds of thousands of merchant locations (multi-wallet) | Limited card focus | All major code wallets + Alipay+ / WeChat Pay | Limited | Limited | Limited | Limited | T+M typical | Per-transaction multi-wallet fee | Code-first multi-wallet aggregation | Pass-through aggregator | Independent QR-pioneer; Recruit-adjacent investor base |
| **Square Japan** | Block, Inc. (US parent) | Subsidiary | 2013 Japan entry | Micro / small merchant retail | Hundreds of thousands | Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d Barai via Square Reader and code-accept | Limited | Limited | Suica / IC-card via Square Reader | Limited | Next-business-day (Mizuho / SMBC partner) | 3.25-3.75% MDR; no monthly fee | Micro-merchant retail / restaurant | Own merchant-contracting | Block (US) parent; pre-Square Japan via DGFT-Square partnership |
| **Stripe Japan** | Stripe, Inc. (US parent) | Subsidiary | 2016 Japan entry | Developer / startup / digital | Tens of thousands public | Visa / MC / JCB / AMEX | PayPay / Konbini / Bank Transfer / Apple Pay / Google Pay | Limited via Bank Transfer | Konbini Payment, Bank Transfer | Limited | Limited (custom merchant-side integration) | Configurable | 3.6% baseline; volume tiers | Developer-API-first / digital | Own merchant-contracting | Stripe (US) parent; partnership with mizuho-fg / SMBC for settlement |
| **[[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]** | PayPal Holdings (US parent) | Subsidiary | 2000s era Japan | Cross-border EC; SaaS; international merchant | Hundreds of thousands | Visa / MC / JCB / AMEX (via PayPal wallet linkage) | PayPal wallet itself | Limited | Limited | Limited | Paidy deferred-payment integration | T+M; PayPal-wallet immediate to PayPal balance | 3.6% + JPY 40 / tx baseline (varies) | Cross-border / international EC | Own merchant-contracting | Paidy acquired 2021-09 (~USD 2.7bn) |
| **Komoju (Degica)** | Degica (independent + investor-backed) | Non-listed | 2013 | Gaming / digital content / inbound EC | Tens of thousands | Visa / MC / JCB / AMEX | PayPay / d Barai / Rakuten Pay / au PAY | Bank Transfer | Konbini Payment, Pay-Easy | Limited | Komoju Atobarai (own-brand BNPL) | Configurable | Per-method pricing | Gaming / digital content / cross-border | Own merchant-contracting + own BNPL | Independent; investor-backed |
| **Amazon Pay** | Amazon Japan / Amazon US parent | Subsidiary | 2007 Japan launch | EC merchants (Amazon-buyer-account leveragers) | Tens of thousands | Card-on-file via buyer Amazon account | Limited | Limited | Limited | Limited | Limited | Configurable | Comparable to card-gateway rates | EC checkout-friction reduction | Pass-through with buyer-account anchor | Amazon US parent strategy |
| **Rakuten Payment** | [[payment-firms/rakuten-fg\|Rakuten FG]] | Subsidiary | Rakuten Pay 2016 launch | Rakuten-ecosystem merchant + external | Hundreds of thousands | Rakuten Card direct + Visa / MC / JCB / AMEX | Rakuten Pay anchored | Limited | Limited | Limited | Rakuten group BNPL adjacent | T+M; Rakuten ecosystem favored | Negotiated; Rakuten-ecosystem favorable | Rakuten ecosystem merchant | Own + Rakuten Card linkage | Rakuten Group internal restructuring |
| **[[payment-firms/recruit-mufg-business\|Recruit Card / Air PAY]]** | Recruit Holdings + [[megabanks/mufg\|MUFG]] JV | Subsidiary | Air PAY 2012 launch | Small merchant + restaurant + personal-service | Hundreds of thousands of Air PAY accounts | Visa / MC / JCB / AMEX / Diners | PayPay / d Barai / au PAY / Rakuten Pay etc. | Limited | Limited | Suica / IC-card via Air PAY Reader | Limited | T+M; Mizuho / SMBC-account next-day options | 3.24-3.74% MDR; no monthly fee | Restaurant + beauty + small-service | Own merchant-contracting | Recruit-MUFG JV established for card / payments |

## Side-axis — GMV processed (rough public reporting indications)

Reported GMV / processed-value figures are not uniformly disclosed across this peer set, so this side-axis is partial. GMO Payment Gateway publishes annual processed-value in IR (in the trillions of yen range, reflecting its enterprise-merchant base). SB Payment Service processed-value is reported within SoftBank Group / PayPay FG consolidated disclosure rather than as a standalone PSP. DGFT processed-value is reported within Digital Garage segment disclosure. Square Japan, Stripe Japan, PayPal Japan, Komoju, Amazon Pay, and Rakuten Payment are not consistently standalone-disclosed at PSP segment level; readers should consult parent company IR for the disclosed component.

| PSP | Processed-value disclosure surface | Order of magnitude (public-source indication) |
|---|---|---|
| **GMO-PG** | Own IR, quarterly | Trillions of yen annual processed value |
| **SB Payment Service** | SoftBank Group / PayPay FG consolidated | Trillions of yen if PayPay code-payment volume aggregated |
| **DGFT** | Digital Garage segment disclosure | Hundreds of billions to low-trillion yen |
| **Netstars** | Limited public; multi-wallet aggregated | Per-wallet processed not aggregated publicly |
| **Square Japan** | Block consolidated | Tens of billions of yen scale (Japan portion) |
| **Stripe Japan** | Not standalone disclosed | Not publicly disclosed |
| **PayPal Japan** | Not standalone disclosed | Not publicly disclosed |
| **Komoju** | Not standalone disclosed | Not publicly disclosed |
| **Amazon Pay** | Not standalone disclosed | Not publicly disclosed (Amazon segment) |
| **Rakuten Payment** | Rakuten Group segment disclosure | Trillions of yen if Rakuten Pay + Rakuten Card aggregated |
| **Recruit / Air PAY** | Recruit Holdings segment disclosure | Hundreds of billions of yen scale |

Readers should treat any specific number as **public-source-cited only** and verify against the most recent IR for the year in question — processed-value figures move materially year-on-year as EC penetration shifts and PSP merchant churn occurs.

## Cross-PSP technical differentiation

| Capability | GMO-PG | GMO Epsilon | SBPS | DGFT | Netstars | Square | Stripe | PayPal | Komoju | Amazon Pay | Rakuten Pay | Recruit / Air PAY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMV 3-DS 2.x compliance (2025-03 mandate) | Yes | Yes | Yes | Yes | N/A (code-first) | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Tokenization (network tokens) | Yes | Yes | Yes | Yes | N/A | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Recurring billing / subscriptions | Yes | Yes | Yes | Yes | Limited | Yes (Subscription) | Yes (Billing) | Yes (Subscriptions) | Yes | Limited | Yes | Limited |
| Apple Pay / Google Pay | Yes | Yes | Yes | Yes | Limited | Yes | Yes | Yes | Yes | Limited | Yes | Yes |
| Multi-currency settlement | Yes (limited) | Limited | Limited | Yes (strength) | Limited | Limited (Japan-only) | Yes | Yes | Yes (cross-border focus) | Limited (Japan-USD) | Limited | Limited |
| Marketplace / split-payment | Yes (custom) | Limited | Yes | Yes | Limited | Yes (some) | Yes (Connect) | Yes (Adaptive) | Yes | Limited | Yes | Limited |
| Custom reconciliation file | Yes | Yes | Yes | Yes | Yes | Limited | Yes | Yes | Yes | Yes | Yes | Yes |
| Inbound-tourist wallet support (Alipay+, WeChat Pay) | Yes (via partner) | Limited | Yes (via partner) | Yes (strength) | Yes (native) | Limited | Limited | Limited | Yes | Limited | Limited | Yes (via partner) |

## Fee economics — small-merchant view

For a 商店街 small merchant deciding which PSP to onboard, the headline fee comparison usually looks like this. Real fees are negotiated per merchant and per MCC.

| PSP | Card MDR baseline (small merchant) | Per-tx fixed | Monthly minimum | Onboarding time | Hardware cost |
|---|---|---|---|---|---|
| **GMO-PG** | Negotiated by volume; typically 2.5-3.5% | Varies | Often required for enterprise | Days to weeks | EC: zero; POS: external |
| **GMO Epsilon** | 3.0-3.6% | Varies | Lower than GMO-PG | Days to a week | EC: zero |
| **SB Payment Service** | Negotiated | Varies | Often required | Days to weeks | EC: zero |
| **DGFT** | Negotiated; premium-tier | Varies | Required for enterprise | Weeks | EC: zero |
| **Netstars** | Per-wallet rate (1.8-3.0% range typical) | Varies | Lower | Days to a week | Printed QR or terminal |
| **Square Japan** | 3.25% Visa/MC; 3.75% JCB/AMEX | None | None | 1 business day after approval | JPY 7,980 (Square Reader) or zero (mPOS via phone) |
| **Stripe Japan** | 3.6% baseline | None | None | 1-2 business days | None (online only) |
| **PayPal Japan** | 3.6% + JPY 40 / tx (variable) | JPY 40 | None | 1-2 business days | None (online only) |
| **Komoju** | Per-method pricing (varies) | Varies | None | 1-2 business days | None (online) |
| **Amazon Pay** | Comparable to card MDR | Varies | None | Days | None (online) |
| **Rakuten Pay** | Negotiated; Rakuten-ecosystem favorable | Varies | Lower | Days to a week | EC: zero |
| **Air PAY** | 3.24% Visa/MC; 3.74% JCB/AMEX | None | None | 1-2 weeks | Air PAY Reader free with subscription / promo |

## M&A and parent-history pattern

The Japanese PSP market has gone through three rough M&A / restructuring eras that this scorecard makes visible:

1. **Pre-2010 — Bank-side card-processor consolidation.** Bank-FG card-processors merged into the current MUFG NICOS / SMBC Card configurations, leaving room for pure-play PSPs to grow.
2. **2010s — Pure-play PSP scaling.** [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] grew via [[business/gmo-internet-group|GMO Internet Group]] umbrella + SMBC GMO PAYMENT JV; [[payment-firms/dg-financial-technology|DGFT]] grew through Digital Garage's Veritrans acquisition; [[payment-firms/sb-payment-service|SB Payment Service]] expanded via SoftBank Group restructuring; Netstars emerged as QR-aggregator pure-play.
3. **2020s — Global checkout entry + ecosystem-anchor consolidation.** Stripe Japan, Square Japan, and PayPal Japan / [[payment-firms/paidy|Paidy]] acquisition (2021-09) established global-checkout-PSP footprints; PayPay FG / SoftBank consolidated wallet-side acceptance under SB Payment Service; Rakuten Payment consolidated Rakuten-side acceptance.

A fourth era is plausibly emerging in the 2024-2026 window around **BNPL integration** (Paidy under PayPal, Komoju Atobarai, etc.) and **A2A acceptance** (merchant-direct Bank Pay) — both of which are still partial and re-shape the PSP economics.

## Boundary cases

- **"Is [[payment-firms/netstars|Netstars]] a PSP or a wallet aggregator?"** Both. Netstars provides the merchant gateway (PSP function) and the wallet-routing aggregation (multi-wallet acceptance). It is not a card-acquirer and is not on the METI creditCard番号等取扱契約締結事業者 list as a primary card-contracting operator, but it routes code-payment transactions through wallet-side contracts.
- **"Is [[payment-firms/freee|freee]] or [[payment-firms/money-forward|Money Forward]] a PSP?"** Not in the classic sense — they are accounting / SaaS platforms that have payment-acceptance features (freee Pay, Money Forward Pay) but route through underlying PSPs (often GMO-PG, GMO Epsilon, or partner-acquirers). They are merchant-side software with payment integration, not PSPs themselves.
- **"Is [[payment-firms/famima-digital-one|FamiMa Digital One]] or [[payment-firms/seven-payment-service|Seven Payment Service]] a PSP?"** They are convenience-store-FG payment operators with payment-acceptance capability for their own retail networks plus broader code-payment / wallet roles, but they are not multi-merchant PSPs in the GMO-PG / SBPS / DGFT sense. They sit closer to [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] than to merchant-gateway PSP.
- **"What about [[payment-firms/jal-payment-port|JAL Payment Port?]]"** It is a [[payment-firms/jal-payment-port|JAL Payment Port]] entity focused on JAL-group payments and merchant-direct settlement for JAL group / mileage program, not a multi-merchant general-PSP.
- **"What about UnionPay International Japan, Visa Worldwide Japan, or Mastercard Japan?"** They are scheme / brand operators, not PSPs. They sit above the PSP layer in the role-stack — see [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] for the role separation.
- **"Where does a merchant acquirer like [[card-issuers/smbc-card|SMBC Card]] (as an acquirer line) fit?"** SMBC Card is an issuer and an acquirer, not a PSP. A merchant's relationship with SMBC Card is typically intermediated by a PSP (often GMO-PG via SMBC GMO PAYMENT JV) rather than a direct merchant-acquirer relationship. SMBC Card's acquirer line shows up in the [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] entry.
- **"How does this matrix relate to [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix?"** That matrix covers card vs code vs A2A vs prepaid at the scheme class level. This matrix decomposes the PSP / merchant-gateway dimension within the merchant-acceptance side of all four scheme classes. The two are orthogonal.

## Recent regulatory pressure on PSPs

| Date | Source | What changed |
|---|---|---|
| 2018 | METI | 改正割賦販売法 strengthened 加盟店調査 obligation — raised onboarding cost for PSPs that hold merchant-contracting operator registration |
| 2020-2021 | METI / J-CSC | Credit-card security guideline 5.0 / 5.1 — PCI DSS expectations, vulnerability-scan obligations, non-retention enforcement |
| 2022-04-08 | JFTC | Credit-card merchant fee report — pressure on PSP-merchant fee transparency |
| 2023-06-01 | METI + JFTC | JCB merchant-fee allocation rate disclosure — affects PSPs routing JCB volume |
| 2024-2025 | METI / J-CSC | Guideline 6.0 / 6.1: **EMV 3-DS mandatory for EC card payments from 2025-03**; non-retention rules tightened; vulnerability-scan obligations expanded — compliance burden falls heavily on EC-PSPs |
| 2025-2026 | METI | Continued pressure for fee disclosure extends from card class toward code-payment and prepaid PSP layers |

The 2025-03 EMV 3-DS mandate is the most consequential change for the EC-PSP segment, since the compliance work falls on the PSP side to integrate 3-DS authentication into checkout flows.

## Cross-references with other matrices

- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: That matrix covers the card / code / A2A / prepaid scheme classes at the operator level. This matrix decomposes the merchant-side gateway / PSP layer across all four scheme classes, since most major PSPs accept multi-scheme payment.
- vs **[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]**: That entry covers the technical stack from POS / EC checkout to issuer settlement. This matrix names specific operators that sit at the gateway / PSP layer of that stack.
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**: That entry establishes the role-separation framework. This matrix populates the PSP / processor column with named operators and shows which of them additionally hold the merchant-contracting operator role.
- vs **[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]**: That entry covers the merchant-side risk profile of relying on PSPs for settlement. This matrix gives the operator-by-operator inventory that risk profile sits on top of.
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]** and **[[payments/japan-bnpl-pay-later-operator-registry-matrix|BNPL operator registry matrix]]**: Those matrices cover the issuer-side and BNPL-operator-side respectively; this matrix is the merchant-gateway-side complement to both.

## PSP-selection decision lens for a merchant

A small or mid-sized merchant in Japan that is selecting a PSP typically faces a four-way decision: card-acceptance footprint, code-payment acceptance footprint, settlement-speed requirement, and integration-complexity tolerance. The matrix supports the following decision-tree shortcut:

| Merchant profile | Best-fit PSP cluster |
|---|---|
| **Micro / individual / casual seller, retail POS** | Square Japan (free reader, next-day settlement) or Air PAY (Recruit, similar economics with HotPepper-channel) |
| **Small-to-medium EC, developer-friendly, digital-first** | Stripe Japan or Komoju (vertical-specialized) or GMO Epsilon |
| **Enterprise EC with multi-acquirer routing and integration depth** | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]] or [[payment-firms/dg-financial-technology\|DGFT]] (cross-border) or [[payment-firms/sb-payment-service\|SB Payment Service]] (PayPay-anchored) |
| **Cross-border EC selling to inbound foreign buyers** | [[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]] or DGFT or Komoju (cross-border specialist) |
| **Code-first multi-wallet acceptance (retail chain, convenience store, drugstore)** | [[payment-firms/netstars\|Netstars]] (multi-wallet aggregator) |
| **Ecosystem-anchored merchant inside Rakuten / Amazon / PayPay / Recruit** | Ecosystem-native PSP first ([[payment-firms/rakuten-fg\|Rakuten Payment]] / Amazon Pay / [[payment-firms/sb-payment-service\|SB Payment Service]] / Recruit), with general-PSP for non-ecosystem volume |
| **High-volume restaurant / personal-service with booking-flow integration** | Recruit / Air PAY (HotPepper Beauty / Gourmet integration) |
| **Gaming / digital content / micro-transaction merchant** | Komoju (vertical specialist) |

The matrix does not produce a single "best" answer — the merchant's specific operational profile, settlement-cycle needs, and integration capability determine which PSP cluster fits, and many merchants run **multiple PSPs** for different volume slices (e.g., GMO-PG for primary card acceptance + Netstars for multi-wallet code + Square for in-person events).

## Related

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/gmo-epsilon]]
- [[payment-firms/sb-payment-service]]
- [[payment-firms/dg-financial-technology]]
- [[payment-firms/netstars]]
- [[payment-firms/freee]]
- [[payment-firms/money-forward]]
- [[payment-firms/famima-digital-one]]
- [[payment-firms/seven-payment-service]]
- [[payment-firms/recruit-mufg-business]]
- [[payment-firms/paypal-pte-ltd-japan]]
- [[payment-firms/paidy]]
- [[payment-firms/rakuten-fg]]
- [[payment-firms/paypay]]
- [[business/gmo-internet-group]]
- [[INDEX|FinWiki index]]

## Sources

- GMO Payment Gateway corporate site and IR: https://corp.gmo-pg.com/ and https://corp.gmo-pg.com/ir/
- GMO Epsilon (Epsilon): https://www.epsilon.jp/
- SB Payment Service (SBPaymentService): https://www.sbpayment.jp/
- DG Financial Technology (DGFT): https://www.dgft.jp/
- Netstars (StarPay): https://netstars.co.jp/
- Square Japan: https://squareup.com/jp/
- Stripe Japan: https://stripe.com/jp
- PayPal Japan business: https://www.paypal.com/jp/business
- Komoju (Degica): https://komoju.com/ja/
- Amazon Pay Japan: https://pay.amazon.co.jp/
- Rakuten Payment: https://payment.rakuten.co.jp/
- Recruit Card / Air PAY: https://recruit-card.jp/
- METI: registered comprehensive credit-purchase-intermediary list portal — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: creditCard番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- FSA: 資金移動業者 list PDF — https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- Payments Japan Association publications — https://paymentsjapan.or.jp/category/publications/

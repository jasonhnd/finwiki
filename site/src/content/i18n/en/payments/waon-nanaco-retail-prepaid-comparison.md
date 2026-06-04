---
source: payments/waon-nanaco-retail-prepaid-comparison
source_hash: 23c09c2a5fc481f3
lang: en
status: machine
fidelity: ok
title: "WAON vs nanaco: retail prepaid e-money comparison"
translated_at: 2026-06-01T03:31:12.284Z
---

# WAON vs nanaco: retail prepaid e-money comparison

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the AEON vs Seven & i retail-prepaid comparison page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA-registered third-party prepaid view and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme comparison. Compare with [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid scheme economics]] for the rail-anchored peer, with [[payment-firms/rakuten-edy|Rakuten Edy]] for the platform-agnostic FeliCa-prepaid alternative, and with [[payments/famipay-valucreate-strategy|FamiPay]] for the convenience-store code-payment counterpart. Group-anchor corporate context is [[retail/aeon-group|AEON Group]] and [[retail/seven-and-i-hd|Seven & i HD]]; payment-operator anchors are [[card-issuers/aeon-financial-service|AEON Financial Service]], [[card-issuers/aeon-bank|AEON Bank]], [[card-issuers/seven-card-service|Seven Card Service]], [[payment-firms/seven-payment-service|Seven Payment Service]], and [[regional-banks/seven-bank|Seven Bank]].

## TL;DR

**WAON** (operated by AEON) and **nanaco** (operated by Seven Card Service) are Japan's two principal retail-anchored prepaid e-money brands. Both use FeliCa, both are registered as third-party prepaid payment instruments under the FSA framework, both integrate tightly with parent retail loyalty programs, and both connect to group-bank convenience through AEON Bank or Seven Bank. The competitive dynamic is closed-loop retail loyalty rather than open merchant code-payment competition.

## Side-by-side issuer overview

| Dimension | WAON | nanaco |
|---|---|---|
| Brand owner | AEON Co Ltd | Seven & i Holdings |
| Issuer (FSA-registered third-party prepaid) | [[card-issuers/aeon-financial-service\|AEON Financial Service]] / WAON operations | [[card-issuers/seven-card-service\|Seven Card Service]] |
| Group bank | [[card-issuers/aeon-bank\|AEON Bank]] | [[regional-banks/seven-bank\|Seven Bank]] |
| Settlement / payment services | AEON Financial Service group | [[payment-firms/seven-payment-service\|Seven Payment Service]] |
| Launch year | 2007 | 2007 |
| Technology | FeliCa | FeliCa |
| Primary acceptance anchor | AEON malls, MaxValu, AEON supermarkets, ministop convenience stores | 7-Eleven, Ito-Yokado, Sogo & Seibu, Akachan Honpo, Denny's Japan |
| Cross-merchant footprint | Substantial outside-AEON acceptance (drugstores, fast food, McDonald's previously) | Substantial outside-Seven acceptance (Tower Records, AEON Cinema previously, etc.) |
| Mobile rail | Mobile WAON via Osaifu Keitai, WAON on Apple Pay (limited devices), AEON Pay app QR | Mobile nanaco via Osaifu Keitai, nanaco app |
| Charge ceiling | ¥50,000 | ¥50,000 |
| Per-transaction ceiling | Same as balance ceiling for most categories | Same |
| Auto-charge from group bank | Yes, AEON Bank linkage | Yes, Seven Bank linkage |
| Auto-charge from group card | Yes, AEON Card | Yes, Seven Card Plus |
| Group point currency | WAON POINT | nanaco points |
| Point conversion to balance | 1 point = 1 yen WAON balance | 1 point = 1 yen nanaco balance |

## Charge / funding rails comparison

The retail-prepaid economic model depends heavily on what funding rail the consumer uses to load the prepaid balance. Each rail has a different cost / margin profile for the issuer.

| Funding rail | WAON support | nanaco support |
|---|---|---|
| Cash at register | Yes, all AEON-group stores | Yes, all 7-Eleven / Ito-Yokado |
| Cash at group ATM | Yes, AEON Bank ATM | Yes, Seven Bank ATM |
| Auto-charge from group bank | Yes, AEON Bank | Yes, Seven Bank |
| Auto-charge from group card | Yes, AEON Card | Yes, Seven Card Plus |
| Other credit card charge | Limited; AEON Card is preferred for points | Limited; Seven Card Plus is preferred |
| Bank transfer from non-group account | Limited | Limited |
| Mobile app charge | Via Osaifu Keitai or AEON Pay | Via Osaifu Keitai or nanaco mobile |

The strong group-bank and group-card preference is intentional — it keeps funding cost inside the group, avoids interchange leakage to outside card issuers, and concentrates point accrual within the group loyalty economy. Compare with PayPay-class wallets where funding-source mix is far more diverse and includes both bank-account direct debit and external-card charge in materially larger proportions.

## Group retail integration

The principal economic case for retail-anchored prepaid is **frequency-and-margin uplift in the group retail business**, not standalone wallet profitability.

### AEON / WAON integration touchpoints

| Touchpoint | Integration |
|---|---|
| AEON, MaxValu, AEON Style supermarket | WAON acceptance, AEON Card preferred-pricing, WAON POINT earning at higher multiple |
| AEON Mall food courts / specialty tenants | WAON acceptance broadly across tenant mix |
| Ministop convenience stores | WAON acceptance, on-brand integration |
| Welcia drugstore (AEON subsidiary) | WAON acceptance |
| Maxvalu / KASUMI / United Super Markets | WAON acceptance across group supermarket banners |
| AEON Cinema | WAON acceptance and AEON Card discount |
| AEON Bank | Auto-charge linkage, deposit ↔ WAON conversion |
| AEON Financial Service | AEON Card issuance, BNPL / installment, insurance cross-sell |
| AEON Customer Appreciation Day (20th and 30th of each month, 5% discount) | Tied to AEON Card / WAON usage |

### Seven & i / nanaco integration touchpoints

| Touchpoint | Integration |
|---|---|
| 7-Eleven Japan | nanaco acceptance and nanaco point earning |
| Ito-Yokado | nanaco acceptance, group-bank deposit interaction |
| Sogo & Seibu (department stores) | nanaco acceptance with department-store loyalty |
| Akachan Honpo (baby goods) | nanaco acceptance with family-loyalty integration |
| Denny's Japan | nanaco acceptance |
| Seven Bank | Auto-charge linkage, ATM cash charge, group-bank deposit |
| Seven Bank ATM network | nanaco-compatible ATM cash-charge nationwide |
| Seven Card Plus | Co-branded card with nanaco-integrated charge |
| 7iD ecosystem | Unified Seven & i Group customer ID system tied to nanaco |
| (tax payment via nanaco) | nanaco-funded tax payment at 7-Eleven cashier — heritage feature |

The ** via nanaco** feature was historically a notable cross-product use case where consumers funded nanaco via credit card (earning card points) then paid taxes via 7-Eleven cashier using nanaco — a credit-card-points-funded tax payment route. Seven Card Service tightened the rules around this over time; the feature illustrates how retail-prepaid acceptance creates side-channel optimization that may not align with original product intent.

## Comparison with Rakuten Edy

Edy (operated by [[payment-firms/rakuten-edy|Rakuten Edy]]) is the closest peer that is **not** anchored on a specific retail group's owned store network. Edy launched 2001 (predating both WAON and nanaco) and pursued a platform-style merchant acceptance strategy: any merchant that wants FeliCa prepaid acceptance can install an Edy reader and contract with Rakuten Edy. This created broader cross-merchant acceptance than WAON or nanaco achieved, but without the same group-retail economic anchor.

| Dimension | WAON | nanaco | Edy |
|---|---|---|---|
| Retail anchor | AEON group | Seven & i group | None — open merchant network |
| Group bank funding | AEON Bank | Seven Bank | Rakuten Bank (after Rakuten acquired Edy 2009) |
| Group card funding | AEON Card | Seven Card Plus | Rakuten Card (post-acquisition) |
| Point currency | WAON POINT | nanaco points | Rakuten Points (post-acquisition integration) |
| Mobile rail | Osaifu Keitai, AEON Pay | Osaifu Keitai, nanaco mobile | Osaifu Keitai, Edy app, Apple Pay (limited) |
| Cross-merchant acceptance | Wide but anchored at AEON | Wide but anchored at 7-Eleven | Wide, no single anchor |
| Code-payment migration path | AEON Pay (QR app, separate from FeliCa WAON) | Internal Seven & i code experimentation | Rakuten Pay (separate Rakuten QR wallet) |

All three retail-prepaid brands have launched adjacent QR / code-payment products rather than retiring FeliCa, reflecting the value of the installed FeliCa merchant base even as code payment captures marginal new-user growth. AEON Pay, Seven Pay, and Rakuten Pay illustrate the parallel strategies.

## Prepaid Payment Instrument Act treatment

Both WAON and nanaco are registered as **third-party prepaid payment instruments** under the Payment Services Act. The same obligations as for transit prepaid apply:

| Obligation | Detail |
|---|---|
| User-fund safeguarding | 50% of unused-balance amount must be safeguarded at March-end and September-end |
| Refund only at discontinuation | Unused balance not refundable in cash on demand — only on issuance discontinuation |
| Termination procedures | If discontinued, refund process must follow Payment Services Act procedure |
| No transfer between users | Balance cannot be sent peer-to-peer |
| Expiry rules | Set by issuer terms |

Breakage economics apply but are less significant than for transit prepaid because WAON and nanaco are primarily held by domestic consumers with steady spending patterns rather than by tourists with one-time use cases.

## Comparison with the discontinued Seven Pay 2019

The 2019-07 Seven Pay launch and rapid withdrawal due to a security incident is a critical reference for understanding why Seven & i has been notably cautious about launching new proprietary code-payment products in subsequent years, while nanaco's FeliCa-prepaid heritage has remained the group's principal proprietary cashless surface. Seven Pay was intended as a code-payment competitor to PayPay and other QR wallets; the incident exposed fundamental authentication / 2FA-reset weaknesses that allowed unauthorized account takeover and balance use. Seven & i discontinued the product within months and rebuilt its cashless strategy around third-party wallet acceptance at 7-Eleven (universal QR-wallet acceptance) plus continued nanaco investment.

The contrast with AEON Pay (AEON's QR-code wallet, launched after Seven Pay's withdrawal with the benefit of observing the security failure mode) is instructive — AEON shipped AEON Pay alongside continued WAON investment rather than substituting WAON, and AEON Pay was designed with stronger authentication / device-binding from launch. The same pattern shows up at FamilyMart with [[payments/famipay-valucreate-strategy|FamiPay]] launched with conservative authentication design.

## Group-bank funding cost advantage

The economic significance of the **group-bank tie-in** for WAON and nanaco is a recurring under-appreciated point. When a consumer auto-charges WAON from an AEON Bank account, the funding-cost-to-issuer (AEON Financial Service / WAON operations) is essentially zero because the bank-to-wallet flow is internal to the AEON group. Compare with:

| Funding rail comparison | WAON ex-AEON Bank | WAON ex-external credit card |
|---|---|---|
| Issuer funding cost | Internal-group transfer cost only | Card MDR pass-through (e.g. ~1.5-2.5%) |
| Margin retained on subsequent retail spending | Full retail merchant fee | Reduced by card-funding-cost passthrough |
| Loyalty integration | Tight (AEON Card + AEON Bank + WAON POINT triple link) | Limited |
| Consumer fee burden | Zero | Zero (cost is on issuer side) |

The same logic applies for nanaco / Seven Bank / Seven Card Plus. The group-bank tie-in is a structural funding-cost advantage that pure-platform code-payment wallets without group-bank affiliation must replicate via direct bank-account auto-charge.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/japan-code-payment-competitive-map]]
- [[payment-firms/rakuten-edy]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/aeon-bank]]
- [[card-issuers/seven-card-service]]
- [[payment-firms/seven-payment-service]]
- [[regional-banks/seven-bank]]
- [[payment-firms/paypay]]
- [[retail/aeon-group]]
- [[retail/seven-and-i-hd]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- WAON official site (waon.net).
- AEON Co Ltd: sustainability / cashless explanation pages.
- AEON Bank: official site.
- AEON Financial Service: official site.
- nanaco official site (nanaco-net.jp).
- Seven Card Service: official site.
- Seven Bank: official site.
- FSA: prepaid policy portal; third-party prepaid issuer registry.
- METI: cashless payment policy portal.

---
source: payments/nanaco-prepaid-seven-i
source_hash: 3474b1a3e75c4ec0
lang: en
status: machine
fidelity: ok
title: "nanaco: Seven & i Group convenience-store-anchored prepaid e-money"
translated_at: 2026-06-01T03:31:12.303Z
---

# nanaco: Seven & i Group convenience-store-anchored prepaid e-money

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Seven & i-anchored prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] for the head-to-head retail anchor comparison. Compare with [[payments/waon-prepaid-aeon|WAON]] (AEON counterpart), [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] (FeliCa peer scheme), and [[payments/famipay-valucreate-strategy|FamiPay]] (convenience-store code-payment counterpart). Issuer / group anchors are [[card-issuers/seven-card-service|Seven Card Service]] (FSA-registered prepaid issuer), [[payment-firms/seven-payment-service|Seven Payment Service]] (settlement services), [[regional-banks/seven-bank|Seven Bank]] (group bank rail), and [[retail/seven-and-i-hd|Seven & i Holdings]]; loyalty integration routes to [[loyalty/japan-points-landscape|Japan points landscape]] for nanaco-point economics.

## TL;DR

**nanaco** is the Seven & i Holdings group's **convenience-store-anchored prepaid e-money**, launched in 2007-04 alongside Aeon's WAON. It is issued by [[card-issuers/seven-card-service|Seven Card Service Co., Ltd.]], an FSA-registered third-party prepaid payment instrument issuer (corporate number 4010001088278, registered 2007-02-22). nanaco runs on **FeliCa** contactless IC and is the dominant prepaid e-money at the **20,000-plus 7-Eleven Japan store network**, as well as Ito-Yokado supermarkets, Sogo & Seibu department stores, Akachan Honpo, Denny's Japan, and a broad external merchant footprint. Settlement runs through [[payment-firms/seven-payment-service|Seven Payment Service]] under the [[banking/INDEX|Seven & i financial-services platform]], alongside [[regional-banks/seven-bank|Seven Bank]] as the group bank rail and ATM-charge route, and Seven Card Plus as the co-branded credit card for auto-charge. nanaco Points convert 1:1 into spendable balance, paralleling the WAON POINT model.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Brand owner | Seven & i Holdings |
| FSA prepaid issuer of record | [[card-issuers/seven-card-service\|Seven Card Service Co., Ltd.]] |
| Corporate number | 4010001088278 |
| FSA registration date | 2007-02-22 |
| Settlement / payment services | [[payment-firms/seven-payment-service\|Seven Payment Service Co., Ltd.]] |
| Group bank rail | [[regional-banks/seven-bank\|Seven Bank, Ltd.]] (ATM charge, auto-charge) |
| Group card rail | Seven Card Plus (Visa / JCB co-brand with embedded nanaco IC) |
| Launch year | 2007-04 |
| Technology | FeliCa contactless IC |
| Mobile rail | Mobile nanaco (Osaifu Keitai), nanaco app, Apple Pay (limited devices via Wallet integration) |
| Charge ceiling | ¥50,000 per card |
| Single charge max | ¥29,000 typical |

## Legal Basis: Third-Party Prepaid Payment Instrument

Like [[payments/waon-prepaid-aeon|WAON]], nanaco is registered as a **third-party prepaid payment instrument** under Chapter 3 of the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act]]. Key regulatory consequences:

- [[card-issuers/seven-card-service|Seven Card Service]] is registered with the FSA through the Kanto Local Finance Bureau and appears in [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]].
- Half-yearly **unused-balance deposit** obligation: half of outstanding unused balance must be deposited with the Legal Affairs Bureau as user-fund protection when the threshold of JPY 10 million is exceeded.
- **No refunding to original payer** except at issuance discontinuation.
- **Breakage** contributes to issuer P&L on dormant / lost cards; Seven & i discloses balance figures in group IR.
- AML / KYC carve-outs apply under PSA prepaid thresholds.

The structural distinction from [[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] frameworks under the 2023 PSA amendment keeps nanaco in the prepaid lane — value is store-only and not peer-to-peer transferable.

## Acceptance footprint

The acceptance network is structured by Seven & i Group retail anchor first, then outside-group expansion:

| Tier | Description | Examples |
|---|---|---|
| Inner — Seven & i Group | Group convenience-store and retail anchors | 7-Eleven Japan (~21,000 stores), Ito-Yokado, Sogo & Seibu, Akachan Honpo, Denny's Japan, York Mart, York Benimaru |
| Middle — Group bank rail | ATM charge, auto-charge via Seven Bank and Seven Card | [[regional-banks/seven-bank\|Seven Bank]] ATMs (countrywide, including non-Seven locations), Seven Bank account auto-charge |
| Outer — Cross-merchant | Non-group merchants accepting nanaco tap | Tower Records (formerly), gas stations, drugstores, fast food, Pia ticket counters |
| Mobile rail | Apple Pay / Osaifu Keitai global FeliCa terminals | Any FeliCa-accepting POS |
| Tax / utility payment | nanaco-specific receipt-payment use case | Income tax and property tax payment at 7-Eleven registers using nanaco to pay paper payment slips; a distinctive nanaco-only flow |

The **tax and utility receipt-payment** use case is a structurally important nanaco-specific flow: because 7-Eleven accepts public-money payment slips for taxes and utility bills at the register and nanaco is accepted there, taxpayers can earn nanaco Points on these payments. [[payments/waon-prepaid-aeon|WAON]] does not provide an equivalent flow because Aeon does not accept the same range of utility and tax payment slips.

## KPI snapshot

| Metric | Reading (most recent public disclosure) |
|---|---|
| Cumulative issued cards / IDs | Tens of millions; Seven & i integrated reports place cumulative nanaco issuance among the top three retail prepaid brands by card count |
| Annual transaction count | Top-tier retail-prepaid by tap count at convenience-store registers (very high tap-frequency anchor) |
| 7-Eleven store coverage | ~21,000 stores nationwide (all accept nanaco) |
| Group acceptance points | Substantial — Seven & i full retail footprint |
| nanaco Points issuance | JPY 200 = 1 point at the typical 7-Eleven base rate |

Exact period-on-period transaction value / count is disclosed in [[retail/seven-and-i-hd|Seven & i HD]] segment IR and [[card-issuers/seven-card-service|Seven Card Service]] reporting — FinWiki cites the IR documents rather than reproducing quarterly figures.

## Strategy: convenience-store cashless anchor

nanaco's strategic role inside Seven & i:

1. **Convenience-store register velocity** — FeliCa tap is faster than code-payment QR scan at peak-throughput 7-Eleven registers; nanaco retains a structural speed advantage that is hard for code-payment to dislodge.
2. **Tax and utility payment-slip cashless conversion** — uniquely positioned to convert tax and utility cash payments into cashless payments through 7-Eleven register acceptance.
3. **Group financial-services cross-sell** — nanaco usage feeds [[regional-banks/seven-bank|Seven Bank]] account openings and Seven Card credit-card issuance.
4. **Inbound tourist acceptance** — Mobile nanaco / Apple Pay reach overseas iPhone users in Japan; combined with Seven & i's high-density urban store network this is a meaningful tourist-cashless lane.
5. **Code-payment coexistence** — Seven & i Group also accepts PayPay, Rakuten Pay, d-Barai, and au PAY at 7-Eleven registers; nanaco is the **group-loyalty-anchored** rail within multi-rail acceptance, not simply a code-payment competitor.

The 2019 7pay incident (the short-lived 7pay code-payment product that was withdrawn after security failure) reinforced Seven & i's positioning of nanaco as the durable group-cashless anchor rather than re-attempting a Seven-branded code payment.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/waon-prepaid-aeon]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/seven-card-service]]
- [[payment-firms/seven-payment-service]]
- [[regional-banks/seven-bank]]
- [[retail/seven-and-i-hd]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- nanaco official site (nanaco-net.jp).
- Seven Card Service corporate site (7card.co.jp).
- Seven & i Holdings corporate site (7andi.com) — group structure and IR.
- Seven-Eleven Japan corporate site (sej.co.jp) — store network and register acceptance.
- Seven Bank corporate site (7bank.co.jp) — group bank rail and ATM charge.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Seven Card Service entry, registered 2007-02-22).
- FSA prepaid payment instruments policy page.
- METI cashless policy page.

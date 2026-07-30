---
source: fintech/jp-trust-type-sc-architecture
source_hash: c8b842169976fdbd
lang: en
status: machine
fidelity: ok
title: "Japan trust-type SC architecture"
translated_at: 2026-07-30T00:00:00+09:00
---

# Japan trust-type SC architecture


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance — how multiple megabanks jointly own fintech infrastructure]] for peer / contrast context and [[fintech/japan-financial-regulation|Japan's financial-regulation framework for tokens, cryptoassets, and payments]] for the broader system / regulatory boundary.

> [!info] TL;DR
> Under Japan's Payment Services Act, a trust-type stablecoin is treated as a **Type 3 electronic payment instrument (a specified trust beneficiary right)**. The Type 3 classification alone, however, does not establish an unlimited remittance amount, all-cash backing, B2B market leadership, or cross-border authorization. FSA materials distinguish the remittance limits of the trust-company and trust-bank routes. After amendments took effect on June 1, 2026, part of the backing assets may be held in specified short-term government bonds and time deposits. ^[source:FSA Payment Services WG material 2024-11-21; FSA 2026 implementing rules; Payment Services Act; Trust Act]

## Issuance-route comparison within the scope of FSA materials

| Dimension | Type 1 EPI: Type II funds-transfer service provider | Type 3 EPI: trust company | Type 3 EPI: trust bank |
|---|---|---|---|
| Legal classification | Type 1 electronic payment instrument | Specified trust beneficiary right (Type 3 electronic payment instrument) | Specified trust beneficiary right (Type 3 electronic payment instrument) |
| Entry route | Funds-transfer registration. The FSA comparison identifies Type II as a practical issuance route | Trust-company license or registration plus prior notification under the Payment Services Act | Banking license, authorization under the Concurrent Business Act, and prior notification |
| Asset safeguarding | Security deposit or equivalent. Where assets are safeguarded through a trust, investment in safe assets may also be possible | Managed as trust property. From June 1, 2026, in addition to specified demand deposits, up to 50% of the issued amount may be held in certain short-term government bonds and cancellable time deposits | Managed as trust property. The current permitted backing-asset scope is the same as the column to the left |
| Remittance limit | FSA material: ¥1 million per transfer | ¥1 million per transfer in principle. A business implementation plan must be approved for amounts above ¥1 million | FSA material: no limit |
| What this table establishes | Regulatory comparison of issuance routes | Regulatory comparison of the trust-company route | Regulatory comparison of the trust-bank route |

Source note: this table uses the issuer, entry-route, asset-safeguarding, and remittance-limit comparison on page 16 of the [FSA Payment Services System Working Group material (2024-11-21)](https://www.fsa.go.jp/singi/kessaiseido_wg/siryou/20241121/1.pdf) and the [publication page for the 2026 implementing rules](https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html). The latter states that the amended act and related ordinances took effect and became applicable on June 1, 2026.

## What can be established about the trust type

**(a) Trust property and redemption**: Article 25 of the Trust Act limits the effect of opening bankruptcy proceedings against a trustee on property belonging to the trust. FSA materials explain, however, that the redemption resources for a Type 3 EPI are the trust property and that a decline in trust property may reduce the redeemable amount. Bankruptcy remoteness and an unconditional guarantee of redemption at par must therefore be assessed separately. ^[source:Trust Act Article 25; FSA Payment Services WG material]

**(b) Remittance limits depend on the issuance route**: Type 3 status does not create a universally unlimited remittance amount. In the FSA comparison, the trust-company route is generally limited to ¥1 million and requires approval of a business implementation plan above that amount, while the trust-bank route has no limit. This alone does not prove that a particular product offers large-value B2B settlement or establish its permitted transaction size.

**(c) Progmat distinguishes the platform from individual issuance plans**: A November 6, 2023 joint release by Progmat, Ginco, and Mitsubishi UFJ Trust and Banking described a proposed XJPY / XUSD scheme in which Ginco would be the party requesting issuance, Mitsubishi UFJ Trust and Banking would be the issuer (trustee), and Progmat Coin would be the platform. It is a planning document for a particular project; it does not prove that three megabanks were joint settlors, that the 2024 issuance target was achieved, or that the project has any current market share. ^[source:Progmat/Ginco/MUFG Trust joint release 2023-11-06]

## Evidence boundary for cross-border use

Classification as a Type 3 EPI under Japanese law does not automatically grant authorization to issue, sell, or intermediate in another jurisdiction, nor does it confer a particular mutual-recognition tier. The FSA, e-Gov, and Progmat materials cited here do not establish U.S. recognition, an interoperability advantage over USDC, or that [[fintech/cross-border-sc-via-swift-api|Project Pax via Swift APIs]] is the current mainstream route. Cross-border claims must be verified separately against the current law and materials of the relevant jurisdiction, issuer, intermediary, and network.

## Verification map for product and market claims

| Claim | Required source | Conclusion in this entry |
|---|---|---|
| Legal classification and issuer eligibility | Payment Services Act, Trust Act, current FSA ordinances and supervisory materials | The Type 1 / Type 3 classifications and issuance routes can be established |
| Launch and circulation of an individual product | Terms of issuance from the issuer / trustee, FSA register, and current disclosures by distributors | A past joint study or target date is not enough to treat a product as current / live |
| Remittance limit | Issuance route, approval of business implementation plan, product terms | Do not infer a universal limit from “trust type” alone |
| Leadership in B2B / retail / cross-border | Comparable dated transaction data with a defined scope | The primary sources in this entry contain no market-ranking data, so no leader is assigned |
| Eligibility under foreign law | Regulator registration / recognition and a local entity in the target country | Do not infer it from Japan's EPI classification |

Source note: legal-status claims should be checked against the [FSA EPI registration page](https://www.fsa.go.jp/common/shinsei/dendai/dentori.html), the current [Payment Services Act](https://elaws.e-gov.go.jp/document?lawid=421AC0000000059) and [Trust Act](https://elaws.e-gov.go.jp/document?lawid=418AC0000000108) on e-Gov, and the relevant issuer / trustee disclosure. The [2023 Progmat joint release](https://progmat.co.jp/press/pdf/press231106_01.pdf) is historical project evidence, not proof of present issuance or market leadership.

## Applications

- Compare the regulatory differences between trust-company issuance and trust-bank issuance
- Treat backing assets, redemption, bankruptcy remoteness, and remittance limits as separate verification axes
- In discussions of [[fintech/cross-border-sc-via-swift-api|cross-border stablecoins via Swift APIs]], do not conflate domestic issuer eligibility with connection to a cross-border network
- Use this as a legal baseline for testing the [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin / deposit-token architecture]] hypothesis against product-specific Japanese data

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|The three-layer structure of Japan's stablecoin regime]]
- [[fintech/cross-border-sc-via-swift-api|Cross-border stablecoins via Swift APIs]]
- [[fintech/multi-megabank-consortium-governance|Multi-megabank consortium governance]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional stablecoin / deposit-token architecture]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation]]
<!-- /wiki-links:managed -->

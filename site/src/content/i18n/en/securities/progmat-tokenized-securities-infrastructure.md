---
source: securities/progmat-tokenized-securities-infrastructure
source_hash: 58e98ac0ea18bcfc
lang: en
status: machine
fidelity: ok
title: "Progmat tokenized securities infrastructure"
translated_at: 2026-06-01T04:15:40.132Z
---

# Progmat tokenized securities infrastructure

## Wiki route

This page sits inside [[securities/INDEX|securities index]] as the platform-side companion to the venue-side [[securities/odx-start-stb-secondary-market|ODX START security token secondary market]] page and the route-level [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] page. Read it with [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the cash-equity contrast, [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]] for license-side checks on participating securities firms, and [[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] for the fund-wrapping question. The cross-domain bridge is [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] because Progmat Coin (tokenized-deposit / stablecoin) is the cash-leg companion to Progmat ST.

## TL;DR

Progmat is a Japanese tokenization platform operated by Progmat Inc. (株式会社Progmat), spun out of [[megabanks/mizuho-fg|Mizuho]]-adjacent and MUFG-led trust-bank tokenization work (the core Progmat ST infrastructure originated inside [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] before becoming an independent company with multi-bank shareholders). It provides issuance and lifecycle infrastructure for tokenized trust-beneficial-interests (ST), tokenized deposit / stablecoin (Progmat Coin / Progmat UT), and platform infrastructure for security tokens that subsequently trade on [[securities/osaka-digital-exchange|Osaka Digital Exchange]] START secondary market. Public Progmat materials report material cumulative ST issuance balances across domestic markets, with Progmat-handled cases forming the majority share. Competing platforms include BOOSTRY (Nomura-led, also positioned to support ST issuance) and ibet for FIN (consortium platform). Together these three form the Japanese ST issuance-platform triangle that sits behind the ST issuer side of [[securities/japan-security-token-secondary-market-route|ST secondary market routes]].

## Platform identity

| Field | Public reading |
|---|---|
| Operating entity | 株式会社Progmat (Progmat Inc.) |
| Origin | Spun out of [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] tokenization work; transitioned to a standalone company with broader bank / securities-firm shareholders. |
| Shareholder lineage | MUFG group entities as anchor; additional Japanese mega-bank, trust-bank, securities-firm, and IT-platform shareholders depending on the round. Verify current cap table per Progmat IR / news. |
| Platform products | Progmat (ST — security-token issuance / lifecycle); Progmat Coin (SC — stablecoin / tokenized deposit); Progmat UT (utility token). |
| Underlying tech | DLT-based tokenization with trust-bank custody integration; specific chain choice and version evolve. |
| Regulatory anchor | FIEA tokenized-securities scope on the ST side; payment-services law / banking law adjacency on the SC side. |
| Secondary-venue interaction | ST issues circulate via [[securities/osaka-digital-exchange|ODX]] START and JSDA unlisted-PTS framework rather than TSE listing. |

Cap-table changes, rebrandings, and product-line rationalizations occur in this market; always verify on Progmat's current site before quoting governance specifics.

## Why a tokenization platform exists

Cash equities, corporate bonds, and conventional investment trusts already have well-developed issuance, transfer, and settlement infrastructure ([[securities/tokyo-stock-exchange|TSE]], [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]], trust banks). A tokenization platform exists because:

1. **Beneficial interests in trust assets** that historically were paper-based or low-frequency-transfer can be tokenized to enable secondary-market liquidity, faster transfer, programmable distributions, and broader investor reach.
2. **Asset classes outside listed scope** — small-ticket real-estate trusts, structured-bond beneficial interests, private-fund interests — can be issued as electronically recorded transferable rights and traded on ST PTS without the cost / disclosure intensity of a TSE listing.
3. **Programmable corporate actions** — dividend / coupon / redemption distributions can be automated on the token contract logic, reducing operational cost.
4. **Cross-border investor onboarding** — DLT recordkeeping with KYC / specified-investor controls can in principle simplify cross-border distribution within FIEA constraints (still meaningfully constrained in practice).
5. **Convergence with tokenized cash-leg payment** — same-rail or near-same-rail settlement when paired with Progmat Coin / DCJPY / private tokenized deposits.

The Japanese architectural choice has been to integrate trust banks deeply into ST infrastructure rather than disintermediate them; the trust bank holds the underlying asset rights and ensures legal enforceability of the tokenized beneficial interest. This is structurally different from US or EU tokenization architectures that often rely on SPV / qualified-custodian models without trust-bank intermediation.

## Progmat ST product architecture

| Layer | Function |
|---|---|
| Issuer | Originates the underlying asset (e.g. real-estate property holdings, bond portfolio, fund interests). |
| Trust bank | Holds the underlying asset under a trust agreement; issues trust-beneficial-interests; in many Progmat structures this is MUFG Trust or another participating trust bank. |
| Progmat platform | Records the tokenized trust-beneficial-interest on DLT; manages transfer, lifecycle events, and integration with KYC / suitability controls. |
| Securities firm | Type I FIBO with tokenized-security distribution scope; runs primary distribution and secondary-market routing to ODX START. |
| Investor | Specified investor or, for some product structures, broader investor scope per FIEA / JSDA rules. |
| Cash-leg provider | Trust bank / bank wire for fiat leg; potential future integration with Progmat Coin or DCJPY for tokenized-deposit leg. |

This five-layer architecture is the structural reason ST issuance time-to-market in Japan is longer than for a typical cash-equity primary issue and slower than US Reg D-style private-placement tokenization that bypasses trust intermediation.

## Progmat Coin / SC layer

Progmat Coin (the stablecoin / tokenized-deposit product layer) is described publicly as the cash-leg companion to the ST layer. The relevance for ST settlement:

- An ST trade's cash leg currently uses conventional yen settlement (trust-bank / bank wire) for most production traffic.
- Atomic DvP between token leg and cash leg requires either (a) tokenized deposit issued by a regulated bank, (b) DCJPY-style two-tier digital currency, or (c) regulated stablecoin under FIEA / payment-services-law revisions.
- Progmat Coin is positioned as one of the candidate cash-leg rails alongside DCJPY and bank-specific tokenized deposit experiments.
- The cross-domain page [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] details the SC-side architecture and regulatory positioning.

For the securities-domain reader, the takeaway is: Progmat's ST work and Progmat's SC work are designed to compose. Atomic DvP is a stated long-term goal of the architecture; near-term production flows still use conventional cash-leg settlement.

## Progmat vs BOOSTRY vs ibet for FIN

Japanese ST issuance platforms have settled into a three-pole architecture, each with different shareholder backing and product orientation:

| Platform | Operating entity | Anchor / lineage | Orientation |
|---|---|---|---|
| Progmat | Progmat Inc. | MUFG group origin; multi-bank shareholders | Trust-beneficial-interest ST + Progmat Coin / SC integration; bank-led ecosystem. |
| BOOSTRY | BOOSTRY Co., Ltd. | [[securities-firms/nomura-hd|Nomura HD]] / [[financial-regulators/japan-exchange-group|JPX]] / SBI / others have publicly invested across rounds | Securities-firm-led ecosystem; corporate-bond and digital-bond focus historically; ibet network operator. |
| ibet for FIN | Consortium platform, operated in coordination with BOOSTRY | Multi-firm consortium | Sector-utility framing for ST recordkeeping with broad financial-industry participation. |

Concrete competitive features (subject to change):

- **Progmat's bank-side strength.** Trust-bank integration is structurally tighter; cash-leg integration with Progmat Coin is a differentiator the securities-firm-led platforms cannot match without bank partnership.
- **BOOSTRY's securities-side strength.** Closer coupling to Nomura distribution and to JPX adjacency; in 2023 JPX publicly announced an investment in BOOSTRY and a security-token business alliance.
- **ibet for FIN's neutral-utility framing.** Designed to host issuer- and platform-agnostic recordkeeping for a broader consortium; lowers single-firm-dependence concerns.
- **Cross-platform interoperability.** All three platforms ultimately produce ST issues that flow to [[securities/odx-start-stb-secondary-market|ODX START]] for secondary trading; the ODX participant universe sees ST from multiple platforms and must integrate accordingly.

For an analyst, the right framing is: ST issuance in Japan is not winner-take-all at the platform layer; secondary trading is winner-take-most at the venue layer (START) so far.

## Public size signals

From the Progmat public concept page source pack, the following market-size fields have been disclosed (snapshot values; verify the visible page date for time-sensitive use):

| Field | Reported value |
|---|---|
| Domestic cumulative security-token cases | 87 |
| Progmat-handled cumulative cases | 45 |
| Domestic outstanding ST balance | Over JPY 667.4 billion |
| Progmat-handled outstanding ST balance | Over JPY 452.2 billion |

These numbers indicate (a) the Japanese ST issuance market is in early-thousands-of-billions-of-yen scale rather than trillions, and (b) Progmat holds approximately the majority share of issued ST balance by reported snapshot. Both ratios will move; always verify against the Progmat public page rather than caching a snapshot indefinitely.

## Issuer / asset classes supported

| Asset class | Public examples (verify per issue) |
|---|---|
| Tokenized real-estate beneficial interest | Trust-beneficial-interest in real-estate trust; Progmat has hosted multiple residential / commercial property structures. |
| Tokenized digital bonds | Issuances by financial-institution issuers using Progmat / partner-bank infrastructure. |
| Tokenized investment-trust-style beneficial interest | Where supported by FIEA / JSDA scope. |
| Cross-sectoral and infrastructure-asset ST | Periodic announcements add new sectors. |

Each ST issue has a per-issue disclosure pack covering issuer, trust bank, distribution participants, eligibility, settlement, and lifecycle terms; the platform is the recordkeeping rail rather than the source of investor disclosure.

## Regulatory and self-regulatory anchors

| Layer | Role |
|---|---|
| FSA | Authorizes FIBO with tokenized-security distribution scope; oversees the trust-bank role; published 2022-06-22 Market System Working Group interim report addressing ST circulation. |
| JSDA | Self-regulatory body; created PTS rules for unlisted securities including tokenized securities; defines `unlisted approved PTS issue` scope used by ODX START. |
| Trust-bank supervision | Trust banks holding underlying assets are subject to trust-bank regulation in addition to FIEA tokenized-security rules. |
| Payment services / banking | Progmat Coin / SC side is regulated under payment services law / banking law revisions; out of scope for the strict ST securities path but architecturally relevant for DvP. |

## Comparison vs cash-equity infrastructure

| Dimension | Cash equity (TSE) | ST (Progmat / BOOSTRY / ibet → START) |
|---|---|---|
| Primary issuance | Underwritten via securities firms; TSE listing examination; broad retail accessibility | Trust-bank-mediated; FIEA tokenized-security scope; specified-investor heavy |
| Secondary venue | TSE + PTS (Japannext, Cboe Japan, ODX equity) | ODX START primarily |
| Clearing | [[securities/japan-securities-clearing-corp|JSCC]] | Token-platform transfer + trust / custody party; cash via standard rails |
| Settlement | [[securities/japan-securities-depository-center|JASDEC]] book-entry | Token platform record; DvP design in development |
| Disclosure intensity | High (TDnet, EDINET, quarterly / annual filings) | Lower; per-issue product disclosure plus trust documents |
| Lifecycle events | Standard corporate-action infrastructure | Programmable on token contract logic |
| Cross-border investor reach | Mature | Constrained by FIEA scope and participant policy |

## History sketch

- **Pre-2020** — Early MUFG Trust tokenization research, JSDA / FSA conceptual work on tokenized securities.
- **2020-2022** — Progmat brand launch as a Mitsubishi UFJ Trust Bank-led platform; first Progmat-hosted ST issuance cases.
- **2022-06-22** — FSA Market System Working Group interim report addressing ST circulation through PTS.
- **2023** — Progmat Inc. established as a standalone operating company with multi-bank shareholder structure; JPX publicly announced investment in BOOSTRY and ST alliance.
- **2023-12-25** — ODX START secondary market launched, providing the venue side for Progmat-hosted ST issues.
- **2024-2026** — Continued ST issuance growth; cumulative case counts and outstanding balances published on the Progmat concept page reflect this growth.

## Related

- [[securities/INDEX]]
- [[securities/osaka-digital-exchange]]
- [[securities/odx-start-stb-secondary-market]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[payment-firms/progmat]]
- [[securities-firms/nomura-hd]]
- [[megabanks/sbi-hd]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## Sources

- Progmat Inc., public concept page, news page, and corporate site.
- MUFG corporate news pages and Mitsubishi UFJ Trust and Banking corporate trust products page.
- FSA, Market System Working Group 2022-06-22 interim report.
- JSDA, unlisted-securities PTS self-regulatory rules.
- ODX, START launch announcement (2023-12-25).
- JPX, BOOSTRY investment and security-token business alliance announcement (2023-03-30); digital-bond / ST-related news.

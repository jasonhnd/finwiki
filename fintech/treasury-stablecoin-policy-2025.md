---
title: U.S. stablecoin policy after the 2025 GENIUS Act · enacted framework and 2026 rulemaking
aliases:
  - treasury-2025-stablecoin
  - pwg-stablecoin-2025
  - treasury-stablecoin-framework
  - federal-state-stablecoin-coordination
  - tbill-reserve-requirements
  - stablecoin-redemption-guarantee
  - run-risk-stablecoin-mitigation
  - treasury-pwg-digital-asset
domain: fintech
created: 2026-05-25
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-11-25
confidence: confirmed
tags: [fintech, regulatory, usa, 2025-reset, treasury, stablecoin, reserves, t-bills, run-risk, dual-track]
status: active
sources:
  - https://www.congress.gov/bill/119th-congress/senate-bill/1582
  - https://www.congress.gov/bill/119th-congress/senate-bill/1582/text
  - https://www.congress.gov/crs-product/IN12553
  - https://www.whitehouse.gov/briefings-statements/2025/07/the-president-signed-into-law-s-1582/
  - https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html
  - https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html
---

# U.S. stablecoin policy after the 2025 GENIUS Act

## TL;DR

The **GENIUS Act (Public Law 119-27)** became law on **July 18, 2025**. It creates a federal-and-state framework for permitted payment-stablecoin issuers, requires at least 1:1 identifiable reserves from a statutory list, requires a public redemption policy and monthly reserve reporting, and establishes routes for state and foreign regimes. It does **not** itself promise T+1 redemption, a universal fixed capital floor, or deposit insurance. As of **July 30, 2026**, the OCC's main implementation rule and later AML/CFT and customer-identification rules were still listed as **notices of proposed rulemaking (NPRs)**, so proposals must not be described as final rules or issued charters. ^[Law and status: https://www.congress.gov/bill/119th-congress/senate-bill/1582; enacted text: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text; OCC proposal: https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html; OCC 2026 proposed-issuances list: https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html]

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the U.S. statute-and-rulemaking companion to [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]. Read it with [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]], [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation status]], and [[fintech/genius-act-501-actual-implementation|GENIUS Act enacted-text implementation]]. For international comparisons, see [[fintech/mica-overview|EU MiCA]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]].

## What is enacted, and what is not

The authoritative baseline is the enacted text, not a policy forecast. Congress.gov records S.1582 as Public Law 119-27, and the White House records the July 18, 2025 signing. The law sets the framework and delegates implementation details to federal and state regulators. On February 25, 2026, the OCC said it had issued a **proposal** and was seeking comments; its 2026 index still labels the March 2 core rule, June 22 customer-identification rule, and June 24 AML/CFT and sanctions-risk-management rule as NPRs. ^[https://www.congress.gov/bill/119th-congress/senate-bill/1582; https://www.whitehouse.gov/briefings-statements/2025/07/the-president-signed-into-law-s-1582/; https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html; https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html]

The table below separates enacted requirements from items that remained proposals or unsupported claims as of the review date. Sources: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text and https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html.

| Topic | Evidence-backed status |
|---|---|
| GENIUS Act | Enacted July 18, 2025 as Public Law 119-27 |
| Core OCC implementation rule | NPR opened March 2, 2026; not treated here as final |
| AML/CFT and sanctions-risk-management rule | NPR opened June 24, 2026 |
| Customer-identification rule | NPR opened June 22, 2026 |
| T+1 redemption guarantee | Not stated in the enacted section 4 redemption language |
| Universal fixed capital floor | Not stated; regulators must tailor capital rules to issuer business model and risk |

## Federal-state dual-track architecture

The statute recognizes three issuer categories: a subsidiary of an insured depository institution, a federal qualified nonbank payment-stablecoin issuer, and a state qualified payment-stablecoin issuer. A state route is available at consolidated outstanding issuance of **$10 billion or less** if the state regime is substantially similar to the federal framework. Crossing $10 billion triggers transition or issuance-stop provisions, but the law also provides for waivers and expressly says transition does not require conversion to a federal charter. ^[Congress.gov summary: https://www.congress.gov/bill/119th-congress/senate-bill/1582; enacted sections 4 and 5: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

The table below summarizes the statutory categories without inventing a charter type or capital amount. Source: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| Issuer category | Primary route | Key boundary |
|---|---|---|
| Insured-depository-institution subsidiary | Approval and supervision by the applicable primary federal regulator | Operates under the statutory payment-stablecoin framework in addition to its banking perimeter |
| Federal qualified nonbank issuer | Approval and exclusive federal supervision by the OCC | Capital, liquidity and risk rules remain regulator-defined within statutory limits |
| State qualified issuer | State regime certified as substantially similar | State route generally applies at $10B or less; transition, issuance-stop and waiver provisions apply above the threshold |

Treasury's statutory role includes establishing broad principles for whether a state regime is substantially similar. The Stablecoin Certification Review Committee then reviews state certifications. This is not the same as Treasury directly chartering every issuer.

## Reserve composition · T-bill requirement and rationale

Section 4 requires identifiable reserves on an **at least 1:1 basis**. The 93-day limit applies to Treasury securities in the permitted list and to specified repo structures; it is not a shorthand for every permitted asset. Contrary to the prior version of this page, qualifying registered government money-market-fund securities and certain qualifying tokenized reserve assets are also included. ^[Enacted section 4: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

The table below paraphrases the enacted reserve categories. It should be read with the complete statutory conditions at https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| Statutory reserve category | Main condition in section 4 |
|---|---|
| U.S. coins and currency or funds at a Federal Reserve Bank | At least 1:1 identifiable backing |
| Demand deposits or other withdrawable-on-request deposits; insured shares | Subject to regulator safety-and-soundness limits |
| Treasury bills, notes or bonds | Remaining maturity of 93 days or less, or issued with maturity of 93 days or less |
| Specified repos and reverse repos | Overnight structures and statutory collateral / counterparty conditions |
| Registered government money-market-fund securities | Fund invested solely in the permitted underlying categories |
| Other similarly liquid federal-government assets | Approval by the primary federal regulator, with state-regulator consultation when applicable |
| Tokenized form of specified permitted assets | Must comply with applicable law and regulation |

The statute generally prohibits pledging, rehypothecating or reusing reserves, subject to narrow exceptions stated in section 4. It also directs regulators to implement tailored capital, liquidity, reserve-diversification, operational-resilience and risk-management requirements. It does not set the earlier page's claimed universal $50 million capital floor, three-counterparty minimum, 5% liquidity buffer or stress-test percentages.

## Redemption and disclosure · what section 4 actually says

Section 4 requires issuers to publish clear procedures for **timely redemption** and to disclose all purchase and redemption fees in plain language; fee changes require at least seven days' notice. It also requires monthly publication of outstanding issuance and reserve amount, composition, average tenor and custody geography, plus monthly examination by a registered public accounting firm and CEO/CFO certification. The enacted language reviewed here does **not** state a universal T+1 settlement deadline or the earlier page's illustrative minimum-redemption amounts. ^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

The table below distinguishes the statutory text from claims that require a later final rule or issuer policy. Source: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| Item | Enacted baseline |
|---|---|
| Redemption procedure | Must be clear, conspicuous and timely |
| Redemption fees | Must be disclosed; changes require at least seven days' notice |
| Reserve disclosure | Monthly amount and composition, including average tenor and custody geography |
| Independent review | Monthly examination by a registered public accounting firm |
| Management certification | Monthly CEO/CFO certification to the applicable regulator |
| T+1 deadline or fixed minimum redemption size | Not specified in the reviewed statutory language |

Payment stablecoins are not guaranteed by the U.S. government and are not covered by federal deposit or share insurance merely because they comply with the Act. The law makes contrary representations unlawful. This distinction matters when interpreting “1:1 reserves”: asset backing is not the same as a federal guarantee.

## Treasury, OCC and other regulators · distinct jobs

The law assigns different jobs rather than creating a single “Treasury charter.” Treasury must establish principles for state-regime comparability, make foreign-regime comparability determinations, work on reciprocal arrangements, and perform specified illicit-finance and non-payment-stablecoin work. The OCC supervises federal qualified nonbank issuers and handles foreign-issuer registration under the statute. The appropriate federal banking regulator supervises an insured depository institution's issuing subsidiary; certified state regimes supervise state qualified issuers subject to the federal framework and transition rules. ^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

The table below is a role map based on the enacted text, not a list of approved issuers. Source: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| Institution | Role relevant to this entry |
|---|---|
| Treasury Secretary | State-comparability principles; foreign-regime determinations and reciprocity; specified rulemaking and studies |
| OCC | Federal qualified nonbank issuer approval / supervision; foreign-issuer registration; OCC implementation rules |
| Federal banking regulators | Supervision of issuing subsidiaries in their existing banking perimeter; statutory implementation |
| State regulators and certification committee | State-regime certification, supervision and review under the substantial-similarity framework |

## Foreign issuers · comparability, not assumed MRAs

The foreign-issuer exception requires, among other conditions, a Treasury determination that the home regime is comparable, OCC registration, and sufficient U.S.-held reserves for U.S. customer liquidity unless a reciprocal arrangement permits otherwise. Treasury must publish a current list of countries for which it has made a comparability determination, and agreements must be published before entry into force. This page therefore does not label talks with the EU, UK, Japan, Hong Kong, Singapore or any other jurisdiction as completed mutual-recognition agreements without a matching official determination or published arrangement. ^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

## Effective date and rulemaking status

The Act takes effect on the earlier of **18 months after enactment** or **120 days after the primary federal regulators issue final implementing regulations**. The statute also generally gives each primary federal regulator, Treasury and each state regulator one year from enactment to promulgate implementing regulations. These provisions make the distinction between an enacted statute, an NPR and a final rule operationally important. ^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

The table below records only dated events supported by the official pages reviewed on July 30, 2026. Sources: https://www.congress.gov/bill/119th-congress/senate-bill/1582, https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html and https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html.

| Date | Evidence-backed event |
|---|---|
| 2025-07-18 | S.1582 became Public Law 119-27 |
| 2026-02-25 | OCC announced its proposed core implementation rule |
| 2026-03-02 | Core OCC NPR opened; comments closed May 1 |
| 2026-06-22 | Customer-identification-program NPR opened |
| 2026-06-24 | AML/CFT and sanctions-risk-management NPR opened |
| 2026-07-30 review | The cited OCC index still categorized these three items as proposed issuances |

For the surrounding policy environment see [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]. For reserve-demand economics, see the separately sourced [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] rather than treating an unsourced market-size forecast as statutory policy.

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation status]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act enacted-text implementation]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC jurisdiction]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|EU MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## Sources

- Congress.gov — S.1582 status and CRS summary: https://www.congress.gov/bill/119th-congress/senate-bill/1582
- Congress.gov — enacted statutory text: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text
- Congressional Research Service — overview of S.1582: https://www.congress.gov/crs-product/IN12553
- White House — signing notice, July 18, 2025: https://www.whitehouse.gov/briefings-statements/2025/07/the-president-signed-into-law-s-1582/
- OCC — February 25, 2026 proposal announcement: https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html
- OCC — 2026 proposed-issuances index: https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html

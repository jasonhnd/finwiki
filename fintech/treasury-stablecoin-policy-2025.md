---
title: Treasury 2025 Stablecoin Policy Framework · PWG Recommendations and Dual-Track Charters
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
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, regulatory, usa, 2025-reset, treasury, stablecoin, reserves, t-bills, run-risk, dual-track]
status: active
sources:
  - "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets"
  - "https://home.treasury.gov/news/press-releases (Treasury press releases 2025)"
  - "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/presidents-working-group-on-financial-markets (PWG)"
  - "https://www.fincen.gov/news-room"
  - "https://www.federalreserve.gov/newsevents/pressreleases.htm"
  - "https://occ.treas.gov/news-issuances/"
  - "https://www.federalregister.gov/"
  - "https://www.whitehouse.gov/presidential-actions/ (EO 14178)"
---

# Treasury 2025 Stablecoin Policy Framework · PWG Recommendations and Dual-Track Charters

## TL;DR

Treasury's 2025 stablecoin policy framework operationalizes the **GENIUS Act** through three coordinated streams: (1) the **President's Working Group on Digital Asset Markets (PWG-DAM)** — re-chartered under EO 14178 — published recommendations on issuer eligibility, reserve composition, redemption guarantees, and run-risk mitigation; (2) the **federal-state dual-track** charter structure was finalized so issuers can be licensed by **OCC**, the **Federal Reserve**, or a **state regulator** under a common federal floor with state-level additions; (3) **T-bill reserve requirements** were calibrated to **≤93-day maturity** Treasuries, demand deposits at insured depositories, and reverse-repo backed by Treasuries — explicitly **excluding longer-duration paper, corporate paper, and crypto collateral** to address the **run-risk** that materialized in the March 2023 USDC episode. Redemption guarantees are **T+1 at par by statute**, with a **liquidity-buffer** sub-rule requiring same-day fungibility at minimum thresholds. The framework deliberately diverges from the EU MiCA single-passport model (favoring federalism) and from the Japan EPI three-type model (favoring fewer license categories). Compared to Federal Reserve and OCC charter routes evaluated standalone, Treasury's role is **policy coordination and reserve-asset specification**, not direct supervision — the **supervisor** for any given issuer remains its primary federal or state regulator.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the **Treasury-side companion** to [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]. Read it with [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] and [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]] for the supervisor-side mechanics, and with [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] and [[fintech/genius-act-501-actual-implementation|§501 implementation]] for the compliance-stack layer. For comparative international frameworks see [[fintech/mica-overview|EU MiCA]], [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]], and [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]].

## Why this entry exists

Treasury's role in the 2025 stablecoin framework is **structurally distinct from the SEC reset** ([[fintech/regulatory-reset-2025-usa-crypto-policy|2025 reset]]) and from the **OCC supervisor pathway** ([[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|trust-bank charter]] and [[fintech/occ-bank-charter-crypto-2025|2025 OCC charter]]). Treasury sets the **reserve, redemption, and run-risk policy parameters** but does not directly charter or supervise issuers; the **President's Working Group** is the inter-agency coordination forum where those parameters are negotiated. This entry captures **what Treasury actually published**, the **reserve-composition rationale** that influenced the §4(d) reserve-asset list in GENIUS, and the **federal-state coordination** mechanism that resolves jurisdictional overlap between the OCC, Federal Reserve, and state regulators.

## The President's Working Group on Digital Asset Markets

The President's Working Group on Financial Markets (PWG) was established by Executive Order in 1988 under President Reagan, originally to address concerns following the October 1987 stock-market crash. Its **digital-asset extension** existed in earlier forms (the 2021 PWG Report on Stablecoins; the 2022 inter-agency framework). **EO 14178** (January 23 2025) re-chartered the group as the **President's Working Group on Digital Asset Markets (PWG-DAM)** with a more specific composition and a 180-day deliverable timeline.

### Composition and chair

| Role | Holder |
|---|---|
| Chair | White House AI & Crypto Czar (David Sacks) |
| Treasury | Secretary of the Treasury |
| SEC | Chair (Paul Atkins) |
| CFTC | Chair |
| OCC | Comptroller of the Currency |
| Federal Reserve | Chair of the Board of Governors |
| FDIC | Chair |
| Commerce | Secretary of Commerce |
| FinCEN | Director |
| OFAC | Director (via Treasury) |
| Attorney General | Justice Department representation |

The composition is **explicitly broader** than the historical PWG (which centered on Treasury, Federal Reserve, SEC, CFTC) and reflects the **multi-agency coordination need** for stablecoins, sanctions, AML/CFT, banking, and securities/commodities oversight all to converge.

### Initial recommendations (delivered 2025-Q3)

The PWG-DAM's first formal output (delivered within the 180-day EO 14178 window) covered six areas:

1. **Issuer eligibility framework** — dual-track federal and state, with a federal floor.
2. **Reserve composition** — limited to cash, demand deposits at insured depositories, ≤93-day Treasury bills, and reverse-repo backed by Treasuries.
3. **Redemption guarantee** — T+1 at par, with liquidity buffers.
4. **Run-risk mitigation** — daily reserve transparency, monthly attestation, liquidity stress testing.
5. **Inter-agency coordination protocol** — supervisory information sharing across OCC, Federal Reserve, FDIC, state regulators.
6. **Cross-border framework** — MRA-style mutual recognition with EU MiCA, UK FCA, Japan FSA, Hong Kong HKMA, Singapore MAS as priority jurisdictions.

The reserve-composition recommendation flowed **directly into GENIUS §4(d)** statutory text; the redemption-guarantee recommendation flowed into GENIUS §4(e); the run-risk recommendations were codified through OCC, Federal Reserve, and FDIC implementing rules under GENIUS §6.

## Federal-state dual-track architecture

The GENIUS Act establishes a **dual-track** structure rather than the EU MiCA single-passport approach:

| Track | Regulator | Scope | Circulation ceiling | Capital floor |
|---|---|---|---|---|
| Federal (OCC) | OCC | National payment stablecoin issuer charter | Unlimited | ~$50M tier-1 floor (OCC discretion) |
| Federal (Federal Reserve) | Federal Reserve Board | Bank holding company subsidiary issuer | Tied to BHC structure | Per BHC framework |
| State | Primary state regulator + secondary federal review | State-qualified payment stablecoin issuer | $10 billion outstanding | Set by state regulator, with federal floor |

The **federal floor** comprises:

- the §4(d) reserve-composition list;
- the §4(e) T+1 par redemption requirement;
- the §501 denylist mandate;
- the §6 supervisory floor (capital, liquidity, governance);
- the §7 attestation and transparency requirements.

State regulators **may** impose additional consumer protections, capital cushions, or operational requirements, but **may not** relax the federal floor. When a state-qualified issuer exceeds the **$10 billion outstanding** ceiling, it must either transition to a federal charter or restrict issuance.

This structure is influenced by the **dual banking system** that has existed since the 1860s and is operationally similar to the **state-vs-federal trust bank** distinction visible in [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]. The choice of **dual-track over single-passport** reflects:

- the existing US dual banking precedent;
- the political constituency of state regulators (NYDFS, California DFPI, Texas Department of Banking) who would have opposed a single-federal-passport regime;
- the desire to preserve **state-level innovation experiments** (Wyoming SPDI, Nebraska digital-asset depositories, Utah industrial banks).

For the parallel state-banking compliance map see [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer system]].

## Reserve composition · T-bill requirement and rationale

The §4(d) reserve-asset list is intentionally narrow:

| Permitted reserve asset | Rationale |
|---|---|
| US currency | Zero credit risk, perfect par |
| Demand deposits at insured depository | Backed by FDIC up to insurance limit; bankruptcy-remote at higher amounts |
| Treasury bills, ≤93-day maturity | Sovereign credit + short duration = minimal price risk in stress |
| Reverse-repo backed by Treasuries | Collateralized, daily liquidity, used by money-market funds for analogous purpose |

**Excluded** from the permitted list:

- **Longer-dated Treasuries** (>93 days) — to avoid the **duration-loss** episode that contributed to the SVB collapse and the March 2023 USDC depeg.
- **Corporate paper** (commercial paper, corporate bonds) — to avoid the **credit-risk** spectrum that materialized in Tether's pre-2023 reserve composition (see [[fintech/tether-business-model-short-treasury-yield|Tether business model]]).
- **Crypto collateral** (BTC, ETH, other stablecoins) — to avoid **wrong-way risk** (the SC depegs when crypto markets stress).
- **Money-market fund shares** — formally excluded; tokenized MMF shares such as [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] are **not** permitted reserves at present, although the framework leaves room for future inclusion.

The **93-day maturity ceiling** is calibrated to:

1. Match the **SEC Rule 2a-7** definition of "weighted-average maturity" eligible assets for government money-market funds.
2. Ensure reserve assets can be liquidated within the **T+1 redemption window** at minimal price impact.
3. Provide a margin of safety against a Federal Reserve rate-shock scenario (a 100bp move on a 93-day bill produces ~0.25% mark-to-market loss, recoverable within 90 days).

For the broader reserve-asset flywheel dynamics see [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] and the risk-case analysis in [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]].

### Permitted-reserve-asset comparison · GENIUS vs MiCA vs Japan EPI

| Regime | Cash | Demand deposits | ≤93-day Treasuries | Longer Treasuries | MMF shares | Corporate paper | Crypto |
|---|---|---|---|---|---|---|---|
| US GENIUS | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| EU MiCA (EMT) | ✓ | ✓ (≤60% if non-systemic, ≤30% if significant) | ✓ | Limited | Limited | ✗ | ✗ |
| Japan EPI (trust type) | ✓ | ✓ | ✓ | Limited | ✗ | ✗ | ✗ |
| Japan EPI (bank type) | Per bank prudential | | | | | | |
| HK Stablecoin Ord. | ✓ | ✓ | ✓ | Limited | ✗ | ✗ | ✗ |
| MAS SCS | ✓ | ✓ | ✓ | Limited | ✗ | ✗ | ✗ |

The **convergence** across the five poles is striking: all five permit cash, demand deposits, and short Treasuries; all five exclude crypto collateral and corporate paper; all five restrict longer-duration paper. The **divergence** is in MiCA's deposit-concentration limits (a response to the SVB / USDC episode that hit Europe second-hand) and in Japan's bank-prudential overlay. For the full cross-walk see [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]].

## Redemption guarantee · T+1 at par

GENIUS §4(e) requires **redemption at par within T+1** for any holder presenting tokens to the issuer. The Treasury framework operationalizes this through:

| Requirement | Detail |
|---|---|
| **Par redemption** | Issuer must redeem at 1:1 face value, regardless of secondary-market price |
| **T+1 settlement** | Funds must reach the holder's account by close of the next business day after the redemption request |
| **Minimum threshold** | Issuers may set reasonable minimum redemption sizes (typical: $100,000 wholesale tier; $1 retail tier) |
| **KYC gating** | Redemption may be conditioned on the holder satisfying KYC requirements |
| **Liquidity buffer** | Issuer must hold a buffer (typical: 5–10% of circulating supply) immediately convertible to cash for routine redemptions |

The **buffer requirement** is the most important technical sub-rule. It addresses the **March 2023 USDC episode** in which Circle's $3.3B exposure to Silicon Valley Bank deposits became frozen over a weekend, producing a sharp depeg in USDC before Federal Reserve / Treasury / FDIC announced the bank-deposit guarantee on Monday. Under the new framework, an issuer with comparable concentration in a single uninsured depository would face supervisory action.

### Run-risk mitigation

The Treasury framework treats the stablecoin **as a quasi-money-market-fund** for run-risk purposes and applies several MMF-style mitigations:

1. **Diversification requirement.** Reserve assets must be diversified across at least three counterparties or issuers (Treasuries, depositories) to avoid single-point-of-failure exposure.
2. **Daily reserve disclosure.** Issuers publish a daily reserve composition snapshot (already standard for Circle USDC; new mandate for less-transparent issuers).
3. **Monthly attestation.** A registered public accounting firm attests to the reserve composition and segregation at month-end.
4. **Liquidity stress testing.** Issuers conduct quarterly stress tests against scenarios such as (a) 20% redemption in a single day, (b) 50% redemption in a week, (c) failure of one of the top three depository counterparties.
5. **Recovery and resolution planning.** Issuers above a threshold (~$10B outstanding) submit living-will-style plans for orderly wind-down.
6. **Liquidity-buffer minimum.** A statutory 5% same-day liquidity floor for retail-facing issuers.

These provisions explicitly draw on **lessons from SVB / USDC March 2023** and from the **money-market reform** track post-2008 and post-2020. The conceptual ancestry is the Securities and Exchange Commission's 2010 and 2014 reforms of Rule 2a-7 governing MMFs.

For the parallel circular-reserve-flywheel risk surface see [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]].

## Treasury vs Federal Reserve vs OCC · who does what

A common point of confusion is whether **Treasury, the Federal Reserve, or the OCC** charter a payment stablecoin issuer. The answer differs by track:

| Track | Charter authority | Primary supervisor | Resolution authority | Reserve custodian |
|---|---|---|---|---|
| OCC national PPSI charter | OCC | OCC | FDIC (for insured deposit liabilities) + OCC | Depository or Fed master account |
| Federal Reserve BHC subsidiary | Federal Reserve | Federal Reserve | FDIC (insured) + Federal Reserve | Per BHC framework |
| State PPSI charter | State regulator + secondary federal review | State + secondary federal | State + FDIC (insured) | Depository or Fed master account if eligible |

**Treasury** in this map is **policy coordinator** (via PWG-DAM), **OFAC sanction authority**, **AML/CFT policy** (via FinCEN), and **fiscal interface** (Treasury cash management as the issuer of the underlying Treasury bills that fill stablecoin reserves). Treasury **does not charter or directly supervise** PPSI issuers.

This separation is the same separation that governs **money-market funds** (SEC charters/supervises, Treasury sets sovereign-debt issuance policy, Federal Reserve operates discount window) and is mirrored in the digital-asset stack. For the comparative trust-bank-charter analysis see [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]].

## Treasury's stablecoin-as-Treasury-buyer thesis

Treasury's interest in the framework extends beyond consumer-protection policy. The **reserve-composition rules effectively turn the stablecoin industry into a Treasury-bill buyer at scale**:

| Issuer category | Estimated outstanding (2026-Q1) | Estimated T-bill demand created |
|---|---|---|
| Tether (USDT) | ~$120B | ~$80B in T-bills (per public attestation; non-PPSI internationally) |
| Circle (USDC) | ~$45B | ~$30B in T-bills |
| Paxos (USDG, USDP, BUSD legacy) | ~$5B | ~$4B in T-bills |
| PayPal (PYUSD) | ~$1B | ~$0.8B in T-bills |
| Other | ~$10B | ~$7B in T-bills |
| **Total stablecoin sector** | **~$180B** | **~$120B in T-bills** |

At ~$120B today (and on plausible growth paths reaching $400B–$1T over the next 5–7 years), the stablecoin sector becomes a **structural new buyer of short-dated Treasury debt** — comparable in size to a single foreign central bank's reserve allocation. This dynamic underwrites Treasury's policy interest in **growing rather than constraining** the regulated stablecoin sector, subject to consumer-protection guardrails. The **circular-reserve flywheel** dynamic (issuance grows → T-bill demand grows → yield earns → reserves grow → more issuance) is documented at length in [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] and contrasted with risk in [[fintech/circular-reserve-asset-flywheel-risk-cases|risk cases]].

## International coordination · MRAs and Treasury bilateral channels

Treasury's PWG-DAM recommendations include a **bilateral mutual-recognition agreement (MRA)** track for priority jurisdictions:

| Counterparty | Status (Q1 2026) | Lead Treasury contact |
|---|---|---|
| EU (Commission + EBA) | Framework MOU under negotiation | Treasury international office + State Department |
| UK FCA + HM Treasury | Bilateral discussions active | UK-US dialogue |
| Japan FSA | Standing channel active (post-SBI/Circle JPYC route) | Treasury Asia office |
| Hong Kong HKMA | Discussions opening (post-Stablecoin Ordinance) | Limited |
| Singapore MAS | Discussions active | Treasury Asia office |
| Canada OSFI | Early-stage | Limited |
| Switzerland FINMA | Existing channel re: bank-secrecy framework | Active |

The MRA track is the **international counterpart** to the federal-state dual-track domestically: rather than requiring foreign issuers to obtain a US PPSI license to access US markets, an MRA allows recognition of comparable foreign frameworks (subject to §501 equivalent compliance). For the three-circle MRA framework that pre-dated this policy work see [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]] and [[fintech/three-circles-mra-2030-economic-scale|three circles MRA 2030 scale]].

## Implementation timeline

| Date | Action |
|---|---|
| 2025-01-23 | EO 14178 re-charters PWG-DAM with 180-day deliverable |
| 2025-04 | PWG-DAM working-group structure operational |
| 2025-07-18 | GENIUS Act signed into law |
| 2025-Q3 | PWG-DAM initial recommendations published |
| 2025-Q4 | OCC notice of proposed rulemaking on PPSI charter |
| 2026-Q1 | Federal Reserve, FDIC, and OCC joint final rule on reserve composition and supervision |
| 2026-Q2 | FinCEN reporting standards finalized |
| 2026-Q2 expected | First federal PPSI charters issued under final rule |
| 2026-H2 expected | First MRA bilateral with EU finalized |

For the surrounding policy environment see [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]].

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 mandate]]
- [[fintech/genius-act-501-actual-implementation|GENIUS §501 actual implementation]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC jurisdiction]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|EU MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## Sources

- Treasury digital assets policy: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- Treasury press releases: https://home.treasury.gov/news/press-releases
- President's Working Group on Financial Markets: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/presidents-working-group-on-financial-markets
- FinCEN news: https://www.fincen.gov/news-room
- Federal Reserve press releases: https://www.federalreserve.gov/newsevents/pressreleases.htm
- OCC news and issuances: https://occ.treas.gov/news-issuances/
- White House EO 14178: https://www.whitehouse.gov/presidential-actions/
- GENIUS Act statutory text (Public Law as enacted July 2025)
- Federal Register filings on implementing rules: https://www.federalregister.gov/
- PWG 2021 Report on Stablecoins (predecessor document): https://home.treasury.gov/system/files/136/StableCoinReport_Nov1_508.pdf

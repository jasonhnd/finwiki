---
source: fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage
source_hash: 88d7582b00ca3d1a
lang: en
model: claude-haiku-cli-protected
status: machine
fidelity: ok
title: "OCC National Trust Bank Route · Bridge's Preliminary Conditional Approval"
translated_at: 2026-07-30T00:00:00+09:00
---
# OCC National Trust Bank Route · Bridge's Preliminary Conditional Approval


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japanese Financial Regulation — Legal System for Tokens, Cryptocurrency, and Payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japanese Stablecoin Legal System Three-Layer Structure (JPYC, USDC, Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> On 2026-02-12, OCC Corporate Decision 1365 granted **preliminary conditional approval** to the proposed Bridge National Trust Bank. This is not a final charter or operating permit. The OCC explicitly states that it will not grant final approval until pre-opening requirements are met, and Bridge cannot commence banking business until that point. The decision records the proposed activities—stablecoin issuance, custody, orchestration, reserve management, and collateral-trustee services—along with detailed conditions, but does not establish that MTLs in all 50 states become uniformly unnecessary, that Bridge has direct Federal Reserve master-account / Fedwire / FedNow connectivity, or that any valuation premium is warranted. ^[source:OCC Corporate Decision 1365, 2026-02-12]

## Bridge Decision's Verifiable Status

| Item | Content Recorded in OCC Decision | Evidence Boundary |
|---|---|---|
| Approval Stage | Preliminary conditional approval | Not final approval or operating authorization |
| Proposed Owner | Wholly owned subsidiary of Bridge Ventures LLC. Bridge Ventures is a wholly owned subsidiary of Stripe. | Parent company relationships do not eliminate approval conditions or individual entity obligations |
| Proposed Activities | USD stablecoin issuance, digital-asset custody, orchestration, reserve management, collateral trustee | This is a proposed plan and does not mean the bank is currently providing all of these services |
| Charter Scope | Trust-company operations and activities related thereto | Not identical to a full-service insured depository bank |
| GENIUS Act | Activities must conform, cease, or be divested as necessary to comply with the Act and implementing rules | Conditional approval is not a blanket exemption from later rules |
| Opening Gate | Pre-opening examination and final OCC approval required | OCC can modify, suspend, or rescind before final approval |

Source note: all rows come from [OCC Corporate Decision 1365](https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/2026/cd1365.pdf), especially pages 1-2, 8-13.

## Material conditions

- Minimum **USD 45 million** tier 1 capital.
- The greater of at least 50% of tier 1 capital or **USD 27.5 million** must be held in Eligible Liquid Assets.
- A separate 180 days of operating expenses must be maintained in Eligible Liquid Assets.
- Significant business-plan changes require advance notice and an OCC written non-objection.
- The bank must not meet the Bank Holding Company Act section 2(c)(1)-(2) definition of "bank".
- If capital is not raised within 12 months or the bank does not open within 18 months, the preliminary approval expires absent exceptional relief.

These are the Bridge-specific public conditions in the decision. They replace the prior unsourced route estimates of USD 5-20 million capital, generic 12-24 month timing, and state-by-state cost savings.

## State MTL pre-emption: fact-specific, not blanket

OCC Interpretive Letter 1167 concluded that a national bank performing the described federally authorized **fiduciary** activities did not need state money-transmitter licenses for those activities. The letter expressly says that different facts, laws, or regulations could produce a different result. Bridge's decision includes fiduciary and non-fiduciary proposed activities. Therefore, the letter supports a legal route for specified fiduciary powers; it does not establish that every stablecoin, orchestration, affiliate, or non-bank activity is exempt from every state requirement. ^[source:OCC Interpretive Letter 1167, 2020-05-20]

## Federal Reserve and payment-system boundary

The OCC decision says Bridge National Trust Bank will apply for Federal Reserve Bank stock under 12 USC 222. It does **not** state that Bridge has a Federal Reserve master account or direct Fedwire / FedNow access. Federal Reserve materials describe Fedwire participation through an account relationship and applicable agreements; eligibility and access should be verified from Federal Reserve records rather than inferred from the OCC charter stage. ^[source:OCC Corporate Decision 1365; Federal Reserve Fedwire assessment]

## Verified timeline

| Date | Public record |
|---|---|
| 2025 | OCC control numbers identify the de novo charter and waiver applications |
| 2026-02-12 | OCC granted preliminary conditional approval in Corporate Decision 1365 |
| Before opening | Capital, governance, systems, compliance, pre-opening examination, and other requirements must be completed |
| Within 18 months of preliminary approval | Bank must open or the approval expires, absent the limited extension circumstances stated by OCC |

Source note: [Corporate Decision 1365](https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/2026/cd1365.pdf) is the controlling point-in-time source; the OCC [Interpretations & Decisions index](https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/index-interpretations-and-decisions.html) should be checked for a later final decision.

## Comparison checklist

Any comparison with a state MTL, NYDFS trust/BitLicense, industrial bank, credit union, or offshore e-money route should use the applicant's actual activities and report separately:

- legal entity and regulator;
- preliminary, conditional, final, and operating status;
- activity-specific state-law pre-emption analysis;
- capital and liquidity conditions;
- deposit-insurance status;
- Federal Reserve account and payment-system status;
- elapsed application time and disclosed cost.

This page does not supply cross-route cost, time, or valuation rankings because the cited official sources do not provide a comparable dataset.

SEC / CFTC jurisdiction background is in [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC Cryptocurrency Jurisdiction Dispute]]. Cross-jurisdiction license comparisons belong in [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP Regulatory Comparison Matrix]], with status and activity scope kept separate.


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/regulatory-window-strategic-acquisition|Strategic Acquisitions Ahead of Regulatory Window]]
<!-- /wiki-links:managed -->

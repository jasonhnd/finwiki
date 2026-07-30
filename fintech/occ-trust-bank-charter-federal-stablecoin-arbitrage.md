---
title: OCC national trust bank route · Bridge の preliminary conditional approval
aliases: [OCC trust bank stablecoin, Bridge OCC conditional, federal stablecoin charter arbitrage]
domain: fintech
kind: knowledge
topic: occ-trust-bank-charter-federal-stablecoin-arbitrage
created: 2026-05-16
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-08-08
confidence: certain
tags: [fintech, regulation, stablecoin, occ, charter, bridge, mtl, fedwire]
status: active
sources:
  - https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/2026/cd1365.pdf
  - https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/index-interpretations-and-decisions.html
  - https://www.occ.gov/topics/charters-and-licensing/interpretations-and-actions/2020/int1167.pdf
  - https://www.federalreserve.gov/paymentsystems/fedfunds_coreprinciples.htm
---

# OCC national trust bank route · Bridge の preliminary conditional approval


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> OCC Corporate Decision 1365 は、2026-02-12 に proposed Bridge National Trust Bank へ **preliminary conditional approval** を与えた。これは final charter や営業開始許可ではない。OCC は、pre-opening requirements が満たされるまで final approval を与えず、Bridge はそれまで banking business を開始できないと明記する。決定書は stablecoin issuance、custody、orchestration、reserve management、collateral-trustee services という proposed activities と詳細な条件を記載するが、50 州すべての MTL が一律不要になること、Federal Reserve master account / Fedwire / FedNow へ直接接続できること、または valuation premium を保証しない。^[source:OCC Corporate Decision 1365, 2026-02-12]

## Bridge decision の確認可能な status

| 項目 | OCC decision が記載する内容 | 証拠境界 |
|---|---|---|
| Approval stage | Preliminary conditional approval | Final approval でも営業開始許可でもない |
| Proposed owner | Bridge Ventures LLC の wholly owned subsidiary。Bridge Ventures は Stripe の wholly owned subsidiary | 親会社関係は許可条件や個別 entity の義務を消さない |
| Proposed activities | USD stablecoin issuance、digital-asset custody、orchestration、reserve management、collateral trustee | Proposed plan であり、現在すべてを提供中という意味ではない |
| Charter scope | Trust-company operations and activities related thereto | Full-service insured depository bank と同一ではない |
| GENIUS Act | Activities must conform, cease, or be divested as necessary to comply with the Act and implementing rules | Conditional approval is not a blanket exemption from later rules |
| Opening gate | Pre-opening examination and final OCC approval required | OCC can modify, suspend, or rescind before final approval |

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

OCC Interpretive Letter 1167 concluded that a national bank performing the described federally authorised **fiduciary** activities did not need state money-transmitter licences for those activities. The letter expressly says that different facts, laws, or regulations could produce a different result. Bridge's decision includes fiduciary and non-fiduciary proposed activities. Therefore, the letter supports a legal route for specified fiduciary powers; it does not establish that every stablecoin, orchestration, affiliate, or non-bank activity is exempt from every state requirement. ^[source:OCC Interpretive Letter 1167, 2020-05-20]

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

SEC / CFTC jurisdiction background is in [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC 暗号管轄争い]]. Cross-jurisdiction licence comparisons belong in [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]], with status and activity scope kept separate.


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前戦略買収]]
<!-- /wiki-links:managed -->

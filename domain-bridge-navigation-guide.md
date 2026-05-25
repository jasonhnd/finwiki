---
title: Domain Bridge Navigation Guide · FinWiki 跨领域阅读路径指南
aliases:
  - domain-bridge-navigation-guide
  - domain-bridge-guide
  - reader-navigation-guide
  - cross-domain-reading-paths
domain: control-bridge
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags: [meta, navigation, reader-guide, cross-domain, journeys]
status: active
sources:
  - INDEX.md (FinWiki domain map and current entry counts)
  - SCHEMA.md (body-link rule and routing convention)
  - Example entries cited inline (stablecoin / banking / payments / JapanFG / insurance / securities clusters)
---

# Domain Bridge Navigation Guide · FinWiki 跨领域阅读路径指南

## Wiki route

This guide sits at FinWiki root next to [[INDEX|INDEX]] and [[SCHEMA|SCHEMA]]. Read it together with [[cross-domain-anchor-convention|cross-domain anchor convention]] for the page-design side and [[topic-cluster-reference|topic cluster reference]] for the cluster-level groupings. The 23-domain map is in [[INDEX]].

> [!info] TL;DR
> Most FinWiki entries make sense only as part of a path. A stablecoin issuer is meaningful when read **alongside** the macro regulatory tracker that bounds it, **alongside** the bank-side perimeter that consumes it, **alongside** the payments-license stack that competes with it. This guide collects 14 concrete reader journeys that bridge domains and tells you which page is the natural next step from each anchor.

## 1. How to use this guide

Each journey below is a numbered path. The arrow notation means **"if you are reading X, the most useful next entry across the domain bridge is Y"**. Most journeys cross 2-4 domains and end at a routing surface (`domain/INDEX`) so you can branch into peers on your own.

The journeys are not exhaustive. They are starting templates for the most common reader patterns surfaced during waves 1-9 of FinWiki construction.

## 2. Journey 1 — Stablecoin issuer · global product to Japan perimeter

1. Start: [[fintech/circle-usdc-stablecoin|Circle USDC]] (fintech issuer anchor).
2. Macro frame: [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the US regulatory bound that defines what a "compliant stablecoin" is.
3. Comparative peers: [[fintech/tether-business-model-short-treasury-yield|Tether USDT 经济学]] and [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] for white-circle / grey-circle / payments-app contrast.
4. Japan-side perimeter: [[banking/japan-stablecoin-bank-perimeter-2025|Japan stablecoin bank perimeter 2025]] (banking domain).
5. Payments stack consumption: [[payments/INDEX|payments index]] for clearing, acquiring, BNPL, prepaid integration.
6. Routing surface: [[fintech/INDEX|fintech index]] for peer issuers and adjacent stablecoin entries.

## 3. Journey 2 — MiCA reader path

1. Start: [[fintech/mica-overview|MiCA overview]].
2. Implementation status: [[fintech/eu-mica-implementation-status-2026|EU MiCA implementation status 2026]].
3. Sub-category mechanics: [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT / ART deep dive]].
4. Cross-border effects: [[fintech/mica-cross-border-implications|MiCA cross-border implications]].
5. Comparative anchor: [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]] and [[fintech/singapore-mas-payment-services-act-overview|MAS PSA overview]] for the Asia-side benchmark.
6. Routing surface: [[fintech/INDEX]] for the full macro-tracking cluster.

## 4. Journey 3 — Foreign bank in Japan · bank to capital markets to product

1. Start: [[JapanFG/jpmorgan-japan|JPMorgan Japan]] (JapanFG anchor for foreign-bank Japan structure).
2. Peer / contrast: [[JapanFG/INDEX|JapanFG index]] for [[goldman-sachs-japan]], [[morgan-stanley-japan]], and other foreign IB anchors.
3. Banking-system frame: [[banking/INDEX|banking index]] and [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison]] for the megabank / regional / foreign-branch / shinkin / rōkin perimeter.
4. Tokenized-money product: [[fintech/jpmorgan-jpmd-coin|JPMD coin]] and [[fintech/jpm-onyx-wholesale-network|JPM Onyx wholesale network]] for the fintech-side product story.
5. Strategic narrative: [[business/jamie-dimon-anti-crypto-pivot-case|Jamie Dimon anti-crypto pivot case]] for the public-figure / public-company arc.

## 5. Journey 4 — EPI and account-to-account in Europe and Japan

1. Start: [[fintech/european-payments-initiative-wero|EPI Wero]] (fintech anchor for European Payments Initiative).
2. Comparison page: [[fintech/japan-epi-four-camps-comparison|Japan EPI four-camp comparison]] and [[fintech/japan-epi-three-types-overview|Japan EPI three-types overview]] for the Japan-side analog.
3. Account-to-account rail: [[payments/account-to-account-payment-japan|account-to-account payment (Japan)]] and [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank Pay account-direct acquiring]].
4. Bank API perimeter: [[payments/japan-bank-api-payment-agency-route|Japan bank API payment-agency route]] plus [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud control]].
5. Routing surface: [[payments/INDEX|payments index]].

## 6. Journey 5 — Stablecoin bedrock · fintech to bank perimeter to payments license

1. Start: [[fintech/circle-usdc-stablecoin|Circle USDC]] or [[fintech/tether-business-model-short-treasury-yield|Tether economics]].
2. Bedrock / theory layer: [[fintech/circular-reserve-asset-flywheel-overview|circular reserve-asset flywheel]] and [[fintech/cross-border-sc-via-swift-api|cross-border stablecoin via SWIFT API]].
3. Japan bank-perimeter handoff: [[banking/japan-stablecoin-bank-perimeter-2025|Japan stablecoin bank perimeter 2025]].
4. Payments license consumption: [[payments/funds-transfer-service-providers-japan-index|funds-transfer service-provider index]] and [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer index]].
5. Routing surfaces: [[fintech/INDEX]] → [[banking/INDEX]] → [[payments/INDEX]].

## 7. Journey 6 — Japan capital-markets stack from securities to derivatives

1. Start: [[securities/INDEX|securities index]] for NISA, IPO, FIEA operators, best-execution / SOR / PTS.
2. Settlement infrastructure: [[banking/jasdec-settlement-operations|JASDEC settlement operations]] and [[banking/custody-bank-operating-model|custody bank operating model]].
3. Derivatives bridge: [[derivatives/INDEX|derivatives index]] for IRS / OIS / JGB futures, FX (cross-currency basis / FX options), credit (CDS / structured bond / EB knock-in), and equity volatility (JPX-VI).
4. Money-market context: [[money-market/INDEX|money-market index]] for call markets, JGB repo / securities financing, BoJ operations.
5. Structured finance bridge: [[structured-finance/INDEX|structured-finance index]] for ABS / CLO / SPV vehicles (TK / GK / TMK) / rating methodology.

## 8. Journey 7 — Insurance · product to operator to solvency frame

1. Start: an operating-company page, e.g. [[insurance/saison-automobile-fire|Saison Automobile & Fire]] or [[insurance/japan-life-insurance-big-four|Japan life-insurance big four]].
2. Channel / distribution context: [[insurance/japan-bancassurance-distribution-overlay-matrix|Japan bancassurance distribution overlay]] and [[insurance/insurance-agency-and-brokerage-japan|insurance agency / brokerage in Japan]].
3. Solvency frame: [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison]] (FSA ESR / IAIS ICS / Solvency II / US RBC) and [[insurance/economic-value-based-solvency|economic-value-based solvency]].
4. JapanFG mirror: [[JapanFG/saison-automobile-fire-insurance|JapanFG Saison Automobile & Fire mirror]] and the broader [[JapanFG/INDEX|JapanFG index]] for the operating-company catalog.
5. Mirror-page rationale: [[entity-mirror-page-policy]].

## 9. Journey 8 — Public-figure strategic narrative · business domain bridge

1. Start: [[business/INDEX|business index]] for the public-figure / public-company case catalog.
2. Examples: [[business/jamie-dimon-anti-crypto-pivot-case|Jamie Dimon pivot]], [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock template]], [[business/brian-armstrong-coinbase-public-company-template|Brian Armstrong Coinbase template]], [[business/cz-binance-founder-handoff-case|CZ Binance founder handoff]].
3. Operating-company bridges: BlackRock → [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL tokenized MMF]]; Coinbase → exchanges/ entries; JPM → [[JapanFG/jpmorgan-japan]] and [[fintech/jpm-onyx-wholesale-network]].
4. Topic-cluster index: [[topic-cluster-reference]].

## 10. Journey 9 — Japan policy / banking interface

1. Start: [[policy-finance/INDEX|policy-finance index]] for JBIC, JICA, NEXI, JOGMEC, JASSO, JHF, JFC, SME / agriculture credit guarantees.
2. Banking-system bridge: [[banking/INDEX|banking index]] (megabank, regional, net bank, cooperative, BaaS, trust-bank, custody).
3. JapanFG bridge: [[JapanFG/INDEX|JapanFG index]] for the operating-company catalog at the bank, trust-bank, securities, asset-manager, and insurer level.
4. Real-estate-finance bridge: [[real-estate-finance/INDEX|real-estate-finance index]] for J-REIT, CMBS / RMBS, GK-TK SPV, JHF MBS handoff.

## 11. Journey 10 — Payments license stack reader path

1. Start: [[payments/INDEX|payments index]] (or [[payments/japan-payment-scheme-economics-matrix|payment scheme economics matrix]]).
2. License perimeter: [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] and the four operator-registry pages ([[payments/funds-transfer-service-providers-japan-index]], [[payments/prepaid-payment-instrument-issuers-japan-index]], [[payments/credit-purchase-card-operators-japan-index]], [[payments/japan-bnpl-pay-later-operator-registry-matrix]]).
3. Card stack: [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] and [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant-fee stack]].
4. Risk / fraud: [[payments/japan-card-security-authentication-controls|card security and authentication controls]], [[payments/japan-payment-fraud-incident-timeline-2023-2025|fraud-incident timeline 2023-2025]], [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]].
5. Cross-domain bridge: stablecoin-side [[fintech/INDEX|fintech index]] for tokenized-money rails replacing card rails.

## 12. Journey 11 — Trust bank and custody · banking deep dive

1. Start: [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]].
2. Operating model: [[banking/master-trust-bank-operating-model|master trust bank operating model]] and [[banking/custody-bank-operating-model|custody bank operating model]].
3. Comparison matrices: [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian]] and [[banking/trust-bank-fee-structure-comparison|trust bank fee-structure comparison]].
4. JapanFG operating entities: [[JapanFG/INDEX|JapanFG index]] for the specialty trust-bank registry and the SMTB / MUTB / Mizuho Trust anchors.
5. Securities / pension bridge: [[banking/pension-trust-mandate-allocation-japan|pension trust mandate allocation]] and [[securities/INDEX|securities index]].

## 13. Journey 12 — CBDC reader path

1. Start: [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]].
2. Tradeoffs: [[fintech/cbdc-multi-tier-architecture-tradeoffs|tradeoffs]] and [[fintech/cbdc-multi-tier-architecture-three-paradigms|three paradigms]].
3. Adoption: [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|adoption curve China / Japan / EU / India 2026]].
4. National pilots: [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]], [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]], [[fintech/erupee-india-pilot-status|India eRupee]], [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]], [[fintech/brazil-drex-timeline-2026|Brazil Drex]].
5. Multi-CBDC bridges: [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC]] and [[fintech/bis-project-agora-overview|BIS Project Agora]].

## 14. Journey 13 — Securities micro-structure reader path

1. Start: [[securities/INDEX|securities index]].
2. Best execution / venue: best-execution / SOR / PTS pages and [[exchanges/INDEX|exchanges index]] for venue context.
3. Underwriting and disclosure: IPO listing-disclosure entries, JSDA pages.
4. Stock loan / short-selling: margin-trading and short-selling control pages within `securities/`.
5. Clearing / settlement: [[banking/jasdec-settlement-operations|JASDEC settlement]] and central counterparty pages within `derivatives/`.

## 15. Journey 14 — Agent economy and embedded wallets

1. Start: [[agent-economy/INDEX|agent-economy index]] for AI-agent payment protocols and embedded-wallet infrastructure.
2. Fintech bridge: [[fintech/embedded-wallet-fintech-disintermediation-overview|embedded wallet fintech disintermediation]] and [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe trojan horse case]].
3. Payments bridge: [[payments/INDEX|payments index]] for the wallet-vs-card-rail tension.
4. Systems bridge: [[systems/INDEX|systems index]] for the account-abstraction and validator-economics substrate that underpins agent payments.

## 16. Anti-pattern: starting from the wrong page

Common reader anti-patterns and the fix:

- **Reading a single operator page in isolation.** If you read only [[JapanFG/jpmorgan-japan]], you miss the full JPM cross-product story. Always step out to at least one cross-domain reference.
- **Reading only macro pages.** If you read only [[fintech/mica-overview]], you miss the operator-level reality (issuers, banks, payments-license consumers). Drill down via Journey 5.
- **Skipping routing surfaces.** Domain `INDEX.md` files are not decoration; they are the only place where the full set of peers is enumerated. Always end (or restart) at a routing surface.

## Related

- [[INDEX]] — FinWiki domain map and entry counts.
- [[SCHEMA]] — frontmatter and body-link convention.
- [[cross-domain-anchor-convention]] — how cross-domain entities are anchored.
- [[entity-mirror-page-policy]] — when parallel pages in 2-3 domains are justified.
- [[topic-cluster-reference]] — thematic cluster groupings across domains.
- [[frontmatter-canonical-anchor-field-proposal]] — proposed machine-readable canonical-anchor field.

## Sources

- [[INDEX]] — 23-domain map and current entry counts (1347+ entries, 2026-05-25).
- [[SCHEMA]] — body-link requirement.
- Example entries cited in the journeys above (Circle USDC, MiCA tracker pages, JPMorgan Japan + JPMD + Onyx, Saison Automobile & Fire mirrors, Japan EPI cluster, payments registries, JASDEC and trust-bank cluster, CBDC pilots, agent-economy cluster).

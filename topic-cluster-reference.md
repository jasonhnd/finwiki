---
title: Topic Cluster Reference · FinWiki 主题集群索引
aliases:
  - topic-cluster-reference
  - topic-cluster-index
  - thematic-cluster-reference
  - cross-domain-clusters
domain: control-cluster
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags: [meta, navigation, cluster-index, cross-domain, thematic]
status: active
sources:
  - INDEX.md (FinWiki domain map and current entry counts)
  - SCHEMA.md (body-link rule and routing convention)
  - Wave-by-wave commit history (waves 1-9 thematic batches in the FinWiki repo)
  - Example entries cited inline (see ## Sources)
---

# Topic Cluster Reference · FinWiki 主题集群索引

## Wiki route

This reference sits at FinWiki root next to [[INDEX|INDEX]] and [[SCHEMA|SCHEMA]]. Read it together with [[domain-bridge-navigation-guide|domain bridge navigation guide]] for the journey view and [[cross-domain-anchor-convention|cross-domain anchor convention]] for the anchor / mirror rules.

> [!info] TL;DR
> FinWiki's 1347+ entries cluster naturally into ~14 thematic groups that cross domain boundaries. The directory-based domain map ([[INDEX]]) tells you **where a page lives**; this reference tells you **what cluster a page belongs to** and where the rest of its cluster lives. Use this when you want the full peer set of a topic, not just the single domain's view.

## 1. Why clusters matter

The 23-domain directory map is correct but coarse. A "Japan stablecoin" reader needs entries from `fintech/`, `banking/`, `payments/`, and `JapanFG/` simultaneously. A "Japan capital markets" reader needs entries from `securities/`, `derivatives/`, `money-market/`, `structured-finance/`, and `real-estate-finance/` simultaneously. Cluster groupings expose those cross-domain peer sets.

Each cluster below names the cluster, lists the primary domains it crosses, and links to representative entries. Clusters are not exhaustive; this is a working catalog of the most useful cross-domain peer sets.

## 2. Cluster A — Stablecoin / tokenized-money macro tracking (waves 8-9)

**Primary domains:** `fintech/`, secondary in `banking/`, `payments/`.

This cluster tracks the global regulatory and macro reality around stablecoins and tokenized money:

- **GENIUS Act (US):** [[fintech/genius-act-501-actual-implementation|§501 actual implementation]], [[fintech/genius-act-501-denylist-mandate|§501 denylist mandate]].
- **MiCA (EU):** [[fintech/mica-overview|MiCA overview]], [[fintech/eu-mica-implementation-status-2026|implementation status 2026]], [[fintech/mica-emt-art-subcategories-deep-dive|EMT / ART deep dive]], [[fintech/mica-cross-border-implications|cross-border implications]].
- **HKMA (Hong Kong):** [[fintech/hkma-stablecoin-licensing-overview|HKMA licensing overview]], [[fintech/hkma-stablecoin-licensing-implications|HKMA implications]].
- **MAS (Singapore):** [[fintech/singapore-mas-payment-services-act-overview|MAS PSA overview]], [[fintech/singapore-mas-payment-services-act-strategic-implications|strategic implications]].
- **EPI / account-to-account:** [[fintech/european-payments-initiative-wero|EPI Wero]], [[fintech/japan-epi-four-camps-comparison|Japan EPI four-camp comparison]], [[fintech/japan-epi-three-types-overview|Japan EPI three types]].
- **CBDC:** [[fintech/cbdc-multi-tier-architecture-overview|CBDC architecture overview]], [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|adoption curve]], [[fintech/global-cbdc-retail-pilot-matrix-africa-caribbean|retail pilot matrix]], and individual pilots (Sand Dollar, eNaira, eRupee, JAM-DEX, Drex).
- **BIS multi-CBDC:** [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]], [[fintech/bis-project-agora-overview|Project Agora]], [[fintech/bis-project-ensemble-overview|Project Ensemble]], [[fintech/bis-project-guardian-overview|Project Guardian]].

Cross-domain bridge: [[banking/japan-stablecoin-bank-perimeter-2025|Japan stablecoin bank perimeter 2025]] (banking) and [[payments/INDEX|payments index]] for license-stack consumption.

## 3. Cluster B — Stablecoin issuers and tokenized products

**Primary domain:** `fintech/`, secondary in `business/`, `systems/`.

- **White circle:** [[fintech/circle-usdc-stablecoin|Circle USDC]].
- **Grey circle:** [[fintech/tether-business-model-short-treasury-yield|Tether economics]].
- **Payments-app issuers:** [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]], [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB / Bridge]].
- **Bank-side tokenized deposit:** [[fintech/jpmorgan-jpmd-coin|JPMD coin]], [[fintech/jpm-onyx-wholesale-network|JPM Onyx wholesale network]], [[fintech/partior-jpm-dbs-temasek-consortium|Partior]].
- **Tokenized MMF / RWA:** [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]], [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL issuer adoption]], [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]].
- **Macro mechanics:** [[fintech/circular-reserve-asset-flywheel-overview|circular reserve-asset flywheel]], [[fintech/cross-border-sc-via-swift-api|cross-border stablecoin via SWIFT API]].

Public-figure overlay: [[business/jamie-dimon-anti-crypto-pivot-case]], [[business/larry-fink-blackrock-digital-asset-template]], [[business/paolo-ardoino-tether-business-model-template]].

## 4. Cluster C — Japan capital-markets stack

**Primary domains:** `securities/`, `derivatives/`, `money-market/`, `structured-finance/`, `real-estate-finance/`, secondary in `banking/`.

This cluster covers the entire Japan capital-markets stack:

- **Securities micro-structure:** [[securities/INDEX|securities index]] (NISA, IPO listing-disclosure, FIEA operators, best-execution / SOR / PTS, JSDA).
- **Derivatives:** [[derivatives/INDEX|derivatives index]] (IRS / OIS / JGB futures, FX cross-currency basis, CDS, equity-volatility JPX-VI, JSCC OTC clearing).
- **Money market:** [[money-market/INDEX|money-market index]] (call markets, JGB repo, BoJ open-market operations).
- **Structured finance:** [[structured-finance/INDEX|structured-finance index]] (ABS / RMBS / CMBS / CLO, JHF MBS, NPL securitization, project-finance SPV, aircraft / ship finance, TK / GK / TMK vehicles, JCR / R&I rating methodology).
- **Real-estate finance:** [[real-estate-finance/INDEX|real-estate-finance index]] (J-REIT, GK-TK SPV, developer financing, cap-rate compression).
- **Settlement / clearing bridge:** [[banking/jasdec-settlement-operations|JASDEC settlement]] and [[banking/custody-bank-operating-model|custody bank operating model]].

## 5. Cluster D — Japan policy / banking interface

**Primary domains:** `policy-finance/`, `banking/`, `JapanFG/`.

- **Policy finance:** [[policy-finance/INDEX|policy-finance index]] (JBIC, JICA, NEXI, JOGMEC, JASSO, JHF, JFC, agriculture / fisheries credit guarantee, SME guarantee).
- **Banking system:** [[banking/INDEX|banking index]] ([[banking/japan-banking-license-tier-comparison-matrix|license tier comparison]], net banks, BaaS, cooperative banking, JA Bank system, JF Marine Bank system, shinkin / credit-cooperative / rōkin registries).
- **JapanFG operating-company catalog:** [[JapanFG/INDEX|JapanFG index]] (megabanks, regional banks, second-regional, trust banks, foreign-bank branches, securities firms, asset managers, insurers).

## 6. Cluster E — Japan payments and cashless

**Primary domains:** `payments/`, secondary in `fintech/`, `loyalty/`.

- **Cashless landscape:** [[payments/cashless-jp-landscape|cashless JP landscape]], [[payments/japan-payment-scheme-economics-matrix|scheme-economics matrix]].
- **Card stack:** [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]], [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant-fee stack]], [[payments/visa-mastercard-amex-jcb-japan-operating-comparison|Visa / Mastercard / Amex / JCB comparison]], [[payments/jcb-three-party-operating-model|JCB three-party model]].
- **Code payment:** [[payments/japan-code-payment-competitive-map|code-payment competitive map]], [[payments/japan-code-payment-operator-2025-market-share-matrix|2025 market-share matrix]].
- **Prepaid / IC:** [[payments/japan-prepaid-electronic-money-operator-matrix|prepaid e-money operator matrix]], [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit prepaid economics]], [[payments/waon-nanaco-retail-prepaid-comparison|WAON / nanaco]].
- **BNPL / credit purchase:** [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]], [[payments/japan-bnpl-pay-later-operator-registry-matrix|BNPL operator registry]].
- **Registry indexes:** [[payments/funds-transfer-service-providers-japan-index|funds-transfer]], [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer]], [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator]].
- **Loyalty bridge:** [[loyalty/INDEX|loyalty index]].

## 7. Cluster F — Insurance perimeter

**Primary domain:** `insurance/`, secondary in `JapanFG/`.

- **Solvency:** [[insurance/global-solvency-framework-comparison-matrix|global solvency comparison]], [[insurance/economic-value-based-solvency|economic-value-based solvency]], [[insurance/esr-economic-value-solvency|ESR overview]], [[insurance/japan-iaig-ics-mapping|Japan IAIG / ICS mapping]].
- **Life / non-life big-N comparisons:** [[insurance/japan-life-insurance-big-four|life big four]], [[insurance/japan-life-big-four-overlay-comparison-matrix|life overlay]], [[insurance/japan-nonlife-big-three|non-life big three]], [[insurance/japan-nonlife-big-three-reinsurance-cat-matrix|non-life cat matrix]].
- **Distribution:** [[insurance/insurance-agency-and-brokerage-japan|agency / brokerage]], [[insurance/japan-bancassurance-distribution-overlay-matrix|bancassurance overlay]], [[insurance/life-insurance-channel-mix|channel mix]], [[insurance/internet-life-insurance-business-model|internet life model]].
- **Specialty:** [[insurance/marine-insurance-and-pi-cover-market|marine / P&I]], [[insurance/lloyds-japan-syndicate-operating-model|Lloyd's Japan]], [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer landscape]], [[insurance/natcat-reinsurance-japan|natcat reinsurance]], [[insurance/earthquake-insurance-public-private-scheme|earthquake public-private]].
- **Cooperative perimeter:** [[insurance/japan-kyosai-vs-fsa-insurance-perimeter-matrix|kyōsai vs FSA matrix]], [[insurance/ja-kyosai-zenkyoren-overview|JA Kyōsai / Zenkyōren]].
- **JapanFG mirror:** insurer operating-company pages under [[JapanFG/INDEX|JapanFG index]].

## 8. Cluster G — Trust bank and custody

**Primary domain:** `banking/`, secondary in `JapanFG/`, `securities/`.

- [[banking/japan-master-trust-and-custody-bank-landscape|master trust and custody bank landscape]].
- [[banking/master-trust-bank-operating-model|master trust operating model]] and [[banking/custody-bank-operating-model|custody operating model]].
- [[banking/japan-trust-bank-custody-map|Japan trust-bank custody map]], [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|trust-bank vs global custodian]], [[banking/trust-bank-fee-structure-comparison|fee-structure comparison]], [[banking/trust-bank-custody-operating-comparison|operating comparison]].
- [[banking/pension-trust-mandate-allocation-japan|pension trust mandate allocation]].
- JapanFG trust-bank operating-entity catalog: [[JapanFG/INDEX|JapanFG index]].

## 9. Cluster H — Japan net banks and BaaS

**Primary domain:** `banking/`, secondary in `JapanFG/`, `payments/`.

- [[banking/japan-net-bank-competition-map|net-bank competition map]], [[banking/japan-net-bank-deposit-feature-matrix-2026|net-bank deposit-feature matrix]].
- Operating entities: [[banking/au-jibun-bank|au Jibun]], [[banking/daiwa-next-bank|Daiwa Next]], [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]], [[banking/paypay-bank|PayPay Bank]], [[banking/rakuten-bank|Rakuten Bank]], [[banking/sony-bank|Sony Bank]], [[banking/mercari-bank|Mercari Bank]], [[banking/aeon-bank]] (in `JapanFG/`).
- BaaS operating models: [[banking/baas-japan-landscape|BaaS landscape]], [[banking/japan-baas-operating-models|BaaS operating models]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]], [[banking/minna-bank-baas-model|Minna Bank BaaS model]].

## 10. Cluster I — Foreign-bank-in-Japan perimeter

**Primary domain:** `JapanFG/`, secondary in `banking/`.

- Branch / agency / adjacent-license registry (57 / 57 standalone routes per [[INDEX]]).
- Foreign IB anchors: [[JapanFG/jpmorgan-japan]], `goldman-sachs-japan`, `morgan-stanley-japan`, `citigroup-japan`, `barclays-japan`, etc.
- System / regulatory frame: [[banking/foreign-bank-japan-retreat|foreign bank Japan retreat]] and [[banking/japan-foreign-bank-retreat-refocus-timeline-matrix|retreat / refocus timeline matrix]].
- Comparison surface: [[banking/japan-banking-license-tier-comparison-matrix|banking license tier comparison]].

## 11. Cluster J — Public-company strategic narrative (business)

**Primary domain:** `business/`, secondary in `fintech/`, `JapanFG/`, `exchanges/`.

- [[business/jamie-dimon-anti-crypto-pivot-case|Jamie Dimon pivot]].
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock template]].
- [[business/brian-armstrong-coinbase-public-company-template|Brian Armstrong Coinbase template]].
- [[business/cz-binance-founder-handoff-case|CZ Binance handoff]].
- [[business/kitao-yoshitaka-sbi-independent-strategy-case|Kitao Yoshitaka SBI]].
- [[business/sandeep-nailwal-polygon-india-dpi-pattern|Sandeep Nailwal Polygon]].
- [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff]].
- [[business/softbank-vision-fund-arm-ipo-template|SoftBank Vision Fund / Arm IPO]].

## 12. Cluster K — Agent economy and embedded wallets

**Primary domains:** `agent-economy/`, `fintech/`, `systems/`.

- [[agent-economy/INDEX|agent-economy index]] for x402, AP2, embedded wallets, agent-commerce infrastructure.
- Fintech bridge: [[fintech/embedded-wallet-fintech-disintermediation-overview|embedded wallet fintech disintermediation]], [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe trojan horse case]], [[fintech/ai-payment-two-tracks|AI payment two tracks]].
- Systems bridge: [[systems/INDEX|systems index]] for the validator / account-abstraction substrate.

## 13. Cluster L — Exchanges and VASP

**Primary domain:** `exchanges/`, secondary in `fintech/`.

- [[exchanges/INDEX|exchanges index]] for Japan and global CEX / DEX, VASP regulation, JVCEA / FSA registered-operator completeness, custody, IEO, warnings, and incidents.

## 14. Cluster M — Loyalty, retail, and finance-data loops

**Primary domains:** `loyalty/`, `retail/`, `payments/`.

- [[loyalty/INDEX|loyalty index]] for Japan points, rewards, loyalty liabilities, retail / finance data loops.
- [[retail/INDEX|retail index]] for retail groups as financial-services / payment / loyalty / ATM platforms.
- Cross-domain: [[business/ntt-docomo-d-point-telco-finance-case|NTT Docomo d-point case]], [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group bundling case]], [[payments/famipay-valucreate-strategy|FamiPay Valucreate]].

## 15. Cluster N — Macro-tracker matrices (waves 6-9 comparison pages)

**Primary domains:** spread across `banking/`, `insurance/`, `payments/`, `fintech/`, `JapanFG/`, `securities/`, `derivatives/`, `real-estate-finance/`.

These are comparison / overlay / matrix pages that cut horizontally across an operating cluster. Representative examples:

- [[banking/japan-banking-license-tier-comparison-matrix|banking license tier]].
- [[insurance/global-solvency-framework-comparison-matrix|global solvency]].
- [[insurance/japan-bancassurance-distribution-overlay-matrix|bancassurance overlay]].
- [[payments/japan-payment-scheme-economics-matrix|payment scheme economics]].
- [[payments/japan-code-payment-operator-2025-market-share-matrix|code-payment market share]].
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|trust bank vs global custodian]].
- [[banking/japan-foreign-bank-retreat-refocus-timeline-matrix|foreign-bank retreat timeline]].
- [[banking/japan-net-bank-deposit-feature-matrix-2026|net-bank deposit features]].
- [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix|regional-bank consolidation family tree]].

## 16. How clusters relate to wave history

Cluster A largely came from waves 8-9 (macro tracking). Cluster B came from waves 5-9. Cluster C came from waves 5-7. Cluster D came from waves 1-5. Cluster F came from waves 4-6. The wave-by-wave commit history in the FinWiki repo documents the cluster expansion order.

## Related

- [[INDEX]] — FinWiki domain map.
- [[SCHEMA]] — frontmatter and body-link convention.
- [[cross-domain-anchor-convention]] — how cross-domain entities are anchored.
- [[domain-bridge-navigation-guide]] — concrete reader journeys across the cluster graph.
- [[entity-mirror-page-policy]] — when parallel pages in 2-3 domains are justified.
- [[frontmatter-canonical-anchor-field-proposal]] — proposed `canonical_anchor:` field.

## Sources

- [[INDEX]] — 23-domain map, 1347+ entries (2026-05-25 snapshot).
- [[SCHEMA]] — frontmatter spec.
- Wave commit history (commits `b3d6f61`, `6edd72c`, `9857f4d`, `8fb629f`, `f2e684b` and earlier) for the wave-by-wave thematic structure.
- Example entries: see entries linked inline under each cluster.

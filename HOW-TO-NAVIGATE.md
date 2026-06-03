---
title: "How to navigate FinWiki — reader profile guide"
aliases:
  - "HOW-TO-NAVIGATE"
  - "FinWiki reader guide"
  - "FinWiki navigation"
  - "FinWiki front-door guide"
  - "how to read FinWiki"
  - "FinWiki entry points"
domain: control
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: certain
tags: [navigation, reader-guide, control, index, entry-point]
status: active
sources:
  - "https://www.fsa.go.jp/en/"
  - "https://www.boj.or.jp/en/"
  - "https://www.jpx.co.jp/english/"
---

# How to navigate FinWiki — reader profile guide

## TL;DR

FinWiki currently routes around **1,400+ wiki entries across 23 domains** through [[INDEX|INDEX.md]] plus per-domain `INDEX.md` files. The corpus is built primarily for AI agents to read, retrieve, cite, and connect, but the structure is also designed to be readable for humans who need to research finance topics from public sources.

This guide is the front-door. It tells you, by reader profile, **where to start, which comparison matrices to keep open, and which bedrock pages anchor each topic cluster**.

There is no single linear reading order. Instead, FinWiki is a graph: every entry links to peers, regulators, registries, and adjacent infrastructure. Use this guide to pick your entry point, then follow body links.

## How to find anything in five steps

1. **Start at [[INDEX|INDEX.md]]** to see all 23 domains, entry counts, and the public-surface rule.
2. **Drill down by domain** to the relevant `domain/INDEX.md` file (e.g. [[banking/INDEX]], [[fintech/INDEX]], [[derivatives/INDEX]]).
3. **Use a comparison matrix** to compare peers or regimes side-by-side (52+ matrices exist across domains).
4. **Open the entity-specific operating page** for the company, regulator, instrument, or system you need.
5. **Follow body wikilinks** to peers, registries, regulators, and infrastructure — every true entry has at least three body wikilinks before the `## Related` and `## Sources` footers.

For AI agents: also use [[llms.txt|llms.txt]], [[llms-full.txt|llms-full.txt]], [[ai-index.json|ai-index.json]], and [[sitemap.xml|sitemap.xml]] for machine-readable traversal.

## Reader profile starting points

Pick the profile closest to your question. Most users blend two or three.

### Regulator / supervisor

You need to confirm what a license, registry, or supervisory route covers, and how it maps to global frameworks.

- Start: [[banking/japan-banking-license-tier-comparison-matrix]] for the full Japan banking license tier overlay (megabank / regional / second / trust / net / foreign branch / shinkin / credit cooperative / rōkin / Norinchukin-JA-JF).
- Then: [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal-license INDEX]] for the license-stack catalog.
- For payments: [[payments/INDEX]] plus [[fintech/japan-epi-three-types-overview]] for the EPI (electronic payment instrument) framework.
- For insurance: [[insurance/global-solvency-framework-comparison-matrix]] (FSA ESR vs IAIS ICS vs EU Solvency II vs US RBC).
- For crypto / VASP: [[exchanges/jvcea-self-regulatory-overview]] and [[exchanges/global-vasp-regulatory-comparison-matrix]].

### Banker / corporate-finance practitioner

You need to find peers, deal precedents, hedging routes, or capital-markets process.

- Start: [[finance/japan-listed-financial-groups-investable-universe]] for the listed-FG universe.
- Then: [[finance/japan-m-a-deal-process-comparison-matrix]] for deal-process comparison, plus [[finance/japan-tender-offer-process]] and [[finance/japan-mbo-and-squeeze-out-process]] for transaction routes.
- For hedging: [[finance/japan-corporate-fx-and-rate-hedge-policy]] then [[derivatives/japan-interest-rate-derivatives-overview]].
- For league tables: [[finance/japan-ib-league-table]].

### Investor / capital-allocator

You need to map issuers, custody chains, market structure, or asset-class fundamentals.

- Start: [[finance/japan-listed-financial-groups-investable-universe]] for who is listed.
- Then: [[securities/japan-market-infrastructure-map]] for clearing / settlement / depository plumbing.
- For real estate: [[real-estate-finance/top-10-j-reit-overview-matrix]] then [[real-estate-finance/j-reit-vs-us-reit-governance-comparison]].
- For derivatives: [[derivatives/japan-interest-rate-derivatives-overview]] and [[derivatives/dealer-bank-derivatives-revenue-mix]].
- For securitization: [[structured-finance/japan-abs-market-overview]] and [[structured-finance/japan-securitization-product-matrix]].

### Researcher / academic

You need primary-source-style overviews with citation footers.

- Start: [[INDEX|INDEX.md]] domain map → per-domain `INDEX.md` → entries.
- Then: every entry's `## Sources` footer points to official regulator / central-bank / exchange / industry-association URLs.
- For the AI / LLM angle: [[llms.txt]] and [[llms-full.txt]] provide compact and full manifests of every public entry.

### Journalist

You need fast, named-entity-grounded background.

- Start: [[JapanFG/INDEX]] for the entity-page namespace (mega-banks, FGs, brokers, insurers, exchanges, fintech operators).
- Then: domain-level comparison matrices (see "Top 15 essential matrices" below) to ground claims with peer comparisons.
- Then: open the entity-specific page (`JapanFG/<slug>.md`) for company structure, business lines, regulatory boundary, and counterpoints.

### Developer / fintech / agent-economy builder

You need to understand the rails, license boundary, and stablecoin / wallet / AP2 / x402 stack.

- Start: [[agent-economy/INDEX]] for the AI-agent payment protocol corner of the wiki.
- Then: [[fintech/INDEX]] for the broader stablecoin / CBDC / EPI / MiCA / GENIUS / MAS / HKMA landscape.
- For Japan rails specifically: [[payments/INDEX]] plus [[banking/baas-japan-landscape]] and [[banking/japan-baas-operating-models]].
- For cross-chain plumbing: [[systems/INDEX]] (Canton / DAML, CCTP, EigenLayer, Hyperlane, ZK-EVM rollups).

## Top 30 essential entries for newcomers

If you are new to FinWiki, read these in roughly the listed order. They give you the system-level map before you go into specific entities.

### System overviews (10)

1. [[INDEX|FinWiki INDEX]] — top-level domain map.
2. [[README|README.md]] — public-surface rule and trilingual control.
3. [[JapanFG/INDEX]] — the entity-page namespace for Japanese financial groups.
4. [[banking/INDEX]] — Japan banking license tiers and operating models.
5. [[policy-finance/japan-policy-finance-system]] — how JFC / JBIC / NEXI / JOGMEC / JHF / JICA / JASSO interact.
6. [[fintech/mica-overview]] — EU stablecoin / crypto-asset framework.
7. [[fintech/cbdc-multi-tier-architecture-overview]] — global CBDC architecture.
8. [[securities/japan-market-infrastructure-map]] — clearing / depository / settlement plumbing.
9. [[money-market/japan-money-market]] — short-end JPY rates ecosystem.
10. [[derivatives/japan-interest-rate-derivatives-overview]] — JPY rates derivatives anchor.

### Sector deep-dives (10)

11. [[banking/japan-net-bank-competition-map]] — neobank competition map.
12. [[banking/baas-japan-landscape]] — Japan BaaS landscape.
13. [[insurance/japan-life-insurance-big-four]] — Nippon, Dai-ichi, Sumitomo, Meiji Yasuda.
14. [[insurance/japan-nonlife-big-three]] — Tokio Marine, MS&AD, SOMPO.
15. [[securities/japan-online-brokerage-competition]] — SBI / Rakuten / Matsui / Monex.
16. [[exchanges/jp-crypto-exchange-overview]] — Japan CEX overview.
17. [[payments/cashless-jp-landscape]] — Japan cashless rails landscape.
18. [[real-estate-finance/j-reit-market-overview]] — J-REIT market.
19. [[structured-finance/japan-abs-market-overview]] — Japan ABS market.
20. [[finance/japan-listed-financial-groups-investable-universe]] — listed FG universe.

### Cross-cutting and rule pages (10)

21. [[finance/japan-tender-offer-process]] — TOB mechanics.
22. [[finance/japan-mbo-and-squeeze-out-process]] — MBO + squeeze-out.
23. [[finance/japan-large-shareholding-disclosure]] — large-shareholding rule.
24. [[finance/japan-fair-disclosure-and-insider-trading-controls]] — FD + insider controls.
25. [[securities/nisa-2024-flow]] — NISA reform flow.
26. [[securities/japan-ipo-listing-disclosure-route]] — IPO route.
27. [[fintech/japan-epi-three-types-overview]] — EPI three types.
28. [[agent-economy/ap2-overview]] — agent-payment protocol AP2.
29. [[systems/cross-chain-five-pole-comparison-matrix]] — cross-chain landscape.
30. [[exchanges/jvcea-self-regulatory-overview]] — JVCEA self-regulation.

## Top 15 essential comparison matrices

Comparison matrices are FinWiki's highest-density artifacts: side-by-side overlays of peers, regimes, or product types. Keep these open while reading entity pages.

1. [[banking/japan-banking-license-tier-comparison-matrix]] — full Japan banking license tier overlay.
2. [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]] — Japan trust banks vs global custodians.
3. [[banking/japan-net-bank-deposit-feature-matrix-2026]] — Japan neobank deposit feature overlay.
4. [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix]] — regional-bank consolidation family tree.
5. [[insurance/global-solvency-framework-comparison-matrix]] — FSA ESR / IAIS ICS / EU Solvency II / US RBC.
6. [[insurance/japan-life-big-four-overlay-comparison-matrix]] — life big four overlay.
7. [[insurance/japan-nonlife-big-three-reinsurance-cat-matrix]] — non-life big three reinsurance / cat.
8. [[exchanges/global-vasp-regulatory-comparison-matrix]] — global VASP regime overlay.
9. [[exchanges/japan-cex-parent-fg-adjacency-matrix]] — Japan CEX parent-FG adjacency.
10. [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — global stablecoin five-pole.
11. [[fintech/usd-stablecoin-issuer-eight-way-matrix]] — USD stablecoin issuer overlay.
12. [[finance/japan-m-a-deal-process-comparison-matrix]] — M&A deal-process overlay.
13. [[derivatives/japan-rates-derivative-product-matrix]] — JPY rates derivative product overlay.
14. [[real-estate-finance/top-10-j-reit-overview-matrix]] — top-10 J-REIT overlay.
15. [[policy-finance/japan-policy-finance-institution-mandate-matrix]] — JFC / JBIC / NEXI / JOGMEC / DBJ / ODFC / JHF / JICA / JASSO mandate overlay.

## Top 10 essential bedrock pages

Bedrock pages are domain anchors that explain the system layer before you go into entities or instruments.

1. [[policy-finance/japan-policy-finance-system]] — Japan policy-finance system map.
2. [[banking/japan-master-trust-and-custody-bank-landscape]] — master-trust / custody landscape.
3. [[insurance/japan-life-insurance-alm-overview]] — life-insurance ALM overview.
4. [[securities/japan-market-infrastructure-map]] — securities market plumbing.
5. [[money-market/japan-money-market]] — Japan money market.
6. [[derivatives/japan-interest-rate-derivatives-overview]] — JPY rates derivatives anchor.
7. [[real-estate-finance/j-reit-market-overview]] — J-REIT market overview.
8. [[structured-finance/japan-abs-market-overview]] — Japan ABS market overview.
9. [[fintech/cbdc-multi-tier-architecture-overview]] — CBDC multi-tier architecture.
10. [[systems/cross-chain-five-pole-comparison-matrix]] — cross-chain landscape.

## How to find specific topics

| You want to know about... | Start here | Then drill into |
|---|---|---|
| A specific Japanese mega-bank | [[JapanFG/INDEX]] | `JapanFG/mufg.md`, `JapanFG/smfg.md`, `JapanFG/mizuho-fg.md`, etc. |
| A specific regional bank | [[JapanFG/INDEX]] regional bank section | `JapanFG/<region>-bank.md` + [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix]] |
| A Japanese trust bank or custody bank | [[banking/japan-master-trust-and-custody-bank-landscape]] | [[banking/trust-bank-custody-operating-comparison]] + `JapanFG/<trust-bank>.md` |
| A net / neobank | [[banking/japan-net-bank-competition-map]] | [[banking/japan-net-bank-deposit-feature-matrix-2026]] + `JapanFG/<neobank>.md` |
| A Japanese securities firm | [[securities/INDEX]] + [[JapanFG/INDEX]] | `JapanFG/nomura-hd.md`, `JapanFG/daiwa-sg.md`, etc. |
| A life or non-life insurer | [[insurance/INDEX]] | [[insurance/japan-life-insurance-big-four]] or [[insurance/japan-nonlife-big-three]] + entity page |
| A Japanese policy-finance institution | [[policy-finance/japan-policy-finance-system]] | [[policy-finance/japan-policy-finance-institution-mandate-matrix]] + entity page |
| A foreign-bank Japan branch | [[JapanFG/foreign-bank-branches-japan-index]] | individual branch page in `JapanFG/` |
| A Japanese crypto exchange | [[exchanges/INDEX]] | [[exchanges/japan-cex-parent-fg-adjacency-matrix]] + entity page in `JapanFG/` or `exchanges/` |
| A payment operator (PayPay, Rakuten Pay, au PAY, d Barai) | [[payments/INDEX]] | [[payments/japan-code-payment-operator-2025-market-share-matrix]] + entity page in `JapanFG/` |
| BaaS operating models | [[banking/baas-japan-landscape]] | [[banking/japan-baas-operating-models]] |
| Stablecoin regulation (Japan / EU / US / HK / SG) | [[fintech/INDEX]] | [[fintech/global-stablecoin-regulatory-five-pole-matrix]] + regime-specific overview |
| CBDC | [[fintech/cbdc-multi-tier-architecture-overview]] | regime-specific entries (e.g. `fintech/boe-digital-pound-consultation.md`) |
| Japan IPO process | [[securities/japan-ipo-listing-disclosure-route]] | [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]] |
| Japan M&A (TOB / MBO / squeeze-out) | [[finance/japan-tender-offer-process]] | [[finance/japan-mbo-and-squeeze-out-process]] + [[finance/japan-m-a-deal-process-comparison-matrix]] |
| Activist investor / shareholder activism | [[finance/japan-activist-investor-playbook]] | [[finance/japan-shareholder-proposal-and-agm-voting-route]] |
| NISA tax structure | [[securities/nisa-2024-flow]] | [[securities/nisa-2025-tax-reform-update]] |
| Derivatives (JPY rates / FX / credit / equity) | [[derivatives/INDEX]] | [[derivatives/japan-interest-rate-derivatives-overview]] + product page |
| J-REIT | [[real-estate-finance/j-reit-market-overview]] | [[real-estate-finance/top-10-j-reit-overview-matrix]] + individual REIT page |
| Securitization (ABS / RMBS / CMBS / CLO / NPL) | [[structured-finance/japan-abs-market-overview]] | [[structured-finance/japan-securitization-product-matrix]] + product page |
| Project finance | [[policy-finance/japan-project-finance-stack-diagram]] | [[structured-finance/project-finance-spv-japan-renewable]] |
| Cross-chain / restaking / ZK rollup | [[systems/INDEX]] | [[systems/cross-chain-five-pole-comparison-matrix]] + protocol-specific entries |
| Agent-economy payment protocols (AP2 / x402 / ERC-7715) | [[agent-economy/INDEX]] | [[agent-economy/ap2-overview]] + protocol-specific entries |
| Loyalty points (T-Point, d Point, Rakuten Point, V-Point) | [[loyalty/INDEX]] | individual point-program entries |

## Reading order for first-time deep dives

If you have time for a multi-hour deep dive, here is a recommended reading order by topic cluster.

### Japan banking system

1. [[banking/japan-banking-license-tier-comparison-matrix]]
2. [[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]]
3. [[banking/japan-net-bank-competition-map]] + [[banking/japan-net-bank-deposit-feature-matrix-2026]]
4. [[banking/japan-master-trust-and-custody-bank-landscape]]
5. [[banking/cooperative-banking-japan]] + [[banking/ja-bank-system-japan]] + [[banking/jf-marine-bank-system-japan]]
6. [[banking/foreign-bank-japan-retreat]] + [[banking/japan-foreign-bank-retreat-refocus-timeline-matrix]]
7. [[banking/baas-japan-landscape]] + [[banking/japan-baas-operating-models]]

### Japan payments and fintech

1. [[payments/INDEX]]
2. [[payments/japan-code-payment-operator-2025-market-share-matrix]]
3. [[fintech/japan-epi-three-types-overview]]
4. [[fintech/global-stablecoin-regulatory-five-pole-matrix]]
5. [[exchanges/jp-crypto-exchange-overview]] + [[exchanges/jvcea-self-regulatory-overview]]

### Japan capital markets

1. [[securities/japan-market-infrastructure-map]]
2. [[securities/japan-online-brokerage-competition]]
3. [[securities/japan-ipo-listing-disclosure-route]]
4. [[finance/japan-tender-offer-process]] + [[finance/japan-mbo-and-squeeze-out-process]]
5. [[finance/japan-activist-investor-playbook]]
6. [[finance/japan-listed-financial-groups-investable-universe]]

### Japan insurance

1. [[insurance/INDEX]]
2. [[insurance/japan-life-insurance-big-four]] + [[insurance/japan-life-big-four-overlay-comparison-matrix]]
3. [[insurance/japan-nonlife-big-three]] + [[insurance/japan-nonlife-big-three-reinsurance-cat-matrix]]
4. [[insurance/global-solvency-framework-comparison-matrix]]
5. [[insurance/earthquake-insurance-public-private-scheme]]
6. [[insurance/bancassurance-economics-japan]] + [[insurance/japan-bancassurance-distribution-overlay-matrix]]

### Japan derivatives and money markets

1. [[money-market/japan-money-market]]
2. [[money-market/jgb-repo-market-japan]] + [[money-market/boj-open-market-operations]]
3. [[derivatives/japan-interest-rate-derivatives-overview]]
4. [[derivatives/yen-basis-swap-market]] + [[derivatives/jgb-futures-curve]] + [[derivatives/ois-tona-curve]]

### Japan real-estate and structured finance

1. [[real-estate-finance/j-reit-market-overview]]
2. [[real-estate-finance/top-10-j-reit-overview-matrix]]
3. [[real-estate-finance/j-reit-vs-us-reit-governance-comparison]]
4. [[structured-finance/japan-abs-market-overview]]
5. [[structured-finance/japan-securitization-product-matrix]]
6. [[structured-finance/jhf-mbs-mechanics]]

### Global crypto, DeFi, and agent economy

1. [[exchanges/global-vasp-regulatory-comparison-matrix]]
2. [[fintech/global-stablecoin-regulatory-five-pole-matrix]]
3. [[fintech/cbdc-multi-tier-architecture-overview]]
4. [[systems/cross-chain-five-pole-comparison-matrix]]
5. [[agent-economy/ap2-overview]] + agent-economy product pages.

## Public-surface rule (one-paragraph reminder)

FinWiki is a strictly public knowledge base. Every entry contains only public-internet information, official documents, public disclosures, or synthesis based on public sources. There are no local paths, no private emails, no customer / counterparty information, no unpublished cases, and no proprietary dealer P&L. Cite the exact source release and survey vintage for any specific figure because numbers update across releases. See [[README|README.md]] and [[INDEX|INDEX.md]] for the full rule.

## How AI agents should traverse FinWiki

For LLMs and crawlers:

1. Read [[llms.txt|llms.txt]] for the compact AI guide (entry points, counts, URL rules, domain routes).
2. Use [[llms-full.txt|llms-full.txt]] for the full per-page manifest (title, URL, source path, GitHub source, summary, headings, resolved first wikilinks).
3. Use [[ai-index.json|ai-index.json]] for programmatic JSON traversal.
4. Use [[sitemap.xml|sitemap.xml]] for crawler indexing.
5. Use [[robots.txt|robots.txt]] for crawler policy.
6. Domain `INDEX.md` files are the safest hub-and-spoke routing surfaces.

When citing FinWiki, agents should cite the original public source listed in each entry's `## Sources` footer rather than the wiki entry itself.

## Maintenance and contribution

- See [[README|README.md]] for the public-surface rule, trilingual ordering, and release-note discipline.
- See [[AGENTS|AGENTS.md]] for the FinWiki agent operating instructions.
- See [[SCHEMA|SCHEMA.md]] for entry frontmatter and maintenance conventions.
- See [[wiki-link-improvement-plan|wiki-link-improvement-plan.md]] for the body-link density and semantic-link audit report.

## Related

- [[INDEX|FinWiki INDEX]]
- [[README|README.md]]
- [[CHANGELOG|CHANGELOG.md]]
- [[AGENTS|AGENTS.md]]
- [[SCHEMA|SCHEMA.md]]
- [[OBSIDIAN-SETUP|OBSIDIAN-SETUP.md]]
- [[JapanFG/INDEX]]
- [[banking/INDEX]]
- [[exchanges/INDEX]]
- [[fintech/INDEX]]
- [[payments/INDEX]]
- [[securities/INDEX]]
- [[insurance/INDEX]]
- [[derivatives/INDEX]]
- [[real-estate-finance/INDEX]]
- [[structured-finance/INDEX]]
- [[policy-finance/INDEX]]
- [[money-market/INDEX]]
- [[finance/INDEX]]
- [[agent-economy/INDEX]]
- [[systems/INDEX]]
- [[loyalty/INDEX]]
- [[retail/INDEX]]
- [[manufacturer-finance/INDEX]]
- [[trade/INDEX]]
- [[non-profit/INDEX]]
- [[security/INDEX]]
- [[business/INDEX]]
- [[corporate-strategy/INDEX]]

## Sources

- FinWiki [[INDEX|INDEX.md]] domain map and per-domain `INDEX.md` files.
- Financial Services Agency (FSA) — supervisory framework and license registers cited across entries.
- Bank of Japan (BoJ) — monetary, money-market, and payment-systems materials cited across entries.
- Japan Exchange Group (JPX), Japan Securities Clearing Corp (JSCC), Japan Securities Depository Center (JASDEC) — market-infrastructure materials cited across entries.

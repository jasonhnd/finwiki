# Round 2 Freshness Remediation Packet

> Planning artifact for GitHub Issue #72. This branch is read-only with respect to the corpus: it only creates this remediation plan and does not edit source entries, i18n mirrors, generated surfaces, or release metadata.

## Scope

- Source command: `bun tools/fact_freshness_audit.ts --json --as-of 2026-06-23`.
- Ranking enrichments: `bun tools/wiki_link_audit.ts --json <tmp>` for inbound wikilink counts, plus current `ai-index.json` for `canonical_anchor`, `entity_node`, and `entity_edges` signals.
- Non-goals: no web verification, no corpus edits, no i18n regeneration, no generated-surface refresh, and no release-note update in this planning PR.
- `INDEX.md` files are not present in the freshness rows because the audit excludes index/control documents. Index-like hubs are therefore represented by matrix, registry, snapshot, comparison, landscape, ecosystem, and map pages in the source queue.

## Fact-Freshness Snapshot

As of 2026-06-23, the audit returns **294 actionable freshness rows**. Only **1** row has a positive `days_overdue` value from `review_by`; the rest are still actionable because the audit's cadence / confidence / event heuristics mark them for recheck.

| Dimension | Count |
|---|---:|
| total rows | 294 |
| rows with days_overdue > 0 | 1 |
| event class | 138 |
| high class | 156 |
| tier-1 / Japan-core signal rows | 157 |
| matrix / registry / snapshot / comparison hub rows | 17 |
| canonical/entity graph signal rows | 1 |

### Domain Counts

| Domain | Rows |
|---|---:|
| fintech | 105 |
| exchanges | 100 |
| systems | 42 |
| agent-economy | 21 |
| trading-company-finance | 7 |
| security | 5 |
| leasing-firms | 3 |
| non-profit | 2 |
| retail | 2 |
| asset-managers | 1 |
| card-issuers | 1 |
| finance | 1 |
| financial-regulators | 1 |
| megabanks | 1 |
| regional-banks | 1 |
| securities-firms | 1 |

### Freshness Class Counts

| Freshness class | Rows |
|---|---:|
| high | 156 |
| event | 138 |

## Scoring Method

The queue uses an importance x staleness hybrid score so that the first remediation batches prioritize pages that are both central to the wiki and more likely to have decayed facts.

### Staleness Score

```text
cadence_days = event:45, high:90, medium:180, low:365
cadence_overrun_days = max(days_overdue, days_since_tended - cadence_days, 0)
cadence_ratio = min(2.5, cadence_overrun_days / cadence_days)
reason_points = capped sum of stable audit reason weights, max 20
staleness_score = min(100, 55 * cadence_ratio / 2.5 + 25 * (1 - freshness_score) + reason_points)
```

Reason weights: `review_by_due=10`, `cadence_due=8`, `missing_last_tended=8`, `missing_review_by=6`, `low_confidence=6`, `borderline_status=6`, `candidate_status=5`, `empty_sources=5`, `registry_or_statistics_keyword=4`, `event_keyword=3`, and any other reason `=2`.

### Importance Score

```text
importance_score = min(100,
  domain_weight
  + 25 * log1p(inlinks) / log1p(max_inlinks)
  + 15 if matrix/registry/snapshot/comparison/ecosystem/map-style hub
  + 10 if canonical_anchor/entity_node/entity_edges is present
  + 15 if Tier-1 / Japan-core domain signal is present
)
```

Domain weights used in this run:

| Domain | Weight |
|---|---:|
| financial-regulators | 20 |
| exchanges | 19 |
| fintech | 18 |
| megabanks | 18 |
| systems | 18 |
| asset-managers | 17 |
| card-issuers | 17 |
| securities-firms | 17 |
| regional-banks | 16 |
| finance | 15 |
| leasing-firms | 15 |
| security | 14 |
| trading-company-finance | 14 |
| agent-economy | 12 |
| non-profit | 10 |
| retail | 10 |

### Final Priority Score

```text
priority_score = 100 * (0.60 * importance_score/100 + 0.40 * staleness_score/100)
               + 20 * (importance_score/100) * (staleness_score/100)
```

The interaction term lifts pages that are simultaneously central and stale without hiding lower-importance rows; every input row remains visible below.

## Batch Plan

Any follow-up remediation issue that edits source entries should be treated as corpus work: run the i18n pipeline for changed bodies, run `release.ts --write`, and avoid parallel PRs that regenerate the same discovery/API/LLM surfaces. Review work can be parallelized before the edit branch, but generated-surface commits should remain serial unless a batch is split into disjoint PRs with explicit coordination.

| Batch | Rows | Score range | Main domains | Collision guidance |
|---|---:|---:|---|---|
| R2-F1 | 35 | 35-48.7 | exchanges 16, fintech 16, financial-regulators 1, megabanks 1, systems 1 | Serial if the issue updates corpus + generated surfaces; internal review notes can be parallel. |
| R2-F2 | 50 | 33.5-35 | exchanges 24, fintech 16, systems 10 | Serial if the issue updates corpus + generated surfaces; internal review notes can be parallel. |
| R2-F3 | 60 | 32.2-33.5 | fintech 31, exchanges 18, systems 9, non-profit 1, regional-banks 1 | Serial if the issue updates corpus + generated surfaces; internal review notes can be parallel. |
| R2-F4 | 69 | 22-32.1 | exchanges 17, fintech 15, systems 13, agent-economy 8, trading-company-finance 7 | Serial if the issue updates corpus + generated surfaces; internal review notes can be parallel. |
| R2-F5 | 80 | 16.6-21.9 | fintech 27, exchanges 25, agent-economy 13, systems 9, asset-managers 1 | Serial if the issue updates corpus + generated surfaces; internal review notes can be parallel. |

## Follow-Up Execution Issue Drafts

### R2-F1: Highest-signal hubs and Japan-core pages

- Goal: recheck and refresh the 35 source entries assigned to R2-F1 against public sources, then update `last_tended`, `review_by`, and any stale fact/source markers discovered during the review.
- Allowed files: exactly the source paths listed for this batch below; their `site/src/content/i18n/{ja,zh,en}/...` mirrors only when body changes require retranslation; generated discovery/API/LLM surfaces produced by `bun tools/release.ts --write`; and a release/closeout note only if the implementing issue explicitly requires one.
- Forbidden files: unrelated corpus pages, unrelated docs, `CONTRIBUTING.md`, and manual generated-surface edits not produced by the release command.
- Validation: `bun tools/fact_freshness_audit.ts --json`, `bun tools/wiki_link_audit.ts --fail-on-issues`, `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `bun run i18n:status`, and `git diff --check`.
- Batch source paths:

```text
megabanks/ndfg.md
exchanges/global-cex-top10-comparison.md
exchanges/jp-vasp-parent-company-map.md
exchanges/global-dex-major-five-comparison.md
exchanges/korea-cex-five-pillars-comparison.md
exchanges/solana-ecosystem-dex-comparison.md
fintech/japan-epi-four-camps-comparison.md
exchanges/global-perp-dex-five-comparison.md
exchanges/global-crypto-exchange-bankruptcy-comparison.md
exchanges/jp-listed-cex-related-companies-matrix.md
fintech/gold-tokenization-scheme-comparison.md
exchanges/fsa-vasp-registration-system.md
exchanges/jp-exchange-bitbank.md
fintech/japan-financial-regulation.md
fintech/japan-bittrade-listing-process.md
exchanges/jp-vasp-security-audit-certification.md
financial-regulators/missing-financial-institutions-backlog.md
fintech/genius-act-501-denylist-mandate.md
exchanges/jvcea-self-regulatory-overview.md
exchanges/jvcea-spot-volume-statistics-analysis.md
fintech/three-circles-stablecoin-mra-framework.md
fintech/blackrock-buidl-tokenized-mmf-overview.md
exchanges/jp-exchange-bitflyer.md
fintech/mbridge-bis-multi-cbdc-overview.md
fintech/institutional-stablecoin-deposit-token-thesis.md
fintech/bis-project-agora-overview.md
fintech/jp-trust-type-sc-architecture.md
fintech/mica-overview.md
systems/erc-4337-overview.md
fintech/cbdc-multi-tier-architecture-overview.md
fintech/onchain-finance-vs-crypto-bifurcation.md
fintech/tether-business-model-short-treasury-yield.md
exchanges/jp-exchange-gmo-coin.md
exchanges/jp-crypto-vc-fund-landscape.md
fintech/jpmorgan-jpmd-coin.md
```

### R2-F2: Second-wave fintech / exchange / systems queues

- Goal: recheck and refresh the 50 source entries assigned to R2-F2 against public sources, then update `last_tended`, `review_by`, and any stale fact/source markers discovered during the review.
- Allowed files: exactly the source paths listed for this batch below; their `site/src/content/i18n/{ja,zh,en}/...` mirrors only when body changes require retranslation; generated discovery/API/LLM surfaces produced by `bun tools/release.ts --write`; and a release/closeout note only if the implementing issue explicitly requires one.
- Forbidden files: unrelated corpus pages, unrelated docs, `CONTRIBUTING.md`, and manual generated-surface edits not produced by the release command.
- Validation: `bun tools/fact_freshness_audit.ts --json`, `bun tools/wiki_link_audit.ts --fail-on-issues`, `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `bun run i18n:status`, and `git diff --check`.
- Batch source paths:

```text
systems/cctp-v2-overview.md
fintech/em-market-crypto-dollarization-pattern.md
systems/eigenlayer-overview.md
systems/erc-7702-overview.md
exchanges/us-crypto-licensing-multi-layer-system.md
fintech/japan-epi-three-types-overview.md
fintech/hkma-stablecoin-licensing-overview.md
fintech/jp-stablecoin-progmat.md
fintech/jurisdiction-list-monetary-protectionism.md
fintech/paypal-pyusd-stablecoin.md
exchanges/jp-exchange-binance-japan.md
exchanges/jp-vasp-incident-history.md
exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis.md
exchanges/amm-design-evolution.md
exchanges/jp-vasp-regulatory-timeline.md
systems/canton-overview.md
exchanges/jp-vasp-aml-travel-rule-implementation.md
fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse.md
systems/cross-chain-four-poles-overview.md
exchanges/liquid-staking-restaking-cex-exposure.md
exchanges/fsa-foreign-exchange-warning-system.md
exchanges/jp-institutional-custody-three-pillars.md
exchanges/jp-vasp-ma-consolidation-history.md
systems/pectra-eip-7691-blob-l2-impact.md
systems/threshold-bft-consensus-rust-implementations.md
fintech/ai-payment-two-tracks.md
exchanges/native-dex-flip-incumbent-pattern.md
fintech/cbdc-multi-tier-architecture-three-paradigms.md
fintech/central-banking-function-unbundling.md
fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage.md
fintech/stablecoin-revenue-split-economics.md
systems/bft-validator-economy-overview.md
systems/chain-abstraction-pattern-overview.md
systems/chainlink-ccip-institutional-messaging.md
exchanges/global-institutional-custody-five-pillars.md
exchanges/jp-cex-deposit-token-stablecoin-integration.md
exchanges/jp-vasp-derivative-license-system.md
exchanges/hk-sfc-vasp-licensing-overview.md
fintech/circular-reserve-asset-flywheel-overview.md
fintech/cross-border-sc-via-swift-api.md
exchanges/eu-mica-casp-regime-overview.md
exchanges/jp-exchange-crypto-garage.md
exchanges/jp-vasp-cold-storage-segregation-rules.md
exchanges/rwa-tokenization-cex-integration.md
fintech/japan-ecisb-license.md
fintech/multi-megabank-consortium-governance.md
exchanges/coincheck-nem-hack-detailed-analysis.md
exchanges/jp-exchange-custodiem.md
exchanges/global-crypto-forensics-vendor-layer.md
exchanges/jp-exchange-laser-digital-japan.md
```

### R2-F3: Middle queue with domain-clusterable updates

- Goal: recheck and refresh the 60 source entries assigned to R2-F3 against public sources, then update `last_tended`, `review_by`, and any stale fact/source markers discovered during the review.
- Allowed files: exactly the source paths listed for this batch below; their `site/src/content/i18n/{ja,zh,en}/...` mirrors only when body changes require retranslation; generated discovery/API/LLM surfaces produced by `bun tools/release.ts --write`; and a release/closeout note only if the implementing issue explicitly requires one.
- Forbidden files: unrelated corpus pages, unrelated docs, `CONTRIBUTING.md`, and manual generated-surface edits not produced by the release command.
- Validation: `bun tools/fact_freshness_audit.ts --json`, `bun tools/wiki_link_audit.ts --fail-on-issues`, `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `bun run i18n:status`, and `git diff --check`.
- Batch source paths:

```text
exchanges/sg-mas-dpt-licensing-overview.md
fintech/apollo-acred-private-credit-tokenization.md
fintech/cbdc-multi-tier-architecture-tradeoffs.md
fintech/protocol-hedge-strategy-stripe-pattern.md
fintech/wall-street-crypto-network-neutrality.md
fintech/jp-stablecoin-dcjpy.md
exchanges/bybit-lazarus-hack-detailed-analysis.md
exchanges/fsa-business-improvement-orders-history.md
exchanges/jp-exchange-bittrade.md
fintech/india-anti-dollar-dpi-alliance.md
systems/hyperlane-overview.md
fintech/embedded-wallet-fintech-disintermediation-overview.md
exchanges/jp-exchange-rakuten-wallet.md
fintech/sky-usds-decentralized-stablecoin.md
systems/layerzero-v2-omnichain-messaging.md
regional-banks/hokkoku-fhd.md
exchanges/cross-chain-bridge-cex-deposit-withdrawal.md
fintech/gray-market-dollar-network-formalization.md
fintech/issuer-distributor-incentive-realignment-50-50-model.md
fintech/bis-project-ensemble-overview.md
fintech/fatf-travel-rule-overview.md
exchanges/jp-crypto-market-maker-otc-layer.md
exchanges/jvcea-whitelist-token-listing.md
fintech/chain-level-ofac-freeze-precedent.md
fintech/m-network-m0-neutral-infrastructure.md
fintech/singapore-mas-payment-services-act-overview.md
exchanges/jp-cex-staking-lending-regulation.md
fintech/cftc-sec-crypto-jurisdiction.md
fintech/stablecoin-chain-token-strategy-trilemma.md
fintech/blackrock-buidl-sc-issuer-adoption.md
fintech/portfolio-winner-structure-arm-analog.md
systems/dag-bft-vs-chain-bft-architecture.md
systems/vitalik-l1-l2-strategy-anchor.md
exchanges/ftx-japan-100pct-return-case-study.md
exchanges/btc-spot-etf-japan-impact.md
exchanges/jp-exchange-mercoin.md
exchanges/jp-exchange-zaif.md
fintech/bis-project-agora-vs-mbridge.md
fintech/bis-project-guardian-overview.md
systems/erc-4337-userop-bundler-flow.md
systems/hyperledger-besu-overview.md
fintech/mica-emt-art-subcategories-deep-dive.md
fintech/ripple-rlusd-stablecoin.md
exchanges/jp-cex-points-economy-integration.md
fintech/mica-cross-border-implications.md
fintech/regulatory-window-strategic-acquisition.md
fintech/stablecoin-channel-japan-sbi-jpyc-ring.md
systems/erc-4337-embedded-wallet-adoption.md
exchanges/jp-crypto-asset-taxation-detailed.md
exchanges/jp-custody-ginco.md
exchanges/jp-exchange-line-xenesis.md
fintech/fnality-wholesale-settlement.md
fintech/partior-jpm-dbs-temasek-consortium.md
systems/pectra-upgrade-overview.md
non-profit/japan-research-grant-map-2026.md
fintech/issuer-distributor-incentive-realignment-arc-strategy.md
fintech/frax-frxusd-defi-stablecoin.md
fintech/hkma-stablecoin-licensing-implications.md
systems/post-quantum-blockchain-day1-integration.md
exchanges/vetoken-host-protocol-flywheel.md
```

### R2-F4: Long-tail high/event freshness pages

- Goal: recheck and refresh the 69 source entries assigned to R2-F4 against public sources, then update `last_tended`, `review_by`, and any stale fact/source markers discovered during the review.
- Allowed files: exactly the source paths listed for this batch below; their `site/src/content/i18n/{ja,zh,en}/...` mirrors only when body changes require retranslation; generated discovery/API/LLM surfaces produced by `bun tools/release.ts --write`; and a release/closeout note only if the implementing issue explicitly requires one.
- Forbidden files: unrelated corpus pages, unrelated docs, `CONTRIBUTING.md`, and manual generated-surface edits not produced by the release command.
- Validation: `bun tools/fact_freshness_audit.ts --json`, `bun tools/wiki_link_audit.ts --fail-on-issues`, `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `bun run i18n:status`, and `git diff --check`.
- Batch source paths:

```text
systems/pectra-eip-7251-institutional-staking.md
fintech/carf-1099da-end-of-crypto-anonymity.md
systems/cross-chain-four-poles-selection-decision.md
systems/eigenlayer-avs-mechanism.md
systems/erc-7702-vs-erc-4337.md
systems/hyperlane-ism-modular-security.md
fintech/cosmos-ibc-for-financial-institutions.md
fintech/stablecoin-chain-sovereign-currency-divide.md
fintech/world-liberty-usd1-political-stablecoin.md
exchanges/cex-native-token-strategy-comparison.md
fintech/hk-frtb-stablecoin-reserve-overview.md
systems/bft-validator-economy-four-variables.md
fintech/cbbtc-institutional-btc-wrapper.md
fintech/stripe-usdb-bridge-stablecoin.md
leasing-firms/hokkaido-lease.md
exchanges/cex-api-sdk-ecosystem-comparison.md
leasing-firms/sumitomo-mitsui-auto-service.md
systems/hook-enforced-compliance.md
fintech/japan-listed-company-disclosure-monitoring.md
agent-economy/ai-company-payment-landscape.md
fintech/japan-third-party-allotment-5-step-flow.md
exchanges/fsa-snapshot-delta-log.md
security/forensic-identity-anchor-chain.md
security/bytecode-forensic-three-tier-verify.md
exchanges/jp-crypto-merchant-payment-lightning.md
retail/japan-retail-economic-sphere-comparison.md
systems/eigenlayer-l1-bootstrapping.md
finance/multi-jurisdiction-identity-tax-leverage.md
security/module-path-confusion-supply-chain-attack.md
security/wayback-machine-as-forensic-tool.md
agent-economy/skill-market-monetization.md
non-profit/japan-general-foundation-establishment-requirements.md
agent-economy/agent-actorship-debate.md
trading-company-finance/itochu-finance.md
trading-company-finance/mitsubishi-corp-finance.md
agent-economy/2026-04-08_agent-payment-infrastructure-research.md
exchanges/uae-vara-licensing-overview.md
exchanges/ve33-governance-mechanism.md
exchanges/cex-gopax-korea.md
trading-company-finance/mitsui-bussan-financial-services.md
trading-company-finance/sumitomo-corp-financial-management.md
exchanges/cex-matching-engine-wallet-architecture.md
trading-company-finance/marubeni-financial-services.md
agent-economy/erc-7715-overview.md
exchanges/jp-exchange-digital-asset-markets.md
exchanges/jp-exchange-monex.md
exchanges/jp-exchange-okcoin-japan.md
exchanges/jp-exchange-sblox.md
agent-economy/x402-http-payment-overview.md
trading-company-finance/sojitz-finance.md
agent-economy/ai-agent-payment-protocols-overview.md
exchanges/jp-cex-sales-vs-exchange-model-economics.md
fintech/fatf-travel-rule-cross-border-stack.md
fintech/mbridge-bis-multi-cbdc-vs-agora.md
fintech/national-license-private-stablecoin-with-dpi-export.md
fintech/sovereign-fund-crypto-allocation-pattern.md
systems/cross-chain-four-poles-ccip-institutional.md
systems/formal-spec-implementation-codesign.md
systems/hyperlane-vs-layerzero-ccip.md
exchanges/cex-wazirx-india.md
exchanges/jp-exchange-osl-japan.md
exchanges/jp-ieo-system-and-cases.md
trading-company-finance/toyota-tsusho-finance.md
fintech/tether-usat-anchorage.md
exchanges/jvcea-type2-associate-membership-system.md
fintech/singapore-mas-payment-services-act-strategic-implications.md
systems/cctp-v2-vs-canton.md
systems/multi-proof-aggregation-fault-prover.md
agent-economy/ap2-overview.md
```

### R2-F5: Remaining actionable freshness rows

- Goal: recheck and refresh the 80 source entries assigned to R2-F5 against public sources, then update `last_tended`, `review_by`, and any stale fact/source markers discovered during the review.
- Allowed files: exactly the source paths listed for this batch below; their `site/src/content/i18n/{ja,zh,en}/...` mirrors only when body changes require retranslation; generated discovery/API/LLM surfaces produced by `bun tools/release.ts --write`; and a release/closeout note only if the implementing issue explicitly requires one.
- Forbidden files: unrelated corpus pages, unrelated docs, `CONTRIBUTING.md`, and manual generated-surface edits not produced by the release command.
- Validation: `bun tools/fact_freshness_audit.ts --json`, `bun tools/wiki_link_audit.ts --fail-on-issues`, `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `bun run i18n:status`, and `git diff --check`.
- Batch source paths:

```text
exchanges/global-cex-prime-brokerage-layer.md
exchanges/jp-exchange-mercury.md
fintech/sovereign-capital-pool-aramco-anchor.md
exchanges/jp-crypto-staking-as-a-service-operators.md
exchanges/jp-foreign-exchange-bitcastle.md
agent-economy/privy-embedded-wallet-overview.md
fintech/circular-reserve-asset-flywheel-risk-cases.md
fintech/dual-currency-stablecoin-arbitrage-overview.md
fintech/mbridge-non-usd-settlement-ring-scale.md
fintech/mbridge-six-central-banks-roster.md
systems/canton-daml-technical-spec.md
systems/chain-abstraction-pattern-three-solutions.md
agent-economy/coinbase-cdp-developer-platform.md
exchanges/jp-cex-nft-marketplace-integration.md
fintech/retail-stablecoin-dual-bind.md
exchanges/jp-exchange-backseat-exchange.md
exchanges/jp-exchange-gaia.md
exchanges/jp-exchange-saxo-bank-japan.md
exchanges/jp-exchange-tokyo-hash.md
exchanges/mtgox-bankruptcy-processing-timeline.md
fintech/aml-cft-fatf-grey-list-overview.md
fintech/first-digital-fdusd-hk-stablecoin.md
securities-firms/japan-asia-securities.md
exchanges/cex-vietnam-overview.md
fintech/bis-project-ensemble-vs-mbridge-dual-track.md
fintech/dora-eu-digital-operational-resilience-overview.md
fintech/tokenized-deposit-cumulative-volume-scale.md
agent-economy/nevermined-compute-payment-protocol.md
fintech/protocol-renewal-trigger-as-event-anchor.md
systems/cctp-v2-technical-spec.md
exchanges/jp-exchange-btcbox.md
exchanges/jp-exchange-money-partners.md
exchanges/jp-exchange-traders-securities.md
exchanges/jp-exchange-trek-labs-japan.md
exchanges/jvcea-whitelist-listing-timeline.md
agent-economy/embedded-wallet-network-effects-moat.md
fintech/aml-cft-fatf-grey-list-cross-border-implications.md
fintech/basel-iii-frtb-crypto-exposure-implications.md
fintech/bis-project-guardian-vs-agora-asia-three-poles.md
systems/canton-mmf-coalition.md
asset-managers/mitsubishi-corp-asset-management.md
exchanges/jp-foreign-exchange-lbank.md
fintech/maina-wallet-kyc-permissionless-ux-bridge.md
exchanges/jp-exchange-gate-japan.md
exchanges/jp-exchange-gaudiy.md
fintech/basel-iii-frtb-crypto-exposure-overview.md
fintech/dora-eu-digital-operational-resilience-ctpp.md
systems/bft-validator-economy-tempo-vs-arc.md
fintech/2022-three-variable-cascade-thesis.md
systems/hyperledger-besu-vs-canton-migration.md
security/fork-and-rebrand-5-layer-audit-framework.md
agent-economy/privy-aws-agentcore-default-wallet.md
leasing-firms/kanematsu-leasing.md
exchanges/jp-exchange-goldenway-japan.md
exchanges/uk-fca-crypto-registration-overview.md
exchanges/jp-crypto-on-off-ramp-bridge-layer.md
fintech/three-circles-mra-2030-economic-scale.md
systems/chain-abstraction-pattern-value-capture.md
systems/l1-progressive-decentralization-three-phase.md
fintech/dual-currency-stablecoin-arbitrage-legal-hack.md
fintech/enterprise-procurement-deadline-anchor.md
fintech/four-motive-classes-asymmetric-competition.md
fintech/irs-1099-da.md
fintech/tokenized-mmf-wisdomtree-hashnote.md
agent-economy/erc-7715-agent-payment-stack.md
agent-economy/x402-cloudflare-aws-edge-integration.md
fintech/fx-onchain-as-stablecoin-final-boss.md
fintech/european-payments-initiative-wero.md
systems/eip-7708-native-asset-erc20-event-compat.md
agent-economy/ai-agent-payment-protocols-seven-layers.md
exchanges/korea-kimchi-premium-economics.md
agent-economy/ai-agent-payment-protocols-commoditization.md
exchanges/switzerland-finma-crypto-valley-overview.md
exchanges/taiwan-fsc-vasp-licensing-overview.md
agent-economy/ap2-adoption.md
agent-economy/ap2-technical-spec.md
card-issuers/aeon-financial-service-detail.md
agent-economy/solana-saga-seeker-mobile-stack-overview.md
agent-economy/solana-saga-vs-embedded-wallet-os-thesis.md
retail/japan-retail-media-finance-loop.md
```

## Full Ranked Queue

No rows are omitted from this table. `overrun` is cadence-overrun days, not just `days_overdue`; it captures rows where `review_by` has not passed but the class cadence is already due.

| Rank | Batch | Score | Path | Domain | Class | Last tended | Review by | Overrun | Inlinks | Flags | Reasons |
|---:|---|---:|---|---|---|---|---|---:|---:|---|---|
| 1 | R2-F1 | 48.7 | `megabanks/ndfg.md` | megabanks | event | 2026-05-26 | 2026-11-19 | 0 | 140 | tier1, entity, inlink>=50 | low_confidence, candidate_status, event_keyword |
| 2 | R2-F1 | 45.5 | `exchanges/global-cex-top10-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 62 | tier1, hub, inlink>=50 | candidate_status, event_keyword |
| 3 | R2-F1 | 44.9 | `exchanges/jp-vasp-parent-company-map.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 47 | tier1, hub | candidate_status, event_keyword |
| 4 | R2-F1 | 44.1 | `exchanges/global-dex-major-five-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 34 | tier1, hub | candidate_status, event_keyword |
| 5 | R2-F1 | 43.8 | `exchanges/korea-cex-five-pillars-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 29 | tier1, hub | candidate_status, event_keyword |
| 6 | R2-F1 | 43.8 | `exchanges/solana-ecosystem-dex-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 29 | tier1, hub | candidate_status, event_keyword |
| 7 | R2-F1 | 42.9 | `fintech/japan-epi-four-camps-comparison.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 21 | tier1, hub | candidate_status, registry_or_statistics_keyword |
| 8 | R2-F1 | 41.8 | `exchanges/global-perp-dex-five-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 12 | tier1, hub | candidate_status, event_keyword |
| 9 | R2-F1 | 41.6 | `exchanges/global-crypto-exchange-bankruptcy-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 11 | tier1, hub | candidate_status, event_keyword |
| 10 | R2-F1 | 41.4 | `exchanges/jp-listed-cex-related-companies-matrix.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 10 | tier1, hub | candidate_status, event_keyword |
| 11 | R2-F1 | 40.4 | `fintech/gold-tokenization-scheme-comparison.md` | fintech | event | 2026-05-05 | 2026-10-30 | 4 | 5 | hub | cadence_due, low_confidence, candidate_status, event_keyword |
| 12 | R2-F1 | 39 | `exchanges/fsa-vasp-registration-system.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 166 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 13 | R2-F1 | 39 | `exchanges/jp-exchange-bitbank.md` | exchanges | event | 2026-05-25 | 2027-05-18 | 0 | 28 | tier1 | low_confidence, candidate_status, event_keyword |
| 14 | R2-F1 | 38.9 | `fintech/japan-financial-regulation.md` | fintech | event | 2026-05-25 | 2026-10-30 | 0 | 253 | tier1, inlink>=50 | candidate_status, event_keyword |
| 15 | R2-F1 | 38.2 | `fintech/japan-bittrade-listing-process.md` | fintech | event | 2026-05-26 | 2026-11-13 | 0 | 26 | tier1 | low_confidence, candidate_status, event_keyword |
| 16 | R2-F1 | 37.7 | `exchanges/jp-vasp-security-audit-certification.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 13 | tier1 | low_confidence, candidate_status, registry_or_statistics_keyword |
| 17 | R2-F1 | 37.6 | `financial-regulators/missing-financial-institutions-backlog.md` | financial-regulators | event | 2026-05-22 | 2026-06-20 | 3 | 16 | tier1, due | review_by_due, event_keyword |
| 18 | R2-F1 | 37.4 | `fintech/genius-act-501-denylist-mandate.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 112 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 19 | R2-F1 | 36.7 | `exchanges/jvcea-self-regulatory-overview.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 77 | tier1, inlink>=50 | candidate_status, event_keyword |
| 20 | R2-F1 | 36.6 | `exchanges/jvcea-spot-volume-statistics-analysis.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 10 | tier1 | low_confidence, candidate_status, event_keyword |
| 21 | R2-F1 | 36.5 | `fintech/three-circles-stablecoin-mra-framework.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 76 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 22 | R2-F1 | 36.5 | `fintech/blackrock-buidl-tokenized-mmf-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 74 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 23 | R2-F1 | 36.1 | `exchanges/jp-exchange-bitflyer.md` | exchanges | event | 2026-05-30 | 2027-05-18 | 0 | 59 | tier1, inlink>=50 | candidate_status, event_keyword |
| 24 | R2-F1 | 35.9 | `fintech/mbridge-bis-multi-cbdc-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 58 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 25 | R2-F1 | 35.8 | `fintech/institutional-stablecoin-deposit-token-thesis.md` | fintech | high | 2026-05-12 | 2026-11-12 | 0 | 41 | tier1 | low_confidence, registry_or_statistics_keyword |
| 26 | R2-F1 | 35.6 | `fintech/bis-project-agora-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 51 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 27 | R2-F1 | 35.5 | `fintech/jp-trust-type-sc-architecture.md` | fintech | high | 2026-05-18 | 2026-11-18 | 0 | 50 | tier1, inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 28 | R2-F1 | 35.3 | `fintech/mica-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 46 | tier1 | candidate_status, registry_or_statistics_keyword |
| 29 | R2-F1 | 35.3 | `systems/erc-4337-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 46 | tier1 | candidate_status, registry_or_statistics_keyword |
| 30 | R2-F1 | 35.3 | `fintech/cbdc-multi-tier-architecture-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 45 | tier1 | candidate_status, registry_or_statistics_keyword |
| 31 | R2-F1 | 35.3 | `fintech/onchain-finance-vs-crypto-bifurcation.md` | fintech | event | 2026-05-12 | 2026-11-12 | 0 | 40 | tier1 | low_confidence, event_keyword |
| 32 | R2-F1 | 35.3 | `fintech/tether-business-model-short-treasury-yield.md` | fintech | high | 2026-05-12 | 2026-11-12 | 0 | 33 | tier1 | low_confidence, registry_or_statistics_keyword |
| 33 | R2-F1 | 35.2 | `exchanges/jp-exchange-gmo-coin.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 41 | tier1 | candidate_status, event_keyword |
| 34 | R2-F1 | 35.1 | `exchanges/jp-crypto-vc-fund-landscape.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 4 | hub | low_confidence, candidate_status, registry_or_statistics_keyword |
| 35 | R2-F1 | 35 | `fintech/jpmorgan-jpmd-coin.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 40 | tier1 | candidate_status, registry_or_statistics_keyword |
| 36 | R2-F2 | 35 | `systems/cctp-v2-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 40 | tier1 | candidate_status, registry_or_statistics_keyword |
| 37 | R2-F2 | 34.9 | `fintech/em-market-crypto-dollarization-pattern.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 38 | tier1 | candidate_status, registry_or_statistics_keyword |
| 38 | R2-F2 | 34.9 | `systems/eigenlayer-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 38 | tier1 | candidate_status, registry_or_statistics_keyword |
| 39 | R2-F2 | 34.8 | `systems/erc-7702-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 37 | tier1 | candidate_status, registry_or_statistics_keyword |
| 40 | R2-F2 | 34.7 | `exchanges/us-crypto-licensing-multi-layer-system.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 27 | tier1 | candidate_status, registry_or_statistics_keyword |
| 41 | R2-F2 | 34.7 | `fintech/japan-epi-three-types-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 35 | tier1 | candidate_status, registry_or_statistics_keyword |
| 42 | R2-F2 | 34.6 | `fintech/hkma-stablecoin-licensing-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 33 | tier1 | candidate_status, registry_or_statistics_keyword |
| 43 | R2-F2 | 34.6 | `fintech/jp-stablecoin-progmat.md` | fintech | high | 2026-05-25 | 2027-05-18 | 0 | 33 | tier1 | candidate_status, registry_or_statistics_keyword |
| 44 | R2-F2 | 34.6 | `fintech/jurisdiction-list-monetary-protectionism.md` | fintech | high | 2026-05-26 | 2026-11-16 | 0 | 33 | tier1 | candidate_status, registry_or_statistics_keyword |
| 45 | R2-F2 | 34.6 | `fintech/paypal-pyusd-stablecoin.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 33 | tier1 | candidate_status, registry_or_statistics_keyword |
| 46 | R2-F2 | 34.5 | `exchanges/jp-exchange-binance-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 30 | tier1 | candidate_status, event_keyword |
| 47 | R2-F2 | 34.5 | `exchanges/jp-vasp-incident-history.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 30 | tier1 | candidate_status, event_keyword |
| 48 | R2-F2 | 34.5 | `exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 25 | tier1 | candidate_status, registry_or_statistics_keyword |
| 49 | R2-F2 | 34.5 | `exchanges/amm-design-evolution.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 24 | tier1 | candidate_status, registry_or_statistics_keyword |
| 50 | R2-F2 | 34.4 | `exchanges/jp-vasp-regulatory-timeline.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 29 | tier1 | candidate_status, event_keyword |
| 51 | R2-F2 | 34.4 | `systems/canton-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 31 | tier1 | candidate_status, registry_or_statistics_keyword |
| 52 | R2-F2 | 34.4 | `exchanges/jp-vasp-aml-travel-rule-implementation.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 23 | tier1 | candidate_status, registry_or_statistics_keyword |
| 53 | R2-F2 | 34.3 | `fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 36 | tier1 | candidate_status, event_keyword |
| 54 | R2-F2 | 34.3 | `systems/cross-chain-four-poles-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 30 | tier1 | candidate_status, registry_or_statistics_keyword |
| 55 | R2-F2 | 34.3 | `exchanges/liquid-staking-restaking-cex-exposure.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 22 | tier1 | candidate_status, registry_or_statistics_keyword |
| 56 | R2-F2 | 34.1 | `exchanges/fsa-foreign-exchange-warning-system.md` | exchanges | event | 2026-05-25 | 2027-05-19 | 0 | 26 | tier1 | candidate_status, event_keyword |
| 57 | R2-F2 | 34.1 | `exchanges/jp-institutional-custody-three-pillars.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 25 | tier1 | candidate_status, event_keyword |
| 58 | R2-F2 | 34 | `exchanges/jp-vasp-ma-consolidation-history.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 24 | tier1 | candidate_status, event_keyword |
| 59 | R2-F2 | 34 | `systems/pectra-eip-7691-blob-l2-impact.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 26 | tier1 | candidate_status, registry_or_statistics_keyword |
| 60 | R2-F2 | 34 | `systems/threshold-bft-consensus-rust-implementations.md` | systems | high | 2026-05-13 | 2026-11-13 | 0 | 26 | tier1 | candidate_status, registry_or_statistics_keyword |
| 61 | R2-F2 | 33.9 | `fintech/ai-payment-two-tracks.md` | fintech | high | 2026-05-26 | 2026-10-30 | 0 | 25 | tier1 | candidate_status, registry_or_statistics_keyword |
| 62 | R2-F2 | 33.9 | `exchanges/native-dex-flip-incumbent-pattern.md` | exchanges | high | 2026-05-26 | 2026-11-16 | 0 | 19 | tier1 | candidate_status, registry_or_statistics_keyword |
| 63 | R2-F2 | 33.8 | `fintech/cbdc-multi-tier-architecture-three-paradigms.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 30 | tier1 | candidate_status, event_keyword |
| 64 | R2-F2 | 33.8 | `fintech/central-banking-function-unbundling.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 29 | tier1 | candidate_status, event_keyword |
| 65 | R2-F2 | 33.8 | `fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 29 | tier1 | candidate_status, event_keyword |
| 66 | R2-F2 | 33.8 | `fintech/stablecoin-revenue-split-economics.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 24 | tier1 | candidate_status, registry_or_statistics_keyword |
| 67 | R2-F2 | 33.8 | `systems/bft-validator-economy-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 24 | tier1 | candidate_status, registry_or_statistics_keyword |
| 68 | R2-F2 | 33.8 | `systems/chain-abstraction-pattern-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 24 | tier1 | candidate_status, registry_or_statistics_keyword |
| 69 | R2-F2 | 33.8 | `systems/chainlink-ccip-institutional-messaging.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 24 | tier1 | candidate_status, registry_or_statistics_keyword |
| 70 | R2-F2 | 33.8 | `exchanges/global-institutional-custody-five-pillars.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 18 | tier1 | candidate_status, registry_or_statistics_keyword |
| 71 | R2-F2 | 33.8 | `exchanges/jp-cex-deposit-token-stablecoin-integration.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 18 | tier1 | candidate_status, registry_or_statistics_keyword |
| 72 | R2-F2 | 33.8 | `exchanges/jp-vasp-derivative-license-system.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 18 | tier1 | candidate_status, registry_or_statistics_keyword |
| 73 | R2-F2 | 33.7 | `exchanges/hk-sfc-vasp-licensing-overview.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 21 | tier1 | candidate_status, event_keyword |
| 74 | R2-F2 | 33.7 | `fintech/circular-reserve-asset-flywheel-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 23 | tier1 | candidate_status, registry_or_statistics_keyword |
| 75 | R2-F2 | 33.7 | `fintech/cross-border-sc-via-swift-api.md` | fintech | high | 2026-05-18 | 2026-11-18 | 0 | 23 | tier1 | candidate_status, registry_or_statistics_keyword |
| 76 | R2-F2 | 33.7 | `exchanges/eu-mica-casp-regime-overview.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 17 | tier1 | candidate_status, registry_or_statistics_keyword |
| 77 | R2-F2 | 33.7 | `exchanges/jp-exchange-crypto-garage.md` | exchanges | high | 2026-05-18 | 2027-05-18 | 0 | 17 | tier1 | candidate_status, registry_or_statistics_keyword |
| 78 | R2-F2 | 33.7 | `exchanges/jp-vasp-cold-storage-segregation-rules.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 17 | tier1 | candidate_status, registry_or_statistics_keyword |
| 79 | R2-F2 | 33.7 | `exchanges/rwa-tokenization-cex-integration.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 17 | tier1 | candidate_status, registry_or_statistics_keyword |
| 80 | R2-F2 | 33.6 | `fintech/japan-ecisb-license.md` | fintech | high | 2026-05-26 | 2026-10-30 | 0 | 22 | tier1 | candidate_status, registry_or_statistics_keyword |
| 81 | R2-F2 | 33.6 | `fintech/multi-megabank-consortium-governance.md` | fintech | high | 2026-05-18 | 2026-11-18 | 0 | 22 | tier1 | candidate_status, registry_or_statistics_keyword |
| 82 | R2-F2 | 33.5 | `exchanges/coincheck-nem-hack-detailed-analysis.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 20 | tier1 | candidate_status, event_keyword |
| 83 | R2-F2 | 33.5 | `exchanges/jp-exchange-custodiem.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 20 | tier1 | candidate_status, event_keyword |
| 84 | R2-F2 | 33.5 | `exchanges/global-crypto-forensics-vendor-layer.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 16 | tier1 | candidate_status, registry_or_statistics_keyword |
| 85 | R2-F2 | 33.5 | `exchanges/jp-exchange-laser-digital-japan.md` | exchanges | high | 2026-05-18 | 2027-05-18 | 0 | 16 | tier1 | candidate_status, registry_or_statistics_keyword |
| 86 | R2-F3 | 33.5 | `exchanges/sg-mas-dpt-licensing-overview.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 16 | tier1 | candidate_status, registry_or_statistics_keyword |
| 87 | R2-F3 | 33.5 | `fintech/apollo-acred-private-credit-tokenization.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 21 | tier1 | candidate_status, registry_or_statistics_keyword |
| 88 | R2-F3 | 33.5 | `fintech/cbdc-multi-tier-architecture-tradeoffs.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 21 | tier1 | candidate_status, registry_or_statistics_keyword |
| 89 | R2-F3 | 33.5 | `fintech/protocol-hedge-strategy-stripe-pattern.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 21 | tier1 | candidate_status, registry_or_statistics_keyword |
| 90 | R2-F3 | 33.5 | `fintech/wall-street-crypto-network-neutrality.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 21 | tier1 | candidate_status, registry_or_statistics_keyword |
| 91 | R2-F3 | 33.4 | `fintech/jp-stablecoin-dcjpy.md` | fintech | event | 2026-05-18 | 2027-05-18 | 0 | 25 | tier1 | candidate_status, event_keyword |
| 92 | R2-F3 | 33.3 | `exchanges/bybit-lazarus-hack-detailed-analysis.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 18 | tier1 | candidate_status, event_keyword |
| 93 | R2-F3 | 33.3 | `exchanges/fsa-business-improvement-orders-history.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 18 | tier1 | candidate_status, event_keyword |
| 94 | R2-F3 | 33.3 | `exchanges/jp-exchange-bittrade.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 18 | tier1 | candidate_status, event_keyword |
| 95 | R2-F3 | 33.3 | `fintech/india-anti-dollar-dpi-alliance.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 19 | tier1 | candidate_status, registry_or_statistics_keyword |
| 96 | R2-F3 | 33.3 | `systems/hyperlane-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 19 | tier1 | candidate_status, registry_or_statistics_keyword |
| 97 | R2-F3 | 33.2 | `fintech/embedded-wallet-fintech-disintermediation-overview.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 23 | tier1 | candidate_status, event_keyword |
| 98 | R2-F3 | 33.2 | `exchanges/jp-exchange-rakuten-wallet.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 17 | tier1 | candidate_status, event_keyword |
| 99 | R2-F3 | 33.2 | `fintech/sky-usds-decentralized-stablecoin.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 18 | tier1 | candidate_status, registry_or_statistics_keyword |
| 100 | R2-F3 | 33.2 | `systems/layerzero-v2-omnichain-messaging.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 18 | tier1 | candidate_status, registry_or_statistics_keyword |
| 101 | R2-F3 | 33.2 | `regional-banks/hokkoku-fhd.md` | regional-banks | event | 2026-05-26 | 2026-11-15 | 0 | 28 | tier1 | borderline_status, event_keyword |
| 102 | R2-F3 | 33.1 | `exchanges/cross-chain-bridge-cex-deposit-withdrawal.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 13 | tier1 | candidate_status, registry_or_statistics_keyword |
| 103 | R2-F3 | 33 | `fintech/gray-market-dollar-network-formalization.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 21 | tier1 | candidate_status, event_keyword |
| 104 | R2-F3 | 33 | `fintech/issuer-distributor-incentive-realignment-50-50-model.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 21 | tier1 | candidate_status, event_keyword |
| 105 | R2-F3 | 33 | `fintech/bis-project-ensemble-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 17 | tier1 | candidate_status, registry_or_statistics_keyword |
| 106 | R2-F3 | 33 | `fintech/fatf-travel-rule-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 17 | tier1 | candidate_status, registry_or_statistics_keyword |
| 107 | R2-F3 | 32.9 | `exchanges/jp-crypto-market-maker-otc-layer.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 15 | tier1 | candidate_status, event_keyword |
| 108 | R2-F3 | 32.9 | `exchanges/jvcea-whitelist-token-listing.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 15 | tier1 | candidate_status, event_keyword |
| 109 | R2-F3 | 32.9 | `fintech/chain-level-ofac-freeze-precedent.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 16 | tier1 | candidate_status, registry_or_statistics_keyword |
| 110 | R2-F3 | 32.9 | `fintech/m-network-m0-neutral-infrastructure.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 16 | tier1 | candidate_status, registry_or_statistics_keyword |
| 111 | R2-F3 | 32.9 | `fintech/singapore-mas-payment-services-act-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 16 | tier1 | candidate_status, registry_or_statistics_keyword |
| 112 | R2-F3 | 32.9 | `exchanges/jp-cex-staking-lending-regulation.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 12 | tier1 | candidate_status, registry_or_statistics_keyword |
| 113 | R2-F3 | 32.8 | `fintech/cftc-sec-crypto-jurisdiction.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 19 | tier1 | candidate_status, event_keyword |
| 114 | R2-F3 | 32.8 | `fintech/stablecoin-chain-token-strategy-trilemma.md` | fintech | event | 2026-05-26 | 2026-11-13 | 0 | 19 | tier1 | candidate_status, event_keyword |
| 115 | R2-F3 | 32.8 | `fintech/blackrock-buidl-sc-issuer-adoption.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 15 | tier1 | candidate_status, registry_or_statistics_keyword |
| 116 | R2-F3 | 32.8 | `fintech/portfolio-winner-structure-arm-analog.md` | fintech | high | 2026-05-26 | 2026-11-16 | 0 | 15 | tier1 | candidate_status, registry_or_statistics_keyword |
| 117 | R2-F3 | 32.8 | `systems/dag-bft-vs-chain-bft-architecture.md` | systems | high | 2026-05-26 | 2026-11-13 | 0 | 15 | tier1 | candidate_status, registry_or_statistics_keyword |
| 118 | R2-F3 | 32.8 | `systems/vitalik-l1-l2-strategy-anchor.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 15 | tier1 | candidate_status, registry_or_statistics_keyword |
| 119 | R2-F3 | 32.7 | `exchanges/ftx-japan-100pct-return-case-study.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 14 | tier1 | candidate_status, event_keyword |
| 120 | R2-F3 | 32.7 | `exchanges/btc-spot-etf-japan-impact.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 11 | tier1 | candidate_status, registry_or_statistics_keyword |
| 121 | R2-F3 | 32.6 | `exchanges/jp-exchange-mercoin.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 13 | tier1 | candidate_status, event_keyword |
| 122 | R2-F3 | 32.6 | `exchanges/jp-exchange-zaif.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 13 | tier1 | candidate_status, event_keyword |
| 123 | R2-F3 | 32.6 | `fintech/bis-project-agora-vs-mbridge.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 14 | tier1 | candidate_status, registry_or_statistics_keyword |
| 124 | R2-F3 | 32.6 | `fintech/bis-project-guardian-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 14 | tier1 | candidate_status, registry_or_statistics_keyword |
| 125 | R2-F3 | 32.6 | `systems/erc-4337-userop-bundler-flow.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 14 | tier1 | candidate_status, registry_or_statistics_keyword |
| 126 | R2-F3 | 32.6 | `systems/hyperledger-besu-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 14 | tier1 | candidate_status, registry_or_statistics_keyword |
| 127 | R2-F3 | 32.5 | `fintech/mica-emt-art-subcategories-deep-dive.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 17 | tier1 | candidate_status, event_keyword |
| 128 | R2-F3 | 32.5 | `fintech/ripple-rlusd-stablecoin.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 17 | tier1 | candidate_status, event_keyword |
| 129 | R2-F3 | 32.5 | `exchanges/jp-cex-points-economy-integration.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 10 | tier1 | candidate_status, registry_or_statistics_keyword |
| 130 | R2-F3 | 32.4 | `fintech/mica-cross-border-implications.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 16 | tier1 | candidate_status, event_keyword |
| 131 | R2-F3 | 32.4 | `fintech/regulatory-window-strategic-acquisition.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 16 | tier1 | candidate_status, event_keyword |
| 132 | R2-F3 | 32.4 | `fintech/stablecoin-channel-japan-sbi-jpyc-ring.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 16 | tier1 | candidate_status, event_keyword |
| 133 | R2-F3 | 32.4 | `systems/erc-4337-embedded-wallet-adoption.md` | systems | event | 2026-05-26 | 2026-11-18 | 0 | 16 | tier1 | candidate_status, event_keyword |
| 134 | R2-F3 | 32.4 | `exchanges/jp-crypto-asset-taxation-detailed.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 12 | tier1 | candidate_status, event_keyword |
| 135 | R2-F3 | 32.4 | `exchanges/jp-custody-ginco.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 12 | tier1 | candidate_status, event_keyword |
| 136 | R2-F3 | 32.4 | `exchanges/jp-exchange-line-xenesis.md` | exchanges | event | 2026-05-25 | 2026-07-01 | 0 | 12 | tier1 | candidate_status, event_keyword |
| 137 | R2-F3 | 32.4 | `fintech/fnality-wholesale-settlement.md` | fintech | high | 2026-05-26 | 2026-11-25 | 0 | 13 | tier1 | candidate_status, registry_or_statistics_keyword |
| 138 | R2-F3 | 32.4 | `fintech/partior-jpm-dbs-temasek-consortium.md` | fintech | high | 2026-05-26 | 2026-11-25 | 0 | 13 | tier1 | candidate_status, registry_or_statistics_keyword |
| 139 | R2-F3 | 32.4 | `systems/pectra-upgrade-overview.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 13 | tier1 | candidate_status, registry_or_statistics_keyword |
| 140 | R2-F3 | 32.4 | `non-profit/japan-research-grant-map-2026.md` | non-profit | high | 2026-05-05 | 2026-10-30 | 0 | 16 | hub | low_confidence, candidate_status, registry_or_statistics_keyword |
| 141 | R2-F3 | 32.3 | `fintech/issuer-distributor-incentive-realignment-arc-strategy.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 15 | tier1 | candidate_status, event_keyword |
| 142 | R2-F3 | 32.3 | `fintech/frax-frxusd-defi-stablecoin.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 12 | tier1 | candidate_status, registry_or_statistics_keyword |
| 143 | R2-F3 | 32.3 | `fintech/hkma-stablecoin-licensing-implications.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 12 | tier1 | candidate_status, registry_or_statistics_keyword |
| 144 | R2-F3 | 32.3 | `systems/post-quantum-blockchain-day1-integration.md` | systems | high | 2026-05-26 | 2026-11-13 | 0 | 12 | tier1 | candidate_status, registry_or_statistics_keyword |
| 145 | R2-F3 | 32.2 | `exchanges/vetoken-host-protocol-flywheel.md` | exchanges | event | 2026-05-26 | 2026-11-16 | 0 | 11 | tier1 | candidate_status, event_keyword |
| 146 | R2-F4 | 32.1 | `systems/pectra-eip-7251-institutional-staking.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 11 | tier1 | candidate_status, registry_or_statistics_keyword |
| 147 | R2-F4 | 31.9 | `fintech/carf-1099da-end-of-crypto-anonymity.md` | fintech | high | 2026-05-26 | 2026-11-13 | 0 | 10 | tier1 | candidate_status, registry_or_statistics_keyword |
| 148 | R2-F4 | 31.9 | `systems/cross-chain-four-poles-selection-decision.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 10 | tier1 | candidate_status, registry_or_statistics_keyword |
| 149 | R2-F4 | 31.9 | `systems/eigenlayer-avs-mechanism.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 10 | tier1 | candidate_status, registry_or_statistics_keyword |
| 150 | R2-F4 | 31.9 | `systems/erc-7702-vs-erc-4337.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 10 | tier1 | candidate_status, registry_or_statistics_keyword |
| 151 | R2-F4 | 31.9 | `systems/hyperlane-ism-modular-security.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 10 | tier1 | candidate_status, registry_or_statistics_keyword |
| 152 | R2-F4 | 31.8 | `fintech/cosmos-ibc-for-financial-institutions.md` | fintech | event | 2026-05-18 | 2026-11-18 | 0 | 12 | tier1 | candidate_status, event_keyword |
| 153 | R2-F4 | 31.8 | `fintech/stablecoin-chain-sovereign-currency-divide.md` | fintech | event | 2026-05-26 | 2026-11-13 | 0 | 12 | tier1 | candidate_status, event_keyword |
| 154 | R2-F4 | 31.8 | `fintech/world-liberty-usd1-political-stablecoin.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 12 | tier1 | candidate_status, event_keyword |
| 155 | R2-F4 | 31.8 | `exchanges/cex-native-token-strategy-comparison.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 9 | hub | candidate_status, event_keyword |
| 156 | R2-F4 | 31.6 | `fintech/hk-frtb-stablecoin-reserve-overview.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 11 | tier1 | candidate_status, event_keyword |
| 157 | R2-F4 | 31.6 | `systems/bft-validator-economy-four-variables.md` | systems | event | 2026-05-26 | 2026-11-18 | 0 | 11 | tier1 | candidate_status, event_keyword |
| 158 | R2-F4 | 31.4 | `fintech/cbbtc-institutional-btc-wrapper.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 10 | tier1 | candidate_status, event_keyword |
| 159 | R2-F4 | 31.4 | `fintech/stripe-usdb-bridge-stablecoin.md` | fintech | event | 2026-05-26 | 2026-11-25 | 0 | 10 | tier1 | candidate_status, event_keyword |
| 160 | R2-F4 | 31.1 | `leasing-firms/hokkaido-lease.md` | leasing-firms | event | 2026-05-24 | 2026-11-20 | 0 | 15 | tier1 | low_confidence, event_keyword |
| 161 | R2-F4 | 31 | `exchanges/cex-api-sdk-ecosystem-comparison.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 5 | hub | candidate_status, registry_or_statistics_keyword |
| 162 | R2-F4 | 31 | `leasing-firms/sumitomo-mitsui-auto-service.md` | leasing-firms | event | 2026-05-26 | 2026-11-20 | 0 | 14 | tier1 | low_confidence, event_keyword |
| 163 | R2-F4 | 29.4 | `systems/hook-enforced-compliance.md` | systems | event | 2026-05-05 | 2026-10-30 | 4 | 3 | - | cadence_due, low_confidence, candidate_status, event_keyword |
| 164 | R2-F4 | 28.7 | `fintech/japan-listed-company-disclosure-monitoring.md` | fintech | event | 2026-05-05 | 2026-10-30 | 4 | 8 | - | cadence_due, low_confidence, event_keyword |
| 165 | R2-F4 | 28.3 | `agent-economy/ai-company-payment-landscape.md` | agent-economy | high | 2026-05-26 | 2026-10-30 | 0 | 11 | hub | candidate_status, registry_or_statistics_keyword |
| 166 | R2-F4 | 28.1 | `fintech/japan-third-party-allotment-5-step-flow.md` | fintech | event | 2026-05-05 | 2026-10-30 | 4 | 6 | - | cadence_due, low_confidence, event_keyword |
| 167 | R2-F4 | 26.3 | `exchanges/fsa-snapshot-delta-log.md` | exchanges | event | 2026-05-30 | 2026-11-25 | 0 | 0 | hub | candidate_status, event_keyword |
| 168 | R2-F4 | 26.1 | `security/forensic-identity-anchor-chain.md` | security | high | 2026-05-26 | 2026-11-08 | 0 | 23 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 169 | R2-F4 | 26 | `security/bytecode-forensic-three-tier-verify.md` | security | high | 2026-05-26 | 2026-11-08 | 0 | 22 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 170 | R2-F4 | 25.9 | `exchanges/jp-crypto-merchant-payment-lightning.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 5 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 171 | R2-F4 | 25.6 | `retail/japan-retail-economic-sphere-comparison.md` | retail | high | 2026-06-03 | 2026-12-03 | 0 | 4 | hub | low_confidence, registry_or_statistics_keyword |
| 172 | R2-F4 | 25.6 | `systems/eigenlayer-l1-bootstrapping.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 6 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 173 | R2-F4 | 25.5 | `finance/multi-jurisdiction-identity-tax-leverage.md` | finance | event | 2026-05-26 | 2026-10-30 | 0 | 16 | - | low_confidence, candidate_status, event_keyword |
| 174 | R2-F4 | 24.6 | `security/module-path-confusion-supply-chain-attack.md` | security | high | 2026-05-26 | 2026-11-08 | 0 | 12 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 175 | R2-F4 | 24.2 | `security/wayback-machine-as-forensic-tool.md` | security | high | 2026-05-26 | 2026-11-08 | 0 | 10 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 176 | R2-F4 | 24 | `agent-economy/skill-market-monetization.md` | agent-economy | high | 2026-05-26 | 2026-10-30 | 0 | 16 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 177 | R2-F4 | 23.9 | `non-profit/japan-general-foundation-establishment-requirements.md` | non-profit | high | 2026-05-05 | 2026-10-30 | 0 | 27 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 178 | R2-F4 | 23.8 | `agent-economy/agent-actorship-debate.md` | agent-economy | high | 2026-05-26 | 2026-10-30 | 0 | 15 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 179 | R2-F4 | 23 | `trading-company-finance/itochu-finance.md` | trading-company-finance | event | 2026-05-26 | 2026-11-20 | 0 | 35 | - | low_confidence, event_keyword |
| 180 | R2-F4 | 23 | `trading-company-finance/mitsubishi-corp-finance.md` | trading-company-finance | event | 2026-05-26 | 2026-11-20 | 0 | 35 | - | low_confidence, event_keyword |
| 181 | R2-F4 | 22.9 | `agent-economy/2026-04-08_agent-payment-infrastructure-research.md` | agent-economy | high | 2026-05-26 | 2026-10-30 | 0 | 10 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 182 | R2-F4 | 22.8 | `exchanges/uae-vara-licensing-overview.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 183 | R2-F4 | 22.8 | `exchanges/ve33-governance-mechanism.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 184 | R2-F4 | 22.8 | `exchanges/cex-gopax-korea.md` | exchanges | event | 2026-05-25 | 2027-05-25 | 0 | 8 | - | borderline_status, event_keyword |
| 185 | R2-F4 | 22.7 | `trading-company-finance/mitsui-bussan-financial-services.md` | trading-company-finance | event | 2026-05-26 | 2026-11-20 | 0 | 30 | - | low_confidence, event_keyword |
| 186 | R2-F4 | 22.7 | `trading-company-finance/sumitomo-corp-financial-management.md` | trading-company-finance | event | 2026-05-26 | 2026-11-20 | 0 | 30 | - | low_confidence, event_keyword |
| 187 | R2-F4 | 22.6 | `exchanges/cex-matching-engine-wallet-architecture.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 8 | - | candidate_status, registry_or_statistics_keyword |
| 188 | R2-F4 | 22.6 | `trading-company-finance/marubeni-financial-services.md` | trading-company-finance | event | 2026-05-26 | 2026-11-20 | 0 | 29 | - | low_confidence, event_keyword |
| 189 | R2-F4 | 22.5 | `agent-economy/erc-7715-overview.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 53 | inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 190 | R2-F4 | 22.4 | `exchanges/jp-exchange-digital-asset-markets.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 9 | - | candidate_status, event_keyword |
| 191 | R2-F4 | 22.4 | `exchanges/jp-exchange-monex.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 9 | - | candidate_status, event_keyword |
| 192 | R2-F4 | 22.4 | `exchanges/jp-exchange-okcoin-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 9 | - | candidate_status, event_keyword |
| 193 | R2-F4 | 22.4 | `exchanges/jp-exchange-sblox.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 9 | - | candidate_status, event_keyword |
| 194 | R2-F4 | 22.4 | `agent-economy/x402-http-payment-overview.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 50 | inlink>=50 | candidate_status, registry_or_statistics_keyword |
| 195 | R2-F4 | 22.4 | `trading-company-finance/sojitz-finance.md` | trading-company-finance | high | 2026-05-26 | 2026-11-20 | 0 | 22 | - | low_confidence, registry_or_statistics_keyword |
| 196 | R2-F4 | 22.3 | `agent-economy/ai-agent-payment-protocols-overview.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 49 | - | candidate_status, registry_or_statistics_keyword |
| 197 | R2-F4 | 22.3 | `exchanges/jp-cex-sales-vs-exchange-model-economics.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 198 | R2-F4 | 22.2 | `fintech/fatf-travel-rule-cross-border-stack.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 199 | R2-F4 | 22.2 | `fintech/mbridge-bis-multi-cbdc-vs-agora.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 200 | R2-F4 | 22.2 | `fintech/national-license-private-stablecoin-with-dpi-export.md` | fintech | high | 2026-05-26 | 2026-11-16 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 201 | R2-F4 | 22.2 | `fintech/sovereign-fund-crypto-allocation-pattern.md` | fintech | high | 2026-05-26 | 2026-11-16 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 202 | R2-F4 | 22.2 | `systems/cross-chain-four-poles-ccip-institutional.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 203 | R2-F4 | 22.2 | `systems/formal-spec-implementation-codesign.md` | systems | high | 2026-05-26 | 2026-11-16 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 204 | R2-F4 | 22.2 | `systems/hyperlane-vs-layerzero-ccip.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 9 | - | candidate_status, registry_or_statistics_keyword |
| 205 | R2-F4 | 22.2 | `exchanges/cex-wazirx-india.md` | exchanges | event | 2026-05-25 | 2027-05-25 | 0 | 6 | - | borderline_status, event_keyword |
| 206 | R2-F4 | 22.1 | `exchanges/jp-exchange-osl-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 8 | - | candidate_status, event_keyword |
| 207 | R2-F4 | 22.1 | `exchanges/jp-ieo-system-and-cases.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 8 | - | candidate_status, event_keyword |
| 208 | R2-F4 | 22.1 | `trading-company-finance/toyota-tsusho-finance.md` | trading-company-finance | event | 2026-05-26 | 2026-11-20 | 0 | 24 | - | low_confidence, event_keyword |
| 209 | R2-F4 | 22.1 | `fintech/tether-usat-anchorage.md` | fintech | event | 2026-05-26 | 2026-11-25 | 0 | 1 | - | low_confidence, candidate_status, event_keyword |
| 210 | R2-F4 | 22 | `exchanges/jvcea-type2-associate-membership-system.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 6 | - | candidate_status, registry_or_statistics_keyword |
| 211 | R2-F4 | 22 | `fintech/singapore-mas-payment-services-act-strategic-implications.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 8 | - | candidate_status, registry_or_statistics_keyword |
| 212 | R2-F4 | 22 | `systems/cctp-v2-vs-canton.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 8 | - | candidate_status, registry_or_statistics_keyword |
| 213 | R2-F4 | 22 | `systems/multi-proof-aggregation-fault-prover.md` | systems | high | 2026-05-26 | 2026-11-16 | 0 | 8 | - | candidate_status, registry_or_statistics_keyword |
| 214 | R2-F4 | 22 | `agent-economy/ap2-overview.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 42 | - | candidate_status, registry_or_statistics_keyword |
| 215 | R2-F5 | 21.9 | `exchanges/global-cex-prime-brokerage-layer.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 7 | - | candidate_status, event_keyword |
| 216 | R2-F5 | 21.9 | `exchanges/jp-exchange-mercury.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 7 | - | candidate_status, event_keyword |
| 217 | R2-F5 | 21.8 | `fintech/sovereign-capital-pool-aramco-anchor.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 9 | - | candidate_status, event_keyword |
| 218 | R2-F5 | 21.8 | `exchanges/jp-crypto-staking-as-a-service-operators.md` | exchanges | event | 2026-05-24 | 2026-11-20 | 0 | 5 | - | low_confidence, event_keyword |
| 219 | R2-F5 | 21.8 | `exchanges/jp-foreign-exchange-bitcastle.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 5 | - | low_confidence, event_keyword |
| 220 | R2-F5 | 21.7 | `agent-economy/privy-embedded-wallet-overview.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 45 | - | candidate_status, event_keyword |
| 221 | R2-F5 | 21.7 | `fintech/circular-reserve-asset-flywheel-risk-cases.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 222 | R2-F5 | 21.7 | `fintech/dual-currency-stablecoin-arbitrage-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 223 | R2-F5 | 21.7 | `fintech/mbridge-non-usd-settlement-ring-scale.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 224 | R2-F5 | 21.7 | `fintech/mbridge-six-central-banks-roster.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 225 | R2-F5 | 21.7 | `systems/canton-daml-technical-spec.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 226 | R2-F5 | 21.7 | `systems/chain-abstraction-pattern-three-solutions.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 227 | R2-F5 | 21.6 | `agent-economy/coinbase-cdp-developer-platform.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 43 | - | candidate_status, event_keyword |
| 228 | R2-F5 | 21.6 | `exchanges/jp-cex-nft-marketplace-integration.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 5 | - | candidate_status, registry_or_statistics_keyword |
| 229 | R2-F5 | 21.6 | `fintech/retail-stablecoin-dual-bind.md` | fintech | event | 2026-05-12 | 2026-11-12 | 0 | 6 | - | low_confidence, event_keyword |
| 230 | R2-F5 | 21.5 | `exchanges/jp-exchange-backseat-exchange.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 6 | - | candidate_status, event_keyword |
| 231 | R2-F5 | 21.5 | `exchanges/jp-exchange-gaia.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 6 | - | candidate_status, event_keyword |
| 232 | R2-F5 | 21.5 | `exchanges/jp-exchange-saxo-bank-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 6 | - | candidate_status, event_keyword |
| 233 | R2-F5 | 21.5 | `exchanges/jp-exchange-tokyo-hash.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 6 | - | candidate_status, event_keyword |
| 234 | R2-F5 | 21.5 | `exchanges/mtgox-bankruptcy-processing-timeline.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 6 | - | candidate_status, event_keyword |
| 235 | R2-F5 | 21.5 | `fintech/aml-cft-fatf-grey-list-overview.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 8 | - | candidate_status, event_keyword |
| 236 | R2-F5 | 21.5 | `fintech/first-digital-fdusd-hk-stablecoin.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 8 | - | candidate_status, event_keyword |
| 237 | R2-F5 | 21.5 | `securities-firms/japan-asia-securities.md` | securities-firms | event | 2026-05-25 | 2026-11-25 | 0 | 1 | - | low_confidence, candidate_status, event_keyword |
| 238 | R2-F5 | 21.5 | `exchanges/cex-vietnam-overview.md` | exchanges | high | 2026-05-25 | 2027-05-25 | 0 | 0 | - | low_confidence, candidate_status, registry_or_statistics_keyword |
| 239 | R2-F5 | 21.4 | `fintech/bis-project-ensemble-vs-mbridge-dual-track.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 6 | - | candidate_status, registry_or_statistics_keyword |
| 240 | R2-F5 | 21.4 | `fintech/dora-eu-digital-operational-resilience-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 6 | - | candidate_status, registry_or_statistics_keyword |
| 241 | R2-F5 | 21.4 | `fintech/tokenized-deposit-cumulative-volume-scale.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 6 | - | candidate_status, registry_or_statistics_keyword |
| 242 | R2-F5 | 21.3 | `agent-economy/nevermined-compute-payment-protocol.md` | agent-economy | event | 2026-05-25 | 2026-11-25 | 0 | 6 | - | low_confidence, candidate_status, event_keyword |
| 243 | R2-F5 | 21.2 | `fintech/protocol-renewal-trigger-as-event-anchor.md` | fintech | event | 2026-05-26 | 2026-11-20 | 0 | 7 | - | candidate_status, event_keyword |
| 244 | R2-F5 | 21.2 | `systems/cctp-v2-technical-spec.md` | systems | event | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, event_keyword |
| 245 | R2-F5 | 21.2 | `exchanges/jp-exchange-btcbox.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 5 | - | candidate_status, event_keyword |
| 246 | R2-F5 | 21.2 | `exchanges/jp-exchange-money-partners.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 5 | - | candidate_status, event_keyword |
| 247 | R2-F5 | 21.2 | `exchanges/jp-exchange-traders-securities.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 5 | - | candidate_status, event_keyword |
| 248 | R2-F5 | 21.2 | `exchanges/jp-exchange-trek-labs-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 5 | - | candidate_status, event_keyword |
| 249 | R2-F5 | 21.2 | `exchanges/jvcea-whitelist-listing-timeline.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 5 | - | candidate_status, event_keyword |
| 250 | R2-F5 | 21 | `agent-economy/embedded-wallet-network-effects-moat.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 28 | - | candidate_status, registry_or_statistics_keyword |
| 251 | R2-F5 | 21 | `fintech/aml-cft-fatf-grey-list-cross-border-implications.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 5 | - | candidate_status, registry_or_statistics_keyword |
| 252 | R2-F5 | 21 | `fintech/basel-iii-frtb-crypto-exposure-implications.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 5 | - | candidate_status, registry_or_statistics_keyword |
| 253 | R2-F5 | 21 | `fintech/bis-project-guardian-vs-agora-asia-three-poles.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 5 | - | candidate_status, registry_or_statistics_keyword |
| 254 | R2-F5 | 21 | `systems/canton-mmf-coalition.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 5 | - | candidate_status, registry_or_statistics_keyword |
| 255 | R2-F5 | 21 | `asset-managers/mitsubishi-corp-asset-management.md` | asset-managers | event | 2026-05-26 | 2026-11-20 | 0 | 6 | - | low_confidence, event_keyword |
| 256 | R2-F5 | 20.9 | `exchanges/jp-foreign-exchange-lbank.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 3 | - | low_confidence, event_keyword |
| 257 | R2-F5 | 20.8 | `fintech/maina-wallet-kyc-permissionless-ux-bridge.md` | fintech | event | 2026-05-12 | 2026-11-12 | 0 | 4 | - | low_confidence, event_keyword |
| 258 | R2-F5 | 20.7 | `exchanges/jp-exchange-gate-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 4 | - | candidate_status, event_keyword |
| 259 | R2-F5 | 20.7 | `exchanges/jp-exchange-gaudiy.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 4 | - | candidate_status, event_keyword |
| 260 | R2-F5 | 20.6 | `fintech/basel-iii-frtb-crypto-exposure-overview.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 4 | - | candidate_status, registry_or_statistics_keyword |
| 261 | R2-F5 | 20.6 | `fintech/dora-eu-digital-operational-resilience-ctpp.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 4 | - | candidate_status, registry_or_statistics_keyword |
| 262 | R2-F5 | 20.6 | `systems/bft-validator-economy-tempo-vs-arc.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 4 | - | candidate_status, registry_or_statistics_keyword |
| 263 | R2-F5 | 20.5 | `fintech/2022-three-variable-cascade-thesis.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 5 | - | candidate_status, event_keyword |
| 264 | R2-F5 | 20.5 | `systems/hyperledger-besu-vs-canton-migration.md` | systems | event | 2026-05-26 | 2026-11-18 | 0 | 5 | - | candidate_status, event_keyword |
| 265 | R2-F5 | 20.5 | `security/fork-and-rebrand-5-layer-audit-framework.md` | security | high | 2026-05-26 | 2026-11-20 | 0 | 13 | - | candidate_status, registry_or_statistics_keyword |
| 266 | R2-F5 | 20.4 | `agent-economy/privy-aws-agentcore-default-wallet.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 26 | - | candidate_status, event_keyword |
| 267 | R2-F5 | 20.3 | `leasing-firms/kanematsu-leasing.md` | leasing-firms | event | 2026-05-24 | 2026-11-20 | 0 | 8 | - | low_confidence, event_keyword |
| 268 | R2-F5 | 20.2 | `exchanges/jp-exchange-goldenway-japan.md` | exchanges | event | 2026-05-18 | 2027-05-18 | 0 | 3 | - | candidate_status, event_keyword |
| 269 | R2-F5 | 20.2 | `exchanges/uk-fca-crypto-registration-overview.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 3 | - | candidate_status, event_keyword |
| 270 | R2-F5 | 20.2 | `exchanges/jp-crypto-on-off-ramp-bridge-layer.md` | exchanges | event | 2026-05-24 | 2026-11-20 | 0 | 2 | - | low_confidence, event_keyword |
| 271 | R2-F5 | 20 | `fintech/three-circles-mra-2030-economic-scale.md` | fintech | high | 2026-05-26 | 2026-11-18 | 0 | 3 | - | candidate_status, registry_or_statistics_keyword |
| 272 | R2-F5 | 20 | `systems/chain-abstraction-pattern-value-capture.md` | systems | high | 2026-05-26 | 2026-11-18 | 0 | 3 | - | candidate_status, registry_or_statistics_keyword |
| 273 | R2-F5 | 20 | `systems/l1-progressive-decentralization-three-phase.md` | systems | high | 2026-05-16 | 2026-11-16 | 0 | 3 | - | candidate_status, registry_or_statistics_keyword |
| 274 | R2-F5 | 19.6 | `fintech/dual-currency-stablecoin-arbitrage-legal-hack.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 3 | - | candidate_status, event_keyword |
| 275 | R2-F5 | 19.6 | `fintech/enterprise-procurement-deadline-anchor.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 3 | - | candidate_status, event_keyword |
| 276 | R2-F5 | 19.6 | `fintech/four-motive-classes-asymmetric-competition.md` | fintech | event | 2026-05-26 | 2026-11-16 | 0 | 3 | - | candidate_status, event_keyword |
| 277 | R2-F5 | 19.6 | `fintech/irs-1099-da.md` | fintech | event | 2026-05-26 | 2026-11-18 | 0 | 3 | - | candidate_status, event_keyword |
| 278 | R2-F5 | 19.6 | `fintech/tokenized-mmf-wisdomtree-hashnote.md` | fintech | event | 2026-05-26 | 2026-11-25 | 0 | 3 | - | candidate_status, event_keyword |
| 279 | R2-F5 | 19.6 | `agent-economy/erc-7715-agent-payment-stack.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 18 | - | candidate_status, event_keyword |
| 280 | R2-F5 | 19.6 | `agent-economy/x402-cloudflare-aws-edge-integration.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 15 | - | candidate_status, registry_or_statistics_keyword |
| 281 | R2-F5 | 19.5 | `fintech/fx-onchain-as-stablecoin-final-boss.md` | fintech | event | 2026-05-12 | 2026-11-12 | 0 | 2 | - | low_confidence, event_keyword |
| 282 | R2-F5 | 19.3 | `fintech/european-payments-initiative-wero.md` | fintech | high | 2026-05-26 | 2026-11-25 | 0 | 2 | - | candidate_status, registry_or_statistics_keyword |
| 283 | R2-F5 | 19.3 | `systems/eip-7708-native-asset-erc20-event-compat.md` | systems | high | 2026-05-16 | 2026-11-16 | 0 | 2 | - | candidate_status, registry_or_statistics_keyword |
| 284 | R2-F5 | 19.3 | `agent-economy/ai-agent-payment-protocols-seven-layers.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 13 | - | candidate_status, registry_or_statistics_keyword |
| 285 | R2-F5 | 19 | `exchanges/korea-kimchi-premium-economics.md` | exchanges | high | 2026-05-19 | 2027-05-19 | 0 | 1 | - | candidate_status, registry_or_statistics_keyword |
| 286 | R2-F5 | 18.8 | `agent-economy/ai-agent-payment-protocols-commoditization.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 13 | - | candidate_status, event_keyword |
| 287 | R2-F5 | 18.5 | `exchanges/switzerland-finma-crypto-valley-overview.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 1 | - | candidate_status, event_keyword |
| 288 | R2-F5 | 18.5 | `exchanges/taiwan-fsc-vasp-licensing-overview.md` | exchanges | event | 2026-05-19 | 2027-05-19 | 0 | 1 | - | candidate_status, event_keyword |
| 289 | R2-F5 | 18.5 | `agent-economy/ap2-adoption.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 11 | - | candidate_status, event_keyword |
| 290 | R2-F5 | 17.9 | `agent-economy/ap2-technical-spec.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 7 | - | candidate_status, registry_or_statistics_keyword |
| 291 | R2-F5 | 17.9 | `card-issuers/aeon-financial-service-detail.md` | card-issuers | event | 2026-05-25 | 2026-11-25 | 0 | 1 | - | low_confidence, event_keyword |
| 292 | R2-F5 | 17.6 | `agent-economy/solana-saga-seeker-mobile-stack-overview.md` | agent-economy | high | 2026-05-26 | 2026-11-18 | 0 | 6 | - | candidate_status, registry_or_statistics_keyword |
| 293 | R2-F5 | 16.8 | `agent-economy/solana-saga-vs-embedded-wallet-os-thesis.md` | agent-economy | event | 2026-05-26 | 2026-11-18 | 0 | 5 | - | candidate_status, event_keyword |
| 294 | R2-F5 | 16.6 | `retail/japan-retail-media-finance-loop.md` | retail | high | 2026-06-03 | 2026-12-03 | 0 | 5 | - | low_confidence, registry_or_statistics_keyword |

## Closeout Checklist For This Planning PR

- `bun run docs:audit`
- `git diff --check`
- Open a PR linked to GitHub Issue #72 and stop for review.


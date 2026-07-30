---
source: fintech/brazil-drex-timeline-2026
source_hash: 141cd5acdfb0e6cb
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "Brazil DREX Timeline 2024-2026"
translated_at: 2026-07-29T17:52:19.231Z
---

# Brazil DREX Timeline 2024-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the **Brazil-specific deep dive** that the regional [[fintech/latin-america-cbdc-stablecoin-dollarization]] entry references for DREX mechanics and Pix interplay. Read it alongside the multi-tier CBDC architecture framework at [[fintech/cbdc-multi-tier-architecture-overview]], the tokenized-deposit institutional thesis at [[fintech/institutional-stablecoin-deposit-token-thesis]], and the BIS cross-CBDC interoperability surfaces at [[fintech/mbridge-bis-multi-cbdc-overview]] and [[fintech/bis-project-agora-overview]] for comparative context.

> [!info] TL;DR
> **DREX** is the operational name of the Banco Central do Brasil's digital-currency initiative. The BCB describes a multi-layer DLT design in which wholesale Drex represents central-bank money and retail Drex represents tokenised deposits or payment-account balances issued by regulated intermediaries. Pilot Phase 1 ran from July 2023 to October 2024; Phase 2 is now marked **closed** on the BCB pilot page, with its report still under construction as of 2026-07-30. The Phase 1 report states that every client and asset used in the pilot was fictitious. It records a QBFT network with six validator nodes and tests of four named privacy solutions; it is not a production-results report. ^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf; https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex]

## DREX in one paragraph

DREX is a **two-tier tokenization platform**: BCB issues a wholesale CBDC token to licensed banks and licensed payment institutions; those institutions issue **tokenized deposits** (denominated in BRL) to their customers. End users transact in tokenized deposits, not in BCB-issued tokens. The architecture is closer to the Japanese trust-type EPI model (see [[fintech/jp-trust-type-sc-architecture]] and [[fintech/japan-epi-three-types-overview]]) and to the Hong Kong tokenized-deposit pilots than to a single-token retail CBDC like the Bahamas Sand Dollar.

## Origin and naming

- **2020-08**: BCB launched a CBDC study and signaled intent to issue Real Digital.
- **2022**: Working groups across BCB technical staff, academia, and industry produced the initial requirements.
- **2023-08**: The project previously called Real Digital was officially named **Drex**.
- **2023-05**: BCB selected the technology stack: **Hyperledger Besu**, an enterprise Ethereum-compatible permissioned blockchain implementation.
- **2023-Q4**: Onboarding of Pilot 1 participants began.
- **2023-07 to 2024-10**: Pilot Phase 1 tested privacy, programmability and DvP with simulated assets.
- **2024-09 onward**: Phase 2 selected use cases and tested participant-managed smart contracts.
- **By 2026-07-30**: The BCB pilot page marks Phase 2 closed and says its report is under construction.

### Two-tier issuance model

The table follows the BCB's published distinction between wholesale Drex and retail Drex. It describes the target architecture, not a live retail product; end users did not participate directly in the pilot. ^[https://www.bcb.gov.br/meubc/faqs/p/drex; https://www.bcb.gov.br/content/about/presentationstexts/RG_Digital%20Money%20Summit%202025_may25_.pdf; https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex]

| Layer | Issuer | Token | Holder |
|---|---|---|---|
| Wholesale | BCB | Wholesale Drex representing central-bank money | Authorised financial and payment institutions |
| Retail | BCB-authorised intermediary | Tokenised demand-deposit or payment-account balance (“retail Drex”) | Customers through wallets maintained by an intermediary |

In the published design, customers access the platform through a regulated intermediary rather than holding the wholesale BCB liability directly. This is the same architectural pattern surveyed in [[fintech/cbdc-multi-tier-architecture-three-paradigms]] and the policy-tradeoff analysis in [[fintech/cbdc-multi-tier-architecture-tradeoffs]].

### Technology stack

- **Network**: Hyperledger Besu (permissioned, EVM-compatible).
- **Consensus**: Quorum Byzantine Fault Tolerant (**QBFT**) with **six validator nodes**, as specified in §2.2.5 of the Phase 1 report.
- **Privacy**: the Phase 1 report names four tested solutions: **Anonymous Zether, Rayls, Starlight and Microsoft Nova ZKP**.
- **Smart contracts**: Solidity-compatible; permissioned deployment by approved participants.

These details are scoped to the deployed Phase 1 pilot described in the report. They should not be converted into claims about a later production topology or privacy stack. ^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf]

### Pilot 1 (2024)

**Scope**: Closed-loop test among a curated set of participants. Asset classes:
- Wholesale CBDC (BCB-issued).
- Tokenized deposits issued by participating banks.
- Tokenized federal public debt (Treasury bonds, in collaboration with the Tesouro Nacional).
- Delivery-versus-Payment (DvP) test cases.

**Participants** (publicly named in BCB communications across 2023-2024): a consortium that included major Brazilian banks (Itaú, Bradesco, BTG Pactual, Santander Brasil, Banco do Brasil, Caixa Econômica Federal), fintechs (Nubank, Inter), and payment-system entities, along with BCB and Tesouro Nacional.

**Reported test boundary**:
- The use case simulated DvP between tokenised money and tokenised federal public debt for fictitious clients of participating institutions.
- The report describes implemented and tested flows; it does not document a real-customer escrow product or a production deployment.
- **Privacy remained a central unresolved challenge**: the report evaluates the four named solutions in the versions deployed for Phase 1 and recommends further work.

^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf]

### Pilot 2 (2025-2026)

**Expansion axes**:
- Broader participant set (more banks, payment institutions, fintechs).
- More asset classes (additional tokenized assets including private securities and trade receivables).
- More complex use cases (cross-asset DvP, escrow, programmable-payment automation).
- Continued privacy-architecture work.

**Status as of 2026-07-30**: the BCB pilot page marks Phase 2 **closed** and its report “under construction”. The BCB has not announced a production-launch date and says next steps depend on the results, with privacy, data protection and transaction security remaining conditions. ^[https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex; https://www.bcb.gov.br/en/pressdetail/2601/nota]

## Pix integration · the structural anchor

**Pix** is the BCB's instant-payment system, launched in November 2020. The BCB presents Pix and Drex on separate official programme pages: Pix is an instant account-to-account payment rail, while the Drex pilot tests a DLT platform for tokenised money and assets. ^[https://www.bcb.gov.br/en/financialstability/pix; https://www.bcb.gov.br/en/financialstability/drex_en]

The cited materials do not publish a joint production architecture or dated evidence that Drex sits upstream of Pix, uses Pix as its cash leg, competes with Pix for adoption, or inherits a particular Pix cost or acceptance level. Any integration claim should cite a BCB technical or operational release that identifies the function, phase and launch status.

## Programmable-money use cases targeted

The table distinguishes the Phase 1 DvP simulation from examples and Phase 2 themes published by the BCB. Phase 1 involved no real clients or assets, and these rows are not commercial products, production results or validated cost savings. ^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf; https://www.bcb.gov.br/en/pressdetail/2573/nota; https://www.bcb.gov.br/meubc/faqs/p/produtos-e-servicos-inteligentes-na-plataforma-drex]

| Use case | Public pilot basis | Test objective |
|---|---|---|
| Federal public-bond DvP | Phase 1 use case between simulated clients of different institutions | Test atomic exchange, privacy and programmability |
| Real-estate transaction | BCB public FAQ example and a Phase 2 theme | Test simultaneous transfer of payment and tokenised title |
| Receivables discounting | One of 13 selected Phase 2 themes | Test participant-managed smart contracts for credit workflows |
| Credit collateralised by bank deposit certificates | One of 13 selected Phase 2 themes | Test collateral and credit operations in the platform |
| Other selected themes | Phase 2 included debentures and additional regulated or non-BCB-regulated assets | Test governance, privacy and regulator participation |

The pattern matches the **institutional / wholesale value proposition** that [[fintech/institutional-stablecoin-deposit-token-thesis]] argues for and the broader **B2B stablecoin growth** trajectory in [[fintech/stablecoin-crossborder-b2b-growth]].

## Evidence boundary for private BRL tokens

The cited BCB and BIS materials establish the Drex pilot and selected public-sector interoperability context; they do not verify the current status of a named private BRL token, its issuer, reserve, redemption terms, supported chains, regulatory authorization or market position. ^[https://www.bcb.gov.br/en/financialstability/drex_en]

Before adding a private-token example, verify each of the following from current entity- and product-specific records:

1. the exact issuing legal entity and regulator record;
2. the token contract, supported network and current availability;
3. the reserve assets, custody, segregation and attestation date;
4. redemption rights, fees, eligible customers and geographic scope;
5. authorization for issuance, distribution, exchange and payment use; and
6. a reproducible dataset for any volume, ranking or market-share claim.

This page therefore does not assign a current status to BRLA or MBRL, describe Mercado Bitcoin as the largest venue, or predict that Drex or private tokens “win” particular user segments.

## Cross-CBDC interoperability evidence

The official record supports only a limited set of observations:

- **Project mBridge** — see [[fintech/mbridge-bis-multi-cbdc-overview]]. The BIS listed the Central Bank of Brazil as an observer at the October 2024 handover. Observer status does not establish membership, a joining timetable, DREX integration or interoperability.
- **Project Agorá** — see [[fintech/bis-project-agora-overview]] and [[fintech/bis-project-agora-vs-mbridge]]. It is a separate BIS experiment; its current official roster must be checked directly, and participation cannot be inferred from other BIS work.
- **Project Ensemble** — see [[fintech/bis-project-ensemble-overview]] and [[fintech/bis-project-ensemble-vs-mbridge-dual-track]]. It is an HKMA programme; the cited sources do not establish a Drex connection or architectural interoperability.

No cited source establishes that Drex is integrated or interoperable with any of these projects. Observation, workshop participation and architectural resemblance must not be reported as membership or a live connection.

## Timeline summary

The table's dates and phase status are taken from the BCB's Drex project, pilot and Phase 1 report pages. ^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf; https://www.bcb.gov.br/en/financialstability/drex_en; https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex]

| Year | Milestone |
|---|---|
| 2020-08 | BCB CBDC study initiated |
| 2022 | Working group production of requirements |
| 2023-03 | Platform tests began |
| 2023-07 | Onboarding of 16 Phase 1 participants began |
| 2023-08 | Real Digital project renamed Drex |
| 2024-10 | Phase 1 period ended; privacy remained unresolved |
| 2024-09 onward | Phase 2 use cases and participant-managed smart-contract work announced |
| 2026-07-30 | BCB page marks Phase 2 closed; report under construction |
| Future | No production-launch date announced; next steps depend on pilot results |

## Related

- [[fintech/INDEX|Wiki Index]]
- [[fintech/latin-america-cbdc-stablecoin-dollarization|Latin America CBDC + USD-SC dynamics]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC tradeoffs]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional SC + deposit-token thesis]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B SC cross-border growth]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan SC regulatory landscape]]
- [[fintech/jp-trust-type-sc-architecture|JP trust-type SC architecture]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation status]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## Sources

- [Banco Central do Brasil — Relatório do Piloto Drex, Fase 1](https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf)
- [Banco Central do Brasil — Drex project overview](https://www.bcb.gov.br/en/financialstability/drex_en)
- [Banco Central do Brasil — Drex pilot phase status](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex)
- [Banco Central do Brasil — Phase 1 report announcement](https://www.bcb.gov.br/en/pressdetail/2601/nota)
- [Banco Central do Brasil — Phase 2 selected themes](https://www.bcb.gov.br/en/pressdetail/2573/nota)
- [Banco Central do Brasil — Pix overview](https://www.bcb.gov.br/en/financialstability/pix)

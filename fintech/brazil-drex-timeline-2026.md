---
title: Brazil DREX Timeline 2024-2026 (BCB CBDC Pilot Phases, Hyperledger Besu, Pix Integration, BRL Stablecoin Competition)
aliases:
  - brazil-drex
  - bcb-drex-timeline
  - drex-pilot-1-pilot-2
  - drex-hyperledger-besu
  - drex-pix-integration
  - brla-mbrl-stablecoin
  - brazil-cbdc-tokenized-deposit
  - brazil-real-digital
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, stablecoin, brazil, bcb, drex, pix, hyperledger-besu, tokenized-deposit, brla, mercado-bitcoin]
status: active
sources:
  - "https://www.bcb.gov.br/en/financialstability/drex_en"
  - "https://www.bcb.gov.br/en/pressdetail/2438/nota"
  - "https://www.bcb.gov.br/estabilidadefinanceira/drex"
  - "https://www.bcb.gov.br/en/pressdetail/2510/nota"
  - "https://www.bcb.gov.br/en/financialstability/pix"
  - "https://www.bcb.gov.br/en/financialstability/openbanking"
  - "https://www.bis.org/about/bisih/topics/cbdc.htm"
  - "https://www.bis.org/publ/work1247.htm"
---

# Brazil DREX Timeline 2024-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the **Brazil-specific deep dive** that the regional [[fintech/latin-america-cbdc-stablecoin-dollarization]] entry references for DREX mechanics and Pix interplay. Read it alongside the multi-tier CBDC architecture framework at [[fintech/cbdc-multi-tier-architecture-overview]], the tokenized-deposit institutional thesis at [[fintech/institutional-stablecoin-deposit-token-thesis]], and the BIS cross-CBDC interoperability surfaces at [[fintech/mbridge-bis-multi-cbdc-overview]] and [[fintech/bis-project-agora-overview]] for comparative context.

> [!info] TL;DR
> **DREX** is the operational name of Brazil's CBDC project, run by the **Banco Central do Brasil (BCB)** since 2020. As of 2026-05 it is in **Pilot 2** (expanded multi-asset, multi-participant), with **Pilot 1** (closed-loop reserve-transfer + DvP) completed 2024. The platform runs on a **Hyperledger Besu** permissioned network with a two-tier architecture: BCB issues wholesale CBDC to licensed financial institutions; those institutions issue **tokenized deposits** to end customers. DREX is **explicitly not a retail CBDC token**; the retail-facing layer is tokenized commercial-bank deposits that interoperate with the Pix instant-payment rail. Programmable-money use cases (DvP, escrow, conditional payments, smart-contract-mediated trade finance) are the catalyst for adoption. Competing on the same retail surface is a small but growing **independent BRL-pegged stablecoin** segment (BRLA Digital, Mercado Bitcoin MBRL) running outside the DREX perimeter.

## DREX in one paragraph

DREX is a **two-tier tokenization platform**: BCB issues a wholesale CBDC token to licensed banks and licensed payment institutions; those institutions issue **tokenized deposits** (denominated in BRL) to their customers. End users transact in tokenized deposits, not in BCB-issued tokens. The architecture is closer to the Japanese trust-type EPI model (see [[fintech/jp-trust-type-sc-architecture]] and [[fintech/japan-epi-three-types-overview]]) and to the Hong Kong tokenized-deposit pilots than to a single-token retail CBDC like the Bahamas Sand Dollar.

## Origin and naming

- **2020-08**: BCB launched a CBDC study and signaled intent to issue Real Digital.
- **2022**: Working groups across BCB technical staff, academia, and industry produced the initial requirements.
- **2023-03**: The platform was officially named **DREX** (Digital REal eXchange / Digital Real). BCB published the platform-design papers.
- **2023-05**: BCB selected the technology stack: **Hyperledger Besu**, an enterprise Ethereum-compatible permissioned blockchain implementation.
- **2023-Q4**: Onboarding of Pilot 1 participants began.
- **2024**: Pilot 1 closed-loop testing.
- **2025**: Pilot 1 concluded; Pilot 2 design and onboarding.
- **2026**: Pilot 2 in progress with expanded participants and asset classes.

### Two-tier issuance model

| Layer | Issuer | Token | Holder |
|---|---|---|---|
| Wholesale (Tier 1) | BCB | DREX wholesale CBDC | Licensed financial institutions |
| Retail (Tier 2) | Licensed institution | Tokenized deposit (denominated in BRL) | End customers (businesses + individuals) |

End users never hold the BCB-issued token directly. They hold tokenized commercial-bank deposits redeemable 1:1 against the wholesale CBDC held by their bank at BCB. This is the same architectural pattern surveyed in [[fintech/cbdc-multi-tier-architecture-three-paradigms]] and the policy-tradeoff analysis in [[fintech/cbdc-multi-tier-architecture-tradeoffs]].

### Technology stack

- **Network**: Hyperledger Besu (permissioned, EVM-compatible).
- **Consensus**: IBFT 2.0 (Istanbul Byzantine Fault Tolerance) variant suitable for known-validator permissioned networks.
- **Privacy**: Privacy-preserving mechanisms tested across Pilot 1 (encrypted balances and selective disclosure variants from Aztec, Anonymous Zether, and similar primitives) — a known design challenge given the public-by-default nature of EVM.
- **Smart contracts**: Solidity-compatible; permissioned deployment by approved participants.
- **Identity / KYC**: Tied to BCB participant licensing; on-chain identity links to participants' off-chain KYC databases.

### Pilot 1 (2024)

**Scope**: Closed-loop test among a curated set of participants. Asset classes:
- Wholesale CBDC (BCB-issued).
- Tokenized deposits issued by participating banks.
- Tokenized federal public debt (Treasury bonds, in collaboration with the Tesouro Nacional).
- Delivery-versus-Payment (DvP) test cases.

**Participants** (publicly named in BCB communications across 2023-2024): a consortium that included major Brazilian banks (Itaú, Bradesco, BTG Pactual, Santander Brasil, Banco do Brasil, Caixa Econômica Federal), fintechs (Nubank, Inter), and payment-system entities, along with BCB and Tesouro Nacional.

**Outcomes** (per BCB public communications):
- DvP across tokenized deposits and tokenized federal debt validated.
- Smart-contract-mediated escrow and conditional-payment scenarios validated.
- **Privacy architecture identified as the central unresolved challenge** — Pilot 1 made clear that EVM transparency requires substantive privacy-overlay engineering before a retail rollout is responsible.

### Pilot 2 (2025-2026)

**Expansion axes**:
- Broader participant set (more banks, payment institutions, fintechs).
- More asset classes (additional tokenized assets including private securities and trade receivables).
- More complex use cases (cross-asset DvP, escrow, programmable-payment automation).
- Continued privacy-architecture work.

**Status as of 2026-05**: Pilot 2 is **in progress**, with no announced production-launch date. BCB has consistently emphasized that the platform will not move to production until privacy challenges are resolved at a level acceptable for retail customer data.

## Pix integration · the structural anchor

**Pix** is BCB's instant payment system launched 2020-11, used by hundreds of millions of accounts, processing hundreds of millions of transactions per day. Pix is the **single most important constraint on DREX adoption** because Pix already delivers:

- Instant 24/7 settlement.
- Zero or near-zero retail cost.
- Universal merchant acceptance via QR code.
- Bank and fintech parity.

A retail CBDC competing with Pix on these axes has **no value proposition** unless it adds programmability, DvP, or cross-asset settlement. This is exactly why DREX is **explicitly not** a retail-CBDC-competing-with-Pix project — instead, DREX is designed to:

1. Sit **upstream** of Pix as a wholesale reserve-transfer rail.
2. Add **programmability** that Pix does not natively support (smart-contract conditions, DvP, escrow).
3. **Interoperate with Pix** for the retail leg — a DREX-mediated trade can settle the cash leg via Pix or via tokenized-deposit transfer on DREX itself.

The competitive baseline that Pix sets for any Brazilian-stablecoin project is the same dynamic as QRIS in Indonesia (see [[fintech/indonesia-ovo-stablecoin-route]] and [[fintech/southeast-asia-stablecoin-regulatory-landscape]]) and CoDi in Mexico (see [[fintech/latin-america-cbdc-stablecoin-dollarization]]).

## Programmable-money use cases targeted

| Use case | Description | Why DREX helps |
|---|---|---|
| DvP for tokenized federal debt | Tesouro Nacional bonds tokenized; cash leg in tokenized deposit | Atomic settlement vs current T+1/T+2 |
| Escrow for real estate | Funds locked in smart contract pending title transfer | Removes intermediary; programmable conditions |
| Trade finance | Letter of credit + invoice + payment automated | Reduces document-handling cost and dispute window |
| Conditional payment | Payment released on oracle-verified event | New use case not feasible on Pix |
| Payroll automation | Streamed or scheduled payment | New use case |
| Cross-asset DvP | Tokenized commodity vs tokenized deposit | New use case |

The pattern matches the **institutional / wholesale value proposition** that [[fintech/institutional-stablecoin-deposit-token-thesis]] argues for and the broader **B2B stablecoin growth** trajectory in [[fintech/stablecoin-crossborder-b2b-growth]].

## Competing private BRL stablecoin segment

DREX exists alongside a smaller but growing **independent BRL-pegged stablecoin** segment that runs **outside** the DREX perimeter:

### BRLA Digital

- BRL-pegged stablecoin issued by BRLA Digital, with Brazilian banking partners.
- Targets B2B settlement and crypto-native retail flow.
- Operates as a regulated entity under BCB oversight via the Marco Legal das Criptomoedas (Law 14.478 / 2022) framework.
- Cross-chain footprint includes Ethereum, Polygon, and other EVM-compatible chains.

### Mercado Bitcoin MBRL

- Mercado Bitcoin (MB), Brazil's largest digital-asset venue, has piloted a BRL-pegged token (often referenced as MBRL) leveraging BRLA infrastructure.
- Designed to support retail trading-pair settlement and B2B onramp / offramp.

### Why private BRL stablecoins coexist with DREX

| Axis | DREX tokenized deposit | Private BRL stablecoin |
|---|---|---|
| Issuer | Licensed bank | Non-bank or hybrid issuer |
| Network | Permissioned Hyperledger Besu | Public EVM chains |
| Interoperability with DeFi | None (permissioned) | Yes |
| Cross-border integration | Via BCB and BIS frameworks | Via public chain liquidity |
| Programmable-money depth | Strong (smart contracts) | Strong (smart contracts) |
| Retail UX | Tied to participating bank app | Web3 wallet + crypto-native apps |

The two rails serve different user populations. DREX wins **regulated wholesale and bank-customer programmable-payment** use cases. Private BRL stablecoins win **DeFi-native and crypto-native** use cases. The economic similarity to the **issuer-distributor split** in [[fintech/issuer-distributor-incentive-realignment-50-50-model]] is structural.

## Cross-CBDC interoperability surfaces

Brazil's BCB participates in multiple cross-CBDC initiatives that affect DREX's long-run interoperability story:

- **BIS Innovation Hub Eurosystem Centre and Americas Centre** — Brazilian engagement in standards-setting work.
- **Project mBridge** (PBoC, HKMA, BoT, CBUAE, SAMA earlier; BoT withdrew 2024) — see [[fintech/mbridge-bis-multi-cbdc-overview]]. Brazil is not a full mBridge participant, but observes the architecture.
- **Project Agora** (BIS + private banks, multi-CBDC + tokenized commercial bank money) — see [[fintech/bis-project-agora-overview]] and [[fintech/bis-project-agora-vs-mbridge]]. Brazil's participation level has been signalled at observational; full integration would shape DREX's cross-border posture.
- **Project Ensemble** (HKMA + private banks, tokenized money + tokenized assets) — see [[fintech/bis-project-ensemble-overview]] and [[fintech/bis-project-ensemble-vs-mbridge-dual-track]]. DREX's design pattern is closer to Ensemble's tokenized-deposit architecture than to mBridge's wholesale-CBDC-only approach.
- **Project Nexus** (BIS-led instant payment interlink) — extension to Latin America corridors would directly affect Pix cross-border use cases.

## Timeline summary

| Year | Milestone |
|---|---|
| 2020-08 | BCB CBDC study initiated |
| 2022 | Working group production of requirements |
| 2023-03 | Platform named DREX |
| 2023-05 | Hyperledger Besu selected |
| 2023-Q4 | Pilot 1 onboarding |
| 2024 | Pilot 1 closed-loop testing concluded |
| 2025 | Pilot 2 design + initial onboarding |
| 2026 | Pilot 2 in progress (current) |
| 2027+ | Possible production launch contingent on privacy resolution |

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
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## Sources

- Banco Central do Brasil — DREX project pages (English and Portuguese), platform-design publications, Pilot 1 outcome communications, Pilot 2 announcements.
- Banco Central do Brasil — Pix system documentation and statistics.
- Banco Central do Brasil — Marco Legal das Criptomoedas (Law 14.478 / 2022) implementing circulars and BCB CMN resolutions on VASPs.
- Banco Central do Brasil — Open Banking / Open Finance documentation as adjacent to DREX architecture.
- Bank for International Settlements — DREX-referencing working papers, Project Agora, Project Ensemble, Project Nexus, and mBridge materials.

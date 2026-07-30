---
source: fintech/cosmos-ibc-for-financial-institutions
source_hash: 1252c7c984a7acdc
lang: en
status: machine
fidelity: ok
title: "Cross-chain protocol comparison for financial institutions — IBC / LCP / CCIP / LayerZero / Hyperlane"
translated_at: 2026-07-30T03:20:00+09:00
---

# Cross-chain protocol comparison for financial institutions — IBC / LCP / CCIP / LayerZero / Hyperlane

## Wiki route

This entry sits under the [[fintech/INDEX|fintech index]] and organizes the technical due-diligence questions financial institutions should ask when comparing cross-chain approaches. Read it with [[fintech/japan-financial-regulation|Japan's financial-regulation framework]] and [[fintech/japan-stablecoin-regulatory-landscape|Japan's stablecoin-regulation structure]] for the Japanese legal boundary, and with [[fintech/cross-border-sc-via-swift-api|cross-border stablecoins using Swift APIs]] for the documentary boundary of Project Pax. This entry does not certify any protocol's legal compliance, production use, or regulatory superiority.

> [!info] Summary
> The starting point for comparison is not a protocol name, but what the application transfers, which verification model and additional assumptions it adopts, and who configures, updates, relays, and recovers it. IBC, LCP, CCIP, LayerZero, and Hyperlane have different verification and operational boundaries. Record public specifications, project-specific configuration, test results, and contractual, legal, and compliance review separately. Do not infer AML/CFT compliance, an incident-free record, the absence of a single point of trust, or production adoption from technical specifications alone.

## Protocol comparison

| Protocol | Mechanism described by primary sources | Items for project-specific financial-institution review |
|---|---|---|
| **IBC Classic** | [ICS-02](https://github.com/cosmos/ibc/blob/main/spec/core/ics-002-client-semantics/README.md) specifies common client requirements that combine a trusted state with a validity predicate. The [IBC documentation](https://docs.cosmos.network/ibc/latest/intro) describes counterparty light clients and relayers that relay packets | Client type, initial trusted state, counterparty consensus, client update / freeze / recovery, relayer, timeout, and upgrade |
| **IBC + LCP** | [How LCP works](https://docs.lcp.network/how-lcp-works/) describes light-client verification inside an Intel SGX enclave, producing a commitment and a signature from the enclave key for downstream verification. The [Security Model](https://docs.lcp.network/security-model/) states the additional assumptions | TEE, MRENCLAVE, remote attestation, enclave-key registration, availability / consensus correctness of both chains, and an honest LCP node for liveness |
| **Chainlink CCIP** | The current [CCIP offchain architecture](https://docs.chain.link/ccip/concepts/architecture/offchain/overview) describes Commit OCR and Executing OCR plugins running on one Role DON in v1.6. It states that the automated offchain RMN role is no longer active in current deployments. The [Swift 2023 report](https://www.swift.com/sites/default/files/files/results_report_swift_interoperability_experiments_final_310823.pdf) records experiments using CCIP | Version used, chain / token support, onchain controls, rate limits, upgrade / admin authority, DON operations, and the distinction between an experiment and production |
| **LayerZero V2** | The [DVN documentation](https://docs.layerzero.network/v2/concepts/modular-security/security-stack-dvns) explains that an OApp can configure send / receive configuration, DVNs, an X-of-Y-of-N threshold, and an Executor for each pathway | Explicit configuration for each pathway, required / optional DVNs, threshold, Executor, reliance on defaults, change control, and availability |
| **Hyperlane** | The [ISM documentation](https://docs.hyperlane.xyz/docs/protocol/ISM/modular-security) explains that an application can configure, compose, or implement its own destination-side message-verification ISM, and that the Mailbox's default Multisig ISM is used when no application-specific ISM is specified | Application-specific ISM, validator set, threshold, composition conditions, treatment of the default, upgrade / admin authority, and operational monitoring |

Sources: protocol comparison table. ^[source: IBC ICS-02; Cosmos IBC documentation; LCP documentation; Chainlink CCIP documentation; Swift 2023 results report; LayerZero documentation; Hyperlane documentation]

## Assumptions to review for IBC / LCP

| Review dimension | What the primary sources establish | Additional project evidence |
|---|---|---|
| Remote state | ICS-02 defines verification of remote-state updates based on a trusted state and a client-specific validity predicate | Client selected, initialization procedure, counterparty consensus / finality, and monitoring scope |
| Client lifecycle | ICS-02 addresses client updates, misbehaviour detection, and freezing, while the IBC documentation describes the relayer's role | Update frequency, timeout, halt and recovery procedures, and responsibility during chain upgrades |
| LCP execution | LCP performs light-client verification inside an SGX enclave and has proofs verified using an enclave key registered through Remote Attestation | SGX platform, MRENCLAVE management, attestation trust chain, key rotation, and vulnerability response |
| Safety / liveness assumptions | The LCP Security Model lists TEE security, availability / consensus correctness of both chains, and at least 1 honest LCP node | Operator arrangement, failure drills, state recovery, monitoring, and service objective |

Sources: IBC / LCP assumptions table. ^[source: IBC ICS-02; Cosmos IBC documentation; LCP How LCP works; LCP Security Model]

## Common implementation due diligence

| Area | Review question | Example acceptance evidence |
|---|---|---|
| Application semantics | Distinguish messages from asset transfers and define mint / burn / lock / release, nonce, replay, timeout, and failure state | Sequence diagram, contract tests, reconciliation test, and asset-accounting review |
| Security configuration | Fix the client / DON / DVN / ISM, threshold, admin / upgrade key, default, and change procedure for the specific project | Signed configuration, authority matrix, upgrade rehearsal, and independent review |
| Operations | Record responsibility and monitoring scope for relayers, LCP nodes, DONs, DVNs, Executors, and validators | Runbook, alerts, SLO, on-call arrangement, and dependency inventory |
| Incident and recovery | Define pause, retry, timeout, manual execution, state recovery, reconciliation, and user notification | Failure-injection result, recovery log, and incident playbook |
| Legal and compliance | Separate asset claims, issuer / custodian roles, data privacy, AML/CFT, sanctions, liability / recourse, and jurisdiction from the technical assessment | Legal opinion, compliance approval, data-flow review, and contractual allocation |

Sources: common due-diligence table. ^[source: Swift 2023 results report; LayerZero DVN documentation; Hyperlane ISM documentation; Chainlink CCIP offchain architecture]

## What the Project Pax material establishes

| Item | Content stated in the 2024-09-05 announcement | Treatment in this entry |
|---|---|---|
| Project status | The [Datachain / Progmat announcement](https://www.datachain.jp/ja/news/progmat-and-datachain-launch-project-pax) announced the joint project's launch and a planned pilot using a prototype | Treat as a plan and design document as of the announcement date |
| Existing interface | It proposed a cross-border stablecoin transfer platform adapted to Swift's existing API framework and API mock / simulation environment | Treat as a design intent for Swift API integration, not evidence of a production connection |
| Cross-chain components | It stated that IBC and LCP would be used for transactions between different blockchains | Treat as named technical components; review individual chains, finality, and operational quality separately |
| Joint development | It named the stablecoin contract co-developed by Progmat and Datachain as a component | Treat as the announced joint-development scope; do not infer the asset's legal effect or completion of settlement |

Sources: Project Pax evidence-boundary table. ^[source: Datachain and Progmat Project Pax announcement, 2024-09-05]

This material does not establish production participation by individual financial institutions, deployment to a particular chain, legal transfer of an asset, finality, or commercial operation. When updating Project Pax events, state the announcement date and validation stage and cite later materials separately.

## Candidate-comparison process

| Step | Decision | Required artifact |
|---|---|---|
| Scope | Define whether the boundary crosses a message, token, cash claim, security, or workflow | Use-case boundary, asset / data map, and non-goals |
| Verification | Compare who verifies the remote state or message, using what information and threshold | Trust-assumption register, threat model, and configuration snapshot |
| Control | Identify who can deploy, configure, upgrade, pause, and recover the system | Key / role matrix and change-control record |
| Operations | Assign responsibility for relay, execution, monitoring, reconciliation, and incident response | RACI, runbook, SLO, and failure-test result |
| Approval | Separate technical testing from security, risk, legal, compliance, and procurement approvals | Approval record, residual risk, and go-live criteria |

Sources: candidate-comparison process table. ^[source: protocol documentation and project-specific due-diligence framework]

## Evidence boundaries

- Light-client verification and public specifications do not automatically establish compliance with AML/CFT, sanctions, or licensing requirements.
- Do not infer low vendor lock-in, low operational concentration, or limited upgrade control from open-source / open-standard status alone.
- The primary sources in this entry do not establish an all-time zero-incident record, an absolute security ranking, or the absence of a single point of trust.
- Distinguish experiments, prototypes, and announcements from production adoption, commercial operation, and regulatory approval.
- Protocol versions, application configurations, operator sets, and supported pathways can change; retain a deployment-time snapshot and a revalidation date.

## Applications

- RFI / RFP and technical due diligence for cross-chain protocols used by financial institutions
- A checklist for reading Project Pax announcements, pilots, and later updates by stage
- Evaluation of middleware and responsibility boundaries when a trust-type stablecoin spans multiple ledgers / chains
- Approval materials that separate application configuration, operations, security, and legal / compliance review

---

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|Japan's trust-type stablecoin structure]]
- [[fintech/cross-border-sc-via-swift-api|Cross-border stablecoins using Swift APIs]]
- [[fintech/japan-financial-regulation|Japan's financial-regulation framework]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan's stablecoin-regulation structure]]
<!-- /wiki-links:managed -->

## Sources

- [IBC ICS-02 Client Semantics](https://github.com/cosmos/ibc/blob/main/spec/core/ics-002-client-semantics/README.md)
- [Cosmos Docs — IBC documentation](https://docs.cosmos.network/ibc/latest/intro)
- [LCP — How LCP works](https://docs.lcp.network/how-lcp-works/)
- [LCP — Security Model](https://docs.lcp.network/security-model/)
- [Chainlink — CCIP offchain architecture](https://docs.chain.link/ccip/concepts/architecture/offchain/overview)
- [Swift — Blockchain interoperability experiments results report, August 2023](https://www.swift.com/sites/default/files/files/results_report_swift_interoperability_experiments_final_310823.pdf)
- [LayerZero V2 — Security Stack (DVNs)](https://docs.layerzero.network/v2/concepts/modular-security/security-stack-dvns)
- [Hyperlane — ISM Overview](https://docs.hyperlane.xyz/docs/protocol/ISM/modular-security)
- [Datachain / Progmat — Project Pax announcement, 2024-09-05](https://www.datachain.jp/ja/news/progmat-and-datachain-launch-project-pax)

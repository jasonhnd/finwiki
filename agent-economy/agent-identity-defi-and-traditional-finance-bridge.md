---
title: Agent identity bridging DeFi and traditional finance · KYA, Skyfire, Lit PKP, mDL, MiCA, GENIUS
aliases:
  - agent-identity-defi-and-traditional-finance-bridge
  - know your agent kya framework
  - agent identity bridge 2026
  - on-chain agent identity vs traditional eID
  - kya skyfire lit pkp webauthn mdl
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, identity, kya, know-your-agent, skyfire, lit-pkp, erc-4337, erc-7702, webauthn, mdl, mica, genius-act, fido, aaif, regulation]
status: active
sources:
  - https://www.skyfire.xyz/
  - https://docs.skyfire.xyz/
  - https://litprotocol.com/
  - https://developer.litprotocol.com/
  - https://eips.ethereum.org/EIPS/eip-4337
  - https://eips.ethereum.org/EIPS/eip-7702
  - https://fidoalliance.org/
  - https://www.w3.org/TR/webauthn/
  - https://www.iso.org/standard/69084.html
  - https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet
  - https://eur-lex.europa.eu/eli/reg/2023/1114/oj
  - https://www.congress.gov/bill/118th-congress/house-bill/4763
  - https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html
  - https://www.mastercard.com/news/press/
  - https://standards.iteh.ai/catalog/standards/iso/
---
# Agent identity bridging DeFi and traditional finance · KYA, Skyfire, Lit PKP, mDL, MiCA, GENIUS

## TL;DR

Agent identity in 2026 sits at the **bridge between DeFi-native primitives** (smart-contract wallets, on-chain attestations, ERC-4337 / ERC-7702 wallets controlled by Lit PKP threshold keys or session keys) and **traditional digital-identity primitives** (mDL ISO/IEC 18013-5 mobile driving licence, EU eIDAS 2.0 + EUDI Wallet, US REAL ID + state-issued mobile IDs, WebAuthn / FIDO2 passkeys). The emerging consensus is a **layered identity model**: the **human owner** keeps a traditional eID (eIDAS / mDL / passkey); the **agent** carries a derived **cryptographic attestation** (issuer-bound by Skyfire-style identity providers OR threshold-signed by Lit PKP OR EOA-delegated under ERC-7702 / scoped under ERC-7715) that ties back to the human's primary identity through a verifiable credential chain. The **"Know Your Agent" (KYA) framework** is the proposed regulatory adaptation of KYC: instead of "know who the human customer is," know **who deployed this agent, under what scope, with what revocation path**. The **GENIUS Act** (US, 2025-2026 stablecoin framework) and **MiCA** (EU stablecoin regulation, fully in force 2024-2025) both have direct implications: stablecoin issuers and crypto-asset service providers must apply KYC/AML to agent-driven flows, which forces the question of agent identity standardization. The 2026-Q2 FIDO Alliance handover of Google's AP2 to **AAIF (Agentic AI Identity Federation)** is the likely industry-standard surface where these threads converge.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]] for the protocol stack identity slots into, [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]] for the spend / revocation pairing, [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] for the canonical issuer-level identity case, [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] for the threshold-cryptography custody pattern, [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] and [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer]] for the wallet substrate, [[agent-economy/erc-7715-overview|ERC-7715 overview]] for the wallet permission scope, and [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] for the card-network Trusted Agent Protocol context. For regulatory framing see [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] and [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]] + [[fintech/mica-overview|MiCA overview]]. For traditional identity context see [[security/forensic-identity-anchor-chain|forensic identity anchor chain]].

## What "agent identity" actually means · five layers

Agent identity is a five-layer compound, often conflated in vendor marketing:

1. **Cryptographic key material** — the private key (or threshold-share) the agent uses to sign transactions. Could live on Lit PKP, Privy MPC, Magic embedded, Coinbase CDP, or as a session key delegated from a user's EOA.
2. **On-chain address / smart-contract account** — the public-address or smart-contract-account that holds the agent's funds and is the target of scoped permissions. Usually an ERC-4337 SCW or an ERC-7702-delegated EOA.
3. **Authorization scope** — what the agent is allowed to do, when, with what spend cap. Encoded in ERC-7715 permissions, AP2 mandate VC, or Skyfire-issuer ledger entries.
4. **Identity attestation** — a verifiable credential or signed claim that ties the agent's key / address to a real-world owner (human user OR enterprise OR institutional deployer). Examples: Skyfire-issued agent identity, Visa Trusted Agent Protocol attestation, AP2 mandate VC, AAIF assertion.
5. **Regulatory binding** — the legal / KYC / AML record at the deployer / issuer level that connects the attestation back to a regulated entity. This is where KYA frameworks operate.

Each layer can be implemented independently. A production agent identity stack picks **one from each layer** and composes them. Conflating them produces architectural confusion. The matrix below cuts the design space.

## Know Your Agent (KYA) framework · regulatory adaptation of KYC

The **KYA framework** is the 2025-2026 industry term (not yet a formal regulator rule anywhere) for the regulatory adaptation of KYC to autonomous agents. The core proposition:

| KYC question | KYA equivalent |
|---|---|
| Who is the natural person opening this account? | Who is the deployer (human / enterprise / institution) of this agent? |
| What identification documents? | What identity attestation chain ties the agent's key to the deployer? |
| What is the source of funds? | What is the deployer's source of funds, and what spend cap / scope was authorized? |
| What is the purpose of the account? | What is the agent's scope (allowed merchants, allowed actions, time-bounded) ? |
| Ongoing monitoring | Ongoing monitoring of agent behavior + revocation infrastructure |

**KYA proponents** include FIDO Alliance (via the AAIF framework), Skyfire (which built its identity-issuance ledger explicitly as a KYA-compatible system), Mastercard agentic-commerce pilots, and the FATF VASP guidance (2024-2025 updates discuss "automated agents" indirectly via the principle that the controller of the agent is the regulated party).

**KYA skeptics** argue that KYA is just KYC of the deployer + ordinary spend monitoring; no new regulatory framework is needed. The 2026 indication from FSA, FCA, MAS public statements: skeptics are winning at the principle level, but the operational requirement (verify deployer + bind agent to deployer + monitor) is in fact what proponents are advocating. The two sides agree on substance, disagree on label.

## Skyfire · issuer-level agent identity (canonical case)

**Skyfire's model**: act as a regulated card-issuing platform (similar to Stripe Issuing or Marqeta) where the "cardholder" is an autonomous agent. Skyfire:

- Performs **KYC of the deployer** (human user or enterprise) under standard bank-sponsored BIN program licensure
- **Issues a unique agent identity** tied to a virtual card with spend caps, merchant-category restrictions, and time windows
- **Operates the ledger** that records every agent transaction with full audit trail
- **Acts as the regulated party** under PCI-DSS, AML monitoring, OFAC screening, and bank-sponsor's overall licensure

Skyfire's identity is **issuer-level**: the agent has a stable identity within Skyfire's namespace, attested to merchants via Visa rails. Merchants don't need to integrate any new identity stack — they see a normal Visa virtual card transaction. The KYA-equivalent verification is done at Skyfire's end before the card is funded.

Skyfire was an **early Visa Trusted Agent Protocol (VTAP)** issuer, which standardizes the cryptographic attestation that an agent identity presents to merchants who choose to verify (rather than treating it as anonymous card flow). See [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] for the full case and [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] for the VTAP framing.

## On-chain agent identity · three patterns

### Pattern 1 · Lit PKP threshold-key identity

Agent's identity = NFT-controlled PKP whose threshold key is distributed across Lit network nodes. The agent's authority is bound by **Lit Actions** (JavaScript policy) running in TEEs. KYA binding is achieved by having the PKP NFT mint controlled by an address that is itself bound to a KYC'd deployer (via Privy / Magic / Coinbase CDP). The deployer can grant or revoke PKP authority by transferring or burning the NFT.

**Advantages**: no single-server custody risk; on-chain transparency; cross-jurisdictional resistant.
**Disadvantages**: Lit network throughput (100-500ms sign latency); harder SOC 2 audit story than centralized custody.

See [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]].

### Pattern 2 · EOA + ERC-7702 + WebAuthn passkey delegation

User's existing EOA (MetaMask, hardware wallet) delegates to an agent via **ERC-7702** transaction-scoped authorization. The user's authentication of the delegation is anchored on a **WebAuthn passkey** (FIDO2 / iOS / Android / Yubikey). The agent then operates within the delegated scope until expiration.

**Advantages**: leverages the ~150M existing EOA wallet base (post-Pectra 2025-Q2); composes with existing WebAuthn / FIDO infrastructure that banks already use for customer auth.
**Disadvantages**: scope expressivity limited by ERC-7702 + ERC-7715; key revocation is per-delegation, not per-agent.

See [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]] and [[agent-economy/erc-7715-overview|ERC-7715 overview]].

### Pattern 3 · ERC-4337 SCW with session keys

User has a smart-contract wallet (Coinbase Smart Wallet, Safe, Biconomy, ZeroDev). Agent gets a **session key** with scoped permissions, valid for a bounded time / amount / merchant set. Session key is held by the agent (which can be running on the user's device or in a cloud TEE).

**Advantages**: most mature on-chain pattern (ERC-4337 live since 2023); scope expressivity is high; revocation is on-chain and cheap.
**Disadvantages**: requires user to have an SCW (not the dominant wallet form today, though growing); ERC-4337 bundler infrastructure dependency.

See [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] and [[systems/erc-4337-overview|ERC-4337 overview]] for the substrate.

## Traditional digital-identity primitives · what agents bridge from

### eIDAS 2.0 + EUDI Wallet (EU)

The EU's **eIDAS 2.0 Regulation** (2024) mandates a **European Digital Identity Wallet (EUDI Wallet)** that all EU member states must offer to citizens by 2026. The EUDI Wallet supports verifiable credentials (W3C VC), mobile driving licence (mDL ISO/IEC 18013-5), and qualified electronic signatures. AP2 / AAIF mandate VCs are deliberately compatible with the EUDI Wallet stack — an EU citizen's EUDI-signed agent mandate can be presented to merchants as proof of authorization.

### mDL (ISO/IEC 18013-5) · mobile driving licence

International standard for mobile driving licences, deployed in several US states (Iowa, Arizona, Maryland, etc.), Australia, and increasingly EU. Provides a **cryptographic identity** that can be presented to verifiers. For agent identity, mDL is a candidate "anchor" — the human deployer's mDL ties to the agent's attestation through a VC chain.

### WebAuthn / FIDO2 passkeys

The browser / OS standard for passwordless authentication. Banks and fintechs widely use passkeys for customer authentication. For agent identity, FIDO2 passkeys are used as the **human-side authentication** when the user grants the agent scope (e.g. authorizing an ERC-7715 permission requires the user to passkey-confirm). The FIDO Alliance's takeover of AP2 → AAIF (2026-Q2) directly extends this thread to agent identity standardization.

### US REAL ID + state mobile IDs

US doesn't have an EU-style central digital identity, but REAL ID compliance is mandatory from May 2025 for federal verification purposes. Several states (Arizona, Maryland, Iowa, Hawaii) are issuing mDL-compatible state mobile IDs. The fragmented US identity landscape makes agent-identity standardization harder there than in EU.

### Singapore SingPass, India Aadhaar / UPI, Japan My Number / マイナンバー

National digital-identity programs of varying scope. India's Aadhaar (1.3B+ enrolled) + UPI account-aggregator framework is the most agent-friendly: account aggregator architecture inherently composes with agent-driven access. Singapore SingPass is FIDO-compatible. Japan's マイナンバー has growing FIDO + WebAuthn integration through Mynaportal but is not yet structured for agent delegation use cases.

## Regulatory implications · GENIUS Act + MiCA

### US GENIUS Act (2026 stablecoin framework)

The **GENIUS Act** (Guiding and Establishing National Innovation for U.S. Stablecoins) — passed 2025, implementation rules 2025-2026 — requires stablecoin issuers to apply BSA/AML compliance to all flows. The implication for agent identity:

- Stablecoin issuers (Circle, Paxos, Tether-US) must KYC the parties they onboard
- If an agent holds a stablecoin balance, the agent's controller must be KYC'd by the issuer or the issuer's custodian
- Skyfire-issuer model fits cleanly (Skyfire is the KYC'd party, agent inherits)
- On-chain Lit PKP / ERC-4337 model requires the controlling EOA / deployer to be KYC'd, with the agent's transactions monitored

See [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]] and [[fintech/genius-act-501-denylist-mandate|GENIUS Act 501 denylist mandate]] for the broader framework.

### EU MiCA (Markets in Crypto-Assets Regulation, in force 2024-2025)

**MiCA** classifies crypto-asset service providers (CASPs) and stablecoin issuers (EMT / ART issuers). MiCA's implications for agent identity:

- CASPs must apply travel-rule + KYC to crypto transfers, including those initiated by agents
- An agent operating as an autonomous EOA on Ethereum must be linked to a KYC'd controller for any flow involving a MiCA-regulated CASP
- The **EUDI Wallet** + **mDL** + **W3C VC** stack is the EU's preferred substrate for the controller-attestation chain
- AAIF (FIDO Alliance) is being designed compatible with MiCA + eIDAS 2.0 requirements

See [[fintech/mica-overview|MiCA overview]] and [[fintech/mica-cross-border-implications|MiCA cross-border implications]].

### Japan FSA · resident-perimeter identity

Japan's stablecoin regulation (Payment Services Act, June 2023 amendment) requires stablecoin issuers and intermediaries to identify holders. For agents, this means the agent's controller must be KYC'd under the standard 犯罪収益移転防止法 (Act on Prevention of Transfer of Criminal Proceeds). The FSA has not published agent-specific guidance, but the operational expectation is **deployer KYC + agent activity monitoring**. See [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] for the resident perimeter.

### FATF travel rule (global)

FATF Recommendation 16 requires VASPs to transmit originator + beneficiary info on crypto transfers above thresholds. For agents, FATF guidance treats the agent as a non-natural-person whose controller is the regulated party for travel-rule purposes. See [[fintech/fatf-travel-rule-overview|FATF travel rule overview]] and [[fintech/fatf-travel-rule-cross-border-stack|FATF travel rule cross-border stack]].

## Identity-attestation matrix · how each approach maps regulator slots

| Approach | Crypto key | On-chain address | Authorization | Attestation | Regulator binding | KYA fit |
|---|---|---|---|---|---|---|
| **Skyfire (issuer model)** | Skyfire-held + HSM | Virtual card BIN | Skyfire ledger entry | Skyfire-issued + VTAP | Bank-sponsor BIN program | High (built-in) |
| **Lit PKP + KYC'd controller** | Lit threshold | PKP NFT controls SCW | Lit Action policy | Off-chain VC from KYC provider | Whatever the deployer is regulated under | Medium (manual binding) |
| **ERC-7702 + WebAuthn + AP2** | User EOA | User EOA + delegation | ERC-7715 permission | AP2 mandate VC + AAIF | User's KYC at originating CASP / bank | High (with AAIF maturity) |
| **ERC-4337 SCW + session key** | User SCW + session key | SCW address | Session key scope | Issuer-VC if applicable | User's KYC at originating CASP / wallet | Medium-high |
| **Privy / Magic / CDP (centralized embedded)** | Custodian-held MPC | User SCW address | App-level scope | Custodian KYC | Custodian's regulatory wrapper | High (custodian as regulated party) |

## Composition recommendations · 2026

For **consumer-facing agent payments**: Pattern 3 (ERC-4337 SCW + session key) on top of an embedded wallet (Privy / Coinbase CDP / Magic) is the dominant production pattern. KYA binding is achieved through the embedded wallet's existing KYC stack. AAIF / AP2 mandate VC can be layered on for merchants who want explicit agent attestation. See [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] and [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]].

For **enterprise / institutional agent payments**: Skyfire (issuer model) or Stripe Agent Toolkit + Stripe Issuing dominate. KYA binding is built into the issuer's regulated activity. See [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]].

For **autonomous / long-running agents requiring policy-bound custody**: Pattern 1 (Lit PKP + threshold) is the production-tested choice. KYA binding requires explicit deployer KYC + linkage to PKP NFT controller.

For **EU residents requiring eIDAS 2.0 compliance**: Pattern 2 (ERC-7702 + WebAuthn + AP2 / AAIF + EUDI Wallet integration) is the trajectory; full maturity expected 2027 once EUDI Wallet rollout completes.

## Sources

- Skyfire website and docs (skyfire.xyz)
- Lit Protocol website and developer docs (litprotocol.com)
- ERC-4337 EIP final (eips.ethereum.org/EIPS/eip-4337)
- ERC-7702 EIP final (eips.ethereum.org/EIPS/eip-7702)
- FIDO Alliance website and AAIF announcement (fidoalliance.org)
- W3C WebAuthn specification (w3.org/TR/webauthn)
- ISO/IEC 18013-5 mobile driving licence standard (iso.org)
- EU Digital Identity Wallet policy page (digital-strategy.ec.europa.eu)
- EU MiCA Regulation 2023/1114 (eur-lex.europa.eu)
- US GENIUS Act (congress.gov H.R. 4763)
- Visa agentic commerce page (visa.com)
- Mastercard press releases (mastercard.com)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act 501 denylist mandate]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border implications]]
- [[fintech/fatf-travel-rule-overview|FATF travel rule overview]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF travel rule cross-border stack]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
<!-- /wiki-links:managed -->

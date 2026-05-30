---
source: agent-economy/agent-custody-and-authorization-framework-2026
source_hash: 61c64e87c0aa20a8
lang: en
status: machine
fidelity: ok
title: "Agent custody and authorization framework · 2026-05 reference architecture"
translated_at: 2026-05-30T16:40:11.486Z
---
# Agent custody and authorization framework · 2026-05 reference architecture

## TL;DR

Agent custody and authorization in 2026 has converged into a **three-axis design space**: (1) **custody model** — full self-custody (user holds key, agent has no independent control), hybrid (Lit PKP threshold or session-key with policy code), or fully custodial (Privy / Magic / Coinbase CDP / Skyfire); (2) **authorization granularity** — single-transaction (agent must request user approval per action), time-bounded (scope valid until expiry), amount-bounded (spend cap with rolling window), spend-rule-scoped (allowed merchants / categories / patterns); (3) **revocation mechanism** — on-chain instant (burn permission NFT, revoke ERC-7715 grant), off-chain wallet-mediated (Privy admin revoke), legal / contractual (Skyfire issuer ledger entry). The **traditional brokerage limited power of attorney (LPOA)** provides the doctrinal analog — for decades, brokerages have given investment advisers discretionary authority over client accounts with scope (asset classes), amount (size limits), revocation (written notice), and audit trail (statements). The 2026 agent custody architecture is **digitally-native LPOA** plus **on-chain revocation primitives**. Multi-signer / threshold control adds a second-pair-of-eyes pattern: a transaction requires both the agent's signature and a co-signer's (Lit Action policy, human approver, or a second agent acting as oracle). The composition of custody + authorization + revocation + multi-signer + audit trail is what regulators examine when supervising agent-driven flows, mapped through [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] and [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]].

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]] for the identity attestation it pairs with, [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]] for the protocol layer, [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]] for the application surfaces, [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]] for the trading-specific regulator overlay, [[agent-economy/erc-7715-overview|ERC-7715 overview]] + [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] for the wallet permission primitive, [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] + [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer]] for the wallet substrate, [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] for threshold custody, [[agent-economy/privy-embedded-wallet-overview|Privy]] + [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] for embedded-wallet custody, [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire]] for issuer-level custody, [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]] for the legal-isolation pairing, and [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] for the doctrine. For the brokerage analog see [[banking/custody-bank-operating-model|custody bank operating model]] and [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]].

## Three-axis design space

### Axis 1 · Custody model

**Full self-custody (user holds key, agent has no independent control)**:
- User's EOA holds funds; agent never has signing capability
- Agent assembles unsigned transactions; user approves each one via wallet
- Maximum security, minimum agent autonomy
- Use case: high-value / high-stakes single-shot transactions where user is in-loop
- Examples: a Claude / GPT agent that constructs a transaction for the user to review in MetaMask, OneKey, Ledger, Trezor

**Hybrid (Lit PKP threshold or session-key with policy code)**:
- Agent holds a session key OR a Lit PKP that requires policy evaluation to sign
- Funds live in user-controlled SCW or EOA-delegated address; agent signs within scope
- Lit Actions provide runtime policy enforcement (rate limit, scope check, multi-factor)
- Use case: autonomous agents that need to act when user is offline / asleep, but with hard-coded policy guardrails
- Examples: Lit PKP-controlled agent for treasury automation; ERC-7715 + ERC-4337 session key for AI agent shopping

**Fully custodial (Privy / Magic / Coinbase CDP / Skyfire)**:
- Custodian holds the cryptographic key (often MPC-split or HSM-backed)
- User authenticates to custodian via passkey / OAuth / email-OTP
- Agent operates via custodian-issued API key with custodian-enforced scope
- Maximum convenience, requires trust in custodian + custodian's solvency
- Use case: consumer-grade agent payments, enterprise agent issuance
- Examples: Privy embedded wallet, Coinbase CDP wallet, Magic embedded wallet, Skyfire-issued agent identity

See [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet landscape 2026 consolidation]] for the custodian market structure and [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]] for the legal-isolation requirement.

### Axis 2 · Authorization granularity

| Granularity | Description | Where supported |
|---|---|---|
| **Single-transaction** | Agent must request user approval per action | Any wallet (default) |
| **Time-bounded** | Scope valid until `expiresAt` timestamp | ERC-7715 `expiry`; Skyfire ledger; AP2 mandate validity |
| **Amount-bounded** | Spend cap over rolling window (e.g. $50/day, $500/month) | ERC-7715 `period` + `amount`; Skyfire spend cap; Privy app-level cap |
| **Spend-rule scoped** | Allowed merchants / categories / patterns | ERC-7715 `permissionsContext` allowlist; Skyfire merchant-category restriction; AP2 mandate scope |
| **Per-resource scoped** | Allowed specific assets (USDC only, no ETH; specific tokens) | ERC-7715 `permission.type` (e.g. `erc20-token-transfer` for specific token); Skyfire card-level config |
| **Composition** | Combination of above (e.g. "$50/day to .vercel.com only, USDC only, 7-day expiry") | Most production stacks compose 3+ |

The 2026 production reference: **composition is the norm**. A single dimension is rarely sufficient. Real agent permissions look like:

```
GRANT to agent_id A1:
  type: erc20-token-transfer
  token: USDC@0xa0b86991c... (Base mainnet)
  amount_cap: 50 USDC
  period: 1 day (rolling)
  expiry: 2026-08-25T00:00:00Z
  allowed_targets:
    - merchant_domain: *.vercel.com
    - merchant_domain: *.cloudflare.com
    - merchant_address: 0x1234...
  required_attestation: AP2 mandate VC signed by user A's WebAuthn key
```

### Axis 3 · Revocation mechanism

**On-chain instant**:
- Burn the permission NFT (if scope is NFT-encoded as in some Coinbase Smart Wallet patterns)
- Call `revokePermissions` on ERC-7715-compatible wallet (instant block-finality revocation)
- Funds in ERC-4337 SCW can have session keys removed by user signing a revocation UserOp
- Cost: gas fee for revocation transaction (typically <$0.50 on L2)

**Off-chain wallet-mediated**:
- Privy / Magic / Coinbase CDP admin console — user logs in and disables agent's API key
- Custodian enforces revocation at signing time
- Speed: seconds (custodian API call)

**Legal / contractual**:
- Skyfire-issued agent: user contacts Skyfire support / portal to disable card
- Stripe Issuing: user calls Stripe Dashboard to freeze virtual card
- Speed: seconds-to-minutes (depends on issuer's processing)

**Hybrid timed expiration**:
- Time-bounded scopes self-expire without any active revocation action
- Use case: agent operating on a 7-day project; permissions auto-expire even if user forgets to revoke
- This is the **safest default** and is the recommended baseline

## Multi-signer / threshold agent control

For high-value or institutionally-deployed agents, **single-signature agent control** is insufficient. Multi-signer / threshold patterns:

### Pattern 1 · Agent + human co-signer

- Agent constructs transaction; human (treasurer, compliance officer, board member) must co-sign
- Use case: corporate treasury agent that must propose transactions > $X for human approval
- Implementation: Safe (Gnosis Safe) multi-sig with agent as proposer + N humans as approvers
- See [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] for the SCW substrate

### Pattern 2 · Agent + Lit Action policy

- Agent's PKP signature requires Lit Action policy evaluation
- Lit Action enforces runtime checks (rate limit, scope, multi-factor)
- No human-in-loop, but code-in-loop with auditable JavaScript policy
- See [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]

### Pattern 3 · Agent + second agent (oracle)

- Two agents must agree on a transaction; both must sign
- Use case: one agent acts as proposer, second agent acts as verifier (often LLM-driven verification)
- Risk: correlated failure if both agents share a model defect
- Mitigation: use different model providers (one agent on Claude, second on GPT) for diversity

### Pattern 4 · m-of-n threshold

- A transaction requires m signatures out of n total signers
- Signers can be mix of humans, agents, hardware keys, HSM
- Use case: corporate treasury with 2-of-3 or 3-of-5 multi-sig where agents and humans both qualify as signers
- Implementation: Safe + threshold ECDSA; or BLS multi-sig on specific chains

## Comparison with traditional brokerage Limited Power of Attorney (LPOA)

The doctrinal analog from traditional finance is **discretionary trading authority** granted by a client to an investment adviser via Limited Power of Attorney (LPOA). The structure has been stable for ~50 years:

| Dimension | Brokerage LPOA | Agent ERC-7715 / Skyfire equivalent |
|---|---|---|
| **Scope** | Asset classes (equity, fixed-income, FX) | `permission.type` (token, transfer, swap) |
| **Amount** | Position-size limit, sometimes notional | `amount_cap` + `period` |
| **Time** | Indefinite with revocation right; some are time-bounded | `expiry` timestamp |
| **Approved counterparties** | Brokerage's execution venues | `allowed_targets` allowlist |
| **Revocation** | Written notice; usually effective T+1 | On-chain instant or wallet-mediated seconds |
| **Audit** | Monthly statements + Form 8949 / 法定調書 | On-chain ledger + signed receipt + audit log |
| **Liability** | Client responsible; adviser fiduciary-bound | Deployer responsible; agent provider may have contractual liability |
| **Regulator** | SEC IA / BD oversight, FINRA, FSA Type-1 / Type-2 FIBO | Indirect via deployer's regulated activity |

The structural parallels are intentional. Agent custody / authorization is a **digitally-native LPOA** with **stronger revocation primitives** and **finer-grained scope expression**. The legal doctrine carries over almost unchanged: the principal (user / deployer) retains liability; the agent has limited authority within the granted scope; revocation is a unilateral right of the principal. See [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] for the full doctrinal mapping and [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]] for the brokerage LPOA framing.

## Custody x authorization x revocation matrix · production patterns

| Pattern | Custody | Authorization | Revocation | Use case |
|---|---|---|---|---|
| **Consumer chat agent** | Fully custodial (Privy / Coinbase CDP / Magic) | Spend-rule + amount-bounded + time-bounded | Off-chain admin console | Casual AI agent shopping |
| **Enterprise treasury agent** | Hybrid (Safe multi-sig + human co-signer) | Per-resource + amount-bounded; m-of-n threshold | On-chain instant via Safe admin | B2B procurement / supplier payment |
| **Autonomous research agent** | Hybrid (Lit PKP with Lit Action policy) | Time-bounded + policy-coded | On-chain via PKP NFT transfer | Long-running data-collection agent |
| **Issuer-mediated agent commerce** | Fully custodial (Skyfire / Stripe Issuing) | Merchant-category + amount-bounded + time-bounded | Issuer console (seconds) | Visa-rail merchant shopping |
| **High-value institutional agent** | Full self-custody + agent proposes only | Single-transaction (user approves each) | n/a (no autonomous auth) | $1M+ transactions; agent is advisory only |
| **Cross-jurisdictional autonomous agent** | Hybrid (Lit PKP threshold across nodes in different jurisdictions) | Policy-coded with jurisdiction-specific rules | On-chain via PKP NFT | Censorship-resistant agent operations |

## Revocation latency · what actually matters operationally

Different revocation mechanisms have materially different latencies. The 2026-05 reference numbers:

| Mechanism | Typical latency | Failure mode |
|---|---|---|
| **On-chain instant (ERC-7715 revoke)** | 1-15 seconds (L2 finality) | RPC propagation; bundler delays |
| **Off-chain wallet-mediated (Privy admin)** | 1-5 seconds | Custodian API; cached signing keys |
| **Issuer ledger (Skyfire / Stripe Issuing)** | 5-30 seconds | Issuer's downstream propagation to card network |
| **Legal / contractual (written notice)** | Hours-to-days | Adviser must process; effective T+1 |
| **Timed expiration** | 0 seconds (auto) | Requires correct clock; clock-drift attacks |

The operational implication: **on-chain instant + timed expiration as a baseline default** gives the strongest revocation profile. Off-chain mediated is acceptable when the custodian is trusted; legal / contractual revocation is too slow for high-frequency agent operations.

## Cross-stack composition checklist

A production-grade agent custody + authorization deployment should specify:

- [ ] **Custody model** — self / hybrid / custodial (and named vendor if custodial)
- [ ] **Key material location** — local TEE / cloud TEE / threshold network / HSM
- [ ] **Authorization granularity** — list of granularities composed (time + amount + scope + resource)
- [ ] **Revocation mechanism** — on-chain / off-chain / legal, with latency target
- [ ] **Multi-signer / threshold** — if applicable, signer composition (m-of-n)
- [ ] **Audit trail** — what is logged, where, retention period
- [ ] **Failure mode** — what happens if custodian / Lit network / bundler is down
- [ ] **Recovery** — what happens if user loses passkey / device
- [ ] **Insurance / bond** — is custodian bonded; what bankruptcy isolation applies (see [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]])
- [ ] **Identity attestation** — what binds the agent's key to the deployer (see [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]])

A production design that does not specify all of these is incomplete and will fail supervisory examination.

## Sources

- Privy docs (docs.privy.io)
- Magic docs (docs.magic.link)
- Coinbase CDP docs (docs.cdp.coinbase.com)
- Skyfire docs (docs.skyfire.xyz)
- Lit Protocol developer docs (developer.litprotocol.com)
- ERC-7715 EIP draft (eips.ethereum.org/EIPS/eip-7715)
- ERC-4337 EIP final (eips.ethereum.org/EIPS/eip-4337)
- ERC-7702 EIP final (eips.ethereum.org/EIPS/eip-7702)
- Safe (Gnosis Safe) docs (docs.safe.global)
- FINRA Notice 12-25 on discretionary authority and LPOA (finra.org)
- SEC Investment Advisers discretionary authority guidance (sec.gov)
- Japan FSA Financial Instruments and Exchange Act (fsa.go.jp)
- CFTC press releases on adviser registration (cftc.gov)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet landscape 2026 consolidation]]
- [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[banking/custody-bank-operating-model|custody bank operating model]]
- [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]]
<!-- /wiki-links:managed -->

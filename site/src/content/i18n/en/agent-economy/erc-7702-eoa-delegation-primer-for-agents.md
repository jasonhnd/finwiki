---
source: agent-economy/erc-7702-eoa-delegation-primer-for-agents
source_hash: d2c5cd5f5212c9cc
lang: en
status: machine
fidelity: ok
title: "ERC-7702 EOA Delegation Primer for AI Agents"
translated_at: 2026-05-30T17:04:08.792Z
---

# ERC-7702 EOA Delegation Primer for AI Agents

## TL;DR

ERC-7702 (live since Pectra, 2025-05) lets an existing externally-owned account temporarily — or persistently — execute as if it were a smart contract wallet, without changing its address. For AI agents this matters because the ~90% of Ethereum value that lives in EOAs (MetaMask, Rabby, hardware wallets, exchange withdrawal addresses) was previously unreachable to the agent stack: any agent integration required the user to first migrate to a brand-new SCW address, which is a non-starter for anyone with ENS, NFTs, or live DeFi positions. With 7702 the same address that has been the user's identity for years can install a *delegation designator* pointing to a contract — typically a session-key-aware wallet implementation — and from that point forward an agent can hold a scoped signer on that address, with the same `validateUserOp`-style policy enforcement an [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 SCW]] would provide. This primer covers the `SET_CODE_TX` mechanism, the agent-side session-key pattern on top of it, how it composes with [[agent-economy/erc-7715-overview|ERC-7715]] and the [[agent-economy/erc-7715-agent-payment-stack|four-layer agent payment stack]], and the meaningfully different security posture vs the pure-4337 path.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]] as the agent-execution reading of [[systems/erc-7702-overview|ERC-7702]]. Read it against [[agent-economy/erc-4337-account-abstraction-primer-for-agents|the ERC-4337 agent primer]] for the SCW-side path, [[systems/erc-7702-vs-erc-4337|the systems-side comparison]] for the generic protocol view, and [[agent-economy/erc-7715-overview|ERC-7715]] for the permission layer that rides on top. For the broader protocol map, [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]] and [[agent-economy/ai-agent-payment-protocols-seven-layers|the seven-layer table]]. For the broader system / regulatory boundary, [[systems/INDEX|systems index]].

## Mechanism · `SET_CODE_TX` and the delegation designator

EIP-7702 added a new Ethereum transaction type (`0x04`, "set code") to the protocol layer at the Pectra hard fork. The shape:

- The user signs a `delegationDesignator` — an authorization tuple `(chainId, contractAddress, nonce)` plus a secp256k1 signature over it. The signed object says "this EOA authorizes contract X to be installed as its code, on chain Y, at nonce N."
- A `SET_CODE_TX` containing that signed delegation is broadcast (by the user or any relayer — the relayer pays gas). Once mined, the EVM treats the EOA's code as a thin trampoline that `DELEGATECALL`s into the designated contract for every subsequent call.
- The designation persists until the user signs a new one (pointing to a different contract, or `address(0)` to remove). There is no expiry built into the EIP itself — persistence is the default, and revocation is a deliberate on-chain action.

The critical EVM semantics: the EOA's address, balance, nonce, and history are unchanged. The address that has held the user's ENS / NFTs / Aave position for five years stays the same address — only its executable code changes. From the perspective of any contract or indexer, calls to that address now go through the designated implementation logic, but storage still belongs to the address itself (which is how the designated logic can use storage to hold session keys, scopes, etc.).

## Mechanism · session keys, agent-side

Once an EOA has delegated to a wallet implementation that supports session keys (a Safe variant, a Kernel variant, MetaMask Smart Account, Rhinestone Account, etc.), the agent integration pattern is structurally identical to the [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 session-key pattern]]:

1. The user's existing EOA, post-delegation, exposes a session-key module entry point.
2. The user signs a transaction (or a UserOp, if also routed via 4337 — see below) that installs a session-key entry for the agent's public key, with a scoped policy (target contracts, selectors, value caps, per-period limits, expiry).
3. The agent holds the corresponding private key in a hardened environment ([[agent-economy/privy-embedded-wallet-overview|Privy MPC]] share, AWS Nitro Enclave, Apple Secure Enclave, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] signer service).
4. The agent submits transactions signed by the session key. Because the EOA now executes wallet-implementation code, the implementation's `validateUserOp` (4337-style) or its native transaction guard logic checks the session key's signature and scope before executing.
5. The user can revoke by signing a transaction that removes the session-key entry, or by signing a new `SET_CODE_TX` pointing to `address(0)` to remove the delegation entirely.

The major operational difference from a fresh 4337 SCW is that *the user did not have to move funds*. The same DeFi positions, NFT holdings, ENS reverse-resolution, and on-chain reputation are still attached to the same address. The agent inherits the entire history.

## Mechanism · 7702 + 4337 composition

The cleanest production deployments compose 7702 *and* 4337:

- The EOA delegates (via `SET_CODE_TX`) to a wallet implementation that implements the ERC-4337 `validateUserOp` interface.
- After delegation, the EOA can be addressed as both an EOA (legacy txs still work) *and* as a 4337-compatible SCW (Bundlers can pick up UserOps where `sender == EOA address`).
- All of the 4337 infrastructure — Bundlers, Paymasters, EntryPoint v0.7 — works without modification, because the EntryPoint's only requirement is that `sender` has the right validation interface, and the delegated code provides it.
- Sessions, gas sponsorship, and scope enforcement work identically to the pure-4337 case ([[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]]).

This is why the agent-economy reading of "is 7702 a competitor to 4337?" is mostly "no, they compose." 7702 solves the *address migration* problem; 4337 solves the *execution semantics* problem; together they give the same agent the same scoped, sponsorable, revocable execution surface as a fresh SCW on the user's existing address.

A 7702-only deployment (no 4337) is also possible — the wallet implementation can ship its own internal session-key logic and run on standard legacy transactions. This is operationally simpler (no Bundler / Paymaster dependency) but loses the ETH-free UX, the Bundler batching savings, and the standardized EntryPoint trust root.

The practical recommendation in most agent-stack engineering guides as of mid-2026: pick a wallet implementation that natively supports both modes (Safe-7579, Kernel, Rhinestone Account, MetaMask Smart Account variants), delegate to it via 7702 for existing-EOA users, and let the agent path use the same `validateUserOp` interface regardless of whether the caller is a true 4337 SCW or a 7702-delegated EOA. The downstream code paths converge.

## Mechanism · the delegation designator's signature lifecycle

The delegation designator's signature is its own load-bearing object and deserves a closer look from the agent-security angle:

- The signed payload is `(MAGIC || chain_id || address || nonce)` per the EIP, where `MAGIC` is a domain-separation byte. The signature is over the keccak256 of that payload, produced by the EOA's secp256k1 key.
- The `chain_id` field is critical — it is what prevents a signed delegation from one chain being replayed against the same EOA on another chain. A delegation signed with `chain_id == 0` is replayable across chains (the EIP allows this for explicit cross-chain delegation, e.g. "delegate to this implementation everywhere") and is therefore the most dangerous mode from a UX standpoint.
- The `nonce` field is taken from the EOA's account nonce at the time the `SET_CODE_TX` is mined, not at signing time. Multiple delegations signed by the same EOA can be queued; only the one matching the actual on-chain nonce when mined takes effect.

For an AI agent that wants to *help* a user revoke a malicious delegation, the agent must construct a fresh `SET_CODE_TX` pointing to `address(0)`, signed by the EOA. The agent cannot do this from a session key alone — revocation requires the root EOA signature. This asymmetry is intentional: the user must always retain the ability to revoke, even if the agent's session-key infrastructure is compromised. Wallet implementations that misunderstand this and try to make revocation possible via session keys are creating a security hole.

## Mechanism · temporary authorization, the 7702-specific pattern

A genuinely 7702-native pattern (that has no clean analog in 4337) is *single-transaction delegation*: include the `SET_CODE_TX` authorization in the same transaction that uses it, then immediately revoke. Concretely:

1. User signs a `delegationDesignator` and a follow-up call in one bundle.
2. The bundle is submitted by a relayer. The EVM applies the delegation, executes the follow-up call (which uses session-key / batch / sponsorship features the EOA otherwise does not have), and then a final operation removes the delegation.
3. Net effect: the EOA had SCW behavior for exactly one transaction, then reverted to a pure EOA.

For agents, the agent-specific reading is **"hand the agent a one-shot, time-bounded authorization."** The user can let an agent execute a single batched operation — e.g. "approve USDC + execute swap + transfer to merchant in one atomic UserOp-like sequence" — without giving the agent a persistent session key. This is closer in shape to OAuth 2.0's authorization-code flow than to OAuth bearer tokens: the user issues a single-use credential, the agent consumes it, and the authorization evaporates.

Persistent delegation (the more common case) is the closer analog to OAuth refresh tokens or [[agent-economy/erc-7715-overview|ERC-7715]] scoped permissions: the agent gets a long-lived signer with bounded scope.

## Agent-specific scenarios

**Scenario A — long-time MetaMask user adds an autonomous agent.** A DeFi user with a five-year-old MetaMask address holding LP positions, NFTs, and ENS wants to let an agent rebalance her positions weekly within a tight risk envelope. Before 7702: she would have had to migrate everything to a new SCW. With 7702: she signs one `SET_CODE_TX` to delegate to a Safe-style wallet implementation, then signs a session-key authorization for the agent with scope "can call `Aave.repay/borrow/withdraw` on tokens X/Y/Z, up to N USDC per week, expiry 90 days." The same address keeps all its history.

**Scenario B — single-use trading authorization.** The user wants to let an agent execute one specific arbitrage trade today only, no persistence. Pattern: user signs a 7702 single-transaction delegation that lets the agent execute the batched approve+swap+repay sequence in one atomic operation, after which the EOA returns to plain-EOA state. The agent never holds an on-chain signer; the authorization is consumed and gone.

**Scenario C — EOA "downgrade" for security.** A user who installed a 7702 delegation last year and gave an agent a session key wants to revoke everything because she suspects the agent platform was compromised. One `SET_CODE_TX` pointing to `address(0)` removes the delegation entirely; all installed session keys become unreachable in a single atomic operation. This is meaningfully simpler than a 4337 SCW where revocation typically requires interacting with the SCW's module-uninstall logic.

**Scenario D — multi-chain agent on one identity.** The user's same EOA address exists on Ethereum mainnet, Base, Arbitrum, and Optimism (because EOAs are chain-independent and the user has used the address everywhere). She can delegate to *different* wallet implementations on different chains — a session-key-rich implementation on Base for high-frequency [[agent-economy/x402-http-payment-overview|x402]] agent traffic, a multi-sig-style implementation on mainnet for cold storage. The agent operates from one identity but with chain-appropriate execution semantics.

**Scenario E — agent platform-provisioned EOAs.** A platform (Stripe, AWS AgentCore) generates a fresh EOA per agent at provisioning time. Pre-7702 the natural choice would have been a 4337 SCW per agent, which means a contract deployment per agent. With 7702 the platform can simply provision a fresh EOA, fund it with USDC, and have the agent sign a `SET_CODE_TX` to delegate to a known-good implementation on first use. No factory deployment, no counterfactual address calculation. For agent fleets in the tens of millions, this saves real on-chain cost.

## Regulatory framing · "the EOA is still the user"

The 7702 architecture has a useful regulatory property: the EOA address that signs `SET_CODE_TX` is the same address that was the user's identity before. Most jurisdictions' AML / KYC / sanctions frameworks identify natural persons by their wallet address (in the same way they identify them by a bank account number). 7702 preserves that mapping — the user's address is unchanged, history is unchanged, all the on-chain reputation and transaction graph that compliance vendors have built up against the address still applies. The only change is that the address can now execute richer logic.

This is operationally different from 4337's "fresh SCW address" pattern, where every compliance vendor has to re-anchor the user identity to the new address and rebuild the graph. For institutional users and for users in jurisdictions with strict travel-rule requirements, 7702 is the lower-friction path because the regulatory identity persists across the upgrade.

The flip side is that the *delegation designator itself* is a new attestation that did not exist before, and most jurisdictions have not yet codified what it means. A user signing a delegation to a malicious contract has, in effect, signed away custody of every asset at that address — that is a much more severe action than signing a normal transaction, and the legal status of "I was tricked into signing a delegation" claims is genuinely unresolved.

## Comparison to ERC-4337 for agent use cases

| Dimension | ERC-4337 path | ERC-7702 path |
|---|---|---|
| Starting state | User does not yet have an Ethereum wallet, or has one and accepts moving | User has an existing EOA with history they want to keep |
| Address | New SCW address | Existing EOA address |
| Onboarding cost | Counterfactual deploy + first UserOp | One `SET_CODE_TX` signature (~30k–50k gas) |
| Session-key support | Native via SCW module installation | Native after delegation, via delegated implementation's storage |
| Gas sponsorship | Paymaster (4337-native) | Paymaster if composed with 4337; otherwise legacy relayer |
| Revocation | Module uninstall via UserOp | Either remove module, or signing `SET_CODE_TX` to `address(0)` for nuclear option |
| Single-use authorization | Awkward (each UserOp creates persistent state) | Native via single-tx delegation pattern |
| Agent identity on history | Agent acts via a new address with no track record | Agent acts via the user's existing address with full track record |
| Compliance / KYC continuity | Identity must be re-anchored | Identity persists |
| Security worst case | SCW logic bug = SCW funds at risk | Delegation logic bug = *entire EOA history* at risk |

For agent use cases the practical guide:

- *New user onboarding through an embedded-wallet platform* → 4337 SCW. The user never had an EOA; there is nothing to delegate from. [[agent-economy/privy-embedded-wallet-overview|Privy]] / [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] / Alchemy default to this path.
- *Existing EOA user* (MetaMask, Rabby, hardware wallet) *wanting agent capabilities* → 7702 delegation, possibly composed with 4337 for the execution semantics. This is the path MetaMask and Rabby ship in 2026.
- *Institutional multi-sig* → 4337 + Safe modules; 7702 is largely irrelevant because the institution does not have an EOA to upgrade.
- *Single-use, high-trust authorization* → 7702 single-tx delegation.
- *Long-lived agent fleet for retail SaaS* → 4337 SCWs provisioned by the platform.

The detailed split, from the systems side, is in [[systems/erc-7702-vs-erc-4337|the 7702 vs 4337 comparison page]].

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 account-abstraction primer for agents]]
- [[agent-economy/erc-7715-overview|ERC-7715 · Wallet Permissions overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[systems/erc-7702-overview|ERC-7702 systems overview]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/erc-4337-overview|ERC-4337 systems overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]]
- [[systems/INDEX|systems index]]

## Sources

- EIP-7702 spec — `eips.ethereum.org/EIPS/eip-7702`.
- EIP-4337 spec — `eips.ethereum.org/EIPS/eip-4337`.
- "EIP-7702: Set EOA Account Code" — original ethresear.ch / ethereum-magicians proposal threads.
- Vitalik Buterin, "EIP-7702 Optimizations" notes — `notes.ethereum.org/@vbuterin/eip_7702_optimizations`.

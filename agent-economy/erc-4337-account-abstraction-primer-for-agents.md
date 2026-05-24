---
title: ERC-4337 Account Abstraction Primer for AI Agents
aliases:
  - erc-4337-for-agents
  - account-abstraction-for-ai-agents
  - aa-agent-primer
  - agent-userop-bundler
  - erc-4337 agent execution
  - 4337 for agentic payments
  - agent paymaster sponsorship
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, erc-4337, account-abstraction, ai-agent, smart-wallet, userop, bundler, paymaster, session-key]
status: active
sources:
  - https://eips.ethereum.org/EIPS/eip-4337
  - https://www.erc4337.io/
  - https://ethresear.ch/t/erc-4337-account-abstraction-without-ethereum-protocol-changes/8742
  - https://docs.privy.io/
  - https://docs.cdp.coinbase.com/
---

# ERC-4337 Account Abstraction Primer for AI Agents

## TL;DR

ERC-4337 is the application-layer account-abstraction standard that lets an Ethereum address be controlled by arbitrary code instead of a single secp256k1 key. For AI agents, that is the difference between *"the agent has to be given the user's seed phrase"* (unsafe, irrevocable) and *"the agent is a signer on a smart contract wallet with scoped, revocable, sponsorable execution rights"* (the actual building block underneath [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]] and the [[agent-economy/erc-7715-agent-payment-stack|four-layer agent payment stack]]). The four primitives — UserOperation, EntryPoint, Bundler, Paymaster — each have an agent-specific reading: the UserOp is the agent's *intent envelope*, the EntryPoint is the *trust root* that bounds what the agent can do, the Bundler is the *exec relay* that lets the agent submit txs without holding ETH, and the Paymaster is the *gas sponsor* that lets the platform (Stripe, AWS AgentCore, Vercel) eat the gas instead of the user's agent budget. This primer covers that mapping, the session-key pattern most agent SDKs settle on, and the regulatory framing of "who is the signer of record" when the signer is software.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]] as the agent-execution reading of [[systems/erc-4337-overview|ERC-4337]]. Read it against [[systems/erc-4337-userop-bundler-flow|the systems-side UserOp / Bundler flow]] for the generic protocol view, [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|the ERC-7702 agent primer]] for the EOA-side path, and [[agent-economy/erc-7715-overview|ERC-7715]] for the permission layer that sits directly on top. The broader protocol map is [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]] and [[agent-economy/ai-agent-payment-protocols-seven-layers|the seven-layer table]]. For the broader system / regulatory boundary see [[systems/INDEX|systems index]].

## Mechanism · the four primitives, agent-side reading

ERC-4337 introduces an *alternative transaction pool* that runs in parallel to Ethereum's standard mempool. Nothing in the protocol layer was modified; the entire system lives in user-space contracts and an off-chain relay network. The agent-side reading of each component:

**UserOperation as agent intent envelope.** A UserOp is a struct, not a transaction. It carries `sender` (the smart contract wallet the agent acts through), `nonce`, `callData` (the actual operation — e.g. `USDC.transfer(merchant, amount)`), three gas fields, optional `paymasterAndData`, and a `signature`. For an AI agent the signature field is the load-bearing piece: it is not the user's root key. It is a *session signer* — a key the user authorized the agent to use, often a secp256r1 / WebAuthn / passkey credential held in a TEE the agent has access to. The UserOp is the on-the-wire form of "the agent wants to do X, here is the proof it is allowed to."

**EntryPoint as trust root.** EntryPoint is a singleton contract at `0x0000000071727De22E5E9d8BAf0edAc6f37da032`. Every UserOp must transit it, and every smart contract wallet that wants to receive UserOps implements a `validateUserOp(...)` callback that the EntryPoint invokes. For an agent that callback is *the policy enforcement point*. It is where the SCW checks "is this session key still valid? has the rate limit been exceeded? is this calldata within the permitted scope?" — i.e. it is where the contractual leash on the agent is enforced at consensus. The [[security/bytecode-forensic-three-tier-verify|bytecode of the SCW]] is therefore the agent's bounded execution surface, not the agent's runtime prompt.

**Bundler as the agent's exec relay.** A Bundler is a permissionless off-chain actor that pulls UserOps from the alt-mempool, simulates them, and packs N of them into a single `EntryPoint.handleOps(...)` transaction. The Bundler pays ETH gas to the network and is reimbursed (in ETH or ERC-20) by the SCW or its Paymaster. For an agent this matters because *the agent never has to hold ETH*. The wallet the user funds can be a pure USDC-denominated SCW; the Bundler is the entity that converts the agent's intent into an actual on-chain transaction. The full mechanical breakdown is in [[systems/erc-4337-userop-bundler-flow|the UserOp / Bundler flow page]].

**Paymaster as platform-side gas sponsor.** A Paymaster is an optional contract that signs off on "I will pay the gas for this UserOp." In the agent-economy reading the Paymaster is almost always *the platform*, not the user — Stripe's Privy stack paying gas so an [[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]] agent can call a [[agent-economy/x402-http-payment-overview|x402-priced API]] without the user's wallet needing native ETH. The Paymaster can also accept ERC-20 (USDC) as gas, which is how Coinbase Smart Wallet, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]], and Privy ship "no-ETH agent wallets" today.

The fifth optional primitive is the Aggregator — a contract that can batch-verify many signatures at once (BLS or similar). For agent fleets that all sign with the same signature scheme this is interesting; in practice individual-agent UserOps still dominate v0.7 traffic.

The mapping back to the agent stack is worth restating in compact form: the user owns the SCW; the agent's authority is the session signer it controls inside `validateUserOp`'s scope check; the agent never has to hold ETH because the Paymaster does; and the agent never has to operate a node because the Bundler does. All four 4337 primitives correspond to a distinct line of responsibility in the agent operational model — wallet, signer, gas, transport. Everything above this layer (ERC-7715 permission grants, AP2 mandates, x402 402 handshakes) is making the user-facing semantics standardized; everything at this layer is making the execution actually happen on Ethereum.

## Mechanism · the validateUserOp lifecycle, agent-side reading

It is worth slowing down on what happens inside the SCW during a single agent UserOp, because that is where the entire policy boundary actually lives.

When the EntryPoint receives `handleOps(ops[], beneficiary)` from the Bundler, for each UserOp it does the following in order, before any agent-controlled code executes:

1. **Account creation** — if `sender` has no code yet (a "counterfactual" SCW), the EntryPoint deploys it via the factory hint in the UserOp's `initCode` field. For agent flows this is what makes "give the agent a wallet" cheap: the wallet does not exist until the agent's first UserOp triggers it.
2. **`validateUserOp(userOp, userOpHash, missingAccountFunds)`** — the EntryPoint calls into the SCW. The SCW returns a `validationData` packed integer encoding (a) whether the signature is valid, (b) a `validAfter` / `validUntil` time window, and (c) optionally an aggregator address. This is where the SCW enforces "is this UserOp something I was authorized to execute, by a signer I recognize, within scope and within the time window the user permitted?" For an agent-bearing SCW, *all* the policy lives here: the session-key module's scope check, the per-period spend cap, the merchant whitelist, the calldata selector restriction.
3. **`validatePaymasterUserOp(...)`** — if a Paymaster is present, the EntryPoint calls into it for the equivalent gating: "do I, the Paymaster, agree to pay gas for this specific UserOp?" Platform Paymasters use this hook to enforce per-user / per-agent rate limits and to refuse UserOps that fail the platform's own scope policy.
4. **Execution** — only after both validations succeed does the EntryPoint call the SCW's execution path with `callData`. By construction, anything reachable at this step is something the SCW already attested to during validation. The agent's prompt-time decisions never enter this branch directly; they enter only via the validation that already happened.
5. **Gas reconciliation** — the EntryPoint debits the SCW (or the Paymaster) for actual gas used and pays the Bundler.

The architectural point for agent design: any *enforced* invariant about agent behavior must be expressible inside `validateUserOp`. Anything that is only checked in the agent's prompt or in the SDK is advisory, not binding. The line between "the agent might violate this" and "the agent cannot violate this" is the line at step 2.

## Mechanism · session keys as the canonical agent pattern

The session key pattern is what most embedded-wallet platforms ([[agent-economy/privy-embedded-wallet-overview|Privy]], [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]], ZeroDev, Pimlico, Alchemy) converge on for agent execution. The shape:

1. The SCW is owned by a *root key* the user controls — a passkey on their device, a Privy MPC share, a hardware wallet, etc. The root key is rarely used after onboarding.
2. The SCW has an installed *session key module* that whitelists a second public key — the agent's signer — with a bounded scope (e.g. "can call `USDC.transfer` to any `*.vercel.com` x402 receiver up to $5/day, valid for 30 days").
3. The agent holds the corresponding private key in a hardened environment (AWS Nitro Enclave, Apple Secure Enclave, a Cloudflare Workers KV slot, a Bedrock AgentCore signer service).
4. UserOps signed by the session key validate inside `validateUserOp` against the module's scope rules, not against the root owner.
5. The root owner can revoke the session key at any time with a single on-chain operation — usually itself a UserOp.

This is what [[agent-economy/erc-7715-overview|ERC-7715]] standardizes one layer up: instead of every wallet inventing its own session-key module ABI, `wallet_grantPermissions` lets a dapp request a standard scope and the wallet renders the right module call. Under the hood it is still a 4337 SCW with a session-key module enforcing scope inside `validateUserOp`.

The session-key abstraction is *the* design that makes "an AI agent has a wallet" a reasonable thing to say, because the abstraction draws a sharp legal/operational boundary: the user owns the wallet, the agent has a leash, and the leash is enforced at the consensus layer, not at a prompt boundary or an SDK guardrail.

## Mechanism · gas sponsorship as the agent-economy unlock

Without Paymasters, AI agents would be stuck with the same UX problem human users had pre-4337: the wallet must hold the native gas token, which means topping it up, watching its balance, and refunding it when it runs out. For an agent that calls 200 different APIs over a workday this is operationally hostile.

The agent-economy resolution is **platform-paid gas**:

- The platform (Stripe, AWS AgentCore, Vercel, Cloudflare) runs its own Paymaster contract, prefunds it with ETH on the relevant chains, and signs `paymasterAndData` for every UserOp that originates from an agent it hosts.
- The platform recovers cost either by metering it against the user's billing plan ("you used 3,400 sponsored UserOps this month") or by treating gas as a loss-leader to win the wallet integration.
- For pure crypto-native flows the Paymaster can demand reimbursement in the call's denomination — e.g. take 0.5% of the USDC the agent just transferred to cover gas.

This is the mechanism that makes the [[agent-economy/erc-7715-agent-payment-stack|four-layer stack]] actually run end-to-end: a Vercel agent gets a 402, the agent's SCW signs a UserOp transferring $0.50 USDC, the Privy-managed Bundler picks it up, Stripe's Paymaster covers gas, EntryPoint validates and executes — all in roughly two seconds and zero ETH ever touched the agent's hands.

## Agent-specific scenarios

**Scenario A — autonomous API spend within a daily cap.** The user authorizes a Claude agent to spend up to $20/day on developer APIs. Implementation: 4337 SCW with a session-key module that whitelists the agent's signer and enforces a rolling-window spend cap inside `validateUserOp`. Each x402 payment is a UserOp; the module checks the cap before validating the signature. When the agent tries to overspend, `validateUserOp` reverts and the Bundler drops the UserOp from its mempool. No prompt-injection-derived overspend is possible because the leash is at the contract layer.

**Scenario B — delegation to a sub-agent fleet.** A primary agent ("planner") delegates sub-tasks to N worker agents. The pattern: planner's SCW installs N session-key modules, one per worker, each with a tight per-call cap. The EntryPoint validates each worker's UserOp against the worker's specific module. Auditing is straightforward: every worker's spend is on-chain under its own signer and can be reconstructed from EntryPoint events. This is closer in shape to AWS IAM role-assumption than to a traditional payment authorization.

**Scenario C — sponsored API trial via Paymaster.** A merchant wants to let agents try its API for free up to N calls/agent/month. The merchant runs a Paymaster that sponsors UserOps whose `callData` targets the merchant's [[agent-economy/x402-http-payment-overview|x402 receiver contract]] and whose `sender` has been seen fewer than N times. The agent SCW does not even need to hold USDC for these calls — the Paymaster pays gas and the merchant pays itself. This is the on-chain equivalent of a free-tier API key issued via OAuth.

**Scenario D — gas in USDC for an agent stablecoin float.** The agent SCW holds only [[fintech/usd-stablecoin-interchange|USDC]]. Pimlico's / Alchemy's permissionless Paymasters accept USDC as gas at a posted rate. Each UserOp is gas-paid in USDC; no ETH balance management. This is the operational mode most pilots ([[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]], Coinbase Smart Wallet agent demos) settle on.

**Scenario E — agent acting as relayer for a passive user.** A user puts $500 USDC in an SCW and goes offline; the agent runs trades / API calls / subscription top-ups on schedule. Because the agent signs UserOps, and Bundlers pick them up automatically, the user need not be present for any individual transaction. The user's root key only re-appears when scope needs to be widened or revoked.

**Scenario F — agent batches per-API micropayments inside one UserOp.** An agent doing a research task fetches data from twelve different x402-priced endpoints within a single task execution. Rather than submit twelve UserOps and pay the per-UserOp validation overhead twelve times, the agent's SCW exposes a `multicall(operations[])` entry point inside its execution branch. The agent constructs one UserOp whose `callData` is a `multicall` of twelve `USDC.transfer` calls; the SCW validates once, pays gas once, executes twelve. This is the agent-economy reading of the standard SCW batching feature, and it is *the* mechanism by which 4337 keeps per-operation gas costs sub-cent at agent volume.

**Scenario G — agent pays for an out-of-band off-chain action via x402 + 4337.** The agent calls a paid API; the API returns `HTTP 402` with USDC payment instructions. The agent constructs a UserOp transferring the required USDC to the API receiver, signs with its session key, submits to the Bundler, and waits for the on-chain inclusion. The API verifies the payment via [[agent-economy/x402-http-payment-overview|the x402 facilitator]] and returns the data on a retry. End-to-end latency on Base with a fast facilitator is well under a second; the agent does not need to hold ETH; the user's monthly cap is enforced at validation. This is the single most representative agent payment flow in the 2026 production stacks.

## Regulatory framing · who is the signer of record?

The 4337 architecture has a subtle regulatory consequence: the EntryPoint contract sees three potentially distinct identities on every UserOp — the *root owner* (the user who controls the SCW), the *session signer* (the key that signed this specific UserOp), and the *Bundler / Paymaster* (the entities that put it on-chain and paid for it). Existing payments and securities law in most jurisdictions assume "one human, one signature, one transaction" and have not been written to map cleanly onto this three-actor model.

The current consensus across embedded-wallet operators is to treat the *root owner* as the signer of record for KYC/AML purposes and the session signer as an internal authorization artifact, analogous to a OAuth scope token. That mirrors how AP2's mandate construct treats the user as the source of authority and the agent as a delegated executor (see [[agent-economy/ap2-overview|AP2 overview]]). It is also consistent with how the OCC's interpretive letters and the EU's MiCA treat custodial vs self-custodial flows — they care who can authorize unconstrained movement of funds, not who signed a scoped sub-action.

The unresolved questions are: chargeback / dispute mechanics when the session key transacts in error ([[agent-economy/visa-mastercard-agentic-commerce-pilots|the card networks address this differently]]), liability allocation when the Paymaster is the platform rather than the user (does sponsoring gas create agency relationships?), and the cross-chain identity question of whether a Privy MPC root owner on chain A is the same legal person as a Coinbase CDP root owner on chain B.

The deeper open issue is whether session-signer attestations themselves become a regulated artifact. AP2 mandates are explicitly designed to be verifiable credentials that a regulator or auditor can inspect. 4337 session keys are not — they are bytecode-enforced authorization tokens with no canonical schema for "this scope corresponds to this user authorization." The likely landing is that the higher layer (AP2, ERC-7715) carries the regulated attestation while 4337 stays as pure execution; that pattern would mirror how OAuth scopes are user-visible while TLS session keys underneath are operational and invisible. If regulators instead try to reach down into the session-key layer directly, the embedded-wallet stack's compliance model gets meaningfully harder.

## Competitive position

ERC-4337 is the substrate, not a product. The competitive map is the layer above:

- **Wallet operators** ([[agent-economy/privy-embedded-wallet-overview|Privy]], [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]], Alchemy, ZeroDev) compete on UX, Bundler reliability, and Paymaster economics, all running 4337 under the hood. [[agent-economy/embedded-wallet-network-effects-moat|The integrator moat]] is the real value capture.
- **Bundler operators** (Pimlico, Stackup, Alchemy, Etherspot) are a thin and concentrated market — three to five players handle most volume. This is the most cited centralization risk; agent-economy load on 4337 only sharpens it.
- **Paymaster operators** overlap heavily with Bundler operators today, plus platform-owned Paymasters (Stripe via Privy, AWS via the AgentCore Payments module, Cloudflare for x402 receivers).
- **Higher-layer protocols** ([[agent-economy/erc-7715-overview|ERC-7715]], [[agent-economy/ap2-overview|AP2]], [[agent-economy/x402-http-payment-overview|x402]]) treat 4337 as commodity infra. They specify the user-facing semantics; 4337 specifies the execution.

The most important strategic fact: 4337 is *not* the only path to agent-friendly accounts. [[systems/erc-7702-overview|ERC-7702]] (live on mainnet since Pectra, 2025-05) gets EOAs to the same place by a different route. The two coexist and are often used together — many production stacks now ship "either 4337 SCW or 7702-delegated EOA" as user choice, with the same downstream agent-execution semantics. The detailed split is in [[systems/erc-7702-vs-erc-4337|the 7702 vs 4337 comparison]] and the agent reading of the 7702 path is [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|the ERC-7702 agent primer]].

## Counterpoints

**Bundler centralization is the agent-economy load-bearing risk.** Three to five Bundlers handle most 4337 UserOp volume today. Pushing AI-agent payment traffic through that bottleneck creates a small set of choke-points that could throttle, censor, or front-run agent transactions. Mitigations (PBS-style auctions, stake-based Bundler sets, in-protocol enshrinement via EIP discussions) exist on paper but have not landed. For an agent that runs thousands of x402 payments a day, a Bundler outage looks operationally identical to an internet outage.

**Paymaster sponsorship creates an implicit agency relationship.** When Stripe's Paymaster pays gas for a Stripe-onboarded agent's USDC transfer, Stripe is not just relaying — it is making a per-transaction commercial decision about which transactions it will subsidize. That is closer to MSB / money-transmitter posture than to "neutral RPC infrastructure," and creates regulatory exposure that the "we just run an RPC" framing does not survive.

**`validateUserOp` is the new attack surface.** The session-key module that enforces scope inside `validateUserOp` is now the single most security-critical piece of the agent stack — a bug there blows past every prompt-injection defense the model has, because the consensus layer is now wrong about what the agent is allowed to do. Audit and verification of session-key module bytecode is non-negotiable; see [[security/bytecode-forensic-three-tier-verify|three-tier bytecode forensic verification]] for the verification frame.

**The "no ETH" UX claim hides the float.** "Agents don't need ETH" is true at the agent surface and false in aggregate — *somebody* prefunded the Paymaster with ETH, and the cost of ETH volatility is now borne by the platform, not the user. For high-volume agent traffic this is a non-trivial line item in the platform's P&L that does not show up in the per-call accounting.

**v0.7 mempool rules ban opcodes that agents would otherwise lean on.** 4337's mempool validation rules forbid certain EVM opcodes (e.g. `TIMESTAMP`, `BLOCKHASH`, `BALANCE` against non-self addresses) inside `validateUserOp` to keep simulation deterministic. That is fine for human-driven UserOps but constraining for agent-driven flows that want time-windowed permission logic or oracle-conditional execution inside validation. The workarounds (offloading time checks to off-chain via signed attestations, doing oracle reads in the execution branch instead of validation) are well-understood but add complexity that the per-protocol overview pages do not always surface.

**Counterfactual SCW addresses can be sniped.** A SCW that is "deployed on first use" has a known address determined by CREATE2 + factory + salt. An attacker who learns that address before the agent's first UserOp can front-run by deploying a malicious contract at the same address via a competing factory. The mitigations (using factory addresses that are themselves SCWs, salting with secrets) are standard practice but the failure mode is not always obvious to agent platform engineers who treat the SCW address as "just an address."

## Open questions

- Will EntryPoint v0.8+ formalize a session-key / scoped-signer primitive at the standard level, or will it remain a per-module concern?
- What is the long-term sustainable Bundler count once 7702 EOAs share the same alt-mempool — does the Bundler economy fragment further or consolidate?
- Does Paymaster sponsorship for agent traffic eventually require an explicit license category (something like a "gas custodian" in addition to MSB)?
- How does cross-chain agent execution settle when the agent's SCW is on chain A but the API receiver is on chain B — does this end up as a 4337 + ERC-7683 (intents) composition or as something else?
- Will the next-generation Solana / Move / SVM equivalents of 4337 converge on the same UserOp / EntryPoint / Bundler / Paymaster shape, or pick a different decomposition?

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/erc-7715-overview|ERC-7715 · Wallet Permissions overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer for agents]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[systems/erc-4337-overview|ERC-4337 systems overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/INDEX|systems index]]

## Sources

- ERC-4337 EIP — `eips.ethereum.org/EIPS/eip-4337`.
- ERC-4337 reference site — `erc4337.io`.
- "ERC-4337: Account Abstraction Without Ethereum Protocol Changes" — original ethresear.ch proposal thread.
- Privy embedded-wallet docs — `docs.privy.io`.
- Coinbase CDP developer-platform docs — `docs.cdp.coinbase.com`.

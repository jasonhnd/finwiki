---
title: Stablecoin routing for AI agent transactions · which stablecoin actually settles agent payments
aliases:
  - stablecoin routing agent transactions
  - USDC vs USDT vs L2-native stablecoin agent settlement
  - Circle CCTP agent stack
  - paymaster gasless agent transactions
  - agent multi-chain UX stablecoin
  - cross-chain abstraction agent payments
  - settlement finality agent transactions
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, stablecoin, routing, usdc, usdt, base-usdc, op-stack, arbitrum, cctp, paymaster, erc-4337, erc-7702, gasless, cross-chain, settlement-finality]
status: active
sources:
  - https://www.x402.org/
  - https://docs.cdp.coinbase.com/
  - https://docs.privy.io/
  - https://www.circle.com/en/cross-chain-transfer-protocol
  - https://developers.circle.com/cctp
  - https://eips.ethereum.org/EIPS/eip-4337
  - https://eips.ethereum.org/EIPS/eip-7702
  - https://eips.ethereum.org/EIPS/eip-7715
  - https://docs.base.org/
  - https://docs.arbitrum.io/
  - https://docs.optimism.io/
  - https://github.com/google-agentic-commerce/AP2
  - https://www.federalreserve.gov/
  - https://www.fsa.go.jp/en/
  - https://www.fca.org.uk/
---

# Stablecoin routing for AI agent transactions · which stablecoin actually settles agent payments

## TL;DR

When an AI agent pays for an API call, a tool invocation, or a downstream agent service, the actual on-the-wire settlement asset in mid-2026 is **USDC on Base** for the dominant share, **USDC on other L2s** (Arbitrum, Optimism, Polygon PoS, Solana) for chain-specific use cases, **USDT on Tron / Ethereum L1** for emerging-market and informal agent rails, and **USDB / RLUSD / PYUSD / FDUSD** for issuer-aligned vertical stacks. The routing is **not** the agent's choice in most stacks — it is the wallet provider's and the receiving merchant's choice. **Privy + Coinbase CDP default to USDC**, and **Stripe / Bridge route through USDB**, so the default-tier wallet split (see [[agent-economy/embedded-wallet-landscape-2026-consolidation|2026 embedded-wallet consolidation]]) effectively decides which stablecoin AI agents pay in. Gasless transfers via ERC-4337 paymasters and Circle CCTP v2 (fast cross-chain finality) determine the **UX of multi-chain agent payments**, and the [[agent-economy/x402-http-payment-overview|x402 protocol]] is the dominant HTTP-layer mechanism that carries the choice. See [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]] for the wider stablecoin market and [[fintech/stablecoin-chain-token-strategy-trilemma|chain × token × strategy trilemma]] for issuer strategy.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it with [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]] for the protocol that carries the settlement, [[agent-economy/ap2-overview|AP2 overview]] for the intent / mandate layer, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]] for the USDC-on-Base default, and [[fintech/INDEX|fintech index]] for the broader stablecoin reserve and interchange context.

## Which stablecoin · 2026 mid-year settlement mix

A rough public-source-derived breakdown of where agent-payment volume actually lands by stablecoin / chain combination in mid-2026:

| Stablecoin × chain | Approximate routing share | Driver |
|---|---|---|
| USDC on Base | dominant share for default-tier embedded wallets | Coinbase CDP default + Base Paymaster + AgentKit |
| USDC on Ethereum L1 | enterprise / institutional agent flows | Compliance posture + USDC primary issuance |
| USDC on Arbitrum | DeFi-integrated agent flows | Arbitrum's deep DeFi liquidity |
| USDC on Optimism | OP-Stack-aligned agent flows | OP Superchain coordination |
| USDC on Solana | high-throughput agent flows | Solana's low-latency settlement; Privy + CDP multi-chain support |
| USDT on Tron | emerging-market and informal agent rails | USDT's regional dominance, low fees on Tron |
| USDT on Ethereum L1 | legacy and CEX-routed flows | USDT remains largest stablecoin by float |
| USDB on Tempo | Stripe-aligned agent flows | Stripe vertical stack default |
| RLUSD on XRP Ledger + Ethereum | Ripple-aligned flows | Ripple corridors and corporate-treasury demand |
| PYUSD on Ethereum + Solana | PayPal-aligned flows | PayPal merchant payouts |
| FDUSD on Ethereum + BNB | Asia-CEX-aligned flows | Binance routing |

Two observations:

1. **USDC on Base is the de facto default** because the AWS AgentCore default-wallet duopoly ([[agent-economy/privy-aws-agentcore-default-wallet|Privy + CDP]]) routes the long tail of agent provisioning toward Coinbase-aligned chain economics.
2. **USDT is structurally relevant for emerging-market / informal rails** even though no major hyperscaler-default agent stack picks it as the recommended default.

## Settlement finality requirements

An agent transaction's tolerance for settlement-finality delay depends on the use case:

| Use case | Tolerance | Typical chain choice |
|---|---|---|
| Per-API-call x402 micro-payment for a public endpoint | Sub-second perceived finality (probabilistic acceptance is OK) | L2 with fast block times; Base, Solana |
| Agent-to-agent settlement for a multi-second tool invocation | Few-second finality | Base, Arbitrum, Optimism |
| Agent paying a downstream agent that holds custody (escrow-like) | Hard finality required | Ethereum L1, or wait for L2 → L1 fraud-window confirmation |
| Cross-border B2B agent settlement | Finality + compliance | USDC on Ethereum L1; CCTP v2 cross-chain |
| Treasury sweep | Hard finality + reconciliation | Ethereum L1; off-chain reconciliation to traditional accounting |

The category trade-off mirrors the way payment networks balance authorization (fast) and clearing (slow). Agents typically operate against [[agent-economy/x402-http-payment-overview|x402 HTTP 402]] semantics, which accept early on-chain inclusion as authorization and treat full finality as a separable reconciliation step.

## Cross-chain abstraction · how multi-chain agent UX works

Most agent SDKs do not expose the underlying chain to the agent's reasoning layer. The chain-abstraction stack:

1. **Wallet-balance API.** Privy's Multichain Balances API and CDP's wallet APIs return a unified USDC balance across Ethereum, Base, Arbitrum, Optimism, and Polygon. The agent sees "you have N USDC available" rather than chain-by-chain balances.
2. **Routing layer.** The wallet routes outgoing payments to the lowest-fee, fastest-finality chain that the merchant accepts. The agent does not pick the chain.
3. **Circle CCTP v2 (Cross-Chain Transfer Protocol).** Circle's burn-and-mint mechanism for USDC across supported chains. CCTP v2 (released 2025) supports faster soft-finality across L2s with a hooks model for programmable post-mint actions. CCTP is the foundation of much of the multi-chain USDC routing inside default-tier wallets.
4. **LayerZero / Wormhole / Hyperlane / Axelar.** General-purpose cross-chain messaging layers used for non-USDC stablecoins, longer-tail chains, and cross-stack token swaps. These are typically wrapped behind the wallet abstraction.
5. **Cross-chain intent layer.** Across, Catalyst, Bungee, and similar intent-based routing protocols allow the agent's wallet to publish an intent ("move 100 USDC to chain X") and have a network of solvers fulfill it competitively.

The pattern in default-tier embedded wallets is to **default to USDC + CCTP v2** for cross-chain routing and to fall back to general-purpose messaging only when the target chain lacks USDC + CCTP support.

## Gasless agent transactions · paymaster mechanics

Agents do not hold ETH for gas in any sensible production deployment. Gas is sponsored via ERC-4337 paymasters:

- **Coinbase Base Paymaster.** Sponsors gas for transactions inside CDP-issued Smart Wallets on Base, paid in USDC or sponsored outright. The structural default for the [[agent-economy/coinbase-cdp-developer-platform|CDP / AgentKit]] stack.
- **Pimlico, Stackup, Biconomy, Alchemy AA paymaster.** Third-party paymasters that any ERC-4337 wallet can integrate. Used by Privy and other SDKs.
- **Stripe / Privy custom paymaster.** Stripe-rail-aware paymasters that meter USDC out of a merchant's Stripe Treasury balance.
- **EIP-7702 hybrid mode.** EOAs can temporarily upgrade to smart accounts (see [[agent-economy/erc-7715-overview|ERC-7715]] permission model) for a single transaction, allowing paymaster sponsorship without permanent migration.

For an agent making thousands of micro-payments per day, the paymaster's gas-cost model is a primary economic input. Base's USDC-native gas + sub-cent per-transaction fee is the structural reason Base dominates default-tier agent payment routing.

## Circle CCTP v2 · the cross-chain backbone

CCTP v2 (Circle Cross-Chain Transfer Protocol version 2) released in 2025 is the most consequential agent-stack stablecoin infrastructure change of the year. Key properties from Circle's developer documentation:

- **Burn-and-mint, not bridge-and-wrap.** USDC is burned on the source chain and minted on the destination chain by Circle's attestation. There is no bridged-USDC variant — every USDC on every CCTP-supported chain is native USDC.
- **Soft-finality fast transfers.** CCTP v2 introduced a fast-transfer mode that uses a finality-threshold attestation rather than waiting for hard L1 finality, supporting sub-minute cross-chain settlement for the common case.
- **Hooks.** A post-mint hook lets the destination chain run a programmable action after the USDC is minted. For agent payments this enables atomic "receive USDC + call downstream tool" semantics.
- **Chains supported.** Ethereum L1, Base, Arbitrum, Optimism, Avalanche, Polygon PoS, Solana, plus additional chains added through 2025-2026.

For an AI agent that needs to pay a tool on a different chain than its wallet currently holds USDC, CCTP v2 is the structural default. The wallet provider can resolve the cross-chain difference transparently within seconds.

## x402 + USDC · the dominant agent-payment HTTP stack

The [[agent-economy/x402-http-payment-overview|x402 protocol]] (Coinbase, 2025-05) revives the HTTP 402 Payment Required status code and binds it by default to USDC on Base for the reference implementation. The agent flow:

1. Agent calls an API endpoint.
2. Server responds HTTP 402 with payment instructions (USDC amount + recipient chain + address).
3. Agent wallet (Privy / CDP) signs and submits a USDC transfer.
4. Server verifies the transfer (Circle CCTP attestation or chain-native confirmation), returns the requested resource.

The protocol is asset-agnostic in its design, but the reference + AWS AgentCore default + Cloudflare Agents integration default all use USDC. The x402 Bazaar MCP catalog (10,000+ endpoints by mid-2026) is predominantly USDC-priced.

## Issuer-aligned vertical stacks

The non-USDC, non-USDT stablecoin slice of agent payment volume is driven by **issuer-aligned vertical stacks**:

- **USDB (Stripe / Bridge).** Inside the [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer stack]] (Connect → Privy → Bridge USDB → Tempo → AP2 / x402), USDB is the default settlement asset for Stripe-rail agent payments.
- **RLUSD (Ripple).** Used inside Ripple corridors and for Ripple-integrated corporate-treasury agent payments.
- **PYUSD (PayPal).** Used for PayPal-aligned merchant agent payouts on Ethereum + Solana.
- **FDUSD (First Digital).** Used in Binance / FDIC-perimeter Asian-CEX agent routing; relevant where Binance's BNB / FDUSD pair is the on-ramp.
- **JPYC / DCJPY / Progmat JPY (Japan).** Used inside Japan's [[exchanges/jp-cex-deposit-token-stablecoin-integration|deposit-token + EPI integration]] flows for agents operating in JPY-denominated commerce.

The pattern is that **each vertically-integrated payment stack runs its own stablecoin** as the default within that stack, and CCTP-style cross-chain interop is only USDC-internal. Cross-stablecoin liquidity sits in DEXs (Curve) and CEX market-makers — see [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]].

## Agent permission · who picks the stablecoin

The hierarchy of "who decides" in a typical agent payment:

1. **Hyperscaler default.** AgentCore Payments default = Privy or CDP wallet, which means USDC on the chain the wallet defaults to (Base for CDP, multi-chain for Privy).
2. **Wallet provider default.** Within that wallet, the multichain balances API tells the agent it has USDC; the wallet picks the chain at routing time.
3. **Merchant acceptance.** The recipient publishes which stablecoin / chain combinations it accepts. The wallet matches.
4. **Agent intent.** Only in narrow cases does the agent itself reason about the choice — for example, a treasury-agent rebalancing across stablecoins.
5. **User mandate via ERC-7715.** The user's [[agent-economy/erc-7715-overview|ERC-7715 wallet permission]] can constrain stablecoin / chain choices (allowed list of denominations and venues).

For most agent runtimes, the agent neither knows nor cares about the underlying stablecoin / chain. The choice is structural to the wallet stack.

## Counterpoints

- **USDC dominance is policy-fragile.** A US regulatory action against Circle, a failure in the USDC reserve, or a Coinbase-Circle split (Centre Consortium dissolved in 2023) could shift the default. Stripe's parallel USDB rail is structurally hedged for this reason.
- **USDT may dominate informal agent rails for longer than US-centric analysis suggests.** USDT on Tron has the largest stablecoin float globally and dominates emerging-market remittance flows. AI agents serving non-US user bases may route through USDT regardless of the AgentCore default.
- **Multi-chain abstraction can fail under load.** CCTP v2 attestation latency can spike during chain congestion; cross-chain messaging layers have shown attack surface (Wormhole 2022, Multichain 2023). Fully abstracted multi-chain UX still inherits the underlying chain's failure modes.
- **Gasless paymaster economics are subsidized.** Coinbase Base Paymaster effectively subsidizes gas to drive Base adoption. If the subsidy structure changes, agent-payment economics on Base shift.
- **Issuer-aligned vertical stacks could fragment the agent-payment internet.** If Stripe-rail agents only pay in USDB, PayPal-rail agents only pay in PYUSD, and Coinbase-rail agents only pay in USDC, the stablecoin-routing question becomes a stablecoin-interop question — and the [[fintech/usd-stablecoin-interchange|interchange]] market becomes structurally larger than current estimates suggest.
- **Japan and EU regimes can force a different default.** Japan's [[exchanges/jp-cex-deposit-token-stablecoin-integration|EPI / deposit-token integration]] and the EU's MiCA stablecoin regime can force agents in those jurisdictions to use a different default stablecoin than USDC. AgentCore-style defaults are subject to jurisdictional override.

## Open questions

- Does CCTP v3 (or a successor) extend Circle's native USDC routing to additional non-EVM chains during 2026-2027?
- Does the x402 protocol formally support multi-stablecoin price quotation in a single response, or does USDC-default stay structural?
- Does the AP2 mandate-protocol layer encode stablecoin / chain choice as part of the cart-and-payment mandate?
- Does a hyperscaler agent platform formally support USDT as a default-tier settlement asset (and what does that imply for the underlying merchant acceptance question)?
- Does a US regulatory action force a wallet provider to refuse settlement on USDT or non-US stablecoins, splitting the agent-payment internet by stablecoin and jurisdiction?
- Does ERC-7715 wallet permissions evolve to standardize a "stablecoin allowlist" field that users can pre-configure?
- Does a real-world agent-payment outage during a chain-congestion event (CCTP attestation backlog, Base sequencer pause) trigger the first material agent-payment SLA litigation?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded-wallet landscape 2026 consolidation]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol public documentation (x402.org)
- Coinbase Developer Platform public documentation (docs.cdp.coinbase.com)
- Privy public documentation (docs.privy.io)
- Circle Cross-Chain Transfer Protocol public documentation (circle.com, developers.circle.com/cctp)
- Ethereum EIPs: EIP-4337 (account abstraction), EIP-7702 (EOA upgrade), EIP-7715 (wallet permissions)
- Base, Arbitrum, Optimism public chain documentation
- Google Agentic Commerce AP2 public repository (github.com/google-agentic-commerce/AP2)
- US Federal Reserve, FSA Japan, FCA UK, and MAS Singapore public materials on stablecoin classification and settlement

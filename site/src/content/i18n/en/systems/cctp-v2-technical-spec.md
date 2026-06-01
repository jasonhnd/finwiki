---
source: systems/cctp-v2-technical-spec
source_hash: debba25bb3b731d6
lang: en
status: machine
fidelity: ok
title: "CCTP V2  Technical Specification · Fast Transfer · Hooks · Attestation Service"
translated_at: 2026-06-01T04:15:40.144Z
---
# CCTP V2  Technical Specification · Fast Transfer · Hooks · Attestation Service

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Fast Transfer latency is < 1  seconds (V1  is ~13  seconds) ^[extracted]
- Fast Transfer capital source: Circle's post-IPO $4.34B treasury ^[extracted]
- Hooks trigger destination-chain contracts in the same tx as mint and support 1-tx cross-chain swaps / loans ^[extracted]
- Circle Attestation Service is an off-chain signer network · not a decentralized oracle ^[extracted]
- Circle can refuse signatures for specific addresses (Tornado Cash example) ^[extracted]

## Mechanism / How it works

**Fast Transfer flow**:
1. The user burns USDC on the source chain
2. Circle monitors the burn event · without waiting for source-chain finality, it immediately mints on the destination chain (Circle uses its treasury to cover finality risk)
3. After source-chain finality is reached, Circle reconciles accounts internally and releases the collateral

**Hooks flow**:
1. Include hook target + payload in the burn tx calldata
2. After destination-chain mint, the EntryPoint contract automatically calls the hook target (passing the minted USDC + payload)
3. The hook contract can complete swap / deposit / loan in the same tx

**Attestation Service**:
- Off-chain Circle nodes monitor burn events across all supported chains
- The signature includes source chain id + destination chain id + amount + recipient + nonce
- The MintBurnTokenMessenger contract on the destination chain mints after verifying the signature

**Integration with §501 denylist**: The Attestation Service checks Circle's denylist before signing —— if the recipient or source address is on the list, it refuses the signature; USDC has already been burned on the source chain but cannot be minted on the destination chain. **This is a protocol-layer compliance enforcement channel** (contrast with the compliance-node design in [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]).

## Origin & evolution

During the V2  development period, Circle's key product decision was whether to fully decentralize Fast Transfer —— it ultimately chose a centralized collateral model. The reason was that decentralized schemes (challenger watchtower, stake-based bonded validator) would increase user cost and latency, and because Circle's own compliance role is already the trust anchor for USDC, adding another decentralized layer would have been redundant.

The design inspiration for Hooks comes partly from the UserOp model in [[systems/erc-4337-overview|ERC-4337]] —— packaging "chain A operation + chain B operation" with atomic semantics to reduce UX complexity.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[agent-economy/ap2-technical-spec|AP2(USDC settlement adapter)]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 docs(developers.circle.com)
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

---
source: systems/cctp-v2-overview
source_hash: a8f29404429d4075
lang: en
status: machine
fidelity: ok
title: "CCTP V2  overview · Circle USDC cross-chain burn-and-mint"
translated_at: 2026-06-01T04:15:40.136Z
---

# CCTP V2  overview · Circle USDC cross-chain burn-and-mint

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-technical-spec|CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2024-11  V2  launched (V1  starts in 2023-01 ) ^[extracted]
- V2  adds Fast Transfer (< 1  second latency vs V1 's ~13  seconds) ^[extracted]
- V2  adds Hooks (programmable callbacks, automatic calls to destination-chain contracts) ^[extracted]
- Supports 18+ chains: Ethereum + Solana + Base + Arbitrum + Avalanche + Optimism + Noble + Polygon + Arc, etc. ^[extracted]
- Planned full replacement within 2026  with V1  (probability 80%) ^[extracted]

## Mechanism / How it works

CCTP turns USDC into "1  USDC, multiple chains" — USDC circulating on every public chain is a native asset minted directly by Circle, and no wrapped version exists (in contrast to the multibridge topology in [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]). 3 -step flow:

```
Source chain (USDC burn)
    ↓
Circle Attestation Service
  (off-chain signer verification + signature)
    ↓
Destination chain (USDC mint to receiver)
```

Main differences between V2  and V1 :

1. **Fast Transfer** (sub-second level): V1  waits for source-chain finality (~13  seconds); V2  compresses latency to < 1  seconds through Circle's risk backing
2. **Hooks**: automatically trigger destination-chain contract calls after cross-chain arrival, supporting cross-chain swaps / cross-chain loans in 1-tx
3. **More chain support**: after V2  launch, expansion within 1  years to 18+ chains

**Cost of centralization**: Circle Attestation Service is a single point of trusted failure — Circle can refuse signatures (there are examples involving Tornado Cash-related addresses). This is the route through which the GENIUS §501  Denylist is enforced at the protocol layer (in contrast to the same Circle node on [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ deposit/withdrawal 経路]]).

## Origin & evolution

V1  launched in 2023-01 , initially supporting Ethereum + Avalanche and gradually expanding to Solana and others. The 2024-11  V2  upgrade brought Fast Transfer and Hooks. Since V2 , Circle has clearly accelerated new chain connections — the Arc chain (Circle's own chain) at 2026  launch natively integrates V2 , with USDC as gas on the Arc chain.

Historical background of de-wrapping: before V1 , USDC on each chain was a derivative generated through lock-and-mint bridges (LayerZero / Wormhole / Stargate), with bridge-hacking risk (historical lessons from Wormhole $325M, Ronin $625M, and Nomad $190M). CCTP V1  was an important move for Circle to regain cross-chain sovereignty over USDC.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-technical-spec|CCTP V2 Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/canton-overview|Canton(プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

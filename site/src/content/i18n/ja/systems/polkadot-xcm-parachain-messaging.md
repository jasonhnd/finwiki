---
source: systems/polkadot-xcm-parachain-messaging
source_hash: d14dff3d9273d1e1
lang: ja
status: machine
fidelity: ok
title: "Polkadot XCM · parachain messaging v3-v4"
translated_at: 2026-06-03T01:06:46.363Z
---
# Polkadot XCM · parachain messaging v3-v4



## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。shared-security multi-chain interop における最も近いピアとして [[systems/ibc-cosmos-cross-chain|IBC · Cosmos]]、より広い相互運用性の文脈では [[systems/cross-chain-four-poles-overview|cross-chain four poles]]、side-by-side では [[systems/cross-chain-five-pole-comparison-matrix|five-pole comparison matrix]] と照らして読む。

## 重要ポイント

- **XCM (Cross-Consensus Messaging)** は、parachain と relay chain の間で通信するための Polkadot の message format である
- **Shared-security model**: Polkadot relay chain がすべての parachain state transition を検証するため、parachain ごとの consensus は不要
- **XCM v3**(2023)は bridge / cross-ecosystem messaging を導入し、**XCM v4**(2024)は asset / location addressing と pallet primitive を洗練させた
- **Asset Hub**(旧 Statemine / Statemint)は、USDT / USDC を含む canonical asset issuance のための system parachain である
- **JAM (Join-Accumulate Machine)** は 2024 に発表された、relay-chain-as-validator model を超える長期進化である。機関 / settlement pilot も 2025-2026

に出てきている

## Shared-security architecture

```
                  Polkadot relay chain
                  (validator set, finality)
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   Parachain A      Parachain B       Asset Hub
   (custom logic)   (DeFi / NFT)     (system parachain)
        │                 │                 │
        └──── XCM ────────┼──── XCM ────────┘
                          │
                  HRMP / VMP / DMP
                  (transport channels)
```

- **Relay chain** は validator set を運用し、**すべての** parachain block を finality まで確定する
- **Parachain** は domain-specific logic を実行するが、relay-chain consensus を継承する
- **Asset Hub** は canonical native-asset issuance のための Polkadot 管理 system parachain である(slot auction 不要)
- **XCM** は message format であり、HRMP / VMP / DMP は transport channel である(parachain-to-parachain、parachain-to-relay、relay-to-parachain)

[[systems/ibc-cosmos-cross-chain|IBC / Cosmos]] モデルとの比較:

| 観点 | Polkadot XCM | IBC / Cosmos |
|---|---|---|
| Consensus | 共有型(relay chain が parachain を finalize) | 主権型(各 Cosmos chain が独自 validator set を持つ) |
| Cross-chain trust | Relay chain から継承 | Source chain の light-client 検証 |
| Onboarding | Parachain slot(lease / auction) | Cosmos SDK を立ち上げて IBC 接続 |
| Sovereignty | Parachain は security を共有するが主権は限定的 | Chain ごとに完全主権 |
| Asset issuance | Asset Hub 経由で canonical | Noble または per-chain で canonical |

トレードオフは明確である。Polkadot は **より強い一様な security** を提供するが、**sovereignty は小さい**。Cosmos / IBC は **最大限の sovereignty** を提供するが、各 chain が自らの security を引き受ける([[systems/eigenlayer-overview|EigenLayer]] は Ethereum 側でこの差を埋めようとしている)。

## XCM v3  → v4  の発展

| Version | Year | 主な追加点 |
|---|---|---|
| XCM v1  | 2021  | 初期の cross-parachain transfer |
| XCM v2  | 2022  | Reserve-based asset transfer、より堅牢な error handling |
| XCM v3  | 2023  | Cross-ecosystem bridging(Polkadot ↔ Kusama、Snowbridge 経由の Polkadot ↔ Ethereum)、exchange query、version negotiation |
| XCM v4  | 2024  | `MultiLocation` → `Location` typing の洗練、asset handling 改善、pallet integration 改善 |

## Asset Hub と機関 pilot

Asset Hub は Polkadot の **canonical asset registry** として機能する。

- **USDT and USDC** は Asset Hub 上でネイティブ発行される(Circle / Tether integration 2023-2024 経由)
- **Stablecoin** は XCM teleport / reserve transfer 経由で他の parachain に伝播する
- Parachain-issued token より **手数料が低い**(slot auction overhead がない)

Polkadot の settlement / shared-security model をめぐって、機関 pilot(2024-2026)が出てきている。

- Tokenization platform が permissioned RWA chain 用に parachain slot を探索
- Centrifuge(RWA-focused parachain)は tokenized credit 向け
- Hyperbridge は trust-minimized parachain ↔ EVM bridging 向け

並行する institutional-DLT track については [[systems/canton-overview|Canton]] と [[systems/hyperledger-besu-overview|Besu]]、マクロ比較については [[systems/institutional-dlt-adoption-comparison-2026|institutional DLT adoption]] と比較する。

## JAM と長期ロードマップ

**JAM (Join-Accumulate Machine)** は Gavin Wood が 2024 に発表した、Polkadot の計画中の進化である。

- relay-chain-as-validator model を **distributed compute fabric** へ一般化する
- Parachain は JAM 上で動く **service** になり、硬直的な slot auction model が弱まる
- Ethereum + L2  stack および Cosmos / IBC mesh に対する長期競争力を狙う
- 2025-2026 時点では early implementation であり、production deployment はまだない

## 関連項目

- [[systems/INDEX]]
- [[systems/ibc-cosmos-cross-chain]]
- [[systems/cross-chain-four-poles-overview]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/canton-overview]]
- [[systems/hyperledger-besu-overview]]
- [[systems/institutional-dlt-adoption-comparison-2026]]
- [[systems/eigenlayer-overview]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/cctp-v2-overview]]
- [[INDEX|FinWiki index]]

## 出典

- wiki.polkadot.network for XCM, parachains, and shared-security documentation.
- github.com/paritytech/xcm-format for XCM v3  / v4  specification.
- github.com/paritytech/polkadot-sdk for relay chain + parachain reference implementation.
- polkadot.network for ecosystem updates and JAM announcements.

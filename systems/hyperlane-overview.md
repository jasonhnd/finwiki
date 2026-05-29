---
title: Hyperlane 概観 · Permissionless Cross-chain Interoperability
aliases: [hyperlane-overview, permissionless-bridge, modular-interop]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, interop, hyperlane, modular]
sources:
  - https://docs.hyperlane.xyz/
status: candidate
---

# Hyperlane 概観 · Permissionless Cross-chain Interoperability

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Permissionless 展開 · 誰でも fork + deploy 可能 ^[extracted]
- 50+ チェーンが接続済み ^[extracted]
- コアイノベーション:Modular ISM(開発者が検証方式を自選) ^[extracted]
- LayerZero / CCIP との間で「gated rollout vs permissionless」のルート分岐を形成 ^[extracted]
- EigenLayer restaking ISM を最初にサポートしたグループの一つ ^[extracted]

## Mechanism / How it works

クロスチェーンメッセージ(arbitrary message passing、AMP)は 2024-2026 年のチェーン間相互運用における主流の抽象化である。三大プレイヤーの位置づけの差異:

| プロトコル | 展開モデル | 検証方式 |
|---|---|---|
| **LayerZero** | Gated(チームが新規チェーンを評価) | DVN(Decentralized Verifier Network)· アプリ側で選択可 |
| **Chainlink CCIP** | Heavily gated(Chainlink DON が展開) | OCR 委員会 + RMN リスク管理 |
| **Hyperlane** | **Permissionless**(誰でも fork + deploy) | **Modular ISM** · 完全オープン |

**Hyperlane の賭け**:ロングテールチェーン(特に app-chain)は LayerZero/CCIP チームの承認を待つことができず · セルフサーブの接続ソリューションが必要となる。これは Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit 等の「チェーンをワンクリックで立ち上げる」トレンドと整合しており —— bridge も permissionless 化が必要となる。

**主要コンポーネント**:
- **Mailbox**:各チェーンに展開される統一の送受信契約 · クロスチェーンメッセージ形式を標準化
- **Interchain Security Modules(ISM)**:プラガブルな検証レイヤー · 開発者が自選
- **Relayer**:permissionless · 誰でも運用可能(アプリ自社運営の relayer を含む)
- **Validators**:source chain を監視 · message に署名 · destination に提出

**Warp Routes**:Hyperlane の token bridge 抽象化 · Native/Collateral/Synthetic の 3 種類の wrap モードをサポート · 開発者がワンクリックで ERC-20 のクロスチェーン展開が可能。

## Origin & evolution

Hyperlane は Asa Oines、Jon Kol ら(元 Celo チームメンバー)によって 2021 年に設立され · 当初は Abacus という名前で · 2022 年に Hyperlane に改名した。コアとなる賭けは「ロングテールチェーンには permissionless bridge が必要」であり、これは LayerZero / CCIP の中央集権的展開モデルとのルート分岐を形成する。

2023-2025 年にかけて Celestia / dYdX v4 / Injective / Sei / Berachain 等のロングテール / app-chain で順次採用され · 非 EVM(Cosmos / Solana / Move)が EVM エコシステムに接続するための事実上の標準となった([[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]] を参照)。2024 年に EigenLayer restaking 統合を追加した後 · 暗号経済セキュリティは Ethereum L1 から継承された。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## Sources

- Hyperlane docs(docs.hyperlane.xyz)
- Hyperlane docs — https://docs.hyperlane.xyz/

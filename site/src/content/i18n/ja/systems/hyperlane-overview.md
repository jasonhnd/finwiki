---
source: systems/hyperlane-overview
source_hash: 50a7162db02312b7
lang: ja
status: machine
fidelity: ok
title: "Hyperlane 概観 · パーミッションレスなクロスチェーン相互運用性"
translated_at: 2026-06-03T01:06:46.353Z
---
# Hyperlane 概観 · パーミッションレスなクロスチェーン相互運用性

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照の文脈は [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] と照合し、より広いシステム上・規制上の境界は [[fintech/INDEX|fintech index]] を参照する。

## 主要事項

- パーミッションレスに展開でき、誰でも fork + deploy 可能 ^[extracted]
- 50+ チェーンが接続済み ^[extracted]
- コアの革新は Modular ISM で、開発者が検証方式を自分で選べる ^[extracted]
- LayerZero / CCIP との間で「ゲート型展開か、パーミッションレスか」という経路分岐を形成 ^[extracted]
- EigenLayer restaking ISM を最初期にサポートしたグループの一つ ^[extracted]

## 仕組み

クロスチェーンメッセージング（arbitrary message passing、AMP）は、2024-2026 年のチェーン間相互運用における主流の抽象化である。主要プロトコルの位置づけの差異は次のとおり。

| プロトコル | 展開モデル | 検証方式 |
|---|---|---|
| **LayerZero** | ゲート型(チームが新規チェーンを評価) | DVN(Decentralized Verifier Network) · アプリ側で選択可 |
| **Chainlink CCIP** | 強いゲート型(Chainlink DON が展開) | OCR 委員会 + RMN リスク管理 |
| **Hyperlane** | **パーミッションレス**(誰でも fork + deploy) | **Modular ISM** · 完全オープン |

**Hyperlane の賭け**:ロングテールチェーン、特に app-chain は LayerZero/CCIP チームの承認を待てないため、セルフサーブ型の接続ソリューションを必要とする。これは Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit 等の「チェーンをワンクリックで立ち上げる」トレンドと整合しており、ブリッジもパーミッションレス化する必要がある。

**主要コンポーネント**:
- **Mailbox**:各チェーンに展開される統一の送受信コントラクト。クロスチェーンメッセージ形式を標準化する。
- **Interchain Security Modules(ISM)**:プラグイン可能な検証レイヤー。開発者が自分で選ぶ。
- **Relayer**:パーミッションレスに運用可能。アプリ自社運営の relayer も含め、誰でも運用できる。
- **Validators**:source chain を監視し、message に署名して destination に提出する。

**Warp Routes**:Hyperlane の token bridge 抽象化。Native / Collateral / Synthetic の 3 種類の wrap モードをサポートし、開発者はワンクリックで ERC-20 のクロスチェーン展開を行える。

## 起源と展開

Hyperlane は Asa Oines、Jon Kol ら(元 Celo チームメンバー)によって 2021 年に設立され、当初は Abacus という名前だったが、2022 年に Hyperlane へ改名した。コアとなる仮説は「ロングテールチェーンにはパーミッションレスなブリッジが必要」であり、LayerZero / CCIP の中央集権的な展開モデルとの経路分岐を形成する。

2023-2025 年にかけて Celestia / dYdX v4 / Injective / Sei / Berachain 等のロングテール / app-chain で順次採用され、非 EVM(Cosmos / Solana / Move)が EVM エコシステムに接続するための事実上の標準となった([[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]] を参照)。2024 年に EigenLayer restaking 統合を追加した後、暗号経済セキュリティは Ethereum L1 から継承される形になった。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## 出典

- Hyperlane docs(docs.hyperlane.xyz)
- Hyperlane docs — https://docs.hyperlane.xyz/

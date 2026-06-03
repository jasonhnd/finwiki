---
source: systems/chain-abstraction-pattern-three-solutions
source_hash: caebf3b7b2704e95
lang: ja
status: machine
fidelity: ok
title: "チェーン抽象の 3 大主流方式"
translated_at: 2026-06-03T00:53:08.348Z
---
# チェーン抽象の 3 大主流方式

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] の下に位置づけられる。同業 / 対比の文脈は [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]]、より広いシステム / 規制上の境界は [[fintech/INDEX|fintech index]] と照らして読む。

## 主要事実

- Polygon AggLayer は 2024.02 v1 ローンチ、2025 v2 で非 Polygon チェーン接続をサポート ^[extracted]
- AggLayer の主要パートナー:OKX X Layer / Astar zkEVM / Immutable 等 ^[extracted]
- NEAR Chain Abstraction は 2024.04 メインネット、2025 で 12+ chain をサポート ^[extracted]
- NEAR 主要技術:Chain Signatures(MPC で他チェーンの秘密鍵を制御)+ NEAR Intents ^[extracted]
- EigenLayer は 2024.04 メインネット、2025 末 TVL > $15B ^[extracted]
- EigenDA / AltLayer / Hyperliquid は EigenLayer モデルの代表事例 ^[extracted]
- 3 方式の技術経路は全く異なり、共存の可能性 ^[extracted]

## 仕組み / 作動方法

**1. Polygon AggLayer · 共有流動性 + 状態**:複数チェーンが ZK 証明 + 統一ブリッジ + 統一流動性プールを共有。クロスチェーン資産は wrap 不要で直接相互運用可能。Polygon は「単一チェーン」から「チェーン抽象インフラ」へ転換。**抽象層**:流動性 + 状態。**主要パートナー**:OKX X Layer / Astar zkEVM / Immutable 等が接続。

**2. NEAR Chain Abstraction · 意図駆動 + マルチチェーンアカウント**:ユーザーは単一の NEAR アカウントで、MPC(Chain Signatures)経由で ETH / BTC / SOL 等の他チェーン秘密鍵を制御。意図(intent)入力 → solver ネットワークが入札で完了 → ユーザーは結果だけを見る。**抽象層**:アカウント + 操作意図。NEAR は L1 から「アカウント抽象 + クロスチェーンルーティング層」へ転換。

**3. EigenLayer / Hyperliquid モデル · 共有セキュリティ**:複数のアプリケーション / チェーンが ETH validator 集合を共有(restaking)。新規チェーンは validator 経済の bootstrap が不要で、直接 ETH セキュリティをリース([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)。**抽象層**:セキュリティ / validator 集合。代表例 EigenDA / AltLayer / Hyperliquid(自前 L1 + 借用セキュリティ)。**UX 層抽象ではなくセキュリティ層抽象** —— ユーザーは「このチェーンに validator が何人いるか」を意識しない。

3 方式比較:

| 方式 | 抽象層 | 主導者 | UX への影響 |
|---|---|---|---|
| AggLayer | 流動性 + 状態 | Polygon | クロスチェーン資産を即時使用 |
| NEAR | アカウント + 意図 | NEAR | 単一アカウントで複数チェーン制御 |
| EigenLayer | セキュリティ / validator | EigenLabs | チェーン開発者がセキュリティを借用 |

## 起源と進化

2022-2023 クロスチェーンブリッジ時代(Wormhole / LayerZero / Axelar)は「資産がクロスチェーン可能か」を解決したが UX は解決せず。2024.02 AggLayer ローンチ → Polygon が「流動性抽象」のポジションを先取り。2024.04 NEAR が Chain Signatures(MPC クロスチェーン鍵)+ Intents を公開 → NEAR が「アカウント抽象」へ転換。2024.04 EigenLayer メインネット → 「セキュリティ抽象」が restaking で実現。2025 3 方式が各々スケーラビリティを検証:AggLayer は 5+ 非 Polygon チェーンに接続、NEAR は 12+ チェーンを制御、EigenLayer TVL > $15B。2026+ 3 方式が融合するか、一方が勝つかは未確定。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
<!-- /wiki-links:managed -->

## 出典

- Polygon AggLayer 公式ドキュメント（流動性 + 状態抽象）— https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction 公式ドキュメント（アカウント + 意図抽象）— https://docs.near.org/chain-abstraction/what-is
- NEAR MPC ノード実装（Chain Signatures の閾値署名）— https://github.com/near/mpc
- EigenLayer 公式ドキュメント（セキュリティ / validator 集合抽象）— https://docs.eigenlayer.xyz/

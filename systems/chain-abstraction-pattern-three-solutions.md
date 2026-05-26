---
title: チェーン抽象の 3 大主流方式 · AggLayer / NEAR / EigenLayer
aliases: [chain-abstraction-pattern-three-solutions, AggLayer NEAR EigenLayer comparison, チェーン抽象 3 方式]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, chain-abstraction, polygon, near, eigenlayer, agglayer, restaking, intent]
sources: []
status: candidate
---

# チェーン抽象の 3 大主流方式


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Polygon AggLayer は 2024.02 v1 ローンチ、2025 v2 で非 Polygon チェーン接続をサポート ^[extracted]
- AggLayer の主要パートナー:OKX X Layer / Astar zkEVM / Immutable 等 ^[extracted]
- NEAR Chain Abstraction は 2024.04 メインネット、2025 で 12+ chain をサポート ^[extracted]
- NEAR 主要技術:Chain Signatures(MPC で他チェーンの秘密鍵を制御)+ NEAR Intents ^[extracted]
- EigenLayer は 2024.04 メインネット、2025 末 TVL > $15B ^[extracted]
- EigenDA / AltLayer / Hyperliquid は EigenLayer モデルの代表事例 ^[extracted]
- 3 方式の技術経路は全く異なり、共存の可能性 ^[extracted]

## Mechanism / How it works

**1. Polygon AggLayer · 共有流動性 + 状態**:複数チェーンが ZK 証明 + 統一ブリッジ + 統一流動性プールを共有。クロスチェーン資産は wrap 不要で直接相互運用可能。Polygon は「単一チェーン」から「チェーン抽象インフラ」へ転換。**抽象層**:流動性 + 状態。**主要パートナー**:OKX X Layer / Astar zkEVM / Immutable 等が接続。

**2. NEAR Chain Abstraction · 意図駆動 + マルチチェーンアカウント**:ユーザーは単一の NEAR アカウントで、MPC(Chain Signatures)経由で ETH / BTC / SOL 等の他チェーン秘密鍵を制御。意図(intent)入力 → solver ネットワークが入札で完了 → ユーザーは結果だけを見る。**抽象層**:アカウント + 操作意図。NEAR は L1 から「アカウント抽象 + クロスチェーンルーティング層」へ転換。

**3. EigenLayer / Hyperliquid モデル · 共有セキュリティ**:複数のアプリケーション / チェーンが ETH validator 集合を共有(restaking)。新規チェーンは validator 経済の bootstrap が不要で、直接 ETH セキュリティをリース([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)。**抽象層**:セキュリティ / validator 集合。代表例 EigenDA / AltLayer / Hyperliquid(自前 L1 + 借用セキュリティ)。**UX 層抽象ではなくセキュリティ層抽象** —— ユーザーは「このチェーンに validator が何人いるか」を意識しない。

3 方式比較:

| 方式 | 抽象層 | 主導者 | UX への影響 |
|---|---|---|---|
| AggLayer | 流動性 + 状態 | Polygon | クロスチェーン資産を即時使用 |
| NEAR | アカウント + 意図 | NEAR | 単一アカウントで複数チェーン制御 |
| EigenLayer | セキュリティ / validator | EigenLabs | チェーン開発者がセキュリティを借用 |

## Origin & evolution

2022-2023 クロスチェーンブリッジ時代(Wormhole / LayerZero / Axelar)は「資産がクロスチェーン可能か」を解決したが UX は解決せず。2024.02 AggLayer ローンチ → Polygon が「流動性抽象」のポジションを先取り。2024.04 NEAR が Chain Signatures(MPC クロスチェーン鍵)+ Intents を公開 → NEAR が「アカウント抽象」へ転換。2024.04 EigenLayer メインネット → 「セキュリティ抽象」が restaking で実現。2025 3 方式が各々スケーラビリティを検証:AggLayer は 5+ 非 Polygon チェーンに接続、NEAR は 12+ チェーンを制御、EigenLayer TVL > $15B。2026+ 3 方式が融合するか、一方が勝つかは未確定。

## Counterpoints

- 3 方式が抽象する次元が異なるため、厳密には直接競争ではなく、異なる問題への解決策である
- AggLayer は ZK 証明性能の継続的向上に依存しており、ZK の進捗が鈍化すれば AggLayer の UX 優位は弱まる
- NEAR MPC 経路には鍵カストディリスク(MPC ノード結託の理論的可能性)があり、長期セキュリティは十分検証されていない
- EigenLayer restaking は新たな slashing リスクの重畳を導入、機関が EigenLayer でセキュリティを借用する勇気を本当に持つかは疑問([[fintech/jpmorgan-jpmd-coin|JPMD]] が restaking ではなく Canton を選択した対照を参照)

## Open questions

- 3 方式は融合(AggLayer が NEAR Intents を統合するなど)するのか、それとも分裂(3 経路が独立に成熟)するのか?
- どの抽象層が機関チェーン(Tempo / Arc)の第一選択となるか?
- 規制は MPC クロスチェーン鍵制御(NEAR モデル)にどう対応するか?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] の各方式の信頼前提スペクトラムと対照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
<!-- /wiki-links:managed -->

## Sources


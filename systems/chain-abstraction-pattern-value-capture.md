---
title: クロスチェーンブリッジコモディティ化とチェーン抽象層への価値上方シフト
aliases: [chain-abstraction-pattern-value-capture, cross-chain bridge commoditization, クロスチェーンブリッジコモディティ化]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, chain-abstraction, cross-chain-bridge, commoditization, value-capture]
sources:
  - https://wormhole.com/docs/
  - https://docs.layerzero.network/v2
  - https://docs.hyperlane.xyz/
  - https://github.com/across-protocol/contracts
  - https://docs.near.org/chain-abstraction/what-is
  - https://github.com/cowprotocol/contracts
status: candidate
---

# クロスチェーンブリッジコモディティ化とチェーン抽象層への価値上方シフト

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観 · ユーザーが基盤チェーンを意識しない次世代インフラ]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2020-2023 クロスチェーンブリッジ利益レンジ 0.1-0.5% 手数料 ^[extracted]
- 2024+ ブリッジ技術成熟・利益圧縮、コモディティ化 ^[extracted]

## Mechanism / How it works

**価値階層の進化**:

| 階層 | 2020-2023 価値 | 2024-2026 価値 |
|---|---|---|
| クロスチェーンブリッジ | 高(0.1-0.5% 手数料を取る) | 低(コモディティ化) |
| チェーン抽象 | 存在せず | 高(UX + 流動性ルーティング) |
| 意図層 | 存在せず | 立ち上がり中(solver マーケット) |

**中核メカニズム**:技術のコモディティ化はインフラ層の不可避な運命 —— あらゆる「標準化プロトコル」は長期的に複数チームによって実装され、価格はゼロに収斂する(HTTP プロトコルの類比)。しかし「ユーザー接点」と「トラフィック制御」は希少資源:ユーザーが使うウォレット / どの app 内で取引するか / solver ネットワークがどう最適経路を選ぶか —— これらは全て take rate が付着可能な接点である。

**意図 solver マーケット**は新フロンティア:ユーザーが「USDC から 1 ETH に交換したい」と表現 → 複数 solver が入札で経路(単一チェーン / クロスチェーン / マルチホップ)を完了 → ユーザーは落札した solver に手数料を支払う。これは「クロスチェーンブリッジの take rate」を「solver マーケット手数料 + ルーティング take rate」へ進化させるもの。NEAR Intents / CoW Protocol が初期事例。

## Origin & evolution

2017-2019 Atomic Swap / WBTC 等の初期クロスチェーン方式、標準化プロトコルなし。2020-2021 Wormhole / Multichain / Axelar 等の汎用クロスチェーンブリッジが台頭 → 高 fee + 高 TVL の時代。2022 Wormhole が攻撃を受け $325M の損失 → クロスチェーンブリッジリスクが顕在化。2023 LayerZero / Hyperlane / Across 等の次世代クロスチェーンアーキテクチャが台頭 → 技術経路は多様化したが fee は圧縮。2024+ クロスチェーンブリッジ利益が圧縮、価値はチェーン抽象層に上方シフト。AggLayer / NEAR Intents / Across が「チェーン抽象 + solver マーケット」へ転換。2025-2026 クロスチェーンブリッジサービス事業者が次々に転換 —— LayerZero は今や「ブリッジ」ではなく「omnichain messaging infrastructure」と自称することを好む([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] と [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] の最新スライス参照)。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent 決済プロトコルコモディティ化]]
<!-- /wiki-links:managed -->

## Sources

- Wormhole 公式ドキュメント（汎用クロスチェーンメッセージング）— https://wormhole.com/docs/
- LayerZero v2 公式ドキュメント（omnichain messaging への転換）— https://docs.layerzero.network/v2
- Hyperlane 公式ドキュメント（permissionless interoperability）— https://docs.hyperlane.xyz/
- Across Protocol スマートコントラクト（intent ベース次世代ブリッジ）— https://github.com/across-protocol/contracts
- NEAR Intents 公式ドキュメント（意図 solver マーケット）— https://docs.near.org/chain-abstraction/what-is
- CoW Protocol スマートコントラクト（solver 入札マーケットの初期事例）— https://github.com/cowprotocol/contracts

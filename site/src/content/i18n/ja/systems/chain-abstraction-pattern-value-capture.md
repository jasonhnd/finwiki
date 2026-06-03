---
source: systems/chain-abstraction-pattern-value-capture
source_hash: 6cc2bbf9ddefe017
lang: ja
status: machine
fidelity: ok
title: "クロスチェーンブリッジのコモディティ化とチェーン抽象化レイヤーへの価値上方シフト"
translated_at: 2026-06-03T00:53:08.358Z
---
# クロスチェーンブリッジのコモディティ化とチェーン抽象化レイヤーへの価値上方シフト

## ウィキ上の位置づけ

この項目は[[systems/INDEX|systems index]]の下に置かれる。類似 / 対照の文脈は[[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観 · ユーザーが基盤チェーンを意識しない次世代インフラ]]、より広いシステム / 規制上の境界は[[fintech/INDEX|fintech index]]と照らして読む。

## 主要事実

- 2020-2023 クロスチェーンブリッジ利益レンジ 0.1-0.5% 手数料 ^[extracted]
- 2024+ ブリッジ技術成熟・利益圧縮、コモディティ化 ^[extracted]

## メカニズム / 仕組み

**価値階層の進化**:

| 階層 | 2020-2023 価値 | 2024-2026 価値 |
|---|---|---|
| クロスチェーンブリッジ | 高(0.1-0.5% 手数料を取る) | 低(コモディティ化) |
| チェーン抽象化 | 存在せず | 高(UX + 流動性ルーティング) |
| インテント層 | 存在せず | 立ち上がり中(solver マーケット) |

**中核メカニズム**: 技術のコモディティ化はインフラ層の不可避の運命である。あらゆる「標準化プロトコル」は長期的には複数チームによって実装され、価格はゼロへ収斂する(HTTP プロトコルの類比)。しかし「ユーザー接点」と「トラフィック制御」は希少資源である。ユーザーが使うウォレット、どの app 内で取引するか、solver ネットワークが最適経路をどう選ぶかは、いずれも take rate を付着させ得る接点である。

**インテント solver マーケット**は新しいフロンティアである。ユーザーが「USDC から1 ETH に交換したい」と表現する → 複数の solver が経路(単一チェーン / クロスチェーン / マルチホップ)の完了を入札する → ユーザーは落札した solver に手数料を支払う。これは「クロスチェーンブリッジの take rate」を「solver マーケット手数料 + ルーティング take rate」へ進化させるもの。NEAR Intents / CoW Protocol が初期事例である。

## 起源と進化

2017-2019 Atomic Swap / WBTC などの初期クロスチェーン方式があり、標準化プロトコルはまだなかった。2020-2021 Wormhole / Multichain / Axelar などの汎用クロスチェーンブリッジが台頭し、高 fee + 高 TVL の時代になった。2022 Wormhole が攻撃を受け $325M の損失が発生し、クロスチェーンブリッジリスクが顕在化した。2023 LayerZero / Hyperlane / Across などの次世代クロスチェーンアーキテクチャが台頭し、技術経路は多様化したが fee は圧縮された。2024+ クロスチェーンブリッジ利益は圧縮され、価値はチェーン抽象化レイヤーへ上方シフトした。AggLayer / NEAR Intents / Across は「チェーン抽象化 + solver マーケット」へ転換している。2025-2026 クロスチェーンブリッジサービス事業者は次々と転換しており、LayerZero は今では自らを「ブリッジ」ではなく「omnichain messaging infrastructure」と呼ぶことを好む([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]]と[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]]の最新スライス参照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent 決済プロトコルコモディティ化]]
<!-- /wiki-links:managed -->

## 出典

- Wormhole 公式ドキュメント（汎用クロスチェーンメッセージング）— https://wormhole.com/docs/
- LayerZero v2 公式ドキュメント（omnichain messaging への転換）— https://docs.layerzero.network/v2
- Hyperlane 公式ドキュメント（permissionless interoperability）— https://docs.hyperlane.xyz/
- Across Protocol スマートコントラクト（intent ベース次世代ブリッジ）— https://github.com/across-protocol/contracts
- NEAR Intents 公式ドキュメント（意図 solver マーケット）— https://docs.near.org/chain-abstraction/what-is
- CoW Protocol スマートコントラクト（solver 入札マーケットの初期事例）— https://github.com/cowprotocol/contracts

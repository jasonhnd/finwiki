---
title: "[opinion] Polygon AggLayer アーキテクチャと 2024-2026 rollout · CDK + 統一ブリッジ + ZK 集約"
source_entry: systems/polygon-agglayer-architecture-rollout.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Polygon AggLayer アーキテクチャと 2024-2026 rollout · CDK + 統一ブリッジ + ZK 集約

> 出典エントリー: `systems/polygon-agglayer-architecture-rollout.md`

## Counterpoints

- **Partner chain 流出**:2025-2026 年の CDK 流出チェーン数は新規より多く、OP Stack の逆方向拡張と鮮明な対比を形成
- **AggLayer 実接続度**:v0.2 / v0.3 の実際のメインネットアクティブ AggLayer chain 数(L2Beat で公開追跡可能)は Polygon Labs ロードマップ初期予想を大きく下回る
- **Polygon zkEVM の実 traction 不足**:Polygon prover 技術ショーケースとして、zkEVM Beta は 2026 年までの累計 TVL < $100M、同期間の zkSync Era / Scroll / Linea 等と比べ明確に劣後
- **POL インフレモデル**:L2 token 全体の過剰供給を背景とした 1% / 年の emission、価格パフォーマンスは継続的に圧迫
- **Polygon PoS validator 集中度**:歴史的に ~100 個の validator、上位 10 が staked POL の > 50% を保有、「PoS チェーン」の分散化ナラティブと隔たりあり
- **戦略ナラティブの更新が速すぎる**:Polygon Labs は 4 年内に「Plasma」→「PoS sidechain」→「Polygon 2.0」→「AggLayer」→「AggLayer + CDK」と変遷、エコシステム提携先と token holder への信号対雑音比は低い

## Open questions

- AggLayer v0.3 → v1.0 でクロスチェーンメッセージパッシングが導入されるか?([[systems/chain-abstraction-pattern-three-solutions|chain abstraction 3 つのソリューション]] と対照)
- Polygon PoS は 2027 年までに sunset するか、それとも AggLayer 内の通常 ZK rollup に完全に降格するか?
- POL restaking モデルと [[systems/eigenlayer-overview|EigenLayer]] モデルは、機関チェーンの共有セキュリティの主流選択肢としてどちらが勝つか?
- Polygon は [[agent-economy/INDEX|agent economy]] シナリオで差別化された位置を見つけられるか?[[systems/erc-4337-embedded-wallet-adoption|ERC-4337 ウォレット採用]] と [[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]] と対照
- Polygon は Solana / Base / Arbitrum との stablecoin payment(Visa / Stripe 等)市場シェアでどう分化するか?
- AggLayer は RWA がクロス L2 で流動する事実上の標準になるか、それとも機関顧客シナリオで CCIP / LayerZero に圧迫されるか?

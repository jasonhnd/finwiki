---
title: "[opinion] Hyperlane Interchain Security Modules(ISM)· プラガブルな検証レイヤー"
source_entry: systems/hyperlane-ism-modular-security.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Hyperlane Interchain Security Modules(ISM)· プラガブルな検証レイヤー

> 出典エントリー: `systems/hyperlane-ism-modular-security.md`

## Counterpoints

**ISM 選択の負担**:ほとんどの dApp 開発者は security の専門家ではなく · 5 種類以上の ISM から選ばせること自体が設計リスクである。LayerZero の「チームが DVN を構成する」モデルは一般開発者にとってより親しみやすい。

**Aggregation の複雑度**:複数 ISM の組み合わせは理論上はセキュリティを高めるが · gas コストと遅延が累積し · 実際の採用率は高くない。

**EigenLayerISM の依存チェーン**:クロスチェーンセキュリティを ETH restaking から継承するということは · Hyperlane セキュリティ ⊂ EigenLayer セキュリティ ⊂ Ethereum L1 セキュリティということを意味する —— チェーンが長く · どこか 1 か所で問題が発生すると伝播する([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] の暗号ネイティブ側におけるシステミックリスク伝播経路と対照)。

## Open questions

- 実際の展開において各 ISM タイプの採用比率は?
- EigenLayerISM の slashing 有効化後における実際の slash イベントは?
- ISM 間のポータビリティ(multisig から EigenLayerISM へのアップグレード)はスムーズか?
- ISM 設計の次世代進化方向(ZK ISM はいつ実現するか)?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] における各方式の信頼前提の同方向進化と対照)

---
title: DAG-BFT vs Chain-BFT アーキテクチャの本質的分岐（mempool 抽象の争点）
aliases: [DAG BFT, chain BFT, mempool abstraction, Bullshark Narwhal]
domain: systems
kind: framework
topic: dag-bft-vs-chain-bft-architecture
created: 2026-05-13
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-13
confidence: certain
tags: [systems, blockchain, BFT, consensus, mempool, architecture]
status: candidate
sources:
  - https://arxiv.org/abs/1803.05069
  - https://arxiv.org/abs/2105.11827
  - https://arxiv.org/abs/2201.05677
  - https://arxiv.org/abs/2310.14821
  - https://github.com/informalsystems/malachite
  - https://tempo.xyz/
---

# DAG-BFT vs Chain-BFT アーキテクチャの本質的分岐


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it with [[fintech/INDEX|fintech index]] for adjacent context and [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode forensic — 3 層 verify 技術]] for the broader system boundary.

> [!info] TL;DR
> 現代 BFT コンセンサスアルゴリズムは 2 大流派に分かれる:**Chain-BFT**（HotStuff / Tendermint / Threshold Simplex / Malachite）は block をチェーン化、**DAG-BFT**（Narwhal / Bullshark / Mysticeti）は mempool を first-class consensus citizen に昇格する。**本質的な分岐は性能ではなく mempool の抽象方法にある** —— Chain-BFT は決済シナリオ（監査フレンドリー）に適し、DAG-BFT は高スループットシナリオ（100k+ TPS）に適する。Tempo と Arc はいずれも Chain-BFT を採用。

**2 大流派の比較**:

| 項目 | Chain-BFT | DAG-BFT |
|---|---|---|
| 代表アルゴリズム | HotStuff, Tendermint, **Threshold Simplex (Tempo)**, **Malachite (Arc)** | Narwhal, Bullshark, **Mysticeti (Sui)** |
| データ構造 | チェーン + view change | DAG + total order extraction |
| Mempool 抽象 | secondary（leader gather → propose）| **first-class**（mempool = consensus）|
| 時間計算量 | O(n) per block | O(1) per block（非同期）|
| スループット | 約 10K TPS | **100K+ TPS** |
| ファイナリティ | 1-2 秒 | **サブ秒** |
| 監査・デバッグ | **シンプル**（線形 history）| 複雑（DAG traversal）|
| 適用シナリオ | **決済、ステーブルコイン、機関金融** | 高頻度取引、ゲーム、DEX |

**Tempo と Arc が Chain-BFT を選んだ理由**:

1. **監査フレンドリー**:決済シナリオでは取引 1 件ごとに監査可能性が必要、DAG history の展開は複雑すぎる
2. **TPS は既に充分**:ステーブルコイン決済は 100K+ TPS を必要としない（Visa グローバルで約 24K TPS）
3. **学術的成熟度が高い**:HotStuff と Tendermint の論文・実装はいずれも大規模に検証済み
4. **形式仕様検証がより実装しやすい**:[[systems/threshold-bft-consensus-rust-implementations|Malachite + Quint co-design]] は Chain-BFT 体系の下でより直接的

**DAG-BFT が優位なシナリオ**:

- Sui / Aptos 等の high-TPS L1（[[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社対照]] における各社の L1 展開と対照）
- Solana 類似設計（PoH + Tower BFT は DAG-flavored）
- 将来の AI agent マイクロペイメントシナリオ（毎秒数百万件の sub-cent transaction）

**学術フロンティア**:

- **Mysticeti (Sui, 2024)**:DAG-BFT でサブ秒 finality を実現
- **Bullshark (2022, Aptos / Sui)**:first-class mempool 思想の正式化
- **Threshold Simplex (2025, Tempo)**:Chain-BFT + BLS aggregation のエンジニアリング収斂
- **Malachite (2025, Arc)**:Chain-BFT + Quint formal verification パラダイム

**論文インデックス**:

- HotStuff: Yin et al. 2019 (https://arxiv.org/abs/1803.05069)
- Narwhal & Bullshark: Spiegelman et al. 2022
- Mysticeti: Babel et al. 2024
- Threshold Simplex: Tempo blog / Paradigm research
- Malachite: Informal Systems 2025

**適用判断フレームワーク**:

- **決済 / 清算** → Chain-BFT（[[fintech/protocol-renewal-trigger-as-event-anchor|protocol renewal trigger]] における機関チェーンの線形監査可能性への選好と対照）
- **ゲーム / 高頻度** → DAG-BFT
- **汎用 L1** → 両者いずれも可（エコシステム目標に依存）


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT コンセンサス Rust 化]]
- [[systems/post-quantum-blockchain-day1-integration|耐量子署名 day-1 統合]]
<!-- /wiki-links:managed -->

## Sources

- HotStuff: BFT Consensus in the Lens of Blockchain（Yin et al. 2019）— https://arxiv.org/abs/1803.05069
- Narwhal and Tusk: A DAG-based Mempool and Efficient BFT Consensus（Danezis et al. 2022）— https://arxiv.org/abs/2105.11827
- Bullshark: DAG BFT Protocols Made Practical（Spiegelman et al. 2022）— https://arxiv.org/abs/2201.05677
- Mysticeti: Reaching the Limits of Latency with Uncertified DAGs（Babel et al. 2024）— https://arxiv.org/abs/2310.14821
- Malachite — Flexible BFT consensus engine in Rust（Arc 採用の Chain-BFT 実装）— https://github.com/informalsystems/malachite
- Tempo 公式サイト（Chain-BFT 決済 L1 / Threshold Simplex）— https://tempo.xyz/

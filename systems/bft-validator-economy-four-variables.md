---
title: BFT validator 経済の4変数 · yield / slashing / MEV / 集中度
aliases: [bft-validator-economy-four-variables, validator economy yield slashing MEV concentration]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, validator, bft, staking-yield, slashing, mev, nakamoto-coefficient]
sources: []
status: candidate
---

# BFT validator 経済の4変数


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/bft-validator-economy-overview|BFT validator 経済学概観 · 4変数と機関チェーンの退化]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 主流 PoS yield のレンジは 3-10% APY ^[extracted]
- ETH の二重署名罰は 1 ETH + 比例 slashing、オフライン罰は軽微 ^[extracted]
- Cosmos の二重署名罰は 5%、オフライン罰は 0.01% ^[extracted]
- ETH の MEV は年間 $500M-1B 規模 ^[extracted]
- ETH クライアント集中度は Geth 60%+、ステーキングプール Lido 30%+、地理は米/独で 60%+ ^[extracted]
- 中本聡係数 = ネットワーク攻撃に必要な最小 validator 数(高いほど分散) ^[extracted]

## Mechanism / How it works

**1. Staking yield**:発行インフレ + tx fee 分配 + MEV 分配で構成される。yield が高すぎる(10%+)と合理的資本が買収に動き中央集権化を招き、低すぎる(<3%)と安全予算が不足し攻撃コストが下がる。「健全レンジ」3-7% は経験値である。

**2. Slashing risk**:二重署名 slashing は重罰(悪意あるフォーク防止)、オフライン slashing は軽罰(liveness 喪失防止)。設計上のトレードオフ:重罰は安全性を高めるが validator 参加を抑制する(特に家庭独立 validator はリスクを取れず撤退)。

**3. MEV**:tx 順序権はアービトラージ/清算/フロントランニングの収益として現金化できる。MEV の集中化(大規模 validator が builder と直接接続)→ validator 集中度を加速。緩和手段:MEV-Boost / PBS(proposer-builder separation)/ encrypted mempool。機関チェーンでは注文フローが OTC 中心のため、MEV は自然にゼロ化する。

**4. 集中度**:多次元で評価する —— 中本聡係数(経済層)+ クライアント(ソフトウェア層)+ ステーキングプール(経済層)+ 地理(規制層)。いずれかの次元で過度に集中するとシステミックリスクとなる:Geth 60%+ ならソフトウェア層のバグで 60% の validator が同時オフラインになり得る;Lido 30%+ ならガバナンス捕捉だけで 30% の投票権に影響できる;米国 60%+ なら OFAC 制裁でメインネットを凍結できる。

## Origin & evolution

2015-2018 の PoW 時代には validator 経済は存在しなかった。2018-2020 Cosmos / Tezos などの初期 PoS で yield + slashing の原型が形成された。2020.12 ETH 2.0 Beacon Chain がローンチ → 二重署名 + オフライン slashing がメインネットに導入。2021.04 Flashbots が MEV-Boost を公開 → MEV が定量化可能な収益変数として顕在化。2022-2024 Lido / クライアント / 地理という 3 種類の集中度が研究の焦点に(Vitalik が複数回発信)。2025-2026 機関チェーンが「少数の KYC validator」という姿で登場し、4 変数フレームワークは機関チェーン vs リテールチェーンで経路分岐が発生([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] 参照)。

## Counterpoints

- 「yield 健全レンジ」は経験値であり、チェーン生態系ごとに許容水準は異なる
- Slashing は family validator 時代に過度に厳格な副作用を見せ、2024 以降は多くのチェーンで slashing の厳格度を引き下げた
- 「集中度の多次元」にはガバナンス集中度(DAO 投票占有率)が含まれず、分析として不完全
- MEV の完全排除が最適とは限らない —— 一部の MEV は市場効率のシグナル(アービトラージによる価格均衡)である

## Open questions

- ETH などの大規模チェーンは、プロトコル層で単一 validator 比率を硬性制限すべきか?
- restaking(EigenLayer)は 4 変数フレームワークを再構築するか(「安全レンタル収益」次元を追加するか)?([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)
- ZK / proof market の時代において、validator 経済と prover 経済はどう結合するか?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] における各 DEX の prover マーケットでの役割と対照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/bft-validator-economy-overview|総覧]]
- [[systems/bft-validator-economy-tempo-vs-arc|Tempo vs Arc 設計比較]]
<!-- /wiki-links:managed -->

## Sources


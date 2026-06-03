---
source: systems/bft-validator-economy-four-variables
source_hash: 2224f683aaae1644
lang: ja
status: machine
fidelity: ok
title: "BFT validator 経済の4変数"
translated_at: 2026-06-03T00:53:08.327Z
---
# BFT validator 経済の4変数

## ウィキ上の位置づけ

この項目は[[systems/INDEX|systems index]]の下に位置づけられる。同種 / 対比の文脈として[[systems/bft-validator-economy-overview|BFT validator 経済学概観 · 4変数と機関チェーンの退化]]、より広いシステム / 規制境界として[[fintech/INDEX|fintech index]]とあわせて読む。

## 主要事実

- 主流PoS yieldのレンジは3-10% APY ^[extracted]
- ETHの二重署名罰は1 ETH + 比例slashing、オフライン罰は軽微 ^[extracted]
- Cosmosの二重署名罰は5%、オフライン罰は0.01% ^[extracted]
- ETHのMEVは年間$500M-1B規模 ^[extracted]
- ETHクライアント集中度はGeth 60%+、ステーキングプールはLido 30%+、地理は米国 / ドイツで60%+ ^[extracted]
- 中本聡係数 = ネットワーク攻撃に必要な最小validator数（高いほど分散）^[extracted]

## 仕組み

**1. Staking yield**: 発行インフレ + tx fee分配 + MEV分配で構成される。yieldが高すぎる（10%+）と合理的資本が買収に動き中央集権化を招き、低すぎる（<3%）と安全予算が不足し攻撃コストが下がる。「健全レンジ」3-7%は経験値である。

**2. Slashing risk**: 二重署名slashingは重罰（悪意あるフォーク防止）、オフラインslashingは軽罰（liveness喪失防止）である。設計上のトレードオフとして、重罰は安全性を高めるがvalidator参加を抑制する。特に家庭独立validatorはリスクを取れず撤退しやすい。

**3. MEV**: tx順序権は、アービトラージ / 清算 / フロントランニングの収益として現金化できる。MEVの集中化（大規模validatorがbuilderと直接接続）はvalidator集中度を加速する。緩和手段はMEV-Boost / PBS（proposer-builder separation）/ encrypted mempoolである。機関チェーンでは注文フローがOTC中心のため、MEVは自然にゼロ化する。

**4. 集中度**: 多次元で評価する。中本聡係数（経済層）+ クライアント（ソフトウェア層）+ ステーキングプール（経済層）+ 地理（規制層）である。いずれかの次元で過度に集中するとシステミックリスクとなる。Geth 60%+ならソフトウェア層のバグで60%のvalidatorが同時オフラインになり得る。Lido 30%+ならガバナンス捕捉だけで30%の投票権に影響できる。米国60%+ならOFAC制裁でメインネットを凍結できる。

## 起源と展開

2015-2018 のPoW時代にはvalidator経済は存在しなかった。2018-2020 にCosmos / Tezosなどの初期PoSでyield + slashingの原型が形成された。2020.12 にETH 2.0 Beacon Chainがローンチし、二重署名 + オフラインslashingがメインネットに導入された。2021.04 にFlashbotsがMEV-Boostを公開し、MEVが定量化可能な収益変数として顕在化した。2022-2024 にはLido / クライアント / 地理という3 種類の集中度が研究の焦点となった（Vitalikが複数回発信）。2025-2026 には機関チェーンが「少数のKYC validator」という姿で登場し、4 変数フレームワークは機関チェーンとリテールチェーンで経路分岐を起こした（[[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]参照）。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/bft-validator-economy-overview|総覧]]
- [[systems/bft-validator-economy-tempo-vs-arc|Tempo vs Arc 設計比較]]
<!-- /wiki-links:managed -->

## 出典

- Ethereum.org Staking（staking yield / slashing概観）— https://ethereum.org/en/staking/
- Cosmos SDK x/slashingモジュール仕様（二重署名罰 / ダウンタイム罰）— https://github.com/cosmos/cosmos-sdk/blob/main/x/slashing/README.md
- Flashbots mev-boost（MEV / PBS）— https://github.com/flashbots/mev-boost
- Vitalik Buterin「improving the Ethereum network's permissionlessness and decentralization」（クライアント / ステーキングプール集中度）— https://vitalik.eth.limo/general/2024/05/17/decentralization.html

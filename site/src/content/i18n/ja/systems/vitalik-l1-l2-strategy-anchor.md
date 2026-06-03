---
source: systems/vitalik-l1-l2-strategy-anchor
source_hash: a187570a0a9bc925
lang: ja
status: machine
fidelity: ok
title: "L1/L2 デュアルトラック戦略の進化 anchor · Ethereum ロードマップと独立 L1 経済インセンティブの攻防"
translated_at: 2026-06-03T01:06:46.361Z
---
# L1/L2 デュアルトラック戦略の進化 anchor · Ethereum ロードマップと独立 L1 経済インセンティブの攻防

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置づけられる。類似項目や対比の文脈は [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]]、より広いシステム上・規制上の境界は [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- 2020-10  に rollup-centric roadmap が提示され、L2 優先戦略が形成された ^[extracted]
- 2024-03  の Dencun(EIP-4844 blob)により、L2 コストが ~100x 低下 ^[extracted]
- 2025-05  の Pectra(EIP-7702 smart account)により、ETH gas 不要の stablecoin 転送が可能になる ^[extracted]
- 2026  推定の Fusaka(PeerDAS + blob さらなる拡張)により、L2 コストは sub-cent へ ^[extracted]
- Ethereum + 全 L2  は世界の stablecoin 流通の ~60%+ を占める($160B 中 ~$120B L1 + ~$40B L2) ^[extracted]
- Vitalik の公開スタンスは、Ethereum は「中立 base layer」であり、すべての stablecoin に中立というもの ^[extracted]

## 仕組み

L1/L2 デュアルトラック戦略の対抗効果は、**L2 コストが sub-cent となり、UX が Web2 に近づくとき**に最も大きくなる。Pectra 後の stablecoin 転送で ETH gas が不要になると、独立 L1(Arc / Tempo / Plasma)の経済的差別化ウィンドウは圧縮される。独立 L1 の売りは元来「低コスト + 高速 + 規制制御可能」だった。しかし L2 コストが独立 L1 の運営粗利を下回ると、独立 L1 は **非経済的な堀**(規制ライセンス / 大口顧客バインド / オンチェーン KYC)に頼らなければ持ちこたえられない。

応用診断として、Ethereum のアップグレード発表ごとに、独立 L1 の「差別化ウィンドウ幅」を検証する。Dencun 後、Optimism / Base / Arbitrum は stablecoin 流通を取り戻す([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] を参照)。Pectra 後、Tempo / Arc の「独立 L1」経済モデルは圧迫を受ける。Fusaka 後は、独立 L1 を「L2 / Validium / アプリチェーン」へ転換させる圧力が強まる可能性がある。

## 起源と進化

源流は、2017-2018  の Plasma / state channel などの「L2 初期方案」が壁にぶつかった後、Vitalik が 2020 年 に rollup-centric を再提示したことにある。2022  の The Merge(PoS)がエネルギーとセキュリティモデルを解決し、2024  の Dencun が L2 コストを解決し、2025  の Pectra が UX(account abstraction)を解決し、2026  の Fusaka がさらにコストを圧縮する。5  年の進化全体に内包されるロジックは、**Ethereum は独立 L1 とスループットで直接競合せず、L2 エコシステムを「独立 L1 キラー」とする**というもの。

Vitalik 個人は CEO / 経営責任者ではなく、純粋に研究 / 治理の立場にある。そのため、立場の信頼性は Allaire / Paolo / Brian などの CEO 系発言者より高い。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/l1-progressive-decentralization-three-phase|L1 漸進分散化 3 段階]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 ネイティブ資産と ERC20 イベント互換]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BUIDL]]
<!-- /wiki-links:managed -->

## 出典

- Vitalik Buterin「A rollup-centric ethereum roadmap」（2020-10  · Ethereum Magicians）— https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698

- Vitalik Buterin「An Incomplete Guide to Rollups」— https://vitalik.eth.limo/general/2021/01/05/rollup.html
- EIP-4844: Shard Blob Transactions（Dencun · L2 コスト ~100x 低下）— https://eips.ethereum.org/EIPS/eip-4844

- EIP-7702: Set Code for EOAs（Pectra · ETH gas 不要の stablecoin 転送）— https://eips.ethereum.org/EIPS/eip-7702

- Ethereum.org ロードマップ（rollup-centric / PeerDAS / account abstraction）— https://ethereum.org/en/roadmap/

---
title: L1/L2 デュアルトラック戦略の進化 anchor · Ethereum ロードマップと独立 L1 経済インセンティブの攻防
aliases: [vitalik-l1-l2-strategy, ethereum-l1-l2-evolution, rollup-centric-to-dual-track]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, ethereum, l2, rollup, pectra, fusaka, stablecoin, vitalik]
sources:
  - https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698
  - https://vitalik.eth.limo/general/2021/01/05/rollup.html
  - https://eips.ethereum.org/EIPS/eip-4844
  - https://eips.ethereum.org/EIPS/eip-7702
  - https://ethereum.org/en/roadmap/
status: candidate
---

# L1/L2 デュアルトラック戦略の進化 anchor · Ethereum ロードマップと独立 L1 経済インセンティブの攻防


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2020-10 rollup-centric roadmap が提示 = L2 優先戦略が形成 ^[extracted]
- 2024-03 Dencun(EIP-4844 blob)→ L2 コストが ~100x 低下 ^[extracted]
- 2025-05 Pectra(EIP-7702 smart account)→ ETH gas 不要の stablecoin 転送が可能となる ^[extracted]
- 2026 推定 Fusaka(PeerDAS + blob さらなる拡張)→ L2 コスト sub-cent ^[extracted]
- Ethereum + 全 L2 が世界 stablecoin 流通の ~60%+ を占める($160B 中 ~$120B L1 + ~$40B L2) ^[extracted]
- Vitalik の公開スタンス = Ethereum は「中立 base layer」、すべての stablecoin に中立 ^[extracted]

## Mechanism / How it works

L1/L2 デュアルトラック戦略の「反相手」効果:**L2 コストが sub-cent + UX が Web2 に近づくとき**(Pectra 後の stablecoin 転送に ETH gas 不要)、独立 L1(Arc / Tempo / Plasma)の経済差別化ウィンドウが圧縮される。独立 L1 の売りは元々「低コスト + 高速 + 規制制御可能」だった —— だが L2 コストが独立 L1 の運営粗利を下回ると、独立 L1 は **非経済的な堀**(規制ライセンス / 大口顧客バインド / オンチェーン KYC)に頼らなければ持ちこたえられない。

応用診断:Ethereum アップグレード発表ごとに → 独立 L1 の「差別化ウィンドウ幅」を検証する。Dencun 後 Optimism / Base / Arbitrum が stablecoin 流通を取り戻す([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] を参照);Pectra 後 Tempo / Arc の「独立 L1」経済モデルが圧迫を受ける;Fusaka 後は独立 L1 を「L2 / Validium / アプリチェーン」への転換を強制する可能性がある。

## Origin & evolution

源流は 2017-2018 Plasma / state channel 等の「L2 初期方案」が壁にぶつかった後、Vitalik が 2020 年に rollup-centric を再提示したこと。2022 The Merge(PoS)がエネルギー + セキュリティモデルを解決、2024 Dencun が L2 コストを解決、2025 Pectra が UX(account abstraction)を解決、2026 Fusaka がさらにコストを圧縮。5 年の進化全体に内包されるロジック:**Ethereum は独立 L1 とスループットで直接競合せず、L2 エコシステムを「独立 L1 キラー」とする**。Vitalik 個人は CEO / 経営責任を持たず、純粋に研究 / 治理の身分 → 立場の信頼性は Allaire / Paolo / Brian 等の CEO 系発言人より高い。

## Counterpoints

- 「L2 優先」は ZK proof / data availability の長期拡張可能性を前提とする — PeerDAS / DA layer が根本的な技術的閉塞を発生させれば、独立 L1 は再び利益を得る
- Vitalik 個人の影響力 ≠ Ethereum Foundation の全決定 — ポスト Vitalik 時代に路線が漂流する可能性
- 独立 L1 は L1/L2 経済競合を回避して **規制の堀** で勝負することが可能(Arc はこの路線の極致版)、Vitalik 路線はこれに直接影響を与えない([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] を参照)

## Open questions

- Fusaka タイムテーブル(2026 / 2027 / それ以降)が独立 L1 経済モデルの攻防リズムを直接決定
- ZK rollup コストカーブの下落速度が「Validium / appchain」を新たな中間層にするか?
- ポスト Vitalik(5-10 年後に研究主導を退いた場合)も Ethereum は「L2 優先」路線を維持できるか?
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 等の RWA は L1 vs L2 での展開選好は?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/l1-progressive-decentralization-three-phase|L1 漸進分散化 3 段階]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 ネイティブ資産と ERC20 イベント互換]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BUIDL]]
<!-- /wiki-links:managed -->

## Sources

- Vitalik Buterin「A rollup-centric ethereum roadmap」（2020-10 · Ethereum Magicians）— https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698
- Vitalik Buterin「An Incomplete Guide to Rollups」— https://vitalik.eth.limo/general/2021/01/05/rollup.html
- EIP-4844: Shard Blob Transactions（Dencun · L2 コスト ~100x 低下）— https://eips.ethereum.org/EIPS/eip-4844
- EIP-7702: Set Code for EOAs（Pectra · ETH gas 不要の stablecoin 転送）— https://eips.ethereum.org/EIPS/eip-7702
- Ethereum.org ロードマップ（rollup-centric / PeerDAS / account abstraction）— https://ethereum.org/en/roadmap/


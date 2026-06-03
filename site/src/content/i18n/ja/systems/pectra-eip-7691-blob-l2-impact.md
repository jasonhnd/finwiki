---
source: systems/pectra-eip-7691-blob-l2-impact
source_hash: bcac0483b6035a63
lang: ja
status: machine
fidelity: ok
title: "Pectra EIP-7691  · blob 倍増と L2 経済連鎖"
translated_at: 2026-06-03T01:06:46.359Z
---
# Pectra EIP-7691  · blob 倍増と L2 経済連鎖

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] の下に位置する。ピア比較や対照の文脈では [[systems/pectra-upgrade-overview|Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧]] と合わせて読み、より広いシステムおよび規制上の境界については [[fintech/INDEX|fintech index]] と合わせて読む。

## 主要事実

- Dencun 後の blob target=3  / max=6 ^[extracted]
- Pectra 後の target=6  / max=9(倍増) ^[extracted]
- L2 calldata コストが約 -50% 低下 ^[extracted]
- Base / Arbitrum / Optimism のユーザー gas が同時に低下 ^[extracted]
- Stripe の Base 上 USDC 決済と Coinbase Smart Wallet の体験が改善 ^[extracted]
- L2 と L1 の経済競争が激化し、資本が両端を流動する ^[extracted]

## 仕組み

Dencun(2024-03)で導入された EIP-4844 blob は、rollup のデータ可用性専用に設計された一時的ストレージスロットである。価格は通常の calldata と独立しており、L2 のサブミットコストを大幅に削減した。しかし Dencun の初期 target=3 blob/block(12 秒ごと)は、Base + Arbitrum + Optimism などの高スループット L2 によってすぐ満杯になった。**Pectra EIP-7691 は target / max を倍増させる**。target=6  / max=9 となり、L2 は blob 手数料急騰なしで 2 倍のデータ量を担えるようになる。直接的な結果として、L2 calldata cost は -50%となる。Base 上の Stripe USDC 決済と Coinbase Smart Wallet の 1セント未満の体験はさらに改善する。シーケンサー収入は gas 単価低下によって減るが、ユーザーアクティビティ上昇による相殺があり、純効果は弾力性次第である。同時に EIP-7251 と共に、「L1 厚化(2048 ETH staking)+ L2 拡張(blob 倍増)」のデュアルトラックを構成する。

## 起源と変遷

2024-03 Dencun がローンチした。EIP-4844 blob はロールアップ中心ロードマップの第一歩である。2024-Q2 から Base / Arbitrum / Optimism などの L2 が blob 手数料市場で圧迫され、頻繁に max=6 に達した。結果として blob 手数料急騰が起き、L2 ユーザーが感じる gas は上昇した。EthMagicians では EIP-7691 の target 倍増を加速する議論が行われた。2024-Q3-Q4 ACD で Pectra bundle に 7691 を含めることが確定した。2025-Q2 メインネット有効化後、数週間内に Base / Arbitrum / Optimism のユーザー実 gas は 30-50% 低下した。Stripe の Base 上 USDC 決済の経済性は継続的に改善した([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] の L2 上の流量分布と対照)。Coinbase Smart Wallet は「ほぼ gas ゼロ」の体験を実現した。次のステップである Fusaka(2026-Q4 計画)では、PeerDAS により blob を P2P ブロードキャストからさらに切り離し、理論上はさらに数倍へ拡張可能になる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-upgrade-overview|Pectra アップグレード総覧]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## 出典

- Ethereum Foundation Pectra spec
- EthMagicians EIP-7691 discussion
- EIP-7691  — https://eips.ethereum.org/EIPS/eip-7691

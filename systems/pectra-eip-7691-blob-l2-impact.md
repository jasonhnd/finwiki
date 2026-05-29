---
title: Pectra EIP-7691 · blob 倍増と L2 経済連鎖
aliases: [pectra-eip-7691-blob-l2-impact, eip-7691, blob-target-six, l2-gas-50-percent-cut]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, ethereum, l2, eip-7691, blob, base, arbitrum, optimism, eip-4844]
sources:
  - https://eips.ethereum.org/EIPS/eip-7691
status: candidate
---

# Pectra EIP-7691 · blob 倍増と L2 経済連鎖


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-upgrade-overview|Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Dencun 後 blob target=3 / max=6 ^[extracted]
- Pectra 後 target=6 / max=9(倍増) ^[extracted]
- L2 calldata コストが約 -50% 低下 ^[extracted]
- Base / Arbitrum / Optimism のユーザー gas が同時に低下 ^[extracted]
- Stripe Base 上の USDC settlement / Coinbase Smart Wallet 体験が改善 ^[extracted]
- L2 と L1 の経済競争が激化 · 資本が両端を流動 ^[extracted]
- EIP-7251 と共に「L1 厚化 + L2 拡張」のデュアルトラックを形成 ^[inferred]

## Mechanism / How it works

Dencun(2024-03)で導入された EIP-4844 blob —— rollup の data availability 専用に設計された一時的ストレージスロットで、価格は通常の calldata と独立しており、L2 のサブミットコストを大幅に削減した。だが Dencun の初期 target=3 blob/block(12 秒ごと)は Base + Arbitrum + Optimism 等の高スループット L2 によってすぐ満杯となった。**Pectra EIP-7691 は target / max を倍増させる** —— target=6 / max=9 となり、L2 は blob fee spike なしで 2 倍のデータ量を担えるようになり、直接的な結果として L2 calldata cost が -50%。Base 上の Stripe USDC settlement と Coinbase Smart Wallet の sub-cent 体験がさらに改善。Sequencer 収入は gas 単価低下によって減るが、ユーザーアクティビティ上昇による相殺があり、純効果は弾力性次第。同時に EIP-7251 と共に「L1 厚化(2048 ETH staking)+ L2 拡張(blob 倍増)」のデュアルトラックを構成する。

## Origin & evolution

2024-03 Dencun がローンチ · EIP-4844 blob は rollup-centric roadmap の第一歩。2024-Q2 から Base / Arbitrum / Optimism 等の L2 が blob fee market で圧迫 · 頻繁に max=6 に達し → blob fee spike → L2 ユーザーの感じる gas が上昇。EthMagicians で EIP-7691 の target 倍増を加速する議論。2024-Q3-Q4 ACD で Pectra bundle に 7691 を含めることが確定。2025-Q2 メインネット有効化後、数週間内に Base / Arbitrum / Optimism のユーザー実 gas が 30-50% 低下。Stripe の Base 上 USDC settlement の経済性が継続的に改善([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] の L2 上の流量分布と対照)・ Coinbase Smart Wallet が「ほぼ gas ゼロ」体験を実現。次のステップ Fusaka(2026-Q4 計画)では PeerDAS により blob を P2P ブロードキャストからさらに decouple し、理論上はさらに数倍に拡張可能。

## Counterpoints

- 7691 の -50% gas 優位は L2 ユーザー成長によって速やかに消費される可能性、長期的には価格は依然として blob fee に向けて調整
- L2 経済は sequencer 収入を圧迫する、しかし sequencer 集中度はかえって上昇(中央集権圧力)
- Vitalik「L2 が 99% のユーザーを担う」戦略は L1 セキュリティ予算を逆方向に蝕む可能性(staking yield 低下)([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] における staking 収益と ETH 価格のフィードバックループと対照)
- blob 容量倍増の非 rollup アプリ(DA バックアップ等)への影響は十分議論されていない

## Open questions

- 2027 Fusaka PeerDAS で blob 容量がさらに 10× になるか?
- L2 間で blob 共有から「blob fee 戦争」(誰がより多く取るか)が発生するか?
- Stripe / Coinbase は Base 上の stablecoin settlement を L1 staking yield 上昇に伴って L1 に戻すか?
- DEX の L2 上トラフィックは blob 倍増によってさらに集中するか?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] を参照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-upgrade-overview|Pectra アップグレード総覧]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec
- EthMagicians EIP-7691 discussion
- EIP-7691 — https://eips.ethereum.org/EIPS/eip-7691

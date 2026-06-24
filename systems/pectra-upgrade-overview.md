---
title: Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧
aliases: [pectra-upgrade-overview, pectra, ethereum-pectra]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [systems, ethereum, upgrade, pectra, eip-7702, eip-7251, eip-7691, eip-2537]
sources:
  - https://eips.ethereum.org/EIPS/eip-7251
  - https://eips.ethereum.org/EIPS/eip-7691
  - https://eips.ethereum.org/EIPS/eip-7702
status: active
---

# Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2025-Q2 メインネット有効化 · 実行層(EL)+ コンセンサス層(CL)を同時にアップグレードした初の事例 ^[extracted]
- EIP-7702 が SetCode tx を導入 · EOA が一度に contract code をバインド可能 ^[extracted]
- EIP-7251 validator 残高上限 32→2048 ETH(64×)· 小口には影響なし ^[extracted]
- EIP-7691 blob target 3→6 · max 6→9 · L2 calldata コスト -50% ^[extracted]
- EIP-2537 BLS12-381 プリコンパイル · AVS BLS 検証コスト -50% ^[extracted]

## Mechanism / How it works

Pectra は実行層とコンセンサス層を同時に改造する。**EIP-7702** により 9000 万存量 EOA がアドレス変更なしで batch / gasless / session key を獲得 —— ERC-4337 とは別の存量改造経路。**EIP-7251** により大規模ステーキング業者(Lido / Coinbase Cloud / Binance)が 1000 個の validator を 16 個に統合可能、P2P ネットワーク圧力 + 運用コストを削減、同時に validator 退出キューも高速化、ただし slashing 単一障害点リスクも集中する。**EIP-7691** は Dencun で導入された blob 容量を倍増、Base / Arbitrum / Optimism ユーザーの gas に直接好影響。**EIP-2537** は BLS 署名/集約のプリコンパイルを追加、SNARK 検証 + BLS 集約署名のオンチェーンコストを大幅削減 —— ZK rollup + EigenLayer AVS + クロスチェーン light client に直接好影響。

## Origin & evolution

The Merge(2022-09)→ Shapella(2023-04 withdraw 解除)→ Dencun(2024-03 EIP-4844 blob)→ Pectra(2025-Q2)。2023-2024 EIP-7702 / 7251 / 7691 / 2537 はそれぞれ EthMagicians で ACD(All Core Devs)議論を完了 · 2024-Q4 に Pectra bundle を最終確定。2025-Q2 メインネット有効化後 · Base / Arbitrum / Optimism は数週間で gas が顕著に低下 · Lido と Coinbase Cloud が validator 統合を開始 · [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / MetaMask が EIP-7702 を統合し存量 EOA アップグレード UX を提供。次の大規模アップグレード Fusaka(2026-Q4 計画)は PeerDAS + Verkle Trees でさらなる拡張に焦点を当てると予想される。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking 強化]]
- [[systems/pectra-eip-7691-blob-l2-impact|EIP-7691 blob 倍増の L2 影響]]
- [[systems/erc-4337-overview|ERC-4337 AA]]
- [[systems/erc-7702-overview|ERC-7702 EOA→SCW]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec
- EIP-7251 — https://eips.ethereum.org/EIPS/eip-7251
- EIP-7691 — https://eips.ethereum.org/EIPS/eip-7691
- EIP-7702 — https://eips.ethereum.org/EIPS/eip-7702

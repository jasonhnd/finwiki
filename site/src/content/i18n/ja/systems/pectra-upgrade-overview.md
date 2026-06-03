---
source: systems/pectra-upgrade-overview
source_hash: b3c840c28ddb0bf7
lang: ja
status: machine
fidelity: ok
title: "Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧"
translated_at: 2026-06-03T01:06:46.361Z
---
# Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置づけられる。類似項目や対比の文脈は [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]]、より広いシステム上・規制上の境界は [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- 2025-Q2  にメインネットで有効化。実行層(EL)+ コンセンサス層(CL)を同時にアップグレードした初の事例 ^[extracted]
- EIP-7702 が SetCode tx を導入し、EOA が一度に contract code をバインド可能 ^[extracted]
- EIP-7251 により validator 残高上限が 32→2048 ETH(64×)へ引き上げ。小口には影響なし ^[extracted]
- EIP-7691 により blob target が 3→6 、max が 6→9 。L2 calldata コストは -50% ^[extracted]
- EIP-2537 が BLS12-381 プリコンパイルを追加し、AVS BLS 検証コストを -50% ^[extracted]

## 仕組み

Pectra は実行層とコンセンサス層を同時に改造する。**EIP-7702** により、9000 万 存量 EOA はアドレス変更なしで batch / gasless / session key を獲得できる。これは ERC-4337 とは別の存量改造経路である。**EIP-7251** により、大規模ステーキング業者(Lido / Coinbase Cloud / Binance)は 1000 個の validator を 16 個に統合可能になる。P2P ネットワーク圧力と運用コストを削減し、同時に validator 退出キューも高速化する。ただし、slashing の単一障害点リスクも集中する。

**EIP-7691** は Dencun で導入された blob 容量を倍増させ、Base / Arbitrum / Optimism ユーザーの gas に直接の好影響をもたらす。**EIP-2537** は BLS 署名/集約のプリコンパイルを追加し、SNARK 検証 + BLS 集約署名のオンチェーンコストを大幅に削減する。ZK rollup + EigenLayer AVS + クロスチェーン light client に直接の好影響がある。

## 起源と進化

マージ（2022-09）→ Shapella（2023-04 、引き出し解除）→ Dencun（2024-03 、EIP-4844  blob）→ Pectra（2025-Q2）という流れで進化した。2023-2024 には、EIP-7702 /7251 /7691 /2537 がそれぞれ EthMagicians で ACD（全コア開発者会議）の議論を完了し、2024-Q4 に Pectra bundle が最終確定した。

2025-Q2  のメインネット有効化後、Base / Arbitrum / Optimism では数週間で gas が顕著に低下した。Lido と Coinbase Cloud は validator 統合を開始し、[[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / MetaMask は EIP-7702 を統合して存量 EOA アップグレード UX を提供した。次の大規模アップグレード Fusaka(2026-Q4 計画)は、PeerDAS + Verkle Trees によるさらなる拡張に焦点を当てると予想される。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking 強化]]
- [[systems/pectra-eip-7691-blob-l2-impact|EIP-7691 blob 倍増の L2 影響]]
- [[systems/erc-4337-overview|ERC-4337 AA]]
- [[systems/erc-7702-overview|ERC-7702 EOA→SCW]]
<!-- /wiki-links:managed -->

## 出典

- Ethereum Foundation Pectra spec
- EIP-7251  — https://eips.ethereum.org/EIPS/eip-7251

- EIP-7691  — https://eips.ethereum.org/EIPS/eip-7691

- EIP-7702  — https://eips.ethereum.org/EIPS/eip-7702

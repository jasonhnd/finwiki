---
source: systems/pectra-eip-7251-institutional-staking
source_hash: f9cc18e737f627e1
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Pectra EIP-7251  · 機関ステーキング経済との親和化（2048 ETH 上限）"
translated_at: 2026-06-26T08:29:40.696Z
---
# Pectra EIP-7251  · 機関ステーキング経済との親和化（2048 ETH 上限）

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照文脈として [[systems/pectra-upgrade-overview|Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧]] を参照し、より広いシステム上および規制上の境界については [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- 単一バリデータの残高上限を 32 → 2048 ETH に拡大する（64倍）。^[extracted]
- 稼働中バリデータ数が減少するため、バリデータ退出キューが高速化する。^[extracted]
- 小口参加者には影響しない。32 ETH でバリデータを起動できる状態は維持される。^[extracted]
- Lido は長期的に node 事業者数を削減する可能性がある。^[extracted]
- Coinbase Cloud は運用コストを大幅に削減できる。^[extracted]

## 仕組み

Ethereum コンセンサスプロトコルは元々、単一バリデータあたり最大 32 ETH という設計だった。これは「分散化優先」のためであり、家庭ユーザーが 32 ETH で参加できるようにするためでもある。だがその代償として、大規模ステーキング業者は数千から数万の独立したバリデータを運用する必要があった。Lido は数万、Coinbase Cloud は 1 万超、Binance も 1 万超のバリデータを持つ。各バリデータは P2P ネットワーク帯域、状態ストレージ、attestation スロットを消費する。

**EIP-7251** は上限を 2048 ETH に引き上げる。これにより、大規模ステーキング業者は残高を少数のバリデータに統合でき、P2P 通信、状態膨張、運用複雑度を大幅に削減できる。コンセンサスプロトコル層では、attestation 数の減少によりブロックサイズとファイナリティ遅延が改善する。退出キューも高速化する。稼働中バリデータが少なければ退出も速くなるためである。

ただしスラッシングリスクは集中する。1 つのバリデータがスラッシュされた場合、今や 32 ETH ではなく 2048 ETH を失う可能性がある。単一の運用ミスがもたらす経済的帰結は 64 倍に拡大する。

## 起源と発展

2023 年に EthMagicians で「MAX_EFFECTIVE_BALANCE が Ethereum の機関級ステーキング資産層化を阻害しているか」が議論された。2024-Q1 には EIP-7251  が mike neuner / Dankrad Feist らによって共同執筆された。2024-Q2-Q3 には ACD（All Core Devs）で複数回議論され、主要な争点は「中央集権圧力 vs ネットワーク効率」だった。2024-Q4 には Pectra bundle に 7251 を含めることが確定した。2025-Q2 にメインネットで有効化された。

有効化後、Lido / Coinbase Cloud はバリデータ統合計画を公表したが、分散化ナラティブを維持するため、一部の 32 ETH バリデータは保持している（[[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] と対照）。家庭ステーカーは利回りのさらなる希薄化とロングテールバリデータの淘汰を懸念している。Vitalik は「7251 は中央集権を推進しない」と複数回公開表明しているが、コミュニティの懸念は続いている。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-upgrade-overview|Pectra アップグレード総覧]]
- [[systems/pectra-eip-7691-blob-l2-impact|EIP-7691 blob 倍増]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
<!-- /wiki-links:managed -->

## 出典

- Ethereum Foundation Pectra spec
- EthMagicians EIP-7251  議論
- EIP-7251  — https://eips.ethereum.org/EIPS/eip-7251

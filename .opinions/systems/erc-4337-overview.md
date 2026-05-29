---
title: "[opinion] ERC-4337 概観 · Account Abstraction のアプリケーション層実装"
source_entry: systems/erc-4337-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-4337 概観 · Account Abstraction のアプリケーション層実装

> 出典エントリー: `systems/erc-4337-overview.md`

## Counterpoints

**Bundler 中央集権化リスク**:稼働初期において Bundler は少数の運営者(Pimlico、Stackup、Alchemy)が主導しており · 中央集権的なボトルネックを形成している。理論上、Bundler は特定の UserOp を検閲しうるため · これは 4337 の設計が完全には解決していない問題である。

**UX 複雑度が根本的に低下していない**:4337 によって SCW は EOA にない機能を持つようになったが · Paymaster の設定 / Bundler の選定 / EntryPoint のアップグレード等の開発者側複雑度は依然として高く · これが 7702 がかえって「シンプル」に見える根本理由である。

## Open questions

- v0.7 以降の次世代 4337(v0.8/v1.0)の方向性は?
- Bundler の分散化(stake-based、PBS 統合)の進捗は?
- 7702 との長期的な棲み分けは安定するのか?([[agent-economy/erc-7715-overview|ERC-7715 agent payment stack]] 等の AA を基盤とする高次プロトコルの進化を参照)
- 非 EVM チェーン(Solana / Move / Cosmos)における 4337 類似標準の発展は?

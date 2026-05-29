---
title: "[opinion] ERC-4337 UserOp/Bundler/EntryPoint フロー詳解"
source_entry: systems/erc-4337-userop-bundler-flow.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-4337 UserOp/Bundler/EntryPoint フロー詳解

> 出典エントリー: `systems/erc-4337-userop-bundler-flow.md`

## Counterpoints

**複雑度が開発者に集中**:end-user の体験はシンプル(seed phrase 不要、USDC で gas 支払い)だが · 開発者は Bundler の選定、Paymaster の構成、EntryPoint のバージョン管理が必要 —— これが [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / Alchemy が「AA-as-a-Service」をビジネスモデルとした理由である([[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] を参照)。

**Bundler 検閲リスク**:Bundler は理論上、特定の UserOp を拒否できる(builder MEV 検閲に類似)。現在 Bundler の数は少なく(主要 3-5 社)・ 中央集権リスクは顕著である。コミュニティでは stake-based Bundler の議論があるが · 広く普及するには至っていない。

## Open questions

- v0.7 以降の Bundler の数と地理的分布は?
- Aggregator(BLS バッチ署名)の実際の採用率は?
- EntryPoint のアップグレード経路(シングルトン契約のアップグレードに関するセキュリティモデル)は?
- 7702 EOA アップグレードと EntryPoint を共有する場合の具体的なセマンティクスは?([[agent-economy/erc-7715-overview|ERC-7715]] が AA stack 上に構築する agent permission モデルとの対照)

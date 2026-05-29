---
title: "[opinion] ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード"
source_entry: systems/erc-7702-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード

> 出典エントリー: `systems/erc-7702-overview.md`

## Counterpoints

**Delegation セキュリティリスク**:ユーザーが署名により EOA に契約を一時バインドすると、delegation 対象の契約にバグや悪意があった場合、EOA の資産がすべて移動させられる可能性がある。これは「ユーザーが秘密鍵を管理していれば資産も所有」という EOA 本来の信頼モデルと緊張関係にある。wallet UI が delegation 対象の信頼性を十分に提示することが求められる。

**4337 陣営のビジネスへの衝撃**:7702 によって「SCW がなくても batch/sponsorship が享受できる」ようになり · 短期的には [[agent-economy/privy-embedded-wallet-overview|Privy]]/Coinbase CDP 等の 4337 SCW ウォレットの UX 差別化障壁が下がる。だが長期的には 7702 は Ethereum 全体を AA にアップグレードする重要経路であり · エコシステム全体にとってはプラス([[agent-economy/erc-7715-overview|ERC-7715]] が EOA アップグレード後の agent permission モデルに与える影響を参照)。

## Open questions

- 7702 persistent delegation の取り消しメカニズムは dust attack を発生させる可能性があるか?
- ウォレット UI は一般ユーザーに delegation リスクをどう説明すべきか?
- 2026-H2 Fusaka アップグレードでは具体的にどのような最適化が行われるか?
- 7702 の L2(Optimism / Arbitrum / Base)同等サポートのタイムラインは?(マルチチェーンシナリオにおける [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果]] の再利用と対照)

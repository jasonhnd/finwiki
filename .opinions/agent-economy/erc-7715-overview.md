---
title: "[opinion] ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済"
source_entry: agent-economy/erc-7715-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済

> 出典エントリー: `agent-economy/erc-7715-overview.md`

## Counterpoints

**Permission 種別の列挙がまだ完全に標準化されていない** — 各ウォレット実装に微差があり · クロスウォレット portability は依然課題。撤回機構はオンチェーン取引が必要で · gas コストがかかる(7702 EOA ユーザーは特に敏感)。

**Scope 内での AI agent の誤決定**:scope で金額と送付先が制限されていても · agent は prompt injection により合法 scope 内で誤った支払いをし得る。scope 設計には慎重さが必要であり · 例えば「毎日 $10 を vercel.com API へ」は「毎日 $10 を任意の merchant へ」よりはるかに安全である(フィッシング対策とコントラクト検証は [[security/bytecode-forensic-three-tier-verify|バイトコードフォレンジック三層検証]] と対照)。

## Open questions

- クロスウォレット permission portability の標準化タイムラインは?
- 撤回時の gas コスト最適化経路(例えば SCW module ベースの off-chain 撤回)は?
- AI agent 誤決定の責任モデルと保険モデルは?
- AP2 mandate とのセマンティクス層のマッピングは?

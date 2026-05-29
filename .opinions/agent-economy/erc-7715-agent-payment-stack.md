---
title: "[opinion] ERC-7715 と agent payment stack · x402 + AP2 + 4337/7702 協調"
source_entry: agent-economy/erc-7715-agent-payment-stack.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-7715 と agent payment stack · x402 + AP2 + 4337/7702 協調

> 出典エントリー: `agent-economy/erc-7715-agent-payment-stack.md`

## 推論 (from Key facts)

- agent payment stack の4層構造 ^[inferred]

## Counterpoints

**プロトコル断片化リスク**:x402 / AP2 / MPP / ACP / A2A の5種類の agent 交渉プロトコルが並存し · さらに 7715 / 4337 / 7702 の wallet 層が加わり · マーチャントの統合コストが爆発する。事実上の標準が形成されなければ · agent payment はデモ段階に留まる可能性がある。

**Stripe Billing 代替仮説**:技術的には 7715 + AP2 が Stripe Billing を代替し得るが · Stripe Billing の非技術的価値(クレカ紛争解決 / chargeback / 不正対策 / 財務 SaaS 統合)はオンチェーン permission モデルでまだ完全に再現されていない。短期的に大規模な移行は起きない。

## Open questions

- 5種類の agent 交渉プロトコル(x402/AP2/MPP/ACP/A2A)の事実上の標準はいつ登場するか?
- Stripe + Privy + 7715 の具体的なプロダクト形態は?
- オンチェーン permission は chargeback と同等の保証を提供できるか?
- クロスチェーン 7715 permission(agent が複数チェーン上で支出する)の標準化は?

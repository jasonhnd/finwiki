---
title: "[opinion] Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)"
source_entry: agent-economy/privy-embedded-wallet-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)

> 出典エントリー: `agent-economy/privy-embedded-wallet-overview.md`

## Counterpoints

- 「Self-custodial」は MPC + TEE モデルでは一部専門家から「実質的に custodial」と批判されている:Privy TEE が故障すれば → ユーザー資産にリスクが波及する
- AWS AgentCore 上で Coinbase CDP と「並列」だが · 将来的に CDP に侵食される可能性がある(Coinbase は機関信頼が強い)
- Stripe 買収後にオープンエコシステムを維持できるか · それとも dApp 統合を徐々に排他化するか(OpenSea 等の競合との関係)
- 110M ウォレットという数字の意味は曖昧 · うちアクティブ wallet はどれほどか?

## Open questions

- Privy は Stripe Connect の 5M マーチャントのデフォルト wallet になるか(自動 provisioning)?
- AWS AgentCore のデフォルトリストにおける Privy / Coinbase CDP の市場シェア配分は?
- MPC + TEE モデルは EU/US の self-custody 規制新ルールに挑戦されるか?

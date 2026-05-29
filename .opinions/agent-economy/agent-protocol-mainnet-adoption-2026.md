---
title: "[opinion] Agent Protocol Mainnet Adoption · 2026-05 Production-Readiness Snapshot"
source_entry: agent-economy/agent-protocol-mainnet-adoption-2026.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Agent Protocol Mainnet Adoption · 2026-05 Production-Readiness Snapshot

> 出典エントリー: `agent-economy/agent-protocol-mainnet-adoption-2026.md`

## Counterpoints

- **"Mainnet ≠ adoption"**: ERC-4337 has been live for 4 years and only a single-digit % of Ethereum txns route through bundlers. Mainnet shipping doesn't guarantee dominant pattern emergence.
- **The Cloudflare / AWS facilitator dominance is a centralization risk**: x402's "open HTTP protocol" framing collides with the reality that two cloud providers will likely process > 80% of facilitator volume by 2027 (compare [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]).
- **AP2's slow production roll-out doesn't make it irrelevant**: WebAuthn took 3+ years to ship in mainstream production after FIDO ratification. AAIF on the same trajectory could dominate post-2028.
- **Anthropic's protocol-neutrality could become a moat**: by not first-party integrating any payment stack, Claude Code remains compatible with whatever wins the [[agent-economy/ai-agent-payment-protocols-commoditization|commoditization wave]] — at the cost of pushing UX burden to users.
- **OpenAI's hedge could prove correct**: if AP2 and x402 converge (e.g. AP2 mandate signed at the x402 facilitator layer), the SDK that supports both pre-convergence wins post-convergence.

## Open questions

- Will Google Cloud / Azure ship native x402 in 2027, joining Cloudflare + AWS and creating a true 4-cloud standard?
- When (if ever) will Anthropic ship first-party AP2 or x402 integration in Claude Code?
- Will FIDO Alliance ratify AAIF (former AP2) on its standard 18-24 month track, or will it stall like WebAuthn did 2014-2016?
- Will ERC-7715 cross-wallet portability standardize before agents fragment along wallet lines (MetaMask-agents vs Coinbase-agents vs Safe-agents)?
- Will Anthropic's MCP-everywhere strategy mean MCP becomes the de-facto wrapper layer for AP2 / x402 / 7715, eliminating the need for first-party SDK integration?
- Will the EU AI Act and US OCC introduce agent-payment-specific consent / supervision requirements that change which wallet/agent stacks remain compliant?
- Will the 2026-Q3 GENIUS Act final rules treat x402 facilitators differently from traditional payment processors?

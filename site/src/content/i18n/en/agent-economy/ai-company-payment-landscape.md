---
source: agent-economy/ai-company-payment-landscape
source_hash: 410791e81df5d6a4
lang: en
status: machine
fidelity: ok
title: "The current state of AI companies' payment methods"
translated_at: 2026-05-30T16:40:11.498Z
---

# The current state of AI companies' payment methods


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for the broader system boundary.

> [!info] TL;DR
> The overseas payment-collection methods of major AI companies as of 2026 年 4 月:

| Company | Overseas product | Payment method | Notes |
|------|---------|---------|------|
| OpenAI | ChatGPT Plus / API | Stripe (credit card) | Global coverage; a primary driver of the [[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP / MPP]] protocols |
| Anthropic | Claude Pro / API | Stripe (credit card) | Global coverage |
| Google | Gemini API | Google Cloud billing | Enterprise-oriented |
| DeepSeek | API | Reportedly uses Stripe (requires an overseas legal entity) | Requires an overseas legal entity holding a Stripe account |
| Alibaba Tongyi | Qwen API | Alibaba Cloud International | Via cloud, not consumer-facing |
| Baidu Wenxin | ERNIE API | Baidu Smart Cloud International | Same as above |

**The critical gap**: the cohort of startups building apps on top of non-US LLMs and expanding them overseas is larger and more fragmented, and is not covered by channels like Alibaba Cloud. They must solve [[fintech/ai-payment-two-tracks|越境決済]] themselves (the Stripe route or the stablecoin route · see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] and [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン越境 B2B 成長]]), and this is currently the largest underserved market.

Source note: public billing / payment documentation and public AI-company product pages; cross-border payment implications are framework-level synthesis.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/skill-market-monetization|Skill マーケット有料化]]
- [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造(JPYC・USDC・Project Pax)]]
- [[fintech/ai-payment-two-tracks|AI 産業の二つの決済軌道:Stripe モデル vs ステーブルコインモデル]]
<!-- /wiki-links:managed -->

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

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocol overview · seven-protocol survey]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 overview · wallet permissions and AI Agent automated payments]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol overview]] for the broader system boundary.

> [!info] TL;DR
> The overseas payment-collection methods of major AI companies as of April 2026:

| Company | Overseas product | Payment method | Notes |
|------|---------|---------|------|
| OpenAI | ChatGPT Plus / API | Stripe (credit card) | Global coverage; a primary driver of the [[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP / MPP]] protocols |
| Anthropic | Claude Pro / API | Stripe (credit card) | Global coverage |
| Google | Gemini API | Google Cloud billing | Enterprise-oriented |
| DeepSeek | API | Reportedly uses Stripe (requires an overseas legal entity) | Requires an overseas legal entity holding a Stripe account |
| Alibaba Tongyi | Qwen API | Alibaba Cloud International | Via cloud, not consumer-facing |
| Baidu Wenxin | ERNIE API | Baidu Smart Cloud International | Same as above |

**The critical gap**: the cohort of startups building apps on top of non-US LLMs and expanding them overseas is larger and more fragmented, and is not covered by channels like Alibaba Cloud. They must solve [[fintech/ai-payment-two-tracks|cross-border payments]] themselves, either through the Stripe route or the stablecoin route; see [[fintech/usd-stablecoin-interchange|USD stablecoin interchange layer]] and [[fintech/stablecoin-crossborder-b2b-growth|stablecoin cross-border B2B growth]]. This is currently the largest underserved market.

Source note: public billing / payment documentation and public AI-company product pages; cross-border payment implications are framework-level synthesis.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/skill-market-monetization|Paid monetization for skill markets]]
- [[agent-economy/agent-actorship-debate|Agent actorship debate: four camps]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal architecture: JPYC, USDC, and Project Pax]]
- [[fintech/ai-payment-two-tracks|Two payment tracks in the AI industry: Stripe model vs stablecoin model]]
<!-- /wiki-links:managed -->

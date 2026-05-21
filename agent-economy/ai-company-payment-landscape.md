---
title: AI 公司收款方式现状（2026 年 4 月）
aliases: []
domain: agent-economy
kind: knowledge
topic: ai-company-payment-landscape
created: 2026-04-16
last_updated: 2026-05-18
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: likely
tags: [agent-economy]
status: candidate
sources:
  - "https://stripe.com/"
  - "https://openai.com/api/pricing/"
  - "https://cloud.google.com/billing/docs"
  - "Public billing / payment documentation for major AI and cloud API providers."
---

# AI 公司收款方式现状


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概览 · Wallet Permissions 与 AI Agent 自动支付]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概览]] for the broader system boundary.

> [!info] TL;DR
> 截至 2026 年 4 月，主要 AI 公司的海外收款方式：

| 公司 | 海外产品 | 收款方式 | 备注 |
|------|---------|---------|------|
| OpenAI | ChatGPT Plus / API | Stripe（信用卡） | 全球覆盖；属 [[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP / MPP]] 协议主推方 |
| Anthropic | Claude Pro / API | Stripe（信用卡） | 全球覆盖 |
| Google | Gemini API | Google Cloud 计费 | 企业级 |
| DeepSeek | API | 据报道使用 Stripe（需海外主体） | 需海外公司持有 Stripe 账户 |
| 阿里通义 | Qwen API | 阿里云国际站 | 走云渠道，不直接面向个人 |
| 百度文心 | ERNIE API | 百度智能云国际 | 同上 |

**关键缺口**：基于非美国 LLM 做应用出海的创业公司群体更大也更碎，它们没有阿里云这种渠道兜底，需要自己解决[[fintech/ai-payment-two-tracks|跨境支付]]（Stripe 路径或稳定币路径），这是目前最大的未服务市场。

Source note: public billing / payment documentation and public AI-company product pages; cross-border payment implications are framework-level synthesis.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/skill-market-monetization|Skill 市场收费化]]
- [[agent-economy/agent-actorship-debate|Agent 主体性辩论：四个阵营]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
<!-- /wiki-links:managed -->

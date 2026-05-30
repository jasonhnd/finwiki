---
source: agent-economy/ai-company-payment-landscape
source_hash: 410791e81df5d6a4
lang: zh
status: machine
fidelity: ok
title: "AI 企业的支付方式现状"
translated_at: 2026-05-30T16:40:11.497Z
---

# AI 企业的支付方式现状


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for the broader system boundary.

> [!info] TL;DR
> 2026 年 4 月时点主要 AI 企业的海外收款方式:

| 企业 | 海外产品 | 支付方式 | 备注 |
|------|---------|---------|------|
| OpenAI | ChatGPT Plus / API | Stripe(信用卡) | 全球覆盖;[[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP / MPP]] 协议的主要推动者 |
| Anthropic | Claude Pro / API | Stripe(信用卡) | 全球覆盖 |
| Google | Gemini API | Google Cloud 计费 | 面向企业 |
| DeepSeek | API | 据报道使用 Stripe(需要海外法人) | 需要持有 Stripe 账户的海外法人 |
| Alibaba 通义 | Qwen API | Alibaba Cloud 国际版 | 经由云,不面向个人 |
| Baidu 文心 | ERNIE API | Baidu Smart Cloud 国际版 | 同上 |

**重要的缺口**:以非美国 LLM 为基础将应用做海外展开的初创公司群体,更大也更碎片化,无法被 Alibaba Cloud 这类渠道覆盖。他们需要自行解决 [[fintech/ai-payment-two-tracks|越境決済]](Stripe 路线或稳定币路线 · 见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 和 [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン越境 B2B 成長]]),这是当前最大的未服务市场。

Source note: public billing / payment documentation and public AI-company product pages; cross-border payment implications are framework-level synthesis.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/skill-market-monetization|Skill マーケット有料化]]
- [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造(JPYC・USDC・Project Pax)]]
- [[fintech/ai-payment-two-tracks|AI 産業の二つの決済軌道:Stripe モデル vs ステーブルコインモデル]]
<!-- /wiki-links:managed -->

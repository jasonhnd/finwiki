---
source: agent-economy/ai-company-payment-landscape
source_hash: 410791e81df5d6a4
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "AI 企業の決済方式の現状"
translated_at: 2026-06-26T08:32:15.192Z
---

# AI 企業の決済方式の現状


## ウィキ上の位置づけ

本項目は [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下に位置する。隣接する文脈については [[agent-economy/erc-7715-overview|ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済]]、より広いシステム境界については [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] と併せて読むこと。

> [!info] 要約
> 2026 年 4 月時点での主要 AI 企業の海外決済受け取り方式:

| 企業 | 海外プロダクト | 決済方式 | 備考 |
|------|---------|---------|------|
| OpenAI | ChatGPT Plus / API | Stripe(クレジットカード) | グローバルカバー;[[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP / MPP]] プロトコルの主要推進者 |
| Anthropic | Claude Pro / API | Stripe(クレジットカード) | グローバルカバー |
| Google | Gemini API | Google Cloud 課金 | エンタープライズ向け |
| DeepSeek | API | 報道によれば Stripe を使用(海外法人が必要) | Stripe アカウント保有の海外法人が必要 |
| Alibaba 通義 | Qwen API | Alibaba Cloud インターナショナル | クラウド経由、個人向けではない |
| Baidu 文心 | ERNIE API | Baidu Smart Cloud インターナショナル | 同上 |

**重要なギャップ**:非米国 LLM を基盤にしてアプリを海外展開するスタートアップ群はより大きくより断片的であり、Alibaba Cloud のようなチャネルでカバーされない。彼らは自前で[[fintech/ai-payment-two-tracks|越境決済]]を解決する必要があり(Stripe ルートまたはステーブルコインルート · [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] および [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン越境 B2B 成長]] 参照)、これが現時点で最大の未サービス市場である。

出典に関する注記:公開されている課金 / 決済ドキュメントおよび AI 企業の公開プロダクトページに基づく;クロスボーダー決済への含意はフレームワークレベルの統合である。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/skill-market-monetization|Skill マーケット有料化]]
- [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造(JPYC・USDC・Project Pax)]]
- [[fintech/ai-payment-two-tracks|AI 産業の二つの決済軌道:Stripe モデル vs ステーブルコインモデル]]
<!-- /wiki-links:managed -->

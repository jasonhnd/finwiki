---
title: Skill マーケット有料化
aliases: []
domain: agent-economy
kind: knowledge
created: 2026-04-13
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-10-30
confidence: possible
tags: [needs-review]
status: candidate
sources:
  - "https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce"
  - "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol"
  - "https://www.x402.org/"
---

# Skill マーケット有料化


## Wiki route

This entry sits under [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 決済インフラ調査レポート]]. Read it with [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]] for adjacent context and [[INDEX|FinWiki index]] for the broader system boundary.

> [!info] TL;DR
> LLM と [[agent-economy/claude-code-extension-architecture|Skill]] は AI 産業における2層分業を構成する。LLM は寡占的なインフラ(訓練コスト数十億ドル)、Skill は誰でも参入可能なアプリケーション層(一人数時間で開発完了)。この階層構造は iOS/App Store の OS/App 関係と同型である。

Skill は現状ほぼすべて無料だが、3つの力が有料化を不可逆に押し進めている。運用コストは呼び出し量の増加で持続不可能となり · 無料マーケットは品質競争を促せず · プラットフォームはエコシステム取引から収益を確保する必要がある(Stripe は既に [[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP/MPP]] 経由で課金インフラを提供している)。

Skill の有料化は A2A 経済における取引量のネイティブな触媒である。Agent が有料 Skill を一度呼び出すごとにマイクロトランザクションが発生する(決済は優先的に [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] を経由し、ウォレットは [[systems/erc-4337-overview|ERC-4337]] または [[systems/erc-7702-overview|ERC-7702]] ベース)。1タスクあたり平均 5-20 個の Skill を呼び出し、アクティブな Agent が 10 万規模に達すると日次トランザクション件数は 1000 万規模になる — この規模になると清算 · 価格決定 · 信用といったインフラはオプションから必須となる。

12-18 ヶ月以内に Skill 課金は個別事例からプラットフォーム標準機能へと進化すると見込まれる。

Source note: public AI-agent commerce and payment-protocol disclosures; pricing conclusions remain framework-level synthesis.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/claude-code-extension-architecture|Claude Code 拡張コンポーネントアーキテクチャ — Agent エコシステムのインフラ階層]]
- [[agent-economy/ai-company-payment-landscape|AI 企業の決済方式の現状(2026 年 4 月)]]
<!-- /wiki-links:managed -->

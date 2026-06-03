---
source: agent-economy/skill-market-monetization
source_hash: bc0a13fc7ae02cf5
lang: ja
status: machine
fidelity: ok
title: "Skill マーケット有料化"
translated_at: 2026-06-02T11:47:37.262Z
---

# Skill マーケット有料化


## ウィキ上の位置づけ

本項目は [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 決済インフラ調査レポート]] の下に位置する。隣接する文脈については [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]]、より広いシステム境界については [[INDEX|FinWiki index]] と併せて読むこと。

> [!info] 要約
> LLM と [[agent-economy/claude-code-extension-architecture|Skill]] は AI 産業における2層分業を構成する。LLM は寡占的なインフラ(訓練コスト数十億ドル)、Skill は誰でも参入可能なアプリケーション層(一人数時間で開発完了)。この階層構造は iOS/App Store の OS/App 関係と同型である。

Skill は現状ほぼすべて無料だが、3つの力が有料化を不可逆に押し進めている。運用コストは呼び出し量の増加で持続不可能となり · 無料マーケットは品質競争を促せず · プラットフォームはエコシステム取引から収益を確保する必要がある(Stripe は既に [[agent-economy/2026-04-08_agent-payment-infrastructure-research|ACP/MPP]] 経由で課金インフラを提供している)。

Skill の有料化は A2A 経済における取引量のネイティブな触媒である。Agent が有料 Skill を一度呼び出すごとにマイクロトランザクションが発生する(決済は優先的に [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] を経由し、ウォレットは [[systems/erc-4337-overview|ERC-4337]] または [[systems/erc-7702-overview|ERC-7702]] ベース)。1タスクあたり平均 5-20 個の Skill を呼び出し、アクティブな Agent が 10 万規模に達すると日次トランザクション件数は 1000 万規模になる — この規模になると清算 · 価格決定 · 信用といったインフラはオプションから必須となる。

12-18 ヶ月以内に Skill 課金は個別事例からプラットフォーム標準機能へと進化すると見込まれる。

出典に関する注記:公開されている AI エージェント・コマースおよび決済プロトコルの開示に基づく;価格に関する結論はフレームワークレベルの統合にとどまる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/claude-code-extension-architecture|Claude Code 拡張コンポーネントアーキテクチャ — Agent エコシステムのインフラ階層]]
- [[agent-economy/ai-company-payment-landscape|AI 企業の決済方式の現状(2026 年 4 月)]]
<!-- /wiki-links:managed -->

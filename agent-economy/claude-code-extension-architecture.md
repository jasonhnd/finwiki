---
title: Claude Code 拡張コンポーネントアーキテクチャ — Agent エコシステムのインフラ階層
aliases: []
domain: agent-economy
kind: knowledge
topic: claude-code-extension-architecture
created: 2026-04-16
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-10-30
confidence: certain
tags: [agent-economy]
status: confirmed
sources:
  - https://docs.claude.com/claude-code
  - https://github.com/anthropics/claude-code
  - https://www.anthropic.com/news/claude-code
---

# Claude Code 拡張コンポーネントアーキテクチャ


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for the broader system boundary.

> [!info] TL;DR
> 出典:2026-04-16 に受領した 5 枚のアーキテクチャ図(WeChat 公式アカウント「童童的 AI 創業圏」)。以下は画像内容の完全テキスト化。

---

## 一、6つの拡張コンポーネント

Claude Code の Agentic Loop(Plan → Act → Observe → Reflect)は、6種類の拡張コンポーネントを通じて機能を獲得する。

| コンポーネント | 役割 | 適用シナリオ | 例 |
|------|------|---------|------|
| CLAUDE.md | 永続的なコンテキストを保持し、セッションごとに自動ロード | Project Specs(プロジェクト規範、グローバルルール) | pnpm を使用;コミット前にテスト |
| Skills | 再利用可能な機能モジュール(知識、指令、ワークフロー)、オンデマンドでロード | Reference Docs / Standard Tasks | "/deploy でデプロイ実行" |
| Subagent | 独立したサブ Agent。独立したコンテキストで実行し、結果のサマリを返す | Context Isolation / Parallel Tasks | ファイルを解析して結論を返す |
| Agent Teams | 複数 Agent が協調し、タスクリストを共有して相互通信 | Parallel Research / Complex Dev | 複数の reviewer を起動 |
| MCP | 外部システムやツールと接続し、外部データ/操作にアクセス | External Data / Actions | DB クエリ;Slack 送信 |
| Hook | ループ外の自動化スクリプト。特定イベントでトリガ | Deterministic Automation | 変更後に ESLint を実行 |

## 二、コンポーネント間の区分

### Skills vs Subagent

| 観点 | Skills | Subagent |
|------|--------|---------|
| 本質 | 再利用可能な知識やフロー | 独立した実行ユニット |
| 中核価値 | 異なるタスク間でコンテンツを再利用 | コンテキスト隔離 |
| 適合シナリオ | 参考資料、標準フロー | 大規模コード解析や並列タスク |

### CLAUDE.md vs Skills

| 観点 | CLAUDE.md | Skills |
|------|-----------|--------|
| ロード方式 | セッションごとに自動ロード | オンデマンドロード |
| ファイル参照 | @path をサポート | @path をサポート |
| フローのトリガ可否 | 不可 | 可能 |
| 最適用途 | グローバルルール | 再利用可能なフロー |

### MCP vs Skill

| 観点 | MCP | Skills |
|------|-----|--------|
| 本質 | 外部システム接続プロトコル | 知識やフロー |
| 提供機能 | ツールインタフェースとデータアクセス | 使い方とビジネスロジック |
| 例 | Slack、DB | コードレビューフロー |

通常は組み合わせて使う:MCP が接続を提供し、Skills が使い方を定義する。

## 三、Plugins & Marketplace

コンポーネントは Plugin としてパッケージ化して配布できる。

```
Plugin(プラグイン)
  ├── Skills
  ├── Hooks
  ├── Subagents
  └── MCP Servers
         ↓
    Marketplace(拡張機能をパッケージ化して配布)
```

Skills は名前空間(例:/my-plugin:review)を使用して衝突を回避する。

## 四、コンポーネント階層とマージ規則

コンポーネントは4階層に積層される(additive):

```
ユーザーレベル
  ↓
プロジェクトレベル
  ↓
プラグインレベル
  ↓
管理ポリシーレベル
```

すべての階層の CLAUDE.md ファイルがロードされ、対話のコンテキストにマージされる。衝突解決:より具体的なルールが優先される。

### 組み合わせ使用例

| 組み合わせ | 動作 | 例 |
|------|---------|------|
| Skills + MCP | MCP が接続を提供し、Skills が使い方を定義 | Skills が DB スキーマを記述 |
| Skills + Subagent | Skills が複数の Subagent を起動 | /audit でセキュリティとパフォーマンスを同時チェック |
| CLAUDE.md + Skills | グローバルルール + オンデマンド知識 | CLAUDE.md が API 規範を定義 |
| Hook + MCP | Hook が外部システムを呼び出し | クリティカルなファイル変更後に Slack 通知 |

## 五、コンテキストコスト

各拡張コンポーネントはモデルのコンテキストウィンドウを消費する。

| コンポーネント | ロードタイミング | ロード内容 | コンテキストコスト |
|------|---------|---------|---------|
| CLAUDE.md | セッション開始時 | 全内容 | 毎回リクエスト(高) |
| Skills | セッション開始時 + 呼び出し時 | 説明 + 全内容 | 比較的低 |
| MCP Servers | セッション開始時 | ツール定義 | 毎回リクエスト(高) |
| Subagents | 作成時 | 独立コンテキスト | メインセッションと隔離 |
| Hooks | トリガ時 | デフォルトなし | ゼロ |

機能とコストのバランスを取る必要がある。Tips:`disable-model-invocation: true` を設定すれば、Skill は手動呼び出し時のみロードされ、コストはゼロになる。

---

## Agent 決済層との潜在的関連(検討中)

以下は初期段階の連想であり、今後の検討対象である。

1. **決済機能を MCP Server として提供**:任意の Agent が MCP プロトコル経由で [[agent-economy/2026-04-08_agent-payment-infrastructure-research|決済機能]] を呼び出す(check_balance, authorize_payment, get_price, dispute)。下層は [[systems/erc-4337-overview|ERC-4337 プログラマブルウォレット]] に依存する
2. **Marketplace の有料化**:[[agent-economy/skill-market-monetization|Plugin Marketplace で有料化が有効]] になった後、課金・決済のバックエンドとして利用可能(決済通貨の選択は [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] を参照)
3. **階層化された予算管理**:ユーザーレベル → プロジェクトレベル → Agent レベル → タスクレベル → 単一呼び出し、コンポーネント階層にマッピング
4. **金融コスト追跡**:コンテキストコスト追跡と同様に、Skill 呼び出しごとの金融コスト(いくら使ったか、価値に見合うか)を追跡

これらの方向性は未確認であり、記録のみ。

---

*テキスト化整理 · 2026-04-16*

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 決済インフラ調査レポート]]
- [[agent-economy/skill-market-monetization|Skill マーケット有料化]]
<!-- /wiki-links:managed -->

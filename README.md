# FinWiki 📚💴🧭

## 日本語 🇯🇵

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、事業判断、調査方法論を横断的に扱う Markdown ナレッジベースです。主なリンク形式は Obsidian の `[[wikilink]]` で、全体入口は [INDEX.md](INDEX.md) です。

このリポジトリは単なるメモ置き場ではなく、調査、仮説形成、比較分析、提案資料、投資判断、事業設計に再利用できる「金融知識の作業台」です。🧠📈

### 🚪 まず見る場所

| 入口 | 用途 |
| --- | --- |
| [INDEX.md](INDEX.md) | 全体索引。テーマ別にエントリーを探すためのメイン入口。 |
| [SCHEMA.md](SCHEMA.md) | wiki エントリーの構造、frontmatter、管理ルール。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Obsidian で読む・検索するためのセットアップ。 |
| [CHANGELOG.md](CHANGELOG.md) | 詳細な作業履歴、同期記録、変更理由、検証結果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex がこのリポジトリで必ず守る運用ルール。 |

### 🗺️ コンテンツマップ

| 領域 | ディレクトリ | 内容 |
| --- | --- | --- |
| 🏦 日本金融機関 | [JapanFG/](JapanFG/) | メガバンク、地銀、保険、証券、政策金融、決済会社、外資金融機関。 |
| 💳 フィンテック | [fintech/](fintech/) | ステーブルコイン、CBDC、EPI、MiCA、GENIUS、MAS、HKMA、オンチェーン金融。 |
| 🪙 取引所・VASP | [exchanges/](exchanges/) | 日本・海外 CEX、DEX、VASP 規制、JVCEA、カストディ、IEO、ハッキング事例。 |
| ⚙️ システム | [systems/](systems/) | Canton、CCTP、EigenLayer、Hyperlane、BFT、クロスチェーン、L1/L2 基盤。 |
| 🧩 Agent 経済 | [agent-economy/](agent-economy/) | AI agent payment、x402、AP2、embedded wallet、agent 決済インフラ。 |
| 🏛️ 銀行・政策金融 | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS、ネット銀行、政策金融、JICA、JBIC、NEXI、JOGMEC 等。 |
| 📊 金融・資本市場 | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A、資本市場、NISA、短期金融市場、日銀オペレーション。 |
| 🧾 事業判断 | [business/](business/), [corporate-strategy/](corporate-strategy/) | 事業モデル、利益分配、戦略買収、人物ケース、スピンオフ設計。 |
| 🛡️ セキュリティ | [security/](security/) | forensic、supply chain attack、bytecode verification、Wayback 検証。 |
| 🛍️ その他産業 | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | 小売、製造、保険、ポイント経済などの周辺領域。 |

### 🔍 使い方

1. **全体から探す**: まず [INDEX.md](INDEX.md) を開き、関心領域の章へ移動します。🧭
2. **関連エントリーを辿る**: 各 Markdown の `Related` や `[[wikilink]]` を使って、隣接する概念へ進みます。🔗
3. **根拠レベルを見る**: `confidence`、`sources`、`^[extracted]`、`^[inferred]` などの記号で、事実と推論を分けて読みます。🧪
4. **提案・調査に使う**: 比較表、制度整理、時系列、counterpoints、open questions を抜き出して、メモ・提案書・デッキに再利用します。📝
5. **更新時は履歴を残す**: 重要な追加・削除・再編をしたら、必ず [CHANGELOG.md](CHANGELOG.md) に詳細記録を残します。🕒

### 🧱 エントリーの基本構造

多くの wiki エントリーは、以下のような構造を持ちます。

- `title`: 人間が読むタイトル。
- `aliases`: Obsidian のリンク解決用別名。
- `domain`: `fintech`、`exchanges`、`systems` などの所属領域。
- `created` / `last_updated` / `last_tended`: 作成日、更新日、実質レビュー日。
- `confidence`: `possible`、`likely`、`certain` などの確度。
- `tags`: 横断検索用タグ。
- `TL;DR`: 2-3 文の要約。
- `Key facts`: 事実・推論・曖昧な点を分けて記録。
- `Mechanism / How it works`: 仕組みの説明。
- `Origin & evolution`: 起源、発展、時系列。
- `Counterpoints`: 反対論、弱点、未検証部分。
- `Open questions`: 今後確認すべき問い。
- `Related`: 関連 wiki へのリンク。

テンプレートは [.templates/wiki-entry-template.md](.templates/wiki-entry-template.md) にあります。🧰

### 🧪 信頼度と根拠タグ

| 表記 | 意味 |
| --- | --- |
| `^[extracted]` | 出典や資料から抽出・要約した情報。 |
| `^[inferred]` | 既存情報からの推論。直接出典ではない。 |
| `^[ambiguous]` | 情報が割れている、または根拠が弱い。 |
| `confidence: possible` | まだ仮説寄り。検証が必要。 |
| `confidence: likely` | 複数根拠から見て有力。 |
| `confidence: certain` | 十分に確認済み。 |

### 🛠️ 運用ルール

1. **README は日本語を先に置きます。** 🇯🇵➡️🇨🇳
2. `README.md` と `CHANGELOG.md` は、常に日本語と中国語の両方を維持します。
3. `CHANGELOG.md` は詳細なタイムラインと作業記録を残します。短い要約だけでは不十分です。
4. 重要な変更では、JST 時刻、背景、対象範囲、主要ファイル、実行手順、検証結果、残タスクを記録します。
5. 絵文字は README で積極的に使って構いません。読みやすさ、探索しやすさ、領域識別を優先します。✨
6. フォーマット整理が目的でない限り、既存 Markdown の空白・改行・文体を大規模に変更しません。
7. 同期前後には `git status --short --branch` と remote HEAD を確認します。

### ✅ 更新チェックリスト

- [ ] 変更対象のディレクトリとエントリーを確認した。
- [ ] [INDEX.md](INDEX.md) のリンクや分類が必要なら更新した。
- [ ] [README.md](README.md) に影響する入口・運用説明の変更がないか確認した。
- [ ] [CHANGELOG.md](CHANGELOG.md) に日本語・中国語の詳細記録を追加した。
- [ ] 秘密情報や不要なローカルファイルを含めていない。
- [ ] 大容量ファイルを誤って追加していない。
- [ ] コミット後に `origin/main` へ push し、remote HEAD を確認した。

### 📦 GitHub Releases

FinWiki の GitHub Releases は、ソフトウェアのバイナリ配布ではなく、**知識ベースの重要な公開スナップショット**として使います。📌

| 項目 | ルール |
| --- | --- |
| 言語順 | 必ず日本語を先、中文を後に置く。 |
| タグ形式 | 原則 `vYYYY.MM.DD`。同日に複数回出す場合は `vYYYY.MM.DD-2` のように枝番を付ける。 |
| Release title | 日本語タイトルを先に書き、必要なら `/` の後に中文タイトルを置く。 |
| Release body | 概要、対象範囲、主要変更、検証結果、既知の注意点、次の作業を明記する。 |
| 記録元 | 詳細な作業履歴は [CHANGELOG.md](CHANGELOG.md) に残し、release body はその公開向け要約として整理する。 |
| 初回 release | [releases/v2026.05.20.md](releases/v2026.05.20.md) を参照。 |

Release を作るときは、GitHub の `No releases published` 状態を放置せず、対象 snapshot の意味が分かる説明を必ず入れます。🧾✨

### 🚀 推奨同期フロー

```bash
git status --short --branch
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote https://github.com/FinWiki repository.git refs/heads/main
```

## 中文 🇨🇳

FinWiki 是一个覆盖金融、支付、稳定币、加密资产、资本市场、日本金融机构、政策金融、商业判断与研究方法论的 Markdown 知识库。仓库主要使用 Obsidian 风格的 `[[wikilink]]` 组织内容，总入口是 [INDEX.md](INDEX.md)。

这个仓库不是普通笔记堆放处，而是一个可复用的“金融知识工作台”：用于研究、假设形成、比较分析、提案材料、投资判断和业务设计。🧠📈

### 🚪 优先入口

| 入口 | 用途 |
| --- | --- |
| [INDEX.md](INDEX.md) | 全库索引。按主题查找条目的主入口。 |
| [SCHEMA.md](SCHEMA.md) | wiki 条目的结构、frontmatter 与管理规则。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | 在 Obsidian 中阅读和搜索的设置说明。 |
| [CHANGELOG.md](CHANGELOG.md) | 详细工作历史、同步记录、变更原因和验证结果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex 在本仓库必须遵守的本地规则。 |

### 🗺️ 内容地图

| 领域 | 目录 | 内容 |
| --- | --- | --- |
| 🏦 日本金融机构 | [JapanFG/](JapanFG/) | 大型银行、地方银行、保险、证券、政策金融、支付公司、外资金融机构。 |
| 💳 金融科技 | [fintech/](fintech/) | 稳定币、CBDC、EPI、MiCA、GENIUS、MAS、HKMA、链上金融。 |
| 🪙 交易所与 VASP | [exchanges/](exchanges/) | 日本与全球 CEX、DEX、VASP 监管、JVCEA、托管、IEO、安全事件。 |
| ⚙️ 系统基础设施 | [systems/](systems/) | Canton、CCTP、EigenLayer、Hyperlane、BFT、跨链、L1/L2 基础设施。 |
| 🧩 Agent 经济 | [agent-economy/](agent-economy/) | AI agent payment、x402、AP2、embedded wallet、agent 支付基础设施。 |
| 🏛️ 银行与政策金融 | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS、网络银行、政策金融、JICA、JBIC、NEXI、JOGMEC 等。 |
| 📊 金融与资本市场 | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A、资本市场、NISA、短期金融市场、日本央行操作。 |
| 🧾 商业判断 | [business/](business/), [corporate-strategy/](corporate-strategy/) | 商业模式、利润分配、战略收购、人物案例、分拆设计。 |
| 🛡️ 安全 | [security/](security/) | forensic、供应链攻击、bytecode verification、Wayback 验证。 |
| 🛍️ 其他产业 | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | 零售、制造、保险、积分经济等周边领域。 |

### 🔍 使用方式

1. **从全图开始**：先打开 [INDEX.md](INDEX.md)，按主题进入对应章节。🧭
2. **沿链接深挖**：通过每篇文章的 `Related` 与 `[[wikilink]]` 进入相邻概念。🔗
3. **区分事实和推论**：用 `confidence`、`sources`、`^[extracted]`、`^[inferred]` 判断材料的可靠性。🧪
4. **复用到工作流**：提取比较表、制度整理、时间线、counterpoints、open questions，用于备忘录、提案书、deck 或尽调材料。📝
5. **更新必须留痕**：重要新增、删除、目录调整或同步后，必须更新 [CHANGELOG.md](CHANGELOG.md)。🕒

### 🧱 条目基本结构

多数 wiki 条目采用以下结构：

- `title`: 面向人阅读的标题。
- `aliases`: Obsidian 链接解析用别名。
- `domain`: `fintech`、`exchanges`、`systems` 等所属领域。
- `created` / `last_updated` / `last_tended`: 创建日、更新日、实质复盘日。
- `confidence`: `possible`、`likely`、`certain` 等确定性。
- `tags`: 横向检索标签。
- `TL;DR`: 2-3 句摘要。
- `Key facts`: 事实、推论、模糊点分开记录。
- `Mechanism / How it works`: 机制说明。
- `Origin & evolution`: 起源、发展、时间线。
- `Counterpoints`: 反方观点、弱点、未验证部分。
- `Open questions`: 后续需要确认的问题。
- `Related`: 相关 wiki 链接。

模板在 [.templates/wiki-entry-template.md](.templates/wiki-entry-template.md)。🧰

### 🧪 可信度与证据标签

| 标记 | 含义 |
| --- | --- |
| `^[extracted]` | 从来源或资料中抽取、改写、摘要的信息。 |
| `^[inferred]` | 基于现有信息做出的推论，不是直接出处。 |
| `^[ambiguous]` | 来源冲突、证据不足或判断尚不稳定。 |
| `confidence: possible` | 偏假设，需要继续验证。 |
| `confidence: likely` | 多个线索支持，较为可信。 |
| `confidence: certain` | 已有充分确认。 |

### 🛠️ 维护规则

1. **README 必须日文在前。** 🇯🇵➡️🇨🇳
2. `README.md` 和 `CHANGELOG.md` 必须永远同时维护日文和中文。
3. `CHANGELOG.md` 必须保留详细时间线和工作记录，不能只写一句摘要。
4. 重要变更需要记录 JST 时间、背景、影响范围、主要文件、执行步骤、验证结果和后续事项。
5. README 可以积极使用 emoji，提高可读性、导航性和领域识别度。✨
6. 除非任务明确要求格式清理，不要大规模改写既有 Markdown 的空格、换行或文体。
7. 同步前后都要检查 `git status --short --branch` 与远端 HEAD。

### ✅ 更新检查清单

- [ ] 已确认变更涉及的目录和条目。
- [ ] 如有必要，已更新 [INDEX.md](INDEX.md) 的链接或分类。
- [ ] 已确认是否需要更新 [README.md](README.md) 的入口说明或维护规则。
- [ ] 已在 [CHANGELOG.md](CHANGELOG.md) 添加日文和中文的详细记录。
- [ ] 未加入密钥、凭证或不必要的本地文件。
- [ ] 未误加入大文件。
- [ ] 提交后已推送到 `origin/main`，并确认远端 HEAD。

### 📦 GitHub Releases

FinWiki 的 GitHub Releases 不是软件二进制分发，而是作为**知识库重要公开快照**来使用。📌

| 项目 | 规则 |
| --- | --- |
| 语言顺序 | 必须日文在前，中文在后。 |
| 标签格式 | 原则使用 `vYYYY.MM.DD`。如果同一天发布多次，用 `vYYYY.MM.DD-2` 这样的后缀区分。 |
| Release title | 先写日文标题，如有需要再用 `/` 接中文标题。 |
| Release body | 必须写清楚概要、影响范围、主要变更、验证结果、已知注意事项和下一步。 |
| 记录来源 | 详细工作历史保留在 [CHANGELOG.md](CHANGELOG.md)，release body 则整理成面向公开阅读的摘要。 |
| 初始 release | 见 [releases/v2026.05.20.md](releases/v2026.05.20.md)。 |

创建 release 时，不能让 GitHub 页面停留在 `No releases published` 状态；每个公开快照都要让读者一眼看懂它是什么、包含什么、如何验证。🧾✨

### 🚀 推荐同步流程

```bash
git status --short --branch
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote https://github.com/FinWiki repository.git refs/heads/main
```

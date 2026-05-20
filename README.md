# FinWiki 📚💴🧭

## 日本語 🇯🇵

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、公開企業・公開人物の戦略ケースを扱う Markdown ナレッジベースです。主なリンク形式は Obsidian の `[[wikilink]]` で、全体入口は [INDEX.md](INDEX.md) です。

このリポジトリは公開前提の知識ベースです。記載対象は、公開ウェブ情報、公的資料、企業開示、規制当局資料、公開市場情報、またはそれらをもとにした公開可能な整理に限定します。個人情報、ローカル環境情報、非公開会話、顧客・相手方情報、内部案件メモは置きません。

公開サイトは GitHub Pages で配信します: [finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 🚪 まず見る場所

| 入口 | 用途 |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | GitHub Pages の公開入口。`index.html` から主要文書へ移動できます。 |
| [INDEX.md](INDEX.md) | 全体索引。テーマ別にエントリーを探すためのメイン入口。 |
| [SCHEMA.md](SCHEMA.md) | wiki エントリーの構造、frontmatter、管理ルール。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Obsidian で読む・検索するための汎用セットアップ。 |
| [CHANGELOG.md](CHANGELOG.md) | 詳細な作業履歴、同期記録、変更理由、検証結果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex がこのリポジトリで守る運用ルール。 |

### 🗺️ コンテンツマップ

| 領域 | ディレクトリ | 内容 |
| --- | --- | --- |
| 🏦 日本金融機関 | [JapanFG/](JapanFG/) | メガバンク、地銀、保険、証券、政策金融、決済会社、外資金融機関。 |
| 💳 フィンテック | [fintech/](fintech/) | ステーブルコイン、CBDC、EPI、MiCA、GENIUS、MAS、HKMA、オンチェーン金融。 |
| 🪙 取引所・VASP | [exchanges/](exchanges/) | 日本・海外 CEX、DEX、VASP 規制、JVCEA、カストディ、IEO、セキュリティ事案。 |
| ⚙️ システム | [systems/](systems/) | Canton、CCTP、EigenLayer、Hyperlane、BFT、クロスチェーン、L1/L2 基盤。 |
| 🧩 Agent 経済 | [agent-economy/](agent-economy/) | AI agent payment、x402、AP2、embedded wallet、agent 決済インフラ。 |
| 🏛️ 銀行・政策金融 | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS、ネット銀行、政策金融、JICA、JBIC、NEXI、JOGMEC 等。 |
| 📊 金融・資本市場 | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A、資本市場、NISA、短期金融市場、日銀オペレーション。 |
| 🧾 事業・会社ケース | [business/](business/), [corporate-strategy/](corporate-strategy/) | 公開企業・公開人物の事業ケース、親会社文脈、スピンオフ設計。 |
| 🛡️ セキュリティ | [security/](security/) | forensic、supply chain attack、bytecode verification、Wayback 検証。 |
| 🛍️ その他産業 | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | 小売、製造、保険、ポイント経済などの周辺領域。 |

### 🔐 公開面ルール

| 保持してよいもの | 削除するもの |
| --- | --- |
| 公的機関、企業 IR、規制当局、法令、登録簿、公開ニュース、公開市場情報 | ローカルパス、メールアドレス、個人口座・所得・資産額、非公開会話、顧客名、相手方名、内部案件名 |
| 公開人物や公開企業に関する、関連性のある公開情報 | 私的な判断ログ、ユーザー発言、未公開プロジェクトの経緯 |
| 公開情報に基づく比較表、制度整理、時系列、推論 | 出所が私的で、匿名化しても意味が残らないメモ |

### 🔍 使い方

1. **全体から探す**: まず [INDEX.md](INDEX.md) を開き、関心領域の章へ移動します。🧭
2. **関連エントリーを辿る**: 各 Markdown の `Related` や `[[wikilink]]` を使って隣接概念へ進みます。🔗
3. **根拠レベルを見る**: `confidence`、`sources`、`^[extracted]`、`^[inferred]` などで、事実と推論を分けて読みます。🧪
4. **更新時は履歴を残す**: 重要な追加・削除・再編では、必ず [CHANGELOG.md](CHANGELOG.md) に詳細記録を残します。🕒

### 🛠️ 運用ルール

1. **README は日本語、英語、中国語の順に置きます。** 🇯🇵➡️🌐➡️🇨🇳
2. `README.md` と `CHANGELOG.md` は、常に日本語、英語、中国語の3言語を同時に維持します。
3. 公開面・構造・索引・同期状態・release・維持ルールを変える場合は、同じ作業内で `README.md`、`CHANGELOG.md`、release notes / GitHub Release を更新します。
4. 個人情報や非公開情報を含む可能性がある内容は、公開面に載せる前に削除または公開情報だけに書き換えます。
5. `origin/main` へ push するたびに、詳細な `README.md` / `CHANGELOG.md` / Releases の更新を同時に行います。
6. 同期前後には `git status --short --branch` と remote HEAD を確認します。

### 📦 GitHub Releases

FinWiki の GitHub Releases は、ソフトウェアのバイナリ配布ではなく、**知識ベースの公開スナップショット**として使います。📌

| 項目 | ルール |
| --- | --- |
| 言語順 | Release body は必ず日本語を先、次に英語、その後に中国語を置く。 |
| タグ形式 | 原則 `vYYYY.MM.DD`。同日に複数回出す場合は `vYYYY.MM.DD-2` のように枝番を付ける。 |
| Release title | 日本語のみ。他の言語のタイトルは併記しない。 |
| Release body | 概要、対象範囲、主要変更、検証結果、既知の注意点、次の作業を明記する。 |
| Push 連動 | `origin/main` へ push するたびに、release notes ファイルと GitHub Release を更新する。 |
| 公開面 | release notes にも個人情報・ローカル情報・内部案件情報を含めない。 |
| History rewrite | 公開面の個人情報削除で履歴を書き換えた場合は、branch / tag を強制更新し、GitHub 上の cached view / dangling commit purge が必要か確認する。 |

### 🌐 GitHub Pages

| 項目 | 状態 |
| --- | --- |
| 公開ドメイン | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`, DNS only |
| Pages source | `main` branch `/ (root)` |
| Custom domain | `CNAME` file に `finwiki.zksc.io` を保持 |
| Homepage | `index.html` を Pages の first viewport として使用 |
| HTTPS | 証明書発行後に GitHub 側で enforce 可能になる想定 |

### 🚀 推奨同期フロー

```bash
git status --short --branch
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<日本語タイトル>" --notes-file releases/<tag>.md
```

## English 🌐

FinWiki is a public Markdown knowledge base covering finance, payments, stablecoins, crypto assets, capital markets, Japanese financial institutions, policy finance, and strategic corporate cases. It organizes content using Obsidian-style `[[wikilink]]` connections, and the main entry point is [INDEX.md](INDEX.md).

This repository is maintained as a strictly public knowledge base. The content is restricted to public web information, official records, corporate filings, regulatory disclosures, public market data, or synthesis based on such public sources. It does not contain any personal information, local environment paths, private conversations, customer or counterparty details, or internal advisory case notes.

The public site is deployed via GitHub Pages at: [finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 🚪 Primary Entrances

| Entrance | Purpose |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | GitHub Pages public entrance. Navigate to major documents from `index.html`. |
| [INDEX.md](INDEX.md) | Global Index. The main entrance to find entries by theme. |
| [SCHEMA.md](SCHEMA.md) | Schema for wiki entries, frontmatter guidelines, and maintenance conventions. |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Generic setup guide for reading and searching in Obsidian. |
| [CHANGELOG.md](CHANGELOG.md) | Detailed timeline of operations, sync logs, and validation results. |
| [AGENTS.md](AGENTS.md) | Local agent rules and constraints in this repository. |

### 🗺️ Content Map

| Domain | Directory | Scope |
| --- | --- | --- |
| 🏦 Japanese Financial Groups | [JapanFG/](JapanFG/) | Mega banks, regional banks, insurers, securities firms, policy finance, payments, foreign subsidiaries. |
| 💳 Fintech & Stablecoins | [fintech/](fintech/) | Stablecoins, CBDC, EPI, MiCA, GENIUS, MAS, HKMA, on-chain finance. |
| 🪙 Exchanges & VASP | [exchanges/](exchanges/) | Global and Japanese CEX/DEX, VASP regulations, JVCEA, custody, IEO, security incidents. |
| ⚙️ Systems & Infrastructure | [systems/](systems/) | Canton/DAML, CCTP, EigenLayer, Hyperlane, BFT, cross-chain, L1/L2 foundations. |
| 🧩 Agent Economy | [agent-economy/](agent-economy/) | AI agent payment protocols, x402, AP2, embedded wallets, agent-commerce infrastructure. |
| 🏛️ Banking & Policy Finance | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS, net banks, public finance, development finance, JICA, JBIC, NEXI, JOGMEC, etc. |
| 📊 Capital Markets | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A, capital markets, NISA, call markets, BoJ open-market operations. |
| 🧾 Strategic Cases | [business/](business/), [corporate-strategy/](corporate-strategy/) | Public company/person strategic business cases, spin-off designs, parent entity contexts. |
| 🛡️ Security & Forensics | [security/](security/) | Forensics, supply-chain attacks, bytecode verification, Wayback time stamps. |
| 🛍️ Peripheral Industries | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | Retail groups, captive finance, insurance, point loyalty liabilities. |

### 🔐 Public Surface Policy

| Allow on Public Surface | Must Remove / Sanitize |
| --- | --- |
| Public records, corporate filings, regulatory registers, laws, official news, public market data | Local paths, emails, personal accounts/income/assets, private conversations, customer/counterparty names, internal code names |
| Relevant public information regarding public figures or public corporations | Private judgment logs, user quotes, unpublished project development details |
| Comparison tables, structured diagrams, timelines, and synthesis based on public records | Private source notes that lose meaning once anonymized |

### 🔍 How to Use

1. **Start from the Index**: Open [INDEX.md](INDEX.md) and jump to the domain of your interest. 🧭
2. **Follow the Connections**: Use `Related` links or `[[wikilink]]` inside the Markdown entries to discover adjacent concepts. 🔗
3. **Check the Confidence Level**: Look for tags like `confidence`, `sources`, `^[extracted]`, `^[inferred]` to differentiate between hard facts and structured synthesis. 🧪
4. **Log Your Edits**: When making major additions, deletions, or structural updates, always write detailed records in [CHANGELOG.md](CHANGELOG.md). 🕒

### 🛠️ Operation Rules

1. **README presentation order:** README maintains sections in Japanese, English, and Chinese in that order. 🇯🇵➡️🌐➡️🇨🇳
2. **Maintenance synchrony:** README, CHANGELOG, and Releases are kept fully consistent.
3. **Snapshot releases:** Push commits trigger updating of the release notes file and the corresponding GitHub Release.
4. **Privacy filtration:** Ensure all private and local variables are completely stripped before pushing.

### 📦 GitHub Releases

FinWiki uses GitHub Releases as **public snapshots of the knowledge base**, rather than software binary distributions. 📌

| Item | Rule |
| --- | --- |
| Language order | Release bodies are written Japanese first, English second, Chinese third. |
| Tag format | Standard `vYYYY.MM.DD`. For multiple releases on the same day, append suffixes like `vYYYY.MM.DD-2`. |
| Release title | Japanese only. Do not append English or Chinese translations in the title. |
| Release body | Explicitly state overview, affected scope, major changes, validation results, known notes, and next steps. |
| Push coupling | Every git push to `origin/main` must synchronously update the release notes file and the GitHub Release. |

### 🚀 Recommended Synchronization Flow

```bash
git status --short --branch
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<Japanese Title>" --notes-file releases/<tag>.md
```
```

## 中文 🇨🇳

FinWiki 是一个覆盖金融、支付、稳定币、加密资产、资本市场、日本金融机构、政策金融、公开公司与公开人物战略案例的 Markdown 知识库。仓库主要使用 Obsidian 风格的 `[[wikilink]]` 组织内容，总入口是 [INDEX.md](INDEX.md)。

这个仓库按公开发布标准维护。内容只保留互联网公开信息、公文资料、公司披露、监管资料、公开市场信息，以及基于这些公开材料整理出的可公开分析。这里不保留个人信息、本地环境信息、非公开对话、客户/相手方信息或内部案件笔记。

公开站点通过 GitHub Pages 发布：[finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 🚪 优先入口

| 入口 | 用途 |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | GitHub Pages 公开入口。通过 `index.html` 进入主要文档。 |
| [INDEX.md](INDEX.md) | 全库索引。按主题查找条目的主入口。 |
| [SCHEMA.md](SCHEMA.md) | wiki 条目的结构、frontmatter 与管理规则。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | 在 Obsidian 中阅读和搜索的通用设置说明。 |
| [CHANGELOG.md](CHANGELOG.md) | 详细工作历史、同步记录、变更原因和验证结果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex 在本仓库必须遵守的本地规则。 |

### 🗺️ 内容地图

| 领域 | 目录 | 内容 |
| --- | --- | --- |
| 🏦 日本金融机构 | [JapanFG/](JapanFG/) | 大型银行、地方银行、保险、证券、政策金融、支付公司和外资金融机构。 |
| 💳 金融科技 | [fintech/](fintech/) | 稳定币、CBDC、EPI、MiCA、GENIUS、MAS、HKMA、链上金融。 |
| 🪙 交易所与 VASP | [exchanges/](exchanges/) | 日本与全球 CEX、DEX、VASP 监管、JVCEA、托管、IEO、安全事件。 |
| ⚙️ 系统基础设施 | [systems/](systems/) | Canton、CCTP、EigenLayer、Hyperlane、BFT、跨链、L1/L2 基础设施。 |
| 🧩 Agent 经济 | [agent-economy/](agent-economy/) | AI agent payment、x402、AP2、embedded wallet、agent 支付基础设施。 |
| 🏛️ 银行与政策金融 | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS、网络银行、政策金融、JICA、JBIC、NEXI、JOGMEC 等。 |
| 📊 金融与资本市场 | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A、资本市场、NISA、短期金融市场、日本央行操作。 |
| 🧾 商业与公司案例 | [business/](business/), [corporate-strategy/](corporate-strategy/) | 公开公司、公开人物、母公司背景和分拆设计。 |
| 🛡️ 安全 | [security/](security/) | forensic、供应链攻击、bytecode verification、Wayback 验证。 |
| 🛍️ 其他产业 | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | 零售、制造、保险、积分经济等周边领域。 |

### 🔐 公开面规则

| 可以保留 | 必须删除 |
| --- | --- |
| 公共机构、公司 IR、监管机构、法律法规、登记簿、公开新闻、公开市场信息 | 本地路径、邮箱地址、个人账户/收入/资产额、非公开对话、客户名、相手方名、内部项目名 |
| 与条目相关的公开人物、公开公司信息 | 私人判断日志、用户原话、未公开项目过程 |
| 基于公开信息整理的比较表、制度图谱、时间线、推论 | 来源本身是私有的，且匿名化后仍无法成立的笔记 |

### 🔍 使用方式

1. **从全图开始**：先打开 [INDEX.md](INDEX.md)，按主题进入对应章节。🧭
2. **沿链接深挖**：通过每篇文章的 `Related` 与 `[[wikilink]]` 进入相邻概念。🔗
3. **区分事实和推论**：用 `confidence`、`sources`、`^[extracted]`、`^[inferred]` 判断材料可靠性。🧪
4. **更新必须留痕**：重要新增、删除、目录调整或同步后，必须更新 [CHANGELOG.md](CHANGELOG.md)。🕒

### 🛠️ 维护规则

1. **README 按日文、英文、中文的顺序排列。** 🇯🇵➡️🌐➡️🇨🇳
2. `README.md` 和 `CHANGELOG.md` 保持多语言（日文、英文、中文）同步维护。
3. 修改公开面、结构、索引、同步状态、release 或维护规则时，必须在同一轮工作里更新 `README.md`、`CHANGELOG.md`、release notes / GitHub Release。
4. 任何可能包含个人信息或非公开信息的内容，发布前必须删除，或改写成只基于公开信息的版本。
5. 每次 push 到 `origin/main`，都必须同步更新详细的 `README.md` / `CHANGELOG.md` / Releases。
6. 同步前后都要检查 `git status --short --branch` 与远端 HEAD。

### 📦 GitHub Releases

FinWiki 的 GitHub Releases 不是软件二进制分发，而是作为**知识库公开快照**来使用。📌

| 项目 | 规则 |
| --- | --- |
| 语言顺序 | Release body 必须日文在前，英文在中，中文在后。 |
| 标签格式 | 原则使用 `vYYYY.MM.DD`。如果同一天发布多次，用 `vYYYY.MM.DD-2` 这样的后缀区分。 |
| Release title | 只使用日文，不附其他语言标题。 |
| Release body | 必须写清楚概要、影响范围、主要变更、验证结果、已知注意事项和下一步。 |
| Push 联动 | 每次 push 到 `origin/main`，都要更新 release notes 文件和 GitHub Release。 |
| 公开面 | release notes 也不能包含个人信息、本地信息或内部案件信息。 |
| History rewrite | 如果为了删除公开面的个人信息而重写历史，必须强制更新 branch / tag，并确认 GitHub cached view / dangling commit 是否还需要 purge。 |

### 🌐 GitHub Pages

| 项目 | 状态 |
| --- | --- |
| 公开域名 | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`，DNS only |
| Pages source | `main` branch `/ (root)` |
| Custom domain | `CNAME` 文件保存 `finwiki.zksc.io` |
| Homepage | 使用 `index.html` 作为 Pages 首页 |
| HTTPS | GitHub 签发证书后再启用 enforce HTTPS |

### 🚀 推荐同步流程

```bash
git status --short --branch
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<日文标题>" --notes-file releases/<tag>.md
```

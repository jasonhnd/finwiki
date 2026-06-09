# FinWiki Agent Instructions

## Required Trilingual Documentation

### 日本語

- このリポジトリの `README.md` と `CHANGELOG.md` は、常に日本語、英語、中国語を同時に維持します。
- `README.md` は必ず日本語を先に置き、次に英語、その後に中国語を置きます。
- `README.md` では絵文字を多めに使って構いません。ただし、ナビゲーション、領域識別、読みやすさに役立つ形で使います。
- GitHub Release の title は日本語のみとします。body は必ず日本語を先に置き、次に英語、その後に中国語を置き、公開範囲、主要変更、検証結果、既知の注意点、次の作業を明記します。
- `origin/main` に push するたびに、詳細な `README.md`、`CHANGELOG.md`、release notes ファイル、GitHub Release を同時に更新します。
- 本リポジトリは公開ナレッジベースです。本文にはインターネット公開情報、公的資料、公開開示、または公開情報に基づく分析のみを残し、個人情報、ローカルパス、非公開会話、顧客・相手方情報、内部案件の詳細を含めてはいけません。
- コンテンツ、構造、索引、同期状態、公開状態、運用ルールを変更する場合は、同じ作業内で必ず `CHANGELOG.md` を更新します。
- 変更がリポジトリ入口、ディレクトリ説明、協業フロー、長期運用ルールに影響する場合は、`README.md` も同時に更新します。
- wiki コンテンツの追加、削除、拡張、索引、領域数、公開スナップショットを更新するたびに、root `index.html` も現在の内容地図として同時に更新します。ホームページでは wiki の収録内容と入口を説明し、個人情報排除の説明を主要コンテンツブロックにしません。
- wiki コンテンツの追加、削除、拡張、索引、領域数、公開スナップショットを更新するたびに、`bun tools/generate_ai_discovery.ts` も同時に実行し、`robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json` を更新します。これにより AI / crawler が公開ホームページと machine-readable entry points から全体を発見できる状態を維持します。
- `CHANGELOG.md` は詳細なタイムラインと作業記録を残します。短い要約だけで済ませてはいけません。最低限、JST 時刻、背景、範囲、主要ファイルまたはディレクトリ、実行手順、検証結果、残タスクを記録します。
- 明示的に要求されない限り、既存 Markdown の大規模なフォーマット整理は行いません。同期作業では原文の形を優先して保持します。
- コミット前に `git status --short --branch` を確認し、コミット後は `origin/main` に push してリモート HEAD を確認します。
- `docs/` ディレクトリは内部開発文書（BRD / PRD / ARD / FSD / NFR / RTM、アーキテクチャ、実装、品質、運用）であり、公開 wiki corpus ではありません。`lib/markdown_helpers.ts` の `EXCLUDED_WALK_DIRS` と `tools/wiki_link_audit.ts` の `IGNORED_DIRS` に登録済みで、corpus（md / entries 計数）、`sitemap.xml` / `llms.txt` / `ai-index.json` / `api/`、Astro サイト、死リンク監査のいずれにも含まれません。この排除を解除してはいけません。`docs/` に wiki 本文を置かず、wiki 本文に開発文書を置きません。公開 GitHub repo 上の内部文書なので、密钥、個人情報、顧客情報、非公開会話、内部案件詳細も禁止です。
- モデル分担は [docs/06-implementation/model-agent-workflow.md](docs/06-implementation/model-agent-workflow.md) に従います。高推論の仕様モデルは要求・仕様・アーキテクチャ・検収・RTM と task packet を担当し、高速コード実装モデルは承認済み task packet の許可ファイルだけを実装します。同時 active subagent は最大 10、完了した subagent は閉じてから次 batch を開始します。
- プロジェクト開発は GitHub Issues で駆動します。非自明な変更は scope / acceptance criteria / validation / closeout evidence を持つ issue として起票し、実装コミットと通過した検証を紐付けてから close します。運用モデルは [docs/06-implementation/model-agent-workflow.md](docs/06-implementation/model-agent-workflow.md) の GitHub-Issue Operating Model に従います。読み取り専用チェックと緊急ローカル診断は issue を必須としません。

### English

- `README.md` and `CHANGELOG.md` in this repository must always be maintained in Japanese, English, and Chinese simultaneously.
- `README.md` must always be ordered Japanese first, English second, Chinese third.
- `README.md` may use emojis liberally, but only when they serve navigation, domain identification, and readability.
- GitHub Release titles must be Japanese only. Release bodies must always be ordered Japanese first, English second, Chinese third, and must explicitly state the release scope, major changes, validation results, known notes, and next steps.
- Every push to `origin/main` must synchronously update the detailed `README.md`, `CHANGELOG.md`, release notes file, and GitHub Release.
- This repository is a strictly public knowledge base. Body content must contain only public internet information, official documents, public disclosures, or synthesis based on public sources. It must not include personal information, local paths, non-public conversations, customer / counterparty information, or internal case details.
- When modifying content, structure, indexes, sync status, release status, or operating rules, `CHANGELOG.md` must be updated within the same work session.
- When changes affect the repository entry point, directory descriptions, collaboration flow, or long-term operating rules, `README.md` must also be updated in the same session.
- Whenever wiki content is added, deleted, expanded, or indexes / domain counts / public snapshots are updated, the root `index.html` must also be rewritten in the same session as the current content map. The homepage should describe the wiki's current coverage and entry points, not foreground privacy-exclusion language as a main content block.
- Whenever wiki content is added, deleted, expanded, or indexes / domain counts / public snapshots are updated, `bun tools/generate_ai_discovery.ts` must be run in the same session to refresh `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and `ai-index.json`. This keeps the AI / crawler discovery surface aligned with the public homepage and machine-readable entry points.
- `CHANGELOG.md` must preserve a detailed timeline and work log. A single-sentence summary is not acceptable. At minimum, record JST time, context, scope, primary files or directories, execution steps, validation results, and follow-up tasks.
- Unless explicitly requested, do not perform large-scale formatting cleanups on existing Markdown. For sync-class commits, preserve original formatting.
- Before committing, check `git status --short --branch`. After committing, push to `origin/main` and verify the remote HEAD.
- The `docs/` directory holds internal developer documentation (BRD / PRD / ARD / FSD / NFR / RTM, architecture, implementation, quality, and operations) and is NOT part of the public wiki corpus. It is registered in `EXCLUDED_WALK_DIRS` (`lib/markdown_helpers.ts`) and `IGNORED_DIRS` (`tools/wiki_link_audit.ts`), so it is excluded from the corpus (md / entries counts), `sitemap.xml` / `llms.txt` / `ai-index.json` / `api/`, the Astro site, and the dead-link audit. Do not remove this exclusion. Do not place wiki body content under `docs/`, and do not place developer docs in the wiki body. Because this is still a public GitHub repo, `docs/` must not contain secrets, personal information, customer information, non-public conversations, or internal case details.
- Model role assignment follows [docs/06-implementation/model-agent-workflow.md](docs/06-implementation/model-agent-workflow.md). High-reasoning specification models own requirements, specifications, architecture, acceptance, RTM, and task packets; fast code-implementation models implement only the allowed files in approved task packets. Keep active subagents at 10 or fewer, and close/retire finished subagents before starting the next batch.
- Project development is driven by GitHub Issues. Non-trivial changes start as an issue carrying scope, acceptance criteria, validation, and closeout evidence, and are closed only after the implementing commit(s) and passing validation are linked. Follow the GitHub-Issue Operating Model in [docs/06-implementation/model-agent-workflow.md](docs/06-implementation/model-agent-workflow.md). Read-only checks and emergency local diagnostics do not require an issue.

### 中文

- 本仓库的 `README.md` 和 `CHANGELOG.md` 必须永远同时维护日文、英文和中文。
- `README.md` 必须按日文在前、英文在中、中文在后的顺序排列。
- `README.md` 可以大量使用 emoji，但要服务于导航、领域识别和可读性。
- GitHub Release 的 title 只使用日文；body 必须按日文在前、英文在中、中文在后的顺序排列，并写清楚发布范围、主要变更、验证结果、已知注意事项和下一步。
- 每次 push 到 `origin/main` 都必须同步更新详细的 `README.md`、`CHANGELOG.md`、release notes 文件和 GitHub Release。
- 本仓库是公开知识库；所有正文内容必须只保留互联网公开信息、公文资料、公开披露或基于公开来源的分析，不得包含个人信息、本地路径、非公开对话、客户/相手方信息或内部案件细节。
- 修改内容、结构、索引、同步状态、发布状态或维护规则时，必须在同一轮工作里更新 `CHANGELOG.md`。
- 如果改动会影响仓库入口、目录说明、协作流程或长期维护规则，也必须同步更新 `README.md`。
- 每次新增、删除、扩写 wiki 内容，或更新索引、领域数量、公开快照时，必须同步重写根目录 `index.html`。首页要说明当前 wiki 覆盖内容和入口，不把隐私排除说明作为主要内容块。
- 每次新增、删除、扩写 wiki 内容，或更新索引、领域数量、公开快照时，必须同步执行 `bun tools/generate_ai_discovery.ts`，并更新 `robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json`，确保 AI / crawler 能从公开首页和机器入口发现全站内容。
- `CHANGELOG.md` 必须保留详细时间线和工作记录，不允许只写一句概括。至少记录 JST 时间、背景、范围、主要文件或目录、执行步骤、验证结果、后续事项。
- 除非任务明确要求，不要对既有 Markdown 做大规模格式清理。同步类提交优先保持原文形态。
- 提交前检查 `git status --short --branch`，提交后推送到 `origin/main`，并确认远端 HEAD。
- `docs/` 目录是内部开发文档（BRD / PRD / ARD / FSD / NFR / RTM、架构、实施、质量、运维），不是公开 wiki corpus。它已注册进 `lib/markdown_helpers.ts` 的 `EXCLUDED_WALK_DIRS` 与 `tools/wiki_link_audit.ts` 的 `IGNORED_DIRS`，因此不计入 corpus（md / entries 计数），也不进 `sitemap.xml` / `llms.txt` / `ai-index.json` / `api/`、Astro 站点或死链审计。不要移除这个排除。不要把 wiki 正文放进 `docs/`，也不要把开发文档放进 wiki 正文。由于仓库仍是公开 GitHub repo，`docs/` 也禁止写入密钥、个人信息、客户信息、非公开对话或内部案件细节。
- 模型分工遵循 [docs/06-implementation/model-agent-workflow.md](docs/06-implementation/model-agent-workflow.md)。高推理规格模型负责需求、规格、架构、验收、RTM 和 task packet；快速代码实现模型只实现已批准 task packet 里的允许文件。active subagent 同时最多 10 个，用完的 subagent 必须关闭/retire 后才能开下一批。
- 项目开发由 GitHub Issues 驱动。非琐碎改动先以带 scope / 验收标准 / 验证 / 关闭证据的 issue 起票，并在关联实现提交与通过的验证后才关闭。运营模型遵循 [docs/06-implementation/model-agent-workflow.md](docs/06-implementation/model-agent-workflow.md) 的 GitHub-Issue Operating Model。只读检查与紧急本地诊断不强制要求 issue。

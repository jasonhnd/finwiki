# `.opinions/**` public quarantine contract / 公開隔離契約 / 公开隔离契约

> **Decision (Issue #193, 2026-07-30):** retain `.opinions/**` in this public GitHub repository under an explicit quarantine contract (option 2). Material is **not** part of the wiki site corpus, sitemap, API, or AI discovery surfaces, but **is** directly visible to anyone who can browse the public repository.

## 日本語

### 可視境界（必須）

- **サイト corpus 非公開 ≠ GitHub 非公開。** `EXCLUDED_WALK_DIRS` / サイト未配信は「デプロイ成果物に載せない」だけを意味し、「リポジトリ上で読めない」を意味しない。
- `.opinions/**` は tracked のまま公開 GitHub リポジトリから直接閲覧できる。
- 本ディレクトリは **opinion / inference / open-question quarantine** であり、wiki 本文の確定事実ではない。

### 許可される内容

- 公開インターネット情報、公的資料、公開開示、またはそれらに基づく推論・反証・未決論点。
- 個人情報、顧客 / 相手方情報、非公開会話、内部案件詳細、秘密鍵は **禁止**（リポジトリ全体ルールと同じ）。

### 必須メタデータ（各ファイル）

- frontmatter に `type: opinion-quarantine` を持つこと。
- `source_entry` で対応する公開 wiki エントリ（または `none`）を示すこと。
- タイトルは `[opinion]` 接頭辞を推奨。

### 禁止される主張

- 未検証の噂を確定事実として述べること。
- 「サイトに載っていない = 非公開」と読める表現。
- 顧客名・口座・社内案件の特定。

### レビュー节奏

- 四半期ごとに `bun tools/opinions_quarantine_audit.ts` を実行する。
- 新規追加は quarantine frontmatter 必須。不適合はツールが fail する。

## English

### Visibility boundary (mandatory)

- **Not in the site corpus does not mean not public on GitHub.** Corpus exclusion and static-publish allowlists only control the deployed site artifact.
- Every tracked file under `.opinions/**` remains directly readable in this public repository.
- Files here are **opinion / inference / open-question quarantine**, not canonical wiki facts.

### Allowed content

- Public internet information, official materials, public disclosures, or inference / counterpoints / open questions based on those sources.
- Personal data, customer / counterparty data, non-public conversations, internal case detail, and secrets are **prohibited**.

### Required metadata (every file)

- `type: opinion-quarantine` in frontmatter.
- `source_entry` pointing at the related public wiki path, or `none`.
- Prefer a `[opinion]` title prefix.

### Prohibited claims

- Presenting unverified rumor as established fact.
- Language that equates “not deployed on the site” with “not public”.
- Identifying customers, accounts, or internal matters.

### Review cadence

- Run `bun tools/opinions_quarantine_audit.ts` at least quarterly and in CI docs/release gates.
- New files must carry quarantine frontmatter; the audit fails otherwise.

## 中文

### 可见边界（强制）

- **未进入站点 corpus ≠ GitHub 上不可见。** 排除规则与静态发布白名单只约束部署产物。
- `.opinions/**` 下所有 tracked 文件仍可在本公开仓库中直接读取。
- 本目录是 **意见 / 推理 / 开放问题隔离区**，不是 wiki 正文中的既定事实。

### 允许内容

- 互联网公开信息、官方资料、公开披露，或基于上述来源的推理、反证与未决问题。
- **禁止** 个人信息、客户 / 对手方信息、非公开对话、内部案件细节与密钥。

### 必需元数据（每个文件）

- frontmatter 含 `type: opinion-quarantine`。
- `source_entry` 指向对应公开 wiki 路径，或 `none`。
- 标题建议带 `[opinion]` 前缀。

### 禁止主张

- 将未核实传闻写成既定事实。
- 把“未部署到站点”表述成“不公开”。
- 识别客户、账户或内部事项。

### 审查节奏

- 至少每季度及在 CI docs/release 门禁中运行 `bun tools/opinions_quarantine_audit.ts`。
- 新增文件必须带 quarantine frontmatter，否则审计失败。

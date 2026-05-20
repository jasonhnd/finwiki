# CHANGELOG

## 维护原则 / 運用原則

### 中文

- 本文件必须与 `README.md` 一样，永远同时维护中文和日文。
- 每次重要工作都要记录详细时间线，而不是只写一句版本说明。
- 每条记录应尽量包含：JST 时间、工作背景、影响范围、主要文件或目录、执行步骤、验证结果、后续事项。
- 如果某次提交只更新少量条目，也要写清楚为什么改、改了哪里、如何确认。

### 日本語

- 本ファイルは `README.md` と同様に、中国語と日本語を常に同時に維持します。
- 重要な作業ごとに、短いバージョン説明だけでなく詳細なタイムラインを残します。
- 各記録には、可能な限り JST 時刻、背景、影響範囲、主要ファイルまたはディレクトリ、実行手順、検証結果、残タスクを含めます。
- 小さなエントリー更新であっても、変更理由、変更箇所、確認方法を明記します。

## 2026-05-20

### 09:03 JST: 双语 README / CHANGELOG 维护规则固化

#### 中文记录

- 背景：用户明确要求本 Git 仓库的 `README.md` 与 `CHANGELOG.md` 永远同时维护中文和日文，且 `CHANGELOG.md` 必须有详细时间线和工作记录。
- 影响范围：仓库根目录文档与后续维护流程。
- 主要文件：
  - `README.md`
  - `CHANGELOG.md`
  - `AGENTS.md`
- 时间线：
  - 09:03: 检查仓库根目录，确认原 `README.md` 只有 `# finwiki`，尚无 `CHANGELOG.md` 与项目级 `AGENTS.md`。
  - 09:03: 读取近期 git 历史，确认上一轮同步提交为 `c710bd4 docs: sync FinWiki knowledge base`。
  - 09:03: 统计当前 tracked 文件数为 579，确认本次规则固化是在已完成初始同步之后进行。
  - 09:03: 重写 `README.md`，加入中文和日文的仓库说明、内容地图、维护规则和同步流程。
  - 09:03: 新增 `CHANGELOG.md`，建立中文和日文并行记录格式，并补记初始同步工作。
  - 09:03: 新增 `AGENTS.md`，把双语 README / CHANGELOG 与详细时间线要求固化为后续 agent 必须遵守的本地规则。
- 验证计划：
  - 检查 git diff，确认只改动根目录维护文档。
  - 提交并推送到 `origin/main`。
  - 推送后确认远端 `main` 指向最新提交。
- 后续要求：未来所有内容同步、批量新增、目录调整、删除或规则变更，都要同步更新 `README.md` 与 `CHANGELOG.md` 的中文和日文内容。

#### 日本語記録

- 背景: ユーザーから、この Git リポジトリでは `README.md` と `CHANGELOG.md` を常に中国語・日本語の両方で維持し、特に `CHANGELOG.md` には詳細なタイムラインと作業記録を残すよう明示された。
- 影響範囲: リポジトリ直下の運用文書と今後のメンテナンス手順。
- 主要ファイル:
  - `README.md`
  - `CHANGELOG.md`
  - `AGENTS.md`
- タイムライン:
  - 09:03: リポジトリ直下を確認し、既存の `README.md` が `# finwiki` のみで、`CHANGELOG.md` とプロジェクトレベルの `AGENTS.md` が存在しないことを確認。
  - 09:03: 直近の git 履歴を確認し、前回同期コミットが `c710bd4 docs: sync FinWiki knowledge base` であることを確認。
  - 09:03: tracked ファイル数が 579 であることを確認し、初回同期後に今回の運用ルール固定を行う位置づけを整理。
  - 09:03: `README.md` を書き直し、中国語・日本語のリポジトリ説明、コンテンツマップ、運用ルール、同期フローを追加。
  - 09:03: `CHANGELOG.md` を新規作成し、中国語・日本語を並行して記録する形式を定義し、初回同期作業も追記。
  - 09:03: `AGENTS.md` を新規作成し、README / CHANGELOG の二言語維持と詳細タイムライン記録を、今後の agent が従うべきローカルルールとして固定。
- 検証予定:
  - git diff を確認し、変更がルート直下の運用文書に限定されていることを確認。
  - `origin/main` にコミットしてプッシュ。
  - プッシュ後、リモート `main` が最新コミットを指していることを確認。
- 今後の要件: 今後のコンテンツ同期、大量追加、ディレクトリ再編、削除、運用ルール変更では、必ず `README.md` と `CHANGELOG.md` の中国語・日本語内容を同時に更新する。

### 08:58 JST: 初始 FinWiki 知识库同步到 GitHub

#### 中文记录

- 背景：需要把本地 `FinWiki` 的全部知识库内容同步到 GitHub 仓库 `FinWiki repository`。
- 远端仓库：[FinWiki repository](https://github.com/FinWiki repository)
- 提交：`c710bd4 docs: sync FinWiki knowledge base`
- 影响范围：全仓库初始同步。
- 时间线：
  - 08:56: 检查本地目录，确认当时还不是 git 仓库。
  - 08:56: 检查远端 `main`，确认远端已有初始提交 `ca4b9a8 Initial commit`。
  - 08:56: 临时克隆远端，确认远端只有 `README.md` 和 `LICENSE` 两个文件。
  - 08:58: 在本地目录初始化 git 仓库，设置 `origin` 为 `https://github.com/FinWiki repository.git`。
  - 08:58: 拉取并对齐 `origin/main`，保留远端原有 `README.md` 与 `LICENSE`。
  - 08:58: 新增 `.gitignore`，排除 `.DS_Store`、`.ruff_cache/`、`__pycache__/`、Python bytecode。
  - 08:58: 暂存本地 wiki 内容，形成 577 个新增文件。
  - 08:58: 执行严格密钥特征扫描，未发现 OpenAI key、AWS key、GitHub PAT、Slack token 或私钥块。
  - 08:58: 执行大文件检查，未发现超过 10MB 的文件。
  - 08:58: 尝试 `git diff --cached --check`，发现大量既有 Markdown 尾随空格。为避免把初始同步变成大规模格式改写，保留正文原貌。
  - 08:58: 提交 `c710bd4 docs: sync FinWiki knowledge base`，共 577 files changed、61602 insertions。
  - 08:59: 推送 `main` 到 GitHub，并设置本地 `main` 跟踪 `origin/main`。
  - 09:00: 验证远端 `refs/heads/main` 指向 `c710bd4f59a9f1c185f80cf35a73bbd64c04114c`。
- 验证结果：
  - 本地分支状态为 `main...origin/main`。
  - 远端 HEAD 与本地 HEAD 一致。
  - tracked 文件数为 579。
  - 本地没有未提交变更。
- 备注：初始同步阶段没有创建详细 `CHANGELOG.md`，本文件在 09:03 的维护规则固化中补建并补记该工作。

#### 日本語記録

- 背景: ローカルの `FinWiki` にあるナレッジベース全体を GitHub リポジトリ `FinWiki repository` に同期する必要があった。
- リモートリポジトリ: [FinWiki repository](https://github.com/FinWiki repository)
- コミット: `c710bd4 docs: sync FinWiki knowledge base`
- 影響範囲: リポジトリ全体の初回同期。
- タイムライン:
  - 08:56: ローカルディレクトリを確認し、その時点では git リポジトリではないことを確認。
  - 08:56: リモート `main` を確認し、初期コミット `ca4b9a8 Initial commit` が存在することを確認。
  - 08:56: リモートを一時 clone し、リモートには `README.md` と `LICENSE` の 2 ファイルのみ存在することを確認。
  - 08:58: ローカルディレクトリで git リポジトリを初期化し、`origin` を `https://github.com/FinWiki repository.git` に設定。
  - 08:58: `origin/main` を取得してローカルと揃え、リモート既存の `README.md` と `LICENSE` を保持。
  - 08:58: `.gitignore` を追加し、`.DS_Store`、`.ruff_cache/`、`__pycache__/`、Python bytecode を除外。
  - 08:58: ローカル wiki コンテンツを stage し、577 個の新規ファイルを追加対象にした。
  - 08:58: 厳格な秘密情報パターンスキャンを実行し、OpenAI key、AWS key、GitHub PAT、Slack token、秘密鍵ブロックは検出されなかった。
  - 08:58: 大容量ファイルチェックを実行し、10MB を超えるファイルは検出されなかった。
  - 08:58: `git diff --cached --check` を試行し、既存 Markdown に多数の trailing whitespace があることを確認。初回同期を大規模なフォーマット変更にしないため、本文の原形を保持。
  - 08:58: `c710bd4 docs: sync FinWiki knowledge base` としてコミット。結果は 577 files changed、61602 insertions。
  - 08:59: `main` を GitHub に push し、ローカル `main` が `origin/main` を track するよう設定。
  - 09:00: リモート `refs/heads/main` が `c710bd4f59a9f1c185f80cf35a73bbd64c04114c` を指していることを確認。
- 検証結果:
  - ローカルブランチ状態は `main...origin/main`。
  - リモート HEAD とローカル HEAD が一致。
  - tracked ファイル数は 579。
  - ローカルに未コミット変更はなし。
- 備考: 初回同期時点では詳細な `CHANGELOG.md` は未作成だったため、09:03 の運用ルール固定作業で本ファイルを作成し、この初回同期記録を追記した。

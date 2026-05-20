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

### 09:10 JST: GitHub Release 初回公開準備と release notes 明文化

#### 日本語記録

- 背景: ユーザーが GitHub の Releases 欄に `No releases published / Create a new release` と表示されていることを示し、release についても内容を非常に明確にし、日本語を先に置くよう指示した。
- 影響範囲: GitHub Releases 運用、README の release 方針、agent 向け運用ルール、初回 release notes。
- 主要ファイル:
  - `README.md`
  - `CHANGELOG.md`
  - `AGENTS.md`
  - `releases/v2026.05.20.md`
- タイムライン:
  - 09:10: `gh --version` と `gh auth status` を確認し、GitHub CLI が利用可能で、`repository-owner` アカウントが `repo` scope で認証済みであることを確認。
  - 09:10: `gh release list --repo FinWiki repository --limit 10` を実行し、既存 release がないことを確認。
  - 09:10: `README.md` に GitHub Releases セクションを追加し、FinWiki の release はソフトウェア配布ではなく知識ベース snapshot として扱うことを明記。
  - 09:10: release の言語順、タグ形式、title、body、記録元、初回 release 参照先を README に追加。
  - 09:10: `AGENTS.md` に GitHub Release の title/body も日本語先・中文後にし、公開範囲、主要変更、検証結果、既知の注意点、次の作業を書くルールを追加。
  - 09:10: `releases/v2026.05.20.md` を作成し、初回 release 用の日本語先・中文後の詳細 release notes を準備。
  - 09:10: `CHANGELOG.md` に本エントリーを追加し、release 未作成状態の確認、文書更新、release notes 作成、検証計画を記録。
- 検証予定:
  - `README.md` の release セクションが日本語側・中文側の両方に存在することを確認。
  - `releases/v2026.05.20.md` が日本語先・中文後であることを確認。
  - `git diff --cached --check` を実行し、新規文書の空白問題を確認。
  - コミット後に `origin/main` へ push。
  - `gh release create v2026.05.20 --title ... --notes-file releases/v2026.05.20.md` で初回 release を作成。
  - 作成後に `gh release view v2026.05.20 --repo FinWiki repository` と `gh release list` で公開状態を確認。
- 残タスク: 今後の重要 snapshot でも、release notes と changelog の両方を更新し、GitHub Releases ページが空洞化しないようにする。

#### 中文记录

- 背景：用户指出 GitHub Releases 区域显示 `No releases published / Create a new release`，并要求 release 也必须写得很清楚，日文放在前面。
- 影响范围：GitHub Releases 运维、README release 方针、agent 本地规则、首次 release notes。
- 主要文件：
  - `README.md`
  - `CHANGELOG.md`
  - `AGENTS.md`
  - `releases/v2026.05.20.md`
- 时间线：
  - 09:10: 检查 `gh --version` 与 `gh auth status`，确认 GitHub CLI 可用，且 `repository-owner` 账号已带 `repo` scope 登录。
  - 09:10: 执行 `gh release list --repo FinWiki repository --limit 10`，确认当前没有任何 release。
  - 09:10: 在 `README.md` 增加 GitHub Releases 章节，说明 FinWiki 的 release 不是软件包分发，而是知识库公开快照。
  - 09:10: 在 README 中补充 release 语言顺序、tag 格式、title、body、记录来源和初始 release 参考文件。
  - 09:10: 更新 `AGENTS.md`，明确 GitHub Release 的 title/body 也必须日文在前、中文在后，并写清楚发布范围、主要变更、验证结果、已知注意事项和下一步。
  - 09:10: 新增 `releases/v2026.05.20.md`，准备首次 release 用的日文优先、中文随后详细 release notes。
  - 09:10: 在 `CHANGELOG.md` 增加本条记录，记录 release 空状态确认、文档更新、release notes 准备和验证计划。
- 验证计划：
  - 确认 `README.md` 的日文和中文部分都包含 release 章节。
  - 确认 `releases/v2026.05.20.md` 是日文在前、中文在后。
  - 执行 `git diff --cached --check`，确认新增文档无尾随空格。
  - 提交后推送到 `origin/main`。
  - 使用 `gh release create v2026.05.20 --title ... --notes-file releases/v2026.05.20.md` 创建首次 release。
  - 创建后用 `gh release view v2026.05.20 --repo FinWiki repository` 与 `gh release list` 确认发布状态。
- 后续事项：以后重要快照都要同时更新 release notes 和 changelog，避免 GitHub Releases 页面再次变成空壳。

### 09:06 JST: README 日文优先与内容强化

#### 日本語記録

- 背景: ユーザーから、`README.md` では日本語を先に置くこと、絵文字を多めに使ってよいこと、既存 README の内容量が不足しているため詳細化することが明示された。
- 影響範囲: リポジトリ入口文書、agent 向け運用ルール、今後の README 更新方針。
- 主要ファイル:
  - `README.md`
  - `CHANGELOG.md`
  - `AGENTS.md`
- タイムライン:
  - 09:06: 既存 `README.md` を確認し、中国語セクションが先で、内容が概要・コンテンツマップ・運用ルール・同期フローの短い構成であることを確認。
  - 09:06: 既存 `CHANGELOG.md` を確認し、今回の README 方針変更も詳細記録の対象であると判断。
  - 09:06: `README.md` を全面的に拡張し、日本語を先、中文を後に再配置。
  - 09:06: README に絵文字付きの入口、コンテンツマップ、使用方法、エントリー構造、信頼度タグ、運用ルール、更新チェックリスト、推奨同期フローを追加。
  - 09:06: `AGENTS.md` に README は日本語先・中国語後、絵文字利用可というルールを追記し、今後の agent 作業でも維持されるようにした。
  - 09:06: `CHANGELOG.md` に本エントリーを追加し、ユーザー指定、対象ファイル、実行内容、検証予定を記録。
- 検証予定:
  - `README.md` の先頭が日本語セクションであることを確認。
  - `README.md`、`CHANGELOG.md`、`AGENTS.md` の staged diff を確認。
  - `git diff --cached --check` を実行し、新規文書に trailing whitespace がないことを確認。
  - コミット後に `origin/main` へ push し、リモート HEAD を確認。
- 残タスク: 今後 README に新しい領域や運用方針を追加する場合も、日本語先・中国語後の順序を維持する。

#### 中文记录

- 背景：用户明确要求 `README.md` 里面日文放在前面，可以大量使用 emoji，并指出当前 README 内容不够详细，需要加强。
- 影响范围：仓库入口文档、agent 本地维护规则、后续 README 更新方针。
- 主要文件：
  - `README.md`
  - `CHANGELOG.md`
  - `AGENTS.md`
- 时间线：
  - 09:06: 检查原 `README.md`，确认当时中文在前，内容主要是简短简介、内容地图、维护规则和同步流程。
  - 09:06: 检查原 `CHANGELOG.md`，确认本次 README 规则调整和内容强化属于需要详细记录的变更。
  - 09:06: 全面扩写 `README.md`，改为日文在前、中文在后。
  - 09:06: 在 README 中加入带 emoji 的入口导航、内容地图、使用方式、条目结构、可信度标签、维护规则、更新检查清单和推荐同步流程。
  - 09:06: 更新 `AGENTS.md`，加入 README 必须日文在前、中文在后，以及 README 可以使用较多 emoji 的本地规则，确保后续 agent 继续遵守。
  - 09:06: 在 `CHANGELOG.md` 添加本条记录，保留用户要求、影响文件、执行动作和验证计划。
- 验证计划：
  - 确认 `README.md` 顶部首先出现日文段落。
  - 检查 `README.md`、`CHANGELOG.md`、`AGENTS.md` 的 staged diff。
  - 执行 `git diff --cached --check`，确认新增文档没有尾随空格。
  - 提交后推送到 `origin/main`，并确认远端 HEAD。
- 后续事项：以后 README 新增领域或维护说明时，也要保持日文在前、中文在后的顺序。

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

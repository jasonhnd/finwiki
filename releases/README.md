# リリース状態台帳 / Release State Registry / 发布状态台账

## 日本語

この台帳は、`releases/v*.md`、Git tag、GitHub Release の関係を明示します。release note の basename と tag / GitHub Release の tag は同じ version を使います。

### 公開済み

- 下記の staging record を除く既存 `releases/v*.md` は、同名の Git tag と GitHub Release に一対一で対応します。
- `v2026.05.29` は GitHub Release body から repository note を復元し、tag / Release は変更していません。
- `v2026.07.28-9` は、2026-07-28 の `pre → main` catch-up promotion と同じ main merge commit を target にする統合 release です。
- `v2026.07.29` は、Issue #195 の entry-discovery build graph と cache invalidation 修復を公開する release です。

### 個別には公開しない staging record

次の note は `pre` で作成された作業単位の詳細記録です。個別 tag / GitHub Release は作成せず、`v2026.07.28-9` に包含します。

- `v2026.05.25`、`v2026.05.25-2`、`v2026.05.25-3`、`v2026.05.25-4`、`v2026.05.25-5`
- `v2026.06.22-1`
- `v2026.07.27`、`v2026.07.27-1`、`v2026.07.27-2`、`v2026.07.27-3`、`v2026.07.27-4`、`v2026.07.27-5`、`v2026.07.27-6`
- `v2026.07.28`、`v2026.07.28-1`、`v2026.07.28-2`、`v2026.07.28-3`、`v2026.07.28-4`、`v2026.07.28-5`、`v2026.07.28-6`、`v2026.07.28-7`、`v2026.07.28-8`

### 詳細履歴

2026-07-01 の i18n cutover で root `CHANGELOG.md` から外れた 6,127 行の旧詳細 timeline は、immutable Git history の [cutover 直前 CHANGELOG](https://github.com/jasonhnd/finwiki/blob/528c39e81be2faf3e7d17c1197da9a5569985e51/CHANGELOG.md) に保存されています。現行 CHANGELOG はこの archive link と cutover 後の詳細記録を維持します。

## English

This registry makes the relationship among `releases/v*.md`, Git tags, and GitHub Releases explicit. A published note uses the same version for its basename, Git tag, and GitHub Release tag.

### Published

- Every existing `releases/v*.md` except the staging records listed below maps one-to-one to a same-named Git tag and GitHub Release.
- The repository note for `v2026.05.29` was restored from the existing GitHub Release body; its tag and Release were not changed.
- `v2026.07.28-9` is the consolidated Release targeting the same main merge commit as the 2026-07-28 `pre → main` catch-up promotion.
- `v2026.07.29` publishes the entry-discovery build graph and cache-invalidation repair from Issue #195.

### Staging records not published individually

The following notes are detailed work-unit records created on `pre`. They intentionally receive no individual tag or GitHub Release and are incorporated into `v2026.07.28-9`.

- `v2026.05.25`, `v2026.05.25-2`, `v2026.05.25-3`, `v2026.05.25-4`, `v2026.05.25-5`
- `v2026.06.22-1`
- `v2026.07.27`, `v2026.07.27-1`, `v2026.07.27-2`, `v2026.07.27-3`, `v2026.07.27-4`, `v2026.07.27-5`, `v2026.07.27-6`
- `v2026.07.28`, `v2026.07.28-1`, `v2026.07.28-2`, `v2026.07.28-3`, `v2026.07.28-4`, `v2026.07.28-5`, `v2026.07.28-6`, `v2026.07.28-7`, `v2026.07.28-8`

### Detailed history

The 6,127-line detailed timeline removed from the root `CHANGELOG.md` during the 2026-07-01 i18n cutover remains preserved in immutable Git history at the [pre-cutover CHANGELOG](https://github.com/jasonhnd/finwiki/blob/528c39e81be2faf3e7d17c1197da9a5569985e51/CHANGELOG.md). The current CHANGELOG retains this archive link and detailed records from the cutover forward.

## 中文

本台账明确 `releases/v*.md`、Git tag 与 GitHub Release 的关系。已发布 note 的文件 basename、Git tag 与 GitHub Release tag 使用同一个版本号。

### 已发布

- 除下列 staging record 外，既有 `releases/v*.md` 都与同名 Git tag、GitHub Release 一一对应。
- `v2026.05.29` 的仓库 note 已从现有 GitHub Release body 恢复；没有修改其 tag 或 Release。
- `v2026.07.28-9` 是 2026-07-28 `pre → main` catch-up promotion 的整合 Release，target 与该 main merge commit 相同。
- `v2026.07.29` 发布 Issue #195 的 entry-discovery build graph 与 cache invalidation 修复。

### 不单独发布的 staging record

下列 note 是在 `pre` 上形成的详细工作单元记录；它们有意不建立独立 tag 或 GitHub Release，而是统一纳入 `v2026.07.28-9`。

- `v2026.05.25`、`v2026.05.25-2`、`v2026.05.25-3`、`v2026.05.25-4`、`v2026.05.25-5`
- `v2026.06.22-1`
- `v2026.07.27`、`v2026.07.27-1`、`v2026.07.27-2`、`v2026.07.27-3`、`v2026.07.27-4`、`v2026.07.27-5`、`v2026.07.27-6`
- `v2026.07.28`、`v2026.07.28-1`、`v2026.07.28-2`、`v2026.07.28-3`、`v2026.07.28-4`、`v2026.07.28-5`、`v2026.07.28-6`、`v2026.07.28-7`、`v2026.07.28-8`

### 详细历史

2026-07-01 i18n cutover 时从 root `CHANGELOG.md` 移除的 6,127 行详细 timeline，仍保存在不可变 Git history 的 [cutover 前 CHANGELOG](https://github.com/jasonhnd/finwiki/blob/528c39e81be2faf3e7d17c1197da9a5569985e51/CHANGELOG.md) 中。当前 CHANGELOG 保留此 archive link，并继续维护 cutover 之后的详细记录。

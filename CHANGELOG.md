# CHANGELOG

## Maintenance Principles

### 日本語

- 本ファイルは `README.md` と同様に、日本語、英語、中国語を同時に維持します。
- 説明と作業記録は、日本語を先に置き、次に英語、その後に中国語を置きます。
- 重要な作業ごとに、短い要約だけでなく詳細なタイムラインを残します。
- 各記録には、可能な限り JST 時刻、背景、影響範囲、主要ファイルまたはディレクトリ、実行手順、検証結果、残タスクを含めます。
- 本リポジトリ本文には公開インターネット情報、公的資料、公開開示、または公開情報に基づく分析のみを残します。

### English

- This file, like `README.md`, is maintained in Japanese, English, and Chinese together.
- Explanatory text and work records put Japanese first, English second, and Chinese third.
- Important work must leave a detailed timeline rather than only a short summary.
- Each record should include JST time, background, scope, main files or directories, execution steps, validation results, and follow-up items whenever possible.
- Body content in this repository is limited to public internet information, official materials, public disclosures, or analysis based on public sources.

### 中文

- 本文件与 `README.md` 一样，必须同时维护日文、英文和中文。
- 说明与工作记录必须按日文在前、英文在中、中文在后的顺序排列。
- 重要工作必须保留详细时间线，不能只写简短概述。
- 每条记录应尽可能包含 JST 时间、背景、范围、主要文件或目录、执行步骤、验证结果与后续事项。
- 本仓库正文只允许使用互联网公开信息、官方资料、公开披露或基于公开来源的分析。

## 2026-07-27 - Astro dependency security update and audit gate (#186)

### 日本語

- **2026-07-27 15:53:57 JST / 背景:** Issue #186。`site/bun.lock` の production dependency tree に 4 high / 2 moderate の advisory が残り、通常の build pipeline は frozen lockfile と vulnerability audit を強制していなかったため、安全な解決結果が将来の install で再現されない、または新規 advisory が継続的に見えない状態だった。
- **範囲:** `site/package.json` と `site/bun.lock`、root dependency-audit script、GitHub Pages / Vercel build、pull request / `pre` / `main` / weekly dependency-audit workflow、本 CHANGELOG、三言語 release note、README / root homepage と生成 public snapshot。Bun runtime pin は Issue #184、TypeScript / typecheck は Issue #185 の別 scope とした。
- **主要ファイル:** `site/package.json`、`site/bun.lock`、`package.json`、`.github/workflows/deploy.yml`、`.github/workflows/dependency-audit.yml`、`tools/vercel_build.ts`、`releases/v2026.07.27-2.md`、`README.md`、`index.html` と AI / crawler discovery surface。
- **実行手順:** `astro` 7.1.3、`@astrojs/markdown-satteri` 0.3.4、`satteri` 0.9.5 へ直接依存を更新し、fresh lockfile を生成。`js-yaml` 4.3.0、`postcss` 8.5.23、`sharp` 0.35.3、`svgo` 4.0.2 を含む安全な transitive tree を固定した。site install を `--frozen-lockfile` にし、local script、Pages、Vercel、PR / branch push / weekly schedule へ `bun audit --production` を追加した。
- **検証結果:** `bun audit --production` は production vulnerability 0 件。`bun install --frozen-lockfile --ignore-scripts` は lockfile を変更せず 197 installs / 299 packages を確認。`bun tools/vercel_build.ts` は link audit（1,489 entries、issues=0、canonical drift=0）、strict release check、dependency audit、publish tests 7/7、Astro 7.1.3 build（2,969 pages）、duplicate HTML ID check（0）、Pagefind（ja/en 2,968 pages）、assembly（Astro 6,258 files + raw 3,060 files）を通過。release-document / docs-link / active-doc-stale / generated-surface / txt-route / i18n / index-count / wiki-link / workflow YAML / `git diff --check` も PASS。
- **既知の注意点:** dependency-audit workflow の `bun-version: latest` は Issue #184 が repository-wide pin を導入するまで維持する。#186 branch は PR #197 の commit に一時的に積み重ねており、PR #197 が `pre` へ merge されるまでは重複 PR を開かない。
- **次の作業:** ローカル実装と validation は完了。PR #197 merge 後に最新 `pre` へ重ね直して #186 PR を開き、review / CI を待つ。self-merge / self-close はせず、`main` publish と GitHub Release は承認済み promotion 時だけ行う。

### English

- **2026-07-27 15:53:57 JST / Background:** Issue #186. The production tree in `site/bun.lock` retained four high and two moderate advisories, while the normal build pipelines enforced neither a frozen lockfile nor a vulnerability audit. A safe resolution therefore was not guaranteed to reproduce on later installs, and future advisories would not surface continuously.
- **Scope:** `site/package.json` and `site/bun.lock`, the root dependency-audit script, GitHub Pages / Vercel builds, a pull-request / `pre` / `main` / weekly dependency-audit workflow, this CHANGELOG, the trilingual release note, README / root homepage, and generated public snapshot. Bun runtime pinning remains Issue #184; TypeScript / typecheck remains Issue #185.
- **Primary files:** `site/package.json`, `site/bun.lock`, `package.json`, `.github/workflows/deploy.yml`, `.github/workflows/dependency-audit.yml`, `tools/vercel_build.ts`, `releases/v2026.07.27-2.md`, `README.md`, `index.html`, and the AI / crawler discovery surfaces.
- **Steps:** Upgraded the direct dependencies to Astro 7.1.3, `@astrojs/markdown-satteri` 0.3.4, and Satteri 0.9.5, then generated a fresh lockfile. Locked a secure transitive tree including `js-yaml` 4.3.0, `postcss` 8.5.23, `sharp` 0.35.3, and `svgo` 4.0.2. Switched site installation to `--frozen-lockfile` and added `bun audit --production` to a local script, Pages, Vercel, pull-request / branch-push, and weekly scheduled paths.
- **Validation:** `bun audit --production` reported zero production vulnerabilities. `bun install --frozen-lockfile --ignore-scripts` verified 197 installs / 299 packages without changing the lockfile. `bun tools/vercel_build.ts` passed the link audit (1,489 entries, issues=0, canonical drift=0), strict release check, dependency audit, publish tests (7/7), Astro 7.1.3 build (2,969 pages), duplicate HTML ID check (0), Pagefind (2,968 ja/en pages), and assembly (6,258 Astro files plus 3,060 raw files). The release-document, docs-link, active-doc-stale, generated-surface, txt-route, i18n, index-count, wiki-link, workflow-YAML, and `git diff --check` gates also passed.
- **Known notes:** The dependency-audit workflow keeps `bun-version: latest` until Issue #184 introduces the repository-wide pin. The #186 branch is temporarily stacked on the PR #197 commit, so no duplicate PR will be opened until PR #197 merges into `pre`.
- **Next steps:** Local implementation and validation are complete. After PR #197 merges, replay onto the latest `pre`, open the #186 PR, and wait for review/CI. Do not self-merge or self-close; publish to `main` and create the GitHub Release only during an approved promotion.

### 中文

- **2026-07-27 15:53:57 JST / 背景:** Issue #186。`site/bun.lock` 的 production dependency tree 仍有 4 个 high 与 2 个 moderate advisory，而常规 build pipeline 既没有强制 frozen lockfile，也没有执行 vulnerability audit，因此安全解析结果无法保证在后续安装中复现，新 advisory 也不会持续暴露。
- **范围:** `site/package.json` 与 `site/bun.lock`、root dependency-audit script、GitHub Pages / Vercel build、pull request / `pre` / `main` / weekly dependency-audit workflow、本 CHANGELOG、三语 release note、README / 根首页与生成的 public snapshot。Bun runtime 固定仍属于 Issue #184，TypeScript / typecheck 仍属于 Issue #185。
- **主要文件:** `site/package.json`、`site/bun.lock`、`package.json`、`.github/workflows/deploy.yml`、`.github/workflows/dependency-audit.yml`、`tools/vercel_build.ts`、`releases/v2026.07.27-2.md`、`README.md`、`index.html` 与 AI / crawler discovery surface。
- **执行步骤:** 将直接依赖升级到 Astro 7.1.3、`@astrojs/markdown-satteri` 0.3.4 和 Satteri 0.9.5，并生成 fresh lockfile；固定包含 `js-yaml` 4.3.0、`postcss` 8.5.23、`sharp` 0.35.3 与 `svgo` 4.0.2 的安全传递依赖树。site 安装改为 `--frozen-lockfile`，并把 `bun audit --production` 接入本地 script、Pages、Vercel、PR / branch push 与 weekly schedule。
- **验证结果:** `bun audit --production` 报告 production vulnerability 为 0。`bun install --frozen-lockfile --ignore-scripts` 在不修改 lockfile 的情况下确认 197 installs / 299 packages。`bun tools/vercel_build.ts` 已通过 link audit（1,489 entries、issues=0、canonical drift=0）、strict release check、dependency audit、publish tests 7/7、Astro 7.1.3 build（2,969 pages）、duplicate HTML ID check（0）、Pagefind（ja/en 共 2,968 pages）与 assembly（6,258 个 Astro files + 3,060 个 raw files）。release-document、docs-link、active-doc-stale、generated-surface、txt-route、i18n、index-count、wiki-link、workflow YAML 与 `git diff --check` 门禁也全部通过。
- **已知注意事项:** dependency-audit workflow 的 `bun-version: latest` 将保留到 Issue #184 引入全仓库版本固定。#186 branch 临时叠加在 PR #197 commit 上，因此 PR #197 合并进 `pre` 前不会创建重复 PR。
- **下一步:** 本地实现与 validation 已完成；PR #197 merge 后重放到最新 `pre`，创建 #186 PR 并等待 review / CI。不得 self-merge / self-close；只有经批准 promotion 时才发布到 `main` 并创建 GitHub Release。

## 2026-07-27 - Static publish allowlist and destructive-output guard (#177)

### 日本語

- **2026-07-27 10:49:39 JST / 背景:** Issue #177。従来の `tools/assemble_static_publish.ts` は repo root を denylist で走査していたため、`docs/`、`lib/`、`AGENTS.md`、package / deployment config、ignored file、未知の root file が静的公開物へ混入し得た。また、`--out` を検証せずに `rm(..., recursive: true)` へ渡していたため、repo root や親ディレクトリを指定できる危険があった。
- **範囲:** static assembler と focused tests、root package script、GitHub Pages / Vercel build pipeline、NFR / ARD / FSD / RTM / QA / deployment runbook、三言語 README の公開入口契約、本 CHANGELOG、release note、生成 public snapshot。wiki entry の事実本文と人間向け site locale は変更していない。
- **主要ファイル:** `tools/assemble_static_publish.ts`、`tools/assemble_static_publish.test.ts`、`tools/vercel_build.ts`、`.github/workflows/deploy.yml`、`package.json`、`docs/03-requirements/`、`docs/04-architecture/`、`docs/05-functional-specs/`、`docs/07-quality/`、`docs/08-operations/deployment-runbook.md`、`README.md`、`releases/v2026.07.27-1.md` と release generator の出力。
- **実行手順:** repo-root denylist copy を削除し、`ai-index.json` と `api/entries/index.json` を reviewable manifest として使用。root reader docs / AI surface の明示 allowlist、`INDEX.md` の domain map に含まれる Markdown、release note、indexed API JSON のみを選択した。出力を direct child の `_site` / `_vercel_public` に限定し、Astro / raw source / output の path、file type、hidden file、symlink をすべて recursive delete より前に検証した。Pages と Vercel の両 pipeline に `bun run publish:test` を追加した。
- **検証結果:** `bun tools/vercel_build.ts` は link audit（1,489 entries、issues=0、canonical drift=0）、strict release check、focused publish tests、Astro build（2,969 pages）、duplicate HTML ID check（0）、Pagefind（ja/en 2,968 pages）、assembly を通過。`_vercel_public` は Astro 6,258 files + allowlisted raw 3,059 files。11 個の必須 route / raw path は存在し、`docs/`、`lib/`、`tools/`、`AGENTS.md`、package / Vercel config、`.DS_Store`、`.delivery.yml`、未知の root docs を含む 12 個の forbidden path、追加 hidden file、symlink はすべて 0。危険な `--out .` は delete 前に exit 1 となり README は保持された。最終的に publish tests 7/7、release-document / docs-link / active-doc-stale / generated-surface / txt-route / i18n / index-count / wiki-link / strict release / `git diff --check` も PASS。
- **既知の注意点:** この branch は Issue #187 の commit に一時的に積み重ねている。PR #196 が `pre` へ merge されるまでは #177 の PR を開かない。AI discovery URL の route 整合性は Issue #179 の別 scope であり、本修正は URL 意味論を変更しない。
- **次の作業:** ローカル実装と検証は完了。PR #196 の merge を待ち、最新 `pre` へ重ね直して #177 の PR を開き、review / CI を待つ。self-merge / self-close はせず、`main` publish と GitHub Release は承認済み promotion 時だけ行う。

### English

- **2026-07-27 10:49:39 JST / Background:** Issue #177. The old `tools/assemble_static_publish.ts` walked the repository root behind a denylist, so `docs/`, `lib/`, `AGENTS.md`, package/deployment configuration, ignored files, and unknown root files could enter the static artifact. It also passed an unchecked `--out` to recursive removal, allowing a repository-root or parent-directory target.
- **Scope:** The static assembler and focused tests, root package script, GitHub Pages / Vercel build pipelines, NFR / ARD / FSD / RTM / QA / deployment runbook, the trilingual README public-entry contract, this CHANGELOG, release note, and generated public snapshot. No factual wiki-entry body or human-site locale changed.
- **Primary files:** `tools/assemble_static_publish.ts`, `tools/assemble_static_publish.test.ts`, `tools/vercel_build.ts`, `.github/workflows/deploy.yml`, `package.json`, the requirement/architecture/spec/quality/operations docs, `README.md`, `releases/v2026.07.27-1.md`, and release-generator outputs.
- **Steps:** Removed the repository-root denylist copy and used `ai-index.json` plus `api/entries/index.json` as reviewable manifests. Selection is limited to an explicit root reader-doc / AI-surface allowlist, Markdown under domains declared by the `INDEX.md` domain map, release notes, and indexed API JSON. Restricted output to the direct-child `_site` / `_vercel_public` locations and validated Astro/raw sources, path, file type, hidden entries, and symlinks before recursive deletion. Added `bun run publish:test` to both Pages and Vercel pipelines.
- **Validation:** `bun tools/vercel_build.ts` passed the link audit (1,489 entries, issues=0, canonical drift=0), strict release check, focused publish tests, Astro build (2,969 pages), duplicate HTML ID check (0), Pagefind (2,968 ja/en pages), and assembly. `_vercel_public` contains 6,258 Astro files plus 3,059 allowlisted raw files. All 11 required route/raw paths were present; 12 forbidden paths covering `docs/`, `lib/`, `tools/`, `AGENTS.md`, package/Vercel config, `.DS_Store`, `.delivery.yml`, and unknown root docs were absent, with zero extra hidden files and zero symlinks. Unsafe `--out .` exited 1 before deletion and preserved README. Final publish tests passed 7/7, as did the release-document, docs-link, active-doc-stale, generated-surface, txt-route, i18n, index-count, wiki-link, strict-release, and `git diff --check` gates.
- **Known notes:** This branch is temporarily stacked on the Issue #187 commit. No #177 PR will be opened until PR #196 merges into `pre`. AI discovery URL/route alignment remains the separate scope of Issue #179; this change does not alter URL semantics.
- **Next steps:** Local implementation and validation are complete. Wait for PR #196, replay onto the latest `pre`, open the #177 PR, and wait for review/CI. Do not self-merge or self-close; publish to `main` and create the GitHub Release only during an approved promotion.

### 中文

- **2026-07-27 10:49:39 JST / 背景:** Issue #177。旧版 `tools/assemble_static_publish.ts` 以 denylist 遍历仓库根目录，因此 `docs/`、`lib/`、`AGENTS.md`、package / deployment config、ignored file 和未知 root file 都可能进入静态发布物；同时，未经检查的 `--out` 会直接传给递归删除，可能把仓库根目录或父目录作为目标。
- **范围:** static assembler 与聚焦测试、root package script、GitHub Pages / Vercel build pipeline、NFR / ARD / FSD / RTM / QA / deployment runbook、三语 README 的公开入口契约、本 CHANGELOG、release note 和生成的 public snapshot。不修改 wiki entry 事实正文，也不改变人类站点 locale。
- **主要文件:** `tools/assemble_static_publish.ts`、`tools/assemble_static_publish.test.ts`、`tools/vercel_build.ts`、`.github/workflows/deploy.yml`、`package.json`、requirements / architecture / specs / quality / operations 文档、`README.md`、`releases/v2026.07.27-1.md` 与 release generator 输出。
- **执行步骤:** 删除 repo-root denylist copy，改用 `ai-index.json` 与 `api/entries/index.json` 作为可审查 manifest；只选择显式 root reader-doc / AI-surface allowlist、`INDEX.md` domain map 声明领域中的 Markdown、release note 与 indexed API JSON。输出只允许仓库直属的 `_site` / `_vercel_public`，并在递归删除前完成 Astro/raw source、路径、文件类型、hidden entry 与 symlink 检查。Pages 与 Vercel 两条 pipeline 都新增 `bun run publish:test`。
- **验证结果:** `bun tools/vercel_build.ts` 已通过 link audit（1,489 entries、issues=0、canonical drift=0）、strict release check、聚焦 publish tests、Astro build（2,969 pages）、duplicate HTML ID check（0）、Pagefind（ja/en 共 2,968 pages）与 assembly。`_vercel_public` 包含 6,258 个 Astro 文件和 3,059 个白名单 raw 文件；11 个必需 route / raw path 全部存在，覆盖 `docs/`、`lib/`、`tools/`、`AGENTS.md`、package / Vercel config、`.DS_Store`、`.delivery.yml` 与未知 root docs 的 12 个 forbidden path 全部不存在，额外 hidden file 与 symlink 均为 0。危险的 `--out .` 在删除前以 exit 1 失败，README 保持完好。最终 publish tests 7/7，并且 release-document、docs-link、active-doc-stale、generated-surface、txt-route、i18n、index-count、wiki-link、strict release 与 `git diff --check` 门禁全部 PASS。
- **已知注意事项:** 当前 branch 临时叠加在 Issue #187 commit 上；PR #196 合并进 `pre` 前不会创建 #177 PR。AI discovery URL 与实际 route 对齐仍属于 Issue #179，本修复不改变 URL 语义。
- **下一步:** 本地实现与验证已经完成。等待 PR #196，随后重放到最新 `pre`，创建 #177 PR 并等待 review / CI。不得 self-merge / self-close；只有经批准 promotion 时才发布到 `main` 并创建 GitHub Release。

## 2026-07-27 - Trilingual release-document governance gate (#187)

### 日本語

- **2026-07-27 00:58:10 JST / 背景:** Issue #187。root `AGENTS.md` は README、CHANGELOG、release note、GitHub Release body の日本語・英語・中国語同時維持を要求していたが、現行文書と release tooling は日英二言語のままで、strict gate も言語順序や必須項目を検証していなかった。
- **範囲:** `README.md` と `CHANGELOG.md` の三言語化、BRD / PRD / ARD / FSD / NFR / RTM / QA / release runbook の契約同期、`tools/release_documentation_audit.ts` と focused test の追加、`tools/release.ts` への pre-mutation gate と三言語 scaffold / metric 同期の統合、`tools/generate_ai_discovery.ts` の中国語・三言語 governance text filter 撤去、release note と generated discovery surface の同期。
- **非対象:** 人間向けサイトの locale は `ja` / `en` のまま維持する。中国語 route や mirror を再導入せず、wiki entry の事実本文も変更しない。
- **実行手順:** `pre` から issue 専用 worktree を作成。2026-07-27 以降の release note に日本語のみの H1、`日本語 -> English -> 中文`、各言語 5 必須節を要求し、それ以前の履歴は grandfather 対象とした。正例・欠落・順序違反・非日本語 / 混在 title・必須節欠落の test を追加し、root control docs、active developer docs、生成器、release surface を同じ契約へ揃えた。
- **検証結果:** `bun test tools/release_documentation_audit.test.ts` は 10 tests PASS。`bun run release:docs`、tooling bundle、`bun tools/release.ts --check --strict`、`bun run docs:audit`、`bun run docs:stale`、`bun run surface:drift`、`bun run ai:audit`、`bun run i18n:status`（ja/en 各 1442 current、stale / orphaned / missing 0）、`bun run wiki:audit:ci`（issues=0、canonical drift=0）、`bun run index:counts`、Astro build（2969 pages）、Pagefind（ja/en 2968 pages）、`bun run html:check`（duplicate IDs 0）、`git diff --check` は PASS。日英混在 title の integration negative check は draft を落盤せず EXIT=2。
- **既知の注意点:** 2026-07-27 より前の release note は公開履歴として自動 gate の対象外にする。過去の CHANGELOG / tag / GitHub Release の欠落復元は Issue #188 の範囲であり、本変更では履歴を書き換えない。GitHub Release は `main` への publish 時に作成・更新する。
- **次の作業:** 検証結果を確定し、`pre` 向け PR を開いて maintainer review を待つ。merge 後に依存する Issue #177 の静的 publish 修復へ進む。self-merge / self-close はしない。

### English

- **2026-07-27 00:58:10 JST / Background:** Issue #187. Root `AGENTS.md` required README, CHANGELOG, release notes, and GitHub Release bodies to be maintained in Japanese, English, and Chinese, while the active documents and release tooling still enforced only Japanese and English and the strict gate did not validate language order or required sections.
- **Scope:** Make `README.md` and `CHANGELOG.md` trilingual; align BRD / PRD / ARD / FSD / NFR / RTM / QA / release runbooks; add `tools/release_documentation_audit.ts` and focused tests; integrate a pre-mutation gate, trilingual scaffolding, and language-aware metric sync into `tools/release.ts`; remove the Chinese / trilingual governance-text filter from `tools/generate_ai_discovery.ts`; and synchronize the release note and generated discovery surfaces.
- **Out of scope:** The human-site locales remain `ja` / `en`. This change does not restore Chinese routes or mirrors and does not edit factual wiki-entry bodies.
- **Steps:** Created an issue-specific worktree from `pre`. Required post-2026-07-27 release notes to use a Japanese-only H1, `日本語 -> English -> 中文`, and five mandatory subsections per language, while grandfathering older history. Added positive, missing, reordered, non-Japanese / mixed-title, and missing-subsection tests, then aligned root control docs, active developer docs, generator behavior, and release surfaces with the contract.
- **Validation:** `bun test tools/release_documentation_audit.test.ts` passed all 10 tests. Tooling bundles, `bun run release:docs`, `bun tools/release.ts --check --strict`, `bun run docs:audit`, `bun run docs:stale`, `bun run surface:drift`, `bun run ai:audit`, `bun run i18n:status` (1,442 current ja/en mirrors each; stale / orphaned / missing 0), `bun run wiki:audit:ci` (issues=0, canonical drift=0), `bun run index:counts`, the Astro build (2,969 pages), Pagefind (2,968 ja/en pages), `bun run html:check` (0 duplicate IDs), and `git diff --check` passed. An integration negative check rejected a mixed Japanese/English title with exit 2 before writing a draft.
- **Known notes:** Release notes before 2026-07-27 are excluded from the automated contract gate as public history. Restoring missing historical CHANGELOG / tag / GitHub Release evidence belongs to Issue #188, so this change does not rewrite that history. The GitHub Release will be created or updated only when publishing to `main`.
- **Next steps:** Finalize validation evidence, open a PR into `pre`, and wait for maintainer review. After merge, proceed to the dependent static-publish repair in Issue #177. Do not self-merge or self-close.

### 中文

- **2026-07-27 00:58:10 JST / 背景:** Issue #187。根目录 `AGENTS.md` 要求 README、CHANGELOG、release note 与 GitHub Release body 同时维护日文、英文和中文，但当前文档与 release tooling 仍只执行日英双语，strict gate 也没有检查语言顺序或必填小节。
- **范围:** 将 `README.md` 与 `CHANGELOG.md` 改为三语；同步 BRD / PRD / ARD / FSD / NFR / RTM / QA / release runbook；新增 `tools/release_documentation_audit.ts` 与聚焦测试；把写入前门禁、三语 scaffold 和按语言同步指标的逻辑接入 `tools/release.ts`；移除 `tools/generate_ai_discovery.ts` 对中文及三语治理文本的过滤；同步 release note 与生成的 discovery surface。
- **非范围:** 人类站点 locale 继续只使用 `ja` / `en`。本次不恢复中文 route 或 mirror，也不修改 wiki entry 的事实正文。
- **执行步骤:** 从 `pre` 创建 issue 专用 worktree。对 2026-07-27 及以后的 release note 强制要求仅日文 H1、`日本語 -> English -> 中文` 顺序，以及每种语言的 5 个必填小节；更早的历史记录 grandfather。增加正常、缺失、错序、非日文 / 混合标题和必填小节缺失测试，并让根控制文档、active developer docs、生成器与 release surface 使用同一契约。
- **验证结果:** `bun test tools/release_documentation_audit.test.ts` 的 10 个测试全部 PASS。tooling bundle、`bun run release:docs`、`bun tools/release.ts --check --strict`、`bun run docs:audit`、`bun run docs:stale`、`bun run surface:drift`、`bun run ai:audit`、`bun run i18n:status`（ja/en 各 1442 个 current，stale / orphaned / missing 均为 0）、`bun run wiki:audit:ci`（issues=0、canonical drift=0）、`bun run index:counts`、Astro build（2969 pages）、Pagefind（ja/en 2968 pages）、`bun run html:check`（duplicate IDs 0）与 `git diff --check` 均 PASS。integration negative check 在落盘前以 EXIT=2 拒绝日英混合标题。
- **已知注意事项:** 2026-07-27 以前的 release note 作为公开历史，不纳入自动契约门禁。补回历史 CHANGELOG / tag / GitHub Release 证据属于 Issue #188，本次不重写历史。GitHub Release 只在发布到 `main` 时创建或更新。
- **下一步:** 确认最终验证证据，创建目标为 `pre` 的 PR 并等待 maintainer review；merge 后进入依赖本修复的 Issue #177 静态发布修复。不得 self-merge / self-close。

## 2026-07-15 - Hygiene wave: agent-economy count + stale docs + ROADMAP exclusion (#175)

### 日本語

- **2026-07-15 00:21:45 JST / 背景:** Issue #175。2026-07-12 の read-only health check で見つかった hygiene 項目を一波で解消する。#174 の agent-economy 6 件追加後に `INDEX.md` の domain map が未同期のまま残り、`index:counts` / `docs:stale` / ローカル pre-push が FAIL していた。
- **範囲:** `INDEX.md` の `agent-economy` 宣言 count（40 → 46）、`docs/04-architecture/astro-5-to-7-upgrade-plan.md` と `docs/04-architecture/satteri-pipeline-port-plan.md` の stale 実装記述 3 箇所、`tools/wiki_link_audit.ts` の `CONTROL_DOCS` に `ROADMAP.md` を追加、`bun tools/release.ts --write` による README 文字数同期と生成 surface 更新。
- **非対象:** wiki entry 本文は変更しない。i18n mirror も触らない。
- **実行手順:** domain map を actual entries に合わせて修正。stale scan が指摘した old-site-mirror / python-postbuild 記述を現行の root corpus + `site/src/content/i18n/{ja,en}/` と Satteri-native Bun/TypeScript pipeline に合わせて書き換え。loopcoder scaffold の gitignored `ROADMAP.md` を link audit から除外。最後に `release:write` を 1 回実行。
- **検証結果:** `bun run index:counts` PASS、`bun run docs:stale` PASS、scaffold `ROADMAP.md` 存在下で `bun tools/wiki_link_audit.ts --fail-on-issues` PASS、`bun tools/release.ts --check --strict` PASS。
- **残タスク:** PR を `pre` 向けに開き、review と merge を待つ。self-merge / self-close はしない。

### English

- **2026-07-15 00:21:45 JST / Background:** Issue #175. One hygiene wave for the 2026-07-12 read-only health-check findings. After the #174 agent-economy six-entry wave, the `INDEX.md` domain map stayed unsynced and `index:counts` / `docs:stale` / local pre-push remained red.
- **Scope:** `INDEX.md` `agent-economy` declared count (40 → 46), three stale implementation claims in `docs/04-architecture/astro-5-to-7-upgrade-plan.md` and `docs/04-architecture/satteri-pipeline-port-plan.md`, add `ROADMAP.md` to `CONTROL_DOCS` in `tools/wiki_link_audit.ts`, and one `bun tools/release.ts --write` pass for README char-count sync and generated surfaces.
- **Out of scope:** No wiki entry body edits. No i18n mirror edits.
- **Steps:** Aligned the domain map with actual entry counts. Reworded the stale old-site-mirror / python-postbuild claims to the current root corpus + `site/src/content/i18n/{ja,en}/` and Satteri-native Bun/TypeScript pipeline. Excluded the loopcoder-scaffolded gitignored `ROADMAP.md` from the link audit. Ran `release:write` once at the end.
- **Validation:** `bun run index:counts` PASS, `bun run docs:stale` PASS, `bun tools/wiki_link_audit.ts --fail-on-issues` PASS with a scaffold `ROADMAP.md` present, and `bun tools/release.ts --check --strict` PASS.
- **Follow-up:** Open the PR into `pre` and wait for review and merge. Do not self-merge or self-close.

### 中文

- **2026-07-15 00:21:45 JST / 背景:** Issue #175。集中处理 2026-07-12 只读健康检查发现的 hygiene 项。#174 新增 6 条 agent-economy 内容后，`INDEX.md` 的 domain map 未同步，导致 `index:counts`、`docs:stale` 与本地 pre-push 持续失败。
- **范围:** 将 `INDEX.md` 的 `agent-economy` 声明数量从 40 调整为 46；修正 `docs/04-architecture/astro-5-to-7-upgrade-plan.md` 与 `docs/04-architecture/satteri-pipeline-port-plan.md` 中 3 处过时实现描述；把 `ROADMAP.md` 加入 `tools/wiki_link_audit.ts` 的 `CONTROL_DOCS`；执行一次 `bun tools/release.ts --write` 同步 README 字符数与生成 surface。
- **非范围:** 不修改 wiki entry 正文，也不修改 i18n mirror。
- **执行步骤:** 让 domain map 与实际 entry 数量一致；把 stale scan 指出的 old-site-mirror / python-postbuild 描述更新为当前 root corpus + `site/src/content/i18n/{ja,en}/` 与 Satteri 原生 Bun/TypeScript pipeline；从 link audit 中排除 loopcoder scaffold 生成且被 gitignore 的 `ROADMAP.md`；最后执行一次 `release:write`。
- **验证结果:** `bun run index:counts` PASS；在 scaffold `ROADMAP.md` 存在时，`bun run docs:stale`、`bun tools/wiki_link_audit.ts --fail-on-issues` 与 `bun tools/release.ts --check --strict` 均 PASS。
- **后续事项:** 创建目标为 `pre` 的 PR，等待 review 与 merge。不得 self-merge / self-close。

## 2026-07-01 - i18n bilingual site cutover (#126)

### 日本語

- **2026-07-01 18:57:08 JST / 背景:** Issue #126 に従い、公開サイトの i18n model を日本語 source + English mirror の bilingual 構成へ移行する。退役 locale の mirror corpus と route family は削除し、旧 locale URL には redirect や stub を置かない。
- **範囲:** 退役 locale mirror corpus の削除、`site/src/i18n` の language source-of-truth、translation scripts、i18n status / stale classifier / link remap / release tooling、Astro route / layout / switcher、root homepage、README / INDEX / CHANGELOG / AI discovery surfaces。
- **非対象:** root Japanese source corpus と existing Japanese / English mirror corpus は編集しない。design tokens、`docs/**`、`CONTRIBUTING.md` も変更しない。
- **実行手順:** i18n architecture と ADR-010 を確認し、退役 mirror corpus を `git rm` で削除。`langCodes`、`languages`、`Lang`、domain / group labels、root editorial config を ja/en に縮約。translation pipeline と post-build wikilink localization を English mirror 専用へ変更。root homepage と README / CHANGELOG を bilingual へ更新し、generator を ja/en 前提へ修正。
- **検証結果:** `bun tools/release.ts --check --strict`、`bun run i18n:status`、`bun run docs:audit`、`bun run wiki:audit:ci`、`cd site && bun install && bun run build`、`bun run html:check`、`git diff --check` はすべて PASS。build output は `/ja/` と `/en/` の route family のみを生成し、retired locale directory / route residue scan も PASS。
- **残タスク:** PR を `pre` 向けに開き、review と merge を待つ。self-merge / self-close はしない。

### English

- **2026-07-01 18:57:08 JST / Background:** Per issue #126, the public site i18n model moves to bilingual Japanese source plus English mirror. The retired locale mirror corpus and route family are removed; old-locale URLs receive no redirect or stub.
- **Scope:** Delete the retired mirror corpus, update the `site/src/i18n` language source of truth, translation scripts, i18n status / stale classifier / link remap / release tooling, Astro route / layout / switcher behavior, the root homepage, and README / INDEX / CHANGELOG / AI discovery surfaces.
- **Out of scope:** The root Japanese source corpus and existing Japanese / English mirror corpus are not edited. Design tokens, `docs/**`, and `CONTRIBUTING.md` are not changed.
- **Steps:** Checked the i18n architecture and ADR-010, removed the retired mirror corpus with `git rm`, reduced `langCodes`, `languages`, `Lang`, domain / group labels, and root editorial config to ja/en, made the translation pipeline and post-build wikilink localization English-mirror-only, updated the root homepage and README / CHANGELOG to bilingual, and adjusted generators for ja/en.
- **Validation:** `bun tools/release.ts --check --strict`, `bun run i18n:status`, `bun run docs:audit`, `bun run wiki:audit:ci`, `cd site && bun install && bun run build`, `bun run html:check`, and `git diff --check` all passed. The build output generated only the `/ja/` and `/en/` route families, and the retired-locale directory / route residue scan passed.
- **Follow-up:** Open the PR into `pre` and wait for review and merge. Do not self-merge or self-close.

### 中文

- **2026-07-01 18:57:08 JST / 背景:** 根据 Issue #126，公开站点 i18n model 迁移为日文 source + English mirror 的双语结构。退役 locale 的 mirror corpus 与 route family 被删除，旧 locale URL 不提供 redirect 或 stub。
- **范围:** 删除退役 mirror corpus；更新 `site/src/i18n` 的 language source-of-truth、translation scripts、i18n status / stale classifier / link remap / release tooling、Astro route / layout / switcher、根首页，以及 README / INDEX / CHANGELOG / AI discovery surfaces。
- **非范围:** 不修改根目录日文 source corpus 与既有日文 / 英文 mirror corpus；也不修改 design tokens、`docs/**` 或 `CONTRIBUTING.md`。
- **执行步骤:** 检查 i18n architecture 与 ADR-010，使用 `git rm` 删除退役 mirror corpus；把 `langCodes`、`languages`、`Lang`、domain / group labels 与 root editorial config 收敛为 ja/en；让 translation pipeline 与 post-build wikilink localization 只面向 English mirror；把根首页和 README / CHANGELOG 更新为当时的双语状态，并按 ja/en 调整 generator。
- **验证结果:** `bun tools/release.ts --check --strict`、`bun run i18n:status`、`bun run docs:audit`、`bun run wiki:audit:ci`、`cd site && bun install && bun run build`、`bun run html:check` 与 `git diff --check` 全部 PASS。build output 只生成 `/ja/` 与 `/en/` route family，retired locale directory / route residue scan 也 PASS。
- **后续事项:** 创建目标为 `pre` 的 PR，等待 review 与 merge。不得 self-merge / self-close。

# 发布流程 / Release Process

发布规则源头是根目录 `AGENTS.md` 与当前 i18n 架构：**任何**内容/结构/索引/领域/公开快照/运营规则变更，都要在同一 session 内同步日文・英文发布文档。人类站点の locale は ja/en のみで、中国語の読面は作りません。

## 标准步骤

```
1. work branch で変更し、README.md + CHANGELOG.md（日→英）と必要な release note を更新
2. bun run release:docs
3. bun tools/release.ts --write
4. bun run verify                         # pre-commit gate
5. commit → post-commit release:write → 必要なら amend → bun run verify
6. work branch を pushし、`pre` 向け PR を作成
7. Required Verification / Dependency Audit / preview を確認し、承認後 `pre` へ merge
8. publish boundary で新規作業を止め、`pre` HEAD、open PR 0、release note / registry を確認
9. `pre` → `main` promotion PR を作成し、人間の明示承認後に merge
10. resulting main merge SHA と Deploy FinWiki success を確認
11. git tag v<date>-<N> <main-merge-sha> && git push origin v<date>-<N>
12. gh release create v<date>-<N> \
      --title "<日本語タイトル>" \
      --notes-file releases/v<date>-<N>.md \
      --target <main-merge-sha>
13. public routes と GitHub Release target を確認
```

`main` への direct push は release 手順ではありません。bootstrap promotion で required workflow が初めて `main` に入る場合は、その production deploy 完了直後に branch protection を有効化し、以後は PR と current `Required verification` を必須にします。

## 日英发布文档格式

- **README**：顶层语言 section 必须精确为 `## 日本語` → `## English`。入口、规则、验证和 release 契约をこの二言語で維持する。
- **CHANGELOG 条目**：最新日期在最上。Maintenance Principles 与每个 `## YYYY-MM-DD - ...` 条目都必须依次包含 `### 日本語` → `### English`；每种语言记录 JST 时间、背景、范围、主要文件或目录、执行步骤、验证结果与后续事项。
- **release notes 文件**：`# <只含日文的标题>` → `## 日本語` / `## English`。每种语言按顺序包含 5 个三级标题：公開範囲 / 主要変更 / 検証結果 / 既知の注意点 / 次の作業；Release Scope / Major Changes / Validation Results / Known Notes / Next Steps。
- **GitHub Release**：title **只用日文**；body 用 `--notes-file` 指向上述日英 release note。
- **历史边界**：`bun run release:docs` 对 2026-07-27 以前的 release notes grandfather，不批量改写公开历史；新 release note 没有例外。

## Release state reconciliation

- [releases/README.md](../../releases/README.md) is the authoritative mapping among maintained release notes, Git tags and GitHub Releases.
- A note may remain as a detailed `pre` staging record without an individual tag only when the registry names the catch-up Release that incorporates it.
- A published tag without a repository note is repaired by restoring the public GitHub Release body into a same-version note; do not rewrite the already published Release merely to modernize historical formatting.
- Before promotion, compare note basenames, Git tags and GitHub Release tags. The Git tag and GitHub Release sets must match exactly, and every note-only exception must appear in the registry.

## count 收敛（self-referential）

README/index.html 里嵌了 corpus 的 char/token count。编辑 `.md` 会改变这些 count；若跨数量级（如 9.99M→10.0M 让"999万"→"1001万"变长），单次 `--write` 不收敛，需再跑一次：

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict || { bun tools/release.ts --write; bun tools/release.ts --check --strict; }
```

## `last_modified` 处理

`generate_ai_discovery.ts` 在 full-history checkout 对 tracked source 优先使用最新 Git commit date；canonical GitHub workflows 以 `fetch-depth: 0` 保证该输入。shallow/history-less builder 先复用现有 committed `ai-index.json` 的合法 source-path date，再尝试 shallow Git，fs mtime 仅是最终 fallback。commit 前，已编辑的 tracked file 仍使用旧 commit date；source commit 后必须重新生成，并 amend 或追加 release-sync commit，使 sitemap 与 per-entry API 收敛。最后再跑 `bun run verify`；其 `surface:drift` 会固定 `generated_at` 并精确比较所有生成文件，包括每个 per-entry `last_modified`。详见 [gotchas.md](../07-quality/gotchas.md)。

## 发布前自检清单

- [ ] README / CHANGELOG 已按日文→英文→中文更新；index.html 的 ja/en 人类入口保持同步
- [ ] `releases/v<date>-<N>.md` 已建（三语、只含日文的 H1、每语 5 个必填小节）
- [ ] Bun version 与 `.bun-version` 一致，`bun run verify` `EXIT=0`
- [ ] work branch → `pre` PR 的 `Required verification` 为 green；promotion 後は `main` protection も同じ current context を要求
- [ ] `pre` → `main` promotion PR の boundary、resulting main SHA、tag target、GitHub Release target が同一
- [ ] `releases/README.md` が note-only / tag-only exception をすべて意図的に説明
- [ ] `git diff` 无密钥 / 本地路径 / 隐私（grep 检查 home 目录路径前缀、token 前缀、真实用户名，命中应为 0）
- [ ] `bun run surface:drift` 显示 fixed-timestamp byte-identical（含全部 per-entry `last_modified`）
- [ ] `bun run verify` 显示 `Generated route audit passed`，生成的 `/ja/` canonical、`/en/` alternate 与显式 `.md` raw URL 均在最终 artifact 可解析
- [ ] push 后 `gh run watch` 确认 Astro build 绿（尤其改过 `site/` 配置时）

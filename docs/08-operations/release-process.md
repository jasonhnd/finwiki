# リリース手順 / Release Process

公開文書の契約は根ディレクトリ `AGENTS.md` です。内容・構造・索引・領域・公開スナップショット・運用ルールを変えるときは、同じ session で日本語→英語の README / CHANGELOG / 必要な release note を揃えます。人間向けサイトの locale は ja/en のみで、中国語の読面は作りません。

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

## 日英の公開文書フォーマット

- **README**：トップレベル言語 section は正確に `## 日本語` → `## English`。入口、規則、検証、release 契約をこの二言語で維持する。
- **CHANGELOG 条目**：最新日付が最上。Maintenance Principles と各 `## YYYY-MM-DD - ...` 条目は順に `### 日本語` → `### English`。各言語に JST 時刻、背景、範囲、主要ファイルまたはディレクトリ、実行手順、検証結果、残タスクを書く。
- **release notes ファイル**：`# <日本語のみの標題>` → `## 日本語` / `## English`。各言語は順に 5 つの三級標題：公開範囲 / 主要変更 / 検証結果 / 既知の注意点 / 次の作業；Release Scope / Major Changes / Validation Results / Known Notes / Next Steps。
- **GitHub Release**：title は **日本語のみ**。body は `--notes-file` で上記の日英 release note を指す。
- **履歴境界**：`bun run release:docs` は 2026-07-27 以前の release notes を grandfather し、公開履歴を一括改写しない。新しい release note に例外はない。

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

## 公開前の点検

- [ ] README / CHANGELOG を日本語→英語で更新し、index.html の ja/en 入口を同期した
- [ ] `releases/v<date>-<N>.md` を作った（日英、日本語のみの H1、各言語 5 必須節）
- [ ] Bun version 与 `.bun-version` 一致，`bun run verify` `EXIT=0`
- [ ] work branch → `pre` PR 的 `Required verification` 为 green；promotion 後は `main` protection も同じ current context を要求
- [ ] `pre` → `main` promotion PR の boundary、resulting main SHA、tag target、GitHub Release target が同一
- [ ] `releases/README.md` が note-only / tag-only exception をすべて意図的に説明
- [ ] `git diff` 无密钥 / 本地路径 / 隐私（grep 检查 home 目录路径前缀、token 前缀、真实用户名，命中应为 0）
- [ ] `bun run surface:drift` 显示 fixed-timestamp byte-identical（含全部 per-entry `last_modified`）
- [ ] `bun run verify` 显示 `Generated route audit passed`，生成的 `/ja/` canonical、`/en/` alternate 与显式 `.md` raw URL 均在最终 artifact 可解析
- [ ] push 后 `gh run watch` 确认 Astro build 绿（尤其改过 `site/` 配置时）

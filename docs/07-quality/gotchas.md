# 维护陷阱 / Gotchas

踩过的坑，按"会咬人"程度排序。

## 1. clone-mtime 污染（高危）

`generate_ai_discovery.ts` 从 **fs mtime** 生成 `sitemap.xml` / `api` 的 `<lastmod>`（`lib/markdown_helpers.ts` 的 `lastModifiedFor` → `stat().mtimeMs`）。`git clone` 把所有文件 mtime 重置为 clone 时刻 → 一旦 `release.ts --write`，**全站 1400+ 页 lastmod 全被改成 clone 日期**，且会随 commit 污染历史。

**对策**：clone 后第一次发布前，把已提交 `sitemap.xml` 的 `<lastmod>` 当真值，逐页恢复 mtime（`utimes`），只给当天真正编辑过的文件设今天。验证：`git diff sitemap.xml | grep '^+.*<lastmod>' | grep -v <今天>` 应为 0。

## 2. self-referential count 不收敛（中危）

README / index.html 内嵌 corpus 的 char/token 计数（如"约 10.09M / 163万 tokens"）。编辑任何 `.md` 都会改总字数；当某计数**跨数量级位数**（999万→1001万，字符串变长）时，单次 `--write` 写入新计数本身又改变了字数 → `--check` 仍 drift。**对策**：`--write` 后若 `--check --strict` 非 0，再 `--write` 一次即收敛。发布脚本里用 `|| { --write; --check; }` 兜底。

## 3. site/ 无 node_modules → 盲推（中危）

`site/` 有独立依赖，本地通常不装，**无法本地跑 Astro build**。改了 `site/src/content.config.ts` / `siteIndex.mjs` / `i18n/groups.ts` 只能盲推，靠 GitHub Actions「Deploy FinWiki」验证。**对策**：push 后必 `gh run watch <id> --exit-status`；关键步骤是 "Build human site" 和 "Build static search index"；失败就 revert 那个 commit。

## 4. 假死链（中危）

ad-hoc `grep '[[domain/'` 报的"死链"经常是**误报**——`wiki_link_audit` 会用 frontmatter `aliases`（`buildAliasMap`）解析别名，grep 不会。**以 `release.ts --check` 的 `issues=0` 为准，别信裸 grep。** 真要查残留旧名，用工具的 audit 结果。

## 5. 双排除机制混淆（中危）

`EXCLUDED_WALK_DIRS`（`lib/markdown_helpers.ts`，控计数/发现面）≠ `IGNORED_DIRS`（`tools/wiki_link_audit.ts`，控死链审计）。想让一个目录**完全内部**（如 `docs/`），两个都要加；只加一个会"漏"——比如只加 IGNORED_DIRS，文件仍会进 sitemap 计数。详见 [system-architecture.md](../04-architecture/system-architecture.md#-双排除机制最易混淆)。

## 6. 文档里别写字面 `[[domain/...]]`（中危）

`wiki_link_audit` 的 wikilink 正则**不理解 markdown 反引号**——README/CHANGELOG（都是 `CONTROL_DOCS`，会被审计）散文里写 `` `[[governance/x]]` `` 里的 `[[governance/x]]`（带闭合 `]]`）会被当**真 wikilink** 解析 → 不 resolve → 报死链。**对策**：文档里举例改名/路径时用反引号路径前缀 `` `domain/…` ``（无双括号），别用 `[[domain/...]]`。`docs/` 已排除出审计，但 README/CHANGELOG 没有，务必小心。

## 7. 改名时区分历史 vs 活文档（中危）

物理改名领域（如 v2026.06.03-9 governance→non-profit）时：
- **活文档**（`README.md`、各 entry 正文、`INDEX.md`、`site/` 配置）→ 路径引用更新到新名。
- **历史记录**（`CHANGELOG.md` 旧条目、`releases/旧.md`）→ **保持旧名**，那是史实。rename 脚本若误改了它们，用 `git checkout HEAD -- <file>` 复原。

## 8. attribution 关闭

repo 既有 commit 惯例**不带 `Co-Authored-By` 尾注**。提交前看一眼 `git log -1`，跟随既有惯例。

## 9. 发布门禁的硬约束

`release.ts --check --strict` 必须 `EXIT=0` 才能发：link audit `issues=0`、counts in sync、JSON valid / LF endings / duplicate-id verify OK。任一不满足都别 push。

## 10. block-no-verify hook 对复合命令 + "verif" 词误判（中危）

`block-no-verify` hook 拦 `git commit --no-verify`，但匹配过宽，两种情况会**误拦**正常 commit：(a) commit message 里含 "**Verif**ied" 等 `verif` 子串；(b) 把 `release.ts --write` / `--check` 和 `git commit` 写进**同一个复合 Bash 命令**。**对策**：commit **单独成命令**跑（不和 `--write`/`--check` 合并），且 message 避开 `verif`（用 "Checks:" / "checked" 代替 "Verified" / "verified"）。v12 / v13 都踩过。

## 11. 并行 agent 的 rate-limit 与双批 entry（中危）

一次派太多（v12 一次 9 个含 WebSearch 的 agent）会撞 API rate-limit（`Server is temporarily limiting requests · not your usage limit`）。**rate-limited 的 agent 失败前可能已写好文件**（`tool_uses` 高、`subagent_tokens=0` 是统计假象）→ 盲目重试会得到双批 entry。**对策**：并发 ≤5-6、分批；重试前 `git status` 看是否已有产出；收尾按各领域 **disk 实数**（`ls`）对账 root INDEX，别信 agent 报告的数字。详见 [parallel-development.md](../06-implementation/parallel-development.md)。

## 12. pre-push 门禁需要 bun 在 PATH（中危）

`.git/hooks/pre-push` 会跑 `bun tools/release.ts --check --strict`。若 `bun` 不在该 hook（sh）能看到的 `PATH` 上，push 会被拦（`Bun was not found for the FinWiki release check`）。**对策**：把 `bun` 加进 `PATH`，或 `export FINWIKI_BUN=<bun 路径>`（hook 两者都认）。`release.ts` 内部还会 `spawnSync("bun", ...)`，所以光给 hook 指路不够——`bun` 必须在 PATH 上内部子进程才找得到。**别用 `git push --no-verify` 绕过**：门禁红就先 `release.ts --write` 修好再 push。

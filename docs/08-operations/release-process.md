# 发布流程 / Release Process

发布规则源头是根目录 `AGENTS.md` 与当前 i18n 架构：**任何**内容/结构/索引/领域/公开快照/运营规则变更，都要在同一 session 内同步双语文档并发布。

## 标准步骤

```
1. 改内容（wiki entry / INDEX / 工具 / 配置）
2. 更新双语 README.md + CHANGELOG.md（日→英），写 releases/v<date>-<N>.md
3. bun tools/release.ts --write          # 重生成发现面 + 同步 counts
4. bun tools/release.ts --check --strict  # 门禁：必须 EXIT=0
5. git add -A && git commit               # 不加 Co-Authored-By（repo 既有惯例）
6. git push origin main
7. git tag v<date>-<N> && git push origin v<date>-<N>
8. gh release create v<date>-<N> \
     --title "<日文标题>" \
     --notes-file releases/v<date>-<N>.md \
     --target main
9. gh run watch <runId> --exit-status     # 确认「Deploy FinWiki」build 绿
```

## 双语文档格式

- **README note**：blockquote `>`，最新在最上，空行分隔；日文和英文各一条 note。
- **CHANGELOG 条目**：最新在最上。结构：`### <ja标题> / <en标题>` → `#### 日本語記録 / English` → 日文字段（**JST 時刻 / 背景 / 範囲 / 主要変更 / 実行手順 / 検証結果 / 既知の注意点 / 次の作業**）→ `- **EN**:` 整段。
- **release notes 文件**：`# <日文标题>` → `## 日本語` / `## English`，每语含 公開範囲 / 主要変更 / 検証結果 / 既知の注意点 / 次の作業。
- **GitHub Release**：标题**只用日文**；body 用 `--notes-file` 指向 release notes（已是日→英）。

## count 收敛（self-referential）

README/index.html 里嵌了 corpus 的 char/token count。编辑 `.md` 会改变这些 count；若跨数量级（如 9.99M→10.0M 让"999万"→"1001万"变长），单次 `--write` 不收敛，需再跑一次：

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict || { bun tools/release.ts --write; bun tools/release.ts --check --strict; }
```

## fresh clone 的 mtime 处理

`generate_ai_discovery.ts` 从 **fs mtime** 生成 `sitemap.xml`/`api` 的 `lastmod`。`git clone` 重置所有 mtime → 直接 `--write` 会把全站 lastmod 污染成 clone 日期。**clone 后第一次发布前**：从已提交的 `sitemap.xml` 的 `<lastmod>` 把各页 mtime 恢复回去，只给当天真正编辑过的文件设今天。详见 [gotchas.md](../07-quality/gotchas.md)。

## 发布前自检清单

- [ ] README / CHANGELOG / index.html 双语都更新了
- [ ] `releases/v<date>-<N>.md` 已建（双语）
- [ ] `--check --strict` `EXIT=0`，link audit `issues=0`，counts in sync
- [ ] `git diff` 无密钥 / 本地路径 / 隐私（grep 检查 home 目录路径前缀、token 前缀、真实用户名，命中应为 0）
- [ ] sitemap `lastmod` 无污染（`git diff sitemap.xml` 里新增的 lastmod 都是当天）
- [ ] push 后 `gh run watch` 确认 Astro build 绿（尤其改过 `site/` 配置时）

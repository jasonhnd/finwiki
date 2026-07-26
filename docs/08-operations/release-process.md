# 发布流程 / Release Process

发布规则源头是根目录 `AGENTS.md` 与当前 i18n 架构：**任何**内容/结构/索引/领域/公开快照/运营规则变更，都要在同一 session 内同步日文、英文、中文发布文档。三语发布记录不改变人类站点只支持 ja/en 的 locale 边界。

## 标准步骤

```
1. 改内容（wiki entry / INDEX / 工具 / 配置）
2. 更新 README.md + CHANGELOG.md（日→英→中）
3. bun run release:docs                  # 三语顺序、title、必填小节门禁
4. bun tools/release.ts --write --release-note "<日本語タイトル>"
                                           # 生成三语 draft + 发现面 + counts
   # 填写 draft 的真实内容后，再运行 bun tools/release.ts --write
5. bun tools/release.ts --check --strict  # 门禁：必须 EXIT=0
6. git add -A && git commit               # 不加 Co-Authored-By（repo 既有惯例）
7. git push origin main
8. git tag v<date>-<N> && git push origin v<date>-<N>
9. gh release create v<date>-<N> \
     --title "<日本語タイトル>" \
     --notes-file releases/v<date>-<N>.md \
     --target main
10. gh run watch <runId> --exit-status    # 确认「Deploy FinWiki」build 绿
```

## 三语发布文档格式

- **README**：顶层语言 section 必须精确为 `## 日本語` → `## English` → `## 中文`；三段维护相同入口、规则、验证和 release 契约。
- **CHANGELOG 条目**：最新日期在最上。Maintenance Principles 与每个 `## YYYY-MM-DD - ...` 条目都必须依次包含 `### 日本語` → `### English` → `### 中文`；每种语言记录 JST 时间、背景、范围、主要文件或目录、执行步骤、验证结果与后续事项。
- **release notes 文件**：`# <只含日文的标题>` → `## 日本語` / `## English` / `## 中文`。每种语言按顺序包含 5 个三级标题：公開範囲 / 主要変更 / 検証結果 / 既知の注意点 / 次の作業；Release Scope / Major Changes / Validation Results / Known Notes / Next Steps；发布范围 / 主要变更 / 验证结果 / 已知注意事项 / 下一步。
- **GitHub Release**：title **只用日文**；body 用 `--notes-file` 指向上述三语 release note。
- **历史边界**：`bun run release:docs` 对 2026-07-27 以前的 release notes grandfather，不批量改写公开历史；新 release note 没有例外。

## count 收敛（self-referential）

README/index.html 里嵌了 corpus 的 char/token count。编辑 `.md` 会改变这些 count；若跨数量级（如 9.99M→10.0M 让"999万"→"1001万"变长），单次 `--write` 不收敛，需再跑一次：

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict || { bun tools/release.ts --write; bun tools/release.ts --check --strict; }
```

## fresh clone 的 mtime 处理

`generate_ai_discovery.ts` 从 **fs mtime** 生成 `sitemap.xml`/`api` 的 `lastmod`。`git clone` 重置所有 mtime → 直接 `--write` 会把全站 lastmod 污染成 clone 日期。**clone 后第一次发布前**：从已提交的 `sitemap.xml` 的 `<lastmod>` 把各页 mtime 恢复回去，只给当天真正编辑过的文件设今天。详见 [gotchas.md](../07-quality/gotchas.md)。

## 发布前自检清单

- [ ] README / CHANGELOG 已按日文→英文→中文更新；index.html 的 ja/en 人类入口保持同步
- [ ] `releases/v<date>-<N>.md` 已建（三语、只含日文的 H1、每语 5 个必填小节）
- [ ] `bun run release:docs` `EXIT=0`
- [ ] `--check --strict` `EXIT=0`，link audit `issues=0`，counts in sync
- [ ] `git diff` 无密钥 / 本地路径 / 隐私（grep 检查 home 目录路径前缀、token 前缀、真实用户名，命中应为 0）
- [ ] sitemap `lastmod` 无污染（`git diff sitemap.xml` 里新增的 lastmod 都是当天）
- [ ] push 后 `gh run watch` 确认 Astro build 绿（尤其改过 `site/` 配置时）

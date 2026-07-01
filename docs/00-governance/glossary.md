# Glossary

| Term | Definition |
|---|---|
| Corpus | 被 `lib/markdown_helpers.ts` 扫描并进入公开计数、discovery surface 或 release 校验的 Markdown 集合。 |
| Wiki entry | 普通知识库正文条目，通常位于顶级 domain 目录下，`entry_type=wiki_entry`。 |
| Domain index | 每个 domain 的 `INDEX.md`，用于读者导航和 domain count 对账。 |
| Control doc | 根目录控制文档，例如 `README.md`、`CHANGELOG.md`、`SCHEMA.md`、`INDEX.md`。 |
| Release note | `releases/v*.md`，记录每次发布的双语说明，计入 corpus 但不是 wiki entry。 |
| Discovery surface | `robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json`、`api/` 等机器可发现输出。 |
| Wikilink | Obsidian 风格链接，例如 `domain/slug` 的双中括号形式。 |
| Canonical anchor | 多领域 mirror page 指向同一实体主页的 frontmatter 字段。 |
| i18n mirror | `site/src/content/i18n/{ja,en}/` 下的机器翻译层。 |
| Source hash | 机器翻译 mirror 用来判断源正文是否 stale 的 hash。 |
| Release gate | `bun tools/release.ts --check --strict` 及其调用的 link audit、count、JSON、LF、duplicate-id 检查。 |
| BRD | Business Requirements Document，定义业务目标与成功指标。 |
| PRD | Product Requirements Document，定义产品能力和用户需求。 |
| NFR | Non-Functional Requirements，定义性能、可靠性、安全、可维护性等约束。 |
| RTM | Requirements Traceability Matrix，把需求 ID 映射到实现、验证、发布记录。 |
| ARD | Architecture Requirements Document，定义架构原则、边界和约束。 |
| ADR | Architecture Decision Record，记录关键架构决策及取舍。 |
| FSD | Functional Specification Document，定义功能行为、输入输出和验收口径。 |
| UI/UX | 人类站的产品体验、页面交互、视觉语气、响应式行为和本地化 UI chrome。 |
| Theme system | `site/src/styles/global.css` 的 token 与 light/dark 主题边界，以及使用这些 token 的 Astro 组件/页面约束。 |
| Visual QA | UI/CSS/theme/layout/localization 改动后的人工或浏览器验收，重点检查 light/dark、桌面/移动、日语可读性、无横向溢出和 provenance 可见性。 |
| Active docs | `docs/00-governance` 到 `docs/08-operations` 中作为当前开发依据的文档，不包括 `99-archive` 和 dated release history。 |
| Historical evidence | CHANGELOG、release note、ADR 历史或 archive 中保留的旧事实；只能用于理解过去，不能作为当前实现指令。 |
| Documentation drift | 活跃文档、root control docs、生成面或代码事实互相不一致，导致下一轮开发可能走错路径。 |
| Documentation/spec agent | 高推理规格模型角色，负责需求、规格、架构、验收和任务包。 |
| Code implementation agent | 快速代码实现模型角色，只按任务包修改授权代码文件。 |
| Task packet | 从规格到代码 agent 的交接包，包含目标、来源文档、允许文件、禁止文件、验证命令和返回格式。 |

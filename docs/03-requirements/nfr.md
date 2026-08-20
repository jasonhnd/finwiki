# NFR - Non-Functional Requirements

| ID | Category | Requirement | Validation |
|---|---|---|---|
| NFR-001 | Build reliability | 同一 release gate 必须以固定 Bun 与 frozen lockfile 在 local pre-push、pull request、GitHub Pages、Vercel 可重复运行，失败要指出具体 gate。 | `bun run verify` locally and as required `Required verification` PR check |
| NFR-002 | Link integrity | Dead wikilink、missing peer、canonical drift 不得进入发布。 | `bun tools/wiki_link_audit.ts --fail-on-issues` |
| NFR-003 | Public information safety | 不得包含密钥、隐私、客户信息、非公开对话。 | 人工 QA + targeted grep |
| NFR-004 | Corpus/discovery separation | `docs/` 不得作为 corpus page、site route、sitemap URL、llms item、ai-index entry/source、API entry 出现；README/CHANGELOG/release note 可公开描述 docs 变更，但生成器不得把 `docs/` markdown links 暴露给 AI surface。 | release gate + surface 抽查 |
| NFR-005 | Maintainability | 开发文档必须有单入口和可追踪 ID。 | `docs/README.md`, `rtm.md` |
| NFR-006 | Traceability | 业务、产品、非功能、功能规格必须映射到实现和验证。 | `rtm.md` |
| NFR-007 | i18n integrity | mirror 应保持 link target 和 source pointer 一致，hash stale 状态可解释。 | i18n pipeline verify + spot check |
| NFR-008 | Release transparency | 每次发布必须有日文、英文顺序一致的 README、CHANGELOG、release note 和 GitHub Release body；title 只使用日文。不添加中文阅读面。 | `bun run release:docs` + remote check |
| NFR-009 | Minimal unrelated churn | 同步类提交避免大规模格式整理和 unrelated generated drift。 | `git diff --check`, manual diff review |
| NFR-010 | Agent role separation | 代码 agent 不得修改需求/规格/发布规则来适配实现；规格 agent 必须给出可执行任务包。 | model-agent review checklist + RTM review |
| NFR-011 | Code/document alignment | 活文档必须反映当前代码事实；历史草案必须归档或明确标注为历史。 | code-doc alignment audit + stale scan |
| NFR-012 | Visual usability | 人类站 UI 必须保持日语可读、响应式无横向溢出、light/dark 可读、来源与翻译状态可见。 | visual QA checklist + site build when UI changes |
| NFR-013 | Documentation drift control | 活跃开发文档、root control docs、release-generated surface 与当前代码/内容事实不得互相漂移；历史记录可以保留旧事实，但必须清楚属于历史。 | documentation drift audit + stale scan + release surface grep |
| NFR-014 | Static publish safety | 最终发布目录只能包含 Astro 输出、生成清单明确批准的 raw wiki / AI 文件与 assembler 生成的 `.nojekyll` marker；开发文件、隐藏/忽略 source file 与未知 root 文件不得进入，并且递归清理前必须拒绝 repo root、越界、嵌套或符号链接输出路径。 | `bun run publish:test` + assembled-output inspection |
| NFR-015 | Audit artifact isolation | truthfulness audit 产物必须默认写到 repository 外；显式 repository 内输出只允许 ignored `audit-artifacts/`，且不得改变 corpus/API/sitemap count、进入公开 surface，或在 shareable summary 暴露绝对 local path。 | audit-then-regenerate fixture + `bun run surface:drift` + strict release check |
| NFR-016 | Discovery route integrity and reproducibility | 生成面中的日文 HTML canonical、英文 alternate、raw Markdown 与 API route claim 必须符合统一 URL 与 exact-origin contract，在最终 assembled artifact 中可解析；固定 `generated_at` 后重生成的全部发现面及每个 per-entry `last_modified` 必须 byte-identical。 | `bun run surface:drift` + `bun test tools/discovery_routes.test.ts` + `bun run verify --out _site` |
| NFR-017 | Scheduled audit trend accuracy | truthfulness runner 必须读取前两个成功 scheduled summary，以连续两个 cycle 的 actionable freshness growth 计算 advisory threshold；consistency pattern 必须同时统计 row 的 left / right source paths；shareable trend 只保留日期与 count。 | `bun test tools/audit_runner.test.ts` + historical `audit:all` fixture + workflow YAML validation |

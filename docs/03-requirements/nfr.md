# NFR - Non-Functional Requirements

| ID | Category | Requirement | Validation |
|---|---|---|---|
| NFR-001 | Build reliability | Release gate 必须在本地可重复运行，失败要指出具体 drift 或 issue。 | `bun tools/release.ts --check --strict` |
| NFR-002 | Link integrity | Dead wikilink、missing peer、canonical drift 不得进入发布。 | `bun tools/wiki_link_audit.ts --fail-on-issues` |
| NFR-003 | Public information safety | 不得包含密钥、隐私、客户信息、非公开对话。 | 人工 QA + targeted grep |
| NFR-004 | Corpus/discovery separation | `docs/` 不得作为 corpus page、site route、sitemap URL、llms item、ai-index entry/source、API entry 出现；README/CHANGELOG/release note 可公开描述 docs 变更，但生成器不得把 `docs/` markdown links 暴露给 AI surface。 | release gate + surface 抽查 |
| NFR-005 | Maintainability | 开发文档必须有单入口和可追踪 ID。 | `docs/README.md`, `rtm.md` |
| NFR-006 | Traceability | 业务、产品、非功能、功能规格必须映射到实现和验证。 | `rtm.md` |
| NFR-007 | i18n integrity | mirror 应保持 link target 和 source pointer 一致，hash stale 状态可解释。 | i18n pipeline verify + spot check |
| NFR-008 | Release transparency | 每次发布必须有三语 README、CHANGELOG、release note 和 GitHub Release。 | release docs + remote check |
| NFR-009 | Minimal unrelated churn | 同步类提交避免大规模格式整理和 unrelated generated drift。 | `git diff --check`, manual diff review |
| NFR-010 | Agent role separation | 代码 agent 不得修改需求/规格/发布规则来适配实现；规格 agent 必须给出可执行任务包。 | model-agent review checklist + RTM review |
| NFR-011 | Code/document alignment | 活文档必须反映当前代码事实；历史草案必须归档或明确标注为历史。 | code-doc alignment audit + stale scan |
| NFR-012 | Visual usability | 人类站 UI 必须保持日语可读、响应式无横向溢出、light/dark 可读、来源与翻译状态可见。 | visual QA checklist + site build when UI changes |
| NFR-013 | Documentation drift control | 活跃开发文档、root control docs、release-generated surface 与当前代码/内容事实不得互相漂移；历史记录可以保留旧事实，但必须清楚属于历史。 | documentation drift audit + stale scan + release surface grep |

# 待办清单 / Backlog

> 一站式 open-items，沉淀自历史 CHANGELOG 的「次の作業 / 既知の注意点」。状态：🔴 未开始 / 🟡 进行中 / 🟢 近期完成可移除。完成后移到 [roadmap.md](roadmap.md) 的「已完成」并从此处删。

## canonical_anchor（P1）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🔴 | Saison drift 修复 | `insurance/saison-automobile-fire` 只在 `## Related` footer 引用 anchor，core body 未引用 → `canonical_anchor_drift=1`。加 body link 或保留为 warning。 |
| 🔴 | 剩余 mirror pair 全量 back-fill | 当前 8 个 anchor；盘点未设的 mirror pair。 |
| 🔴 | discovery 输出 entity edge | `ai-index.json` / `llms-full.txt` 暴露 mirror→anchor 关系。 |
| 🔴 | 评估 hard requirement | 把 `canonical_anchor` 从 optional 变 mirror page 必填 + audit 升为 gate。 |

## 内容扩充（P3）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🔴 | `security` 4 个 planned 页 | INDEX「Status」列已标 planned 但未建。 |
| 🔴 | 薄领域补内容 | `non-profit`(4) / `trade`(4) / `corporate-strategy`(6) / `manufacturer-finance`(8) / `retail`(8)。 |
| 🔴 | 各领域 INDEX count 常态校准 | 内容增删后 INDEX 表 count 易滞后（`release.ts` 不自动改领域 count）。 |

## JapanFG（P2）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🔴 | 9 个未分类 entity | sogo-shosha 母公司等非金融机构，故意未进 9 个 sub-INDEX；按需分类或保留。 |
| 🔴 | 各机构类型内容深化 | 9 个类型内 entity 的业务模式 / 监管定位 / 集团关系。 |

## 工具 / 基础设施

| 状态 | 项目 | 备注 |
|---|---|---|
| 🔴 | `.txt` 入口纳入 audit | `llms-tasks.txt` 等 `.txt` 不在 `wiki_link_audit`（只审 `.md`）→ entry 改名时 `.txt` link 易留死链。把 `.txt` link target 实在性纳入 release gate。 |
| 🔴 | docs 扩充 | CI / Vercel 部署细节、i18n 翻译流程、Obsidian 运用（见 roadmap 中长期）。 |

## 维护提醒（非待办，长期注意）

- clone 后首次发布前要恢复 mtime（见 [gotchas.md](gotchas.md) #1）。
- 改领域名要同步 4 处（site 三配置 + wiki_link_audit map + INDEX 表），见 [gotchas.md](gotchas.md) #5 / [decisions.md](decisions.md) ADR-001。
- README / CHANGELOG 散文里别写字面 `[[domain/...]]`（见 gotchas #6）。

# 并行开发手册 / Parallel Development Playbook

> 怎么用并行 subagent 高效、安全地开发 FinWiki。沉淀自 v12（10 领域并行 +46 entry）、v13（canonical_anchor back-fill）和后续模型分工流程。配套 [entry-authoring.md](entry-authoring.md)（怎么写单个 entry）、[model-agent-workflow.md](model-agent-workflow.md)（怎么分配模型与代码任务）、[release-process.md](../08-operations/release-process.md)（收尾发布）。

## 何时用并行

**适合**：多领域内容扩充（每领域独立）、批量同类改动（如 canonical_anchor back-fill 盘点）、互不依赖的并行调查。
**不适合**：跨领域依赖的改动、需要全局一致性的单点改动（如改工具 / root INDEX / site 配置——这些主会话自己做）。

## 核心原则：文件域隔离

并行 agent 安全的唯一前提是**文件域不重叠**：
- 每个 agent 只碰**一个领域目录 + 该领域 `INDEX.md`**。
- **绝不碰** root `INDEX.md`、`tools/`、`lib/`、`site/`、`README.md`、`CHANGELOG.md`、`docs/`、其他领域。
- root INDEX 的 domain count 同步由**主会话在 Phase 2 统一做**（多 agent 同改一定冲突）。
- 这样 N 个 agent 并行写主仓不同文件，git 层面零冲突。

## Agent vs Workflow（重要）

- **直接 `Agent` 工具**（一个 message 发多个 tool call）：本项目唯一可靠路径，agent 返回文本报告。
- **Workflow 的 schema/StructuredOutput 模式**：v12 实测 **10 个全失败**（0 token、agent 没调 StructuredOutput）。**本项目不要用 Workflow schema 编排内容开发**，用直接 Agent。
- **模型分工**：高推理规格 agent 优先写规格、任务包和 review；快速代码实现 agent 优先执行 bounded code task，不负责改需求/规格。

## 并发与 rate limit

- **active subagent 绝对上限 = 10**。任何时候不要让超过 10 个 subagent 同时处于 active 状态。
- **WebSearch / 高 I/O 工作的实际建议并发 = 5-6**。v12 一次发 9 个 agent（每个含 WebSearch）→ **5 个撞 API rate-limit**（`Server is temporarily limiting requests · not your usage limit`）。
- **分批节奏**：① 探路 1 个确认路径通 → ② 批量但每批不超过当前上限（高 I/O 优先 5-6，绝不超过 10）→ ③ 确认上一批 finished/closed/retired → ④ rate-limited 的降并发重试。
- **rate-limited ≠ 没干活**：失败的 agent failed 前 `tool_uses=22-29`，文件其实**已写好**，只是没返回报告（`subagent_tokens=0` 是统计假象）。**重试前先 `git status` 看是否已有产出**。

## 双批 entry 陷阱（v12 实例）

5 个领域的 rate-limited agent 已写文件 + 我重试又各写 3 → 这些领域得到「初批 3 + 重试 3 = 6」个 entry。重试 agent 若 ls/grep 看到第一批文件会刻意避开 → 主题**互补**（非覆盖）。应对：
1. 重试前 `git status` 确认已有文件（别盲目重试覆盖）。
2. 收尾时 **`ls` 各领域真实 disk count**（不是 agent 报告的数字）来更新 root INDEX。
3. 核查近重复主题（v12 的 loyalty / money-market 有多个 benchmark / point-economics 页，待人工核）。

## 给 agent 的必备约束（prompt 骨架）

1. **SCOPE**：EXCLUSIVELY the `<domain>/` directory。
2. **LEARN FIRST**：读 `SCHEMA.md` + 该领域 `INDEX.md` + 2-3 样例 entry + `docs/06-implementation/entry-authoring.md`。
3. **wikilink VERIFY**：每个 `[[target]]` 写前用 `ls`/`grep` 验证实在；never link 不存在或其他 agent 正在建的 entry。
4. **BOUNDARY**：列清不许碰的（root INDEX / tools / lib / site / README / CHANGELOG / docs / 其他领域）。
5. **NO repo-wide audit**：并发写时 `wiki_link_audit` 会看到别的 agent 半成品，误导——只让 agent 验自己的 target。
6. **RETURN**：加了哪些 entry（slug+title+1 句）+ 新 count + wikilink 是否 verified + caveats。
7. **CLOSEOUT**：agent finished 后由主会话确认输出、真实文件数和越界情况；用完的 subagent 必须关闭/retire，未收尾不启动下一批。

完整模板见 v12 实际派发的 agent prompt（commit `ce939cba` 前后）。

## Phase 2 收尾（主会话，所有 agent 完成后）

1. `git status` 确认所有改动在目标领域、**无越界**（grep tools/lib/site/docs/root）。
2. `ls` 各领域真实 disk count → 更新 root `INDEX.md` 的 domain count + 顶部快照。
3. **全局** `bun tools/wiki_link_audit.ts --fail-on-issues`（此时 agent 全完成，audit 才可靠）→ 确认 `dead=0` `issues=0`。
4. `release.ts --write` → `--check --strict` EXIT=0。
5. 三语 README/CHANGELOG note + `releases/vX.md`（见 [release-process.md](../08-operations/release-process.md)）。
6. commit / push / tag / `gh release` + `gh run watch`。**commit 要单独跑、message 别含 `verif` 字样**（见 [gotchas.md](../07-quality/gotchas.md) block-no-verify 项）。
7. 报告，**诚实标注**：内容由并行 agent 生成，结构/链接已 audit，但**事实精度建议人工抽查**。

## 内容质量的现实

并行 agent 生成的内容：**结构、frontmatter、wikilink** 能被 audit 保证（零死链 = 链接都 resolve）；但**事实准确性 audit 保证不了**。报告必须诚实标注，关键事实（公司数据、税制条文、监管细节）建议人工抽查。这是「用规模换覆盖」的固有 trade-off。

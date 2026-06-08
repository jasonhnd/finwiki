# User Journeys

## Reader

1. 打开公开站点或 root `INDEX.md`。
2. 选择语言和 domain。
3. 阅读 entry 的业务角色、制度背景、来源和相关项。
4. 通过 wikilink 跳到同业、制度、系统或上游/下游节点。

Success: reader 能在 2-3 次跳转内理解条目的上下文。

## Maintainer

1. 从 [docs README](../README.md) 找到任务类型。
2. 读 `SCHEMA.md`、相关 domain index、样例 entry。
3. 修改正文、i18n、工具或文档。
4. 更新 README/CHANGELOG/release note/discovery surface。
5. 跑 release gate 并提交。

Success: diff 范围清楚，验证命令通过，发布记录可交接。

## Documentation / Spec Agent

1. 接收用户目标和约束。
2. 读取 [docs README](../README.md)、BRD、PRD、ARD/FSD、NFR、RTM。
3. 写出需求/规格/验收或确认现有文档已覆盖。
4. 给代码 agent 输出 task packet：目标、来源文档、允许文件、禁止文件、验证命令。
5. 回到主会话参与 diff review。

Success: 代码 agent 不需要猜产品/架构意图即可实施。

## Code Implementation Agent

1. 接收 task packet。
2. 读取指定 source-of-truth 文档。
3. 只修改 `ALLOWED FILES`。
4. 运行指定命令或说明无法运行的原因。
5. 汇报 diff、行为变化、命令结果、残余风险。

Success: diff 窄、可验收，不反向修改规格。

## Parallel Agent

1. 接收明确 file-scope。
2. 只读必要 schema、domain index、样例 entry。
3. 只写被授权 domain 或 worker 目录。
4. 自检 wikilink、frontmatter、公开信息边界。
5. 汇报写入文件数和异常。

Success: 无越界改动，主 agent 能直接收尾。

## AI Consumer

1. 读取 `llms.txt`。
2. 根据需要读取 `llms-full.txt` 或 `ai-index.json`。
3. 使用 URL、source path、summary、headings、wikilinks、canonical anchor 理解 corpus。

Success: 不需要猜测站点结构即可遍历公开知识库。

---
source: agent-economy/claude-code-extension-architecture
source_hash: 351045bf5af2c9ad
lang: zh
status: machine
fidelity: ok
title: "Claude Code 扩展组件架构"
translated_at: 2026-05-30T17:04:08.784Z
---

# Claude Code 扩展组件架构


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for the broader system boundary.

> [!info] TL;DR
> 出处:2026-04-16 收到的 5 张架构图(微信公众号「童童的 AI 创业圈」)。以下是图片内容的完整文本化。

---

## 一、6种扩展组件

Claude Code 的 Agentic Loop(Plan → Act → Observe → Reflect)通过 6种扩展组件获得能力。

| 组件 | 角色 | 适用场景 | 示例 |
|------|------|---------|------|
| CLAUDE.md | 保持持久化上下文,每次会话自动加载 | Project Specs(项目规范、全局规则) | 使用 pnpm;提交前测试 |
| Skills | 可复用的功能模块(知识、指令、工作流),按需加载 | Reference Docs / Standard Tasks | "/deploy 执行部署" |
| Subagent | 独立的子 Agent。在独立上下文中运行,返回结果摘要 | Context Isolation / Parallel Tasks | 解析文件并返回结论 |
| Agent Teams | 多个 Agent 协同,共享任务列表并相互通信 | Parallel Research / Complex Dev | 启动多个 reviewer |
| MCP | 连接外部系统与工具,访问外部数据/操作 | External Data / Actions | DB 查询;Slack 发送 |
| Hook | 循环外的自动化脚本。在特定事件触发 | Deterministic Automation | 变更后运行 ESLint |

## 二、组件间的区分

### Skills vs Subagent

| 视角 | Skills | Subagent |
|------|--------|---------|
| 本质 | 可复用的知识或流程 | 独立的执行单元 |
| 核心价值 | 在不同任务间复用内容 | 上下文隔离 |
| 适配场景 | 参考资料、标准流程 | 大规模代码解析或并行任务 |

### CLAUDE.md vs Skills

| 视角 | CLAUDE.md | Skills |
|------|-----------|--------|
| 加载方式 | 每次会话自动加载 | 按需加载 |
| 文件引用 | 支持 @path | 支持 @path |
| 能否触发流程 | 不可 | 可以 |
| 最佳用途 | 全局规则 | 可复用的流程 |

### MCP vs Skill

| 视角 | MCP | Skills |
|------|-----|--------|
| 本质 | 外部系统连接协议 | 知识或流程 |
| 提供能力 | 工具接口与数据访问 | 用法与业务逻辑 |
| 示例 | Slack、DB | 代码评审流程 |

通常组合使用:MCP 提供连接,Skills 定义用法。

## 三、Plugins & Marketplace

组件可打包为 Plugin 进行分发。

```
Plugin(插件)
  ├── Skills
  ├── Hooks
  ├── Subagents
  └── MCP Servers
         ↓
    Marketplace(将扩展功能打包分发)
```

Skills 使用命名空间(例:/my-plugin:review)避免冲突。

## 四、组件层级与合并规则

组件以 4 层叠加(additive):

```
用户级
  ↓
项目级
  ↓
插件级
  ↓
管理策略级
```

所有层级的 CLAUDE.md 文件都会被加载,并合并进对话的上下文。冲突解决:更具体的规则优先。

### 组合使用示例

| 组合 | 行为 | 示例 |
|------|---------|------|
| Skills + MCP | MCP 提供连接,Skills 定义用法 | Skills 描述 DB schema |
| Skills + Subagent | Skills 启动多个 Subagent | /audit 同时检查安全与性能 |
| CLAUDE.md + Skills | 全局规则 + 按需知识 | CLAUDE.md 定义 API 规范 |
| Hook + MCP | Hook 调用外部系统 | 关键文件变更后通知 Slack |

## 五、上下文成本

每个扩展组件都会消耗模型的上下文窗口。

| 组件 | 加载时机 | 加载内容 | 上下文成本 |
|------|---------|---------|---------|
| CLAUDE.md | 会话开始时 | 全部内容 | 每次请求(高) |
| Skills | 会话开始时 + 调用时 | 说明 + 全部内容 | 较低 |
| MCP Servers | 会话开始时 | 工具定义 | 每次请求(高) |
| Subagents | 创建时 | 独立上下文 | 与主会话隔离 |
| Hooks | 触发时 | 默认无 | 零 |

需要在功能与成本之间取得平衡。Tips:设置 `disable-model-invocation: true`,Skill 便仅在手动调用时加载,成本为零。

---

## 与 Agent 支付层的潜在关联(探讨中)

以下为初期阶段的联想,属今后探讨对象。

1. **以 MCP Server 形式提供支付能力**:任意 Agent 经由 MCP 协议调用 [[agent-economy/2026-04-08_agent-payment-infrastructure-research|決済機能]](check_balance, authorize_payment, get_price, dispute)。底层依赖 [[systems/erc-4337-overview|ERC-4337 プログラマブルウォレット]]
2. **Marketplace 的收费化**:成为 [[agent-economy/skill-market-monetization|Plugin Marketplace で有料化が有効]] 后,可用作计费/支付的后端(支付货币的选择参见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])
3. **分层的预算管理**:用户级 → 项目级 → Agent 级 → 任务级 → 单次调用,映射到组件层级
4. **金融成本追踪**:与上下文成本追踪类似,追踪每次 Skill 调用的金融成本(花了多少,是否值)

这些方向尚未确认,仅作记录。

---

*文本化整理 · 2026-04-16*

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 決済インフラ調査レポート]]
- [[agent-economy/skill-market-monetization|Skill マーケット有料化]]
<!-- /wiki-links:managed -->

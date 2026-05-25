---
title: Claude Code 扩展组件架构——Agent 生态的基础设施分层
aliases: []
domain: agent-economy
kind: knowledge
topic: claude-code-extension-architecture
created: 2026-04-16
last_updated: 2026-05-03
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: certain
tags: [agent-economy]
status: confirmed
sources:
  - https://docs.claude.com/claude-code
  - https://github.com/anthropics/claude-code
  - https://www.anthropic.com/news/claude-code
---

# Claude Code 扩展组件架构


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概览 · Wallet Permissions 与 AI Agent 自动支付]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概览]] for the broader system boundary.

> [!info] TL;DR
> 来源：2026-04-16 收到的 5 张架构图（微信公众号「童童的 AI 创业圈」）。以下为图片内容的完整文字化。

---

## 一、六大扩展组件

Claude Code 的 Agentic Loop（Plan → Act → Observe → Reflect）通过六种扩展组件获得能力：

| 组件 | 作用 | 适用场景 | 示例 |
|------|------|---------|------|
| CLAUDE.md | 持久化上下文，每次会话自动加载 | Project Specs（项目规范、全局规则） | 使用 pnpm；提交前测试 |
| Skills | 可复用能力模块（知识、指令、工作流程），按需加载 | Reference Docs / Standard Tasks | "/deploy 执行部署" |
| Subagent | 独立子 Agent，独立上下文运行，返回结果摘要 | Context Isolation / Parallel Tasks | 分析文件返回结论 |
| Agent Teams | 多个 Agent 协作，共享任务列表，互相通信 | Parallel Research / Complex Dev | 启动多个 reviewer |
| MCP | 连接外部系统与工具，访问外部数据/操作 | External Data / Actions | 查询数据库；发送 Slack |
| Hook | 循环外自动化脚本，特定事件触发 | Deterministic Automation | 修改后运行 ESLint |

## 二、组件之间的区分

### Skills vs Subagent

| 维度 | Skills | Subagent |
|------|--------|---------|
| 本质 | 可复用知识或流程 | 独立执行单元 |
| 核心价值 | 在不同任务间复用内容 | 上下文隔离 |
| 适合场景 | 参考资料、标准流程 | 大规模代码分析或并行任务 |

### CLAUDE.md vs Skills

| 维度 | CLAUDE.md | Skills |
|------|-----------|--------|
| 加载方式 | 每次会话自动加载 | 按需加载 |
| 文件引用 | 支持 @path | 支持 @path |
| 是否能触发流程 | 否 | 可以 |
| 最适合 | 全局规则 | 可复用流程 |

### MCP vs Skill

| 维度 | MCP | Skills |
|------|-----|--------|
| 本质 | 外部系统连接协议 | 知识或流程 |
| 提供能力 | 工具接口与数据访问 | 使用方式与业务逻辑 |
| 示例 | Slack、数据库 | 代码审查流程 |

通常配合使用：MCP 提供连接，Skills 定义使用方式。

## 三、Plugins & Marketplace

组件可以打包为 Plugin 进行分发：

```
Plugin（插件）
  ├── Skills
  ├── Hooks
  ├── Subagents
  └── MCP Servers
         ↓
    Marketplace（打包并分发扩展能力）
```

Skills 使用命名空间（例如 /my-plugin:review）避免冲突。

## 四、组件层级与合并规则

组件按四个层级叠加（additive）：

```
用户级
  ↓
项目级
  ↓
插件级
  ↓
管理策略级
```

所有层级的 CLAUDE.md 文件都会被加载，并合并到对话的上下文中。冲突解决：更具体的规则优先生效。

### 组合使用示例

| 组合 | 工作方式 | 示例 |
|------|---------|------|
| Skills + MCP | MCP 提供连接，Skills 定义使用方式 | Skills 描述数据库 schema |
| Skills + Subagent | Skills 启动多个 Subagent | /audit 同时运行安全与性能检查 |
| CLAUDE.md + Skills | 全局规则 + 按需知识 | CLAUDE.md 定义 API 规范 |
| Hook + MCP | Hook 调用外部系统 | 修改关键文件后发送 Slack 通知 |

## 五、上下文成本

每种扩展组件都占用模型的上下文窗口：

| 组件 | 加载时机 | 加载内容 | 上下文成本 |
|------|---------|---------|---------|
| CLAUDE.md | 会话开始 | 全部内容 | 每次请求（高） |
| Skills | 会话开始 + 调用时 | 描述 + 完整内容 | 较低 |
| MCP Servers | 会话开始 | 工具定义 | 每次请求（高） |
| Subagents | 创建时 | 独立上下文 | 与主会话隔离 |
| Hooks | 触发时 | 默认无 | 零 |

需要在能力与成本之间取得平衡。提示：设置 `disable-model-invocation: true`，Skill 仅在手动调用时加载，成本为零。

---

## 与 Agent 支付层的潜在关联（待讨论）

以下为初步联想，待进一步讨论：

1. **支付能力作为 MCP Server**：任何 Agent 通过 MCP 协议调用[[agent-economy/2026-04-08_agent-payment-infrastructure-research|支付能力]]（check_balance, authorize_payment, get_price, dispute），底层依赖 [[systems/erc-4337-overview|ERC-4337 可编程钱包]]
2. **Marketplace 收费化**：[[agent-economy/skill-market-monetization|Plugin Marketplace 启用付费]]后，可作为计费和结算后端（结算币选择见 [[fintech/usd-stablecoin-interchange|USD 稳定币互换层]]）
3. **层级化预算管控**：用户级 → 项目级 → Agent 级 → 任务级 → 单次调用，映射组件层级
4. **金融成本追踪**：类似上下文成本追踪，追踪每次 Skill 调用的金融成本（花了多少钱、值不值）

这些方向尚未确认，仅为记录。

---

*文字化整理 · 2026-04-16*

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 支付基础设施研究报告]]
- [[agent-economy/skill-market-monetization|Skill 市场收费化]]
<!-- /wiki-links:managed -->

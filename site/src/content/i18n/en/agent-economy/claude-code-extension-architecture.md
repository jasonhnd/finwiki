---
source: agent-economy/claude-code-extension-architecture
source_hash: 351045bf5af2c9ad
lang: en
status: machine
fidelity: ok
title: "Claude Code extension component architecture"
translated_at: 2026-05-30T17:04:08.785Z
---

# Claude Code extension component architecture


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it with [[agent-economy/erc-7715-overview|ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済]] for adjacent context and [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for the broader system boundary.

> [!info] TL;DR
> Source: 5  architecture diagrams received from 2026-04-16 (the WeChat official account "童童的 AI 创业圈"). The following is the full textualization of the image content.

---

## 1. The 6 extension components

Claude Code's Agentic Loop (Plan → Act → Observe → Reflect) acquires capabilities through 6 types of extension components.

| Component | Role | Use case | Example |
|------|------|---------|------|
| CLAUDE.md | Holds persistent context, auto-loaded every session | Project Specs (project conventions, global rules) | Use pnpm; test before commit |
| Skills | Reusable capability modules (knowledge, instructions, workflows), loaded on demand | Reference Docs / Standard Tasks | "/deploy to run deployment" |
| Subagent | An independent sub-Agent. Runs in an isolated context and returns a result summary | Context Isolation / Parallel Tasks | Parse a file and return a conclusion |
| Agent Teams | Multiple Agents collaborate, sharing a task list and communicating with each other | Parallel Research / Complex Dev | Launch multiple reviewers |
| MCP | Connects to external systems and tools, accessing external data/actions | External Data / Actions | DB query; Slack send |
| Hook | An automation script outside the loop. Triggered on specific events | Deterministic Automation | Run ESLint after changes |

## 2. Distinctions between components

### Skills vs Subagent

| Aspect | Skills | Subagent |
|------|--------|---------|
| Essence | Reusable knowledge or flow | Independent execution unit |
| Core value | Reuse content across different tasks | Context isolation |
| Fitting scenario | Reference material, standard flows | Large-scale code analysis or parallel tasks |

### CLAUDE.md vs Skills

| Aspect | CLAUDE.md | Skills |
|------|-----------|--------|
| Loading method | Auto-loaded every session | Loaded on demand |
| File reference | Supports @path | Supports @path |
| Can trigger a flow | No | Yes |
| Best use | Global rules | Reusable flows |

### MCP vs Skill

| Aspect | MCP | Skills |
|------|-----|--------|
| Essence | External-system connection protocol | Knowledge or flow |
| Capability provided | Tool interface and data access | Usage and business logic |
| Example | Slack, DB | Code-review flow |

They are usually combined: MCP provides the connection, Skills define the usage.

## 3. Plugins & Marketplace

Components can be packaged as a Plugin for distribution.

```
Plugin
  ├── Skills
  ├── Hooks
  ├── Subagents
  └── MCP Servers
         ↓
    Marketplace (package and distribute extension features)
```

Skills use namespaces (e.g. /my-plugin:review) to avoid collisions.

## 4. Component hierarchy and merge rules

Components stack in 4 layers (additive):

```
User level
  ↓
Project level
  ↓
Plugin level
  ↓
Managed policy level
```

The CLAUDE.md files of all layers are loaded and merged into the conversation context. Conflict resolution: more specific rules take precedence.

### Combination usage examples

| Combination | Behavior | Example |
|------|---------|------|
| Skills + MCP | MCP provides the connection, Skills define the usage | Skills describe the DB schema |
| Skills + Subagent | Skills launch multiple Subagents | /audit checks security and performance simultaneously |
| CLAUDE.md + Skills | Global rules + on-demand knowledge | CLAUDE.md defines the API conventions |
| Hook + MCP | Hook calls an external system | Notify Slack after a critical file change |

## 5. Context cost

Each extension component consumes the model's context window.

| Component | Load timing | Loaded content | Context cost |
|------|---------|---------|---------|
| CLAUDE.md | At session start | All content | Every request (high) |
| Skills | At session start + on invocation | Description + all content | Relatively low |
| MCP Servers | At session start | Tool definitions | Every request (high) |
| Subagents | At creation | Independent context | Isolated from the main session |
| Hooks | On trigger | None by default | Zero |

A balance between capability and cost is required. Tips: set `disable-model-invocation: true` and the Skill is loaded only on manual invocation, with zero cost.

---

## Potential connection to the agent payment layer (under consideration)

The following are early-stage associations, subjects for future consideration.

1. **Provide payment capability as an MCP Server**: any Agent calls [[agent-economy/2026-04-08_agent-payment-infrastructure-research|決済機能]] via the MCP protocol (check_balance, authorize_payment, get_price, dispute). The lower layer depends on [[systems/erc-4337-overview|ERC-4337 プログラマブルウォレット]]
2. **Monetizing the Marketplace**: after becoming [[agent-economy/skill-market-monetization|Plugin Marketplace で有料化が有効]], it can be used as the backend for billing/payment (for the choice of payment currency, see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])
3. **Tiered budget management**: user level → project level → Agent level → task level → single invocation, mapped to the component hierarchy
4. **Financial cost tracking**: similar to context-cost tracking, track the financial cost of each Skill invocation (how much was spent, whether it is worth it)

These directions are unconfirmed, recorded only.

---

*Textualization compiled · 2026-04-16*

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 決済インフラ調査レポート]]
- [[agent-economy/skill-market-monetization|Skill マーケット有料化]]
<!-- /wiki-links:managed -->

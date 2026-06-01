---
source: systems/hook-enforced-compliance
source_hash: f760e5e1747f8cc6
lang: zh
status: machine
fidelity: ok
title: "Hook 强制的合规"
translated_at: 2026-06-01T04:15:40.098Z
---
# Hook 强制的合规


## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 下。请与 [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）]] 对照阅读，以获得同类 / 对比背景；更广泛的系统 / 监管边界请参阅 [[fintech/INDEX|fintech index]]。

## 5 层防御模型（personal OS）

| 层 | 性质 | 实现 |
|---|------|------|
| 1 | **前置注入**（最硬） | UserPromptSubmit hook → 在生成回应前注入 HARD RULE reminder |
| 2 | **输出格式强制** | Pre-flight Compliance Check → ROUTER 首行使用 `🌅 Trigger: ...` |
| 3 | **子代理自证** | Subagent 第一行声明“Task() 真实 launch” |
| 4 | **事后审计** | AUDITOR Compliance Patrol（Mode 3）7-class taxonomy |

**分层本质**：
- Layer 1 是**注入**（主契约之前）
- Layer 2-3 是**形式强制**（回应的结构）
- Layer 4 是**追踪**（累积过去的 violation 并升级）
- Layer 5 是**防止**（不让修改复活过去的 bug）

## 首次 verification pattern

deployment ≠ working。即使配置了 Hook，实际是否 firing 是另一回事。

**到首次实际运行的流程**：
1. Deploy（配置）→ 静态状态
2. First trigger（首次触发）→ 观察是否 firing
3. Firing success（成功）→ reminder 注入到达
4. Observable effect（可观察影响）→ LLM 的回应发生变化

本 wiki 条目本身记录了那个瞬间：2026-04-21 本次会话结束时 Layer 1 hook 首次 firing 成功。

## 升级阶梯（根据违规频率提高强制度）

该设计不是单一防御，而是**根据频率提高强制度**：

- ≥3 同类 / 30 日 → hook 严格度 UP（reminder 具体点名）
- ≥5 同类 / 30 日 → 在 Start Session briefing 中预置 `🚨 Compliance Watch: [type]`
- ≥10 同类 / 90 日 → 每个 Session 执行 AUDITOR Patrol


## 应用可能性


- **合同・SOP**：“写了 = 会被遵守”并不成立 · 审计、处罚、日志才是强制机制
- **代码规范**：lint / CI / pre-commit hook 相当于 Layer 1 
- **组织流程**：review step / sign-off 相当于 Layer 4 
- **法规遵循**：监管机构检查相当于 Layer 4  · 自主检查相当于 Layer 3 （金融领域实例与 [[exchanges/fsa-business-improvement-orders-history|FSA 業務改善命令史]]、[[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制体系]] 并行）

## 与认知特性的关系

对该模式的敏感性与 SOUL `强规则意识・系统完整性希求`（observing 候选 · 2026-04-21 新设）联动。本 wiki 条目本身的出现就是该特性的证据。

## 相关

- personal-os-architecture（准备中）

## 来源

- Public hook and agent-instruction documentation.
- Public workflow-design examples for pre-generation and post-run compliance checks.

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
<!-- /wiki-links:managed -->

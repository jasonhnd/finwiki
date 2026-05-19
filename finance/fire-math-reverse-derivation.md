---
title: FIRE 数学反推框架
aliases: []
domain: finance
kind: knowledge
topic: fire-math-reverse-derivation
created: 2026-04-20
last_updated: 2026-05-03
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: certain
tags: [fire, personal-finance, retirement, safe-withdrawal-rate]
status: confirmed
evidence_count: 3
type: wiki
---

# FIRE 数学反推框架

> [!info] TL;DR
> "从终局倒推本金，再从本金倒推月投——不是'我能存多少'，而是'我必须到达多少'"

## 核心命题

**目标本金 = 退休后年支出 ÷ 安全提取率（SWR）**

这一反推关系是 FIRE（Financial Independence, Retire Early）社区的基石公式，源自 1998 年 Trinity Study。

### 标准参数

| 参数 | 标准值 | 说明 |
|------|--------|------|
| SWR（Safe Withdrawal Rate）| 4% | Trinity Study 原始结论（30 年退休期、股债 60/40、通胀调整）|
| 所需本金倍数 | 25× 年支出 | 4% 的倒数（`1 / 0.04 = 25`）|
| 激进版 SWR | 3-3.3% | 早退休（40+ 年）或更保守的假设（对应 30× - 33× 倍数）|
| 保守版 SWR | 5% | 半退休（持续产生现金流）或市场乐观时（对应 20× 倍数）|

## 四步反推流程

1. **决定终局月支出**（未来通胀后的消费水平）
2. **× 12 → 年支出**
3. **÷ SWR → 目标本金**
4. **从当前净资产 + 月投规模 + 时间窗 + 期望年化 → 反推是否可达**

### 数学校验公式

`本金增长 ≈ 现有本金 × (1 + r)^n + 月投 × 12 × [((1+r)^n - 1) / r]`

其中 r = 年化收益率，n = 年数。

## 缺口分析

反推结果通常揭示**三种缺口**：

| 缺口类型 | 症状 | 应对 |
|---------|------|------|
| 时间不够 | 退休年龄不改 · 路径本金不足 | 延后 FIRE 年 · 加大月投 · 引入其他现金流 |
| 月投不够 | 收入-支出空间小 | 开源（副业 / 加薪）· 节流 · 降低终局消费 |
| 假设过乐观 | 10%+ 年化 · 25+ 年窗口 | 降到 7-8% · 扩大安全垫 · 留出"黑天鹅缓冲" |

## 与"单纯存钱"模式的关键区别

- 存钱模式：起点（当前收支）出发，不知终点
- FIRE 反推：终点（目标本金）出发，反推当下该做什么

→ **心理锚点不同 → 决策优先级不同**

反推视角会让"当下加大月投 10 万"的痛感被"少 10 万导致 11 年后缺 ¥X 亿"的具体数字稀释。

## 安全垫意识

严肃的 FIRE 反推不止算到"刚好到达 ¥X 亿"，而是**预留安全垫**：

- 轻量：目标 × 1.05（5% 缓冲）
- 标准：目标 × 1.2（20% 缓冲）
- 保守：目标 × 1.5（50% 缓冲）

安全垫对冲三重不确定：**年化假设不达 / 通胀超预期 / 非预期支出（医疗 / 家庭）**。

## 适用边界

- 适合有稳定长期投资习惯 + 可预期未来收入的个人
- 不适合短期现金流紧张 / 收入波动极大（freelance / 创业期）的状态
- 对于"退休后仍有业务收入"的半退休（semi-FIRE）模式，月支出中的"必须由本金覆盖"部分才适用 4% rule；其余可用业务现金流覆盖

## 与其他金融规划框架的关系

- **目标本金**：FIRE 的答案问题 "How much"
- **时间价值**：资金时间价值是反推的工具
- **SWR**：Trinity Study 的实证基础

## 参考

- Trinity Study（Cooley, Hubbard, Walz 1998）
- [Wiki: Trinity study]
- FIRE 社区方法论（Mr. Money Mustache 等）

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[finance/multi-jurisdiction-identity-tax-leverage|跨境身份组合的税务杠杆]]
<!-- /wiki-links:managed -->

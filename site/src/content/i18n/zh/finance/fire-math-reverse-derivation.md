---
source: finance/fire-math-reverse-derivation
source_hash: 3729e7acd42627be
lang: zh
status: machine
fidelity: ok
title: "FIRE 数学逆算框架"
translated_at: 2026-05-31T06:16:15.720Z
---

# FIRE 数学逆算框架


## Wiki route

This entry sits under [[finance/INDEX|finance index]]. Read it against [[finance/japan-ib-league-table|Japan IB league table]] for peer / contrast context and [[securities/INDEX|securities index]] for the broader system / regulatory boundary.

## 核心命题

**目标本金 = 退休后年度支出 ÷ 安全提款率（SWR）**

该逆算关系是 FIRE（Financial Independence, Retire Early）社区的基础公式，源自 1998年 的 Trinity Study。

### 标准参数

| 参数 | 标准值 | 说明 |
|------|--------|------|
| SWR（Safe Withdrawal Rate，安全提款率） | 4% | Trinity Study 的原始结论（30年退休期间，股债 60/40，经通胀调整） |
| 所需本金倍数 | 25× 年度支出 | 4%的倒数（`1 / 0.04 = 25`） |
| 激进版 SWR | 3-3.3% | 早期退休（40年以上）或更保守的假设（对应 30× - 33× 倍数） |
| 保守版 SWR | 5% | 半退休（持续产生现金流）或市场乐观时（对应 20× 倍数） |

## 4步逆算流程

1. **确定最终的月度支出**（未来通胀后的消费水平）
2. **× 12 → 年度支出**
3. **÷ SWR → 目标本金**
4. **从现有净资产 + 月度投入额 + 时间窗口 + 预期年化收益率，逆算能否达标**

### 数学验证式

`本金增长 ≈ 当前本金 × (1 + r)^n + 月度投入 × 12 × [((1+r)^n - 1) / r]`

其中 r = 年化收益率，n = 年数。

## 缺口分析

逆算结果通常揭示 **3类缺口**：

| 缺口类型 | 症状 | 应对 |
|---------|------|------|
| 时间不足 | 不改变退休年龄·路径上本金不足 | 推迟 FIRE·增加月度投入·引入其他现金流 |
| 月度投入不足 | 收入 - 支出的空间较小 | 开源（副业 / 升薪）·节流·压低最终消费水平 |
| 假设过于乐观 | 年化 10%+·时间窗口 25年以上 | 下调至 7-8%·扩大安全边际·确保"黑天鹅缓冲" |

## 与"单纯储蓄"模型的本质差异

- 储蓄模型：从起点（当前收支状况）出发，终点不明
- FIRE 逆算：从终点（目标本金）出发，逆算当前应采取何种行动

→ **心理锚点不同 → 决策优先顺序不同**

从逆算视角来看，"现在每月多投 10万円"的痛苦，被"少投 10万円 则 11年后产生¥X亿缺口"这一具体数字所稀释。

## 安全边际意识

认真的 FIRE 逆算不仅仅停留在"恰好达到¥X亿"的计算，而是**留有安全边际**：

- 轻量型：目标 × 1.05（5%缓冲）
- 标准型：目标 × 1.2（20%缓冲）
- 保守型：目标 × 1.5（50%缓冲）

安全边际对冲 3 重不确定性：**年化收益率未达预期 / 通胀超出预想 / 意外支出（医疗 / 家庭）**。

## 适用边界

- 适合拥有稳定长期投资习惯 + 可预测未来收入的个人
- 短期现金流紧张 / 收入波动极大的状态（freelance / 创业期）不适用
- 对于"退休后仍有经营收入"的半 FIRE（semi-FIRE）模式，仅对月度支出中"必须用本金覆盖"的部分适用 4% rule，余额可由经营现金流覆盖

## 与其他金融规划框架的关系

- **目标本金**：FIRE 回答的"需要多少钱"问题（与 [[finance/multi-jurisdiction-identity-tax-leverage|クロスボーダー身分組合せの税務レバレッジ]] 联动，可降低实际目标本金）
- **时间价值**：资金的时间价值是逆算的工具
- **SWR**：Trinity Study 的实证基础（在 [[finance/INDEX|finance index]] 的核心轴与 [[securities/INDEX|securities index]] 的资产配置框架中复用）

## 参考

- Trinity Study（Cooley, Hubbard, Walz 1998）
- [Wiki: Trinity study]
- FIRE 社区方法论（Mr. Money Mustache 等）

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[finance/multi-jurisdiction-identity-tax-leverage|クロスボーダー身分組合せの税務レバレッジ]]
<!-- /wiki-links:managed -->

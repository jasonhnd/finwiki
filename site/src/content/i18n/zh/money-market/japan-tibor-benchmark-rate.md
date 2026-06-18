---
source: money-market/japan-tibor-benchmark-rate
source_hash: 58709e100ae3ffc4
lang: zh
status: machine
fidelity: ok
title: "TIBOR（东京银行间同业拆借利率）"
translated_at: 2026-06-18T15:47:13.952Z
---

# TIBOR（东京银行间同业拆借利率）

## Wiki 路线

本条目归属于 [[money-market/INDEX|money-market index]]。可对照阅读 [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform]] 以获得与 TONA 无风险利率的同类 / 对比背景，[[money-market/call-market-structure|Call market structure]] 了解实际成交的隔夜市场，以及 [[financial-regulators/zenginkyo|the Japanese Bankers Association]] 了解管理机构。

## 摘要

TIBOR（东京银行间同业拆借利率）是一项日本期限银行间参考利率，由 **JBA TIBOR 管理机构（JBATA）** 在每个营业日发布，该机构隶属于 [[financial-regulators/zenginkyo|the Japanese Bankers Association (Zenginkyō)]]。它是一项 **基于报价** 的基准：由一组参考银行提交它们判断优质银行可获得无担保期限资金的利率，JBATA 再根据这些提交值计算出发布利率。

历史上存在过两类 TIBOR：

- **日元 TIBOR（D-TIBOR）**：反映境内无担保拆借市场的资金利率环境。该利率持续发布。
- **欧洲日元 TIBOR（Z-TIBOR）**：反映离岸日本离岸市场的资金环境。JBATA **已永久停止发布欧洲日元 TIBOR，最后一次定盘于 30 December 2024**，使日元 TIBOR 成为留存下来的 TIBOR。

对 FinWiki 而言，TIBOR 是留存下来的 **期限、信用敏感型** 基准，在日本后 LIBOR 时代的多利率格局中与 **隔夜、无风险的** [[derivatives/ois-tona-curve|TONA]] 并存。它仍然锚定着许多需要前瞻性期限定盘的日元贷款和部分债券。

## TIBOR 衡量什么

| 要素 | 解读 |
|---|---|
| 类型 | 基于报价的期限参考利率，而非按成交量加权的利率。 |
| 管理机构 | JBA TIBOR 管理机构（JBATA），一家隶属于日本银行业协会的一般社团法人。 |
| 输入 | 参考银行提交的、优质银行可获得无担保期限资金的利率。 |
| 期限 | 1 week、1 month、3 months、6 months 以及 12 months。 |
| 计算 | 发布利率根据参考银行报价经截尾后计算得出（在平均前剔除最高和最低提交值）。 |
| 发布 | 每个东京营业日。 |
| 货币 | 日元。 |

由于 TIBOR 是基于参考银行判断而非基于实际隔夜成交池构建的，它带有纯无风险隔夜利率所不具备的 **银行信用 / 期限溢价成分**。这种信用敏感性正是部分贷款方在期限贷款中偏好它而非复利无风险利率的原因——也正是它在全球基准操纵事件之后需要进行与 IOSCO 一致的治理改革的原因。

## D-TIBOR 与 Z-TIBOR

| 类别 | 反映 | 状态 |
|---|---|---|
| 日元 TIBOR（D-TIBOR） | 境内日本无担保拆借市场资金环境。 | 持续发布。 |
| 欧洲日元 TIBOR（Z-TIBOR） | 离岸日本离岸市场（欧洲日元）资金环境。 | 已永久停止；最后发布于 30 December 2024。 |

欧洲日元 TIBOR 的停止沿循了一条多年的改革路径。鉴于日本离岸市场长期萎缩，JBATA 于 2018 发布了整合日元 TIBOR 与欧洲日元 TIBOR 的方案，就回退安排及永久停止开展了公开征询，并通过一份与 [[financial-regulators/fsa|FSA]] 协调的 2024 声明确认了欧洲日元 TIBOR 的终结。欧洲日元 TIBOR 的市场使用者被引导至回退安排（替代利率加利差调整）。

## TIBOR 与 TONA

TIBOR 与 [[derivatives/ois-tona-curve|TONA]] 是完全不同的事物，绝不应混为一谈：

| 属性 | TIBOR | TONA |
|---|---|---|
| 性质 | 期限、前瞻性、基于报价。 | 隔夜、回溯性、基于成交。 |
| 来源 | 参考银行提交值。 | 实际无担保隔夜拆借成交的成交量加权平均值。 |
| 信用含量 | 嵌入银行信用 / 期限溢价。 | 接近无风险。 |
| 管理机构 | JBATA（隶属 JBA）。 | 日本银行。 |
| 典型用途 | 期限贷款、部分需要期限定盘的债券。 | OIS、贴现、基于 RFR 的产品。 |
| 改革状态 | 已改革并留存（欧洲日元 TIBOR 于 2024终结）。 | 后 LIBOR 时代指定的日元无风险利率。 |

二者引用的是同一底层资金体系（参见 [[money-market/call-market-structure|the uncollateralized call market]]），但表达方式不同。同一期间内期限 TIBOR 与复利 TONA 之间的利差本身就是一个市场关注的基差，并在掉期市场中以 TIBOR 对 TONA 基差报价。

## TIBOR 的应用场景

- **日元银团贷款与双边贷款**：许多境内浮动利率贷款按 1M / 3M / 6M TIBOR 重定价，因为借款人和贷款人希望在每个计息期开始时确定一个已知的期限利率，而非按事后复利计算的利率。
- **浮动利率票据及部分结构性产品**：需要前瞻性期限定盘的工具。
- **浮动利率 NCD 的参考**：部分浮动利率 [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]] 参考此类短期日元基准。
- **衍生品**：存量及期限定盘的日元利率衍生品；参见 [[derivatives/japan-irs-market|the JPY IRS market]] 了解引用 TIBOR 的掉期如何在 TONA-OIS 曲线上贴现。

## 治理与改革背景

TIBOR 改革使该基准与 IOSCO《金融基准原则》保持一致：

- 一个明确的管理机构（JBATA），具备既定的计算与监督框架。
- 一个特定的参考银行小组及提交方法论，并在提交不足时设有回退 / 应急框架。
- 针对重大变更（回退、整合、欧洲日元停止）的公开征询流程。
- 与 [[financial-regulators/fsa|FSA]] 及更广泛的 [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] 协调，通过日本银行召集的跨行业委员会运作。

正是这套治理使 TIBOR 得以在终结了 LIBOR 的全球 IBOR 转型中存续下来，而未被停用。

## 阅读清单

1. 将日元 TIBOR（持续）与欧洲日元 TIBOR（已于 30 December 2024 停止）区分开。
2. 将 TIBOR 视为基于报价且信用敏感——与已成交的隔夜利率不是一回事。
3. 当合约引用 TIBOR 时，确认其期限（1W / 1M / 3M / 6M / 12M）。
4. 对于定价 / 贴现，请记住即使浮动端为 TIBOR，有担保的日元交易仍按 [[derivatives/ois-tona-curve|TONA-OIS]] 贴现。
5. 将 TIBOR 对 TONA 的利差解读为信用 / 期限溢价信号，而非数据错误。

## 与日本金融集团的相关性

- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] 是 JBA TIBOR 管理机构的机构归属。
- [[financial-regulators/fsa|FSA]] 是协调基准改革的监管机构。
- [[megabanks/mufg]]、[[megabanks/smfg]] 和 [[megabanks/mizuho-fg]] 作为贷款账簿引用 TIBOR 的主要贷款方参与其中，并（历史上）作为银行间市场中参考小组类型的机构参与。
- [[financial-regulators/boj-monetary-policy]] 制定政策框架，驱动着 TIBOR 所反映的底层短端利率环境。

## 边界情形

- **TIBOR 与 TONA**：期限、基于报价 对 隔夜、基于成交；上文已述。
- **TIBOR 与 LIBOR**：两者均为基于报价的 IBOR，但日元 LIBOR 已停止，而 TIBOR 经改革并留存；不要假定"IBOR"意味着 TIBOR 也已终结。
- **D-TIBOR 与 Z-TIBOR**：境内 对 离岸（欧洲日元）；Z-TIBOR 已停用。
- **TIBOR 与政策利率**：TIBOR 是市场基准，而非日本银行的政策指引利率。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/boj-open-market-operations]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/zenginkyo]]
- [[financial-regulators/fsa]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 来源

- JBA TIBOR 管理机构（JBATA）：《关于 JBA TIBOR》，含期限集合与计算方法。
- JBA TIBOR 管理机构：《JBA TIBOR 改革》，涵盖 IOSCO 一致性以及日元 / 欧洲日元整合方案。
- JBA TIBOR 管理机构：关于欧洲日元 TIBOR 终结的声明及永久停止公开征询的结果。
- 日本银行：日元利率基准跨行业委员会页面（基准改革协调）。
- 金融厅：关于欧洲日元 TIBOR 终结的公告。

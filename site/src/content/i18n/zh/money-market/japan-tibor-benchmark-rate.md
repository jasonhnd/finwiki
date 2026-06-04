---
source: money-market/japan-tibor-benchmark-rate
source_hash: f50035dac3730ce9
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "TIBOR（东京银行间同业拆借利率）"
translated_at: 2026-06-05T00:00:00.000Z
---
# TIBOR（东京银行间同业拆借利率）

## 维基路径

本条目归于 [[money-market/INDEX|money-market index]] 之下。关于与TONA无风险利率的同侪 / 对照背景，请对照 [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform]] 阅读；关于实际成交的隔夜市场，请参阅 [[money-market/call-market-structure|Call market structure]]；关于管理机构，请参阅 [[financial-regulators/zenginkyo|the Japanese Bankers Association]]。

## TL;DR

TIBOR（东京银行间同业拆借利率）是一项日本期限同业参考利率，由隶属于 [[financial-regulators/zenginkyo|the Japanese Bankers Association (Zenginkyō)]] 的机构 **JBA TIBOR Administration（JBATA）** 于每个营业日公布。它是一项 **基于报价** 的基准：由一组参考银行报送它们判断优质银行能够获得无担保期限资金的利率，JBATA再据这些报送计算出公布利率。

历来存在两个TIBOR族系：

- **日元TIBOR（D-TIBOR）**：反映国内无担保拆借市场的融资利率环境。该利率继续公布。
- **欧洲日元TIBOR（Z-TIBOR）**：反映离岸日本离岸市场的融资环境。JBATA **永久停止欧洲日元TIBOR的公布，最终定盘为2024年12月30日**，使日元TIBOR成为存续的TIBOR。

对FinWiki而言，在日本后LIBOR时代的多基准利率世界里，TIBOR是与 **隔夜、无风险** 的 [[derivatives/ois-tona-curve|TONA]] 并存的、存续的 **期限、信用敏感** 基准。它仍然锚定着许多需要前瞻性期限定盘的日元贷款和部分债券。

## TIBOR衡量什么

| 要素 | 解读 |
|---|---|
| 类型 | 基于报价的期限参考利率，而非按交易成交量加权的利率。 |
| 管理人 | JBA TIBOR Administration（JBATA），隶属于日本银行业协会的一般社团法人。 |
| 输入 | 参考银行报送的、优质银行能够获得无担保期限资金的利率。 |
| 期限 | 1周、1个月、3个月、6个月、12个月。 |
| 计算 | 由参考银行报价经截尾后（在求平均之前剔除最高与最低报送）计算得出的公布利率。 |
| 公布 | 每个东京营业日。 |
| 货币 | 日元。 |

由于TIBOR是基于参考银行的判断、而非来自实际隔夜成交的池子构建的，它带有纯无风险隔夜利率所不具备的 **银行信用 / 期限溢价成分**。这种信用敏感性正是一些贷款人在期限放贷时偏好它而非复利无风险利率的原因 —— 也是它在全球基准操纵事件之后需要进行与IOSCO对齐的治理改革的原因。

## D-TIBOR vs Z-TIBOR

| 族系 | 反映 | 状态 |
|---|---|---|
| 日元TIBOR（D-TIBOR） | 日本国内无担保拆借市场的融资环境。 | 持续公布。 |
| 欧洲日元TIBOR（Z-TIBOR） | 离岸日本离岸市场（欧洲日元）的融资环境。 | 永久停止；最终公布2024年12月30日。 |

欧洲日元TIBOR的停止经历了多年的改革进程。鉴于日本离岸市场的长期收缩，JBATA于2018年公布了整合日元TIBOR与欧洲日元TIBOR的方案，就回退及永久停止开展了公众咨询，并通过一份与 [[financial-regulators/fsa|FSA]] 协调的2024年声明确认了欧洲日元TIBOR的终止。欧洲日元TIBOR的市场用户被引导至回退安排（替代利率加利差调整）。

## TIBOR vs TONA

TIBOR与 [[derivatives/ois-tona-curve|TONA]] 是两种不同的东西，绝不应混为一谈：

| 属性 | TIBOR | TONA |
|---|---|---|
| 性质 | 期限、前瞻性、基于报价。 | 隔夜、回溯性、基于交易。 |
| 来源 | 参考银行报送。 | 实际无担保隔夜拆借成交的成交量加权平均。 |
| 信用内容 | 内嵌银行信用 / 期限溢价。 | 近乎无风险。 |
| 管理人 | JBATA（隶属JBA）。 | 日本银行。 |
| 典型用途 | 期限贷款、需要期限定盘的部分债券。 | OIS、贴现、基于RFR的产品。 |
| 改革状态 | 经改革并保留（欧洲日元TIBOR于2024年终止）。 | 后LIBOR时代被指定的日元无风险利率。 |

二者参考同一基础融资体系（见 [[money-market/call-market-structure|the uncollateralized call market]]），但以不同方式加以表达。同一期间内期限TIBOR与复利TONA之间的利差本身就是市场关注的基差，并在掉期市场上以TIBOR对TONA基差报价。

## TIBOR用于何处

- **银团及双边日元贷款**：许多国内浮动利率贷款以1M / 3M / 6M TIBOR重定价，因为借款人和贷款人想要在每个期间开始时确定的已知期限利率，而非后置复利的利率。
- **浮动利率票据及部分结构化产品**：需要前瞻期限定盘的工具。
- **浮动NCD的参考**：部分浮动利率 [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]] 参考此族系中的短期日元基准。
- **衍生品**：存量及期限定盘的日元利率衍生品；关于参考TIBOR的掉期如何在TONA-OIS曲线上贴现，见 [[derivatives/japan-irs-market|the JPY IRS market]]。

## 治理与改革背景

TIBOR改革使该基准与金融基准的IOSCO原则对齐：

- 一个具有明确计算与监督框架的清晰管理人（JBATA）。
- 一个指定的参考银行组及报送方法，并在报送不足时设有回退 / 应急框架。
- 针对重大变更（回退、整合、欧洲日元停止）的公众咨询流程。
- 与 [[financial-regulators/fsa|FSA]] 以及通过日银召集的跨行业委员会推进的更广泛的 [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] 的协调。

正是这一治理，使TIBOR得以在终结LIBOR的全球IBOR转换中存续下来，而未被停用。

## 阅读清单

1. 区分日元TIBOR（继续）与欧洲日元TIBOR（2024年12月30日停止）。
2. 将TIBOR视为基于报价且信用敏感 —— 与成交的隔夜利率并非同一回事。
3. 当合同参考TIBOR时，确认其期限（1W / 1M / 3M / 6M / 12M）。
4. 对于定价 / 贴现，记住即便浮动端为TIBOR，担保日元交易仍在 [[derivatives/ois-tona-curve|TONA-OIS]] 上贴现。
5. 将TIBOR对TONA的利差读作信用 / 期限溢价信号，而非数据错误。

## JapanFG相关性

- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] 是JBA TIBOR Administration的制度归属。
- [[financial-regulators/fsa|FSA]] 是协调基准改革的监管当局。
- [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 作为其贷款账簿参考TIBOR的主要贷款人参与，并（历史上）作为银行间市场中的参考组类机构参与。
- [[financial-regulators/boj-monetary-policy]] 设定驱动TIBOR所反映的基础短端利率环境的政策框架。

## 边界情形

- **TIBOR vs TONA**：期限·基于报价 vs 隔夜·基于交易；上文已述。
- **TIBOR vs LIBOR**：二者都曾是基于报价的IBOR，但日元LIBOR已停止，而TIBOR经改革并保留；不要因为同为"IBOR"就以为TIBOR也终止了。
- **D-TIBOR vs Z-TIBOR**：国内 vs 离岸（欧洲日元）；Z-TIBOR已停用。
- **TIBOR vs 政策利率**：TIBOR是市场基准，而非日银的政策方针利率。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
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

- JBA TIBOR Administration（JBATA）：《关于JBA TIBOR》，含期限组合与计算方法。
- JBA TIBOR Administration：《JBA TIBOR改革》，涵盖IOSCO对齐与日元 / 欧洲日元整合方案。
- JBA TIBOR Administration：关于欧洲日元TIBOR终止的声明及永久停止公众咨询的结果。
- 日本银行：日元利率基准跨行业委员会页面（基准改革协调）。
- 金融厅：关于欧洲日元TIBOR终止的公布。

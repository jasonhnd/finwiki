---
source: money-market/japan-torf-term-risk-free-rate
source_hash: 37030256cdbd98a8
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "TORF（东京期限无风险利率）"
translated_at: 2026-06-05T00:00:00.000Z
---
# TORF（东京期限无风险利率）

## 维基路径

本条目归于 [[money-market/INDEX|money-market index]] 之下。关于基于报价、信用敏感的对照，请对照 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 阅读；关于日元无风险利率体系如何构建，请参阅 [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform (TONA)]]；关于TORF据以计算的衍生品输入，请参阅 [[derivatives/ois-tona-curve|the OIS TONA curve]]。监管锚是 [[financial-regulators/fsa|the FSA]]。

## TL;DR

TORF（东京期限无风险利率）是日元的一项 **前瞻性期限无风险利率**，由 **QUICK Benchmarks Inc.（QBS）** 于每个营业日计算并公布。它由以无担保隔夜拆借利率（即 [[derivatives/ois-tona-curve|TONA]]）为标的的日元利率衍生品（OIS）数据导出。实际上，TORF将 *隔夜、回溯性* 的TONA转化为借款人可在利息期开始时看到的 *期限、前瞻性* 定盘值。

TORF是 **日元LIBOR**（其公布于2021年末停止）的日元后继利率之一。在日本后LIBOR时代的多基准利率世界里，它作为第三种参考类型存在：

- **[[money-market/japan-tibor-benchmark-rate|TIBOR]]** —— 期限、基于报价、信用敏感。
- **[[derivatives/ois-tona-curve|TONA]]** —— 隔夜、基于交易、近乎无风险。
- **TORF** —— 期限、无风险，由参考TONA的OIS数据 *导出*。

对FinWiki而言，TORF是"无风险利率的期限版本"：它在不含TIBOR所内嵌银行信用成分的情况下，提供了期限定盘的前瞻性便利。

## TORF衡量什么

| 要素 | 解读 |
|---|---|
| 类型 | 前瞻性期限无风险参考利率。 |
| 管理人 | QUICK Benchmarks Inc.（QBS），由QUICK株式会社设立。 |
| 标的 | 参考无担保隔夜拆借利率（TONA）的日元OIS（隔夜指数掉期）交易数据。 |
| 信用内容 | 近乎无风险 —— 几乎不含TIBOR所内嵌的银行信用 / 期限溢价。 |
| 方向 | 前瞻性：期限利率在利息期 *开始* 时即已知。 |
| 监管状态 | TORF依《金融商品交易法》被指定为"特定金融基准"，QBS被指定为"特定金融基准管理人"，由 [[financial-regulators/fsa|FSA]] 监管。 |
| 货币 | 日元。 |

由于TORF是从OIS数据、而非参考银行判断（TIBOR）或隔夜现金交易池（TONA）构建的，它占据了一个独特的方法论位置：一项仍承继其下隔夜利率 *无风险* 性格的 *期限* 利率。

## TORF vs TONA vs TIBOR

| 属性 | TORF | TONA | TIBOR |
|---|---|---|---|
| 性质 | 期限、前瞻性。 | 隔夜、回溯性。 | 期限、前瞻性。 |
| 基础 | 由参考TONA的OIS数据导出。 | 实际无担保隔夜拆借成交的成交量加权平均。 | 参考银行对无担保期限资金的报价。 |
| 信用内容 | 近乎无风险。 | 近乎无风险。 | 内嵌银行信用 / 期限溢价。 |
| 管理人 | QUICK Benchmarks Inc. | [[financial-regulators/boj-monetary-policy|Bank of Japan]]。 | JBA TIBOR Administration（JBATA）。 |
| 典型用途 | 想要 *前瞻性无风险* 期限定盘的贷款 / 产品。 | OIS、贴现、后置复利产品。 | 想要信用敏感期限定盘的期限贷款 / 债券。 |

三者互补，而非可互换。同一期限内期限TORF与期限 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 之间的利差，实际上是市场对银行信用 / 期限溢价成分的读数 —— 因为二者的主要差异在于是否内嵌银行信用。

## 为何需要期限RFR

后置复利的TONA对部分借款人在操作上颇为不便：准确的利息额只有在每日隔夜利率被观测并复利之后、临近期末时才得以知晓。因此全球基准转换在若干货币中产生了 **期限无风险利率**，使那些在期初需要确定性的现金市场用户 —— 出于开票、预算编制，或预期已知期限利率的系统 —— 仍能避开信用敏感的IBOR。

TORF是对这一需求的日元答案。它是日银召集的 **日元利率基准跨行业委员会** 为将日元现金产品从LIBOR迁移所确定的若干方案之一，与（后置的）TONA复利及保留的TIBOR并列。

## TORF在现金产品中的位置

- **贷款**：想要前瞻性、无风险期限参考的双边及部分银团日元贷款，可参考TORF，而非TIBOR（信用敏感）或（后置的）复利TONA。
- **债券 / FRN**：在期初需要已知期限票息的工具。
- **操作便利性**：TORF适合需要预先获知利率的借款人与系统；后置的TONA适合那些乐于事后计算利息者。

对于贴现及大多数已清算衍生品，日元市场仍在 [[derivatives/ois-tona-curve|TONA-OIS]] 上贴现；TORF主要是一项 *现金产品期限定盘* 基准，而非贴现曲线。

## 治理背景

TORF在FIEA基准监管框架下的指定，将其置于与重塑 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 相同的、与IOSCO对齐的治理机制之中：

- 一个具有公开方法论、运营规则与行为准则的指定管理人（QBS）。
- 作为特定金融基准接受FSA监管。
- 与通过日银召集的委员会推进的更广泛的 [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] 的协调。

正是这一治理，使TORF能够作为可用的参考利率而非未受监管的数据产品发挥作用。

## 阅读清单

1. 将TORF视为 *期限且无风险* —— 它既非隔夜的TONA，也非信用敏感的TIBOR。
2. 记住TORF是 *由* 参考TONA的OIS数据 *导出*，因此承继TONA的无风险性格，但将其表达为前瞻性期限利率。
3. 当合同参考TORF时，确认其期限。
4. 不要假定TORF是贴现曲线；担保日元交易仍在 [[derivatives/ois-tona-curve|TONA-OIS]] 上贴现。
5. 将TORF对TIBOR的利差读作信用 / 期限溢价信号，正如 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 对TONA的基差。

## JapanFG相关性

- [[financial-regulators/fsa|FSA]] 将TORF作为特定金融基准、将其管理人作为特定金融基准管理人进行监管。
- [[financial-regulators/boj-monetary-policy|BoJ]] 管理TORF之下的隔夜利率TONA，并召集了跨行业基准改革委员会。
- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] 容纳着对照基准TIBOR的管理人JBATA。
- 大型银行 [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 是在贷款文件中于TORF、TIBOR与复利TONA之间作出选择的主要日元贷款人。

## 边界情形

- **TORF vs TONA**：期限·前瞻性 vs 隔夜·回溯性；TORF由参考TONA的OIS数据导出。
- **TORF vs TIBOR**：二者皆为期限且前瞻性，但TORF无风险，而TIBOR内嵌银行信用。
- **TORF vs LIBOR**：TORF是日元LIBOR的后继期限利率，但为无风险且由OIS导出，而非基于报价的IBOR。
- **TORF vs 贴现曲线**：TORF是现金产品期限定盘基准，而非 [[derivatives/ois-tona-curve|TONA-OIS discounting curve]]。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/call-market-structure]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/fsa]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/zenginkyo]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 来源

- QUICK Money World / QUICK株式会社：TORF（东京期限无风险利率）概要，含由参考TONA的OIS数据导出及作为LIBOR后继的定位。
- QUICK Benchmarks Inc.（torf.co.jp）：将TORF指定为特定金融基准、将QBS指定为特定金融基准管理人。
- 日本银行：日元利率基准跨行业委员会页面。
- 金融厅：LIBOR转换 / 基准改革信息页面。
- 日本银行：拆借市场数据（作为TORF基础的TONA / 无担保隔夜拆借利率）。

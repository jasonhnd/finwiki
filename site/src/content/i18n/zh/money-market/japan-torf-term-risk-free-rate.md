---
source: money-market/japan-torf-term-risk-free-rate
source_hash: 9db970d03edb689b
lang: zh
status: machine
fidelity: ok
title: "TORF（东京定期无风险利率）"
translated_at: 2026-06-18T15:47:13.957Z
---

# TORF（东京定期无风险利率）

## 维基路径

本词条归入 [[money-market/INDEX|money-market index]]。请将其与 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 对照阅读，了解基于报价的、对信用敏感的对比；与 [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform (TONA)]] 对照，了解日元无风险利率体系是如何构建的；与 [[derivatives/ois-tona-curve|the OIS TONA curve]] 对照，了解 TORF 据以计算的衍生品输入。监管锚点是 [[financial-regulators/fsa|the FSA]]。

## 摘要

TORF（东京定期无风险利率）是一种面向日元的**前瞻性定期无风险利率**，由 **QUICK Benchmarks Inc.（QBS）**于每个营业日计算并发布。它源自标的为无担保隔夜拆借利率（即 [[derivatives/ois-tona-curve|TONA]]）的日元利率衍生品（OIS）数据。实际上，TORF 将*隔夜、回溯性*的 TONA 转化为借款人在计息期开始时即可看到的*定期、前瞻性*的定盘价。

TORF 是 **JPY LIBOR**（其发布已于 2021 末终止）的日元后继利率之一。在日本后 LIBOR 的多利率世界中，它作为第三种参考类型存在：

- **[[money-market/japan-tibor-benchmark-rate|TIBOR]]** —— 定期、基于报价、对信用敏感。
- **[[derivatives/ois-tona-curve|TONA]]** —— 隔夜、基于交易、近乎无风险。
- **TORF** —— 定期、无风险，*源自*以 TONA 为参考的 OIS 数据。

对 FinWiki 而言，TORF 是"无风险利率的定期版本"：它提供定期定盘价的前瞻性便利，而不含 TIBOR 中所嵌入的银行信用成分。

## TORF 衡量什么

| 要素 | 解读 |
|---|---|
| 类型 | 前瞻性的定期无风险参考利率。 |
| 管理人 | QUICK Benchmarks Inc.（QBS），由 QUICK Corp. 设立。 |
| 标的 | 以无担保隔夜拆借利率（TONA）为参考的日元 OIS（隔夜指数掉期）交易数据。 |
| 信用成分 | 近乎无风险——它几乎不含 TIBOR 所嵌入的银行信用 / 期限溢价。 |
| 方向 | 前瞻性：定期利率在计息期*开始时*即已知。 |
| 监管状态 | TORF 被指定为《金融商品交易法》下的"特定金融基准"，QBS 被指定为"特定金融基准管理人"，由 [[financial-regulators/fsa|FSA]] 监管。 |
| 货币 | 日元。 |

由于 TORF 是基于 OIS 数据而非参考银行的判断（TIBOR）或一组隔夜现金交易（TONA）构建的，它占据了一个独特的方法论生态位：一种*定期*利率，但仍继承其下隔夜利率的*无风险*特征。

## TORF vs TONA vs TIBOR

| 属性 | TORF | TONA | TIBOR |
|---|---|---|---|
| 性质 | 定期、前瞻性。 | 隔夜、回溯性。 | 定期、前瞻性。 |
| 基础 | 源自以 TONA 为参考的 OIS 数据。 | 实际无担保隔夜拆借交易的成交量加权平均。 | 参考银行对无担保定期融资的报价。 |
| 信用成分 | 近乎无风险。 | 近乎无风险。 | 嵌入银行信用 / 期限溢价。 |
| 管理人 | QUICK Benchmarks Inc. | [[financial-regulators/boj-monetary-policy|Bank of Japan]]。 | JBA TIBOR 管理机构（JBATA）。 |
| 典型用途 | 希望获得*前瞻性无风险*定期定盘价的贷款 / 产品。 | OIS、贴现、按期末复利的产品。 | 希望获得对信用敏感的定期定盘价的定期贷款 / 债券。 |

三者互补，而非可互换。同一期限上的定期 TORF 与定期 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 之间的利差，实际上是市场对银行信用 / 期限溢价成分的解读——因为两者的主要差异在于是否嵌入银行信用。

## 为何需要一个定期无风险利率

按期末复利的 TONA 对某些借款人而言在操作上颇为棘手：确切的利息金额只有在期间*接近结束时*、在观察并复利计算了每日隔夜利率之后才知道。因此，全球基准过渡在若干货币中产生了**定期无风险利率**，以便那些在期间开始时即需要确定性的现金市场用户——用于开票、预算编制，或预期获得已知定期利率的系统——仍能避免使用对信用敏感的 IBOR。

TORF 是对该需求的日元答案。它是由日本银行召集的**日元利率基准跨行业委员会**为将日元现金产品迁离 LIBOR 而确定的若干方法之一，与 TONA 复利（按期末）以及保留的 TIBOR 并列。

## TORF 在现金产品中的定位

- **贷款**：希望获得前瞻性、无风险定期参考的双边及部分银团日元贷款，可以参考 TORF，而非 TIBOR（对信用敏感）或复利 TONA（按期末）。
- **债券 / 浮息票据（FRN）**：需要在期间开始时即有已知定期票息的工具。
- **操作便利性**：TORF 适合需要预先获得利率的借款人和系统；按期末的 TONA 适合那些乐于事后计算利息的主体。

对于贴现及大多数已清算的衍生品，日元市场仍以 [[derivatives/ois-tona-curve|TONA-OIS]] 进行贴现；TORF 主要是一种*现金产品定期定盘*基准，而非贴现曲线。

## 治理背景

TORF 在《金融商品交易法》基准监管框架下的指定，将其置于重塑了 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 的同一套与 IOSCO 一致的治理制度之内：

- 一位拥有公开方法论、操作规则和行为准则的指定管理人（QBS）。
- 金融厅作为对特定金融基准的监管。
- 通过日本银行召集的委员会进行的、与更广泛的 [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] 的协调。

正是这一治理使 TORF 能够作为一种可用的参考利率发挥作用，而非一个不受监管的数据产品。

## 阅读核对清单

1. 将 TORF 视为*定期且无风险*——它既不是隔夜的 TONA，也不是对信用敏感的 TIBOR。
2. 记住 TORF 是*源自*以 TONA 为参考的 OIS 数据，因此它继承了 TONA 的无风险特征，但将其表达为前瞻性的定期利率。
3. 当合同参考 TORF 时，确认其期限。
4. 不要假定 TORF 是一条贴现曲线；有担保的日元交易仍以 [[derivatives/ois-tona-curve|TONA-OIS]] 进行贴现。
5. 将 TORF 对 TIBOR 的利差解读为信用 / 期限溢价信号，如同 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 对 TONA 的基差。

## 日本金融集团相关性

- [[financial-regulators/fsa|FSA]] 作为特定金融基准监管 TORF，并将其管理人作为特定金融基准管理人加以监管。
- [[financial-regulators/boj-monetary-policy|BoJ]] 管理 TONA，即 TORF 之下的隔夜利率，并召集了跨行业基准改革委员会。
- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] 托管 JBATA，即对比基准 TIBOR 的管理机构。
- 大型银行 [[megabanks/mufg]]、[[megabanks/smfg]] 和 [[megabanks/mizuho-fg]] 是在贷款文件中于 TORF、TIBOR 和复利 TONA 之间作出选择的主要日元放款人。

## 边界情形

- **TORF vs TONA**：定期前瞻性 vs 隔夜回溯性；TORF 源自以 TONA 为参考的 OIS 数据。
- **TORF vs TIBOR**：两者都是定期且前瞻性的，但 TORF 无风险，而 TIBOR 嵌入银行信用。
- **TORF vs LIBOR**：TORF 是一种 JPY LIBOR 后继定期利率，但它无风险且源自 OIS，而非基于报价的 IBOR。
- **TORF vs 贴现曲线**：TORF 是一种现金产品定期定盘基准，而非 [[derivatives/ois-tona-curve|TONA-OIS discounting curve]]。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
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

- QUICK Money World / QUICK Corp.：TORF（东京定期无风险利率）概览，包括其源自以 TONA 为参考的 OIS 数据，以及作为 LIBOR 后继者的定位。
- QUICK Benchmarks Inc.（torf.co.jp）：将 TORF 指定为特定金融基准、将 QBS 指定为特定金融基准管理人。
- 日本银行：日元利率基准跨行业委员会界面。
- 金融厅：LIBOR 过渡 / 基准改革信息界面。
- 日本银行：拆借货币市场数据（TONA / TORF 之下的无担保隔夜拆借利率）。

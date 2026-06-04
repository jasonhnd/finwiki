---
source: money-market/japan-money-market-benchmark-reform-tona
source_hash: 635200236d631d60
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本货币市场基准改革（TONA与多基准利率的世界）"
translated_at: 2026-06-05T00:00:00.000Z
---
# 日本货币市场基准改革（TONA与多基准利率的世界）

## 维基路径

本条目归于 [[money-market/INDEX|money-market index]] 之下。关于存续的期限基准，请对照 [[money-market/japan-tibor-benchmark-rate|TIBOR]] 阅读；关于TONA据以计算的资金市场，请参阅 [[money-market/call-market-structure|Call market structure]]。其在衍生品定价上的表达是 [[derivatives/ois-tona-curve|the OIS TONA curve]]。

## TL;DR

日元利率基准改革以一项扎根于实际货币市场的 **无风险利率（RFR）** 取代了日元LIBOR，同时保留了一项经过改革的期限基准。其结果是一个有意为之的 **多基准利率世界**：

- **TONA（Tokyo Overnight Average Rate）** 是被指定的日元无风险利率。它是日本银行对 **无担保隔夜拆借** 交易的成交量加权平均 —— 也就是说，它直接由 [[money-market/call-market-structure|call market structure]] 中所述的资金市场计算得出。
- **TIBOR** 作为一项经过改革、基于报价的期限基准存续（见 [[money-market/japan-tibor-benchmark-rate|TIBOR]]），如今已不含其欧洲日元（Z-TIBOR）部分。
- **日元LIBOR** 已停止：具代表性的日元LIBOR于2021年末终止，合成日元LIBOR于2023年末逐步退出。

对FinWiki而言，本条目是从货币市场一侧讲述谁改革了什么、以及为何拆借市场处于后LIBOR时代日元利率体系中心的叙事。定价 / 贴现机制载于 [[derivatives/ois-tona-curve|the OIS TONA curve]] 条目；本页面涵盖基准治理与市场结构的故事。

## 改革主体

| 主体 | 角色 |
|---|---|
| 无风险参考利率研究小组 | 在其2016年12月报告中将 **无担保隔夜拆借利率（TONA）** 确定为日元无风险参考利率。 |
| 日元利率基准跨行业委员会 | 2018年8月设立；主导日元LIBOR转换、培育OIS市场，并通过多次全体会议发布转换指引的主要官民论坛。 |
| 日本银行 | 担任委员会秘书处，计算并公布TONA，并监督货币市场的运行。 |
| [[financial-regulators/fsa|Financial Services Agency (FSA)]] | 对转换及基准管理人的监管当局。 |
| [[financial-regulators/zenginkyo|Japanese Bankers Association]] / JBATA | 管理经改革的TIBOR（存续的期限基准）。 |

正是这一委员会架构，使日本的"基准改革"成为协调一致的官民合作努力，而非单一监管机构的命令。

## 为何TONA立于拆借市场之上

TONA并非调查利率；它是短资公司向日银报告的、真实无担保隔夜拆借交易的成交量加权平均。这一设计选择是改革的核心：

- **基于交易的稳健性**：将基准锚定于实际成交（[[money-market/japan-uncollateralized-vs-collateralized-call-market|the uncollateralized call segment]] 中的市场），消除了终结LIBOR的那种基于报送的操纵脆弱性。
- **隔夜、近乎无风险**：由于它是接近政策目标的隔夜利率，剥离了大部分银行信用与期限溢价成分，使其成为干净的贴现 / RFR构件。
- **政策联动**：TONA紧密追踪日银的操作方针，因此逐日将 [[money-market/boj-open-market-operations|BoJ operations]] 传导入基准体系。

其权衡在于，充裕准备金的政策环境可能使拆借市场交易稀薄化，这使得TONA的成交量成为需要关注的事项。

## 转换时间线

| 时期 | 事件 |
|---|---|
| 2016年 | 研究小组将TONA确定为日元无风险利率（12月报告）。 |
| 2018年 | 日元利率基准跨行业委员会设立（8月）；OIS市场培育工作开始。 |
| 2018–2021年 | 新增日元掉期 / 贷款业务迁移至TONA参考；存量日元LIBOR合同经修订或由ISDA回退议定书覆盖。 |
| 2021年末 | 具代表性的日元LIBOR停止。引入一项不具代表性的合成日元LIBOR，作为部分存量期限的临时退出过渡。 |
| 2023年末 | 合成日元LIBOR停止；其余日元利率产品参考TONA，并保留TIBOR以满足期限定盘需求。 |
| 2024年末 | 欧洲日元TIBOR（Z-TIBOR）永久停止（最终定盘为2024年12月30日）；日元TIBOR继续。 |

## 由此形成的多基准利率世界

日本有意未将一切收拢为单一利率。存续的结构是：

| 基准 | 性质 | 主要用途 |
|---|---|---|
| [[derivatives/ois-tona-curve|TONA]] | 隔夜、基于交易、近乎无风险。 | OIS、贴现、后置复利的RFR挂钩贷款 / FRN。 |
| [[money-market/japan-tibor-benchmark-rate|Japanese Yen TIBOR]] | 期限、基于报价、信用敏感。 | 需要前瞻性期限定盘的期限贷款及部分债券。 |

这与几乎完全转向RFR的货币形成对照。在RFR之外保留一项经改革的期限基准，反映了日元贷款市场对在每个利息期开始时确定的、已知期限利率的需求。两者之间的价差 —— TIBOR对TONA的基差 —— 是市场关注的信用 / 期限溢价信号，而非异常。

## 存量合同如何处理

- **衍生品**：由ISDA 2020 IBOR回退议定书覆盖；已转换的日元LIBOR交易参考后置复利的TONA加上一个固定的信用调整利差。见 [[derivatives/isda-2020-protocol-japan-implementation|ISDA 2020 protocol Japan implementation]]。
- **现金产品（贷款 / 债券）**：通过合同回退、修订，或主动转换为TONA或TIBOR参考来处理，必要时进行利差调整。
- **欧洲日元TIBOR用户**：在2024年停止之前被引导至回退安排。

## 阅读清单

1. 将 **基准治理** 的故事（本页面）与 **定价 / 贴现** 的故事（[[derivatives/ois-tona-curve|OIS TONA curve]]）分开。
2. 记住TONA在无担保拆借市场上是基于交易的；TIBOR是基于报价且为期限的。
3. 日元LIBOR已不复存在（具代表性者2021年末、合成者2023年末）—— 不要当作仍在运行。
4. 存续的日元基准是TONA与日元TIBOR；欧洲日元TIBOR已于2024年末终止。
5. 将TIBOR对TONA的利差视为信用 / 期限信号。

## JapanFG相关性

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] / 日本银行计算TONA并召集改革委员会。
- [[financial-regulators/fsa|FSA]] 监管转换及基准管理人。
- [[financial-regulators/zenginkyo|Japanese Bankers Association]]（经由JBATA）管理存续的TIBOR。
- [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 在改革中迁移了大量贷款与衍生品账簿。
- [[securities-firms/mizuho-securities]] 与 [[securities-firms/mufg-mums]] 活跃于改革所助力构建的TONA-OIS市场。

## 边界情形

- **基准改革 vs 货币政策**：改革涉及存在哪些参考利率以及它们如何被治理，而非政策利率的水平。
- **RFR vs 期限利率**：TONA是RFR；TIBOR是期限基准；二者均按设计存续。
- **合成LIBOR vs 具代表性LIBOR**：合成日元LIBOR是临时的、不具代表性的过渡，而非真实LIBOR的延续。
- **停止 vs 改革**：日元LIBOR被停止；TIBOR被改革并保留 —— 不同基准有不同结果。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/boj-open-market-operations]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/isda-2020-protocol-japan-implementation]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/fsa]]
- [[financial-regulators/zenginkyo]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 来源

- 日本银行：日元利率基准跨行业委员会页面。
- 日本银行：研究小组《关于确定日元无风险利率的报告》（2016年12月）。
- 日本银行：利率基准改革（为LIBOR停止公布做好准备）。
- 日本银行：拆借市场数据（TONA公布）。
- 金融厅：关于欧洲日元TIBOR终止的公布。

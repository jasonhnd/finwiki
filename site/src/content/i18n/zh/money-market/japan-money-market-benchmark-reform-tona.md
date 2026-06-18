---
source: money-market/japan-money-market-benchmark-reform-tona
source_hash: db9b1b43ad8047ae
lang: zh
status: machine
fidelity: ok
title: "日本货币市场基准改革（TONA 与多利率世界）"
translated_at: 2026-06-18T15:47:13.942Z
---

# 日本货币市场基准改革（TONA 与多利率世界）

## Wiki 路径

本条目位于 [[money-market/INDEX|money-market index]] 之下。请与 [[money-market/japan-tibor-benchmark-rate|TIBOR]]（存续的期限基准）以及 [[money-market/call-market-structure|Call market structure]]（TONA 据以计算的现金市场）一并阅读；衍生品定价的表达见 [[derivatives/ois-tona-curve|the OIS TONA curve]]。

## 摘要（TL;DR）

日元利率基准改革将 JPY LIBOR 替换为锚定于实际货币市场的**无风险利率（RFR）**，同时保留了一项经过改革的期限基准。其结果是一个有意为之的**多利率世界**：

- **TONA（东京隔夜平均利率）**是指定的 JPY 无风险利率。它是日本银行对**无担保隔夜拆借**交易的成交量加权平均值——即直接由 [[money-market/call-market-structure|call market structure]] 中描述的现金市场计算得出。
- **TIBOR** 作为经过改革的、基于报价的期限基准存续（见 [[money-market/japan-tibor-benchmark-rate|TIBOR]]），现已剥离其欧洲日元（Z-TIBOR）部分。
- **JPY LIBOR** 已停止：具代表性的 JPY LIBOR 于2021, 年末终止，合成 JPY LIBOR 于2023年末前逐步退出。

对 FinWiki 而言，本条目是货币市场一侧的叙述，讲述谁改革了什么，以及为何拆借市场处于后 LIBOR 时代 JPY 利率体系的中心。定价/贴现机制存于 [[derivatives/ois-tona-curve|the OIS TONA curve]] 条目；本页涵盖基准治理与市场结构的故事。

## 改革主体

| 主体 | 职责 |
|---|---|
| 无风险参考利率研究小组 | 在其2016 年12月的报告中，将**无担保隔夜拆借利率（TONA）**确定为 JPY 无风险参考利率。 |
| 日元利率基准跨行业委员会 | 于2018年8月设立；是主导 JPY LIBOR 过渡、发展 OIS 市场、并通过多次全体会议发布过渡指引的主要官民论坛。 |
| 日本银行 | 召集委员会秘书处，计算并公布 TONA，并监督货币市场运作。 |
| [[financial-regulators/fsa|Financial Services Agency (FSA)]] | 负责过渡及基准管理人的监管当局。 |
| [[financial-regulators/zenginkyo|Japanese Bankers Association]] / JBATA | 管理经过改革的 TIBOR（存续的期限基准）。 |

正是这种委员会结构，解释了为何日本的"基准改革"是一项协调一致的官民努力，而非单一监管机构的法令。

## 为何 TONA 建立在拆借市场之上

TONA 不是调查利率；它是短资公司向日本银行报告的实际无担保隔夜拆借交易的成交量加权平均值。这一设计选择是改革的核心：

- **基于交易的稳健性**: 将基准锚定于实际交易（[[money-market/call-market-structure|the uncollateralized call segment]] 中的市场），消除了终结 LIBOR 的、基于提交报价的操纵脆弱性。
- **隔夜、近乎无风险**: 由于它是接近政策目标的隔夜利率，它剔除了大部分银行信用与期限溢价成分，使其成为一个干净的贴现/RFR 构件。
- **政策联动**: TONA 紧密追踪日本银行的操作方针，因此逐日将 [[money-market/boj-open-market-operations|BoJ operations]] 传导至基准体系。

其代价在于，充裕准备金的政策环境可能使拆借市场活动变得稀薄，这使得 TONA 的成交量成为一项需要关注的对象。

## 过渡时间线

| 期间 | 事件 |
|---|---|
| 2016 | 研究小组将 TONA 确定为 JPY 无风险利率（12月报告）。 |
| 2018 | 日元利率基准跨行业委员会设立（8月）；OIS 市场发展工作启动。 |
| 2018–2021 | 新增 JPY 掉期/贷款业务迁移至 TONA 参考；既有 JPY LIBOR 合约被修订或由 ISDA 回退协议覆盖。 |
| 2021 年末| 具代表性的 JPY LIBOR 停止。针对部分既有期限，引入非代表性的合成 JPY LIBOR 作为临时的逐步退出桥梁。 |
| 2023 年末| 合成 JPY LIBOR 停止；剩余 JPY 利率产品参考 TONA，期限定盘需求保留 TIBOR。 |
| 2024 年末| 欧洲日元 TIBOR（Z-TIBOR）永久停止（最终定盘为30 年2024月）；日元 TIBOR 继续。 |

## 由此形成的多利率世界

日本有意未将一切并入单一利率。存续的结构为：

| 基准 | 性质 | 主要用途 |
|---|---|---|
| [[derivatives/ois-tona-curve|TONA]] | 隔夜、基于交易、近乎无风险。 | OIS、贴现、按事后复利计息的 RFR 挂钩贷款/浮息票据。 |
| [[money-market/japan-tibor-benchmark-rate|Japanese Yen TIBOR]] | 期限、基于报价、对信用敏感。 | 期限贷款及部分需要前瞻性期限定盘的债券。 |

这与几乎完全转向 RFR 的货币形成对比。在 RFR 之外保留一项经过改革的期限基准，反映了 JPY 贷款市场对在每个计息期开始时设定的已知期限利率的需求。两者之间的价差——TIBOR 对 TONA 的基差——是市场关注的信用/期限溢价信号，而非异常。

## 既有合约如何处理

- **衍生品**: 由 ISDA 2020 年 IBOR 回退协议覆盖；已过渡的 JPY LIBOR 交易参考按事后复利计息的 TONA 加上固定的信用调整利差。见 [[derivatives/isda-2020-protocol-japan-implementation|ISDA 2020 protocol Japan implementation]]。
- **现金产品（贷款/债券）**: 通过合约回退、修订，或主动转换为 TONA 或 TIBOR 参考来处理，并在需要时进行利差调整。
- **欧洲日元 TIBOR 用户**: 在2024 年停止之前被引导至回退安排。

## 阅读清单

1. 将**基准治理**的故事（本页）与**定价/贴现**的故事（[[derivatives/ois-tona-curve|OIS TONA curve]]）区分开。
2. 记住 TONA 是基于无担保拆借市场交易的，而 TIBOR 是基于报价且为期限的。
3. JPY LIBOR 已经消失（具代表性者于2021, 年末，合成者于2023年末）——不要将其视为仍然有效。
4. 存续的 JPY 基准是 TONA 与日元 TIBOR；欧洲日元 TIBOR 于2024年末终止。
5. 将 TIBOR 对 TONA 的利差视为信用/期限信号。

## 与 JapanFG 的关联

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] / 日本银行计算 TONA 并召集改革委员会。
- [[financial-regulators/fsa|FSA]] 监督过渡及基准管理人。
- [[financial-regulators/zenginkyo|Japanese Bankers Association]] 通过 JBATA 管理存续的 TIBOR。
- [[megabanks/mufg]]、[[megabanks/smfg]] 和 [[megabanks/mizuho-fg]] 在改革中迁移了大规模的贷款与衍生品账簿。
- [[securities-firms/mizuho-securities]] 和 [[securities-firms/mufg-mums]] 在改革助力构建的 TONA-OIS 市场中活跃。

## 边界情形

- **基准改革 对 货币政策**: 改革关乎哪些参考利率存在以及它们如何被治理，而非政策利率的水平。
- **RFR 对 期限利率**: TONA 是 RFR；TIBOR 是期限基准；两者按设计均存续。
- **合成 LIBOR 对 具代表性的 LIBOR**: 合成 JPY LIBOR 是临时的非代表性桥梁，而非真实 LIBOR 的延续。
- **停止 对 改革**: JPY LIBOR 被停止；TIBOR 被改革并保留——不同基准有不同结局。

## 关联

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-tibor-benchmark-rate]]
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

- 日本银行: 日元利率基准跨行业委员会页面。
- 日本银行: 研究小组《关于确定日元无风险利率的报告》（2016年12月）。
- 日本银行: 利率基准改革（为 LIBOR 停止做准备）。
- 日本银行: 拆借货币市场数据（TONA 公布）。
- 金融厅: 关于欧洲日元 TIBOR 终止的公告。

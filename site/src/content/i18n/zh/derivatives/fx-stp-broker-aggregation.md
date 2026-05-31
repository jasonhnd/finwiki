---
source: derivatives/fx-stp-broker-aggregation
source_hash: 0eff266f9e840e6d
lang: zh
status: machine
fidelity: ok
title: "外汇 STP 与经纪商流动性聚合"
translated_at: 2026-05-31T03:19:56.373Z
---

# 外汇 STP 与经纪商流动性聚合

## TL;DR

STP（直通式处理）与做市商（B-book）模式是零售外汇经纪商处理客户订单的两种基本方式。在 STP / A-book 下，经纪商将订单传递给外部流动性提供商，并赚取加价或佣金；在 B-book 下，经纪商在内部承接风险，成为客户的对手方。大多数现代经纪商运行混合模式，借助跨多个 ECN（LMAX、Currenex、Hotspot、EBS、Reuters Matching）的精密流动性聚合以及主经纪商关系。在日本，经纪商与全球外汇流动性场所的连接受 JFSA 监管、FFAJ 自律披露以及各大零售经纪商技术基础设施的影响。

本条目是 [[derivatives/INDEX|derivatives index]] 内 [[derivatives/retail-fx-margin-trade-japan|retail FX margin trading in Japan]] 的后端工程 / 市场结构的补充。

## Wiki route

This page sits in the [[derivatives/INDEX|derivatives index]] as the FX broker-connectivity entry. Read it against [[derivatives/retail-fx-margin-trade-japan|retail FX margin trading in Japan]] for the customer-facing surface, [[derivatives/fx-options-japan-corporate-treasury|FX options for Japan corporate treasury]] for the wholesale corporate parallel, and [[money-market/japan-money-market|Japan money market]] for the rate-curve context that drives forward-points and overnight financing.

## STP vs market-maker model

这两种商业模式是零售外汇经纪商如何创造收入并管理风险的主轴：

| 维度 | STP / A-book | 做市商 / B-book |
|---|---|---|
| 风险承接 | 透传给外部 LP。经纪商是代理人。 | 经纪商持有风险。经纪商是主体。 |
| 收入 | 点差加价或佣金。 | 买卖价差、客户持仓盈亏（净客户群体亏损时为正，否则为负）。 |
| 对手方风险 | 客户面对经纪商；经纪商面对 LP。 | 客户仅面对经纪商。 |
| 披露 | 部分司法辖区要求区分 A-book / B-book。 | 同上。 |
| 利益冲突 | 较低；经纪商对客户盈亏无所谓。 | 较高；净客户群体亏损时经纪商获益。 |
| 运营复杂度 | 单笔交易利润较低但连接成本较高。 | 盈亏波动较高但每笔交易毛利较高。 |

实践中几乎每家现代经纪商都运行混合模式：部分客户流量走 STP 路由（通常是大额或成熟客户），部分则内部化为 B-book（通常是零售高频 / 剥头皮流量，经纪商可预测其短期均值回归）。具体的拆分比例很少披露。

### Why hybrid models persist

支持 B-book（内部化）的理由：
- 大量小名义额的零售流量是短暂且均值回归的；在内部轧差对冲客户交易比将每笔单独路由至外部场所更高效。
- 外部场所连接有成本（订阅费、主经纪商保证金），且不会随小名义额线性下降。
- 内部化捕获完整的买卖价差，而非将其传递给流动性提供商。

支持 STP（A-book）的理由：
- 消除与成熟客户的利益冲突，后者会注意到并投诉。
- 降低经纪商在肥尾 / 跳空行情场景下的尾部风险。
- 展示支持经纪商合规姿态的执行质量纪律。
- 大额客户期望无内部化导致滑点的紧凑执行。

典型经纪商可能将顶部 10-20% 的客户流量（按成熟度或名义额）通过 STP 路由，同时内部化小额零售流量的长尾。确切的阈值和路由逻辑属专有信息。

## Liquidity aggregation

运行 A-book / STP 架构的经纪商通常同时连接多个流动性场所，并使用智能订单路由器为每个进入的客户订单选取最优价格。主要的场所类别：

| 场所类别 | 示例 | 说明 |
|---|---|---|
| ECN（电子通信网络） | LMAX Exchange、Currenex、Hotspot FX（现 CBOE FX）、Integral、FastMatch | 匿名中央限价订单簿风格；多银行报价聚合。 |
| 银行间平台 | EBS Market（CME group）、Reuters Matching（Refinitiv） | 历史上仅限银行间的场所；现在大型经纪商也可通过主经纪商安排接入。 |
| 单一银行平台 | Citi Velocity、JPM eFX、Deutsche Bank Autobahn、Barclays BARX、UBS Neo、Goldman Sachs Marquee FX | 银行内部流动性；经纪商通过 FIX API 或定制网关连接。 |
| 聚合商 / 技术供应商 | oneZero、PrimeXM、Smartrader、Gold-i、FXone | 提供预建的聚合、智能订单路由、风险管理。 |

日本零售经纪商通常订阅其中数家，并通过内部 SOR 逻辑与聚合商中间件相结合的方式路由订单。像 OANDA Japan 和 [[JapanFG/saxo-bank-securities|Saxo Bank Securities]] 这样的外资关联经纪商继承其母公司的全球连接技术栈；像 [[JapanFG/gmo-click-securities|GMO Click Securities]] 和 [[JapanFG/sbi-fx-trade|SBI FX Trade]] 这样仅本土的经纪商则自建了专有聚合基础设施。

### Smart-order-router mechanics

典型的聚合技术栈包含：

1. **盘前过滤**：滤除过期报价；应用最低报价存续时间阈值；剔除拒单率偏高的场所。
2. **聚合盘口顶部**：将所有已订阅场所的买 / 卖合并为单一的最优买价-最优卖价。
3. **客户报价合成**：在聚合价格之上叠加经纪商的加价或佣金。
4. **订单路由**：当客户提交订单时，智能订单路由器根据客户的订单类型选取提供最优成交的场所（或场所组合）。
5. **执行与盘后**：接收成交、分配给客户、与外部场所确认核对。

聚合延迟在运营上至关重要：亚毫秒级聚合引擎是顶级经纪商的标配。成本不容小觑：连接多个场所的专用低延迟网络线路、在场所数据中心的同址托管、FIX 网关基础设施以及持续的 SOR 调优。

## Prime broker relationships

主经纪商（PB）提供信用与清算的封装，使经纪商无需向每个场所单独提交双边信用即可接入多个外汇流动性场所。外汇领域的顶级 PB：

- Citi
- JPMorgan
- Goldman Sachs
- Morgan Stanley
- UBS
- Deutsche Bank

在 2015 （瑞郎下限取消事件迫使各 PB 大幅减记）之后，外汇 PB 业务收缩并变得对信用更挑剔。许多中小型经纪商被剔除出 PB 名册，不得不选择：

1. 提升其资产负债表和风险控制以保留 PB 准入；或
2. 转向 prime-of-prime（PoP）安排，由中层经纪商充当面向较小场所的 PB 中介。

日本巨型银行（尤其是 [[JapanFG/mufg-bank|MUFG Bank]]、[[JapanFG/sumitomo-mitsui-banking-corp|Sumitomo Mitsui Banking Corp]] 和 [[JapanFG/mizuho-bank|Mizuho Bank]]）主要为机构和企业客户而非零售外汇经纪商提供外汇 PB 服务；零售经纪商的 PB 来源通常是国际性的。

### Prime-of-prime model

无法满足顶级 PB 信用标准的中型经纪商通常通过 prime-of-prime（PoP）提供商路由。PoP 持有与顶级银行的 PB 关系，进而向数家较小经纪商转供信用与连接。该安排增加了一层成本（PoP 收取加价），但使原本被排除的经纪商得以接入深度流动性。PoP 类提供商的公开例子包括 Saxo Bank 的机构业务、Sucden Financial、ADSS 以及若干较小的专业机构。

PoP 模式对日本零售外汇市场意义重大，因为中层本土经纪商往往无法独立满足美 / 欧 PB 信用标准，但在面向客户的服务和定价上有效竞争。

## Japan retail FX broker connectivity

日本零售外汇经纪商的具体连接技术栈部分可通过 FFAJ 披露和技术合作伙伴新闻稿了解。大致模式：

| 经纪商 | 可能的架构 |
|---|---|
| [[JapanFG/gmo-click-securities|GMO Click Securities]] | 专有平台；来自内部化的大量内部流动性；面向机构 / 大额客户的选择性 STP。 |
| [[JapanFG/sbi-fx-trade|SBI FX Trade]] | 聚合的多银行流动性；紧凑点差定位。 |
| [[JapanFG/dmm-com-securities|DMM.com Securities (DMM FX)]] | 混合模式；零售流量的显著内部化。 |
| OANDA Japan | 继承 OANDA 的全球以 STP 为主的架构；fxTrade 平台。 |
| [[JapanFG/saxo-bank-securities|Saxo Bank Securities]] | Saxo 的全球多场所聚合；机构级工具。 |
| [[JapanFG/matsui-sec|Matsui FX]] | 标准零售平台；外汇业务采用外包基础设施。 |

每家经纪商确切的 A-book / B-book 配比很少披露。FFAJ 自律规则要求某些利益冲突披露，但未强制要求完整的 A-book / B-book 报告。

## ECN venue snapshot

各大 ECN 各有鲜明的优势：

- **LMAX Exchange**：匿名 CLOB；严格的无 last-look 协议；受算法零售聚合商青睐。
- **Currenex（State Street）**：对聚合商友好；多银行报价通过 FIX 流式传输。
- **Hotspot FX（CBOE FX）**：同时具备匿名 CLOB 和披露对手方两种模式的 ECN。
- **EBS Market（CME Group）**：日元货币对（USD/JPY、EUR/JPY）的历史性银行间市场；现已广泛可接入。
- **Reuters Matching（Refinitiv）**：EUR/USD 及主要交叉盘的历史性银行间市场；在 EUR/USD 即期定价中仍有意义。
- **Integral OCX**：以经纪商为中心的聚合；受中小型经纪商青睐。
- **FastMatch（现 Euronext FX）**：即期外汇 ECN，机构 / 经纪商参与混合。

日元货币对流动性在结构上集中于 EBS，在东京时段，三家日本巨型银行的单一银行平台上还有大量额外流动性。

### Tokyo session liquidity dynamics

USD/JPY（占主导地位的日元货币对）的日内流动性特征遵循一种独特的模式：

| 时段窗口（JST） | 活动特征 |
|---|---|
| 08:00-09:00 | 东京开盘；大量与定盘相关及 TWAP 风格的流量。 |
| 09:00-12:00 | 最活跃的本地时段；巨型银行交易台人员齐备；企业流量流向 09:55 定盘。 |
| 12:00-13:00 | 东京午休清淡（在现代算法时代不那么激进，但仍可观察到）。 |
| 13:00-16:00 | 东京下午；随着欧洲交易员准备入场，流量逐渐减弱。 |
| 16:00-20:00 | 伦敦开盘重叠；USD/JPY 全球流动性最深。 |
| 20:00-04:00 | 纽约时段；ECN 流量占主导。 |
| 04:00-08:00 | 惠灵顿 / 悉尼交接；流动性稀薄。 |

09:55 JST 东京定盘尤为重要，因为它是许多日本企业和资产管理人工作流所使用的参考定盘；定盘前后的流量短暂集中，可能造成显著的点差扩大。

## Regulatory disclosure

JFSA 和 FFAJ 要求零售外汇经纪商就订单执行和利益冲突作出某些披露。具体的公开披露包括：

- 客户执行质量报告（部分经纪商自愿公布滑点统计）。
- FIEA 下的最佳执行政策文件。
- 经纪商作为对手方时的利益冲突披露。
- 向 FFAJ 报送的日 / 月成交量和未平仓持仓报告。
- 风险管理框架的年度披露。

披露深度各异；成熟的零售客户可从经纪商的服务条款和 FFAJ 统计中提取有意义的信息，但后端场所路由通常不会按逐笔交易层面披露。

## Latency and infrastructure economics

外汇执行对延迟的敏感性驱动了特定的基础设施投资：

- 在主要数据中心同址托管（伦敦的 LD4 、纽约的 NY4 、东京的 TY3 ），以最小化到场所的往返时间。
- 聚合引擎与场所网关之间的专用交叉连接线路。
- 用于最延迟敏感组件的 FPGA 或内核旁路网络栈。
- 对逐个场所的延迟和成交质量进行实时监控。
- 基于实际执行数据周期性重新调优 SOR 权重。

对于服务日本零售客户的日本经纪商，主要的基础设施投资围绕东京数据中心（Equinix TY3, AT Tokyo、NTT Data），并与 LD4 建立次级连接以获取欧洲时段流动性。这一基础设施成本是 GMO Click 和 SBI FX Trade 等大型经纪商相对于依赖聚合商中间件的小型竞争者的结构性优势之一。

## Last-look protocol mechanics

Last-look 是一种有争议的外汇执行做法，流动性提供商在订单呈现后有一个短暂的窗口（通常 50-200 毫秒）来接受或拒绝该进入订单。其理由是，在快速变动的市场中 LP 面临"过期报价"套利，需要该窗口来核实定价是否仍然有效。

变体：

| 协议 | 行为 | 客户影响 |
|---|---|---|
| 无 last-look | LP 承诺按报价价格成交 | 成交确定性更高，但点差通常更宽。 |
| 对称 last-look | LP 可拒绝有利或不利的价格变动 | 公平，但降低客户的成交确定性。 |
| 非对称 last-look | LP 仅在变动对 LP 不利时拒绝 | 对客户更糟；受到广泛批评。 |

FX Global Code（由 Global Foreign Exchange Committee 发布）建议在使用 last-look 时采用对称方式并向客户充分披露。像 LMAX 这样的 ECN 场所围绕无 last-look 协议建立市场定位；许多银行聚合的报价流仍使用某种形式的 last-look。对日本零售经纪商而言，LP 的选择和 last-look 政策影响实际执行质量，但很少在逐笔交易层面披露。

## Risk management at the broker

运行混合 STP / B-book 模式的零售外汇经纪商需要持续的风险管理：

| 风险类型 | 管理工具 |
|---|---|
| 净 delta 敞口（B-book） | 内部 delta 目标；当突破限额时向批发市场下达对冲对冲单。 |
| 对手方敞口（LP、PB） | 信用限额；每日核对；担保监控。 |
| 操作风险（系统中断） | 冗余基础设施；书面化的业务连续性程序。 |
| 客户违约风险 | 强制平仓系统；审慎的保证金政策；隔离资金保护客户，但残余敞口在经纪商一侧。 |
| 监管 / 合规风险 | 合规官；FFAJ / JFSA 报送；周期性内部审计。 |
| 声誉风险 | 服务质量；执行做法的透明度；客户服务响应能力。 |

日本零售外汇经纪商的风险管理职能在实质上远比典型证券经纪同行更为精密，因为外汇具有 24小时、带杠杆、快速变动的特性。JFSA 在例行监管中周期性检查这一职能。

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/corporate-fx-hedge-policy-japan-listed]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[money-market/japan-money-market]]
- [[money-market/INDEX]]
- [[JapanFG/gmo-click-securities]]
- [[JapanFG/sbi-fx-trade]]
- [[JapanFG/dmm-com-securities]]
- [[JapanFG/matsui-sec]]
- [[JapanFG/saxo-bank-securities]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]

## Sources

- Financial Services Agency (JFSA): FIEA best-execution and conduct rules.
- Financial Futures Association of Japan (FFAJ): self-regulatory rules and statistics.
- Bank for International Settlements: Quarterly Review FX market microstructure research.
- Bank of Japan: BIS Triennial Central Bank Survey, Japan FX section.

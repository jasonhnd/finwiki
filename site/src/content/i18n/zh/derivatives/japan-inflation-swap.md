---
source: derivatives/japan-inflation-swap
source_hash: 556fa9b9b44fc9d2
lang: zh
status: machine
fidelity: ok
title: "日本通胀掉期市场（日元 CPI 挂钩）"
translated_at: 2026-05-31T03:19:56.452Z
---

# 日本通胀掉期市场（日元 CPI 挂钩）

## 摘要

日元通胀掉期是一种场外衍生品，其中一方支付固定利率，另一方支付与某一日本消费者物价指数（CPI）口径挂钩的浮动利率——最常见的是统计局的剔除生鲜食品 CPI 指数（生鮮食品除く）。两种主要结构形式是零息通胀掉期（ZCIS，到期单笔支付，基于交易日至到期日之间的累计通胀）和同比通胀掉期（YoY，与逐年 CPI 变动挂钩的周期性支付）。在交易日就通胀腿支付的固定利率即为掉期所定价的"盈亏平衡通胀率"。

日元通胀掉期市场在结构上小于其美元和欧元对应市场，但自日本银行在 2013  年 1 月于量化质化宽松（QQE）框架下确立其 2% 价格稳定目标以来，以及自 2022  年起实际日元 CPI 决定性地升破 2% 之后，活跃度显著提升。该市场紧邻 [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi inflation-linked bond]] 现券市场，日元通胀掉期所定价的盈亏平衡率提供了一个基于衍生品的通胀预期读数，与 JGBi 推导的盈亏平衡率形成互补。

对 FinWiki 而言，本条目涵盖掉期机制（ZCIS 与 YoY）、CPI 参考、日本银行 2% 目标时代动态、养老基金与保险公司套保需求、与 JGBi 的关系以及交易商业务。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates-derivatives cluster. Read it against [[derivatives/jgb-inflation-linked-bond-jgbi]] for the cash inflation-linked bond peer, [[derivatives/japan-irs-market]] for the vanilla IRS peer, and [[derivatives/ois-tona-curve]] for the nominal-rate discount curve. The BoJ-policy context is anchored at [[money-market/boj-open-market-operations]] and the pension-fund / insurer end-user demand side at [[insurance/japan-life-insurance-alm-overview]].

## 工具机制

标准日元通胀掉期以固定现金流交换通胀挂钩浮动现金流。

### 零息通胀掉期（ZCIS）

日元通胀掉期最常见的结构形式：

| 要素 | 细节 |
|---|---|
| 期限 | 1Y、2Y、3Y、5Y、7Y、10Y、20Y、30Y |
| 固定腿 | 到期单笔支付：$N \times [(1 + k)^T - 1]$，其中 $k$ 为固定通胀盈亏平衡率，$T$ 为期限 |
| 通胀腿 | 到期单笔支付：$N \times \frac{\text{CPI}_T}{\text{CPI}_0} - N$，其中 CPI 为到期日的参考 CPI 指数水平（带滞后） |
| 净支付 | 支付通胀腿的一方支付实现累计通胀与约定盈亏平衡率之间的差额 |
| 参考指数 | 日本剔除生鲜食品 CPI，由统计局（总务省）发布；通常滞后 2-3  个月 |
| 计息天数 | 固定腿计提用 ACT/365 ；CPI 定盘遵循指数发布日历 |
| 文档 | ISDA 主协议 + CSA |

从经济上看，通胀腿支付方锁定了已知的固定累计通胀成本；通胀腿收取方收取实现通胀以换取支付固定盈亏平衡率。市场所定价的盈亏平衡率是交易隐含的对期限内累计通胀的预期（加上一小部分通胀风险溢价）。

### 同比通胀掉期（YoY）

带周期性票息支付的更细颗粒度结构：

| 要素 | 细节 |
|---|---|
| 期限 | 典型为 2Y、5Y、10Y |
| 票息频率 | 年度或半年度 |
| 固定腿 | 周期性支付：每个票息 $N \times k$ |
| 通胀腿 | 周期性支付：每个票息 $N \times \frac{\text{CPI}_t}{\text{CPI}_{t-1}} - N$ |

YoY 掉期适用于套保与逐年通胀结果（而非累计通胀）挂钩的敞口，但在日元市场中其流动性不及 ZCIS。

## CPI 参考指数

标准日元通胀掉期参考日本剔除生鲜食品 CPI 指数（生鮮食品を除く総合，日本惯例中的"核心 CPI"），由统计局按月发布。其他 CPI 变体存在但使用较少：

| 指数 | 备注 |
|---|---|
| CPI（总合） | 包含所有项目，含生鲜食品（波动大） |
| **剔除生鲜食品 CPI** | 日本标准"核心"口径；标准通胀掉期参考 |
| 剔除生鲜食品、剔除能源 CPI | "核心核心"；在部分日本银行沟通中使用；作为掉期参考较少见 |
| 东京 CPI（先行指标） | 在全国 CPI 之前发布；通常不作为掉期参考，但被作为领先指标关注 |

统计局以延迟月度方式发布 CPI（通常为参考月之后 3-4  周）。掉期定盘使用最近发布值并带一个既定的定盘规则滞后（通常 2-3  个月），以确保在掉期估值日该指数可用。

## 盈亏平衡通胀信号

ZCIS 所定价的盈亏平衡通胀率代表市场对掉期期限内累计 CPI 通胀的风险中性预期，加上一个（通常较小的）通胀风险溢价。与 [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi breakeven]]（按匹配期限的名义 JGB 收益率减 JGBi 收益率计算）相比，提供了两个市场隐含的通胀预期口径：

| 来源 | 口径类型 |
|---|---|
| 日元 ZCIS 盈亏平衡率 | 基于衍生品；纯通胀表达；CSA 担保 |
| JGBi 隐含盈亏平衡率 | 基于现券；受 JGBi 流动性溢价、JGB-JGBi 流动性差异影响 |
| 基于调查的预期（日本银行短观、ESP Forecast） | 调查；发布滞后更长；非市场化 |
| 总体 CPI 公布值 | 实现数据；滞后 |

衍生品盈亏平衡率通常低于 JGBi 隐含盈亏平衡率，其差为一个"流动性溢价"，反映通过掉期交易相对于持有 JGBi 现券的相对便利程度。

对日本银行政策分析而言，通胀掉期盈亏平衡率是判断日本银行 2% 目标是否被可信定价的最干净的市场化读数之一。2022,  之前，尽管日本银行有明确目标，日元 10Y ZCIS 盈亏平衡率长期远低于 2%；2022,  之后随着实现通胀升破 2%，盈亏平衡率重新定价走高，与目标的差距显著收窄。

## 日本银行 2% 目标时代动态

日元通胀掉期市场在很大程度上由日本银行的 2% 通胀目标框架塑造：

| 时期 | 通胀背景 | 掉期市场动态 |
|---|---|---|
| 2013  之前（QQE 之前） | 持续低 / 温和通缩的 CPI | 通胀掉期市场清淡；终端用户需求有限 |
| 2013–2021 （QQE 时代；2016 起 YCC） | 日本银行 2% 目标；尽管大规模宽松，实际 CPI 多数低于目标 | 掉期活跃度温和；盈亏平衡率持续低于 2%；CPI 挂钩负债套保者偶发需求 |
| 2022–2024 （通胀飙升） | 输入型通胀、能源/日元走弱；剔除生鲜食品 CPI 升破 3% 峰值 | 掉期盈亏平衡率急剧重新定价走高；企业与机构投资者套保需求上升；活跃度抬头 |
| 2024  起（日本银行正常化） | CPI 趋缓但稳定在 2% 目标附近或之上 | 盈亏平衡率接近 2% 区域；市场活跃度趋于正常 |

2022  之后的通胀飙升是日本银行 2% 目标时代首次持续高于目标的通胀阶段，并显著改变了日元通胀套保的实际需求。

## 养老基金与保险公司需求

日元通胀掉期的终端用户需求主要来自：

| 终端用户 | 用例 | 方向 |
|---|---|---|
| 公共养老基金（含 GPIF） | 套保给付支付中的通胀挂钩负债部分 | 收取通胀（支付固定；收取实现通胀） |
| 企业养老基金（DB） | 通胀挂钩给付负债 | 收取通胀 |
| 寿险公司（一般账户 ALM） | 长久期保单准备金的通胀敞口；战术性通胀套保 | 混合；负债套保收取通胀，战术性头寸支付通胀 |
| 企业（非金融） | 套保收入 / 成本流的通胀敞口（如收入与通胀挂钩的基础设施项目） | 视敞口方向而定，混合 |
| 资产管理人 | 固定收益委托的通胀叠加；相对价值通胀曲线交易 | 混合 |
| 外国宏观基金 | 战术性通胀表达；与 JGBi、JGB 及全球通胀市场的相关性交易 | 高度方向性 |

日本养老基金对通胀套保的需求在结构上小于英国或美国养老基金的需求（在那里通胀挂钩给付占负债比重更大），但残余需求是有意义的，并集中于特定企业 DB 计划及对通胀敏感的公共部门养老金。

## 与 JGBi 的关系

日元通胀掉期与 [[derivatives/jgb-inflation-linked-bond-jgbi|JGB inflation-linked bond (JGBi)]] 市场之间的现券—衍生品关系在结构上很重要：

| 交易类型 | 描述 |
|---|---|
| 通胀掉期对 JGBi 资产掉期 | 买入 JGBi，通过通胀掉期将通胀挂钩票息流换为固定利率 → 对 JGB 信用 / 流动性的合成名义敞口 |
| JGBi 隐含盈亏平衡率对掉期隐含盈亏平衡率 | 两者之间的价差；价差扩大时存在套利机会 |
| BEI 箱体交易 | 跨期限的盈亏平衡率交易，横跨 JGBi 曲线与掉期曲线 |

有限的 JGBi 发行与增发节奏（财务省发行计划见 [[derivatives/jgb-inflation-linked-bond-jgbi]]）意味着 JGBi 流动性远薄于名义 JGB 流动性；这促使部分通胀套保需求转向掉期市场，那里的执行可以更大、更灵活。

## 交易商业务

日元通胀掉期做市集中于主要银行系及全球交易商：

| 交易商类别 | 活动 |
|---|---|
| 日本大型银行证券子公司 | 三菱日联证券、SMBC 日兴、瑞穗证券运行日元通胀掉期账本 |
| 独立日本证券（野村、大和） | 业务规模较小 |
| 全球投资银行 | 摩根大通、高盛、花旗、德意志、法巴、巴克莱、汇丰活跃于跨境通胀流量及 JGBi-掉期基差交易 |
| 交易商间经纪商 | 有限；主要为交易商对终端客户 |

日元通胀掉期的交易商收入是 IR（利率部门）更广泛的通胀 / 利率交易台的一部分；不单独披露。

## 清算

日元通胀掉期交易以双边为主。[[securities/japan-securities-clearing-corp|JSCC]] 并未像对香草 IRS 那样将强制清算延伸至通胀掉期。未清算交易对在范围内的交易对手适用 UMR 阶段性初始保证金（IM）要求及标准 CSA 担保。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[money-market/INDEX]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- BIS：半年度场外衍生品统计（按货币的通胀挂钩衍生品）。
- 日本银行：BIS 场外衍生品调查的日本部分；通胀预期调查刊物。
- 统计局（总务省）：CPI 刊物与方法论。
- 财务省：JGBi 发行计划与统计。
- 日本银行：2% 价格稳定目标政策框架文档。
- 日本证券清算机构：清算范围与产品名录。
- ISDA：标准通胀掉期文档；2008  ISDA 通胀衍生品定义。
- 金融厅：FIEA 下场外衍生品框架。

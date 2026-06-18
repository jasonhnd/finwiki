---
source: derivatives/japan-swaption-market
source_hash: 27ebd8b4fde39b68
lang: zh
status: machine
fidelity: ok
title: "日本掉期期权（利率期权）市场"
translated_at: 2026-06-18T23:33:48.364Z
---

# 日本掉期期权（利率期权）市场

## TL;DR

掉期期权是一种场外利率期权，授予持有人在未来某一日期并以预先约定的执行利率进入一笔确定的利率掉期的权利（但非义务）。日元掉期期权是 [[derivatives/japan-irs-market|JPY interest-rate swap]] 和 [[derivatives/ois-tona-curve|OIS-TONA]] 市场的波动率敏感补充物，也是日本寿险公司、巨型银行资金交易台和结构化票据发行人对冲交易台表达（或对冲）对未来日元利率波动率看法的主要工具。

日元掉期期权资金流中的两种主要结构性形态是欧式付款方／收款方掉期期权（在未来某一日期就一笔确定期限的 IRS 支付或收取固定利率的权利），以及百慕大式可赎回掉期期权（多个行权日，常嵌入于日元计价债券和结构化票据中）。后者尤其与嵌有利率可选择性的保险公司变额年金型产品（GMxB 型保证，保险公司实际上相对保单持有人行为做空利率波动率）的对冲相关。

对 FinWiki 而言，本条目涵盖掉期期权机制、日元隐含波动率网格、付款方对收款方的资金流画像、百慕大可赎回结构、寿险公司 GMxB 对冲案例，以及日元掉期期权做市的交易商特许经营结构。

## Wiki 路径

本条目位于 [[derivatives/INDEX|derivatives index]] 之下，处于利率期权集群中。请将其与掉期期权所参照的基础 IRS 市场 [[derivatives/japan-irs-market]]、贴现曲线与短期利率侧 [[derivatives/ois-tona-curve]]，以及共享同一波动率网格输入的 CMS 衍生品近亲 [[derivatives/japan-cms-constant-maturity-swap]] 对照阅读。寿险终端用户需求侧锚定于 [[insurance/japan-life-insurance-alm-overview|Japan life-insurance ALM overview]] 和 [[insurance/economic-value-based-solvency|economic-value-based solvency (ESR)]]。

## 工具机制

一笔标准的日元掉期期权具有以下结构：

| 要素 | 详情 |
|---|---|
| 标的 | 预先指定的日元利率掉期（例如，参照 TONA 复合或 TIBOR 的 10年期日元 IRS） |
| 权利 | 期权持有人在期权行权日进入掉期的权利 |
| 方向 | **付款方掉期期权**：支付固定（＝收取浮动）的权利；利率上升至执行价之上则获利。**收款方掉期期权**：收取固定（＝支付浮动）的权利；利率下降至执行价之下则获利。 |
| 执行价 | 约定的固定利率执行价（通常为平价远期，ATMF，但 ITM 和 OTM 执行价亦有交易） |
| 期权到期 | 期权持有人行权之日（"到期"） |
| 掉期期限 | 标的掉期的期限，按惯例写作"到期 × 期限"（例如，"1年 × 10年"＝ 1年到期进入一笔 10年掉期） |
| 类型 | 欧式（单次行权）、百慕大式（多个行权日）或美式（连续；掉期期权中罕见） |
| 结算 | 按确定的估值方法（隐含掉期的现值）现金结算，或实物结算（期权持有人在行权时被交付进入一笔活跃掉期） |
| 文档 | ISDA 主协议 ＋ CSA |

经济内涵：掉期期权是对远期掉期利率的 Black 式期权，标的远期掉期利率的隐含波动率是关键定价输入。

## 日元掉期期权隐含波动率网格

市场在二维网格上报出日元掉期期权隐含波动率（通常以年化基点表示，采用正态波动率惯例，或依交易商惯例表示为 Black 对数正态波动率）：

- **期权到期**：1个月、3个月、6个月、1年、2年、3年、5年、7年、10年、15年、20年
- **标的掉期期限**：1年、2年、3年、5年、7年、10年、15年、20年、30年

流动性最高的点通常为：

| 网格点 | 用例 |
|---|---|
| 1个月 × 10年、3个月 × 10年 | 短期事件波动率表达（围绕日银 MPM、市场压力） |
| 1年 × 10年 | 头条基准波动率点；被广泛报出 |
| 1年 × 5年、1年 × 30年 | 不同期限的曲线波动率表达 |
| 5年 × 5年、5年 × 10年、10年 × 10年 | 长期保险公司／结构化票据对冲 |
| 10年 × 20年、20年 × 30年 | 长期限保险公司 ALM 和养老基金对冲 |

日元的波动率惯例在 IBOR 转换期间在 Black 对数正态与正态波动率（bp／年）之间有所变化；正态波动率报价如今更为常见，尤其在绝对利率水平较低、百分比波动率变得不稳定时。

该网格由交易商间报价、经纪商屏幕（Tradition、ICAP、BGC、Tullett Prebon）及交易商银行 IR 资料构建。完整的波动率曲面也是为 [[derivatives/japan-cms-constant-maturity-swap|CMS]] 和 CMS 价差衍生品定价的关键输入。

## 付款方对收款方资金流

日元掉期期权中的结构性资金流失衡在不同期限倾向于不同侧：

| 资金流来源 | 方向 | 期限集中 |
|---|---|---|
| 寿险公司（变额年金对冲） | **买入收款方**（做多收款方掉期期权）——以对冲利率进一步下降，因其会增加保单持有人保证的价值 | 长期限（10年 × 20年、20年 × 30年） |
| 寿险公司（一般账户 ALM） | **卖出收款方**（长期债券组合的收益增强）或**买入收款方**（下行对冲） | 长期限 |
| 巨型银行资金部门（IRRBB 对冲） | 混合；担忧利率上升时**买入付款方** | 中期限（3年、5年、7年） |
| 结构化票据发行人（可赎回债券对冲） | **买入百慕大收款方**（以对冲其向投资者写出的赎回期权） | 中至长期；与票据结构匹配 |
| 外国宏观基金 | 两侧；由战术性观点驱动 | 混合 |
| 企业资金部门 | 有限的直接资金流；更依赖 [[derivatives/japan-irs-market|outright IRS]] 对冲 |  |

保险公司对长期收款方掉期期权的需求是长端波动率曲面的结构性驱动因素。2024 年以来的日银体制转变（退出 NIRP／YCC）实质性地改变了收款方波动率定价动态，因为此前十年接近零利率的环境压缩了收款方价值并将付款方掉期期权活动推至前台；一个正常化的利率体制提升了收款方对冲的实务价值。

## 百慕大可赎回掉期期权

百慕大掉期期权允许在一组预先确定的日期行权（而非单一欧式日期或连续行权）。日元中最常见的百慕大结构是嵌入日元计价债券或票据中的可赎回项：

| 结构 | 嵌入期权 |
|---|---|
| 可赎回债券（发行人可赎回） | 债券发行人有权在指定日期赎回债券；等价于发行人就一笔固定利率负债做多一份百慕大收款方掉期期权 |
| 可回售债券（投资者可回售） | 投资者回售权利；较不常见；（从发行人视角）等价于投资者做多百慕大付款方 |
| 可取消掉期 | 嵌有取消权的掉期；在结构化企业对冲中常见 |
| 可赎回结构化票据 | 带有定期发行人赎回权的付息票据；发行人通过百慕大收款方掉期期权对冲 |

为百慕大掉期期权定价比欧式掉期期权实质上更为复杂，因为每个日期的行权决策取决于利率水平和期权的继续价值。标准定价方法包括 Hull-White 单因子或多因子短期利率模型、LIBOR 市场模型，以及带有基于回归的行权规则的蒙特卡洛（Longstaff-Schwartz）。

日元百慕大掉期期权交易量集中于长期限结构，并作为相当规模的日元可赎回债券／结构化票据发行市场（在 [[derivatives/structured-bond-japan-retail-issuance|JPY structured bond retail issuance]] 和企业融资中提及）的对冲工具。

## 寿险公司变额年金（GMxB）对冲

提供带有保证最低给付（GMxB — GMDB、GMAB、GMIB、GMWB）的变额年金（VA）产品的寿险公司，在其资产负债表上嵌入了相当规模的利率波动率风险。尽管日本 VA 市场小于美国市场且已从 2000年代中期峰值收缩，残余 VA 块（及现代变体）仍需主动对冲：

| 保证类型 | 对保险公司的风险 | 对冲工具 |
|---|---|---|
| GMDB（保证最低死亡给付） | 死亡率挂钩的股票下行；利率敏感的保证价值 | 股票看跌 ＋ 收款方掉期期权组合 |
| GMAB（保证最低累积给付） | 股票下行；保证现值的利率敏感性 | 股票看跌 ＋ 收款方掉期期权 |
| GMIB（保证最低收入给付） | 长期年金利率敏感性；可观的 rho 敞口 | 收款方掉期期权条带；长期掉期期权 |
| GMWB（保证最低提取给付） | 股票／利率／行为的复合风险 | 包含收款方掉期期权的多资产动态对冲 |

一般模式：在 NIRP 之前的 1990年代-2000年代写出 VA 的保险公司，如今面临在低利率环境中深度 ITM 的保证，需要相当规模的收款方掉期期权对冲头寸。随着日元利率正常化，这些对冲产生损失，但基础保证价值同步下降；动态对冲计划将这些变动相互抵销。

为日本保险公司分阶段引入的 [[insurance/economic-value-based-solvency|economic-value-based solvency (ESR)]] 框架使利率波动率敞口更加明确，提升了对长期收款方掉期期权对冲的结构性需求。更广泛的 ALM 语境亦请参见 [[insurance/japan-life-insurance-alm-overview]]。

日本的外资寿险关联公司（在 [[insurance/foreign-life-affiliate-japan-positioning]] 中涵盖）历史上在掉期期权对冲方面尤为活跃，因为其母集团风险管理框架要求对保证进行明确的衍生品对冲。

## 交易商特许经营

日元掉期期权做市集中于主要银行系证券公司和全球投资银行：

| 交易商类别 | 代表性公司 |
|---|---|
| 日本巨型银行证券关联公司 | MUFG 证券、SMBC 日兴、瑞穗证券（及其利率交易内的掉期衍生品交易台） |
| 独立日本证券公司 | 野村、大和证券（掉期期权特许经营小于巨型银行） |
| 全球投资银行 | JPMorgan、Goldman Sachs、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS（在日元掉期期权中活跃，用于跨境资金流和保险公司对冲计划） |
| 交易商间经纪商 | Tradition、ICAP、BGC、Tullett Prebon |

来自日元掉期期权的交易商收益是交易商银行 IR 中更广泛的利率／固定收益做市条线的一部分；不单独披露。

## 清算状态

与主要在 [[securities/japan-securities-clearing-corp|JSCC]] 清算的标准日元 IRS 不同，掉期期权历史上主要以双边方式交易。JSCC 及其他 CCP 已在部分货币中扩展掉期期权清算能力；日元掉期期权清算仍比普通 IRS 更新且范围更窄。大多数保险公司／结构化票据对冲掉期期权资金流为双边，在 ISDA 主协议和 CSA 下进行文档化，并对超过阈值的非清算交易遵循 UMR 阶段 IM 要求。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/japan-life-insurance-big-four]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[money-market/INDEX]]
- [[money-market/boj-open-market-operations]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## 来源

- BIS：半年度场外衍生品统计（日元利率期权，含掉期期权，名义本金及总市场价值）。
- 日本银行：BIS 场外衍生品调查的日本部分。
- 日本证券清算机构：日元场外清算范围。
- 金融厅：关于场外衍生品的 FIEA 框架及 ESR 相关监督指引。
- ISDA：标准文档、掉期期权定义、2020 IBOR 回退协议。
- 行业刊物（Risk、GlobalCapital、Practical Law）关于掉期期权市场实践。
- 全美保险监督官协会（美国）：作为比较的美国变额年金／GMxB 对冲实践。

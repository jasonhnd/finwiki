---
source: derivatives/japan-swaption-market
source_hash: 73925a9076863f9a
lang: zh
status: machine
fidelity: ok
title: "日本掉期期权（利率期权）市场"
translated_at: 2026-05-31T03:19:56.390Z
---

# 日本掉期期权（利率期权）市场

## TL;DR

掉期期权是一种场外利率期权，赋予持有人在未来某一日期、以预先约定的执行利率进入既定利率掉期的权利（而非义务）。日元掉期期权是 [[derivatives/japan-irs-market|JPY interest-rate swap]] 与 [[derivatives/ois-tona-curve|OIS-TONA]] 市场对波动率敏感的补充，也是日本寿险公司、大型银行财资部门及结构性票据发行方对冲部门表达对未来日元利率波动率看法（或进行对冲）的主要工具。

日元掉期期权流的两种主要结构形式是欧式付款方 / 收款方掉期期权（在未来某日期就既定期限 IRS 付固定或收固定的权利）以及百慕大式可赎回掉期期权（多个行权日，常嵌入可赎回日元计价债券与结构性票据）。后者尤其与对冲带有嵌入式利率可选权的寿险公司可变年金类产品（GMxB 类保证，其中保险公司对保单持有人行为实质上做空利率波动率）相关。

对 FinWiki 而言，本条目涵盖掉期期权机制、日元隐含波动率网格、付款方对收款方流的特征、百慕大可赎回结构、寿险公司 GMxB 对冲案例，以及日元掉期期权做市的交易商业务结构。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the interest-rate-options cluster. Read it against [[derivatives/japan-irs-market]] for the underlying IRS market the swaption references, [[derivatives/ois-tona-curve]] for the discount-curve and short-rate side, and [[derivatives/japan-cms-constant-maturity-swap]] for CMS-derivative cousins that share the same vol-grid inputs. The life-insurer end-user demand side is anchored at [[insurance/japan-life-insurance-alm-overview|Japan life-insurance ALM overview]] and [[insurance/economic-value-based-solvency|economic-value-based solvency (ESR)]].

## 工具机制

标准日元掉期期权具有以下结构：

| 要素 | 详情 |
|---|---|
| 标的 | 一项预先指定的日元利率掉期（例如引用复利 TONA 或 TIBOR 的 10 年期日元 IRS） |
| 权利 | 期权持有人在期权行权日进入掉期的权利 |
| 方向 | **付款方掉期期权**：付固定（= 收浮动）的权利；利率升至执行价之上时盈利。**收款方掉期期权**：收固定（= 付浮动）的权利；利率跌至执行价之下时盈利。 |
| 执行价 | 约定的固定利率执行价（通常为平价远期 ATMF，但价内与价外执行价亦有交易） |
| 期权到期 | 期权持有人行权之日（即"到期"） |
| 掉期期限 | 标的掉期的期限，惯例写作"到期 × 期限"（例如"1Y × 10Y" = 1 年到期进入一项 10 年掉期） |
| 类型 | 欧式（单次行权）、百慕大式（多个行权日）或美式（连续；掉期期权罕见） |
| 结算 | 按既定估值方法现金结算（隐含掉期的现值）或实物结算（行权时期权持有人被交割进入一项活跃掉期） |
| 文件 | ISDA 主协议 + CSA |

经济内涵：掉期期权是一种对远期掉期利率的 Black 式期权，标的远期掉期利率的隐含波动率是关键定价输入。

## 日元掉期期权隐含波动率网格

市场在二维网格上报出日元掉期期权隐含波动率（通常以每年基点表示，正态波动率惯例，或视交易商惯例以 Black 对数正态波动率表示）：

- **期权到期**：1M、3M、6M、1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y
- **标的掉期期限**：1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y

流动性最强的点通常为：

| 网格点 | 用例 |
|---|---|
| 1M × 10Y、3M × 10Y | 短期事件波动率表达（围绕 BoJ MPM、市场压力） |
| 1Y × 10Y | 头条基准波动率点；广泛报价 |
| 1Y × 5Y、1Y × 30Y | 不同期限的曲线波动率表达 |
| 5Y × 5Y、5Y × 10Y、10Y × 10Y | 长期保险公司 / 结构性票据对冲 |
| 10Y × 20Y、20Y × 30Y | 长期限保险公司 ALM 与养老基金对冲 |

日元的波动率惯例在 IBOR 过渡期间在 Black 对数正态与正态波动率（基点/年）之间有所转变；正态波动率报价现已更为常见，尤其当绝对利率水平低、百分比波动率变得不稳定时。

该网格由交易商间报价、经纪商屏幕（Tradition、ICAP、BGC、Tullett Prebon）及交易商银行 IR 资料构建。完整的波动率曲面也是为 [[derivatives/japan-cms-constant-maturity-swap|CMS]] 与 CMS 利差衍生品定价的关键输入。

## 付款方对收款方流

日元掉期期权的结构性流失衡在不同期限倾向不同侧：

| 流来源 | 方向 | 期限集中度 |
|---|---|---|
| 寿险公司（可变年金对冲） | **买入收款方**（做多收款方掉期期权）——对冲利率进一步下跌，因其会增加保单持有人保证的价值 | 长期限（10Y × 20Y、20Y × 30Y） |
| 寿险公司（一般账户 ALM） | **卖出收款方**（长期债券组合的收益增强）或 **买入收款方**（下行对冲） | 长期限 |
| 大型银行财资（IRRBB 对冲） | 混合；担忧利率上升时 **买入付款方** | 中期限（3Y、5Y、7Y） |
| 结构性票据发行方（可赎回债券对冲） | **买入百慕大收款方**（对冲其向投资者卖出的赎回期权） | 中至长；匹配票据结构 |
| 外国宏观基金 | 双侧；战术观点驱动 | 混合 |
| 企业财资 | 直接流有限；更多依赖 [[derivatives/japan-irs-market|outright IRS]] 对冲 |  |

保险公司对长期收款方掉期期权的需求是长端波动率曲面的结构性驱动因素。2024  后 BoJ 制度转变（退出 NIRP / YCC）实质性改变了收款方波动率定价动态，因为此前十年近零利率环境压缩了收款方价值并将付款方掉期期权活动推至前台；正常化的利率制度增加了收款方对冲的实际价值。

## 百慕大可赎回掉期期权

百慕大掉期期权允许在预先定义的一组日期行权（而非单一欧式日期或连续）。日元中最常见的百慕大结构是嵌入日元计价债券或票据的可赎回结构：

| 结构 | 嵌入期权 |
|---|---|
| 可赎回债券（发行方可赎回） | 债券发行方有权在指定日期赎回债券；等同于发行方对一项固定利率负债做多百慕大收款方掉期期权 |
| 可回售债券（投资者可回售） | 投资者回售权；较不常见；等同于投资者做多百慕大付款方（从发行方视角） |
| 可取消掉期 | 带有嵌入式取消权的掉期；常见于结构性企业对冲 |
| 可赎回结构性票据 | 支付票息的票据，带有定期发行方赎回权；发行方经由百慕大收款方掉期期权对冲 |

为百慕大掉期期权定价比欧式掉期期权复杂得多，因为每个日期的行权决策取决于利率水平与期权的持有价值。标准定价方法包括 Hull-White 单因子或多因子短期利率模型、LIBOR 市场模型，以及带有基于回归的行权规则的蒙特卡洛法（Longstaff-Schwartz）。

日元百慕大掉期期权成交量集中于长期限结构，并作为庞大的日元可赎回债券 / 结构性票据发行市场的对冲工具（在 [[derivatives/structured-bond-japan-retail-issuance|JPY structured bond retail issuance]] 及企业融资中有所触及）。

## 寿险公司可变年金（GMxB）对冲

提供带有最低保证给付（GMxB——GMDB、GMAB、GMIB、GMWB）的可变年金（VA）产品的寿险公司，在其资产负债表上嵌入了大量利率波动率风险。尽管日本 VA 市场小于美国市场且已从 2000 年代中期峰值收缩，残余 VA 块（及现代变体）仍需主动对冲：

| 保证类型 | 对保险公司的风险 | 对冲工具 |
|---|---|---|
| GMDB（最低身故给付保证） | 与死亡率挂钩的股票下行；对利率敏感的保证价值 | 股票看跌期权 + 收款方掉期期权组合 |
| GMAB（最低累积给付保证） | 股票下行；保证现值的利率敏感性 | 股票看跌期权 + 收款方掉期期权 |
| GMIB（最低收入给付保证） | 长期年金利率敏感性；大量 rho 敞口 | 收款方掉期期权序列；长期掉期期权 |
| GMWB（最低提取给付保证） | 股票 / 利率 / 行为组合风险 | 含收款方掉期期权的多资产动态对冲 |

一般模式：在 1990 年代至 2000 年代 NIRP 之前承保 VA 的保险公司，如今面对在低利率环境下深度价内的保证，需要大量收款方掉期期权对冲头寸。随着日元利率正常化，这些对冲产生亏损，但底层保证价值同步下降；动态对冲计划抵消了这些变动。

正为日本保险公司分阶段引入的 [[insurance/economic-value-based-solvency|economic-value-based solvency (ESR)]] 框架使利率波动率敞口更加明确，尤其增加了对长期收款方掉期期权对冲的结构性需求。更广泛的 ALM 背景另见 [[insurance/japan-life-insurance-alm-overview]]。

日本的外资寿险公司关联机构（在 [[insurance/foreign-life-affiliate-japan-positioning]] 中涵盖）历来在掉期期权对冲上尤为活跃，因为其母集团风险管理框架要求对保证进行明确的衍生品对冲。

## 交易商业务

日元掉期期权做市集中于主要银行关联证券公司与全球投资银行：

| 交易商类别 | 代表性公司 |
|---|---|
| 日本大型银行证券关联机构 | MUFG Securities、SMBC Nikko、Mizuho Securities（及其利率交易内的掉期衍生品部门） |
| 独立日本证券公司 | Nomura、Daiwa Securities（掉期期权业务规模小于大型银行） |
| 全球投资银行 | JPMorgan、Goldman Sachs、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS（在日元掉期期权上活跃，服务跨境流与保险公司对冲计划） |
| 交易商间经纪商 | Tradition、ICAP、BGC、Tullett Prebon |

日元掉期期权的交易商收入是交易商银行 IR 中更广泛的利率 / 固定收益做市条目的一部分；不单独披露。

## 清算状态

与大体在 [[securities/japan-securities-clearing-corp|JSCC]] 清算的标准日元 IRS 不同，掉期期权历来主要以双边方式交易。JSCC 与其他 CCP 已在某些货币中扩展掉期期权清算能力；日元掉期期权清算仍属较新且范围比普通 IRS 更窄。大多数保险公司 / 结构性票据对冲掉期期权流为双边，依据 ISDA 主协议与 CSA 立约，并对超过门槛的非清算交易适用 UMR 阶段初始保证金（IM）要求。

## Related

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
- [[JapanFG/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate options, including swaptions, notional and gross market value).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Japan Securities Clearing Corporation: JPY OTC clearing scope.
- Financial Services Agency: FIEA framework on OTC derivatives and ESR-related supervisory guidance.
- ISDA: Standard documentation, swaption definitions, 2020 IBOR Fallbacks Protocol.
- Industry publications (Risk, GlobalCapital, Practical Law) on swaption market practice.
- National Association of Insurance Commissioners (US): For comparison, US variable annuity / GMxB hedging practice.

---
source: securities/japan-margin-trading-and-securities-finance
source_hash: 072e33366117b5f0
lang: zh
status: machine
fidelity: ok
title: "日本保证金交易和证券金融"
translated_at: 2026-06-01T03:31:12.268Z
---
# 日本保证金交易和证券金融

## 概述

日本保证金交易不仅仅是零售杠杆产品。它是连接经纪商、东京证券交易所规则、日本证券金融、抵押品、股票借贷、清算、结算、卖空压力和投资者风险控制的市场基础设施和证券金融路线。

将此页面与 [[securities/INDEX|securities domain]]、[[financial-regulators/japan-securities-finance|Japan Securities Finance]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 以及经纪商页面（例如 [[securities-firms/sbi-securities|SBI Securities]] 和 [[securities-firms/rakuten-securities|Rakuten Securities]]）结合使用。

## 系统图

|层|角色 |
|---|---|
|投资者/客户|将抵押品存入证券公司，通过融资融券交易进行买卖。 |
|证券公司|向客户借出资金或证券，管理抵押品、赎回权、还款和产品适用性。 |
| TSE / JPX 规则 |明确保证金交易标准化、合格问题、贷款保证金交易问题、限制、权利处理和公告。 |
| [[financial-regulators/japan-securities-finance|Japan Securities Finance]] |为证券公司提供资金和股票，实现标准化融资融券结算和更广泛的证券金融服务。 |
| [[securities/japan-securities-clearing-corp|JSCC]] / [[securities/japan-securities-depository-center|JASDEC]] |用于市场交易和抵押品/交割管道的清算和记账结算层。 |
|贷款人/外部股东|当借贷需求超过内部供应时，可以提供借入的股票，包括通过拍卖式的溢价收费机制。 |

## 标准化保证金与可转让保证金

JPX 的保证金概述将标准化保证金交易与可转让保证金交易区分开来：

|尺寸|标准化保证金交易 |可转让保证金交易|
|---|---|---|
|符合条件的问题 |根据 TSE 规则选择。 |原则上，所有上市发行均须遵守经纪商条款和规则。 |
|还款期限|最长六个月。 |由客户与证券公司共同确定。 |
|保费收费 |在交易所规则框架下公布/处理。 |由客户与证券公司共同确定。 |
|维权待遇 | TSE 指定的方法。 |由客户与证券公司共同确定。 |
|贷款交易|可用的。 |不能以同样的方式获得。 |

这个边界很重要，因为 [[financial-regulators/japan-securities-finance|JSF]] 是标准化保证金/贷款交易路线的最核心，而可转让保证金更多地取决于经纪商资产负债表、抵押品政策和产品条款。

## 证券金融角色

JPX解释称，证券金融公司向证券公司提供资金和股票，以支持标准化的保证金交易结算，东京证券交易所指定日本证券金融公司为证券金融公司。 JSF自己的公开材料将其描述为日本唯一一家获得FIEA下的保证金交易业务贷款许可的证券金融公司，其业务领域包括证券融资、可转让保证金相关贷款、一般股票借贷、股权回购、债券回购/原崎和零售贷款。

对于 FinWiki 来说，这意味着 JSF 不仅仅是另一家非银行金融公司。它是一个市场管道节点：

- 融资保证金购买；
- 采购股票以进行保证金销售/空头头寸；
- 通过额外收费和限制来管理特殊的供需压力；
- 将零售经纪商需求与证券借贷和机构库存联系起来；
- 在股票市场流动性和货币市场/回购协议之间架起一座桥梁。

## 交易和资金流
```text
Margin buyer
  -> broker lends funds against collateral
  -> shares purchased and held / pledged within the securities settlement stack
  -> broker may use securities finance company loan route

Margin seller
  -> broker lends shares against collateral
  -> shares sold into market
  -> broker / securities finance company sources shares when needed
  -> repayment through buying back shares or delivering same issue
```
重要的一点是，零售保证金交易可以成为一条客户抵押品、经纪人信用、证券金融贷款、借入股票、清算和记账结算的链条。这就是为什么保证金交易和在线经纪分析一样属于[[securities/japan-market-infrastructure-map|market infrastructure]]。

## 市场信号

|信号|有用的阅读 |警告 |
|---|---|---|
|未结保证金交易 |零售/经纪商杠杆和仓位压力。 | TSE 未偿保证金和 JSF 贷款余额并不相同。 |
|贷款余额/股票贷款余额|通过 JSF 途径进行融资和借股需求。 |不包括所有可转让保证金或经纪商自筹资金的头寸。 |
|保费收费 |借债稀缺和空方压力信号。 |可以是特定问题的和临时的。 |
|保证金交易的限制 |交易所/证券金融风控干预。 |不一定是发行人的基本观点。 |
|每日刊物/关注措施|留意交易过热或失衡的信号。 |需要来自成交量、流通量、新闻和经纪商流程的背景信息。 |
| PTS 保证金处理 |特定于场地和特定于经纪人的路线。 |使用 [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] 读取。 |

## JapanFG 相关性

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]]是机构证券金融功能的锚页面。
- [[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]]、[[securities-firms/matsui-sec|Matsui Securities]]、[[securities-firms/gmo-click-securities|GMO Click Securities]] 和 [[securities-firms/dmm-com-securities|DMM.com Securities]] 通过保证金率、抵押品规则、产品限制和活跃交易者经济来确定。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] 和 [[securities-firms/mufg-mums|MUMSS]] 对于机构证券借贷、主经纪商邻接和全方位服务融资环境至关重要。
- 当证券金融成为抵押品和融资成本问题时，[[money-market/jgb-repo-market-japan|Japan JGB repo market]] 和 [[money-market/INDEX|money-market domain]] 是相邻的。

## 风险控制

|风险|控制路线|
|---|---|
|客户杠杆损失|保证金比例、追加抵押、强制平仓、产品披露。 |
|股票借贷稀缺|溢价费用、股票借贷限制、拍卖、外部股东借款。 |
|结算失败 |清算、存管和证券金融公司结算控制。 |
|市场过热| TSE 日报、监管措施、经纪商限制。 |
|经纪商资产负债表压力|经纪商融资政策、信用风险、集中度、抵押品流动性。 |
|客户误会|现金交易、标准化保证金、可转让保证金、证券抵押贷款和衍生品的明确分离。 |

## 研究清单

1。确定产品是否为现金交易、标准化保证金、可转让保证金、证券抵押贷款、外汇/差价合约或衍生品保证金。
2。检查经纪商的保证金产品披露和抵押品规则。
3。当发行级保证金数据很重要时，检查 TSE 合格发行/限制/权利处理途径。
4。当证券融资压力重大时，检查 JSF 贷款余额/股票贷款/溢价收费途径。
5。仔细比较 TSE 未偿保证金交易和 JSF 贷款；它们是不同的措施。
6。在评估经纪商收​​入时，将保证金经济学与 [[securities/japan-online-brokerage-competition|online brokerage competition]] 和 [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] 联系起来。

## 相关

- [[securities/INDEX]]
- [[financial-regulators/japan-securities-finance]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[money-market/jgb-repo-market-japan]]
- [[INDEX|FinWiki index]]

## 来源

- JPX：保证金交易概述。
- JPX：保证金交易的目的和机制。
- JPX：对保证金交易和保证金交易贷款的限制。
- JPX：保证金交易系统概要 PDF。
- JSF：企业信息和证券融资业务页面。
- FSA：许可/注册机构门户。

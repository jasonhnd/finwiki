---
source: money-market/boj-net-funds-transfer-system-rtgs-settlement
source_hash: c387fc73ac1d4331
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日银网资金转账系统与RTGS结算"
translated_at: 2026-06-05T00:00:00.000Z
---
# 日银网资金转账系统与RTGS结算

## 维基路径

本条目归于 [[money-market/INDEX|money-market index]] 之下。关于资金端通过这条结算轨道完成结算的市场，请对照 [[money-market/call-market-structure|Call market structure]] 与 [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|repo transaction structures]] 阅读；关于央行如何供给与吸收流经其中的准备金，请参阅 [[money-market/boj-open-market-operations|BoJ open market operations]]。制度上的运营主体是 [[financial-regulators/boj-payment-settlement-dept|the BoJ Payment and Settlement Systems Department]]。

## TL;DR

**日银网资金转账系统（BOJ-NET FTS）** 是日本银行用于通过 **在日银开立的往来账户（当座預金）** 结算日元支付的在线网络。它是支撑日本货币市场的结算底层：当一笔拆借贷款被偿还、一笔回购的资金端发生移动，或一项日银操作注入资金时，资金最终都以日银往来账户之间在日银网上的转账形式移动。

有两个结构性事实界定了它：

- **RTGS是唯一的结算方式。** 只要有足够资金可用，支付指令即被即时、逐笔处理（实时全额结算）—— 这些资金流不存在日终的净额结算。
- **日银往来账户是结算资产。** 同一批账户持有 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility]] 为之付息的 **准备金 / 超额余额**，从而将*管路*（结算）与*价格*（利率下限）联系起来。

对FinWiki而言，这是为每一笔货币市场交易回答"资金实际去往何处"的页面，并填补了INDEX中关于日银往来账户准入的待办备注。

## 日银网结算什么

| 资金流 | 之所以通过日银网结算，是因为…… |
|---|---|
| [[money-market/call-market-structure|Call loans]] | 无担保拆借的资金端，是起息日当天日银往来账户之间的转账。 |
| [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|JGB repo]] 的资金端 | 回购 / 现先的资金，按券款对付（DVP）方式对JGB交割进行结算。 |
| [[money-market/boj-open-market-operations|BoJ operations]] | 资金供给操作与资金吸收操作，将准备金调入 / 调出往来账户。 |
| 银行间及大额支付 | 金融机构之间的高额日元债务。 |
| 来自其他系统的净头寸 | 清算系统（如票据 / 支票交换）的净额结果，通过日银网按RTGS方式结算。 |

证券端有一项配套服务 **BOJ-NET JGB Services**，用于JGB的账簿登记转账；两者结合即可实现DVP，使JGB交割与资金支付相联结，从而消除回购与JGB直接结算中的本金风险。

## 为何采用RTGS，以及流动性上的权衡

RTGS在每笔支付被处理的那一刻即以终局性完成结算，而不是在日终轧差（那会留下巨额的日内敞口），由此消除了结算风险。其权衡在于 **流动性密集度**：全额结算要求参与者在全天保持资金可用。

日银通过两种机制管理这一权衡：

- **日内透支便利**：日银（凭抵押品）提供日内信用，使机构能在收款资金到达之前先行支付，从而平滑日内流动性。
- **节约流动性的功能**：日银网FTS中的排队与抵销机制，将相反方向的支付进行匹配，以节省每笔结算所消耗的流动性。

这与货币市场的时点安排直接相关：日内头寸紧张可能在机构轧平其日银往来账户余额时，推动日终的 [[money-market/call-market-structure|call-market]] 活动。

## 下一代RTGS（RTGS-XG）

日银逐步将日本推进到RTGS，并在 **下一代RTGS（RTGS-XG）** 项目下对其加以增强：

- 在日银网FTS中引入 **节约流动性的功能**。
- 将此前由民间部门的全银数据通信系统及外汇日元清算制度处理的大额支付，纳入日银网FTS的RTGS环境。

其效果是将具系统重要性的大额日元结算，集中到内置流动性节约机制的央行RTGS轨道上 —— 在控制全额结算的流动性成本的同时，强化结算安全。

## 往来账户：管路与价格交汇之处

日银往来账户身兼两职，而混淆这两种角色是一个常见错误：

| 角色 | 含义 |
|---|---|
| 结算资产 | 用于在日银网FTS上结算支付的余额。 |
| 准备 / 政策余额 | 同一批余额即准备金；在 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] 之下，其分层赚取补充往来存款便利的利率，从而锚定拆借利率。 |

因此，*结算系统*（日银网）与*利率下限*（准备金付息）运行于 **同一批账户余额** 之上。一家银行在判断是要在拆借市场放款、持有准备金，还是通过回购融资时，是在结算需求、准备金利率与市场融资成本之间同时进行优化。

## 阅读清单

1. 将日银网FTS视为资金结算轨道，将BOJ-NET JGB Services视为证券结算轨道；两者结合即给出DVP。
2. 记住RTGS意味着全额、即时、终局的结算 —— 而非日终净额结算。
3. 区分日银往来账户的*结算*角色与其*准备 / 政策*角色；二者共享同一个余额。
4. 将日内流动性紧张读作日终拆借市场活动的驱动因素，而非独立信号。
5. 对于大额日元结算，应回想RTGS-XG将此前民间部门的资金流集中到了日银网FTS。

## JapanFG相关性

- [[financial-regulators/boj-payment-settlement-dept|BoJ Payment and Settlement Systems Department]] 运营并监督日银网。
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] 供给与吸收流经该轨道的准备金，并设定准备金利率下限。
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Department]] 实施那些资金在此结算的市场操作。
- 大型银行 [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 是直接的往来账户持有者，为自身及客户的大额日元资金流进行结算。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 与 [[financial-regulators/ueda-yagi-tanshi]] 中介那些资金端通过日银网结算的拆借与回购交易。

## 边界情形

- **日银网FTS vs BOJ-NET JGB Services**：资金转账轨道 vs JGB账簿登记轨道；DVP回购 / JGB结算两者皆需。
- **RTGS vs 净额结算**：日银网全额且即时结算；民间零售系统先行轧差，其净头寸再通过日银网结算。
- **往来账户 vs 准备金**：同一余额，两种角色（结算资产与政策 / 准备余额）。
- **日银网 vs 全银**：全银数据通信系统是民间部门的国内资金转账网络；大额资金流在RTGS-XG下被纳入日银网FTS，但全银仍作为零售 / 大众支付层存在。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[money-market/tanshi-company-business-model]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[financial-regulators/boj-payment-settlement-dept]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/boj-financial-markets-dept]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 来源

- 日本银行：支付与结算系统概要（日银往来账户、日银网、结算角色）。
- 日本银行：RTGS（实时全额结算）页面（RTGS作为唯一结算方式、日内透支、节约流动性的功能）。
- 日本银行：日银网资金转账系统概要（RTGS-XG、纳入日银网FTS的支付范围）。
- 日本银行：货币市场概要页面。
- BIS CPMI：日本的支付系统（日银网、RTGS、往来账户结算背景）。

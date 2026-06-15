---
source: derivatives/japan-interest-rate-derivatives-overview
source_hash: e8cb30cec69ce737
lang: zh
status: machine
fidelity: ok
title: "日本利率衍生品概览"
translated_at: 2026-05-31T03:19:56.466Z
---

# 日本利率衍生品概览

## TL;DR

日本的利率衍生品生态系统由六种主要工具类型构成——日元 IRS、以 TONA 为参考的 OIS、日元互换期权、JGB 期货(10Y 标准与迷你、5Y、20Y)、TONA 3个月期货,以及资产互换——连同支撑它们的清算、监管和交易商特许经营层。总日交易额达到数万亿美元等值(跨按期限和工具切分的名义本金),大部分活动集中于巨型银行关联和全球交易商群体。

该市场受《金融商品交易法》(FIEA)监管,由金融厅(FSA)监督,受指令的标准化交易在日本证券清算公司(JSCC)进行中央清算。日本央行(Bank of Japan)既通过货币政策(驱动 OIS 曲线)、也通过其 JGB 购买计划(影响现货 JGB 和 JGB 期货市场)施加宏观影响。

对 FinWiki 而言,本条目是该领域的锚点:它路由各组成工具页面,概括市场参与者格局,并阐述支撑所有后续利率衍生品条目的监管与基础设施框架。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the rates-cluster anchor. Read it together with the constituent pages: [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/jgb-futures-curve]], and [[derivatives/yen-basis-swap-market]]. The cash side and BoJ policy framework are in [[money-market/INDEX]] and [[money-market/boj-open-market-operations]]; the clearing infrastructure is in [[securities/japan-securities-clearing-corp]].

## 六种主要工具类型

| 工具 | 市场场所 | 参考利率 | 流动性期限区间 | 锚点页面 |
|---|---|---|---|---|
| 日元 IRS | OTC,大量在 JSCC 清算 | 1M / 3M / 6M TIBOR;TONA 复利 | 2Y 至 30Y | [[derivatives/japan-irs-market]] |
| 日元 OIS | OTC,大量在 JSCC 清算 | TONA 后置复利 | 1W 至 30Y;最深 1Y 至 10Y | [[derivatives/ois-tona-curve]] |
| 日元互换期权 | OTC,多为双边 | 标的日元 IRS(TIBOR 或 TONA) | 1Y x 1Y 至 10Y x 30Y;最深在 5Y x 5Y、10Y x 10Y | (W8-D 计划 `derivatives/japan-yen-swaption.md`) |
| JGB 期货 | OSE(JPX),在 JSCC 清算 | 名义 JGB;CTD 交割 | 10Y 标准、10Y 迷你、5Y、20Y | [[derivatives/jgb-futures-curve]] |
| TONA 3个月期货 | OSE(JPX),在 JSCC 清算 | 3M 复利 TONA | 短端(近月季度) | (在 [[derivatives/ois-tona-curve]] 中涵盖) |
| 资产互换 | OTC,多为双边 | JGB 现货边 + IRS 边 | 匹配标的 JGB | (W8-D 计划 `derivatives/jgb-asset-swap.md`) |

OTC 工具主导名义本金余额;上市工具主导交易笔数并提供每日价格发现。典型的机构利率策略使用一种混合:期货用于战术久期,互换用于定制期限/曲线敞口,互换期权用于凸性/波动率,资产互换用于现货与衍生品结合的交易。

## 交叉货币桥梁

日元利率生态系统通过以下方式连接至美元(和欧元)利率生态系统:

| 桥梁 | 工具 | 锚点 |
|---|---|---|
| 日元-美元交叉货币基差互换 | OTC CCBS | [[derivatives/yen-basis-swap-market]] |
| 日元外汇远期/外汇互换 | OTC 外汇衍生品 | (W8-B 计划 `derivatives/japan-fx-swap-market.md`) |
| 日元计价外国发行(武士债、Uridashi)互换回本币 | 组合 OTC IRS + CCBS | 在 [[finance/INDEX]] 中涵盖 |

这些桥梁意味着日本利率衍生品不能孤立分析;任何主要货币中全球交易商的资产负债表压力,都可通过基差互换和外汇互换市场传导至日元利率定价。

## 市场参与者

参与者群体横跨交易商、终端用户和基础设施:

| 类别 | 范例/角色 |
|---|---|
| 巨型银行关联证券公司(交易商) | MUFG Securities、SMBC Nikko、Mizuho Securities——主导的日元利率做市商。 |
| 独立日本证券公司(交易商) | Nomura、Daiwa——强大的日元特许经营加上跨境。 |
| 全球投资银行(交易商) | JPMorgan、Goldman、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS。 |
| 国内银行(终端用户) | 巨型银行资金部、地方银行、信托银行、农林中金(Norinchukin Bank)——主要为 ALM 对冲。 |
| 寿险公司(终端用户) | 用于保单准备金久期匹配的长期收固定利率资金流。 |
| 财险公司(终端用户) | 较小规模的 ALM 对冲。 |
| 企业(终端用户) | 浮动转固定贷款对冲、外国发行互换回、资本结构对冲。 |
| 外国宏观/对冲基金 | 战术性日本利率观点,日本对主要货币曲线的相对价值。 |
| 养老金/资产管理公司 | 日元固定收益委托的久期管理。 |
| 交易商间经纪商 | ICAP / Tradition / BGC / Tullett Prebon——匿名执行和价格发现。 |
| CCP | 日本证券清算公司(JSCC)——中央清算基础设施。 |
| 监管机构 | FIEA 下的金融厅(FSA)。 |
| 央行 | 日本银行——通过政策和 JGB 购买计划驱动曲线的宏观因素。 |

交易商特许经营是结构性支柱。公开的特许经营评论出现在 [[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] 的母集团 IR 材料中。

## 每日交易额

日元利率衍生品的总日交易额(名义本金):

| 来源 | 度量 |
|---|---|
| BIS 三年期央行调查(外汇与 OTC 衍生品,最新 2022 期次) | 日元计价 OTC 利率衍生品交易额在总量上为每日数千亿美元等值。 |
| ISDA SwapsInfo 每周汇总交易 | 每周清算和双边日元 IRS 名义本金为数万亿美元等值。 |
| JPX 月度成交量统计 | 上市衍生品(JGB 期货、TONA 期货)每日合约成交量按月披露。 |
| 日本央行 BIS 调查日本部分 | 日本所在交易商账簿的每日交易额。 |

标准提醒:交易额与名义本金余额是不同的概念;两者都由 BIS 报告,但周期不同(交易额三年一次,余额半年一次)。对任何当期数字,请引用确切的来源发布和调查期次。

数万亿美元等值的规模是一个有用的数量级锚点,但由少数大型交易商主导,并集中于标准期限。

## 监管框架

管辖日本利率衍生品的主要监管层:

| 层 | 详情 |
|---|---|
| 《金融商品交易法》(FIEA,金融商品取引法) | 涵盖证券、衍生品、市场中介、披露和市场行为的法定框架。 |
| FSA 监督 | 金融厅(金融庁)监督 FIEA 注册的交易商、交易所、CCP 和市场基础设施。 |
| 衍生品交易商注册 | 活动需要 FIEA 下的第 1 种金融商品业注册。许可层见 [[banking/japan-banking-license-tier-comparison-matrix]]。 |
| CCP 清算指令 | FSA 指定的标准化日元 IRS 必须在 JSCC 清算;范围历经多个规则周期扩展。 |
| 报告义务 | 按 FSA 规则向指定报告库(TR)进行交易报告。 |
| ISDA 文档 | 大多数 OTC 交易使用 ISDA 主协议(通常为 1992 或 2002 版本)加 CSA 和产品特定附件。 |
| 日本央行市场监测 | 日本央行作为其操作职责的一部分监测货币市场和衍生品的运作,包括调查活动(东京货币市场调查)。 |
| 资本与保证金规则 | 巴塞尔 III 风险加权资产规则、杠杆率、NSFR、LCR。针对非清算双边交易的非清算保证金规则(UMR)。 |
| 审计与报告 | FIEA 下的上市实体披露;发行人在日本 GAAP / IFRS 下的衍生品套期会计。 |

该监管框架与 G20 / FSB 衍生品改革承诺(中央清算、交易报告、资本和保证金标准)大体一致。日本是主要利率产品 CCP 清算的早期采纳者。

## TOMS 清算平台(及 JSCC 清算)

JPX 集团的交易订单管理系统(TOMS)是支持上市衍生品撮合和清算流入 JSCC 的技术基础设施。对于 OTC IRS,JSCC 运营一个专用的 OTC 清算平台(JGBCC 是 JGB 现货的前身;JSCC 整合了跨 JPX 集团产品的清算)。

JSCC 对 OTC IRS 的关键清算特征:

| 特征 | 详情 |
|---|---|
| 合格产品 | 受指令期限和参考指数的标准化日元 IRS;随时间扩展。 |
| 会员 | 直接清算会员(DCM)加上通过 DCM 为非会员进行的客户清算。 |
| 保证金 | 使用组合保证金方法的初始保证金(IM);以日元现金计的每日变动保证金(VM)。 |
| 违约管理 | 分层瀑布(违约方保证金 → 违约方违约基金缴款 → JSCC 资本档 → 非违约会员基金)。 |
| 拍卖流程 | 在违约情形下,JSCC 向非违约会员进行组合拍卖。 |
| 交叉货币产品 | JSCC 的范围主要是日元计价;交叉货币 CCBS 清算较为有限。 |

对于上市衍生品(JGB 期货、TONA 期货、日经 225 期货和期权),JSCC 以跨产品的组合保证金清算完整的 OSE / TSE 衍生品流。

CCP 基础设施细节见 [[securities/japan-securities-clearing-corp]],更广义的清算结算生态系统见 [[securities/japan-market-infrastructure-map]]。

## 公开数据面

| 来源 | 显示内容 |
|---|---|
| 日本央行货币市场与东京货币市场调查 | 总日元货币市场和衍生品交易模式;半年/年度调查。 |
| 日本央行统计:BIS OTC 衍生品日本部分 | 日元利率衍生品名义本金和总市值,半年一次。 |
| BIS OTC 衍生品统计 | 全球总日元衍生品余额,按交易对手类型、工具和货币切分。 |
| BIS 三年期央行调查 | 三年一次的交易额快照。 |
| ISDA SwapsInfo | 每周汇总的清算和双边交易名义本金。 |
| JPX 成交量统计 | 月度上市衍生品成交量和未平仓量。 |
| JSCC 公开披露 | 清算量、会员数、违约基金规模(在披露时)。 |
| FSA 监管披露 | 定期监管评论和汇总市场结构数据。 |
| 交易商银行 IR | 汇总市场分部收入评论。 |

公开数据足够丰富,可刻画总市场规模、交易商集中度、清算份额和大致趋势。它不揭示单笔交易定价、特定交易对手敞口或交易商自营损益。对任何特定数字请引用确切的发布期次,因为数字会随各次发布更新。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## 来源

- 日本银行(Bank of Japan):货币市场面;东京货币市场调查。
- 日本银行(Bank of Japan):BIS 半年度 OTC 衍生品统计的日本部分。
- BIS:半年度 OTC 衍生品统计;外汇与 OTC 衍生品三年期央行调查。
- 日本交易所集团(JPX)/ 大阪交易所(OSE):上市衍生品产品面;成交量和未平仓量统计。
- 日本证券清算公司(JSCC):清算规则、合格产品清单、清算量披露。
- 金融厅(FSA):FIEA 框架和监管指引。
- ISDA:SwapsInfo 每周汇总交易数据;ISDA 主协议框架文档。
- 日元利率基准跨行业委员会(Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks):IBOR 转换报告。
- 日本银行协会 TIBOR 管理机构(JBATA):TIBOR 基准管理。
- 交易商银行 IR 发布:MUFG、SMFG、Mizuho FG、Nomura HD、Daiwa Securities Group 季度披露。

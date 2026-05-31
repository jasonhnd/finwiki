---
source: derivatives/otc-clearing-jp-trade-repository
source_hash: c13c35f3c990a0c5
lang: zh
status: machine
fidelity: ok
title: "OTC 衍生品清算与交易报告库 —— 日本"
translated_at: 2026-05-31T03:19:56.497Z
---

# OTC 衍生品清算与交易报告库 —— 日本

## TL;DR

日本的**OTC 衍生品清算与报告制度**建立在三大支柱之上：

1. **在 [[securities/japan-securities-clearing-corp|JSCC]] 进行中央清算**，针对强制可清算的 OTC 产品 —— 日元利率互换（JPY IRS）、参照 TONA 的隔夜指数互换（OIS），以及 JSCC CDS 清算服务（针对指定指数 CDS）。强制清算依据《金融商品交易法》（FIEA）对在范围内的对手方和产品类别强制执行，与 2009 年二十国集团（G20 ）匹兹堡承诺后的框架相一致；

2. **交易报告库报告** —— 由 FIEA 受监管实体进行的所有 OTC 衍生品交易必须向交易报告库（TR）报告。日本的主要 TR 是 **DTCC Data Repository Japan**（一家受监管的 DTCC 子公司），以 JFSA 作为接收监管机构。报告同时涵盖双边和已清算交易，支持系统性风险监测；

3. **跨境等同** —— 日本已为 JSCC 清算服务从欧盟委员会获得 **EMIR 等同**（允许欧盟对手方通过 JSCC 清算而不丧失 EMIR 第四编的优惠待遇），并从美国 CFTC 获得用于清算和报告认可的 **第七编 / 多德-弗兰克替代合规 / 等同** 要素（须按各具体类别逐项裁定）。

本条目涵盖 JSCC 清算范围与成员结构、FIEA 下的交易报告库报告义务、EMIR / CFTC 等同框架、争议解决架构，以及尽管获得广泛等同认可、日本 OTC 清算范围仍**比欧盟 EMIR 附件 IV 更窄**的结构性原因。

## Wiki 路由

本条目归属于 OTC 基础设施集群下的 [[derivatives/INDEX|derivatives index]]。请结合 [[securities/japan-securities-clearing-corp|JSCC]] 阅读以了解中央对手方本身，结合 [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] 了解底层日元 IRS / OIS 市场结构，结合 [[derivatives/swap-execution-facility-japan|Japan SEF-equivalent / electronic execution]] 了解位于清算前端的执行场所层，结合 [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] 了解交易商侧成员经济，结合 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 了解更广泛的基础架构背景，结合 [[derivatives/jgb-futures-curve|JGB futures curve]] 了解挂牌衍生品清算的对比。

## 中央清算与交易报告库报告为何重要

2008 年金融危机后的监管改革，在二十国集团（G20 ）匹兹堡承诺下产生了 OTC 衍生品监管的四大支柱：

1. 通过中央对手方（CCP）对标准化 OTC 衍生品进行**强制中央清算**，以降低双边对手方风险；
2. 向受监管交易报告库进行**强制交易报告**，用于系统性风险监测；
3. **针对未清算衍生品的保证金要求**（初始保证金和变动保证金），使双边 OTC 与已清算产品的风险特征对齐；
4. 针对指定标准化产品的**交易场所迁移**至平台（美国 SEF、欧盟 MTF / OTF、日本 ETP）。

日本通过 FIEA 修订实施了这一框架，以 JFSA 作为实施监管机构。该架构在**功能上等同于**美国多德-弗兰克第七编和欧盟 EMIR / MiFID II，但使用 FIEA 监管下的**日本本土基础设施**（JSCC、DTCC Japan），而非直接域外适用美国 / 欧盟规则。

这是日本 OTC 衍生品市场的结构性骨干。一笔在 2026 由两家 FIEA 受监管实体执行的交易商银行日元 IRS 交易，通常会：(a) 电子协商或语音经纪撮合；(b) 在范围内时提交 JSCC 清算；(c) 在报告窗口内向 DTCC Japan 报告；(d) 通过 JSCC 初始和变动保证金流程进行保证金处理；(e) 由 JFSA 监管下、符合 ISDA 主协议标准的交易商文档支持。

## JSCC 强制清算范围

JSCC 在日本运营 OTC 衍生品的指定清算服务。当前公开来源的范围包括：

| 清算服务 | 底层产品 | 强制清算范围 |
|---|---|---|
| **JSCC IRS 清算** | 日元利率互换；参照 [[derivatives/japan-interest-rate-derivatives-overview|TONA]] 的日元 OIS；选定的基差互换变体 | 对超过指定名义本金阈值的 FIEA 受监管对手方、就标准化合约条款强制执行。 |
| **JSCC CDS 清算** | iTraxx Japan 指数 CDS（指定系列）；选定的单一名称参照实体（范围随 JSCC 产品新增而演变） | 对 FIEA 受监管交易商对手方的在范围指数 CDS 清算。 |
| **JSCC JGB OTC 清算（适用情况下）** | JGB 现券交易和 JGB 回购（JGB OTC 清算服务涵盖 JGB 现券和回购，含保证金处理和净额结算） | 随范围扩展由成员驱动并逐对手方进行。 |
| **JSCC 挂牌衍生品清算** | JPX 挂牌的日经 225 期货 / 期权、TOPIX 期货、JGB 期货、TONA 期货、[[securities/osaka-exchange|OSE]] 上的单一名称挂牌期权 | 对所有在场所内执行的交易强制（挂牌衍生品按设计即清算）。 |

**清算强制范围由 FIEA 界定**：并非每两家日本对手方之间的每笔 OTC 衍生品交易都必须清算。范围由以下因素决定：

- **对手方类别** —— 主要交易商银行（[[JapanFG/mufg-bank|MUFG]]、[[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]、[[JapanFG/mizuho-bank|Mizuho]] 等）、大型保险公司、大型资产管理人，以及其他具系统重要性的实体在范围内；较小的终端用户可能不在范围内；
- **产品标准化** —— 具体合约条款（货币、浮动利率指数、到期日、计息基准、付款频率）必须匹配一份 JSCC 可清算的合约规格；
- **名义本金阈值** —— 对手方合计名义本金阈值决定哪些实体须接受强制清算。

双边（未清算）OTC 衍生品仍占市场可观份额 —— 用于定制结构、非标准到期日、非标准货币、在已清算范围之外的单一名称 CDS，以及与低于清算阈值的对手方进行的交易。这些双边交易须遵守 FIEA 下**针对未清算衍生品的保证金要求（UMR —— 未清算保证金规则）**，与国际 BCBS / IOSCO 框架相一致。

## JSCC 清算成员结构

JSCC 清算成员分为分层类别：

- **直接清算成员（DCM）** —— 通常是拥有自身 JSCC 会员资格的主要交易商银行和证券公司；
- **间接 / 客户清算** —— 不维持直接 JSCC 会员资格的对手方，通过提供客户清算服务的 DCM 进行清算；
- **保荐 / 代理模式** —— 针对特定产品线的上述模式变体。

DCM 名单由巨型银行系证券子公司和在东京运营的主要外资交易商银行主导。关于驱动谁选择成为 DCM 还是使用客户清算的业务经济，参见 [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]。

### 违约管理瀑布

JSCC 运营一套**违约管理瀑布**，其结构与其他主要全球 CCP（LCH SwapClear、CME、Eurex Clearing）相当：

1. **违约方初始保证金** —— 由违约成员的初始保证金（IM）吸收第一层损失；
2. **违约方违约基金出资** —— 第二层损失；
3. **JSCC 自有资本份额**（"skin in the game"，自有风险敞口）—— 第三层损失；
4. **非违约成员的违约基金出资** —— 互助化层；
5. **恢复工具**（评估权、部分撕单等）—— 进入处置前的最后工具。

针对已清算组合的违约管理拍卖会定期（并在成员违约事件期间按需）进行，以便存续成员承接违约方的头寸。违约管理框架由 JFSA 在 FIEA CCP 监管下审查，并与 CPMI-IOSCO PFMI 原则保持一致。

### 报告义务

在 FIEA 下，由 FIEA 受监管实体进行的 OTC 衍生品交易必须向**在 JFSA 注册的交易报告库**报告。日本的主要 TR 是 **DTCC Data Repository Japan KK**（DTCC 的一家受监管子公司），作为指定 TR 在 JFSA 注册下运营。

可报告的数据字段至少涵盖：

| 字段类别 | 示例 |
|---|---|
| **对手方识别** | 法人实体识别码（LEI）、对手方角色（买方 / 卖方）、对手方所在地。 |
| **交易经济** | 名义本金、货币、生效日、到期日、固定 / 浮动端规格、参照利率（如 TONA、相关情况下的日元 LIBOR 后续曲线）。 |
| **定价 / 估值** | 按市值计价价值、适用情况下的抵押品信息。 |
| **清算状态** | 已清算（含 CCP 标识 —— 如 JSCC）或双边。 |
| **执行场所** | 场所内（如 ETP、电子平台）或场所外（语音 / 双边）。 |
| **生命周期事件** | 新交易、修改、更替（novation）、终止、压缩。 |

报告时点在许多情况下为 **T+1 或 T+2**，对未平仓头寸进行每日抵押品和估值更新。

### TR 报告为何重要

TR 数据是以下事项的**结构性输入**：

- **JFSA 系统性风险监测** —— 汇总名义本金、总市场价值、敞口集中度、对手方网络分析；
- **BOJ 金融稳定监测** —— 作为 BOJ《金融体系报告》和宏观审慎分析的输入；
- **跨境监管协调** —— JFSA 在支持 EMIR / 第七编等同框架的谅解备忘录（MOU）下，与美国 CFTC、欧盟 ESMA 及其他监管机构共享汇总 / 头寸数据；
- **公开统计** —— 日本 OTC 衍生品按产品类别的汇总未平仓名义本金由 BOJ 和 BIS 发布，以 TR 数据作为基础输入。

TR **并非公开价格源**。交易层面数据仅供监管机构使用；汇总 / 匿名化统计向公众流通。

### EMIR 等同（欧盟）

欧盟委员会已就特定类别授予涵盖日本 CCP 和交易场所制度的 **EMIR 等同裁定**：

- **JSCC 等同** —— ESMA 认可 JSCC 为第三国 CCP，允许欧盟对手方通过 JSCC 清算指定产品，而不丧失欧盟规则授予在受认可 CCP 清算的资本效率待遇；
- **交易场所等同（适用情况下）** —— 在 MiFID II 下，对使用这些场所的欧洲对手方认可日本电子交易场所（如 JPX 挂牌衍生品场所和某些 ETP）；
- **交易报告等同** —— 就特定类别认可日本 TR 报告。

这些裁定是**产品 / 场所特定**的，并定期审查。依赖等同的欧盟对手方应确认当前范围。

### CFTC 替代合规 / 第七编认可（美国）

美国商品期货交易委员会（CFTC）已在多德-弗兰克第七编框架下，就特定类别发布涵盖日本的替代合规 / 可比性裁定：

- **CCP 认可** —— 在美国对手方在日本清算的选定服务上，JSCC 作为 CFTC 注册的衍生品清算组织（DCO）；
- **交易场所认可** —— 在界定的类别中，某些日本执行场所被认可为符合美国第七编目的；
- **报告可比性** —— 在界定的情形中，日本 TR 报告被认可为对指定第七编报告义务可比。

与 EMIR 一样，这些裁定是**产品 / 场所特定**的，并由 CFTC 定期审查。

### 结构性意义

对日本而言，EMIR 和第七编等同是**一项不容轻视的监管成就**。若无等同，与日本交易商银行交易的欧盟和美国对手方将面临：

- 丧失资本高效的净额结算与清算待遇；
- 同时向日本 TR 和欧盟 / 美国 TR 的重复报告义务；
- 限制接入日本执行平台的交易场所限制。

等同保全了日本作为**完全整合的二十国集团（G20 ）OTC 衍生品法域**的地位，也是外资交易商银行（[[JapanFG/goldman-sachs-japan|GS]]、[[JapanFG/morgan-stanley-japan|MS]]、[[JapanFG/jpmorgan-japan|JPM]]、[[JapanFG/citigroup-japan|Citi]]）维持完整东京交易商运营的结构性原因之一。

## 争议解决

日本的 OTC 衍生品争议通常受以下管辖：

- **[[derivatives/INDEX|ISDA Master Agreement]]** —— 标准双边文档框架，含争议解决条款（计算代理人分歧、估值争议、平仓净额结算机制）；
- 大多数跨境交易商交易上的**英国法或纽约法**适用法律条款；
- 纯国内对手方交易的**日本法**；
- 已清算交易的 **JSCC 规则手册** —— 含违约管理程序、保证金争议和成员纪律处分流程；
- 涉及持牌对手方、由监管机构调解争议的 **JFSA 监管渠道**；
- 争讼诉讼的**东京地方法院**（不过大多数 OTC 争议在进入法院前通过协商和解或仲裁解决）。

结构性格局：**双边 OTC 争议由 ISDA 调解**；**已清算交易争议由 JSCC 规则调解**；**监管合规争议由 JFSA 监管**。

## 公开统计

日本 OTC 衍生品的汇总名义本金和总市场价值由以下机构发布：

- **BOJ** —— 定期 OTC 衍生品统计，含名义本金、总市场价值，以及对手方 / 货币细分；
- **BIS 半年度 OTC 衍生品统计** —— 日本作为报告法域为全球汇总出版物作出贡献；
- **JSCC 月度清算统计** —— 发布 IRS、CDS 和挂牌衍生品清算服务的已清算名义本金和未平仓量；
- **JFSA 出版物** —— 引用汇总 OTC 名义本金和清算范围的监管报告。

在引用名义本金与总市场价值时，应将二者清晰区分 —— 视产品类别和净额结算处理而定，未平仓名义本金通常约为总市场价值的 10-30 倍。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/swap-execution-facility-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/jgb-futures-curve]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-depository-center]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 来源

- JSCC，关于公司、IRS 清算、CDS 清算和挂牌衍生品清算范围的英文页面。
- FSA，FIEA 框架页面 —— OTC 衍生品、清算强制范围、交易报告库注册。
- DTCC Japan，受监管交易报告库服务概览。
- ISDA，标准文档、强制清算范围出版物、SwapsInfo 汇总数据。
- BOJ，支付 / 市场 —— OTC 衍生品统计出版物。
- JPX，衍生品市场材料与清算安排。

---
source: derivatives/otc-clearing-jp-trade-repository
source_hash: ff6b89faea110cbe
lang: zh
status: machine
fidelity: ok
title: "场外衍生品清算与交易信息存储机构 — 日本"
translated_at: 2026-06-18T23:33:48.324Z
---

# 场外衍生品清算与交易信息存储机构 — 日本

## TL;DR

日本的**场外衍生品清算与报告制度**建立在三大支柱之上：

1. **在 [[securities/japan-securities-clearing-corp|JSCC]] 进行中央清算**，针对强制可清算的场外产品 — 日元利率互换（日元 IRS）、参照 TONA 的隔夜指数互换（OIS），以及 JSCC 的 CDS 清算服务（针对指定的指数 CDS）。强制清算根据《金融商品交易法》（金商法）对范围内的交易对手及产品类别予以执行，对应 2009  年 G20  匹兹堡承诺之后的框架；

2. **向交易信息存储机构报告** — 受金商法监管的主体所交易的所有场外衍生品都必须向交易信息存储机构（TR）报告。日本的主要 TR 是 **DTCC 数据存储库日本**（受监管的 DTCC 子公司），接收方监管当局为金融厅。报告同时捕捉双边交易与已清算交易，支撑系统性风险监测；

3. **跨境等效性** — 日本已就 JSCC 清算服务从欧盟委员会获得 **EMIR 等效性**（允许欧盟交易对手通过 JSCC 清算而不丧失 EMIR 第四编的优惠待遇），并就清算与报告的承认从美国 CFTC 获得 **第七编／多德-弗兰克替代合规／等效性**要素（以逐项类别认定为条件）。

本条目涵盖 JSCC 的清算范围与会员结构、金商法下的 TR 报告义务、EMIR／CFTC 等效性框架、争议解决架构，以及尽管获得广泛等效性承认、日本场外清算范围仍**窄于欧盟 EMIR 附件 IV** 的结构性原因。

## Wiki route

本条目位于场外基础设施集群中的 [[derivatives/INDEX|derivatives index]] 之下。请与 [[securities/japan-securities-clearing-corp|JSCC]]（中央对手方本身）、[[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]（基础的日元 IRS／OIS 市场结构）、[[derivatives/swap-execution-facility-japan|Japan SEF-equivalent / electronic execution]]（位于清算前端的执行场所层）、[[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]（交易商侧会员经济性）、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]（更广泛的市场管线背景）以及 [[derivatives/jgb-futures-curve|JGB futures curve]]（上市衍生品清算比较）一同阅读。

## 为什么中央清算与交易信息存储机构报告很重要

2008  年金融危机后的监管改革，在 G20  匹兹堡承诺之下产生了场外衍生品监管的四大支柱：

1. 通过 CCP 对标准化场外衍生品进行**强制中央清算**，以降低双边交易对手风险；
2. 向受监管的交易信息存储机构进行**强制交易报告**，以监测系统性风险；
3. **针对非清算衍生品的保证金要求**（初始保证金与变动保证金），使双边场外交易与已清算产品的风险特征一致；
4. 针对指定的标准化产品，将**交易场所迁移**至平台（美国 SEF、欧盟 MTF／OTF、日本 ETP）。

日本通过修订金商法实施了这一框架，以金融厅为实施监管当局。该架构在**功能上等同于**美国多德-弗兰克第七编以及欧盟 EMIR／MiFID II，但使用受金商法监管的**位于日本的基础设施**（JSCC、DTCC 日本），而非直接对美国／欧盟规则进行域外适用。

这是日本场外衍生品市场的结构性支柱。2026  年在两个受金商法监管的主体之间执行的交易商银行日元 IRS 交易，通常会：(a) 经电子协商或语音经纪；(b) 在属于范围内时提交至 JSCC 进行清算；(c) 在报告窗口内报告至 DTCC 日本；(d) 通过 JSCC 的初始保证金与变动保证金流程缴纳保证金；(e) 由依据 ISDA 主协议标准、受金融厅监管的交易商文件予以支撑。

## JSCC 强制清算范围

JSCC 在日本运营面向场外衍生品的指定清算服务。当前公开信息所涵盖的范围包括：

| 清算服务 | 基础产品 | 强制清算范围 |
|---|---|---|
| **JSCC IRS 清算** | 日元利率互换；参照 [[derivatives/japan-interest-rate-derivatives-overview|TONA]] 的日元 OIS；选定的基差互换变体 | 对于标准化的合约条款，针对超过指定名义本金门槛的受金商法监管交易对手为强制性。 |
| **JSCC CDS 清算** | iTraxx Japan 指数 CDS（指定系列）；选定的单一名称参照实体（范围随 JSCC 产品增加而演变） | 针对受金商法监管的交易商交易对手的范围内指数 CDS 清算。 |
| **JSCC 国债场外清算（适用时）** | 国债现券交易及国债回购（国债场外清算服务涵盖国债现券与回购，附带保证金与净额结算） | 随范围扩展，按会员驱动并逐一交易对手地推进。 |
| **JSCC 上市衍生品清算** | JPX 上市的日经 225  期货／期权、TOPIX 期货、国债期货、TONA 期货，以及 [[securities/osaka-exchange|OSE]] 的单一名称上市期权 | 对所有场内执行的交易为强制性（上市衍生品在设计上即被清算）。 |

**清算义务范围由金商法界定**：并非每一个日本交易对手之间的每一笔场外衍生品交易都必须清算。范围由以下因素决定：

- **交易对手类别** — 主要交易商银行（[[megabanks/mufg-bank|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho]] 等）、大型保险公司、大型资产管理公司及其他系统重要性主体属于范围内；较小的最终用户可能不在范围内；
- **产品标准化** — 特定合约条款（货币、浮动利率指标、期限、计息方式、付款频率）必须与 JSCC 可清算的合约规格相匹配；
- **名义本金门槛** — 交易对手汇总名义本金门槛决定哪些主体须接受强制清算。

双边（非清算）场外衍生品仍占市场的可观份额 — 用于定制结构、非标准期限、非标准货币、清算范围之外的单一名称 CDS，以及与低于清算门槛的交易对手进行的交易。这些双边交易须遵守金商法下的**非清算衍生品保证金要求（UMR — 非清算保证金规则）**，对应国际 BCBS／IOSCO 框架。

## JSCC 清算会员结构

JSCC 清算会员分为分层类别：

- **直接清算会员（DCM）** — 通常为拥有自身 JSCC 会员资格的主要交易商银行与证券公司；
- **间接／客户清算** — 不维持直接 JSCC 会员资格的交易对手，通过提供客户清算服务的 DCM 进行清算；
- **保荐／代理模式** — 上述模式针对特定产品线的变体。

DCM 名单由大型银行系证券分支机构及在东京运营的主要外资交易商银行主导。关于驱动谁会选择成为 DCM 而非使用客户清算的特许经营经济性，参见 [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]。

### 违约管理瀑布

JSCC 运营一套在结构上可与其他主要全球 CCP（LCH SwapClear、CME、Eurex Clearing）相比拟的**违约管理瀑布**：

1. **违约方的初始保证金** — 首笔损失由违约会员的初始保证金吸收；
2. **违约方的违约基金出资** — 第二笔损失；
3. **JSCC 自有资本档**（「利益共担」） — 第三笔损失；
4. **非违约会员的违约基金出资** — 互助化层级；
5. **恢复工具**（追缴权、部分撕毁等） — 进入处置前的最终工具。

针对已清算投资组合的违约管理拍卖会（在会员违约事件期间按需）定期举行，以使存续会员能够承接违约方的头寸。违约管理框架由金融厅在金商法 CCP 监管下予以审查，并与 CPMI-IOSCO PFMI 原则保持一致。

### 报告义务

根据金商法，受金商法监管的主体进行的场外衍生品交易必须向**在金融厅登记的交易信息存储机构**报告。日本的主要 TR 是 **DTCC 数据存储库日本株式会社**（DTCC 的受监管子公司），作为指定的 TR 在金融厅登记下运营。

可报告的数据字段至少涵盖：

| 字段类别 | 示例 |
|---|---|
| **交易对手识别** | 法律实体标识符（LEI）、交易对手角色（买方／卖方）、交易对手所在地。 |
| **交易经济性** | 名义本金、货币、生效日、期限、固定／浮动腿规格、参照利率（如 TONA、相关时的日元 LIBOR 后继曲线）。 |
| **定价／估值** | 按市值计价的价值、适用时的抵押品信息。 |
| **清算状态** | 已清算（附 CCP 标识符 — 如 JSCC）或双边。 |
| **执行场所** | 场内（如 ETP、电子平台）或场外（语音／双边）。 |
| **生命周期事件** | 新交易、修改、转让、终止、压缩。 |

报告时点在许多情况下为 T+1  或 T+2，并对未平仓头寸进行每日抵押品与估值更新。

### 为什么 TR 报告很重要

TR 数据是以下事项的**结构性输入**：

- **金融厅系统性风险监测** — 名义本金总额、总市值、敞口集中度、交易对手网络分析；
- **日本银行金融稳定监测** — 作为日本银行《金融系统报告》及宏观审慎分析的输入；
- **跨境监管当局协调** — 金融厅依据支撑 EMIR／第七编等效性框架的谅解备忘录，与美国 CFTC、欧盟 ESMA 及其他监管当局共享汇总／头寸数据；
- **公共统计** — 日本场外衍生品按产品类别的名义本金未平仓余额，由日本银行及 BIS 以 TR 数据为基础性输入予以公布。

TR **并非公开价格信息源**。交易层面的数据仅限监管当局，汇总／匿名化的统计数据流向公众。

### EMIR 等效性（欧盟）

欧盟委员会已就特定类别授予涵盖日本 CCP 与交易场所制度的 **EMIR 等效性认定**：

- **JSCC 等效性** — ESMA 承认 JSCC 为第三国 CCP，允许欧盟交易对手通过 JSCC 清算指定产品，而不丧失欧盟规则对在受承认 CCP 处清算所给予的资本高效待遇；
- **交易场所等效性（适用时）** — 针对使用这些场所的欧洲交易对手，在 MiFID II 下承认日本电子交易场所（如 JPX 上市衍生品场所及某些 ETP）；
- **交易报告等效性** — 在特定类别中承认日本 TR 报告。

这些认定按**产品／场所特定**，并定期审查。依赖等效性的欧盟交易对手应确认当前范围。

### CFTC 替代合规／第七编承认（美国）

美国商品期货交易委员会（CFTC）已在多德-弗兰克第七编框架下，就特定类别发布涵盖日本的替代合规／可比性认定：

- **CCP 承认** — 就美国交易对手在日本进行清算的选定服务，承认 JSCC 为 CFTC 注册的衍生品清算组织（DCO）；
- **交易场所承认** — 在界定的类别中，承认某些日本执行场所就美国第七编目的而言合规；
- **报告可比性** — 在界定的情形下，承认日本 TR 报告就特定第七编报告义务而言可比。

与 EMIR 一样，这些认定按**产品／场所特定**，并由 CFTC 定期审查。

### 结构性意义

EMIR 与第七编等效性对日本而言是一项**非同寻常的监管成就**。若无等效性，与日本交易商银行进行交易的欧盟与美国交易对手将面临：

- 丧失资本高效的净额结算与清算待遇；
- 向日本 TR 与欧盟／美国 TR 双方重复报告的义务；
- 限制访问日本执行平台的交易场所限制。

等效性维系了日本作为**完全融入 G20  的场外衍生品法域**的地位，也是外资交易商银行（[[securities-firms/goldman-sachs-japan|GS]]、[[securities-firms/morgan-stanley-japan|MS]]、[[foreign-financial-institutions/jpmorgan-japan|JPM]]、[[foreign-financial-institutions/citigroup-japan|Citi]]）维持完整东京交易商业务的结构性原因之一。

## 争议解决

日本的场外衍生品争议通常由以下规范：

- **[[derivatives/INDEX|ISDA Master Agreement]]** — 标准双边文件框架，其中包含争议解决条款（计算代理人分歧、估值争议、平仓净额结算机制）；
- 大多数跨境交易商交易适用**英国法或纽约法**作为管辖法律条款；
- 纯国内交易对手交易适用**日本法**；
- 已清算交易适用 **JSCC 规则手册** — 包括违约管理程序、保证金争议及会员纪律程序；
- 涉及持牌交易对手的、由监管当局调解的争议适用**金融厅监管渠道**；
- 有争议的诉讼适用**东京地方法院**（尽管大多数场外争议在进入法院之前已通过协商和解或仲裁解决）。

结构性模式为：**双边场外争议由 ISDA 调解**；**已清算交易争议由 JSCC 规则调解**；**监管合规争议由金融厅监管**。

## 公共统计

日本场外衍生品名义本金与总市值由以下机构公布：

- **日本银行** — 附有名义本金、总市值及交易对手／货币细分的定期场外衍生品统计；
- **BIS 半年度场外衍生品统计** — 日本作为报告法域为全球汇总公布做出贡献；
- **JSCC 月度清算统计** — 就 IRS、CDS 及上市衍生品清算服务公布的已清算名义本金与未平仓量；
- **金融厅出版物** — 提及场外名义本金总额与清算范围的监管报告。

引用名义本金对总市值时，须将两者明确区分 — 名义本金未平仓余额通常约为总市值的 10–30 倍，具体取决于产品类别与净额结算处理。

## 关联

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
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 来源

- JSCC，关于公司、IRS 清算、CDS 清算及上市衍生品清算范围的英文页面。
- 金融厅，金商法框架页面 — 场外衍生品、清算义务范围、交易信息存储机构登记。
- DTCC 日本，受监管的交易信息存储机构服务概览。
- ISDA，标准文件、强制清算范围出版物、SwapsInfo 汇总数据。
- 日本银行，支付／市场 — 场外衍生品统计出版物。
- JPX，衍生品市场资料与清算安排。

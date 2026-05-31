---
source: derivatives/japan-otc-derivative-market-overview
source_hash: d3d97f040b545510
lang: zh
status: machine
fidelity: ok
title: "日本场外（OTC）衍生品市场概览"
translated_at: 2026-05-31T03:19:56.496Z
---

# 日本场外（OTC）衍生品市场概览

## TL;DR

日本的**场外（OTC）衍生品市场**横跨四个产品集群 —— 利率、外汇、信用，以及股票 / 结构化 —— 全部受《金融商品交易法》（FIEA）管辖，由金融厅（FSA）监管，并（对在范围内的产品）在日本证券清算机构（JSCC）清算，同时向指定的交易报告库报告。按未平仓名义本金计，日元利率 OTC 衍生品是最大的集群；按日成交额计，外汇 OTC 最大（由零售外汇驱动，[[derivatives/retail-fx-margin-trade-japan]]）；按名义本金计信用 OTC 最小，但在指数交易上颇为活跃；股票 / 结构化 OTC 由零售结构化债券分销和交易商银行对冲主导。

本条目是将四个 OTC 产品集群联系在一起的跨产品锚点。关于挂牌衍生品的覆盖（JGB 期货、TONA 期货、日经 225 期货和期权），参见 [[derivatives/INDEX]] 和 [[securities/japan-market-infrastructure-map]]。

## Wiki 路由

本条目归属于 [[derivatives/INDEX|derivatives index]]，作为 OTC 市场锚点。请与 [[derivatives/japan-interest-rate-derivatives-overview]] 搭配以了解利率侧锚点，与 [[derivatives/otc-clearing-jp-trade-repository]] 搭配以了解清算与报告基础设施，与 [[derivatives/dealer-bank-derivatives-revenue-mix]] 搭配以了解交易商业务经济。挂牌衍生品的对比位于 [[derivatives/jgb-futures-curve]] 和 [[derivatives/japan-equity-derivatives-product-matrix]]。

## 四个 OTC 产品集群

| 集群 | 主要工具 | 名义本金规模 | 流动性中心 | 锚点页面 |
|---|---|---|---|---|
| 利率 OTC | 日元 IRS、日元 OIS、日元互换期权、交叉货币基差互换、资产互换、通胀互换、CMS | 数万亿美元等值（BIS 半年度） | OTC，大量在 JSCC 清算 | [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/yen-basis-swap-market]], [[derivatives/japan-swaption-market]], [[derivatives/japan-inflation-swap]], [[derivatives/japan-cms-constant-maturity-swap]] |
| 外汇 OTC | 外汇远期、外汇掉期、外汇期权、NDF（相关情况下）、交叉货币互换、零售外汇保证金 | 每日数千亿美元等值 | OTC，多为双边；零售外汇通过外汇交易商清算 / 净额结算 | [[derivatives/fx-options-japan-corporate-treasury]], [[derivatives/retail-fx-margin-trade-japan]], [[derivatives/fx-stp-broker-aggregation]] |
| 信用 OTC | 单一名称 CDS（日本企业）、iTraxx Japan 指数、基差交易、回收率互换 | 数百亿美元等值 | OTC，多为双边；JSCC 运营一项指定 CDS 清算服务 | [[derivatives/japan-cds-market-overview]], [[derivatives/cds-japan-corporate-spread-mechanics]], [[derivatives/basis-trade-bond-cds-japan]] |
| 股票 / 结构化 OTC | 股权挂钩互换、单一股票期权、方差互换、结构化债券（EB、敲入、PRDC）、重新打包票据 | 不定；由零售结构化债券发行和交易商银行对冲主导 | OTC 双边 | [[derivatives/structured-bond-japan-retail-issuance]], [[derivatives/structured-product-eb-knockin-japan-retail]], [[derivatives/japan-single-stock-options]], [[derivatives/equity-volatility-hedging-corporates-japan]] |

OTC 市场与交易所交易衍生品市场（OSE 上的 JGB 期货、TONA 期货、日经 225 期货和期权）在结构上相互分离，但两个市场通过交易商银行对冲和终端用户组合决策紧密耦合。

## 市场参与者

| 类别 | 角色 |
|---|---|
| 巨型银行系证券公司 | MUFG 证券、SMBC 日兴、瑞穗证券 —— 在日元利率 / 外汇 / 结构化业务上占主导。 |
| 独立的日本证券公司 | 野村、大和、三菱 UFJ 摩根士丹利 —— 强大的日元业务加跨境能力。 |
| 全球投资银行 | 摩根大通、高盛、花旗、摩根士丹利、德意志银行、巴克莱、法国巴黎银行、汇丰、瑞银。 |
| 国内银行（终端用户） | 巨型银行财资部、地方银行、信托银行、农林中央金库 —— 主要进行资产负债管理（ALM）对冲。 |
| 寿险公司（终端用户） | 长期限收固定（receive-fixed）资金流，用于保单准备金久期匹配。 |
| 非寿险公司（终端用户） | 较小规模的 ALM 对冲加外汇挂钩负债对冲。 |
| 企业（终端用户） | 浮动转固定贷款对冲、海外发行换回（swap-back）、外汇收入对冲、资本结构对冲。 |
| 海外宏观 / 对冲基金 | 战术性日本利率和信用定位。 |
| 养老金 / 资产管理人 | 日元固定收益委托的久期管理。 |
| 交易商间经纪商 | ICAP / Tradition / BGC / Tullett Prebon —— 匿名执行与价格发现。 |
| CCP | JSCC —— 受强制的日元 IRS / OIS 和指定 CDS 的中央清算。 |
| 交易报告库 | DTCC Data Repository Japan —— FIEA 报告的指定 TR。 |
| 监管机构 | FIEA 下的 FSA。 |
| 中央银行 | BoJ —— 宏观驱动与监测角色。 |

交易商业务是结构性骨干。母公司金融集团（FG）背景参见 [[JapanFG/mufg-bank]]、[[JapanFG/sumitomo-mitsui-banking-corp]]、[[JapanFG/mizuho-bank]]。

## 监管框架

| 层级 | 详情 |
|---|---|
| FIEA | OTC 衍生品交易、报告、清算与行为的法定框架。 |
| FSA 监管 | 监管 FIEA 注册交易商、作为 CCP 的 JSCC，以及交易报告库运营。 |
| 强制清算 | FSA 指定的标准化日元 IRS 和某些 CDS 必须在 JSCC 清算。 |
| 交易报告 | 所有 FIEA 受监管实体的 OTC 衍生品交易必须向指定 TR 报告。 |
| ISDA 文档 | 大多数 OTC 交易使用 ISDA 主协议（1992 或 2002 版本）加 CSA、ISDA 2020 协议。参见 [[derivatives/isda-2020-protocol-japan-implementation]]。 |
| 资本与保证金 | 巴塞尔 III 风险加权资产（RWA）、杠杆率、NSFR、LCR。针对未清算双边衍生品的未清算保证金规则（UMR）。 |
| 等同制度 | JSCC 的 EMIR 等同；用于清算和报告的 CFTC 替代合规 / 等同要素。 |

清算与报告基础设施详情参见 [[derivatives/otc-clearing-jp-trade-repository]]。

## 公开数据来源

| 来源 | 显示内容 |
|---|---|
| BIS 半年度 OTC 衍生品统计 | 日元 OTC 名义本金和总市场价值，按对手方类型、工具和货币切分。 |
| BIS 三年期中央银行调查 | 外汇和 OTC 利率衍生品的成交额快照。 |
| BoJ 东京货币市场调查 | 日元货币市场和衍生品交易模式的汇总。 |
| ISDA SwapsInfo | 主要 IRS 货币（含日元）的每周已清算和双边名义本金。 |
| JSCC 月度清算统计 | JSCC 的 IRS 和 CDS 已清算量、未平仓量、违约基金规模（披露情况下）。 |
| FSA 监管披露 | 定期监管评述和汇总的市场结构数据。 |
| 交易商银行投资者关系（IR） | 市场部门收入的汇总评述。 |

对于具体数字，应引用确切的来源发布与调查年份，因为未平仓名义本金、总市场价值和成交额是以不同周期报告的不同概念。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-rates-derivative-product-matrix]]
- [[derivatives/japan-equity-derivatives-product-matrix]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/isda-2020-protocol-japan-implementation]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[money-market/INDEX]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 来源

- 国际清算银行（BIS）：半年度 OTC 衍生品统计；外汇与 OTC 衍生品三年期中央银行调查。
- 日本银行：支付/市场领域；东京货币市场调查；BIS 半年度 OTC 衍生品数据的日本部分。
- 日本证券清算机构（JSCC）：IRS 清算范围与规则；CDS 清算服务；月度清算统计。
- 金融厅（FSA）：OTC 衍生品的 FIEA 监管、强制清算范围、交易报告规则。
- 国际掉期与衍生工具协会（ISDA）：SwapsInfo 每周汇总交易；ISDA 主协议框架文档。
- 日本交易所集团（JPX）/ 大阪交易所（OSE）：用于交叉比较的挂牌衍生品参考。
- DTCC Data Repository Japan：FIEA 受监管实体 OTC 衍生品报告的指定 TR。

---
source: securities/japan-best-execution-sor-pts
source_hash: 79ca36a4a5e6132a
lang: zh
status: machine
fidelity: ok
title: "日本最佳执行、SOR 和 PTS"
translated_at: 2026-06-01T03:31:12.310Z
---
# 日本最佳执行、SOR 和 PTS

## 概览

日本的最佳执行是零售股票手续费竞争背后的控制层。券商的“零佣金”信息本身并不能说明客户订单是路由到东京证券交易所、自营交易系统（PTS）还是其他执行路径，也不能说明价格、成本、速度、成交可能性、结算确定性和客户指令是否被良好平衡。

请将本页与[[securities/japan-online-brokerage-competition|Japan online brokerage competition]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]以及[[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]]等券商页面一起使用。

这是[[securities/INDEX|securities domain]]内的执行质量路径。对于机构登记和分类检查，请先从[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]]和[[financial-licenses/INDEX|JapanFG legal / financial licenses]]开始，再阅读券商政策页面。

## 来源栈

| 层级 | 来源路径 | 说明内容 |
|---|---|---|
| 监管 / 监督 | FSA 金融商品交易业者监督指南和以客户为本业务运营页面 | 市场中介功能、客户最佳利益、系统风险、订单处理和行为监督。 |
| 自律 / 统计 | [[financial-regulators/jsda|JSDA]]规则和 PTS 交易统计 | 交易商自律路径和公开 PTS 交易信息。 |
| 场所 / 执行 | [[securities/tokyo-stock-exchange|TSE]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]] | 订单可以在哪里执行。 |
| 清算 / 结算 | [[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]] | 说明为什么交易后风险和结算受控前，执行并不算完成。 |
| 券商披露 | 券商最佳执行方针和执行政策页面 | 特定券商如何路由客户订单，以及其声称考虑哪些因素。 |

## 执行路径地图

| 路径 | 实务含义 | FinWiki 解读 |
|---|---|---|
| 主交易所路由 | 券商把订单发送至主要交易所市场，上市现货股票通常为[[securities/tokyo-stock-exchange|TSE]]。 | 易于解释，但不自动意味着在所有价格 / 点差 / 时点情形下最佳。 |
| SOR 路由 | 智能订单路由根据券商政策和订单条件比较可用交易场所。 | 连接手续费营销和真实执行质量的关键环节。 |
| PTS 执行 | 订单在[[securities/japannext-securities|Japannext]]或[[securities/osaka-digital-exchange|ODX]]等替代交易场所成交。 | 某些情形可改善价格 / 时段 / 流动性；需要清晰政策和客户披露。 |
| 客户指令 | 客户在可用时指定场所或订单条件。 | 可能覆盖部分券商默认逻辑；检查产品界面和政策。 |
| 内部 / OTC / 特殊路径 | 券商使用非标准或产品特定路径。 | 需要额外审查冲突、定价和披露。 |

## SOR 不是魔法词

SOR 应被视为运营政策，而非保证。对每家券商都要检查：

1. 包含哪些交易场所；
2. 政策是否比较价格、费用、速度、成交概率和结算确定性；
3. PTS 价格改善是否传导给客户；
4. 券商是否获得返佣、点差经济、融券价值或其他间接经济；
5. 如何处理系统故障、交叉市场、部分成交以及开盘 / 收盘行为；
6. 客户能否选择或关闭 SOR。

因此，[[securities/japan-online-brokerage-competition|online brokerage competition]]不能只用国内股票佣金表来判断。

## PTS 角色

JSDA 发布 PTS 场所上市证券交易信息，并说明此前的 PTS 信息网络已终止，由 JSDA 承担公开统计路径。实务解读为：

- PTS 是市场基础设施的一部分，而不是券商营销的附注。
- PTS 数据帮助分析师判断某只证券或某段时间的替代场所流动性是否重要。
- 券商 SOR 政策决定零售订单是否可以获得 PTS 价格改善。
- PTS 场所仍依赖清算、结算、系统韧性和监管监督。

## 券商比较问题

| 问题 | 公开相关性 |
|---|---|
| 券商是否发布当前最佳执行方针？ | 比较费用声明前必须阅读。 |
| 券商是否路由到 PTS？ | 影响价格改善、执行时段和费用 / 点差经济。 |
| 哪些订单被排除？ | 零股、外国股票、信用交易、衍生品、特殊订单和 NISA 流程可能不同。 |
| 客户可见收益是什么？ | 更好价格、更低显性费用、更快成交，还是仅券商侧经济。 |
| SOR 失败时会怎样？ | 后备路径和故障政策关系到运营风险。 |
| 是否存在生态激励？ | 积分、银行链接和钱包经济可能掩盖执行经济性。 |

## JapanFG 相关性

- [[securities-firms/sbi-securities|SBI Securities]]和[[securities-firms/rakuten-securities|Rakuten Securities]]是应首先阅读的券商页面，因为国内股票费用变化和 SOR / PTS 路由会影响客户价值主张。
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]]和其他银行 / 电信关联券商应放在集团分销经济中阅读，而不仅是交易成本。
- [[securities-firms/paypay-securities|PayPay Securities]]嵌入在 App 中，因此执行披露必须与 UX 简化和投资者保护控制一起阅读。
- [[securities-firms/gmo-click-securities|GMO Click Securities]]、[[securities-firms/dmm-com-securities|DMM.com Securities]]以及 FX / CFD 券商需要单独产品路径检查，因为上市现货股票最佳执行不同于衍生品执行。

## 风险与注意点

| 风险 | 解读 |
|---|---|
| 缺乏背景的标题式价格改善 | 比较总结果，包括佣金、点差、成交概率和订单规模。 |
| 场所集中 | 政策可能形式上很宽，但实践中大多数订单路由到一个场所。 |
| 利益冲突 | 券商经济可能不同于客户执行结果。 |
| 系统脆弱性 | SOR 依赖实时数据、连接、场所可用性和后备规则。 |
| 客户理解不足 | 零售客户可能看到“免费交易”，但不了解场所选择。 |
| 政策页面过时 | 做出实时判断前始终检查当前券商政策页面。 |

## 研究清单

1. 从券商当前最佳执行方针开始。
2. 识别包含的场所：TSE、PTS 或其他路径。
3. 若交易量重要，检查相关期间的 JSDA PTS 统计。
4. 检查客户指令或产品类别是否改变路由。
5. 区分显性费用、隐含点差、价格改善、积分和集团经济。
6. 将执行路径结论链接回[[securities/japan-market-infrastructure-map|market infrastructure]]和[[financial-licenses/securities-license-stack|license stack]]。

## 相关

- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-licenses/securities-license-stack]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## 来源

- FSA：金融商品交易业者综合监督指南。
- FSA：以客户为本的业务运营页面。
- JSDA：PTS 交易统计页面。
- JSDA：规则和自律材料页面。
- Japannext 和 ODX 官方交易场所页面。
- JPX：清算 / 结算概览。

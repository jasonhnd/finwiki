---
source: structured-finance/jhf-mbs-vs-private-rmbs-spread
source_hash: 3126f1597d6a2056
lang: zh
status: machine
fidelity: ok
title: "JHF MBS 与民间 RMBS 利差"
translated_at: 2026-06-01T04:15:40.169Z
---
# JHF MBS 与民间 RMBS 利差

## TL;DR

JHF MBS 高级档相对 JGB 交易利差较窄，通常在 10-30bp 区间，反映了有效的主权关联信用和可预测的月度供给。民间 RMBS 高级档交易利差明显更宽，通常为相对 JGB 的 50-100bp，反映缺乏政府支持并依赖次级分层 / 超额抵押作为信用增级。该差距反映信用质量差异以及结构 / 流动性因素，并塑造各自投资者基础:JHF 侧由寿险公司和 ALM 驱动型买方锚定；民间 RMBS 需求则由寻求利差的机构投资者主导。使用本页理解 [[structured-finance/INDEX]] 中驱动结构设计决策的利差经济学。

## Wiki route

| You want | Go to |
|---|---|
| JHF MBS 结构 | [[structured-finance/jhf-mbs-mechanics]] |
| 民间 RMBS 结构 | [[structured-finance/japan-rmbs-issuance-structure]] |
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| 评级方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| JHF 机构 | [[policy-finance/japan-housing-finance-agency]] |

## 1. 利差基准

| 分层 | JHF MBS | 民间 RMBS |
|---|---|---|
| Senior（AAA / 最高层级） | ~10-30bp vs JGB | ~50-100bp vs JGB |
| Mezz（A / BBB） | N/A（JHF 结构中实质上几乎全为 senior） | ~150-300bp vs JGB |
| 次级 / equity | N/A（由 JHF 留存） | 高个位数至双位数收益率 |

这些是来自公开市场评论的示意区间；具体交易相对于 JGB 曲线、提前还款预期和承销商配售情况定价。利差也会随 BoJ 政策环境变化，低利率、收益率曲线控制环境会压缩利差。

## 2. 利差差距的驱动因素

| 驱动因素 | JHF MBS | 民间 RMBS |
|---|---|---|
| 信用 | 政府支持的 senior；实质上与主权信用相关 | 次级分层 + OC + 准备金；民间信用 |
| 流动性 | 月度发行，投资者基础广，二级市场深 | 间歇发行，投资者基础较窄，二级市场较薄 |
| 发行人集中度 | 单一发行人（JHF） | 多个发行人，结构按交易而异 |
| 评级方法 | 被视为接近主权信用 | 被视为民间结构化信用 |
| 提前还款 | 保守、建模充分的 Flat 35 行为 | 按池而异，浮动利率或 jumbo |
| 投资者基础 | 寿险公司、地方银行、接近主权信用的买方 | 寿险公司、资产管理人、利差投资者 |

## 3. 政府支持利差成分

利差差距的大部分来自政府支持 senior class 与民间结构化 senior class 之间的信用质量差异。即使民间 RMBS senior 在结构化信用基础上被评为 AAA，JHF MBS 背后的隐含政府支持也会带来有意义的利差收窄溢价。

| 成分 | 贡献 |
|---|---|
| 政府支持 | 最大单一成分；反映主权信用关联 |
| 流动性溢价 | 重要；月度节奏 + 广泛参与使 JHF 收窄 |
| 结构复杂性 | 民间 RMBS 投资者要求分析结构的溢价 |
| 发行量效应 | 单一、定期 JHF 项目降低不确定性；民间交易带有特质风险 |

## 4. 提前还款行为差异

| 贷款类型 | 提前还款模式 |
|---|---|
| Flat 35 （JHF MBS） | 基础速度慢；奖金期附近飙升；利率显著下降时出现再融资浪潮 |
| 浮动利率 jumbo（民间 RMBS） | 基础速度更快；对再融资更敏感；与浮动利率曲线更贴近 |
| 混合（民间 RMBS） | 居中；取决于资产池构成 |

提前还款行为影响 MBS 的有效久期。买入并持有投资者（寿险公司）接受提前还款风险，因为利差在债券预期寿命内提供补偿；交易型投资者则采用反映提前还款差异的贴现率。

## 5. 机构投资者偏好

| 投资者 | JHF MBS | 民间 RMBS |
|---|---|---|
| 寿险公司（Asahi、Daido 等） | 核心 ALM 配置，大规模 | 选择性配置，寻求利差 |
| 大型银行 ALM 账簿（[[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]） | 相对 JGB 的收益增强 | 有限（与自身发起人存在集中） |
| 地方银行 | 标准日元收益资产 | 选择性 |
| 资产管理人（Asset Management One 等） | 债券基金成分 | 利差基金成分 |
| 公共信用投资者 | 直接配置 | 有限 |
| 外国投资者 | 选择性，JGB 替代品 | senior 选择性；mezz 罕见 |
| 养老金基金 | ALM 驱动配置 | 利差配置 |

寿险公司是两类产品最大的单一买方，但动机不同:JHF MBS 是 JGB 替代型长久期持仓；民间 RMBS 是利差配置。

## 6. 曲线动态

| 环境 | JHF MBS 利差 | 民间 RMBS 利差 |
|---|---|---|
| BoJ YCC（收益率曲线控制）时代 | 压缩；所有日元信用都偏紧 | 压缩；相对 JHF 利差较薄 |
| YCC 后正常化 | 随曲线波动扩大 | 扩大更多（流动性更弱） |
| Risk-off 事件 | 温和扩大（主权关联） | 更大幅扩大（民间信用风险） |
| 发行激增 | 影响温和（月度节奏） | 影响更大（间歇供给集中） |

在压力环境下，利差差距扩大，因为民间 RMBS 投资者要求更多补偿，而 JHF MBS 继续锚定在接近主权曲线的位置。

## 7. 对结构设计决策的影响

| 发起人 | 推理 |
|---|---|
| 发放 Flat 35 → 出售给 JHF | 通过 JHF 为长期固定利率账簿融资；资本释放；利差经济有利 |
| 发放浮动利率 jumbo → 作为民间 RMBS 证券化 | 多元化融资、资本释放、保留发起关系 |
| 发放浮动利率 jumbo → 留存在资产负债表 | 如果民间 RMBS 利差经济不足以覆盖证券化成本 |

JHF / 民间利差差距是银行发起人决定证券化还是持有的关键经济输入。

## 8. 评级机构处理

| 机构 | JHF MBS | 民间 RMBS |
|---|---|---|
| JCR | 接近主权信用的评级处理 | 标准结构化信用方法 |
| R&I | 接近主权信用的评级处理 | 标准结构化信用方法 |
| S&P / Moody's / Fitch | 评级时与主权相关 | 标准结构化信用方法 |

评级机构方法详情见 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]。

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[money-market/INDEX]]
- [[financial-regulators/boj-monetary-policy]]
- [[banking/INDEX]]

## Sources

- Japan Housing Finance Agency，IR 页面。
- JCR（Japan Credit Rating Agency），结构化金融方法。
- R&I（Rating and Investment Information），结构化金融方法。
- JSDA（Japan Securities Dealers Association）。
- Megabank IR（MUFG、SMFG、Mizuho FG）。

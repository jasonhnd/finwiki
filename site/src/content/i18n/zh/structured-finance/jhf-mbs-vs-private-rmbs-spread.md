---
source: structured-finance/jhf-mbs-vs-private-rmbs-spread
source_hash: 4b167c1b8dcbe9d7
lang: zh
status: machine
fidelity: ok
title: "JHF MBS 与私募 RMBS 利差"
translated_at: 2026-06-19T12:43:19.919Z
---

# JHF MBS 与私募 RMBS 利差

## TL;DR

JHF MBS 优先档相对 JGB 交易收窄——通常在 10-30bp 区间——反映出实质性的主权关联信用以及可预测的月度供给。私募 RMBS 优先档的交易利差明显更宽——通常相对 JGB 为 50-100bp——反映出缺乏政府支持以及依赖次级化 / 超额抵押作为信用增级。该差距反映了信用质量差异加上结构性 / 流动性因素，并塑造了各自的投资者基础：寿险公司与 ALM 驱动型买家锚定 JHF 一侧；追求利差的机构投资者主导私募 RMBS 需求。使用本页来理解驱动 [[structured-finance/INDEX]] 中结构设计决策的利差经济学。

## Wiki route

| 你想了解 | 前往 |
|---|---|
| JHF MBS 结构 | [[structured-finance/jhf-mbs-mechanics]] |
| 私募 RMBS 结构 | [[structured-finance/japan-rmbs-issuance-structure]] |
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| 评级方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| JHF 机构 | [[policy-finance/japan-housing-finance-agency]] |

## 1. 利差基准

| 档级 | JHF MBS | 私募 RMBS |
|---|---|---|
| 优先（AAA / 最高档）| 约 10-30bp 相对 JGB | 约 50-100bp 相对 JGB |
| 夹层（A / BBB）| N/A（JHF 结构中实际上全部为优先档）| 约 150-300bp 相对 JGB |
| 次级 / 权益 | N/A（由 JHF 自留）| 高双位数收益率 |

这些是来自公开市场评论的示意性区间；具体交易的定价相对于 JGB 曲线、提前还款预期以及承销商配售而定。利差也随 BoJ 政策环境而变动——低利率、收益率曲线控制的环境会压缩利差。

## 2. 利差差距的驱动因素

| 驱动因素 | JHF MBS | 私募 RMBS |
|---|---|---|
| 信用 | 政府支持的优先档；实质上与主权关联 | 次级化 + OC + 准备金；私募信用 |
| 流动性 | 月度发行、投资者基础广泛、二级市场深厚 | 间歇性、投资者基础较窄、二级市场较薄 |
| 发行人集中度 | 单一发行人（JHF）| 多个发行人、特定交易的结构 |
| 评级方法 | 视为准主权 | 视为私募结构化信用 |
| 提前还款 | 保守、建模充分的 Flat 35 行为 | 资产池特定、浮动利率或大额（jumbo）|
| 投资者基础 | 寿险公司、地方银行、准主权买家 | 寿险公司、资产管理公司、利差投资者 |

## 3. 政府支持利差成分

利差差距的大部分反映了政府支持的优先档与私募结构化优先档之间的信用质量差异。即使私募 RMBS 优先档在结构化信用基础上被评为 AAA，JHF MBS 背后隐含的政府支持仍带来可观的溢价收窄。

| 成分 | 贡献 |
|---|---|
| 政府支持 | 最大的单一成分；反映主权信用关联 |
| 流动性溢价 | 显著；月度节奏 + 广泛参与使 JHF 收窄 |
| 结构复杂性 | 私募 RMBS 投资者要求为分析结构而获得溢价 |
| 发行量效应 | 单一、规律的 JHF 项目降低不确定性；私募交易带有特异性风险 |

## 4. 提前还款行为差异

| 贷款类型 | 提前还款模式 |
|---|---|
| Flat 35 （JHF MBS）| 基础速率缓慢；接近奖金期时出现高峰；利率显著下降时出现再融资浪潮 |
| 浮动利率大额（私募 RMBS）| 基础速率较快；对再融资更敏感；更贴近浮动利率曲线 |
| 混合（私募 RMBS）| 居中；取决于资产池构成 |

提前还款行为影响 MBS 的有效久期。买入并持有的投资者（寿险公司）接受提前还款风险，因为利差在债券的预期存续期内提供补偿；交易导向的投资者会采用反映提前还款方差的折现率。

## 5. 机构投资者偏好

| 投资者 | JHF MBS | 私募 RMBS |
|---|---|---|
| 寿险公司（朝日、大同等）| 核心 ALM 配置，规模大 | 选择性配置，追求利差 |
| 大型银行 ALM 账户（[[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]）| 相对 JGB 的收益拾取 | 有限（与自身发起方存在集中度问题）|
| 地方银行 | 标准日元收益持仓 | 选择性 |
| 资产管理公司（Asset Management One 等）| 债券基金成分 | 利差基金成分 |
| 公共信用投资者 | 直接配置 | 有限 |
| 外国投资者 | 选择性、作为 JGB 替代 | 优先档选择性；夹层档罕见 |
| 养老基金 | ALM 驱动配置 | 利差配置 |

寿险公司是这两种产品的主导性单一买家，但其动机不同：JHF MBS 是作为 JGB 替代的长久期持仓；私募 RMBS 是利差配置。

## 6. 曲线动态

| 环境 | JHF MBS 利差 | 私募 RMBS 利差 |
|---|---|---|
| BoJ YCC（收益率曲线控制）时代 | 压缩；所有日元信用收窄 | 压缩；相对 JHF 利差较薄 |
| 后 YCC 正常化 | 随曲线波动而走宽 | 走宽更多（流动性更差）|
| 避险事件 | 温和走宽（与主权关联）| 较大走宽（私募信用风险）|
| 发行激增 | 影响温和（月度节奏）| 影响较大（间歇性供给集中）|

在压力环境下，利差差距走宽，因为私募 RMBS 投资者要求更多补偿，而 JHF MBS 继续锚定于接近主权曲线的水平。

## 7. 对结构设计决策的影响

| 发起方 | 理由 |
|---|---|
| 发起 Flat 35  → 出售给 JHF | 长期限固定利率贷款账户经由 JHF 融资；资本释放；利差经济学有利 |
| 发起浮动利率大额 → 证券化为私募 RMBS | 使融资多元化、资本释放、保留发起关系 |
| 发起浮动利率大额 → 留在资产负债表上 | 若私募 RMBS 利差经济学不足以证明证券化成本的合理性 |

JHF / 私募利差差距是银行发起方"证券化 vs 持有"决策的关键经济输入。

## 8. 评级机构处理

| 机构 | JHF MBS | 私募 RMBS |
|---|---|---|
| JCR | 准主权评级处理 | 标准结构化信用方法 |
| R&I | 准主权评级处理 | 标准结构化信用方法 |
| S&P / Moody's / Fitch | 评级时与主权关联 | 标准结构化信用方法 |

评级机构方法细节见 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]。

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

- Japan Housing Finance Agency, IR pages.
- JCR (Japan Credit Rating Agency), structured-finance methodology.
- R&I (Rating and Investment Information), structured-finance methodology.
- JSDA (Japan Securities Dealers Association).
- Megabank IR (MUFG, SMFG, Mizuho FG).

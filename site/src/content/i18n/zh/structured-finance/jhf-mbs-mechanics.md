---
source: structured-finance/jhf-mbs-mechanics
source_hash: 09617454035c6952
lang: zh
status: machine
fidelity: ok
title: "JHF MBS 机制（日本住宅金融支援机构）"
translated_at: 2026-06-19T13:13:22.641Z
---

# JHF MBS 机制（日本住宅金融支援机构）

## TL;DR

日本住宅金融支援机构（JHF）运营一个月度 MBS 发行项目，以民间金融机构发放的 Flat 35  固定利率住宅贷款为支持资产。JHF 通过其证券化支援业务买入贷款，将其打包成"MBS 信托"结构，并发行 MBS，其中优先档（通常占发行额的大部分）带有 JHF 的政府支持信用。相对 JGB 的利差很窄 — 优先档通常为 10-30 个基点 — 反映出实质性的主权关联信用。这是日本最大的日元计价结构化票据引擎。本页用于了解 JHF MBS 机制；机构本身请参阅 [[policy-finance/japan-housing-finance-agency]]，利差经济学请参阅 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]。

## Wiki 路线

| 你想了解 | 前往 |
|---|---|
| JHF 机构页面 | [[policy-finance/japan-housing-finance-agency]] |
| JHF 对民间利差 | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| 民间 RMBS 比较 | [[structured-finance/japan-rmbs-issuance-structure]] |
| SPV 载体背景 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 信托载体背景 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| 领域索引 | [[structured-finance/INDEX]] |

## 1. Flat 35  发放

| 要素 | 说明 |
|---|---|
| 贷款产品 | Flat 35  — 长期限固定利率住宅贷款（最长 35  年） |
| 发放 | 民间金融机构（megabank、地方银行、抵押贷款银行）按 JHF 的合格标准发放 |
| 买方 | JHF 在发放后从发放方买入贷款（证券化支援业务） |
| 风险转移 | 信用风险转移至 JHF（或 MBS 信托）；发放方保留服务职能 |
| 借款人体验 | 借款人的关系对象是发放方；贷款条件在整个期限内固定 |

Flat 35  填补了民间住宅贷款融资中的空白：日本大多数民间住宅贷款是浮动利率或短期限固定利率。Flat 35  在 JHF 证券化引擎的支持下提供了长期限固定利率的选择。

## 2. 月度 MBS 发行节奏

| 节奏方面 | 设定 |
|---|---|
| 频率 | 月度 |
| 每次发行 | 以前一期间买入的住宅贷款为支持的新 MBS 系列 |
| 系列命名 | 连续编号（例如"第 XXX 期"） |
| 时间表 | 可预测；提前公布；支持做市 |

月度节奏使 JHF MBS 成为日元结构化票据中最有规律的发行项目，为寿险公司、地方银行和资产管理人提供可靠的供给。这种规律性支撑了紧凑的定价 — 投资者无需追逐零星的供给。

## 3. MBS 信托结构

| 组成部分 | 角色 |
|---|---|
| 信托 | MBS 信托持有住宅贷款资产池。 |
| 信托受益人 | MBS 投资者持有受益权。 |
| 优先档 | 通常为发行额的 90-99%；由 JHF 担保支持。 |
| 次级档 | JHF 或其他方保留；吸收首次损失。 |
| 服务方 | 发放方保留服务职能；将回收款移交给信托。 |
| 受托人 | 信托银行担任受托人。 |

"MBS 信托"这一术语为 JHF 所特有，但其结构等同于优先-次级型 MBS 结构，其中优先档由 JHF 的政府支持信用包裹。

## 4. 政府支持的优先档

- JHF MBS 的优先档由 JHF 的担保支持，或者通过 MBS 结构因 JHF 作为发行主体的角色而实质上得到支撑。
- JHF 本身是 MLIT 监管下的独立行政法人 — 参见 [[policy-finance/japan-housing-finance-agency]]。
- 政府隐性支持：虽然 JHF 不是直接的主权担保人，但市场参与者将 JHF MBS 定价为实质性的主权关联信用。
- 评级：优先档通常获得 JCR / R&I 的最高评级档次，反映 JHF / 主权的关联。

## 5. 次级部分

| 方面 | 设定 |
|---|---|
| 规模 | 通常为发行额的 1-10% |
| 持有方 | JHF 保留（首损自留利益） |
| 功能 | 在触及优先档之前吸收信用损失 |
| 效果 | 优先档实质上与典型的违约波动隔离 |

JHF 在自己的 MBS 中持有首损次级权益 — 这是一种"自留利益（skin in the game）"形式，让投资者相信优先债券与典型的信用波动隔离。

## 6. 提前偿还行为

| 驱动因素 | 效果 |
|---|---|
| 再融资浪潮 | Flat 35  借款人可能再融资至利率更低的 Flat 35  或民间浮动利率住宅贷款。 |
| 搬迁 / 出售 | 标准提前偿还。 |
| 奖金期提前偿还 | 日本特有：领薪借款人常在年度奖金时进行部分提前偿还。 |
| 利率敏感性 | 长期限固定利率借款人在利率大幅下降时再融资。 |

日本的提前偿还模型按历史上的 Flat 35  行为校准 — 通常比美国常规 MBS 慢，但伴有年度奖金期的提前偿还高峰。JHF 公布评级机构和投资者用于建模的提前偿还数据。

## 7. 投资者群体

| 投资者类别 | 原因 |
|---|---|
| 寿险公司 | 长久期、主权关联信用契合 ALM。 |
| 地方银行 | 以实质主权信用获得 JGB 加成收益。 |
| 资产管理人 | 债券基金的成分。 |
| 公共信用投资者 | 直接配置于住房政策主题。 |
| 外国投资者 | 选择性配置，尤其当 JGB 曲线平坦时。 |

投资者群体与 JGB 投资者类似，略带收益增厚倾向 — JHF MBS 被视为带有适度利差的主权关联工具。

## 8. 比较摘要

| 维度 | JHF MBS | 民间 RMBS |
|---|---|---|
| 基础贷款 | Flat 35 （长期限固定） | 浮动利率或混合大额贷款 |
| 发放方 | 民间银行 → JHF 买入 | 民间银行（megabank） |
| 信用补充 | JHF / 政府支持的优先档 | 次级 + OC + 准备金 |
| 发行节奏 | 月度 | 间歇性 |
| 优先档评级 | 最高档次（主权关联） | 通过结构化达到 AAA-AA |
| 相对 JGB 利差 | ~10-30 个基点 | ~50-100 个基点 |

与 [[structured-finance/japan-rmbs-issuance-structure]] 和 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] 比较。

## 9. 为何重要

- JHF MBS 是最大的日元结构化票据引擎，实质上设定了日元 RMBS 定价的基准。
- 它是 [[structured-finance/INDEX]] 的公共信用锚 — 是民间住宅贷款发放与资本市场融资之间的结构性桥梁。
- 它是使长期限固定利率住宅贷款在日本得以可行的关键；没有 JHF 的证券化支援，民间银行无法持有与长久期资金相匹配的大规模固定利率住宅贷款账册。
- 它是日本寿险公司的核心 ALM 资产，也是许多机构账户的 JGB 替代品。

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[financial-regulators/jfc]]
- [[real-estate-finance/INDEX]]

## 来源

- 日本住宅金融支援机构，"私たちについて"。
- 日本住宅金融支援机构，"組織の概要"。
- JCR（日本格付研究所），MBS 标准。
- R&I（格付投资信息中心），MBS 方法论。
- MLIT，JHF 监管页面。

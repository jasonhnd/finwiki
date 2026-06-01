---
source: structured-finance/spv-tk-gk-vehicle-japan-tax
source_hash: 66c84c64967de0e8
lang: zh
status: machine
fidelity: ok
title: "SPV TK / GK / TMK / SPC 工具选择（日本税务）"
translated_at: 2026-06-01T04:15:40.126Z
---
# SPV TK / GK / TMK / SPC 工具选择（日本税务）

## TL;DR

日本证券化交易使用四种主要 SPV 结构之一：TK（匿名組合，匿名合伙）、GK（合同会社，LLC）、TMK（特定目的会社，资产证券化法下的特定目的公司）或通用 SPC。最常见的私募结构是“TK-GK”——GK 作为资产持有实体，TK 匿名合伙叠加层向投资者提供税收穿透。TMK 在交易需要资产证券化法制度下正式上市债券发行时更受偏好。工具选择由税收穿透、表外标准、公募 vs 私募、资产类别和发起机构策略驱动。使用本页作为 SPV 工具选择树；并与 [[structured-finance/japan-trust-beneficial-interest-vs-spv]] 搭配阅读，以比较信托 vs SPV。

## Wiki 路径

| 你想了解 | 前往 |
|---|---|
| 信托 vs SPV 比较 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| RMBS 交易结构 | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS 交易结构 | [[structured-finance/japan-cmbs-issuance-structure]] |
| JHF MBS 结构 | [[structured-finance/jhf-mbs-mechanics]] |
| 领域索引 | [[structured-finance/INDEX]] |

## 1. 工具类型 — 概览

| 工具 | 全称 | 法律制度 | 典型用途 |
|---|---|---|---|
| TK | 匿名組合（匿名合伙） | 商法 | 向投资者提供税收穿透的叠加结构 |
| GK | 合同会社（LLC） | 公司法 | TK-GK 私募交易中的资产持有实体 |
| TMK | 特定目的会社（特定目的公司） | Act on Securitization of Assets（資産流動化法） | 资产证券化法制度下的上市债券发行 |
| SPC（通用） | 特定目的会社 / 株式会社 / 等 | 公司法 | 包括非资产证券化法 SPC 在内的各类交易结构 |

命名容易混淆，因为缩写“SPC”既用于资产证券化法下的 TMK，也用于公司法下的通用特殊目的公司。准确地说，资产证券化法下的特定形式是 TMK；“SPC”是更广义术语。

## 2. TK-GK 方案 — 主力结构

| 层级 | 角色 |
|---|---|
| GK（资产持有人） | 持有证券化资产；按公司处理；破产隔离 |
| TK（叠加层） | 匿名合伙投资者向 GK 出资；获得穿透分配 |
| 发起机构 | 向 GK 出售资产；可留存 TK 权益作为风险留存 |
| 投资者 | 认购 GK 的 TK 权益；获得穿透收益 |
| 受托人 / 服务机构 | 管理资产现金流 |

TK-GK 方案结合了：
- GK 作为破产隔离资产持有人
- TK 作为税收穿透工具（向投资者的 TK 分配可在 GK 层面扣除，从而实现有效的单层征税）

这是日本占主导地位的私募结构。

## 3. TMK — 资产证券化法下的特定目的公司

| 要素 | 说明 |
|---|---|
| 法律依据 | Act on Securitization of Assets（資産流動化法） |
| 设立 | 需要向监管机构提交资产流动化计划 |
| 发行 | 可以公开发行特定债券、特定短期债券或优先出资 |
| 税务 | 若满足特定条件（分配要求）则可税收穿透 |
| 使用案例 | 公开上市债券、规模较大或更复杂的交易、房地产证券化 |

在以下情况下，TMK 是更受偏好的工具：
- 交易需要正式公开上市债券发行
- 资产是房地产（在特定条件下，TMK 具有有利的房地产税务处理）
- 交易受益于资产证券化法监管基础设施

## 4. 税收穿透机制

| 工具 | 税务机制 |
|---|---|
| TK-GK | TK 分配可在 GK 层面扣除；投资者只被征税一次 |
| TMK | 若满足分配要求（通常为税前收入的 90%+），TMK 可扣除向投资者的分配 |
| 通用 SPC | 除非有特别选择或特定处理，否则两层征税 |
| 信托 | 信托受益权具有税务透明性（穿透到底层资产）— 见 [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |

税收穿透的经济意义是避免双重征税：SPV 层面的资产应产生在投资者层面纳税的现金流，而不是在 SPV 和投资者两个层面都纳税。

## 5. 表外标准

对于发起机构的表外处理，SPV 必须实现：

| 标准 | 测试 |
|---|---|
| 真实出售 | 资产转让在法律上完成；不被重新定性为融资 |
| 破产隔离 | SPV 不能并入发起机构的破产财产 |
| 风险转移 | 实质性信用风险转移给第三方投资者 |
| 控制权转移 | 发起机构不保留对资产的有效控制 |
| 会计终止确认 | 符合资产终止确认会计准则（JGAAP / IFRS） |

发起机构的风险留存（通常为 5%）若结构安排得当，与表外处理相一致。留存的目的在于 skin-in-the-game / 监管要求，而不是保留控制权。

## 6. 资产证券化法 SPC vs 一般 SPC

| 维度 | 资产证券化法 TMK | 一般 SPC（株式会社 / 等） |
|---|---|---|
| 监管制度 | 资产证券化法；FSA / MOF 监管 | 公司法 |
| 备案 | 需要资产流动化计划 | SPV 设立无需此项 |
| 税收穿透 | 若满足分配要求则可用 | 通常两层征税，除非有特定结构 |
| 债券发行 | 资产证券化法下的特定债券 | FIEA 下的公司债券 |
| 公开上市 | 可能 | 可能但不常见 |
| 房地产处理 | 对特定房地产交易有利 | 标准公司处理 |

TMK 路径监管负担更重，但解锁了资产证券化法制度下的公开上市债券发行；一般 SPC 更轻，但无法获得资产证券化法收益。

## 7. 公募 vs 私募

| 发行方式 | 典型工具 | 备注 |
|---|---|---|
| 公开上市 | TMK | 资产证券化法特定债券；在 TSE Bond Market 或其他市场上市 |
| 私募 | TK-GK | 私募 RMBS、ABS、房地产交易最常见 |
| 信托受益权私募 | 信托 + 私募 | 见 [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |

多数日本证券化交易为私募；公开上市结构化债券是少数。公开路径保留给 TMK 上市债券能力能增加价值的最大型交易。

## 8. 工具选择树

选择取决于：

| 因素 | 倾向 |
|---|---|
| 需要公开上市 | TMK |
| 资产是房地产 | TMK（税务有利）或信托 |
| 私募、复杂分层 | TK-GK |
| 简单、单资产、房地产 | TMK 或信托 |
| 希望让发起机构保持接近（披露有限） | TK-GK 私募 |
| 带银行受托人的住房贷款证券化 | 信托受益权 |
| 标准汽车 / 消费 ABS | TK-GK |

## 9. 实务示例

| 交易类型 | 典型工具 |
|---|---|
| 汽车贷款 ABS | TK-GK（[[structured-finance/auto-loan-abs-japan-toyota-honda]]） |
| 信用卡应收账款 ABS | TK-GK 或信托（[[structured-finance/consumer-loan-abs-japan-card-issuer]]） |
| 私募 RMBS | 通常为信托受益权（[[structured-finance/japan-rmbs-issuance-structure]]） |
| CMBS | TMK（单一借款人）或 TK-GK（[[structured-finance/japan-cmbs-issuance-structure]]） |
| JHF MBS | “MBS Trust” — 信托受益权变体（[[structured-finance/jhf-mbs-mechanics]]） |
| 房地产单一资产 | TMK |

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]
- [[finance/INDEX]]

## 来源

- JSDA（Japan Securities Dealers Association），证券化产品指南。
- FSA，资产证券化法监管页面。
- JCR（Japan Credit Rating Agency），结构化金融标准。
- R&I（Rating and Investment Information），结构化金融方法论。

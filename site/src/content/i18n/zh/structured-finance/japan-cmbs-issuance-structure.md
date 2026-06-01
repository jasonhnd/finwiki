---
source: structured-finance/japan-cmbs-issuance-structure
source_hash: 7053d17b450c25e4
lang: zh
status: machine
fidelity: ok
title: "日本 CMBS 发行结构"
translated_at: 2026-06-01T04:15:40.159Z
---

# 日本 CMBS 发行结构

## TL;DR

日本 CMBS 分为单一借款人（单一资产或小资产池、单一发起人）结构和管道（多个不相关借款人、较大资产池）结构。市场在 2006-2007, 达到峰值，随后在 2008-2010 全球金融危机中因大量到期滚续违约而遭受重创，并在 2010年代基本长期停滞。2020年代以来，受物流仓库和办公楼单一借款人交易带动，市场有所复苏，但发行量仍仅为 2008 前峰值的一小部分。用本页理解 CMBS 结构机制；结合 [[real-estate-finance/INDEX]] 阅读底层房地产现金流，结合 [[structured-finance/japan-abs-market-overview]] 阅读整体市场背景。

## Wiki route

| 想了解 | 跳转 |
|---|---|
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| RMBS 对比 | [[structured-finance/japan-rmbs-issuance-structure]] |
| SPV 载体 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 评级标准 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| 房地产现金流侧 | [[real-estate-finance/INDEX]] |

## 1. 结构类型

| 类型 | 描述 |
|---|---|
| 单一借款人 | 一个发起人、一处物业或小资产池、一组抵押贷款。在 2020年代复苏中常见。 |
| 管道 | 多个不相关借款人、较大资产池、分散化收益。2008, 前常见，如今少见。 |
| 单一资产 / 单一借款人 (SASB) | 最集中的形式：一处大型物业、一笔贷款、分层。 |
| 多发起人管道 | 多个发起机构将贷款放入共同资产池。2008后在日本基本消失。 |

如今日本 CMBS 发行压倒性地以单一借款人、单一资产或小资产池为主。管道模型尚未实质性回归。

## 2. 分层

| 分层 | 典型买方 |
|---|---|
| 优先级（AAA / AA 目标） | 寿险公司、资产管理公司、大型银行 ALM 账簿 |
| 夹层（A / BBB） | 专业投资者、对冲基金 |
| B-piece（BB / B / NR） | 专业 B-piece 买方（见下文） |
| 权益 / 首损 | 发起人留存，有时为专业投资者 |

分层通过次级化加利息现金流瀑布实现。

## 3. B-piece 买方市场

- B-piece（控制性次级类别）买方曾是 2008 前美国式 CMBS 的关键部分，但在日本从未深入发展。
- 在日本，发起人或专业房地产投资者往往直接保留 B-piece，而不是出售给专门的 B-piece 买方市场。
- 这是日本 CMBS 管道交易较少的一个结构性原因 — 没有活跃的 B-piece 买方基础，管道经济性很难成立。

## 4. 回收场景

| 场景 | 发生事项 |
|---|---|
| 正常表现 | 现金流服务各分层；优先级先获偿；权益收取剩余。 |
| 表现不佳 | 触发机制可能将超额现金转向优先级；权益 / 夹层现金流被削减。 |
| 到期违约 | 贷款未能在约定到期日再融资；特别服务商接手。 |
| 止赎 / 强制出售 | 物业出售；回收款按分层优先顺序分配。 |
| 修改 / 展期 | 贷款期限延长；分层现金流发生变化。 |

日本的回收受益于相对透明的房地产评估制度和成熟的房地产经纪市场，但由于商业租户保护和合同限制，处置可能较慢。

## 5. 2008 后发行下降

| 时期 | 模式 |
|---|---|
| 2003-2006 | 快速增长；管道交易常见；结构激进。 |
| 2006-2007 | 发行峰值；跨境投资者参与显著。 |
| 2008-2010 | 全球金融危机；再融资冻结；许多 5年期交易在到期滚续时违约。 |
| 2008-2012 | 评级下调；损失实现；债券持有人重组。 |
| 2012-2018 | 公开交易市场基本停滞。 |
| 2018-2020 | 选择性单一借款人交易复苏。 |
| 2020-present | 物流仓库热潮推动单一借款人 CMBS；办公和酒店交易选择性出现。 |

2008-2010 违约潮给日本 CMBS 留下深刻印记 — 投资者基础、结构保守性和评级机构方法均反映了这一经验。

## 6. 2020年代市场复苏

| 驱动因素 | 影响 |
|---|---|
| 物流仓库热潮 | 电子商务需求 → 大型、单租户、长期租约仓库 → 适合单一借款人 CMBS。 |
| 外国投资者重新进入 | 跨境资本重返日本房地产；CMBS 作为直接 REIT 投资的替代。 |
| 负利率 / 低收益环境（2024前） | 追求收益的投资者愿意承担结构化房地产风险。 |
| 物流 J-REIT 替代 | 对某些组合而言，发起人偏好 CMBS 而非 J-REIT IPO。 |

2020年代的复苏是真实的，但相比 2008 前峰值仍然有限。管道交易仍然缺席；单一借款人或单一资产交易占主导。

## 7. 载体选择

日本 CMBS 交易通常使用资产证券化法下的 TMK（特定目的会社）或 TK-GK SPV 结构。载体选择见 [[structured-finance/spv-tk-gk-vehicle-japan-tax]]。TMK 更适合公开上市债券发行；TK-GK 更常用于私募。

## 8. 底层物业风险

CMBS 风险主要取决于底层物业现金流。办公、零售、酒店、物流和住宅投资物业都有不同风险画像。底层房地产金融路径见 [[real-estate-finance/INDEX]]。

J-REIT 债务重叠：J-REIT（发起人谱系见 [[JapanFG/INDEX]]）通常以其组合物业作为担保借款，但这些贷款不会证券化为 CMBS — 它们是直接银行贷款或 J-REIT 发行的无担保债券。

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]
- [[finance/japan-acquisition-finance]]

## Sources

- JCR (Japan Credit Rating Agency), CMBS structured-finance criteria.
- R&I (Rating and Investment Information), CMBS methodology.
- JSDA (Japan Securities Dealers Association).
- ASF Japan (Asset Securitization Forum Japan).
- Megabank IR (MUFG, SMFG, Mizuho FG).

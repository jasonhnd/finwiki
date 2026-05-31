---
source: finance/carve-out-divestiture-japan
source_hash: 74285118d0c326b2
lang: zh
status: machine
fidelity: ok
title: "日本的剥离与资产出售流程"
translated_at: 2026-05-31T06:16:15.667Z
---

# 日本的剥离与资产出售流程

## 概述

日本的剥离将业务单元从母公司分离，转给新所有者（战略出售），或创设新上市实体（IPO 分拆），或分配给股东（股票分配 / 分立）。**资产交易 vs 股权交易 vs 公司分割（会社分割）vs 股票分配**之间的结构性选择，决定税务结果、同意触发条件、[[finance/jftc-merger-control-process|JFTC merger-control]]负担，以及与 [[finance/japan-tender-offer-process|TOB route]] 的关系。

本页位于 [[finance/INDEX|finance]] 之下，与 [[finance/cross-border-m-a-japan|cross-border M&A]] 和 [[finance/japan-leveraged-buyout-economics|LBO economics]] 并列。建议与 [[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]]、[[finance/japan-acquisition-finance|acquisition finance]]、[[finance/japan-tender-offer-process|TOB process]] 及 [[INDEX|FinWiki index]] 对照阅读。

## 结构选择矩阵

| 结构 | 机制 | 印花税 / 税 | 同意触发条件 | 适用场景 |
|---|---|---|---|---|
| **资产交易**（事业让渡） | 出售特定资产 + 合约 | 逐项转让税、不动产登记税；卖方资本利得；买方账面提升 | 每项重要合约对手方同意；转让时需员工同意 | 择优取资产，留下历史负债 |
| **股权交易**（株式让渡） | 出售子公司股份 | 卖方资本利得；买方承继计税基础 | 有限（仅变更控制条款） | 整体实体转让，含负债 |
| **公司分割**（会社分割）— 吸收分割 / 新设分割 | 依公司法第 757-816 条进行法定分割 | 符合条件的「适格」分割可递延税务；不符合则须纳税 | 债权人异议程序；依《劳动合同继承法》继承员工 | 出售前重组；依法定继承实现干净分离 |
| **股票分配 / 分拆**（株式分配） | 母公司将子公司股份分配给自身股东 | 2017 年税制改革：依法人税法第 2-12-15-2 条，适格分拆路径可税务递延 | 如属重大事项须经股东大会；1 类股东批准 | 上市母公司分配上市子公司；机构结构调整（东芝 / 索尼金融案例） |
| **IPO 剥离** | 子公司单独上市；母公司保留多数或少数股权 | 母公司保留账面；部分稀释后产生收益 | TSE 上市流程；承销商尽职调查 | 在保留运营控制权的同时实现货币化 |

## 资产交易 vs 股权交易

| 维度 | 资产交易 | 股权交易 |
|---|---|---|
| 负债转移 | 仅限特定指定；历史负债留存于卖方 | 实体内所有负债均转移 |
| 合约转让 | 每份合约须征得对手方同意 | 仅涉及变更控制条款 |
| 税务 — 卖方 | 逐项资产资本利得；毛额计算 | 股份资本利得（通常更为优惠） |
| 税务 — 买方 | 按公允价值账面提升 → 折旧抵税 | 计税基础 = 购买价格；除非采用合并纳税，否则无资产账面提升 |
| 不动产转让税 | 触发 | 不触发 |
| 速度 | 较慢（逐合约） | 较快（单一股份转让） |
| 尽调范围 | 较窄，针对特定 | 全面实体尽调，含隐藏负债 |
| 员工转移 | 须个人同意 | 自动延续 |

## 股票分配 vs 战略出售

| 路径 | 股票分配 | 战略出售 |
|---|---|---|
| 买方 | 现有母公司股东 | 战略投资者 / PE 收购方 |
| 母公司所得现金 | 无（纯分配） | 全额购买价款 |
| 母公司税务 | 符合条件的分拆可递延 | 需就收益纳税 |
| 所需时间 | 6-12 个月 | 6-18 个月（含 [[finance/jftc-merger-control-process|JFTC clearance]]） |
| 控制权结果 | 子公司成为独立上市实体 | 子公司并入买方集团 |
| 战略逻辑 | 消除多元化折价 | 资本循环利用、聚焦主业、偿还债务 |

## TSA — 过渡服务协议

从多业务母公司剥离时，几乎无一例外需要 TSA — 母公司在过渡期内（通常 12-36 个月）向被剥离业务提供共享服务：

| 服务 | TSA 通常涵盖范围 |
|---|---|
| IT / ERP | SAP / Oracle 实例迁移；数据分离、定制代码剥离 |
| HR / 薪资 | 子公司具备自主能力前持续处理薪资 |
| 财务 / 现金管理 | 内部资金池拆分；子公司新银行安排 |
| 采购 | 共享供应商合约；子公司重新谈判前的过渡性采购 |
| 法务 / 合规 | 共享监管牌照（尤其是金融服务行业，依 [[JapanFG/legal-financial-licenses/securities-license-stack|securities-license stack]]） |
| 不动产 | 共享办公室的持续使用及成本分摊 |

TSA 定价通常为**成本加成 5-10%**，并设阶梯式提价以激励尽快退出。反向 TSA 则是子公司就保留义务向母公司提供服务。

## 税务考量

日本符合条件（「适格」）的重组规则（法人税法第 2-12条）允许在以下情形递延税务：

- **同一集团内重组** — 重组前后均保持 100% 持股
- **共同事业重组** — 实质业务测试（> 80% 劳动力持续、业务持续、股权交换）
- **2017 分拆路径** — 不经事先资产重组，直接向母公司股东分配股票

不符合条件的分割将**在母公司层面触发按市场价格计算的收益**，并产生印花税效率损失。针对新型剥离结构，国税厅预先裁定的申请日益增多 — 跨境剥离另参见 [[finance/multi-jurisdiction-identity-tax-leverage|tax-jurisdiction comparison]]。

## 剥离工作流程

1. **边界定义** — 确定转移的资产、合约、员工、知识产权、不动产、监管牌照
2. **独立剥离财务报表** — 剔除母公司分摊项后，重述子公司财务
3. **D-1 就绪** — TSA 范围、IT 切换计划、财务安排、银行账户开立
4. **监管** — 若营业额超过阈值须通知 [[finance/jftc-merger-control-process|JFTC]]；行业监管机构（银行、电信）；若跨境须处理外国直接投资
5. **税务架构** — 争取适格地位；就新型事项取得国税厅预先裁定
6. **员工转移** — 公司分割须遵从《劳动合同继承法》；资产交易须取得个人同意
7. **客户 / 供应商同意** — 逐一进行变更控制沟通

## 近期案例（2023-2026）

| 年份 | 母公司 | 剥离业务 | 路径 | 备注 |
|---|---|---|---|---|
| 2023 | 东芝 | 私有化后多项重组 | 战略出售 + 分拆混合 | 完成私有化后的优化 |
| 2024 | Sony FG | 索尼金融集团分拆（再上市 2025） | 股票分配分拆 | 2017年税制改革分拆机制；适格 |
| 2024 | 日立 | Astemo（汽车零部件） | 出售给 PE | 持续的投资组合精简 |
| 2025 | 各类 TSA Prime | 非核心集团资产出售 | 混合 | TSE PBR<1 改革压力驱动剥离 |

## 研究检查清单

1. 从 TDnet / EDINET 档案中查取公告、结构（资产 / 股权 / 分割 / 分拆）及适格选择。
2. 梳理 [[finance/jftc-merger-control-process|JFTC]] 通知时点与交易完成条件。
3. 识别新闻稿中的 TSA 范围及终止触发条件。
4. 核查是否需要 [[finance/japan-tender-offer-process|TOB]]（若上市子公司股份超过阈值转手）。
5. 与 [[finance/japan-listed-financial-groups-investable-universe|listed FG universe]] 交叉核对，评估对母公司 / 子公司估值的影响。

## Related

- [[finance/INDEX]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/jftc-merger-control-process]]
- [[finance/japan-takeover-defense-poison-pill]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## Sources

- METI: M&A guidelines and Fair M&A Guidelines publication page.
- METI: 2023  Carve-out / Group Management Guidelines press release.
- NTA: Corporation Tax Act 適格組織再編 (qualified reorganization) rules.
- JFTC: notification thresholds for asset / company-split transactions.
- FSA: FIEA tender-offer interaction when listed-sub shares are transferred.

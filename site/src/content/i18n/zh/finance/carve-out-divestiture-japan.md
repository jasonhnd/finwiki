---
source: finance/carve-out-divestiture-japan
source_hash: 99c94a06e5640d91
lang: zh
status: machine
fidelity: ok
title: "日本的剥离与资产处置流程"
translated_at: 2026-06-18T23:33:48.375Z
---

# 日本的剥离与资产处置流程

## 概述

日本式剥离将一个业务单元从母公司中分离出来，并将其导向新所有者（交易出售）、新上市主体（IPO 分拆），或受分配的股东（股票分配／分立）。**资产交易 对 股权交易 对 公司分割（会社分割） 对 股票分配**这一机制上的选择，决定了税务结果、同意触发条件、[[finance/jftc-merger-control-process|JFTC merger-control]] 负担以及与 [[finance/japan-tender-offer-process|TOB route]] 的相互作用。

本页归属于 [[finance/INDEX|finance]]，与 [[finance/cross-border-m-a-japan|cross-border M&A]] 和 [[finance/japan-leveraged-buyout-economics|LBO economics]] 并列。请将其与 [[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]]、[[finance/japan-acquisition-finance|acquisition finance]]、[[finance/japan-tender-offer-process|TOB process]] 以及 [[INDEX|FinWiki index]] 对照阅读。

## 结构决策矩阵

| 结构 | 机制 | 印花／税 | 同意触发条件 | 适用情形 |
|---|---|---|---|---|
| **资产交易**（事業譲渡） | 出售既定的资产 + 合同 | 逐项资产的转让税、不动产登记免许税；卖方产生资本利得；买方账面增值 | 各重大合同对手方的同意；转移所涉员工的同意 | 挑选资产，把遗留负债留在身后 |
| **股权交易**（株式譲渡） | 出售子公司的股份 | 卖方产生资本利得；买方承继计税基础 | 有限（仅控制权变更条款） | 干净的主体转移，含负债 |
| **公司分割**（会社分割）— 吸收分割型／新设分割型 | 依据公司法第 757-816  条的法定分割 | 税务合格（「適格」）分割可递延课税；非合格则应税 | 债权人异议程序；依据劳动合同承继法的员工承继 | 出售前重组；带法定承继的干净分离 |
| **股票分配／分拆**（株式分配） | 母公司将子公司股份分配给其股东 | 2017  改革：依据法人税法第 2-12-15-2  条的税务合格分拆路径 | 若重大则需股东大会；种类 1  股东批准 | 上市母公司分配一家上市子公司；机构性重塑（东芝／索尼金融案例） |
| **IPO 剥离** | 子公司单独上市；母公司保留多数或少数股权 | 母公司保留账面价值；部分稀释产生收益 | 东证上市流程；承销商尽职调查 | 在保持运营控制的同时变现 |

## 资产交易 对 股权交易

| 维度 | 资产交易 | 股权交易 |
|---|---|---|
| 负债转移 | 仅限于指定的；遗留部分留在卖方 | 主体内全部负债均转移 |
| 合同转让 | 每份合同均需对手方同意 | 仅控制权变更条款 |
| 税 — 卖方 | 每项资产的资本利得；轧总 | 股份的资本利得（通常更为有利） |
| 税 — 买方 | 账面增值至公允市场价值 → 折旧屏蔽 | 计税基础 = 购买价；除非采用合并纳税处理，否则无资产计税基础提升 |
| 不动产转让税 | 触发 | 规避 |
| 速度 | 较慢（逐份合同） | 较快（单笔股份转让） |
| 尽调范围 | 较窄、特定 | 含隐性负债的整体主体尽调 |
| 员工转移 | 逐一同意 | 自动延续 |

## 股票分配 对 交易出售

| 路径 | 股票分配 | 交易出售 |
|---|---|---|
| 买方 | 现有母公司股东 | 战略／PE 收购方 |
| 给母公司的现金 | 无（纯粹分配） | 全额购买价 |
| 给母公司的税 | 若属合格分拆则递延 | 应税收益 |
| 速度 | 6-12  个月 | 含 [[finance/jftc-merger-control-process|JFTC clearance]] 在内 6-18  个月 |
| 控制权结果 | 子公司成为独立上市主体 | 子公司进入买方集团 |
| 战略逻辑 | 化解集团折价 | 资本循环、聚焦、偿债 |

## TSA — 过渡服务协议

来自多产品母公司的剥离几乎总是需要 TSA——母公司在过渡期（通常为 12-36  个月）内向被处置业务提供共享服务：

| 服务 | 典型 TSA 范围 |
|---|---|
| IT／ERP | SAP／Oracle 实例迁移；数据隔离、定制代码剥离 |
| 人力／薪酬 | 在子公司建立能力之前持续处理薪酬 |
| 资金／现金管理 | 解除集团内现金池；在子公司建立新的银行安排 |
| 采购 | 共享供应商合同；在子公司重新谈判之前的过桥采购 |
| 法务／合规 | 共享监管许可（尤其是 [[financial-licenses/securities-license-stack|securities-license stack]] 之下的金融服务） |
| 不动产 | 带成本分摊的共享办公占用的持续 |

TSA 定价通常为 **成本加成 5-10%**，并设有阶梯式上调以激励退出。反向 TSA 则将服务从子公司回流至母公司，以履行保留的义务。

## 税务考量

日本的税务合格（「適格」）组织重组规则（法人税法第 2-12 条）在以下情形允许递延：

- **同一集团内重组** — 前后均维持 100% 持有
- **共同事业重组** — 实质性事业测试（劳动力的 80% 以上持续、事业持续、股权交换）
- **2017  分拆路径** — 无需事先资产重构，直接向母公司股东进行股票分配

非合格分割会在 **母公司层面触发按市值计价的收益** 以及印花税上的低效。对于新型剥离结构，国税厅的事前裁定（private ruling）正变得越来越常见——跨境剥离另请参见 [[finance/multi-jurisdiction-identity-tax-leverage|tax-jurisdiction comparison]]。

## 剥离工作流

1. **范围界定** — 哪些资产、合同、员工、IP、不动产、监管许可发生转移
2. **独立化剥离财务** — 在排除母公司分摊的情况下重述子公司财务
3. **Day-1  就绪** — TSA 范围、IT 切换计划、资金部门搭建、银行账户开立
4. **监管** — 若营业额越过阈值则进行 [[finance/jftc-merger-control-process|JFTC]] 申报；行业监管机构（银行、电信）；若属跨境则涉及对内直接投资（FDI）
5. **税务架构** — 争取「適格」地位；就新型要点取得国税厅裁定
6. **员工转移** — 公司分割需遵守劳动合同承继法；资产交易需逐一同意
7. **客户／供应商同意** — 控制权变更逐项梳理

## 近期案例（2023-2026）

| 年份 | 母公司 | 被剥离业务 | 路径 | 备注 |
|---|---|---|---|---|
| 2023  | 东芝 | 非公开化后的多项重组 | 交易出售 + 分拆混合 | 非公开化后的优化 |
| 2024  | 索尼 FG | 索尼金融集团分拆（于 2025 重新上市） | 股票分配式分拆 | 2017 改革的分拆机制；税务合格 |
| 2024  | 日立 | Astemo（汽车零部件） | 向 PE 交易出售 | 持续的组合精简主题 |
| 2025  | 各东证 PRIME | 非核心集团资产处置 | 混合 | 东证 PBR<1  的改革压力驱动剥离 |

## 研究清单

1. 调取 TDnet／EDINET 备案，了解公告、结构（资产／股权／分割／分拆）以及税务合格选择。
2. 将 [[finance/jftc-merger-control-process|JFTC]] 申报时点与交易完成条件相对应。
3. 在新闻稿中辨识 TSA 范围与终止触发条件。
4. 检查是否需要 [[finance/japan-tender-offer-process|TOB]]（若上市子公司股份超过阈值易手）。
5. 就母公司／子公司估值影响与 [[finance/japan-listed-financial-groups-investable-universe|listed FG universe]] 交叉参照。

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
- [[financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## Sources

- 经济产业省：M&A 指南及公正 M&A 指针发布页面。
- 经济产业省：2023  剥离／集团治理指南新闻稿。
- 国税厅：法人税法 适格组织重组（qualified reorganization）规则。
- 公正交易委员会：资产／公司分割交易的申报阈值。
- 金融厅：上市子公司股份转移时金融商品交易法（FIEA）与公开收购的相互作用。

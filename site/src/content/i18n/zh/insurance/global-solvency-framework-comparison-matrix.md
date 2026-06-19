---
source: insurance/global-solvency-framework-comparison-matrix
source_hash: 7f4473fe916378e2
lang: zh
status: machine
fidelity: ok
title: "Global solvency framework comparison matrix"
translated_at: 2026-06-19T06:09:18.038Z
---

# Global solvency framework comparison matrix

## Wiki 路径

本词条归属于 [[insurance/INDEX|insurance index]]，是关于保险公司资本框架的跨法域比较页面。请对照 [[insurance/economic-value-based-solvency]] 与 [[insurance/esr-economic-value-solvency]] 了解日本特有的经济价值细节，对照 [[financial-licenses/insurance-license-and-solvency]] 了解日本牌照／监管边界，对照 [[insurance/japan-life-insurance-big-four]] 与 [[insurance/japan-nonlife-big-three]] 了解公司层面对日本的影响。巨灾风险模块反馈至 [[insurance/natcat-reinsurance-japan]]。日本侧换算最干净的上市股权实体锚点是 [[life-insurers/dai-ichi-life]] 与 [[non-life-insurers/tokio-marine]]。

## TL;DR

目前保险公司监管资本有四大主要制度并存：日本的 FSA ESR（自 2025-04起推出）、IAIS 保险资本标准（ICS Version 2.0，于 2024 年 12 月定稿，并自 2025起对国际活跃保险集团强制适用）、欧盟的 Solvency II（自 2016 起运行，附带常被称为 Solvency II 2.0的 2025 审议方案），以及美国 NAIC 的风险资本制度（寿险 RBC、财险 RBC、健康 RBC）。ESR、ICS 与 Solvency II 共享市场一致、经济价值的理念；美国 RBC 仍然是法定会计／基于因子的体系。这四个框架在估值、资本分层、贴现率方法论、风险模块结构以及披露方面各有不同。

对于日本保险公司分析，实务上的解读规则是：ESR 驱动国内监管资本，ICS 驱动 IAIG 层面的集团报告，Solvency II 塑造欧洲子公司及竞争对手的样貌，而美国 RBC 驱动日本集团旗下美国寿险／财险／健康子公司所用的指标。

## 框架矩阵

### 身份与生效日

| 维度 | Japan FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 监管当局 | 金融厅 (FSA) | 国际保险监督官协会 (IAIS) | 欧洲保险和职业养老金管理局 (EIOPA) 及各国监管当局 | 美国保险监督官协会 (NAIC) 及州监管当局 |
| 生效日 | 经多年实地测试后，自 2025-04 起推出 | Version 2.0 于 2024年 12 月定稿；经五年监测期后，自 2025 起对 IAIG 强制适用 | 自 2016-01起运行；Solvency II 2.0 审议方案于 2025 采纳 | 自 1990年代起施行，按险种演进（寿险 RBC、财险 RBC、健康 RBC） |
| 范围 | 所有持日本牌照的保险公司及保险控股公司；参见 [[financial-licenses/insurance-license-and-solvency]] | 国际活跃保险集团 (IAIG) — 由 IAIS 标准识别的大型跨境集团 | 在 EU／EEA 获授权的所有保险公司及再保险公司 | 在美国注册的保险公司；按寿险、财险、健康各险种分别适用 |
| 标志性指标 | 经济偿付能力比率 (ESR) = 合格资本 / 所需资本 | ICS 比率 = 合格资本资源 / ICS 所需资本 | 偿付能力资本要求 (SCR) 覆盖率 = 合格自有资金 / SCR；外加最低资本要求 (MCR) | RBC 比率 = 总调整资本 / 授权控制水平 RBC，附带监管行动水平 |

### 理念与估值

| 维度 | Japan FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 基础理念 | 经济价值：对资产、负债与风险的市场一致评估 | 经济价值：对资产与负债的市场调整估值 (MAV) | 经济价值：市场一致的最佳估计加风险边际 | 法定会计价值 (SAP)：对账面价值适用基于因子的费用 |
| 估值基准 | 以无风险收益率曲线贴现的保险负债最佳估计加风险边际 | MAV 最佳估计加现行估计之上的边际 (MOCE) | 最佳估计加按资本成本基础计算的风险边际 | 按 NAIC 会计实务定义的法定准备金及资产估值 |
| 贴现率方法论 | 对长尾寿险负债采用带终极远期利率 (UFR) 外推的无风险收益率曲线；过渡期下的波动性／匹配调整 | 带三段外推至长期远期利率 (LTFR) 的无风险收益率曲线 | 带最后流动点、向 UFR 收敛、波动性调整及匹配调整的 EIOPA 无风险期限结构 | 由估值法（如监督官准备金估值法）设定的法定准备金贴现率，而非单一市场曲线 |
| 长久期负债的处理 | 基于 UFR 的外推降低了极长久期处的资本敏感度，但在曲线的流动部分暴露错配 | 带旨在限制顺周期性校准的 LTFR | UFR 加旨在抑制短期利差冲击的 VA／MA 工具 | 公式不直接对长期现金流错配进行估值；改为通过资产充足性测试处理 |

### 资本结构

| 维度 | Japan FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 资本分层 | 带与 ICS 原则大体一致的质量标准的分层合格资本；次级债与资本工具在限额条件下获准 | 两层合格资本资源：Tier 1 （核心，含无限制的 Tier 1）与 Tier 2；对 Tier 2  的使用设有限额 | 三层：Tier 1 （无限制与受限）、Tier 2, 、Tier 3, ，各自相对 SCR 与 MCR 设有合格性限额 | 总调整资本汇总法定资本与盈余、资产估值准备金（寿险）及经核准的调整；无正式的 Tier 1 ／2 ／3  划分 |
| 内部模型选项 | 标准模型为默认；先进公司可在 FSA 批准下使用内部模型组件 | 标准法为基准；汇总法 (AM) 对某些法域仍作为可比的并行计算保留 | 标准公式或须经监管批准的完整／部分内部模型 | 带规定因子的单一标准公式；无内部模型替代方案 |
| 风险边际／MOCE 基准 | 对最佳估计的资本成本型边际 | 加于最佳估计之上的现行估计边际 (MOCE) | 资本成本风险边际（目前为 2025 审议下调后的 4 % CoC） | 无明示风险边际；保守性嵌入于法定准备金与因子费用中 |

### 风险模块

| 维度 | Japan FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 模块结构 | 寿险承保、财险承保、市场、信用、操作 | 保险（寿险与财险）、市场、信用、操作风险 | 寿险、财险、健康、市场、交易对手违约、操作、无形资产风险 | 资产风险 (C-1)、保险风险 (C-2)、利率风险 (C-3)、业务风险 (C-4)、市场风险（寿险 RBC 中的 C-3a） |
| 巨灾风险 | 涵盖地震、台风、洪水的财险巨灾模块 — 关于日本特有的巨灾暴露与再保险交互，参见 [[insurance/natcat-reinsurance-japan]] | 自然巨灾风险纳入保险风险之内；使用法域情景 | 带各国因子的专用自然巨灾子模块（如按 EU 地区的暴风、洪水、地震） | 承保风险的财险 RBC R5 ；巨灾风险通过 R6  飓风与 R7  地震费用单独追加 |
| 分散效益 | 在 FSA 指定的限额下，通过相关矩阵实现模块内与跨模块分散 | 在子风险及总风险层面通过相关矩阵汇总；汇总法允许一定程度地认可地理／险种分散 | 在模块及子模块层面以规定相关矩阵进行方差—协方差汇总；围栏基金限制某些分散效益 | 跨主要风险组成部分的平方和开方（「协方差」）汇总；粒度较欧洲框架更粗 |
| 操作风险 | 叠加于保险费／准备金之上、带定性监管叠加的资本费用 | 带与国际经验一致校准的基于因子的费用 | 基于保险费与技术准备金的公式，相对 BSCR 设有上限 | 通过业务风险组成部分及风险资本趋势测试间接捕捉 |

### 披露与监督

| 维度 | Japan FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 支柱结构 | FSA 将该制度框定为三个支柱：监管资本、内部风险管理／监管审查 (ORSA 式)、披露 | 两层监管架构：作为规定资本要求的 ICS 加集团整体监督 | 三个支柱：Pillar 1  定量 (SCR／MCR)、Pillar 2  治理与 ORSA、Pillar 3  披露 (SFCR、RSR、QRT) | 向州监管当局提交的保密 RBC 报告，附带监管行动水平；并非公开的 Pillar 3 式披露制度 |
| 公开报告 | 保险公司在综合／年度报告中披露 ESR 与方法论；FSA 公布制度资料与实地测试结果 | 向集团整体监管者提交的 IAIG 层面保密报告；汇总输出由 IAIS 公布 | 强制的年度偿付能力与财务状况报告 (SFCR) 加定量报告模板 (QRT) | 公开披露限于法定申报中出现的 RBC 比率；完整 RBC 工作表为保密 |
| 监督阶梯 | FSA 对照阈值进行监测；经济价值制度下的行动水平在过渡期间予以校准 | ICS 层面的监督对话；无正式「阶梯」，但 ICS 比率为监督干预提供信息 | SCR 违反触发恢复计划；MCR 违反在无短期恢复时触发撤销授权 | 四个行动水平：公司行动、监管行动、授权控制、强制控制 |

### 与 IAIS ICS 的趋同与分歧

| 制度 | 与 ICS 的一致性 | 主要分歧 |
|---|---|---|
| Japan FSA ESR | 高度的概念一致：经济价值理念、MAV 式估值、资本成本边际 | 针对利率、股权与巨灾情景的日本特有校准；针对存量保险负债的过渡安排 |
| EU Solvency II | 在概念层面高度一致；EIOPA 参与了 ICS 实地测试 | 三层资本结构（相对 ICS 的两层）；波动性／匹配调整；无形资产模块；较 ICS 更深的 SFCR 式披露 |
| US NAIC RBC | 一致性最低；美国在 IAIS 可比性评估下主张汇总法 (AM) 为可比结果 | 法定会计基准、基于因子的费用、无经济价值估值、无正式的 Tier 1 ／2 ／3  划分；AM 通过汇总法域比率允许可比结果 |

## 对日本保险公司的影响

日本保险市场通过特定的实体层来换算这些框架：

- **寿险四巨头**：[[insurance/japan-life-insurance-big-four|Japan life insurance big four]] — 日本生命、第一生命、明治安田、住友生命 — 因长久期储蓄、外币年金及股权持有暴露，面临最大的经济价值敏感度。ESR 是主要的国内指标；尤其对于 [[life-insurers/dai-ichi-life]]，上市股权披露意味着 ESR 需与分红／回购能力一并解读。相互保险公司通过保单持有人回报与盈余分配而非股份回购来换算 ESR。
- **财险三巨头**：[[insurance/japan-nonlife-big-three|Japan non-life big three]] — [[non-life-insurers/tokio-marine|Tokio Marine]]、MS&AD 与 SOMPO — 通过自然巨灾再保险定价、海外专业保险及股权持有退出计划来换算 ESR。ESR 下的财险巨灾模块是私营与公共巨灾再保险的监管对应物。
- **IAIG 身份集团**：被其集团整体监管者指定为 IAIG 的日本集团，在 ESR 之上面临并行的 ICS 报告，FSA 对相关总部位于日本的集团充当集团整体监管者。
- **外国子公司**：拥有 EU 子公司（如再保险枢纽、专业平台）的日本集团，在子公司层面面临 Solvency II；拥有美国寿险／财险／健康子公司的集团则面临 RBC。

## ESG／气候压力叠加

各制度都在核心资本框架之上叠加气候／ESG 考量，而非将其嵌入标志性比率之中：

| 制度 | 气候／ESG 方法 |
|---|---|
| Japan FSA ESR | FSA 针对大型保险公司的气候相关情景分析；ESG 风险主要通过 ORSA 与监管对话处理，而非直接的 SCR 式附加 |
| IAIS ICS 2.0 | IAIS 气候风险监管预期与压力测试演练；ICS 本身尚无独立的气候资本模块 |
| EU Solvency II | EIOPA 气候情景演练、通过 2025  审议将可持续性风险整合入审慎框架，以及通过 SFCR 披露进行尽责管理 |
| US NAIC RBC | NAIC 气候风险披露调查与 TCDD 对齐的报告；尚非直接的 RBC 资本费用 |

## 过渡安排

| 制度 | 过渡机制 |
|---|---|
| Japan FSA ESR | 自 2025-04 起的分阶段导入，并行披露存量偿付能力边际；针对在保长久期负债的技术性调整 |
| IAIS ICS 2.0 | 五年监测期 (2020-2024) 先于 2024 年 12 月的定稿；各法域自 2025  起陆续实施 |
| EU Solvency II | 最初的 2016  实施包含针对技术准备金与无风险利率的 16 年过渡措施；2025  审议在一些领域收紧、在另一些领域放松 |
| US NAIC RBC | 按险种（寿险、财险、健康）持续渐进更新；无单一的「大爆炸」式过渡 |

## 决策用途

在提出以下问题时使用本矩阵：

- 日本保险公司的国内 ESR 是否可换算为 ICS、Solvency II 或 RBC 等同物以进行跨法域比较；
- 某项监管资本变更是结构性的（制度理念）还是校准性的（参数更新）；
- 某财险集团的巨灾暴露是被专用巨灾模块捕捉，还是仅以合计捕捉；
- 某寿险公司的长久期负债是否受益于 UFR／LTFR 外推或波动性／匹配调整；
- 日本集团旗下在美国或 EU 注册的子公司是否处于根本不同的资本视角之下。

## 边界

本页不构成法律或监管意见，亦不能替代阅读一手的 FSA、IAIS、EIOPA 或 NAIC 资料。具体校准（相关矩阵、因子水平、UFR／LTFR 值、过渡措施）会随时间变化，应对照各保险公司披露中的来源日期予以核实。上述矩阵为概念性的：某一制度的单一数字不应在未经重新校准的情况下在另一制度中重复使用。

## 相关

- [[insurance/INDEX|insurance INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/mutual-vs-stock-life-insurer]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[life-insurers/dai-ichi-life]]
- [[non-life-insurers/tokio-marine]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: 経済価値ベースのソルベンシー規制等について (regime hub).
- IAIS: Insurance Capital Standard activity / topic page.
- EIOPA: Solvency II regulatory framework and 2025 review materials.
- NAIC CIPR: Risk-Based Capital topic page.
- OECD: insurance and pensions statistics / policy hub.

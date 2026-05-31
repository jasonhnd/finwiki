---
source: insurance/japan-bancassurance-distribution-overlay-matrix
source_hash: 42ac18ff3f5086d1
lang: zh
status: machine
fidelity: ok
title: "日本银行保险分销叠加矩阵"
translated_at: 2026-05-31T07:28:06.149Z
---
# 日本银行保险分销叠加矩阵

## TL;DR

日本的银行保险（銀行窓販 / 窓販）在 2001  至 2007  期间分三阶段放开，如今已成为外币年金、外币趸缴储蓄、附医疗附加险的外币平准保费终身寿险以及日元趸缴储蓄的主导渠道。该叠加矩阵映射出各大银行渠道销售哪些寿险公司的产品，以及以何种经济结构销售。大型银行渠道——[[JapanFG/mufg-bank|MUFG Bank]]、[[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]、[[JapanFG/mizuho-bank|Mizuho Bank]]、[[JapanFG/resona-bank|Resona Bank]]、[[JapanFG/japan-post-bank|Japan Post Bank]]——连同主要地银货架，共同承载来自 [[JapanFG/manulife-japan|Manulife]]、[[JapanFG/prudential-japan|Prudential]]、[[JapanFG/axa-japan|AXA Japan]]、[[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]（第一生命 HD 的银行保险子公司）、[[JapanFG/ms-primary-life|MS Primary Life]]（MS&AD 的银行保险子公司）、[[JapanFG/sumitomo-life|Sumitomo Life]]、[[JapanFG/tokio-marine-nichido-life|Tokio Marine & Nichido Life]]、[[JapanFG/sony-life|Sony Life]]、[[JapanFG/sbi-life|SBI Life]]（住信 SBI 网络银行联动）、[[JapanFG/aflac-japan|Aflac]]（邮储癌症保险合作）的产品投放。矩阵中真正重要的轴包括：（1）排他式还是货架式——银行渠道是在卖一家保险公司的产品还是精选的多家公司货架；（2）趸缴与平准缴产品的拆分——银行保险高度偏向趸缴储蓄型产品；（3）外币年金主导——美元 / 澳元计价产品承载了大部分银行保险新业务价值；（4）佣金结构——趸缴产品的典型前置佣金比率显著高于平准保费产品，这一直是 FSA 长期关注的行为议题；（5）近期重新绑定变化，包括 SBI 收购后 [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]] / [[JapanFG/sbi-life|SBI Life]] 分组；以及（6）FSA 行为规则压力——高龄客户适合性、外币产品说明、以及佣金披露进展。银行保险与 [[insurance/life-insurance-channel-mix|life insurance channel mix]] 所述更广的渠道架构，以及与 [[insurance/foreign-life-affiliate-japan-positioning|foreign-life-affiliate positioning]] 所述外资竞争集合相互作用。

## Wiki route

This page sits under [[insurance/INDEX|insurance INDEX]] and is the bank-side companion to [[insurance/bancassurance-economics-japan|bancassurance economics Japan]]. Read it together with [[insurance/life-insurance-channel-mix|life insurance channel mix]], [[insurance/japan-life-insurance-big-four|the Japan life insurance big four entry]], [[insurance/japan-life-big-four-overlay-comparison-matrix|the life big-four overlay matrix]], [[insurance/foreign-life-affiliate-japan-positioning|foreign-life-affiliate positioning]], [[insurance/insurance-agency-and-brokerage-japan|the agency / brokerage Japan landscape]], [[insurance/japan-medical-insurance-rider-product-matrix|the medical insurance rider product matrix]], [[insurance/japan-kyosai-vs-fsa-insurance-perimeter-matrix|the kyosai vs FSA perimeter matrix]], [[insurance/kampo-japan-post-insurance|the Kampo Japan Post insurance entry]], [[insurance/internet-life-insurance-business-model|the internet life insurance business model]], and [[insurance/economic-value-based-solvency|economic-value-based solvency]] for the regulatory-capital context that affects how insurers price single-premium savings.

The clean bank anchors for this overlay include [[JapanFG/mufg|MUFG]] / [[JapanFG/mufg-bank|MUFG Bank]], [[JapanFG/smbc-trust-bank|SMBC Trust Bank]] / [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]], [[JapanFG/mizuho-fg|Mizuho FG]] / [[JapanFG/mizuho-bank|Mizuho Bank]], [[JapanFG/resona-hd|Resona HD]] / [[JapanFG/resona-bank|Resona Bank]], [[JapanFG/saitama-resona-bank|Saitama Resona Bank]], [[JapanFG/japan-post-bank|Japan Post Bank]] / [[JapanFG/nippon-post|Japan Post group]], [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]], [[JapanFG/sony-bank|Sony Bank]], and the [[JapanFG/nishi-nippon-city-bank|Nishi-Nippon City Bank]] / [[JapanFG/higashi-nippon-bank|Higashi-Nippon Bank]] / [[JapanFG/kita-nippon-bank|Kita-Nippon Bank]] / [[JapanFG/minami-nippon-bank|Minami-Nippon Bank]] regional examples. The insurer anchors include [[JapanFG/manulife-japan|Manulife Japan]], [[JapanFG/prudential-japan|Prudential Japan]], [[JapanFG/axa-japan|AXA Japan]], [[JapanFG/sumitomo-life|Sumitomo Life]], [[JapanFG/tokio-marine-nichido-life|Tokio Marine & Nichido Life]], [[JapanFG/mitsui-sumitomo-aioi-life|Mitsui Sumitomo Aioi Life]], [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]], [[JapanFG/sony-life|Sony Life]], [[JapanFG/sbi-life|SBI Life]], [[JapanFG/ms-primary-life|MS Primary Life]], [[JapanFG/aflac-japan|Aflac Japan]], and [[JapanFG/kampo-life|Kampo Life]].

## 为什么这个矩阵重要

把日本银行保险看成单一渠道，会掩盖底层差异。其下存在三个结构性问题：

1. **银行货架是排他式还是精选式？** 有些银保关系在某些产品线上几乎等同于单一承保方（例如历史上的日本邮储 / Aflac 癌症保险安排），而另一些则是为实现产品多样化而构建的多承保方货架。两者的经济激励结构不同。  
2. **实际被摆上去的产品结构是什么？** 按新业务价值计，趸缴外币年金是主导型银行保险产品；日元趸缴储蓄与附医疗附加险的外币平准保费终身险属于第二梯队。平准保费定期保障型产品很少通过银行保险渠道销售。  
3. **佣金结构与行为规则负担是什么？** 趸缴产品的前置佣金比率明显高于平准保费产品。FSA 多年来持续对高龄客户适合性与外币产品说明施加行为监管压力。佣金披露方向也在逐步提高透明度。  

下方矩阵将这些轴记录为“路由关系”，而不是某一时点的金额数字。具体佣金比率、货架构成与绑定深度具有日期敏感性，应以各银行已发布分销披露、各保险公司 IR 资料、FSA 行为监管刊物，以及生保协会与全国银行协会行业数据为准。

## MUFG 渠道 —— 多货架 + 部分精选排他

[[JapanFG/mufg-bank|MUFG Bank]] 运营的是多承保方银行保险货架，覆盖外币年金、日元趸缴储蓄、附医疗附加险的外币终身险、平准保费储蓄型产品，以及部分医疗 / 癌症产品。该货架通常包括 [[JapanFG/manulife-japan|Manulife]]、[[JapanFG/prudential-japan|Prudential]]、[[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]、[[JapanFG/ms-primary-life|MS Primary Life]]、[[JapanFG/axa-japan|AXA Japan]]、[[JapanFG/sumitomo-life|Sumitomo Life]]、[[JapanFG/tokio-marine-nichido-life|Tokio Marine & Nichido Life]] 等，具体货架会随各财政年度变化。MUFG 集团资产管理载体 [[JapanFG/mufg-asset-management|MUFG Asset Management]] 是与银行保险货架并行的独立基金分销渠道。信托银行 [[JapanFG/sumitomo-mitsui-trust|trust-bank]]（三菱 UFJ 信托体系内）则有其自身的私人银行分销。

## SMBC 渠道 —— 大型外币年金货架 + SMBC Trust Bank 私人银行

[[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] 运营大型银行保险货架，包括 [[JapanFG/manulife-japan|Manulife]]、[[JapanFG/prudential-japan|Prudential]]、[[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]、[[JapanFG/ms-primary-life|MS Primary Life]]、[[JapanFG/sumitomo-life|Sumitomo Life]]（集团关联方）、[[JapanFG/axa-japan|AXA Japan]] 等。[[JapanFG/smbc-trust-bank|SMBC Trust Bank]] 则运行以外币产品为重点的高净值银行保险货架。由于住友生命与 SMBC 的集团关联历史，该集团的寿险关联路线更宽，见 [[insurance/japan-life-big-four-overlay-comparison-matrix|the life big-four overlay matrix]]。

## Mizuho 渠道 —— 多货架 + Asset Management One 重叠

[[JapanFG/mizuho-bank|Mizuho Bank]] 运营多承保方货架，包括 [[JapanFG/manulife-japan|Manulife]]、[[JapanFG/prudential-japan|Prudential]]、[[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]、[[JapanFG/ms-primary-life|MS Primary Life]]、[[JapanFG/sumitomo-life|Sumitomo Life]]、[[JapanFG/axa-japan|AXA Japan]] 等。[[JapanFG/mizuho-trust-bank|Mizuho Trust]] 私人银行部门面向高净值客户销售银行保险货架。与 [[JapanFG/asset-management-one|Asset Management One]]（第一生命 HD / 瑞穗 FG 合资）之间的资管联动，与银行保险货架并行但彼此区分。

## Resona / Saitama Resona 渠道 —— 零售银行保险专长

[[JapanFG/resona-bank|Resona Bank]] 与 [[JapanFG/saitama-resona-bank|Saitama Resona Bank]] 运营以个人客户为核心的零售银行保险货架。货架包括 [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]、[[JapanFG/ms-primary-life|MS Primary Life]]、[[JapanFG/manulife-japan|Manulife]]、[[JapanFG/sumitomo-life|Sumitomo Life]]、[[JapanFG/axa-japan|AXA Japan]] 等。Resona 对零售的聚焦，使银行保险长期成为其手续费收入的重要组成部分。

## Japan Post Bank 渠道 —— Kampo Life + Aflac 癌症险 + 精选外币货架

[[JapanFG/japan-post-bank|Japan Post Bank]] 以网点数量计是日本最大的单一银行保险渠道。其结构性产品投放包括：

- **Kampo Life**：通过邮局网络销售的历史邮政系寿险产品；其产品审批受到特别法约束——见 [[insurance/kampo-japan-post-insurance|the Kampo Japan Post insurance entry]]。
- **Aflac 癌症保险**：Aflac 癌症险通过 Japan Post Bank / 日本邮政（邮便局）柜台销售的长期结构性合作。
- **外币年金与银行保险货架**：由 [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]、[[JapanFG/ms-primary-life|MS Primary Life]]、[[JapanFG/sumitomo-life|Sumitomo Life]]、[[JapanFG/manulife-japan|Manulife]] 等组成的精选货架。

这一邮政网络分销约束，在各大渠道中具有独特性，因为它受邮政民营化后法定框架所约束。

## SBI Shinsei Bank 渠道 —— SBI Life 整合

[[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]]（[[JapanFG/sbi-hd|SBI HD]] 后完成对旧新生银行的整合）已将 [[JapanFG/sbi-life|SBI Life]] 纳入更广泛的 SBI 集团银行保险路径，同时保留自 Shinsei 继承的精选多承保方货架。SBI 生态还包括 [[JapanFG/sbi-securities|SBI Securities]] 和 [[JapanFG/sbi-insurance-group|SBI Insurance Group]] 用于跨条线分销。参见 [[insurance/internet-life-insurance-business-model|the internet life model]] 了解 SBI Life 的直销线上渠道。

## Sony Bank 及其他数字银行 —— 银行保险叠加层

[[JapanFG/sony-bank|Sony Bank]] 运营以外币产品为重点的数字银行银行保险货架。[[JapanFG/sony-fg|Sony FG]] 体系中还包括 [[JapanFG/sony-life|Sony Life]]（lifeplanner 渠道）与 [[JapanFG/sony-insurance|Sony Insurance]]（线上财险）。与大型银行网点相比，数字银行整体在银行保险中的份额较小，但对高净值 / 更年轻的数字化客户群仍有意义。

## 地域银行货架 —— 承保方覆盖广

主要地银运营宽窄不一的银行保险货架。典型货架包括 [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]]、[[JapanFG/ms-primary-life|MS Primary Life]]、[[JapanFG/manulife-japan|Manulife]]、[[JapanFG/sumitomo-life|Sumitomo Life]] 等。Wiki 锚点中的例子包括 [[JapanFG/nishi-nippon-fhd|Nishi-Nippon FHD]] 旗下的 [[JapanFG/nishi-nippon-city-bank|Nishi-Nippon City Bank]]，以及较小的 [[JapanFG/higashi-nippon-bank|Higashi-Nippon Bank]] / [[JapanFG/kita-nippon-bank|Kita-Nippon Bank]] / [[JapanFG/minami-nippon-bank|Minami-Nippon Bank]] 示例；但各地银实际承保方货架会因关系不同而变化。

## 大型比较矩阵表

下方矩阵以“概念性产品投放”方式，映射银行渠道 × 保险承保方。每家货架的具体承保方名单与深度具有日期敏感性；下列单元格意在呈现概念结构，而非作为权威的货架披露。

### 银行渠道身份与银行保险角色

| Bank channel | Group parent | Branch reach | Bancassurance role tilt |
|---|---|---|---|
| [[JapanFG/mufg-bank|MUFG Bank]] | [[JapanFG/mufg|MUFG]] | 资产规模最大的超级银行 | 多承保方货架；信托银行有私人银行层 |
| [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] | [[JapanFG/sumitomo-mitsui-banking-corp|SMBC group]] | 超级银行 | 多承保方货架，并有住友生命集团关联路线 |
| [[JapanFG/smbc-trust-bank|SMBC Trust Bank]] | SMBC | 私人银行渠道 | 高净值银行保险专长 |
| [[JapanFG/mizuho-bank|Mizuho Bank]] | [[JapanFG/mizuho-fg|Mizuho FG]] | 超级银行 | 多承保方货架 |
| [[JapanFG/mizuho-trust-bank|Mizuho Trust]] | Mizuho FG | 私人银行渠道 | 高净值银行保险专长 |
| [[JapanFG/resona-bank|Resona Bank]] | [[JapanFG/resona-hd|Resona HD]] | 主要零售银行 | 零售银行保险专长 |
| [[JapanFG/saitama-resona-bank|Saitama Resona Bank]] | Resona HD | 区域 / 都市圈零售银行 | 零售银行保险专长 |
| [[JapanFG/japan-post-bank|Japan Post Bank]] | [[JapanFG/nippon-post|Japan Post group]] | 日本最大网点网络（邮政网络） | 多承保方货架 + Kampo + Aflac 结构性合作 |
| [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]] | [[JapanFG/sbi-hd|SBI HD]] | 主要零售银行 | 多承保方货架 + SBI Life 整合 |
| [[JapanFG/sony-bank|Sony Bank]] | [[JapanFG/sony-fg|Sony FG]] | 数字银行 | 多承保方货架，偏重外币 |
| 主要地银 | Various FG | 按区域覆盖 | 多承保方货架 |

### 保险承保方 × 银行渠道矩阵（概念性）

| Insurer | MUFG Bank | SMBC | SMBC Trust | Mizuho Bank | Mizuho Trust | Resona / Saitama Resona | Japan Post Bank | SBI Shinsei Bank | Sony Bank | Regional bank shelf |
|---|---|---|---|---|---|---|---|---|---|---|
| [[JapanFG/manulife-japan|Manulife Japan]] | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Selective | Yes broadly |
| [[JapanFG/prudential-japan|Prudential Japan]] | Yes | Yes | Yes | Yes | Yes | Selective | Selective | Selective | Selective | Yes broadly |
| [[JapanFG/axa-japan|AXA Japan]] | Yes | Yes | Yes | Yes | Yes | Yes | Selective | Yes | Selective | Yes broadly |
| [[JapanFG/sumitomo-life|Sumitomo Life]] | Yes | Yes (group affiliation route) | Yes | Yes | Yes | Yes | Yes | Yes | Selective | Yes broadly |
| [[JapanFG/tokio-marine-nichido-life|Tokio Marine & Nichido Life]] | Yes | Yes | Yes | Yes | Yes | Yes | Selective | Selective | Selective | Yes broadly |
| [[JapanFG/mitsui-sumitomo-aioi-life|Mitsui Sumitomo Aioi Life]] | Yes | Yes | Selective | Yes | Selective | Yes | Selective | Selective | Selective | Yes broadly |
| [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]] | Yes | Yes | Yes | Yes (Dai-ichi / Mizuho AM JV linkage) | Yes | Yes | Yes | Yes | Selective | Yes broadly |
| [[JapanFG/ms-primary-life|MS Primary Life]] | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Selective | Yes broadly |
| [[JapanFG/sony-life|Sony Life]] | Selective | Selective | Selective | Selective | Selective | Selective | Selective | Selective | Yes (group route) | Selective |
| [[JapanFG/sbi-life|SBI Life]] | Selective | Selective | Selective | Selective | Selective | Selective | Selective | Yes (group route) | Selective | Selective |
| [[JapanFG/aflac-japan|Aflac Japan]] (cancer-specialty) | Selective | Selective | Selective | Selective | Selective | Selective | Yes (structural tie-up) | Selective | Selective | Selective |
| [[JapanFG/kampo-life|Kampo Life]] | n/a | n/a | n/a | n/a | n/a | n/a | Yes (Japan Post group route) | n/a | n/a | n/a |

注：“Yes” 表示该承保方在公开报道的某一时点出现在该银行渠道的银行保险货架上；“Selective” 表示有限或特定产品投放；“n/a” 表示在当前结构下不存在。具体货架构成会随财政年度与产品周期变化。

### 趸缴与平准缴产品拆分

| Product category | Bancassurance presence | Notes |
|---|---|---|
| 外币趸缴年金（USD / AUD） | 按新业务价值计最主导的银行保险产品 | 佣金最高，也是 FSA 行为监管最关注的产品 |
| 外币趸缴终身寿险 | 主要银行保险产品 | 常附带医疗附加险 |
| 日元趸缴储蓄（定额終身 / 一時払終身） | 主要银行保险产品 | 需求对利率环境敏感 |
| 附医疗附加险的外币平准保费终身寿险 | 增长中的银行保险产品 | 以 Manulife / Prudential / 同类公司为代表 |
| 日元平准保费储蓄 / 年金 | 中等强度银行保险产品 | 份额低于趸缴产品 |
| 平准保费定期保障 | 银行保险中占比有限 | 仍以专属渠道与代理人为主 |
| 医疗 / 癌症专科 | 有选择性的银行保险产品 | Japan Post Bank / Aflac 的结构性合作是最大单点投放 |
| 变额年金（变额回报型储蓄） | 历史上的银行保险产品；FSA 主导产品重设计后已减少 | 基本被外币年金所替代 |

### 渠道排他性与货架精选

| Bank channel | Exclusive / shelf tilt | Notes |
|---|---|---|
| MUFG Bank | 精选式多承保方货架 | 集团资管渠道并行 |
| SMBC | 精选式多承保方货架 | 住友生命集团关联路线 |
| Mizuho Bank | 精选式多承保方货架 | Asset Management One 并行 |
| Resona / Saitama Resona | 精选式多承保方货架 | 零售导向 |
| Japan Post Bank | 精选式多承保方货架 + Kampo 集团路线 + Aflac 结构性癌症合作 | 特别法 / 邮政民营化时代约束 |
| SBI Shinsei Bank | 精选式多承保方货架 + SBI Life 集团整合 | SBI HD 收购后的再调整 |
| Sony Bank | 精选式多承保方货架 | 集团 Sony Life lifeplanner 单独存在 |
| 主要地银 | 精选式多承保方货架 | 承保方集合因关系不同而异 |

### 佣金结构与行为规则（概念性）

| Axis | Single-premium foreign-currency annuity | Level-premium foreign-currency whole-life | Yen single-premium savings | Level-premium yen savings | Medical / cancer |
|---|---|---|---|---|---|
| 典型佣金倾向 | 更高的前置佣金 | 前置佣金与持续佣金混合 | 中等前置佣金 | 较低前置佣金 | 较低前置佣金 |
| 适合性规则重点 | 高龄客户 + 外币风险 | 高龄客户 + 外币风险 + 医疗附加险说明 | 利率 / 市场时点适合性 | 标准适合性 | 标准适合性 |
| FSA 行为监管关注度 | 高（持续多年） | 上升中 | 中等 | 标准 | 标准 |
| 佣金披露方向 | 朝更高透明度推进 | 同样 | 同样 | 同样 | 同样 |
| 产品重设计历史 | 变额年金 → 外币年金迁移 | 外币终身险扩张 | 周期性重设计 | 稳定 | 稳定 |

### 重新绑定历史与结构变化

| Bank channel | Selected structural change |
|---|---|
| Japan Post Bank / Aflac | 长期癌症保险分销合作；资本与运营协同随时间演化 |
| Japan Post Bank / Kampo | 日本邮政集团内部路线，形成于邮政民营化之后 |
| SBI Shinsei Bank / SBI Life | 2021–2023  SBI HD 整合旧新生银行后，SBI Life 更贴近该行银行保险路径 |
| MUFG / SMBC / Mizuho | 货架周期性再平衡；外币年金仍是各周期中的主导产品族 |
| Resona / Saitama Resona | 零售银行保险专长持续，并定期复核货架 |
| Mizuho / Asset Management One | 第一生命 HD / 瑞穗 FG 的资管合资，与瑞穗银行保险货架并行但分离 |
| Sony Bank | 通往 Sony Life lifeplanner 的集团路线与银行保险货架并行 |

### 银行侧手续费收入贡献（概念性）

| Bank channel | Bancassurance fee-income role |
|---|---|
| MUFG Bank | 零售手续费收入的重要贡献项；与资管及其他手续费业务再平衡 |
| SMBC | 重要贡献项；与资管及证券交叉销售再平衡 |
| Mizuho Bank | 重要贡献项；与资管及证券交叉销售再平衡 |
| Resona / Saitama Resona | 零售手续费收入的重要组成 |
| Japan Post Bank | 重要贡献项；由 Kampo 路线 + Aflac 结构合作 + 外币货架共同构成 |
| SBI Shinsei Bank | 随 SBI Life 整合而增长中的贡献项 |
| Sony Bank | 选择性贡献项，偏重外币 |
| 主要地银 | 在许多地银中是重要的零售手续费来源 |

### 保险公司侧新业务价值（NBV）渠道结构

| Insurer | Bancassurance NBV share (conceptual) | Notes |
|---|---|---|
| Manulife Japan | 显著 —— 银行保险是主要渠道 | 以附医疗附加险的美元终身险为锚 |
| Prudential Japan | 银行保险 + lifeplanner 混合 | 银行保险次于 lifeplanner |
| AXA Japan | 含银行保险在内的多渠道混合 | 银行保险占比较大 |
| Dai-ichi Frontier Life | 按设计，银行保险是主要渠道 | 第一生命 HD 专门的银行保险子公司 |
| MS Primary Life | 按设计，银行保险是主要渠道 | MS&AD 专门的银行保险子公司 |
| Sumitomo Life | 专属销售队伍 + 银行保险 + 代理混合 | 银行保险补充专属销售队伍 |
| Tokio Marine & Nichido Life | 代理 + 银行保险混合 | 银行保险居次 |
| Mitsui Sumitomo Aioi Life | 代理 + 银行保险混合 | 银行保险居次 |
| Sony Life | lifeplanner 主导 | 银行保险有限 |
| SBI Life | 线上 + 集团银行保险 | 通过 SBI Shinsei Bank 路线增长中 |
| Aflac Japan | 代理 + 企业 + Japan Post Bank 合作 | 经由 Japan Post Bank 癌症险渠道，银行保险占比有意义 |
| Kampo Life | Japan Post Bank / Japan Post 网络 | 集团内部渠道 |

### FSA 行为规则叠加层

| Rule area | Application | Notes |
|---|---|---|
| 高龄客户适合性 | 所有银行保险销售 | FSA 多年指导演进；要求产品说明程序与记录确认 |
| 外币产品说明 | 外币年金、外币终身寿险 | 销售前必须说明汇率风险与解约价值的汇率敞口 |
| 佣金披露方向 | 所有银行保险销售 | 经历多轮 FSA 推动，逐渐趋于透明 |
| 冷静期 | 标准寿险合同规则 | 一般为自签约 / 交付较早者起 8  天 |
| 产品审批流程 | 所有 FSA 边界内产品 | 变额年金浪潮在 FSA 主导重设计后大体被外币年金取代 |
| 销售人员 / 代理资格 | 所有银行保险销售 | 基于《保险业法》的保险募集人资格 |

### 外币年金的汇率风险转移

| Axis | Foreign-currency single-premium annuity | Yen single-premium savings |
|---|---|---|
| 汇率风险 | 发行时即转移给保单持有人 | 无 |
| 解约价值行为 | 以外币计价；暴露于日元升值 | 以日元计价；更稳定 |
| 保险公司资产负债表 | 以外币债券支持；对冲成本低于对冲后的美元债簿记 | 以日元债券支持；利率周期主导 |
| 客户画像 | 寻求高于日元利率收益的年长客户，也包括部分寻求分散化的较年轻客户 | 寻求日元稳定性的年长客户 |
| 适合性敏感度 | 高；FSA 行为监管重点 | 标准 |
| 保险公司 ALM 后果 | 资产 / 负债同币种计价；汇率风险取决于保单持有人行为净额 | 标准日元 ALM |

### 近期重新绑定与结构变化（概念性）

| Event / theme | Detail |
|---|---|
| SBI HD 整合 Shinsei Bank | [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]] 纳入 SBI 集团，引入 SBI Life / SBI Insurance Group / SBI Securities 的跨渠道路线 |
| Japan Post Bank / Aflac 结构协同 | 在长期分销合作之外，日本邮政集团与 Aflac 的资本协同 |
| 外币年金主导 | 在 2010s 与 2020s 各周期中，外币年金一直是主导型趸缴银行保险产品族 |
| 变额年金衰退 | 在 2010s FSA 主导产品重设计后，变额年金大体被外币年金替代 |
| FSA 适合性框架演进 | FSA 多年持续对高龄客户适合性、外币产品说明与佣金披露方向施压 |
| ESR rollout 2025  | FSA 经济价值偿付能力制度改变了保险公司对外币年金负债的资本处理——见 [[insurance/economic-value-based-solvency|economic-value-based solvency]] |
| 银行保险专属子公司模式 | [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]] 与 [[JapanFG/ms-primary-life|MS Primary Life]] 结构继续作为第一生命 HD 与 MS&AD 的专属银行保险子公司存在 |

## 历史与结构背景

日本当前的银行保险结构反映了三个放开阶段以及数十年的产品演进：

- **2001  第一阶段放开** 允许银行在柜台销售部分保险产品，起点是按揭相关寿险和部分储蓄型产品。
- **2002  第二阶段放开** 扩大了可销售的银行保险产品集合。
- **2007  全面放开** 取消了剩余产品线限制，使银行可销售全范围寿险产品（同时附带行为规则保障）。此后外币年金与附医疗附加险的外币终身险迅速扩张。
- **2007  日本邮政民营化** 在 [[JapanFG/nippon-post|Japan Post group]] 内形成了 [[JapanFG/japan-post-bank|Japan Post Bank]] 与 [[JapanFG/kampo-life|Kampo Life]]。Japan Post Bank 柜台网络成为按网点数计最大的单一银行保险渠道。
- **2010s 变额年金衰退**，由于 FSA 主导的产品重设计和行为监管压力削弱了变额回报型储蓄的吸引力，外币年金成为替代产品族。
- **2010s–2020s 外币年金主导**，以美元和澳元计价的趸缴产品承载了大部分银行保险新业务价值。Manulife、Prudential、AXA、Dai-ichi Frontier Life、MS Primary Life、Sumitomo Life 等是最突出的供应方。
- **2021–2023  SBI 对 Shinsei Bank 的整合**，把 SBI Life 及 SBI 集团跨条线分销带入一个主要零售银行渠道。
- **2025  ESR rollout** 在 FSA 经济价值偿付能力制度下，影响了保险公司对外币年金负债的定价，以及银行保险产品销售如何转化为资本消耗。
- **FSA 周期性的行为监管轮次** 不断演化高龄客户适合性框架、外币产品说明要求和佣金披露方向。

## Decision use

当需要理解日本银行渠道 × 保险公司关系时，应使用此矩阵，而不是孤立地阅读银行侧或保险侧。实践中的分析问题包括：

- **承保方货架重叠。** 大多数大型银行货架都包含同一组核心银行保险承保方（[[JapanFG/manulife-japan|Manulife]]、[[JapanFG/prudential-japan|Prudential]]、[[JapanFG/axa-japan|AXA]]、[[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier]]、[[JapanFG/ms-primary-life|MS Primary]]、[[JapanFG/sumitomo-life|Sumitomo Life]] 等），差异体现在货架深度、产品投放，以及长尾的选择性布局和排他 / 结构性绑定。
- **集团关联路线。** 有些承保方投放源于集团关联历史（SMBC / 住友生命；Mizuho / 第一生命经由 Asset Management One 的联结；Japan Post Bank / Kampo Life）。若不叠加集团关联视角，就无法读懂货架中的结构性投放。
- **趸缴与平准缴的经济性不同。** 趸缴外币年金是佣金最高的产品族。附医疗附加险的外币平准终身险则对应不同的佣金结构与客户画像。银行保险对保险公司 NBV 的贡献取决于这种组合。
- **行为规则负担。** FSA 多年来针对高龄客户适合性和外币产品说明的压力，已经重塑了销售流程。披露与记录确认的负担对银行和保险公司都很显著。
- **Japan Post Bank 在结构上特殊。** 它的网点覆盖、Aflac 癌症险合作、Kampo 内部路线，以及外币货架，共同构成日本最大的单一银行保险渠道。邮政民营化后的法定框架是其独特约束。
- **银行保险专属子公司模式。** [[JapanFG/dai-ichi-frontier-life|Dai-ichi Frontier Life]] 与 [[JapanFG/ms-primary-life|MS Primary Life]] 分别是 [[JapanFG/dai-ichi-life|Dai-ichi HD]] 与 [[JapanFG/msad|MS&AD]] 的专属银行保险子公司。它们唯一的渠道就是银行保险，因此其盈利如何映射到母集团的方式也不同。
- **ESR 对产品经济性的影响。** 2025  的 FSA ESR rollout 重塑了外币年金负债的资本成本。随着保险公司重新优化资本消耗，银行保险产品定价与货架构成可能持续变化。

## Boundary cases / caveats

- **数字为概念性。** 承保方货架构成、佣金比率、NBV 渠道占比与客户画像都具有日期敏感性。来源应包括 FSA 行为监管刊物、各银行分销披露、各保险公司 IR、生保协会行业数据及全国银行协会摘要。
- **“Yes” / “Selective” 仅为说明性。** 矩阵表示的是各承保方在各银行渠道中的概念性存在，基于广泛报道的银行保险货架；若需确认某一财年、某一产品层面的投放，应以银行当前的银行保险披露为准。
- **地银货架差异很大。** 主要地银的承保方组合取决于关系与历史绑定。矩阵把地银合并处理；若要逐家分析，需单独审查。
- **线上银行银行保险规模更小。** [[JapanFG/sony-bank|Sony Bank]] 是 Wiki 锚点集中最大的数字银行银行保险渠道；其他数字银行货架更小。互联网直销寿险渠道（[[JapanFG/lifenet|Lifenet]]、[[JapanFG/sbi-life|SBI Life]] direct）则是另一条路线——见 [[insurance/internet-life-insurance-business-model|the internet life model]]。
- **共济边界替代。** 银行保险明确属于 FSA 边界内。合作（共济）边界有其自身的会员分销路径——见 [[insurance/japan-kyosai-vs-fsa-insurance-perimeter-matrix|the kyosai vs FSA perimeter matrix]]。
- **信托银行银行保险。** SMBC Trust、Mizuho Trust 与 Mitsubishi UFJ Trust 的私人银行渠道，拥有独立的高净值银行保险货架，且偏重外币产品。其披露颗粒度并不总是与超级银行零售货架相同。
- **癌症险专科投放。** [[JapanFG/aflac-japan|Aflac]] 癌症保险分销高度集中在 Japan Post Bank 这一结构性合作渠道，其他银行渠道则只是选择性投放。
- **Kampo Life 特别法。** [[JapanFG/kampo-life|Kampo Life]] 属于 FSA 边界，但受到邮政民营化后产品审批与分销约束——见 [[insurance/kampo-japan-post-insurance|the Kampo entry]]。
- **重新绑定敏感性。** 承保方货架会随着财政年度以及重大集团重组事件而变化（尤其是 SBI HD / Shinsei Bank 整合）。该矩阵反映的是页面日期下的概念结构。
- **FSA 行为规则演进。** 适合性、外币产品说明与佣金披露规则仍在持续演进；新的 FSA 倡议可能改变银行保险的经济方向。
- **变额年金存量。** 历史年度的变额年金风险仍留在保险公司资产负债表上；当前新增银行保险流量已由外币年金与附医疗附加险的外币终身险主导。

## Related

- [[insurance/INDEX]]
- [[insurance/bancassurance-economics-japan]]
- [[insurance/life-insurance-channel-mix]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-life-big-four-overlay-comparison-matrix]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-medical-insurance-rider-product-matrix]]
- [[insurance/japan-kyosai-vs-fsa-insurance-perimeter-matrix]]
- [[insurance/kampo-japan-post-insurance]]
- [[insurance/internet-life-insurance-business-model]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[JapanFG/mufg]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/smbc-trust-bank]]
- [[JapanFG/mizuho-fg]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/resona-hd]]
- [[JapanFG/resona-bank]]
- [[JapanFG/saitama-resona-bank]]
- [[JapanFG/japan-post-bank]]
- [[JapanFG/nippon-post]]
- [[JapanFG/sbi-shinsei-bank]]
- [[JapanFG/sbi-hd]]
- [[JapanFG/sony-bank]]
- [[JapanFG/sony-fg]]
- [[JapanFG/manulife-japan]]
- [[JapanFG/prudential-japan]]
- [[JapanFG/axa-japan]]
- [[JapanFG/sumitomo-life]]
- [[JapanFG/tokio-marine-nichido-life]]
- [[JapanFG/mitsui-sumitomo-aioi-life]]
- [[JapanFG/dai-ichi-frontier-life]]
- [[JapanFG/ms-primary-life]]
- [[JapanFG/sony-life]]
- [[JapanFG/sbi-life]]
- [[JapanFG/aflac-japan]]
- [[JapanFG/kampo-life]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: [Regulated entities and licensed insurers](https://www.fsa.go.jp/en/regulated/).
- FSA: [News and publications hub (conduct supervision)](https://www.fsa.go.jp/en/news/index.html).
- Seiho: [Life Insurance Association member-company list](https://www.seiho.or.jp/english/about/companies/).
- Japanese Bankers Association: [English information hub](https://www.zenginkyo.or.jp/en/).
- Bank of Japan: [Statistics hub](https://www.boj.or.jp/en/statistics/index.htm).
- MUFG: [Group corporate / IR](https://www.mufg.jp/english/).
- SMBC Group (SMFG): [Group corporate / IR](https://www.smfg.co.jp/english/).
- Mizuho FG: [Group corporate / IR](https://www.mizuho-fg.com/index.html).
- Resona HD: [Group corporate / IR](https://www.resona-gr.co.jp/english/).
- Japan Post Bank: [Corporate / IR](https://www.jp-bank.japanpost.jp/en/index.html).
- Manulife Japan: [Corporate](https://www.manulife.co.jp/).
- Prudential Japan: [Corporate](https://www.prudential.co.jp/).
- Dai-ichi Frontier Life: [Corporate](https://www.dai-ichi-frontier.co.jp/).

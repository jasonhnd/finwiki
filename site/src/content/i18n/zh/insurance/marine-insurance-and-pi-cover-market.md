---
source: insurance/marine-insurance-and-pi-cover-market
source_hash: 90554c98737f3f21
lang: zh
status: machine
fidelity: ok
title: "日本的海上保险与 P&I 承保市场"
translated_at: 2026-05-31T07:28:06.185Z
---
# 日本的海上保险与 P&I 承保市场

## TL;DR

日本的海上保险市场可以清晰地拆分为三个监管与结构层面。1 **船壳与机械险（Hull and machinery）** 以及 **货物 / 运输险（cargo / transit）** 由大型 3社 财产保险公司承保，即 [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]（历史上日本最大的海上保险公司，名称仍以“东京海上”开头）、[[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]]、[[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]]，在 FSA 的非寿险牌照框架下运营，并由 Lloyd's syndicates 与外国再保险人 panel 提供承保能力。2 **船东责任险（P&I）** 则以互助形式集中在 [[JapanFG/japan-pi-club|Japan P&I Club / 日本船主責任相互保険組合]]，它是日本唯一的 P&I club，也是 **International Group of P&I Clubs（IG）** 成员，提供跨俱乐部 pooling 与共享 retrocession 计划。3 为承保提供基础的 **船级社（classification society）** 层 —— [[JapanFG/nippon-kaiji-kyokai|Nippon Kaiji Kyokai (ClassNK)]] —— 并非保险本身，而是保险市场依赖的检验 / 规则基础设施。

本页说明这三部分如何拼接，并展示大型 3社 海上保险部门内部的险种拆分，以及对 IG 承保层的结构性解读。

## Wiki route

本条目位于 [[insurance/INDEX|保险索引]]。可与 [[insurance/japan-nonlife-big-three|日本非寿险三大集团]]、外资再保险公司页面和海运 / P&I 风险页面配套阅读。

## 1. 市场结构

| 层级 | 产品 | 提供者类型 | 日本市场主导者 |
|---|---|---|---|
| 海上责任险（P&I） | 船东对船员、乘客、第三方、污染、清障、货损索赔的责任 | 互助型 P&I club | 面向日本船旗 / 日本管理船队的 [[JapanFG/japan-pi-club|Japan P&I Club]] ^[extracted] |

H&M 与货运险市场集中在大型 3社 保险公司；P&I 市场则以 Japan P&I Club 为日本船旗吨位的单一锚点；specialty / energy / war / offshore 市场更多经由 Lloyd's。這就是日本海上保险的标准结构形态。

## 2. 船壳与机械险（H&M）

H&M insurance 赔偿船东船舶本体遭受的物理损失 / 损坏。定价取决于：

- 船龄与船型（油轮 / 散货船 / 集装箱船 / LNG / specialty）；
- 船旗和航行区域（战区、冰区航行）；
- 船东与管理公司的索赔历史；
- 伦敦 / 新加坡 / 东京海上保险市场的整体行情。

**市场累积风险。** 如果横滨、名古屋、神户、大阪、东京湾等主要港口发生台风或地震，可能同时损伤数百艘锚泊船舶，在海上险账簿内形成与陆上财产险相关联的自然灾害累积。这也是海上 cat XL 采购会并入与财产 cat XL 塔相同 [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer panel]] 的原因之一。

## 3. 货物 / 运输险

货物险按标准 Institute Cargo Clauses（A / B / C）或日本国内等价条款承保在途货物。

| 货运险种 | 分出人 | 备注 |
|---|---|---|
| 日本出口货物 | 日本出口商（如 [[mitsui-co|Mitsui & Co.]] 等综合商社、制造商、贸易公司） | 通常由大型 3社 东京总部安排 |
| 国内运输 | 物流运营商 / 托运人 | 单票保费较小、频率较高 |

## 4. P&I 承保 —— 互助层

P&I（Protection & Indemnity）覆盖的是船东的*责任*侧，与 H&M 所覆盖的物理损失侧不同。其结构与普通保险不同。

### 为什么 P&I 是互助制

P&I 起源于 19 世纪的英国。当时商业保险公司不愿承保无上限的污染、船员伤害和沉船清障责任，于是船东之间以互助形式共担责任风险。这种互助形式至今仍存。日本对应机构是 [[JapanFG/japan-pi-club|Japan P&I Club / 日本船主責任相互保険組合]]，依据《船主相互保险组合法》（1950）取得许可 —— 这与规范大型 3社 保险公司 ^[extracted] 的《保险业法》是*不同*的法律。Japan P&I Club 是日本唯一的 P&I mutual ^[extracted]。

### P&I 的承保范围

- **船员、乘客及第三方的人身伤害与死亡责任** ^[extracted]
- **针对承运人的货物索赔**（货损 / 短少）^[extracted]
- **沉船后的清障费用** ^[extracted]
- **碰撞责任**（超过 H&M 保单 “running-down clause” 限额的部分）^[extracted]
- **FD&D — Freight, Demurrage and Defence** —— 法律抗辩与合同争议费用 ^[extracted]

### International Group of P&I Clubs（IG）共保池

Japan P&I Club 是全球 **13  家 IG 成员俱乐部** 之一 ^[extracted]。IG 结构是全球海上责任险的承重件：

| IG 承保层 | 近似自留额 | 谁承担 |
|---|---|---|
| Club retention | 到各 club 自有上限（数百万美元低位区间） | 成员船东通过对本 club 的 call（分摊）承担 |
| Pool layer | 高于 club retention、直至共享 IG 阈值 | 全部 13  家 IG clubs 按比例通过共保池承担 |

## 5. 大型 3社 海上险部门的拆分

三大非寿险集团都在其非寿险运营公司内部设有海上保险业务线，在品牌与部门划分上也有一定历史差异。

### Tokio Marine（大型 1）

| 项目 | 备注 |
|---|---|
| 运营实体 | [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]] ^[extracted] |

### MS&AD（大型 2）

| 项目 | 备注 |
|---|---|
| 运营实体 | [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] ^[extracted] |

### Sompo（大型 3）

| 项目 | 备注 |
|---|---|
| 运营实体 | [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] ^[extracted] |

### 综合解读

| 保险公司 | 海上险市场地位 | 货运险实力 | 船壳险实力 | 对再保险依赖 |
|---|---|---|---|---|

## 6. Lloyd's 在日本海上险中的角色

Lloyd's of London 历史上一直是 marine、hull、cargo、war 和 offshore-energy 承保的全球锚点。在日本，它通过 [[JapanFG/lloyd-japan|Lloyd's Japan Inc.]]（持牌 2000）^[extracted] 运作，为 Lloyd's syndicates 承保日本所在地海上 specialty 风险提供市场准入。有关 syndicate-capacity 模式见 [[insurance/lloyds-japan-syndicate-operating-model]]。

Lloyd's 在日本海上险市场的典型角色：

这与大型 3社 保险公司形成互补 —— Lloyd's 承接的是日本国内市场无法或不愿大规模承保的业务。

## 7. ClassNK 与检验基础设施

其与海上保险的关系：

ClassNK 与 Japan P&I Club / 大型 3社 保险公司共同构成了*日本式*海事风险基础设施栈 —— class、hull、cargo、P&I —— 类似于其他司法辖区的外国 IACS 成员 + 外国 IG club + 外国保险公司组合。

## 8. 比较：日本海上险承保提供者

| 提供者类型 | Hull | Cargo | P&I | Specialty / war / energy | Reinsurance |
|---|---|---|---|---|---|
| Japan P&I Club（[[JapanFG/japan-pi-club]]） | no | no | yes（mutual） | no | 分出至 IG pool + IG retro |
| Lloyd's Japan（[[JapanFG/lloyd-japan]]） | yes（syndicate participation） | yes（syndicate participation） | rarely | yes（lead role） | mixed |
| Foreign reinsurer panel（[[insurance/foreign-reinsurer-japan-landscape]]） | no（仅再保险） | no（仅再保险） | no（仅再保险，但在 IG retro 中关键） | no | reinsurer |
| Foreign direct carriers（[[JapanFG/aig-japan]]、[[JapanFG/chubb-insurance-japan]] 等） | rarely | sometimes | no | sometimes | mixed |

## 9. 决策用途

在以下问题中使用本页：

## Related

- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/foreign-reinsurer-japan-landscape]]
- [[insurance/lloyds-japan-syndicate-operating-model]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/captive-insurance-japan-market]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[JapanFG/nonlife-insurer-registry-japan-index]]
- [[JapanFG/japan-pi-club]]
- [[JapanFG/nippon-kaiji-kyokai]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/aioi-nissay-dowa-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/lloyd-japan]]
- [[JapanFG/munich-re-japan]]
- [[JapanFG/swiss-re-japan]]
- [[JapanFG/toa-reinsurance]]
- [[INDEX|FinWiki index]]

## Sources

- Japan P&I Club: official website (https://www.piclub.or.jp/).
- International Group of P&I Clubs: member clubs and structure (https://www.igpandi.org/clubs).
- Tokio Marine Holdings: integrated / annual reports (marine division disclosure).
- MS&AD Holdings: integrated reports and disclosure library.
- Sompo Holdings: integrated / annual reports.
- General Insurance Association of Japan: industry overview.
- Nippon Kaiji Kyokai (ClassNK): rules, surveys, IACS membership pages.
- FSA: non-life insurance company license list (`songai.pdf`).

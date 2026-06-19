---
source: payments/jcb-three-party-operating-model
source_hash: 72539030f3ed28da
lang: zh
status: machine
fidelity: ok
title: "JCB 三方品牌运营模式"
translated_at: 2026-06-19T06:09:18.096Z
---

# JCB 三方品牌运营模式

## Wiki route

本条目作为 JCB 专属的运营模式页位于 [[payments/INDEX|payments index]] 之下，与 [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]]（用于跨品牌角色地图）以及 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]（用于四分类比较视图）配对。JCB 是唯一在单一企业集团中一贯地结合品牌网络、主要收单方与发卡许可职能的国内品牌，这正是其角色划分与 Visa / Mastercard 4方卡组织行为存在重大差异的原因 ― 关于费用流的后果请与 [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] 并读，关于 J-CSC / EMV 3-DS 层请与 [[payments/japan-card-security-authentication-controls|card security and authentication controls]] 并读。企业锚点为 [[card-issuers/jcb|JCB Co Ltd]] 与 [[payment-firms/jcb-international|JCB International]]；主要合作发卡方包括 [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] 与 [[card-issuers/rakuten-card|Rakuten Card]]；品牌同业为 [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]、[[payment-firms/mastercard-japan|Mastercard Japan]] 与 [[payment-firms/american-express-international-japan|American Express International Japan]]。

## TL;DR

JCB 运营一种 **三方品牌模式**，其中株式会社ジェーシービー 同时拥有品牌网络规则、运营主要收单方业务，并将发卡权许可给合作卡公司。这是一种在结构上不同于 Visa / Mastercard **四方卡组织** 的运营模式，在四方模式中，品牌网络实体与发卡方及收单方均分离，并向各方收取卡组织 / 交换费。JCB 的角色结合模式意味着，在 on-us 交易中 JCB-作为收单方 与 JCB-作为发卡方 之间不支付经济性交换费，品牌直接控制商户规则执行，而发卡许可合作方（MUFG NICOS、AEON、Rakuten Card 以及约 30 家其他公司）接入 JCB 网络而不会成为品牌同业。JCB 2023 对发卡方 / 收单方费用配分率的披露 ― 日本主要品牌中的首次 ― 之所以可见，正是因为 JCB 控制着划分的两侧。

## 三方 vs 四方卡组织的区分

这一区分关乎品牌网络实体是否与发卡方和收单方角色分离，而非关乎有多少方触及单笔交易。

| 卡组织类型 | 品牌网络实体 | 发卡方实体 | 收单方实体 | 示例 |
|---|---|---|---|---|
| 四方（开放）| 分离 | 多个持牌发卡方 | 多个持牌收单方 | Visa, Mastercard, UnionPay |
| 三方（封闭 / 结合）| 与主要发卡方 + 收单方同一集团 | 品牌实体本身 + 许可下的合作发卡方 | 品牌实体本身（及部分合作方）| American Express, Diners Club, JCB（带混合层）|

JCB 处于混合位置：它以 **三方卡组织** 为其主要架构（品牌 = 主要收单方 = 发卡许可方）运营，但额外将发卡权许可给约 30 家合作卡公司，从而在三方基础之上形成部分类四方的层。共同发行（joint-issuer）模式意味着合作方在许可下发行 JCB 卡，而不会成为株式会社ジェーシービー 本身的品牌同业。

## 企业划分：株式会社ジェーシービー vs ジェーシービー・インターナショナル

株式会社ジェーシービー 与 ジェーシービー・インターナショナル 不是可互换的企业身份 ― 它们在同一品牌下处理不同的业务面：

| 实体 | 范围 | 主要角色 |
|---|---|---|
| 株式会社ジェーシービー（株式会社ジェーシービー）| 日本国内 | 品牌运营方 + 日本主要收单方 + 日本侧发卡方 + 面向合作公司的发卡许可管理 |
| 株式会社ジェーシービー・インターナショナル（株式会社ジェーシービー・インターナショナル）| 国际（日本之外）| 国际收单方 / 商户网络 + 国际发卡许可 + 跨境结算 |

在日本「受理 JCB」的商户与 株式会社ジェーシービー（或其收单合作公司之一）签约；在新加坡或韩国「受理 JCB」的商户与 ジェーシービー・インターナショナル（或其国际收单合作方）签约。一位持有由 [[card-issuers/mufg-nicos|MUFG NICOS]] 在日本发行的 JCB 卡并在海外使用的持卡人，触及的是作为发卡方的 株式会社ジェーシービー 与作为国际收单网络对手方的 ジェーシービー・インターナショナル。这一划分对商户费用经济性很重要，因为国际收单侧的成本结构不同于日本国内；对拒付 / 争议路由也很重要，因为跨境争议流经 ジェーシービー・インターナショナル 的规则。

## JCB 许可下的发卡方生态系统

株式会社ジェーシービー 在日本将发卡权许可给约 30 家合作卡公司，这些公司在其自身的 Visa / Mastercard 发行之外（或代之）发行 JCB 品牌卡。这是 JCB 卡组织的主要日本特有功能之一 ― 合作发卡方不是品牌同业，不享有品牌网络表决权，但确实就持卡人关系承担发卡方信用风险。

主要的 JCB 品牌合作发卡方包括：

| 合作发卡方 | 集团锚点 | 产品概况 |
|---|---|---|
| [[card-issuers/mufg-nicos\|MUFG NICOS]] | MUFG | 共同品牌 MUFG / NICOS / DC JCB 卡；也是主要收单方 |
| [[card-issuers/aeon-financial-service\|AEON Financial Service]] | AEON | AEON JCB / AEON CARD Select JCB |
| [[card-issuers/rakuten-card\|Rakuten Card]] | Rakuten | Rakuten Card（JCB 选项）|
| JR 相关发卡方 | JR 东日本、JR 西日本 等 | VIEW JCB, J-WEST JCB |
| Credit Saison | Saison HD | SAISON JCB 卡 |
| Orient Corporation（Orico）| Orico | Orico JCB 卡 |
| JACCS | JACCS | JACCS JCB 卡 |
| FFG Card、北國 Credit、地方银行系列 | 地方银行 | 银行渠道 JCB 卡 |
| Lifecard | Aiful 集团 | Lifecard JCB |

合作发卡方就其已发行的组合向 株式会社ジェーシービー 支付发卡许可 / 网络费用，在 [[payments/japan-consumer-credit-operator-comparison-matrix|consumer credit operator]] 义务下进行自身的持卡人信用审核，在自身资产负债表上记录应收款，并作为经济上的发卡方承担拒付 / 欺诈损失。株式会社ジェーシービー 作为主要发卡方并行持有其自身的直接发行组合。

## 商户收单控制 vs 四方卡组织

由于 JCB 结合了品牌与主要收单方职能，其商户规则执行在结构上不同于 Visa / Mastercard 4方卡组织：

| 维度 | JCB 3方 | Visa / Mastercard 4方 |
|---|---|---|
| 商户规则制定者 | 株式会社ジェーシービー（品牌 = 主要收单方）| Visa / Mastercard 规则集；各持牌收单方执行 |
| 商户的收单方选择 | 有限 ― 通常为 株式会社ジェーシービー 直接；部分与合作方（MUFG NICOS 等）有 共同加盟店 安排 | 广泛 ― 商户从多个持牌收单方中选择 |
| 收单方竞争 | 对 JCB 直接商户而言较低 | 在持牌收单方之间较高 |
| 商户费用纪律 | 与 JCB 双边协商 | 由收单方侧竞争予以约束 |
| 品牌费用 | 内嵌 ― 无向收单方单独收取的卡组织费用 | 明示 ― 收单方支付品牌卡组织费用 |
| 交换费 | on-us 无（发卡方 = 收单方）；对合作发行卡适用 | 始终在发卡方与收单方之间适用 |

「on-us 无交换费」的特征意味着，一位 JCB 直接持卡人在 JCB 直接商户处支付时，产生的是 株式会社ジェーシービー 内部的单一会计分录，而非分离实体之间的交换费与卡组织费用配分。对于合作发行的 JCB 卡（持卡人持有例如 MUFG NICOS 发行的 JCB 卡在 JCB 直接商户处支付），交换费确实从 株式会社ジェーシービー-作为收单方 流向 MUFG NICOS-作为发卡方。

## 2023 费用配分披露

关于 JCB 在发卡方侧与收单方侧之间披露商户费用配分率的 2023-06-01 METI / JFTC 联合发布，是三方模式的直接后果：由于 株式会社ジェーシービー 控制两端，JCB 是唯一能够无需在多个法律独立的收单方实体之间协调即可机械性披露该划分的日本品牌。Visa / Mastercard 在 2023 的 Payments Japan 路线图中公布了日本标准交换率，但在其四方模式中，针对个别收单方的发卡方 / 收单方费用划分无法集中公布。JFTC 的 2022 商户费用报告将发卡方 / 收单方划分透明度的缺失列为日本卡支付的主要竞争关切之一，而 JCB 的披露成为早期基准。

## 为何在四方全球主导之时三方仍然存续

在四方（Visa, Mastercard）主导全球无现金交易量的世界中，三方卡组织（Amex, Diners, JCB）的存续并非偶然。三方模式在特定用例中具有结构性优势：

| 优势 | 如何体现 |
|---|---|
| 对持卡人 + 商户关系的端到端控制 | 品牌可将卡定位为高端 / 身份产品，并将商户体验作为协调整体来管理 |
| 规则变更无需发卡方 / 收单方的政治协调 | 新产品功能与费用变更可在无需多收单方批准的情况下部署 |
| 在高端 / 战略账户上的直接商户关系 | 品牌可协商双边条款，保护战略账户免受收单方流失 |
| 忠诚度 / 积分计划在单一实体内干净运行 | 持卡人奖励不存在发卡方侧的碎片化 |
| 发卡方与收单方损益之间的交叉补贴 | 品牌可吸收收单方侧的利润压缩以支撑发卡方侧的信用 / 奖励经济性 |

结构性劣势 ― 相对 Visa / Mastercard 有限的商户受理足迹、自有发行之外有限的发卡方生态系统 ― 是三方品牌通常被定位为高端 / 专项而非通用支付网络的主要原因。JCB 对这一挑战的应对是上文所述的 **合作发卡方模式**，它在保留三方控制架构的同时，赋予 JCB 远大于 Amex / Diners 的发卡方足迹。

## 国内品牌 vs 国际品牌维度

JCB 在日本市场占据一个其他品牌无一能完全共享的特定位置：它 **既是日本国内品牌又是国际卡品牌**。Visa / Mastercard / Amex / Diners 都是设有日本国内业务的国际品牌；UnionPay 是设有日本受理的外国-国内-中国品牌。JCB 是唯一一个其 **总部、品牌身份与主要规则制定权位于日本** 的品牌，同时又通过 ジェーシービー・インターナショナル 运营国际受理网络。

这影响若干维度：

| 维度 | JCB 的双重定位如何重要 |
|---|---|
| 入境游客受理 | JCB 在韩国、台湾、香港及东南亚部分地区的受理度显著优于其他日本发行卡，反映了 ジェーシービー・インターナショナル 的区域收单建设 |
| 国内监管对话 | METI / JFTC 与 JCB 的接触是直接的；对于国际品牌，对话经由日本国内代表处流动 |
| 国内商户费用披露 | JCB 可单方面作出日本国内披露决定；国际品牌需与全球总部协调 |
| 高端定位 vs 通用性 | JCB 在日本与亚洲的高端定位部分依赖于双重品牌-与-收单方架构 |
| 发卡方共同品牌合作 | 日本发卡合作方（MUFG NICOS、AEON、Rakuten Card 等）常发行双网络的 JCB + Visa / JCB + Mastercard 卡，借助 JCB 的国内优势与 Visa / Mastercard 的国际通用性 |

## 跨境收单合作

ジェーシービー・インターナショナル 历史上通过合作而非在每个市场自建商户网络来扩展国际收单足迹：

| 地区 | 收单合作模式 |
|---|---|
| 北美 | Discover Global Network（联盟 ― JCB 卡在 Discover 商户受理，反之亦然）|
| 欧洲 | UnionPay International 及双边收单合作 |
| 亚洲（日本之外）| ジェーシービー・インターナショナル 直接商户准入 + 本地收单合作（例如台湾的 CTBC、韩国的 KB 国民）|
| 中国 | UnionPay 及直接合作 |

Discover 联盟尤为值得注意，因为它使 ジェーシービー・インターナショナル 在无需自行对个别美国商户核保的情况下获得事实上的美国受理。就入境游客而言（在日本使用 JCB 卡的中国、韩国、台湾访客），株式会社ジェーシービー 是日本侧的主要收单方；就出境日本游客而言，ジェーシービー・インターナショナル 通过目的地国的合作网络路由交易。

## 三方运营模式下的拒付 / 争议

JCB 三方模式下的持卡人争议流经的路径在结构上比四方卡组织的争议更简单：

| 争议步骤 | JCB 三方 | Visa / Mastercard 四方 |
|---|---|---|
| 持卡人报告争议 | 向发卡方（株式会社ジェーシービー 直接或合作发卡方）| 向发卡方 |
| 发卡方调查 | 发卡方对照 JCB 争议规则评估 | 发卡方对照品牌拒付规则评估 |
| 收单方通知 | 直接内部路径（on-us）；合作发行为实体间 | 收单方经品牌网络获通知 |
| 商户通知 | 经 JCB 直接收单或合作收单方 | 经持牌收单方 |
| 解决 | on-us 在 JCB 规则内的内部仲裁；合作发行为合作方协作 | 可升级至品牌仲裁层 |

更简单的路径在 on-us 情形下是解决速度的结构性优势，但独立品牌仲裁的缺失，在持卡人与发卡方内部收单方对争议交易解释相左时构成约束。在实践中，JCB 已构建了自身的争议处理基础设施，在内部治理结构中近似于品牌仲裁层。

## JCB 触及交易的研究清单

在分析涉及 JCB 受理的日本卡交易或商户关系时，在就费用经济性、争议责任或竞争定位得出结论之前，角色结合要求区分若干层：

1. 发卡方是 株式会社ジェーシービー 直接，还是合作发卡方（[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/rakuten-card|Rakuten Card]] 等）？
2. 收单方是 株式会社ジェーシービー 直接，还是与 JCB 协作的合作收单方？
3. 交易是 on-us（同一发卡方 / 收单方 / 品牌）还是 off-us（不同发卡方与收单方）？
4. 商户关系是在 株式会社ジェーシービー 合同下，还是在合作收单方合同下？
5. 交易是国内（由 株式会社ジェーシービー 处理）还是国际（由 ジェーシービー・インターナショナル + 外国收单合作方处理）？
6. 该产品是否包含与品牌网络处理分开、会触发 [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] 问题的分期 / 循环 / BNPL 功能？

这些答案决定费用经济性、拒付流、监管披露与争议解决路径 ― 其中没有一项可仅凭 JCB 品牌标识推断。

## Related

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[card-issuers/jcb]]
- [[payment-firms/jcb-international]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/rakuten-card]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/mastercard-japan]]
- [[payment-firms/american-express-international-japan]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- 株式会社ジェーシービー：品牌、发卡方、收单方业务领域公开页面。
- 株式会社ジェーシービー：商户规则公开页面。
- 株式会社ジェーシービー：企业集团结构页面。
- METI / JFTC：关于 JCB 商户费用配分率披露的 2023-06-01 联合发布。
- METI：分期销售法登记清单（第 115条）― 株式会社ジェーシービー、ジェーシービー・インターナショナル 及合作发卡方。
- JFTC：2022 信用卡商户费用报告。
- Payments Japan Association：2023 无现金路线图（交换费披露章节）。

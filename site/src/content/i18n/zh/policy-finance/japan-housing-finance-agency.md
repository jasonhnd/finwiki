---
source: policy-finance/japan-housing-finance-agency
source_hash: 79385baa06b7957f
lang: zh
status: machine
fidelity: ok
title: "住宅金融支援机构 (JHF)"
translated_at: 2026-06-01T03:31:12.305Z
---

# 住宅金融支援机构 (JHF)

## Wiki 路径

本条目位于 [[policy-finance/INDEX|policy-finance index]] 之下，是日本住房金融政策机构的说明页。阅读时可对照 [[policy-finance/japan-policy-finance-system|Japan policy finance system]] 以理解更广泛的公共信用边界，并结合 [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]] 理解证券化管线。JHF 在结构上不同于 [[JapanFG/jfc|JFC]]（中小企业 / 农林渔业 / 小微企业）和 [[JapanFG/jbic|JBIC]]（国际金融）——它是政策金融地图中的住房金融通道。

## TL;DR

Japan Housing Finance Agency（住宅金融支援机构，JHF）是日本的住房金融政策机构。在 2007  私有化改革重组关闭直接放贷型 Government Housing Loan Corporation（住宅金融公库，GHLC）之后，JHF 作为独立行政法人设立，通过以下方式间接支持民间住房金融：（1）证券化支持——从民间贷款机构购买长期固定利率 Flat 35  住房贷款，并向资本市场发行 MBS；（2）住房贷款保险——为民间贷款机构的住房贷款提供支持；以及（3）在灾后重建、高龄者住房、城市更新、抗震改修等政策缺口领域保留的直接贷款。可将本页作为 [[policy-finance/japan-policy-finance-system]] 中的住房信用通道；MBS 管线见 [[structured-finance/jhf-mbs-mechanics]] 和 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]。

## 1. 机构概览
| 项目 | 内容 |
|---|---|
| 法律形态 | 独立行政法人（Incorporated Administrative Agency） |
| 日文名称 | 独立行政法人住宅金融支援機構 |
| 设立 | 2007-04-01（在 2003  改革规划之后，承继住宅金融公库 / GHLC） |
| 主管 | MLIT（国土交通省）和 MOF（财务省）共同监管 |
| 法律依据 | 独立行政法人住宅金融支援機構法（2005） |
| 总部 | 东京都文京区后乐 |
| 主要业务 | 证券化支持、住房贷款保险、直接贷款（政策缺口领域） |
| MBS 发行 | 每月发行 JHF MBS Trust，是最大的日元计价结构化票据项目 |
| FinWiki 通道 | [[policy-finance/INDEX|policy-finance]]（不是 JapanFG 公司页；也不是银行） |

## 2. 业务层

| 业务 | 内容 | 对手方 |
|---|---|---|
| 证券化支持（购买型） | 从民间贷款机构购买 Flat 35  固定利率住房贷款，汇集为 MBS Trust，并向资本市场发行优先级 MBS。 | 民间发放机构（地方银行、巨型银行、信用金库、住房贷款公司）；MBS 投资者。 |
| 证券化支持（保证型） | 不购买贷款，而是为民间贷款机构的证券化提供保证。 | 民间贷款机构 / 证券化发起人。 |
| 住房贷款保险 | 为民间贷款机构的住房贷款承保（违约 / 特定原因保险）。 | 银行、信用金库、地方贷款机构。 |
| 直接贷款 | 灾后重建住房、城市更新项目、高龄者住房、抗震改修、育儿家庭住房支持。 | 符合条件的最终借款人和项目发起人。 |
| 业务委托 | 与民间合作银行协调贷款服务、申请处理和回收。 | [[banking/regional-bank-consolidation-pattern|Regional banks]] 及其他合作金融机构。 |

## 3. Flat 35  产品族

JHF 的旗舰产品族是 **Flat 35**（フラット35）长期固定利率住房贷款项目——由民间银行 / 贷款机构发放，JHF 购买，并通过 JHF MBS Trust 证券化。子产品包括：

- **Flat 35**——标准 15-35 年固定利率住房贷款；贷款价值比通常最高为 90%（也有更高 LTV 版本），并要求房产满足技术标准（隔热、抗震、耐久性）。
- **Flat 35S**——面向满足更高质量标准房产的利率优惠版本（A 计划：高性能节能 / 抗震 / 无障碍；B 计划：标准质量提升）。S 优惠适用于最初 5-10  年。
- **Flat 50**——面向长期优良住房的 36-50 年固定利率住房贷款；这是面向重视超长期期限买家的小众产品。
- **Flat 35  子育てプラス**——叠加在 Flat 35  / Flat 35S 之上的育儿家庭优惠。
- **Flat 35  借换**——面向既有住房贷款的再融资版本。
- **灾害复兴住宅融资**——灾后重建直接贷款（保留下来的直接贷款通道）。
- **リフォーム融资 / 面向高龄者的返还特例**——直接贷款的小众领域。

Flat 35  每年的发放量达到数十万笔，峰值时期年度放款规模达到数万亿日元；JHF MBS 发行是这一发放流的下游融资腿。

## 4. 年度演变和 2007  私有化后再构建路径

| Year | Event | Significance |
|---|---|---|
| 1950  | 住宅金融公库（GHLC）设立 | 直接放贷型公共住房金融机构；战后住房供给政策的锚点。 |
| 1950-2000s | GHLC 高峰期 | 直接住房贷款机构——与民间银行竞争，持有大规模住房贷款组合。 |
| 2001  | 小泉结构改革议程公布 | 特殊法人改革；GHLC 被列为转型对象。 |
| 2003  | 住宅金融公库法修正——直接贷款收缩计划 | GHLC 原则上停止新直接贷款（灾害 / 政策缺口例外）；转向证券化支持模式。 |
| 2005  | 独立行政法人住宅金融支援機構法制定 | 为 JHF 作为承继机构提供法律基础。 |
| 2007-04-01 | JHF 设立；GHLC 解散 | “私有化后再构建”——直接零售住房贷款角色被移除；证券化支持和保险角色被创建；政策缺口直接贷款被保留。 |
| 2007-2012  | Flat 35  扩张；MBS 项目建立 | 每月发行的 JHF MBS Trust 成为基准结构化票据项目。 |
| 2011  | 东日本大地震 | 灾后重建直接贷款通道大规模启动；JHF 的复兴住房金融功能重新活跃。 |
| 2016  | NIRP / 负利率时代 | 住房贷款利率下降；民间银行可变利率住房贷款与 Flat 35 激烈竞争；Flat 35  份额承压。 |
| 2020-2022  | COVID 时期住房金融支持 | Flat 35  放款保持韧性；增加若干宽限 / 还款弹性安排。 |
| 2022-2024  | BOJ YCC 调整到退出 | 长端利率开始上升；Flat 35  利率逐步上行，缩小与民间可变利率的差距。 |
| 2024-2025  | Flat 35  改革——子育てプラス扩展 | 针对育儿家庭的定向优惠；与人口政策对齐。 |
| 2024-2026  | BOJ 短期利率正常化（NIRP 后） | 可变利率住房贷款重新定价；Flat 35  与可变利率之间的利差重新均衡。 |

2007  转型最好理解为“**直接贷款私有化，同时以政策基础设施形式再构建**”，而不是完全私有化：GHLC 具有竞争性的直接零售住房贷款组合被收缩，但住房金融政策使命被重组为在民间体系背后提供证券化支持和保险的机构。

## 5. 证券化联动（JHF MBS）

JHF 的经济核心是每月发行的 **JHF MBS Trust** 项目——完整管线见 [[structured-finance/jhf-mbs-mechanics]]。流程如下：

1. 民间发放机构（地方银行、巨型银行、住房贷款公司）按照 JHF 的承销和房产技术标准，批准面向购房者的 Flat 35  贷款。
2. JHF 从发放机构购买符合条件的贷款（购买型证券化支持项目）。
3. JHF 每月将购买的贷款汇集进 MBS Trust。
4. JHF 向资本市场投资者（银行、寿险公司、养老金、资产管理公司）发行优先级 pass-through MBS。
5. 优先级 MBS 带有 JHF 的政府支持信用（实质上与主权相关）；相对 JGB 的利差通常较窄（历史上多在 10-30  bp 区间）。
6. 民间发放机构继续依据服务协议提供贷款服务（收款、面向客户的运营）。

JHF MBS 项目是**最大的日元计价结构化票据项目**，规模远超民间 RMBS 发行，并为日元 RMBS 曲线提供基准。利差经济见 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]。

## 6. ARR / 政策利率利差经济

JHF 的住房贷款保险和 Flat 35  证券化支持经济性取决于以下两端之间的利差：

- **融资端**——JHF MBS 票息（实质上是与 JGB 相关的利率，加上 10-30  bp 的优先级利差）。
- **资产端**——购房者支付的 Flat 35  住房贷款利率（通常比融资端高 100-200  bp，取决于期限和产品）。
- **发放机构费用**——Flat 35  发放机构从 JHF 获得手续费和持续贷款服务收益，而不是传统银行赚取的净息差。

当 BOJ 人为压低长端利率时（YCC 时代 2016-2024），JHF 的融资端被压缩，而 Flat 35  客户利率仍锚定在 JGB-plus 结构上——项目仍可运行，但按短端利率 / 政策利率定价的民间可变利率住房贷款竞争非常激烈。当 BOJ 退出 YCC、长端利率上升时（2024-2026），JHF 的融资端变宽，Flat 35  利率上升，借款人在可变利率与固定利率之间的经济选择也随之变化。政策利率（BOJ 无担保隔夜拆借利率）抬升可变利率住房贷款曲线，从而缩小 Flat 35  固定利率主张的相对吸引力差距。

## 7. 地方银行贷款服务合作

JHF 并不直接零售 Flat 35 。发放由经批准的民间金融机构办理，这些机构包括：

- **巨型银行**——[[JapanFG/mufg|MUFG]]（Mitsubishi UFJ Bank）、[[JapanFG/smfg|SMFG]]（Sumitomo Mitsui Banking）、[[JapanFG/mizuho-fg|Mizuho Bank]]——不过巨型银行的 Flat 35  份额小于偏重零售的参与者。
- **地方银行**——日本各地许多 [[banking/regional-bank-consolidation-pattern|regional banks]] 将 Flat 35  纳入住房贷款产品组合，特别是在借款人希望锁定长期固定利率确定性时。
- **住房贷款银行 / 专业贷款机构**——ARUHI Corporation 是历史上占主导地位的 Flat 35  专业机构；SBI Aruhi（原 SBI Mortgage）、Rakuten Bank 和 Sony Bank 是主要的非传统发放机构。
- **信用金库 / 信用组合**——通过区域网点以较小规模参与。

贷款服务合作模式意味着，JHF 实质上将一种日本民间银行体系本来不会大规模发放的长期固定利率产品标准化（因为日本存款融资银行在结构上更偏好与存款负债匹配的短期可变利率住房贷款）。这是公共信用基础设施填补民间市场缺口的典型例子。

## 8. 边界案例

- **不是零售银行**——JHF 不吸收存款，没有银行意义上的分支机构，也不属于吸收存款机构意义上的 [[banking/INDEX|banking system]]。
- **不是旧 GHLC 页面**——可以引用遗留历史，但当前住房金融主题应路由到 JHF，而不是 GHLC。
- **不是中小企业信用保证**——中小企业保证属于 [[policy-finance/japan-credit-guarantee-system]] 和 [[policy-finance/national-federation-credit-guarantee-corporations]]。
- **不是农业 / 渔业信用**——这些主题使用 [[policy-finance/agriculture-credit-guarantee-system]] 和 [[policy-finance/fisheries-credit-guarantee-system]]。
- **不是 Flat 35  发放机构**——Flat 35  是 JHF 的产品，但由民间银行发放；具体银行的 Flat 35  营销不应路由到 JHF。

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-credit-guarantee-system]]
- [[policy-finance/national-federation-credit-guarantee-corporations]]
- [[policy-finance/agriculture-credit-guarantee-system]]
- [[policy-finance/fisheries-credit-guarantee-system]]
- [[policy-finance/okinawa-development-finance-corp]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[JapanFG/jfc]]
- [[JapanFG/jbic]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- JHF, "私たちについて" (https://www.jhf.go.jp/about/index.html).
- JHF, "組織の概要" (https://www.jhf.go.jp/about/organization/outline/index.html).
- JHF, business overview (https://www.jhf.go.jp/about/business/index.html).
- JHF, MBS investor disclosures.
- MLIT, "独立行政法人 住宅金融支援機構" (https://www.mlit.go.jp/about/jhf_.html).
- MOF, public-finance and FILP disclosures (https://www.mof.go.jp/).
- Flat 35  official portal (https://www.flat35.com/).

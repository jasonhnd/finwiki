---
source: policy-finance/japan-housing-finance-agency
source_hash: 19876f923f884943
lang: zh
status: machine
fidelity: ok
title: "日本住宅金融支援机构 (JHF)"
translated_at: 2026-06-19T06:09:18.171Z
---

# 日本住宅金融支援机构 (JHF)

## Wiki 路由

本条目位于 [[policy-finance/INDEX|policy-finance index]] 之下，作为日本的住房金融政策机构。请与 [[policy-finance/japan-policy-finance-system|Japan policy finance system]]（更广泛的公共信用边界）对照阅读，并与 [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]（证券化管道）配对。JHF 在结构上与 [[financial-regulators/jfc|JFC]]（中小企业 / 农林水产 / 小规模事业）和 [[financial-regulators/jbic|JBIC]]（国际金融）相区别 — 它是政策金融地图的住房金融通道。

## TL;DR

日本住宅金融支援机构（住宅金融支援機構，JHF）是日本的住房金融政策机构。在关闭了从事直接放贷的住宅金融公库（住宅金融公庫，GHLC）的 2007  民营化改革重组之后，JHF 作为独立行政法人被创设，以通过以下方式间接支持私营住房金融：（1）证券化支持 — 从私营贷款机构买入长期固定利率的 Flat 35  抵押贷款并向资本市场发行 MBS；（2）住房贷款保险 — 为私营贷款机构的住房贷款提供后盾；（3）在灾害恢复、老年人住房、城市更新、抗震改造等政策缺口领域的剩余直接放贷。请将本页用作 [[policy-finance/japan-policy-finance-system]] 中的住房信用通道；MBS 管道位于 [[structured-finance/jhf-mbs-mechanics]] 与 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]。

## 1. 机构概要

| 项目 | 内容 |
|---|---|
| 法律形态 | 独立行政法人 (Incorporated Administrative Agency) |
| 日文名称 | 独立行政法人住宅金融支援機構 |
| 设立 | 2007-04-01 (succeeding 住宅金融公庫 / GHLC after 2003 reform planning) |
| 所管 | MLIT (国土交通省) and MOF (財務省) joint supervision |
| 法令 | 独立行政法人住宅金融支援機構法 (2005) |
| 总部 | 東京都文京区後楽 |
| 主要业务 | 证券化支持、住房融资保险、直接放贷（政策缺口领域） |
| MBS发行 | Monthly JHF MBS Trust issuance — largest yen-denominated structured-paper program |
| FinWiki lane | [[policy-finance/INDEX|policy-finance]] (not a JapanFG company page; not a bank) |

## 2. 业务地图

| 业务 | 内容 | 交易对手 |
|---|---|---|
| 证券化支持（买入型） | 从私营贷款机构买入 Flat 35  固定利率抵押贷款；将其池化为 MBS 信托；向资本市场发行优先级 MBS。 | 私营发起机构（地方银行、大型银行、信用金库、抵押贷款公司）；MBS 投资者。 |
| 证券化支持（保证型） | 在不买入贷款的情况下为私营贷款机构的证券化提供保证。 | 私营贷款机构 / 证券化发起人。 |
| 住房融资保险 | 为私营贷款机构的住房贷款投保（违约 / 特定原因保险）。 | 银行、信用金库、地方贷款机构。 |
| 直接放贷 | 灾害恢复住房、城市更新项目、老年人住房、抗震改造、育儿住房支持。 | 合格的最终借款人与项目发起人。 |
| 业务委托 | 与私营伙伴银行协调的贷款服务、申请处理、催收。 | [[banking/regional-bank-consolidation-pattern|Regional banks]] 及其他伙伴金融机构。 |

## 3. Flat 35  产品系列

JHF 的旗舰产品系列是 **Flat 35**（フラット35）长期固定利率抵押贷款计划 — 由私营银行/贷款机构发起，由 JHF 买入，并通过 JHF MBS 信托证券化。子产品：

- **Flat 35** — 标准的 15–35 年固定利率抵押贷款；贷款价值比通常至多 90%（有更高 LTV 的变体），并具有技术标准的物业资格（隔热、抗震性、耐久性）。
- **Flat 35S** — 针对符合强化质量标准的物业的利率折扣版本（方案 A：高性能能源 / 抗震 / 无障碍；方案 B：标准质量提升）。S 折扣适用于最初的 5–10  年。
- **Flat 50** — 针对长寿命住房（長期優良住宅）的 36–50 年固定利率抵押贷款，作为面向优先考虑极长期限的购房者的利基产品引入。
- **Flat 35 子育てプラス** — 在 Flat 35 ／ Flat 35S 之上叠加的育儿家庭折扣。
- **Flat 35 借換** — 针对既有抵押贷款的再融资变体。
- **災害復興住宅融資** — 灾害恢复直接贷款（剩余的直接放贷渠道）。
- **リフォーム融資 / 高齢者向け返済特例** — 直接放贷的利基。

Flat 35  的发起量每年达数十万笔贷款，在高峰期年度放款达万亿日元规模；JHF MBS 发行是这一发起流的下游资金筹措腿。

## 4. 年度演变与 2007  的先民营化再重建的弧线

| Year | Event | Significance |
|---|---|---|
| 1950 | 住宅金融公庫 (GHLC) established | 从事直接放贷的公共住房金融机构；战后住房供给政策的锚。 |
| 1950–2000s | GHLC peak | 直接的抵押贷款机构 — 与私营银行竞争；持有庞大的抵押贷款账册。 |
| 2001 | Koizumi structural-reform agenda announced | 特殊法人改革；GHLC 被标记为转型对象。 |
| 2003 | 住宅金融公庫法改正 — direct-lending wind-down plan | GHLC 原则上停止新的直接放贷（有灾害 / 政策缺口例外）；向证券化支持模式过渡。 |
| 2005 | 独立行政法人住宅金融支援機構法 enacted | 作为继承机构的 JHF 的法律基础。 |
| 2007-04-01 | JHF established; GHLC dissolved | 「先民营化再重建」 — 直接的零售抵押贷款角色被取消；证券化支持与保险角色被创设；剩余的直接放贷为政策缺口而保留。 |
| 2007–2012 | Flat 35 ramp; MBS program established | 月度 JHF MBS 信托发行成为基准的结构化票据计划。 |
| 2011 | Tōhoku earthquake | 灾害恢复直接放贷渠道大规模启动；JHF 的恢复住房金融腿被重新激活。 |
| 2016 | NIRP / negative-rate era | 抵押贷款利率崩落；私营银行的浮动利率抵押贷款与 Flat 35 激烈竞争；Flat 35  份额受压。 |
| 2020–2022 | COVID-era housing-finance support | Flat 35  放款保持韧性；增加了一些宽限 / 还款灵活性。 |
| 2022–2024 | BOJ YCC adjustments → exit | 长期利率开始上升；Flat 35  利率逐渐上升，收窄与私营浮动利率的差距。 |
| 2024–2025 | Flat 35 reform — 子育てプラス expansion | 针对育儿家庭的定向折扣；与人口政策的对齐。 |
| 2024–2026 | BOJ short-rate normalization (post-NIRP) | 浮动利率抵押贷款重新定价；Flat 35  对浮动的利差重新均衡。 |

2007  的过渡最好读作「**直接放贷的民营化并重建为政策基础设施**」而非完全民营化：GHLC 具竞争性的直接零售抵押贷款账册被结清，但住房金融政策授权被重新构造为一个站在私营体系背后、提供证券化支持与保险的机构。

## 5. 证券化联系（JHF MBS）

JHF 的经济核心是月度 **JHF MBS 信托** 计划 — 完整管道见 [[structured-finance/jhf-mbs-mechanics]]。流程：

1. 私营发起机构（地方银行、大型银行、抵押贷款公司）应用 JHF 的承保与物业技术标准，向购房者批准一笔 Flat 35  贷款。
2. JHF 从发起机构买入合格贷款（买入型证券化支持计划）。
3. JHF 每月将买入的贷款池化为 MBS 信托。
4. JHF 向资本市场投资者（银行、人寿保险公司、养老基金、资产管理公司）发行优先级直通式 MBS。
5. 优先级 MBS 带有 JHF 的政府支持信用（实质上与主权挂钩）；相对 JGB 的利差通常较紧（历史上 10–30 bp 区间）。
6. 私营发起机构在服务协议下继续为贷款提供服务（催收、面向客户的运营）。

JHF MBS 计划是 **最大的日元计价结构化票据计划**，在规模上压倒私营 RMBS 发行，并为日元 RMBS 曲线提供基准。利差经济性见 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]。

## 6. ARR / 政策利率 利差经济性

JHF 的住房贷款保险与 Flat 35  证券化支持经济性取决于以下之间的利差：

- **资金筹措腿** — JHF MBS 票息（实质上为 JGB 挂钩利率加 10–30 bp 优先级利差）。
- **资产腿** — 面向购房者的 Flat 35  抵押贷款利率（通常视期限与产品比资金筹措腿高 100–200 bp）。
- **发起机构费** — Flat 35  发起机构从 JHF 获得费用与持续的服务利润，而非传统银行所获得的净息差。

当 BOJ 人为地将长期利率保持低位时（YCC 时代 2016–2024），JHF 的资金筹措腿被压缩，而 Flat 35  客户利率仍锚定于 JGB 加点结构 — 计划保持运作，但私营浮动利率抵押贷款（按短期利率 / 政策利率定价）激烈竞争。当 BOJ 退出 YCC 且长端利率上升时（2024–2026），JHF 的资金筹措腿扩大，Flat 35  利率上升，借款人的浮动对固定经济决策发生转变。政策利率（BOJ 无担保隔夜利率）抬升浮动利率抵押贷款曲线，收窄 Flat 35  固定利率主张的相对吸引力。

## 7. 地方银行服务伙伴关系

JHF 不直接零售 Flat 35 。发起由经批准的私营金融机构（取扱金融機関）完成，其中包括：

- **大型银行** — [[megabanks/mufg|MUFG]]（三菱 UFJ 银行）、[[megabanks/smfg|SMFG]]（三井住友银行）、[[megabanks/mizuho-fg|Mizuho Bank]] — 尽管大型银行的 Flat 35  份额小于专注零售的参与者。
- **地方银行** — 日本各地许多 [[banking/regional-bank-consolidation-pattern|regional banks]] 将 Flat 35  作为其抵押贷款产品组合的一部分提供，尤其是在借款人希望获得长期固定利率确定性的情况下。
- **抵押贷款银行 / 专业贷款机构** — ARUHI Corporation 是历史上占主导的 Flat 35  专业机构；SBI Aruhi（旧 SBI Mortgage）、乐天银行与索尼银行是主要的非传统发起机构。
- **信用金库 / 信用合作社** — 通过地方业务窗口以较小规模参与。

服务伙伴关系模式意味着 JHF 实质上标准化了一种日本私营银行体系不会自然大规模发起的长期固定利率产品（因为以存款为资金的日本银行在结构上偏好与存款负债相匹配的短期浮动利率抵押贷款）。这是公共信用基础设施填补私营市场缺口的教科书式范例。

## 8. 边界情形

- **并非零售银行** — JHF 不吸收存款，没有银行意义上的分行，也不是吸收存款机构意义上的 [[banking/INDEX|banking system]] 的一部分。
- **并非旧 GHLC 页** — 可引用遗留历史，但当前住房金融主题的路由应使用 JHF 而非 GHLC。
- **并非中小企业信用保证** — 中小企业保证属于 [[policy-finance/japan-credit-guarantee-system]] 与 [[policy-finance/national-federation-credit-guarantee-corporations]]。
- **并非农业 / 渔业信用** — 那些使用 [[policy-finance/agriculture-credit-guarantee-system]] 与 [[policy-finance/fisheries-credit-guarantee-system]]。
- **并非 Flat 35  发起机构** — Flat 35  是 JHF 的产品但由私营银行发起；特定银行的 Flat 35  营销不应路由至 JHF。

## 关联

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-credit-guarantee-system]]
- [[policy-finance/national-federation-credit-guarantee-corporations]]
- [[policy-finance/agriculture-credit-guarantee-system]]
- [[policy-finance/fisheries-credit-guarantee-system]]
- [[policy-finance/okinawa-development-finance-corp]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[financial-regulators/jfc]]
- [[financial-regulators/jbic]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出处

- JHF, "私たちについて" (https://www.jhf.go.jp/about/index.html).
- JHF, "組織の概要" (https://www.jhf.go.jp/about/organization/outline/index.html).
- JHF, business overview (https://www.jhf.go.jp/about/business/index.html).
- JHF, MBS investor disclosures.
- MLIT, "独立行政法人 住宅金融支援機構" (https://www.mlit.go.jp/about/jhf_.html).
- MOF, public-finance and FILP disclosures (https://www.mof.go.jp/).
- Flat 35 official portal (https://www.flat35.com/).

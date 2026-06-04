---
source: derivatives/structured-bond-japan-retail-issuance
source_hash: 6a3f258877ffbea2
lang: zh
status: machine
fidelity: ok
title: "结构化债券 日本零售发行"
translated_at: 2026-05-31T03:19:56.376Z
---

# 结构化债券 日本零售发行

## TL;DR

"结构化债券"（仕組債，*shikumisai*）是日语中对内嵌衍生品收益的面向零售固定收益产品的统称——通常包括带敲入障碍的股票挂钩票据（EB，*Equity Bond*）、货币挂钩存款、以折价行权价附带看跌的反向可转换债券，以及数字 / 区间累计票据。在日本长期低收益环境中，这些产品由巨型银行关联的证券公司（[[securities-firms/smbc-nikko|SMBC Nikko]]、[[megabanks/mizuho-bank|Mizuho]] Securities、MUFG / MUMSS）、独立零售券商（[[securities-firms/daiwa-sg|Daiwa]]、[[securities-firms/nomura-hd|Nomura]]）和地方银行大规模分销给**追逐收益的零售投资者**。**2022-2023 FSA 整顿**针对适当性和披露，对 [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/smbc-nikko|SMBC Nikko]] 和 [[securities-firms/daiwa-sg|Daiwa]] 子公司发出行政命令，迫使主要分销商暂停或限制向老年 / 低知识零售客户销售结构化债券，并将**适当性与披露**提升为结构性监管优先事项。新的零售发行自 2023 起急剧收缩。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the retail-structured-product distribution page, paired with [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in structured product mechanics]] for the deepest single-name EB analysis. Read it together with [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the credit-derivative ingredient (some structured bonds embed credit-linked tranches), [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the credit-spread building block, [[derivatives/japan-irs-market|Japan IRS market]] for the rates underlay, and [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve interaction with FX-linked products.

Cross-reference [[finance/INDEX|finance index]] for the broader capital-markets context, [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the institutional equity-linked counterpart, [[banking/INDEX|banking index]] for the megabank distribution context, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the institutional foreign-currency / structured-asset use, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer-side hedging plumbing.

### Core structured-bond categories

| 产品 | 日语术语 | 收益核心 |
|---|---|---|
| 带敲入障碍的股票债券（EB） | EB債 / 株価連動債 | 支付面值 + 票息，除非标的股票跌破敲入障碍，届时以股份或障碍后金额支付 |
| 自动赎回 EB / Express | オートコーラブル | 若标的在观察日突破自动赎回阈值，则支付加速票息并全额赎回；否则继续 |
| 反向可转换 | リバース・コンバーチブル | 内嵌看跌期权空头的高票息债券；若股票低于行权价则以股份赎回 |
| 货币挂钩存款（二重通货预金） | 二重通貨預金 / デュアルカレンシー | 存款支付高日元收益；本金按预定汇率以非日元货币赎回（内嵌货币空头） |
| 强力反向双货币票据（PRDC） | パワーリバース | 长期外汇挂钩的日元支付 / 美元支付票据；复杂的百慕大可赎回结构 |
| 信用挂钩票据（CLN） | クレジット・リンク債 | 以参考信用不违约为条件支付增强票息的债券 |
| 区间累计票据 | レンジアクルアル | 票息仅在参考利率 / 汇率 / 指数保持在区间内的日子累计 |
| 数字 / 单触票据 | デジタル | 若参考触及 / 超过阈值则支付大额票息，否则无 |
| 股指挂钩票据（一篮子） | バスケット型 | 收益挂钩最差表现一篮子（通常 Nikkei 225, S&P 500, EuroStoxx 50） |

在 2018-2022 峰值期间，EB 敲入（尤其是以单一日本股票或最差表现一篮子为标的的自动赎回）按成交量是占主导的零售分销产品。

### Structure variations

| 特征 | 说明 |
|---|---|
| 单一名称标的 | 大多数分销的零售 EB 以单一日本上市股票为参考（如丰田、索尼、软银、NTT） |
| 最差表现一篮子 | 三到五个参考资产；收益取最差表现，风险增加 |
| 自动赎回阈值 | 通常为初始参考的 100 百分比（若在观察日上涨则按面值 + 票息偿还） |
| 敲入障碍 | 通常为初始参考的 50-70 百分比 |
| 票息 | 条件票息（仅在无敲入触发时支付）或无条件固定票息 |
| 期限 | 通常 3-5 年；自动赎回特性缩短预期存续期 |
| 货币 | 面向日本零售以日元发行；部分以美元或欧元发行用于货币叠加变体 |
| 可赎回特性 | 部分结构为百慕大可赎回 |

### Issuer set

| 发行方类型 | 角色 |
|---|---|
| 全球银行（特殊目的载体） | Goldman、JPMorgan、Morgan Stanley、BNP Paribas、Credit Suisse（历史上）、HSBC、Citi、Barclays 通过 SPV 计划发行 |
| 日本注册的巨型银行计划 | [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（经 SMFG）、[[megabanks/mizuho-bank|Mizuho]]（经 Mizuho FG）通过专门计划发行 |
| 欧洲银行发行方 | Société Générale、BNP、Credit Suisse、UBS 历史上在结构化产品创设中占主导 |
| 美国银行发行方 | Goldman、JPM、MS、Citi |
| 东京上市的特殊目的发行载体 | 较少见；大多数结构化债券为税务 / 监管效率而离岸发行 |

### Distribution channel

| 分销商 | 分销模式 |
|---|---|
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 巨型银行系全能券商；2022 期间的关键分销商|
| Mizuho Securities（经 [[megabanks/mizuho-bank|Mizuho]] FG） | 巨型银行系全能券商；2022 期间的关键分销商|
| MUFG / MUMSS（经 [[megabanks/mufg|MUFG]]） | 巨型银行 / 全球合资券商；主要分销商 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 独立零售券商；历史上在结构化债券分销中非常活跃 |
| [[securities-firms/nomura-hd|Nomura Securities]] | 最大的零售券商；重要分销商 |
| 地方银行（次级分销） | 次级分销来自巨型银行证券合作伙伴的结构化产品 |
| 在线券商 | 在复杂结构化债券上较不活跃；部分普通结构化存款 |

### Arranger fees

结构化债券的安排方和分销商费用历史上是产品经济性的重要部分，内嵌于发行价与公允价值的差额中。**费用负担**（通常为名义额的 3-10 百分比，复杂结构有时更高）成为 FSA 整顿的关键要素。

## Hedging mechanics

发行方通常与交易商背对背对冲内嵌衍生品：

| 头寸 | 对冲 |
|---|---|
| 发行方持有债券多头、内嵌衍生品空头（敲入看跌、自动赎回看涨、外汇期权等） | 发行方与采取相反头寸的交易商进行背对背衍生品交易 |
| 交易商仓库 | 交易商汇集敞口，在股票 / 外汇 / 信用市场进行 delta / vega / 障碍 gamma 对冲 |
| 风险再分配 | 交易商可通过指数交易、上市期权、OTC 交易商间交易再分配风险 |

对于日本单一名称 EB，当许多票据共用同一参考名称时，交易商在标的股票中的对冲可成为显著的流量（例如集中的软银 EB 发行造成大量软银股票对冲流量）。

### Mechanics

| 特征 | 说明 |
|---|---|
| 本金货币 | 日元（存款） |
| 收益 | 相对现行日元存款利率的增强日元票息（如年化 3-8 百分比） |
| 赎回选择权 | 到期时，发行方按面值以日元赎回，或按预定汇率以非日元货币赎回 |
| 发行方选择 | 发行方赎回对其更便宜的一方（即投资者收到价值较低的一方） |
| 内嵌衍生品 | 投资者隐含地持有日元看跌 / 非日元看涨期权的空头 |

常见参考货币：USD、AUD、NZD、EUR、GBP、ZAR、TRY（历史上更高收益的尾部）。鉴于土耳其里拉的波动性，TRY 挂钩变体引起了执法和消费者保护的关注。

### Risk

若非日元货币相对行权价对日元大幅贬值，投资者收到的非日元货币价值低于原始日元本金。损失可能相当可观。

### Distribution

货币挂钩存款历史上通过巨型银行零售柜台、地方银行和邮局渠道分销。封装的简单性（"存款"的表述）往往对零售投资者掩盖了内嵌的空头期权风险。

### Mechanics

| 特征 | 说明 |
|---|---|
| 票息 | 整个存续期支付固定高票息 |
| 到期收益 | 若参考股票高于行权价 → 按面值赎回；若低于 → 按行权价交付股份（即投资者收到价值低于面值的股份） |
| 内嵌衍生品 | 投资者持有以行权价为执行价的参考股票看跌期权空头 |
| 参考 | 单一股票或最差表现一篮子 |

机理上与 EB 类似，但表述上更像债券，看跌行权通常在到期时进行，而非在存续期内通过敲入障碍。

### Background

FSA 自 2017, 在其**"客户优先"**（顧客本位の業務運営，*kokyaku honi no gyōmu un'ei*）倡议下日益审查复杂产品的零售分销。调查揭示了结构化债券复杂度与零售投资者知识 / 经验之间的普遍错配。

### 2022 FSA findings

FSA 公开材料（2022 年 10 月）和 JSDA 自律更新记录了：

| 发现 | 关切 |
|---|---|
| 知识错配 | 零售买家往往缺乏对障碍期权机理和尾部风险的理解 |
| 费用披露 | 安排方 / 分销商费用负担未充分披露 |
| 适当性失败 | 销售给与产品风险不匹配的老年退休者、低知识客户、保守投资者 |
| 集中度 | 对同一客户反复销售类似产品造成集中的尾部敞口 |
| 与替代品比较 | 未能展示能实现类似收益增强的更便宜 / 更简单的替代品 |

### Administrative orders

在 2022 晚期至 2023, 之间，FSA 对多家主要分销商发出业务改善命令和行政处分：

| 分销商 | 处分类别 |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | 关于结构化债券销售流程的业务改善命令 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 业务改善命令；高级管理层问责 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 业务改善命令；适当性流程审查 |
| 多家地方银行证券部门 | 局部性行政处分 |

分销商自愿暂停或大幅限制向零售销售结构化债券。数家公司完全退出零售结构化债券业务，或将其限制于合格投资者渠道。

### JSDA self-regulation

[[securities/japan-prime-brokerage-and-institutional-financing|JSDA]] 收紧了关于结构化债券适当性的自律指引：

| 领域 | 指引变更 |
|---|---|
| 适当性评估 | 更严格的知识 / 经验测试；书面确认要求 |
| 披露 | 标准化风险披露模板；明确的"损失情景"图示 |
| 冷静期 | 增强的冷静期和追索渠道 |
| 记录 | 强制记录 / 存档销售对话 |
| 老年客户保护 | 针对超过既定年龄阈值客户的特别程序 |

### Volume impact

JSDA / FSA 公开汇总数据表明，零售结构化债券销售量从 2022 到 2023大幅收缩。分销从"敲入 EB"产品转向更简单的结构化存款和 / 或更高评级的普通债券。

## Comparison to global structured-product retail markets

| 司法辖区 | 零售结构化产品市场特征 |
|---|---|
| 日本（2023之前） | 非常大的零售量；巨型银行关联券商为主导分销商 |
| 日本（2023之后） | 大幅收缩；对老年 / 低知识零售的限制 |
| 欧盟（PRIIPs 2018之后） | 强制 KID 披露；量回升但披露负担上升 |
| 英国（FCA 2014之后） | 适当性规则收紧；量大幅萎缩 |
| 香港（雷曼迷你债 2008之后） | 引入严格的适当性和集中度规则 |
| 美国 | 多为机构 / 合格投资者；零售结构化产品经由特定分销渠道 |

日本的 2023 整顿代表着向全球零售保护标准的显著追赶，而非独特的监管做法。

## Institutional structured-bond market

零售之外，机构结构化债券市场继续服务于：

- 寻求收益增强信用产品的养老基金和寿险公司（受 ESR / 会计约束，见 [[insurance/japan-life-insurance-alm-overview|life ALM]]）；
- 使用结构化负债或资产封装的企业财务运营；
- 出于特定叠加或收益增强目标的资产管理人组合。

机构结构化债券适用不同的适当性标准（FIEA 下的合格机构投资者框架），并以有限的监管摩擦继续。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Customer First operating-principles policy materials; 2022-2023 supervisory action public releases.
- FSA: business-improvement order public releases on major distributors.
- JSDA: self-regulatory updates on structured-bond distribution; member rules and disclosure templates.
- BOJ: deposit and money-market statistics relevant to structured-deposit yield benchmarks.
- SMBC Nikko, Daiwa, Nomura: public IR materials on retail wealth-management business segment trends.

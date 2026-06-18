---
source: derivatives/structured-bond-japan-retail-issuance
source_hash: 642523bec383e99a
lang: zh
status: machine
fidelity: ok
title: "结构化债券日本零售发行"
translated_at: 2026-06-18T23:33:48.345Z
---

# 结构化债券日本零售发行

## TL;DR

「结构化债券」（仕組債，*shikumisai*）是指嵌入衍生品收益结构的零售型固定收益产品的日语统称——典型包括带敲入障碍的股票联结票据（EB，*Equity Bond*）、货币联结存款、以折价行权价嵌入看跌的反向可转换债，以及数字／区间累计票据。这些产品在日本长期的低利率环境下，由大型银行系券商（[[securities-firms/smbc-nikko|SMBC Nikko]]、[[megabanks/mizuho-bank|Mizuho]] 证券、MUFG / MUMSS）、独立零售券商（[[securities-firms/daiwa-sg|Daiwa]]、[[securities-firms/nomura-hd|Nomura]]）及地区银行向**追逐收益的零售投资者**大规模销售。**2022-2023 的 FSA 整治**针对适当性与披露展开，导致对 [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]] 子公司发出行政命令，迫使主要销售机构暂停或限制向高龄／知识匮乏零售客户销售结构化债券，并将**适当性与披露**提升为结构性的监管优先事项。新增零售发行自 2023 起急剧萎缩。

## Wiki 路径

本条目归属于 [[derivatives/INDEX|derivatives index]]，作为零售结构化产品的销售页面，与最深入的单一名称 EB 分析 [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in structured product mechanics]] 配对。信用衍生品成分（部分结构化债券嵌入信用联结分层）请配合 [[derivatives/japan-cds-market-overview|Japan CDS market overview]] 阅读，信用利差构成模块请配合 [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]，利率底层请配合 [[derivatives/japan-irs-market|Japan IRS market]]，与 FX 联结产品的融资曲线交互请配合 [[derivatives/yen-basis-swap-market|yen basis swap market]] 阅读。

更广泛的资本市场背景请交叉参考 [[finance/INDEX|finance index]]，机构股票联结对应方请参考 [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]，大型银行销售背景请参考 [[banking/INDEX|banking index]]，机构外币／结构化资产用途请参考 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]，交易商侧对冲管道请参考 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]]。

### 核心结构化债券类别

| Product | Japanese term | Payoff core |
|---|---|---|
| 带敲入障碍的股票债券（EB） | EB債 / 株価連動債 | 除非标的股票跌破敲入障碍，否则支付面值 + 票息; 一旦跌破则以股票或经障碍处理后的金额支付 |
| 自动赎回 EB / Express | オートコーラブル | 若标的在观察日突破自动赎回阈值，支付加速票息与全额赎回; 否则继续 |
| 反向可转换 | リバース・コンバーチブル | 嵌入卖出看跌期权的高票息债; 股票低于行权价时以股票赎回 |
| 货币联结存款（双重货币存款） | 二重通貨預金 / デュアルカレンシー | 存款支付高日元收益; 本金按预定汇率以非日元货币赎回（嵌入货币空头） |
| 动力反向双货币票据（PRDC） | パワーリバース | 长期 FX 联结的日元支付／美元支付票据; 复杂的百慕大可赎回结构 |
| 信用联结票据（CLN） | クレジット・リンク債 | 以参照信用不违约为条件支付增强票息的债券 |
| 区间累计票据 | レンジアクルアル | 仅在参照利率／FX／指数停留于区间内的日子累计票息 |
| 数字／一触式票据 | デジタル | 若参照触及／超过阈值则支付大额票息，否则无 |
| 股票指数联结票据（一篮子） | バスケット型 | 收益联结于最差表现一篮子（典型为 Nikkei 225, 、S&P 500, 、EuroStoxx 50） |

EB 敲入（尤其是针对单一日本股票或最差表现一篮子的自动赎回）在峰值的 2018-2022 期间，按交易量是零售销售的主力产品。

### 结构变体

| Feature | Description |
|---|---|
| 单一名称标的 | 大多数销售的零售 EB 参照单一日本上市股票（例如丰田、索尼、软银、NTT） |
| 最差表现一篮子 | 三至五个参照资产; 收益取最差表现，风险增大 |
| 自动赎回阈值 | 通常为初始参照的 100 %（若观察日上涨则按面值 + 票息偿还） |
| 敲入障碍 | 通常为初始参照的 50-70 % |
| 票息 | 条件票息（仅在无敲入触发时支付）或无条件固定票息 |
| 期限 | 通常 3-5 年; 自动赎回特征缩短预期存续期 |
| 货币 | 面向日本零售以 JPY 发行; 部分作为货币叠加变体以 USD 或 EUR 发行 |
| 可赎回特征 | 部分结构为百慕大可赎回 |

### 发行人集合

| Issuer type | Role |
|---|---|
| 全球银行（特殊目的载体） | Goldman、JPMorgan、Morgan Stanley、BNP Paribas、Credit Suisse（历史上）、HSBC、Citi、Barclays 经由 SPV 项目发行 |
| 日本注册的大型银行项目 | [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（经由 SMFG）、[[megabanks/mizuho-bank|Mizuho]]（经由瑞穗 FG）经由专用项目发行 |
| 欧洲银行发行人 | Société Générale、BNP、Credit Suisse、UBS 在结构化产品发起中历史上占主导 |
| 美国银行发行人 | Goldman、JPM、MS、Citi |
| 东京上市的特殊目的发行载体 | 较不常见; 大多数结构化债券为税务／监管效率而在离岸发行 |

### 销售渠道

| Distributor | Distribution model |
|---|---|
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 大型银行系全方位服务券商; 经由 2022 的主要销售机构 |
| 瑞穗证券（经由 [[megabanks/mizuho-bank|Mizuho]] FG） | 大型银行系全方位服务券商; 经由 2022 的主要销售机构 |
| MUFG / MUMSS（经由 [[megabanks/mufg|MUFG]]） | 大型银行／全球合资券商; 主要销售机构 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 独立零售券商; 历史上在结构化债券销售中非常活跃 |
| [[securities-firms/nomura-hd|Nomura Securities]] | 最大的零售券商; 可观的销售机构 |
| 地区银行（次销售） | 次销售来自大型银行证券伙伴的结构化产品 |
| 在线券商 | 在复杂结构化债券方面较不活跃; 部分普通结构化存款 |

### 安排人费用

结构化债券的安排人与销售机构费用历史上占产品经济性的可观部分，嵌入发行价对公允价值的缺口之中。**费用负担**（通常为名义本金的 3-10 %，复杂结构有时更高）成为 FSA 整治的关键要素。

## 对冲机制

发行人通常将嵌入的衍生品与交易商进行背对背对冲：

| Position | Hedge |
|---|---|
| 发行人持有债券多头、嵌入衍生品空头（敲入看跌、自动赎回看涨、FX 期权等） | 发行人与持有相反头寸的交易商签订背对背衍生品交易 |
| 交易商仓储 | 交易商汇总敞口，在股票／FX／信用市场运营 delta / vega / 障碍-gamma 对冲 |
| 风险再分配 | 交易商可经由指数交易、上市期权、OTC 银行间交易再分配风险 |

对于日本单一名称 EB，当众多票据共享同一参照名称时（例如集中的软银 EB 发行会产生可观的软银股票对冲流），交易商在标的股票上的对冲可能成为一股可观的流量。

### 机制

| Feature | Description |
|---|---|
| 本金货币 | JPY（存款） |
| 收益 | 相对于当时 JPY 存款利率的增强 JPY 票息（例如年化 3-8 %） |
| 赎回选择权 | 到期时，发行人以面值用 JPY 赎回，或按预定汇率用非日元货币赎回 |
| 发行人选择 | 发行人以对发行人更便宜的一方赎回（即投资者收到价值更低的一方） |
| 嵌入衍生品 | 投资者隐含为 JPY 看跌／非日元看涨期权的空头 |

常见参照货币：USD、AUD、NZD、EUR、GBP、ZAR、TRY（历史上更高收益的尾部）。鉴于土耳其里拉的波动性，TRY 联结变体引来了执法与消费者保护的关注。

### 风险

若非日元货币相对于 JPY、相对于行权价大幅贬值，投资者收到的非日元货币价值低于原始 JPY 本金。损失可能相当可观。

### 销售

货币联结存款历史上经由大型银行零售柜台、地区银行及邮局渠道销售。包装的简单性（「存款」的措辞）往往向零售投资者掩盖了嵌入的卖出期权风险。

### 机制

| Feature | Description |
|---|---|
| 票息 | 存续期内支付的固定高票息 |
| 到期收益 | 若参照股票高于行权价 → 面值赎回; 若低于 → 按行权价交付股票（即投资者收到价值低于面值的股票） |
| 嵌入衍生品 | 投资者为参照股票在行权价处的看跌期权空头 |
| 参照 | 单一股票或最差表现一篮子 |

机制上与 EB 类似，但更以债券化的方式措辞，看跌行权通常在到期时而非经由期中的敲入障碍。

### 背景

FSA 在其自 2017, 以来的**「客户优先」**（顧客本位の業務運営，*kokyaku honi no gyōmu un'ei*）倡议下，日益审视复杂产品的零售销售。调查揭示了结构化债券复杂性与零售投资者知识／经验之间的广泛不匹配。

### 2022 的 FSA 发现

FSA 公开资料（2022年 10 月）及 JSDA 自律更新记录了：

| Finding | Concern |
|---|---|
| 知识不匹配 | 零售买家常缺乏对障碍期权机制与尾部风险的理解 |
| 费用披露 | 安排人／销售机构费用负担未充分披露 |
| 适当性失败 | 销售给高龄退休者、知识匮乏客户、与产品风险不匹配的保守型投资者 |
| 集中 | 向同一客户反复销售类似产品造成集中的尾部敞口 |
| 与替代方案比较 | 未能提示能实现类似收益增强的更便宜／更简单替代方案 |

### 行政命令

在 2022 末至 2023, 期间，FSA 对多家主要销售机构发出业务改善命令与行政处分：

| Distributor | Action category |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | 关于结构化债券销售流程的业务改善命令 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 业务改善命令; 高级管理层问责 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 业务改善命令; 适当性流程审查 |
| 多家地区银行证券部门 | 局部行政处分 |

销售机构自愿暂停或大幅限制向零售客户销售结构化债券。数家公司完全退出零售结构化债券业务，或将其限定于合格投资者渠道。

### JSDA 自律

[[securities/japan-prime-brokerage-and-institutional-financing|JSDA]] 收紧了关于结构化债券适当性的自律指引：

| Area | Guidance change |
|---|---|
| 适当性评估 | 更严格的知识／经验测试; 书面确认要求 |
| 披露 | 标准化风险披露模板; 明确的「损失情景」图示 |
| 冷静期 | 强化的冷静期与申诉渠道 |
| 记录 | 强制记录／存档销售对话 |
| 高龄客户保护 | 针对超过既定年龄阈值客户的特别程序 |

### 交易量影响

公开的 JSDA / FSA 汇总数据显示，零售结构化债券销售量从 2022 至 2023大幅萎缩。销售从「敲入 EB」产品转向更简单的结构化存款及／或更高评级的普通债券。

## 与全球结构化产品零售市场的比较

| Jurisdiction | Retail structured-product market character |
|---|---|
| 日本（2023以前） | 极大规模的零售交易量; 大型银行系券商为主导销售机构 |
| 日本（2023以后） | 大幅萎缩; 对高龄／知识匮乏零售客户的限制 |
| 欧盟（PRIIPs 2018以后） | KID 披露强制化; 交易量回升但披露负担上升 |
| 英国（FCA 2014以后） | 适当性规则收紧; 交易量实质性萎缩 |
| 香港（雷曼迷你债 2008以后） | 引入严格的适当性与集中规则 |
| 美国 | 大多面向机构／合格投资者; 零售结构化产品经由特定销售渠道 |

日本 2023 的整治代表着对全球零售保护标准的可观追赶，而非一种独特的监管路径。

## 机构结构化债券市场

在零售之外，机构结构化债券市场因以下而持续：

- 寻求收益增强型信用产品的养老金基金与寿险公司（受 ESR ／会计约束，参见 [[insurance/japan-life-insurance-alm-overview|life ALM]]）;
- 使用结构化负债或资产包装的事业公司资金运营;
- 出于特定叠加或收益增强目的的资产管理人组合。

机构结构化债券受不同的适当性标准（FIEA 下的合格机构投资者框架）约束，并在有限的监管摩擦下持续。

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

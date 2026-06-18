---
source: money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending
source_hash: e1fbce229372a7dc
lang: zh
status: machine
fidelity: ok
title: "日本回购交易结构：现先（gensaki）与现金担保债券借贷的对比"
translated_at: 2026-06-18T15:47:13.947Z
---

# 日本回购交易结构：现先（gensaki）与现金担保债券借贷的对比

## Wiki 路径

本词条归属于 [[money-market/INDEX|money-market index]]。请将其与 [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] 对照阅读——本词条深入展开的市场层面概览即在该页，另与 [[money-market/call-market-structure|uncollateralized vs collateralized call market]] 对照以厘清担保与无担保的边界，并将证券借贷的重叠部分引向 [[securities/japan-stock-lending-market-route|the stock-lending market route]]。清算层为 [[securities/japan-securities-clearing-corp|JSCC]]。

## 摘要（TL;DR）

在日本，"回购"（レポ）一词是一个统称，涵盖两种法律性质各异、但都以债券为标的实现有担保短期融资的合约形式：

- **现先（現先 / 買戻条件付売買）**：一种卖出并回购的交易——在卖出证券的同时约定在未来某一日期以固定价格将其购回。经济实质上是一笔有担保贷款，法律上则是一对完全买卖交易。
- **现金担保债券借贷（現金担保付債券貸借），历史上称为*现担（gentan）*回购**：一种证券借贷，借入方以现金作为担保，并支付/收取借贷费或回扣（rebate）。法律上属于借贷协议，而非买卖。

两者都既可以是 **GC（一般担保，general collateral）**融资交易，也可以是 **SC（特定担保，special collateral）**针对特定券种的交易——该叠加维度在 [[money-market/jgb-repo-market-japan|repo market overview]] 中说明。对 FinWiki 而言，关键的阅读原则是：*法律形式*（现先与现金担保借贷）和*担保特定性*（GC 与 SC）是两个相互独立的维度，而日本的回购数据将两者混合在一起。

## 两种法律形式

| 维度 | 现先（現先） | 现金担保债券借贷（現金担保付債券貸借） |
|---|---|---|
| 法律性质 | 附回购协议的卖出（两笔完全买卖交易）。 | 以现金担保作担保的证券借贷。 |
| 价格表达 | 回购利率内嵌于期初/期末价差之中。 | 现金担保上的借贷费（貸借料）或回扣率。 |
| 现金端 | 买方为债券支付现金；到期时反向操作。 | 现金借入方就所借债券提供现金作为担保。 |
| 文件 | 债券回购交易标准协议；其更新后的形式与全球 GMRA 式主协议保持一致。 | 附现金担保条款的债券借贷协议。 |
| 历史角色 | 日本传统的回购形式。 | 于 1989 发明，旨在以*借贷*协议提供回购的经济效果，并规避当时适用的有价证券交易税。 |

现金担保借贷形式（现担）之所以成为主流，正是因为它规避了适用于完全卖出交易的有价证券交易税。在交易税被废止、回购文件框架现代化之后，一种更新后的"新现先"（新現先）形式得到推广，以使日本的实务与国际回购标准（终止净额结算、追加保证金、替换）接轨。两种形式至今仍在活跃使用，这也是为何日本的回购市场被视为一个经济市场、却有两条合约轨道的原因。

## 新现先与旧实务的对比

"新现先"（新現先）改革之所以重要，是因为较旧的日本回购实务缺乏全球回购中属标准配置的特性：

- **追加保证金/盯市（mark-to-market）**：通过交换变动保证金来管理担保品价值的变动。
- **终止净额结算（close-out netting）**：在交易对手违约时可强制执行的净额结算。
- **替换（substitution）**：在交易存续期间调换担保品的能力。
- **后续担保品分配**：一种篮子式分配，由一组券种（而非单一指定券种）支持该笔交易——是 GC 融资的主力工具。

这些特性使日本的现先更接近以 GMRA 文件记录的国际回购，这对跨境参与，以及对交易商资产负债表和 [[derivatives/japan-irs-market|rate-derivative]] 对冲账簿如何为日本国债（JGB）库存融资而言至关重要。

## 两种形式下的 GC 与 SC

一般担保与特定担保的区分（在 [[money-market/jgb-repo-market-japan|repo overview]] 中详述）适用于*两种*法律形式：

| | GC（一般担保） | SC（特定担保） |
|---|---|---|
| 目的 | 现金融资；任何可接受的券种均可。 | 借入特定的 JGB 券种。 |
| 利率信号 | 宽口径融资成本；跟随短期利率环境。 | 券种的特定性（specialness）；需求旺盛时，一只稀缺的 SC 券种可能以特殊价（更低的回购利率）成交。 |
| 两种形式 | 一笔 GC 交易既可以是现先，也可以是现金担保借贷。 | 一笔 SC 交易同样可以是任一形式。 |

因此，解读压力时需要确认*哪一维度*在变动：GC 全局性的融资紧张，与某只 JGB 券种在 SC 上变得稀缺，是两种不同的信号。

## 结算与清算

| 要素 | 解读 |
|---|---|
| 结算 | JGB 的各端通过中央 JGB 簿记登记与资金划转的底层系统结算；现金与证券的 DVP 通道见 [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET FTS / RTGS settlement]]。 |
| 结算周期 | 日本的 JGB 现券与回购结算采用缩短后的周期（市场对完全买卖的 JGB 改为 T+1 ，回购周期也相应缩短），由此压缩了交割失败风险与日内流动性的时间窗口。 |
| 中央清算 | JGB 回购可更替（novate）至 [[securities/japan-securities-clearing-corp|JSCC]]（即原 JGBCC 职能），由其承接义务并就已清算的 JGB 及 JGB 回购交易实现交易对手风险的互助分担。 |
| 中介 | [[money-market/tanshi-company-business-model|Tanshi companies]] 与 [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 在交易商交易台之外，对债券回购与现先进行中介。 |

## 为何这对 FinWiki 重要

- **数据解读**：日本央行（BoJ）的证券融资统计，是在对借贷费/回扣率作出调整后，将回购与现金担保债券借贷合并统计的。因此一项标题为"回购"的余额实际混合了两种法律形式。
- **跨市场解读**：回购利率是与无担保 [[money-market/call-market-structure|call rate]] 并列的有担保融资成本；GC 回购对隔夜拆借（call）的利差是一个受关注的融资信号。
- **担保品传导**：这一层将 [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]、JGB 市场功能与交易商资产负债表承载能力连接起来。日本央行的证券借贷便利（Securities Lending Facility）专门与 SC 稀缺性相互作用。

## 阅读清单

1。将*法律形式*（现先与现金担保借贷）与*担保品维度*（GC 与 SC）区分开；二者相互独立。
2。当资料中出现"现担（gentan）"时，将其读作现金担保债券借贷形式；"新现先（shin-gensaki / new gensaki）"则是现代化后的回购形式。
3。不要将回购利率当作无担保拆借（call）利率——它们是不同的工具、承担不同的风险。
4。要观察券种稀缺性，应看 SC 回购与证券借贷便利的使用情况，而非 GC 的融资水平。
5。引用当前余额时，请援引具体的日本央行证券融资发布稿；这些数字是有时点性的。

## 与日本金融集团（JapanFG）的关联

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 是核心的债券回购与现先中介，亦为证券融资专门机构。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 与 [[financial-regulators/ueda-yagi-tanshi]] 在拆借（call）与商业票据（CP）活动旁侧从事债券回购的经纪业务。
- 证券公司 [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/mizuho-securities]] 与 [[securities-firms/mufg-mums]] 通过现先与现金担保借贷为 JGB 库存融资。
- 大型银行 [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 通过担保品管理与准备金余额而承受敞口。
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] 驱动短期利率环境，以及两种形式之下的担保品框架。

## 边界情形

- **现先与现金担保借贷**：卖出并回购，与以现金作担保的证券借贷；经济实质相同，但法律结构与定价惯例不同。
- **回购与担保拆借**：两者都有担保，但回购是一项证券融资交易（卖出回购或现金担保借贷），而担保拆借则是以质押担保品的有担保银行间拆借；见 [[money-market/call-market-structure|the call segmentation page]]。
- **GC 与 SC**：融资驱动与券种驱动；是叠加在任一法律形式之上的维度。
- **回购与股票借贷**：JGB 回购与股票证券借贷是不同的市场；股票借贷引向 [[securities/japan-stock-lending-market-route|the stock-lending route]]。

## 相关条目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/boj-net-funds-transfer-system-rtgs-settlement]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[derivatives/japan-irs-market]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/japan-securities-finance]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 资料来源

- 日本银行：日本证券融资交易统计说明（回购与现金担保债券借贷的统计范围、借贷费/回扣率调整）。
- 日本银行：货币市场概览页面。
- ICMA：《亚洲回购市场指南——日本》（现先、现担/现金担保借贷、新现先、GC/SC、文件）。
- 日本证券金融株式会社：债券回购与现先交易业务说明。
- 日本证券清算机构：JGB 清算产品（对 JGB 及 JGB 回购交易的义务承接）。

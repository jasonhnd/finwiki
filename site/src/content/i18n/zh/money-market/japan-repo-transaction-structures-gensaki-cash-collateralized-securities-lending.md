---
source: money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending
source_hash: 58564395aead7d5e
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本回购交易结构：现先 vs 现金担保债券借贷"
translated_at: 2026-06-05T00:00:00.000Z
---
# 日本回购交易结构：现先 vs 现金担保债券借贷

## 维基路径

本条目归于 [[money-market/INDEX|money-market index]] 之下。关于它所深入展开的市场级概览，请对照 [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] 阅读；关于有担保 vs 无担保的边界，请参阅 [[money-market/japan-uncollateralized-vs-collateralized-call-market|uncollateralized vs collateralized call market]]；与证券借贷的重叠请引向 [[securities/japan-stock-lending-market-route|the stock-lending market route]]。清算层是 [[securities/japan-securities-clearing-corp|JSCC]]。

## TL;DR

在日本，"回购"（レポ）一词是两种法律上不同、但都实现以债券为抵押的有担保短期融资的合同形态的统称：

- **现先（現先 / 買戻条件付売買）**：一种卖出回购交易 —— 证券被卖出，同时约定在未来某日以固定价格将其购回。经济上是有担保贷款，法律上是一对直接买卖。
- **现金担保债券借贷（現金担保付債券貸借），历史上称为 *现担（gentan）* 回购**：一种证券借贷，借入方以现金作为担保，并支付 / 收取借贷费或回扣。法律上是借贷协议，而非买卖。

两者都可以是 **GC（一般担保品）** 融资交易，或 **SC（特定担保品）** 特定券交易 —— 该叠加在 [[money-market/jgb-repo-market-japan|repo market overview]] 中论述。对FinWiki而言，关键的阅读规则是：*法律形态*（现先 vs 现金担保借贷）与 *担保品特定性*（GC vs SC）是两个独立的轴，而日本的回购数据将两者混合在一起。

## 两种法律形态

| 维度 | 现先（現先） | 现金担保债券借贷（現金担保付債券貸借） |
|---|---|---|
| 法律性质 | 带回购协议的卖出（两笔直接买卖）。 | 以现金担保品保全的证券借贷。 |
| 定价表达 | 嵌入起始 / 终了价差中的回购利率。 | 现金担保品上的借贷费（貸借料）或回扣率。 |
| 资金端 | 买方为债券支付现金；到期反转。 | 现金借入方就借入的债券以现金作为担保。 |
| 文件 | 债券回购交易的标准协议；更新形态与全球GMRA式主协议对齐。 | 带现金担保条款的债券借贷协议。 |
| 历史角色 | 传统的日本回购形态。 | 1989年发明，旨在以 *借贷* 协议提供回购经济性，并规避当时适用的有价证券交易税。 |

现金担保借贷形态（现担）之所以占据主导，正是因为它规避了适用于直接卖出的有价证券交易税。在交易税被废除、回购文件框架被现代化之后，为使日本实务与国际回购标准（终止净额结算、保证金、替换）对齐，一种更新的"新现先"（新現先）形态得到推广。两种形态都仍在活跃使用，这正是日本回购市场被解读为一个具有两条合同轨道的经济市场的原因。

## 新现先 vs 旧实务

"新现先"（新現先）改革之所以重要，是因为旧有的日本回购实务缺乏全球回购中标准的特性：

- **保证金 / 盯市**：交换变动保证金以管理担保品价值变动。
- **终止净额结算**：在交易对手违约时可执行的净额结算。
- **替换**：在交易期间调换担保品的能力。
- **后续担保品分配**：一种篮子式分配，由一组券、而非单一指名券支持交易 —— GC融资的主力。

这些特性使日本的现先更接近以GMRA文件化的国际回购，这对跨境参与、以及交易商资产负债表与 [[derivatives/japan-irs-market|rate-derivative]] 对冲账簿如何为JGB库存融资而言至关重要。

## 跨两种形态的GC与SC

一般担保品 vs 特定担保品的区分（在 [[money-market/jgb-repo-market-japan|repo overview]] 中详述）适用于 *两种* 法律形态：

| | GC（一般担保品） | SC（特定担保品） |
|---|---|---|
| 目的 | 现金融资；任何可接受的券。 | 借入特定JGB券。 |
| 利率信号 | 广义融资成本；追踪短端利率环境。 | 券的特殊性；需求高企时，紧俏的SC券可以特殊价（较低回购利率）成交。 |
| 两种形态 | 一笔GC交易可以是现先，也可以是现金担保借贷。 | 一笔SC交易同样可以是任一形态。 |

因此，解读压力需要核查 *哪个轴* 发生了移动：GC层面的全面融资紧张，与某只JGB券在SC中变得特殊，是不同的信号。

## 结算与清算

| 要素 | 解读 |
|---|---|
| 结算 | JGB端通过中央JGB账簿登记与资金转账管路结算；关于资金与证券的DVP轨道，见 [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET FTS / RTGS settlement]]。 |
| 结算周期 | 日本的JGB现金与回购结算运行于缩短的周期（市场就直接JGB迁移至T+1，并相应缩短回购周期），从而压缩交割失败风险与日内流动性时点。 |
| 中央清算 | JGB回购可更新债务至 [[securities/japan-securities-clearing-corp|JSCC]]（前JGBCC职能），后者就已清算的JGB及JGB回购交易承担债务并相互化交易对手风险。 |
| 中介 | [[money-market/tanshi-company-business-model|Tanshi companies]] 与 [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 在交易商柜台之外中介债券回购与现先。 |

## 这对FinWiki为何重要

- **数据解读**：日银证券融资统计在就借贷费 / 回扣率作调整后，将回购与现金担保债券借贷加以汇总。因此，作为代表值的"回购"余额混合了两种法律形态。
- **跨市场解读**：回购利率是坐落于无担保 [[money-market/call-market-structure|call rate]] 旁的有担保融资成本；GC回购对拆借的利差是受关注的融资信号。
- **担保品传导**：这一层连接 [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]、JGB市场运行与交易商资产负债表容量。日银证券借贷便利尤其与SC稀缺性相互作用。

## 阅读清单

1. 将 *法律形态*（现先 vs 现金担保借贷）与 *担保品轴*（GC vs SC）分开；二者相互独立。
2. 当来源称"现担（gentan）"时，将其读作现金担保债券借贷形态；"新现先 / new gensaki"是现代化的回购形态。
3. 不要将回购利率当作无担保拆借利率 —— 二者是不同的工具、不同的风险。
4. 关于特殊性，应看SC回购与证券借贷便利的使用，而非GC融资水平。
5. 引用现行余额时，应引用具体的日银证券融资发布；数字具有时点特定性。

## JapanFG相关性

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 是核心的债券回购与现先中介机构及证券融资专业公司。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 与 [[financial-regulators/ueda-yagi-tanshi]] 在与拆借及CP活动相邻处中介债券回购。
- 证券公司 [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/mizuho-securities]] 与 [[securities-firms/mufg-mums]] 通过现先及现金担保借贷为JGB库存融资。
- 大型银行 [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 通过担保品管理与准备金余额承担敞口。
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] 驱动两种形态之下的短端利率环境与担保品框架。

## 边界情形

- **现先 vs 现金担保借贷**：卖出回购 vs 以现金保全的证券借贷；经济性相同，法律结构与定价惯例不同。
- **回购 vs 有担保拆借**：二者都有担保，但回购是证券融资交易（卖出回购或以现金保全的借贷），而有担保拆借是质押担保品的有担保银行间放贷；见 [[money-market/japan-uncollateralized-vs-collateralized-call-market|the call segmentation page]]。
- **GC vs SC**：融资驱动 vs 券驱动；位于任一法律形态之上的叠加。
- **回购 vs 股票借贷**：JGB回购与股票证券借贷是不同市场；股票借贷引向 [[securities/japan-stock-lending-market-route|the stock-lending route]]。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
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

## 来源

- 日本银行：日本证券融资交易统计说明（回购与现金担保债券借贷范围、借贷费 / 回扣调整）。
- 日本银行：货币市场概要页面。
- ICMA：亚洲回购市场指南 —— 日本（现先、现担 / 现金担保借贷、新现先、GC / SC、文件）。
- 日本证券金融株式会社：债券回购与现先交易业务说明。
- 日本证券清算机构：JGB清算产品（JGB及JGB回购交易的债务承担）。

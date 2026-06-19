---
source: money-market/boj-post-2024-floor-system-complementary-deposit-facility
source_hash: 72f03f3f62832028
lang: zh
status: machine
fidelity: ok
title: "日银 2024 之后的下限系统与补充活期存款制度（補完当座預金制度）"
translated_at: 2026-06-19T06:09:18.091Z
---

# 日银 2024 之后的下限系统与补充活期存款制度（補完当座預金制度）

## Wiki route

本条目位于 [[money-market/INDEX|money-market index]] 之下。请与 [[money-market/boj-open-market-operations|BoJ open market operations]] 对照阅读以获取同业 / 对比背景，并参见 [[money-market/japan-money-market|Japan money market]] 了解更广义的系统 / 监管边界。

## TL;DR

2024, 年 3 月，日本银行结束了负利率政策（NIRP）与收益率曲线控制（YCC），转向短期利率目标框架，其中政策利率被设定为日银向银行活期账户余额中政策利率余额档所支付的利息。这是一种 **下限系统（floor system）** 方法，在结构上类似于美联储的 IORB 与欧央行的存款便利。

准备金付息的轨道是补充活期存款制度（補完当座預金制度），其历史上对活期账户余额采用分档结构。在 2024 年 3 月框架转变之后，政策利率余额档承载标题性的短期政策利率，短期货币市场定价被锚定在该下限之上。

## 框架地图

| 层级 | 2024 年 3 月之前的解读 | 2024 年 3 月之后的解读 |
|---|---|---|
| 政策利率目标 | NIRP 框架下短期目标在负 10 个基点左右；长端在 YCC 下受控。| 无担保隔夜拆借利率被引导至正的短期利率目标左右。|
| 准备金分档 | 三档：基础余额、宏观附加余额、政策利率余额，由政策利率余额承载负利率。| 准备金付息通过补充活期存款制度适用；请查阅当前公布的分档利率。|
| 长端控制 | 对 10年期 JGB 收益率设 YCC 区间。| YCC 终止；允许长端由市场决定。|
| 资产购买 | 全速实施大规模 JGB / ETF / J-REIT / CP / 公司债购买计划。| JGB 购买节奏逐步缩减；ETF / J-REIT 新购买终止；公司资产计划收尾。|
| 运营理念 | 纯数量驱动，带负利率下限与 YCC 上限。| 使用下限系统机制的常规利率目标框架。|

## 补充活期存款制度机制

补充活期存款制度（補完当座預金制度）是日银向商业银行活期账户余额付息的法律与运营路径。历史要点：

- 于 2008 年作为日银市场操作框架的扩展引入。
- 在金融危机流动性扩张期间用作遏制工具。
- 通过日银网（BoJ-net）活期账户系统运营。
- 通过公开的日银政策委员会决议实施。

在伴随 NIRP 及 NIRP 后正常化的政策分档变更之后，确切的分档定义与适用利率随时间变化。在引用当前数字之前，请始终查阅当前的日银货币政策会议（MPM）决议文本与当前的操作页面以获取实时利率与分档定义。

## 分档 IOER 结构（参照性解读）

2024 年之前的 NIRP 分档框架提供了一个有用的解读模板：

| 档 | 概念 | 解读 |
|---|---|---|
| 基础余额 | 由历史准备金额定义的参照余额。| 承载正利率。|
| 宏观附加余额 | 由准备金要求与放贷激励算术定义的附加档。| 承载零利率。|
| 政策利率余额 | 在另外两档之上的边际档。| 承载定义 NIRP 的负利率。|

2024, 年 3 月之后，日银框架从惩罚性的负利率边际档转向对准备金余额设定的正利率下限。在引用当前数字之前，应始终参照日银公布的确切分档定义与适用利率。

## 为何下限系统有效

下限系统将短期货币市场利率锚定在准备金所付利息之上。如果一家银行能以公布的政策利率在日银存放多余现金，它就几乎没有经济理由在 [[money-market/call-market-structure|call market]] 以明显更低的利率放贷。再结合管理总准备金稀缺 / 充裕的 [[money-market/boj-open-market-operations|open market operations]]，下限便设定了清晰的短期利率走廊。

实务解读：

- 实际的 [[money-market/call-market-structure|uncollateralized overnight call rate]] 应在接近政策利率余额利率的水平交易。
- 回购利率（[[money-market/jgb-repo-market-japan|JGB repo]]）应在下限周边的窄区间内交易，并因抵押品稀缺而有所修正。
- [[money-market/japan-tbill-treasury-discount-bill|TDB]] 收益率应在接近下限减去小幅抵押品 / 稀缺溢价的水平交易。
- [[money-market/japan-ncd-negotiable-cd-market|NCD]] 与 [[money-market/japan-cp-commercial-paper-market|CP]] 收益率应高于下限，高出幅度为发行人信用利差。

## 与美联储 IORB 及欧央行 DFR 的比较

| 特征 | 日银 2024 之后 | 美联储 | 欧央行 |
|---|---|---|---|
| 政策利率名称 | 通过补充活期存款制度适用的短期政策利率。| 联邦基金目标区间；下限为准备金付息（IORB）。| 存款便利利率（DFR）。|
| 下限工具 | 对日银活期账户的政策利率余额档付息。| 对联邦储备的准备金余额付息。| 对欧央行存款便利的超额余额付息。|
| 准备金充裕度 | 日银因长期量化宽松遗产而运行充裕准备金。| 美联储在 2008 年之后的框架下运行充裕准备金。| 欧央行在 2014 年之后的框架下运行充裕准备金。|
| 分档结构 | 历史上使用分档系统；请查阅当前日银 MPM 决议。| 无分档的单一 IORB 利率。| NIRP 期间历史上适用两档系统；框架定期修订。|
| 长端管理 | YCC 于 2024年 3 月终止；长端现由市场决定，辅以裁量性购买。| 无长端收益率目标；采用资产负债表缩减。| 无长端目标；APP / PEPP 收尾。|

结构性相似是有意为之：三家央行都在 2008 年之后充裕准备金的时代之后转向了下限系统设计。

## 操作菜单邻接性

下限系统与主动操作组合运作：

- **资金供给操作**：针对共同抵押品的贷款、[[money-market/japan-tbill-treasury-discount-bill|TDB]] 购买、[[money-market/jgb-repo-market-japan|JGB repo]] 式操作以及 [[money-market/japan-cp-commercial-paper-market|CP]] 回购。用于管理总准备金稀缺。
- **资金吸收操作**：日银票据发行、附回购协议的 JGS 卖出操作。必要时用于抽离多余准备金。
- **常设便利**：补充贷款制度（補完貸付制度）充当走廊的上限。
- **前瞻指引**：MPM 声明与展望报告塑造利率预期。

下限（存款便利利率）与上限（贷款便利利率）的组合形成运营走廊。

## 解读清单

1. 从最新的日银 MPM 决议文本确定当前政策利率水平。
2. 从日银操作页面核实补充活期存款制度的当前分档定义。
3. 对照政策利率下限解读 [[money-market/call-market-structure|call rate]] 以检查传导。
4. 将 [[money-market/japan-tbill-treasury-discount-bill|TDB]] 收益率与下限比较以获取抵押品 / 稀缺信号。
5. 关注日银 JGB 购买节奏与资产负债表缩减声明，以判断中期准备金轨迹。
6. 将补充活期存款制度利率（而非政策利率标签）视为运营下限。

## JapanFG 相关性

- 大型银行 [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] 直接持有日银活期账户头寸，并就准备金余额获得下限利率。
- 信托银行与托管银行在日银持有结算余额，同样受下限约束。
- 证券公司 [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/nomura-hd]] 通过回购融资与交易商资产负债表定价与下限互动。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] 中介以下限为基准定价的拆借与 CP 业务。

## 边界情形

- **政策利率标签 vs 下限利率**：MPM 声明中公布的政策利率，只有在补充活期存款制度的分档定义与利率标签一致时才是运营下限。请同时核实两者。
- **下限系统 vs 走廊系统**：日银 2024 之后是下限系统，因为准备金充裕；走廊系统需要在不依赖充裕准备金的情况下进行主动的利率区间管理。
- **IOER vs IORB**：美联储早先的 IOER 与当前的 IORB 命名不同，但功能等同。
- **NIRP 终结 vs QQE 终结**：终结 NIRP 改变边际档利率；终结 QQE 式资产购买是另一项决定。

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- 日本银行：货币政策会议决议界面。
- 日本银行：公开市场操作及补充活期存款制度页面。
- 日本银行：MPM 日程与会议纪要 / 展望报告。
- 日本银行：关于市场操作与政策指引的教育页面。
- 日本银行：货币市场概览。
- 日本银行：活期账户余额统计页面。

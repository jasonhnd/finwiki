---
source: derivatives/topix-futures
source_hash: ad870e686022e9b4
lang: zh
status: machine
fidelity: ok
title: "TOPIX 期货（OSE）"
translated_at: 2026-05-31T03:19:56.422Z
---

# TOPIX 期货（OSE）

## TL;DR

TOPIX 期货是以东证股价指数（TOPIX）为标的的交易所上市股指期货，TOPIX 是 JPX 旗舰的自由流通市值加权指数，覆盖所有 Prime Market（原第一部）成分股——约 2,000 只股票。它们在日本交易所集团（JPX）旗下的大阪交易所（OSE）上市，并在 [[securities/japan-securities-clearing-corp|JSCC]] 清算。标准 TOPIX 期货合约与较小的迷你 TOPIX 期货合约共同作为针对广泛日本股票 beta 敞口的机构级对冲工具。

与 [[derivatives/nikkei-225-futures-options|Nikkei 225 futures]] 系列相比，TOPIX 期货的日成交量较小，但其用户群体更偏机构：国内养老金基金、寿险公司、资产管理公司和银行 ALM 部门使用 TOPIX 期货进行组合层面的对冲和战术性持仓，因为 TOPIX 更好地代表了被动指数委托所持有的范围（尤其是自 [[insurance/japan-life-insurance-alm-overview|life-insurance ALM]] 以来，养老金配置追踪 TOPIX 式宽基基准的频率高于价格加权的日经 225）。

对 FinWiki 而言，本条目涵盖合约规格、与日经 225 期货的比较、相对 ETF 的基差套利、子指数期货（TOPIX Core 30, TOPIX 100, TOPIX Banks），以及机构流量画像。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/nikkei-225-futures-options]] for the price-weighted-index peer, [[derivatives/japan-single-stock-options]] for single-name equity derivative complement, and [[securities/japan-asset-manager-landscape-matrix]] for the institutional-investor end-user side. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; the clearing layer is [[securities/japan-securities-clearing-corp|JSCC]]; the broader [[securities/tokyo-stock-exchange|TSE]] cash-equity universe is the underlying.

## 合约规格

OSE 上市两个主要的 TOPIX 挂钩期货合约以及若干子指数期货：

| 合约 | 标的 | 乘数 | 最小变动价位 | 上市月份 |
|---|---|---|---|---|
| TOPIX 期货（标准） | TOPIX（自由流通市值加权，约 2,000 只 Prime 股票） | 指数 × JPY 10,000 | 0.5 个指数点（= 每跳 JPY 5,000 ） | 3月 / 6月 / 9月 / 12月，外加近月 |
| 迷你 TOPIX 期货 | TOPIX | 指数 × JPY 1,000 （1/10） | 0.25 个指数点（= 每跳 JPY 250 ） | 每月 |
| TOPIX Core 30 期货 | TOPIX Core 30 （30 只大盘股） | 指数 × JPY 10,000 | 0.5 | 每季度 |
| TOPIX Banks 期货 | TOPIX Banks 行业指数 | 指数 × JPY 10,000 | 0.1 | 每季度 |

所有合约在合约月份第二个周五上午现金结算至特别报价（SQ），按 SQ 日标的成分股开盘价计算。

交易时段遵循 OSE 的两段式结构（日盘约 08:45–15:15 日本时间；夜盘约 16:30–次日 06:00 日本时间），与 [[derivatives/nikkei-225-futures-options|Nikkei 225 futures]] 的时间安排相一致。

## TOPIX 与日经 225：方法论差异

TOPIX 与日经 225 之间的根本差异决定了谁使用哪种期货：

| 方面 | TOPIX | 日经 225 |
|---|---|---|
| 成分股 | 所有 Prime Market 股票（约 2,000） | 225 只精选股票 |
| 加权 | 自由流通市值 | 价格加权（价格 ÷ 除数） |
| 行业倾斜 | 反映实际市值分布；金融和宽基市场得到良好代表 | 由于高股价，科技、工业被超配（例如迅销、软银集团占主导） |
| 追踪基准用于 | 被动指数委托、养老金基金、资产管理公司 TOPIX 追踪、广泛日本股票敞口 | 国内零售流量指标、外国宏观日本 beta 代理、财经媒体头条指数 |
| 方法论更新 | 东证重组（Prime / Standard / Growth）影响 TOPIX 加权政策；定期自由流通审查 | 日经公司定期审查；成分变动不频繁 |

由于 TOPIX 是市值加权的宽基基准，当其标的持仓为宽基组合时，日本机构投资者（寿险公司、地方银行、养老金基金、运营被动委托的资产管理公司）使用 TOPIX 期货而非日经 225 期货进行对冲。相比之下，日经 225 合约吸引了更多零售和外国宏观持仓，对它们而言 225只股票的价格加权形态在战术交易中可接受甚至更受偏好。

这两种期货对同一现金篮子不是等价的对冲：用日经 225 期货对冲的 TOPIX 追踪组合保留行业基差风险，因为这两个指数对成分股的加权差异很大。

## 相对 ETF 的基差套利

TOPIX 期货-ETF 基差交易是一项主要的机构和交易商活动：

1. **现金腿**：TOPIX 追踪 ETF（例如 NEXT FUNDS TOPIX ETF [1306]、TOPIX ETF iShares [1475]、Daiwa ETF TOPIX [1305]、Nikko TOPIX ETF [1308]）提供对标的篮子的实物敞口。
2. **期货腿**：TOPIX 期货以保证金融资提供合成敞口。
3. **基差**：隐含股息率、持有成本和供需失衡驱动可度量的现金-期货基差（以指数点计）。
4. **套利**：授权参与者和 ETF 做市商进行多头 ETF / 空头期货（或反向）以捕捉基差错位。

该交易也与 [[securities/japan-market-maker-and-liquidity-provider-landscape|ETF market making]] 相交：

| 方向 | 触发时机 |
|---|---|
| 多头 ETF / 空头期货（正基差） | 当期货隐含价格高于现金时（例如在除息日之前、当期货买方需求强劲时） |
| 多头期货 / 空头 ETF（负基差） | 当期货相对现金便宜时（例如 ETF 的赎回需求集中了供给） |

TOPIX 基差的一个持续驱动因素是日本央行历史上的 ETF 持有（日本央行在货币政策下从 2010 年至 2024年购买 TOPIX 挂钩和日经 225挂钩的 ETF；日本央行 ETF 余额现处于持有/自然到期阶段）。日本央行的 ETF 持有减少了 TOPIX 标的成分股的自由流通量，并在 ETF 层面影响除息动态。日本央行操作背景见 [[money-market/boj-open-market-operations]]。

## 机构流量画像

TOPIX 期货的用户群体比日经 225更偏机构：

| 用户类别 | 用例 |
|---|---|
| 寿险公司（财务/股票 ALM） | 对 TOPIX 追踪持仓进行战术性股票久期调整；叠加策略 |
| 养老金基金（GPIF、企业 DB、公共部门） | 再平衡流量；被动追踪叠加；围绕季度审查的过渡管理 |
| 资产管理公司（主动与被动） | 对申购/赎回流量进行现金股票化；指数基金跟踪误差缩减 |
| 银行财务/ALM | 对交叉持股解除计划进行股票组合对冲 |
| 证券公司自营 | 做市；相对 ETF 和日经期货的套利交易 |
| 外国机构 | 国家层面日本 beta 规模配置；宏观战术 |
| 零售 | 份额小于日经迷你；迷你 TOPIX 是零售可接触的主要 TOPIX 合约 |

政府养老金投资基金（GPIF）是全球最大的养老金基金，也是日本股票市场的结构性参与者；其 TOPIX 挂钩持仓使 TOPIX 期货（或对极大规模交易使用 TOPIX 互换）成为天然的再平衡工具。企业交叉持股解除计划（[[finance/INDEX|finance]] 锚点）经常在大宗交易执行前使用 TOPIX 期货作为过渡性对冲。

## 子指数期货：Core 30, 100, Banks

OSE 上市更窄的子指数期货：

| 子指数合约 | 标的 | 用例 |
|---|---|---|
| TOPIX Core 30 期货 | 按流动性/市值排名前 30 只股票 | 大盘日本 beta 隔离；交叉持股解除对冲 |
| TOPIX 100 期货 | 排名前 100 只股票 | 聚焦中大盘的对冲 |
| TOPIX Banks 期货 | TOPIX Banks 行业 | 银行行业 beta 对冲；相对个别银行的配对交易；对日本银行业的宏观观点 |
| TOPIX 行业指数（其他） | 各行业 | 流动性有限；行业轮动叠加 |

TOPIX Banks 期货在银行行业体制转变期间历史上获得关注（例如 NIRP 退出猜测、日本央行政策正常化情形）。子指数流动性远薄于头部 TOPIX 合约，Core 30 / Banks 合约的交易更具间歇性。

## 清算与保证金

| 要素 | 详情 |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]]；执行时更替 |
| 保证金 | SPAN 式组合保证金；在 TOPIX 期货、迷你、子指数和期权之间抵消 |
| 结算 | 在合约月份第二个周五现金结算至 SQ |
| 违约管理 | 标准 JSCC 瀑布 |

SPAN 组合保证金方法在单一保证金计算下支持复杂的多腿策略（TOPIX 对日经价差、TOPIX 对 Core 30, 、TOPIX 期货对 ETF 对冲）。

## Related

- [[derivatives/INDEX]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/INDEX]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: TOPIX Futures, mini TOPIX Futures, sub-index futures contract specifications.
- JPX: TOPIX index methodology, free-float review schedule, and SQ calculation rules.
- JPX: Monthly trading-volume and investor-category statistics for OSE derivatives.
- Japan Securities Clearing Corporation: SPAN-based margining methodology.
- Bank of Japan: ETF holdings disclosures and balance-sheet statistics.
- Financial Services Agency: FIEA framework on listed derivatives.

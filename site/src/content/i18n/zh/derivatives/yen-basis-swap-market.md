---
source: derivatives/yen-basis-swap-market
source_hash: 2bf45631b6f75634
lang: zh
status: machine
fidelity: ok
title: "日元-美元跨货币基差互换市场"
translated_at: 2026-05-31T03:19:56.439Z
---

# 日元-美元跨货币基差互换市场

## TL;DR

日元-美元跨货币基差互换（CCBS）是一种 OTC 衍生品，其中两个交易对手在多年期限内以两种不同货币——通常为日元对美元——交换本金和定期浮动利率利息支付。「基差（basis）」是加到某一条腿（通常是日元腿）上的利差（以基点计），它为日元资产的非美国持有者所面临的美元融资相对稀缺性定价。

日元-美元基差在结构上为负（日元腿支付美元浮动指数减去一个利差），因为日本的银行、寿险公司和企业针对其日元负债对美元融资的需求，远大于反向需求。当美元融资变得稀缺时——季末、年末、美元短缺事件（2020,  年 3 月、2008–2009,  年 9 月、2011 年 12 月）——基差走阔（更负），而当美元供给恢复正常时收窄。

对 FinWiki 而言，这个市场之所以重要，是因为它是日本美元融资的价格，并且是以下各项的直接输入：巨型银行美元资产融资、寿险公司外债对冲成本、企业美元债换回日元（swap-back-to-yen）的经济学，以及日本银行 / 美联储美元互换额度政策。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the single-currency rates side and [[derivatives/ois-tona-curve]] for the JPY discounting curve. The cash funding side is [[money-market/japan-money-market]] and the corporate end-user side is [[finance/japan-corporate-fx-and-rate-hedge-policy]].

## Instrument Mechanics

一份标准的日元-美元 CCBS 具有以下结构：

| Element | Detail |
|---|---|
| 期限 | 1-个月至 30-年；流动性较好的点位通常为 3M、6M、1Y、2Y、3Y、5Y、7Y、10Y、30Y。 |
| 本金交换 | 本金在交易开始时按当时即期汇率交换，到期时按相同汇率再交换（互换中不内置汇率重估）。 |
| 浮动腿 | 历史上为 USD-LIBOR vs JPY-LIBOR。IBOR 转换后：SOFR（USD）vs TONA（JPY），后置复利（compounded in arrears），加一个固定基差利差。 |
| 基差利差 | 加到日元腿上的利差（以 bp 计，对日元几乎总是为负）；报价惯例为「JPY 支付 SOFR + 日元腿 = TONA + basis」。−60 bp 的基差意味着日元支付方在支付 SOFR 平价的同时收取 TONA − 60 bp。 |
| 重置频率 | 通常为季度。 |
| 抵押品 | 带每日 VM 的 CSA；在 2008  后规则下，非清算双边交易的 IM 交换受 UMR 分阶段实施约束。 |
| 清算 | 一部分标准化期限有资格进行 CCP 清算；由于汇率本金交换和非标准期限，许多 CCBS 仍为双边。 |

其经济内容是：支付美元浮动并收取日元浮动减去一个利差，在合成意义上等价于通过借入美元并换成日元来为一项日元资产融资。

## 2008  后的演变

在全球金融危机之前，日元-美元基差接近于零。抵补利率平价（CIP）严格成立，因为银行会对任何偏离进行套利。自 2008,  以来，持续的非零基差反映了：

| Driver | Effect on basis |
|---|---|
| 银行资产负债表成本（杠杆率、GSIB 附加资本、汇率互换的 RWA） | 负——愿意扩张资产负债表以弥合缺口的套利者更少。 |
| 季末 / 年末粉饰窗口（window dressing） | 负向尖峰——随着做市商减少回购和互换的资产负债表占用，基差走阔（更负）。 |
| 来自寿险公司、巨型银行和企业的日本国内美元需求 | 持续的负向压力，因为日元负债的国内持有者买入美元债。 |
| 日本银行负利率时代（2016–2024） | 经由美元债对收益率的需求被放大；基差在 5Y 上长期处于 −50  至 −80 bp。 |
| 美联储美元互换额度（BoJ-Fed 常设安排） | 对极端错位设置上限；于 2020  年 3 月（新冠）激活，历史上在 2008–2009 亦曾激活。 |

CIP 的破裂如今是一个结构性特征，而非套利机会，因为套利的限制是真实存在的（监管资本、信用额度、资产负债表租用成本）。

## Corporate USD Funding via JPY Funding Swap

一家日本企业或金融机构可以用两种方式为美元资产购买进行融资：

1. **直接美元借款**——发行美元债、提取美元银行贷款，或动用美元 CP。
2. **日元借款 + 日元-美元互换（合成美元）**——发行日元债或取得日元贷款，然后在交易开始时通过 CCBS 加一笔汇率互换，将日元本金和票息流换成美元。

合成美元的全额成本为：

```
synthetic USD cost ≈ JPY funding rate − basis (in bp, applied to JPY leg)
                    + SOFR + credit spread on the USD-receiving leg
```

当基差为 −60 bp 时，日元融资的合成美元比可比的原生美元借款贵 60 bp——这意味着，如果发行人拥有美元债特许经营（franchise），更便宜的路径是直接发行美元。反之，想要日元融资的美元持有者，因将美元借入互换而获得 60 bp 的额外收益（pickup）；这就是当基差走阔时套利资本所追逐的「日元 pickup 交易」。

对于日本巨型银行的资金部（treasury），基差直接为日元计价存款（便宜、充裕）与美元资产（昂贵、稀缺）之间的融资缺口定价，这就是为什么巨型银行的批发融资策略对基差变动敏感。特许经营层面见 [[banking/INDEX]] 和 [[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]]。

## Megabank Dealer Franchise

三大巨型银行做市商特许经营——MUFG、SMFG 和 Mizuho FG 及其证券关联机构——与全球银行（JPMorgan、Goldman Sachs、Citi、Deutsche Bank、BNP Paribas）和日本证券公司（Nomura、Daiwa）一道，是占主导地位的日元-美元基差做市商。

该特许经营有两个方面：

- **客户流**——日本寿险公司买入美元债、企业对冲美元投资项目、外国发行人将日元发行的武士债（Samurai）或 Uridashi 募集资金换回本国货币。该流在结构上是单向的（日元融资 → 美元资产），做市商仓储由此产生的基差敞口。
- **库存与仓储**——做市商通过回购、汇率互换市场和 OTC 交易对手循环（recycle）基差，以抵销客户需求。他们仓储的能力取决于 RWA 容量、LCR / NSFR 比率和 CSA 条款。

当做市商能赚取买卖价差加上持续的 carry 时，这项双向业务是有利可图的，但自 2015 以来资产负债表成本压缩了利润。在压力条件下，做市商退出，基差走阔——这就是 BIS 和日本银行研究所记录的 CIP 违背的「做市商资产负债表渠道」。

相关的单一货币利率特许经营见 [[derivatives/japan-irs-market]]，监管层面（管理哪些实体可以成为做市商）见 [[banking/japan-banking-license-tier-comparison-matrix]]。

## Basis Widening Triggers

| Trigger | Mechanism | Typical magnitude (5Y JPY-USD basis) |
|---|---|---|
| 季末 | 做市商削减汇率互换和 CCBS 账簿以缩减资产负债表快照；客户美元需求不变。 | 数日内走阔 −10  至 −30 bp。 |
| 年末（12 月） | 最强的季末效应加上全球银行的会计报告期。 | 走阔 −20  至 −60 bp，常在年末前 10–15  个交易日见顶。 |
| 美元短缺事件（2008, 2011, 2020） | 全球美元融资压力；跨境银行间市场枯竭。 | 峰值时 −100  至 −300+ bp。 |
| 日本特有的资金外流激增 | 持续的寿险公司或企业美元资产买入。 | 在某些时期 5Y 上持续 −40  至 −80 bp。 |
| BoJ-Fed 互换额度激活 | 向日本银行提供美元流动性，以对抵押品向日本各银行再借出；在激活期限上为基差设置下限（floor）。 | 将走阔限制在互换额度成本（通常为 OIS + 一个固定利差）。 |
| 监管重新校准（例如美国各银行的 SLR 豁免变更） | 改变美国银行作为套利者的意愿。 | 持续多年的变动。 |

季末基差走阔若在新季度第一周内未反转，通常预示着超出单纯窗口粉饰的潜在融资压力。

## Comparison to EUR-USD Basis

| Dimension | JPY-USD basis | EUR-USD basis |
|---|---|---|
| 符号 | 持续为负（日元腿支付美元浮动减去利差）。 | 持续为负，但幅度较小。 |
| 驱动因素 | 日本国内美元需求（寿险公司、巨型银行、企业）。 | 欧元区银行美元资产融资加上周期性的欧元区压力（希腊危机、意大利银行业压力）。 |
| 典型 5Y 水平（近年） | 正常 −30  至 −80 bp；危机时 −150  至 −300+ bp。 | 正常 −20  至 −50 bp；危机时 −100  至 −200 bp。 |
| 年末幅度 | 日本特有效应更大（财年对齐、寿险公司报告）。 | 较小但仍重要。 |
| 政策后盾 | BoJ-Fed 常设美元互换额度加上永久性跨货币（CCY）互换安排。 | ECB-Fed 互换额度，结构上类似。 |
| 做市商群体 | 日本巨型银行加上全球做市商。 | 欧洲银行（BNP、SocGen、Deutsche）加上全球做市商。 |

日元-美元基差通常是主要货币 CCBS 对中最宽、波动最大的，因为日本在非美元经济体中拥有最大的结构性美元资产需求，同时拥有寻求美元收入的最大日元计价资产负债表。

## Data Surface

公开数据：

- **BIS 三年期中央银行调查与半年度 OTC 衍生品统计**——汇率和利率衍生品的名义本金总额和市值总额，按货币对和交易对手类型细分。
- **日本银行统计**——BIS OTC 衍生品调查的半年度日本部分；在同一发布窗口公布。
- **ISDA SwapsInfo**——每周汇总的已清算和双边名义成交。
- **Tradeweb、Bloomberg、ICAP、BGC 指示性报价**——每日指示性基差曲线；非直接交易数据。

公开数据显示名义本金未平仓总额（汇率衍生品总体为数万亿美元等值），但不显示单笔交易定价、做市商损益（P&L）或特定交易对手敞口。做市商银行的 IR 披露偶尔提及「来自汇率和利率的非利息收入」，但不单列基差损益。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-market-infrastructure-map]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank for International Settlements: Semi-annual OTC derivatives statistics (FX derivatives by currency pair, instrument type).
- Bank for International Settlements: Quarterly Review articles on CIP deviations and FX-swap markets (multiple, 2016 onward).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Bank of Japan: Money Market surface and Tokyo Money Market Survey commentary.
- ISDA: SwapsInfo weekly aggregated transaction reports.
- Financial Services Agency: FIEA framework for OTC derivatives oversight.
- Japan Securities Clearing Corporation: clearing scope and product list.
- Federal Reserve and Bank of Japan: standing USD swap line documentation and usage releases.

---
source: money-market/japan-cp-commercial-paper-market
source_hash: e9ecbe2b0f0da38d
lang: zh
status: machine
fidelity: ok
title: "Japan CP (commercial paper) market"
translated_at: 2026-06-19T06:09:18.105Z
---

# Japan CP (commercial paper) market

## Wiki route

本条目位于 [[money-market/INDEX|money-market index]] 之下。请将其与 [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]] 对照阅读以了解同业／对比背景，并与 [[money-market/boj-open-market-operations|BoJ open market operations]] 对照以了解更广泛的体系／监管边界。

## TL;DR

商业票据（CP）是日本的适格法人、银行及非银行金融机构发行的短期无担保本票。CP 已无纸化，并在短期公司债（短期社債振替制度）的账簿划拨法（Book-Entry Transfer Act）框架下经由 [[securities/japan-securities-depository-center|JASDEC]] 结算。对 FinWiki 而言，CP 是位于 [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]]（银行发行）与 [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]]（主权发行）旁侧的法人发行体短期融资通道。

CP 市场之所以重要，是因为它是债券市场之外蓝筹企业资金成本最易观测的信号，也因为日本央行在压力期与政策扩张期曾将 CP 买断与 CP 回购操作作为 [[money-market/boj-open-market-operations|open market operation]] 工具箱的一部分加以运用。

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Issuer | 法人、银行、非银行金融机构及特殊目的载体筹集短期资金。 | [[finance/japan-corporate-treasury-and-cash-management|corporate treasury]] |
| Arranger / dealer | 证券公司与银行安排、分销并做市 CP 发行。 | [[securities/japan-underwriting-market-structure]] |
| Investor | 银行、资产管理公司、MMF／MRF、保险公司及外国投资者为短期收益持有 CP。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| Settlement / register | JASDEC 短期公司债账簿划拨系统以无纸化形式持有 CP 头寸。 | [[securities/japan-securities-depository-center]] |
| Operation counterparty | 日本央行接受适格 CP 作为担保，并曾定期实施 CP 买断操作。 | [[money-market/boj-open-market-operations]] |
| Statistics | 日本央行短期金融市场统计；JSDA 的 CP 发行／余额表。 | BoJ / JSDA public surfaces |

## Instrument Mechanics

| Element | Reading |
|---|---|
| Legal form | 账簿划拨法下的短期公司债（短期社債），取代旧有的本票形式。 |
| Maturity range | 通常为 1  天至 1  年以内；多数发行集中于 1  个月、3  个月及季末到期附近。 |
| Form | 通过 JASDEC 的短期公司债账簿划拨系统完全无纸化。 |
| Issuance method | 贴现方式；发行价与赎回价之差即投资者收益。 |
| Rating | 国内 CP 评级（R&I、JCR、S&P Japan、Moody's Japan）通常为 a-1 ／ J-1  级；评级影响交易商分销及日本央行担保适格性。 |
| Tax | 预扣税待遇因投资者类别而异；机构 MRF／MMF 持有是主导的零售渠道。 |

## Tenor and Issuer Composition

CP 发行集中于短期限并由高评级名称主导：

- **银行系及银行集团 CP**：由超大型银行集团为短期融资及集团 ALM 进行的大规模发行，包括金融子公司 CP 及银行控股公司项目。
- **非银行 CP**：消费信贷、租赁及贸易融资发行体通过滚动 CP 项目为应收账款与营运资金融资。发行体集群参见 [[finance/japan-consumer-credit-and-leasing-finance-landscape|consumer credit / leasing landscape]]。
- **公司 CP**：蓝筹制造商、公用事业及商社为营运资金、分红及纳税时点发行 CP。商社集群与 [[finance/japan-trading-house-finance-arm-landscape|sogo shosha finance arms]] 重叠。
- **资产支持 CP（ABCP）**：由贸易应收账款、租赁应收账款或汽车贷款支持的导管。ABCP 发行规模小于普通 CP，但是结构化融资短期资金的典型轨道。

期限分布偏向 1 个月及 3 个月窗口，因为来自 MRF、银行财务及法人现金管理的投资者需求集中于此。季末与财年末附近的发行在资产负债表容量收紧时可能出现利差走阔。

## BoJ Eligibility and Operations

| BoJ tool | CP linkage |
|---|---|
| Collateral framework | 适格 CP 被接受为日本央行针对共同担保的贷款及类似操作的担保。适格性规则涵盖评级、剩余期限、发行体类型及无纸化状态。 |
| CP repo operations | 日本央行曾将附回购协议的 CP 买入操作作为资金供给工具加以实施。 |
| Outright CP purchases | 在金融压力期与量化扩张期，日本央行曾将 CP 买断操作作为资产购买工具箱的一部分加以实施。 |
| Post-2024 framework | 在 2024  年 3 月脱离负利率的体制转变之后，日本央行在保留标准担保及回购便利的同时，逐步收缩了非常时期的公司资产购买项目。务必查阅当前日本央行市场操作页面以了解实时菜单。 |

CP 购买工具历来是重要的危机应对界面（2008-2009 GFC、2020 COVID-19 融资压力），但它并非永久性的货币政策工具。

## Market Size and Reading Rules

| Source | What it shows |
|---|---|
| BoJ short-term financial market statistics | 按工具划分的余额，包括 CP、TDB、NCD 及拆借余额。 |
| JSDA CP issuance / outstanding tables | 发行量、余额、按行业及按评级的发行体细分。 |
| JASDEC short-term corporate bond statistics | 显示无纸化 CP 持有的账簿划拨余额。 |
| Rating agency program reports | 单个发行体的项目规模、评级及近期发行节奏。 |

将 CP 余额作为法人短期融资需求的流量指标来解读。将 CP 余额与 [[money-market/japan-ncd-negotiable-cd-market|NCD]] 及 [[money-market/japan-tbill-treasury-discount-bill|TDB]] 余额比较，以三角定位短期日元流动性的停泊之处。

## JapanFG Relevance

- 超大型银行集团 [[megabanks/mufg]]、[[megabanks/smfg]] 及 [[megabanks/mizuho-fg]] 通过其银行账簿及信托子公司成为主要的 CP 投资者。
- 证券公司 [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]] 及 [[securities-firms/smbc-nikko]] 安排 CP 项目并运营一级分销。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 及 [[financial-regulators/ueda-yagi-tanshi]] 中介短期资金，并提供与拆借及回购活动相邻的 CP 市场经纪支持。
- [[financial-regulators/japan-securities-finance]] 参与与 CP 相互作用的担保及短期融资管道。

## Boundary Cases

- **CP vs NCD**：CP 是法人／非银行发行；NCD 是银行存款发行。投资者基于信用、税务及资产负债表处理进行选择。
- **CP vs TDB**：TDB 是主权贴现发行；CP 承担发行体信用风险，并以高于 TDB／OIS 的利差交易。
- **CP vs short bonds**：剩余期限 1 年以内的短期公司债在经济上重叠，但遵循不同的法律及登记路径。
- **CP vs ABCP**：普通公司 CP 为无担保；ABCP 是由应收账款池支持的结构化融资发行，需以结构化信用视角来解读。

## Reading Checklist

1. 在解读利差或定价之前，确认发行体类型（公司／银行系／非银行／ABCP）。
2. 若问题涉及运营流动性，核实评级及日本央行担保适格性状态。
3. 检查期限分布；不要假设平均期限等同于头条到期分桶。
4. 将一级发行节奏与余额变化区分开。
5. 将 CP 市场压力对照 [[money-market/jgb-repo-market-japan|JGB repo]] 状况及日本央行操作菜单的变化来解读。

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market overview and short-term financial market statistics.
- Bank of Japan: open market operations page documenting CP eligibility and CP-related operation tools.
- JSDA: commercial paper issuance and outstanding statistics surface.
- JASDEC: short-term corporate bond book-entry system overview.
- FSA: FIEA FAQ on financial-instruments classification relevant to short-term corporate bonds.

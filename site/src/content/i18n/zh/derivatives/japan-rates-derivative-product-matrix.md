---
source: derivatives/japan-rates-derivative-product-matrix
source_hash: 4066057b3ccbd6aa
lang: zh
status: machine
fidelity: ok
title: "日本利率衍生品产品矩阵"
translated_at: 2026-06-15T03:48:21.841Z
---

# 日本利率衍生品产品矩阵

## TL;DR

日本的日元利率衍生品体系涵盖 **referencing TIBOR / TONA 的利率互换 (IRS)、referencing TONA 的隔夜指数互换 (OIS)、JGB 期货（10 年标准、5 年、20 年超长期、10 年迷你）、作为通胀互换标的的 JGB 通胀挂钩债券 (JGBi)、swaption（日元 IRS 的期权）、CMS（固定期限互换）、inflation swap（CPI 挂钩）以及日元-美元 cross-currency basis swap (CCBS)**。这些产品在名义存量（参照截至 2024 H2 的 BIS 半年度 OTC 衍生品统计）、CCP 清算（日元 IRS 为 JSCC；全球日元 IRS 为 LCH SwapClear；JGB 期货为 JSCC）、tenor 深度、市场参与者构成、寿险公司对冲用途以及交易商银行收入贡献上各不相同。本矩阵汇集了可公开验证的各个维度，以便在提出曲线、对冲或对手方问题之前，将任一单一的日元利率衍生品页面置于更宏观的利率衍生品架构之中。

## Wiki route

本词条归属于 [[derivatives/INDEX|derivatives index]]。它与 [[derivatives/japan-irs-market|Japan yen IRS market]] 配对以了解头部的 OTC 互换通道、与 [[derivatives/ois-tona-curve|OIS / TONA curve]] 配对以了解贴现曲线与 RFR 通道、与 [[derivatives/jgb-futures-curve|JGB futures curve]] 配对以了解交易所挂牌的对冲通道、与 [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] 配对以了解 cross-currency 交叉点、与 [[derivatives/japan-swaption-market|Japan swaption market]] 配对以了解 IRS 期权通道、与 [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] 配对以了解斜率曲线产品、与 [[derivatives/japan-inflation-swap|Japan inflation swap]] 配对以了解 CPI 挂钩对冲通道，并与 [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] 配对以了解现金侧的通胀挂钩标的。现金市场为 [[money-market/INDEX|money-market index]]，企业终端用户一侧为 [[finance/japan-corporate-fx-and-rate-hedge-policy|corporate FX and rate hedge policy]]。

## 为何需要一个利率衍生品产品矩阵

「日本利率衍生品」这样一个单一短语，掩盖了清算场所、名义规模、参与者构成以及终端用户用例在各产品间各不相同这一事实。若不加以分类：

- 日元 IRS 看起来像日元 OIS，尽管浮动参照（TIBOR vs TONA）与贴现曲线角色不同；
- JGB 期货看起来像一笔互换，尽管一者是交易所挂牌且实物交割的，另一者是 OTC 且净额结算的；
- swaption 看起来像一个普通期权，尽管它是标的 IRS 曲线之上的期权性层，带有独特的寿险公司需求；
- CCBS 看起来像一笔 FX swap，尽管它是连接日元与美元期限融资的融资套利工具；
- inflation swap 与 JGBi 看起来可以互换，尽管一者是 OTC 衍生品，另一者是现金债券市场。

该矩阵将每个产品归位，以便任一单一的衍生品页面都能对照其替代对冲路线或其现金市场标的来阅读。

## 产品 1  —— 日元 IRS（TIBOR 浮动）

- **工具类型。** 以 TIBOR（1M、3M 或 6M）为浮动参照的 OTC 固定换浮动互换；标准的 JPY ACT/365  计息基准。参见 [[derivatives/japan-irs-market|Japan yen IRS market]]。
- **名义存量。** 在 BIS 半年度 OTC 衍生品统计中作为 JPY 单一货币 IRS 总名义的一个组成部分报告；JPY IRS 名义在半年度截止时合计达数十万亿美元等值总额。TIBOR vs TONA 的份额拆分属于操作层面，而非单独公布。
- **CCP 清算。** 在 FIEA 清算强制要求下，国内交易商对交易商的流量于 JSCC 清算；涉及主要全球交易商的跨境流量于 LCH SwapClear 清算。
- **Tenor 深度。** 1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y 为最具流动性的点位；为寿险公司对冲可延伸至 40Y。
- **市场参与者。** 巨型银行资金部（交易商一侧）、证券公司利率台、地区银行 ALM、寿险公司（长端付固定对冲）、外资银行、对冲基金、用于贷款对冲的企业终端用户。
- **寿险公司对冲用途。** 重度——长端 TIBOR / 混合参照 IRS 是寿险公司针对固定利率负债现金流的典型 ALM 对冲之一。
- **交易商银行收入贡献。** 位居巨型银行证券子公司（MUFG MUMS、SMBC Nikko、Mizuho Securities，外加 Nomura 与 Daiwa）利率业务的顶级贡献者之列。

## 产品 2  —— 日元 OIS（TONA）

- **工具类型。** 以 TONA（Tokyo Overnight Average Rate）按后置复利为浮动参照的 OTC 固定换浮动互换；典型的后 LIBOR 日元隔夜 RFR。参见 [[derivatives/ois-tona-curve|OIS / TONA curve]]。
- **名义存量。** 在 BIS 半年度 OTC 衍生品统计中为 JPY IRS 总名义的子集；TONA OIS 份额在 LIBOR 转换后已实质性增长，并作为新发标准持续扩张。
- **CCP 清算。** 在与 TIBOR IRS 相同的强制要求结构下于 JSCC 与 LCH SwapClear 清算。
- **Tenor 深度。** 在前端最具流动性（1W、1M、3M、6M、1Y、2Y、3Y）；作为贴现曲线参照亦交易至 30Y。贴现曲线角色意味着即便 OIS 不是主交易，也会被参照。
- **市场参与者。** 巨型银行资金部、交易商利率台、对冲基金与宏观基金、资产管理人、外资银行、用于短 tenor 对冲的企业。
- **寿险公司对冲用途。** 间接——OIS 设定用于寿险公司 ALM 与 IRS 估值的贴现曲线；直接的 OIS 对冲在短端更为常见。
- **交易商银行收入贡献。** 实质性；OIS 通道以后 LIBOR 贴现曲线角色支撑着已清算 IRS 市场。

## 产品 3  —— JGB 期货（10Y 标准）

- **工具类型。** 以 10 年名义 JGB 为标的的交易所挂牌实物结算期货；按价格计算交易最活跃的日元利率衍生品。参见 [[derivatives/jgb-futures-curve|JGB futures curve]]。
- **名义存量。** 前月合约的持仓量以数十万张合约计；每张合约的名义价值为 ¥100 million 面值。日成交集中于 10Y 标准。
- **CCP 清算。** JSCC 强制。
- **Tenor 深度。** 10 年名义；CTD 篮子取自合资格的 JGB 发行。10Y 标准、10Y 迷你、5Y 与 20Y 超长期合约以不同的流动性水平交易。
- **市场参与者。** 巨型银行资金部（库存）、证券公司交易台、外资银行、对冲基金与宏观基金、寿险公司（偶有对冲用途）、信托银行。
- **寿险公司对冲用途。** 中度——期货用于短期久期调整；鉴于 JGB 期货的 10Y CTD 锚点，长端对冲倾向于互换与 JGB 现金。
- **交易商银行收入贡献。** 经由做市、现金-期货 basis 交易以及 CTD-roll 头寸而显著。

## 产品 4  —— JGB 期货（5Y、20Y 超长期、10Y 迷你）

- **工具类型。** 以较短与较长名义 tenor 为标的的配套交易所挂牌 JGB 期货，外加十分之一规模的 10Y 迷你。
- **名义存量。** 持仓量实质性小于 10Y 标准；20Y 超长期持仓量在 QE 后期 / 后 YCC 时代随长端风险重现而增长。
- **CCP 清算。** JSCC 强制。
- **Tenor 深度。** 5Y、20Y、10Y 迷你。
- **市场参与者。** 寿险公司（在 20Y 超长期中为资产负债匹配而更活跃）、信托银行、交易商库存、较小的零售与 HFT（在迷你中）。
- **寿险公司对冲用途。** 20Y 超长期 JGB 期货是保险公司一项有意义的对冲工具，与现金 JGB 及 IRS 一同用于中长久期的叠加。
- **交易商银行收入贡献。** 低于 10Y 标准；20Y / 5Y 合约对交易商 ALM 与套利承载着小众但真实的业务。

## 产品 5  —— JGB 通胀挂钩债券（JGBi）

- **工具类型。** 现金债券市场——是通胀衍生品的标的而非其本身的衍生品，在此作为通胀-利率交叉点纳入。JGBi 是 MOF 发行的、挂钩全日本 CPI 除生鲜食品指数的通胀指数化 JGB。参见 [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]]。
- **名义存量。** 为 JGB 总存量的子集；相较名义 JGB 规模较小，但自 2013  重新发行以来被重新激活。
- **CCP 清算。** JGB 现金经由 BoJ-NET 结算；JGB OTC 清算在适用处于 JSCC 进行。
- **Tenor 深度。** 10 年的典型发行 tenor。
- **市场参与者。** 寿险公司、养老金、资产管理人、BoJ（历史上的及选择性的持续购买）、外国储备管理人、对冲基金。
- **寿险公司对冲用途。** 直接——保险公司使用 JGBi 对冲通胀挂钩或对通胀敏感负债的实际收益率敞口。
- **交易商银行收入贡献。** 专业利率台；交易商业务集中于 JGB 一级交易商公司。

## 产品 6  —— Swaption（日元 IRS 的期权）

- **工具类型。** 授予在未来某日进入一笔标的日元 IRS 之权利的 OTC 期权（欧式或百慕大式）；区分 payer / receiver swaption。参见 [[derivatives/japan-swaption-market|Japan swaption market]]。
- **名义存量。** 日元 swaption 名义在 BIS OTC 衍生品统计中作为 JPY 利率期权的一个组成部分报告。
- **CCP 清算。** 部分于 JSCC / LCH 清算；针对定制行权价 / tenor 有大量双边活动。
- **Tenor 深度。** 在 1Y、2Y、5Y、10Y 的 option-into-IRS tenor 中最具流动性；长端 swaption（例如 10Y into 20Y）用于寿险公司对冲。
- **市场参与者。** 寿险公司（重度使用 receiver swaption 以对冲利率保证特性）、交易商波动率台、对冲基金（波动率套利）、企业（偶有 payer swaption 用于对冲之对冲或可赎回债券对冲）。
- **寿险公司对冲用途。** 重度——日本寿险公司是全球长端日元 receiver swaption 的最大买家之列，对冲保证利率保单与 ALM 凸性。
- **交易商银行收入贡献。** 对巨型银行证券子公司与全球交易商的利率波动率台而言为实质性；长端波动率曲面是一项有意义的业务。

## 产品 7  —— CMS（固定期限互换）

- **工具类型。** 一条腿支付对应于某固定期限互换利率（例如 10Y CMS）的定期重置利率、另一条腿支付固定或浮动参照的 OTC 互换。参见 [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]]。
- **名义存量。** 为 JPY IRS 总名义的专业子集；不在头部 BIS 汇总中单独公布。
- **CCP 清算。** 标准化处部分于 JSCC / LCH 清算；定制交易为双边。
- **Tenor 深度。** 在参照为 5Y、10Y 或 20Y CMS 处最具流动性；交易 tenor 为 5Y 至 30Y。
- **市场参与者。** 结构化票据发行人（CMS 挂钩票据）、交易商利率台（波动率曲面与凸性调整）、对冲基金、寿险公司（曲线斜率对冲）。
- **寿险公司对冲用途。** 中度——与 swaption 及 IRS 一同用于曲线斜率与凸性叠加。
- **交易商银行收入贡献。** 小众；CMS 价差产品（CMS-spread option、CMS swap）位于结构化利率业务之中。

## 产品 8  —— Inflation swap（CPI 挂钩）

- **工具类型。** 以固定通胀率交换已实现 CPI 指数的 OTC 互换（在日本以零息通胀互换为主导，参照全日本 CPI 除生鲜食品）。参见 [[derivatives/japan-inflation-swap|Japan inflation swap]]。
- **名义存量。** 小于名义 IRS；日元通胀衍生品市场的流动性实质性低于日元 IRS 或 OIS。
- **CCP 清算。** LCH 存在部分通胀互换清算；日元通胀互换活动的主体为双边。
- **Tenor 深度。** 最具流动性者为 5Y、10Y；长端（20Y、30Y）用于保险 / 养老金叠加。
- **市场参与者。** 寿险公司、养老金、资产管理人、交易商利率 / 通胀台、对冲基金、偶有具通胀挂钩成本敞口的企业终端用户。
- **寿险公司对冲用途。** 专业——具通胀挂钩保单或养老金义务的保险公司与 JGBi 一同使用通胀互换。
- **交易商银行收入贡献。** 小众；通胀衍生品业务在日元中远小于美元或欧元。

## 产品 9  —— 日元-美元 cross-currency basis swap（CCBS）

- **工具类型。** 以两种货币（日元与美元）交换本金与浮动利率现金流的 OTC 互换，以 basis spread（日元腿上的附加 bp）为价格；典型的日元融资对美元融资套利工具。参见 [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] 与 [[derivatives/yen-basis-swap-market|yen basis swap market]]。
- **名义存量。** 在 BIS 统计中为日元 cross-currency OTC 衍生品总额的实质性组成部分；季末 CCBS 活动随日本机构展期美元融资而扩张。
- **CCP 清算。** CCBS 的 CCP 清算相较单一货币 IRS 有限；主体仍为双边，带有双边抵押品与 CSA 安排。
- **Tenor 深度。** 短端为 3M、6M、1Y；期限端为 2Y、3Y、5Y、10Y。
- **市场参与者。** 巨型银行资金部（为美元融资的重度使用者）、寿险公司（美元投资对冲）、具美元配置的资产管理人、交易商利率 / FX 台、提供美元流动性的外资银行。
- **寿险公司对冲用途。** 重度——日本寿险公司庞大的美元债券与美元信用组合需要持续的 CCBS 对冲，而 CCBS 中内含的对冲成本是保险业一项主要的损益驱动因素。
- **交易商银行收入贡献。** 对活跃于日元-美元融资走廊的巨型银行证券子公司与全球交易商而言为显著；季末 CCBS 定价是一项被密切关注的交易商业务晴雨表。

## 跨产品比较矩阵

| Dimension | Yen IRS (TIBOR) | Yen OIS (TONA) | JGB Fut 10Y | JGB Fut 5Y/20Y/mini | JGBi | Swaption | CMS | Inflation Swap | CCBS (¥/$) |
|---|---|---|---|---|---|---|---|---|---|
| **Instrument type** | OTC swap, fixed-vs-TIBOR | OTC swap, fixed-vs-TONA | Listed futures | Listed futures | Cash bond | OTC option on IRS | OTC swap referencing CMS rate | OTC swap, fixed-vs-CPI | OTC cross-currency swap |
| **Floating / variable reference** | 1M/3M/6M TIBOR | TONA compounded | JGB CTD price | JGB CTD price (each tenor) | All-Japan CPI ex-fresh-food | Underlying IRS | CMS yield | CPI | Yen FRN + USD FRN |
| **Notional outstanding reference** | BIS H2-2024: large share of total JPY IRS gross notional | BIS H2-2024: rapidly growing post-LIBOR share of total JPY IRS | JSCC / OSE OI: hundreds of thousands of contracts (front) | OSE OI: smaller than 10Y std | MOF JGBi: small share of total JGB outstanding | BIS H2-2024: JPY interest-rate options sub-aggregate | Specialist sub-aggregate | Specialist sub-aggregate | BIS H2-2024: meaningful share of yen-cross-currency OTC |
| **CCP clearing** | JSCC + LCH SwapClear | JSCC + LCH SwapClear | JSCC (mandatory) | JSCC (mandatory) | JSCC OTC where applicable | JSCC / LCH for standardized; bilateral for bespoke | JSCC / LCH for standardized; bilateral for bespoke | LCH partial; bulk bilateral | Limited CCP; bulk bilateral |
| **Tenor depth (liquid)** | 1Y–30Y; out to 40Y | 1W–10Y; up to 30Y | 10Y notional | 5Y, 20Y, 10Y mini | 10Y typical | 1Y, 2Y, 5Y, 10Y into IRS | 5Y, 10Y, 20Y CMS reference | 5Y, 10Y typical | 3M front through 10Y |
| **Megabank treasuries** | Heavy | Heavy | Heavy | Moderate | Moderate | Material | Moderate | Moderate | Heavy (USD funding) |
| **Securities-firm rates desks** | Heavy | Heavy | Heavy | Moderate | Moderate | Heavy | Moderate | Moderate | Heavy |
| **Life insurers** | Heavy (long-end pay-fix) | Indirect (discount curve) | Moderate | Heavy in 20Y super-long | Direct holder | Heavy (receiver swaption) | Moderate | Specialist | Heavy (USD-bond hedge) |
| **Hedge funds / macro** | Material | Material | Heavy | Material | Material | Material | Material | Specialist | Material |
| **Foreign banks** | Material | Material | Heavy | Material | Material | Material | Niche | Niche | Heavy |
| **Corporate end-user** | Loan-hedge | Short-tenor hedge | Limited | Limited | None directly | Callable-bond hedge | Niche | Niche | USD-revenue hedge |
| **Life-insurer hedging use** | Heavy | Indirect | Moderate | Heavy (20Y) | Direct | Heavy | Moderate | Specialist | Heavy |
| **Dealer-bank revenue role** | Top rates-business contributor | Material; post-LIBOR core | Significant via MM and basis trading | Lower than 10Y std | Specialist | Material vol-desk franchise | Niche | Niche | Significant in yen-USD corridor |

## 如何阅读本矩阵

利率衍生品产品矩阵是一个公开面工具。在阅读任一单一产品页面时：

1. **从 OTC vs 挂牌入手。** OTC 互换类产品（IRS、OIS、swaption、CMS、inflation swap、CCBS）生活在一个交易商对交易商与交易商对终端用户的世界中，在适用处带有 CCP 清算叠加；挂牌 JGB 期货生活在交易所交易、JSCC 清算的世界中。对冲联结跨越该边界（例如 CTD basis 交易、现金-期货套利）。
2. **检查浮动参照。** TIBOR vs TONA 迁移在操作上复杂；新发 JPY IRS 倾向 TONA，但 TIBOR 参照 IRS 仍在延续。估值用的贴现曲线参照为 OIS / TONA。
3. **检查 CCP 场所。** JSCC 主导国内流量的日元 IRS 清算；LCH SwapClear 主导跨境流量。两个场所分别报告已清算名义。JGB 期货于 JSCC 清算。CCBS 清算为部分。
4. **检查寿险公司一列。** 日本寿险公司对日元利率衍生品市场异常重要——长端 receiver swaption、20Y 超长期 JGB 期货、长端 IRS 以及用于美元债券对冲的 CCBS，全都承载着塑造定价的保险公司需求。
5. **检查交易商银行业务。** 巨型银行证券子公司（MUMS、SMBC Nikko、Mizuho Securities）与主要日本证券公司（Nomura、Daiwa）外加全球交易商构成业务层；本矩阵指出哪些产品承载最大的收入贡献。

## 边界情形与注意事项

- **IRS vs OIS。** 两者均为固定换浮动互换；差别在于浮动参照（TIBOR vs TONA）。操作上不同，但随 TIBOR 淡出而在经济上日益重叠。
- **挂牌期货 vs OTC 互换。** 一笔 10Y JGB 期货对冲久期，但锚定于 10Y CTD；一笔 OTC 10Y IRS 在交易 tenor 处对冲精确的 10Y 互换利率。保险公司 ALM 两者并用，具有不同的 basis 行为。
- **JGBi vs inflation swap。** JGBi 是一只交付通胀指数化现金流的现金 MOF 发行债券；inflation swap 是一笔无本金交换的 OTC 衍生品。两者均参照全日本 CPI 除生鲜食品。对冲基金的通胀盈亏平衡交易通常将 JGBi 与 OIS 组合，或直接使用 inflation swap。
- **Swaption vs JGB 期货期权。** Swaption 是互换利率的期权；JGB 期货期权（交易所挂牌）参照期货价格。日元利率期权活动偏向 swaption，JGB 期货期权相较美国国债期货期权发展较少。
- **CMS vs 普通互换。** 一笔 CMS 互换支付定期重置的 CMS 利率（一个固定期限的互换利率），而非定期重置的短 tenor 浮动利率。「固定期限」特性改变了凸性与波动率曲面依赖。
- **CCBS vs FX swap。** FX swap 是一种短 tenor 的近 / 远期融资工具；CCBS 是一笔多期互换，在两种货币中均有浮动利率现金流，外加日元腿上的 basis spread。CCBS 主导期限 cross-currency 融资通道；FX swap 主导短 tenor 通道。
- **BIS 名义 vs 总市值。** BIS 半年度同时公布总名义存量与总市值。总名义是用于规模比较的头部数字；总市值（小得多）是更接近真实敞口的数字。务必引用调查的年份。

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: BIS-coordinated OTC derivatives statistics for Japan (statistics/bis/yoshi).
- Bank for International Settlements: OTC derivatives statistics semi-annual release (derstats).
- Bank for International Settlements: OTC derivatives H2 2024  statistical release (otc_hy2502).
- Japan Securities Clearing Corporation (JSCC): IRS clearing services and JGB OTC clearing rules.
- LCH SwapClear: yen IRS clearing service description.
- Japan Exchange Group: JGB futures contract specifications.
- Japan Exchange Group: TONA 3-month futures specifications.
- Ministry of Finance: JGB auction calendar and JGB outstanding statistics.
- Ministry of Finance: JGB inflation-indexed bond (JGBi) issuance and outstanding pages.
- International Swaps and Derivatives Association (ISDA): SwapsInfo and IRS market-size publications.
- Financial Services Agency (FSA): FIEA framework for OTC derivatives clearing mandate.

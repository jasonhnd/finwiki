---
source: derivatives/japan-rates-derivative-product-matrix
source_hash: 1a3f7c520c54919b
lang: zh
status: machine
fidelity: ok
title: "日本利率衍生品产品矩阵"
translated_at: 2026-05-31T03:19:56.360Z
---

# 日本利率衍生品产品矩阵

## TL;DR

日本的日元利率衍生品综合体涵盖 **参照 TIBOR / TONA 的利率互换 (IRS)、参照 TONA 的隔夜指数互换 (OIS)、JGB 期货 (10年标准、5年、20年超长期、10年迷你)、作为通胀互换标的的 JGB 通胀挂钩债券 (JGBi)、互换期权 (日元 IRS 上的期权)、CMS (固定期限互换)、通胀互换 (CPI 挂钩),以及日元-美元交叉货币基差互换 (CCBS)**。这些产品在未平仓名义本金 (参照截至 2024 H2 的 BIS 半年度场外衍生品统计)、CCP 清算 (日元 IRS 在 JSCC;全球日元 IRS 在 LCH SwapClear;JGB 期货在 JSCC)、期限深度、市场参与者构成、寿险公司对冲用途,以及交易商银行收入贡献等方面各有不同。本矩阵汇集了可公开验证的各个轴,以便在提出曲线、对冲或交易对手问题之前,把任何单个日元利率衍生品页面置于更广泛的利率衍生品架构之中。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. It pairs with [[derivatives/japan-irs-market|Japan yen IRS market]] for the headline OTC swap lane, [[derivatives/ois-tona-curve|OIS / TONA curve]] for the discount-curve and RFR lane, [[derivatives/jgb-futures-curve|JGB futures curve]] for the exchange-listed hedge lane, [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] for the cross-currency intersection, [[derivatives/japan-swaption-market|Japan swaption market]] for the option-on-IRS lane, [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] for the slope-curve product, [[derivatives/japan-inflation-swap|Japan inflation swap]] for the CPI-linked hedge lane, and [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] for the cash-side inflation-linked underlying. The cash market is [[money-market/INDEX|money-market index]] and the corporate end-user side is [[finance/japan-corporate-fx-and-rate-hedge-policy|corporate FX and rate hedge policy]].

## 为何利率衍生品产品矩阵重要

「日本利率衍生品」这样一个单一短语,掩盖了一个事实:清算场所、名义本金规模、参与者构成与终端用户使用情形,在各产品之间各不相同。若不加以分类:

- 日元 IRS 看起来像日元 OIS,尽管其浮动参照 (TIBOR 对 TONA) 与贴现曲线角色不同;
- JGB 期货看起来像互换,尽管前者为交易所上市并实物交割,后者为场外且净额结算;
- 互换期权看起来像普通期权,尽管它是底层 IRS 曲线之上的期权性层,且具有独特的寿险公司需求;
- CCBS 看起来像外汇掉期,尽管它是连接日元与美元期限融资的融资套利工具;
- 通胀互换与 JGBi 看起来可互换,尽管前者为场外衍生品,后者为现券市场。

本矩阵把每个产品各归其位,以便任何单个衍生品页面都能对照其替代对冲路径或其现券市场标的来阅读。

## 产品 1 — 日元 IRS (TIBOR 浮动)

- **工具类型。** 以 TIBOR (1M、3M 或 6M) 为浮动参照的场外固定对浮动互换;标准日元 ACT/365  计息惯例。见 [[derivatives/japan-irs-market|Japan yen IRS market]]。
- **未平仓名义本金。** 在 BIS 半年度场外衍生品统计中,作为日元单一货币 IRS 总名义本金的一个组成部分报告;在半年度截止时点,日元 IRS 名义本金合计达数十万亿美元等值总额。TIBOR 对 TONA 的份额拆分属运营层面,并未单独公布。
- **CCP 清算。** 依 FIEA 清算义务,国内交易商间流量在 JSCC 清算;涉及主要全球交易商的跨境流量在 LCH SwapClear 清算。
- **期限深度。** 1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y 为流动性最高的点位;用于寿险公司对冲时可远至 40Y。
- **市场参与者。** 巨型银行资金部门 (交易商侧)、证券公司利率交易台、地区银行 ALM、寿险公司 (长端付固对冲)、外资银行、对冲基金、用于贷款对冲的企业终端用户。
- **寿险公司对冲用途。** 重度 —— 长端 TIBOR / 混合参照 IRS 是寿险公司针对固定利率负债现金流的标志性 ALM 对冲之一。
- **交易商银行收入贡献。** 在巨型银行证券子公司 (MUFG MUMS、SMBC Nikko、Mizuho Securities,以及 Nomura 和 Daiwa) 中,属利率业务的顶级贡献者之一。

## 产品 2 — 日元 OIS (TONA)

- **工具类型。** 以 TONA (东京隔夜平均利率) 按期末复利为浮动参照的场外固定对浮动互换;LIBOR 之后标志性的日元隔夜无风险参考利率 (RFR)。见 [[derivatives/ois-tona-curve|OIS / TONA curve]]。
- **未平仓名义本金。** BIS 半年度场外衍生品统计中日元 IRS 名义本金总额的一个子集;TONA OIS 份额在 LIBOR 过渡后大幅增长,并作为新发行标准持续扩大。
- **CCP 清算。** 在与 TIBOR IRS 相同的义务结构下,于 JSCC 与 LCH SwapClear 清算。
- **期限深度。** 在前端 (1W、1M、3M、6M、1Y、2Y、3Y) 流动性最高;作为贴现曲线参照也交易至 30Y。贴现曲线角色意味着即便 OIS 不是主交易,也会被参照。
- **市场参与者。** 巨型银行资金部门、交易商利率交易台、对冲基金与宏观基金、资产管理人、外资银行、用于短期限对冲的企业。
- **寿险公司对冲用途。** 间接 —— OIS 设定用于寿险公司 ALM 与 IRS 估值的贴现曲线;直接 OIS 对冲在短端更常见。
- **交易商银行收入贡献。** 可观;OIS 通道以 LIBOR 之后的贴现曲线角色支撑着已清算 IRS 市场。

## 产品 3 — JGB 期货 (10Y 标准)

- **工具类型。** 以 10年名义 JGB 为标的、交易所上市并实物结算的期货;以价格计是交易最活跃的日元利率衍生品。见 [[derivatives/jgb-futures-curve|JGB futures curve]]。
- **未平仓名义本金。** 主力合约的未平仓量以数十万张合约计;每张合约名义价值为面值 ¥100 百万。日成交量集中于 10Y 标准。
- **CCP 清算。** JSCC 强制。
- **期限深度。** 10年名义;最廉价可交割 (CTD) 篮子取自符合条件的 JGB 发行品种。10Y 标准、10Y 迷你、5Y 和 20Y 超长期合约在不同流动性水平交易。
- **市场参与者。** 巨型银行资金部门 (做市库存)、证券公司交易台、外资银行、对冲基金与宏观基金、寿险公司 (偶尔用于对冲)、信托银行。
- **寿险公司对冲用途。** 中度 —— 期货用于短期久期调整;鉴于 JGB 期货的 10Y CTD 锚定,长端对冲倾向于互换与 JGB 现券。
- **交易商银行收入贡献。** 显著,经由做市、现券-期货基差交易与 CTD 滚动持仓。

## 产品 4 — JGB 期货 (5Y、20Y 超长期、10Y 迷你)

- **工具类型。** 在更短与更长名义期限上的配套交易所上市 JGB 期货,加上十分之一规模的 10Y 迷你。
- **未平仓名义本金。** 未平仓量显著小于 10Y 标准;20Y 超长期未平仓量在量化宽松后期 / 收益率曲线控制 (YCC) 之后、随着长端风险重现而增长。
- **CCP 清算。** JSCC 强制。
- **期限深度。** 5Y、20Y、10Y 迷你。
- **市场参与者。** 寿险公司 (在 20Y 超长期上更活跃,用于资产负债匹配)、信托银行、交易商做市库存、较小型零售与高频交易 (在迷你合约)。
- **寿险公司对冲用途。** 20Y 超长期 JGB 期货,是保险公司在现券 JGB 与 IRS 之外,用于中长久期叠加的一项重要对冲工具。
- **交易商银行收入贡献。** 低于 10Y 标准;20Y / 5Y 合约为交易商 ALM 与套利带来小众但真实的业务。

## 产品 5 — JGB 通胀挂钩债券 (JGBi)

- **工具类型。** 现券市场 —— 是通胀衍生品的标的而非衍生品本身,此处作为通胀-利率的交叉点收入。JGBi 是财务省 (MOF) 发行、挂钩全日本 CPI (除生鲜食品) 指数的通胀指数化 JGB。见 [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]]。
- **未平仓名义本金。** JGB 总余额的一个子集;相较名义 JGB 规模较小,但自 2013  重新发行以来被重新激活。
- **CCP 清算。** JGB 现券经由 BoJ-NET 结算;适用时 JGB 场外清算在 JSCC。
- **期限深度。** 10年为典型发行期限。
- **市场参与者。** 寿险公司、养老基金、资产管理人、日本银行 (历史上及选择性的持续买入)、外国储备管理人、对冲基金。
- **寿险公司对冲用途。** 直接 —— 保险公司用 JGBi 对冲通胀挂钩或通胀敏感负债的实际收益率敞口。
- **交易商银行收入贡献。** 专业利率交易台;交易商业务集中于 JGB 一级交易商机构。

## 产品 6 — 互换期权 (日元 IRS 上的期权)

- **工具类型。** 赋予在未来某日进入底层日元 IRS 之权利的场外期权 (欧式或百慕大式);区分付方 / 收方互换期权。见 [[derivatives/japan-swaption-market|Japan swaption market]]。
- **未平仓名义本金。** 日元互换期权名义本金在 BIS 场外衍生品统计中作为日元利率期权的一个组成部分报告。
- **CCP 清算。** 部分在 JSCC / LCH 清算;定制行权价 / 期限存在大量双边活动。
- **期限深度。** 在 1Y、2Y、5Y、10Y 期权进入 IRS 的期限上流动性最高;长端互换期权 (例如 10Y 进入 20Y) 用于寿险公司对冲。
- **市场参与者。** 寿险公司 (重度使用收方互换期权以对冲利率保证特性)、交易商波动率交易台、对冲基金 (波动率套利)、企业 (偶尔使用付方互换期权用于对冲之对冲或可赎回债券对冲)。
- **寿险公司对冲用途。** 重度 —— 日本寿险公司是全球长端日元收方互换期权最大的买方之一,用于对冲保证利率保单与 ALM 凸性。
- **交易商银行收入贡献。** 对巨型银行证券子公司与全球交易商的利率波动率交易台可观;长端波动率曲面是一项重要业务。

## 产品 7 — CMS (固定期限互换)

- **工具类型。** 一条腿支付对应某固定期限互换利率 (例如 10Y CMS) 的定期重置利率、另一条腿支付固定或浮动参照的场外互换。见 [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]]。
- **未平仓名义本金。** 日元 IRS 名义本金总额的专业子集;未在 BIS 总览汇总中单独公布。
- **CCP 清算。** 标准化部分在 JSCC / LCH 清算;定制交易为双边。
- **期限深度。** 在参照为 5Y、10Y 或 20Y CMS 处流动性最高;交易期限 5Y 至 30Y。
- **市场参与者。** 结构化票据发行人 (CMS 挂钩票据)、交易商利率交易台 (波动率曲面与凸性调整)、对冲基金、寿险公司 (曲线斜率对冲)。
- **寿险公司对冲用途。** 中度 —— 与互换期权及 IRS 一并用于曲线斜率与凸性叠加。
- **交易商银行收入贡献。** 小众;CMS 利差产品 (CMS 利差期权、CMS 互换) 位于结构化利率业务之中。

## 产品 8 — 通胀互换 (CPI 挂钩)

- **工具类型。** 以固定通胀率交换已实现 CPI 指数的场外互换 (日本以零息通胀互换为主,参照全日本 CPI 除生鲜食品)。见 [[derivatives/japan-inflation-swap|Japan inflation swap]]。
- **未平仓名义本金。** 小于名义 IRS;日元通胀衍生品市场的流动性显著低于日元 IRS 或 OIS。
- **CCP 清算。** LCH 存在一些通胀互换清算;日元通胀互换活动的大部分为双边。
- **期限深度。** 5Y、10Y 流动性最高;长端 (20Y、30Y) 用于保险公司 / 养老金叠加。
- **市场参与者。** 寿险公司、养老基金、资产管理人、交易商利率 / 通胀交易台、对冲基金、偶尔具有通胀挂钩成本敞口的企业终端用户。
- **寿险公司对冲用途。** 专业 —— 具有通胀挂钩保单或养老金义务的保险公司,在 JGBi 之外使用通胀互换。
- **交易商银行收入贡献。** 小众;日元的通胀衍生品业务规模远小于美元或欧元。

## 产品 9 — 日元-美元交叉货币基差互换 (CCBS)

- **工具类型。** 以两种货币 (日元与美元) 交换本金与浮动利率现金流、以基差利差 (日元腿上的额外基点) 为价格的场外互换;标志性的日元融资对美元融资套利工具。见 [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] 与 [[derivatives/yen-basis-swap-market|yen basis swap market]]。
- **未平仓名义本金。** BIS 统计中日元交叉货币场外衍生品总额的重要组成部分;随着日本机构滚动美元融资,季末 CCBS 活动扩大。
- **CCP 清算。** 相较单一货币 IRS,CCBS 的 CCP 清算有限;大部分仍为双边,采用双边抵押品与 CSA 安排。
- **期限深度。** 短端为 3M、6M、1Y;期限端为 2Y、3Y、5Y、10Y。
- **市场参与者。** 巨型银行资金部门 (美元融资的重度用户)、寿险公司 (美元投资对冲)、配置美元的资产管理人、交易商利率 / 外汇交易台、提供美元流动性的外资银行。
- **寿险公司对冲用途。** 重度 —— 日本寿险公司庞大的美元债券与美元信用组合需要持续的 CCBS 对冲,而内嵌于 CCBS 的对冲成本是保险业的一项主要损益驱动因素。
- **交易商银行收入贡献。** 对活跃于日元-美元融资走廊的巨型银行证券子公司与全球交易商可观;季末 CCBS 定价是一项受密切关注的交易商业务晴雨表。

## 跨产品比较矩阵

| Dimension | Yen IRS (TIBOR) | Yen OIS (TONA) | JGB Fut 10Y | JGB Fut 5Y/20Y/mini | JGBi | Swaption | CMS | Inflation Swap | CCBS (¥/$) |
|---|---|---|---|---|---|---|---|---|---|
| **工具类型** | 场外互换,固定对 TIBOR | 场外互换,固定对 TONA | 上市期货 | 上市期货 | 现券 | IRS 上的场外期权 | 参照 CMS 利率的场外互换 | 场外互换,固定对 CPI | 场外交叉货币互换 |
| **浮动 / 可变参照** | 1M/3M/6M TIBOR | TONA 复利 | JGB CTD 价格 | JGB CTD 价格 (各期限) | 全日本 CPI 除生鲜食品 | 底层 IRS | CMS 收益率 | CPI | 日元 FRN + 美元 FRN |
| **未平仓名义本金参照** | BIS H2-2024:占日元 IRS 总名义本金的大份额 | BIS H2-2024:LIBOR 之后占日元 IRS 总额快速增长的份额 | JSCC / OSE 未平仓量:数十万张合约 (主力) | OSE 未平仓量:小于 10Y 标准 | MOF JGBi:占 JGB 总余额的小份额 | BIS H2-2024:日元利率期权子汇总 | 专业子汇总 | 专业子汇总 | BIS H2-2024:占日元交叉货币场外的重要份额 |
| **CCP 清算** | JSCC + LCH SwapClear | JSCC + LCH SwapClear | JSCC (强制) | JSCC (强制) | 适用时 JSCC 场外 | 标准化在 JSCC / LCH;定制为双边 | 标准化在 JSCC / LCH;定制为双边 | LCH 部分;大部分双边 | CCP 有限;大部分双边 |
| **期限深度 (流动性)** | 1Y–30Y;远至 40Y | 1W–10Y;至 30Y | 10Y 名义 | 5Y、20Y、10Y 迷你 | 10Y 典型 | 1Y、2Y、5Y、10Y 进入 IRS | 5Y、10Y、20Y CMS 参照 | 5Y、10Y 典型 | 3M 前端至 10Y |
| **巨型银行资金部门** | 重度 | 重度 | 重度 | 中度 | 中度 | 可观 | 中度 | 中度 | 重度 (美元融资) |
| **证券公司利率交易台** | 重度 | 重度 | 重度 | 中度 | 中度 | 重度 | 中度 | 中度 | 重度 |
| **寿险公司** | 重度 (长端付固) | 间接 (贴现曲线) | 中度 | 20Y 超长期重度 | 直接持有人 | 重度 (收方互换期权) | 中度 | 专业 | 重度 (美元债券对冲) |
| **对冲基金 / 宏观** | 可观 | 可观 | 重度 | 可观 | 可观 | 可观 | 可观 | 专业 | 可观 |
| **外资银行** | 可观 | 可观 | 重度 | 可观 | 可观 | 可观 | 小众 | 小众 | 重度 |
| **企业终端用户** | 贷款对冲 | 短期限对冲 | 有限 | 有限 | 无直接 | 可赎回债券对冲 | 小众 | 小众 | 美元收入对冲 |
| **寿险公司对冲用途** | 重度 | 间接 | 中度 | 重度 (20Y) | 直接 | 重度 | 中度 | 专业 | 重度 |
| **交易商银行收入角色** | 利率业务顶级贡献者 | 可观;LIBOR 之后的核心 | 经由做市与基差交易而显著 | 低于 10Y 标准 | 专业 | 可观的波动率交易台业务 | 小众 | 小众 | 在日元-美元走廊显著 |

## 如何阅读本矩阵

利率衍生品产品矩阵是一项公开层面的工具。在阅读任何单个产品页面时:

1. **从场外对上市入手。** 场外互换类产品 (IRS、OIS、互换期权、CMS、通胀互换、CCBS) 处于交易商对交易商及交易商对终端用户的世界中,适用时叠加 CCP 清算;上市 JGB 期货处于交易所交易、JSCC 清算的世界中。对冲关联会跨越这一边界 (例如 CTD 基差交易、现券-期货套利)。
2. **检查浮动参照。** TIBOR 对 TONA 的迁移在运营上颇为复杂;新发行日元 IRS 倾向 TONA,但参照 TIBOR 的 IRS 仍在延续。估值的贴现曲线参照为 OIS / TONA。
3. **检查 CCP 场所。** JSCC 在国内流量的日元 IRS 清算中占主导;LCH SwapClear 在跨境流量中占主导。两个场所分别报告已清算名义本金。JGB 期货在 JSCC 清算。CCBS 清算为部分。
4. **检查寿险公司一栏。** 日本寿险公司对日元利率衍生品市场异乎寻常地重要 —— 长端收方互换期权、20Y 超长期 JGB 期货、长端 IRS,以及用于美元债券对冲的 CCBS,都带有塑造定价的保险公司需求。
5. **检查交易商银行业务。** 巨型银行证券子公司 (MUMS、SMBC Nikko、Mizuho Securities) 与主要日本证券公司 (Nomura、Daiwa) 加上全球交易商,构成业务层;本矩阵指明哪些产品带有最大的收入贡献。

## 边界情形与注意事项

- **IRS 对 OIS。** 两者都是固定对浮动互换;差异在于浮动参照 (TIBOR 对 TONA)。运营上各异,但随着 TIBOR 淡出,经济上日益重叠。
- **上市期货对场外互换。** 一份 10Y JGB 期货对冲久期,但锚定于 10Y CTD;一份场外 10Y IRS 在交易期限上精确对冲 10Y 互换利率。保险公司 ALM 两者皆用,基差行为各不相同。
- **JGBi 对通胀互换。** JGBi 是 MOF 发行、交付通胀指数化现金流的现券;通胀互换是无本金交换的场外衍生品。两者都参照全日本 CPI 除生鲜食品。对冲基金的通胀盈亏平衡交易通常结合 JGBi 与 OIS,或直接使用通胀互换。
- **互换期权对 JGB 期货上的期权。** 互换期权是互换利率上的期权;JGB 期货上的期权 (交易所上市) 参照期货价格。日元利率期权活动偏向互换期权,JGB 期货期权不及美国国债期货期权发达。
- **CMS 对普通互换。** CMS 互换支付定期重置的 CMS 利率 (固定期限的互换利率),而非定期重置的短期限浮动利率。「固定期限」特性改变了凸性与波动率曲面依赖。
- **CCBS 对外汇掉期。** 外汇掉期是短期限的近 / 远端融资工具;CCBS 是在两种货币中均带浮动利率现金流、并在日元腿上加基差利差的多期互换。CCBS 在期限交叉货币融资通道占主导;外汇掉期在短期限通道占主导。
- **BIS 名义本金对总市值。** BIS 半年度同时公布未平仓总名义本金与总市值。总名义本金是用于规模比较的总览数字;总市值 (小得多) 是更接近真实敞口的数字。务必引用调查期次。

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
- Bank for International Settlements: OTC derivatives H2 2024 statistical release (otc_hy2502).
- Japan Securities Clearing Corporation (JSCC): IRS clearing services and JGB OTC clearing rules.
- LCH SwapClear: yen IRS clearing service description.
- Japan Exchange Group: JGB futures contract specifications.
- Japan Exchange Group: TONA 3-month futures specifications.
- Ministry of Finance: JGB auction calendar and JGB outstanding statistics.
- Ministry of Finance: JGB inflation-indexed bond (JGBi) issuance and outstanding pages.
- International Swaps and Derivatives Association (ISDA): SwapsInfo and IRS market-size publications.
- Financial Services Agency (FSA): FIEA framework for OTC derivatives clearing mandate.

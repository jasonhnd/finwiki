---
source: money-market/japan-ncd-negotiable-cd-market
source_hash: 8b911165afd2509c
lang: zh
status: machine
fidelity: ok
title: "日本 NCD(可转让大额存单)市场"
translated_at: 2026-05-30T14:13:23.428Z
---

# 日本 NCD(可转让大额存单)市场

## Wiki 路线

此条目位于 [[money-market/INDEX|money-market index]] 下。请与 [[money-market/japan-cp-commercial-paper-market|Japan CP market]] 对照阅读以获得同类/对比背景,与 [[money-market/boj-open-market-operations|BoJ open market operations]] 对照阅读以获得更广泛的系统/监管边界。

## TL;DR

可转让大额存单(NCD,譲渡性預金/CD)是由日本存款类机构发行的可转让定期存款。与普通定期存款不同,NCD 可以在到期前出售给第三方,使其成为发行银行的可交易短期融资工具,也是机构投资者的流动性投放。对于 FinWiki,NCD 是位于 [[money-market/japan-cp-commercial-paper-market|CP]](公司/非银行发行)和 [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]](主权折扣发行)旁边的银行发行人短期融资通道。

NCD 未清偿余额是日本央行发布的最大单一短期日元工具余额之一,是规范的银行短期批发融资通道。

## 市场地图

| 层级 | 功能 | FinWiki 路线 |
|---|---|---|
| 发行人 | 存款类银行以其自身名义发行 NCD;大型银行、信托银行和区域银行都发行。 | [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] |
| 交易商/投放 | 证券公司和银行财务部投放和做市 NCD。 | [[securities/japan-underwriting-market-structure]] |
| 投资者 | 银行、资产管理公司、MRF、公司财务、保险公司和外国投资者持有 NCD。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| 二级市场 | 场外交易交易商市场;短资和银行财务部中介交易。 | [[money-market/tanshi-company-business-model]] |
| 统计 | 日本央行短期金融市场和存款统计;银行披露。 | 日本央行统计表面 |

## 工具机制

| 要素 | 阅读 |
|---|---|
| 法律形式 | 银行存款,记录在发行银行资产负债表上作为存款负债,但可转让。 |
| 发行人 | 获授权发行 NCD 的银行或其他存款类机构。 |
| 期限 | 通常短期,通常为 1 月至 1 年,可能有定制期限。 |
| 利息方式 | 固定利率或浮动利率;浮动 NCD 通常参考短期日元基准。 |
| 最小面额 | 批发规模;不是零售存款工具。 |
| 税收/监管 | 出于审慎目的视为银行存款,但在二级市场中可交易。 |

## 二级市场流动性

NCD 在银行财务部、证券公司和短资公司充当中介的场外交易交易商市场中交易。二级流动性是真实的但参差不齐:

- 大型银行和主要信托银行发行具有最深入的买价;知名发行人名称交易更接近买卖价差平价。
- 区域银行和较小发行人 NCD 有更薄的二级深度,通常交易更接近持有至到期投放。
- 季度末和财政年度末资产负债表影响可能会在银行交易商管理容量时扩大利差。

对于投资者,NCD 流动性介于最深层(TDB、JGB 回购)和同样期限的流动性较低的企业 CP 之间。

## MMF/MRF 资格

NCD 是短期日元基金的标准持有:

- **MRF(货币储备基金)**:零售证券账户现金的占主导的经纪扫账工具。MRF 持有短期 JGB、TDB、NCD、CP 和回购。参见 [[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF page]] 了解后 2016  这一产品类别的结构变化。
- **机构 MMF 替代品**:短期 JGB 基金(中期国債ファンド 风格产品)和其他短债基金也持有 NCD 作为构建模块。
- **资格约束**:基金前景规定发行人等级和剩余期限规则;投资信托协会自律提供额外的形状。

来自 MRF/短期日元基金的 NCD 需求是银行短期发行的结构性下限。这一需求池的变化影响发行人定价。

## 当前未清偿规模

日本央行短期金融市场统计发布主要短期日元工具的未清偿余额。NCD 未清偿余额在历史上一直是最大的单一短期日元工具余额,通常远超 CP 和 TDB 未清偿余额的总和。确切的数字随银行融资策略和政策环境月份而月份变化,因此请始终引用使用的特定日本央行统计发布。

阅读 NCD 未清偿余额作为银行批发融资需求和银行资产负债表在当前政策制度下对短期负债吸引力的巧合指标。

## 后 2024 下限制度背景

在 2024 年 3 月日本央行远离负利率的政权改变之后,NCD 定价已不得不反映:

- 正的短期政策利率;
- 应用于银行准备金余额的 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility (補完当座預金制度)]] 利息;
- 在当前 NIRP 后框架下在日本央行持有多余现金与发行或持有 NCD 的相对吸引力。

对于银行,NCD 发行经济学现在由 NCD 融资的边际成本是否与存款融资、回购融资和在后 NIRP 框架下的直接拆借市场融资竞争驱动。

## JapanFG 相关性

- 发行人方面:[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]],这些集团下的信托银行,以及 [[banking/INDEX|banking domain]] 中涵盖的地区银行都发行 NCD。
- 交易商方面:[[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], [[securities-firms/smbc-nikko]], [[securities-firms/nomura-hd]] 和 [[securities-firms/daiwa-sg]] 参与投放和二级交易。
- 短资中介:[[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]] 和 [[financial-regulators/ueda-yagi-tanshi]] 提供与 NCD 二级市场活动重叠的经纪。

## 边界情况

- **NCD 与普通定期存款**:普通定期存款不可转让;NCD 可转让。NCD 登记簿支持二级转让。
- **NCD 与 CP**:NCD 是银行存款发行;CP 是公司/非银行发行。投资者选择取决于信用、税收和资产负债表规则。
- **NCD 与短期债**:NCD 是存款负债;短债是具有不同审慎和会计处理的债务证券。
- **NCD 与银行间存款**:双边银行间存款与可转让 NCD 不同。

## 阅读检查清单

1. 在阅读利差之前,确定发行人银行类型(大型银行、信托银行、区域银行、外资银行分行)。
2. 验证期限以及 NCD 是固定利率还是浮动利率。
3. 检查头寸是被投资者持有还是被用作抵押品。
4. 将 NCD 未清偿余额与 CP 和 TDB 未清偿余额进行比较,以阅读短期日元流动性停放的位置。
5. 针对 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] 准备金利率环境阅读定价。

## 相关条目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 来源

- 日本央行:货币市场概览和短期金融市场统计。
- 日本央行:统计下载表面的存款和 CD 统计。
- JSDA:短期金融市场统计参考。
- FSA:关于与 NCD 和短期存款相关的工具分类的 FIEA 常见问题。

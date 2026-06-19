---
source: money-market/japan-ncd-negotiable-cd-market
source_hash: 19610ed46cdc559a
lang: zh
status: machine
fidelity: ok
title: "日本NCD（可转让定期存单）市场"
translated_at: 2026-06-19T06:09:18.146Z
---

# 日本NCD（可转让定期存单）市场

## Wiki 路径

本条目归属于 [[money-market/INDEX|money-market index]]。请对照 [[money-market/japan-cp-commercial-paper-market|Japan CP market]] 了解同类 / 对比背景，并对照 [[money-market/boj-open-market-operations|BoJ open market operations]] 了解更广泛的系统 / 监管边界。

## TL;DR

可转让定期存单（NCD，譲渡性預金 / CD）是由日本存款类机构发行的可转让定期存款。与普通定期存款不同，NCD 可在到期前出售给第三方，因而对发行银行而言是一种可交易的短期融资工具，对机构投资者而言则是一种流动性高的短期日元配置工具。对 FinWiki 而言，NCD 是银行发行人的短期融资通道，与 [[money-market/japan-cp-commercial-paper-market|CP]]（企业 / 非银行发行）和 [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]]（主权贴现发行）并列。

NCD 存量是日本银行公布的最大的单一短期日元工具余额之一，也是银行短期批发融资的标准通道。

## 市场图谱

| 层级 | 功能 | FinWiki 路径 |
|---|---|---|
| 发行人 | 存款类银行以自身名义发行 NCD；超大型银行、信托银行和地方银行均有发行。 | [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] |
| 交易商 / 承销 | 证券公司和银行资金部进行 NCD 的承销与做市。 | [[securities/japan-underwriting-market-structure]] |
| 投资者 | 银行、资产管理公司、MRF、企业资金部、保险公司及外国投资者持有 NCD。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| 二级市场 | 场外交易商市场；短资公司和银行资金部居间撮合交易。 | [[money-market/tanshi-company-business-model]] |
| 统计 | 日本银行短期金融市场及存款统计；银行信息披露。 | 日本银行统计界面 |

## 工具机制

| 要素 | 解读 |
|---|---|
| 法律形态 | 属于银行存款，在发行银行资产负债表上记为存款负债，但可转让。 |
| 发行人 | 获准发行 NCD 的银行或其他存款类机构。 |
| 期限 | 一般为短期，通常为 1 个月至 1 年，亦可设定定制期限。 |
| 计息方式 | 固定利率或浮动利率；浮动 NCD 通常参考短期日元基准利率。 |
| 最低面额 | 批发规模；并非零售存款工具。 |
| 税务 / 监管 | 出于审慎监管目的视为银行存款，但可在二级市场交易。 |

## 二级市场流动性

NCD 在场外交易商市场交易，由银行资金部、证券公司和短资公司居间撮合。二级市场流动性真实存在但并不均衡：

- 超大型银行和主要信托银行的发行拥有最深的买盘；知名发行人名称的成交价更接近买卖价平价。
- 地方银行及较小发行人的 NCD 二级市场深度较薄，往往以更接近持有至到期的方式成交。
- 季末和财年末的资产负债表效应会在银行交易商管理额度时扩大利差。

对投资者而言，NCD 的流动性介于流动性最深的一端（TDB、JGB 回购）与同一期限下流动性较差的企业 CP 之间。

## MMF / MRF 适格性

NCD 是短期日元基金的标准持仓：

- **MRF（货币储备基金）**：零售证券账户现金的主要扫款工具。MRF 持有短期 JGB、TDB、NCD、CP 和回购。关于该产品类别在 2016 之后的结构性变化，参见 [[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF page]]。
- **机构 MMF 替代品**：短期 JGB 基金（中期国债基金型产品）及其他短债基金也将 NCD 作为构成要素持有。
- **适格性约束**：基金招募说明书规定发行人评级和剩余期限规则；投资信托协会的自律规则提供额外约束。

来自 MRF / 短期日元基金的 NCD 需求是银行短期发行的结构性底部。这一需求池的变化会影响发行人定价。

## 当前存量规模

日本银行短期金融市场统计公布主要短期日元工具的余额。NCD 存量在历史上一直是所披露的最大的单一短期日元工具余额，常常远高于 CP 与 TDB 余额之和。确切数字会随银行融资策略和政策环境逐月变动，因此务必引用所使用的特定日本银行统计发布。

将 NCD 存量解读为银行批发融资需求以及当前政策体制下银行对短期负债的资产负债表偏好的同步指标。

## 2024 之后的下限体系背景

在 2024 年3月日本银行从负利率转向的体制变化之后，NCD 定价不得不反映：

- 正的短期政策利率；
- 适用于银行准备金余额的 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility (補完当座預金制度)]] 利率；
- 将多余现金存放在日本银行与发行或持有 NCD 之间的相对吸引力。

对银行而言，NCD 发行的经济性如今取决于在后 NIRP 框架下，NCD 融资的边际成本是否相对于存款融资、回购融资和直接拆借市场融资具有竞争力。

## 与 JapanFG 的关联

- 发行人侧：[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]、这些集团旗下的信托银行，以及纳入 [[banking/INDEX|banking domain]] 的地方银行均发行 NCD。
- 交易商侧：[[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], [[securities-firms/smbc-nikko]], [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]] 参与承销和二级市场交易。
- 短资居间：[[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] 提供与 NCD 二级市场活动相重叠的经纪服务。

## 边界情形

- **NCD vs 普通定期存款**：普通定期存款不可转让；NCD 可转让。NCD 登记制度支持二级转让。
- **NCD vs CP**：NCD 是银行的存款发行；CP 是企业 / 非银行发行。投资者的选择取决于信用、税务和资产负债表规则。
- **NCD vs 短期债券**：NCD 是存款负债；短期债券是审慎监管和会计处理均不同的债务证券。
- **NCD vs 同业存款**：双边同业存款与可转让 NCD 并不相同。

## 阅读清单

1. 在解读利差之前，先确定发行银行的类型（超大型银行、信托银行、地方银行、外国银行分行）。
2. 核实期限以及 NCD 是固定利率还是浮动利率。
3. 检查该头寸是投资者持有，还是被用作担保品。
4. 将 NCD 存量与 CP 及 TDB 存量比较，以解读短期日元流动性所处的位置。
5. 将定价与 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] 准备金利率环境对照解读。

## 相关

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

## 出处

- 日本银行：货币市场概览及短期金融市场统计。
- 日本银行：统计下载界面上的存款与 CD 统计。
- JSDA：短期金融市场统计参考资料。
- 金融厅：关于与 NCD 及短期存款相关的工具分类的金商法 FAQ。

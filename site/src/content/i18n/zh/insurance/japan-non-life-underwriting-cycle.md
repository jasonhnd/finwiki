---
source: insurance/japan-non-life-underwriting-cycle
source_hash: 517b493e054ea4d7
lang: zh
status: machine
fidelity: ok
title: "日本财险核保周期"
translated_at: 2026-05-31T07:28:06.128Z
---

# 日本财险核保周期

## Wiki route

This entry sits under [[insurance/INDEX|insurance index]] and is the underwriting-cycle deep dive for Japanese non-life insurers. Read it together with [[insurance/japan-nonlife-big-three|Japan non-life big three]] for the entity-level routing, with [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]] for the catastrophe pricing layer, with [[insurance/earthquake-insurance-public-private-scheme|earthquake insurance public-private scheme]] for the household earthquake carve-out, with [[insurance/economic-value-based-solvency|economic-value-based solvency]] for the regulatory frame, with [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] for cross-jurisdiction comparison, with [[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] for the group-level supervisory layer, and with [[insurance/insurance-agency-and-brokerage-japan|agency and brokerage Japan]] for the distribution layer that drives expense ratios.

Operating-company routing goes through [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]], [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]], [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]], and [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]]. Holding-company routing goes through [[JapanFG/tokio-marine|Tokio Marine]], [[JapanFG/msad|MS&AD]], and [[JapanFG/sompo|Sompo]]. License context is in [[JapanFG/legal-financial-licenses/insurance-license-and-solvency|insurance license and solvency route]].

## TL;DR

日本财险核保周期主要由三条产品线动态主导：型式别费率改革体制下的车险费率充足性、灾害负荷持续上升下的火险 / 财产险费率充足性，以及从全球市场条件传导而来的专业险种周期（网络安全险、D&O、海上险）。在经营公司层面，combined ratio 可拆解为 loss ratio（赔付 + 准备金变动 / 赚取保费）加上 expense ratio（获客 + 管理费用 / 赚取保费）。combined ratio 低于 100% 表示核保利润；高于 100% 表示核保亏损，是否能被投资收益抵消则另当别论。

三大经营主体 —— [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、MS&AD 旗下的 [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]，以及 [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] —— 共享同样的日本国内市场结构，但在产品线组合、渠道集中度、海外收益对冲和再保险采购策略上各不相同。

再保险时点很重要：与日本财年对齐的 4 月 1  renewal 是日本国内最主要的 treaty 周期，同时年中和 1 月 renewal 也有意义。全球再保险市场的 hard / soft cycle 会直接传导到日本火险 / 财产险和巨灾定价中。

## Combined-ratio decomposition

| Component | Definition | Typical drivers |
|---|---|---|
| Loss ratio | （已发生损失 + LAE）/ 赚取保费 | 频率、严重度、巨灾事件、准备金发展 |
| Expense ratio | （获客 + 运营费用）/ 赚取保费 | 代理手续费、分支机构开销、IT 投资、行为合规开销 |
| Combined ratio | Loss ratio + expense ratio | 不含投资回报 |

combined ratio 为 95%，意味着在计入投资收益前，每 1 日元赚取保费对应有 5  个百分点的核保利润。combined ratio 还可按产品线拆解：车险、火险、海上险、责任险 / 一般责任、意外险、杂项险。巨灾年份中，火险和海外财产险的 combined ratio 可飙升至远高于 100%，随后在非巨灾年份回落至 100% 以下。

### Auto market structure

日本的任意汽车保险是财险公司按保费计最大的险种，另有自赔责任险（自賠責保険）作为独立的公私结合制度并行存在。

### Tier-rating reform

任意车险市场采用型式别费率等级制度，通过损害保険料率算出機構（GIROJ）的参考纯保费率框架运行。车辆根据品牌 / 车型 / 类型的实际索赔经验被分配到不同费率等级，且等级会定期更新。高损失车辆类别对应更高基准保费，低损失类别则对应更低保费。

与改革相关的重点包括：

- 费率等级刷新周期会把纯保费率信号更新到最新索赔经验；
- 网约车、车联网 UBI、ADAS 普及会改变底层的事故频率和损失严重度；
- 即便事故频率下降，电子部件、传感器和 ADAS 部件仍会推高单次事故的平均维修成本；
- 改革节奏可能比真实经验滞后一到两个周期。

### Auto loss ratio drivers

| Driver | Direction | Mechanism |
|---|---|---|
| 老龄化车队 | 混合 | 旧车可能残值更低，但维修频率更高 |
| ADAS 普及 | 频率下降、严重度上升 | 事故更少，但每次事故维修更贵 |
| 车联网 / UBI | 更安全驾驶者的自我选择 | 降低 UBI 用户事故频率，并影响交叉补贴 |
| EV 转型 | 初期严重度更高 | 电池损坏成本高，专门维修网络有限 |
| 驾驶员人口结构 | 驾驶员老龄化 | 频率 / 严重度模式变化 |
| 维修厂生态 | 集中度 / 定价 | 代理 / 修理厂关系会影响严重度结果 |

三巨头的应对措施包括：更新纯保费率使用、在 GIROJ 参考之外增加内部定价层级、对低价代理业务簿进行渠道纪律管理，以及调整再保险自留。

### Auto expense ratio drivers

日本车险分销高度依赖代理渠道（汽车经销商、修理厂、专业代理）。代理手续费和行为合规成本共同塑造 expense ratio。在线直营车险挑战者则通过更低的 expense ratio 竞争，并在特定消费人群中建立了份额。

### Fire / property structure

日本火险涵盖住宅与商业财产的火灾、水损、风灾及其他列明风险。家庭地震风险被剥离到 [[insurance/earthquake-insurance-public-private-scheme|public-private earthquake insurance scheme]]，而商业地震财产风险通常由民间承保，并配以巨灾再保险与明确的分层限额。

### Catastrophe loading trends

台风、洪水和次生灾害的多年损失经验，推动火险 / 财产险费率反复上修：

- 台风 Jebi（2018）、Faxai（2019）、Hagibis（2019）造成大额保险损失；
- 其后多个台风和洪水季又叠加了进一步损失经验；
- GIROJ 参考纯保费率刷新周期因此持续上行；
- 再保险价格也在上行，既受全球 retro 定价影响，也受日本本地巨灾经验影响，并直接传导到分出方的净风险转移成本。

### Fire combined-ratio dynamics

在非巨灾年份，火险 combined ratio 可在离散年份口径下低于 100%。在重大巨灾年份，火险 combined ratio 通常会显著超过 100%，必须依赖再保险回收与前期准备金充足性来稳定控股公司结果。

三巨头的应对方式包括：

- 按 GIROJ 参考修订提高直接保费率；
- 降低最高风险区的暴露集中度；
- 重构保障条款（免赔额、分层限额、理赔处理条件）；
- 调整再保险自留和分层结构；
- 选择性退出亏损的代理分销业务簿。

### Cyber

网络安全险是一条增长中的专业险种，驱动力来自勒索软件、供应链攻击、监管披露要求以及企业客户需求。全球网络安全险市场以多年为周期经历 hardening / softening。日本三大经营公司既在国内承保，也通过国际子公司承保，尤其是东京海上通过 HCC 等海外专业险平台。

网络险周期的驱动因素：

- 勒索软件事件的频率和严重度；
- 日本、美国 SEC、欧盟对网络披露的预期；
- 网络损失分布模型的成熟度仍在演进；
- 网络风险再保险容量有限，且有集中度顾虑。

### D&O

董事高管责任险遵循全球 D&O 周期，受证券诉讼频率、监管执法和公司治理失败驱动，经历多年 hard / soft 轮替。日本 D&O 还受到日本证券法、公司治理守则和上市公司预期的塑造。

### Marine

海上保险（货运、船体、P&I）是全球交易型专业险种。日本海上险围绕主要航运集团（NYK、MOL、K-Line）、商社货物流，以及包括 Lloyd's 在内的全球船体 / 责任联合承保参与而构建。其周期由全球贸易流、地缘政治扰动（红海绕航、制裁、制裁执行）和海损经验驱动。

## Reinsurance procurement timing

日本再保险合约以与日本财年对齐的 4 月 1  renewal 为主，另有规模较小的 1 月和 7 月 renewal。采购动态如下：

| Element | Description |
|---|---|
| April 1  renewal | 日本国内业务最主要的 treaty renewal |
| January 1  renewal | 全球市场参考周期；影响基准定价 |
| Mid-year renewal | 特定险种和全球 retrocession |
| Reinsurance broker | Aon、Guy Carpenter、Howden Re 等全球大型经纪商担任中介 |
| Reinsurer panel | 多元化承保团，包括 Munich Re、Swiss Re、Hannover Re、SCOR、Berkshire Re、Lloyd's syndicates 及日本再保险机构 |
| Layered structure | 超额赔付分层、aggregate cover、巨灾层、retrocession 等层叠结构 |
| Reinstatement premium | 巨灾事件后触发；影响净成本经济学 |

大型巨灾之后的 hard reinsurance market 会推高价格并收紧容量。多个低灾年份后的 soft market 则会压低价格并增加容量。日本分出公司必须根据全球市场条件而非仅国内损失经验来优化自留和分层购买。

## Investment-income offset and capital lens

财险公司的底线利润 = 核保结果（combined ratio）+ 保单持有人浮存金的投资回报 − 税。在软核保周期中，投资收益可以吸收适度核保亏损；在硬核保周期中，投资收益改善与核保恢复会形成正向叠加。

在 [[insurance/economic-value-based-solvency|economic-value-based solvency]] 制度下，ESR 以统一经济资本口径捕捉核保风险（巨灾与非巨灾）和市场风险（股票、信用、利率）。[[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] 讨论监管资本架构；[[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] 讨论同一集团层资本如何在指定 IAIG 的 ICS 框架下进行报告。

## ESR cat-module sensitivity

[[insurance/economic-value-based-solvency|economic-value-based ESR]] 制度下的财险巨灾模块，会对日本主要灾害设置压力情景：

| Peril | ESR cat-module treatment |
|---|---|
| 地震（商业财产） | 按日本特有地震暴露校准的概率冲击情景 |
| 台风 | 反映太平洋台风路径分布的风灾与风暴潮情景 |
| 洪水 / 内水 | 河流型与城市内涝情景 |
| 火山 | 适用时包括降灰和泥石流情景 |
| 海外巨灾 | 外国子公司的巨灾暴露并入集团资本层 |

家庭地震风险在结构上不进入民间财险巨灾模块敏感性，因为它属于由 [[JapanFG/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]] 管理的 [[insurance/earthquake-insurance-public-private-scheme|public-private scheme]]。商业地震和海外地震暴露则属于民间承保，并进入巨灾模块。

巨灾模块资本收费会直接影响三大集团各自能在表内保留多少灾害风险，以及必须向外部分保人分出多少。因此，资本效率取决于再保险与 ESR 的联合优化，而不是单独的再保险决策或资本决策。

## Group-level vs operating-company-level reading

一个常见误读，是把控股公司综合报告中的 combined ratio 直接当成单一经营公司的 combined ratio。三大集团的结构如下：

| Group | Operating-company combined ratios consolidated into group | Group-level adjustments |
|---|---|---|
| [[JapanFG/tokio-marine|Tokio Marine]] | [[JapanFG/tokio-marine-nichido-fire|TMNF]] 国内 + Philadelphia + HCC + Pure + Lloyd's syndicate + 其他 | 汇率折算、合并抵销、集团再保险回收 |
| [[JapanFG/msad|MS&AD]] | [[JapanFG/mitsui-sumitomo-insurance|MSI]] + [[JapanFG/aioi-nissay-dowa-insurance|ADI]] 国内 + MS Amlin + 海外 | 汇率折算、合并抵销、集团内再保险 |
| [[JapanFG/sompo|Sompo]] | [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] 国内 + Sompo International + 其他 | 汇率折算、合并抵销、集团内再保险 |

日本国内 combined ratio 与海外 combined ratio 在同一年中可能朝相反方向变动。集团层结果是加权后的多元化混合体，而这种多元化收益会因年份和灾害实际发生地不同而变化。

### Tokio Marine Nichido Fire（隶属 Tokio Marine HD）

- 按保费计是日本最大的单一国内财险经营公司；
- 产品线覆盖车险、火险、海上险和专业险，较为多元；
- 控股集团（[[JapanFG/tokio-marine|Tokio Marine]]）依靠 Philadelphia Consolidated、HCC、Pure Group、Lloyd's syndicate 等获得显著的海外收益对冲；
- 再保险采购在集团资本框架内管理，并受益于海外子公司的多元化。

### MS&AD operating companies — MSI and ADI

- [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] 与 [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] 都是 [[JapanFG/msad|MS&AD]] 旗下主要国内经营公司；
- ADI 的 mobility / Toyota 体系形成了独特的车险分销和客户基础；
- MS Amlin 提供专业险 / 再保险暴露；
- 海外 P&C 组合为集团收益提供分散化。

### Sompo Japan Insurance（隶属 Sompo HD）

- [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] 是 [[JapanFG/sompo|Sompo]] 旗下主要国内财险经营公司；
- Sompo International 提供海外专业险 / 再保险；
- 代理渠道和客户说明义务一直是近期监管对话的一部分；
- 国内车险和火险仍是其核心保费基础。

## Related

- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/earthquake-insurance-public-private-scheme]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/japan-iaig-ics-mapping]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/saison-automobile-fire]]
- [[JapanFG/tokio-marine]]
- [[JapanFG/msad]]
- [[JapanFG/sompo]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/aioi-nissay-dowa-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- 日本損害保険協会：行业概览与统计。
- 損害保険料率算出機構（GIROJ）：参考纯保费率出版物。
- Tokio Marine Holdings：综合报告与年报。
- MS&AD Holdings：综合报告与披露资料库。
- Sompo Holdings：综合报告与年报。
- FSA：关于经济价值基础偿付能力监管。

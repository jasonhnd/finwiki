---
source: insurance/japan-non-life-underwriting-cycle
source_hash: f783c8f2669e4cef
lang: zh
status: machine
fidelity: ok
title: "Japan non-life underwriting cycle"
translated_at: 2026-06-19T06:09:18.186Z
---

# Japan non-life underwriting cycle

## Wiki route

This entry sits under [[insurance/INDEX|insurance index]] and is the underwriting-cycle deep dive for Japanese non-life insurers. Read it together with [[insurance/japan-nonlife-big-three|Japan non-life big three]] for the entity-level routing, with [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]] for the catastrophe pricing layer, with [[insurance/earthquake-insurance-public-private-scheme|earthquake insurance public-private scheme]] for the household earthquake carve-out, with [[insurance/economic-value-based-solvency|economic-value-based solvency]] for the regulatory frame, with [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] for cross-jurisdiction comparison, with [[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] for the group-level supervisory layer, and with [[insurance/insurance-agency-and-brokerage-japan|agency and brokerage Japan]] for the distribution layer that drives expense ratios.

经营公司（operating-company）层面的路由经由 [[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、[[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]]、[[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] 与 [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]]。控股公司（holding-company）层面的路由经由 [[non-life-insurers/tokio-marine|Tokio Marine]]、[[non-life-insurers/msad|MS&AD]] 与 [[non-life-insurers/sompo|Sompo]]。许可背景见 [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]]。

## TL;DR

日本损保的承保周期由三类产品线动态主导：在型式分级费率改革制度下的车险费率充足性、在巨灾负荷不断加重下的火灾／财产费率充足性，以及自全球市况输入的专业线（specialty-line）周期动态（网络险、董监事责任险 D&O、海上险）。经营公司层面的综合成本率（combined ratio）可分解为损失率（已付赔款 + 准备金变动 / 已赚保费）加上费用率（取得费 + 管理费 / 已赚保费）。低于 100%的综合成本率表示承保利润；高于 100%则表示由投资收益相抵（或未能相抵）的承保亏损。

三大经营实体 ── [[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、MS&AD 旗下的 [[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]，以及 [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] ── 共享相同的国内市场结构，但在产品线构成、渠道集中度、海外收益相抵及再保险采购战略上各有不同。

再保险采购的时点很重要：4 月 1 续转是日本国内占主导地位的再保险合约周期（与日本财年相一致），年中及 1 月的续转也具相关性。全球再保险的硬市场与软市场周期会直接传导至日本的火灾／财产及巨灾定价。

## Combined-ratio decomposition

| Component | Definition | Typical drivers |
|---|---|---|
| Loss ratio | （已发生损失 + 理赔费用 LAE）/ 已赚保费 | 频率、严重度、巨灾事件、准备金发展 |
| Expense ratio | （取得费 + 营业费用）/ 已赚保费 | 代理佣金、分支机构间接费、IT 投资、合规行为间接费 |
| Combined ratio | 损失率 + 费用率 | 不含投资回报 |

95%的综合成本率意味着，在投资收益之前，每一日元已赚保费对应 5 个百分点的承保利润。综合成本率可按产品线分解：车险、火灾、海上、意外／综合责任（GL）、人身意外、其他。巨灾年份的综合成本率在火灾及海外财产线中可远高于 100%而骤升，随后在非巨灾年份回落至 100%以下。

### Auto market structure

任意自动车保险是日本损保按保费计最大的险种，并由作为单独运营之官民方案的自动车损害赔偿责任保险（自赔责保险）加以补充。

### Tier-rating (型式別料率) reform

任意车险市场采用型式分级费率制度（型式別料率クラス制度），通过损害保险料率算出机构（GIROJ）的参考纯率框架运营。车辆依据按制造商／车型／型式观测到的赔付经验被分配到费率等级，且费率等级会定期更新。损失较高的车辆等级面对较高的基准保费；损失较低的等级面对较低的保费。

与改革相关的要点：

- 型式分级费率的更新周期使参考纯率信号与赔付经验相适应；
- 拼车（ride-share）、基于车联网的按使用付费保险（UBI）及 ADAS（先进驾驶辅助）功能的采用，改变了基础的赔付频率与严重度；
- 随着车辆电子设备、传感器与 ADAS 部件即便在频率下降时仍推高平均赔付严重度，维修成本正在上升；
- 型式分级费率制度旨在使费率充足性与这些变化保持一致，但改革节奏可能滞后实际经验一至两个周期。

### Auto loss ratio drivers

| Driver | Direction | Mechanism |
|---|---|---|
| 老龄化的车辆保有量 | 混合 | 较旧车辆重置价值可能较低但维修频率较高 |
| ADAS 的采用 | 频率下降、严重度上升 | 碰撞减少，但每次碰撞的维修成本更高 |
| 车联网／UBI | 更安全驾驶者的自我选择 | 降低 UBI 投保者的频率；存在交叉补贴的含义 |
| EV 转型 | 初期严重度上升 | 电池损坏成本高；专门维修网络有限 |
| 驾驶者人口结构 | 老龄化的驾驶者基础 | 频率／严重度的模式发生转变 |
| 修理厂生态 | 集中度／定价 | 代理店／修理厂关系对严重度结果具有影响 |

三大公司在费率充足性上的应对包括：更新参考纯率的运用、超越 GIROJ 参考纯率指引的内部定价分级精细化、对定价不足之代理店业务的渠道约束，以及再保险自留额的调整。

### Auto expense ratio drivers

日本的车险销售渠道高度依赖代理店（汽车经销商、修理厂、专业代理店）。代理佣金与合规行为成本构成费用率。直销挑战者（在线直销车险 P&C）以较低的费用率竞争，并已在特定消费者细分中建立了份额。

### Fire / property structure

日本的火灾保险（火災保険）为住宅及商业财产承保火灾、水损、风灾及其他列明危险。家庭的地震风险被切分至 [[insurance/earthquake-insurance-public-private-scheme|public-private earthquake insurance scheme]]；商业地震财产一般由民间承保，且通常附带巨灾再保险与明确的子限额。

### Catastrophe loading trends

台风、洪水及次生危险事件的多年经验，促成了火灾／财产费率的多次上调：

- 台风 Jebi（2018）、Faxai（2019）、Hagibis（2019）造成了巨额承保损失；
- 其后的台风与洪水季节增添了进一步的损失经验；
- GIROJ 的参考纯率更新周期已呈上升趋势以反映这一经验；
- 再保险定价（由全球转分保定价与日本特有的巨灾经验驱动）已呈上升趋势，直接传导至分出方的风险转移净成本。

### Fire combined ratio dynamics

火灾综合成本率在非巨灾年份按单年度计可低于 100%。在重大巨灾年份，火灾综合成本率通常会实质性地超过 100%，并需要再保险回收 + 往年准备金充足以稳定控股公司业绩。

三大公司在费率充足性上的应对包括：

- 按 GIROJ 参考修订上调直接保费费率；
- 削减最高危险区域的风险敞口集中；
- 重构承保条款（免赔额、子限额、理赔处理条件）；
- 调整再保险自留额与分层覆盖结构；
- 选择性退出不盈利的代理店销售业务。

### Cyber

网络保险是一条增长型专业线，由勒索软件敞口、供应链攻击、监管披露要求及法人客户需求驱动。全球网络险市场周期以多年周期硬化／软化。日本三大经营公司既在国内、也通过国际子公司（尤其是东京海上经由 HCC 等的海外专业线特许经营）承保网络险。

网络险承保周期的驱动因素：

- 勒索软件事件的频率与严重度；
- 监管的网络披露预期（日本、美国 SEC、欧盟）；
- 网络损失分布的模型成熟度（仍在演进中）；
- 网络危险的再保险承保能力（有限；存在集中度担忧）。

### D&O

董监事责任险遵循全球 D&O 周期，伴随由证券诉讼频率、监管执法及公司治理失败驱动的多年硬／软周期。日本的 D&O 受日本证券法、公司治理准则及上市公司预期的塑造。

### Marine

海上保险（货物、船体、P&I）是一条全球交易的专业线。日本的海上险围绕主要航运集团（日本邮船 NYK、商船三井 MOL、川崎汽船 K-Line）、商社的货物流，以及包括劳合社（Lloyd's）在内的全球船体／责任辛迪加参与而构建。海上险周期由全球贸易流、地缘政治扰动（红海绕行、制裁、制裁执法）及事故经验驱动。

## Reinsurance procurement timing

日本的再保险合约遵循与日本财年相一致的主要 4 月 1 续转周期，并在 1 月与 7 月有较小规模的续转。采购动态：

| Element | Description |
|---|---|
| 4 月 1 续转 | 日本国内业务的主要分出方合约续转 |
| 1 月 1 续转 | 全球市场参考周期；影响定价基准 |
| 年中续转 | 部分险种与全球转分保 |
| Reinsurance broker | 主要全球经纪商（Aon、Guy Carpenter、Howden Re）居间 |
| Reinsurer panel | 包含全球再保险公司（Munich Re、Swiss Re、Hannover Re、SCOR、Berkshire Re、劳合社辛迪加）及日本再保险部门的多元化承保团 |
| Layered structure | 自留额之上的逐事件超额赔款（excess-of-loss）层，加上累计覆盖，加上巨灾层，加上转分保 |
| Reinstatement premium | 巨灾事件后触发；影响净成本经济性 |

硬性再保险市场（大型巨灾后）推高定价并约束承保能力。软性再保险市场（低巨灾年的多周期后）压低定价并增加承保能力。日本的分出方必须针对全球市况、而不仅是国内损失经验，来把握自留额调整与分层购买的时点。

## Investment-income offset and capital lens

损保的最终盈亏等于承保结果（综合成本率）加上对保单持有人浮存金（float）的投资回报，再减去税款。在软性承保周期中，投资收益相抵可吸收适度的承保亏损；在硬性周期中，投资收益改善加上承保复苏会正向叠加。

在 [[insurance/economic-value-based-solvency|economic-value-based solvency]] 制度下，ESR 在统一的经济资本基础上捕捉承保风险（损保的巨灾与非巨灾）与市场风险（股票、信用、利率）二者。[[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] 论述监管资本架构；[[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] 论述同一集团层面资本如何就指定的 IAIG 在 ICS 下进行报告。

## ESR cat-module sensitivity

[[insurance/economic-value-based-solvency|economic-value-based ESR]] 制度下的损保巨灾模块对主要的日本危险施加压力情景：

| Peril | ESR cat-module treatment |
|---|---|
| 地震（商业财产） | 按日本特有的地震敞口校准的概率性冲击情景 |
| 台风 | 反映太平洋台风路径分布的风灾与风暴潮情景 |
| 洪水／内陆水患 | 河川与积涝洪水情景 |
| 火山 | 在适用情形下，火山灰降与火山泥流（lahar）情景 |
| 海外巨灾 | 将海外子公司巨灾敞口叠加进集团层面资本 |

家庭地震风险在结构上处于民间损保巨灾模块敏感度之外，因为它位于通过 [[non-life-insurers/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]] 运营的 [[insurance/earthquake-insurance-public-private-scheme|public-private scheme]] 之中。商业地震与海外地震敞口为民间承保，并计入巨灾模块。

巨灾模块的资本计提直接影响各三大集团能在自身资产负债表上自留多少巨灾风险、相对于其必须向外部再保险公司分出多少。因此资本效率取决于再保险与 ESR 的复合优化，而非仅再保险或仅资本的决策。

## Group-level vs operating-company-level reading

一个常见的解读错误，是将控股公司整合报告的综合成本率数字当作单一经营公司的综合成本率来读。各三大集团的结构如下：

| Group | Operating-company combined ratios consolidated into group | Group-level adjustments |
|---|---|---|
| [[non-life-insurers/tokio-marine|Tokio Marine]] | [[non-life-insurers/tokio-marine-nichido-fire|TMNF]] 国内 + Philadelphia + HCC + Pure + 劳合社辛迪加 + 其他 | 外汇换算、合并抵销、集团再保险回收 |
| [[non-life-insurers/msad|MS&AD]] | [[non-life-insurers/mitsui-sumitomo-insurance|MSI]] + [[non-life-insurers/aioi-nissay-dowa-insurance|ADI]] 国内 + MS Amlin + 海外 | 外汇换算、合并抵销、集团内再保险 |
| [[non-life-insurers/sompo|Sompo]] | [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] 国内 + Sompo International + 其他 | 外汇换算、合并抵销、集团内再保险 |

日本国内综合成本率与海外综合成本率在某一年份可能朝相反方向变动（例如：日本台风平静之年叠加美国大西洋飓风活跃之季）。集团层面的结果是经分散加权的混合。对各集团而言，分散收益因年份、以及巨灾事件实际落在何处而变动。

### Tokio Marine Nichido Fire (under Tokio Marine HD)

- 按保费计最大的单一国内损保经营公司；
- 在车险、火灾、海上、专业线上实现多元化；
- 控股公司集团（[[non-life-insurers/tokio-marine|Tokio Marine]]）受益于可观的海外收益相抵（Philadelphia Consolidated、HCC、Pure Group、劳合社辛迪加）；
- 再保险采购在带有海外子公司分散的集团资本框架内管理。

### MS&AD operating companies — MSI and ADI

- [[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] 与 [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] 均为 [[non-life-insurers/msad|MS&AD]] 旗下的主要国内经营公司；
- ADI 的移动出行／丰田特许经营创造了独特的车险线销售渠道与客户基础；
- MS Amlin 贡献专业线／再保险敞口；
- 海外 P&C 组合使集团收益多元化。

### Sompo Japan Insurance (under Sompo HD)

- [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] 是 [[non-life-insurers/sompo|Sompo]] 旗下唯一的主要国内损保经营公司；
- Sompo International 贡献海外专业线／再保险；
- 代理店渠道与客户说明行为议题已成为近期监管对话的一部分；
- 国内车险与火灾线仍是核心保费基础。

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
- [[non-life-insurers/tokio-marine]]
- [[non-life-insurers/msad]]
- [[non-life-insurers/sompo]]
- [[non-life-insurers/tokio-marine-nichido-fire]]
- [[non-life-insurers/mitsui-sumitomo-insurance]]
- [[non-life-insurers/aioi-nissay-dowa-insurance]]
- [[non-life-insurers/sompo-japan-insurance]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- General Insurance Association of Japan (日本損害保険協会): industry overview and statistics.
- General Insurance Rating Organization of Japan (損害保険料率算出機構, GIROJ): advisory pure-premium-rate publications.
- Tokio Marine Holdings: integrated and annual reports.
- MS&AD Holdings: integrated reports and disclosure library.
- Sompo Holdings: integrated and annual reports.
- FSA: 経済価値ベースのソルベンシー規制等について.

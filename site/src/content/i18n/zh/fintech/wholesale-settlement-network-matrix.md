---
source: fintech/wholesale-settlement-network-matrix
source_hash: c590fa755e5b9206
lang: zh
status: machine
fidelity: ok
title: "批发结算网络比较矩阵 — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana"
translated_at: 2026-05-31T11:13:44.887Z
---

# 批发结算网络比较矩阵 — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## 维基路线

该条目位于 [[fintech/INDEX|fintech index]] 作为最常被引用的批发结算网络的六路并排比较矩阵。它补充了每个网络的深入研究 [[fintech/fnality-wholesale-settlement|Fnality fnPS]], [[fintech/partior-jpm-dbs-temasek-consortium|Partior]], [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]], [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]， 和 [[fintech/bis-project-agora-overview|BIS Project Agorá]]。治理模式参见 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]];有关中央银行分拆的背景，请参阅 [[fintech/central-banking-function-unbundling|央行职能解体]];有关稳定币的互操作性故事，请参阅 [[fintech/circle-usdc-stablecoin|Circle USDC]] 和 [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]。

> [!info] TL;DR
> 六个批发结算网络支撑着 2026-05 公共数据集：**Fnality fnPS**（英国央行许可的中央银行储备代币，GBP live 2024-Q2, 20+ 股东银行），**部分**（4-新加坡金管局许可的银行财团，美元/新加坡元/欧元/英镑/日元实时，$1.5T 累计），**JPM Kinexys**（单一银行拥有的 $5早餐/天，$1.5T 累积，JPM Coin + Liink + Onyx 数字资产），**mBridge**（BIS 多 CBDC 桥 — BIS 退出后 PBoC/HKMA/BoT/CBUAE/SAMA 2025-10), **Agora 项目** (7 G10 中央银行+ 40 商业银行，设计阶段以来 2024-04）和 **Mariana 项目**（BIS 与 BdF/MAS/SNB 的多 CBDC 外汇互换 PoC，已完成 2023）。通读矩阵的结构模式：**结算资产（央行准备金 vs 商业银行存款 vs 合成）是具有约束力的监管变量**，**财团成员资格形状（单行 vs 多行 vs 仅央行）决定治理速度**，并且 **只有 Fnality 具有约束力 100% 得到英国央行完全批准的中央银行储备支持作为系统性支付系统**。

## 为什么要进行六向比较

单网络叙述（“Fnality 是联盟模型”、“Kinexys 是单一银行模型”）捕捉了故事的不同部分，但模糊了具有约束力的结构变量：**什么结算资产支持每个代币**。通过将所有六个网络并排放在**结算资产/财团成员资格/实时货币/每日交易量/监管状态/央行支持/与稳定币的互操作性**上，监管套利和竞争定位模式变得可见。该矩阵还阐明了为什么 **Fnality 是当前唯一具有完全 RTGS 等效最终性**（中央银行准备金）的现行系统，为什么 **Kinexys 尽管受到单一银行限制**，但在交易量上仍处于领先地位（没有多股东协调的决策速度），以及为什么 **mBridge 在 BIS 撤回后幸存下来**（操作机制已经在运行，BIS 带来的政治协调问题已经解决）。对于更广泛的机构-稳定币-存款-代币对比，请参阅 [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]。

## 矩阵A·结算资产及最终性

|网络|结算资产|确定性类型|相当于 |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality fnPS]]** | **央行储备**（英国央行/美联储/欧洲央行/日本央行的综合账户； 1:1 储备支持的代币）| **RTGS 最终结算**（具有法律效力的最终结算）|代币化的央行储备 |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | **商业银行存款** (4 大股东银行资产负债表环环相扣）|近 RTGS（商业存款基础上的原子 PvP）|多银行商业存款网络|
| **[[fintech/jpm-onyx-wholesale-network\|JPM Coin (Kinexys)]]** | **摩根大通商业银行存款**（单一银行资产负债表）| JPM 客户群中的内部 RTGS |单银行代币化存款 |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | **批发 CBDC** 5+ 参与的中央银行（中国人民银行 / 香港金管局 / 泰国银行 / 阿联酋中央银行 / SAMA） | **RTGS 最终结算**（原子 PvP）|多币种批发CBDC桥 |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | **混合**：批发 CBDC（M0 央行货币）+代币化商业银行存款（M1）在共享平台上 |设计阶段；最终性模型尚未完全指定|混合动力M0 + 米1 互操作层|
| **玛丽安娜计划** |合成——批发 CBDC + 跨货币互换自动化做市商 |概念验证完成 2023;未投入生产|使用 wCBDC + AMM 进行外汇掉期实验 |

**主要区别是M0 与 M1 与合成**：Fnality 和 mBridge 使用 **M0 央行货币**（代币化储备/批发 CBDC）； Partior 和 Kinexys 使用 **M1 商业银行存款**； Agorá 明确地同时试验了**两层**； Mariana 使用**合成 wCBDC + AMM** 作为研究设计。这是最重要的一个维度，因为它决定了 (a) 法律最终性、(b) 监管状态、(c) 该系统是否可以作为最终结算与中间结算，以及 (d) 该系统是否与现有 RTGS 轨道竞争或补充。

## 矩阵 B · 联盟成员

|网络|会员形态|会员数量 |治理模式|
|---|---|---|---|
|最终结果 fnPS | **多银行联盟+基础设施** | **20+ 股东**：劳埃德银行、桑坦德银行、瑞银集团、纽约梅隆银行、巴克莱银行、高盛、三菱日联银行、荷兰国际集团、三井住友银行、道富银行、纳斯达克风险投资公司、DTCC、Euroclear |多股东治理；决策速度慢（£ fnPS 采取 9 从南加州大学概念到推出需要多年）|
|派对| **4 主要股东+ 30+ 网络成员** | **摩根大通+星展银行+淡马锡+渣打银行（2024)** |驻扎新加坡；比 Fnality 快但比 Kinexys 慢 |
|摩根大通 Kinexys | **单一银行** | **仅限摩根大通** |最快的决策速度； 180+ 通过 Link 的机构客户 |
|米桥| **央行财团** | **5 活跃的中央银行** 国际清算银行退出后：中国人民银行 + 香港金管局 + 泰国央行 + CBUAE + SAMA |由中国人民银行主导的多中央银行2025-10 直到退出 |
|声网项目 | **G10 中央银行+全球商业银行** | **7 G10 中央银行**（FRBNY、BoE、BdF、BoJ、BoK、Banxico、SNB）+ **40+ 商业银行** | BIS 协调；设计阶段|
|玛丽安娜计划| **3 中央银行** (PoC) | BdF + MAS + 瑞士央行 |限时研究 PoC (2022-2023)|

**决策速度缩放**：**Kinexys (1 银行) > 部分 (4 银行) > mBridge (5 中央银行）>最终结果（20+ 银行) > Agorá (47+ 机构）**。结局 9- 发布年份对比 Kinexys 4年兑美元1.5T 比较是“多股东治理缓慢”的典型案例。但 Fnality 拥有 Kinexys 在结构上无法匹敌的央行储备支持（商业银行无法将其他银行的储备代币化），因此比较的是**合法性范围**而不是纯粹的速度。

## 矩阵 C · 实时货币 (2026-05）

|网络|货币实时 |正在酝酿的货币 |
|---|---|---|
|最终结果 fnPS | **英镑**（£ fnPS 直播 2024-Q2;首个商业交易 劳埃德银行 × 桑坦德银行 × 瑞银集团) | **美元/欧元/日元**处于监管机构谈判中（美联储/欧洲央行/日本央行）； 2026-2027 预计|
|部分| **美元/新元/欧元/英镑/日元** (5 直播）| **印度卢比/印尼盾** 已计划 2026-Q1 |
|摩根大通 Kinexys | **美元/欧元/英镑** (3 居住）; **新元** 计划 2026-Q2 |通过合伙方式获得新元；长期日元 |
|米桥| **人民币/港币/泰铢/迪拉姆/沙特里亚尔** (5 与参与央行挂钩的货币）|巴西 DREX (BCB) Q2 2026 H2 互操作性测试|
| Agorá 项目 |设计阶段测试货币；没有生产货币 |不适用（阶段 2 设计正在进行中）|
|玛丽安娜计划|欧元/新加坡元/瑞士法郎 (PoC) |不适用（PoC 已完成 2023)|

**货币覆盖记分板**：Partior 拥有最多的生产活跃货币（5），Fnality 每种货币的**监管权重**最高（只有一种活跃，但它是由英国央行批准的央行储备支持），mBridge 拥有最大的**非美元覆盖范围**，Kinexys 具有最深的单一货币渗透率（美元）。 Agorá 和 Mariana 是研究/设计项目，不包含生产货币。

## 矩阵D·日成交量及累计规模

|网络|每日交易量（2026-Q1)|累计吞吐量|相当于 |
|---|---|---|---|
|最终结果 fnPS |发布后不断增长；尚未达到有意义的稳定状态| <£10B累计|早期阶段；第一个商业年|
|部分|多变的;消息人士称每天的流量为十亿个位数**~$1.5T 累积**（自 2021-08 发射）|与 Kinexys 累计相当 |
|摩根大通 Kinexys | **$5平均每天 B+**（~30-40% USDC 日报）| **$1.5T+ 累积**（自 2024-11 品牌重塑）|最大单网量|
|米桥|虽小但不断增长；具体的 2026 每日交易量未公开披露|估计<$100B累计|有限但具有政治重要性|
| Agorá 项目 |不适用（设计阶段）|不适用 |不适用 |
|玛丽安娜计划|不适用（PoC 已完成）|不适用 |不适用 |

尽管受到单一银行的限制，**Kinexys 在数量上仍处于领先地位**，因为 JPM 可以在不与竞争对手银行协调的情况下进行部署。 Partior 在累积上具有可比性，但代表 4-银行共享活动。 Fnality 尚处于早期阶段，央行储备支持是其长期护城河。 mBridge 的交易量较低，但**结构上的覆盖范围不同**：它涵盖其他网络无法访问的非美元跨境商品/石油结算。

## 矩阵 E·监管状况和央行支持

|网络|铅调节器|央行审批情况|监管类别|
|---|---|---|---|
|最终结果 fnPS | **英格兰银行** | **英国央行 2023-11 声明**确认 £ fnPS 为具有系统重要性的支付系统 | **获得许可的系统支付系统**（全球首个）|
|部分| **新加坡马航** | MAS 许可的批发支付网络运营商 |新加坡驻地授权 PSP |
|摩根大通 Kinexys | **OCC + Fed**（通过 JPM 银行章程）| JPM Coin = 表内商业存款；摩根大通银行牌照的合法组成部分| G-SIB 章程内的代币化商业存款 |
|米桥| **中国人民银行 + 香港金管局 + 参与央行** 国际清算银行退出后 |中央银行运营的平台；没有单独的监管类别|多央行跨CB平台|
| Agorá 项目 | **国际清算银行协调+ 7 G10 中央银行** |研究和设计阶段；尚未获得许可 | BIS 创新中心设计阶段 |
|玛丽安娜计划| BdF + MAS + 瑞士央行 |已完成 PoC |仅供研究 |

监管类别的划分是二元的：**Fnality 是唯一既是生产现场又拥有专用系统支付系统许可证的系统**。从技术上讲，Kinexys 是 JPM 银行许可证的一个功能，而不是一个单独的许可系统。 Partior 获得 PSP 许可。 mBridge 作为一个多央行间的 CB 平台运作，没有商业监管框架。 Agorá 和 Mariana 是明确的研究/设计。

## 矩阵F·技术栈

|网络| DLT平台|共识 |跨链互操作 |
|---|---|---|---|
|最终结果 fnPS |企业以太坊（Quorum → 迁移到 **Hyperledger Besu**）|许可 BFT | SWIFT 桥接（2024-Q4 伙伴关系） |
|部分| **Hyperledger Fabric** 衍生品 |许可 BFT |与成员银行内部系统的双边桥梁|
|摩根大通 Kinexys | **Quorum**（摩根大通开发的以太坊分叉；捐赠给 ConsenSys）|许可 BFT | JPMD对公链的扩展：Base (2025-11) → **广州** (2026-01)|
|米桥|定制许可的 DLT | **HotStuff BFT** |除了参与 CB 网络之外，没有其他计划 |
| Agorá 项目 |尚未最终确定；设计阶段探索多个平台|待定 |设计与平台无关 |
|玛丽安娜计划|带有AMM模块的分布式账本| PoC 账本 |不适用（研究）|

技术栈模式：**所有生产系统均使用许可的BFT共识**（无公链共识）； **Quorum / Besu / Fabric** 占主导地位； **广州出现于 2026** 作为 JPM 为 JPMD 选择的隐私和可组合性目标； **HotStuff BFT** 是 mBridge 独有的。 Agorá 的平台不可知论是一种深思熟虑的设计选择——BIS 跨平台协调 7 G10 中央银行不能强制使用单一堆栈。

## 矩阵G·跨境PvP/DvP能力

|网络|跨货币 PvP |证券 DvP |原子外汇掉期 |
|---|---|---|---|
|最终结果 fnPS | **通过 fnPS GBP × fnPS USD 进行跨货币 PvP**（计划 2026-2027 当 $ fnPS 上线时）|开发中的 DvP 模块 |设计为赫施塔特风险杀手 |
|派对| **24×7 原子外汇互换**（实时 2024-Q3)|代币化证券的 DvP | **Fnality 跨货币 PvP 的直接竞争对手** |
|摩根大通 Kinexys |通过 Onyx 数字资产在 Kinexys 内实现交叉货币 |日内回购 + 代币化国库券的 DvP（$700B+累计）| JPM 客户群内 |
|米桥| **参与 CBDC 之间的 PvP 原子结算** |证券 DvP 不是主要范围 | mBridge 参与者 |
| Agorá 项目 | **跨境PvP + DvP**是阶段的明确设计目标 2 | DvP 设计阶段 |跨币种原子互换是设计目标 |
|玛丽安娜计划| **通过 AMM 进行跨货币 wCBDC 互换**（PoC 结果）|不适用 | Mariana 的核心 PoC 发现 |

**Herstatt 风险消除**是所有六个网络的明确目标 - 但只有 **Partior（实时）、Fnality（监管机构批准，$-fnPS 待定）和 mBridge（实时 PvP） 5 中央银行）**可以声称有生产能力。 Kinexys 的跨货币功能仅限内部使用； Agorá 和 Mariana 从事设计/研究工作。玛丽安娜计划 2023 PoC 验证了 wCBDC + AMM 可以自动清算跨货币外汇——这一基础结果影响了 Agorá 设计和 mBridge 架构。

## Matrix H · 与稳定币/代币化资产的互操作性

|网络|稳定币互操作 |代币化 MMF / RWA 互操作 |
|---|---|---|
|最终结果 fnPS |不直接； fnPS是最终结算资产，SC可通过会员银行赎回fnPS | **BUIDL 作为 CME/DTCC 衍生品场景中的 IM 抵押品**（2026-Q1 测试）|
|部分|稳定币桥概念（USDC）已被讨论但并未上线 |代币化资产 DvP 设计 |
| JPM Kinexys / JPMD | 摩根大通**JPMD 是 JPM 在 Base + Canton 公链上代币化的商业存款** — 直接与 SC 相邻 | **[[fintech/blackrock-buidl-tokenized-mmf-overview\|BUIDL]] IM 抵押品** + Onyx 数字资产回购 |
|米桥|不在范围内； mBridge 仅限 wCBDC |不在范围内 |
| Agorá 项目 | **明确目标**：稳定币→银行存款→wCBDC三层通透|代币化证券+RWA互操作是设计目标|
|玛丽安娜计划|不适用 |不适用 |

这是 **Agorá 的战略定位变得最清晰的**：它明确的目标是成为 **稳定币（私人）、代币化存款（商业银行 M）之间的互操作层1）和批发 CBDC（中央银行 M0）**。如果三圈 MRA 框架具体化（美国 GENIUS + 欧盟 MiCA + 香港/新加坡/日本交叉认可），Agorá 将成为合规稳定币最终赎回的天然结算锚点。 Fnality 和 Kinexys 都有与稳定币相邻的策略，但并未设计为多层互操作性结构。

## 矩阵 I · 相对于 SWIFT 的战略地位

|网络|取代 SWIFT 消息传送？ |取代 SWIFT 代理银行业务？ |与 SWIFT 共存？ |
|---|---|---|---|
|最终结果 fnPS |否（使用 SWIFT 消息传递 2024-Q4 伙伴关系） |部分——Fnality 的结算腿移动 | **是的 — SWIFT × Fnality 公共合作** |
|部分|部分（取代代理银行业务 2-3日结算）| **是** 对于成员银行走廊 |非会员走廊共存 |
|摩根大通 Kinexys / Liink | **Liink 取代 SWIFT MT 消息传送** (1100+ 银行）|部分面向 JPM 客户群 | SWIFT 在某些领域的直接竞争对手 |
|米桥| **是的 — 明确设计用于绕过 SWIFT** 非美元跨境 CBDC | **是** |政治意图是在 SWIFT 之外共存 |
| Agorá 项目 |旨在与 SWIFT 消息传递互操作 |取代代理银行业务 | **共存 — SWIFT 是参与者** |
|玛丽安娜计划|不适用 |不适用 |不适用 |

SWIFT 关系模式：**Fnality + Agorá 明确与 SWIFT 共存**（Agorá 包括 SWIFT 作为参与者；Fnality 具有公共合作）； **Partior + Kinexys 部分取代** SWIFT 在特定走廊； **mBridge 对于非美元 CBDC 走廊明确绕过** SWIFT。这 2024-Q4 SWIFT × Fnality 合作是最明确的信号，表明现有的消息通道和代币化结算资产并非零和 — SWIFT 提供跨境消息传递，Fnality 提供账本结算，并且两层相互连接。

## 为什么是这些尺寸

选择九个矩阵轴（结算资产、联盟成员、实时货币、每日交易量、监管状态、央行支持、与稳定币的互操作性、技术堆栈、SWIFT 关系）是因为它们映射到**批发结算采用中的门控变量**：

1。 **结算资产** — 确定法律最终性和监管分类（M0 与 M1 与合成）。
2。 **联盟成员资格** — 决定决策速度和治理复杂性（单银行、多银行或仅中央银行）。
3。 **实时货币** — 衡量已实现的范围（5 货币对 1）。
4。 **每日交易量** — 衡量实现的采用率（发布后唯一重要的指标）。
5。 **监管状态** — 决定系统是否可以作为最终结算（Fnality 的 BoE 许可证是唯一的）。
6。 **央行支持**——决定合法性上限。
7。 **稳定币互操作性** — 决定系统是否适合后 GENIUS 三环 MRA 框架。
8。 **技术堆栈** — 决定操作风险和跨链范围。
9。 **SWIFT 关系** — 决定与现有企业的竞争定位。

这九个维度共同解释了为什么 **Fnality 是唯一可以将“代币化中央银行货币”** 作为产品类别的系统，为什么 **Kinexys 在受到单一银行限制的情况下仍能在原始吞吐量方面领先**，为什么 **Partior 占据亚洲走廊商业存款中间地带**，为什么 **mBridge 在 BIS 撤回中幸存下来**（操作机器已经运行），以及为什么 **Agorá 被定位为未来的互操作性层**，而不是任何现有系统的竞争对手。矩阵视图并排展示了这些结构模式。

## 读取矩阵

- **Fnality 是“代币化的央行货币”； Kinexys 是“代币化的商业银行存款”； mBridge是“批发CBDC桥”； Partior 是“多银行存款财团”**。这是四种结构上不同的产品，它们被随意归类为“批发结算”，但具有完全不同的监管分类和最终属性。
- **最终的 9- 推出年份反映了多股东治理摩擦**。 Kinexys 的 4年兑美元1.5T反映单银行决策速度。架构选择（联盟与单一银行）推动了速度差异，但 Fnality 拥有 Kinexys 在结构上无法匹敌的央行储备支持。
- **BIS 从 mBridge 提款（2025-10）是一个政治决定，而不是技术决定**。该操作平台继续由中国人民银行操作主导；如果说有什么不同的话，国际清算银行的退出**澄清了政治联盟**，而不是扰乱了运营。 Agorá 启动 (2024-04）是国际清算银行向西方主导的平行方向迈进的支点。
- **玛丽安娜计划 2023 PoC** 验证了 wCBDC + AMM 可以自动清算跨货币外汇 - 这是影响 Agorá 设计和 mBridge 架构的基础结果。 Agorá 的许多阶段 2 设计目标可以追溯到玛丽安娜的发现。
- **稳定币互操作性是下一个十年的边界条件**。三环MRA框架（GENIUS / MiCA / EPI）加上Agorá的M0-M1- 稳定币三层模型意味着合规稳定币最终通过代币化银行存款兑换成批发 CBDC 的架构。 Fnality 和 Kinexys 就是针对这种架构定位的； mBridge 不是（设计上仅限 wCBDC）。
- **SWIFT × Fnality 是规范的“现有 + 代币化”合作伙伴关系**（2024-Q4）。这表明 SWIFT 的战略定位是**在代币化结算资产之上提供跨境消息传递**，而不是直接取代其自己的代理银行模式。
- **“财团 20“与“单一银行”与“五家央行”的治理比较**是典型案例 [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]] 权衡：速度与合法性范围。

＃＃ 有关的
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/fnality-wholesale-settlement|Fnality fnPS]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior JPM / DBS / StanChart / Temasek consortium]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累计量级]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
<!-- /wiki-links:managed -->

## 来源

- Fnality International 公共资料：https://www.fnality.org/
- 英格兰银行 — 关于 Fnality 的声明 (2023-11）：https://www.bankofengland.co.uk/news/2023/十一月/英国央行关于最终结果的声明
- Partior公开资料：https://www.partior.com/
- MAS — 部分发布公告 (2021）：https://www.mas.gov.sg/news/media-releases/2021/部分启动
- 摩根大通 Kinexys 公共网站：https://www.jpmorgan.com/kinexys
- 摩根大通 Onyx 旧版页面：https://www.jpmorgan.com/onyx
- BIS创新中心CBDC专题登陆：https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Agorá 项目页面：https://www.bis.org/about/bisih/topics/cbdc/agora.htm
- 国际清算银行工作文件编号 1116 ——《下一代货币体系——蓝图》（2024）：https://www.bis.org/publ/work1116.htm
- BIS 玛丽安娜项目 — 发表的研究报告（2023）
- SWIFT × Fnality 合作公告（2024-Q4）：https://www.swift.com/news-events/news/swift-fnality-collaboration

---
source: fintech/wholesale-settlement-network-matrix
source_hash: aaac3db83459d433
lang: zh
status: machine
fidelity: ok
title: "批发结算网络比较矩阵 — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana"
translated_at: 2026-06-15T03:48:21.910Z
---

# 批发结算网络比较矩阵 — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下，作为对最常被引用的批发结算网络进行六方并排比较的矩阵。它补充了 [[fintech/fnality-wholesale-settlement|Fnality fnPS]]、[[fintech/partior-jpm-dbs-temasek-consortium|Partior]]、[[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]、[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 及 [[fintech/bis-project-agora-overview|BIS Project Agorá]] 处各网络的深度剖析。治理模式参见 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]；央行职能解体的背景参见 [[fintech/central-banking-function-unbundling|央行职能解体]]；与稳定币的互操作性叙事参见 [[fintech/circle-usdc-stablecoin|Circle USDC]] 及 [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]。

> [!info] TL;DR
> 六个批发结算网络锚定了 2026-05  的公开数据集：**Fnality fnPS**（BoE 持牌的央行准备金代币，GBP 于 2024-Q2,  上线，20+ 家股东银行）、**Partior**（4 家银行的新加坡 MAS 持牌联盟，USD/SGD/EUR/GBP/JPY 已上线，累计 $1.5T）、**JPM Kinexys**（单一银行所有，每日 $5B，累计 $1.5T，JPM Coin + Liink + Onyx Digital Assets）、**mBridge**（BIS 多 CBDC 桥——BIS 退出 2025-10 后由 PBoC/HKMA/BoT/CBUAE/SAMA 组成）、**Project Agorá**（7  国集团 10  家央行 + 40  家商业银行，自 2024-04 起处于设计阶段）以及 **Project Mariana**（BIS 与 BdF/MAS/SNB 的多 CBDC 外汇掉期 PoC，于 2023 完成）。横向阅读矩阵中的结构性模式：**结算资产（央行准备金 vs 商业银行存款 vs 合成）是具有约束力的监管变量**，**联盟成员形态（单一银行 vs 多银行 vs 仅央行）决定治理速度**，且**只有 Fnality 拥有 100% 的央行准备金支撑，并获 BoE 完全批准为系统性支付系统**。

## 为何进行六方比较

单一网络的叙事（「Fnality 是联盟模式」「Kinexys 是单一银行模式」）捕捉了故事的不同部分，却掩盖了具有约束力的结构性变量：**何种结算资产支撑每个代币**。通过将全部六个网络在**结算资产／联盟成员／已上线货币／日交易量／监管地位／央行支撑／与稳定币的互操作性**上并排呈现，监管套利与竞争定位的模式得以显现。该矩阵还阐明了为何 **Fnality 是目前唯一具备完整 RTGS 等效终局性的在线系统**（央行准备金），为何 **Kinexys 尽管受单一银行约束仍在交易量上领先**（无需多股东协调的决策速度），以及为何 **mBridge 在 BIS 退出后得以存续**（运营机器早已运转，BIS 所构成的政治协调问题早已解决）。关于更广泛的机构稳定币—存款代币对比参见 [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]。

## 矩阵 A · 结算资产与终局性

| 网络 | 结算资产 | 终局性类型 | 等同于 |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality fnPS]]** | **央行准备金**（在 BoE / Fed / ECB / BoJ 的综合账户；1:1  准备金支撑代币） | **RTGS 最终结算**（法律上终局） | 代币化的央行准备金 |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | **商业银行存款**（4  家主要股东银行资产负债表相互锁定） | 准 RTGS（基于商业存款的原子化 PvP） | 多银行商业存款网络 |
| **[[fintech/jpm-onyx-wholesale-network\|JPM Coin (Kinexys)]]** | **JPM 商业银行存款**（单一银行资产负债表） | JPM 客户群内部的 RTGS | 单一银行代币化存款 |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | 5+ 家参与央行（PBoC / HKMA / BoT / CBUAE / SAMA）的**批发型 CBDC** | **RTGS 最终结算**（原子化 PvP） | 多币种批发型 CBDC 桥 |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | **混合**：在共享平台上的批发型 CBDC（M0  央行货币）+ 代币化商业银行存款（M1） | 设计阶段；终局性模型尚未完全确定 | 混合 M0 + M1  互操作层 |
| **Project Mariana** | 合成——批发型 CBDC + 用于跨币种掉期的自动做市商 | PoC 于 2023 完成；未投入生产 | 使用 wCBDC + AMM 的外汇掉期实验 |

**核心区别是 M0  vs M1  vs 合成**：Fnality 与 mBridge 使用 **M0  央行货币**（代币化准备金／批发型 CBDC）；Partior 与 Kinexys 使用 **M1  商业银行存款**；Agorá 明确地**同时试验两个层**；Mariana 使用 **合成 wCBDC + AMM** 作为研究设计。这是最具决定性的维度，因为它决定了 (a) 法律终局性，(b) 监管地位，(c) 系统能否充当最终结算 vs 中间结算，以及 (d) 系统是与现有 RTGS 轨道竞争还是互补。

## 矩阵 B · 联盟成员

| 网络 | 成员形态 | 成员数量 | 治理模型 |
|---|---|---|---|
| Fnality fnPS | **多银行联盟 + 基础设施** | **20+ 家股东**：Lloyds、Santander、UBS、BNY Mellon、Barclays、Goldman、MUFG、ING、Sumitomo Mitsui、State Street、Nasdaq Ventures、DTCC、Euroclear | 多股东治理；决策速度慢（£ fnPS 从 USC 概念到上线耗时 9  年） |
| Partior | **4  家主要股东 + 30+ 家网络成员** | **JPMorgan + DBS + Temasek + Standard Chartered（2024）** | 以新加坡为锚；快于 Fnality 但慢于 Kinexys |
| JPM Kinexys | **单一银行** | **仅 JPM** | 决策速度最快；经由 Liink 拥有 180+ 家机构客户 |
| mBridge | **央行联盟** | BIS 退出后 **5  家活跃央行**：PBoC + HKMA + BoT + CBUAE + SAMA | 多央行，BIS 退出 2025-10  后由 PBoC 主导运营 |
| Project Agorá | **G10  央行 + 全球商业银行** | **7  国集团 10  家央行**（FRBNY、BoE、BdF、BoJ、BoK、Banxico、SNB）+ **40+ 家商业银行** | 由 BIS 协调；设计阶段 |
| Project Mariana | **3  家央行**（PoC） | BdF + MAS + SNB | 限时研究 PoC（2022-2023） |

**决策速度的标度**：**Kinexys（1  家银行）> Partior（4  家银行）> mBridge（5  家央行）> Fnality（20+ 家银行）> Agorá（47+ 家机构）**。Fnality 的 9 年才上线 vs Kinexys 的 4 年达到 $1.5T 这一对比，是「多股东治理慢」的经典案例。但 Fnality 拥有 Kinexys 在结构上无法匹敌的央行准备金支撑（商业银行无法将其他银行的准备金代币化），这使该对比关乎**合法性的范围**而非纯粹的速度。

## 矩阵 C · 已上线货币（2026-05）

| 网络 | 已上线货币 | 在途货币 |
|---|---|---|
| Fnality fnPS | **GBP**（£ fnPS 于 2024-Q2 上线；首笔商业交易 Lloyds × Santander × UBS） | **USD / EUR / JPY** 在与监管机构（Fed / ECB / BoJ）协商中；预计 2026-2027  |
| Partior | **USD / SGD / EUR / GBP / JPY**（5  已上线） | **INR / IDR** 计划于 2026-Q1 |
| JPM Kinexys | **USD / EUR / GBP**（3  已上线）；**SGD** 计划于 2026-Q2 | SGD 经由合作；长期 JPY |
| mBridge | **CNY / HKD / THB / AED / SAR**（5  种货币与参与央行挂钩） | 巴西 DREX（BCB）Q2 2026 H2  互操作性测试 |
| Project Agorá | 设计阶段的测试货币；无生产货币上线 | 不适用（第 2  阶段设计进行中） |
| Project Mariana | EUR / SGD / CHF（PoC） | 不适用（PoC 于 2023 完成） |

**货币覆盖记分板**：Partior 拥有最多的生产上线货币（5），Fnality 每种货币的**监管分量**最高（仅一种上线，但获 BoE 批准且由央行准备金支撑），mBridge 拥有最大的**非美元覆盖**，Kinexys 拥有最深的单一货币渗透（USD）。Agorá 与 Mariana 是研究／设计项目，无生产货币覆盖。

## 矩阵 D · 日交易量与累计规模

| 网络 | 日交易量（2026-Q1） | 累计吞吐量 | 等同于 |
|---|---|---|---|
| Fnality fnPS | 上线后增长中；尚未达到有意义的稳态 | 累计 <£10B | 早期阶段；首个商业年 |
| Partior | 多变；多方来源表明每日为个位数十亿 | **累计 ~$1.5T**（自 2021-08  上线起） | 与 Kinexys 累计可比 |
| JPM Kinexys | 平均**每日 $5B+**（约为 USDC 每日量的 30-40%） | **累计 $1.5T+**（自 2024-11  更名起） | 单一网络最大交易量 |
| mBridge | 小但增长中；具体的 2026  日交易量未公开披露 | 估计累计 <$100B | 有限但在政治上重要 |
| Project Agorá | 不适用（设计阶段） | 不适用 | 不适用 |
| Project Mariana | 不适用（PoC 已完成） | 不适用 | 不适用 |

**Kinexys 在交易量上领先**，尽管受单一银行约束——因为 JPM 可在无需与竞争对手银行协调的情况下部署。Partior 在累计上可比，但代表 4 家银行的共享活动。Fnality 处于早期阶段，以央行准备金支撑作为其长期护城河。mBridge 交易量较低但**触达在结构上不同**：它覆盖了其他任何网络都无法接入的非美元跨境大宗商品／石油结算。

## 矩阵 E · 监管地位与央行支撑

| 网络 | 主导监管机构 | 央行批准状态 | 监管类别 |
|---|---|---|---|
| Fnality fnPS | **英格兰银行** | **BoE 的 2023-11  声明**确认 £ fnPS 为具有系统重要性的支付系统 | **持牌系统性支付系统**（全球首个） |
| Partior | **MAS 新加坡** | MAS 持牌的批发支付网络运营商 | 以新加坡为锚的持牌 PSP |
| JPM Kinexys | **OCC + Fed**（经由 JPM 银行牌照） | JPM Coin = 表内商业存款；在法律上是 JPM 银行牌照的一部分 | G-SIB 牌照内的代币化商业存款 |
| mBridge | BIS 退出后 **PBoC + HKMA + 参与央行** | 央行运营的平台；无单独的监管类别 | 多央行间 (inter-CB) 平台 |
| Project Agorá | **BIS 协调 + 7  国集团 10  家央行** | 研究与设计阶段；尚无牌照 | BIS Innovation Hub 设计阶段 |
| Project Mariana | BdF + MAS + SNB | 已完成 PoC | 仅研究 |

监管类别的划分是二元的：**Fnality 是唯一既已生产上线又持有专属系统性支付系统牌照的系统**。Kinexys 在技术上是 JPM 银行牌照的一项功能，而非单独的持牌系统。Partior 以 PSP 身份持牌。mBridge 作为多央行间平台运营，没有商业监管框架。Agorá 与 Mariana 明确属于研究／设计。

## 矩阵 F · 技术栈

| 网络 | DLT 平台 | 共识 | 跨链互操作 |
|---|---|---|---|
| Fnality fnPS | 企业版以太坊（Quorum → 迁移至 **Hyperledger Besu**） | 许可型 BFT | SWIFT 桥接（2024-Q4  合作） |
| Partior | **Hyperledger Fabric** 衍生版 | 许可型 BFT | 与成员银行内部系统的双边桥 |
| JPM Kinexys | **Quorum**（JPM 开发的以太坊分叉；已捐赠给 ConsenSys） | 许可型 BFT | JPMD 向公链扩展：Base（2025-11）→ **Canton**（2026-01） |
| mBridge | 定制许可型 DLT | **HotStuff BFT** | 除参与央行网络外无规划 |
| Project Agorá | 未最终确定；设计阶段正探索多个平台 | 在所引设计材料中未公开指明 | 设计为平台无关 |
| Project Mariana | 带 AMM 模块的分布式账本 | PoC 账本 | 不适用（研究） |

技术栈的模式：**所有生产系统均使用许可型 BFT 共识**（无公链共识）；**Quorum / Besu / Fabric** 占主导；**Canton 在 2026 出现**，作为 JPM 为 JPMD 选定的隐私与可组合性目标；**HotStuff BFT** 为 mBridge 所独有。Agorá 的平台无关性是一项刻意的设计选择——BIS 在 7  国集团 10  家央行之间的协调无法强制采用单一技术栈。

## 矩阵 G · 跨境 PvP / DvP 能力

| 网络 | 跨币种 PvP | 证券 DvP | 原子化外汇掉期 |
|---|---|---|---|
| Fnality fnPS | **经由 fnPS GBP × fnPS USD 的跨币种 PvP**（计划于 2026-2027  待 $ fnPS 上线时） | DvP 模块开发中 | 设计为 Herstatt 风险终结者 |
| Partior | **24×7  原子化外汇掉期**（于 2024-Q3 上线） | 代币化证券的 DvP | **Fnality 跨币种 PvP 的直接竞争者** |
| JPM Kinexys | 经由 Onyx Digital Assets 在 Kinexys 内部的跨币种 | 日内回购 + 代币化国债的 DvP（累计 $700B+） | JPM 客户群内部 |
| mBridge | 参与 CBDC 之间的 **PvP 原子化结算** | 证券 DvP 非主要范围 | 跨 mBridge 参与方 |
| Project Agorá | **跨境 PvP + DvP** 是第 2  阶段的明确设计目标 | DvP 设计阶段 | 跨币种原子化掉期为设计目标 |
| Project Mariana | **经由 AMM 的跨币种 wCBDC 掉期**（PoC 结果） | 不适用 | Mariana 的核心 PoC 发现 |

**消除 Herstatt 风险**是全部六个网络的明确目标——但只有 **Partior（已上线）、Fnality（获监管批准，$-fnPS 待定）及 mBridge（跨 5  家央行的在线 PvP）**能宣称具备生产能力。Kinexys 的跨币种能力仅限内部；Agorá 与 Mariana 属设计／研究。Project Mariana 的 2023  PoC 验证了 wCBDC + AMM 能够原子化地清算跨币种外汇——这一基础性结果同时影响了 Agorá 的设计与 mBridge 的架构。

## 矩阵 H · 与稳定币／代币化资产的互操作性

| 网络 | 稳定币互操作 | 代币化 MMF / RWA 互操作 |
|---|---|---|
| Fnality fnPS | 非直接；fnPS 是最终结算资产，SC 可经由成员银行赎回为 fnPS | 在 CME/DTCC 衍生品情景中**以 BUIDL 作为 IM 抵押品**（2026-Q1  测试） |
| Partior | 已讨论稳定币桥概念（USDC）但未上线 | 代币化资产 DvP 设计 |
| JPM Kinexys / JPMD | **JPMD 是 JPM 代币化到 Base + Canton 公链上的商业存款**——直接与 SC 相邻 | **[[fintech/blackrock-buidl-tokenized-mmf-overview\|BUIDL]] IM 抵押品** + Onyx Digital Assets 回购 |
| mBridge | 不在范围内；mBridge 仅 wCBDC | 不在范围内 |
| Project Agorá | **明确目标**：稳定币 → 银行存款 → wCBDC 三层直通 | 代币化证券 + RWA 互操作为设计目标 |
| Project Mariana | 不适用 | 不适用 |

这是 **Agorá 的战略定位最为清晰**的维度：它明确旨在成为**稳定币（私人）、代币化存款（商业银行 M1）与批发型 CBDC（央行 M0）之间的互操作层**。如果三圆 MRA 框架成型（美国 GENIUS + 欧盟 MiCA + 港／新／日的跨境互认），Agorá 将成为合规稳定币最终赎回的天然结算锚点。Fnality 与 Kinexys 都拥有与稳定币相邻的战略，但其架构并非作为多层互操作织物而设计。

## 矩阵 I · 相对于 SWIFT 的战略地位

| 网络 | 取代 SWIFT 报文？ | 取代 SWIFT 代理行业务？ | 与 SWIFT 共存？ |
|---|---|---|---|
| Fnality fnPS | 否（经由 2024-Q4  合作使用 SWIFT 报文） | 部分——结算环节在 Fnality 上进行 | **是——SWIFT × Fnality 公开协作** |
| Partior | 部分（取代代理行 2-3 天结算） | 对成员银行通道**是** | 对非成员通道共存 |
| JPM Kinexys / Liink | **Liink 取代 SWIFT MT 报文**（1100+ 家银行） | 对 JPM 客户群部分取代 | 在某些细分领域是 SWIFT 的直接竞争者 |
| mBridge | **是——明确设计为绕过 SWIFT** 用于非美元跨境 CBDC | **是** | 在政治上意在于 SWIFT 之外共存 |
| Project Agorá | 设计为与 SWIFT 报文互操作 | 取代代理行环节 | **共存——SWIFT 是参与方** |
| Project Mariana | 不适用 | 不适用 | 不适用 |

SWIFT 关系的模式：**Fnality + Agorá 明确与 SWIFT 共存**（Agorá 将 SWIFT 纳入为参与方；Fnality 拥有公开协作）；**Partior + Kinexys 在特定通道部分取代** SWIFT；**mBridge 明确绕过** SWIFT 用于非美元 CBDC 通道。2024-Q4  的 SWIFT × Fnality 协作是最清晰的信号，表明既有报文轨道与代币化结算资产并非零和——SWIFT 提供跨境报文，Fnality 提供链上结算，两层相连接。

## 为何选择这些维度

选择这九个矩阵轴（结算资产、联盟成员、已上线货币、日交易量、监管地位、央行支撑、与稳定币的互操作性、技术栈、SWIFT 关系），是因为它们映射到**批发结算采用中的门槛变量**：

1. **结算资产** — 决定法律终局性与监管分类（M0  vs M1  vs 合成）。
2. **联盟成员** — 决定决策速度与治理复杂度（单一银行 vs 多银行 vs 仅央行）。
3. **已上线货币** — 衡量已实现的范围（5  种货币 vs 1）。
4. **日交易量** — 衡量已实现的采用（上线后唯一重要的指标）。
5. **监管地位** — 决定系统能否充当最终结算（Fnality 的 BoE 牌照是独一无二的）。
6. **央行支撑** — 决定合法性上限。
7. **稳定币互操作性** — 决定系统是否契合后 GENIUS 的三圆 MRA 框架。
8. **技术栈** — 决定运营风险与跨链触达。
9. **SWIFT 关系** — 决定相对于在位者的竞争定位。

这九个维度合在一起解释了为何 **Fnality 是唯一能宣称「代币化央行货币」**这一产品类别的系统，为何 **Kinexys 尽管受单一银行约束仍在原始吞吐量上领先**，为何 **Partior 占据亚洲通道商业存款的中间地带**，为何 **mBridge 在 BIS 退出后得以存续**（运营机器早已运转），以及为何 **Agorá 被定位为未来的互操作层**而非任何在线系统的竞争者。矩阵视角将这些结构性模式并排揭示出来。

## 阅读该矩阵

- **Fnality 是「代币化央行货币」；Kinexys 是「代币化商业银行存款」；mBridge 是「批发型 CBDC 桥」；Partior 是「多银行存款联盟」**。这是四种在结构上不同的产品，常被随意归为「批发结算」，但其监管分类与终局性属性完全不同。
- **Fnality 的 9 年才上线反映了多股东治理的摩擦**。Kinexys 的 4 年达到 $1.5T 反映了单一银行的决策速度。架构选择（联盟 vs 单一银行）驱动了速度差异——但 Fnality 拥有 Kinexys 在结构上无法匹敌的央行准备金支撑。
- **BIS 退出 mBridge（2025-10）是政治决定，而非技术决定**。运营平台在 PBoC 主导运营下延续；若说有什么影响，BIS 退出**澄清了政治立场的一致性**，而非扰乱运营。Agorá 的启动（2024-04）是 BIS 转向西方主导的并行方案。
- **Project Mariana 的 2023  PoC** 验证了 wCBDC + AMM 能够原子化地清算跨币种外汇——这一基础性结果同时影响了 Agorá 的设计与 mBridge 的架构。Agorá 第 2  阶段的许多设计目标可追溯至 Mariana 的发现。
- **稳定币互操作性是下一个十年的边界条件**。三圆 MRA 框架（GENIUS / MiCA / EPI）加上 Agorá 的 M0-M1-稳定币三层模型，暗示了一种架构：合规稳定币最终经由代币化银行存款赎回为批发型 CBDC。Fnality 与 Kinexys 已为该架构定位；mBridge 则未（按设计仅 wCBDC）。
- **SWIFT × Fnality 是经典的「在位者 + 代币化」合作**（2024-Q4）。它表明 SWIFT 的战略定位是**在代币化结算资产之上提供跨境报文**，而非直接取代其自身的代理行模式。
- **「20 联盟」vs「单一银行」vs「五家央行」的治理比较**，是 [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]] 取舍的经典案例：速度 vs 合法性的范围。

## 相关
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

- Fnality International public materials: https://www.fnality.org/
- Bank of England — statement on Fnality (2023-11): https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality
- Partior public materials: https://www.partior.com/
- MAS — Partior launch announcement (2021): https://www.mas.gov.sg/news/media-releases/2021/partior-launch
- JPMorgan Kinexys public site: https://www.jpmorgan.com/kinexys
- JPMorgan Onyx legacy page: https://www.jpmorgan.com/onyx
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá page: https://www.bis.org/about/bisih/topics/cbdc/agora.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024): https://www.bis.org/publ/work1116.htm
- BIS Project Mariana — published research report (2023)
- SWIFT × Fnality collaboration announcement (2024-Q4): https://www.swift.com/news-events/news/swift-fnality-collaboration

---
source: fintech/erupee-india-pilot-status
source_hash: cc40eabaa2d26659
lang: zh
status: machine
fidelity: needs_review
title: "eRupee 印度试点状态 2026 — 零售 + 批发双轨并行、UPI 互操作性、可编程货币用例"
translated_at: 2026-05-31T06:16:15.714Z
---

# eRupee 印度试点状态 2026 — 零售 + 批发双轨并行、UPI 互操作性、可编程货币用例

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on India's eRupee (Digital Rupee, e₹) for the 2026 pilot expansion phase. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] for the broader Indian digital-payment-stack geopolitics, and with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] for architecture context. For architecture peers see [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]; for cross-border wholesale context see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]].

> [!info] TL;DR
> 截至 2026  中期，eRupee 在 RBI 监管下运行**两条并行试点轨道**：**批发 CBDC（自 2022-11 上线）**，由主要交易商用于二级市场国债结算；以及**零售 CBDC（自 2022-12 上线）**，通过 17  家参与银行覆盖 20+ 个城市，已有 5M+ 终端用户使用。印度的三个结构性特征独树一帜：（a）自 2023,  起通过二维码桥接实现 UPI 互操作性；（b）面向农业和福利发放的可编程货币试点；（c）面向低连通地区的离线 CBDC 技术测试。最主要的制约因素**并非**技术——而是 **UPI 自身的规模**（NPCI 每月 22B+ 笔交易），导致消费者感受不到切换到 eRupee 钱包的实质收益。

## 项目架构

```
                       RBI 数字卢比计划
                                  │
              ┌───────────────────┴────────────────────┐
              ▼                                        ▼
         e₹-批发                                    e₹-零售
        (CBDC-W, 2022-11)                       (CBDC-R, 2022-12)
              │                                        │
   参与方：约 9  家银行              参与方：17  家银行
   用途：二级国债                   用途：P2P、P2M、政府转账
        结算（已上线）                     （试点）
              │                                        │
   结算：T+0  原子结算              钱包：银行应用程序
   在 RBI 账本上                   代币：₹0.50、₹1, 、₹2, 、₹5,
                                          、₹10, 、₹20, 、₹50, 、₹100, 、₹200,
                                          、₹500, 、₹2000  面值
              │                                        │
   互操作桥：暂无              UPI 二维码互操作：自 2023
    上线（跨境谅解备忘录
   （正在讨论）                         任何 UPI 二维码 → eRupee 支付）
```

两条轨道有意相隔五周启动：批发轨道在低规模高价值环境（约 9  家主要交易商银行进行国债结算）中验证了央行账本管道；零售轨道随后使用相同架构扩展至人口规模的低价值环境。到 2026 ，两条轨道在技术上均已稳定，但采用深度差异明显。两层结构选择（RBI → 参与银行 → 用户）将 eRupee 置于与中国 e-CNY 及欧盟中介式数字欧元相同的架构范式——跨范式权衡参见 [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]。

## 矩阵 A · 各轨道状态（最新公开）

| 轨道 | 计划名称 | 启动时间 | 覆盖范围（2026-05）| 活跃参与者 |
|---|---|---|---|---|
| 批发 | e₹-W (CBDC-W) | 2022-11  | 覆盖所有参与主要交易商的全国范围；二级国债结算已上线，自 2023-2024  起扩展至同业拆借 / 回购用例试点 | 约 9  家银行：SBI、BoB、ICICI、IDFC First、HDFC、Yes、Kotak、IndusInd、HSBC India |
| 零售 | e₹-R (CBDC-R) | 2022-12  | 经四个零售试点阶段覆盖 20+ 个城市；参与银行端已实现全国覆盖 | 17  家银行，含 SBI、ICICI、HDFC、IDFC First、Yes、Kotak、Canara、联合银行、BoB、BoI、IndusInd、Federal、HSBC、Bandhan、卡纳塔克邦银行、IDBI，以及支付应用整合 |
| 可编程 | 通过 e₹-R 钱包进行专项 / 条件支付 | 2023+ | 试点范围：农业补贴、福利现金转移、政府服务费用 | e₹-R 参与者的指定项目子集 |
| 离线 | 离线 CBDC NFC / 近场技术测试 | 2024+ | 仅限试点；不是独立上线的公开产品 | RBI 主导，联合银行合作方 |
| 跨境 | 与特定交易对手（阿联酋、新加坡见诸公开讨论）的谅解备忘录阶段 | 截至 2026-05  均未上线 | 无 | 无运营 |

eRupee 是**唯一同时启动批发和零售轨道的主要经济体 CBDC 项目**。RBI 选择此设计，是因为印度的支付轨道背景特殊——UPI 已通过 NPCI 以人口规模处理零售业务量，因此 e₹-R 须证明边际价值（离线、可编程性、央行货币地位），而非仅仅复制 UPI 的功能。这使印度与同类项目形成差异：中国零售量主导姿态参见 [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]，欧盟反脱媒优先姿态参见 [[fintech/e-euro-retail-rollout|digital euro retail rollout]]。

## 矩阵 B · 采用指标（最新公开）

| 指标 | 最新公开数据 | 来源 |
|---|---|---|
| e₹-R 零售用户（累计）| **5M+（截至 2024  报告）**（RBI 年度披露 + 银行报告）| RBI 年报 2023-24；2024-25  披露 |
| e₹-R 零售交易量累计 | **INR 10B+ 累计**（数量级估算，汇总各参与银行；RBI 未以月度形式官方汇总）| 银行披露 + RBI 新闻材料 |
| e₹-W 日均交易 | 银行间国债结算轨道每日活跃；每日详细量未公布 | RBI 批发 CBDC 试点新闻稿 |
| 覆盖城市（零售）| 20+（经四个零售试点阶段覆盖，含孟买、德里、班加罗尔、布巴内斯瓦尔等）| RBI 新闻稿（2022-12  启动 + 阶段扩展）|
| 参与银行（零售）| 17  | RBI 新闻稿 |
| 参与银行（批发）| 约 9  家主要交易商 | RBI 新闻稿 |
| UPI 二维码互操作 | 自 2023  上线 | RBI + NPCI 联合公告 |
| 离线 CBDC 测试 | 多次试点（2024-2025）；未规模化推出 | RBI 新闻材料 |

"5M+"零售用户数字是最常被引用的数据，但它是**累计钱包数**，而非活跃月度用户数。相比之下，UPI 在 2025-2026  的 NPCI 运行速率下每月处理 **22B+ 笔交易**——差距达四个数量级。这一差距解释了为何 RBI 的零售 eRupee 推进步伐在 2025  期间明显放缓，项目战略重心已转向**批发 + 可编程**用例（eRupee 在这些场景具有更明确的差异化价值）。同样的价值主张动态也塑造了更宏观的 DPI 出口故事——参见 [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]，了解 UPI、MOSIP 和 ARC 如何共同构成印度支付栈对外的显性展示，而 eRupee 仍是静悄悄构建的央行货币补充轨道。

## 矩阵 C · 架构与设计选择

| 设计选择 | 内容 | RBI 理由 |
|---|---|---|
| 两层制 | RBI → 参与银行 → 用户 | 保留商业银行角色、存款基础及现有分发渠道 |
| 基于代币（面值数字代币）| e₹-R 以传统货币面值发行（₹0.50  至 ₹2000）| 复制"类现金"的心理模型；与现金体验一致 |
| 通过二维码桥接与 UPI 互操作 | eRupee 钱包可支付任意 UPI 二维码；UPI 用户可通过相同二维码接收至 eRupee | 利用 UPI 的分发网络；避免从零构建平行收单网络 |
| 可编程货币试点 | 针对特定用例（农业投入补贴、福利转移）的智能合约式专项支付 | 与 UPI 形成差异；与政府现金转移政策挂钩 |
| 离线 CBDC 测试 | 无需上网的 NFC / 近场支付 | 解决印度农村的最后一英里连通性 |
| 零售钱包不计息 | e₹-R 余额利率为零 | 防止存款替代；与全球 CBDC 共识一致 |
| 未公布持有上限 | 通过应用配置设定每日交易限额 | 灵活应对用例调整；未编入明确上限 |
| 批发 RBI 账本 | 国债 T+0  原子结算 | 二级市场运营效率 |

最具代表性的架构决策是**自 2023 起通过二维码桥接与 UPI 互操作**。没有其他主要经济体 CBDC 项目实现了与现有快速支付轨道的同等程度整合。代价是，互操作同时降低了使用 eRupee 的感知必要性——UPI 好用，为何要切换？

## 矩阵 D · 用例与试点批次

| 用例 | 状态（2026-05）| 备注 |
|---|---|---|
| P2P 零售支付 | 已上线；20+ 个城市，17  家参与银行可用 | 最常见试点用例 |
| P2M 零售（商户）| 已上线；众多小商户试点；UPI 二维码互操作助力收单 | 商户采用情况参差不齐 |
| 政府现金转移（福利 / 补贴）| 试点；可编程货币轨道 | 与 UPI 差异化的战略重点 |
| 农业补贴（如化肥投入补贴）| 试点；可编程专项支付 | 面向特定农资投入用途 |
| 银行间国债结算（批发）| 自 2022-11 上线；已成常规 | 批发核心用例 |
| 同业拆借 / 回购结算 | 2023-2024  试点扩展 | 批发用例延伸 |
| 跨境 CBDC 结算 | 无上线；仅讨论谅解备忘录 | 未来状态 |
| 离线支付（低连通性）| 仅技术测试 | 未规模化 |
| CBDC 间互联（如与他国 CBDC 对接）| 无上线；观察 mBridge 讨论 | 未来状态 |
| 与非 CBDC 交易对手的跨境 | 仅政策讨论上线（阿联酋、新加坡等）| 尚未运营 |

2024  至 2026  期间，战略重心明显从**"零售 eRupee 将成为 UPI 和现金之外的第三大支付轨道"**转向**"eRupee 是 UPI 的补充，专注于央行货币和可编程性至关重要的用例"**。2026-Q1  RBI 的批发与零售互操作测试是统一 CBDC 栈的技术基础，而非零售量推动。

## 与 UPI 主导地位的比较

| 指标 | UPI（2025-2026）| eRupee 零售（2024-2026）|
|---|---|---|
| 月交易笔数 | **22B+**（NPCI 运行速率）| 试点量；未在规模层面官方汇总 |
| 月交易金额 | **₹29.5  万亿+**（NPCI）| INR 10B+ 累计（整个 2022-2026 ）|
| 城市 / 覆盖范围 | 全印度（含国际扩展至阿联酋 / 新加坡 / 法国等）| 20+ 试点城市 |
| 钱包基础 | 350M+ 活跃用户 | 5M+ 累计钱包 |
| 商户收单 | 全面覆盖（60M+ 二维码）| 试点商户群体 |
| 跨境 | 已上线：阿联酋、新加坡、不丹、尼泊尔、马尔代夫、毛里求斯、法国、斯里兰卡 | 无上线 |
| 底层货币 | 通过 VPA 的商业银行货币 | 央行货币 |
| 可编程性 | 原生不支持 | 试点中可编程 |

UPI 的主导地位是 eRupee 零售采用缓慢的最主要原因。从消费者角度看，eRupee 提供央行货币地位和可编程性——这两点典型用户在 P2P 或 P2M 交易中并不看重。UPI 提供的是无处不在性和零摩擦收单——这正是用户高度重视的。RBI 面临的战略问题：**可编程货币福利发放 + 离线 CBDC + 未来跨境用例能否形成有意义的采用拉力**，还是 eRupee 将保持战略重要但交易量边缘化的补充地位？

印度数字栈的完整故事（UPI + MOSIP + ARC + JioCoin）参见 [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]。eRupee 融入同一宏观栈，但作为央行货币轨道，而非轨道替代品。

## 跨境与国际参与

| 渠道 | 状态 | 备注 |
|---|---|---|
| RBI ↔ 阿联酋央行谅解备忘录（讨论）| 讨论阶段；无 CBDC 结算上线 | UPI ↔ AANI 已单独上线 |
| RBI ↔ MAS 新加坡（讨论）| 讨论阶段 | UPI ↔ PayNow 已单独上线 |
| RBI ↔ mBridge 观察 | 讨论阶段 | 截至 2026-05  未正式加入 |
| RBI ↔ BIS Project Agorá | 印度**不是** Project Agorá 参与方（Agorá 为 7 G10  央行）；RBI 参与 BIS 更广泛的 CBDC 工作组 | 参见 [[fintech/bis-project-agora-overview|BIS Project Agorá]] |
| RBI ↔ 不丹 / 尼泊尔跨境 | UPI 整合已上线；无 CBDC 专属渠道 | 由 UPI 处理 |
| RBI ↔ BIS CBDC 工作组 | 积极参与 | RBI 是 BIS 成员；CBDC 列入 BIS 议程 |

印度的跨境 CBDC 姿态**并非**主导一个新的多边集团（与中国的 mBridge 锚点角色不同），而是逐案双边接洽。UPI 跨境足迹是天然的延伸渠道；CBDC 专属跨境安排进展滞后。

## 起源与演进

```
2017-2020      RBI 内部研究 + IDRBT CBDC 工作组
2021-01        RBI 行长公开承诺开展 CBDC 试点
2022           2022  年《金融法》修订 RBI 法，授权 CBDC 发行
2022-10        RBI 发布 CBDC 概念说明
2022-11        e₹-W（批发）试点启动（9  家银行，二级国债结算）
2022-12        e₹-R（零售）试点启动（首批 4  个城市，4  家银行）
2023           零售试点扩展 + UPI 二维码互操作桥上线
2023-2024      可编程货币试点开始（农业补贴、福利）
2024           离线 CBDC 技术测试
2024-2025      零售用户基础达 5M+ 累计；交易量增长放缓
2025           批发 CBDC 用例扩展至同业拆借 / 回购
2026-Q1        RBI 批发 ↔ 零售互操作测试
2026-Q2+      跨境谅解备忘录讨论（阿联酋、新加坡）持续推进
```

**规律**：印度 eRupee 项目在 RBI 机构掌控下稳步推进，节奏从容。财政部并无大力推进零售加速的举措，公共叙事受 UPI 成功的对比塑造。批发轨道是更清晰的成功故事——它已成为常规运营，服务于真实结算需求，且不与 UPI 竞争。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## Sources

- Reserve Bank of India — Concept Note on Central Bank Digital Currency (October 2022): https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
- RBI Press Releases on wholesale CBDC pilot launch (2022-11-01) and retail CBDC pilot launch (2022-12-01): https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
- RBI Annual Report 2023-24 and 2024-25 — Payment and Settlement Systems chapter
- RBI Bulletin articles on Digital Rupee progress (2023-2025)
- NPCI — UPI Product Statistics: https://www.npci.org.in/what-we-do/upi/product-statistics
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint"
- BIS Project mBridge MVP report and public materials
- BIS Project Agorá public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

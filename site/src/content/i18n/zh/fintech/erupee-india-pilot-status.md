---
source: fintech/erupee-india-pilot-status
source_hash: cc40eabaa2d26659
lang: zh
status: machine
fidelity: ok
title: "eRupee 印度试点状态 2026 — 零售 + 批发双轨并行、UPI 互操作性、可编程货币用例"
translated_at: 2026-05-31T06:16:15.714Z
---

# eRupee 印度试点状态 2026 — 零售 + 批发双轨并行、UPI 互操作性、可编程货币用例

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on India's eRupee (Digital Rupee, e₹) for the 2026 pilot expansion phase. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] for the broader Indian digital-payment-stack geopolitics, and with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] for architecture context. For architecture peers see [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三种架构范式]]; for cross-border wholesale context see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] and [[fintech/bis-project-agora-overview|BIS Project Agora]].

> [!info] TL;DR
> 到 2026 年中，eRupee 在 RBI 监管下沿 **两条并行试点轨道** 运行：**批发型 CBDC**（自 2022-11 上线）用于一级交易商之间的政府证券二级市场结算；**零售型 CBDC**（自 2022-12 上线）通过 17 家参与银行覆盖 20+ 城市、服务 5M+ 终端用户。印度的三个结构性特征是：(a) 自 2023 年起通过二维码桥接实现与 UPI 的互操作，(b) 面向农业补贴与福利发放的可编程货币试点，(c) 针对低连接地区的离线 CBDC 技术测试。最大的约束 **不是** 技术，而是 **UPI 自身的规模**（按 NPCI 口径每月 22B+ 笔交易），这使消费者几乎感受不到从 UPI 钱包切换到 eRupee 的边际收益。

## 项目架构

```
                       RBI Digital Rupee Programme
                                  |
                  -----------------------------------------
                  |                                       |
            e₹-Wholesale                            e₹-Retail
           (CBDC-W, 2022-11)                       (CBDC-R, 2022-12)
                  |                                       |
      参与方：约 9 家银行                         参与方：17 家银行
      用途：政府证券二级市场结算                   用途：P2P、P2M、政府转移支付
      结算：T+0 原子结算                          载体：银行 App 钱包
      账本：RBI 账本                              面额：₹0.50、₹1、₹2、₹5、
                                                  ₹10、₹20、₹50、₹100、₹200、
                                                  ₹500、₹2000
      跨境：仍在讨论 MoU                          UPI 二维码互通：自 2023 年上线
```

两条轨道相隔五周上线并非偶然：批发轨先在低参与人数、高金额环境中验证央行账本与结算管道；零售轨再把同一套架构扩展到高人口、低金额场景。到 2026 年，两条轨道都已技术稳定，但采用深度明显不同。双层结构（RBI · 参与银行 · 用户）使 eRupee 与中国 e-CNY 及欧盟中介型数字欧元属于同一架构范式，见 [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构权衡的 4 个维度]]。

## 矩阵 A · 分轨道状态（最近公开）

| 轨道 | 项目名称 | 上线时间 | 覆盖范围（2026-05） | 活跃参与方 |
|---|---|---|---|---|
| 批发 | e₹-W (CBDC-W) | 2022-11 | 面向参与的一级交易商全国可用；政府证券二级市场结算已上线，2023-2024 起在 call money / repo 方向扩展试点 | 约 9 家银行：SBI、BoB、ICICI、IDFC First、HDFC、Yes、Kotak、IndusInd、HSBC India |
| 零售 | e₹-R (CBDC-R) | 2022-12 | 分 4 个阶段扩展至 20+ 城市；在参与银行侧已形成全国覆盖 | 17 家银行，包括 SBI、ICICI、HDFC、IDFC First、Yes、Kotak、Canara、Union Bank、BoB、BoI、IndusInd、Federal、HSBC、Bandhan、Karnataka Bank、IDBI，以及支付应用集成 |
| 可编程 | 通过 e₹-R 钱包实现定向 / 条件支付 | 2023+ | 试点场景包括农业补贴、福利现金转移、政府服务费用 | e₹-R 参与方中的部分机构 |
| 离线 | 离线 CBDC NFC / 近场技术测试 | 2024+ | 仅限试点，不是单独公开发布产品 | RBI 主导，银行配合 |
| 跨境 | 与部分对手方的 MoU 阶段（公开讨论提到阿联酋、新加坡） | 截至 2026-05 无上线 | 无 | 无实际运行 |

eRupee 是**主要经济体中唯一同时推进批发与零售 CBDC 的项目**。RBI 之所以这样设计，是因为印度支付轨道结构特殊：UPI 已通过 NPCI 在零售侧实现全国规模化，因此 e₹-R 必须证明自己在离线、可编程性、央行货币属性方面的边际价值，而不是简单复制 UPI 的功能。这使印度与中国和欧盟走出不同路径，分别可对照 [[fintech/ecny-supply-chain-expansion|e-CNY 供应链扩张]] 和 [[fintech/e-euro-retail-rollout|数字欧元零售推进]]。

## 矩阵 B · 采用指标（最近公开）

| 指标 | 最近公开数字 | 来源 |
|---|---|---|
| e₹-R 零售用户（累计） | **截至 2024 报告为 5M+**（RBI 年报披露 + 银行披露） | RBI Annual Report 2023-24；2024-25 披露 |
| e₹-R 零售累计交易额 | **INR 10B+ 的累计量级**（参与银行合计；RBI 未按月正式汇总） | 银行披露 + RBI 新闻材料 |
| e₹-W 日交易 | 银行间政府证券结算已日常运行；未公开逐日细项 | RBI 批发型 CBDC 试点新闻稿 |
| 覆盖城市（零售） | 20+，分四个零售试点阶段扩展（Mumbai、Delhi、Bengaluru、Bhubaneswar 等） | RBI 新闻稿（2022-12 启动与后续扩展） |
| 参与银行（零售） | 17 | RBI 新闻稿 |
| 参与银行（批发） | 约 9 家一级交易商 | RBI 新闻稿 |
| UPI 二维码互操作 | 自 2023 年上线 | RBI + NPCI 联合公告 |
| 离线 CBDC 测试 | 多个试点（2024-2025）；未形成规模化发布 | RBI 新闻材料 |

“5M+”这个数字最常被引用，但它是**累计钱包数**，不是月活用户数。相比之下，UPI 在 2025-2026 的 NPCI 运行率已达到**每月 22B+ 笔交易**，两者存在四个数量级的差距。这解释了为何 RBI 在 2025 年后明显放缓零售 eRupee 推进节奏，并把战略重点转向 **批发 + 可编程** 用例，因为这些场景更能体现差异化价值。更广义的 DPI 输出逻辑见 [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]。

## 矩阵 C · 架构与设计选择

| 设计选择 | 含义 | RBI 的考虑 |
|---|---|---|
| 双层结构 | RBI · 参与银行 · 用户 | 保留商业银行角色、存款基础和既有分发渠道 |
| 代币型（按面额发行） | e₹-R 以传统货币面额发行（₹0.50 至 ₹2000） | 复制“像现金一样”的体验，与现金心智一致 |
| 通过二维码桥接实现 UPI 互操作 | eRupee 钱包可扫任意 UPI 二维码；UPI 用户也可通过同一二维码接收至 eRupee | 借用 UPI 分发网络，避免从零构建受理网络 |
| 可编程货币试点 | 通过类似智能合约的方式做用途限定 | 与 UPI 做区分，服务政府现金转移政策 |
| 离线 CBDC 测试 | 无活动互联网时使用 NFC / 近场支付 | 解决印度农村“最后一公里”连接问题 |
| 零售钱包不计息 | e₹-R 余额利率为 0 | 防止存款搬家，符合全球 CBDC 共识 |
| 未公开硬性持有上限 | 通过 App 配置日交易限制 | 保留按场景校准的灵活性 |
| 批发侧 RBI 账本 | 政府证券 T+0 原子结算 | 提升二级市场操作效率 |

最有辨识度的设计选择，是**自 2023 年起通过二维码桥接实现 UPI 互操作**。没有其他主要经济体 CBDC 项目与既有快速支付轨道实现如此深的融合。但这一优势的副作用也很明显：既然 UPI 已经足够好用，用户为什么还要切换到 eRupee？

## 矩阵 D · 用例与试点批次

| 用例 | 状态（2026-05） | 备注 |
|---|---|---|
| P2P 零售支付 | 已上线；通过 17 家参与银行覆盖 20+ 城市 | 最常见的试点用例 |
| P2M 零售商户支付 | 已上线；大量小商户试点；UPI 二维码互通提高受理率 | 商户采用不均衡 |
| 政府现金转移（福利 / 补贴） | 试点中；依托可编程货币轨道 | 用于与 UPI 区分的战略重点 |
| 农业补贴（如化肥投入补贴） | 试点中；用途限定 | 面向特定投入品场景 |
| 银行间政府证券结算（批发） | 自 2022-11 起已常态运行 | 批发轨锚定用例 |
| Call money / repo 结算 | 2023-2024 扩展试点 | 批发用例延展 |
| 跨境 CBDC 结算 | 无上线；仅限 MoU 讨论 | 未来状态 |
| 离线支付（低连接地区） | 仅限试点测试 | 未规模化 |
| CBDC 之间互联 | 无上线；作为 mBridge 讨论观察方 | 未来状态 |
| 与非 CBDC 对手方跨境 | 仅处于政策讨论 | 尚未运行 |

2024-2026 年间的战略重心已经明显从“eRupee 会成为与 UPI、现金并列的第三大支付轨道”，转向“eRupee 是 UPI 的补充，聚焦央行货币属性和可编程性真正重要的场景”。2026-Q1 RBI 在批发与零售之间做的互操作测试，更像是统一 CBDC 技术栈的铺垫，而不是零售规模扩张的信号。

## 与 UPI 主导地位的比较

| 指标 | UPI（2025-2026） | eRupee 零售（2024-2026） |
|---|---|---|
| 月交易笔数 | **22B+**（NPCI 运行率） | 试点量，未公开按规模汇总 |
| 月交易金额 | **₹29.5 trillion+**（NPCI） | 2022-2026 全阶段累计 INR 10B+ |
| 城市 / 覆盖范围 | 全印度，并扩展至阿联酋、新加坡、法国等 | 20+ 试点城市 |
| 钱包基础 | 350M+ 活跃用户 | 5M+ 累计钱包 |
| 商户受理 | 普遍性受理（60M+ 二维码） | 试点商户群 |
| 跨境 | 已上线：阿联酋、新加坡、不丹、尼泊尔、马尔代夫、毛里求斯、法国、斯里兰卡 | 无上线 |
| 底层货币 | 通过 VPA 流转的商业银行货币 | 央行货币 |
| 可编程性 | 原生不具备 | 试点中具备 |

UPI 的主导地位，是 eRupee 零售采用缓慢的最大原因。对普通用户来说，eRupee 提供的是央行货币属性和可编程性，而在 P2P 或 P2M 场景中，用户通常并不重视这两点；UPI 提供的则是无处不在的受理能力和极低摩擦体验。RBI 面临的核心战略问题是：**可编程福利发放 + 离线 CBDC + 未来跨境能力，能否形成真正的采用拉力**，还是 eRupee 最终只会成为一个战略上重要、但交易量边际化的补充轨道？

## 跨境与国际参与

| 渠道 | 状态 | 备注 |
|---|---|---|
| RBI · 阿联酋央行 MoU（讨论） | 讨论阶段；无实时 CBDC 结算 | UPI · AANI 另行上线 |
| RBI · 新加坡 MAS（讨论） | 讨论阶段 | UPI · PayNow 另行上线 |
| RBI · mBridge observer | 讨论阶段 | 截至 2026-05 未正式加入 |
| RBI · BIS Project Agora | 印度**不是** Project Agora 参与方（Agora 为 7 家 G10 央行项目）；RBI 参与 BIS 更广义 CBDC 工作组 | 见 [[fintech/bis-project-agora-overview|BIS Project Agora]] |
| RBI · 不丹 / 尼泊尔跨境 | UPI 已上线；无专门 CBDC 通道 | 由 UPI 承接 |
| RBI · BIS CBDC 工作组 | 积极参与 | RBI 是 BIS 成员，CBDC 属 BIS 议程之一 |

印度在跨境 CBDC 上的姿态，并不是像中国那样主导一个新的多边板块，而是以双边、逐案推进为主。UPI 的跨境覆盖仍是天然延伸渠道；CBDC 专用跨境安排明显滞后。

## Origin and evolution

```
2017-2020     RBI 内部研究 + IDRBT CBDC 工作组
2021-01       RBI 行长公开承诺启动 CBDC 试点
2022          2022 年 Finance Act 修订 RBI Act，为 CBDC 发行提供依据
2022-10       RBI 发布 CBDC Concept Note
2022-11       e₹-W（批发）试点启动（9 家银行，政府证券二级市场结算）
2022-12       e₹-R（零售）试点启动（首批 4 个城市、4 家银行）
2023          零售试点扩展 + UPI 二维码互操作桥接上线
2023-2024     可编程货币试点启动（农业补贴、福利）
2024          离线 CBDC 技术测试
2024-2025     零售用户累计达到 5M+；交易量增速放缓
2025          批发 CBDC 用例扩展至 call money / repo
2026-Q1       RBI 批发 · 零售互操作测试
2026-Q2+      与阿联酋、新加坡等继续讨论跨境 MoU
```

**模式**：印度 eRupee 项目在 RBI 制度控制下，以稳定、审慎的节奏推进。财政部并未对零售端形成大规模加速推动，公共叙事也始终受到 UPI 成功所形成的参照影响。真正更明确的成功故事，是批发轨道：它已经成为日常运行的结算基础设施，而且不会与 UPI 正面竞争。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三种架构范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构权衡的 4 个维度]]
- [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/central-banking-function-unbundling|中央银行职能拆分]]

## Sources

- Reserve Bank of India · Concept Note on Central Bank Digital Currency (October 2022): https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
- RBI Press Releases on wholesale CBDC pilot launch (2022-11-01) and retail CBDC pilot launch (2022-12-01): https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
- RBI Annual Report 2023-24 and 2024-25 · Payment and Settlement Systems chapter
- RBI Bulletin articles on Digital Rupee progress (2023-2025)
- NPCI · UPI Product Statistics: https://www.npci.org.in/what-we-do/upi/product-statistics
- BIS Innovation Hub · CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 · "The next-generation monetary system · a blueprint"
- BIS Project mBridge MVP report and public materials
- BIS Project Agora public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

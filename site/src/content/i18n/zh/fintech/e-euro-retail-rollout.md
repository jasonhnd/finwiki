---
source: fintech/e-euro-retail-rollout
source_hash: e702b1a7349bb5ab
lang: zh
status: machine
fidelity: ok
title: "数字欧元零售推出 — 准备阶段 2023-2026,  反脱媒设计及瑞典电子克朗暂停比较"
translated_at: 2026-05-31T06:16:15.753Z
---

# 数字欧元零售推出 — 准备阶段 2023-2026,  反脱媒设计及瑞典电子克朗暂停比较

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction deep dive on the ECB digital euro for the 2026 Preparation-Phase snapshot. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] for architecture context, and with [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]] for the three-paradigm classification. For per-jurisdiction peers see [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] and [[fintech/erupee-india-pilot-status|eRupee India pilot status]]; for wholesale-CBDC context relevant to the EU side (the BoF / BdF, BdI, and Bundesbank participate) see [[fintech/bis-project-agora-overview|BIS Project Agorá]]. For the broader EU stablecoin regulatory context that shapes the digital euro's competitive runway see [[fintech/mica-overview|MiCA overview]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]].

> [!info] TL;DR
> 截至 2026  年中，数字欧元仍处于**准备阶段**，原定为 2023-11  至 2025-10  的两年期现已延伸至 2026-Q4+ 以等待欧盟共同立法结果。目前**尚无实际发行**、**无零售钱包**、**无实体商户接入**。核心设计选择——通过受监管支付服务提供商进行**双层中介分发**、**每人持有上限目前提议为 €3,000-€4,000** 并附反向瀑布至关联银行账户、零售余额**零利率**——是明确的反脱媒防御机制。最具警示意义的先例是瑞典电子克朗项目，瑞典央行实际上于 2024-2025  暂停，未做发行决定、无实际零售产品，表明"准备工作可无限期延续"。数字欧元的推进节奏**不是技术限制，而是政策选择**——旨在保护 €18T+ 的商业银行存款基础，同时等待政治共识形成。

## 项目架构

```
                ECB 数字欧元项目
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                      ▼
   调查阶段                            准备阶段
   (2021-10 → 2023-10)                  (2023-11 → 2026-Q4+)
       │                                      │
   设计探索                            规则手册起草
   （离线/在线模式、                    技术供应商
   持有上限、中介模型）                  遴选
                                        手册 + 供应商
                                        测试
       │                                      │
   以"进入准备阶段"                    （尚未）发行
   建议结束                            决定待立法结果
                                            │
                                            ▼
                                  发行决定阶段
                                  （待进入；尚未启动）
                                            │
                                            ▼
                                  实际发行（待定）
```

## 矩阵 A · 法规、监管机构、阶段状态

| 项目 | 详情 |
|---|---|
| 牵头机构 | 欧洲中央银行（ECB）管理委员会 + ECB 执行委员会 |
| 立法依据 | 建立数字欧元的条例 — 欧盟委员会 2023 年 6 月提案；正在欧盟理事会 + 欧洲议会共同立法（三方谈判）中 |
| 调查阶段 | 2021-10  → 2023-10 （已完成） |
| 准备阶段 | 2023-11  → 原定 2025 年 10 月；**已延伸至 2026-Q4+**，等待立法结果 |
| 发行决定阶段 | 截至 2026-05 尚未进入；需管理委员会决定 + 立法依据 |
| 发行开始 | 待定；取决于发行决定阶段结果；最早现实时间为 2027-2028  |
| 报告节奏 | ECB 在数字欧元项目页面定期/季度发布进展报告 |

ECB 在每份进展报告中明确声明，**进入准备阶段并不等同于发行决定**。发行需要：（i）欧盟共同立法条例获得通过，以及（ii）管理委员会单独作出启动决定。截至 2026-05 ，两者均未发生。

## 矩阵 B · 设计选择——成文的反脱媒机制

| 设计选择 | 详情 | 原因 |
|---|---|---|
| **双层中介模式** | ECB → 受监管支付服务提供商（银行、电子货币机构、支付机构）→ 用户；ECB 不直接分发 | 保留商业银行角色；与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] 双层结构一致；避免央行直接面向消费者的脱媒 |
| **每人持有上限** | 提议 €3,000-€4,000 /人（待立法决定；尚未最终确定） | 对每人数字欧元余额设置硬性上限，无论其开立多少钱包；防止银行存款大规模转换为央行货币 |
| **反向瀑布** | 若某笔支付超过收款方的持有上限，超额部分自动转入收款方关联的商业银行账户 | 消除持有上限对单笔大额支付的用户体验障碍 |
| **零利率** | 零售数字欧元不计利息 | 消除相对于商业银行存款的储蓄替代激励 |
| **在线 + 离线模式** | 在线模式用于一般用途；离线模式用于低金额类现金 P2P | 离线模式复制类现金隐私和韧性；在线模式支持商户支付 |
| **隐私分层** | 离线模式 = 类现金隐私（小额 P2P 无中央记录）；在线模式 = 受监管支付服务提供商可见，ECB 数据最小化 | 在隐私预期与 AML/CFT 义务之间取得平衡 |
| **仅通过受监管支付服务提供商分发** | 钱包由银行 + 受监管支付服务提供商提供；ECB 不运营面向消费者的应用 | 将渠道所有权保留在商业银行生态系统内 |
| **零利率 + 零售无可编程性** | 明确拒绝为零售数字欧元设置可编程货币功能 | 保持灵活性；避免条件性支付滥用和福利国家自动化框架 |
| **批发独立路径** | 批发 CBDC 用例通过单独的欧元体系探索性工作处理，不并入零售数字欧元 | 两条独立路径；零售是立法重点 |

三个核心反脱媒参数——**持有上限 + 反向瀑布 + 零利率**——是辩论最激烈的公共政策议题。商业银行游说倡导低上限（€1,000-€2,500  区间）并强调高上限的系统性风险含义。ECB 表示对 €3,000-€4,000  较为认可，但尚未最终确定。立法结果将经政治谈判确定。

## 矩阵 C · 准备阶段工作流

| 工作流 | 状态（2026-05） |
|---|---|
| 规则手册起草 | 进行中；ECB 协调，设有与支付服务提供商、商户和消费者代表的工作组 |
| 技术供应商遴选（框架协议） | 已宣布中选供应商；组件竞争性采购（如风险管理、欺诈预防、离线支付、应用 SDK、别名查询） |
| 手册 + 技术测试 | 在封闭环境中进行试点规模技术测试；无面向公众的试点 |
| 用户调研/消费者焦点小组 | 在欧元区各成员国开展中 |
| 商户接触/接受设计 | 进行中；支付方案集成设计推进中 |
| 跨境互操作性设计 | 讨论欧元区范围内的设计；与外部 CBDC 的互动有限 |
| 立法对话 | ECB 积极参与欧盟理事会和欧洲议会；提供技术建议 |

准备阶段**不是**公开试点，而是内部设计和技术供应商工作。最接近的类比是主要金融基础设施项目的设计阶段，而非面向消费者的试验。

## 矩阵 D · 采用指标（最新公开数据）

| 指标 | 最新公开数据 |
|---|---|
| 实际零售用户 | **0**（无发行） |
| 实际商户 | **0**（无接受） |
| 累计交易量 | **0** |
| 城市/覆盖范围 | **0** |
| 上线钱包应用 | **0** |
| 跨境 CBDC 结算 | **0** |
| 公开试点参与者 | **0**（准备阶段工作为内部/供应商侧，非消费者侧） |
| 已签署供应商框架协议 | 多个组件层级（风险管理、应用 SDK、别名查询、离线支付）；中选供应商名称于 2024-2025  期间陆续宣布 |

这是决定性的核心事实：**数字欧元是四个参考 CBDC 项目中截至 2026-05 唯一零实际零售活动的项目**。"落后于中国"的表述技术上准确但实质上具有误导性——ECB 已明确表示这是**政策选择**，而非技术差距。

## 矩阵 E · 持有上限与反脱媒防御（深入解析）

```
每人持有上限提议（示意；尚未最终确定）
       │
       ▼
   €3,000-€4,000  ← 最新公开讨论区间
       │
       ├── 低于上限：数字欧元余额持有于支付服务提供商提供的钱包中
       │
       └── 超过上限：反向瀑布至关联商业银行账户
                       （从用户体验角度，支付从不被阻断）
```

三层保护机制：

1. **每人硬性上限** — 无论一人开立多少钱包，数字欧元总持有余额受限（上限按人而非按钱包设置，需要别名/身份查询）。
2. **反向瀑布** — 超过上限的支付将超额部分自动转入关联商业银行账户。用户仍可发送/接收任意金额；仅以数字欧元持有的余额受上限约束。
3. **零利率** — 完全消除储蓄替代激励；持有数字欧元的唯一经济理由是交易需要，而非储蓄。

ECB 进行的技术分析表明，即使在提议上限的较高端，欧元区数字欧元的总持有量也仅占商业银行存款总额（€18T+）的一小部分，且反向瀑布可应对涌入压力。商业银行游说方对此提出异议。立法结果将决定哪种观点占据主导。

作为对比，其他三个参考 CBDC 项目均未以同样方式成文规定持有上限：
- **中国数字人民币**使用运营商层级限额（低层级 ¥10K 交易上限、¥50K 余额；高层级 KYC 更高）。
- **印度数字卢比**使用每日交易应用配置限额；无已公布的硬性余额上限。
- **日本 DCJPY** 不是 CBDC，而是代币化银行存款，在结构上受每家银行 ¥10M 存款保险限额约束。

## 矩阵 F · 分发模式

| 层级 | 在分发中的角色 |
|---|---|
| ECB | 发行方（央行货币）；运营底层方案 + 技术基础设施 |
| 受监管支付服务提供商（银行、电子货币机构、支付机构） | 提供钱包；用户入驻；KYC；面向用户的应用 |
| 商户 | 通过支付方案集成接受数字欧元支付 |
| 消费者 | 在支付服务提供商提供的钱包中持有数字欧元；向商户支付；P2P |

分发模式**明确设计为将商业银行保留在消费者关系的核心**。这是与中国双层模式（赋予 10  指定运营商分发权但由中国人民银行定义运营商）和印度双层模式（使用 17  参与银行）的最大单一设计差异。欧盟设计对现有商业银行分发渠道的保护程度最高。

## 与瑞典电子克朗暂停的比较

瑞典央行（Riksbank）自 2017,  以来推进的电子克朗项目，是为数字欧元辩论提供警示的先例。Riksbank 的公开立场从积极试点（2017-2022）演变为刻意保持未决（2023-2024），再到实际暂停（2024-2025）。主要公开信号：

- Riksbank 自 2017 以来已就多个阶段发布电子克朗概念验证报告。
- 至 2023-2024 ，Riksbank 的公开沟通越来越强调，发行是**政治授权问题**，需要议会决定，而非单纯由央行决定。
- Riksbank 将重心转向改善现有支付基础设施（RIX-INST 即时支付系统），而非推出电子克朗。
- 电子克朗讨论实际上已相对于 Riksbank 其他工作流被降级处理。

对数字欧元的启示：**如果政治条件未能汇聚，"准备工作"可无限期延续**。瑞典的经验表明，发行的技术能力已充分具备，但发行的政治经济决策才是约束条件。数字欧元走在同样的轨道上——技术正在建设，但发行决定并非 ECB 单方面能作出的。

| 项目 | 欧盟数字欧元 | 瑞典电子克朗 |
|---|---|---|
| 机构 | ECB 管理委员会 | 瑞典央行 |
| 立法依据 | 欧盟共同立法条例待定 | 需要瑞典议会决定 |
| 架构 | 通过受监管支付服务提供商的双层中介 | 双层中介模式（设计中） |
| 持有上限 | 提议 €3,000-€4,000  | 未最终确定；设计概念参考了上限 |
| 实际零售 | 无 | 无 |
| 状态（2026-05） | 准备阶段（延期） | 实际暂停；无发行决定 |
| 政治动力 | 中低；商业银行抵制 | 低；Riksbank 降级处理 |
| 原因 | 反脱媒政策 + 共同立法节奏 | 实际上缺乏消费者/政治推动力 |

与中国和印度的对比在结构上很鲜明：中国政治授权毋庸置疑，中国人民银行有直接上线权限；印度储备银行有机构权威和明确技术授权；欧盟 ECB 需要立法同意；瑞典 Riksbank 需要未能实现的议会授权。推进节奏差异是**政治性的**，而非技术性的。

## 竞争背景 — MiCA 电子货币代币及批发欧元体系

数字欧元的竞争跑道由两个并行的欧盟发展所塑造：

1. **MiCA 电子货币代币（EMT）制度** — 2024-06-30（稳定币部分）和 2024-12-30（全部）生效；欧盟信用机构和电子货币机构发行的欧元计价电子货币代币已在市场中。EMT 通过私人中介提供"数字欧元"部分使用场景（可编程欧元支付）。参见 [[fintech/mica-overview|MiCA overview]] 和 [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]。
2. **欧元体系批发探索性工作** — 与零售数字欧元独立；进行中央银行货币批发结算试验（含基于 DLT 的结算）。部分欧元区央行（法兰西银行、意大利央行、德意志联邦银行）参与 [[fintech/bis-project-agora-overview|BIS Project Agorá]] 并有各自 DLT 试点。

这两条互补路径意味着**欧盟整体数字货币基础设施并未"落后"**——它已有获 MiCA 许可的实时 EMT 和实时批发 CBDC 技术工作。具体而言，被搁置的是**零售 CBDC 发行**。这一结构模式将欧盟的节奏与真正的技术差距故事区分开来。

## 起源与演变

```
2017-2019     ECB 内部开展 CBDC 研究；工作论文系列
2020-10       ECB 发布"数字欧元报告"；启动磋商
2021-10       调查阶段开始（2年期）
2023-06       欧盟委员会提出建立数字欧元的条例
2023-10       调查阶段结束；ECB 建议进入准备阶段
2023-11       准备阶段开始（原定 2年，至 2025-10）
2024-2025     供应商框架协议；规则手册起草；技术试点
2025          准备阶段进展报告定期/季度发布
2025-2026     准备阶段延伸至 2026-Q4+ 等待立法结果
2026          欧盟理事会 + 欧洲议会继续就条例进行三方谈判
2026-05       无发行决定；准备继续
2026-2027    （预期）进入发行决定阶段，以立法结果为条件
2027-2028    （最早现实时间）实际零售发行，以发行决定为条件
```

**规律**：每个重大步骤均依赖多机构同意。ECB 对该项目具有机构权威，但对法律依据或具有约束力的政治授权不具权威。Riksbank 电子克朗的经验表明，这种依赖性可无限期延长时间线。

## 关联

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## 来源

- 欧洲中央银行 — 数字欧元项目页面：https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — 数字欧元准备阶段进展报告：https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- 欧盟委员会 — 数字欧元提案及政策页面：https://commission.europa.eu/business-economy-euro/euro-area/digital-euro_en
- 欧盟委员会 — 建立数字欧元条例提案（2023 年 6 月）
- 欧盟理事会 — 数字欧元政策页面：https://www.consilium.europa.eu/en/policies/digital-euro/
- ECB — 关于数字欧元的报告（2020 年 10 月）
- ECB — CBDC 设计与分析工作论文系列
- 瑞典央行 — 电子克朗项目页面及概念验证报告：https://www.riksbank.se/en-gb/payments--cash/e-krona/
- 国际清算银行创新中心 — CBDC 专题页面：https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá 公开资料（欧元体系央行参与）：https://www.bis.org/about/bisih/topics/cbdc/agora.htm

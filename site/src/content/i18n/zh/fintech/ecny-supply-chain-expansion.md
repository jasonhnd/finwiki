---
source: fintech/ecny-supply-chain-expansion
source_hash: f95ba8067757ce33
lang: zh
status: machine
fidelity: needs_review
title: "e-CNY 供应链与跨境扩张 2025-2026"
translated_at: 2026-05-31T06:16:15.661Z
---

# e-CNY 供应链与跨境扩张 2025-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on China's e-CNY for the 2025-2026 cross-border expansion phase. It is paired with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]] for the wholesale-bridge architecture, and with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]] for the competing private-stablecoin rail in the same regional market. For the broader CBDC architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]].

> [!info] TL;DR
> 到2026 年中，e-CNY 已不再是单纯的国内零售实验——它已成为**首个成为多国批发结算圈锚点的主要经济体零售 CBDC**。目前有三层扩张已上线：(i) 香港/大湾区跨境零售连接；(ii) 与 HKMA / BoT / CBUAE / SAMA /（巴西 DREX 自2026 H2起）的 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 批发桥接；(iii) 一带一路项目试点整合，由中国国企对手方以 e-CNY 结算商品和基建发票。最大的 2026  竞争变量是 **HKMA 稳定币发牌**（[[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing]]），正在同一通道上创建并行的港元及美元计价轨道。

## 三层扩张

```
                  e-CNY 2025-2026 扩张（三层）
                                  │
        ┌─────────────────────────┼─────────────────────────────────┐
        ▼                         ▼                                 ▼
  L1 香港连接            L2 mBridge批发              L3 一带一路项目试点
  （零售/中小企业）       （央行 RTGS）               （国企商品/基建）
        │                         │                                 │
   大湾区居民            HKMA + BoT + CBUAE            国开行/中国进出口/国企
   e-CNY 钱包            + SAMA + 巴西 DREX            商品发票流
   用于跨境支付          PvP 原子结算                  链上结算
                         < 10  秒终结性              （试点范围）
        │                         │                                 │
        └─────────────────────────┴─────────────────────────────────┘
                                  │
              竞争背景：HKMA 稳定币发牌
              （汇丰 HKD/USD + Anchorpoint HKD/USD — 首批 2026-05-21）
```

## 第 1  层 — 香港/大湾区跨境零售连接

| 项目 | 详情 |
|---|---|
| 计划 | 人行-HKMA 技术互操作性，支持香港居民在内地（大湾区优先）使用 e-CNY，反之亦然 |
| 上线 | 从2020 概念验证 → 2023 扩大香港居民试点 → 2025 在 11 个大湾区城市常态化使用 |
| 钱包模式 | 香港居民无需内地银行账户即可开立 e-CNY 钱包（低级别 KYC，凭香港身份证 + 手机号）；通过 FPS（快速支付系统）从港元银行账户充值 |
| 覆盖范围 | 全部 11  个大湾区城市（深圳、广州、珠海、佛山、惠州、东莞、中山、江门、肇庆，加上香港 + 澳门） |
| 日常流量特征 | 旅游 + 跨境通勤 + 轻工业品中小企业 B2B |

香港连接是**目前唯一可供非居民大规模使用的主要经济体零售 CBDC**。它是"零售 CBDC + 跨境"体验的现实蓝本。人行选择香港作为试验场，原因是：(i) 人民币国际化政策已将香港定位为离岸人民币（CNH）枢纽；(ii) HKMA 具备接入所需的技术深度与政治协调能力；(iii) 大湾区整合是中央政府明确的政策优先事项。香港端的架构采用与内地相同的两级设计（人行 → 10 运营商 → 用户），运营商通过 HKMA 监管的基础设施路由香港端流量。

香港连接与 [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] 直接交互，该条例于 2025-08  生效，并于 2026-05-21 颁发首批牌照（汇丰 + 渣打 Anchorpoint）。汇丰和 Anchorpoint 稳定币将以港元或美元为挂钩，位于 e-CNY 轨道**旁边而非其内部**。竞争问题在于：香港中小企业究竟更倾向于使用 e-CNY 处理面向内地的发票（人行监管），还是使用 HKMA 发牌的港元稳定币处理全球流量（HKMA 监管）？

## 第 2  层 — mBridge 批发环

| 项目 | 详情 |
|---|---|
| 计划 | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] — 多 CBDC 批发结算平台 |
| 创始央行 | 人行 + HKMA + 泰国银行 + 阿联酋央行（2021）；沙特央行（SAMA）于 2024-06  加入 |
| BIS 角色 | BIS 香港创新中心自 2021  孵化本项目 → BIS 于 2024-10 /2025-10 退出运营角色；技术移交给人行 + HKMA + BoT + CBUAE 作为核心运营方 |
| 架构 | DLT 许可链；HotStuff BFT 共识；每家央行运营各自的验证节点和 CBDC 账本；共享 mBridge 账本用于跨货币结算 |
| 结算模式 | PvP（支付对支付）原子结算；测试中终结性低于 10 秒 |
| 状态（2026-05） | 自 2025-09 （后 MVP 阶段）进入商业运营阶段；计划于 2026 H2  与巴西 BCB DREX 进行整合测试 |
| 覆盖范围 | 成员国 GDP ≈ 美元 23.3T；若含观察员国（印度/俄罗斯/南非/伊朗正在讨论中），潜在影响范围 ≈ 美元 35T（参见 [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]]） |

e-CNY 是在 mBridge 平台上结算的五种主权 CBDC（中国/香港/泰国/阿联酋/沙特）之一。若巴西 DREX 于 2026 H2  完成整合，将是首次跨洲连接，使影响范围大幅扩展至全球 GDP 的三分之一。其结构意义并不在于 mBridge 今日已处理的庞大交易量（其实不大，相对于 SWIFT 仍属小规模），而在于**多边政治联盟已存在，且目前在人行和 HKMA 而非 BIS 中立治理下运营** — 参见 [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]] 和 [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]。

与 [[fintech/bis-project-agora-overview|BIS Project Agorá]] 的不对称性是最清晰的 2025-2026  进展。Agorá 是 BIS 主导的 7-G10  批发 CBDC + 代币化存款实验（美国纽约联储 + 英国央行 + 法国央行 + 日本银行 + 韩国央行 + 墨西哥银行 + 瑞士国家银行 + 40 + 商业银行）。mBridge 则是非 G7  圈。两者之间没有正式协议；技术互操作性是一个开放问题。战略对比参见 [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]。

## 第 3  层 — 一带一路项目试点整合

| 项目 | 详情 |
|---|---|
| 渠道 | 中国国企（中石油、中石化、中远海运等）+ 中国政策性银行（国开行、中国进出口银行）使用 e-CNY 结算跨境基建和商品流的发票 |
| 试点公告 | 部分交易对手方的商品贸易试点（石油、大豆、稀土）；细节通常不公开；人行公开文件称"试点扩大"但未公布详细数字 |
| 结算模式 | 批发 e-CNY 计价 + 当双腿均接入 mBridge 时通过 mBridge 轨道（如人行侧 ↔ CBUAE 侧） |
| 战略框架 | 与人民币国际化大局及金砖国家+支付协调讨论挂钩 |
| 规模 | 绝对量较小；约束因素是政治与示范价值，而非交易吞吐量 |

一带一路整合是最不透明的一层。人行文件提及试点扩大，但鲜少公布各走廊的具体量。公开来源信号显示，活跃整合包括：(a) 通过 mBridge 的 SAMA 腿进行沙特阿美石油出口开票（相关资本池背景参见 [[fintech/sovereign-capital-pool-aramco-anchor|Aramco sovereign capital pool anchor]]）；(b) 中巴大豆贸易结算（巴西媒体自 2024-2025 起持续报道）；(c) 通过迪拜多种商品交易中心成员进行阿联酋-中国黄金贸易结算。

中国的战略姿态**并非**"取代 SWIFT"，而是**为倾向于不以美元清算的贸易对手方构建并行轨道**。这与 [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]] 论题的底层逻辑相同：货币管道追随政治对齐。

## 最新公开采用指标

| 层次 | 指标 | 最新公开数字 | 来源 |
|---|---|---|---|
| 国内 e-CNY | 累计交易价值 | **人民币 1  万亿以上**（人行公开信息2024-2025） | 人行新闻发布会及工作论文更新 |
| 国内 e-CNY | 注册钱包数 | **180M+** 个人钱包（工作论文估算） | 人行工作论文 |
| 香港连接 | 覆盖大湾区城市数 | 11  个大湾区城市中的 **11** 个 + 澳门 | HKMA / 人行联合公告 |
| mBridge | 创始 + 新成员 | **6** 家央行（中/港/泰/阿联酋/沙特；巴西 2026 H2） | BIS 创新中心公告2024-2025  |
| mBridge | 结算延迟 | 测试中 **< 10  秒** 终结性 | BIS Project mBridge 进展报告 |
| 一带一路 | 活跃商品走廊 | 已引用试点，但未公布各走廊量 | 混合：人行 + 商业对手方媒体报道 |

累计价值数字是被引用最多的统计数据，但它汇总了所有零售、B2B 及政府转账使用的**2020-2025  累计**数字，包括国家主导的薪酬发放等大额标题交易。独立观察人士指出，活跃钱包活动量明显低于注册钱包数；这一差距是标准的 CBDC 累计量 vs 活跃量报告问题（参见反驳意见）。

## 扩张阶段的架构与设计选择

| 设计选择 | 含义 | 中国选择原因 |
|---|---|---|
| 两级制（人行 → 10 运营商 → 用户） | 与国内 e-CNY 相同的两级模式延伸至香港/mBridge | 保留商业银行角色；与 4  双层模式一致；对 4  国有商业银行具有政治稳定性 |
| 可控匿名性 | 低级别钱包在阈值以下匿名；高级别 KYC 追踪身份 | 符合反洗钱预期；保留内地监管权威 |
| 可编程性（有限） | 自 2023  起的智能合约试点（如定向消费补贴、农业补贴） | 实现政府转账用例，不进入完整 DeFi |
| 零售 e-CNY 不付息 | 零售钱包利率为零 | 防止商业银行存款外流 |
| 批发专属跨境 | mBridge 跨境仅通过央行中介；零售香港连接是例外 | 资本账户管制；外汇政策保护 |
| mBridge 上的 PvP 原子结算 | 消除跨货币 CBDC 互换的 Herstatt 风险 | 降低代理行摩擦；加快贸易融资结算 |

界定 2025-2026  阶段的结构性选择是**批发环优先，零售跨境其次**。中国愿意使 e-CNY 在大湾区边境易于使用，但（目前）不会推向全球。mBridge 环是安全可控的扩展，因为它是央行对央行而非零售对零售。

## 香港稳定币发牌作为竞争背景

e-CNY 扩张中最重要的 2026  进展**不是** e-CNY 本身的进展——而是 [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]]，该条例于 2025-08  生效并于 2026-05-21 颁发首批牌照。首批：

| 被许可方 | 挂钩货币 | 备注 |
|---|---|---|
| 汇丰 | 港元和美元 | 全球性银行；政治风险最低的申请方 |
| 渣打 Anchorpoint（与 Animoca + HKT 的联合载体） | 港元和美元 | 银行+科技联合体；定位于跨境贸易流 |

内地背景申请方（蚂蚁国际、京东 JD-HKD、中国银行香港）和 Tether 未入首批 — 参见 [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]。竞争结果是：**香港中小企业和全球对手方现在拥有一个已获牌照的替代方案，可替代 e-CNY 用于港元或美元计价的跨境开票**。战略问题：HKMA 稳定币轨道是否会从 e-CNY 香港连接分流流量，还是因服务不同客户群（e-CNY 用于面向内地支付，港元稳定币用于全球贸易）而共存？

HKMA 公开信号显示，该框架旨在**补充**而非取代 e-CNY。两条轨道在香港侧均受 HKMA 监管，理论上都可以通过香港银行结算，理论上也都可以接入 [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]] 代币化存款基础设施。实际问题是：中小企业究竟是更偏向摩擦更低、由人行发牌的 e-CNY，还是更高信任度、由 HKMA 发牌的稳定币，用于其特定的跨境场景。

## 起源与演变

```
2014        人行 e-CNY 研究启动
2017        BIS / IMF / ECB 发布 CBDC 架构论文
2020-04     人行 e-CNY 国内零售试点启动（4 个城市）
2021        BIS 香港创新中心联合人行 + HKMA + BoT + CBUAE 启动 mBridge
2022-04     国内 e-CNY 试点扩展至 23 个城市
2023        香港居民跨境试点；智能合约试点启动
2024-03     HKMA Project Ensemble 启动（香港代币化存款沙盒）
2024-04     BIS Project Agorá 启动（7 G10 央行 + 40 + 银行）
2024-06     沙特 SAMA 加入 mBridge（第5家央行）
2024-10     BIS 宣布退出 mBridge 运营角色
2024-10     BoJ 及其他方出席 BIS 技术研讨会
2025-08     HKMA《稳定币条例》生效
2025-09     mBridge 进入商业运营阶段
2025        大湾区 11 城市 e-CNY 常态化使用；香港 FPS 充值普及
2026-Q1     印度 RBI 批发 ↔ 零售互操作性测试（独立项目）
2026-Q2     mBridge ↔ 巴西 DREX 整合测试启动
2026-05-21  HKMA 颁发首批稳定币牌照（汇丰 + Anchorpoint）
2026-H2     巴西 DREX 预期正式接入 mBridge
```

**扩张规律**：每一层均在前一层达到门槛成熟度后加入——国内稳定 → 香港试点 → mBridge MVP → mBridge 商业化 → 跨洲整合。每一步的政治前提是对手方央行的双边或多边同意，在一带一路/金砖国家+框架下远比从 G7  货币当局处获得更为容易。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]
- [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]
- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## Sources

- People's Bank of China — e-CNY R&D progress and working papers: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- HKMA — Project Ensemble, e-HKD, and Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- BIS Innovation Hub — Project mBridge progress materials: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 "The next-generation monetary system — a blueprint" and the Innovation Hub mBridge MVP report
- BIS public statement on mBridge governance transition (2024-10 / 2025-10)
- Bank of Thailand — BoT press releases on cross-border CBDC: https://www.bot.or.th/en/news-and-media/news/
- Central Bank of the UAE — public communications: https://www.centralbank.ae/en/news/
- HKMA + PBoC joint announcements on cross-boundary e-CNY use in the Greater Bay Area
- HKMA Stablecoin Ordinance press releases (2025-08 entry into force; 2026-05-21 first license issuance)
- BIS Innovation Hub Project Agorá public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

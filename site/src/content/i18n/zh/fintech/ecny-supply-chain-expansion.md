---
source: fintech/ecny-supply-chain-expansion
source_hash: f95ba8067757ce33
lang: zh
status: machine
fidelity: ok
title: "e-CNY 供应链与跨境扩张 2025-2026"
translated_at: 2026-05-31T06:16:15.661Z
---

# e-CNY 供应链与跨境扩张 2025-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on China's e-CNY for the 2025-2026 cross-border expansion phase. It is paired with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算]] for the wholesale-bridge architecture, and with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]] for the competing private-stablecoin rail in the same regional market. For the broader CBDC architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]].

> [!info] TL;DR
> 到 2026 年中，e-CNY 已不再只是中国境内的零售实验，而是演化为**首个以主要经济体零售 CBDC 为锚的多国批发结算环的一部分**。当前有三层扩张已进入实际运行：(i) 香港 / 大湾区跨境零售联通，(ii) 与 HKMA / BoT / CBUAE / SAMA /（自 2026 H2 起接入的巴西 DREX）共同构成的 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 批发桥，(iii) 将 e-CNY 引入中国国企对手方的大宗商品与基建发票结算的“一带一路”项目试点。2026 年最重要的竞争变量，是 **HKMA 稳定币发牌**（[[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing]]），它正在同一条走廊上并行建立以 HKD 和 USD 计价的替代轨道。

## 三层扩张结构

```
                  e-CNY 2025-2026 扩张（三层）

  L1 香港联通                    L2 mBridge 批发桥              L3 “一带一路”项目试点
  （零售 / 中小企业）            （央行 RTGS）                  （国企大宗商品 / 基建）

  大湾区居民                     HKMA + BoT + CBUAE             国开行 / 进出口银行 / 国企
  使用 e-CNY 钱包                + SAMA + 巴西 DREX            以 e-CNY 结算发票
  进行跨境支付                   PvP 原子结算                  （试点范围）
                                 < 10 秒终局性

  竞争背景：HKMA 稳定币发牌
  （HSBC HKD/USD + Anchorpoint HKD/USD · 首批 2026-05-21）
```

## 第 1 层 · 香港 / 大湾区跨境零售联通

| 项目 | 细节 |
|---|---|
| 项目内容 | PBoC-HKMA 技术互通，使香港居民可在内地（先以大湾区为主）使用 e-CNY，反向场景亦然 |
| 上线过程 | 自 2020 年 PoC 起分阶段推进 · 2023 年扩展为香港居民试点 · 2025 年在 11 个大湾区城市进入常态使用 |
| 钱包模式 | 香港居民无需内地银行账户即可开立 e-CNY 钱包（低等级 KYC：香港身份证 + 手机号）；可通过 FPS 从港币银行账户充值 |
| 覆盖范围 | 全部 11 个大湾区城市（Shenzhen、Guangzhou、Zhuhai、Foshan、Huizhou、Dongguan、Zhongshan、Jiangmen、Zhaoqing，以及 HK + Macau） |
| 日常流量结构 | 旅游 + 跨境通勤 + 轻工货品类中小企业 B2B |

香港联通是**当前唯一一个在主要经济体中，可被非居民规模化使用的零售型 CBDC 模式**。它是现实中“零售 CBDC + 跨境体验”最完整的样板。PBoC 选择香港作为试验场，是因为：(i) 人民币国际化政策本来就把香港定位为离岸 CNH 中心，(ii) HKMA 具备足够的技术深度和政策协同性，(iii) 大湾区一体化本身就是中央政府明确推动的优先事项。香港段使用的仍是与内地相同的双层结构（PBoC · 10 家运营机构 · 用户），只是香港侧流量通过 HKMA 监管基础设施路由。

这一香港段与 [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] 直接互动。该条例于 2025-08 生效，并于 2026-05-21 发出首批牌照（HSBC + Standard Chartered Anchorpoint）。HSBC 与 Anchorpoint 稳定币均为 HKD 或 USD 挂钩，处于 e-CNY 轨道**旁侧而非轨道内部**。竞争焦点在于：面向中国内地业务的香港中小企业，究竟更偏好受 PBoC 监管的 e-CNY，还是更偏好受 HKMA 监管、适合全球资金流的港元稳定币。

## 第 2 层 · mBridge 批发环

| 项目 | 细节 |
|---|---|
| 项目名称 | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] · 多 CBDC 批发结算平台 |
| 创始央行 | PBoC + HKMA + Bank of Thailand + Central Bank of UAE（2021）；Saudi Central Bank（SAMA）于 2024-06 加入 |
| BIS 角色 | BIS Innovation Hub Hong Kong Centre 自 2021 年孵化该项目 · BIS 于 2024-10 / 2025-10 退出运营角色；技术与治理转交给 PBoC + HKMA + BoT + CBUAE 等核心运营方 |
| 架构 | DLT 许可链；HotStuff BFT 共识；各央行运行验证节点并维护自身 CBDC 账本；共享 mBridge 账本用于跨币种结算 |
| 结算模式 | PvP（Payment-versus-Payment）原子结算；测试中终局时间低于 10 秒 |
| 状态（2026-05） | 2025-09 后进入商业运行阶段（post-MVP）；计划于 2026 H2 与巴西 BCB DREX 开展集成测试 |
| 覆盖范围 | 成员国 GDP 约 USD 23.3T；若算上被讨论中的观察方（印度 / 俄罗斯 / 南非 / 伊朗），影响范围可达约 USD 35T，见 [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]] |

e-CNY 是 mBridge 平台上五种主权 CBDC（CN / HK / TH / AE / SA）之一。若巴西 DREX 于 2026 H2 接入，将是其首次跨洲联接，并把影响范围实质性扩展到全球 GDP 的约三分之一。这里的结构性意义不在于 mBridge 现在就处理了巨量交易，而在于**一个多边政治联盟已经形成，并在 PBoC 和 HKMA 的主导下进入运营**，而不再是 BIS 中立治理，见 [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora]] 与 [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]。

与 [[fintech/bis-project-agora-overview|BIS Project Agora]] 的不对称，是 2025-2026 年最清晰的格局变化。Agora 是 BIS 主导的 7 家 G10 央行 + 40+ 商业银行的批发 CBDC 与代币化存款实验；mBridge 则是非 G7 环。两者之间没有正式互通协议，技术互操作仍是开放问题。战略对照见 [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge strategic comparison]]。

## 第 3 层 · “一带一路”项目试点整合

| 项目 | 细节 |
|---|---|
| 渠道 | 中国国企（CNPC、Sinopec、COSCO 等）+ 政策性银行（China Development Bank、China Exim）在跨境基建与大宗商品流中使用 e-CNY 进行发票结算 |
| 试点公告 | 与特定对手方开展石油、大豆、稀土等商品贸易试点；细节多不公开；PBoC 公开表述通常仅称“试点扩张” |
| 结算模型 | 当双方都接入 mBridge 时，以批发型 e-CNY 计价并通过 mBridge 轨道结算（例如 PBoC 侧 · CBUAE 侧） |
| 战略框架 | 纳入更广义的人民币国际化计划与 BRICS+ 支付协同讨论 |
| 交易量 | 绝对规模仍小；约束不在吞吐量，而在政治示范价值 |

“一带一路”层是最不透明的一层。PBoC 的公开材料会提及试点扩张，但很少公布具体走廊的交易量。来自公开来源的信号表明，活跃整合主要集中在：(a) 通过 mBridge 中 SAMA 这一腿关联的沙特阿美石油出口计价，见 [[fintech/sovereign-capital-pool-aramco-anchor|Aramco sovereign capital pool anchor]]；(b) 2024-2025 年巴西媒体反复提及的中巴大豆贸易结算；(c) 由 Dubai Multi Commodities Centre 成员参与的中阿黄金贸易结算。

中国的战略姿态并不是“替代 SWIFT”，而是**为不愿以美元清算的贸易对手方建立一条并行轨道**。这一逻辑与 [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]] 的命题一致：货币基础设施会跟随政治对齐。

## 最近公开的采用指标

| 层级 | 指标 | 最近公开数字 | 来源 |
|---|---|---|---|
| 境内 e-CNY | 累计交易金额 | **CNY 1 trillion+**（PBoC 2024-2025 公开表述） | PBoC 新闻发布会与工作论文更新 |
| 境内 e-CNY | 已注册钱包数 | **180M+** 个个人钱包（工作论文估算） | PBoC working paper |
| 香港联通 | 覆盖大湾区城市数 | **11** / 11 个大湾区城市 + 澳门 | HKMA / PBoC 联合公告 |
| mBridge | 创始成员 + 新成员 | **6** 家央行（CN / HK / TH / AE / SA；巴西 2026 H2） | BIS Innovation Hub 2024-2025 公告 |
| mBridge | 结算延迟 | 测试中 **< 10 秒** 终局 | BIS Project mBridge 进展材料 |
| “一带一路” | 活跃商品走廊 | 有试点表述，但未披露按走廊的交易量 | 混合来源：PBoC + 商业对手方新闻稿 |

累计金额是最常被引用的统计，但它把 **2020-2025 的零售、B2B、政府转移支付** 全部打包在一起，也包含国有体系主导的工资发放等大额头部交易。独立观察者普遍认为，活跃钱包数明显低于注册钱包数；这也是 CBDC 报告中常见的“累计数与活跃数之间的缺口”问题。

## 扩张阶段的架构与设计选择

| 设计选择 | 含义 | 中国为何如此选择 |
|---|---|---|
| 双层结构（PBoC · 10 家运营机构 · 用户） | 将境内 e-CNY 的双层模型延伸至香港与 mBridge | 保留商业银行角色；符合 [[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] 的双层结构；有利于四大国有行的政治稳定 |
| 可控匿名 | 低等级钱包在阈值以下匿名；高等级钱包执行 KYC | 满足 AML 要求，同时保留中国大陆监管权威 |
| 有限可编程性 | 自 2023 年起开展智能合约式试点（如用途限定补贴、农业补贴） | 在不走向全面 DeFi 的前提下，支持政府转移支付场景 |
| 零售 e-CNY 不计息 | 零售钱包余额利率为 0 | 防止商业银行存款外流 |
| 跨境以批发为主 | mBridge 仅处理央行中介下的跨境；香港零售联通是例外 | 维护资本项目管控与外汇政策 |
| mBridge 上的 PvP 原子结算 | 消除跨币种 CBDC 交换中的 Herstatt 风险 | 降低代理行摩擦，加速贸易金融结算 |

定义 2025-2026 阶段的结构性选择是：**先做批发环，再做零售跨境**。中国愿意让 e-CNY 在大湾区跨境场景下更易用，但尚未把它推向全球零售层面。mBridge 之所以安全可控，正因为它是央行对央行，而不是零售对零售。

## HK 稳定币发牌的竞争背景

对 e-CNY 扩张而言，2026 年最重要的发展**并不是 e-CNY 自身的新动作**，而是 [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] 于 2025-08 生效，并在 2026-05-21 发出首批牌照。首批包括：

| 持牌方 | 挂钩货币 | 备注 |
|---|---|---|
| HSBC | HKD 和 USD | 全球性银行，政治风险最低的申请人 |
| Standard Chartered Anchorpoint（与 Animoca + HKT 的联合载体） | HKD 和 USD | 银行 + 科技联盟，面向跨境贸易流 |

Ant International、JD-HKD、Bank of China Hong Kong，以及 Tether 等大陆背景 / 其他申请方并未进入首批，见 [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]。其竞争后果是：**香港中小企业与全球对手方，现在拥有了一个受牌照监管的、可替代 e-CNY 的跨境 HKD / USD 计价开票工具**。核心问题在于，这条 HKMA 稳定币轨道会不会从 e-CNY 香港联通中分流，还是二者只是服务不同用户群而并行存在。

从 HKMA 的公开信号看，该框架意在**补充**而非替代 e-CNY。两条轨道在香港侧都由 HKMA 监管，都可以理论上通过香港银行结算，也都可能接入 [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]] 的代币化存款基础设施。现实中的关键，在于中小企业究竟更偏好低摩擦的 e-CNY，还是更具全球可接受性的 HKMA 持牌稳定币。

## Origin and evolution

```
2014        PBoC 开始 e-CNY 研究
2017        BIS / IMF / ECB 发布 CBDC 架构论文
2020-04     PBoC 启动境内 e-CNY 零售试点（4 个城市）
2021        BIS Innovation Hub Hong Kong Centre 联合 PBoC + HKMA + BoT + CBUAE 启动 mBridge
2022-04     境内 e-CNY 试点扩展到 23 个城市
2023        香港居民跨境试点；智能合约试点启动
2024-03     HKMA Project Ensemble 启动（香港代币化存款沙盒）
2024-04     BIS Project Agora 启动（7 家 G10 央行 + 40+ 银行）
2024-06     沙特 SAMA 加入 mBridge（第 5 家央行）
2024-10     BIS 宣布退出 mBridge 运营角色
2024-10     BoJ 等在 BIS 技术研讨会上会合
2025-08     HKMA Stablecoin Ordinance 生效
2025-09     mBridge 进入商业运行阶段
2025        大湾区 11 城 e-CNY 常态使用；香港 FPS 充值常态化
2026-Q1     印度 RBI 批发 · 零售互操作测试（独立项目）
2026-Q2     mBridge · 巴西 DREX 集成测试开始
2026-05-21  HKMA 发出首批稳定币牌照（HSBC + Anchorpoint）
2026-H2     预计巴西 DREX 正式接入 mBridge
```

**扩张模式**：每一层都建立在上一层达到阈值准备度之后才启动：境内稳定 · 香港试点 · mBridge MVP · mBridge 商业运行 · 跨洲集成。每一步的政治前提，都是获得对手央行的双边或多边同意；这在“一带一路” / BRICS+ 框架中，比在 G7 货币当局之间更容易实现。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三种架构范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构权衡的 4 个维度]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora]]
- [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]
- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]]
- [[fintech/central-banking-function-unbundling|中央银行职能拆分]]

## Sources

- People's Bank of China · e-CNY R&D progress and working papers: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- HKMA · Project Ensemble, e-HKD, and Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- BIS Innovation Hub · Project mBridge progress materials: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 "The next-generation monetary system · a blueprint" and the Innovation Hub mBridge MVP report
- BIS public statement on mBridge governance transition (2024-10 / 2025-10)
- Bank of Thailand · BoT press releases on cross-border CBDC: https://www.bot.or.th/en/news-and-media/news/
- Central Bank of the UAE · public communications: https://www.centralbank.ae/en/news/
- HKMA + PBoC joint announcements on cross-boundary e-CNY use in the Greater Bay Area
- HKMA Stablecoin Ordinance press releases (2025-08 entry into force; 2026-05-21 first license issuance)
- BIS Innovation Hub Project Agora public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

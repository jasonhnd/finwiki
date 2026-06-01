---
source: fintech/treasury-stablecoin-policy-2025
source_hash: a8dd0ae3524217d3
lang: zh
status: machine
fidelity: ok
title: "财政部 2025 稳定币政策框架·PWG 建议与双轨牌照"
translated_at: 2026-05-31T11:13:44.863Z
---

# 财政部 2025 稳定币政策框架·PWG 建议与双轨牌照

## 长话短说

财政部 2025 年稳定币政策框架通过三个协调轨道落实 **GENIUS Act**。第一，依据 EO 14178 重组的 **总统数字资产市场工作组（PWG-DAM）**，就发行人资格、准备金构成、赎回保证与挤兑风险缓释提出建议。第二，**联邦-州双轨**牌照结构定型，发行人可在统一联邦底线之上，由 **OCC**、**美联储**或**州监管机构**发牌。第三，**国库券准备金要求**被限定为 **≤93 天到期**美国国债、受保存款机构活期存款、以及以国债为抵押的逆回购，并明确**排除久期更长的债券、公司票据与加密抵押品**，以回应 2023 年 3 月 USDC 事件中暴露的**挤兑风险**。赎回保证被法定化为 **T+1 按面值赎回**，并配套 **流动性缓冲** 子规则，要求最低阈值下具备当日现金可得性。该框架刻意区别于欧盟 MiCA 的单护照模式，也不同于日本 EPI 三类型模式。与单独观察的美联储或 OCC 路径相比，财政部的角色是**政策协调与准备金资产规格设定**，并非直接监管；任何具体发行人的**主管监管者**仍是其主要联邦或州监管机构。

## Wiki 路线

本条目位于 [[fintech/INDEX|fintech index]] 下，是 [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]] 的**财政部侧配套条目**。关于监管端机制，请结合 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] 与 [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]；关于合规堆栈层，请结合 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 与 [[fintech/genius-act-501-actual-implementation|§501 implementation]]。跨辖区比较请参见 [[fintech/mica-overview|EU MiCA]]、[[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]] 与 [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]]。

## 为什么要有这篇条目

财政部在 2025 稳定币框架中的角色，与 **SEC reset**（[[fintech/regulatory-reset-2025-usa-crypto-policy|2025 reset]]）以及 **OCC 监管路径**（[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|trust-bank charter]]、[[fintech/occ-bank-charter-crypto-2025|2025 OCC charter]]）在结构上不同。财政部设定的是**准备金、赎回与挤兑风险**的政策参数，而不是直接给发行人发牌或做持续监管。真正协商这些参数的机构间平台，是 **总统工作组**。本条目关注的是：**财政部实际发布了什么**、这些发布如何影响 GENIUS §4(d) 的准备金资产清单、以及 OCC、美联储与州监管者之间的**联邦-州协调机制**如何落地。

## 总统数字资产市场工作组

总统金融市场工作组（PWG）最早由 1988 年行政命令设立，背景是应对 1987 年 10 月股灾后的市场担忧。其数字资产业务前身包括 2021 年稳定币报告与 2022 年机构间框架。**EO 14178**（2025-01-23）将该机制重组为 **总统数字资产市场工作组（PWG-DAM）**，明确了更具体的成员构成与 180 天交付时限。

### 组成与主席

| 角色 | 担任者 |
|---|---|
| 主席 | 白宫 AI 与加密事务主管（David Sacks） |
| 财政部 | 财长 |
| SEC | 主席（Paul Atkins） |
| CFTC | 主席 |
| OCC | 货币监理官 |
| 美联储 | 联储理事会主席 |
| FDIC | 主席 |
| 商务部 | 商务部长 |
| FinCEN | 主任 |
| OFAC | 主任（经财政部体系） |
| 司法部长 | 司法部代表 |

这一构成**明显宽于**传统 PWG（主要围绕财政部、美联储、SEC、CFTC），反映出稳定币监管需要把制裁、AML/CFT、银行监管、证券与商品监管同时纳入协调。

### 首轮建议（2025-Q3 交付）

PWG-DAM 的首个正式输出覆盖六个方面：

1. **发行人资格框架**：联邦与州双轨，并设联邦底线。
2. **准备金构成**：限于现金、受保存款机构活期存款、≤93 天美国国库券、以及以国债为抵押的逆回购。
3. **赎回保证**：T+1 按面值赎回，并配套流动性缓冲。
4. **挤兑风险缓释**：每日准备金披露、月度鉴证、流动性压力测试。
5. **机构间协调协议**：OCC、美联储、FDIC 与州监管者之间的信息共享。
6. **跨境框架**：对欧盟 MiCA、英国 FCA、日本 FSA、香港 HKMA、新加坡 MAS 等优先辖区建立 MRA 式互认路径。

其中，准备金构成建议**直接进入 GENIUS §4(d)** 的法定文本；赎回保证建议进入 GENIUS §4(e)；挤兑风险缓释则通过 OCC、美联储与 FDIC 根据 GENIUS §6 制定的实施规则加以编入。

## 联邦-州双轨架构

GENIUS Act 采用的是**双轨结构**，而非欧盟 MiCA 的单护照模式：

| 轨道 | 监管者 | 范围 | 流通上限 | 资本底线 |
|---|---|---|---|---|
| 联邦（OCC） | OCC | 全国性支付稳定币发行人牌照 | 无上限 | 约 ~$50M 一级资本底线（由 OCC 裁量） |
| 联邦（美联储） | 美联储理事会 | 银行控股公司子公司发行人 | 与 BHC 结构绑定 | 按 BHC 框架 |
| 州级 | 州主要监管者 + 联邦二次审查 | 州合格支付稳定币发行人 | 未偿流通额 $10 billion | 由州监管者设定，但受联邦底线约束 |

**联邦底线**包括：

- §4(d) 准备金构成清单；
- §4(e) T+1 按面值赎回；
- §501 denylist mandate；
- §6 监管底线（资本、流动性、治理）；
- §7 鉴证与透明度要求。

州监管者**可以**增加消费者保护、资本缓冲或运营要求，但**不得**低于联邦底线。当州级发行人的未偿流通额超过 **$10 billion** 上限时，必须转为联邦牌照，或限制发行规模。

这一结构受到美国自 1860 年代以来**双重银行体系**的影响，在操作上也类似 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] 所体现的州/联邦信托银行分野。选择双轨而非单护照，反映了：

- 美国既有双重银行制度的惯性；
- NYDFS、California DFPI、Texas Department of Banking 等州监管者的政治分量；
- 希望保留**州级创新实验**，如 Wyoming SPDI、Nebraska 数字资产存托机构、Utah 工业银行。

对应的州级合规地图，可参见 [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer system]]。

## 准备金构成·国库券要求与理由

§4(d) 的准备金资产清单刻意保持狭窄：

| 允许的准备金资产 | 理由 |
|---|---|
| 美元现金 | 零信用风险，按面值兑付最直接 |
| 受保存款机构活期存款 | 在保险限额内受 FDIC 支持；较高金额也便于破产隔离处理 |
| ≤93 天美国国库券 | 主权信用 + 短久期 = 压力情境下价格风险最低 |
| 以国债为抵押的逆回购 | 有抵押、日度流动性，货币市场基金已有类似用途 |

**被排除**的资产包括：

- **更长期限的美国国债**（>93 天）：避免 SVB 崩溃与 2023 年 3 月 USDC 脱锚中暴露出的**久期损失**问题。
- **公司票据**（商业票据、公司债）：避免 Tether 在 2023 年之前准备金构成中体现的**信用风险**带。
- **加密抵押品**（BTC、ETH、其他稳定币）：避免市场承压时出现的**错误方向风险**。
- **货币市场基金份额**：被正式排除；像 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 这类代币化 MMF 份额目前**不属于**允许准备金，尽管框架为未来纳入保留了空间。

**93 天到期上限** 的校准逻辑是：

1. 对齐 **SEC Rule 2a-7** 下政府货币市场基金可接受资产的加权平均久期逻辑。
2. 确保准备金资产能够在 **T+1 赎回窗口** 内以较小价格冲击完成变现。
3. 对美联储加息冲击保留安全垫：93 天票据若遭遇 100bp 利率移动，按市值损失约为 ~0.25%，可在 90 天内自行回补。

关于更广义的准备金资产飞轮，请参见 [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] 与 [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]。

### 允许准备金资产比较·GENIUS vs MiCA vs Japan EPI

| 制度 | 现金 | 活期存款 | ≤93 天美国国债 | 更长期美国国债 | MMF 份额 | 公司票据 | 加密资产 |
|---|---|---|---|---|---|---|---|
| US GENIUS | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| EU MiCA (EMT) | ✓ | ✓（非系统性 ≤60%，重要机构 ≤30%） | ✓ | 有限 | 有限 | ✗ | ✗ |
| Japan EPI（信托型） | ✓ | ✓ | ✓ | 有限 | ✗ | ✗ | ✗ |
| Japan EPI（银行型） | 依银行审慎规则 | | | | | | |
| HK Stablecoin Ord. | ✓ | ✓ | ✓ | 有限 | ✗ | ✗ | ✗ |
| MAS SCS | ✓ | ✓ | ✓ | 有限 | ✗ | ✗ | ✗ |

五极之间的**趋同**非常明显：都允许现金、活期存款和短期国债；都排除加密抵押品与公司票据；都限制更长期久期资产。真正的**差异**，在于 MiCA 的存款集中度约束，以及日本的银行审慎叠加层。完整对照见 [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]。

## 赎回保证·T+1 按面值

GENIUS §4(e) 要求任何向发行人提出赎回的持有人，都应在 **T+1 内按面值赎回**。财政部框架将其具体化为：

| 要求 | 细节 |
|---|---|
| **按面值赎回** | 无论二级市场价格如何，发行人都须按 1:1 面值兑付 |
| **T+1 结算** | 赎回请求后的下一个营业日结束前，资金必须到达持有人账户 |
| **最低门槛** | 发行人可设合理最低赎回规模（典型：批发层 $100,000；零售层 $1） |
| **KYC 门槛** | 赎回可附带满足 KYC 要求的条件 |
| **流动性缓冲** | 发行人须持有可立即转为现金的缓冲，通常为流通量的 5-10% |

其中最关键的技术子规则，是**流动性缓冲要求**。它针对的是 **2023 年 3 月 USDC 事件**：当时 Circle 对 Silicon Valley Bank 存款的 $3.3B 敞口在周末被冻结，导致 USDC 在周一联邦存款保障公告前出现显著脱锚。按新框架，若发行人对单一未保险存款机构有类似集中度，将面临监管干预。

### 挤兑风险缓释

财政部框架在挤兑风险上，把稳定币视为一种**准货币市场基金**，并套用了多项 MMF 式约束：

1. **分散化要求**：准备金资产至少分散在三个交易对手或发行人之间，避免单点故障。
2. **每日准备金披露**：发行人每日发布准备金构成快照。
3. **月度鉴证**：注册会计师事务所按月末对准备金构成与隔离状态出具鉴证。
4. **流动性压力测试**：按季度测试，例如单日 20% 赎回、单周 50% 赎回、前三大存托方之一失效。
5. **恢复与处置计划**：对规模高于阈值（约 ~$10B 未偿量）的发行人，要求提交类似 living will 的有序退出计划。
6. **最低流动性缓冲**：面向零售的发行人，法定设定 5% 的同日流动性底线。

这些规定明确吸收了 **SVB / USDC 2023-03** 事件以及 2008 年后、2020 年后的**货币市场基金改革**经验。其概念谱系与 SEC 在 2010、2014 年对 Rule 2a-7 的改革一脉相承。

## 财政部 vs 美联储 vs OCC·谁负责什么

一个常见混淆点是：究竟是**财政部**、**美联储**还是 **OCC** 给支付型稳定币发行人发牌。答案取决于轨道：

| 轨道 | 发牌机关 | 主要监管者 | 处置权限 | 准备金托管方 |
|---|---|---|---|---|
| OCC national PPSI charter | OCC | OCC | FDIC（针对受保存款负债）+ OCC | 存款机构或美联储主账户 |
| Federal Reserve BHC subsidiary | 美联储 | 美联储 | FDIC（受保）+ 美联储 | 按 BHC 框架 |
| State PPSI charter | 州监管者 + 联邦二次审查 | 州 + 次级联邦监管 | 州 + FDIC（受保） | 符合条件时为存款机构或美联储主账户 |

在这张图里，**财政部**扮演的是 **PWG-DAM 政策协调者**、**OFAC 制裁主管**、**FinCEN 所在的 AML/CFT 政策机关**，以及**财政接口**（即作为基础美国国债发行方的 Treasury cash management）。财政部**不直接发牌，也不直接持续监管** PPSI 发行人。

这种职责分离，与**货币市场基金**的结构相似：SEC 负责基金监管，财政部负责主权债发行政策，美联储负责贴现窗口与货币条件。稳定币同样呈现这种分工。

## 财政部的“稳定币 = 国库券买家”命题

财政部关注该框架，不只是出于消费者保护。**准备金构成规则实际上把稳定币行业变成了美国国库券的结构性买家**：

| 发行人类别 | 预计未偿量（2026-Q1） | 对美国国库券形成的预计需求 |
|---|---|---|
| Tether (USDT) | ~$120B | ~ $80B 国库券 |
| Circle (USDC) | ~$45B | ~ $30B 国库券 |
| Paxos (USDG, USDP, BUSD legacy) | ~$5B | ~ $4B 国库券 |
| PayPal (PYUSD) | ~$1B | ~ $0.8B 国库券 |
| Other | ~$10B | ~ $7B 国库券 |
| **Total stablecoin sector** | **~$180B** | **~$120B 国库券** |

在当前约 **~$120B** 的规模下，且若未来 5-7 年按某些路径扩大到 **$400B-$1T**，稳定币行业将成为**短端美国国债的新增结构性买方**，其量级可与单一外国央行的一部分储备配置相提并论。这正是财政部倾向于**在设定护栏的前提下发展，而非压制**受监管稳定币行业的原因之一。相关动态详见 [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]，风险对照见 [[fintech/circular-reserve-asset-flywheel-risk-cases|risk cases]]。

## 国际协调·MRA 与财政部双边渠道

财政部在 PWG-DAM 建议中加入了面向优先辖区的**双边互认协议（MRA）**轨道：

| 对手方 | 状态（Q1 2026） | 财政部联系窗口 |
|---|---|---|
| EU（Commission + EBA） | 框架 MOU 谈判中 | 财政部国际办公室 + 国务院 |
| UK FCA + HM Treasury | 双边讨论活跃 | 英美对话机制 |
| Japan FSA | 常设通道活跃（SBI/Circle JPYC 路线之后） | 财政部亚洲办公室 |
| Hong Kong HKMA | 稳定币条例后开始讨论 | 有限 |
| Singapore MAS | 讨论活跃 | 财政部亚洲办公室 |
| Canada OSFI | 早期阶段 | 有限 |
| Switzerland FINMA | 围绕银行保密框架已有渠道 | 活跃 |

MRA 是联邦-州双轨在国际层面的**对应物**：并非要求外国发行人一律先拿美国 PPSI 牌照，而是在满足 §501 等效合规的前提下，承认其他辖区的可比框架。早于本轮政策工作的三圈 MRA 框架，可参见 [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]] 与 [[fintech/three-circles-mra-2030-economic-scale|three circles MRA 2030 scale]]。

## 实施时间线

| 日期 | 动作 |
|---|---|
| 2025-01-23 | EO 14178 重组 PWG-DAM，并设定 180 天交付期限 |
| 2025-04 | PWG-DAM 工作组结构开始运作 |
| 2025-07-18 | GENIUS Act 签署成法 |
| 2025-Q3 | PWG-DAM 首轮建议发布 |
| 2025-Q4 | OCC 就 PPSI 牌照发布拟议规则通知 |
| 2026-Q1 | 美联储、FDIC、OCC 就准备金构成与监管发布联合最终规则 |
| 2026-Q2 | FinCEN 报送标准定稿 |
| 2026-Q2 预计 | 首批联邦 PPSI 牌照依据最终规则发出 |
| 2026-H2 预计 | 与欧盟的首个双边 MRA 完成 |

周边政策环境参见 [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]。

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 mandate]]
- [[fintech/genius-act-501-actual-implementation|GENIUS §501 actual implementation]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC jurisdiction]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|EU MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## 来源

- Treasury digital assets policy: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- Treasury press releases: https://home.treasury.gov/news/press-releases
- President's Working Group on Financial Markets: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/presidents-working-group-on-financial-markets
- FinCEN news: https://www.fincen.gov/news-room
- Federal Reserve press releases: https://www.federalreserve.gov/newsevents/pressreleases.htm
- OCC news and issuances: https://occ.treas.gov/news-issuances/
- White House EO 14178: https://www.whitehouse.gov/presidential-actions/
- GENIUS Act statutory text (Public Law as enacted July 2025)
- Federal Register filings on implementing rules: https://www.federalregister.gov/
- PWG 2021 Report on Stablecoins (predecessor document): https://home.treasury.gov/system/files/136/StableCoinReport_Nov1_508.pdf

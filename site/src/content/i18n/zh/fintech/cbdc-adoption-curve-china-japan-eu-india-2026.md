---
source: fintech/cbdc-adoption-curve-china-japan-eu-india-2026
source_hash: f03932be10aa2beb
lang: zh
status: machine
fidelity: ok
title: "CBDC 普及曲线 2026  — 中国 e-CNY vs 印度 eRupee vs 欧盟数字欧元 vs 日本 DCJPY"
translated_at: 2026-05-31T06:16:15.724Z
---

# CBDC 普及曲线 2026  — 中国 e-CNY vs 印度 eRupee vs 欧盟数字欧元 vs 日本 DCJPY

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the cross-jurisdictional adoption snapshot for retail / wholesale CBDC programmes in mid-2026. It complements the architecture-first lens of [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] (which classifies designs by tiering) by sitting one layer above and asking which of the four major regimes have actually accumulated **users, transaction volume, and institutional infrastructure** versus those still in **legislative or preparation phase**. For the wholesale-CBDC cross-border lens see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 多 CBDC 跨境结算桥]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]]. Per-country deep dives: [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]], [[fintech/erupee-india-pilot-status|eRupee pilot status]], [[fintech/e-euro-retail-rollout|digital euro retail rollout]], [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]].

> [!info] TL;DR
> 截至 2026  年中，四个参考管辖区处于**普及曲线上截然不同的四个位置**。中国 e-CNY 报告累计交易量超过**人民币 1  万亿**，在 30+ 个城市全面推出零售服务。印度 eRupee 零售试点活跃用户超过**数百万**，批发 CBDC 银行间结算已上线。欧盟数字欧元仍处于**准备阶段**——尚无零售发行，持有限额尚未确定，等待共同立法机构批准。日本刻意选择了**非 CBDC** 路径：日本银行继续推进零售 CBDC 概念验证，但实际部署的是由 DeCurret DCP 发行的私人代币化存款 DCJPY。结构性启示：**普及速度并非取决于技术成熟度，而是取决于政治授权加上分发渠道所有权**。

## 为何四国快照至关重要

大多数 CBDC 评论将世界简化为"中国领先，欧盟落后"——但实际 2026  图景是**四种形态的分布**，而非单一曲线。中国在完成立法基础的基础上推行以国家为主导的大规模零售推广。印度推行零售 + 批发双轨并行，与其现有 UPI 主导地位挂钩（[[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]）。欧盟刻意放缓，采用反脱媒设计，将中介推广作为明确政策目标。日本实际上将零售 CBDC 委托给民营银行的代币化存款轨道（[[fintech/jp-stablecoin-dcjpy|DCJPY]]）。仅用"上线 / 未上线"这一单一维度比较，会丢失最重要的变量——**谁拥有分发渠道**。

关于地缘政治层面，参见 [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]] 和 [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]；CBDC 普及与私人稳定币推广相互交织，因为两者争夺同一零售和 B2B 支付界面。跨极架构比较见 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]] 和 [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]。

## 矩阵 A · 项目名称、监管机构、法律地位

| 极 | 项目 | 主导机构 | 法律依据 | 上线状态（2026-05） |
|---|---|---|---|---|
| 🇨🇳 中国 | e-CNY（数字人民币 / DC/EP） | 中国人民银行（PBoC） | PBoC 法修正案 2020 + 行政指导 | **在 30+ 个城市零售上线**，与四大国有商业银行 + 邮储银行 + 交通银行全面整合；批发通过 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] |
| 🇮🇳 印度 | eRupee（数字卢比，e₹） | 印度储备银行（RBI） | RBI 法 1934  修正案（通过 2022  财政法案） | **零售试点上线**，覆盖 20+ 个城市；**批发试点上线**（银行间国债结算，自 2022-11  起） |
| 🇪🇺 欧盟 | 数字欧元 | 欧洲中央银行（ECB） | ECB 条例草案待定（欧盟理事会 + 议会） | **准备阶段**自 2023-11,  延伸至 2026-Q4+；尚无零售发行 |
| 🇯🇵 日本 | （零售 CBDC 概念验证 + DCJPY 代币化存款） | 日本银行（BoJ）负责 CBDC 概念验证；FSA 负责 DCJPY | 尚无 CBDC 专项立法；DCJPY 在现行银行法 + 电子支付等代理业框架下运营 | **概念验证第 2 阶段**持续推进（无零售 CBDC 上线）；**DCJPY** 自 2024-08  起用于 B2B 商业用途 |

最早的行动者是中国（研究始于 2014, ，零售试点始于 2020）。进展最慢的是欧盟（立法仍处于三方谈判中）。印度的批发试点是全球**首个上线的国债结算 CBDC**。日本是唯一一个 G7  经济体，选择**不**发行主权零售 CBDC，而是让 DeCurret DCP 通过存款代币路径承担代币化货币功能——参见 [[fintech/jp-stablecoin-dcjpy|DCJPY]] 和 [[fintech/jp-stablecoin-progmat|Progmat]]。

## 矩阵 B · 普及指标（最新公开数据）

| 极 | 累计交易量 | 钱包 / 用户 | 城市或地理范围 | 跨境上线情况 |
|---|---|---|---|---|
| 🇨🇳 e-CNY | **人民币 1  万亿+** 累计交易额（PBoC 官员在 2024-2025 新闻发布会上引用） | 180M+ 个人钱包注册（PBoC 工作论文估计）；活跃钱包数量实质性偏低 | 30+ 个城市，包括北京、上海、深圳、苏州、成都、雄安，以及 6+ 个省份的全省推广 | 是——通过 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 与香港金管局 / 泰国央行 / 阿联酋中央银行 / 沙特阿拉伯货币局（以及巴西央行 DREX 整合测试，2026 H2） |
| 🇮🇳 eRupee | **人民币等值约 INR 10B+** 零售累计（RBI 年报 2024-2025）；批发银行间日常约在国债结算腿上运行 | **5M+ 零售用户**截至 2024  报告；17  家银行参与零售试点 | 20+ 个城市，覆盖所有 4  零售试点阶段；批发覆盖全国银行 | 批发是（国债结算）；跨境 CBDC 与阿联酋 / 新加坡有 MoU 讨论——尚无实时跨境 CBDC 结算 |
| 🇪🇺 数字欧元 | **0**（仅准备阶段） | 0  零售钱包；ECB 主导的 PSP 工作组 + 已选定技术供应商 | 无——无零售或商户试点 | 无 |
| 🇯🇵（DCJPY） | DCJPY：自 2024-08  起少量商业用途（环境信用结算为首次用途）；CBDC 概念验证：仅为模拟 | DCJPY：仅限机构（无零售）；CBDC 概念验证：封闭测试环境 | DCJPY：东京 + 部分都道府县（发起银行 GMO Aozora / 邮储 / SBI 新生等）；CBDC：仅限概念验证 | DCJPY 通过 BIS / FSA 技术渠道进行跨境测试；日元无实时跨境零售 CBDC |

**收敛线**：无。四个项目处于真正不同的普及阶段。**分化线**：零售发行上线差距是最重要的单一事实——只有中国和印度有可见的零售吞吐量，即便中国的活跃钱包数量也仍存在持续的公开争议（参见反驳意见）。

## 矩阵 C · 架构选择

| 极 | 分层模式 | 发行方 | 钱包提供方 | 可编程性 |
|---|---|---|---|---|
| 🇨🇳 e-CNY | **双层**（PBoC → 10  指定运营商 → 用户）；参见 [[fintech/cbdc-multi-tier-architecture-three-paradigms|three paradigms]] | PBoC（中央银行负债） | 10  家运营商：6  家国有商业银行 + 4  家电信 / 互联网巨头（腾讯 / 蚂蚁等，通过独立网关接入） | 有限；可控匿名模式；自 2023  起开展智能合约试点 |
| 🇮🇳 eRupee | **双层**（RBI → 参与银行 → 用户） | RBI（中央银行负债） | 17  家参与银行 + 4  个通过 UPI 互操作桥接的支付应用 | 自 2023  起开展可编程货币试点（农业补贴、政府现金转移） |
| 🇪🇺 数字欧元 | **中介双层**（ECB → 受监管 PSP → 用户）；明确设计为反脱媒 | ECB（中央银行负债） | 商业银行及其他受监管 PSP；ECB 不直接分发 | 条件 / 触发支付讨论中；尚未确定 |
| 🇯🇵（DCJPY） | **代币化商业银行存款**（非 CBDC）；发行方为参与商业银行 | 商业银行（DCJPY 是链上银行存款，非中国人民银行负债） | 发行该存款的同一商业银行 | 是——基于 Amic Sign 平台，明确支持智能合约 / DvP |

四个管辖区实际上都**保留了商业银行层**——没有一个选择"直接 CBDC"全民账户模式。日本走得最远，选择**完全不发行**主权零售 CBDC，转而开放代币化存款。

## 矩阵 D · 持有限额与反脱媒防御

| 极 | 零售持有上限 | 批发上限 | 是否付息 | 反脱媒防御 |
|---|---|---|---|---|
| 🇨🇳 e-CNY | 基于层级的钱包限额（低层级每笔 ¥10K，余额 ¥50K；KYC 层级更高） | 无正式上限 | 否 | 层级限额 + 国有运营商分发保留银行存款基础 |
| 🇮🇳 eRupee | 无已公布的硬上限；通过应用配置设置每日交易限额 | 无正式上限 | 否 | 可编程性绑定政府现金转移用途（福利），而非储蓄替代 |
| 🇪🇺 数字欧元 | 拟议每人 €3,000-4,000 （谈判中，尚未确定）；超额时回流至银行账户（反向瀑布机制） | 不适用（仅零售设计）；批发通过 TARGET / 欧元体系单独处理 | **不付息**（ECB 明确设计选择） | 持有上限 + 反向瀑布 + 不付息是三项明确的反脱媒措施；参见 [[fintech/e-euro-retail-rollout|e-euro retail rollout]] |
| 🇯🇵（DCJPY） | 不适用（DCJPY 是银行资产负债表上的存款；适用现行每家银行每位存款人 ¥10M 存款保险） | 不适用 | 跟踪发行银行的存款利率 | 发行银行资产负债表本身就是构造上的反脱媒防御 |

欧盟是**唯一将明确限额作为设计参数写入规定**的制度，因为它是唯一公开担忧商业银行存款挤兑的制度。中国依靠运营商层级限额，印度依靠福利渠道定位，日本通过不发行 CBDC 完全回避这一问题。

## 矩阵 E · 基础设施就绪度与分发渠道

| 极 | 钱包渗透率 | 商户接受度 | 银行轨道依赖 | 跨境基础设施 |
|---|---|---|---|---|
| 🇨🇳 e-CNY | 试点城市 iOS / Android 均可下载；整合进现有支付宝 / 微信支付子流程 | 大型零售商 + 政府现金转移 + 交通；试点城市以外参差不齐 | 高——6  家国有商业银行运营用户界面 | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 上线；香港金管局桥梁上线；"一带一路"项目试点整合持续推进 |
| 🇮🇳 eRupee | 来自 17  家参与银行的应用；自 2023  起与 UPI 二维码互操作 | 有限（20+ 个城市的试点商户群）；RBI 明确目标是通过 UPI 轨道扩大范围 | 高——RBI 依赖与分发 UPI 相同的银行 | 仅限跨境 MoU 讨论 |
| 🇪🇺 数字欧元 | 无（无应用） | 无 | 尚未定义；ECB 咨询将"受监管中介机构"描述为渠道 | 无——数字欧元架构明确将跨境推迟至零售上线后的双边安排 |
| 🇯🇵（DCJPY） | 仅限机构用户（无零售钱包） | 仅限机构——环境信用、ST DvP 结算、B2B 发票流 | 银行直接发行和托管 | 通过 BIS / Money 20/20  Asia 小组进行国际外联，但无实时跨境 DCJPY |

**分发渠道所有权是约束性因素**。在中国，PBoC 有直接权力指令 10  家运营商推行。在印度，RBI 借助了 UPI 的分发。在欧盟，法律框架要求使用现有 PSP，但这些 PSP 的商业激励较弱。在日本，因为没有主权 CBDC，不存在主权 CBDC 分发问题。

## 矩阵 F · 政治意志与推进节奏

| 极 | 政治授权 | 推进驱动因素 | 推进阻力 |
|---|---|---|---|
| 🇨🇳 e-CNY | 强——国务院与 PBoC | 国家指令 + 数字人民币与更广泛"一带一路"框架的整合 | 大规模零售普及与微信支付 / 支付宝竞争，后者已覆盖约 95% 的数字支付 |
| 🇮🇳 eRupee | 中——RBI 领先于财政部；定位为 UPI 的补充 | RBI 机构承诺 + 可编程货币福利用途 | UPI 的主导地位意味着消费者在钱包层面看不到 eRupee 的边际价值 |
| 🇪🇺 数字欧元 | 中低——ECB 推动；理事会和议会推进缓慢；商业银行游说严格持有上限 | ECB 执行委员会公开承诺 | 共同立法程序；银行游说；缺乏商户或消费者拉力 |
| 🇯🇵（DCJPY） | 低（针对 CBDC）；高（针对代币化存款私人轨道） | 跨行业联盟拉力（Digital Currency Forum 100+ 参与者） | BoJ 对零售 CBDC 明确审慎；倾向于私营部门主导的代币化货币 |

日本在四极中政治信号最为独特：一个**明确委托**私营部门代币化存款承担零售数字货币轨道的 G7  中央银行，是对"每个主要经济体都在争夺零售 CBDC"这一假设的最直接反例。参见 [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]。

## 普及曲线图（2026-05）

```
活跃零售用量    │
               │   e-CNY                                            ★
               │   ────────                                         │
  对数轴        │              eRupee
               │              ────────                              │
               │                                                    │
               │                                                   ▲│
               │                                          DCJPY（仅限 B2B——无零售）
               │                                                    │
               │                                                    │
               │                                                    │
               │                                       数字欧元（准备阶段——发行前）
               │   ─────────────────────────────────────────────────│
               └────────────────────────────────────────────────────►
                    研究 → 概念验证 → 试点 → 上线（有限）→ 上线（广泛）
```

（示意图；数字欧元实际上处于曲线的**上线阶段之外**，而 DCJPY 处于独立的非 CBDC 曲线上。）

## 起源与演变

```
2014         PBoC e-CNY 研究启动（首个主要经济体 CBDC 研究项目）
2017         ECB / BIS / IMF 论文确立"双层 vs 直接"CBDC 二分法
2020-04      PBoC e-CNY 试点在 4  个城市启动（深圳 / 苏州 / 雄安 / 成都）
2020-10      BoJ CBDC 联络委员会启动概念验证第 1
 阶段 2022-04      PBoC e-CNY 试点扩大至 23  个城市 + 多省
2022-11      RBI 批发 eRupee 试点启动（银行间国债结算）
2022-12      RBI 零售 eRupee 试点在 4  个城市启动
2023-10      ECB 数字欧元调查阶段结束；准备阶段启动 2023-11
 2024-03      香港金管局 Project Ensemble 启动（代币化存款沙盒）
2024-04      BIS Project Agorá 启动（7  家 G10  中央银行 + 40+ 家商业银行）
2024-08      DCJPY 首次商业用途（环境信用结算，IIJ）
2024-10      BIS 退出 mBridge 治理；技术移交给 PBoC + HKMA + BoT + CBUAE
2025-06      ECB 数字欧元条例草案在欧盟理事会 + 议会三方谈判中
2025-09      mBridge 进入商业运营阶段（从 MVP 升级）
2026-Q1      印度 RBI 批发 CBDC ↔ 零售 CBDC 互操作性测试
2026-Q2      mBridge ↔ 巴西 DREX 整合测试启动
2026-04      DCJPY 代币化存款银行间 RTGS 纳入 FSA 金融科技沙盒
2026-05-21  香港金管局发出首批稳定币许可证（汇丰 + Anchorpoint）——非 CBDC，但形成竞争背景
```

**规律**：四个管辖区在 2023,  之前已完成主要架构承诺，2024-2026  窗口期用于**分发渠道执行**。预先明确分发渠道的国家（中国通过 10  家运营商，印度通过 UPI 银行）如期推进；将渠道留给立法或市场谈判的国家（欧盟、日本）进展较慢，或选择根本不发行。

## 与私人稳定币及代币化存款竞争的对比

CBDC 普及并非孤立发生。相同用例也被以下各方争夺：

- **私人美元挂钩稳定币**：USDC / USDT / PYUSD / RLUSD / USDB / USD1 ——见 [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]] 和 [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- **代币化商业银行存款**：摩根大通 JPMD、花旗 Token Services、[[fintech/jp-stablecoin-dcjpy|DCJPY]]、HKMA Project Ensemble 参与方
- **日元挂钩受监管稳定币**：JPYC、MUFG Progmat、SBI VC Trade USDC 分发
- **HKMA 持牌稳定币**：汇丰（HKD/USD）、渣打 Anchorpoint（HKD/USD）——首批 2026-05-21；参见 [[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing overview]]
- **来自 BIS Project Agorá 的主权货币代币化存款**（7  家 G10  中央银行 + 40+ 家银行）

CBDC 普及曲线**不能孤立解读**——必须与同一管辖区是否存在竞争性私人轨道交叉解读。中国刻意压制私人替代方案（无 Tether，无 USDC），因此 e-CNY 的跑道没有竞争。欧盟维持严格的 MiCA EMT 制度，将流量导入 ECB 监管的中介机构，因此数字欧元将与欧盟 MiCA 持牌 EMT 共享轨道。日本刻意创建了 EPI 三类框架，让私人稳定币（JPYC / Progmat / DCJPY）占据代币化货币界面——BoJ CBDC 概念验证反映了这一现实。印度是唯一一个中央银行**同时**推进 CBDC 和试图保持 UPI 主导地位的案例。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]

## Sources

- People's Bank of China — Working papers and digital-yuan public communications: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- PBoC working paper on the progress of e-CNY R&D in China (2021 / updated 2023-2024)
- Reserve Bank of India — Concept Note on Central Bank Digital Currency (October 2022): https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
- RBI Press Releases on retail and wholesale CBDC pilots (2022-11, 2022-12, 2024 Annual Report): https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
- European Central Bank — Digital euro project page and Preparation Phase progress reports: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB Governing Council statements on digital euro Preparation Phase (2023-11 launch; 2024 / 2025 progress updates)
- European Commission — Proposal for a Regulation establishing the digital euro (June 2023)
- Bank of Japan — Approach to Central Bank Digital Currency and PoC Phase 1/2 reports: https://www.boj.or.jp/en/paym/digital/index.htm
- DeCurret DCP press releases (2024-08 commercial launch; 2026-04-03 FinTech Sandbox adoption; 2026-04-24 ST DvP test): https://www.decurret-dcp.com/pressrelease/
- BIS Innovation Hub — CBDC topic landing page and mBridge / Agorá public materials: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 "The next-generation monetary system — a blueprint" (2024 series)
- HKMA — Project Ensemble + Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/

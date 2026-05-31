---
source: fintech/state-charter-crypto-arbitrage-2025
source_hash: ece75c02f6d77177
lang: zh
status: machine
fidelity: ok
title: "州特许加密监管套利 · 2025 美国联邦与州级竞赛"
translated_at: 2026-05-31T07:28:06.174Z
---
# 州特许加密监管套利 · 2025 美国联邦与州级竞赛

## TL;DR

2025-2026 期间的美国加密公司面临 **四路监管套利**：联邦层面的 **OCC trust bank charter** 路径（由 Bridge/Stripe 率先验证）、州特许的 **Wyoming SPDI**（Custodia、Kraken Financial）、**Nevada digital asset bank charter**（于 2023 启动，但采用较慢），以及 **New York BitLicense**（在 2025-2026 资金与机构外流加速）。竞争逻辑已不再是“全国化还是留在州内”，而是“选择哪个州的监管者在 MTL 豁免与 Fed master account 抱负上走得最远”。怀俄明赢得了牌照速度之战；OCC 仍是获得完整 FedWire 接入的黄金标准；纽约则向德州、怀俄明与佛州流失。对 2026  来说，关键故事是联邦层面的 **OCC vs Fed Board** 对峙（Custodia 案、Fed master account 拒绝）究竟会压垮州特许优势，还是延长它。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter アービトラージ経路]] for the federal-arm-comparison, [[fintech/national-license-private-stablecoin-with-dpi-export|国家ライセンス型 SC + DPI]] for the cross-jurisdictional pattern, [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC 暗号資産管轄]] for the parallel agency turf war, and [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the federal stablecoin statute backdrop. The licensing matrix view sits in [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing 多層体系]].

## 四条套利路径——比较

| Path | Authority | MTL exemption | Fed Master Account | Stablecoin issuance | Custody | Approx. timeline | Notable holders |
|---|---|---|---|---|---|---|---|
| **OCC trust bank（联邦）** | OCC | 是（Supremacy Clause） | 是（Custodia 被拒，诉讼中） | 是（有条件批准） | 是 | 12-24 个月 | Bridge（Stripe）、Anchorage Digital、Protego、Paxos National Trust |
| **Wyoming SPDI** | 怀俄明银行监管局 | 否（各州认可不一） | 理论上可以，**实际上被拒** | 是 | 是 | 6-18 个月 | Custodia（Fed 账户被拒）、Kraken Financial、Two Ocean Trust、Wyoming Stable Token Commission contractors |
| **Nevada digital asset bank charter** | 内华达金融机构局 | 部分（限 NV 居民业务） | 理论上可行，未验证 | 是 | 是 | 9-18 个月 | 公开批准极少；框架仍在成熟 |
| **NYDFS BitLicense + Limited Purpose Trust** | NYDFS | 仅纽约州 | 否 | 是（Paxos、Gemini、Coinbase Custody） | 是 | 24-36+个月 | Paxos、Gemini Trust、Coinbase Custody、Circle（最初） |
| **TX money services / DOB guidance** | 德州银行部 | 德州 + 互惠州 | 否 | 通过发行人路径（非 charter） | 是（州信托） | 6-12 个月 | 多家——德州是“非 NY、非 CA 的务实州” |

联邦路径见 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter アービトラージ経路]]；本条目的任务是描绘州级路径。

## Wyoming SPDI —— 速度领先者

**Special Purpose Depository Institution（SPDI）** 框架由 Wyoming HB 74 （2019）制定，并于 2020 落地。它是一种怀俄明州特许银行，具有以下特征：

1. **不能以传统方式放贷**（限制以存款支持贷款）
2. **必须对存款持有 100% 准备金**
3. **专为数字资产托管与外汇级受托服务设计**
4. **依据 Wyoming Stable Token Act（2022）具有法定稳定币发行权**

### Custodia Bank —— 测试案例

Custodia（由前 Morgan Stanley 的 Caitlin Long 创立）于 2020 获得 SPDI 身份。其逻辑是：Wyoming SPDI + Federal Reserve master account = 一家“原生数字银行 + Fedwire 接入”，从而压低 OCC charter 的成本和时间。

Fed 于 2023 拒绝 Custodia 的 master account 申请。Custodia 随后起诉 Fed Board（Custodia Bank v. Board of Governors）。地方法院在 2024  裁定 Fed 拥有自由裁量权可以拒绝。上诉将持续至 2025-2026。政治层面的解读是：**如果没有国会明确授权，Fed 不会单方面给予州特许 SPDI Fed 接入。**

对 2026 的法律含义是：**没有 Fed master account 的 Wyoming SPDI，大致相当于高质量的州级信托公司**。它是强有力的托管人与稳定币发行主体，但不能在 Fedwire 上自行结算美元，只能通过往来银行（通常是 Cross River、Customers Bancorp 或类似对 fintech 友好的对手方）进行路由。

### Kraken Financial —— 运营案例

Kraken Financial 于 2020  获得 Wyoming SPDI 批准，并进入有限运营。其规模历来小于 Kraken 交易所，但提供：

- 电汇转账（通过 correspondent rails）
- 数字资产托管
- 面向 Kraken 交易所用户的有限存取款服务

Kraken Financial 并未像 Custodia 那样积极推进 Fed master account 诉讼，而是把往来银行替代路径作为事实上的运营方案。

### Two Ocean Trust 及其他

除 Custodia 与 Kraken Financial 外，Wyoming SPDI 生态还包括 Two Ocean Trust 和若干隐身状态的 SPDIs。截至 2026, ，Wyoming Banking Division 名录中列有约 10  家已获牌或在流程中的 SPDI。该州已成为数字原生银行牌照的**默认快速通道司法辖区**，直接与 OCC 的 12-24  个月周期竞争。

## Nevada —— 后发的数字资产银行 charter

内华达州通过了 **AB 466 （2023）**，设立了明确旨在与 Wyoming SPDI 竞争的数字资产银行 charter 框架。其主要差异化设计尝试包括：

1. **更高的初始资本要求**（$5M+，高于怀俄明的分层方式）→ 旨在传达“比怀俄明更机构化”
2. **在放贷上更灵活**（相对 SPDI 的严格 100% 准备金）
3. **与内华达博彩监管更好对齐**——意在吸引 iGaming + crypto 交叉机构

**2025-2026 的采用现实**：公开记录显示截至 2026 年中，批准牌照少于 5  张。内华达**并未**取代怀俄明成为首选州级特许地。原因包括：

- 怀俄明的先发网络效应（Caitlin Long 的传教作用、律师 / 顾问生态）
- 与博彩监管共用的框架增加了复杂性，而非简化
- 对**所有**州特许数字银行而言，Fed master account 接入都存在不确定性，与州别无关

内华达框架仍是一个可行的**备选方案**，适合与怀俄明存在政治关系摩擦的机构（如矿业公司或博彩相关 crypto 公司）。

## New York BitLicense 的退出压力

NYDFS 通过 BitLicense（2015）开创了**州级 crypto licensing**。近十年来，它一度最接近美国的“全国性 crypto 牌照”——Coinbase、Gemini、Paxos、Circle 都围绕其构建了合规体系。

**2025-2026  的外流**：

1. **Kraken** 在 2023  宣布退出纽约业务；并于 2024 完成停运
2. **Bittrex** 于 2022,  退出，但这早于 2025  基线
3. **Binance.US** 在 2023  执法行动后，事实上失去了 BitLicense 立足点
4. **多家稳定币发行人** 认为，在 Bridge / Anchorage 证明联邦路径可行后，“BitLicense + Limited Purpose Trust”的成本收益比差于 OCC trust bank charter（见 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]）
5. **Circle** 于 2024-2025 将主要监管锚转向 OCC 申请路径，并弱化以纽约为锚的 DSP 安排

NYDFS 虽尝试推进监管现代化（Greenlist 更新、托管框架改良），但结构性压力真实存在：**对于任何有全国 ambitions 的公司，纽约州单一牌照都不如联邦 OCC charter；对于优先考虑速度和较低固定成本的公司，也不如 Wyoming SPDI。**

2025-2026  的推论是：NYDFS BitLicense 会保留一批以纽约居民为中心的托管机构（Paxos National Trust、Gemini Trust），但不会成为增长场域。与 [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction list 通貨保護主義]] 中的国际平行模式相对照，纽约正在变成“对 crypto 具有高黏性的老牌州”，而不再是 2015-2020 时期那个不可避免的全国入口。

## Texas —— 务实监管者胜出

Texas Department of Banking 发布了 **2021  guidance**，明确允许州特许银行提供数字资产托管，并在允许业务中使用公链。2023  的后续指引进一步明确了稳定币托管与准备金操作。

Texas 的**比较优势**不是像 Wyoming SPDI 那样的定制 charter，而是 **传统州信托公司 charter + 对 crypto 友好的解释性指引**：

1. 使用现有的 Texas trust company 框架
2. 在已明确表示“不会主动阻拦”的 TX DOB 监管下运营
3. 比 NYDFS 少一些合规表演，但对传统托管机构而言又比 Wyoming SPDI 更具机构级属性
4. 结合德州稳定的能源 / 数据中心基础设施，服务比特币矿业运营商（Riot、Marathon、Core Scientific）

**2024-2025  的胜利**：多家 crypto 公司公开将总部或合规锚迁往德州。该州受益于监管可预期性、无州所得税和能源可得性。德州不提供怀俄明那种**监管创新**，但提供了机构更看重的**确定性**。

## OCC 与州监管者的地盘之争

在 2024-2025  期间，出现了结构性冲突：

1. **OCC** 通过 Interpretive Letters 1170, 1172, 1174 主张，national bank charter 持有人可以托管 crypto、持有稳定币准备金并使用独立节点验证网络。这种**联邦优先权**削弱了州监管者。
2. **州监管者**（尤其 NYDFS）公开质疑 OCC 的解释范围。NYDFS 曾在更早阶段就相关 fintech charter 问题起诉 OCC（Lacewell v. OCC，2019-2021）。
3. **Wyoming + Nevada** 选择了相反路径：与其对抗 OCC，不如建立**州特有 charter**，由于其明确回避“national bank”足迹，因此未被 OCC 抢占。
4. **Fed Board** 则位于旁侧：通过拒绝 Custodia 的 master account，Fed 表明在没有国会授权的情况下，不会允许**州特许**数字银行进入 Fedwire。这正是 **OCC 的结构性优势**：只有联邦 charter 路径拥有清晰、尽管高度政治化的 Fed 接入路径。

**2026  的转折点**：联邦 GENIUS Act 稳定币法规预计将澄清哪些 charter 路径可支持联邦层面的稳定币发行。如果 GENIUS Act §501 （见 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]）被落实为要求“全国性稳定币发行人”接受联邦级监管，那么州 SPDIs 可能被压回到非联邦发行的托管业务中——这会削弱最大型发行人的州特许优势，但保留其在利基托管 / 非稳定币业务中的作用。

## 与联邦 OCC trust bank 路径的比较

以下是 2026  crypto 公司在选择 charter 时的正面对比矩阵：

| Decision factor | OCC trust bank | Wyoming SPDI | Nevada DAB | NYDFS BitLicense | TX trust + guidance |
|---|---|---|---|---|---|
| 获牌速度 | 12-24 个月 | 6-18 个月 | 9-18 个月 | 24-36+个月 | 6-12 个月 |
| 前期资本 | $5-20M | 分层 $2-10M | $5M+ | $5M+ | $2-5M |
| MTL 豁免（跨州） | 是（联邦优先） | 部分 / 有争议 | 仅内华达 | 仅纽约 | 德州 + 互惠 |
| Fedwire / Fed master account | 是（但存在摩擦） | 至今被拒（Custodia） | 未测试 | 否 | 否 |
| 稳定币发行权 | 是 | 是 | 是 | 是（通过 DSP） | 通过发行人路由 |
| 跨政府时期的政治耐久性 | 中低（OCC 负责人变化会带来政治化） | 中（怀俄明单党稳定） | 中 | 中低（政治化） | 高（德州单党稳定） |
| 最适合 | 全国性稳定币发行人、完整银行化抱负 | 速度 + 托管 + 怀俄明友好稳定币 | 怀俄明备选 | 纽约锚定 incumbents | 务实型机构托管 |

按公司类型划分的主导策略：

- **AUM > $1B 的稳定币发行人** → OCC trust bank（Bridge 模式）
- **中型数字资产托管机构** → 先用 Wyoming SPDI 获取速度，规模上来后再申请 OCC
- **交易所 + 托管双业务** → Wyoming SPDI + 州级 MTL 叠加，或 Texas trust + 州级 MTL 叠加
- **以纽约居民为中心的机构服务** → 留在 NYDFS BitLicense + Limited Purpose Trust
- **比特币矿业 + treasury** → 选择 Texas，利用能源与监管可预期性

## 各州相对监管姿态地图（2026）

截至 2026-05 的一份非穷尽性州级 crypto 监管姿态扫描：

| State | Posture | Notable structural features |
|---|---|---|
| Wyoming | 最宽松 + 最创新 | SPDI、Stable Token Act、DAO LLC framework、Custodia、Kraken Financial |
| Texas | 务实 | 信托公司框架 + 有利 DOB guidance；矿业激励；无州所得税 |
| Nevada | 创新落后者 | AB 466 数字资产银行 charter 已存在，但采用缓慢；与博彩监管共享带来复杂性 |
| Florida | 政治上友好、结构上欠发育 | 州长支持 crypto；州框架尚未成文化；FL OFR 仍较传统 |
| Tennessee | 低调宽松 | 稳定币与区块链 task force；税务友好注册地 |
| Arizona | 政治活跃 | 比特币储备讨论；承认智能合约的立法 |
| New Hampshire | 倾向 crypto-libertarian | 州长签署法案，在某些用途上承认 crypto 可豁免 money transmission |
| Colorado | “可用 crypto 缴税”的州 | 通过 PayPal 转换接受州税的 crypto 支付；监管创新有限 |
| Illinois | 谨慎 + DFPR 审查 | 积极执法未注册发行人；居中水平 |
| California | DFPI 活跃 | Digital Financial Assets Law（自 2025 生效）建立与 BitLicense 平行的 CA 牌照 |
| New York | NYDFS 严格审查 | BitLicense + Limited Purpose Trust 体系；新进入者减少 |

加州的 **Digital Financial Assets Law（DFAL）** 是被低估的纽约平行体。它与 BitLicense 一样增加合规负担，但不同在于：它于 2023  立法，并以 2025  为生效日期，明确保留对加州居民业务的监管。更大的结构现实是：**美国人口前三大州中的两个（CA 与 NY）都建立了定制化 crypto 许可体系，从而削弱了 OCC charters 对面向零售实体的联邦优先套利价值。**

## 多重 charter 叠加——新出现的 2026 模式

2024-2026  期间，最大型 crypto 公司并不是“选一个 charter”，而是**战略性叠加多个 charter**：

| Firm | Charter stack as of 2026  |
|---|---|
| **Coinbase** | NYDFS BitLicense（Coinbase Custody Trust）+ 各州 MTL + OCC 申请路径 |
| **Circle** | NYDFS BitLicense（Circle Internet Financial）+ 州级 MTL 叠加 + OCC trust bank 申请 |
| **Anchorage Digital** | OCC national trust bank（自 2021）+ 州级托管牌照 |
| **Paxos** | NYDFS Limited Purpose Trust + OCC trust bank 申请路径 + 新加坡 MAS 牌照 |
| **Bridge / Stripe** | OCC trust bank conditional（2026）+ 州级 MTL 叠加 |
| **Kraken** | Kraken Financial WY SPDI + 各州 MTL 叠加 + 全球 VASP 注册 |

其战略逻辑是：**联邦 OCC = 稳定币发行 + 全国覆盖 + Fed master account 抱负；州级 charters = 面向消费者的运营 + 州居民合规 + 司法辖区可选性**。只有 OCC charter 的公司，很难在加州或纽约开展面向消费者的 crypto 托管，而不具备 DFAL / BitLicense；只有州级 charters 的公司，则无法发行全国规模的稳定币。

2026  的参考公司结构至少包括：
1. 一个联邦层级 charter 或 charter pipeline（OCC trust bank 或 OCC 申请）
2. 一个纽约姿态（BitLicense、Limited Purpose Trust，或明确退出）
3. 一个加州 DFAL 姿态（持牌、退出，或仅做非加州居民）
4. 一个创新州 charter（Wyoming SPDI、Nevada DAB 或等价物）
5. 覆盖约 48-50  个州的 MTL，用于剩余传输活动

## 再看 Fed master account 问题

Fed master account 接入是州与联邦分化中的**最高赌注二元结果**。如果在 2028,  之前，Fed 向任何州特许 SPDI 发放 master account，整个竞争版图都会改变：州 SPDI 将在许多使用场景中成为 OCC charter 的可替代方案。如果 Fed 继续拒绝，则州特许的上限仍将结构性更低。

当前公开姿态：

- Fed 的历史立场：master accounts 授予那些“适当接入信贷与存款保险”的存款机构；Wyoming SPDIs 不具备 FDIC 保险
- Fed 在 2023  的 Custodia 裁决：维持自由裁量拒绝；Fed 援引金融稳定与 crypto 特有顾虑
- Fed 在 2024-2025  的机构立场：无变化；Custodia 上诉仍在进行
- 政治压力：怀俄明州国会代表团（尤其 Lummis）推动立法，要求 Fed 审查 master account；尚未生效

截至 2026 的概率树：
- 60% 概率：Fed 持续拒绝州 SPDI 的 master accounts，直至 2027-2028
- 25% 概率：国会行动迫使 Fed 向特定持牌类别授予 master accounts
- 10% 概率：最高法院推翻 Custodia 裁决，迫使 Fed 制定非自由裁量规则
- 5% 概率：Fed 政府班子变化，带来自由裁量授予

每种情景都对州 / 联邦套利地图具有截然不同的影响。

## Industrial bank / ILC charter —— 第三种选择

一个规模较小但结构上有趣的第三路径是 **industrial loan company（ILC）charter**，可在犹他、内华达等少数州取得。ILC charters：

1. 具有 FDIC 保险（不同于 SPDIs）
2. 可以拥有非银行母公司（不同于 national banks）
3. 历史上曾被 Square / Block（Square Financial Services）、Nelnet、Toyota Financial 等使用
4. 也曾被部分 crypto 公司视为 SPDI 或 OCC charter 的替代路径

ILC 在 crypto 领域不如 SPDI 受欢迎，原因在于：
- ILC 需要 FDIC 监管 + 完整的银行式检查
- 非银行母公司例外具有政治争议（Wal-Mart 的 ILC 申请曾因银行业反对而失败）
- ILC 不具备 Wyoming SPDI 的**crypto 特定**法定便利

截至 2026，Square Financial Services（Block）仍是唯一与 crypto 相邻的 ILC charter。Stripe、Coinbase 或 Kraken 是否会追求 ILC charter，仍是值得跟踪的观察点。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter アービトラージ経路]]
- [[fintech/national-license-private-stablecoin-with-dpi-export|国家ライセンス型 SC + DPI]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC 暗号資産管轄]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing 多層体系]]
- [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前の戦略買収]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管轄リスト = 通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources

- Wyoming Banking Division SPDI register (wyomingbankingdivision.wyo.gov)
- Wyoming Stable Token Act (HB 0096, 2022)
- Nevada Financial Institutions Division digital asset bank framework (AB 466, 2023)
- NYDFS BitLicense register (dfs.ny.gov)
- Texas Department of Banking guidance on digital assets (2021, 2023 updates)
- OCC Interpretive Letters 1170, 1172, 1174

- Custodia Bank v. Board of Governors litigation docket (D. Wyo., 10th Cir.)
- Kraken Financial corporate disclosures
- Public press: WSJ / Bloomberg / Coindesk / The Block / Axios coverage 2024-2026

- GENIUS Act statutory text and proposed implementation rules (Treasury, OCC)
- Lacewell v. OCC (2019-2021) docket for federal preemption history

---
source: fintech/latin-america-cbdc-stablecoin-dollarization
source_hash: 5f55c1262273cdc1
lang: zh
status: machine
fidelity: ok
title: "拉丁美洲 CBDC 与美元稳定币动态"
translated_at: 2026-05-31T07:28:06.160Z
---
# 拉丁美洲 CBDC 与美元稳定币动态

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the **Latin American regional view** that complements the dedicated [[fintech/brazil-drex-timeline-2026]] entry (per-jurisdiction deep dive on Brazil) and sits opposite the [[fintech/southeast-asia-stablecoin-regulatory-landscape]] regional view. Read it with [[fintech/em-market-crypto-dollarization-pattern]] for the cross-EM behavioral baseline (Argentina, Mexico, and Brazil are explicit data points there), and with [[fintech/gray-market-dollar-network-formalization]] for the structural pattern that USDT and USDC follow in Latin America. The geopolitical macro lens is in [[fintech/jurisdiction-list-monetary-protectionism]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix]].

> [!info] TL;DR
> 拉丁美洲是**全球稳定币美元化程度最高的地区**。到 2026,  时，USDT 与 USDC 已成为阿根廷、委内瑞拉、哥伦比亚、秘鲁和玻利维亚事实上的美元储蓄、汇款和 B2B 结算层，在墨西哥和巴西也被大量使用。政府回应**明显分化**：（1）**阿根廷（Milei）**在话语上拥抱美元化，并在操作层面容忍 USDT，同时另行推进比索稳定；（2）**巴西（BCB）**正在建设本地区制度层面最严肃的 CBDC 项目，即 **DREX**，其设计明确是与 Pix 互操作的代币化存款平台，而不是直接与 USDT 竞争；（3）**墨西哥（Banxico）**选择 CoDi 即时支付作为制度回应，把稳定币流主要留给私人轨道（Bitso）；（4）**萨尔瓦多**维持 BTC + USDC 双轨姿态；（5）**委内瑞拉**放弃了 petro CBDC，如今事实上运行在 USDT 经济上。其模式是：**国家发行的 CBDC 正在失去零售层，但在批发 / 代币化存款层占优**。

## Why Latin America matters for the global stablecoin map

拉丁美洲是稳定币需求**最清晰的自然实验**。通胀率从 5%（近期的秘鲁）到 200%+（阿根廷 2023-2024）再到 1,000%+（委内瑞拉累计），资本管制从开放（原则上墨西哥、秘鲁、哥伦比亚）到封闭（阿根廷直到 2024, ，委内瑞拉则持续封闭），而美元储蓄文化几乎普遍存在。结果是，**对美元锚定稳定币的结构性需求更接近“无处不在”，而不是某个特定用例**，这正是 [[fintech/em-market-crypto-dollarization-pattern]] 中的底层行为观察。相同动态也体现在 [[fintech/stablecoin-crossborder-b2b-growth]] 所记录的跨境 B2B 层。

## Argentina · USDT economy + Milei reforms

- **宏观背景**：阿根廷在 2024  进入时同比通胀约为 200%，存在多重资本管制（cepo cambiario），官方美元汇率与 blue / MEP / CCL 平行汇率之间存在价差。Milei 政府（自 2023  年 12 月起）在 2024-2025  期间分阶段拆除 cepo cambiario，并通过货币基础目标推进比索稳定。
- **2024 之前的稳定币角色**：USDT 作为家庭美元价值储藏工具占主导，因为它比实体美元纸币更容易获得，也规避了官方汇率限制。
- **Milei 改革之后的稳定币角色**：需求仍然持续。即便 cepo 已被拆除，USDT 仍继续充当美元储蓄轨道，因为其入金体验（Lemon、Ripio、Belo、Buenbit、Bitso Argentina）优于传统银行美元账户体验。
- **监管方向**：CNV（Comisión Nacional de Valores）依据法律 27.739 （2024）登记虚拟资产服务提供商。BCRA（央行）历来反对加密支付用例，截至 2026-05 仍未通过任何框架授权比索稳定币发行。
- **Lemon、Ripio、Belo、Buenbit、Bitso AR**：活跃钱包栈；全部提供 USDT-Tron 存款、USDC-Solana / Polygon、Visa 卡出金，以及接近 MEP 汇率的比索兑换。

阿根廷模式是“稳定币货币替代”的典型案例，也是更广泛的 [[fintech/em-market-crypto-dollarization-pattern]] 与 [[fintech/gray-market-dollar-network-formalization]] 中制度化路径的经验锚点。

## Brazil · DREX + Pix + private-rail stablecoin competition

- **宏观背景**：相较区域内其他国家，巴西雷亚尔较为稳定；巴西的稳定币需求较少来自通胀对冲，更多来自**零售加密投资** + **B2B 跨境结算** + **汇款**。
- **Pix**：巴西中央银行的即时支付系统，自 2020,  起上线并普及。Pix 每天处理数亿笔交易，是任何基于 DREX 的可编程货币用例的**非稳定币竞争基线**。
- **DREX**：BCB 的代币化存款平台，基于 Hyperledger Besu 构建，截至 2026 处于第二阶段试点。DREX 被明确定位为由持牌银行在许可型 DLT 上发行的**代币化存款**，而不是单一零售 CBDC 代币。完整细节见专门条目 [[fintech/brazil-drex-timeline-2026]]。
- **私人轨道稳定币格局**：Mercado Bitcoin（MB）、Foxbit、Ripio Brazil、Bitso Brazil 是主要本地平台。Mercado Bitcoin 已在 BRLA Digital 基础设施上试点 BRL 锚定稳定币 MBRL。**BRLA** 是一家独立的 BRL 锚定稳定币发行方，拥有银行合作伙伴；其运行于 DREX 之外，面向零售和 B2B 用途。
- **监管方向**：BCB 的框架（CMN 决议 + BCB 通函 2024-2025）在面对美元锚定稳定币时，主要将其视为**外汇工具**，并将外汇管制机制适用于巴西居民的发行与赎回。PL 4401  框架（Marco Legal das Criptomoedas，已生效）将 VASP 纳入 BCB 监管。

DREX 与私人 BRL 稳定币之间的战略关系，在结构上类似于 [[fintech/institutional-stablecoin-deposit-token-thesis]] 中的**代币化存款 vs 非银稳定币**之争，以及 [[fintech/japan-epi-three-types-overview]] 中日本**信托型 vs 银行型 vs 资金移转型**的划分。

## Mexico · Banxico CoDi vs stablecoin

- **宏观背景**：墨西哥比索是拉美流动性最强的货币，可自由兑换，银行体系深厚；通胀较为温和。
- **CoDi**：Banxico 的基于 QR / NFC 的即时支付系统，叠加在 SPEI 银行间系统之上。CoDi 的采用速度慢于巴西的 Pix。
- **Bitso US-MX corridor**：拉丁美洲最大的稳定币汇款走廊。Bitso 通过 USDC 结算处理大量美元-墨西哥比索跨境流，且与 Stripe 的合作进一步扩大了覆盖范围。这是墨西哥侧最典型的稳定币成功案例。
- **Banxico 的 CBDC 立场**：最初在 2021  宣布零售 CBDC 的目标（相关表述暗示 2024  时间线），但时间表一再推迟。截至 2026-05, ，Banxico 仍未推出任何活跃 CBDC。
- **监管方向**：金融科技法（Ley para Regular las Instituciones de Tecnología Financiera，2018）覆盖电子货币一侧。Banxico 未授权在受监管银行体系中使用加密资产进行支付；稳定币流经由持牌金融科技法机构和加密资产平台承载。

墨西哥说明了一个案例：制度层面的答案是**即时支付轨道**（CoDi）而非 CBDC，而**私人稳定币轨道**（Bitso + USDC + Stripe）赢得了跨境汇款场景。同样的模式也可在东南亚图谱中通过 [[fintech/southeast-asia-stablecoin-regulatory-landscape]] 看到。

## Colombia and Peru · gray-market USDC use

- **哥伦比亚**：COP 在区域内相对稳定；稳定币需求来自**自由职业 / 远程工作美元收入**和与美国及欧洲伙伴之间的 **B2B 结算**。主要本地平台有 Bitso Colombia、Buda、Banexcoin（总部在秘鲁但区域运营）。Banco de la República 未授权零售 CBDC 发行；探索性 CBDC 研究仍在进行中。
- **秘鲁**：PEN 稳定；稳定币需求与哥伦比亚相似。主要平台有 Buda Peru、Bitso Peru。Banco Central de Reserva del Perú 处于 CBDC 探索阶段，尚无公布的零售时间表。
- **共同模式**：在这两个国家，USDC 在**专业人士 / 自由职业 / B2B** 细分市场中的份额高于 USDT，因为其机构级入金通道更强（Circle 银行合作伙伴）；而 USDT-Tron 在**零售 / 无银行账户**细分市场占主导。
- **委内瑞拉-哥伦比亚走廊**：在哥伦比亚的委内瑞拉移民使用 USDT-Tron 向在委内瑞拉的家人转移价值；这是全球速度最高的稳定币汇款走廊之一。

## El Salvador · BTC legal tender + USDC dual policy

- **宏观背景**：萨尔瓦多于 2001  正式采用美元为法定货币（完全美元化）；该国没有货币政策自主权，也没有本国货币。
- **BTC 采用**：2021 《比特币法》使 BTC 与美元并列成为法定货币。零售采用度低于预期；国家支持的钱包 Chivo Wallet 早期表现不及预估。
- **2024  IMF 协议**：在 IMF 扩展基金安排下，萨尔瓦多同意削弱强制接受 BTC 的要求，并弱化 Chivo 的地位，同时在形式上保留 BTC 的法币地位。
- **USDC 角色**：USDC 自由流通（在美元化经济中，美元锚定等于平价工具）。Circle 具备正式基础设施存在；USDC 对于加密原生流而言发挥链上美元作用。
- **Bitcoin Bonds / Volcano Bonds**：截至 2026,  已被重新表述且更趋低调，最初 2021-2022  的大规模雄心并未实现。
- **CBDC**：由于已完全美元化，不存在 CBDC 项目。

萨尔瓦多是**双轨极端案例**：BTC + USD + USDC + 国家支持钱包并存，但没有中央银行货币当局。其宏观教训可直接映射到 [[fintech/jurisdiction-list-monetary-protectionism]] 中更广泛的稳定币地缘政治。

## Venezuela · petro defunct, USDT remittance economy

- **宏观背景**：恶性通胀持续存在（过去十年累计通胀达到数千个百分点）；玻利瓦尔已多次重新计价；资本管制严格。
- **Petro CBDC**：2018  以委内瑞拉政府发行的石油支持型加密资产形式推出，但 petro 到 2024  实际上已经失败并被正式放弃，没有活跃流通。
- **USDT 经济**：事实上的美元化通过 USDT-Tron 运行，用于委内瑞拉侨民（美国、哥伦比亚、西班牙、智利、秘鲁、墨西哥）的汇款、商业结算和家庭储蓄。Reserve Wallet 和 Binance P2P 被广泛使用；兑换为玻利瓦尔主要依靠非正式本地 OTC。
- **制裁背景**：美国 OFAC 对委内瑞拉国家实体的制裁影响正式银行渠道；USDT-Tron 对零售流而言充当一种可穿透制裁的美元层。
- **监管方向**：Sunacrip（加密货币监管总署）经历了制度动荡；监管框架仍在变化中。

委内瑞拉是国家 CBDC 失败（petro）而私人美元稳定币（USDT）填补全部货币功能的案例，是 EM 美元化论点中最强的单一数据点。

## Cross-country comparison matrix

| Country | Inflation regime | CBDC status | Dominant stablecoin | Dominant flow |
|---|---|---|---|---|
| Argentina | High, declining | None active | USDT (Tron) | Household USD store + remittance |
| Brazil | Moderate | DREX（Pilot 2 active） | USDC, USDT, BRLA | Retail invest + B2B + remittance |
| Mexico | Moderate | None active | USDC（via Bitso） | US-MX remittance |
| Colombia | Moderate | Exploration | USDC + USDT | Freelancer income + Venezuela corridor |
| Peru | Low | Exploration | USDC + USDT | Freelancer income |
| El Salvador | USD-dollarized | None (dollarized) | USDC + BTC | On-chain USD + legacy BTC adoption |
| Venezuela | Hyperinflation | Petro defunct | USDT (Tron) | Remittance + household savings |

## Structural patterns across LatAm

1. **国家 CBDC 正在失去零售层**。巴西 DREX 有意不做零售 CBDC；墨西哥 Banxico 的零售 CBDC 已多次延期；委内瑞拉的 petro 已失败；哥伦比亚和秘鲁仍处探索阶段。零售美元锚定需求已完全被 USDT 和 USDC 吸收。
2. **“代币化存款”框架赢得机构层**。巴西的 DREX 是这一模式在区域内的旗舰，与 [[fintech/institutional-stablecoin-deposit-token-thesis]] 及 [[fintech/cbdc-multi-tier-architecture-overview]] 中的结构性论点一致。
3. **即时支付轨道是非稳定币基线**。巴西的 Pix、墨西哥的 CoDi、哥伦比亚的 PSE、秘鲁的 Yape / Plin。当地即时支付越占主导，本币稳定币的价值就越被压缩。
4. **稳定币汇款走廊是制度成功案例**。Bitso US-MX（USDC）、USDT-Tron 哥伦比亚-委内瑞拉、USDT-Tron 阿根廷-西班牙、USDC 自由职业美元流向拉美，是速度最快的稳定币用例。
5. **亲美与反美政府之间的“政策姿态”差距确实存在，但比预期小**。阿根廷的 Milei、巴西的 Lula、墨西哥的 Sheinbaum、委内瑞拉的 Maduro 都面对同样的家庭行为：USDT-Tron 会替代央行试图捍卫的任何东西。
6. **巴西最接近日本的信托型 EPI 架构**（见 [[fintech/japan-stablecoin-regulatory-landscape]]）: DREX 作为许可型代币化存款平台，由受监管银行参与，与非银发行模式区分开来。

## Related

- [[fintech/INDEX|Wiki Index]]
- [[fintech/brazil-drex-timeline-2026|Brazil DREX timeline 2026]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|Gray market USD network formalization]]
- [[fintech/jurisdiction-list-monetary-protectionism|§501(d) jurisdiction list]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global five-pole matrix]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional SC + deposit-token thesis]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/national-license-private-stablecoin-with-dpi-export|National SC + DPI export]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B SC cross-border growth]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan SC regulatory landscape]]
- [[fintech/sovereign-fund-crypto-allocation-pattern|Sovereign-fund crypto allocation]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## Sources

- Banco Central do Brasil — DREX project pages, BCB press releases, CMN resolutions on virtual asset service providers under Marco Legal das Criptomoedas.
- Banco de México (Banxico) — CoDi system documentation and CBDC-related public statements.
- Banco Central de la República Argentina (BCRA) — payment-systems materials and statements on crypto-asset use.
- Comisión Nacional de Valores (Argentina) — VASP registration under Law 27.739.
- Banco Central de Venezuela (BCV) — public statements; Sunacrip historical materials.
- Banco de la República (Colombia) — exploratory CBDC publications and digital-asset working papers.
- Banco Central de Reserva del Perú (BCRP) — payment-systems and CBDC exploration materials.
- Banco Central de Reserva de El Salvador (BCR) — Bitcoin Law implementation materials and IMF agreement public summaries.
- Bank for International Settlements — Latin America CBDC working papers and Project Nexus-adjacent publications.

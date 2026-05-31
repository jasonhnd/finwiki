---
source: fintech/indonesia-ovo-stablecoin-route
source_hash: e3e63a2e1ba18b82
lang: zh
status: machine
fidelity: ok
title: ""
translated_at: 2026-05-31T07:28:06.131Z
---
﻿# 印度尼西亚电子钱包生态与稳定币路径

## Wiki route

本条目位于 [[fintech/INDEX|fintech index]] 下，是区域性 [[fintech/southeast-asia-stablecoin-regulatory-landscape]] 条目引用的**印尼专项深挖**，用于说明 OJK / BI 机制以及 IDR 稳定币灰色走廊资金流。可结合 [[fintech/em-market-crypto-dollarization-pattern]] 阅读跨新兴市场行为基线，结合 [[fintech/gray-market-dollar-network-formalization]] 阅读 USDT 在全球遵循的结构模式，并结合 [[fintech/issuer-distributor-incentive-realignment-50-50-model]] 中发行人-分销商分工理解为何 OVO / GoPay / DANA / ShopeePay 这类平台在未来任何印尼盾稳定币牌照中都具有战略位置。

> [!info] TL;DR
> 印尼支付栈由**四大电子钱包超级应用**主导：OVO（Grab + Lippo 控制）、GoPay（GoTo Group）、DANA（Ant Group + Emtek）、ShopeePay（Sea Group），运行在 BI 的全国性二维码轨道 **QRIS** 之上。根据 P2SK Law，加密监管自 2025-01  起由 Bappebti 转移至 **OJK**，但截至 2026-05，**锚定印尼盾的稳定币发行仍不可持牌化**。美元稳定币（USDT、USDC）通过持牌 PMA 交易所（Tokocrypto、Indodax、Pintu、Reku、Triv、Pluang、Upbit Indonesia、Mobee）流通，也通过新加坡、马来西亚、香港和沙特之间印尼侨民构成的**大型非正式 P2P 汇款走廊**流通。对 2026-2027  的战略问题在于：OJK + BI 是否会发放 IDR 稳定币牌照，以及最终发行人会是四大电子钱包之一、持牌银行（Bank Mandiri、BCA、BRI、BNI），还是新的专门发行机构。

## 监管边界 · OJK vs BI vs Bappebti

| 职能 | 主管机关 | 范围 |
|---|---|---|
| 银行业 / 支付系统 / 外汇 / 货币政策 | Bank Indonesia (BI) | QRIS、BI-FAST、印尼盾、外汇制度、Project Garuda CBDC |
| 资本市场 + 非银行金融服务 +（自 2025-01 起）加密资产 | Otoritas Jasa Keuangan (OJK) | 交易所、托管、稳定币牌照（待定） |
| 商品期货 + 历史上的加密监管机构（2018-2024） | Bappebti | 逐步退出加密监管，仅保留未来商品领域 |
| 电子货币发行牌照 | BI 根据 PBI 23/6/PBI/2021  | OVO、GoPay、DANA、ShopeePay、LinkAja 等 |
| 汇款牌照（PJP） | BI 根据 PBI 22/23/PBI/2020  | 跨境转账服务提供商 |

**关键转折**：**P2SK Law（UU 4/2023）** 重构了印尼金融监管。加密 / 数字金融资产监管自 2025-01 起正式从 Bappebti（商品衍生品框架）转移至 OJK（金融服务框架）。这一转变隐含地为**审慎型稳定币牌照**打开了大门（更接近 MAS SCS 或 HKMA 模式），而不是之前的商品交易框架。

与邻近司法辖区相比，这种对比非常鲜明，可参见 [[fintech/singapore-mas-payment-services-act-overview]] 的 MAS PS Act 框架，以及 [[fintech/hkma-stablecoin-licensing-overview]] 的 HKMA 专属牌照模式。OJK 已释放出框架信号，但尚未承诺日期。

### OVO · Lippo 起源、Grab 控制、Tokopedia 合作伙伴

- **所有权**：最初属于 Lippo Group；Grab 在 2021 取得控制性股权；随后在 2024-2025 进一步整合。
- **牌照**：BI 电子货币发行人 + 支付服务提供商（PJP）；根据 PBI 23/6/PBI/2021 作为电子货币监管。
- **规模**：据报道拥有数亿注册账户、数千万月活，深度嵌入 Grab 出行和 Tokopedia 电商。
- **加密角度**：并非直接的加密发行方。但 Grab Financial Group 在马来西亚运营 GXBank，并在新加坡采取与 SCS 相邻的姿态；如果 OJK 开启 IDR-SC 牌照轨道，这种 Grab 侧能力可以移植到印尼。

### GoPay · GoTo（Gojek + Tokopedia 合并）

- **所有权**：GoTo Financial，GoTo Group 的金融板块（Gojek-Tokopedia 合并后在 IDX 2022 上市）。
- **牌照**：BI 电子货币 + PJP + GoPaylater（通过持牌多金融实体开展 BNPL）。
- **规模**：于 2023 推出的 GoPay app 报告月活超过 25M；通过 Gojek 和 Tokopedia 覆盖广泛生态。
- **加密角度**：GoTo Group 拥有 **GoTo Treasury** / **Mitra Pajakku** 金融服务栈，并有实验性代币化试点。至今没有直接稳定币发行，需要 OJK + BI 联合授权。

### DANA · Ant Group + Emtek

- **所有权**：DANA Indonesia，由 Ant Group（Alipay）与 Emtek（印尼媒体集团）合资。
- **牌照**：BI 电子货币 + PJP。
- **规模**：数千万月活用户，并通过 QRIS 获得广泛商户受理。
- **加密角度**：这是中国大陆关联资本进入印尼支付体系最直接的通道。若 HKMA 批准 Ant International 的香港稳定币牌照申请（见 [[fintech/hkma-stablecoin-licensing-overview]]），且 OJK 同时放开 IDR-SC，则可能形成跨司法辖区桥梁，这在 2027-2028 是低概率但高影响的情景。

### ShopeePay · Sea Group

- **所有权**：Sea Limited（NYSE: SE），Shopee、SeaMoney、Garena 的母公司。
- **牌照**：BI 电子货币 + PJP；SeaBank Indonesia 为持牌银行实体。
- **规模**：深度嵌入 Shopee 平台，SeaBank Indonesia 提供存款和贷款产品。
- **加密角度**：Sea 历史上比另外三家超级应用更偏向保守合规。其新加坡总部允许其通过 MAS DPT 牌照参与加密敞口，而不是直接寻求印尼稳定币发行。

### 横向比较

| 钱包 | 控股母公司 | 境外支付平台基因 | 可能的 IDR-SC 姿态 |
|---|---|---|---|
| OVO | Grab（经 NASDAQ 上市的 SG 公司）+ Lippo | Grab Financial Group SG | 能力高，意愿中等 |
| GoPay | GoTo（IDX 上市） | 印尼本土 | 能力高，意愿高 |
| DANA | Ant Group + Emtek | Alipay China | 能力高，意愿高，政治敏感 |
| ShopeePay | Sea Group（NYSE） | 保守合规的新加坡体系 | 能力中等，意愿较低 |

### 为什么电子钱包会（或不会）想要稳定币牌照

电子钱包寻求 IDR-SC 发行的战略逻辑，取决于**它是否想抓取支付流中的类似手续费经济性**，还是**希望继续作为薄分销层存在**。同样的权衡见 [[fintech/issuer-distributor-incentive-realignment-arc-strategy]] 及更广泛的 [[fintech/usd-stablecoin-interchange]] 框架。对印尼电子钱包而言：

- **支持发行**：可抓取底层储备资产上的浮存金 / 净息差，锁定钱包分发，并防御银行发行的代币化存款替代。
- **反对发行**：需要满足审慎资本底线，接受 OJK + BI 联合监管，并可能侵蚀现有电子货币收入模式。

同样的算式推动 Stripe 收购 Bridge（见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse]] 和 [[fintech/regulatory-window-strategic-acquisition]]），也塑造了全球其他分销层参与者采用的 [[fintech/protocol-hedge-strategy-stripe-pattern]]。

## QRIS 轨道以及它对稳定币的影响

**QRIS** 是 BI 的标准化二维码支付标准，自 2020 起对所有电子货币和银行发行的二维码支付受理强制适用。到 2026, ，QRIS 已拥有数亿商户触点，并成为**单笔低于 IDR 10M 的零售支付默认轨道**。对任何印尼盾稳定币牌照而言，其结构性含义是：

1. 持牌 IDR-SC 必须**与 QRIS 互操作**，才能覆盖零售场景。
2. QRIS 与 **Project Nexus**（BIS 主导的东盟+印度即时支付互联）以及与新加坡 PayNow（2023）、马来西亚 DuitNow（2023）、泰国 PromptPay（2023）的双边连接，为跨境汇款提供了**非稳定币**答案，直接与 USDT P2P 走廊竞争。
3. BI 的 **Project Garuda** 批发 CBDC 试点（基于 Hyperledger、双层架构）被设计为位于 QRIS 上游而非替代它，因此为**商业银行发行的代币化存款**产品留下了结构性位置，使其区别于非银行稳定币牌照。对应类比是 [[fintech/institutional-stablecoin-deposit-token-thesis]] 的机构存款代币框架，以及 [[fintech/japan-stablecoin-regulatory-landscape]] 中日本信托 / 银行 / 资金转移分工。

### 链上 / 持牌场所

- **Tokocrypto**（在 2024  分拆前与 Binance 关联，现为本土控制）：按交易量计最大，IDR-USDT 交易对深度高。
- **Indodax**：长期运营的本土交易所，提供 IDR 稳定币现货。
- **Pintu**：移动优先，与新型银行合作。
- **Reku**、**Triv**、**Pluang**、**Upbit Indonesia**（Dunamu 合作方）、**Mobee**：共同构成持牌 PMA 阵容。

按零售交易量计，USDT 是主导稳定币；随着机构级入金渠道扩张，USDC 在 2024  后提升了份额。

### 链下 / P2P / 非正式

- **侨民汇款走廊**：新加坡-印尼、马来西亚-印尼、香港-印尼、沙特-印尼。印尼 migrant workers 在这些市场使用 **USDT-Tron** 作为价值传输层，并通过本地 OTC 台或 Binance / OKX / Bybit 上的 P2P 完成最后一公里 IDR 兑换。
- **跨境电商结算**：从中国采购的小型印尼进口商使用 USDT 作为支付层，以绕开正式外汇结算摩擦。
- **灰市行为模式**：与 [[fintech/em-market-crypto-dollarization-pattern]] 对尼日利亚、阿根廷、墨西哥的记录一致。印尼在 Chainalysis 全球加密采用指数中的高排名，持续由这些资金流驱动，而非投机。

## 待定的 IDR 稳定币牌照情景

| 情景 | 可能的发行人画像 | 概率 2026-2027  |
|---|---|---|
| OJK + BI 许可银行发行 IDR-SC（Mandiri、BCA、BRI、BNI） | 代币化存款框架 | 中等 |
| OJK 许可获认可的电子货币玩家发行非银行 IDR-SC | OVO / GoPay / DANA / ShopeePay | 较低 |
| OJK + BI 许可联盟支持的 IDR-SC | 多银行或电子货币 + 银行 JV | 中等 |
| OJK 允许持牌 PMA 交易所发行 exchange-IDR | Tokocrypto / Indodax | 低 |
| 在 2026-2027  不发放 IDR-SC 牌照 | 维持现状 | 最高 |

考虑到 BI / OJK 的姿态以及银行稳定论点的政治分量，最可能路径是**银行发行或联盟发行**的 IDR-SC，并以代币化存款而非非银行稳定币来框定。这与日本信托型 EPI 主导（见 [[fintech/japan-epi-three-types-overview]] 和 [[fintech/jp-trust-type-sc-architecture]]）以及 [[fintech/brazil-drex-timeline-2026]] 中记录的巴西 DREX 方向相呼应。

### 资本与准备金框架预期

如果 OJK 采用与 MAS-SCS 对齐的模板，审慎底线可能包括：
- 100% 的准备金需持有为现金、央行存款或短久期印尼盾主权债。
- 在 OJK 监管机构处进行隔离托管。
- 由 OJK 认可审计机构进行月度或每日准备金 attestation。
- 对非银行发行人设置专门资本底线（按区域可比，可能在 IDR 10-50  billion 区间）。
- AML/CFT 义务，包括 Travel Rule 合规（见 [[fintech/fatf-travel-rule-overview]] 和 [[fintech/fatf-travel-rule-cross-border-stack]]）。

如果 OJK 转而遵循 BI 对**银行发行代币化存款**的偏好，则框架将把现有审慎银行监管延伸到代币化存款产品，而不是创建新的牌照类别，这与 [[fintech/brazil-drex-timeline-2026]] 中记录的巴西 DREX 架构相似。

### 外国发行的美元稳定币在印尼的战略位置

另一个问题是，OJK 是否会为**外国持牌美元稳定币**（GENIUS 下的 USDC、SBI Circle 的 JPY-USDC、未来 MAS-SCS 的美元变体）建立认可路径，使其通过持牌 PMA 交易所以比当前按商品分类更正式的方式在印尼分发。最接近的类比是日本的分销商模式（见 [[fintech/japan-stablecoin-regulatory-landscape]] 和 [[fintech/japan-epi-three-types-overview]]）以及 [[fintech/japan-epi-four-camps-comparison]] 所描绘的战略价值链影响。[[fintech/three-circles-stablecoin-mra-framework]] 中的三圆 MRA 框架及其 2030  经济规模视角（[[fintech/three-circles-mra-2030-economic-scale]]）构成更广泛的政策背景。

## 跨境 IDR-SGD 桥梁

新加坡-印尼是印尼侨民汇款和中小企业贸易结算中**交易量最大的区域走廊**。在 2026 中竞争的轨道包括：

1. **PayNow ↔ BI-FAST 双边连接**（在 BIS 主导的 Project Nexus 框架下）。已在零售端上线，但有交易量上限。
2. **银行代理 SWIFT** —— 传统轨道，在企业财资规模上仍占主导。
3. **通过持牌 PMA 交易所 + 新加坡 DPT 持牌方实现的 USDT-Tron / USDC-Solana**（见 [[exchanges/sg-mas-dpt-licensing-overview]]）—— 速度快，但每一端 KYC 包络较窄。
4. **非正式 USDT P2P** —— 最快、最便宜、可见度最低；OJK 与 MAS 正在共同压缩这一走廊。

该走廊的经济性还受到 [[fintech/stablecoin-crossborder-b2b-growth]] 中更广泛的 B2B 稳定币增长模式，以及 [[fintech/dual-currency-stablecoin-arbitrage-overview]] 中当交易者跑印尼盾-新元双币腿时的双货币套利动态影响。[[fintech/dual-currency-stablecoin-arbitrage-legal-hack]] 涵盖的双币套利法律机制解释了为何即便两端都受到正式监管，这条走廊仍然有利可图。

### 印尼 ↔ 香港作为次级走廊

印尼与香港之间还存在一条较小但重要的走廊，其驱动因素包括印尼华人侨民资金流、在印尼注册但使用香港银行服务的实体，以及 Ant International / DANA 的跨司法辖区关系。如果 HKMA 在 2027  批准来自中国大陆关联发行人的美元挂钩稳定币（见 [[fintech/hkma-stablecoin-licensing-implications]]），那么印尼-香港走廊可能成为**首条一端拥有受监管中资关联美元稳定币的稳定币走廊**，从而实质性改变相对于当前 USDT-Tron 主导的区域竞争版图。

### 印尼 ↔ 沙特阿拉伯 / 阿联酋汇款

沙特和阿联酋的印尼 migrant-worker 群体构成了回流印尼的重要汇款走廊。中东一侧越来越多使用受监管的美元稳定币入金渠道（阿联酋 VARA 持牌场所）以及非正式 USDT，而印尼一侧则通过 PMA 交易所或非正式 P2P 吸收。对于这一走廊的机构层，值得注意的是其与 [[fintech/sovereign-capital-pool-aramco-anchor]] 中 Aramco / 主权资本位置以及更广泛的 [[fintech/sovereign-fund-crypto-allocation-pattern]] 之间的架构平行性。

## Related

- [[fintech/INDEX|Wiki Index]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|Gray market USD network formalization]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PS Act + SCS]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/national-license-private-stablecoin-with-dpi-export|National-license SC + DPI export]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B stablecoin cross-border growth]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|Dual-currency stablecoin arbitrage]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|Issuer / distributor 50/50 model]]
- [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT licensing]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## Sources

- Otoritas Jasa Keuangan —— P2SK Law（UU 4/2023）后的监管移交声明。
- Bank Indonesia —— QRIS 标准化通函、BI-FAST 即时支付系统材料、Project Garuda CBDC 公告。
- Bappebti —— 加密监管退出声明及最终 PMA 交易所名录移交。
- Monetary Authority of Singapore —— PayNow-BI-FAST 双边连接材料及 DPT 持牌名录。
- Bank for International Settlements —— 关于东盟+印度即时支付互联的 Project Nexus 工作论文。

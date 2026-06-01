---
source: securities/progmat-tokenized-securities-infrastructure
source_hash: 58e98ac0ea18bcfc
lang: zh
status: machine
fidelity: ok
title: "Progmat 代币化证券基础设施"
translated_at: 2026-06-01T04:15:40.131Z
---

# Progmat 代币化证券基础设施

## Wiki route

本页位于 [[securities/INDEX|securities index]] 内，是场所侧 [[securities/odx-start-stb-secondary-market|ODX START security token secondary market]] 页面和路径层级 [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] 页面的平台侧配套页面。请结合 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 阅读现金股票对比，结合 [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]] 检查参与证券公司的牌照侧，结合 [[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] 阅读基金包装问题。跨领域桥梁是 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]，因为 Progmat Coin（tokenized-deposit / stablecoin）是 Progmat ST 的现金腿配套。

## TL;DR

Progmat 是由 Progmat Inc.（株式会社Progmat）运营的日本代币化平台，从与 [[JapanFG/mizuho-fg|Mizuho]] 相邻、由 MUFG 主导的信托银行代币化工作中拆分出来（核心 Progmat ST 基础设施最初位于 [[JapanFG/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] 内部，之后成为由多家银行股东参与的独立公司）。它为代币化信托受益权（ST）、代币化存款 / stablecoin（Progmat Coin / Progmat UT）以及随后在 [[securities/osaka-digital-exchange|Osaka Digital Exchange]] START 二级市场交易的 security tokens 提供发行和生命周期基础设施。Progmat 公开材料披露了国内市场中显著的 ST 累计发行余额，其中 Progmat 经手案例占多数份额。竞争平台包括 BOOSTRY（由 Nomura 主导，也定位为支持 ST 发行）和 ibet for FIN（consortium platform）。这三者共同构成日本 ST 发行平台三角，位于 [[securities/japan-security-token-secondary-market-route|ST secondary market routes]] 的 ST 发行人侧背后。

## Platform identity

| 字段 | 公开解读 |
|---|---|
| 运营主体 | 株式会社Progmat（Progmat Inc.） |
| 起源 | 从 [[JapanFG/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] 代币化工作中拆分出来；转型为拥有更广泛银行 / 证券公司股东的独立公司。 |
| 股东谱系 | MUFG 集团实体作为锚点；根据轮次，还包括其他日本 mega-bank、信托银行、证券公司和 IT 平台股东。当前 cap table 需按 Progmat IR / news 核验。 |
| 平台产品 | Progmat（ST — security-token 发行 / 生命周期）；Progmat Coin（SC — stablecoin / tokenized deposit）；Progmat UT（utility token）。 |
| 底层技术 | 基于 DLT 的代币化，并整合信托银行托管；具体链选择和版本会演进。 |
| 监管锚点 | ST 侧属于 FIEA tokenized-securities 范围；SC 侧邻接 payment-services law / banking law。 |
| 二级场所互动 | ST 发行通过 [[securities/osaka-digital-exchange|ODX]] START 和 JSDA unlisted-PTS 框架流通，而不是 TSE 上市。 |

该市场会发生 cap table 变化、rebranding 和产品线调整；引用治理细节前，务必在 Progmat 当前网站上核验。

## Why a tokenization platform exists

现金股票、公司债和传统投资信托已经拥有成熟的发行、转让和结算基础设施（[[securities/tokyo-stock-exchange|TSE]]、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]]、信托银行）。代币化平台存在是因为：

1. **信托资产中的受益权**过去通常是纸质或低频转让，可以被代币化，以实现二级市场流动性、更快转让、可编程分配和更广投资者覆盖。
2. **上市范围之外的资产类别** —— 小额房地产信托、结构化债券受益权、私募基金权益 —— 可以作为电子记录可转让权利发行，并在 ST PTS 上交易，而无需承担 TSE 上市的成本 / 披露强度。
3. **可编程公司行动** —— 分红 / 票息 / 赎回分配可以在 token contract logic 上自动化，降低运营成本。
4. **跨境投资者 onboarding** —— 带有 KYC / specified-investor 控制的 DLT 记账原则上可以在 FIEA 约束内简化跨境分销（实践中仍受到明显约束）。
5. **与代币化现金腿支付的融合** —— 与 Progmat Coin / DCJPY / 私有 tokenized deposits 配对时，可以实现同轨或近同轨结算。

日本的架构选择是将信托银行深度整合进 ST 基础设施，而不是绕开它们；信托银行持有底层资产权利，并确保代币化受益权的法律可执行性。这在结构上不同于美国或欧盟的代币化架构，后者通常依赖 SPV / qualified-custodian 模型，而没有信托银行中介。

## Progmat ST product architecture

| 层 | 功能 |
|---|---|
| 发行人 | 发起底层资产（例如房地产物业持有、债券组合、基金权益）。 |
| 信托银行 | 按信托协议持有底层资产；发行信托受益权；在许多 Progmat 结构中，这是 MUFG Trust 或另一家参与信托银行。 |
| Progmat platform | 在 DLT 上记录代币化信托受益权；管理转让、生命周期事件，以及与 KYC / suitability controls 的整合。 |
| 证券公司 | 拥有 tokenized-security 分销范围的 Type I FIBO；执行 primary distribution，并将二级市场路由到 ODX START。 |
| 投资者 | Specified investor，或在部分产品结构中，根据 FIEA / JSDA 规则覆盖更广投资者范围。 |
| 现金腿提供方 | 法币腿使用信托银行 / 银行汇款；未来可能与 Progmat Coin 或 DCJPY 整合，用于 tokenized-deposit leg。 |

这五层架构是日本 ST 发行上市时间长于典型现金股票 primary issue，也慢于绕过信托中介的美国 Reg D 式 private-placement tokenization 的结构性原因。

## Progmat Coin / SC layer

Progmat Coin（stablecoin / tokenized-deposit 产品层）在公开描述中是 ST 层的现金腿配套。其对 ST 结算的相关性：

- 对大多数生产流量而言，ST 交易的现金腿目前使用传统日元结算（信托银行 / 银行汇款）。
- token leg 与 cash leg 之间的 atomic DvP 需要以下之一：（a）受监管银行发行的 tokenized deposit，（b）DCJPY 式双层数字货币，或（c）FIEA / payment-services-law 修订下的受监管 stablecoin。
- Progmat Coin 与 DCJPY 以及银行专属 tokenized deposit 实验并列，被定位为候选现金腿 rails 之一。
- 跨领域页面 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] 详细说明 SC 侧架构和监管定位。

对证券领域读者而言，要点是：Progmat 的 ST 工作和 Progmat 的 SC 工作被设计为可组合。Atomic DvP 是该架构声明的长期目标；短期生产流程仍使用传统现金腿结算。

## Progmat vs BOOSTRY vs ibet for FIN

日本 ST 发行平台已形成三极架构，每个平台拥有不同股东支持和产品取向：

| 平台 | 运营主体 | 锚点 / 谱系 | 取向 |
|---|---|---|---|
| Progmat | Progmat Inc. | MUFG 集团起源；多家银行股东 | 信托受益权 ST + Progmat Coin / SC 整合；银行主导生态系统。 |
| BOOSTRY | BOOSTRY Co., Ltd. | [[JapanFG/nomura-hd|Nomura HD]] / [[JapanFG/japan-exchange-group|JPX]] / SBI / 其他方已在多轮中公开投资 | 证券公司主导生态系统；历史上聚焦公司债和数字债；ibet network operator。 |
| ibet for FIN | Consortium platform，与 BOOSTRY 协同运营 | 多家公司 consortium | 将 ST 记账定位为 sector utility，并有广泛金融行业参与。 |

具体竞争特征（可能变化）：

- **Progmat 的银行侧强项。** 信托银行整合在结构上更紧密；与 Progmat Coin 的现金腿整合是证券公司主导平台若无银行合作难以匹配的差异点。
- **BOOSTRY 的证券侧强项。** 与 Nomura 分销和 JPX 邻接关系更紧密；在 2023 ，JPX 公开宣布投资 BOOSTRY 并建立 security-token 业务联盟。
- **ibet for FIN 的中立 utility 定位。** 设计用于托管发行人和平台无关的记账，服务更广 consortium；降低对单一公司的依赖顾虑。
- **跨平台互操作性。** 三个平台最终都会产生流向 [[securities/odx-start-stb-secondary-market|ODX START]] 进行二级交易的 ST 发行；ODX 参与者宇宙会看到来自多个平台的 ST，并必须相应整合。

对分析师而言，正确框架是：日本 ST 发行在平台层不是 winner-take-all；迄今二级交易在场所层（START）是 winner-take-most。

## Public size signals

来自 Progmat 公开 concept page source pack，以下市场规模字段已披露（快照值；用于时效性用途时需核验可见页面日期）：

| 字段 | 报告值 |
|---|---|
| 国内累计 security-token 案例 | 87 |
| Progmat 经手累计案例 | 45 |
| 国内 ST 未偿余额 | 超过 JPY 667.4 billion |
| Progmat 经手 ST 未偿余额 | 超过 JPY 452.2 billion |

这些数字表明：（a）日本 ST 发行市场处于数千亿日元早期规模，而非万亿级；（b）按报告快照，Progmat 持有已发行 ST 余额的大致多数份额。两个比例都会变动；务必对照 Progmat 公开页面核验，而不是无限期缓存某个快照。

## Issuer / asset classes supported

| 资产类别 | 公开示例（按发行核验） |
|---|---|
| 代币化房地产受益权 | 房地产信托中的信托受益权；Progmat 已托管多个住宅 / 商业物业结构。 |
| 代币化数字债券 | 金融机构发行人使用 Progmat / 合作银行基础设施的发行。 |
| 代币化投资信托式受益权 | 在 FIEA / JSDA 范围支持的情况下。 |
| 跨行业和基础设施资产 ST | 定期公告会增加新行业。 |

每个 ST 发行都有按发行披露包，覆盖发行人、信托银行、分销参与者、资格、结算和生命周期条款；平台是记账轨道，而不是投资者披露来源。

## Regulatory and self-regulatory anchors

| 层 | 角色 |
|---|---|
| FSA | 授权拥有 tokenized-security 分销范围的 FIBO；监督信托银行角色；发布处理 ST 流通的 2022-06-22 Market System Working Group interim report。 |
| JSDA | 自律组织；为包括 tokenized securities 在内的非上市证券制定 PTS 规则；定义 ODX START 使用的 `unlisted approved PTS issue` 范围。 |
| 信托银行监管 | 持有底层资产的信托银行除 FIEA tokenized-security 规则外，还受信托银行监管。 |
| Payment services / banking | Progmat Coin / SC 侧受 payment services law / banking law 修订监管；不属于严格 ST 证券路径范围，但在架构上与 DvP 相关。 |

## Comparison vs cash-equity infrastructure

| 维度 | 现金股票 (TSE) | ST (Progmat / BOOSTRY / ibet → START) |
|---|---|---|
| 一级发行 | 通过证券公司承销；TSE 上市审查；广泛散户可及 | 由信托银行中介；FIEA tokenized-security 范围；偏 specified-investor |
| 二级场所 | TSE + PTS（Japannext、Cboe Japan、ODX equity） | 主要是 ODX START |
| 清算 | [[securities/japan-securities-clearing-corp|JSCC]] | Token-platform transfer + trust / custody party；现金通过标准 rails |
| 结算 | [[securities/japan-securities-depository-center|JASDEC]] book-entry | Token platform record；DvP 设计开发中 |
| 披露强度 | 高（TDnet、EDINET、季度 / 年度 filings） | 较低；按发行产品披露加信托文件 |
| 生命周期事件 | 标准公司行动基础设施 | 在 token contract logic 上可编程 |
| 跨境投资者覆盖 | 成熟 | 受 FIEA 范围和参与者政策约束 |

## History sketch

- **Pre-2020** — MUFG Trust 早期代币化研究，JSDA / FSA 关于 tokenized securities 的概念工作。
- **2020-2022** — Progmat 品牌作为 Mitsubishi UFJ Trust Bank 主导平台推出；首批 Progmat 托管 ST 发行案例。
- **2022-06-22** — FSA Market System Working Group interim report 处理通过 PTS 流通 ST 的问题。
- **2023** — Progmat Inc. 作为拥有多家银行股东结构的独立运营公司成立；JPX 公开宣布投资 BOOSTRY 并建立 ST 联盟。
- **2023-12-25** — ODX START 二级市场上线，为 Progmat 托管 ST 发行提供场所侧。
- **2024-2026** — ST 发行持续增长；Progmat concept page 发布的累计案例数和未偿余额反映了这一增长。

## Related

- [[securities/INDEX]]
- [[securities/osaka-digital-exchange]]
- [[securities/odx-start-stb-secondary-market]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[JapanFG/progmat]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/sbi-hd]]
- [[JapanFG/jsda]]
- [[JapanFG/japan-exchange-group]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## Sources

- Progmat Inc. 公开 concept page、news page 和 corporate site。
- MUFG corporate news pages 和 Mitsubishi UFJ Trust and Banking corporate trust products page。
- FSA, Market System Working Group 2022-06-22 interim report。
- JSDA, unlisted-securities PTS self-regulatory rules。
- ODX, START launch announcement（2023-12-25）。
- JPX, BOOSTRY investment and security-token business alliance announcement（2023-03-30）；digital-bond / ST-related news。

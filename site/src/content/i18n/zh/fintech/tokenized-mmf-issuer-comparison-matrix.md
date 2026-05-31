---
source: fintech/tokenized-mmf-issuer-comparison-matrix
source_hash: dee64f9ae50e4ef7
lang: zh
status: machine
fidelity: ok
title: "代币化 MMF 发行人比较矩阵 —— BUIDL、BENJI、ACRED、WTGXX、USYC、USTB、OUSG"
translated_at: 2026-05-31T07:28:06.146Z
---
# 代币化 MMF 发行人比较矩阵 —— BUIDL、BENJI、ACRED、WTGXX、USYC、USTB、OUSG

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the eight-way side-by-side comparison matrix for tokenized money-market and yield-bearing RWA fund issuers. It complements the per-issuer deep dives at [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]], [[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI / FOBXX]], [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]], [[fintech/tokenized-mmf-wisdomtree-hashnote|WisdomTree WTGXX + Hashnote USYC]], and [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]]. For the systemic role tokenized MMF plays as stablecoin yield infrastructure see [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]] and [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]. For the regulatory boundary see [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] and [[fintech/three-circles-stablecoin-mra-framework|三円 MRA framework]].

> [!info] TL;DR
> 八个代币化基金产品构成了 2026-Q2  数据集的核心：**BUIDL**（BlackRock + Securitize，约 ~$2.58B AUM，Reg D，八条链，Aaa-mf）、**BENJI / FOBXX**（Franklin Templeton，约 ~$650M，1940 Act 2a-7, ，八条链）、**ACRED**（Apollo，~$100M+，Reg D，私人信贷而非 MMF，七条链）、**WTGXX**（WisdomTree，~$200M，2a-7  零售、内部 Prime 钱包）、**USYC**（Hashnote → Circle，2024-12,  峰值 ~$1B，Reg D，现为 USDC.YS 收益引擎）、**USTB**（Superstate，~$150M，Reg D）、**OUSG**（Ondo，~$650M，Reg D，**由 BUIDL 支撑**，七条链），以及 **PYUSD-MMF candidate** 路线（Paxos 备案货架，尚未上线）。代币化基金市场总量在 2026-Q2  跨过了 **$8B+ AUM**，而在 2024-Q1  仅约 ~$1B —— 在 24  个月内增长了 8×，但仍不到美国 ~$7T MMF 市场的 0.1%。横向阅读该矩阵会发现：**监管包装（Reg D vs 1940 Act 2a-7）把市场一分为二**，**Securitize + BNY Mellon 在过户代理与托管上的集中度非常显著**，而 **通过 Securitize / Ondo / Pendle / Morpho 实现的链上可组合性**，是二线产品与 BUIDL 的“收益基础设施”地位竞争时最关键的护城河。

## 为什么要做八方比较

单一发行人叙事（“BUIDL 占主导”“BENJI 最早出现”）分别抓住了部分真相，但会掩盖结构性模式。把全部八个产品放在 **NAV / AUM / 结算链 / 过户代理 / 托管人 / 监管包装 / 分销 / 目标投资者 / 链上可组合性** 这些维度上并排比较后，竞争定位的结构性模式才会清晰可见。矩阵也展示了 **Reg D vs 2a-7  分叉** 这一核心合规选择（只有 WTGXX 与 FOBXX 是 2a-7  注册，可向美国零售分发）、**Securitize 集中度**（BUIDL + ACRED 的过户代理），以及 **BNY Mellon 托管集中度**（BUIDL Reserve、BENJI/FOBXX、OUSG 底层 UST、USDC Reserve Fund 的托管人）。关于更广义的 RWA 代币化版图，见 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]]。

## Matrix A · 发行人、NAV、AUM、成立时间

| Product | Issuer / sponsor | NAV target | AUM (2026-Q2) | Inception |
|---|---|---|---|---|
| **BUIDL** | [[fintech/blackrock-buidl-tokenized-mmf-overview\|BlackRock USD Institutional Digital Liquidity Fund]] | 每份 $1.00  | **~$2.58B** | 2024-03  |
| **BENJI / FOBXX** | [[fintech/franklin-templeton-stablecoin-migration\|Franklin Templeton Franklin OnChain U.S. Government Money Fund]] | 每份 $1.00  | **~$650M** | 2021-04  |
| **ACRED** | [[fintech/apollo-acred-private-credit-tokenization\|Apollo Diversified Credit Securitize Fund]] | n/a（私人信贷；非锚定型） | **~$100M+** | 2025-01-30 |
| **WTGXX** | WisdomTree Government Money Market Fund（Prime 代币化份额类别） | 每份 $1.00  | **~$200M**（含于 Prime 内） | 2024-Q3 （代币化份额类别） |
| **USYC** | Hashnote（2024-12 被 Circle 收购）；现为 Circle USDC.YS 收益引擎 | 每份 $1.00  | **峰值 ~ $1B**（收购前）；2025-Q1  后整合 | 2023；Circle 收购于 2024-12  |
| **USTB** | Superstate Short Duration US Government Securities Fund | 每份 $1.00  | **~$150M** | 2024-Q2  |
| **OUSG** | [[fintech/ondo-finance-rusdy-adoption\|Ondo Short-Term US Government Treasuries Fund]] | 每份 $1.00  | **~$650M** | 2023 （在 2024-Q2 之后转向由 BUIDL 支撑） |
| **PYUSD-MMF (Paxos shelf)** | Paxos 备案 MMF 货架（尚未上线） | 每份 $1.00  | n/a | 计划中 |

市场领先者与其他产品之间的差距是真实存在的：**仅 BUIDL 一家就约占 ~$8B 代币化 MMF 市场的 32%**；而第二梯队产品（BENJI + OUSG + USYC + WTGXX + USTB + ACRED）合计约 ~$2.5B+。需要注意的是，**USYC 在 Circle 收购之后处于混合状态**——它的 AUM 现在更多反映在 USDC.YS 的采用指标中，而不是作为一个独立产品。另一个重要点是：**OUSG 在结构上是 BUIDL 的分销包装层**——Ondo 在 2024-Q2  宣布，OUSG 会把其大部分准备金重新导向 BUIDL，因此 OUSG 在某些口径上成了 **BUIDL 最大的外部持有人**，约占 BUIDL 在 2024  年中 AUM 的 40%。

## Matrix B · 监管包装

| Product | Wrapper | Eligible investor | US retail access |
|---|---|---|---|
| BUIDL | **Reg D 506(c)** 私募（BVI 结构） | 美国合格购买者 + 特定非美机构；**最低 $5M** | 否（仅限合格购买者） |
| BENJI / FOBXX | **1940 Act 2a-7  注册 MMF** | 美国零售 + 机构；部分渠道 **最低 $0 ** | **是**（任何经过认证或未认证的美国投资者） |
| ACRED | **Reg D** 私募 | 美国合格购买者；机构 | 否 |
| WTGXX | **1940 Act 2a-7  注册 MMF**；通过 WisdomTree Prime 的代币化份额类别 | 美国零售（在 Prime 钱包内） | **是** |
| USYC | **Reg D** 私募 | 机构 | 否 |
| USTB | **Reg D** + Reg S | 美国合格投资者 + 非美机构 | 否 |
| OUSG | **Reg D 506(c)** | 美国合格购买者 + 特定非美机构 | 否 |
| USDY (Ondo retail) | **仅 Reg S**；不向美国人提供 | **非美国个人 + 机构** | **否（明确禁止向美国人提供）** |

监管上的分叉具有约束力。**只有 BENJI/FOBXX 与 WTGXX 是 2a-7  注册产品**，也就是美国零售投资者可通过券商接触的标准包装。BUIDL、ACRED、USYC、USTB、OUSG 都属于 Reg D——仅面向机构。**USDY 是独特的**，因为它是唯一一个明确为**非美国零售**设计、且规模可观的代币化产品（Reg S 票据结构）。这是矩阵中最大的单一分歧点，也是决定分销策略的约束因素。

## Matrix C · 底层资产、结算链、过户代理、托管人

| Product | Underlying assets | Settlement chains live | Transfer agent | Custodian / treasury |
|---|---|---|---|---|
| BUIDL | 75% UST（1-3M）+ 15% overnight repo + 10% cash；WAM < 60  天 | **Ethereum, Solana, BNB, Avalanche, Aptos, Arbitrum, Optimism, Polygon**（8  条链） | **Securitize**（BlackRock 投资 $100M + 董事席位） | **BNY Mellon**（Reserve Fund） |
| BENJI / FOBXX | UST 证券 + 政府 repo + 现金 | **Stellar, Polygon, Arbitrum, Base, Avalanche, Aptos, Solana, Sui**（8  条链） | Franklin Templeton 内部（链上账本 = 官方记录） | **BNY Mellon** |
| ACRED | 直接贷款 + 资产支持贷款 + 结构化信贷（私人信贷，不是 UST） | Ethereum, Solana, Polygon, Avalanche, Aptos, Arbitrum, Sei（7  条链；Wormhole 跨链） | **Securitize**（与 BUIDL 相同） | Apollo administrator |
| WTGXX | UST + 政府 repo + 现金（标准 MMF 组合） | Stellar + Ethereum（计划中；主要分销在 Prime 钱包内） | WisdomTree 内部 | State Street 托管 |
| USYC | UST + 现金；收购前为 Hashnote 模式 | Ethereum, Solana, Canton（收购后整合） | Hashnote / Circle | Circle Reserve Fund custodial（收购后由 BNY Mellon） |
| USTB | 短久期 UST + 现金 | Ethereum, Solana | Superstate 内部 | UMB Bank 托管 |
| OUSG | **BlackRock BUIDL + 短久期 UST**（自 2024  年中起） | Ethereum, Solana, Polygon, Mantle, Sui, Aptos, XRPL（7  条链） | Ondo + Securitize | BNY Mellon（经底层 BUIDL） |
| USDY (Ondo retail) | 短久期 UST + 银行存款 | Ethereum, Solana, Mantle, Sui, Aptos, Cosmos, Noble, Arbitrum（8  条链） | Ondo | Ankura Trust |

**集中度模式**：
- **Securitize** 是 BUIDL + ACRED + OUSG（经重路由）的过户代理——这是**代币化金融中最重要的过户代理集中度**。BlackRock 向 Securitize 投资 $100M 并取得董事席位，使这一关系制度化。
- **BNY Mellon** 是 BUIDL Reserve Fund、BENJI/FOBXX、OUSG（经 BUIDL）、USDC Reserve Fund（Circle）以及历史上的 USDP Reserve 的托管人。这是稳定币与代币化基金供应链中最大单一托管人集中点。
- **Stellar** 是唯一占据先发位置的非 EVM 链（BENJI 于 2021 在其上推出；尽管多链扩展，FOBXX 仍主要在 Stellar 上挂牌）。
- **Aaa-mf rating**（Moody's）：BUIDL 与 Fidelity FYHXX 在同一天（2026-05-13）获得 Aaa-mf，表明机构已接受代币化 MMF 在完整栈意义上等同于传统 MMF。

## Matrix D · 分销渠道与目标投资者

| Product | Primary distribution channel | Target investor segment |
|---|---|---|
| BUIDL | 机构直销 + Securitize 平台 + Coinbase Prime + Bitstamp institutional | 稳定币发行人（USDC、USDB、RLUSD 准备金）、DeFi 协议（Aave RWA、Morpho）、机构财资（Siemens、Ondo） |
| BENJI / FOBXX | Franklin Templeton 零售券商 + Coinbase + Solana 钱包 | 美国零售 + 机构（多链命名策略） |
| ACRED | Coinbase Asset Management + Kraken + Securitize | 寻求私人信贷收益的 crypto-native 机构 |
| WTGXX | WisdomTree Prime（内部零售钱包 + 券商） | 通过 WisdomTree 自有分销栈面向美国零售 |
| USYC | 收购前：DeFi 协议（Frax、Ethena、Sky）；收购后：整合进 Circle USDC.YS | 收购后：USDC 收益型包装产品用户 |
| USTB | Crypto-native 机构交易台；Coinbase Asset Management | 机构型加密交易台 |
| OUSG | 亚洲 + 拉美合格机构；DeFi 协议（Flux、Pendle、Morpho） | 非美国合格机构；DeFi RWA 上架对象 |
| USDY (Ondo retail) | 非美国零售券商 + 亚洲 fintech + 拉美钱包 | **非美国零售**（拉美约 44%、东南亚、MENA） |

对于第二梯队产品而言，分销层就是**决定性的竞争护城河**。BUIDL 拥有机构财资分销（BlackRock 既有客户基础），并且是 **SC 发行人飞轮的默认准备金资产**。BENJI/FOBXX 借助 Franklin Templeton 的券商分销。WTGXX 被锁定在 WisdomTree Prime 钱包生态中——其增长上限取决于 Prime 零售获客速度。OUSG 与 USDY 共同赋予 Ondo 一个**双产品零售 + 机构、面向亚洲 / 拉美的栈**，这是其他任何发行人都不具备的。

## Matrix E · 链上可组合性与 DeFi 集成

| Product | DeFi integration depth | Listed as collateral on |
|---|---|---|
| BUIDL | **最高**：可作为 **CME / Binance / Deribit / Crypto.com** 的 IM 抵押品；Apollo ACRED 用于赎回流动性；接入 Pendle 做收益交易；Aave RWA 上架 | 主要衍生品平台 + DeFi 借贷 |
| BENJI / FOBXX | 中等：原生接入 Solana DeFi（Kamino、Drift）；Pendle | 主要在 Solana 的 DeFi 借贷上架 |
| ACRED | sACRED（2025-06, ，通过 RedStone + Securitize）是**首个获得链上 DeFi 收益的私人信贷基金** | 基于 RedStone 预言机支撑的上架 |
| WTGXX | 低：局限于 WisdomTree Prime 钱包生态 | 外部 DeFi 集成有限 |
| USYC | 收购前：深度 DeFi（Frax、Ethena USDtb 支撑、Sky USDS RWA vault）；收购后：集成进 USDC.YS 收益型包装产品 | DeFi 借贷 + 收益协议 |
| USTB | 中等：crypto-native 机构 DeFi | 早期 DeFi 上架 |
| OUSG | **深度**：Flux Finance（Ondo 自有借贷市场）、Pendle 收益交易、Morpho RWA 上架、Aave RWA 候选 | DeFi 借贷 + 收益 + 亚洲 / 拉美钱包 |
| USDY (Ondo retail) | 通过 Solana DeFi + Mantle / Sui 生态实现高零售可组合性 | 零售级 DeFi 上架（Kamino 等） |

BUIDL 的 DeFi 集成深度是结构性的——它是同时面向衍生品交易场所和 DeFi 协议可获得的、**成本最低的 T+0  可赎回收益型抵押品来源**。2026-05-14 推出的 **$1B BlackRock × Goldman × DTCC × Janus 即时赎回设施**，进一步巩固了 BUIDL 作为 T+0  流动性层的地位；竞争产品要么必须经由 BUIDL（OUSG 模式），要么接受 T+1/T+2  的赎回间隔。

## Matrix F · 收益机制与经济结构

| Product | APY (2026-05  representative) | Sponsor fee | Yield distribution mechanism |
|---|---|---|---|
| BUIDL | ~4.3% | ~20bps | 每日以分红方式分配；链上再基准化 |
| BENJI / FOBXX | ~4.7%（7-day SEC yield） | 20bps | 每日分红；链上 rebase |
| ACRED | 可变（私人信贷；SOFR + spread） | ~75-150bps（私人信贷常见） | 按季度分配；私人信贷基金机制 |
| WTGXX | ~4.7%（7-day SEC yield） | ~20bps | 通过 Prime 钱包每日分配 |
| USYC (post-acq) | ~4.5%，以 USDC.YS 套装形式交付 | n/a（整合入 USDC.YS） | USDC + USYC 份额打包产品 |
| USTB | ~4.5% | ~15bps | 每日分配 |
| OUSG | ~4.8%（跟踪 SOFR；净值约为 SOFR-25  到 SOFR-40bps） | ~15bps Ondo + 20bps BlackRock（经由底层 BUIDL） | 每日分配；通过 BUIDL 路由 |
| USDY (Ondo retail) | ~4.7%，通过 rebase 实现 | ~20bps | 价格 rebase（USDY）或供应量 rebase（rUSDY） |

经济模型呈现出非常强的收敛性：所有以 UST 为底层的产品都提供接近 SOFR 的收益，并收取约 15-25bps 的赞助费。**OUSG 的净 APY 在结构上比 BUIDL 低约 20bps**（BlackRock 20bps 费用 + Ondo 15bps 费用，扣除复利效果之后），因为 OUSG 在价值链中处于 BUIDL 下游。ACRED 是唯一在收益结构上真正不同的产品（私人信贷、期限更长、流动性更弱），且费用也明显更高。USDY/rUSDY 则是唯一允许**非美国零售**直接获取收益、而无需通过美国合格购买者门槛的产品。

## Matrix G · GENIUS Act §501  合规状态

| Product | GENIUS §501  classification | Notes |
|---|---|---|
| BUIDL | 不在 §501  范围内（注册证券；不是支付型稳定币） | 不能在美国支付场景中作为“稳定币”营销 |
| BENJI / FOBXX | 不在 §501  范围内（SEC 注册 2a-7  MMF） | 逻辑与 BUIDL 相同 |
| ACRED | 不在 §501  范围内（私人信贷；非锚定） | 在类别上就不是稳定币 |
| WTGXX | 不在 §501  范围内（SEC 注册 2a-7  MMF） | 逻辑与 BENJI 相同 |
| USYC | 不在 §501  范围内（Reg D 基金）；但**集成入 USDC.YS**，后者属于获准的、符合 GENIUS 的收益型包装产品 | Circle 的 USDC.YS 把 USDC（符合 GENIUS 的 SC）+ USYC（注册基金）打包，以**绕开 §501 “稳定币不能直接付息”**的限制 |
| USTB | 不在 §501  范围内 | Reg D 基金 |
| OUSG | 不在 §501  范围内（Reg D 基金） | Reg D 基金 |
| USDY / rUSDY | 明确**不能**按 §501  作为 SC 营销（注册票据；仅限非美国） | [[fintech/three-circles-stablecoin-mra-framework\|MRA framework]] 中的独立第四圈层 |

GENIUS Act §501 对稳定币发行人直接付息的禁止，**直接创造了代币化 MMF 增长的顺风**。在美国支付轨道中，带收益的美元不能合法成为 SC——但它可以是代币化 MMF 份额。Circle × Hashnote 收购及其后的 USDC.YS 推出，是最干净的示范：Circle 同时拥有 SC 发行人（USDC）与收益引擎（USYC），并将两者打包成产品，**在保持技术合规的同时绕开 §501**。每一个第二梯队代币化 MMF 都受益于这一监管几何结构。

## 为什么选择这些维度

选择这九个矩阵轴（NAV、AUM、结算链、过户代理、托管人、监管包装、分销、目标投资者、链上可组合性），是因为它们映射了**机构采用决策中的关键闸门变量**：

1. **NAV / AUM** —— 衡量已实现的规模（启动后 LP 唯一真正关心的指标）。  
2. **结算链** —— 决定链上可组合性的上限（Solana DeFi vs Ethereum DeFi vs 同时覆盖）。  
3. **过户代理** —— 决定操作风险与监管意义上的托管链条（Securitize 的集中度具有结构性）。  
4. **托管人** —— 决定底层资产安全性（BNY Mellon 的集中度具有结构性）。  
5. **监管包装** —— 将可参与投资者基础一分为二（Reg D vs 2a-7  vs Reg S）。  
6. **分销渠道** —— 预测采用速度（最核心的竞争护城河）。  
7. **目标投资者** —— 决定 TAM（合格购买者 vs 零售 vs 非美国）。  
8. **链上可组合性** —— 决定 DeFi 集成深度（BUIDL 作为 IM 抵押品被接受是结构性护城河）。  
9. **GENIUS §501  合规性** —— 决定产品是否可以被打包进带收益的 SC 包装（USDC.YS 模式）。  

这九个变量合在一起，解释了为什么 **BUIDL 能在 24  个月内从零起步占据 32% 市场份额**（机构分销 + Securitize + BNY Mellon + Reg D + IM 抵押 + 8  条链），以及为什么 **WTGXX 在结构上被限制于 Prime wallet 的增长上限**（尽管其 2a-7  包装更有利）。矩阵视角能并排揭示这些模式。

## 如何阅读这个矩阵

- **BUIDL 不只是产品，而是“收益基础设施”**：BUIDL 被 Apollo ACRED 用作抵押品、被 Circle USDC 用作准备金、被 CME/Binance/Deribit 接受为 IM，并经 Ondo OUSG 重路由。它的真实经济足迹远大于 AUM 本身。
- **第二梯队不是在向 BUIDL 靠拢，而是在差异化**：BENJI 走零售券商，OUSG 走亚洲 / 拉美分销，ACRED 走私人信贷，USDY 走非美国零售，WTGXX 走自有 Prime 钱包，USYC 走 USDC.YS 集成。没有哪个在直接攻击 BUIDL 的机构 Reg D 护城河。
- **Securitize 的集中度是最被低估的风险**：它是 BUIDL + ACRED +（经重路由的）OUSG 的过户代理，意味着一旦 Securitize 出现运营故障，会级联冲击整个第二梯队。BlackRock 的 $100M 投资 + 董事席位，部分就是风险缓释措施。
- **BNY Mellon 的托管集中度更大**：它是 BUIDL Reserve + BENJI/FOBXX + USDC Reserve + USDY 底层资产的托管人。若 BNY 出现运营问题，将波及整个合规链上美元栈。
- **OUSG 对 BUIDL 的结构性依赖**意味着 OUSG 并不是真正独立的产品——它更像是面向非美国机构亚洲 / 拉美客户的 BUIDL 分销包装层。与 BUIDL 做纯替代竞争在结构上非常困难。
- **GENIUS §501  创造了顺风**：Circle 的 USDC.YS（USDC + USYC 组合）是最清晰的示范，说明“代币化 MMF + 符合 GENIUS 的 SC”是被允许的带收益美元包装，验证了第二梯队 MMF 策略。
- **市场规模仍仅约为美国 MMF TAM 的 0.1%** —— $8B 对比 $7T。即便增长了 10×，仍然有充足空间容纳更多发行人。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI / FOBXX]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/tokenized-mmf-wisdomtree-hashnote|WisdomTree WTGXX + Hashnote USYC]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA framework]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network neutral infrastructure]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]]
<!-- /wiki-links:managed -->

## Sources

- BlackRock — BUIDL fund page: https://www.blackrock.com/us/individual/products/422581/
- Franklin Templeton — FOBXX fund page: https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
- Apollo + Securitize ACRED page: https://apolloacademy.com/securitize/
- WisdomTree — WTGXX fund page: https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx
- Hashnote USYC: https://www.usyc.com/
- Superstate USTB: https://superstate.com/
- Ondo Finance — OUSG / USDY / rUSDY product docs: https://ondo.finance/
- SEC EDGAR — registered MMF + 2a-7 filings: https://www.sec.gov/edgar
- Circle blog — Circle acquires Hashnote (2024-12): https://www.circle.com/blog/circle-acquires-hashnote
- DefiLlama BENJI protocol page: https://defillama.com/protocol/franklin-templeton-benji
- Moody's public rating action — Aaa-mf for BUIDL + FYHXX (2026-05-13)
- Public BlackRock × Goldman × DTCC × Janus $1B instant-redemption facility announcement (2026-05-14)

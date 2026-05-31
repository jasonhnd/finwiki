---
source: fintech/ondo-finance-rusdy-adoption
source_hash: e56ce93f3f1b995d
lang: zh
status: machine
fidelity: ok
title: "Ondo Finance · OUSG / USDY / rUSDY / Ondo Chain · 制度化的RWA全栈玩家"
translated_at: 2026-05-31T11:13:44.897Z
---

# Ondo Finance · OUSG / USDY / rUSDY / Ondo Chain · 制度化的RWA全栈玩家

## 长话短说

翁多金融是2021 年成立，2023 年从 **RWA 全栈** 扩展单一代币化国库券产品 (OUSG) = OUSG（面向合格投资者的代币化政府债券）+ USDY（零售可持有收益币）+ rUSDY（rebasing compra 变体）+ Ondo Chain（RWA 优化的 L）1、2025 发布）。 ** OUSG 和[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]是一种深厚的共生关系**——Ondo 用 BUIDL 取代了很大一部分 OUSG 后端储备，并作为 BUIDL 的 DeFi 协议层中最大的零售分销端。2026-05 目前Ondo系列产品TVL为***~$1.5B+**，客户主要为亚洲（新加坡/香港/韩国/日本）+拉丁美洲（阿根廷/巴西/墨西哥）的合格投资者。 Ondo 是**代币化 MMF + 零售收益币 + Compra L1他是第一位实现完整三件套的独立 RWA 玩家**。

## 维基路线

该条目位于[[fintech/INDEX|fintech index]]。阅读它与[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]对于定义 OUSG 经济的上游 MMF 合作伙伴关系，[[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]为了实现第二梯队 RWA 同行的差异化，并且[[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]]战略背景让 Ondo 定位为“机构”而不是“DeFi 原生”。

## 产品堆栈——每个代币实际上是什么

| 产品 | 类型 | 合格买家 | 潜在的 | APY（目标） | 链条 |
|---|---|---|---|---|---|
| 奥古斯丁大学 | Ondo 短期政府国债基金的代币化份额 | 美国合格购买者（Reg D）+选定的非美国机构 | 贝莱德 BUIDL + 短期 UST | ～4.8%（SOFR-跟踪） | 以太坊、Solana、Polygon、Mantle、Sui、Aptos、XRPL |
| 美元指数 | 由空头 UST + 银行存款支持的代币化票据 | 非美国个人/机构（非美国人） | 做空UST+现金 | ～4.7%狐狸 | 以太坊、Solana、Mantle、Sui、Aptos、Cosmos、Noble、Arbitrum |
| 美元指数 | USDY 的变基变体 | 与USDY相同；允许将产量作为供应重定基数而不是价格重定基数 | 与 USDY 相同 | ～4.7%通过福克斯 | 以太坊、Solana、Mantle、黄金、Aptos |
| Ondo链（已发布2025） | RWA 优化的 L1 | 所有 Ondo 产品 + 第三方 RWA 发行人 | 不适用（链条） | 不适用 | 独立L1 有桥梁 |
| Flux Finance（DeFi 协议） | OUSG 的借贷市场 | 通过 KYC 的钱包 | OUSG/USDC | 多变的 | 以太坊 |

来源：Ondo Finance 文档，2026-05 快照。

**关键区别**：USDY / rUSDY **不是 GENIUS 意义上的稳定币**——它们是在 SEC 注册的证券（注释），恰好跟踪美元1。它们不能在美国许可的支付环境中作为“稳定币”进行营销。这与 BUIDL 分类逻辑相同，并且是有意如此。这[[fintech/three-circles-stablecoin-mra-framework|three-circles MRA framework]]将它们视为第四个圈：“与支付稳定币不同的代币化收益工具”。

## OUSG ↔ BUIDL 伙伴关系 — 关键的结构事实

在 **2024-Q2** Ondo 宣布 OUSG 将把其大部分储备重新安排到 **[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]** 而不是直接持有空头UST。从某些方面来看，这是 Ondo 成为**最大的外部 BUIDL 持有者**的时刻 ~40%BUIDL 当时的 AUM 在中期2024。经济逻辑：

1。 BUIDL 给予 OUSG **T+0 通过 BlackRock × Circle × Goldman / Anchorage 即时赎回设施铸造/赎回**（以 USDC 计价），删除 T+2 纯粹持有 UST 所带来的结算摩擦。
2。贝莱德拿~20基点作为基金管理费；昂多冲锋~15bps 作为 OUSG 赞助费； OUSG 持有者的净年收益为 SOFR-25 至 SOFR-40 bps 取决于等级。
3。 Ondo 摆脱了运营自己的 UST 交易柜台、托管和货币市场投资组合的运营负担——外包给贝莱德。
4。 BlackRock 获得了** DeFi 协议的分销渠道**（Flux、Pendle、Morpho、Aave RWA 列表），BUIDL 本身作为私募基金无法直接访问。

这是 RWA 领域最干净的**发行人 × 基础设施合作关系**。该交易还解释了为什么 Apollo ACRED 在结构上是独立的——Apollo 运行自己的私人信贷储备，不需要像 OUSG 那样插入 BUIDL。

## USDY / rUSDY —“非美国个人的收益币”

USDY（推出2023-08）是**明确为非美国零售个人构建的唯一可观的收益代币**。标的资产 = 空头 UST + 银行存款，由 Ankura 每月证明，由 Ankura Trust 托管。持有者通过价格调整基准 (USDY) 或供应调整基准 (rUSDY) 获得收益。2026-05 USDY MCap **~$580M**，主要集中在：

- **拉丁美洲**（阿根廷 ~22%，巴西~14%, 墨西哥~8%) — USDY 是没有美国经纪账户的拉丁美洲零售业可以使用的最干净的美元收益工具。
- **亚洲**（新加坡~12%, 香港~9%、日本~6%）——富有的个人使用链上轨道直接获取 UST 收益。
- **非洲/中东** (~10%）——阿联酋财富、尼日利亚/肯尼亚美元对冲需求。

USDY 的增长模式与 PYUSD 相反：PYUSD 是“无收益的品牌支付轨道”，USDY 是“有收益的未变形美元”。两者并不竞争——它们服务于不同的需求函数。 USDY 最接近的替代品是 **Frax sFRAX**、**Sky sUSDS** 和 **Ethena sUSDe**，其区别在于 **监管形状**（USDY 是最干净的 Reg S 票据结构）和 **链范围**（USDY 部署在7+ 链与 sUSDe 仅以太坊）。

## 多链部署——“每条重要链上的 RWA”论文

经过2026-05 OUSG 在 **Ethereum、Solana、Polygon、Mantle、Sui、Aptos、XRPL** 上运行，USDY 在 **Ethereum、Solana、Mantle、Sui、Aptos、Cosmos、Noble、Arbitrum** 上运行。目的是让**任何拥有机构资本的连锁店**拥有 Ondo 产品，消除“错误的连锁店”摩擦。 Ondo 使用 Axelar + LayerZero + Wormhole + Noble 的原生 USDC 发行进行跨链移动。该策略反映了 USDC 如何走向多链（目前20+ 链通过[[fintech/cbbtc-institutional-btc-wrapper|Circle CCTP]]等效导轨），现在 Ondo 的触及范围是~7-8 链并不断增长。

## Ondo 链 — L1 论文

已公布**2025-01** 在 Ondo 峰会上，**Ondo Chain** 是一个兼容 EVM 的 L1 专门针对 RWA 发行和交易。显着特征（根据公共文档）：

- **验证器集由受监管的金融机构组成**（富兰克林邓普顿、麦肯锡、ICE、怡安、惠灵顿、Wisdom Tree、荷兰银行公开披露为设计合作伙伴）。
- **本机 KYC 层** — 附加到受限代币传输权限的钱包级身份。
- **内置对代币化证券的支持**，具有链上转让代理功能。
- **发布时连接以太坊、Solana 和主要机构链**。

截至目前，Ondo Chain 尚未启动主网2026-05 （测试网阶段）。战略意图是使 Ondo 成为**代币化现实世界资产的默认发行链**，获得费用收入和结算层地位。最接近的类似物是**圆弧**（已宣布2025），其目标相同的 RWA L1 来自发行人一方的楔入。两者都是更广泛的一部分[[fintech/protocol-hedge-strategy-stripe-pattern|protocol hedge strategy]]在 Stripe Tempo、Coinbase Base 和 Ripple XRPL 上可见。

## 采用指标2024-2026

|公制|2024-Q1 |2025-Q1 |2026-Q1 |2026-05 |
|---|---|---|---|---|
| 奥萨格电视线 | $130中号 | $400中号 | $750中号 | $830中号 |
| USDY MCap | $50中号 | $260中号 | $510中号 | $580中号 |
| 合并 RWA TVL | $200中号 | $680中号 | $1.3乙 | $1.5B+ |
| 链条覆盖率 (OUSG) | 1 （以太坊） | 5 | 7 | 7 |
| 机构合作伙伴（已披露） | 3 | 7 | 18 | ～25 |
| 验证者合作伙伴（Ondo Chain） | — | 6 （已公布） | 12+ | 14 |

资料来源：Ondo 公开证明报告 + DefiLlama Ondo 协议页面、快照2026-05-15。

## Flux Finance 和 DeFi 可组合性

Ondo 的 DeFi 可组合性层是 **Flux Finance**，一个Compound v2 允许 OUSG 作为抵押品的分叉。 Flux 推出于2023 解决一个具体问题：持有 OUSG 的机构希望在不解除其国债头寸的情况下获得 **USDC 流动性**。 Flux 的机制：

1。通过 KYC 的机构钱包将 OUSG 存入 Flux 作为抵押品。
2。钱包以 OUSG 以 LTV 借入 USDC ~85-90%。
3。借款利率随复合式供需曲线浮动，通常为 SOFR +30-80 基点。
4。将 USDC 转入 Flux 的贷方从借款人处获得收益 + 利息支付——通常低于 OUSG 的基础国债收益率。

这使得 OUSG **在操作上类似于货币市场周转账户**：持有有收益的工具，以其为抵押借入短期流动性，并在流动现金到达时偿还。通量 TVL 为 ~$60米由2025-Q3, 增长至~$110米由2026-05。 Flux 是一个利基产品，但它具体解决了**“为什么持有代币化 MMF 而不是 USDC”**机构问题。作为比较，BUIDL 有 BlackRock × Circle T+0 设施作为其等效的流动性解决方案——不同的架构，相同的结果。

## 战略关系矩阵

| 交易对手 | 关系类型 | 战略职能 |
|---|---|---|
| 贝莱德 | 子基金顾问（BUIDL 作为 OUSG 储备） | 外包资金管理； T+0 通过BUIDL基础设施进行兑换 |
| 证券化 | 代币化平台（与 BUIDL、ACRED 共享） | 发行及转让代理层 |
| Coinbase资产管理 | 分销+投资者 | OUSG / USDY 美国机构频道 |
| 克拉肯 | 分配（美元） | 拥有通过 KYC 的用户的非美国零售 |
| 地幔基金会 | 链上部署+DeFi合作伙伴 | Mantle Treasury持有OUSG；链的可组合性 |
| 隋基金会 | 链上部署+生态合作伙伴 | 隋亚太到达 |
| 阿普托斯实验室 | 链上部署+生态合作伙伴 | Aptos 亚太地区机构影响力 |
| 智慧树 | 共同披露 Ondo Chain 验证者合作伙伴 | TradFi RWA 链验证器 |
| 惠灵顿管理公司 | Ondo Chain 验证器合作伙伴 | 机构级验证器 |
| 荷兰银行 | Ondo Chain 验证器合作伙伴 | 欧洲银行参与 |
| 富兰克林邓普顿 | Ondo Chain 验证器合作伙伴 | 姊妹代币化 MMF 玩家作为验证者 |
| 潘特拉资本 | 投资者+生态合作伙伴 | 早期 RWA 基础设施资本 |

该交易对手名单是**代币化收益非贝莱德类别中最强的**。 Apollo ACRED 有 Coinbase + Kraken，但没有富兰克林邓普顿或荷兰银行。验证者列表本质上是重新命名的 BUIDL“设计合作伙伴”列表，强调了与贝莱德一致的定位。

## 创始人和治理背景

Ondo Finance 由 **Nathan Allman**（前高盛数字资产团队首席执行官）和 **Pinku Surana**（首席技术官）共同创立。创立论文（每2021 白皮书）：DeFi 中最大的差距是**受监管的收益率原语**——DeFi 原生用户想要收益率，但唯一可用的收益率来自投机（贷款、永续债、有限合伙人头寸）。代币化的美国国债收益率填补了这一空白。

这2024 **Ondo 基金会**（DAO 治理外壳）的成立反映了有意的分裂：

1。 **Ondo Finance Inc.** — 营利性运营公司，费用收入来自 OUSG / USDY 赞助。
2。 **Ondo 基金会** — 非营利性 DAO、未来 Ondo 链验证者协调、公益基础设施治理。

这种模式——运营公司+基金会——反映了Compound、Uniswap和Solana如何分割营利性职能和协议治理职能。它是否会实质上分散 Ondo 的战略方向（相对于品牌分裂）仍然是一个悬而未决的问题。

## 地理采用情况细分

USDY（最容易零售的 Ondo 产品）具有其他代币化收益工具所没有的独特地理集中性。根据Ondo的公开披露和DefiLlama链上分析：

| 地区 | USDY 持有者比例 | 估计的 MCap 浓度 | 需求驱动 |
|---|---|---|---|
| 拉丁美洲（AR、BR、MX、CL、CO） | ～32% | 〜$185中号 | 美元对冲阿根廷卢比、雷亚尔贬值；无需美国经纪即可获得 UST 收益 |
| 亚洲（日本除外）（新加坡、香港、韩国、台湾） | ～27% | 〜$155中号 | 高净值链上收益接入；银行存款的替代方案0.5-1% |
| 日本 | ～6% | 〜$35中号 | 利基；受到 JFSA 对有收益的外国工具的立场的限制 |
| 中东（阿联酋、沙特阿拉伯、巴林） | ～9% | 〜$50中号 | 加密货币原生富裕人士财富； ADGM / DIFC 监管舒适度 |
| 非洲（NG、KE、ZA） | ～7% | 〜$40中号 | 针对 NGN、KES、ZAR 贬值的美元对冲 |
| 欧洲（瑞士、英国（不包括欧盟）、东欧） | ～13% | 〜$75中号 | 非欧盟职位；东欧美元对冲 |
| 北美洲（美国以外）（加拿大、墨西哥） | ～3% | 〜$18中号 | 使用链上轨道的CA用户 |
| 其他/未知 | ～3% | 〜$20中号 | 各种各样的 |

拉美+亚洲+中东集中度是~68%USDY 持有者。这使得 USDY 成为少数明确**非美国零售主导**的代币化收益产品之一。这也使得美元对**局部监管打击**敏感——阿根廷的资本管制改革2025-Q3 实际上增加了 USDY 的采用（人们将比索转移到链上美元 + 收益率），而巴西的 Pix 稳定币则在2025-Q4 由于用户日常使用的本币轨道更加清洁，增长略有下降。

## 赞助与非赞助 DeFi 可组合性

一个微妙但具有战略意义的重要模式：**Ondo 的 DeFi 可组合性是由赞助商介导的**，而不是未经许可。如果没有 **Ondo 的明确支持**，OUSG 无法作为 Aave、Morpho、Compound 或 Spark 的抵押品添加，因为 KYC 限制内置于 OUSG 代币合约的转让权限中。这与 USDC 的无需许可的 DeFi 可组合性**相反**，并且更接近 BUIDL 的模型。

影响：

1。 Ondo 决定哪些 DeFi 协议获得 OUSG 访问权限。目前：Flux Finance（Ondo 自己的分叉）、Morpho（选定的金库）、Pendle（PT-OUSG 市场）、Mantle 的 Mantle Treasury、Sui 本地借贷协议。
2。无需许可的 DeFi 协议（Uniswap、Curve、通用 Aave 市场）**如果没有 Ondo 白名单，就无法列出 OUSG**。
3。 USDY 的可组合性有些宽松——非美国零售钱包可以在支持非美国零售的 DeFi 场所与 USDY 交互，但钱包必须通过 Ondo 的 KYC 层。
4。 rUSDY（rebase 变体）是专门因为标准 USDY 的每日价格漂移破坏了一些 DeFi 协议集成而推出的； rUSDY 的供应重新基准保持恒定 $1 更清洁的 DeFi 组合的价格。

这种由赞助商介导的可组合性是**受监管的代币化基金的标准模型**。这使得 OUSG / USDY / BENJI 能够与 USDC 存在于相同的多链 DeFi 环境中，而不会引发 SEC 未注册发行的担忧。

## 有关的

- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL stablecoin-issuer adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 neutral infrastructure]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|Three circles SC MRA]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC institutional wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|Onchain finance vs crypto bifurcation]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Issuer-distributor realignment · Arc strategy]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]]
- [[exchanges/INDEX|exchanges index]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock digital-asset template]]

## 来源

- Ondo财经官方页面（ondo.finance）
- Ondo 基金会治理页面 (ondo.foundation)
- Ondo Finance 协议文档 (docs.ondo.finance)
- DefiLlama Ondo 财务仪表板 (defillama.com/protocol/ondo-finance)
- BlackRock BUIDL 基金页面 (blackrock.com)
- 与 OUSG 和 USDY 相关的 SEC EDGAR 公开文件 (sec.gov/edgar)
- 公共 Ondo 峰会2025 公告（Ondo Chain 披露）
- Ankura Trust 每月 USDY 透明度报告（公开）

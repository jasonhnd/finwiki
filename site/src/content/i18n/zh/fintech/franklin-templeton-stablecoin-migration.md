---
source: fintech/franklin-templeton-stablecoin-migration
source_hash: 5286c8b803b15465
lang: zh
status: machine
fidelity: ok
title: "Franklin Templeton FOBXX (BENJI) · 从 Stellar 单链到多链 RWA · 「代币化基金 ≠ 稳定币」的范式"
translated_at: 2026-06-15T03:48:21.854Z
---

# Franklin Templeton FOBXX (BENJI) · 从 Stellar 单链到多链 RWA · 「代币化基金 ≠ 稳定币」的范式

## TL;DR

**Franklin OnChain US Government Money Fund**（代码 FOBXX、链上份额类别 **BENJI**）是 **美国首只将份额完全上链化的 SEC 注册 1940 Act 货币市场基金** 产品（2021-04  推出）。最初 **在 Stellar 单链运营约 3 年**，并于 2024-2025  完成 **多链扩张**：Polygon（2023-04  加入）+ Arbitrum（2024-04）+ Base（2024-09）+ Avalanche（2024-10）+ Aptos（2024-11）+ Solana（2025-02）+ Sui（2025-Q4）+ 部分 EVM 私有链。截至 2026-05 ，BENJI AUM **约为 $650M+**，在代币化 MMF 中排名第 2 位（榜首为 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]，$2.5B+）。**FOBXX 的核心战略价值**：它是业界 **最早证明「代币化基金 ≠ 稳定币」范式可行的产品** —— 一种 SEC 注册的证券、有收益、在链上计算每日 NAV、将过户代理（transfer agent）上链化，属于与 USDC/USDT 完全不同的合规分类。

## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下。可与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 一同阅读，以了解 BENJI 如今与之竞争的占主导地位的代币化 MMF 同类；与 [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 一同了解第二梯队的 RWA 细分；与 [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]] 一同了解为何代币化基金与稳定币日益被认定为不同的类别。

## 产品基本面

| Attribute | Value |
|---|---|
| Legal name | Franklin OnChain U.S. Government Money Fund |
| Ticker | FOBXX |
| On-chain share class symbol | BENJI |
| Fund type | 1940 Act 注册货币市场基金（美国，SEC） |
| Inception | 2021-04 |
| AUM (2026-05) | ~$650M+ |
| 7-day SEC yield (2026-05) | ~4.7% |
| Expense ratio | 0.20% |
| Underlying | 美国国债证券、政府回购、现金 |
| NAV target | 每份 $1.00 ，每日计算 |
| Custody (Treasury) | BNY Mellon |
| Transfer agent | Franklin Templeton（链上账本为官方记录） |
| Distribution share class | 机构用 Reg D，美国合格散户用 Reg A，非美国用 Reg S |
| Chains live (2026-05) | Stellar, Polygon, Arbitrum, Base, Avalanche, Aptos, Solana, Sui |

来源：Franklin Templeton 公开基金文件 + DefiLlama BENJI 协议页面，快照 2026-05-15。

## 「Stellar 优先的 3 年」—— 是什么让这成为正确选择（以及最终是什么打破了它）

FOBXX 于 **2021-04 在 Stellar 上推出**，成为 **首只** 使用公链作为其份额类别登记处的 **SEC 注册代币化货币市场基金**。2021-2024  这段仅限 Stellar 的时期反映了若干刻意的选择：

1. **合规优先的链选择**：在 2021 时，Stellar 内置的受监管资产工具（发行方账户、资产信任线、多签、回收 clawback）在运营上比以太坊的 ERC-20  模型更接近传统过户代理职能。
2. **没有 DeFi 可组合性摩擦**：Stellar 缺乏厚重的 DeFi 生态，意味着 Franklin 无需处理基金份额的二级交易、借贷或再抵押 —— 这些都会引发 SEC 对 BENJI 是否被以招募说明书未设想的方式重新用途化的担忧。
3. **更低的 gas / 运营成本**：相对于 2021-2022 前后的以太坊 gas，Stellar 近乎零的交易成本使每日 NAV 更新和股息再平衡变得低廉。
4. **Stellar 发展基金会作为战略协作方**：Franklin 与 SDF 有多年关系，并非从零开始构建。

**转折点** 是 2023-2024。三个结构性条件发生了变化：

1. **[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 于 2024-03  在以太坊上推出**，并立即吸引了想要 DeFi 可组合 RWA 敞口的机构资本。BUIDL 在 90  天内达到 $500M 市值。Franklin 仅限 Stellar 的产品在结构上无法捕获那部分资金流。
2. **EVM 链的机构吸引力增长**，贯穿 2023-2024：Polygon、Arbitrum 和 Base 各自落地了数十亿美元的传统金融试点。代币化基金日益需要存在于机构买方现有基础设施已经所处的那条链上。
3. **亚洲机构兴趣需要不同的链**：Aptos（被亚太做市商使用）、Sui（新加坡 / 香港采用）和 Solana（2023 之后广泛的机构复兴）各自都有非琐碎的亚太需求空间。

Franklin 的回应是一个 **刻意的多链扩张计划**，于 2023-2025 执行。

## 多链扩张时间线

| Date | Chain added | Notable context |
|---|---|---|
| 2021-04 | Stellar (launch) | 单链阶段 |
| 2023-04 | Polygon | 首次 EVM 扩张；在 EVM 中测试过户代理上链 |
| 2024-04 | Arbitrum | 首个 L2；为 DeFi 可组合性而定位 |
| 2024-09 | Base | Coinbase 的 L2；经由 Coinbase 通道触及机构 |
| 2024-10 | Avalanche | 对子网友好，被一些传统金融试点使用 |
| 2024-11 | Aptos | 首个非 EVM、非 Stellar；Move VM；亚太机构触及 |
| 2025-02 | Solana | 高吞吐量；与 PYUSD / USDC 的 Solana 资金流对齐 |
| 2025-Q4 | Sui | 亚太机构 + Mysten Labs 合作 |

到 2025 年末，Franklin 已有 **八条链上线**，全部承载 **同一只基金**（FOBXX），链上份额可通过 Franklin 受控的跨链过户代理在各链之间互换（无第三方桥 —— Franklin 将过户代理职能保留在内部）。这与 Ondo 的多链方式不同，后者使用 LayerZero / Axelar / Wormhole；Franklin 对跨链移动保持完全的托管控制。

## 「代币化基金 vs 稳定币」—— 这款产品所定义的监管区别

FOBXX / BENJI **不是稳定币**。这一区别对于更广泛的 [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]] 图景至关重要：

| Attribute | 稳定币 (USDC, PYUSD, USDG) | 代币化 MMF (BENJI, BUIDL) |
|---|---|---|
| Legal classification | 电子货币 / 支付工具 / 信托存款 | 1940 Act 注册证券 |
| Yield to holder | 零（收益由发行方 + 分销方捕获） | 有（每日股息再平衡 ~4-5% APY） |
| Daily NAV | 恒定 $1.00 （按面值赎回保证） | $1.00  目标，小幅波动，每日计算 |
| Eligible buyer | 大体无许可（USDC）或 KYC 门控（USDG） | 合格 / 资格 / 非美国（按份额类别） |
| Regulator | 视发行方而定 NY DFS / OCC / MAS / HKMA | 主要为 SEC |
| Use case | 支付、结算、交易抵押品 | 国库储备管理、RWA 抵押品、闲置现金收益 |
| GENIUS Act applicability | 是（须满足 §501） | 否（单独的 1940 Act 制度） |

这一区别之所以重要，是因为 **同一买方可以同时持有两者，用于不同目的**，并且日益如此：

1. 国库团队持有 BENJI / BUIDL 以获取 **闲置现金收益**。
2. 国库团队持有 USDC / PYUSD 用于 **运营支付**。
3. 在主要的主经纪商（BNY Mellon / State Street / Goldman / Anchorage）处，**两者之间的转换是当日完成的功能**。

2024-2026  的机构模式是 **「BENJI / BUIDL 用于有收益层，USDC 用于支付层」** —— 而 Franklin / BlackRock 双方都因占据稳定币在美国合法无法占据的收益层而受益。

## 收益分配机制

FOBXX 每日从其 UST + 回购 + 现金组合中累计收入。收入通过 **每月份额余额再平衡** 分配给 BENJI 持有者（按累计 NAV 收益的比例，向钱包铸造额外的 BENJI 代币）。这避免了 USDY / sUSDe 所使用的价格再平衡模型（该模型可能使机构买方的记账复杂化），并与传统 MMF 的分配惯例（投资者从再投资股息中获发额外份额）保持一致。

运营细节：

- 分配累计：每日，基于前一日的加权收益率。
- 再平衡频率：每月（当前），并在考虑每周。
- 钱包影响：持有者每月看到其 BENJI 余额增长；在赎回之前不触发应税事件（美国税务处理依基金招募说明书）。
- 跨链一致性：再平衡在基金层面计算，并通过 Franklin 的过户代理系统原子性地推送至全部 8  条链。

## 采用指标 2024-2026

| Metric | 2024-Q1 | 2024-Q4 | 2025-Q2 | 2025-Q4 | 2026-05 |
|---|---|---|---|---|---|
| BENJI AUM | $360M | $410M | $480M | $580M | $650M+ |
| Chains live | 2 (Stellar, Polygon) | 5 | 7 | 8 | 8 |
| Institutional holders (disclosed) | ~12 | ~30 | ~55 | ~80 | ~100+ |
| Tokenized MMF market share vs BUIDL | ~95% (BUIDL 推出前) → ~40% (BUIDL 于 2024-03 推出后) | ~25% | ~22% | ~21% | ~20% |

来源：Franklin Templeton 公开 AUM 披露 + DefiLlama BENJI 仪表板，快照 2026-05-15。

趋势：BENJI 在 **绝对 AUM 上增长**（约 26  个月内从 $360M → $650M+），但相对于 BUIDL **失去了相对市场份额**，后者更激进地利用了 BlackRock 的机构人脉网。Franklin 选择留在多链 RWA 竞赛中而非收缩，而 [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] / [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG]] 进入 RWA 细分形成了一场 4 方竞赛（BUIDL / BENJI / OUSG / ACRED），其中 Franklin 在 MMF 中居第二位，按 AUM 在整体中居第四位。

## 战略语境 —— 为何多链押注重要

Franklin 的 CEO Jenny Johnson 和 EVP Roger Bayston 已公开强调，对于争夺未来十年国库资金流的资产管理公司而言，**代币化并非可选项**。Franklin 的押注：

1. **仅限 Stellar 将意味着把 EVM 主导的传统金融 DeFi 市场** 完全让给 BUIDL 和 OUSG。
2. **8 链覆盖意味着任何机构买方都能在其偏好的链上持有 BENJI** —— 无需仅仅因为其托管方 / 主经纪商 / 国库系统使用某条链 X 就转向 BUIDL。
3. Franklin 已在 8  条链上验证的 **过户代理上链模型**，**可直接复用于未来的 Franklin 代币化基金**（股票基金、债券基金、ETF 类比物）。FOBXX 是概念验证；真正的价值是平台。
4. **在 [[fintech/ondo-finance-rusdy-adoption|Ondo Chain]] 中的验证者参与**（Franklin 被宣布为设计合作伙伴）表明 Franklin 正在定位为不仅是发行方，也是 **验证者级别的 RWA 链参与者**。

这与 BlackRock 的 [[business/larry-fink-blackrock-digital-asset-template|digital-asset template]] 是同一逻辑 —— 从一款产品开始，验证运营模型，然后在整条基金产品线上模板化复制。

## Benji 钱包与直接面向散户的界面

2024  Franklin 推出了 **Benji 钱包** —— 一个移动优先的界面，让美国合格散户（Reg A 份额类别）和非美国散户（Reg S）无需经过经纪账户即可直接从 Franklin 购买 BENJI。主要功能：

1. **直接发行方关系** —— 钱包持有者是 FOBXX 的直接股东，而非通过经纪中介。
2. **轻触支付 / 发送机制** —— BENJI 可在 Benji 钱包之间进行点对点发送（以及发送至受支持链上的兼容外部钱包）。
3. **应用内收益展示** —— 每日收益累计在应用界面中可见。
4. **钱包入驻内置 KYC** —— Franklin 的过户代理身份层是关口。
5. **跨链持有视图** —— 单个钱包可同时在多条链上持有 BENJI。

Benji 钱包是 **迄今为止以消费级金融科技 UX 交付代币化基金的最干净示例**。它与 Robinhood Gold 交付 USDG 收益、或 Coinbase 交付 USDC + 收益产品的方式相竞争，但额外的好处是 Franklin 拥有这一关系的发行方一侧。到 2026-05 ，Benji 钱包有约 40K 名经 KYC 验证的用户 —— 规模不大但在增长。

## BENJI 在运营上与 BUIDL、OUSG、ACRED 的比较

| Attribute | BENJI (FOBXX) | BUIDL | OUSG | ACRED |
|---|---|---|---|---|
| Legal type | 1940 Act 注册 MMF（开放式） | 1940 Act 豁免私募基金 | 1940 Act 豁免私募基金 | 1933 Act Reg D + Reg S 基金 |
| Underlying | UST + 回购 + 现金 | UST + 回购 + 现金 | BUIDL + UST | 私募信贷（企业直接放贷 + ABS） |
| Eligible buyer | 合格（Reg A）+ 非美国散户（Reg S）+ 机构 | 合格购买者（$5M+） | 合格购买者（$5M+） | 合格购买者 |
| Yield distribution | 每月再平衡 | 每月以额外 BUIDL 代币形式分配 | 收益体现在 NAV / 铸销中 | 每季度分配 |
| Expense ratio | 0.20% | 0.20%（合作方分成前为 50 bps） | ~0.15% 发起方 + BUIDL 透传 | 0.45% |
| Daily liquidity | 有（基金时段内 T+0 ） | 有（经由 Circle 工具 T+0 ） | 有（经由 BUIDL 栈 T+0 ） | 有限（T+10  季度窗口） |
| Chains live (2026-05) | 8 | 7 | 7 | 7 |
| AUM | $650M+ | $2.5B+ | $830M | $100M+ |
| Issuance platform | Franklin 内部 | Securitize | Securitize | Securitize |

BENJI 与 BUIDL/OUSG 之间的 **结构性差异** 在于 **份额类别资格** —— BENJI 的 Reg A 注册使其成为 **四者中唯一面向美国合格散户投资者** 提供的产品（而非仅面向合格购买者）。这是一个有意义但未被充分利用的差异化点：大部分散户需求仍流向不要求合格身份的有收益美元（USDY、sUSDe），而 BENJI 仅限合格者的限制为其可触达市场设了上限。

## 值得注意的机构集成 2024-2026

| Integrator | Use case | Date | Significance |
|---|---|---|---|
| WisdomTree | 跨基金抵押品安排 | 2024-Q3 | 传统金融对传统金融的代币化抵押品试点 |
| Mantle Network | Mantle 国库持有 BENJI | 2024-Q4 | 主要 L2  国库向代币化 MMF 的配置 |
| Aptos Labs | Aptos 基金会国库配置 | 2024-Q4 | Layer-1  基金会国库用例 |
| BNY Mellon | 底层国债的托管 | 持续中 | 作为支撑基础设施的美国最大托管方 |
| Solana Foundation | 在 Solana 上联合营销 BENJI | 2025-Q1 | Solana 生态扩张联盟 |
| Sui Foundation | BENJI 在 Sui 上推出 | 2025-Q4 | 亚太机构触及 |
| Ondo Chain (announced) | 验证者合作伙伴 | 2025-Q1 | RWA-L1  跨发行方对齐 |

这一集成模式显示 Franklin 在执行 **「机构在哪里，就在他们选择的链上无处不在」** 的战略。Mantle 在 2024-Q4  的国库配置作为一个公开信号尤为重要 —— 它表明 **L2  基金会本身就是代币化 MMF 的买方**，用于其自身的国库管理，而不仅仅是稳定币的用户。

## 竞争展望 2026-2028

三个结构性问题将决定 BENJI 能否从 $650M 增长到 $2B+：

1. **BlackRock 是否会推出零售版 BUIDL 份额类别？** 如果会，BENJI 唯一的合格散户优势将消失，Franklin 退回到纯粹的第二梯队机构地位。
2. **Franklin 是否会推出 BENJI-2  产品？** 一只代币化中期国债基金（5-10  年久期）或一只代币化投资级企业债基金，将在不直接进入 BlackRock 领地的情况下扩展 Franklin 的平台。公开声明表明这正在规划中，但无公开推出日期。
3. **SEC 是否会厘清代币化基金如何与稳定币监管相互作用？** 目前 BENJI 的 1940 Act 地位使其与 GENIUS Act 稳定币要求干净地分离。如果 GENIUS 之后的国库指引制造出模糊性（特别是关于在稳定币储备结构内将 BENJI 用作交叉抵押品），Franklin 的定位可能在一夜之间变得更具或更不具吸引力。

这些问题也驱动更广泛的 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance vs crypto bifurcation]] 动态：代币化基金日益成为机构链上金融栈的一部分，而稳定币仍是支付 / 结算层。这一分离越清晰，Franklin 的平台投资就越有价值。

## 相关条目

- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC-issuer adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance · OUSG / USDY / Ondo Chain]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 neutral infrastructure]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|Stablecoin issuer 2025-2026 consolidation]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|Three circles SC MRA framework]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC institutional wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|Onchain finance vs crypto bifurcation]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]]
- [[exchanges/INDEX|exchanges index]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock digital-asset template]]
- [[business/paolo-ardoino-tether-business-model-template|Paolo Ardoino Tether template]]

## 来源

- Franklin Templeton official page (franklintempleton.com)
- FOBXX fund product page (franklintempleton.com)
- BENJI official page (benji.io)
- Franklin Templeton SEC EDGAR filings (sec.gov/edgar)
- DefiLlama Franklin Templeton BENJI dashboard (defillama.com)
- Stellar Development Foundation public documentation (stellar.org)
- Publicly disclosed chain-launch announcements from Franklin Templeton press releases

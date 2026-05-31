---
source: fintech/franklin-templeton-stablecoin-migration
source_hash: b065ea450a2ef0dc
lang: zh
status: machine
fidelity: ok
title: "Franklin Templeton FOBXX (BENJI) · 从Stellar单链到多链RWA · \"代币化基金≠稳定币\"范式"
translated_at: 2026-05-31T06:16:15.694Z
---

# Franklin Templeton FOBXX (BENJI) · 从Stellar单链到多链RWA · "代币化基金≠稳定币"范式

## TL;DR

**Franklin OnChain US Government Money Fund**（代码FOBXX，链上份额类别**BENJI**）是**美国首个SEC注册的1940 法案货币市场基金将份额完全链上化的产品**（2021-04 上线）。最初**在Stellar单链上运营约3 年**，自2024-2025 完成**多链扩展**：Polygon（2023-04 新增）+ Arbitrum（2024-04）+ Base（2024-09）+ Avalanche（2024-10）+ Aptos（2024-11）+ Solana（2025-02）+ Sui（2025-Q4）+ 部分EVM私有链。2026-05  BENJI AUM **约$650M+**，代币化货币市场基金第2 位位（首位为[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] $2.5B+）。**FOBXX的核心战略价值**：在业内**最早证明"代币化基金≠稳定币"范式可行的产品** —— SEC注册证券、带有收益、链上每日计算NAV、链上化转让代理人，属于与USDC/USDT完全不同的合规分类。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] for the dominant tokenized-MMF peer that BENJI now competes with, with [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] for the second-tier RWA segmentation, and with [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]] for why tokenized funds and stablecoins are increasingly recognized as distinct categories.

## 产品基本信息

| 属性 | 值 |
|---|---|
| 法定名称 | Franklin OnChain U.S. Government Money Fund |
| 代码 | FOBXX |
| 链上份额类别代号 | BENJI |
| 基金类型 | 1940 法案注册货币市场基金（美国，SEC） |
| 成立日期 | 2021-04  |
| AUM（2026-05） | 约$650M+ |
| 7日SEC收益率（2026-05） | 约4.7% |
| 管理费率 | 0.20% |
| 底层资产 | 美国国债、政府回购协议、现金 |
| NAV目标 | 每份$1.00 ，每日计算 |
| 托管（国债） | BNY Mellon |
| 转让代理人 | Franklin Templeton（链上分类账为官方记录） |
| 发行份额类别 | Reg D面向机构，Reg A面向美国合格零售投资者，Reg S面向非美国投资者 |
| 已上线链（2026-05） | Stellar、Polygon、Arbitrum、Base、Avalanche、Aptos、Solana、Sui |

来源：Franklin Templeton公开基金文件 + DefiLlama BENJI协议页面，快照2026-05-15。

## "Stellar单链3 年"——为何是正确选择（以及最终的转折点）

FOBXX于**2021-04在Stellar上线**，成为**首只使用公共区块链作为份额类别登记簿的SEC注册代币化货币市场基金**。2021-2024 仅限Stellar的阶段体现了若干深思熟虑的选择：

1. **合规优先的链选择**：Stellar内置的受监管资产工具（发行方账户、资产信任线、多签、回收功能）在操作上比2021年的以太坊ERC-20 模型更接近传统转让代理人职能。
2. **无DeFi可组合性摩擦**：Stellar缺乏成熟的DeFi生态系统，这意味着Franklin无需应对基金份额的二级交易、借贷或再抵押问题 —— 这类情形若发生，将引发SEC对BENJI是否被以招股说明书未预见方式重新利用的质疑。
3. **更低的Gas/运营成本**：Stellar接近零的交易成本使每日NAV更新和股息再平衡相比2021-2022的以太坊Gas费用更为经济。
4. **Stellar Development Foundation作为战略合作方**：Franklin与SDF已有多年合作关系，无需从零开始构建。

**转折点**出现在2023-2024。三件事发生了变化：

1. **[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]于2024-03 在以太坊上线**，立即吸引了希望获得DeFi可组合性RWA敞口的机构资金。BUIDL在90 天内市值突破$500M。Franklin仅限Stellar的产品在结构上无法捕获这些资金流。
2. **EVM链机构吸引力在2023-2024期间增强**：Polygon、Arbitrum和Base各自赢得了数十亿美元规模的传统金融试点项目。代币化基金日益需要部署在机构买方现有基础设施所在的链上。
3. **亚洲机构兴趣需要不同的链**：Aptos（亚太区做市商使用）、Sui（新加坡/香港采用）和Solana（2023后广泛机构复苏）各自在亚太区拥有相当规模的需求群体。

Franklin的回应是执行了一个**蓄意的多链扩展计划**，于2023-2025实施完成。

## 多链扩展时间线

| 日期 | 新增链 | 背景 |
|---|---|---|
| 2021-04  | Stellar（上线） | 单链阶段 |
| 2023-04  | Polygon | 首次EVM扩展；在EVM上测试链上转让代理人 |
| 2024-04  | Arbitrum | 首条L2；定位于DeFi可组合性 |
| 2024-09  | Base | Coinbase的L2；通过Coinbase渠道触达机构 |
| 2024-10  | Avalanche | 支持子网，部分传统金融试点使用 |
| 2024-11  | Aptos | 首条非EVM、非Stellar；Move VM；亚太机构覆盖 |
| 2025-02  | Solana | 高吞吐量；与PYUSD/USDC Solana资金流对齐 |
| 2025-Q4  | Sui | 亚太机构 + Mysten Labs合作 |

截至2025年底，Franklin已有**八条链上线**，均承载**同一只基金**（FOBXX），链上份额可通过Franklin自控跨链转让代理人跨链互换（无第三方桥接 —— Franklin保留转让代理人职能的内部控制）。这与Ondo的多链方式不同，后者使用LayerZero / Axelar / Wormhole；Franklin对链间资金流动保持完全的托管控制。

## "代币化基金vs稳定币" —— 本产品所定义的监管区分

FOBXX / BENJI **不是稳定币**。这一区分对于更广泛的[[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]]图景至关重要：

| 属性 | 稳定币（USDC、PYUSD、USDG） | 代币化货币市场基金（BENJI、BUIDL） |
|---|---|---|
| 法律分类 | 电子货币/支付工具/信托存款 | 1940 法案注册证券 |
| 持有人收益 | 零（收益由发行方+分销商获取） | 有（每日股息再平衡，约4-5% APY） |
| 每日NAV | 固定$1.00 （票面赎回保证） | 目标$1.00 ，每日计算，略有波动 |
| 合格买方 | 基本无门槛（USDC）或KYC认证（USDG） | 合格投资者/合格买方/非美国投资者（按份额类别） |
| 监管机构 | 纽约金融服务厅/OCC/MAS/HKMA（视发行方而定） | 主要为SEC |
| 使用场景 | 支付、结算、交易抵押品 | 国库储备管理、RWA抵押品、闲置现金收益 |
| GENIUS法案适用性 | 适用（须满足§501） | 不适用（单独的1940 法案制度） |

这一区分之所以重要，是因为**同一买方可以同时出于不同目的持有两者**，而且这种情况日益增多：

1. 财务团队持有BENJI / BUIDL用于**闲置现金收益**。
2. 财务团队持有USDC / PYUSD用于**日常支付**。
3. **两者之间的转换是主要经纪商（BNY Mellon / State Street / Goldman / Anchorage）的同日功能**。

2024-2026 的机构模式是**"BENJI / BUIDL用于收益层，USDC用于支付层"** —— Franklin / BlackRock均受益于占据稳定币在美国法律上无法合法占据的收益层。

## 收益分配机制

FOBXX每日从其美国国债+回购+现金组合中累积收入。收入通过**月度份额余额再平衡**（按累积NAV收益比例向钱包增发BENJI代币）分配给BENJI持有人。这避免了USDY / sUSDe使用的价格再平衡模式（该模式可能使机构买方的账务处理复杂化），并与传统货币市场基金分配惯例保持一致（投资者从再投资的分红中获得额外份额）。

运营细节：

- 收益累积：每日，基于前日加权收益率。
- 再平衡频率：目前为月度，每周方案在考量中。
- 钱包影响：持有人每月看到BENJI余额增长；直至赎回前不触发应税事件（美国税务处理依据基金招股说明书）。
- 跨链一致性：再平衡在基金层面计算，通过Franklin的转让代理人系统原子化推送至全部8 条链。

## 采用指标2024-2026

| 指标 | 2024-Q1  | 2024-Q4  | 2025-Q2  | 2025-Q4  | 2026-05  |
|---|---|---|---|---|---|
| BENJI AUM | $360M | $410M | $480M | $580M | $650M+ |
| 已上线链数 | 2 （Stellar、Polygon） | 5  | 7  | 8  | 8  |
| 已披露机构持有人数 | 约12  | 约30  | 约55  | 约80  | 约100+ |
| 代币化货币市场基金市场份额（相对BUIDL） | 约95%（BUIDL上线前）→ 约40%（2024-03 BUIDL上线后） | 约25% | 约22% | 约21% | 约20% |

来源：Franklin Templeton公开AUM披露 + DefiLlama BENJI看板，快照2026-05-15。

趋势：BENJI的**绝对AUM增长**（$360M → 约26 个月内$650M+），但**相对市场份额下降**，因为BUIDL更积极地利用BlackRock的机构资源。Franklin选择留在多链RWA竞争中而非收缩，[[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] / [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG]]进入RWA板块形成了4方竞争格局（BUIDL / BENJI / OUSG / ACRED），Franklin在货币市场基金中排名第二，在AUM整体排名中位居第四。

## 战略背景 —— 多链押注的重要性

Franklin首席执行官Jenny Johnson和执行副总裁Roger Bayston公开强调，对于竞争下一个十年国库资金流的资产管理公司而言，**代币化不是可选项**。Franklin的押注：

1. **仅限Stellar意味着将EVM主导的传统金融DeFi市场完全拱手相让**给BUIDL和OUSG。
2. **8链覆盖意味着任何机构买方均可在其首选链上持有BENJI** —— 无需仅因其托管方/主经纪商/国库系统使用X链而切换到BUIDL。
3. **Franklin已在8 条链上验证的链上转让代理人模型可直接复用于未来Franklin的代币化基金**（股票基金、债券基金、ETF类似产品）。FOBXX是概念验证；真正的价值在于平台。
4. **在[[fintech/ondo-finance-rusdy-adoption|Ondo Chain]]中参与验证节点**（Franklin宣布为设计合作伙伴）表明Franklin不仅将自身定位为发行方，还将成为**验证节点级别的RWA链参与方**。

这与BlackRock的[[business/larry-fink-blackrock-digital-asset-template|digital-asset template]]逻辑相同 —— 从一个产品起步，验证运营模型，然后在整个基金产品线推广模板。

## Benji钱包与直接面向零售的接口

Franklin于2024 推出**Benji钱包** —— 一个移动优先的界面，允许合格的美国零售投资者（Reg A份额类别）和非美国零售投资者（Reg S）直接通过Franklin购买BENJI，无需经过经纪账户。主要功能：

1. **直接发行方关系** —— 钱包持有人是FOBXX的直接股东，不通过中间经纪商。
2. **点击支付/转账功能** —— BENJI可在Benji钱包之间（以及在支持的链上与兼容的外部钱包之间）点对点转账。
3. **应用内收益显示** —— 每日收益累积在应用界面中可见。
4. **KYC集成于钱包注册流程** —— Franklin的转让代理人身份层作为门控机制。
5. **跨链持仓视图** —— 单一钱包可同时持有多条链上的BENJI。

Benji钱包是迄今**代币化基金以消费级金融科技用户体验交付的最清晰案例**。其与Robinhood Gold交付USDG收益的方式，或Coinbase交付USDC+收益产品的方式相当，但额外的优势在于Franklin掌握了关系的发行方端。截至2026-05 ，Benji钱包已有约40K名KYC认证用户 —— 规模不大但持续增长。

## BENJI与BUIDL、OUSG、ACRED的运营对比

| 属性 | BENJI (FOBXX) | BUIDL | OUSG | ACRED |
|---|---|---|---|---|
| 法律类型 | 1940 法案注册货币市场基金（开放式） | 1940 法案豁免私募基金 | 1940 法案豁免私募基金 | 1933 法案Reg D + Reg S基金 |
| 底层资产 | 美国国债+回购+现金 | 美国国债+回购+现金 | BUIDL+美国国债 | 私人信贷（企业直接借贷+ABS） |
| 合格买方 | 合格投资者（Reg A）+非美国零售投资者（Reg S）+机构 | 合格买方（$5M+） | 合格买方（$5M+） | 合格买方 |
| 收益分配 | 月度再平衡 | 月度以额外BUIDL代币形式分配 | 收益体现于NAV/铸造销毁 | 季度分配 |
| 管理费率 | 0.20% | 0.20%（合作方分成前50 bps） | 约0.15%发起方+BUIDL透传 | 0.45% |
| 每日流动性 | 有（基金营业时间内T+0 ） | 有（通过Circle便利T+0 ） | 有（通过BUIDL堆栈T+0 ） | 有限（季度窗口T+10 ） |
| 已上线链（2026-05） | 8  | 7  | 7  | 7  |
| AUM | $650M+ | $2.5B+ | $830M | $100M+ |
| 发行平台 | Franklin内部 | Securitize | Securitize | Securitize |

BENJI与BUIDL/OUSG之间的**结构性差异**在于**份额类别资格** —— BENJI的Reg A注册使其成为**四者中唯一面向美国合格零售投资者（而非仅合格买方）的产品**。这是有意义但尚未被充分利用的差异化优势：大多数零售需求仍流向不要求合格投资者身份的收益型美元产品（USDY、sUSDe），BENJI的仅限合格投资者限制也压缩了可触达市场的规模。

## 值得关注的机构整合（2024-2026

）| 整合方 | 使用场景 | 日期 | 意义 |
|---|---|---|---|
| WisdomTree | 跨基金抵押品安排 | 2024-Q3  | 传统金融到传统金融的代币化抵押品试点 |
| Mantle Network | Mantle国库持有BENJI | 2024-Q4  | 主要L2 国库向代币化货币市场基金的配置 |
| Aptos Labs | Aptos Foundation国库配置 | 2024-Q4  | L1 基金会国库使用案例 |
| BNY Mellon | 底层国债托管 | 持续进行 | 美国最大托管机构作为支撑基础设施 |
| Solana Foundation | 在Solana上联合推广BENJI | 2025-Q1  | Solana生态系统扩展联盟 |
| Sui Foundation | BENJI在Sui上线 | 2025-Q4  | 亚太机构覆盖 |
| Ondo Chain（已公告） | 验证节点合作伙伴 | 2025-Q1  | RWA-L1 跨发行方对齐 |

整合模式显示Franklin正在执行**"在机构所在的每条链上布局"**策略。2024-Q4  Mantle的国库配置作为一个公开信号尤为重要 —— 它表明**L2 基金会自身正在购买代币化货币市场基金**用于自己的国库管理，而不仅仅是稳定币的使用者。

## 竞争前景2026-2028

决定BENJI能否从$650M成长至$2B+的三个结构性问题：

1. **BlackRock是否推出面向零售的BUIDL份额类别？** 若推出，BENJI唯一的合格零售优势消失，Franklin退回到纯粹的第二梯队机构地位。
2. **Franklin是否推出BENJI-2 产品？** 代币化中期国债基金（5-10 年期限）或代币化投资级公司债基金将在不直接进入BlackRock领域的情况下扩展Franklin的平台。公开表态显示这正在规划中，但尚无公开上线日期。
3. **SEC是否澄清代币化基金与稳定币监管的互动？** 目前BENJI的1940 法案地位使其与GENIUS法案稳定币要求明确分隔。若GENIUS法案后的财政部指引产生歧义（尤其是在稳定币准备金结构中BENJI被用作交叉抵押品时），Franklin的定位可能在一夜之间变得更有利或更不利。

这些问题也驱动了更广泛的[[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance vs crypto bifurcation]]动态：代币化基金日益成为机构链上金融堆栈的组成部分，而稳定币仍是支付/结算层。这一分工越清晰，Franklin的平台投资就越有价值。

## Related

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

## Sources

- Franklin Templeton官方页面（franklintempleton.com）
- FOBXX基金产品页面（franklintempleton.com）
- BENJI官方页面（benji.io）
- Franklin Templeton SEC EDGAR申报文件（sec.gov/edgar）
- DefiLlama Franklin Templeton BENJI看板（defillama.com）
- Stellar Development Foundation公开文件（stellar.org）
- Franklin Templeton新闻稿公开发布的链上线公告

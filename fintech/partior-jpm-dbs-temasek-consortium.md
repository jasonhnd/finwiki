---
title: Partior · JPM / DBS / StanChart / Temasek 联营 · 新加坡锚定的跨境批发结算
aliases: [partior-jpm-dbs-temasek-consortium, Partior, Partior Pte, MAS Partior, JPM DBS StanChart Temasek]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, wholesale-settlement, partior, jpmorgan, dbs, standard-chartered, temasek, singapore-mas, cross-border, multi-bank-consortium]
status: candidate
sources:
  - https://www.partior.com/
  - https://www.partior.com/news
  - https://www.mas.gov.sg/news/media-releases/2021/partior-launch
  - https://www.dbs.com/newsroom/Partior_launch
  - https://www.standardchartered.com/news/partior
---

# Partior · JPM / DBS / StanChart / Temasek 联营 · 新加坡锚定的跨境批发结算

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/fnality-wholesale-settlement|Fnality]] (英美侧多银行 wholesale) and [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] (单银行 TD) for the wholesale-settlement consortium triangle, and with [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 战略含义]] for Partior 的新加坡锚定结构。

> [!info] TL;DR
> Partior Pte Ltd 是 2021-04 由 **JPMorgan + DBS + Temasek** 三方联合创立的新加坡 wholesale 跨境结算公司,2024 **Standard Chartered** 入股成为第四主股东,**iFAST** 等 fintech 加入扩展生态。主网 2021-08 上线,初始 USD / SGD 通道,目前已扩展到 USD / SGD / EUR / GBP / JPY 5 货币。Partior 是 [[fintech/multi-megabank-consortium-governance|多大银行联邦]] + [[fintech/singapore-mas-payment-services-act-overview|MAS PSA 规制]] 的产物,**与 Fnality (英美/欧洲) 形成"亚洲 wholesale settlement" 路径**,与 [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 单银行 TD 路径形成对比。

## Key facts

- 注册地: Singapore · 2021-04 创立 (JPMorgan + DBS + Temasek 三方各 ~$33M 种子) ^[extracted]
- 主网上线: 2021-08 · 首笔 USD ↔ SGD 跨境结算 24×7 即时 ^[extracted]
- 2024 Standard Chartered 入股 = 第四主股东 (~$80M Series B) ^[extracted]
- 2025-Q3 iFAST + 多家亚洲银行 / FX 提供商加入网络 (网络成员 30+) ^[extracted]
- 支持货币: USD / SGD / EUR / GBP / JPY (2026-Q1 加入 INR / IDR 计划) ^[extracted]
- 累计跨境结算: ~$1.5T (自上线累计, 2026-Q1 数据) ^[extracted]
- 技术栈: Hyperledger Fabric 衍生 + 模块化 PvP / DvP / atomic FX swap ^[extracted]
- CEO: Humphrey Valenbreder (前 SWIFT) · 总员工 ~80 (2026-Q1) ^[extracted]

## Mechanism / How it works

Partior 的核心模型 = **"亚洲跨境批发结算的 24×7 即时网络"**,但与 [[fintech/fnality-wholesale-settlement|Fnality]] (链上央行准备金) 不同,Partior **不直接代币化央行准备金**,而是用商业银行存款 + JP Morgan / DBS / StanChart 资产负债表互锁的方式做"准 settlement"(类 TD 但跨多家银行联营)。每笔跨境结算同时触发: 源行的本币贷记 + 目标行的目标币借记 + 在 Partior 网络上的 atomic PvP commitment = T+0 finality. **关键创新**: 不依赖单一 RTGS,**用商业银行联营 + 链上 atomic settlement 替代 SWIFT + Nostro/Vostro 的多日结算**。

技术栈是 Hyperledger Fabric 衍生 (与 JPMorgan Onyx Quorum / Fnality Besu / Canton 形成"亚洲 vs 欧美" 技术栈分流),与 [[systems/canton-overview|Canton Network]] / [[systems/cosmos-ibc-for-financial-institutions|Cosmos IBC]] 在跨链协调上有桥接需求。Partior 的"原子 FX swap"模块 (2024-Q3 上线) = 24×7 跨货币 PvP,**直接对标 [[fintech/fnality-wholesale-settlement|Fnality]] 的 cross-currency PvP**,但路径不同 (Partior = 商业银行存款 vs Fnality = 央行准备金)。

战略上 Partior 是 MAS Project Guardian / Ubin 系列 ([[fintech/bis-project-guardian-overview|BIS Project Guardian]]) 的商业化样本——新加坡把自己锚定为 **"亚洲批发结算与代币化资产的国际节点"**,Partior 是这个战略中的 settlement 层。与 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] (CN/HK/Thailand/UAE 央行主导) 不同,Partior 是商业银行主导,**两者在亚洲跨境结算市场实际竞争**: mBridge 走"央行 multi-CBDC"路径,Partior 走"商业银行联营 + Singapore MAS 持牌"路径。

## Origin & evolution

2017-2020 JPMorgan Onyx + DBS DigiBank + Temasek 各自实验 wholesale settlement / tokenized assets. **2021-04 三方联合成立 Partior Pte Ltd**,新加坡 MAS 监管下作为 wholesale payment network operator. 2021-08 主网上线,USD/SGD 双货币. 2022 EUR/GBP 加入. **2024-Q1 Standard Chartered 战略入股**,从"三方"变"四方",标志 Partior 成为新加坡锚定的国际多银行网络. 2024-Q3 atomic FX swap 上线 = 24×7 跨货币 PvP. 2025-Q3 iFAST 等 fintech 网络成员扩张,目标把 Partior 从纯银行网络 → "银行 + fintech + asset manager"混合网络. 2026-Q1 累计跨境结算量 ~$1.5T,与 [[fintech/jpm-onyx-wholesale-network|JPM Onyx Kinexys]] $1.5T 累计同量级,**但 Partior 是 multi-bank 联营,这是路径差异**. 2026-Q1 INR / IDR 加入计划标志 Partior 试图覆盖"新兴亚洲" (印度 / 印尼) 跨境通道,对 [[fintech/india-anti-dollar-dpi-alliance|India DPI 反美元联盟]] 是一种"亚洲商业银行替代方案" 试探。

## Counterpoints

Partior 的"商业银行联营"模型在治理速度上慢于 JPM 单一发行 ([[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 累计 $1.5T,Partior 同期也只 $1.5T,**但 Onyx 是 JPM 自营,Partior 要协调 4 个主股东**)。"商业银行存款互锁"不是 final money,Herstatt risk 仅部分缓解 (vs Fnality 100% 央行准备金 = 真 final settlement)。Partior 与 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 在亚洲市场存在直接竞争,**mBridge 央行背书 + 6 央行 (CN/HK/TH/UAE/SA/BR) 的政治推动**让 Partior 在新兴市场覆盖上处于劣势。技术栈 Hyperledger Fabric 与主流公链 (Ethereum / Solana) 缺乏天然桥接,需要 [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP]] 等中间件。

## Open questions

Partior 是否会接入 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / [[fintech/circle-usdc-stablecoin|USDC]] 等公链 stablecoin 提供链外赎回桥?Standard Chartered 入股后的董事会是否会推动 Partior 把 settlement asset 从"商业银行存款"升级到"央行准备金" (类 Fnality 路径)?Partior 的 INR / IDR 货币扩展能否在 2027 之前完成 (印度 RBI / 印尼 BI 对外资金融基础设施的审批通常很慢)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/singapore-mas-payment-services-act-overview|Singapore MAS PSA]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 战略含义]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
- [[fintech/india-anti-dollar-dpi-alliance|India DPI]]
<!-- /wiki-links:managed -->

## Sources

- https://www.partior.com/ — Partior 官方主页
- https://www.partior.com/news — Partior 新闻
- https://www.mas.gov.sg/news/media-releases/2021/partior-launch — MAS 关于 Partior 启动的官方公告
- https://www.dbs.com/newsroom/Partior_launch — DBS 关于 Partior 的发布
- https://www.standardchartered.com/news/partior — Standard Chartered 关于 Partior 入股的公告

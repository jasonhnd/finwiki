---
title: Fnality International · 银行联合的批发结算代币 · BoE 持牌 GBP 已上线
aliases: [fnality-wholesale-settlement, Fnality, FnPS, Fnality Payment System, USC, Utility Settlement Coin]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, wholesale-settlement, fnality, central-bank-money, gbp-fnps, boe, multi-bank-consortium, tokenized-deposit]
status: candidate
sources:
  - https://www.fnality.org/
  - https://www.fnality.org/news-views
  - https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality
  - https://www.fnality.org/governance
  - https://www.swift.com/news-events/news/swift-fnality-collaboration
---

# Fnality International · 银行联合的批发结算代币 · BoE 持牌 GBP 已上线

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] and [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]] for the wholesale-settlement consortium triangle, and with [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]] for the governance pattern that gives Fnality its multi-bank shape (vs. JPM single-issuer model).

> [!info] TL;DR
> Fnality International 是英国注册的批发结算基础设施公司,把每家成员行在中央银行的准备金 (CB money) 1:1 映射为链上 token (**Fnality Payment System token,fnPS**),实现银行间 7×24 即时本币结算。**Sterling Fnality Payment System (£ fnPS) 2023-12 获 Bank of England 批准,2024-Q2 正式上线**,是全球首个由央行授权 + 央行准备金 100% 背书的批发结算 token 系统。股东包括 **Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, State Street, Nasdaq Ventures, DTCC** 等 20+ 全球大行/基础设施,USD / EUR 系统正在 Fed / ECB 监管谈判中。Fnality 是 [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 单一发行人路径的"多银行联邦"对照样本。

## Key facts

- 注册地: 英国 (London) · 2019 创立 (前身 USC Utility Settlement Coin 项目 2015-起) ^[extracted]
- 关键里程碑: BoE 2023-11-21 公开声明确认 FnPS GBP 系统作为 systemically important payment system 取得 BoE 监管下牌照 ^[extracted]
- £ fnPS **2024-Q2 上线** · 首个商业生产交易 Lloyds × Santander × UBS ^[extracted]
- USD / EUR / JPY 系统在 2026 监管谈判中 (Fed / ECB / BoJ) · 预计 2026-2027 分别上线 ^[extracted]
- 股东 20+ 大行 + 基础设施: Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, Sumitomo Mitsui, State Street, Nasdaq Ventures, DTCC, Euroclear 等 ^[extracted]
- 累计股权募资 ~ **£325M** (跨多轮) · CEO Rhomaios Ram (前 Deutsche Bank) ^[extracted]
- 技术栈: Enterprise Ethereum (Quorum / 现迁 Hyperledger Besu) + DvP / PvP 模块化 ^[extracted]
- 用例: 银行间 RTGS 7×24 即时 · 跨货币 PvP · 证券 DvP · 与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] tokenized MMF 联动用作 IM ^[extracted]

## Mechanism / How it works

Fnality 的核心模型 = **"链上的央行准备金"** (vs. JPM Coin / JPMD = "链上的商业银行存款" TD)。每家成员行在 BoE / Fed / ECB / BoJ 开设 **Omnibus account** (汇集账户),把准备金存入后由 Fnality 在区块链上 mint 等额 fnPS token。结算时银行间转账 fnPS = 央行准备金所有权在链上变更,**T+0 finality 等同于 RTGS final settlement**,而非商业银行 TD 的"信用承兑"。这是 [[fintech/central-banking-function-unbundling|央行职能解体 5 层]] 中"批发结算货币 (wholesale CBDC)"的私营路径——央行不亲自发 token,而是由 Fnality 作为受监管 PSP 把 omnibus reserve 代币化。

技术栈是 Enterprise Ethereum (Quorum 起步,后迁 Hyperledger Besu),与 [[systems/canton-overview|Canton]] (Goldman/DTCC 路径) 和 [[fintech/jpm-onyx-wholesale-network|JPM Kinexys]] (Quorum 单一银行) 形成"三种批发结算技术栈"。Fnality 与 [[systems/swift-iso-20022-overview|SWIFT]] 在 2024-Q4 公开宣布合作: SWIFT 提供跨境消息层 + Fnality 提供结算 token,模拟 [[fintech/bis-project-agora-overview|BIS Agora]] 公私混合架构的具体实现样本。

跨货币 PvP (Payment vs Payment) 是 Fnality 的下一个杀手用例:£ fnPS × $ fnPS 在同一原子交易中互换,**消除 Herstatt risk (跨时区结算失败风险)**。FX 现货市场每日 ~$7.5T 中 ~30% 仍承担 Herstatt risk,Fnality PvP 是 [[systems/cls-bank-overview|CLS Bank]] 的链上升级版。

## Origin & evolution

2015-2018 USC (Utility Settlement Coin) 研究项目 = UBS 主导,16 家大行参与,概念验证. **2019 USC → Fnality International** (商业化),首轮融资 £63M (15 家银行). **2023-11-21** BoE 公开声明 Fnality 作为 systemic payment system 取得 BoE 监管授权,标志全球首个央行批准的批发结算 token. **2024-Q2 £ fnPS 上线**,首笔商业交易 Lloyds × Santander. 2024-Q4 与 SWIFT 公开合作 (SWIFT 消息 + Fnality token 跨境). 2025 USD/EUR 谈判进入实质阶段,但 Fed 在 GENIUS Act 下推迟以避免 "$ fnPS 影响 USDC/USDT 流通". 2025-09 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 实施]] → wholesale settlement token 不在 §501 SC 监管范畴 (因 100% 央行准备金 + 仅银行间流通),为 $ fnPS 留出立法空间. 2026-Q1 与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] tokenized MMF 联动 = fnPS 作为 IM collateral 在 CME / DTCC 衍生品场景测试. **Fnality 是"批发结算的国际公共物品"路径**: 与 [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 单一银行路径形成对照,与 [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] 新加坡四方银行路径形成区域分工。

## Counterpoints

Fnality 的"多银行联邦"模式天然慢: 20+ 股东银行决策周期长,£ fnPS 从概念 (2015) 到上线 (2024) 用了 9 年, 而 [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 同期已累计 $1.5T+。**$ fnPS 在 Fed 谈判中持续延期**,如果 2026-2027 仍未启动,Fnality 在美元市场份额可能完全被 JPMD / USDC + CCTP / BUIDL 互锁体系切走。Fnality 仅服务银行间结算,**不直接对接零售 / 企业客户**,这把它的市场天花板锁在 ~ $5T/年 全球 RTGS 流量的小数百分点,与 [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累计量级]] 比规模可能始终不大。技术栈 Quorum/Besu 在 [[systems/cross-chain-four-poles-overview|跨链四极]] 中无独立 token 经济,需要 [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP]] 或 SWIFT 桥接才能跨域。

## Open questions

$ fnPS 在 Fed 谈判中预计 2026 还是 2027 启动?Fnality 是否会接受非欧美主导货币 (CNY / INR / BRL) 的 omnibus account,使其成为 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 的私营对照?£ fnPS 与 BoE 已宣布的 [[fintech/cbdc-multi-tier-architecture-overview|CBDC]] (digital pound) 上线后是合作 (wholesale-retail 分工) 还是替代关系?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累计量级]]
- [[systems/canton-overview|Canton Network]]
<!-- /wiki-links:managed -->

## Sources

- https://www.fnality.org/ — Fnality 官方主页
- https://www.fnality.org/news-views — Fnality 新闻发布
- https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality — BoE 2023-11 关于 Fnality 的官方声明
- https://www.fnality.org/governance — Fnality 股东与治理结构
- https://www.swift.com/news-events/news/swift-fnality-collaboration — SWIFT × Fnality 合作公告

---
source: fintech/fnality-wholesale-settlement
source_hash: 0bb08020e18d4aab
lang: zh
status: machine
fidelity: ok
title: "Fnality International · 银行联合体批发结算代币 · BoE 已获许可的英镑系统已投产"
translated_at: 2026-05-31T06:16:15.673Z
---

# Fnality International · 银行联合体批发结算代币 · BoE 已获许可的英镑系统已投产

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] and [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]] for the wholesale-settlement consortium triangle, and with [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]] for the governance pattern that gives Fnality its multi-bank shape (vs. JPM single-issuer model).

> [!info] TL;DR
> Fnality International 是一家在英国注册的批发结算基础设施公司，将各成员银行在中央银行持有的准备金（央行货币）以 1:1  的比例映射为链上代币（**Fnality 支付系统代币，fnPS**），实现银行间 7×24  即时本币结算。**英镑 Fnality 支付系统（£ fnPS）于 2023-12 获得英格兰银行批准，并于 2024年第 2 季度正式上线**，是全球首个获央行认可、以央行准备金 100% 背书的批发结算代币系统。股东包括 **Lloyds、Santander、UBS、BNY Mellon、Barclays、Goldman、MUFG、ING、State Street、Nasdaq Ventures、DTCC** 等 20家以上全球大型银行 / 基础设施机构，美元 / 欧元系统正与 Fed / ECB 协商监管事宜。Fnality 是相对于 [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 单一发行人路径的"多银行联邦"对照样本。

## Key facts

- 注册地：英国（伦敦）· 2019 年设立（前身 USC Utility Settlement Coin 项目始于 2015年）^[extracted]
- 重要里程碑：BoE 2023-11-21 官方声明确认 FnPS GBP 系统作为系统重要性支付系统，在 BoE 监督下获得许可 ^[extracted]
- £ fnPS **2024年第 2 季度上线** · 首笔商业生产交易为 Lloyds × Santander × UBS ^[extracted]
- 美元 / 欧元 / 日元系统正与 Fed / ECB / BoJ 进行 2026  监管谈判 · 预计分别于 2026-2027 年上线 ^[extracted]
- 股东 20家以上大型银行 + 基础设施机构：Lloyds、Santander、UBS、BNY Mellon、Barclays、Goldman、MUFG、ING、三井住友、State Street、Nasdaq Ventures、DTCC、Euroclear 等 ^[extracted]
- 累计股权融资约 **£325M**（经多轮） · CEO Rhomaios Ram（前德意志银行）^[extracted]
- 技术栈：企业级以太坊（Quorum / 后迁移至 Hyperledger Besu）+ DvP / PvP 模块化 ^[extracted]
- 用途：银行间 RTGS 7×24 即时 · 跨币种 PvP · 证券 DvP · 与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 代币化货币市场基金联动用作初始保证金 ^[extracted]

## Mechanism / How it works

Fnality 核心模型 = **"链上央行准备金"**（vs. JPM Coin / JPMD = "链上商业银行存款"TD）。各成员银行在 BoE / Fed / ECB / BoJ 开立 **Omnibus 账户**（汇总账户）并存入准备金后，Fnality 在区块链上铸造等额 fnPS 代币。结算时银行间 fnPS 转移 = 央行准备金所有权的链上变更，**T+0 的最终性与 RTGS 最终结算等同**，并非商业银行存款的"信用承担"。这是 [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]] 中"批发结算货币（批发型 CBDC）"的私营路径——央行无需自行发行代币，Fnality 作为受监管的支付服务提供商对 Omnibus 准备金进行代币化。

技术栈为企业级以太坊（起始于 Quorum，后迁移至 Hyperledger Besu），与 [[systems/canton-overview|Canton]]（Goldman/DTCC 路径）及 [[fintech/jpm-onyx-wholesale-network|JPM Kinexys]]（Quorum 单一银行）共同构成"3 类批发结算技术栈"。Fnality 于 2024年第 4 季度与 [[systems/swift-iso-20022-overview|SWIFT]] 正式宣布合作：SWIFT 提供跨境报文层 + Fnality 提供结算代币，复制 [[fintech/bis-project-agora-overview|BIS Agora]] 公私混合架构的具体实施样本。

跨币种 PvP（支付对支付）是 Fnality 的下一个杀手级用途：£ fnPS × $ fnPS 在同一原子交易中交换，**消除 Herstatt 风险（跨时区结算失败风险）**。外汇现货市场每日约 $7.5T 中，约 30% 仍承受 Herstatt 风险，Fnality PvP 是 [[systems/cls-bank-overview|CLS Bank]] 的链上升级版。

## Origin & evolution

2015-2018  USC（Utility Settlement Coin）研究项目 = 由 UBS 主导，16 行家大型银行参与，概念验证。**2019 年 USC → Fnality International**（商业化），首轮融资 £63M（15 行年）。**2023-11-21年** BoE 官方声明确认 Fnality 作为系统重要性支付系统获得 BoE 监管许可，成为全球首个获央行批准的批发结算代币。**2024年第 2 季度 £ fnPS 上线**，首笔商业交易 Lloyds × Santander。2024年第 4 季度与 SWIFT 正式合作（SWIFT 报文 + Fnality 代币实现跨境结算）。2025 年美元 / 欧元谈判进入实质阶段，但 Fed 以 GENIUS Act 为由延期（"避免 $ fnPS 影响 USDC/USDT 流通"）。2025-09  [[fintech/genius-act-501-denylist-mandate|GENIUS Act 施行]] → 批发结算代币 §501 不在稳定币监管范围内（因 100% 仅在央行准备金 + 银行间流通），为 $ fnPS 争取到立法空间。2026年第 1 季度与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 代币化货币市场基金联动 = fnPS 作为初始保证金担保品在 CME / DTCC 衍生品场景中测试。**Fnality 是"批发结算国际公共基础设施"路径**：与 [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 单一银行路径形成对照，与 [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] 新加坡 4 行 路径形成区域分工。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]]
- [[systems/canton-overview|Canton Network]]
<!-- /wiki-links:managed -->

## Sources

- https://www.fnality.org/ — Fnality 官方主页
- https://www.fnality.org/news-views — Fnality 新闻稿
- https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality — BoE 2023-11  Fnality 相关官方声明
- https://www.fnality.org/governance — Fnality 股东与治理结构
- https://www.swift.com/news-events/news/swift-fnality-collaboration — SWIFT × Fnality 合作公告

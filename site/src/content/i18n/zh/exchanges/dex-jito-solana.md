---
source: exchanges/dex-jito-solana
source_hash: b98c1984127be819
lang: zh
status: machine
fidelity: ok
title: "Jito — Solana 流动性质押 + MEV 再分配协议 overview"
translated_at: 2026-05-31T03:19:56.442Z
---

# Jito — Solana 流动性质押 + MEV 再分配协议 overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the Solana ecosystem context, [[exchanges/dex-raydium-solana|Raydium]] / [[exchanges/dex-orca-solana|Orca]] for adjacent DEX peer context, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / mechanism boundary.

> Jito Labs（MEV 客户端）+ Jito Foundation（LST 协议）的 2  层结构 · JitoSOL（LST）· JTO（governance token, 2023-12 airdrop launch）

## 1. 协议概要

Jito 是捆绑 Solana 上**2  个不同产品的总称**：

1. **Jito-Solana validator client**（Jito Labs）：在 Solana 标准 validator 中嵌入 MEV 抽取功能的客户端。Solana stake 的 **80%+** 采用（截至 2026 年 时点的事实标准实现）
2. **JitoSOL**（Jito Foundation）：Liquid Staking Token（LST）。质押 SOL 并连同边际 MEV 报酬一起发行 JitoSOL
3. **JTO token**（governance）：2023-12-07 airdrop launch，Solana 史上最大级别的追溯性分发（retroactive distribution）之 1 

- **链**：Solana L1
- **官方 URL**：jito.network
- **TVL（2024–2026）**：$2–4B 规模，Solana LST 市场的 **70%+** 由 JitoSOL 占据

## 2. JitoSOL 的设计（MEV-aware LST）

JitoSOL 与其他 Solana LST（mSOL / bSOL 等）不同，采用**将 MEV 报酬内含于 staking yield** 的设计：

- 一般 LST：validator inflation + 交易 fee（仅 staking yield）
- JitoSOL：上述 + **MEV tips（Jito-Solana client 抽取的 block-builder tip）**
- 结果：提供比其他 LST 高 50–200 bps 的 APY（随市场波动率变动）
- 1 JitoSOL 的 SOL 换算汇率随时间增加（非 rebasing，而是 exchange rate model）

## 3. MEV 再分配机制（Jito-Solana client）

相对于 Solana 标准 validator client（Agave），Jito-Solana client 追加了以下内容：

- **block-builder auction**：Jito Block Engine 在每个 slot 募集 bundle
- **searcher bundle submission**：MEV searcher 提交 atomic bundle（附 bid）
- **validator MEV tip**：胜出 bundle 的 tip 分配给 validator + JitoSOL staker
- **anti-front-running 设计**：在没有 mempool 的 Solana 上，实现有序的 transaction inclusion

由于 Solana stake 的 80%+ 采用 Jito-Solana client，JitoSOL stake holder 事实上间接从 Solana 整体的 MEV 经济中获得 yield。

## 4. JTO token / Jito DAO

- **launch**：2023-12-07 airdrop launch（面向 Solana 上的主要 LST staker、MEV searcher、validator 等）
- **总供给**：1B JTO
- **分配**：community 约 34.3%、ecosystem development 约 25%、investors 约 16.2%、core contributors 约 24.5%
- **governance**：以 Jito DAO 的 Realms 为基础的投票运营
- **2024–2026 launch 之后**：Jito Restaking 模块（在 Solana 上引入 LRT 概念）、Jito Network 功能扩展

## 5. 在 Solana LST 市场的定位

| LST | TVL | 设计 | MEV 内含 |
|---|---|---|---|
| **JitoSOL** | $2–4B | exchange rate, MEV-aware | ○（核心差异化点） |
| mSOL (Marinade) | $0.8–1.5B | exchange rate, 分散 staking | × |
| bSOL (BlazeStake) | $200–400M | exchange rate | × |
| INF (Sanctum Infinite) | $300–600M | LST 集合体（meta-LST） | △（取决于构成 LST） |

JitoSOL 在 **2024 年 超越 Marinade，确立 Solana LST 市场 1 位** 位。MEV 内含的结构性 yield 优势是决定因素。

## 6. CEX / DeFi 集成

- **CEX 集成**：在 Binance / Coinbase / Kraken 等 JTO spot 上市（2023-12 launch 之后不久）
- **DeFi 集成**：在 Marginfi / Kamino / Drift 等 Solana lending 中作为 JitoSOL collateral 被广泛采用
- **Raydium / Orca 池**：JitoSOL / SOL 对是 Solana DEX 上最大级别的 LST 流动性池
- **Restaking**：自 2024  起以 Jito Restaking 模块引入 LRT 概念，正在 Solana 上构建 AVS 经济

## 7. 主要事件・沿革

- **2021–2022**：Jito Labs 开始开发 Solana validator MEV 客户端
- **2022  期间**：JitoSOL 上线（开始提供 liquid staking）
- **2023-08**：Jito-Solana client 获得 Solana validator stake 的过半数
- **2023-12-07**：JTO airdrop launch，$165M 规模的追溯性分发
- **2024**：在 Solana LST 市场 JitoSOL 获得首位
- **2024–2025**：Jito Restaking 模块展开，引入 LRT 概念
- **2026**：在 Solana ETF 讨论中亦出现含 JitoSOL 的 ETF 提案（在公开资料范围内）

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana 生态系统
- [[exchanges/dex-raydium-solana]] — Solana 主要 DEX
- [[exchanges/dex-orca-solana]] — Solana 主要 DEX
- [[exchanges/INDEX]] — 交易所域索引
- [[exchanges/global-cex-top10-comparison]] — JTO 上市的 CEX
- [[exchanges/amm-design-evolution]] — AMM 设计（LST 流动性的语境）

## Sources

- 公开信息整理 (Jito Foundation 官方 docs, jito.network)
- 公开信息整理 (Jito Labs MEV-aware validator client 规格 / Block Engine docs)
- 公开信息整理 (DefiLlama JitoSOL 仪表盘 TVL)
- 公开信息整理 (JTO airdrop 2023-12-07 launch event 官方)
- 公开信息整理 (Solana Foundation validator stake distribution)

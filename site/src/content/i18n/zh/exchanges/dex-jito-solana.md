---
source: exchanges/dex-jito-solana
source_hash: b98c1984127be819
lang: zh
status: machine
fidelity: ok
title: "Jito ? Solana ?????? MEV ???????"
translated_at: 2026-05-31T03:19:56.442Z
---

# Jito ? Solana ?????? MEV ???????


## Wiki ??

????? [[exchanges/INDEX|?????]]??? [[exchanges/solana-ecosystem-dex-comparison|Solana ?? DEX ???]]?[[exchanges/dex-raydium-solana|Raydium]] / [[exchanges/dex-orca-solana|Orca]] ?? [[exchanges/amm-design-evolution|AMM ??????]] ?????

> Jito Labs（MEV 客户端）+ Jito Foundation（LST 协议）的 2  层结构 · JitoSOL（LST）· JTO（governance token, 2023-12 airdrop launch）

## 1. 协议概要

Jito 是捆绑 Solana 上**2  个不同产品的总称**：

1. **Jito-Solana validator client**?Jito Labs??? Solana ?? validator ??? MEV ?????????Solana stake ? **80%+** ????? 2026 ?????????
2. **JitoSOL**（Jito Foundation）：Liquid Staking Token（LST）。质押 SOL 并连同边际 MEV 报酬一起发行 JitoSOL
3. **JTO token**?governance??2023-12-07 airdrop launch?Solana ??????????????

- **链**：Solana L1
- **官方 URL**：jito.network
- **TVL（2024–2026）**：$2–4B 规模，Solana LST 市场的 **70%+** 由 JitoSOL 占据

## 2. JitoSOL 的设计（MEV-aware LST）

JitoSOL 与其他 Solana LST（mSOL / bSOL 等）不同，采用**将 MEV 报酬内含于 staking yield** 的设计：

- ?? LST?validator inflation + ?????? staking yield?
- JitoSOL：上述 + **MEV tips（Jito-Solana client 抽取的 block-builder tip）**
- 结果：提供比其他 LST 高 50–200 bps 的 APY（随市场波动率变动）
- 1 JitoSOL ? SOL ??????????? rebasing??? exchange-rate model?

## 3. MEV 再分配机制（Jito-Solana client）

相对于 Solana 标准 validator client（Agave），Jito-Solana client 追加了以下内容：

- **block-builder auction**：Jito Block Engine 在每个 slot 募集 bundle
- **searcher bundle submission**：MEV searcher 提交 atomic bundle（附 bid）
- **validator MEV tip**：胜出 bundle 的 tip 分配给 validator + JitoSOL staker
- **anti-front-running ??**???? mempool ? Solana ??????????

?? Solana stake ? 80%+ ?? Jito-Solana client?JitoSOL ????????? Solana ?? MEV ????????

## 4. JTO token / Jito DAO

- **??**?2023-12-07 airdrop launch??? Solana ???? LST staker?MEV searcher?validator ?
- **总供给**：1B JTO
- **??**?community ? 34.3%?ecosystem development ? 25%?investors ? 16.2%?core contributors ? 24.5%
- **??**?? Jito DAO ? Realms ???????
- **2024?2026 ???**?Jito Restaking ??? Solana ??? LRT ?????? Jito Network ??

## 5. 在 Solana LST 市场的定位

| LST | TVL | 设计 | MEV 内含 |
|---|---|---|---|
| **JitoSOL** | $2–4B | exchange rate, MEV-aware | ○（核心差异化点） |
| mSOL (Marinade) | $0.8–1.5B | exchange rate, 分散 staking | × |
| bSOL (BlazeStake) | $200–400M | exchange rate | × |
| INF (Sanctum Infinite) | $300–600M | LST 集合体（meta-LST） | △（取决于构成 LST） |

JitoSOL ? **2024 ??? Marinade??? Solana LST ?????**?MEV ????????????????

## 6. CEX / DeFi 集成

- **CEX ??**?JTO ? Binance / Coinbase / Kraken ? CEX ???2023-12 launch ????
- **DeFi ??**?JitoSOL ? Marginfi / Kamino / Drift ? Solana lending ?????????
- **Raydium / Orca 池**：JitoSOL / SOL 对是 Solana DEX 上最大级别的 LST 流动性池
- **Restaking**：自 2024  起以 Jito Restaking 模块引入 LRT 概念，正在 Solana 上构建 AVS 经济

## 7. 主要事件・沿革

- **2021–2022**：Jito Labs 开始开发 Solana validator MEV 客户端
- **2022 ??**?JitoSOL ??????? liquid staking
- **2023-08**?Jito-Solana client ?? Solana validator stake ????
- **2023-12-07**?JTO airdrop launch???? 165M ??
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

- ???????Jito Foundation ?????jito.network?
- ???????Jito Labs MEV-aware validator client ?? / Block Engine ???
- 公开信息整理 (DefiLlama JitoSOL 仪表盘 TVL)
- ???????JTO 2023-12-07 airdrop launch event ?????
- ???????Solana Foundation validator stake distribution?

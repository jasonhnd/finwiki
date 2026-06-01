---
source: fintech/tokenized-mmf-wisdomtree-hashnote
source_hash: 7993916faa2000fa
lang: zh
status: machine
fidelity: ok
title: "Tokenized MMF 扩展：WisdomTree WTGXX x Hashnote USYC 的第二梯队矩阵"
translated_at: 2026-05-31T11:13:44.851Z
---

# Tokenized MMF 扩展：WisdomTree WTGXX x Hashnote USYC 的第二梯队矩阵

## Wiki 路线

本条目位于 [[fintech/INDEX|金融科技索引]]。请与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]（第一梯队 leader）、[[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI]]、[[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 配套阅读，以覆盖 tokenized MMF / tokenized RWA 全矩阵；并与 [[fintech/circular-reserve-asset-flywheel-overview|准备金相互锁定飞轮]] 配套阅读，以理解 tokenized MMF 作为稳定币收益基础设施的系统角色。

> [!info] TL;DR
> Tokenized MMF 市场在 2026-Q2 突破 **80 亿美元 AUM**，但集中度仍然极高：BUIDL（25.8 亿美元）+ BENJI（8 亿美元）+ ONDO OUSG（6 亿美元）+ FOBXX（Franklin OnChain U.S. Government MMF）占据 60% 以上。第二梯队包括 WisdomTree **WTGXX**、Hashnote **USYC**、Superstate USTB、Centrifuge / Backed 等小型方案。本页关注第二梯队的比较矩阵、路径分类，以及 Circle 收购 Hashnote 后把 tokenized MMF 直接转化为 USDC yield 模块的结构影响。

## 关键事实

- Tokenized MMF 总市场约 **80 亿美元以上 AUM**（2026-Q2），较 2024-Q1 的约 10 亿美元增长约 8 倍。^[extracted]
- 第一梯队：BUIDL **25.8 亿美元**（Moody's Aaa-mf）+ BENJI **8 亿美元** + ONDO OUSG **6 亿美元** + FOBXX（Franklin）。^[extracted]
- 第二梯队：**WisdomTree WTGXX**（约 2 亿美元，主要位于 WisdomTree Prime wallet 内）、**Hashnote USYC**（峰值约 10 亿美元，2024-12 被 Circle 收购）、**Superstate USTB**（约 1.5 亿美元）、Centrifuge / Backed 等。^[extracted]
- **2024-12 Circle 收购 Hashnote**，对价约 2 亿美元以上现金加股票；USYC 进入 Circle 产品线，并在 2025-Q1 被整合为 **USDC.YS**（USDC + yield，USYC 作为 yield engine）。^[extracted]
- WisdomTree Prime 是 WisdomTree 自营的零售 tokenized asset wallet + brokerage，在 SEC 监管框架下提供 WTGXX on-chain share。^[extracted]
- Moody's Aaa-mf 评级：BUIDL 与 FYHXX（Fidelity）于 2026-05-13 同日获得；WTGXX / USYC / FOBXX 的评级路径不同。^[extracted]
- 监管路径：BUIDL = Reg D 506(c) private；WTGXX = 2a-7 注册公募，可面向零售；USYC = Reg D private，偏机构。^[extracted]

## 机制

第二梯队 tokenized MMF 的核心差异化，是避开 BUIDL 已经占据的“机构 + private + Reg D”主战场，改走零售、chain-native、yield-bearing-stablecoin 等差异化路径：

| 产品 | 发行 / 合作方 | 监管路径 | 主要使用者 | 战略解读 |
|---|---|---|---|---|
| BUIDL | BlackRock + Securitize | Reg D 506(c) private | 机构 + stablecoin issuer 准备金 | 主导者，yield infrastructure |
| BENJI / FOBXX | Franklin Templeton | 2a-7 注册公募 | Franklin Prime wallet + Coinbase | retail-friendly，多链命名 |
| ONDO OUSG | Ondo Finance | Reg D | crypto-native institutions | DeFi 集成较深 |
| **WTGXX** | WisdomTree | 2a-7 注册公募 | WisdomTree Prime wallet | 零售友好 + brokerage 一体 |
| **USYC** | Hashnote -> Circle（2024-12） | Reg D | 整合进 USDC yield 产品 | 直接实现“USDC + yield”组合 |
| Superstate USTB | Superstate | Reg D | crypto-native institutions | 早期阶段 |

WisdomTree Prime + WTGXX 是“传统 asset manager 直接 tokenized MMF + 自营零售 wallet”路径，与 [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton]] 路线相似，但更前置零售端。Hashnote USYC 的特殊性在于：它由 crypto-native asset manager 发行，曾主要作为 [[fintech/frax-frxusd-defi-stablecoin|Frax]]、Ethena USDtb、Sky USDS 等 DeFi 协议的准备金。**Circle 在 2024-12 收购 Hashnote**，意味着 Circle 从“纯 stablecoin 发行方”转向“stablecoin + yield engine 一体化”，形成与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 的直接竞争关系。

USDC.YS（2025-Q1 launch）是 USDC + USYC yield 的产品包装。它试图在 GENIUS Section 501“stablecoin 不得直接付息”的限制下，通过“USDC 持有 + 同步取得独立 USYC share”的结构实现近似 yield-bearing USDC 的效果，与 [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]] 模型互为镜像。

## 起源与演进

2022-2023 年的 RWA tokenization 第一波中，MakerDAO 将 DAI 准备金配置到 short UST，但市场份额仍由 OUSG / USDM（Mountain Protocol）等小型方案构成。**2024-03 BUIDL launch** 是行业转折点，BlackRock 将 tokenized MMF 推上机构主战场。2024-Q3，WisdomTree Prime 公布 WTGXX 的 on-chain share。**2024-12 Circle 收购 Hashnote** 是第二个关键事件，Circle 内制化 yield engine，并降低对 BUIDL 的依赖。2025-Q1，Circle launch **USDC.YS**。2025-Q3，Superstate USTB 跨入 Solana，并与 ONDO OUSG 在 DeFi 集成上竞争。**2025-09 GENIUS Act 施行** 后，合规 yield-bearing 产品更可能沿着“stablecoin + 独立 MMF share”的二位一体结构发展，从而直接利好第二梯队 tokenized MMF。2026-05-13，BUIDL + FYHXX 同日取得 Moody's Aaa-mf，第一梯队进一步制度化。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki 索引]]
- [[fintech/INDEX|金融科技索引]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL stablecoin issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance OUSG / RUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|准备金相互锁定飞轮]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act Section 501]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/portfolio-winner-structure-arm-analog|组合赢家结构]]
<!-- /wiki-links:managed -->

## Sources

- https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx — WisdomTree WTGXX 产品页
- https://www.wisdomtree.com/insights/wisdomtree-prime — WisdomTree Prime wallet 介绍
- https://www.usyc.com/ — USYC 产品页（Hashnote 发起，现 Circle 旗下）
- https://www.hashnote.com/ — Hashnote（Circle 子公司）主页
- https://www.circle.com/blog/circle-acquires-hashnote — Circle 收购 Hashnote 官方公告
- https://www.coindesk.com/business/2024/circle-hashnote-acquisition-usyc — CoinDesk 报道
- https://www.sec.gov/Archives/edgar/data/wisdomtree-prime — WisdomTree Prime SEC filing

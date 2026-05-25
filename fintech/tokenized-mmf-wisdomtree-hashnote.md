---
title: Tokenized MMF 扩展 · WisdomTree WTGXX × Hashnote USYC · BUIDL 以外的第二梯队矩阵
aliases: [tokenized-mmf-wisdomtree-hashnote, WTGXX, USYC, Hashnote USYC, WisdomTree WTGXX, second-tier tokenized MMF]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, tokenization, mmf, wisdomtree, hashnote, usyc, wtgxx, rwa, second-tier, comparison-matrix]
status: candidate
sources:
  - https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx
  - https://www.wisdomtree.com/insights/wisdomtree-prime
  - https://www.usyc.com/
  - https://www.hashnote.com/
  - https://www.circle.com/blog/circle-acquires-hashnote
  - https://www.sec.gov/Archives/edgar/data/wisdomtree-prime
  - https://www.coindesk.com/business/2024/circle-hashnote-acquisition-usyc
---

# Tokenized MMF 扩展 · WisdomTree WTGXX × Hashnote USYC · BUIDL 以外的第二梯队矩阵

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] (leader 第一梯队) and [[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] for the full tokenized-MMF and tokenized-RWA matrix, and with [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮]] for the systemic role tokenized MMF plays as stablecoin yield infrastructure.

> [!info] TL;DR
> Tokenized MMF 市场 2026-Q2 已突破 **$8B AUM** 总规模, 但**集中度仍极高**: BUIDL ($2.58B) + BENJI ($800M) + ONDO OUSG ($600M) + FOBXX (Franklin OnChain US Government MMF) 占 60%+。**第二梯队**: WisdomTree **WTGXX** (在 WisdomTree Prime 钱包内 tokenized) + Hashnote **USYC** (2024-12 被 Circle 收购,2025 整合入 USDC yield 产品 USDC.YS) + Superstate USTB + Centrifuge / Backed 等小型方案。本条目是这个第二梯队的"比较矩阵 / 路径分类",**核心问题 = "BUIDL 占主导但谁是第二、第三、第四"**,以及 Circle 通过收购 Hashnote 把"代币化 MMF 直接做成 USDC 的 yield 模块"的结构性影响。

## Key facts

- Tokenized MMF 总市场 ~**$8B+** AUM (2026-Q2) · 较 2024-Q1 (~$1B) 增长 8 倍 ^[extracted]
- 第一梯队: BUIDL **$2.58B** (Moody's Aaa-mf) + BENJI **$800M** + ONDO OUSG **$600M** + FOBXX (Franklin) ^[extracted]
- 第二梯队: **WisdomTree WTGXX** (~$200M, 主要在 WisdomTree Prime 钱包内), **Hashnote USYC** (~$1B 峰值, 2024-12 被 Circle 收购), **Superstate USTB** (~$150M), Centrifuge / Backed 等 ^[extracted]
- **2024-12 Circle 收购 Hashnote** (~$200M+ 现金 + 股票) → USYC 整合入 Circle 产品线 → 2025-Q1 推出 **USDC.YS** (USDC + yield, USYC 作为 yield 引擎) ^[extracted]
- WisdomTree Prime: WisdomTree 自营的 retail tokenized 资产钱包 + brokerage, SEC 监管下提供 WTGXX 链上份额 ^[extracted]
- Moody's Aaa-mf 评级: BUIDL + FYHXX (Fidelity) 同日 (2026-05-13) 授评 · WTGXX / USYC / FOBXX 评级路径不同 ^[extracted]
- 监管路径: BUIDL = Reg D 506(c) 私募, WTGXX = 2a-7 注册公募 (零售可买), USYC = Reg D 私募 (机构) ^[extracted]

## Mechanism / How it works

第二梯队 tokenized MMF 的核心差异化 = **绕开 BUIDL 已占领的"机构 + 私募 + Reg D"主战场, 走零售 / 链原生 / yield-bearing-stablecoin 等差异化路径**:

| 方案 | 发行人 | 监管路径 | 主要分销 | 差异化 |
|---|---|---|---|---|
| BUIDL | BlackRock + Securitize | Reg D 506(c) 私募 | 机构 + SC issuer 储备 | 主导, "yield 基础设施" |
| BENJI / FOBXX | Franklin Templeton | 2a-7 注册公募 | Franklin Prime 钱包 + Coinbase | retail-friendly, multi-chain naming |
| ONDO OUSG | Ondo Finance | Reg D | crypto-native institutions | DeFi 集成深 |
| **WTGXX** | WisdomTree | 2a-7 注册公募 | WisdomTree Prime 钱包 | 零售友好 + brokerage 一体 |
| **USYC** | Hashnote → Circle (2024-12) | Reg D | 整合进 USDC yield 产品 | 直接做"USDC + yield" 整合 |
| Superstate USTB | Superstate | Reg D | crypto-native institutions | 早期阶段 |

WisdomTree Prime + WTGXX 是 **"传统 asset manager 把 MMF 直接 tokenize + 自营 retail wallet"** 路径,模拟 [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton]] 但更前置 retail. **Hashnote USYC 的特殊性**: USYC 在 2024 年是 crypto-native asset manager (前 Cumberland 团队) 发行的 tokenized MMF, 主要被 [[fintech/frax-frxusd-defi-stablecoin|Frax]] / Ethena USDtb / Sky USDS 等 DeFi 协议作为储备使用. **2024-12 Circle 以 ~$200M 收购 Hashnote** = Circle 完成从"纯 SC 发行人"向"SC + yield engine 一体" 的关键转型, 与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 形成直接竞争 (Circle 内化 yield infra vs Circle 持有 BUIDL 作为 LP 的旧路径)。

USDC.YS (2025-Q1 上线) = USDC + USYC yield 的产品包装, **绕开 GENIUS §501 "SC 不得直接付息" 限制** 的方式 — USDC 本身仍非 yield-bearing, 但用户可以一键申购 "USDC 持有 + 同时获 USYC 份额" 的产品包, 实际效果是 yield-bearing USDC, 与 [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]] 模式互为镜像。

## Origin & evolution

2022-2023 RWA tokenization 第一波 (MakerDAO 把 DAI 储备配置到 short UST), 但份额仍以 OUSG / USDM (Mountain Protocol) 等小型方案为主. **2024-03 BUIDL 上线** = 行业转折点, BlackRock 把 tokenized MMF 推到机构主战场. 2024-Q3 WisdomTree Prime 公开 WTGXX 链上份额 (主要在以太坊). **2024-12 Circle 收购 Hashnote** = 第二个关键事件, Circle 把"yield engine" 内化, 消除依赖 BUIDL 的风险. 2025-Q1 Circle 推出 **USDC.YS** = USDC + USYC 一键申购产品. 2025-Q3 Superstate USTB 跨 Solana, 与 ONDO OUSG 在 DeFi 集成上竞争. **2025-09 GENIUS Act 实施** → "SC 不得直接付息" 让 yield-bearing 路径必须走"SC + 独立 MMF 份额" 二合一产品包结构, **直接利好第二梯队 tokenized MMF** (因为成为合规 yield-bearing 产品的必要组件). 2026-05-13 BUIDL + FYHXX 同日获 Moody's Aaa-mf, 第一梯队进一步制度化. 2026-Q1 整体市场 $8B+ AUM, 仍是早期阶段 (vs 美国 MMF 总市场 $7T)。

## Counterpoints

第二梯队 tokenized MMF 的"竞争 BUIDL"叙事可能过早 —— BUIDL 已被 CME / Binance / Deribit / Crypto.com 接受为衍生品 IM collateral, **网络效应已建立**, 第二梯队的 WTGXX / USYC 在机构 IM 场景渗透有限。Circle 收购 Hashnote 后 USYC 与 BUIDL 在 Circle 内部存在路径冲突 (Circle 此前是 BUIDL 早期最大 LP 之一), Circle 是否会从 BUIDL 撤资还是双线持有,2026-2027 数据将决定。WisdomTree Prime 钱包用户基数 (~ 数十万) 与主流 brokerage (Schwab / Fidelity / Robinhood) 比仍小, WTGXX 增长上限受 Prime 钱包获客能力约束。监管侧: OCC/FRB 2026+ 可能新增"单一代币化 MMF 不得超 SC 储备金 X%" cap, 直接限制任何一家代币化 MMF 的"yield 基础设施"地位 (对头部 BUIDL 影响最大, 但同时也限制第二梯队的天花板)。

## Open questions

USDC.YS (Circle USDC + USYC) 在 2026-2027 能否突破 $10B AUM 成为 "GENIUS-compliant yield-bearing SC" 的事实标准?WisdomTree Prime + WTGXX 是否会被 Schwab / Fidelity 等主流 brokerage 直接复制, 还是 WisdomTree 利用 first-mover 优势锁定 retail 链上 MMF 市场?BUIDL 占代币化 MMF 市场 30-40% 的 2030 预测是否仍然成立, 还是第二梯队合计份额会反超?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance OUSG/RUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/portfolio-winner-structure-arm-analog|组合赢家结构]]
<!-- /wiki-links:managed -->

## Sources

- https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx — WisdomTree WTGXX 产品页
- https://www.wisdomtree.com/insights/wisdomtree-prime — WisdomTree Prime 钱包介绍
- https://www.usyc.com/ — USYC 产品页 (Hashnote 出品, 现 Circle 旗下)
- https://www.hashnote.com/ — Hashnote (Circle 子公司) 主页
- https://www.circle.com/blog/circle-acquires-hashnote — Circle 收购 Hashnote 官方公告
- https://www.coindesk.com/business/2024/circle-hashnote-acquisition-usyc — CoinDesk 报道
- https://www.sec.gov/Archives/edgar/data/wisdomtree-prime — WisdomTree Prime SEC 申报

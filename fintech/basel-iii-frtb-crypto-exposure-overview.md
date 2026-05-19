---
title: Basel III FRTB 加密敞口 · BCBS SCO60 1,250% 风险加权概览
aliases: [basel-iii-frtb-overview, BCBS SCO60, crypto risk weight, 1250 RW]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, basel, bcbs, frtb, bank, capital-requirement]
sources: []
status: candidate
---

# Basel III FRTB 加密敞口 · BCBS SCO60 1,250% 风险加权概览

> [!info] TL;DR
> BCBS(巴塞尔银行监管委员会)2022-12 发布《Prudential treatment of cryptoasset exposures》标准(SCO60),将加密资产分两组:**Group 1**(合规 tokenization 或满足条件的 stablecoin)适用既有风险加权 5-100% · **Group 2**(其他加密资产含 BTC/ETH)适用 **1,250% 风险加权 + 1% exposure cap**。2025-01-01 各国 implementation 目标日。

## Key facts

- BCBS SCO60 公布:2022-12-16 ^[extracted]
- 全球 implementation 目标日:2025-01-01 ^[extracted]
- Group 2 exposure cap:Tier 1 capital 1% ^[extracted]
- 超 cap 处理:cap 上 1,250% × 2 = 等效 2,500% risk weight ^[extracted]
- EU / HK / JP / SG / CH:2025-01 至 2025-04 全面实施 ^[extracted]
- UK:2026-01-01 实施 ^[extracted]
- USA:2025-07 延至 2026-07 · 银行游说推迟 ^[extracted]
- $100 BTC exposure → Capital = $100(1:1 capital deduction) ^[inferred]

## Mechanism / How it works

**BCBS SCO60 四组分类**:
- **Group 1a (Tokenized TradFi)**:tokenized bonds/equities/commodities · 同 underlying RW(5-100%)· 例 BUIDL / OUSG / ONDO · 须 redemption + enforceability
- **Group 1b (Qualifying SC)**:充分储备 + 实时赎回 · 通过 redemption risk + basis risk(≤10bp 99% time)· 候选 USDC PPSI / EURC / USDB · 不满足 DAI / FRAX / USDT
- **Group 2a (Hedged)**:BTC/ETH 有 derivatives 对冲 · 1,250% RW + capital relief
- **Group 2b (其他)**:1,250% RW = 100% capital backing · 1% exposure cap

Basel III 公式:RWA = Exposure × Risk Weight × 12.5 · Capital = RWA × 8%。$100 BTC exposure → RWA = $100 × 1250% = $1,250 → Capital = $100,即 1:1 capital deduction。实际效果 = bank 必须用自有资本 1:1 对应 BTC 持仓 · ROE 折损 ~12.5x vs 普通信贷。USDC Group 1b 对比:reserve = T-bills + cash · 应用 T-bills risk weight 0-20% · Capital ~10% = 远便宜。

## Origin & evolution

BCBS 2019 启动加密资产 consultation,2021 第二轮 CP 引入 Group 1/2 分类雏形。2022-06 最终 CP,2022-12-16 SCO60 标准发布。各国 2024 上半年完成本国 BCBS implementation 草案,2025-01 全球落地目标。美国 Endgame 提案大型银行游说要求 BTC/ETH ETF 部分豁免,Trump 2.0 倾向 light-touch,2026-Q3 final rule 可能软化 1,250% 至 ~150-300%。

## Counterpoints

- 1,250% RW 被批评"远高于实际经济风险"(BTC 历史 30 天 VaR ≈ 50-100%,非 1,250%)
- 美国银行游说成功推迟 → 国际监管套利空间持续
- Group 1b 资格判定标准模糊化(basis risk ≤10bp 99% time)给监管裁量空间

## Open questions

- 美国 2026-Q3 final rule 是否会引入区分 ETF 持仓的"derived exposure"豁免?
- USDT 能否凭借披露改善达到 Group 1b 资格?
- BUIDL 类 RWA 是否会推动 Group 1a 标准 evolution(目前部分 token 难判定)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 战略含义]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 储备金概览]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深度]]
<!-- /wiki-links:managed -->

## Sources


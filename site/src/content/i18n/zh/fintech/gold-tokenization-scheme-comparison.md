---
source: fintech/gold-tokenization-scheme-comparison
source_hash: 979169963f8df2d3
lang: zh
status: machine
fidelity: ok
title: "日本代币发行方案比较"
translated_at: 2026-05-31T06:16:15.663Z
---

# 日本代币发行方案比较

> [!info] TL;DR
> 在日本发行实物资产支撑代币时，主要存在3种方案。

## 方案A: 加密资产型
- 依据资金结算法（→ [[fintech/japan-financial-regulation|日本金融規制]]）
- 由加密资产交换业者（CAESP）负责上市·流通（CEX 侧典型全貌参见 [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX 預金トークン/SC 統合]]）
- 上市后流动性高
- 监管相对明确
- 适合：流动性优先·利用现有交易所

## 方案B: 证券型代币（ST）型
- 依据金融商品交易法中的电子记录转移有价证券表示权利等
- 通过 PTS（私设交易系统）或经办业者流通
- 机构投资者可接入（参照: [[exchanges/rwa-tokenization-cex-integration|CEX RWA トークン化統合]]）
- 合规负担较重
- 适合：面向机构投资者·大额交易

## 方案C: 信托型
- 依据信托业法的受益权代币化
- 需与信托银行合作（同类 SC 设计参见 [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]）
- 投资者保护力度最强
- 设计自由度高，但组成耗时
- 适合：保守型方案·有信托银行合作方

## 选择标准

方案选择取决于以下因素:
1. 目标投资者群体（零售 vs 机构）
2. 流动性要求（即时上市 vs 长期持有）
3. 监管合规成本承受能力
4. 是否有合作金融机构

参照: [[fintech/japan-financial-regulation|日本金融規制]] · 稳定币侧的制度配置参见 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
<!-- /wiki-links:managed -->

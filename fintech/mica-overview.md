---
title: 欧盟 MiCA · Markets in Crypto-Assets Regulation 概览
aliases: [mica-overview, MiCA EU, EU stablecoin regulation]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, eu, stablecoin, mica]
sources: []
status: candidate
---

# 欧盟 MiCA · Markets in Crypto-Assets Regulation 概览


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> MiCA 是欧盟统一加密 / 稳定币监管法律,2023-06 通过,2024-06 SC(ART / EMT)部分生效,2024-12 全面生效。MiCA 与美国 GENIUS Act §501 协同形成 U.S.-EU MRA 基础。它是三圆 MRA 的欧盟支柱,将欧洲变成 USDC / EURC 双轨合规市场。

## Key facts

- MiCA 2023-06 通过 / 2024-12 全面生效 ^[extracted]
- 第一批 MiCA EMT 持牌方约 10-15 家 ^[extracted]
- EURC 2026 流通约 €200-500M(vs USDC $60B+,欧元市场极小)^[extracted]
- 大型 ART > €5B 的 issuer 限制条款抑制 USDT 类美元 SC 在欧盟扩张 ^[extracted]
- USDT 在欧盟份额 2024-12 ~28% → 2026-05 ~3% ^[extracted]
- algorithmic stablecoins MiCA 明文禁止(UST 崩盘后果)^[extracted]
- ESMA Q&A 2.7:无 issuer 的 DAI/USDS/LUSD 不落入 MiCA 但也不能 offer to public ^[extracted]

## Mechanism / How it works

**MiCA 双类型 SC 框架**:
| 类型 | 名称 | 监管层级 | 例子 |
|---|---|---|---|
| EMT(E-Money Token) | 锚定单一法币 | EBA + 国家央行 | USDC(Circle Europe) / EURC / PYUSD |
| ART(Asset-Referenced Token) | 锚定一篮子资产 / 多法币 | EBA(特殊监管) | 几乎无大规模合规 ART |

**关键洞察**:MiCA 把稳定币按"是否锚定单一法币"分类,**实际上把多数项目逼成 EMT**。ART 监管负担过重 → 几乎无人采用。这与 GENIUS §501 的"链级 Denylist 强制" 是同构的——用规则塑形产品。MiCA CASP 牌照的具体实施细节见 [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概览]],与 HK / SG / JP 的横向对比见 [[exchanges/global-vasp-regulatory-comparison-matrix|全球 VASP 监管比较矩阵]]。

**核心条款**:储备金 100% 储备(短期国债 + 央行存款)+ 储备金第三方托管 + 月度审计披露 + 发行方在欧盟有实体 + 资本要求 + 流通额上限(大型 ART > €5B 限制 + 大型 EMT 部分限制)+ 白名单(仅 EU 持牌发行方可在欧盟商业流通)+ 与 GENIUS §501 协同(需有 freeze 能力 + AML/CFT)。

## Origin & evolution

MiCA 2020-09 EU Commission Digital Finance Package 一部分提案。2023-06 通过(Regulation (EU) 2023/1114)。2024-06 SC 部分(ART / EMT)生效。2024-12 全面生效。受压玩家:Tether / USDT(MiCA 不接受 + Article 17 大型 SC 限制 → 欧盟流通额受限)· DAI / LUSD / FRAX(无发行方的 SC 受限)· algorithmic stablecoins(UST 崩盘后果 · 明文禁止)。受益玩家:Circle(USDC EU + EURC 双品牌覆盖)· Société Générale(STBL EUR 锚定)· BBVA / Santander(拟发欧元 SC)· MiCA 合规交易所(Kraken / Bitstamp / Coinbase EU)。MiCA 与 [[fintech/dora-eu-digital-operational-resilience-overview|DORA]] 形成"业务 + 韧性"双轨监管框架。

## Counterpoints

- ART 实质失败 · 监管负担过重 · 市场用脚投票
- EURC 流通规模与 USDC 差异 ~300x · 欧元 SC 市场仍小
- USDT 退出欧盟主流市场后转向 HK 申请 + 灰色市场

## Open questions

- USA-EU MRA(2026-Q3)签署时点?
- 欧元 SC 市场是否会在 2027-2028 显现 MiCA 合规优势?
- Tether HK 申请后是否会曲线进入欧盟(via HK MRA)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深度]]
- [[fintech/mica-cross-border-implications|MiCA 跨境含义]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
<!-- /wiki-links:managed -->

## Sources


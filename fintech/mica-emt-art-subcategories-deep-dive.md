---
title: MiCA EMT vs ART 子分类深度 · 监管负担塑形产品
aliases: [mica-emt-art, MiCA EMT vs ART, Significant EMT, MiCA reserve composition]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, eu, mica, emt, art, stablecoin]
sources: []
status: candidate
---

# MiCA EMT vs ART 子分类深度 · 监管负担塑形产品


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> MiCA 把稳定币精细分为 EMT(单一法币锚定)与 ART(多资产/多币锚定),表面是分类技术,实际是**用监管负担塑形产品**——把多数项目逼成 EMT,让 ART 几乎无人采用。USDC/USDT 适用 EMT,BUIDL 类多资产基金型适用 ART。**MiCA EMT 的 ≥ 30% 银行存款要求是与 GENIUS Act ≤ 50% 银行存款 / ≤ 93 天 T-bill 的关键差异**,这是跨大西洋 MRA(2026-Q3)必须调和的技术鸿沟。

## Key facts

- MiCA 三层:Regulation (EU) 2023/1114(L1)+ EBA/ESMA RTS/ITS(L2)+ Q&A/Guidelines(L3)^[extracted]
- 2024-12-30:MiCA 全面生效 ^[extracted]
- 已持牌 EMT issuer(2026-05):Circle EU / Société Générale-Forge / Banking Circle / Membrane / Quantoz / Schuman / StablR / Crypto.com(共 8 家)^[extracted]
- 几乎无 ART · 监管负担过重 · 市场用脚投票 ^[extracted]
- USDT 在欧盟份额:2024-12 ~28% → 2026-05 ~3% ^[extracted]
- Significant EMT/ART 阈值:Outstanding ≥ €700M · 或 30 天日均交易量 ≥ €500M · 或 holder ≥ 1M ^[extracted]
- USDC 2025-09 起被列为 Significant EMT · 欧盟唯一 ^[extracted]
- Reserve 差异 vs GENIUS:MiCA ≥ 30% 银行存款 · GENIUS 限 ≤ 50% 存款 + ≤ 93 天 T-bill ^[extracted]

## Mechanism / How it works

**EMT(E-Money Token · Article 3(1)(7))**:锚定单一官方法币(1:1)· Issuer 必须持 EMI 或 credit institution 牌照(EU Directive 2009/110/EC)· Reserve ≥ 30% 银行存款(Article 36(1)(a))+ 余额高流动性低风险资产 · Bankruptcy-remote segregation · 典型 USDC(Circle Europe)/ EURC / EURI / EURCV / EURØP。

**ART(Asset-Referenced Token · Article 3(1)(6))**:锚定"any other value or right or combination thereof"(多币篮子 / 商品篮子 / 多资产)· EBA 直接监管(不是国家 NCA)· Reserve composition 按 reference asset 比例持有 · Quarterly audit + monthly reserve attestation · 典型 XAUT(黄金)/ 已停的 Diem/Libra / 理论上 BUIDL 类多资产型。

**Significant EMT/ART 阈值**(EBA RTS 2025-01-22):Outstanding ≥ €700M,或 30 天日均交易量 ≥ €500M,或 holder ≥ 1M。任一即由 EBA 直接监管 + 更严资本要求 + stress testing。USDC 2025-09 起被列为 Significant EMT(欧盟唯一)。

**Reserve 关键差异 vs GENIUS Act**:MiCA ≥ 30% 银行存款 + 允许较长期国债;GENIUS 限 ≤ 93 天 T-bill + 上限 50% 存款 → MRA 必须互认。这是 USDC 估值溢价于 USDT 的核心结构性原因(USDC 同时满足三圆合规)。EMT 流通的二级市场 CASP 牌照配套见 [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概览]]。

## Origin & evolution

MiCA 双类型设计起源于 2020-09 EU Commission Digital Finance Package。2023-06 Regulation (EU) 2023/1114 通过明确 EMT / ART 二分。2024-12-30 全面生效后市场用脚投票:8 家持牌 EMT 但几乎无 ART → 监管负担塑形产品成功。USDT 既不是 EMT(无 EMI 牌照)也不是 ART(reserve composition 不达标)→ 欧盟撤退。Membrane Finance 收购 Tether 谈判 2025-08 破裂 = 欧盟入路彻底关闭。日本侧的 EPI 三型对应版见 [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]]。

## Counterpoints

- ART 实质失败 · MiCA 设计意图是双轨但实际单轨(EMT only)
- ≥ 30% 银行存款要求与 GENIUS ≤ 50% 形成 reserve composition 鸿沟 · MRA 调和压力大
- Significant EMT 标准触发后压力大 · 可能反向激励 issuer 控制流通规模

## Open questions

- BUIDL 是否会被强制按 ART 申报(目前 secondary 流通规避)?
- USA-EU MRA 是否会重新协调 reserve composition(GENIUS vs MiCA 鸿沟)?
- Sky DAO 解散 MakerDAO Foundation 后的法律实体定性是否会影响 MiCA Q&A 2.7 解释?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-overview|MiCA 概览]]
- [[fintech/mica-cross-border-implications|MiCA 跨境含义]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
<!-- /wiki-links:managed -->

## Sources


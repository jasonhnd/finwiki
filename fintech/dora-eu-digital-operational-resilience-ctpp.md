---
title: DORA CTPP 第三方风险 · 把 AWS/Anchorage 间接纳入金融监管
aliases: [dora-ctpp, DORA critical third-party provider, cloud crypto custody EU]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, law, regulation, eu, dora, ctpp, cloud, custody, mica]
sources:
  - https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2554
  - https://www.esma.europa.eu/policy-activities/digital-finance/digital-operational-resilience-act-dora
  - https://www.eba.europa.eu/regulation-and-policy/operational-risk
  - https://aws.amazon.com/financial-services/security-compliance/
status: candidate
---

# DORA CTPP 第三方风险 · 把 AWS/Anchorage 间接纳入金融监管


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> DORA Art. 28-44 的 Critical Third-Party Provider (CTPP) 机制是欧盟把 cloud / Anchorage / Coinbase Custody 等 SC 关键基础设施"间接纳入监管"的法律工具。任何欧盟 SC issuer / CASP / 托管商必须双合规(MiCA + DORA)。2026-Q2 第一批 CTPP 名单预计包括 AWS / Azure / GCP / Anchorage / Coinbase Custody / Chainalysis / TRM Labs / Fireblocks / Circle Europe。

## Key facts

- ESAs 评估 CTPP 标准:系统重要性 + 依赖度 + 可替代性 + 已识别风险 ^[extracted]
- CTPP oversight fee:€500K(中等)至 €5M(大型云)^[extracted]
- 必须设立欧盟法律实体或 EU representative ^[extracted]
- ESAs 可强制 financial entity 终止合同 ^[extracted]
- 现场检查 + 远程审查权 ^[extracted]
- 2026-Q2 预计 AWS / Azure / GCP 自动入选 ^[likely]
- Anchorage / Coinbase Custody / Fireblocks / Chainalysis / TRM Labs 进入预测名单 ^[likely]
- Circle Europe 双重身份:EMT issuer + 潜在 CTPP ^[likely]

## Mechanism / How it works

**ESAs 评估流程(DORA Art. 31)**:
- 系统重要性 + 金融机构依赖度 + 可替代性 + 已识别风险量化
- CTPP 列入后:直接由 EBA / ESMA / EIOPA Lead Overseer 监管
- 必须设立欧盟法律实体或 EU representative
- 年度 oversight fee €0.5M-€5M
- 现场检查 + 远程审查权
- ESAs 可强制 financial entity 终止合同

**实际影响链**:Circle Europe([[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT]])必须同时 DORA 合规 → 其 AWS 供应商自动成 CTPP → AWS 必须设欧盟法律实体应 ESAs 监管 → BUIDL on Solana 触达欧盟客户 → BlackRock Europe + Solana validator 都受影响。

## Origin & evolution

CTPP 概念源自 2018-2021 欧洲银行业 cloud 集中度担忧(AWS 占欧盟金融云 40%+)。EBA 2017《Recommendations on outsourcing to cloud service providers》是早期尝试。DORA 2022 通过把 CTPP 从软指引升级为硬监管。2024-07 ESAs Level 2 RTS 明确量化标准。**首次"非金融科技公司被金融监管"**:AWS / Azure / GCP 自动 CTPP → ESAs 直接监管 = 欧盟 sovereignty cloud 要求加剧(Gaia-X / EuroStack),触发 onshore data center 建设潮。配合 [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概览]] 构成欧盟加密"业务 + 韧性"双轨监管。

## Counterpoints

- AWS 等全球架构与欧盟 sovereignty 要求结构性冲突 · ESAs 执法实际能力存疑
- 中小 wallet provider 被挤出欧盟 → 寡头化加剧(双刃剑)
- 与 US OCC Heightened Standards 重复合规成本高

## Open questions

- 2026-Q2 第一批 CTPP 名单具体范围?
- ESAs 与 AWS / Azure 谈判 EU representative 的法律实体形态?
- CTPP 监管是否会扩展至 L1/L2 公链 validator / sequencer?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概览]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深度]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources


---
source: fintech/dora-eu-digital-operational-resilience-ctpp
source_hash: 9898acae9bcc86d8
lang: zh
status: machine
fidelity: ok
title: "DORA CTPP 第三方风险 · 将 AWS/Anchorage 间接纳入金融监管"
translated_at: 2026-05-31T06:16:15.725Z
---

# DORA CTPP 第三方风险 · 将 AWS/Anchorage 间接纳入金融监管

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> DORA 第 28-44  条的关键第三方服务提供商（CTPP）机制是欧盟将 cloud / Anchorage / Coinbase Custody 等稳定币重要基础设施"间接纳入监管"的法律工具。所有欧盟稳定币发行方 / CASP / 托管方均需遵守双重合规（MiCA + DORA）。预计 2026-Q2  第一批 CTPP 名单将包括 AWS / Azure / GCP / Anchorage / Coinbase Custody / Chainalysis / TRM Labs / Fireblocks / Circle Europe。

## Key facts

- ESAs 的 CTPP 评估标准：系统重要性 + 依赖度 + 可替代性 + 已识别风险 ^[extracted]
- CTPP 监管费：€500K（中等规模）～ €5M（大型云厂商） ^[extracted]
- 必须设立欧盟法人或欧盟代表机构 ^[extracted]
- ESAs 可强制金融机构终止合同 ^[extracted]
- 现场检查 + 远程审计权 ^[extracted]
- 预计 2026-Q2  AWS / Azure / GCP 将自动被列入 ^[likely]
- Anchorage / Coinbase Custody / Fireblocks / Chainalysis / TRM Labs 已在预期名单中 ^[likely]
- Circle Europe 具有双重身份：EMT 发行方 + 潜在 CTPP ^[likely]

## Mechanism / How it works

**ESAs 评估程序（DORA 第 31 条）**：
- 量化系统重要性 + 金融机构依赖度 + 可替代性 + 已识别风险
- 列入 CTPP 名单后：由 EBA / ESMA / EIOPA 指定首席监管机构直接监督
- 必须设立欧盟法人或欧盟代表机构
- 年度监管费 €0.5M-€5M
- 现场检查 + 远程审计权
- ESAs 可强制金融机构终止合同

**实际影响链**：Circle Europe（[[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT]]）同时需要遵守 DORA → 其 AWS 供应商自动成为 CTPP → AWS 需设立欧盟法人并接受 ESAs 监督 → 在 Solana 上构建 BUIDL 以触达欧盟客户 → BlackRock Europe + Solana 验证者也受到影响。

## Origin & evolution

CTPP 概念源于 2018-2021  欧洲银行业对云集中度的担忧（AWS 占据欧盟金融云超过 40%）。EBA 2017《关于将业务外包给云服务提供商的建议》是早期尝试。DORA 2022  通过后，CTPP 从软性指导升级为硬性法规。2024-07  ESAs 第 2  层 RTS 明确了量化标准。**首个"非金融科技企业被纳入金融监管"案例**：AWS / Azure / GCP 自动成为 CTPP → ESAs 直接监督 = 强化欧盟数字主权云要求（Gaia-X / EuroStack），引发境内数据中心建设热潮。与 [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概観]] 共同构成欧盟加密资产"业务 + 韧性"双轨监管。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

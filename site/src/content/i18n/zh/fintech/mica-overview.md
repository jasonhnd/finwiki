---
source: fintech/mica-overview
source_hash: a415dc804e2572d6
lang: zh
status: machine
fidelity: ok
title: "欧盟 MiCA · 《加密资产市场监管条例》概览"
translated_at: 2026-05-31T07:28:06.161Z
---
# 欧盟 MiCA · 《加密资产市场监管条例》概览

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> MiCA 是欧盟统一的加密资产 / 稳定币监管法，于 2023-06  通过，在 2024-06  对 SC（ART / EMT）部分生效，并于 2024-12  全面生效。MiCA 与美国 GENIUS Act §501  协同，构成 U.S.-EU MRA 的基础。这是三圆 MRA 的欧盟支柱，并把欧洲改造成以 USDC / EURC 为双轨的合规市场。

## Key facts

- MiCA 于 2023-06  通过，并于 2024-12  全面生效 ^[extracted]
- 第 1  波 MiCA EMT 牌照获得者约为 10-15 社 家 ^[extracted]
- EURC 在 2026-05  的流通量为 €280M（对比 USDC 在欧盟流通约 ~$8B，差距从 300x 缩小到约 20x）^[extracted]；详见 [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026-05]] 与 [[fintech/circle-usdc-stablecoin|Circle USDC / EURC issuer]]
- 对大型 ART（> €5B）的发行人限制条款抑制了 USDT 这类美元系 SC 在欧盟扩张 ^[extracted]
- USDT 在欧盟的份额从 2024-12  的约 28% 降至 2026-05  的约 3% ^[extracted]
- algorithmic stablecoins 在 MiCA 下被成文明文禁止（UST 崩盘的结果）^[extracted]
- ESMA Q&A 2.7：没有明确发行人的 DAI / USDS / LUSD 不属于 MiCA 管辖，但不得向公众公开发售 ^[extracted]

## Mechanism / How it works

**MiCA 的 2  类 SC 框架**：
| 类型 | 名称 | 监管层级 | 例子 |
|---|---|---|---|
| EMT（E-Money Token） | 单一法币锚定 | EBA + 国家中央银行 | USDC（Circle Europe）/ EURC / PYUSD |
| ART（Asset-Referenced Token） | 篮子资产 / 多法币锚定 | EBA（特殊监管） | 几乎没有大型合规 ART |

**关键洞察**：MiCA 以“是否锚定单一法币”来分类稳定币，并把**绝大多数项目都推入 EMT 轨道**。ART 的监管负担过重，因此几乎无人采用。这与 GENIUS §501  在链级执行 denylist 的逻辑同型，也就是用规则来塑造产品形态。MiCA CASP 牌照的具体落地细节见 [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概要]]；与 HK / SG / JP 的横向比较见 [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]]。

**核心条款**：准备金采用 100%（短期国债 + 中央银行存款）+ 第三方托管准备金 + 月度审计披露 + 发行人必须在欧盟内拥有实体 + 资本要求 + 流通量上限（大型 ART > €5B 限制 + 部分大型 EMT 限制）+ 白名单（仅欧盟持牌发行人可在欧盟进行商业流通）+ 与 GENIUS §501  协同（必须具备冻结功能 + AML/CFT）。

## Origin & evolution

MiCA 最初作为 2020-09  欧盟委员会 Digital Finance Package 的一部分被提出，并于 2023-06  以 Regulation (EU) 2023/1114 通过。SC 部分（ART / EMT）于 2024-06  生效，完整制度于 2024-12  生效。施压方包括 Tether / USDT（MiCA 不接纳 + Article 17  对大型 SC 的限制导致欧盟流通受限）、DAI / LUSD / FRAX（无发行人 SC 限制）以及 algorithmic stablecoins（UST 崩盘后被明文禁止）。受益方包括 Circle（USDC EU + EURC 双品牌）、Société Générale（欧元锚定 STBL）、BBVA / Santander（计划发行 EUR SC）以及 MiCA 合规交易所（Kraken / Bitstamp / Coinbase EU）。MiCA 与 [[fintech/dora-eu-digital-operational-resilience-overview|DORA]] 共同形成“业务 + 韧性”的双轨监管框架。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC issuer]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026-05]]
<!-- /wiki-links:managed -->

## Sources

---

**Last refresh**（2026-05-26）：已将 EURC 2026-05  数据（€280M）与 `eu-mica-implementation-status-2026` 同步；新增 Circle USDC 与 implementation-status 的 wikilink。

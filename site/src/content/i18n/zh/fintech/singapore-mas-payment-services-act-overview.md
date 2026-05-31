---
source: fintech/singapore-mas-payment-services-act-overview
source_hash: 8c19efe1e5db4cfc
lang: zh
status: machine
fidelity: ok
title: "新加坡 MAS Payment Services Act + SCS 框架概览"
translated_at: 2026-05-31T07:28:06.144Z
---
# 新加坡 MAS Payment Services Act + SCS 框架概览

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 新加坡 MAS Payment Services Act（2019）+ Stablecoin Framework（2023-08  SCS 类别）+ DTSP Regime（2024-04  修订）= 亚洲最完整的加密支付立法栈。SCS（Single-Currency Stablecoin）类别要求 100% reserve + daily attestation + AAA-rated assets，比 HKMA 更严格也更早。新加坡与美国财政部在 2026-03  达成 MRA，因此成为 §501(d) 下亚洲首批入榜者。

## Key facts

- PS Act 2019：6  类 payment service 的法律基础 ^[extracted]
- SCS Framework 2023-08：亚洲首个完整的 SC 子框架（比 HKMA 领先 2  年）^[extracted]
- DTSP Regime 2024-04：封闭“新加坡法人向全球客户提供服务”的灰色地带 ^[extracted]
- 主要 DPT 持牌机构（2026-05）：DBS Vickers / Independent Reserve / HashKey / Coinbase Singapore / Crypto.com / Sygnum Singapore / Anchorage Digital Singapore / StraitsX（Xfers）^[extracted]
- SCS 持牌机构：StraitsX XSGD（2023-12）/ Paxos USDP（离岸子公司申请中）^[extracted]
- 2026-03：Singapore-US MRA 达成 → §501(d) 下亚洲首批入榜 ^[extracted]
- 资本 / 流通余额门槛：S$5M（远低于 HKMA 的 HKD 100M）→ 对中型 issuer 更友好 ^[extracted]
- 税务：capital gains 0%（individual）^[extracted]

## Mechanism / How it works

**MAS 3 层加密监管栈**：
- **PS Act 2019**：6  类 payment service（Account issuance · domestic/cross-border money transfer · Merchant acquisition · e-money issuance · Digital Payment Token (DPT) service）
- **SCS Framework 2023-08**：稳定币子框架；必须锚定 SGD 或单一 G10  法币；要求 100% reserve、daily attestation、AAA-rated assets；当流通量 ≥ S$5M 时需要 MAS license；可标示为 “MAS-regulated SCS”
- **DTSP Regime 2024-04**：封堵灰色地带；覆盖“新加坡法人向海外提供服务”；强制 KYC + AML + Travel Rule

**DPT vs SCS vs USDC 的处理差异**：
- DPT service license：交易 / OTC / 钱包管理 → Major Payment Institution / Standard Payment Institution
- SCS license：发行 SGD-pegged 或 G10-pegged 稳定币 → 必须受 MAS 监管
- 新加坡境内的 USDC：通过 Circle Singapore（DPT-licensed）流通，但 USDC 本身的发行受 GENIUS §501  监管，不属于 MAS SCS

DPT 许可体系的详细机构层级见 [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT ライセンス概観]]。

## Origin & evolution

2019  PS Act 制定，确立了 6  类 payment service 的法律基础。2020-2022  DPT licensing 启动，Coinbase / Crypto.com / StraitsX 等陆续获得牌照。2023-08  SCS Framework 公布（亚洲首个完整 SC 子框架，比 [[fintech/hkma-stablecoin-licensing-overview|HKMA]] 领先 2  年）。2024-04  DTSP Regime 修订封闭了“以新加坡为枢纽向海外提供服务”的灰色地带，促使 USDT 等不合规势力退出该枢纽战略。2026-03  Singapore-US MRA 达成 → §501(d) 下亚洲首批入榜。亚洲 / 全球 VASP 横向比较见 [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリックス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 戦略的含意 + HK との対比]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコインライセンス概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/circle-usdc-stablecoin|Circle USDC issuer · DPT 流通主体]]
<!-- /wiki-links:managed -->

## Sources

---

**Last refresh** (2026-05-25): refreshed `last_tended` only; added Circle USDC cross-link as DPT-licensed flow context.

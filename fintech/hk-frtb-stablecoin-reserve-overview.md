---
title: HK FRTB 稳定币储备金要求 · HKMA Reserve Framework
aliases: [hk-frtb-reserve, HKMA stablecoin reserve, HK FRTB SA]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, law, regulation, hk, hkma, stablecoin, reserve, frtb]
sources:
  - https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/
  - https://www.legco.gov.hk/yr2024/english/bills/b202412201.pdf
  - https://www.bis.org/bcbs/publ/d457.htm
  - https://www.bis.org/bcbs/publ/d533.htm
  - https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/12/20241218-3/
status: candidate
---

# HK FRTB 稳定币储备金要求 · HKMA Reserve Framework


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> HKMA 2025-08 稳定币立法的储备金条款是亚洲第一个对标 Basel III FRTB(Fundamental Review of the Trading Book)标准的 SC reserve framework。核心要求:100% 1:1 法币储备 + Tier 1 资产(HKD/USD 短期国债 + HKMA 存款)+ 第三方托管 + 月度审计 + 资本金 HKD 100M+。与 GENIUS §501(≤ 93 天 T-bill)+ MiCA EMT(≥ 30% 银行存款)形成三圆架构第三个差异化坐标。

## Key facts

- HKMA SC 立法:2025-08 通过 Stablecoin Ordinance ^[extracted]
- 资本门槛:HKD 100M+(远高于 MAS S$5M / MiCA EMT 资本最低 €350K)^[extracted]
- 储备国债期限:≤ 1 年(介于 GENIUS 93 天 vs MiCA 无限制之间)^[extracted]
- Tier 1 严格度:与 Basel III FRTB SA 对齐 · 是亚洲第一 ^[extracted]
- 100% 1:1 法币储备(HKD-pegged 或 USD-pegged)^[extracted]
- 第三方独立托管(持牌 TCSP/Trust)+ 月度审计 + 季度公开披露 ^[extracted]
- Bankruptcy-remote segregation ^[extracted]
- 与 e-CNY 划界:不接收中国大陆零售客户 · 政治平衡硬条款 ^[extracted]

## Mechanism / How it works

**HKMA 稳定币储备金核心**:100% 1:1 法币储备(HKD / USD pegged)+ Tier 1 资产构成(HKD 现金 + HKMA 央行存款 + HKD/USD 短期国债 ≤ 1 年 + 受限比例商业票据)+ 第三方独立托管(持牌 TCSP/Trust)+ 月度审计 + 季度公开披露 + Bankruptcy-remote segregation + HKD 100M+ paid-up capital。

**FRTB 对接**:HKMA 将 SC reserve 视为银行 trading book 类资产 → 套用 Basel III FRTB SA(Standardised Approach)。市场风险资本计算:interest rate risk + currency risk + credit spread risk。这是全球首个把 SC reserve 明确纳入 Basel 资本框架的监管设计。资本计量传导到银行端的隐含 USDC vs USDT 溢价逻辑见 [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 战略含义]]。

**三圆架构对比**:
| 维度 | HKMA | GENIUS §501 | MiCA EMT |
|---|---|---|---|
| 储备比例 | 100% 1:1 | 100% 1:1 | 100% 1:1 |
| 国债期限 | ≤ 1 年 | ≤ 93 天 T-bill | 不限期限 |
| 银行存款 | 不限上限 | ≤ 50% 上限 | ≥ 30% 下限 |
| 央行存款 | HKMA 直接 | FRB master account(争议) | NCB(国家央行) |
| 资本金 | HKD 100M | OCC charter 决定 | EMI 资本 + 比例 |
| 资本框架 | Basel III FRTB | 银行法案 + PCAOB | CRR/CRD VI |

## Origin & evolution

HKMA 2022-12 启动 SC consultation,2023-12 第二轮 CP 确立 Sandbox(ZA Bank / Standard Chartered / HSBC / Animoca × HKT consortium),2025-08 通过 Stablecoin Ordinance。2026-04 HKMA Consultation Paper《Capital treatment for licensed stablecoins》直接引用 BCBS SCO60 作为母标准。2026-05-21 首批牌照决定:9 家申请,实际仅 2 张(HSBC + StanChart Anchorpoint),战略含义详见 [[fintech/hkma-stablecoin-licensing-implications|HKMA 牌照战略含义]]。亚洲 / 全球横向对照见 [[exchanges/global-vasp-regulatory-comparison-matrix|全球 VASP 监管比较矩阵]]。

## Counterpoints

- HKD 100M 门槛排除中小 issuer · 与新加坡 S$5M 形成竞争劣势
- Tier 1 严格度高 · 利润率被压缩 · 与 GENIUS §501 ≤ 93 天对比短端利率差异有限
- 与 e-CNY 划界条款政治敏感 · 北京 vs HK 国际化双重诉求矛盾

## Open questions

- 中国大陆背景大厂(JD-HKD / 蚂蚁国际 / BOCHK)获牌时点?
- HK §501(d) 入榜第三波(2027-H2)是否会延迟?
- e-CNY 离岸 CNH 窗口(2026-Q4)与 HK SC 牌照如何协同?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA 稳定币牌照概览]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概览]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources


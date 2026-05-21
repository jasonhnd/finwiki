---
title: 代币化存款累计交易规模模式 · Kinexys $1.5T 作为银行存款代币赛道锚
aliases: [tokenized deposit cumulative volume scale, $1.5T Kinexys cumulative, JPMD volume anchor, 代币化存款规模模式]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, number, economic-pattern, tokenized-deposit, kinexys, jpmd, jpmorgan, institutional-only]
sources: []
status: candidate
---

# 代币化存款累计交易规模模式 · Kinexys $1.5T 作为银行存款代币赛道锚


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 银行存款代币(deposit token)赛道与稳定币赛道是**两个互不重叠的市场**。Kinexys (JPMD) 累计交易额 $1.5T(2026-05) · 日均 $5B+ · **100% 机构客户** —— 这一规模不可与 USDC / USDT 的累计流量直接比较,因为客户层、监管层、清算层完全不同。$1.5T 是衡量"代币化存款赛道渗透率"的核心锚 —— 第二大数字美元基础设施,但服务对象是 80 家全球机构(包括 6 家央行),不是零售/DeFi 用户。

## Key facts

- Kinexys 累计交易额 $1.5T(自 2019 启动),日均 $5B+,月均 $150B+ ^[extracted]
- 客户 100% 机构 · ~80 家(含 Visa / Mastercard / Ant / 6 家央行) ^[extracted]
- JPMD = JPM Deposit Token(EUR/USD/GBP) · 走 OCC US National Bank Charter,**不属于 §501 稳定币** ^[extracted]
- 全球数字美元基础设施排名(累计): USDT $20T+(零售/灰区) > Kinexys $1.5T(机构) > USDC $1.2T(混合) ^[extracted]
- 2026-04 JPMD 在 Coinbase Base 公链上线 = 银行存款代币 ↔ 稳定币赛道首次桥接 ^[extracted]

## Mechanism / How it works

存款代币 vs 稳定币 = 两个监管赛道、两个客户层:

```
                  稳定币(§501)               银行存款代币
                  ─────────────                ─────────────────────
发行人            Circle / Stripe / Tether    JPMorgan / Citi / BNY
储备              国债 / 现金                  银行存款(FDIC 保护)
监管              GENIUS §501 / MiCA           OCC bank charter / Reg E
客户              零售 + 机构 + DeFi           机构 only
利息              不允许付持有人               允许(银行存款利息)
代表              USDC / USDT / USDB           JPMD (Kinexys) / Citi TS
```

JPMorgan 用 deposit token 绕开 §501 的"100% 国债 + 不许付利息"约束:JPMD 持有人本质是 JPM 储户,享受银行存款利息 + FDIC 保护。Kinexys $1.5T 数字证明 institutional-only 赛道的真实规模,且未来 5 年仍是银行(JPM / Citi / BNY)联合主导而非加密原生公司。

## Origin & evolution

2019 JPM Coin 启动(Onyx Coin System 私链 / Quorum 分支) · 2024 重命名 Kinexys · 2025-12 客户数达 80 家 · 2026-04 JPMD 上线 Coinbase Base 公链(首次公链桥接) · 与 BlackRock BUIDL 形成**代币化资产基础设施双核** —— BlackRock 走中立军火商(BUIDL 卖给所有 SC issuer),JPMorgan 走闭环银行(JPMD 服务 JPM 客户)。

## Counterpoints

$1.5T 累计 / 日均 $5B 数字来自 JPMorgan 自报 · 第三方独立验证有限。Kinexys 私链(Quorum)对外可观察性低,日均 $5B 可能含相当比例"内部 netting"(JPM 内部账户调账)而非真正跨机构清算。与 USDT $20T+ 直接比较有误导性 —— 灰区流量与机构清算量级不可同等比较。Citi Token Services 等竞品快速扩张,Kinexys "第二"位置在 2027-2028 可能被超越。

## Open questions

Kinexys $1.5T 中真正"跨机构清算"vs"JPM 内部 netting"的比例?JPMD 在 Base 公链上的链上可观察流量与私链流量的真实分布?Citi Token Services / BNY Mellon deposit token 累计规模(未公开)?$130B 三圆 MRA 与 deposit token 赛道的潜在桥接(JPMD 是否会接入三圆 MRA 互认)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机关投资家 SC = 预金トークン thesis]]
- [[fintech/stablecoin-revenue-split-economics|稳定币分润经济学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密原生分离]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- JPMorgan Kinexys 2025 公开披露 · OCC bank charter 监管文件

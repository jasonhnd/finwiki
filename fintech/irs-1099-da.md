---
title: IRS 1099-DA · 美国加密税务报告强制
aliases: [irs-1099-da, 1099-DA, IRS crypto tax form]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, us, irs, tax, anonymity, defi]
sources: []
status: candidate
---

# IRS 1099-DA · 美国加密税务报告强制


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> IRS Form 1099-DA(Digital Assets)是美国加密资产强制税务报告表,2025-01 生效,2026 申报年度首次落地。所有 broker(包括交易所 / 钱包 / DeFi 前端 / 部分支付通道)必须报告客户加密交易给 IRS。与 CARF(OECD 跨境)协同 = **跨境加密匿名性彻底终结**。1099-DA + CARF + GENIUS §501 链级 freeze = 三重监管闭环。

## Key facts

- IRS 1099-DA 2023 final rule + 2024 amendments + 2025-01 生效 ^[extracted]
- 2026 申报年度首次落地(2027-04 报税截止)^[extracted]
- DeFi broker 定义 2024-2026 多次修订 · 目前部分免除完全去中心化协议 ^[extracted]
- 与 CARF 协同覆盖 OECD ~50 国 ^[extracted]
- broker 涵盖:交易所 / 钱包(custodial 必须)/ DeFi 前端 / SC issuer / 支付处理商 ^[extracted]
- 报告内容:交易金额 + 时间 + 资产类型 + 客户 KYC + 成本基础 + 持有期 + 估算资本利得 ^[extracted]
- 唯一豁免:完全去中心化协议 + 无 admin key + 无前端公司 ^[extracted]

## Mechanism / How it works

**broker 定义(IRS 2023 final rule + 2024 amendments)**:
- 交易所(Coinbase / Kraken / Binance.US 等)
- 钱包服务(custodial 必须 · non-custodial 部分)
- DeFi 前端(争议 → 2026 final rule 部分免除)
- 稳定币发行方(Circle / Tether 部分)
- 支付处理商(Stripe Bridge / Privy 等)
- 跨境交易(与 CARF 协同)

**CARF 协同(跨境匿名性终结)**:
| 维度 | 1099-DA(美国境内) | CARF(OECD 跨境) |
|---|---|---|
| 适用 | 美国 broker | 全球 ~50 国 broker |
| 报告对象 | IRS | 各国税务机关互换 |
| 启动 | 2025-01 | 2026-2027 各国分批 |
| 协同 | 重叠覆盖跨境美国客户 | 闭环全球加密 KYC |

**三重监管闭环**:1099-DA(美国境内税务)+ CARF(跨境信息交换)+ GENIUS §501(链级 freeze)= 任何"加密匿名"叙事在 2026 之后已经无效。

## Origin & evolution

2014 IRS Notice 2014-21 把加密定义为 property → 强制资本利得报告。2021 Infrastructure Investment and Jobs Act 创设 1099-DA 法定基础。2023 IRS final rule + 2024 amendments 细化 broker 定义。2025-01 1099-DA 生效。2024-2026 DeFi 定义多次修订,目前部分免除完全去中心化协议。与 OECD CARF 协同(2026-2027 各国分批 implementation)= 全球加密税务透明化。

## Counterpoints

- "完全去中心化"标准模糊 · DeFi 前端公司仍需承担 broker 责任
- non-custodial 钱包定义 IRS 2026 H2 最终裁定未明
- 与 CARF 协同执法实际能力存疑 · OECD 各国节奏差异大

## Open questions

- IRS 2026 H2 对 non-custodial 钱包(MetaMask)最终裁定?
- Uniswap Labs / Aave DAO 等 DeFi 前端的 broker 责任边界?
- 印度 30% 税 + 1% TDS + 1099-DA + CARF 后印度避税通道是否完全关闭?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 加密匿名终结]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概览]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF 灰名单概览]]
<!-- /wiki-links:managed -->

## Sources


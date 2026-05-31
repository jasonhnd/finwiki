---
source: fintech/irs-1099-da
source_hash: baf08a2e3cb06a54
lang: zh
status: machine
fidelity: ok
title: "IRS 1099-DA · 美国加密资产税务申报义务化"
translated_at: 2026-05-31T06:16:15.744Z
---

# IRS 1099-DA · 美国加密资产税务申报义务化

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> IRS Form 1099-DA（Digital Assets）是美国强制加密资产税务申报表，于 2025-01  生效，从 2026 年 申报年度起全面实施。所有经纪商（含交易所、钱包、DeFi前端及部分支付渠道）均须向IRS申报客户的加密资产交易。与CARF（OECD跨境）协调 = **跨境加密资产匿名性的彻底终结**。1099-DA + CARF + GENIUS §501  的链级冻结 = 三重监控闭环。

## Key facts

- IRS 1099-DA 2023  最终规则 + 2024  修订 + 2025-01  生效 ^[extracted]
- 从 2026 年 申报年度起全面实施（2027-04  为申报截止期）^[extracted]
- DeFi经纪商的定义在 2024-2026  经过多次修订，目前完全去中心化协议已部分豁免 ^[extracted]
- 与CARF协调，覆盖OECD约 50  个国家 ^[extracted]
- 经纪商范围：交易所 / 钱包（托管型为必须）/ DeFi前端 / 稳定币发行方 / 支付处理商 ^[extracted]
- 申报内容：交易金额 + 时间 + 资产类别 + 客户KYC + 获取成本 + 持有期限 + 预估资本利得 ^[extracted]
- 唯一豁免情形：完全去中心化协议 + 无管理密钥 + 无前端公司 ^[extracted]

## Mechanism / How it works

**经纪商定义（IRS 2023  最终规则 + 2024  修订）**：
- 交易所（Coinbase / Kraken / Binance.US等）
- 钱包服务（托管型为必须 · 非托管型部分适用）
- DeFi前端（存在争议 → 2026  最终规则中部分豁免）
- 稳定币发行方（Circle / Tether部分）
- 支付处理商（Stripe Bridge / Privy等）
- 跨境交易（与CARF协调）

**与CARF协调（跨境匿名性的终结）**：
| 维度 | 1099-DA（美国境内） | CARF（OECD跨境） |
|---|---|---|
| 适用主体 | 美国经纪商 | 全球约 50  个国家的经纪商 |
| 申报对象 | IRS | 各国税务机关之间相互交换 |
| 开始时间 | 2025-01  | 2026-2027  各国分阶段实施 |
| 联动机制 | 重叠覆盖使美国客户的跨境部分也被纳入 | 形成全球加密KYC闭环 |

**三重监控闭环**：1099-DA（美国境内税务）+ CARF（跨境信息交换）+ GENIUS §501（链级冻结）= 2026 年 之后，任何"加密资产匿名性"叙事均告无效。链级执法实例详见 [[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]]。

## Origin & evolution

2014  IRS Notice 2014-21  将加密资产定义为财产 → 强制申报资本利得。2021  《基础设施投资和就业法案》为 1099-DA 创设法律依据。2023  IRS最终规则 + 2024  修订精细化经纪商定义。2025-01  1099-DA生效。2024-2026  DeFi的定义经多次修订，目前完全去中心化协议已部分豁免。与OECD CARF协调（2026-2027  各国分阶段实施，详见 [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 暗号匿名性の終焉]]）= 全球加密税务透明化。美国VASP监管全貌详见 [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 暗号匿名性の終焉]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概要]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概要]]
<!-- /wiki-links:managed -->

## Sources

---
title: FATF Travel Rule · R.16 VASP $1,000 KYC 信息传递概览
aliases: [fatf-travel-rule-overview, FATF R.16, VASP travel rule]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, fatf, travel-rule, vasp, kyc, aml]
sources: []
status: candidate
---

# FATF Travel Rule · R.16 VASP $1,000 KYC 信息传递

> [!info] TL;DR
> FATF Recommendation 16 是全球 VASP 行业 AML/CFT 统一信息传递标准 —— VASP 转账 ≥ USD/EUR 1,000 必须共享 sender + receiver KYC。把 1996 BSA Travel Rule 移植到加密。Notabene / TRISA / Sygna / TRP 等 BTS 层成为强制合规基础设施 —— 没有 Travel Rule 协议接入就没有 VASP 业务资格。

## Key facts

- FATF 1989 G7 成立 · 40 成员国 + 9 区域组织 ^[extracted]
- R.15 + R.16 加密扩展 2019-06 G20 Osaka summit ^[extracted]
- R.16 阈值:USD/EUR 1,000 全球 floor ^[extracted]
- 1996 BSA Travel Rule(31 CFR §1010.410(f))原本只覆盖 ≥ $3,000 wire ^[extracted]
- 2019-05 FinCEN FIN-2019-G001 明确 BSA Travel Rule 适用于 CVC ^[extracted]
- 2024 美国 FATF MER "Largely Compliant" ^[extracted]
- 2026-Q3 FinCEN 拟把美国阈值从 $3,000 降到 $1,000(与 FATF 对齐)^[extracted]
- Notabene + TRP 双协议覆盖 2026 年全球约 80% VASP 流量 ^[inferred]

## Mechanism / How it works

R.16 要求 VASP 转账 ≥ USD/EUR 1,000 必须共享:**Originator** name + account number / wallet address,**Beneficiary** name + account number / wallet address。VASP-to-VASP 信息共享强制。最大技术挑战:CVC 转账经常发到 wallet address 而非 institution → 缺乏 "receiving financial institution" 概念,催生 BTS(Business-To-Service)协议层。

**主流 BTS 协议**:
- **Notabene**(美国 2020 · 市占率最高):Bitstamp / Luno / OKX
- **TRISA**(开源 · 去中心化 TLS):Binance 部分
- **Sygna Bridge**(CoolBitX · 亚太首选):韩国 / 台湾 VASP
- **TRP**(TRP Group · OpenAPI):Coinbase / Kraken / Gemini
- **Shyft**(Token 激励 · 链上发现):早期玩家
- **OpenVASP**(欧洲 · EVM-based):早期欧洲

互通问题:协议互不兼容 → 必须接入多个或选大网络。Notabene + TRP 双协议覆盖 2026 年全球约 80% VASP 流量。

## Origin & evolution

1996 FinCEN + Fed 联合发布 BSA Travel Rule(31 CFR §1010.410(f)),原本只覆盖 ≥ $3,000 wire。2019-05 FinCEN FIN-2019-G001 明确 BSA Travel Rule 适用于 CVC。2019-06 G20 Osaka summit FATF 发布 R.15 + R.16 加密扩展 → 全球 floor 确立。2024-12-30 EU TFR 2023/1113 把欧盟门槛设为 EUR 0(最严)。2026-Q3 FinCEN 拟把美国阈值从 $3,000 降到 $1,000(与 FATF 对齐)。

## Counterpoints

- 协议互通问题 · 中小 VASP 接入多协议成本高 · 寡头化
- DeFi 是否 VASP 仍有解释空间(R.15 灰区)
- self-hosted wallet 监管标准未定 · 部分国家强制 KYC 收发方

## Open questions

- FATF 2026 是否会出台 DeFi 专属 R 条款?
- self-hosted wallet 是否会被纳入 R.16 强制 KYC?
- Notabene/TRP 等 BTS 是否会触发垄断监管?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule 跨境四层 stack]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF 灰名单概览]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深度]]
<!-- /wiki-links:managed -->

## Sources


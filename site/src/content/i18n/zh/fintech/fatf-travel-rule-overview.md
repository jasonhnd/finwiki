---
source: fintech/fatf-travel-rule-overview
source_hash: ce86c0827eac721b
lang: zh
status: machine
fidelity: ok
title: "FATF 旅行规则 · R.16  VASP $1,000 K KYC 信息传递"
translated_at: 2026-05-31T06:16:15.754Z
---

# FATF 旅行规则 · R.16  VASP $1,000 K KYC 信息传递

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> FATF 第 16  号建议是全球 VASP 行业 AML/CFT 统一信息传递标准——当 VASP 汇款金额达到或超过 USD/EUR 1,000  时，须强制共享发起方和受益方的 KYC 信息。该规则是将 1996 年 BSA 旅行规则移植到加密资产领域的成果。Notabene / TRISA / Sygna / TRP 等业务对服务（BTS）层已成为强制合规基础设施——没有接入旅行规则协议，VASP 将无法获得业务资质。

## 关键事实

- FATF 1989 年由 G7 设立 · 40 成员国 + 9 个地区组织 ^[extracted]
- R.15  + R.16 加密扩展于 2019-06  G20 大阪峰会 ^[extracted]
- R.16 阈值：USD/EUR 1,000  全球底线 ^[extracted]
- 1996 年 BSA 旅行规则（31  CFR §1010.410(f)）原仅覆盖 ≥ $3,000  电汇 ^[extracted]
- 2019-05  FinCEN FIN-2019-G001  明确 BSA 旅行规则对 CVC（可转换虚拟货币）的适用 ^[extracted]
- 2024 年美国 FATF MER 评级"基本合规" ^[extracted]
- 2026-Q3  FinCEN 提案将美国阈值从 $3,000  下调至 $1,000 （与 FATF 接轨）^[extracted]

## 机制 / 运作方式

R.16  要求 VASP 汇款金额 ≥ USD/EUR 1,000  时共享以下信息：**发起方**姓名 + 账号/钱包地址，**受益方**姓名 + 账号/钱包地址。强制 VASP 之间共享信息。最大的技术挑战在于：CVC 转账通常发往钱包地址而非金融机构，导致"接收金融机构"概念缺失，由此催生了业务对服务（BTS）协议层。

**主要 BTS 协议**：
- **Notabene**（美国 2020  · 市场份额最大）：Bitstamp / Luno / OKX
- **TRISA**（开源 · 分布式 TLS）：Binance 部分
- **Sygna Bridge**（CoolBitX · 亚太优先）：韩国/台湾 VASP
- **TRP**（TRP Group · OpenAPI）：Coinbase / Kraken / Gemini
- **Shyft**（代币激励 · 链上发现）：早期参与者
- **OpenVASP**（欧洲 · 基于 EVM）：早期欧洲

互操作性问题：各协议相互不兼容 → 须多协议接入或选择最大网络。Notabene + TRP 两个协议覆盖全球 VASP 流量约 80% 的 2026 年。日本 VASP 自律监管层面的旅行规则落地参见 [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制概観]]，日本 VASP 时间线参见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]]。

## 起源与演变

1996 年 FinCEN + 美联储联合发布 BSA 旅行规则（31  CFR §1010.410(f)），原仅覆盖 ≥ $3,000  电汇。2019-05  FinCEN FIN-2019-G001  明确 BSA 旅行规则对 CVC 的适用。2019-06  G20 大阪峰会 FATF 宣布 R.15  + R.16 加密扩展 → 确立全球底线。2024-12-30 欧盟资金转移条例（TFR）2023/1113  将欧盟阈值设为 EUR 0 （最严格）。2026-Q3  FinCEN 提案将美国阈值从 $3,000  下调至 $1,000 （与 FATF 接轨）。跨境四层堆栈详情参见 [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー stack]]。

## 关联
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー四層 stack]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
<!-- /wiki-links:managed -->

## 来源

---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: ec46cd5f66800068
lang: zh
status: machine
fidelity: ok
title: "日本稳定币 / BaaS 银行边界 (2025–2026)"
translated_at: 2026-06-15T03:48:21.917Z
---

# 日本稳定币 / BaaS 银行边界 (2025–2026)

## Wiki 路径

本条目位于 [[banking/INDEX|banking index]] 之下，是日本稳定币 / 电子支付手段 (EPI) 监管架构的银行侧边界视图。请将其与作为金融科技侧边界视图的 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]、平台锚点 [[payment-firms/progmat|Progmat]] 及发行体锚点 [[payment-firms/jpyc|JPYC]]・[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]]、以及 [[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]]・[[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]]・[[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]]・[[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]]・[[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]・[[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]]・[[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]] 一并阅读，并与 [[banking/baas-japan-landscape|BaaS Japan landscape]]・[[banking/japan-baas-operating-models|Japan BaaS operating models]] 处的 BaaS 框架一并阅读。牌照栈语境请经由 [[financial-licenses/payment-license-stack|payment license stack]]・[[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]]。

## TL;DR

到 **2025** 为止，日本对银行发行数字货币的监管边界已在改正资金决济法框架下固化为三层架构: (1) 在标准 银行法 存款债务体系下由 **银行** 发行的 **存款代币 (deposit tokens)**、(2) 在新的改正资金决济法体系下发行的 **稳定币 / 电子支付手段 (電子決済手段)**——该体系承认三种发行体类型: 银行 (預金型 EPI)、资金移动业 (funds-transfer-type EPI)、信托 (信託型 EPI)——并由独立的 **电子支付手段等交易业者** (電子決済手段等取引業者，EPI service provider) 牌照进行流通，以及 (3) 仅通过同一 EPI 服务提供商牌照才能在日本流通的 **非发行的外国稳定币 (USDC 等)**。银行侧边界有三个具体后果: (a) 只有银行才能将 預金型 EPI 作为银行存款支持代币发行; (b) 只有信托银行 (信託兼営銀行) 才能在 [[payment-firms/progmat|Progmat]] 等平台下成为 信託型 稳定币的发行体; (c) 银行通过 BaaS 合作伙伴渠道的流通，如今与不同牌照栈下的独立稳定币流通渠道并存。**MUFG 的 Progmat 平台** (自 2023-10 起为独立公司) 为 信託型 SC 提供机构级轨道; **JPYC** 运营基于 资金移动业 的 JPY SC; **SBI VC Trade** 是唯一登记的外国 SC 流通商 (USDC)。地方银行试点正在出现，但在 2025 过渡时点运营上仍属有限: 北国银行的存款型稳定币「トチカ」 (一种代币化存款) 作为日本首个此类产品于 2024-04-01 推出，邮储银行 (ゆうちょ銀行) 宣布将经由 DeCurret DCP 处理代币化存款，目标为 FY2026。

## 1. 三层边界

| Layer | License / route | What banks can do | What banks cannot do |
|---|---|---|---|
| **存款代币 (預金トークン)** | 銀行法 standard bank deposit | Issue tokenized deposit balances backed 1:1 by deposit liabilities on the bank's balance sheet; settle peer-to-peer or commercial transactions; redeem at par | Cannot be transferred outside the bank network without legal-form change; cannot be held by non-bank-account holders directly |
| **银行发行 EPI (預金型 EPI / 電子決済手段 第1号)** | 改正資金決済法 — EPI issuer | Issue a regulated electronic-payment-instrument backed by deposits; distributable through bank or non-bank EPI service providers | Subject to EPI regime (KYC, redeemability, reserve, conduct rules); cannot disguise non-deposit tokens as deposit-backed |
| **信托型 EPI (信託型 EPI / 電子決済手段 第3号)** | 改正資金決済法 — trust-bank issuer | Trust banks (信託兼営銀行) can issue 信託型 stablecoin where backing assets sit in trust; institutional / platform-based use case | Non-trust-banks cannot issue 信託型 EPI; issuer role distinct from platform-provider role |
| **资金移动型 EPI (資金移動型 EPI / 電子決済手段 第2号)** | 改正資金決済法 — funds-transfer-business issuer | A funds-transfer business (資金移動業, 第1〜3種) can issue a JPY stablecoin under the EPI framework | A bank as such does not need 資金移動業 — different lane |
| **EPI 流通 (電子決済手段等取引業)** | 改正資金決済法 — separate distributor license | Banks or non-banks holding the 電子決済手段等取引業 license can distribute EPI to customers; foreign SCs (USDC) are distributable only via this license | Distribution license does not authorise issuance |

### 存款代币 — 处于标准银行存款体系之内

**存款代币** 并非一种新的法律形式。银行在 銀行法 下持有客户的存款债务; 代币是该存款余额在可编程账本上的数字表现。结算、赎回与消费者保护均遵循标准的银行存款规则。例子包括 [[fintech/jp-stablecoin-dcjpy|DCJPY]] (以 Decurret 为锚点的银行存款代币举措)。

| Pros for the bank | Cons for the bank |
|---|---|
| No new license; fits inside existing 銀行法 framework | Limited to bank-customer-to-bank-customer flow without further legal-form changes |
| Backing is the bank's deposit balance — already capitalised and supervised | Requires bilateral / consortium agreements to scale beyond a single bank |
| Customer protection identical to deposit | Programmability constraints from deposit-liability regulatory expectations |

### 银行发行 EPI (預金型) — 在存款与更广泛流通之间架桥

預金型 EPI 变体让银行得以发行一种受监管的电子支付手段，其支持为存款债务，但其 **流通** 可经由 電子決済手段等取引業 流通商扩展至单一银行客户基础之外。这是对 JPYC 等非银行所用的 资金移动型 (funds-transfer-type) 資金移動型 EPI 的银行侧对应物。

| Pros for the bank | Cons for the bank |
|---|---|
| Allows the bank's brand and balance sheet to anchor a circulating SC | Adds the EPI regulatory layer (KYC obligations on distributors, redeemability rules, reserve rules) on top of banking supervision |
| Compatible with cross-bank settlement design | Distributors must hold the EPI distributor license — adds a coordination burden |

### 信托型 EPI (信託型) — 机构-平台车道

**信託型 SC** 采用信托结构: 信托银行 (信託兼営銀行) 充当发行体; 支持资产 (多家银行的 JPY 存款、JGB 等) 置于信托之中; 平台提供商安排技术轨道; 机构与法人用户持有并交易这些代币。[[payment-firms/progmat|Progmat]] 平台是其代表性例子。

| Pros for the bank | Cons for the bank |
|---|---|
| Trust segregation means SC holders' claim is on the trust assets, not on the trust bank's general balance sheet | Only trust-banks can issue — restricts the issuer set to a few institutions |
| Multi-asset backing enables broader institutional adoption | More operational complexity than a single-bank deposit-token model |
| Platform-provider role (Progmat) is distinct from issuer role (trust bank) — clear regulatory layering | Coordination across issuer / platform / participating-bank / EPI distributor is non-trivial |

## 3. 发行体 / 流通商锚点图 (2025–2026)

| Token | Backing form | Issuer | Platform | Distribution | Regulatory layer |
|---|---|---|---|---|---|
| **DCJPY** (deposit token) | Bank deposit liability | Participating banks (multi-bank pilot) | DeCurret DCP | Limited / pilot | 銀行法 standard |
| **Progmat Coin (planned 信託型 SC)** | Trust-held JPY assets | [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] and other participating trust banks | [[payment-firms/progmat|Progmat]] | Bank and non-bank EPI distributors | 改正資金決済法 信託型 EPI |
| **JPYC** | 資金移動業 — backing held under 資金移動業 funds management rules | [[payment-firms/jpyc|JPYC株式会社]] | Own infrastructure | Direct + crypto exchanges | 改正資金決済法 資金移動型 EPI |
| **USDC (foreign SC, distributed in Japan)** | Circle reserve | Circle (US issuer) | (foreign issuer infrastructure) | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — the single registered EPI distributor for USDC as of the 2025–2026 cycle | 改正資金決済法 電子決済手段等取引業 (distribution side only) |

### 为何平台提供商 ≠ 发行体

- Progmat 的监管负担是技术与运营平台提供商的负担，而非受监管金融机构的负担。
- 发行体身份 (以及对应的 改正資金決済法 义务) 由信托银行承担——将消费者保护与 SC 赎回义务保留在受监管的银行资产负债表上。
- 多家信托银行可在同一 Progmat 平台上充当发行体，从而在不被单一发行体卡住瓶颈的情况下实现更广泛的机构采用。

这一模式映照了 [[banking/baas-japan-landscape|BaaS]] 将 **合作伙伴品牌** (UX 层) 与 **银行** (牌照 + 资产负债表) 相分离的做法; Progmat 则将 **平台** (技术) 与 **发行体** (牌照 + 支持资产) 相分离。

### 地方银行能做什么、不能做什么

- **存款代币** 在 銀行法 下对任何银行开放——地方银行可参与多银行存款代币举措。
- **預金型 EPI 发行** 原则上向地方银行开放，但 EPI 监管层增加了对单一银行地方发行而言可能不具成本效益的运营与监督负担——协调式平台参与是务实路径。
- **信託型 EPI 发行** 需要信托银行牌照; 只有持有 信託兼営銀行 牌照的地方银行才能作为发行体直接参与。

### BaaS 合作伙伴渠道流通

1. **EPI 流通牌照叠加。** 一家希望向其合作伙伴品牌客户流通 SC 的参与 BaaS 的地方银行，需要独立的 電子決済手段等取引業 牌照。
2. **存款代币整合。** 一旦底层银行存款被代币化，BaaS 合作伙伴品牌的客户旅程便可纳入存款代币结算——但截至 2025–2026 这仍处于试点 / 规划阶段 (例如 北国银行「トチカ」自 2024-04 起上线; 邮储银行的代币化存款处理目标为 FY2026; 改正资金决济法 公布于 2025-06-13)。

## 6. 存款代币 vs 稳定币 — 运营边界

| Dimension | Deposit token | Stablecoin / EPI |
|---|---|---|
| Legal liability | Bank-deposit liability under 銀行法 | EPI under 改正資金決済法 (deposit-, funds-transfer-, or trust-type backing) |
| Who can issue | Banks | Banks (預金型 + 信託型 via trust bank), 資金移動業 (資金移動型) |
| Customer relationship | Bank-customer-of-the-issuer | Holder-of-the-EPI; not necessarily a bank customer |
| Deposit insurance | Standard 預金保険 coverage | Does not apply to EPI — replaced by EPI-regime reserve / segregation rules |
| Cross-institution transferability | Constrained to bank network without further legal-form change | Built for circulation via EPI distributors |
| Programmability | Limited by deposit-liability constraints | Higher programmability under EPI framework |
| Use cases | Inter-bank settlement, corporate treasury, conditional payments | Retail / institutional circulation, cross-platform settlement |
| Reserves | Bank-balance-sheet liabilities matched by bank-asset side | EPI-specific reserve / trust rules |

## 7. 四大 EPI 阵营 (横向汇总)

| Camp | Lead operator | Legal form | Coverage |
|---|---|---|---|
| Trust-type / institutional | [[payment-firms/progmat|Progmat]] platform + participating trust banks | 信託型 EPI | Institutional, corporate, cross-bank settlement |
| Funds-transfer-type / retail JPY | [[payment-firms/jpyc|JPYC]] | 資金移動型 EPI | Retail JPY SC, crypto-exchange-distributed |
| Foreign-SC distribution | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] (USDC distributor) | 電子決済手段等取引業 (distribution only) | Distribution of Circle's USDC to Japanese users |
| Deposit-token (bank-rails) | DCJPY (DeCurret + participating banks) | 銀行法 standard deposit liability | Inter-bank settlement, corporate treasury |

关于四大阵营与三种发行体类型的更深入比较，请参见 [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] 与 [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]。

## 相关

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank-license-stack]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[payment-firms/progmat]]
- [[payment-firms/jpyc]]
- [[megabanks/mufg]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/jp-stablecoin-progmat]]
- [[fintech/jp-trust-type-sc-architecture]]
- [[fintech/jp-stablecoin-dcjpy]]
- [[fintech/japan-stablecoin-2026-event-tracker]]
- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/institutional-stablecoin-deposit-token-thesis]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]]
- [[exchanges/jp-exchange-jpyc]]
- [[exchanges/jp-exchange-sbi-vc-trade]]

## 来源

- FSA registered EPI service providers list (https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx).
- FSA registered funds-transfer service providers list (https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
- 資金決済に関する法律 — 改正資金決済法 (e-Gov 法令検索: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059).
- Progmat company outline / concept / press releases (https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/).
- JPYC corporate site (https://jpyc.co.jp/).
- SBI VC Trade USDC product page (https://www.sbivc.co.jp/usdc).
- 北國銀行 news release「日本初、預金型ステーブルコイン『トチカ』のサービス開始について」(2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — 地銀預金トークン先行事例。
- BUSINESS LAWYERS「令和8年6月施行！改正資金決済法の概要と実務対応」(https://www.businesslawyers.jp/articles/1476) — 改正資金決済法 2025-06-13 公布 / 2026-06 施行、地域銀行・ゆうちょ銀行のトークン化預金 (FY2026 目途) 動向。

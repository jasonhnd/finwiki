---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: 9c5cd29beffe66e8
lang: zh
status: machine
fidelity: ok
title: "日本稳定币 / BaaS 银行边界（2025–2026）"
translated_at: 2026-05-30T18:52:47.780Z
---

# 日本稳定币 / BaaS 银行边界（2025–2026）

## Wiki route

本条目归属于 [[banking/INDEX|banking index]]，作为日本稳定币 / 电子支付手段（EPI）监管架构的银行侧边界视图。请与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]（金融科技侧边界视图）、平台锚点 [[JapanFG/progmat|Progmat]] 及发行方锚点 [[JapanFG/jpyc|JPYC]] · [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]] 对照阅读，并与 [[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]] · [[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]] · [[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]] · [[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]] · [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] · [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] · [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]] 及 [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]] 处的 BaaS 框架对照。关于牌照栈背景，请经由 [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]] · [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] 路由。

## TL;DR

到 **2025** 为止，日本对银行发行数字货币的监管边界已在改正资金决済法框架下硬化为三层架构：（1）由**银行**在标准银行法存款负债制度下发行的**存款代币（deposit token）**；（2）在新的改正资金决済法制度下发行的**稳定币 / 电子支付手段（電子決済手段）**——该制度承认三类发行方：银行（预金型 EPI）、资金移动业（资金移动型 EPI）及信托（信托型 EPI），并由独立的 **電子決済手段等取引業者**（EPI 服务提供方）牌照分销；以及（3）仅通过同一 EPI 服务提供方牌照在日本分销的**非自发行外国稳定币**（USDC 等）。银行侧边界有三项具体后果：(a) 只有银行能作为银行存款支持的代币发行预金型 EPI；(b) 只有信托银行（信託兼営銀行）能成为 [[JapanFG/progmat|Progmat]] 等平台下信托型稳定币的发行方；(c) 银行的 BaaS 合作渠道分销现在与不同牌照栈下的独立稳定币分销渠道并存。**MUFG 的 Progmat 平台**（自 2023-10 起为独立公司）为信托型 SC 提供机构级轨道；**JPYC** 运营基于资金移动业的日元 SC；**SBI VC Trade** 是唯一注册的外国 SC 分销商（USDC）。区域银行试点正在涌现，但截至 2025  过渡期在运营上仍受限：北國銀行的存款型稳定币「トチカ」（一种代币化存款）于 2024-04-01 启动，为日本首个此类产品，ゆうちょ銀行 宣布经由 DeCurret DCP 处理代币化存款，目标为 FY2026。

## 1. 三层边界

| Layer | License / route | What banks can do | What banks cannot do |
|---|---|---|---|
| **存款代币（預金トークン）** | 银行法标准银行存款 | 发行以银行资产负债表上的存款负债 1:1  支持的代币化存款余额；进行点对点或商业交易结算；按面值赎回 | 未经法律形式变更不得在银行网络外转移；非银行账户持有人不得直接持有 |
| **银行发行 EPI（預金型 EPI / 電子決済手段 第1号）** | 改正资金決済法 — EPI 发行方 | 发行以存款支持的受监管电子支付手段；可经由银行或非银行 EPI 服务提供方分销 | 受 EPI 制度约束（KYC、可赎回性、储备、行为规则）；不得将非存款代币伪装为存款支持 |
| **信托型 EPI（信託型 EPI / 電子決済手段 第3号）** | 改正资金決済法 — 信托银行发行方 | 信托银行（信託兼営銀行）可发行信托型稳定币，其支持资产置于信托中；面向机构 / 平台的用例 | 非信托银行不得发行信托型 EPI；发行方角色与平台提供方角色不同 |
| **资金移动型 EPI（資金移動型 EPI / 電子決済手段 第2号）** | 改正资金決済法 — 资金移动业发行方 | 资金移动业（资金移动業，第1〜3种）可在 EPI 框架下发行日元稳定币 | 银行本身不需要资金移动業——属不同赛道 |
| **EPI 分销（電子決済手段等取引業）** | 改正资金決済法 — 独立分销商牌照 | 持有電子決済手段等取引業牌照的银行或非银行可向客户分销 EPI；外国 SC（USDC）仅可经由此牌照分销 | 分销牌照不授权发行 |

### 存款代币 — 在标准银行存款制度之内

**存款代币**并非一种新的法律形式。银行在银行法下持有客户存款负债；代币是该存款余额在可编程账本上的数字表示。结算、赎回与消费者保护均遵循标准银行存款规则。例子包括 [[fintech/jp-stablecoin-dcjpy|DCJPY]]（以 Decurret 为锚的银行存款代币计划）。

| Pros for the bank | Cons for the bank |
|---|---|
| 无需新牌照；契合既有银行法框架 | 在不进一步变更法律形式的情况下，仅限于银行客户对银行客户的流转 |
| 支持物是银行的存款余额——已资本化并受监管 | 需双边 / 联盟协议才能扩展到单一银行之外 |
| 消费者保护与存款完全相同 | 来自存款负债监管预期的可编程性约束 |

### 银行发行 EPI（预金型）— 桥接存款与更广泛流通

预金型 EPI 变体让银行发行一种受监管的电子支付手段，其支持物为存款负债，但其**流通**可经由電子決済手段等取引業分销商扩展到单一银行客户基础之外。这是 JPYC 等非银行所用的资金移动型 EPI 在银行侧的对应物。

| Pros for the bank | Cons for the bank |
|---|---|
| 允许银行的品牌与资产负债表为流通中的 SC 提供锚定 | 在银行监管之上叠加 EPI 监管层（对分销商的 KYC 义务、可赎回性规则、储备规则） |
| 与跨银行结算设计兼容 | 分销商须持有 EPI 分销商牌照——增加协调负担 |

### 信托型 EPI — 机构平台赛道

**信托型 SC** 采用信托结构：信托银行（信託兼営銀行）担任发行方；支持资产（多家银行的日元存款、JGB 等）置于信托中；平台提供方安排技术轨道；机构与企业用户持有并交易代币。[[JapanFG/progmat|Progmat]] 平台是领先的例子。

| Pros for the bank | Cons for the bank |
|---|---|
| 信托隔离意味着 SC 持有人的债权针对信托资产，而非信托银行的一般资产负债表 | 仅信托银行能发行——将发行方集合限制为少数机构 |
| 多资产支持使更广泛的机构采用成为可能 | 比单一银行存款代币模式运营复杂度更高 |
| 平台提供方角色（Progmat）与发行方角色（信托银行）不同——监管分层清晰 | 跨发行方 / 平台 / 参与银行 / EPI 分销商的协调并非易事 |

## 3. 发行方 / 分销方锚点地图（2025–2026）

| Token | Backing form | Issuer | Platform | Distribution | Regulatory layer |
|---|---|---|---|---|---|
| **DCJPY**（存款代币） | 银行存款负债 | 参与银行（多银行试点） | DeCurret DCP | 有限 / 试点 | 银行法标准 |
| **Progmat Coin（计划中的信托型 SC）** | 信托持有的日元资产 | [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] 及其他参与信托银行 | [[JapanFG/progmat|Progmat]] | 银行与非银行 EPI 分销商 | 改正资金決済法 信托型 EPI |
| **JPYC** | 资金移动业 — 支持物按资金移动业资金管理规则持有 | [[JapanFG/jpyc|JPYC株式会社]] | 自有基础设施 | 直接 + 加密货币交易所 | 改正资金決済法 资金移动型 EPI |
| **USDC（外国 SC，在日本分销）** | Circle 储备 | Circle（美国发行方） | （外国发行方基础设施） | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — 截至 2025–2026  周期，USDC 唯一注册的 EPI 分销商 | 改正资金決済法 電子決済手段等取引業（仅分销侧） |

### 为何平台提供方 ≠ 发行方

- Progmat 的监管负担是技术与运营平台提供方的负担，而非受监管金融机构的负担。
- 发行方地位（及相应的改正资金決済法义务）归于信托银行——将消费者保护与 SC 赎回义务保留在受监管的银行资产负债表上。
- 多家信托银行可在同一 Progmat 平台上作为发行方，使更广泛的机构采用成为可能，而不在单一发行方处形成瓶颈。

这一模式与 [[banking/baas-japan-landscape|BaaS]] 将**合作品牌**（UX 层）与**银行**（牌照 + 资产负债表）分离的方式相呼应；Progmat 将**平台**（技术）与**发行方**（牌照 + 支持资产）分离。

### 区域银行能做与不能做什么

- **存款代币**在银行法下对任何银行开放——区域银行可参与多银行存款代币计划。
- **预金型 EPI 发行**原则上对区域银行开放，但 EPI 监管层增加的运营与监管负担对单一银行的区域发行可能并不划算——协调式平台参与才是实务路径。
- **信托型 EPI 发行**需要信托银行牌照；只有持有信託兼営銀行牌照的区域银行才能作为发行方直接参与。

### BaaS 合作渠道分销

1. **EPI 分销牌照叠加。** 一家希望向其合作品牌客户分销 SC 的参与 BaaS 的区域银行，需要独立的電子決済手段等取引業牌照。
2. **存款代币整合。** 一旦底层银行存款被代币化，BaaS 合作品牌的客户旅程便可纳入存款代币结算——但截至 2025–2026  这仍处于试点 / 规划阶段（例如 北國銀行「トチカ」自 2024-04 起上线；ゆうちょ銀行 代币化存款处理目标为 FY2026；改正资金決済法 公布于 2025-06-13）。

## 6. 存款代币 vs 稳定币 — 运营边界

| Dimension | Deposit token | Stablecoin / EPI |
|---|---|---|
| 法律负债 | 银行法下的银行存款负债 | 改正资金決済法下的 EPI（存款型、资金移动型或信托型支持） |
| 谁能发行 | 银行 | 银行（预金型 + 经由信托银行的信托型）、资金移动业（资金移动型） |
| 客户关系 | 发行方的银行客户 | EPI 的持有人；未必是银行客户 |
| 存款保险 | 标准预金保険覆盖 | 不适用于 EPI——由 EPI 制度的储备 / 隔离规则替代 |
| 跨机构可转移性 | 未经进一步法律形式变更受限于银行网络 | 为经由 EPI 分销商流通而构建 |
| 可编程性 | 受存款负债约束所限 | 在 EPI 框架下可编程性更高 |
| 用例 | 银行间结算、企业资金管理、条件付款 | 零售 / 机构流通、跨平台结算 |
| 储备 | 银行资产负债表负债由银行资产侧匹配 | EPI 特定的储备 / 信托规则 |

## 7. 四个 EPI 阵营（横切汇总）

| Camp | Lead operator | Legal form | Coverage |
|---|---|---|---|
| 信托型 / 机构 | [[JapanFG/progmat|Progmat]] 平台 + 参与信托银行 | 信托型 EPI | 机构、企业、跨银行结算 |
| 资金移动型 / 零售日元 | [[JapanFG/jpyc|JPYC]] | 资金移动型 EPI | 零售日元 SC，经加密货币交易所分销 |
| 外国 SC 分销 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]（USDC 分销商） | 電子決済手段等取引業（仅分销） | 向日本用户分销 Circle 的 USDC |
| 存款代币（银行轨道） | DCJPY（DeCurret + 参与银行） | 银行法标准存款负债 | 银行间结算、企业资金管理 |

关于四阵营与三类发行方的更深入比较，参见 [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] 与 [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]。

## Related

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank-license-stack]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[JapanFG/INDEX]]
- [[JapanFG/progmat]]
- [[JapanFG/jpyc]]
- [[JapanFG/mufg]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
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

## Sources

- FSA 注册 EPI 服务提供方名单 (https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx)。
- FSA 注册资金移动服务提供方名单 (https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf)。
- FSA 持牌银行名单 (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx)。
- 资金決済に関する法律 — 改正资金決済法 (e-Gov 法令检索: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059)。
- Progmat 公司概要 / 概念 / 新闻稿 (https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/)。
- JPYC 公司网站 (https://jpyc.co.jp/)。
- SBI VC Trade USDC 产品页面 (https://www.sbivc.co.jp/usdc)。
- 北國銀行 新闻稿「日本初、預金型ステーブルコイン『トチカ』のサービス開始について」(2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — 地银预金代币先行案例。
- BUSINESS LAWYERS「令和8年6月施行！改正資金決済法の概要と実務対応」(https://www.businesslawyers.jp/articles/1476) — 改正资金決済法 2025-06-13 公布 / 2026-06  施行、地域银行·ゆうちょ銀行的代币化存款 (FY2026  目途) 动向。

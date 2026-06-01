---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: 49ad69ff450cb0cc
lang: zh
status: machine
fidelity: ok
title: "日本稳定币 2026 事件追踪器 · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 修订"
translated_at: 2026-05-31T06:16:15.745Z
---

# 日本稳定币 2026 事件追踪器 · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 修订

## TL;DR

2026 年是日本稳定币行业从 **"PoC -> 主网"** 转换的关键期。**JPYC** 于 2025-Q4 在主网（Ethereum + Polygon + Astar）正式上线，并在 2026-05 达到 **约 ¥9.2B（~$60M）** 的流通规模；**Progmat** 计划在 2026-Q2 推出由大型信托银行主导的 **USD 锚定第 3 号 EPI**（Progmat USD）；**DCJPY（DeCurret）** 在 2026-Q1 转入由大型商社、电力公司与流通企业参与的封闭联盟正式运营；**SBI VC Trade USDC** 的流通量约为 **¥45B（~$295M）**，是日本国内 USDC 的唯一正规流通渠道（见 [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]）；KDDI au Wallet、NTT Docomo dpay、LINE Finance、PayPay 之中，至少有 2 家被认为正在研究于 2026-Q3-Q4 申请 EPI service provider 资格。**FSA EPI 第二轮修订** 预计在 2026-Q2 启动公开征求意见，核心议题是：信托型稳定币的组建与分配规则明确化、境外稳定币流通范围扩大、以及面向机构投资者的收益型稳定币处理方式。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]] for the regulatory frame, [[fintech/japan-epi-three-types-overview|EPI 三類型概要]] for taxonomy, and [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] for competitive landscape. 主要发行方与流通方请参见 [[JapanFG/jpyc|JPYC株式会社]]、[[JapanFG/progmat|株式会社Progmat]]、[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]。

## 2026 主要事件时间线

| 月份 | 事件 | 相关主体 | 含义 |
|---|---|---|---|
| 2025-Q4 | JPYC 正式主网上线 | JPYC株式会社 | "EPI 第1号" 启动（修订《资金结算法》后） |
| 2025-12 | DCJPY 联盟转入正式运营 | DeCurret + 三菱商事 + 关西电力 + AEON | 商社、电力、流通的 B2B 支付正式投产 |
| 2026-01 | SBI VC Trade USDC 扩大业务（新增法人 OTC 服务） | SBI VC Trade + Circle | 日本国内 USDC 流通量突破 ¥30B |
| 2026-Q1 | Progmat × MUTB × SMBC × Mizuho **第3号 EPI USD 锚定型**设计完成（已公示） | Progmat + 三大信托银行 | 信托型 USD 稳定币设计定型 |
| 2026-Q2 | Progmat USD 上线（预定） | Progmat | 日本首个信托型 USD 稳定币主网 |
| 2026-Q2 | FSA EPI 第二轮修订公开征求意见开始（预定） | 金融厅 | 信托型稳定币监管明确化 + 境外稳定币流通扩大 |
| 2026-Q2 | JPYC 流通量突破 ¥10B（预测） | JPYC株式会社 | EPI 第1号的规模基准 |
| 2026-Q3 | KDDI au Wallet 研究申请 EPI service provider（媒体报道） | KDDI + au PAY | 运营商系第一家进入观察名单 |
| 2026-Q3 | NTT Docomo dpay 重新评估加密资产战略（媒体报道） | NTT Docomo | 运营商系第二家动态 |
| 2026-Q4 | LINE Finance × LINE Pay 稳定币战略明朗化（预测） | LINE Finance + Z Holdings | 与 LINE Xenon JPY 稳定币联动的可能性 |
| 2026-Q4 | PayPay × SoftBank 公布稳定币参与方针（预测） | PayPay | 日本最大 QR 支付运营商的进入观察 |

## JPYC 主网扩张

**现状（2026-05）**：

- 流通量约 ¥9.2B（~$60M），较 2025-Q4 主网上线时 6 个月扩大约 7.5x
- 部署链：Ethereum（主链）+ Polygon + Astar + Avalanche（陆续扩展）
- 用户数（钱包持有）约 12 万
- 主要使用场景：DeFi（Aave / Compound JPY pair）、跨境汇款（菲律宾 / 越南）、加密交易所 JPY 交易对（Bitbank / BITPoint / 部分境外交易所）、法人 B2B 薪资与费用报销（limited pilot）
- 监管状态：FSA 资金移转业第二种登记（关东财务局长 第00099号），在修订《资金结算法》后被定位为 "EPI 第1号"（见 [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]）

**2026 H2 计划**：

1. **汇款额度分阶段上调**：现行 ¥1M/笔 -> ¥3M/笔（申请中）
2. **JPYC v2** 发布（EIP-3009 / Permit + USDC 风格 ERC-20 Permit + 多链 canonical bridge 标准化）
3. **法人合作伙伴突破 50 家**：扩大薪资、费用报销、小额支付的正式运营
4. **境外交易所正式上市**：如 Binance Japan、KuCoin、Bybit 等，但是否必须经由日本国内 EPI service provider 仍未明确
5. **提供 Stripe / Square 风格 API**：建设 JPYC 直接接入 SDK
6. **DeFi 整合**：深化 Aave + Compound + Curve JPY 流动性池，并通过 Uniswap v4 hook 扩展现货流动性

JPYC 是典型的 **funds-transfer-type EPI**（修订《资金结算法》第二种），因此其监管路径不同于信托型稳定币（Progmat）与经 ECISB 分销的稳定币。详见 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 与 [[fintech/japan-ecisb-license|日本 ECISB 牌照]]。

## Progmat USD 上线（信托型 USD 稳定币）

**定位**：Progmat（见 [[JapanFG/progmat|株式会社Progmat]]）是由大型信托银行（MUTB 49% + SMBC 15% + Mizuho 15%）以及 NTT Data、JPX 出资的数字资产平台。发行主体是信托银行，Progmat 是平台提供方。

**Progmat USD 的设计概念**（基于 2026-Q1 公示）：

- **发行方**：三菱 UFJ 信托银行（主承做）+ 瑞穗信托银行（共同）+ 三井住友信托银行（共同）的联合信托架构
- **法律定位**：修订《资金结算法》下的 **特定信托受益权（第3号 EPI）**，USD 锚定
- **底层资产**：美国短期国债 + USD 存款（MUFG 纽约分行 / 美国代理行）+ USD 现金
- **第三方审计**：月度 PwC Arata + Deloitte Touche Tohmatsu
- **链**：Ethereum + Polygon + Avalanche + JPX-DLT（Hyperledger Besu，面向国内机构的私有网络）
- **目标用户**：机构投资者 + 大型企业，用于 USD 结算、FX 对冲与跨境 B2B 支付
- **分销架构**：通过 SBI VC Trade 等 EPI service provider 分发，现阶段不直接在境外交易所上市

**与 Project Pax 的联动**：Progmat USD 也被视为 "Project Pax"（MUFG + SBI 联合 PoC）的正式版本，目标是把 SWIFT MT 103 -> 区块链式跨境 USD 支付打通。Progmat USD 的意义在于把 "信托型稳定币 + SWIFT 兼容 + 机构级 USD 结算" 组合到一起。

**意义**：这是 [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]] 的首个**USD 计价**实现。此前 Progmat 的核心是 JPY 系 ST、房地产 ST 与公司债 ST；USD 稳定币意味着国际机构投资者使用场景被打开。

## DCJPY（DeCurret）联盟正式运营

**DCJPY** 是由 DeCurret Holdings（原 DeCurret 株式会社）运营的民间稳定币。其特征是**银行发行型**：各银行发行 JPY 基础的“数字货币”，并在 DCJPY 网络上实现兼容流通。参见 [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細ページ]]。

**2025-12 -> 2026-Q1 正式转入运营（基于公开说明）**：

- **参与银行（发行方）**：三菱 UFJ 银行 / 瑞穗银行 / 三井住友银行 / 里索那银行 / 其他地方银行（陆续）
- **参与联盟（使用方）**：三菱商事 + 关西电力 + AEON + JR 东日本 + NTT 东日本 + 大型商社与物流企业
- **使用场景**：B2B 结算（商社 <-> 制造商零部件货款）、电力批发交易结算、流通供应链结算（AEON × 批发商）
- **规模（2026-05）**：月度流通量约 ¥150B（~$1B equivalent）

**重要区别**：DCJPY 在技术上与 JPYC、Progmat 属于不同体系，即“银行发行 + 联盟兼容”模式；在监管上是否适用 **第3号 EPI** 仍有争议，因为它不是典型信托架构。当前 FSA 对其更接近“银行对电子支付手段的自主管理”式容许。FSA 第二轮 EPI 修订可能会处理这层模糊地带。

## SBI VC Trade USDC 扩张

**SBI VC Trade**（见 [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade 詳細ページ]]）是日本国内的 **EPI service provider**（关东财务局长 第00001号），也是 USDC 在日本唯一的正规持牌流通处理方。

**2026 H1 扩张**：

- 流通余额约 ¥45B（~$295M，2026-05），较 2025-12 的 ¥18B 增长约 2.5x
- 新增法人 OTC 服务（2026-01），使日企直接持有 USDC 的路径被打开
- 有限度的 DeFi 联动：通过 SBI VC Trade 向部分合规协议提供间接的 USDC 存入路径
- 通过智能合约处理自动 KYC + Travel Rule 的自研工作继续推进
- 与 Circle Japan 的直接对应关系预计于 2026-Q2 公示

**SBI × JPYC 生态的含义**：SBI 与 JPYC 并无资本关系，但 SBI VC Trade 处理 USDC，而 SBI Holdings 公开表现出对包括 JPYC 在内的日本 EPI 行业的投资与支持姿态。详见 [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]。

## 运营商与 QR 支付阵营的进入观察

**观察对象：4 家**（2026 H2 动态）

### KDDI au Wallet / au PAY

- 报道（2026-04 Nikkei）："KDDI 正在研究申请 EPI service provider，并考虑将 au PAY 余额稳定币化"
- 战略：把 au 用户（约 4,500 万 ID）整合进一个稳定币生态
- 挑战：如何与既有预付式支付手段（au Wallet）做法律边界整理，以及 KDDI 是自行发行，还是像 SBI VC Trade 那样做分销方

### NTT Docomo dpay / d Payment

- 报道（2026-03）："Docomo 在 2024 年缩减加密资产业务后，于 2026 年重新研究"
- 战略：围绕 d Payment（约 5,000 万 ID）与 Docomo Bank（新生银行整合后）探索稳定币化
- 挑战：与过去 Coincheck 系（Monex Group 体系）关系的整理

### LINE Finance / LINE Pay / LINE Xenon

- LINE Xenon JPY 稳定币在 2020-2022 的 PoC 阶段后处于停滞状态
- Z Holdings（LINE + Yahoo Japan + PayPay 母公司）重组后的稳定币战略尚未明朗
- 报道（2026-05）："Z Holdings 正在内部重新检讨稳定币整合战略"
- 战略：把 LINE Pay（约 9,000 万 ID，主要覆盖亚洲）通过稳定币进行跨境化

### PayPay

- 日本国内最大 QR 支付平台（约 6,000 万 ID，月度支付约 ¥3T+）
- 由于与 SoftBank 的资本关系，其稳定币战略方向较为复杂
- 公开信息层面尚未宣布稳定币参与，但业界观察认为 "PayPay -> 稳定币联动 OR 自有稳定币发行" 有可能在 2027 年前落地

**含义**：如果这 4 家中有 1 家以 EPI service provider 或信托型稳定币发行人身份进入，日本稳定币市场就可能迅速扩展到“数千万用户规模”。这意味着 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 中“运营商 / QR 支付第 4 阵营”的成型。

## FSA EPI 第二轮修订（预计 2026-Q2 公征）

**议题 1：信托型稳定币的组建与分配规则明确化**

- 围绕 Progmat USD 等信托型 USD 稳定币的发行与流通细则
- 信托受托银行与分销方（EPI service provider）的责任分工
- 境外信托（如 BNY Mellon 的 USD trust）是否可被利用

**议题 2：境外稳定币流通范围扩大**

- 目前仅 SBI VC Trade 处理 USDC，未来是否允许 USDT / EURC / PYUSD 等
- 白名单路径（仅允许 FSA 认可稳定币）与黑名单路径（明确禁止某些稳定币）之间的选择
- 处理标准的明文化：发行方监管状态、透明度、审计

**议题 3：面向机构投资者的收益型稳定币**

- 围绕 USDM（M0）/ sUSDe（Ethena）/ USDY（Ondo）等收益型稳定币
- 在资金移转型 EPI 框架下目前不可支付利息，在信托型 EPI 框架下则可能部分容许
- 是否引入近似 Reg-D 506(c) 的机构投资者制度

**议题 4：DeFi 联动监管**

- JPYC / SBI VC Trade USDC 接入 DeFi（Aave / Compound）的合规性
- 通过智能合约处理 Travel Rule（FATF Recommendation 16）的日本式解释
- “DeFi 上的 DEX 交易”是否会被视为 EPI service provider 业务

**含义**：FSA 第二轮 EPI 修订将打破当前以 JPYC 为中心的格局，并把 Progmat（信托型）+ SBI VC Trade（境外稳定币）+ 运营商系（新进入者）的 **4 阵营并立结构** 制度化。

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]
- [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]]
- [[fintech/jp-stablecoin-progmat|Progmat 詳細]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細]]
- [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]
- [[JapanFG/jpyc|JPYC株式会社]]
- [[JapanFG/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済の法体系]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026]]

## Sources

- 金融厅 — 加密资产与电子支付手段相关政策 https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- 金融厅 — 电子支付手段等交易业者登记一览 https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC株式会社 — 新闻发布 https://jpyc.co.jp/news
- 株式会社Progmat — News https://progmat.co.jp/news
- DeCurret DCJPY — 官方网站 https://www.dcjpy.jp/
- SBI VC Trade — USDC https://www.sbivc.co.jp/usdc
- KDDI — 公司新闻稿 https://www.kddi.com/corporate/newsrelease/
- NTT Docomo — 新闻稿 https://www.docomo.ne.jp/info/news_release/
- LINE Corporation — 新闻稿 https://linecorp.com/en/pr/
- PayPay — 新闻稿 https://about.paypay.ne.jp/press/
- 日经新闻 2026-04 报道（KDDI EPI 申请研究，公开文章）
- 日经新闻 2026-03 报道（Docomo 加密资产重新研究，公开文章）

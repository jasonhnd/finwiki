---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: 49ad69ff450cb0cc
lang: zh
status: machine
fidelity: needs_review
title: "日本稳定币 2026  事件追踪器 · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 修订"
translated_at: 2026-05-31T06:16:15.745Z
---

# 日本稳定币 2026  事件追踪器 · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 修订

## TL;DR

2026 年 是日本稳定币行业从 **"PoC → 主网"** 的转折期。**JPYC** 于 2025-Q4  在以太坊 + Polygon + Astar 上正式主网上线，并于 2026-05  达到流通量 **约¥9.2B（~$60M）**；**Progmat** 计划于 2026-Q2  推出由大型银行信托主导的 **USD锚定 第3号 EPI**（Progmat USD）；**DCJPY（DeCurret）** 于 2026-Q1  正式转入由大型商社 + 电力公司 + 流通企业组成的封闭型联盟主网运营；**SBI VC Trade USDC** 流通量 **约¥45B（~$295M）**，是日本国内USDC的唯一正规流通渠道（→ [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]）；KDDI au Wallet × NTT Docomo dpay × LINE Finance × PayPay 中至少 2 社 家正在研究于 2026-Q3-Q4  申请EPI服务提供商资质。**FSA EPI修订（第二轮）** 预计于 2026-Q2  开始公开征求意见，议题包括信托型稳定币的组成与分配规则明确化 + 境外稳定币的流通范围扩大 + 面向机构投资者的收益型稳定币处理方式。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]] for the regulatory frame, [[fintech/japan-epi-three-types-overview|EPI 三類型概要]] for taxonomy, and [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] for competitive landscape. 主要发行方及流通方请参阅 [[JapanFG/jpyc|JPYC株式会社]]、[[JapanFG/progmat|株式会社Progmat]]、[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]。

## 2026  主要事件时间线

| 月份 | 事件 | 相关主体 | 含义 |
|---|---|---|---|
| 2025-Q4  | JPYC正式主网上线 | JPYC株式会社 | "EPI 第1号"启动（修订《资金结算法》后） |
| 2025-12  | DCJPY联盟正式转入主网运营 | DeCurret + 三菱商事 + 关西电力 + 伊藤洋华堂 | 商社·电力·流通的B2B支付正式投产 |
| 2026-01  | SBI VC Trade USDC业务扩大（新增面向法人的OTC服务） | SBI VC Trade + Circle | 国内USDC流通量突破¥30B |
| 2026-Q1  | Progmat × MUTB × SMBC × Mizuho **第3号 EPI USD锚定型**设计完成（公示） | Progmat + 三大银行信托 | 信托型USD稳定币设计定型 |
| 2026-Q2  | Progmat USD上线（预定） | Progmat | 日本首个信托型USD稳定币主网 |
| 2026-Q2  | FSA EPI修订第二轮 公开征求意见开始（预定） | 金融厅 | 信托型稳定币监管明确化 + 境外稳定币流通扩大 |
| 2026-Q2  | JPYC流通量突破¥10B（预测） | JPYC株式会社 | EPI 第1号 的规模基准 |
| 2026-Q3  | KDDI au Wallet申请EPI服务提供商资质（媒体报道） | KDDI + au PAY | 运营商系第1社家参入观察 |
| 2026-Q3  | NTT Docomo dpay重新研究加密资产布局（媒体报道） | NTT Docomo | 运营商系第2社家动向 |
| 2026-Q4  | LINE Finance × LINE Pay稳定币战略明确（预测） | LINE Finance + Z Holdings | 与LINE Xenon JPY稳定币联动的可能性 |
| 2026-Q4  | PayPay × 软银公布稳定币参与方针（预测） | PayPay | 国内最大QR支付运营商的参入观察 |

## JPYC主网扩张

**现状（2026-05）**：

- 流通量¥9.2B（~$60M），自 2025-Q4  主网上线 6  个月后扩大 7.5x
- 部署链：以太坊（主流）+ Polygon + Astar + Avalanche（陆续）
- 用户数（钱包持有）约 12 万 件
- 主要使用场景：DeFi（Aave / Compound JPY池）/ 跨境汇款（菲律宾 / 越南）/ 加密交易所JPY交易对（Bitbank / BITPoint / 部分境外交易所）/ 法人B2B薪资·费用报销（小规模试点）
- 监管状态：FSA资金转移第二种登记（关东财务局长 第00099号），修订《资金结算法》后的"EPI 第1号"定位（→ [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]）

**2026 H2 计划**：

1. **单笔汇款限额分阶段提升**：现行¥1M/笔 → ¥3M/笔（申请中）
2. **JPYC v2**发布（EIP-3009 / Permit + USDC式ERC-20Permit + 多链规范桥接标准化）
3. **法人合作伙伴突破 50 社 家**：薪资·费用报销·小额支付主网运营扩大
4. **在境外交易所正式上市**：Binance Japan（如上市则在EPI范畴内）/ KuCoin / Bybit等，但是否须经国内EPI服务提供商尚不明确
5. **提供Stripe / Square风格API**：搭建JPYC直接接入SDK
6. **DeFi整合**：Aave + Compound + Curve JPY流动性池深化 + 通过Uniswap v4 hook实现现货流动性

JPYC是典型的**资金转移型EPI**（修订《资金结算法》第二种），因此与信托型稳定币（Progmat）及ECISB路径的稳定币监管路径不同。详见 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 和 [[fintech/japan-ecisb-license|日本 ECISB 牌照]]。

## Progmat USD上线（信托型USD稳定币）

**定位**：Progmat（→ [[JapanFG/progmat|株式会社Progmat]]）是由大型银行信托（MUTB 49% + SMBC 15% + Mizuho 15%）+ NTT Data + JPX出资的数字资产平台。发行方为信托银行，Progmat为平台提供方。

**Progmat USD的设计概念**（基于 2026-Q1 公示信息）：

- **发行方**：三菱UFJ信托银行（主承销）+ 瑞穗信托银行（联合）+ 三井住友信托银行（联合）的信托联合架构
- **法律定位**：修订《资金结算法》项下的**特定信托受益权（第3号 EPI）**，USD锚定
- **底层资产**：美国短期国债 + USD存款（三菱UFJ银行纽约分行 / 美国代理行）+ USD现金
- **第三方审计**：月度PwC阿拉塔 + 德勤东华
- **链**：以太坊 + Polygon + Avalanche + JPX-DLT（Hyperledger Besu，面向国内机构的私有网络）
- **目标用户**：机构投资者 + 大型企业的USD结算·外汇对冲·跨境B2B支付
- **流通架构**：通过SBI VC Trade等EPI服务提供商分发，暂不在境外交易所直接上市

**与Project Pax的联动**：Progmat USD被视为"Project Pax"（三菱UFJ + SBI联合实证）的主网版本，实现SWIFT MT 103  → 基于区块链的跨境USD支付。Progmat USD = "信托型稳定币 + SWIFT兼容 + 机构级USD支付"三位一体。

**意义**：这是 [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]] 的首个**以USD计价**的实施案例。此前Progmat以JPY系证券化代币 + 不动产·公司债证券化代币为主，USD稳定币的推出将为国际机构投资者使用场景打开大门。

## DCJPY（DeCurret）联盟主网

**DCJPY** 是DeCurret Holdings（原DeCurret株式会社）运营的民间稳定币。**特征**：银行发行型（各银行发行JPY基础的"数字货币" + 在DCJPY网络上兼容流通）→ 参见 [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細ページ]]。

**2025-12  → 2026-Q1  正式转入主网运营（基于公示信息）**：

- **参与银行（发行方）**：三菱UFJ银行 / 瑞穗银行 / 三井住友银行 / 里索纳银行 / 其他地方银行（陆续）
- **参与联盟（使用方）**：三菱商事 + 关西电力 + 伊藤洋华堂 + JR东日本 + NTT东日本 + 大型商社·物流企业
- **使用场景**：B2B结算（商社↔制造商 零部件货款）+ 电力批发交易结算 + 流通供应链（伊藤洋华堂 × 批发商）
- **规模（2026-05）**：月度流通量~¥150B（~$1B等值）

**重要区别**：DCJPY在技术上与JPYC和Progmat属于不同系统（"银行发行 + 联盟兼容"模式），在监管上是否适用**第3号 EPI**存在争议（因非信托架构，部分观点将其归入其他类别）。FSA目前以"银行对电子支付手段的自主管理"方式默许DCJPY的存在。FSA EPI修订第二轮可能解决这一模糊性。

## SBI VC Trade USDC扩大

**SBI VC Trade**（→ [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade 詳細ページ]]）是**EPI服务提供商**（关东财务局长 第00001号），是日本国内处理USDC的唯一持牌方。

**2026 H1 扩大情况**：

- 流通余额¥45B（~$295M，2026-05），较 2025-12  的¥18B扩大 2.5x
- 面向法人的OTC服务开始（2026-01）→ 日系企业直接持有USDC的渠道解禁
- DeFi联动（有限）：通过SBI VC Trade间接为部分合规协议提供USDC存入渠道
- 通过智能合约实现自动KYC + 旅行规则对应的自研开发推进中
- Circle Japan直接代理关系预计于 2026-Q2  公示

**SBI x JPYC生态的含义**：SBI与JPYC无资本关系，但SBI VC Trade处理USDC，且SBI控股对包括JPYC在内的国内EPI全行业表现出投资·支持姿态。详见 [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]。

## 运营商·QR支付势力的参入观察

**观察对象 4 社**（2026 H2 动态）：

### KDDI au Wallet / au PAY

- 报道（2026-04  日经）："KDDI正在研究申请EPI服务提供商资质，有意将au PAY余额稳定币化"
- 战略：将au用户（~4,500 万 ID）整合至 1  个稳定币生态系统
- 挑战：与现有预付式支付手段（au Wallet）的法律整理，以及KDDI是否单独发行稳定币或成为类似SBI VC Trade的分销方

### NTT Docomo dpay / d支付

- 报道（2026-03）："Docomo于 2024 年 缩减加密资产部门，但 2026  重新研究"
- 战略：d支付（~5,000 万 ID）+ Docomo银行（新生银行整合后）的稳定币化
- 挑战：与过去Coincheck系（Monex Group旗下）关系的梳理

### LINE Finance / LINE Pay / LINE Xenon

- LINE Xenon JPY稳定币于过去（2020-2022）的PoC阶段后处于停滞状态
- Z Holdings（LINE + Yahoo Japan + PayPay母公司）重组后的稳定币战略尚未确定
- 报道（2026-05）："Z Holdings内部正在重新研究稳定币整合战略"
- 战略：将LINE Pay（~9,000 万 ID，主要覆盖亚洲）通过稳定币实现跨境化

### PayPay

- 国内最大QR支付（~6,000 万 ID，月度支付¥3T+）
- 受软银资本关系影响，稳定币战略方向较为复杂
- 基于公示信息，尚未公开稳定币参与计划，但业界观察认为"PayPay → 稳定币联动 OR 自营稳定币发行"有可能在 2027  之前具体落地

**含义**：上述 4 社 家中如有 1 社 家以EPI服务提供商或信托型稳定币发行方身份参入，日本稳定币市场将一举扩大至"数千万用户规模"。这意味着 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 中"运营商·QR支付第4阵营"的确立。

## FSA EPI修订第二轮（2026-Q2  公开征求意见预定）

**议题 1：信托型稳定币的组成与分配规则明确化**

- Progmat USD等信托型USD稳定币的发行·流通详细规则
- 信托受托银行与分销方（EPI服务提供商）的责任分担
- 境外信托（例：BNY Mellon的USD信托）的可用性

**议题 2：境外稳定币的流通范围扩大**

- 目前仅SBI VC Trade处理USDC → USDT / EURC / PYUSD等其他境外稳定币的流通可行性
- 白名单方式（仅FSA认定稳定币可流通）vs 黑名单方式（明示禁止稳定币）
- 处理标准（发行方监管状态 + 透明度 + 审计）的明文化

**议题 3：面向机构投资者的收益型稳定币**

- USDM（M0）/ sUSDe（Ethena）/ USDY（Ondo）等收益型稳定币的处理
- 目前在资金转移型EPI框架下不得支付利息，在信托型EPI框架下部分允许
- 研究类似机构投资者Reg-D 506(c)的制度

**议题 4：DeFi联动的监管**

- JPYC / SBI VC Trade USDC接入DeFi（Aave / Compound）的合规性
- 通过智能合约满足旅行规则（FATF建议16 的日本特有解释）
- "DeFi的DEX交易"是否视为EPI服务提供商业务

**含义**：FSA EPI修订第二轮将打破以JPYC为中心的现状，从制度上明文确立Progmat（信托型）+ SBI VC Trade（境外稳定币）+ 运营商系（新进入者）**4  个阵营并立的结构**。

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

- 金融厅 — 加密资产·电子支付手段相关政策 https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- 金融厅 — 电子支付手段等交易业者登记一览 https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC株式会社 — 新闻稿 https://jpyc.co.jp/news
- 株式会社Progmat — 新闻 https://progmat.co.jp/news
- DeCurret DCJPY — 官方网站 https://www.dcjpy.jp/
- SBI VC Trade — USDC https://www.sbivc.co.jp/usdc
- KDDI — 公司新闻稿 https://www.kddi.com/corporate/newsrelease/
- NTT Docomo — 新闻稿 https://www.docomo.ne.jp/info/news_release/
- LINE Corporation — 新闻稿 https://linecorp.com/en/pr/
- PayPay — 新闻稿 https://about.paypay.ne.jp/press/
- 日经新闻 2026-04  报道（KDDI EPI申请研究，公开文章）
- 日经新闻 2026-03  报道（Docomo加密资产重新研究，公开文章）

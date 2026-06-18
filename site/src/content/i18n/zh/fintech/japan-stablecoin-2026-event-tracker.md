---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: e38f809c8d4d18a6
lang: zh
status: machine
fidelity: ok
title: "日本 Stablecoin 2026 事件追踪器 · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 修订"
translated_at: 2026-06-18T23:59:13.093Z
---

# 日本 Stablecoin 2026 事件追踪器 · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 修订

## TL;DR

2026 年是日本稳定币行业从 **"PoC → mainnet"** 的转折期。**JPYC** 在 2025-Q4 以正式主网（Ethereum + Polygon + Astar）上线，并在 2026-05 流通达到 **约 ¥9.2B (~$60M)**；**Progmat** 计划在 2026-Q2 上线由超级银行信托主导的 **USD-anchored 第3号 EPI**（Progmat USD）；**DCJPY (DeCurret)** 在 2026-Q1 转入大型商社 + 电力公司 + 流通业的封闭式联盟正式运营；**SBI VC Trade USDC** 以 **约 ¥45B (~$295M)** 的流通量成为日本国内 USDC 的唯一正规流通渠道（→ [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]）；**KDDI au Wallet × NTT Docomo dpay × LINE Finance × PayPay** 中至少 2 社家正在考虑于 2026-Q3-Q4 申请 EPI service provider。**FSA EPI 修订（第二弹）** 计划于 2026-Q2 启动公开征求意见，议题包括信托型 SC 的组成·分配规则明确化 + 扩大海外 SC 的流通范围 + 面向机构投资者的 yield-bearing SC 的处理。

## Wiki 路径

本项目位于 [[fintech/INDEX|fintech index]] 之下。请与 [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]] 对照阅读以了解监管框架，与 [[fintech/japan-epi-three-types-overview|EPI 三類型概要]] 对照以了解分类法，并与 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 对照以了解竞争格局。主要发行体·流通体请参见 [[payment-firms/jpyc|JPYC株式会社]]、[[payment-firms/progmat|株式会社Progmat]]、[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]。

## 2026 主要事件时间线

| 月 | 事件 | 相关实体 | 含义 |
|---|---|---|---|
| 2025-Q4 | JPYC 正式主网运行 | JPYC株式会社 | "EPI 第1号" 启动（修订资金结算法之后） |
| 2025-12 | DCJPY 联盟转入正式运营 | DeCurret + 三菱商事 + 关西电力 + 永旺 | 商社·电力·流通的 B2B 结算正式运营 |
| 2026-01 | SBI VC Trade USDC 业务扩大（新增面向法人的 OTC） | SBI VC Trade + Circle | 国内 USDC 流通突破 ¥30B |
| 2026-Q1 | Progmat × MUTB × SMBC × Mizuho **第3号 EPI USD-anchored** 设计完成（公布） | Progmat + 三大超级银行信托 | 信托型 USD SC 设计完成 |
| 2026-Q2 | Progmat USD 上线（计划） | Progmat | 日本首个信托型 USD SC mainnet |
| 2026-Q2 | FSA EPI 修订第二弹 公开征求意见启动（计划） | 金融厅 | 信托型 SC 监管明确化 + 海外 SC 流通扩大 |
| 2026-Q2 | JPYC 流通突破 ¥10B（预测） | JPYC株式会社 | EPI 第1号的规模基准 |
| 2026-Q3 | KDDI au Wallet 考虑申请 EPI service provider（报道） | KDDI + au PAY | 运营商系第1社的进入观测 |
| 2026-Q3 | NTT Docomo dpay 重新研究加密资产对应（报道） | NTT Docomo | 运营商系第2社的动向 |
| 2026-Q4 | LINE Finance × LINE Pay 的 SC 战略明示（预测） | LINE Finance + Z Holdings | 与 LINE Xenon JPY SC 联动的可能性 |
| 2026-Q4 | PayPay × 软银的 SC 参与方针发布（预测） | PayPay | 国内最大 QR 结算进入观测 |

## JPYC mainnet 扩张

**现状（2026-05）**:

- 流通 ¥9.2B (~$60M)，自 2025-Q4 主网上线起 6 个月扩大 7.5x
- 部署链: Ethereum（主流）+ Polygon + Astar + Avalanche（依次）
- 用户数（钱包持有）约 12 万件
- 主要用例: DeFi (Aave / Compound JPY pair) / 跨境 remittance（菲律宾 / 越南）/ 加密交易所 JPY pair (Bitbank / BITPoint / 部分海外交易所) / 法人 B2B 工资·费用报销（limited pilot）
- 监管状态: FSA funds-transfer 第二种登记（关东财务局长 第00099号），2024 年修订资金结算法之后的 "EPI 第1号" 定位（→ [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]）

**2026 H2 计划**:

1. **转账限额分阶段上调**: 现行 ¥1M/笔 → ¥3M/笔（申请中）
2. **JPYC v2** 公开（EIP-3009 / Permit + USDC-style ERC-20Permit + Multi-chain canonical bridge 标准化）
3. **法人合作伙伴突破 50 社**: 工资·费用报销·小额结算的正式运营扩大
4. **正式登陆海外交易所**: Binance Japan（若上市则属 EPI 范畴）/ KuCoin / Bybit 等，但是否需要经由国内 EPI service provider 尚不明确
5. **提供 Stripe / Square 风格 API**: 完善 JPYC 直连 SDK
6. **DeFi 集成**: 深化 Aave + Compound + Curve JPY 池 + 经由 Uniswap v4 hook 的现货流动性

JPYC 是典型的 **funds-transfer-type EPI**（修订资金结算法第二种），因此与信托型 SC (Progmat) 或 ECISB-routed SC 的监管路径不同。详见 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 与 [[fintech/japan-ecisb-license|日本 ECISB 牌照]]。

## Progmat USD 上线（信托型 USD SC）

**定位**: Progmat（→ [[payment-firms/progmat|株式会社Progmat]]）是由超级银行信托银行（MUTB 49% + SMBC 15% + Mizuho 15%）+ NTT Data + JPX 出资的数字资产平台。发行体为信托银行，Progmat 为平台提供者。

**Progmat USD 的设计理念**（基于 2026-Q1 公布）:

- **发行体**: 三菱UFJ信托银行（主承销）+ 瑞穗信托银行（联合）+ 三井住友信托银行（联合）的信托共同方案
- **法律定位**: 修订资金结算法上的 **特定信托受益权（第3号 EPI）**，USD-anchored
- **支撑资产**: 美国短期国债 + USD 存款（MUFG NY 分行 / 美国代理银行）+ USD 现金
- **第三方审计**: 月度 PwC 新洲 (Aarata) + Deloitte 德勤 (Tohmatsu)
- **链**: Ethereum + Polygon + Avalanche + JPX-DLT (Hyperledger Besu, 面向国内机构的 private network)
- **目标**: 机构投资者 + 大型企业的 USD 结算·FX 对冲·跨境 B2B 结算
- **流通方案**: 经由 SBI VC Trade 等 EPI service provider 的 distribution，当前不直接登陆海外交易所

**与 Project Pax 的联动**: Progmat USD 也被定位为 "Project Pax"（MUFG + SBI 共同验证）的正式版本——后者使 SWIFT MT 103 → 基于区块链的跨境 USD 结算成为可能。Progmat USD = "信托型 SC + SWIFT 兼容 + 机构级 USD 结算" 三位一体。

**意义**: 这是 [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]] 首个 **USD-denominated** 实现。此前的 Progmat 以 JPY 系 ST + 不动产·公司债 ST 为中心，而 USD SC 将解锁国际化的机构投资者用例。

## DCJPY (DeCurret) 联盟正式运营

**DCJPY** 是 DeCurret Holdings（原 DeCurret 株式会社）运营的民间 SC。**特征**: 银行发行型（各银行发行基于 JPY 的 "数字货币" + 在 DCJPY 网络上互通流通）→ 参见 [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細ページ]]。

**2025-12 → 2026-Q1 转入正式运营（基于公布）**:

- **参与银行（发行体）**: 三菱UFJ银行 / 瑞穗银行 / 三井住友银行 / 理索那银行 / 其他地方银行（依次）
- **参与联盟（使用体）**: 三菱商事 + 关西电力 + 永旺 + JR东日本 + NTT东日本 + 大型商社·物流企业
- **用例**: B2B 结算（商社↔制造商 零部件货款）+ 电力批发交易结算 + 流通供应链（永旺 × 批发 业者间）
- **规模（2026-05）**: 月度流通 ~¥150B (~$1B-equivalent)

**重要区别**: DCJPY 在技术上与 JPYC 或 Progmat 属于不同系统（"银行发行 + 联盟互通" 模型），在监管上是否适用 **第3号 EPI** 尚有争议（因非信托方案，部分论者将其归为另一类别）。FSA 目前将 DCJPY 作为 "银行对电子结算手段的自主管理" 默示性容许。FSA EPI 修订第二弹有可能消除这一模糊性。

## SBI VC Trade USDC 扩大

**SBI VC Trade**（→ [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade 詳細ページ]]）是 **EPI service provider**（关东财务局长 第00001号），是在日本国内经手 USDC 的唯一正规持牌方。

**2026 H1 扩大**:

- 流通余额 ¥45B (~$295M, 2026-05)，自 2025-12 的 ¥18B 扩大 2.5x
- 启动面向法人的 OTC 服务（2026-01）→ 解锁日系企业直接持有 USDC 的路径
- DeFi 联动（有限）: 经由 SBI VC Trade 间接为部分合规协议提供 USDC 存入路径
- 经由智能合约的自动 KYC + Travel Rule 对应的自研正在推进
- 计划于 2026-Q2 公布与 Circle Japan 的直接代理关系

**SBI x JPYC 环的含义**: SBI 与 JPYC 无资本关系，但 SBI VC Trade 经手 USDC，且 SBI 控股 对包括 JPYC 在内的日本国内 EPI 行业整体展现出投资·支持姿态。这在 [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]] 中详述。

## 运营商·QR 结算势力的进入观测

**观测对象 4 社**（2026 H2 动向）:

### KDDI au Wallet / au PAY

- 报道（2026-04 日经）: "KDDI 考虑申请 EPI service provider，着眼于 au PAY 余额的 SC 化"
- 战略: 将 au 用户（~4,500 万 ID）整合进 1 个 SC 生态系统
- 课题: 与既有预付式支付手段（au Wallet）的法律梳理，KDDI 单独发行 SC 还是成为 SBI VC Trade 那样的分配体

### NTT Docomo dpay / d 支付

- 报道（2026-03）: "Docomo 曾于 2024 年缩减加密资产部门，但于 2026 重新研究"
- 战略: d 支付（~5,000 万 ID）+ Docomo 银行（整合新生银行后）的 SC 化
- 课题: 与过去 Coincheck 系（Monex Group 系列）的关系梳理

### LINE Finance / LINE Pay / LINE Xenon

- LINE Xenon JPY SC 在过去（2020-2022）的 PoC 阶段处于停止状态
- Z Holdings（LINE + Yahoo Japan + PayPay 母公司）重组后的 SC 战略未定
- 报道（2026-05）: "Z Holdings 内部正在重新研究 SC 整合战略"
- 战略: 将 LINE Pay（~9,000 万 ID, 主要在亚洲圈）经由 SC 跨境化

### PayPay

- 国内最大 QR 结算（~6,000 万 ID, 月度结算 ¥3T+）
- 受软银资本关系影响，SC 战略方向复杂
- 基于公布信息尚未表明 SC 参与，但行业观测认为 "PayPay → SC 联动 OR 自家 SC 发行" 有可能在 2027 前具现化

**含义**: 4 社中任一 1 社家以 EPI service provider 或信托型 SC 发行体身份进入，日本的 SC 市场就会一举扩大到 "数千万用户规模"。这意味着 [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] 中 "运营商·QR 结算 第4阵营" 的确立。

## FSA EPI 修订第二弹（2026-Q2 计划公开征求意见）

**议题 1: 信托型 SC 的组成·分配规则明确化**

- 关于 Progmat USD 这类信托型 USD SC 发行·流通的详细规则
- 信托受托银行与分配体（EPI service provider）的责任划分
- 海外信托（例: BNY Mellon 的 USD 信托）的可用与否

**议题 2: 扩大海外 SC 的流通范围**

- 目前 SBI VC Trade 仅经手 USDC → USDT / EURC / PYUSD 等其他海外 SC 的流通可否
- 白名单方式（仅 FSA 认定 SC 可）vs 黑名单方式（明示禁止的 SC）
- 经手标准（发行体的监管状态 + 透明度 + 审计）的明文化

**议题 3: 面向机构投资者的 yield-bearing SC**

- USDM (M0) / sUSDe (Ethena) / USDY (Ondo) 等 yield-bearing SC 的处理
- 现状下 funds-transfer-type EPI 框架不可付息，信托型 EPI 框架部分许可
- 研究面向机构投资者的类 Reg-D 506(c) 制度

**议题 4: DeFi 联动的监管**

- 经由 JPYC / SBI VC Trade USDC 的 DeFi 联动（Aave / Compound）的合规性
- 经由智能合约的 Travel Rule 对应（对 FATF Recommendation 16 的日本特有解释）
- 是否将 "DeFi 的 DEX 交易" 视为 EPI service provider 业务

**含义**: FSA EPI 修订第二弹将打破以 JPYC 为中心的现状，从制度上明文确立 Progmat（信托型）+ SBI VC Trade（海外 SC）+ 运营商系（新进入）的 **4 阵营并立结构**。

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
- [[payment-firms/jpyc|JPYC株式会社]]
- [[payment-firms/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済の法体系]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026]]

## Sources

- 金融厅 — 加密资产·电子结算手段相关政策 https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- 金融厅 — 电子结算手段等交易业者登记一览 https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC株式会社 — 新闻发布 https://jpyc.co.jp/news
- 株式会社Progmat — News https://progmat.co.jp/news
- DeCurret DCJPY — official site https://www.dcjpy.jp/
- SBI VC Trade — USDC https://www.sbivc.co.jp/usdc
- KDDI — Corporate news release https://www.kddi.com/corporate/newsrelease/
- NTT Docomo — News release https://www.docomo.ne.jp/info/news_release/
- LINE Corporation — Press Release https://linecorp.com/en/pr/
- PayPay — News release https://about.paypay.ne.jp/press/
- 日经新闻 2026-04 报道（KDDI EPI 申请研究，公开文章）
- 日经新闻 2026-03 报道（Docomo 加密资产重新研究，公开文章）

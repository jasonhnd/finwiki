---
source: exchanges/japan-stablecoin-issuer-regulatory-classification-matrix
source_hash: e15510fbafd4044d
lang: zh
status: machine
fidelity: ok
title: "日本 stablecoin 发行体 监管分类矩阵 — 电子支付手段等交易业 / 信托型 / 银行发行型 / 资金移动业者型 / 预付式支付手段边界"
translated_at: 2026-05-31T03:19:56.381Z
---

# 日本 stablecoin 发行体 监管分类矩阵 — 电子支付手段等交易业 / 信托型 / 银行发行型 / 资金移动业者型 / 预付式支付手段边界

## TL;DR

日本的日元计价 · 美元计价 stablecoin（修订资金结算法 2023-06 中明文定义为「电子支付手段」），按 **发行体业态 × 法律依据** 分为 5 个监管类别：(1) **资金移动业者型 (EPI 第 2 种)** = 仅 [[exchanges/jp-exchange-jpyc|JPYC]]、(2) **信托型 (特定信托受益权 · EPI 第 3 种)** = 在 [[fintech/jp-stablecoin-progmat|Progmat]] 平台上由 MUFG 信托 · SMBC 信托 · 瑞穗信托发行、(3) **银行发行型 (存款代币，EPI 第 1 种邻接)** = [[fintech/jp-stablecoin-dcjpy|DCJPY]] 与 Minna Bank SC、(4) **经电子支付手段等交易业 (ECISP) 的海外 SC 中介** = [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] (第00001号) 的 USDC 经办、(5) **预付式支付手段 (legacy)** = JPYC v1 所走的 2023 年修订前的归档边界。除发行体外，作为潜在进入者，KDDI / NTT Docomo / LINE Finance / 邮储银行 拥有对银行发行型 · 资金移动业者型作出承诺的可能性。各类别按 **发行者 · 取得牌照 · 1:1 可赎回性 · 支撑资产 · 结算 finality · FSA/JVCEA 监督 · 二级市场接入 · 跨境** 的 8 轴横向并列比较。

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **发行体轴 (issuer-axis)** counterpart to [[fintech/INDEX|fintech index]] policy entries [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]] / [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]] / [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] / [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构]] / [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]. Read alongside [[fintech/japan-ecisb-license|日本 ECISB 牌照]] for the 仲介业者 boundary and [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the legacy 预付式支付手段 边界. Operator anchors live in [[JapanFG/jpyc|JapanFG jpyc]] / [[JapanFG/progmat|JapanFG progmat]] and [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]].

## Why this matrix matters

- 日本 **2023-06 以修订资金结算法施行，在世界上率先明文确立 SC 的法律地位**，比 GENIUS Act 领先约 2 年。框架本身较早，但各类别的**实施节奏差异巨大**：资金移动业者型由 JPYC 于 2025-Q3 商用运营，信托型 Progmat Coin 截至 2026-05 时点官方发行为零，银行发行型 DCJPY 于 2024-08 IIJ 非化石证书交易中首次商用运营。
- **发行体类别的差异并非技术选型，而是在法律上约束营业范围 · 流通上限 · 对手方 · 分别管理方式**。例如资金移动业者型有 1 次 100 万円上限的法定，信托型则无此约束，但作为代价会触发信托受托银行的信托业法义务。
- **美元计价 SC 的国内流通，唯一合法路径是经由取得 ECISP（电子支付手段等交易业）牌照的业者**。SBI VC Trade 于 第00001号开始 2025-03 经办 USDC，确立了「日本国内能经办美元计价 SC 的唯一正规路径」。
- 监管类别的差异还直接关系到 **proof-of-reserves 披露频率 · bail-in 顺位 · 破产时客户资产处理**。发行体破产时，信托型经信托银行破产隔离 100% 保全，资金移动业者型经履行保证金制度保全，而银行型为存款保险对象。

## Per-issuer / per-classification sections

### A. 资金移动业者型 (EPI 第 2 种) — JPYC

- **发行体**：[[exchanges/jp-exchange-jpyc|JPYC 株式会社]] (2019-11 设立，关东财务局 第00099号 资金移动业者)
- **取得牌照**：**资金移动业者** (资金结算法第 37 条) + 预付式支付手段 (第三者型) 第00773号 (JPYC v1 legacy 用，现以 v2 为主流)
- **JVCEA 区分**：第一种会员 #1042 — 登记区分仅「资金移动业 (Funds transfer)」。未授予加密资产交换业 · 衍生品 · 电子支付手段等交易业的 JVCEA 区分
- **对象代币**：JPYC (1 JPYC = 1 円 锚定，Ethereum / Polygon / Avalanche / Gnosis Chain 等多链)
- **1:1 可赎回性**：1 円锚定 + 1 次 100 万円兑换上限 (2026-05 修订)
- **支撑资产**：履行保证金 (资金移动业者的供托或信托或保证合同) — 客户资产为 50% 以上的供托义务
- **结算 finality**：公链上 onchain settlement (Ethereum 12 confirmations 等)，JPYC EX 内即时
- **FSA/JVCEA 监督**：FSA 关东财务局 + JVCEA (资金移动业区分)
- **二级市场**：JPYC EX (官方) + Uniswap 等 DEX + 元数据星球 / 住友生命系 零售网点
- **跨境**：以国内利用为前提，无面向海外的劝诱
- **流通实绩** (2025-12)：累计账户 1 万件 · 累计发行额 5 億円
- **战略伙伴**：Asteria (3853 东证 Growth) Series B 领投，元数据星球 (3350) · 住友生命

### B. 信托型 (特定信托受益权 / EPI 第 3 种) — 在 Progmat 上发行的三大信托银行 + DMM

- **平台提供**：[[fintech/jp-stablecoin-progmat|株式会社 Progmat]] (2023-10-02 独立法人化，CEO 齊藤達哉，丸之内总部)
- **发行体 (受托信托银行)**：
  - **三菱 UFJ 信托银行** (MUTB) — Progmat 的单独受托机构 (49% 股东)
  - **三井住友信托银行** (SMTB) — 共同委托者 (Progmat 约 15% 出资)
  - **瑞穗信托银行** (Mizuho Trust) — 共同委托者 (约 15% 出资)
  - **DMM Group 牌照案件** (2024-08 发布) — 受托银行未确定
- **取得牌照**：信托业法 + 修订资金结算法第 3 号 EPI (特定信托受益权)
- **JVCEA 区分**：Progmat 本身 **非 JVCEA 加盟**。受托信托银行亦非加密资产交换业者，故无 JVCEA 区分
- **对象代币**：Progmat Coin (XJPY / XUSD 等系列，将信托受益权在区块链上表示)
- **1:1 可赎回性**：信托受益权的面值与 1:1 — 流通上限无法定 (仅信托银行的 BS 健全性)
- **支撑资产**：信托银行内的分别管理账户 (信托业法 · 非存款保险对象)
- **结算 finality**：联盟 L1 / 公链 (经 Datachain 联动接入 Ava Labs 2026-02)
- **FSA/JVCEA 监督**：FSA + 信托业法 (信托业务监督) + 修订资金结算法 (EPI 监管)
- **二级市场**：以机构对机构 B2B 为中心，零售流通未运营
- **跨境**：Project Pax (经 Datachain · TOKI 联动的日韩 SC 转送试点 2024-09 开始)，但 [[fintech/cross-border-sc-via-swift-api|SWIFT API 互換ルート]] 为主轴
- **流通实绩** (2026-05)：SC 官方发行为零 (ST 数字证券经 Progmat 超 4,522 億円，为国内最大)

### C. 银行发行型 (存款代币 / EPI 第 1 种邻接) — DCJPY + Minna Bank SC

- **平台提供**：[[fintech/jp-stablecoin-dcjpy|株式会社ディーカレット DCP]] (2026-07-01 预定被母公司 DeCurret HD 吸收合并)
- **发行体 (参加银行)**：
  - **GMO 青空网络银行** — DCJPY 商用发行第 1 号 (2024-08 IIJ 非化石证书交易中运营)
  - **邮储银行** — 表明 2026 年年度 DCJPY 发行计划 (2025-09 报道)
  - **SBI 新生银行** — DCJPY 导入探讨中 (2025-09 报道)
  - **三菱 UFJ 银行** — DCP 董事派遣 · 参加论坛 (发行承诺未确定)
  - **横滨银行** — 实证参加
  - **Minna Bank** (福冈 FG 系) — 以独自路线开发基于 Solana 的银行型 SC 中
- **取得牌照**：银行业法 (将存款在银行账户内代币化)。在修订资金结算法上邻近于 SC 三型中的「银行发行型」，但纯粹作为银行存款运营
- **DCP 自身**：电子支付等代行业者 (关东财务局长 (电代) 92 号，2021-11)，JVCEA **非**加盟
- **对象代币**：DCJPY (1 円 = 1 DCJPY，参加银行各自发行)、Minna Bank SC (Solana 链)
- **1:1 可赎回性**：作为银行存款 1 円 1:1 — 流通上限仅银行 BS 健全性
- **支撑资产**：银行账户内存款 (存款保险对象，至 1,000 万円)
- **结算 finality**：DCJPY 网络 (Amic Sign 两层结构，金融区 × 业务区)，Minna Bank 为 Solana
- **FSA 监督**：FSA 银行业务监督 + 电子支付等代行业监督
- **二级市场**：B2B 商业交易 DX (大阪钢巴 · JACDS · First Accounting 4 社 PoC) + ST DVP (2026-04 SBI 证券 · IIJ 国内首次实发行验证完成)
- **跨境**：Project Pax (与信托型共通基础设施) + 银行间 RTGS 构想 (2026-04 FSA FinTech 中心采纳)
- **流通实绩** (2026-05)：商用运营中，面值未公布

### D. 经电子支付手段等交易业 (ECISP) 的美元计价 SC 中介 — SBI VC Trade + USDC

- **取得业者**：[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — 关东财务局长 第00001号 (2025-03-04 登记完成，国内 ECISP 第 1 号)
- **取得牌照**：电子支付手段等交易业 (修订资金结算法第 62 条之 3) + 加密资产交换业 (关东财务局长 第00011号) + 第一种金融商品交易业 (3247 号)
- **对象代币**：**USDC** (Circle 发行) + 探讨中：PYUSD (PayPal) / EURC (Circle EUR)
- **发行体**：Circle Internet Financial (USDC 发行，SBI Circle Holdings 2025-08 设立 50/50 JV 在日本独家分销)
- **1:1 可赎回性**：经由 USDC 的 Circle 赎回路径 (国内仅 SBI VC Trade 的现货交易，银行 wire 经 SBI Circle Holdings)
- **支撑资产**：Circle 的 reserves (美国短期国债 + 银行存款，月度 attestation)
- **结算 finality**：Ethereum / Solana / Polygon / Arbitrum 等多链
- **FSA/JVCEA 监督**：FSA + JVCEA (ECISP 区分独立，与加密资产交换业区分不同)
- **二级市场**：SBI VC Trade 现货交易 + USDC 借贷 (2026-03 国内首次开始)
- **跨境**：从 §501(d) 视角，SBI Circle Holdings 处于 **跨境合规霸主的地位** ([[fintech/japan-epi-four-camps-comparison|EPI 四阵营 v2 評価で #1]])
- **流通实绩**：2025-03 开始经办以来面值未公布

### E. 预付式支付手段 (legacy 边界) — JPYC v1 归档 + Suica/PASMO 领域

- **发行体类别**：修订资金结算法 (2023-06) 施行前的 JPYC v1，以及现存的 Suica / nanaco / WAON / PASMO 等交通系 · 流通系 IC 货币
- **取得牌照**：预付式支付手段发行者 (第三者型或自家型，资金结算法第 31 条)
- **边界线**：修订法施行后，「可 value transfer + onchain」的代币原则上有向 EPI 区分迁移的义务。Suica 等 IC 因 **transferability 限制 + 闭环** 而留在预付式支付手段 (参照 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]])
- **归档案例**：JPYC v1 (2021-2025) 以预付式支付手段第00773号发行，于 2025-Q3 迁移至 v2 (资金移动业者型)
- **监管差异**：
  - **可兑换性**：预付式原则上不可兑换，资金移动业者型可兑换
  - **可送金**：预付式仅限支付，资金移动业者型可 P2P 送金
  - **发行体破产时**：预付式为基准日未使用余额的 50% 供托，资金移动业者型以履行保证金保全
- **边界线监视**：BNPL × prepaid × 资金移动业的三方边界参照 ([[payments/japan-bnpl-credit-purchase-boundary|BNPL 信用購入境界]])

### F. 潜在进入者 (2026-2027 发行承诺候选)

- **KDDI** — 经 au Jibun 银行系 + au PAY (预付式支付手段) 探讨银行发行型 SC。有向 DeCurret DCP 派遣董事 (物江信明)
- **NTT Docomo** — 借助 d 支付 + 三菱 UFJ 银行 / OLIVE 银行账户联动，有进入资金移动业者型 SC 或信托型 SC 的可能性
- **LINE Finance / LINE Pay** (LINE 雅虎 4689 子公司) — LINE Xenesis ([[exchanges/jp-exchange-line-xenesis]]) 于 2026-06 服务终止，向 Stablecoin 领域展开的可能性
- **邮储银行** — 向 DCJPY 银行发行型作出 2026 年年度发行承诺 (2025-09 报道)
- **PayPay / PayPay 银行** (Z Holdings 系) — 以 PayPay 余额 (预付式) 和 PayPay 银行 (银行业)，预付式 / 银行发行型两者皆可
- **Mercari Mercoin** ([[exchanges/jp-exchange-mercoin]]) — 经 Merpay (资金移动业 + 预付式)，有发行资金移动业者型 SC 的可能性
- **元数据星球 (3350)** — 以 JPYC Series B 出资为 BTC × SC 联动的布局 (并非发行体而是 ecosystem 投资者)

## Big comparison matrix table

| 轴 | A. 资金移动业者型 JPYC | B. 信托型 Progmat | C. 银行发行型 DCJPY | D. ECISP USDC (SBI) | E. 预付式支付手段 legacy |
|---|---|---|---|---|---|
| **发行体类别** | 资金移动业者 | 信托银行 | 银行 | 海外 SC 中介经办业者 | 预付式支付手段发行者 |
| **代表发行体** | [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] | MUFG 信托 · SMBC 信托 · 瑞穗信托 (在 Progmat 上发行) | GMO 青空网络银行 / 邮储银行 / SBI 新生银行 | Circle (海外发行，SBI VC Trade 国内经办) | JPYC v1 (legacy), Suica, nanaco, WAON, PASMO |
| **法律依据** | 资金结算法第 37 条 | 信托业法 + 第 3 号 EPI | 银行业法 + 第 1 号 EPI 邻接 | 修订资金结算法第 62 条之 3 (ECISP) | 资金结算法第 31 条 |
| **登记号例** | 关东财务局 第00099号 | (无对应，作为信托业务运营) | 银行业免许 + 电代 92 号 (DCP) | 关东财务局 第00001号 (ECISP) | 关东财务局 第00773号 (JPYC v1) |
| **JVCEA 区分** | 第一种 (资金移动业) | 非加盟 | 非加盟 | 第一种 (ECISP) | 非加盟 |
| **1:1 可赎回性** | 1 円 = 1 JPYC, 1 次 100 万円上限 | 1 円 = 1 XJPY, 无上限 | 1 円 = 1 DCJPY, 无上限 | 1 USD = 1 USDC (经 Circle) | 原则上不可兑换 |
| **流通上限** | 1 次 100 万円 (2026-05 修订) | 无法定 | 无法定 (仅 BS 健全性) | 现货交易限度 | 余额累计无上限，仅限加盟店内 |
| **支撑资产** | 履行保证金 (供托 / 信托 / 保证 50%+) | 信托账户 (破产隔离 100%) | 银行存款 (存款保险 1,000 万円) | Circle reserves (短期美国债 + 银行) | 基准日未使用余额 50% 供托 |
| **结算 finality** | 公链 (ETH / Polygon / AVAX 等) | 联盟 L1 + Ava Labs 接入 | DCJPY 网络 (Amic Sign) | ETH / Solana / Polygon / Arbitrum | 闭环 DB (NFC) |
| **FSA 直接监督** | ○ 关东财务局 | ○ FSA + 信托业法 | ○ FSA 银行业务监督 | ○ 关东财务局 (ECISP) | ○ 关东财务局 (预付式) |
| **二级市场 onchain** | ○ DEX (Uniswap 等) | △ 仅机构对机构 | △ 以商业交易 DX 为中心 | ○ 经 DEX | ✕ 闭环 |
| **跨境** | ✕ 以国内利用为前提 | △ Project Pax (日韩 · 日港) | △ 银行间 RTGS 构想 (实证阶段) | ◎ 经 Circle reserves 全球接入 | ✕ 国内 |
| **发行体破产时保全** | 以履行保证金保全 | 以信托完全破产隔离 | 存款保险对象 | Circle 破产则受影响 | 50% 供托范围内保全 |
| **proof-of-reserves 频率** | 公布以监督报告为基准 | 信托会计审计基准 | 银行决算基准 | Circle 月度 attestation | 监督报告 |
| **设想客群** | 个人零售 + 企业间结算 | 机构对机构 B2B (证券 · 大额) | 企业间结算 + ST DVP + 供应链 | 零售 + DeFi 利用者 | 加盟店零售 |
| **竞合关系** | DCJPY (B2B 领域重叠) + ECISP USDC (替代手段) | DCJPY (大额结算重叠) + JPYC (法人结算重叠) | Progmat (大额结算重叠) | JPYC (USD 兼容性替代候选) | 被资金移动业者型抢占 segment |
| **代表流通额** (2026-05) | 累计发行 5 億円超 | 官方发行为零 (ST 为 4,522 億円) | 商用运营中 (面值未公布) | 经办开始 2025-03 以来 (未公布) | 数百亿日元规模 (Suica 年间数兆日元流通) |
| **未来进入者** | KDDI / Docomo / Merpay / PayPay 银行 | DMM (2024-08 发布) + 其他信托银行 | 邮储 / SBI 新生 / 三菱 UFJ / 横滨银行 / Minna Bank (Solana 别路径) | 其他 ECISP 取得者 (今后 5-10 社预期) | 既有 IC 货币继续，无新规进入 |
| **战略伙伴** | Asteria / 元数据星球 / 住友生命 | NTT Data + JPX + Datachain + Ava Labs | IIJ + SBI HD + KDDI + NTT + 三菱 UFJ + 邮储 + KDDI | Circle (SBI Circle Holdings 50/50 JV) | (各 IC 发行体) |
| **§501(d) 视角的定位** | 国内零售合规 #2 ★★★★ | 国内 B2B 大额 #3 ★★★ (无跨境合规) | 纯本土零售 #4 ★★ | **跨境合规霸主 #1 ★★★★★** | (监管对象外) |

## Boundary cases

### B1. JPYC v1 → v2 迁移的边界 (预付式 → 资金移动业者型)

- 2021-2025 的 JPYC v1 以预付式支付手段第00773号发行。2023-06 修订资金结算法施行后，JPYC 将法律定位从预付式迁移至资金移动业者型 EPI。
- **边界判定**：预付式为「价值不可移转 · 仅限支付」，资金移动业者型为「可 P2P 送金 + 可兑换」。JPYC v1 因可多链 onchain 送金而符合修订后的 EPI 定义 → 强制迁移至 v2 。
- **归档**：2026-04-28 金融厅官方资料首次将 JPYC 明示为「资金移动业」。

### B2. Minna Bank SC 的银行发行型 vs 基于 Solana 第三型的混合性

- Minna Bank (福冈 FG 系) 采取 **在 Solana 链上实现银行发行 SC** 这一无先例的实现路径。
- **边界判定**：银行账户内存款代币与 EPI 第 1 号的区别模糊。在修订资金结算法的 SC 三型分类 (信托型 / 银行发行型 / 资金移动业者型) 中很可能属于银行发行型 (第 1 号 EPI)，但在 Solana 公链上 onchain 流通的设计与他行 DCJPY (联盟 L1) 不同。
- **2026-05 时点**：FSA 的正式分类未公布。永吉健一 (Minna Bank) 持续独自路线。

### B3. SBI VC Trade USDC 经办的双重牌照边界

- SBI VC Trade **双重持有 加密资产交换业 (第00011号) + ECISP (第00001号)**。USDC 以 ECISP 区分经办，BTC/ETH 以加密资产交换业区分经办。同一平台内两个法律层并存的首例。
- **边界判定**：USDC 在法律上属「电子支付手段」，故与加密资产交易为不同层。客户资产的分别管理规则 · 分别管理方式也不同。
- **JVCEA 区分**：加密资产交换业区分 (1011) 与 ECISP 区分在同一会员中并列 (JVCEA 内首次并列持有)。

### B4. DCJPY 存款代币与 EPI 第 1 号的边界

- DCJPY 在法律上是「银行发行的存款代币化」=纯粹在银行法框架内。也有解释认为不属于修订资金结算法的 EPI 第 1 号 (银行发行型 SC)。
- **边界判定**：银行发行型 EPI 在修订资金结算法中亦作为另一 framework 存在，但 DCJPY 因是 **将银行存款本身代币化** 的设计，在存款保险 · 银行业务监督框架内运营。EPI 第 1 号是「银行作为 SC 发行」的设计，与 DCJPY 的法律边界不同。
- **2026-05 时点**：FSA 的正式见解未公布。两种解释并存。

### B5. ECISP (第 00001 号) + 资金移动业者型 (JPYC) 的跨境联动边界

- SBI Circle Holdings (2025-08 设立) 正在构建 **USDC ↔ JPYC 的双向结算通道**，但两者的监管类别不同：
  - USDC = 以 ECISP 第 00001 号经办 (SBI VC Trade)
  - JPYC = 以资金移动业者型第 00099 号发行 (JPYC 株式会社)
- **边界判定**：将 USDC 直接兑换为 JPYC，需 ECISP 业者 + 资金移动业者的双方牌照。SBI VC Trade 负责 USDC 侧，JPYC 株式会社负责 JPY 侧的分工结构。
- **§501(d) 视角**：该双重牌照架构是「日本 USD-JPY SC 跨境合规霸主」的核心 ([[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]])。

### B6. 信托型 Progmat Coin 的发行体缺位问题

- Progmat 是 **平台提供者而非发行体**。实发行设想由三菱 UFJ 信托银行 / SMBC 信托银行 / 瑞穗信托银行各自进行，但截至 2026-05 时点官方发行为零。
- **边界判定**：「在 Progmat 上发行的 SC」在法律上是各信托银行的特定信托受益权，Progmat 本身为监管对象外 (作为数字资产共创联盟 DCC 的事务局，担任汇总 331 社的角色)。
- **竞合**：即便同为信托型 SC，与 DMM Group 的 2024-08 发布案件未公布受托银行 (是否经 Progmat 未确认)。

### B7. JPYC v2 与 Progmat XJPY 的用途分工

- JPYC = 资金移动业者型，1 次 100 万円上限 + 公链 onchain + 零售
- Progmat XJPY = 信托型，无上限 + 联盟 L1 + B2B 大额
- 即便同为「日元锚定 SC」，用途分工在结构上已确定。JPYC 瞄准个人 P2P + 加盟店结算 + 法人清算 (100 万円以下)，Progmat XJPY 瞄准机构对机构的证券结算 + 大额 B2B 清算。
- **分工的确认事件**：2026-04 JPYC 将 1 次上限修订为 100 万円 → 扩张法人 B2B 清算范围的战略举动。对抗 Progmat 一侧独占 B2B 大额的格局。

### B8. 银行发行型 (DCJPY) 与银行业法上银行存款的边界

- DCJPY 是 **「银行发行的存款代币」** = 将银行业法第 2 条的「存款」代币化。法律上即存款本身，与修订资金结算法 SC 三型的「银行发行型 EPI」在技术上虽可衔接但严格而言为不同层。
- **存款保险对象**：DCJPY 余额为存款保险对象 (至 1,000 万円)。与此相对，JPYC · Progmat XJPY 非存款保险对象，以履行保证金 (JPYC) / 信托 (Progmat) 保全。
- **bail-in 顺位**：银行发行型在存款保险后的银行破产中确定分配顺位，信托型完全破产隔离，资金移动业者型以履行保证金保全。

### B9. ECISP 业者的追加取得预定方与美元计价 SC 市场的扩大

- SBI VC Trade 以 ECISP 第00001号开始 2025-03 经办 USDC 后，其他 VASP 也在准备追加取得 ECISP：
  - **bitFlyer** = ECISP 取得探讨中 (2025 内部表明)
  - **Coincheck** = ECISP 取得 + Monex 集团内衍生品联动的探讨
  - **GMO Coin** = ECISP 取得 + USDC 经办探讨
- 预计于 2026-2027 有 **5-10 社的 ECISP 取得**，美元计价 SC (USDC / PYUSD / EURC) 的国内流通将正式化。
- **竞合面**：国内 ECISP 取得业者增加，SBI VC Trade 的 USDC 国内独占地位淡化。但经 SBI Circle Holdings 50/50 JV 与 Circle 的独家分销合同很可能维持。

### B10. 与 CBDC (日元) 的未来边界

- 日本银行 (BoJ) 于 2023-04 开始 CBDC (中央银行发行数字货币) 的试点验证，于 2026 年年度后半进入「用例实证」阶段。
- **未来边界**：若日元 CBDC 实现，与银行发行型 SC (DCJPY) 的竞合可能性高。另一方面，信托型 SC (Progmat) 与资金移动业者型 SC (JPYC) 因基础设施层不同，与 CBDC 共存的可能性高。
- 截至 2026-05 时点日元 CBDC 的实现尚未决定，但政策讨论正式化。

## 战略含义

### 含义 1: 4 阵营的角色分工固定化

[[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] 于 2025-2026 固定化：
- **SBI Circle Holdings / USDC** = 跨境合规霸主 (§501(d) 入榜后的 v2 评价 #1)
- **JPYC** = 国内零售 (个人 + 法人清算 100 万円以下)
- **Progmat** = B2B 大额 (信托型 + ST 联动)
- **DCJPY / Minna Bank SC** = 银行发行型 (商业交易 DX + ST DVP)

### 含义 2: ECISP 业者多元化使美元计价 SC 市场正式化

SBI VC Trade 第00001号后，以 5-10 社的 ECISP 追加取得 (2026-2027)，**美元计价 SC (USDC / PYUSD / EURC) 的国内流通** 扩大。日本居民持有 · 送金美元计价 SC 的正规路径将建立。

### 含义 3: 银行系 SC 的正式运营 (邮储 + SBI 新生 + 三菱 UFJ)

DCJPY 银行发行型的关键发行体预定方 (邮储 2026 年年度发行计划、SBI 新生探讨中、三菱 UFJ 董事派遣) 若运营，银行发行型 SC 将于 2027-2028 正式化。存款保险对象这一高保全级别是对个人零售的诉求点。

### 含义 4: 信托型以与 ST 数字证券的联动发挥本领

Progmat 截至 2026-05 时点 SC 官方发行为零，但 ST 数字证券超 4,522 億円，为国内最大平台。**以 ST + SC 的 DVP 结算** 发挥信托型 SC 的本领 (2026-04 国内首次实发行验证完成)。

### 含义 5: 预付式支付手段固定化于 IC 货币领域

Suica / nanaco / WAON / PASMO 等预付式支付手段，以 **transferability 限制 + 闭环** 固定化于与资金移动业者型 SC 不同的领域。无新规进入的预付式 SC，像 JPYC v1 这样的预付式型 SC 因 2023-06 修订法施行而被强制迁移至资金移动业者型。

### 含义 6: 监管类别的选择决定发行体的业务模式

- **资金移动业者型** = 以接受 1 次 100 万円上限为代价，可自营发行 · 兑换平台 (JPYC 模式)
- **信托型** = 自身不能成为发行体，但作为平台提供者可统辖 331 社的 DCC 联盟 (Progmat 模式)
- **银行发行型** = 需银行业免许，但为存款保险对象的最高保全级别 + 银行间 RTGS 构想 (DCJPY 模式)
- **ECISP** = 可在国内经办海外 SC，但并非发行体而是中介者 (SBI VC Trade 模式)
- **预付式** = 固定于 legacy 领域，不适合作为新规 SC 业务

## 监视要点 (2026-2027)

- **金融厅** 是否将 JPYC 的 1 次上限 100 万円修订永久化，或探讨追加上调
- **Progmat** 能否在 2026 中实现官方发行 (与 DMM Group 的 2024-08 发布案件进展)
- **DCJPY** 银行间 RTGS 构想的正式运营 (2026-04 FSA FinTech 中心采纳，参加银行预定公布)
- **SBI Circle Holdings** 的 §501(d) 入榜后的动向 (USA-JP MRA 缔结时点)
- **Minna Bank Solana SC** 向其他地方银行的波及效应
- **ECISP 业者的追加取得**：第 00002 号以后的取得业者与经办 SC 币种
- **CBDC** 日元中央银行发行数字货币的讨论进展

## Related

- [[exchanges/INDEX|exchanges index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]]
- [[fintech/jp-stablecoin-progmat|Progmat 詳細]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit token / stablecoin 統合]]
- [[JapanFG/jpyc|JapanFG jpyc]]
- [[JapanFG/progmat|JapanFG progmat]]
- [[exchanges/jp-exchange-jpyc|JPYC 株式会社]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバル stablecoin 5 極比較]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル比較マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## Sources

- FSA「電子決済手段等取引業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
- JVCEA 会员一览: https://jvcea.or.jp/member/
- JPYC 官方: https://jpyc.co.jp/about
- Progmat 官方: https://progmat.co.jp/news/
- DeCurret DCP 官方: https://www.decurret-dcp.com/pressrelease/
- SBI VC Trade USDC: https://www.sbivc.co.jp/usdc

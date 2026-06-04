---
source: fintech/jp-stablecoin-progmat
source_hash: 7ea5036bdc325cba
lang: zh
status: machine
fidelity: ok
title: "株式会社Progmat：数字资产平台概览"
translated_at: 2026-05-31T07:28:06.111Z
---
# 株式会社Progmat：数字资产平台概览

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> 非 JVCEA 成员 · 不是加密资产交易业者 · 数字资产发行平台提供商 · 成立于 2023-10-02 · 东京都千代田区丸之内

## 1. 法人与股东

- **公司名称**：株式会社Progmat（英文：Progmat, Inc.）
- **成立日期**：2023年10月2日
- **总部地址**：〒100-0005  东京都千代田区丸之内 1-6-5  丸之内北口大楼 9 层（WeWork 内）
- **代表董事 Founder and CEO**：齐藤达哉（Tatsuya Saito）

**股东结构**（公开信息 / 近似值）：

| 股东 | 持股比例（近似） | 角色 |
|---|---|---|
| 三菱UFJ信托银行（MUTB） | **约 49%** | 单一最大股东、信托受托机构 |
| SMBC集团 | 约 15% | 共同委托银行 |
| 瑞穗信托银行 | 约 15% | 共同委托银行 |
| NTT Data | 约 10% | 技术合作伙伴 |
| JPX（日本交易所集团） | 约 5% | 交易所合作伙伴 |
| Datachain | 约 3% | 跨链技术 |

> **设计意图**：MUTB 持股低于 49% 是有意为之（依据 FSA 指导）。三大金融集团保持对等位置，同时避免 MUFG 单独控制。SMBC 与瑞穗能够作为独立法人使用，而不是作为“MUFG 子公司”，这正是分权型基础设施逻辑的依据（见 [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]）。

**董事会构成**（公开信息，仅按职务摘要）：
- 代表董事（兼职）× 1名
- 董事（兼职）× 4名（由股东行与合作法人派驻）
- CFO & CRO × 1名
- CTO × 1名

> 个人姓名基于公开信息，可能发生变化。详细履历请结合 [[payment-firms/progmat|JapanFG / progmat company anchor]] 与官方 IR 材料随时确认。

---

## 2. 牌照与登记状态

- **非 JVCEA 成员**：未登记为加密资产交易业务。Progmat 自身不是代币“发行体”，而是发行平台的“提供方”。
- **无 FSA 直接登记**：作为数字资产平台提供商开展业务；受监管主体是发行端的各家信托银行和银行。
- **电子支付手段等交易业（EPI）相关**：在 Progmat 上发行的 SC（稳定币）在修订后的《资金结算法》下被归类为“特定信托受益权”（第3号EPI）。发行体为三菱UFJ信托银行、瑞穗信托银行等信托公司。
- **前身**：约自 2019年 起，作为三菱UFJ信托银行内部项目开始运作，并于 2023年10月 独立法人化。

---

## 3. 处理币种（支持发行的数字资产类别）

Progmat 不是代币发行人，而是提供支持以下 3 类代币发行的平台：

### ST（证券型代币 / 数字证券）
- **日本全体** 87件 / **Progmat** 45件（Progmat 平台管理余额 **超过 4,522億円**，整体 **超过 6,674億円**）
- 主要发行案例：房地产、酒店、办公楼 ST；MUFG 次级债 ST（2025-10  首单）；NTT Lease ST（2026-03）
- 发行受托机构：三菱UFJ信托银行（主力）、瑞穗信托银行、Alterna Trust 等

### SC（稳定币 / Progmat Coin）
- **信托型（第3号EPI）**：MUFG、SMBC、瑞穗三大行作为共同委托人，三菱UFJ信托银行作为单一受托人
- 2023-09：发布跨机构研究 “Progmat Coin Joint Study Across Financial Institutions”（6社 家机构参与）
- 2024-09：启动 Project Pax（与 Datachain 联动的跨境 SC 转移试点）
- 2024-08：宣布面向 DMM Group 的许可型 SC 发行计划
- 2024-09：进入支持国内与 P2P 汇款的扩展实施阶段
- 计划发行的 SC：**Progmat Coin（XJPY / XUSD 等）** —— 发行体为各家信托银行，Progmat 提供平台

### UT（实用型代币 / 数字权利凭证）
- **超过 2,804件**（自 2022年7月 至最新时点累计）
- 主要用途：股东优惠、数字礼品、会员权等

---

## 4. 业务范围

### Progmat 的定位 = 平台提供方（≠ 发行体）

```
[发行体（信托银行 / 银行）]
    │ 委托合同
    ▼
[Progmat] ← 提供平台（SaaS + 实施支持）
    │ 代币技术
    ▼
[区块链基础设施]
    │ 发行
    ▼
[投资者 / 支付参与者]
```

**主要服务**（作为 “Progmat SaaS” 于 2024-11  公布）：
- 面向金融机构提供代币发行与管理基础设施 SaaS
- 实施支持服务（服务设计、监管应对、技术实施）
- 运营 DCC（数字资产共创联盟）秘书处：参与企业 **331社**（截至 2026-05）

**业务范围外**：Progmat 自营的加密资产交易、兑换与托管（因其并非 JVCEA 成员）

**Project Pax（跨境）** —— 关于 SWIFT API 兼容通道的细节见 [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]：
- 2024-09：与 Datachain、TOKI 启动日韩 SC 转移试点
- 2025-02：与韩国金融机构签署 MOU
- 2025-03：香港-日本贸易结算 PoC（与 IDA、Datachain、TOKI 联动）
- 2026-02：与 Ava Labs、Datachain 达成战略合作（加速公共链金融基础设施）

**最新进展（2026）**：
- 2026-04：发布代币化股票与“代币化法”问题的中间整理
- 2026-05：启动代币化国债链上回购交易的联合研究

---

## 5. 市占率与交易规模

**ST 数字证券市场（截至 2026-01  的近似值）**：
- 在日本国内 ST 发行件数 87件 中，Progmat 平台占 **45件（约 52%）**
- 在日本国内 ST 管理余额 6,674億円 中，Progmat 占 **4,522億円（约 68%）**

→ 在日本 ST（数字证券）市场中，Progmat 已是 **事实上的市场标准平台**。

**SC（稳定币）市场**：
- 截至 2026-05，官方发行实绩仍为零（处于实施过渡 / 发行准备阶段）
- 竞争者：JPYC（资金移转业者型）、DCJPY（GMO Aozora Net Bank）、Minna no Ginko 的 Solana 联动等
- 作为以三大行基础设施为后盾的信托型 SC，其在 **B2B 大额结算细分领域** 处于独一无二的位置

**客户层**：主要是大型金融机构、证券公司与 AM 公司（零售端主要通过 ST 公募接触）

---

## 6. 沿革与重大事件

| 年月 | 事件 |
|---|---|
| 约 2019年 | 在三菱UFJ信托银行内部启动 ST 平台开发（前身） |
| 2022-02  | 三菱UFJ信托银行宣布启动 NFT “Progmat UT” 与数字资产钱包开发 |
| 2023-09  | 多家金融机构联合讨论 “Progmat Coin” 并发布公告（6 家机构参与） |
| **2023-10-02** | **作为株式会社Progmat 独立法人化** |
| 2024-08  | 宣布面向 DMM Group 的许可型 SC 发行计划 |
| 2024-09  | 启动 Project Pax（与 Datachain 联动的跨境 SC 试点） |
| 2024-11  | 上线 “Progmat SaaS” 与“实施支持服务”（宣示“国家基础设施化”） |
| 2025-10  | 推出日本首单面向个人的银行次级债 ST（MUFG 100億円） |
| 2026-02  | 与 Ava Labs、Datachain 达成战略合作（加速公共链展开） |
| 2026-03  | 与 TMI 总合法律事务所开始支持房地产 ST 业务进入 |
| 2026-04  | 发布代币化股票“中间整理”，启动代币化法议题研究 |
| 2026-05  | 启动代币化国债链上回购交易联合研究 |

**行政处分 / 重大事件**：公开信息中无（截至 2026-05）

---

## 7. 战略动向

**2025-2026 的主要动向**：

1. **从 ST 向 SC 扩展平台**：最初以 ST 为中心，如今扩展到 SC（第3号EPI）、UT 与公共链场景，形成全线平台
2. **宣示国家基础设施化（2024-11）**：以 “Progmat SaaS” 名义，明确向大型金融机构以外的中型金融机构横向扩展
3. **跨境全面推进（Project Pax）**：从日韩、日港 PoC 出发，自 2025年 起面向全球展开，与 Ava Labs、Datachain、TOKI、IDA 联动
4. **进入代币化股票领域（自 2025-11 起）**：围绕实现“代币化股票”的 24 小时、1円 单位交易开展制度整备与验证
5. **提及公开市场（2026-04  参加日经 CNBC《IPO 的蛋》）**：公开场合曾提到 IPO，但没有发布具体时间表的官方公告
6. **DCC 参与企业达 331社**：跨行业联盟正作为官民生态系统发挥作用

---

## 8. 相关人物

| 姓名 / 职务 | 头衔 | 备注 |
|---|---|---|
| 齐藤达哉（Tatsuya Saito） | 代表董事 Founder and CEO | 出身于三菱UFJ信托银行。主导前身项目后，独立法人化并出任 CEO |
| 代表董事（兼职）× 1名 | — | 股东银行派驻 |
| 董事（兼职）× 4名 | — | 股东银行与合作法人派驻 |
| 监事（兼职）× 1名 | — | |
| CFO & CRO | — | |
| CTO | — | |
| VP, Japan Business Development | — | |

> 除 CEO 外，其他个人姓名变动概率较高，因此这里只按职务摘要。详细情况请结合 [[payment-firms/progmat|JapanFG / progmat]] 与官方 IR 确认。

---

## Related

- [[payment-firms/progmat|株式会社Progmat]] — JapanFG company anchor
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — regulated trust-bank boundary
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]] — Progmat Coin 的法律依据（第3号EPI、特定信托受益权）详解
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — MUTB 49% 设计意图与三大行治理结构
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — JPYC、DCJPY、Progmat Coin 的制度定位比较
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — 与 GMO Aozora Bank 发行、银行型（第1号EPI）的对比对象
- [[exchanges/jp-exchange-jpyc|JPYC]] — 与资金移转业者型（第 2 种）的对比对象

---

## Sources

- [Progmat 公司概况（About Us）](https://progmat.co.jp/about/)（取得 2026-05-18）
- [Progmat Concept（ST/UT/SC 实绩）](https://progmat.co.jp/concept/)（取得 2026-05-18）
- [Progmat Consortium（DCC）](https://progmat.co.jp/consortium/)（取得 2026-05-18）
- [Progmat News Archive](https://progmat.co.jp/news/)（取得 2026-05-18）
- [Progmat EN News Archive](https://progmat.co.jp/en/news/)（取得 2026-05-18）
- [Progmat Blog Archive](https://progmat.co.jp/blog/)（取得 2026-05-18）
- [Progmat Coin Joint Study Press Release（2023-09-11）](https://progmat.co.jp/en/news/2023-09-11-press/)（取得 2026-05-18）
- [wiki/fintech/multi-megabank-consortium-governance]（股东结构推算来源）
- [wiki/fintech/jp-trust-type-sc-architecture]（制度定位细节）

---

**Last refresh**（2026-05-25）：根据审计收紧董事会人员列示（将 5+ 具名非执行董事改为仅按职务摘要；仅保留 CEO 姓名）；同时刷新日期。

---
source: fintech/jp-stablecoin-progmat
source_hash: 6b58087deca62613
lang: zh
status: machine
fidelity: ok
title: "株式会社Progmat — 数字资产平台概要"
translated_at: 2026-06-18T23:59:13.111Z
---

# 株式会社Progmat — 数字资产平台概要


## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下。请与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 一并阅读以获取邻接语境，并与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 一并阅读以了解更广泛的体系边界。

> JVCEA 非加盟 · 并非加密资产交换业者 · 数字资产发行平台提供事业者 · 设立 2023-10-02 · 东京都千代田区丸之内

## 1. 法人・股东

- **商号**: 株式会社Progmat（英文: Progmat, Inc.）
- **设立日**: 2023年10月2日
- **总部所在地**: 〒100-0005 东京都千代田区丸之内1-6-5 丸之内北口大厦9层（WeWork 内）
- **代表取缔役 Founder and CEO**: 齊藤 達哉（Tatsuya Saito）

**股东构成**（公布部分 · 概算）:

| 股东 | 持股比例（概算） | 角色 |
|---|---|---|
| 三菱UFJ信托银行（MUTB） | **约49%** | 单独最大股东・信托受托机构 |
| SMBC集团 | 约15% | 共同委托银行 |
| 瑞穗信托银行 | 约15% | 共同委托银行 |
| NTT Data | 约10% | 技术伙伴 |
| JPX（日本交易所集团） | 约5% | 交易所伙伴 |
| Datachain | 约3% | 跨链技术 |

> **设计意图**: MUTB 49%是有意为之（FSA 指导）。三大型银行持有对等地位，同时避免 MUFG 单独控制。SMBC・瑞穗可作为独立法人而非「MUFG 子公司」使用，这构成了去中心化基础设施的依据（→ 参见 [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]）。

**董事构成（公布部分・仅摘要职务)**:
- 代表取缔役（非常勤）× 1名
- 取缔役（非常勤）× 4名（来自股东行・伙伴法人的派遣）
- CFO & CRO × 1名
- CTO × 1名

> 个人姓名基于公开信息，存在变动可能。简历详情请在 [[payment-firms/progmat|JapanFG / progmat company anchor]] 与官方 IR 随时确认。

---

## 2. 牌照・登记状况

- **JVCEA 非加盟**: 无加密资产交换业登记。Progmat 本身并非代币「发行体」，而是发行平台的「提供者」。
- **无 FSA 直接登记**: 作为数字资产平台提供事业者开展业务（受监管对象为发行体一侧的各信托银行・银行）。
- **电子支付手段等交易业（EPI）相关**: 在 Progmat 上发行的 SC（稳定币）依据修订后的《资金结算法》被归类为「特定信托受益权（第3号EPI）」。发行体为三菱UFJ信托银行・瑞穗信托银行等信托公司。
- **前身**: 作为三菱UFJ信托银行内部项目自 2019年前后开始活动。于 2023年10月独立为法人。

---

## 3. 经办币种（提供发行支持的数字资产种别）

Progmat 并非代币发行者，而是提供支持以下 3 种代币发行的平台:

### ST（证券型代币 / 数字证券）
- **国内整体** 87件 / **Progmat** 45件（管理余额 Progmat 部分 **超 4,522億円**，整体 **超 6,674億円**）
- 主要发行实绩: 不动产・酒店・办公 ST、MUFG 次级公司债 ST（2025-10 首单）、NTT 租赁 ST（2026-03）
- 发行受托者: 三菱UFJ信托银行（主力）、瑞穗信托银行、Alterna 信托 等

### SC（稳定币 / Progmat Coin）
- **信托型（第3号EPI）**: MUFG・SMBC・瑞穗三大型银行为共同委托者，三菱UFJ信托银行为单一受托者
- 2023-09: 发布机构横向研究「Progmat Coin Joint Study Across Financial Institutions」（6社参加）
- 2024-09: 启动 Project Pax（Datachain 联动・跨境 SC 转移试点）
- 2024-08: 发布与 DMM Group 的牌照 SC 发行计划
- 2024-09: 转入面向国内・P2P 汇款支持的扩展实施阶段
- 拟发行 SC: **Progmat Coin（XJPY / XUSD 等）** — 发行体为各信托银行，Progmat 提供平台

### UT（实用型代币 / 数字权利证）
- **超 2,804件**（自 2022年7月〜至最新时点累计）
- 主要用途: 股东优待、数字礼品、会员权 等

---

## 4. 业务范围

### Progmat 的定位 = 平台提供者（≠ 发行体）

```
[发行体（信托银行・银行）]
    │ 委托合同
    ▼
[Progmat] ← 平台提供 (SaaS + 实施支持)
    │ 代币技术
    ▼
[区块链基础设施]
    │ 发行
    ▼
[投资者・结算参与者]
```

**主要服务（2024-11 发布 "Progmat SaaS"）**:
- 代币发行・管理基础设施的 SaaS 提供（面向金融机构）
- 实施支持服务（服务设计・合规对应・技术实施）
- DCC（数字资产共创联盟）的秘书处运营：参加企业 **331社**（2026-05时点）

**业务范围外**: 由自身进行加密资产交易・交换・保管（因 JVCEA 非加盟）

**Project Pax（跨境）** — SWIFT API 兼容通道的详情参见 [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]:
- 2024-09: 以 Datachain・TOKI 联动启动日韩间 SC 转移试点
- 2025-02: 与韩国金融机构签订 MOU
- 2025-03: 香港 – 日本间贸易结算实证（IDA・Datachain・TOKI 联动）
- 2026-02: Ava Labs・Datachain 战略合作（加速公链金融基础设施）

**最新进展（2026）**:
- 2026-04: 公布代币化股票・「代币化法」中间梳理
- 2026-05: 启动代币化国债「链上回购交易」共同研究

---

## 5. 市占・交易量

**ST 数字证券市场（2026-01 时点概算）**:
- 国内整体 ST 发行件数 87件 中，Progmat 平台部分为 **45件（约52%）**
- 国内 ST 管理余额 6,674億円 中，Progmat 部分为 **4,522億円（约68%）**

→ 在日本 ST（数字证券）市场，Progmat 是 **事实上的市场标准平台**。

**SC（稳定币）市场**:
- 官方发行实绩截至 2026-05时点为零（转入实施阶段・发行准备中）
- 竞争对手: JPYC（资金移动业者型）、DCJPY（GMO AOZORA Net Bank）、Minna 银行 Solana 联动等
- 作为信托型 SC，以三大型银行基础设施为背景，在 **B2B 大额结算分部** 具有独一无二的定位

**客户层**: 主要为大型金融机构・证券公司・AM 公司（面向 retail 经由 ST 公开募集）

---

## 6. 沿革・重大事件

| 年月 | 事件 |
|---|---|
| 2019年前后 | 在三菱UFJ信托银行内启动 ST 平台开发（前身） |
| 2022-02 | 三菱UFJ信托银行宣布启动 NFT「Progmat UT」与数字资产钱包开发 |
| 2023-09 | 多家金融机构宣布共同研究「Progmat Coin」（6家金融机构参加） |
| **2023-10-02** | **独立为 株式会社Progmat 法人** |
| 2024-08 | 发布面向 DMM Group 的牌照 SC 发行计划 |
| 2024-09 | 启动 Project Pax（Datachain 联动跨境 SC 试点） |
| 2024-11 | 推出「Progmat SaaS」与「实施支持服务」（宣布「国家基础设施」化） |
| 2025-10 | 国内首个面向个人的银行次级公司债 ST（MUFG 100億円） |
| 2026-02 | 签订 Ava Labs・Datachain 战略合作（加速公链拓展） |
| 2026-03 | 与 TMI 综合律师事务所启动不动产 ST 事业进入支持 |
| 2026-04 | 公布代币化股票的「中间梳理」・着手研究代币化法 |
| 2026-05 | 启动代币化国债的链上回购交易共同研究 |

**行政处分・重大事件**: 无公布（截至 2026-05时点）

---

## 7. 战略动向

**2025-2026的主要动向**:

1. **从 SC 向 ST 的平台扩展**: 起初以 ST 为中心，现面向 SC（第3号EPI）・UT・公链全线展开
2. **国家基础设施化宣言（2024-11）**: 作为 "Progmat SaaS" 明确向大型金融机构以外的中坚金融机构横向展开
3. **跨境全面化（Project Pax）**: 从日韩・日香港间的实证，自 2025年以后走向全球展开。Ava Labs・Datachain・TOKI・IDA 联动
4. **进入代币化股票（自 2025-11〜）**: 为实现「代币化股票」的 24时间・1円单位交易而进行的法制度建设与实证
5. **对公开市场的提及（2026-04 出演日经 CNBC「IPO 之蛋」）**: 在公开场合提及 IPO，但无具体时间表的官方发布
6. **DCC 参加企业 331社**: 跨行业联盟作为官民生态运作

---

## 8. 相关人物

| 姓名 / 职务 | 头衔 | 备注 |
|---|---|---|
| 齊藤 達哉（Tatsuya Saito） | 代表取缔役 Founder and CEO | 出身三菱UFJ信托银行。主导前身项目→独立法人化 CEO |
| 代表取缔役（非常勤）× 1名 | — | 股东行派遣 |
| 取缔役（非常勤）× 4名 | — | 股东行・伙伴法人派遣 |
| 监查役（非常勤）× 1名 | — | |
| CFO & CRO | — | |
| CTO | — | |
| VP, Japan Business Development | — | |

> 除 CEO 外，个人姓名变动可能性较高，故仅以职务摘要。详情请在 [[payment-firms/progmat|JapanFG / progmat]] 与官方 IR 确认。

---

## 相关

- [[payment-firms/progmat|株式会社Progmat]] — JapanFG company anchor
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — regulated trust-bank boundary
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]] — Progmat Coin 法律依据（第3号EPI・特定信托受益权）的详细解说
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — MUTB 49% 设计的意图与三大型银行治理结构
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — JPYC・DCJPY・Progmat Coin 的制度定位比较
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — 与 GMO AOZORA Net Bank 发行・银行型（第1号EPI）的比较对象
- [[exchanges/jp-exchange-jpyc|JPYC]] — 与资金移动业者型（第2种）的比较对象

---

## Sources

- [Progmat 公司概要（About Us）](https://progmat.co.jp/about/)（获取 2026-05-18）
- [Progmat Concept（ST/UT/SC 实绩）](https://progmat.co.jp/concept/)（获取 2026-05-18）
- [Progmat Consortium（DCC）](https://progmat.co.jp/consortium/)（获取 2026-05-18）
- [Progmat News Archive](https://progmat.co.jp/news/)（获取 2026-05-18）
- [Progmat EN News Archive](https://progmat.co.jp/en/news/)（获取 2026-05-18）
- [Progmat Blog Archive](https://progmat.co.jp/blog/)（获取 2026-05-18）
- [Progmat Coin Joint Study Press Release（2023-09-11）](https://progmat.co.jp/en/news/2023-09-11-press/)（获取 2026-05-18）
- [wiki/fintech/multi-megabank-consortium-governance]（股东构成的推算源泉）
- [wiki/fintech/jp-trust-type-sc-architecture]（制度定位的详情）

---

**Last refresh** (2026-05-25): tightened board personnel listing per audit (replaced 5+ named non-executive directors with roles-only summary; kept CEO name only); refreshed dates.

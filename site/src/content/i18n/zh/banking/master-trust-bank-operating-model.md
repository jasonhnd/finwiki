---
source: banking/master-trust-bank-operating-model
source_hash: e469f3ba5b9cafd4
lang: zh
status: machine
fidelity: ok
title: "日本Master Trust信托银行运营模式"
translated_at: 2026-06-18T23:33:48.359Z
---

# 日本Master Trust信托银行运营模式

## Wiki 路径

本条目位于 [[banking/INDEX|banking index]] 之下。请与实体锚点 [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]]、运营同业 [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、行业格局摘要 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、运营对比 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 以及跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] 一并阅读。请将其与结算轨道条目 [[securities/japan-securities-depository-center|JASDEC]] 和 [[securities/japan-securities-clearing-corp|JSCC]]（基础设施侧）、[[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]（监管边界）、股东侧信托银行页面 [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] 和 [[trust-banks/nochu-trust-bank|農中信託銀行]]，以及 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]（机构语境）配对阅读。

## TL;DR

日本Master Trust信托银行（MTBJ — 日本マスタートラスト信託銀行）是一家仅托管的专业信托银行，依据银行法＋信托业法的双重路径取得牌照，由三菱UFJ信托（46.5%）、日本生命（33.5%）、明治安田生命（10%）以及一家农林中金系信托银行（10%）组成的四方财团持有。其运营模式将三项核心职能——年金信托管理、证券投资信托管理和证券托管——捆绑在 JASDEC ＋ 日银 JGB 直接结算的核心之上。MTBJ 不发放贷款、不吸收存款，也不经营零售或私人银行业务；它是一家机构后台。其名称出现在几乎每一家上市公司股东名册的最顶端，以「日本マスタートラスト信託銀行（信託口）」的形式，但这是一个名义性的表面——实益所有人是其管理委托的 GPIF、企业年金及大型资产管理人。MTBJ 与 CBJ 一道，构成日本两大锚定的境内托管基础设施。

## 1. 机构定位

| Field | MTBJ |
|---|---|
| Legal name (JA) | 株式会社日本マスタートラスト信託銀行 |
| Legal name (EN) | The Master Trust Bank of Japan, Ltd. |
| Established | 2000-05 |
| HQ | 東京都港区浜松町 |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (4-way consortium JV) |
| Primary regulator | 金融庁 (FSA) — bank supervision + trust-business supervision |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no deposits, no PB, no real-estate trust) |
| Public AUC anchor | ¥823 trillion trust assets under custody (MTBJ official "私たちの仕事" page summary, of Japan's ¥2,351 trillion financial assets) |
| Peer | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] |

### 股东结构（公开披露）

| 股东 | 持股 | 解读 |
|---|---|---|
| [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] (MUFG 集团) | 46.5% | 主导性产业股东；提供三菱侧的委托流量及信托银行运营专门技术 |
| [[life-insurers/nippon-life|日本生命]] | 33.5% | 最大的寿险股东；提供寿险独立账户托管以及企业年金委托流量 |
| [[life-insurers/meiji-yasuda|明治安田生命]] | 10.0% | 第二大寿险股东；补全寿险侧的委托基础 |
| [[trust-banks/nochu-trust-bank|農中信託銀行]] (农林中金集团) | 10.0% | 合作金融股东；提供 JA Bank／农林系的委托流量 |

### 为何存在仅托管的信托银行

依据银行法＋信托业法双重路径的仅托管信托银行可以：

1. **直接**参与 JASDEC 簿记转让、JSCC 中央对手方清算和日银 JGB 簿记结算——这些均不对仅依据信托业法的纯粹信托公司开放；
2. 发行满足日本证券法及税务处理对机构独立账户持有之期望的信托账户（「信託口」）名义名；
3. 避免一家完整商业银行的资本和监管负担，因为它不持有贷款账册，仅有极少的存款资金敞口（托管费、结算账户残余以及预金保险机构加入）。

### 业务条线图谱

| 板块 | 核心职能 | 典型客户群 | 它不是什么 |
|---|---|---|---|
| **年金信托 (Pension trust administration)** | 为厚生年金基金、确定给付企业年金 (DB) 和确定拠出年金 (DC) 提供信托合约——记录保管、资产所有人报告、给付支付运营、成员余额 | GPIF、大型企业 DB 计划、DC 计划（常通过 DC 发起人侧的管理机构）、厚生年金基金 | 不是投资管理人——投资裁量权在 [[asset-managers/mitsubishi-ufj-asset-management|asset managers]] 和资产所有人的受托人手中 |
| **投资信托受托 (Securities-investment-trust admin)** | 为公募投信和私募投信提供信托合约——基金会计、NAV 计算、持仓登记、分配处理、审计支持 | [[asset-managers/mitsubishi-ufj-asset-management|MUFG asset management arm]], [[asset-managers/nomura-asset-management|Nomura AM]], [[asset-managers/sbi-asset-management|SBI AM]] 及其他将 MTBJ 用作受托银行的资产管理人 | 不是基金发起人或分销商；不是基金经理 |
| **有价证券托管 (Securities custody)** | 股票、JGB、公司债、外国证券的保管；簿记登记；公司行动处理；股息／利息收取；退税运营 | 年金计划、资产管理人、寿险公司、需要日本子托管人的外国全球托管人 | 不是自营投资者；「信託口」名义标签是一种记录保管的构造 |
| **议决权行使指图 (Voting administration)** | 按资产所有人／管理人指示进行机械式投票执行；ICJ 电子投票平台连接；委托投票顾问（ISS／Glass Lewis）资料处理 | 资产管理人、年金计划、将 MTBJ 用作子托管人的外国投资者 | 不是裁量性投票人——MTBJ 不形成自己的投票意见 |
| **特定金外信托 (Specified-money-trust ops)** | 为企业财务和金融机构资产设立的特殊目的投资信托结构（特金） | 将特金用作投资工具的企业、地方银行、保险公司 | 不是裁量性资产管理人 |

### 运营职能细分

| 职能 | 说明 |
|---|---|
| 保管与簿记管理 | 直接连接 [[securities/japan-securities-depository-center|JASDEC]] 簿记转让；日银 JGB 直接账户持有人；投信受托的记录保管；现金结算账户运营 |
| 结算（现金股票） | 通过 JASDEC 进行的 DVP-X1 ／ DVP-X2 ／ DVP-X3 连接，用于零售和机构股票结算 |
| 结算（JGB） | 直接参与日银 JGB 簿记系统，为年金和投信委托提供 JGB 托管 |
| 结算（公司债／CP） | 通过 JASDEC 进行社债和 CP 的簿记转让 |
| 基金会计／NAV 计算 | 投信委托的每日 NAV 计算；按投信协会指引的估值规则；审计支持工作底稿 |
| 公司行动 | 股息／利息收取、拆股、配股、转换、强制／自愿事件、预扣税处理；通过全球托管人子网络处理外国资产 CA |
| 投票运营 | 接收会议资料、ICJ 电子投票转发、机械式执行资产所有人／管理人指示 |
| 外国资产子托管 | 对委托投资组合中的非日本资产，通过全球托管人（[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]]／[[foreign-financial-institutions/state-street-japan|State Street]]／[[foreign-financial-institutions/jpmorgan-japan|JP Morgan]]）重新路由 |
| 证券借贷支持 | 客户选择加入时的借贷计划管理；担保提交；召回管理 |
| 成员／参加者运营 | 年金成员余额报告（DB／DC）、给付支付运营、基金中基金穿透 |

### 「信託口」名义表面

大约每一家 TOPIX-100 发行体的披露都将「日本マスタートラスト信託銀行（信託口）」列为前 3 大股东。经济解读如下：

- 法律记录上的名义名是 MTBJ。
- 实益所有人是 GPIF、企业年金、投信基金、保险独立账户以及 MTBJ 的外国投资者子托管客户。
- 投票指示来自上游的资产管理人或资产所有人——而非 MTBJ。

这就是为何 MTBJ 在公开股东名册中表面上的"集中度"不能被解读为单一投票集团。同一笔持仓被分散在数百个具有不同投票政策的底层委托之中。

### 三个竞争层次

| 层次 | 竞争者 | 与 MTBJ 的重叠 | 差异化 |
|---|---|---|---|
| 境内仅托管专业机构 | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] | 几乎相同的产品组合——年金信托、投信受托、证券托管 | 不同的股东阵营（SMTB ＋ 瑞穗 ＋ 第一生命）及不同的委托基础；两者锚定两强的境内基础设施 |
| 巨型银行的全服务信托银行部门 | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | 全服务信托银行也在内部运营托管和年金信托——但通常将后台处理的资产管理环节外包给 MTBJ／CBJ | 全服务信托银行增加不动产信托、相续、私人银行、证券代理、议决权电子化服务；它们赢得*前台*委托，而 MTBJ／CBJ 运营*处理*环节 |
| 全球托管人（外国子托管链） | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | 跨境托管、外国投资者日本子托管、日本委托的外国资产处理 | 全球机构在跨境领域占主导；MTBJ 在境内日本资产领域占主导；两条链在 GPIF 和投信海外资产上相互连接 |

### 跨阵营比较表

| 维度 | MTBJ | CBJ | 巨型银行信托银行部门 | 全球托管人（日本） |
|---|---|---|---|---|
| 贷款／存款 | 无 | 无 | 有（全服务） | 有（分行＋日本信托子公司） |
| 不动产信托 | 无 | 无 | 有（大规模） | 无 |
| 相续／私人银行 | 无 | 无 | 有 | 部分（仅 UHNW） |
| 年金信托管理 | 有（核心） | 有（核心） | 有（前台委托） | 部分（外国资产侧） |
| 投信受托 | 有（核心） | 有（核心） | 有限（常外包给 MTBJ／CBJ） | 有限 |
| 仅证券托管 | 有（核心） | 有（核心） | 有 | 有（为外国机构提供日本子托管） |
| ICSD（Euroclear／Clearstream）直连 | 经全球机构重新路由 | 经全球机构重新路由 | 经全球机构重新路由 | 直连 |
| 公开股东名册名义 | 「日本マスタートラスト信託銀行（信託口）」 | 「日本カストディ銀行（信託口）」 | 不那么显眼——全服务品牌 | 外国法人行中的外国股东名义 |

## 4. 手续费・收益结构

MTBJ 不公开披露细化的费率表。公开领域的解读如下：

| 收益条线 | 定价基础 | 公开可见性 |
|---|---|---|
| 年金信托管理费 | AUC bps（对大型 GPIF 规模委托通常极低） | 不在明细层面披露；MTBJ 为非上市，费用收益总额仅能从集团／股东合并披露中推断 |
| 证券托管费 | 按资产类别的 AUC bps；按笔的结算费；现金管理利差 | 不公开披露 |
| 投票管理／公司行动运营 | 通常并入托管费 | 不单独披露 |
| 证券借贷管理／代理出借人费 | 与实益所有人就借贷收入的收益分成 | 不单独披露 |
| 现金余额利息收入 | 低——短期限资金摆放 | 不单独披露 |

### 为何从外部难以读懂费用

1. MTBJ 为非上市，仅发布最低限度的法定披露；细化的费用披露在股东合并层面。
2. 投信受托费用可按基金观察，但因基金家族、资产类别和合约日期而异；跨基金汇总需要手工抓取每一份信托约款。
3. 年金信托合约包括 GPIF 在内均为单独协商；不公布每笔委托费用，故仅能从公开数据推断 AUC × 平均 bps 的汇总概算。
4. 机构客户的证券托管费用为委托特定，不在标准公开费目上。

### 跨银行费用经济解读

| 方面 | MTBJ／CBJ（境内专业机构） | 巨型银行信托银行部门 | 全球托管人（日本） |
|---|---|---|---|
| 日本股票托管的定价能力 | 高（规模公用事业） | 中（后端使用 MTBJ／CBJ） | 中（外国投资者子托管溢价） |
| 日本投信受托的定价能力 | 高（公用事业规模，低 bps 费用） | 低（很少直接担任主要基金的受托公司） | 低（很少担任日本投信受托公司） |
| 外国资产托管的定价能力 | 低（经全球机构重新路由） | 低 | 高（全球 ICSD ＋ 子托管网络） |
| 年金信托管理的定价能力 | 高（尤其 GPIF 规模委托） | 中-高（全服务竞争） | 中（外国年金侧委托） |

如需细化的跨银行费用比较，请参见 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]。

### 监管体系

| 层次 | 法令／监管者 | 对 MTBJ 的含义 |
|---|---|---|
| 银行监督 | 銀行法 + 金融庁 監督指針（信託兼営銀行 章节） | 资本充足率、流动性、治理、IT 风险监督；MTBJ 运营低风险资产负债表，故资本要求较轻 |
| 信托业监督 | 信託業法 + 金融庁 監督指針（信託業 章节） | 信托账户分离、受信义务规则、利益冲突控制、受託者責任 标准 |
| 证券法叠加 | 金融商品取引法 — 投資信託受託会社／托管业务 | NAV 计算问责、托管标准、投信協会 合规 |
| 年金监管 | 厚生年金保険法、確定給付企業年金法、確定拠出年金法 | 年金信托管理运营、受信报告、成员余额报告 |
| 存款保险 | 預金保険機構加盟 | 虽存款微小但属法定加入 |
| AML／CFT | 金融庁 + 警察庁 + 国税庁 报告 | 适用于底层客户委托的托管侧 AML |
| 尽责管理／公司治理 | スチュワードシップ・コード（自愿守则） | 投票管理透明度的期望 |
| 记录保管／数据 | 個人情報保護法、金融分野ガイドライン | 年金成员数据、NISA 相关账户数据 |

### 会计处理

| 项目 | 处理 |
|---|---|
| 信托账户资产（「信託財産」） | 在 MTBJ 处为**表外**；在实益所有人处为表内 |
| 托管费 | 在损益表中确认为费用收入 |
| 预金（自有账户存款） | 表内——但相对信托资产规模较小 |
| 结算账户残余余额 | 短期限；计入现金＋同业拆放 |
| 资本 | 信託兼営銀行 法定最低资本加内部缓冲 |

## 6. JASDEC／清算基础设施连接

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / pensions / 投信 / insurers)            │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion, voting opinion)         │
│ — MUFG-AM, Nomura AM, SBI AM, etc.                               │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Master Trust Bank of Japan (trust account / nominee)             │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodian │ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ (foreign sub-    │ │ (electronic     │
│ corp bonds││ cash equity ││ (JGB         ││ custody — BNY,   │ │ proxy voting)   │
│ CP, 投信) ││ + CCP)      ││ settlement)  ││ State Street,    │ │                 │
│           ││             ││              ││ JPM, Citi)       │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### 直接 JASDEC 连接

MTBJ 是 [[securities/japan-securities-depository-center|JASDEC]] 簿记转让的直接参加者，涵盖：

- 株式振替制度（无纸化上市股票）
- 一般債振替制度（公司债，包括普通社债、可转换债）
- 短期社債振替制度（CP／商业票据）
- 投資信託振替制度（公募投信受益权转让）

### 外国资产的子托管链

MTBJ 管理委托的外国资产环节（例如 GPIF 外国股票、投信中的外国债券组合）通过全球托管人作为日本侧子托管进行路由。该链大致为：

```
MTBJ (record-name trust-account) → global custodian (BNY / State Street / JPM / Citi)
  → local sub-custodian in each foreign market → local CSD
```

这种子托管依赖意味着 MTBJ 的外国资产处理成本在结构上是从全球托管人费率表的传递，这限制了 MTBJ 在外国资产环节的定价能力，但保留了其在境内资产环节的定价能力。

## 相关

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/custody-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## 来源

- 日本Master Trust信托银行：官方网站、公司概览、业务／资产管理页面（「私たちの仕事」——记载在日本 ¥2,351 万亿日元金融资产中保管 ¥823 万亿日元信托资产：https://www.mastertrust.co.jp/about/overview.html），公司信息页面（资本金 ¥10亿日元；股东 三菱UFJ信托 46.5%／日本生命 33.5%／明治安田 10.0%／农中信托 10.0%；业务开始 2000-05-09：https://www.mastertrust.co.jp/company/information.html）。
- 信托协会：信托资产管理余额统计。
- FSA：信托业金融机构名单、银行牌照名单。
- JASDEC：证券簿记与存管系统资料。
- JSCC：清算及 DVP 现金股票资料。
- 日银：JGB 簿记结算系统资料。
- GPIF：公开年度报告及资产管理机构名录披露。

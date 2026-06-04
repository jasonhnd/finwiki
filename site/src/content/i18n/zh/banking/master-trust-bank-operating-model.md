---
source: banking/master-trust-bank-operating-model
source_hash: 166e15cd7499119f
lang: zh
status: machine
fidelity: ok
title: "日本万事达信托银行运营模式"
translated_at: 2026-05-30T18:52:47.784Z
---

# 日本万事达信托银行运营模式

## Wiki route

本条目归属于 [[banking/INDEX|banking index]]。请与实体锚点 [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]]、运营同侪 [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、格局汇总 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、运营比较 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 及跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] 一并阅读。请将其与结算轨道条目 [[securities/japan-securities-depository-center|JASDEC]] 及 [[securities/japan-securities-clearing-corp|JSCC]]（基础设施侧）、[[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]（监管边界）、股东侧信托银行页面 [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] 及 [[trust-banks/nochu-trust-bank|農中信託銀行]]，以及 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]（机构背景）搭配阅读。

## TL;DR

日本万事达信托银行（MTBJ — 日本マスタートラスト信託銀行）是一家在银行法 + 信托业法双重路线下持牌的纯托管专业信托银行，由 MUFG 信托（46.5%）、日本生命（33.5%）、明治安田生命（10%）及一家与农林中金关联的信托银行（10%）组成的四方联合体所有。其运营模式在 JASDEC + BoJ JGB 直接结算核心之上，捆绑了三项核心职能——养老金信托管理、证券投资信托管理及证券托管。MTBJ 不发放贷款、不吸收存款、不经营零售或私人银行业务；它是一家机构后台。其名称以「日本マスタートラスト信託銀行（信託口）」出现在几乎每一家上市公司股东登记册的顶部，但这是名义人表层——受益所有者是 GPIF、企业养老金，以及其所管理委托的大型资产管理公司。MTBJ 与 CBJ 共同构成日本双锚点的国内托管基础设施。

## 1. 机构位置

| Field | MTBJ |
|---|---|
| 法定名称（JA） | 株式会社日本マスタートラスト信託銀行 |
| 法定名称（EN） | The Master Trust Bank of Japan, Ltd. |
| 成立 | 2000-05  |
| 总部 | 東京都港区浜松町 |
| 牌照路线 | 银行法 + 信托业法（custody-only 信託銀行 / 信託兼営銀行） |
| 上市 | 非上市（4 方联合体 JV） |
| 主要监管者 | 金融庁（FSA）—— 银行监管 + 信托业务监管 |
| 行业机构 | 信託協会（Trust Companies Association of Japan） |
| 职能定位 | 资产管理专业机构（无贷款、无存款、无私人银行、无不动产信托） |
| 公开 AUC 锚点 | ¥823  万亿日元受托管理信托资产（MTBJ 官方「私たちの仕事」页面汇总，占日本 ¥2,351  万亿日元金融资产之中） |
| 同侪 | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] |

### 股东结构（公开披露）

| Shareholder | Stake | Reading |
|---|---|---|
| [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]]（MUFG 集团） | 46.5% | 主导产业股东；提供三菱侧委托流与信托银行运营专长 |
| [[life-insurers/nippon-life|日本生命]] | 33.5% | 最大寿险股东；提供寿险分离账户托管及企业养老金委托流 |
| [[life-insurers/meiji-yasuda|明治安田生命]] | 10.0% | 第二寿险股东；完善寿险侧委托基础 |
| [[trust-banks/nochu-trust-bank|農中信託銀行]]（农林中金集团） | 10.0% | 合作社金融股东；提供 JA Bank / 农林系委托流 |

### 为何存在纯托管信托银行

在银行法 + 信托业法双重路线下的纯托管信托银行可以：

1. **直接**参与 JASDEC 簿记过户、JSCC 中央对手方清算及 BoJ JGB 簿记结算——单凭信托业法的纯信托会社无法接入这些；
2. 发行满足日本证券法与税务处理对机构分离账户持有期望的信托账户（「信託口」）名义人名称；
3. 因不持有贷款账簿、仅有极少存款资金敞口（托管费、结算账户残额及预金保険機構参与），避免全能商业银行的资本与监管负担。

### 业务条线地图

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **年金信託（养老金信托管理）** | 为 厚生年金基金、確定給付企業年金（DB）及 確定拠出年金（DC）提供信托合约——记录保存、资产所有者报告、给付操作、成员余额 | GPIF、大型企业 DB 计划、DC 计划（常经由 DC 发起方侧管理人）、厚生年金基金 | 并非投资管理人——投资裁量权归于 [[asset-managers/mitsubishi-ufj-asset-management|asset managers]] 及资产所有者的受托人 |
| **投資信託受託（证券投资信托管理）** | 为 公募投信 及 私募投信 提供信托合约——基金会计、NAV 计算、持仓登记、分配处理、审计支持 | [[asset-managers/mitsubishi-ufj-asset-management|MUFG asset management arm]]、[[asset-managers/nomura-asset-management|Nomura AM]]、[[asset-managers/sbi-asset-management|SBI AM]] 及其他以 MTBJ 为受託銀行的资产管理公司 | 并非基金发起方或分销商；并非基金经理 |
| **有価証券カストディ（证券托管）** | 保管股票、JGB、公司债、外国证券；簿记登记；公司行为处理；股息 / 利息收取；退税操作 | 养老金计划、资产管理公司、寿险公司、需要日本次级托管人的外国全球托管机构 | 并非自有投资者；「信託口」名义人标签是记录保存的构造 |
| **議決権行使指図（投票管理）** | 按资产所有者 / 管理人指图机械执行投票；ICJ 电子投票平台连接；代理顾问（ISS / Glass Lewis）材料处理 | 以 MTBJ 为次级托管人的资产管理公司、养老金计划、外国投资者 | 并非裁量性投票人——MTBJ 不形成自己的投票意见 |
| **特定金外信託（特定金外信托操作）** | 面向企业资金管理与金融机构资产的特殊目的投资信托结构（特金） | 以 特金 为投资工具的企业、区域银行、保险公司 | 并非裁量性资产管理人 |

### 运营职能细分

| Function | Description |
|---|---|
| 保管与簿记管理 | 直接连接 [[securities/japan-securities-depository-center|JASDEC]] 簿记过户；BoJ JGB 直接账户持有人；投信受託 记录保存；现金结算账户运营 |
| 结算（现金权益） | 经 JASDEC 为零售与机构权益结算提供 DVP-X1 / DVP-X2 / DVP-X3  连接 |
| 结算（JGB） | 直接参与 BoJ JGB 簿记系统，为养老金与投信委托提供 JGB 托管 |
| 结算（公司债 / CP） | 经 JASDEC 为 社債 与 CP 进行簿记过户 |
| 基金会计 / NAV 计算 | 为投信委托进行每日 NAV 计算；按 投信協会 指引的估值规则；审计支持工作底稿 |
| 公司行为 | 股息 / 利息收取、拆分、配股、转换、强制 / 自愿事件、预扣税处理；外国资产 CA 经全球托管次级网络处理 |
| 投票操作 | 接收会议材料、ICJ 电子投票转发、机械执行资产所有者 / 管理人指图 |
| 外国资产次级托管 | 为委托组合中的非日本资产经全球托管机构（[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]]）重新路由 |
| 证券借贷支持 | 客户选择加入时的借贷计划管理；抵押品提交；召回管理 |
| 成员 / 参与者操作 | 养老金成员余额报告（DB / DC）、给付操作、母子基金穿透 |

### 「信託口」名义人表层

约每一家 TOPIX-100  发行人披露都将「日本マスタートラスト信託銀行（信託口）」列为前 3  股东。经济上的解读是：

- 法律记录名称是 MTBJ。
- 受益所有者是 GPIF、企业养老金、投信ファンド、保险分离账户，以及 MTBJ 的外国投资者次级托管客户。
- 投票指图来自上游资产管理人或资产所有者——而非 MTBJ。

这正是为何 MTBJ 在公开股东登记册中表面上的「集中」不能被读作单一投票集团。同一批持仓被分散在数百个底层委托之中，各有不同的投票政策。

### 三个竞争层

| Layer | Competitor | Overlap with MTBJ | Differentiation |
|---|---|---|---|
| 国内纯托管专业机构 | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] | 几乎相同的产品集——养老金信托、投信受託、证券托管 | 不同的股东阵营（SMTB + 瑞穗 + 第一生命）与不同的委托基础；两者共同锚定双强国内基础设施 |
| 大型银行的全能型信托银行部门 | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]] | 全能型信托银行内部也经营托管与养老金信托——但通常将后台处理的资产管理腿外包给 MTBJ / CBJ | 全能型信托银行增加 不動産信託、相続、私人银行、证券代理、議決権電子化 服务；它们赢得*前台*委托，而 MTBJ / CBJ 运行*处理* |
| 全球托管机构（外国次级托管链） | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | 跨境托管、外国投资者日本次级托管、为日本委托处理外国资产 | 全球机构主导跨境；MTBJ 主导国内日本资产；两条链为 GPIF 与 投信 海外资产 互联 |

### 跨阵营比较表

| Dimension | MTBJ | CBJ | Megabank trust-bank arm | Global custodian (JP) |
|---|---|---|---|---|
| 贷款 / 存款 | 无 | 无 | 有（全能型） | 有（分行 + 日本信托子公司） |
| 不动产信托 | 否 | 否 | 有（大型） | 否 |
| 遗产 / 私人银行 | 否 | 否 | 有 | 部分（仅 UHNW） |
| 养老金信托管理 | 有（核心） | 有（核心） | 有（前台委托） | 部分（外国资产侧） |
| 投信 受託 | 有（核心） | 有（核心） | 有限（常外包给 MTBJ / CBJ） | 有限 |
| 仅证券托管 | 有（核心） | 有（核心） | 有 | 有（为外国资产的日本次级托管） |
| ICSD（Euroclear / Clearstream）直接 | 经全球机构重新路由 | 经全球机构重新路由 | 经全球机构重新路由 | 直接 |
| 公开股东登记册名义人 | 「日本マスタートラスト信託銀行（信託口）」 | 「日本カストディ銀行（信託口）」 | 较不突出——全能型品牌 | 外国法人 行中的外国股东名称 |

## 4. 手续费·收益结构

MTBJ 不公开披露细颗粒度的费用表。公开领域的解读是：

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| 养老金信托管理费 | AUC 基点（对 GPIF 规模的大型委托通常极低） | 不在逐项层面披露；MTBJ 为非上市，总费用收入仅可从集团 / 股东合并披露推断 |
| 证券托管费 | 按资产类别的 AUC 基点；每笔结算费；现金管理利差 | 不公开披露 |
| 投票管理 / 公司行为操作 | 通常打包计入托管费 | 不单独披露 |
| 证券借贷管理 / 代理出借费 | 与受益所有者按出借收入分成 | 不单独披露 |
| 现金余额利息收入 | 低——短久期资金配置 | 不单独披露 |

### 为何从外部难以读取费用

1. MTBJ 为非上市，仅发布最低法定披露；细颗粒度的费用披露在股东合并层面。
2. 投信受託 费可按基金观察，但因基金家族、资产类别及合约日期而异；跨基金汇总需要手动抓取每份 信託約款。
3. 养老金信托合约逐一谈判，包括 GPIF；无逐委托费率发布，故仅可从公开数据进行汇总的 AUC × 平均基点推断。
4. 机构客户的证券托管费按委托而定，不在标准公开费率上。

### 跨银行费用经济解读

| Aspect | MTBJ / CBJ (domestic specialists) | Megabank trust-bank arm | Global custodian (Japan) |
|---|---|---|---|
| 日本权益托管的定价权 | 高（规模公用事业） | 中（以 MTBJ / CBJ 为后端） | 中（外国投资者次级托管溢价） |
| 日本投信 受託 的定价权 | 高（公用事业规模、低逐基点费） | 低（极少直接作为主要基金的受託会社） | 低（极少作为日本投信 受託会社） |
| 外国资产托管的定价权 | 低（经全球机构重新路由） | 低 | 高（全球 ICSD + 次级托管网络） |
| 养老金信托管理的定价权 | 高（尤其 GPIF 规模委托） | 中高（全能型竞争） | 中（外国养老金侧委托） |

关于细颗粒度的跨银行费用比较，参见 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]。

### 监管栈

| Layer | Statute / regulator | MTBJ implication |
|---|---|---|
| 银行监管 | 银行法 + 金融庁 監督指針（信託兼営銀行 章节） | 资本充足、流动性、治理、IT 风险监管；MTBJ 运行低风险资产负债表，故资本要求轻 |
| 信托业务监管 | 信托业法 + 金融庁 監督指針（信託業 章节） | 信托账户分离、受信义务规则、利益冲突控制、受託者責任 标准 |
| 证券法叠加 | 金融商品取引法 —— 投資信託受託会社 / 托管操作 | NAV 计算问责、托管标准、投信協会 合规 |
| 养老金监管 | 厚生年金保険法、確定給付企業年金法、確定拠出年金法 | 养老金信托管理操作、受信报告、成员余额报告 |
| 存款保险 | 預金保険機構 加盟 | 法定成员资格，尽管存款很少 |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 报告 | 托管侧 AML 适用于底层客户委托 |
| 受托责任 / 公司治理 | スチュワードシップ・コード（自愿守则） | 投票管理透明度期望 |
| 记录保存 / 数据 | 個人情報保護法、金融分野ガイドライン | 养老金成员数据、NISA 相关账户数据 |

### 会计处理

| Item | Treatment |
|---|---|
| 信托账户资产（「信託財産」） | 在 MTBJ 为**表外**；对受益所有者为表内 |
| 托管费 | 在 P&L 中确认为费用收入 |
| 預金（自有账户存款） | 表内——但相对信托资产很小 |
| 结算账户残额 | 短久期；计入现金 + 同业拆放 |
| 资本 | 法定最低 信託兼営銀行 资本加内部缓冲 |

## 6. JASDEC / 清算基础设施连接

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

MTBJ 是 [[securities/japan-securities-depository-center|JASDEC]] 簿记过户的直接参与者，涵盖：

- 株式振替制度（无纸化上市股票）
- 一般債振替制度（公司债，包括 普通社債、転換社債）
- 短期社債振替制度（CP / 商业票据）
- 投資信託振替制度（公募投信 单位过户）

### 外国资产的次级托管链

MTBJ 所管理委托的外国资产腿（例如 GPIF 外国权益、投信 中的外国债券组合）经全球托管机构作为日本侧次级托管进行路由。链条大致为：

```
MTBJ (record-name trust-account) → global custodian (BNY / State Street / JPM / Citi)
  → local sub-custodian in each foreign market → local CSD
```

这一次级托管依赖意味着 MTBJ 的外国资产处理成本在结构上是从全球托管机构费用表的转嫁，这限制了 MTBJ 在外国资产腿上的定价权，但保留了其在国内资产腿上的定价权。

## Related

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

## Sources

- Master Trust Bank of Japan：官方网站、公司概览、业务 / 资产管理页面（「私たちの仕事」—— 称受托管理信托资产 ¥823  万亿日元，占日本 ¥2,351  万亿日元金融资产：https://www.mastertrust.co.jp/about/overview.html），公司信息页面（资本金 ¥10 亿日元；股东 MUFG Trust 46.5% / Nippon Life 33.5% / Meiji Yasuda 10.0% / 農中信託 10.0%；业务开始 2000-05-09：https://www.mastertrust.co.jp/company/information.html）。
- Trust Companies Association of Japan：受托管理信托资产统计。
- FSA：信托业务金融机构名单、银行牌照名单。
- JASDEC：证券簿记与存管系统资料。
- JSCC：清算与 DVP 现金权益资料。
- BoJ：JGB 簿记结算系统资料。
- GPIF：公开年度报告及资产管理人面板披露。

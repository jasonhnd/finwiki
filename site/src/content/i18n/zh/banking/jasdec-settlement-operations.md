---
source: banking/jasdec-settlement-operations
source_hash: ca7e958cea3103af
lang: zh
status: machine
fidelity: ok
title: "JASDEC 结算业务"
translated_at: 2026-06-18T23:33:48.339Z
---

# JASDEC 结算业务

## Wiki 路径

本条目归属于 [[banking/INDEX|banking index]]，是一篇对信托银行托管运营模式具有直接承载意义的结算基础设施深度剖析。市场基础设施侧请配合 [[securities/japan-securities-depository-center|JASDEC entity page]] 与 [[securities/japan-securities-clearing-corp|JSCC clearing corp]] 阅读; 信托银行路由请配合 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|Custody Bank operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]; 宏观结算管道视角请配合 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]; 机构连接点请配合 [[trust-banks/master-trust-bank|MTBJ]] 与 [[trust-banks/custody-bank|CBJ]] 阅读。关于 TSE / OSE / JSCC 整合背景，参见 [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] 与 [[securities/osaka-exchange|Osaka Exchange]]。

## TL;DR

JASDEC（証券保管振替機構 / ほふり — Japan Securities Depository Center, Inc.）是日本针对除日本国债以外所有无纸化证券的中央证券存管机构。它在振替制度（book-entry transfer，记账转账）体制下由 FSA ＋ 法务省指定。它运营四大记账系统——股票、公司债、CP 和投资信托——并通过其子公司 JDCC（JASDEC DVP Clearing Corporation）提供 DVP 结算、结算前匹配、公司行动分配以及外国股票托管支持。信托银行（MTBJ、CBJ、大型银行信托部门）、证券公司和全球托管行作为参与者直接连接到 JASDEC。该结算模式在股票侧与 JSCC 的 CCP 职能、在资金侧与日本银行资金相互咬合，产生 DVP-X1 / DVP-X2 / DVP-X3 品质的体制。对日本托管分析而言，JASDEC 是轨道; 信托银行是行驶于轨道之上的载具。

## 1. 机构定位

| Field | JASDEC |
|---|---|
| Legal name (JA) | 株式会社証券保管振替機構 |
| Legal name (EN) | Japan Securities Depository Center, Inc. |
| Common short name | ほふり (hofuri) |
| Founded | 2002-01-04 (株式会社化); JASDEC predecessor existed earlier as a 公的法人 |
| Capital | ~¥4.25 billion |
| Designation | FSA + Ministry of Justice-designated 振替機関 (book-entry transfer institution) |
| Primary subsidiary | **JDCC** (JASDEC DVP Clearing Corporation) for DVP cash-equity clearing |
| Functional position | Central securities depository (CSD) for all dematerialized JP securities other than JGB |
| HQ | Tokyo (株式会社証券保管振替機構) |
| Industry body / counterpart | JSCC (clearing CCP), BoJ (cash leg), TSE / OSE (trading venues) |

### JASDEC 不是什么

| Common confusion | Correction |
|---|---|
| 「JASDEC 清算交易」 | 否 — JASDEC 运营记账转账与结算; 中央交易对手清算由 JSCC 承担。 |
| 「JASDEC 结算 JGB」 | 否 — JGB 结算经由日本银行 JGB 记账系统。 |
| 「JASDEC 是投资者／托管行」 | 否 — JASDEC 是基础设施。托管行是信托银行与全球托管行; JASDEC 是它们行驶的轨道。 |
| 「JASDEC 处理所有外国股票」 | 部分正确 — JASDEC 支持外国股票凭证操作; 跨境 ICSD 连接经由 Euroclear / Clearstream 并配以次托管安排。 |

### 参与者类型

| Participant type | Examples |
|---|---|
| 信託銀行 (custody-only) | [[trust-banks/master-trust-bank|MTBJ]], [[trust-banks/custody-bank|CBJ]] |
| 信託銀行 (full-service) | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]], [[trust-banks/nochu-trust-bank|Norinchukin Trust]] |
| Securities firms | Nomura, Daiwa, SMBC Nikko, Mizuho Securities, regional brokers |
| Global custodians (Japan unit) | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]], [[foreign-financial-institutions/citigroup-japan|Citi Japan]] |
| Banks (general custody / 名義書換) | Megabanks, regional banks (limited custody mandate) |
| ICSD / cross-border infrastructure | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Japan]] (link routes) |

### 记账系统

| System | Asset class | Year started | Key flow |
|---|---|---|---|
| 株式振替制度 | Dematerialized listed equity | 2009-01 (paper-share abolition) | Trade match → JSCC CCP → JASDEC book-entry transfer → custodian account |
| 一般債振替制度 | Corporate bonds (普通社債, 転換社債), 地方債, 政府保証債, 財投機関債 | Phased from 2006 | OTC trade → JASDEC book-entry transfer |
| 短期社債振替制度 (CP) | Commercial paper | 2003-03 | Issuance + secondary transfer via JASDEC |
| 投資信託振替制度 | Publicly offered 投信 units | 2007-01 | Subscription / redemption / transfer of 投信 受益権 |

### DVP 及附属服务

| Service | Function |
|---|---|
| **DVP settlement** | 同时交割（经由 JASDEC 记账的证券）＋ 支付（经由 BoJ-net 或 全銀ネット 的资金）— 消除结算风险的不对称性 |
| **Pre-settlement matching** | DVP 结算前的交易匹配服务; 涵盖机构交叉交易与经纪商-托管接口 |
| **Corporate actions** | 股息、利息、赎回款的分配; 配股; 拆股; 合并; 要约收购结算 |
| **Issuer services** | 基准日股东识别的发行人接口; 为股东大会／股息目的向发行人提供实益所有人名单 |
| **Foreign stock certificates** | 对在日本发行或由日本投资者持有的外国证券提供托管支持服务 |
| **Tax / withholding ops** | 对股息／利息进行预扣税处理; 经由托管链支持外国投资者的税收协定退税 |
| **JDCC DVP clearing** | JASDEC DVP Clearing Corporation — JDCC 对非 JSCC 清算的现金股票 DVP 处理资金侧轧差 |

### 职能类型分解

| Function | Who initiates | Who settles | Where the cash leg sits |
|---|---|---|---|
| Listed-equity exchange trade | Investor → broker → TSE/OSE | JSCC CCP → JASDEC book-entry transfer → custodian account | BoJ-net funds via JSCC participants |
| Listed-equity OTC trade | Investor → broker → counterparty broker | JASDEC + JDCC | BoJ-net or 全銀ネット |
| Corporate bond OTC trade | Investor → broker → counterparty broker | JASDEC 一般債振替 | BoJ-net (large lot) or 全銀ネット |
| Commercial paper | Issuer → dealer → investor | JASDEC 短期社債振替 | BoJ-net |
| 投信 unit transfer | Distributor → 投信協会 ops → fund | JASDEC 投信振替 | Cash settlement per distributor channel |
| 投信 receipt / NAV-based settlement | Trust bank / asset manager | JASDEC + trust-bank books | Settlement-account residual |

## 3. 竞争结构

JASDEC 是单一 CSD 的国家基础设施——就其所涵盖的资产类别而言，不存在国内替代方案。因此「竞争」图景关乎以下方面：

| Comparison axis | JASDEC | Alternative / overlapping |
|---|---|---|
| 股票／公司债／CP／投信无纸化结算 | **唯一的国内选项** | 无 — JASDEC 是振替制度下被指定的振替机关 |
| JGB 结算 | 不适用 | **日本银行 JGB 记账系统**为替代方案（独立的基础设施） |
| 现金股票的 CCP 清算 | 不适用 | 作为 JASDEC 上层的中央交易对手 **JSCC** |
| 跨境／ICSD 结算 | 经由双边链路 + 全球托管行重新路由 | 作为 ICSD 层的 **Euroclear** + **Clearstream**（配以日本次托管行） |

### 跨基础设施交互

| Layer | JASDEC role | Counterpart |
|---|---|---|
| 交易场所 | 接收已匹配的交易数据 | TSE, OSE, ODX, PTS |
| 清算 CCP | 接收经更替确认的债务数据 | JSCC |
| 资金结算 | 经由 BoJ-net 或 全銀ネット 的资金侧 | BoJ, 全銀ネット, Zengin EDI |
| 发行人接口 | 实益所有人名单、基准日快照 | 经由 株式事務代行銀行 的发行人（上場会社） |
| 外国链路 | 入境外国次托管链; 出境日本证券至 ICSD | 全球托管行、Euroclear、Clearstream |

## 4. 手续费・收益结构

JASDEC 作为采用受监管费率而非市场定价的公用事业型定价基础设施运营。

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Participation fee (固定) | 按参与者年度计 | 在费率表中披露（JASDEC 公开） |
| Per-transaction settlement fee | 按每笔记账转账计 | 在费率表中披露 |
| Issuer service fee | 按发行人、按 CA 事件、按基准日快照计 | 在费率表中披露 |
| DVP service fee | 按每笔 DVP 交易计 | 在费率表中披露 |
| 投信 振替 fee | 按每笔投信单位转账／设定／赎回计 | 在费率表中披露 |
| JDCC clearing fee | 现金股票 DVP 资金轧差费 | 在 JDCC 费率表中披露 |

### 监管指定

| Designation | Source | Implication |
|---|---|---|
| 振替機関 (book-entry transfer institution) | 社債、株式等の振替に関する法律 (振替法) — 由 FSA + 法務省 指定 | 运营上市股票、公司债、CP、投信无纸化记账转账的唯一法定权限 |
| FMI (Financial Market Infrastructure) | 经由 FSA / BoJ 联合监督的 BIS-IOSCO PFMI 标准 | 必须满足 PFMI 原则（违约风险、运营风险、结算最终性标准） |
| FSA supervisory authority | 金商法 + 振替法 + 内閣府令 | 现场检查、治理、IT 风险监督 |
| BoJ oversight | BoJ 支付系统监督框架 | 鉴于与 BoJ-net 的 DVP 链路而进行的联合监督 |

### 结算最终性

振替制度下的结算在记账转账完成后即**具有法律最终性**——在正常运营下不存在追回（clawback）。这正是 DVP-X1 / X2 / X3 结算被视为机构级别的结构性原因。

### DVP-X1 / X2 / X3 品质分类

| Quality tier | Description |
|---|---|
| DVP-X1 | 结算前匹配 + JSCC 清算的现金股票; 含资金轧差的完整 DVP |
| DVP-X2 | 经由 JDCC 资金轧差的 OTC 现金股票 DVP |
| DVP-X3 | 经由 JASDEC + 全銀 资金侧的债券／投信 DVP |

### 信托银行参与者的会计处理

| Item | Treatment |
|---|---|
| 代客户在 JASDEC 记账中持有的证券 | 对信托银行表外; 对实益所有人表内 |
| 托管行处的现金结算账户残余 | 表内（规模较小） |
| 向 JASDEC 支付的结算费用 | 托管行损益表中的营业费用项 |
| 来自上游客户的托管费收入 | 托管行损益表中的营业收入 |

## 6. JASDEC / 清算基础设施连接

```
        ┌─────────────────────────────┐
        │  Trading venues             │
        │  TSE / OSE / ODX / PTS      │
        └─────────────┬───────────────┘
                      │ matched trade
                      ▼
        ┌─────────────────────────────┐
        │  JSCC                       │
        │  (central counterparty for  │
        │  cash equity + repo + JGB   │
        │  OTC derivatives)           │
        └─────────────┬───────────────┘
                      │ novated obligation
                      ▼
        ┌─────────────────────────────┐
        │  JASDEC                     │
        │  - 株式振替                  │
        │  - 一般債振替                │
        │  - 短期社債振替              │
        │  - 投信振替                  │
        │  - JDCC DVP cash-leg netting │
        └─┬──────────────────────┬────┘
          │ book-entry transfer  │ cash leg
          ▼                      ▼
        ┌────────────────────────────────┐    ┌──────────────────────┐
        │  Trust banks / custodians      │    │  BoJ-net / 全銀ネット │
        │  - MTBJ, CBJ (custody-only)    │    │  funds settlement    │
        │  - MUFG Trust, SMTB, Mizuho    │    └──────────────────────┘
        │    Trust (full-service)        │
        │  - BNY, State Street, JPM,     │
        │    Citi (global custodians)    │
        │  - Securities firms            │
        └────────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │  Beneficial owners          │
        │  GPIF, pensions, 投信,       │
        │  insurers, retail investors │
        └─────────────────────────────┘
```

### 信托银行参与者交互模型

MTBJ 与 CBJ 各自直接维护 JASDEC 参与者账户。它们代底层资产所有者委托所持有的记账头寸，产生了发行人股东名册上可见的「信託口」名义人模式。JASDEC 的实益所有人披露服务旨在为发行人提供基准日的定期穿透视图，但公开的大股东名单仍将「信託口」名称显示为记录上的持有人。

### 跨境／ICSD 链路

对于外国投资者持有的日本发行证券的跨境结算，其链条为：

```
Foreign investor
  → Global custodian (BNY / State Street / JPM / Citi)
    → Japan sub-custodian (trust bank — often MTBJ / CBJ / megabank trust arm)
      → JASDEC book-entry account
```

对于日本投资者持有的外国发行证券，使用反向链条：

```
JP investor
  → JP custodian (trust bank)
    → JP sub-custody via global custodian
      → ICSD (Euroclear / Clearstream) or local CSD
```

### 代币化证券的悬而未决问题

经由 [[payment-firms/progmat|Progmat]] 及类似平台发行的代币化信托受益权证券，运行于并行的 DLT 账本之上。其与 JASDEC 记账轨道的整合仍在设计之中：

| Design option | Trade-off |
|---|---|
| ST 仅在并行账本上发行 | 失去 JASDEC 结算最终性保护; 依赖 ST 平台的最终性规则 |
| ST 镜像至 JASDEC 记账 | 基础设施成本翻倍; 镜像分录的法律地位不明 |
| ST 以引用方式锚定至 JASDEC | 混合式; 振替法下的法律地位需澄清 |

JASDEC 在这一方面的演进，将实质性地决定信托银行能否像传统证券托管一样轻松地提供机构级别的 ST 托管。

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[payment-firms/progmat]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- JASDEC: official site (Japanese + English), system pages, company outline.
- JSCC: clearing CCP pages and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- FSA: 振替法 supervisory page and trust-business financial institution list.
- Trust Companies Association of Japan: trust-bank participant information.
- Wikipedia (cross-reference): JASDEC entries and ほふり history.

---
source: banking/jasdec-settlement-operations
source_hash: a756047ead15dc4b
lang: zh
status: machine
fidelity: ok
title: "JASDEC 结算运营"
translated_at: 2026-05-30T18:52:47.783Z
---

# JASDEC 结算运营

## Wiki route

本条目归属于 [[banking/INDEX|banking index]]，作为一项结算基础设施深度解析，直接支撑信托银行托管运营模式。请与 [[securities/japan-securities-depository-center|JASDEC entity page]] 及 [[securities/japan-securities-clearing-corp|JSCC clearing corp]]（市场基础设施侧）、与 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|Custody Bank operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]] 及 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]（信托银行路由）、与 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]（宏观管道视图）以及与 [[trust-banks/master-trust-bank|MTBJ]] 及 [[trust-banks/custody-bank|CBJ]]（机构连接点）一并阅读。关于 TSE / OSE / JSCC 整合背景，参见 [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] 及 [[securities/osaka-exchange|Osaka Exchange]]。

## TL;DR

JASDEC（証券保管振替機構 / ほふり — Japan Securities Depository Center, Inc.）是日本对除日本国债以外所有无纸化证券的中央证券存管机构。它在振替制度（簿记过户）框架下由 FSA + 法务省指定。它运营四大簿记系统——股票、公司债、CP 及投资信托——外加 DVP 结算、结算前匹配、公司行为分发，以及经由其子公司 JDCC（JASDEC DVP Clearing Corporation）的外国股票托管支持。信托银行（MTBJ、CBJ、大型银行信托部门）、证券公司及全球托管机构作为参与者直接接入 JASDEC。该结算模型在权益侧与 JSCC 的 CCP 职能、在现金侧与 BoJ 资金相互锁合，形成 DVP-X1 / DVP-X2 / DVP-X3  的质量制度。就日本托管分析而言，JASDEC 是轨道；信托银行是轨道上的载具。

## 1. 机构位置

| Field | JASDEC |
|---|---|
| 法定名称（JA） | 株式会社証券保管振替機構 |
| 法定名称（EN） | Japan Securities Depository Center, Inc. |
| 常用简称 | ほふり (hofuri) |
| 成立 | 2002-01-04（株式会社化）；JASDEC 的前身更早作为公的法人存在 |
| 资本金 | ~¥4.25  亿 |
| 指定 | FSA + 法务省指定的振替機関（簿记过户机构） |
| 主要子公司 | **JDCC**（JASDEC DVP Clearing Corporation），负责 DVP 现金权益清算 |
| 职能定位 | 除 JGB 以外所有无纸化日本证券的中央证券存管机构（CSD） |
| 总部 | 东京（株式会社証券保管振替機構） |
| 行业机构 / 对手方 | JSCC（清算 CCP）、BoJ（现金腿）、TSE / OSE（交易场所） |

### JASDEC 不是什么

| Common confusion | Correction |
|---|---|
| 「JASDEC 清算交易」 | 否——JASDEC 运营簿记过户与结算；中央对手方清算是 JSCC。 |
| 「JASDEC 结算 JGB」 | 否——JGB 结算经由 BoJ JGB 簿记系统。 |
| 「JASDEC 是投资者 / 托管人」 | 否——JASDEC 是基础设施。托管人是信托银行与全球托管机构；JASDEC 是它们行驶的轨道。 |
| 「JASDEC 处理所有外国股票」 | 部分——JASDEC 支持外国股票凭证操作；跨境 ICSD 连接经由 Euroclear / Clearstream 并附次级托管安排。 |

### 参与者类型

| Participant type | Examples |
|---|---|
| 信託銀行（custody-only） | [[trust-banks/master-trust-bank|MTBJ]]、[[trust-banks/custody-bank|CBJ]] |
| 信託銀行（full-service） | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/nochu-trust-bank|Norinchukin Trust]] |
| 证券公司 | Nomura、Daiwa、SMBC Nikko、Mizuho Securities、区域券商 |
| 全球托管机构（日本单位） | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]]、[[foreign-financial-institutions/citigroup-japan|Citi Japan]] |
| 银行（一般托管 / 名义书换） | 大型银行、区域银行（托管委托有限） |
| ICSD / 跨境基础设施 | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Japan]]、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Japan]]（连接路线） |

### 簿记系统

| System | Asset class | Year started | Key flow |
|---|---|---|---|
| 株式振替制度 | 无纸化上市权益 | 2009-01 （纸质股票废止） | 交易匹配 → JSCC CCP → JASDEC 簿记过户 → 托管账户 |
| 一般債振替制度 | 公司债（普通社債、転換社債）、地方債、政府保証債、財投機関債 | 自 2006  起分阶段 | OTC 交易 → JASDEC 簿记过户 |
| 短期社債振替制度（CP） | 商业票据 | 2003-03  | 经由 JASDEC 发行 + 二级过户 |
| 投資信託振替制度 | 公募投信 单位 | 2007-01  | 投信 受益権 的认购 / 赎回 / 过户 |

### DVP 及辅助服务

| Service | Function |
|---|---|
| **DVP 结算** | 同步交付（证券经 JASDEC 簿记）+ 付款（资金经 BoJ-net 或 全銀ネット）——消除结算风险的不对称 |
| **结算前匹配** | DVP 结算前的交易匹配服务；涵盖机构交叉交易与券商-托管接口 |
| **公司行为** | 分发股息、利息、赎回款；配股；拆分；合并；要约收购结算 |
| **发行人服务** | 在登记日为股东识别提供发行人接口；为 AGM / 股息目的向发行人提供受益所有者名单 |
| **外国股票凭证** | 为在日本发行或由日本投资者持有的外国证券提供托管支持服务 |
| **税务 / 预扣操作** | 对股息 / 利息的预扣税处理；经托管链提供外国投资者税收协定退税支持 |
| **JDCC DVP 清算** | JASDEC DVP Clearing Corporation——JDCC 为非 JSCC 清算的现金权益 DVP 处理现金腿的资金净额结算 |

### 职能类型细分

| Function | Who initiates | Who settles | Where the cash leg sits |
|---|---|---|---|
| 上市权益交易所交易 | 投资者 → 券商 → TSE/OSE | JSCC CCP → JASDEC 簿记过户 → 托管账户 | 经 JSCC 参与者的 BoJ-net 资金 |
| 上市权益 OTC 交易 | 投资者 → 券商 → 对手券商 | JASDEC + JDCC | BoJ-net 或 全銀ネット |
| 公司债 OTC 交易 | 投资者 → 券商 → 对手券商 | JASDEC 一般債振替 | BoJ-net（大额）或 全銀ネット |
| 商业票据 | 发行人 → 交易商 → 投资者 | JASDEC 短期社債振替 | BoJ-net |
| 投信 单位过户 | 分销商 → 投信協会 操作 → 基金 | JASDEC 投信振替 | 按分销商渠道的现金结算 |
| 投信 收取 / 基于 NAV 的结算 | 信托银行 / 资产管理人 | JASDEC + 信托银行账簿 | 结算账户残额 |

## 3. 竞争结构

JASDEC 是单一 CSD 的国家级基础设施——对其覆盖的资产类别而言不存在国内替代。因此「竞争」地图实为：

| Comparison axis | JASDEC | Alternative / overlapping |
|---|---|---|
| 权益 / 公司债 / CP / 投信 无纸化结算 | **唯一国内选项** | 无——JASDEC 是振替制度下指定的振替機関 |
| JGB 结算 | 不适用 | **BoJ JGB 簿记系统**是替代（独立基础设施） |
| 现金权益的 CCP 清算 | 不适用 | **JSCC** 作为 JASDEC 之上的中央对手方层 |
| 跨境 / ICSD 结算 | 经双边链接 + 全球托管机构重新路由 | **Euroclear** + **Clearstream** 作为 ICSD 层（附日本次级托管） |

### 跨基础设施交互

| Layer | JASDEC role | Counterpart |
|---|---|---|
| 交易场所 | 接收匹配后的交易数据 | TSE、OSE、ODX、PTS |
| 清算 CCP | 接收经更替确认的债务数据 | JSCC |
| 资金结算 | 现金腿经 BoJ-net 或 全銀ネット | BoJ、全銀ネット、Zengin EDI |
| 发行人接口 | 受益所有者名单、登记日快照 | 发行人（上場会社）经由 株式事務代行銀行 |
| 外国链接 | 入站外国次级托管链；出站日本证券至 ICSD | 全球托管机构、Euroclear、Clearstream |

## 4. 手续费·收益结构

JASDEC 作为公用事业定价的基础设施运营，采用受监管费率而非市场定价。

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| 参与费（固定） | 按参与者年度计 | 在费用表中披露（JASDEC 公开） |
| 单笔交易结算费 | 按每笔簿记过户计 | 在费用表中披露 |
| 发行人服务费 | 按每发行人、每 CA 事件、每登记日快照计 | 在费用表中披露 |
| DVP 服务费 | 按每笔 DVP 交易计 | 在费用表中披露 |
| 投信 振替 费 | 按每笔投信单位过户 / 认购 / 赎回计 | 在费用表中披露 |
| JDCC 清算费 | 现金权益 DVP 资金净额结算费 | 在 JDCC 费用表中披露 |

### 监管指定

| Designation | Source | Implication |
|---|---|---|
| 振替機関（簿记过户机构） | 社債、株式等の振替に関する法律（振替法）——由 FSA + 法務省 指定 | 对上市权益、公司债、CP、投信运营无纸化簿记过户的唯一法定权限 |
| FMI（金融市场基础设施） | 经 FSA / BoJ 联合监督的 BIS-IOSCO PFMI 标准 | 须满足 PFMI 原则（违约风险、运营风险、结算终局性标准） |
| FSA 监管权 | 金商法 + 振替法 + 内閣府令 | 现场检查、治理、IT 风险监管 |
| BoJ 监督 | BoJ 支付系统监督框架 | 鉴于与 BoJ-net 的 DVP 链接而进行联合监督 |

### 结算终局性

振替制度下的结算在簿记过户完成后**具有法律终局性**——正常运营下没有追回。这正是 DVP-X1 / X2 / X3  结算被视为机构级的结构性原因。

### DVP-X1 / X2 / X3  质量分类

| Quality tier | Description |
|---|---|
| DVP-X1  | 结算前匹配 + JSCC 清算的现金权益；附资金净额结算的完整 DVP |
| DVP-X2  | 经 JDCC 资金净额结算的 OTC 现金权益 DVP |
| DVP-X3  | 经 JASDEC + 全銀 现金腿的债券 / 投信 DVP |

### 信托银行参与者的会计处理

| Item | Treatment |
|---|---|
| 代客户持有于 JASDEC 簿记中的证券 | 对信托银行为表外；对受益所有者为表内 |
| 托管处的现金结算账户残额 | 表内（少量） |
| 向 JASDEC 支付的结算费用 | 托管人 P&L 中的运营费用项 |
| 来自上游客户的托管费收入 | 托管人 P&L 中的运营收入 |

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

MTBJ 与 CBJ 各自维持直接的 JASDEC 参与者账户。它们代底层资产所有者委托所持的簿记头寸，产生了发行人股东登记册上可见的「信託口」名义人模式。JASDEC 的受益所有者披露服务用以在登记日给发行人提供周期性的穿透查看，但公开的主要股东名单仍以「信託口」名称显示为记录持有人。

### 跨境 / ICSD 链接

对于由外国投资者持有的日本发行证券的跨境结算，链条为：

```
Foreign investor
  → Global custodian (BNY / State Street / JPM / Citi)
    → Japan sub-custodian (trust bank — often MTBJ / CBJ / megabank trust arm)
      → JASDEC book-entry account
```

对于日本投资者持有外国发行证券，使用反向链条：

```
JP investor
  → JP custodian (trust bank)
    → JP sub-custody via global custodian
      → ICSD (Euroclear / Clearstream) or local CSD
```

### 代币化证券的悬而未决问题

经由 [[payment-firms/progmat|Progmat]] 及类似平台发行的代币化信託受益権证券运行于并行的 DLT 账本之上。它们与 JASDEC 簿记轨道的整合仍在设计中：

| Design option | Trade-off |
|---|---|
| ST 仅在并行账本上发行 | 失去 JASDEC 结算终局性保护；依赖 ST 平台的终局性规则 |
| ST 镜像至 JASDEC 簿记 | 基础设施成本翻倍；镜像分录的法律地位不明 |
| ST 以引用方式锚定至 JASDEC | 混合式；振替法下的法律地位需要厘清 |

JASDEC 在这一方面的演进，将实质性地决定信托银行能否像传统证券托管那样轻松地提供机构级 ST 托管。

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

- JASDEC：官方网站（日文 + 英文）、系统页面、公司概要。
- JSCC：清算 CCP 页面及 DVP 现金权益资料。
- BoJ：JGB 簿记结算系统资料。
- FSA：振替法 监管页面及信托业务金融机构名单。
- Trust Companies Association of Japan：信托银行参与者信息。
- Wikipedia（交叉引用）：JASDEC 词条及 ほふり 历史。

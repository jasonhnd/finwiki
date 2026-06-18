---
source: banking/pension-trust-mandate-allocation-japan
source_hash: 20586bcbd701c454
lang: zh
status: machine
fidelity: ok
title: "日本养老金信托委托配置"
translated_at: 2026-06-18T23:33:48.295Z
---

# 日本养老金信托委托配置

## Wiki route

本词条位于 [[banking/INDEX|banking index]] 之下，将养老金侧的需求与信托银行侧的供给相联结。请与机构锚点 [[trust-banks/master-trust-bank|MTBJ]] 和 [[trust-banks/custody-bank|CBJ]]、运营模式 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] 和 [[banking/custody-bank-operating-model|Custody Bank operating model]]、全景视图 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、运营比较 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 及费用研究 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] 一并阅读。就轨道与 [[banking/jasdec-settlement-operations|JASDEC settlement operations]] 配对；就监管层级与 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] 配对；就前台信托银行侧与 [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]] 和 [[trust-banks/mizuho-trust-bank|Mizuho Trust]] 配对；就外币资产端的次级托管与 [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] 配对。机构背景参见 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]。

## TL;DR

日本的养老金信托委托分为三层：GPIF（资产约 ¥250 万亿，公共养老金）、企业 DB 计划（确定给付企业年金）及 DC 计划（确定拠出企业年金，含 iDeCo）。每一层都将投资管理（运用机关）与资产管理（资产管理机关）分离 —— 后者正是 MTBJ、CBJ 及大型银行的信托银行部门竞争之处。GPIF 的模式有充分文献记载：为主动与被动委托设立的一组外部 运用机关（资产管理公司）名单，加上一组单独的 资产管理机关 信托银行名单（MTBJ + CBJ + 精选的全服务信托银行）负责托管与管理。企业 DB 计划镜像同样的分离，通常每个计划配 1 至 2 家信托银行。DC 计划增加了一个 运営管理机关 层（成员账户的记录保管），大型银行的信托银行部门与专门的 DC 运营商在此竞争。各层的外币资产端均经由作为日本次级托管人的全球托管银行。其结果是一个分层的委托配置体系，其中 MTBJ 与 CBJ 锚定资产管理基础设施，而大型银行的信托银行与全球托管银行在前台投资管理与 DC 运营管理者侧竞争。

### 养老金体系三层

| 层 | 说明 | 法令 | 大致规模 |
|---|---|---|---|
| **GPIF**（年金积立金管理运用独立行政法人） | 公共养老金储备基金 | 厚生年金保险法 + 国民年金法 + 独立行政法人法 | 约 ¥250 万亿 AUM |
| **企业 DB**（确定给付企业年金） | 企业发起的确定给付养老金信托 | 确定给付企业年金法（2001） | 受托资产约 ¥66.0 万亿（确定给付企业年金，令和5年3月 末；DB + 厚生年金基金 合计约 ¥80.5 万亿） |
| **企业型 DC + iDeCo**（确定拠出年金） | 企业发起 / 个人型 DC | 确定拠出年金法（2001） | 合计约 ¥29 万亿（企业型 DC ¥22.8 万亿 + iDeCo ¥6.2 万亿，2024-03 末）；在 NISA / DC 改革后快速增长 |

### 委托配置的角色分离

| 角色 | 职能 | 示例 |
|---|---|---|
| 运用机关（投资管理人） | 裁量性投资判断；组合构建；交易执行 | 资产管理公司 —— 野村 AM、三菱 UFJ AM、大和 AM、SBI AM、JP 侧外部管理人、外币资产管理人（如 Vanguard、BlackRock、State Street SSGA、Goldman Sachs AM、PIMCO 等） |
| 资产管理机关（资产管理人 / 信托银行） | 信托账户保管、基准价额计算、结算、公司行为处理、表决权管理 | MTBJ、CBJ、三菱 UFJ 信托、SMTB、瑞穗信托、农中信托 |
| 受託金融机关（信托受托金融机构） | 养老金信托设立、信托的受托保有人 | 同上各信托银行，以受托人身份 |
| 运営管理机关（DC 运营管理者） | 成员账户记录保管；投资菜单提供；面向成员的 UI | 信托银行、证券公司、专门 DC 运营商（NRK 日本记录保管网络） |
| 次级托管人（外币资产） | 外币资产簿记、结算、外汇、外币公司行为 | BNY Mellon、State Street、JP Morgan、Citi（作为全球托管人）—— 经由日本信托银行接入 |

### GPIF 的委托配置

GPIF（约 ¥250 万亿 AUM）运营着日本最大的单一养老金资产池，也是全球最大的养老金基金。其委托配置模式在 GPIF 的年度报告中有公开文献记载。

| GPIF 委托档位 | 配置者 | 典型参与者类型 |
|---|---|---|
| 国内股票主动 | 运用机关（外部） | 野村 AM、三菱 UFJ AM、大和 AM、Asset Management One、Goldman Sachs AM Japan、JPM AM Japan、其他 |
| 国内股票被动 | 运用机关（外部） | Asset Management One、三菱 UFJ AM、野村 AM、大和 AM、BlackRock JP、State Street GA JP、其他 |
| 外国股票主动 | 运用机关（外部） | 运营全球股票策略的国际 + JP 系列 AM |
| 外国股票被动 | 运用机关（外部） | BlackRock、State Street GA、Vanguard（在相关时）、区域 AM 系列 |
| 国内债券主动 / 被动 | 运用机关（外部） | Asset Management One、三菱 UFJ AM、野村 AM、其他 |
| 外国债券主动 / 被动 | 运用机关（外部） | PIMCO、JPM AM、BlackRock、其他 |
| 另类（PE / 基础设施 / 房地产） | 运用机关（外部） | 专门 PE / 基础设施 / RE 管理人；母子基金结构 |
| 资产管理（托管、基准价额、公司行为、表决） | 资产管理机关（外部） | MTBJ + CBJ（锚点） + 精选的全服务信托银行 |
| 外币资产次级托管 | 次级托管链 | 经由 MTBJ / CBJ → 全球托管人（BNY / State Street / JPM / Citi） |

### 企业 DB 计划的委托配置模式

| 档位 | 配置者 | 典型参与者 |
|---|---|---|
| 计划受托人（受託金融机关） | 信托银行 | 三菱 UFJ 信托、SMTB、瑞穗信托、区域信托银行替代 |
| 投资管理委托 | 运用机关（外部 + 计划侧指示） | 资产管理公司 —— 通常每个计划数家，有时包括外币 AM |
| 资产管理 | 资产管理机关 | 计划受托人自有的托管部门 或 外部（MTBJ / CBJ）—— 视计划结构而定 |
| 精算 / 顾问 | 信托银行 PB / 养老金顾问 | 三菱 UFJ 信托、SMTB、瑞穗信托、专门养老金顾问 |
| 给付支付运营 | 计划受托人 | 信托银行内部 |

### DC 计划的委托配置模式

| 档位 | 配置者 | 典型参与者 |
|---|---|---|
| 运営管理机关（记录保管、成员管理） | 发起人 / 计划规则 | 信托银行（三菱 UFJ 信托、SMTB、瑞穗信托的 DC 部门）、证券公司（野村、大和、SMBC 日兴）、专门运营商 NRK |
| 投资菜单提供 | 运営管理机关 | 精选的 投信 阵容 |
| 信托侧托管（资产管理） | 资产管理机关 | 经由 运営管理机关 所选 投信 受托会社 的 MTBJ / CBJ |
| 菜单中各基金的 投信受托会社 | 作为 投信受托 的信托银行 | MTBJ / CBJ / 大型银行信托部门 |
| 外币资产端 | 次级托管链 | 经由信托银行 → 全球托管人 |

### 为何角色分离重要

| 解读 | 含义 |
|---|---|
| 投资判断 位于 运用机关 | 是资产管理公司而非信托银行选择证券并行使表决权（依据表决权行使指引） |
| 资产保管 位于 资产管理机关 | 信托银行以「信托口」名义持有 —— 出现在发行体股东名册上 |
| 受托人责任 的分割 | 信托银行承担资产安全的受托责任；资产管理公司承担投资判断的受托责任 |
| 表决权权限 | 依据资产管理公司的表决权行使指引运作，由信托银行机械执行 |
| 成员余额（DC） | 在 运営管理机关 处持有 —— 但基础的 投信 持仓作为 受托会社 位于信托银行 |

这种分离是「MTBJ + CBJ」作为每一个 TOPIX 发行体的顶级股东出现却不能被解读为统一表决权集团的结构性原因。

### 跨养老金层的竞争图

| 养老金层 | 前台（运用机关）竞争 | 后台（资产管理机关）竞争 | 成员侧（运営管理机关）竞争 |
|---|---|---|---|
| GPIF | 广泛名单 —— JP AM + 外币 AM 争夺委托份额 | MTBJ + CBJ + 精选的全服务信托银行 | 不适用（GPIF 为公共养老金，无 DC 那样的成员级管理） |
| 企业 DB | 计划受托人侧 AM + 外部 AM | 计划受托人内部 + 单独委托管理的 MTBJ / CBJ | 不适用（DB 无成员级管理记录） |
| 企业型 DC | 运営管理机关 所选 投信 阵容 → 基础 运用机关 | 经由 受托会社 层的 MTBJ / CBJ | 三菱 UFJ 信托 / SMTB / 瑞穗信托 / 野村 / 大和 / SMBC 日兴 / NRK |
| iDeCo | 同 DC | 同 DC | 相同 DC 运营商（常为面向零售的证券公司 / 在线券商） |

### 跨信托银行的养老金委托竞争

| 信托银行 | GPIF 委托侧 | 企业 DB 侧 | DC 运営管理 侧 |
|---|---|---|---|
| MTBJ | 主要 资产管理机关 | 主要 资产管理机关 | 有限（仅托管的专门机构） |
| CBJ | 主要 资产管理机关 | 主要 资产管理机关 | 有限（仅托管的专门机构） |
| 三菱 UFJ 信托 | 精选 资产管理机关 使用 | 主要计划受托人 + 管理 | 主要 DC 运営管理机关（企业型 DC） |
| SMTB | 精选 资产管理机关 使用 | 主要计划受托人 + 管理 | 主要 DC 运営管理机关 |
| 瑞穗信托 | 精选 资产管理机关 使用 | 主要计划受托人 + 管理 | 主要 DC 运営管理机关 |
| 农中信托 | 有限 | 农林系计划受托人 + 管理 | 有限 |
| SMBC 信托 | 有限（PB 语境） | 有限 | 有限 |
| 野村信托 | 有限（集团内部） | 有限 | 集团关联的 DC 运营商支持 |

### 为何 MTBJ + CBJ 主导资产管理

| 驱动因素 | 效果 |
|---|---|
| 基准价额计算 + 公司行为处理的规模经济 | 相较大型银行内部管理更利于单一用途的基础设施 |
| GPIF 对专门托管的历史性招标偏好 | 将 MTBJ + CBJ 锚定为默认赢家 |
| 大型银行信托银行在前台委托上单独运营的偏好 | 将资产管理基础设施留给 MTBJ + CBJ |
| MTBJ + CBJ 的成本回收定价 | 其他主体难以压低 |
| 信托银行 牌照 + JASDEC 参与 + 信托口 名义人逻辑 | 限制新进入者 |

## 4. 手续费・收益结构

| 养老金层 | 前台费用模式（运用机关） | 后台费用模式（资产管理机关） | 成员侧费用模式（运営管理机关） |
|---|---|---|---|
| iDeCo | 同 DC | 同 DC | 按成员-年的运营商费用（常为每月数百日元） |

按银行的细粒度费用分析参见 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]。

### 监管框架

| 法令 / 监管机构 | 涵盖范围 |
|---|---|
| 厚生年金保险法 + 国民年金法 | 公共养老金，GPIF 设立依据 |
| 独立行政法人通则法 + GPIF 个别法 | GPIF 治理与运营框架 |
| 确定给付企业年金法 | 企业 DB 计划 |
| 确定拠出年金法 | 企业型 DC + iDeCo |
| 信托业法 + 银行法 | 养老金信托 受托 的信托银行牌照 |
| 金商法（投信受托 / 托管 ops） | 投信 受托会社 / 托管标准 |
| 厚生劳动省 监督指针 | 养老金计划监督 |
| 金融厅 监督指针（信托业 + 信托银行） | 信托银行监督 |
| GPIF 投资原则 / 尽责管理原则 | GPIF 特有的治理 / 尽责管理 |
| 个人信息保护法 + 金融领域指引 | 成员数据保护 |

### 受托人责任的配置

| 当事方 | 受托人责任范围 |
|---|---|
| 资产管理公司（运用机关） | 投资判断责任：组合构建、证券选择、表决意见 |
| 信托银行（资产管理机关 / 受託金融机关） | 资产安全责任：保管、隔离、准确记录、机械式表决执行 |
| DC 运営管理机关 | 成员账户受托责任：准确记录保管、公平菜单提供、提取合规 |
| 计划发起人（企业 DB / DC） | 计划设计受托责任：计划规则、缴款水平、治理 |

### 会计视角

| 项目 | 确认之处 |
|---|---|
| 养老金计划信托资产 | 对信托银行为表外；对养老金计划 / GPIF 为表内 |
| 养老金信托管理费 | 信托银行损益表中的收益 |
| 养老金计划成员余额（DC） | 在 运営管理机关 记录中持有；以 投信 应收款 + 现金支撑 |
| 养老金计划缴款（DB） | 在计划 / 发起人处，而非信托银行 |

## 6. JASDEC / 清算基础设施连接

```
┌──────────────────────────────────────────────────────────────────────┐
│ 养老金计划各层                                                         │
│ - GPIF（约 ¥250 万亿）                                                 │
│ - 企业 DB（众多 plans）                                                │
│ - 企业型 DC + iDeCo（众多 plans，成员账户）                            │
└────────────┬────────────────────────────────────────────────────────┬─┘
             │ 委托                                                    │ 成员管理（DC）
             ▼                                                         ▼
┌────────────────────────────────┐                          ┌─────────────────────────┐
│ 运用机关（资产管理公司）        │                          │ DC 运営管理机关（DC ops） │
│ — JP-AM + 外币-AM                │                          │ — 三菱 UFJ 信托 DC、     │
│ — 裁量性投资                     │                          │   SMTB DC、瑞穗信托      │
│   判断 + 表决意见                │                          │   DC、野村、大和、       │
└────────────┬───────────────────┘                          │   SMBC 日兴、NRK         │
             │ 交易指令                                       └─────────────────────────┘
             ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 资产管理机关 / 受託金融机关（信托银行）                                │
│ — MTBJ + CBJ（仅托管基础设施）                                        │
│ — 三菱 UFJ 信托 / SMTB / 瑞穗信托（全服务 + 管理）                     │
│ — 农中信托（协同组织金融）                                            │
└─┬────────────┬────────────┬───────────────┬────────────────────────┬─┘
  │            │            │               │                        │
  ▼            ▼            ▼               ▼                        ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ 全球托管人            │ │ ICJ / 表决      │
│ （股票、  ││ （现货股票  ││ 簿记         ││ （面向外币资产端的    │ │ 平台            │
│ 公司债、  ││ 的 CCP）    ││ （JGB        ││ BNY / State Street /  │ │ （表决执行）    │
│ CP、投信）││             ││ 结算）       ││ JPM / Citi）          │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────────┘└─────────────────┘
```

### 养老金委托的外币资产端

当养老金委托包含外国股票 / 债券 / 另类时：

```
养老金计划
  → 运用机关（资产管理公司）
    → 资产管理机关（MTBJ / CBJ / 大型银行信托银行）
      → 外币次级托管人（BNY / State Street / JPM / Citi Japan）
        → 外国市场的本地次级托管人
          → 本地 CSD 或 ICSD
```

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/dai-ichi-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- GPIF: 官方网站、运用形态页面、英文摘要。
- 厚生劳动省: 企业年金政策页面。
- 日本 Master Trust 信托银行: 官方网站。
- 日本 Custody 银行: 官方网站。
- 信托协会: 信托银行说明、信托财产统计。
- 企业年金联合会: 企业年金数据。
- 投资信托协会: 投资信托统计。
- FSA: 信托业金融机构一览。
- 信托协会・生命保险协会・JA共济连「企业年金（确定给付型）受托概况（令和5年3月 末现在）」（DB 资产余额 66兆238億円 / DB+厚生年金基金 合计 80兆5,006億円）: https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf
- 运营管理机关联络协议会「确定拠出年金统计资料（2024年3月 末）」（企业型DC 22兆7,880億円 / iDeCo 6兆1,883億円）: https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf

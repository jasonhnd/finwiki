---
source: banking/pension-trust-mandate-allocation-japan
source_hash: c63058e18e9a15a9
lang: zh
status: machine
fidelity: ok
title: "日本养老金信托委托分配"
translated_at: 2026-05-31T03:19:56.386Z
---

# 日本养老金信托委托分配

## Wiki route

本条目归于 [[banking/INDEX|banking index]] 之下，连接养老金端的需求与信托银行端的供给。请与机构锚点 [[trust-banks/master-trust-bank|MTBJ]] 和 [[trust-banks/custody-bank|CBJ]]、运营模式 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] 和 [[banking/custody-bank-operating-model|Custody Bank operating model]]、全景视图 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、运营比较 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 以及费用研究 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] 一并阅读。配合 [[banking/jasdec-settlement-operations|JASDEC settlement operations]] 了解结算轨道；配合 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] 了解监管层级；配合 [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]] 和 [[trust-banks/mizuho-trust-bank|Mizuho Trust]] 了解前台信托银行侧；配合 [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] 了解外币资产环节的次级托管。机构背景见 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]。

## TL;DR

日本养老金信托委托分为三个层级：GPIF（资产约 ¥250 万亿，公共养老金）、企业 DB 计划（確定給付企業年金）以及 DC 计划（確定拠出年金，含 iDeCo）。每个层级都将投资管理（運用機関）与资产管理（資産管理機関）分离——后者正是 MTBJ、CBJ 与各大型银行信托部门竞争之处。GPIF 的模式有充分公开记录：一组外部 運用機関（资产管理人）负责主动与被动委托，外加一组独立的信托银行 資産管理機関 名单（MTBJ + CBJ + 选定的全能型信托银行）负责托管与管理。企业 DB 计划复制了同样的分离结构，通常每个计划配一到两家信托银行。DC 计划增加了一个 運営管理機関 层（成员账户记录），由大型银行信托部门与专业 DC 运营商竞争。所有层级的外币资产环节均通过全球托管行作为日本次级托管接入。其结果是一个分层的委托分配体系：MTBJ 与 CBJ 锚定资产管理这一公用事业功能，而大型银行信托银行与全球托管行则在前台投资管理与 DC 运营管理侧展开竞争。

### 养老金体系三层级

| 层级 | 说明 | 法规 | 大致规模 |
|---|---|---|---|
| **GPIF**（年金積立金管理運用独立行政法人） | 公共养老金储备基金 | 厚生年金保険法 + 国民年金法 + 独立行政法人法 | AUM 约 ¥250 万亿 |
| **企业 DB**（確定給付企業年金） | 企业发起的确定给付型养老金信托 | 確定給付企業年金法（2001） | 受托资产约 ¥66.0 万亿（確定給付企業年金，令和5年3月末；DB+厚生年金基金 合计约 ¥80.5 万亿） |
| **企业 DC + iDeCo**（確定拠出年金） | 企业发起 / 个人 DC | 確定拠出年金法（2001） | 合计约 ¥29 万亿（企業型DC ¥22.8 万亿 + iDeCo ¥6.2 万亿，2024-03末）；NISA / DC 改革后快速增长 |

### 委托分配的角色分离

| 角色 | 职能 | 示例 |
|---|---|---|
| 運用機関（投资管理人） | 自主投资决策；组合构建；交易执行 | 资产管理人——Nomura AM、MUFG AM、Daiwa AM、SBI AM、日本本土外部管理人、外币资产管理人（如 Vanguard、BlackRock、State Street SSGA、Goldman Sachs AM、PIMCO 等） |
| 資産管理機関（资产管理人 / 信托银行） | 信托账户保管、NAV 计算、结算、公司行为处理、表决管理 | MTBJ、CBJ、MUFG Trust、SMTB、Mizuho Trust、Norinchukin Trust |
| 受託金融機関（受托金融机构） | 养老金信托设立、信托的受信持有人 | 同上各信托银行，以信托受托人身份 |
| 運営管理機関（DC 运营管理机构） | 成员账户记录；投资菜单提供；面向成员的界面 | 信托银行、证券公司、专门的 DC 运营商（NRK 日本レコード・キーピング・ネットワーク） |
| 次级托管行（外币资产） | 外币资产簿记、结算、外汇、外币公司行为 | BNY Mellon、State Street、JP Morgan、Citi（作为全球托管行）——经由日本信托银行接入 |

### GPIF 委托分配

GPIF（AUM 约 ¥250 万亿）运营着日本最大的单一养老金资产池，也是全球最大的养老基金。其委托分配模式在 GPIF 年度报告中有公开记录。

| GPIF 委托名额 | 分配者 | 典型参与者类型 |
|---|---|---|
| 国内股票主动 | 運用機関（外部） | Nomura AM、MUFG AM、Daiwa AM、Asset Management One、Goldman Sachs AM Japan、JPM AM Japan 等 |
| 国内股票被动 | 運用機関（外部） | Asset Management One、MUFG AM、Nomura AM、Daiwa AM、BlackRock JP、State Street GA JP 等 |
| 外国股票主动 | 運用機関（外部） | 运行全球股票策略的国际 + 日本关联资产管理人 |
| 外国股票被动 | 運用機関（外部） | BlackRock、State Street GA、Vanguard（相关情形下）、地区性资产管理人关联机构 |
| 国内债券主动 / 被动 | 運用機関（外部） | Asset Management One、MUFG AM、Nomura AM 等 |
| 外国债券主动 / 被动 | 運用機関（外部） | PIMCO、JPM AM、BlackRock 等 |
| 另类（PE / 基础设施 / 房地产） | 運用機関（外部） | 专业 PE / 基础设施 / 房地产管理人；基金中的基金结构 |
| 资产管理（托管、NAV、公司行为、表决） | 資産管理機関（外部） | MTBJ + CBJ（锚定）+ 选定的全能型信托银行 |
| 外币资产次级托管 | 次级托管链 | 经由 MTBJ / CBJ → 全球托管行（BNY / State Street / JPM / Citi） |

### 企业 DB 计划委托分配模式

| 名额 | 分配者 | 典型参与者 |
|---|---|---|
| 计划受托人（受託金融機関） | 信托银行 | MUFG Trust、SMTB、Mizuho Trust、地区性信托银行替代选项 |
| 投资管理委托 | 運用機関（外部 + 计划方指示） | 资产管理人——通常每个计划数家，有时包括外国资产管理人 |
| 资产管理 | 資産管理機関 | 计划受托人自有托管部门 或 外部（MTBJ / CBJ）——取决于计划结构 |
| 精算 / 咨询 | 信託銀行 PB / 年金コンサル | MUFG Trust、SMTB、Mizuho Trust、专业养老金顾问 |
| 给付支付运营 | 计划受托人 | 信托银行内部 |

### DC 计划委托分配模式

| 名额 | 分配者 | 典型参与者 |
|---|---|---|
| 運営管理機関（记录、成员管理） | 发起人 / 计划规则 | 信托银行（MUFG Trust、SMTB、Mizuho Trust 的 DC 部门）、证券公司（Nomura、Daiwa、SMBC Nikko）、专门运营商 NRK |
| 投资菜单提供 | 運営管理機関 | 选定的 投信 阵容 |
| 信托侧托管（资产管理） | 資産管理機関 | MTBJ / CBJ 经由 運営管理機関 选定的 投信 受託会社 |
| 菜单中每只基金的 投信受託会社 | 信托银行作为 投信受託 | MTBJ / CBJ / 大型银行信托部门 |
| 外币资产环节 | 次级托管链 | 经由信托银行 → 全球托管行 |

### 为何角色分离重要

| 解读 | 含义 |
|---|---|
| 投資判断（投资决策）位于 運用機関 | 是资产管理人——而非信托银行——挑选证券并表决（依据 議決権行使ガイドライン） |
| 資産保管（托管）位于 資産管理機関 | 信托银行以"信託口"名义持有——出现在发行人股东名册上 |
| 受託者責任（受信义务）分离 | 信托银行承担资产安全受信义务；资产管理人承担投资判断受信义务 |
| 表决权 | 依据资产管理人的 議決権行使ガイドライン 运作，由信托银行机械执行 |
| 成员余额（DC） | 持于 運営管理機関——但底层 投信 持仓作为 受託会社 位于信托银行 |

这一分离正是"MTBJ + CBJ"作为每一只 TOPIX 发行人的顶级股东出现却不能被解读为统一表决集团的结构性原因。

### 跨养老金层级竞争图

| 养老金层级 | 前台（運用機関）竞争 | 后台（資産管理機関）竞争 | 成员侧（運営管理機関）竞争 |
|---|---|---|---|
| GPIF | 名单广泛——日本资产管理人 + 外国资产管理人争夺委托份额 | MTBJ + CBJ + 选定的全能型信托银行 | 不适用（GPIF 为公共养老金，无 DC 那样的成员级管理） |
| 企业 DB | 计划受托人侧资产管理人 + 外部资产管理人 | 计划受托人内部 + MTBJ / CBJ 承担单独委托的管理 | 不适用（DB 无成员级管理记录） |
| 企业 DC | 運営管理機関 选定的 投信 阵容 → 底层 運用機関 | MTBJ / CBJ 经由 受託会社 层 | MUFG Trust / SMTB / Mizuho Trust / Nomura / Daiwa / SMBC Nikko / NRK |
| iDeCo | 同 DC | 同 DC | 同样的 DC 运营商（常为面向零售的证券公司 / 在线券商） |

### 跨信托银行养老金委托竞争

| 信托银行 | GPIF 委托侧 | 企业 DB 侧 | DC 運営管理 侧 |
|---|---|---|---|
| MTBJ | 主要 資産管理機関 | 主要 資産管理機関 | 有限（纯托管专业机构） |
| CBJ | 主要 資産管理機関 | 主要 資産管理機関 | 有限（纯托管专业机构） |
| MUFG Trust | 选用 資産管理機関 | 主要计划受托人 + 管理 | 主要 DC 運営管理機関（企业 DC） |
| SMTB | 选用 資産管理機関 | 主要计划受托人 + 管理 | 主要 DC 運営管理機関 |
| Mizuho Trust | 选用 資産管理機関 | 主要计划受托人 + 管理 | 主要 DC 運営管理機関 |
| Norinchukin Trust | 有限 | 農林系 计划受托人 + 管理 | 有限 |
| SMBC Trust | 有限（PB 情形） | 有限 | 有限 |
| Nomura Trust | 有限（集团内部） | 有限 | 与集团绑定的 DC 运营商支持 |

### 为何 MTBJ + CBJ 主导资产管理

| 驱动因素 | 效果 |
|---|---|
| NAV 计算 + 公司行为处理的规模经济 | 利好单一用途的公用事业机构，而非大型银行内部管理 |
| GPIF 历史上对专业托管的招标偏好 | 锚定 MTBJ + CBJ 为默认中标方 |
| 大型银行信托银行偏好在前台委托上单独运作 | 将资产管理这一公用事业功能留给 MTBJ + CBJ |
| MTBJ + CBJ 的成本回收型定价 | 其他机构难以压价 |
| 信託銀行 牌照 + JASDEC 参与 + 信託口 名义人逻辑 | 限制新进入者 |

## 4. 手数料・収益構造

| 养老金层级 | 前台费用模式（運用機関） | 后台费用模式（資産管理機関） | 成员侧费用模式（運営管理機関） |
|---|---|---|---|
| iDeCo | 同 DC | 同 DC | 按成员年计的运营商费用（通常每月数百日元） |

逐家银行的细粒度费用分析见 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]。

### 监管框架

| 法规 / 监管者 | 涵盖范围 |
|---|---|
| 厚生年金保険法 + 国民年金法 | 公共养老金，GPIF 设立权限 |
| 独立行政法人通則法 + GPIF 個別法 | GPIF 治理与运营框架 |
| 確定給付企業年金法 | 企业 DB 计划 |
| 確定拠出年金法 | 企业 DC + iDeCo |
| 信託業法 + 銀行法 | 养老金信托 受託 的信托银行牌照 |
| 金商法（投信受託 / 托管运营） | 投信 受託会社 / 托管标准 |
| 厚生労働省 監督指針 | 养老金计划监督 |
| 金融庁 監督指針（信託業 + 信託銀行） | 信托银行监督 |
| GPIF 投資原則 / スチュワードシップ原則 | GPIF 特定治理 / 尽责管理 |
| 個人情報保護法 + 金融分野ガイドライン | 成员数据保护 |

### 受信义务分配

| 当事方 | 受信义务范围 |
|---|---|
| 资产管理人（運用機関） | 投资判断义务：组合构建、证券选择、表决意见 |
| 信托银行（資産管理機関 / 受託金融機関） | 资产安全义务：保管、隔离、准确记录、机械化表决执行 |
| DC 運営管理機関 | 成员账户受信：准确记录、公平菜单提供、提取合规 |
| 计划发起人（企业 DB / DC） | 计划设计受信：计划规则、缴费水平、治理 |

### 会计视角

| 项目 | 确认之处 |
|---|---|
| 养老金计划信托资产 | 对信托银行为表外；对养老金计划 / GPIF 为表内 |
| 养老金信托管理费 | 信托银行损益表收入 |
| 养老金计划成员余额（DC） | 持于 運営管理機関 记录；以 投信 应收 + 现金支撑 |
| 养老金计划资金（DB） | 在计划 / 发起人处，非信托银行 |

## 6. JASDEC / 清算基础设施连接

```
┌──────────────────────────────────────────────────────────────────────┐
│ Pension plan layers                                                   │
│ - GPIF (~¥250tn)                                                       │
│ - Corporate DB (多数の plans)                                          │
│ - Corporate DC + iDeCo (多数の plans, member accounts)                 │
└────────────┬────────────────────────────────────────────────────────┬─┘
             │ mandate                                                 │ member admin (DC)
             ▼                                                         ▼
┌────────────────────────────────┐                          ┌─────────────────────────┐
│ 運用機関 (asset managers)        │                          │ DC 運営管理機関 (DC ops)  │
│ — JP-AMs + foreign-AMs           │                          │ — MUFG Trust DC,         │
│ — discretionary investment       │                          │   SMTB DC, Mizuho Trust  │
│   decision + voting opinion      │                          │   DC, Nomura, Daiwa,     │
└────────────┬───────────────────┘                          │   SMBC Nikko, NRK        │
             │ trade instruction                              └─────────────────────────┘
             ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 資産管理機関 / 受託金融機関 (trust banks)                              │
│ — MTBJ + CBJ (custody-only utility)                                   │
│ — MUFG Trust / SMTB / Mizuho Trust (full-service + admin)             │
│ — Norinchukin Trust (cooperative-finance)                             │
└─┬────────────┬────────────┬───────────────┬────────────────────────┬─┘
  │            │            │               │                        │
  ▼            ▼            ▼               ▼                        ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodians    │ │ ICJ / proxy plat│
│ (equities,││ (CCP for    ││ book-entry   ││ (BNY / State Street /│ │ (voting exec.)  │
│ corp bonds││ cash equity)││ (JGB         ││ JPM / Citi for       │ │                 │
│ CP, 投信) ││             ││ settlement)  ││ foreign-asset legs)  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────────┘└─────────────────┘
```

### 养老金委托的外币资产环节

当养老金委托包含外国股票 / 债券 / 另类资产时：

```
Pension plan
  → 運用機関 (asset manager)
    → 資産管理機関 (MTBJ / CBJ / megabank trust bank)
      → Foreign sub-custodian (BNY / State Street / JPM / Citi Japan)
        → Local sub-custodian in foreign market
          → Local CSD or ICSD
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

- GPIF: official site, operational format page, English summary.
- 厚生労働省: corporate pension policy pages.
- Master Trust Bank of Japan: official site.
- Custody Bank of Japan: official site.
- Trust Companies Association of Japan: trust-bank explanation, trust-assets statistics.
- 企業年金連合会 (Pension Fund Association): corporate-pension data.
- 投資信託協会: investment-trust statistics.
- FSA: trust-business financial institution list.
- 信託協会・生命保険協会・JA共済連「企業年金（確定給付型）の受託概況（令和5年3月末現在）」(DB 資産残高 66兆238億円 / DB+厚生年金基金 合計 80兆5,006億円): https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf
- 運営管理機関連絡協議会「確定拠出年金統計資料（2024年3月末）」(企業型DC 22兆7,880億円 / iDeCo 6兆1,883億円): https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf

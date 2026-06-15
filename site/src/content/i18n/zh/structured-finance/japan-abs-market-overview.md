---
source: structured-finance/japan-abs-market-overview
source_hash: 1fa7619ba899d505
lang: zh
status: machine
fidelity: ok
title: "日本 ABS 市场概览"
translated_at: 2026-06-15T04:09:41.185Z
---

# 日本 ABS 市场概览

## 摘要

日本的资产担保证券市场大致分为三个层次：规模极大的 JHF MBS 层（住宅金融支援机构，政府支持的优先级别）、私募 RMBS 层（由大型银行和信托银行发起的大额住房贷款资产池），以及通过 TK-GK 型 SPV 或特定目的公司发行的消费／汽车／CMBS／项目层。2008 之后，CMBS 一侧的发行急剧下降；JHF MBS 引擎持续运转，如今主导着日元计价的结构化票据。请将本页作为 [[structured-finance/INDEX]] 的路由界面，并用以把 [[structured-finance/INDEX]] 中的发起人公司页面与本领域的结构机制相连接。

## Wiki 路径

| 你想要 | 前往 |
|---|---|
| JHF MBS 引擎 | [[structured-finance/jhf-mbs-mechanics]] |
| 私募 RMBS 结构 | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS 结构 | [[structured-finance/japan-cmbs-issuance-structure]] |
| 汽车贷款 ABS | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| 消费／信用卡 ABS | [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV 载体选择 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF 与私募的利差 | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |

## 1. 市场层次图

| 层次 | 典型发行人 | 载体 | 大致数量倾向 |
|---|---|---|---|
| JHF MBS | [[policy-finance/japan-housing-finance-agency]] | JHF 信托 | 日元结构化中最大的层次 |
| 私募 RMBS | 大型银行（[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]）、信托银行 | 信托受益权 | 中等规模、偶有公募交易 |
| CMBS | 房地产发起方、大型银行 | TMK 或 TK-GK | 2008, 之后规模较小，于 2020年代增长 |
| 汽车贷款 ABS | [[card-issuers/toyota-finance]], [[leasing-firms/toyota-financial]], 本田金融, 日产信贷 | TK-GK | 重复发行人、细颗粒资产池 |
| 消费／信用卡 ABS | [[card-issuers/orico]], [[card-issuers/jaccs]], [[card-issuers/aplus]], [[card-issuers/mufg-nicos]] | TK-GK 或信托 | 循环结构常见 |
| 租赁 ABS | [[leasing-firms/mitsubishi-hc-capital]], 其他租赁公司 | 信托 | 租赁资产池中的残值风险 |
| 项目／基建 | 发起方 SPC | TMK 或 TK-GK | 利基、逐笔交易 |

## 2. 发起人格局

- **银行**: 大型银行（[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]）与主要信托银行发起大额住房贷款和企业贷款抵押品。发起人一侧请参见 [[banking/INDEX]]。
- **汽车金融公司**: 丰田金融、丰田金融服务、本田金融、日产信贷、SMBC Auto、MUFG Capital Auto Loan 将汽车贷款 ABS 作为资产负债表管理工具加以发行。
- **消费／信用卡发行人**: Aplus、Orico、JACCS、MUFG NICOS、[[card-issuers/jcb]], [[card-issuers/credit-saison]] 将信用卡应收账款 ABS 作为融资工具，与银行授信融资并用。
- **公共部门**: JHF 是占主导地位的公共信用发行人；参见 [[policy-finance/japan-housing-finance-agency]] 与 [[structured-finance/jhf-mbs-mechanics]]。
- **作为受托人的信托银行**: [[trust-banks/sumitomo-mitsui-trust]] 及其他信托银行担任信托受益权结构的受托人；信托银行的角色是结构性的，而非发起人。

## 3. 交易商／安排人格局

| 角色 | 典型机构 |
|---|---|
| 主安排人 | [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], 野村, 大和 SG（[[securities-firms/daiwa-sg]]）, SMBC 日兴 |
| 受托人 | [[trust-banks/sumitomo-mitsui-trust]], 三菱 UFJ 信托, 瑞穗信托 |
| 评级机构 | JCR, R&I（参见 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]）; 跨境交易由 S&P, Moody's, Fitch 评级 |
| 服务商 | 发起人或关联服务商; 有时为专门的特殊服务商 |

## 4. 市场总规模信号

- JHF MBS 项目按月发行，使其成为日元中迄今为止最大的单一结构化票据引擎。
- 私募 RMBS 发行是间歇性的——大型银行通常按计划方式发行大额交易，但并非按月。
- CMBS 发行量在 2008 之后急剧下降，且仅部分恢复；参见 [[structured-finance/japan-cmbs-issuance-structure]]。
- 汽车贷款 ABS 与信用卡应收账款 ABS 的发行量颇具意义，但相对于 JHF MBS 引擎而言规模较小。

## 5. 评级机构标准

- JCR 与 R&I 是结构化交易中日本国内占主导地位的评级机构。
- 两者的结构化金融方法论涵盖 ABS、RMBS、CMBS 以及证券化 SPC。
- 两者在 FSA 指定之下均相当于 NRSRO。参见 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]。
- 对于跨境交易，S&P、Moody's 与 Fitch 通常与 JCR 或 R&I 并行评级。

## 6. 2008 之后的演变

| 时期 | 模式 |
|---|---|
| 2003-2007 | CMBS 与 RMBS 发行量积累；激进的结构化；管道交易常见。 |
| 2008-2010 | CMBS 市场基本关闭；2007年份次的交易出现违约；评级下调。 |
| 2010-2015 | JHF MBS 引擎持续；私募市场低迷；仅有保守结构。 |
| 2015-2020 | 选择性复苏；大型银行发行大额私募 RMBS；汽车／消费 ABS 稳健。 |
| 2020年代 | 在物流仓库与办公单一借款人交易上的 CMBS 复苏；消费金融 ABS 活跃。 |

## 7. 为何重要

- 日本的结构化金融市场呈两极分化：一个规模极大的公共信用引擎（JHF MBS）和一个规模较小、更为保守的私募层。
- JHF MBS 层驱动了大部分日元结构化票据的供给与定价；私募交易相对其进行定价。
- 2008 之后的重置使日本拥有发达市场中最保守的结构化惯例之一——CMBS 特定的来龙去脉请参见 [[structured-finance/japan-cmbs-issuance-structure]]。
- 投资者基础以人寿保险公司（[[life-insurers/daido-life]], [[life-insurers/asahi-life]] 等）、地方银行以及寻求 JGB 加点收益的资产管理公司为主。

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## 来源

- 住宅金融支援机构, 公开 IR。
- JCR（日本格付研究所）, 结构化金融标准页面。
- R&I（格付投资信息中心）, 结构化金融方法论。
- JSDA（日本证券业协会）。
- ASF Japan（资产证券化论坛日本）。
- 大型银行 IR（MUFG, SMFG, 瑞穗 FG）。

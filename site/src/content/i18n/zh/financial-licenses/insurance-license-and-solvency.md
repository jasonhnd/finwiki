---
source: financial-licenses/insurance-license-and-solvency
source_hash: 7723f65c094783cb
lang: zh
status: machine
fidelity: ok
title: "日本保险牌照与偿付能力路径"
translated_at: 2026-06-15T03:48:21.815Z
---

# 日本保险牌照与偿付能力路径

## 概述

日本的保险监管将 **承担风险的保险公司 (risk-bearing insurers)** 与 **分销中介 (distribution intermediaries)** 相区分。生命保险公司、损害保险公司、保险控股公司、少额短期保险业者、保险代理店和保险经纪人是各自独立的公共监管类别。承保主体承担保险负债与偿付能力监督；代理店 / 经纪人路径规范招揽、媒介、客户说明及行为。

将本页用作 [[insurance/INDEX|insurance domain]] 各页的 legal-control layer。可结合 [[insurance/economic-value-based-solvency|economic value-based solvency regulation]]、[[insurance/esr-economic-value-solvency|ESR]]、[[insurance/insurance-agency-and-brokerage-japan|insurance agency and brokerage Japan]]、[[insurance/japan-life-insurance-big-four|Japan life insurance big four]]、[[insurance/japan-nonlife-big-three|Japan non-life big three]] 以及 [[life-insurers/nippon-life|Nippon Life]]、[[life-insurers/dai-ichi-life|Dai-ichi Life]]、[[non-life-insurers/tokio-marine|Tokio Marine]]、[[non-life-insurers/msad|MS&AD]]、[[non-life-insurers/sompo|Sompo]] 等保险公司实体页面阅读。

来源层级: FSA 牌照清单确定法律类别；保险业法与 FSA 监督指针提供制度用语；保险公司披露提供公司层面的资本 / ESR 事实。

## 制度图谱 (Regime Map)

| Layer | Public source of truth | What it answers | Typical page linkage |
|---|---|---|---|
| Life insurer | FSA licensed operator list for life insurance companies | Which legal entity is licensed to underwrite life insurance | [[life-insurers/nippon-life]], [[life-insurers/dai-ichi-life]], [[life-insurers/meiji-yasuda]], [[life-insurers/sumitomo-life]] |
| Non-life insurer | FSA licensed operator list for non-life insurance companies | Which legal entity is licensed to underwrite property / casualty insurance | [[non-life-insurers/tokio-marine-nichido-fire]], [[non-life-insurers/mitsui-sumitomo-insurance]], [[non-life-insurers/aioi-nissay-dowa-insurance]], [[non-life-insurers/sompo-japan-insurance]] |
| Insurance holding company | FSA insurance holding-company list | Which group is regulated at the holding-company layer | [[life-insurers/dai-ichi-life]], [[non-life-insurers/tokio-marine]], [[non-life-insurers/msad]], [[non-life-insurers/sompo]] |
| Small-amount short-term insurer | FSA registered operator list | Narrower underwriting route for small-ticket, short-term products | Specialty / embedded-insurance adjacency |
| Insurance agent / solicitor | Insurance Business Act / FSA guideline / company disclosures | Who solicits or explains insurance for an insurer | [[insurance/life-insurance-channel-mix]], bank / retailer / direct channels |
| Insurance broker | FSA insurance broker list and FSA guideline | Who mediates insurance contracts as a broker rather than acting as insurer-side agency | [[insurance/insurance-agency-and-brokerage-japan]] |
| Solvency / ESR | FSA economic-value solvency hub plus company disclosure | How insurer capital adequacy is measured and disclosed | [[insurance/economic-value-based-solvency]], [[insurance/esr-economic-value-solvency]] |

## 承保与分销 (Underwriting And Distribution)

在日本，银行柜台、在线经纪、零售商、电信集团、支付应用或旅行平台均可分销保险，而保险风险仍留在持牌保险公司的资产负债表上。

承担风险的保险公司拥有保单持有人负债、承保风险、资产负债管理、理赔支付、准备金、偿付能力边际 / ESR 监督，以及产品审批 / 精算控制。分销方可以拥有客户触点与品牌体验，但法律合同与资本风险仍可能位于另一实体。

同样的资产负债表 / 分销分离也出现在 [[banking/japan-baas-operating-models|BaaS operating models]] 以及 [[financial-licenses/payment-license-stack|Japan payment license stack]] 中，在那里指令 / 分销层与受监管的资产负债表持有者相分离。Embedded finance 与 embedded insurance 可将客户界面置于平台，而受监管的资产负债表归属于银行或保险公司。公开的产品 mapping 在已披露的情况下记录签约主体、保费收取方、理赔承担主体、牌照类别及招揽主体。

## 偿付能力路径 (Solvency Route)

日本的保险公司资本框架现在需要两种读法:

| Topic | Reading rule |
|---|---|
| Solvency margin | Legacy / statutory capital adequacy vocabulary that still appears in disclosures and regulatory materials. |
| Economic value-based solvency | FSA framework built around economic valuation, policyholder protection, risk management, and disclosure. |
| ESR | Company-level economic solvency ratio disclosed by insurers under their own reporting dates and definitions. |
| Pillar structure | FSA frames the economic-value regime around solvency regulation, internal management / supervisory review, and disclosure. |
| Source date | FSA notices, field-test materials, company disclosures, and implementation materials are date-specific. |

公司层面的资本陈述与某个具名指标和来源日期绑定。[[life-insurers/dai-ichi-life|Dai-ichi Life]] 和 [[non-life-insurers/tokio-marine|Tokio Marine]] 等上市集团发布整合报告 / 财报披露资料。[[life-insurers/nippon-life|Nippon Life]]、[[life-insurers/meiji-yasuda|Meiji Yasuda]]、[[life-insurers/sumitomo-life|Sumitomo Life]] 等相互公司通过各自的披露路径发布偿付能力、治理形态及盈余返还信息。

## 实体对照 (Entity Crosswalk)

| Question | Do not answer with | Better route |
|---|---|---|
| "Is this an insurer?" | Brand name alone | Check FSA life / non-life / small-amount short-term lists and entity disclosure. |
| "Is this an insurance group?" | Product website alone | Check whether the group has an insurance holding-company layer or only insurer subsidiaries. |
| "Can this platform sell insurance?" | App UI alone | Check agency / broker / financial-service intermediary / partner insurer structure. |
| "Is ESR high or low?" | A single ratio copied without date | Compare source date, product mix, market sensitivity, and disclosed target range. |
| "Is this a broker?" | Colloquial English "broker" wording | Check Japanese legal status: agent / solicitor / insurance broker / intermediary. |

## 与 JapanFG 的关联 (JapanFG Relevance)

本页保持牌照层面与公司页面相连接:

- 大型生命保险公司: [[life-insurers/nippon-life]]、[[life-insurers/dai-ichi-life]]、[[life-insurers/meiji-yasuda]]、[[life-insurers/sumitomo-life]]、[[life-insurers/kampo-life]]。
- 主要损害保险集团: [[non-life-insurers/tokio-marine]]、[[non-life-insurers/msad]]、[[non-life-insurers/sompo]]。
- 在营损害保险公司: [[non-life-insurers/tokio-marine-nichido-fire]]、[[non-life-insurers/mitsui-sumitomo-insurance]]、[[non-life-insurers/aioi-nissay-dowa-insurance]]、[[non-life-insurers/sompo-japan-insurance]]。
- direct / 平台保险公司: [[non-life-insurers/sony-insurance]]、[[non-life-insurers/sbi-insurance]]、[[non-life-insurers/au-insurance]]、[[life-insurers/lifenet]]、[[non-life-insurers/rakuten-general-insurance]]。
- 再保险 / 官民巨灾方案: [[non-life-insurers/toa-reinsurance]]、[[non-life-insurers/japan-earthquake-reinsurance]]、[[insurance/earthquake-insurance-public-private-scheme]]。

## 来源字段 (Source Fields)

1. 确定准确的法律实体及日语登记名。
2. FSA 持牌 / 登记业者清单。
3. 判定该页是关于承保、控股公司控制、代理分销、经纪媒介，还是资本充足性。
4. 偿付能力事实采用 FSA 经济价值偿付能力资料与公司披露日期。
5. 渠道事实采用 [[insurance/life-insurance-channel-mix|Life-insurance channel mix]] 或 [[insurance/insurance-agency-and-brokerage-japan|insurance agency and brokerage Japan]]。
6. 官民巨灾事实采用 [[insurance/earthquake-insurance-public-private-scheme|Earthquake insurance public-private scheme]] 与 [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]]。
7. 在 registry 核查为否定但未引用监管机构声明之处，采用「Not found in checked public list as of date」的措辞。

## 关联

- [[financial-licenses/INDEX]]
- [[insurance/INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[INDEX|FinWiki index]]

## 来源

- FSA: licensed / registered operator lists.
- FSA: economic value-based solvency regulation hub.
- FSA: comprehensive supervision guideline for insurance companies.
- e-Gov: Insurance Business Act.
- FSA: insurance broker supervision-guideline section.

---
source: structured-finance/infrastructure-finance-spv-japan
source_hash: dbde9f4e0267cabe
lang: zh
status: machine
fidelity: ok
title: "日本基础设施融资 SPV — PFI、PPP、收费公路、机场、通信塔"
translated_at: 2026-06-19T12:43:19.918Z
---

# 日本基础设施融资 SPV — PFI、PPP、收费公路、机场、通信塔

## TL;DR

日本的基础设施融资结合了 (1) 面向主权背书项目的 **传统公共工程融资**（中央 / 地方政府、JFC、[[financial-regulators/jbic|JBIC]]、[[financial-regulators/dbj|DBJ]]）、(2) 自 1999 PFI 法以来的 **PFI（私人融资倡议）** 结构——由私人 SPV 在长期特许或服务购买合同下交付并融资公共目的的基础设施、(3) **PPP（政府与社会资本合作）** 股权投资结构（常通过基础设施基金）、以及 (4) **基础设施资产证券化**——包括在 [[financial-regulators/japan-exchange-group|TSE]] 上的上市基础设施基金与基础设施 J-REIT 板块（产业基金投资法人、日本物流，以及面向可再生能源资产的专门 TSE 基础设施基金市场）。收费公路融资由 **NEXCO（NEXCO 东日本、中日本、西日本）** 公共法人体系主导，私人 SPV 参与有限；**机场特许**（关西国际、仙台、其他）是 2010年代〜2020年代主要的 PFI 型基础设施 SPV 市场；而 **通信塔 SPV** 是一个新兴资产类别，因为日本的运营商（NTT DoCoMo、KDDI、软银、乐天）正在考虑塔资产的分拆。

## Wiki route

本条目作为 **基础设施融资** 节点位于 [[structured-finance/INDEX|structured-finance index]] 之下。请将其与作为最相关资产类别的 [[structured-finance/project-finance-spv-japan-renewable|renewable project finance]]、作为法律结构层的 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、以及作为 J-REIT 交叉点的 [[real-estate-finance/INDEX|real-estate-finance index]] 对照阅读。系统框架：[[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]（海外基础设施栈）；作为跨境基础设施的 [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]；以及作为企业金融背景的 [[finance/INDEX|finance index]]。

## 1. PFI 框架（1999＋）

1999 年的 **PFI（私人融资倡议）法** 创设了日本政府机构（国家、都道府县、市町村）从私人 SPV 采购基础设施与公共服务交付的法律框架：
- 长期合同（通常为 15〜30 年）
- SPV 建设、拥有、运营基础设施
- 政府支付可用性或基于服务的费用
- 在特许结束时，资产移交回（BOT — Build-Operate-Transfer）或留在 SPV（BOO — Build-Own-Operate）

采用最初进展缓慢，但自 2010 年以来有稳定增长——尤其在 **机场特许**、**供水事业特许** 以及 **公共设施（学校、医院、政府办公楼）PFI** 方面。

内阁府维护 PFI 推进室，并公布关于累积 PFI 项目价值的统计。

## 2. PFI SPV 结构

```
Public-sector contracting body
        |
        |  long-term concession /
        |   service-purchase contract
        v
+---------------------------------+
|        Project Co (SPV)         |
|  - Limited-recourse vehicle     |
|  - Equity from sponsors         |
|  - Senior debt from megabank /  |
|     DBJ-led syndicate           |
+--+----------+----------+--------+
   |          |          |
Sponsors  Senior debt  Mezz / sub
 (equity)
   |          |
Const. co  Megabank lead
Operator   ([[megabanks/mufg|MUFG]] /
Mgmt co    [[megabanks/smfg|SMBC]] /
           [[megabanks/mizuho-fg|Mizuho]])
           + DBJ
           + regional banks
```

发起人通常是以下各方的联合体：
- 一家建筑公司（鹿岛、大林、清水、大成、竹中 — 用于建设阶段）
- 一家运营公司（按板块专门化 — 例如机场运营商、供水事业运营商）
- 一家综合商社（常通过基础设施基金载体）
- 一家建筑相关的租赁 / 设施管理公司

债务通常由大型银行主导，由 [[financial-regulators/dbj|DBJ]] 作为共同放贷方加入（DBJ 拥有专门的基础设施融资授权）。

## 3. 机场特许 — 旗舰 PFI 板块

2010年代出现了一波机场特许 PFI：

| 机场 | 特许状况 | 运营联合体（示例）|
|---|---|---|
| 关西国际机场（KIX）| 首个主要机场 PFI；向私人 SPV 联合体特许 | Vinci 主导的国际方 + 日本合作伙伴（ORIX 参与）|
| 仙台机场 | 第二个机场 PFI | 东急 / 丰田通商主导的联合体 |
| 高松、神户、静冈、福冈、熊本、其他 | 后续机场 PFI | 各种联合体 |

每项特许通常：
- 30〜40 年期限
- 向公共部门一次性支付
- 年度特许费
- 资本性支出承诺（航站楼升级、跑道扩建）
- 来自起降费、零售特许、停车的收入

COVID-19 是一次严峻的压力测试——起降费在 2020〜2021, 崩溃，需要放贷方 / 公共部门的通融。此后市场随入境旅游反弹而复苏。

## 4. 收费公路 — NEXCO 公共法人结构

与机场不同，**日本的收费公路由 NEXCO（日本高速公路）公共法人体系主导**：
- NEXCO 东日本、NEXCO 中日本、NEXCO 西日本是三个特殊目的的政府相关法人
- 日本道路公团的继承者（2005年的民营化改革）
- 发行政府保证债以资助收费公路建设与维护
- 通行费收入服务债务

与（例如）澳大利亚、西班牙、法国相比，日本的私人 SPV 收费公路融资有限。一些较小的收费桥与收费隧道项目作为私人特许存在，但主导性的规模在 NEXCO 体系中。

## 5. 通信塔 — 新兴资产类别

日本的通信运营商（NTT DoCoMo、KDDI、软银、乐天移动）历史上拥有自己的蜂窝塔基础设施。向 **塔资产分拆** 的全球趋势（美国：American Tower、Crown Castle、SBA；欧洲：Cellnex、INWIT）在日本较为缓慢，但正在兴起：
- 一些运营商已考虑或宣布将塔资产转让给专门的塔公司
- 塔 SPV 可针对来自运营商的长期租赁收入进行融资
- 这在结构上类似于不动产融资——将塔作为产生收益的基础设施资产

随着日本运营商整合与资本效率压力上升，请关注进一步的动向。

## 6. 基础设施 J-REIT 与基础设施基金市场

[[financial-regulators/japan-exchange-group|TSE]] 上存在两个上市基础设施渠道：

### 6a. J-REIT 基础设施风味基金
- **产业基金投资法人**（3249）— 物流 + 产业基础设施重点
- **日本产业 REIT** 与 **日本普洛斯 REIT** — 以物流为重点的 J-REIT

这些在技术上是（投资信托法框架下的）J-REIT，带有基础设施风味的资产组合。

### 6b. TSE 基础设施基金市场
- 于 2015 年作为基础设施基金载体的专门上市板块开设
- 最初聚焦于 **可再生能源资产基金**（公用事业规模的太阳能发电厂）
- 自开设以来有若干上市，但市值与 J-REIT 相比仍然有限
- 为运营中的可再生 SPV 资产提供流动的公开市场退出

基础设施基金市场仍小于最初的期望——部分原因是底层 TK / GK SPV 结构的复杂性以限制性的方式与 J-REIT 的税收穿透要求相互作用。

## 7. JBIC 与 DBJ 协调融资

| 角色 | 机构 | 功能 |
|---|---|---|
| 国内基础设施 | [[financial-regulators/dbj|DBJ]] | 对 PFI SPV 的优先债、夹层、股权参与 |
| 海外基础设施 | [[financial-regulators/jbic|JBIC]] | 对日本主导的基础设施项目的海外投资贷款、出口买方信贷 |
| 贸易与政治风险保险 | [[policy-finance/nexi|NEXI]] | 跨境基础设施交易的保险 |

[[financial-regulators/dbj|DBJ]] 的国内基础设施融资授权补充了大型银行银团的角色——DBJ 常承接商业银行单独不会匹配的长期限档与结构化债务头寸。

## 8. 面向可再生能源的 PPP — 与 structured-finance/project-finance-spv-japan-renewable 的重叠

PPP 型结构的一个子集支持 **可再生能源基础设施**——尤其是市町村规模的生物质、区域供热与小水电项目。这些与更广泛的 [[structured-finance/project-finance-spv-japan-renewable|renewable project-finance market]] 重叠，有时通过相同的 SPV 机制融资。

## 9. 反论点

- **「PFI 采用仍然有限」** — 尽管 PFI 法已有 25＋年，日本的 PFI 规模相对于英国、韩国、澳大利亚的可比市场较小；结构性因素（日本公共部门的采购文化、政府的低借款成本）削弱了私人 SPV 结构的吸引力
- **「机场特许的 COVID 压力」** — 2020〜2022 机场客流的崩溃使特许债务结构陷入实质性困境；在若干案例中需要公共部门的通融
- **「收费公路民营化未完成」** — 2005 年的 NEXCO 改革未达到完全民营化；该法人保留政府背书并受益于公共部门的融资成本，限制了私人竞争
- **「基础设施基金市场规模不足」** — TSE 基础设施基金市场未增长到 J-REIT 的规模；税收结构相互作用限制了资产资格
- **「通信塔分拆缓慢」** — 与全球同行相比，日本运营商在塔资产货币化方面缓慢；这一板块的发展可能比预期更久
- **「DBJ-MUFG 银团集中」** — 少数安排方主导基础设施 PFI 放贷市场，在一个理想上应拥有多元资本来源的板块中提出了集中度问题

## 10. 未解决的问题

- PFI 法与内阁府的推进能否将采用加速到机场与特定公共设施类别之外
- COVID 后机场特许再融资的下一波浪潮，以及将出现何种利差 / 期限
- 通信塔 SPV 能否在 2026〜2030 期间成为有意义的资产类别
- TSE 基础设施基金市场的路径——新资产类别（电池储能、氢能、EV 充电）能否获得上市规模
- [[regional-banks/japan-post-bank|Japan Post Bank]]、寿险公司与养老基金作为长期限形式基础设施债务买方的角色
- 随着 PFI 政策扩展，私人部门的收费公路或隧道特许能否出现
- 基础设施 SPV 放贷与 [[financial-regulators/boj|BOJ]] 利率正常化之间的相互作用——再融资成本动态

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/project-finance-spv-japan-renewable|renewable project finance]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing]]
- [[structured-finance/ship-financing-japan-megabank|ship financing]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[finance/INDEX|finance index]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]
- [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/dbj|DBJ]] · [[financial-regulators/jbic|JBIC]] · [[leasing-firms/orix-corp|ORIX]] · [[leasing-firms/tokyo-century|Tokyo Century]] · [[financial-regulators/japan-exchange-group|JPX]]

## Sources

- 内阁府 PFI 推进室 — https://www8.cao.go.jp/pfi/en/
- JBIC 基础设施融资披露 — https://www.jbic.go.jp/en/
- DBJ 披露 — https://www.dbj.jp/en/
- JPX 基础设施基金上市 — https://www.jpx.co.jp/english/
- 综合商社 IR（三菱商事、三井物产、住友商事 — 基础设施板块）
- 产业基金投资法人 IR

---

> [!info] 校核状态
> confidence: **likely**。PFI 框架与机场特许序列是公共记录事项。基础设施基金 / J-REIT 市场结构在 TSE 上有文档记载。通信塔 SPV 展望是前瞻性的，并被描述为新兴。具体的交易层面发起人联合体是示例性的且经过抽象化。

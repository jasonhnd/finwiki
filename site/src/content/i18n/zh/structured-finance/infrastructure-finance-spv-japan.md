---
source: structured-finance/infrastructure-finance-spv-japan
source_hash: 655c9b5a7ffa9f70
lang: zh
status: machine
fidelity: ok
title: "日本基础设施金融 SPV — PFI、PPP、收费道路、机场、电信铁塔"
translated_at: 2026-06-01T04:15:40.124Z
---
# 日本基础设施金融 SPV — PFI、PPP、收费道路、机场、电信铁塔

## TL;DR

日本基础设施融资结合了 (1) 用于主权支持项目的**传统公共工程融资**（中央 / 地方政府、JFC、[[JapanFG/jbic|JBIC]]、[[JapanFG/dbj|DBJ]]），(2) 自 1999 PFI 法以来的 **PFI（Private Finance Initiative）**结构，即由私营 SPV 在长期特许经营或服务购买合同下交付并融资公共目的基础设施，(3) **PPP（Public-Private Partnership）**股权投资结构（通常通过基础设施基金），以及 (4) **基础设施资产证券化**，包括 [[JapanFG/japan-exchange-group|TSE]] 上的上市基础设施基金和基础设施 J-REIT 板块（Industrial & Infrastructure Fund、Nippon Logistics，以及面向可再生能源资产的专门 TSE Infrastructure Fund 市场）。收费道路融资由**NEXCO（NEXCO East、Central、West）**公共公司体系主导，私营 SPV 参与有限；**机场特许经营**（关西国际、仙台等）是 2010s–2020s 期间主要的 PFI 型基础设施 SPV 市场；随着日本运营商（NTT Docomo、KDDI、SoftBank、Rakuten）考虑铁塔资产分拆，**电信铁塔 SPV** 正成为新兴资产类别。

## Wiki 路径

本条目位于 [[structured-finance/INDEX|structured-finance index]] 之下，作为**基础设施金融**节点。请对照 [[structured-finance/project-finance-spv-japan-renewable|renewable project finance]] 阅读，以了解最接近的相关资产类别；对照 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] 阅读，以了解法律结构层；并对照 [[real-estate-finance/INDEX|real-estate-finance index]] 阅读，以了解 J-REIT 交叉领域。系统框架：[[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]（海外基础设施栈）；[[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]] 用于跨境基础设施；[[finance/INDEX|finance index]] 用于公司金融语境。

## 1. PFI 框架（1999+）

1999  的 **PFI（Private Finance Initiative）法**为日本政府机构（国家、都道府县、市町村）通过私营 SPV 采购基础设施和公共服务交付建立了法律框架：
- 长期合同（通常 15–30 年）
- SPV 建设、拥有并运营基础设施
- 政府支付可用性或服务型费用
- 特许经营期结束时，资产转回（BOT — Build-Operate-Transfer）或继续留在 SPV（BOO — Build-Own-Operate）

采用最初较慢，但 2010 之后持续增长，尤其是在**机场特许经营**、**水务特许经营**和**公共设施（学校、医院、政府建筑）PFI** 领域。

内阁府设有 PFI 推进办公室，并发布累计 PFI 项目价值统计。

## 2. PFI SPV 结构

```
公共部门签约主体
        |
        |  长期特许经营 /
        |   服务购买合同
        v
+---------------------------------+
|        Project Co (SPV)         |
|  - 有限追索工具                 |
|  - 发起人出资                   |
|  - 兆型银行 /                  |
|     DBJ 牵头银团提供 senior debt|
+--+----------+----------+--------+
   |          |          |
发起人     Senior debt  Mezz / sub
 (股权)
   |          |
建设公司   兆型银行牵头
运营商     ([[JapanFG/mufg|MUFG]] /
管理公司    [[JapanFG/smfg|SMBC]] /
           [[JapanFG/mizuho-fg|Mizuho]])
           + DBJ
           + 地方银行
```

发起人通常是由以下主体组成的财团：
- 建设公司（Kajima、Obayashi、Shimizu、Taisei、Takenaka — 用于建设阶段）
- 运营公司（按行业专业化，例如机场运营商、水务运营商）
- 综合商社（通常通过基础设施基金工具）
- 与建设相关的租赁 / 设施管理公司

债务通常由兆型银行牵头，并由 [[JapanFG/dbj|DBJ]] 作为共同贷款人（DBJ 拥有专门的基础设施金融职责）。

## 3. 机场特许经营 — 旗舰 PFI 板块

2010s 出现了一波机场特许经营 PFI：

| 机场 | 特许经营状态 | 运营商财团（示例） |
|---|---|---|
| 关西国际机场 (KIX) | 首个大型机场 PFI；向私营 SPV 财团授予特许经营权 | Vinci 牵头的国际 + 日本合作方（ORIX 参与） |
| 仙台机场 | 第二个机场 PFI | Tokyu / Toyota Tsusho 牵头的财团 |
| 高松、神户、静冈、福冈、熊本等 | 后续机场 PFI | 各类财团 |

每项特许经营通常包括：
- 30–40 年期限
- 向公共部门支付前期款
- 年度特许经营费
- 资本开支承诺（航站楼升级、跑道扩建）
- 来自起降费、零售特许经营、停车的收入

COVID-19  是一次严峻压力测试：2020–2021,  期间起降费崩塌，需要贷款人 / 公共部门给予安排。随着入境旅游反弹，市场此后已经恢复。

## 4. 收费道路 — NEXCO 公共公司结构

与机场不同，**日本收费道路由 NEXCO（Nippon Expressway）公共公司体系主导**：
- NEXCO East Japan、NEXCO Central Japan、NEXCO West Japan 是三家特殊目的政府相关公司
- 是 Japan Highway Public Corporation 的后继实体（2005 私有化改革）
- 发行政府担保债券，为收费道路建设和维护融资
- 通行费收入用于偿付债务

与澳大利亚、西班牙或法国等相比，日本私营 SPV 收费道路融资有限。存在一些规模较小的收费桥梁和收费隧道私营特许经营项目，但主导规模集中在 NEXCO 体系。

## 5. 电信铁塔 — 新兴资产类别

日本电信运营商（NTT Docomo、KDDI、SoftBank、Rakuten Mobile）历史上拥有自己的蜂窝铁塔基础设施。全球**铁塔资产分拆**趋势（美国：American Tower、Crown Castle、SBA；欧洲：Cellnex、INWIT）在日本较慢，但正在出现：
- 部分运营商已考虑或宣布将铁塔资产转让给专门铁塔公司
- 铁塔 SPV 可以以运营商长期租赁收入为融资基础
- 这在结构上类似房地产金融，即把铁塔作为产生收入的基础设施资产

随着日本运营商整合和资本效率压力增加，需关注进一步活动。

## 6. Infrastructure-J-REIT 和 Infrastructure-Fund 市场

[[JapanFG/japan-exchange-group|TSE]] 上存在两个上市基础设施渠道：

### 6a. 具基础设施风格的 J-REIT 基金
- **Industrial & Infrastructure Fund Investment Corporation**（3249）— 物流 + 工业基础设施重点
- **Nippon Industrial REIT** 和 **Nippon Prologis REIT** — 物流重点 J-REIT

这些在技术上是 J-REIT（依据投资信托法框架），但资产形态带有基础设施色彩。

### 6b. TSE Infrastructure Fund 市场
- 2015  启动，作为面向基础设施基金工具的专门上市板块
- 初始重点是**可再生能源资产基金**（公用事业规模太阳能电站）
- 启动以来已有多项上市，但市值相较 J-REIT 仍然有限
- 为运营中的可再生能源 SPV 资产提供具有流动性的公开市场退出

基础设施基金市场仍小于最初预期，部分原因是底层 TK / GK SPV 结构复杂性与 J-REIT 税收穿透要求以限制性方式相互作用。

## 7. JBIC 与 DBJ 共同融资

| 角色 | 机构 | 功能 |
|---|---|---|
| 国内基础设施 | [[JapanFG/dbj|DBJ]] | 向 PFI SPV 提供 senior debt、夹层、股权参与 |
| 海外基础设施 | [[JapanFG/jbic|JBIC]] | 向日本主导的基础设施项目提供海外投资贷款、出口买方信贷 |
| 贸易和政治风险保险 | [[policy-finance/nexi|NEXI]] | 为跨境基础设施交易提供保险 |

[[JapanFG/dbj|DBJ]] 的国内基础设施金融职责补充了兆型银行银团角色。DBJ 经常承接更长期限分层和结构化债务头寸，这些仅靠商业银行通常无法匹配。

## 8. 可再生能源 PPP — 与 structured-finance/project-finance-spv-japan-renewable 重叠

一部分 PPP 型结构支持**可再生能源基础设施**，尤其是市政规模生物质能、区域供热和小水电项目。这些与更广泛的 [[structured-finance/project-finance-spv-japan-renewable|renewable project-finance market]] 重叠，有时通过相同的 SPV 机制融资。

## 9. 反向观点

- **“PFI 采用仍然有限”** — 尽管 PFI 法已有 25+ 年，日本 PFI 规模相较英国、韩国和澳大利亚等可比市场仍然较小；结构性因素（日本公共部门采购文化、政府低借款成本）降低了私营 SPV 结构的吸引力
- **“机场特许经营 COVID 压力”** — 2020–2022  机场流量崩塌使特许经营债务结构暴露于重大压力；若干案例需要公共部门给予安排
- **“收费道路私有化不完全”** — 2005 NEXCO 改革并未走到完全私有化；这些公司保留政府支持并受益于公共部门融资成本，从而限制私营竞争
- **“基础设施基金市场规模不足”** — TSE Infrastructure Fund 市场没有成长到 J-REIT 的规模；税务结构相互作用限制资产资格
- **“电信铁塔分拆缓慢”** — 与全球同业相比，日本运营商将铁塔资产货币化较慢；该板块的发展可能比预期更久
- **“DBJ-MUFG 银团集中度”** — 少数几家安排方主导基础设施 PFI 贷款市场，在一个理想上应拥有多元资本来源的领域引发集中度问题

## 10. 未决问题

- PFI 法和内阁府推动能否加快机场和特定公共设施类别以外的采用
- COVID 后下一波机场特许经营再融资，以及会出现怎样的利差 / 期限
- 电信铁塔 SPV 能否在 2026–2030 期间成为有意义的资产类别
- TSE Infrastructure Fund 市场路径，即新资产类别（电池储能、氢能、EV 充电）是否获得上市规模
- [[JapanFG/japan-post-bank|Japan Post Bank]]、寿险公司和养老基金作为长期限基础设施债务买家的作用
- 随着 PFI 政策扩展，私营部门收费道路或隧道特许经营是否出现
- 基础设施 SPV 贷款与 [[JapanFG/boj|BOJ]] 利率正常化之间的相互作用，即再融资成本动态

## 相关

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
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/dbj|DBJ]] · [[JapanFG/jbic|JBIC]] · [[JapanFG/orix-corp|ORIX]] · [[JapanFG/tokyo-century|Tokyo Century]] · [[JapanFG/japan-exchange-group|JPX]]

## 来源

- 内阁府 PFI 推进办公室 — https://www8.cao.go.jp/pfi/en/
- JBIC 基础设施金融披露 — https://www.jbic.go.jp/en/
- DBJ 披露 — https://www.dbj.jp/en/
- JPX 基础设施基金上市 — https://www.jpx.co.jp/english/
- 综合商社 IR（Mitsubishi Corp、Mitsui & Co、Sumitomo Corp — 基础设施板块）
- Industrial & Infrastructure Fund Investment Corporation IR

---

> [!info] 校核状态
> confidence: **likely**。PFI 框架和机场特许经营顺序是公开记录事项。基础设施基金 / J-REIT 市场结构记录于 TSE。电信铁塔 SPV 前景是前瞻性的，并被描述为新兴领域。具体交易层面的发起人财团为示例且已抽象化。

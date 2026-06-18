---
source: banking/ui-bank
source_hash: 05f637f0ed938df2
lang: zh
status: machine
fidelity: ok
title: "UI 银行经营概况（UI銀行 / きらぼし FG 系）"
translated_at: 2026-06-18T23:33:48.349Z
---

# UI 银行经营概况（UI銀行 / きらぼし FG 系）

## Wiki 路径

本条目位于 [[banking/INDEX|banking index]] 之下，作为 [[regional-banks/ui-bank|UI銀行 entity anchor]] 实体锚点的经营概况配套页面。请在 [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 的板块地图中、紧邻地区数字银行同业 [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[regional-banks/01-bank|01 Bank]] 来阅读本页，结合 [[regional-banks/kiraboshi-fg|東京きらぼし FG]] 与 [[regional-banks/kiraboshi-bank|きらぼし銀行]] 的母公司背景，并对照生态网络银行群体 [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]]，以进行更广泛的智能手机优先银行分销比较。请与 [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] 搭配，以获得地区集团数字化战略视角。

## TL;DR

UI銀行（UI Bank Co., Ltd.）是 [[regional-banks/kiraboshi-fg|東京きらぼし FG]] 的智能手机优先数字银行子公司，于 **2022-01-04** 作为集团的独立数字银行开业。其战略逻辑在于：母公司地区银行（[[regional-banks/kiraboshi-bank|きらぼし銀行]]）覆盖以东京为中心的分行银行业务，而 UI銀行 承接传统分行网络无法以成本效益方式服务的、面向全国的纯智能手机客户旅程。UI銀行 是与 [[banking/minna-bank-baas-model|Minna Bank]]（[[regional-banks/fukuoka-fg|Fukuoka FG]]）和 [[regional-banks/01-bank|01 Bank]]（[[megabanks/saitama-resona-bank|Saitama Resona]] / りそな集团）并列的三家有意义的地区集团数字银行之一，各自有着明确不同的架构解读：みんなの銀行 专注于 BaaS 合作方渠道分销，01 銀行 聚焦于 りそな集团交叉销售，UI銀行 则强调具备 API 连接性的智能手机优先生活伙伴金融 UX。存款余额自 2022 开业以来稳步增长，但仍低于一万亿日元（截至 2025-03-31 约 ¥0.7 万亿 / ¥6,952億），比同日的生态银行同业（[[banking/rakuten-bank|Rakuten Bank]] ¥11.5万亿 / [[banking/paypay-bank|PayPay Bank]] ¥1.9万亿 / [[banking/au-jibun-bank|au Jibun]] ¥4万亿以上）小一个数量级。其战术定位强调通过单一移动优先 UX 层实现银行、储蓄、支付与生活方式服务的融合。

## 1. 身份与集团内定位

| 项目 | 读法 |
|---|---|
| 法定名称 | 株式会社UI銀行 |
| 英文名称 | UI Bank Co., Ltd. |
| 开业 | 2022-01-04 |
| 银行牌照类别 | 普通银行（银行法下的普通银行），归入 FSA「その他の銀行」 |
| 母公司 | [[regional-banks/kiraboshi-fg|東京きらぼし FG]]（100%） |
| 姊妹银行 | [[regional-banks/kiraboshi-bank|きらぼし銀行]] — 母集团的主要地区银行（以东京为中心） |
| 总部 | 东京 |
| 渠道架构 | 智能手机 App + 网页；无实体分行 |
| 主管监管机构 | 金融厅（FSA） |

### 为何要与 きらぼし銀行 分设牌照

1. **成本基础分离。** 新牌照可在云原生核心银行系统上构建，而无需继承 きらぼし銀行 的传统 IT 与分行间接成本基础。
2. **客户群体专门化。** UI銀行 可端到端地为智能手机优先用户设计，而无需传统分行加 App 双模式银行的设计妥协。
3. **监管清晰度。** 独立牌照允许对资本、风险和 BaaS 合作披露进行明确区分，而当数字业务被捆绑在地区银行的板块报告内时，这一点更难做到。

### 集团结构

```
東京きらぼし FG (TSE Prime, 7173)
  ├── きらぼし銀行 (regional bank, Tokyo-centred branch network)
  ├── UI Bank (this entry — nationwide smartphone-first digital bank)
  └── Other group financial subsidiaries
```

### 账户、存款、支付

| 产品 | 角色 |
|---|---|
| 日元普通存款 | 核心账户，在 App 内端到端开立 |
| 日元定期存款 | 为吸引主要存款而设定的促销利率 |
| 转账 / 振込 | UI銀行 内部及经由全银系统的外部转账两者 |
| 借记卡 | 与账户联动的 UI銀行 品牌借记卡 |
| 合作方连接 | 通过 API 连接外部电子决済等代行業者（支付中介），以及集团服务联动（如 ララ Pay プラス、面向 UI プラス 档位的 きらぼし銀行 账户联动） |

### 贷款与信用

UI銀行 以存款先行方式启动（最初在 2022 开业时以存款为重心），其后逐步建立了零售贷款菜单：智能手机贷款（UI プラン）、自由贷款、汽车贷款、教育贷款、装修贷款、医生贷款、整合贷款、透支额度（UI サポート / 当座貸越）以及住房贷款——即一套面向消费者 / 零售的贷款，而非巨型银行规模的企业贷款特许经营。具体产品菜单会演变；请参阅 UI銀行 当前产品页以了解在售菜单。

### 智能手机优先 UX

UX 架构明确地将银行账户、存款、支付、转账与生活パートナー（生活伙伴）功能捆绑进单一 App。「対面・非対面のハイブリッド」的框架意味着 UI銀行 在与 きらぼし銀行 企业客户或外部联盟合作时可整合到店内接触点，但默认界面为仅限移动端。^[extracted]

### UI銀行 竞争的领域

| 轴 | 定位 |
|---|---|
| 智能手机优先的存款增长 | 活跃；开户流程针对 App 内引导进行了优化 |
| 与 きらぼし銀行 企业客户的交叉销售 | 通过集团联动可行 — 工资代发方案、企业薪资、合作企业联动 |
| 生活方式 / 合作服务整合 | 相对于以生态点数为主导的同业的差异化 UX 轴 |
| 地理覆盖 | 经由移动端覆盖全国（相对于 きらぼし銀行 的东京聚焦） |

### 三家银行的地区数字化比较

| 维度 | UI銀行（本条目） | [[banking/minna-bank-baas-model|Minna Bank]] | [[regional-banks/01-bank|01 Bank]] |
|---|---|---|---|
| 母集团 | [[regional-banks/kiraboshi-fg|東京きらぼし FG]] | [[regional-banks/fukuoka-fg|Fukuoka FG]] | [[megabanks/resona-hd|Resona HD]] / [[megabanks/saitama-resona-bank|Saitama Resona]] |
| 开业 | 2022-01 | 2021-05 | 较晚推出 |
| 渠道架构 | 智能手机 + 网页 | BaaS 合作方旅程 + 直接 App | りそな集团交叉销售 + 直接 App |
| 战略轴 | 智能手机优先的生活伙伴银行 + API | 全 BaaS — 合作品牌掌握客户旅程 | 集团客户的数字化附属 |
| BaaS 深度 | 较轻 | 三者中最重 | 较轻 |
| 直接 UX 成熟度 | 增长中 | 强大的 App UX | 增长中 |

## 4. KPI 与特许经营形态

UI銀行 通过 きらぼし FG IR 资料及自身披露刊物公布选择性的 KPI 更新；时点存款余额与账户数在其中出现。推出后最初数年的特许经营模式为：

| 指标 | 模式 |
|---|---|
| 账户数 | 截至 2023-03-31 约 73,000 个账户；增长中但比生态银行同业低一个数量级（且远低于 2022 开业时所提出的约 2.7-3.0百万、3年目标下限） |
| 存款余额 | 截至 2025-03-31 约 ¥6,952億（≈¥0.7万亿）— 低于一万亿日元，远低于 [[banking/rakuten-bank|Rakuten Bank]]（¥11.5万亿）或 [[banking/paypay-bank|PayPay Bank]]（¥1.9万亿） |
| 贷款账簿 | 以零售 / 消费贷款为重心（智能手机贷款，自由 / 汽车 / 住房贷款）；绝对额上较温和 |
| 资本 | 高于银行法最低要求；作为一家年轻的数字银行，资产负债表的业务风险相对较低 |

## 5. 监管与政策边界

| 层级 | 法令 / 监管机构 | 含义 |
|---|---|---|
| 银行监督 | 银行法 + 金融厅 监督指针 | 适用于纯数字银行的标准普通银行监督 |
| 开放银行 API | 2017 银行法 改正 | API 提供义务；UI銀行 的连接性叙事利用了这一制度 |
| 存款保险 | 预金保险机构 | 标准日元存款保险保障 |
| 网络安全 / IT 韧性 | FSA IT 统合的监督指针 + 网络安全报告 | 纯数字银行面临更高的 IT 韧性预期 |
| AML / CFT | 金融厅 + FATF 第 4 次审查 | FATF 审查后，线上引导的 eKYC 合规要求提高 |
| 母行合并 | 银行法 + 金融商品取引法 — 类 りそな 控股规则 | 通过 きらぼし FG 进行合并监督 |

## 相关

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/japan-baas-operating-models]]
- [[banking/sony-bank]] · [[banking/daiwa-next-bank]] · [[banking/gmo-aozora-net-bank]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[regional-banks/ui-bank]]
- [[regional-banks/kiraboshi-fg]]
- [[regional-banks/kiraboshi-bank]]
- [[regional-banks/01-bank]]
- [[financial-licenses/bank-license-and-baas-boundary]]

## 来源

- UI銀行 公司 / 产品网站（https://www.uibank.co.jp/）。
- UI銀行 公司信息页（https://www.uibank.co.jp/info/）。
- UI銀行 UI プラス / 服务页 — 贷款菜单（UI プラン 智能手机贷款，自由 / 汽车 / 住房 / 医生贷款，UI サポート 透支），API 连接的电子決済等代行業者联动，定期存款（https://www.uibank.co.jp/service/uiplus/）。
- Wikipedia「UI銀行」— 存款余额 6,952億円（2025-03-31），账户数 73,000 （2023-03-31），开业，3年目标（https://ja.wikipedia.org/wiki/UI銀行，2026-05-29 确认）。
- 银行存款余额排名（アルビノ）— UI銀行 6,865億円 / PayPay銀行 1兆9,122億円 / 楽天銀行 11兆4,763億円，均为 2025-03 （https://www.albino.co.jp/bank-deposit-balance-ranking/）。
- 东京 Kiraboshi Financial Group 公司 / IR 网站（https://www.tokyo-kiraboshifg.co.jp/）。
- FSA 持牌银行一览（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。

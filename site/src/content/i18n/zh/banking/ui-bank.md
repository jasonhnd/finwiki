---
source: banking/ui-bank
source_hash: 27571fd80b07055e
lang: zh
status: machine
fidelity: needs_review
title: "UI 银行运营概况（UI銀行 / 闪耀星 FG 系）"
translated_at: 2026-05-31T03:19:56.402Z
---

# UI 银行运营概况（UI銀行 / 闪耀星 FG 系）

## Wiki route

本条目归于 [[banking/INDEX|banking index]] 之下，作为 [[JapanFG/ui-bank|UI銀行 entity anchor]] 实体锚点的运营概况伴随页。请在 [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 的板块图谱内、紧邻区域数字银行同侪 [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[JapanFG/01-bank|01 Bank]]、配合 [[JapanFG/kiraboshi-fg|東京きらぼし FG]] 和 [[JapanFG/kiraboshi-bank|きらぼし銀行]] 的母公司背景，并对照生态系统网络银行群组 [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] 进行更广泛的智能手机优先银行分发比较来阅读。请与 [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]]（区域集团数字战略视角）配对阅读。

## TL;DR

UI銀行（UI Bank Co., Ltd.）是 [[JapanFG/kiraboshi-fg|東京きらぼし FG]] 的智能手机优先数字银行子公司，于 **2022-01-04** 作为集团独立数字银行开业。其战略逻辑是：母体区域银行（[[JapanFG/kiraboshi-bank|きらぼし銀行]]）覆盖以东京为中心的分行银行业务，而 UI 银行承接传统分行网络无法以成本效益方式服务的全国性、仅限智能手机的客户旅程。UI 银行是三家有意义的区域集团数字银行之一，与 [[banking/minna-bank-baas-model|Minna Bank]]（[[JapanFG/fukuoka-fg|Fukuoka FG]]）和 [[JapanFG/01-bank|01 Bank]]（[[JapanFG/saitama-resona-bank|Saitama Resona]]/里索纳集团）并列，各具独特的架构解读：Minna Bank 专注于 BaaS 合作渠道分发，01 Bank 聚焦里索纳集团交叉销售，UI 银行强调具备 API 连接性的智能手机优先生活伙伴金融 UX。存款余额自 2022 开业以来稳步增长，但仍低于万亿日元（截至 2025-03-31约为 ¥0.7 万亿 / ¥6,952億），比生态系统银行同侪小一个数量级（同期 [[banking/rakuten-bank|Rakuten Bank]] ¥11.5万亿 / [[banking/paypay-bank|PayPay Bank]] ¥1.9万亿 / [[banking/au-jibun-bank|au Jibun]] ¥4万亿+）。战术定位强调通过单一移动优先 UX 层融合银行、储蓄、支付和生活方式服务。

## 1. 身份与集团地位

| 项目 | 读法 |
|---|---|
| 法人名称 | 株式会社UI銀行 |
| 英文名称 | UI Bank Co., Ltd. |
| 开业 | 2022-01-04 |
| 银行牌照类别 | 普通银行（普通銀行，依据银行法 銀行法），归于 FSA"其他银行"（その他の銀行）类别 |
| 母公司 | [[JapanFG/kiraboshi-fg|東京きらぼし FG]]（100%） |
| 姊妹银行 | [[JapanFG/kiraboshi-bank|きらぼし銀行]] —— 母集团的主要区域银行（以东京为中心） |
| 总部 | 东京 |
| 渠道架构 | 智能手机 App + 网页；无实体分行 |
| 主要监管机构 | 金融厅（金融庁 / FSA） |

### 为何与闪耀星银行（きらぼし銀行）使用独立牌照

1. **成本基础分离。** 新牌照可建立在云原生核心银行之上，而不继承闪耀星银行的传统 IT 和分行间接成本基础。
2. **客户板块专业化。** UI 银行可端到端为智能手机优先用户设计，无需传统分行兼 App 双模式银行的设计妥协。
3. **监管清晰度。** 独立牌照允许独立的资本、风险及 BaaS 合作披露，而当数字业务捆绑在区域银行的板块报告内时这更难做到。

### 集团结构

```
東京きらぼし FG (TSE Prime, 7173)
  ├── きらぼし銀行 (区域银行，以东京为中心的分行网络)
  ├── UI Bank (本条目 —— 全国性智能手机优先数字银行)
  └── 其他集团金融子公司
```

### 账户、存款、支付

| 产品 | 角色 |
|---|---|
| 日元普通存款 | 核心账户，端到端在 App 内开立 |
| 日元定期存款 | 推广利率，定位为吸引主要存款 |
| 转账 / 振込 | 经由全银系统（全銀システム）进行 UI 银行内部及外部转账 |
| 借记卡 | 与账户关联的 UI 银行品牌借记卡 |
| 合作连接 | 经由 API 与外部电子结算等代行业者（電子決済等代行業者，支付中介）连接，外加集团服务联动（如 Lala Pay Plus、UI Plus 等级的闪耀星银行账户联动） |

### 贷款与信贷

UI 银行以存款优先方式启动（2022 开业时初期聚焦存款），此后构建了零售贷款菜单：智能手机贷款（UI Plan）、自由贷款、汽车贷款、教育贷款、装修贷款、医生贷款、整合贷款、透支便利（UI Support / 当座贷越 当座貸越）及住房贷款——即消费/零售贷款组合，而非巨型银行规模的企业贷款特许经营。具体产品菜单不断演变；活跃菜单请参阅 UI 银行当前产品页面。

### 智能手机优先 UX

UX 架构明确将银行账户、存款、支付、转账及生活伙伴（生活パートナー）功能捆绑进单一 App。"对面・非对面混合"（対面・非対面のハイブリッド）的框定意味着 UI 银行在与闪耀星银行企业客户或外部联盟合作时可整合至店内触点，但默认界面仅限移动端。^[extracted]

### UI 银行的竞争领域

| 轴 | 定位 |
|---|---|
| 智能手机优先存款增长 | 活跃；开户流程为 App 内入驻优化 |
| 与闪耀星银行企业客户交叉销售 | 经由集团联动可行——雇主代发薪计划、企业薪资、合作业务联动 |
| 生活方式/合作服务整合 | 相对以生态系统积分为主导的同侪的差异化 UX 轴 |
| 地理覆盖 | 经由移动端覆盖全国（对闪耀星银行的东京聚焦） |

### 三银行区域数字比较

| 维度 | UI 银行（本条目） | [[banking/minna-bank-baas-model|Minna Bank]] | [[JapanFG/01-bank|01 Bank]] |
|---|---|---|---|
| 母集团 | [[JapanFG/kiraboshi-fg|東京きらぼし FG]] | [[JapanFG/fukuoka-fg|Fukuoka FG]] | [[JapanFG/resona-hd|Resona HD]] / [[JapanFG/saitama-resona-bank|Saitama Resona]] |
| 开业 | 2022-01 | 2021-05 | 较晚推出 |
| 渠道架构 | 智能手机 + 网页 | BaaS 合作旅程 + 直接 App | 里索纳集团交叉销售 + 直接 App |
| 战略轴 | 智能手机优先生活伙伴银行 + API | 完整 BaaS——合作品牌拥有客户旅程 | 集团客户数字附属 |
| BaaS 深度 | 较轻 | 三者中最重 | 较轻 |
| 直接 UX 成熟度 | 增长中 | 强大 App UX | 增长中 |

## 4. KPI 与特许经营形态

UI 银行通过闪耀星 FG IR 材料及自身披露出版物发布选择性 KPI 更新；时点存款余额和账户数出现于此处。开业后早期年份的特许经营模式为：

| 指标 | 模式 |
|---|---|
| 账户数 | 截至 2023-03-31约 73,000 个账户；增长中但比生态系统银行同侪低一个数量级（且远低于 2022 开业时提出的约 2.7-3.0百万的 3年目标底线） |
| 存款余额 | 截至 2025-03-31约 ¥6,952億（≈¥0.7万亿）——低于万亿日元，远低于 [[banking/rakuten-bank|Rakuten Bank]]（¥11.5万亿）或 [[banking/paypay-bank|PayPay Bank]]（¥1.9万亿） |
| 贷款账簿 | 零售/消费贷款聚焦（智能手机贷款、自由/汽车/住房贷款）；绝对值适中 |
| 资本 | 高于银行法最低要求；对一家年轻数字银行而言业务风险相对较低的资产负债表 |

## 5. 监管与政策边界

| 层级 | 法规/监管机构 | 含义 |
|---|---|---|
| 银行监督 | 银行法（銀行法）+ 金融厅监督指针（監督指針） | 适用于纯数字银行的标准普通银行监督 |
| 开放银行 API | 2017 银行法修订（銀行法 改正） | API 提供义务；UI 银行的连接性故事利用此制度 |
| 存款保险 | 存款保险机构（預金保険機構） | 标准日元存款保险覆盖 |
| 网络安全/IT 韧性 | FSA IT 统合监督指针（IT 統合的監督指針）+ 网络安全报告（サイバーセキュリティ報告） | 纯数字银行面临更高的 IT 韧性期望 |
| AML/CFT | 金融厅（金融庁）+ FATF 第 4 次审查（第 4 次審査） | FATF 审查后线上入驻 eKYC 合规要求提高 |
| 母行并表 | 银行法（銀行法）+ 金融商品交易法（金融商品取引法）——类里索纳控股规则 | 经由闪耀星 FG 的并表监督 |

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
- [[JapanFG/ui-bank]]
- [[JapanFG/kiraboshi-fg]]
- [[JapanFG/kiraboshi-bank]]
- [[JapanFG/01-bank]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]

## 来源

- UI 银行企业/产品网站（https://www.uibank.co.jp/）。
- UI 银行企业信息页面（https://www.uibank.co.jp/info/）。
- UI 银行 UI Plus / 服务页面——贷款菜单（UI Plan 智能手机贷款、自由/汽车/住房/医生贷款、UI Support 透支）、API 连接的电子结算等代行业者（電子決済等代行業者）联动、定期存款（https://www.uibank.co.jp/service/uiplus/）。
- 维基百科「UI銀行」——存款余额 6,952億円（2025-03-31）、账户数 73,000 （2023-03-31）、开业、3年目标（https://ja.wikipedia.org/wiki/UI銀行，2026-05-29 确认）。
- 银行存款余额排名（Albino/アルビノ）——UI銀行 6,865億円 / PayPay銀行 1兆9,122億円 / 楽天銀行 11兆4,763億円，均为 2025-03 （https://www.albino.co.jp/bank-deposit-balance-ranking/）。
- 东京闪耀星金融集团（Tokyo Kiraboshi Financial Group）企业/IR 网站（https://www.tokyo-kiraboshifg.co.jp/）。
- FSA 持牌银行名单（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。

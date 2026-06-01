---
source: banking/ui-bank
source_hash: 27571fd80b07055e
lang: zh
status: machine
fidelity: ok
title: "UI Bank 运营概况（UI Bank / 东京Kiraboshi FG集团）"
translated_at: 2026-05-31T03:19:56.402Z
---

# UI Bank 运营概况（UI Bank / 东京Kiraboshi FG集团）

## Wiki route

本条位于 [[banking/INDEX|banking index]]，是 [[JapanFG/ui-bank|UI Bank entity anchor]] 的运营概况配套页。可结合 [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 阅读，并与区域数字银行同业 [[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[JapanFG/01-bank|01 Bank]] 对照；也可结合母集团 [[JapanFG/kiraboshi-fg|Tokyo Kiraboshi FG]]、[[JapanFG/kiraboshi-bank|Kiraboshi Bank]]，以及生态系网络银行 [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/sony-bank|Sony Bank]]，理解更广泛的智能手机优先银行分发模式。区域集团数字化战略层面可配合 [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] 阅读。

## TL;DR

UI Bank（UI Bank Co., Ltd.）是 [[JapanFG/kiraboshi-fg|Tokyo Kiraboshi FG]] 旗下以智能手机为核心入口的数字银行子公司，于 **2022-01-04** 开业，作为集团的独立数字银行运作。其战略逻辑是：母体区域银行 [[JapanFG/kiraboshi-bank|Kiraboshi Bank]] 负责以东京为中心的网点银行业务，而 UI Bank 则承接传统网点网络无法高效覆盖的全国性、纯手机客户旅程。

UI Bank 与 [[banking/minna-bank-baas-model|Minna Bank]]（[[JapanFG/fukuoka-fg|Fukuoka FG]]）及 [[JapanFG/01-bank|01 Bank]]（[[JapanFG/saitama-resona-bank|Saitama Resona]] / Resona 集团）并列，是少数具有代表性的区域集团数字银行。三者架构不同：Minna Bank 偏重 BaaS 合作方渠道分发，01 Bank 偏重 Resona 集团内部交叉销售，UI Bank 则强调具备 API 连接能力的、以智能手机为中心的生活伙伴型金融 UX。

自 2022 年开业以来，UI Bank 存款余额稳步增长，但截至 2025-03-31 仍低于 1 万亿日元（约 `0.7 trillion / 6,952億円`），较生态系网络银行同业明显更小（同日 [[banking/rakuten-bank|Rakuten Bank]] `11.5tn` / [[banking/paypay-bank|PayPay Bank]] `1.9tn` / [[banking/au-jibun-bank|au Jibun Bank]] `4tn+`）。其战术定位强调通过单一移动优先 UX 层整合银行、储蓄、支付与生活服务。

## 1. 身份与集团定位

| 项目 | 内容 |
|---|---|
| 法定名称 | UI Bank Co., Ltd. |
| 英文名 | UI Bank Co., Ltd. |
| 开业时间 | 2022-01-04 |
| 银行牌照类别 | 《银行法》下的普通银行（ordinary bank），在 FSA 分类中归入“other banks” |
| 母公司 | [[JapanFG/kiraboshi-fg|Tokyo Kiraboshi FG]]（100%） |
| 姐妹银行 | [[JapanFG/kiraboshi-bank|Kiraboshi Bank]] - 集团主要区域银行（以东京为中心） |
| 总部 | 东京 |
| 渠道结构 | 智能手机 App + Web；无实体网点 |
| 主要监管机构 | 金融厅 / FSA |

### 为什么不放在 Kiraboshi Bank 牌照内，而是单独持牌

1. **成本基础分离。** 新牌照可以基于云原生核心银行系统建设，而无需继承 Kiraboshi Bank 既有 IT 和网点成本基础。
2. **客户分层专业化。** UI Bank 可以围绕手机优先用户进行端到端设计，不必接受传统网点银行 + App 双模式银行的设计妥协。
3. **监管清晰度。** 独立牌照更便于单独披露资本、风险与 BaaS 合作情况；若数字业务打包在区域银行分部口径内，则更难看清。

### 集团结构

```text
Tokyo Kiraboshi FG (TSE Prime, 7173)
  |-- Kiraboshi Bank（区域银行，东京中心网点网络）
  |-- UI Bank（本条 - 全国性、智能手机优先数字银行）
  `-- 其他集团金融子公司
```

### 账户、存款、支付

| 产品 | 作用 |
|---|---|
| 日元活期存款 | 核心账户，可在 App 内端到端开户 |
| 日元定期存款 | 以促销利率吸引主存款 |
| 转账 / 汇款 | 支持 UI Bank 内部转账及通过全银系统进行的外部转账 |
| 借记卡 | 与账户绑定的 UI Bank 品牌借记卡 |
| 合作连接 | 通过 API 连接外部电子支付中介，并与集团服务联动（例如 Lala Pay Plus、面向 UI Plus 等级的 Kiraboshi Bank 账户联动） |

### 贷款与授信

UI Bank 开业初期以存款业务为先，之后逐步扩展零售贷款产品，包括手机贷款（UI Plan）、自由贷款、汽车贷款、教育贷款、装修贷款、医生贷款、债务整合贷款、透支额度（UI Support / overdraft）以及住房贷款。也就是说，它提供的是消费者 / 零售贷款组合，而非大型银行级别的对公贷款体系。具体产品菜单会变化，应以 UI Bank 当前产品页为准。

### 智能手机优先 UX

其 UX 架构明确将银行账户、存款、支付、转账与“生活伙伴”功能打包进单一 App。“线下 / 远程混合”的表述意味着，若与 Kiraboshi Bank 的企业客户或外部联盟合作，UI Bank 可接入线下触点；但默认交互界面仍是纯移动端。 ^[extracted]

### UI Bank 的竞争位置

| 维度 | 定位 |
|---|---|
| 手机优先存款增长 | 积极推进；开户流程针对 App 内引导做了优化 |
| 与 Kiraboshi Bank 企业客户交叉销售 | 可通过集团联动实现，如工资代发、企业薪资、合作商户连接 |
| 生活 / 合作服务整合 | 相对积分驱动型生态银行同业，这是差异化 UX 维度 |
| 地理覆盖 | 通过移动端覆盖全国（相对 Kiraboshi Bank 的东京聚焦） |

### 三家区域数字银行对比

| 维度 | UI Bank（本条） | [[banking/minna-bank-baas-model|Minna Bank]] | [[JapanFG/01-bank|01 Bank]] |
|---|---|---|---|
| 母集团 | [[JapanFG/kiraboshi-fg|Tokyo Kiraboshi FG]] | [[JapanFG/fukuoka-fg|Fukuoka FG]] | [[JapanFG/resona-hd|Resona HD]] / [[JapanFG/saitama-resona-bank|Saitama Resona]] |
| 开业 | 2022-01 | 2021-05 | 较晚推出 |
| 渠道结构 | 智能手机 + Web | BaaS 合作方旅程 + 自有 App | Resona 集团交叉销售 + 自有 App |
| 战略主轴 | 手机优先生活伙伴型银行 + API | 完整 BaaS - 由合作品牌拥有客户旅程 | 集团客户数字补充平台 |
| BaaS 深度 | 较轻 | 三者中最深 | 较轻 |
| 直接 UX 成熟度 | 持续提升 | App UX 较强 | 持续提升 |

## 4. KPI 与 franchise 形态

UI Bank 通过 Kiraboshi FG 的 IR 资料及自身披露材料发布选择性的 KPI 更新；时点性存款余额和账户数可在其中看到。开业初期至今的 franchise 特征大致如下：

| 指标 | 形态 |
|---|---|
| 账户数 | 截至 2023-03-31 约 `73,000` 户；仍在增长，但较生态系网络银行同业小一个数量级，也远低于 2022 年开业时提出的 3 年约 `2.7-3.0m` 目标 |
| 存款余额 | 截至 2025-03-31 约 `6,952億円`（`0.7tn`），仍低于 1 万亿日元，明显小于 [[banking/rakuten-bank|Rakuten Bank]]（`11.5tn`）或 [[banking/paypay-bank|PayPay Bank]]（`1.9tn`） |
| 贷款账簿 | 以零售 / 消费贷款为主（手机贷款、自由贷款、汽车贷款、住房贷款等）；绝对规模不大 |
| 资本 | 高于《银行法》最低要求；作为年轻数字银行，资产负债表业务风险相对较低 |

## 5. 监管与制度边界

| 层级 | 法规 / 监管机构 | 含义 |
|---|---|---|
| 银行监管 | 《银行法》 + 金融厅监管指引 | 对纯数字银行适用标准普通银行监管 |
| 开放银行 API | 2017 年《银行法》修订 | 存在 API 提供义务；UI Bank 的连接故事即建立在这一制度基础上 |
| 存款保险 | 存款保险机构 | 适用标准日元存款保险保障 |
| 网络安全 / IT 韧性 | 金融厅 IT 综合监管指引 + 网络安全报告要求 | 纯数字银行面临更高 IT 韧性要求 |
| AML / CFT | 金融厅 + FATF 第四轮审查 | FATF 审查后，线上开户 eKYC 合规要求更高 |
| 母行并表监管 | 《银行法》 + 类似《金融商品交易法》的控股监管框架 | 通过 Kiraboshi FG 进行并表监管 |

## Related

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/japan-baas-operating-models]]
- [[banking/sony-bank]]
- [[banking/daiwa-next-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/rakuten-bank]]
- [[banking/paypay-bank]]
- [[banking/au-jibun-bank]]
- [[JapanFG/ui-bank]]
- [[JapanFG/kiraboshi-fg]]
- [[JapanFG/kiraboshi-bank]]
- [[JapanFG/01-bank]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]

## Sources

- UI Bank corporate / product site (https://www.uibank.co.jp/).
- UI Bank corporate-information page (https://www.uibank.co.jp/info/).
- UI Bank UI Plus / service page - 贷款菜单（UI Plan smartphone loan、free / auto / housing / doctor loans、UI Support overdraft）、API-connected electronic-payment-intermediary linkage、time deposits (https://www.uibank.co.jp/service/uiplus/).
- Wikipedia "UI Bank" - deposit balance `6,952億円`（2025-03-31）、account count `73,000`（2023-03-31）、opening、3-year targets (https://ja.wikipedia.org/wiki/UI銀行 accessed 2026-05-29).
- Bank deposit-balance ranking (Albino) - UI Bank `6,865億円` / PayPay Bank `1兆,122億円` / Rakuten Bank `11兆,763億円`，均为 2025-03 时点 (https://www.albino.co.jp/bank-deposit-balance-ranking/).
- Tokyo Kiraboshi Financial Group corporate / IR site (https://www.tokyo-kiraboshifg.co.jp/).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).

---
source: banking/regional-bank-api-digital-partnership-route
source_hash: 3c92735c9cbf1e8e
lang: zh
status: machine
fidelity: ok
title: "日本地方银行 API 与数字合作路线"
translated_at: 2026-05-31T03:19:56.450Z
---

# 日本地方银行 API 与数字合作路线

## 概述

日本的地方银行数字合作不只是"一个银行 App"。它分为电子结算代理 API 合约、共享 API 平台、银行自有 App、会计/资金管理集成、BaaS 式银行合作以及账户直连结算通道。

本页与 [[payments/japan-bank-api-payment-agency-route|bank API route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident controls]]、[[banking/baas-japan-landscape|BaaS Japan landscape]]、[[banking/regional-bank-consolidation-pattern|regional bank consolidation]]、[[payments/account-to-account-payment-japan|account-to-account payments]]、[[financial-licenses/INDEX|legal / financial licenses]] 配合使用。

## 路线图

| 路线 | 银行方主体 | 合作方类型 | API / 服务功能 | 监管挂钩 |
|---|---|---|---|---|
| 已注册电子结算代理 API | 地方银行 | 会计、PFM、资金管理、结算、现金管理 App | 视范围而定的余额、交易历史、转账指令。 | FSA 电子结算代理注册及银行 API 合约披露。 |
| 共享地方 API 平台 | 地方银行联盟 / 系统子公司 | 通用 API 平台与系统供应商 | 面向多家银行的同规格或共享连接层。 | JBA 开放 API 合约 / 原则加各银行自有政策。 |
| 官方地方银行 App | 地方银行与 App 运营方 | 银行 App、集团金融科技子公司、地方服务平台 | 账户查看、转账、积分、借记、储蓄、本地商业功能。 | 银行牌照、外包、电子结算代理 / 银行代理路线（如适用）。 |
| BaaS / 嵌入式服务 | 银行或数字银行合作方 | 非银行平台或金融科技 | 嵌入其他服务的账户 / 结算 / 身份 / 余额 UX。 | 银行牌照加 API / 代理 / 中介合约。 |
| 账户直连结算 | 地方银行加结算网络 | Bank Pay / J-Debit / 账户直连商户路线 | 从银行账户向商户付款。 | [[payments/account-to-account-payment-japan|A2A route]] 与 [[payments/merchant-bank-pay-account-direct-acquiring|merchant acquiring controls]]。 |

## 地方案例

| 案例 | 公开相关性 |
|---|---|
| [[regional-banks/yokohama-bank|Yokohama Bank]] API 披露 | 公开列出电子结算代理 API 合约路线及用户补偿条款。 |
| TSUBASA FinTech 共通平台 | 展示地方银行联盟在共享 API / 数字服务平台基础设施上的做法。 |
| [[regional-banks/chiba-bank|Chiba Bank]] / TSUBASA 参与方 | 说明地方银行如何在保持各自独立银行实体的同时汇集技术。 |
| [[regional-banks/fukuoka-fg|Fukuoka FG]] / iBank 式路线 | 展示超越纯账户查看 App 的地方银行集团 App / 平台战略。 |
| [[payment-firms/freee|freee]] 与 [[payment-firms/money-forward|Money Forward]] | 地方银行 API 分析常用的会计 / PFM 集成锚点。 |

## 控制问题

| 问题 | 公开相关性 |
|---|---|
| 谁持有电子结算代理注册？ | API 访问不仅是银行的技术选择；它是一条注册主体路线。 |
| API 是只读还是可发指令？ | 账户信息风险与结算指令风险不同。 |
| 连接是直连单一银行还是经由共享平台？ | 运营集中度与供应商依赖度不同。 |
| 银行是否外包 API 系统运营？ | 外包与事故责任很重要。 |
| App 是银行自有、银行合作还是第三方？ | 法人实体与用户补偿路径可能与 UX 品牌不同。 |
| 该流程是否产生钱包余额，还是仅有银行账户资金变动？ | 资金结算法的分类可能因此改变。 |

## JapanFG 相关性

- [[regional-banks/yokohama-bank|Yokohama Bank]]、[[regional-banks/chiba-bank|Chiba Bank]]、[[regional-banks/chugoku-bank|Chugoku Bank]]、[[regional-banks/tsukuba-bank|Tsukuba Bank]] 以及与 TSUBASA 关联的地方银行是有用的 API 平台锚点。
- [[regional-banks/fukuoka-fg|Fukuoka FG]] 与 [[banking/minna-bank-baas-model|Minna Bank BaaS model]] 展示更具平台原生特征的地方银行方向。
- [[payment-firms/freee|freee]] 与 [[payment-firms/money-forward|Money Forward]] 在账户数据 / 会计集成为核心用例时进行交叉链接。
- [[payments/japan-bank-api-incident-and-fraud-control|Bank API incident controls]] 应在把银行 API 集成视为低风险便利功能之前使用。

## 研究清单

1. 识别银行、合作方、API 功能与服务品牌。
2. 查阅 FSA 电子结算代理注册名录及该银行的 API 披露页面。
3. 区分只读信息 API 与更新 / 转账指令 API。
4. 检查该系统是银行专属 API 还是共享联盟 / 供应商平台。
5. 将结算功能链接至 [[payments/account-to-account-payment-japan|A2A payment route]]，将钱包功能链接至 [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]。

## 相关

- [[banking/INDEX]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[banking/baas-japan-landscape]]
- [[banking/minna-bank-baas-model]]
- [[banking/regional-bank-consolidation-pattern]]
- [[payments/account-to-account-payment-japan]]
- [[financial-licenses/INDEX]]
- [[regional-banks/yokohama-bank]]
- [[regional-banks/chiba-bank]]
- [[INDEX|FinWiki index]]

## 来源

- FSA：电子结算代理注册名录。
- 全国银行协会（JBA）：开放 API 协议会及示范 API 合约。
- 横滨银行：API / 电子结算代理合作披露。
- 日本银行研讨会资料，引用 TSUBASA FinTech 共通平台。
- 筑波银行：TSUBASA FinTech 共通平台 / App 更新发布。

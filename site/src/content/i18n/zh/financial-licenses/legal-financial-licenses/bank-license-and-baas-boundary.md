---
source: financial-licenses/legal-financial-licenses/bank-license-and-baas-boundary
source_hash: 4e96ba905ac9d912
lang: zh
status: machine
fidelity: ok
title: "日本银行牌照与 BaaS 边界"
translated_at: 2026-05-31T23:59:49.387Z
---
# 日本银行牌照与 BaaS 边界

## 概览

日本 BaaS 与嵌入式银行记录需要区分**持牌银行层**和**客户界面层**。吸收存款的控制性公开类别是《银行法》下的银行牌照路径，而合作伙伴品牌 app、账户信息服务、支付指示服务和银行代理渠道可使用其他监管路径。

本页属于 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]，并将监管边界连接到 [[banking/INDEX|banking domain]]、[[banking/japan-baas-operating-models|Japan BaaS operating models]]、[[banking/baas-japan-landscape|Japan BaaS landscape]]、[[payments/japan-bank-api-payment-agency-route|bank API and electronic payment agency route]]、[[payments/account-to-account-payment-japan|account-to-account payment Japan]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] 和 [[fintech/japan-financial-regulation|Japan financial regulation]]。

## 制度地图

| 层级 | 公开类别 | 许可 / 登记形式 | 公开功能 |
|---|---|---|---|
| 吸收存款银行 | 《银行法》下的 `銀行` | 牌照 | 银行侧存款、贷款、汇兑和结算功能。 |
| 银行控股公司 | 银行控股公司路径 | 认可 / 金融厅名单路径 | 对银行子公司的控股控制。 |
| 银行代理 | `銀行代理業者` | 许可 | 银行存款、贷款和汇兑合同的代理或中介。 |
| 电子支付代理 | `電子決済等代行業者` | 登记 | 通过银行 API / 开放银行路径中介账户信息和支付指示。 |
| 电子支付处理 | `電子決済等取扱業` | 登记 | 受银行委托，中介银行存款债权的电子增减及相关存款合同缔结。 |
| 合作伙伴品牌 BaaS 表层 | 合作伙伴 app、分行、UI 或产品品牌 | 取决于角色 | 面向客户的界面，余额可能仍是持牌银行的银行存款。 |
| 钱包 / 储值层 | 适用时为资金转移或预付路径 | 登记 / 备案路径 | 非银行支付余额、汇款债权、预付余额或商户支付路径。 |

## 持牌银行层

金融厅持牌 / 登记机构门户在 `預金取扱等金融機関` 下发布银行名单。同一门户也载有银行控股公司、银行代理业者、外国银行代理银行、电子支付代理业者和其他受监管类别。截至 2026-05-22 打开的门户快照，银行名单行显示的截至日期为 2026-05-13，电子支付代理业者名单行显示的截至日期为 2026-04-30。

在 BaaS 记录中，银行牌照字段识别承担存款债权的法人实体。公开记录通常来自金融厅银行名单、银行账户条款、服务条款或合作伙伴分行 / BaaS 页面。银行运营公司页面仍置于 [[financial-licenses/INDEX|financial-licenses INDEX]] 之下，包括 [[regional-banks/ssnb|SSNB]]、[[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]、[[regional-banks/sony-bank|Sony Bank]]、[[regional-banks/ui-bank|UI Bank]] 和 [[regional-banks/01-bank|01 Bank]]。

## 银行代理路径

银行代理路径是经许可的中介路径。金融厅监管材料将银行代理活动描述为银行合同缔结的代理或中介，包括存款、贷款和汇兑相关合同。需要核对的公开记录包括委托银行、银行代理法人、服务条款以及金融厅 `銀行代理業者` 名单。

银行代理不记录为单独的银行牌照。它是连接到委托银行的分销 / 中介层。该路径与 [[financial-licenses/foreign-bank-agency-business-route|Japan foreign bank agency business route]] 以及前端品牌和持牌银行不处于同一法律层的数字银行分销案例相邻。

## 电子支付代理路径

电子支付代理路径是《银行法》下的登记路径。它覆盖开放银行 / 银行 API 型服务，即在用户与银行之间中介账户信息或支付指示的服务。公开验证使用金融厅电子支付代理页面和 `電子決済等代行業者` 登记簿。

该路径关联 [[payments/japan-bank-api-payment-agency-route|Japan bank API and electronic payment agency route]]、[[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud-control map]] 和 [[payments/account-to-account-payment-japan|Japan account-to-account payment route]]。登记识别的是 API / 中介层；它本身并不识别银行存款牌照或资金转移登记。

## 电子支付处理路径

金融厅电子支付处理业务页面及相关监管路径不同于普通电子支付代理登记。该路径与受银行委托中介银行存款债权的电子增减有关，也可包括与该行为相关的存款合同缔结中介。

该路径是存款代币 / 银行发行数字货币中介在《银行法》侧的路径。它不同于《资金结算法》侧的电子支付工具交易业务。相邻的支付牌照路径为 [[financial-licenses/payment-license-stack|Japan payment license stack]]。

## BaaS 边界字段

| 字段 | 公开证据路径 |
|---|---|
| 法律余额持有人 | 银行账户条款、存款条款、钱包条款、金融厅银行名单、资金转移名单或预付名单。 |
| 存款债权状态 | 银行条款和《银行法》银行牌照路径。 |
| 前端运营者 | 合作伙伴服务页面、app 条款、BaaS 页面、银行代理披露或电子支付代理登记簿。 |
| 委托银行 | 银行代理披露、BaaS 合作伙伴条款、银行分行 / 合作伙伴页面。 |
| API 访问路径 | 金融厅电子支付代理名单、银行 API 材料、服务条款。 |
| 存款代币 / 银行发行数字货币路径 | 金融厅电子支付处理业务页面和《银行法》监管路径。 |
| 非银行钱包路径 | 金融厅资金转移名单、预付发行人名单、产品条款。 |
| 面向用户品牌 | 合作伙伴分行页面、NEOBANK 页面、BaaS 页面、app 页面。 |

## BaaS 运营层

| BaaS 模式 | 银行牌照持有人 | 合作伙伴 / 界面层 | 链接的 FinWiki 路径 |
|---|---|---|---|
| NEOBANK / 合作伙伴品牌银行 | 持牌银行 | 合作伙伴品牌和账户主张 | [[regional-banks/ssnb]]、[[banking/japan-baas-operating-models]] |
| 合作伙伴分行 | 持牌银行 | 合作伙伴分行、app 或品牌账户路径 | [[banking/minna-bank-baas-model]] |
| API 提供型银行服务 | 持牌银行，加上适用时的 API / 电子支付代理层 | 外部 app、SaaS、会计或钱包服务 | [[payments/japan-bank-api-payment-agency-route]] |
| 企业 API 银行 | 持牌银行 | 企业银行 API、资金管理、会计、平台流程 | [[payment-firms/gmo-aozora-net]] |
| 银行代理路径 | 委托银行加获许可的银行代理 | 代理渠道 / app 路径 | [[regional-banks/ui-bank]] |
| 钱包加银行联动 | 银行账户加资金转移 / 预付 / 账户联动路径 | 钱包或商户支付服务 | [[payments/funds-transfer-vs-prepaid-boundary]] |

## 公开验证检查清单

| 问题 | 来源字段 |
|---|---|
| 余额是否为银行存款？ | 银行账户条款和金融厅 `銀行` 名单。 |
| 哪个法人实体对客户余额负债？ | 存款条款、钱包条款、发行人披露或受监管业者名单。 |
| 前端是否为银行代理？ | 金融厅 `銀行代理業者` 名单和服务披露。 |
| 前端是否为电子支付代理？ | 金融厅 `電子決済等代行業者` 登记簿和银行 API 条款。 |
| 是否使用存款代币 / 电子存款债权路径？ | 金融厅 `電子決済等取扱業` 页面和监管路径。 |
| 是否存在资金转移或预付层？ | 金融厅 `資金移動業者` 名单、金融厅预付发行人名单和产品条款。 |
| 公开页面是否识别委托银行？ | 合作伙伴分行、NEOBANK、银行代理或 BaaS 服务页面。 |

## 相关

- [[financial-licenses/INDEX]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/foreign-bank-branch-license-route]]
- [[financial-licenses/foreign-bank-agency-business-route]]
- [[banking/INDEX]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-net-bank-competition-map]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[fintech/japan-financial-regulation]]
- [[INDEX|FinWiki index]]

## 来源

- 金融厅：持牌 / 登记业者门户和银行名单。
- 金融厅：新银行准入的银行监管页面。
- 金融厅：银行代理监管页面和银行代理名单。
- 金融厅：电子支付代理页面和登记簿。
- 金融厅：电子支付处理业务页面和监管路径。
- e-Gov：《银行法》。
- 日本银行协会：Open API council 材料。

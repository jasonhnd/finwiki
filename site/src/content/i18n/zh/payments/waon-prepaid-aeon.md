---
source: payments/waon-prepaid-aeon
source_hash: 06a312e575b1caae
lang: zh
status: machine
fidelity: ok
title: "WAON：永旺集团全国IC预付电子货币"
translated_at: 2026-06-01T03:31:12.294Z
---

# WAON：永旺集团全国IC预付电子货币

## 维基路线

该条目位于 [[payments/INDEX|payments index]] 下，作为 AEON 锚定的预付费发行人页面，与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对用于 FSA 注册表视图，并与 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] 配对用于头对头零售锚定比较。与 [[payments/nanaco-prepaid-seven-i|nanaco]]（七和 i 对应方案）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]（FeliCa 对等方案）和 [[payments/edy-rakuten-prepaid|Rakuten Edy]]（与平台无关的 FeliCa 预付费）进行比较。群主播为[[retail/aeon-group|AEON Group]]和[[card-issuers/aeon-financial-service|AEON Financial Service]]；组库轨为[[card-issuers/aeon-bank|AEON Bank]]；忠诚度集成路由至 [[loyalty/japan-points-landscape|Japan points landscape]] 以实现 WAON POINT 经济。

## 长话短说

**WAON** (named after the AEON-mascot "ワオン") is the **largest retail-anchored prepaid e-money brand in Japan by transaction count** and one of the two principal closed-loop retail prepaid systems alongside [[payments/nanaco-prepaid-seven-i|nanaco]]. Launched 2007-04 by AEON Co Ltd, WAON is operated within the AEON Group with [[card-issuers/aeon-financial-service|AEON Financial Service]] handling settlement and the issuer obligations as third-party 前払式支払手段 (prepaid payment instrument) under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]. The system runs on **FeliCa** contactless IC (same technology as Suica / nanaco / Edy), supports physical card, Mobile WAON via Osaifu Keitai, Apple Pay (limited devices), and the AEON Pay smartphone app. Acceptance spans the full AEON Group retail network (AEON, MaxValu, MiniStop, AEON Cinema, Welcia, etc.) plus ~1M outside-group merchants. **WAON POINT** integration converts loyalty points 1:1 into spendable balance, and the bundled **AEON Card** issuance / [[card-issuers/aeon-bank|AEON Bank]] auto-charge linkage anchors the wallet inside the AEON financial-services ecosystem.

## 发行人及运营结构

| 方面 | 阅读 |
|---|---|
| 品牌拥有者 | 永旺有限公司 |
| FSA 预付记录发行人 | AEON CO Ltd 和 [[card-issuers/aeon-financial-service\|AEON Financial Service]] 子公司出现在 FSA“daisan.xlsx”第三方预付费注册表中 |
| 结算/金融服务 | [[card-issuers/aeon-financial-service\|AEON Financial Service]]组 |
| 集团银行铁路 | [[card-issuers/aeon-bank\|AEON Bank]]（自动充值、ATM充值、账户联动） |
| 组卡导轨 | AEON 卡（Visa / Mastercard / JCB 联名卡，内置 WAON IC） |
| 推出年份 | 2007-04  |
| 技术 | FeliCa非接触式IC |
| 移动轨道 | 移动WAON（Osaifu Keitai）、Apple Pay（配备日本地区SIM卡的iPhone 8+）、AEON Pay应用程序QR |
| 收费上限 | 每张卡 ¥50,000  |
| 单次充电最大 | ¥29,000 典型 |

## 法律依据：第三方预付支付工具

WAON 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 章 3  预付费工具框架下注册为 **第三方预付费支付工具**。主要监管后果：

- 发行人必须在 FSA（相关地方财政局）注册并出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] 中。
- 每半年**未使用余额存款**义务：如果未使用余额> ¥10M，发行人必须将一半未使用余额存入法务局（供托）作为用户资金保障。
- **No refunding to original payer** except at issuance discontinuation — the no-refund rule is one of the principal economic differentiators from [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer instruments]].
- **破损**（发行人多年来累积的未赎回余额）计入 AEON Financial Service 休眠/丢失卡的损益。
- 100% AML / KYC 豁免低于 ¥100,000  余额阈值（根据现有 PSA 剥离）。

与 [[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] 框架（2023 PSA 修正案下的 EPI）的边界使 WAON 完全处于预付费通道——价值不能以现金等价形式进行点对点转移。

## 验收足迹

接受网络采用同心圆结构：

| 等级 | 描述 | 示例 |
|---|---|---|
| 内部 — 永旺集团 | 集团零售和娱乐主播 | 永旺梦乐城、永旺、MaxValu、MiniStop、永旺电影院、Welcia（药品）、霞、大荣 |
| 中间 — 组对齐 | 集团银行/卡联自动充值点 | [[card-issuers/aeon-bank\|AEON Bank]] ATM、AEON 卡关联合作店 |
| 外层——跨商户 | 接受 WAON Tap 的非集团商户 | 麦当劳（历史悠久）、吉野家、连锁药妆店、加油站 |
| 移动轨道 | Apple Pay / Osaifu Keitai 全球商户 FeliCa 终端 | 任何接受 FeliCa 的 POS |

即使代码支付（[[payment-firms/paypay|PayPay]]、[[payment-firms/au-payment|au PAY]]、Rakuten Pay、d Pay）获得了边际新用户增长，内层网络的规模（超过 20,000 AEON 集团商店）也支撑着 WAON 的安装基础地位。

## 关键绩效指标快照

AEON 在 IR 材料和综合报告中公开报告定量 KPI：

| 公制 | 阅读（最新公开披露） |
|---|---|
| 累计发卡数量 | 90M以上，包括移动WAON（永旺集团2024 IR材料） |
| 年度交易笔数 | 日本最大的零售预付费（按点击次数计算）（顶级 3  无现金排名） |
| 年交易额 | 永旺集团的数万亿日元规模+外部商户足迹 |
| 商户受理点 | 包括永旺集团在内的全国约1M |
| WAON POINT发行 | 与 AEON 集团门店的 ¥200 = 1  积分挂钩（基本价格） |

确切的同期增长数据参见 AEON Co Ltd 披露信息和 AEON Financial Service 部门 IR； FinWiki 条目不重复季度数字——请参阅发行人 IR 了解当前季度 KPI。

## 策略：闭环忠诚锚

WAON 在 AEON 集团内部的战略角色是**闭环忠诚度 + 零售锚定无现金**，而不是开放商户代码支付竞争。战略逻辑：

1. **团体锁定** — WAON 余额在 AEON 集团商店中使用最为经济（最佳 WAON POINT 累积率，5% “客户感谢日”20th / 30th 每月折扣）。
2. **金融服务交叉销售** — WAON 使用提供 [[card-issuers/aeon-bank|AEON Bank]] 开户、[[card-issuers/aeon-financial-service|AEON Financial Service]] 发卡、AEON 保险产品。
3. **品牌差异化与 nanaco** — WAON 的购物中心/超市/药店足迹与 nanaco 的便利店锚定范围形成鲜明对比；头对头的分裂记录在 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco comparison]] 中。
4. **代码支付的补充，而不是替代** — AEON Pay 应用程序为喜欢代码支付的客户提供二维码界面，而不会放弃 FeliCa 固定的安装基础。
5. **移动铁路扩展** — Apple Pay 支持 (2016 onward) 和通过 Osaifu Keitai 的移动 WAON 保留了新设备客户，否则他们可能会默认使用代码支付应用程序。

从 2023 到 [[card-issuers/aeon-financial-service|AEON Financial Service]] 的集团支付/银行/卡业务整合将 WAON 重新定位为集成零售金融服务堆栈的面向消费者的层，而不是独立的预付费产品。

## 有关的

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/aeon-bank]]
- [[retail/aeon-group]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 来源

- WAON 官方网站 (waon.net) — 产品、收费和验收文档。
- AEON Co Ltd 公司网站 — 集团结构和 IR。
- AEON 金融服务公司网站 — 结算/金融服务范围。
- 永旺银行企业网站——集团银行轨与自动充值联动。
- FSA，“daisan.xlsx” — 第三方预付费工具发行人注册列表。
- FSA 预付支付工具政策页面。
- METI 无现金政策页面 — 无现金比率和运营商环境背景。

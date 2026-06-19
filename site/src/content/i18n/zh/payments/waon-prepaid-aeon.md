---
source: payments/waon-prepaid-aeon
source_hash: 6452b79c65ae7a78
lang: zh
status: machine
fidelity: ok
title: "WAON：永旺集团的全国 IC 预付电子货币"
translated_at: 2026-06-19T06:09:18.184Z
---

# WAON：永旺集团的全国 IC 预付电子货币

## Wiki 路径

本条目位于 [[payments/INDEX|payments index]] 之下，作为以永旺为锚的预付发行方页面，就 FSA 名录视角与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对，就零售锚定方的正面比较与 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] 配对。请与 [[payments/nanaco-prepaid-seven-i|nanaco]] (Seven & i 对应物)、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] (FeliCa 同业方案) 及 [[payments/edy-rakuten-prepaid|Rakuten Edy]] (平台无关的 FeliCa 预付) 比较。集团锚为 [[retail/aeon-group|AEON Group]] 和 [[card-issuers/aeon-financial-service|AEON Financial Service]]；集团银行通道为 [[card-issuers/aeon-bank|AEON Bank]]；忠诚度整合就 WAON POINT 经济性路由至 [[loyalty/japan-points-landscape|Japan points landscape]]。

## TL;DR

**WAON** (取名自永旺吉祥物「ワオン」) 是 **按交易笔数计日本最大的零售锚定型预付电子货币品牌**，也是与 [[payments/nanaco-prepaid-seven-i|nanaco]] 并列的两大主要闭环零售预付系统之一。由永旺株式会社于 2007-04 推出，WAON 在永旺集团内运营，由 [[card-issuers/aeon-financial-service|AEON Financial Service]] 负责结算并作为 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] 之下的第三方型前払式支払手段 (预付支付手段) 承担发行方义务。该系统运行于 **FeliCa** 非接触 IC (与 Suica / nanaco / Edy 相同技术) 之上，支持实体卡、经由おサイフケータイ的 Mobile WAON、Apple Pay (有限设备) 及 AEON Pay 智能手机应用。受理范围覆盖永旺集团完整零售网络 (永旺、MaxValu、MiniStop、永旺影城、Welcia 等) 加上约 1M 集团外商户。**WAON POINT** 整合将忠诚度积分以 1:1 转换为可消费余额，而捆绑的 **永旺卡** 发行 / [[card-issuers/aeon-bank|AEON Bank]] 自动充值联动，将该钱包锚定于永旺金融服务生态系统之内。

## 发行方与运营结构

| 维度 | 解读 |
|---|---|
| 品牌所有者 | 永旺株式会社 |
| FSA 登记在册的预付发行方 | 永旺株式会社及 [[card-issuers/aeon-financial-service\|AEON Financial Service]] 子公司出现在 FSA 的 `daisan.xlsx` 第三方型预付名录中 |
| 结算 / 金融服务 | [[card-issuers/aeon-financial-service\|AEON Financial Service]] 集团 |
| 集团银行通道 | [[card-issuers/aeon-bank\|AEON Bank]] (自动充值、ATM 充值、账户联动) |
| 集团卡通道 | 永旺卡 (内嵌 WAON IC 的 Visa / Mastercard / JCB 联名) |
| 推出年份 | 2007-04 |
| 技术 | FeliCa 非接触 IC |
| 移动通道 | Mobile WAON (おサイフケータイ)、Apple Pay (带日本区域 SIM 的 iPhone 8+)、AEON Pay 应用 QR |
| 充值上限 | 每卡 ¥50,000 |
| 单次充值上限 | 通常 ¥29,000 |

## 法律依据：前払式支払手段 (第三方型预付支付手段)

WAON 依据 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3 章预付手段框架登记为 **第三方型前払式支払手段**。主要监管后果：

- 发行方须向 FSA (相关地方财务局) 登记，并出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] 中。
- 半年度 **未使用余额供托** 义务：若未偿余额 > ¥10M，发行方须将未使用余额的一半供托 (供託) 于法务局，作为用户资金保护。
- 除发行终止外 **不向原付款人退款** — 不退款规则是与 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer instruments]] 的主要经济差异之一。
- **沉淀** (多年累积归属发行方的未兑付余额) 在休眠 / 遗失卡上贡献于永旺金融服务的损益。
- 100% 余额低于 ¥100,000 阈值时的 AML / KYC 豁免 (在现有 PSA 豁免之下)。

与 [[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] 框架 (2023  PSA 修订下的 EPI) 的边界，使 WAON 牢牢处于预付车道 — 价值不能以现金等价形态在个人之间转移。

## 受理足迹

受理网络呈同心圆结构：

| 层级 | 描述 | 示例 |
|---|---|---|
| 内层 — 永旺集团 | 集团零售与娱乐锚 | 永旺商城、永旺、MaxValu、MiniStop、永旺影城、Welcia (药妆)、KASUMI、Daiei |
| 中层 — 集团关联 | 集团银行 / 卡联动的自动充值点 | [[card-issuers/aeon-bank\|AEON Bank]] ATM、永旺卡关联合作商店 |
| 外层 — 跨商户 | 受理 WAON 拍卡的非集团商户 | 麦当劳 (历史上)、吉野家、药妆连锁、加油站 |
| 移动通道 | Apple Pay / おサイフケータイ 的全球商户 FeliCa 终端 | 任何受理 FeliCa 的 POS |

内层网络的规模 (超过 20,000  家永旺集团门店) 支撑着 WAON 的装机基础地位，即便码支付 ([[payment-firms/paypay|PayPay]]、[[payment-firms/au-payment|au PAY]]、楽天ペイ、d払い) 已夺取了边际新用户增长。

## KPI 快照

定量 KPI 由永旺在 IR 资料及统合报告书 (整合报告) 中公开报告：

| 指标 | 解读 (最新公开披露) |
|---|---|
| 累计发行卡 | 含 Mobile WAON 超 90M (永旺集团 2024  IR 资料) |
| 年度交易笔数 | 按拍卡笔数计日本最大的零售预付 (无现金排名前 3 ) |
| 年度交易额 | 跨永旺集团 + 集团外商户足迹的数万亿日元规模 |
| 商户受理点 | 含永旺集团全国约 1M |
| WAON POINT 发行 | 在永旺集团门店与 ¥200  = 1 积分 (基础费率) 挂钩 |

逐期精确增长数值见永旺株式会社披露及永旺金融服务分部 IR；FinWiki 条目不重复季度数字 — 当前季度 KPI 参见发行方 IR。

## 战略：闭环忠诚度锚

WAON 在永旺集团内的战略角色是 **闭环忠诚度 + 零售锚定型无现金**，而非开放商户的码支付竞争。战略逻辑：

1. **集团锁定** — WAON 余额在永旺集团门店使用最经济 (最佳 WAON POINT 累积率，每月 20日 / 30日「お客さま感謝デー」的 5% 折扣优惠)。
2. **金融服务交叉销售** — WAON 使用驱动 [[card-issuers/aeon-bank|AEON Bank]] 账户开立、[[card-issuers/aeon-financial-service|AEON Financial Service]] 卡发行、永旺保险产品。
3. **相对 nanaco 的品牌差异化** — WAON 的商城 / 超市 / 药妆店足迹与 nanaco 以便利店为锚的范围形成对照；正面比较的划分记录于 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco comparison]]。
4. **码支付的补充而非替代** — AEON Pay 应用为偏好码支付的客户提供 QR 码界面，同时不放弃以 FeliCa 为锚的装机基础。
5. **移动通道扩展** — Apple Pay 启用 (2016 起) 与经由おサイフケータイ的 Mobile WAON，留住否则可能默认转向码支付应用的新设备客户。

2023起 [[card-issuers/aeon-financial-service|AEON Financial Service]] 对集团支付 / 银行 / 卡业务的整合，将 WAON 从一项独立预付产品重新定位为一个整合零售金融服务堆栈面向消费者的层。

## 相关

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

- WAON 官方网站 (waon.net) — 产品、充值与受理文档。
- 永旺株式会社企业网站 — 集团结构与 IR。
- 永旺金融服务企业网站 — 结算 / 金融服务范围。
- 永旺银行企业网站 — 集团银行通道与自动充值联动。
- FSA，`daisan.xlsx` — 第三方型预付支付手段发行方登记名录。
- FSA 前払式支払手段 政策页面。
- METI 无现金政策页面 — 无现金比率与运营商格局背景。

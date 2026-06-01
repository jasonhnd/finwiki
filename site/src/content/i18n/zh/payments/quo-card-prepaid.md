---
source: payments/quo-card-prepaid
source_hash: 489b969add1ca93b
lang: zh
status: machine
fidelity: ok
title: "QUO Card：礼品卡与纸质 / 数字预付 franchise"
translated_at: 2026-06-01T03:31:12.240Z
---

# QUO Card：礼品卡与纸质 / 数字预付 franchise

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下，是 QUO Card 礼品卡预付发行方页面，并与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 形成 FSA 登记视角。作为礼品卡预付同业，可与 [[payments/amazon-gift-card-japan|Amazon Gift Card Japan]]、[[payments/apple-gift-card-japan|Apple Gift Card Japan]]、[[payments/google-play-gift-card-japan|Google Play Gift Card Japan]] 和 [[payments/visa-gift-card-japan|Visa Gift Card Japan]] 比较。也可与零售锚定型（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）和交通锚定型（[[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]）预付系统对比；QUO Card 属于**第三方礼品分销**类别，利用零售受理网络，但没有单一零售锚定母公司。法律框架：[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## TL;DR

**QUO Card (クオカード)** 是日本主要的**纸质 + 数字礼品卡 franchise**，由 **株式会社クオカード (QUO Card Co Ltd)** 发行。它是最初于 1987  作为 Nippon Telegraph & Telephone (NTT) 集团预付卡谱系一部分推出的第三方预付 franchise，如今作为独立的预付式支付工具发行方在 FSA 登记。QUO Card 在日本被**广泛用于企业礼品、股东优待（株主優待）、促销奖励和问卷受访者激励**，原因是其商户受理广、面额灵活（¥500 / ¥1,000 / ¥2,000 / ¥3,000 / ¥5,000 / ¥10,000），且企业用户可以印制自定义设计（オリジナルQUOカード）。**QUO Card Pay (クオカードPay)** 数字扩展于 2019  推出，是通过 email 或消息 app 发送的 URL / 条码式数字礼品，把 franchise 从纸质卡扩展到数字礼品分销。受理范围包括便利店（Lawson、FamilyMart、MiniStop、Daily Yamazaki、Seicomart、NewDays，但**不含 7-Eleven**）、药妆店、加油站、餐饮、书店和其他零售。

## 发行方与运营结构

| 维度 | 解读 |
|---|---|
| 运营公司 | 株式会社クオカード (QUO Card Co Ltd) |
| 集团语境 | 独立预付卡发行方；源自原 NTT 集团谱系 |
| FSA 预付发行方 | QUO Card 出现在 FSA `daisan.xlsx` 第三者型预付发行方清单中 |
| 推出年份 | 1987 （原始纸质 QUO Card）；2019 （数字 QUO Card Pay） |
| 技术 | 磁条纸卡（纸质 QUO Card）；URL / 条码（QUO Card Pay） |
| 面额 | ¥500, ¥1,000, ¥2,000, ¥3,000, ¥5,000, ¥10,000 （¥500 / ¥1,000  为最常见礼品面额） |
| 自定义设计 | オリジナルQUOカード — 企业可为企业礼品印制品牌化卡面设计 |
| 分销轨道 | 便利店直接销售、QUO Card 网站线上销售、B2B 企业批量购买、股东优待分销 |
| QUO Card Pay 格式 | 通过 email / LINE / SMS 发送 URL / 条码；在收银台扫码支付 |

## 法律基础：前払式支払手段

QUO Card 根据 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3 章登记为**第三者型前払式支払手段**。QUO Card franchise 是早期纸质预付产品之一，帮助塑造了 Payment Services Act 的预付框架。主要监管后果：

- QUO Card Co Ltd 作为已登记第三方预付发行方出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] 中。
- 每半年需要向 Legal Affairs Bureau 履行**未使用余额供托**义务（供託）；鉴于 QUO Card 的纸卡未偿余额较大（多年卡寿命、礼品卡常见未兑换模式），该供托义务具有实质性。
- **除发行终止外不得向原付款人退款** — 纸质 QUO Card 明确不可退款。
- **沉淀收益（breakage）** — 纸质 QUO Card 存在长期未兑换余额模式（礼品卡被遗忘在抽屉中、过了使用机会仍未使用）；breakage 是该 franchise 的重要 P&L 贡献项。
- PSA 预付阈值下的 AML / KYC 豁免。

## 使用场景：QUO Card 占优的地方

QUO Card 的经济角色主要是**企业 / B2B 礼品分销**，而不是零售消费者钱包。主要使用类别：

| 使用场景 | 说明 |
|---|---|
| **株主優待**（股东优待） | 上市公司股东礼品计划经常把 QUO Card 作为股东优待资产分发。面额灵活性和广泛受理非常适合股东优待分销。 |
| **问卷受访者 / 申请者激励** | 市场研究公司常用 QUO Card 作为参与者报酬（典型为 ¥500 / ¥1,000 ）。 |
| **企业礼品 / 年末 お歳暮** | B2B 面向员工 / 客户的企业礼品分销。 |
| **促销 / 活动奖励** | 销售激励、周年礼品、广告促销赠品。 |
| **B2B 批量购买** | 企业以小幅折扣批量购买纸质 QUO Card，用于多个内部分销计划。 |
| **QUO Card Pay 数字礼品** | 通过 email / LINE 发送的数字礼品卡，越来越多用于线上问卷、app 促销、远程办公时代分销等纸质配送不便的场景。 |

受理网络排除 **7-Eleven** — 这是一个结构性特征，因为 Seven & i Group 拥有自己的 [[payments/nanaco-prepaid-seven-i|nanaco]] 预付 franchise，并且历史上不在其门店接受 QUO Card。这是 QUO Card 相对通用礼品卡的主要可用性约束之一。

## 受理足迹

| 层级 | 受理 |
|---|---|
| 便利店 | Lawson, FamilyMart, MiniStop, Daily Yamazaki, Seicomart, NewDays — **不含** 7-Eleven |
| 药妆店 | マツモトキヨシ, ココカラファイン, スギ薬局, ウエルシア（部分）等 |
| 加油站 | ENEOS, JX, 出光, コスモ石油（部分） |
| 餐饮 / 快餐 | 部分连锁餐饮 |
| 书店 | Kinokuniya, Maruzen, Sanseido, Junkudo, Bunkyodo |
| 其他 | Hanamasa、酒店连锁、部分专门零售 |

## QUO Card Pay：数字扩展

**QUO Card Pay (クオカードPay)** 于 2019  推出，是一种通过 email、LINE 或 SMS 发送的 **URL / 条码式数字礼品卡**：

- 收款人收到 URL → 在参与商户收银台打开 → 条码 / QR 被扫码支付。
- 不需要安装 app；不需要 IC 或 FeliCa 硬件。
- 适合**远程分销** — 线上问卷奖励、app 促销激励、居家办公激励、员工认可计划。
- 发送方（企业或个人）在 QUO Card Pay 网站购买额度并分发给接收人。
- 与纸质 QUO Card 的受理有重叠，但商户集成不同 — 并非 1:1  完全相同的受理网络。
- 不同于 [[payments/japan-code-payment-competitive-map|wallet-style code payments]] 这类 PayPay / au PAY / d払い — QUO Card Pay 是**一次性礼品**，没有充值 / topup 功能。

## KPI 快照

| 指标 | 解读（公开披露） |
|---|---|
| 纸质 QUO Card 累计发行 | 自 1987  推出以来为数亿张规模 |
| 年礼品卡发行金额 | 数千亿日元规模（行业估计） |
| 受理点（纸质 QUO Card） | 全国约 60,000+ 家门店 |
| QUO Card Pay 覆盖 | 自 2019  推出以来持续扩大 |
| 株主優待 分销份额 | 日本最常用股东优待资产类型之一 |

准确数字见 QUO Card Co Ltd 公开披露和礼品卡行业报告。

## 战略：企业礼品分销 franchise

QUO Card 的战略定位：

1. **非零售锚定的中立性** — 不同于 [[payments/waon-prepaid-aeon|WAON]]（AEON）/ [[payments/nanaco-prepaid-seven-i|nanaco]]（Seven & i），QUO Card 没有零售锚定母公司，被定位为可在多条连锁中使用的**中立礼品货币**。
2. **企业 B2B 销售重点** — 企业批量购买、自定义设计印刷、株主優待 分销是主要收入通道。
3. **纸质 + 数字共存** — 纸质卡仍是传统企业礼品的主导格式，而 QUO Card Pay 捕捉远程 / 数字分销增长。
4. **Breakage 经济性** — 长期未兑换余额模式是结构性 P&L 顺风。
5. **受理护城河** — 广泛的跨商户足迹（不含 7-Eleven）支撑礼品货币定位。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## Sources

- QUO Card official site (quocard.com).
- QUO Card Pay site (quocard.com/pay).
- QUO Card corporate site (quocard.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list.
- FSA prepaid payment instruments policy page.
- METI cashless policy page.

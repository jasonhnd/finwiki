---
source: payments/visa-gift-card-japan
source_hash: 73f68a9214d18dad
lang: zh
status: machine
fidelity: ok
title: "Visa Gift Card Japan: Visa-branded open-loop prepaid"
translated_at: 2026-06-19T06:09:18.137Z
---

# Visa Gift Card Japan: Visa-branded open-loop prepaid

## Wiki route

本条目作为 Visa 品牌预付发行方页面归属于 [[payments/INDEX|payments index]]，与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对用于 FSA 登记视图，与 [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] 配对用于品牌网络角色背景，与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配对用于四类方案视图。请与 [[payments/amazon-gift-card-japan|Amazon Gift Card]]、[[payments/apple-gift-card-japan|Apple Gift Card]]、[[payments/google-play-gift-card-japan|Google Play Gift Card]]（闭环平台礼品）、[[payments/quo-card-prepaid|QUO Card]]（开环多商户纸质／数字礼品）及 [[payment-firms/kyash|Kyash]]（Visa 品牌钱包卡混合型）比较。Visa Gift Card 属于 **品牌网络预付** 类别 — 在全球任何受理 Visa 的地方均可使用，这在结构上不同于闭环礼品卡仅限便利店与零售的受理。日本的发行方通常是以 **Vプリカ** 产品品牌运营的 [[card-issuers/life-card|Life Card]]。

## TL;DR

**Visa Gift Card Japan** 指在日本发行的 **Visa 品牌预付卡** 家族 — 最突出的是在 Visa 方案许可下由 **[[card-issuers/life-card|Life Card Co Ltd]]** 发行的 **Vプリカ (V Preca)** 产品。Vプリカ 是 **日本发行的主要 Visa 品牌预付卡**，可在全球任何受理 Visa 的商户消费（线上及带物理卡选项的店内）。与 [[payments/amazon-gift-card-japan|Amazon Gift Card]] / [[payments/apple-gift-card-japan|Apple Gift Card]] / [[payments/google-play-gift-card-japan|Google Play Gift Card]]（均为闭环／平台受限）不同，Visa Gift Card 是 **开环／品牌网络预付** — 可跨 Visa 全球商户网络使用。该产品定位用于 **无需信用卡承诺的线上购买**、**应由收款人选择消费地点的礼品分发**，以及面向无传统信用卡历史用户的 **无卡无现金入口**。由于受理发生在第三方受理 Visa 的商户而非 Life Card 自身的服务，Vプリカ 在 FSA 之下注册为 第三者型 前払式支払手段。

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Principal Japan-issued Visa Gift Card | [[card-issuers/life-card\|Life Card Co Ltd]] 发行的 **Vプリカ (V Preca)** |
| Brand network | Visa（经由 [[payment-firms/visa-worldwide-japan\|Visa Worldwide Japan]] 许可） |
| FSA prepaid registration | Life Card Co Ltd 作为 第三者型 预付发行方出现在 `daisan.xlsx` 中（法人编号 3020001086810, 注册 2011-04-01 — 发行方覆盖卡／预付／担保的相邻领域） |
| Launch year (Vプリカ) | 2010 （Vプリカ 在 Life Card 之下首次推出） |
| Card format | 带 16位号码、CVV、有效期的线上／虚拟卡 — 某些产品变体也有物理卡选项 |
| Denominations | 可选购买 ¥500 至 ¥30,000 ，多种充值通道 |
| Distribution rails | 线上直接购买、便利店支付、ATM 购买、Vプリカ 网站充值 |
| Acceptance | 任何受理 Visa 的商户（全球线上及店内） |
| Expiry | 按卡分配有效期（通常自发行／最后充值起 1-2 年） |

## Legal basis: 第三者型 prepaid (Visa brand network access)

由于消费界面是 Visa 网络内的 **第三方商户** 而非发行方自身的服务，Vプリカ 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3 章之下注册为 **第三者型前払式支払手段**。主要监管后果：

- 作为发行方的 [[card-issuers/life-card|Life Card]] 出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] 中。
- 向法务局每半年进行 **未使用余额的供托**。
- **除发行停止时外不向原付款人退款** — Vプリカ 余额默认不可退现金。
- 在 **Visa 方案规则** 之下运营，涉及收单侧商户受理、交换流程及拒付／争议处理 — 品牌网络的经济背景参见 [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]。
- 关于欺诈／认证控制，对日本信用协会（[[payments/japan-card-security-authentication-controls|J-CSC]]）的卡识别合规适用于发行方侧。

## Visa brand network advantage

与闭环平台礼品卡的结构性区别在于 **全球 Visa 受理覆盖**：

| Dimension | Vプリカ (Visa brand network) | Amazon / Apple / Google Gift Card (closed-loop) |
|---|---|---|
| Spending surface | 全球任何受理 Visa 的商户 | 平台受限（仅 Amazon.co.jp / Apple / Google Play） |
| Online cross-merchant use | 是 — 在任何受理 Visa 的网站均可用 | 否 — 限于平台 |
| Physical card payment | 有限（Vプリカ 主要为线上／虚拟；存在部分物理卡变体） | 无物理卡支付界面（仅数字码） |
| Cross-border purchase | 是 — 在受理 Visa 的海外商户可用 | 有限（平台特定） |
| Gift recipient choice | 宽 — 收款人可选择任何 Visa 商户 | 窄 — 收款人受限于平台 |
| Issuer | Life Card（日本） | Amazon / Apple / Google（平台运营商） |
| FSA registration class | 第三者型 (third-party) | 自家型 (closed-loop) |

权衡在于，Visa 品牌网络受理带有 Visa 方案费用、交换流程及收单侧商户经济学 — 闭环礼品卡按定义规避这些。

## Use cases

| Use case | Description |
|---|---|
| **无需信用卡承诺的线上购买** | 购买者购买 Vプリカ，在受理 Visa 的网站使用而无需登记个人信用卡 |
| **带收款人选择的礼品分发** | 赠送者将 Vプリカ 交给收款人，由其在 Visa 网络内选择消费地点 |
| **从海外商户的无卡线上购买** | Vプリカ 在受理 Visa 的海外网站可用；替代信用卡承诺的消费者保护方案 |
| **无现金入口** | 无卡群体（未成年人、无信用卡成人）在便利店／线上购买 Vプリカ 以获得受理 Visa 的购买能力 |
| **注重隐私的线上购买** | 一些用户在不想留下重复信用卡账单足迹的交易中，更偏好 Vプリカ 而非信用卡 |
| **订阅取消的安全性** | 余额受限的卡限制订阅自动续费风险 |

## Distribution rails

| Rail | Description |
|---|---|
| **线上直接购买** | 以多种额面在 Vプリカ 网站直接购买 |
| **便利店支付** | 为线上下单的 Vプリカ 在便利店付款 |
| **ATM 购买** | Pay-easy / ATM 通道 |
| **充值／续充** | 现有 Vプリカ 持有者可经由 Vプリカ 网站／便利店支付／ATM 为余额充值 |
| **促销活动分发** | 促销礼品奖励 |

与便利店货架的物理礼品卡（[[payments/amazon-gift-card-japan|Amazon]] / [[payments/apple-gift-card-japan|Apple]] / [[payments/google-play-gift-card-japan|Google Play]]）相比，Vプリカ **主要为线上购买而非在便利店货架陈列** — 便利店的整合主要是线上下单 Vプリカ 的支付渠道，而非货架陈列产品。

## Other Visa-branded prepaid in Japan

Vプリカ 是日本主要但并非唯一的 Visa 品牌预付。其他 Visa 品牌预付卡包括：

- **[[payment-firms/kyash|Kyash]] Visa card** — 由 Kyash Inc. 发行的钱包与预付 Visa 卡混合型；服务于不同于 Vプリカ（单次加载礼品／无卡购买）的用例（实时钱包 + Visa 预付发行）。
- **各种钱包发行的 Visa 品牌预付** — 多家金融科技钱包作为其钱包提供的一部分发行 Visa 预付（例如 [[payment-firms/paypay|PayPay]] card，及各类较小的钱包 Visa 卡）。
- **[[payment-firms/au-payment|au PAY]] prepaid card** — 与 au PAY 钱包关联发行的 Visa 或 Mastercard 预付卡。
- **银行发行预付** — 部分银行发行的 Visa 预付产品。

**Visa Gift Card**（单次加载、礼品导向）与 **Visa 品牌钱包预付**（充值并消费的钱包）之间的边界有些模糊 — 两者都使用 Visa 方案受理，但产品定位与客户用例不同。

## KPI snapshot

| Metric | Reading |
|---|---|
| Vプリカ cumulative issuance | 可观的数百万张规模（Life Card / Vプリカ 公开披露） |
| Visa-accepting merchant network globally | ~80M 全球商户（Visa 集团披露） |
| Vプリカ denomination range | ¥500 至 ¥30,000  |
| Top-up rail availability | 便利店、ATM、线上网站、多个充值点 |

确切数字存在于 Life Card 披露与 Vプリカ 网站。

## Strategy: brand-network prepaid for cardless and online use

Visa Gift Card Japan（主要为 Vプリカ）的战略角色：

1. **品牌网络的普遍性** — Visa 受理覆盖远超闭环平台礼品卡。
2. **无卡线上购买** — 服务于不愿向线上商户提交信用卡账单信息的用户。
3. **收款人选择的礼品分发** — 为收款人提供宽广的消费界面。
4. **跨境购买能力** — 海外商户的 Visa 受理。
5. **余额受限的订阅安全性** — 预付余额限定订阅注册时的自动续费风险。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/life-card]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/kyash]]
- [[INDEX|FinWiki index]]

## Sources

- Visa Japan prepaid cards page (visa.co.jp/pay-with-visa/find-a-card/prepaid-cards.html).
- Vプリカ official site (vpc.lifecard.co.jp).
- Visa Japan corporate site (visa.co.jp).
- Life Card corporate site (lifecard.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Life Card entry, registered 2011-04-01, corporate number 3020001086810).
- FSA prepaid payment instruments policy page.
- Japan Credit Association — card security guidelines.
- METI cashless policy page.

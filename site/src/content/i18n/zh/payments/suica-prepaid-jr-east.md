---
source: payments/suica-prepaid-jr-east
source_hash: 4f9dc7bb8b1dba9b
lang: zh
status: machine
fidelity: ok
title: "Suica：JR 东日本交通系及通用 IC 预付"
translated_at: 2026-06-19T06:09:18.122Z
---

# Suica：JR 东日本交通系及通用 IC 预付

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下，作为以 JR 东日本为锚点的预付发行者页面，在 FSA 注册登记的视角下与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对，在跨发行者方案的视角下（10 IC 相互利用、Cyberne 结算）与 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid e-money economics]] 配对。请与 [[payments/pasmo-prepaid-tokyo-metro|PASMO]]（东京地铁／私铁联盟对应方）、[[payments/waon-prepaid-aeon|WAON]]／[[payments/nanaco-prepaid-seven-i|nanaco]]（以零售为锚点的 FeliCa 同业）以及 [[payments/edy-rakuten-prepaid|Rakuten Edy]]（平台无关的 FeliCa）进行比较。企业／集团锚点为 [[card-issuers/jr-east-financial|JR East financial services / Viewカード]]；技术骨干为经由 Sony / FeliCa Networks 的 FeliCa；移动轨道扩展在 Apple Pay／Osaifu Keitai 下链接至 [[payments/japan-card-security-authentication-controls|tokenization controls]]。

## TL;DR

**Suica**（Super Urban Intelligent Card）是**日本旗舰级交通系及通用 IC 预付电子货币**，由**东日本旅客铁道株式会社（JR East / 东日本旅客铁道株式会社）**自 2001-11-18 推出以来发行。Suica 是日本**按持卡人数及交易笔数计最大的交通系预付发行者**，与 PASMO／ICOCA／Kitaca／TOICA／manaca／nimoca／SUGOCA／HAYAKAKEN／PiTaPa（最后者为后付例外）一道支撑着 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|10 IC mutual-use scheme]]。Suica 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] 下注册登记为**第三者型前払式支払手段**，在便利店、自动售货机、出租车、零售连锁以及任何受理 FeliCa 的 POS 处具有跨商户受理能力。**移动 Suica（Mobile Suica）** 于 2006 （手机集成）推出，Apple Pay 支持于 2016-10  到来 — 将 Suica 从仅限实体卡转变为智能手机原生，并使海外发行的 iPhone 集成成为可能，从而支撑了日本入境游客的无现金叙事。

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| 品牌所有者 | 东日本旅客铁道株式会社（JR East / 东日本旅客铁道株式会社） |
| FSA 预付发行者 | 作为第三者型预付发行者的 JR 东日本 |
| 集团关联卡 | View Card（Viewカード）— 带 Suica 自动充值的 JR 东日本联名信用卡 |
| 推出年份 | 2001-11-18（实体卡）、2006 （移动 Suica）、2016-10 （Apple Pay） |
| 技术 | FeliCa 非接触 IC（Sony / FeliCa Networks） |
| 移动轨道 | 移动 Suica（Osaifu Keitai → Apple Pay／Google Pay／Wear OS 支持） |
| 充值上限 | ¥20,000 （典型 Suica 卡）；经 View Card 自动充值的移动 Suica 可扩展 |
| 发行者间结算 | 跨 10 IC 发行者的 Cyberne 系统 |

## Legal basis: 前払式支払手段

Suica 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3  章下注册登记为**第三者型前払式支払手段**，因为它在**超出 JR 东日本自身服务的第三方商户**（便利店、自动售货、零售）处受理。在**其他铁道运营商网络**上的相互利用方案的刷卡受理，由 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] 中所记载的发行者间协议规范。主要监管后果：

- 作为发行者的 JR 东日本就第三者型预付发行而言列入 [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]]。
- 半年度**未使用余额供托**义务：将未使用余额的一半向法务局供托（供托）— 鉴于 Suica 的装机规模，金额相当可观。
- **除发行停止时外不可向原付款人退款** — 不过 JR 东日本在实体卡返还时会收取手续费退还 Suica 余额，其结构为服务性退款而非 PSA 强制要求的退款。
- **Breakage（破损沉淀）**（游客购买的 Suica 卡从未返还、余额被保留者）是 P&L 的重要贡献因素，也是长期受审视的议题。

## The 10 IC mutual-use scheme

Suica 是 2013-03-23 推出的**10 IC 相互利用方案**的锚点，它使 Suica 持卡人可以刷卡进入全国任何参与的铁道／巴士网络并在任何参与的零售商户处付款。完整的跨方案地图见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]：

| Card | Issuer | Region |
|---|---|---|
| **Suica** | JR 东日本 | 首都圈／北日本 |
| PASMO | PASMO 株式会社 | 首都圈私铁／巴士 |
| ICOCA | JR 西日本 | 关西／西日本 |
| Kitaca | JR 北海道 | 北海道 |
| TOICA | JR 东海 | 东海／名古屋 |
| manaca | 名铁 + 名古屋市 | 名古屋／中部 |
| nimoca | 西铁 | 福冈／九州 |
| SUGOCA | JR 九州 | 九州 |
| HAYAKAKEN | 福冈市地铁 | 福冈市 |
| PiTaPa | Surutto KANSAI（后付） | 关西（与 ICOCA 重叠） |

发行者间结算通过 **Cyberne**（中央中心 — JR 东日本 + JR 集团 + 私铁联盟运营的中央结算）进行，跨发行者清算刷卡交易。

## Mobile Suica generations

| Generation | Year | Key features |
|---|---|---|
| 仅实体 Suica | 2001-2006 | 基于卡片；在 JR 售票机／定期券窗口充值 |
| 移动 Suica（Osaifu Keitai） | 2006 | 从功能手机到智能手机的 Osaifu Keitai 集成；搭载 FeliCa 的 Android 设备 |
| Apple Pay Suica | 2016-10 | iPhone 7  起；重大的海外 iPhone 集成；SIM 地区无关性使入境游客得以使用 |
| Google Pay／Wear OS | 2018  起 | 经 Google Pay 的 Android 非 Osaifu Keitai 设备 |
| Suica Internet Service／基于网络的充值 | 持续 | 经由 View Card／信用卡从网络充值 |

Apple Pay Suica 2016  在结构上意义重大，因为它去除了曾将移动 Suica 限制于日本运营商 Osaifu Keitai 设备的 SIM 地区限制，使海外发行的 iPhone 能够配置 Suica 钱包并在日本国内用于交通和零售。这是主要的无现金入境游客通道之一，并重塑了海外访客的支付预期。

## KPI snapshot

| Metric | Reading (most recent public disclosure) |
|---|---|
| 累计 Suica 发行 | 含移动 Suica 共 100M+（JR 东日本 IR 资料） |
| 日交通刷卡笔数 | 日本按日刷卡笔数计最大的单一交通系 IC 发行者 |
| 移动 Suica 账户 | 数千万（JR 东日本 IR 披露） |
| 未使用预付余额 | 数千亿日元规模（JR 东日本 有价证券报告书预付供托披露） |
| 年度零售刷卡金额 | 可观的跨商户交易金额；JR 东日本 IR 内訳披露电子货币收益分部 |

确切的同比 KPI 数字见 JR 东日本 IR 资料；FinWiki 将当前季度数字路由至发行者 IR，而非复制它们。

## Strategy: transit-anchored cashless platform

Suica 在 JR 东日本的战略逻辑：

1. **以交通为锚的装机基础** — 每位 JR 东日本通勤者都是潜在的 Suica 持卡人；从铁路通票到 Suica IC 卡的转换带动了以零售为锚的同业无法企及的大规模分发。
2. **破损沉淀／浮存金经济性** — 庞大的未使用余额是低成本资金来源，也是丢失／未返还卡片带来的 P&L 破损沉淀顺风。
3. **入境游客无现金** — Apple Pay 的启用已使 Suica 成为日本事实上的入境游客无现金轨道。
4. **JR 东日本集团交叉销售** — View Card 信用卡发行、JRE POINT 忠诚度集成、站内零售受理 — 全部以 Suica 为锚点。
5. **开放相互利用 vs 闭环** — Suica 选择参与 10 IC 相互利用方案（而非仅限 JR 的闭环），对整个交通系 IC 生态系统在结构上具有促成作用；其权衡是经由 Cyberne 管理的发行者间结算复杂性。
6. **集中化（JRE PoiNT、移动 Suica 与 JRE WALLET 集成）** — 近期 JR 东日本的战略方向是在 JRE 平台品牌下进行整合。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/pasmo-prepaid-tokyo-metro]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-card-security-authentication-controls]]
- [[card-issuers/jr-east-financial]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- JR 东日本 Suica 官方网站（jreast.co.jp/suica）。
- JR 东日本 移动 Suica 网站（jreast.co.jp/mobilesuica）。
- JR 东日本 企业网站及 IR 资料。
- 金融厅，`daisan.xlsx` — 第三者型前払式支払手段发行者注册登记名单。
- 金融厅 前払式支払手段政策页面。
- FeliCa Networks 企业网站（felicanetworks.co.jp）。
- 经济产业省 无现金政策页面。

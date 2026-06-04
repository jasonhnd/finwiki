---
source: payments/suica-prepaid-jr-east
source_hash: e078df1293c47ca3
lang: zh
status: machine
fidelity: ok
title: "Suica：JR东日本交通和通用IC预付卡"
translated_at: 2026-06-01T03:31:12.251Z
---
# Suica：JR东日本交通和通用IC预付卡

## 维基路线

此条目位于 [[payments/INDEX|payments index]] 下，作为 JR 东锚定的预付费发行人页面，与 FSA 注册表视图的 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 以及跨发行人方案视图的 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid e-money economics]] 配对（10 IC 互用、Cyberne 结算）。与 [[payments/pasmo-prepaid-tokyo-metro|PASMO]]（东京地铁/私铁联盟对应）、[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]（零售锚定 FeliCa 同行）和 [[payments/edy-rakuten-prepaid|Rakuten Edy]]（与平台无关的 FeliCa）进行比较。企业/团体主播为[[card-issuers/jr-east-financial|JR East financial services / Viewカード]]；技术骨干是通过 Sony / FeliCa Networks 的 FeliCa； mobile-rail扩展链接到Apple Pay / Osaifu Keitai下的[[payments/japan-card-security-authentication-controls|tokenization controls]]。

## 长篇大论；博士

**Suica**（超级城市智能卡）是**日本交通通用IC预付电子货币的旗舰**，由**东日本旅客铁道株式会社（JR东日本/东日本旅客鉄道株式会社）**自发行2001-11-18以来发行。 Suica 是日本**持卡人和交易量最大的交通预付发卡机构**，与 PASMO / ICOCA / Kitaca / TOICA / manaca / nimoca / SUGOCA / HAYAKAKEN / PiTaPa 一起锚定 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|10 IC mutual-use scheme]]（最后一个是后付款例外）。 Suica 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] 下注册为 **第三者型前払式支払手段**，可在便利店、自动售货机、出租车、零售连锁店和任何接受 FeliCa 的 POS 进行跨商户接受。 **Mobile Suica** 推出了 2006 （手机集成），并支持 Apple Pay 2016-10 ，将 Suica 从实体卡转换为智能手机原生，并支持海外发行的 iPhone 集成，从而奠定了日本入境游客无现金故事的基础。

## 发行人和运营结构

|尺寸|阅读|
|---|---|
|品牌拥有者|东日本旅客铁道株式会社 (JR East / 东日本旅客鉄道株式会社) |
| FSA 预付发行人 | JR东日本作为第三方预付发行人|
|集团附属卡| View Card (Viewカード) — 联名JR东日本信用卡，可自动充值Suica |
|推出年份 | 2001-11-18（实体卡）、2006 (Mobile Suica)、2016-10 (Apple Pay) |
|技术 | FeliCa 非接触式 IC（索尼/FeliCa Networks）|
|移动轨道|移动 Suica（Osaifu Keitai → Apple Pay / Google Pay / Wear OS 支持）|
|收费上限| ¥20,000 （典型Suica卡）； Mobile Suica通过View Card自动充值可延期|
|发行人间结算 |跨10 IC发行人的Cyber​​ne系统|

## 法律依据：前払式支払手段

Suica 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 章 3  下注册为 **第三者型前払式支払手段**，因为它在 **JR 东日本自身服务之外的第三方商家**（便利店、自动售货机、零售）接受。 **其他铁路运营商网络**上的互用计划分接接受受 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] 中记录的发行人间协议管辖。主要监管后果：- JR东日本作为第三方预付费发行的发行人出现在[[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]]中。
- 半年**未使用余额押金**义务：向法律事务局 (供托) 支付的未使用余额的一半 — 考虑到 Suica 的安装基础规模，这一数字相当大。
- **除非发行终止，否则不会向原始付款人退款** — 但 JR 东日本会在实体卡退回时向 Suica 余额进行收费退还，其结构为服务退款，而不是 PSA 规定的退款。
- **破损**（游客购买的 Suica 卡从未退回，余额保留）是一个重要的损益贡献者，也是一个长期关注的话题。

## 10 IC互用方案

Suica 是 2013-03-23 推出的 **10 IC 互用计划**的支柱，该计划允许 Suica 持卡人利用全国任何参与的铁路/公交网络，并在任何参与的零售商处付款。完整的跨方案图位于[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]：

|卡|发行人 |地区 |
|---|---|---|
| **西瓜卡** | JR东日本 |大东京地区/日本北部|
|帕斯莫| PASMO有限公司|大东京地区私人铁路/巴士|
| ICOCA | JR西日本 |关西/西日本|
|基塔卡 | JR北海道 |北海道 |
|托伊卡 | JR 东海 |东海/名古屋|
|马纳卡 |名铁+名古屋市|名古屋/中部 |
|尼莫卡 |西铁 |福冈/九州|
|苏戈卡 | JR九州 |九州|
|早化研 |福冈市营地铁 |福冈市 |
|皮塔帕| Surutto KANSAI（后付费）|关西（与 ICOCA 重叠）|

发行人间结算通过 **Cyber​​ne**（中央センター — JR 东日本 + JR 集团 + 私营铁路财团运营的中央结算）运行，负责清算发行人之间的自动交易。

## 移动 Suica 世代

|一代|年份|主要特点 |
|---|---|---|
|仅限实体 Suica | 2001-2006 |基于卡；在 JR 售票机/月票亭收费 |
|移动 Suica (Osaifu Keitai) | 2006 |功能手机-智能手机 Osaifu Keitai 集成；配备 FeliCa 的 Android 设备 |
| Apple Pay Suica | 2016-10 | iPhone 7 onward;主要海外iPhone整合； SIM 区域独立性促进入境游客使用 |
|谷歌支付 / Wear OS | 2018 onward |通过 Google Pay 的 Android 非 Osaifu Keitai 设备 |
| Suica 互联网服务/基于网络的收费 |续 |通过网络查看卡/信用卡收费 |

Apple Pay Suica 2016  在结构上具有重要意义，因为它消除了将 Mobile Suica 限制在日本运营商 Osaifu Keitai 设备上的 SIM 区域限制，使海外发行的 iPhone 能够配置 Suica 钱包，并将其用于日本的交通和零售。这是主要的无现金入境旅游通道之一，并重塑了海外游客的支付预期。

## 关键绩效指标快照

|公制|阅读（最新公开披露）|
|---|---|
| Suica 累计发行量 | 100M+ 包括 Mobile Suica（JR 东日本 IR 材料）|
|每日交通水龙头计数 |按每日点击次数计算，日本最大的单一交通 IC 发行商 |
|移动 Suica 帐户 |数千万（JR东日本IR披露）|
|未清预付余额 |千亿日元规模（JR东日本有価证券报告书预付金披露）|
|年度零售挖掘价值|巨大的跨商户交易价值； JR 东日本 IR 突破电子货币收入领域 |

准确的同期 KPI 数据参见 JR 东日本 IR 材料； FinWiki 向发行人 IR 发送当前季度数据，而不是复制它们。

## 策略：以交通为基础的无现金平台

Suica 在 JR 东日本的战略逻辑：

1。 **以交通为基础的安装基础** — 每个 JR East 通勤者都是潜在的 Suica 持卡人；铁路通票转换为 Suica IC 卡推动了大规模分销，这是零售业同行无法比拟的。
2。 **破损/浮动经济学** - 大量未清余额是低成本的资金来源，并且对丢失/未退回的卡来说是损益破损的顺风车。
3。 **入境游客无现金** — Apple Pay 的启用使 Suica 成为日本事实上的入境游客无现金铁路。
4。 **JR 东日本集团交叉销售** — View Card 信用卡发行、JRE POINT 忠诚度集成、站内商场零售受理 — 全部以 Suica 为基础。
5。 **开放互用与闭环** — Suica 选择参与 10 IC 互用计划（而不是仅限 JR 的封闭式）在结构上为整个公交 IC 生态系统提供支持；权衡是通过 Cyber​​ne 管理发行人间结算的复杂性。
6。 **集中化（JRE PoiNT、Mobile Suica 与 JRE WALLET 集成）** — JR 东日本最近的战略方向是在 JRE 平台品牌下进行整合。

## 相关

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

## 来源

- JR 东日本 Suica 官方网站 (jreast.co.jp/suica)。
- JR 东日本移动 Suica 网站 (jreast.co.jp/mobilesuica)。
- JR 东日本公司网站和 IR 材料。
- FSA，`daisan.xlsx` — 第三方预付费工具发行人注册列表。
- FSA 预付支付工具政策页面。
- FeliCa Networks 公司网站 (felicanetworks.co.jp)。
- METI 无现金政策页面。

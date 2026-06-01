---
source: payments/pasmo-prepaid-tokyo-metro
source_hash: 6de350ef9f4db766
lang: zh
status: machine
fidelity: ok
title: "PASMO：东京私营铁路和巴士联盟预付费 IC"
translated_at: 2026-06-01T03:31:12.314Z
---

# PASMO：东京私营铁路和巴士联盟预付费 IC

## Wiki 路径

此条目位于 [[payments/INDEX|payments index]] 下，作为东京私铁/巴士联盟预付费发行者页面，与 FSA 注册表视图的 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 和 10 IC 互用方案上下文的 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid e-money economics]] 配对。与 [[payments/suica-prepaid-jr-east|Suica]]（JR 东日本同行和最大的互用同行）、[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]（零售锚定 FeliCa）和 [[payments/edy-rakuten-prepaid|Rakuten Edy]]（与平台无关的 FeliCa）进行比较。 PASMO 联盟涵盖东京地铁、都营地铁和主要私营铁路（东急、小田急、京王、东武、西武、京成、相铁、横滨港未来、多摩单轨电车等）以及都营巴士网络 — 请参阅[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]了解完整的运营商列表和 Cyber​​ne 发行人间结算。

## TL;DR

**PASMO** 是 **由东京私铁和巴士财团运营的预付费 IC 电子货币**，该财团以 **株式会社帕斯莫 (PASMO Co Ltd)** 为中心的多运营商财团，汇集了东京地铁、都营地铁和主要私铁/巴士运营商（东急、小田急、京王、东武、西武、京成、相铁、横滨港未来）的发行和结算铁路等）。 PASMO 从第一天起就推出了与[[payments/suica-prepaid-jr-east|Suica]]互操作的2007-03-18，并加入了2013-03-23的**10 IC 互用计划**，并且是大东京地区主要的非 JR 交通 IC。 PASMO 在 **FeliCa** 非接触式 IC 上运行，在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] 下注册为 **第三者型前払式支払手段**，并在东京各地和全国任何接受 10-IC 的 POS 上进行跨商户零售受理。 **移动 PASMO** 在 Android Osaifu Keitai 上推出了 2020-03 ，在 Apple Pay 上推出了 2020-10  — 明显晚于 Mobile Suica 的 2016 Apple Pay 推出，反映了多运营商协议的联盟协调成本。

## 发行人和财团结构

|尺寸|阅读|
|---|---|
|运营公司| 株式会社pasomo (PASMO Co Ltd) |
|联盟成员 |东京Metro地铁、都营地铁、东急、小田急、京王、东武、西武、京成、相铁、横滨港未来铁道、多摩单轨电车、京急、东京单轨电车、埼玉铁道、筑波快车、北总铁道等；完整列表请访问 pasmo.co.jp |
|巴士联盟成员|东急巴士、小田急巴士、京王巴士、东武巴士、西武巴士、京成巴士、横滨市营巴士等 |
| FSA 预付发行人 | PASMO Co Ltd 作为第三者型前払式支払手段发行人出现在 FSA `daisan.xlsx` |
|推出年份 | 2007-03-18（实体卡）、2020-03 （移动 PASMO Android）、2020-10 （Apple Pay）|
|技术 | FeliCa 非接触式 IC |
|移动轨道|移动PASMO（Osaifu Keitai → Apple Pay / Google Pay）|
|收费上限| ¥20,000 （典型 PASMO 卡）|
|发行人间结算 |跨 10 IC 发行人的 Cyber​​ne 系统 |

## 法律依据：前払式支払手段

PASMO 在[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]]第3 章下注册为**第三者型前払式支払手段**，因为其接受范围不仅限于联盟成员运营商，还延伸至**第三方零售商**（便利店、自动售货机、零售店、站内商场）。主要监管后果：

- PASMO Co Ltd 出现在[[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]]。
- 每半年向法律事务局缴纳**未使用余额存款**义务（供托）。
- **除非发行终止，否则不会向原始付款人退款** — PASMO 确实在财团柜台提供收费服务退款途径。
- **破损** — 游客购买的 PASMO 卡未归还会给发卡机构造成浮动和破损。
- PSA 预付门槛下的 AML/KYC 豁免。

## 联盟协调与单一发行人比较

PASMO 与 [[payments/suica-prepaid-jr-east|Suica]] 的主要结构区别在于，它是一个**多运营商联盟**，而不是单一发行人产品：

|尺寸| PASMO（联盟）| Suica（JR 东日本单一发行人）|
|---|---|---|
|发行机构 | PASMO Co Ltd（财团所有）| JR东日本直达 |
|移动铁路推出速度|速度较慢 - 需要联盟协调 |更快——单一发行人决策|
| Apple Pay 推出 | 2020-10 | 2016-10 |
|跨运营商接受（东京地铁/私营铁路内）|从第一天起所有联盟成员 |互用方案 (2013) |
|团卡联名|运营商特定（TOKYU CARD、OPkurejitto 等）|查看卡（JR 东日本）|
|忠诚度整合 |特定运营商（TOKYU POINT、OPポイント 等）| JRE点|
|移动 Suica 与移动 PASMO 互操作性 |两者都支持 Apple Pay；不能同时保持相同的平衡|相同 |

**联盟结构**是运营商覆盖广度的优势，但对产品演进的速度产生了协调税； Apple Pay 相对于 Mobile Suica 的延迟 4 年反映了这一点。

## 10 IC 互用方案

PASMO 和 Suica 的互用是2007 的基础性启动事件 - 这两者从 PASMO 第一天起就可以互操作，比更广泛的2013 10 IC 互用计划早了三年。完整的互用参与者列表位于[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]中。发行人间的结算通过 Cyber​​ne 进行。

## 移动PASMO几代

|一代|年份|主要特点 |
|---|---|---|
|仅限实体PASMO | 2007-2020 |基于卡；联盟成员售票机收费|
|安卓手机PASMO | 2020-03 | Osaifu Keitai FeliCa Android 设备 |
|苹果支付 PASMO | 2020-10 | iPhone 7 及以上版本；主要海外-iPhone整合启用|
|谷歌支付 PASMO | 2023 继续 | Android 非 Osaifu Keitai 设备 |

Apple Pay PASMO 的推出对于**非 JR 通勤者**尤其重要，他们之前被迫在保留实体 PASMO 或迁移到 Mobile Suica（可在 JR 东日本和联盟成员网络上使用，但不携带 PASMO 通勤卡）之间做出选择。

## 关键绩效指标快照

|公制|阅读（公开披露）|
|---|---|
| PASMO累计发行量|数千万（PASMO Co Ltd 披露）|
|每日交通触碰次数 |仅次于 Suica 的大东京地区第二大单一交通 IC 发行商 |
|铁路/巴士运营商联盟成员|数十个（铁路+公共汽车组合）|
|移动PASMO账户| 2020 发布后不断增长；联盟报告增量里程碑|
|未清预付余额 |材料数十亿日元规模|

确切的周期 KPI 在 PASMO Co Ltd/财团成员中披露，而不是集中投资者报告。

## 策略：财团锚定的东京无现金

PASMO在联盟层面的战略逻辑：

1。 **联盟效率** — 跨多个私营铁路/公共汽车运营商的单一 IC 避免了每个运营商的 IC 发行成本。
2。 **JR 东日本共存** — 与 Suica 的互操作性从第一天起就是战略性的，而不是可选的；对于通勤东京来说，非互用可能会带来商业上的致命后果。
3。 **移动铁路追赶** - 2020 移动 PASMO + Apple Pay 弥补了与移动 Suica 相比 4 年的劣势，对于保持非 JR 通勤者的钱包地位至关重要。
4。 **入境游客** — 通过 Apple Pay 的移动 PASMO 使东京的海外 iPhone 用户可以选择 PASMO 或 Suica 钱包；趋同有利于 Suica 解决游客违约问题，但 PASMO 在不使用 JR 铁路的游客中保留了很大份额。
5。 **特定于运营商的联名卡** — TOKYU CARD、OPkurejitto、Keio Pasport Card 等锚定每个运营商的通勤和忠诚度集成，而无需集中在一个信用卡发行机构之下。

## 相关

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/suica-prepaid-jr-east]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 来源

- PASMO官方网站（pasmo.co.jp）。
- 东京地铁公司网站 (tokyometro.jp)。
- 都营地铁/东京都交通局网站 (kotsu.metro.tokyo.jp)。
- FSA，“daisan.xlsx” — 第三方预付费工具发行人注册列表（PASMO Co Ltd 条目）。
- FSA 预付支付工具政策页面。
- FeliCa Networks 公司网站 (felicanetworks.co.jp)。
- METI 无现金政策页面。

---
source: payments/edy-rakuten-prepaid
source_hash: 818accbddde52b11
lang: zh
status: machine
fidelity: ok
title: "Rakuten Edy：与平台无关的 FeliCa 预付费电子货币"
translated_at: 2026-06-01T03:31:12.259Z
---
# Rakuten Edy：与平台无关的 FeliCa 预付费电子货币

## Wiki 路径

此条目位于 [[payments/INDEX|payments index]] 下，作为 Rakuten Edy 预付费发行人页面，与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对进行 FSA 注册表视图，并与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配对进行四类方案比较。与零售锚定 ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) 和交通锚定 ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) 预付费系统相比，Edy 是**与平台无关的 FeliCa 预付费**，没有零售或铁路母锚，这是其主要结构区别。企业/集团主播为[[JapanFG/rakuten-edy|楽天Edy株式会社]]（FSA注册的第三方预付发行人，乐天集团旗下法人番号3010901038102, 注册的2016-07-21）；相关乐天支付产品包括[[JapanFG/rakuten-card|Rakuten Card]]（Edy自动充值信用卡联名产品）和楽天ペイ（扫码支付应用程序）。 FeliCa技术骨干：[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|FeliCa scheme architecture]]。

## 要点摘要

**Rakuten Edy (楽天Edy)** 是日本**与主要平台无关的 FeliCa 预付费电子货币**，与零售锚定 ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) 和交通锚定 ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) 预付费系统不同。 2001  最初是由 **bitWallet (ビトワaretto株式会社)**（NTT Docomo + Sony + 银行财团的衍生公司）推出的，Edy 是日本**第一个主要的 FeliCa 电子货币产品**，比 WAON / nanaco 早六年，比 Suica / PASMO 零售早几年被接受。 **被乐天收购2009-11**（全资子公司2010）并更名为Rakuten Edy 2012-06, 特许经营权现在由**楽天Edy株式会社（Rakuten Edy Co Ltd）**作为在FSA注册的第三者型预付费发行人（公司编号3010901038102, 注册）运营2016-07-21）。 Edy 的显着特点是**没有单一商户锚点**——在平台中立的基础上接受便利店（Lawson、FamilyMart、MiniStop、Daily Yamazaki 和 Seicomart）、药店、餐馆、自动售货机和其他商户，以乐天卡自动充值和Rakuten Point（乐天积分）集成作为主要的客户获取渠道。

## 发行人和运营结构

| 项目 | 内容 |
|---|---|
|运营公司|乐天Edy有限公司|
| 母集团 | [[JapanFG/rakuten-card|Rakuten Card]] / 乐天集团 |
| FSA 预付费注册 |第三方预付支付工具 |
|法人号码 | 3010901038102 |
| FSA 注册日期 | 2016-07-21|
|原创运营商| bitWallet（BitWallet Co., Ltd.）— NTT Docomo + 索尼 + 银行财团 |
|乐天收购| 2009-11 （宣布收购）、2010 （全资子公司）、2012-06 （更名为 Rakuten Edy） |
|推出年份 | 2001 (bitWallet原创推出) |
|技术 | FeliCa 非接触式 IC |
|移动轨道| Osaifu Keitai Edy（Android FeliCa 设备）；与 Suica / PASMO 相比，Apple Pay 支持有限 |
|收费上限|每张卡 ¥50,000  |
|分销|卡、手机、Edy 嵌入式信用卡（乐天卡和其他联名卡）|

## 法律依据：第三方预付费

Rakuten Edy 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 章 3  下注册为 **第三方预付费支付工具**，因为接受服务是在乐天自身服务之外的第三方商家进行的。主要监管后果：

- Rakuten Edy, Inc. 作为注册第三方预付费发行人出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] 中。
- 每半年向法务局缴纳**未使用余额押金**（押金）。
- **除非发行终止，否则不会退还给原始付款人** — Edy 余额不可退还为现金。
- **破损** — 长期未兑换余额模式（Edy 卡被遗忘，余额未消耗）；为发行人损益做出贡献。
- PSA 预付门槛下免除部分 AML/KYC 要求。

## 先驱者/传统地位与进入者继任者

Edy的结构地位是日本FeliCa电子货币的**先驱/遗产**：

|年份|活动 |
|---|---|
| 2001 | bitWallet 推出 Edy — 日本首个主要 FeliCa 电子货币 |
| 2001-11 | JR 东日本推出 Suica |
| 2007 | AEON 推出 WAON，Seven & i 推出 nanaco |
| 2009-11 |乐天收购 bitWallet |
| 2010 | bitWallet 全乐天子公司 |
| 2012-06 |更名为 Rakuten Edy |
| 2013 | 10 IC互用方案上线（中转预付费） |
| 2016-07 | Edy目前在FSA注册为楽天Edy株式会社|

当 WAON 和 nanaco 于 2007,  推出时，Edy 已是 FeliCa 电子货币品牌——但 WAON（AEON 商场/超市/药店/MiniStop）和 nanaco（7-11/Ito-Yokado/Sogo & Seibu）的**零售锚定网络效应**逐渐将 Edy 从许多特定商家的独家合作伙伴关系中取代。Edy 的回应是将其定位为**与平台无关的替代方案**——许多商家可以接受，无需单一零售商锁定。

## 验收足迹

|等级 |验收|
|---|---|
|便利店| Lawson、FamilyMart、MiniStop、Daily Yamazaki、Seicomart — 以及历史上的 7-11（但 7-11 现在普遍青睐 nanaco）|
|药店|精选连锁店 |
|餐厅/快餐|精选连锁店（麦当劳之前在某些时期接受过Edy）|
|自动售货机|可口可乐等——自动售货机 FeliCa 验收 |
|加油站 |精选电台 |
|零售 |各类平台中立商家|
|移动轨道| Osaifu Keitai Android FeliCa 设备 |

## 乐天卡 + Edy + 乐天积分整合

收购乐天后，Edy 的主要客户获取杠杆是 **乐天卡 + Edy + 乐天积分** 三角形：

|组件|角色 |
|---|---|
| [[JapanFG/rakuten-card\|Rakuten Card]] |嵌入Edy IC的信用卡联名卡；从乐天卡自动充值至 Edy |
|伊迪 | FeliCa 预付费支出铁路 |
|乐天积分 (楽天ポイinto) |通过 Edy 消费赚取的忠诚度货币（通常以 0.5% 为基础，促销期间更高）|

这种三向集成在结构上类似于 [[payments/waon-prepaid-aeon|AEON Card + WAON + WAON POINT]] 和 [[payments/nanaco-prepaid-seven-i|セブンカード・プラス + nanaco + nanacoポイント]] 三角形，但没有单一的零售锚母公司。权衡是**更广泛的与平台无关的接受度**和**较弱的零售锚定网络效应**。

## 关键绩效指标快照

|公制|阅读|
|---|---|
|累计Edy发行量| 2001 以来累计素材数千万|
|年度交易笔数 |日本预付电子货币中的中端；低于WAON/nanaco/Suica/PASMO领先同行|
|受理商户积分 |全国范围内大量（乐天Edy网站披露）|
|未清预付余额 |数十亿日元规模（乐天集团披露）|
|乐天积分整合 | 0.5% Edy 支出的基本收入（促销期更高）|

确切的数字见乐天集团 IR 材料和 Rakuten Edy 网站披露。

## 策略：与 Rakuten 集成的平台无关的 FeliCa

Rakuten Edy 的战略角色：

1。 **与平台无关的接受度** - 没有单一的零售/铁路母公司约束允许广泛的跨商户接受。
2。 **乐天生态系统集成** — 乐天卡自动充值、乐天积分忠诚度集成、乐天生态系统交叉推广。
3。 **传统安装基础** — WAON / nanaco 卡基础提供剩余客户足迹。
4。 **代码支付是补充，而不是替代** — 楽天ペイ代码支付服务于不同的用例； Edy 仍然是乐天生态系统的 FeliCa 龙头导轨。
5。 **减少但持久** - 相对于 WAON / nanaco / Suica 同行，Edy 的市场份额有所下降，但 FeliCa Tap Rail 和 Rakuten 生态系统集成维持了有意义的交易量。

## 相关

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/suica-prepaid-jr-east]]
- [[payments/pasmo-prepaid-tokyo-metro]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[JapanFG/rakuten-edy]]
- [[JapanFG/rakuten-card]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 来源

- Rakuten Edy 官方网站 (edy.rakuten.co.jp)。
- 乐天集团公司网站 (corp.rakuten.co.jp)。
- 乐天卡公司网站 (rakuten-card.co.jp)。
- FSA、`daisan.xlsx` — 第三方预付费票据发行人注册列表（楽天Edy株式会社，公司编号3010901038102, 注册为2016-07-21）。
- FSA 预付支付工具政策页面。
- FeliCa Networks 公司网站 (felicanetworks.co.jp)。
- METI 无现金政策页面。

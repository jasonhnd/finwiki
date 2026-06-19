---
source: payments/edy-rakuten-prepaid
source_hash: baf73cd415770c05
lang: zh
status: machine
fidelity: ok
title: "Rakuten Edy: platform-agnostic FeliCa prepaid e-money"
translated_at: 2026-06-19T06:09:18.196Z
---

# Rakuten Edy: platform-agnostic FeliCa prepaid e-money

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Rakuten Edy prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme comparison. Compare with retail-anchored ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) and transit-anchored ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) prepaid systems — Edy is the **platform-agnostic FeliCa prepaid** without a retail-or-rail parent anchor, which is its principal structural distinction. Corporate / group anchor is [[payment-firms/rakuten-edy|楽天Edy株式会社]] (FSA-registered third-party prepaid issuer, 法人番号 3010901038102, registered 2016-07-21 under Rakuten group); related Rakuten payment products include [[card-issuers/rakuten-card|Rakuten Card]] (credit-card co-brand with Edy auto-charge) and 楽天ペイ (code-payment app). FeliCa technology backbone: [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|FeliCa scheme architecture]].

## TL;DR

**Rakuten Edy（楽天Edy）** 是日本 **主要的平台无关型 FeliCa 预付式电子货币**，区别于以零售为锚（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）和以交通为锚（[[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]）的预付式系统。Edy 最初于 2001  由 **bitWallet（ビットワレット株式会社）** ── 一家 NTT DoCoMo + 索尼 + 银行财团分拆而来的公司 ── 推出，是日本 **首个主要的 FeliCa 电子货币产品**，比 WAON / nanaco 早六年，比 Suica / PASMO 的零售受理早数年。**于 2009-11 被乐天收购**（2010 完全子公司化），并于 2012-06,  更名为 Rakuten Edy，此后该业务现由 **楽天Edy株式会社（Rakuten Edy Co Ltd）** 作为在 FSA 注册的 第三者型 预付式发行人（法人番号 3010901038102, 注册 2016-07-21）运营。Edy 的显著特征是 **没有单一商户锚**，其受理以平台中立的方式覆盖便利店（罗森、全家、MiniStop、Daily Yamazaki ── 以及 Seicomart）、药妆店、餐厅、自动售货机及其他商户，并以乐天信用卡自动充值与 楽天ポイント（Rakuten Points）整合作为主要的获客通道。

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Operating company | 楽天Edy株式会社（Rakuten Edy Co Ltd） |
| Group parent | [[card-issuers/rakuten-card\|Rakuten Card]] / Rakuten Group |
| FSA prepaid registration | 第三者型前払式支払手段 |
| Corporate number | 3010901038102 |
| FSA registration date | 2016-07-21 |
| Original operator | bitWallet（ビットワレット株式会社）── NTT DoCoMo + 索尼 + 银行财团 |
| Rakuten acquisition | 2009-11 （宣布收购）、2010 （完全子公司化）、2012-06 （更名为 Rakuten Edy） |
| Launch year | 2001 （bitWallet 最初推出） |
| Technology | FeliCa 非接触 IC |
| Mobile rail | Osaifu Keitai Edy（Android FeliCa 设备）；Apple Pay 支持相比 Suica / PASMO 较为有限 |
| Charge ceiling | 每张卡 ¥50,000 |
| Distribution | 卡、移动端、内嵌 Edy 的信用卡（乐天卡及其他联名卡） |

## Legal basis: 第三者型 prepaid

Rakuten Edy 注册为 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3 章下的 **第三者型前払式支払手段**，因为其受理发生在乐天自身服务之外的第三方商户。主要的监管后果：

- 楽天Edy株式会社 作为注册的第三者型预付式发行人列于 [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] 之中。
- 向法务局承担每半年一次的 **未使用余额提存（供託）** 义务。
- **除发行终止时外不向原付款人退款** ── Edy 余额不可退为现金。
- **失效余额（breakage）** ── 长期未兑付余额的模式（Edy 卡被遗忘，余额未被消费）；对发行人损益有贡献。
- 在 PSA 预付式阈值下的 AML / KYC 豁免。

## Pioneer / legacy position vs successor entrants

Edy 的结构性定位是日本 FeliCa 电子货币的 **先驱／遗产**：

| Year | Event |
|---|---|
| 2001 | bitWallet 推出 Edy ── 日本首个主要 FeliCa 电子货币 |
| 2001-11 | JR 东日本推出 Suica |
| 2007 | 永旺推出 WAON，Seven & i 推出 nanaco |
| 2009-11 | 乐天收购 bitWallet |
| 2010 | bitWallet 完全子公司化为乐天子公司 |
| 2012-06 | 更名为 Rakuten Edy |
| 2013 | 10 IC 互通方案推出（交通预付式） |
| 2016-07 | Edy 现行 FSA 注册（作为 楽天Edy株式会社） |

当 WAON 与 nanaco 在 2007, 推出时，Edy 已是确立的 FeliCa 电子货币品牌 ── 但 WAON（永旺购物中心／超市／药妆店／MiniStop）与 nanaco（7-Eleven／伊藤洋华堂／崇光西武）的 **以零售为锚的网络效应** 逐渐将 Edy 从许多特定商户的独家合作中挤出。Edy 的应对是定位为 **平台无关型的替代方案** ── 可在众多商户受理而无单一零售商锁定。

## Acceptance footprint

| Tier | Acceptance |
|---|---|
| Convenience stores | 罗森、全家、MiniStop、Daily Yamazaki、Seicomart ── 以及历史上的 7-Eleven（但 7-Eleven 现在通常偏好 nanaco）|
| Drugstores | 部分连锁 |
| Restaurants / fast food | 部分连锁（麦当劳此前在某些时期受理 Edy）|
| Vending machines | 可口可乐等 ── 自动售货机的 FeliCa 受理 |
| Gas stations | 部分加油站 |
| Retail | 各类平台中立的商户 |
| Mobile rail | Osaifu Keitai Android FeliCa 设备 |

## Rakuten Card + Edy + Rakuten Points integration

乐天收购后 Edy 的主要获客杠杆是 **乐天卡 + Edy + 楽天ポイント** 三角：

| Component | Role |
|---|---|
| [[card-issuers/rakuten-card\|Rakuten Card]] | 内嵌 Edy IC 的信用卡联名；从乐天卡向 Edy 自动充值 |
| Edy | FeliCa 预付式消费通道 |
| Rakuten Points（楽天ポイント）| 通过 Edy 消费赚取的忠诚度货币（通常 0.5% 基础，促销期间更高）|

这一三方整合在结构上类似于 [[payments/waon-prepaid-aeon|AEON Card + WAON + WAON POINT]] 与 [[payments/nanaco-prepaid-seven-i|セブンカード・プラス + nanaco + nanacoポイント]] 三角，但没有单一的零售锚母公司。其权衡在于以 **更弱的零售锚网络效应** 换取 **更广的平台无关型受理**。

## KPI snapshot

| Metric | Reading |
|---|---|
| Cumulative Edy issuance | 自 2001 以来累计达数千万张规模 |
| Annual transaction count | 处于日本预付式电子货币的中等层级；低于 WAON / nanaco / Suica / PASMO 领先同业 |
| Acceptance merchant points | 全国范围相当可观（Rakuten Edy 网站披露）|
| Outstanding prepaid balance | 数十亿日元规模（乐天集团披露）|
| Rakuten Points integration | Edy 消费的 0.5% 基础赚取（促销期间更高）|

确切数字见乐天集团 IR 资料及 Rakuten Edy 网站披露。

## Strategy: platform-agnostic FeliCa with Rakuten integration

Rakuten Edy 的战略角色：

1. **平台无关型受理** ── 没有单一零售／交通母公司约束，得以实现广泛的跨商户受理。
2. **乐天生态整合** ── 乐天卡自动充值、楽天ポイント忠诚度整合、乐天生态交叉推广。
3. **遗产装机基础** ── WAON / nanaco 之前的卡基础提供了残留的客户覆盖。
4. **码支付为补充而非替代** ── 楽天ペイ码支付服务于不同的使用场景；Edy 仍是乐天生态的 FeliCa 触碰通道。
5. **缩减但持久** ── 相对于 WAON / nanaco / Suica 同业，Edy 的市场份额已被侵蚀，但 FeliCa 触碰通道与乐天生态整合维持了可观的交易量。

## Related

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
- [[payment-firms/rakuten-edy]]
- [[card-issuers/rakuten-card]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Edy official site (edy.rakuten.co.jp).
- Rakuten Group corporate site (corp.rakuten.co.jp).
- Rakuten Card corporate site (rakuten-card.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (楽天Edy株式会社, corporate number 3010901038102, registered 2016-07-21).
- FSA prepaid payment instruments policy page.
- FeliCa Networks corporate site (felicanetworks.co.jp).
- METI cashless policy page.

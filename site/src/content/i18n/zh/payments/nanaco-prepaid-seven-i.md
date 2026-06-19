---
source: payments/nanaco-prepaid-seven-i
source_hash: b3714cc0eeab2d1d
lang: zh
status: machine
fidelity: ok
title: "nanaco：以 Seven & i 集团便利店为锚的预付电子货币"
translated_at: 2026-06-19T06:09:18.110Z
---

# nanaco：以 Seven & i 集团便利店为锚的预付电子货币

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下，是以 Seven & i 为锚的预付发行体页面，在 FSA 登记簿视角上与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对，在零售锚点的正面比较上与 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] 配对。请与 [[payments/waon-prepaid-aeon|WAON]]（永旺对应物）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]（FeliCa 同业方案）和 [[payments/famipay-valucreate-strategy|FamiPay]]（便利店码支付对应物）比较。发行体／集团锚点为 [[card-issuers/seven-card-service|Seven Card Service]]（FSA 登记的预付发行体）、[[payment-firms/seven-payment-service|Seven Payment Service]]（结算服务）、[[regional-banks/seven-bank|Seven Bank]]（集团银行轨道）和 [[retail/seven-and-i-hd|Seven & i Holdings]]；忠诚度整合就 nanaco 积分经济性路由至 [[loyalty/japan-points-landscape|Japan points landscape]]。

## TL;DR

**nanaco** 是 Seven & i 控股集团 **以便利店为锚的预付电子货币**，于 2007-04  推出，与同期的 WAON 推出并行。由 [[card-issuers/seven-card-service|株式会社セブン・カードサービス]]（FSA 登记的第三者型前払式支払手段发行体，法人番号 4010001088278, ，2007-02-22 登记）发行，nanaco 运行于 **FeliCa** 非接触 IC 上，是 **20,000 家以上 Seven-7 Japan 店铺网络** 以及伊藤洋华堂超市、崇光西武百货店、阿卡佳本铺、Denny's Japan 及广泛的集团外商户布局中占主导地位的预付电子货币。结算在 [[banking/INDEX|Seven & i financial-services platform]] 之下经由 [[payment-firms/seven-payment-service|Seven Payment Service]] 运行，并与 [[regional-banks/seven-bank|Seven Bank]]（集团银行轨道、ATM 充值）及用于自动充值的 Seven Card Plus 信用卡联名卡并列。nanaco 积分忠诚度货币以 1:1  转换为可消费余额，与 WAON POINT 模式并行。

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Brand owner | Seven & i Holdings |
| FSA prepaid issuer of record | [[card-issuers/seven-card-service\|株式会社セブン・カードサービス]] |
| Corporate number | 4010001088278 |
| FSA registration date | 2007-02-22 |
| Settlement / payment services | [[payment-firms/seven-payment-service\|株式会社セブン・ペイメントサービス]] |
| Group bank rail | [[regional-banks/seven-bank\|株式会社セブン銀行]] (ATM charge, auto-charge) |
| Group card rail | セブンカード・プラス (Visa / JCB co-brand with nanaco IC embedded) |
| Launch year | 2007-04 |
| Technology | FeliCa contactless IC |
| Mobile rail | Mobile nanaco (Osaifu Keitai), nanaco app, Apple Pay (limited devices via Wallet integration) |
| Charge ceiling | ¥50,000 per card |
| Single charge max | ¥29,000 typical |

## Legal basis: 前払式支払手段 (third-party prepaid payment instrument)

与 [[payments/waon-prepaid-aeon|WAON]] 一样，nanaco 在 [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3  章的预付框架下登记为 **第三者型前払式支払手段**。主要监管后果：

- [[card-issuers/seven-card-service|Seven Card Service]] 在 FSA（关东财务局）登记，并列于 [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]]。
- 每半年的 **未使用余额供托** 义务：当超过阈值（¥10M）时，将未使用余额结余的一半向法务局（供托）作为用户资金保护进行供托。
- 除发行终止外，**不向原付款人退款**。
- 对休眠／遗失卡的 **失效收益（breakage）** 计入发行体损益；Seven & i 在集团 IR 中披露余额数字。
- 在 PSA 预付阈值下适用 AML／KYC 豁免。

2023 PSA 修订下与 [[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] 框架的结构性区别使 nanaco 留在预付通道中 — 价值仅限店内，不可点对点转移。

## Acceptance footprint

受理网络首先按 Seven & i 集团零售锚点构建，然后向集团外扩展：

| Tier | Description | Examples |
|---|---|---|
| Inner — Seven & i Group | Group convenience-store and retail anchors | 7-Eleven Japan (~21,000 stores), Ito-Yokado, Sogo & Seibu, Akachan Honpo, Denny's Japan, York Mart, York Benimaru |
| Middle — Group bank rail | ATM charge, auto-charge via Seven Bank and Seven Card | [[regional-banks/seven-bank\|Seven Bank]] ATMs (countrywide, including non-Seven locations), Seven Bank account auto-charge |
| Outer — Cross-merchant | Non-group merchants accepting nanaco tap | Tower Records (formerly), gas stations, drugstores, fast food, Pia ticket counters |
| Mobile rail | Apple Pay / Osaifu Keitai global FeliCa terminals | Any FeliCa-accepting POS |
| Tax / utility payment | nanaco-specific receipt payment use case | Income tax / property tax payment via 7-Eleven レジ (using nanaco to pay 払込票) — a distinctive nanaco-only flow |

**税／公共费用的払込票支付** 用例是一项结构上重要的 nanaco 特有流程：由于 7-Eleven 在收银台受理公款払込票（税单、公共费用账单）且该处受理 nanaco，纳税人可就这些支付赚取 nanaco 积分 — 这是 [[payments/waon-prepaid-aeon|WAON]] 不能同等提供的流程，因为永旺不受理同样范围的公共费用／税务払込票。

## KPI snapshot

| Metric | Reading (most recent public disclosure) |
|---|---|
| Cumulative issued cards / IDs | Tens of millions; Seven & i 統合報告書 reports cumulative nanaco issuance among top-3 retail prepaid brands by card count |
| Annual transaction count | Top-tier retail-prepaid by tap count at convenience-store registers (very high tap-frequency anchor) |
| 7-Eleven store coverage | ~21,000 stores nationwide (all accept nanaco) |
| Group acceptance points | Substantial — Seven & i full retail footprint |
| nanacoポイント issuance | ¥200 = 1 point at 7-Eleven typical base rate |

逐期的确切交易金额／件数在 [[retail/seven-and-i-hd|Seven & i HD]] 分部 IR 及 [[card-issuers/seven-card-service|Seven Card Service]] 报告中披露 — FinWiki 引用 IR 文档而非重现季度数字。

## Strategy: convenience-store cashless anchor

nanaco 在 Seven & i 内部的战略角色：

1. **便利店收银速度** — 在峰值吞吐的 7-Eleven 收银台，FeliCa 触碰比码支付的二维码扫描更快；nanaco 保有码支付难以撼动的结构性速度优势。
2. **税／公共费用払込票的无现金转换** — 通过 7-Eleven 收银台受理，处于将税／公共费用现金支付转换为无现金的独特位置。
3. **集团金融服务交叉销售** — nanaco 的使用为 [[regional-banks/seven-bank|Seven Bank]] 开户及 Seven Card 信用卡发行供给。
4. **入境游客受理** — Mobile nanaco／Apple Pay 触达在日本的海外 iPhone 用户；结合 Seven & i 高密度的城市店铺网络，这是一条有意义的游客无现金通道。
5. **与码支付共存** — Seven & i 集团也在 7-Eleven 收银台运营 PayPay 受理、乐天 Pay、d 支付、au PAY；nanaco 是多轨受理中 **以集团忠诚度为锚的** 轨道，而非码支付竞争对手。

2019 7pay 事件（在安全失败后被撤回的短命 7pay 码支付产品）强化了 Seven & i 将 nanaco 定位为持久的集团无现金锚点、而非再次尝试 Seven 品牌码支付的立场。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/waon-prepaid-aeon]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/seven-card-service]]
- [[payment-firms/seven-payment-service]]
- [[regional-banks/seven-bank]]
- [[retail/seven-and-i-hd]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- nanaco official site (nanaco-net.jp).
- Seven Card Service corporate site (7card.co.jp).
- Seven & i Holdings corporate site (7andi.com) — group structure and IR.
- Seven-Eleven Japan corporate site (sej.co.jp) — store network and register acceptance.
- Seven Bank corporate site (7bank.co.jp) — group bank rail and ATM charge.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Seven Card Service entry, registered 2007-02-22).
- FSA prepaid payment instruments policy page.
- METI cashless policy page.

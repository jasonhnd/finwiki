---
source: payments/nanaco-prepaid-seven-i
source_hash: 3474b1a3e75c4ec0
lang: zh
status: machine
fidelity: ok
title: "nanaco：Seven & i 集团便利店锚定预付电子货币"
translated_at: 2026-06-01T03:31:12.303Z
---
# nanaco：Seven & i 集团便利店锚定预付电子货币

## Wiki 路径

本条目位于 [[payments/INDEX|支付索引]]，作为 Seven & i 集团锚定的预付发行人页面，并与 [[payments/prepaid-payment-instrument-issuers-japan-index|预付式支付工具发行人登记索引]] 配套，说明金融厅登记口径。可与 [[payments/waon-nanaco-retail-prepaid-comparison|WAON 与 nanaco 零售预付比较]]、[[payments/waon-prepaid-aeon|WAON]]、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|交通预付经济学]] 和 [[payments/famipay-valucreate-strategy|FamiPay]] 对照。发行人与集团锚点包括 [[card-issuers/seven-card-service|Seven Card Service]]、[[payment-firms/seven-payment-service|Seven Payment Service]]、[[regional-banks/seven-bank|Seven Bank]] 和 [[retail/seven-and-i-hd|Seven & i Holdings]]。

## TL;DR

**nanaco** 是 Seven & i Holdings 集团的**便利店锚定型预付电子货币**，2007-04 推出，与 WAON 同期形成日本零售集团预付竞争格局。它由 [[card-issuers/seven-card-service|Seven Card Service]] 发行，作为金融厅登记的第三方预付式支付工具发行人，法人编号为 4010001088278，登记日期为 2007-02-22。nanaco 运行在 **FeliCa** 非接触 IC 上，覆盖 20,000 家以上 7-Eleven Japan 门店，并扩展至 Ito-Yokado、Sogo & Seibu、Akachan Honpo、Denny's Japan 及集团外商户。结算和集团金融服务通过 [[payment-firms/seven-payment-service|Seven Payment Service]]、[[regional-banks/seven-bank|Seven Bank]] 和 Seven Card 系列信用卡协同。nanaco point 可按 1:1 转化为可消费余额，经济结构接近 WAON POINT。

## 发行人与运营结构

| 维度 | 解读 |
|---|---|
| 品牌所有者 | Seven & i Holdings |
| 金融厅预付发行主体 | [[card-issuers/seven-card-service|Seven Card Service]] |
| 法人编号 | 4010001088278 |
| 金融厅登记日期 | 2007-02-22 |
| 结算 / 支付服务 | [[payment-firms/seven-payment-service|Seven Payment Service]] |
| 集团银行轨道 | [[regional-banks/seven-bank|Seven Bank]]（ATM 充值、自动充值） |
| 集团卡轨道 | Seven Card Plus（Visa / JCB 联名，内嵌 nanaco IC） |
| 推出年份 | 2007-04 |
| 技术 | FeliCa 非接触 IC |
| 移动轨道 | Mobile nanaco、Osaifu Keitai、nanaco app、Apple Pay 部分设备支持 |
| 充值上限 | 每张卡 50,000 日元 |
| 单次充值上限 | 通常为 29,000 日元 |

## 法律基础：第三方预付式支付工具

与 [[payments/waon-prepaid-aeon|WAON]] 一样，nanaco 依据 [[payments/funds-transfer-vs-prepaid-boundary|《资金结算法》]]第 3 章预付框架登记为**第三方预付式支付工具**。主要监管后果包括：

- [[card-issuers/seven-card-service|Seven Card Service]] 在金融厅登记，并出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] 中。
- 半年一次的**未使用余额保证金**义务：当未使用余额超过法定阈值时，发行人需向法务局供托一定比例资金，以保护用户余额。
- 除发行终止等例外情形外，原则上不得向原付款人现金退款。
- 休眠卡、遗失卡和未使用余额可能形成发行人损益中的 breakage。
- 在预付工具限额和闭环 / 第三方边界内，适用相应 AML / KYC 处理。

nanaco 与 2023 年《资金结算法》修订后的稳定币 / 电子支付工具框架不同：其价值只能在商户网络内消费，不能作为点对点转移工具。

## 受理网络

nanaco 的受理网络先以 Seven & i 集团零售网络为核心，再向集团外商户扩张：

| 层级 | 说明 | 例子 |
|---|---|---|
| 内圈：Seven & i 集团 | 集团便利店和零售锚点 | 7-Eleven Japan（约 21,000 家）、Ito-Yokado、Sogo & Seibu、Akachan Honpo、Denny's Japan、York Mart、York Benimaru |
| 中圈：集团银行轨道 | ATM 充值、Seven Bank 与 Seven Card 自动充值 | [[regional-banks/seven-bank|Seven Bank]] ATM、Seven Bank 账户自动充值 |
| 外圈：跨商户受理 | 集团外 nanaco 触碰支付商户 | 唱片店、加油站、药妆店、快餐、票务柜台等 |
| 移动轨道 | Apple Pay / Osaifu Keitai 对应 FeliCa 终端 | 支持 FeliCa 的 POS |
| 税费 / 公共事业支付 | nanaco 特有的票据支付用例 | 通过 7-Eleven 收银台使用 nanaco 支付所得税、固定资产税和公共事业账单 |

税费与公共事业票据支付是 nanaco 的结构性特色。由于 7-Eleven 接受纳税通知和公共事业账单等公共款项收银，并可使用 nanaco 支付，消费者可以将原本现金化的柜台支付转化为无现金支付。[[payments/waon-prepaid-aeon|WAON]] 不具备同等范围的税费 / 公共事业受理场景。

## KPI 轮廓

| 指标 | 解读 |
|---|---|
| 累计发行卡 / ID | 数千万量级；Seven & i 综合报告通常将 nanaco 列为日本主要零售预付品牌之一 |
| 年交易笔数 | 便利店收银台高频触碰支付使其处于零售预付上位层 |
| 7-Eleven 门店覆盖 | 全国约 21,000 家门店均支持 nanaco |
| 集团受理点 | 覆盖 Seven & i 主要零售网络 |
| nanaco point 发行 | 7-Eleven 典型基础返还率为 200 日元 1 点 |

具体交易额、交易笔数和期间变动由 [[retail/seven-and-i-hd|Seven & i HD]] 及 [[card-issuers/seven-card-service|Seven Card Service]] 相关公开资料披露；FinWiki 引用公开资料而不复制每季数值。

## 战略定位：便利店无现金锚点

nanaco 在 Seven & i 集团内的战略角色包括：

1. **便利店收银速度**：FeliCa 触碰支付在高峰时段 7-Eleven 收银台具有速度优势。
2. **税费 / 公共事业票据无现金化**：通过 7-Eleven 收银台将现金缴纳场景转化为电子货币支付。
3. **集团金融服务交叉销售**：nanaco 使用可带动 [[regional-banks/seven-bank|Seven Bank]] 账户和 Seven Card 信用卡。
4. **访日游客受理**：移动 nanaco / Apple Pay 与高密度门店网络结合，形成城市消费场景。
5. **与码支付共存**：Seven & i 同时受理 PayPay、Rakuten Pay、d Barai、au PAY 等码支付；nanaco 是集团忠诚度锚定轨道，而非单纯的码支付竞争者。

2019 年 7pay 事件强化了 Seven & i 对 nanaco 作为长期集团无现金锚点的定位，而不是重新依赖 Seven 品牌码支付。

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
- Seven & i Holdings corporate site (7andi.com), group structure and IR.
- Seven-Eleven Japan corporate site (sej.co.jp), store network and register acceptance.
- Seven Bank corporate site (7bank.co.jp), group bank rail and ATM charge.
- FSA, `daisan.xlsx`, third-party prepaid-instrument issuer registration list.
- FSA prepaid payment instruments policy page.
- METI cashless policy page.

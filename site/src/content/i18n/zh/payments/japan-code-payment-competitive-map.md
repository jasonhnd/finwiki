---
source: payments/japan-code-payment-competitive-map
source_hash: e3cdd6c74dfc41e0
lang: zh
status: machine
fidelity: ok
title: "日本码支付竞争地图"
translated_at: 2026-06-01T03:31:12.270Z
---
# 日本码支付竞争地图

## 概览

日本码支付市场可被记录为钱包生态、商户受理网络、积分预算以及结算 / 资金转移能力之间的竞争。METI 的 2025  无现金支付发布显示，无现金比率为 **58.0%**，并将码支付识别为**无现金支付金额的 10.2%，即 16.6  万亿日元**；无现金推进协会则发布码支付趋势调查，覆盖店铺金额 / 件数、汇款、充值余额和 MAU。

本页将码支付分析归入 [[payments/INDEX|支付领域]]，并把 [[payments/INDEX|payments INDEX]] 中的消费者钱包运营商与 [[payment-firms/netstars|Netstars]]、[[payments/psp-merchant-settlement-risk|商户结算风险]] 等 PSP / 网关基础设施连接起来。

## 竞争路线

| 路线 | 核心路径 | 战略解读 |
|---|---|---|
| SoftBank / LY 钱包 | [[payment-firms/paypay|PayPay]] 与 [[megabanks/paypay-fg|PayPay FG]] | 最大的消费者钱包引力、商户受理、积分 / 活动，以及银行 / 卡 / 证券交叉销售。 |
| Rakuten 生态 | [[payment-firms/rakuten-fg|Rakuten FG]], [[card-issuers/rakuten-card|Rakuten Card]], [[payment-firms/rakuten-edy|Rakuten Edy]] | 电商、卡、积分、银行 / 证券邻接；App 与卡的经济性相互作用。 |
| 电信钱包 | [[payment-firms/au-payment|au PAY]] 与 [[megabanks/au-fh|au Financial Holdings]] | KDDI 分发、电信计费、银行 / 卡 / 证券 / 保险组合。 |
| NTT docomo 路线 | [[megabanks/ndfg|NTT docomo FG]] | d Pay / d Card / 面向银行的战略应随着结构稳定通过 NDFG 跟踪。 |
| 市场平台钱包 | [[payment-firms/merpay|Merpay]] 与 [[payment-firms/mercari-hd|Mercari HD]] | 市场余额、BNPL / 信贷、身份，以及银行牌照抱负。 |
| 银行连接钱包 | [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] | COIN+ / Air Wallet 路线；账户连接支付和 Recruit 商户 / 消费者界面。 |
| 旅行钱包 | [[payment-firms/jal-payment-port|JAL Payment Port]] | 忠诚度 / 旅行嵌入式金融、预付、转账、银行代理。 |
| QR 网关 / PSP | [[payment-firms/netstars|Netstars]], [[payment-firms/sb-payment-service|SBPS]], [[payment-firms/gmo-payment-gateway|GMO-PG]] | 商户侧聚合、开户、结算和风险控制。 |

## 真正驱动竞争的因素

- 消费者频次：当支付 App 成为便利店、餐饮、交通邻近购买和小商户消费的习惯性工具时，它们才会胜出。
- 商户受理：广泛受理需要 PSP、收单机构、QR 网关和较低的运营摩擦，而不只是用户激励。
- 资金来源经济性：预付余额、银行借记、信用卡绑定支付和后付会形成不同的利润率和风险特征。
- 忠诚度预算：积分可以购买使用量，但可持续差异化需要商户工具、数据闭环或生态交叉销售。
- 监管边界：许多钱包需要在 [[payments/funds-transfer-service-providers-japan-index|资金转移]]、[[payments/prepaid-payment-instrument-issuers-japan-index|预付式支付工具]]、卡收单和信贷之间进行谨慎路径设计。

## 运营方观察框架

| 问题 | 路径 |
|---|---|
| 这是钱包还是商户 PSP？ | 将 [[payment-firms/paypay|PayPay]] 与 [[payment-firms/netstars|Netstars]] 和 [[payments/psp-merchant-settlement-risk]] 比较。 |
| 储值是否可提现或具备转账能力？ | 使用 [[payments/funds-transfer-vs-prepaid-boundary]]。 |
| 码支付 App 背后是否有信贷？ | 使用 [[payments/credit-purchase-card-operators-japan-index]]。 |
| 该 App 是否依赖积分经济？ | 使用 [[loyalty/japan-points-landscape]]。 |
| 银行账户是否正在成为资金轨道？ | 使用 [[banking/baas-japan-landscape]] 和 [[banking/INDEX]]。 |

## Related

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[payment-firms/paypay]]
- [[payment-firms/netstars]]
- [[loyalty/japan-points-landscape]]

## Sources

- METI, 2025  无现金支付比率发布: https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- Cashless Promotion Council, code-payment trend survey publication page: https://paymentsjapan.or.jp/publications/code-payments-20260330/
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf

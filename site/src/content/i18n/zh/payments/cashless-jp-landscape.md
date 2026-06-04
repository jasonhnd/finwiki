---
source: payments/cashless-jp-landscape
source_hash: 5aa93f96471e5259
lang: zh
status: machine
fidelity: ok
title: "日本无现金支付版图"
translated_at: 2026-06-01T03:31:12.237Z
---

# 日本无现金支付版图

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下。可与 [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] 对读，以获得同业 / 对比语境；也可与 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 对读，以理解更广的系统 / 监管边界。

## TL;DR

日本无现金市场已经不再是“未来普及”主题。METI 最新公开发布显示，**2025 无现金支付比率达到 58.0% / JPY 162.7 万亿**；而在此之前，2024  的比率已经超过较早的 40% 目标。信用卡仍主导交易金额，但码支付是最快的战略战场，因为它把支付、积分、BNPL、银行账户、预付余额和平台广告连接在一起。

FinWiki 的有用视角不是“无现金 vs 现金”，而是**哪一层法律余额和哪一层分销层拥有客户关系**：

1. 收单 / 发卡和分期销售信息监管。
2. 资金转移 / 钱包余额。
3. 预付式电子货币。
4. 银行账户 / 借记 / BaaS 轨道。
5. 忠诚度积分和数据营销。
6. 稳定币 / EPI 邻接。

## 市场结构

| 层级 | 功能 | 主要例子 | FinWiki 路由 |
|---|---|---|---|
| 信用卡 | 最大的无现金金额池；发卡 / 收单经济性；循环信用和分期邻接 | [[card-issuers/jcb|JCB]], SMBC Card, MUFG NICOS, Rakuten Card, PayPay Card, AEON Card | [[financial-licenses/INDEX|legal / financial licenses]] |
| 码支付 | 智能手机 QR / 条码支付、营销补贴、app 流量、P2P 转账邻接 | PayPay, Rakuten Pay, d払い, au PAY, Merpay | [[megabanks/paypay-fg|PayPay FG]], [[payment-firms/rakuten-fg|Rakuten FG]], [[payment-firms/mercari-hd|Mercari HD]] |
| 电子货币 / 预付 | 购买前或购买时的储值支付；交通 / 零售 / 购物中心用例 | WAON, nanaco, Suica/PASMO, Rakuten Edy | [[retail/aeon-group|Aeon Group]], [[retail/seven-and-i-hd|Seven & i]] |
| 银行联动支付 | 借记、银行转账、账户到账户、BaaS、嵌入式开户 | GMO Aozora, Minna Bank, J-Coin, Bank Pay, app-bank integrations | [[banking/baas-japan-landscape|BaaS Japan landscape]] |
| PSP / 收单 | 商户受理、清算、欺诈控制、PCI DSS、多支付方式结账 | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], SB Payment Service, DGFT, Stripe, Adyen | [[business/gmo-internet-group|GMO Internet Group]] |
| 忠诚度层 | 积分发行、兑换、活动经济性、ID 图谱和商户 CRM | Rakuten Point, V Point, d Point, PayPay Point, WAON POINT, nanaco point | [[loyalty/japan-points-landscape|Japan points landscape]] |
| 代币化货币 | 稳定币 / 电子支付手段 / 加密资产结算边界 | JPYC, USDC via EPI route, Progmat, DCJPY | [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] |

## 2025 基线

METI 的 2025  计算改变了讨论，因为日本已经从“追赶 40%”进入更高普及阶段：

| 指标 | 最新公开锚点 | 为什么重要 |
|---|---:|---|
| 无现金支付比率 | 2025  的 58.0% | 旧的 2025  目标已经被超过；政策前沿转向 2030  前达到 65%，以及更长期的 80% 愿景。 |
| 无现金支付金额 | 2025  的 JPY 162.7 万亿 | 支付轨道已经成为核心消费金融基础设施市场，而不是狭窄的 fintech 类别。 |
| 信用卡占无现金金额份额 | 2025  的 82.7% | 即使码支付主导消费者注意力，卡经济性仍是价值池。 |
| 码支付占无现金金额份额 | 2025  的 10.2% | 按金额较小，但因掌握 app 行为、优惠券、P2P 转账和积分而具战略力量。 |

## 竞争地图

| 阵营 | 核心优势 | 约束 |
|---|---|---|
| PayPay / SoftBank / LY | 最大的码支付心智份额、高 app 使用频率、卡 / 银行 / 证券邻接 | 促销成本、变现压力、银行 / 证券整合复杂性 |
| Rakuten | EC、卡、银行、证券、移动和 Rakuten Point 的一体化飞轮 | 移动业务盈利能力和生态疲劳可能削弱飞轮 |
| NTT docomo / d | 电信 ID、d Point、d払い、计划中的 [[megabanks/ndfg|NDFG]] 金融集团整合 | 需要更紧密的银行 / 证券 / 保险产品整合 |
| au / KDDI | au PAY、au Jibun Bank、保险 / 证券、Lawson 邻接 | 在许多场景中，零售触点和支付心智落后于 PayPay / Rakuten |
| AEON | 购物中心和超市客流、AEON Card、WAON、[[card-issuers/aeon-bank|Aeon Bank]] | 在 AEON 日常生活圈中强，但集团外通用性较弱 |
| Seven & i | 便利店客流、nanaco、[[regional-banks/seven-bank|Seven Bank]] ATM 平台 | nanaco 在集团语境中强，但码支付份额不是全国主战场 |
| GMO / PSP 层 | 商户受理、EC 结账、多支付编排、B2B 支付数据 | 主要是商户侧基础设施，消费者品牌控制较弱 |

## 法律栈

无现金产品应按法律功能拆解，而不是按 app 品牌拆解：

| 功能 | 首要法律问题 | 典型路径 |
|---|---|---|
| 储存客户价值 | 它是银行存款、资金转移余额、预付式支付工具，还是积分负债？ | Banking Act / Payment Services Act / prepaid rules |
| 向他人转移价值 | 是否构成外汇交易 / 资金转移？ | Funds transfer service provider or bank route |
| 使用储值向商户付款 | 余额可赎回，还是只能用于商品 / 服务？ | Prepaid payment instruments or funds-transfer balance |
| 从银行账户发起账户变动 | 谁接收指令，谁持有账户？ | Electronic payment agency / banking API / BaaS stack |
| 运营信用卡收单或发卡 | 谁是发卡方、收单方、商户签约方和信贷提供方？ | Installment Sales Act, card network rules, PCI DSS, related registration |
| 以积分奖励用户 | 积分是购买的、奖励发放的、可转让的，还是等同现金的？ | Loyalty program accounting plus possible prepaid / funds-transfer boundary analysis |
| 使用稳定币轨道 | 该代币是 EPI、加密资产、信托受益权、存款代币，还是预付价值？ | [[fintech/japan-epi-three-types-overview|Japan EPI three types]] / [[fintech/japan-ecisb-license|ECISB]] / VASP route |

## 为什么这对 JapanFG 重要

日本零售金融正在围绕**支付频率作为分销切入点**而收敛：

- [[megabanks/paypay-fg|PayPay FG]] 可以把日常支付用户导向卡、银行、证券和保险。
- [[payment-firms/rakuten-fg|Rakuten FG]] 把购物和卡奖励转化为银行 / 证券 / 移动留存。
- [[card-issuers/aeon-bank|Aeon Bank]] 利用零售门店、WAON 和 AEON Card，把银行业务变成购物流程的一部分。
- [[regional-banks/seven-bank|Seven Bank]] 正在把 ATM 从取现机器重新定义为更广的认证 / 结算基础设施。
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 是商户侧收费闸口：消费者不太可见，但深度嵌入 EC 结算。

## Related

- [[payments/INDEX|payments INDEX]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[retail/aeon-group|Aeon Group]]
- [[retail/seven-and-i-hd|Seven & i]]
- [[card-issuers/aeon-bank|Aeon Bank / AFS]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]
- [[fintech/japan-financial-regulation|Japan financial regulation]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]
- [[INDEX|FinWiki index]]

## Sources

- METI: 2025 cashless payment ratio release, 2026-03-31.
- METI: 2024 cashless payment ratio release, 2025-03-31.
- Payments Japan Association: code payment and cashless publications.
- FSA: electronic payment instruments / electronic payment handling business registration information.
- FSA: prepaid payment instruments repayment and Payment Services Act explanation.

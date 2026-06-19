---
source: payments/cashless-jp-landscape
source_hash: afc46eac83ae193f
lang: zh
status: machine
fidelity: ok
title: "日本无现金支付全景"
translated_at: 2026-06-19T06:09:18.166Z
---

# 日本无现金支付全景

## Wiki 路由

本条目位于 [[payments/INDEX|payments index]] 之下。请与 [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] 对照阅读以获取同业／对比语境，并与 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 对照以了解更广泛的体系／监管边界。

## TL;DR

日本的无现金市场已不再是「未来普及」的主题。METI 最新的公开发布称，**2025  无现金支付比率达到 58.0%／ 162.7  万亿日元**，此前 2024  的比率早已超过了更旧的 40% 目标。信用卡在交易金额上仍占主导，而代码支付则是最快的战略主战场，因为它将支付、积分、BNPL、银行账户、预付余额与平台广告连接起来。

有用的 FinWiki 视角并非「无现金 vs 现金」，而是 **哪一层法定余额层与分销层拥有客户关系**：

1. 卡收单／发卡与分期销售监管。
2. 资金移动／钱包余额。
3. 预付电子货币。
4. 银行账户／借记／BaaS 通道。
5. 忠诚度积分与数据营销。
6. 稳定币／EPI 邻接性。

## 市场结构

| 层 | 其作用 | 主要示例 | FinWiki 路由 |
|---|---|---|---|
| 信用卡 | 最大的无现金价值池；发卡方/收单方经济性；循环与分期邻接性 | [[card-issuers/jcb|JCB]]、SMBC 卡、MUFG NICOS、乐天卡、PayPay 卡、永旺卡 | [[financial-licenses/INDEX|legal / financial licenses]] |
| 代码支付 | 智能手机 QR/条码支付、活动补贴、应用流量、P2P 转账邻接性 | PayPay、乐天 Pay、d 払い、au PAY、Merpay | [[megabanks/paypay-fg|PayPay FG]]、[[payment-firms/rakuten-fg|Rakuten FG]]、[[payment-firms/mercari-hd|Mercari HD]] |
| 电子货币／预付 | 购买前或购买时的储值支付；交通／零售／商场用例 | WAON、nanaco、Suica/PASMO、乐天 Edy | [[retail/aeon-group|Aeon Group]]、[[retail/seven-and-i-hd|Seven & i]] |
| 银行联动支付 | 借记、银行转账、账户对账户、BaaS、嵌入式开户 | GMO 青空、Minna Bank、J-Coin、Bank Pay、应用银行集成 | [[banking/baas-japan-landscape|BaaS Japan landscape]] |
| PSP／收单 | 商户受理、清结算、欺诈控制、PCI DSS、多方式结账 | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、SB Payment Service、DGFT、Stripe、Adyen | [[business/gmo-internet-group|GMO Internet Group]] |
| 忠诚度层 | 积分发行、兑换、活动经济性、ID 图谱与商户 CRM | 乐天积分、V 积分、d 积分、PayPay 积分、WAON POINT、nanaco point | [[loyalty/japan-points-landscape|Japan points landscape]] |
| 代币化货币 | 稳定币／电子支付工具／加密资产结算边界 | JPYC、经 EPI 路径的 USDC、Progmat、DCJPY | [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] |

## 2025  基准

METI 的 2025  测算改变了讨论，因为日本已从「追赶 40%」进入更高普及的体制：

| 指标 | 最新公开锚点 | 为何重要 |
|---|---:|---|
| 无现金支付比率 | 2025  的 58.0%| 旧的 2025  目标已被超过；政策前沿转向 2030  之前的 65% 以及更长期的 80% 愿景。 |
| 无现金支付金额 | 2025  的 162.7  万亿日元 | 支付通道如今是核心的消费金融基础设施市场，而非狭义的金融科技类别。 |
| 信用卡占无现金金额的份额 | 2025  的 82.7%| 即便代码支付主导消费者注意力，卡的经济性仍是价值池。 |
| 代码支付占无现金金额的份额 | 2025  的 10.2%| 按金额较小，但因其拥有应用行为、优惠券、P2P 转账与积分而在战略上强大。 |

## 竞争地图

| 阵营 | 核心优势 | 约束 |
|---|---|---|
| PayPay／软银／LY | 最大的代码支付心智份额、高应用频率、卡／银行／证券邻接性 | 推广成本、变现压力、银行／证券集成的复杂性 |
| 乐天 | 整合的电商、卡、银行、证券、移动、乐天积分飞轮 | 移动业务盈利性与生态疲劳可能削弱飞轮 |
| NTT docomo／d | 电信 ID、d 积分、d 払い、计划中的 [[megabanks/ndfg|NDFG]] 金融集团整合 | 需要更紧密的银行／证券／保险产品集成 |
| au／KDDI | au PAY、au Jibun Bank、保险／证券、罗森邻接性 | 在许多语境下零售布局与支付心智份额落后于 PayPay／乐天 |
| 永旺 | 商场与超市流量、永旺卡、WAON、[[card-issuers/aeon-bank|Aeon Bank]] | 在永旺日常生活区强，但在集团之外普遍性较低 |
| Seven & i | 便利店流量、nanaco、[[regional-banks/seven-bank|Seven Bank]] ATM 平台 | nanaco 在集团语境中强大，但代码支付份额并非主要的全国主战场 |
| GMO／PSP 层 | 商户受理、电商结账、多支付编排、B2B 支付数据 | 主要为商户侧基础设施，消费者品牌控制较少 |

## 法律栈

无现金产品应按法律功能而非应用品牌来分解：

| 功能 | 首要法律问题 | 典型路径 |
|---|---|---|
| 储存客户价值 | 它是银行存款、资金移动余额、预付支付工具，还是积分负债？ | 银行法／资金结算法／预付规则 |
| 向他人转移价值 | 它是外汇交易／资金移动吗？ | 资金移动业者或银行路径 |
| 用储值向商户付款 | 余额可兑现，还是仅可用于商品/服务？ | 预付支付工具或资金移动余额 |
| 从银行账户发起账户划转 | 谁接收指令，谁持有账户？ | 电子支付代理／银行 API／BaaS 栈 |
| 经营信用卡收单或发行卡 | 谁是发卡方、收单方、商户签约方与信用提供方？ | 分期销售法、卡网络规则、PCI DSS、相关登记 |
| 以积分回馈用户 | 积分是购买的、作为奖励授予的、可转让的，还是现金等价物？ | 忠诚度计划会计，加上可能的预付／资金移动边界分析 |
| 使用稳定币通道 | 该代币是 EPI、加密资产、信托受益权、存款代币，还是预付价值？ | [[fintech/japan-epi-three-types-overview|Japan EPI three types]]／[[fintech/japan-ecisb-license|ECISB]]／VASP 路径 |

## 为何这对 JapanFG 重要

日本的零售金融正围绕 **作为分销楔子的支付频率** 收敛：

- [[megabanks/paypay-fg|PayPay FG]] 能将日常支付用户路由到卡、银行、证券与保险。
- [[payment-firms/rakuten-fg|Rakuten FG]] 将购物与卡奖励转化为银行／证券／移动的留存。
- [[card-issuers/aeon-bank|Aeon Bank]] 用零售店铺、WAON 与永旺卡，使银行业务成为购物流程的一部分。
- [[regional-banks/seven-bank|Seven Bank]] 正在把 ATM 从取现机重新定义为更广泛的认证／结算基础设施。
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 是商户侧的关卡：对消费者较不可见，但深度嵌入电商结算之中。

## 关联

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

## 出处

- METI：2025  无现金支付比率发布，2026-03-31。
- METI：2024  无现金支付比率发布，2025-03-31。
- Payments Japan Association：代码支付与无现金刊物。
- FSA：电子支付工具／电子支付经办业登记信息。
- FSA：预付支付工具偿还与资金结算法说明。

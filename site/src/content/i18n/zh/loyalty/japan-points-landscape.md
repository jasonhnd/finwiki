---
source: loyalty/japan-points-landscape
source_hash: a7e1c10fb71768c3
lang: zh
status: machine
fidelity: ok
title: "日本积分与忠诚度全景"
translated_at: 2026-05-30T14:48:27.665Z
---

# 日本积分与忠诚度全景

## TL;DR

日本的积分经济是一套**支付分发系统**，而不仅是折扣习惯。Rakuten Point、V Point、d Point、PayPay Point、WAON POINT、nanaco point 及卡积分，决定了哪个钱包、卡、银行、移动运营商和零售 app 被优先打开。

关键分化在于：

1. **开放型通用积分**，跨众多商户与 app 流通。
2. **零售集团积分**，深化某一门店生态。
3. **支付 app 积分**，补贴码支付频率。
4. **信用卡积分**，捍卫卡经济学。
5. **预付 / 电子货币积分**，处于资金结算法边界附近。
6. **数据营销积分**，使客户 ID 图谱具备商业价值。

## 主要计划

| 计划 | 发起方 / 生态 | 核心角色 | 金融邻接 |
|---|---|---|---|
| Rakuten Point | Rakuten Group | EC + 卡 + 银行 + 证券 + 移动 飞轮 | [[payment-firms/rakuten-fg|Rakuten FG]]、Rakuten Card、Rakuten Bank、Rakuten Securities |
| V Point | T Point + V Point 整合后的 CCCMK / SMBC Card 联盟 | 通用积分 + SMBC 信用卡与 Olive 邻接 · 2024-04-22 统一细节见 [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]，breakage / IFRS 15 处理见 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] | [[megabanks/smfg|SMFG]]、SMBC Card、零售合作方 |
| d Point | NTT docomo | 电信 ID + d払い + d Card + 计划性 [[megabanks/ndfg|NDFG]] 金融合并 | NTT docomo 金融、d Card、d払い、银行 / 证券 / 保险路线 |
| PayPay Point | PayPay / SoftBank / LY | 码支付频率与活动经济学 | [[megabanks/paypay-fg|PayPay FG]]、PayPay Card、PayPay Bank、PayPay Securities |
| WAON POINT | AEON | 商城 / 超市 / AEON Card / WAON 留存 | [[retail/aeon-group|Aeon Group]]、[[card-issuers/aeon-bank|Aeon Bank / AFS]] |
| nanaco point | Seven & i | 便利 / 超市 / nanaco / Seven Card 留存 | [[retail/seven-and-i-hd|Seven & i]]、[[regional-banks/seven-bank|Seven Bank]] |
| 信用卡积分 | JCB、SMBC、MUFG、Saison、AEON、Rakuten、PayPay Card | 发卡行忠诚度与交换费防御层 | [[card-issuers/jcb|JCB]]、[[card-issuers/credit-saison|Credit Saison]] |

## 法律 / 会计边界

不要假设所有「积分」在法律上完全相同。

| 积分类型 | 客户视角 | 法律 / 经济问题 |
|---|---|---|
| 购买后授予的奖励积分 | 「我赚了积分」 | 通常是忠诚度负债与营销成本；检查条款、失效、可转让性与 breakage 假设。 |
| 以现金购买或充值的积分 | 「我充了价值」 | 视可兑换性与可转让性，可能接近预付式支付手段或资金移动分析。 |
| 电子货币余额 | 「我充了 WAON / nanaco / 交通 IC」 | 资金结算法预付层比普通忠诚度会计更为核心。 |
| 码支付活动积分 | 「我拿到返现」 | 常为促销成本加钱包锁定；法律处理取决于其是现金等价还是限用奖励。 |
| 卡奖励积分 | 「刷卡赚积分」 | 发卡行经济学、奖励负债、交换费 / 分期经济学与商户活动出资相互交织。 |
| 跨计划兑换 | 「我转换了积分」 | 类外汇的汇率设定、负债转移、合作方结算与反滥用控制变得重要。 |

## 战略模式

积分之所以奏效，是因为它将四套系统压缩进一种用户行为：

1. **支付选择**：积分决定用户是用 PayPay、Rakuten Pay、d払い、AEON Pay、nanaco 还是信用卡。
2. **商户获取**：商户加入积分网络以接入客流、优惠券与活动。
3. **金融分发**：积分制造了持有集团卡、银行账户、证券账户或 app 的理由。
4. **数据图谱**：购买、位置、支付与活动响应数据成为可售卖的营销基础设施。

### Rakuten

Rakuten Point 是最清晰的全生态闭环：购物赚积分，刷卡赚积分，积分可补贴未来购物或移动账单，金融产品强化同一账户图谱。这正是为何 [[payment-firms/rakuten-fg|Rakuten FG]] 应被解读为一套分发系统，而不仅是金融板块。

### V Point / SMBC

T Point 与 SMBC V Point 的 2024 整合创造了一个更强的、连接 SMBC Card 与 Olive 的通用积分层。对 JapanFG 工作而言，V Point 是对抗 Rakuten 与 PayPay 的最重要「银行主导通用积分」制衡力量。

### d Point / NDFG

d Point 是 [[megabanks/ndfg|NDFG]] 论点的核心，因为电信身份能将用户导入支付、卡、银行、证券、保险与订阅捆绑。悬而未决的问题是 NTT 能否在不丧失清晰度的情况下将积分转化为金融超级 app。

### WAON / nanaco

WAON 与 nanaco 首先是零售操作系统。它们将日常杂货 / 便利行为绑定到支付与金融，但其最强用例是集团门店频率与门店特定经济学，而非普适的 app 主导地位。

## JapanFG 相关性

| JapanFG 问题 | 积分层答案 |
|---|---|
| 哪些金融集团能降低获客成本？ | 那些已拥有高频积分账户的集团。 |
| 哪些零售银行具备日常使用楔子？ | [[card-issuers/aeon-bank|Aeon Bank]] 与 [[regional-banks/seven-bank|Seven Bank]]，经由 WAON / nanaco 与门店客流。 |
| 哪个电信金融集团拥有最佳交叉销售基础？ | [[megabanks/ndfg|NDFG]]，若 d Point + d払い + d Card 整合得当。 |
| 哪些 PSP 间接受益？ | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 及其他 PSP，因为商户需要多支付受理与活动路由。 |
| 应检查哪一法律页面？ | [[financial-licenses/INDEX|legal / financial licenses]]，当积分变得类现金或可转让时。 |

## 相关

- [[loyalty/INDEX|loyalty INDEX]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[retail/aeon-group|Aeon Group]]
- [[retail/seven-and-i-hd|Seven & i]]
- [[megabanks/ndfg|NDFG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[card-issuers/aeon-bank|Aeon Bank / AFS]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[INDEX|FinWiki index]]

## 来源

- Rakuten Point Club 官方指南。
- CCC / SMBC Card 关于 V Point 整合的新闻稿，2024-01-09。
- d Point Club 官方网站。
- WAON 官方积分指南。
- nanaco 官方介绍与积分指南。

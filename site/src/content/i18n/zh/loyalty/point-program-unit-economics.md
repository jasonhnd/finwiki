---
source: loyalty/point-program-unit-economics
source_hash: e642486f2a1c480f
lang: zh
status: machine
fidelity: ok
title: "积分计划单位经济学（日本忠诚度资金来源、浮存、失效收益、获客成本）"
translated_at: 2026-06-18T15:47:13.955Z
---

# 积分计划单位经济学（日本忠诚度资金来源、浮存、失效收益、获客成本）

## 维基路径

本词条归入 [[loyalty/INDEX|loyalty index]]，作为**单位经济学 / 资金机制**页面。它是 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] 的经济学补充：那个页面问的是*一个积分如何被分类*，本页面问的是*该计划是否赚钱以及谁来买单*。它应与 [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] 中的计划版图、[[loyalty/retail-media-points-data-loop|retail-media points data loop]] 中的数据变现飞轮，以及 [[loyalty/point-exchange-network-risk|point exchange network risk]] 中的运营商间转移机制一并阅读。有利的积分经济学的下游受益者是集团金融：[[payment-firms/rakuten-fg|Rakuten FG]]、[[megabanks/ndfg|NDFG]]、[[megabanks/paypay-fg|PayPay FG]]。

## 摘要

一个积分计划的经济学可归结为一个简短的等式：**资金来源 − 兑换成本 − 运营成本 + 失效收益 + 浮存收益 + 变现（零售媒体 / 金融交叉销售）= 计划利润率。**两个在结构上有意思的项是**失效**（已发放但从未兑换的积分是一种近乎纯利润的收益，其*确认时点*受 ASBJ 第 29  号准则 / 国际财务报告准则第 15 号管辖）和**浮存**（发放积分负债与为兑换付款之间的差额是一笔零利息的资金余额）。一个计划是否盈利，与其说取决于醒目的奖励率，不如说取决于**谁为积分出资**（商户还是运营商）、**失效率有多高**，以及**ID 图谱是否被变现**。一个"返 1%"的计划并非单一的经济对象；根据这些答案，它至少是四种截然不同的对象。

## 单位经济学等式

对于一个有代表性的已发放积分单位，运营商的经济学为：

| 项 | 符号 | 驱动因素 |
|---|---|---|
| 资金流入 | + | 商户出资的积分：商户为发放向运营商付费。运营商出资：纯成本。 |
| 兑换成本 | − | 实际兑换的积分价值（运营商必须兑现） |
| 运营成本 | − | 平台、清结算、欺诈防控、数据基础设施、合作伙伴管理 |
| 失效收益 | + | 从未兑换的积分 → 负债转入收入（确认时点依会计准则） |
| 浮存收益 | + | 未兑付负债是一笔持有至兑换为止的零利息余额 |
| 变现 | + | 归因于 ID 图谱的零售媒体 + 金融交叉销售收入 |

醒目的"奖励率"只决定*总*兑换成本。利润率由其他五个项决定——这正是为何两个宣传相同返利百分比的计划会有相反的经济学。

## 资金来源：究竟谁为积分买单

最大的单一经济学分野是**资金来源**，而它与消费者所看到的并不一致。

| 资金模式 | 谁买单 | 运营商经济学 | 典型案例 |
|---|---|---|---|
| 商户出资 | 合作商户按发放的每一积分向运营商付费 | 运营商在发放上赚取利润 + 保留失效 / 浮存 | 合作零售商处的通用积分受理 |
| 运营商出资（促销） | 运营商自己的营销预算 | 纯获客成本；只能通过数据 / 交叉销售回收 | 钱包"100% 還元"促销 |
| 发卡方出资（信用卡） | 发卡机构以交换费 / 手续费为奖励出资 | 维护信用卡经济性；奖励是交换费的成本 | 信用卡奖励积分 |
| 自有出资（集团零售） | 集团自己的零售利润 | 留存支出；以复购回收 | 门店集团积分（生鲜 / 便利店） |

一个通用积分通常以**商户出资**为核心（在发放上利润为正，*外加*失效与浮存），并在其上叠加**运营商出资**的促销层。将两者混为一谈正是 [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]] 中所指出的典型误读：促销层立即冲击损益表，使该计划看起来在亏损，而商户出资的基底则悄然实现利润为正。

## 失效：利润引擎

**失效**——已发放但从未兑换的积分——是忠诚度领域中最接近纯利润收益的事物。机制上：

- 运营商永远无需兑现的积分是一笔最终转入收入的负债。
- 在 **ASBJ 第 29 号准则**和**国际财务报告准则第 15 号**下，该转入是在预期兑换期内*按兑换的模式比例*确认——而非在到期时一次性确认——并且仅在失效是基于历史的**可靠估计**时确认。在无法估计之处，收入要等到进一步兑换的可能性变得渺茫为止。
- 失效率越高 = 结构性利润率越高；但它同时也是整个计划中最**对估计敏感且最受审查关注**的数字。高估它会将收入提前；无现金促进协议会 / Payments Japan 的披露规范（可比兑换率、到期、未兑付余额的报告）之所以存在，部分是为了阻止失效被用作收入平滑的阀门。

设计选择直接推高失效：短到期、限定用途积分（期間・用途限定）、以及高最低兑换门槛全都*提高*失效——这是限定用途积分如此普遍的一个（鲜少明言的）原因。对此的会计框定是 [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]] 中的桶 3 。

## 浮存：零利息的资金余额

在发放一个积分与为其兑换付款之间，运营商持有一笔尚无需结清的**未兑付负债**。总体而言这是一笔庞大、缓慢流动、零利息的余额——类似于保险浮存或预付工具浮存：

- 平均兑换时间越长，相对于发放的浮存就越大。
- 对于一个大型通用积分或钱包，未兑付的积分负债是一笔完全由客户以零利息出资的常驻余额。
- 浮存*有别于*失效：失效是永不回流的积分（一种利润收益）；浮存是终将回流的积分上的持有收益（持有期间的一项资金利益）。

正是浮存这一视角使积分负债对一个金融集团具有吸引力：处于银行 / 电信集团（[[payment-firms/rakuten-fg|Rakuten FG]]、[[megabanks/ndfg|NDFG]]、[[megabanks/paypay-fg|PayPay FG]]）之内的积分运营商，同时贡献了一笔客户出资的余额和一个日频触点。

## 资产负债表视角：作为客户出资浮存的负债

从单位等式后退一步，*总体*未兑付的积分余额在资产负债表上具有独特的轮廓。一经发放，未兑换的积分便是一笔常驻负债，而四项属性共同赋予它教科书式的**浮存**形态：

| 属性 | 含义 |
|---|---|
| 先发放后结清 | 运营商持有尚未付出的价值 |
| 客户出资 | 该余额之所以存在是因为客户赚取，而非运营商借入 |
| 零利息 | 未兑付的积分负债不支付任何票息 |
| 缓慢流动 | 对于一个大型通用积分，总体余额具有黏性，且补充快于消耗 |

### 它与预付储值的差异

一笔忠诚度积分余额与一笔**预付储值余额**（电子货币、礼品余额）都看似客户出资的浮存，但它们并非同一种工具：

| 维度 | 忠诚度积分负债 | 预付储值 |
|---|---|---|
| 来源 | 作为奖励发放（无现金流入） | 客户充入现金 |
| 监管归属 | 忠诚度 / 收入确认会计 | 《资金结算法》预付制度（资产保全、登记） |
| 现金等价性 | 通常限定用途，现金相似性较低 | 更接近现金；可兑换性 / 可转让性至关重要 |
| 失效逻辑 | 由到期驱动，高度依赖估计 | 受预付规则 / 未使用余额处理的约束 |

两者之间的界线恰恰是 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] —— 一个变为以现金充值或可自由转让的积分，可以**越过**进入预付制度，从而同时改变其监管与其浮存处理。

### 浮存的风险一面

客户出资的浮存并非免费的钱；它带有分析师应予以定价的余额特有风险：

| 风险 | 是什么 | 对照阅读 |
|---|---|---|
| 兑换激增 | 一次促销或到期变更加速兑换 → 浮存被抽干，现金流出快于建模 | [[loyalty/point-program-unit-economics|unit economics]] |
| 失效误估 | 乐观的失效将收入提前；一次调整会将其反转 | [[loyalty/point-liability-accounting-boundary|accounting boundary]] |
| 重新分类 | 一个变得类现金的积分迁入预付制度，提高保全 / 登记义务 | [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] |
| 跨计划泄漏 | 兑换进其他运营商 / 里程，以结算汇率将价值移出表外 | [[loyalty/point-exchange-network-risk|point exchange network risk]] |

## 变现：单薄的计划在何处转为盈利

一个仅以资金来源 − 兑换 − 成本来评判的积分计划可能看起来很边缘。使其反转的项是**失效**、**浮存**，以及**ID 图谱的变现**——即 [[loyalty/retail-media-points-data-loop|the retail-media data-loop page]] 中阐述的零售媒体 + 金融交叉销售飞轮。这正是对"亏损"钱包的对账：

- 促销密集的钱包将运营商出资的发放计为即时费用（损益表看起来糟糕）。
- 同样的支出买来了最丰富的 ID 图谱和最深的日频漏斗。
- 零售媒体利润率与金融交叉销售——比积分所补贴的单薄零售 / 支付业务利润率更高——正是它回收之处。

因此盈利能力的问题从来不是"奖励率是多少"；而是"商户出资还是运营商出资、失效率有多高、浮存有多大、图谱是否被变现"。

## 这对日本金融集团 / 金融分析为何重要

- **奖励率是错误的焦点。**两个"返 1%"的计划在资金来源、失效、浮存和变现上完全不同。要比较的是这些，而非那个百分比。
- **失效是盈利质量的标志。**一个依靠乐观失效来显示利润率的计划是在将收入提前；查验"ポイント引当金"是否已迁移为"契約負債"，以及兑换假设是如何披露的（依 [[loyalty/point-liability-accounting-boundary|accounting boundary]]）。
- **浮存 + ID 图谱正是金融集团想要积分运营商的原因。**一个集团之内的积分同时供给一笔零利息的客户出资余额*和*一个交叉销售漏斗——这正是使 [[megabanks/smfg|SMFG]] / V-Point、[[megabanks/ndfg|NDFG]] / dポイント 以及 [[payment-firms/rakuten-fg|Rakuten FG]] 内部整合在营销之外仍然合理的经济学。

## 相关

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/retail-media-points-data-loop|retail-media points data loop]]
- [[loyalty/point-exchange-network-risk|point exchange network risk]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[payments/japan-prepaid-electronic-money-operator-matrix|Japan prepaid electronic-money operator matrix]]
- [[payments/INDEX|payments INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[megabanks/smfg|SMFG]]
- [[fintech/INDEX|fintech INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- 乐天 Point Club 官方指引——积分计划结构与兑换条款。
- ASBJ 第 29,  号准则《收入确认会计准则》（収益認識に関する会計基準）——失效 / 递延收入的确认时点。
- 乐天集团 IR——合同负债及积分相关递延收入披露。
- NTT 都科摩 IR——dポイント 兑换假设与收入分摊。
- Payments Japan 协会——码支付兑换 / 失效披露规范。

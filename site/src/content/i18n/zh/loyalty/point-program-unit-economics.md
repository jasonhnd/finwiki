---
source: loyalty/point-program-unit-economics
source_hash: cc2d7535c00c5f23
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "积分计划单位经济学（日本忠诚度原资、浮存、失效沉淀、CPA）"
translated_at: 2026-06-05T00:00:00.000Z
---
# 积分计划单位经济学（日本忠诚度原资、浮存、失效沉淀、CPA）

## 维基路径

本条目位于 [[loyalty/INDEX|loyalty index]] 之下，作为**单位经济学／原资机制**页面。它是 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] 在经济层面的对应：那一页问的是*一个积分如何被分类*，本页问的是*该计划是否赚钱、由谁买单*。它与 [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] 中的计划图谱、[[loyalty/retail-media-points-data-loop|retail-media points data loop]] 中的数据变现飞轮，以及 [[loyalty/point-exchange-network-risk|point exchange network risk]] 中的运营商间转移机制一并阅读。良好积分经济性的下游受益者是集团金融：[[payment-firms/rakuten-fg|Rakuten FG]]、[[megabanks/ndfg|NDFG]]、[[megabanks/paypay-fg|PayPay FG]]。

## 要点速览

一个积分计划的经济性可归结为一个小方程：**原资 − 兑换成本 − 运营成本 + 失效沉淀收益 + 浮存收益 + 变现（零售媒体／金融交叉销售）= 计划利润率。** 两个结构上有意思的项是**失效沉淀**（已授予但从未兑换的积分是一项近乎纯利润的收益，其*时点*受 ASBJ 企业会计准则第29号／IFRS 15 支配）与**浮存**（从授予一笔积分负债到为兑换付款之间的间隙，是一笔零利率的资金余额）。一个计划是否盈利，与其说取决于醒目的回馈率，不如说取决于**谁为积分买单**（商户还是运营商）、**失效沉淀有多高**，以及 **ID 图谱是否被变现**。「1% 回馈」的计划并非单一的经济对象；视这些答案而定，它至少是四种非常不同的东西。

## 单位经济学方程

对于授予积分的一个代表性单位，运营商的经济性为：

| 项 | 符号 | 驱动因素 |
|---|---|---|
| 原资流入 | + | 商户出资型积分：商户为发行向运营商付款。运营商出资型：纯成本。 |
| 兑换成本 | − | 实际被兑换的积分价值（运营商必须兑现） |
| 运营成本 | − | 平台、结算、反欺诈、数据基础设施、伙伴管理 |
| 失效沉淀收益 | + | 从未兑换的积分 → 负债转入收入（时点依会计准则而定） |
| 浮存收益 | + | 未兑付的负债是一笔持有至兑换的无息余额 |
| 变现 | + | 归属于 ID 图谱的零售媒体＋金融交叉销售收入 |

醒目的「回馈率」只设定了*毛*兑换成本。利润率由其余五项决定——这正是为什么两个宣称相同百分比回馈的计划可以有相反的经济性。

## 原资：实际由谁为积分买单

最大的经济分野是**原资（谁买单）**，而它与消费者所见并不一致。

| 出资模式 | 由谁买单 | 运营商经济性 | 典型案例 |
|---|---|---|---|
| 商户出资型 | 伙伴商户按发行的每点向运营商付款 | 运营商在发行时赚取利润，*另外*留住失效沉淀／浮存 | 伙伴零售商处的通用积分受理 |
| 运营商出资型（活动） | 运营商自有的营销预算 | 纯获客成本；仅通过数据／交叉销售回收 | 钱包「100% 还元」促销 |
| 发卡方出资型（卡） | 发卡方用交换费／手续费为回馈出资 | 防御卡的经济性；回馈是交换费的成本 | 信用卡回馈积分 |
| 自筹型（集团零售） | 集团自身的零售利润 | 留存支出；以复购回收 | 门店集团积分（食品超市／便利店） |

通用积分通常运行一个**商户出资型**的核心（发行时利润为正，*再加上*失效沉淀与浮存），并在其上叠加一层**运营商出资型**的活动。混淆二者是 [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]] 中标记的典型误读：活动叠加层立即冲击损益，使计划看起来在亏损，而商户出资型的基底却悄然利润为正。

## 失效沉淀：利润引擎

**失效沉淀**——已授予但从未兑换的积分——是忠诚度中最接近纯利润收益的东西。机制上：

- 运营商永远无需兑现的积分是一项最终转入收入的负债。
- 在 **ASBJ 企业会计准则第29号**与 **IFRS 15** 之下，该转入是在预期兑换期内*按兑换模式比例*确认的——而非在到期时一次性确认——并且仅当失效沉淀是来自历史的**可靠估计**时才确认。无法估计时，收入要等到进一步兑换变得渺茫为止。
- 失效沉淀越高 = 结构性利润率越高；但它也是整个计划中最**对估计敏感、最受审查暴露**的数字。高估会把收入提前；无现金推进协议会／ペイメントジャパン的披露规范（可比兑换率、到期、未兑付余额报告）之所以存在，部分正是为了阻止失效沉淀被当作收入平滑的阀门。

设计选择直接推高失效沉淀：短到期、用途限定积分（期間・用途限定）、高最低兑换门槛都会*抬高*失效沉淀——这是（鲜少明说的）用途限定积分如此普遍的原因之一。这一点的会计框定是 [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]] 中的桶 3。

## 浮存：无息资金余额

在授予一笔积分到为其兑换付款之间，运营商持有一笔尚无需结算的**未兑付负债**。总体而言这是一笔庞大、缓慢移动、无息的余额——类似保险浮存或预付工具浮存：

- 平均兑换时间越长，浮存相对于发行就越大。
- 对一个大型通用积分或钱包而言，未兑付的积分负债是一笔完全由顾客以零利率提供的常驻余额。
- 浮存与失效沉淀是*分开的*：失效沉淀是永不回来的积分（利润收益）；浮存是对终将回来的积分在持有期间的套息（持有期间的资金收益）。

正是浮存这一读法，使积分负债对金融集团有吸引力：银行／电信集团内的积分运营商（[[payment-firms/rakuten-fg|Rakuten FG]]、[[megabanks/ndfg|NDFG]]、[[megabanks/paypay-fg|PayPay FG]]）同时贡献一笔由顾客提供的余额和一个日频接触点。

## 变现：薄利计划转为盈利之处

仅以原资 − 兑换 − 成本来评判的积分计划可能看起来勉强。把它翻转过来的项是**失效沉淀**、**浮存**与 **ID 图谱的变现**——即 [[loyalty/retail-media-points-data-loop|the retail-media data-loop page]] 中阐述的零售媒体＋金融交叉销售飞轮。这正是「亏损」钱包的对账：

- 活动密集的钱包把运营商出资型的授予记为即时费用（损益看着差）。
- 同一笔支出买来了最丰富的 ID 图谱和最深的日频漏斗。
- 零售媒体利润率与金融交叉销售——比积分所补贴的薄利零售／支付业务利润更高——才是它回本之处。

所以盈利性的问题从来不是「回馈率是多少」；而是「商户出资还是运营商出资、失效沉淀有多高、浮存有多大、图谱是否被变现」。

## 为何这对 JapanFG／金融分析重要

- **回馈率是错误的标题。** 两个「1% 回馈」计划在原资、失效沉淀、浮存与变现上完全不同。要比较的是这些，而非百分比。
- **失效沉淀是盈利质量的警示。** 一个靠乐观的失效沉淀来展示利润率的计划是在把收入提前；查看「ポイント引当金」是否已迁移至「契約負債」，以及兑换假设如何披露（参照 [[loyalty/point-liability-accounting-boundary|accounting boundary]]）。
- **浮存＋ID 图谱是金融集团想要积分运营商的原因。** 集团内的一个积分同时供给一笔无息、由顾客提供的余额*和*一个交叉销售漏斗——这正是使 [[megabanks/smfg|SMFG]] ／ V-Point、[[megabanks/ndfg|NDFG]] ／ dポイント 及 [[payment-firms/rakuten-fg|Rakuten FG]] 内部整合在营销之外仍属合理的经济性。

## 相关

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/retail-media-points-data-loop|retail-media points data loop]]
- [[loyalty/point-exchange-network-risk|point exchange network risk]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]
- [[payments/japan-prepaid-electronic-money-operator-matrix|Japan prepaid electronic-money operator matrix]]
- [[payments/INDEX|payments INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[megabanks/smfg|SMFG]]
- [[fintech/INDEX|fintech INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 楽天ポイントクラブ官方指南——积分计划结构与兑换条款。
- ASBJ 企业会计准则第29号「収益認識に関する会計基準」——失效沉淀／递延收入时点。
- 楽天グループ IR——合约负债及积分相关的递延收入披露。
- NTT ドコモ IR——dポイント 兑换假设与收入分配。
- 一般社团法人ペイメントジャパン——码支付的兑换／失效沉淀披露规范。

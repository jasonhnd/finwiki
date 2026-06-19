---
source: payments/japan-payment-scheme-economics-matrix
source_hash: ba7a2ece0be052ca
lang: zh
status: machine
fidelity: ok
title: "日本支付方案经济性矩阵"
translated_at: 2026-06-19T06:09:18.079Z
---

# 日本支付方案经济性矩阵

## TL;DR

日本零售支付如今运行在四类并行的方案类别之上 —— **卡**（Visa / Mastercard / JCB / Amex / Diners）、**码**（PayPay / d払い / au PAY / 楽天ペイ / メルペイ / FamiPay）、**账户对账户**（Bank Pay / J-Debit / Cotra）与 **预付电子货币**（Suica / PASMO / WAON / nanaco / Edy）。每类各自坐落于不同的牌照栈、不同的结算 venue 与不同的手续费经济之上，因此消费者可见的 UX 相似性掩盖了在谁出资积分、谁承担拒付、谁掌控商户关系这些方面的重大差异。本条目是横向对比页，当读者需要一次看清全部四个经济栈时，其他 [[payments/INDEX|payments index]] 条目会指向此页。

## Wiki 路由

本页归于 [[payments/INDEX|payments index]] 之下，作为跨方案参考页。请结合 [[payments/cashless-jp-landscape|Japan cashless landscape]] 了解市场份额视角，结合 [[payments/japan-card-issuer-acquirer-processor-split|card role split]] 与 [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] 了解卡类细节，结合 [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 了解钱包类细节，结合 [[payments/account-to-account-payment-japan|A2A payment route]] 了解银行直连细节，结合 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 了解钱包 / 预付线。全部四类的牌照路由见 [[financial-licenses/payment-license-stack|Japan payment license stack]]。

## 四类方案图谱

四个类别的主要区别并不在于消费者如何刷卡、扫码或持卡 —— 而在于价值所流经的 **余额层**与运营者所承担的 **牌照路由**。

| 类别 | 示例 | 余额层 | 主要牌照路由 |
|---|---|---|---|
| 卡支付 | Visa, Mastercard, [[card-issuers/jcb\|JCB]], Amex, Diners | 发卡方授信额度（后付）| 分期销售法（信贩／综合信用购入斡旋）+ 品牌规则 |
| 码支付 | [[payment-firms/paypay\|PayPay]], d払い, [[payment-firms/au-payment\|au PAY]], 楽天ペイ, メルペイ, FamiPay | 资金移动余额／预付子余额／卡关联／银行扣款（混合）| 资金移动业 + 预付式支付手段（资金结算法）|
| 账户对账户（A2A）| Bank Pay, J-Debit, Cotra 关联 App | 银行存款账户（直接扣款）| 银行法 + JEPPO 基础设施 + 第三方时为电子结算等代行业 |
| 预付电子货币 | Suica, PASMO, [[card-issuers/aeon-card\|WAON]], nanaco, [[payment-firms/rakuten-edy\|Edy]] | 预付储值（闭环或准开放）| 预付式支付手段（资金结算法）|

每类都有一个 **方案运营者**（拥有网络规则与结算 venue 的主体）以及一项 **日本法下的牌照**，后者决定适用何种消费者保护规则、资金保全与退款机制。

## 方案运营者与结算 venue

| 类别 | 方案运营者模式 | 资金实际结算之处 |
|---|---|---|
| 卡 | 国际品牌（Visa / Mastercard / Amex / Diners）或国内品牌（[[card-issuers/jcb\|JCB]]）；4方方案将发卡方／收单方分离；3方方案（Amex / Diners / 部分 JCB 卡）将其合并为一 | 发卡方 ↔ 收单方结算经由品牌规则清算；净头寸最终经银行系统流动（日元腿多经 [[payments/japan-payment-clearing-and-settlement-infrastructure\|Zengin / BOJ-NET]]）|
| 码 | 钱包运营者（PayPay Corp、NTT docomo、KDDI、楽天ペイ、メルカリ 等）；钱包运营者通常拥有商户合同，或将聚合委任给如 Netstars 这样的 QR 网关 PSP | 先记内部钱包账本；定期净结算经全银转账至商户银行账户 |
| A2A | Bank Pay / J-Debit 用 JEPPO；即时 P2P 及商户转账用 全银网 + Cotra 系统 | 直接存款账户扣款；最终结算经全银／Cotra 每日两次批处理窗口清算 |
| 预付电子货币 | 发行体（Suica 为 JR 东日本，PASMO 为 PASMO 公司，WAON 为 AEON，nanaco 为 7 Card Service，Edy 为 楽天 Edy）| 发行体的储值账本；商户付款经发行体 ↔ 商户约定的结算时间表via全银 |

4方对 3方卡的区别之所以重要，是因为在 3方方案中不存在交换费（interchange）—— 由于品牌即发卡兼收单方，品牌获得扣除收单成本后的全部商户手续费。

## 日本法下的牌照

牌照问题处于余额层的下游，而非 UX。页面读者不应在未先识别交易触及哪个子余额之前，就称 PayPay 为「信用卡竞争对手」。

| 类别 | 牌照栈 | 关键义务 |
|---|---|---|
| 卡 | 分期销售法登记（综合信用购入斡旋业者／综合信用购入斡旋业 等）；将发卡方 对 商户签约方（收单方）对 PSP 的登记在经产省 115 名录中分离 | 持卡人授信审查、安全指引（J-CSC）、商户／PSP 的 PCI DSS、EC 的 EMV 3-DS、品牌的拒付规则 |
| 码 | 对可转移余额的资金移动业登记（第一种／第二种／第三种）；对储值子余额的预付式支付手段发行者登记；同一运营者常并行持有多张牌照 | 用户资金保全（供托／信托／保证）、AML／CFT、资金结算法下的未授权交易处理 |
| A2A | 账户本身适用银行法；JEPPO 基础设施规则；第三方在银行 API 上发起支付指令时需电子结算等代行业登记 | 银行 API 合同下的认证／设备绑定、账户信息访问规则、未授权扣款补偿（存款人保护法框架）|
| 预付 | 资金结算法下的预付式支付手段发行者备案（自家型）或登记（第三者型）；金融厅 803行 [[payments/prepaid-payment-instrument-issuers-japan-index\|third-party prepaid registry]] | 须以供托／信托／保证保全未使用余额额的 50%；停业时的退款流程；有效期／未使用余额会计 |

这些边界并不稳定 —— 运营者在新增 P2P 转账功能时常将余额从预付子账本移至资金移动子账本，这迫使重新进行牌照分析。判定基准参见 [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]。

## 收单模式（单一收单方对多收单方）

| 类别 | 收单结构 |
|---|---|
| 卡 | **多收单方。** 商户可按品牌从多家收单方（SMBC 卡、MUFG NICOS、JCB、AEON Financial Service、楽天卡 Merchant Service、作为 PF 收单方的 GMO-PG 等）中选择；商户手续费按收单方、按品牌、有时按 MCC 协商。对 Amex / Diners（3方）而言，品牌实质上为唯一收单方。|
| 码 | **每钱包单一收单方。** PayPay 商户与 PayPay 签约（或经如 Netstars 这样的网关批发接入）；d払い 商户与 NTT docomo 签约。多钱包受理通过签署多份钱包合同，或签署一个 QR 网关聚合器来实现。|
| A2A | **单一方案收单方。** Bank Pay 商户与 JEPPO 签约；J-Debit 商户与 JEPPO 签约。同一方案不存在替代收单方。|
| 预付电子货币 | **每方案单一收单方。** Suica 受理经 JR 东日本签约（及 PASMO 集团互通）；WAON 经 AEON；nanaco 经 7 Card Service；Edy 经 楽天 Edy。Suica / PASMO 之间的交叉受理存在于铁路间的 10 IC 互用方案中。|

非卡类别中的单一收单方模式，是经产省与公取委认为码与预付商户手续费比卡商户手续费更难以通过竞争来约束的原因之一。

## 商户手续费区间（MDR + 单笔）

以下为公开报告区间。实际商户手续费随 MCC、票面大小、ECR 对 MPM QR、on-us 对 off-us 及谈判力而变动。

| 类别 | 典型商户手续费（MDR）| 单笔固定额 |
|---|---|---|
| 卡 | 公取委 2022：简单平均 ~2.70%，加权平均 ~1.66%；Payments Japan 2022 路线图：类别 I 平均 2.63%，类别 II 平均 2.89% | 经典 MDR 中通常无；PSP 层可能加单笔费 |
| 码（PayPay 等）| 小商户 MPM QR 历史上为 0%（PayPay 零费率促销 2018-2021）→ 现一般商户 MPM ~1.6% 至 1.98%、CPM ~1.98% 至 2.95%；大连锁谈判费率更低 | 部分钱包对 300日元以下票面加单笔固定日元 |
| A2A（Bank Pay）| 公开公布费率区间与码支付相近或更低；商户按 JEPPO 时间表承担银行侧处理费 | 单笔账户扣款处理费 |
| 预付电子货币 | 通常 2-3% 区间；交通区 Suica 商户手续费在铁路自有零售中历史上更低；WAON / nanaco 费率由发行体设定 | 单次刷卡处理费有时已内嵌 |

经产省的商户手续费披露压力（见 [近期监管压力](#近期监管压力)）明确首先针对披露最为进展的卡类别 —— 自 2023-06-01 经产省／公取委发布以来，JCB 已披露发卡方与收单方之间的分配率。

## 发卡方手续费／交换费 —— 谁赚什么

| 类别 | 交换费或发卡方一侧的份额 | 位于何处 |
|---|---|---|
| 卡（4方）| Visa / Mastercard / JCB Japan 标准交换费率自 2023 起公布（Payments Japan 路线图 2023）；Payments Japan 2022 路线图记录 **发卡方手续费 = 类别 I 与类别 II 中均为 1.56%** | 收单方从商户手续费中向发卡方支付交换费；品牌另收方案费 |
| 卡（3方 Amex / Diners）| 无交换费 —— 品牌即发卡兼收单方 | 品牌保留扣除 PSP／处理器成本后的全部商户手续费利润 |
| 码 | 无卡意义上的正式交换费；取而代之的是向上游层支付的 **资金源手续费**：卡出资的码支付透传卡 MDR，银行扣款出资透传银行费，预付余额出资则将利润内部保留 | 钱包运营者保留余额出资的利润；卡出资则将利润漏给卡类别 |
| A2A | 支付给扣款账户银行的银行侧处理费；JEPPO 方案费 | 银行保留账户扣款收益；商户关系由 JEPPO 拥有 |
| 预付 | 无外部交换费；发行体保留扣除处理成本后的商户手续费；若价值已加载但未消费则为 **负浮存经济** | 发行体获得未兑付余额的浮存收益 + breakage |

一笔典型 ~2.5% MDR 的 4方卡交易，会向发卡方支付约 1.5-1.6% 的交换费（来自 Payments Japan 的日本数字）、~0.3-0.5% 的品牌费，余下在收单方与 PSP 之间分配。来源包参见 [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]]。

## 结算周期

| 类别 | 商户结算 | 消费者计费 |
|---|---|---|
| 卡 | 传统为 T+M（按月批处理）；主要 PSP 以溢价提供 T+5  至次日结算 | 持卡人于购买月之后的月中计费（发卡方授信浮存通常 1-2 个月）|
| 码 | 视钱包计划为 T+1  至 T+M；PayPay 银行关联结算可次日；非银行结算为每周／每月 | 资金源事件（自银行／卡／现金充值）视资金源轨道于交易前或交易时发生 |
| A2A | T+0  至 T+1 （消费者侧即时扣款，商户侧经全银／Cotra 每日两次结算批量入账）| 即时 —— 交易时银行账户扣款 |
| 预付 | 视发行体的商户合同为 T+1  至 T+M | 价值预加载；消费者于加载事件时被「计费」|

卡类别是 **消费者享有结构性授信浮存**的唯一类别 —— 其他每一类别都在交易时或临近交易时扣款，这正是尽管码支付在交易**笔数**上占主导，信用卡仍持有无现金**金额**多数的重要原因。

## 拒付处理

| 类别 | 拒付／争议路径 | 消费者保护杠杆 |
|---|---|---|
| 卡 | 品牌规则拒付（Visa Dispute、Mastercard Chargeback、JCB Dispute、Amex Dispute）；商户证据流经收单方 → 品牌 → 发卡方；理由代码标准化 | 强 —— 分期情形下分期销售法的抗辩接续，加品牌拒付规则 |
| 码 | 钱包运营者的争议台；无标准化的钱包间拒付框架；退款通常经商户或钱包客服协商 | 较弱 —— 取决于钱包 T&C；无法定拒付权 |
| A2A | 银行未授权扣款框架（现金卡为存款人保护法；Bank Pay 为银行 API 规则）；冲正经银行争议流程 | 对未授权强；对商户争议弱（消费者须直接追究商户）|
| 预付 | 资金结算法停业流程下的发行体退款政策；无商户争议拒付 | 弱 —— 仅在手段停业时退款，而非针对个别争议购买 |

拒付强度是卡支付在高票面 EC、旅行与 B2C 订阅中仍为默认的重要原因 —— 商户未履约时，消费者有回退之路。

## 受理覆盖

| 类别 | 国内线下 | 国内线上 | 跨境 |
|---|---|---|---|
| 卡 | 通用（POS、EMV 接触／非接触）| 通用 | 有 —— 国际品牌网络 |
| 码 | 高（便利店、餐厅、药妆店、商店街）；MPM QR 部署廉价 | 增长中，但对高票面 EC 不及卡通用 | 有限 —— 与 Alipay+、WeChat Pay 路由经网关 PSP 双边 |
| A2A（Bank Pay / J-Debit）| 受理有限；集中于超市、药妆店、部分连锁 | 有限 | 无 —— 国内专用银行轨道 |
| 预付电子货币 | 在交通（Suica / PASMO）、商场（WAON）、便利店（nanaco）极高；因充值上限在低票面封顶 | 有限（Suica 互联网、EC 上的 Edy）| 无 —— 闭环国内方案 |

跨境通道是卡类别保有本质独有地位之处 —— 入境游客支付与出境消费者支付，尽管存在所有国内专用竞争，都以国际品牌网络为默认。

## 认证／反欺诈栈

| 类别 | 交易时主要认证 | 二级控制 |
|---|---|---|
| 卡 | POS 处 EMV 接触／非接触 + PIN；EC 为 **EMV 3-DS**（依经产省／J-CSC 指引 6.0 自 2025-03 起对 EC 卡支付强制）；App 内为令牌化 | 商户／PSP 的 PCI DSS、不留存规则、J-CSC 漏洞扫描、品牌反欺诈监测 |
| 码 | 对钱包 App 的设备绑定 + 生物识别（Face ID / Touch ID / Android 等同）+ 4位 PIN；高额事件用 OTP | 钱包 AML 监测、注册／升级层级时的 KYC、交易速度限制、设备变更时再认证 |
| A2A | 银行 App 登录 + 生物识别 + 银行侧设备绑定；银行 API 访问由电子结算等代行业合同控制 | 银行反欺诈监测、每日扣款上限、未授权扣款冲正（存款人保护法）|
| 预付 | 低额（Suica / PASMO 无人上限通常 JPY 20,000）刷卡时无认证；高额或充值用 PIN | 发行体侧反欺诈监测、移动 App 版的 ID 绑定（Mobile Suica、WAON App）|

EC 的 EMV 3-DS 要求是单项最大的 2025 控制变更 —— 完整指引的 6.0 时间线参见 [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]]。

## 忠诚度／积分经济

此维度在日本独具复杂性，因为积分计划作为一个 **并行货币层**运作，它与支付方案层重叠但不对齐。

| 类别 | 谁出资积分 | 跨方案可兑换性 |
|---|---|---|
| 卡 | 发卡方出资（楽天卡 → 楽天积分，SMBC 卡 → V 积分，JCB 卡 → Oki Doki 积分，AEON 卡 → WAON POINT）| 经共通积分（V 积分、楽天积分、d 积分、PayPay 积分、Ponta）较高 —— 参见 [[loyalty/japan-points-landscape\|Japan points landscape]] |
| 码 | 平台出资（PayPay 积分出自 PayPay 预算，d 积分出自 NTT docomo，au PAY 积分出自 KDDI，楽天积分出自 楽天）—— 历史上活动补贴激进 | V 积分 ↔ T 积分（2024整合）；PayPay 积分与楽天积分在集团内闭环；d 积分与 au PAY 积分有选择性跨商户受理 |
| A2A | 无或极少（Bank Pay / J-Debit 不运营积分货币）| 不适用 |
| 预付 | 发行体出资（WAON POINT、nanaco 积分、Suica 奖励经 JRE POINT、Edy 奖励经 Edy 计划）| 有限 —— 通常在所属集团内可兑换 |

积分层 **并非免费利润** —— 它是一条刻意的预算线。PayPay 长期的补贴阶段（2018-2022）与楽天的飞轮，都依赖于若无支付方案层收益便可能不可持续的积分经济，这正是 [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 追踪活动成本比率的原因。

## 跨方案可兑换性与互操作性

| 通道 | 机制 | 实态 |
|---|---|---|
| 卡品牌交叉受理 | EMV + 品牌规则 | 高 —— 任何按某品牌收单的终端在全球受理该品牌 |
| 码支付跨钱包 | QR 网关聚合（Netstars JPQR、SBPS）| 部分 —— 商户可经一个网关受理多个钱包，但每个钱包仍经其自身方案路由 |
| 预付 IC 互用 | 10 IC 卡互用协议（Suica、PASMO、Kitaca、manaca、TOICA、SUGOCA、hayakaken、nimoca、ICOCA、PiTaPa）| 在交通区内高；商户侧受理参差 |
| A2A 互操作 | Cotra 系统桥接吸收存款机构与资金移动业者 | 增长中 —— 采用取决于参与的 App |
| 积分交叉兑付 | 共通积分协议 + V 积分 ↔ T 积分合并 | 选择性 —— 并非所有积分都能兑换为其他所有积分 |

Suica / PASMO 的 10 IC 互用方案是预付类别中最强的互操作故事，但受交通区覆盖的约束。码支付类别没有同等之物 —— QR 网关为商户聚合受理，但并不在钱包之间创建真正的互用方案。

## 日银网／全银／Cotra 依赖

| 类别 | 结算基础设施依赖 |
|---|---|
| 卡 | 净头寸结算最终经银行账户 → 全银国内转账 → 用于银行间最终结算的日银网 |
| 码 | 钱包运营者经全银转账结算商户付款；自银行账户的用户出资充值使用全银或银行 API |
| A2A | 直接依赖 —— Bank Pay / J-Debit 为 JEPPO 服务；Cotra 由全银网运营 |
| 预付 | 商户付款经全银转账；加载事件经全银或银行 API |

每一个日本支付方案最终都是依赖全银／日银网的系统，因为每个方案最终都需要在商业银行账户之间移动日元。完整清算图参见 [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]。

## 稳定币／EPI 重叠

围绕代币化货币，潜在的第五类方案正在浮现。它尚未达到规模，但法律路径现已界定。

| 代币化货币类型 | 邻接于 | 方案类比 |
|---|---|---|
| JPYC（EPI 路径下的电子支付手段）| 预付 + 资金移动混合 | 更接近预付经济但带链上可转移性 |
| Progmat coin（信托型稳定币）| 资金移动／银行信托 | 银行发行的存款代币类比 |
| 经 SBI VC Trade 的 USDC（电子支付手段等交易业／ECISB 路径）| 外国发行的 EPI，经 VASP 邻接交易所交易 | 跨境可用方案类比 |
| 存款代币（DCJPY）| 银行 | 代币化银行存款 |

监管分类参见 [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]。就支付方案而言，它们增加了一个尚无界定的商户受理覆盖或拒付制度的第六个余额层，故从上述四类矩阵中排除。

## 近期监管压力

| 日期 | 来源 | 何变 |
|---|---|---|
| 2022-04-08 | 公取委 | 关于信用卡商户手续费的报告：记录基于规模的费用离散，呼吁更高的交换费透明度 |
| 2023-06-01 | 经产省 + 公取委 | JCB 披露卡商户手续费在发卡方与收单方之间的分配率（在日本为首个如此做的主要品牌）|
| 2023 | Payments Japan 路线图 | Visa、Mastercard、UnionPay 公布日本信用卡标准交换费率 |
| 2024-2025 | 经产省 6.0 ／ 6.1 指引 | EC 卡支付强制 EMV 3-DS；收紧不留存规则；扩大 EC 商户的漏洞扫描义务 |
| 2025-2026 | 经产省无现金比率发布 | 2025 无现金比率 58.0% / JPY 162.7 万亿日元；费用披露压力从卡类别向码与预付类别扩展 |
| 持续中 | 公取委 | 对商户手续费不透明、码与预付类别中单一收单方定价支配力的定期调查 |

披露压力当前集中于卡类别（亦为公开数据厚度最大之处），但随码支付在无现金金额中的份额持续增长，正向码支付费用披露扩展。

## 横断面：微型商户准入（商店街经济）

四个类别在市场的 **3人以下小商户**端 —— 商店街中的个人商店 —— 看起来截然不同。

| 类别 | 小商户入网 | 硬件成本 | JPY 500 交易的全包成本 |
|---|---|---|---|
| 卡 | 收单方／PSP 承保审查；KYC；部分计划有最低月费；需 EMV 兼容终端 | JPY 0 （PSP 提供的平板读卡器）至 JPY 50,000+（完整 POS）| ~JPY 12.50  至 JPY 14.75 的 MDR + 终端摊销 + 月费 |
| 码（MPM QR）| 钱包 App 账户 + 银行账户；最少文件；打印的 QR 贴纸 | JPY 0 （打印 QR）| ~JPY 8  至 JPY 14.75 的 MDR；促销期间有时为 0  |
| A2A（Bank Pay）| 银行账户 + JEPPO 商户协议 | JPY 0 （MPM 用打印 QR）| 银行侧处理费 + 商户手续费 |
| 预付（Suica / WAON 等）| 发行体承保审查；需 FeliCa 读卡器 | JPY 30,000+ FeliCa 读卡器 | ~JPY 10  至 JPY 15 的 MDR + 读卡器硬件 |

码类别的 MPM QR 经济是唯一为商店街微型商户提供 **接近零入网成本**的方案 —— 这正是码支付比以往任何无现金浪潮更快渗透小商户细分市场的原因。卡类别因硬件成本与承保摩擦在这一端处于结构性劣势；预付电子货币类别需要大多数微型商户无法证明其合理性的 FeliCa 读卡器；A2A 在微型商户中的受理仍然狭窄。

这一微型商户成本差距，也是 **公取委商户手续费调查**政治上最受关注之处 —— 经产省的无现金政策明确认识到，小商户的费用负担是推动日本无现金比率从 2025 的基线 58.0% 迈向 2030 的目标 65% 的瓶颈。

## 相关

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/account-to-account-payment-japan]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payments/psp-merchant-settlement-risk]]
- [[financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[fintech/japan-epi-three-types-overview]]
- [[card-issuers/jcb]]
- [[payment-firms/paypay]]
- [[payment-firms/au-payment]]
- [[INDEX|FinWiki index]]

## 来源

- Payments Japan 协会：刊行物索引及 2022 ／ 2023 无现金路线图。
- Payments Japan 协会：码支付趋势调查（2026-03-30 刊行页）。
- 经产省：无现金支付政策门户及 2025 无现金比率发布（58.0% / JPY 162.7 万亿日元）。
- 经产省／公取委：关于 JCB 商户手续费分配率披露的 2023-06-01 发布。
- 经产省：分期销售法登记名录；信用购入／后付 FAQ。
- 日银：支付与结算系统门户及概要。
- 公取委：2022 信用卡商户手续费报告及发布。
- 金融厅：资金移动业者登记簿；第三者型预付式支付手段发行者登记簿；预付政策页。
- 全银网：Cotra 系统衔接说明。
- Cotra：官方服务页。
- JEPPO：Bank Pay 官方页。
- JCB：品牌／支付网络公开资料。

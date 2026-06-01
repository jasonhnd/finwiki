---
source: payments/japan-payment-scheme-economics-matrix
source_hash: 4f18f84cf77d9029
lang: zh
status: machine
fidelity: ok
title: "日本支付方案经济矩阵"
translated_at: 2026-06-01T03:31:12.250Z
---
# 日本支付方案经济矩阵

## 长篇大论；博士

日本零售支付现在运行在四个并行方案类别上 - **卡**（Visa / Mastercard / JCB / Amex / Diners）、**code**（PayPay / d払い / au PAY / 楽天ペイ / メルペイ / FamiPay）、**账户到账户**（Bank Pay / J-Debit / Cotra）和**预付电子货币**（Suica / PASMO / WAON /纳纳科/伊迪）。每个都位于不同的许可证堆栈、不同的结算地点和不同的费用经济上，因此消费者可见的用户体验相似性隐藏了在谁为积分提供资金、谁承担退款以及谁控制商家关系方面的重大差异。当读者需要同时查看所有四个经济堆栈时，此条目是其他 [[payments/INDEX|payments index]] 条目所指向的并排比较页面。

## 维基路线

它位于 [[payments/INDEX|payments index]] 下作为跨方案参考页面。请与 [[payments/cashless-jp-landscape|Japan cashless landscape]] 一起阅读，了解市场份额视图，[[payments/japan-card-issuer-acquirer-processor-split|card role split]] 和 [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] 了解卡类详细信息，[[payments/japan-code-payment-competitive-map|code-payment competitive map]] 了解钱包类详细信息，[[payments/account-to-account-payment-japan|A2A payment route]] 了解银行直接详细信息，以及 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 了解钱包/预付线路。所有四个类别的许可证路由位于 [[JapanFG/legal-financial-licenses/payment-license-stack|Japan payment license stack]] 中。

## 四类方案图

这四个类别的区别主要在于消费者如何点击、扫描或持有卡，它们的不同之处在于价值移动的**平衡层**以及运营商携带的**许可路径**。

|班级 |示例 |平衡层|主要许可途径 |
|---|---|---|---|
|卡支付 |维萨卡、万事达卡、[[JapanFG/jcb\|JCB]]、美国运通卡、大来卡 |发行人信用额度（后付款）|分期付款销售法（信贩/包括信用购入あっせん）+品牌规则|
|扫码支付 | [[JapanFG/paypay\|PayPay]]、d払い、[[JapanFG/au-payment\|au PAY]]、楽天ペイ、メルペイ、FamiPay |资金转账余额/预付子余额/卡链接/银行借记卡（混合）|资金转账服务+预付支付工具（支付服务法）|
|账户到账户 (A2A) | Bank Pay、J-Debit、Cotra 关联应用程序 |银行存款账户（直接借记）|银行法+JEPPO基础设施+电子支付代理（电子决済等代行业）在哪里第三方|
|预付电子货币|西瓜卡、PASMO、[[JapanFG/aeon-card\|WAON]]、nanaco、[[JapanFG/rakuten-edy\|Edy]] |预付费储值（闭环或准开放）|预付支付工具（支付服务法）|

每个类别都有一个**计划运营商**（拥有网络规则和结算场所的实体）和**日本法律下的许可证**，该许可证决定适用哪些消费者保护规则、资金保障和退款机制。

## 方案运营商及结算地点

|班级 |方案运算符模式|金钱实际结算的地方 |
|---|---|---|
|卡|国际品牌（Visa / Mastercard / Amex / Diners）或国内品牌（[[JapanFG/jcb\|JCB]]）； 4方方案将发行方/收单方分开； 3 方计划（Amex / Diners / 一些 JCB 卡）将它们合二为一|发行方↔收单方通过品牌规则清算进行结算；净头寸最终通过银行系统转移（通常通过 [[payments/japan-payment-clearing-and-settlement-infrastructure\|Zengin / BOJ-NET]] 进行日元交易） |
|代码|钱包运营商（PayPay Corp、NTT docomo、KDDI、Rakuten Pay、Mercari 等）；钱包运营商通常拥有商家合约或将聚合委托给 QR 网关 PSP，例如 Netstars |首先是内部钱包账本；通过 Zengin 转账定期净额结算至商家银行账户 |
| A2A | JEPPO 用于银行支付/J-Debit； Zengin-Net + Cotra 系统用于即时 P2P 和商户转账 |直接存款账户借记；最终结算每天两次通过 Zengin / Cotra 批处理窗口进行清算 |
|预付电子货币 |发卡机构（Suica 为 JR East、PASMO 为 PASMO Co.、WAON 为 AEON、nanaco 为七卡服务、Edy 为乐天 Edy）|发行人的储值分类账；商户支付流经发行人 ↔ 商户通过 Zengin 签订合同结算时间表 |

4 方与 3 方卡的区别很重要，因为在 3 方方案中，没有交换费——品牌赚取扣除收单方成本后的全部商户费用，因为该品牌是发行方-收单方。

## 日本法律许可

许可问题位于平衡层的下游，而不是用户体验。在没有首先确定交易涉及哪个子余额的情况下，页面阅读者不应将 PayPay 称为“信用卡竞争对手”。

|班级 |许可证堆栈|主要义务|
|---|---|---|
|卡|分期销售法登记（包括信用购入あっせん业者/包括信用购入あっせん业等）； METI 115 list | 发行人与商户签约方 (akuwaiara) 与 PSP 的单独注册持卡人信用筛查、安全指南 (J-CSC)、针对商户/PSP 的 PCI DSS、针对 EC 的 EMV 3-DS、品牌退款规则 |
|代码|可转账余额的资金转账服务注册（类型 I / II / III）；预付支付工具发行人注册储值子余额；同一运营商通常同时持有多个许可证 |用户资金保护（存款/信托/担保）、AML/CFT、《支付服务法》下的未经授权交易处理 |
| A2A |账户本身的银行法； JEPPO 基础设施规则；电子支付代理（电子决済等代行业）第三方向银行API发起支付指令的注册|银行API合约下的身份验证/设备绑定、账户信息访问规则、未经授权的借记补偿（预金者保护法框架）|
|预付 |根据《支付服务法》预付支付工具发行人通知（自家型）或注册（第三者型）； FSA 803-排 [[payments/prepaid-payment-instrument-issuers-japan-index\|third-party prepaid registry]] | 50% 需要通过存款/信托/担保来保障的未使用余额金额；终止时的退款流程；到期/未使用余额会计|这些之间的界限并不稳定——运营商在添加 P2P 转账功能时经常将余额从预付费子分类账转移到资金转账子分类账，这迫使进行新的许可证分析。测试参见[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]。

## 收单机构模型（单收单机构与多收单机构）

|班级 |收单机构结构 |
|---|---|
|卡| **多收单机构。** 商户可以从每个品牌的多个收单机构中进行选择（SMBC 卡、MUFG NICOS、JCB、AEON Financial Service、Rakuten Card Merchant Service、GMO-PG 作为 PF 收单机构等）；商户费用按收单机构、品牌（有时按 MCC）协商确定。对于 Amex / Diners（3 方）来说，该品牌实际上是唯一的收购方。 |
|代码| **每个钱包单一收单方。** PayPay 商家与 PayPay 签订合同（或通过 Netstars 等批发连接的网关）； d払い商家与NTT docomo签订合同。多钱包接受是通过签署多个钱包合同或签署一个二维码网关聚合器来实现的。 |
| A2A | **单一方案收单方。** Bank Pay 商户与 JEPPO 签订合同； J-Debit 商户与 JEPPO 签订合同。同一计划不存在替代收购方。 |
|预付电子货币 | **每个计划只有一个收单方。** Suica 接受是通过 JR East（和 PASMO 集团互惠）签订的合同；通过 AEON 的 WAON； nanaco 通过七卡服务； Edy 来自乐天 Edy。 Suica / PASMO 之间通过铁路间 10 IC 互用方案实现交叉接受。 |

非卡类别中的单一收单机构模式是 METI 和 JFTC 认为代码和预付商户费用比卡商户费用更难通过竞争进行监管的原因之一。

## 商户费用范围（MDR + 每笔交易）

这些是公开报告的范围。实际商户费用因 MCC、票据大小、ECR 与 MPM QR、美国内与美国外以及议价能力而异。

|班级 |典型商户费用 (MDR) |每笔交易固定 |
|---|---|---|
|卡| JFTC 2022：简单平均~2.70%，加权平均~1.66%；付款日本 2022 路线图：类别 I 平均 2.63%，类别 II 平均 2.89% |经典 MDR 中通常没有； PSP 层可能会增加每笔交易费用 |
|代码（PayPay 等）|小商户 MPM QR 历来为 0%（PayPay 零费用促销 2018-2021）→ 现在 ~1.6% 至 1.98% MPM 和 ~1.98% 至 2.95%一般商户的CPM；大连锁协议费率较低|一些钱包为低于 300 日元的票据添加每次交易的固定日元 |
| A2A（银行支付）|公开公布的费率范围类似于或低于代码支付；根据JEPPO时间表，商户承担银行端手续费|每笔交易的账户借方处理费|
|预付电子货币 |通常为2-3%范围；铁路所属零售业中转区 Suica 商户费用历来较低；发行人设定的WAON/nanaco费用|有时会嵌入每次点击处理费 |METI 商户费用披露压力（请参阅[最近的监管压力](#recent-regulatory-Pressure)）明确首先针对信息披露最先进的卡类别 — 自 2023-06-01 METI/JFTC 发布以来，JCB 已披露发行人和收单机构之间的分配率。

## 发行人费用/交换——谁赚什么

|班级 |交易所或发行方份额 |它坐落在哪里|
|---|---|---|
|卡（4方）| Visa / Mastercard / JCB 日本标准汇率自 2023  发布（Payments Japan 路线图 2023）；日本 2022  付款路线图记录**发行人费用 = 1.56% 在类别 I 和类别 II** |收单机构从商户费用中向发行机构支付互换费用；品牌也收方案费|
|卡（3-方美国运通/大莱）|没有互换——品牌是发行者和收购者 |扣除 PSP/处理器成本后，品牌保留全额商户费用利润 |
|代码|没有卡意义上的正式互换；相反，上游层的资金来源费用：卡资金代码支付通过卡 MDR，银行借记资金通过银行费用，预付余额资金将保证金保留在内部 |钱包运营商保留余额保证金；信用卡资金泄露保证金给卡类|
| A2A |支付给借方账户银行的银行端手续费； JEPPO 计划费用 |银行保留账户借方收入； JEPPO 拥有的商业关系 |
|预付 |无外部交换；发行人保留商户费用减去处理成本； **负浮动经济学** 如果价值已加载但未花费 |发行人赚取浮动收益率+未赎回余额的破损|

典型的 ~2.5% MDR 中的 4 方卡交易将向发卡机构支付大约 1.5-1.6% 交换费（来自 Payments Japan 的日本号码）、~0.3-0.5% 品牌费，其余部分由收单机构和 PSP 分配。有关源包，请参阅 [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]]。

## 结算周期

|班级 |商户结算|消费者账单|
|---|---|---|
|卡| T+M（每月批量）传统；主要PSP提供T+5 次日溢价结算|持卡人在购买月份后的月中计费（发行人信用的典型 1-2  月浮动）|
|代码| T+1  至 T+M，具体取决于钱包计划； PayPay银行关联结算可次日达；非银行结算每周/每月 |资金事件（银行/卡/现金收费）发生在交易之前或交易时，具体取决于资金轨道 |
| A2A | T+0 to T+1 （消费者侧即时借记，商户侧批量贷记，每日两次 Zengin / Cotra 结算）|即时 — 交易时记入银行账户 |
|预付 | T+1  至 T+M，具体取决于发行人的商户合同 |预加载值；消费者在加载事件时“计费”|

卡类别是**消费者享有结构性信用浮动**的唯一一类——所有其他类别都会在交易时间或接近交易时间进行借记，这是信用卡仍然拥有大部分无现金**价值**的主要原因，尽管代码支付主导了交易**数量**。

## 退款处理

|班级 |退款/争议路径 |消费者保护杠杆|
|---|---|---|
|卡|品牌规则退款（Visa 争议、Mastercard 退款、JCB 争议、Amex 争议）；商户证据流经收单机构→品牌→发行机构；原因代码标准化 |强势——分期销售法抗弁の接続分期付款，加上品牌退款规则 |
|代码|钱包运营商争议服务台；没有标准化的钱包间退款框架；退款通常通过商家或钱包客户支持协商较弱——取决于钱包条款和条件；无法定退款权 |
| A2A |银行未经授权的借记框架（现金卡的预金者保护法；银行支付的银行 API 规则）；银行纠纷流程中的逆转流|防未经授权能力强；商户纠纷弱（消费者必须直接追究商户）|
|预付 | 《支付服务法》终止流程下的发行人退款政策；无商户争议退款|弱——仅在仪器停产时退款，不适用于个人有争议的购买 |

拒付强度是卡支付在高额 EC、旅行和 B2C 订阅中仍然默认的主要原因——如果商家未能送货，消费者有一条退款途径。

## 验收足迹

|班级 |国内线下|国内在线|跨境|
|---|---|---|---|
|卡|通用（POS、EMV 接触式/非接触式）|通用|是的——国际品牌网|
|代码|高（便利店、餐馆、药店、商店街）； MPM QR 部署成本低廉 |不断增长，但不如高额 EC 卡普及 |有限——通过网关 PSP 与支付宝+、微信支付进行双边路由 |
| A2A（银行支付/J-借记卡）|有限接受；集中在超市、药店、部分连锁店|有限公司|无 — 仅限国内银行铁路 |
|预付电子货币 |交通非常便利（Suica / PASMO）、购物中心（WAON）、便利店（nanaco）；由于收费上限，低票价上限|有限公司（Suica 互联网、EC 上的 Edy）|无 — 封闭式国内计划 |

在跨境通道上，卡类保留了本质上独特的地位——入境旅游支付和出境消费支付都默认使用国际品牌网络，尽管所有竞争仅限于国内。

## 身份验证/欺诈控制堆栈

|班级 |交易时的主要身份验证 |辅助控制 |
|---|---|---|
|卡| EMV 接触式/非接触式 + POS PIN； **针对 EC 的 EMV 3-DS**（对于 METI / J-CSC 指南 6.0 下的 EC 卡支付，2025-03  强制执行）；应用内标记化 |面向商户/PSP 的 PCI DSS、非保留规则、J-CSC 漏洞扫描、品牌欺诈监控 |
|代码|设备绑定到钱包应用程序 + 生物识别（Face ID / Touch ID / Android 等效）+ 4 数字 PIN；高价值活动中的 OTP |钱包 AML 监控、注册/升级层 KYC、交易速度限制、设备更改重新身份验证 |
| A2A |银行APP登录+生物识别+银行端设备绑定；电子支付代理合约控制银行API访问|银行欺诈监控、每日借记上限、未经授权的借记逆转（预金者保护法）|
|预付 |低价值无需点击（Suica / PASMO 无人值守上限通常为 JPY 20,000）；获取更高价值或补充的 PIN 码 |发行方欺诈监控、移动应用程序变体的 ID 绑定（Mobile Suica、WAON 应用程序）|

EC 的 EMV 3-DS 要求是最大的 2025  控制更改 — 请参阅 [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] 了解完整指南 6.0  时间线。

## 忠诚度/积分经济学

这个维度在日本特别复杂，因为积分计划作为一个“平行货币层”运行，与支付方案层重叠但不一致。

|班级 |谁资助积分 |跨方案互换性 |
|---|---|---|
|卡|发卡机构资助（乐天卡→乐天积分、SMBC卡→V积分、JCB卡→Oki Doki积分、AEON卡→WAON POINT）|高通共通ポイント（V Point、Rakuten Point、d Point、PayPay Point、Ponta）—参见 [[loyalty/japan-points-landscape\|Japan points landscape]] |
|代码|平台资助（PayPay 预算中的 PayPay Point、NTT docomo 中的 d Point、KDDI 中的 au PAY Point、Rakuten 中的楽天ポイント）— 活动补贴历来激进 | V点↔T点（综合2024）； PayPay Point 和 Rakuten Point 不对团体内开放； d Point和au PAY Point选择性跨商户受理 |
| A2A |无或最少（Bank Pay / J-Debit 不运行积分货币）|不适用 |
|预付 |发行人资助（WAON POINT、nanaco 积分、通过 JRE POINT 的 Suica 奖励、通过 Edy 计划的 Edy 奖励）|有限——通常可以在所有者群体内兑换|

点层**不是自由保证金**——它是一个经过深思熟虑的预算线。 PayPay 的长期补贴阶段 (2018-2022) 和 Rakuten 的飞轮都依赖于积分经济，如果没有支付计划级别的收入，积分经济可能无法持续，这就是 [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 跟踪活动成本比率的原因。

## 跨方案的可交换性和互操作性

|车道 |机制|现实|
|---|---|---|
|卡品牌交叉受理| EMV+品牌规则|高——任何品牌收购的终端在全球范围内接受该品牌|
|代码支付跨钱包 | QR 网关聚合（Netstars JPQR、SBPS）|部分 — 商家可以通过一个网关接受多个钱包，但每个钱包仍然通过自己的方案进行路由 |
|预付费IC互用 | 10 IC卡互用协议（Suica、PASMO、Kitaca、manaca、TOICA、SUGOCA、hayakaken、nimoca、ICOCA、PiTaPa）|过境区内较高；商户接受度参差不齐|
| A2A 互操作 | Cotra 系统连接存款机构和资金转账运营商 |不断增长——采用取决于参与的应用程序 |
|积分交叉兑换 | 共通ポイント协议+V点↔T点合并|选择性 — 并非所有点都转换为所有其他点 |

Suica / PASMO 10 IC 互用方案是预付费类别中互操作性最强的方案，但受到过境区占地面积的限制。代码支付类别没有可比性——二维码网关聚合了商家的接受度，但并没有在钱包之间创建真正的互用方案。

## BoJ-NET / Zengin / Cotra 依赖性

|班级 |结算基础设施依赖|
|---|---|
|卡|净头寸结算最终通过银行账户→Zengin国内转账→BOJ-NET进行银行间最终结算|
|代码|钱包运营商通过 Zengin 转账结算商户付款；使用 Zengin 或银行 API 从银行帐户收取用户资金费用 |
| A2A |直接依赖 — Bank Pay / J-Debit 是 JEPPO 服务； Cotra 由 Zengin-Net | 运营
|预付 |通过 Zengin 转账向商户付款；通过 Zengin 或银行 API 加载事件 |

每个日本支付方案最终都是 Zengin / BOJ-NET 依赖系统，因为每个方案最终都需要在商业银行账户之间转移日元。完整的清理地图请参见 [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]。

## 稳定币/EPI 重叠

潜在的第五类计划正在围绕代币化货币出现。目前尚未形成规模，但合法途径现已确定。

|代币化货币类型 |坐在 | 旁边方案类比|
|---|---|---|
| JPYC（EPI路线下的电子支付工具）|预付费+资金转账混合 |更接近预付费经济，但具有链上可转移性 |
| Progmat币（信托型稳定币） |资金转账/银行信托|银行发行的存款代币模拟 |
| USDC 通过 SBI VC Trade（电子支付工具兑换服务/ECISB 路线）|国外发行的 EPI，通过 VASP 相邻交易所进行交易 |跨境能力方案模拟|
|存款代币（DCJPY）|银行|代币化银行存款 |

监管分类见[[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]。出于支付方案的目的，它们添加了第六个平衡层，该层尚未定义商家接受足迹或退款制度，因此它们被排除在上述四类矩阵之外。

## 近期监管压力

|日期 |来源 |发生了什么变化|
|---|---|---|
| 2022-04-08 |日本公平贸易委员会 |信用卡商户费用报告：记录基于规模的费用分散情况，呼吁提高交换透明度 |
| 2023-06-01 |日本经济产业省 + 日本公平贸易委员会 | JCB披露发卡机构与收单机构之间的卡商费用分配比例（日本首个这样做的大品牌） |
| 2023 |日本支付路线图| Visa、Mastercard、银联公布日本信用卡标准兑换率|
| 2024-2025 | METI 6.0 / 6.1  指南 | EC 卡支付强制使用 EMV 3-DS；收紧非保留规则； EC 商家的漏洞扫描义务扩大了
| 2025-2026 | METI 无现金比例发布 | 2025 无现金比率 58.0% / 日元 162.7  万亿；费用披露的压力从卡类扩展到代码类和预付费类
|正在进行 |日本公平贸易委员会 |定期调查商户费用不透明、单一收单方在代码和预付费类别中的定价能力 |

目前，披露压力主要集中在卡类（这也是公共数据深度最大的领域），但随着代码支付在无现金价值中所占份额的持续增长，披露压力正在扩展到代码支付费用披露。

## 横截面：微商户接入（商店街经济学）

这四个类别在市场的**子3个人小商**端（商店街的个人商店）看起来截然不同。

|班级 |小商户入职|硬件成本|日元 500  交易的总成本 |
|---|---|---|---|
|卡|收单机构/PSP承销；了解您的客户；某些计划中的最低月费；需要支持 EMV 的终端 | JPY 0 （PSP 提供的平板电脑阅读器）至 JPY 50,000+（完整 POS）| ~JPY 12.50  至 JPY 14.75 MDR + 终期摊销 + 月费 |
|代码 (MPM QR) |钱包应用账户+银行账户；最少的文档；印刷二维码贴纸 |日元 0 （打印二维码）| ~JPY 8  至 JPY 14.75 MDR;有时 0 in 促销期 |
| A2A（银行支付）|银行账户+JEPPO商户协议|日元 0 （MPM 打印 QR）|银行端手续费+商户手续费|
|预付费（Suica / WAON / 等）|发行人承销；需要 FeliCa 阅读器 |日元 30,000+ FeliCa 读卡器 | ~JPY 10  至 JPY 15 MDR + 读卡器硬件 |

代码类的 MPM QR 经济学是唯一能够为商店街小商户提供**近乎零的入职成本**的方案 - 这就是为什么代码支付比之前的任何无现金浪潮更快地渗透到小商户领域的原因。由于硬件成本和承保摩擦，卡类在这方面在结构上处于劣势；预付费电子货币类别需要 FeliCa 读卡器，而大多数小商户无法证明这一点； A2A 微商的接受度仍然较低。这种小商户成本差距也是 **JFTC 商户费用调查**最具政治色彩的地方 — METI 的无现金政策明确承认，小商户费用负担是将日本无现金比例从 58.0% 的 2025  基线转向 65% 的 2030  目标的瓶颈。

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
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[fintech/japan-epi-three-types-overview]]
- [[JapanFG/jcb]]
- [[JapanFG/paypay]]
- [[JapanFG/au-payment]]
- [[INDEX|FinWiki index]]

## 来源

- 日本支付协会：出版物索引和 2022 / 2023  无现金路线图。
- 日本支付协会：代码支付趋势调查（2026-03-30 发布页面）。
- METI：无现金支付政策门户和 2025  无现金比率发布（58.0% / 日元 162.7  万亿）。
- METI / JFTC：2023-06-01 关于 JCB 商户费用分配率披露的发布。
- METI：分期付款销售法登记清单；信用购买/后付款常见问题解答。
- 日本央行：支付和结算系统门户和概要。
- JFTC：2022  信用卡商户费用报告和发布。
- FSA：资金转账服务提供商注册机构；第三方预付费发行人登记处；预付费保单页面。
- Zengin-Net：Cotra系统联动说明。
- Cotra：官方服务页面。
- JEPPO：银行支付官方页面。
- JCB：品牌/支付网络公共材料。

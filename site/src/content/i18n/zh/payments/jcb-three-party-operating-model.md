---
source: payments/jcb-three-party-operating-model
source_hash: 1a79013f46f90bb1
lang: zh
status: machine
fidelity: ok
title: "JCB三方品牌运营模式"
translated_at: 2026-06-01T03:31:12.283Z
---

# JCB三方品牌运营模式

## 维基路线

该条目位于 [[payments/INDEX|payments index]] 下，作为 JCB 特定的操作模型页面，与 [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] 配对用于跨品牌角色图，并与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配对用于四类比较视图。 JCB 是唯一一个始终将品牌网络、主要收单机构和发行机构许可职能整合在一个企业集团中的国内品牌，这就是为什么其角色划分与 Visa/Mastercard 4 方计划行为存在重大差异 — 请与 [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] 一起阅读费用流结果，并与 [[payments/japan-card-security-authentication-controls|card security and authentication controls]] 一起阅读 J-CSC / EMV 3-DS 层。公司锚是 [[card-issuers/jcb|JCB Co Ltd]] 和 [[payment-firms/jcb-international|JCB International]]；主要合作伙伴发行人包括[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]和[[card-issuers/rakuten-card|Rakuten Card]]；品牌同行是 [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]、[[payment-firms/mastercard-japan|Mastercard Japan]] 和 [[payment-firms/american-express-international-japan|American Express International Japan]]。

## 长话短说

JCB 运营**第三方品牌模式**，其中 JCB Co Ltd 同时拥有品牌网络规则、运营主要收单机构业务并向合作伙伴卡公司授予发行人权利。这是与 Visa/Mastercard **四方计划**不同的运营模式，其中品牌网络实体与发行方和收单方分开，并从各自赚取计划/交换费。 JCB 的组合角色模型意味着 JCB 作为收单方和 JCB 作为发行方之间在美国交易中不存在经济交换，品牌直接控制商家规则的执行，发行方许可合作伙伴（MUFG NICOS、AEON、Rakuten Card 和 ~30 others）无需成为品牌同行即可插入 JCB 的网络。 JCB 2023  披露发行人/收单机构费用分配率（这是日本主要品牌的首次披露），这一点特别明显，因为 JCB 控制着分割的双方。

## 三方方案与四方方案的区别

区别在于品牌网络实体是否与发行者和收单者角色分开，而不在于有多少参与方接触单笔交易。

|方案类型|品牌网络实体|发行人实体 |收单机构 |示例 |
|---|---|---|---|---|
|四方（开放） |分开|多个持牌发行人 |多家持牌收购方| Visa、万事达卡、银联 |
|三方（封闭/联合）|主要发行人+收购人属于同一集团|品牌实体本身+授权合作发行人 |品牌实体本身（以及选定的合作伙伴）| American Express、Diners Club、JCB（带混合层）|

JCB 处于混合地位：它以**三方计划**作为其主要架构（品牌=主要收单方=发行方-许可方），但另外向~30 合作伙伴卡公司授予发行方权利，从而在三方基础之上创建了一个部分类似于四方的层。共同発行（联合发行人）模式是指合作伙伴在许可下发行 JCB 卡，但不与 JCB Co Ltd 本身是品牌同行。

## 公司拆分：JCB Co Ltd 与 JCB International

JCB Co Ltd 和 JCB International 不是可以互换的企业标识——它们在同一品牌下处理不同的业务：

|实体|范围 |主要角色 |
|---|---|---|
| JCB 有限公司 |日本-国内|品牌运营商+日本主要收购方+日本发行人+合作伙伴公司的发行人许可管理|
| JCB国际有限公司|国际（日本以外）|国际收单机构/商户网络+国际发行人许可+跨境结算|

与 JCB Co Ltd（或其收单方合作公司之一）“接受 JCB”合同的日本商家；新加坡或韩国“接受 JCB”与 JCB International（或其国际收单合作伙伴）签订合同的商家。持有由 [[card-issuers/mufg-nicos|MUFG NICOS]] 在日本发行的 JCB 卡并在海外使用该卡的持卡人将 JCB Co Ltd 作为发卡行，将 JCB International 作为国际收单网络交易对方。这种划分对于商户费用经济学很重要，因为国际收单方的成本结构与日本国内的成本结构不同，对于退款/争议路由也很重要，因为跨境争议遵循 JCB International 的规则。

## JCB 许可下的发行人生态系统

JCB Co Ltd 向 ~30  日本合作卡公司授予发行人权利，这些公司在发行自己的 Visa/Mastercard 的同时（或代替）发行 JCB 品牌卡。这是 JCB 计划的日本特有的主要特征之一——合作发行人不是品牌同行，没有品牌网络投票权，但他们确实承担持卡人关系上的发行人信用风险。

JCB 品牌的主要合作发行人包括：

|合作发行人 |群主播|产品简介 |
|---|---|---|
| [[card-issuers/mufg-nicos\|MUFG NICOS]] |三菱日联金融集团 |联名MUFG/NICOS/DC JCB卡；也是主要收购者|
| [[card-issuers/aeon-financial-service\|AEON Financial Service]] |永旺 | AEON JCB / AEON CARD 选择JCB |
| [[card-issuers/rakuten-card\|Rakuten Card]] |乐天 |乐天卡（JCB 选项）|
| JR相关发行人| JR东日本、JR西日本等|查看 JCB、J-WEST JCB |
|季节信用|季节高清 | JCB 季节卡 |
|东方公司（Orico）|奥睿科 | Orico JCB 卡 |
| JACCS| JACCS| JACCS JCB 卡 |
| FFG 卡、Hokkoku Credit、地区银行附属机构 |区域银行|银行渠道JCB卡|
|生命卡|艾福集团|生命卡 JCB |

合作发行人为其发行的投资组合支付 JCB Co Ltd 发行人许可/网络费用，根据 [[payments/japan-consumer-credit-operator-comparison-matrix|consumer credit operator]] 义务进行自己的持卡人信用筛查，在自己的资产负债表上记入应收账款，并作为经济发行人承担退款/欺诈损失。 JCB Co Ltd 作为主要发行人同时拥有自己的直接发行投资组合。

## 商户收单控制权与四方计划

由于 JCB 结合了品牌和主要收单机构的功能，因此商家规则的执行在结构上与 Visa / Mastercard 4 方计划不同：

|尺寸| JCB 3-方 | Visa/Mastercard 4-方 |
|---|---|---|
|商业规则制定者 | JCB Co Ltd（品牌=主要收购方）| Visa/Mastercard 规则集；每个持牌收单机构均强制执行 |
|商户对收单机构的选择 |有限责任公司 — 通常是 JCB Co Ltd 直接投资；与合作伙伴（MUFG NICOS 等）的一些共同加盟店安排 | Wide — 来自多个授权收单机构的商家精选 |
|收单方竞争| JCB 直营商户价格低廉 |授权收购方之间的高价 |
|商户收费纪律 |与JCB进行双边洽谈 |受收购方竞争约束|
|品牌费|嵌入式——无需向收购方收取单独的计划费用|明确——收购方支付品牌计划费|
|交换费| on-us 上无（发行人=收单人）；适用于合作伙伴发行的卡 |始终适用于发行人和收单机构之间 |

“on-us 无交换”功能意味着 JCB 直接持卡人向 JCB 直接商户付款时会在 JCB Co Ltd 内生成单一内部会计分录，而不是在不同实体之间分配交换和计划费用。对于合作伙伴发行的 JCB 卡（例如，持卡人拥有 MUFG NICOS 发行的 JCB 卡，可在 JCB 直接商户付款），交换确实从作为收单方的 JCB Co Ltd 流向作为发行方的 MUFG NICOS。

## 2023 费用分配披露

2023-06-01 METI / JFTC 关于 JCB 披露发行方和收单方之间的商户费用分配率的联合声明是三方模式的直接结果：因为 JCB Co Ltd 控制着两端，所以它是唯一一个可以机械地披露分配情况而无需在多个合法独立的收单方实体之间进行协调的日本品牌。 Visa/万事达卡在 2023 Payments Japan 路线图中公布了日本标准汇率，但各个收单机构的发行机构/​​收单机构费用划分并未在其四方模型中集中公布。 JFTC 的2022 商户费用报告指出，发行人/收单机构缺乏透明度是日本卡支付的主要竞争问题之一，而 JCB 的披露成为早期基准。

## 当四党统治全球时，为什么三党仍然存在

在四方卡（Visa、万事达卡）主导全球无现金交易量的世界中，三方方案（Amex、Diners、JCB）的持续存在并非偶然。三方模型在特定用例中具有结构优势：

|优势 |如何显示 |
|---|---|
|持卡人+商户关系端到端管控 |品牌可以将卡定位为优质/地位产品，并将商户体验作为一个协调的整体进行管理 |
|规则变更无需发行人/收单人进行政治协调 |新产品功能和费用变更无需多收单机构批准即可部署 |
|高级/战略账户的直接商家关系|品牌可以协商双边条款并保护战略客户免受收购方流失的影响
|忠诚度/积分计划在一个实体内干净地运行 |持卡人奖励不存在发卡方碎片化 |
|发行人和收购人损益之间的交叉补贴|品牌可以吸收收单方的利润压缩，以支持发行方的信贷/奖励经济学|

结构性劣势——相对于 Visa/Mastercard 而言，商户接受范围有限、内部发行之外的发行人生态系统有限——是第三方品牌通常被定位为优质/专业而非通用支付网络的主要原因。 JCB 对这一挑战的回应是上述的**合作伙伴-发行人模式**，这使得 JCB 的发行人足迹比美国运通/大莱大得多，同时保留了三方控制架构。

## 国内品牌与国际品牌维度

JCB 在日本市场占据着其他品牌无法完全享有的特殊地位：它**既是日本国内品牌，又是国际卡品牌**。 Visa / Mastercard / Amex / Diners 均为在日本国内运营的国际品牌；银联是一个在日本境内接受的外国、国内品牌。 JCB 是唯一**总部、品牌形象和主要规则制定机构位于日本**的品牌，同时还通过 JCB International 运营国际受理网络。

这会影响几个维度：

|尺寸| JCB 的双重定位有何重要意义？
|---|---|
|入境旅游接待|与其他日本发行的信用卡相比，JCB 在韩国、台湾、香港和东南亚部分地区更容易被接受，这反映了 JCB 国际的区域收单机构建设 |
|国内监管对话| METI / JFTC 与 JCB 直接接触；对于国际品牌来说，对话是通过日本国内代表处进行的
|国内商户费用披露| JCB可以单方面做出日本国内披露决定；国际品牌与全球总部协调|
|高端定位与普遍性| JCB 在日本和亚洲的高端定位部分取决于双品牌和收购方架构 |
|发行人联合品牌合作伙伴关系 |日本发卡合作伙伴（MUFG NICOS、AEON、乐天卡等）经常发行双网JCB+Visa/JCB+Mastercard卡，利用JCB的国内实力和Visa/Mastercard的国际通用性 |

## 跨境收单合作

JCB International 历来通过合作伙伴关系扩大国际收单足迹，而不是在每个市场建立直接的商业网络：

|地区 |收购伙伴模式 |
|---|---|
|北美 | Discover Global Network（联盟 — Discover 商家接受 JCB 卡，反之亦然）|
|欧洲 |银联国际与双边收单机构合作|
|亚洲（日本除外）|直接 JCB 国际商户入驻+本地收单机构合作伙伴关系（例如台湾的 CTBC、韩国的 KB Kookmin）|
|中国 |银联与直接合作伙伴|

Discover 联盟特别引人注目，因为它使 JCB International 在美国得到有效认可，而无需 JCB International 为个别美国商户承保。对于入境旅游目的（中国、韩国、台湾游客在日本使用 JCB 卡），JCB Co Ltd 是日本方面的主要收单机构；对于日本出境旅游目的，JCB International 通过目的地国家/地区的合作伙伴网络进行交易。

## 三方运营模式下的退款/争议

JCB 三方模式下的持卡人争议的处理路径比四方方案争议的结构更简单：

|争议步骤| JCB三方| Visa/万事达卡四方|
|---|---|---|
|持卡人举报纠纷 |致发行人（JCB Co Ltd 直接发行人或合作发行人）|致发行人 |
|发行人调查|发行人根据 JCB 争议规则进行评估 |发行人根据品牌退款规则进行评估|
|收单机构通知 |直接内部路线（on-us）；合作伙伴发布的实体间 |通过品牌网通知收单方 |
|商家通知 |通过JCB-直接收购或合作收购方|通过授权收单机构|
|分辨率| on-us 的 JCB 规则内的内部仲裁；合作伙伴-合作伙伴发行| 合作伙伴品牌仲裁级别升级可用 |

更简单的路径在美国案件的解决速度方面具有结构性优势，但当持卡人与发卡机构内部收单机构对争议交易的解释存在冲突时，缺乏独立品牌仲裁就会成为一种限制。在实践中，JCB 建立了自己的争议处理基础设施，类似于内部治理结构中的品牌仲裁层。

## JCB 涉及的交易研究清单

在分析涉及 JCB 接受的日本卡交易或商户关系时，角色组合需要区分几个层次，然后才能得出有关费用经济学、争议责任或竞争定位的结论：

1。发行人 JCB Co Ltd 是直接发行人还是合作发行人（[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/rakuten-card|Rakuten Card]] 等）？
2。收购方是 JCB Co Ltd 直接收购方还是与 JCB 合作的合作伙伴收购方？
3。交易是在我们内部（同一发行人/收单机构/品牌）还是在我们之外（不同的发行机构和收单机构）？
4。商家关系是根据 JCB Co Ltd 合同还是根据合作伙伴-收单方合同？
5。该交易是国内交易（由 JCB Co Ltd 处理）还是国际交易（由 JCB International + 外国收购方合作伙伴处理）？
6。该产品是否包含与品牌网络处理分开的分期付款/循环/BNPL 功能，这些功能会触发 [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] 问题？

这些答案决定了费用经济学、退款流程、监管披露和争议解决路径——这些都不能仅从 JCB 品牌标志中推断出来。

## 有关的

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[card-issuers/jcb]]
- [[payment-firms/jcb-international]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/rakuten-card]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/mastercard-japan]]
- [[payment-firms/american-express-international-japan]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 来源

- JCB Co Ltd：品牌、发行方、收单方业务领域公共页面。
- JCB Co Ltd：商户规则公共页面。
- JCB Co Ltd：公司集团结构页面。
- METI / JFTC：2023-06-01 关于 JCB 商户费用分配率披露的联合发布。
- METI：分期付款销售法注册列表 (115条) — JCB Co Ltd、JCB International 和合作发行人。
- JFTC：2022 信用卡商户费用报告。
- 日本支付协会：2023 无现金路线图（交换披露部分）。

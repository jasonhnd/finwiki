---
source: payments/japan-prepaid-electronic-money-operator-matrix
source_hash: 49a848dac84c8502
lang: zh
status: machine
fidelity: ok
title: "日本预付费电子货币运营商矩阵"
translated_at: 2026-06-01T03:31:12.260Z
---
# 日本预付费电子货币运营商矩阵

## 要点摘要

日本的预付费电子货币格局**不是一个行业**——它至少是三个不同的堆栈（零售预付费、交通预付费和数字钱包预付费），它们在结账时看起来相似，但根据《支付服务法》（资金决済法）属于不同的**预付费许可证类别**、不同的**技术基础**（FeliCa vs MIFARE vs纯数字）以及不同的**集团公司结构**（零售-FG、交通-铁路-FG、电子商务-FG)。如果读者将 Edy、nanaco、WAON、Suica、PASMO、ICOCA、Kitaca、TOICA、manaca、nimoca 和 SUGOCA 归为一类，则会误读退款政策、移动集成深度、商户网络经济以及每个发行人的集团银行如何支持浮动。当问题是在任何商家端或消费者端分析之前**特定品牌实际上属于哪个预付费电子货币运营商**时，此条目是 [[payments/INDEX|payments index]] 其余部分所指向的并排比较表面。与[[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]]的后付费/贷方进行比较。

## Wiki 路径

它位于 [[payments/INDEX|payments index]] 下，作为跨类别预付费电子货币参考。使用 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers JP index]] 读取每个发行人的注册源，[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 表示确定每个运营商持有哪个许可证的监管边界，[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]] 表示运输端深入研究，[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] 表示零售端深入研究，[[payments/famipay-valucreate-strategy|FamiPay ValuCreate strategy]] 表示便利店-FG 预付费通道，[[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]] 表示跨方案经济，[[payments/japan-code-payment-competitive-map|JP code-payment competitive map]] 表示 QR/代码支付覆盖，其中这些预付费品牌有时会占据上风。群组实体锚点为 [[JapanFG/rakuten-edy|Rakuten Edy]]、[[JapanFG/seven-card-service|Seven Card Service]]（nanaco 运算符）和 [[JapanFG/aeon-financial-service|AEON Financial Service]]（WAON 运算符），在 [[loyalty/japan-points-landscape|JP points landscape]]、[[retail/seven-and-i-hd|Seven & i HD]] 和 [[retail/aeon-group|AEON Group]] 处具有更广泛的群组表面。

## 为什么这个矩阵很重要

日本的预付电子货币是 **日元 25 万亿级结算层**（所有 11+ 品牌的年度交易量），每个发行人的差异会严重影响 (a) **预付余额浮动经济学** — 日元在发行人资产负债表上停留多长时间，以及《支付服务法》规定的监管存款/担保义务适用，(b) **商户承兑经济学** — Suica/PASMO 的接受度受交通 FG 运营成本的费率约束，而 WAON/nanaco 的接受度则受零售 -FG 集团交叉补贴的费率约束，(c) **移动集成深度** — Apple Pay / Google Pay 支持针对不同品牌以不同的顺序提供，移动 FeliCa 与仅数字钱包的路线存在差异，(d) **退款/消费者保护制度** — 交通品牌建立了纯预付费品牌通常缺乏的遗失卡/退款程序， (e) **集团银行支持**——浮动负债由母集团银行或银行相邻实体隐式或明确支持。

下面的矩阵列出了这些维度，以便读者可以区分“Suica 是一家银行法相邻的交通发行人，并获得 JR 东海岸资产负债表支持”、“nanaco 是一家支付服务法第三者型前払发行人，拥有七家银行/七和 i 集团的支持”和“Rakuten Edy 是一家乐天 FG 超市内的支付服务法第三者型前払发行人”——三个结构不同的运营商配置文件共享 FeliCa-tap UX。

## 每个发行人的资料
### Edy — 乐天 Edy（乐天集团 4755）

**运营商**：[[JapanFG/rakuten-edy|Rakuten Edy Co., Ltd.]]（乐天集团子公司，TSE Prime 4755）。 **许可证**：支付服务法第三者型前払式支払手段発行者（第三方类型预付费发行人）。 **技术**：FeliCa（Edy IC 芯片；还有用于 Apple Pay / Google Pay / Osaifu-Keitai 的移动 FeliCa）。 **发布**：bitWallet 推出的 2001 （被 Rakuten 2010,  更名为 Rakuten Edy 2012 收购）。 **分发**：实体 Edy 卡、Mobile FeliCa、Apple Pay Edy、Google Pay Edy。 **商户网络**：~1.1M 积分（预付费品牌中最广泛的之一）。 **移动集成**：非常深入 - 自推出以来，Apple Pay 添加了 Edy 2016-10, Google Pay 2018-05, native Osaifu-Keitai。 **退款政策**：余额退款可在 Rakuten Edy 办公室（文书工作繁重）进行。 **集团银行后盾**：乐天银行（TSE Prime 5838）是集团网上银行； Edy float 由 Rakuten FG 资产负债表提供支持。 **集团交叉链接**：乐天积分集成 — 通过 Edy 赚取/花费乐天积分。跨方案比较请参见 [[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]]。

### nanaco — 七卡服务（七 & i HD 3382）

**运营商**：[[JapanFG/seven-card-service|Seven Card Service Co., Ltd.]]（[[retail/seven-and-i-hd|Seven & i HD]]、TSE Prime 3382 内的子公司）。 **许可证**：支付服务法第三者型前払式支払手段発行者。 **技术**：FeliCa（nanaco 卡 + 移动 FeliCa）。 **首发**：2007-04 （首日，全国7-11有售）。 **分发**：实体nanaco卡、nanaco手机（Android Osaifu-Keitai）、Apple Pay nanaco。 **商户网络**：~0.7M 积分，重点关注七家和 i 集团商店（7-11、Ito-Yokado、SOGO/Seibu Legacy、Denny's）。 **移动集成**：Apple Pay 添加了 nanaco 2019-10。 **退款政策**：可在七家银行柜台办理余额退款（七家银行 ATM 机是现金进出通道）。 **集团银行后盾**：[[JapanFG/seven-bank|Seven Bank]]（TSE Prime 8410）是集团银行； nanaco 的现金进/出通道使用七家银行 ATM 作为主要渠道——这在结构上在预付费品牌中是独特的（大多数使用第三方便利店或合作银行 ATM）。 **集团交叉链接**：nanaco 积分（7 和 i 集团购买时的 1.0%，0.5% 标准）以及与 [[payments/funds-transfer-service-providers-japan-index|funds-transfer]] 和七卡服务内的信用卡流量合并。有关详细信息，请参阅 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]。

### WAON — 永旺集团（永旺 8267 / 永旺金融服务 8570）
**运营商**：[[JapanFG/aeon-financial-service|AEON Financial Service Co., Ltd.]]（[[retail/aeon-group|AEON Group]] 内的子公司，母公司 AEON Co. TSE Prime 8267；AEON Financial Services 单独上市 TSE Prime 8570）。 **许可证**：《支付服务法》第三方型预付支付工具发行人。 **技术**：FeliCa（WAON卡+移动FeliCa）。 **发布**：2007-04 （基本上与 nanaco 同一发布月份，故意的零售预付费竞争）。 **分发**：实体WAON卡、移动WAON（Android Osaifu-Keitai）、Apple Pay WAON。 **商户网络**：~1.0M 积分，重点关注 AEON 集团商店（AEON Mall、MaxValu、MiniStop、AEON Pharmacy、daiei）。 **移动集成**：Apple Pay 添加了 WAON 2021-05 （明显晚于 Nanaco）。 **退款政策**：余额可在 AEON 服务柜台退款。 **集团银行支持**：[[JapanFG/aeon-bank|AEON Bank]]（集团互联网银行）和AEON金融服务资产负债表共同支持WAON浮动。 **集团交叉链接**：WAON积分+AEON卡自动充值一体化； AEON 购物者的主要用户体验是与 AEON 卡相连的**WAON 接口**自动充值。参考[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]。

### Suica — JR 东日本（东日本铁路 9020）

**运营商**：东日本旅客铁道公司（JR East、TSE Prime 9020）——Suica **由 JR East 直接运营**（而非单独的子公司），其结构与上述零售预付发行人不同。 **许可证**：《支付服务法》第三方型预付支付工具发行人。 **技术**：FeliCa（Suica IC + Mobile Suica，在交通卡中支持最广泛的 Apple Pay/Google Pay/Mobile FeliCa）。 **推出**：2001-11 （最初作为仅限交通的付费卡；扩展到购物支付2004-03）。 **分发**：实体 Suica 卡、Mobile Suica (Android)、Apple Pay Suica（自 2016-10  — 日本 iOS 发布的头条新闻）、Google Pay Suica。 **商户网络**：~1.6M 积分（最广泛的预付费电子货币），包括所有可互操作且全自动接受交通卡的商户。 **移动集成**：最深入 — Apple Pay Suica 2016-10  是 iOS 在日本的一次重大发布活动。 **退款政策**：完善 — Suica 余额和 500 yen 押金可在 JR 东日本绿の窓口 (Midori-no-Madoguchi) 售票柜台退款，并要求 Suica 遗失卡补发并保留余额。 **集团银行后盾**：JR东日本不经营银行； Suica 位于 JR 东日本的合并资产负债表中，并根据《支付服务法》规定的预付负债进行拨备。 **集团交叉链接**：JRE POINT（JR东日本忠诚度计划）整合、Atre/NewDays/Beck’s咖啡店网络、Ekinet（在线购票）整合、JR东日本银行卡（合作伙伴瑞穗）联合品牌。 Suica 是 10  主要交通卡的**互操作性骨干**；参见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### PASMO — PASMO Co. .
**运营商**：PASMO Co., Ltd.（25+拥有的合资发行人，东京都市区的私营铁路和巴士运营商，包括东急、小田急、京王、东武、西武、京成、东京地铁、都营等）。 **许可证**：《支付服务法》第三方型预付支付工具发行人。 **技术**：FeliCa（PASMO 卡 + PASMO Mobile）。 **发布**：2007-03 （Suica-PASMO 推出新产品前一个月）。 **分发**：实体PASMO卡、PASMO Mobile（Android、2020-10）、Apple Pay PASMO（Android、2020-10 ）。 **商户网络**：与 Suica 相同的可互操作公共网络（~1.6M 点）。 **移动集成**：Apple Pay PASMO 在 Apple Pay Suica** 之后到达 2020-10, **4 ——这一层反映了让 25+ 利益相关者运营商与 JR 东日本作为单一决策者保持一致的合资协调成本。 **退款政策**：在发卡铁路售票处办理余额退款（具体流程因发卡铁路而异），指定PASMO补发并保留余额。 **集团银行支持**：每个成员铁路承担其相应份额的浮动负债；没有单一银行的支持。 **集团交叉链接**：每个会员铁路忠诚度计划（东急TOKYU POINT、小田急OdakyuPoints、东京地铁To Me卡等）——PASMO是共享铁路技术，但忠诚度碎片是由发行铁路发行的。参见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### ICOCA — JR 西日本（西日本旅客铁道 9021）

**运营商**：西日本旅客铁道株式会社（JR West、TSE Prime 9021），直接运营。 **许可证**：《支付服务法》第三方型预付支付工具发行人。 **技术**：FeliCa（ICOCA卡+移动ICOCA）。 **发布**：2003-11。 **分发**：实体 ICOCA 卡、移动 ICOCA（Android 2023-06）、Apple Pay ICOCA（2023-06  - 由于 JR West 技术投资时机，比 Suica 晚得多）。 **商业网络**：相同的可互操作的公共网络。 **移动集成**：Apple Pay ICOCA 2023-06 （Suica 之后的~7  年）。 **退款政策**：JR西日本售票处余额退款，持牌ICOCA补发。 **集团银行支持**：JR West 资产负债表（无集团银行）。 **集团交叉链接**：ICOCA POINT（忠诚度）和 J-WEST 卡（合作伙伴 SMBC）。参考[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### Kitaca — JR 北海道

**运营商**：北海道铁路公司（JR 北海道，私营企业 — 未在东京证券交易所上市，属于政府附属的铁路公司）。 **许可证**：《支付服务法》第三方型预付支付工具发行人。 **技术**：FeliCa（Kitaca 卡；自 2026 起没有移动 Kitaca）。 **发布**：2008-10。 **分发**：仅限实体卡（无移动集成）。 **商业网络**：通过多媒体网络可互操作（使用更广泛的网络进行接受）。 **移动集成**：**无** — Kitaca 是唯一一张不支持 Mobile/Apple Pay/Google Pay 的主要 10  交通卡，反映了 JR 北海道有限的财务状况。 **退款政策**：在 JR 北海道售票处进行余额退款。 **集团银行支持**：JR 北海道资产负债表。 **集团交叉链接**：最小的忠诚度计划深度。

### TOICA — JR 东海（东海旅客铁道 9022）
**运营商**：东海旅客铁道公司（JR 东海、TSE Prime 9022），直接运营。 **许可证**：《支付服务法》第三方预付费支付工具发行人。 **技术**：FeliCa（TOICA 卡；试点/自 2026 起限制的移动 TOICA）。 **发射**：2006-11。 **分发**：实体卡、手机待处理。 **商户网络**：全国互通。 **移动**：与 Suica/PASMO 相比，有限/延迟 — JR Central 历来优先考虑新干线票价集成（EX-IC、SmartEX），而不是移动 TOICA。 **退款政策**：售票处退款。 **集团银行支持**：JR Central 资产负债表。 **集团交叉链接**：JR中央塔/JR东海相关零售、东海道新干线预订的EX-IC整合。

### manaca — 名铁 / 名古屋铁道

**运营商**：MIC、名铁 IC 卡 — 名铁（名古屋铁道）和名古屋市交通局的合资企业。 **许可证**：《支付服务法》第三方预付费支付工具发行人。 **技术**：FeliCa（manaca 卡；没有广泛的移动集成）。 **发射**：2011-02。 **分发**：实体卡。 **商户网络**：全国互通。 **移动集成**：有限。 **退款政策**：售票处退款。 **集团银行支持**：名铁资产负债表+名古屋市交通局。 **团体交叉链接**：名铁忠诚度（Meitetsu MEMBERS）、名古屋市交通卡遗产。

### nimoca — 西铁/西日本铁路

**运营商**：Nimoca Co., Ltd. — 由西日本铁路 (Nishitetsu) 控股的合资企业。 **许可证**：《支付服务法》第三方预付费支付工具发行人。 **技术**：FeliCa（尼莫卡卡）。 **发射**：2008-05。 **分发**：实体卡。 **商户网络**：全国互通。 **移动集成**：有限。 **退款政策**：售票处退款。 **集团银行支持**：西铁资产负债表。 **集团交叉链接**：nimoca Points、福冈都市圈内的西铁巴士/铁路一体化。

### SUGOCA — JR九州（九州铁道9142）

**运营商**：九州旅客铁道公司（JR九州、TSE Prime 9142），直接运营。 **许可证**：《支付服务法》第三方预付费支付工具发行人。 **技术**：FeliCa（SUGOCA卡）。 **发布**：2009-03。 **分发**：实体卡。 **商户网络**：全国互用互通。 **移动整合**：自 2026  起受限（通过单独的 EX-IC 路线整合 JR 九州新干线）。 **退款政策**：售票处退款。 **集团银行支持**：JR 九州资产负债表。 **集团交叉链接**：JR 九州零售和旅游忠诚度。

## 大比较矩阵表

|品牌 |操作员|家长群|许可证（支付服务法）|技术 |发布 |商户网络（大约）| Apple Pay 支持自 |退款政策 |集团银行后盾|集团交叉链接|堆栈层|
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Edy** | [[JapanFG/rakuten-edy\|Rakuten Edy]] |乐天集团（4755）|第三方型预付| FeliCa（移动 FeliCa）| 2001 | 〜1.1M | 2016-10 |办公室（文书工作）|乐天银行 (5838) |乐天积分 |零售/电子商务|
| **nanaco** | [[JapanFG/seven-card-service\|Seven Card Service]] | [[retail/seven-and-i-hd\|Seven & i HD]] (3382) |第三方型预付 | FeliCa（移动 FeliCa）| 2007-04 | 〜0.7M | 2019-10 |七银行柜台| [[JapanFG/seven-bank\|Seven Bank]] (8410) | nanaco 积分 + 7&i 集团 |零售（以 CVS 为中心）|
| **WAON** | [[JapanFG/aeon-financial-service\|AEON Financial Service]] (8570) | [[retail/aeon-group\|AEON Group]] (8267) |第三方型预付| FeliCa（移动 FeliCa）| 2007-04 | 〜1.0M | 2021-05 |永旺服务柜台 | [[JapanFG/aeon-bank\|AEON Bank]] | WAON 积分 + AEON 自动充值卡 |零售（以商场为中心）|
| **Suica** | JR东日本（直营）| JR东日本 (9020) |第三方型预付| FeliCa（移动 FeliCa）| 2001-11 | 〜1.6M | 2016-10 |背景（完善）| JR东日本资产负债表（无集团银行）| JRE POINT + ekinet + Atre |交通（东京-东日本）|
| **PASMO** | PASMO Co.（25+铁路合资公司）|都市私营铁路|第三方型预付 | FeliCa（移动 FeliCa）| 2007-03 | ~1.6M（利用）| 2020-10 |各发行人铁路办公室 |会员铁路资产负债表|每条铁路的忠诚度（TOKYU POINT等）|交通（东京地铁私铁） |
| **ICOCA** | JR 西日本（直营）| JR 西日本 (9021) |第三方型预付 | FeliCa（移动 FeliCa）| 2003-11 | ~1.6M（利用）| 2023-06 | JR西日本售票处 | JR 西日本资产负债表 | ICOCA POINT + J-WEST 卡（SMBC 合作伙伴）|交通（关西） |
| **Kitaca** | JR北海道（直营） | JR 北海道（纽约市）|第三方型预付|费利卡 | 2008-10 |详情| **无** | JR北海道售票处| JR 北海道资产负债表 |最小|过境（北海道） |
| **TOICA** | JR东海（直营）| JR 东海 (9022) |第三方型预付|费利卡 | 2006-11 |详情|有限/迟到| JR中央售票处 | JR中央资产负债表| EX-IC新干线整合|交通（东海） |
| **manaca** |镜子（MIC）|名铁+名古屋市|第三方型预付 |费利卡 | 2011-02 |详情|有限|每个运营商办公室 |名铁+市局|名铁会员 |过境（名古屋） |
| **nimoca** | 尼莫卡社 |西铁（西日本铁路）|第三方型预付|费利卡 | 2008-05 |详情|有限|每个运营商办公室 |西铁资产负债表| Nimoca 积分 + 西铁集成 |过境（福冈） |
| **SUGOCA** | JR九州（直营）| JR九州 (9142) |第三方型预付 |费利卡 | 2009-03 |详情|有限| JR九州售票处| JR九州资产负债表| JR 九州 旅游/零售 |过境（九州） |

## 横轴：零售-FG vs. 交通-铁路-FG vs. 电子商务-FG

上面的矩阵列出了 11  品牌，但它们分为**三个运营商类别**，这些类别决定了交叉链接经济性、退款程序复杂性和集团银行支持态势：

### Retail-FG预付（零售集团金融子公司发行）

- **nanaco** — 由七卡服务公司在七号内发行且高清
- **WAON** — 由 AEON 集团内的 AEON Financial Services 发行
**定义特征**：商户网络主要集中在母集团商店，通过母集团银行ATM（nanaco的七家银行）或母公司商店柜台（WAON的AEON）进行现金进出，忠诚度计划与母集团购物行为深度结合，与母集团信用卡相关的自动充值（AEON卡→WAON自动充值），集团内信用卡交叉销售作为主要的单位经济驱动力。零售 FG 预付费**在操作上是一个带有预付费包装的零售忠诚度计划** - 预付费负债位于金融子公司的资产负债表上，但经济逻辑是捕获购物者频率而不是提取支付利润。有关详细信息，请参阅 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]。

### Transit-rail-FG 预付（由铁路运营商发行）

- **Suica** — JR 东日本
- **PASMO** — 东京地铁私营铁路合资公司
- **ICOCA** — JR 西日本
- **Kitaca** — JR 北海道
- **TOICA** — JR 东海
- **manaca** — 名铁 + 名古屋市
- **nimoca** — 西铁
- **SUGOCA** — JR 九州

**定义特征**：预付费作为售票基础设施的延伸而发行，完善的退款程序（铁路售票处网络处理零售 FG 预付费难以解决的丢失卡/退款流程），全国相互利用互操作性主干网将 10  主要品牌连接到单一受理网络，移动集成时间取决于每个运营商的技术预算（Suica 首先，ICOCA 7  几年后，Kitaca 仍然没有达到所有），大多数情况下没有集团银行（铁路资产负债表直接承担浮动负债）。交通 FG 预付费是**在操作上是一个扩展到零售受理的交通支付系统** - 最初的目的是点击乘车，零售受理是副产品。请参阅 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]] 了解交通端的深入研究。

### 电商-FG预付

- **Edy** — 乐天集团内部的 Rakuten Edy

**定义特征**：母公司 FG 是一家互联网/电子商务集团，预付费与二维码/代码支付 (Rakuten Pay)、卡 (Rakuten Card) 和积分 (Rakuten Points) 并存于多产品钱包堆栈中，实体店接触点补充了电子商务母公司的在线业务，忠诚度计划与母公司更广泛的电子商务生态系统进行深度集成。 Edy 是**该运营商类别中唯一的主要 JP 预付费电子货币**，这反映了历史顺序 - Edy 在 2001 （乐天收购之前）推出，当时零售 FG 和交通 FG 预付费尚未进入市场，随后被吸收到乐天的超市战略中。

## 互操作性骨干 — 全国互用（Nationwide Mutual Use）

10 主要交通卡品牌（Suica、PASMO、Kitaca、TOICA、manaca、ICOCA、PiTaPa、nimoca、SUGOCA、はやかけん）通过2013-03 推出的**全国互用计划**进行连接——无论该卡属于哪个品牌，只要在任何参与的交通或商户终端上的任何兼容读卡器上点击一下即可使用。这将在所有 10  品牌之间创建一个**~1.6M 点**的单一共享受理网络，这是全球最大的非接触式预付费受理网络之一。
经济效果是，规模较小的交通品牌发行人（Kitaca、TOICA、manaca、nimoca、SUGOCA）无需承担建设网络的全部购置成本即可访问整个网络。 JR 东日本作为 Suica 的发行人，是事实上的网络骨干提供商，这也是 JR 东日本的 Suica 平台投资作为公共产品在结构上被低估的原因之一。

请注意，**PiTaPa**（关西地区私人铁路预付费，由 Surutto KANSAI 发行）是一个主要的交通卡品牌**不在上面的预付费电子货币运营商矩阵中**，因为 PiTaPa 使用**后付费**模式（在月末信用计费）而不是预付费。 PiTaPa 从结构上来说是一张轨道信用卡而不是预付卡，并且注册为“个体信用购入あっせん”/包括“信用购入あっせん”，而不是“第三者型前払”——有关后付费分类，请参阅 [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]]。

## 边界情况

- **FeliCa 与 MIFARE 在日本市场** — 此矩阵中的每个品牌都是 **基于 FeliCa**，而不是 MIFARE。 MIFARE 是非接触式交通的全球主导标准（伦敦 Oyster、香港八达通 pre-Visa-overlay、新加坡 EZ-Link、NYC OMNY 等均使用），但日本交通预付费堆栈中基本上不存在 MIFARE。 FeliCa 选择是 NTT DoCoMo 围绕 2004  的 Osaifu-Keitai 计划和 JR 东日本早期的 Suica-FeliCa 选择做出的，将日本市场锁定在 FeliCa 大约 25  年里。这是 JP 预付费 IC 在交通 + 零售领域无缝工作（单芯片标准）的结构性原因，但在没有覆盖层的情况下无法轻松地与基于 MIFARE 的全球交通系统进行互操作（Visa Touch / EMV 非接触式覆盖层现在正在每个铁路基础上推出，作为解决方法）。
- **Suica 的监管分类** — Suica 根据《支付服务法》注册为第三者型前払式支払手段，但 JR 东日本**不是《银行法》银行或资金移动业资金转账运营商**。 Suica 浮动金额（所有余额在任何给定时间估计 > 日元 200B+）基于 JR 东日本的预付负债以及法定存款担保条款，而不是受到银行系统保护。这就是为什么 Suica 退款程序是运营商方而不是存款保险方的原因。
- **PASMO 合资浮动分配** — PASMO 的浮动负债按照发行量按比例分配给 25+ 成员铁路发行人。即使随后在东京地铁站支出，在东急车站存入的余额也是东急资产负债表的负债；成员铁路之间进行内部结算。这在结构上与 JR 东日本/JR 西日本/JR 九州单一实体模型不同。
- **Apple Pay 支持差距作为竞争标记** — Apple Pay 支持时间（Suica 2016-10 → nanaco 2019-10 → PASMO 2020-10 → WAON 2021-05 → ICOCA 2023-06 → 其他尚未）是一个竞争标记。 Suica 在 iOS-JP 集成方面的先发优势巩固了其在东京地铁数字原生代中的主导地位； ICOCA 的 7 年滞后明显影响了关西地区数字预付费的采用。
- **nanaco 的七家银行 ATM 现金通道的独特性** — nanaco 是矩阵中唯一一个现金进/出坡道使用**专用集团银行 ATM 网络作为主要渠道**的品牌（每个 7-11 内都有七家银行 ATM）。其他零售品牌（Edy、WAON）使用母公司的客户服务柜台或第三方便利店 ATM 机。从结构上讲，这就是为什么 nanaco 的 reload UX 在 JR 远程客户的零售预付费领域中是最流畅的。
- **WAON 自动チャージ（自动充值）集成** — WAON 与 AEON 卡关联的自动充值是 AEON 购物者的主要用户体验，也是 AEON 卡持有者维持卡关系最常提及的原因之一。这是一种结构性交叉链接，没有集团内信用卡发行机构的纯预付费品牌无法复制。
- **Rakuten Edy 的电子商务 FG 定位** — Edy 是母公司 FG 是**电子商务/互联网集团**而不是零售 FG 或交通铁路 FG 的矩阵中唯一的预付费电子货币。 Rakuten Edy 在 Rakuten 生态系统中的作用部分是提供实体店接触点，以补充 Rakuten Pay（二维码/代码支付）和 Rakuten Card（信用卡）——请参阅 [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]。
- **Kitaca 的无移动设备差距** — 截至 2026，Kitaca 是唯一没有任何移动/Apple Pay/Google Pay 产品的全国主要互用会员。移动集成的财务投资成本是被引用的原因； JR 北海道有限的财务状况限制了可自由支配的技术支出。
- **破损和未赎回余额经济学** — 所有预付电子货币发行人均承担**破损**责任（余额已加载但从未花费），并且《支付服务法》要求发行人在半年截止日期维持至少 50% 未赎回余额的発行保证金（发行保证金）。对于零售预付费（WAON、nanaco、Edy）来说，破损线是一个重要的利润驱动因素，但对于交通预付费（Suica、PASMO）来说，这种利润驱动力就不那么明显了，因为用户更频繁地进行小额充值。该维度不在矩阵的列行中（对于公共源矩阵来说过于依赖估计），但它是预付费发行人业务模型背后的关键经济故事 - 请参阅 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 了解监管存款机制。
- **Mobile FeliCa 锁定 Android + Apple Pay** — Mobile FeliCa 适用于具有正确 NFC 芯片支持的 Android 手机（基本上是自 2010 时代 Osaifu-Keitai 以来的所有日本市场 Android 手机）以及自 iPhone 7 （2016  推出 Apple Pay JP）以来的 iPhone。移动 FeliCa **不适用于非日本市场的 Android 手机**，这是这些预付费品牌的入境游客用户体验仅限于 Visit Suica/Welcome Suica 实体卡产品而非移动设备的原因之一。
- **二维码/代码支付叠加**：这些预付费品牌中的一些越来越多地通过二维码/代码支付叠加访问（例如，Rakuten Pay 通过 Edy-charge 作为其资金来源之一；nanaco 可以通过各种二维码轨道加载）。因此，“预付费电子货币品牌”和“二维码支付品牌”之间的明确分离正在消失——有关覆盖景观，请参见 [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]。

## 浮点数近似排序
任何特定时间未赎回预付余额的公共来源粗略排序（数字因半年截止日期而异，并且发行人之间的披露格式不一致）：

1。 **Suica** — 日本、日元 200-300B 范围内最大的单一品牌预付费浮动卡
2。 **WAON** — 日元 100-200B 范围
3。 **PASMO** — 日元 100-200B 范围（分布在 25+ 成员铁路资产负债表中）
4。 **nanaco** — 日元 100-200B 范围
5。 **Edy** — 日元 50-100B 系列
6。 **ICOCA** — 日元 50-100B 系列
7。 **TOICA / manaca / nimoca / SUGOCA / Kitaca** — 均低于 JPY 50B

在任何给定时间，所有 10+ 品牌的**预付费浮动总额为 JPY 1-1.5  万亿级**。根据《支付服务法》，发行人必须在最近的法律事务局保存至少 50% 的半年截止未赎回余额的発行保证金（发行保证金），这意味着 **大约 500-750  亿日元的发行保证金由日本政府保管，作为对预付费用户的保护**。这是日本金融体系中最大的消费者保护存款池之一，也是《支付服务法》预付制度受到严格监管的结构性原因。有关监管详细信息，请参阅 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 集团银行后盾姿态

矩阵中的“集团银行后盾”列是更微妙的维度之一，值得扩展：

- **零售 FG 与集团内银行**（nanaco/Seven Bank、WAON/AEON Bank、Edy/Rakuten Bank）——集团内银行通过 ATM 和资产负债表能力提供运营现金进/出通道，以吸收预付负债压力
- **没有集团银行的Transit-FG**（Suica/JR East、ICOCA/JR West、SUGOCA/JR九州、TOICA/JR Central、nimoca/Nishitetsu等）——铁路运营商的资产负债表直接承担预付负债；现金进出匝道使用合作银行 ATM（瑞穗与 JR 东日本合作推出 Suica，SMBC-JR 西日本合作推出 ICOCA）
- **PASMO合资企业** — 25+成员铁路资产负债表承担比例责任；没有单一的后盾实体
- **Kitaca / 北海道边缘案例** — JR 北海道是一家特殊会社，拥有政府支持的结构性支持；预付负债由部分政府支持的运营商承担，这与完全私有化的 JR 本州三线（东/西/中部）不同

集团内银行的存在或不存在会影响（a）发行人在没有外部过桥融资的情况下以多快的速度推动有压力的预付负债事件，（b）监管参与是什么样的（集团银行支持的发行人可以通过银行现有的英国金融服务管理局/日本央行监管渠道进行对话，而不是重新开始），以及（c）发行人尝试相邻金融科技功能的容易程度（通过集团信用卡自动收费需要集团信用卡合作，这在统一的银行内更容易）零售-FG）。

## 《支付服务法》规定的监管存款义务

矩阵中的所有 11  品牌均根据《资金决済法》注册为 **第三者型前払式支払手段発行者**（第三方类型预付费发行人），该法规定：
- **发行保证金** - 在每半年截止点（3-31 和9-30），发行人必须以现金、政府债券或银行担保的形式，在最近的法务局存入至少50%的半年末未赎回余额。在发行人破产时，保证金可作为用户保护
- **业务报告** — 向 FSA 提交年度报告，包括预付余额、交易量、退款指标
- **投诉处理** — 需要指定投诉处理组织 (ADR) 会员资格
- **商户管理** - 对于第三方发行人（相对于单一商户预付费），发行人有义务管理参与商户关系
- **业务改进令** — 如果出现合规问题，FSA 可以发布业务改进令

第三方与基于家庭的区别是结构性的：第三方是“被许多商家接受的通用”模型（此矩阵中的所有 11  品牌），而家庭是“仅在发行人自己的商店接受”模型（例如，仅在该百货商店使用的百货商店预付卡）。以家庭为基础的制度的监管负担较轻。边界检查是预付费是否被发行人集团以外的“第三方”商户接受——边界详细信息请参阅[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 与资金转移制度的比较

刚接触日本支付的读者经常会将**预付电子货币**与**资金转账**相混淆——它们共享钱包余额用户体验，但拥有不同的许可证，且规则截然不同：

|尺寸|预付第三方预付款|资金转账 资金转账业务 |
|---|---|---|
|余额可退还现金 |有限（根据支付服务法 20 条修正案时代规则；大多数品牌通过服务柜台提供有限的现金返还）|是 — 操作员必须启用余额提款至银行账户 |
|用户间转账（送金）|预付费制度下一般不允许 |是的——资金移动业的定义能力 |
|每笔交易限额 |许可证未指定（因发行者政策而异）|按许可证类型（类型 1 / 2 / 3）分层，带上限 |
|用户资金保护 | 発行保证金50%存款|完全隔离+信任或保证|
|示例 | Suica、WAON、nanaco、Edy、PASMO、ICOCA 等 | Merpay、PayPay、Rakuten Pay（支持用户间转账）、LINE Pay、Kyash |

界限越来越模糊——像 PayPay 和 Merpay 这样的产品同时运行**多个许可证堆栈**（基本钱包预付费，资金移动业用于转账功能，每个功能激活适当的许可证）。一些预付费品牌产品正在悄然迁移到资金移动产业基础上，以实现转账功能。资金转账方请参见 [[payments/funds-transfer-service-providers-japan-index|funds-transfer service providers JP index]]。

## 移动 FeliCa 生态系统演变

Mobile FeliCa 的推出模式决定了哪些预付费品牌主导了移动优先使用：

|年份|活动 |影响 |
|---|---|---|
| 2001 | Suica 实体卡推出 |开创 FeliCa 过境先例 |
| 2004 | NTT DoCoMo / FeliCa Networks 推出移动 FeliCa |将日本移动支付锁定为 FeliCa 标准 |
| 2006-01 | Android 手机 Suica (FOMA Osaifu-Keitai) |首款移动交通预付费 |
| 2007-04 | nanaco + WAON 发布 |零售预付费 FeliCa 采用 |
| 2010 |乐天收购 Edy |电商-FG进军预付费 |
| 2016-10 | Apple Pay JP 与 Suica + Edy 一起推出 | iPhone 进入日本预付费生态系统 |
| 2018-05 | Google Pay JP 推出 Suica + Edy | Android非Osaifu-Keitai路径开启|
| 2019-10 | Apple Pay 新增 nanaco |零售预付费 iPhone 迎头赶上
| 2020-10 | Apple Pay + 移动 PASMO 推出（同时）|东京私人铁路进入移动领域
| 2021-05 | Apple Pay 新增 WAON | iPhone 上完全零售预付费 |
| 2023-06 | Apple Pay 新增 ICOCA + 移动 ICOCA |关西在 7 滞后一年后迎头赶上 |
|待定 | TOICA / manaca / nimoca / SUGOCA / Kitaca 移动 |规模较小的交通运营商仍采用纯物理或部分物理方式

Apple Pay 支持时间差异是 JP 预付费分析中最常被提及的竞争标志之一——Suica (2016) 和 ICOCA (2023) 之间的 7 年差距严重影响了关西地区数字预付费的采用速度，而 Kitaca 持续缺席移动/Apple Pay 限制了北海道地区预付费数字原生转换。

## 商业经济行项目

日本预付电子货币的商户受理费通常为 **2-3% MDR（商户折扣率）**，具体取决于发卡机构与商户的协商，低于全信用卡 MDR（标准费率为 3-4%），但高于二维码/代码支付 MDR（有时通常为 1-2%）促销期间的0%）。 3 层 MDR 结构是商家接受多种支付方式而不是选择单一主要支付方式的原因之一 - 每种方式都有不同的费用配置。

对预付发行人的经济影响是：
- **零售 FG 预付费（nanaco、WAON、Edy）** — 当交易发生在母集团商店时，商户费用大部分在母集团内部内部化，因此集团内交易的有效 MDR 更接近于转移定价安排，而不是公平费用。这是群体接受度占主导地位的结构性原因之一
- **Transit-FG 预付费（Suica、PASMO、ICOCA 等）** — MDR 是发卡铁路的真正第三方费用收入，除了售票用途外，Suica/PASMO 也是对 JR 东日本和 PASMO 联盟具有经济吸引力的线路之一
- **跨品牌互操作性费用分配** — 当通过全国互用在接受 WAON 的商户处发生 Suica 刷卡时，发行人间结算将一部分费用分配给 Suica 的发行人（JR 东日本），另一部分分配给收单基础设施。费用分配规则对参与发行人保密，但通常有利于正在使用终端基础设施的品牌
商户费用维度是理解为什么一些预付费发行人继续积极扩展商户网络（transit-FG）而其他人则专注于集团内整合深度（retail-FG）的关键背景。

## 破损尺寸

**破损**——已加载但从未花费的预付余额部分——是预付发行人的重要利润线。各发行人并未以相同的格式披露确切的数字，但结构模式是：

- 零售 FG 预付卡（WAON、nanaco、Edy）往往具有**更高的破损率**，因为用户充值金额较大的频率较低，并且少量剩余余额留在很少使用的卡上
- Transit-FG 预付费（Suica、PASMO、ICOCA）往往具有**较低的破损**，因为用户更频繁地为日常通勤支出充值较小的金额，并且剩余余额通常会在几天或几周内耗尽

根据发行人的选择，破损按照不同的会计处理方式确认为收入——有些根据统计预期支出模型在半年截止日期确认，其他则仅在确认的非赎回事件（例如，卡到期而没有退款索赔）下确认。 《支付服务法》没有强制规定特定的破损识别方法。

## 入境游客用户体验差距

矩阵级品牌都存在**基本的入境游客用户体验差距**：Mobile FeliCa 仅适用于日本市场的手机（Android Osaifu-Keitai + Apple Pay JP iPhone），不适用于在日本境外购买的手机。因此，入境游客仅限于**实体卡产品**——Welcome Suica / Visit Suica（JR 东日本）、PASMO PASSPORT（PASMO Co.）、ICOCA 和 HARUKA 捆绑包（JR 西日本）——这些是普通卡的限时游客目标变体。

这种用户体验差距是 **Visa Touch / EMV 非接触式覆盖推出**背后的结构性驱动因素之一，JR 东日本、JR 九州、南海和其他公司已开始在 FeliCa 读卡器之上进行分层 - 持有 EMV 非接触式卡的国际游客可以乘车和购物，而无需转换为日本市场的 FeliCa 设备。这种覆盖在技术上是附加的（同一个读卡器同时处理 FeliCa 和 EMV），但在商业上却对现有的预付费发行人收入模式造成了破坏，因为使用海外 EMV 卡刷卡的游客完全绕过了预付费浮动。请参阅 [[payments/cashless-jp-landscape|JP cashless landscape]] 了解更广泛的非接触式推广故事。

## 相关

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[JapanFG/rakuten-edy]]
- [[JapanFG/seven-card-service]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/seven-bank]]
- [[JapanFG/aeon-bank]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[retail/seven-and-i-hd]]
- [[retail/aeon-group]]
- [[INDEX|FinWiki index]]

## 来源

- FSA 预付保单门户网站：https://www.fsa.go.jp/policy/prepaid/
- FSA全国の前払式支払手段発行者一覧（注册预付发行人）：https://www.fsa.go.jp/menkyo/menkyoj/zenshikoukinrishou.pdf
- FSA 第三者型前払式支払手段発行者登录一覧：https://www.fsa.go.jp/menkyo/menkyoj/zendaisanshakogata.pdf
- 乐天集团公司网站：https://corp.rakuten.co.jp/
- 七与一控股公司网站：https://www.7andi.com/
- 永旺集团公司网站：https://www.aeon.info/
- JR 东日本公司网站：https://www.jreast.co.jp/
- PASMO Co.公司网站：https://www.pasmo.co.jp/
- JR 西日本公司网站 (JR Odekake)：https://www.jr-odekake.net/
- JR 北海道公司网站：https://www.jrhokkaido.co.jp/
- JR 东海公司网站：https://jr-central.co.jp/
- 名铁公司网站：https://www.meitetsu.co.jp/
- 西铁（西日本铁路）公司网站：https://www.nishitetsu.jp/
- JR 九州公司网站：https://www.jrkyushu.co.jp/
- 日本银行支付系统政策：https://www.boj.or.jp/
- 每个运营商对预付浮动和未赎回余额的 IR 披露：JR 东日本、JR 西日本、JR 东海、JR 九州（TSE Prime 上市）；乐天集团、AEON Co. / AEON Financial Service、Seven & i HD（东京证交所 Prime 上市）；根据监管文件，私营运营商（PASMO Co、Nimoca Co、MIC、JR Hokkaido）

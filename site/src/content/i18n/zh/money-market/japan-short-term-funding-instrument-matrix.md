---
source: money-market/japan-short-term-funding-instrument-matrix
source_hash: 58d08fd3f538bd6b
lang: zh
status: machine
fidelity: ok
title: "日本短期融资工具矩阵"
translated_at: 2026-05-30T14:13:23.429Z
---

# 日本短期融资工具矩阵

## TL;DR

日本短期融资市场不是一个产品。无抵押和有抵押的拆借市场、JGB 证券融资的 GC 和 SC 回购分部、商业票据(CP)、可转让大额存单(NCD)、国库短期债券(TBill/TDB)、日本央行补完当座预金制度(補完当座預金制度)和 MRF/MMF 货币基金各自都有独特的发行人类型、期限范围、最小手数、结算周期、信用档案、日本央行抵押品资格、参与者混合和未清偿规模。此矩阵汇集了可公开验证的轴线,以便任何单一前端工具页面可以在提出期限、利率或交易对手问题之前被放置在更广泛的融资架构中。

## Wiki 路线

此条目位于 [[money-market/INDEX|money-market index]] 下。它与 [[money-market/japan-money-market|Japan money market]] 配对作为领域概述,[[money-market/call-market-structure|call market structure]] 用于银行间通道,[[money-market/jgb-repo-market-japan|JGB repo market in Japan]] 用于有抵押品融资通道,[[money-market/japan-cp-commercial-paper-market|Japan CP market]] 用于企业/银行关联 CP 通道,[[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]] 用于银行发行存款通道,[[money-market/japan-tbill-treasury-discount-bill|Japan TBill / TDB]] 用于主权发行通道,[[money-market/japan-mmf-money-market-mutual-fund|Japan MRF / MMF]] 用于买方现金工具通道,[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] 用于中央银行存款通道。实施通道是 [[money-market/boj-open-market-operations|BoJ open market operations]];交易商特许权方是 [[banking/INDEX|banking index]] 和企业终端用户方是 [[finance/japan-corporate-treasury-and-cash-management|corporate treasury and cash management]]。

## 为什么前端工具矩阵很重要

像"短期融资"这样的单一短语隐藏了这样一个事实,即法律形式、发行人、结算管道和日本央行交易对手角色在工具之间不同。没有分类:

- [[money-market/call-market-structure|call money]] 交易看起来像 [[money-market/jgb-repo-market-japan|GC repo]] 交易,即使一个是无抵押品,另一个是 JGB 有抵押品;
- [[money-market/japan-cp-commercial-paper-market|CP]] 票据看起来像 [[money-market/japan-ncd-negotiable-cd-market|NCD]] 票据,即使发行人基础、FIEA 披露制度和存管库管道不同;
- [[money-market/japan-tbill-treasury-discount-bill|TBill]] 看起来像另一个短票据,即使它是符合每个日本央行操作资格的财政部主权债权;
- 日本央行 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility]] 看起来像一个"存款",即使它是锚定矩阵中每个其他利率的中央银行通道。

矩阵的存在是为了在任何利率或策略阅读之前,任何单一短端工具页面可以在后 3 月 2024  下限制度框架内被放置。

## 工具 1  — 无抵押品拆借(無担保コール)

- **法律形式/市场。** 通过 [[money-market/tanshi-company-business-model|tanshi companies]] 经纪或直接交易的无抵押品银行间贷款;市场场所是由日本银行间市场惯例管理的无抵押品拆借市场。
- **发行人类型。** 具有 [[banking/INDEX|banking index]] 日本央行账户访问权限的银行、信托银行、外资银行分行、证券公司和其他金融机构;企业不直接参与。
- **期限范围。** 压倒一切地是隔夜(O/N);tom-next 条带和短期(TN、SN、1W)也交易;发布的日本央行拆借统计包括期限细分。
- **最小手数。** 惯例驱动,增量为 100 百万日元;大型银行间交易规模为数十亿日元。
- **结算。** 通过日本央行 NET 活期存款转账的当日资金,通常每个营业日滚动 O/N。
- **信用风险。** 仅无抵押品交易对手信用;无抵押品。违约依赖于直接银行间风险敞口和主协议执行。
- **日本央行抵押品资格。** 不相关 — 拆借货币是日本央行的参考短期利率,而非日本央行合格的抵押品工具。交易的隔夜利率是日本央行市场操作指引中引用的政策传导点。
- **参与者。** 大型银行财务、区域银行财务、信托银行、证券公司(利率承担者和风险仓库)、短资经纪人作为中介、具有日本央行净额访问权的外资银行分行。
- **未清偿。** 日本央行发布日交易量统计;交易量自 3 月 2024  后大幅正常化,因为正的隔夜利率复兴了在负利率/充足准备金时代被压制的银行间活动。
- **后 2024  下限影响。** 无抵押品隔夜拆借利率交易接近(通常略高于)[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|policy-rate-balance interest rate]];下限与交易拆借利率之间的差距是最受关注的货币市场功能信号之一。

## 工具 2  — 有抵押品拆借(有担保コール)

- **法律形式/市场。** 针对符合条件抵押品(JGB、其他公共部门票据)的有抵押品银行间贷款;与无抵押品拆借不同的市场细分。
- **发行人类型。** 与无抵押品通道相同的银行和金融机构;合作融资中央机构([[cooperative-banks/norinchukin|農林中央金庫]], [[cooperative-banks/shinkin-central|信金中央金庫]])也很活跃。
- **期限范围。** O/N 占主导地位,有一些期限活动;比无抵押品通道密度低。
- **最小手数。** 100 百万日元惯例,规模更大为常见。
- **结算。** 通过日本央行 NET 当日资金;抵押品通过标准化托管安排承诺。
- **信用风险。** 通过抵押品发型降低;对抵押品管理的剩余运营风险。
- **日本央行抵押品资格。** 不直接是日本央行工具;抵押品池与日本央行合格抵押品重叠。
- **参与者。** 银行、合作融资中央机构、信托银行、人寿保险公司(偶尔)、短资经纪人。外资参与比无抵押品通道轻。
- **未清偿。** 在正常时期小于无抵押品拆借的一个数量级;发布在日本央行拆借市场统计中。
- **后 2024  下限影响。** 与无抵押品拆借交易非常接近政策利率余额下限,差距较小,有抵押品与无抵押品基础;差距反映抵押品需求和月末/财政年度末压力。

## 工具 3  — GC 回购(一般抵押品)

- **法律形式/市场。** 针对一般(可替代)JGB 抵押品的买卖协议;在日本实践中,在技术上是回购交易(現先)或現金担保付債券貸借结构。参见 [[money-market/jgb-repo-market-japan|JGB repo market]] 了解法律形式细节。
- **发行人类型。** 现金借款人包括证券公司、信托银行、外资银行、对冲基金;现金贷款人包括银行、信托银行、人寿保险公司、MMF、外国现金投资者。
- **期限范围。** O/N(T/N 是 JGB GC 回购最流动的点)、1W、2W、1M、3M;更长期限回购不太常见。
- **最小手数。** 机构交易的实际最小值在 1  十亿日元范围;更小的规模在双边可能。
- **结算。** T+0 /T+1  取决于惯例;JGB 交付通过日本央行 JGB 服务结算,现金结算通过日本央行 NET。
- **信用风险。** 低 — 由 JGB 担保,每日按市价计值和发型;对于有抵押品剩余部分的交易对手风险。
- **日本央行抵押品资格。** GC 回购不是日本央行存款工具,但基础 JGB 抵押品以非常低的发型符合日本央行资格。
- **参与者。** 大型银行财务、证券公司融资部、信托银行、人寿保险公司作为现金贷款人、外资银行和对冲基金作为借款人、[[financial-regulators/japan-securities-finance|JSF]] 和短资相邻经纪人作为中介。
- **未清偿。** 日本最大的单一短期融资市场,按发布的日本央行/JSDA 基础每日成交量以数十万亿日元衡量。
- **后 2024  下限影响。** 当 JGB 抵押品供应充足时,GC 回购(T/N)交易略低于政策利率余额下限,当抵押品稀缺时略高。GC 回购利率是对无抵押品拆借的规范有抵押品短期利率基准补充。

## 工具 4  — SC 回购(特殊抵押品)

- **法律形式/市场。** 与 GC 回购相同的法律形式,但参考特定 JGB 发行(一个"最新"或其他特殊债券);现金分部通过"特殊性"溢价定价。
- **发行人类型。** 与 GC 回购相同,其中对冲基金和交易商对特定发行借款需求占主导。
- **期限范围。** O/N、T/N、期限至约 1  月;1  月以外的特殊品稀有。
- **最小手数。** 通常每个 CUSIP/ISIN 为 1  十亿日元及以上的交易。
- **结算。** 与 GC 回购相同:T+0 /T+1  通过日本央行 JGB 服务。
- **信用风险。** 与 GC 回购相同有抵押品档案。
- **日本央行抵押品资格。** 相同 JGB 资格框架;具有主动日本央行购买/贷款活动的特定发行影响特殊性。
- **参与者。** 对冲基金(空头平仓需求)、证券公司(仓库)、信托银行(从托管账簿借出发行)、[[money-market/jgb-repo-market-japan|JGB repo]] 交易商。
- **未清偿。** JGB 回购总体的子集;发布的 JSDA 统计分解特殊品和 GC 交易量。
- **后 2024  下限影响。** 特殊性独立于整体下限而调整;强烈的日本央行购买特定发行在历史上造成严重的 SC 挤压和陡峭的负特殊性利差。

## 工具 5  — 商业票据(CP)

- **法律形式/市场。** 《账簿转账法》下的短期公司债(短期社債);通过 [[securities/japan-securities-depository-center|JASDEC]] 短期公司债账簿转账系统完全非实物化。参见 [[money-market/japan-cp-commercial-paper-market|Japan CP market]]。
- **发行人类型。** 公司、银行(银行控股公司和集团实体)、非银行金融机构(消费信贷、租赁)、ABCP 特殊目的工具。
- **期限范围。** 1  天至 1  年以下;聚集在 1  月和 3  个月;跨越季度末期限常见。
- **最小手数。** 典型发行手数为 100  百万日元;二级交易可能更小手数。
- **结算。** T+0 /T+1  通过 JASDEC 短期公司债账簿转账;日本央行 NET 现金结算。
- **信用风险。** 发行人信用;评级以 a-1 /J-1  层为主(R&I、JCR、S&P Japan、Moody's Japan)。ABCP 在资产证券化的应收账款池上承担结构化融资信用风险。
- **日本央行抵押品资格。** 是的 — 符合条件的 CP 被接受为日本央行联合抵押品贷款的抵押品;日本央行在历史上进行了 CP 回购和直接 CP 购买操作作为 [[money-market/boj-open-market-operations|open market operation]] 工具包的一部分。
- **参与者。** 银行(财务和信托账户)、MRF/MMF、资产管理公司、人寿和非人寿保险公司、外国投资者(有选择性)、有多余现金的公司财务。
- **未清偿。** 由 [[money-market/japan-cp-commercial-paper-market|Japan CP market]] 页面和 JSDA CP 统计发布;最近按月基础的股票以数十万亿日元衡量。
- **后 2024  下限影响。** CP 收益交易高于政策利率余额下限,发行人信用利差;银行关联层以紧密利差定价接近下限,公司和非银行层取决于评级和展期频率而更宽。

## 工具 6  — 可转让大额存单(NCD)

- **法律形式/市场。** 由银行在《银行法》存款框架下发行的可转让大额存单;通过交易商中介在二级市场中可交易。参见 [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]]。
- **发行人类型。** 国内银行(大型银行、区域银行、信托银行、网络银行)、外资东京分行。
- **期限范围。** 典型的 1  月至 1  年,集中在 3M/6M;一些更长期 NCD 至几年。
- **最小手数。** 典型发行面值为批发 100  百万日元;大型机构买家交易远大得多。
- **结算。** T+1 /T+2  典型;通过银行对银行惯例结算,不通过 JASDEC。
- **信用风险。** 发行银行的优先无抵押品信用;仅在标准存款保险上限(10  百万日元本金加利息)下由 [[financial-regulators/yokin-hoken-kiko|DICJ]] 覆盖,因此批发 NCD 依赖于超越 DICJ 的发行人信用。
- **日本央行抵押品资格。** 对日本央行抵押品操作的重要性不如 CP;资格取决于发行人/形式。外资银行分行 NCD 与国内银行 NCD 处理不同。
- **参与者。** 银行财务(发行人方)、MMF/MRF、公司财务、外国现金投资者(发行人感知)、信托银行用于集合投资计划。
- **未清偿。** 在日本央行短期金融市场统计中追踪;与类似期限公司 CP 的银行发行补充。
- **后 2024  下限影响。** NCD 收益交易高于政策利率余额下限;银行发行人层和批发手数的 DICJ 无保险性质意味着 NCD 定价对类似评级公司 CP 的银行信用观感更敏感。

## 工具 7  — 国库短期债券(TBill/TDB/國庫短期證券)

- **法律形式/市场。** 在日本财政部 JGB 发行框架下发行的折扣基础短期日本政府债券;在日语中称为國庫短期證券,在 MOF 英文材料中指定为国库短期债券(TDB)。参见 [[money-market/japan-tbill-treasury-discount-bill|Japan TBill / TDB]]。
- **发行人类型。** 财政部(日本主权)。
- **期限范围。** 2  月、3  月、6  月、1  年(标题 1Y TDB 是关键的短端 JGB 基准)。
- **最小手数。** 拍卖时的 100  百万日元发行手数;机构投资者的二级交易更小手数。
- **结算。** 典型的 T+1 /T+2  通过日本央行 JGB 服务;JGB 账簿转账系统。
- **信用风险。** 主权 — 日本政府信用。
- **日本央行抵押品资格。** 在日本央行操作中完全合格,发型非常低;规范的无风险抵押品。
- **参与者。** 银行、人寿保险公司、非人寿保险公司、信托银行、外国中央银行和准备金管理者(日元计价主权现金的重型买家)、外国商业银行、MMF/MRF、资产管理公司。
- **未清偿。** 在 MOF 债务统计中追踪;股票以全 TDB 未清偿的数百万亿日元衡量(跨期限组合)。
- **后 2024  下限影响。** TDB 收益交易接近政策利率余额下限减去小额抵押品稀缺性溢价;负 TDB 收益(低于下限的收益,有时为负)在历史上出现于外国准备金管理者需求和日本央行购买一起压缩供应。后 2024  TDB 曲线更像规范的短 JGB 曲线阅读。

## 工具 8  — 日本央行补完当座预金制度(補完当座預金制度)

- **法律形式/市场。** 日本央行根据日本央行法和政策委员会决议对商业银行活期存款余额支付的利息;机构通道是补完当座预金制度(補完当座預金制度)。参见 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]]。
- **发行人类型。** 日本央行(中央银行负债)。
- **期限范围。** 有效地 O/N 有每日滚动余额;不是可交易工具而是存款便利。
- **最小手数。** 没有像这样的 — 在日本央行 NET 持有的余额。
- **结算。** 日本央行 NET 活期账簿;根据发布的日本央行 MPM 决议对余额应用的利息。
- **信用风险。** 中央银行信用(对日元国内交易对手按结构零)。
- **日本央行抵押品资格。** 这是日本央行的一方;无外部抵押品参与。
- **参与者。** 仅直接日本央行 NET 交易对手:银行、信托银行、具有日本央行账户的外资银行分行、合作融资中央机构([[cooperative-banks/norinchukin|農中]], [[cooperative-banks/shinkin-central|信金中央金庫]], 全信組連, 労金連)、[[money-market/tanshi-company-business-model|tanshi companies]]和被允许作为日本央行交易对手的证券公司。
- **未清偿。** 后 QE 遗留中在日本央行持有的未清偿活期余额数百万亿日元;政策利率余额层设定标题短期利率。
- **后 2024  下限影响。** 这是下限本身 — 此矩阵中的每个其他工具都以政策利率余额利息定价。准备金充足保持下限有约束力而非走廊上限有约束力。

## 工具 9  — MRF/MMF(货币市场基金)

- **法律形式/市场。** 《投资信托法》下的投资信托;MRF(货币储备基金)是证券公司经纪账户内使用的监管现金管理工具,MMF(货币市场基金)是更广泛的货币基金类别。JSDA 发布两者的统计;在实践中,日元 MMF 已基本消失,而 MRF 在经纪账户内保持广泛。参见 [[money-market/japan-mmf-money-market-mutual-fund|Japan MRF / MMF]]。
- **发行人类型。** 在指定监管结构下提供 MRF/MMF 的投资管理公司;基础工具是 TBill、CP、NCD、回购和短债持有。
- **期限范围。** 每日赎回(MRF)或短赎回(MMF)现金工具;基础投资组合的加权平均期限为短(月)。
- **最小手数。** 零售投资者可以持有极小余额;通过经纪账户的机构访问。
- **结算。** MRF 赎回当日;交易账簿在经纪系统内持有。
- **信用风险。** 高等级短期工具的多样化投资组合;本金稳定性受后 2001  制度中的按市价计值。
- **日本央行抵押品资格。** 基金本身不符合日本央行资格;基础投资组合持有(TBill、CP、NCD)符合不同水平的资格。
- **参与者。** 具有经纪账户的零售投资者(占主导 MRF 基础)、公司作为子部分、资产管理托管作为运营基础。
- **未清偿。** MRF 股票以经纪行业数十万亿日元衡量;MMF 股票在后 2001  NAV 突破危机和后 2016  NIRP 中崩溃,大多数 MMF 关闭。
- **后 2024  下限影响。** 正的日元短期利率复兴了 MRF 收益表面;基础投资组合收益提升向政策利率余额下限减去管理费。MRF 作为默认经纪现金部分幸存;MMF 复兴取决于持久的正前端利率和产品复兴决议。

## 跨工具对比矩阵

| 维度 | 无抵押品拆借 | 有抵押品拆借 | GC 回购 | SC 回购 | CP | NCD | TBill/TDB | 日本央行 CDF(補完当座預金) | MRF/MMF |
|---|---|---|---|---|---|---|---|---|---|
| **法律形式** | 无抵押品银行间贷款 | 有抵押品银行间贷款 | JGB 买卖回购/現先/現金担保付債券貸借 | 特定发行上的 JGB 买卖回购 | 《账簿转账法》下的短期社債| 银行存款/证书 | 《财政部 JGB 框架》下的 JGB(TBill) | 日本央行法下的日本央行活期账户利息 | 《投资信托法》下的投资信托 |
| **发行人/交易对手** | 银行、证券公司 | 银行、合作融资中央 | 证券公司、银行、信托银行、对冲基金 | 与 GC 相同 | 公司、银行、非银行 FI、特殊目的工具(ABCP) | 国内银行、外资东京分行 | 财政部 | 日本央行 | 投资管理公司/基础发行人 |
| **期限(最流动)** | O/N | O/N | T/N、1W | O/N–1M | 1M、3M | 3M、6M | 3M、6M、1Y | O/N 滚动余额 | 每日赎回(MRF) |
| **最小手数(惯例)** | 100  百万日元 | 100  百万日元 | 1  十亿日元 | 1  十亿日元 | 100  百万日元 | 100  百万日元 | 100  百万日元拍卖 | N/A(余额) | 零售/机构 N/A |
| **结算** | 同日日本央行 NET | 同日日本央行 NET | T+0 /T+1  通过日本央行 JGB | T+0 /T+1  通过日本央行 JGB | T+0 /T+1  通过 JASDEC 短期公司债 | T+1 /T+2  银行惯例 | T+1 /T+2  通过日本央行 JGB | 日本央行 NET 账簿 | 经纪当日赎回 |
| **信用风险** | 无抵押品交易对手 | 交易对手+抵押品 | 交易对手+抵押品发型 | 交易对手+抵押品发型 | 发行人信用 | 发行人银行信用(DICJ 仅至 10m) | 主权 | 中央银行(零) | 多样化短期投资组合 |
| **日本央行抵押品资格** | N/A(参考利率) | N/A | N/A(抵押品池重叠) | N/A | 是(符合条件 CP) | 受限/形式相关 | 是(非常低发型) | 日本央行一方本身 | 基础持有符合条件 |
| **银行** | 重量级 | 重量级 | 重量级 | 较轻 | 发行人+投资者 | 发行人+投资者 | 投资者 | 交易对手 | 基础持有者 |
| **保险公司** | 轻 | 轻 | 现金贷款方 | 轻 | 投资者 | 投资者 | 投资者 | N/A | 基础持有者 |
| **外国参与者** | 外资银行分行 | 较轻 | 重在借款方 | 重(对冲基金) | 有选择性 | 外资银行分行发行 | 重(准备金管理者) | 外资银行分行 | N/A |
| **公司** | 无直接 | 无直接 | 通过现金扫账间接 | 无直接 | 重型发行人 | 无作为发行人;一些作为投资者 | 一些财务投资者 | 无直接 | 一些财务现金 |
| **典型未清偿规模** | 数百亿至低万亿日元日交易量 | 小于无抵押品 | 数十万亿日元日成交量 | GC 的子集 | 数十万亿日元股票 | 数十万亿日元股票 | 数百万亿日元股票(跨期限组合) | 数百万亿日元活期账户余额 | 数十万亿日元股票(MRF) |
| **后 2024  下限含义** | 交易略高于下限 | 交易非常接近下限 | 略低于至略高于下限 | 特殊性无关 | 下限+发行人利差 | 下限+发行人利差 | 下限减去小溢价 | 下限本身 | 下限减去费用(MRF 收益) |

## 如何阅读此矩阵

工具矩阵是公开表面工具,而非交易指南。在阅读任何单一前端工具页面时:

1. **从法律形式开始。** 工具是银行间贷款、买卖回购协议、短期公司债、银行存款、主权票据、中央银行存款还是投资信托决定了几乎每个其他字段(监管机构、结算管道、披露、投资者基础、日本央行资格)。
2. **检查双方谁可以是。** 直接日本央行 NET 交易对手在无抵押品/有抵押品拆借市场和补完当座预金制度中占主导;更宽的访问在回购、CP、NCD 和 TBill 层打开;经纪零售主要通过 MRF 访问前端。
3. **检查日本央行通道角色。** [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|Complementary deposit facility]] 是通道;[[money-market/boj-open-market-operations|open market operations]] 使用 TBill、JGB 回购、CP 回购和 JGB 直接作为工具包。每个其他工具都以下限定价。
4. **检查后 2024  含义。** 转向正利率下限在 3 月 2024  改变了矩阵的引力中心:银行间交易活跃、回购更活跃、CP/NCD 现在承担有意义的期限利差、TBill 收益离零、MRF 收益是可识别的现金工具收益。
5. **使用参与者列用于二阶阅读。** 外国准备金管理者对 TBill 的需求、对冲基金在 SC 回购中的借款需求、MRF 零售流和企业 CP 展期行为是在此列中显示的二阶驱动因素。

## 边界情况和注意事项

- **拆借与回购。** 无抵押品拆借和有抵押品拆借在同一拆借市场场所坐,具有不同的有抵押品/无抵押品法律形式。GC 和 SC 回购在 [[money-market/jgb-repo-market-japan|JGB repo market]] 下坐,具有不同的法律形式惯例(現先 vs 現金担保付債券貸借)。混淆是常见的误读。
- **CP 与短期债。** [[securities/japan-securities-depository-center|JASDEC]] 短期公司债账簿转账系统下的 CP 被视为短期社債— 在法律上是债券,运营上是短期融资。期限长于 1  年的规范公司债使用单独的账簿转账途径。
- **NCD 与普通银行存款。** 在 [[financial-regulators/yokin-hoken-kiko|DICJ]] 下至 10  百万日元覆盖的零售银行存款和高于 DICJ 上限的批发 NCD 不是相同产品,即使两者都是《银行法》下的银行负债。
- **TBill 与短期 JGB。** TBill(國庫短期證券/TDB)是其自身的短端 JGB 工具,与具有短剩余期限的息票 JGB 不同;发行和结算惯例是 TBill 特定的。
- **日本央行补完当座预金制度与准备金要求。** 准备金要求(準備預金制度)是单独的框架;补完当座预金制度是准备金利息通道。两者都涉及日本央行 NET 余额,但它们不是相同的法律工具。
- **MRF 与 MMF。** MRF 是经纪账户扫账工具,日赎回;MMF 是更宽的投资信托货币基金类别,已基本从日元市场后 2001  NAV 突破和后 2016  NIRP 消失。两者通常组合在一起但在监管框架中不同。
- **JSCC 结算。** 通过 JSCC 的回购结算([[securities/japan-securities-clearing-corp|JSCC]])覆盖有意义份额的交易商间 JGB 回购;拆借不流入 JSCC。CP/NCD/TBill 二级交易一般不对现金结算使用 CCP。

## 相关条目

- [[money-market/INDEX|money-market index]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[finance/japan-corporate-treasury-and-cash-management]]
- [[financial-regulators/yokin-hoken-kiko]]
- [[financial-regulators/boj-monetary-policy]]
- [[cooperative-banks/norinchukin]]
- [[cooperative-banks/shinkin-central]]
- [[INDEX|FinWiki index]]

## 来源

- 日本央行:货币市场(paym/market 概览)。
- 日本央行:短期金融市场统计(statistics/market/short)。
- 日本央行:拆借市场数据(mutan 系列)。
- 日本央行:国库短期债券购买/销售的市场操作(ope_t)。
- 日本央行:CP/企业票据的市场操作(ope_b)。
- 财政部:JGB 拍卖日程表和 TDB/TBill 发行时间表。
- 财政部:TBill 拍卖日程表(tbills.html)。
- 日本证券商协会(JSDA):统计门户和 CP 发行/未清偿表。
- 日本证券商协会(JSDA):MMF 投资者信息页面。
- 日本证券存管中心(JASDEC):短期公司债账簿转账系统概览。
- 日本证券清算公司(JSCC):清算范围和 JGB OTC 清算规则。
- 金融服务厅(FSA):FIEA 框架参考。

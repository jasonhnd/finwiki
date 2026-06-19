---
source: money-market/japan-short-term-funding-instrument-matrix
source_hash: 0fea42c9d4c38bf2
lang: zh
status: machine
fidelity: ok
title: "日本短期资金筹措工具矩阵"
translated_at: 2026-06-19T06:09:18.160Z
---

# 日本短期资金筹措工具矩阵

## TL;DR

日本的短期资金筹措市场并非单一产品。无担保与有担保拆借市场、JGB 证券融资的 GC 与 SC 回购腿、商业票据（CP）、可转让存单（NCD）、国库短期证券（TBill / TDB）、日本央行补充活期存款制度（補完当座預金制度），以及 MRF / MMF 货币基金，各自具有不同的发行者类型、期限区间、最低批量、结算周期、信用特征、日本央行合格担保、参与者构成与发行余额规模。本矩阵汇集了可公开验证的各个维度，以便在提出期限、利率或对手方问题之前，将任一前端工具页置于更广阔的资金筹措架构之中。

## Wiki 路由

本条目位于 [[money-market/INDEX|money-market index]] 之下。它与作为领域概览的 [[money-market/japan-money-market|Japan money market]]、作为银行间通道的 [[money-market/call-market-structure|call market structure]]、作为担保资金筹措通道的 [[money-market/jgb-repo-market-japan|JGB repo market in Japan]]、作为企业 / 银行系 CP 通道的 [[money-market/japan-cp-commercial-paper-market|Japan CP market]]、作为银行发行存款通道的 [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]]、作为主权发行通道的 [[money-market/japan-tbill-treasury-discount-bill|Japan TBill / TDB]]、作为买方现金载体通道的 [[money-market/japan-mmf-money-market-mutual-fund|Japan MRF / MMF]]，以及作为央行存款通道的 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] 配对。实施通道为 [[money-market/boj-open-market-operations|BoJ open market operations]]；交易商特许经营一侧为 [[banking/INDEX|banking index]]，企业最终用户一侧为 [[finance/japan-corporate-treasury-and-cash-management|corporate treasury and cash management]]。

## 为何前端工具矩阵重要

「短期资金筹措」这一单一短语掩盖了一个事实：法律形态、发行者、结算管道与日本央行对手方角色在各工具间各不相同。没有分类的话：

- 一笔 [[money-market/call-market-structure|call money]] 交易看起来像一笔 [[money-market/jgb-repo-market-japan|GC repo]] 交易，即便一个是无担保、另一个是 JGB 担保的；
- 一张 [[money-market/japan-cp-commercial-paper-market|CP]] 票据看起来像一张 [[money-market/japan-ncd-negotiable-cd-market|NCD]] 票据，即便发行者基础、FIEA 披露制度与托管管道各不相同；
- 一张 [[money-market/japan-tbill-treasury-discount-bill|TBill]] 看起来只是又一张短期票据，即便它是在每一项日本央行操作中均合格的财务省主权债权；
- 日本央行的 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility]] 看起来像「存款」，即便它是为矩阵中所有其他利率提供锚定的央行通道。

本矩阵之所以存在，是为了让任一短端工具页在任何利率或策略阅读之前，都能置于 2024  年 3 月之后的下限体系框架之内。

## 工具 1  — 无担保拆借资金（無担保コール）

- **法律形态 / 市场。** 经由 [[money-market/tanshi-company-business-model|tanshi companies]] 中介或直接成交的无担保银行间贷款；市场场所为受日本银行间市场惯例支配的无担保拆借市场。
- **发行者类型。** 银行、信托银行、外国银行分行、证券公司，以及其他拥有 [[banking/INDEX|banking index]] 日本央行账户接入的金融机构；企业不直接参与。
- **期限区间。** 绝大多数为隔夜（O/N）；亦交易次日交割条（tom-next）与短期（TN、SN、1W）；公布的日本央行拆借资金统计含期限分项。
- **最低批量。** 按惯例以 ¥100  百万为单位；大额银行间票据规模以数十亿日元计。
- **结算。** 经日本央行网（BoJ-NET）活期账户划转的当日资金，通常每个营业日 O/N 滚动。
- **信用风险。** 仅无担保对手方信用；无担保。违约依赖于直接的银行间敞口与主协议执行。
- **日本央行合格担保。** 不相关 — 拆借资金是日本央行的参照短期利率，而非日本央行合格担保工具。所交易的隔夜利率是日本央行市场操作指南中所参照的政策传导点。
- **参与者。** 大型银行资金部、地方银行资金部、信托银行、证券公司（利率接受者与风险仓储）、作为中介的短资经纪商、拥有日本央行网接入的外国银行分行。
- **发行余额。** 日本央行公布日度成交量统计；由于 2024  年 3 月之后正的隔夜利率重新唤醒了在负利率 / 充裕准备时代被压抑的银行间活动，成交量急剧正常化走高。
- **2024  后的下限含义。** 无担保隔夜拆借利率在 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|policy-rate-balance interest rate]] 附近（通常略高于其）交易；下限与所交易拆借利率之间的差距是货币市场运行最受关注的信号之一。

## 工具 2  — 有担保拆借资金（有担保コール）

- **法律形态 / 市场。** 以合格担保（JGB、其他公共部门票据）为抵押的有担保银行间贷款；与无担保拆借为各自独立的市场分部。
- **发行者类型。** 与无担保通道相同的银行与金融机构；合作金融的中央机构（[[cooperative-banks/norinchukin|農林中央金庫]]、[[cooperative-banks/shinkin-central|信金中央金庫]]）亦活跃。
- **期限区间。** O/N 占主导，有部分期限活动；密度低于无担保通道。
- **最低批量。** ¥100  百万的惯例，更大规模为典型。
- **结算。** 经日本央行网的当日资金；担保通过标准化托管安排质押。
- **信用风险。** 经担保折扣降低；担保管理上有剩余操作风险。
- **日本央行合格担保。** 并非直接的日本央行工具；担保池与日本央行合格担保重叠。
- **参与者。** 银行、合作金融中央机构、信托银行、人寿保险公司（偶尔）、短资经纪商。外国参与较无担保通道为轻。
- **发行余额。** 平时较无担保拆借小一个数量级；在日本央行拆借资金市场统计中公布。
- **2024  后的下限含义。** 与政策利率余额下限非常接近交易，相对无担保拆借带有小幅有担保对无担保基差；该差距反映担保需求与月末 / 财年末压力。

## 工具 3  — GC 回购（一般担保）

- **法律形态 / 市场。** 以一般（可替代）JGB 担保为对象的卖出回购协议；按日本惯例在技术上为买回交易（現先）或现金担保附债券借贷（現金担保付債券貸借）结构。法律形态细节见 [[money-market/jgb-repo-market-japan|JGB repo market]]。
- **发行者类型。** 现金借入方包括证券公司、信托银行、外国银行、对冲基金；现金借出方包括银行、信托银行、人寿保险公司、MMF、外国现金投资者。
- **期限区间。** O/N（T/N 是 JGB GC 回购中流动性最高的点）、1W、2W、1M、3M；更长期限的回购较少见。
- **最低批量。** 机构票据的实务最低在 ¥1  十亿区间；更小规模可经双边达成。
- **结算。** 视惯例为 T+0  / T+1 ；JGB 交割经日本央行网 JGB 服务结算，现金结算经日本央行网。
- **信用风险。** 低 — 由带每日盯市与折扣的 JGB 担保；对担保后的剩余有对手方风险。
- **日本央行合格担保。** GC 回购并非日本央行存款工具，但其基础 JGB 担保以非常低的折扣为日本央行合格。
- **参与者。** 大型银行资金部、证券公司融资台、信托银行、作为现金借出方的人寿保险公司、作为借入方的外国银行与对冲基金、作为中介的 [[financial-regulators/japan-securities-finance|JSF]] 与短资邻接经纪商。
- **发行余额。** 按存量计为日本最大的单一短期资金筹措市场；日度周转在公布的日本央行 / JSDA 基础上以数十万亿日元计。
- **2024  后的下限含义。** 当 JGB 担保供给充裕时 GC 回购（T/N）略低于政策利率余额下限交易，当担保稀缺时略高于。GC 回购利率是无担保拆借的正统有担保短期利率基准补充。

## 工具 4  — SC 回购（特殊担保）

- **法律形态 / 市场。** 与 GC 回购相同的法律形态，但参照特定 JGB 品种（「在跑」或其他特殊债券）；现金腿通过「特殊性（specialness）」溢价定价。
- **发行者类型。** 与 GC 回购相同，对特定品种借入的对冲基金与交易商需求占主导。
- **期限区间。** O/N、T/N、至约 1  月的期限；超过 1  月的特殊品种罕见。
- **最低批量。** 通常每个 CUSIP / ISIN ¥1  十亿及以上的票据。
- **结算。** 与 GC 回购相同：经日本央行网 JGB 服务的 T+0  / T+1 。
- **信用风险。** 与 GC 回购相同的有担保特征。
- **日本央行合格担保。** 相同的 JGB 合格性框架；具有活跃日本央行购买 / 借出活动的特定品种影响特殊性。
- **参与者。** 对冲基金（补空头需求）、证券公司（仓储）、信托银行（从托管账册借出品种）、[[money-market/jgb-repo-market-japan|JGB repo]] 交易商。
- **发行余额。** JGB 回购总量的子集；公布的 JSDA 统计将特殊品种与 GC 成交量分列。
- **2024  后的下限含义。** 特殊性独立于整体下限调整；对特定品种的密集日本央行购买在历史上造成了严重的 SC 挤压与陡峭的负特殊性利差。

## 工具 5  — 商业票据（CP）

- **法律形态 / 市场。** 振替法（Book-Entry Transfer Act）下的短期公司债（短期社債）；经由 [[securities/japan-securities-depository-center|JASDEC]] 短期公司债振替系统完全无纸化。见 [[money-market/japan-cp-commercial-paper-market|Japan CP market]]。
- **发行者类型。** 企业、银行（银行控股公司与集团主体）、非银行金融机构（消费信用、租赁）、用于 ABCP 的特殊目的载体。
- **期限区间。** 1  天至不足 1  年；在 1  月与 3  月聚集；跨季末的到期常见。
- **最低批量。** ¥100  百万为典型发行批量；二级交易可为更小规模。
- **结算。** 经 JASDEC 短期公司债振替的 T+0  / T+1 ；日本央行网现金结算。
- **信用风险。** 发行者信用；评级以 a-1  / J-1  档（R&I、JCR、S&P Japan、Moody's Japan）为主导。ABCP 带有针对导管的应收账款池的结构化金融信用风险。
- **日本央行合格担保。** 是 — 合格 CP 被接受用于日本央行的共同担保贷款；日本央行在历史上作为 [[money-market/boj-open-market-operations|open market operation]] 工具箱的一部分进行过 CP 回购与 CP 直接买入操作。
- **参与者。** 银行（资金与信托账户）、MRF / MMF、资产管理公司、人寿与财产保险公司、外国投资者（有选择地）、有盈余现金的企业资金部。
- **发行余额。** 由 [[money-market/japan-cp-commercial-paper-market|Japan CP market]] 页与 JSDA CP 统计公布；存量在近期月度基础上以数十万亿日元计。
- **2024  后的下限含义。** CP 收益率以发行者信用利差高于政策利率余额下限交易；银行系档以相对下限较紧的利差定价，企业与非银行档则视评级与展期频率而更宽。

## 工具 6  — 可转让存单（NCD）

- **法律形态 / 市场。** 由银行在银行法存款框架下发行的可转让存单；可经交易商中介在二级市场交易。见 [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]]。
- **发行者类型。** 国内银行（大型银行、地方银行、信托银行、网络银行）、外国银行东京分行。
- **期限区间。** 1  月至 1  年为典型，集中于 3M / 6M；亦有部分长达数年的更长期 NCD。
- **最低批量。** 批发 ¥100  百万的发行面值为典型；大型机构买家取得大得多的票据。
- **结算。** 典型为 T+1  / T+2 ；经银行对银行惯例结算，而非 JASDEC。
- **信用风险。** 发行银行的优先无担保信用；由 [[financial-regulators/yokin-hoken-kiko|DICJ]] 仅覆盖至标准存款保险上限（¥10  百万本金加利息），故批发 NCD 在 DICJ 之外依赖发行者信用。
- **日本央行合格担保。** 对日本央行担保操作而言较 CP 不那么核心；合格性取决于发行者 / 形态。外国银行分行 NCD 与国内银行 NCD 的处理不同。
- **参与者。** 银行资金部（发行者一侧）、MMF / MRF、企业资金部、外国现金投资者（了解发行者）、用于集合投资计划的信托银行。
- **发行余额。** 在日本央行短期金融市场统计中追踪；在相似期限区间内对企业 CP 的银行发行补充。
- **2024  后的下限含义。** NCD 收益率高于政策利率余额下限交易；银行发行者档与批发批量的 DICJ 未保险性质，意味着 NCD 定价较相似评级的企业 CP 对银行信用感知更敏感。

## 工具 7  — 国库短期证券（TBill / TDB / 国庫短期証券）

- **法律形态 / 市场。** 在财务省 JGB 发行框架下发行的贴现式短期日本国债；日语称为国庫短期証券，在财务省英文资料中指定为 Treasury Discount Bills（TDB）。见 [[money-market/japan-tbill-treasury-discount-bill|Japan TBill / TDB]]。
- **发行者类型。** 财务省（日本主权）。
- **期限区间。** 2  月、3  月、6  月、1  年（头条的 1Y TDB 是关键的短端 JGB 基准）。
- **最低批量。** 招标时 ¥100  百万的发行批量；二级交易为机构投资者以更小规模进行。
- **结算。** 典型为经日本央行网 JGB 服务的 T+1  / T+2 ；JGB 振替系统。
- **信用风险。** 主权 — 日本政府信用。
- **日本央行合格担保。** 以非常低的折扣在所有日本央行操作中完全合格；正统的无风险担保。
- **参与者。** 银行、人寿保险公司、财产保险公司、信托银行、外国央行与储备管理人（日元主权现金的大量买家）、外国商业银行、MMF / MRF、资产管理公司。
- **发行余额。** 在财务省债务统计中追踪；存量在 TDB 全部发行余额（跨期限合计）上以数百万亿日元计。
- **2024  后的下限含义。** TBill 收益率在政策利率余额下限减去小幅担保稀缺溢价的附近交易；负 TBill 收益率（低于下限、偶尔低于零的收益率）在外国储备管理人需求与日本央行购买共同压缩供给时历史上曾出现。2024  之后，TDB 曲线读起来更像常规的短期 JGB 曲线。

## 工具 8  — 日本央行补充活期存款制度（補完当座預金制度）

- **法律形态 / 市场。** 在日本央行法与政策委员会决定下，日本银行就商业银行活期账户持有支付的利息；制度通道为补充活期存款制度（補完当座預金制度）。见 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]]。
- **发行者类型。** 日本银行（央行负债）。
- **期限区间。** 实质上为带每日滚动余额的 O/N；并非可交易工具，而是存款便利。
- **最低批量。** 无此概念 — 在日本央行网持有的余额。
- **结算。** 日本央行网活期账户分类账；按公布的日本央行 MPM 决定对余额计息。
- **信用风险。** 央行信用（对日元境内对手方而言因构造为零）。
- **日本央行合格担保。** 这是通道的日本央行一侧；不涉及外部担保。
- **参与者。** 仅限直接的日本央行网对手方：银行、信托银行、拥有日本央行账户的外国银行分行、合作金融中央机构（[[cooperative-banks/norinchukin|農中]]、[[cooperative-banks/shinkin-central|信金中央金庫]]、全信组连、劳金连）、[[money-market/tanshi-company-business-model|tanshi companies]]，以及获准作为日本央行对手方的证券公司。
- **发行余额。** 日本央行处的活期账户余额在 QE 遗产之后以数百万亿日元计；政策利率余额档设定头条短期利率。
- **2024  后的下限含义。** 这就是下限本身 — 本矩阵中所有其他工具均以政策利率余额利率定价。准备的充裕使下限具约束力，而非走廊上限具约束力。

## 工具 9  — MRF / MMF（货币市场基金）

- **法律形态 / 市场。** 投资信托法下的投资信托；MRF（Money Reserve Fund）是在证券公司经纪账户内使用的受监管现金管理载体，MMF（Money Market Fund）是更广泛的货币基金类别。JSDA 公布两者的统计；实务上日元 MMF 已基本消失，而 MRF 在经纪账户内仍广泛存在。见 [[money-market/japan-mmf-money-market-mutual-fund|Japan MRF / MMF]]。
- **发行者类型。** 在指定的受监管结构下提供 MRF / MMF 的投资管理公司；基础工具为 TBill、CP、NCD、回购与短期债券持仓。
- **期限区间。** 日赎（MRF）或短赎（MMF）现金载体；基础组合的加权平均到期较短（数月）。
- **最低批量。** 零售投资者可持有极小余额；机构经由经纪账户接入。
- **结算。** MRF 赎回为当日；交易分类账保留于经纪系统内。
- **信用风险。** 高等级短期工具的分散组合；在 2001  后体制下本金稳定性受盯市影响。
- **日本央行合格担保。** 基金本身并非日本央行合格；基础组合持仓（TBill、CP、NCD）以不同程度合格。
- **参与者。** 拥有经纪账户的零售投资者（占主导的 MRF 基础）、作为子分部的企业、作为运营基础的资产管理托管。
- **发行余额。** MRF 存量在整个经纪行业以数十万亿日元计；MMF 存量在 2001  的 NAV 破净危机后与 2016  的 NIRP 后崩溃，大多数 MMF 关闭。
- **2024  后的下限含义。** 正的日元短期利率重新唤醒了 MRF 的收益率曲面；基础组合收益率向减去管理费的政策利率余额下限抬升。MRF 作为默认的经纪现金分仓存活；MMF 复兴取决于持续的正前端利率与产品复兴决策。

## 跨工具比较矩阵

| 维度 | 无担保拆借 | 有担保拆借 | GC 回购 | SC 回购 | CP | NCD | TBill / TDB | 日本央行 CDF（补充活期存款） | MRF / MMF |
|---|---|---|---|---|---|---|---|---|---|
| **法律形态** | 无担保银行间贷款 | 有担保银行间贷款 | JGB 卖出回购 / 現先 / 現金担保付債券貸借 | 特定品种的 JGB 卖出回购 | 振替法下的短期社債 | 银行存款 / 存单 | 财务省 JGB 框架下的 JGB（TBill） | 日本央行法下的日本央行活期账户利息 | 投资信托法下的投资信托 |
| **发行者 / 对手方** | 银行、证券公司 | 银行、合作金融中央 | 证券公司、银行、信托银行、对冲基金 | 同 GC | 企业、银行、非银行 FI、SPV（ABCP） | 国内银行、外国银行东京分行 | 财务省 | 日本银行 | 投资管理公司 / 基础发行者 |
| **期限（最具流动性）** | O/N | O/N | T/N、1W | O/N–1M | 1M、3M | 3M、6M | 3M、6M、1Y | O/N 滚动余额 | 日赎（MRF） |
| **最低批量（惯例）** | ¥100  百万 | ¥100  百万 | ¥1  十亿 | ¥1  十亿 | ¥100  百万 | ¥100  百万 | ¥100  百万 招标 | N/A（余额） | 零售 / 机构 N/A |
| **结算** | 当日 日本央行网 | 当日 日本央行网 | 经日本央行网 JGB 的 T+0  / T+1  | 经日本央行网 JGB 的 T+0  / T+1  | 经 JASDEC 短期公司债的 T+0  / T+1  | T+1  / T+2  银行惯例 | 经日本央行网 JGB 的 T+1  / T+2  | 日本央行网分类账 | 经纪当日赎回 |
| **信用风险** | 无担保对手方 | 对手方 + 担保 | 对手方 + 担保折扣 | 对手方 + 担保折扣 | 发行者信用 | 发行银行信用（DICJ 仅至 ¥10m） | 主权 | 央行（零） | 分散的短期组合 |
| **日本央行合格担保** | N/A（参照利率） | N/A | N/A（担保池重叠） | N/A | 是（合格 CP） | 有限 / 取决于形态 | 是（非常低折扣） | 日本央行一侧本身 | 基础持仓合格 |
| **银行** | 重 | 重 | 重 | 较轻 | 发行者 + 投资者 | 发行者 + 投资者 | 投资者 | 对手方 | 基础持有者 |
| **保险公司** | 轻 | 轻 | 现金借出方一侧 | 轻 | 投资者 | 投资者 | 投资者 | N/A | 基础持有者 |
| **外国参与者** | 外国银行分行 | 较轻 | 借入方一侧重 | 重（对冲基金） | 有选择地 | 外国银行分行发行 | 重（储备管理人） | 外国银行分行 | N/A |
| **企业** | 无直接 | 无直接 | 经现金归集间接 | 无直接 | 重发行者 | 作为发行者无；部分作为投资者 | 部分资金部投资者 | 无直接 | 部分资金部现金 |
| **典型发行余额规模** | 数千亿至低数万亿日元日度成交 | 小于无担保 | 数十万亿日元日度周转 | GC 的子集 | 数十万亿日元存量 | 数十万亿日元存量 | 数百万亿日元存量（期限合计） | 数百万亿日元活期账户余额 | 数十万亿日元存量（MRF） |
| **2024  后的下限含义** | 在下限略上交易 | 与下限非常接近交易 | 从下限略下至略上 | 特殊性独立 | 下限 + 发行者利差 | 下限 + 发行者利差 | 下限减小幅溢价 | 下限本身 | 下限 − 费用（MRF 收益率） |

## 如何阅读本矩阵

工具矩阵是公开界面工具，而非交易指南。阅读任一前端工具页时：

1. **从法律形态开始。** 一项工具是银行间贷款、卖出回购协议、短期公司债、银行存款、主权票据、央行存款，还是投资信托，决定了几乎所有其他字段（监管机构、结算管道、披露、投资者基础、日本央行合格性）。
2. **检查每一侧可以是谁。** 直接的日本央行网对手方主导无担保 / 有担保拆借市场与补充活期存款制度；更广泛的接入在回购、CP、NCD 与 TBill 层打开；经纪零售主要经由 MRF 接入前端。
3. **检查日本央行通道角色。** [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|Complementary deposit facility]] 是通道；[[money-market/boj-open-market-operations|open market operations]] 将 TBill、JGB 回购、CP 回购与 JGB 直接作为工具箱使用。所有其他工具均以下限定价。
4. **检查 2024  后的含义。** 2024  年 3 月向正利率下限的转变改变了矩阵的重心：银行间交易已复活，回购更活跃，CP / NCD 如今带有有意义的期限利差，TBill 收益率已脱离零，而 MRF 收益率是可辨识的现金载体收益率。
5. **使用参与者列进行二阶阅读。** 对 TBill 的外国储备管理人需求、SC 回购中的对冲基金借入需求、MRF 零售流，以及企业 CP 展期行为，是显现于该列的二阶驱动因素。

## 边界情形与注意事项

- **拆借对回购。** 无担保拆借与有担保拆借处于同一拆借市场场所，具有不同的有担保 / 无担保法律形态。GC 与 SC 回购在不同的法律形态惯例（現先 对 現金担保付債券貸借）下处于 [[money-market/jgb-repo-market-japan|JGB repo market]]。混为一谈是常见误读。
- **CP 对短期债券。** [[securities/japan-securities-depository-center|JASDEC]] 短期公司债振替系统下的 CP 被视为短期社債 — 法律上为债券，运营上为短期资金筹措。长于 1  年的常规公司债使用单独的振替路径。
- **NCD 对普通银行存款。** 由 [[financial-regulators/yokin-hoken-kiko|DICJ]] 覆盖至 ¥10  百万的零售银行存款，与持有于 DICJ 上限之上的批发 NCD，并非同一产品，即便两者都是银行法下的银行负债。
- **TBill 对短期 JGB。** TBill（国庫短期証券 / TDB）是有别于剩余到期较短的息票 JGB 的自身短端 JGB 工具；其发行与结算惯例为 TBill 特有。
- **日本央行补充活期存款制度 对 准备金要求。** 准备金要求（準備預金制度）是单独的框架；补充活期存款制度是准备金付息通道。两者都涉及日本央行网余额，但并非同一法律装置。
- **MRF 对 MMF。** MRF 是带日赎的经纪账户归集载体；MMF 是更广泛的投资信托货币基金类别，在 2001  的 NAV 破净后与 2016  的 NIRP 后已基本从日元市场消失。两者常被归为一类，但监管框架不同。
- **JSCC 清算。** 经由 JSCC（[[securities/japan-securities-clearing-corp|JSCC]]）的回购清算覆盖交易商间 JGB 回购的相当份额；拆借资金不经由 JSCC。CP / NCD / TBill 二级交易一般不为现金结算使用 CCP。

## 关联

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

## 出处

- 日本银行：Money Market（paym/market overview）。
- 日本银行：短期金融市场统计（statistics/market/short）。
- 日本银行：Call Money Market Data（mutan series）。
- 日本银行：关于国库短期证券购买 / 出售的市场操作（ope_t）。
- 日本银行：关于 CP / 公司票据的市场操作（ope_b）。
- 财务省：JGB 招标日历与 TDB / TBill 发行时间表。
- 财务省：TBill 招标日历（tbills.html）。
- 日本证券业协会（JSDA）：统计门户与 CP 发行 / 余额表。
- 日本证券业协会（JSDA）：MMF 投资者信息页。
- 证券保管振替机构（JASDEC）：短期公司债振替系统概要。
- 日本证券清算机构（JSCC）：清算范围与 JGB 场外清算规则。
- 金融厅（FSA）：FIEA 框架参照。

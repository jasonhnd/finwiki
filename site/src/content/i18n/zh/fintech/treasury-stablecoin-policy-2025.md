---
source: fintech/treasury-stablecoin-policy-2025
source_hash: a8dd0ae3524217d3
lang: zh
status: machine
fidelity: needs_review
title: "财政部 2025 稳定币政策框架·PWG 建议和双轨章程"
translated_at: 2026-05-31T11:13:44.863Z
---

# 财政部 2025 稳定币政策框架·PWG 建议和双轨章程

## 长话短说

财政部的 2025  稳定币政策框架通过三个协调流程来实施 **GENIUS 法案**： (1) **总统数字资产市场工作组 (PWG-DAM)** — 根据 EO 14178  重新制定 — 发布了有关发行人资格、准备金构成、赎回担保和运行风险缓解的建议； (2) **联邦-州双轨**特许结构已最终确定，因此发行人可以在联邦共同下限和州级附加条件下获得**OCC**、**联邦储备**或**州监管机构**的许可； (3) **国库券准备金要求**调整为**≤93日到期**国债、受保存款机构的活期存款以及国债支持的逆回购——明确**排除长期票据、公司票据和加密抵押品**，以解决3月份2023 USDC事件中出现的**运行风险**。赎回保证为 **T+1 at 法定**，并具有 **流动性缓冲** 子规则，要求最低阈值的同日可互换性。该框架有意与欧盟 MiCA 单护照模型（支持联邦制）和日本 EPI 三类模型（支持较少的许可证类别）有所不同。与单独评估的美联储和 OCC 包机航线相比，财政部的作用是**政策协调和储备资产规范**，而不是直接监督——任何特定发行人的**监管者**仍然是其主要的联邦或州监管机构。

## 维基路线

该条目位于 [[fintech/INDEX|fintech index]] 下，作为 [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]] 的**财政部伙伴**。对于主管端机制，请使用 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] 和 [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]] 来读取它，对于合规性堆栈层，请使用 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 和 [[fintech/genius-act-501-actual-implementation|§501 implementation]] 来读取它。有关比较国际框架，请参阅 [[fintech/mica-overview|EU MiCA]]、[[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]] 和 [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]]。

## 为什么这个条目存在

财政部在 2025  稳定币框架中的角色**结构上不同于 SEC 重置** ([[fintech/regulatory-reset-2025-usa-crypto-policy|2025 reset]]) 和 **OCC 监管途径**（[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|trust-bank charter]] 和 [[fintech/occ-bank-charter-crypto-2025|2025 OCC charter]]）。财政部设定**准备金、赎回和运行风险政策参数**，但不直接特许或监督发行人； **总统工作组**是机构间协调论坛，负责协商这些参数。此条目涵盖了**财政部实际发布的内容**、影响 GENIUS 中§4(d) 储备资产清单的**储备构成原理**，以及解决 OCC、美联储和州监管机构之间管辖权重叠的**联邦-州协调**机制。

## 总统数字资产市场工作组

总统金融市场工作组 (PWG) 是根据里根总统在 1988  中的行政命令成立的，最初是为了解决 10 月份 1987  股市崩盘后的担忧。它的**数字资产扩展**以早期形式存在（2021 PWG 关于稳定币的报告；2022  机构间框架）。 **EO 14178**（1 月 23 2025）将该小组重新命名为**数字资产市场总统工作组 (PWG-DAM)**，具有更具体的组成和 180 天的交付时间表。

### 组成和椅子

|角色|持有者|
|---|---|
|椅子|白宫人工智能和加密货币沙皇（David Sacks）|
|财政部|财政部长|
|美国证券交易委员会|主席（保罗·阿特金斯）|
|美国商品期货交易委员会|椅子|
|OCC|货币监理署|
|美联储|理事会主席|
|联邦存款保险公司|椅子|
|商业|商务部长|
|金融犯罪执法网络|导演|
|美国海外资产控制办公室|董事（通过财政部）|
|司法部长|司法部代表|

其组成比历史上的 PWG（以财政部、美联储、SEC、CFTC 为中心）**明显更广泛**，并反映了稳定币、制裁、反洗钱/打击资助恐怖主义、银行和证券/商品监管的**多机构协调需求**。

### 初步建议（已交付2025-Q3）

PWG-DAM 的第一个正式输出（在 180 天 EO 14178  窗口内交付）涵盖六个领域：

1。 **发行人资格框架**——联邦和州双轨制，具有联邦底线。
2。 **储备金构成** — 仅限于现金、受保存款机构的活期存款、≤93 天的国库券以及国库券支持的逆回购。
3。 **赎回保证** — T+1  平价，具有流动性缓冲。
4。 **运行风险缓解**——每日准备金透明度、每月证明、流动性压力测试。
5。 **机构间协调协议** — OCC、美联储、FDIC、州监管机构之间的监管信息共享。
6。 **跨境框架** — MRA 式互认，以欧盟 MiCA、英国 FCA、日本 FSA、香港 HKMA、新加坡 MAS 作为优先司法管辖区。

储备构成建议**直接流入 GENIUS §4(d)** 法定文本；赎回担保建议流入 GENIUS §4(e)；运行风险建议已通过 OCC、美联储和 FDIC 根据 GENIUS §6 实施规则进行编纂。

## 联邦与州双轨架构

GENIUS 法案建立了**双轨**结构，而不是欧盟 MiCA 单一护照方法：

|追踪|调节器|范围|流通上限|资本层|
|---|---|---|---|---|
|联邦 (OCC)|OCC|国家支付稳定币发行机构章程|无限|~$50M 层-1 floor（OCC 自行决定）|
|联邦（美联储）|美联储委员会|银行控股公司附属发行人|与 BHC 结构相关|根据 BHC 框架|
|状态|主要州监管机构+二级联邦审查|国家合格支付稳定币发行机构|未偿金额 10  十亿美元|由州监管机构制定，联邦下限|

**联邦楼层**包括：

- §4(d) 储备构成清单；
- §4(e) T+1 par 赎回要求；
- §501 拒绝者授权；
- §6  监管层（资本、流动性、治理）；
- §7 证明和透明度要求。

州监管机构**可能**施加额外的消费者保护、资本缓冲或运营要求，但**不得**放松联邦下限。当州级发行人超过**$10 十亿未偿**上限时，它必须过渡到联邦宪章或限制发行。

这种结构受到自 1860 以来就存在的**双重银行系统**的影响，并且在操作上类似于 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] 中可见的**国家与联邦信托银行**区别。选择**双轨而非单护照**反映了：

- 美国现有的双重银行先例；
- 反对单一联邦护照制度的州监管机构（NYDFS、加州 DFPI、德克萨斯州银行部）的政治选区；
- 保留**州级创新实验**（怀俄明州 SPDI、内布拉斯加州数字资产托管机构、犹他州工业银行）的愿望。

有关并行国家银行合规性地图，请参阅 [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer system]]。

## 储备金构成·国库券要求及理由

§4(d) 储备资产清单有意缩小：

|允许的储备资产|基本原理|
|---|---|
|美元|零信用风险，完美平价|
|受保存款机构的活期存款|由 FDIC 支持，最高可达保险限额；数额较高时可避免破产|
|国库券，≤93天到期|主权信用+短期=压力下价格风险最小|
|由国债支持的逆回购|有抵押的每日流动性，货币市场基金用于类似目的|

**从允许列表中排除**：

- **较长期国债** (>93 days) — 避免导致 SVB 崩溃和 3 月份 2023 USDC 脱钩的 **久期损失** 事件。
- **公司票据**（商业票据、公司债券）——以避免 Tether 的 2023  储备组合之前出现的 **信用风险** 范围（参见 [[fintech/tether-business-model-short-treasury-yield|Tether business model]]）。
- **加密货币抵押品**（BTC、ETH、其他稳定币）——避免**错误风险**（当加密货币市场承压时，SC 会脱钩）。
- **货币市场基金份额** — 正式排除；代币化的 MMF 股票（例如 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]]）目前**不允许**允许储备，尽管该框架为未来的纳入留有空间。

**93 天到期上限** 校准为：

1。符合 **SEC 规则 2a-7** 对政府货币市场基金“加权平均期限”合格资产的定义。
2。确保储备资产可以在**T+1 赎回窗口**内以最小的价格影响进行清算。
3。提供针对美联储利率冲击情景的安全边际（100 天票据的 93bp 变动会产生约 0.25% 按市值计价的损失，可在 90  天内恢复）。

对于更广泛的储备资产飞轮动态，请参阅 [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] 和 [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]] 中的风险案例分析。

### 许可储备资产比较 · GENIUS vs MiCA vs Japan EPI

|政权|现金|活期存款|≤93 天国债|长期国债|货币基金份额|企业票据|加密货币|
|---|---|---|---|---|---|---|---|
|美国天才| ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
|欧盟 MiCA (EMT)| ✓ |✓（如果非系统性则≤60%，如果显着则≤30%）| ✓ |有限的|有限的| ✗ | ✗ |
|日本EPI（信托型）| ✓ | ✓ | ✓ |有限的| ✗ | ✗ | ✗ |
|日本EPI（银行型）|每家银行审慎| | | | | | |
|香港稳定币令| ✓ | ✓ | ✓ |有限的| ✗ | ✗ | ✗ |
|马萨诸塞州| ✓ | ✓ | ✓ |有限的| ✗ | ✗ | ✗ |

五极之间的**趋同**是惊人的：所有五极都允许现金、活期存款和空头国债；所有五种都不包括加密货币抵押品和公司票据；所有五个都限制较长时间的论文。 **分歧**在于 MiCA 的存款集中度限制（对欧洲二次打击的 SVB / USDC 事件的回应）和日本的银行审慎监管。有关完整的人行横道，请参阅 [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]。

## 兑现保证 · T+1  面值

GENIUS §4(e) 要求任何向发行人出示代币的持有者在 T+1 内按面值赎回。财政部框架通过以下方式实现这一目标：

|要求|细节|
|---|---|
|**通过赎回**|发行人必须以 1:1  面值赎回，无论二级市场价格如何|
|**T+1 结算**|资金必须在赎回请求后的下一个工作日结束前到达持有人的账户|
|**最低门槛**|发行人可以设定合理的最低赎回规模（典型：$100,000 批发层；$1 零售层）|
|**KYC 门控**|赎回可能取决于持有人满足 KYC 要求|
|**流动性缓冲**|发行人必须持有可立即转换为现金以进行例行赎回的缓冲（典型：5–10% 循环供应）|

**缓冲区要求**是最重要的技术子规则。它解决了 **3 月 2023 USDC 事件**，其中 Circle 的 3.3B 美元对硅谷银行存款的敞口在周末被冻结，导致 USDC 在美联储/财政部/FDIC 周一宣布银行存款担保之前大幅脱钩。在新框架下，如果发行人集中于单一未保险存款机构，则将面临监管行动。

### 缓解运行风险

出于风险目的，财政部框架将稳定币**视为准货币市场基金**，并应用了几种MMF式的缓解措施：

1。 **多元化要求。**储备资产必须在至少三个交易对手或发行人（国债、存款机构）之间实现多元化，以避免单点故障风险。
2。 **每日准备金披露。** 发行人发布每日准备金构成快照（已成为 Circle USDC 的标准；针对透明度较低的发行人的新规定）。
3。 **每月证明。** 注册会计师事务所在月底对准备金构成和隔离进行证明。
4。流动性压力测试
5。 **恢复和处置计划。** 超过阈值（~$10B 未偿还）的发行人提交生前遗嘱式计划以有序结束。
6。 **流动性缓冲最低限度。**面向零售发行人的法定 5% 同日流动性下限。

这些规定明确借鉴了**SVB / USDC 3 月 2023 的经验教训**以及 2008  后和 2020 后的**货币市场改革**轨道。概念起源于美国证券交易委员会的 2010  和 2014  规则 2a-7  管理 MMF 的改革。

对于平行圆形储备飞轮风险面，请参见 [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]。

## 财政部 vs 美联储 vs OCC · 谁做什么

一个常见的混淆点是**财政部、美联储还是 OCC** 是否特许支付稳定币发行人。答案因曲目而异：

|追踪|特许权|初级主管|决议权|储备托管人|
|---|---|---|---|---|
|OCC 国家 PPSI 章程|OCC|OCC|FDIC（针对受保存款负债）+ OCC|存款或美联储主账户|
|美联储 BHC 子公司|美联储|美联储|FDIC（受保）+ 美联储|根据 BHC 框架|
|州 PPSI 章程|州监管机构+联邦二级审查|州+二级联邦|州+ FDIC（受保）|存款账户或美联储主账户（如果符合条件）|

这张地图中的**财政部**是**政策协调员**（通过 PWG-DAM）、**OFAC 制裁机构**、**反洗钱/反恐怖融资政策**（通过 FinCEN）和**财政接口**（国库现金管理作为填充稳定币储备的基础国库券的发行人）。财政部**不特许或直接监督** PPSI 发行人。

这种分离与管理**货币市场基金**（美国证券交易委员会章程/监督，财政部制定主权债务发行政策，美联储运行贴现窗口）相同，并反映在数字资产堆栈中。有关信托银行章程的比较分析，请参阅 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]。

## 财政部的稳定币作为财政部买家的论点

财政部对该框架的兴趣超出了消费者保护政策的范围。 **储备构成规则有效地将稳定币行业转变为大规模国库券买家**：

|发行人类别|预计未偿还 (2026-Q1)|预计产生的国库券需求|
|---|---|---|
|泰达币（USDT）|〜$120B|~$80B 国库券（根据公开证明；国际上非 PPSI）|
|圆圈（USDC）|〜$45B|~$30B 国库券|
|Paxos（USDG、USDP、BUSD 遗留）|〜$5B|~$4B 国库券|
|贝宝 (PYUSD)|〜$1B|~$0.8B 国库券|
|其他|〜$10B|~$7B 国库券|
|**稳定币行业总量**|**~$180B**|**~$120B 国库券**|

今天的价格约为 $120B（并且在接下来的 400–1 年中达到 $5B–$7 T 的合理增长路径），稳定币行业成为**短期国债的结构性新买家** - 其规模与单一外国央行的储备分配相当。这种动态体现了财政部对受消费者保护的监管下，**增长而不是限制**受监管的稳定币行业的政策兴趣。 **循环储备飞轮**动态（发行增长 → 国库券需求增长 → 收益收益 → 储备增长 → 更多发行）在 [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] 中详细记录，并与 [[fintech/circular-reserve-asset-flywheel-risk-cases|risk cases]] 中的风险进行对比。

## 国际协调·互认协议和财政部双边渠道

财政部的 PWG-DAM 建议包括针对优先司法管辖区的**双边互认协议 (MRA)** 轨道：

|交易对手|状态 (Q1 2026)|首席财务联系人|
|---|---|---|
|欧盟（委员会 + EBA）|框架谅解备忘录正在洽谈中|财政部国际办公室+国务院|
|英国 FCA + 英国财政部|双边讨论活跃|英美对话|
|日本金融厅|常设通道活跃（后 SBI/Circle JPYC 路线）|财政部亚洲办事处|
|香港金管局|讨论开始（后稳定币条例）|有限的|
|新加坡金管局|讨论活跃|财政部亚洲办事处|
|加拿大OSFI|早期阶段|有限的|
|瑞士金融市场监管局|现有渠道：银行保密框架|积极的|

MRA 轨道是国内联邦-州双轨制的**国际对应**：MRA 不要求外国发行人获得美国 PPSI 许可证才能进入美国市场，而是允许承认类似的外国框架（须遵守§501  等效合规性）。对于早于本政策工作的三环 MRA 框架，请参阅 [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]] 和 [[fintech/three-circles-mra-2030-economic-scale|three circles MRA 2030 scale]]。

## 实施时间表

|日期|行动|
|---|---|
|2025-01-23|EO 14178  重新包租 PWG-DAM，并提供 180 天可交付成果|
|2025-04 |PWG-DAM 工作组结构投入运行|
|2025-07-18|《天才法案》签署成为法律|
|2025-Q3 |PWG-DAM 初步建议已发布|
|2025-Q4 |OCC 关于 PPSI 章程拟议规则制定的通知|
|2026-Q1 |美联储、FDIC 和 OCC 关于准备金构成和监管的联合最终规则|
|2026-Q2 |FinCEN 报告标准最终确定|
|2026-Q2 预计|根据最终规则发布的第一批​​联邦 PPSI 章程|
|2026-H2 预计|与欧盟的首个双边互认协议敲定|

周边政策环境见[[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]。

## 有关的

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 mandate]]
- [[fintech/genius-act-501-actual-implementation|GENIUS §501 actual implementation]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC jurisdiction]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|EU MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## 来源

- 国库数字资产政策：https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- 财政部新闻稿：https://home.treasury.gov/news/press-releases
- 总统金融市场工作组：https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/presidents-working-group-on-financial-markets
- FinCEN 新闻：https://www.fincen.gov/news-room
- 美联储新闻稿：https://www.federalreserve.gov/newsevents/pressreleases.htm
- OCC 新闻和发行：https://occ.treas.gov/news-issuances/
- 白宫行政命令 14178: https://www.whitehouse.gov/presidential-actions/
- GENIUS 法案法定文本（7 月颁布的公法 2025）
- 关于实施规则的联邦公报备案：https://www.federalregister.gov/
- PWG 2021  稳定币报告（前身文件）：https://home.treasury.gov/system/files/136/StableCoinReport_Nov1_508.pdf

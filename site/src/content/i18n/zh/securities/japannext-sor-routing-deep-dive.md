---
source: securities/japannext-sor-routing-deep-dive
source_hash: 1a19daaab35d5bd8
lang: zh
status: machine
fidelity: ok
title: "Japannext PTS SOR 路由深度剖析"
translated_at: 2026-06-19T12:43:19.939Z
---

# Japannext PTS SOR 路由深度剖析

## Wiki route

本页面位于 [[securities/INDEX|securities index]] 内，作为 [[securities/japannext-securities|Japannext]] 的场所机制深化和 [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] 的路由机制深化。请与 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]（数据层）、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]（Japannext 在 TSE / OSE 与 JSCC / JASDEC 之间的位置）以及 [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]]（允许 PTS 运营商存在的牌照边界）一起阅读。JapanFG 运营商锚点包括 [[megabanks/sbi-hd|SBI HD]]（Japannext 经由 SBI 集团谱系的锚定股东）、[[securities-firms/nomura-hd|Nomura HD]]（Instinet 遗产 / SOR 密集型参与者）、[[securities-firms/sbi-securities|SBI Securities]] 以及 [[financial-regulators/jsda|JSDA]]（PTS 统计发布者）。

## TL;DR

Japannext 是日本最古老、最大的现金股票 PTS，由 Japannext 株式会社（前称 SBI Japannext）依据带 PTS 授权的 FIEA 第一种金融商品交易业运营。它运行明示的连续竞价订单簿（日间时段为 J-Market，夜间时段为 X-Market），并支持限价 / 市价 / 冰山 / 钉住等订单类型，这些类型为欧美 MTF / ATS 设计所熟知。其竞争角色是为券商 SOR 引擎提供相对于 [[securities/tokyo-stock-exchange|TSE]] 和 OSE 上市现金邻接的价格改善与盘外替代选择。路由经济学受以下因素塑造: JSDA 自律规则、FSA 客户最佳利益原则、TSE / Japannext / [[securities/osaka-digital-exchange|ODX]] 之间的碎片化（ODX 的现金股票范围狭窄，主要是证券型代币），以及当 SOR 所有者同时是 Japannext 股东或分销对手方时的券商优先选择。

## 场所身份

| Field | Public reading |
|---|---|
| Legal entity | Japannext 株式会社（株式会社ジャパンネクスト証券）|
| FIEA registration | 带 PTS 运营授权的第一种金融商品交易业运营商（在 [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] 上验证）。|
| Shareholder lineage | SBI 集团 / 以 SBI HD 为锚定的历史 PTS 谱系；高盛及其他公司在日本 PTS 历史中曾是历史性的 PTS 股东或对手方。请按场所 IR 验证当前股权结构表。|
| Self-regulatory adjacency | [[financial-regulators/jsda|JSDA]] 成员；在 PTS 信息网络于 2025 年 7 月终止后，PTS 统计由 JSDA 整合。|
| Markets operated | 用于现金股票 PTS 交易的 J-Market（日间连续）、X-Market（夜间时段连续）。|
| Clearing route | 现金股票 PTS 交易在 PTS 清算安排下通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算；通过 [[securities/japan-securities-depository-center|JASDEC]] 簿记结算。|

股权结构表与实体名称会发生变化；在时效敏感材料中引用当前所有权之前，请务必检查场所的 About / Regulations 页面。

## 时段结构

Japannext 运营两个不同的时段，券商 SOR 逻辑必须将其视为不同的流动性池:

| Session | Window (illustrative) | Use case |
|---|---|---|
| J-Market | 与 TSE 日间时段重叠 | 用于价格改善、隐藏流动性捕获、在受支持分部进行中点撮合的明示替代场所。|
| X-Market | 晚间 / 隔夜时段 | 为零售客户和处理迟到流量的 ETF / 指数基金提供盘后流动性；相对于缺乏现金股票常规夜间时段的 TSE，这是关键的增值点。|

晚间时段是 Japannext 最具特色的产品特性之一，因为 [[securities/tokyo-stock-exchange|TSE]] 不提供可比的常规收盘后现金股票连续市场；OSE PTS-Night 和 TSE 自身的 ToSTNeT 场所具有不同的机制（协商 / 收盘价 / 大额订单设计）。因此，路由客户的市价收盘订单或盘后新闻反应订单是 X-Market 的用例，而非 TSE 替代品。

## 订单类型

Japannext 支持的订单类型词汇比零售 UI 通常暴露的更丰富。公开描述的家族包括:

| Order type | Behaviour | Routing relevance |
|---|---|---|
| 限价（指値）| 标准价格-时间优先限价。| 相对于 TSE NBBO 的默认 SOR 比较原语。|
| 市价（成行）| 拿取可用的最优显示流动性。| 由于某些个股的盘口顶部较薄，PTS 订单簿中的冲击风险高于 TSE。|
| 冰山 / 隐藏数量 | 仅显示一部分，成交时补充。| 被机构流量用于向价格改善寻求者掩盖大宗规模。|
| 钉住订单（在受支持处）| 跟踪 NBBO / 中点 / 主要场所最优价。| 对寻求价格改善而不承担报价风险的 SOR 引擎有用。|
| 止损 / 止损限价 | 条件触发器。| 券商侧条件订单在触发时可转换为限价 / 市价并重新路由。|
| 有效期变体（Day / IOC / FOK）| 标准全球 TIF 词汇。| 对希望探测 Japannext 流动性并在部分成交时立即重新路由的 SOR 引擎至关重要。|

请务必针对确切的字段级行为验证场所的当前规则手册和券商产品披露；PTS 规则修订和最小报价单位同步会改变实际优势。

## SOR 路由决策逻辑

券商的 SOR 不是魔法盒子。决定客户订单是触及 Japannext 还是直接在 TSE 执行的决策逻辑通常结合:

1. **客户指令与产品范围。** 某些产品（例如 NISA 受限个股、某些保证金产品流量、特定订单类型）可能被券商政策排除在 PTS 路由之外。参见 [[securities/japan-best-execution-sor-pts|best-execution policy]] 页面的券商披露检查清单。
2. **实时价格比较。** SOR 在订单到达时刻将 Japannext 最优买价 / 卖价与 TSE NBBO 进行比较，包括决定是否可能实现次最小报价单位改善的最小报价单位规则。
3. **可用规模。** 如果 Japannext 的显示流动性低于订单的规模阈值，SOR 可能同时（喷洒路由）或顺序地将子订单发送至 Japannext 并将剩余部分发送至 TSE。
4. **延迟与连接性。** SOR 必须将至 Japannext 与至 TSE arrowhead 撮合引擎的往返时间纳入考量；对于时效敏感的流量，如果场所更慢，边际价格改善可能被舍弃。
5. **费用 / 返佣经济学。** Japannext 的费用表以及任何相对于 TSE 参与费的做市 / 拿单返佣差额，独立于客户结果地影响券商激励（一个冲突面）。
6. **回退规则。** 如果 Japannext 处于停牌、数据中断或连接健康检查失败，SOR 必须按披露的行为重新路由至 TSE。

FSA 客户最佳利益原则（顧客本位の業務運営）实际上要求券商记录其 SOR 如何平衡价格、成本、速度、执行可能性、结算确定性和客户指令；SOR 设计是该记录政策的运营执行。

## 碎片化: TSE / OSE / Japannext / ODX

日本的现金股票流动性在 [[securities/tokyo-stock-exchange|TSE]] 上的集中程度远高于美国股票在 NYSE / Nasdaq 上的集中程度。碎片化图景如下:

| Venue | Share of cash-equity flow | Notes |
|---|---|---|
| TSE | Prime、Standard、Growth 分部中价值的绝大多数 | NBBO 的参考市场；arrowhead 引擎，ToSTNeT 用于盘外。|
| OSE | 现在实际上无现金股票（股票在 2013 整合后已合并至 TSE）；上市衍生品场所 | 现金股票碎片化问题如今几乎不涉及 OSE。|
| Japannext | 盘外现金股票中最大的 PTS 份额 | 对零售和机构现金股票流量最重要的 SOR 替代选择。|
| Cboe Japan（旧 Chi-X Japan）| 另一个主要 PTS 极 | 请按场所 IR / FSA 披露验证当前活动和所有权状态；整合后 PTS 市场由少数运营商组成。|
| ODX 股票 PTS | 现金股票范围狭窄；START 证券型代币 PTS 是主要的面向公众职能 | 证券型代币侧参见 [[securities/japan-security-token-secondary-market-route|security token secondary market route]]。|
| ToSTNeT（TSE 盘外）| TSE 自身的盘外路线 | 大宗 / 收盘价 / 协商交易；与 PTS 不同。|

解读: 日本的碎片化程度远不如美国或欧洲现金股票那样显著。因此 SOR 设计决策不应框定为「我是否应去 20 场所」，而是「我应拿取 TSE 显示流动性，还是检查少数 PTS 场所以获取价格改善和额外规模」。

## 暗池 vs 明池路由

Japannext 历史上将明示连续竞价订单簿作为其主要产品运营。美国意义上的「暗池」（一个非显示场所，订单仅在执行时才揭示）并不能完美映射到日本，因为:

- 主要的 Japannext 市场是带已发布盘口顶部 / 深度数据的明示限价订单簿。
- 冰山 / 隐藏数量订单在明示订单簿内提供隐藏规模特性，而非完全的暗场所。
- 在提供处的钉住中点分部（请验证当前产品页面）提供类似于某些美国暗池功能的中点交叉特性。
- 日本的券商内部化受最佳执行规则和 JSDA 自律框架约束；券商内部化的现金股票流量不具有与美国 Reg NMS 时代暗池相同的监管形态。

对于撰写日本「暗池」的分析师，更准确的措辞是「Japannext / Cboe Japan 明示订单簿内的非显示流动性」加上「ToSTNeT 大宗 / 收盘价协商」加上「JSDA 规则下的盘外经纪交叉」，而非将 Japannext 视为美国式 ATS 暗池。

## 券商优先选择与冲突

券商优先选择是指偏向券商（或其母公司 / 关联方）拥有经济利益的场所的 SOR 设计这一术语。在日本，需关注的面包括:

- **股东关系。** Japannext 的历史性 SBI 谱系意味着 [[securities-firms/sbi-securities|SBI Securities]] 订单流有结构性理由将 Japannext 视为其执行菜单的一部分。披露问题是路由优先选择是否记录在券商的最佳执行政策中。
- **返佣 / 费用经济学。** 当场所的做市返佣超过券商向客户传递的返佣时，券商攫取差额；这与美国 Reg NMS 时代的辩论是相同的冲突模式，但数值规模较小。
- **证券借贷与主经纪邻接。** 当券商同时运营 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] 或与 [[securities/japan-stock-lending-market-route|stock lending]] 互动时，间接经济学可能使表面执行路线复杂化。资金侧邻接参见 [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]。
- **向内部化者的信息泄露。** 当券商在将残余订单发布至 PTS 之前内部化流量时，问题是客户订单在经过内部化的途中是否被逆向选择。

FSA 客户导向业务行为页面（顧客本位の業務運営）设定了基于原则的期望，即券商披露和管理这些冲突；分析师在对特定公司得出结论之前，应阅读券商已发布的政策以及 JSDA 自律材料。

## 执行质量指标

用于评估 Japannext 路由是否真正改善客户结果的有用指标:

| Metric | Definition | Caveat |
|---|---|---|
| 相对于 TSE NBBO 的价格改善 | 执行价格与订单到达时 TSE 最优买价 / 卖价之间的差异 | 最小报价单位的离散性限制了改善的幅度；需要具备次最小报价单位能力的比较。|
| 有效价差 | 执行价格与订单到达时中间报价之间绝对距离的两倍 | 越低越好；中点执行越多的场所在此指标上获胜。|
| 已实现价差（T+N）| 执行价格与 T+5 分钟（或其他区间）时中间报价之间距离的两倍 | 捕捉交易是否被逆向选择。|
| 成交率 | 有效期窗口内的成交数量 / 提交数量 | 对 IOC / FOK 探测策略重要。|
| 速度 | 从订单接收到执行 / 取消的时间 | 延迟对 SOR 扫单重要。|
| 有效费用 | 显式佣金加上隐含价差加上返佣传递 | 面向客户的总成本才是正确的指标，而非场所的标题费用。|

在日本，场所 / 券商层面已发布的整合执行质量数据远不如美国 Rule 605 / 606 披露那样标准化。分析师必须汇集各券商政策页面、来自 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 的 JSDA 汇总 PTS 统计，以及任何自愿的券商执行质量披露，而非拉取单一受监管数据集。

## 结算 / 清算关联

Japannext PTS 现金股票交易在其 PTS 清算服务下通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算，并通过 [[securities/japan-securities-depository-center|JASDEC]] 簿记结算在 T+2 （在 2024 缩短周期之后；请验证当前标准结算周期）结算。相关运营考量:

- PTS 交易并非「脱离清算」——它落入与 TSE 交易相同的 CCP 风险系统。
- JSCC 的会员保证金和违约基金缴款涵盖两个场所。
- Japannext 的运营故障（撮合引擎问题、市场数据中断）不会撤销已清算交易；它们影响未来的订单路由。
- 清算会员层面的跨场所净额结算对 SOR 活跃公司是有意义的运营收益。

## 监管与自律

| Layer | Role |
|---|---|
| FSA | 授权带 PTS 范围的第一种金融商品交易业；监督运营韧性、行为和客户最佳利益的实施。|
| JSDA | 证券公司（包括作为证券公司的 PTS 运营商）的自律机构；发布 PTS 统计；运行上市和非上市证券 PTS 交易的规则。|
| JSCC | CCP 风险管理。|
| JASDEC | 簿记结算基础设施。|
| Venue self-regulation | Japannext 发布其自己的规则 / 监管页面，涵盖参与者行为、订单录入和市场诚信控制。|

边界说明: Japannext 规则对 Japannext 参与者可强制执行；FSA 原则对受监管实体可强制执行；JSDA 自律规则约束 JSDA 成员。当分析师写「Japannext 要求 X」时，请验证 X 是场所规则、JSDA 规则还是 FSA 期望；每一项都有不同的执行和例外机制。

## 历史速写

Japannext 的谱系追溯到 FIEA-2007 后 PTS 框架自由化、SBI 集团在推动 PTS 基础设施中的作用、与全球公司的合作伙伴关系（包括高盛历史上持有前身实体的股份），以及留下少数现金股票 PTS 极的整合。Cboe 收购了前 Chi-X Japan 业务，将其更名为 Cboe Japan。其他 PTS 运营商曾进入和退出。

与当今路由格局相关的主要结构性事件:

- **2007 FIEA 第一种 + PTS 授权框架** —— 创建了现代 PTS 法律基础。
- **SBI Japannext 启动** —— 建立了日间 + 夜间时段明示 PTS。
- **Chi-X Japan / Cboe Japan 承继** —— 现金股票 PTS 竞争的第二极。
- **TSE arrowhead 撮合引擎升级** —— 缩小了主要交易所与 PTS 场所之间的延迟 / 功能差距。
- **PTS 信息网络于 2025 年 7 月终止** —— JSDA 接管了公开 PTS 统计整合。
- **在线券商持续的零售 SOR 产品推出** —— 使 PTS 路由在面向客户的 UI 中对零售客户可见。

## Related

- [[securities/INDEX]]
- [[securities/japannext-securities]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[megabanks/sbi-hd]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/nomura-hd]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[INDEX|FinWiki index]]

## Sources

- Japannext 株式会社，官方网站及 regulations / about 页面。
- JSDA，PTS 交易统计页面及 PTS 股票统计说明 PDF。
- FSA，金融商品交易业运营商综合监督指引；客户导向业务行为（顧客本位の業務運営）页面。
- JPX，股票统计页面及清算 / 结算概要。

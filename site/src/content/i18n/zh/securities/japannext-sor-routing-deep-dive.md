---
source: securities/japannext-sor-routing-deep-dive
source_hash: 99fc79435a5d17e6
lang: zh
status: machine
fidelity: ok
title: "Japannext PTS SOR 路由深度解析"
translated_at: 2026-06-01T04:15:40.166Z
---
# Japannext PTS SOR 路由深度解析

## Wiki route

本页位于 [[securities/INDEX|securities index]] 内，是对 [[securities/japannext-securities|Japannext]] 的交易场所机制深化，也是对 [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] 的路由机制深化。请结合 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 阅读数据层，结合 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 理解 Japannext 在 TSE / OSE 与 JSCC / JASDEC 之间的位置，并结合 [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]] 理解允许 PTS 运营商存在的牌照边界。JapanFG 运营商锚点包括 [[megabanks/sbi-hd|SBI HD]]（Japannext 通过 SBI 集团谱系形成的锚定股东）、[[securities-firms/nomura-hd|Nomura HD]]（Instinet 传承 / SOR 重度参与者）、[[securities-firms/sbi-securities|SBI Securities]] 和 [[financial-regulators/jsda|JSDA]]（PTS 统计发布方）。

## TL;DR

Japannext 是日本历史最久、规模最大的股票现货 PTS，由 Japannext Co., Ltd.（原 SBI Japannext）在 FIEA 第一类金融商品交易业及 PTS 运营授权下运营。它运行明盘连续竞价订单簿（日间 J-Market 和夜间 X-Market），并支持 EU 和 US 的 MTF / ATS 设计中常见的限价 / 市价 / 冰山 / pegged 订单类型。它的竞争角色，是为券商 SOR 引擎提供相对于 [[securities/tokyo-stock-exchange|TSE]] 以及 OSE 上市现金邻接业务的价格改进和盘外时段替代选择。路由经济学受 JSDA 自律规则、FSA 客户最佳利益原则、TSE / Japannext / [[securities/osaka-digital-exchange|ODX]] 之间的碎片化（ODX 的股票现货范围较窄，主要是证券型代币）以及券商偏好路由影响，尤其当 SOR 所有者同时也是 Japannext 股东或分销交易对手时。

## Venue identity

| 字段 | 公开解读 |
|---|---|
| 法律实体 | Japannext Co., Ltd.（株式会社ジャパンネクスト証券） |
| FIEA 注册 | 具有 PTS 运营授权的第一类金融商品交易业者（在 [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] 上核验）。 |
| 股东谱系 | SBI 集团 / 以 SBI HD 为锚的历史 PTS 谱系；Goldman Sachs 和其他公司曾在日本 PTS 历史中作为 PTS 股东或交易对手。当前股权结构请按交易场所 IR 核验。 |
| 自律邻接 | [[financial-regulators/jsda|JSDA]] 会员；PTS Information Network 于 2025年7月结束后，PTS 统计由 JSDA 汇总。 |
| 运营市场 | J-Market（日间连续）、X-Market（夜间连续），用于股票现货 PTS 交易。 |
| 清算路径 | 股票现货 PTS 交易根据 PTS 清算安排通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算；通过 [[securities/japan-securities-depository-center|JASDEC]] 振替簿记结算。 |

股权结构和实体名称会发生变化；在时点敏感材料中引用当前所有权前，务必检查交易场所的 About / Regulations 页面。

## Session structure

Japannext 运营两个不同交易时段，券商 SOR 逻辑必须将其视为不同流动性池:

| 交易时段 | 时间窗口（示意） | 用例 |
|---|---|---|
| J-Market | 与 TSE 日间交易时段重叠 | 用于价格改进、捕获隐藏流动性、在支持板块中进行中点撮合的明盘替代交易场所。 |
| X-Market | 晚间 / 隔夜时段 | 为零售客户以及处理晚到流量的 ETF / 指数基金提供盘后流动性；相对于没有常规股票现货夜盘的 TSE，是关键增量价值。 |

晚间时段是 Japannext 最具差异化的产品特征之一，因为 [[securities/tokyo-stock-exchange|TSE]] 不提供可比的常规收盘后股票现货连续市场；OSE PTS-Night 与 TSE 自身的 ToSTNeT 场所机制不同（协议 / 收盘价 / 大宗订单设计）。因此，客户的收盘市价或盘后新闻反应订单是 X-Market 的用例，而不是 TSE 替代品。

## Order types

Japannext 支持的订单类型词汇比零售 UI 通常展示的更丰富。公开描述的类型包括:

| 订单类型 | 行为 | 路由相关性 |
|---|---|---|
| 限价（指値） | 标准价格-时间优先限价单。 | 与 TSE NBBO 比较的默认 SOR 基础单元。 |
| 市价（成行） | 吃掉可用的最佳显示流动性。 | 在部分证券上，由于 PTS 订单簿顶部深度比 TSE 更薄，冲击风险更高。 |
| 冰山 / 隐藏数量 | 只显示一部分，成交后补充。 | 机构流量用于向寻求价格改进者隐藏大宗规模。 |
| Pegged orders（在支持时） | 跟随 NBBO / 中点 / 主交易场所最优价。 | 对寻求价格改进但不愿承担报价风险的 SOR 引擎有用。 |
| Stop / stop-limit | 条件触发。 | 券商侧条件单触发后可能转换为限价 / 市价并重新路由。 |
| Time-in-force 变体（Day / IOC / FOK） | 标准全球 TIF 词汇。 | 对希望试探 Japannext 流动性并在部分成交后立即重新路由的 SOR 引擎至关重要。 |

务必核验交易场所当前规则书和券商产品披露以确认精确字段级行为；PTS 规则修订和 tick-size 同步会改变实际优势。

## SOR routing decision logic

券商的 SOR 不是魔法盒。决定客户订单是否触达 Japannext 而不是直接在 TSE 成交的决策逻辑，通常结合:

1. **客户指令与产品范围。** 部分产品（例如 NISA 限制证券、某些保证金产品流、特定订单类型）可能被券商政策排除在 PTS 路由之外。券商披露清单见 [[securities/japan-best-execution-sor-pts|best-execution policy]] 页面。
2. **实时价格比较。** SOR 在订单到达时比较 Japannext 最优买 / 卖与 TSE NBBO，包括决定是否可能实现小于 tick 的价格改进的 tick-size 规则。
3. **可用规模。** 如果 Japannext 的显示流动性低于订单规模阈值，SOR 可能向 Japannext 发送子订单并将余量同时发往 TSE（喷洒路由），也可能顺序发送。
4. **延迟与连接性。** SOR 必须纳入 Japannext 与 TSE arrowhead 撮合引擎的往返时间；对时间敏感流量而言，如果交易场所更慢，边际价格改进可能被放弃。
5. **费用 / 返佣经济学。** Japannext 费率表以及相对于 TSE 参与费的任何 maker / taker 返佣差异，会独立于客户结果影响券商激励（冲突表面）。
6. **Fallback 规则。** 如果 Japannext 暂停、发生数据中断或连接健康检查失败，SOR 必须按披露行为重新路由至 TSE。

FSA 客户最佳利益原则（顧客本位の業務運営）实际上要求券商记录其 SOR 如何平衡价格、成本、速度、成交可能性、结算确定性和客户指令；SOR 设计就是该成文政策的运营执行。

## Fragmentation: TSE / OSE / Japannext / ODX

日本股票现货流动性集中在 [[securities/tokyo-stock-exchange|TSE]] 的程度远高于美国股票集中在 NYSE / Nasdaq 的程度。碎片化图谱如下:

| 交易场所 | 股票现货流量份额 | 注释 |
|---|---|---|
| TSE | Prime、Standard、Growth 板块价值的大多数 | NBBO 的参考市场；arrowhead 引擎，ToSTNeT 用于场外竞价。 |
| OSE | 目前实质上没有股票现货（2013 整合后股票集中到 TSE）；上市衍生品交易场所 | 如今股票现货碎片化问题几乎不涉及 OSE。 |
| Japannext | 场外股票现货中 PTS 份额最大 | 对零售和机构股票现货流量而言最重要的 SOR 替代场所。 |
| Cboe Japan（原 Chi-X Japan） | 另一主要 PTS 极点 | 当前活动和所有权状态请按交易场所 IR / FSA 披露核验；整合后 PTS 市场由少数运营商构成。 |
| ODX equity PTS | 股票现货范围较窄；START 证券型代币 PTS 是面向公众的主要功能 | 证券型代币侧见 [[securities/japan-security-token-secondary-market-route|security token secondary market route]]。 |
| ToSTNeT（TSE off-auction） | TSE 自身的盘外竞价路径 | 大宗 / 收盘价 / 协议交易；与 PTS 不同。 |

解读:日本碎片化程度远低于美国或欧洲股票现货。SOR 设计决策因此不是“是否去 20 个交易场所”，而是“是否吃掉 TSE 显示流动性，或者检查少数 PTS 交易场所以寻求价格改进和额外规模”。

## Dark vs lit pool routing

Japannext 历史上以明盘连续竞价订单簿作为主要产品。美国意义上的“dark pool”（订单只在执行时披露的非显示交易场所）与日本并不完全对应，因为:

- Japannext 的主要市场是带有公开最优价 / 深度数据的明盘限价订单簿。
- 冰山 / 隐藏数量订单是在明盘订单簿内部提供隐藏规模功能，而不是完全暗池。
- 支持时，pegged-to-midpoint 板块提供类似某些美国暗池功能的中点撮合功能。
- 日本券商内部化受最佳执行规则和 JSDA 自律框架约束；券商内部化的股票现货流量与美国 Reg NMS 时代暗池的监管形态不同。

分析师撰写日本“dark pools”时，更准确的表述是“Japannext / Cboe Japan 明盘订单簿中的非显示流动性”加上“ToSTNeT 大宗 / 收盘价协议”加上“JSDA 规则下的场外经纪撮合”，而不是把 Japannext 当作美式 ATS 暗池。

## Broker preferencing and conflicts

券商偏好路由是指 SOR 设计偏向券商（或其母公司 / 关联方）拥有经济利益的交易场所。在日本需要关注的表面包括:

- **股东关系。** Japannext 的历史 SBI 谱系意味着 [[securities-firms/sbi-securities|SBI Securities]] 订单流在结构上有理由将 Japannext 视为其执行菜单的一部分。披露问题在于路由偏好是否记录在券商最佳执行政策中。
- **返佣 / 费用经济学。** 当交易场所 maker 返佣超过券商向客户返还的返佣时，券商获取差额；这与美国 Reg NMS 时代争论中的冲突模式相同，但数值规模较小。
- **证券借贷和主经纪邻接。** 当券商还运营 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] 或与 [[securities/japan-stock-lending-market-route|stock lending]] 互动时，间接经济利益可能让表面执行路径复杂化。融资侧邻接见 [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]。
- **向内部化方的信息泄露。** 当券商在将剩余订单提交 PTS 之前先内部化流量时，问题在于客户订单是否在内部化过程中遭受逆向选择。

FSA 面向客户的业务运营页面（顧客本位の業務運営）确立了原则导向预期，要求券商披露并管理这些冲突；分析师在对具体公司下结论前，应阅读券商发布的政策以及 JSDA 自律材料。

## Execution-quality metrics

评估 Japannext 路由是否真正改善客户结果的有用指标:

| 指标 | 定义 | 注意点 |
|---|---|---|
| 相对 TSE NBBO 的价格改进 | 执行价格与订单到达时 TSE 最优买 / 卖之间的差异 | tick-size 离散性限制改进幅度；需要可比较 sub-tick 的数据。 |
| Effective spread | 执行价格与订单到达时中间价绝对距离的两倍 | 越低越好；中点成交更多的交易场所在该指标上胜出。 |
| Realized spread (T+N) | 执行价格与 T+5 min（或其他区间）中间价距离的两倍 | 捕捉交易是否遭受逆向选择。 |
| Fill rate | time-in-force 窗口内成交数量 / 提交数量 | 对 IOC / FOK 试探策略重要。 |
| Speed | 从订单接收到执行 / 取消的时间 | 延迟对 SOR 扫单重要。 |
| Effective fee | 显性佣金加隐含价差加返佣传递 | 面向客户的总成本才是正确指标，而不是交易场所表面费率。 |

日本在交易场所 / 券商层面的公开汇总执行质量数据，远不如美国 Rule 605 / 606 披露标准化。分析师必须组合各券商政策页面、来自 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 的 JSDA PTS 汇总统计，以及任何券商自愿执行质量披露，而不是提取单一监管数据集。

## Settlement / clearing tie-in

Japannext PTS 股票现货交易根据其 PTS 清算服务通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算，并通过 [[securities/japan-securities-depository-center|JASDEC]] 振替簿记按 T+2 结算（2024 缩短周期后；核验当前标准结算周期）。相关运营考虑:

- PTS 交易不是“清算外”——它进入与 TSE 交易相同的 CCP 风险系统。
- JSCC 的会员保证金和违约基金缴款覆盖两个交易场所。
- Japannext 的运营故障（撮合引擎问题、市场数据中断）不会撤销已清算交易；它们影响未来订单路由。
- 对 SOR 活跃公司而言，清算会员层面的跨交易场所净额结算是有意义的运营收益。

## Regulation and self-regulation

| 层级 | 角色 |
|---|---|
| FSA | 授权具有 PTS 范围的第一类金融商品交易业；监管运营韧性、行为和客户最佳利益落实。 |
| JSDA | 证券公司的自律机构（包括作为证券公司的 PTS 运营商）；发布 PTS 统计；运行上市和非上市证券 PTS 交易规则。 |
| JSCC | CCP 风险管理。 |
| JASDEC | 振替簿记结算基础设施。 |
| 交易场所自律 | Japannext 发布自身 rules / regulations 页面，规范参与者行为、订单输入和市场完整性控制。 |

边界说明: Japannext 规则对 Japannext 参与者可执行；FSA 原则对受监管实体可执行；JSDA 自律规则约束 JSDA 会员。当分析师写“Japannext 要求 X”时，应核验 X 是交易场所规则、JSDA 规则还是 FSA 预期；三者的执行和例外机制不同。

## History sketch

Japannext 的谱系可追溯到 FIEA-2007 后 PTS 框架自由化、SBI 集团在推动 PTS 基础设施中的角色、与全球公司的合作（包括 Goldman Sachs 历史上持有前身实体股份）以及整合后留下少数股票现货 PTS 极点。Cboe 收购原 Chi-X Japan 业务，并将其更名为 Cboe Japan。其他 PTS 运营商曾进入并退出。

与今日路由格局相关的主要结构性事件:

- **2007 FIEA 第一类 + PTS 授权框架** — 创造现代 PTS 法律基础。
- **SBI Japannext 启动** — 建立日间 + 夜间明盘 PTS。
- **Chi-X Japan / Cboe Japan 继承** — 股票现货 PTS 竞争的第二极。
- **TSE arrowhead 撮合引擎升级** — 缩小主交易所与 PTS 交易场所之间的延迟 / 功能差距。
- **PTS Information Network 于 2025年7月结束** — JSDA 接手公开 PTS 统计汇总。
- **在线券商继续推出零售 SOR 产品** — 让面向客户 UI 中的 PTS 路由对零售客户可见。

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

- Japannext Co., Ltd.，官方网站及 regulations / about 页面。
- JSDA，PTS 交易统计页面和 PTS 股票统计说明 PDF。
- FSA，金融商品交易业者综合监督指引；客户导向业务运营（顧客本位の業務運営）页面。
- JPX，股票统计页面和清算 / 结算概要。

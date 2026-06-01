---
source: japanfg/jsda
source_hash: d93223bddc8804df
lang: zh
status: machine
fidelity: ok
title: "日本证券业协会（JSDA）"
translated_at: 2026-05-31T23:59:49.323Z
---
# 日本证券业协会（JSDA）

## TL;DR

JSDA / 日本证券业协会是日本证券交易商层面的核心自律组织。它不是证券公司，也不是法定监管机构本身。其法律地位是依据《金融商品交易法》（FIEA）由内阁总理大臣认可的金融商品交易业协会，实际职能位于 FSA 监督与会员公司合规之间。[^jsda-profile]

在 JapanFG 映射中，JSDA 是连接 [[JapanFG/smbc-nikko]]、[[JapanFG/nomura-hd]]、[[JapanFG/daiwa-sg]]、[[JapanFG/mizuho-securities]]、[[JapanFG/rakuten-securities]] 等页面背后的横向规则与会员层。与 [[JapanFG/legal-financial-licenses/INDEX]] 结合使用时，适合回答这样的问题：“证券经纪、承销、外务员、客户招揽、场外交易和证券投诉适用什么自律监管制度？”

## 机构地图

| 层级 | 机构 / 参与者 | 实务含义 |
|---|---|---|
| 公共监管机构 | 金融厅（FSA）/ 财务局 | 注册、监督、行政处分、官方持牌经营者名单、监督指针 |
| 成文法 | 《金融商品交易法》（FIEA） | 定义金融商品交易业、注册金融机构、外务员和协会制度 |
| 自律组织 | JSDA | 制定并执行会员自律规则；实施检查、监测、纪律处分、外务员资格 / 注册事务、投诉咨询和调解 |
| 会员公司 | 证券公司、第一种金融商品交易业者、开展证券业务的注册金融机构 | 本 wiki 中的例子包括 [[JapanFG/smbc-nikko]]、[[JapanFG/nomura-hd]]、[[JapanFG/daiwa-sg]]、[[JapanFG/mizuho-securities]]、[[JapanFG/rakuten-securities]] |
| 客户 / 市场层 | 投资者、发行人、PTS / 场外流量、OTC 债券市场 | JSDA 规则和市场基础设施影响招揽、保管、分离管理、交易报告、纠纷处理和市场透明度 |

JSDA 自身英文 profile 将其描述为 SRO 与行业沟通窗口。其使命是通过会员的公正、顺畅证券交易保护投资者，并促进日本金融商品交易业健全发展。[^jsda-profile]

## 法律地位

JSDA 的法律地位并不只是“行业协会”。JSDA 表示，其是依据 FIEA 第 67-2,  条第 2 款，由内阁总理大臣认可的金融商品交易业协会。[^jsda-profile] FSA 的认可金融商品交易业协会官方名单列示了日本证券业协会，并给出法人编号、地址、设立日期、目的和业务内容。[^fsa-authorized]

关键边界：

- **FSA / 财务局注册**决定某实体是否作为金融商品交易业者或注册金融机构登记。
- **JSDA 会员资格与自律监管**决定证券行业行为规则、外务员义务、检查、纪律处分和纠纷处理基础设施在实务中如何适用。
- 即便某公司出现在 FSA 注册名单中，也仍应检查其具体业务类别和加入协会。FSA 的持牌经营者门户是这些名单的 source-of-truth 入口。[^fsa-licensed]

## 自律监管职能

JSDA 的主要自律监管职能范围较广：

1. **规则制定与规则执行** - JSDA 规则覆盖 OTC 股票和债券交易、承销、上市股票场外交易、外国证券交易、安全保管、役员和员工行为、内部管理、广告、投资招揽、客户管理、代理业务、客户资产分离保管、客户纠纷和会计标准等领域。[^jsda-activities]
2. **检查与监测** - JSDA 对会员的内部管理、法令合规、自律规则合规、业务状况和客户资产分离保管实施现场检查和非现场监测。[^jsda-activities]
3. **纪律处分** - 当会员、役员或员工违反法律或 JSDA 规则时，JSDA 执行自律性的纪律处分。[^jsda-activities]
4. **外务员资格与注册** - JSDA 实施资格考试和更新培训，并承担由金融厅长官委托的证券外务员注册事务。[^jsda-activities] FSA 的指定法人材料说明了将外务员注册事务委托给协会的 FIEA 依据。[^fsa-salesrep]
5. **投诉咨询与调解** - JSDA 为涉及会员与客户的证券交易纠纷提供客户投诉咨询和调解服务。[^jsda-activities]
6. **市场基础设施与信息发布** - JSDA 发布 OTC 债券参考数据，汇总会员报告的场外交易数据，并发布与私设交易系统（PTS）相关的信息。[^jsda-activities]

监督连接很重要：FSA 的第一种金融商品交易业监督指针，在说明市场中介业务、不公正交易防止、客户交易监测以及 J-IRISS 等内部者登记流程的监督视角时，明确引用 JSDA 自律规则。[^fsa-guideline]

## JapanFG 相关性

JSDA 是 JapanFG 的枢纽节点，因为它把证券公司商业模式与法律、合规、市场实践连接起来。

| JapanFG 问题 | JSDA 为何重要 |
|---|---|
| 该实体是证券公司，还是开展证券业务的银行？ | JSDA 对第一种金融商品交易业者设有 Regular Members，对开展证券业务的注册金融机构设有 Special Members。[^jsda-members] |
| 大型 broker-dealer 如何落实投资者保护？ | JSDA 规则和检查支撑招揽、客户管理、保管、分离管理、广告、内部管理和外务员控制。 |
| 银行旗下证券子公司为什么与银行行为不同？ | [[JapanFG/smbc-nikko]]、[[JapanFG/mizuho-securities]] 等证券子公司和集团同业处于 FIEA / JSDA 轨道，而不仅是银行监督轨道。 |
| “持牌”与“自律监管”的区别是什么？ | FSA 注册是公共牌照 / 注册层；JSDA 会员资格和自律监管是行为与市场基础设施层。 |
| 证券页面应如何引用合规制度？ | 公司页面可链接 [[JapanFG/legal-financial-licenses/INDEX]] 作为牌照栈，并链接本页作为 JSDA 自律监管职能说明。 |

截至 JSDA 的 7,  月 2026 会员名单页面，JSDA 报告有 259 Regular Members、14 Specified Business Members 和 198 Special Members。[^jsda-members] 该数量可用于理解市场规模，但在提出当前定量主张时应刷新确认。

## 边界案例

- **JSDA vs FSA**：JSDA 是经认可的自律协会，不是 FSA。行政许可和公共执法仍属于公共监管机构职能。
- **证券公司 vs 注册金融机构**：银行可以是注册金融机构，并作为 JSDA Special Member 开展证券业务；开展第一种业务的证券公司通常位于 Regular Member 轨道。[^jsda-members]
- **JSDA vs 交易所自律监管**：JSDA 覆盖交易商 / 会员行为以及 OTC / 场外领域。交易所上市、交易和交易所市场自律监管还可能涉及交易所或交易所集团规则。
- **JSDA vs 加密资产自律监管**：加密资产交易所和加密衍生品问题通常先进入 FSA 注册与加密自律监管轨道；除非该产品在法律上属于 FIEA 下的证券 / 衍生品业务，否则不优先走 JSDA。
- **会员数量 vs 实际产品范围**：JSDA 会员资格不能证明某公司当前提供某个特定产品。产品范围需在公司披露和 FSA 注册类别中确认。
- **注册名单时滞**：FSA 名单页面是官方来源，但可能有基准日和更新周期。应将已核对注册表述为“截至 X，在已检查名单中找到”，而非永久状态。

## Related

- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/rakuten-securities]]
- [[INDEX|FinWiki index]]

## Sources

[^jsda-profile]: JSDA, "Profile", https://www.jsda.or.jp/en/about/profile/index.html
[^jsda-activities]: JSDA, "Major Activities", https://www.jsda.or.jp/en/about/major-activities/index.html
[^jsda-members]: JSDA, "Members List", https://www.jsda.or.jp/en/about/members-list/index.html
[^fsa-authorized]: FSA, "认可金融商品交易业协会一览", https://www.fsa.go.jp/koueki/koueki10a.html
[^fsa-salesrep]: FSA, "基于金融商品交易法的外务员注册及注销" PDF, https://www.fsa.go.jp/koueki/s_houjin/05.pdf
[^fsa-licensed]: FSA, "取得免许、许可、注册等的事业者一览", https://www.fsa.go.jp/menkyo/menkyo.html
[^fsa-guideline]: FSA, "面向金融商品交易业者等的综合监督指针 IV", https://www.fsa.go.jp/common/law/guide/kinyushohin/04a.html

---

> [!info] 校核状态
> confidence: **likely**。核心法律地位和职能由 JSDA 官方页面与 FSA 官方页面支撑，检查基准为 2026-05-19。在交易特定或执法特定分析中使用当前公司层面的会员 / 注册细节时，应从 JSDA 会员名单和 FSA 注册文件刷新确认。

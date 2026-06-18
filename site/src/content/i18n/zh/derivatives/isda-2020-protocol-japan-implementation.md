---
source: derivatives/isda-2020-protocol-japan-implementation
source_hash: 364d17fdaaa6aa2b
lang: zh
status: machine
fidelity: ok
title: "ISDA 2020 IBOR 回退协议 — 日本实施（TIBOR / TONA / 日元 LIBOR）"
translated_at: 2026-06-18T23:33:48.300Z
---

# ISDA 2020 IBOR 回退协议 — 日本实施（TIBOR / TONA / 日元 LIBOR）

## TL;DR

**ISDA 2020 IBOR 回退协议**（正式名称为「ISDA 2020 IBOR Fallbacks Protocol」，于 2020,  年 10 月公布，自 2021 年 25  月 1 日起生效）是一种多边合约机制，**参照 IBOR 的存量衍生品 —— 包括日元 LIBOR —— 通过该机制在无需双边谈判的情况下被自动修订，以纳入无风险利率（RFR）回退条款**。对日本而言，该协议的核心影响是 **2021 年 31  月的日元 LIBOR 停发**（合成日元 LIBOR 的分阶段淘汰于 2023 年底前完成）—— 已加入当事方的双边日元 LIBOR 衍生品在停发日自动转换为 **TONA 后定复利 + 固定的信用调整利差（CAS）**。日本市场的加入率很高 —— 大型银行（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）、[[securities-firms/nomura-hd|Nomura]]、寿险公司及主要买方机构均已加入，仅来自日本的加入当事方总数即 >500 。该协议**不会**自动转换 TIBOR（TIBOR 在 2024 年 12 月欧洲日元 TIBOR / Z-TIBOR 停办后，仍由 [[financial-regulators/jsda|JSDA]] 关联的 JBATA 继续运营）—— 需要回退至 TONA 的 TIBOR 合约需要单独修订。**JSDA 主导的 2024  年文件更新** 对日本市场标准衍生品文件模板进行了现代化改造，以反映后 LIBOR 惯例、TONA-RFR 条款及残存的 TIBOR 回退架构。对 FinWiki 而言，本词条涵盖协议机制、日元特定的回退利率（CAS、观测平移）、日本市场的加入模式、后 LIBOR 的日元停发时间线，以及 JSDA 2024  年文件更新。

## Wiki route

本词条作为 **ISDA 回退协议日本实施** 节点位于 [[derivatives/INDEX|derivatives index]] 之下。请与 [[derivatives/japan-irs-market|Japan yen interest-rate swap market]]（基础 IRS 背景）、[[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]（后 LIBOR 的 RFR 架构）、[[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]（已清算衍生品侧的实施）、[[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]（跨货币回退叠加）一并阅读。系统锚点：[[money-market/INDEX|money-market index]]（BoJ 运营的 TONA 现金市场机制）。监管锚点：[[banking/INDEX|banking index]]（FSA / BoJ 监管背景）。

## 1. ISDA 2020  协议 — 它是什么

| 要素 | 详情 |
|---|---|
| 公布者 | 国际掉期与衍生工具协会（ISDA） |
| 公布日期 | 2020  年 23  月 |
| 生效日期 | 2021  年 25  月 |
| 修订对象 | ISDA 主协议及某些其他 ISDA 文件 |
| 类型 | 多边加入（各当事方加入一次；所有被涵盖的双边关系自动修订） |
| 被涵盖交易的范围 | 2021  年 25  月之后的新交易（通过 2021 IBOR Fallbacks Supplement 纳入）；与已加入交易对手的存量交易（通过协议加入而修订） |
| 成本 | 加入无需费用 |
| 加入机制 | 经由 ISDA 门户在线办理；每个法人实体一次性提交 |

该协议是针对双边谈判问题的 **多边解药** —— 没有它，每个市场参与者都将不得不在 LIBOR 停发前双边修订每一份参照 IBOR 的衍生品，这在行业规模上是无法操作的。

## 2. 回退利率架构

当被涵盖的 IBOR（美元 LIBOR、欧元 LIBOR、英镑 LIBOR、日元 LIBOR、瑞郎 LIBOR、日元 TIBOR 等）经历指定的「触发事件」（通常为运营者的停发公告）时，该协议提供：

| 构成要素 | 说明 |
|---|---|
| 替代利率 | 货币特定的 RFR（日元为 TONA，美元为 SOFR，欧元为 ESTR，英镑为 SONIA，瑞郎为 SARON） |
| 复利计算方法 | 在同一期限期内的后定复利观测 |
| 观测平移 | 2 个营业日的后向观测平移（即观测期在支付期开始前 2  天开始） |
| 信用调整利差（CAS） | 加到 RFR 上的固定利差（按期限），以补偿 IBOR 的信用-银行资金成本溢价 |
| 回退的生效日期 | IBOR 停发日（例如日元 LIBOR 为 2022  年 1  月，因为 2021  年 31  月是最后一次 LIBOR 设定） |

CAS 是 **经济等价性调整** —— 由于 RFR 是无风险的，而 IBOR 包含信用溢价，CAS 近似于历史上 IBOR-RFR 中位数利差。

## 3. 日元 LIBOR 回退细节

| 日元 LIBOR 期限 | 替代 | CAS（bp，于 LIBOR 停发公告日固定） |
|---|---|---|
| 隔夜 | TONA | 约 -1.8 bp（小幅负值 —— 隔夜 LIBOR 低于 TONA） |
| 1 周 | 复利 TONA（1 周，2 天观测平移） | 约 -1.5 bp |
| 1 个月 | 复利 TONA（1 个月，2 天观测平移） | 约 -0.2 bp |
| 2 个月 | 复利 TONA | 中位数利差 |
| 3 个月 | 复利 TONA（3 个月，2 天观测平移） | 约 +0.8 bp（正值 —— 3 个月 LIBOR 含信用溢价） |
| 6 个月 | 复利 TONA | 约 +5.8 bp |
| 12 个月 | 复利 TONA | 约 +16.6 bp |

（这些 CAS 值在停发公告日 **永久固定** —— 此后不再变化。它们反映的是 UK FCA 作出停发公告时，即 2021  年 3 月时的 5 年中位数所观测到的日元 LIBOR – RFR 利差。）

对于经由该协议转换的存量日元 LIBOR 衍生品，停发后的浮动端支付 **在等同期间内的 TONA 复利 + 期限特定的 CAS**。其经济意图是使转换后的衍生品在长期平均意义上表现得如同原始的 IBOR 衍生品。

## 4. 日元 LIBOR 停发时间线 — 操作性事件

| 日期 | 事件 |
|---|---|
| 2021  年 5  月 | UK FCA 确认日元 LIBOR（及其他 LIBOR）的停发日期；CAS 利差永久固定 |
| 2020  年 23  月 | ISDA 2020 IBOR Fallbacks Protocol 公布 |
| 2021  年 25  月 | 协议生效日；加入开始 |
| 贯穿 2021  年 | 日本机构加入；新的日元衍生品业务转向 TONA |
| 2021  年 31  月 | 日元 LIBOR（1W、1M、2M、3M、6M、12M）在代表性基础上停止 |
| 2022  年 1  月 | 加入当事方的存量日元 LIBOR 衍生品自动转换为 TONA + CAS |
| 贯穿 2022  年 | 合成日元 LIBOR（仅 1M、3M、6M）由 UK FCA 运营，作为存量合约的过渡桥梁 |
| 2023  年 30  月 | 合成日元 LIBOR 停止 |
| 2023  年底 | 所有参照日元 LIBOR 的衍生品迁移至 TONA 或等价的 RFR |

## 5. TIBOR — 存活下来的日元利率

与 LIBOR 不同，**TIBOR（东京银行间同业拆借利率）** 在 LIBOR 停发后得以延续：

| TIBOR 类型 | 状态 | 运营者 |
|---|---|---|
| **D-TIBOR（境内 TIBOR）** | 活跃 | JBATA（全国银行协会 TIBOR 运营机构） |
| **Z-TIBOR（欧洲日元 TIBOR）** | 2024  年 12 月停办 | 此前由 JBATA 运营；停办反映了使用度下降与整合 |
| **日元 LIBOR** | 2021  年底停止（合成分阶段淘汰 2023 年） | 此前由 ICE Benchmark Administration 运营 |

D-TIBOR 继续用于：
- 贷款方希望使用前瞻型期限利率（而非后向的复利 RFR）的期限固定日元贷款
- 参照 TIBOR 而非 LIBOR 的部分存量 IRS
- 需要期限利率参照的新结构化产品

D-TIBOR **未像 LIBOR 那样被纳入 ISDA 2020  协议** —— 它没有被列入停发计划，因此参照 D-TIBOR 的衍生品继续照旧使用。若 D-TIBOR 将来被停办，则需要单独的回退架构（且 JSDA 一直在为该情景准备标准回退条款；参见第 7 节）。

## 6. 日本市场的加入情况

对 ISDA 2020  协议的加入在日本 **非常高**，反映了操作上的必要性：

| 加入类别 | 加入模式 |
|---|---|
| 大型银行（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]） | 全部在停发前加入 |
| 证券公司（[[securities-firms/nomura-hd|Nomura]]、Daiwa、[[securities-firms/mufg-securities|MUFG MS]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]） | 全部加入 |
| 寿险公司（日本生命、第一生命、住友生命 等） | 实质上全部加入 |
| 地方银行 | 主要地方银行加入；部分较小的地方银行耗时更长 |
| 买方机构 | 养老基金、资产管理公司 —— 广泛加入 |
| 事业公司（非金融） | 持有衍生品账册的大型企业加入；许多没有 LIBOR 衍生品敞口的中小企业无需加入 |
| 在日外国银行 | 加入（经由母公司或本地实体） |

日本加入法人实体的合计：500+（在全球约 16,000  家加入实体之中）。FSA 积极监控受监管实体的加入情况，并支持全行业采用。

对于未加入的交易对手，需要进行 **双边修订**。绝大部分双边日元 LIBOR 敞口在 2021 年底前已通过协议或双边方式被涵盖。

## 7. JSDA 2024  年文件更新

2024,  年，[[financial-regulators/jsda|JSDA]]（日本证券业协会）主导了对日本市场标准衍生品文件模板的全面更新：

| 要素 | 2024  年更新前 | 2024  年更新后 |
|---|---|---|
| 浮动利率定义 | 常参照日元 LIBOR + TIBOR 替代项 | 以 TONA 复利为主；为需要期限利率的产品保留 TIBOR 条款 |
| 回退架构 | LIBOR 停发条款是临时性的（在 2018–2019  年的补充文件中加入） | 与 ISDA 2020  协议一致的标准化 TONA 回退条款；TIBOR 回退条款已标准化 |
| 计息天数与观测平移 | 惯例混杂 | 标准化：日元采用 ACT/365 ，TONA 复利采用 2 个营业日观测平移 |
| 文件语言 | 英语 / 日语混杂 | 标准化的日语 + 英语双语版本 |
| 跨产品一致性 | IRS、掉期期权、结构化产品采用不同模板 | 带有产品特定附表的统一模板 |
| 交易对手层级 | 为跨境交易预先定义 | 更新以反映后 LIBOR 的市场结构 |

2024  年更新反映了 **LIBOR 转换的操作性教训** —— 拥有单一标准化模板可减少双边谈判摩擦并加速新产品推出。它也使日本市场为任何未来的 TIBOR 相关转换需求做好定位。

## 8. 跨货币衍生品 — 叠加

对于一端为日元（TIBOR 或 LIBOR）、另一端为美元（LIBOR / SOFR）或欧元（LIBOR / ESTR）的跨货币掉期，该协议 **按端** 适用：

| 跨货币配置 | 2022  年回退前 | 2022  年后（后 LIBOR 停发） |
|---|---|---|
| 日元 LIBOR vs 美元 LIBOR 跨货币掉期 | 两端均经由协议转换 | 日元端 → TONA + CAS；美元端 → SOFR + CAS |
| 日元 TIBOR vs 美元 LIBOR 跨货币掉期 | 仅美元端转换（TIBOR 不受影响） | TIBOR 端不变；美元端 → SOFR + CAS |
| 日元 TIBOR vs 美元 SOFR 跨货币掉期 | 无回退问题 | 无变化 |

转换后的基差掉期机制参见 [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]。

## 9. 已清算衍生品侧 — JSCC 与 CCP 的实施

日本清算所（[[financial-regulators/jsda|JSCC]] = 日本证券清算机构；以及全球范围的 LCH SwapClear、CME）在已清算的日元 LIBOR 衍生品上实施了回退架构：

| 步骤 | 说明 |
|---|---|
| 1. CCP 规则手册修订 | CCP 更新规则手册，规定存量日元 LIBOR 已清算衍生品将在停发时转换为 TONA + CAS |
| 2. 停发前转换 | 部分 CCP（如 LCH SwapClear）通过强制性的基于规则的转换在停发前转换存量头寸 |
| 3. 头寸再平衡 | 成员之间就转换的任何价值影响进行补偿支付 |
| 4. 风险管理调整 | 更新初始保证金与变动保证金的校准 |

JSCC 的已清算衍生品账册在日元 LIBOR 方面相对较小（日元 LIBOR 衍生品更多在美 / 欧清算）；转换在操作上很顺畅。

## 10. 反论

- **「协议过度设计」** —— 批评者指出加入成本与操作复杂性；辩护者指出在行业规模上对数百万份合约进行双边修订是不可能的
- **「CAS 过度或不足补偿」** —— 固定 CAS 是 5 年中位数快照；若前瞻的 IBOR-RFR 利差与历史中位数大幅背离，转换会产生价值转移。实际上日元 CAS 值很小（大多 < 20 bp），限制了价值转移的担忧
- **「TIBOR 也应迁移至 TONA」** —— 一些业界声音主张维持两个参照利率（TONA + TIBOR）效率低下；辩护者主张期限利率使用者（尤其是企业贷款方）仍需要前瞻型期限利率
- **「JSDA 文件更新太迟」** —— 出现于 2024  年（LIBOR 停发的 3  年后），该更新由积累的教训而非紧迫性所驱动；批评是它本可以更早
- **「合成 LIBOR 让所有人困惑」** —— 2022–2023  年的合成日元 LIBOR 阶段很复杂；市场参与者与评级机构不得不应对一种混合状态
- **「未加入的较小交易对手制造了尾部风险」** —— 部分较小的地方银行与事业公司未及时加入；对这些敞口的双边清理耗费了 2022

 年的大部分时间

## 11. 悬而未决的问题

- 鉴于全球采用 RFR 的趋势，[[financial-regulators/jbatibor|JBATA D-TIBOR]] 是否能长期存活（当前 FSA 立场：若使用持续，D-TIBOR 继续）
- 日元的期限 RFR（例如由指定运营者公布的前瞻型 TONA 期限利率）是否会被开发并被期限固定用途所接受
- 下一次重大回退事件（例如 CCP 规则手册变更或监管性利率退役）是否会通过类似的多边机制处理
- 跨境一致性的作用 —— 若 JSDA / FSA 推动更强的日元文件标准化，它将如何与 ISDA 全球模板相互作用
- 2024  年文件更新是否会为新产品类型（气候挂钩衍生品、与非金融基准挂钩的结构化产品）减少操作摩擦

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market|Japan yen IRS market]]
- [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]
- [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]
- [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]
- [[derivatives/yen-basis-swap-market|yen basis swap market]]
- [[derivatives/japan-interest-rate-derivatives-overview|Japan interest-rate derivatives overview]]
- [[derivatives/japan-rates-derivative-product-matrix|Japan rates derivative product matrix]]
- [[derivatives/japan-cms-constant-maturity-swap|Japan CMS constant maturity swap]]
- [[derivatives/japan-swaption-market|Japan swaption market]]
- [[derivatives/swap-execution-facility-japan|swap execution facility Japan]]
- [[money-market/INDEX|money-market index]]
- [[banking/INDEX|banking index]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[securities-firms/nomura-hd|Nomura]] · [[financial-regulators/jsda|JSDA]]
- [[securities-firms/mufg-securities|MUFG MS]] · [[securities-firms/smbc-nikko|SMBC Nikko]] · [[securities-firms/mizuho-securities|Mizuho Securities]]
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Dept]]

## Sources

- ISDA 2020 IBOR Fallbacks Protocol — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/
- ISDA — https://www.isda.org/
- JSDA TIBOR / IBOR 转换资料 — https://www.jsda.or.jp/en/
- FSA IBOR 转换资料 — https://www.fsa.go.jp/en/
- 日元利率基准跨业委员会（BOJ） — https://www.boj.or.jp/en/
- JBATA TIBOR Administration — https://www.jbatibor.or.jp/english/
- UK FCA LIBOR 停发公告（2021 年 5  月） — https://www.fca.org.uk/
- JSCC — https://www.jscc.co.jp/en/

---

> [!info] 校核状態
> confidence: **likely**。ISDA 2020  协议机制、日元 LIBOR CAS 值（于 2021 年 5  月由 Bloomberg index methodology 公开固定）、日元 LIBOR 停发时间线，以及日本市场的加入模式均有公开文献记载。2024  年的 JSDA 文件更新为业界所知。具体加入数量（500+ 家日本实体）是基于公开的 ISDA 加入当事方名单快照的近似值。Z-TIBOR 2024  年 12 月停办反映了 JBATA 公布的时间线。

---
source: derivatives/isda-2020-protocol-japan-implementation
source_hash: 5f6805e07b1bfd59
lang: zh
status: machine
fidelity: ok
title: "ISDA 2020 IBOR 回退协议——日本实施（TIBOR / TONA / 日元 LIBOR）"
translated_at: 2026-05-31T03:19:56.389Z
---

# ISDA 2020 IBOR 回退协议——日本实施（TIBOR / TONA / 日元 LIBOR）

## TL;DR

**ISDA 2020 IBOR 回退协议**（正式名称"ISDA 2020 IBOR Fallbacks Protocol"，于 2020,  年 10 月发布，自 2021 年 25  月 1 日起生效）是一种多边合同机制，通过它，**引用 IBOR 的存量衍生品——包括日元 LIBOR——被自动修订以纳入无风险利率（RFR）回退条款**，无需双边谈判。对日本而言，该协议的核心影响是 **2021 年 31  月 12 月日元 LIBOR 停用**（合成日元 LIBOR 至 2023 年底完成淘汰）——遵守方的双边日元 LIBOR 衍生品在停用日自动转换为 **后置复利 TONA 加固定信用调整利差（CAS）**。日本市场遵守度高——大型银行（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）、[[securities-firms/nomura-hd|Nomura]]、寿险公司及主要买方机构均已遵守，仅日本一地遵守方就超过 500  家。该协议**不**自动转换 TIBOR（在 2024 年 12 月欧洲日元 TIBOR / Z-TIBOR 停用后，TIBOR 继续由 [[financial-regulators/jsda|JSDA]] 关联的 JBATA 管理）——需要回退至 TONA 的 TIBOR 合同需单独修订。**由 JSDA 主导的 2024  文件更新**对日本市场标准衍生品文件模板进行了现代化改造，以反映后 LIBOR 惯例、TONA-RFR 条款及残余的 TIBOR 回退架构。对 FinWiki 而言，本条目涵盖协议机制、日元特定回退利率（CAS、观测移位）、日本市场遵守模式、后 LIBOR 日元停用时间线以及 JSDA 2024  文件更新。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the **ISDA fallback protocol Japan implementation** node. Read against [[derivatives/japan-irs-market|Japan yen interest-rate swap market]] for the underlying IRS context, [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]] for the post-LIBOR RFR architecture, [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]] for the cleared-derivative-side implementation, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the cross-currency fallback overlay. System anchor: [[money-market/INDEX|money-market index]] for the BoJ-administered TONA cash market mechanism. Regulatory anchor: [[banking/INDEX|banking index]] for FSA / BoJ supervisory context.

## 1. ISDA 2020  协议——它是什么

| 要素 | 详情 |
|---|---|
| 发布方 | 国际掉期与衍生工具协会（ISDA） |
| 发布日期 | 2020  年 23  月 10 月 |
| 生效日期 | 2021  年 25  月 1 月 |
| 修订对象 | ISDA 主协议及某些其他 ISDA 文件 |
| 类型 | 多边遵守（各方遵守一次；所有双边受涵盖关系自动修订） |
| 受涵盖交易范围 | 2021  年 25  月 1 月之后的新交易（经由 2021 IBOR Fallbacks Supplement 纳入）；与遵守方的存量交易（经由协议遵守修订） |
| 成本 | 遵守无费用 |
| 遵守机制 | 经由 ISDA 门户在线进行；每个法人实体一次性提交 |

该协议是双边谈判难题的**多边解药**——若无它，每个市场参与者都必须在 LIBOR 停用前双边修订每一份引用 IBOR 的衍生品，这在行业规模上是操作上不可能的。

## 2. 回退利率架构

当某一受涵盖 IBOR（美元 LIBOR、欧元 LIBOR、英镑 LIBOR、日元 LIBOR、瑞郎 LIBOR、日元 TIBOR 等）经历指定的"触发事件"（通常是管理方的停用公告）时，该协议提供：

| 组成 | 说明 |
|---|---|
| 替代利率 | 货币特定的 RFR（日元用 TONA、美元用 SOFR、欧元用 ESTR、英镑用 SONIA、瑞郎用 SARON） |
| 复利方法 | 同一期限期内后置复利观测 |
| 观测移位 | 2 个营业日的向后观测移位（即观测期在支付期开始前 2  天开始） |
| 信用调整利差（CAS） | 一个固定利差（按期限），加到 RFR 上以补偿 IBOR 的银行信用融资溢价 |
| 回退生效日 | IBOR 停用日（例如日元 LIBOR 为 2022  年 1  月 1 月，因为 2021  年 31  月 12 月是最后一次 LIBOR 定值） |

CAS 是**经济等价调整**——由于 RFR 是无风险的而 IBOR 包含信用溢价，CAS 近似于历史 IBOR-RFR 中位数利差。

## 3. 日元 LIBOR 回退细节

| 日元 LIBOR 期限 | 替代 | CAS（基点，在 LIBOR 停用公告日固定） |
|---|---|---|
| 隔夜 | TONA | 约 -1.8  基点（小负值——隔夜 LIBOR 低于 TONA） |
| 1 周 | 复利 TONA（1 周，2 天观测移位） | 约 -1.5  基点 |
| 1 个月 | 复利 TONA（1 个月，2 天观测移位） | 约 -0.2  基点 |
| 2 个月 | 复利 TONA | 中位数利差 |
| 3 个月 | 复利 TONA（3 个月，2 天观测移位） | 约 +0.8  基点（正值——3 个月 LIBOR 带有信用溢价） |
| 6 个月 | 复利 TONA | 约 +5.8  基点 |
| 12 个月 | 复利 TONA | 约 +16.6  基点 |

（这些 CAS 值在停用公告日**永久固定**——此后不再改变。它们反映了英国 FCA 作出停用公告时（2021  年 3 月）所观测的 5 年期日元 LIBOR – RFR 中位数利差。）

对于经由协议转换的存量日元 LIBOR 衍生品，停用后浮动端支付**在等价期间复利的 TONA + 期限特定 CAS**。其经济意图是让转换后的衍生品随时间平均而言表现得像原始 IBOR 衍生品。

## 4. 日元 LIBOR 停用时间线——操作性事件

| 日期 | 事件 |
|---|---|
| 2021  年 5  月 3 月 | 英国 FCA 确认日元 LIBOR（及其他 LIBOR）的停用日期；CAS 利差永久固定 |
| 2020  年 23  月 10 月 | ISDA 2020 IBOR Fallbacks Protocol 发布 |
| 2021  年 25  月 1 月 | 协议生效日；遵守开始 |
| 整个 2021  年 | 日本机构遵守；新的日元衍生品业务转向 TONA |
| 2021  年 31  月 12 月 | 日元 LIBOR（1 周、1 个月、2 个月、3 个月、6 个月、12 个月）在代表性基础上停用 |
| 2022  年 1  月 1 月 | 遵守方的存量日元 LIBOR 衍生品自动转换为 TONA + CAS |
| 整个 2022  年 | 合成日元 LIBOR（仅 1 个月、3 个月、6 个月）由英国 FCA 管理，作为存量合同的过渡桥梁 |
| 2023  年 30  月 6 月 | 合成日元 LIBOR 停用 |
| 2023  年底 | 所有引用日元 LIBOR 的衍生品迁移至 TONA 或等价 RFR |

## 5. TIBOR——幸存下来的日元利率

与 LIBOR 不同，**TIBOR（东京银行间同业拆借利率）**在 LIBOR 停用后继续存在：

| TIBOR 类型 | 状态 | 管理方 |
|---|---|---|
| **D-TIBOR（境内 TIBOR）** | 活跃 | JBATA（日本银行协会 TIBOR 管理机构） |
| **Z-TIBOR（欧洲日元 TIBOR）** | 于 2024  年 12 月停用 | 此前为 JBATA；停用反映了使用度下降与整合 |
| **日元 LIBOR** | 于 2021  年底停用（合成淘汰 2023） | 此前由 ICE Benchmark Administration 管理 |

D-TIBOR 继续用于：
- 出借方需要前瞻性期限利率（而非后顾性复利 RFR）的定期固定日元贷款
- 一些引用 TIBOR 而非 LIBOR 的存量 IRS
- 需要期限利率引用的新结构性产品

D-TIBOR 不像 LIBOR 那样**受 ISDA 2020  协议涵盖**——它没有被列入停用计划，因此引用 D-TIBOR 的衍生品继续照用。若 D-TIBOR 未来停用，将需要单独的回退架构（JSDA 一直在为该情形准备标准回退条款；见 7 节）。

## 6. 日本市场遵守情况

日本对 ISDA 2020  协议的遵守度**非常高**，反映了操作上的必要性：

| 遵守类别 | 遵守模式 |
|---|---|
| 大型银行（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]） | 全部在停用前遵守 |
| 证券公司（[[securities-firms/nomura-hd|Nomura]]、Daiwa、[[securities-firms/mufg-securities|MUFG MS]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]） | 全部遵守 |
| 寿险公司（日本生命、第一生命、住友生命等） | 基本全部遵守 |
| 地区银行 | 主要地区银行已遵守；一些较小地区银行耗时更久 |
| 买方机构 | 养老基金、资产管理人——广泛遵守 |
| 企业（非金融） | 持有衍生品账册的较大企业已遵守；许多无 LIBOR 衍生品敞口的较小企业无需遵守 |
| 在日外资银行 | 已遵守（经由母公司或本地实体） |

日本遵守法人实体总数：500 家以上（占约 16,000  家全球遵守实体）。FSA 积极监测受监管实体的遵守情况，并支持全行业采纳。

对于非遵守对手方，需要**双边修订**。绝大多数双边日元 LIBOR 敞口至 2021 年底已由协议或双边覆盖。

## 7. JSDA 2024  文件更新

2024,  年，[[financial-regulators/jsda|JSDA]]（日本证券业协会）主导了对日本市场标准衍生品文件模板的全面更新：

| 要素 | 2024  前 | 2024  更新后 |
|---|---|---|
| 浮动利率定义 | 常引用日元 LIBOR + TIBOR 备选 | 以复利 TONA 为主；为需要期限利率的产品保留 TIBOR 条款 |
| 回退架构 | LIBOR 停用条款为临时性（于 2018–2019  补充文件中加入） | 标准化的 TONA 回退条款，与 ISDA 2020  协议一致；TIBOR 回退条款标准化 |
| 计息基准与观测移位 | 惯例混杂 | 标准化：日元用 ACT/365 ，复利 TONA 用 2 个营业日观测移位 |
| 文件语言 | 英文 / 日文混杂 | 标准化的日文 + 英文双语版本 |
| 跨产品一致性 | IRS、掉期期权、结构性产品采用不同模板 | 统一模板配以产品特定附表 |
| 对手方层级 | 为跨境交易预先定义 | 更新以反映后 LIBOR 市场结构 |

2024  更新反映了 **LIBOR 过渡的操作性经验**——拥有单一标准化模板可减少双边谈判摩擦并加速新产品发布。它还使日本市场为任何未来 TIBOR 相关过渡需求做好定位。

## 8. 跨货币衍生品——叠加层

对于一端为日元（TIBOR 或 LIBOR）、另一端为美元（LIBOR / SOFR）或欧元（LIBOR / ESTR）的跨货币掉期，协议**按端**适用：

| 跨货币配置 | 2022  回退前 | 2022  后（后 LIBOR 停用） |
|---|---|---|
| 日元 LIBOR 对美元 LIBOR 跨货币掉期 | 两端均经由协议转换 | 日元端 → TONA + CAS；美元端 → SOFR + CAS |
| 日元 TIBOR 对美元 LIBOR 跨货币掉期 | 仅美元端转换（TIBOR 不受影响） | TIBOR 端不变；美元端 → SOFR + CAS |
| 日元 TIBOR 对美元 SOFR 跨货币掉期 | 无回退问题 | 无变化 |

转换后的基差掉期机制见 [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]。

## 9. 已清算衍生品侧——JSCC 与 CCP 实施

日本清算所（[[financial-regulators/jsda|JSCC]] = 日本证券清算公司；以及全球的 LCH SwapClear、CME）在已清算的日元 LIBOR 衍生品上实施了回退架构：

| 步骤 | 说明 |
|---|---|
| 1. CCP 规则手册修订 | CCP 更新规则手册，规定存量日元 LIBOR 已清算衍生品在停用时转换为 TONA + CAS |
| 2. 停用前转换 | 一些 CCP（如 LCH SwapClear）经由强制性基于规则的转换在停用前转换存量头寸 |
| 3. 头寸再平衡 | 成员之间就转换的任何价值影响支付补偿款 |
| 4. 风险管理调整 | 更新初始保证金与变动保证金校准 |

JSCC 的已清算衍生品账册对日元 LIBOR 而言相对较小（日元 LIBOR 衍生品更多在美国 / 欧盟清算）；转换在操作上顺畅。

## 10. 反论点

- **"协议过度工程化"**——批评者指出遵守成本与操作复杂性；辩护者指出双边修订数百万份合同在行业规模上不可能
- **"CAS 过度或不足补偿"**——固定 CAS 是 5 年中位数快照；若远期 IBOR-RFR 利差与历史中位数实质性背离，转换会造成价值转移。实践中，日元 CAS 值很小（大多 < 20  基点），限制了价值转移之忧
- **"TIBOR 也应迁至 TONA"**——一些行业声音认为维持两个参考利率（TONA + TIBOR）效率低下；辩护者认为期限利率使用者（尤其企业出借方）仍需要前瞻性期限利率
- **"JSDA 文件更新太迟"**——更新出现于 2024  年（LIBOR 停用 3  年后），由积累的经验而非紧迫性驱动；批评在于它本可更早
- **"合成 LIBOR 让所有人困惑"**——2022–2023  合成日元 LIBOR 阶段较复杂；市场参与者与评级机构不得不应对一种混合状态
- **"未遵守的较小对手方制造了尾部风险"**——一些较小地区银行与企业未及时遵守；这些敞口的双边清理耗费了 2022

 年的大部分时间

## 11. 开放问题

- 鉴于全球转向采纳 RFR 的趋势，[[financial-regulators/jbatibor|JBATA D-TIBOR]] 能否长期存续（当前 FSA 立场：若使用度持续，D-TIBOR 继续存在）
- 日元的期限 RFR（例如由指定管理方发布的前瞻性 TONA 期限利率）是否会被开发并被定期固定应用所接受
- 下一个重大回退事件（例如 CCP 规则手册变更或监管利率退役）是否经由类似多边机制处理
- 跨境一致性的作用——若 JSDA / FSA 推动更强的日元文件标准化，它如何与 ISDA 全球模板交互
- 2024  文件更新是否减少了新产品类型（气候挂钩衍生品、与非金融基准挂钩的结构性产品）的操作摩擦

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
- JSDA TIBOR / IBOR transition materials — https://www.jsda.or.jp/en/
- FSA IBOR transition materials — https://www.fsa.go.jp/en/
- BOJ Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks — https://www.boj.or.jp/en/
- JBATA TIBOR Administration — https://www.jbatibor.or.jp/english/
- UK FCA LIBOR cessation announcement (5 March 2021) — https://www.fca.org.uk/
- JSCC — https://www.jscc.co.jp/en/

---

> [!info] 校核状態
> confidence: **likely**。ISDA 2020  协议机制、日元 LIBOR CAS 值（由 Bloomberg 指数方法论于 2021 年 5  月 3 月公开固定）、日元 LIBOR 停用时间线及日本市场遵守模式均有公开记录。2024  JSDA 文件更新为业界所知。具体遵守数（500 家以上日本实体）基于公开 ISDA 遵守方名单快照的近似值。Z-TIBOR 于 2024  年 12 月停用，反映了 JBATA 公布的时间线。

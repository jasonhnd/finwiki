---
source: non-profit/japan-koeki-houjin-accounting-standard
source_hash: 095665cc4697bfef
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本 公益法人会計基準 — 面向公益法人的会计准则"
translated_at: 2026-06-05T00:00:00.000Z
---

# 日本 公益法人会計基準 — 面向公益法人的会计准则

## Wiki 路径

本条目位于 [[non-profit/INDEX|non-profit INDEX]] 之下，作为法律形态之下的 **会计 / 披露层** —— 它是 公益財団 / 公益社団 实际申报的内容，因此是 [[non-profit/japan-koeki-vs-general-zaidan-comparison|公益財団 vs 一般財団 vs 一般社団 vs NPO法人 comparison]]（哪些形态须报告）与 [[non-profit/japan-general-foundation-establishment-requirements|Japan 一般財団法人 establishment requirements]]（由谁审计）的自然伴侣。外部审计角度联系到 [[financial-regulators/cpaaob|the CPAAOB]]（监督审计大型 公益法人 的 CPA 行业的机关）；关于监督地图见 [[financial-regulators/INDEX|financial-regulators INDEX]]。

## TL;DR

**公益法人会計基準** 是面向公益法人的 **带基金会计风味的** 财务报告准则，在 公益認定法 框架内维护（当前基线：**平成20年 (2008) 准则**，2021 修订）。其标志性特征是用 **正味財産増減計算書 (Statement of Changes in Net Assets)** 取代损益表、将 **正味財産 分为 指定正味財産 / 一般正味財産**，以及按 **公益目的事業会計 / 収益事業等会計 / 法人会計** 分段报告 —— 全部旨在 *证明受限资金被用于其受限目的*，而这正是 公益認定 监督所需要的。

## 为何存在特别准则

营利公司报告 **利润**。公益法人 没有利润动机；其账目须回答的问题不同：

- **受限（捐赠人指定）资金** 是否仅用于其指定目的？
- 法人是否满足 **50%-支出 (公益目的事業比率)** 及其他 認定基準 财务测试？
- **净资产** 是否在 認定基準 的保留限度（遊休財産額 cap）之内？

因此该准则 **以净资产与限制为中心**，而非以收益为中心。这是 [[non-profit/japan-koeki-vs-general-zaidan-comparison|the cross-form comparison]] 中监督逻辑的会计表达。

## 核心报表

| 报表 | 日文 | 角色 |
|---|---|---|
| 资产负债表 | 貸借対照表 | 资产、负债以及 **正味財産** |
| 净资产变动表 | **正味財産増減計算書** | 取代损益表；按类别显示净资产的增减 |
| 现金流量表 | キャッシュ・フロー計算書 | 较大型法人须编制 |
| 附注 & 附属明细书 | 注記・財産目録 等 | 含 財産目録 (inventory of property) 的详细明细表 |

**正味財産増減計算書** 是该准则的核心 —— 它不是"收入 − 费用 = 利润"，而是报告 正味財産 如何变动，并经分段使受限与不受限的流动可见。

## 指定 / 一般 正味財産 的划分

| 净资产类别 | 含义 |
|---|---|
| **指定正味財産 (restricted)** | 在使用或时点上附有捐赠人/资助人限制而收取的资产 |
| **一般正味財産 (unrestricted/general)** | 其余一切 |

当限制被满足时，价值即 **从 指定 重分类至 一般** —— 与全球非营利会计所用的受限基金释放观念相同。这种划分使监督者得以确认受限赠与按指定用途使用，而它在普通公司会计中并不存在。

## 分段会计 —— 区分経理

公益法人 跨 **三个会计分段** 报告：

| 分段 | 捕捉什么 |
|---|---|
| **公益目的事業会計** | 公益活动（享税收优惠的核心） |
| **収益事業等会計** | 附带的营利 / 共益 业务 |
| **法人会計** | 一般法人间接费用 |

这种 **区分経理 (segregated accounting)** 是强制性的，因为 **法人税口径与 公益認定 财务测试两者都依赖于将 公益目的事業 与 収益事業 隔离** —— 将会计准则直接联系到 [[non-profit/japan-nintei-npo-houjin-tax-benefits|Japan 認定NPO法人 tax benefits]] 所述的税务姿态以及 公益法人等 法人税规则。

## 审计与谁适用该准则

- **所有 公益財団 / 公益社団** 适用该准则，并每年向 **公益認定等委員会（内閣府 / 都道府県）** 申报。
- **一般財団 / 一般社団** 通常自愿采用它（它是该领域的事实标准），而 **大規模法人**（负债 ≥ ¥200bn）须委任 **会計監査人 (CPA / audit firm)**。
- 在需要 会計監査人 审计之处，执行审计的 CPA 处于 [[financial-regulators/cpaaob|the CPAAOB]] 所监督的行业之下 —— 将非营利报告连接到更广的审计质量体制。

审计阈值与机关要求详见 [[non-profit/japan-general-foundation-establishment-requirements|Japan 一般財団法人 establishment requirements]]。

## 它与营利及 NPO 会计的区别

- **vs 企業会計 (corporate GAAP)** —— 没有利润表；正味財産増減計算書 + 受限/不受限净资产划分 + 区分経理 取代以损益表为中心的模式。
- **vs NPO法人会計基準** —— NPO 遵循 *单独的、更轻的* **NPO法人会計基準**（为带 活動計算書 的小型公民团体构建的领域准则），而非 公益法人会計基準；两者为两个法律体系并存，与 [[non-profit/japan-npo-houjin-overview|Japan NPO法人 overview]] 中的形态划分平行。
- **vs 学校法人会計基準 / 社会福祉法人会計基準** —— 福祉与教育形态各自在其自身法律之下拥有 **自己的领域会计准则**；公益法人会計基準 专门规制 一般法人法 / 公益認定法 体系。

## 战略解读

- 该准则最好理解为 **作为会计的监督**：每一项标志性特征（正味財産増減計算書, 指定/一般 划分, 区分経理）的存在都是为了使 公益認定 财务测试与法人税边界 *可审计*。
- 任何对 公益財団 财务建模的人都须以 **净资产变动与受限基金释放** 来思考，而非利润 —— 并须从第一天起就将 公益目的事業 / 収益事業 / 法人 各分段分开，因为税务与 認定 测试都从这些分段读取。
- 日本非营利领域是 **多准则** 的（公益法人 / NPO / 学校法人 / 社会福祉法人 各有其自身），因此"日本的非营利会计"从来不是单一规则书 —— 请通过 [[non-profit/japan-koeki-vs-general-zaidan-comparison|the comparison page]] 将准则与法律形态相匹配。

## 相关

- [[non-profit/INDEX|non-profit INDEX]]
- [[non-profit/japan-koeki-vs-general-zaidan-comparison|公益財団 vs 一般財団 vs 一般社団 vs NPO法人 comparison]]
- [[non-profit/japan-general-foundation-establishment-requirements|Japan 一般財団法人 establishment requirements]]
- [[non-profit/japan-npo-houjin-overview|Japan NPO法人 overview]]
- [[financial-regulators/cpaaob|CPAAOB]]
- [[INDEX|FinWiki index]]

## 出处

- 公益法人 information site (Cabinet Office) — 会計基準・FAQ: https://www.koeki-info.go.jp/
- e-Gov 法令検索 — 公益社団法人及び公益財団法人の認定等に関する法律: https://laws.e-gov.go.jp/law/418AC0000000049
- 法務省 — 公益法人制度: https://www.moj.go.jp/MINJI/koeki1.html
- 国税庁 No.5275 — 公益法人等課税: https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5275.htm

> [!info] 校核状态
> confidence: likely. 公益法人会計基準 的存在与目的、正味財産増減計算書、指定/一般正味財産 的区分、向 公益目的事業/収益事業等/法人 分段的 区分経理，以及多准则格局（单独的 NPO/学校法人/社会福祉法人 准则）均为公开且稳定。确切的当前修订年份与确切的 大規模法人 审计阈值，应针对特定申报对照当前内閣府 公益法人 信息网站文本核实。

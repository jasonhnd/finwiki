---
source: money-market/jgb-repo-market-japan
source_hash: 5f35bd7094913e98
lang: zh
status: machine
fidelity: ok
title: "JGB repo market in Japan"
translated_at: 2026-06-19T06:09:18.193Z
---

# JGB repo market in Japan

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/boj-open-market-operations|BoJ open market operations]] for peer / contrast context and [[money-market/japan-money-market|Japan money market]] for the broader system / regulatory boundary.

## TL;DR

JGB 回购市场是日本有担保的短期资金筹措与担保融资层。它与无担保的拆借（call）市场截然不同：回购交易以日后买回相同或类似担保的承诺，将证券与现金交换，而拆借交易则是短期的无担保拆出／拆入。

对 FinWiki 而言，回购市场之所以重要，是因为它将日本央行的政策实施、JGB 市场流动性、交易商资产负债表、证券借贷以及短端利率传导联系起来。它也是观察 JGB 市场功能正在改善还是承压的最佳场所之一。

## Market Mechanics

| Element | Explanation |
|---|---|
| Repo transaction | 提供证券或其他金融资产以换取现金，并附带在未来某一日期以固定价格买回相同或类似担保的承诺。 |
| JGB repo | 证券／担保为日本国债、且现金端通常为日元的回购。 |
| Cash borrowing side | 证券提供方／回购方；以担保换取现金。 |
| Cash lending side | 证券接收方／逆回购方；提供现金并收取担保。 |
| Securities lending with cash collateral | 在经济上与回购相邻，且被纳入日本央行的证券融资统计。 |
| Repo rate | 日本央行统计在对借券费或回扣率进行调整后，使用回购交易及现金担保证券借贷计算成交量加权的回购利率。 |

## GC vs SC

| Type | Meaning | Typical use |
|---|---|---|
| GC repo | 一般担保（General collateral）：证券不被指定。 | 主要用于资金筹措与现金管理。 |
| SC repo | 特别担保（Special collateral）：证券被指定。 | 借入特定的 JGB 券种，或为特定担保需求融资。 |

这一区分在解读压力时很重要。广泛的资金筹措问题可能体现在 GC 状况上，而特定 JGB 券种的稀缺则可能通过 SC 需求、特殊性（specialness）或证券借贷便利的使用而显现。

## Data Surface

日本央行的证券融资统计涵盖在 FSB 数据收集框架下由 FSA 与日本央行收集的回购交易及证券借贷交易。已公布的数据集包括：

- 新交易的每日流量数据；
- 按交易对手与货币划分的每月余额数据；
- 使用日本国债的日元交易；
- 涉及 JGB 与日元的证券借贷交易；
- 回购利率序列。

其覆盖范围有用但并不完整。报告侧重于在日本设立的主要金融机构，并排除了部分内部、个人、中央银行以及仅提供咨询的交易。

## BoJ and Market Functioning

日本央行的国债补充供给便利（Securities Lending Facility）向市场参与者提供临时且补充性的 JGB 供给来源，以支持流动性并使市场功能顺畅。一份 2025 BoJ Review 将 SLF 借入此前的激增与随后的下降，与 JGB 市场流动性、现货／期货／回购市场功能、日本央行购买减少、回购利率企稳以及投资者持仓的变化联系起来。

就分析而言，SLF 的使用应被解读为一种市场功能信号，而非一个独立的政策目标。

## JapanFG Relevance

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] 通过市场操作、JGB 持有及短端利率预期影响回购。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 与 [[financial-regulators/ueda-yagi-tanshi]] 将回购层与更广泛的短期货币市场基础设施相连接。
- [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 等大型银行通过 JGB 持有、担保管理、准备金余额及批发融资而承受敞口。
- [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]] 与 [[securities-firms/nomura-hd]] 等证券公司通过交易商库存、做市及担保融资而承受敞口。

## Reading Rules

- 不要将回购利率视为与无担保隔夜拆借利率相同的工具。
- 将资金筹措需求与特定证券的稀缺区分开来。
- 检查问题究竟是 GC 融资、SC 特殊性、证券借贷、日本央行 SLF 使用，还是更广泛的 JGB 现货市场流动性。
- 使用当期数据时，应引用确切的日本央行月度发布，因为这些数字具有时点特性且日后可能被修正。

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/local-bond-market]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: explanation of Statistics on Securities Financing Transactions in Japan.
- Bank of Japan: Statistics on Securities Financing Transactions in Japan release surface.
- Bank of Japan Review 2025-E-3: JGB market functioning and Securities Lending Facility usage.
- Bank of Japan: Securities Lending Facility.

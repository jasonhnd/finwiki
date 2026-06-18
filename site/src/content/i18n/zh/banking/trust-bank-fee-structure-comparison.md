---
source: banking/trust-bank-fee-structure-comparison
source_hash: afb3190ea2408f2a
lang: zh
status: machine
fidelity: ok
title: "信托银行手续费结构对比"
translated_at: 2026-06-18T23:33:48.340Z
---

# 信托银行手续费结构对比

## Wiki 路径

本条目归属于 [[banking/INDEX|banking index]]，是对运营模式深度剖析的补充——请结合 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|Custody Bank operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] 以及运营对比 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 一并阅读。请与实体页面 [[trust-banks/master-trust-bank|MTBJ]]、[[trust-banks/custody-bank|CBJ]]、[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/smbc-trust-bank|SMBC Trust]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] 搭配阅读。关于结算轨道背景，参见 [[banking/jasdec-settlement-operations|JASDEC settlement operations]]。关于机构背景，参见 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]。

## TL;DR

日本信托银行的手续费经济性由三大驱动因素主导：证券托管与投信受託上的 AUC-bps 定价、长久期委托上的养老金信托管理费，以及全方位服务信托银行侧的不动产信托费。细化的费率表大多不公开——仅能从股东并表披露和个别投信招募说明书（信託約款）进行汇总层面的推断。在 6 家日本信托银行（MTBJ、CBJ、MUFG 信托、SMTB、瑞穗信托、SMBC 信托）与 4 家全球托管行（BNY Mellon、State Street、Citi、JPM）之间，结构性定价模型相似——AUC bps + 每笔交易费 + 收入分成型借券——但其构成与定价权因客户细分而显著不同。国内托管专营机构（MTBJ、CBJ）以规模锚定低 bps; 全方位服务信托银行将高利润率的不动产／养老金／继承费用与托管捆绑; 全球托管行就跨境 + ICSD 连接性收取相对溢价。委托层面的定价未公开披露; 因此本条目中的费用规模细节属于行业层面的推断而非实体特定的事实，并被隔离至 `.opinions/banking/trust-bank-fee-structure-comparison.md`。

## 1. 机构定位

| Entity | Category | Public AUC anchor | Listing | Granular fee disclosure |
|---|---|---|---|---|
| [[trust-banks/master-trust-bank|MTBJ]] | JP custody-only specialist | ~¥770万亿日元 (2025-03末, MTBJ disclosure) | Non-listed | None at line-item; aggregated in MUFG / 4-shareholder consolidated | 
| [[trust-banks/custody-bank|CBJ]] | JP custody-only specialist | ~¥696万亿日元 (2025-03末, CBJ disclosure) | Non-listed | None at line-item; aggregated in SMTB / Mizuho-side consolidated |
| [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] | JP full-service trust bank | Trust assets in 100s of trillions; AUC + real-estate + pension | Subsidiary of [[megabanks/mufg|MUFG]] (listed) | Aggregated segment disclosure |
| [[trust-banks/sumitomo-mitsui-trust|SMTB]] | JP full-service trust bank | Trust assets in 100s of trillions | Subsidiary of [[trust-banks/sumitomo-mitsui-trust|SMT Holdings]] (listed) | Aggregated segment disclosure |
| [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | JP full-service trust bank | Trust assets in 10s-100s of trillions | Subsidiary of [[megabanks/mizuho-fg|Mizuho FG]] (listed) | Aggregated segment disclosure |
| [[trust-banks/smbc-trust-bank|SMBC Trust]] | JP retail-PB-oriented trust bank | <¥10万亿日元 (PB / 富裕層 focus) | Subsidiary of [[megabanks/smbc-group|SMBC Group]] (listed) | Aggregated under retail / PB segment |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$50tn AuC/A | Subsidiary of BNY Mellon (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/state-street-japan|State Street Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$46.6tn AuC/A (2024-12) | Subsidiary of State Street (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$35tn+ AuC (end-2024) | Subsidiary of JPMorgan Chase (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/citigroup-japan|Citi Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$26.3tn AuC/A (2024-09) | Subsidiary of Citigroup (NYSE) | Parent-level aggregate only |

### 托管费机制

| Fee component | Pricing logic | Typical magnitude (industry inference, not entity-specific) |
|---|---|---|

### 养老金信托管理费

| Component | Pricing logic | Magnitude inference |
|---|---|---|

### 证券投资信托管理费

| Component | Pricing logic | Source for public observation |
|---|---|---|
| Fund accounting / NAV calc | Bundled into 受託会社報酬 | Stated only as bundled rate |
| Distribution processing | Bundled | Not separately disclosed |

在整个投信行业，受託会社報酬通常仅占基金总费用率的一小部分——费用率的大头位于资产管理人（運用会社報酬）和销售机构（販売会社報酬），而非信托银行。

### 不动产信托费（仅限全方位服务信托银行）

| Component | Pricing logic | Magnitude |
|---|---|---|

这一项在 MTBJ 和 CBJ 处缺失——托管专营机构不经营不动产信托。

### 跨银行费用经济性矩阵（10 家实体）

| Fee dimension | MTBJ | CBJ | MUFG Trust | SMTB | Mizuho Trust | SMBC Trust | BNY JP | SS JP | JPM JP | Citi JP |
|---|---|---|---|---|---|---|---|---|---|---|
| Securities custody fee | Very low (utility scale) | Very low (utility scale) | Medium (full-service bundled) | Medium (full-service bundled) | Medium (full-service bundled) | High (PB-bundled, low volume) | Medium-high (cross-border premium) | Medium-high (cross-border premium) | Medium-high (cross-border premium) | Medium-high (cross-border premium) |
| 投信受託 admin fee | Low (utility scale) | Low (utility scale) | Low-medium | Low-medium | Low-medium | Limited line | Limited (JP-投信 not core) | Limited (JP-投信 not core) | Limited | Limited |
| Pension trust admin fee | Low at GPIF scale; medium at corp DB | Low at GPIF scale; medium at corp DB | Medium (bundled with front-office) | Medium (bundled with front-office) | Medium (bundled with front-office) | Limited | Medium (foreign-pension-side) | Medium (foreign-pension-side) | Medium (foreign-pension-side) | Limited |
| Real-estate trust fee | None | None | High (large real-estate trust book) | High (large real-estate trust book) | Medium-high | Limited (PB context only) | None (no JP real-estate trust) | None | None | None |
| Securities-lending agent fee | Revenue-share with beneficial owner | Revenue-share with beneficial owner | Revenue-share | Revenue-share | Revenue-share | Limited | Revenue-share (large agent-lender side) | Revenue-share (large agent-lender) | Revenue-share | Revenue-share |
| Cash-management spread | Small | Small | Larger (full balance-sheet) | Larger (full balance-sheet) | Larger | PB context | Large in $ context | Large in $ context | Large in $ context | Large in $ context |
| Inheritance / 遺言 fees | None | None | Yes (high-margin) | Yes (high-margin) | Yes | Yes (PB) | None | None | None | None |
| PB / wealth advisory fees | None | None | Yes | Yes | Yes | Core (high-margin) | UHNW only | UHNW only | UHNW only | UHNW only |

### 定价权概要

| Service | Strongest pricing power | Reason |
|---|---|---|
| GPIF-scale domestic custody | MTBJ / CBJ | Utility scale + GPIF tender competition between the two |
| Mass-investor 投信 受託会社 | MTBJ / CBJ | Volume utility, tight bps, but volume drives revenue |
| Corp-DB pension trust admin | MTBJ / CBJ / megabank trust arms | Mixed — utility specialists win on bps, full-service wins on bundling |
| Real-estate trust setup | MUFG Trust / SMTB / Mizuho Trust | Specialized + relationship-driven; no competition from custody-only specialists |
| Inheritance / 相続 / 遺言 | MUFG Trust / SMTB / Mizuho Trust / SMBC Trust | High-margin wealth-management line; absent at custody-only specialists and at global custodians |
| Cross-border / foreign-asset custody | BNY / State Street / JPM / Citi | Cross-border ICSD + sub-custody network premium |
| Securities lending (large institutional) | BNY / State Street / JPM (and MTBJ / CBJ on JP equity domestic flows) | Mixed; agent-lender scale wins |
| US-listed JP-securities (ADR) | BNY / Citi / JPM | ADR depository fees |

### 隐含的费用收入（极其粗略的行业推断）

每家实体的细化逐项费用收入未公开披露。数量级（数量级）的推断（仅限行业层面，并非实体特定的保证）如下：

| Implied revenue per ¥100万亿日元 AUC at custody-only specialist | Industry-rough inference (not entity-specific) |
|---|---|
| If average custody bps = 0.5 bp/year | ¥50亿日元 / year revenue |
| If average custody bps = 1 bp/year | ¥100亿日元 / year revenue |
| If average custody bps = 2 bps/year | ¥200亿日元 / year revenue |

将这些假设性的 bps 应用于 MTBJ / CBJ 的 AUC 所隐含的每家实体的总托管收入，仅为行业层面的推断，不可归属于任何已披露的费用项; 该推断被隔离至 `.opinions/banking/trust-bank-fee-structure-comparison.md`。

### 费用趋势

| Trend | Effect on trust-bank P&L |
|---|---|
| Passive-fund AUM growth | Volume up, per-bp down → modest net revenue growth, margin compression |
| Foreign-investor JP allocation growth | Foreign sub-custody revenue at MTBJ / CBJ tied to global-custodian fee schedules |
| NISA expansion (2024 onward) | Volume growth in 投信 受託会社 fees |
| DC pension reform (2025 onward) | DC member-balance reporting volume growth |
| Real-estate market cyclicality | Volatile for full-service trust banks; absent for custody-only |

### 为何无法对外公布逐家银行的细化费用表

| Reason | Impact |
|---|---|
| 托管费是委托特定的合同 | 不存在每家银行的单一资费 |
| 集团并表披露汇总了众多费用项 | 无法将托管从其他信托银行费用中剥离 |
| 投信受託会社報酬仅在各信託約款中按基金披露 | 需要跨所有基金手工汇总 |
| 养老金信托管理费按个案协商 | 包括 GPIF |
| 全球托管行的日本部门不披露日本特定的费用项 | 仅有母公司层面的汇总 |
| 不动产信托费因交易而异 | 无法对标至每 bp 标准 |

### 公开可观察的逐基金投信受託会社報酬

对于结构化的公开数据研究，跨主要基金家族的投信受託会社報酬是最可观察的费用项：

| Asset manager family | 受託会社 (most common) | Typical 受託会社報酬 (annualized) |
|---|---|---|

精确的研究将抓取领先基金的信託約款以获取记录在案的逐基金受託会社報酬——该数据按基金公开，但汇总颇为费力。

### 监管性费用约束

| Layer | Constraint |
|---|---|
| 信託業法受信义务规则 | 费用必须公平且披露; 利益冲突控制 |
| 金商法 投信運用報告書 披露 | 必须披露包括受託会社報酬在内的基金层面费用 |
| 养老金基金受信责任 | 费用须经养老金受托人受信审查 |
| Stewardship Code | 自愿; 鼓励在可能情况下透明披露费用 |
| FSA supervisory guidance | 一般合理性审查; 无费率上限制度 |

### 会计视角

| Item | Entity that recognizes |
|---|---|
| 作为收入的托管／管理费 | 信托银行损益表 |
| 作为费用的托管／管理费 | 资产所有者 / 投信基金 |
| 表外信托 AUC | 不在信托银行的资产负债表上 |
| 表内结算账户残余 | 信托银行的资产负债表（规模较小） |
| 借券收入分成 | 信托银行收入 + 实益所有人收入（按合同分割） |

### 可比性问题

| Problem | Effect |
|---|---|
| AUC 与 AuA 定义差异 | 「assets under custody」与「assets under administration」在不同实体间以不同方式计量; 跨实体 AUC 数字并非严格可比 |
| 跨资产类别的构成效应 | 一家实体的构成权重（国内股票／JGB／外国／投信）与另一家显著不同 |
| 仅国内与全球汇总 | 全球托管行报告母公司层面数字; 日本特定的费用项不透明 |
| 逐基金投信受託会社费用与逐银行汇总 | 逐基金披露可手工汇总但未经官方汇总 |
| 不动产费用收入波动 | 全方位服务信托银行拥有受交易驱动而波动的不动产费用 |

### 来自基础设施参与的成本侧费用

| Infrastructure | Fee paid by trust bank (input cost) |
|---|---|
| [[banking/jasdec-settlement-operations|JASDEC]] participation + per-transaction | Fixed annual + per-ticket fee; published in JASDEC tariff |
| JSCC clearing | Clearing-membership cost + per-trade clearing fee |
| BoJ JGB book-entry | BoJ system participation cost |
| BoJ-net cash settlement | Per-transaction cost |
| 全銀ネット | Per-transaction cost |
| ICSD (via global custodians) | Pass-through global-custody fee |
| Voting platform (ICJ etc.) | Platform fee |

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Trust Companies Association of Japan: trust-bank explanation, trust-assets statistics.
- Master Trust Bank of Japan: official site and business overview; FY2024 results (AUC ~¥770tn, 2025-03末): https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Custody Bank of Japan: official site and business overview; 2025 disclosure (預り資産 ~¥696tn, 2025-03末): https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf
- MUFG, SMT Holdings, Mizuho FG, SMBC Group: investor relations financial disclosure.
- BNY Mellon, State Street, JPMorgan Chase, Citigroup: investor relations financial reports.
- State Street FY2024 results (AuC/A $46.6tn, 2024-12): https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx
- Citigroup Q3 2024 results (Securities Services AuC/A $26.3tn, 2024-09): https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q32024/2024pr-qtr3rslt.pdf
- J.P. Morgan Securities Services (AuC ~$35tn+, end-2024): https://www.jpmorgan.com/securities-services
- FSA: trust-business financial institution list.
- Individual fund 信託約款 / 目論見書 (where 受託会社報酬 is disclosed).

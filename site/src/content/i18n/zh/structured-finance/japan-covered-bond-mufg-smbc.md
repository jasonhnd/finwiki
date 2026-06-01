---
source: structured-finance/japan-covered-bond-mufg-smbc
source_hash: 2e2e05e88cfbc8fe
lang: zh
status: machine
fidelity: ok
title: "日本大型银行担保债券 — MUFG、SMBC EUR/USD 项目"
translated_at: 2026-06-01T04:15:40.176Z
---
# 日本大型银行担保债券 — MUFG、SMBC EUR/USD 项目

## TL;DR

以 [[JapanFG/mufg-bank|MUFG Bank]] 和 [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] 为首的日本大型银行向国际投资者发行 **EUR 和 USD 担保债券**，作为以 USD/EUR 计价、定位于 **senior unsecured bonds 与传统 [[structured-finance/japan-rmbs-issuance-structure|RMBS securitization]]之间** 的融资来源。由于日本没有类似德国 Pfandbrief Act 或 EU Covered Bond Directive 的国内担保债券法律框架，这些担保债券项目采用**合同型结构**（而非法定型）。发行从境外进行（通常是伦敦、新加坡或东京分行通过 European Medium-Term Note 项目发行），并通过结构性信用增级设计来满足 **UCITS Article 52(4)** 质量标准，并取得 [[JapanFG/sp-global-ratings-japan|S&P]]、[[JapanFG/moodys-japan|Moody's]] 或 [[JapanFG/jcr|JCR]] / [[JapanFG/rating-and-investment|R&I]] 的 **AAA 等级评级**。

**cover pool 构成**以**日本住宅按揭贷款**为主，即由发行大型银行发放的 prime-quality 浮动利率或混合利率住宅贷款，并被隔离到为担保债券提供担保的破产隔离资产池中。日本大型银行担保债券的定价通常交易在 **senior unsecured 以内**（因为 dual recourse，即对发行人和 cover pool 的双重追索，为投资者提供增量保护），但在**顶级欧洲 Pfandbrief 之外**（反映合同型而非法定型结构以及发行人国家溢价）。使用本条目作为 [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS]] 与大型银行无担保融资之间的桥梁；covered bond、RMBS 和 senior unsecured 之间的融资决策是大型银行 treasury 团队的结构性选择。

## Wiki 路由

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，是**日本担保债券节点**，即 [[structured-finance/japan-rmbs-issuance-structure|RMBS]] 与大型银行 senior unsecured bonds 之间、接近结构性信用的融资工具。请结合 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] 阅读，以获得整体结构性信用背景；结合 [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]] 阅读，以获得最接近的抵押品侧亲属；结合 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] 阅读，以了解国内评级处理与全球评级机构的差异；结合 [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK/GK/TMK/SPC vehicle choice]] 阅读，以了解结构性载体层。系统框架：[[finance/INDEX|finance index]]，以及发行银行锚点 [[JapanFG/mufg|MUFG]] / [[JapanFG/mufg-bank|MUFG Bank]] 和 [[JapanFG/smfg|SMFG]] / [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]。

## 1. 什么是担保债券 — 简短复习

**担保债券**是由银行发行、给予投资者**双重追索权**的债务义务：

1. 作为 senior unsecured 债权人向发行银行追索
2. 如果银行违约，向由高质量资产（通常是住宅按揭或公共部门债务）组成的**隔离 cover pool**追索

cover pool 与发行人的一般财产**破产隔离**。如果发行人违约，担保债券投资者首先从 cover-pool 现金流获得付款；如果 cover pool 不足，他们仍对发行人拥有剩余 senior-unsecured 债权。

担保债券结合了 **senior unsecured**（发行人信用）和 **[[structured-finance/japan-rmbs-issuance-structure|RMBS]]**（资产支持结构）的元素，历史上是欧洲市场中主权债之外评级最高、利差最紧的工具。

## 2. 欧洲法定结构 vs 日本合同型结构

| 维度 | 欧洲担保债券 | 日本担保债券 |
|---|---|---|
| 法律基础 | 法定 — Pfandbrief Act（德国）、EU Covered Bond Directive（2019/2162）在欧盟成员国的实施法 | 合同型 — 无国内担保债券法；通过 SPV 和担保协议设计结构 |
| Cover pool 隔离 | 法定破产隔离 | 通过 SPV / 信托结构进行合同安排 |
| Cover pool 监控 | 法定 cover-pool monitor / cover-pool register | 通过独立验证代理进行合同安排 |
| UCITS Article 52(4) 资格 | 法定制度旨在满足资格 | 经设计以满足资格 |
| 投资者基础 | 广泛的欧洲 / 全球机构 | 相同 — 对欧洲银行 ALM 账簿而言需要符合 UCITS |
| 定价参考 | 最紧（Pfandbrief、French OF、Spanish Cédulas） | 比顶级欧盟 Pfandbrief 宽；比 senior unsecured 紧 |

日本采用**合同型**而非法定型结构是一项关键特征：日本尚未制定国内担保债券法，因此每个项目都使用 SPV 和担保协议合同来复制双重追索加 cover-pool 隔离特征。

### MUFG Bank 担保债券项目

| 项目 | MUFG 担保债券详情 |
|---|---|
| 发行人 | [[JapanFG/mufg-bank|MUFG Bank]]（通常通过伦敦分行或项目特定发行实体） |
| 形式 | 带有担保债券结构的 Euro Medium-Term Note (EMTN) 项目 |
| 货币 | 主要为 EUR 和 USD |
| Cover pool | 日本住宅按揭贷款 |
| Cover-pool monitor | 独立验证代理 |
| 评级 | 全球评级机构（S&P、Moody's）给予 AAA 等级评级 |
| 期限 | 通常 3-10Y |
| 募资用途 | 一般公司 / treasury 融资多元化 |

### SMBC 担保债券项目

| 项目 | SMBC 担保债券详情 |
|---|---|
| 发行人 | [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]（通常通过境外分行或项目实体） |
| 形式 | 带有担保债券结构的 EMTN 项目 |
| 货币 | 主要为 EUR 和 USD |
| Cover pool | 日本住宅按揭贷款 |
| Cover-pool monitor | 独立验证代理 |
| 评级 | 全球评级机构给予 AAA 等级评级 |
| 期限 | 通常 3-10Y |
| 募资用途 | Treasury 融资多元化 |

两个项目均设计为**符合 UCITS Article 52(4)**，使欧洲银行的流动性缓冲和 ALM 账簿可以在有利监管处理中持有它们。

## 4. Cover pool 构成 — 住宅按揭贷款

| Cover-pool 特征 | 日本大型银行模式 |
|---|---|
| 资产类别 | 由发行银行发放的 prime-quality 日本住宅按揭贷款 |
| Loan-to-value | 保守 — 通常为高质量 LTV 区间 |
| 利率类型 | 浮动利率和固定利率住宅贷款混合 |
| 地域集中 | 东京圈和主要城市权重较高（反映大型银行贷款足迹） |
| 货币 | JPY 计价（与 EUR/USD 担保债券形成货币错配，由货币互换覆盖安排处理） |
| Cover-pool excess | Cover pool 通常超额抵押（cover-pool value > covered-bond outstanding），以取得 AAA 评级 |
| 补充 | 发起人以新按揭替换已提前偿还或违约退出资产池的按揭 |

JPY 计价 cover-pool 资产与 EUR/USD 担保债券负债之间的**货币错配**通过 SPV 结构内的交叉货币互换覆盖安排处理。

## 5. 定价 vs senior unsecured

| 融资工具 | 大致定价位置 |
|---|---|
| MUFG / SMBC senior unsecured EUR/USD bond | 定价参考 |
| MUFG / SMBC senior preferred / TLAC | 比 senior unsecured 宽 |
| MUFG / SMBC senior non-preferred / subordinated | 更宽 |
| MUFG / SMBC AT1 / Tier 2 | 最宽 |

**担保债券相对 senior unsecured 的定价收益**是真实存在的，反映结构性信用增级。收益幅度随市场环境变化，也是大型银行 treasury 团队将部分外币融资配置到担保债券发行的原因之一。

| 发行人侧发行担保债券的理由 | 解读 |
|---|---|
| 融资成本 | 在 senior unsecured 以内 — 节省融资成本 |
| 投资者多元化 | 触达欧洲 ALM 账簿和亚洲央行储备，且条件不同于 senior unsecured |
| 期限 | 支持比典型 senior unsecured 更长期的 USD/EUR 融资 |
| 监管处理 | 不消耗证券化表外处理（担保债券对发行人而言仍在表内） |

## 6. 担保债券 vs RMBS — 融资工具选择

| 维度 | 担保债券 | [[structured-finance/japan-rmbs-issuance-structure|Private RMBS]] |
|---|---|---|
| 发行人资产负债表处理 | 表内（担保债券是发行人债务） | 表外（资产出售给 SPV） |
| 追索权 | 双重 — 向发行人 + cover pool | 有限追索 — 仅向 SPV / 信托 |
| Cover-pool 补充 | 动态 — 发行人替换已成熟 / 违约贷款 | 静态 — 资产池在证券化交割时固定 |
| 投资者基础 | 银行 ALM 账簿、央行、广泛机构 | 专门 RMBS 投资者 |
| 发行频率 | 项目化、持续性 | 间歇 / 机会型 |
| 货币 | EUR/USD 常见（国际重点） | 通常为 JPY（国内重点） |
| 募资用途 | 一般融资 | 资本释放 + 融资 |
| 典型发行人 | 最大型银行 | 大型银行和信托银行 |

这两种工具是**互补**而非替代。担保债券是具有表内处理的融资多元化工具；RMBS 是具有表外处理的资本释放和风险转移工具。

## 7. 反方观点

- **“没有法律框架，日本担保债券不是真正的担保债券”** — 部分成立。合同型结构提供了功能上等同的投资者保护，但基础是设计出来的而非法定的。鉴于 SPV / 担保协议架构，全球投资者和评级机构接受该结构作为担保债券等价物。
- **“担保债券定价收益很边际”** — 取决于市场环境。在利差较宽的环境中收益有意义；在利差较紧的环境中收益会压缩。
- **“Cover-pool 货币错配产生基差风险”** — 通过交叉货币互换覆盖处理，但互换对手方风险是结构的一部分。
- **“日本应通过担保债券法”** — 存在争议。法定框架会进一步收紧定价，但需要立法努力；没有法律框架并未阻止大型银行大规模发行。
- **“担保债券蚕食 RMBS 发行”** — 证据很少。这两种工具服务于发行人的不同功能。

## 相关

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose company mechanics]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/mufg-bank|MUFG Bank]]
- [[JapanFG/smfg|SMFG]] · [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]
- [[JapanFG/mizuho-fg|Mizuho FG]] · [[JapanFG/mizuho-bank|Mizuho Bank]]
- [[INDEX|FinWiki index]]

## 来源

- MUFG IR — https://www.mufg.jp/english/ir/
- SMBC Group IR — https://www.smfg.co.jp/english/investor/
- FSA 银行监管披露 — https://www.fsa.go.jp/en/
- BOJ Financial System Report — https://www.boj.or.jp/en/
- European Covered Bond Council (ECBC) — https://www.hypo.org/ecbc/
- EU Covered Bond Directive 2019/2162 公开立法文本。

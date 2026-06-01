---
source: structured-finance/japan-clo-issuance-japanese-banks
source_hash: fdf6425c57beca7d
lang: zh
status: machine
fidelity: ok
title: "作为 CLO 投资者的日本银行——农林中央金库、日本邮政、地方银行"
translated_at: 2026-06-01T04:15:40.150Z
---
# 作为 CLO 投资者的日本银行——农林中央金库、日本邮政、地方银行

## TL;DR

以 [[JapanFG/norinchukin|Norinchukin]] 为首，后面跟随 [[JapanFG/japan-post-bank|Japan Post Bank]] 以及一批地方银行，日本银行在 2010 年代成为全球最大的美国 broadly-syndicated-loan(BSL) CLO 持有人群体。其动因是相对于日元 JGB 的收益率提升，以及高级 tranche 被认为具备 AAA / AA 安全性。该敞口经历了三个监管拐点:**Dodd-Frank Section 941 risk-retention rule**(在 2018  法院判决后，open-market CLO managers 实质上免于 retention requirements，从而释放市场)、**2018 risk-retention crisis**(Norinchukin 和 JPost 因方法论及 FSA 监管不确定性暂停购买)，以及 **2024 Norinchukin loss disclosure**(foreign-bond 和 CLO 组合的按市值计价损失促使其声明将降低 foreign-credit risk-asset holdings)。地方银行同期建立了规模较小但并非微不足道的 CLO 组合；FSA 披露和 BOJ Financial System Reports 现在将地方银行 CLO 敞口视为 watch-list item。

## Wiki route

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，作为 **Japan-as-CLO-investor** 节点——从买方视角观察的 structured-finance 角度。请结合 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] 阅读国内发行侧，结合 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] vs global-agency criteria 阅读，并结合 [[derivatives/japan-cds-market-overview|Japan CDS market]] 理解套期保值语境。系统框架:上游贷款发放侧见 [[finance/INDEX|finance index]] 和 [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]。机构锚点:[[JapanFG/norinchukin|Norinchukin]]、[[JapanFG/japan-post-bank|Japan Post Bank]] 以及 [[JapanFG/mufg|MUFG]] / [[JapanFG/smfg|SMFG]] / [[JapanFG/mizuho-fg|Mizuho FG]](三大银行也是 CLO 持有人，但相对规模较小)。

## 1. CLO 是什么——简短复习

美国 Broadly-Syndicated Loan(BSL) **Collateralised Loan Obligation(CLO)** 是一种 [[structured-finance/spv-tk-gk-vehicle-japan-tax|special-purpose vehicle]]，持有约 100–250  笔 senior-secured leveraged loans(通常为美国发行人，评级 B/B+)，并通过发行分层债务为组合融资:
- AAA senior tranche(约占资本结构 60%)
- AA / A / BBB / BB mezzanine tranches
- Equity tranche(剩余权益)

Senior AAA CLO yield 相对于可比 corporate AAA / AA bonds 提供**收益率提升**，原因在于(i) 结构复杂性溢价，及 (ii) 底层资产池的 leveraged-loan 敞口。对以日元融资并 swap 成美元的日本银行而言，扣除 FX hedge 后的 all-in yield 历史上相对于 JGB returns 具有吸引力。

## 2. 日本买方基础——三个同心层级

### Tier 1: Norinchukin
- [[JapanFG/norinchukin|Norinchukin]]——农业合作社中央银行——到 2010 年代后期成为全球最大的美国 BSL CLO 单一持有人
- 高峰期，foreign-bond holdings(包括 CLO、agency MBS、sovereign bonds、corporate bonds)在合并口径达到数十万亿日元
- 该策略由日元 JGB 的结构性低收益率，以及向农业合作社成员基础回馈收益的机构使命驱动

### Tier 2: Japan Post Bank
- [[JapanFG/japan-post-bank|Japan Post Bank]]——Japan Post Holdings 的存款吸收部门——在私有化后也建立了相当规模的 foreign-bond 和 structured-credit 组合
- CLO 敞口是 total foreign-credit allocation 中有意义但较小的份额
- JPost 的多元化使命(远离以 JGB 为主的配置)推动了组合积累

### Tier 3: Regional banks
- 若干日本地方银行建立了较小的 CLO 组合——单家银行典型敞口为数百亿到低数千亿日元
- 集中度并不均匀——少数地方银行持有不成比例的大型 CLO 仓位
- FSA 和 BOJ 已就地方银行在 foreign-credit structured products 中的集中度发布警示

## 3. Dodd-Frank Section 941 risk-retention——2010 年代的监管弧线

美国 Dodd-Frank Act Section 941  要求 securitisation sponsors 保留 ≥5% 的 structured-credit issuances 信用风险，意在 2008 之后对齐 originator 与 investor 的利益。

### 2014–2016: 初始实施
- 美国 BSL CLO managers 必须保留其发行的每个 CLO 的 5%
- 对于缺乏资产负债表能力的小型 CLO managers，这是一项显著的结构性约束
- 一些 managers 通过 majority-owned affiliated entities 发行，或使用“horizontal” retention(5% 的 equity) vs “vertical” retention(每个 tranche 的 5%)

### 2018: LSTA 法院判决
- Loan Syndications and Trading Association(LSTA)在一案中胜诉(LSTA v. SEC and Federal Reserve)，法院认定 open-market CLO managers(在市场购买贷款而非发放贷款的 managers)并非 Section 941  下的 **"securitisers"**，因此不受 retention 约束
- 这实际上取消了美国 BSL CLO managers 的 retention，并随后带来 CLO 发行反弹

### 对日本买方的影响
- retention requirement 期间(2014–2018)限制了 CLO 供给，支撑了价格
- 2018  法院判决释放供给，日本买方在 2018–2019
 吸收了大量供给
- 该判决也给日本银行监管者带来**方法论不确定性**——如果不要求 retention，FSA 如何评估国内银行持有 CLO 的利益一致性风险？

## 4. 2018 risk-retention crisis(日本银行角度)

2018,  期间，随着 retention 监管制度变化，若干日本监管和披露事件促使 Norinchukin 及其他日本买方**暂时暂停 CLO 购买**:
- FSA 对海外信用产品持有披露的预期收紧
- 日本银行内部风险方法论需要更新，以反映 LSTA 判决后的 retention 格局
- 一些日本买方在 2H2018

 期间减少新发行参与

这次暂停较温和，Norinchukin 于 2019,  重返市场，但它预示了更大的 2024  事件。

## 5. 2024 Norinchukin foreign-bond loss disclosure

2024,  年中，[[JapanFG/norinchukin|Norinchukin]] 公开披露其 foreign-bond 和 CLO 组合的按市值计价损失，驱动因素包括:
- 美国利率上升(2022–2023)降低固定利率 foreign bonds 的市场价值
- 2H2023  / 2024  信用利差扩大，影响 CLO 按市值计价
- 日元贬值在未完全对冲口径下增加了 foreign-currency losses 的日元折算规模

该机构宣布:
- 计划降低 foreign-credit risk-asset holdings(明确包括 foreign bonds；CLO 属于更广泛类别的一部分)
- 通过再资本化措施吸收损失
- 中期战略转向更多日元计价、对 FX-hedge-cost 敏感度较低的持仓

该披露促使市场更广泛审视日本地方银行 CLO 敞口——FSA 和 BOJ 在后续刊物中均将地方银行 foreign-credit-product 集中度列为监管关注点。

## 6. Norinchukin 披露后的地方银行 CLO 敞口

地方银行层级高度异质:
- 一些地方银行基本退出 foreign-credit structured products
- 另一些银行(尤其是少数拥有强 investment-securities 团队的银行)保留了 CLO 仓位
- FSA 检查流程现在包括对 CLO 估值、套期保值和集中度的审查

2024  之后的图景仍在演变——一些地方银行利用 loan-loss provisioning capacity 吸收按市值计价影响并继续持有，而另一些银行则通过出售实现损失。

## 7. 与日本国内结构化信用的比较

日本银行同时投资:
- **日本国内 structured-credit**——RMBS、auto ABS、CMBS，由 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] 评级，日元计价，无 FX 风险
- **海外 structured-credit**——主要是美国 BSL CLO，以美元计价并叠加 FX-hedge overlay

海外配置推动了收益率提升策略，但使持有人暴露于(i) 美国信用利差风险，(ii) FX-hedge cost(在 2022 后美日利差扩大时变得昂贵)，以及 (iii) 跨境监管复杂性。

## 8. Counterpoints

- **"AAA CLO has never defaulted"**——日本银行 CLO 策略的辩护者指出，即使经历 2008–2009，AAA CLO tranches 的历史违约率也接近零；问题是按市值计价，而非已实现损失
- **"FX hedge cost was the killer, not the credit"**——2024  Norinchukin 损失更多由美国利率上升(duration)和 FX-hedge economics 驱动，而非 CLO-specific credit deterioration；这更像 maturity-mismatch / hedge-cost story，而非 CLO story
- **"Concentration not unique to Japan"**——Norinchukin 作为 CLO 买方的规模很显眼，但全球保险和养老金流入 CLO 的规模可比；日本银行叙事只是隔离出一个买方类别
- **"Regional banks lack the analytical infrastructure"**——批评者认为地方银行没有独立承销美国 BSL CLO 敞口的内部能力，而依赖 rating-agency labels；这是促使 FSA 监管关注的真实风险
- **"Retention exemption was a one-time gift"**——2018  LSTA 判决在短期内通过扩大供给惠及日本买方，但移除了一个利益一致性机制，其缺失可能只有在下一个信用周期才显现

## 9. Open questions

- Norinchukin 在 2026–2028
 期间削减 foreign-credit assets 的速度和规模
- FSA 是否会对地方银行施加明确 CLO concentration limits
- 日本投资者需求是否会从 BSL CLOs 转向 middle-market 或 direct-lending-fund structures
- 如果日本买方持久后退，对美国 CLO 新发行供给的影响
- [[JapanFG/japan-post-bank|Japan Post Bank]] 是否跟随 Norinchukin 轨迹或出现分化
- [[JapanFG/mufg|MUFG]] / [[JapanFG/smfg|SMFG]] / [[JapanFG/mizuho-fg|Mizuho FG]] 证券子公司作为 CLO 承销商以及作为直接 CLO 购买竞争者的作用

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]] · [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]
- [[JapanFG/norinchukin|Norinchukin]] · [[JapanFG/japan-post-bank|Japan Post Bank]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/japan-exchange-group|JPX]]

## Sources

- Norinchukin IR — https://www.nochubank.or.jp/en/
- Japan Post Bank IR — https://www.jp-bank.japanpost.jp/en/
- FSA bank supervision disclosures and Financial System Report references
- BOJ Financial System Report (regional-bank credit-product holdings) — https://www.boj.or.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- LSTA v. SEC court decision (public court records, 2018)

---

> [!info] 校核状态
> confidence: **likely**. Norinchukin / JPost 作为 CLO 持有人的叙事、2018  retention crisis 和 2024  loss disclosure 均属于公开 IR 和监管沟通事项。这里未以单点精度给出具体未偿数字和 tranche 分配，因为不同披露之间差异很大。由于单家银行披露稀疏，地方银行敞口以一般性术语描述。

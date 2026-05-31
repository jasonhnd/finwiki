---
source: derivatives/jgb-inflation-linked-bond-jgbi
source_hash: bda1a7990e80fe9c
lang: zh
status: machine
fidelity: ok
title: "JGB 通胀挂钩债券（JGBi）"
translated_at: 2026-05-31T03:19:56.421Z
---

# JGB 通胀挂钩债券（JGBi）

## TL;DR

JGBi（物価連動国債，「日本政府通胀指数化国债」）是日本政府债券（JGB）的通胀挂钩变体，由财务省（MoF）发行，本金与日本不含生鲜食品的 CPI 指数挂钩。JGBi 于 2004年3月首次发行；在全球金融危机期间于 2008 年暂停发行，并于 2013 年10月在日本央行 QQE 框架及政府摆脱通缩承诺下恢复发行。发行时的标准期限为 10 年。

JGBi 的显著特征在于，本金按债券参考日与相关支付日之间参考 CPI 的累计变动向上（或向下）调整；固定票息率适用于经通胀调整的本金，从而产生通胀挂钩的票息流。自 2014 年重新发行修订起，JGBi 带有通缩下限：在到期时，赎回金额不能低于平价，从而在通缩情形下保护投资者免受本金侵蚀。

自 2013 年恢复发行以来，外国投资者对 JGBi 的持有量大幅增长，并经常代表持有人中最大的单一类别。JGBi 隐含的盈亏平衡通胀率（名义 JGB 收益率减去匹配期限的 JGBi 收益率）是对日本通胀预期的一个广受关注的基于市场的解读，并补充了 [[derivatives/japan-inflation-swap|JPY inflation swap]] 盈亏平衡。

对 FinWiki 而言，本条目涵盖发行历史、招标与重开节奏、通缩下限、外国投资者份额、盈亏平衡通胀率信号以及日本央行持有量。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates / inflation cluster. Read it against [[derivatives/japan-inflation-swap]] for the OTC derivative analogue, [[derivatives/jgb-futures-curve]] for the nominal JGB futures market, [[derivatives/jgb-special-participants-primary-dealer]] for the JGB Special Participants who participate in JGBi auctions, and [[money-market/jgb-repo-market-japan]] for the JGB repo market that finances JGBi positions. The MoF JGB management context is at [[money-market/INDEX|money market]] and [[money-market/boj-open-market-operations|BoJ open market operations]] for BoJ holdings.

## 发行历史

JGBi 计划经历了几个不同阶段：

| 时期 | 阶段 | 备注 |
|---|---|---|
| 2004 年3月 | 首次发行 | 在 MoF 的 JGB 发行计划下推出 10年期 JGBi，以拓宽产品范围并吸引对通胀对冲感兴趣的投资者群体 |
| 2004–2008 | 早期阶段 | 发行量适中；多为机构承接；二级市场清淡 |
| 2008 （雷曼之后） | 暂停发行 | 全球金融危机、市场错位、极低/负通胀前景降低了投资者需求 |
| 2008–2013 | 无新发行 | 存量 JGBi 保留但无新发行 |
| 2013 年10月 | 恢复发行 | 在日本央行 QQE 框架及政府摆脱通缩承诺下恢复；10年期；新发行系列带通缩下限（2013年新增） |
| 2014 修订 | 通缩下限机制正式化 | 赎回以平价受到保护；新发行强制适用 |
| 2013–至今 | 常规发行 | 在 MoF 发行计划下大约按季度发行和重开；发行量在 MoF 年度规划中确定 |

MoF 每年发布的 JGB 发行计划规定了该财年的 JGBi 发行量。JGBi 占 JGB 总发行量的份额很小——通常为百分之几——该计划的主要目的是发展通胀挂钩工具的市场，而非作为主要的融资工具。

## 招标与重开机制

JGBi 遵循结构化的招标与重开周期：

| 要素 | 详情 |
|---|---|
| 发行人 | 财务省（MoF） |
| 招标形式 | 常规招标（基于收益率或基于价格，视系列和 MoF 决定而定）；现有系列的重开增加存量 |
| 招标参与者 | [[derivatives/jgb-special-participants-primary-dealer|JGB Special Participants]]（日本的一级交易商制度）提交投标；非特别参与者可经由特别参与者中介投标 |
| 发行时期限 | 10 年（标准） |
| 重开节奏 | 现有系列多次重开以累积存量；减少市场中不同 ISIN 的数量并改善单系列流动性 |
| 每次招标发行量 | 可变；通常每次招标为数千亿日元 |
| 回购/冲销 | MoF 可进行 JGBi 回购以管理供给；日本央行历史上持有相当一部分存量 |

重开节奏是一种刻意的设计选择，旨在将流动性集中于更少、更大的系列，而非用许多小规模的单笔发行分散市场。

## 通缩下限

2013 年之后的 JGBi 通缩下限是一种结构性保护：

- 在到期时，赎回金额不能低于原始面值（平价）的 100%。
- 若参考日与到期之间已实现的累计 CPI 通胀为负，本金指数化计算将隐含低于平价的赎回，但下限阻止了这一点——投资者收到平价。
- 债券存续期内的票息仍适用于经通胀调整的本金（在通缩期间可能低于平价）；下限仅保护最终赎回金额。

通缩下限在精神上类似于美国 TIPS（国债通胀保值证券）对本金的通缩下限，但在范畴上有所不同（TIPS 将下限适用于到期时的本金，而以更细致的方式将票息计算适用于任意时点的本金）。该日元机制是在 2008 年暂停之后加入 JGBi 的，以应对投资者对通缩情形的担忧。

通缩下限的经济价值取决于债券存续期内累计通胀为负的概率；在持续通缩中，下限价值可能可观；在通胀情形中，下限远处于价外，价值极小。

## 外国投资者份额

自 2013 年恢复发行以来，外国投资者对 JGBi 的持有一直是一个显著特征：

| 方面 | 详情 |
|---|---|
| 外国持有份额 | 经常是按持有人类型划分的最大单一类别；在 MoF 和日本央行的持有人统计中报告 |
| 外国需求的原因 | 国际投资者寻求日元计价的实际回报敞口；相对其他通胀挂钩市场（TIPS、OATi、英国国债）的相对价值；JGBi-互换基差交易；日元-美元货币对冲的实际收益率策略 |
| 分销渠道 | 活跃于 JGB 市场的特别参与者和外国交易商银行代表外国账户执行 |
| 结算 | 经由 [[securities/japan-securities-depository-center|JASDEC]] / BoJ-NET 基础设施 |

较高的外国份额与名义 JGB 形成对比，名义 JGB 中外国投资者持有份额较小（大部分名义 JGB 由日本央行、日本银行、寿险公司和养老金基金持有）。JGBi 中的外国倾向反映了通胀挂钩敞口更专业化的性质，以及 JGBi 市场较小的绝对规模使集中持仓成为可能。

## 盈亏平衡通胀率信号

JGBi 隐含的盈亏平衡通胀率（BEI）计算为：

$$\text{BEI}_T = y^{\text{nominal}}_T - y^{\text{JGBi}}_T$$

其中 $y^{\text{nominal}}_T$ 是期限 $T$ 的名义 JGB 收益率，$y^{\text{JGBi}}_T$ 是同一期限的 JGBi（实际）收益率。

该 BEI 代表使两种债券总回报相等的市场隐含累计年通胀率（带有对通胀风险溢价和流动性溢价的小幅调整）。

| BEI 度量 | 所捕捉的内容 |
|---|---|
| 10年期 JGBi BEI | 10 年内的市场隐含年通胀预期；最受关注的 JGBi 信号 |
| 远期 BEI（例如 5年远期 5年 BEI） | JGBi 期限后半段的市场隐含通胀预期；较少受当前已实现通胀的直接污染 |
| 互换隐含盈亏平衡（来自 [[derivatives/japan-inflation-swap|JPY inflation swap]]） | 基于衍生品的并行度量；通常比 JGBi BEI 低一个流动性溢价 |

JGBi BEI 一直是「日本央行 2% 目标是否被定价？」争论的核心：

- 在 2022, 年之前的 QQE 时代，10年期 JGBi BEI 持续低于 2%，有时远低于 1%，即便日本央行大规模宽松政策。
- 2022 年之后，随着已实现通胀高于目标，BEI 重新定价走高；与 2% 的差距收窄，并一度收敛。
- 2024 年之后（日本央行正常化），BEI 已稳定在反映市场对长期通胀看法的区间，约为或略高于 2%。

## 日本央行持有量

作为 QQE / YCC 下更广泛 JGB 购买计划的一部分，日本央行持有相当一部分存量 JGBi：

| 方面 | 详情 |
|---|---|
| 日本央行 JGBi 持有量 | 在日本央行资产负债表和日本央行持有量统计中报告；自 2013 年恢复发行以来大幅增长 |
| 占存量份额 | 一个可观的份额（在日本央行披露及 BIS / 日本央行分析出版物中专门引用） |
| 对市场运作的影响 | 减少可供交易的 JGBi 自由流通量；影响 JGBi 流动性和 BEI 计算；类似于日本央行名义 JGB 持有量的效应 |
| 2024 年之后的正常化 | 日本央行整体逐步减少 JGB 购买；JGBi 自然到期路径作为更广泛资产负债表正常化的一部分受到关注 |

日本央行对 JGBi 的高持有量减少了有效流通供给，并可能扭曲 BEI 信号（因为现金债券价格除纯通胀预期外，还反映了日本央行存在所带来的供给效应）。

## JGBi 与 JGB 现金市场流动性

| 方面 | 名义 JGB | JGBi |
|---|---|---|
| 年度发行量 | 各期限合计约 150-200 万亿日元 | 一小部分；近年为数十万亿日元 |
| 存量 | 约 1,000万亿日元以上 | 名义存量的百分之几 |
| 日成交量 | 非常大；活跃期限有深厚订单簿 | 薄得多；间歇性流量 |
| 回购市场 | 活跃的 SC 和 GC 市场 | SC 市场流动性较差；GC 有限 |
| 期货 | [[derivatives/jgb-futures-curve|JGB futures]]（10年期、5年期、20年期） | 无专门的 JGBi 期货合约 |
| 外国持有人份额 | 较低份额 | 较高份额 |

流动性的不对称是全球通胀挂钩与名义主权债券市场的结构性特征（美国 TIPS 同样比名义国债流动性差），并产生 JGBi 特有的风险溢价。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/jgb-special-participants-primary-dealer]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-swaption-market]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Ministry of Finance: JGBi (Inflation-Indexed Bonds) program documentation, auction calendar, deflation floor terms.
- Ministry of Finance: JGB Issuance Plan (annual; specifies JGBi issuance volume and tenor mix).
- Bank of Japan: JGB holdings statistics including JGBi.
- Statistics Bureau (Ministry of Internal Affairs and Communications): CPI ex-fresh-food index publication and methodology.
- BIS: Government bond statistics including inflation-linked bonds by issuer.
- Financial Services Agency: FIEA framework on JGB auction and secondary trading.
- BoJ Reports and Research Papers on JGBi market functioning (occasional analytical publications).

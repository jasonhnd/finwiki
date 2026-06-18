---
source: money-market/call-market-structure
source_hash: 694ff48e30b78380
lang: zh
status: machine
fidelity: ok
title: "拆借市场结构"
translated_at: 2026-06-18T15:47:13.964Z
---

# 拆借市场结构


## Wiki 路径

本条目归属于 [[money-market/INDEX|money-market index]]。请对照 [[money-market/japan-money-market|Japan money market]] 了解同类 / 对比背景，并对照 [[money-market/boj-open-market-operations|BoJ open market operations]] 了解更广泛的系统 / 监管边界。

## 摘要

拆借市场是日本的短期银行间融资市场。无担保隔夜拆借利率尤为重要，因为它是日本银行（BoJ）货币市场操作方针所使用的政策利率传导点。银行及其他金融机构通过隔夜拆借交易来调节日终流动性；短资公司（tanshi）作为经纪商 / 中介存在于市场中。

当你需要解读短端利率正常化、短资公司的相关性，或日本银行操作方针与实际成交隔夜利率之间的差异时，请使用本页。

## 核心机制

| 要素 | 说明 |
|---|---|
| 交易 | 极短期的拆出 / 拆入，尤其是隔夜。 |
| 无担保隔夜（O/N）拆借利率 | 日本银行政策方针历来瞄准的核心短端货币市场利率。 |
| 参与者 | 银行、信托银行、证券公司、其他符合条件的金融机构，以及货币市场经纪商。 |
| 短资公司角色 | 短资公司中介短期资金并提供市场功能基础设施。 |
| 数据来源 | 日本银行在营业日发布临时与最终的拆借货币市场数据。 |

## 如何解读该利率

不要把拆借利率读作简单的存款利率。它是一个批发货币市场价格，受以下因素影响：

- 日本银行的政策方针；
- 经常账户余额与准备金状况；
- 参与者对日本银行账户的接入；
- 担保品与回购替代方案；
- 季末 / 财年末的流动性需求；
- 交易对手限额与资产负债表约束。

## 无担保与有担保分部

拆借市场历来分为两个分部，区分标准在于贷款是否有担保品支持。在当前实务中，"拆借利率"指**无担保隔夜**利率；有担保分部在很大程度上只是历史性与定义性的对照。

| 维度 | 无担保拆借（無担保コール） | 有担保拆借（有担保コール） |
|---|---|---|
| 担保 | 无担保；纯粹的交易对手信用敞口。 | 以质押的合格担保品作担保。 |
| 出借方承担的信用风险 | 完全的交易对手信用风险。 | 由担保品缓释。 |
| 核心利率 | 无担保隔夜拆借利率——日本银行操作目标。 | 有担保拆借利率——自 2016 年 4 月起不再计算（无短资中介成交）。 |
| 当前活跃度 | 活跃，但成交量随准备金环境而变化。 | 作为经纪分部实际上已休眠。 |
| 期限 | 以隔夜为主；亦有定期交易。 | 历史上有隔夜与定期。 |
| 用途 | 日终准备金 / 结算调节、证券公司库存融资。 | 回购增长之前更早的有担保融资渠道。 |
| 数据 | 日本银行拆借货币市场数据，每个营业日更新。 | 不发布当前利率序列。 |

**有担保拆借利率自 2016年 4 月起不再计算**，因为已没有由短资公司中介的交易；日本银行根据短资公司实际报告的交易计算成交量加权平均拆借利率，因此一个没有此类交易的分部没有发布利率。

无担保分部之所以占主导，原因如下：

- **操作目标引力**：由于日本银行方针以无担保隔夜拆借利率为参照，它是参与者与中央银行共同关注的利率，从而将流动性与价格发现集中于此。
- **回购吸收了有担保融资**：有担保短期融资迁移至 [[money-market/jgb-repo-market-japan|JGB repo market]]（GC / SC 回购与现金担保的证券借贷），其基础设施更深厚、担保品管理框架比旧的有担保拆借渠道更清晰。
- **参与者结构**：银行调节准备金 / 结算余额，证券公司在无担保拆借市场为库存融资；尤其证券公司持续有动力进行定期无担保拆借交易，以为库存融资并管理流动性覆盖率（LCR）。

结果是：无担保分部承载着政策相关价格，而有担保短期融资的角色落在回购上，使有担保拆借分部更像是定义性的对照而非活跃市场。

## 与其他前端市场的关系

| 市场 | 它与拆借市场的关系 |
|---|---|
| [[money-market/jgb-repo-market-japan|JGB repo]] | 实际上取代了有担保拆借市场的有担保短期融资场所；GC 回购与无担保拆借争夺融资流。 |
| [[derivatives/ois-tona-curve|TONA / OIS]] | TONA 是无担保隔夜拆借交易的成交量加权平均；拆借市场是日元无风险利率体系之下的现货市场。 |
| [[money-market/japan-tibor-benchmark-rate|TIBOR]] | 一个独立的定期银行间基准，建立在参考银行报价之上，而非拆借交易之上；将定期 TIBOR 与实际隔夜拆借成交价对照。 |
| [[money-market/japan-ncd-negotiable-cd-market|NCD]] 与 [[money-market/japan-cp-commercial-paper-market|CP]] | 在当前政策机制下与直接拆借市场融资竞争的短期融资工具形态替代方案。 |

## 解读清单

1. 当某一来源称"拆借利率"时，除非另有明确说明，否则需确认它指的是无担保隔夜利率。
2. 不要指望存在当前的有担保拆借利率；自 2016年 4 月起它已不再计算。
3. 将有担保短期融资问题归到 [[money-market/jgb-repo-market-japan|repo]]，而非有担保拆借分部。
4. 把操作目标利率（无担保隔夜拆借）与定期拆借交易、以及有担保融资区分开。
5. 将拆借市场活动对照准备金环境与日本银行操作来解读，而非作为独立信号。

## JapanFG 相关性

- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 和 [[financial-regulators/ueda-yagi-tanshi]] 是直接的短资公司路径。
- [[megabanks/mufg]]、[[megabanks/smfg]] 和 [[megabanks/mizuho-fg]] 通过短端利率传导、准备金余额与批发融资受到影响。
- [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]] 以及其他证券公司通过回购、JGB 担保品与交易商资产负债表受到影响。
- [[financial-regulators/boj-monetary-policy]] 设定政策框架；本页解释市场表层。

## 边界情形

- **拆借市场 vs 回购市场**：无担保拆借放款与有担保回购或 JGS 借贷不同。
- **政策目标 vs 实际利率**：日本银行可以促使 O/N 拆借利率围绕目标，但实际利率仍是一个市场统计量。
- **短资公司 vs 银行**：短资公司是市场中介，而非通常零售意义上的吸收存款的银行。
- **有担保拆借 vs 回购**：两者都有担保，但回购是带回购承诺的证券融资交易，而有担保拆借是质押担保品的有担保放款；二者并非相同的法律结构。
- **无担保拆借 vs 银行间存款**：双边银行间存款在经济上相关，但并非馈入已发布拆借利率的经纪拆借市场交易。
- **定期拆借 vs 隔夜拆借**：定期无担保拆借交易确实存在，但政策相关的核心是隔夜利率。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/boj-open-market-operations]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 来源

- 日本银行：拆借货币市场数据（Call Money Market Data）。
- 日本银行：本行市场操作方针有何变化？
- 日本银行：什么是市场操作？
- 日本银行：阐释无担保隔夜拆借市场货币市场调节作用的框架文件。
- 日本银行："拆借货币市场统计"说明，其中包含有担保拆借利率自 2016 年 4 月起因无短资中介交易而不再计算的注记。
- 日本银行评论（2024）：日本货币市场的发展，包括证券公司进行定期无担保拆借交易的激励。

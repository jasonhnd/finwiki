---
source: money-market/japan-uncollateralized-vs-collateralized-call-market
source_hash: f948673b7444742b
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "无担保拆借市场 vs 有担保拆借市场（日本）"
translated_at: 2026-06-05T00:00:00.000Z
---
# 无担保拆借市场 vs 有担保拆借市场（日本）

## 维基路径

本条目归于 [[money-market/INDEX|money-market index]] 之下。关于代表性的拆借利率机制，请对照 [[money-market/call-market-structure|Call market structure]] 阅读；关于更广义的担保融资边界，请参阅 [[money-market/jgb-repo-market-japan|JGB repo market in Japan]]。政策实施层是 [[money-market/boj-open-market-operations|BoJ open market operations]]。

## TL;DR

日本的拆借市场 —— 银行间短期借贷的核心市场 —— 历来按贷款是否有担保支持而划分为两个分部：

- **无担保拆借市场（無担保コール市場）**：无担保的银行间借贷。无担保隔夜拆借利率是日银货币市场操作方针自20世纪90年代后期以来所瞄准的分部，也是 [[derivatives/ois-tona-curve|TONA]] 的基础资金市场。
- **有担保拆借市场（有担保コール市場）**：有担保的拆借放贷，借款人质押合格担保品（历来为JGB及类似品）。这曾是拆借市场较早的主流，但已萎缩到自2016年4月以来日银不再计算有担保拆借利率的地步，因为不存在由短资公司中介的交易。

对FinWiki而言，关键的阅读规则是：当前实务中的"拆借利率"指的是 **无担保隔夜** 利率。随着有担保短期融资迁移至 [[money-market/jgb-repo-market-japan|repo market]]，有担保分部在很大程度上已成为历史性与定义性的对照。

## 分部比较

| 维度 | 无担保拆借（無担保コール） | 有担保拆借（有担保コール） |
|---|---|---|
| 担保 | 无担保；纯粹的交易对手信用敞口。 | 以质押的合格担保品予以担保。 |
| 贷款人承担的信用风险 | 全部交易对手信用风险。 | 由担保品缓释。 |
| 代表性利率 | 无担保隔夜拆借利率 —— 日银操作目标。 | 有担保拆借利率 —— 自2016年4月以来不再计算（无短资中介成交）。 |
| 当前活跃度 | 活跃，但成交量随准备金环境而变动。 | 作为中介分部实际上处于休眠。 |
| 期限 | 隔夜为主；亦有期限交易。 | 历来为隔夜及期限。 |
| 用途缘由 | 日终准备 / 结算调整、证券公司库存融资。 | 回购增长之前较早的有担保融资渠道。 |
| 数据 | 日银拆借市场数据，每个营业日更新。 | 无现行利率序列公布。 |

## 为何无担保分部占据主导

无担保隔夜拆借利率自20世纪90年代起成为日银货币市场操作的操作目标，从而将关注、流动性与价格发现集中于此。有若干结构性力量使活动停留在无担保分部而非有担保拆借分部：

- **回购吸收了有担保融资**：希望进行有担保短期融资的机构现在使用 [[money-market/jgb-repo-market-japan|JGB repo market]]（GC / SC回购及现金担保债券借贷），它比旧有的有担保拆借渠道拥有更深厚的基础设施与更清晰的担保管理框架。
- **操作目标的引力**：由于日银方针参考无担保隔夜拆借利率，它是参与者与央行双方都关注的利率，从而强化了其作用。
- **参与者构成**：银行在无担保拆借市场调整准备 / 结算余额，证券公司则为库存融资；尤其是证券公司，为给库存融资并管理流动性覆盖比率，一直保有进行期限无担保拆借交易的激励。

其结果是这样一个市场：无担保分部承载着与政策相关的价格，有担保短期融资的角色坐落于回购，使有担保拆借分部更多地成为一种定义性对照，而非一个活跃市场。

## 结算与中介

两个分部都通过短资（货币市场经纪）公司中介，后者撮合贷款人与借款人并向日银报送交易数据。日银从短资公司报告的实际交易中计算成交量加权平均拆借利率 —— 这正是为何一个没有短资中介交易的分部（自2016年4月以来的有担保拆借市场）没有公布利率。

- **约定 / 起息日**：对于无担保隔夜拆借，资金于约定日收付，并于下一营业日偿还。
- **短资的角色**：关于东京 / 中央 / 上田八木短资如何中介，以及当短端利率正常化增加隔夜交易时该活动如何复苏，见 [[money-market/tanshi-company-business-model|tanshi company business model]]。
- **准备 / 结算背景**：拆借活动由日银的往来账户余额，以及某一日系统内资金的盈余 / 短缺所塑造。

## 与其他前端市场的关系

| 市场 | 与拆借市场的关系 |
|---|---|
| [[money-market/jgb-repo-market-japan|JGB repo]] | 实际上取代了有担保拆借市场的有担保短期融资场所；GC回购在融资流上与无担保拆借竞争。 |
| [[derivatives/ois-tona-curve|TONA / OIS]] | TONA是无担保隔夜拆借交易的成交量加权平均；拆借市场是日元无风险利率体系之下的资金市场。 |
| [[money-market/japan-tibor-benchmark-rate|TIBOR]] | 一项基于参考银行报价、而非拆借交易构建的独立期限同业基准；应将期限TIBOR与实际隔夜拆借成交值加以对照。 |
| [[money-market/japan-ncd-negotiable-cd-market|NCD]] 与 [[money-market/japan-cp-commercial-paper-market|CP]] | 在当前政策机制下与直接拆借市场融资竞争的短期融资工具形态替代品。 |

## 阅读清单

1. 当来源称"拆借利率"时，除非另有明确说明，否则确认其指无担保隔夜利率。
2. 不要期待现行的有担保拆借利率；它自2016年4月以来未再计算。
3. 将有担保短期融资问题引向 [[money-market/jgb-repo-market-japan|repo]]，而非有担保拆借分部。
4. 将操作目标利率（无担保隔夜拆借）与期限拆借交易及有担保融资分开。
5. 将拆借市场活动放在准备金环境与日银操作背景下解读，而非作为独立信号。

## JapanFG相关性

- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]] 与 [[financial-regulators/ueda-yagi-tanshi]] 是其所报告交易界定拆借利率的短资中介机构。
- [[megabanks/mufg]]、[[megabanks/smfg]] 与 [[megabanks/mizuho-fg]] 通过准备 / 结算余额及批发融资参与。
- [[securities-firms/mizuho-securities]] 与 [[securities-firms/mufg-mums]] 通过证券公司库存融资及回购相邻活动参与。
- [[financial-regulators/boj-monetary-policy]] 设定政策框架；本页面解释其下的有担保 vs 无担保拆借分部划分。

## 边界情形

- **有担保拆借 vs 回购**：二者都有担保，但回购是带有回购承诺的证券融资交易，而有担保拆借是质押担保品的有担保放贷；二者并非同一法律结构。
- **无担保拆借 vs 银行间存款**：双边银行间存款在经济上相关，但并非馈入公布拆借利率的中介拆借市场交易。
- **期限拆借 vs 隔夜拆借**：存在期限无担保拆借交易，但与政策相关的代表值是隔夜利率。

## 相关

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[derivatives/ois-tona-curve]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 来源

- 日本银行：拆借市场数据（无担保隔夜拆借利率，每个营业日更新）。
- 日本银行：《拆借市场相关统计》说明，含因缺乏短资中介交易而自2016年4月以来未再计算有担保拆借利率的注记。
- 日本银行：关于无担保隔夜拆借利率及资金盈余 / 短缺的教育页面。
- 日本银行：货币市场概要页面。
- 日本银行评论（2024年）：日本货币市场动态，含证券公司进行期限无担保拆借交易的激励。

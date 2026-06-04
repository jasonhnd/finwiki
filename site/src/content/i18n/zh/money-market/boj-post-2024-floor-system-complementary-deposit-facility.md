---
source: money-market/boj-post-2024-floor-system-complementary-deposit-facility
source_hash: 2182fec9cda02b0b
lang: zh
status: machine
fidelity: ok
title: "日本央行 2024 年后的下限制度和补完当座预金制度"
translated_at: 2026-05-30T14:13:23.423Z
---

# 日本央行 2024 年后的下限制度和补完当座预金制度

## Wiki 路线

此条目位于 [[money-market/INDEX|money-market index]] 下。请与 [[money-market/boj-open-market-operations|BoJ open market operations]] 对照阅读以获得同类/对比背景,与 [[money-market/japan-money-market|Japan money market]] 对照阅读以获得更广泛的系统/监管边界。

## TL;DR

2024, 年 3 月,日本央行结束了负利率政策(NIRP)和收益率曲线控制(YCC),转向短期利率目标框架,其中政策利率被设定为日本央行银行活期存款的政策利率余额层支付的利息。这是一种**下限制度**方法,结构上类似于美联储的 IORB 和欧央行的存款便利。

准备金利息轨道是补完当座预金制度(補完当座預金制度),该制度在历史上对活期存款余额应用了分层结构。在 2024 年 3 月的框架转变后,政策利率余额层承担了主要短期政策利率,短期货币市场定价锚定在该下限之上。

## 框架地图

| 层级 | 前 2024 年 3 月阅读 | 后 2024 年 3 月阅读 |
|---|---|---|
| 政策利率目标 | 在 NIRP 框架下短期目标约为负 10 个基点;长端在 YCC 下受到控制。 | 无抵押品隔夜拆借利率围绕正的短期利率目标指导。 |
| 准备金分层 | 三层:基础余额、宏观附加余额、政策利率余额,其中政策利率余额承担负利率。 | 准备金利息通过补完当座预金制度应用;检查当前发布的层级利率。 |
| 长端控制 | 10元 JGB 收益率的 YCC 范围。 | YCC 停止;长端允许由市场决定。 |
| 资产购买 | 大规模 JGB/ETF/J-REIT/CP/企业债券购买项目全速进行。 | JGB 购买步伐逐步降低;ETF/J-REIT 新购买结束;企业资产项目风险降低。 |
| 运营理念 | 纯粹由数量驱动,负利率下限和 YCC 上限。 | 使用下限制度机制的传统利率目标框架。 |

## 补完当座预金制度机制

补完当座预金制度(補完当座預金制度)是日本央行向商业银行活期存款余额支付利息的法律和运营途径。历史关键点:

- 2008 年作为日本央行市场操作框架的扩展而引入。
- 在金融危机流动性扩张期间用作遏制工具。
- 通过日本央行净额活期存款系统运作。
- 通过公开的日本央行政策委员会决议实施。

在伴随 NIRP 和后 NIRP 正常化的政策分层变化之后,精确的层级定义和应用的利率随时间而变化。请始终查阅当前日本央行 MPM 决议文本和当前运营页面,以获得实时利率和层级定义。

## 分层 IOER 结构(参考阅读)

前 2024 年 NIRP 分层框架提供了有用的阅读模板:

| 层级 | 概念 | 阅读 |
|---|---|---|
| 基础余额 | 由历史准备金金额定义的参考余额。 | 承担了正利率。 |
| 宏观附加余额 | 由准备金要求和贷款激励算术定义的附加层。 | 承担了零利率。 |
| 政策利率余额 | 其他两个之上的边际层。 | 承担了定义 NIRP 的负利率。 |

2024, 年 3 月后,日本央行框架从惩罚性负利率边际层转向准备金余额的正利率下限。应始终咨询日本央行发布的确切层级定义和应用利率,然后才能引用当前数字。

## 为什么下限制度有效

下限制度将短期货币市场利率锚定在准备金支付的利息之上。如果银行可以在日本央行以公布的政策利率存放多余现金,它就没有经济理由在 [[money-market/call-market-structure|call market]] 中以明显较低的利率放贷。结合 [[money-market/boj-open-market-operations|open market operations]] 来管理总体准备金稀缺/充足,下限设定了清晰的短期利率走廊。

实际阅读:

- 实际的 [[money-market/call-market-structure|uncollateralized overnight call rate]] 应该在政策利率余额利率附近交易。
- 回购利率([[money-market/jgb-repo-market-japan|JGB repo]])应该在下限周围的狭窄范围内交易,由抵押品稀缺性修改。
- [[money-market/japan-tbill-treasury-discount-bill|TDB]] 收益率应该在下限减去小额抵押品/稀缺性溢价处交易。
- [[money-market/japan-ncd-negotiable-cd-market|NCD]] 和 [[money-market/japan-cp-commercial-paper-market|CP]] 收益率应该在下限之上按发行人信用利差交易。

## 与美联储 IORB 和欧央行 DFR 的对比

| 特征 | 日本央行后 2024 年 | 美联储 | 欧央行 |
|---|---|---|---|
| 政策利率名称 | 短期政策利率,通过补完当座预金制度应用。 | 联邦基金目标范围;下限是准备金利息(IORB)。 | 存款便利率(DFR)。 |
| 下限工具 | 日本央行活期存款的政策利率余额层利息。 | 联邦储备系统的准备金利息。 | 欧央行存款便利处超额持有的利息。 |
| 准备金充足 | 日本央行由于扩展量化宽松遗留而运行充足准备金。 | 美联储在后 2008 框架下运行充足准备金。 | 欧央行在后 2014 框架下运行充足准备金。 |
| 分层结构 | 历史上使用分层系统;检查当前日本央行 MPM 决议。 | 无 IORB 分层的单一利率。 | 在 NIRP 期间历史上应用的两层系统;框架定期修订。 |
| 长端管理 | YCC 2024年 3 月结束;长端现在由市场决定,自由裁量购买。 | 无长端收益率目标;资产负债表缩表使用。 | 无长端目标;APP/PEPP 风险降低。 |

结构相似性是有意的:所有三家中央银行在后 2008 年充足准备金时代后转向了下限制度设计。

## 运营菜单相邻性

下限制度与主动操作相结合:

- **供给资金操作**:联合抵押品贷款、[[money-market/japan-tbill-treasury-discount-bill|TDB]] 购买、[[money-market/jgb-repo-market-japan|JGB repo]] 式操作和 [[money-market/japan-cp-commercial-paper-market|CP]] 回购。用于管理总体准备金稀缺。
- **吸收资金操作**:日本央行票据发行、带有回购协议的 JGS 销售操作。用于在必要时吸收多余准备金。
- **常设便利**:补完贷付制度(補完貸付制度)作为走廊上限。
- **前向指导**:MPM 声明和展望报告塑造利率预期。

下限(存款便利率)和上限(贷款便利率)的组合形成运营走廊。

## 阅读检查清单

1. 从最新的日本央行 MPM 决议文本中确认当前政策利率水平。
2. 从日本央行运营页面验证补完当座预金制度中的当前层级定义。
3. 针对政策利率下限阅读 [[money-market/call-market-structure|call rate]] 以检查传导。
4. 将 [[money-market/japan-tbill-treasury-discount-bill|TDB]] 收益率与下限进行比较以获得抵押品/稀缺性信号。
5. 观察日本央行 JGB 购买步伐和资产负债表缩表声明以了解中期准备金轨迹。
6. 将补完当座预金制度利率(而非政策利率标签)视为运营下限。

## JapanFG 相关性

- 大型银行 [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] 拥有直接日本央行活期存款头寸,并在准备金余额上赚取下限利率。
- 信托银行和托管银行在日本央行持有结算余额,也受下限约束。
- 证券公司 [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], [[securities-firms/nomura-hd]] 通过回购融资和交易商资产负债表定价与下限互动。
- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] 中介拆借和 CP 业务,定价偏离下限。

## 边界情况

- **政策利率标签与下限利率**:MPM 声明中公布的政策利率仅当补完当座预金制度层级定义与利率标签一致时才是运营下限。验证两者。
- **下限制度与走廊制度**:日本央行后 2024 是下限制度,因为准备金充足;走廊制度需要主动利率带管理,而无需依赖充足准备金。
- **IOER 与 IORB**:美联储的早期 IOER 和当前 IORB 命名法不同,但功能是等价的。
- **NIRP 结束与 QQE 结束**:结束 NIRP 改变边际层利率;结束 QQE 式资产购买是一个单独的决议。

## 相关条目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 来源

- 日本央行:货币政策会议决议表面。
- 日本央行:开放市场操作和补完当座预金制度页面。
- 日本央行:MPM 时间表和会议纪要/展望报告。
- 日本央行:市场操作和政策指引教育页面。
- 日本央行:货币市场概览。
- 日本央行:活期存款余额统计页面。

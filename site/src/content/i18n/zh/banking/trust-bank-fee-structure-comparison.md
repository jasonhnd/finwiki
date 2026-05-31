---
source: banking/trust-bank-fee-structure-comparison
source_hash: 95ad2f85422c074a
lang: zh
status: machine
fidelity: ok
title: "信托银行费用结构比较"
translated_at: 2026-05-31T03:19:56.387Z
---

# 信托银行费用结构比较

## Wiki route

本条目归于 [[banking/INDEX|banking index]] 之下，与运营模式深度剖析互为补充——请与 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|Custody Bank operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] 以及运营比较 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 一并阅读。配合实体页 [[JapanFG/master-trust-bank|MTBJ]]、[[JapanFG/custody-bank|CBJ]]、[[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[JapanFG/sumitomo-mitsui-trust|SMTB]]、[[JapanFG/mizuho-trust-bank|Mizuho Trust]]、[[JapanFG/smbc-trust-bank|SMBC Trust]]、[[JapanFG/bny-mellon-japan|BNY Mellon Japan]]、[[JapanFG/state-street-japan|State Street Japan]] 和 [[JapanFG/jpmorgan-japan|JP Morgan Japan]]。结算轨道背景见 [[banking/jasdec-settlement-operations|JASDEC settlement operations]]。机构背景见 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]。

## TL;DR

日本信托银行的费用经济学由三大驱动因素主导：证券托管与 投信受託 的 AUC 基点定价、长久期委托的养老金信托管理费，以及全能型信托银行侧的房地产信托费。细粒度费率表大体不公开——只能从股东合并披露与各 投信 招募说明书（信託約款）中作总量级推断。在 6  家日本信托银行（MTBJ、CBJ、MUFG Trust、SMTB、Mizuho Trust、SMBC Trust）与 4  家全球托管行（BNY Mellon、State Street、Citi、JPM）之间，结构性定价模式相似——AUC 基点 + 单笔交易费 + 收入分成型证券出借——但其构成与定价能力因客户细分而显著不同。国内纯托管专业机构（MTBJ、CBJ）以成交量锚定低基点；全能型信托银行将利润率更高的房地产 / 养老金 / 继承费与托管捆绑；全球托管行因跨境 + ICSD 连接而收取相对溢价。委托层级的定价并未公开披露；因此本条目中的费用量级细节属于行业层级推断而非实体特定事实，并被隔离至 `.opinions/banking/trust-bank-fee-structure-comparison.md`。

## 1. 機関位置

| 实体 | 类别 | 公开 AUC 锚点 | 上市情况 | 细粒度费用披露 |
|---|---|---|---|---|
| [[JapanFG/master-trust-bank|MTBJ]] | 日本纯托管专业机构 | 约 ¥770 万亿（2025-03末，MTBJ 披露） | 非上市 | 无逐项披露；汇总于 MUFG / 4 股东合并报表 | 
| [[JapanFG/custody-bank|CBJ]] | 日本纯托管专业机构 | 约 ¥696 万亿（2025-03末，CBJ 披露） | 非上市 | 无逐项披露；汇总于 SMTB / Mizuho 侧合并报表 |
| [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]] | 日本全能型信托银行 | 信托资产达 100 万亿级；AUC + 房地产 + 养老金 | [[JapanFG/mufg|MUFG]]（上市）的子公司 | 汇总分部披露 |
| [[JapanFG/sumitomo-mitsui-trust|SMTB]] | 日本全能型信托银行 | 信托资产达 100 万亿级 | [[JapanFG/sumitomo-mitsui-trust|SMT Holdings]]（上市）的子公司 | 汇总分部披露 |
| [[JapanFG/mizuho-trust-bank|Mizuho Trust]] | 日本全能型信托银行 | 信托资产达 10 至 100 万亿级 | [[JapanFG/mizuho-fg|Mizuho FG]]（上市）的子公司 | 汇总分部披露 |
| [[JapanFG/smbc-trust-bank|SMBC Trust]] | 日本零售-PB 导向信托银行 | <¥10 万亿（PB / 富裕層 聚焦） | [[JapanFG/smbc-group|SMBC Group]]（上市）的子公司 | 汇总于零售 / PB 分部下 |
| [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] | 全球托管行——日本单位 | 日本特定 AUC 未披露；母公司约 $50 万亿 AuC/A | BNY Mellon（NYSE）的子公司 | 仅母公司层级汇总 |
| [[JapanFG/state-street-japan|State Street Japan]] | 全球托管行——日本单位 | 日本特定 AUC 未披露；母公司约 $46.6 万亿 AuC/A（2024-12） | State Street（NYSE）的子公司 | 仅母公司层级汇总 |
| [[JapanFG/jpmorgan-japan|JP Morgan Japan]] | 全球托管行——日本单位 | 日本特定 AUC 未披露；母公司约 $35 万亿+ AuC（2024末） | JPMorgan Chase（NYSE）的子公司 | 仅母公司层级汇总 |
| [[JapanFG/citigroup-japan|Citi Japan]] | 全球托管行——日本单位 | 日本特定 AUC 未披露；母公司约 $26.3 万亿 AuC/A（2024-09） | Citigroup（NYSE）的子公司 | 仅母公司层级汇总 |

### 托管费机制

| 费用组成 | 定价逻辑 | 典型量级（行业推断，非实体特定） |
|---|---|---|

### 养老金信托管理费

| 组成 | 定价逻辑 | 量级推断 |
|---|---|---|

### 证券投资信托管理费

| 组成 | 定价逻辑 | 公开观测来源 |
|---|---|---|
| 基金会计 / NAV 计算 | 捆绑入 受託会社報酬 | 仅以捆绑费率表述 |
| 分销处理 | 捆绑 | 不单独披露 |

在 投信 行业中，受託会社報酬 通常仅占基金总费用率的一小部分——费用率的大头位于资产管理人（運用会社報酬）与分销商（販売会社報酬），而非信托银行。

### 房地产信托费（仅全能型信托银行）

| 组成 | 定价逻辑 | 量级 |
|---|---|---|

此条目在 MTBJ 与 CBJ 处缺失——纯托管专业机构不经营房地产信托。

### 跨银行费用经济矩阵（10  家实体）

| 费用维度 | MTBJ | CBJ | MUFG Trust | SMTB | Mizuho Trust | SMBC Trust | BNY JP | SS JP | JPM JP | Citi JP |
|---|---|---|---|---|---|---|---|---|---|---|
| 证券托管费 | 极低（公用事业规模） | 极低（公用事业规模） | 中（全能型捆绑） | 中（全能型捆绑） | 中（全能型捆绑） | 高（PB 捆绑，低成交量） | 中高（跨境溢价） | 中高（跨境溢价） | 中高（跨境溢价） | 中高（跨境溢价） |
| 投信受託 管理费 | 低（公用事业规模） | 低（公用事业规模） | 低-中 | 低-中 | 低-中 | 有限条目 | 有限（日本 投信 非核心） | 有限（日本 投信 非核心） | 有限 | 有限 |
| 养老金信托管理费 | GPIF 规模低；企业 DB 中 | GPIF 规模低；企业 DB 中 | 中（与前台捆绑） | 中（与前台捆绑） | 中（与前台捆绑） | 有限 | 中（外国养老金侧） | 中（外国养老金侧） | 中（外国养老金侧） | 有限 |
| 房地产信托费 | 无 | 无 | 高（庞大房地产信托账册） | 高（庞大房地产信托账册） | 中高 | 有限（仅 PB 情形） | 无（无日本房地产信托） | 无 | 无 | 无 |
| 证券出借代理费 | 与受益所有人收入分成 | 与受益所有人收入分成 | 收入分成 | 收入分成 | 收入分成 | 有限 | 收入分成（大型代理出借方侧） | 收入分成（大型代理出借方） | 收入分成 | 收入分成 |
| 现金管理利差 | 小 | 小 | 较大（完整资产负债表） | 较大（完整资产负债表） | 较大 | PB 情形 | 美元情形下大 | 美元情形下大 | 美元情形下大 | 美元情形下大 |
| 继承 / 遺言 费 | 无 | 无 | 有（高利润率） | 有（高利润率） | 有 | 有（PB） | 无 | 无 | 无 | 无 |
| PB / 财富咨询费 | 无 | 无 | 有 | 有 | 有 | 核心（高利润率） | 仅 UHNW | 仅 UHNW | 仅 UHNW | 仅 UHNW |

### 定价能力总结

| 服务 | 最强定价能力 | 原因 |
|---|---|---|
| GPIF 规模国内托管 | MTBJ / CBJ | 公用事业规模 + 两者之间的 GPIF 招标竞争 |
| 大众投资者 投信 受託会社 | MTBJ / CBJ | 成交量公用事业，基点紧，但成交量驱动收入 |
| 企业 DB 养老金信托管理 | MTBJ / CBJ / 大型银行信托部门 | 混合——公用事业专业机构以基点取胜，全能型以捆绑取胜 |
| 房地产信托设立 | MUFG Trust / SMTB / Mizuho Trust | 专业 + 关系驱动；纯托管专业机构无法竞争 |
| 继承 / 相続 / 遺言 | MUFG Trust / SMTB / Mizuho Trust / SMBC Trust | 高利润率财富管理条目；纯托管专业机构与全球托管行均无 |
| 跨境 / 外币资产托管 | BNY / State Street / JPM / Citi | 跨境 ICSD + 次级托管网络溢价 |
| 证券出借（大型机构） | BNY / State Street / JPM（以及 MTBJ / CBJ 在日本股票境内流） | 混合；代理出借方规模取胜 |
| 美国上市的日本证券（ADR） | BNY / Citi / JPM | ADR 存托费 |

### 隐含费用收入（非常粗略的行业推断）

每实体的细粒度逐项费用收入并未公开披露。量级推断（仅行业层级，非实体特定保证）如下：

| 纯托管专业机构每 ¥100 万亿 AUC 的隐含收入 | 行业粗略推断（非实体特定） |
|---|---|
| 若平均托管基点 = 0.5  基点/年 | ¥50 十亿 / 年收入 |
| 若平均托管基点 = 1  基点/年 | ¥100 十亿 / 年收入 |
| 若平均托管基点 = 2  基点/年 | ¥200 十亿 / 年收入 |

将这些假设性基点应用于 MTBJ / CBJ AUC 所隐含的每实体总托管收入仅为行业层级推断，不可归属于任何已披露的费用条目；该推断被隔离至 `.opinions/banking/trust-bank-fee-structure-comparison.md`。

### 费用趋势

| 趋势 | 对信托银行损益表的影响 |
|---|---|
| 被动型基金 AUM 增长 | 成交量上升，单基点下降 → 净收入温和增长，利润率压缩 |
| 外国投资者日本配置增长 | MTBJ / CBJ 的外国次级托管收入与全球托管行费率表挂钩 |
| NISA 扩张（2024  起） | 投信 受託会社 费用成交量增长 |
| DC 养老金改革（2025  起） | DC 成员余额报告量增长 |
| 房地产市场周期性 | 对全能型信托银行波动大；纯托管者无 |

### 为何细粒度逐家银行费用表无法对外公布

| 原因 | 影响 |
|---|---|
| 托管费为委托特定合同 | 每家银行无单一资费 |
| 集团合并披露汇总众多费用条目 | 无法从其他信托银行费用中分离出托管 |
| 投信 受託会社報酬 仅在每只基金的 信託約款 中披露 | 需跨所有基金人工汇总 |
| 养老金信托管理费逐一协商 | 包括 GPIF |
| 全球托管行日本单位不披露日本特定条目 | 仅母公司层级汇总 |
| 房地产信托费因交易而异 | 无法对标到单基点标准 |

### 可公开观测的每只基金 投信 受託会社報酬

对于结构化公开数据研究，主要基金家族的 投信 受託会社報酬 是最可观测的条目：

| 资产管理人家族 | 受託会社（最常见） | 典型 受託会社報酬（年化） |
|---|---|---|

精确的研究将抓取主要基金的 信託約款 以获取记录的每只基金 受託会社報酬——数据按基金公开但汇总费力。

### 监管费用约束

| 层级 | 约束 |
|---|---|
| 信託業法 受信义务规则 | 费用须公平且披露；利益冲突控制 |
| 金商法 投信運用報告書 披露 | 须披露基金层级费用，含 受託会社報酬 |
| 养老基金 受託者責任 | 费用须经养老金受托人受信审查 |
| 尽责管理守则 | 自愿性；鼓励在可能情形下透明披露费用 |
| FSA 监督指引 | 一般合理性审查；无费率上限制度 |

### 会计视角

| 项目 | 确认的实体 |
|---|---|
| 托管 / 管理费作为收入 | 信托银行损益表 |
| 托管 / 管理费作为费用 | 资产所有人 / 投信ファンド |
| 表外信托 AUC | 不在信托银行资产负债表上 |
| 表内结算账户余额 | 信托银行资产负债表（小） |
| 出借收入分成 | 信托银行收入 + 受益所有人收入（按合同拆分） |

### 可比性问题

| 问题 | 影响 |
|---|---|
| AUC 与 AuA 定义差异 | "托管下资产"与"管理下资产"在各实体间计量不同；跨实体 AUC 数字并非严格可比 |
| 跨资产类别的构成效应 | 一实体的构成权重（国内股票 / JGB / 外国 / 投信）与另一实体显著不同 |
| 纯国内与全球汇总 | 全球托管行报告母公司层级数字；日本特定条目不透明 |
| 投信 受託会社 按基金的费用与按银行汇总 | 按基金披露可人工汇总，但未经官方汇总 |
| 房地产费收入呈块状 | 全能型信托银行有块状的交易驱动型房地产费 |

### 来自基础设施参与的费用成本侧

| 基础设施 | 信托银行支付的费用（投入成本） |
|---|---|
| [[banking/jasdec-settlement-operations|JASDEC]] 参与 + 单笔交易 | 固定年费 + 单笔费；公布于 JASDEC 资费表 |
| JSCC 清算 | 清算会员成本 + 单笔交易清算费 |
| BoJ JGB 簿记 | BoJ 系统参与成本 |
| BoJ-net 现金结算 | 单笔交易成本 |
| 全銀ネット | 单笔交易成本 |
| ICSD（经由全球托管行） | 转嫁的全球托管费 |
| 表决平台（ICJ 等） | 平台费 |

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
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/smbc-trust-bank]]
- [[JapanFG/nochu-trust-bank]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
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

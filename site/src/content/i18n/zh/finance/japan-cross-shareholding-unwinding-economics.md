---
source: finance/japan-cross-shareholding-unwinding-economics
source_hash: b379c3120db556d0
lang: zh
status: machine
fidelity: ok
title: "日本交叉持股解除经济学"
translated_at: 2026-05-31T06:16:15.667Z
---

# 日本交叉持股解除经济学

## Wiki route

本条目位于 [[finance/INDEX|finance domain]] 下。可与上市金融集团、activist investor playbook 和大量持股披露页面一并阅读。

## TL;DR

日本的交叉持股（政策保有株，*seisaku hoyū kabushiki*，或称"政策持股"）是上市企业出于关系维护而非投资回报目的，持有业务合作方、客户、供应商、银行及集团公司股份的历史性惯例。2015 年后公司治理守则历次修订，加之 2018 / 2021 / 2024, 年 FSA / METI 的持续强化，推动了持续的解除持股计划。会计处理已由成本法 / 可供出售金融资产转为 IFRS 9 项下通过其他综合收益以公允价值计量（处置时不转回损益），及修订版日本会计准则（J-GAAP）下类似的以公允价值计入其他综合收益的处理方式。税务高效的处置途径包括市场销售、ToSTNeT 大宗交易、发行人股票回购，以及可交换债券货币化。大型银行（[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]]）、保险公司和综合商社（[[JapanFG/mitsubishi-corp|Mitsubishi Corp]]、[[JapanFG/mitsui-co|Mitsui & Co]]、[[JapanFG/itochu-corp|Itochu Corp]]）是解除持股计划的领头力量。

## 政策持股的认定标准

| 字段 | 详情 |
|---|---|
| 定义 | 出于非纯投资目的持有的股权，通常为维持业务关系 |
| 披露触发 | TSE 公司治理守则要求上市企业披露政策持股及持有理由 |
| 阈值 | 前几大持股须在有价证券报告书中逐项披露；其余部分汇总披露 |
| 反向持股 | 相互持股（*sōgo mochiai*），即双方互持对方股份 |
| 表决权 | 政策持股股东通常支持管理层投票；维权投资者的审查日益增强 |

定义基于原则。一项持股可根据声明目的在纯投资（*jun-tōshi*）与政策持股之间重新归类。重新归类本身即构成公司治理守则的披露事件。

## 监管压力轨迹

| 年份 | 进展 |
|---|---|
| 2014 | 引入尽职管理守则 |
| 2015 | 首版公司治理守则，含政策持股披露原则 |
| 2018 | 公司治理守则修订，收紧政策持股披露及董事会审查义务 |
| 2021 | 公司治理守则修订，推动 Prime 上市公司进行更严格的审查 |
| 2023-2024 | FSA、JPX、METI 加大公开宣传，批评解除持股进度不足；TSE Prime 市场改革强化要求 |
| 持续 | 每年由董事会逐项审查政策持股的持续理由 |

公司治理守则采用"遵从或解释"原则。上市企业须就政策持股政策、董事会审查流程及逐项持股的经济理由进行公开披露。

### IFRS 9 （适用 IFRS 的发行人）

| 字段 | 处理方式 |
|---|---|
| 分类 | 股权工具默认以公允价值计入损益，除非在初始确认时不可撤销地指定为通过其他综合收益计量 |
| OCI 选择权 | 政策持股通常适用 — 指定为以公允价值计入其他综合收益，以避免损益波动 |
| 股息 | 确认计入损益 |
| 公允价值变动 | 确认计入其他综合收益 |
| 处置 | 不转回损益；累计盈亏仅在权益内转移 |
| 减值 | OCI 项下股权不适用减值测试（无需减值测试，但公允价值反映市场情况） |

不转回损益规则意味着处置不产生损益收益。这是相对于传统 IAS 39 可供出售模型（已实现收益计入损益）的关键会计激励变化。

### 修订版日本会计准则（J-GAAP）

适用 J-GAAP 的发行人在最近修订后，其应市权益也采用 OCI 公允价值计量且类似不转回损益的处理，与 IFRS 9趋于一致。

| 字段 | 修订版 J-GAAP 处理方式 |
|---|---|
| 可市价应市权益（非交易） | 以公允价值计入其他综合收益 |
| 股息 | 计入损益 |
| 公允价值变动 | 计入其他综合收益 |
| 处置损益 | 在其他综合收益内实现，不转回损益（修订后） |
| 非可市价资产 | 依实体情况采用成本法或减值基础 |

尚未完全应用公允价值计入其他综合收益的传统 J-GAAP 发行人应结合具体情况解读；趋势方向是向等同 IFRS 处理方式靠拢。

## 税务高效处置途径

| 途径 | 机制 | 税务效率 |
|---|---|---|
| 场内市场出售 | 通过交易所卖出 | 标准企业所得税处理；收益须纳税 |
| ToSTNeT 大宗交易 | JPX 非竞价大宗交易 | 税务处理相同，对市场的冲击较小 |
| 发行人股票回购 | 发行人从持有方回购自身股份 | 处理为视同股息 + 资本利得分摊；对持有方可能具有税务效率 |
| 可交换债券 | 发行人通过可交换债券货币化持股 — 参见 [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] | 递延至转换时处置；债券持有人承担股权风险 |
| 分拆 / 部分分拆 | 将持有股份分配给自身股东 | 可能适用税务递延途径 — 参见 [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] |
| 实物股息 | 将持有股份作为实物股息分配给股东 | 视为实物股息；税务处理取决于结构 |
| 对向交易 | 与反向持股方协调出售 | 对称解除持股 |
| 拍卖 / 二次股票发行 | 通过二次股票发行配售大宗股份 | 通常用于超大规模持股 |

处置收益的企业所得税是主要的税务摩擦。发行人股票回购机制将部分处置所得转为视同股息，该部分通常可在日本受益股息不计入收益规则（受取配当益金不算入）下获得部分免税。

## 解除持股的战略信号

| 信号 | 解读 |
|---|---|
| 大型银行加速解除 | 彰显公司治理守则合规，释放资本，支持 CET1 比率 |
| 综合商社有选择地解除 | 部分保留作为战略 / 供应链锚；处置纯金融持股 |
| 保险公司解除 | 资产负债管理与偿付能力边际对齐；降低股权波动负担 |
| 反向持股方不对称解除 | 一方单独处置可能暗示关系恶化 |
| 维权投资者施压下的解除 | 维权投资者通常要求处置政策持股以资助回购 / 分红 |
| 保留理由 | 2024 年后预期须有详尽的董事会审查披露 |

处置持股的持有方通常将解除持股与资本回报计划（股票回购、提高分红）配套，以表明释放资本是返还给股东而非以低回报率再投资。

## 同业比较框架

正确的比较应使用公开披露的有价证券报告书持股数据及公司治理报告披露信息。

### 大型银行

| 集团 | 公开披露来源 |
|---|---|
| [[JapanFG/mufg|MUFG]] | MUFG 年度有价证券报告书及综合报告；TSE 公司治理报告 |
| [[JapanFG/smfg|SMFG]] | SMFG 年度有价证券报告书及综合报告；TSE 公司治理报告 |
| [[JapanFG/mizuho-fg|Mizuho FG]] | 瑞穗金融集团年度有价证券报告书及综合报告；TSE 公司治理报告 |

大型银行已公开承诺制定多年期政策持股削减目标（通常以 CET1 资本的比例或账面 / 公允价值绝对余额表示）。披露周期与年度财务报告周期一致。

### 综合商社

| 集团 | 持股概况 |
|---|---|
| [[JapanFG/mitsubishi-corp|Mitsubishi Corp]] | 交叉持股包括集团 / 合作伙伴股权，主要头寸公开披露 |
| [[JapanFG/mitsui-co|Mitsui & Co]] | 公开披露政策持股及理由 |
| [[JapanFG/itochu-corp|Itochu Corp]] | 公开披露政策持股及理由；伊藤忠在处置方面相对积极 |

综合商社的政策持股通常包括上游 / 中游 / 下游产业链中的战略股权。处置节奏因对方战略重要性而异。

### 保险公司

大型寿险和非寿险集团历史上持有规模庞大的股票组合。在公司治理守则修订和 IFRS 9等效会计变更之后，处置计划明显加速。偿付能力 / 资产负债管理压力驱动结构性退出。

### 制造业和贸易伙伴

工业企业与供应商、客户及集团公司之间存在交叉持股。处置节奏差异显著；水泥、造纸、钢铁、电子和汽车行业仍有较多残余交叉持股。

## 披露渠道

| 渠道 | 文件 |
|---|---|
| 有价证券报告书 | 年度申报；逐项披露主要持股及理由 |
| 公司治理报告 | TSE 公司治理守则合规定期报告；政策持股政策 |
| 综合报告 | 自愿性年度叙述报告；通常含政策持股战略详情 |
| TDnet | 重大处置 / 收购的及时披露 |
| EDINET 大量持股报告 | 处置导致持股比例下降超过 5  百分点时，须提交变更报告（参见 [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]） |
| 股东大会召集通知 | 政策持股的表决政策详情；可能成为维权提案事项（参见 [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]]） |

## 维权投资者接口

维权投资者越来越多地将交叉持股作为资本效率议题提出。典型维权诉求包括：

- 处置政策持股，通过回购 / 分红归还所得。
- 强化董事会层面的审查力度和披露严谨度。
- 设立独立委员会监督政策持股政策。
- 要求反向持股方对等处置。

参见 [[finance/japan-activist-investor-playbook|activist playbook]] 了解诉求与应对路径。

## 处置信息管控

大规模处置会影响股价的信息。处置前信息须依据《金融商品交易法》的内幕交易规定及 FSA 公平披露框架进行管控。内幕信息处理核心参见 [[finance/japan-fair-disclosure-and-insider-trading-controls|Japan fair disclosure and insider trading controls]]。

| 问题 | 管控要点 |
|---|---|
| 信息泄露 | 内幕知情人员限制名单、交易代号、IT 管控 |
| 大宗交易撮合商选择 | 附保密协议的 RFP，通常为 [[finance/japan-ib-league-table|league-table]] 家机构 |
| 定价流程 | 拍卖或 RFQ，尽量减少对执行价格的冲击 |
| 时机与发行人财报的关系 | 避免与窗口期交易冲突 |
| 对方接触 | 反向持股方对等处置情形下的协商 |

## 资本与公司治理守则含义

政策持股影响监管资本及资本效率指标：

| 指标 | 处置效果 |
|---|---|
| 大型银行 CET1 / 风险加权资产 | 减少股权风险加权资产负担；支持 CET1 比率 |
| 保险公司偿付能力边际 | 减少股权风险配置，支持偿付能力边际 |
| 企业 ROE | 处置可资助回购，缩小股本基础，提升 ROE |
| 资本效率叙事 | 向注重资本配置的投资者展示约束力 |
| TSE Prime PBR-1x 要求 | 处置并返还股东支持 PBR 提升叙事 |

## TSE PBR-1x 举措

TSE Prime 市场明确向持续 PBR 低于 1x 的上市公司施压，要求发布资本效率改善计划。处置交叉持股是这些计划中常被引用的举措之一，此外还包括回购、提高分红和资产处置。

## Related

- [[finance/INDEX]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/cross-border-m-a-japan]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[banking/regional-bank-consolidation-pattern]]
- [[corporate-strategy/partial-spinoff-tax-deferral]]
- [[securities/japan-underwriting-market-structure]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[JapanFG/mitsubishi-corp]]
- [[JapanFG/mitsui-co]]
- [[JapanFG/itochu-corp]]
- [[JapanFG/dbj]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Corporate Governance hub and CG-code revision pages.
- JPX: Corporate Governance Code (English) and TDnet timely-disclosure overview.
- METI: M&A guideline publication hub.
- EDINET: securities reports and large-shareholding reports.
- BOJ research notes on equity-holding structure.
- NTA: corporate-tax overview pages.

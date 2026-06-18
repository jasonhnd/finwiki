---
source: finance/japan-convertible-bond-mechanics
source_hash: fb3b125eddbde36a
lang: zh
status: machine
fidelity: ok
title: "日本可转换债券机制"
translated_at: 2026-06-18T23:59:13.066Z
---

# 日本可转换债券机制

## Wiki 路径

本页位于 [[finance/INDEX|finance domain]] 之下。请与 [[finance/japan-ib-league-table|Japan IB league table]]（账簿管理人归属）、[[securities/japan-underwriting-market-structure|underwriting market structure]]（发行的底层配管）、[[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]]（信息披露流程的类比物）、[[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]]（发行前的信息处理）以及 [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]（转换后的所有权追踪）对照阅读。

## TL;DR

日本可转换债券（転換社債型新株予約権付社債，依结构常被称为 CB 或 MSCB）是一种内嵌股权转换权的债务证券。发行流程：发行体董事会决议 → 主承销商 → 簿记建档 → 定价（票息、转换溢价、期限、赎回 / 回售时间表）→ TDnet / EDINET 披露 → 结算 → 潜在的转换 / 赎回 / 回售。对于普通（vanilla）发行，转换溢价通常高于参考价 15-40 percent。对冲投资者通常以股票波动率对债底（bond floor）进行套利。发行所致的稀释及股东投票的处理，取决于发行结构（第三方配售 vs 公开发行）与稀释幅度。

## 产品分类

| 类别 | 日文术语 | 结构性注记 |
|---|---|---|
| 普通可转债 | 転換社債型新株予約権付社債 (内嵌认股权证的 CB) | 固定转换价、票息、期限、硬性 / 软性赎回保护 |
| 零息可转债 | Zero-coupon CB | 在日本大型股发行中常见；CB 市场波动率吸收投资者收益 |
| 带看涨价差的可转债 | CB 加场外看涨价差(call-spread)叠加 | 对发行体而言实质上提高了转换溢价 |
| MSCB (可转换价格修正型 CB) | MSCB / 行使価額修正条項付転換社債 | 转换价随股价向下重设；存在显著稀释风险 |
| 可交换债券 | 交換社債 | 可交换为发行体所持另一家上市公司股票的债券 (如持股交叉的货币化) |
| 强制转换债 | Mandatory CB | 到期强制转换；行为上更接近股权 |
| 含 CB 部分的股东配售增发 | 株主割当 | 按比例向既有股东发行 |

普通零息 CB 与可交换债券是日本大型股的主导格式。MSCB 因声誉与稀释方面的顾虑在大型股层面较为少见，但出现在部分中小型股重组的情境中。

## 发行流程

| 阶段 | 活动 | 公开来源 |
|---|---|---|
| 董事会决议 | 董事会批准发行原则、结构、规模、募集资金用途 | TDnet 发布 |
| 主承销商委任 | 发行体遴选账簿管理人及联席经办人 | 委任常在 TDnet 定价发布中披露 |
| 结构设计 | 主承销商设计票息、转换溢价、赎回 / 回售时间表、反稀释、对冲机制 | 定价前不公开 |
| 预营销 | 主承销商对关键投资者进行预探询 | 受 [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] 约束 |
| 簿记建档 | 经营销的簿记建档，常在盘后或隔夜进行 | TDnet 启动与定价发布 |
| 定价 | 设定最终条款：票息、转换价、溢价、赎回 / 回售 | EDINET 有价证券申报书 (yūkasai-keikoku-shorui)、TDnet 发布 |
| 结算 | 现金结算与债券交付 | 结算通知 |
| 上市 | 在 TOKYO PRO-BOND Market 的债券上市，或非上市的机构私募 | 若上市则发 JPX 上市通知 |
| 发行后 | 转换通知、赎回 / 回售行使、票息支付 | TDnet / EDINET 修订 |

许多日本 CB 在盘后隔夜启动并于当日定价，以将对发行体股价的市场风险敞口降至最低。从启动到定价的窗口通常为数小时。

## 转换溢价经济性

转换溢价是债券转换时高于参考股价的百分比。

| 溢价区间 | 典型情境 |
|---|---|
| 0-10 percent | 困境 / 重组 CB、MSCB、低波动率发行体 |
| 15-25 percent | 标准中端市场普通 CB |
| 25-40 percent | 具高隐含波动率的大型蓝筹 CB |
| 40-60 percent | 需求强劲的高波动率科技 / 成长型发行体 |
| 60+ percent | 看涨价差结构、强制转换特征 |

参考股价通常是条款书中所定义的特定定价窗口内的成交量加权平均价（VWAP）。

隐含波动率、信用利差、股息率与股票借券成本，均输入债底与期权价值的计算。股票波动率越高，通常支撑越高的转换溢价。

## 债底与期权价值

CB 价格在经济上分解为债底（按信用调整后收益率计的票息与本金 NPV）加上对股票的内嵌看涨期权。

| 组成 | 驱动因素 |
|---|---|
| 债底 | 票息、本金、收益率曲线、信用利差 |
| 期权价值 | 股价、转换比率、波动率、时间、股息、利率 |
| CB 总价值 | 债底 + 期权价值 (就早赎 / 回售特征作调整) |

投资者分为：

| 投资者类型 | 策略 |
|---|---|
| 纯多头基本面型 | 做多 CB 以博取非对称上行；票息 + 转换期权 |
| 可转债套利 | 做多 CB、按 delta 中性对冲比率做空股票；收割波动率 |
| 股权挂钩收益型 | 侧重信用与收益的纯多头 |
| 强制转换 / 优先股等价型 | 到期时视作准股权 |

可转债套利对冲基金是全球主要需求来源；日本的需求构成包括国内寿险公司、资产管理公司，以及海外的可转债专注型基金。

## 对冲比率（delta）

对冲比率衡量 CB 价格对股价变动的敏感度。

| Delta | 释义 |
|---|---|
| 0.0-0.3 | 债券型行为；深度价外 |
| 0.3-0.5 | 均衡；普通 CB 发行时的标准区间 |
| 0.5-0.8 | 股权敏感；股价已朝行使价上行 / 已升破行使价 |
| 0.8-1.0 | 股权等价；深度价内，转换可能性高 |

套利投资者通常针对其做多的 CB 头寸借入股票。股票借券的可得性与成本是定价的输入。借券受限会压缩需求。

## 赎回与回售保护

| 特征 | 说明 |
|---|---|
| 硬性赎回保护 | 发行体在指定日期前不得赎回 |
| 软性赎回保护 | 发行体仅在股价高于阈值交易时方可赎回 (如：在 30 个交易日中的 20 内，股价达到转换价的 130 percent) |
| 发行体赎回 | 按面值或指定溢价赎回的权利 |
| 投资者回售 | 在指定日期按面值或指定溢价回售的权利 |
| 控制权变更回售 | 触发既定控制权变更时的回售权 |
| 税务赎回 | 税法变更影响票息可扣除性时的赎回权 |
| 补足条款 (make-whole) | 就早赎所损失的期权价值向投资者补偿 |

一份典型的日本普通 CB 设有 3-4 年的硬性赎回保护，其后转为软性赎回，并在中间区间设置回售日 (如在 10年期结构中的第 3, 5, 7 年)。

## 稀释分析

| 字段 | 计算 |
|---|---|
| 转换股数 | CB 面值 / 转换价 |
| 稀释百分比 | 转换股数 / (既有股数 + 转换股数) |
| 库存股抵消 | 发行体可动用库存股交付，从而降低新发行所致的稀释 |
| 反稀释调整 | 转换价就股票分割、股息、配股等作调整 |

显著稀释 (高于非正式的投资者阈值，如 ~20-25 percent) 会引发：

- 当带有利条件的第三方配售触发特别决议规则时，公司法下的股东投票要求。
- 针对重大稀释性发行的 TSE / JPX 披露义务 (特定的报告与理由说明)。
- 既有股东的反馈风险；可能的维权（activist）回应 — 参见 [[finance/japan-activist-investor-playbook|activist playbook]] 与 [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]]。

## 股东投票方面的考量

在公司法之下，股票发行路径决定投票要求。

| 路径 | 投票要求 |
|---|---|
| 公开发行 (kōbo) | 通常董事会决议即足够；受 TSE 规则与稀释阈值约束 |
| 第三方配售 (daisansha wariate) | 若条件并非特别有利，董事会决议即足够；条件有利时需特别股东决议 |
| 大幅稀释 | 对于显著稀释，TSE 规则可能要求独立委员会意见或股东投票 |
| 股东配售 | 向既有股东的优先（pre-emptive）配售 |

CB 发行遵循类似规则，因为转换会创设新股。定价流程的文档支持「并非特别有利」的结论。关于发行前的信息处理，参见 [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]]。

## 披露界面

| 界面 | 文件 |
|---|---|
| 启动前 | TDnet 董事会决议发布 |
| 启动 | TDnet 启动通知、EDINET 有价证券申报书 (有価証券届出書) |
| 定价 | 含最终条款的 TDnet 定价发布 |
| 结算 | TDnet 结算通知 |
| 上市 | JPX 债券上市通知 (若上市) |
| 持续 | 经由 TDnet 的票息支付、转换通知、赎回 / 回售行使 |
| 转换驱动的所有权变动 | EDINET 大量持股报告 (参见 [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]) |

EDINET 申报具法定且权威性；TDnet 申报提供及时的市场传播。当 CB 是更大规模资本结构交易的一部分时，两条路径均输入 [[finance/japan-tender-offer-process|tender offer process]] 式的市场影响分析。

## 主承销商归属

| 银行 | 在日本 CB 中的角色 |
|---|---|
| [[securities-firms/nomura-hd|Nomura]] | 常任主账簿管理人、结构设计代理 |
| [[securities-firms/daiwa-sg|Daiwa]] | 常任主账簿管理人 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 巨型银行联盟的主承销商及联席经办人 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 巨型银行联盟的主承销商及联席经办人 |
| Mitsubishi UFJ Morgan Stanley (MUMSS) | 巨型银行 / 全球合资的主承销商 |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 跨境 / 结构化 CB 主承销商 |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | 跨境 / 结构化 CB 主承销商 |
| 其他外资银行 | 全球分销份额的跨境主承销商 |

排行榜（league-table）信用通过 [[finance/japan-ib-league-table|league table]] 来源分配，并将 ECM / 股权挂钩类别加以区分。普通零息 CB 的簿记建档通常由一到两家主承销商锚定。

## 日本上市企业近期的大型 CB

仅为流程层面的公开观察。FinWiki 不保存私有条款。

| 发行体类别 | 公开的流程观察 |
|---|---|
| 大型股科技 | 经由 TDnet / EDINET 披露的、带看涨价差叠加的多档（multi-tranche）零息 CB |
| 大型股汽车 / 工业 | 用于再融资、资本开支或并购的数十亿日元级 CB 分档 |
| 可交换为持股交叉 | 用于货币化持股交叉的可交换债券 — 参见 [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] |
| 成长型发行体 (Prime / Standard / Growth) | 用于资本开支 / 并购的中型股 CB 发行 |

具体发行条款请交叉参考公开的 TDnet / EDINET 申报。

## 募集资金用途

| 用途 | 频率 |
|---|---|
| 再融资既有债务 | 非常常见 |
| 资本开支 / 研发 | 常见 |
| 并购储备资金 | 常见 |
| 股票回购对冲 | 较少见，有时与库存股计划搭配 |
| 持股交叉货币化 (可交换) | 针对性用例 |
| 一般公司用途 | 在常规发行中常见 |

就募集资金用途，EDINET 申报书中要求发行体披露。

## 关联

- [[finance/INDEX]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-underwriting-market-structure]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## 来源

- FSA: FIEA 公开收购 FAQ 与有价证券申报框架。
- JPX: TDnet 及时披露概览与上市公司检索。
- EDINET: 有价证券申报书与大量持股报告。
- Japanese Law Translation: 公司法 (股票发行、第三方配售、特别决议)。
- BOJ: 市场统计公开枢纽。
- Nomura、Daiwa: 投资银行与股权挂钩公开材料。

---
source: finance/japan-convertible-bond-mechanics
source_hash: ad123e3128027510
lang: zh
status: machine
fidelity: ok
title: "日本可转换债券机制"
translated_at: 2026-05-31T06:16:15.748Z
---

# 日本可转换债券机制

## Wiki route

This page sits under [[finance/INDEX|finance domain]]. Read it with [[finance/japan-ib-league-table|Japan IB league table]] for bookrunner attribution, [[securities/japan-underwriting-market-structure|underwriting market structure]] for the issuance plumbing, [[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]] for the disclosure-process analogue, [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] for pre-launch information handling, and [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] for post-conversion ownership tracking.

## 摘要

日本可转换债券（転換社債型新株予約権付社債，依结构通常称为 CB 或 MSCB）是一种附有股权转换权的债券。发行流程：发行人董事会决议 → 主承销商 → 簿记建档 → 定价（票面利率、转换溢价、期限、赎回/回售安排）→ TDnet/EDINET 披露 → 交割 → 潜在转换/赎回/回售。普通结构的转换溢价通常为参考价格以上 15-40 %。对冲投资者通常对股票波动率与债券底价进行套利。发行稀释及股东会处理取决于发行结构（第三方配售 vs 公开发行）及稀释幅度。

## 产品分类

| 类型 | 日文名称 | 结构说明 |
|---|---|---|
| 普通可转换债券 | 転換社債型新株予約権付社債（附嵌入认股权证的 CB） | 固定转换价格、票面利率、期限、硬性/软性赎回保护 |
| 零息可转换债券 | Zero-coupon CB | 日本大型股发行中常见；CB 市场波动率吸收投资者收益 |
| 附看涨价差的可转换债券 | CB plus over-the-counter call-spread overlay | 实质上为发行人提高转换溢价 |
| MSCB（浮动行权价 CB） | MSCB / 行使価額修正条項付転換社債 | 转换价格随股价下调重置；稀释风险显著 |
| 可交换债券 | 交換社債 | 可交换为发行人持有的另一家上市公司股票（如交叉持股变现） |
| 强制可转换债券 | Mandatory CB | 到期强制转换；行为更接近股权 |
| 附 CB 要素的优先认股权发行 | 株主割当 | 按比例向现有股东发行 |

零息普通可转换债券和可交换债券是日本大型股的主流形式。MSCB 在大型股层面因声誉和稀释顾虑较少见，但在部分中小型股重组场景中有所出现。

## 发行流程

| 阶段 | 活动 | 公开来源 |
|---|---|---|
| 董事会决议 | 董事会批准发行原则、结构、规模、募集资金用途 | TDnet 公告 |
| 主承销商委任 | 发行人选定主簿记行和联席经理 | 委托通常在 TDnet 定价公告中披露 |
| 结构设计 | 主承销商设计票面利率、转换溢价、赎回/回售安排、反稀释条款、对冲机制 | 定价前保密 |
| 预路演 | 主承销商向核心投资者预先探询 | 须遵守 [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] |
| 簿记建档 | 市场化簿记建档，通常在交易时间结束后或隔夜 | TDnet 发行及定价公告 |
| 定价 | 确定最终条款：票面利率、转换价格、溢价、赎回/回售条款 | EDINET 证券注册文件（有価証券届出書）、TDnet 公告 |
| 交割 | 现金结算及债券交付 | 交割通知 |
| 上市 | 在东京 PRO-BOND 市场上市或作非上市机构配售 | 如上市则发 JPX 上市通知 |
| 发行后 | 转换通知、赎回/回售行使、票息支付 | TDnet/EDINET 补充文件 |

许多日本 CB 在交易结束后隔夜发行并当天定价，以最大程度减少发行人股价的市场风险敞口。从发行到定价的窗口通常为数小时。

## 转换溢价经济学

转换溢价是债券转换价格高于参考股价的百分比。

| 溢价区间 | 典型情境 |
|---|---|
| 0-10 % | 困境重组 CB、MSCB、低波动率发行人 |
| 15-25 % | 标准中端市场普通 CB |
| 25-40 % | 隐含波动率高的大型蓝筹股 CB |
| 40-60 % | 需求强劲的高波动率科技/成长型发行人 |
| 60+% | 看涨价差结构、强制转换特征 |

参考股价通常为条款表规定的特定定价窗口内的成交量加权平均价（VWAP）。

隐含波动率、信用利差、股息收益率和股票借贷成本共同影响债券底价和期权价值计算。股权波动率越高，通常支持越高的转换溢价。

## 债券底价与期权价值

CB 价格在经济上可分解为债券底价（按信用调整收益率折现的票息和本金现值）加上股票嵌入看涨期权价值。

| 组成部分 | 驱动因素 |
|---|---|
| 债券底价 | 票面利率、本金、收益率曲线、信用利差 |
| 期权价值 | 股价、转换比率、波动率、时间、股息、利率 |
| CB 总价值 | 债券底价 + 期权价值（含提前赎回/回售特征的调整） |

投资者分类：

| 投资者类型 | 策略 |
|---|---|
| 纯基本面投资者 | 持有 CB 博取不对称上涨；票息 + 转换期权 |
| 可转换套利 | 持有 CB、按 delta 中性对冲比率做空股票；收获波动率 |
| 股权挂钩收益 | 以信用和收益为重点的直接持有 |
| 强制转换/类优先股 | 到期视为准股权 |

可转换套利对冲基金是全球主要需求来源；日本需求构成包括国内寿险公司、资产管理公司及境外可转换债券专项基金。

## 对冲比率（Delta）

对冲比率衡量 CB 价格对股价变动的敏感度。

| Delta | 含义 |
|---|---|
| 0.0-0.3  | 类债券行为；深度价外 |
| 0.3-0.5  | 均衡状态；普通 CB 发行时的标准区间 |
| 0.5-0.8  | 股权敏感；股价已涨至接近或超过行权价 |
| 0.8-1.0  | 类股权；深度价内，转换概率高 |

套利投资者通常以持有 CB 多头头寸来借入股票。股票借贷的可得性和成本是定价输入变量。借贷受限可能压缩需求。

## 赎回与回售保护

| 条款 | 说明 |
|---|---|
| 硬性赎回保护 | 发行人在指定日期前不得赎回 |
| 软性赎回保护 | 仅当股价在 20 个交易日中的 30 个交易日超过转换价格的 130 % 时方可赎回 |
| 发行人赎回权 | 以面值或指定溢价提前赎回的权利 |
| 投资者回售权 | 在指定日期以面值或指定溢价回售的权利 |
| 控制权变更回售 | 触发定义的控制权变更时的回售权利 |
| 税务赎回 | 税法变更影响票息可扣除性时的赎回权利 |
| 补偿条款 | 对提前赎回损失的期权价值进行补偿 |

日本典型的普通 CB 通常含 3-4 年硬性赎回保护，其后为软性赎回，并在中间阶段设有回售日（如 10年期结构中的第 3, 、5, 、7 年）。

## 稀释分析

| 项目 | 计算方式 |
|---|---|
| 转换股数 | CB 面值 / 转换价格 |
| 稀释比例 | 转换股数 /（现有股数 + 转换股数） |
| 库存股抵减 | 发行人可用库存股交付，降低新股发行稀释 |
| 反稀释调整 | 转换价格按股票分拆、股息、配股等进行调整 |

较大稀释（超过投资者非正式阈值，如约 20-25 %）将引发：

- 依《公司法》，以有利条款向第三方配售时，触发特别决议规定，需要股东大会决议。
- 东京证券交易所/JPX 对重大稀释性发行的披露义务（具体报告及理由说明）。
- 现有股东反馈风险；可能引发积极股东行动 — 参见 [[finance/japan-activist-investor-playbook|activist playbook]] 和 [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]]。

## 股东大会审议事项

依《公司法》，股票发行路径决定投票要求。

| 路径 | 投票要求 |
|---|---|
| 公开发行（公募） | 董事会决议通常足够；受东京证券交易所规则和稀释阈值约束 |
| 第三方配售（第三者割当） | 非特别有利条款时，董事会决议足够；条款特别有利时需股东特别决议 |
| 大幅稀释 | 东交所规则对重大稀释发行可能要求独立委员会意见或股东表决 |
| 优先认股权发行 | 向现有股东按比例发行 |

CB 发行遵循类似规则，因为转换将产生新股。定价过程文件佐证"非特别有利"的结论。参见 [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] 了解发行前信息处理。

## 披露渠道

| 渠道 | 文件 |
|---|---|
| 发行前 | TDnet 董事会决议公告 |
| 发行 | TDnet 发行通知、EDINET 证券注册文件（有価証券届出書） |
| 定价 | TDnet 最终条款定价公告 |
| 交割 | TDnet 交割通知 |
| 上市 | JPX 债券上市通知（如上市） |
| 持续 | 票息支付、转换通知、赎回/回售行使通过 TDnet |
| 转换引起的持股变化 | EDINET 大额持股报告（参见 [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]） |

EDINET 文件具有法定效力；TDnet 文件提供及时市场传播。当 CB 为较大资本结构交易的一部分时，两个渠道的信息均可用于 [[finance/japan-tender-offer-process|tender offer process]] 式市场影响分析。

## 主承销商归因

| 银行 | 在日本 CB 中的角色 |
|---|---|
| [[securities-firms/nomura-hd|Nomura]] | 常任主簿记行、结构设计顾问 |
| [[securities-firms/daiwa-sg|Daiwa]] | 常任主簿记行 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 与大型银行集团挂钩的主承销和联席经理 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 与大型银行集团挂钩的主承销和联席经理 |
| 三菱 UFJ 摩根士丹利（MUMSS） | 大型银行集团/全球合资主承销 |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 跨境/结构化 CB 主承销 |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | 跨境/结构化 CB 主承销 |
| 其他外资银行 | 全球部分的跨境主承销行 |

联赛排名资信通过 [[finance/japan-ib-league-table|league table]] 来源分配，区分股权资本市场/股权挂钩类别。零息普通 CB 的簿记建档通常由一两家主承销行主导。

## 近期日本上市公司大额 CB

仅为流程层面的公开记录。FinWiki 不储存私下条款。

| 发行人类别 | 公开流程记录 |
|---|---|
| 大型科技股 | 通过 TDnet/EDINET 披露的多笔零息 CB（含看涨价差叠加） |
| 大型汽车/工业股 | 数十亿日元 CB 用于再融资、资本开支或并购 |
| 可交换为交叉持股 | 用于变现交叉持股的可交换债券 — 参见 [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] |
| 成长型发行人（东交所主板/标准板/成长板） | 中型股 CB 用于资本开支/并购 |

具体发行条款请交叉参考 TDnet/EDINET 公开文件。

## 募集资金用途

| 用途 | 频率 |
|---|---|
| 偿还现有债务 | 非常普遍 |
| 资本开支/研发 | 普遍 |
| 并购储备资金 | 普遍 |
| 股份回购对冲 | 较少，有时与库存股计划搭配 |
| 交叉持股变现（可交换债券） | 特定场景 |
| 一般公司用途 | 常规发行中普遍 |

发行人须在 EDINET 注册文件中披露募集资金用途。

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

- FSA：《金融商品交易法》要约收购 FAQ 及证券注册框架。
- JPX：TDnet 及时信息披露概要及上市公司查询。
- EDINET：证券注册文件及大额持股报告。
- 日本法律翻译：《公司法》（股票发行、第三方配售、特别决议）。
- 日本银行：市场统计公开数据。
- 野村证券、大和证券：投资银行及股权挂钩公开资料。

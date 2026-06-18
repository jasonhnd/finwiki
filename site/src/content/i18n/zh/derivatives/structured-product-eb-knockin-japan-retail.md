---
source: derivatives/structured-product-eb-knockin-japan-retail
source_hash: 664d30fd60c1dcd6
lang: zh
status: machine
fidelity: ok
title: "EB 敲入结构化产品 日本零售"
translated_at: 2026-06-18T23:33:48.355Z
---

# EB 敲入结构化产品 日本零售

## TL;DR

EB（*Equity Bond*）敲入是通过 2022 在日本零售财富管理中分销最多的结构化产品形式。从机制上看，买方**做空**单一日本股票（或最差表现篮子）的**向下敲入看跌期权**，以换取增强的票息以及（在自动赎回变体中）提前赎回的机会。醒目的票息（通常年化 5-15 百分点）吸引了渴求收益的零售客户。**尾部风险**是二元的：若表现最差的参照资产跌破敲入障碍（通常为初始的 50-70 百分点），投资者将以原始执行价被交付股票（或现金等价物），而非收到面值。单次事件中本金 30-70 百分点的损失是已经发生的结果。**2022-2023 的 FSA 整顿**及其后 JSDA 自律规则的收紧，将 EB 敲入分销作为最优先的零售保护议题加以针对；对 [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]] 子公司的行政命令迫使主要分销商暂停或限制 EB 敲入零售销售。

## Wiki 路径

本条目位于 [[derivatives/INDEX|derivatives index]] 之下，作为关于最具决定意义的日本零售结构化产品形式的、最为深入的单一产品页面。请与 [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]]（更广泛的分销格局）、[[derivatives/japan-cds-market-overview|Japan CDS market overview]]（信用衍生品背景）、[[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]（发行体信用维度）、[[derivatives/japan-irs-market|Japan IRS market]]（EB 定价所用的利率基底）以及 [[derivatives/yen-basis-swap-market|yen basis swap market]]（融资曲线背景）一并阅读。

请交叉参照 [[finance/INDEX|finance index]] 以了解更广泛的资本市场框架、[[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] 以了解使用类似数学的机构股票连动对应物、[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] 以了解相关的单一股票流动性动态、[[banking/INDEX|banking index]] 以了解巨型银行分销背景、[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] 以了解与机构结构化配置的对比，以及 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] 以了解交易商对冲一侧。

### 醒目机制

| 组成部分 | 典型的零售分销 EB 敲入 |
|---|---|
| 形式 | 由 SPV 或银行发行的、内嵌股票衍生品的债券 |
| 货币 | JPY（最常见）或 USD（用于货币叠加变体） |
| 期限 | 1-5 年（通常 3 年）；因自动赎回特性而缩短 |
| 标的 | 单一日本上市股票 OR 3-5 只股票的最差表现篮子 |
| 初始参照价格 | 执行日的收盘价（S₀） |
| 敲入障碍 | S₀ 的 50-70 百分点（最常见：60 百分点） |
| 自动赎回阈值 | 观测日 S₀ 的 100 百分点 |
| 票息 | 年化 5-15 百分点；仅在无敲入触发时支付的「条件票息」 |
| 敲入观测 | 存续期内连续（盘中触及）OR 仅到期时的欧式观测 |
| 赎回 | 无敲入则面值；敲入则以执行价交付股票（或现金等价物） |

### 最差表现篮子变体

| 特征 | 详情 |
|---|---|
| 标的数量 | 通常 3-5 只股票 |
| 最差表现规则 | 收益由表现最差的参照资产决定 |
| 相关性影响 | 相关性越低 → 某一资产跌破的概率越高 → 票息越高 |
| 分散效应 | 反直觉：标的越多，最差表现概率越增加，而非分散 |

最差表现篮子是最受批评的零售特征之一：投资者常将篮子视为「分散」，但它实际上是下行的集中。

### 自动赎回特性

| 观测日 | 参照处于或高于自动赎回阈值时的动作 |
|---|---|
| 第 1 年观测 | 参照 ≥ S₀ → 以面值 + 应计票息自动提前赎回 |
| 第 2 年观测 | 相同触发 |
| 第 3 年观测（到期） | 相同触发或适用最终赎回规则 |

自动赎回有利于发行体 / 交易商（提前终止其做空波动率敞口），并为零售买方提供更快的周转与再投资。

### 投资者头寸等价性

```
Long EB knock-in note ≈ Long bond + Short down-and-in put option on underlying
```

该做空看跌期权是以下两者的来源：

- 增强的票息（收到的期权权利金）；
- 尾部风险敞口（障碍以下的二元损失曲线）。

### 到期收益情景

假设单一标的 EB，S₀ = 1000, ，敲入障碍 = 600 （60 百分点），执行价 = 1000, ，本金 = 1,000,000 JPY。

| 情景 | 最终股价 | 结果 |
|---|---|---|
| 股价存续期内始终高于障碍（如 850） | 850 （无敲入事件） | 以面值 1,000,000 JPY 赎回 + 支付全部票息 |
| 股价盘中跌破障碍（如触及 580）但回升至 800 | 800 （敲入触发） | 条件性最终票息被没收；以股票赎回：1,000,000 / 1000 = 交付 1000 股，价值 1000 × 800 = 800,000 JPY（相对本金 20 百分点损失，外加损失的票息） |
| 股价跌破障碍并维持低位 | 500 （敲入触发，低位收尾） | 以 500  交付 1000 股 = 500,000 JPY（相对本金 50 百分点损失，外加损失的票息） |
| 股价严重跌破障碍 | 200 （敲入触发，严重下跌） | 以 200  交付 1000 股 = 200,000 JPY（相对本金 80 百分点损失，外加损失的票息） |

### 敲入观测类型很重要

| 观测类型 | 效果 |
|---|---|
| 连续（任何时点）敲入 | 最为激进；即便盘中触及也触发；在较早的日本零售 EB 中常见 |
| 日收盘观测 | 较不激进；仅日终读数有意义 |
| 欧式（仅到期）观测 | 最不激进；仅最终价格有意义 |

连续敲入比欧式风险实质性更高；许多零售买方并不理解这一区别。

## 交易商的定价组成部分

交易商基于以下因素为内嵌衍生品定价：

| 输入 | 对票据票息的效果 |
|---|---|
| 标的隐含波动率 | 波动率越高 → 期权权利金越高 → 票息越高 |
| 相关性（最差表现） | 相关性越低 → 最差表现波动率越高 → 票息越高 |
| 标的股息率 | 股息越高 → 看涨价值越低 → 视结构可降低或提高票息 |
| 标的借券成本 | 借券越高 → 看涨价值越低 → 影响自动赎回概率 |
| 参照发行体信用利差 | 发行体信用越高 → 债券下限越低 → 票息被调整 |
| 无风险收益率曲线 | 利率越高 → 视方向债券下限越高 / 越低 |
| 障碍水平 | 障碍越低 → 期权价值越少 → 票息越低 |
| 自动赎回阈值 | 阈值越低 → 自动赎回概率越高 → 票息越高 |
| 票据期限 | 期限越长 → 期权价值越多 → 票息越高 |

### 交易商费用负荷

零售购买价格等于公允价值加安排方费用加分销方费用。对日本零售 EB 的行业汇总分析在历史上表明，发行时内嵌的总费用负荷为名义金额的 3-10 百分点，对最复杂的最差表现结构有时更高。费用负荷在较早的销售文件中未被透明披露。

### 对冲

交易商进行背对背对冲：

| 风险 | 对冲工具 |
|---|---|
| 股票 Delta | 做空标的股票 |
| 股票 Gamma（障碍邻近） | 主动的股票或上市期权对冲 |
| 股票 Vega | 上市或 OTC 股票期权头寸 |
| 障碍风险（跳空下行情景） | 难以对冲；由交易商作为库存持有 |
| 相关性（最差表现） | OTC 相关性交易；由交易商作为库存持有 |
| 发行体信用 | 发行体自身的债券 / CDS 对冲 |
| 利率 | 掉期对冲 |

当许多票据共享同一参照名称时，交易商在个别日本股票 EB 对冲上的集中可能成为有意义的流量。

## 零售投资者损失案例研究

EB 敲入分销与若干备受瞩目的零售损失事件相重叠。公开报道的一般模式（非具体交易细节）：

| 事件 | 模式 |
|---|---|
| 2018-2019 的日本金融股 | 参照日本银行 / 保险公司股票的 EB 票据在 2018 的抛售中触发敲入 |
| 2020 年第 1 季度 COVID 崩盘 | 带全球标的的最差表现篮子 EB 随着多个参照同时下跌而触发广泛敲入 |
| 2020-2021 的个别股票暴跌 | 遭遇特异性下跌的名称（如 Vision Fund 减记期间的软银集团、个别科技名称）的单一标的 EB 触发敲入 |
| 2022 年上半年 1 的全球股票抛售 | 参照美国科技与日本科技股票的 EB 票据触发广泛敲入 |
| 2022 年上半年 2 的软银集团波动 | 单一标的软银 EB 票据在持续回撤中触发敲入 |

贯穿这些事件反复出现的模式：零售买方常常未预料到二元损失曲线，并在敲入被触发时感到意外。JSDA / FSA 汇总投诉数据显示，在每次事件之后均出现显著的激增。

### 执法背景

FSA 在**「客户至上」**（顧客本位の業務運営）框架下，自 2021 起加大了对零售结构化债券分销的监督关注。FSA 于 2022 年 10 月的公开声明明确将结构化债券（仕組債）的适当性与披露标记为最优先议题。

### 行政命令 2023



FSA、JSDA 和 SESC 于 2023年采取了协调一致的执法行动：

| 分销商 | 行动类别 |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | 关于结构化债券（含 EB）销售流程与适当性的业务改善命令 |
| [[securities-firms/smbc-nikko|SMBC Nikko Securities]] | 业务改善命令；围绕适当性流程的高级管理层问责 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 业务改善命令；适当性与披露改进 |
| 多家地区银行系券商 | 局部行政行动与自主停业 |

执法行动具体点名 EB 敲入分销为最为尖锐的适当性问题。费用负荷的披露、情景分析（损失图示）与客户适当性评估为主要的失败点。

### 分销商应对

主要分销商在执法之前与之后采取了自愿行动：

| 行动 | 分销商 |
|---|---|
| 暂停新的 EB 敲入零售销售 | 2023 年的多家主要分销商 |
| 将分销限制于合格或经特别批准的客户 | 数家分销商采用了年龄 / 知识 / 经验阈值 |
| 强化披露与记录要求 | 通过 JSDA 自律更新在全行业推行 |
| 完全退出零售结构化债券销售 | 一些地区银行系券商 |
| 将零售产品组合转向更简单的替代品 | 许多分销商强调普通债券、平衡型基金、NISA 合格基金 |

### 销量影响

JSDA / FSA 汇总行业统计表明，零售 EB 敲入销售从 2022 年到 2023年大幅萎缩。许多分销商将 EB 销售削减了 80 百分点或更多。

### 适当性评估

| 要求 | 详情 |
|---|---|
| 知识 / 经验测试 | 客户必须证明对障碍期权机制的理解 |
| 风险画像匹配 | 客户的风险承受能力必须明确涵盖 50百分点以上损失的可能性 |
| 年龄阈值 | 针对超过既定年龄阈值（通常 75 或 80）客户的特殊程序 |
| 集中度限制 | 对客户金融资产中结构化产品占比的上限 |
| 重复购买审查 | 对短期内购买多个结构化产品的客户进行特别审查 |

### 披露要求

| 项目 | 要求的披露 |
|---|---|
| 总费用负荷 | 明确披露安排方与分销方费用 |
| 损失情景 | 在若干不利情景下的具体数值损失图示 |
| 敲入机制 | 对障碍、观测类型与交付机制的平实语言解释 |
| 最差表现特征说明 | 明确警告最差表现并非分散 |
| 比较替代品 | 提及可实现类似目标的更简单产品 |
| 冷静期 | 在指定期间内取消的权利 |

### 销售流程

| 步骤 | 要求 |
|---|---|
| 记录 | 对高风险产品强制录制销售对话 |
| 确认 | 客户对风险理解的书面确认 |
| 审查 | 对超过阈值的销售适当性进行二线审查 |
| 文档化 | 保留适当性评估以供监管审查 |

## 与可转换债券市场的比较

机构 [[finance/japan-convertible-bond-mechanics|convertible bond market]] 使用类似的底层数学（内嵌股票衍生品 + 债券下限），但具有不同的分销与保护画像：

| 维度 | 零售 EB 敲入 | 机构可转换债券 |
|---|---|---|
| 买方 | 经由券商的零售个人 | 机构投资者（可转债套利基金、资产管理人、保险） |
| 适当性框架 | 零售适当性 + 高龄客户保护 | 合格机构投资者框架 |
| 内嵌衍生品 | 做空向下敲入看跌 | 做多看涨期权 |
| 股票敞口方向 | 做空股票下行（二元） | 做多股票上行（非对称） |
| 尾部风险 | 可能 50百分点以上损失 | 以债券价值为下限（外加信用风险） |
| 披露标准 | 2023 年之后收紧的零售保护规则 | 机构 EDINET / TDnet 标准 |
| 监管关注 | 客户至上执法 | 披露与内幕交易框架 |

对比鲜明：机构可转债给买方非对称的上行；零售 EB 敲入则给买方以非对称的下行换取一份票息。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## 来源

- FSA：客户至上经营原则政策资料；2022-2023 年对主要证券公司的行政命令。
- FSA：结构化债券监督预期与后续监测资料。
- JSDA：关于结构化债券适当性与披露的自律更新；会员规则与模板。
- SMBC 日兴、大和、野村：提及零售财富管理板块趋势与结构化产品分销限制的公开 IR 资料。

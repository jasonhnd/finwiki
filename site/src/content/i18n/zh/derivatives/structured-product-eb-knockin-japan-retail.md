---
source: derivatives/structured-product-eb-knockin-japan-retail
source_hash: 9b099456ccc311db
lang: zh
status: machine
fidelity: ok
title: "EB 敲入结构性产品 日本零售"
translated_at: 2026-05-31T03:19:56.391Z
---

# EB 敲入结构性产品 日本零售

## TL;DR

EB（*Equity Bond*，他社株転換可能债）敲入是日本零售财富管理中分销最广的结构性产品形式，至 2022。从机制上看，买方做空一只日本股票（或最差表现一篮子）上的**向下敲入看跌期权**，以换取增强票息以及（在自动赎回变体中）提前赎回的机会。头条票息（通常年化 5-15 %）吸引了渴求收益的零售投资者。**尾部风险**是二元的：若表现最差的参考资产突破敲入障碍（通常为初始价的 50-70 %），投资者将按原始执行价被交割股票（或现金等价物）而非收到面值。单一事件中本金 30-70 % 的亏损是已实现的结果。**2022-2023  FSA 整顿**及随后的 JSDA 自律收紧将 EB 敲入分销作为最高优先级的零售保护问题；针对 [[JapanFG/nomura-hd|Nomura]]、[[JapanFG/smbc-nikko|SMBC Nikko]] 和 [[JapanFG/daiwa-sg|Daiwa]] 子公司的行政命令迫使主要分销商暂停或限制 EB 敲入零售销售。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the deepest single-product page on the most consequential Japan retail structured-product format. Read it together with [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] for the broader distribution landscape, [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the credit-derivative context, [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the issuer credit dimension, [[derivatives/japan-irs-market|Japan IRS market]] for the rates underlay used in EB pricing, and [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve context.

Cross-reference [[finance/INDEX|finance index]] for the wider capital-markets framing, [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the institutional equity-linked counterpart that uses similar mathematics, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for the related single-stock liquidity dynamics, [[banking/INDEX|banking index]] for the megabank distribution context, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the contrast with institutional structured allocations, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer hedging side.

### 头条机制

| 组成 | 典型零售分销 EB 敲入 |
|---|---|
| 形式 | 由 SPV 或银行发行、嵌入股票衍生品的债券 |
| 货币 | 日元（最常见）或美元（货币叠加变体） |
| 期限 | 1-5  年（通常 3  年）；因自动赎回特性而缩短 |
| 标的 | 单一日本上市股票 或 3-5  只股票的最差表现一篮子 |
| 初始参考价 | 执行日的收盘价（S₀） |
| 敲入障碍 | S₀ 的 50-70 %（最常见：60 %） |
| 自动赎回阈值 | 观测日 S₀ 的 100 % |
| 票息 | 年化 5-15 %；"有条件票息"，仅在未触发敲入时支付 |
| 敲入观测 | 存续期内连续（盘中触及）或仅到期日的欧式观测 |
| 赎回 | 无敲入则按面值；敲入则按执行价交割股票（或现金等价物） |

### 最差表现一篮子变体

| 特性 | 详情 |
|---|---|
| 标的数量 | 通常 3-5  只股票 |
| 最差表现规则 | 收益由表现最差的参考资产决定 |
| 相关性影响 | 相关性越低 → 某一资产突破的概率越高 → 票息越高 |
| 分散化效应 | 反直觉：标的越多增加的是最差表现概率，而非分散化 |

最差表现一篮子是最受批评的零售特性之一：投资者常将一篮子视为"分散化"，而它实际上是下行风险的集中。

### 自动赎回特性

| 观测日 | 参考价处于或高于自动赎回阈值时的动作 |
|---|---|
| 第 1  年观测 | 若参考价 ≥ S₀ → 按面值 + 应计票息自动提前赎回 |
| 第 2  年观测 | 同一触发 |
| 第 3  年观测（到期） | 同一触发或适用最终赎回规则 |

自动赎回有利于发行方 / 交易商（提前终止做空波动率敞口），并为零售买方提供更快的周转与再投资。

### 投资者头寸等价

```
Long EB knock-in note ≈ Long bond + Short down-and-in put option on underlying
```

做空看跌期权是以下两者的来源：

- 增强票息（收到的期权权利金）；
- 尾部风险敞口（障碍之下的二元亏损特征）。

### 到期收益情景

假设单一名称 EB，S₀ = 1000, ，敲入障碍 = 600 （60 %），执行价 = 1000, ，本金 = 1,000,000  日元。

| 情景 | 最终股价 | 结果 |
|---|---|---|
| 股价存续期内始终高于障碍（例如 850） | 850 （无敲入事件） | 按面值 1,000,000  日元赎回 + 支付所有票息 |
| 股价盘中突破障碍（例如触及 580）但回升至 800  | 800 （触发敲入） | 有条件最终票息被没收；以股票赎回：1,000,000  / 1000  = 交割 1000  股，价值 1000  × 800  = 800,000  日元（相对本金亏损 20 %，外加损失的票息） |
| 股价突破障碍并维持低位 | 500 （触发敲入，收于低位） | 按 500  交割 1000  股 = 500,000  日元（相对本金亏损 50 %，外加损失的票息） |
| 股价严重突破障碍 | 200 （触发敲入，严重下跌） | 按 200  交割 1000  股 = 200,000  日元（相对本金亏损 80 %，外加损失的票息） |

### 敲入观测类型很重要

| 观测类型 | 效果 |
|---|---|
| 连续（任意时点）敲入 | 最激进；即便盘中触及也触发；在较早的日本零售 EB 中常见 |
| 每日收盘观测 | 较不激进；仅日终读数有效 |
| 欧式（仅到期）观测 | 最不激进；仅最终价格有效 |

连续敲入比欧式风险实质性更高；许多零售买方未理解二者区别。

## 交易商的定价组成

交易商基于以下因素为嵌入式衍生品定价：

| 输入 | 对票据票息的影响 |
|---|---|
| 标的隐含波动率 | 波动率越高 → 期权权利金越高 → 票息越高 |
| 相关性（最差表现） | 相关性越低 → 最差表现波动率越高 → 票息越高 |
| 标的股息率 | 股息越高 → 看涨价值越低 → 视结构可降低或提高票息 |
| 标的借券成本 | 借券成本越高 → 看涨价值越低 → 影响自动赎回概率 |
| 参考发行人信用利差 | 发行人信用越高 → 债券底价越低 → 票息调整 |
| 无风险收益率曲线 | 利率越高 → 债券底价更高 / 更低，视方向而定 |
| 障碍水平 | 障碍越低 → 期权价值越小 → 票息越低 |
| 自动赎回阈值 | 阈值越低 → 自动赎回概率越高 → 票息越高 |
| 票据期限 | 期限越长 → 期权价值越多 → 票息越高 |

### 交易商费用负担

零售购买价等于公允价值加安排方费用加分销商费用。对日本零售 EB 的行业总量分析历来显示，发行时嵌入的总费用负担为名义本金的 3-10 %，对最复杂的最差表现结构有时更高。费用负担在较早的销售文件中未透明披露。

### 对冲

交易商进行背对背对冲：

| 风险 | 对冲工具 |
|---|---|
| 股票 Delta | 做空标的股票 |
| 股票 Gamma（障碍邻近） | 主动股票或上市期权对冲 |
| 股票 Vega | 上市或场外股票期权头寸 |
| 障碍风险（跳空下行情景） | 难以对冲；由交易商自留 |
| 相关性（最差表现） | 场外相关性交易；由交易商自留 |
| 发行人信用 | 发行人自身债券 / CDS 对冲 |
| 利率 | 掉期对冲 |

当许多票据共享同一参考名称时，交易商在个别日本股票上的 EB 对冲集中度可能成为一股可观的流。

## 零售投资者亏损案例研究

EB 敲入分销与几起高调的零售亏损事件相伴。公开报道的一般模式（非具体交易细节）：

| 事件 | 模式 |
|---|---|
| 2018-2019  日本金融股 | 引用日本银行 / 保险公司股票的 EB 票据在 2018  抛售中触发敲入 |
| 2020  年第 1  季度 COVID 暴跌 | 带全球标的的最差表现一篮子 EB 在多个参考同时下跌时触发广泛敲入 |
| 2020-2021  个股暴雷 | 遭遇特异性下跌名称（例如愿景基金减记期间的软银集团、个别科技股）的单一名称 EB 触发敲入 |
| 2022  年下半年 1  全球股票抛售 | 引用美国科技股与日本科技股的 EB 票据触发广泛敲入 |
| 2022  年下半年 2  软银集团波动 | 单一名称软银 EB 票据在持续回撤期间触发敲入 |

贯穿这些事件反复出现的模式：零售买方常未预料到二元亏损特征，并在敲入触发时感到意外。JSDA / FSA 汇总的投诉数据显示每起事件后均有显著激增。

### 执法背景

FSA 在 **"客户至上"**（顧客本位の業務運営）框架下，自 2021 起升级了对零售结构性债券分销的监管关注。FSA 于 2022  年 10 月的公开声明明确将结构性债券（仕組債）的适当性与披露列为高优先级问题。

### 行政命令 2023

 FSA、JSDA 与 SESC 于 2023 采取了协调一致的执法行动：

| 分销商 | 行动类别 |
|---|---|
| [[JapanFG/nomura-hd|Nomura Securities]] | 关于结构性债券（含 EB）销售流程与适当性的业务改善命令 |
| [[JapanFG/smbc-nikko|SMBC Nikko Securities]] | 业务改善命令；围绕适当性流程的高级管理层问责 |
| [[JapanFG/daiwa-sg|Daiwa Securities]] | 业务改善命令；适当性与披露改进 |
| 多家地区银行关联券商 | 局部行政行动与自我暂停 |

执法行动特别将 EB 敲入分销点名为最尖锐的适当性问题。费用负担披露、情景分析（亏损示例）以及客户适当性评估是主要的失败环节。

### 分销商响应

主要分销商在执法之前及之后采取了自愿行动：

| 行动 | 分销商 |
|---|---|
| 暂停新的 EB 敲入零售销售 | 2023  期间多家主要分销商 |
| 将分销限于合格或经特别批准的客户 | 数家分销商采用年龄 / 知识 / 经验门槛 |
| 强化披露与录音要求 | 经由 JSDA 自律更新全行业实施 |
| 完全退出零售结构性债券销售 | 一些地区银行关联券商 |
| 将零售产品组合转向更简单的替代品 | 许多分销商强调普通债券、平衡型基金、NISA 适格基金 |

### 成交量影响

JSDA / FSA 汇总的行业统计显示，零售 EB 敲入销售从 2022  到 2023 大幅收缩。许多分销商将 EB 销售削减了 80 % 或更多。

### 适当性评估

| 要求 | 详情 |
|---|---|
| 知识 / 经验测试 | 客户须证明理解障碍期权机制 |
| 风险画像匹配 | 客户的风险承受度须明确涵盖 50%+ 亏损的可能性 |
| 年龄门槛 | 对超过既定年龄门槛（通常 75  或 80）的客户采取特别程序 |
| 集中度限制 | 对客户金融资产中结构性产品占比设上限 |
| 重复购买审查 | 对短期内购买多项结构性产品的客户进行特别审查 |

### 披露要求

| 项目 | 所需披露 |
|---|---|
| 总费用负担 | 明确披露安排方与分销商费用 |
| 亏损情景 | 多种不利情景下的具体数值亏损示例 |
| 敲入机制 | 对障碍、观测类型及交割机制的平实语言解释 |
| 最差表现特性说明 | 明确警示最差表现并非分散化 |
| 比较替代品 | 提及实现类似目标的更简单产品 |
| 冷静期 | 在指定期间内取消的权利 |

### 销售流程

| 步骤 | 要求 |
|---|---|
| 录音 | 对较高风险产品强制录音销售对话 |
| 确认 | 客户书面确认理解风险 |
| 审查 | 超过门槛的销售适当性二线审查 |
| 文件 | 留存适当性评估以备监管审查 |

## 与可转换债券市场的比较

机构 [[finance/japan-convertible-bond-mechanics|convertible bond market]] 使用类似的底层数学（嵌入式股票衍生品 + 债券底价），但分销与保护特征不同：

| 维度 | 零售 EB 敲入 | 机构可转换债券 |
|---|---|---|
| 买方 | 经由券商的零售个人 | 机构投资者（可转债套利基金、资产管理人、保险） |
| 适当性框架 | 零售适当性 + 老年客户保护 | 合格机构投资者框架 |
| 嵌入式衍生品 | 做空向下敲入看跌 | 做多看涨期权 |
| 股票敞口方向 | 做空股票下行（二元） | 做多股票上行（非对称） |
| 尾部风险 | 可能亏损 50%+ | 以债券价值为底（外加信用风险） |
| 披露标准 | 2023  后收紧的零售保护规则 | 机构 EDINET / TDnet 标准 |
| 监管聚焦 | 客户至上执法 | 披露与内幕交易框架 |

对比鲜明：机构可转债给买方非对称上行；零售 EB 敲入给买方非对称下行以换取票息。

## Related

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
- [[JapanFG/mufg]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Customer First operating-principles policy materials; 2022-2023 administrative orders on major securities firms.
- FSA: structured-bond supervisory expectations and follow-up monitoring materials.
- JSDA: self-regulatory updates on structured-bond suitability and disclosure; member rules and templates.
- SMBC Nikko, Daiwa, Nomura: public IR materials referencing retail wealth-management segment trends and structured-product distribution restrictions.

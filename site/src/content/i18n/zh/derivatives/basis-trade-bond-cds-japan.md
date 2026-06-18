---
source: derivatives/basis-trade-bond-cds-japan
source_hash: 54304e00452a6d3d
lang: zh
status: machine
fidelity: ok
title: "日本债券-CDS 基差交易"
translated_at: 2026-06-18T23:33:48.333Z
---

# 日本债券-CDS 基差交易

## TL;DR

日本债券-CDS 基差是指某企业的 CDS 保护成本，与其现券在同一期限上相对于互换或 JGB 基准曲线的信用利差之间的价差。**负基差** (CDS < 债券利差) 历来吸引做多现券·做空 CDS 的交易，以锁定扣除资金成本与资产负债表费用后的「免费」套息。**正基差** (CDS > 债券利差) 在日本较不常见，但在保护买盘需求超过交易商承接能力的压力时期会出现。2010, 年之后的巴塞尔 III 杠杆率、单一交易对手授信限额、JGB 的回购特殊性 (specials)、以及日本央行的非常规政策 (NIRP、QQE、YCC、YCC 调整)，使基差交易更难以扩大规模，并在周期中更具波动性。日本 IG 企业信用中的主要基差错位发生于 **COVID Q1 2020** (现券较 CDS 更快以困境价格交易，负基差大幅走阔)、**2022-2023 日本央行 YCC 调整** (利率与利差的重新定价使基差走阔)，以及 **2024 日本金融信用压力的零星事件** (个别银行类名称上的小规模错位)。

## Wiki 路径

本条目位于 [[derivatives/INDEX|derivatives index]] 之下，作为补充 [[derivatives/japan-cds-market-overview|Japan CDS market overview]] 与 [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] 的套利 / 相对价值层。请与 [[derivatives/japan-irs-market|Japan IRS market]] (用于资产互换定价的互换曲线锚点)、[[derivatives/yen-basis-swap-market|yen basis swap market]] (JPY 资金成本层)、以及 [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] (影响 JPY 基差交易中以 USD 融资的参与者的 USD-JPY 资金成本互动) 一并阅读。

在现券一侧，关于 JGB 回购与资金背景，请交叉参考 [[finance/INDEX|finance index]]、[[finance/japan-convertible-bond-mechanics|convertible bond mechanics]]、[[money-market/INDEX|money-market index]]。在机构一侧，[[banking/INDEX|banking index]]、[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]、[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] 描绘了该交易的交易商 / 基金交易对手。

### 定义

```
债券-CDS 基差 = CDS 利差 - 债券 Z 利差 (或资产互换利差)，于同一期限
```

| 符号 | 解释 |
|---|---|
| 负基差 | CDS 利差 < 债券利差 → 买入保护比债券信用利差所隐含的更便宜 → 做多现券·做空 CDS 具吸引力 |
| 零基差 | 纯套利均衡 (理论上) |
| 正基差 | CDS 利差 > 债券利差 → 卖出保护可捕获多于债券信用利差的收益 → 做空现券·做多 CDS 具吸引力 |

### 基差为何不为零

在无摩擦的世界里，基差将为零。现实世界的摩擦会产生持续且时变的基差:

| 摩擦 | 对基差的影响 |
|---|---|
| 债券资金成本 (回购利率、资产负债表费用) | 倾向于将基差推向负值 (债券的持有成本高于合成头寸) |
| 信用事件覆盖范围之差 (可交割债务范围、重组范围) | CDS 覆盖范围可能比债券敞口更广或更窄 |
| CDS 的最便宜可交割期权 | 相对于现券提升 CDS 保护的价值，将基差推向正值 |
| CDS 的交易对手风险 | 降低 CDS 保护的价值，将基差推向负值 |
| 流动性的非对称性 | 流动性较差的一腿以溢价 / 折价交易 |
| 监管资本成本 | 银行持有的做多现券·做空 CDS 头寸消耗风险加权资产与杠杆能力 |
| 税务与会计 | 现券收益与 CDS 保费的确认时点不同 |

### 结构

| 腿 | 操作 |
|---|---|
| 做多现券 | 以面值或近面值买入参照发行体的债券，以回购融资 |
| 做空 CDS 保护 (即买入保护) | 为应对信用事件支付的保护支付滚动利差 |
| 净套息 | 债券收益率 - 资金利率 - CDS 保费 |

只要负基差超过资金成本与资产负债表费用，该交易便可锁定正套息，并带有来自 CDS 一腿的信用事件保护。

### P&L 分解

```
每日 P&L ≈ (债券计提 - 回购资金成本) - (CDS 保费计提)
           + (债券价格 - CDS 保护价值) 的盯市变动
```

若基差向零收窄，头寸增值 (债券上涨快于 CDS，或 CDS 走阔快于债券)。若基差进一步走向负值，头寸盯市亏损。

### 所需持有期

为实现锁定的套息，头寸通常需要持有至债券到期或某一已知的时间范围。短期限交易依赖于不可预测的基差收敛。许多基金历来滚动头寸并接受盯市波动。

## 资金成本的考量

债券一腿需要资金。资金成本是交易经济性的主导决定因素:

| 资金来源 | 成本驱动因素 |
|---|---|
| 回购 (双边或三方) | 回购利率; JPY 回购接近日本央行政策利率加上折扣率 |
| JGB 抵押的 GC 回购 | 一般抵押 JGB 回购利率，对日本央行的 JGB 供给操作敏感 |
| 该企业债券的特定抵押回购 | 往往成本更高; 反映债券的可借入性与空头需求 |
| 银行资产负债表融资 | 内部资金成本 (FTP); 对多数银行而言高于回购 |
| 主经纪商融资 | 对冲基金标准路径，经 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]]; 在 GC 回购加折扣率之上的利差 |

若债券难以回购、折扣率陡峭，或资产负债表费用偏高，50 bp 的负基差可能被资金成本完全吞噬。基差交易的交易经济性阈值取决于资金构成。

## 回购可得性约束

回购可得性是实务上的瓶颈。日本企业债券回购的流动性远低于 JGB 回购:

| 债券类型 | 回购流动性 |
|---|---|
| JGB (在岸现券与基准) | 深度的 GC 与特定回购; 对日本央行操作敏感 |
| JGB (非在岸现券) | 较浅; 零星的特殊性 |
| 日本 IG 企业债券 (大型发行体) | 有限的双边回购; 主要为与主经纪商的交易商双边 |
| 日本 IG 企业债券 (中小型发行体) | 极有限的回购; 头寸以裸头寸持有 |
| 日本高收益企业债券 | 实际上无回购; 以裸头寸持于资产负债表 |

对于规模低于 Tier 1 发行体的多数日本企业基差交易，债券一腿通过主经纪商融资而非直接回购来融资。这增加了成本，并相对于美元或欧元 IG 基差交易降低了可扩展性。

### 巴塞尔 III 杠杆率

做多现券·做空 CDS 的头寸即使在净信用风险已对冲的情况下，也会膨胀银行资产负债表上的杠杆敞口指标。2010 年之后杠杆率的强制执行降低了交易商承接大型基差头寸的意愿，在压力来临时结构性地使基差走阔。

### 风险加权资产 (RWA)

| 构成要素 | 影响 |
|---|---|
| 债券一腿 | 基于发行体评级产生银行账户或交易账户 RWA |
| CDS 一腿 | 对 CDS 交易对手产生交易对手信用风险 RWA |
| 净对冲的认定 | 标准法下有限; 内部模型法下认定更佳 (受 FRTB 约束) |

即使信用风险已对冲，RWA 消耗仍会抑制交易商的承接。

### 单一交易对手授信限额

美国与欧盟的规则限制单一交易对手敞口。针对与现券发行体相同的交易对手买入的 CDS 保护，会产生必须谨慎轧差的双重敞口。

### 流动性覆盖率 (LCR)

债券一腿若符合一级 2 HQLA 资格，则一般计入 HQLA; CDS 一腿不计入。因此一些基差交易视债券的归类而定，对银行而言为 LCR 中性或正向。

## 2010

年之后的日本特有市场结构

| 时期 | 市场结构变化 |
|---|---|
| 2010-2012  | CDS 向中央清算迁移 (JSCC 与 ICE Clear Credit); LIBOR-OIS 基差的溢出效应 |
| 2013-2015  | 日本央行 QQE 启动; 大规模 JGB 购买计划重塑了回购特殊性与 JGB 曲线 |
| 2016  | 日本央行 NIRP 与收益率曲线控制 (YCC) 引入; 10Y JGB 被锚定在零附近 |
| 2017-2019  | 稳定的 YCC 时期; 紧窄的日本 IG 企业利差与窄基差 |
| 2020 Q1  | COVID 信用冲击; 包括日本在内的全球 IG 企业名称普遍出现负基差大幅走阔 |
| 2020 Q2-Q4  | 日本央行的企业债券购买工具与交易商资产负债表恢复; 基差部分正常化 |
| 2022-2023  | 日本央行 YCC 调整 (扩大容忍区间，随后结束 YCC); 零星的 JGB 曲线波动与企业债券重新定价 |
| 2024-2025  | 多数日本 IG 名称上基差持续窄幅; 全球银行压力事件期间金融类名称上零星走阔 |

结构性图景: 交易商承接能力小于 2008, 年之前，而零星的信用风险规避事件仍会发生。因此基差交易呈现低频但高振幅的错位。

## COVID Q1 2020 基差走阔

Q1 2020 的 COVID 事件引发了自 2008-2009以来日本 IG 企业信用中最大的负基差错位:

| 阶段 | 模式 |
|---|---|
| 2020 年 2 月下旬 | 风险规避开始; CDS 利差较现券略快走阔 |
| 2020 年 3 月上旬 | ETF、交易商与 ALM 投资组合的现券强制抛售; 现券利差较 CDS 更快走阔 |
| 2020 年 3 月中旬 | 现券买卖价差急剧走阔; 部分债券几乎无法交易; CDS 仍有报价 |
| 18 2020 年 3 月 | 基准日本 IG 企业的负基差达到多年来的最阔水平 |
| 2020 年 3 月下旬 | 日本央行宣布企业债券购买工具与 ETF 购买; 交易商资产负债表趋稳 |
| 2020 年 4 月至 6 月 | 基差正常化; 3 月建立的做多现券·做空 CDS 交易带来强劲 P&L |
| Q3-Q4  2020 年 | 基差回落至窄幅正常区间 |

该事件映照了 2008-2009 的模式，但持续数周而非数月。对基差交易实务者的教训: 极端错位是需要承诺资本与对短期盯市痛苦的忍耐力的短暂窗口。

## 2022-2023 日本央行 YCC 调整

| 事件 | 对基差的影响 |
|---|---|
| 2022 年 12 月日本央行扩大 YCC 容忍区间 (0.25 → 0.50 个百分点) | 10Y JGB 收益率跳升; 日本 IG 企业现券重新定价; CDS 滞后; 基差暂时走阔 |
| 2023 年渐进的 YCC 调整 | 零星的重新定价; 更小规模的错位 |
| 2023 年 7 月日本央行正式放松 YCC | 10Y JGB 上限实质上提升至约 1.00 个百分点; 现券利差走阔; CDS 滞后反应 |
| 2024 年 3 月日本央行正式结束 YCC 与 NIRP | JGB 曲线正常化; 现券企业债券重新定价; 基差在数周内正常化 |

模式: 现券重新定价领先于 CDS 重新定价，因为现券更直接地由对收益率曲线敏感的投资组合 (人寿保险公司、银行) 持有。当交易员推动合成头寸以匹配现券时，CDS 利差才会调整，其滞后由交易商资产负债表能力决定。

### 投资者画像

| 投资者 | 基差交易画像 |
|---|---|
| 可转债套利 / 信用基金 | 活跃的基差交易使用者; 对盯市波动具忍耐力 |
| 多策略对冲基金 | 选择性使用，常与资本结构套利交易配对 |
| 银行交易商部门 | 沃尔克 / 同等规则后自营基差交易有限; 主要为做市承接 |
| 保险 / 养老金 | 一般非活跃的基差交易者; 专注于裸现券债券持有 — 见 [[insurance/japan-life-insurance-alm-overview|life ALM]] |
| 主权财富基金 | 重大错位时的零星基差交易配置 |

### 交易规模

基差交易的规模受以下因素制约:

| 约束 | 实务影响 |
|---|---|
| 债券一腿的回购 / 融资能力 | 限制做多现券的规模 |
| 做空保护一腿的 CDS 市场流动性 | 在匹配的名称与期限上限制做空 CDS 的规模 |
| 交易对手 CSA 条款 (保证金、合格抵押品) | 影响 CDS 一腿的资金成本 |
| 单一名称的信用事件尾部风险 | 即使有对冲，信用事件期间的跳空风险 |
| 监管资本成本 | 银行持有头寸消耗 RWA / 杠杆 |

日本 IG 名称上 100 百万美元等值的负基差头寸为大型; 500 百万为极大型; 数十亿则罕见，且集中于流动性最高的名称。

### 滚动动态

若持有至债券到期不可行，则 CDS 保护必须在每次滚动时滚动 (5Y CDS → 下一个 5Y 系列，等)。滚动下行 P&L 加上指数滚动基差，会为整体交易经济性增加噪音。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[money-market/INDEX]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- 日本央行: 货币政策框架资料、JGB 市场操作数据、企业债券购买工具文件。
- 财务省: JGB 发行与基准曲线资料。
- 金融厅: 衍生品清算规制、危机后 CDS 改革、后续审议会资料。
- ISDA: CDS 定义集与裁定委员会资料。
- JSCC: CDS 清算服务资料。
- BIS: 含日本参照实体 CDS 的半年度 OTC 衍生品统计。
- JSDA: 会员公司与市场结构资料。

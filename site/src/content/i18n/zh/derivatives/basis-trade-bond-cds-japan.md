---
source: derivatives/basis-trade-bond-cds-japan
source_hash: f8d10062ecb83659
lang: zh
status: machine
fidelity: ok
title: "日本债券-CDS 基差交易"
translated_at: 2026-05-31T03:19:56.419Z
---

# 日本债券-CDS 基差交易

## TL;DR

日本债券-CDS 基差是企业 CDS 保护成本与其现金债券在匹配期限上相对于互换或 JGB 基准曲线的信用利差之间的价差。**负基差**（CDS < 债券利差）历史上吸引了多头现金-空头 CDS 交易，这类交易在扣除融资成本和资产负债表费用后锁定「免费」息差。**正基差**（CDS > 债券利差）在日本较为少见，但在压力期当买入保护的需求超过交易商承接能力时会出现。2010, 巴塞尔 III 杠杆率、单一交易对手信用限额、JGB 的回购特殊性，以及日本央行非常规政策（NIRP、QQE、YCC、YCC 调整）之后，基差交易更难做大、且在周期中波动更大。日本投资级企业信用的主要基差错位发生在 **新冠第1 2020**（现金债券比 CDS 更快地以困境价交易，导致负基差大幅扩大）、**2022-2023 日本央行 YCC 调整**（利率和利差重新定价扩大了基差），以及 **2024 日本金融信用的间歇性压力**（在特定标的上的较小错位）。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the arbitrage / relative-value layer that complements [[derivatives/japan-cds-market-overview|Japan CDS market overview]] and [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]. Read it together with [[derivatives/japan-irs-market|Japan IRS market]] for the swap-curve anchor used in asset-swap pricing, [[derivatives/yen-basis-swap-market|yen basis swap market]] for the JPY funding-cost layer, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the USD-JPY funding interaction that affects USD-funded participants in JPY basis trades.

On the cash-bond side, cross-reference [[finance/INDEX|finance index]], [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]], and [[money-market/INDEX|money-market index]] for the JGB repo and funding context. On the institutional side, [[banking/INDEX|banking index]], [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]], and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] map the dealer / fund counterparties of the trade.

### 定义

```
债券-CDS 基差 = CDS 利差 - 债券 Z-spread（或资产互换利差），匹配期限
```

| 符号 | 解释 |
|---|---|
| 负基差 | CDS 利差 < 债券利差 → 买入保护比债券信用利差所隐含的更便宜 → 多头现金-空头 CDS 有吸引力 |
| 零基差 | 纯套利均衡（理论上） |
| 正基差 | CDS 利差 > 债券利差 → 卖出保护获得的超过债券信用利差 → 空头现金-多头 CDS 有吸引力 |

### 为何基差不为零

在无摩擦的世界中基差应为零。现实世界的摩擦造成持续且随时间变化的基差：

| 摩擦 | 对基差的影响 |
|---|---|
| 债券融资成本（回购利率、资产负债表费用） | 倾向于将基差推向负值（持有债券比合成头寸成本更高） |
| 信用事件覆盖差异（可交付债务范围、重组范畴） | CDS 覆盖范围可能比债券敞口更宽或更窄 |
| CDS 的最便宜可交付选择权 | 相对现金债券为 CDS 保护增加价值，将基差推向正值 |
| CDS 的交易对手风险 | 降低 CDS 保护的价值，将基差推向负值 |
| 流动性不对称 | 流动性较差的一腿以溢价/折扣交易 |
| 监管资本成本 | 银行持有的多头现金-空头 CDS 头寸消耗风险加权资产和杠杆能力 |
| 税务与会计 | 现金债券收入与 CDS 保费的确认时点不同 |

### 结构

| 一腿 | 操作 |
|---|---|
| 多头现金债券 | 以平价或接近平价买入参考发行人的债券，通过回购融资 |
| 空头 CDS 保护（即买入保护） | 为防范信用事件支付运行利差 |
| 净息差 | 债券收益率 - 融资利率 - CDS 保费 |

只要负基差超过融资成本和资产负债表费用，该交易便能锁定正息差，并由 CDS 一腿提供信用事件保护。

### 损益分解

```
每日损益 ≈ (债券计息 - 回购融资成本) - (CDS 保费计息)
           + (债券价格 - CDS 保护价值) 的盯市变动
```

若基差向零收敛，头寸增值（债券上涨快于 CDS，或 CDS 扩大快于债券）。若基差进一步向负扩大，头寸损失盯市价值。

### 所需持有期

为实现锁定的息差，头寸通常需要持有至债券到期或至某个已知期限。短期限交易依赖于基差收敛，而这是不可预测的。历史上许多基金滚动持仓并接受盯市波动。

## 融资成本考量

债券一腿需要融资。融资成本是交易经济性的主导决定因素：

| 融资来源 | 成本驱动因素 |
|---|---|
| 回购（双边或三方） | 回购利率；日元回购接近日本央行政策利率加折扣 |
| JGB 抵押品的一般抵押（GC）回购 | 一般抵押 JGB 回购利率，对日本央行 JGB 供给操作敏感 |
| 企业债券的特定抵押回购 | 通常更贵；反映债券的可借入性和来自卖空者的需求 |
| 银行资产负债表融资 | 内部资金成本（FTP）；对多数银行而言高于回购 |
| 主经纪商融资 | 对冲基金经由 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] 的标准路径；在 GC 回购之上加点加折扣 |

如果债券难以回购、折扣很高或资产负债表费用很高，50 bp 的负基差可能被融资成本完全吞噬。基差交易的交易经济性门槛取决于融资构成。

## 回购可得性约束

回购可得性是实际瓶颈。日本企业债券回购的流动性远低于 JGB 回购：

| 债券类型 | 回购流动性 |
|---|---|
| JGB（新券和基准券） | 深厚的 GC 和特定回购；对日本央行操作敏感 |
| JGB（旧券） | 不够深厚；间歇性特殊性 |
| 日本投资级企业债券（大型发行人） | 有限的双边回购；主要为交易商与主经纪商的双边 |
| 日本投资级企业债券（中小发行人） | 回购非常有限；头寸直接持有 |
| 日本高收益企业债券 | 实际上无回购；在资产负债表上直接持有 |

对于发行人规模低于第1 级的大多数日本企业基差交易，债券一腿通过主经纪商融资而非直接回购来融资。这增加了成本，并相对美元或欧元投资级基差交易降低了可扩展性。

### 巴塞尔 III 杠杆率

即使净信用风险已对冲，多头现金-空头 CDS 头寸仍会抬高银行资产负债表上的杠杆敞口度量。2010 杠杆率执行之后，交易商承接大型基差头寸的意愿下降，在压力来临时结构性地扩大了基差。

### 风险加权资产（RWA）

| 组成部分 | 影响 |
|---|---|
| 债券一腿 | 基于发行人评级产生银行账簿或交易账簿 RWA |
| CDS 一腿 | 在 CDS 交易对手上产生交易对手信用风险 RWA |
| 净对冲认可 | 标准法下有限；内部模型法下认可更好（受 FRTB 约束） |

即使信用风险已对冲，RWA 消耗仍抑制交易商承接。

### 单一交易对手信用限额

美国和欧盟规则限制单一交易对手敞口。针对与现金债券发行人相同的交易对手买入的 CDS 保护会造成双重敞口，必须谨慎轧差。

### 流动性覆盖率（LCR）

若债券一腿符合第2 级 HQLA 资格，一般计入 HQLA；CDS 一腿则不计入。因此，视债券的归类而定，某些基差交易对银行而言是 LCR 中性或正向的。

## 2010

之后日本特有的市场结构| 时期 | 市场结构转变 |
|---|---|
| 2010-2012 | CDS 转向中央清算（JSCC 和 ICE Clear Credit）；LIBOR-OIS 基差溢出效应 |
| 2013-2015 | 日本央行启动 QQE；大规模 JGB 购买计划重塑了回购特殊性和 JGB 曲线 |
| 2016 | 日本央行引入 NIRP 和收益率曲线控制（YCC）；10年期 JGB 被钉在接近零 |
| 2017-2019 | 稳定的 YCC 时代；日本投资级企业利差收紧、基差狭窄 |
| 2020 第1 季度| 新冠信用冲击；包括日本在内的全球投资级企业标的普遍出现负基差大幅扩大 |
| 2020 第2-4 季度| 日本央行企业债购买工具与交易商资产负债表恢复；基差部分正常化 |
| 2022-2023 | 日本央行 YCC 调整（扩大容忍区间，随后结束 YCC）；间歇性 JGB 曲线波动和企业债重新定价 |
| 2024-2025 | 多数日本投资级标的基差持续狭窄；在全球银行压力事件期间金融类标的间歇性扩大 |

结构性图景：交易商承接能力小于2008, 之前，而间歇性的信用避险事件仍会发生。因此基差交易表现为较低频率但较高幅度的错位。

## 新冠第1 2020 基差大幅扩大

第1 2020 新冠事件触发了日本投资级企业信用自 2008-2009以来最大的负基差错位：

| 阶段 | 模式 |
|---|---|
| 2020 年2月下旬| 避险开始；CDS 利差比现金债券略快地扩大 |
| 2020 年3月初| ETF、交易商和 ALM 组合被迫抛售现金债券；现金利差比 CDS 更快地扩大 |
| 2020 年3月中| 现金债券买卖价差急剧扩大；部分债券几乎无法交易；CDS 仍有报价 |
| 18 2020 年3月| 基准日本投资级企业的负基差达到多年最宽 |
| 2020 年3月下旬| 日本央行宣布企业债购买工具和 ETF 购买；交易商资产负债表企稳 |
| 2020 年4-6月| 基差正常化；3月开仓的多头现金-空头 CDS 交易带来强劲损益 |
| 2020 年第3-4 季度| 基差回落至狭窄的正常区间 |

该事件复刻了 2008-2009 的模式，但持续数周而非数月。对基差交易从业者的教训：极端错位是短暂窗口，需要承诺的资本和对短期盯市痛苦的容忍。

## 2022-2023 日本央行 YCC 调整

| 事件 | 对基差的影响 |
|---|---|
| 2022 年12月日本央行扩大 YCC 容忍区间（0.25 → 0.50 %） | 10年期 JGB 收益率跳升；日本投资级企业现金债券重新定价；CDS 滞后；基差暂时扩大 |
| 2023 渐进式 YCC 调整 | 间歇性重新定价；较小的错位 |
| 2023 年7月日本央行正式放松 YCC | 10年期 JGB 上限实际上提高至约 1.00 %；现金利差扩大；CDS 滞后反应 |
| 2024 年3月日本央行正式结束 YCC 和 NIRP | JGB 曲线正常化；现金企业债重新定价；基差在数周内正常化 |

模式：现金债券重新定价领先 CDS 重新定价，因为现金债券更直接地由对收益率曲线敏感的组合（寿险公司、银行）持有。当交易员推动合成头寸去匹配现金时，CDS 利差才调整，其滞后由交易商资产负债表能力决定。

### 投资者画像

| 投资者 | 基差交易画像 |
|---|---|
| 可转债套利/信用基金 | 活跃的基差交易使用者；能容忍盯市波动 |
| 多策略对冲基金 | 选择性使用，常与资本结构套利交易搭配 |
| 银行交易商部门 | 沃尔克规则/同等规则之后自营基差交易有限；主要为做市承接 |
| 保险/养老金 | 一般不是活跃的基差交易者；专注于直接持有现金债券 — 见 [[insurance/japan-life-insurance-alm-overview|life ALM]] |
| 主权财富基金 | 在重大错位期间间歇性配置基差交易 |

### 交易规模

基差交易的规模受以下因素制约：

| 约束 | 实际影响 |
|---|---|
| 债券一腿的回购/融资能力 | 限制多头现金规模 |
| 空头保护一腿的 CDS 市场流动性 | 在匹配标的和期限上限制空头 CDS 规模 |
| 交易对手 CSA 条款（保证金、合格抵押品） | 影响 CDS 一腿的融资成本 |
| 单一标的信用事件尾部风险 | 即使有对冲，信用事件期间仍有跳空风险 |
| 监管资本成本 | 银行持有的头寸消耗 RWA/杠杆 |

在日本投资级标的上，100 百万美元等值的负基差头寸算大；500 百万算非常大；数十亿级别罕见且集中于流动性最高的标的。

### 滚动动态

若持有至债券到期不可行，CDS 保护必须在每次滚动时滚动（5年期 CDS → 下一个 5年期系列等）。滚降损益加上指数滚动基差给整体交易经济性增加了噪声。

## Related

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

- BOJ: monetary policy framework materials, JGB market operations data, corporate-bond purchase facility documentation.
- MOF: JGB issuance and benchmark curve materials.
- FSA: derivatives clearing regulation, post-crisis CDS reforms, follow-up council materials.
- ISDA: CDS Definitions and Determinations Committee materials.
- JSCC: CDS clearing service materials.
- BIS: semi-annual OTC derivatives statistics including Japan reference-entity CDS.
- JSDA: member-firm and market structure materials.

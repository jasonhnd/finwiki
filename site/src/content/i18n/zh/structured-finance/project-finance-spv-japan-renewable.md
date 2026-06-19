---
source: structured-finance/project-finance-spv-japan-renewable
source_hash: 0de05c20b39cb9ca
lang: zh
status: machine
fidelity: ok
title: "日本可再生能源的项目融资 SPV —— 太阳能、风电、地热"
translated_at: 2026-06-19T12:43:19.942Z
---

# 日本可再生能源的项目融资 SPV —— 太阳能、风电、地热

## TL;DR

日本的可再生能源项目 —— 太阳能（公用事业规模 PV）、陆上和海上风电、地热以及生物质 —— 通常通过有限追索权的 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV]] 结构融资，股权来自综合商社联合体，债务来自常有地方银行加入的巨型银行主导的银团，收入则依据长期限 PPA 或 FIT/FIP 合约。2012  年的固定上网电价（FIT）方案创造了长达十年的高 IRR 公用事业规模太阳能交易，锚定了可再生能源 SPV 市场；2022  年向固定溢价（FIP）市场价格加溢价方案的过渡降低了表面 IRR，但保持了结构完整。海上风电第 1 轮招标（2021）和第 2 轮招标已将重心转移至以 [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corporation]]、[[financial-conglomerates/mitsui-co|Mitsui & Co.]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corporation]] 及联合体合作伙伴作为股权发起人的大规模海上风电 SPV。将 FIT 时代的太阳能交易再融资为运营阶段债券或新的 SPV 债务，如今是一个意义重大的市场细分。

## Wiki route

本条目归属于 [[structured-finance/INDEX|structured-finance index]]，作为 **可再生能源项目融资** 节点。请与 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]（政策金融侧，JBIC、NEXI、JOGMEC）以及 [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]（跨境资源项目背景）一起阅读。系统框架: [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]（法律结构）、[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]（当 SPV 债务被评级时的评级处理）以及 [[real-estate-finance/INDEX|real-estate-finance index]]（更广泛的基础设施资产融资背景）。

## 1. FIT 时代（2012–2022）—— 背景

由 [[policy-finance/INDEX|METI]] 于 2012  年 7 月引入的固定上网电价（FIT）方案（福岛后能源政策转变）保证了:
- 可再生能源电力的固定收购价格（¥/kWh）
- 长期限收购义务（公用事业规模 PV 通常为 20 年）
- 输电公用事业的强制性收购

具体到公用事业规模太阳能:
- 初始 2012  年电价为 ¥40/kWh（大型太阳能）—— 按国际标准异常之高
- 电价随成本下降而每个财年逐级下调
- 2012–2015  年批准的批次锁定了最高电价并产生了最大的股权 IRR

FIT 方案吸引了巨额资本进入日本太阳能 —— 国际开发商（其中一些后来退出）、日本商社、IPP 专业公司以及机构基础设施投资者。到 2010 年代后期，日本已成为全球第三大太阳能市场。

## 2. 典型的 FIT 时代公用事业规模太阳能 SPV 结构

```
Sponsors (sogo shosha + IPP partner)
        |
        | equity (~30%)
        v
+---------------------------------+
|       Project Co (SPV)          |
|  - Holds PV plant assets        |
|  - Holds 20-year FIT contract   |
|  - Limited recourse to sponsor  |
+--+----------+----------+--------+
   |          |          |
Senior     Sub-       Mezzanine
debt       senior     (sometimes)
   |          |          |
   v          v          v
+--+--+   +---+----+   +-+-----+
|Mega-|   |Regional|   |Insurer|
|bank |   | banks  |   |/ fund |
|lead |   | club   |   |       |
+-----+   +--------+   +-------+
```

典型条款（FIT 时代，公用事业规模，10–50MW）:
- **期限**: 18–20 年（匹配 FIT 期限并留有保证金缓冲）
- **优先 LTV**: 项目成本的 65–80%
- **DSCR 目标**: 基准情形 1.20x–1.40x，下行情形 1.10x
- **发起人股权 IRR**: 8–15%（最高批次达到上端）
- **主安排行**: 通常为 [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]] 或 [[financial-regulators/dbj|Development Bank of Japan]]
- **参与者**: 地方银行（尤其是电厂所在县的地方银行）
- **股权发起人**: 综合商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corp]]）、IPP 专业公司、基础设施基金以及（偶尔）作为 SPV-of-fund 结构中 LP 的机构投资者的组合

## 3. 陆上风电 —— 结构

陆上风电 SPV 遵循类似结构，但期限较短（15–18 年，匹配 FIT 风电电价）且 CAPEX 强度较高。陆上风电 FIT 的采纳比太阳能慢，原因在于:
- 日本高质量风资源场址有限
- 环境影响评估时间线常常超过 FIT 资格窗口
- 当地社区 / 土地使用反对放慢了许可

结果是项目管道比 FIT 电价所暗示的更小。

## 4. 海上风电 —— 新的重心

继 2018  年对《关于在利用海洋可再生能源资源的发电设施开发中促进海域利用的法律》的修订之后，日本启动了一系列 **海上风电第 1 轮拍卖**（中标 2021）:

| Round-1 award | Site | Sponsor consortium (illustrative) |
|---|---|---|
| Akita (Noshiro and Mitane) | Akita Prefecture | Multi-party consortium with sōgō shōsha and IPP |
| Choshi | Chiba Prefecture | Multi-party consortium |
| Yurihonjo | Akita Prefecture | Multi-party consortium |

第 2 轮及后续各轮已扩展了管道。海上风电 SPV 的关键特征:
- **项目成本** 以每个项目数千亿日元计量
- **期限**: 20–25 年
- **PPA / FIP** 结构（FIT 后）
- **发起人联合体** 通常包括一家综合商社、一家日本公用事业公司和一家全球海上风电开发商（Ørsted 式的国际合作伙伴）
- **主贷款人** 包括 [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]]、[[financial-regulators/dbj|DBJ]] 以及（对于出口信贷支持的涡轮机采购）[[financial-regulators/jbic|JBIC]] / [[policy-finance/nexi|NEXI]]
- **保险**: 海上建设风险、天气风险、供应链风险

海上风电 SPV 实质上比公用事业规模太阳能 SPV 更复杂 —— 更高的资本支出、更长的建设期、更多的对手方、更多的天气风险。

## 5. 地热 —— 数量小但获战略支持

地热项目数量较少，但作为基荷可再生能源获政治支持。典型结构:
- **股权发起人**: 公用事业公司（如九州电力、北海道电力）、JOGMEC 支持的开发商、综合商社
- **债务**: 巨型银行银团 + DBJ + 地方银行
- **勘探风险**: 通过 JOGMEC 股权 / 担保参与显著缓解
- **期限**: 20+ 年
- **规模**: 每个项目通常为 10–30 MW

地热的勘探风险特征使其在交易结构上更接近上游石油天然气而非太阳能。

## 6. 2022  年 FIT → FIP 过渡

自 2022,  年 4 月起生效，日本将新的公用事业规模项目从 FIT（固定电价）过渡至 **FIP（固定溢价）**:
- 发电商按批发市场价格出售
- 在其上收取溢价以衔接至 FIP 参考价格
- 承担市场价格风险（以溢价作为部分抵消）

对于 SPV 融资而言，这意味着:
- 与 FIT 相比，现金流确定性降低
- 贷款人应用更保守的 DSCR 并要求对冲（与企业购电方的 PPA、市场对冲）
- FIP 下新项目的 IRR 通常低于 FIT 时代的批次
- 与日本大型企业（索尼、亚马逊、微软、苹果供应商）的企业 PPA 已成为一个意义重大的需求来源

## 7. 再融资周期

FIT 时代的太阳能交易现在（2020 年代中期）正进入其再融资窗口:
- 原始建设债务处于中期
- 运营业绩记录允许以更紧的利差和更长的有效期限再融资
- 一些发起人再融资为项目债券格式以供机构配售
- 其他人则以利差逐级下调和更新的契约组合延长银行债务

在 DSCR 允许的情况下，重新加杠杆股权（通过套现再融资向发起人返还资本）也是一个特征。

## 8. 投资者与股权 IRR 动态

| Vintage | FIT tariff | Equity IRR range (estimated) |
|---|---|---|
| 2012–2013 (high-tariff utility solar) | ¥36–40/kWh | 12–18% |
| 2014–2016 (step-down) | ¥27–32/kWh | 9–13% |
| 2017–2019 (further step-down + auction) | ¥18–24/kWh | 6–9% |
| 2020–2022 (final FIT) | ¥10–15/kWh range | 5–7% |
| Post-FIP (2022+) | Market + premium | 5–8% (depends on PPA / hedge) |

「IRR 压缩」曲线是 FIT 时代成为如此集中的资本部署窗口的原因之一。

## 9. 反驳观点

- **「FIT 电价过于慷慨」** —— 2012  年电价的批评者认为价格被过度设计，在早期批次中将过多价值从电费支付者转移给发起人（尤其是外国开发商）
- **「外国开发商退出」** —— 一些早期 FIT 时代的外国开发商在 FIT 锁定后出售了项目；二级市场出售捕获了本可留给运营发起人的价值
- **「海上风电第 1 轮定价争议」** —— 第一轮中标引发了关于竞标方法论和某些联合体主导地位的争议；后续各轮调整了评分
- **「电网约束」** —— 即使有 PPA / FIP 现金流可见性，日本北部的输电约束限制了项目扩展；SPV 结构设计必须考虑限电风险
- **「FIP 需要对冲基础设施」** —— 日本的企业 PPA 市场仍在发展；SPV 贷款人可能要求对冲安排，相对于 FIT 时代的简单性增加成本

## 10. 未决问题

- 下一批次的海上风电中标以及发起人集中度是否改变
- 日本的银行是否会在来自其他组合的资本压力下降低可再生能源项目融资的放贷意愿
- [[regional-banks/japan-post-bank|Japan Post Bank]] 和寿险公司在再融资周期中作为项目债券买方的角色
- 随着 METI / GX 政策强调电网规模电池储能和氢，[[policy-finance/japan-project-finance-stack-diagram|policy-finance stack]] 如何适应
- 基础设施 J-REIT 或 YieldCo 是否为运营中的可再生能源 SPV 提供公开市场退出
- 在 [[financial-regulators/boj|BOJ]] 利率正常化下项目融资贷款的处理 —— 再融资成本动态

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]
- [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]
- [[finance/INDEX|finance index]]
- [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]] · [[financial-conglomerates/mitsui-co|Mitsui & Co.]] · [[financial-conglomerates/sumitomo-corp|Sumitomo Corp]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/dbj|DBJ]] · [[financial-regulators/jbic|JBIC]] · [[financial-regulators/japan-exchange-group|JPX]]

## Sources

- METI FIT / FIP scheme disclosures — https://www.meti.go.jp/english/
- JBIC project finance disclosures — https://www.jbic.go.jp/en/
- DBJ disclosures — https://www.dbj.jp/en/
- Megabank IR (project-finance loan disclosures)
- Sogo shosha IR — renewable equity disclosures (Mitsubishi Corp, Mitsui & Co, Sumitomo Corp)

---

> [!info] 校核状态
> confidence: **likely**。FIT 方案电价和逐级下调历史是公开的 METI 数据。SPV 结构设计惯例和 IRR 范围是行业标准的讨论级描述，非单笔交易精度。海上风电第 1 轮中标方是公开的。具体的交易级披露已抽象化。

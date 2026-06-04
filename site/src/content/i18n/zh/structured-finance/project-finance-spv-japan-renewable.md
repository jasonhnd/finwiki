---
source: structured-finance/project-finance-spv-japan-renewable
source_hash: 82d60f4a5b13d9ec
lang: zh
status: machine
fidelity: ok
title: "日本可再生能源项目融资 SPV — 太阳能、风电、地热"
translated_at: 2026-06-01T04:15:40.095Z
---
# 日本可再生能源项目融资 SPV — 太阳能、风电、地热

## TL;DR

日本可再生能源项目——太阳能（公用事业级 PV）、陆上和海上风电、地热、生物质——通常通过有限追索 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV]] 结构融资，权益由综合商社财团出资，债务由巨型银行牵头的银团提供且常有地方银行参与，收入则来自长期 PPA 或 FIT/FIP 合同。2012 Feed-in Tariff（FIT）制度创造了十年高 IRR 公用事业级太阳能交易，奠定了可再生能源 SPV 市场；2022 向 Feed-in Premium（FIP）市场价格加溢价制度的过渡降低了名义 IRR，但保持了结构完整。海上风电第 1 轮中标（2021）和第 2 轮中标已将重心转移到由 [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corporation]]、[[financial-conglomerates/mitsui-co|Mitsui & Co.]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corporation]] 及财团伙伴作为权益发起人的大型海上风电 SPV。FIT 时代太阳能交易再融资为运营期债券或新 SPV 债务，如今已成为一个有意义的市场板块。

## Wiki 路径

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，作为**可再生能源项目融资**节点。政策金融侧（JBIC、NEXI、JOGMEC）请与 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]] 对照阅读，跨境资源项目背景请参阅 [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]。系统框架：法律结构见 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]，SPV 债务被评级时的评级处理见 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]，更广泛的基础设施资产融资背景见 [[real-estate-finance/INDEX|real-estate-finance index]]。

## 1. FIT 时代（2012–2022）— 背景

[[policy-finance/INDEX|METI]] 在 2012 年 7 月（福岛后能源政策转向）引入的 Feed-in Tariff（FIT）制度保证：
- 可再生电力的固定购买价格（¥/kWh）
- 长期限购买义务（公用事业级 PV 通常为 20 年）
- 输电公用事业强制购电

特别是对公用事业级太阳能：
- 初始 2012 电价为 ¥40/kWh（mega-solar）—— 按国际标准极高
- 随成本下降，电价每个财政年度递减
- 2012–2015 批次的批准锁定最高电价，并产生最大权益 IRR

FIT 制度吸引大量资本进入日本太阳能——国际开发商（部分后来退出）、日本商社、IPP 专业公司和机构基础设施投资者。到 2010年代末，日本已成为全球第三大太阳能市场。

## 2. 典型 FIT 时代公用事业级太阳能 SPV 结构

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

典型条款（FIT 时代、公用事业级、10–50MW）：
- **期限**：18–20 年（匹配 FIT 期限并带有保证金缓冲）
- **优先级 LTV**：项目成本的 65–80%
- **DSCR 目标**：基本情形 1.20x–1.40x，下行情形 1.10x
- **发起人权益 IRR**：8–15%（最高电价批次达到区间上端）
- **牵头安排人**：通常为 [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]] 或 [[financial-regulators/dbj|Development Bank of Japan]]
- **参与方**：地方银行（尤其是电站所在地都道府县的地方银行）
- **权益发起人**：综合商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corp]]）、IPP 专业公司、基础设施基金，以及（偶尔）作为 fund-of-SPV 结构 LP 的机构投资者

## 3. 陆上风电 — 结构

陆上风电 SPV 采用类似结构，但期限较短（15–18 年，匹配 FIT 风电电价）且 CAPEX 强度更高。陆上风电 FIT 采用速度慢于太阳能，原因包括：
- 日本高质量风资源场址有限
- 环境影响评价时间线常常超过 FIT 资格窗口
- 当地社区 / 土地使用反对拖慢许可

结果是风电项目管线小于 FIT 电价所暗示的规模。

## 4. 海上风电 — 新重心

随着 2018 《促进海域利用开发海洋可再生能源发电设施法》修订，日本启动了一系列**海上风电第 1 轮拍卖**（中标 2021）：

| 第 1 轮中标 | 场址 | 发起人财团（示例） |
|---|---|---|
| Akita（Noshiro and Mitane） | Akita Prefecture | 由综合商社和 IPP 组成的多方财团 |
| Choshi | Chiba Prefecture | 多方财团 |
| Yurihonjo | Akita Prefecture | 多方财团 |

第 2 轮及后续轮次已扩大项目管线。海上风电 SPV 的主要特征：
- **项目成本**以每个项目数千亿日元计
- **期限**：20–25 年
- **PPA / FIP** 结构（FIT 之后）
- **发起人财团**通常包括综合商社、日本电力公司和全球海上风电开发商（Ørsted 式国际伙伴）
- **牵头贷款人**包括 [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]]、[[financial-regulators/dbj|DBJ]]，以及（针对出口信用支持的涡轮机采购）[[financial-regulators/jbic|JBIC]] / [[policy-finance/nexi|NEXI]]
- **保险**：海上施工风险、天气风险、供应链风险

海上风电 SPV 比公用事业级太阳能 SPV 实质上更复杂——资本开支更高、建设期更长、交易对手更多、天气风险更高。

## 5. 地热 — 规模小但具有战略支持

地热项目数量较少，但作为基荷可再生资源受到政策支持。典型结构：
- **权益发起人**：电力公司（如 Kyushu Electric、Hokkaido Electric）、JOGMEC 支持的开发商、综合商社
- **债务**：巨型银行银团 + DBJ + 地方银行
- **勘探风险**：由 JOGMEC 权益 / 担保参与显著缓释
- **期限**：20+ 年
- **规模**：通常每个项目 10–30 MW

地热的勘探风险特征使其交易结构更接近上游油气，而不是太阳能。

## 6. 2022 FIT → FIP 过渡

自 2022, 年 4 月起，日本将新的公用事业级项目从 FIT（固定电价）过渡到 **FIP（Feed-in Premium）**：
- 发电商按批发市场价格出售
- 在其上获得溢价，以补足至 FIP 参考价格
- 承担 merchant-price risk（溢价作为部分抵消）

对 SPV 融资而言，这意味着：
- 现金流确定性低于 FIT
- 贷款人采用更保守的 DSCR，并要求对冲（与企业购电方签订 PPA、市场对冲）
- FIP 下新项目的 IRR 通常低于 FIT 时代批次
- 与日本大型企业（Sony、Amazon、Microsoft、Apple 供应商）的企业 PPA 已成为有意义的需求来源

## 7. 再融资周期

FIT 时代太阳能交易如今（2020年代中期）进入再融资窗口：
- 原始建设债务处于中期
- 运营记录允许以更低利差和更长有效期限再融资
- 部分发起人再融资为项目债格式，用于机构配售
- 其他发起人延长银行债务，并采用利差下调和更新后的契约包

在 DSCR 允许时，通过 cash-out refinancing 对权益再加杠杆（向发起人返还资本）也是一个特征。

## 8. 投资者和权益 IRR 动态

| 批次 | FIT 电价 | 权益 IRR 区间（估计） |
|---|---|---|
| 2012–2013 （高电价公用事业太阳能） | ¥36–40/kWh | 12–18% |
| 2014–2016 （递减） | ¥27–32/kWh | 9–13% |
| 2017–2019 （进一步递减 + 拍卖） | ¥18–24/kWh | 6–9% |
| 2020–2022 （最终 FIT） | ¥10–15/kWh 区间 | 5–7% |
| FIP 后（2022+） | 市场 + 溢价 | 5–8%（取决于 PPA / 对冲） |

“IRR 压缩”曲线是 FIT 时代成为高度集中资本部署窗口的原因之一。

## 9. 反方观点

- **“FIT 电价过于慷慨”** —— 2012 电价的批评者认为价格设计过度，将过多价值从电费缴纳者转移给发起人（尤其是早期批次的外国开发商）
- **“外国开发商退出”** —— 部分早期 FIT 时代外国开发商在锁定 FIT 后出售项目；二级市场出售捕获了本可留给运营发起人的价值
- **“海上风电第 1 轮定价争议”** —— 首轮中标引发了关于投标方法和某些财团主导地位的争议；后续轮次调整了评分
- **“电网约束”** —— 即使有 PPA / FIP 现金流可见性，日本北部的输电约束限制项目扩张；SPV 结构必须纳入限电风险
- **“FIP 需要对冲基础设施”** —— 日本企业 PPA 市场仍在发展；SPV 贷款人可能要求对冲安排，从而相比 FIT 时代的简单性增加成本

## 10. 开放问题

- 下一批海上风电中标，以及发起人集中度是否变化
- 在其他组合带来的资本压力下，日本银行是否降低可再生能源项目融资贷款意愿
- [[regional-banks/japan-post-bank|Japan Post Bank]] 和生命保险公司作为再融资周期中项目债买方的角色
- 随着 METI / GX 政策强调电网级电池储能和氢能，[[policy-finance/japan-project-finance-stack-diagram|policy-finance stack]] 如何适应
- 基础设施 J-REIT 或 YieldCo 是否为运营中可再生能源 SPV 提供公开市场退出
- [[financial-regulators/boj|BOJ]] 利率正常化下项目融资贷款的处理——再融资成本动态

## 相关

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

## 来源

- METI FIT / FIP scheme disclosures — https://www.meti.go.jp/english/
- JBIC project finance disclosures — https://www.jbic.go.jp/en/
- DBJ disclosures — https://www.dbj.jp/en/
- Megabank IR (project-finance loan disclosures)
- Sogo shosha IR — renewable equity disclosures (Mitsubishi Corp, Mitsui & Co, Sumitomo Corp)

---

> [!info] 校核状态
> confidence: **likely**. FIT 制度电价和递减历史是公开 METI 数据。SPV 结构惯例和 IRR 区间属于行业标准讨论层面的描述，不是单一交易精度。海上风电第 1 轮中标方是公开信息。具体交易级披露已抽象化。

---
source: structured-finance/credit-rating-methodology-jcr-r-and-i
source_hash: b326886005549815
lang: zh
status: machine
fidelity: ok
title: "日本结构化金融的信用评级方法（JCR、R&I）"
translated_at: 2026-06-01T04:15:40.104Z
---
# 日本结构化金融的信用评级方法（JCR、R&I）

## TL;DR

JCR（Japan Credit Rating Agency）和 R&I（Rating and Investment Information）是日本结构化金融领域两家主导性的国内信用评级机构。两者均被 FSA 指定为信用评级机构（相当于日本的 NRSRO 指定），并均发布 ABS、RMBS、CMBS 和证券化 SPC 的详细结构化金融准则。其方法论校准于日本特有的消费信贷、住房抵押贷款和商业房地产周期，并反映 2008-2010  CMBS 违约潮的经验。多数日本国内结构化交易需要 JCR / R&I 评级；S&P、Moody's、Fitch 会在跨境交易中选择性加入。使用本页理解 [[structured-finance/INDEX]] 中的评级机构方法论背景。

## Wiki 路由

| 需求 | 前往 |
|---|---|
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| 具体结构 | [[structured-finance/japan-rmbs-issuance-structure]], [[structured-finance/japan-cmbs-issuance-structure]], [[structured-finance/auto-loan-abs-japan-toyota-honda]], [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV 载体背景 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF MBS 背景 | [[structured-finance/jhf-mbs-mechanics]] |
| 领域索引 | [[structured-finance/INDEX]] |

## 1. JCR — Japan Credit Rating Agency

| 项目 | 详情 |
|---|---|
| 日文名称 | 株式会社日本格付研究所 |
| 成立 | 1985 |
| 所有权 | 独立，母公司上市 |
| 监管指定 | FIEA 下 FSA 指定信用评级机构 |
| 跨境等同性 | 在跨境交易中常与全球评级机构一并被认可 |
| 总部 | 东京 |

JCR 对公司发行人、主权、金融机构和结构化金融产品进行评级。在结构化金融方面，JCR 为 RMBS、CMBS、ABS 和证券化 SPC 维护详细准则页面。

## 2. R&I — Rating and Investment Information

| 项目 | 详情 |
|---|---|
| 日文名称 | 株式会社格付投資情報センター |
| 成立 | 1998 （由前身机构合并） |
| 所有权 | 与 Nomura 有关联 |
| 监管指定 | FIEA 下 FSA 指定信用评级机构 |
| 跨境等同性 | 在跨境交易中被认可 |
| 总部 | 东京 |

R&I 评级的产品范围与 JCR 相同。其方法论和评级尺度在概念上等价，但在校准和具体准则上有所不同。

## 3. FSA 指定（NRSRO 等同）

| 方面 | 详情 |
|---|---|
| 监管制度 | Financial Instruments and Exchange Act (FIEA) — 信用评级机构条款 |
| 指定 | FIEA 第 66-27  条下的“信用评级机构”地位 |
| 要求 | 独立性、方法论披露、利益冲突控制 |
| 全球认可的等同项 | 美国的 NRSRO (Nationally Recognized Statistical Rating Organization) |

JCR 和 R&I 是指定机构，使其在监管地位上与 S&P、Moody's、Fitch（也获 FSA 指定）等同。FSA 指定机构评级可用于多种监管和审慎目的（例如银行资本权重、保险公司投资准入指引）。

## 4. 方法论 vs S&P / Moody's / Fitch

| 维度 | JCR / R&I | S&P / Moody's / Fitch |
|---|---|---|
| 校准 | 日本国内消费信贷 / 住房抵押 / 房地产周期 | 全球 / 区域方法论 |
| 违约建模 | 以日本历史违约数据为主 | 跨境数据与日本数据合并 |
| 回收建模 | 日本特有房地产 / 破产制度 | 全球比较 |
| 压力情景 | 日本特有（例如地区经济下行、人口下降） | 全球压力方法论 |
| 评级尺度 | AAA 到 D（类似尺度） | AAA 到 D |
| notch 比较 | 同一日本交易上常与全球机构相当或高 1 个 notch | — |

常见观察是：JCR / R&I 有时对日本国内结构化交易给出等同或高于可比全球机构的评级。这反映违约建模校准差异，尤其是日本消费 / 住房抵押贷款组合历史上观察到的较低违约率。

## 5. 结构化金融准则 — 共通要素

| 要素 | 评级机构分析内容 |
|---|---|
| 资产池质量 | 历史违约 / 逾期 / 回收数据；集中度指标 |
| 服务机构 | 发起人能力；备用服务机构安排；服务机构垫款实践 |
| 结构 | 分层、次级化、OC、准备金、触发器、waterfall |
| 法律 | 真实出售、破产隔离、抵销风险、资产隔离 |
| 交易对手 | 受托人、swap 交易对手、账户银行评级及替换条款 |
| 现金流情景分析 | 提前还款、违约、回收、利率压力情景 |

评级反映在与评级类别相一致的压力情景下，被评级 tranche 的违约损失情景。

## 6. RMBS 准则细节

| 要素 | JCR / R&I 方法 |
|---|---|
| 资产池分层 | LTV 桶、DTI 桶、贷款期限、固定 / 浮动利率、地域分布 |
| 违约频率 | 以日本历史住房抵押贷款违约率（低基准）校准，并使用压力倍数 |
| 损失严重度 | 房地产回收情景压力（日本特有扣减） |
| 提前还款 | 保守；日本基准速度低于美国 |
| Senior 支持 | 按评级类别压力确定所需次级化 + OC + 准备金 |

结构应用见 [[structured-finance/japan-rmbs-issuance-structure]]。

## 7. CMBS 准则细节

| 要素 | JCR / R&I 方法 |
|---|---|
| 物业分析 | NCF（净现金流）压力、cap-rate 压力、再融资风险 |
| 贷款结构 | LTV、DSCR、摊还、balloon 风险 |
| Senior 支持 | 针对 2008-2010  违约潮教训设置高次级化 |
| Special servicer | 能力、费用经济性、workout 记录 |
| 集中度 | 单资产 / 单借款人分析 vs 多元化资产池 |

2008  后的 CMBS 准则明显比 2008  前年份更保守，反映评级机构对违约潮的回应——见 [[structured-finance/japan-cmbs-issuance-structure]]。

## 8. 近期评级行动

| 年份 | 模式 |
|---|---|
| 2008-2012 | 重大 CMBS 降级、conduit 交易损失 |
| 2012-2018 | 稳定；结构化降级较少；私募市场较小 |
| 2018-2020 | 稳定；部分 CMBS 复苏 |
| 2020-present | COVID 期间监测（影响温和）；物流 CMBS 表现强劲 |

## 9. 评级机构在交易经济性中的角色

| 利益相关方 | 为什么评级重要 |
|---|---|
| 投资者 | 决定 ALM / 监管组合的准入；影响 spread |
| 发起人 | 决定可实现的 senior-class 规模；驱动次级化经济性 |
| 受托人 / 安排人 | 协商由准则驱动的结构（触发器、准备金） |
| 监管者 | 银行资本权重、保险公司准入 |

实现目标 senior-class 评级（通常为 AAA）推动了交易结构设计的大部分工作。

## 10. 跨境交易

| 模式 | 典型评级组合 |
|---|---|
| 纯日本国内 | JCR + R&I（有时两家，有时一家） |
| 有外国投资者的日本交易 | JCR 或 R&I + 一家全球机构（S&P、Moody's 或 Fitch） |
| Toyota Financial Services 跨境 shelf | 多家全球机构 + JCR 或 R&I |
| 面向全球投资者的日本注册 CLO | JCR / R&I + Moody's 或 Fitch |

对于面向全球投资者的交易，来自 JCR / R&I 和一家全球机构的双评级很常见。

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[banking/INDEX]]
- [[finance/INDEX]]

## 来源

- JCR (Japan Credit Rating Agency), corporate site and structured-finance criteria.
- R&I (Rating and Investment Information), corporate site and structured-finance methodology.
- FSA, credit-rating-agency designation pages.
- JSDA (Japan Securities Dealers Association).

---
source: structured-finance/japan-green-securitization
source_hash: 481aee56ee8d3b9a
lang: zh
status: machine
fidelity: ok
title: "日本绿色证券化 — Green RMBS、ABS、SLB、Climate Bonds 认证"
translated_at: 2026-06-01T04:15:40.115Z
---
# 日本绿色证券化 — Green RMBS、ABS、SLB、Climate Bonds 认证

## TL;DR

日本的**绿色证券化**将**绿色 / 可持续债券标签**应用于资产支持结构 —— 主要包括 **green RMBS**（以节能住宅或认证绿色住宅抵押贷款为基础）、**green ABS**（以太阳能、风能、EV 充电或其他绿色基础设施应收款为基础的资产支持池），以及**可持续发展挂钩债券（SLB）叠加**结构，即发行人 SPV 承诺可持续发展 KPI，未达成时票息上调。该市场在结构上小于欧洲绿色证券化，但自 2018  年以来显著增长，驱动因素包括：(i) **[[policy-finance/japan-housing-finance-agency|JHF]] green MBS 发行**，以 Flat 35 S（节能住宅）贷款池为锚，(ii) 基于认证绿色住宅抵押贷款组合的 **megabank green RMBS**，(iii) 从太阳能 / 风能 feed-in-tariff 现金流打包而来的 **renewable-project receivable ABS**，(iv) 随着细分市场扩展而出现的 **EV-charging infrastructure ABS**，以及 (v) 随着车企金融子公司向 EV 资产池转型的 **green / sustainable auto ABS**。

该市场在 **ICMA Green Bond Principles / Sustainability Bond Guidelines** 框架下运行，并由日本特定的 **FSA 原则**补充（最显著的是 FSA / METI / MOE Green Bond Guidelines），同时越来越多地采用 **Climate Bonds Initiative (CBI) 认证**以获得全球投资者认可。CBI taxonomy 为绿色资产分类提供合格标准 —— 节能建筑、可再生能源发电、低碳交通、水务基础设施。将本条目作为 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] 与更广泛 ESG finance 之间的绿色证券化桥梁 —— green securitization 是与更广泛绿色 / 可持续债券市场重叠的证券化领域。

## Wiki 路线

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，作为**绿色证券化叠加节点** —— 资产支持结构的 ESG finance 专门化。请对照 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] 阅读整体证券化市场背景，对照 [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]] 阅读最接近的抵押品侧近亲（green RMBS 是一个子集），对照 [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]] 阅读公共部门 green-MBS 引擎，对照 [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS]] 阅读正在转向 EV 资产池的细分市场，对照 [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]] 阅读为 green ABS 提供上游资产的可再生项目层，对照 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] 阅读第二方意见提供方处理。系统框架：[[policy-finance/japan-housing-finance-agency|JHF]] 用于 green-Flat-35-S 锚点，[[banking/INDEX|banking domain]] 用于 megabank green-mortgage origination。

## 1. 绿色 / 可持续证券化 — 框架

| 标签 | 描述 |
|---|---|
| **Green bond** | 募集资金用途债券 —— 募集资金专用于绿色项目（可再生能源、能源效率、清洁交通、可持续水务等） |
| **Sustainability bond** | 募集资金用途债券 —— 绿色 + 社会用途资金的组合 |
| **Sustainability-linked bond (SLB)** | 票息 / 结构与发行人 KPI 达成挂钩 —— 不限制募集资金用途 |
| **Green securitization** | **底层抵押品**符合绿色资格的资产支持债券（例如节能住宅抵押贷款、可再生项目应收款）—— 在资产抵押品层面应用绿色标签 |
| **Climate Bonds Initiative (CBI) certified** | 按 CBI taxonomy 发行并经独立验证 —— 最严格的全球绿色标签 |
| **ICMA Green Bond Principles aligned** | 符合 ICMA 自愿流程指南 —— 应用最广泛 |

绿色证券化的独特之处在于它可以是**抵押品驱动**：绿色标签来自底层资产池的绿色特征，而不只是发行人层面的募集资金用途限制。这一点与标准公司绿色债券有实质区别。

## 2. 日本监管框架

| 主管机关 / 框架 | 作用 |
|---|---|
| **FSA Green / Sustainability / Sustainability-Linked Bond Guidelines** | 日本国内绿色债券发行指南，与 ICMA 对齐 |
| **MOE（环境省）Green Bond Guidelines** | 环境政策支持框架 |
| **METI** | 产业政策支持 —— 尤其针对可再生 / EV 相关绿色证券化 |
| **JCR / R&I second-party opinion (SPO)** | 国内绿色债券标签验证的 SPO 提供方 |
| **CBI certification** | 面向国际投资者发行时使用的全球严格认证 |
| **ICMA Green Bond Principles** | 自愿全球原则 |
| **EU Green Bond Standard (EU GBS)** | 对 2024  年 EU GBS 实施后面向欧盟机构投资者的发行具有相关性 |

日本没有具有约束力的法定绿色债券制度；该框架是**基于指南**而非法定制度，并由 SPO 和 CBI 第三方验证补充。

## 3. Green RMBS — JHF green Flat-35-S 锚点

[[policy-finance/japan-housing-finance-agency|JHF]] 是日本最大的绿色标签抵押贷款支持结构发行人，以 **Flat 35 S** 贷款池为锚。Flat 35 S 是 Flat 35  固定利率抵押贷款产品的能源效率优惠 —— 建造或购买节能认证住宅（通常为 Top Runner 级效率、ZEH / Net Zero Energy Houses）的借款人可在抵押贷款初期获得利率下调。

| JHF green MBS 特征 | 解读 |
|---|---|
| 抵押品 | 由认证节能住宅支持的 Flat 35 S 贷款 |
| 认证 | Building Energy Code 合规、ZEH 认证、Long-life Quality Housing 认证 |
| 发行结构 | Monthly Pass-Through MBS 结构（与标准 JHF MBS 相同），附绿色标签 |
| 投资者基础 | 日本机构 ESG / sustainable mandates 以及外国 ESG 投资者 |
| 评级 | 高投资级（JHF-equivalent） |
| 第二方意见 | 通常为 JCR 或 R&I SPO |

JHF green MBS 系列已成为日本机构 ESG 固定收益授权的基准。

### Megabank green RMBS

Megabank（[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]]）和信托银行已经基于认证绿色住宅抵押贷款组合发行**私人 green RMBS** —— 这些 Top Runner / ZEH / energy-efficient housing loans 通过 megabank 渠道发放。结构遵循 [[structured-finance/japan-rmbs-issuance-structure|standard private RMBS]]，并增加绿色标签验证层。

## 4. Green ABS — 可再生与 EV 充电应收款

| Green-ABS 资产类别 | 解读 |
|---|---|
| **Renewable energy project receivables ABS** | 来自太阳能 / 风能 / 生物质项目 SPV 的现金流 —— 通常由 feed-in-tariff (FIT) 收入或 PPA 现金流支持；上游见 [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]] |
| **EV-charging infrastructure ABS** | 来自 EV 充电网络运营的应收款 —— 随着 EV 部署扩大而出现的细分市场 |
| **Green auto loan ABS** | 由车企金融子公司证券化的 EV / 混合动力车辆贷款池 —— Toyota Finance、Honda Finance EV 部分的 [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS]] |
| **Energy-efficient equipment financing ABS** | 节能工业 / 商业设备的设备融资应收款 |
| **Green-building / green-mortgage commercial securitization** | 基于认证绿色商业物业的 CMBS 相邻结构 |

可再生应收款 ABS 市场高度依赖 **FIT 制度稳定性** —— FIT 定价或期限变化会影响底层现金流可预测性。

## 5. Sustainability-linked bond (SLB) 叠加

部分日本证券化 SPV 发行了 **SLB-overlay structures**，即债券在发行人未能达成预先承诺的可持续发展 KPI（例如 CO2  排放减少、可再生能源装机增加）时进行**票息上调**。

| SLB-overlay 特征 | 解读 |
|---|---|
| 募集资金用途限制 | 无（不同于 green bond） |
| KPI 承诺 | 发行人承诺可持续发展 KPI |
| 票息上调 | 若 KPI 未达成，票息上调（通常 25-50 bps）至剩余期限 |
| 验证 | 独立验证方评估 KPI 达成情况 |
| 投资者收益 | 对发行人达成 KPI 的结构性激励 |

SLB-overlay 在纯证券化中较少见（因为资产池结构已限制发行人灵活性），但会出现在以公司发行人为锚的交易中。

## 6. Climate Bonds Initiative (CBI) 认证

| CBI 特征 | 解读 |
|---|---|
| Taxonomy | 按资产类别（能源效率、可再生能源、低碳交通、水务基础设施）划分的详细合格标准 |
| 验证 | 由 CBI 批准验证方进行发行前和发行后独立验证 |
| 品牌认可 | 全球认可的严格绿色标签 |
| 投资者吸引力 | 面向 strict-mandate ESG funds 和国际 ESG 投资者 |
| 日本采用 | 包括部分证券化 SPV 在内的大型日本绿色债券发行人使用 |
| 披露 | 关于绿色资产表现和影响指标的发行后报告 |

CBI certification 比 ICMA Green Bond Principles alignment 更严格，常用于明确面向国际 ESG mandate 投资者的发行。

## 7. 与欧洲绿色证券化比较

| 方面 | 日本绿色证券化 | 欧洲绿色证券化 |
|---|---|---|
| 市场规模 | 较小；增长中 | 较大；已建立 |
| 监管框架 | 基于指南（FSA / MOE / METI guidelines + ICMA） | 法定 + 自愿（EU GBS 加 ICMA / CBI） |
| 锚定产品 | 基于 Flat 35 S 的 JHF green MBS | 成员国中多个法定绿色抵押贷款产品 |
| 投资者基础 | 日本机构 ESG mandate 加国际 ESG 投资者 | 欧洲 ESG mandate 加全球 ESG 投资者 |
| Renewable-receivable ABS | 较小但增长中 | 已达到规模 |
| 定价收益 | 历史上有小幅 "greenium"；因交易而异 | 部分细分市场存在 greenium |
| 验证生态系统 | JCR / R&I 加国际 SPO 提供方 | 更大且成熟的 SPO 与验证方生态 |

## 8. 反方观点

- **"Greenium is too small to justify the structuring effort"** —— 就纯定价而言属实，但发行人理由还包括投资者基础多元化和 ESG 报告可信度。
- **"Green-washing risk in green securitization"** —— 这是实质性担忧。缓释措施是资产池绿色合格性验证和发行后报告。
- **"Japanese green securitization is just JHF green MBS at scale"** —— 部分属实。私人 green RMBS 和 renewable ABS 规模较小，但正在增长。
- **"FIT-dependent renewable ABS is at risk from FIT regime changes"** —— 风险真实存在；结构性信用承销模型需要预期 FIT tariff 变化情景。
- **"CBI certification is too costly for small deals"** —— 属实；ICMA Green Bond Principles alignment + JCR/R&I SPO 是成本较低的替代方案。

## 相关

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS Japan]]
- [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japanese megabank covered bonds]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose company mechanics]]
- [[policy-finance/japan-housing-finance-agency|JHF]]
- [[policy-finance/INDEX|policy-finance index]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[INDEX|FinWiki index]]

## 来源

- FSA — https://www.fsa.go.jp/en/
- MOE (Ministry of Environment) — https://www.env.go.jp/en/
- Climate Bonds Initiative — https://www.climatebonds.net/
- ICMA Green Bond Principles — https://www.icmagroup.org/sustainable-finance/
- JCR — https://www.jcr.co.jp/en/
- R&I — https://www.r-i.co.jp/en/
- JHF — https://www.jhf.go.jp/about/index.html

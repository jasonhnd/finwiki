---
source: policy-finance/jogmec-equity-and-offtake-mechanics
source_hash: 9deddf0a438c1b88
lang: zh
status: machine
fidelity: ok
title: "JOGMEC 股权和承购机制"
translated_at: 2026-06-01T03:31:12.329Z
---

# JOGMEC 股权和承购机制

## Wiki 路径

此条目位于 [[policy-finance/INDEX|policy-finance index]] 下，作为 [[policy-finance/jogmec|JOGMEC (Japan Organization for Metals and Energy Security)]] 操作机制的深入探讨。请与 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]] 一起阅读，了解 JOGMEC 的股权/勘探风险如何体现在 [[financial-regulators/jbic|JBIC]] 贷款、[[policy-finance/nexi|NEXI]] 保险和大型银行商业债务之下； [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas investment loan underwriting process]] 用于经常遵循上游 JOGMEC 股权头寸的贷方流量；与 [[policy-finance/japan-policy-finance-system|Japan policy finance system]] 一起放置在更广泛的国家金融工具包中；并与 [[policy-finance/japan-eximbank-history|Japan Eximbank history]] 平行的机构重组背景。 JOGMEC 从 2022–2024  的石油/天然气/金属勘探支持转向更广泛的**经济安全**任务是近期的核心叙述。

## TL;DR
JOGMEC (独立行政法人 エネルギー・金属鉱物資源機構 — formerly the Japan Oil, Gas and Metals National Corporation) is the resource-security node of the Japanese state-finance system. Its operating model rests on three legs: **探鉱出資** (exploration equity / risk-sharing capital injection into Japanese-affiliated upstream projects), **開発出資** (development-stage equity in proven projects), and **鉱物備蓄** (state stockpiling of rare metals and oil / petroleum-products reserves), plus a fourth supporting leg of **liability guarantees and loan support** that lets Japanese trading houses and utilities raise commercial debt at the exploration / pre-FID stage. Equity tickets are typically minority slices behind a Japanese sponsor (Mitsui, Mitsubishi Corp, Sumitomo Corp, Itochu, Marubeni, Sojitz, JOGMEC's industrial partners) plus often a host-country NOC or NMC and an international major (TotalEnergies, Shell, BHP, Rio Tinto, Glencore, etc.). The state objective is **offtake** back to Japan — long-term LNG, oil, copper, nickel, lithium, cobalt, rare-earth, and uranium volumes routed into Japanese energy-utility and battery / EV supply chains. The 2023-04 statutory rebranding to "金属鉱物資源機構" (and operational expansion in 2024 with the new dedicated minerals fund and risk-bearing authority) explicitly broadened the mandate from oil / gas / metals to include strategic minerals critical to GX and 経済安全保障. JOGMEC's role in the project-finance stack is the equity / exploration-risk seat that the megabank syndicate and JBIC cannot price — its presence in the cap table is often the signal that lets the senior-debt layer come together.

## 1。机构/部门职务

|项目 |详情 |
|---|---|
| Legal entity | 独立行政法人 エネルギー・金属鉱物资源机构 (Japan Organization for Metals and Energy Security — JOGMEC) |
|法定名称|独立行政机构能源和金属国家公司法（原独立行政机构日本石油、天然气和金属国家公司法；更名为 2023-04） |
|监察部长 |经济产业大臣（METI；自然资源能源厅首席监督官） |
|前任 |日本国家石油公司 — JNOC + 日本金属矿业机构 → 2004  并入前 JOGMEC → 2023-04  品牌重塑 + 授权扩展 |
|表格 |行政机构法人——国家机构，而非特殊公司|
|资金基础|年度政府拨款（补贴+注资）+回收投资收益+选择性举债|
|授权范围|资源能源安全：上游参股、勘探风险分担、储备、技术开发、地质调查|

其制度形式在政策金融体系中具有独特性：JFC 和 JBIC 是株式会社（特殊公司）； NEXI is also a 株式会社 since 2017; JICA 是一个独立行政机构。 JOGMEC 是一个法人行政机构，反映了其作为两个早期国家实体（JNOC + 金属矿业机构）继承者的历史。这种形式在操作上很重要：拨款资助的股权注入、较少依赖债务发行以及明确的事后绩效评估框架。

### 1.1  JOGMEC 做什么——以及不做什么

- **做**：参股上游资源项目、分担勘探风险、运营国家库存、为勘探债务提供责任担保、开展地质/研发活动。
- **不**：发放经营贷款（即 [[financial-regulators/jbic|JBIC]] 或大型银行领土）、确保股本政治风险（即 [[policy-finance/nexi|NEXI]]）、交易实物商品、在自己的资产负债表上建设炼油厂/冶炼​​厂（这些炼油厂/冶炼​​厂与赞助商和下游实体坐在一起）。

JBIC 和 NEXI 之间的界限是结构性的，在实践中很少有争议：JOGMEC 吸收贷方和保险公司不会定价的上游风险；一旦该项目充分降低风险并可融资，JBIC 和 NEXI 就会处于下游。

### 2.1 产品/仪器表

|车道 |仪器|典型用途|对应|行业焦点 |
|---|---|---|---|---|
| **探鉱出资**（勘探股权）|向日系上游勘探SPV注入股权| FID前勘探、地质/储量确认风险承担资本|日本贸易公司/公用事业/专业采矿赞助商+经常主办国NOC/NMC+国际主要|石油、天然气、金属（铜、镍、钴、锂、稀土元素、铀）|
| **探鉱出资** |勘探阶段面积的资产收购支持|早期区块的股权收购 |日本赞助商|石油、天然气、金属 |
| **探鉱出资** |勘探借款的责任担保|银行贷款担保为勘探资本支出提供资金|日本赞助商+贷款银行|石油、天然气、金属 |
| **开発出资**（开发股权）|开发阶段股权注入（FID后）|开发/建设阶段股权结构表|日本赞助财团|液化天然气、铜、镍、锂、稀土、铀 |
| **开発出资** |为发展阶段的日资 SPV 提供贷款支持/准股权 |次级债务/准股权以桥接股权部分|日本赞助商|相同行业|
| **矿产库存** |国家储备战略稀有金属|为紧急/市场扰乱释放库存| METI / 自然资源和能源局指导 |镍、铬、锰、钒、钼、钨、钴、稀土 |
| **石油库存** |国家石油及石油产品库存管理|与私人库存协调的战略石油储备运作|自然资源和能源局|原油+石油产品|
| **技术开发/地质调查** |技术开发、地质调查、地热研发、甲烷水合物研发|竞争前研发、地质测绘、前沿资源研发|大学、研究联盟、工业界 |石油、天然气、地热、甲烷水合物、CCS |
| **地热** |地热勘探/开发支持|国内地热勘探股权/贷款支持|国内开发商|地热 |
| **CCS/氢/氨** |添加了 2023-04 rebrand 和 2024 expansion 的新任务区域 |碳储存开发、氢/氨供应链支持|产业联盟| CCS、氢气、氨|

数量和上限因项目而异，并通过经济产业省协调的股权决策流程决定；公开信息通常会披露赞助商财团和 JOGMEC 的参与情况，但没有确切的门票金额。

### 2.2  勘探权益 — 勘探权益

**探鉱出资**是JOGMEC结构上最有特色的产品。它解决的经济问题：FID 之前的资源勘探具有重尾损失分布、较长的交付周期以及频繁的干井/次经济结果。在地缘政治敏感的司法管辖区，仅靠私募股权资本无法为边际回报关键矿产提供资金。 JOGMEC 通过与日本赞助商以及（如适用）东道国和国际合作伙伴一起持有少数股权来填补这一空白。

- **权益工具**：JOGMEC 认购日本附属勘探 SPV 的股份； SPV 持有勘探面积/权利。
- **风险分担模式**：如果勘探确认商业储量，SPV将进入开发阶段，JOGMEC可以保留在股权结构表中，或者按照商定的条件将其股份出售给日本赞助商；如果勘探失败，JOGMEC 将承担其应承担的损失。
- **责任担保叠加**：JOGMEC 还可以为勘探资金提供银行贷款担保，允许赞助商在勘探阶段筹集商业债务，没有银行会裸露。
- **国家合作叠加**：许多勘探交易是通过双边资源外交框架构建的； JOGMEC 的存在在东道国政府中赢得了日本政府的信任。

### 2.3  开发权益 — 开发权益

**开発出资**一旦储量得到确认并且项目进入最终投资决定，即在开发/建设阶段开始。 JOGMEC 的股份通常是日本赞助商财团和国际巨头的少数股权。机制：

- 与日本贸易公司/公用事业股权赞助商和国际巨头一起参与资本表。
- 贷款支持/准股权叠加，项目结构受益于次级部分。
- 与高级债务层的 [[financial-regulators/jbic|JBIC]] 直接贷款和 [[policy-finance/nexi|NEXI]] 保险叠加相协调。
- 将承购回日本作为股权决策的结构特征 — JOGMEC 的任务是资源安全，股权参与通常以日本附属承购安排为条件。

### 2.4  矿物库存 — 矿物库存

JOGMEC 代表 METI 运营战略稀有金属的**国家备库**（国家库存）。该库存拥有明确的目标库存：镍、铬、锰、钒、钼、钨、钴和精选稀土。库存通过采购和销售进行周转；市场扰乱事件中的释放是通过 METI 的资源エネルギー庁进行政策协调的。国家库存与日本资源消费者根据单独的法定框架持有的强制性私人库存一起运作。

JOGMEC 还协调部分国家石油和石油产品库存，并在经济产业省的指导下与私营石油部门库存合作。

### 2.5 技术开发与地质调查

JOGMEC资助前沿资源技术的竞争前研发：甲烷水合物开发（一项针对日本专属经济区矿床的长期研发计划）、地热开发、CCS/CCUS、氢/氨供应链技术以及国内外资源识别的地质调查。这些资金通常是通过日本经济产业省的拨款而不是股权回报来资助的。

## 3。审核/承保流程

JOGMEC 的股权决策流程更接近开发银行股权委员会，而不是商业银行信贷委员会。典型的勘探投资或开发投资交易的端到端流程贯穿六个阶段。

### 3.1 Phase 1 —根据政策优先级进行管道筛选

- 通过日本赞助商提案、东道国资源外交框架或积极主动的 JOGMEC 部门/区域官员发起。
- 对照 METI 的能源基本计划、关键矿产战略和经济安全优先列表进行交叉核对。
- 部门/国家资格检查（在经济安全/制裁框架下，某些司法管辖区不会有新的投资）。

### 3.2 2  阶段 — 技术和地质尽职调查

- 对于勘探阶段的交易：地质数据审查、目标评估、赞助商/合作伙伴技术可信度评估。
- 对于开发阶段交易：确认储量评估、技术可行性审查、EPC 合同审查。
- JOGMEC 内部技术人员（地质学家、油藏工程师、采矿工程师）提供商业银行信贷团队通常无法比拟的针对特定部门的深入评估。

### 3.3 3  阶段 — 商业和结构审查

- 项目经济建模——资本支出、运营支出、承购价格情景、国家风险叠加。
- 赞助商/合作伙伴信用状况审查。
- 资本表和公司结构审查——通常是日本赞助商 + 东道国 NOC / NMC + 国际巨头背后的 JOGMEC 少数股权。
- 承运安排审查——确认日本附属承运路线。

### 3.4 阶段 4 —环境、社会和政策审查

- 发展阶段交易的环境和社会DD符合国际标准（赤道原则、国际金融公司绩效标准）；探索阶段占地面积更轻。
- 东道国政府参与和双边框架协调。
- 与经济产业省/自然资源和能源局进行政策审查，以确认战略一致性。

### 3.5 阶段5 —股权决策和批准

- 内部股权委员会以适当的门槛批准。
- 高级管理层/州长批准大额门票。
- METI 政策一致的战略/首创交易。
- 最大交易的董事会签字。

### 3.6 阶段6 —投后监控

- 通过上限表参与权（董事会观察员/提名人、信息权）进行持续监控。
- 项目里程碑跟踪（勘探钻井结果、储量确认、开发进度、COD）。
- 协调日本政府多层参与的项目的并行 [[financial-regulators/jbic|JBIC]] 和 [[policy-finance/nexi|NEXI]] 监测。
- 成功项目的退出/资产处置机制（如适用）；勘探失败的损失确认。

大型勘探/开发股权决策的承销周期可以持续数月，并且通常与高级债务层（JBIC + NEXI + 大型银行银团）上的并行项目融资承销周期同步。

## 4。与私人金融机构共同融资/合作

JOGMEC 是日本跨境资源金融体系中的上游风险所在地。其共同融资几何结构：

- **日本赞助商财团。** 默认合作伙伴组合：贸易公司（三井物产、三菱商事、住友商事、伊藤忠商事、丸红、双日）+公用事业公司（JERA、东京燃气、大阪燃气、关西电力、韩国电力）+特种矿业公司（住友金属矿业、三菱材料、JX Nippon Mining & Metals）占据多数股权； JOGMEC 获得少数股权/风险分担份额。
- **[[financial-regulators/jbic|JBIC]] 下游协调。** 一旦项目通过可融资的高级债务结构进入开发阶段，日本国际协力银行将在高级债务层获得直接贷款份额。 JOGMEC 在股权结构表中的存在通常是 JBIC 参与的先决条件；有关贷款方流程，请参阅 [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas investment loan underwriting process]]。
- **[[policy-finance/nexi|NEXI]] 保险覆盖。** NEXI 的海外投资保险可以覆盖日本赞助商的股权风险（并有选择地覆盖 JOGMEC 在某些结构中的股权）； NEXI 的贷款保险覆盖大型银行商业部分。
- **大型银行商业债务银团。** 一旦项目可融资，[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]] 和 [[megabanks/mizuho-fg|Mizuho FG]] 就会加入商业贷款层；一家银行通常扮演代理角色。有关分层几何形状，请参阅 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]]。
- **国际主要赞助商。** TotalEnergies、壳牌、BP、BHP、力拓、嘉能可、淡水河谷和类似的主要赞助商经常与日本赞助商+ JOGMEC 一起持有股权；国际大型企业的存在带来了运营专业知识。
- **东道国国家石油/矿业公司。** NOC / NMC 参与股权层，反映东道国政府对资源项目的参与。
- **多边联合融资。** 亚行/世界银行/国际金融公司/欧洲复兴开发银行可以与 JOGMEC 一起参与选定的开发阶段交易。

对于没有JOGMEC参与的纯私人上游投资，日本赞助商和国际巨头直接构建资本表，没有国家股权；对于需要深度勘探风险承受能力或在前沿管辖区进行同类开发的项目，JOGMEC 的股权成为结构性推动者。

## 5。政策目标和政府参与

JOGMEC 的姿态是由以下因素决定的：

- **日本经济产业省自然资源和能源机构**担任主要运营主管。
- **能源基本计划**（目前为 6th 计划，7th 计划审议关键矿产扩张）。
- **关键矿物战略**（后 2022  框架提升电池/电动汽车/半导体材料的供应链安全）。
- **GX推广策略**包括AZEC框架和氢/氨供应链。
- **经济产业省年度拨款**为股权参与和库存运营提供资金。
- **国会批准的注资**，用于主要任务扩展（最近的是 2024  关键矿产基金扩展）。
- **双边资源外交框架**（日本-澳大利亚、日本-印度尼西亚、日本-越南、日本-蒙古、日本-智利、日本-加拿大、日本-欧盟关键矿产伙伴关系等）。

结构性改革的历史：

- 日本国家石油公司 (JNOC) 在 1967  成立，以支持石油勘探。
- 日本金属矿业机构较早成立，负责金属勘探。
- 2004  合并，创建 METI 旗下的前 JOGMEC（日本石油、天然气和金属国家公司）。
- 2010扩展到稀土投资（2010 中国稀土出口限制事件后）和电池材料投资。
- 2023-04 法定更名为日本金属和能源安全组织，将授权范围扩大到CCS、氢/氨和明确的经济安全框架。
- 2024 专用关键矿产基金扩张和风险承担权限扩大，使JOGMEC能够以更灵活的损失承受能力参与更广泛的战略矿产交易。

## 6。经济安全/近期政策转变

2023-04 法定更名为“能源和金属国家公司”以及2024 基金扩张是JOGMEC后2022 围绕经济安全重新定位的最清晰的制度表达：

- **关键矿物供应链。** 镍、钴、锂、稀土（特别是重稀土）、石墨、铜、锰和电池级材料是明确的优先事项。自2022以来，对澳大利亚、加拿大、智利、印度尼西亚和非洲项目的股权参与力度不断加大。
- **电动汽车/电池下游联系。** JOGMEC 在上游材料方面的股权越来越与日本电池和电动汽车制造商的承购安排联系在一起。
- **供应链的友好支持。** 地理重点转向友好的司法管辖区，有效限制被认为与经济安全不相容的司法管辖区的新投资。
- **CCS/氢/氨。** 2023-04 rebrand 中添加了新的授权领域。 CCS 支持在脱碳框架内继续使用日本现有的化石基础设施；氢/氨支持能源转型/GX框架，包括东南亚的AZEC框架项目。
- **液化天然气的延续。** 通过参与发展股权以及加强新承诺的气候框架，长期液化天然气供应安全仍然是一个优先事项。
- **损失承担能力扩张。** 2024 基金扩张明确扩大了JOGMEC吸收地质/商业结果不确定的战略交易损失的权力。
- **国内资源开发。**持续关注国内地热、甲烷水合物研发、专属经济区资源勘探；相对于海外股权而言，其交易量较小，但具有政治象征意义。
- **加强双边资源外交。** 与澳大利亚、欧盟、加拿大、美国和选定的东南亚司法管辖区的双边关键矿产伙伴关系为 JOGMEC 股权参与的构建提供了外交框架。

重新定位并没有改变机制——与日本赞助商+国际合作伙伴一起进行少数股权/风险分担投资——而是将行业组合急剧转向关键矿产和能源转型技术，同时继续保留石油/天然气/金属的遗留风险。

## 7。承购机制——日本资源安全如何转化为项目结构

日本国家财政对上游项目的兴趣在运营上通过“承购”来表达——将项目生产的确定份额返还给日本消费者的长期合同权利。承购机械架构：

1。 **项目级承购协议。** 每个 JOGMEC 股权支持的项目通常都与日本贸易公司、公用事业公司或工业消费者签订长期承购协议，例如液化天然气项目的 15–20  年液化天然气销售和购买协议 (SPA)、采矿项目的长期精矿或精炼金属供应合同、电池材料项目的多年期钴/镍/氢氧化锂供应合同。
2。 **承购价格联动。** 承购定价通常参考国际基准指数（液化天然气的布伦特/JCC/亨利中心/TTF联动；基本金属的伦敦金属交易所；电池材料的现货/中点基准公式）加上结构要素（折扣、溢价、照付不议义务）。
3。 **承购量份额。** 日本赞助商的承购份额通常反映项目的股权份额，有时为非股权日本消费者提供仅限承购的参与权。
4。 **战略-石油-储备相互作用。** 对于石油/液化天然气，日本的承购既满足了最终用户的需求（公用事业/工业消费），又有助于国家库存框架下的库存缓冲。
5。 **电池/电动汽车供应链整合。** 对于关键矿产项目，下游的承购日益一体化——JOGMEC 在上游锂/镍/钴项目中的股权在结构上与日本电池制造商的供应合同挂钩，而供应合同本身又与日本/日本盟友电动汽车制造商的采购计划挂钩。
6。 **对冲。** 承购方使用商业衍生品（大型银行柜台、国际大宗商品交易商）对冲价格风险； JOGMEC 不直接对冲承购价格。

承购是一种运行机制，使上游股权成为一种资源安全工具，而不仅仅是一种金融投资。如果没有承购安排，JOGMEC 股权将只能带来投资回报，而不是证明国家股权模型合理性的实物供应安全。

## 8。比较地位——JOGMEC 与同行国家资源投资者

|尺寸| JOGMEC|韩国 KORES / KOMIR |中国国有资源企业|澳大利亚未来基金关键矿产投资|美国 DPA 第三章 + DOE 贷款计划办公室 |私营矿业专业|
|---|---|---|---|---|---|---|
|表格 |独立行政机构|韩国国家矿业/石油机构|国有企业（中石油、中石化、中海油、中铝、中冶、北方工业等）|主权财富基金部署|美国联邦当局|私营企业|
|指令姿势|少数股权+风险共担资源保障|通过少数股权实现资源安全|垂直整合的国企投资 |主权财富配置+战略|国防生产法+清洁能源贷款|商业回报 |
|资本基础 |日本经济产业省年度拨款|韩国国家拨款|国有资本+商业收入|主权财富|联邦拨款|股票/债务市场|
|承受损失的姿势|明确勘探损失授权|类似图案|具有隐式状态支持的商业风格 |有限的损失容忍度|变量|商业纪律|
|典型结构|日本赞助商背后的少数股权|韩国赞助商背后的少数股权|通常是多数/唯一赞助商|赞助商背后的少数股权|贷款+担保|多数/独家赞助商|
|地理焦点 |澳大利亚+印度尼西亚+拉丁美洲+非洲+加拿大|相似的地理位置|全球，包括一带一路司法管辖区 |澳洲+精选国际|美国+盟国司法管辖区 |全球|

这种比较突出了两个对比：(1) 在发达经济体国家投资者世界（日本、韩国、澳大利亚、美国），JOGMEC 的少数股权背后发起人模式具有广泛的代表性； (2) 中国国有企业采用不同的垂直整合模式运营，允许对战略资源项目进行多数或独家赞助，从而在招标过程中产生结构上不同的竞争动态。

＃＃ 有关的

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-project-finance-stack-diagram]]
- [[policy-finance/japan-eximbank-history]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/jogmec]]
- [[policy-finance/jbic-overseas-investment-underwriting-process]]
- [[policy-finance/nexi-export-credit-insurance-products]]
- [[policy-finance/nexi]]
- [[policy-finance/jica]]
- [[financial-regulators/jbic]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## 来源

- JOGMEC 公司概述 (https://www.jogmec.go.jp/english/about/overview.html) — 机构结构、任务、范围。
- JOGMEC 石油和天然气页面 (https://www.jogmec.go.jp/english/oilgas/index.html) — 石油/天然气勘探和开发支持产品。
- JOGMEC 金属页面 (https://www.jogmec.go.jp/english/metal/index.html) — 金属勘探和开发权益，包括关键矿物。
- JOGMEC 库存页面 (https://www.jogmec.go.jp/english/stockpiling/index.html) — 战略稀有金属和石油库存操作。
- METI 自然资源和能源局关键矿产战略材料 (https://www.enecho.meti.go.jp/en/category/special/article/detail_185.html) — 2022  后关键矿产推动的政策框架。
- METI 能源基本计划和战略中心 (https://www.meti.go.jp/english/policy/energy_environment/energy_strategy/) — JOGMEC 任务的部门政策背景。
- 独立行政机构《能源和金属国家公司法》——JOGMEC 的法定依据（更名为 2023-04）。
- 经合组织关于官方支持出口信贷的安排 (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understands/) — 管理联合融资合作伙伴（JBIC、NEXI）的国际规则手册。

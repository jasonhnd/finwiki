---
source: policy-finance/jogmec-equity-and-offtake-mechanics
source_hash: b8b28e8b8f15bf56
lang: zh
status: machine
fidelity: ok
title: "JOGMEC 股权与承购机制"
translated_at: 2026-06-19T13:13:22.629Z
---

# JOGMEC 股权与承购机制

## Wiki 路径

本条目位于 [[policy-finance/INDEX|policy-finance index]] 之下，作为关于 [[policy-finance/jogmec|JOGMEC (Japan Organization for Metals and Energy Security)]] 的运营机制深度解析。请与 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]] 一并阅读，了解 JOGMEC 的股权 / 勘探风险如何位于 [[financial-regulators/jbic|JBIC]] 贷款、[[policy-finance/nexi|NEXI]] 保险和大型银行商业债务之下；与 [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas investment loan underwriting process]] 一并阅读，了解经常紧随上游 JOGMEC 股权头寸之后的贷方流程；与 [[policy-finance/japan-policy-finance-system|Japan policy finance system]] 一并阅读，了解其在更广泛的国家金融工具箱中的位置；与 [[policy-finance/japan-eximbank-history|Japan Eximbank history]] 一并阅读，了解并行的机构重组背景。JOGMEC 从石油 / 天然气 / 金属勘探支持向更广泛的**经济安全**职能在 2022–2024 的转向，是近期的核心叙事。

## TL;DR

JOGMEC（独立行政法人 能源・金属矿物资源机构 — 前身为石油天然气・金属矿物资源机构）是日本国家金融体系中的资源安全节点。其运营模式建立在三大支柱之上：**探鉱出資**（向日本关联上游项目注入勘探股权 / 风险分担资本）、**開発出資**（已探明项目的开发阶段股权）、**鉱物備蓄**（稀有金属和石油 / 石油制品储备的国家储备），外加第四个辅助支柱**债务担保和贷款支持**，使日本商社和公用事业公司能够在勘探 / FID 前阶段筹集商业债务。股权份额通常是位于日本发起方（三井、三菱商事、住友商事、伊藤忠、丸红、双日、JOGMEC 的产业伙伴）之后的少数份额，且往往加上东道国的 NOC 或 NMC 以及一家国际巨头（TotalEnergies、Shell、BHP、Rio Tinto、Glencore 等）。国家目标是向日本的**承购（offtake）** — 将长期 LNG、石油、铜、镍、锂、钴、稀土和铀的数量导向日本能源公用事业及电池 / 电动汽车供应链。向「金属矿物资源机构」的 2023-04 法定更名（以及在 2024 凭借新设的专用矿物基金和风险承担权限实现的运营扩张）明确将职能从石油 / 天然气 / 金属扩大到包含对 GX 和经济安全保障至关重要的战略矿物。在项目融资栈中，JOGMEC 的角色是大型银行银团和 JBIC 无法定价的股权 / 勘探风险席位 — 其在股权结构表中的存在往往是让优先债务层得以成形的信号。

## 1. 機関 / 部門位置

| Item | Detail |
|---|---|
| Legal entity | 独立行政法人 エネルギー・金属鉱物資源機構 (Japan Organization for Metals and Energy Security — JOGMEC) |
| Statutory name | 独立行政法人エネルギー・金属鉱物資源機構法 (前身为 独立行政法人石油天然ガス・金属鉱物資源機構法；2023-04更名) |
| Supervising minister | 経済産業大臣 (METI；通过 資源エネルギー庁 进行主要监管) |
| Predecessor | 石油公団 (Japan National Oil Corporation — JNOC) + 金属鉱業事業団 (Metal Mining Agency of Japan) → 2004 并入前 JOGMEC → 2023-04 更名 + 职能扩展 |
| Form | 独立行政法人 (Incorporated Administrative Agency — 国家机构，而非特殊公司株式会社) |
| Funding base | 年度政府拨款 (补贴 + 资本注入) + 回收的投资回报 + 选择性债务筹集 |
| Mandate scope | 资源与能源安全：上游股权参与、勘探风险分担、储备、技术开发、地质调查 |

其机构形态在政策金融的星座中独具特色：JFC 和 JBIC 是株式会社（特殊公司）；NEXI 自 2017起也是株式会社；JICA 是独立行政法人。JOGMEC 是独立行政法人，反映了它作为两个早期国家实体（JNOC + 金属鉱業事業団）继承者的历史。这一形态在运营上很重要：拨款支持的股权注入、对债务发行的依赖较少，以及明确的事后业绩评估框架均适用。

### 1.1 JOGMEC 做什么 — 以及不做什么

- **做的**：在上游资源项目中持有股权、分担勘探风险、运营国家储备、为勘探债务提供债务担保、开展地质 / 研发活动。
- **不做的**：发放营运贷款（那是 [[financial-regulators/jbic|JBIC]] 或大型银行的领域）、为股权承保政治风险（那是 [[policy-finance/nexi|NEXI]]）、交易现货大宗商品、在自身资产负债表上建设炼油厂 / 冶炼厂（那些由发起方和下游实体承担）。

与 JBIC 和 NEXI 的边界是结构性的，在实务中很少有争议：JOGMEC 吸收贷方和保险人不会定价的上游风险；一旦项目充分去风险化达到可融资程度，JBIC 和 NEXI 便位于下游。

### 2.1 产品 / 工具表

| Lane | Instrument | Typical use | Counterpart | Sector focus |
|---|---|---|---|---|
| **探鉱出資** (Exploration equity) | 向日本关联上游勘探 SPV 注入股权资本 | FID 前勘探、地质 / 储量确认的风险承担资本 | 日本商社 / 公用事业 / 专业矿业发起方 + 往往东道国 NOC / NMC + 国际巨头 | 石油、天然气、金属 (Cu, Ni, Co, Li, REE, U) |
| **探鉱出資** | 对勘探阶段矿区的资产收购支持 | 在早期阶段区块中收购股份 | 日本发起方 | 石油、天然气、金属 |
| **探鉱出資** | 对勘探借款的债务担保 | 对为勘探 capex 提供资金的银行贷款的担保 | 日本发起方 + 贷款银行 | 石油、天然气、金属 |
| **開発出資** (Development equity) | 在开发阶段 (FID 后) 注入股权 | 开发 / 建设阶段股权结构表的股权部分 | 日本发起方财团 | LNG、铜、镍、锂、稀土、铀 |
| **開発出資** | 对开发阶段日本关联 SPV 的贷款支持 / 准股权 | 用于过桥股权部分的次级债务 / 准股权 | 日本发起方 | 同一板块 |
| **鉱物備蓄** (Mineral stockpiling) | 战略稀有金属的国家储备 | 为紧急 / 市场扰动释放而持有的库存 | METI / 資源エネルギー庁 指示 | Ni, Cr, Mn, V, Mo, W, Co, REE |
| **石油備蓄** (Oil stockpiling) | 国家石油及石油制品储备管理 | 与民间储备协调的战略石油储备运营 | 資源エネルギー庁 | 原油 + 石油制品 |
| **技術開発 / 地質調査** | 技术开发、地质调查、地热研发、甲烷水合物研发 | 竞争前研发、地质测绘、前沿资源研发 | 大学、研究财团、产业界 | 石油、天然气、地热、甲烷水合物、CCS |
| **地熱** | 地热勘探 / 开发支持 | 国内地热勘探股权 / 贷款支持 | 国内开发商 | 地热 |
| **CCS / hydrogen / ammonia** | 随 2023-04 更名和 2024 扩张新增的职能领域 | 碳封存开发、氢 / 氨供应链支持 | 产业财团 | CCS、氢、氨 |

各项目的数额和上限各不相同，并通过 METI 协调的股权决策流程决定；公开信息通常披露发起方财团和 JOGMEC 的参与，但不披露精确的份额规模。

### 2.2 探鉱出資 — exploration equity

**探鉱出資**是结构上最具特色的 JOGMEC 产品。它所解决的经济问题在于：FID 前的资源勘探具有重尾损失分布、长前置期，以及频繁的空井 / 不经济结果。仅靠民间股权资本不会在地缘政治敏感的法域为回报边际的关键矿物提供资金。JOGMEC 通过与日本发起方以及（在适用时）东道国和国际伙伴一并持有少数股权头寸来填补这一缺口。

- **股权工具**：JOGMEC 认购日本关联勘探 SPV 的股份；该 SPV 持有勘探矿区 / 权利。
- **风险分担模型**：若勘探确认商业储量，SPV 进入开发阶段，JOGMEC 可以继续留在股权结构表中，或按约定条件将其股份出售给日本发起方；若勘探失败，JOGMEC 吸收其所分担的损失。
- **债务担保叠加**：JOGMEC 还可以为为勘探提供资金的银行贷款提供担保，使发起方能够在勘探阶段筹集任何银行都不会无担保承做的商业债务。
- **国别合作叠加**：许多勘探交易通过双边资源外交框架来构建；JOGMEC 的存在向东道国政府传递与日本国家相一致的信誉。

### 2.3 開発出資 — development equity

**開発出資**在储量确认且项目进入 FID 后的开发 / 建设阶段启动。JOGMEC 的股份通常是位于日本发起方财团及国际巨头之后的少数份额。其机制为：

- 与日本商社 / 公用事业股权发起方及国际巨头一并参与股权结构表。
- 在项目结构受益于次级层级时进行贷款支持 / 准股权叠加。
- 在优先债务层与 [[financial-regulators/jbic|JBIC]] 直接放贷和 [[policy-finance/nexi|NEXI]] 保险叠加进行协调。
- 将向日本承购作为股权决策的结构性特征 — JOGMEC 的职能是资源安全，股权参与通常以日本关联的承购安排为条件。

### 2.4 鉱物備蓄 — mineral stockpiling

JOGMEC 代表 METI 运营战略稀有金属的**国家備蓄**（国家储备）。该储备持有以下品目的既定目标库存：镍、铬、锰、钒、钼、钨、钴和选定的稀土。库存通过买卖进行轮换；在市场扰动事件中的释放通过 METI 的资源エネルギー庁进行政策协调。国家库存与日本资源消费者根据另行的法定框架持有的强制性民间储备协同运营。

JOGMEC 还在 METI 指导下与民间石油板块储备一并协调国家石油及石油制品储备的部分内容。

### 2.5 技术开发与地质调查

JOGMEC 为前沿资源技术的竞争前研发提供资金：甲烷水合物开发（一项针对日本 EEZ 矿藏的长期研发计划）、地热开发、CCS / CCUS、氢 / 氨供应链技术，以及用于国内外资源识别的地质调查。这些通常通过 METI 拨款而非股权回报来提供资金。

## 3. 審査 / underwriting プロセス

JOGMEC 的股权决策流程更接近开发银行的股权委员会，而非商业银行的信贷委员会。一笔典型的 探鉱出資 或 開発出資 交易的端到端流程经过六个阶段。

### 3.1 Phase 1 — 对照政策优先事项的管线筛选

- 通过日本发起方提案、东道国资源外交框架，或主动出击的 JOGMEC 板块 / 区域负责人进行项目发起。
- 与 METI 的能源基本计划、关键矿物战略和经济安全保障优先清单进行交叉核对。
- 板块 / 国家资格审查（在经济安全 / 制裁框架下不向某些法域进行新投资）。

### 3.2 Phase 2 — 技术与地质尽职调查

- 对勘探阶段交易：地质数据审查、目标评估、发起方 / 伙伴技术信誉评估。
- 对开发阶段交易：已确认储量评估、技术可行性审查、EPC 合同审查。
- JOGMEC 内部技术人员（地质学家、油藏工程师、采矿工程师）提供商业银行信贷团队通常无法匹敌的深度板块专属评估。

### 3.3 Phase 3 — 商业与结构审查

- 项目经济性建模 — capex、opex、承购价格情景、国别风险叠加。
- 发起方 / 伙伴信用状况审查。
- 股权结构表及公司结构审查 — 通常是位于日本发起方 + 东道国 NOC / NMC + 国际巨头之后的少数 JOGMEC 股份。
- 承购安排审查 — 确认日本关联的承购导向。

### 3.4 Phase 4 — 环境、社会与政策审查

- 对开发阶段交易，与国际标准（赤道原则、IFC 绩效标准）相一致的环境与社会尽职调查；对勘探阶段则足迹更轻。
- 东道国政府接洽及双边框架对齐。
- 与 METI / 资源エネルギー庁进行政策审查以确认战略对齐。

### 3.5 Phase 5 — 股权决策与批准

- 在适当门槛上的内部股权委员会批准。
- 对较大份额的高级管理层 / 理事长批准。
- 对战略性 / 首创交易的 METI 政策同意。
- 对最大规模交易的董事会签署。

### 3.6 Phase 6 — 投资后监控

- 通过股权结构表参与权（董事观察员 / 提名人、信息权）进行持续监控。
- 项目里程碑追踪（勘探钻探结果、储量确认、开发进度、COD）。
- 对涉及多层日本国家参与的项目，与并行的 [[financial-regulators/jbic|JBIC]] 和 [[policy-finance/nexi|NEXI]] 监控进行协调。
- 对成功项目（在适用时）的退出 / 资产处置机制；对失败勘探的损失确认。

一笔大型勘探 / 开发股权决策的承销周期可达数月，通常与优先债务层上并行的项目融资承销周期（JBIC + NEXI + 大型银行银团）同步。

## 4. 民間金融機関との co-financing / 連携

JOGMEC 是日本跨境资源融资栈中的上游风险席位。其协同融资几何结构：

- **日本发起方财团。** 默认的伙伴组合：商社（三井、三菱商事、住友商事、伊藤忠、丸红、双日）+ 公用事业（JERA、东京燃气、大阪燃气、关西电力、KEPCO）+ 专业矿业公司（住友金属矿山、三菱材料、JX 金属）持有多数股权；JOGMEC 持有少数股权 / 风险分担份额。
- **[[financial-regulators/jbic|JBIC]] 下游协调。** 一旦项目越过勘探进入具有可融资优先债务结构的开发阶段，JBIC 便在优先债务层持有直接贷款份额。JOGMEC 在股权结构表中的存在往往是 JBIC 参与的前提条件；贷方流程参见 [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas investment loan underwriting process]]。
- **[[policy-finance/nexi|NEXI]] 保险叠加。** NEXI 的海外投资保险可以叠加在日本发起方的股权敞口上（在某些结构中也选择性地叠加在 JOGMEC 的股权上）；NEXI 的贷款保险叠加在大型银行的商业批次上。
- **大型银行商业债务银团。** [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]] 和 [[megabanks/mizuho-fg|Mizuho FG]] 在项目达到可融资程度后加入商业贷款层；通常一家银行担任代理人角色。分层几何结构参见 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]]。
- **国际巨头发起方。** TotalEnergies、Shell、BP、BHP、Rio Tinto、Glencore、Vale 及类似巨头常与日本发起方 + JOGMEC 一并持有股权；国际巨头的存在带来运营专长。
- **东道国国营石油 / 矿业公司。** NOC / NMC 在股权层参与，反映东道国政府对资源项目的参与。
- **多边协同融资。** ADB / 世界银行 / IFC / EBRD 的参与可以在选定的开发阶段交易中与 JOGMEC 一并构建。

对于不涉及 JOGMEC 参与的纯民间上游投资，日本发起方和国际巨头在没有国家股权的情况下直接构建股权结构表；对于需要深度勘探风险承担能力或在前沿法域进行首创开发的项目，JOGMEC 的股权成为结构性的促成因素。

## 5. 政策目標と政府関与

JOGMEC 的姿态由以下因素塑造：

- 作为主要运营监管者的**资源エネルギー庁 (METI Agency for Natural Resources and Energy)**。
- **能源基本计划**（当前为第 6次计划，并伴有关于关键矿物扩展的第 7次计划审议）。
- **关键矿物战略**（提升电池 / 电动汽车 / 半导体材料供应链安全的 2022 后框架）。
- 包含 AZEC 框架及氢 / 氨供应链的 **GX 推进战略**。
- 为股权参与和储备运营提供资金的**年度 METI 拨款**。
- 为重大职能扩展提供的**国会批准的资本注入**（最近是 2024 关键矿物基金扩张）。
- **双边资源外交框架**（日澳、日印尼、日越、日蒙、日智、日加、日欧关键矿物伙伴关系等）。

结构性改革的历史：

- 石油公団 (JNOC) 于 1967 设立以支持石油勘探。
- 金属鉱業事業団 (Metal Mining Agency of Japan) 更早设立以进行金属勘探。
- 2004 的合并在 METI 之下创设了前 JOGMEC (Japan Oil, Gas and Metals National Corporation)。
- 2010年代向稀土投资（2010 中国稀土出口限制事件之后）和电池材料投资的扩展。
- 向 エネルギー・金属鉱物資源機構（英名 Japan Organization for Metals and Energy Security）的 2023-04 法定更名，将职能扩大到 CCS、氢 / 氨以及明确的经济安全保障框架。
- 2024 的专用关键矿物基金扩张及风险承担权限扩展，使 JOGMEC 能够以更灵活的损失承担能力参与更广泛的战略矿物交易。

## 6. 経済安全保障 / 最近の方針シフト

向「エネルギー・金属鉱物資源機構」的 2023-04 法定更名及 2024 基金扩张，是 JOGMEC 围绕经济安全保障的 2022 后重新定位的最清晰的机构表达：

- **关键矿物供应链。** 镍、钴、锂、稀土（尤其是重稀土）、石墨、铜、锰和电池级材料是明确的优先事项。自 2022以来，对澳大利亚、加拿大、智利、印尼和非洲项目的股权参与已加速。
- **电动汽车 / 电池下游联结。** 上游材料中的 JOGMEC 股权越来越多地与日本电池电芯及电动汽车制造商的承购安排挂钩。
- **供应链的友岸外包（friend-shoring）。** 地理重心向友好法域转移，并实质性地抑制对被视为不符合经济安全的法域的新投资。
- **CCS / 氢 / 氨。** 在 2023-04 更名中新增的职能领域。CCS 支持在脱碳框架下继续使用日本现有的化石基础设施；氢 / 氨支持能源转型 / GX 框架，包括东南亚的 AZEC 框架项目。
- **LNG 延续。** 长期 LNG 供应安全仍是通过开发股权参与实现的优先事项，同时对新承诺采取更严格的气候框架。
- **损失承担能力扩张。** 2024 基金扩张明确扩大了 JOGMEC 在地质 / 商业结果不确定的战略交易中吸收损失的权限。
- **国内资源开发。** 持续关注国内地热、甲烷水合物研发和 EEZ 资源勘探；相对于海外股权而言数量较小，但在政治上具有象征意义。
- **双边资源外交强化。** 与澳大利亚、欧盟、加拿大、美国及选定的东南亚法域的双边关键矿物伙伴关系，提供了构建 JOGMEC 股权参与的外交框架。

这一重新定位并未改变机制 — 与日本发起方 + 国际伙伴一并的少数股权 / 风险分担投资 — 但在继续保有石油 / 天然气 / 金属传统敞口的同时，将板块组合急剧转向关键矿物和能源转型技术。

## 7. Offtake mechanics — 日本的资源安全如何转化为项目结构

日本对上游项目的国家金融利益，在运营上通过**承购（offtake）** — 将项目产量的既定份额导回日本消费者的长期合同权利 — 来表达。承购机制的架构：

1. **项目层面的承购协议。** 每个受 JOGMEC 股权支持的项目通常与日本商社、公用事业或工业消费者订有长期承购协议 — 例如，LNG 项目的 15–20 年 LNG 买卖协议 (SPA)、矿业项目的长期精矿或精炼金属供应合同、电池材料项目的多年期钴 / 镍 / 氢氧化锂供应合同。
2. **承购价格挂钩。** 承购定价通常参照国际基准指数（LNG 挂钩 Brent / JCC / Henry Hub / TTF；基础金属挂钩 LME；电池材料采用现货 / 中点基准公式）外加结构化要素（折扣、溢价、照付不议义务）。
3. **承购数量份额。** 日本发起方的承购份额通常反映其在项目中的股权份额，有时还包括非股权日本消费者的仅承购参与权。
4. **战略石油储备的相互作用。** 对石油 / LNG 而言，日本的承购既满足终端用户需求（公用事业 / 工业消费），又为国家储备框架下持有的库存缓冲做出贡献。
5. **电池 / 电动汽车供应链整合。** 对关键矿物项目而言，承购越来越多地向下游整合 — 上游锂 / 镍 / 钴项目中的 JOGMEC 股权在结构上与日本电池电芯制造商的供应合同挂钩，后者本身又与日本 / 日本盟友电动汽车制造商的采购计划挂钩。
6. **套期保值。** 承购方使用商业衍生品（大型银行交易台、国际大宗商品交易商）对价格风险进行套期保值；JOGMEC 不直接对承购价格进行套期保值。

承购是使上游股权成为资源安全工具而非纯粹金融投资的运营机制。若没有承购安排，JOGMEC 股权将仅带来投资回报，而非证明国家股权模式合理性的现货供应安全。

## 8. 比较定位 — JOGMEC 对照同业国家资源投资者

| Dimension | JOGMEC | Korean KORES / KOMIR | Chinese state-owned resource SOEs | Australian Future Fund critical-minerals investment | US DPA Title III + DOE Loan Programs Office | Private mining majors |
|---|---|---|---|---|---|---|
| Form | 独立行政法人 | 韩国国家矿业 / 石油机构 | 国有企业 (CNPC, Sinopec, CNOOC, Chinalco, MCC, Norinco 等) | 主权财富基金部署 | 美国联邦当局 | 私营企业 |
| Mandate posture | 通过少数股权 + 风险分担实现资源安全 | 通过少数股权实现资源安全 | 垂直整合的国家-企业投资 | 主权财富部署 + 战略性 | 国防生产法 + 清洁能源贷款 | 商业回报 |
| Capital base | 年度 METI 拨款 | 韩国国家拨款 | 国家资本 + 商业收入 | 主权财富 | 联邦拨款 | 股权 / 债务市场 |
| Loss-bearing posture | 对勘探的明确损失授权 | 类似模式 | 带有隐性国家兜底的商业式 | 有限的损失容忍度 | 可变 | 商业纪律 |
| Typical structure | 位于日本发起方之后的少数股权 | 位于韩国发起方之后的少数股权 | 往往为多数 / 单独发起方 | 位于发起方之后的少数股权 | 贷款 + 担保 | 多数 / 单独发起方 |
| Geographic focus | 澳大利亚 + 印尼 + 拉美 + 非洲 + 加拿大 | 类似地理 | 全球，包括一带一路法域 | 澳大利亚 + 选定国际 | 美国 + 盟友法域 | 全球 |

该比较凸显两点对照：(1) 在发达经济体国家投资者的世界（日本、韩国、澳大利亚、美国）中，JOGMEC 的「位于发起方之后的少数股权」模式大体上具有代表性；(2) 中国 SOE 以一种不同的垂直整合模式运营，允许对战略资源项目进行多数或单独发起，从而在招标过程中产生结构上不同的竞争动态。

## Related

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

## Sources

- JOGMEC corporate overview (https://www.jogmec.go.jp/english/about/overview.html) — 机构结构、职能、范围。
- JOGMEC oil and gas page (https://www.jogmec.go.jp/english/oilgas/index.html) — 石油 / 天然气勘探与开发支持产品。
- JOGMEC metals page (https://www.jogmec.go.jp/english/metal/index.html) — 金属勘探与开发股权，包括关键矿物。
- JOGMEC stockpiling page (https://www.jogmec.go.jp/english/stockpiling/index.html) — 战略稀有金属与石油储备运营。
- METI 資源エネルギー庁 critical-minerals strategy materials (https://www.enecho.meti.go.jp/en/category/special/article/detail_185.html) — 2022 后关键矿物推进的政策框架。
- METI Energy Basic Plan and strategy hub (https://www.meti.go.jp/english/policy/energy_environment/energy_strategy/) — JOGMEC 职能的板块政策背景。
- 独立行政法人エネルギー・金属鉱物資源機構法 — JOGMEC 的法定依据 (2023-04更名)。
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/) — 规范协同融资伙伴 (JBIC, NEXI) 的国际规则手册。

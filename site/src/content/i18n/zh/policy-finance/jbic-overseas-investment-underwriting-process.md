---
source: policy-finance/jbic-overseas-investment-underwriting-process
source_hash: 2f068d2d6cec51e3
lang: zh
status: machine
fidelity: ok
title: "JBIC 海外投资贷款的审查流程"
translated_at: 2026-06-19T12:43:19.850Z
---

# JBIC 海外投资贷款的审查流程

## Wiki route

本条目归属于 [[policy-finance/INDEX|policy-finance index]]，作为关于 [[financial-regulators/jbic|国際協力銀行 (JBIC)]] 的审查流程深入解析。请与 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]]（JBIC 贷款如何与 [[policy-finance/nexi|NEXI]] 保险、[[policy-finance/jogmec|JOGMEC]] 股权及大型银行商业债务并列）一并阅读；与 [[policy-finance/oecd-export-credit-arrangement|OECD Export Credit Arrangement]]（JBIC 运营所遵循的期限上限）；与 [[policy-finance/jica|JICA]]（政策分工另一侧的 ODA 融资边界）；与 [[policy-finance/japan-eximbank-history|Japan Eximbank history]]（2012 之前的机构史）；以及与 [[finance/japan-acquisition-finance|Japan acquisition finance]]（同样的大型银行如何为私募跨境交易做银团与组成）。

## TL;DR

JBIC 的审查围绕一个二元资金账户区分构建 —— **一般业务账户（一般業務勘定）** 对 **特别业务账户（特別業務勘定）** —— 并在其上叠加一套产品分类，从 **出口买方信贷 / 卖方信贷** 经 **资源进口的进口贷款**、**海外投资贷款（OIL）**、**非约束性贷款（untied loan）**，再选择性地延伸至 **股权参与**。特别业务账户（2016设立）明确授权 JBIC 在一般业务账户无法定价的政策战略性、较高风险交易上承担损失 —— 半是政策性银行，半是国家出资的商人银行。审查流程本身大致分六个阶段推进：**(1) 政策 / 项目管线筛查**（对照 METI / MOFA / MAFF 优先事项及 JBIC 中期经营计划）；**(2) 初步信用与国别风险筛查**（对照 JBIC 国别限额与主权评级）；**(3) 详细信用委员会工作**（伴随技术、环境与法律顾问，对于项目融资会动员标准的贷款人工程师 / 市场顾问 / 法律尽职调查堆栈）；**(4) **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]** 合规审查**（最低保费、还款条件、气候 / 煤炭行业谅解）；**(5) 债权人间与协调融资结构化**（与大型银行（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]]）、[[policy-finance/nexi|NEXI]]，以及在相关时与同业 ECA（US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance））；以及 **(6) 总裁批准与董事会签署**（先于执行共同条款 / 贷款协议及担保信托）。自 2022 以来，JBIC 的政策姿态已显著转向 **GX（能源 / 脱碳）、关键矿产供应链、友岸外包、半导体，以及经筛选的对外 M&A** 支持，同时平行地退出新建燃煤火力融资并收紧 LNG 气候框定。

## 1. 机关 / 部门定位

| Item | Detail |
|---|---|
| Parent entity | [[financial-regulators/jbic|JBIC]] (株式会社国際協力銀行), 100% state-owned special company, sole shareholder 財務大臣 |
| Statutory basis | 株式会社国際協力銀行法 (平成 23 年法律第 39 号) |
| Predecessor history | 日本輸出銀行 (1950) → 日本輸出入銀行 (1953) → 統合 + OECF (1961) → 旧 JBIC (1999) → JFC 統合 (2008-10) → 再独立 (2012-04) — see [[policy-finance/japan-eximbank-history|Japan Eximbank history]] |
| Fund-account split | **一般業務勘定** (General Operations) for standard policy-finance lending and **特別業務勘定** (Special Operations) for higher-risk policy-strategic transactions, established 2016 |
| Business lines | Export credit (buyer / supplier), import credit (resource imports), overseas investment loan, untied loan, equity participation, guarantee, bond-purchase facilities |
| Funding base | FILP borrowing, government-guaranteed bond issuance, foreign-currency funding via FILP foreign-bond programs; balance-sheet currency mix mostly USD given underlying loan-book currency |
| Supervising authorities | 財務大臣 (株主・主管); METI on industrial-policy coordination; MOFA on bilateral / regional coordination |

一般业务账户对特别业务账户的区分，是审查目的下最重要的结构性特征。一般业务账户受典型的政策性银行信用纪律约束；特别业务账户的设立，正是为了让 JBIC 能在否则无法融资的政策战略性交易上承担损失。

### 2.1 产品分类

| Product line | Borrower | Typical use | OECD Arrangement applicability | Account |
|---|---|---|---|---|
| **Export buyer credit** | Foreign buyer of Japanese goods / services | Foreign purchase of Japanese plant, ship, rolling stock, satellite, equipment | Yes — Arrangement applies | General + Special |
| **Export supplier credit** | Japanese exporter | Receivables financing on long-tenor export contracts | Yes | General |
| **Import loan** | Japanese importer / commodity buyer | Long-term resource import contracts (LNG, oil, metals) tied back to Japanese energy / commodity security | Yes (where export-credit-equivalent terms) | General + Special |
| **Overseas investment loan (OIL)** | Japanese-affiliated overseas SPV / Japanese parent | Equity contributions, subordinated financing, working capital for overseas projects and subsidiaries | Partial (Arrangement applies to export-credit-equivalent slices) | General + Special |
| **Untied loan** | Sovereign / sovereign-adjacent foreign borrower | Industrial development, infrastructure, resource-security support without product-tied contract | Yes (untied loan disciplines) | General + Special |
| **Equity participation** | Project SPV / industrial entity | Minority equity in strategic projects (energy, supply chain, critical minerals, GX) | Outside Arrangement (equity, not loan) | Special primarily |
| **Guarantee** | Commercial banks / bondholders | Guarantee of commercial-bank loans, bond issuance | Yes for export-credit-equivalent terms | General + Special |
| **Bond purchase** | Foreign-state issuer / supranational | Direct purchase of foreign-state or supranational bonds | Outside core ECA frame | Special |

「JBIC 海外投资审查」最常指代的主力产品是 **海外投资贷款（OIL）** —— 面向日本关联的海外 SPV，或面向日本母公司用于跨境股权注入的长期贷款。

### 2.2 ODA 日元贷款 vs 特别业务账户 —— 分界线

重要边界：**ODA 日元贷款** 由 [[policy-finance/jica|JICA]] 运营，而非 JBIC。1999-2008 的法定前身将旧 JBIC 的 ODA 部门（OECF 谱系）与其政策金融部门合并；随后，2003-10 的 ODA 向 JICA 迁移，以及 2008 / 2012 的 JFC 插曲，将商业级的海外金融与 ODA 赠款 / 优惠贷款分离开来。特别业务账户**不是** ODA —— 它是由国会拨款针对潜在损失授权的、承担风险的政策金融贷款及股权活动，而非依据扶贫标准的优惠 ODA 融资。

对审查的含义：一个前沿国家的基础设施项目可能既有 ODA 融资的构成部分（技术援助、项目邻近的公共基础设施 —— 由 JICA 融资），又有伴随 JBIC OIL + NEXI 保障 + 大型银行份额的商业级项目融资。这两条通道有不同的文件、不同的治理和不同的财政姿态，JBIC 的审查委员会将 JICA 融资的部分视为外生背景，而非其自身信用决策的一部分。

### 2.3 最常出现的行业类别

实务中，JBIC 的海外投资贷款账本偏向于一组反复出现的行业纵向领域：

- **能源（LNG、石油天然气上游、中游、IPP 发电）。** 历史上敞口最大；自 2021 以来因气候框定而被大幅重塑。
- **基础设施（铁路 / 地铁、港口、水务、电信）。** 常伴随车辆或设备出口，出现买方信贷 / 卖方信贷的叠加。
- **关键矿产与电池供应链。** 自 2022 以来权重上升 —— 铜、镍、锂、钴、稀土，加上电池 / EV 下游。
- **半导体与高科技产业供应链。** 友岸外包的叠加。
- **对外日本企业 M&A。** 在 JBIC OIL 份额补充大型银行银团收购份额的中至大型日本企业跨境收购中 —— 与 [[finance/japan-acquisition-finance|Japan acquisition finance]] 所述结构相连，但 JBIC 份额承载政策对齐的票据。
- **可再生能源、氢 / 氨、CCS。** 自 2022以来在 GX 框架下的重点增长领域。
- **航空航天与国防邻接。** 选择性地，主要通过出口买方信贷。

这一组合由 JBIC 中期经营计划（当前强调 GX、供应链韧性、友岸外包、对外 M&A）以及 METI / MOFA 优先事项塑造。

## 3. 审查 / underwriting 流程

一笔典型的大型海外投资贷款或非约束性贷款，其端到端的审查流程经过六个阶段。

### 3.1 Phase 1 — 政策 / 项目管线筛查

- 通过入站咨询（日本发起人、外国借款人、同业 ECA 引荐）或由 JBIC 行业 / 地区官员主动覆盖来进行项目发起。
- 对照 JBIC **中期经营计划** 的政策优先清单，以及 METI / MOFA 主导的行业总规划（能源战略、关键矿产战略、基础设施出口战略）进行交叉核查。
- 对于可能进入特别业务账户的案例，就该交易是否可能产生损失但具政策正当性进行早期判断（驱动账户选择）。
- 对于气候敏感行业，对照 JBIC 已公布的气候融资姿态（如：不再新建海外燃煤火力发电；收紧 LNG 融资条件）进行早期核查。

### 3.2 Phase 2 — 初步信用与国别风险筛查

- 使用与 [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]] 国别风险分类（Country Risk Classification 0–7）对齐的 JBIC 内部国别评级进行国别风险分类。
- 对照 JBIC 投资组合限额核查国别敞口限额。
- 发起人 / 借款人初步信用筛查 —— 对项目融资，关注发起人组合（日本商社、日本电力公司、东道国 NOC / 国营矿业公司、国际巨头）；对面向日本母公司的 OIL，关注母公司评级与合并杠杆。
- 初步结构化观点 —— 单一名称企业贷款对项目融资对主权背书的非约束性贷款 —— 驱动下游的顾问动员。

### 3.3 Phase 3 — 详细信用委员会工作与尽职调查

对于项目融资 OIL，会动员标准的顾问堆栈：

- **贷款人技术顾问** —— 工程与建设风险审查。
- **贷款人市场顾问** —— 承购 / 市场价格建模（LNG netback、矿业承购经济性、购电协议现金流稳定性）。
- **贷款人保险经纪人** —— 包括 [[policy-finance/nexi|NEXI]] 保障及任何私募政治风险保险叠加的安排结构。
- **贷款人法律顾问** —— 日本侧及东道国法律顾问；文件标准通常与国际项目融资 LMA 风格先例对齐。
- **环境与社会尽职调查** —— 对照 JBIC 的 **环境社会考量确认指南**（即「JBIC 指南」，与 OECD 共同方针及赤道原则对齐）进行评估。
- 内部信用建模（DSCR 预测、下行情景压力、贷款期限覆盖率、国别风险叠加）。
- 内部行业 / 板块审查（如：对 LNG，关注对长期天然气需求情景的敏感性；对关键矿产，关注对价格暴跌的敏感性）。

对于单一名称企业 OIL（如面向为外国收购融资的日本母公司的贷款），顾问动员通常较轻，焦点转向母公司评级分析、结构性信用支持和交易后监测条款 —— 类似于 [[finance/japan-acquisition-finance|Japan acquisition finance]] 所述的大型银行收购贷款流程。

### 3.4 Phase 4 — OECD Arrangement 合规审查

- 在国别风险分类下计算最低保费率（MPR）。
- 还款期限上限核查（目前，典型出口信贷最长 10 年，可再生 / 气候友好型交易 14 年，在行业谅解下的部分项目融资类别 18 年）。
- 首付最低额（通常 15%）及结构化还款曲线合规。
- **煤炭行业谅解（2021 修订）** —— 对遵循 OECD Arrangement 的成员而言，实际上封堵了新建燃煤火力融资。
- 用于可再生能源、水务及某些气候友好型项目的 **气候变化行业谅解**。
- 对于非约束性贷款，遵循 Arrangement 下的非约束性贷款各项纪律。
- 对于特别业务账户交易，账户特定合规外加更高风险的政策正当性文件。

这一合规审查举足轻重：在一般业务账户下不符合 Arrangement 参数的交易，只有在具备明确政策正当性时，才可能被改道至特别业务账户。

### 3.5 Phase 5 — 债权人间 / 协调融资结构化

- **大型银行协调融资结构化。** 几乎所有大型 OIL 交易都伴随由 [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]] 提供的平行商业份额，通常由一家银行担任 **代理行 / 便利行**。
- **NEXI 叠加结构化。** 保险保障可能包裹商业份额的一部分或股权敞口的一部分；结构选择由 JBIC 与 [[policy-finance/nexi|NEXI]] 共同协商。
- **同业 ECA 协调融资。** 对于大型 LNG、矿业或铁路 / 地铁交易，与 US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance、EDC 并列的平行 ECA 融资十分常见。JBIC 与同业 ECA 共同参与共同条款协议和债权人间协议。
- **多边协调融资。** ADB / 世界银行 / AIIB 的参与在共同条款下与 JBIC OIL 结构上兼容。
- **担保信托与债权人间机制。** 横跨全体优先级贷款人的共同担保代理；项目担保的份额、表决门槛、强制执行机制、股权补救权均通过共同条款文件协商。

### 3.6 Phase 6 — 批准与执行

- 在适当门槛上的 **内部信用委员会** 批准（部门负责人 → 高级管理层 → 总裁 → 董事会，随票据规模和政策显著性升级）。
- 对于超出标准委员会门槛的交易的 **总裁 / 执行批准**。
- 对于最大规模交易的 **董事会签署**。
- 与协调融资各方一同执行 **共同条款协议** 和 **便利协议**。
- 财务交割后的 **提款及持续条款监测**。

一笔典型的大型 OIL 交易从初始委任到财务交割的周期，项目融资为 12–24 个月，单一名称企业 OIL 为 6–12 个月，对于政治敏感或首创性（first-of-a-kind）交易则时间线显著更长。

## 4. 与民间金融机构的 co-financing / 协作

JBIC 的结构性共同对手方是日本的大型银行。标准的银团几何结构：

- **一家日本大型银行担任代理行。** [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]] 或 [[megabanks/mizuho-fg|Mizuho FG]] 运营债权人间机制、提款瀑布及交割后监测。
- **大型银行商业份额与 JBIC 直接份额并列。** 来自大型银行的纯商业贷款 + JBIC OIL 份额 + 常常还有 NEXI 保障份额。JBIC 与 NEXI 的相互作用是结构性的 —— 完整分层见 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]]，其中 JBIC 作为直接贷款人，NEXI 作为包裹商业份额的保险人。
- **地方银行 / 信金 / 农林中金的参与。** 对于对外 M&A 或国内锚定型跨境结构中的日本所在 SPV 融资，[[cooperative-banks/norinchukin|Norinchukin]] 及大型地方银行可能参与。
- **外国银行的参与。** 对于大型 LNG 及矿业交易，法国、新加坡、澳大利亚、美国、中国的银行经常参与协调融资。
- **银团中的同业 ECA。** US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance、EDC、Cesce —— 共同条款文件、协调一致的保险 / 直接贷款结构。

NEXI 与 JBIC 的重叠是结构性的且极少竞争：JBIC 是直接贷款人，NEXI 是保险人。当同一项目同时拥有 JBIC 直接贷款和 NEXI 保障的商业贷款时，这两家国家机构会就重叠、先决条件和信息共享进行协调。

对于没有 ECA 参与的纯民间对外收购银团，同样的大型银行运营不同的银团几何结构 —— 见 [[finance/japan-acquisition-finance|Japan acquisition finance]] 所述。JBIC 锚定型堆栈尽管使用同样的代理行，但在结构上与纯商业堆栈有别。

## 5. 政策目标与政府参与

JBIC 的海外投资政策姿态由以下因素塑造：

- **中期经营计划**（当前强调 GX、供应链韧性、友岸外包、对外 M&A、基础设施出口）。
- **内阁与 METI 主导的行业总规划** —— 能源基本计划、关键矿产战略、GX 推进战略、亚洲零排放共同体（AZEC）倡议、基础设施出口计划。
- **MOFA 的双边与地区协调** —— 尤其针对主权对手方的非约束性贷款和大型基础设施融资。
- **财政投融资计划（FILP）拨款** —— 国会批准的年度资金上限。
- **特别业务账户（2016）** —— 为较高风险的政策战略性交易设立的隔离权限与准备金。

JBIC 的年度放贷规模和政策姿态随每个中期计划周期轮转，行业组合随着 METI 与内阁优先事项的演变，在能源 / 资源、基础设施、制造业和供应链融资之间转移。

## 6. 经济安全保障 / 近期方针转变

大约自 2022 以来，JBIC 的政策姿态已围绕 **经济安全保障（経済安全保障）** 重新构成：

- **关键矿产供应链。** 铜、镍、锂、钴、稀土 —— 对澳大利亚、印度尼西亚、加拿大、智利、南美、非洲的日本关联供应链项目的股权、OIL、非约束性贷款支持。
- **电池与 EV 供应链。** 关键矿产的下游 —— 电池正极 / 负极材料、电芯制造。
- **半导体与高科技产业供应链。** 日本关联半导体材料与设备产能的友岸外包，包括对友好法域内扩产项目的协调融资。
- **GX / 能源转型。** 可再生能源、海上风电、氢 / 氨、CCS，以及在 AZEC 框架下区域火力发电厂的氨混烧。
- **LNG 气候框定。** 对照气候兼容性框架对新建 LNG 融资进行更严格的筛查，同时在所界定的情境下继续支持作为过渡燃料的 LNG。
- **不再新建海外燃煤火力融资。** 与 2021 G7 承诺及 2021 OECD 煤炭行业谅解更新对齐的公开姿态。
- **对外 M&A 支持。** 在主要日本企业跨境收购融资中的 OIL 份额。
- **国别姿态转变。** 对适用经济安全保障或制裁考量的特定法域，实际上缩减新增融资。

特别业务账户是使 JBIC 能在一般业务账户信用纪律无法触及的这些政策战略性交易上承担损失风险的制度性载体。

## 7. Comparative position — JBIC OIL vs adjacent lenders

| Dimension | JBIC OIL (General Operations) | JBIC OIL (Special Operations) | Megabank cross-border loan | [[policy-finance/jica\|JICA]] overseas investment / finance | Peer ECA direct loan (US EXIM, K-EXIM, UKEF) |
|---|---|---|---|---|---|
| Lender type | State direct policy lender | State direct policy lender, expanded risk-bearing | Commercial deposit-funded lender | State direct lender with development mandate | State direct policy lender |
| Typical tenor | Up to 18+ yrs under sector understandings | Up to 18+ yrs | 5–10 yrs typically | Mid- to long-tenor concessional | Sector-understanding-bounded |
| Currency mix | USD, JPY, EUR | USD, JPY, EUR | Customer-driven | JPY-concessional + foreign-currency | USD primary |
| OECD Arrangement application | Applies (Arrangement member) | Applies | Outside Arrangement (pure commercial) | Distinct (ODA disciplines) | Applies |
| Risk-bearing posture | Disciplined policy-finance | Higher, loss-bearing authorised | Bank-balance-sheet-constrained | Development / concessional | Disciplined policy-finance |
| Typical co-lender | NEXI + megabanks + peer ECAs | NEXI + megabanks + peer ECAs | JBIC / NEXI / megabank peers | JBIC selectively + multilaterals | JBIC + multilaterals + commercial banks |
| Supervising authority | MoF (with METI / MOFA coordination) | MoF (with METI / MOFA coordination) | FSA | MOFA | National-specific (US Treasury, Korean MoEF, UK Treasury) |

JBIC 内部的一般 / 特别区分是最重要的内部差别化。同业 ECA 的比较在结构上很接近 —— 日本的 JBIC、韩国的 K-EXIM、法国的 Bpifrance、德国的 KfW IPEX、英国的 UKEF 和美国的 EXIM 都在同样的 Arrangement 各项纪律下运营，并经常在多 ECA 堆栈上协调融资。

## 8. Post-financial-close monitoring

财务交割之后，JBIC 在一笔典型大型 OIL 上的持续角色为：

1. **先决条件（CP）管理。** 与代理行协调，在首次提款前完成最终 CP 满足。
2. **提款管理。** 与 NEXI 保障的商业份额及发起人股权并列的按比例提款；JBIC 的提款纪律通常与贷款人技术顾问的建设里程碑认证对齐。
3. **条款监测。** 项目 DSCR、市场条件测试、发起人支持义务，以及依据 JBIC 指南的环境与社会合规。
4. **可靠性测试管理。** 在 COD（商业运营日），项目必须通过贷款人可靠性测试，方可从发起人支持承诺切换为纯项目现金流偿付。
5. **重组管理。** 在压力情形下（成本超支、市场下行、包括安全事件在内的不可抗力事件），重组在共同条款债权人群体之间协调，并在商业份额受保障时平行处理 NEXI 的索赔。
6. **再融资处理。** COD 后将商业份额再融资至债券或可持续发展挂钩市场十分常见；JBIC 的直接贷款份额通常保留至其预定到期日。

对于单一名称企业 OIL，监测更接近企业贷款的条款跟踪 —— 杠杆与利息覆盖率合规、限制性支付测试、报告义务。

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-project-finance-stack-diagram]]
- [[policy-finance/japan-eximbank-history]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/jica]]
- [[financial-regulators/jbic]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## Sources

- JBIC business overview (https://www.jbic.go.jp/en/efforts/economic/financial.html) — product taxonomy and policy framing.
- JBIC overseas investment loan page (https://www.jbic.go.jp/en/business-areas/finance/investment.html) — OIL eligibility and process.
- JBIC special operations page (https://www.jbic.go.jp/en/business-areas/finance/special_operations.html) — Special Operations Account scope.
- JBIC Environmental and Social Considerations Guidelines (https://www.jbic.go.jp/en/efforts/environment/guideline/) — environmental / social DD framework aligned with OECD Common Approaches.
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/) — minimum premia, tenor caps, sector understandings.
- METI external-economy and trade-control hub (https://www.meti.go.jp/english/policy/external_economy/trade_control/) — policy framing of JBIC / NEXI roles and sanctions / export-control coordination.
- 株式会社国際協力銀行法 (平成 23 年法律第 39 号) — JBIC statute including business-line definitions.

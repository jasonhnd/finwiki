---
source: policy-finance/jbic-overseas-investment-underwriting-process
source_hash: 10dd0c84e184bfb0
lang: zh
status: machine
fidelity: ok
title: "JBIC 海外投资贷款承销流程"
translated_at: 2026-06-01T03:31:12.274Z
---
# JBIC 海外投资贷款承销流程

## Wiki route

本条目位于 [[policy-finance/INDEX|policy-finance index]] 之下，是关于 [[JapanFG/jbic|国際協力銀行 (JBIC)]] 的承销流程深潜。可与 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]] 一起阅读，以理解 JBIC 贷款如何与 [[policy-finance/nexi|NEXI]] 保险、[[policy-finance/jogmec|JOGMEC]] 股权和大型银行商业债并列；与 [[policy-finance/oecd-export-credit-arrangement|OECD Export Credit Arrangement]] 一起阅读，以理解 JBIC 运作所受期限上限；与 [[policy-finance/jica|JICA]] 一起阅读，以理解政策分界另一侧的 ODA 金融边界；与 [[policy-finance/japan-eximbank-history|Japan Eximbank history]] 一起阅读，以理解 2012  之前的机构历史；与 [[finance/japan-acquisition-finance|Japan acquisition finance]] 一起阅读，以理解同一大型银行银团如何构造私人跨境交易。

## TL;DR

JBIC 承销围绕一个二元资金账户区分构建：**General Operations（荳闊ｬ讌ｭ蜍吝鋸螳・）** vs **Special Operations（迚ｹ蛻･讌ｭ蜍吝鋸螳・）**，其上叠加产品分类，从**出口买方信贷 / 供应商信贷**延伸至**资源进口贷款**、**海外投资贷款（OIL）**、**非绑定贷款**，并选择性进入**股权参与**。Special Operations Account（2016 创建）赋予 JBIC 明确权限，可在 General Operations 无法定价的政策战略性、高风险交易中承担亏损：半是政策银行，半是国家出资的 merchant bank。承销流程本身大致分六个阶段：**（1）政策 / 管线筛选**，对照 METI / MOFA / MAFF 优先事项和 JBIC 中期业务计划；**（2）初始信用和国家风险筛选**，对照 JBIC 国家限额和主权评级；**（3）详细信贷委员会工作**，配合技术、环境和法律顾问，在项目融资中调动标准的 lenders' engineer / market consultant / legal due diligence 栈；**（4）**[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]** 合规审查**（最低保费、偿还期限、气候 / 煤炭行业理解）；**（5）债权人间和共同融资结构设计**，与大型银行（[[JapanFG/mufg|MUFG]] / [[JapanFG/smfg|SMFG]] / [[JapanFG/mizuho-fg|Mizuho FG]]）、[[policy-finance/nexi|NEXI]] 以及相关同业 ECA（US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance）共同设计；以及 **（6）总裁批准和董事会签署**，之后执行 common terms / loan agreement 和 security trust。自 2022  以来，JBIC 的政策姿态明显转向支持 **GX（能源 / 脱碳）、关键矿产供应链、friend-shoring、半导体和部分海外 M&A**，同时退出新建燃煤火电融资并收紧 LNG 气候框架。

## 1. 讖滄未 / 驛ｨ髢菴咲ｽｮ

| Item | Detail |
|---|---|
| 母体实体 | [[JapanFG/jbic|JBIC]]（譬ｪ蠑丈ｼ夂､ｾ蝗ｽ髫帛鵠蜉幃橿陦・，100% 国有特殊公司，唯一股东为 雋｡蜍吝､ｧ閾｣） |
| 法定依据 | 譬ｪ蠑丈ｼ夂､ｾ蝗ｽ髫帛鵠蜉幃橿陦梧ｳ・（平成 23 年豕募ｾ第 39 号） |
| 前身历史 | 譌･譛ｬ霈ｸ蜃ｺ驫陦・（1950）竊・譌･譛ｬ霈ｸ蜃ｺ蜈･驫陦・（1953）竊・邨ｱ蜷・+ OECF（1961）竊・譌ｧ JBIC（1999）竊・JFC 邨ｱ蜷・（2008-10）竊・蜀咲峡遶・（2012-04）：见 [[policy-finance/japan-eximbank-history|Japan Eximbank history]] |
| 资金账户拆分 | **荳闊ｬ讌ｭ蜍吝鋸螳・**（General Operations）用于标准政策金融贷款，**迚ｹ蛻･讌ｭ蜍吝鋸螳・**（Special Operations）用于更高风险的政策战略性交易，设立于 2016  |
| 业务线 | 出口信贷（买方 / 供应商）、进口信贷（资源进口）、海外投资贷款、非绑定贷款、股权参与、保证、债券购买工具 |
| 资金基础 | FILP 借款、政府担保债发行、通过 FILP 外币债计划取得外币资金；鉴于底层贷款组合币种，资产负债表币种组合多以 USD 为主 |
| 监督机关 | 雋｡蜍吝､ｧ閾｣（譬ｪ荳ｻ繝ｻ荳ｻ邂｡）；产业政策协调由 METI；双边 / 区域协调由 MOFA |

General Operations vs Special Operations 拆分是承销上最重要的结构特征。General Operations 受典型政策银行信贷纪律约束；Special Operations 被明确创设，使 JBIC 可在否则无法融资的政策战略性交易中承担亏损。

### 2.1 Product taxonomy

| Product line | Borrower | Typical use | OECD Arrangement applicability | Account |
|---|---|---|---|---|
| **出口买方信贷** | 日本货物 / 服务的外国买方 | 外国购买日本工厂、船舶、机车车辆、卫星、设备 | 是，适用 Arrangement | General + Special |
| **出口供应商信贷** | 日本出口商 | 长期限出口合同下的应收款融资 | 是 | General |
| **进口贷款** | 日本进口商 / 大宗商品买方 | 与日本能源 / 商品安全相关的 LNG、石油、金属等长期资源进口合同 | 是（在出口信贷等价条件下） | General + Special |
| **海外投资贷款（OIL）** | 日本关联海外 SPV / 日本母公司 | 海外项目和子公司的股权出资、次级融资、营运资金 | 部分适用（Arrangement 适用于出口信贷等价部分） | General + Special |
| **非绑定贷款** | 主权 / 主权邻近外国借款人 | 不绑定产品合同的产业发展、基础设施、资源安全支持 | 是（非绑定贷款纪律） | General + Special |
| **股权参与** | 项目 SPV / 产业实体 | 战略项目（能源、供应链、关键矿产、GX）中的少数股权 | 不在 Arrangement 内（股权，不是贷款） | 主要为 Special |
| **保证** | 商业银行 / 债券持有人 | 对商业银行贷款、债券发行提供保证 | 出口信贷等价条件下适用 | General + Special |
| **债券购买** | 外国国家发行人 / 超国家机构 | 直接购买外国国家或超国家债券 | 核心 ECA 框架之外 | Special |

“JBIC 海外投资承销”最常指的旗舰产品是 **Overseas Investment Loan（OIL）**：向日本关联海外 SPV 或日本母公司提供的长期贷款，用于跨境股权注入。

### 2.2 ODA 蜀・滓ｬｾ vs Special Operations：dividing line

重要边界：**ODA 蜀・滓ｬｾ** 由 [[policy-finance/jica|JICA]] 运行，不由 JBIC 运行。1999-2008  的法定前身曾将 譌ｧ JBIC 的 ODA 翼（OECF 谱系）与其政策金融翼结合；2003-10  ODA 迁移至 JICA，以及 2008  / 2012  JFC 阶段，随后把商业级海外金融与 ODA 赠款 / 优惠贷款分离。Special Operations Account **不是** ODA：它是由国会拨款授权潜在亏损的风险承担型政策金融贷款和股权活动，而不是基于减贫标准的优惠 ODA 金融。

对承销的含义是：一个前沿国家基础设施项目可能同时有 ODA 融资组成部分（技术援助、项目邻近公共基础设施，由 JICA 融资）以及商业级项目融资，包括 JBIC OIL、NEXI cover 和大型银行 tranche。两条通道文件不同、治理不同、财政姿态不同，JBIC 信贷委员会把 JICA 融资部分视作外生语境，而不是自身信贷决策的一部分。

### 2.3 Sector categories that show up most often

实践中，JBIC 海外投资贷款组合偏向一组反复出现的行业垂直：

- **能源（LNG、油气上游、中游、发电 IPP）。** 历史上按敞口最大；自 2021  以来受气候框架显著重塑。
- **基础设施（铁路 / 地铁、港口、水务、电信）。** 常与机车车辆或设备出口绑定，此时出现买方信贷 / 供应商信贷 overlay。
- **关键矿产和电池供应链。** 2022  后权重上升：铜、镍、锂、钴、稀土，以及电池 / EV 下游。
- **半导体和高科技产业供应链。** Friend-shoring overlay。
- **日本海外 M&A。** 中大型日本跨境收购，其中 JBIC OIL 份额补充大型银行银团收购 tranche；与 [[finance/japan-acquisition-finance|Japan acquisition finance]] 描述的结构相连，但 JBIC 份额带有政策一致票据。
- **可再生能源、氢 / 氨、CCS。** 2022 后 GX 框架下的高增长领域。
- **航空航天和防务邻接。** 选择性支持，多通过出口买方信贷。

组合由 JBIC 中期业务计划（当前强调 GX、供应链韧性、friend-shoring 和海外 M&A）以及 METI / MOFA 优先事项塑造。

## 3. 蟇ｩ譟ｻ / underwriting 繝励Ο繧ｻ繧ｹ

典型大型海外投资贷款或非绑定贷款的端到端承销流程经历六个阶段。

### 3.1 Phase 1 ：Policy / pipeline screening

- 通过入站询问（日本赞助商、外国借款人、同业 ECA 引介）或 JBIC 行业 / 区域官员主动覆盖发起。
- 对照 JBIC **中期业务计划**政策优先事项清单，以及 METI / MOFA 主导的行业总体规划（能源战略、关键矿产战略、基础设施出口战略）。
- 对潜在 Special Operations Account 案件，早期判断交易是否可能亏损但具政策正当性（驱动账户选择）。
- 对气候敏感行业，早期检查 JBIC 已公布气候金融姿态（例如不再新建海外燃煤火电；收紧 LNG 融资条件）。

### 3.2 Phase 2 ：Initial credit and country-risk screening

- 使用与 [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]] 国家风险分类（Country Risk Classification 0-7）对齐的 JBIC 内部国家分级进行国家风险分类。
- 对照 JBIC 投资组合限额检查国家敞口限额。
- 赞助商 / 借款人初步信用筛查：项目融资重点关注赞助商组合（日本商社、日本公用事业、东道国 NOC / 国家矿业公司、国际 major）；对日本母公司的 OIL 重点关注母公司评级和合并杠杆。
- 初始结构判断：单名公司贷款 vs 项目融资 vs 主权支持非绑定贷款，决定后续顾问调动。

### 3.3 Phase 3 ：Detailed credit committee work and due diligence

对项目融资 OIL，标准顾问栈会被调动：

- **贷款人技术顾问**：工程和建设风险审查。
- **贷款人市场顾问**：承购 / 市场价格建模（LNG netbacks、矿业承购经济性、电力购买协议现金流稳定性）。
- **贷款人保险经纪**：绑定结构，包括 [[policy-finance/nexi|NEXI]] cover 以及任何私人政治风险保险 overlay。
- **贷款人法律顾问**：日本侧和东道国顾问；文件标准通常与国际项目融资 LMA 风格先例一致。
- **环境和社会 DD**：按照 JBIC **Guidelines for Confirmation of Environmental and Social Considerations**（“JBIC Guidelines”）评估，并与 OECD Common Approaches 和 Equator Principles 对齐。
- 内部信贷建模（DSCR 预测、下行情景压力、loan-life coverage ratio、国家风险 overlay）。
- 内部行业 / 板块审查（例如 LNG 对长期天然气需求情景的敏感性；关键矿产对价格崩跌的敏感性）。

对单名公司 OIL（例如向日本母公司贷款以资助境外收购），顾问调动通常更轻，重点转向母公司评级分析、结构性信用支持和交易后监控契约，类似于 [[finance/japan-acquisition-finance|Japan acquisition finance]] 描述的大型银行收购贷款流程。

### 3.4 Phase 4 ：OECD Arrangement compliance review

- 根据国家风险分类计算最低保费率（MPR）。
- 偿还期限上限检查（目前典型出口信贷最长 10  年，可再生 / 气候友好交易 14  年，部分项目融资类别在行业理解下为 18  年）。
- 首付款最低额（通常 15%）及结构化偿还曲线合规。
- **Coal Sector Understanding（2021  修订）**：对遵循 OECD Arrangement 的成员实质关闭新建燃煤火电融资。
- 面向可再生能源、水务和部分气候友好项目的 **Climate Change Sector Understanding**。
- 对非绑定贷款，适用 Arrangement 下的非绑定贷款纪律。
- 对 Special Operations Account 交易，适用账户特定合规及更高风险政策正当性文件。

合规审查后果重大：在 General Operations 下不符合 Arrangement 参数的交易，只有在有明确政策正当性时才可能重新路由到 Special Operations。

### 3.5 Phase 5 ：Intercreditor / co-financing structuring

- **大型银行共同融资结构。** 几乎所有大型 OIL 交易都有由 [[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]] 提供的平行商业 tranche，通常由一家银行担任 **agent / facility bank**。
- **NEXI overlay 结构。** 保险 cover 可包裹部分商业 tranche 或部分权益敞口；结构选择由 JBIC 与 [[policy-finance/nexi|NEXI]] 共同协商。
- **同业 ECA 共同融资。** 大型 LNG、矿业或铁路 / 地铁交易中，常与 US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance、EDC 等平行 ECA 融资。JBIC 与同业 ECA 一起位于 common-terms agreement 和 intercreditor agreement 上。
- **多边共同融资。** ADB / World Bank / AIIB 参与可与 JBIC OIL 在 common terms 上兼容。
- **Security trust 和债权人间机制。** 全体高级贷款人的共同 security agent；项目担保份额、表决阈值、执行机制、equity-cure rights 均通过 common-terms 文件谈判。

### 3.6 Phase 6 ：Approval and execution

- 在适当阈值下取得**内部信贷委员会**批准（部门负责人 竊・高级管理层 竊・总裁 竊・董事会，随票据规模和政策显著性逐级上升）。
- 高于标准委员会阈值的交易需**总裁 / 执行层批准**。
- 最大型交易需**董事会签署**。
- 与共同融资方同步执行 **common-terms agreement** 和 **facility agreement**。
- 财务交割后进行**提款和持续契约监控**。

典型大型 OIL 交易从初始委任到财务交割，项目融资为 12-24  个月，单名公司 OIL 为 6-12  个月；政治敏感或首创交易时间明显更长。

## 4. 豌鷹俣驥題檮讖滄未縺ｨ縺ｮ co-financing / 騾｣謳ｺ

JBIC 的结构性共同对手方是日本大型银行。标准银团几何为：

- **一家日本大型银行作为代理行。** [[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]] 或 [[JapanFG/mizuho-fg|Mizuho FG]] 运行债权人间机制、提款瀑布和交割后监控。
- **大型银行商业 tranche 与 JBIC 直接 tranche 并列。** 大型银行纯商业贷款 + JBIC OIL 份额 + 通常的 NEXI cover 份额。JBIC 与 NEXI 的相互作用是结构性的，完整分层见 [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]]：JBIC 是直接贷款人，NEXI 是包裹商业份额的保险人。
- **地方银行 / 信用金库 / Norinchukin 参与。** 对位于日本的 SPV 融资、海外 M&A 或国内锚定跨境结构，[[JapanFG/norinchukin|Norinchukin]] 和大型地方银行可能参与。
- **外资银行参与。** 大型 LNG 和矿业交易中，法国、新加坡、澳大利亚、美国和中国银行经常共同融资。
- **同业 ECA 位于银团中。** US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance、EDC、Cesce：common-terms 文件、协调后的保险 / 直接贷款结构。

NEXI 与 JBIC 的重叠是结构性的，且很少具有竞争性：JBIC 是直接贷款人，NEXI 是保险人。若同一项目同时有 JBIC 直接贷款和 NEXI cover 商业贷款，两家国家机构会就重叠部分、先决条件和信息共享进行协调。

对于没有 ECA 参与的纯私人海外收购银团，同一批大型银行运行不同的银团几何，见 [[finance/japan-acquisition-finance|Japan acquisition finance]]。尽管使用同样的代理行，JBIC 锚定栈与纯商业栈在结构上不同。

## 5. 謾ｿ遲也岼讓吶→謾ｿ蠎憺未荳・

JBIC 的海外投资政策姿态由以下因素塑造：

- **中期业务计划**（当前强调 GX、供应链韧性、friend-shoring、海外 M&A、基础设施出口）。
- **内阁和 METI 主导的行业总体规划**：能源基本计划、关键矿产战略、GX 推进战略、Asia Zero Emission Community（AZEC）倡议、基础设施出口计划。
- **MOFA 双边和区域协调**：特别是面向主权交易对手的非绑定贷款和大型基础设施融资。
- **财政投融资计划（FILP）拨款**：国会批准的年度资金上限。
- **Special Operations Account（2016）**：为更高风险政策战略性交易提供圈定权限和储备。

JBIC 年度贷款量和政策姿态随每个中期计划周期轮动，随着 METI 和内阁优先事项演变，行业组合在能源 / 资源、基础设施、制造业和供应链融资之间转移。

## 6. 邨梧ｸ亥ｮ牙・菫晞囿 / 譛霑代・譁ｹ驥昴す繝輔ヨ

大约自 2022  起，JBIC 的政策姿态围绕**邨梧ｸ亥ｮ牙・菫晞囿（经济安全保障）**重组：

- **关键矿产供应链。** 铜、镍、锂、钴、稀土：对日本关联供应链项目在澳大利亚、印尼、加拿大、智利、南美、非洲提供股权、OIL、非绑定贷款支持。
- **电池和 EV 供应链。** 关键矿产下游：电池正极 / 负极材料、电芯制造。
- **半导体和高科技产业供应链。** 日本关联半导体材料和设备产能在友好司法辖区的 friend-shoring，包括共同融资扩产项目。
- **GX / 能源转型。** 可再生能源、海上风电、氢 / 氨、CCS、AZEC 框架下区域火电厂氨混烧。
- **LNG 气候框架。** 在继续于定义语境中支持 LNG 作为过渡燃料的同时，对照气候兼容框架更严格筛查新 LNG 融资。
- **不再为新建海外燃煤火电融资。** 公开姿态与 2021 G7  承诺和 2021  OECD Coal Sector Understanding 更新一致。
- **海外 M&A 支持。** 主要日本跨境收购融资中的 OIL 份额。
- **国家姿态变化。** 对经济安全或制裁因素适用的部分司法辖区，实际上收缩新融资。

Special Operations Account 是制度工具，使 JBIC 能够在 General Operations 信用纪律无法延展的政策战略性交易中承担亏损风险。

## 7. Comparative position：JBIC OIL vs adjacent lenders

| Dimension | JBIC OIL (General Operations) | JBIC OIL (Special Operations) | Megabank cross-border loan | [[policy-finance/jica\|JICA]] overseas investment / finance | Peer ECA direct loan (US EXIM, K-EXIM, UKEF) |
|---|---|---|---|---|---|
| 贷款人类型 | 国家直接政策贷款人 | 国家直接政策贷款人，风险承担扩大 | 商业存款资金贷款人 | 具发展使命的国家直接贷款人 | 国家直接政策贷款人 |
| 典型期限 | 在行业理解下最高 18+ 年 | 最高 18+ 年 | 通常 5-10  年 | 中长期优惠 | 受行业理解约束 |
| 币种组合 | USD、JPY、EUR | USD、JPY、EUR | 客户驱动 | JPY 优惠 + 外币 | 主要 USD |
| OECD Arrangement 适用 | 适用（Arrangement 成员） | 适用 | 不适用 Arrangement（纯商业） | 不同（ODA 纪律） | 适用 |
| 风险承担姿态 | 有纪律的政策金融 | 更高，授权承担亏损 | 受银行资产负债表约束 | 发展 / 优惠 | 有纪律的政策金融 |
| 典型共同贷款人 | NEXI + 大型银行 + 同业 ECA | NEXI + 大型银行 + 同业 ECA | JBIC / NEXI / 大型银行同业 | JBIC 选择性 + 多边机构 | JBIC + 多边机构 + 商业银行 |
| 监督机关 | MoF（与 METI / MOFA 协调） | MoF（与 METI / MOFA 协调） | FSA | MOFA | 各国特定（US Treasury、Korean MoEF、UK Treasury） |

JBIC 内部的 General / Special 拆分是最重要的内部差异。与同业 ECA 的比较在结构上很接近：日本 JBIC、韩国 K-EXIM、法国 Bpifrance、德国 KfW IPEX、英国 UKEF、美国 EXIM 都在同一 Arrangement 纪律下运行，并经常在多 ECA 栈中共同融资。

## 8. Post-financial-close monitoring

财务交割后，JBIC 在典型大型 OIL 中的持续角色为：

1. **先决条件（CP）管理。** 首次提款前最终 CP 满足，与代理行协调。
2. **提款管理。** 与 NEXI cover 商业 tranche 和赞助商权益按比例提款；JBIC 的提款纪律通常与贷款人技术顾问认证的建设里程碑一致。
3. **契约监控。** 项目 DSCR、市场条件测试、赞助商支持义务、依据 JBIC Guidelines 的环境和社会合规。
4. **可靠性测试管理。** COD（商业运营日）时，项目必须通过贷款人可靠性测试，方可从赞助商支持承诺切换为纯项目现金流服务。
5. **重组管理。** 出现压力（成本超支、市场下行、包括安全事件在内的不可抗力）时，重组在 common-terms 债权人组内协调；若商业 tranche 被 cover，NEXI 索赔处理并行进行。
6. **再融资处理。** COD 后将商业 tranche 再融资进债券或可持续挂钩市场很常见；JBIC 直接贷款 tranche 通常保留至计划到期。

对单名公司 OIL，监控更接近公司贷款契约跟踪：杠杆和利息覆盖率合规、限制支付测试、报告义务。

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-project-finance-stack-diagram]]
- [[policy-finance/japan-eximbank-history]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/jica]]
- [[JapanFG/jbic]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## Sources

- JBIC business overview (https://www.jbic.go.jp/en/efforts/economic/financial.html)：产品分类和政策框架。
- JBIC overseas investment loan page (https://www.jbic.go.jp/en/business-areas/finance/investment.html)：OIL 适格性和流程。
- JBIC special operations page (https://www.jbic.go.jp/en/business-areas/finance/special_operations.html)：Special Operations Account 范围。
- JBIC Environmental and Social Considerations Guidelines (https://www.jbic.go.jp/en/efforts/environment/guideline/)：与 OECD Common Approaches 对齐的环境 / 社会 DD 框架。
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/)：最低保费、期限上限、行业理解。
- METI external-economy and trade-control hub (https://www.meti.go.jp/english/policy/external_economy/trade_control/)：JBIC / NEXI 角色和制裁 / 出口管制协调的政策框架。
- 譬ｪ蠑丈ｼ夂､ｾ蝗ｽ髫帛鵠蜉幃橿陦梧ｳ・（平成 23 年豕募ｾ第 39 号）：JBIC 法，包括业务线定义。

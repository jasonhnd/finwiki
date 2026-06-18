---
source: finance/cost-of-capital-japan-2026-reference
source_hash: c6deaeab754f1ff6
lang: zh
status: machine
fidelity: ok
title: "资本成本 日本 2026 参考"
translated_at: 2026-06-18T23:59:13.047Z
---

# 资本成本 日本 2026 参考

## TL;DR

资本成本是任何 [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF valuation]] 中杠杆效应最强的单一输入项，也是 [[finance/japan-leveraged-buyout-economics|LBO economics]]、[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|real-estate IRR underwriting]]、[[finance/japan-acquisition-finance|acquisition finance pricing]] 的结构性锚点。就 2026,  时点的日本而言，结构性输入项为：（1）基于 10 年期 JGB 收益率的无风险参考利率（约 1.0-1.5% 类），在 JPY LIBOR 停用后以基于 TONA 的 OIS 作为短端参考；（2）相对于自 BoJ 退出 NIRP 以来已压缩的隐含 ERP，约 5-6% 的历史股权风险溢价；（3）经日本特定行业调整的、与 TOPIX 对齐的贝塔取数；（4）鉴于日本的主权评级和储备货币地位，适度的国家风险溢价；（5）东证 Prime 上市公司 WACC 区间，大盘股通常为 5-8%，中盘股为 6-10%；（6）2024  后 BoJ 下限体系实质性抬高了短端参考，并传导至浮动利率融资成本。本页为方法论参考页，并非投资建议，也不是针对任何公司的具体 WACC。

## Wiki 动线

本页位于 [[finance/INDEX|finance domain]] 之下。请与 [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]] 一并使用以了解其在估值中的折现率角色，与 [[finance/japan-leveraged-buyout-economics|Japan LBO economics]] 一并了解债务成本定价，与 [[finance/japan-acquisition-finance|Japan acquisition finance]] 一并了解资本结构定价参考，与 [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]] 一并了解房地产侧的对应物，与 [[money-market/japan-money-market|Japan money market]] 一并了解短端参考，与 [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]] 一并了解政策利率管道，与 [[derivatives/ois-tona-curve|OIS TONA curve]] 一并了解曲线构建层。关于估值框架的背景，请动线至 [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] 和 [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]]。

## 资本成本 — 结构性公式

WACC = (E/V) × Re + (D/V) × Rd × (1 − Tc)

其中：
- Re = 股权成本 = Rf + β × ERP + （国家风险）+ （规模 / 治理溢价）
- Rd = 债务成本 = Rf + 信用利差
- Tc = 有效公司税率
- E、D、V = 股权、债务及总资本的市场价值

就日本而言，每个输入项都具有不同于美国或欧洲参考框架的结构性特征。

### 长端（10 年期 JGB）

| 读数 | 2026  类 |
|---|---|
| 10 年期 JGB 收益率 | 约 1.0-1.5% 区间；请在 MOF / BoJ 数据页核实 |
| 来源 | MOF JGB 招标日历；BoJ 统计 |
| 用途 | 长久期 DCF、终值折现率、项目融资优先级定价 |

NIRP 后的正常化已将 10 年期 JGB 从接近零的 NIRP 时代低谷实质性抬升。路径比任何单一时点更为重要——锚定于某一时点 10 年期的折现率模型可能在一个季度内产生过时的估值。

### 短端（TONA / OIS）

| 读数 | 2026  类 |
|---|---|
| TONA（东京隔夜平均利率，Tokyo Overnight Average Rate） | JPY LIBOR 停用后浮动利率 JPY 的基准 |
| OIS TONA 曲线 | 用于构建远期利率预期；参见 [[derivatives/ois-tona-curve|OIS TONA curve]] |
| 用途 | 浮动利率贷款定价、短期限掉期折现、LBO 优先级利差参考 |

OIS TONA 曲线在短端利率构建中取代了 JPY LIBOR。优先级 LBO 贷款及浮动利率公司融资额度参考 TONA 加利差。

### 中段 / belly

对于 3 年期-7 年期折现率构建，使用 JGB 收益率曲线插值或等价的 OIS 曲线点。许多从业者即使在为较短久期的现金流流估值时，也为简便起见使用 10 年期作为单一无风险锚点。

### 历史 ERP

| 方法论 | 读数 |
|---|---|
| 长期算术超额回报 | 日本股票对 JGB 的历史超额回报随起始日期实质性变动；长期来看约 5-7% 类，附带注意事项 |
| 几何长期 | 低于算术值，通常低 1-2pp |
| 滚动窗口 | 对泡沫 / 泡沫后期间的纳入高度敏感 |

日本历史 ERP 在结构上存在争议，因为 1990  后的泡沫修正扭曲了长窗口估计。许多日本公平意见从业者使用 5-6% 作为工作用的历史 ERP。

### 隐含 ERP

隐含 ERP 通过求解使指数价格等于预测股息或自由现金流现值的折现率得出：

| 读数 | 2026  类 |
|---|---|
| 由 TOPIX 远期 EPS 得出的隐含 ERP | 自 BoJ 退出 NIRP 以来已压缩；在 2026  中段，4-5% 类是合理的 |
| 可验证性 | 分析师可使用 BoJ 数据 + JPX 指数远期收益重新计算 |
| 用途 | 前瞻性折现率构建；季末刷新 |

隐含 ERP 与历史 ERP 常相差 100-200bp。从业者通常锚定其一，并对另一项进行敏感性测试。

## 贝塔来源

| 来源 | 读数 |
|---|---|
| 作为市场指数的 TOPIX | 日本贝塔回归的标准市场指数 |
| 回归窗口 | 通常 5  年月度或 2  年周度；两者均常见 |
| Bloomberg / Refinitiv 调整后贝塔 | 标准数据终端来源；使用 Blume 公式调整（0.67 × 原始贝塔 + 0.33 × 1.0） |
| Damodaran 行业贝塔 | 与 [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF framework]] 参考交叉核对；对未上市 / IPO 前估值有用 |
| 自下而上贝塔 | 由可比公司组中位数资产贝塔重新加杠杆；适用于非公开标的 |

### 日本特定的贝塔问题

- 交叉持股效应可能抑制所测得的贝塔，因为共同冲击会使相关持股联动
- TOPIX 的行业集中（如银行、汽车、电子）意味着 TOPIX 不如 S&P 500  那样分散——行业倾斜很重要
- 外国投资者资金流在拐点附近可能放大或抑制短窗口贝塔
- 小盘上市公司贝塔噪声更大、可靠性更低；首选自下而上估计

## 国家风险溢价

| 读数 | 类 |
|---|---|
| 主权评级 | 日本为高投资级 |
| 储备货币地位 | 日元是主要储备货币之一 |
| 国家风险溢价 | 在大多数从业者框架中，日本为极小至零 |
| 主权 CDS | 可获取但交易稀薄 |

与新兴市场估值相反，日本的国家风险溢价通常不单独适用。例外是某些跨境 M&A 框架，其中为制度一致性对所有非美国标的适用统一的国家风险加项。

## 东证 Prime 大盘股 WACC 区间（指示性）

| 行业 | 指示性 WACC 类（2026） |
|---|---|
| 大型银行（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]]） | 股权侧 7-9% / 集团混合 4-6% |
| 综合商社（[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding-heavy]]） | 6-8% |
| 电信（如 NTT、KDDI） | 5-7% |
| 上市房地产开发商 | 5-7% |
| 成熟工业大盘股 | 6-8% |
| 东证 Prime 中盘股（中位数） | 7-10% |
| 东证 Standard / 更小 | 8-12%（非流动性 / 规模溢价） |

这些区间是类别描述符，而非公司特定值。请始终以特定主体的资本结构、贝塔、信用利差及有效税率核实。

## 中盘股 / 小盘股调整

| 调整 | 方向 |
|---|---|
| 规模溢价 | 对更小的上市名称 +1.0-3.0pp（学术文献；取决于样本期） |
| 非流动性溢价 | 对交易稀薄的名称 +0.5-2.0pp |
| 控股股东结构 | 在少数股东面临治理风险处 +0.5-1.5pp |
| 单一业务集中 | 可变；反映在贝塔或非对称情景加权中 |
| 信息不透明 | 可变；反映在更高的隐含 ERP 中 |

日本小盘股规模溢价的证据参差不齐；从业者在缺乏强共识的情况下使用 1-3pp 区间。对于未上市标的，对价值（而非折现率）适用非公开公司非流动性折价（通常为 20-30%）。

## 债务成本

债务成本是优先级、次级及其他计息负债的税后加权成本。

| 层级 | 2026  定价参考 |
|---|---|
| 大型银行优先级公司贷款 | TONA + 利差；投资级利差在 2022,  前压缩、2022  后扩大 |
| 公募债（投资级） | JGB + 信用利差；NIRP 正常化后扩大 |
| LBO 优先级贷款 | TONA + 利差；定价类别参见 [[finance/japan-leveraged-buyout-economics|LBO economics]] |
| 夹层 | 全包中至高个位数收益率 |
| 次级资本（银行 / 保险公司） | 为损失吸收 / 监管资本分类而设的更高票息 |

有效税率适用法定约 30% 的日本公司税率，并按主体的有效税率调整。

## 2024  后 BoJ 下限体系影响

[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]] 结构性地抬高了短端融资成本：

| 渠道 | 影响 |
|---|---|
| 浮动利率贷款利差基准 | 锚定 TONA；下限体系将 TONA 从接近零抬升 |
| 优先级 LBO 定价 | 浮动利率基准被抬升；优先级债务总成本随下限抬升而上升 |
| 银行融资成本 | 存款利率竞争及融资成本正常化 |
| 房地产融资 | [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR framework]] 承做参考被抬升 |
| 公司 WACC | 债务成本组成部分适度上移 |

这一利率下限抬升通过 WACC 公式、并通过 OIS 曲线中的远期利率预期产生复合效应。10 年期 JGB 锚点已从 YCC 时代的钉住水平实质性上升，但路径非线性且依赖政策。

## 估值后果

WACC 上升 100bp 通常会使长久期 DCF 股权价值减少 15-25%，具体取决于终值权重。就 [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate sensitivity]] 而言，资本化率变动 25bp 可使 NAV 移动 5-10%。因此，NIRP 后的正常化路径是 2026 日本公司及房地产分析中杠杆效应最强的估值问题。

## 相关

- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[money-market/japan-money-market]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/economic-value-based-solvency]]
- [[INDEX|FinWiki index]]

## 来源

- BoJ：利率、收益率及下限体系政策数据；金融系统报告。
- MOF：JGB 发行日历及招标结果。
- JPX：TOPIX 指数及 Prime 市场治理参与刊物。
- FSA：监管框架及 ICS / EVS 指引。
- Damodaran（NYU Stern）：ERP 及贝塔方法论参考，包括日本特定数据集。

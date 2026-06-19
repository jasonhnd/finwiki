---
source: structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook
source_hash: 39d5fbabe9356eed
lang: zh
status: machine
fidelity: ok
title: "JCR / R&I 日本证券化评级方法操作手册"
translated_at: 2026-06-19T13:13:22.635Z
---

# JCR / R&I 日本证券化评级方法操作手册

## TL;DR

JCR（株式会社日本格付研究所）和 R&I（格付投资情报中心）是主导日本结构性金融的两家 FSA 指定境内信用评级机构。它们针对 ABS / RMBS / CMBS / 消费 / 信用卡 / 租赁评级的**操作方法**遵循一个四步手册：(1) 使用源自日本资产池数据的年份曲线，乘以评级类别压力系数，进行**按资产类别的压力违约率 (SDR) 计算**（AAA = 预期违约的 4–6×，AA = 3–4×，A = 2–3×，BBB = 1.5–2×）；(2) 将 SDR 通过交易特定的瀑布、提前还款、回收和利率情景运行，以验证优先批次能够在压力下存续的**现金流建模**；(3) 伴随月度服务商报告、季度业绩审查和评级行动触发器（典型情况下，若 SDR 实现值对 SDR 模型值的漂移超过阈值，则下调 1-2 档）的**监察**；(4) 嵌入评级决策中的**下调触发器**（例如，发起人信用恶化、资产池集中度违反、服务商违约事件）。与全球机构（S&P / Moody's / Fitch Japan）相比，JCR / R&I 使用**以日本为锚的违约数据**（无多法域池化）、**更低的基准情形违约频率**（反映日本历史上的消费者信用行为），以及**无国家上限封顶**（因为它们在境内标度上将日本主权评为 AAA）；其结果是优先层出现 [[structured-finance/fitch-moody-sp-japan-criteria|global vs JCR / R&I criteria]] 中记录的 1–3 档分裂评级缺口。本条目在分析师手册而非抽象方法文件的层面，将操作机制 — SDR 计算、现金流建模、监察频率、下调触发器 — 予以成文化。

## Wiki 路径

本条目位于 [[structured-finance/INDEX|structured-finance index]] 之下，作为**操作手册方法**节点，补充基础性的 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology entry]] 和比较性的 [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]。请与各资产类别操作页面对照阅读：[[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]、[[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、[[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]、[[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]、[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、[[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]。监管锚点：底层法人层参见 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]。

## 1. JCR 与 R&I — 机构身份

| Item | JCR | R&I |
|---|---|---|
| Japanese name | 株式会社日本格付研究所 | 株式会社格付投資情報センター |
| Established | 1985 | 1998 (合并前身) |
| Ownership | 独立、上市母公司 | 野村系 |
| FSA designation | 依据 FIEA 第 66-27 条 | 依据 FIEA 第 66-27 条 |
| Domestic sovereign rating | AAA | AA+ |
| Structured-finance staff (approx) | 60–80 名分析师 | 50–70 名分析师 |
| Annual SF rating actions (approx) | 200–400 (新增 + 监察) | 150–300 |
| Office | 东京 (总部) | 东京 (总部) |

两家机构均针对结构性金融产品发布详细的标准文件和监察报告；两家机构均受 FSA 监管，并在 FIEA 下受行为规则约束。

## 2. 资产类别方法架构

JCR 和 R&I 为每个资产类别维护独立的标准文件：

| Asset class | Methodology features | Typical surveillance cadence |
|---|---|---|
| **Auto-loan ABS** | 按新车 / 二手车划分的年份曲线；集中度限额；备份服务商要求 | 月度服务商报告；季度评级审查；年度全面审查 |
| **Consumer-loan ABS** | 按 APR / 贷款规模分桶的年份曲线；利息制限法监管冲击情景；早期摊还触发器校准 | 月度服务商报告；季度评级审查；半年度全面审查 |
| **Credit-card receivable ABS** | 主信托池动态；期间延长条件情景；跨系列传染压力 | 月度服务商报告；季度评级审查 |
| **Equipment lease ABS** | 真正租赁对融资租赁划分；按设备类型的残值曲线；按行业 / 设备 / 承租人的集中度 | 月度服务商报告；季度评级审查 |
| **RMBS** | LTV / DTI 分层；地理集中度；提前还款年份曲线；止赎时点假设 | 月度服务商报告；季度评级审查；半年度全面审查 |
| **CMBS** | 物业层面的 NCF 压力；资本化率压力；再融资风险；特别服务商能力 | 月度服务商报告；季度评级审查；年度全面审查 |
| **NPL securitization** | 按 NPL 年份 / 资产类型的回收率；服务商处置历史记录；法律清结风险 | 季度服务商报告；半年度评级审查 |
| **Project-finance** | 项目现金流压力；交易对手信用；完工风险；运营成本压力 | 年度评级审查 (项目债券)；里程碑事件上的评级行动 |

标准文件以日文和英文发布于各机构网站；它们定期更新（重大方法修订每 3–7 年一次）。

## 3. 压力违约率 (SDR) 计算

核心操作工具是**压力违约率** — 在与目标优先批次评级相一致的压力情景下的预期资产池违约频率。

### 3a. 基准情形违约频率

| Asset class | Typical base-case lifetime default frequency | Source |
|---|---|---|
| Auto loan (new-car captive) | 1.5–3.0% | 发起人历史资产池数据；机构跨发行人数据库 |
| Auto loan (used-car / multi-brand) | 3.0–5.5% | 同上 |
| Consumer loan (unsecured) | 8–15% | 发起人 + 机构数据库 |
| Credit-card receivable | 4–8% | 发起人 + 机构数据库 |
| Equipment lease (mixed pool) | 2.5–5.0% | 同上 |
| Residential mortgage (private RMBS) | 1.0–2.5% | 发起人 + 机构数据库 |
| Commercial mortgage (CMBS) | 3.0–8.0% | 物业特定 + 机构历史数据 |

### 3b. 按评级类别的压力乘数

JCR / R&I 对基准情形施加评级类别特定的压力乘数：

| Rating | Stress multiplier (typical) | Cumulative default frequency for SDR |
|---|---|---|
| AAA | 4–6× base | 最高压力 — 在衰退式情景加尾部事件下存续 |
| AA | 3–4× base | 衰退情景 |
| A | 2–3× base | 轻度衰退 |
| BBB | 1.5–2× base | 适度压力 |
| BB | 1.0–1.5× base | 基准 + 小幅压力 |

压力乘数反映**评级定义** — AAA 意味着「在极端压力下存续」，机构校准压力乘数以在各资产类别之间实现这种一致性。

**计算示例**（汽车贷款 ABS）：
- 基准情形终生违约：2.5%
- AAA 压力乘数：5×
- SDR (AAA)：12.5%
- 回收率假设：40%
- SDR × (1 – 回收率) = 12.5% × 60% = 7.5% 净损失
- AAA 所需的次级 + 准备金 + OC：7.5% + 缓冲 = ~8.5%
- 交易的次级结构必须至少提供 8.5% 才能达到 AAA

### 3c. 针对资产池特定特征的调整

SDR 针对以下因素进行调整：
- 资产池集中度（单一债务人、地理、年份）— 增加 SDR
- 发起人历史记录（长历史 + 低历史方差）— 降低 SDR
- 服务商能力及备份安排 — 若薄弱则向上修正 SDR
- 服务商垫付实务 — 影响现金流建模，而非直接影响 SDR
- 触发器校准 — 校准良好的触发器获得有利的 SDR 处理

## 4. 现金流建模

SDR 被投入一个**现金流模型**，该模型模拟瀑布在压力下的运行：

| Modeling input | Description |
|---|---|
| Pool collection schedule | 逐期的本金 + 利息预期回收 |
| Default timing curve | 违约何时发生（典型为在第 12–36个月达到峰值的 S 曲线） |
| Recovery timing | 回收何时发生（典型为违约后 6–18 个月） |
| Prepayment curve | 逐期的自愿提前还款 |
| Interest-rate scenarios | 资产池或债券任一方的浮动利率敞口 |
| Servicer-advance behavior | 按服务协议建模 |
| Trigger activation | 当触发器命中时，瀑布切换行为 |
| Tranche payment | 按交易的瀑布逻辑 |

模型输出：
- SDR 情景下优先批次完全偿付概率
- 优先批次偿付不足情景
- 夹层批次偿付不足情景
- 次级利用情景
- 准备金利用情景

为使优先批次获得 AAA，它必须在 SDR 加压力叠加之下显示**零本金不足**和**利息不足覆盖**。

## 5. 监察 — 持续监控层

一旦评级被赋予，JCR / R&I 即进行**持续监察**：

### 5a. 服务商报告审查（月度）

每月，服务商向受托人 + 评级机构提交一份报告：
- 资产池余额（当月对上月）
- 按账龄分桶的逾期（30 / 60 / 90 / 120+ 天）
- 核销（总额 + 回收）
- 提前还款
- 资产池收益率（加权平均 APR）
- 准备金账户余额
- OC 水平
- 迄今的累积净损失

机构将实际表现与建模表现进行比较。

### 5b. 季度评级审查

每季度（正式而言；对承压交易有时更频繁）：
- 业绩趋势分析
- 与同一资产类别其他交易的比较
- 发起人信用审查
- 服务商运营审查
- 触发器状态检查
- 评级行动考量

### 5c. 年度 / 半年度全面审查

每 6–12 个月：
- 使用更新的业绩数据完全重新运行现金流模型
- 若基准情形已漂移则更新 SDR 计算
- 资产池构成变化
- 发起人战略发展
- 宏观经济更新
- 评级行动建议

### 5d. 事件驱动型审查

由特定事件触发：
- 发起人破产 / 评级下调
- 服务商违约事件
- 触发器激活
- 影响资产类别的监管变更
- 宏观冲击（例如 COVID、GFC）

## 6. 下调触发器 — 评级何时变化

| Trigger | Typical downgrade magnitude |
|---|---|
| Originator rating downgraded below required threshold (e.g., BBB) | 优先 1 档；备份服务商激活可能加以调节 |
| Servicer event of default → backup servicer activated | 若备份运营能力不确定则 1–2 档 |
| Cumulative net loss > SDR × early-warning threshold | 初始 1 档；若模式持续则更多 |
| 90+ delinquency > 1.5× modeled stress | 1–2 档 |
| Reserve drawn below floor + not replenished within X months | 1 档 |
| Trigger activated → early-amortization | 初始 1 档（认可机制已生效）；若资产池层面恶化严重则可能更多 |
| Pool concentration breach (lessee, geographic) | 1 档 |
| Macroeconomic / regulatory shock | 若持续则多档 |
| Methodology revision | 可变；对受影响的全集可能影响重大 |

下调并非自动 — 评级机构分析师在监察审查中运用判断。**模式比任何单一数据点更重要**。

## 7. 与全球机构的比较（S&P / Moody's / Fitch Japan）

| Dimension | JCR / R&I | S&P / Moody's / Fitch Japan |
|---|---|---|
| Default data source | 以日本为锚 | 多法域池化 |
| Base-case default frequency | 更低（反映日本历史低违约） | 更高（包括高违约市场的池化全球数据） |
| Stress multipliers | 校准至日本压力情景 | 校准至全球压力 |
| Country-ceiling cap | 无（日本在境内标度上评为 AAA / AA+） | 有 — 以日本主权封顶（S&P: A+；Moody's: A1；Fitch: A） |
| Recovery assumptions | 日本特定（住宅类往往更高） | 对某些资产池更保守（农村住房抵押贷款） |
| Methodology update cadence | 定期（3–7 年） | 定期（3–5 年） |
| Rating consistency across asset classes | 为日本境内标度设计 | 为全球标度设计 |
| Surveillance frequency | 月度服务商 + 季度审查 | 类似 |
| Investor base recognition | 日本机构投资者主导 | 全球机构投资者 |
| Repo eligibility / bank capital | 为日本监管目的被认可 | 在全球范围内被认可用于银行资本、ECB 回购等 |

**结构性的分裂评级结果**：一笔日本境内汽车贷款 ABS 的优先批次，通常在 7% 次级下从 JCR / R&I 获得 AAA，而在 8.5–10% 次级下从 S&P / Moody's 获得 AA / AA+ — 对同一资产池而言。这 1–2 档的缺口是机械性的，反映方法校准；它不是 JCR / R&I 的宽松，而是一种不同的（以日本为锚对全球池化的）方法。

## 8. 评级流程 — 操作时间线

| Step | Typical duration | Description |
|---|---|---|
| 1. 委任 / 授权 | 1 周 | 发行人 / 安排人委任机构；机构确认承做能力 |
| 2. 初步结构讨论 | 2–4 周 | 机构就结构、次级、触发器提供反馈 |
| 3. 尽职调查 + 资产池数据审查 | 4–6 周 | 提交资产池数据；机构进行分析 |
| 4. 现金流建模 | 2–4 周 | 机构运行模型；就次级与安排人反复 |
| 5. 评级委员会 | 1–2 周 | 内部委员会批准评级 |
| 6. 评级发布 | 定价前 1–2 周 | 预售 / 预定价评级发布 |
| 7. 发行后监察 | 持续 | 月度 + 季度 + 年度审查 |

从授权到评级的总时间线：典型为 8–14 周。与全球机构的相似时间线相当；委任模式有所不同（JCR / R&I 进行更细致的发行人接洽，全球机构东京办公室人员更少）。

## 9. 反论

- **「JCR / R&I 过于宽松」** — 辩护者援引日本特定数据来证明更低的基准情形违约的合理性；批评者主张，方法只有在日本违约率向上收敛之后才与全球收敛，从而制造尾部风险
- **「主权封顶的机械性例外对 JCR / R&I 不公平」** — JCR / R&I 不受国家上限约束；问题在于这在方法上是否稳健，还是一种结构性优势
- **「SDR 乘数是任意的」** — 批评者指出 4–6× 的 AAA 乘数是校准而非经验得出的；辩护者指出评级类别一致性需要校准
- **「监察是向后看的」** — 月度服务商报告审查具有响应性但滞后；某些事件（发起人压力）移动得比月度审查所能捕捉的更快
- **「方法更新制造悬崖效应」** — 当机构更新 SDR 乘数或回收率假设时，多笔交易可能同时移动；这不可避免但具破坏性
- **「JCR / R&I 的分裂是真实的 — 选其一」** — 一些发行人只委任 JCR 或只委任 R&I；联合评级常见但增加成本。该选择往往反映历史关系而非方法偏好

## 10. 未决问题

- 随着日本资本市场国际化，JCR / R&I 是否会使方法与全球机构收敛
- 气候风险和人口下降情景是否会被系统性地纳入 SDR 计算
- FSA 是否会向评级机构施压以要求更严格的方法披露或独立第三方审查
- 新资产类别（BNPL、电动汽车电池相关 ABS、代币化 RWA）是否会以与传统资产类别相似的速度获得方法开发
- 作为受托人的 [[trust-banks/sumitomo-mitsui-trust|trust banks]] 是否会随着其受信风险增长而要求方法变更（例如更细致的监察频率）
- 若 BOJ 利率正常化对资产池施加压力并揭示建模差异，JCR / R&I 相对于全球机构的竞争地位

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology (foundational)]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria comparison]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]] · [[trust-banks/nochu-trust-bank|Nochu Trust]]

## Sources

- JCR structured-finance criteria library — https://www.jcr.co.jp/en/
- R&I structured-finance methodology library — https://www.r-i.co.jp/en/
- FSA designated credit rating agency list — https://www.fsa.go.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan structured-finance materials — https://www.asf-japan.gr.jp/

---

> [!info] 校核状態
> confidence: **likely**. SDR 计算框架、压力乘数区间、现金流建模架构以及监察频率，反映了 JCR / R&I 的公开方法文件和业界观察到的实务。具体的压力乘数值是对典型模式的示例，而非单一来源的主张；实际交易校准各不相同。下调触发器阈值是交易特定的，并在发行文件中披露。

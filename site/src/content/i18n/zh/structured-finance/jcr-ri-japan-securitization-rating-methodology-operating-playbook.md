---
source: structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook
source_hash: eff0c20e6c53284c
lang: zh
status: machine
fidelity: ok
title: "JCR / R&I 日本证券化评级方法操作手册"
translated_at: 2026-06-01T04:15:40.151Z
---
# JCR / R&I 日本证券化评级方法操作手册

## TL;DR

JCR(株式会社日本格付研究所)和 R&I(格付投資情報センター)是 FSA 指定的两家国内信用评级机构，主导日本 structured finance。它们对 ABS / RMBS / CMBS / consumer / card / lease ratings 的**操作方法论**遵循四步手册:(1) 使用从日本资产池数据派生的 vintage curves 计算**特定资产类别的 stressed default rate(SDR)**，并乘以 rating-category stress factors(AAA = 4–6× expected default，AA = 3–4×，A = 2–3×，BBB = 1.5–2×)；(2) **cash-flow modeling**，将 SDR 输入交易特定的 waterfall、prepayment、recovery 和 interest-rate scenarios，验证 senior tranche 是否能承受压力；(3) **surveillance**，通过月度 servicer reports、季度 performance reviews 和 rating-action triggers 监控(通常当 SDR-realised vs SDR-modeled 偏离超过阈值时下调 1-2  notches)；(4) **downgrade triggers** 内嵌于评级决定中(例如 originator credit deterioration、pool concentration breach、servicer event of default)。相较全球评级机构(S&P / Moody's / Fitch Japan)，JCR / R&I 使用**以日本为锚的违约数据**(不做多司法辖区 pooling)、**更低的 base-case default frequency**(反映日本消费者信用历史行为)，并且**没有 country-ceiling cap**(因为它们在国内尺度上将日本 sovereign 评为 AAA)；结果是 senior layer 出现 1–3  notch 的 split-rating gaps，并记录于 [[structured-finance/fitch-moody-sp-japan-criteria|global vs JCR / R&I criteria]]。本条目将操作机制——SDR calculation、cash-flow modeling、surveillance frequency、downgrade triggers——编码到 analyst playbook 层级，而非抽象方法论文件层级。

## Wiki route

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，作为 **operating-playbook methodology** 节点，补充基础性的 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology entry]] 和比较性的 [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]。请结合资产类别操作页面阅读:[[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]、[[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、[[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]、[[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]、[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、[[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]。监管锚点:底层法律实体层见 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]。

## 1. JCR and R&I — 机构身份

| 项目 | JCR | R&I |
|---|---|---|
| 日文名称 | 株式会社日本格付研究所 | 株式会社格付投資情報センター |
| 成立 | 1985 | 1998 (合并前身) |
| 所有权 | 独立，上市母公司 | 野村附属 |
| FSA 指定 | 根据 FIEA Article 66-27 | 根据 FIEA Article 66-27 |
| 国内 sovereign rating | AAA | AA+ |
| Structured-finance staff(约) | 60–80  名 analysts | 50–70  名 analysts |
| 年度 SF rating actions(约) | 200–400 (new + surveillance) | 150–300 |
| 办公室 | Tokyo(HQ) | Tokyo(HQ) |

两者均发布 structured-finance products 的详细 criteria papers 和 surveillance reports；两者均受 FSA 监管，并受 FIEA 下的行为规则约束。

## 2. 资产类别方法论架构

JCR 和 R&I 为每个资产类别维护独立的 criteria papers:

| 资产类别 | 方法论特征 | 典型 surveillance cadence |
|---|---|---|
| **Auto-loan ABS** | 按 new-car / used-car 切分的 vintage curve；集中度限制；backup-servicer 要求 | 月度 servicer report；季度 rating review；年度 full review |
| **Consumer-loan ABS** | 按 APR / loan-size bucket 的 vintage curve；利息限制法 regulatory shock scenario；early-amortization trigger calibration | 月度 servicer report；季度 rating review；半年度 full review |
| **Credit-card receivable ABS** | Master-trust pool dynamics；期间延长 conditional scenario；cross-series contagion stress | 月度 servicer report；季度 rating review |
| **Equipment lease ABS** | True-lease vs finance-lease 切分；equipment-type residual curves；按 industry / equipment / lessee 的集中度 | 月度 servicer report；季度 rating review |
| **RMBS** | LTV / DTI 分层；地理集中度；prepayment vintage curves；foreclosure-timing assumption | 月度 servicer report；季度 rating review；半年度 full review |
| **CMBS** | Property-level NCF stress；cap-rate stress；refinancing risk；special-servicer capability | 月度 servicer report；季度 rating review；年度 full review |
| **NPL securitization** | 按 NPL vintage / asset type 的 recovery-rate；servicer workout track record；legal-clearance risk | 季度 servicer report；半年度 rating review |
| **Project-finance** | Project-cash-flow stress；counterparty credit；completion risk；operating-cost stress | 年度 rating review(project bonds)；里程碑事件触发 rating actions |

Criteria papers 以日文和英文发布在各机构网站上；会定期更新(重大方法论修订约每 3–7  年一次)。

## 3. Stressed default rate(SDR) 计算

核心操作工具是 **stressed default rate**——与目标 senior-tranche rating 相一致的压力情景下的预期资产池违约频率。

### 3a. Base-case default frequency

| 资产类别 | 典型 base-case lifetime default frequency | 来源 |
|---|---|---|
| Auto loan(new-car captive) | 1.5–3.0% | Originator historical pool data；agency cross-issuer database |
| Auto loan(used-car / multi-brand) | 3.0–5.5% | Same |
| Consumer loan(unsecured) | 8–15% | Originator + agency database |
| Credit-card receivable | 4–8% | Originator + agency database |
| Equipment lease(mixed pool) | 2.5–5.0% | Same |
| Residential mortgage(private RMBS) | 1.0–2.5% | Originator + agency database |
| Commercial mortgage(CMBS) | 3.0–8.0% | Property-specific + agency historical data |

### 3b. 按评级类别的压力倍数

JCR / R&I 对 base case 应用特定评级类别的 stress multipliers:

| 评级 | Stress multiplier(典型) | SDR 的 cumulative default frequency |
|---|---|---|
| AAA | 4–6× base | 最高压力——能承受 recession-style scenario 加 tail event |
| AA | 3–4× base | Recession scenario |
| A | 2–3× base | Mild recession |
| BBB | 1.5–2× base | Modest stress |
| BB | 1.0–1.5× base | Base + small stress |

Stress multipliers 反映**评级定义**——AAA 意味着“能承受极端压力”，评级机构校准 stress multiplier 以在各资产类别之间实现一致性。

**示例计算**(auto-loan ABS):
- Base-case lifetime default: 2.5%
- AAA stress multiplier: 5×
- SDR(AAA): 12.5%
- Recovery rate assumption: 40%
- SDR × (1 – recovery) = 12.5% × 60% = 7.5% net loss
- AAA 所需 subordination + reserve + OC: 7.5% + cushion = ~8.5%
- 交易的 subordination structure 必须至少提供 8.5% 才能获得 AAA

### 3c. 资产池特征调整

SDR 会针对以下因素调整:
- Pool concentration(single obligor, geographic, vintage)——提高 SDR
- Originator track record(长历史 + 低历史方差)——降低 SDR
- Servicer capability and backup arrangements——若薄弱则上调 SDR
- Servicer-advance practices——影响 cash-flow modeling，不直接影响 SDR
- Trigger calibration——校准良好的 triggers 获得有利 SDR 处理

## 4. Cash-flow modeling

SDR 输入 **cash-flow model**，用以在压力下模拟 waterfall:

| Modeling input | Description |
|---|---|
| Pool collection schedule | 逐期预期 principal + interest collections |
| Default timing curve | Defaults 发生时间(通常 S-curve 在第 12–36 月达到峰值) |
| Recovery timing | Recoveries 发生时间(通常在 default 后第 6–18  月) |
| Prepayment curve | 逐期 voluntary prepayment |
| Interest-rate scenarios | 资产池或债券任一侧的 floating-rate exposure |
| Servicer-advance behavior | 按 servicing agreement 建模 |
| Trigger activation | triggers 触发时 waterfall 切换行为 |
| Tranche payment | 按交易 waterfall logic 支付 |

模型输出:
- SDR 情景下 senior tranche full repayment probability
- Senior tranche payment-shortfall scenarios
- Mezz tranche payment-shortfall scenarios
- Subordination utilization scenarios
- Reserve utilization scenarios

若 senior tranche 要获得 AAA，它必须在 SDR 加压力叠加情景下显示**零 principal shortfall**和**interest-shortfall coverage**。

## 5. Surveillance — 持续监控层

评级授予后，JCR / R&I 进行**持续 surveillance**:

### 5a. Servicer-report review(月度)

每月，servicer 向 trustee + rating agencies 提交报告:
- Pool balance(本月 vs 上月)
- 按账龄 bucket 的 delinquencies(30 / 60 / 90 / 120+ day)
- Charge-offs(gross + recoveries)
- Prepayments
- Pool yield(weighted-average APR)
- Reserve account balance
- OC level
- Cumulative net loss to date

评级机构将实际表现与模型表现比较。

### 5b. Quarterly rating review

每季度(正式频率；压力交易有时更频繁):
- Performance trend analysis
- 与同一资产类别其他交易比较
- Originator credit review
- Servicer operational review
- Trigger status check
- Rating-action consideration

### 5c. 年度 / 半年度 full review

每 6–12  个月:
- 使用更新后的 performance data 完整重跑 cash-flow model
- 若 base-case 已漂移，则更新 SDR calculation
- Pool composition changes
- Originator strategic developments
- Macro-economic update
- Rating-action recommendation

### 5d. Event-driven reviews

由特定事件触发:
- Originator bankruptcy / rating downgrade
- Servicer event of default
- Trigger activation
- 影响资产类别的 regulatory change
- Macro shock(例如 COVID, GFC)

## 6. Downgrade triggers — 评级何时变化

| Trigger | Typical downgrade magnitude |
|---|---|
| Originator rating downgraded below required threshold(e.g., BBB) | Senior 1 notch；backup servicer activation 可能调节 |
| Servicer event of default → backup servicer activated | 若 backup operational capacity 不确定，则 1–2 notches |
| Cumulative net loss > SDR × early-warning threshold | 初始 1 notch；若模式持续则进一步下调 |
| 90+ delinquency > 1.5× modeled stress | 1–2 notches |
| Reserve drawn below floor + not replenished within X months | 1 notch |
| Trigger activated → early-amortization | 初始 1 notch(承认机制发挥作用)；若 pool-level deterioration 严重则可能更多 |
| Pool concentration breach(lessee, geographic) | 1 notch |
| Macroeconomic / regulatory shock | 若持续则 multi-notch |
| Methodology revision | 可变；对受影响范围可能显著 |

Downgrades 并非自动发生——评级机构 analysts 在 surveillance review 中应用判断。**模式比任何单一数据点更重要**。

## 7. 与全球评级机构(S&P / Moody's / Fitch Japan)的比较

| 维度 | JCR / R&I | S&P / Moody's / Fitch Japan |
|---|---|---|
| Default data source | Japan-anchored | Multi-jurisdiction pooled |
| Base-case default frequency | 较低(反映日本历史低违约) | 较高(汇集全球数据，包括较高违约市场) |
| Stress multipliers | 按日本压力情景校准 | 按全球压力校准 |
| Country-ceiling cap | 无(日本在国内尺度被评为 AAA / AA+) | 有——上限为日本 sovereign(S&P: A+; Moody's: A1; Fitch: A) |
| Recovery assumptions | 日本特定(住宅通常较高) | 对部分资产池更保守(rural mortgages) |
| Methodology update cadence | 定期(3–7  年) | 定期(3–5  年) |
| Rating consistency across asset classes | 面向 Japan-domestic-scale 设计 | 面向 global-scale 设计 |
| Surveillance frequency | 月度 servicer + 季度 review | 类似 |
| Investor base recognition | 日本机构占主导 | 全球机构 |
| Repo eligibility / bank capital | 获日本监管目的认可 | 为全球 bank capital、ECB repo 等认可 |

**结构性 split-rating 结果**:同一资产池下，日本国内 auto-loan ABS senior tranche 通常以 7% subordination 从 JCR / R&I 获得 AAA，而以 8.5–10% subordination 从 S&P / Moody's 获得 AA / AA+。1–2  notch gap 是机械性的，反映方法论校准；这不是 JCR / R&I 宽松，而是不同的方法论(Japan-anchored vs global-pooled)。

## 8. 评级流程 — 操作时间线

| 步骤 | 典型时长 | 描述 |
|---|---|---|
| 1. Engagement / mandate | 1 week | Issuer / arranger 聘请评级机构；机构确认能力 |
| 2. Initial structuring discussion | 2–4 weeks | 评级机构就结构、subordination、triggers 提供反馈 |
| 3. Diligence + pool data review | 4–6 weeks | 提交 pool data；评级机构分析 |
| 4. Cash-flow modeling | 2–4 weeks | 评级机构运行模型；与 arranger 就 subordination 迭代 |
| 5. Rating committee | 1–2 weeks | 内部 committee 批准评级 |
| 6. Rating release | 1–2 weeks pre-pricing | Pre-sale / pre-pricing rating release |
| 7. Post-issuance surveillance | Ongoing | 月度 + 季度 + 年度 reviews |

从 mandate 到 rating 的总时间通常为 8–14  周。与全球评级机构时间线相近；engagement model 不同(JCR / R&I 的发行人互动更细，全球机构东京办公室人员更少)。

## 9. Counterpoints

- **"JCR / R&I are too lenient"**——辩护者引用日本特定数据来证明较低 base-case defaults 合理；批评者认为只有在日本违约率上行后，方法论才会与全球趋同，形成 tail risk
- **"Sovereign-cap mechanical exception is unfair to JCR / R&I"**——JCR / R&I 不受 country-ceiling 约束；问题在于这在方法论上是否合理，还是一种结构性优势
- **"SDR multipliers are arbitrary"**——批评者指出 4–6× AAA multiplier 是校准所得而非经验推导；辩护者指出评级类别一致性需要校准
- **"Surveillance is back-looking"**——月度 servicer-report review 有响应性但滞后；一些事件(originator stress)变化快于月度 review 能捕捉的速度
- **"Methodology updates create cliff effects"**——当机构更新 SDR multipliers 或 recovery assumptions 时，多笔交易可能同时变动；这是不可避免但具有扰动性的
- **"JCR / R&I split is genuine — choose one"**——一些发行人只聘请 JCR 或只聘请 R&I；co-rating 常见但增加成本。选择往往反映历史关系，而非方法论偏好

## 10. Open questions

- 随着日本资本市场国际化，JCR / R&I 是否会与全球评级机构的方法论趋同
- 气候风险和人口下降情景是否会被系统性纳入 SDR calculation
- FSA 是否会推动评级机构加强方法论披露或引入独立第三方 review
- 新资产类别(BNPL、EV-battery-related ABS、tokenized RWA)的方法论开发是否能跟上传统资产类别的节奏
- [[JapanFG/sumitomo-mitsui-trust|trust banks]] 作为 trustees 是否会随着其 fiduciary risk 增长而要求方法论变化(例如更细颗粒度的 surveillance frequency)
- 若 BOJ 利率正常化压测资产池并揭示 modelling differences，JCR / R&I 相对全球评级机构的竞争地位如何

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
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/sumitomo-mitsui-trust|SMTB]] · [[JapanFG/nochu-trust-bank|Nochu Trust]]

## Sources

- JCR structured-finance criteria library — https://www.jcr.co.jp/en/
- R&I structured-finance methodology library — https://www.r-i.co.jp/en/
- FSA designated credit rating agency list — https://www.fsa.go.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan structured-finance materials — https://www.asf-japan.gr.jp/

---

> [!info] 校核状态
> confidence: **likely**. SDR calculation framework、stress-multiplier ranges、cash-flow modelling architecture 和 surveillance frequencies 反映了 JCR / R&I 的公开方法论文档和行业观察实践。具体 stress-multiplier values 代表典型模式，并非单一来源声明；实际交易校准会变化。Downgrade-trigger thresholds 取决于具体交易，并在 offering documents 中披露。

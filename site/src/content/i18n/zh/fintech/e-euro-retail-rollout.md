---
source: fintech/e-euro-retail-rollout
source_hash: 15fa0b8e1d92cac6
lang: zh
status: machine
fidelity: ok
title: "数字欧元零售推出 —— Preparation Phase 2023-2026,  反脱媒设计、e-krona 暂停对比"
translated_at: 2026-06-15T03:48:21.843Z
---

# 数字欧元零售推出 —— Preparation Phase 2023-2026,  反脱媒设计、e-krona 暂停对比

## Wiki route

本词条作为针对 ECB 数字欧元、面向 2026  Preparation-Phase 快照的逐法域深度剖析，归属于 [[fintech/INDEX|fintech index]]。它与 [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] 配对以了解四国比较视角、与 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] 配对以了解架构语境，并与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]] 配对以了解三范式分类。逐法域同侪参见 [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] 与 [[fintech/erupee-india-pilot-status|eRupee India pilot status]]；与 EU 一侧相关的批发型 CBDC 语境（BoF / BdF、BdI 与 Bundesbank 参与）参见 [[fintech/bis-project-agora-overview|BIS Project Agorá]]。塑造数字欧元竞争跑道的更宏观 EU stablecoin 监管语境参见 [[fintech/mica-overview|MiCA overview]] 与 [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]。

> [!info] TL;DR
> 截至 2026  中期，数字欧元仍处于 **Preparation Phase**，最初界定为一个 2023-11  至 2025-10  的两年期，如今已延长至 2026-Q4+ 以等待 EU 共同立法结果。**无活跃发行**、**无零售钱包**、**无活跃商户**。具有定义意义的设计选择——经由受监管 PSP 的 **两层中介式分销**、一个 **目前提议为 €3,000-€4,000 的逐人持有限额** 并带有指向关联银行账户的 reverse-waterfall、以及零售余额的 **零利息**——是明确的反脱媒防御。最贴近的警示故事是瑞典 e-krona 项目，Riksbank 在 2024-2025  实际上将其暂停，未对发行作出决定、亦无活跃零售产品，证明了「准备可以无限期延长」。数字欧元的步调**不是技术限制；而是一项政策选择**，意在等待政治共识的同时保护 €18T+ 的商业银行存款基础。

## 项目架构

```
                ECB Digital Euro Programme
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                      ▼
   Investigation Phase                  Preparation Phase
   (2021-10 → 2023-10)                  (2023-11 → 2026-Q4+)
       │                                      │
   Design exploration                   Rulebook drafting
   (offline / online                    Technology vendor
   modes, holding cap,                  selection
   intermediated model)                 Manual + provider
                                        testing
       │                                      │
   Concluded with                       (NOT YET) Issuance
   "go to Preparation"                  decision pending
   recommendation                       legislative outcome
                                            │
                                            ▼
                                  Issuance Decision Phase
                                  (pending; not yet entered)
                                            │
                                            ▼
                                  Live issuance (not yet determined)
```

## Matrix A · 法规、监管机构、阶段状态

| Item | Detail |
|---|---|
| Lead authority | European Central Bank (ECB) Governing Council + ECB Executive Board |
| Legislative basis | Regulation establishing the digital euro — European Commission proposal June 2023; in EU Council + European Parliament co-decision (trilogue) |
| Investigation Phase | 2021-10 → 2023-10  (concluded) |
| Preparation Phase | 2023-11 → originally October 2025; **extended into 2026-Q4+** awaiting legislative outcome |
| Issuance Decision Phase | NOT yet entered as of 2026-05; requires Governing Council decision + legislative basis |
| Issuance start | Not yet determined; depends on Issuance Decision Phase outcome; earliest realistic 2027-2028  |
| Reporting cadence | ECB publishes quarterly / periodic progress reports on the digital euro project page |

ECB 在每一份进展报告中都明确澄清，**进入 Preparation Phase 并非发行的决定**。发行需要 (i) EU 共同立法法规获得通过，以及 (ii) Governing Council 另行作出启动决定。截至 2026-05  两者都尚未发生。

## Matrix B · 设计选择 —— 编码化的反脱媒

| Design choice | Detail | Why |
|---|---|---|
| **Two-tier intermediated** | ECB → supervised PSPs (banks, EMIs, payment institutions) → users; ECB does not directly distribute | Preserve commercial-bank role; consistent with [[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] dual-tier; avoid central-bank-direct-to-consumer disintermediation |
| **Per-person holding limit** | Proposed €3,000-€4,000  per person (subject to legislative decision; not finalised) | Hard cap on aggregate digital-euro balance per person; prevents large-scale conversion of bank deposits into central-bank money |
| **Reverse waterfall** | If a payment exceeds the recipient's holding cap, the surplus auto-transfers to the recipient's linked commercial-bank account | Removes the holding cap as a UX blocker for individual payments above the cap |
| **Zero interest** | The retail digital euro pays no interest | Removes the savings-substitution incentive vs commercial-bank deposits |
| **Online + offline modes** | Online mode for general use; offline mode for low-value cash-like P2P | Offline mode replicates cash-like privacy and resilience; online mode supports merchant payments |
| **Privacy tiers** | Offline mode = cash-like privacy (no central record of small-value P2P); online mode = supervised PSP visibility with ECB-data-minimisation | Balance privacy expectations vs AML/CFT obligations |
| **Distribution by supervised PSPs only** | Wallet provided by banks + supervised PSPs; ECB does not run consumer-facing apps | Forces channel ownership to remain with commercial-bank ecosystem |
| **No interest + no programmability for retail** | Explicit rejection of programmable money for retail digital euro | Preserve flexibility; avoid conditional-payment misuse and welfare-state automation framing |
| **Wholesale separate track** | Wholesale-CBDC use cases handled via separate Eurosystem exploratory work, not via the retail digital euro | Two distinct tracks; retail is the legislative focus |

三个核心的反脱媒参数——**holding cap + reverse waterfall + zero interest**——是争议最大的公共政策议题。商业银行游说采用低限额（€1,000-€2,500  区间），并强调高限额的系统性风险含义。ECB 已表示对 €3,000-€4,000  感到放心，但尚未最终敲定。立法结果将经由政治协商决定。

## Matrix C · Preparation-Phase 工作流

| Work-stream | Status (2026-05) |
|---|---|
| Rulebook drafting | Active; ECB-coordinated working groups with PSP, merchant, and consumer representatives |
| Technology-vendor selection (framework agreements) | Selected vendors announced; competitive procurement for components (e.g. risk management, fraud prevention, offline payments, app SDK, alias lookup) |
| Manual + technical testing | Pilot-scale technical testing in closed environments; no public-facing pilot |
| User-research / consumer focus groups | Active across euro-area Member States |
| Merchant outreach / acceptance design | Active; payment scheme integration design in flight |
| Cross-border interoperability design | Discussion of euro-area-wide design; limited engagement with external CBDCs |
| Legislative dialogue | Active engagement with EU Council and European Parliament; technical advice provided by ECB |

Preparation Phase **并非**公开试点。它是内部设计与技术供应商工作。最贴近的可比对象是一个处于设计阶段的大型金融基础设施项目，而非一个面向消费者的试验。

## Matrix D · 采用指标（最新公开）

| Metric | Most-recent public figure |
|---|---|
| Live retail users | **0** (no issuance) |
| Live merchants | **0** (no acceptance) |
| Cumulative tx volume | **0** |
| Cities / coverage | **0** |
| Wallet apps live | **0** |
| Cross-border CBDC settlement | **0** |
| Public pilot participants | **0** (Preparation Phase work is internal / vendor-side, not consumer-side) |
| Vendor framework agreements signed | Multiple component-level (risk management, app SDK, alias lookup, offline payment); selected vendor names announced over 2024-2025  |

这是唯一一项具有定义意义的事实：截至 2026-05，**数字欧元是四个参照 CBDC 项目中唯一一个零售活动为零的**。「落后于中国」这一框定在技术上准确，但实质上具有误导性——ECB 已明确表示这是**一项政策选择**，而非技术差距。

## Matrix E · 持有限额与反脱媒防御（深度剖析）

```
Per-person holding cap proposal (illustrative; not finalised)
       │
       ▼
   €3,000-€4,000  ← Latest publicly-discussed range
       │
       ├── Below cap: digital euro balance held in PSP-provided wallet
       │
       └── Above cap: reverse waterfall to linked commercial-bank account
                       (so payment never blocked from UX perspective)
```

三层防护：

1. **逐人硬性限额** —— 无论一个人开立多少个钱包，数字欧元持有余额总额均受限（限额是逐人而非逐钱包，需要一次 alias / 身份查询）。
2. **Reverse waterfall** —— 一笔会超出限额的付款会将盈余自动路由至关联的商业银行账户。用户仍可发送 / 接收任意金额；仅以数字欧元持有的余额受限。
3. **零利息** —— 完全消除储蓄替代激励；持有数字欧元唯一的经济理由是交易性的，而非储蓄。

ECB 已进行技术分析，表明即便在提议限额的较高端，欧元区数字欧元的总持有量也将仅相当于商业银行存款总额（€18T+）的一个小百分比，而 reverse waterfall 将处理激增动态。商业银行游说团体对此持有异议。立法结果将决定哪一观点占上风。

作为对比，其他三个参照 CBDC 项目中没有任何一个以相同方式将持有限额编码化：
- **China e-CNY** 采用运营商分层限额（低层 ¥10K 交易上限、¥50K 余额；高层 KYC 更高）。
- **India eRupee** 采用日交易的 app 配置限额；无公布的硬性余额上限。
- **Japan DCJPY** 并非 CBDC —— 它是一种代币化银行存款，按构造受 ¥10M 逐银行存款保险限额覆盖。

## Matrix F · 分销模式

| Layer | Role in distribution |
|---|---|
| ECB | Issuer (central-bank money); operates the underlying scheme + technical infrastructure |
| Supervised PSPs (banks, EMIs, payment institutions) | Wallet provision; user onboarding; KYC; user-facing app |
| Merchants | Accept digital euro payments via payment-scheme integration |
| Consumers | Hold digital euro in PSP-provided wallet; pay merchants; P2P |

分销模式被**明确设计为将商业银行保持在消费者关系的中心**。这是与中国两层制（赋予 10  家指定运营商分销权限，但由 PBoC 界定运营商）以及与印度两层制（使用 17  家参与银行）之间最大的单一设计差异。EU 的设计对既有商业银行分销渠道的保护程度最高。

## 与瑞典 e-krona 暂停的对比

由 Sveriges Riksbank 自 2017,  起运行的瑞典 e-krona 项目，是为数字欧元辩论提供借鉴的警示故事。Riksbank 的公开立场从活跃试点（2017-2022）演变为刻意未决的立场（2023-2024），再到实际上的暂停（2024-2025）。关键的公开来源信号：

- Riksbank 自 2017 起已跨多个阶段发布 e-krona PoC 报告。
- 至 2023-2024 ，Riksbank 的公开沟通日益强调发行是一个需要议会决定的**政治授权问题**，而非仅仅是中央银行的问题。
- Riksbank 将重心转向改善既有支付基础设施（RIX-INST 即时支付通道），而非推出 e-krona。
- e-krona 讨论相较于 Riksbank 其他工作流实际上已被降级。

对数字欧元的教训：**若政治条件不趋于一致，「准备」可以无限期延长**。瑞典的经验表明，发行的技术能力已确立完备，但发行的政治-经济决定才是约束性的制约。数字欧元正处于同一轨迹上——技术正在被构建，但发行决定并非 ECB 独自所能定。

| Item | EU digital euro | Sweden e-krona |
|---|---|---|
| Authority | ECB Governing Council | Sveriges Riksbank |
| Legislative basis | EU co-decision regulation pending | Swedish parliamentary decision required |
| Architecture | Two-tier intermediated via supervised PSPs | Two-tier intermediated model (under design) |
| Holding cap | Proposed €3,000-€4,000  | Not finalised; concept design referenced caps |
| Live retail | None | None |
| Status (2026-05) | Preparation Phase (extended) | Effectively paused; no issuance decision |
| Political momentum | Medium-low; commercial banks resist | Low; Riksbank deprioritised |
| Reason | Anti-disintermediation policy + co-legislative pace | Effective lack of consumer / political pull |

与中国和印度的对比是结构性的：在中国，政治授权毋庸置疑，且 PBoC 拥有直接的推行权限；在印度，RBI 拥有机构权限与清晰的技术授权；在 EU，ECB 需要立法同意；在瑞典，Riksbank 需要尚未兑现的议会授权。步调差异是**政治性的**，而非技术性的。

## 竞争语境 —— MiCA EMT 与批发型 Eurosystem

数字欧元的竞争跑道受两项平行的 EU 进展所塑造：

1. **MiCA EMT 制度** —— 于 2024-06-30（SC 部分）与 2024-12-30（完整）生效；来自 EU 信贷机构与 EMI 的受监管欧元计价 e-money token (EMT) 已在市场上。EMT 经由私营中介交付了「数字欧元」用例的一部分（可编程欧元支付）。参见 [[fintech/mica-overview|MiCA overview]] 与 [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]。
2. **Eurosystem 批发型探索工作** —— 与零售型数字欧元分立；就以中央银行货币进行的批发结算（包括基于 DLT 的结算）开展试验。一些欧元区中央银行（BdF、Banca d'Italia、Bundesbank）参与 [[fintech/bis-project-agora-overview|BIS Project Agorá]] 并有各自的 DLT 试点。

这两条互补的轨道意味着**就数字货币基础设施整体而言，EU 并未「落后」**——它拥有活跃的 MiCA 持牌 EMT 以及活跃的批发型 CBDC 技术工作。被卡住的具体是 **零售型 CBDC 发行**。正是这一结构性模式，将 EU 的步调与一个真正的技术差距叙事区分开来。

## 起源与演进

```
2017-2019    ECB internal work on CBDC; Working Paper series
2020-10      ECB publishes "Report on a digital euro"; consultation launched
2021-10      Investigation Phase begins (2-year)
2023-06      European Commission proposes Regulation establishing the digital euro
2023-10      Investigation Phase concludes; ECB recommends entering Preparation Phase
2023-11      Preparation Phase begins (originally 2-year, to 2025-10)
2024-2025    Vendor framework agreements; rulebook drafting; technical pilots
2025         Preparation Phase progress reports published quarterly / periodically
2025-2026    Preparation Phase extended into 2026-Q4+ awaiting legislative outcome
2026         EU Council + European Parliament continue trilogue on Regulation
2026-05      No issuance decision; Preparation continues
2026-2027    (Anticipated) Issuance Decision Phase entry conditional on legislative outcome
2027-2028    (Earliest realistic) Live retail issuance, conditional on Issuance Decision
```

**模式**：每一个重大步骤都取决于多机构的同意。ECB 对该项目拥有机构权限，但对法律基础或约束性政治授权则没有。Riksbank 的 e-krona 经验表明，这种依赖关系可以将时间线无限期拉长。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## Sources

- European Central Bank — Digital euro project page: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — Digital euro Preparation Phase progress reports: https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- European Commission — Digital euro proposal and policy page: https://commission.europa.eu/business-economy-euro/euro-area/digital-euro_en
- European Commission — Proposal for a Regulation on the establishment of the digital euro (June 2023)
- Council of the EU — Digital euro policy page: https://www.consilium.europa.eu/en/policies/digital-euro/
- ECB — Report on a digital euro (October 2020)
- ECB — Working Paper Series on CBDC design and analysis
- Sveriges Riksbank — e-krona project page and PoC reports: https://www.riksbank.se/en-gb/payments--cash/e-krona/
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá public materials (Eurosystem central-bank participation): https://www.bis.org/about/bisih/topics/cbdc/agora.htm

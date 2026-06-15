---
source: fintech/boe-digital-pound-consultation
source_hash: 1e1dc5dbeebe0932
lang: zh
status: machine
fidelity: ok
title: "英格兰银行数字英镑咨询 — 2023-2026 设计阶段、私营部门钱包、与 ECB 的比较"
translated_at: 2026-06-15T03:48:21.816Z
---

# 英格兰银行数字英镑咨询 — 2023-2026 设计阶段、私营部门钱包、与 ECB 的比较

## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下，作为对 **英格兰银行 (BoE) 与 HM Treasury (HMT) 数字英镑** 咨询及设计阶段的逐法域深度解读——英国零售 CBDC 轨道。可对照 [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]（设计选择相似的平行欧盟项目）阅读，对照 [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] 了解跨法域定位，对照 [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]] / [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]] / [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] 了解在营的小型经济体零售 CBDC 同业案例，并对照 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]] 了解三范式分类。关于私营 rail 的英国竞争语境，参见 [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]（同业制度）与 [[fintech/mica-overview|MiCA overview]]（欧盟监管邻接）。

> [!info] TL;DR
> BoE 与 HMT 于 **2023-02-07** 发布了关于 **数字英镑** 的联合咨询文件，公开咨询贯穿 **2023-06**，并于 **2024-01-25发布咨询回应**。结论是: **「现在判断是否引入数字英镑为时尚早。因此我们将开展一个设计阶段。」** 设计阶段已贯穿 2024-2026 ，目前处于多年期准备工作的 **第 2 阶段**。截至 2026-05 **尚未作出启动决定**；BoE 已明确将设计阶段定性为准备性的，**并非** 对发行的承诺。BoE / HMT 所偏好的设计选择与 ECB 数字欧元极为相似: **两层中介式**、**私营部门钱包**（BoE 明确不向消费者分发）、**每人持有上限介于 £10,000-£20,000**（拟议；未最终确定）、**零利息**，以及在隐私维度上超越数字欧元的 **强隐私保护**。与 ECB 的结构性比较是最明快的同业比较案例: 同一架构家族、显著更高的拟议持有上限，以及在英国案例中更为公开审慎的政治姿态。

## 项目架构

```
                BoE + HMT Digital Pound Programme
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   Consultation Phase                          Design Phase
   (2023-02-07 → 2023-06)                      (2024-01 → 2026+)
       │                                              │
   Public consultation                         Detailed design,
   paper + 50,000+                             vendor selection
   responses received                          (private-sector wallet
                                                providers), POC work,
                                                stakeholder engagement
       │                                              │
   Response published                          (NOT YET) Decision Phase
   2024-01-25 with                             Decision on whether
   conclusion "design phase                    to introduce conditional
   not commitment to issue"                    on legislation + political
                                                consensus
                                                       │
                                                       ▼
                                                 Live issuance (not yet specified;
                                                 earliest realistic
                                                 late 2020s)
```

## 矩阵 A · 法规、监管者、阶段状态

| Item | Detail |
|---|---|
| Lead authorities | **Bank of England (BoE)** + **HM Treasury (HMT)** — joint programme |
| Legal basis | Existing BoE Acts; new primary legislation **would be required** before issuance — explicitly stated in 2024 consultation response |
| Consultation paper | "The digital pound: a new form of money for households and businesses?" (2023-02-07) |
| Consultation period | 2023-02-07 → 2023-06-30 |
| Consultation response | 2024-01-25 — joint BoE / HMT response |
| **Decision status** | **No decision to launch**; design phase ongoing |
| Design Phase 1 | 2024-01 onward |
| Design Phase 2 | 2025-2026+ (ongoing) |
| Earliest realistic issuance | Late 2020s (2027-2028 floor; later more probable) |
| Wholesale CBDC | Separately handled — BoE participates in DLT-based wholesale settlement experiments; not part of digital pound retail track |
| Cross-border CBDC | None planned at retail level; UK participates in [[fintech/bis-project-agora-overview|BIS Project Agorá]] on the wholesale side |

BoE / HMT 在 2024 回应中明确澄清，**进入设计阶段并非启动决定**。发行将需要 (i) 新的主要立法、(ii) BoE / HMT 另行作出的启动决定，以及 (iii) 远高于当前水平的政治与政策共识。2024 回应在审慎性上与 ECB 数字欧元准备阶段的定性在结构上相似。

## 矩阵 B · 设计选择 — 明确镜像欧盟数字欧元架构

| Design choice | UK digital pound (proposed) | EU digital euro (proposed) | Notes |
|---|---|---|---|
| **Tiering model** | Two-tier intermediated via private-sector PSPs | Two-tier intermediated via supervised PSPs | Identical architectural family |
| **BoE / ECB direct distribution** | **No** — BoE explicitly will not distribute to consumers | **No** — ECB explicitly will not distribute | Same anti-disintermediation posture |
| **Wallet providers** | **Private-sector PIPs (Payment Interface Providers)** + ESIPs (External Service Interface Providers) | Supervised PSPs (banks, EMIs, payment institutions) | UK uses bespoke PIP/ESIP terminology; functionally equivalent |
| **Per-person holding limit** | **£10,000-£20,000 proposed range** (consultation paper; not finalised) | **€3,000-€4,000 proposed range** | UK proposed cap is **materially higher** than EU |
| **Interest paid** | Zero | Zero | Same |
| **Programmability** | Limited; BoE explicit caution against state-imposed programmability | Limited; ECB similar caution | Same |
| **Privacy posture** | **Strong** — BoE explicit that it would not see or hold individual transaction data; pseudonymous to the BoE; PIPs hold KYC | Strong (online mode supervised; offline mode cash-like) | UK proposes a stricter BoE-blindness model |
| **Online + offline modes** | Both contemplated; online primary in consultation | Both | Same |
| **Legal-tender status** | Contemplated; would require primary legislation | Contemplated under proposed Regulation | Same |
| **Reverse waterfall** | Not explicitly the EU mechanism; UK approach is "linked bank account" routing for over-cap | Reverse waterfall to linked commercial-bank account | Functionally similar |
| **Conditional payments / programmable money** | BoE explicit caution; would not be a feature in initial design | Same caution | Same |

这种镜像是有意为之的。BoE 与 ECB 在技术层面进行了广泛协调（通过 BIS 及央行对央行的对话），英国项目明确借鉴了欧盟的设计选择。关键差异在于 **拟议持有上限区间**——£10K-£20K 显著高于 €3K-€4K，部分反映了不同的商业银行存款基础顾虑以及不同的消费者效用假设。

## 矩阵 C · 2024 咨询回应 — 实质性发现

2024-01-25 BoE / HMT 联合回应是关于数字英镑的最重要单一公开文件。来自所收到的 50,000+ 份回应的关键发现:

1. **公众对隐私的关切** 主导了整个回应集合。被引用最多的个体关切是 **国家对个人交易的可见性**。
2. **对可编程性的关切**——许多回应者担忧「可编程货币」被用于国家强加的到期日、对支出的限制，或社会信用式的控制。
3. **对商业银行去中介化的关切**——UK Finance 及其他银行业回应者强调了高持有上限的系统性风险含义。
4. **对现金可得性的关切**——许多回应者重视实体现金，并担忧数字英镑会加速现金的衰退。
5. **消费者拉力有限**——多数消费者回应者无法识别出现有支付 rail（Faster Payments、非接触式卡、移动钱包、账户对账户）尚未满足的用例。

BoE / HMT 回应承诺:

- **强隐私保护**——BoE 将不会看到或持有个人交易数据；身份由受监管的 PIP 持有；BoE 仅拥有假名化的钱包标识符。
- **不施加国家强制的可编程性**——可编程功能仅由用户 / PIP 发起，而非中央银行。
- **现金将保留**——明确承诺数字英镑将与实体现金共存；并非替代。
- **持有上限高于 ECB**——拟议的 £10K-£20K 反映了针对英国状况的银行资金分析以及更高的消费者效用框定。
- **启动前需要主要立法**——以正式方式将审慎性嵌入。

这是在可比的零售 CBDC 咨询中记录最为详尽的公开回应。2024 回应文件如今在 BIS / IMF / 学术文献中被广泛引用。

## 矩阵 D · 私营部门钱包模型 (PIP + ESIP)

英国模型使用两个不同的私营部门角色:

```
   Bank of England (issuer of digital pound)
              │
              ▼
   PIP (Payment Interface Provider) — regulated wallet operator
              │
              ▼
   Consumer + merchant interaction via PIP wallet
              │
              ▼
   Optional ESIP (External Service Interface Provider) — value-add services
   (e.g., expense management, business accounting, integration with other apps)
```

- **PIP (Payment Interface Provider)**——主要钱包提供方；面向消费者；持有 KYC；与 BoE 中央账本集成。
- **ESIP (External Service Interface Provider)**——次级服务层；与 PIP 管理的钱包集成；可选。

为何这一点重要:

- **专属私营部门钱包**——BoE 不会运营消费者应用。这比欧盟数字欧元设计更具限制性（后者同样依赖 PSP，但设想了 ECB 监管下的分发渠道）。
- **保留商业银行角色**——英国银行将有资格成为 PIP，但非银行金融科技公司同样可以；该设计避免由商业银行垄断分发。
- **为 ESIP 提供创新面**——明确的政策目标是允许在数字英镑 rail 之上进行第三方创新。
- **隐私设计 (privacy by design)**——BoE 看到的是假名化钱包 ID；PIP 持有身份；ESIP 仅看到用户授权的内容。

PIP/ESIP 术语与结构是英国在公共 CBDC 词汇上的一项创新。在功能上它类似于 ECB 的「supervised PSP」模型，但在将面向消费者的层（PIP）与增值服务（ESIP）相分离上更为清晰。

## 矩阵 E · 持有上限之争 — £10,000-£20,000 vs €3,000-€4,000

英国拟议的持有上限区间 **显著高于** 欧盟。原因:

| Argument | Detail |
|---|---|
| **Higher utility ceiling** | A £10K-£20K wallet meaningfully replaces card spending for a UK consumer; €3K-€4K is closer to weekly grocery spend |
| **Higher GDP-per-capita-adjusted cap** | UK income/spending baseline supports higher cap |
| **More-banked population** | Higher banked share means more confidence that consumers will keep mainstream deposit balances with commercial banks |
| **Disintermediation analysis specific to UK** | BoE / HMT analysis suggests UK bank-funding implications at £10K-£20K cap are manageable |
| **Cap could move down before launch** | Banking-industry respondents argue for lower; final cap will be politically negotiated |
| **Cap could be variable** | Some responses suggested an initial-launch lower cap with gradual escalation |

上限是争论最多的单一设计参数，最终数字将显著影响数字英镑相对于商业银行存款及私营部门稳定币的竞争地位。

## 矩阵 F · 与同业项目的比较

| Item | UK digital pound | [[fintech/e-euro-retail-rollout\|EU digital euro]] | Sweden e-krona | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | China e-CNY |
|---|---|---|---|---|---|
| Lead authority | BoE + HMT | ECB | Riksbank | Bank of Jamaica | PBoC |
| Phase (2026-05) | Design Phase (post-consultation) | Preparation Phase (extended) | Effectively paused | Live since 2022 | Live mass-rollout |
| Live retail | No | No | No | Yes | Yes |
| Legislation status | Primary legislation required; not yet introduced | EU co-decision Regulation pending | Parliamentary mandate not yet sought | BoJ Act amendment 2022 passed | PBoC Law 2020 amendment |
| Proposed holding cap | £10K-£20K | €3K-€4K | n/a (paused) | n/a (small-economy) | Operator-tier limits |
| Privacy posture | Strongest (BoE-blind via PIP) | Strong (online vs offline modes) | n/a | KYC-tier model | Controllable-anonymity |
| Earliest issuance | Late 2020s | 2027-2028 earliest | n/a | Already live | Already live |
| Status framing | Design Phase explicitly not commitment | Preparation Phase explicitly not commitment | Effectively paused | Operational | Active mass rollout |

英国与欧盟项目显然处于 **同一家族**——相同的架构选择、相同的审慎性、相同的对立法的依赖、相同的多年期启动时间线。结构性差异在于英国对选择自身立法时间线有更大自由度（脱欧后，无欧盟共同决策约束），但它正将这一自由用于 **更为审慎** 的排序，而非更快启动。

## 起源与演进

```
2014-2020    BoE early CBDC research; multiple Discussion Papers / Working Papers
2020-03      BoE Discussion Paper "Central Bank Digital Currency — Opportunities, Challenges and Design"
2021-04      Chancellor of the Exchequer announces joint BoE / HMT Taskforce on a UK retail CBDC ("Britcoin" media tag)
2022         CBDC Engagement Forum + CBDC Technology Forum convened
2023-02-07   BoE + HMT consultation paper "The digital pound: a new form of money for households and businesses?" published
2023-06-30   Consultation period closes; 50,000+ responses received
2024-01-25   BoE + HMT response published — design phase confirmed; no decision to launch
2024         Design Phase 1 begins; private-sector PIP / ESIP framework articulation
2025         BoE Governor public statements emphasise design-not-launch framing; political caution mounts
2025-2026    Design Phase 2 ongoing; vendor / technology assessment in flight
2026-05      No issuance decision; design phase continues; primary legislation not yet introduced
2026-2027    (Anticipated) Decision Phase conditional on legislative timetable and political consensus
Late 2020s   (Earliest realistic) Live retail issuance, conditional on multiple gating decisions
```

**模式**: 英国正有条不紊地推进准备工作，而不承诺启动。其政治与政策姿态比 ECB **更为审慎**，部分原因在于英国的消费者支付 rail（Faster Payments、非接触式、Open Banking）已位列全球最高效之列——零售 CBDC 的边际收益更难确立。

## 与英国私营 rail 语境的比较

数字英镑将进入的竞争格局:

- **Faster Payments Service (FPS)**——英国即时支付 rail，自 2008, 起在营，无处不在，面向零售近乎零费用。
- **非接触式卡 + Apple Pay / Google Pay**——采用已饱和。
- **Open Banking（源自 PSD2）**——英国是 Open Banking 实施的全球领先者；账户对账户支付 rail 已在营。
- **GBP 私营稳定币**——有限；FCA 制度在 EMT 上比欧盟 MiCA 更具限制性。
- **CHAPS / RTGS**——批发结算；BoE 现有的大额 rail 正在并行现代化（RTGS Renewal Programme）。

含义在于: 相较欧盟消费者，英国消费者拥有 **更少的支付痛点**，零售 CBDC 自然能够解决的痛点更少。这使得消费者拉力的论证比支付 rail 欠发达的法域（Pix 之前的巴西、UPI 之前的印度、整体上的非洲）更弱。BoE 的审慎姿态部分正是这一点的反映——并不存在数字英镑必须解决的明显问题。

批发侧则不同。BoE 正积极参与:

- **[[fintech/bis-project-agora-overview|BIS Project Agorá]]**——英国偕同 BoE 参与，是所涉七家 G10 央行之一。
- **RTGS Renewal Programme**——使 BoE 的 RTGS 基础设施现代化，以支持未来的同步结算与 DLT 集成。
- **批发结算实验**——BoE 关于代币化央行货币是否应可用于批发用例的明确工作。

批发数字英镑轨道比零售轨道 **更为推进**，并可能在零售数字英镑启动（若其终将启动）之前先行交付价值。

## 关联

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|Four core trade-offs in CBDC architecture selection]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/central-banking-function-unbundling|central-banking function unbundling]]

## 来源

- Bank of England — digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- BoE + HMT — "The digital pound: a new form of money for households and businesses?" consultation paper (2023-02-07): https://www.bankofengland.co.uk/-/media/boe/files/paper/2023/the-digital-pound-consultation-paper.pdf
- HM Treasury — digital pound consultation page: https://www.gov.uk/government/consultations/the-digital-pound
- BoE + HMT — Response to the consultation (2024-01-25): https://www.bankofengland.co.uk/news/2024/january/response-to-the-digital-pound-consultation-paper
- BoE Discussion Paper "Central Bank Digital Currency — Opportunities, Challenges and Design" (2020-03)
- European Central Bank — Digital euro project page (peer comparator): https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- BIS Innovation Hub — Project Agorá public materials (UK / BoE participation)
- BoE RTGS Renewal Programme public materials (parallel wholesale-side modernisation)

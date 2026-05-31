---
source: fintech/boe-digital-pound-consultation
source_hash: a552039232a45dd2
lang: zh
status: machine
fidelity: ok
title: "英格兰银行数字英镑咨询——2023-2026 设计阶段、私营部门钱包、与 ECB 的比较"
translated_at: 2026-05-31T06:16:15.682Z
---

# 英格兰银行数字英镑咨询——2023-2026 设计阶段、私营部门钱包、与 ECB 的比较

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction deep dive on the **Bank of England (BoE) and HM Treasury (HMT) digital pound** consultation and design phase — the UK retail-CBDC track. Read it against [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]] (the parallel EU programme with similar design choices), [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for cross-jurisdiction positioning, [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]] / [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]] / [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] for live small-economy retail CBDC peer cases, and [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]] for the three-paradigm classification. For private-rail UK competitive context see [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]] (peer regime) and [[fintech/mica-overview|MiCA overview]] (EU regulatory adjacency).

> [!info] TL;DR
> 英格兰银行与 HM Treasury 于 **2023-02-07** 联合发布了**数字英镑**咨询文件，公众咨询期持续至 **2023-06**，并于 **2024-01-25** 发布了**咨询回应**。结论为："目前尚不适合决定是否引入数字英镑。因此，我们将启动设计阶段。"设计阶段已历经 2024-2026 ，目前进入多年准备工作的**第 2 阶段**。截至 2026-05 ，**尚未作出发行决定**；英格兰银行明确将设计阶段定性为准备性工作，而**非**发行承诺。英格兰银行/HMT 倾向的设计选择与 ECB 数字欧元高度一致：**双层中介**、**私营部门钱包**（英格兰银行明确不直接向消费者分发）、**每人持有上限拟定为 £10,000-£20,000**（拟议中，尚未最终确定）、**零利息**，以及**强隐私保护**——在隐私维度上甚至超过数字欧元。与 ECB 的结构性比较是最清晰的同类对照案例：同属一个架构家族，拟议持有上限更高，英国在政治姿态上更为审慎。

## 项目架构

```
                英格兰银行 + HMT 数字英镑项目
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   咨询阶段                                    设计阶段
   (2023-02-07 → 2023-06)                    (2024-01  → 2026+)
       │                                              │
   公开咨询文件                               详细设计、
   + 50,000+ 份                              供应商遴选
   回应收到                                  （私营部门钱包
                                              提供商）、概念验证
                                              工作、利益相关方参与
       │                                              │
   回应发布                                  （尚未）决策阶段
   2024-01-25，结论为                         关于是否在
   "设计阶段，非发行承诺"                  立法 + 政治
                                              共识条件下
                                              推出的决定
                                                       │
                                                       ▼
                                                 实时发行（待定；
                                                 最早可能在
                                                 2020 年代末期）
```

## 矩阵 A · 法规、监管机构、阶段状态

| 项目 | 详情 |
|---|---|
| 主导机构 | **英格兰银行（BoE）** + **HM Treasury（HMT）** — 联合项目 |
| 法律依据 | 现行英格兰银行法；发行前**需要新的基础立法** — 在 2024  咨询回应中明确表明 |
| 咨询文件 | "数字英镑：家庭和企业的新型货币形式？"（2023-02-07） |
| 咨询期 | 2023-02-07 → 2023-06-30 |
| 咨询回应 | 2024-01-25 — BoE/HMT 联合回应 |
| **决策状态** | **尚未决定发行**；设计阶段持续进行 |
| 设计阶段 1  | 2024-01  起 |
| 设计阶段 2  | 2025-2026+（持续进行） |
| 最早可能发行 | 2020 年代末（以 2027-2028  为下限；更晚的可能性更大） |
| 批发 CBDC | 另行处理——英格兰银行参与基于 DLT 的批发结算实验；不属于数字英镑零售轨道 |
| 跨境 CBDC | 零售层面无计划；英国在批发侧参与 [[fintech/bis-project-agora-overview|BIS Project Agorá]] |

英格兰银行/HMT 在 2024  回应中明确澄清，**进入设计阶段并非发行决定**。发行需要：（i）新的基础立法，（ii）英格兰银行/HMT 单独作出发行决定，以及（iii）高于目前水平的政治和政策共识。2024  回应在审慎程度上与 ECB 数字欧元准备阶段框架类似。

## 矩阵 B · 设计选择——明确镜像欧盟数字欧元架构

| 设计选择 | 英国数字英镑（拟议） | 欧盟数字欧元（拟议） | 备注 |
|---|---|---|---|
| **分层模式** | 经私营部门支付服务提供商双层中介 | 经受监管支付服务提供商双层中介 | 同属一个架构家族 |
| **BoE/ECB 直接分发** | **否** — BoE 明确不向消费者分发 | **否** — ECB 明确不向消费者分发 | 相同的反脱媒立场 |
| **钱包提供商** | **私营部门 PIP（支付界面提供商）** + ESIP（外部服务界面提供商） | 受监管支付服务提供商（银行、EMI、支付机构） | 英国使用专门的 PIP/ESIP 术语；功能上等效 |
| **每人持有上限** | **拟议范围 £10,000-£20,000 **（咨询文件；尚未最终确定） | **拟议范围 €3,000-€4,000 ** | 英国拟议上限**实质上更高** |
| **计息** | 零 | 零 | 相同 |
| **可编程性** | 有限；BoE 明确反对国家主导的可编程性 | 有限；ECB 立场类似 | 相同 |
| **隐私立场** | **强** — BoE 明确表示不会查看或持有个人交易数据；对 BoE 采用假名；PIP 持有 KYC | 强（在线模式受监管；离线模式类似现金） | 英国提出更严格的 BoE 盲视模型 |
| **在线 + 离线模式** | 均有考虑；咨询中以在线为主 | 均有 | 相同 |
| **法定货币地位** | 已考虑；需要基础立法 | 在拟议条例下已考虑 | 相同 |
| **反向瀑布** | 不明确采用 EU 机制；英国方式是"关联银行账户"路由超额部分 | 超额反向瀑布至关联商业银行账户 | 功能上类似 |
| **有条件支付/可编程货币** | BoE 明确审慎；初始设计不包含此功能 | 同样审慎 | 相同 |

镜像是有意为之的。英格兰银行和 ECB 在技术层面进行了广泛协调（通过 BIS 和央行间对话），英国项目明确借鉴了欧盟的设计选择。关键差异在于**拟议持有上限范围**——£10K-£20K 实质上高于 €3K-€4K，部分原因在于对商业银行存款基础的考量不同，以及对消费者效用的不同假设。

## 矩阵 C · 2024  咨询回应——实质性发现

2024-01-25 BoE/HMT 联合回应是关于数字英镑最重要的公开文件。从收到的 50,000+ 份回应中得到的主要发现：

1. **公众对隐私的担忧**主导了回应。被引用最多的个人担忧是**国家对个人交易的监控**。
2. **对可编程性的担忧** — 许多回应者担心"可编程货币"被用于国家强制规定的到期日、消费限制或类似社会信用的管控。
3. **对商业银行脱媒的担忧** — UK Finance 及其他银行业回应者强调高持有上限的系统性风险影响。
4. **对现金可及性的担忧** — 许多回应者重视实物现金，担心数字英镑会加速现金减少。
5. **消费者需求有限** — 大多数消费者回应者无法指出现有支付轨道（快速支付、非接触卡、移动钱包、账户间转账）尚未服务的使用场景。

BoE/HMT 回应承诺：

- **强隐私保护** — BoE 不会查看或持有个人交易数据；身份由受监管 PIP 持有；BoE 仅有假名钱包标识符。
- **无国家主导可编程性** — 可编程功能仅由用户/PIP 发起，而非中央银行。
- **现金将继续存在** — 明确承诺数字英镑将与实物现金共存；并非替代品。
- **高于 ECB 的持有上限** — 拟议 £10K-£20K 体现了针对英国条件的银行融资分析和更高的消费者效用框架。
- **发行前需要基础立法** — 正式嵌入审慎性。

这是同类零售 CBDC 咨询中文件记录最为详尽的公众回应。2024  回应文件现已被 BIS/IMF/学术文献广泛引用。

## 矩阵 D · 私营部门钱包模型（PIP + ESIP）

英国模型使用两种不同的私营部门角色：

```
   英格兰银行（数字英镑发行方）
              │
              ▼
   PIP（支付界面提供商）— 受监管钱包运营商
              │
              ▼
   消费者 + 商户通过 PIP 钱包交互
              │
              ▼
   可选 ESIP（外部服务界面提供商）— 增值服务
   （如费用管理、企业记账、与其他应用集成）
```

- **PIP（支付界面提供商）** — 主要钱包提供商；面向消费者；持有 KYC；与 BoE 中央账本集成。
- **ESIP（外部服务界面提供商）** — 二级服务层；与 PIP 管理的钱包集成；可选。

这一设计的意义：

- **钱包完全由私营部门提供** — BoE 不运营消费者应用。这比欧盟数字欧元设计更为严格（后者同样依赖支付服务提供商，但考虑了 ECB 监督的分发渠道）。
- **商业银行角色得以保留** — 英国银行可以作为 PIP，非银行金融科技公司亦可；设计避免了商业银行垄断分发。
- **ESIP 的创新空间** — 明确的政策目标，允许第三方在数字英镑轨道上进行创新。
- **隐私设计** — BoE 仅看到假名钱包 ID；PIP 持有身份；ESIP 仅能访问用户授权的内容。

PIP/ESIP 术语和结构是英国在公共 CBDC 词汇中的创新。功能上类似于 ECB 的"受监管支付服务提供商"模型，但在将面向消费者的层（PIP）与增值服务（ESIP）的分离上更为清晰。

## 矩阵 E · 持有上限之争——£10,000-£20,000  对比 €3,000-€4,000

英国拟议持有上限范围**实质上更高**。原因：

| 论点 | 详情 |
|---|---|
| **更高的效用上限** | £10K-£20K 钱包对英国消费者来说可有效替代卡片消费；€3K-€4K 更接近于一周日用品支出 |
| **更高的人均 GDP 调整上限** | 英国收入/消费基准支持更高上限 |
| **银行化程度更高的人口** | 更高的银行化比例意味着消费者将主流存款留在商业银行的信心更强 |
| **针对英国的脱媒分析** | BoE/HMT 分析表明英国银行融资在 £10K-£20K 上限下的影响是可控的 |
| **上限可在发行前下调** | 银行业回应者倾向于更低上限；最终数字将经政治谈判确定 |
| **上限可能为可变** | 部分回应建议以较低初始上限起步，逐步提高 |

上限是迄今最具争议的设计参数，最终数字将对数字英镑相对于商业银行存款和私营稳定币的竞争地位产生实质影响。

## 矩阵 F · 与同类项目的比较

| 项目 | 英国数字英镑 | [[fintech/e-euro-retail-rollout\|EU digital euro]] | 瑞典电子克朗 | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | 中国数字人民币 |
|---|---|---|---|---|---|
| 主导机构 | BoE + HMT | ECB | 瑞典央行 | 牙买加银行 | 中国人民银行 |
| 阶段（2026-05） | 设计阶段（咨询后） | 准备阶段（延长中） | 实际暂停 | 自 2022  起在线 | 大规模推广中 |
| 零售在线 | 否 | 否 | 否 | 是 | 是 |
| 立法状态 | 需要基础立法；尚未提出 | 欧盟共同决定条例待议 | 尚未寻求议会授权 | 2022  通过《牙买加银行法》修正案 | 2020 《中国人民银行法》修正案 |
| 拟议持有上限 | £10K-£20K | €3K-€4K | 不适用（暂停） | 不适用（小经济体） | 运营商级别限制 |
| 隐私立场 | 最强（通过 PIP 实现 BoE 盲视） | 强（在线与离线模式区分） | 不适用 | KYC 分级模型 | 可控匿名性 |
| 最早发行 | 2020 年代末 | 2027-2028  年最早 | 不适用 | 已在线 | 已大规模推广 |
| 状态定性 | 设计阶段明确非承诺 | 准备阶段明确非承诺 | 实际暂停 | 运营中 | 主动大规模推广 |

英国和欧盟项目明显属于**同一家族**——相同的架构选择，相同的审慎性，相同的对立法的依赖，相同的多年发行路径。结构差异在于，英国在选择自身立法时间表方面拥有更多自由（脱欧后，无欧盟共同决定限制），但英国将这种自由用于**更为审慎**的推进顺序，而非更快发行。

## 起源与演进

```
2014-2020     BoE 早期 CBDC 研究；多篇讨论文件/工作论文
2020-03       BoE 讨论文件《中央银行数字货币——机遇、挑战与设计》
2021-04       财政大臣宣布成立 BoE/HMT 联合工作组研究英国零售 CBDC（媒体称"英镑链"）
2022           成立 CBDC 参与论坛 + CBDC 技术论坛
2023-02-07   BoE + HMT 咨询文件"数字英镑：家庭和企业的新型货币形式？"发布
2023-06-30   咨询期结束；收到 50,000+ 份回应
2024-01-25   BoE + HMT 回应发布——确认设计阶段；不决定发行
2024           设计阶段 1  开始；私营部门 PIP/ESIP 框架阐述
2025           BoE 行长公开声明强调设计而非发行的定性；政治审慎情绪升温
2025-2026     设计阶段 2  持续进行；供应商/技术评估正在进行
2026-05       未作出发行决定；设计阶段持续；基础立法尚未提出
2026-2027    （预期）决策阶段，以立法时间表和政治共识为条件
2020 年代末  （最早可能）实时零售发行，以多项关口决定为条件
```

**规律**：英国正在不承诺发行的情况下有条不紊地推进准备工作。政治和政策立场**比 ECB 更为审慎**，部分原因在于英国消费者支付轨道（快速支付、非接触、开放银行）已是全球最高效之列——零售 CBDC 的边际效益更难证明。

## 与英国私有支付轨道的比较

数字英镑将进入的竞争格局：

- **快速支付服务（FPS）** — 英国即时支付轨道，自 2008,  起普及，零售端费用接近于零。
- **非接触卡 + Apple Pay / Google Pay** — 采用率饱和。
- **开放银行（PSD2衍生）** — 英国是全球开放银行实施领先者；账户间支付轨道已在线。
- **GBP 私有稳定币** — 有限；FCA 制度比欧盟 MiCA 对 EMT 更为严格。
- **CHAPS / RTGS** — 批发结算；BoE 现有高价值轨道正在并行升级（RTGS 更新计划）。

其含义是：英国消费者**在支付痛点方面少于欧盟消费者**，而零售 CBDC 能够自然解决的问题更少。这使消费者拉动案例比支付轨道不够发达的地区（巴西 Pix 前、印度 UPI 前、非洲整体）更弱。BoE 的审慎立场在一定程度上反映了这一点——数字英镑必须解决的明显问题并不存在。

批发侧则有所不同。BoE 正积极参与：

- **[[fintech/bis-project-agora-overview|BIS Project Agorá]]** — 英国与 BoE 参与其中，是七个 G10  中央银行之一。
- **RTGS 更新计划** — 升级 BoE 的 RTGS 基础设施，以支持未来的同步结算和 DLT 集成。
- **批发结算实验** — BoE 明确研究代币化央行货币是否应可用于批发用例。

批发数字英镑轨道**比零售轨道更为成熟**，可能在零售数字英镑推出之前（如果最终推出的话）率先实现价值。

## 相关

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/central-banking-function-unbundling|central-banking function unbundling]]

## 来源

- 英格兰银行——数字英镑主页：https://www.bankofengland.co.uk/the-digital-pound
- BoE + HMT——"数字英镑：家庭和企业的新型货币形式？"咨询文件（2023-02-07）：https://www.bankofengland.co.uk/-/media/boe/files/paper/2023/the-digital-pound-consultation-paper.pdf
- HM Treasury——数字英镑咨询页面：https://www.gov.uk/government/consultations/the-digital-pound
- BoE + HMT——对咨询的回应（2024-01-25）：https://www.bankofengland.co.uk/news/2024/january/response-to-the-digital-pound-consultation-paper
- BoE 讨论文件《中央银行数字货币——机遇、挑战与设计》（2020-03）
- 欧洲中央银行——数字欧元项目页面（同类比较）：https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- BIS 工作论文 No. 1116 ——《下一代货币体系——蓝图》（2024）
- BIS 创新中心——Agorá 项目公开资料（英国/BoE 参与）
- BoE RTGS 更新计划公开资料（平行批发侧升级）

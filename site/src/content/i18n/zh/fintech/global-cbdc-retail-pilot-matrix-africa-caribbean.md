---
source: fintech/global-cbdc-retail-pilot-matrix-africa-caribbean
source_hash: 8d65a2987800626a
lang: zh
status: machine
fidelity: ok
title: "全球零售型 CBDC 试点对比矩阵 — 非洲、加勒比、亚洲、英国"
translated_at: 2026-06-15T03:48:21.867Z
---

# 全球零售型 CBDC 试点对比矩阵 — 非洲、加勒比、亚洲、英国

## Wiki 路径

本词条位于 [[fintech/INDEX|fintech index]] 之下，是针对七个最常被引用的、已上线或处于设计阶段的零售型 CBDC 项目的跨辖区对比矩阵。它通过支持并排阅读而非逐一叙事的方式，补充 [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]、[[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]、[[fintech/boe-digital-pound-consultation|BoE digital pound consultation]] 和 [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] 的逐辖区深度剖析。架构背景见 [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]、[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three operating paradigms]] 和 [[fintech/cbdc-multi-tier-architecture-tradeoffs|four core trade-offs in CBDC architecture selection]]；四国采用曲线见 [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]；批发桥层见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 和 [[fintech/bis-project-agora-overview|BIS Project Agorá]]。

> [!info] 摘要
> 七个零售型 CBDC 项目锚定了 2026-05 的公开数据集：**Sand Dollar**（巴哈马，2020-10, 上线，运行时间最长）、**e-CNY**（中国，2020-04, 起试点，按注册钱包数计最大）、**DCash**（ECCB，2021-03, 试点，**2024-01已停运**）、**eNaira**（尼日利亚，2021-10, 上线，典型的采用失败案例）、**JAM-DEX**（牙买加，2022-07, 上线，最干净的小型经济体采用案例）、**Bakong**（柬埔寨，2020-10, 上线，技术上是支付系统 + 准 CBDC 混合体）以及 **digital pound**（英国，自 2024, 起处于设计阶段，未作出推出决定）。横读这张矩阵，结构性模式浮现：**技术供应商选择（Bitt vs eCurrency Mint vs 自研）下游于分销激励设计**、**法定货币地位与明确的立法授权相关，而非与市场接受度相关**，且 **采用百分比追踪分销渠道所有权**（PBoC 的国有银行强制、NCB Lynk 锚点钱包，对比巴哈马多 AFI 稀释、对比尼日利亚 DMB+MMO 激励错配）。

## 为何采用七极对比

单一发行方叙事（「零售型 CBDC 在某些地方奏效、在另一些地方失败」）虽正确但无助益——它无法分离出**哪些设计选择驱动哪些结果**。通过将全部七个项目就**法规 / 发行模式 / 钱包模式 / KYC 层级 / 采用 / 技术供应商 / 互操作性**并排放置，结构性相关性变得可见。矩阵视图还显示 **DCash 停运** 并非一次性失败，而是某一模式（小型经济体 + 多 AFI + Bitt 供应商 + 无锚点钱包 + 无注册激励）的可见尾部，同样的模式也制约着 Sand Dollar 和 eNaira。关于更广的 CBDC vs 私营轨道竞争背景，见 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] 和 [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]。

## 矩阵 A · 法规、监管机构、上线状态

| 项目 | 主导机构 | 法律依据 | 上线日期 | 状态 2026-05 |
|---|---|---|---|---|
| 🇧🇸 [[fintech/bahamas-sand-dollar-cbdc\|Sand Dollar]] | 巴哈马中央银行 (CBOB) | CBOB Act 2020 (修订版) | **2020-10-20**（史上首个全国性） | 已上线，5+ 年，增长缓慢 |
| 🇨🇳 e-CNY | PBoC + 数字货币研究所 | PBoC Law 2020 修订 | **2020-04**（试点） | 已上线，大规模推广阶段 |
| 🇰🇭 Bakong | 柬埔寨国家银行 (NBC) | NBC Law + 支付系统框架 | **2020-10** | 已上线，支付系统 + 准 CBDC 混合体 |
| 🇪🇨 DCash | 东加勒比中央银行 (ECCB) | ECCB Agreement Act + 沙盒 | **2021-03** 试点 | **2024-01已停运**，此前经历 2 个月中断 |
| 🇳🇬 [[fintech/nigeria-enaira-retail-cbdc\|eNaira]] | 尼日利亚中央银行 (CBN) | CBN Act 2007 (既有货币发行) | **2021-10-25**（首个非洲） | 已上线但被弱化 |
| 🇯🇲 [[fintech/jamaica-jam-dex-cbdc\|JAM-DEX]] | 牙买加银行 (BoJ) | BoJ (Amendment) Act 2022 | **2022-07** | 已上线，增长温和 |
| 🇬🇧 [[fintech/boe-digital-pound-consultation\|digital pound]] | BoE + HMT | 既有 BoE 法案；需主要立法 | 未上线；设计阶段 | **未作出推出决定** |

最早的推动者是 **巴哈马（2020-10）全国性** 和 **e-CNY（2020-04）试点**；最晚上线的项目是 **JAM-DEX（2022-07）**。唯一 **停运** 的项目是 **DCash（2024-01）**——一个警示性的数据点，因为 DCash 使用了与 Sand Dollar 和 eNaira 相同的 Bitt 供应商。英国是七者中唯一尚未承诺推出的项目。注意：**e-CNY 试点比 Sand Dollar 的全国性上线早约 6 个月**，但 PBoC 尚未宣布「全国推出」；e-CNY 仍处于覆盖 26+ 个城市的延长试点阶段。

## 矩阵 B · 法定货币地位与货币锚定

| 项目 | 法定货币地位 | 货币锚定 | 备注 |
|---|---|---|---|
| Sand Dollar | **是** — CBOB 的直接负债 | B$（对美元按 1:1 挂钩） | 经固定汇率制度继承巴哈马的美元挂钩 |
| e-CNY | **是** — PBoC 的直接负债 | CNY（有管理浮动） | 首个具有明确法定货币地位的主要经济体 CBDC |
| Bakong | **准** — Bakong 是将商业银行余额代币化的支付系统 + KHR 货币；并非纯央行负债型 CBDC | KHR + USD（双币流通） | Bakong 同时支持 KHR 和 USD 钱包；结构上是混合体 |
| DCash | 是（试点期间） | XCD（对美元按 1:1 、以 XCD 2.70 兑 1 美元挂钩） | 2024-01 已停运 |
| eNaira | **是** — CBN 的直接负债 | NGN（有管理浮动 / 事实上多区间） | 无明确的 CBDC 立法；依既有 CBN 货币权限发行 |
| JAM-DEX | **是** — 在 BoJ Amendment Act 2022 中明确 | J$（有管理浮动） | 最干净的法律结构；专门的 CBDC 修正案 |
| digital pound | 已纳入考虑；需主要立法 | GBP | 若推出将为 BoE 负债 |

法定货币地位的分布是 **牙买加 > 巴哈马 > 英国提案 > 尼日利亚 > 中国 > 柬埔寨 > DCash**。牙买加的 BoJ Amendment Act 2022 是最干净的专门 CBDC 立法；英国将需要它尚未提出的主要立法；中国于 2020修订了 PBoC Law；尼日利亚依赖既有的货币发行权限，且尽管 eNaira 已上线 4+ 年，却独特地**从未**通过 CBDC 专门立法。

## 矩阵 C · 发行与分销模式（直接 vs 中介）

| 项目 | 发行模式 | 分销层 | 锚点钱包 |
|---|---|---|---|
| Sand Dollar | 双层中介 | **授权金融机构 (AFIs)** — 跨 AFI 可互操作 | 多个 AFI 钱包（Island Pay、KANOO、MoneyMaxx、银行钱包）—— **无单一锚点** |
| e-CNY | 双层中介 | **10 家指定运营机构** — 六家国有商业银行 + 四家支付/电信运营机构（含 ICBC、BOC、CCB、ABC、经由 MyBank 的支付宝、经由 WeBank 的微信） | 多个，但 ICBC + 支付宝 + 微信支付占主导 |
| Bakong | 混合；NBC 运营 Bakong 结算层；商业银行余额被代币化 | 所有柬埔寨商业银行 + 支付机构 | Bakong app（NBC 运营）+ 银行 app |
| DCash | 经银行试点 | ECCU 商业银行 | DCash app（ECCB 运营） |
| eNaira | 双层中介 | DMBs（存款货币银行）+ MMOs（移动货币运营商） | eNaira Speed Wallet（CBN 运营）+ DMB 钱包 app + USSD *997# |
| JAM-DEX | 双层中介 | 授权 PSPs + DTIs | **Lynk**（NCB Financial Group 的 TFOB 子公司）—— 单一主导锚点 |
| digital pound | 双层中介（提案） | **PIPs**（支付接口提供方）+ **ESIPs**（外部服务接口提供方） | 仅私营部门钱包；BoE 明确表示不会运营消费者 app |

**分销渠道所有权** 是具约束力的采用变量。JAM-DEX 的 Lynk 和 e-CNY 的国有银行强制对齐了分销激励；Sand Dollar 的可互操作 AFI 模式在结构上很干净，但稀释了任一 AFI 的营销激励；eNaira 的 DMB+MMO 栈普遍激励薄弱（DMB 视 eNaira 为蚕食费用，MMO 视其与自家电子货币竞争）；DCash 的停运可追溯至相同的稀释动态加上运营脆弱性。英国的 PIP/ESIP 设计尚未经推出测试。

## 矩阵 D · KYC 层级结构与单钱包限额

| 项目 | 第 1 层（低摩擦） | 第 2 层（已验证） | 第 3 层（高额度 / 企业） |
|---|---|---|---|
| Sand Dollar | 仅手机；**B$500 钱包 / B$1,500 月交易额** | 政府 ID 验证；**B$8,000 钱包 / B$10,000 月交易额** | 企业钱包 — KYB；按企业类型设更高额度 |
| e-CNY | 仅手机运营机构层；最低额度 CNY ~5,000 日 / 50,000 年 | ID 验证；更高的运营机构层额度 | 企业 + 高净值运营机构层；在运营机构批准内实际无上限 |
| Bakong | 手机 + 轻 ID 入驻；~$10,000 钱包上限 | ID + 银行关联；更高额度 | 企业 / 跨境（泰国 PromptPay 关联）；更高额度 |
| DCash | 仅手机层；政府 ID 层 | 更高的政府 ID 层 | 无（已停运） |
| eNaira | 第 0 层 — 仅手机，**₦120K 日 / ₦300K 上限** | 第 1 层 BVN 轻验证，第 2 层 BVN 完整验证 | 第 3 层银行账户关联，更高额度 |
| JAM-DEX | 标准 PSP 入驻（与 Lynk 对齐） | 按 PSP 分层；更高额度 | 商户层 |
| digital pound | 无（提案）；未详细公布层级结构 | 无 | **提议的人均持有上限 £10,000-£20,000**（未最终确定） |

**第 1 层限额作为普惠定向**：每个已上线项目都尝试为无银行账户者设低摩擦层；**没有任何已上线项目报告第 1 层占主导**——关于 Sand Dollar 和 eNaira 的 IMF 工作论文均指出，第 2 层（ID 验证）用户主导了实际使用。普惠设计在结构上正确，但未能在目标规模上对无银行账户者形成约束。英国 digital pound 独特地考虑 **人均持有上限**（£10K-£20K）而非分层 KYC 结构——这是七个项目中**最大的单一设计分歧**。

## 矩阵 E · 采用指标 — 注册 vs 活跃 vs 人口

| 项目 | 注册钱包 | 活跃钱包（代表性） | 占成年人口的采用 % |
|---|---|---|---|
| Sand Dollar | ~30-50K 个人 + 商户 | 注册中每月交易的个位数百分比 | **<人口的 1%**（总人口 ~400K；绝对基数小） |
| e-CNY | **180M+** 注册 | 个位数百万日活（绝对量大，百分比小） | **<日活 1%**；按用户计数的月活更高 |
| Bakong | ~10M+ Bakong 关联账户（NBC） | 因 QR 支付的普遍性，月活实质高于同业 | **占成年人口的 40-60%**（NBC 公开声明；支付系统模糊） |
| DCash | <10K 累计（同业估计） | 无（已停运） | **<人口的 0.5%**；最低之一 |
| eNaira | ~700K–900K（1年）；后续估计被混淆 | **<注册中交易的 1.5%**（IMF） | **<成年人口的 0.5%**（IMF 1年；此后无重大阶跃变化） |
| JAM-DEX | ~200K–300K，由 Lynk 主导 | 实质更小；BoJ 未披露精确日活 | **占成年人口的若干 %**（总成年人 ~2M；最干净的小型经济体 %） |
| digital pound | 无（未上线） | 无 | 无 |

**柬埔寨 Bakong 是异类**。其 40-60%的采用数字反映出 Bakong 在技术上是一个 **支付系统 + 互操作性层**，它吸收了既有的 QR 支付市场，而非纯央行负债型零售 CBDC。该数字在支付系统口径下是真实的，但不能与 Sand Dollar / eNaira / JAM-DEX 的采用指标直接比较。**JAM-DEX 是最干净的小型经济体成功案例**，在可比的纯零售 CBDC 同业中按人口百分比计。**e-CNY 绝对值最大但日活百分比小**，类似于 eNaira 中注册 vs 活跃的差距。**DCash 停运** 是唯一彻底失败的终局案例。

## 矩阵 F · 技术供应商与底层技术

| 项目 | 供应商 | 底层技术 | 备注 |
|---|---|---|---|
| Sand Dollar | **Bitt Inc.**（巴巴多斯） | 许可型 DLT（Bitt 平台；Hyperledger Fabric 变体） | 与 eNaira + DCash 同一供应商；该集群的采用结果中庸至不佳 |
| e-CNY | **PBoC 自研**（数字货币研究所） | 专有架构；基于账户，具备硬件钱包能力 | 无外部供应商；完全由 PBoC 规模化自建 |
| Bakong | **Soramitsu（日本）** + NBC | 基于 Hyperledger Iroha；定制实现 | Soramitsu（东京）是架构主导方——区别于 Bitt/eCurrency Mint 集群 |
| DCash | **Bitt Inc.**（巴巴多斯） | 与 Sand Dollar 相同的 Bitt 平台 | 2022年 1–3 月中断两个月；2024-01 已停运 |
| eNaira | **Bitt Inc.**（巴巴多斯） | 许可型 Hyperledger Fabric 变体 | 与 Sand Dollar / DCash 同一 Bitt 供应商谱系 |
| JAM-DEX | **eCurrency Mint**（美国总部） | DSC2 (Digital Symbol Cryptography) 分层签名 | 区别于 Bitt 的供应商；七极集合中最干净的小型经济体采用案例 |
| digital pound | **未公开指定**（供应商遴选在设计阶段仍在进行中） | 无；第 2 阶段设计进行中 | BoE 已开展探索性供应商 PoC，但未公开承诺供应商 |

**Bitt 供应商集群**（Sand Dollar / eNaira / DCash）涵盖了表中四个最差采用结果中的三个。**eCurrency Mint 部署**（JAM-DEX）是最干净的小型经济体结果。**自研**（e-CNY）和 **Soramitsu**（Bakong）是两条非 Bitt/非 eCurrency Mint 的路径，两者采用都更强——但分销模式截然不同，因此供应商选择并非具约束力的变量。该模式更像是 **「分销设计制约供应商结果触达」** 而非「供应商能力决定采用」。关于供应商 / 治理交互的更多内容，见 [[fintech/cbdc-multi-tier-architecture-tradeoffs|four core trade-offs in CBDC architecture selection]]。

## 矩阵 G · 跨境互操作性

| 项目 | 跨境 CBDC 整合 | 双边 CBDC 桥 | 批发桥参与 |
|---|---|---|---|
| Sand Dollar | 无 | 无 | 无 |
| e-CNY | **是 — [[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]] 的主要锚点** | HK 关联（GBA 跨境零售） | mBridge + 未来 BRICS-Pay 候选 |
| Bakong | **是 — 泰国 PromptPay 双边** + 老挝 + 马来西亚 + 越南互操作 | 泰国 PromptPay（已上线）；ASEAN 多边在规划中 | 不在 mBridge；ASEAN 区域 QR 网络 |
| DCash | 无 | 无 | 无（已停运） |
| eNaira | 无 | 无 | 不在 mBridge / Agorá / Project Dunbar |
| JAM-DEX | 无 | 无 | 无 |
| digital pound | 零售层无；BoE 在批发层参与 [[fintech/bis-project-agora-overview\|BIS Project Agorá]] | 无规划 | Agorá 批发 |

**跨境 CBDC 采用集中在两个项目**：e-CNY（经 mBridge + GBA HK 关联）和 Bakong（经 PromptPay + ASEAN QR）。其余五个零售型 CBDC 项目（Sand Dollar、DCash、eNaira、JAM-DEX、digital pound）截至 2026-05**无跨境 CBDC 整合**。这是小型经济体零售 CBDC 故事中**最大的单一缺口**——最能从跨境汇款通道获益的加勒比和西非项目，却没有 CBDC 层级的桥。

## 矩阵 H · 发行 ↔ 分销激励对齐计分卡

| 项目 | 发行方激励 | 分销方激励 | 锚点钱包 | 综合评分 |
|---|---|---|---|---|
| Sand Dollar | 高（CBOB 承诺） | 在众多 AFI 间稀释；互操作性对用户有利，但对分销方锁定薄弱 | 无主导 | **中** |
| e-CNY | 高（PBoC 强制） | 高（国有银行强制；对支付宝 / 微信的监管压力） | 支付宝 + 微信 + ICBC | **高** |
| Bakong | 高（NBC） | 高（Bakong 吸收了既有的 QR 支付经济） | Bakong app | **高** |
| DCash | 高（ECCB） | 低（ECCU 小型银行；无锚点）；运营脆弱 | 无 | **低**（已失败） |
| eNaira | 高（CBN） | 低（DMB 被蚕食；MMO 竞争；代理偏好佣金） | 无 | **极低** |
| JAM-DEX | 高（BoJ） | 高（NCB 的 TFOB 承诺；Lynk 锚点钱包） | Lynk | **高** |
| digital pound | 未公开指定 | 未公开证明（PIP/ESIP 已设计但未验证） | 仅私营部门 PIPs | **未公开证明** |

已上线项目中，采用的最强单一预测因素是 **是否有单一锚点分销方或钱包具有对齐的商业激励** 去推动该 CBDC。牙买加的 Lynk = NCB Financial Group 的承诺；中国的国有银行强制 + 支付宝/微信吸收；柬埔寨的 Bakong 作为支付系统的网络效应。三个最弱的案例（DCash、eNaira、Sand Dollar）均因不同原因（分别为运营脆弱性、激励错配、激励稀释）未能通过此项检验。

## 为何选择这些维度

选择这八个矩阵轴（法规、法定货币、发行模式、KYC 层级、采用、技术供应商、跨境、激励对齐），是因为它们直接映射到 **BIS/IMF CBDC 采用文献中的门槛变量**：

1. **法规 / 法定货币** — 决定法律可执行性与接受上限（理论最大市场份额）。
2. **发行 / 分销** — 决定谁因分销而获酬（具约束力的采用速率变量）。
3. **KYC 层级** — 决定面向无银行账户者的可及性下限（理论普惠上限）。
4. **采用 %** — 衡量已实现的结果（公众唯一在意的指标）。
5. **技术供应商** — 决定运营风险（DCash 失败与负载下供应商平台的脆弱性相关）。
6. **跨境** — 决定 CBDC 是否在国内支付之外有任何角色。
7. **激励对齐** — 比任何其他单一指标更能预测采用速率变量。

法规和法定货币是 **必要但不充分**；激励对齐在存在时是 **充分的**（JAM-DEX、e-CNY、Bakong），在缺失时是 **决定性的**（eNaira、DCash、Sand Dollar）。这是矩阵视图揭示而逐辖区叙事所掩盖的核心实证发现。

## 解读矩阵

- **Bitt 供应商集群模式**：Sand Dollar、eNaira、DCash 都使用了 Bitt，且都表现不佳。供应商**并非**具约束力的变量——分销激励设计才是——但供应商集群的相关性足够显著，以至于未来的小型经济体项目很可能会分散供应商。
- **「史上首个」vs「最佳结果」的分歧**：巴哈马是首个（2020-10-20 全国性），但 JAM-DEX（2022-07）拥有最干净的采用百分比。上线速度并不预测采用质量。
- **DCash 作为典型失败**：在 2022 的两个月中断及持续低采用之后，于 2024-01 停运。DCash 的事后剖析如今是 BIS CBDC 运营风险文献中最常被引用的案例。
- **e-CNY 作为注册 vs 活跃的差距**：180M+ 注册钱包与个位数百万日活之间是 25-50× 的差距；同样的模式（规模更小）在 eNaira 中可见。在任何零售 CBDC 中，注册钱包都不等于活跃用户。
- **digital pound 作为无限期设计阶段模式**：BoE 的「设计阶段、而非推出承诺」表述在政治上便利，可能让该项目无限期停留在设计阶段而不正式取消，与瑞典央行的 e-krona 路径相仿。
- **Bakong 作为支付系统-CBDC 混合体**：Bakong 实现了矩阵中所有项目中最高的采用百分比，恰恰是因为它吸收了既有的 QR 支付市场而非与之竞争——这是一个与既有支付轨道（英国 Faster Payments、巴西 Pix、印度 UPI）竞争的纯 CBDC 所不具备的选项。

## 相关条目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three operating paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|four core trade-offs in CBDC architecture selection]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
<!-- /wiki-links:managed -->

## 来源

- Central Bank of Nigeria — eNaira Design Paper (2021): https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- Central Bank of The Bahamas — Sand Dollar FAQ: https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- Bank of Jamaica — CBDC / JAM-DEX project: https://boj.org.jm/core-functions/currency/cbdc/
- Eastern Caribbean Central Bank — DCash project page (historic): https://www.eccb-centralbank.org/p/about-the-project
- People's Bank of China — public CBDC research and pilot updates: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- National Bank of Cambodia — Bakong public materials: https://www.nbc.gov.kh/english/economic_research/bakong.php
- Bank of England — digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- IMF Working Paper — Nigeria's eNaira One Year After (Ree, 2023): https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- IMF Working Paper — Bahamas's Sand Dollar: CBDC and Lessons Learned (Kosse, Mattei, Glowka, 2022): https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024): https://www.bis.org/publ/work1116.htm
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm

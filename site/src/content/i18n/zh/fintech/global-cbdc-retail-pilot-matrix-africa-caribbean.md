---
source: fintech/global-cbdc-retail-pilot-matrix-africa-caribbean
source_hash: d76da26ef39d6fde
lang: zh
status: machine
fidelity: ok
title: "全球零售型 CBDC 试点对比矩阵：非洲、加勒比、亚洲、英国"
translated_at: 2026-05-31T06:16:15.743Z
---

# 全球零售型 CBDC 试点对比矩阵：非洲、加勒比、亚洲、英国

## Wiki route

本文位于 [[fintech/INDEX|fintech index]]，作为 7 个最常被引用、已上线或仍在设计中的零售型 CBDC 项目的跨法域对比矩阵。它与单一法域深度条目 [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]、[[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]、[[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]、[[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] 互补，便于横向阅读而非逐篇叙述式阅读。架构背景可结合 [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]、[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three paradigms]]、[[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture tradeoffs]]；四国采用曲线可参见 [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]；批发桥接层可参见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 与 [[fintech/bis-project-agora-overview|BIS Project Agora]]。

> [!info] TL;DR
> 截至 2026-05，公开数据集中最有代表性的 7 个零售型 CBDC 项目分别是：**Sand Dollar**（巴哈马，2020-10 上线，运行时间最长）、**e-CNY**（中国，2020-04 起试点，注册钱包规模最大）、**DCash**（ECCB，2021-03 试点，**2024-01 停止**）、**eNaira**（尼日利亚，2021-10 上线，采用失败的典型案例）、**JAM-DEX**（牙买加，2022-07 上线，小型经济体里最干净的采用案例）、**Bakong**（柬埔寨，2020-10 上线，技术上属于支付系统 + 准 CBDC 混合体）、以及 **digital pound**（英国，2024 年以来处于设计阶段，尚未决定发行）。横向看，这个矩阵显示出一个结构性规律：**技术供应商选择（Bitt、eCurrency Mint、内建方案）受制于分发激励设计**，**法偿地位更依赖明确立法授权而非市场接受度**，而**采用率则跟分发渠道的所有权结构高度相关**。

## 为什么要做七极对比

单一发行者叙事，即“零售型 CBDC 有的成功、有的失败”，虽然没错，但没有解释力。把 7 个项目放在同一张表里，从 **法律依据 / 发行模式 / 钱包模式 / KYC 分层 / 采用率 / 技术供应商 / 互操作性** 等维度并列，才能看到哪些设计选择对应哪些结果。

矩阵也说明，**DCash 的停止** 不是孤立故障，而是某一结构模式的可见尾部：小经济体 + 多 AFI + Bitt 供应商 + 没有锚定钱包 + 没有强激励，这一模式同样制约了 Sand Dollar 和 eNaira。若要看更广义的 CBDC 与私人支付轨竞争背景，可结合 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] 与 [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]。

## 矩阵 A：法律依据、监管者、上线状态

| 项目 | 主导机构 | 法律依据 | 上线时间 | 2026-05 状态 |
|---|---|---|---|---|
| [[fintech/bahamas-sand-dollar-cbdc|Sand Dollar]] | Central Bank of The Bahamas (CBOB) | CBOB Act 2020（修订） | **2020-10-20** | 已上线，5+ 年，增长缓慢 |
| e-CNY | PBoC + Digital Currency Research Institute | PBoC Law 2020 amendment | **2020-04**（试点） | 已上线，大规模推广阶段 |
| Bakong | National Bank of Cambodia (NBC) | NBC Law + payment-system framework | **2020-10** | 已上线，支付系统 + 准 CBDC 混合体 |
| DCash | Eastern Caribbean Central Bank (ECCB) | ECCB Agreement Act + sandbox | **2021-03** 试点 | **2024-01 停止**，此前有 2 个月故障停摆 |
| [[fintech/nigeria-enaira-retail-cbdc|eNaira]] | Central Bank of Nigeria (CBN) | CBN Act 2007（既有货币发行权限） | **2021-10-25** | 已上线，但被弱化 |
| [[fintech/jamaica-jam-dex-cbdc|JAM-DEX]] | Bank of Jamaica (BoJ) | BoJ (Amendment) Act 2022 | **2022-07** | 已上线，温和增长 |
| [[fintech/boe-digital-pound-consultation|digital pound]] | BoE + HMT | 现有 BoE Acts；仍需专门立法 | 尚未上线；Design Phase | **尚未决定发行** |

最早的两个先行者是 **巴哈马（2020-10，全国上线）** 和 **e-CNY（2020-04，试点开始）**；最新上线的项目是 **JAM-DEX（2022-07）**。7 个项目中唯一已经 **停止** 的是 **DCash（2024-01）**。英国则是唯一一个仍未承诺上线的项目。需要注意的是：**e-CNY 的试点时间比 Sand Dollar 全国上线早约 6 个月**，但 PBoC 并未宣布“全国正式上线”，因此 e-CNY 仍处于覆盖 26+ 城市的扩展试点阶段。

## 矩阵 B：法偿地位与货币锚

| 项目 | 法偿地位 | 货币锚 | 备注 |
|---|---|---|---|
| Sand Dollar | **是**，CBOB 直接负债 | B$（与 USD 1:1 挂钩） | 继承巴哈马固定汇率制度下的美元挂钩 |
| e-CNY | **是**，PBoC 直接负债 | CNY（有管理浮动） | 首个大型经济体中明确具有法偿地位的 CBDC |
| Bakong | **准法偿**；更像把商业银行余额和 KHR 货币体系代币化的支付系统，不是纯粹央行负债 CBDC | KHR + USD（双货币流通） | 同时支持 KHR 和 USD 钱包，结构上属于混合体 |
| DCash | 试点期间为是 | XCD（与 USD 1:1 挂钩，XCD 2.70 / USD） | 2024-01 停止 |
| eNaira | **是**，CBN 直接负债 | NGN（有管理浮动 / 实务上多区间） | 没有专门 CBDC 立法，依据既有 CBN 货币发行权限上线 |
| JAM-DEX | **是**，在 BoJ Amendment Act 2022 中明确规定 | J$（有管理浮动） | 法律结构最干净，专门为 CBDC 修法 |
| digital pound | 设想中；仍需专门立法 | GBP | 如发行，将成为 BoE 负债 |

## 矩阵 C：发行与分发模式（直接型 vs 中介型）

| 项目 | 发行模式 | 分发层 | 锚定钱包 |
|---|---|---|---|
| Sand Dollar | 双层中介型 | **Authorized Financial Institutions (AFIs)**，彼此互通 | 多个 AFI 钱包（Island Pay、KANOO、MoneyMaxx、银行钱包），**无单一锚定者** |
| e-CNY | 双层中介型 | **10 家指定运营机构**，包括六大国有商业银行和四家支付 / 电信系机构 | 多个钱包并存，但 ICBC、AliPay、WeChat Pay 最强 |
| Bakong | 混合型；NBC 运营 Bakong 清算层，商业银行余额被代币化 | 全部柬埔寨商业银行 + 支付机构 | Bakong app（NBC 运营）+ 银行 app |
| DCash | 通过银行试点 | ECCU 商业银行 | DCash app（ECCB 运营） |
| eNaira | 双层中介型 | DMBs（deposit money banks）+ MMOs（mobile money operators） | eNaira Speed Wallet（CBN 运营）+ DMB 钱包 app + USSD *997# |
| JAM-DEX | 双层中介型 | 授权 PSPs + DTIs | **Lynk**（NCB Financial Group 旗下 TFOB） |
| digital pound | 拟议中的双层中介型 | **PIPs** + **ESIPs** | 仅私人部门钱包；BoE 明确不运营面向消费者的钱包 |

这一栏里真正决定采用率的，是 **分发渠道所有权**。JAM-DEX 的 Lynk 和 e-CNY 的国有银行强制分发，把激励对齐了；Sand Dollar 的多 AFI 互通模型虽然制度上干净，但稀释了单一 AFI 的营销动力；eNaira 的 DMB + MMO 结构则普遍激励不足。DCash 的停止，也和这种激励稀释加上运营脆弱性有关。

## 矩阵 D：KYC 分层结构与单钱包限额

| 项目 | Tier-1（低摩擦） | Tier-2（已核验） | Tier-3（高额度 / 企业） |
|---|---|---|---|
| Sand Dollar | 仅手机号；**B$500 钱包 / B$1,500 月交易额** | 政府证件核验；**B$8,000 钱包 / B$10,000 月交易额** | 企业钱包，需 KYB，按业务类型提高上限 |
| e-CNY | 低级别运营商钱包；最低上限约 CNY 5,000 日 / 50,000 年 | 身份核验后更高上限 | 企业与高净值层级，在运营商审批下接近无上限 |
| Bakong | 手机 + 轻量身份核验；约 $10,000 钱包上限 | 身份证件 + 银行绑定；更高上限 | 企业 / 跨境层（如泰国 PromptPay 连接） |
| DCash | 仅手机号层；政府证件层 | 更高的政府证件层 | n/a（已停止） |
| eNaira | Tier 0：仅手机号，**₦120K / 日，₦300K 上限** | Tier 1 BVN-light，Tier 2 BVN-full | Tier 3 绑定银行账户，更高上限 |
| JAM-DEX | 按 PSP 标准开户流程（与 Lynk 模式一致） | 由 PSP 分层提高额度 | 商户层 |
| digital pound | n/a（拟议中） | n/a | **提议中的个人持有上限 £10,000-£20,000**，尚未定稿 |

所有已上线项目都尝试为未开户人群设计低摩擦入口，但 **没有任何一个项目报告 Tier-1 用户占据主导**。IMF 对 Sand Dollar 和 eNaira 的工作论文都指出，真正使用的人群主要集中在完成身份核验的更高层级。英国 digital pound 则是 7 个项目中唯一把 **个人持有上限** 作为核心设计，而不是多层 KYC 结构的案例。

## 矩阵 E：采用指标：注册数、活跃度、人口占比

| 项目 | 注册钱包 | 活跃钱包（代表性口径） | 成年人口采用率 |
|---|---|---|---|
| Sand Dollar | 约 30-50K 个人 + 商户 | 每月发生交易的钱包只占注册数的个位数百分比 | **<1% 人口** |
| e-CNY | **180M+** 注册 | 单日活跃达数百万级，绝对值大但占比仍小 | **单日活跃 <1%**，月活按人数更高 |
| Bakong | ~10M+ 与 Bakong 连接的账户（NBC） | 因 QR 支付普及，月活明显高于其他项目 | **40-60% 成年人口**，但带有支付系统口径混合效应 |
| DCash | <10K 累计（同业估计） | n/a（已停止） | **<0.5% 人口** |
| eNaira | ~700K-800K 首年，之后估计口径混杂 | **<1.5% 注册用户发生交易**（IMF） | **<0.5% 成年人口** |
| JAM-DEX | ~200K-300K，以 Lynk 为主 | 规模更小；BoJ 未公开精确日活 | **成年人口若干 %**，在可比小经济体中最干净 |
| digital pound | n/a（未上线） | n/a | n/a |

**Bakong 是明显离群值**。它 40-60% 的采用率，反映的是它技术上更接近 **支付系统互联层**，吸收了既有 QR 支付生态，而不是纯粹的央行负债零售型 CBDC。因此它与 Sand Dollar、eNaira、JAM-DEX 的数字不能机械横比。若只看可比的小型纯零售型 CBDC，**JAM-DEX 是最干净的成功案例**；而 **DCash 则是唯一的终局性失败案例**。

## 矩阵 F：技术供应商与底层技术

| 项目 | 供应商 | 底层技术 | 备注 |
|---|---|---|---|
| Sand Dollar | **Bitt Inc.**（巴巴多斯） | 许可型 DLT（Bitt 平台，Hyperledger Fabric 变体） | 与 eNaira、DCash 属于同一供应商簇，结果整体偏弱 |
| e-CNY | **PBoC 自建**（Digital Currency Research Institute） | 自研架构；账户体系 + 硬件钱包能力 | 不依赖外部供应商 |
| Bakong | **Soramitsu（日本）** + NBC | 基于 Hyperledger Iroha 的定制实现 | 与 Bitt / eCurrency Mint 路线不同 |
| DCash | **Bitt Inc.**（巴巴多斯） | 与 Sand Dollar 相同的 Bitt 平台 | 2022 年 1-3 月曾出现两个月故障；2024-01 停止 |
| eNaira | **Bitt Inc.**（巴巴多斯） | 许可型 Hyperledger Fabric 变体 | 与 Sand Dollar / DCash 同属 Bitt 系谱 |
| JAM-DEX | **eCurrency Mint**（美国总部） | DSC2（Digital Symbol Cryptography）分层签名结构 | 与 Bitt 不同，是七极中最干净的小经济体采用案例 |
| digital pound | **待定** | n/a；Design Phase 第 2 阶段继续 | BoE 做过 PoC，但未承诺供应商 |

从表面上看，**Bitt 供应商簇**（Sand Dollar / eNaira / DCash）覆盖了 4 个最弱结果中的 3 个；**eCurrency Mint** 的部署（JAM-DEX）对应的是小经济体里最干净的结果；**自建**（e-CNY）和 **Soramitsu**（Bakong）则是另外两条路径。但真正起决定作用的并不是供应商本身，而是 **分发设计限制了供应商能够达到的结果上限**。

## 矩阵 G：跨境互操作性

| 项目 | 跨境 CBDC 接入 | 双边 CBDC 连接 | 批发桥接参与 |
|---|---|---|---|
| Sand Dollar | 无 | 无 | 无 |
| e-CNY | **有**，是 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 的核心锚点 | 与香港有连接 | mBridge + 潜在 BRICS-Pay 候选 |
| Bakong | **有**，与 Thai PromptPay 已连通，并延伸至老挝、马来西亚、越南互操作 | Thai PromptPay 已上线 | 不在 mBridge 中，但有 ASEAN 区域 QR 网络 |
| DCash | 无 | 无 | n/a（已停止） |
| eNaira | 无 | 无 | 不在 mBridge / Agora / Dunbar 中 |
| JAM-DEX | 无 | 无 | 无 |
| digital pound | 零售层无；BoE 在批发层参与 [[fintech/bis-project-agora-overview|BIS Project Agora]] | 无计划中的零售双边连接 | Agora（批发层） |

截至 2026-05，真正具备跨境 CBDC 接入的零售项目只有两个：**e-CNY** 和 **Bakong**。其余 5 个项目在零售型跨境桥接上基本为空白。这也是小经济体零售型 CBDC 叙事中最大的结构性缺口之一。

## 矩阵 H：发行端 / 分发端激励对齐评分

| 项目 | 发行方激励 | 分发方激励 | 锚定钱包 | 总体评分 |
|---|---|---|---|---|
| Sand Dollar | 高（CBOB 明确推动） | 分散于多个 AFI；对用户友好，但对分发方缺少锁定收益 | 无明显主导者 | **中** |
| e-CNY | 高（PBoC 推动） | 高（国有银行任务 + AliPay / WeChat 监管压力） | AliPay + WeChat + ICBC | **高** |
| Bakong | 高（NBC） | 高（Bakong 吸收既有 QR 支付生态） | Bakong app | **高** |
| DCash | 高（ECCB） | 低（小型 ECCU 银行 + 无锚定者） | 无 | **低**（失败） |
| eNaira | 高（CBN） | 低（DMBs 被蚕食，MMOs 视其为竞争对手） | 无 | **很低** |
| JAM-DEX | 高（BoJ） | 高（NCB 旗下 TFOB 明确推动，Lynk 为锚定钱包） | Lynk | **高** |
| digital pound | 待定 | 待定（PIP / ESIP 设计尚未上线验证） | 仅私人 PIPs | **待定** |

在所有已上线项目中，最能预测采用结果的单一变量，是 **是否存在一个商业激励明确对齐的锚定分发者或锚定钱包**。

## 为什么选这些维度

这 8 个矩阵维度（法律依据、法偿地位、发行模式、KYC 分层、采用率、技术供应商、跨境互操作、激励对齐）之所以被选中，是因为它们直接映射到 BIS / IMF 关于 CBDC 采用的核心约束变量：

1. **法律依据 / 法偿地位**：决定法律可执行性和接受上限。
2. **发行 / 分发结构**：决定谁因分发而获利，是采用速度的核心变量。
3. **KYC 分层**：决定未开户群体的可达性上限。
4. **采用率**：衡量实际结果。
5. **技术供应商**：影响运营风险。
6. **跨境能力**：决定 CBDC 是否超越国内支付用途。
7. **激励对齐**：比任何其他单一指标都更能预测采用结果。

法律依据和法偿地位是 **必要条件但并不充分**；激励对齐在存在时往往 **足以推动采用**，在缺失时也往往 **足以解释失败**。这正是矩阵视角揭示出来、而单法域叙事往往遮蔽的核心经验事实。

## Reading the matrix

- **Bitt 供应商簇模式**：Sand Dollar、eNaira、DCash 都采用 Bitt，也都表现偏弱。真正的决定变量不是供应商，而是分发激励设计，但这一相关性足够显著，未来小经济体项目大概率会分散供应商风险。
- **“最早上线”不等于“结果最好”**：巴哈马最早全国上线（2020-10-20），但 JAM-DEX（2022-07）在可比小经济体里反而有更干净的采用比例。
- **DCash 是典型失败案例**：2024-01 停止，之前 2022 年有过两个月停摆，长期采用率低，现已成为 BIS CBDC 运营风险文献里最常被引用的案例之一。
- **e-CNY 展示了注册与活跃的巨大落差**：180M+ 注册钱包并不意味着高活跃度，这一点在规模较小的 eNaira 上也能看到。
- **digital pound 体现了“无限期设计阶段”模式**：BoE 维持“设计阶段，不等于承诺发行”的表述，在政治上具有回旋空间。
- **Bakong 体现了支付系统型 CBDC 混合路径**：它之所以采用率最高，恰恰因为它吸收了既有 QR 支付网络，而不是与既有支付轨正面竞争。

## Related
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
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture tradeoffs]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
<!-- /wiki-links:managed -->

## Sources

- Central Bank of Nigeria - eNaira Design Paper (2021): https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- Central Bank of The Bahamas - Sand Dollar FAQ: https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- Bank of Jamaica - CBDC / JAM-DEX project: https://boj.org.jm/core-functions/currency/cbdc/
- Eastern Caribbean Central Bank - DCash project page (historic): https://www.eccb-centralbank.org/p/about-the-project
- People's Bank of China - public CBDC research and pilot updates: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- National Bank of Cambodia - Bakong public materials: https://www.nbc.gov.kh/english/economic_research/bakong.php
- Bank of England - digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- IMF Working Paper - Nigeria's eNaira One Year After (Ree, 2023): https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- IMF Working Paper - Bahamas's Sand Dollar: CBDC and Lessons Learned (Kosse, Mattei, Glowka, 2022): https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS Working Paper No. 1116 - "The next-generation monetary system - a blueprint" (2024): https://www.bis.org/publ/work1116.htm
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm

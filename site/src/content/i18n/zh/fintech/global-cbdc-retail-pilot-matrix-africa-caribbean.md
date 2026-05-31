---
source: fintech/global-cbdc-retail-pilot-matrix-africa-caribbean
source_hash: d76da26ef39d6fde
lang: zh
status: machine
fidelity: needs_review
title: "全球零售CBDC试点比较矩阵 — 非洲、加勒比地区、亚洲、英国"
translated_at: 2026-05-31T06:16:15.743Z
---

# 全球零售CBDC试点比较矩阵 — 非洲、加勒比地区、亚洲、英国

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the cross-jurisdiction comparison matrix for the seven most-cited live or in-design retail CBDC programmes. It complements the per-jurisdiction deep dives at [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]], [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]], [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]], [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]], and [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] by enabling side-by-side reading rather than narrative-by-narrative reading. For architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]; for the four-country adoption curve see [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]; for the wholesale-bridge layer see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]].

> [!info] TL;DR
> 七个零售CBDC项目构成 2026-05  公开数据集的锚点：**沙元（Sand Dollar）**（巴哈马，2020-10, 上线，运行时间最长）、**e-CNY**（中国，2020-04, 试点，注册钱包数量最多）、**DCash**（东加勒比央行，2021-03, 试点，**2024-01停止运行**）、**eNaira**（尼日利亚，2021-10, 上线，典型的采用失败案例）、**JAM-DEX**（牙买加，2022-07, 上线，小型经济体中采用情况最为清晰）、**Bakong**（柬埔寨，2020-10, 上线，技术上属于支付系统 + 准CBDC混合体）、**数字英镑**（英国，自 2024,  起处于设计阶段，尚未决定是否推出）。横向审视矩阵，结构性规律清晰呈现：**技术供应商的选择（Bitt vs eCurrency Mint vs 自研）是分发激励设计的下游变量**；**法偿货币地位与明确的立法授权而非市场接受度相关**；**采用率与分发渠道所有权挂钩**（PBoC的国有银行授权、NCB Lynk锚定，vs 巴哈马多AFI稀释，vs 尼日利亚DMB+MMO激励错位）。

## 为何进行七极比较

单一发行方叙事（"零售CBDC在某些地方运行，在另一些地方失败"）虽然正确但帮助有限——它无法分离出**哪些设计选择导致哪些结果**。将所有七个项目在**法规 / 发行模式 / 钱包模式 / KYC分层 / 采用率 / 技术供应商 / 互操作性**维度上并排比较，结构性相关关系便清晰可见。矩阵视角还呈现出**DCash停止运行**并非个案失败，而是某种规律的可见尾端（小型经济体 + 多AFI + Bitt供应商 + 无主锚钱包 + 无注册激励），这一规律同样制约着沙元和eNaira。关于CBDC与私人支付轨道竞争的宏观背景，见 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] 和 [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]。

## 矩阵A · 法规、监管机构、上线状态

| 项目 | 主导机构 | 法律依据 | 上线日期 | 状态（2026-05 ）|
|---|---|---|---|---|
| 🇧🇸 [[fintech/bahamas-sand-dollar-cbdc\|Sand Dollar]] | 巴哈马中央银行（CBOB） | CBOB法（修订） | **2020-10-20**（全球首个全国范围上线） | 上线，运行 5+ 年，增长缓慢 |
| 🇨🇳 e-CNY | PBoC + 数字货币研究所 | PBoC法 2020  修订 | **2020-04**（试点） | 上线，大规模推广阶段 |
| 🇰🇭 Bakong | 柬埔寨国家银行（NBC） | NBC法 + 支付系统框架 | **2020-10** | 上线，支付系统 + 准CBDC混合体 |
| 🇪🇨 DCash | 东加勒比央行（ECCB） | ECCB协议法 + 沙盒 | **2021-03** 试点 | **2024-01停止运行**（2个月断网后） |
| 🇳🇬 [[fintech/nigeria-enaira-retail-cbdc\|eNaira]] | 尼日利亚中央银行（CBN） | CBN法 2007 （现有货币发行权） | **2021-10-25**（非洲首个） | 上线但淡出重心 |
| 🇯🇲 [[fintech/jamaica-jam-dex-cbdc\|JAM-DEX]] | 牙买加银行（BoJ） | BoJ（修订）法 2022  | **2022-07** | 上线，温和增长 |
| 🇬🇧 [[fintech/boe-digital-pound-consultation\|digital pound]] | 英格兰银行 + HMT | 现有BoE法；需要基本立法 | 未上线；设计阶段 | **尚未决定是否推出** |

最早上线的是**巴哈马（2020-10）全国范围**和**e-CNY（2020-04）试点**；最新上线的项目是**JAM-DEX（2022-07）**。唯一**停止运行**的项目是**DCash（2024-01）**——这是一个警示数据点，因为DCash使用的是与沙元和eNaira相同的Bitt供应商。英国是七个项目中唯一尚未承诺上线的。注：**e-CNY试点比沙元全国范围上线早约 6  个月**，但PBoC尚未宣布"全国上线"；e-CNY仍处于覆盖 26+ 个城市的延长试点阶段。

## 矩阵B · 法偿货币地位与货币锚定

| 项目 | 法偿货币地位 | 货币锚定 | 备注 |
|---|---|---|---|
| 沙元 | **是** — CBOB直接负债 | B$（固定汇率 1:1  锚定美元） | 通过巴哈马固定汇率制度继承美元挂钩 |
| e-CNY | **是** — PBoC直接负债 | 人民币（有管理浮动） | 首个具有明确法偿地位的主要经济体CBDC |
| Bakong | **准** — Bakong是将商业银行余额代币化的支付系统 + KHR货币；并非纯粹的中央银行负债CBDC | KHR + USD（双币流通） | Bakong同时支持KHR和USD钱包；结构上为混合体 |
| DCash | 是（试点期间） | XCD（固定汇率 1:1  锚定美元，XCD 2.70 /美元） | 2024-01 停止运行 |
| eNaira | **是** — CBN直接负债 | 奈拉（有管理浮动 / 实际多区间） | 无专项CBDC立法；依据CBN现有货币发行权发行 |
| JAM-DEX | **是** — BoJ修订法 2022  明确规定 | J$（有管理浮动） | 最清晰的法律结构；专项CBDC修订法 |
| 数字英镑 | 拟设；需要基本立法 | 英镑 | 若推出则为BoE负债 |

法偿货币地位排序：**牙买加 > 巴哈马 > 英国提案 > 尼日利亚 > 中国 > 柬埔寨 > DCash**。牙买加BoJ修订法 2022  是最清晰的专项CBDC立法；英国需要尚未提交的基本立法；中国于 2020 修订了PBoC法；尼日利亚依赖既有货币发行权，是唯一一个eNaira上线 4+ 年却**从未**通过CBDC专项立法的国家。

## 矩阵C · 发行与分发模式（直接 vs 间接）

| 项目 | 发行模式 | 分发层 | 主锚钱包 |
|---|---|---|---|
| 沙元 | 二层间接 | **授权金融机构（AFI）** — 跨AFI互操作 | 多家AFI钱包（Island Pay、KANOO、MoneyMaxx、银行钱包）— **无单一主锚** |
| e-CNY | 二层间接 | **10  家指定运营机构** — 六家国有商业银行 + 四家支付/电信运营商（含工行、中行、建行、农行、蚂蚁旗下网商银行、微信旗下微众银行） | 多家，但工行 + 支付宝 + 微信支付占主导 |
| Bakong | 混合型；NBC运营Bakong结算层；商业银行余额代币化 | 全柬商业银行 + 支付机构 | Bakong应用（NBC运营）+ 银行应用 |
| DCash | 通过银行试点 | 东加货币联盟商业银行 | DCash应用（ECCB运营） |
| eNaira | 二层间接 | 存款货币银行（DMB）+ 移动支付运营商（MMO） | eNaira极速钱包（CBN运营）+ DMB钱包应用 + USSD *997# |
| JAM-DEX | 二层间接 | 授权支付服务提供商 + 存款类机构 | **Lynk**（NCB金融集团旗下TFOB子公司）— 单一主导主锚 |
| 数字英镑 | 二层间接（拟议） | **PIP**（支付接口提供商）+ **ESIP**（外部服务接口提供商） | 仅私人部门钱包；BoE明确表示不运营消费者应用 |

**分发渠道所有权**是约束采用率的核心变量。JAM-DEX的Lynk和e-CNY的国有银行授权使分发激励一致；沙元的互操作AFI模式在结构上设计清晰，但分散了任何单一AFI的营销动机；eNaira的DMB+MMO体系激励普遍薄弱（DMB认为eNaira蚕食手续费，MMO认为其与自身电子货币竞争；代理商更偏好佣金收入）；DCash停止运行的原因同样源于激励稀释加上运营脆弱性。英国PIP/ESIP设计尚未经过上线检验。

## 矩阵D · KYC分层结构与单钱包限额

| 项目 | 第1 层（低摩擦） | 第2 层（已验证） | 第3 层（高额 / 机构） |
|---|---|---|---|
| 沙元 | 仅手机号；**B$500 钱包 / B$1,500 月交易** | 政府ID验证；**B$8,000 钱包 / B$10,000 月交易** | 企业钱包 — KYB；按企业类型设更高上限 |
| e-CNY | 手机号运营商层；最低上限约CNY ~5,000 日 / 50,000 年 | ID验证；更高的运营商层上限 | 企业 + 高净值运营商层；在运营商批准范围内实际上无上限 |
| Bakong | 手机 + 轻量化ID注册；~$10,000 钱包上限 | ID + 绑定银行账户；更高上限 | 企业 / 跨境（泰国PromptPay连接）；更高上限 |
| DCash | 仅手机层；政府ID层 | 更高的政府ID层 | 不适用（已停止运行） |
| eNaira | 第0 层 — 仅手机，**₦120K日限额 / ₦300K余额上限** | 第1 层 BVN轻量，第2 层 BVN完整 | 第3 层 关联银行账户，更高上限 |
| JAM-DEX | 标准PSP注册（与Lynk对齐） | 按PSP分层；更高上限 | 商户层 |
| 数字英镑 | 不适用（拟议中）；未公布详细分层结构 | 不适用 | **拟议人均持有上限£10,000-£20,000**（未最终确定） |

**第1 层上限作为普惠金融目标**：每个上线项目都尝试为无银行账户人群设置低摩擦层；**没有任何上线项目报告第1 层占主导**——IMF关于沙元和eNaira的工作论文均指出，第2 层（ID验证）用户主导实际使用。普惠金融设计在结构上是正确的，但未能以目标规模吸引无银行账户人群。英国数字英镑独树一帜，考虑采用**人均持有上限**（£10K-£20K）而非分层KYC结构——这是七个项目中**最大的单项设计差异**。

## 矩阵E · 采用指标——注册钱包 vs 活跃钱包 vs 成年人口占比

| 项目 | 注册钱包 | 活跃钱包（代表性数据） | 成年人口采用率 |
|---|---|---|---|
| 沙元 | 约 30-50K个人 + 商户 | 注册用户中每月交易的比例为个位数百分比 | **<1%人口**（约400K总人口；绝对基数小） |
| e-CNY | **180M+** 注册 | 每日活跃用户为千万级（绝对值大，占比小） | **<1%每日活跃**；月活跃用户数量更高 |
| Bakong | ~10M+ 关联Bakong账户（NBC） | 由于QR支付普及，月活跃率远高于同类 | **40-60%成年人口**（NBC公开声明；支付系统口径模糊） |
| DCash | <10K累计（同行估计） | 不适用（已停止运行） | **<0.5%人口**；最低之列 |
| eNaira | ~700K–900K Y1；后续估计数据口径混用 | **<1.5%注册用户中有交易**（IMF） | **<0.5%成年人口**（IMF Y1；此后无重大进展） |
| JAM-DEX | ~200K–300K Lynk主导 | 规模更小；BoJ未披露精确日活数据 | **成年人口数个百分点**（约2M总成年人口；小型经济体中最清晰的百分比） |
| 数字英镑 | 不适用（未上线） | 不适用 | 不适用 |

**柬埔寨Bakong是异常值**。其 40-60% 采用率数据反映的是Bakong在技术上是一个**支付系统 + 互操作层**，吸纳了现有QR支付市场，而非纯粹的中央银行负债零售CBDC。在支付系统口径下该数字是真实的，但与沙元 / eNaira / JAM-DEX的采用指标不可直接比较。**JAM-DEX是同类纯零售CBDC同行中，按人口百分比衡量的最佳小型经济体成功案例**。**e-CNY注册量最大但每日活跃占比小**，与eNaira的注册与活跃差距规律相似（规模较小）。**DCash停止运行**是唯一彻底失败的终局案例。

## 矩阵F · 技术供应商与底层技术

| 项目 | 供应商 | 底层技术 | 备注 |
|---|---|---|---|
| 沙元 | **Bitt Inc.**（巴巴多斯） | 许可型DLT（Bitt平台；Hyperledger Fabric变体） | 与eNaira + DCash供应商相同；该供应商集群采用结果不佳至较差 |
| e-CNY | **PBoC自研**（数字货币研究所） | 专有架构；账户型 + 硬件钱包能力 | 无外部供应商；由PBoC完全自主研发 |
| Bakong | **Soramitsu（日本）** + NBC | Hyperledger Iroha；定制化实施 | Soramitsu（东京）为架构主导方——有别于Bitt/eCurrency Mint供应商集群 |
| DCash | **Bitt Inc.**（巴巴多斯） | 与沙元相同的Bitt平台 | 2022年1-3月发生长达两个月的断网；2024-01 停止运行 |
| eNaira | **Bitt Inc.**（巴巴多斯） | 许可型Hyperledger Fabric变体 | 与沙元 / DCash相同的Bitt供应商血统 |
| JAM-DEX | **eCurrency Mint**（美国总部） | DSC2 （数字符号密码学）层级签名 | 有别于Bitt的供应商；七极集合中最佳的小型经济体采用案例 |
| 数字英镑 | **待定**（设计阶段供应商遴选进行中） | 不适用；第2 阶段设计进行中 | BoE已开展探索性供应商PoC但尚未确定供应商 |

**Bitt供应商集群**（沙元 / eNaira / DCash）覆盖了表中四个最差采用结果中的三个。**eCurrency Mint部署**（JAM-DEX）是最佳小型经济体结果。**自研**（e-CNY）和**Soramitsu**（Bakong）是两条非Bitt/非eCurrency Mint路径，采用结果均更强——但分发模式差异极大，因此供应商选择并非约束性变量。规律更多体现为**"分发设计制约供应商效果发挥"**，而非"供应商能力决定采用率"。关于供应商与治理的互动更多内容，见 [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]。

## 矩阵G · 跨境互操作性

| 项目 | 跨境CBDC整合 | 双边CBDC桥接 | 批发桥接参与 |
|---|---|---|---|
| 沙元 | 无 | 无 | 无 |
| e-CNY | **是 — [[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]] 的主要锚点** | 香港连接（粤港澳大湾区跨境零售） | mBridge + 未来金砖支付候选 |
| Bakong | **是 — 泰国PromptPay双边连接** + 老挝 + 马来西亚 + 越南互操作 | 泰国PromptPay（上线）；东盟多边计划中 | 不在mBridge内；东盟区域QR网络 |
| DCash | 无 | 无 | 不适用（已停止运行） |
| eNaira | 无 | 无 | 不在mBridge / Agorá / Project Dunbar中 |
| JAM-DEX | 无 | 无 | 无 |
| 数字英镑 | 零售层无；BoE在批发层参与 [[fintech/bis-project-agora-overview\|BIS Project Agorá]] | 无计划 | Agorá批发 |

**跨境CBDC采用集中在两个项目**：e-CNY（通过mBridge + 粤港澳大湾区香港连接）和Bakong（通过PromptPay + 东盟QR）。其余五个零售CBDC项目（沙元、DCash、eNaira、JAM-DEX、数字英镑）截至 2026-05 **均无跨境CBDC整合**。这是小型经济体零售CBDC叙事中**最大的单一缺口**——加勒比和西非项目本最能从跨境汇款通道中受益，却没有CBDC级别的桥接。

## 矩阵H · 发行方 ↔ 分发方激励一致性评分卡

| 项目 | 发行方激励 | 分发方激励 | 主锚钱包 | 综合评分 |
|---|---|---|---|---|
| 沙元 | 高（CBOB承诺） | 在众多AFI间稀释；互操作性对用户有利，对分发方锁定效应薄弱 | 无主导者 | **中** |
| e-CNY | 高（PBoC授权） | 高（国有银行授权；支付宝 / 微信受监管压力） | 支付宝 + 微信 + 工行 | **高** |
| Bakong | 高（NBC） | 高（Bakong吸纳了现有QR支付经济） | Bakong应用 | **高** |
| DCash | 高（ECCB） | 低（小型东加货币联盟银行；无主锚）；运营脆弱性 | 无 | **低**（失败） |
| eNaira | 高（CBN） | 低（DMB被蚕食；MMO竞争性；代理商偏好佣金） | 无 | **极低** |
| JAM-DEX | 高（BoJ） | 高（NCB旗下TFOB承诺；Lynk主锚钱包） | Lynk | **高** |
| 数字英镑 | 待定 | 待定（PIP/ESIP已设计但未经验证） | 仅私人部门PIP | **待定** |

上线项目中采用率最强的单一预测因子是**是否存在单一主锚分发方或钱包具有一致的商业激励**来推广CBDC。牙买加的Lynk = NCB金融集团承诺；中国的国有银行授权 + 支付宝/微信支付吸纳；柬埔寨Bakong作为支付系统的网络效应。三个最弱案例（DCash、eNaira、沙元）均无法通过此项测试，原因各异（运营脆弱性、激励错位、激励稀释）。

## 为何选择这些维度

八个矩阵维度（法规、法偿地位、发行模式、KYC分层、采用率、技术供应商、跨境、激励一致性）的选取直接对应**BIS/IMF CBDC采用文献中的关键变量**：

1. **法规 / 法偿地位** — 决定法律可执行性和接受上限（理论最大市场份额）。
2. **发行 / 分发** — 决定谁从分发中获利（约束性采用速率变量）。
3. **KYC分层** — 决定无银行账户人群的可及性底线（理论普惠上限）。
4. **采用率** — 衡量实现的结果（公众唯一关心的指标）。
5. **技术供应商** — 决定运营风险（DCash失败与供应商平台在负荷下的脆弱性相关）。
6. **跨境** — 决定CBDC是否在国内支付之外发挥作用。
7. **激励一致性** — 比其他任何单一指标更能预测采用速率变量。

法规和法偿地位是**必要但不充分**条件；激励一致性在存在时是**充分**条件（JAM-DEX、e-CNY、Bakong），在缺失时是**决定性**条件（eNaira、DCash、沙元）。这是矩阵视角所揭示的核心实证发现，而逐司法管辖区的叙事方式会遮蔽这一规律。

## 解读矩阵

- **Bitt供应商集群规律**：沙元、eNaira、DCash均使用Bitt，结果均表现不佳。供应商**并非约束性变量**——分发激励设计才是——但供应商集群的相关性足够显著，以至于未来小型经济体项目可能倾向于多元化供应商选择。
- **"率先上线" vs "最佳结果"的背离**：巴哈马是最早的全国范围上线（2020-10-20），但JAM-DEX（2022-07）拥有最清晰的采用率。上线速度并不预测采用质量。
- **DCash作为典型失败案例**：2024-01 停止运行，此前在 2022  经历了长达两个月的断网和持续低采用率。DCash事后复盘现已成为BIS CBDC运营风险文献中引用最多的案例。
- **e-CNY的注册与活跃差距**：180M+ 注册钱包与每日活跃用户千万级之间存在 25-50× 的差距；eNaira也呈现出相同规律（规模较小）。在任何零售CBDC中，注册钱包数量均不等于活跃用户数量。
- **数字英镑的无限期设计阶段模式**：BoE的"设计阶段，并非推出承诺"表述在政治上便于操作，可能使项目在不正式取消的情况下无限期停留在设计阶段，与瑞典央行e-krona的路径如出一辙。
- **Bakong作为支付系统-CBDC混合体**：Bakong在矩阵所有项目中实现最高采用率，正是因为它吸纳了现有QR支付市场，而不是与之竞争——这一选项对纯CBDC而言是不可行的，因为纯CBDC需要与现有支付轨道竞争（英国Faster Payments、巴西Pix、印度UPI）。

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
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
<!-- /wiki-links:managed -->

## Sources

- 尼日利亚中央银行 — eNaira设计论文（2021）：https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- 巴哈马中央银行 — 沙元FAQ：https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- 牙买加银行 — CBDC / JAM-DEX项目：https://boj.org.jm/core-functions/currency/cbdc/
- 东加勒比央行 — DCash项目页面（历史存档）：https://www.eccb-centralbank.org/p/about-the-project
- 中国人民银行 — 公开CBDC研究及试点更新：https://www.pbc.gov.cn/en/3688110/3688172/index.html
- 柬埔寨国家银行 — Bakong公开材料：https://www.nbc.gov.kh/english/economic_research/bakong.php
- 英格兰银行 — 数字英镑主页：https://www.bankofengland.co.uk/the-digital-pound
- IMF工作论文 — 尼日利亚eNaira上线一年后（Ree, 2023）：https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- IMF工作论文 — 巴哈马沙元：CBDC与经验教训（Kosse, Mattei, Glowka, 2022）：https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS工作论文第 1116  号——"下一代货币体系——蓝图"（2024）：https://www.bis.org/publ/work1116.htm
- BIS创新中心CBDC专题主页：https://www.bis.org/about/bisih/topics/cbdc.htm

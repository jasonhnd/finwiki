---
source: fintech/bahamas-sand-dollar-cbdc
source_hash: 62f2424b1184bd25
lang: zh
status: machine
fidelity: ok
title: "巴哈马沙元——运行时间最长的在线零售 CBDC、AFI 分发模式、小经济体经验"
translated_at: 2026-05-31T06:16:15.681Z
---

# 巴哈马沙元——运行时间最长的在线零售 CBDC、AFI 分发模式、小经济体经验

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction case study on the **Sand Dollar**, the **first nation-wide live retail CBDC** issued by any central bank globally (Bahamas, 2020-10-20). Read it against [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] (live 2021-10, same Bitt-vendor technology lineage), [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]] (live 2022, third Caribbean-Atlantic peer), and [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for cross-jurisdiction positioning. For architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]. For the broader emerging-market behavioral baseline see [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]].

> [!info] TL;DR
> 巴哈马中央银行于 **2020-10-20** 推出**沙元**，使其成为全球**首个全国性在线零售 CBDC**——领先于其他任何在线零售 CBDC 六个月，比 eNaira 早一年，比 JAM-DEX 早近两年。其设计采用**双层中介零售 CBDC** 架构，由**授权金融机构（AFI）**提供面向消费者的钱包，并设有**分级 KYC**（Tier 1 仅凭手机，余额上限 B$500/每月 B$1,500；Tier 2  经身份核验，余额上限 B$8,000/每月 B$10,000），并作为中央银行的直接负债具有**法定货币地位**。在绝对数量上，采用率**较低**（活跃用户仅占人口的个位数百分比），但该项目已持续在线运行**超过五年**——远超任何其他在线零售 CBDC——是小经济体 CBDC 设计领域的核心政策实验案例。全球广泛引用的关键设计经验包括：**以促进金融包容为目标**（约 700 个分散岛屿的地理特征与金融服务缺口）、**自启动即具法定货币同等地位**、**可互操作的 AFI 钱包模型**，以及**有意不支付利息**以维护商业银行存款基础的设计选择。

## 项目架构

```
                  巴哈马中央银行
                       │
                       ▼
                  沙元（B$ 零售 CBDC）
                       │
     ┌─────────────────┴─────────────────┐
     ▼                                   ▼
 发行方（CBOB；中央银行负债）       技术合作伙伴
                                   （Bitt Inc.，巴巴多斯；
                                    许可 DLT）
     │                                   │
     ▼                                   ▼
 双层中介分发                       AFI 钱包应用
 （CBOB → 授权金融机构（AFI）        （跨 AFI 互操作；
  → 消费者/商户钱包）               消费者可选择提供方）
     │
     ▼
 分级 KYC 结构
 - Tier 1 （手机 + 低摩擦）：B$500  钱包 / 每月 B$1,500  交易
 - Tier 2 （政府身份核验）：  B$8,000  钱包 / 每月 B$10,000  交易
 - 企业钱包：另设上限结构
```

## 矩阵 A · 法规、监管机构、阶段状态

| 项目 | 详情 |
|---|---|
| 主导机构 | **巴哈马中央银行（CBOB）** |
| 法律依据 | 《巴哈马中央银行法》2020 （修订条款明确授权发行数字货币）；依该法颁布的《沙元条例》 |
| 试点阶段 | **埃克苏马试点**于 2019-12 启动；**阿巴科**于 2020  年中加入 |
| **全国在线推出** | **2020-10-20** — 全球首个全国性在线零售 CBDC |
| 技术合作伙伴 | **Bitt Inc.**（总部位于巴巴多斯；与尼日利亚 eNaira 同一供应商） |
| 底层技术 | 许可 DLT（Bitt 平台） |
| 批发 CBDC | 无——沙元仅面向零售/中端市场 |
| 跨境 CBDC | 截至 2026-05 无；未参与 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 或 [[fintech/bis-project-agora-overview|BIS Project Agorá]] |
| 法定货币地位 | 是——沙元是 CBOB 直接负债，以巴哈马元（B$）计价，汇率 1:1 ，巴哈马元本身以 1:1  与美元挂钩 |

自启动即具法定货币地位的定位，使沙元有别于欧盟数字欧元计划（其法定货币地位在拟议条例中尚未生效）和 JAM-DEX（后者同样以法定货币地位入场，但晚了两年）。

## 矩阵 B · 设计选择——以金融包容为先、低摩擦入门

| 设计选择 | 详情 | 原因 |
|---|---|---|
| **经 AFI 双层中介** | CBOB 发行；消费者通过授权金融机构（商业银行 + MMO + 支付服务提供商）进行交易 | 保留商业银行角色；分散入门负荷 |
| **互操作钱包** | 消费者的沙元可在任意 AFI 钱包间使用 | 避免封闭生态效应；用户可更换 AFI 而不损失余额 |
| **分级 KYC** | Tier 1  仅需手机（B$500  钱包 / 每月 B$1,500  交易）；Tier 2  经身份核验（B$8,000  钱包 / 每月 B$10,000  交易）；企业钱包另行处理 | 专为外围岛屿无银行账户人群设计 |
| **零利息** | 沙元余额不计息 | 与欧盟数字欧元相同的反脱媒逻辑（参见 [[fintech/e-euro-retail-rollout|digital euro retail rollout]]） |
| **免交易费** | CBOB 不收取逐笔费用；AFI 可按服务层级收费 | 定价向包容性倾斜 |
| **基于账户的账本** | 余额通过 AFI 入门绑定至已识别钱包 | 符合反洗钱/反恐融资要求；非不记名代币 |
| **具备离线能力的设计** | 针对外围岛屿连接缺口提供有限的离线交易能力 | 与约 700 个岛屿的地理条件相适应 |
| **继承 B$ 1:1  美元挂钩** | 沙元即 B$——通过巴哈马固定汇率制度以 1:1  与美元挂钩 | 继承挂钩关系；并非独立货币 |
| **中央银行直接负债** | 沙元是 CBOB 负债，而非商业银行存款 | 有别于日本 DCJPY（代币化存款，非 CBDC）——参见 [[fintech/jp-stablecoin-dcjpy|DCJPY]] |

这是早期 CBDC 中异常成熟的设计——大多数后来的主流 CBDC 文献（BIS、IMF、ECB）实际上是将沙元在生产中验证的原则加以编纂。

## 矩阵 C · 采用指标（最新公开数据）

| 指标 | 最新公开数字 |
|---|---|
| 在线状态 | **自 2020-10-20 起在线**（超过五年；运行时间最长的在线零售 CBDC） |
| 注册钱包 | 个人 + 商户钱包约 30-50K（CBOB 按季度公布数据；小经济体基数绝对较小） |
| **活跃钱包** | 特定月份内发生交易的钱包占总数的个位数百分比 |
| **相对人口的渗透率** | 成年巴哈马人口（~300K 总成年人口；绝对基数小）的个位数百分比 |
| 累计交易额 | 绝对量适中；低于广义货币等价值的 1% |
| 覆盖范围 | 全国（约 700 个岛屿组成的群岛）；包容重点在家庭岛 |
| 商户接受度 | 旅游相关及食品零售持续增长；全国推广尚未饱和 |
| 跨境 CBDC | 无 |

IMF 工作论文《巴哈马沙元：CBDC 与经验教训》（Kosse、Mattei 等，2022）是引用最多的公开诊断性文献。该文将沙元定性为**在推出排序和运营稳定性方面取得政策成功**，但在活跃钱包渗透率衡量上属于**慢采用案例**。巴哈马小经济体基线（~400K 总人口，分散于约 700  个岛屿）意味着即使渗透率较高，绝对采用数字也必然偏小；政策层面的关键指标是**渗透率百分比**，而非绝对人头数。

## 矩阵 D · AFI 分发模式——典范双层零售 CBDC

```
   巴哈马中央银行（沙元发行方）
                  │
   ┌──────────────┼──────────────────────────────────┐
   ▼              ▼                                   ▼
  银行 AFI       汇款 AFI                   支付服务 AFI
  (CIBC, FCIB,  (KANOO, MoneyMaxx 等)      (Island Pay 等)
   RBC 等)
   │              │                                   │
   ▼              ▼                                   ▼
  消费者 + 商户钱包应用（跨所有 AFI 互操作）
   │
   ▼
  终端用户——四岛以上群岛上的消费者 + 商户
```

**AFI（授权金融机构）**是核心制度性构建。AFI 是 CBOB 授权的实体——商业银行、汇款机构、支付服务提供商——可为终端用户发行/持有/交易沙元钱包。关键在于**钱包跨 AFI 互操作**：消费者通过 Island Pay 持有的沙元余额，可收到来自使用不同 AFI 钱包的对手方转账，且消费者更换 AFI 不损失余额。

互操作性要求避免了部分同类项目中出现的封闭生态模式（如 e-CNY 运营商层面的互操作更为复杂）。其结构类似于欧盟数字欧元的设计——受监管的支付服务提供商提供钱包，而底层余额由欧洲央行发行并可转移。

| AFI 类别 | 功能 | 示例 |
|---|---|---|
| **银行 AFI** | 为银行客户发行钱包 | 巴哈马商业银行（CIBC、FCIB、RBC、BoB 等） |
| **汇款 AFI** | 为无银行账户/银行服务不足人群发行钱包 | KANOO、MoneyMaxx |
| **支付服务 AFI** | 通过金融科技应用发行钱包 | Island Pay |

AFI 模式现已被广泛引用为**小经济体 CBDC 分发的典范模式**。该模式使 CBOB 无需直接运营面向消费者的应用，保留了受监管中介机构的作用，并通过触达无银行账户的外围岛屿人群的 MMO 和支付服务 AFI 支持金融包容目标。

## 矩阵 E · 分级 KYC——包容性与反洗钱之间的平衡

| 级别 | KYC 要求 | 钱包上限 | 每月交易上限 | 目标用户 |
|---|---|---|---|---|
| **Tier 1 （个人）** | 手机号码 + 低摩擦入门 | B$500  | B$1,500  | 无银行账户/银行服务不足者；外围岛屿；游客 |
| **Tier 2 （个人）** | 政府颁发的身份证核验（NIB 号码/护照） | B$8,000  | B$10,000  | 主流消费者 |
| **企业钱包** | KYB（了解您的企业）核验 | 较高上限；按企业类型分级 | 较高上限 | 商户、小企业 |

该分级设计在结构上类似于 e-CNY 运营商级别模式和 eNaira Tier-0/1/2/3  模式。沙元 Tier-1  上限实质上低于 eNaira Tier-0  上限（B$500  对比 ₦300K），反映了不同的财政基础经济学——但设计理念相通（为无银行账户人群设置低摩擦级别，为经核验用户设置更高级别）。

IMF 工作论文指出，**大多数沙元用户属于 Tier-2**（经身份核验），而非 Tier-1 ——这意味着面向包容性的设计未能成功大规模触及无银行账户人群。eNaira（Tier-2  占主导）和 JAM-DEX 也有同样的观察。

## 矩阵 F · 与小经济体/新兴市场 CBDC 同类项目的比较

| 项目 | 巴哈马沙元 | [[fintech/nigeria-enaira-retail-cbdc\|Nigeria eNaira]] | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | 东加勒比 DCash |
|---|---|---|---|---|
| 在线推出 | 2020-10-20（全球首个） | 2021-10-25 | 2022-07 （正式推出） | 2021-03 （试点）；2024  停止 |
| 发行方 | CBOB | CBN | 牙买加银行 | 东加勒比中央银行 |
| 分发方式 | AFI（互操作） | DMB + MMO | 授权钱包提供商 | 试点通过银行 |
| 技术合作伙伴 | Bitt Inc. | Bitt Inc. | eCurrency Mint | Bitt Inc. |
| Tier-1  KYC 上限 | B$500  / 每月 B$1,500  | 每日 ₦120K / 最高 ₦300K | J$100K / J$50K（按级别有所不同） | 不适用（已停止） |
| 活跃渗透率 | 人口个位数百分比 | <0.5% 成年人口 | 人口少数百分比（Lynk 驱动） | 不适用（已停止） |
| 状态（2026-05） | 在线（5+ 年） | 在线但受到弱化 | 在线 | 2024  停止 |

沙元和 JAM-DEX 现为**两个稳定在线的小经济体零售 CBDC**；eNaira 在线但受到弱化；DCash 已停止。加勒比/非洲-大西洋小经济体 CBDC 的整体规律清晰：**推出可以实现，持续采用是结构性挑战**。

## 起源与演进

```
2018-2019     CBOB 开展零售 CBDC 内部研究；遴选 Bitt Inc. 为技术合作伙伴
2019-12       埃克苏马试点启动（首个家庭岛试点）
2020-06       阿巴科加入试点
2020-10-20    全国性沙元推出——全球首个全国性零售 CBDC
2021           AFI 名单扩充；商户接受度试点
2021-03       东加勒比 DCash 推出（同类参考项目）
2021-10       尼日利亚 eNaira 上线（继沙元之后第二个大型新兴市场零售 CBDC）
2022-06       IMF 工作论文《巴哈马沙元：CBDC 与经验教训》
2022-07       牙买加 JAM-DEX 上线
2023-2024     沙元持续运营；钱包数量和交易增长温和
2024           东加勒比 DCash 在长期中断和有限采用后停止
2024-2025     沙元超过持续运营四年里程碑——运行时间最长的在线零售 CBDC
2025-2026     持续在线；AFI/商户推广持续推进；无重大设计变更
```

**规律**：沙元的长寿是最常被引用的数据点。它是唯一一个跨越完整 BIS/IMF/学术研究周期的持续运营案例，几乎每个后续 CBDC 设计都借鉴了其模式的部分内容（双层中介、分级 KYC、互操作钱包、不计息、AFI 式分发）。

## 与巴哈马私有支付轨道替代方案的比较

巴哈马已拥有**运转正常的私有数字支付格局**，这是沙元采用率渐进而非爆发式增长的原因之一：

- **商业银行网银和卡片**（CIBC、FCIB、RBC、BoB 等）。
- **Island Pay**（在沙元体系中是支付服务 AFI，同时也是独立钱包运营商）。
- **MoneyMaxx、KANOO** — 汇款服务。
- **旅游经济美元接受度** — 鉴于美元挂钩，美元在旅游业中与 B$ 并行流通。

巴哈马零售 CBDC 的竞争对象是**主要岛群（拿骚/天堂岛/自由港）中已大量使用银行服务的多数人口**，他们从现有支付轨道切换至沙元的边际收益极小。结构性包容目标是**外围家庭岛**和**无银行账户/银行服务不足人群**——在这些地区，制约因素是基础设施（智能手机普及率、网络连接、代理商网络密度），而非钱包设计。

这解释了为什么沙元的设计优化了离线能力、低摩擦 Tier-1  入门和 AFI 互操作性。设计在结构上是正确的；制约因素是**实体包容基础设施**，而非数字货币设计本身。

## 相关

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## 来源

- 巴哈马中央银行——机构主页：https://www.centralbankbahamas.com/
- CBOB——沙元常见问题及项目页面：https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- 沙元官方网站：https://www.sanddollar.bs/
- IMF 工作论文——《巴哈马沙元：CBDC 与经验教训》（Kosse、Mattei、Glowka，2022）：https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS 创新中心 CBDC 主题页：https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS 工作论文 No. 1116 ——《下一代货币体系——蓝图》（2024）
- 《巴哈马中央银行法》2020 ——公域立法文本
- CBOB《沙元条例》——依该法颁布的公开文件

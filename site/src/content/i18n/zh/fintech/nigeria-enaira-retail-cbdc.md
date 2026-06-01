---
source: fintech/nigeria-enaira-retail-cbdc
source_hash: 3f42a08ed208c712
lang: zh
status: machine
fidelity: ok
title: "尼日利亚 eNaira：零售 CBDC 中采用率最低案例、CBN 分发机制与现金替代政策冲突"
translated_at: 2026-05-31T11:13:44.861Z
---

# 尼日利亚 eNaira：零售 CBDC 中采用率最低案例、CBN 分发机制与现金替代政策冲突

## Wiki route

本文位于 [[fintech/INDEX|fintech index]]，是针对 **eNaira** 的单一司法辖区案例研究。eNaira 是主要新兴市场央行发行的第二个已上线零售 CBDC（在巴哈马 Sand Dollar 之后），也是全球已上线 CBDC 计划中最常被研究的**采用失败**案例。建议结合 [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]（运行时间最长的已上线零售 CBDC，同样采用率偏低，但原因更多来自小型经济体特征）、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]（加勒比/非洲-大西洋区域第三个零售 CBDC，分发难题具有可比性）以及 [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] 一并阅读，以理解尼日利亚相对于中国、印度、欧盟和日本的位置。架构背景见 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] 与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]。更广义的新兴市场美元化背景可参见 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]。

> [!info] TL;DR
> CBN 于 **2021-10-25** 推出 **eNaira**，使尼日利亚成为**首个非洲国家**，也是最早发行已上线零售 CBDC 的大型新兴市场经济体之一。上线四年多后，该项目已成为全球 CBDC 文献中的**典型采用失败案例**：独立 IMF 分析显示，在首年中，**活跃钱包渗透率低于成年人口的 0.5%**，绝大多数钱包在初次下载后即处于休眠状态。2022-2023 年的 **Naira 改版 / 现金提取限制** 政策并未推动 eNaira 扩张，反而与其上线发生冲突。逃离排队取现的人群转向了 **代理银行、USSD 和加密货币 / USDT**，而不是 eNaira 应用。由此得到的结构性教训如今被广泛引用：**发行零售 CBDC 本身不会自动创造需求**；**分发体系必须先于发行建立**；以及**在公众并不愿意使用的 CBDC 之上叠加去现金化政策，可能会加剧而非解决信任问题**。

## Programme architecture

```
                       CBN eNaira Programme
                              |
       +----------------------+----------------------+
       v                                             v
   Issuer (CBN - central-bank liability)       Technology partner
                                                (Bitt Inc., Barbados;
                                                Hyperledger Fabric based)
       |                                             |
       v                                             v
   Two-tier distribution                       Wallet apps
   (CBN -> DMBs (deposit money banks)          - eNaira Speed Wallet
    + MMOs -> tiered consumer wallets)         - Speed Merchant
                                                - USSD *997#
       |
       v
   Tiered KYC structure
   (Tier 0 - phone-only; Tier 1 - BVN-light;
    Tier 2 - BVN-full; Tier 3 - bank-account-linked)
```

## Matrix A · 法律依据、监管者与阶段状态

| 项目 | 细节 |
|---|---|
| 主管机构 | **尼日利亚中央银行（CBN）** |
| 法律基础 | CBN Act 2007（s.2、s.17-18 的货币发行权）；eNaira 依既有法偿货币权限推出，而非基于单独的 CBDC 专门立法 |
| 上线前设计 | “eNaira Design Paper”（CBN，2021）；双层中介式、分层 KYC、账户式账本 |
| 正式上线 | **2021-10-25**（由总统 Buhari 在 Aso Rock 宣布） |
| 技术合作方 | **Bitt Inc.**（总部位于巴巴多斯的 DLT 供应商；与 Sand Dollar / JAM-DEX 采用同类供应商路径） |
| 底层技术 | 许可型 **Hyperledger Fabric** 变体 |
| 更新 | 2022-2023 年间进行过多轮应用重启 / 升级；2022-08 推出 USSD *997# 渠道以支持功能机接入 |
| 批发型 CBDC | 无，eNaira 仅为零售 / 中端市场用途 |
| 跨境 CBDC | 截至 2026-05 为无；未参与 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 或 [[fintech/bis-project-agora-overview|BIS Project Agorá]] |

CBN 是在既有货币发行权限下推进 eNaira，而不是先寻求 CBDC 专门立法。这一点与欧盟数字欧元形成结构性差异，后者需要在欧盟共同决策框架下制定新规，也部分解释了尼日利亚的上线速度。

## Matrix B · 设计选择：分层 KYC、免费分发、低摩擦但低效用

| 设计选择 | 细节 | 含义 |
|---|---|---|
| **双层中介式** | CBN -> 存款货币银行（DMBs）+ 移动货币运营商（MMOs）-> 消费者钱包 | 与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|three paradigms]] 中的双层模式一致 |
| **分层 KYC** | Tier 0（仅手机号、低限额）-> Tier 1（BVN-light）-> Tier 2（BVN-full）-> Tier 3（绑定银行账户） | 设计目标是吸纳未充分银行化人群；实践中高层级注册占主导 |
| **账户式账本** | 不是不记名代币；余额绑定至实名账户 | 与 AML / CFT 兼容，但削弱了“替代现金”的叙事 |
| **零利息** | eNaira 余额不计收益 | 与欧盟数字欧元相同，体现防止存款搬家的逻辑，见 [[fintech/e-euro-retail-rollout|digital euro retail rollout]] |
| **零交易费** | 由 CBN 承担交易成本 | 旨在与银行 App 与 USSD 费用竞争 |
| **Speed Wallet（消费者）+ Speed Merchant（商户）** | 双应用模式 | 增加了商户端的接入步骤 |
| **USSD *997# 兜底渠道** | 2022-08 增设供功能机用户使用 | 承认智能手机渗透率上限，类似 NIBSS 的 USSD 银行业务路径 |
| **按层级设持有限额** | Tier 0 = ₦120,000 / 日，₦300,000 上限；Tier 1 = ₦200,000 / ₦500,000；Tier 2/3 更高 | 与 e-CNY 运营方分层限额模式可比 |

其设计理念对开户极其友好：分层 KYC、零费用、免费分发、支持功能机接入，但采用仍然停滞。经验事实是：**仅靠减少技术摩擦，并不能解决需求侧问题**。

## Matrix C · 采用指标（最近公开数据）

| 指标 | 最近公开值 |
|---|---|
| 钱包下载量（累计） | ~700K–800K（首年，多份 CBN 口径）；2023-2024 年出现的数百万估计往往混入商户端和重复下载 |
| **活跃钱包** | IMF 工作论文（2023）：某一月份发生交易的账户不足累计下载量的 1.5% |
| **相对成年人口渗透率** | **低于 0.5%**（IMF 对首年的估计；其后独立报道未显示明显跃升） |
| 累计交易额（首年） | 独立估计约 ₦8B（远低于流通现金的 1%） |
| 城市 / 覆盖范围 | 全国在线可用，但实际集中于 Lagos / Abuja |
| 商户受理 | 有限，未出现类似 e-CNY 或 Pix 的大型零售商铺开 |
| 跨境 CBDC | 无 |

IMF 工作论文 “Nigeria's eNaira, One Year After”（Ree，2023）是最常被引用的公开诊断，也是“**所有已上线 CBDC 中采用率最低**”这一表述的重要来源。该论文区分了累计下载量与月活用户，后者才是真正有约束力的采用指标，并认为即便按该口径，eNaira 的渗透率也明显低于已经偏低的巴哈马 Sand Dollar。

## Matrix D · 2022-2023 年 Naira 改版冲突

eNaira 故事中最关键的事件**并不是上线本身**，而是 **CBN 于 2022 年推动的 Naira 改版 + 现金提取限制政策**。这一政策与 eNaira 推广相撞，带来的不是助推，而是伤害。

**时间序列：**

```
2022-10    CBN 宣布改版 ₦200、₦500、₦1,000 纸币
2022-12    宣布现金提取限制（个人 ₦20K/日、₦100K/周）
2023-01    旧钞截止期设定；ATM 与银行网点排长队
2023-02    现金短缺恶化；全国抗议；最高法院介入
2023-03    最高法院将旧钞期限延至 2023-12-31
2023-05    现金逐步回流；“无现金政策”表述趋于弱化
2023-2024  CBN 更换新领导层；eNaira 营销明显减少
```

**现金危机期间，公众实际选择了什么：**

1. **代理银行**（Opay、PalmPay、Moniepoint、Kuda）快速扩张。Opay 的用户数、交易量和商户终端数量均呈数量级增长。
2. **既有 DMB 体系下的 USSD 银行业务**（NIBSS）。
3. **加密货币 / USDT**。尼日利亚原本就拥有全球最高之一的加密采用率；现金危机进一步强化了这一趋势。Binance P2P 的 NGN 交易量上升明显。
4. **eNaira** 只吸收了极少部分从现金中流出的需求，尽管 CBN 积极将改版政策包装为“无现金经济”的支撑措施。

这里的结构性失败在于：**CBN 把反现金政策与 eNaira 上线视为同一个项目，但公众把它们视为两个彼此敌对、却同时出现的干预措施**。公众将被迫去现金化解读为带有没收色彩，而将 eNaira 视为带监控属性的替代品，于是二者被一并拒绝。最终承接需求的是代理银行和加密货币。

## Matrix E · 分发模式与未充分银行化人群

| 层级 | 分发角色 | 优势 | 弱点 |
|---|---|---|---|
| **CBN** | 发行人与方案运营者 | 直接法定权力 | 不直接面向零售公众 |
| **DMBs** | 为银行客户开通钱包 | 既有客户基础 | DMB 认为 eNaira 会蚕食手续费收入，推广积极性有限 |
| **MMOs** | 为未充分银行化群体开通钱包 | 触达未银行化客群 | 激励错位，eNaira 与其自有电子货币竞争 |
| **代理银行网络** | 现金存取节点 | 拥有最大线下覆盖 | 代理人更愿意从代理银行交易佣金中获利，而非推广零费率 eNaira |
| **商户** | 受理端 | 是零售闭环的关键 | 缺乏大型零售商承诺；非正式商户更偏好现金或 POS |

**分发激励问题是最常被低估的失败模式。** 在分发链条中的每一个参与者，DMB、MMO、代理人、商户，都比推广 eNaira 更有动力推广**自己的产品**。CBN 既没有像中国那样通过国有银行指令完成激励对齐，也没有像印度那样通过 UPI 搭便车式分发来解决这一问题。因此，eNaira 被放在了一套结构上就没有强烈动力推动它的分发栈之上。

## Matrix F · 与同类零售 CBDC 的比较

| 项目 | Nigeria eNaira | [[fintech/bahamas-sand-dollar-cbdc\|Bahamas Sand Dollar]] | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | China e-CNY |
|---|---|---|---|---|
| 正式上线 | 2021-10-25 | 2020-10-20 | 2022-07（全面） | 2020-04（试点） |
| 发行方 | CBN | Central Bank of The Bahamas | Bank of Jamaica | PBoC |
| 分发模式 | DMBs + MMOs（双层） | 授权金融机构（AFIs） | 授权钱包提供方（Lynk 等） | 10 家指定运营机构（六大国有银行 + 四大支付巨头） |
| 活跃钱包 / 人口 | <0.5% | <0.5%（小人口基线） | ~5%（Lynk 钱包口径，指标更宽） | 1.8 亿+注册中，日活为数百万级 |
| 跨境 CBDC | 无 | 无 | 无 | mBridge live |
| 底层技术 | Hyperledger Fabric（Bitt） | DLT（Bitt） | DLT（eCurrency Mint） | PBoC 自有架构 |
| 现金替代政策冲突 | **有：2022-2023 年 Naira 改版** | 无 | 无 | 无（大规模无现金化早已通过 AliPay / WeChat Pay 实现） |
| 采用叙事 | “失败案例” | “推进缓慢、人口小” | “有希望但体量小” | “国家主导的大规模推广” |

eNaira 与 Sand Dollar 是两个运行时间最长的已上线零售 CBDC，二者人口采用率都远低于 1%。与中国相比，真正决定结果的结构变量是：**谁掌握分发渠道**，而不是技术本身或上线速度。

## Origin and evolution

```
2017-2019    CBN 开始 CBDC 政策研究，并观察 Bahamas Sand Dollar 进展
2021-08      CBN 与 Bitt Inc. 签约，开始技术集成
2021-09      原定于独立日（10 月 1 日）上线，后延期
2021-10-25   总统 Buhari 在 Aso Rock 宣布 eNaira 上线；首个非洲零售 CBDC
2022-02      钱包下载突破 700K；CBN 发布正面阶段性指标
2022-08      为功能机用户推出 USSD *997# 渠道
2022-10      CBN 宣布 Naira 改版（₦200/₦500/₦1,000）
2022-12      现金提取限制政策公布
2023-01      现金短缺引发全国排队、抗议与最高法院诉讼
2023-02-23   IMF 工作论文 “Nigeria's eNaira, One Year After” 正式诊断其低采用率
2023-03      最高法院延长期限；现金逐步回流
2023-05      政府过渡；新任 CBN 领导层（Yemi Cardoso）确认就位
2023-2024    eNaira 营销大体弱化；CBN 关注点转向外汇改革
2024-2025    无重大项目更新；系统仍在线，但不再被突出强调
2025-2026    持续在线；未见明显复苏；采用表现平缓至边际化
```

**模式**：从研究到正式零售上线速度很快，但上线后的轨迹被**分发激励失败**以及 **2022-2023 年现金政策冲突**共同钉住。

## 与私人支付轨道的比较

eNaira 原本想成为尼日利亚的数字货币轨道，但同一时期真正增长的数字货币 / 支付轨道是：

- **代理银行网络**：Opay、PalmPay、Moniepoint、Kuda、Carbon、FairMoney。其活跃用户与商户终端规模都以数量级领先于 eNaira。
- **NIBSS Instant Payment（NIP）**：银行间即时转账，仍是正式银行对银行流的主干。
- **通过 DMB 的 USSD 银行业务**：高频传统轨道，尤其适用于未充分银行化 / 银行服务不足的人群。
- **加密货币 P2P（USDT、USDC）**：尼日利亚位于全球加密采用指数第一梯队（Chainalysis）。Binance NGN P2P 以及其后其他 P2P 场所都承接了需求。参见 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] 与 [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]。
- **MMO 钱包**：MTN MoMo、Airtel Money、9mobile。

尼日利亚的无现金转型确实在发生，只是不是通过 eNaira 完成。这是理解 eNaira 被视为 CBDC 采用失败案例的核心结构事实和经验依据。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构四核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]

## Sources

- Central Bank of Nigeria - institutional landing and publications: https://www.cbn.gov.ng/
- CBN - "eNaira Design Paper" (2021): https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- eNaira official site: https://enaira.gov.ng/
- IMF Working Paper - "Nigeria's eNaira, One Year After" (Jongsoon Ree, 2023): https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 - "The next-generation monetary system - a blueprint" (2024)
- Public CBN press releases on Naira redesign and cash-withdrawal-limit policy (2022-10 through 2023-03)
- Chainalysis Global Crypto Adoption Index public reports (multiple years, Nigeria top-tier)

---
source: fintech/nigeria-enaira-retail-cbdc
source_hash: 3f42a08ed208c712
lang: zh
status: machine
fidelity: needs_review
title: "尼日利亚 eNaira —采用率最低的零售 CBDC、CBN 分配、现金替代政策冲突"
translated_at: 2026-05-31T11:13:44.861Z
---

# 尼日利亚 eNaira —采用率最低的零售 CBDC、CBN 分配、现金替代政策冲突

## 维基路线

该条目位于 [[fintech/INDEX|fintech index]] 下，作为 **eNaira** 的每个司法管辖区案例研究，eNaira** 是主要新兴市场央行发行的第二个实时零售 CBDC（继巴哈马沙币之后），也是全球实时 CBDC 项目中研究最多的**采用失败**案例。对照 [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]（运行时间最长的实时零售 CBDC，采用率也较低，但由于经济规模较小）、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]（第三个加勒比/非洲-大西洋零售 CBDC，具有类似的分销挑战）和 [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] 来了解尼日利亚相对于中国、印度、欧盟和日本的位置。有关架构上下文，请参阅 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] 和 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]。有关更广泛的新兴市场美元化背景，请参阅 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]。

> [!info] 长话短说
> CBN 在 2021-10-25** 上推出了 **eNaira，使尼日利亚成为**第一个非洲国家**，也是首批发行实时零售 CBDC 的大型新兴市场经济体之一。四年多来，该计划是全球 CBDC 文献中的**典型采用失败案例**：独立的 IMF 分析记录了成年人口中**活跃钱包在第一年的渗透率，其中绝大多数钱包在初次下载后处于休眠状态。 0.5%-2022**Naira 重新设计/现金取款限制**政策与 eNaira 的推出发生了冲突，而不是加速了它的推出——逃离现金队列的尼日利亚人转向**代理银行、USSD 和加密货币/USDT**，而不是 eNaira 应用程序。这些结构性教训现在被广泛引用：**发行零售 CBDC 本身并不会创造需求**； **分配必须先于发行**，而不是相反； **叠加在不需要的 CBDC 之上的反现金政策可能会加剧而不是解决公共信任问题**。

## 程序架构

```
                       CBN eNaira 计划
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   发行人（CBN——中央银行责任） 技术合作伙伴
                                                （Bitt Inc.，巴巴多斯；
                                                基于 Hyperledger Fabric）
       │                                              │
       ▼                                              ▼
   两层分发钱包应用程序
   （CBN → DMB（存款银行）- eNaira Speed Wallet
    + MMO → 分层消费者钱包） - Speed Merchant
                                                - USSD *997#
       │
       ▼
   分层 KYC 结构
   （0  级 — 仅限电话；1  — BVN-轻型；
    2  级 — BVN-full； 3  级 — 银行账户关联）
```

## 矩阵A·规约、调节器、相状态

|物品|细节|
|---|---|
|领导机关|**尼日利亚中央银行（CBN）**|
|法律依据|CBN 法案 2007 （s.2, s.17–18  货币发行权）； eNaira 根据现有法定货币授权发行，而不是根据单独的 CBDC 特定立法发行|
|上市前设计|“eNaira 设计论文”（CBN、2021）——两层中间、分层 KYC、基于账户的分类账|
|现场发布|**2021-10-25** （布哈里总统在 Aso Rock 宣布）|
|技术合作伙伴|**Bitt Inc.**（总部位于巴巴多斯的 DLT 供应商；与 Sand Dollar / JAM-DEX 相同的供应商模式）|
|底层技术|许可的 **Hyperledger Fabric** 变体|
|更新|通过2022-2023进行应用程序重新启动/升级； USSD *997# 频道推出 2022-08  用于功能手机访问|
|批发CBDC|无 — eNaira 仅限零售/中端市场|
|跨境CBDC|自 2026-05 起无；不参与 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 或 [[fintech/bis-project-agora-overview|BIS Project Agorá]]|

CBN 在现有的货币发行授权下进行，而不是寻求针对 CBDC 的立法。这是与欧盟数字欧元的结构性差异之一（需要根据欧盟共同决定制定新的法规），并在一定程度上解释了推出速度的原因。

## 矩阵 B · 设计选择 — 分层 KYC、免费分发、低摩擦但低效用

|设计选择|细节|含义|
|---|---|---|
|**两层中间**|CBN → 存款银行 (DMB) + 移动货币运营商 (MMO) → 消费者钱包|与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|three paradigms]] 双层相同的中间模型|
|**分层 KYC**|Tier 0 （仅限手机，低容量）→ Tier 1 （BVN-light）→ Tier 2 （BVN-full）→ Tier 3 （银行帐户链接）|专为没有银行账户的人而设计；在实践中，高层注册占主导地位|
|**基于账户的分类账**|不是不记名令牌；与已识别账户相关的余额|与 AML / CFT 兼容，但破坏了现金替代的叙述|
|**零利息**|eNaira 余额没有收益|与欧盟数字欧元相同的反脱媒逻辑（参见[[fintech/e-euro-retail-rollout|digital euro retail rollout]]）|
|**无交易费**|CBN吸收交易成本|旨在与银行应用程序和 USSD 费用竞争|
|**极速钱包（消费者）+极速商户（商户）**|两个应用程序模式|为商家添加入职步骤|
|**USSD *997# 后备**|为功能手机用户添加了 2022-08 |承认智能手机普及率上限；反映 NIBSS USSD 银行模式|
|**按级别划分的控股上限**|等级 0 = ₦120,000 daily / ₦300,000 max；等级 1 = ₦200,000 / ₦500,000；等级 2/3  更高|与电子人民币运营商等级模型相当的等级限制|

设计理念是**最大程度地方便入职**（分层 KYC、免费、免费分发、功能手机访问），但采用却停滞不前。经验教训是，**需求方问题不能仅通过消除技术摩擦来解决**。

## 矩阵 C·采用指标（最新公开）

|公制|最近的公众人物|
|---|---|
|下载的钱包（累计）|~700K–900K（Y1, 多个CBN语句）； 2023-2024  估计数百万与商家+应用程序重新下载相结合|
|**活跃钱包**|国际货币基金组织工作文件 (2023) — 根据 1.5% 指定月份累计交易下载量|
|**渗透率与成人人口**|**低于成年人口的 0.5%**（国际货币基金组织估计 Y1；后续独立报告表明没有重大变化）|
|累计交易金额（Y1）|独立估计~₦8B（远低于流通现金的1%）|
|城市/覆盖范围|国家（在线）、拉各斯/阿布贾集中实践|
|商户受理|有限——没有大型零售商推出可与 e-CNY 或 Pix 相媲美的服务|
|跨境CBDC|没有任何|

国际货币基金组织的工作文件“尼日利亚的 eNaira，一年后”（Ree，2023）是被引用最多的公开诊断，也是“**任何实时 CBDC 采用率最低**”框架的来源。该工作文件将累积钱包下载量（一个相对容易膨胀的指标）与每月活跃用户数（具有约束力的采用测试）区分开来，并得出结论，即使是后者，eNaira 的渗透率仍大大低于巴哈马沙元本已较低的基数。

## 矩阵D·2022-2023 Naira重新设计碰撞

eNaira 故事中最重要的事件不是**发布本身，而是**CBN 的 2022 Naira 重新设计 + 现金提取限制政策**，它与 eNaira 的推出发生了冲突，从而损害了而不是帮助了采用。

**顺序：**

```
2022-10    CBN 宣布重新设计 ₦200, ₦500, ₦1,000 notes
2022-12    现金提款限额公布（₦20K/天个人，₦100K/周）
2023-01    旧票据设置截止日期； ATM 机和银行分行排队
2023-02    现金短缺严重；全国范围内的抗议活动；最高法院介入
2023-03    最高法院将旧票据截止日期延长至2023-12-31
2023-05    现金逐步回归；无现金政策框架软化
新领导班子上的2023-2024  CBN； eNaira 营销大幅减少
```

**公众在现金紧缩期间做了什么：**

1。 **代理银行业务**（Opay、PalmPay、Moniepoint、Kuda）——爆炸性增长。 Opay的用户群、交易量和商户终端数量均呈数量级增长。
2。 **USSD 银行业务**通过现有的 DMB 轨道 (NIBSS)。
3。 **加密货币 / USDT** — 尼日利亚已经是全球加密货币采用率最高的国家之一；现金紧缩加剧了这种情况。 Binance P2P NGN volume spiked.
4。 **eNaira**——尽管 CBN 积极将重新设计设计为支持“无现金经济”，但只有一小部分流离失所的现金流入了 eNaira。

结构性失败在于，**反现金政策和 eNaira 的推出被 CBN 视为同一个项目，但却被公众视为独立的、相互敌对的干预**。公众将强制去现金化视为没收，将 eNaira 视为与监视相结合的替代方案；两者一起被拒绝。相反，代理银行业务和加密货币吸收了被取代的需求。

## 矩阵 E·分配模型和无银行账户人群

|层|在分销中的作用|力量|弱点|
|---|---|---|---|
|**立方氮化硼**|发行人和计划运营商|直接法律授权|与公众没有零售关系|
|**DMB**|银行客户的钱包入门|现有客户群|DMB 将 eNaira 视为蚕食费用收入；不冷不热的推动|
|**大型多人在线游戏**|无银行账户的钱包入门|覆盖无银行账户细分市场|MMO 激励错位（eNaira 与自己的电子货币竞争）|
|**代理银行网络**|提现/提现|最大的物理范围|与零费用的 eNaira 相比，代理商更喜欢通过代理银行交易赚取佣金|
|**商家**|验收|对零售循环至关重要|没有大型零售商的承诺；非正规商家更喜欢现金或 POS|

**分销激励问题是未充分诊断的故障模式。** 分销堆栈中的每个参与者（DMB、MMO、代理商、商家）比 eNaira 都有更强的商业动机来推销 **自己的产品**。 CBN 没有像中国央行（国有银行授权）或印度通过 UPI 的附带分配解决问题那样解决激励协调问题。结果，eNaira 位于发行堆栈的顶部，而该发行堆栈在结构上并没有推动它的动力。

## 矩阵 F·与同行零售 CBDC 的比较

|物品|尼日利亚奈拉|[[fintech/bahamas-sand-dollar-cbdc\|Bahamas Sand Dollar]]|[[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]]|中国电子人民币|
|---|---|---|---|---|
|现场发布|2021-10-25|2020-10-20|2022-07 (全)|2020-04 (飞行员)|
|发行人|立方氮化硼|巴哈马中央银行|牙买加银行|中国人民银行|
|分销模式|DMB + MMO（两层）|授权金融机构 (AFI)|Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.|10 指定运营商（六家国有银行+四家支付巨头）|
|活跃钱包与人口|<0.5%|<0.5%（小群体基线）|~5%（Lynk 钱包，更广泛的指标）|180M+ 注册人数中日活跃数达到百万个位数|
|跨境CBDC|没有任何|没有任何|没有任何|mBridge 直播|
|底层技术|超级账本结构（比特）|分布式账本技术（请求）|DLT（电子货币铸币厂）|专有的 PBoC 架构|
|现金替代政策冲突|**是的 — Naira 重新设计 2022-2023**|不|不|否（通过支付宝/微信支付已存在大规模无现金采用）|
|收养框架|《失败案例》|“推出缓慢，人口少”|“有希望但很小”|“国家主导的大规模推广”|

eNaira 和 Sand Dollar 是运行时间最长的两个实时零售 CBDC，两者的采用率均远低于 1% 的人口。与中国的对比是结构性的：**分销渠道所有权是具有约束力的变量**，而不是技术或发布速度。

## 起源与演变

```
2017-2019    CBN CBDC政策研究；巴哈马沙元进展观察
2021-08      CBN-Bitt Inc.合同签订；技术整合开始
2021-09       原计划于独立日（1 10 月）发布；推迟
2021-10-25 eNaira 由布哈里总统在 Aso Rock 现场发布；第一个非洲零售 CBDC
2022-02      钱包下载跨700K-mark； CBN 发布积极的中期指标
2022-08      USSD *997#频道为功能手机用户推出
2022-10      CBN 宣布 Naira 重新设计 (₦200/₦500/₦1,000)
2022-12      提现限额政策公布
2023-01      现金短缺引发全国排队、抗议、最高法院案件
2023-02-23 国际货币基金组织工作文件“尼日利亚的 eNaira，一年后”——对低采用率的正式诊断
2023-03      最高法院延长旧票据期限；现金逐渐回笼
2023-05      政府过渡； CBN 新领导层（耶米·卡多佐）确认
2023-2024    eNaira 营销很大程度上不再被重视； CBN 焦点转向外汇改革优先事项
2024-2025    没有主要的 eNaira 程序更新；生动但不强调
2025-2026    继续直播；没有出现大的复苏；采用率持平至边缘
```

**模式**：发布速度很快（从研究到实时零售不到五年），但发布后的轨迹**因 2022-2023  现金政策冲突而加剧的分销激励失败而受阻**。

## 与私人铁路替代方案的比较

eNaira 的目标是成为尼日利亚人的数字货币轨道，而同期增长的**实际**数字货币轨道是：

- **代理银行网络** — Opay、PalmPay、Moniepoint、Kuda、Carbon、FairMoney。活跃用户和商户终端数量之和使 eNaira 相形见绌几个数量级。
- **NIBSS即时支付（NIP）**——银行间即时转账；仍然是正式银行间资金流动的主力。
- **USSD 银行业务** 通过 DMB——高容量的传统铁路，特别是对于没有银行账户/银行服务不足的人。
- **加密货币 P2P（USDT、USDC）** — 尼日利亚位居全球加密货币采用指数榜首（Chainaanalysis）。币安NGN P2P，然后CBN限制后，替代P2P场地。请参见 [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] 和 [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]。
- **MMO 钱包** — MTN MoMo、Airtel Money、9mobile。

实际的无现金转型正在尼日利亚发生——只是不是通过 eNaira。这是 eNaira 被视为 CBDC 采用失败案例研究的核心结构事实和实证原因。

## 有关的

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]

## 来源

- 尼日利亚中央银行——机构落地和出版物：https://www.cbn.gov.ng/
- CBN —“eNaira 设计纸”(2021)：https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- eNaira官方网站：https://enaira.gov.ng/
- IMF工作论文——《尼日利亚的eNaira，一年后》（Jongsoon Ree，2023）：https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- BIS创新中心CBDC主题登陆：https://www.bis.org/about/bisih/topics/cbdc.htm
- 国际清算银行1116 号工作文件——“下一代货币体系——蓝图”（2024）
- CBN关于奈拉重新设计和现金提取限额政策的公开新闻稿（2022-10 至2023-03）
- Chainaanalysis 全球加密货币采用指数公开报告（多年来，尼日利亚排名第一）

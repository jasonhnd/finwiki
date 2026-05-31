---
source: fintech/jamaica-jam-dex-cbdc
source_hash: d6cf1ad54e7b87a0
lang: zh
status: machine
fidelity: ok
title: "牙买加 JAM-DEX — 牙买加银行零售 CBDC、Lynk 钱包采用情况、eCurrency Mint 技术供应商"
translated_at: 2026-05-31T06:16:15.675Z
---

# 牙买加 JAM-DEX — 牙买加银行零售 CBDC、Lynk 钱包采用情况、eCurrency Mint 技术供应商

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction case study on **JAM-DEX (Jamaica Digital Exchange)**, the Bank of Jamaica's retail CBDC launched in 2022  — the third major small-economy retail CBDC after the Bahamas Sand Dollar (2020) and Nigeria eNaira (2021), and the most cleanly adopted of the three at the percentage-of-population level. Read it against [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]] (longest-running peer; AFI distribution model), [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] (adoption-failure case; Bitt vendor), and [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for cross-jurisdiction positioning. For architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]].

> [!info] TL;DR
> 牙买加银行（BoJ）于 **2022-07** 将 **JAM-DEX（Jamaica Digital Exchange）**作为具有法定货币地位的零售 CBDC 正式发行，此前于 2021年完成了历时 8个月的试点。JAM-DEX **依据《牙买加银行（修正）法》（2022年通过）具有法定货币地位**——这使牙买加成为少数在发行时即制定了专门 CBDC 立法的司法管辖区之一（法律明确程度高于巴哈马和尼日利亚，两者均沿用已有的货币发行授权）。其分发渠道的决定性特征是 **Lynk**——由 NCB Financial Group 子公司 TFOB Limited 运营的钱包，截至 2024 年已达到约 **200K-300K 注册用户**——在成年人口中的渗透率高于 Sand Dollar 或 eNaira。技术合作伙伴为 **eCurrency Mint**（而非 Bitt——与 Sand Dollar / eNaira / DCash 明显不同的技术供应商）。政府**激励支付（J$2,500 注册奖励与商户接受补贴）**推动了初期钱包注册的激增。该计划规模仍远小于数字人民币或电子卢比，但在四个以上可比同类项目中，是**最成功的小型经济体 CBDC 采用案例**。

## 项目架构

```
                         牙买加银行
                                │
                                ▼
                       JAM-DEX（J$ 零售 CBDC）
                                │
       ┌────────────────────────┴────────────────────────┐
       ▼                                                  ▼
   发行方（BoJ；法定货币中央银行负债）         技术合作伙伴
                                             （eCurrency Mint，美国；
                                              DSC2 平台）
       │                                                  │
       ▼                                                  ▼
   两层中介分发                                      钱包应用
   （BoJ → 授权支付服务提供商（PSP）              - Lynk（NCB / TFOB）— 主导
    + DTI（存款机构）→ 消费者钱包）              - 启用 JAM-DEX 的银行应用
       │
       ▼
   分级 KYC
   - 标准（与 BoJ 对齐的 J$ KYC 级别）
   - 商户级别
```

## 矩阵 A · 法规、监管机构、阶段状态

| 事项 | 详情 |
|---|---|
| 主管机构 | **牙买加银行（BoJ）** |
| 法律依据 | 《牙买加银行（修正）法》2022 ——明确的 CBDC 法定货币授权 |
| 试点阶段 | 2021-08 至 2022-04 （8个月试点，主要在金斯敦 / 城区）|
| **正式上线** | **2022-07** — 第三个主要小型经济体零售 CBDC |
| 技术合作伙伴 | **eCurrency Mint**（总部在美国；通过 DSC2 平台部署）|
| 底层技术 | 密码学安全数字符号 / 层级数字签名（eCurrency Mint 架构；有别于 Bitt 部署所采用的 Hyperledger Fabric）|
| 批发 CBDC | 无——仅零售 |
| 跨境 CBDC | 截至 2026-05暂无；未接入 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] / [[fintech/bis-project-agora-overview|Agorá]] |
| 法定货币地位 | 是——在 2022 年《牙买加银行法》修正案中明确规定 |

**法定货币修正案**是所有小型经济体零售 CBDC 中最清晰的法律结构。尼日利亚在已有货币权力下发行 eNaira；巴哈马 Sand Dollar 依靠对 CBOB 法案的 2020 年修正；牙买加则走得最远，通过了专门的 2022 年修正案，明确将数字牙买加元命名为法定货币。

## 矩阵 B · 设计选择——以钱包为先、激励驱动、面向已纳入银行体系人群

| 设计选择 | 详情 | 原因 |
|---|---|---|
| **通过 PSP 和 DTI 的两层中介** | BoJ 发行；消费者通过授权支付服务提供商（PSP）和存款机构（DTI）进行交易 | 保留受监管中介机构的角色 |
| **Lynk 作为旗舰钱包** | NCB Financial Group 子公司 TFOB Limited 运营 Lynk 钱包——迄今使用最广泛的 JAM-DEX 钱包 | 将钱包用户体验集中于单一高质量的消费者端应用 |
| **注册激励——J$2,500 （约 US$16）奖励** | 政府 / BoJ 为前 100K 名消费者钱包注册者提供一次性激励（公告于 2022-03）| 推动了上线后数周内的早期钱包注册激增 |
| **商户补贴** | 政府资助的补贴，用于激励小型商户接受 | 应对双边市场的"先有鸡还是先有蛋"问题 |
| **零利率** | JAM-DEX 余额不产生收益 | 与同类产品相同的防脱媒逻辑 |
| **消费者对商户零交易费** | BoJ 不收取每笔交易费用 | 鼓励采用 |
| **基于账户的账本** | 余额通过 PSP / DTI 入驻与已识别钱包绑定 | 兼容 AML/CFT |
| **eCurrency Mint 供应商（非 Bitt）** | Bitt 许可型 DLT 模型的替代架构 | 与 Sand Dollar / eNaira / DCash 不同的技术路径 |
| **直接中央银行负债** | JAM-DEX 是 BoJ 负债 | 不同于日本 DCJPY（存款代币，非 CBDC）|

激励驱动型上线是最具争议的设计选择。政府 / BoJ 出资提供 J$2,500 注册奖励和商户补贴，以克服冷启动采用问题。批评者认为这只是花钱买来的注册人数；支持者则指出，**到 2023-2024 年，活跃使用指标已超出初始激励队列**，说明通过引入确实创造了一定的真实需求。

## 矩阵 C · 采用指标（最新公开数据）

| 指标 | 最新公开数据 |
|---|---|
| 实时状态 | **自 2022-07年上线**（约 3.5年以上）|
| 注册钱包（累计）| 约 200K-300K（以 Lynk 为主，来自 2024年前多份公开声明）|
| **活跃钱包** | 明显少于注册数量；BoJ 公开声明未披露精确的日活数量 |
| **渗透率 vs 成年人口** | 成年人口（约 2M 总成年人）的数个百分点——**按人口比例高于 Sand Dollar 或 eNaira** |
| 累计交易金额 | 以绝对值计较为有限；在多年时间窗口内累计达数十亿牙买加元 |
| 覆盖范围 | 全国范围；金斯敦 / 城区集中 |
| 商户接受度 | 据报数千家商户；集中于快餐 / 零售 / 非正式部门试点 |
| 跨境 CBDC | 无 |

**Lynk 钱包**主导了 JAM-DEX 钱包生态系统。NCB Financial Group 将 JAM-DEX 轨道嵌入其已上市的消费支付应用（Lynk）的战略决策，是小型经济体 CBDC 中分发渠道所有权最清晰的案例——NCB 是牙买加最大的商业银行集团，拥有强大的现有消费者覆盖。这在结构上更接近于数字人民币模式（中国人民银行借助六家国有商业银行和四家大型支付 / 电信运营商），而非巴哈马 AFI 可互操作模式。

## 矩阵 D · Lynk 钱包——分发渠道所有权优势

```
   牙买加银行（BoJ）
        │
        ▼
   NCB Financial Group（牙买加最大商业银行集团）
        │
        ▼
   TFOB Limited（NCB 子公司；消费金融科技载体）
        │
        ▼
   Lynk 钱包（启用 JAM-DEX 的消费钱包 + 毗邻支付功能）
        │
        ▼
   约 200K-300K 注册用户 + 数千家以上商户
```

**为何重要**：Lynk 的渗透率是 JAM-DEX 采用的最大单一决定因素。NCB Financial Group 按存款和消费者覆盖计是牙买加主导商业银行；其战略意愿通过 Lynk 推动 JAM-DEX，解决了 eNaira 所遭遇的分发激励问题（eNaira 中存款货币银行 / 移动货币运营商推动其 CBDC 的动力有限，往往优先推广自身产品）。Lynk 为 BoJ 提供了一个拥有真实消费者营销能力的单一锚定钱包。

与 eNaira 的对比在结构上具有典型意义：

- **eNaira**：多家 DMB + MMO，均缺乏推广的强烈激励。
- **Sand Dollar**：多家 AFI，可互操作但绝对基数较小。
- **JAM-DEX / Lynk**：由主导商业银行集团运营的单一锚定钱包；分发激励一致。

**分发渠道所有权的经验教训**是四极小型经济体 CBDC 比较中被引用最多的发现。

## 矩阵 E · 政府激励设计

牙买加政府 / BoJ 采用了三种具体的补贴杠杆来推动初期采用：

| 补贴 | 详情 | 效果 |
|---|---|---|
| **消费者注册奖励** | 向前约 100K 名钱包注册者一次性支付 J$2,500 （公告于 2022-03）| 推动了早期注册激增；被批评为花钱买数字 |
| **商户接受补贴** | 补贴小型商户注册接受 | 建立初期商户基础 |
| **公共雇员发放试验** | 部分公共部门试点以 JAM-DEX 支付薪酬 | 测试了政府对个人（G2P）用例 |

这些补贴是**同类 CBDC 项目均可采用但并非都已部署的政策工具**。Sand Dollar 未使用同等规模的消费者注册奖励；eNaira 未采用注册奖励（事后来看，鉴于采用率差距，或许本应使用）。牙买加方式是小型经济体零售 CBDC 中**最为积极的激励设计**，现已作为可能的模板被加以研究。

## 矩阵 F · 与同类 CBDC 的比较

| 事项 | 牙买加 JAM-DEX | [[fintech/bahamas-sand-dollar-cbdc\|Bahamas Sand Dollar]] | [[fintech/nigeria-enaira-retail-cbdc\|Nigeria eNaira]] | 中国数字人民币 |
|---|---|---|---|---|
| 正式上线 | 2022-07 | 2020-10-20 | 2021-10-25 | 2020-04 （试点）|
| 发行方 | 牙买加银行 | 巴哈马中央银行 | 尼日利亚中央银行 | 中国人民银行 |
| 法定货币修正案 | 是（2022年《牙买加银行法》修正案）| 是（CBOB 法 2020年修正）| 否（依现有货币权力）| 是（2020年《人民银行法》）|
| 分发模式 | PSP + DTI；Lynk 主导 | AFI（可互操作）| DMB + MMO | 10 家指定运营商 |
| 技术供应商 | **eCurrency Mint**（美国）| Bitt Inc.（巴巴多斯）| Bitt Inc.（巴巴多斯）| 中国人民银行自研 |
| 注册激励 | **J$2,500 注册奖励** + 商户补贴 | 无 | 无 | 无（国家主导推广）|
| 锚定钱包 | **Lynk**（NCB / TFOB）| 多个 AFI 钱包互操作 | eNaira Speed Wallet + DMB 应用 | 支付宝 / 微信支付集成 + 银行应用 |
| 活跃渗透率 | 成年人口数个百分点 | 占人口个位数百分比 | 成年人口 <0.5% | 逾 180M 注册中有数百万日活 |
| 状态（2026-05）| 运行中；温和增长 | 运行中（5年以上）；缓慢增长 | 运行中但已降低重视程度 | 运行中；大规模推广阶段 |

**eCurrency Mint vs Bitt** 供应商的分野是一个值得关注的数据点。Bitt 供应商集群（Sand Dollar、eNaira、ECCU DCash）的结果参差不齐甚至较差；eCurrency Mint 部署（JAM-DEX）是最成功的小型经济体采用案例。这不必然是供应商能力的问题——分发设计在影响力上压倒技术选择——但这一规律在 CBDC 供应商选择文献中值得关注。

## 起源与演进

```
2020-2021     BoJ 开展零售 CBDC 内部研究；选定 eCurrency Mint 为技术合作伙伴
2021-08       试点阶段开始（历时 8 个月，主要在金斯敦地区）
2022-03       试点结束；政府宣布 J$2,500 注册奖励计划
2022-05       《牙买加银行（修正）法》2022 通过——JAM-DEX 的法定货币地位
2022-07       JAM-DEX 全国上线；Lynk 钱包启动
2022-08       前约 100K 名钱包注册；J$2,500 奖励发放完毕
2023          商户接受扩展；Lynk 主导钱包份额
2023-2024     持续增长；BoJ 公开声明强调逐步扩展
2024-2025     JAM-DEX 持续运行；钱包数量突破 200K 名 Lynk 用户
2025-2026     运行中；激励结束后温和有机增长
```

**规律**：上线经过清晰的序列——试点 → 立法 → 激励 → 钱包推广。牙买加 CBDC 的故事是公开记录中**序列最为清晰的小型经济体零售 CBDC 上线案例**。结构经验是：最清晰的序列（立法权威 + 锚定钱包 + 激励）在采用比例方面，优于最快的序列（eNaira）或运行最长的序列（Sand Dollar）。

## 与牙买加私营支付轨道的比较

牙买加私营数字支付格局：

- **商业银行应用** — NCB、Scotiabank Jamaica、BNS、JN Bank。
- **Lynk** — TFOB / NCB，兼作 JAM-DEX 钱包和独立支付应用。
- **现有卡 / ATM 轨道** — Visa、Mastercard。
- **汇款** — 海外侨汇规模较大；MoneyGram、Western Union、JNMS Remit；启用美元关联 Lynk 功能和基于 USDT 的汇款应用正在兴起。
- **加密资产 / USDT P2P** — 相较尼日利亚，牙买加规模有限；处于新兴阶段。

JAM-DEX 的竞争跑道**比尼日利亚（Opay / PalmPay / Moniepoint 已服务数亿用户）拥挤程度低**，也比 Sand Dollar（巴哈马银行体系高度发达）的成熟度低。这一组合——锚定钱包（Lynk）+ 主导商业银行集团（NCB）+ 法定货币立法 + 政府激励——是迄今公开记录中**最为完整的小型经济体 CBDC 采用方案**。

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## Sources

- Bank of Jamaica — institutional landing: https://boj.org.jm/
- BoJ — CBDC / JAM-DEX project page: https://boj.org.jm/core-functions/currency/cbdc/
- BoJ — JAM-DEX consumer / merchant pages: https://boj.org.jm/jam-dex/
- Lynk wallet operator (TFOB / NCB Financial Group): https://lynk.us/
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116  — "The next-generation monetary system — a blueprint" (2024)
- Bank of Jamaica (Amendment) Act 2022  — public-domain legislative text
- BoJ public press releases on JAM-DEX launch and J$2,500  enrolment-bonus programme (2022)

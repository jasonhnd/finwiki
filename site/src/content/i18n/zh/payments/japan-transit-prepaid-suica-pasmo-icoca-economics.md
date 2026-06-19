---
source: payments/japan-transit-prepaid-suica-pasmo-icoca-economics
source_hash: ee4c4213c64ed479
lang: zh
status: machine
fidelity: ok
title: "Japan transit-prepaid e-money: Suica / PASMO / ICOCA / regional IC economics"
translated_at: 2026-06-19T06:09:18.051Z
---

# Japan transit-prepaid e-money: Suica / PASMO / ICOCA / regional IC economics

## Wiki 路径

本词条归属于 [[payments/INDEX|payments index]]，是交通系预付方案的参考页面，与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对用于 FSA 登记的预付发行者视角，与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 用于四类方案比较，与 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 用于移动 Suica 退款／可转让性问题，与 [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] 用于经由 Cyberne 的发行者间结算视角。请与 [[payment-firms/rakuten-edy|Rakuten Edy]]（非交通系 FeliCa 预付）以及侵蚀了部分交通系预付零售刷卡量的替代方案 [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 进行比较。移动铁路的 Apple Pay／おサイフケータイ 路由就代币化处理与 [[payments/japan-card-security-authentication-controls|card security and authentication controls]] 交叉。

## TL;DR

日本交通系预付电子货币运行于一个 **单一互用方案** 之上，该方案以 FeliCa（索尼的非接触 IC 技术）、**10 IC 卡互用协定**（自 2013以来）以及 **Cyberne** 发行者间结算系统为锚。十张卡中有九张由铁路运营商发行：**Suica**（[[card-issuers/jr-east|JR East]]）、**PASMO**（PASMO 公司 — 东京私铁／巴士联盟）、**ICOCA**（[[JapanFG/jr-west|JR West]]）、**Kitaca**（[[JapanFG/jr-hokkaido|JR Hokkaido]]）、**TOICA**（[[JapanFG/jr-central|JR Central]]）、**manaca**（名古屋 — 名铁 + 名古屋市交通局）、**nimoca**（西铁，福冈）、**SUGOCA**（[[JapanFG/jr-kyushu|JR Kyushu]]）、**HAYAKAKEN**（福冈市交通局）。PiTaPa（Surutto KANSAI）是第十张，作为后付而非预付运营。九张预付卡均在各发行者的预付式支付手段登记之下共享铁路间刷卡受理与可观的零售加盟店受理。经由 Apple Pay／おサイフケータイ 的移动 Suica 在 2016 前后（Apple Pay 启动）将该方案从仅限卡片转变为智能手机原生；移动 PASMO 于 2020跟进。整个方案受资金结算法预付手段框架的规制 — 仅在发行停止时可退款，且 **breakage 经济性**（未兑付余额随时间归属于发行者）为发行者损益作出贡献，尤其对于观光客购买且从未返还的卡片。

## 10 IC 互用方案

10 IC 卡互用协定（10カード相互利用）于 2013-03-23 启动，使持卡人可在全国任一参与的铁路或巴士网络以及任一参与的零售加盟店使用十张卡中的任意一张。2013, 之前，每张卡都受限于其发行者的铁路地区；互用启动是日本零售支付中最大规模的单次互操作事件之一。

| 卡 | 发行者 | 地区 | 运营商类型 | 预付／后付 |
|---|---|---|---|---|
| Suica | [[card-issuers/jr-east\|JR East]] | 首都圈／东日本北部 | JR 集团 | 预付 |
| PASMO | PASMO 株式会社 | 首都圈 | 私铁 + 巴士联盟 | 预付 |
| ICOCA | [[JapanFG/jr-west\|JR West]] | 关西／西日本 | JR 集团 | 预付 |
| Kitaca | [[JapanFG/jr-hokkaido\|JR Hokkaido]] | 北海道 | JR 集团 | 预付 |
| TOICA | [[JapanFG/jr-central\|JR Central]] | 东海／名古屋 | JR 集团 | 预付 |
| manaca | 名铁 + 名古屋市交通局 | 名古屋／中部 | 私铁 + 市政 | 预付 |
| PiTaPa | Surutto KANSAI | 关西（与 ICOCA 重叠） | 私铁联盟 | **后付** |
| nimoca | 西铁 | 福冈／九州 | 私铁 | 预付 |
| SUGOCA | [[JapanFG/jr-kyushu\|JR Kyushu]] | 九州 | JR 集团 | 预付 |
| HAYAKAKEN | 福冈市交通局 | 福冈市地铁 | 市政 | 预付 |

PiTaPa 是结构性例外 — 它是一个 **后付** 方案，持卡人通过银行账户直接扣款按月计费，而非预先充值。这使其在经济性上更接近 [[payments/japan-card-issuer-acquirer-processor-split|card-style credit]] 而非其他九张。PiTaPa 与九张预付卡的互操作仅单向有效（PiTaPa 可在关西区域内受理 Suica／PASMO 等的场所使用，但 Suica／PASMO 不能在 PiTaPa 专用的后付加盟店使用）。

## FeliCa 技术栈

全部十张卡均运行于 **FeliCa** 之上，即索尼专有的非接触 IC 技术（在 ISO/IEC 18092 术语中为 NFC-F）— 不同于 Visa Touch／Mastercard Contactless 所用的 EMV 非接触／NFC-A/B。FeliCa 用于交通的关键技术特征是：

| 特征 | 为何重要 |
|---|---|
| 200ms 读取周期 | 允许闸机吞吐量 — 乘客无需停下即可通过闸机 |
| 卡与读卡器之间的相互认证 | 降低克隆卡与重放攻击面 |
| 带安全元件执行的本地加密 | 在卡侧计算剩余余额，每次刷卡无需后端查询 |
| 1刷卡余额扣减 | 离线交通闸机运行无需在线授权 |

**FeliCa Networks** 合资公司（索尼 + NTT docomo + JR 东日本）开发并许可该技术栈。选择 FeliCa 而非 EMV 非接触，是国际观光客的 Visa／Mastercard 非接触卡在日本交通闸机上无法使用的主要原因 — 反过来，也是 Suica 的 Apple Pay 实现可在全球各地的 FeliCa 装备零售加盟店上工作的原因。全球各地购买的 iPhone 之所以能交易，是因为 Apple 自 iPhone 8起在全球出货 FeliCa 硬件。

## Cyberne 结算系统

10 IC 卡之间的发行者间结算通过 **Cyberne**（由铁路行业合作伙伴运营的集中结算系统）处理。当 Suica 持卡人在 JR 东日本进站、在 JR 东海出站时，两家铁路运营商之间的票务收入分配由 Cyberne 计算并结算。同一机制处理跨发行者的零售加盟店结算：若 manaca 持卡人在 Suica 受理（acquired）的加盟店购买，价值从发行者 manaca → Cyberne → 受理方 Suica → 加盟店流动。

Cyberne 系统最终经由全银转账在发行者银行账户之间转移日元 — 与其他所有日本支付方案相同。关于端到端清算地图，参见 [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]。

## 移动铁路：Apple Pay 与おサイフケータイ

预付 IC 方案有两条主要的移动设备铁路：

| 铁路 | 设备 | 覆盖 |
|---|---|---|
| 经由 Apple Pay 的移动 Suica | iPhone 7+（日本型号）、iPhone 8+（带 FeliCa 的全球型号）、Apple Watch Series 3+ | Suica、PASMO、ICOCA（2023新增） |
| おサイフケータイ | 带 FeliCa 的日本市场 Android 手机 | Suica、PASMO、ICOCA、WAON、nanaco、Edy、iD、QUICPay |

移动 Suica 早于 Apple Pay（JR 东日本于 2006 为带 FeliCa 的日本国内功能机推出），但 2016 的 Apple Pay 启动是拐点 — 它将 Suica 从功能机的小众转变为主流的智能手机支付界面。到 2024, ，移动版交易占新 Suica 发行的大多数，尽管卡版仍被广泛使用。

Apple Pay 实现涉及一个代币化层（Apple Pay 生成设备特定的代币 PAN），但底层的交通乘车仍使用设备上的 FeliCa 安全元件并采用离线余额扣减语义 — Apple Pay 不在交通闸机处向 JR 东日本引入在线授权。

## 预付式支付手段法处理

九张预付 IC 卡均在资金结算法下登记为 **第三方型预付式支付手段**（FSA 登记）。这触发：

| 义务 | 详情 |
|---|---|
| 用户资金保全 | 未使用余额额的 50% 必须在每个 3 月末与 9 月末的余额基准日以供托／信托／担保予以保全 |
| 仅在停止发行时退款 | 未使用余额在正常运营期间*不*可应要求以现金退款 — 仅在停止发行时（这是与资金移动业的法律区别） |
| 终止程序 | 若发行者停止，退款流程必须遵循资金结算法程序 |
| 用户之间不可转让 | 预付余额不可发送给另一用户（这是与资金移动余额的法律界线） |
| 到期规则 | 发行者可设定到期；到期后的未使用余额按发行者条款处理 |

不可退款这一点是 **breakage 经济性** 的主要来源。由入境观光客购买且从未用尽的卡（典型情形：观光客抵达时购买 ¥3,000 的 Suica 卡，使用 ¥2,400, ，带着 ¥600 未兑付余额外加 ¥500 押金离开日本）产生随时间归属于发行者损益的 breakage。JR 东日本历来未明确披露 Suica 的 breakage 数字，但入境观光量 — 在 COVID 前峰值约达 32 百万，到 2024 已恢复至可比水平 — 暗示了有意义的 breakage 贡献。

关于「不可应要求退款」规则为何使交通系预付保持在预付类别而非触发资金移动业登记，参见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 加盟店受理足迹

交通系预付卡在交通闸机之外拥有可观的零售加盟店足迹：

| 受理区域 | 覆盖 |
|---|---|
| 电车与巴士 | 在 10 IC 方案中普遍 |
| 车站周边零售 | 非常高 — 车站内／车站附近的便利店、报刊亭、自动售货机 |
| 便利店连锁 | 在 7-Eleven、FamilyMart、Lawson、Ministop 普遍 |
| 药妆店、超市 | 高 — Welcia、Tsuruha、Sundrug、AEON（也受理 WAON）、伊藤洋华堂（也受理 nanaco） |
| 快餐、休闲餐饮 | 高 |
| 自动售货机 | 在车站内高，并在车站外日益增多 |
| EC 在线 | 有限 — 移动 Suica 为部分 EC 加盟店支持 Suica 互联网支付，但量小 |
| 跨境 | 无 — 封闭的日本国内方案 |

零售受理足迹主要通过 JR 东日本的 Suica 受理方侧运营，以及 PASMO 公司的东京地区私铁加盟店合作伙伴关系构建。单一受理方动态意味着加盟店手续费是与发行者双边协商，而非通过相互竞争的受理方协商（与 [[payments/japan-card-issuer-acquirer-processor-split|card class multi-acquirer]] 的结构形成对比）。

## 移动 Suica 押金取消（2024）

JR 东日本在较早的推出中取消了经由 Apple Pay 发行的移动 Suica 的 ¥500 押金要求；对于基于卡的 Suica，押金仍然保留。卡 Suica 与移动 Suica 之间的这种分别处理提醒人们，「Suica」并非单一产品，而是一个根据外形规格具有不同押金、退款、到期与受理规则的产品家族。同样适用于 PASMO 与 ICOCA 的移动变体。

## 加盟店手续费经济性 — 单一受理方动态

由于每张交通系预付卡都有一个 **单一主要受理方**（发行者实体本身），加盟店手续费经济性在结构上不同于卡类的多受理方定价：

| 方面 | 交通系预付（Suica／PASMO／ICOCA 等） | 卡（Visa／Mastercard／JCB） |
|---|---|---|
| 受理方选择 | 单一 — 与发行者或其授权受理方合作伙伴签约 | 多个 — 加盟店在持牌受理方中选择 |
| 手续费披露 | 加盟店手续费表的公开披露有限 | 经由 JFTC／Payments Japan 的公开基准 |
| 手续费基准比较 | 困难 — 无跨受理方比较 | 可能 — 多受理方竞争形成约束 |
| 硬件成本 | 加盟店必须安装 FeliCa 读卡器（¥30,000+） | 经由 PSP 提供的终端的适度成本 |
| 每次刷卡成本 | 嵌入于 MDR 中；因加盟店层级而异 | 基于 MDR；可能有 PSP 每笔交易手续费 |
| 议价能力 | 仅集中于大型连锁层面 | 分散；小加盟店接受公布费率 |

单一受理方动态是 **JFTC 加盟店手续费披露压力** 历来首先集中于卡类的结构性原因 — 那里有更多形成约束的竞争。对预付类手续费透明度的压力将面临一个结构性障碍：作为受理方的发行者无法被轻易分解为独立的手续费组成部分。

## JR 东日本对 Suica 的企业利害

[[card-issuers/jr-east|JR East]] 的 Suica 特许经营处于一个多分部的零售／车站／交通服务业务之中，该业务将 Suica 既用作支付手段又用作客户数据平台。Suica 的装机基础 — 包括移动版转换在内约 100 百万张卡 — 赋予 JR 东日本日本最大级别的自有预付人群，以及与之对应的、跨越交通、车站零售及部分城市便利店与超市商业的数据信号。企业战略将 Suica 视为一项 **战略平台资产** 而非独立的支付服务损益，这是 JR 东日本愿意投资于移动 Suica 平台开发、Suica Welcome 观光客拓展以及 JRE POINT 整合而无需要求对预付手段进行直接独立变现的原因之一。

## Suica 下一代平台方向

JR 东日本已传达了 Suica 的更长期平台方向 — 朝向一个既支持历史性的 FeliCa 安全元件离线刷卡模型、又支持新的服务器管理账户余额模型的 Suica。其动机包括放宽历史性的余额上限、支持更复杂的多发行者路由、与智能手机原生铁路更干净地整合，以及为铁路之外的跨模式出行产品（出租车、共享单车、微出行等）打造基础。这一方向已被公开讨论，但完整的运营架构仍在定义之中；这是中期内最重要的日本预付方案结构性转变之一。

## 跨发行者协作治理

10 IC 互用方案整体的协作涉及无单一主导规则制定者的多发行者治理：

| 治理维度 | 如何运作 |
|---|---|
| 互用方案规则 | 十个发行者之间的行业协议；以共识修订 |
| Cyberne 结算系统 | 由铁路行业合作伙伴运营；技术变更跨发行者协调 |
| 共同刷卡受理标准 | FeliCa 规范合规 + 方案规则扩展 |
| 零售加盟店互操作性 | 逐发行者；发行者可在互惠协议下在其加盟店受理其他发行者的卡 |
| 新功能部署（移动、押金变更、到期规则） | 各发行者独立决定；方案层面的新功能需要多发行者共识 |

基于共识的治理模式是方案范围内的变更（如向更多卡扩展移动铁路推出）往往分阶段而非在方案范围内同时推出的原因之一 — 移动 Suica 比移动 PASMO 早 14 年；ICOCA 的 Apple Pay 支持于 2023到来。

## 相关

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/cashless-jp-landscape]]
- [[payment-firms/rakuten-edy]]
- [[card-issuers/aeon-bank]]
- [[regional-banks/seven-bank]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- JR East: Suica official site and Mobile Suica site.
- PASMO Co Ltd: official site.
- JR West: ICOCA official site.
- JR Hokkaido: Kitaca site.
- JR Central: TOICA site.
- Meitetsu / Nagoya City Transportation: manaca site.
- Nishitetsu: nimoca site.
- JR Kyushu: SUGOCA site.
- FSA: prepaid policy portal and third-party prepaid issuer registry.
- METI: cashless payment policy portal.
- BOJ: payment and settlement systems portal.
- FeliCa Networks: technology / corporate page.

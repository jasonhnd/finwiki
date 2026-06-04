---
source: payments/japan-transit-prepaid-suica-pasmo-icoca-economics
source_hash: 5d37a4ae9275e2b6
lang: zh
status: machine
fidelity: ok
title: "日本交通预付电子货币：Suica / PASMO / ICOCA / 区域 IC 经济性"
translated_at: 2026-06-01T03:31:12.271Z
---
# 日本交通预付电子货币：Suica / PASMO / ICOCA / 区域 IC 经济性

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下，是交通预付方案参考页；与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配套用于 FSA 注册预付发行人视角，与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配套用于四类方案比较，与 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 配套用于 Mobile Suica 退款 / 可转移性问题，与 [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] 配套用于通过 Cyberne 进行的发行人间结算视角。可与 [[payment-firms/rakuten-edy|Rakuten Edy]]（非交通 FeliCa 预付）以及 [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 比较，后者是已经蚕食部分交通预付零售挥卡量的替代方案。移动铁路 Apple Pay / Osaifu Keitai 路由在代币化处理上会进入 [[payments/japan-card-security-authentication-controls|card security and authentication controls]]。

## TL;DR

日本交通预付电子货币运行在一个**单一互通方案**上，其锚点包括 FeliCa（Sony 的非接触 IC 技术）、**10 IC 卡互通协议**（自 2013 起）以及 **Cyberne** 发行人间结算系统。十张卡中有九张由铁路运营商发行：**Suica**（[[card-issuers/jr-east|JR East]]）、**PASMO**（PASMO Co：东京私铁 / 巴士联盟）、**ICOCA**（[[JapanFG/jr-west|JR West]]）、**Kitaca**（[[JapanFG/jr-hokkaido|JR Hokkaido]]）、**TOICA**（[[JapanFG/jr-central|JR Central]]）、**manaca**（名古屋：名铁 + 名古屋市交通局）、**nimoca**（西铁，福冈）、**SUGOCA**（[[JapanFG/jr-kyushu|JR Kyushu]]）、**HAYAKAKEN**（福冈市交通局）。PiTaPa（Surutto KANSAI）是第十张，并以 post-pay 而非预付方式运作。九张预付卡均在各发行人的预付支付工具注册下，共享铁路间挥卡受理和大量零售商户受理。Apple Pay / Osaifu Keitai 上的 Mobile Suica 在 2016 （Apple Pay 上线）前后把该方案从仅实体卡转为智能手机原生；Mobile PASMO 于 2020 跟进。整个方案受《资金结算法》的预付工具框架约束：只有在发行终止时可退款，并且**沉淀余额经济性**（未赎回余额随时间归发行人）会贡献发行人 P&L，尤其是游客购买后未退还的卡。

## The 10 IC mutual-use scheme

10 张交通 IC 卡全国互通协议于 2013-03-23 推出，使持卡人可以在全国任何参与铁路或巴士网络以及任何参与零售商户处使用十张卡中的任意一张。2013 年之前，每张卡都受限于发行方铁路区域；互通上线是日本零售支付中最大的单次互操作事件之一。

| Card | Issuer | Region | Operator type | Prepaid / post-pay |
|---|---|---|---|---|
| Suica | [[card-issuers/jr-east\|JR East]] | 大东京 / 北日本 | JR group | Prepaid |
| PASMO | PASMO Co Ltd | 大东京 | 私铁 + 巴士联盟 | Prepaid |
| ICOCA | [[JapanFG/jr-west\|JR West]] | 关西 / 西日本 | JR group | Prepaid |
| Kitaca | [[JapanFG/jr-hokkaido\|JR Hokkaido]] | 北海道 | JR group | Prepaid |
| TOICA | [[JapanFG/jr-central\|JR Central]] | 东海 / 名古屋 | JR group | Prepaid |
| manaca | 名铁 + 名古屋市交通局 | 名古屋 / 中部 | 私铁 + 市营 | Prepaid |
| PiTaPa | Surutto KANSAI | 关西（与 ICOCA 重叠） | 私铁联盟 | **Post-pay** |
| nimoca | 西铁 | 福冈 / 九州 | 私铁 | Prepaid |
| SUGOCA | [[JapanFG/jr-kyushu\|JR Kyushu]] | 九州 | JR group | Prepaid |
| HAYAKAKEN | 福冈市交通局 | 福冈市地铁 | 市营 | Prepaid |

PiTaPa 是结构性例外：它是**后付**方案，持卡人通过银行账户直接扣款按月结算，而不是预先加载价值。这使其经济性更接近 [[payments/japan-card-issuer-acquirer-processor-split|card-style credit]]，而不是其他九张卡。PiTaPa 与九张预付卡的互通只单向工作（PiTaPa 可在关西区域内接受 Suica / PASMO 等的地点使用，但 Suica / PASMO 不能在 PiTaPa-only 后付商户使用）。

## FeliCa technology stack

全部十张卡都运行在 **FeliCa** 上，这是 Sony 的专有非接触 IC 技术（ISO/IEC 18092  术语中的 NFC-F），不同于 Visa Touch / Mastercard Contactless 使用的 EMV contactless / NFC-A/B。FeliCa 面向交通的关键技术特征包括：

| Feature | Why it matters |
|---|---|
| 200ms 读取周期 | 支持检票口吞吐量：乘客不停止即可通过闸机 |
| 卡与读卡器相互认证 | 降低克隆卡和重放攻击面 |
| 通过安全元件执行本地加密 | 每次挥卡无需后端查询即可在卡侧计算剩余余额 |
| 1-tap 余额扣减 | 离线交通闸机运行无需在线授权 |

**FeliCa Networks** 合资公司（Sony + NTT docomo + JR East）开发并授权该技术栈。选择 FeliCa 而非 EMV contactless，是国际游客的 Visa / Mastercard 非接触卡不能在日本交通闸机使用的主要原因；反过来，也解释了为什么 Suica 的 Apple Pay 实现可在配备 FeliCa 的零售商户使用，全球购买的 iPhone 都可交易，因为 Apple 从 iPhone 8 起在全球出货 FeliCa 硬件。

## Cyberne settlement system

10 IC 卡之间的发行人间结算通过 **Cyberne** 处理，这是由铁路行业伙伴运营的集中结算系统。当 Suica 持卡人在 JR East 进站、在 JR Tokai 出站时，两家铁路运营商之间的车费收入分配会通过 Cyberne 计算并结算。同一机制也处理跨发行人零售商户结算：如果 manaca 持卡人在 Suica 收单商户购物，价值流向为 issuer manaca → Cyberne → acquirer Suica → merchant。

Cyberne 系统最终通过全银转账在发行人银行账户之间转移日元，与日本其他所有支付方案相同。端到端清算地图见 [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]。

## Mobile rail: Apple Pay and Osaifu Keitai

预付 IC 方案有两条主要移动设备轨道：

| Rail | Devices | Coverage |
|---|---|---|
| Mobile Suica via Apple Pay | iPhone 7+（日本型号）、iPhone 8+（带 FeliCa 的全球型号）、Apple Watch Series 3+ | Suica、PASMO、ICOCA（2023 加入） |
| Osaifu-Keitai | 日本市场带 FeliCa 的 Android 手机 | Suica、PASMO、ICOCA、WAON、nanaco、Edy、iD、QUICPay |

Mobile Suica 早于 Apple Pay（JR East 于 2006  为配备 FeliCa 的日本国内功能机推出），但 2016  年 Apple Pay 上线是转折点：它把 Suica 从功能机小众产品转为主流智能手机支付界面。到 2024, ，移动版交易已占新 Suica 发行的大多数，尽管实体卡版仍被广泛使用。

Apple Pay 实现包含代币化层（Apple Pay 生成设备特定 token PAN），但底层交通乘车仍使用设备上的 FeliCa 安全元件，并保持离线余额扣减语义；Apple Pay 不会在列车闸机处引入对 JR East 的在线授权。

## Prepaid Payment Instrument Act treatment

九张预付 IC 卡均在《资金结算法》下注册为**第三方型预付支付工具**（FSA 注册）。这触发：

| Obligation | Detail |
|---|---|
| 用户资金保全 | 每年 3 月末和 9 月末余额日，未使用余额金额的 50% 必须通过存款 / 信托 / 保证进行保全 |
| 仅在终止时退款 | 正常运营期间未使用余额不得按需现金退款；只有在发行终止时才可退款（这是与资金转移服务的法律区别） |
| 终止程序 | 如果发行人终止，退款流程必须遵循《资金结算法》程序 |
| 用户间不可转移 | 预付余额不能发送给另一用户（这是与资金转移余额的法律边界） |
| 到期规则 | 发行人可设定到期；到期后的未使用余额按发行人条款处理 |

不可按需退款是**沉淀余额经济性**的主要来源。入境游客购买且未用尽的卡会产生沉淀余额；典型情形是游客到达时购买 3,000 日元 Suica 卡，使用 2,400 日元，离开日本时留下 600 日元未赎回余额加 500 日元押金。这些余额会随时间进入发行方损益。JR East 历史上没有明确披露 Suica 沉淀余额数字，但入境旅游量在 COVID 前峰值约 3,200 万人，并在 2024 年恢复到可比水平，这意味着沉淀余额贡献具有实际意义。

为什么“不可按需退款”规则使交通预付保留在预付类别而不会触发资金转移服务注册，见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## Merchant acceptance footprint

交通预付卡在交通闸机之外拥有大量零售商户受理：

| Acceptance zone | Coverage |
|---|---|
| 火车和巴士 | 10 IC 方案内通用 |
| 车站区域零售 | 很高：站内 / 站旁便利店、小卖部、自动售货机 |
| 便利店连锁 | 7-Eleven、FamilyMart、Lawson、Ministop 通用 |
| 药妆店、超市 | 高：Welcia、Tsuruha、Sundrug、AEON（也接受 WAON）、Ito-Yokado（也接受 nanaco） |
| 快餐、休闲餐饮 | 高 |
| 自动售货机 | 站内高，并逐步扩展到站外 |
| EC 在线 | 有限：Mobile Suica 支持部分 EC 商户的 Suica Internet payment，但量小 |
| 跨境 | 无：日本国内封闭方案 |

零售受理版图主要通过 JR East 的 Suica 收单侧运营和 PASMO Co 的东京地区私铁商户合作建立。单一收单动态意味着商户费由商户与发行人双边协商，而不是通过竞争性收单机构形成（对比 [[payments/japan-card-issuer-acquirer-processor-split|card class multi-acquirer]] 结构）。

## Mobile Suica deposit elimination (2024)

JR East 在较早推出阶段取消了通过 Apple Pay 发行的 Mobile Suica 的 500 日元押金要求；实体卡 Suica 仍保留押金。实体卡 Suica 与 Mobile Suica 之间这种差异化处理提醒我们，“Suica”并不是单一产品，而是一个产品族，其押金、退款、到期和受理规则会根据形态不同而变化。PASMO 和 ICOCA 的移动版本也同样如此。

## Merchant fee economics：single-acquirer dynamics

因为每张交通预付卡都有一个**单一主收单方**（即发行人实体本身），商户费经济性在结构上不同于卡类别的多收单定价：

| Aspect | Transit prepaid (Suica / PASMO / ICOCA et al.) | Card (Visa / Mastercard / JCB) |
|---|---|---|
| 收单选择 | 单一：与发行人或其授权收单伙伴签约 | 多个：商户可在持牌收单机构中选择 |
| 费用披露 | 商户费表的公开披露有限 | 通过 JFTC / Payments Japan 提供公开基准 |
| 费用基准 | 困难：没有跨收单机构比较 | 可行：多收单机构竞争形成约束 |
| 硬件成本 | 商户必须安装 FeliCa 读卡器（30,000 日元以上） | 通过 PSP 提供终端，成本适中 |
| 每次挥卡成本 | 嵌入 MDR；随商户层级变化 | 基于 MDR；可能另有 PSP 每笔费用 |
| 议价能力 | 只集中在大型连锁层面 | 更分散；小商户接受公布费率 |

单一收单动态是**JFTC 商户费披露压力**历史上首先集中在卡类别上的结构性原因，因为那里有更多竞争可形成纪律。对预付类别费用透明度施压将面临结构性障碍：发行人即收单方，难以拆分为独立费用组件。

## JR East corporate stakes in Suica

[[card-issuers/jr-east|JR East]] 的 Suica 业务位于多板块零售 / 车站 / 交通服务业务之内，JR East 将 Suica 既用作支付工具，也用作客户数据平台。Suica 装机基础约 100  百万张（包括移动版转换），使 JR East 拥有日本最大的一批被绑定的预付用户，并在交通、车站零售以及一部分城市便利店和超市商业中获得相应数据讯号。公司战略将 Suica 视为**战略平台资产**，而不是独立支付服务 P&L；这也是 JR East 愿意投资 Mobile Suica 平台开发、Suica Welcome 游客触达和 JRE POINT 集成，而不要求预付工具本身直接独立变现的原因之一。

## Suica next-generation platform direction

JR East 已公开传达 Suica 的更长期平台方向，即走向一种同时支持历史 FeliCa 安全元件离线挥卡模型和新型服务器管理账户余额模型的 Suica。动因包括放松历史余额上限、支持更复杂的多发行人路由、更清晰地与智能手机原生轨道集成，并为铁路之外的跨模式出行产品（出租车、自行车共享、微出行等）创建基础。这个方向已有公开讨论，但完整运营架构仍在定义中；它是中期内日本预付方案结构变化中较重要的一项。

## Cross-issuer cooperation governance

10 IC 互通方案内的合作涉及多发行人治理，并不存在单一主导规则制定者：

| Governance dimension | How it works |
|---|---|
| 互通方案规则 | 十家发行人之间的行业协议；通过共识修订 |
| Cyberne 结算系统 | 由铁路行业伙伴运营；技术变更跨发行人协调 |
| 共同挥卡受理标准 | FeliCa 规格合规 + 方案规则扩展 |
| 零售商户互操作 | 逐发行人处理；发行人可根据互惠协议在其商户处接受其他发行人卡 |
| 新功能部署（移动、押金变化、到期规则） | 各发行人独立决定；方案层面新功能需要多发行人共识 |

这种基于共识的治理模式，是方案范围变更（例如将移动铁路推广到更多卡）往往分阶段推出而不是全方案同时推出的原因之一：Mobile Suica 比 Mobile PASMO 早 14  年；ICOCA Apple Pay 支持在 2023 到来。

## Related

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

- JR East：Suica 官方网站和 Mobile Suica 网站。
- PASMO Co Ltd：官方网站。
- JR West：ICOCA 官方网站。
- JR Hokkaido：Kitaca 网站。
- JR Central：TOICA 网站。
- Meitetsu / Nagoya City Transportation：manaca 网站。
- Nishitetsu：nimoca 网站。
- JR Kyushu：SUGOCA 网站。
- FSA：预付政策门户和第三方型预付发行人登记。
- METI：无现金支付政策门户。
- BOJ：支付和结算系统门户。
- FeliCa Networks：技术 / 公司页面。

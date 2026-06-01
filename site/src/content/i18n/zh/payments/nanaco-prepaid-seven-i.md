---
source: payments/nanaco-prepaid-seven-i
source_hash: 3474b1a3e75c4ec0
lang: zh
status: machine
fidelity: ok
title: "nanaco：Seven & i 集团便利店锚定预付电子货币"
translated_at: 2026-06-01T03:31:12.303Z
---
# nanaco：Seven & i 集团便利店锚定预付电子货币

## Wiki 路径

本条目位于[[payments/INDEX|payments index]]下，是 Seven & i 锚定的预付发行方页面，并与[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]]配合用于 FSA 登记视角、与[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]配合用于零售锚点正面对比。可与[[payments/waon-prepaid-aeon|WAON]]（AEON 对应物）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]（FeliCa 同类 scheme）和[[payments/famipay-valucreate-strategy|FamiPay]]（便利店码支付对应物）比较。发行方 / 集团锚点为[[JapanFG/seven-card-service|Seven Card Service]]（FSA 登记预付发行方）、[[JapanFG/seven-payment-service|Seven Payment Service]]（结算服务）、[[JapanFG/seven-bank|Seven Bank]]（集团银行轨道）和[[retail/seven-and-i-hd|Seven & i Holdings]]；积分整合路由至[[loyalty/japan-points-landscape|Japan points landscape]]用于 nanaco 积分经济。

## TL;DR

**nanaco** 是 Seven & i Holdings 集团的**便利店锚定预付电子货币**，在2007-04 推出，与 WAON 同期上线相呼应。它由[[JapanFG/seven-card-service|株式会社セブン・カードサービス]]发行（FSA 登记第三方 蜑肴鴛蠑乗髪謇墓焔谿ｵ 发行方，豕穂ｺｺ逡ｪ蜿ｷ 4010001088278, ，登记2007-02-22），运行在 **FeliCa** 非接触 IC 上，是**20,000+ 7-Eleven Japan 门店网络**以及 Ito-Yokado、Sogo & Seibu、Akachan Honpo、Denny's Japan 和大量集团外商户中占主导地位的预付电子货币。结算通过[[JapanFG/seven-payment-service|Seven Payment Service]]在[[banking/INDEX|Seven & i financial-services platform]]下进行，并与[[JapanFG/seven-bank|Seven Bank]]（集团银行轨道、ATM 充值）和繧ｻ繝悶Φ繧ｫ繝ｼ繝峨・繝励Λ繧ｹ信用卡联名卡的自动充值并行。nanaco繝昴う繝ｳ繝・忠诚度货币按1:1 转换为可消费余额，类似 WAON POINT 模型。

## 发行方与运营结构

| 维度 | 解读 |
|---|---|
| 品牌所有方 | Seven & i Holdings |
| FSA 记录预付发行方 | [[JapanFG/seven-card-service\|株式会社セブン・カードサービス]] |
| 法人编号 | 4010001088278 |
| FSA 登记日期 | 2007-02-22 |
| 结算 / 支付服务 | [[JapanFG/seven-payment-service\|株式会社セブン・ペイメントサービス]] |
| 集团银行轨道 | [[JapanFG/seven-bank\|株式会社セブン銀行]]（ATM 充值、自动充值） |
| 集团卡轨道 | 繧ｻ繝悶Φ繧ｫ繝ｼ繝峨・繝励Λ繧ｹ（Visa / JCB 联名，内嵌 nanaco IC） |
| 上线年份 | 2007-04 |
| 技术 | FeliCa 非接触 IC |
| 移动轨道 | Mobile nanaco（Osaifu Keitai）、nanaco App、Apple Pay（通过 Wallet 整合，设备有限） |
| 充值上限 | 每张卡 ﾂ･50,000  |
| 单次充值上限 | 典型为 ﾂ･29,000  |

## 法律基础：蜑肴鴛蠑乗髪謇墓焔谿ｵ（第三方预付支付工具）

与[[payments/waon-prepaid-aeon|WAON]]一样，nanaco 依据[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]]第3 章预付框架登记为**隨ｬ荳芽・梛蜑肴鴛蠑乗髪謇墓焔谿ｵ**。主要监管后果：

- [[JapanFG/seven-card-service|Seven Card Service]]在 FSA（髢｢譚ｱ雋｡蜍吝ｱ）登记，并出现在[[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]]中。
- 半年一次的**未使用余额保证金**义务：当超过阈值（ﾂ･10M）时，将未使用余额的一半向法务局供托（萓幄ｨ・）作为用户资金保护。
- 除发行终止外，**不得向原付款人退款**。
- **沉淀失效收益**会对休眠 / 遗失卡的发行方损益产生贡献；Seven & i 在集团 IR 中披露余额数字。
- AML / KYC 例外适用于 PSA 预付阈值下的产品。

与[[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]]框架在2023 PSA 修正下的结构差异，使 nanaco 保持在预付通道：价值只能在商店使用，不能点对点转移。

## 受理范围

| 层级 | 描述 | 示例 |
|---|---|---|
| 内层 - Seven & i 集团 | 集团便利店和零售锚点 | 7-Eleven Japan（约21,000 店）、Ito-Yokado、Sogo & Seibu、Akachan Honpo、Denny's Japan、York Mart、York Benimaru |
| 中层 - 集团银行轨道 | 通过 Seven Bank 和 Seven Card 进行 ATM 充值、自动充值 | [[JapanFG/seven-bank\|Seven Bank]] ATM（全国，包括非 Seven 地点）、Seven Bank 账户自动充值 |
| 外层 - 跨商户 | 接受 nanaco 轻触支付的非集团商户 | Tower Records（曾经）、加油站、药妆店、快餐、Pia 票务柜台 |
| 移动轨道 | Apple Pay / Osaifu Keitai 全球 FeliCa 终端 | 任意接受 FeliCa 的 POS |
| 税费 / 公共事业支付 | nanaco 特有的票据支付用例 | 通过7-Eleven 繝ｬ繧ｸ使用 nanaco 支付所得税 / 固定资产税等 謇戊ｾｼ逾ｨ，这是 nanaco 独有流程 |

**税费 / 公共事业票据支付**是 nanaco 特有且结构上重要的流程：因为7-Eleven 在收银台受理公共款项 謇戊ｾｼ逾ｨ（纳税通知、公用事业账单），且 nanaco 可在那里使用，纳税人可以在这些支付中获得 nanaco繝昴う繝ｳ繝・。[[payments/waon-prepaid-aeon|WAON]]没有等价流程，因为 AEON 不受理同样范围的公共事业 / 税费 謇戊ｾｼ逾ｨ。

## KPI 快照

| 指标 | 解读（最近公开披露） |
|---|---|
| 累计发行卡 / ID | 数千万量级；Seven & i 邨ｱ蜷亥ｱ蜻頑嶌报告按卡数计 nanaco 累计发行位居3 零售预付品牌前列 |
| 年交易笔数 | 便利店收银台轻触交易笔数的一线零售预付品牌（高频锚点） |
| 7-Eleven 门店覆盖 | 全国约21,000 店（均接受 nanaco） |
| 集团受理点 | 很大 - 覆盖 Seven & i 完整零售版图 |
| nanaco繝昴う繝ｳ繝・发行 | 7-Eleven 典型基础返还率为 ﾂ･200 =1 点 |

具体期间交易金额 / 笔数披露在[[retail/seven-and-i-hd|Seven & i HD]]分部 IR 和[[JapanFG/seven-card-service|Seven Card Service]]报告中；FinWiki 引用 IR 文件，而不复写季度数字。

## 战略：便利店无现金锚点

1. **便利店收银速度** - FeliCa 轻触在高峰吞吐量7-Eleven 收银台比码支付 QR 扫码更快；nanaco 保持难以被码支付替代的结构性速度优势。
2. **税费 / 公共事业 謇戊ｾｼ逾ｨ 无现金转化** - 通过7-Eleven 收银台受理，独特地把税费 / 公共事业现金支付转为无现金。
3. **集团金融服务交叉销售** - nanaco 使用导入[[JapanFG/seven-bank|Seven Bank]]开户和 Seven Card 信用卡发行。
4. **入境游客受理** - Mobile nanaco / Apple Pay 覆盖在日本的海外 iPhone 用户；结合 Seven & i 高密度城市门店网络，这是有意义的游客无现金通道。
5. **与码支付共存** - Seven & i 集团也在7-Eleven 收银台接受 PayPay、讌ｽ螟ｩ繝壹う、d謇輔＞、au PAY；nanaco 是多轨道受理中的**集团忠诚度锚定**轨道，而非单纯码支付竞争者。

2019 7pay 事件（短命的7pay 码支付产品因安全失败而撤回）强化了 Seven & i 将 nanaco 定位为耐久集团无现金锚点、而不是重新尝试 Seven 品牌码支付的策略。

## 相关

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/waon-prepaid-aeon]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[JapanFG/seven-card-service]]
- [[JapanFG/seven-payment-service]]
- [[JapanFG/seven-bank]]
- [[retail/seven-and-i-hd]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 来源

- nanaco 官方网站（nanaco-net.jp）。
- Seven Card Service 公司网站（7card.co.jp）。
- Seven & i Holdings 公司网站（7andi.com）- 集团结构和 IR。
- Seven-Eleven Japan 公司网站（sej.co.jp）- 门店网络和收银受理。
- Seven Bank 公司网站（7bank.co.jp）- 集团银行轨道和 ATM 充值。
- FSA，`daisan.xlsx` - 第三方预付工具发行方登记清单（Seven Card Service 条目，登记2007-02-22）。
- FSA 预付支付工具政策页面。
- METI 无现金政策页面。

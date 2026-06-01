---
source: payments/japan-payment-fraud-incident-timeline-2023-2025
source_hash: 274d3b39b3921d01
lang: zh
status: machine
fidelity: ok
title: "日本支付欺诈事件时间线 2023-2025"
translated_at: 2026-06-01T03:31:12.239Z
---

# 日本支付欺诈事件时间线 2023-2025

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下，是按时间排列的事件与执法页面；它与 [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] 配套，用于 J-CSC 指引 6.0 / 6.1  控制框架；与 [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud control]] 配套，用于银行轨道特定欺诈面；与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配套，用于四分类语境。可与 [[payments/japan-card-issuer-acquirer-processor-split|card role split]] 比较，了解各事件类别中由哪一方承担 chargeback 风险；与 [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] 比较 PSP 入驻失败案例；与 [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] 比较 pay-later 套现滥用。卡品牌语境见 [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]]、[[JapanFG/mastercard-japan|Mastercard Japan]]、[[JapanFG/jcb|JCB]]；主要发卡方锚点为 [[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]。

## TL;DR

日本 2023-2025  期间的支付欺诈由**四个汇合的攻击面**定义：(1) 信用卡 EC 欺诈，泄露 / 钓鱼取得的卡号被用于线上商户，推动 MET 6.0 / 6.1  J-CSC 指引收紧，并从 2025-03 起要求 EC 卡支付**强制 EMV 3-DS**；(2) **smishing 驱动的银行 API 未授权指令**，受害者收到冒充金融机构的 SMS，在钓鱼网站输入凭证，随后通过看似合法的银行 app 或银行 API 借记损失资金；(3) 横跨 PayPay / d払い / au PAY / 楽天ペイ 的**码支付未授权使用案例**，常与 credential stuffing 或社会工程导致的账户接管有关；(4) **PSP 商户入驻失败**，不足的 KYM（know-your-merchant）控制使欺诈商户能够取得卡交易并在 chargeback 前消失。FSA、METI、National Police Agency 和 Japanese Bankers Association 协调公众警示活动；累计监管回应为控制标准以及商户 / PSP 入驻严谨度设定了明显更高的 2025  基线。

## 总体欺诈损失语境

这一时期日本支付欺诈损失的总体图景必须谨慎解读，因为每一类都处于不同统计制度下：

| 来源 | 范围 | 模式 |
|---|---|---|
| Japan Credit Association | 信用卡欺诈损失（发卡方侧） | 记录年度损失金额；非面对面（EC）欺诈在整个期间是主导类别 |
| National Police Agency cybercrime statistics | 钓鱼、smishing、未授权账户访问 | 期间钓鱼相关网络犯罪报告显著增加 |
| Japanese Bankers Association | 网上银行未授权转账 | 定期发布 smishing 驱动的未授权转账浪潮警示 |
| FSA Newsroom | 对运营方的行政处分 | 银行、发卡方、PSP 和预付发行方出现多起执法事件 |
| Consumer Affairs Agency | 消费者警示 | 对钓鱼、假商户、BNPL 套现和码支付社会工程骗局定期提醒 |

图景是：通过 2023  和 2024, ，**日本卡欺诈损失在 EC 渠道达到历史高位**，且 **smishing 驱动的银行账户入侵显著上升**；二者共同推动 J-CSC 指引收紧，以及银行 API 侧认证 / 设备绑定执法。

## 2023 events

| 事件类别 | 发生了什么 | 监管 / 行业回应 |
|---|---|---|
| EC 卡欺诈损失持续高位 | 商户泄露和钓鱼路径导致卡号被盗，推动 EC 未授权使用量持续；非面对面渠道仍是主要欺诈损失类别 | METI / Japan Credit Association 推动所有 EC 卡受理强制 EMV 3-DS；J-CSC 指引 5.0 → 6.0  修订管线加速 |
| 针对主要银行的 smishing 浪潮 | 冒充 MUFG、SMBC、Mizuho、Rakuten Bank 等的 SMS 钓鱼把受害者引向凭证收集网站；随后发生未授权银行 app 或网上银行转账 | Japanese Bankers Association 持续发布公众警示；FSA 推动银行强化设备绑定、app 安装验证和高额转账认证 |
| 码支付账户接管案例 | 通过 credential stuffing 和 SIM-swap 路径的账户接管尝试，引发多个钱包中的未授权码支付消费 | 钱包运营方收紧设备变更再认证和高额交易 OTP 执行 |
| FSA 执法行动 | 针对银行、发卡方和预付发行方 AML / 欺诈控制缺陷的定期行政处分 | 按运营方发布公开 newsroom release |

## 2024 events

| 事件类别 | 发生了什么 | 监管 / 行业回应 |
|---|---|---|
| 银行 API 未授权指令浪潮 | 出现一个特定攻击面：smishing 驱动的钓鱼将受害者导向假银行登录页，凭证随后被用于发出看似合法的银行 API 转账指令，或在攻击者控制设备上激活银行 app | Japanese Bankers Association 发布更高级别警示；参与银行强化设备绑定、生物识别 step-up，以及新设备启用转账的 24 小时冷静期 |
| Smishing 攻击面扩大 | 冒充税务机关、配送服务和政府机构（除金融机构外）的 SMS 把受害者导向假支付页面；数量和创意显著增加 | National Police Agency 公开统计确认上升；移动运营商过滤有所改善但未消除攻击面 |
| 发卡方泄露事件 | 特定发卡方案例涉及持卡人数据被攻破，导致强制换卡和 chargeback 浪潮 | J-CSC 指引 6.0  发布，收紧非保存规则并扩大漏洞扫描义务 |
| EMV 3-DS 部署加速 | EC 商户在 2025-03  强制要求前加快 EMV 3-DS 部署；中型商户和 PSP 面临执行压力 | METI / J-Credit 指导材料和 J-CSC 6.0 / 6.1  时间线推动部署 |
| PSP 商户入驻失败 | 出现 PSP 在 KYM 控制不足下接入欺诈商户的案例；商户为虚构商品接受卡交易，在 chargeback 裁定前消失，使收单方 / PSP / 发卡方面临损失 | METI 收紧 PSP / 商户签约方义务；PSP 行业强化内部 KYM 框架 |

## 2025 events

| 事件类别 | 发生了什么 | 监管 / 行业回应 |
|---|---|---|
| EC 卡支付强制 EMV 3-DS | 自 2025-03,  起，EC 卡受理必须在 J-CSC 指引 6.0 / 6.1  框架下使用 EMV 3-DS 认证 | 全行业合规压力；不合规 EC 商户面临失去卡支付受理的风险 |
| 银行 API smishing 持续 | 尽管认证收紧，银行 API 未授权指令攻击面延续到 2025 ；攻击技术演化（包括在钓鱼网站捕获后用 AI 生成语音电话跟进） | 银行和 FSA 持续发布公众警示；跨银行协同监测加强 |
| 码支付欺诈案例 | 针对 PayPay、d払い、au PAY、楽天ペイ 钱包的账户接管和社会工程案例持续；部分案例涉及对同一受害者的跨钱包协调攻击 | 钱包运营方继续强化设备绑定和高额交易控制 |
| FSA 对多家运营方执法 | 针对银行、发卡方、PSP 和预付发行方控制缺陷的执法持续 | 按运营方发布公开 newsroom release |
| 冒充税务机关 / 政府的 smishing | 在税务截止窗口附近数量尤其高；面向消费者的警示升级 | Consumer Affairs Agency 和 NPA 持续开展公众警示活动 |

## 跨领域攻击模式

| 模式 | 运作方式 | 目标机制 |
|---|---|---|
| Smishing → 钓鱼网站凭证收集 | SMS 冒充可信品牌；受害者在攻击者控制页面输入凭证 | 银行账户、卡账户、钱包账户 |
| SMS 一次性代码拦截 | 攻击者诱导受害者分享 SMS OTP，或通过 SIM-swap 拦截 OTP | 银行 API、卡 3-D Secure、钱包 OTP |
| 通过远控恶意软件绕过设备绑定 | 受害者安装恶意软件，使攻击者可操作受害者设备 | 银行 app、钱包 app |
| 通过商户泄露或 skimmer 收集卡号 | 卡号从 EC 商户入侵或 POS skimmer 中外泄；被用于其他商户 | EC 卡支付（主要） |
| 通过 credential stuffing 账户接管 | 使用其他网站泄露的复用凭证尝试登录钱包 / 卡门户 | 钱包、卡门户 |
| 假商户 PSP 入驻 | 欺诈者通过薄弱 KYM；为假商品接受卡交易；在 chargeback 解决前潜逃 | 卡类别；PSP / 收单方承担损失 |
| 通过 BNPL / pay-later 滥用套现 | 欺诈者用被盗身份开立 pay-later 账户；购买现金等价物后违约 | BNPL、码支付 pay-later、分期 |

## 损失由谁承担

| 攻击面 | 主要损失承担方 |
|---|---|
| 无 3-D Secure 的卡 EC 欺诈 | 商户（chargeback 责任） |
| 已成功完成 3-D Secure 的卡 EC 欺诈 | 发卡方（责任转移） |
| 消费者账户上的银行 API 未授权借记 | 银行（消费者无过失时按 預金者保護法 框架） |
| 码支付未授权使用 | 钱包运营方按 T&C；视个案证据而定 |
| 发卡方泄露换卡 | 发卡方 |
| PSP 商户入驻失败 | PSP / 收单方 / 有时品牌承担部分 |
| Smishing 导致凭证披露 | 如被认定为自愿披露，往往由消费者承担；在复杂冒充案例中，银行已采用更灵活解释 |

**责任转移动态**很重要，因为它塑造投资激励：当发卡方承担剩余损失时，会投资欺诈监测和 3-D Secure 采用；当商户承担损失时，会投资商户侧反欺诈筛查；当消费者承担损失时，会产生监管和政治压力，要求金融服务运营方修订框架。2023-2025  期间三种动态同时发生。

## 监管回应架构

日本对 2023-2025  欺诈的监管回应分布在多个机构和自律组织之间：

| 机构 | 角色 |
|---|---|
| FSA (Financial Services Agency) | 银行 / 发卡方 / 预付发行方 / 钱包运营方监管和执法 |
| METI (Ministry of Economy, Trade and Industry) | Installment Sales Act 执行；卡支付 / EC 商户安全指引（与 J-Credit） |
| Japan Credit Association | 卡支付安全指引（J-CSC）、行业协调 |
| National Police Agency | 网络犯罪统计、smishing / phishing 调查、刑事执法 |
| Consumer Affairs Agency | 消费者警示、公众提醒 |
| Japanese Bankers Association | 银行侧协调、公众警示 |
| Payment Services Act PSP and electronic payment agency framework | 银行 API 和账户信息访问规则 |

跨机构协调正在趋紧 — 2024-2025  的多数重大事件都会在数日内触发 FSA、NPA 和相关行业组织的协同公众警示。

## 消费者保护框架比较

不同攻击面上的保护框架存在实质差异，这也是同一消费者会因欺诈事件使用的机制不同而面临截然不同结果的原因之一：

| 机制 | 主要消费者保护杠杆 | 强度 |
|---|---|---|
| 卡 EC（带 3-D Secure） | 品牌 chargeback 规则 + Installment Sales Act 抗弁の接続（分期合同） | 强 |
| 卡 EC（无 3-D Secure） | 品牌 chargeback 规则；商户责任转移 | 强，但取决于商户路径 |
| 银行 API 未授权借记 | 消费者非重大过失时的 預金者保護法 框架 | 适用时强 |
| 经消费者凭证披露导致银行 app 登录被攻破 | 银行 T&C 以及 預金者保護法 下的个案解释 | 可变 — 取决于消费者披露内容 |
| 码支付未授权使用 | 钱包运营方 T&C；无法定 chargeback 框架 | 弱于卡 / 银行 |
| 预付电子货币未授权使用 | 发行方 T&C；仅在发行终止时退款 | 最弱 |
| BNPL / pay-later 身份欺诈 | 提供方 T&C + 一般消费者信贷框架 | 可变 |

攻击面之间的差异对运营方形成**结构性压力，要求其把 T&C 对齐到最强框架**（卡 / 银行）以避免消费者信任缺口；但对码支付和预付攻击面而言，这种对齐并无法定强制，因此不同运营方之间仍不均衡。

## Smishing 运作机制

2024-2025  的 smishing 攻击面一直是消费者侧损失的持续来源。理解其机制很重要，因为运营方侧可以检测或阻断的控制取决于攻击链的哪一步被瞄准：

| 攻击链步骤 | 运营方侧检测 / 控制面 |
|---|---|
| 1. 攻击者收集电话号码 | 运营方范围外；移动运营商监测只能部分覆盖 |
| 2. SMS 冒充银行 / 卡 / 钱包 / 政府发送 | 移动运营商过滤（运营商级）；SMS 发送方认证标准 |
| 3. 受害者点击链接，进入钓鱼网站 | URL 黑名单协调；消费者浏览器警示 |
| 4. 受害者输入凭证 | 运营方侧无法在此步骤检测；钓鱼网站冒充运营方 |
| 5. 攻击者使用凭证登录运营方系统 | **运营方检测点 1**：设备绑定、IP / 地点异常、行为监测 |
| 6. 攻击者发起高额交易 | **运营方检测点 2**：交易模式监测、step-up 认证 |
| 7. 资金流向攻击者控制的 mule 账户 | **运营方检测点 3**：收款账户模式、信用侧 AML / CFT 监测 |
| 8. Mule 提取资金 | 提款点的银行 / 钱包 AML 监测 |

运营方侧的主要杠杆点是步骤 5-7。大型银行的 2024-2025  强化措施集中在设备绑定（防止步骤 5  在没有二次验证的新设备上发生）和交易模式监测（当模式偏离持卡人 / 账户持有人基线时延迟 / 阻断步骤 6 ）。持续挑战是，**来自受害者控制设备的看似合法会话**（攻击者通过恶意软件或社会工程电话远程进入受害者设备）会绕过设备绑定控制。

## Related

- [[payments/INDEX]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/jcb]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/paypay]]
- [[JapanFG/au-payment]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Newsroom (令和5 / 令和6 / 令和7); ordinary public warnings.
- Japan Credit Association: security guideline document page; J-CSC 6.0 publication PDF.
- METI: card security guideline revision press release (2024-03).
- National Police Agency: cybercrime statistics portal.
- Consumer Affairs Agency: internet / payment trouble warning portal.
- Payments Japan Association: publications index.
- Japanese Bankers Association: news / public-warning archive.

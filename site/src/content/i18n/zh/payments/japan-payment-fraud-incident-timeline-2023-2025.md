---
source: payments/japan-payment-fraud-incident-timeline-2023-2025
source_hash: dcaeb8256a115a81
lang: zh
status: machine
fidelity: ok
title: "日本支付欺诈事件时间线 2023-2025"
translated_at: 2026-06-19T06:09:18.065Z
---

# 日本支付欺诈事件时间线 2023-2025

## Wiki 路径

本条目位于 [[payments/INDEX|payments index]] 之下，是按时间顺序排列的事件与执法页面，与 [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] 配对以了解 J-CSC 指南 6.0 / 6.1  的控制框架，与 [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud control]] 配对以了解银行轨道特定的欺诈界面，与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配对以了解四类背景。请与 [[payments/japan-card-issuer-acquirer-processor-split|card role split]] 比较以了解每个事件类别中哪一方承担拒付风险，与 [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] 比较以了解 PSP 入网失败案例，与 [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] 比较以了解经由后付的套现滥用。卡品牌背景是 [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]、[[payment-firms/mastercard-japan|Mastercard Japan]]、[[card-issuers/jcb|JCB]]; 主要发卡方锚点是 [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]。

## TL;DR

日本支付欺诈中 2023-2025  这一时期由 **四个交汇的界面**所定义: (1) 由泄露 / 钓鱼所得卡号在线商户使用所驱动的信用卡 EC 欺诈，导致 METI 6.0 / 6.1  J-CSC 指南收紧，以及自 2025-03 起对 EC 卡支付的 **EMV 3-DS 强制化** 要求; (2) **短信钓鱼主导的银行 API 未授权指令**，受害者收到伪称来自金融机构的短信，在钓鱼网站输入凭证，并经由看似合法的银行 App 或银行 API 扣款而损失资金; (3) 横跨 PayPay / d払い / au PAY / 楽天ペイ 的 **码支付未授权使用案例**，常与凭证填充或社会工程导致的账户接管相关; (4) **PSP 商户入网失败**，不充分的 KYM（know-your-merchant）控制使欺诈商户得以受理卡交易并在拒付前消失。FSA、METI、警察厅与全国银行协会协调了公共警告活动; 累积的监管响应就控制标准与商户 / PSP 入网严格度两方面都设定了一个急剧抬高的 2025 基线。

## 欺诈损失汇总背景

这一时期日本支付欺诈损失的汇总图景需要谨慎解读，因为每个类别都在不同的统计制度下报告:

| Source | Scope | Pattern |
|---|---|---|
| 日本信用协会 | 信用卡欺诈损失（发卡方侧）| 记录年度损失额; 非面对面（EC）欺诈在整个时期为主导类别 |
| 警察厅网络犯罪统计 | 钓鱼、短信钓鱼、未授权账户访问 | 整个时期钓鱼相关网络犯罪报告大幅增加 |
| 全国银行协会 | 网上银行未授权转账 | 就短信钓鱼主导的未授权转账浪潮发出定期警报 |
| FSA Newsroom | 对运营商的行政处分 | 横跨银行、发卡方、PSP、预付发行人的多起执法事件 |
| 消费者厅 | 消费者警告 | 就钓鱼、假商户、BNPL 套现及码支付社会工程方案发出定期警报 |

图景是: **日本卡欺诈损失在 EC 渠道达到历史性高位**（贯穿 2023  与 2024, ）以及 **短信钓鱼主导的银行账户入侵大幅上升**，二者共同驱动了 J-CSC 指南收紧与银行 API 侧的认证 / 设备绑定执法。

## 2023 事件

| Event class | What happened | Regulatory / industry response |
|---|---|---|
| EC 卡欺诈损失持续高企 | 经由商户泄露与钓鱼途径的卡号泄露驱动了持续的 EC 未授权使用量; 非面对面渠道仍为主导欺诈损失类别 | METI / 日本信用协会转向对全部 EC 卡受理强制 EMV 3-DS; J-CSC 指南 5.0 → 6.0  修订管线加速 |
| 针对主要银行的短信钓鱼浪潮 | 伪称 MUFG、SMBC、瑞穗、乐天银行 等的基于短信的钓鱼将受害者引导至凭证采集站点; 随后发生未授权的银行 App 或网上银行转账 | 全国银行协会发出持续的公共警告; FSA 推动银行强化设备绑定、App 安装验证与高额转账认证 |
| 码支付账户接管案例 | 经由凭证填充与 SIM 卡交换途径的账户接管尝试在多个钱包中引发未授权码支付支出 | 钱包运营商收紧设备变更再认证与高额交易 OTP 强制 |
| FSA 执法行为 | 就 AML / 欺诈控制缺陷对银行、发卡方、预付发行人的定期行政处分 | 按运营商发布公共新闻室通稿 |

## 2024 事件

| Event class | What happened | Regulatory / industry response |
|---|---|---|
| 银行 API 未授权指令浪潮 | 出现了一个特定界面: 短信钓鱼驱动的钓鱼将受害者重定向至假银行登录页，凭证随后被用于在攻击者控制的设备上发出看似合法的银行 API 转账指令或银行 App 激活 | 全国银行协会发出升高的警报; 参与银行强化设备绑定、生物识别升级，以及对新设备转账启用施加 24 小时冷却期 |
| 短信钓鱼界面扩张 | 伪装税务当局、配送服务与政府机构（除金融机构外）的短信将受害者引导至假支付屏幕; 数量与创造性大幅增加 | 警察厅公共统计确认了上升; 移动运营商过滤改善但未消除该界面 |
| 发卡方泄露事件 | 特定发卡方案例涉及持卡人数据泄露，导致强制换卡与拒付浪潮 | J-CSC 指南 6.0  连同收紧的非留存规则与扩大的漏洞扫描义务一并公布 |
| EMV 3-DS 部署加速 | EC 商户在 2025-03  强制化之前加速 EMV 3-DS 部署; 中型商户与 PSP 面临执行压力 | METI / J-Credit 指引材料与 J-CSC 6.0 / 6.1  时间线推动部署 |
| PSP 商户入网失败 | 出现 PSP 在不充分的 KYM 控制下为欺诈商户入网的案例; 商户为虚构商品受理卡交易，在拒付裁定前消失，使收单方 / PSP / 发卡方承担损失 | METI 收紧 PSP / 商户缔约方义务; PSP 行业收紧内部 KYM 框架 |

## 2025 事件

| Event class | What happened | Regulatory / industry response |
|---|---|---|
| EC 卡支付强制 EMV 3-DS | 自 2025-03,  起，EC 卡受理在 J-CSC 指南 6.0 / 6.1  框架下要求 EMV 3-DS 认证 | 行业范围的合规压力; 不合规的 EC 商户面临失去卡支付受理的风险 |
| 银行 API 短信钓鱼继续 | 尽管认证收紧，银行 API 未授权指令界面仍持续进入 2025 ; 攻击者手法演化（包括对钓鱼站点捕获的 AI 生成语音通话跟进）| 银行与 FSA 继续公共警报; 协调的跨行监控得到强化 |
| 码支付欺诈案例 | 针对 PayPay、d払い、au PAY、楽天ペイ 钱包的账户接管与社会工程案例继续; 部分案例涉及对同一受害者的协调跨钱包攻击 | 钱包运营商继续强化设备绑定与高额交易控制 |
| 针对多个运营商的 FSA 执法 | 就控制缺陷对银行、发卡方、PSP、预付发行人的执法继续 | 按运营商发布公共新闻室通稿 |
| 税务当局 / 政府冒充短信钓鱼 | 尤其在纳税截止窗口前后量级升高; 面向消费者的警告升级 | 消费者厅与警察厅继续公共警告活动 |

## 跨领域攻击模式

| Pattern | How it works | Targeted scheme |
|---|---|---|
| 短信钓鱼 → 钓鱼站点凭证采集 | 短信冒充可信品牌; 受害者在攻击者控制的页面输入凭证 | 银行账户、卡账户、钱包账户 |
| 短信一次性验证码拦截 | 攻击者说服受害者分享短信 OTP，或使用 SIM 卡交换拦截 OTP | 银行 API、卡 3-D Secure、钱包 OTP |
| 经由远程控制恶意软件绕过设备绑定 | 受害者安装恶意软件，使攻击者得以操作受害者的设备 | 银行 App、钱包 App |
| 经由商户泄露或盗刷器采集卡号 | 卡号从 EC 商户泄露或 POS 盗刷器外泄; 在其他商户重复使用 | EC 卡支付（主要）|
| 经由凭证填充的账户接管 | 来自其他站点泄露的重用凭证针对钱包 / 卡门户尝试 | 钱包、卡门户 |
| 假商户 PSP 入网 | 欺诈者通过薄弱的 KYM; 为假货受理卡交易; 在拒付解决前潜逃 | 卡类别; PSP / 收单方承担损失 |
| 经由 BNPL / 后付滥用的套现 | 欺诈者使用盗用身份开立后付账户; 在等价现金购买后违约 | BNPL、码支付后付、分期 |

## 谁承担损失

| Surface | Primary loss bearer |
|---|---|
| 无 3-D Secure 的卡 EC 欺诈 | 商户（拒付责任）|
| 成功完成 3-D Secure 的卡 EC 欺诈 | 发卡方（责任转移）|
| 对消费者账户的银行 API 未授权扣款 | 银行（消费者无过失时，在 预金者保護法 框架下）|
| 码支付未授权使用 | 按 T&C 的钱包运营商; 因个案证据而异 |
| 发卡方泄露换卡 | 发卡方 |
| PSP 商户入网失败 | PSP / 收单方 / 有时由品牌吸收一部分 |
| 短信钓鱼主导的凭证披露 | 若被认定为自愿披露则常为消费者; 在精巧冒充案例中银行已适用更灵活的解释 |

**责任转移动态**之所以重要，是因为它塑造投资激励: 当发卡方承担剩余损失时，他们投资于欺诈监控与 3-D Secure 采用; 当商户承担损失时，他们投资于商户侧反欺诈筛查; 当消费者承担损失时，要求金融服务运营商修订框架的监管与政治压力上升。2023-2025  时期同时见到了这三种动态在运转。

## 监管响应架构

针对 2023-2025  欺诈的日本监管响应横跨多个机构与自律团体分层:

| Body | Role |
|---|---|
| FSA（金融厅）| 银行 / 发卡方 / 预付发行人 / 钱包运营商的监督与执法 |
| METI（经济产业省）| 割赋销售法的施行; 卡支付 / EC 商户安全指南（与 J-Credit 共同）|
| 日本信用协会 | 卡支付安全指南（J-CSC）、行业协调 |
| 警察厅 | 网络犯罪统计、短信钓鱼 / 钓鱼侦查、刑事执法 |
| 消费者厅 | 消费者警告、公共警报 |
| 全国银行协会 | 银行侧协调、公共警告 |
| 资金结算法的 PSP 与电子支付代理框架 | 银行 API 与账户信息访问规则 |

跨机构协调日益紧密 —— 2024-2025  的大多数重大事件在数日内触发了横跨 FSA、警察厅与相关行业团体的协调公共警报。

## 消费者保护框架比较

保护框架在各界面间实质性不同，这是同一消费者可能因欺诈事件中使用了哪个方案而面临非常不同结果的原因之一:

| Scheme | Primary consumer-protection lever | Strength |
|---|---|---|
| 卡 EC（有 3-D Secure）| 品牌拒付规则 + 对分期合同的割赋销售法 抗弁の接続 | 强 |
| 卡 EC（无 3-D Secure）| 品牌拒付规则; 商户责任转移 | 强但取决于商户路径 |
| 银行 API 未授权扣款 | 消费者非重大过失时的 预金者保護法 框架 | 适用时强 |
| 经由消费者凭证披露的银行 App 登录泄露 | 银行 T&C 与 预金者保護法 下的逐案解释 | 可变 —— 取决于消费者披露了什么 |
| 码支付未授权使用 | 钱包运营商 T&C; 无法定拒付框架 | 弱于卡 / 银行 |
| 预付电子货币未授权使用 | 发行人 T&C; 仅在停止发行时退款 | 最弱 |
| BNPL / 后付身份欺诈 | 提供商 T&C + 一般消费者信用框架 | 可变 |

各界面间的可变性产生 **促使运营商将 T&C 对齐至最强框架（卡 / 银行）的结构性压力** 以避免消费者信任落差，但这一对齐对码支付与预付界面而言并非法定要求，因此在各运营商间仍不均衡。

## 短信钓鱼运营机制

2024-2025  的短信钓鱼界面一直是消费者侧损失的持续来源。理解其机制之所以重要，是因为能检测或拦截它的运营商侧控制取决于攻击链的哪一步被定位:

| Attack chain step | Operator-side detection / control surface |
|---|---|
| 1. 攻击者采集电话号码 | 运营商范围之外; 移动运营商监控部分有效 |
| 2. 冒充银行 / 卡 / 钱包 / 政府的短信被发送 | 移动运营商过滤（运营商级）; 短信发送方认证标准 |
| 3. 受害者点击链接，着陆于钓鱼站点 | URL 黑名单协调; 消费者浏览器警告 |
| 4. 受害者输入凭证 | 运营商侧在此步无法检测; 钓鱼站点冒充运营商 |
| 5. 攻击者使用凭证登录运营商系统 | **运营商检测点 1**: 设备绑定、IP / 位置异常、行为监控 |
| 6. 攻击者发起高额交易 | **运营商检测点 2**: 交易模式监控、升级认证 |
| 7. 资金转移至攻击者控制的骡子账户 | **运营商检测点 3**: 收款账户模式、贷方侧的 AML / CFT 监控 |
| 8. 骡子将资金套现 | 提现点的银行 / 钱包 AML 监控 |

主要的运营商侧杠杆点是步骤 5-7。主要银行 2024-2025  的强化集中于设备绑定（在无二次验证的情况下阻止来自新设备的步骤 5 ）与交易模式监控（在模式偏离持卡人 / 账户持有人基线时延迟 / 阻止步骤 6 ）。持续的挑战在于 **来自受害者控制设备的看似合法的会话**（攻击者经由恶意软件或社会工程通话远程进入受害者设备的情形）绕过设备绑定控制。

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
- [[card-issuers/jcb]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/aeon-financial-service]]
- [[payment-firms/paypay]]
- [[payment-firms/au-payment]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Newsroom (令和5 / 令和6 / 令和7); ordinary public warnings.
- Japan Credit Association: security guideline document page; J-CSC 6.0 publication PDF.
- METI: card security guideline revision press release (2024-03).
- National Police Agency: cybercrime statistics portal.
- Consumer Affairs Agency: internet / payment trouble warning portal.
- Payments Japan Association: publications index.
- Japanese Bankers Association: news / public-warning archive.

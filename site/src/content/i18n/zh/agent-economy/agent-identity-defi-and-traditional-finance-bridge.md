---
source: agent-economy/agent-identity-defi-and-traditional-finance-bridge
source_hash: f384c0641014dbb1
lang: zh
status: machine
fidelity: ok
title: "桥接 DeFi 与传统金融的 Agent 身份 · KYA、Skyfire、Lit PKP、mDL、MiCA、GENIUS"
translated_at: 2026-05-30T16:40:11.490Z
---
# 桥接 DeFi 与传统金融的 Agent 身份 · KYA、Skyfire、Lit PKP、mDL、MiCA、GENIUS

## TL;DR

2026 的 Agent 身份处于 **DeFi 原生原语**(智能合约钱包、链上认证、由 Lit PKP 阈值密钥或 session key 控制的 ERC-4337 / ERC-7702 钱包)与 **传统数字身份原语**(mDL ISO/IEC 18013-5 移动驾照、欧盟 eIDAS 2.0 + EUDI Wallet、美国 REAL ID + 州签发的移动 ID、WebAuthn / FIDO2 passkey)之间的 **桥梁** 上。正在形成的共识是一个 **分层身份模型**:**人类所有者** 持有传统 eID(eIDAS / mDL / passkey);**Agent** 携带一个派生的 **密码学认证**(由 Skyfire 式身份提供方绑定发行,或由 Lit PKP 阈值签名,或在 ERC-7702 下 EOA 委托 / 在 ERC-7715下限定 scope),并通过可验证凭证链回溯绑定到人类的主身份。**「Know Your Agent」(KYA) 框架** 是 KYC 在监管层面的拟议适配:不是「知道人类客户是谁」,而是知道 **谁部署了这个 Agent、在什么 scope 下、有什么撤销路径**。**GENIUS Act**(美国,2025-2026 稳定币框架)和 **MiCA**(欧盟稳定币监管,2024-2025全面生效)都有直接影响:稳定币发行方和加密资产服务提供商必须对 Agent 驱动的流程施行 KYC/AML,这就倒逼了 Agent 身份标准化的问题。FIDO Alliance 在 2026-Q2 将 Google 的 AP2 移交给 **AAIF (Agentic AI Identity Federation)**,很可能是这些线索汇聚的行业标准面。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]] for the protocol stack identity slots into, [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]] for the spend / revocation pairing, [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] for the canonical issuer-level identity case, [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] for the threshold-cryptography custody pattern, [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] and [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer]] for the wallet substrate, [[agent-economy/erc-7715-overview|ERC-7715 overview]] for the wallet permission scope, and [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] for the card-network Trusted Agent Protocol context. For regulatory framing see [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] and [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]] + [[fintech/mica-overview|MiCA overview]]. For traditional identity context see [[security/forensic-identity-anchor-chain|forensic identity anchor chain]].

## 「Agent 身份」究竟意味着什么 · 五个层

Agent 身份是一个五层复合体,在供应商营销中常被混为一谈:

1. **密码学密钥材料** — Agent 用来签署交易的私钥(或阈值分片)。可存于 Lit PKP、Privy MPC、Magic 嵌入式、Coinbase CDP,或作为从用户 EOA 委托而来的 session key。
2. **链上地址 / 智能合约账户** — 持有 Agent 资金、并作为 scoped 权限目标的公开地址或智能合约账户。通常是一个 ERC-4337 SCW 或一个 ERC-7702委托的 EOA。
3. **授权 scope** — Agent 被允许做什么、何时、带何种支出上限。编码于 ERC-7715 permissions、AP2 mandate VC,或 Skyfire 发行方账本记录中。
4. **身份认证** — 一份可验证凭证或签名声明,将 Agent 的密钥 / 地址绑定到一个现实所有者(人类用户、企业,或机构部署方)。示例:Skyfire 签发的 Agent 身份、Visa Trusted Agent Protocol 认证、AP2 mandate VC、AAIF 断言。
5. **监管绑定** — 部署方 / 发行方层面的法律 / KYC / AML 记录,将认证回连至一个受监管实体。这正是 KYA 框架运作之处。

每一层都可独立实现。一个生产级 Agent 身份堆栈从 **每一层各取一个** 并将它们组合。混淆它们会产生架构上的困惑。下面的矩阵切分了这个设计空间。

## Know Your Agent (KYA) 框架 · KYC 的监管适配

**KYA 框架** 是 2025-2026 的行业术语(尚未在任何地方成为正式监管规则),指 KYC 对自主 Agent 的监管适配。核心主张:

| KYC 问题 | KYA 等价物 |
|---|---|
| 开立此账户的自然人是谁? | 这个 Agent 的部署方(人类 / 企业 / 机构)是谁? |
| 有什么身份证明文件? | 什么身份认证链将 Agent 的密钥绑定到部署方? |
| 资金来源是什么? | 部署方的资金来源是什么,授权了什么支出上限 / scope? |
| 账户用途是什么? | Agent 的 scope 是什么(允许的商家、允许的动作、有时限)? |
| 持续监控 | 对 Agent 行为的持续监控 + 撤销基础设施 |

**KYA 支持者** 包括 FIDO Alliance(经由 AAIF 框架)、Skyfire(其明确将身份签发账本构建为 KYA 兼容系统)、Mastercard agentic-commerce 试点,以及 FATF VASP 指引(2024-2025 更新经由「Agent 的控制者是受监管方」这一原则间接讨论了「自动化 Agent」)。

**KYA 怀疑者** 认为 KYA 只是对部署方的 KYC + 普通支出监控;无需新的监管框架。来自 FSA、FCA、MAS 公开声明的 2026 迹象:怀疑者在原则层面占上风,但其运营要求(验证部署方 + 将 Agent 绑定到部署方 + 监控)其实正是支持者所倡导的。双方在实质上一致,在标签上分歧。

## Skyfire · 发行方层 Agent 身份(典型案例)

**Skyfire 的模型**:充当一个受监管的发卡平台(类似 Stripe Issuing 或 Marqeta),其中「持卡人」是一个自主 Agent。Skyfire:

- 在标准的银行赞助 BIN 项目牌照下,执行 **对部署方的 KYC**(人类用户或企业)
- **签发一个唯一的 Agent 身份**,绑定到一张带支出上限、商家类别限制和时间窗口的虚拟卡
- **运营账本**,以完整审计链记录每一笔 Agent 交易
- 在 PCI-DSS、AML 监控、OFAC 筛查和银行赞助方的整体牌照下 **充当受监管方**

Skyfire 的身份是 **发行方层**:Agent 在 Skyfire 的命名空间内拥有一个稳定身份,经由 Visa 通道向商家认证。商家无需集成任何新的身份堆栈 — 他们看到的是一笔正常的 Visa 虚拟卡交易。在卡被注资之前,KYA 等价的验证已在 Skyfire 端完成。

Skyfire 是 **早期 Visa Trusted Agent Protocol (VTAP)** 发行方,该协议标准化了 Agent 身份向选择验证(而非将其视为匿名卡流)的商家所呈现的密码学认证。完整案例见 [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]],VTAP 框架见 [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]。

## 链上 Agent 身份 · 三种模式

### 模式 1 · Lit PKP 阈值密钥身份

Agent 的身份 = 由 NFT 控制的 PKP,其阈值密钥分布于 Lit 网络节点之间。Agent 的权限受运行于 TEE 中的 **Lit Actions**(JavaScript 策略)约束。KYA 绑定通过让 PKP NFT 的铸造由一个本身绑定到已 KYC 部署方的地址(经由 Privy / Magic / Coinbase CDP)控制来实现。部署方可通过转移或销毁该 NFT 来授予或撤销 PKP 权限。

**优点**:无单服务器托管风险;链上透明;抗跨司法辖区。
**缺点**:Lit 网络吞吐量(100-500ms 签名延迟);相较中心化托管,SOC 2 审计故事更难讲。

见 [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]。

### 模式 2 · EOA + ERC-7702 + WebAuthn passkey 委托

用户现有的 EOA(MetaMask、硬件钱包)经由 **ERC-7702** 交易级限定授权委托给一个 Agent。用户对该委托的认证锚定于一个 **WebAuthn passkey**(FIDO2 / iOS / Android / Yubikey)。Agent 随后在被委托的 scope 内运作,直至到期。

**优点**:利用约 150M 现有 EOA 钱包基础(Pectra 后 2025-Q2);与银行已用于客户认证的现有 WebAuthn / FIDO 基础设施组合。
**缺点**:scope 表达力受 ERC-7702 + ERC-7715限制;密钥撤销是按委托而非按 Agent 的。

见 [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]] 和 [[agent-economy/erc-7715-overview|ERC-7715 overview]]。

### 模式 3 · 带 session key 的 ERC-4337 SCW

用户拥有一个智能合约钱包(Coinbase Smart Wallet、Safe、Biconomy、ZeroDev)。Agent 获得一个带 scoped 权限的 **session key**,在有界的时间 / 金额 / 商家集合内有效。session key 由 Agent 持有(可运行于用户设备或云端 TEE)。

**优点**:最成熟的链上模式(ERC-4337 自 2023起上线);scope 表达力高;撤销在链上且廉价。
**缺点**:要求用户拥有一个 SCW(目前并非主流钱包形态,尽管在增长);依赖 ERC-4337 bundler 基础设施。

基底见 [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] 和 [[systems/erc-4337-overview|ERC-4337 overview]]。

## 传统数字身份原语 · Agent 从何处桥接

### eIDAS 2.0 + EUDI Wallet(欧盟)

欧盟的 **eIDAS 2.0 条例**(2024)强制要求一个 **欧洲数字身份钱包(EUDI Wallet)**,所有欧盟成员国必须在 2026前向公民提供。EUDI Wallet 支持可验证凭证(W3C VC)、移动驾照(mDL ISO/IEC 18013-5)和合格电子签名。AP2 / AAIF mandate VC 被有意设计为与 EUDI Wallet 堆栈兼容 — 一位欧盟公民的 EUDI 签名 Agent mandate 可作为授权证明向商家出示。

### mDL (ISO/IEC 18013-5) · 移动驾照

移动驾照的国际标准,已在若干美国州(爱荷华、亚利桑那、马里兰等)、澳大利亚以及日益增多的欧盟地区部署。提供一个可向验证方出示的 **密码学身份**。对 Agent 身份而言,mDL 是候选的「锚」— 人类部署方的 mDL 经由一条 VC 链绑定到 Agent 的认证。

### WebAuthn / FIDO2 passkey

无密码认证的浏览器 / OS 标准。银行和金融科技公司广泛使用 passkey 进行客户认证。对 Agent 身份而言,FIDO2 passkey 被用作 **人类侧认证**,当用户授予 Agent scope 时(例如授权一个 ERC-7715 权限要求用户以 passkey 确认)。FIDO Alliance 接管 AP2 → AAIF(2026-Q2),将这一线索直接延伸至 Agent 身份标准化。

### 美国 REAL ID + 州移动 ID

美国没有欧盟式的中央数字身份,但出于联邦验证目的,REAL ID 合规自 2025 年 5 月起强制。若干州(亚利桑那、马里兰、爱荷华、夏威夷)正在签发 mDL 兼容的州移动 ID。碎片化的美国身份格局,使得 Agent 身份标准化在那里比在欧盟更难。

### 新加坡 SingPass、印度 Aadhaar / UPI、日本 My Number / マイナンバー

范围各异的国家数字身份计划。印度的 Aadhaar(1.3B+ 注册)+ UPI 账户聚合框架对 Agent 最友好:账户聚合架构本质上就与 Agent 驱动的访问相组合。新加坡 SingPass 兼容 FIDO。日本的 マイナンバー 经由 Mynaportal 在 FIDO + WebAuthn 集成上不断增长,但尚未为 Agent 委托用例构建结构。

## 监管影响 · GENIUS Act + MiCA

### 美国 GENIUS Act(2026 稳定币框架)

**GENIUS Act**(Guiding and Establishing National Innovation for U.S. Stablecoins)— 2025, 通过,实施规则 2025-2026 — 要求稳定币发行方对所有流程施行 BSA/AML 合规。对 Agent 身份的影响:

- 稳定币发行方(Circle、Paxos、Tether-US)必须对其接纳的各方进行 KYC
- 若一个 Agent 持有稳定币余额,该 Agent 的控制者必须由发行方或发行方的托管方进行 KYC
- Skyfire 发行方模型契合得很干净(Skyfire 是已 KYC 方,Agent 继承之)
- 链上 Lit PKP / ERC-4337 模型要求控制方 EOA / 部署方被 KYC,并对 Agent 的交易进行监控

更广框架见 [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]] 和 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 501 denylist mandate]]。

### 欧盟 MiCA(Markets in Crypto-Assets Regulation,2024-2025生效)

**MiCA** 对加密资产服务提供商(CASP)和稳定币发行方(EMT / ART 发行方)进行分类。MiCA 对 Agent 身份的影响:

- CASP 必须对加密转账施行 travel-rule + KYC,包括由 Agent 发起的转账
- 一个在以太坊上作为自主 EOA 运作的 Agent,在任何涉及 MiCA 受监管 CASP 的流程中,必须关联到一个已 KYC 的控制者
- **EUDI Wallet** + **mDL** + **W3C VC** 堆栈是欧盟为控制者认证链所偏好的基底
- AAIF(FIDO Alliance)正被设计为与 MiCA + eIDAS 2.0 要求兼容

见 [[fintech/mica-overview|MiCA overview]] 和 [[fintech/mica-cross-border-implications|MiCA cross-border implications]]。

### 日本 FSA · 居民边界身份

日本的稳定币监管(资金决济法,2023 年 6 月修订)要求稳定币发行方和中介识别持有人。对 Agent 而言,这意味着 Agent 的控制者必须在标准的 犯罪収益移転防止法(犯罪收益转移防止法)下被 KYC。FSA 尚未发布 Agent 专属指引,但运营层面的预期是 **部署方 KYC + Agent 活动监控**。居民边界见 [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]。

### FATF travel rule(全球)

FATF 建议 16 要求 VASP 在超过阈值的加密转账上传输发起方 + 受益方信息。对 Agent 而言,FATF 指引将 Agent 视为一个非自然人,出于 travel-rule 目的,其控制者是受监管方。见 [[fintech/fatf-travel-rule-overview|FATF travel rule overview]] 和 [[fintech/fatf-travel-rule-cross-border-stack|FATF travel rule cross-border stack]]。

## 身份认证矩阵 · 各方案如何映射监管槽位

| 方案 | 加密密钥 | 链上地址 | 授权 | 认证 | 监管绑定 | KYA 契合度 |
|---|---|---|---|---|---|---|
| **Skyfire(发行方模型)** | Skyfire 持有 + HSM | 虚拟卡 BIN | Skyfire 账本记录 | Skyfire 签发 + VTAP | 银行赞助 BIN 项目 | 高(内置) |
| **Lit PKP + 已 KYC 控制者** | Lit 阈值 | PKP NFT 控制 SCW | Lit Action 策略 | 来自 KYC 提供方的链下 VC | 部署方所受监管的任何框架 | 中(手动绑定) |
| **ERC-7702 + WebAuthn + AP2** | 用户 EOA | 用户 EOA + 委托 | ERC-7715 权限 | AP2 mandate VC + AAIF | 用户在发起 CASP / 银行的 KYC | 高(随 AAIF 成熟) |
| **ERC-4337 SCW + session key** | 用户 SCW + session key | SCW 地址 | session key scope | 如适用则发行方 VC | 用户在发起 CASP / 钱包的 KYC | 中高 |
| **Privy / Magic / CDP(中心化嵌入式)** | 托管方持有 MPC | 用户 SCW 地址 | 应用级 scope | 托管方 KYC | 托管方的监管封装 | 高(托管方作为受监管方) |

## 组合建议 · 2026

对于 **面向消费者的 Agent 支付**:在嵌入式钱包(Privy / Coinbase CDP / Magic)之上的模式 3 (ERC-4337 SCW + session key)是主导生产模式。KYA 绑定通过嵌入式钱包既有的 KYC 堆栈实现。对于想要显式 Agent 认证的商家,可叠加 AAIF / AP2 mandate VC。见 [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] 和 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]。

对于 **企业 / 机构 Agent 支付**:Skyfire(发行方模型)或 Stripe Agent Toolkit + Stripe Issuing 占主导。KYA 绑定内建于发行方的受监管活动中。见 [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]。

对于 **需要策略绑定托管的自主 / 长时运行 Agent**:模式 1 (Lit PKP + 阈值)是经生产验证的选择。KYA 绑定要求显式的部署方 KYC + 与 PKP NFT 控制方的关联。

对于 **需要 eIDAS 2.0 合规的欧盟居民**:模式 2 (ERC-7702 + WebAuthn + AP2 / AAIF + EUDI Wallet 集成)是发展轨迹;预计在 EUDI Wallet 部署完成后 2027 达到完全成熟。

## Sources

- Skyfire website and docs (skyfire.xyz)
- Lit Protocol website and developer docs (litprotocol.com)
- ERC-4337 EIP final (eips.ethereum.org/EIPS/eip-4337)
- ERC-7702 EIP final (eips.ethereum.org/EIPS/eip-7702)
- FIDO Alliance website and AAIF announcement (fidoalliance.org)
- W3C WebAuthn specification (w3.org/TR/webauthn)
- ISO/IEC 18013-5 mobile driving licence standard (iso.org)
- EU Digital Identity Wallet policy page (digital-strategy.ec.europa.eu)
- EU MiCA Regulation 2023/1114 (eur-lex.europa.eu)
- US GENIUS Act (congress.gov H.R. 4763)
- Visa agentic commerce page (visa.com)
- Mastercard press releases (mastercard.com)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act 501 denylist mandate]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border implications]]
- [[fintech/fatf-travel-rule-overview|FATF travel rule overview]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF travel rule cross-border stack]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
<!-- /wiki-links:managed -->

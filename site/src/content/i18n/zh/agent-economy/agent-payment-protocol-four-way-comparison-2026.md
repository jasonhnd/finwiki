---
source: agent-economy/agent-payment-protocol-four-way-comparison-2026
source_hash: 48a01f3fdc6893ba
lang: zh
status: machine
fidelity: ok
title: "Agent Payment Protocol 四方比较矩阵 2026 · AP2 / x402 / Skyfire / Nevermined 外加 ERC-7715 + Lit PKP"
translated_at: 2026-05-30T16:40:11.492Z
---

# Agent Payment Protocol 四方比较矩阵 2026 · AP2 / x402 / Skyfire / Nevermined 外加 ERC-7715 + Lit PKP

## TL;DR

- 2026 年中盘,agent 经济的支付协议格局已从「7协议混战」([[agent-economy/ai-agent-payment-protocols-overview|seven-protocol overview]])收敛为 4 条主轴 — **AP2**(Google + FIDO/AAIF 联盟)·**x402**(Coinbase + Cloudflare + AWS edge)·**Skyfire**(闭环 card-network issuer + Visa Trusted Agent)·**Nevermined**(compute / inference marketplace)
- 4 协议在 **transport / settlement asset / authorization / mainnet adoption / merchant target / regulatory model** 的 6 轴上差异化,不存在 winner-takes-all 的命题 — 各自解决不同层的课题(transport vs identity vs issuance vs metering)
- **辅助层**:**ERC-7715** 在 wallet 侧提供 `wallet_grantPermissions` scope 语义,**Lit Protocol PKP** 提供基于 threshold-cryptography 的 key custody。两者并非独立 rail,而是横向 plug-in
- 2026 mainnet 的实需图景:**x402 月 single-digit billion req**(Cloudflare + AWS facilitator GA)·**AP2 ~4 production pilots**(60+ consortium 但 production 稀疏)·**Skyfire Series A 后 ~$X00M annualized**(visa + card-network 闭环)·**Nevermined niche compute marketplace**
- 路线:[[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]](production readiness)·[[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]](long-term thesis)·本矩阵专注于 four-way feature comparison

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] for the broader seven-protocol landscape, [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]] for production-readiness deltas, and [[agent-economy/ai-agent-payment-protocols-commoditization|commoditization thesis]] for the value-capture trajectory. For protocol-specific deep dives see [[agent-economy/x402-http-payment-overview|x402 overview]] · [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge integration]] · [[agent-economy/ap2-overview|AP2 overview]] · [[agent-economy/ap2-adoption|AP2 adoption]] · [[agent-economy/ap2-technical-spec|AP2 technical spec]] · [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] · [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]] · [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] · [[agent-economy/erc-7715-overview|ERC-7715 overview]] · [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]. For wallet substrate see [[systems/erc-4337-overview|ERC-4337 overview]] · [[systems/erc-7702-overview|ERC-7702 overview]] · [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]. For regulatory framing see [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]] and [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability framework]].

## 为何这个矩阵重要

在 2026 选一条 agent 支付 rail 不是「挑最好的协议」— 而是「正确地组合这块层叠蛋糕,使商家接受、wallet 授权、监管不拦截」。四个协议各自回答一个不同的问题:

- **x402** 回答「一个 HTTP 请求如何在 API edge 携带支付元数据?」
- **AP2** 回答「商家如何用可验证凭证核实 agent 确实拥有用户授权?」
- **Skyfire** 回答「我们如何给 agent 一个真正可注资的 card-network 身份,使没有 crypto 集成的现有商家仍能收款?」
- **Nevermined** 回答「compute / inference 提供方如何按调用计量用量并以 stablecoin 结算,而无需逐客户账户?」

加上 **ERC-7715**(wallet permission scope)和 **Lit PKP**(threshold key custody)作为横向构件,一个生产级 agent 支付堆栈会挑选其中 2-4 来组合。本矩阵揭示这六轴比较,使团队选择最小可行堆栈而非过度工程。

这一分叉之所以重要,是因为 2026-Q4 将迎来 FIDO Alliance 将 AP2 移交给 **AAIF**(Agentic AI Identity Federation),这可能将 AP2 商品化(对生态有利)或进一步使其碎片化(对生产团队不利)— 时间线见 [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]]。

## 逐协议章节

### AP2 (Google + FIDO/AAIF)

**Transport**:带 W3C Verifiable Credentials 的 HTTPS。三步 mandate 链(Intent → Cart → Payment)由用户 wallet 签名,呈交商家验证。不绑定 HTTP 状态码 — agent 在任何支持 AP2 mandate 验证的 RPC / GraphQL / REST 端点出示 VC。

**Settlement asset**:资产无关。结算 rail 可以是 Google Pay、card networks(Mastercard / Amex 试点)、Base 上的 USDC(经 Coinbase Pay),或银行即时 rail(FedNow / RTP)。VC 链证明授权;结算经由商家偏好的任何 rail 发生。

**Authorization model**:**类 OAuth** — 用户预先授予一个带 scope(商家类别、支出上限、时间窗口)的 mandate VC,由其 wallet 的认证密钥签名。商家在兑现交易前验证 VC 链。与 [[agent-economy/erc-7715-overview|ERC-7715]] 良好组合以在 wallet 侧强制 scope。

**Q1-Q2 2026 mainnet adoption**:60+ consortium 合作方(Coinbase、MetaMask、Salesforce、Amex 等)但 ~4 披露的 production pilots(Mastercard agentic commerce、Salesforce Commerce)。FIDO Alliance 移交于 2026-Q2, 宣布更名为 **AAIF**。Apple 和 Microsoft 于移交后加入。Production 稀疏 — 大多数「支持 AP2」的合作方在测试环境中符合规范,而非在交易量上。

**Target merchant**:Web2 企业 SaaS(CRM / ERP / commerce 平台)、card-network 集成的零售商、需要审计级授权链的金融机构。并非主要面向 DeFi。

**Regulatory model**:**对 open-loop 友好** — 设计为插入现有支付网络(card / bank / stablecoin)。商家现有的 PCI / KYC / AML 义务不变。AAIF 移交将其定位为等同 WebAuthn 的开放标准。

### x402 (Coinbase + Cloudflare + AWS)

**Transport**:HTTP 原生。使用 HTTP 状态码 **402 Payment Required**(自 1996 起定义于 RFC 7231 但 ~30 年未用)外加 `X-Payment-Required`(server → client)和 `X-Payment`(client → server)头。该模式与现有 edge middleware、API gateway 和 reverse proxy 组合,无需新的 wire 格式。

**Settlement asset**:默认 **USDC stablecoin**(Base 上 USDC = 默认;支持 Solana USDC、Ethereum L1, 其他 L2)。Facilitator(Coinbase / Cloudflare / 社区 facilitators)在链上验证 `X-Payment` proof。资产结构上绑定公链 stablecoin — 不原生支持法币 / card。

**Authorization model**:**委托密钥** — agent 使用一个绑定到用户 wallet 的 session key(通常经由 [[agent-economy/erc-7715-overview|ERC-7715]] 在一个 [[systems/erc-4337-overview|ERC-4337]] SCW 上的 permission scope 或 [[systems/erc-7702-overview|ERC-7702]] 委托的 EOA)。无需逐请求用户批准;支出上限在 wallet 层强制。

**Q1-Q2 2026 mainnet adoption**:**Cloudflare Workers x402 在 production tier GA(2026-Q1)** + **AWS API Gateway + Bedrock AgentCore GA(2026-Q2)**。Vercel AI SDK 内置第一方 x402 client。Anthropic Claude Code + OpenAI Agents SDK 有社区维护的封装。从 dev-talk 披露推断为 **每月 single-digit billion requests** — 四个协议中经验证的最高 production 量。x402 Bazaar MCP 索引了 10,000+ 付费端点。

**Target merchant**:**AI compute / API 提供方**(模型 API、scraping API、向量 DB、RAG 服务)· DeFi 原生服务 · 任何想要按调用微支付的 HTTP API。并非 card-network 商家。

**Regulatory model**:**open-loop crypto** — facilitator(Coinbase、Cloudflare)在大多数司法辖区并非受监管的支付处理商,只是一个 stablecoin 结算验证方。欧盟 MiCA stablecoin 分类适用于 USDC 发行方(Circle),而非 facilitator。预计美国 GENIUS Act 2026 最终规则将厘清 facilitator 身份。

### Skyfire(Visa + 闭环 card-network issuer)

**Transport**:**Card-rail API**(类似 Stripe Issuing / Marqeta)。agent 以 agent 身份 + 商家 URL + 金额调用 Skyfire 的 REST API;Skyfire 签发一个虚拟卡授权,运行 OFAC / 商家类别 / 支出上限检查,返回已批准的交易。卡本身经 Visa 通道抵达商家。

**Settlement asset**:**法币虚拟卡**(主要为 USD,经 Visa 通道支持多币种)。由用户预付余额、企业 ACH 充值,或 — 在试点中 — 经 on-ramp 桥接为 USD 的 USDC 注资。商家在其现有 PCI-DSS 支付处理商中看到一笔正常的 Visa 卡交易,无需 crypto 集成。

**Authorization model**:**Card issuance** — Skyfire 铸造一个 agent 身份,将其绑定到一张虚拟卡,在自己的账本中强制支出上限 + 商家类别 + 时间窗口。用户经由 Skyfire 的 web UX 授权(类似在 Amex 上签发一张代理卡)。Visa Trusted Agent Protocol 对齐在授权时提供密码学 agent 认证。

**Q1-Q2 2026 mainnet adoption**:Series A 于 2024-2025融资。Visa 合作活跃。Stripe / Visa 虚拟卡集成已上线。**Production 交易量在低 tens-of-millions USD annualized**(从新闻推断;未官方披露)。远低于 x402 的请求计数,但 **每笔交易的美元金额实质上更高**,因为每笔 Skyfire 交易针对的是人类经济商家(SaaS 订阅、旅行、marketplace)。

**Target merchant**:**任何接受 Visa 的商家** — 按设计,商家无需知道这是一笔 agent 交易。这是其明确的 go-to-market 楔子:agent 在从未集成 crypto 的商家处购物。试点包括 AI agent 旅行预订、SaaS 采购、B2B 供应。

**Regulatory model**:**闭环 card issuance** — Skyfire(或其 BIN 赞助银行)是受监管实体。对 agent 所有者的 KYC、对交易的 AML 监控、OFAC 筛查、card 数据的 PCI 合规。agent 在银行赞助的发卡项目牌照下运作。欧盟 PSD2 / 美国 OCC 框架已覆盖该 rail。

### Nevermined(compute / inference marketplace)

**Transport**:**智能合约 escrow + token-gated API**。compute 提供方将一个模型 / GPU / 数据集端点置于一个 Nevermined 签发的 NFT 或订阅 token 之后。agent 消费方持有访问 token;调用端点;提供方验证 token;经智能合约 escrow 释放按调用结算。

**Settlement asset**:**Stablecoin compute credit**(默认 Polygon / Base / 其他 EVM 上的 USDC;Nevermined credit token 作为封装)。按推理、按数据集字节,或按订阅层级计量。当 agent 为单次推理付费时,可与 x402 集成作为 HTTP 层结算选项。

**Authorization model**:**Token-gated access + escrow** — agent 经订阅或按用付费购买访问,接收 token(NFT 或 ERC-20),端点验证 token 存在 + scope。资金held 在 escrow 中直至提供方交付(或经争议退款)。与 x402的即时结算不同的安全模型。

**Q1-Q2 2026 mainnet adoption**:niche 但在 **AI compute marketplace** 细分中 **活跃** — 提供方暴露微调模型、GPU 租赁、定制数据集。mainnet 量低于 x402 但 **每笔交易价值更高**(compute jobs 为 $0.10-$10 对比 x402的 sub-cent 调用)。与 [[agent-economy/x402-http-payment-overview|x402]] 作为一种结算选项的集成,使 Nevermined 能为小型 job 的快速结算嵌入 x402的 HTTP rail,同时为大型 job 保留 escrow + dispute 逻辑。

**Target merchant**:专门的 **AI compute 提供方** — 模型 inference 端点、GPU 租赁、数据集访问、agent-to-agent compute 市场([[agent-economy/skill-market-monetization|skill market monetization]])。并非通用商家。

**Regulatory model**:**crypto 原生 marketplace** — 作为智能合约平台运作,而非受监管的支付处理商。提供方 / 消费方关系受智能合约约束;争议经 DAO 仲裁。KYC 取决于 compute 提供方自己的项目(例如若提供方是美国企业,OFAC 适用)。

### ERC-7715 (subscription / permission scope,补充)

**它是什么**:wallet RPC 方法 `wallet_grantPermissions`,使用户预先授予 agent 一个 scoped 支出权限,带 **type**(例如 `erc20-token-transfer`)、**amount cap**、**period**(例如 $50/天)和 **allowed targets**(商家地址白名单或域名模式)。

**Mainnet 状态(2026-Q2)**:在 **MetaMask**(mobile + Snaps)、**Coinbase Smart Wallet**(Base mainnet)、**Safe**(v1.4+ 模块)上上线。尚未在 Rabby / Phantom / Trust Wallet。跨钱包可移植性缺口仍存在 — permission schema 分歧。

**在堆栈中的角色**:**横向 plug-in**,位于 x402 或 AP2之下。用户经由 ERC-7715一次性授予 scope;agent 随后在众多 x402 调用或 AP2 mandate 中使用该 scope 而无需再次提示。组合模式见 [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]。

### Lit Protocol PKP(threshold key custody,补充)

**它是什么**:**Programmable Key Pair** — 一个 wallet,其私钥分片于 Lit Protocol 的 threshold 网络(任何单一节点都看不到完整密钥)。签名受运行于安全飞地内的 **Lit Actions**(JavaScript 代码)把关;该代码可在授权签名前检查速率限制、scope、多因素或任意策略。

**Mainnet 状态(2026-Q2)**:在 Lit mainnet 上上线多年;在 [[agent-economy/lit-protocol-pkp-agent-keys|agent key custody]] 场景中成熟的 production 使用。尤其用于 agent 必须持有自己的密钥(长时任务上的自主 agent)、但用户想要策略强制而不信任 Privy / Magic 等单一托管方的场合。

**在堆栈中的角色**:**横向 plug-in**,作为 **key custody** 层中 Privy / Magic / Coinbase CDP 的替代。PKP 之上是 ERC-7715 (scope)、x402 / AP2 (transport)和 stablecoin(settlement)。

## 大比较矩阵表

**四个主要协议 + 两个补充层的六轴比较**(2026-Q2 状态):

| 观点 | **AP2 (Google → AAIF)** | **x402 (Coinbase / CF / AWS)** | **Skyfire (Visa closed-loop)** | **Nevermined (compute mp)** | **ERC-7715 (补充)** | **Lit PKP (补充)** |
|---|---|---|---|---|---|---|
| **Transport** | HTTPS + W3C Verifiable Credential mandate 链 | HTTP 402 + `X-Payment` 头 | Card-rail REST API (Visa) | 智能合约 escrow + token-gated 端点 | Wallet RPC `wallet_grantPermissions` | Lit-network threshold sign + Lit Actions JS |
| **Settlement asset** | 资产无关(Google Pay / card / USDC / bank rails) | **USDC stablecoin** 于 Base / Solana / EVM L2 | **法币虚拟卡**(主要 USD;可 USDC 充值) | **Stablecoin compute credit**(USDC / Nevermined credit) | 不适用(为其他 rail 把关) | 不适用(为任何链签名) |
| **Authorization model** | 类 OAuth VC mandate(Intent → Cart → Payment) | 委托 session key(ERC-7715 / 4337 / 7702) | Card issuance + 银行赞助 BIN | Token-gated escrow(NFT 或 ERC-20 access token) | Wallet 预授权 scope 带 cap + period + targets | Threshold MPC + Lit Action 中的运行时策略 |
| **Q1-Q2 2026 mainnet** | 60+ consortium · ~4 production pilots · AAIF 移交 2026-Q2 | **Cloudflare GA Q1 + AWS GA Q2 · single-digit B req/mo · Vercel SDK · 10k+ Bazaar 端点** | Series A · Visa 合作上线 · 低 tens-M USD annualized | niche AI compute marketplace · 集成 x402 用于即时结算 | MetaMask + Coinbase Smart Wallet + Safe 上线 · 可移植性缺口 | 成熟 mainnet · 为自主 agent 提供 production key custody |
| **Target merchant** | Web2 企业 SaaS · card-network 零售商 · 金融机构 | AI compute / API 提供方 · DeFi 原生 · 按调用 HTTP 服务 | **任何接受 Visa 的商家**(商家不知 agent 身份) | AI compute 提供方 · 模型 inference · GPU 租赁 · 数据集访问 | (任何)— wallet scope 层 | (任何)— key custody 层 |
| **Regulatory model** | **open-loop interop** — 可插拔结算,AAIF 作为标准 | **open-loop crypto** — facilitator 在大多数辖区不受监管 · MiCA 于发行方 · GENIUS Act 待定 | **闭环 card issuance** — 银行赞助 BIN · KYC / AML / PCI 全在范围内 | **crypto 原生 marketplace** — 智能合约平台 · DAO 争议 | (无 — wallet 功能) | (无 — key custody) |

**矩阵的读法**:
- 横向看一个协议的 6 轴档案 · 纵向看 4 个协议在同一轴上的差异化
- AP2 vs x402 在 settlement asset 上分歧最大 — AP2 是 multi rail · x402 是 single rail(USDC)· 这决定了 merchant adoption 曲线的差异(AP2 慢但广 · x402 快但窄)
- Skyfire 是唯一的闭环 · 对商家完全不要求 crypto / agent 集成 · 因此「立刻,任何商家」成为可能 · 但 KYC + bank sponsorship 的成本高
- Nevermined 是纵向(compute marketplace)· 非通用 rail · 市场容量小但单笔金额高
- ERC-7715 + Lit PKP 不是 rail · 而是为上述 4 条 rail 提供 wallet substrate · 实现上几乎所有 production stack 都用其中之一

## 在 production 中观察到的组合模式

**Pattern A — 「AI 原生 API marketplace」**:
- ERC-7715 (scope)+ ERC-7702 / 4337 wallet + x402 transport + Base 上 USDC
- 2026 年出货 agent-payment 的初创公司中约 70%(见 [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]])
- 主要实现:Vercel AI SDK + Cloudflare Workers + AWS Bedrock AgentCore 堆栈

**Pattern B — 「企业 commerce agent」**:
- AP2 mandate VC + ERC-7715 (scope)+ card 或 USDC 结算
- 约 20%,企业 pilot(Mastercard / Salesforce / Amex)
- 优势:商家侧已有 PCI / KYC 流程 · agent 只需出示 VC

**Pattern C — 「Skyfire 签发的 agent card」**:
- Skyfire 身份 + 虚拟卡 + 银行赞助 BIN
- 交易笔数中占比小但 **每笔交易金额最高**
- 主要实现:任何 Visa 商家 · agent 不需要对方侧的集成

**Pattern D — 「compute marketplace」**:
- Nevermined escrow + access token +(可选 x402 内层结算)
- niche 但增长中 — AI compute 提供方将微调模型变现
- 重叠场景:agent 调用 fine-tuned 模型是 Nevermined · 该模型调用上游 API 是 x402

**Pattern E — 「带策略绑定密钥的自主 agent」**:
- Lit PKP(custody + 运行时策略)+ ERC-7715 (scope)+ x402 (transport)
- 适合长时自主运作的 agent · 用户不在场时也不会被 phish 夺取密钥
- 当 Privy / Magic / Coinbase CDP 的中心化 custody 不可接受时(adversarial / 跨司法辖区 / 开源 agent)

## 边界情形 / 未来轨迹

**AP2 vs x402 收敛路径**:
- 短期(2026-2027):AP2 的 mandate VC 可作为 x402 `X-Payment` 头的 inner attestation 发挥作用 — 这使商家同时获得「agent 有授权」(AP2)+「USDC 已结算」(x402)的双重保障。OpenAI 的 SDK 对冲所押注的正是这条收敛路径(见 [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption]])
- 长期(2028+):AAIF 标准化后,x402 facilitator 可内置 AAIF 验证 — AP2 vs x402 不再是「选哪个」而是「两个都用」

**Skyfire 闭环 vs 开环的张力**:
- 闭环的优势:今天就能用 · 全球 60M+ Visa 商家接受 · KYC / AML 框架成熟
- 闭环的弱点:Skyfire 是单一 issuer · 每笔交易有 Visa interchange ~1.5-2.5% · 长期与 x402 的近零 fee 相比不对称
- 实际战略:Skyfire 自身也在评估以 USDC 作为 backing asset · 未来「Skyfire issuance + USDC settlement」亦有可能(见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])

**Nevermined 与 x402 的吃/被吃关系**:
- x402 标准化 transport 层后 · Nevermined 的「按调用 HTTP 计费」用例可被 x402 直接替换
- 但 Nevermined 的「escrow + dispute + 大额 compute job」用例(单笔 $1+ · 需要 SLA 保证)在 x402 中无法替代 · 因 x402 默认 fire-and-forget 且无 dispute 机制
- 长期分工:**x402 用于 < $0.10 的快速结算** · **Nevermined 用于 $0.10+ 的大额 + SLA**

**ERC-7715 可移植性缺口的解决路径**:
- 2026-Q3 提案中的 permission-type registry 是关键 · 若无法统一 schema · agent 将被迫碎片化为「MetaMask-agents vs Coinbase-agents vs Safe-agents」
- Lit PKP 提供另一条路:将 permission policy 写为 Lit Action JavaScript · wallet 无关 · 但吞吐量为代价(Lit network MPC sign 比本地 sign 慢 100-500ms)

**FIDO Alliance / AAIF 的合规化**:
- 若 AAIF 走完 18-24 个月的 ratification track(类似 WebAuthn 的历史)· 2027-Q4 有标准化的可能
- 在此之前的窗口是「Google + 60 partners 寡头联盟」vs「x402 + Cloudflare/AWS edge dominance」的市场拮抗
- 真正的风险:AAIF stall(如 WebAuthn 2014-2016 那样)· 其间 x402 + ERC-7715 完成事实标准化 · 形成锁定

**Lit PKP 与机构采用**:
- 机构(银行 / 资产运用)偏好 HSM / SOC2 custody · Lit PKP 的「code-defined policy」在 SOC2 audit 中难以说明
- 但监管要求(MiCA 的第三方托管)推动 multi-party custody · Lit PKP 的 threshold + 透明代码模型在复审中反而占优 — 2027-2028 有反转的可能

**Visa Trusted Agent Protocol 与 Skyfire**:
- Visa 于 2025-2026 发布 Trusted Agent Protocol(VTAP)— 赋予 agent 密码学身份认证 · 商家在授权时验证
- Skyfire 是 VTAP 的早期 issuer · 与 Visa 深度结合
- 但 VTAP 本身是开放标准 · 即 Stripe Issuing / Marqeta / Adyen Issuing 等竞争者亦可成为 issuer · Skyfire 的先行优势可能在 18-24 个月内被稀释

**Regulatory wildcard — 2026-Q3 GENIUS Act**:
- 美国 GENIUS Act 的 stablecoin 最终规则预计于 2026-Q3 落地 · 厘清「stablecoin facilitator」(如 x402 中 Coinbase 的角色)是否被视为 money transmitter
- 若 facilitator 被分类为 money transmitter · x402 的美国市场 cost structure 将剧变 — facilitator 将需要 50 州 MTL 牌照
- AP2 因 settlement rail 无关而影响相对较小 · Skyfire 因已经由银行赞助 BIN 而影响最小

**与 MCP 层的关系**:
- Anthropic MCP 是 tool-invocation 层 · 而非 payment 层 · 但 MCP 可将任意 payment protocol 封装为 tool
- 实际 production:**MCP tool 封装 x402 client** 是 Claude Code / agent SDK 集成中最常见的模式
- 这意味着 Anthropic 无需第一方集成 AP2 vs x402 中的任何一个 — MCP 作为 abstraction layer 与 4 个协议全部兼容

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI agent payment seven layers]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|payment protocol commoditization]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability]]
- [[agent-economy/skill-market-monetization|skill market monetization]]
- [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[payments/INDEX|payments index]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol spec · https://x402.org/
- Coinbase x402 GitHub · https://github.com/coinbase/x402
- Google AP2 launch press · https://cloud.google.com/blog/products/ai-machine-learning/announcing-agent-payments-protocol-ap2
- Skyfire website · https://www.skyfire.xyz/
- Skyfire docs · https://docs.skyfire.xyz/
- Nevermined website · https://nevermined.io/
- Nevermined docs · https://docs.nevermined.io/
- ERC-7715 EIP draft · https://eips.ethereum.org/EIPS/eip-7715
- Lit Protocol website · https://litprotocol.com/
- Lit Protocol developer docs · https://developer.litprotocol.com/
- Cloudflare developer docs (x402 in Workers) · https://developers.cloudflare.com/
- AWS Bedrock AgentCore · https://aws.amazon.com/bedrock/agentcore/
- Stripe newsroom (Issuing + agent products) · https://stripe.com/newsroom
- Visa agentic commerce page · https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html
- FIDO Alliance · https://fidoalliance.org/

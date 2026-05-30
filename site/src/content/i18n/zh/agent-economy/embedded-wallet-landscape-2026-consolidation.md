---
source: agent-economy/embedded-wallet-landscape-2026-consolidation
source_hash: cf919546a0d0d7ec
lang: zh
status: machine
fidelity: ok
title: "Embedded-wallet 格局 2026 · 整合后的 provider 版图"
translated_at: 2026-05-30T17:04:08.788Z
---

# Embedded-wallet 格局 2026 · 整合后的 provider 版图

## TL;DR

到 2026 年中,embedded-wallet 品类已从 20+ 家 SDK 厂商的长尾压缩为一个 **default-tier 双头垄断**(Stripe 旗下的 Privy、Coinbase CDP)加一个 **secondary tier**(Magic、thirdweb、Dynamic、Web3Auth、Particle Network、Crossmint)— 后者争夺 hyperscaler 默认路由未覆盖的利基。驱动因素并非产品优越,而是 **hyperscaler 默认钱包置入(default-wallet placement)**:当 AWS Bedrock AgentCore、Azure AI Foundry Agent Service 与 Google Cloud Vertex AI Agent Builder 各自挑选「default」SDK 时,被选中的厂商以零分发成本捕获 AI-agent 置备的长尾。经典示例参见 [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-wallet positioning]],底层飞轮参见 [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet network effects · integrator moat]]。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it with [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe subsidiary embedded self-custody wallet]] for the canonical Stripe-side example, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · developer platform overview]] for the Coinbase-side example, [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet integrator moat]] for the moat thesis, and [[fintech/embedded-wallet-fintech-disintermediation-overview|embedded wallet fintech disintermediation]] for the fintech-side framing.

## Default-tier vs secondary-tier 的分野

到 2026年中,公开文档与 hyperscaler 公告中可见的品类分野:

| 层级 | Provider | 所有者 | Hyperscaler 默认 | 公开规模 | 备注 |
|---|---|---|---|---|---|
| Default | Privy | Stripe(2025年 6 月收购) | AWS Bedrock AgentCore(默认)、Azure AI Foundry(两个默认之一) | 110M+ 钱包,1,000+ 集成 | 经由 Stripe Connect + Bridge USDB rail 路由(参见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]) |
| Default | Coinbase CDP | Coinbase(NASDAQ: COIN) | AWS Bedrock AgentCore(与 Privy 共同默认)、GCP Vertex AI Agent Builder(默认) | ~150K 开发者,~8K dApp,~5M MAU embedded 钱包 | 默认绑定 Base + USDC + Onramp |
| Secondary | Magic | 独立(Tiger / SV Angel) | 非 hyperscaler 默认 | 长尾 Web3 SaaS 客户 | Magic Link / OAuth + DKLs MPC;按 per-MAU 分级定价 |
| Secondary | thirdweb | 独立 | 非 hyperscaler 默认 | 重在 NFT / 游戏 / 消费者 dApp | InAppWallet + smart-account SDK;链无关;部分开源 |
| Secondary | Dynamic | 独立(a16z crypto) | 非 hyperscaler 默认 | 聚焦 DeFi / 消费金融 | 多链登录,embedded + external-wallet 桥接 |
| Secondary | Web3Auth | 独立(Torus Labs,BNB-Labs 投资) | 非 hyperscaler 默认 | 长尾 Web3 + 企业 | tKey + OAuth share 重建;开源 |
| Secondary | Particle Network | 独立 | 非 hyperscaler 默认 | EVM + BTC + 多链 | 模块化 SDK + 自有 chain-abstraction 层 |
| Secondary | Crossmint | 独立 | 非 hyperscaler 默认 | NFT / commerce / RWA | 专长于 fiat-funded 钱包 + 收据 rail |

「Default」意味着该 SDK 作为推荐路径出现在 hyperscaler 头等的 agent-orchestration 文档中,并预置好 credentials / billing / IAM 接线。开发者可切换到任何其他 SDK,但默认项正是大批净新增 agent 所继承的。

## 整合的五大驱动

**1. AWS Bedrock AgentCore 默认选择(2025-Q3 GA)。** AWS 挑选 Privy + Coinbase CDP 作为 AgentCore Payments 的两个默认钱包 provider。Circle、Anchorage、Magic 等可用但非头等。该决定是结构性的 — Stripe 是顶级 AWS 营收客户,Coinbase 是主要的 AWS region 锚点 — 并向下游传播,因为数十万净新增 AgentCore agent 默认继承一个 Privy-或-CDP 钱包。参见 [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-wallet positioning]]。

**2. Stripe 收购 Privy(2025年 6 月)。** Stripe 公开报道支付 $300-500M(部分来源称含 earn-out 后高达 $1.1B),并把 Privy 与 Bridge($1.1B)、Tempo、USDB 稳定币一并并入 Stripe 家族。从 Stripe 视角看,Privy 是 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer Trojan horse]] 中的 layer-4 钱包。从 embedded-wallet 品类视角看,它移除了最大的中立 SDK 厂商,代之以一个与 Stripe 对齐的默认项。

**3. Coinbase CDP 与 Base + USDC + Onramp 的纵向整合。** CDP 不只是一个 embedded-wallet SDK — 它是一个默认路由到 Base 与 USDC 的 [[agent-economy/coinbase-cdp-developer-platform|wallet + Onramp + Paymaster + AgentKit + Smart Wallets]] 打包栈。这造就了一个与 Privy 经济结构截然不同的并行 default-tier provider(CDP 从 on-chain 流量赚钱;Privy 赚 SaaS 式费用,并带 Stripe-rail interchange 的上行空间)。

**4. Hyperscaler agent-orchestration 平台(2025-2026)。** AWS Bedrock AgentCore Payments(2025)、Azure AI Foundry Agent Service(2025-Q4)与 Google Cloud Vertex AI Agent Builder(2026-Q1)各自推出了一个托管的 agent-orchestration 面。各自挑选了默认钱包 provider。hyperscaler-默认之战是 2026年里 embedded-wallet 份额被决定的直接渠道。公开文档中可见的选择:AWS → Privy + CDP;Azure → Privy +(额外默认在公开文档中仍含糊);GCP → 偏向 CDP(Coinbase 有结构性合作、AP2 共同署名 — 参见 [[agent-economy/ap2-overview|AP2 overview]])。

**5. 钱包原语层的 ERC-7715 + ERC-4337 商品化。** embedded wallet 所依托的原语 — [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]、ERC-4337 account abstraction、ERC-7702 EOA 升级 — 变得标准化且更易实现,移除了较小 SDK 围绕专有 MPC / TEE 选择所筑的部分技术护城河。

### Privy(Stripe)

- **所有者。** Stripe(2025年 6 月收购;创始人 Henri Stern + Asta Li 留任 Stripe Privy 领导层)。
- **关键托管原语。** MPC + TEE shard 模型。一份 key shard 在用户设备上(Passkey / WebAuthn / Secure Enclave),一份 shard 在 Stripe 运营的 TEE 内(AWS Nitro Enclaves 或同类)。
- **默认 hyperscaler 置入。** AWS Bedrock AgentCore Payments — 与 Coinbase CDP 共同默认。Azure AI Foundry Agent Service 把 Privy 列为受支持的默认。
- **公开规模。** ~110M 钱包,~1,000+ 开发者集成,含 OpenSea、Hyperliquid、Farcaster、Friend.tech、Pump.fun、Story、Zora,以及主要的 Stripe Connect merchant。
- **战略角色。** [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer collapse]] 的 layer 4 。在 Stripe 需要一个既作 user-identity 面、又在 Bridge USDB / Tempo rail 上充当钱包之处,Privy 是所选基质。

### Coinbase CDP

- **所有者。** Coinbase(NASDAQ: COIN)。
- **关键托管原语。** MPC 分布式密钥管理,加上一个与 Base Paymaster 集成、用于 gasless USDC 转账的打包 ERC-4337 Smart Wallet。
- **默认 hyperscaler 置入。** AWS Bedrock AgentCore(与 Privy 共同默认)。GCP Vertex AI Agent Builder 偏向 CDP(Coinbase 是与 Google 共同署名的 AP2 作者)。
- **公开规模。** 据 CDP 公开沟通,~150K 开发者,~8K dApp,~5M 月活跃 embedded 钱包。
- **战略角色。** 默认绑定 Base + USDC;AgentKit 模块(2025-04)是 agent-economy SDK;把钱包原语与 Coinbase 已拥有的链经济捆绑。

### Magic

- **所有者。** 独立(Tiger / SV Angel 投资)。
- **关键托管原语。** Magic Link(email magic link)加 DKLs MPC 2/2。
- **默认 hyperscaler 置入。** 截至 2026 年中,在任何公开 AgentCore / Foundry / Vertex 文档中均非 hyperscaler 默认。
- **公开规模。** 长尾 Web3 SaaS 客户;定价为分级 per-MAU SaaS 结构。
- **战略角色。** Privy 之前的市场领跑者,如今是一个以中立性(无 fintech 集团或交易所母体)竞争的 secondary-tier provider。

### thirdweb

- **所有者。** 独立(Founders Fund、Coinbase Ventures、Polygon — 少数股权)。
- **关键托管原语。** 带可选 embedded-MPC + smart-account 抽象的 InAppWallet SDK。
- **默认 hyperscaler 置入。** 非 hyperscaler 默认。
- **公开规模。** 重在 NFT、游戏、消费者 dApp;部分开源姿态。
- **战略角色。** 消费者 / 游戏 dApp 的利基专家;以全栈工具(部署 + 钱包 + 支付合一)而非单凭钱包竞争。

### Particle Network

- **所有者。** 独立。
- **关键托管原语。** 带 MPC + ERC-4337 + 自有 chain-abstraction 层的模块化 SDK。
- **默认 hyperscaler 置入。** 非 hyperscaler 默认。
- **公开规模。** EVM + BTC + 多链覆盖;强调跨链的「universal account」模型。
- **战略角色。** 以 chain-abstraction 深度而非 fintech 分发来差异化。

### Web3Auth

- **所有者。** 独立(Torus Labs;BNB-Labs 投资者)。
- **关键托管原语。** tKey + OAuth share 重建;开源核心。
- **默认 hyperscaler 置入。** 非 hyperscaler 默认。
- **公开规模。** 长尾 Web3 加选定的企业 SSO 集成。
- **战略角色。** 在一个日益由 Stripe + Coinbase 商业默认主导的市场里,开源姿态是其主要差异化点。

### Dynamic

- **所有者。** 独立(a16z crypto 投资)。
- **关键托管原语。** 带 embedded + external-wallet 桥接的多链登录。
- **默认 hyperscaler 置入。** 非 hyperscaler 默认。
- **公开规模。** 需要在一个会话中桥接 embedded + MetaMask 用户的 DeFi / 消费金融 dApp。
- **战略角色。** 专长于纯 embedded SDK 不处理的「embedded 与 external 钱包交汇」UX 缺口。

### Crossmint

- **所有者。** 独立。
- **关键托管原语。** Fiat-funded 钱包创建;credit-card-to-NFT / RWA 收据 rail。
- **默认 hyperscaler 置入。** 非 hyperscaler 默认。
- **公开规模。** NFT、commerce、RWA-tokenization 客户;Visa / Mastercard rail 集成。
- **战略角色。** 专长于 embedded-wallet 市场中 fiat-funded 的那一片 — 需要 card networks 而非 crypto rail 的那一片 — 因而不与 Privy / CDP 在 AI-agent 量上正面竞争。

## Hyperscaler 默认钱包之战

最具影响的 2026 动态是 **hyperscaler agent 平台** 在其托管 agent 运行时内把钱包 provider 预选为默认的方式。它比 2023-2024的 dApp 采用更要紧,有三个原因:

1. **置备是隐式而非显式的。** 当开发者拉起一个需要接收 [[fintech/usd-stablecoin-interchange|USDC]] 支付的 AWS Bedrock agent 时,AgentCore Payments 模块在底层置备一个 Privy 或 CDP 钱包。开发者从未做过钱包厂商的决定。
2. **hyperscaler 吸收了分发成本。** 一个 secondary-tier SDK 现在必须说服开发者退出默认 — 这比说服他们选入单一所选 SDK 摩擦更高。
3. **default-tier provider 获得结构性复利。** 每个默认置备的钱包都增添 Privy 或 CDP 的安装基础,从而使它们作为 Azure / GCP 及任何后续 hyperscaler-agent 平台的下一个默认候选更具吸引力。

2026 年中 hyperscaler 公开文档中可见的默认置入:

| Hyperscaler | Agent 平台 | 默认钱包 provider | 备注 |
|---|---|---|---|
| AWS | Bedrock AgentCore Payments | Privy + Coinbase CDP | 自 2025-Q3 GA 起公开;x402 + Bazaar MCP 集成;参见 [[agent-economy/x402-http-payment-overview|x402 overview]] |
| Azure | AI Foundry Agent Service | Privy 被列为受支持默认;第二默认在公开文档中含糊 | Microsoft 的 Stripe 关系是结构性锚点 |
| Google Cloud | Vertex AI Agent Builder | 偏向 CDP;与 Coinbase 共同署名的 AP2 是结构性锚点 | 参见 [[agent-economy/ap2-overview|AP2 overview]] |
| Cloudflare | Workers AI Agents | 集成 x402;钱包 provider 选择仍在开发者侧 | 更底层:路由支付而非置备 identity |

## Stripe 拥有 Privy — 战略含义

Stripe 于 2025年 6 月收购 Privy。公开报道把交易定在 $300-500M 区间;部分来源称含 earn-out 结构高达 $1.1B。从品类视角看,后果:

- **最大的中立 embedded-wallet 厂商不再中立。** 非 Stripe merchant 与 Stripe 竞品(Adyen、Block、PayPal)如今面临「用我竞争对手的钱包栈还是自建」的抉择。
- **Privy 变得 Stripe-rail-aware。** 在 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer collapse]] 内,Privy 按结构性设计路由到 Bridge(USDB 稳定币)与 Tempo(结算链)。
- **AWS AgentCore 默认置入产生复利。** 与 Stripe 对齐的 AgentCore agent 继承与 Stripe 对齐的钱包,后者又继承与 Stripe 对齐的稳定币与链。纵向栈在每一层都被货币化。
- **反垄断问题仍悬而未决。** 截至 2026, 年中,美国、英国、欧盟或日本的竞争监管机构都未就 Privy 收购公开介入,但该模式与历史上的 Apple / Google 默认搜索引擎案例相平行(参见 [[agent-economy/embedded-wallet-network-effects-moat|integrator moat]] 的对立观点章节)。

## 自 2024

以来的并购活动| 日期 | 事件 | 买方 | 标的 | 公开价格 |
|---|---|---|---|---|
| 2025-06 | Stripe 收购 Privy | Stripe | Privy | ~$300-500M(部分来源至 $1.1B) |
| 2025-06 | Stripe 收购 Bridge | Stripe | Bridge | ~$1.1B |
| 2024-Q3 | Coinbase 把 Wallet API + Cloud 并入 CDP 改名 | Coinbase | (内部) | n/a |
| 2025-04 | Coinbase 在 CDP 之上推出 AgentKit | Coinbase | (内部) | n/a |
| 2025-Q3 | AWS 挑选 Privy + CDP 作为 AgentCore 默认 | AWS / Stripe / Coinbase | (平台默认) | n/a |
| 待定 | thirdweb / Magic / Web3Auth / Dynamic 收购传闻 | (各方) | (各方) | 无确认 |

按可能性加权但未确认:某 hyperscaler 可能收购一家 secondary-tier provider 以与 Stripe-Privy 和 Coinbase-CDP 竞争。截至 2026年中,公开文档与公开并购备案均未显示此事。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AWS AgentCore default-wallet positioning]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet integrator moat]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet fintech disintermediation overview]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- Privy public documentation: docs.privy.io
- Coinbase Developer Platform public documentation: docs.cdp.coinbase.com
- Magic public documentation: magic.link/docs
- thirdweb public documentation: portal.thirdweb.com
- Particle Network public documentation: docs.particle.network
- Web3Auth public documentation: web3auth.io/docs
- Dynamic public documentation: docs.dynamic.xyz
- Crossmint public documentation: docs.crossmint.com
- AWS Bedrock AgentCore Payments public announcement and docs (2025-Q3 GA)
- Azure AI Foundry Agent Service public docs (Microsoft Build 2025 / 2026)
- Google Cloud Vertex AI Agent Builder public docs (Google Cloud Next 2026)
- Stripe public communications on Privy and Bridge acquisitions (June 2025)
- FCA, SEC, FSA Japan, and MAS public registers and consultation papers on embedded-wallet and electronic-money classification

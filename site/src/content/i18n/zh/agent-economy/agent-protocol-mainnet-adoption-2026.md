---
source: agent-economy/agent-protocol-mainnet-adoption-2026
source_hash: 13e3df6d3724ae09
lang: zh
status: machine
fidelity: ok
title: "Agent Protocol 主网采用 · 2026-05 生产就绪度快照"
translated_at: 2026-05-30T16:40:11.494Z
---

# Agent Protocol 主网采用 · 2026-05 生产就绪度快照

## TL;DR

截至 2026, 年 5 月,agent 支付协议堆栈已在 **已上线主网的基础设施** 与 **仅测试网 / 仅联盟的规范** 之间急剧分叉。production-live 层由 **x402**(Cloudflare Workers + AWS API Gateway edge 集成)、**ERC-4337**(主网上成熟 4+ 年)和 **ERC-7702**(经 Pectra 于 2025-Q2上线以太坊主网)主导。consortium-spec 层包括 **AP2**(60+ 合作方但无广泛部署的商家流程)和 **ERC-7715**(已在 MetaMask / Coinbase Smart Wallet / Safe 中实现,但未跨所有主要钱包标准化)。这一分裂之所以重要,是因为今天的生产级 agent 支付必须组合 x402 + ERC-4337/7702 才能出货;AP2 和 ERC-7715 增添语义丰富度,但并不阻碍在 edge 上真正的按调用 USDC 结算。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] for the broader seven-protocol landscape, and against [[agent-economy/ap2-adoption|AP2 アダプション状況]] / [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS エッジ統合]] for the per-protocol deep dives. For wallet-layer dependencies see [[systems/erc-4337-overview|ERC-4337 総覧]] and [[systems/erc-7702-overview|ERC-7702 総覧]].

### x402 — Cloudflare + AWS edge 上线(PRODUCTION)

| 界面 | 状态 | 日期 |
|---|---|---|
| Coinbase x402 spec v1.0 | 已发布 | 2025-05 |
| Cloudflare Workers 原生集成 | 在 production Workers tier 上线 | 2026-Q1 |
| AWS API Gateway / Bedrock AgentCore | 已上线,在 us-east-1 / eu-west-1 GA | 2026-Q2 |
| Vercel AI SDK x402 client | 已上线 | 2025-Q4 |
| Anthropic Claude Code x402 tool wrapper | 社区维护,非第一方 | 2026-Q1 |
| OpenAI Agents SDK x402 helper | 社区维护 | 2026-Q1 |
| Google Gemini Agent x402 | 不存在(Google 经由 AP2路由) | — |

**主网证据**:Cloudflare 公开记录了用于声明按端点 USDC 定价的 Workers 配置语法;AWS 发布了一篇经由 x402 facilitator 接线 API Gateway + Bedrock AgentCore 的教程。两者都以 **Base 主网 USDC** 为默认结算资产终结,并经由 facilitator 路由支持 Solana 和其他链。spec 机制见 [[agent-economy/x402-http-payment-overview|x402 HTTP プロトコル総覧]],facilitator 经济学见 [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge layer integration]]。

**生产量**:Cloudflare 第一方披露将 x402中介的请求在头两个生产季度置于「每月 single-digit billions」区间,以 AI agent + scraping 用例为主。这并非新闻稿;而是从 Cloudflare 的开发者日演讲和 AWS re:Invent 分会推断而来。

**为何率先出货**:x402 是一个严格的 HTTP 层规范,带单个必需头(`X-Payment`)和一个自 1996起就已存在于协议中的 HTTP 状态码(402)。它与现有 edge / API gateway middleware 组合而无需 wallet UX 变更 — agent 经由 service key 自主付款。对比 AP2的三步 VC 链(Intent → Cart → Payment),后者需要面向用户的 UX 集成。

### AP2 — Google + 60+ 合作方(CONSORTIUM-LIVE,production 稀疏)

| 界面 | 状态 | 日期 |
|---|---|---|
| AP2 spec v1 发布 | 是,带参考实现 | 2025-09 |
| 初始合作方数量 | 60+(Coinbase、MetaMask、Salesforce、American Express 等) | 2025-09 |
| FIDO Alliance 移交 → AAIF 更名 | 已宣布 | 2026-Q2 |
| 生产商家部署 | 有限(Mastercard 试点、Salesforce Commerce 试点) | 2026-Q1 |
| 参考钱包集成数量 | ~8 个带 `wallet_grantPermissions` + AP2 mandate UX 的钱包 | 2026-Q2 |
| Agent SDK 第一方集成 | Google Gemini Agent(是)、OpenAI Agents SDK(部分)、Anthropic Claude Code(否) | 2026-Q2 |

**生产现实**:60+ 的合作方数量计的是联盟成员资格,而非已出货的生产流程。公开新闻指认截至 2026 年 5 月有四个 AP2 生产试点 — 无一披露量。来自 [[agent-economy/ap2-overview|AP2 overview]] 的「经 VC-mandate 签名、能扛住拒付的 Cart」之论点,需要大多数零售商尚未完成的商家账本集成。[[agent-economy/ap2-adoption|AP2 アダプション状況]] 追踪变动的合作方名单。

**为何 FIDO Alliance 移交重要**:Google 最初拥有 AP2 规范,这为非 Google 生态带来了 vendor-capture 顾虑。2026-Q2 移交给 FIDO Alliance 并更名为 **AAIF (Agentic AI Identity Federation)**,意在成为 WebAuthn 式的商品化时刻(对比 [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]])。Apple 和 Microsoft 于移交后加入;若 FIDO 在其 18-24 个月的轨道上成功批准该规范,AAIF 将成为 agent 身份的 OAuth 等价物。

**正文链接**:本条目的状态取决于 AAIF 能否在 2027年底前,从「60+ 具名合作方」迈向「100M+ 接受 AP2 mandate 的上线商家 SKU」。

### ERC-7715 — 测试网成熟,主网部分(TESTNET → MAINNET ROLLING)

| 界面 | 状态 | 日期 |
|---|---|---|
| EIP-7715 草案发布 | 是 | 2024 |
| MetaMask `wallet_grantPermissions` 出货 | 在 MetaMask mobile + Snaps 中上线 | 2025-Q3 |
| Coinbase Smart Wallet 实现 | 在 Base 主网上线 | 2025-Q3 |
| Safe (Gnosis Safe) 实现 | 作为模块在 Safe v1.4+ 上线 | 2025-Q4 |
| Rabby / Phantom / Trust Wallet 实现 | 未出货 | — |
| 跨钱包 permission 可移植性 | 未标准化;各钱包在 permission 类型上分歧 | — |

**主网证据**:拥有 MetaMask + Base ETH 的用户今天即可执行 `wallet_grantPermissions`,为一个 AI agent 授予一个 `native-token-recurring-allowance` 和一个针对 Base 上 USDC 的 `erc20-token-transfer` permission,三者(Base、Optimism、Arbitrum)全部在以太坊主网结算。该规范 **经由特定钱包在主网上线**,但 [[agent-economy/erc-7715-overview|ERC-7715 総覧]] 的「任何钱包、任何链」可移植性承诺尚未兑现。

**碎片化缺口**:MetaMask 支持 `native-token-recurring-allowance` + `erc20-token-transfer` + 一个 MetaMask 专有的「delegation」类型。Coinbase Smart Wallet 支持 `native-token-recurring-allowance` + `erc20-token-transfer` + 一个 session-key 类型。Safe 支持自定义模块定义的 permission。针对某一钱包 permission schema 构建的 agent,无法可移植地针对另一钱包授权。2026-Q3 的路线图目标是一个 permission-type registry,但尚无正式提案在轨。

### ERC-4337 — 成熟主网(PRODUCTION,T+4 年)

ERC-4337 (经 EntryPoint 的账户抽象)自 2023-03起已在以太坊主网上线。到 2026 ,它已是主导的账户抽象标准,具备:

- EntryPoint v0.7 部署于以太坊、Base、Optimism、Arbitrum、Polygon、Avalanche、BSC。
- Bundler 基础设施(Pimlico、Stackup、Alchemy、Biconomy)每月处理数亿 UserOp。
- Paymaster 实现无 gas 交易,由应用开发者或 AI agent 平台赞助。

具体到 agent 支付,ERC-4337 提供持有 agent permissioned scope 的底层 **智能合约钱包**。生产架构见 [[systems/erc-4337-overview|ERC-4337 総覧]] 及更深的 UserOp / bundler 流程。Coinbase Smart Wallet、Safe、ZeroDev、Biconomy 以及 2026 中大多数「passkey + AA」移动钱包都是 ERC-4337 SCW。

**生产量背景**:Stackup 的公开仪表盘显示,到 2026中期,各主要 bundler 网络累计处理了 > 100M UserOp。

### ERC-7702 — 经 Pectra 上线主网(PRODUCTION,T+1 年)

ERC-7702 (经交易级授权将 EOA 委托给智能合约代码)作为以太坊 **Pectra 升级** 的一部分于 2025-Q2 出货(Prague-Electra 分叉激活后)。这是 **大规模安装的 EOA 钱包基础**(MetaMask EOA、硬件钱包 EOA)首次能逐交易地选择加入智能合约行为,而无需迁移到独立的 SCW 账户。

| 界面 | 状态 | 日期 |
|---|---|---|
| ERC-7702 EIP 最终 / Pectra 激活 | 在以太坊主网上线 | 2025-Q2 |
| MetaMask EOA + 7702 委托 UX | 已上线 | 2025-Q4 |
| Coinbase Wallet EOA + 7702 | 已上线 | 2025-Q4 |
| Wallet 侧 7702 易用性(一键委托) | 部分;许多钱包仍需 power-user 流程 | 2026-Q2 |

**为何对 agent 重要**:ERC-7702 意味着约 150M 现有 EOA 用户可 **不切换钱包** 即向一个 agent 授予一个单交易级委托。结合 ERC-7715的 `wallet_grantPermissions`,现有的 MetaMask 用户今天(2026-Q2)即可不放弃其助记词,向一个 Claude / Gemini / GPT agent 委托一个 `erc20-token-transfer` USDC scope。委托机制见 [[systems/erc-7702-overview|ERC-7702 総覧]]。

## Agent SDK 集成矩阵

这是关键的「橡胶落地」表 — 哪个 AI agent 厂商出货 **第一方** 支付协议集成,哪个需要社区封装。

| 厂商 / SDK | x402 | AP2 | ERC-7715 | ERC-4337 | ERC-7702 |
|---|---|---|---|---|---|
| **Anthropic Claude Code** | 社区封装 | 未集成 | 社区封装 | 经 MCP tool | 经 MCP tool |
| **Anthropic Claude Agent SDK** | 社区封装 | 未集成 | 社区封装 | 经 MCP tool | 经 MCP tool |
| **OpenAI Agents SDK** | 社区封装 | 部分(早期集成) | 社区封装 | 经 tool registry | 经 tool registry |
| **Google Gemini Agent** | 未集成 | 第一方 | 第一方(Android wallet 试点) | 第一方(Android Wallet 4337 路径) | 第一方 |
| **LangChain / LlamaIndex** | 社区封装 | 社区封装 | 社区封装 | 社区封装 | 社区封装 |
| **Vercel AI SDK** | 第一方 client | 未集成 | 未集成 | 未集成 | 未集成 |
| **CrewAI / AutoGen** | 社区封装 | 社区封装 | 未集成 | 未集成 | 未集成 |

**关键推断**:Anthropic 在支付上刻意保持协议中立,将一切经由 MCP tool 路由,而非第一方集成任何支付协议 SDK。Google 押注 AP2 + 7715 作为纵向自有堆栈。OpenAI 在对冲。Vercel 押注 x402-on-edge 作为纯基础设施打法。

Claude Code 的 tool-call 架构见 [[agent-economy/claude-code-extension-architecture|Claude Code 拡張アーキテクチャ]]。

## 生产部署模式

2026 年 5 月一个生产级 agent 支付流程通常组合:

1. **Wallet 层**:用户拥有 MetaMask EOA + ERC-7702 委托,或 Coinbase Smart Wallet(ERC-4337 SCW)。
2. **Permission 层**:用户经由 `wallet_grantPermissions`(ERC-7715)向 agent 授予一个 scoped permission,例如「$50/天 USDC,仅向域名以 `.vercel.com` 或 `.cloudflare.com` 结尾的商家」。
3. **Settlement asset**:Base 上 USDC(默认)或以太坊 L1 上 USDC(高价值)。
4. **Transport**:在 API edge 的 x402 HTTP 402 握手(Cloudflare Workers 或 AWS API Gateway)。
5. **Identity / mandate**(可选,仅高端商家):AP2 mandate 链,签名 Intent → Cart → Payment。

**生产堆栈频率**(从公开 dev-talk 推断):
- 「x402 + 4337/7702 + Base 上 USDC」— 约 70% 已出货 agent-payment 的初创公司。
- 「AP2 + 7715 + USDC + Mastercard rails」— 约 20%,大多为企业试点。
- 「自定义专有」— 约 10%,大多为金融科技自有端到端(Stripe Issuing、Coinbase CDP)。

组合模式在 [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]] 中有更详细的描述。

## 主网 vs 蒸汽件 — 清晰区分

| 层 | 主张 | 现实 |
|---|---|---|
| Production / 主网上线 | x402 edge 集成 | Cloudflare + AWS 发布文档、收取费用、处理量 |
| Production / 主网上线 | ERC-4337 SCW | 各 bundler 网络累计 100M+ UserOp |
| Production / 主网上线 | ERC-7702 EOA 委托 | Pectra 出货 + MetaMask / Coinbase Wallet UX |
| Production / 部分 | ERC-7715 permission scope | 三个主要钱包上线;可移植性缺口 |
| Consortium / 试点 | AP2 60+ 合作方 | 真实的合作方数量,稀疏的生产流程 |
| 仅规范 | AAIF 之外的「agent 身份联盟」 | 批准前,无出货产品 |

2026中期的底线:任何声称「agent 支付基础设施」却不点名 **至少 x402 或 ERC-4337/7702 或一条企业 rail(Mastercard / Visa Intelligent Commerce)** 的团队,都处在这一分界的蒸汽件一侧。

## 生产时间线(2025-2026 浓缩)

| 季度 | 事件 |
|---|---|
| 2025-Q2 | 以太坊 Pectra 升级出货 → ERC-7702 主网上线 |
| 2025-Q3 | MetaMask + Coinbase Smart Wallet 出货 ERC-7715 `wallet_grantPermissions` |
| 2025-Q4 | Safe + Vercel AI SDK 出货支持层 |
| 2025-Q4 | Cloudflare Workers x402 进入私有 beta |
| 2026-Q1 | Cloudflare Workers x402 在 production tier GA |
| 2026-Q2 | AWS API Gateway + Bedrock AgentCore x402 GA |
| 2026-Q2 | FIDO Alliance 宣布 AP2 移交,更名为 AAIF |
| 2026-Q2 | Apple、Microsoft 加入 AAIF 工作组 |
| 2026-Q3 (预期) | OpenAI Agents SDK 第一方 AP2 集成 |
| 2026-Q4 (预期) | Google Cloud x402 GA |
| 2027-Q1 (目标) | AAIF v1.0 批准 |

## 应避免的三个运营反模式(2026 教训)

**反模式 1:Pre-AA 钱包设计**。在 2024-2025 构建 agent-payment UX 的团队假定他们需要为 agent 准备一个独立的热钱包,由用户充入余额。这造成了 UX 崩塌 — 用户必须管理两个钱包,一个给自己,一个给 agent。ERC-7715 + ERC-7702 使该模式作废。2026 参考架构是 **一个用户钱包,带向 agent 的 scoped 委托**,而非「用户钱包 + agent 钱包」。

**反模式 2:链特定锁定**。将 x402 集成到单一链 USDC(例如仅 Solana、仅以太坊)的团队缩减了可触达的 agent 宇宙。x402的 facilitator 模式是 **明确链无关的**;生产参考挑选 Base 上 USDC(低费用、快最终性、Coinbase 原生)为默认,但经由 facilitator 路由至商家接受的任何资产。锁定到单一链,会重新制造 x402 本就旨在解决的碎片化。

**反模式 3:混淆 MCP 与支付协议**。MCP(Model Context Protocol)是一个 tool-invocation 标准,而非支付标准。2025 中一些团队将 MCP tool 视为「换了个名字的 agent 支付」。这坍缩了两个语义层并制造了安全漏洞:MCP 赋予 agent **调用** 一个 tool 的能力;支付协议赋予 agent **为** 一次调用 **付费** 的能力。两者必须组合,但绝不可坍缩。正确的模式:MCP tool 封装一个 x402 client,后者签署一个用户授予的 ERC-7715 permission,在一个 ERC-4337 或 ERC-7702 钱包上执行,以 USDC 结算。五个不同的层,各有自己的威胁模型。

## 跨堆栈安全组合

生产级 agent 支付堆栈组合五个不同的安全边界。2026 参考清单:

| 层 | 威胁 | 2026 生产堆栈中的缓解 |
|---|---|---|
| Agent prompt injection | 对手诱使 agent 向错误商家付款 | ERC-7715 scope 按域名或地址白名单限制允许的商家 |
| Agent 失控执行 | agent 在付费 API 调用中循环,烧光用户资金 | ERC-7715 `period` + `amount` 周期限制封顶日/周支出 |
| Wallet 签名窃取 | 攻击者获得 agent 的 session key | session key scope 有限;撤销在链上但廉价 |
| 商家超额收费 | 商家收取超过报价的金额 | x402 facilitator 验证 `X-Payment` 金额与声明价格一致 |
| 结算链 reorg | L2 重组影响 USDC 结算 | Base / Optimism 最终性 + facilitator 信用缓冲吸收短 reorg |

正是这一组合,使得真正的「主网采用」检查 **不仅仅** 是「x402 在 Cloudflare 上运行」— 而是「生产部署中的这五层是否真正互锁?」对头部 5-10 agent 平台而言,2026 答案是:大多是的,在 prompt-injection 层有可审计的缺口(无协议级缓解,仅应用级 prompt 卫生)。

## 若发生重大事件会改变什么

2026 主网上线堆栈尚未经受过一次 **重大公开 agent-payment 漏洞利用**。值得警惕的事件类别:

1. **Agent prompt injection 抽干 scoped allowance**:agent 被诱使在用户 scope 内($50/天限额)向恶意商家付款,抽干日限额,连续多日重复。缓解需要 UX 级白名单收紧,而非协议变更。
2. **Facilitator 对手方失败**:Cloudflare 或 AWS facilitator 发生计费争议并拒绝向商家转发已结算的 USDC。缓解需要商家侧的 facilitator 多样化。
3. **ERC-7715 跨钱包可移植性 bug**:在 MetaMask 中授予的 scope,在资产移至 Safe 管理的多签时被以不同方式解读。缓解需要尚不存在的标准化。
4. **agent 流程中途 stablecoin 脱锚**:USDC 在执行中途短暂脱锚;agent 看到不一致的商家定价。缓解需要商家侧以对短期 USDC 波动稳定的记账单位定价。

公开新闻尚未在 2025-2026 生产中记录上述任何一种。事件的缺席是低绝对量的函数;随着 agent-payment 量到 2027, 扩大 10-100倍,事件概率也随之扩大。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS]]
- [[agent-economy/erc-7715-overview|ERC-7715 総覧]]
- [[agent-economy/claude-code-extension-architecture|Claude Code アーキテクチャ]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- Cloudflare Workers x402 release notes (developers.cloudflare.com, 2026-Q1)
- AWS API Gateway x402 integration announcement (aws.amazon.com/blogs, 2026-Q2)
- Google AP2 launch consortium press (cloud.google.com, 2025-09)
- Ethereum Pectra upgrade release notes (ethereum.org, 2025-Q2)
- Anthropic Claude Code SDK documentation (anthropic.com, 2026)
- OpenAI Agents SDK documentation (openai.com, 2026)
- Google Gemini Agent platform documentation (developers.google.com, 2026)
- FIDO Alliance AAIF announcement (fidoalliance.org, 2026-Q2)
- ERC-7715 EIP draft (eips.ethereum.org)
- ERC-4337 EIP final (eips.ethereum.org)
- ERC-7702 EIP final (eips.ethereum.org)
- Coinbase x402 spec v1.0 (x402.org, 2025-05)
- Stackup / Pimlico / Alchemy public bundler dashboards (2026)

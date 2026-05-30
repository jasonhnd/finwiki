---
source: agent-economy/agent-custody-and-authorization-framework-2026
source_hash: 61c64e87c0aa20a8
lang: zh
status: machine
fidelity: ok
title: "Agent 托管与授权框架 · 2026-05 参考架构"
translated_at: 2026-05-30T16:40:11.486Z
---
# Agent 托管与授权框架 · 2026-05 参考架构

## TL;DR

2026 的 Agent 托管与授权已收敛为一个 **三轴设计空间**:(1) **托管模型** — 完全自托管(用户持有密钥,Agent 无独立控制权)、混合式(Lit PKP 阈值或带策略代码的 session-key)、或完全托管式(Privy / Magic / Coinbase CDP / Skyfire);(2) **授权粒度** — 单笔交易(Agent 须就每个动作请求用户批准)、有时限(scope 在到期前有效)、有金额上限(滚动窗口内的支出上限)、按支出规则限定(允许的商家 / 类别 / 模式);(3) **撤销机制** — 链上即时(销毁权限 NFT、撤销 ERC-7715 授权)、链下钱包中介(Privy 管理员撤销)、法律 / 合约(Skyfire 发行方账本记录)。**传统券商有限委托授权书(LPOA)** 提供了法理上的类比 — 数十年来,券商一直以 scope(资产类别)、金额(规模限制)、撤销(书面通知)和审计链(对账单)向投资顾问授予对客户账户的酌情权。2026 的 Agent 托管架构就是 **数字原生的 LPOA** 加上 **链上撤销原语**。多签 / 阈值控制增加了一个「第二双眼睛」模式:一笔交易需要同时具备 Agent 的签名和一个共签者的签名(Lit Action 策略、人类审批者,或充当 oracle 的第二个 Agent)。托管 + 授权 + 撤销 + 多签 + 审计链的组合,正是监管机构在监督 Agent 驱动流程时所审查的内容,通过 [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] 和 [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]] 映射。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]] for the identity attestation it pairs with, [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]] for the protocol layer, [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]] for the application surfaces, [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]] for the trading-specific regulator overlay, [[agent-economy/erc-7715-overview|ERC-7715 overview]] + [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] for the wallet permission primitive, [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] + [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer]] for the wallet substrate, [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] for threshold custody, [[agent-economy/privy-embedded-wallet-overview|Privy]] + [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] for embedded-wallet custody, [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire]] for issuer-level custody, [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]] for the legal-isolation pairing, and [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] for the doctrine. For the brokerage analog see [[banking/custody-bank-operating-model|custody bank operating model]] and [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]].

## 三轴设计空间

### 轴 1 · 托管模型

**完全自托管(用户持有密钥,Agent 无独立控制权)**:
- 用户的 EOA 持有资金;Agent 从不具备签名能力
- Agent 组装未签名交易;用户通过钱包逐笔批准
- 安全性最高,Agent 自主性最低
- 用例:用户在环路内的高价值 / 高风险一次性交易
- 示例:构造交易供用户在 MetaMask、OneKey、Ledger、Trezor 中审查的 Claude / GPT agent

**混合式(Lit PKP 阈值或带策略代码的 session-key)**:
- Agent 持有一个 session key 或一个需经策略评估才能签名的 Lit PKP
- 资金存放于用户控制的 SCW 或 EOA 委托地址;Agent 在 scope 内签名
- Lit Actions 提供运行时策略执行(速率限制、scope 检查、多因素)
- 用例:需要在用户离线 / 睡眠时行动、但带有硬编码策略护栏的自主 Agent
- 示例:用于资金自动化的 Lit PKP 控制 Agent;用于 AI agent 购物的 ERC-7715 + ERC-4337 session key

**完全托管式(Privy / Magic / Coinbase CDP / Skyfire)**:
- 托管方持有密码学密钥(通常为 MPC 分片或 HSM 支持)
- 用户通过 passkey / OAuth / 邮件 OTP 向托管方认证
- Agent 经由托管方签发的 API key 运作,scope 由托管方强制执行
- 便利性最高,需要信任托管方 + 托管方的偿付能力
- 用例:消费级 Agent 支付、企业级 Agent 签发
- 示例:Privy 嵌入式钱包、Coinbase CDP 钱包、Magic 嵌入式钱包、Skyfire 签发的 Agent 身份

托管方市场结构见 [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet landscape 2026 consolidation]],法律隔离要求见 [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]]。

### 轴 2 · 授权粒度

| 粒度 | 描述 | 支持方 |
|---|---|---|
| **单笔交易** | Agent 须就每个动作请求用户批准 | 任何钱包(默认) |
| **有时限** | Scope 在 `expiresAt` 时间戳前有效 | ERC-7715 `expiry`;Skyfire 账本;AP2 mandate 有效期 |
| **有金额上限** | 滚动窗口内的支出上限(例如 $50/天、$500/月) | ERC-7715 `period` + `amount`;Skyfire 支出上限;Privy 应用级上限 |
| **按支出规则限定** | 允许的商家 / 类别 / 模式 | ERC-7715 `permissionsContext` 白名单;Skyfire 商家类别限制;AP2 mandate scope |
| **按资源限定** | 允许特定资产(仅 USDC,不含 ETH;特定代币) | ERC-7715 `permission.type`(例如针对特定代币的 `erc20-token-transfer`);Skyfire 卡级配置 |
| **组合** | 上述的组合(例如「仅向 .vercel.com 每日 $50,仅 USDC,7天到期」) | 大多数生产堆栈组合 3+ 项 |

2026 的生产参考:**组合是常态**。单一维度很少够用。真实的 Agent 权限看起来像:

```
GRANT to agent_id A1:
  type: erc20-token-transfer
  token: USDC@0xa0b86991c... (Base mainnet)
  amount_cap: 50 USDC
  period: 1 day (rolling)
  expiry: 2026-08-25T00:00:00Z
  allowed_targets:
    - merchant_domain: *.vercel.com
    - merchant_domain: *.cloudflare.com
    - merchant_address: 0x1234...
  required_attestation: AP2 mandate VC signed by user A's WebAuthn key
```

### 轴 3 · 撤销机制

**链上即时**:
- 销毁权限 NFT(若 scope 以 NFT 编码,如某些 Coinbase Smart Wallet 模式)
- 在兼容 ERC-7715的钱包上调用 `revokePermissions`(区块最终性即时撤销)
- ERC-4337 SCW 中的资金可由用户签署一个撤销 UserOp 来移除 session key
- 成本:撤销交易的 gas 费(在 L2上通常 <$0.50 )

**链下钱包中介**:
- Privy / Magic / Coinbase CDP 管理控制台 — 用户登录并禁用 Agent 的 API key
- 托管方在签名时强制执行撤销
- 速度:数秒(托管方 API 调用)

**法律 / 合约**:
- Skyfire 签发的 Agent:用户联系 Skyfire 支持 / 门户禁用卡
- Stripe Issuing:用户致电 Stripe Dashboard 冻结虚拟卡
- 速度:数秒至数分钟(取决于发行方处理)

**混合定时过期**:
- 有时限的 scope 无需任何主动撤销动作即自行过期
- 用例:运作于一个 7天项目的 Agent;即便用户忘记撤销,权限也会自动过期
- 这是 **最安全的默认值**,也是推荐的基线

## 多签 / 阈值 Agent 控制

对于高价值或机构部署的 Agent,**单签 Agent 控制** 是不够的。多签 / 阈值模式:

### 模式 1 · Agent + 人类共签者

- Agent 构造交易;人类(司库、合规官、董事会成员)须共签
- 用例:必须就 > $X 的交易提请人类批准的企业资金 Agent
- 实现:以 Agent 为提议者 + N 个人类为审批者的 Safe (Gnosis Safe) 多签
- SCW 基底见 [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]]

### 模式 2 · Agent + Lit Action 策略

- Agent 的 PKP 签名需要 Lit Action 策略评估
- Lit Action 强制运行时检查(速率限制、scope、多因素)
- 无人类在环,但有代码在环,带可审计的 JavaScript 策略
- 见 [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]

### 模式 3 · Agent + 第二个 Agent(oracle)

- 两个 Agent 须就一笔交易达成一致;两者都须签名
- 用例:一个 Agent 充当提议者,第二个 Agent 充当验证者(通常为 LLM 驱动的验证)
- 风险:若两个 Agent 共享同一模型缺陷,会出现相关性故障
- 缓解:使用不同的模型提供方(一个 Agent 用 Claude,第二个用 GPT)以求多样性

### 模式 4 · m-of-n 阈值

- 一笔交易需要 n 个签名者中的 m 个签名
- 签名者可以是人类、Agent、硬件密钥、HSM 的混合
- 用例:采用 2-of-3 或 3-of-5 多签的企业资金,其中 Agent 与人类都有资格作为签名者
- 实现:Safe + 阈值 ECDSA;或特定链上的 BLS 多签

## 与传统券商有限委托授权书(LPOA)的比较

来自传统金融的法理类比是客户通过有限委托授权书(LPOA)授予投资顾问的 **酌情交易权**。该结构已稳定约 50 年:

| 维度 | 券商 LPOA | Agent ERC-7715 / Skyfire 等价物 |
|---|---|---|
| **Scope** | 资产类别(股票、固定收益、外汇) | `permission.type`(token、transfer、swap) |
| **金额** | 持仓规模限制,有时为名义金额 | `amount_cap` + `period` |
| **时间** | 无限期但保留撤销权;部分有时限 | `expiry` 时间戳 |
| **认可的交易对手** | 券商的执行场所 | `allowed_targets` 白名单 |
| **撤销** | 书面通知;通常 T+1 生效 | 链上即时或钱包中介数秒 |
| **审计** | 月度对账单 + Form 8949 / 法定调书 | 链上账本 + 签名回执 + 审计日志 |
| **责任** | 客户负责;顾问受信义义务约束 | 部署方负责;Agent 提供方可能负有合约责任 |
| **监管机构** | SEC IA / BD 监督、FINRA、FSA Type-1 / Type-2 FIBO | 经由部署方的受监管活动间接监管 |

这些结构上的对应是有意为之的。Agent 托管 / 授权是一种 **数字原生的 LPOA**,带有 **更强的撤销原语** 和 **更细粒度的 scope 表达**。法律法理几乎原封不动地延续过来:委托人(用户 / 部署方)保留责任;Agent 在被授予的 scope 内拥有有限权限;撤销是委托人的单方面权利。完整法理映射见 [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]],券商 LPOA 框架见 [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]]。

## 托管 x 授权 x 撤销矩阵 · 生产模式

| 模式 | 托管 | 授权 | 撤销 | 用例 |
|---|---|---|---|---|
| **消费级聊天 Agent** | 完全托管式(Privy / Coinbase CDP / Magic) | 支出规则 + 金额上限 + 时限 | 链下管理控制台 | 随意的 AI agent 购物 |
| **企业资金 Agent** | 混合式(Safe 多签 + 人类共签者) | 按资源 + 金额上限;m-of-n 阈值 | 经 Safe 管理员链上即时 | B2B 采购 / 供应商付款 |
| **自主研究 Agent** | 混合式(带 Lit Action 策略的 Lit PKP) | 时限 + 策略编码 | 经 PKP NFT 转移链上撤销 | 长时运行的数据采集 Agent |
| **发行方中介的 Agent 商务** | 完全托管式(Skyfire / Stripe Issuing) | 商家类别 + 金额上限 + 时限 | 发行方控制台(数秒) | Visa 通道商家购物 |
| **高价值机构 Agent** | 完全自托管 + Agent 仅提议 | 单笔交易(用户逐笔批准) | 不适用(无自主授权) | $1M+ 交易;Agent 仅为顾问 |
| **跨司法辖区自主 Agent** | 混合式(跨不同辖区节点的 Lit PKP 阈值) | 带辖区专属规则的策略编码 | 经 PKP NFT 链上撤销 | 抗审查的 Agent 运作 |

## 撤销延迟 · 运营上真正重要的是什么

不同的撤销机制具有实质性不同的延迟。2026-05 参考数字:

| 机制 | 典型延迟 | 故障模式 |
|---|---|---|
| **链上即时(ERC-7715 撤销)** | 1-15 秒(L2 最终性) | RPC 传播;bundler 延迟 |
| **链下钱包中介(Privy 管理员)** | 1-5 秒 | 托管方 API;缓存的签名密钥 |
| **发行方账本(Skyfire / Stripe Issuing)** | 5-30 秒 | 发行方向卡网络的下游传播 |
| **法律 / 合约(书面通知)** | 数小时至数天 | 顾问须处理;T+1 生效 |
| **定时过期** | 0 秒(自动) | 需要正确的时钟;时钟漂移攻击 |

运营层面的含义:**以链上即时 + 定时过期作为基线默认值** 给出最强的撤销特性。当托管方可信时,链下中介是可接受的;法律 / 合约撤销对于高频 Agent 运作而言太慢。

## 跨堆栈组合检查清单

一个生产级的 Agent 托管 + 授权部署应当明确:

- [ ] **托管模型** — 自托管 / 混合 / 托管式(若托管式则注明供应商)
- [ ] **密钥材料位置** — 本地 TEE / 云 TEE / 阈值网络 / HSM
- [ ] **授权粒度** — 所组合的粒度清单(时间 + 金额 + scope + 资源)
- [ ] **撤销机制** — 链上 / 链下 / 法律,附延迟目标
- [ ] **多签 / 阈值** — 如适用,签名者构成(m-of-n)
- [ ] **审计链** — 记录什么、记录在哪、保留期限
- [ ] **故障模式** — 若托管方 / Lit 网络 / bundler 宕机会发生什么
- [ ] **恢复** — 若用户丢失 passkey / 设备会发生什么
- [ ] **保险 / 保证金** — 托管方是否有保证金;适用何种破产隔离(见 [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]])
- [ ] **身份认证** — 什么将 Agent 的密钥绑定到部署方(见 [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]])

未明确上述全部内容的生产设计是不完整的,且将无法通过监管审查。

## Sources

- Privy docs (docs.privy.io)
- Magic docs (docs.magic.link)
- Coinbase CDP docs (docs.cdp.coinbase.com)
- Skyfire docs (docs.skyfire.xyz)
- Lit Protocol developer docs (developer.litprotocol.com)
- ERC-7715 EIP draft (eips.ethereum.org/EIPS/eip-7715)
- ERC-4337 EIP final (eips.ethereum.org/EIPS/eip-4337)
- ERC-7702 EIP final (eips.ethereum.org/EIPS/eip-7702)
- Safe (Gnosis Safe) docs (docs.safe.global)
- FINRA Notice 12-25 on discretionary authority and LPOA (finra.org)
- SEC Investment Advisers discretionary authority guidance (sec.gov)
- Japan FSA Financial Instruments and Exchange Act (fsa.go.jp)
- CFTC press releases on adviser registration (cftc.gov)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet landscape 2026 consolidation]]
- [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[banking/custody-bank-operating-model|custody bank operating model]]
- [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]]
<!-- /wiki-links:managed -->

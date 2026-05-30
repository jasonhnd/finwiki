---
source: agent-economy/embedded-wallet-network-effects-moat
source_hash: f1f459339a820e18
lang: zh
status: machine
fidelity: ok
title: "嵌入式钱包的网络效应 · 护城河在整合方而非钱包本体"
translated_at: 2026-05-30T17:04:08.789Z
---

# 嵌入式钱包的网络效应 · 护城河在整合方而非钱包本体

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Privy 整合方 1000+ dApp:Hyperliquid · Friend.tech · Pump.fun · Story · ZkSync 等 ^[extracted]
- Coinbase CDP 的用户基础 = Coinbase 90M+ 注册账户 + Base 生态 ^[extracted]
- Privy 于 2024.10 完成 $40M B 轮(Ribbit / Sequoia / Paradigm) ^[extracted]
- AWS AgentCore Payments 于 2025.07 GA · Privy 为默认 · 用户可切换到 Magic / Web3Auth ^[extracted]

## Mechanism / How it works

**网络效应存在于集成层 · 3层飞轮**:

```
整合方数量 ↑
  ↓
跨 dApp 用户体验的一致性 ↑
  ↓
新整合方的默认选项 ↑
  ↓
整合方数量 ↑(循环)
  ↑
AgentCore / AWS / 主要 SaaS 厂商追认(2025.07+)
  ↑
监管(GENIUS §501)友好(嵌入式钱包不持有 USDC 余额 → 非 VASP)
```

整合方越多 → 用户可在跨 dApp 中让 wallet「follow me」→ 新整合方更倾向于选同一个 wallet → 飞轮启动。

**与传统支付的类比**:

| 类比 | 嵌入式钱包的对应物 |
|---|---|
| Stripe payments | 后端化 · 整合方无需理解 card 组织 |
| Plaid bank linking | 用户授权 · 后端聚合 |
| OAuth 2.0 | wallet = OAuth provider · dApp = OAuth consumer |
| Twilio SMS | 抽象掉底层基础设施的复杂性 |

**Privy = "Stripe of Web3 wallets"** 自 2024.Q4 起成为 a16z / Sequoia 投资逻辑的核心 · 于 2025-2026 被 AWS AgentCore 验证。

**§501 监管友好的关键设计**:用户的 USDC / USDB 余额 **直接存于用户的 on-chain wallet**(Privy / CDP-derived address) · Privy / CDP 自身 **不持有用户余额**(MPC + TEE 隔离) · 仅提供 key management / signing 服务 → 既非 money transmitter · 也非 custodian(参见 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist mandate]] · 与 [[exchanges/cex-matching-engine-wallet-architecture|CEX カストディモデル]] 形成鲜明对照)。

## Origin & evolution

2018-2022 = MetaMask 主导 · 用户主动安装。2023-2024 = Privy / Magic / CDP 切入 b2b SaaS · 1000+ dApp 默认集成(技术基础的普及参见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]])。2025.07 = AWS AgentCore 选定 Privy 为默认 · 嵌入式钱包从 crypto 工具升级为通用支付基础设施。2025-2026 Tempo / Base / Arc 生态预计将集体采用嵌入式钱包(而非自建) · 「全行业默认」的格局成形。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレット中抜き · 総覧]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]
- [[fintech/ai-payment-two-tracks|AI 決済の二軌道]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
<!-- /wiki-links:managed -->

## Sources

- AWS Bedrock AgentCore Payments GA 公告(2025.07) · Privy $40M B 轮(2024.10)
- Privy docs — https://docs.privy.io/
- Coinbase Developer Platform (CDP) docs — https://docs.cdp.coinbase.com/

---
source: fintech/embedded-wallet-fintech-disintermediation-overview
source_hash: df438ae2cf5c9371
lang: zh
status: machine
fidelity: ok
title: "嵌入式钱包驱动的金融科技脱媒 · 四强格局"
translated_at: 2026-05-31T06:16:15.684Z
---

# 嵌入式钱包驱动的金融科技脱媒 · 四强格局

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 嵌入式钱包（Embedded wallet）是 2025-2026  金融科技中承载逆向脱媒的重要载体——**Privy（Stripe 于 2025.06  以约 $1.1B 收购）/ Coinbase CDP / Magic / Web3Auth** 四强将金融科技既有客户基础转化为加密货币入口，使用户在**无感知**的状态下实现持有/转账/签名。协议基础为 ERC-4337/7702/7715 三件套。

## 关键事实

- Stripe 于 2025.06  以约 $1.1B 收购 Privy · 同期以 $1.1B 收购 Bridge ^[extracted]
- Coinbase CDP 2024  发布 · onchainkit + 智能钱包一体化 · 触达 Coinbase 1 億 万以上用户 ^[extracted]
- Magic 2018  创立 · 从邮件魔法链接起步 · 后转向 MPC · $99/月 + 按量计费 ^[extracted]
- Web3Auth（原 Torus Labs）采用开源 + 企业双轨 · BNB Labs 投资 ^[extracted]
- Privy 客户：OpenSea · Friend.tech · Hyperliquid + Stripe 5M+ 商户构成潜在分发渠道 ^[extracted]

## 机制 / 运作方式

**四强差异化对照**：

| 维度 | Privy（Stripe） | Coinbase CDP | Magic | Web3Auth |
|---|---|---|---|---|
| 所有方 | Stripe（2025.06 收购） | Coinbase（上市） | 独立（Tiger 投资） | 独立（BNB Labs 投资） |
| TSS | Shamir SSS 2/3 + 服务器 | MPC 分布式 + 设备 | DKLs MPC 2/2  | tKey + OAuth 重构 |
| API | React SDK 5 行 | CDP SDK · onchainkit | Magic Link SDK | Web3Auth Modal |
| 链 | EVM + Solana | EVM + Base + Solana | EVM 多链 | EVM/Solana/Aptos |
| 分发渠道 | Stripe 5M+ 商户 | Coinbase 1 億万以上用户 | 独立·中立 | 独立·中立 |

**"用户无感"UX 的五要素**：
- 入门：Google/Apple/Email 一键 · TSS 密钥在后端 · 无助记词
- 签名：session key（7702/7715）1  次授权 · session 内无弹窗
- Gas：Paymaster 代付（4337）· 支持 USDC 支付或完全赞助
- 恢复：多份 share（设备 + 云端 + 服务器）分散
- 跨链：Hyperlane / CCIP 在后端协调 · 用户看到单一余额

**协议基础**：[[systems/erc-4337-overview|ERC-4337]]（AA SCW）+ [[systems/erc-7702-overview|ERC-7702]]（EOA → SCW 临时升级）+ [[agent-economy/erc-7715-overview|ERC-7715]]（细粒度权限）三件套组合 = 用户无感 + 无缝升级 + 细粒度授权。

## 起源与演进

2018-2022  = MetaMask 主导 · 用户主动安装 · 助记词自我管理 · 加密原生边界清晰。2023-2024  = Privy / CDP / Magic 转向 B2B SaaS · 客户从 dApp 扩展至金融科技。2025.06  = Stripe 同时收购 Privy + Bridge · 金融科技正式将加密货币入口内嵌，具有标志性意义。2025.07  = AWS Bedrock AgentCore Payments 将 Privy 选为默认选项（详见 [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AgentCore]]）· 嵌入式钱包从加密工具升格为通用支付基础设施。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|組込み型ウォレット · Stripe 五層 Trojan horse]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
<!-- /wiki-links:managed -->

## 来源

- Stripe Privy / Bridge 收购公告（2025.06）

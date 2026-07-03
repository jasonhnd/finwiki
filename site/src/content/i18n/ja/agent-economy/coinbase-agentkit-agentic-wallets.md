---
source: agent-economy/coinbase-agentkit-agentic-wallets
source_hash: 71f108629ca3ce9a
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Coinbase AgentKit & Agentic Wallets · Base 上の agent ウォレット"
translated_at: 2026-07-03T00:00:00.000Z
---

# Coinbase AgentKit & Agentic Wallets · Base 上の agent ウォレット

## ウィキ上の位置づけ

本エントリは [[agent-economy/INDEX|agent-economy index]] の中で、Coinbase による agent wallet / agent payment 実装を扱う。より広い開発者基盤は [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、HTTP 決済プロトコルは [[agent-economy/x402-http-payment-overview|x402]]、隣接する wallet permission 設計は [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 account abstraction for agents]]、主要な embedded-wallet 対抗軸は [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallets]] と併せて読む。

## 主要事実

- Coinbase は 2024-11-08 に AgentKit を公開した。これは transfer、token swap、smart-contract interaction などの onchain 操作を AI agent に持たせるための CDP framework である。^[extracted]
- 現在の `coinbase/agentkit` repository は、AgentKit を AI agent に crypto wallet と onchain interaction を与える CDP toolkit と説明し、framework-agnostic / wallet-agnostic な統合を掲げている。^[extracted]
- Coinbase は 2026-02-11 に Agentic Wallets を発表した。これは agent 専用の wallet infrastructure であり、一般的な CDP platform entry や open AgentKit framework とは区別される。^[extracted]
- Agentic Wallets には 2 つの入口がある。`awal` command を使う Agentic Wallet CLI と、Claude / Codex / Gemini など MCP-compatible agent 向けの Agentic Wallet MCP server / companion app である。^[extracted]
- Coinbase の Agentic Wallets ページは x402 を中核の payment standard と位置づけ、x402 が 50M+ transactions を処理済みで、machine-to-machine payments、API paywalls、programmatic resource access を可能にすると説明している。^[extracted]
- Coinbase の product page は Agentic Wallets が Base 上の任意 token について gasless trading を支援すると説明し、MCP documentation は Base / Polygon / Solana 上の automatic payments を挙げている。^[extracted]
- 2026 年時点の公式 CDP Wallets v2 security story は TEE / enclave isolation と programmable policy controls であり、現行の MPC key-shard model ではない。Coinbase の CDP Wallets launch は "no MPC, no key shards" と明記し、previous Wallet API v1 が MPC-based だったと説明している。^[extracted]
- したがって "MPC agent wallets" は legacy / category shorthand または Coinbase の cryptography background として扱うのが安全で、検証済みの Agentic Wallet launch claim は CDP Wallets + TEE isolation + session / transaction guardrails である。^[inferred]
- 競争上の位置づけとして、Coinbase は open AgentKit actions、CDP wallet security、x402 payment discovery、Base gas abstraction を束ねる。Privy は app 横断の embedded-wallet UX、Circle Wallets は product に応じて MPC または passkey で保護される USDC-native wallet API に重心を置く。^[inferred]

## 仕組み / 動作原理

AgentKit と Agentic Wallets は隣接しているが同義ではない。**AgentKit** は open-source の agent framework layer であり、AI agent が LangChain、Vercel AI SDK、MCP などの runtime から onchain action を呼べるように、wallet provider、action provider、framework adapter を提供する。GitHub repository は framework-agnostic かつ wallet-agnostic な設計を明示しているため、同じ agent action layer を CDP wallets、smart wallets、Privy、viem、custom provider の上に置ける。

**Agentic Wallets** は Coinbase が autonomous agent 向けに product 化した wallet surface である。CLI path は、wallet skills を導入して agent workflow から `awal` commands を呼びたい developer 向けで、authenticate、fund、send、trade、x402 service payment を扱う。MCP path は、コードを書かずに MCP-compatible client から使いたい user 向けで、`npx @coinbase/payments-mcp` が local MCP server と companion wallet app を導入し、agent が x402 services を発見して wallet context から API call の支払いを行う。

security boundary は prompt ではなく wallet layer にある。Agentic Wallets は CDP non-custodial wallet infrastructure を継承し、request は authenticated、policy-checked された後、private-key operation のため Trusted Execution Environment に渡される。user / operator は session caps、per-transaction limits、transfers、onramp flows を管理し、LLM は raw key material ではなく tool を見る。この設計が重要なのは、agent wallet の主要リスクが key theft だけではなく、task boundary の外で支出しようとする prompt injection や tool routing error にもあるためである。

x402 は wallet を agent-native にする transaction rail である。agent は API ごとの事前登録をせず、HTTP 402 payment requirement を受け取り、小額 stablecoin payment を authorize して request を継続できる。Agentic Wallet MCP はこの pattern を MCP client 向けに包み、agent が paid services を発見し、supported networks 上の USDC で支払い、data を user に返す。Base 上では Coinbase が gas abstraction path を加えるため、低額 API / compute payment のたびに agent が native ETH を持つ必要がない。

title に含まれる "MPC" は慎重に読むべきである。Coinbase は open MPC cryptography stack を持ち、古い CDP wallet material は Wallet API v1 を MPC-based と説明している。しかし 2026 年の Agentic Wallet / CDP Wallets v2 について Coinbase が文書化している architecture は enclave / TEE based で、MPC key shards との対比を明示している。事実記述としては、MPC は historical comparison point、現行 product architecture は TEE + policy guardrails と扱う。

## 起源と進化

順序は **AgentKit が先、Agentic Wallets が後** である。Coinbase は 2024-11 に AgentKit を公開し、AI agent の中に onchain actions を組み込む framework を提供した。この launch が解いたのは developer-tooling problem であり、agent が normal AI framework から transfer、swap、deploy、smart-contract action をどう呼ぶかという問題だった。

その後、CDP Wallets が automation-grade wallet substrate を供給した。2025 年の CDP Wallets v2 launch は、backend systems、bots、agents 向けに wallet を再定義し、scoped APIs による create / sign、AWS Nitro Enclaves 内の sensitive operations、signing 前の wallet policy enforcement を前面に出した。これは earlier MPC-based Wallet API v1 path とは異なり、agent wallet を prompt-held hot key ではなく programmable custody として扱える理由である。

2026-02-11 に発表された Agentic Wallets は、それらの部品を autonomous money movement 向けに packaging した。`awal` CLI と MCP server という agent-facing distribution surfaces を追加し、x402 と Base を payment use case の中心に置いた。戦略的には、Coinbase は単なる Web3 developer platform ではなく、crypto-native agent にとっての「agent has a wallet and can pay now」default を取りにいっている。

[[agent-economy/privy-embedded-wallet-overview|Privy]] に対する Coinbase の優位は Base + x402 + CDP integration loop であり、Privy の優位は consumer app 横断の embedded-wallet distribution と Web2-style onboarding である。Circle Wallets に対しては、Coinbase は neutral USDC wallet API というより、Base execution、x402 discovery、wallet policies、CDP telemetry を束ねた vertically integrated agent-commerce stack に近い。[[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire]] と比べると、Coinbase は card-network closed loop ではなく、open stablecoin / onchain-native infrastructure 側に位置する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 account abstraction primer for agents]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded wallet landscape 2026 consolidation]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop agent issuer]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## 出典

- Coinbase, "Introducing AgentKit" — https://www.coinbase.com/developer-platform/discover/launches/introducing-agentkit
- Coinbase `agentkit` GitHub repository — https://github.com/coinbase/agentkit
- Coinbase Developer Documentation, AgentKit overview — https://docs.cdp.coinbase.com/agent-kit/welcome
- Coinbase, "Introducing Agentic Wallets: Give Your Agents the Power of Autonomy" — https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets
- Coinbase Developer Platform product page, Agentic Wallets — https://www.coinbase.com/developer-platform/products/agentic-wallets
- Coinbase Developer Documentation, Agentic Wallet overview — https://docs.cdp.coinbase.com/agentic-wallet/welcome
- Coinbase Developer Documentation, Agentic Wallet MCP overview — https://docs.cdp.coinbase.com/agentic-wallet/mcp/welcome
- Coinbase, "Introducing CDP Wallets (now in Beta): Full Control, Zero Key Management" — https://www.coinbase.com/developer-platform/discover/launches/cdp-wallets-launch
- Coinbase Developer Documentation, CDP Wallets security overview — https://docs.cdp.coinbase.com/wallets/security-and-policies/security-overview
- Circle Wallets documentation — https://developers.circle.com/wallets

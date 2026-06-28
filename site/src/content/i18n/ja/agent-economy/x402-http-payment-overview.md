---
source: agent-economy/x402-http-payment-overview
source_hash: 2f5dd3bbc4779bba
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)"
translated_at: 2026-06-26T08:29:09.693Z
---

# x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)

## ウィキ上の位置づけ

本エントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の配下にある。同位／対比の文脈として [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤]] と、より広いシステム／規制境界として [[payments/INDEX|payments index]] と併せて読むこと。

## 主要事実

- 2025-05 Coinbase がオープンソースプロトコルとして発表 · HTTP 402(1996 年定義以来未使用)を復活させた ^[extracted]
- デフォルト決済:USDC on Base · Solana / 他の L2 もサポート ^[extracted]
- 決済層はプロトコル非依存 · アプリは Solana USDC / Tron USDT / 任意の EVM L2 に切替可能 ^[extracted]
- Facilitator モデル:Server が facilitator(Coinbase など)に決済検証を委託 ^[extracted]
- hot ウォレット + ERC-4337 SCW をサポート · agent は任意のウォレットで利用可能 ^[extracted]
- USDC on Base 決済 < 2s · Facilitator モデル < 100ms ^[extracted]
- 単発 gas < $0.001(Base L2 + 4337 paymaster) ^[extracted]
- x402 Bazaar MCP は 10,000+ endpoints を収録 ^[extracted]

## 仕組み / 動作原理

AI agent 経済は SaaS サブスクモデルと根本的に噛み合わない。agent は数百の API を一時的に呼び出す可能性があり、API ごとに「登録 + クレカ + 購読 + API key 管理」のフローを通すのは agent には不可能である。必要なのは per-call マイクロペイメント + 即時認証 + アカウント登録不要だ。**x402 プロトコルフロー**:(1) クライアントが API エンドポイントにリクエスト;(2) Server が `HTTP 402 Payment Required` + `X-Payment-Required` ヘッダ(金額・宛先・accepted assets を含む)を返却;(3) クライアントが [[fintech/usd-stablecoin-interchange|USDC]] 送金を構築;(4) クライアントが `X-Payment` ヘッダ(tx hash / proof を含む)を付けてリクエスト再送;(5) Server が決済を検証 → データを返却。Facilitator モデルにより Server は自分でオンチェーン tx を検証する必要がない — Coinbase / Cloudflare 等の facilitator に委託することで実装ハードルを下げつつ < 100ms に短縮(agent のウォレットは通常 [[systems/erc-4337-overview|ERC-4337]] または [[systems/erc-7702-overview|ERC-7702]] ベースで、UserOp は [[systems/erc-4337-userop-bundler-flow|bundler]] が処理する)。

## 起源と進化

RFC 7231 は HTTP 402 Payment Required を定義しつつも "reserved for future use" として空欄のまま残し · 30 年間誰も活用してこなかった。理由は universal payment rail の欠如である。USDC + ステーブルコインがこれを解決した(戦略空間は [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]] を参照)。2025-05 Coinbase が x402 を spec としてオープンソース化(github.com/coinbase/x402) · デフォルトで USDC on Base にバインド。2025 H2 の初期採用者には Vercel AI SDK / Cloudflare Workers の実験的実装が含まれる。2026-Q1 Cloudflare が x402 を Workers の本番環境に統合 → グローバル HTTP トラフィックの 20%+ がデフォルトで payment rail を備えることになった。2026-Q2 AWS API Gateway も追随。x402 Bazaar MCP は agent-discoverable な有料 API ディレクトリとして 10,000+ エンドポイントを収録している。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS エッジ統合]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## 出典

- x402 protocol (Coinbase) — https://github.com/coinbase/x402

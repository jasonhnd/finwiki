---
title: x402 x Cloudflare / AWS · エッジ層のデフォルト決済コンポーネント
aliases: [x402-cloudflare-aws-edge-integration, x402-cloudflare-workers, x402-aws-api-gateway]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [agent-economy, x402, cloudflare, aws, edge, facilitator, http-402]
sources:
  - https://github.com/coinbase/x402
status: active
---

# x402 x Cloudflare / AWS · エッジ層のデフォルト決済コンポーネント

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2026-Q1 Cloudflare Workers が x402 をネイティブ統合 ^[extracted]
- 2026-Q2 AWS API Gateway が x402 を統合 · Bedrock agent が有料 API を呼び出し可能に ^[extracted]
- Cloudflare はグローバル HTTP トラフィックの 20%+ を処理 ^[extracted]
- 開発者は 5 行の設定で API を商業化可能 · Cloudflare は 1-2% の facilitator fee を徴収 ^[extracted]
- Facilitator モデルは < 100ms の検証レイテンシ(信用代払 · 非同期オンチェーン決済) ^[extracted]
- Cloudflare + AWS の裏付けにより x402 は crypto-only の玩具ではなくなった ^[extracted]
- OpenAI / Anthropic agent SDK と互換(正式統合は未公表) ^[extracted]

## Mechanism / How it works

エッジ層(edge layer)は HTTP トラフィックが必ず通過する経路であり、Cloudflare Workers / AWS API Gateway はその中で最大の 2 社である。x402 をエッジ層に統合することは、**開発者が payment ロジックを書く必要がない**ことを意味する。エンドポイント価格(例:「この API は $0.001 USDC」)を宣言するだけで · エッジ層が自動的に:(1) 決済のないリクエストを傍受 → HTTP 402 を返却;(2) X-Payment ヘッダ付きのリクエストを検証(非同期オンチェーン settlement);(3) ルーティング許可 → バックエンドが処理する。Facilitator モデルによりエッジ層は信用代払を実行:オンチェーン [[fintech/usd-stablecoin-interchange|USDC settlement]] 完了前に facilitator が既にリクエストをリリースし · 単発レイテンシを < 100ms に圧縮する。Cloudflare の 1-2% は facilitator fee で · 従来の Stripe の 2.9% + $0.30 と比べて低価格 API 呼び出しでは極めて優位である(料率の堀については [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] と対照)。AWS API Gateway + Bedrock 経路により、agent が AWS 内で有料 API を呼び出す閉ループが形成される。

## Origin & evolution

2025-05 Coinbase が x402 spec を発表。2025 H2 Cloudflare のエンジニアが Workers 上で experimental 統合を実施し · facilitator モデルのレイテンシを 100ms まで圧縮できることを検証。2025-Q4 Cloudflare が 2026-Q1 本番化を決定。2026-Q1 Cloudflare Workers x402 統合が正式リリース — これが x402 初の enterprise-grade 統合となった。2026-Q2 AWS API Gateway が追随し、Bedrock AgentCore と x402 で閉ループを形成(AgentCore のデフォルトウォレットは Privy/CDP + API Gateway の x402 で課金)。同期して Vercel AI SDK も x402 クライアント呼び出しをサポート。OpenAI / Anthropic はまだ正式統合を公表していないが · SDK は x402 クライアント呼び出しと互換(agent がウォレットに署名できれば良いだけで · 下層は [[systems/erc-4337-overview|ERC-4337]] または [[systems/erc-7702-overview|ERC-7702]] に依存する)。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-http-payment-overview|x402 総覧]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol (Coinbase) — https://github.com/coinbase/x402

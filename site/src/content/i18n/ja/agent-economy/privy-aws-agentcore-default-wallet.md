---
source: agent-economy/privy-aws-agentcore-default-wallet
source_hash: e378cbc771a5fd8e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Privy x AWS Bedrock AgentCore · AI agent 経済のデフォルトウォレットポジショニング"
translated_at: 2026-06-26T08:32:15.196Z
---

# Privy x AWS Bedrock AgentCore · AI agent 経済のデフォルトウォレットポジショニング

## ウィキ上の位置づけ

本エントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の配下にある。同位／対比の文脈として [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] と、より広いシステム／規制境界として [[payments/INDEX|payments index]] と併せて読むこと。

## 主要事実

- 2026-05-07 AWS Bedrock AgentCore Payments がリリース ^[extracted]
- デフォルトウォレット provider:Privy(Stripe 子会社)+ Coinbase CDP の並列 ^[extracted]
- 明確にデフォルトリストに含まれない:Circle / Arc / Anchorage ^[extracted]
- デプロイ地域:US East / US West / EU Frankfurt / APAC Sydney ^[extracted]
- プロトコル:x402(HTTP 402)+ x402 Bazaar MCP(10,000+ endpoints) ^[extracted]
- Coinbase / Stripe = AWS の戦略的アライアンス(Stripe は AWS の大口顧客) ^[extracted]
- Circle / Coinbase は 2023 に Centre Consortium を解散して以来別の道を歩んでいる ^[extracted]

## 仕組み / 動作原理

AWS Bedrock AgentCore は AWS の AI agent オーケストレーションプラットフォームで · Payments モジュールは agent がタスク実行時に外部 API へ支払うのを担う。デフォルトウォレット provider の選定は本質的に、プラットフォーム側の一度の決定で millions of agents のウォレット帰属を左右するものだ。Privy は Stripe 子会社として Stripe Connect の 5M マーチャント受け取り側を agent 決済へ直接接続できる([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] の重要ポジショニング)。Coinbase CDP は Coinbase 自社運営の ウォレットサービスで Base 上の [[fintech/usd-stablecoin-interchange|USDC 決済]] に統合される。2 つは「並列」だが、異なる region / 異なる use case で互いに優位を持つ — Privy は Web2 統合に強く、Coinbase CDP は onchain ネイティブ体験に強い。Circle がデフォルトリストに入らない根本理由:Coinbase と Circle が 2023 に別離して以降、AWS の Coinbase 提携により Circle はデフォルトに同居しにくくなった。Anchorage は 発行会社 であり ウォレット provider ではなく、カテゴリの位置がずれている。

## 起源と進化

2024 AWS が Bedrock プラットフォームを始動 · Anthropic + Mistral 等のモデルを主軸に据えた。2025 H2 AWS が Agent Payments モジュールの追加を決定し · ウォレット provider 選定が重要決断となった。2026-Q1 内部交渉:Stripe(AWS 大口顧客)+ Coinbase(AWS region サービス顧客)が Privy / CDP を推し · Circle は AWS との戦略関係がなく除外された。2026-05-07 リリース · Privy + Coinbase CDP が並列で組み込まれた。USDB(Stripe が Base 上で発行する stablecoin)と USDC はいずれも AgentCore で利用可能だが · デフォルトウォレット の選択が実質的にどちらの stablecoin 体系に偏るかは徐々に顕在化していく(戦略空間の分析は [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]] 参照)。Circle の 2026-Q2 リアクション:自社の Agent ウォレット(Circle Agent Stack)を発表し · AWS デフォルトではなく SDK 独立デプロイ経路を採る。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 総覧]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS エッジ統合]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded ウォレット による CEX 中抜き]]
<!-- /wiki-links:managed -->

## 出典

- Privy docs — https://docs.privy.io/

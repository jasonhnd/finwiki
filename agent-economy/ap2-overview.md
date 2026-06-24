---
title: AP2 · Google Agent Payments Protocol 概観
aliases: [ap2-overview, agent-payments-protocol-overview, google-ap2-overview]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [agent-economy, protocol, payment, google, ap2]
sources:
  - https://github.com/google-agentic-commerce/AP2
status: active
---

# AP2 · Google Agent Payments Protocol 概観

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/ap2-adoption|AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- AP2 v1.0 は 2026-Q1 にリリース ^[extracted]
- MPP(Microsoft)、ACP(Anthropic)、x402(Cloudflare/Coinbase/AWS)、A2A(Linux Foundation)と共に **agent 経済「決済プロトコル四国大戦」** を構成 ^[extracted]
- 核心の問い:**AI agent がユーザーを代理して支払う際、merchant は agent が真に認可を得ていることをどう確認するか?** ^[extracted]
- 決済層は中立:Google Pay / card networks / USDC(via Coinbase)/ 銀行 instant rails のいずれも可 ^[extracted]
- 全工程が W3C Verifiable Credentials 標準ベース ^[extracted]

## Mechanism / How it works

AP2 は従来の user-merchant 二項決済を user-agent-merchant の三項構造に拡張し、4 つの核となるコンポーネントを導入する:

1. **Authorization Mandate** — ユーザーが発行する verifiable credential で、agent が支出可能な scope(金額、merchant カテゴリ、時間ウィンドウ)を定義する
2. **Payment Intent** — agent が merchant に提出する支払意図で、mandate を参照する
3. **Settlement Channel** — Google Pay、card networks、ステーブルコイン(USDC via Coinbase · [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)、銀行 instant rails のいずれを通すこともできる
4. **Audit Trail** — 全工程が verifiable で、W3C VC 標準ベース

3 つの核心的緊張:認可境界(ユーザーは agent にどれほどの支出権限を与えるか?毎回再確認が必要か?)、身元の信頼性(merchant はこの agent が真にユーザーを代理していることをどう知るか?)、紛争解決(agent が誤操作したら、誰が責任を負うか?)。

## Origin & evolution

2025-09 Google が AP2 ドラフトを初公開し、2026-Q1 に v1.0 安定版に到達した。背景は、AI agent 経済の台頭後、従来の決済が user-merchant 二項構造を前提としており「agent 代払」シナリオを扱えなかったことにある。Google Pay(世界第 2 位の mobile wallet · 6 億ユーザー)と Gemini agent(数億接点)の両方を保有する Google は、この空白の自然な占領者となった([[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]] と対照)。

時系列で見ると、MPP / ACP / x402 / A2A とほぼ同時期に登場 — agent 決済の標準化は 2025-2026 の業界コンセンサス圧力下での並行産物である。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2 spec(2026-Q1 v1.0)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

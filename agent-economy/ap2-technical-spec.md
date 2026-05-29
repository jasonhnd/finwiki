---
title: AP2 技術仕様 · Mandate · Payment Intent · Settlement Adapter
aliases: [ap2-technical-spec, ap2-mandate-intent-settlement, google-ap2-spec]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, payment, ap2, technical-spec]
sources:
  - https://github.com/google-agentic-commerce/AP2
status: candidate
---

# AP2 技術仕様 · Mandate · Payment Intent · Settlement Adapter

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Authorization Mandate は W3C Verifiable Credential フォーマット ^[extracted]
- Mandate scope に含まれる項目:金額、merchant カテゴリ、時間ウィンドウ(典型 24h)、オプションでアドレス制限 ^[extracted]
- Wallet Adapter 抽象層:同一 mandate を Google Pay(カード)または USDC(via Coinbase Onchain Kit)へルーティング可能 ^[extracted]
- Risk Score は Google fraud detection AI が算出し、merchant が閾値をカスタマイズする ^[extracted]
- Audit trail はユーザーの Google アカウントに書き戻され、user/merchant/regulator の複数主体が検証可能 ^[extracted]

## Mechanism / How it works

典型的なフロー(5 ステップ):

1. ユーザーが Gemini に「来週日曜のフライトを予約して、予算 $800」と伝える
2. Gemini が Authorization Mandate を発行(scope:航空会社カテゴリ / limit:$800 / expire:24h)
3. Gemini が航空会社 API を呼び出し、Payment Intent を提出(mandate を参照)
4. 航空会社が mandate を検証 + AP2 settlement adapter(Google Pay または USDC)経由で決済
5. Audit trail がユーザーの Google アカウントに書き戻される

Wallet Adapter は AP2 の鍵となる抽象 — mandate と intent はいずれも具体的な settlement rail にバインドされず、merchant は AP2 API 1 本に対応するだけでカード決済とステーブルコイン決済を同時に受け取れる([[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。これは x402 プロトコル(明示的に USDC-first)とは路線が異なる:**AP2 は「rail-neutral」** · x402 は「USDC-native」。クロスチェーン USDC settlement は [[systems/cctp-v2-overview|CCTP V2]] と [[systems/chain-abstraction-pattern-overview|chain abstraction]] の協調が必要となる。

## Origin & evolution

W3C Verifiable Credentials 標準自体は W3C により 2019 から継続的に推進されており、Google は中核貢献者である。AP2 の spec 設計は VC モデルを直接 mandate コンテナとして借用し、新規の認可オブジェクトを発明していない — これにより既存の identity/DID エコシステム(Microsoft Entra Verified ID、Decentralized Identity Foundation 等)との統合コストを下げている。

2025-09 ドラフト → 2026-Q1 v1.0、この間の主な調整は settlement adapter インタフェースと risk score スキーマに集中した。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[systems/cctp-v2-overview|CCTP V2(USDC settlement ルーティング)]]
<!-- /wiki-links:managed -->

## Sources

- W3C Verifiable Credentials Data Model
- Google AP2 spec v1.0
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

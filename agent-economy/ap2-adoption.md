---
title: AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦
aliases: [ap2-adoption, ap2-ecosystem, ap2-protocol-landscape]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, payment, ap2, adoption, mpp, acp, x402]
sources:
  - https://github.com/google-agentic-commerce/AP2
status: candidate
---

# AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- Coinbase が AP2 USDC settlement adapter の役割を担う ^[extracted]
- Shopify / Square は初期の merchant 統合者(2026-Q2 から pilot 開始) ^[extracted]
- Stripe は様子見中 — Stripe Connect は独自の commerce stack を持つ ^[extracted]
- Visa Trusted Agent Protocol が AP2 との互換を協議中 ^[extracted]
- OpenAI / Anthropic は直接採用しない — それぞれ MPP / ACP 路線 ^[extracted]
- 機関(JPM Kinexys / Goldman / BNY)は態度未表明 — institutional tokenization に集中している ^[inferred]

## Mechanism / How it works

Google の4本柱の組み合わせ:**Google Pay(6 億 mobile wallet ユーザー)** + **Gemini(数億の Android/Chrome/Workspace 接点)** + **W3C VC 標準への影響力(中核貢献者)** + **fraud detection AI(世界最大の ML 不正対策インフラ)** — どれか単独では標準を押し上げられないが、組み合わせると agent 決済の閉ループを形成する([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] の縦型 distribution 支配と対照)。

同時期プロトコルとの位置関係:

| プロトコル | 主推進者 | ポジショニング | 決済層 |
|---|---|---|---|
| **AP2** | Google | Agent → Merchant 認可決済 | Google Pay / card / USDC |
| **MPP** | Microsoft | Merchant 側 API 標準 | マルチ |
| **ACP** | Anthropic | Agent と commerce platform の対話 | Stripe / 汎用 |
| **x402** | Cloudflare + Coinbase + AWS | HTTP 402 ステータスコード復活 | USDC on Base 優先 |
| **A2A** | Linux Foundation | 汎用 agent 間通信(payment 含む) | プロトコル非依存 |

## Origin & evolution

四国大戦の構図は偶然ではない — 各大手は agent 経済が台頭した後、**agent-payment 標準を握る者が次世代 commerce gateway を握る** ことを認識している。Google は wallet+identity(自社の強み)に賭け、Microsoft は merchant API に、Anthropic は commerce platform の対話に、Cloudflare/Coinbase/AWS は最下層の HTTP+stablecoin チャネルに賭けた([[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。Linux Foundation の A2A は中立 fallback である。

Stripe の様子見姿勢が鍵となる変数 — Stripe が Privy(買収済み)経由で AP2 に賭ければ Google 陣営の優位は大幅に拡大し · Stripe が自社で ACP 互換スタックを構築すれば市場が分裂する可能性がある。この [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる中抜き]] 戦線が fintech バリューチェーンの覇権を決定する。

## Counterpoints

四プロトコル並存は merchant 統合サイクルを長期化させ、大型 EC が様子見を優先する可能性がある — これが agent 経済着地の最大の障害となる。さらに Google 自身の Risk Score 中央集権的役割は、EU 規制(DMA / Digital Markets Act)介入確率を高める。機関の態度未表明は両刃の剣 — 一方で AP2 は主に retail + SMB に提供されるため機関の不在は致命的ではないが · 他方で機関の裏付けがないと「高額決済」の信頼構築に影響する可能性がある。

## Open questions

- Stripe の最終選択(AP2 に賭ける vs 自社 ACP 互換を構築)?
- Visa Trusted Agent Protocol の協議着地時期は?
- AP2 の EU における DMA コンプラ経路は?
- merchant pilot(Shopify/Square)の 2026-Q2-Q3 における実取引量は?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ai-company-payment-landscape|AI 企業の決済版図]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
<!-- /wiki-links:managed -->

## Sources

- Visa Trusted Agent Protocol announcements(2025-2026)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

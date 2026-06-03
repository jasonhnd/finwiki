---
source: agent-economy/ap2-adoption
source_hash: cb391e27df52c78c
lang: ja
status: machine
fidelity: ok
title: "AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦"
translated_at: 2026-06-02T11:47:37.277Z
---

# AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下に位置する。ピア / 対照の文脈については [[payments/INDEX|payments index]] と、より広範なシステム / 規制境界については [[systems/INDEX|systems index]] と併せて読むこと。

## 主要事実

- Coinbase が AP2 の USDC settlement adapter の役割を担う ^[extracted]
- Shopify / Square は初期の merchant 統合者(2026-Q2 から pilot 開始) ^[extracted]
- Stripe は様子見中 — Stripe Connect は独自の commerce stack を持つ ^[extracted]
- Visa Trusted Agent Protocol が AP2 との互換を協議中 ^[extracted]
- OpenAI / Anthropic は直接採用しない — それぞれ MPP / ACP 路線 ^[extracted]

## 仕組み / 動作原理

Google の4本柱の組み合わせ:**Google Pay(6 億 mobile wallet ユーザー)** + **Gemini(数億の Android/Chrome/Workspace 接点)** + **W3C VC 標準への影響力(中核貢献者)** + **fraud detection AI(世界最大の ML 不正対策インフラ)** — どれか単独では標準を押し上げられないが、組み合わせると agent 決済の閉ループを形成する([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] の縦型 distribution 支配と対照)。

同時期プロトコルとの位置関係:

| プロトコル | 主推進者 | ポジショニング | 決済層 |
|---|---|---|---|
| **AP2** | Google | Agent → Merchant 認可決済 | Google Pay / card / USDC |
| **MPP** | Microsoft | Merchant 側 API 標準 | マルチ |
| **ACP** | Anthropic | Agent と commerce platform の対話 | Stripe / 汎用 |
| **x402** | Cloudflare + Coinbase + AWS | HTTP 402 ステータスコード復活 | USDC on Base 優先 |
| **A2A** | Linux Foundation | 汎用 agent 間通信(payment 含む) | プロトコル非依存 |

## 起源と進化

四国大戦の構図は偶然ではない — 各大手は agent 経済が台頭した後、**agent-payment 標準を握る者が次世代 commerce gateway を握る** ことを認識している。Google は wallet+identity(自社の強み)に賭け、Microsoft は merchant API に、Anthropic は commerce platform の対話に、Cloudflare/Coinbase/AWS は最下層の HTTP+stablecoin チャネルに賭けた([[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。Linux Foundation の A2A は中立 fallback である。

Stripe の様子見姿勢が鍵となる変数 — Stripe が Privy(買収済み)経由で AP2 に賭ければ Google 陣営の優位は大幅に拡大し · Stripe が自社で ACP 互換スタックを構築すれば市場が分裂する可能性がある。この [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる中抜き]] 戦線が fintech バリューチェーンの覇権を決定する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ai-company-payment-landscape|AI 企業の決済版図]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
<!-- /wiki-links:managed -->

## 出典

- Visa Trusted Agent Protocol announcements(2025-2026)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

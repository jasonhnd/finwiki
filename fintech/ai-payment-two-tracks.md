---
title: AI 産業の 2 つの決済軌道 — Stripe モデル vs Stablecoin モデル
aliases: []
domain: fintech
kind: knowledge
topic: ai-payment-two-tracks
created: 2026-04-16
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [fintech]
status: active
sources:
  - https://stripe.com/use-cases/ai
  - https://www.circle.com/en/usdc
  - https://openai.com/index/introducing-the-stripe-app/
  - https://docs.stripe.com/payments
  - https://www.anthropic.com/news
---

# AI 産業の 2 つの決済軌道


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 現在の AI 産業のクロスボーダー集金には、非対称な 2 つの軌道が存在する:

**Stripe 軌道**（既開通）: 米国の AI 企業（OpenAI、Anthropic、Google）は Stripe 経由でグローバルなクレジットカードに接続し、ユーザー無感のまま資金が直接米国法人口座に入金される。クレジットカードを保有するユーザーをほぼ全世界でカバー（同一経路の拡張は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層トロイの木馬]] 参照）。

**Stablecoin 軌道**（未開通）: 非米国の AI 企業がトークン / 計算リソース / サブスクリプションを海外向けに販売する場合、Stripe 軌道は主体制限（Stripe アカウント保有のための海外法人が必要）、外為規制、コンプライアンスの複雑さなどの障壁を抱える。Stablecoin（[[fintech/usd-stablecoin-interchange|USDC/USDT]]）はコスト・速度ともに優位だが、ユーザー採用率は低く、AI 産業向けの集金インフラが欠落している。日本側の SC 法制度環境は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] を参照。

両軌道の共存は過渡的な状態ではない。たとえ将来的な A2A 経済においても、Agent 間のマイクロペイメント（$0.001-$1.00 級）は Stripe の $0.30 最低手数料に耐えられず、必然的に Stablecoin 軌道を通る — このスケール化トレンドは [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済]] の爆発的成長とも符合する。Agent 側プロトコルの主戦場は [[agent-economy/ai-agent-payment-protocols-overview|AI agent 決済プロトコル 7 層]] と [[agent-economy/x402-http-payment-overview|x402 HTTP 決済]];agent-issuer 層の具体プレイヤーは [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop agent issuer]] と [[agent-economy/nevermined-compute-payment-protocol|Nevermined 計算リソース決済プロトコル]] 参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済の爆発的成長（733% YoY、$226B）]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire · closed-loop agent issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined · compute payment protocol]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): JP 化、日付更新、Wave 10 agent-economy のピア wikilink 追加（Skyfire、Nevermined）。

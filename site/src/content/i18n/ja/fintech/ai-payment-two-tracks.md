---
source: fintech/ai-payment-two-tracks
source_hash: 6f3b09e04a749894
lang: ja
status: machine
fidelity: ok
title: "AI 産業の 2 つの決済軌道"
translated_at: 2026-06-02T13:21:55.083Z
---

# AI 産業の 2 つの決済軌道


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置する。ピア / 対比の文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム / 規制境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] と照らして読む。

> [!info] 要約
> 現在の AI 産業のクロスボーダー集金には、非対称な 2 つの軌道が存在する:

**Stripe 軌道**（既開通）: 米国の AI 企業（OpenAI、Anthropic、Google）は Stripe 経由でグローバルなクレジットカードに接続し、ユーザー無感のまま資金が直接米国法人口座に入金される。クレジットカードを保有するユーザーをほぼ全世界でカバー（同一経路の拡張は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層トロイの木馬]] 参照）。

**Stablecoin 軌道**（未開通）: 非米国の AI 企業がトークン / 計算リソース / サブスクリプションを海外向けに販売する場合、Stripe 軌道は主体制限（Stripe アカウント保有のための海外法人が必要）、外為規制、コンプライアンスの複雑さなどの障壁を抱える。Stablecoin（[[fintech/usd-stablecoin-interchange|USDC/USDT]]）はコスト・速度ともに優位だが、ユーザー採用率は低く、AI 産業向けの集金インフラが欠落している。日本側の SC 法制度環境は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] を参照。

両軌道の共存は過渡的な状態ではない。たとえ将来的な A2A 経済においても、Agent 間のマイクロペイメント（$0.001-$1.00 級）は Stripe の $0.30 最低手数料に耐えられず、必然的に Stablecoin 軌道を通る — このスケール化トレンドは [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済]] の爆発的成長とも符合する。Agent 側プロトコルの主戦場は [[agent-economy/ai-agent-payment-protocols-overview|AI agent 決済プロトコル 7 層]] と [[agent-economy/x402-http-payment-overview|x402 HTTP 決済]];agent-issuer 層の具体プレイヤーは [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop agent issuer]] と [[agent-economy/nevermined-compute-payment-protocol|Nevermined 計算リソース決済プロトコル]] 参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済の爆発的成長（733% YoY、$226B）]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire · closed-loop agent issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined · compute payment protocol]]
<!-- /wiki-links:managed -->

---

**最終更新** (2026-05-26): JP 化、日付更新、Wave 10 agent-economy のピア wikilink 追加（Skyfire、Nevermined）。

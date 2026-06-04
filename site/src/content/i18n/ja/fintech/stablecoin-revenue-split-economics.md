---
source: fintech/stablecoin-revenue-split-economics
source_hash: 2d235a8d647c385a
lang: ja
status: machine
fidelity: ok
title: "ステーブルコイン利息分配経済学"
translated_at: 2026-06-02T14:01:20.912Z
---

# ステーブルコイン利息分配経済学


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置する。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> ステーブルコイン発行体と主要配信チャネル間の**利息分配**は「on-platform 100% / off-platform 50%」モデルに従う。USDC 事例で数学的に検証済み：**Coinbase Q1 2026 stablecoin revenue $305M ≈ $19B プラットフォーム内 × 4% × 100% + $58B プラットフォーム外 × 4% × 50% / 4 = $306M**。

**コア計算式**：

```
配信側四半期収入 = (プラットフォーム内 USDC × 準備金年利回り × 100% × 1/4)
                + (プラットフォーム外 USDC × 準備金年利回り × 50% × 1/4)
```

**トリガーポイント**：発行体（Circle）が**自社プラットフォーム**（Arc メインネット / 自営 distribution 体系）を構築すると、「off-platform 50%」分の収入が徐々に発行体側へ回帰する。Arc メインネットはまさに Circle が当該収入を回収する構造的アクションである。

**汎用性**：本モデルは以下のシナリオに展開可能：

- [[fintech/paypal-pyusd-stablecoin|PYUSD（PayPal）]] と Paxos 間の分配アレンジメント
- [[fintech/world-liberty-usd1-political-stablecoin|USD1（World Liberty Financial）]] と Bridge 間の分配アレンジメント
- [[payment-firms/jpyc|JPYC]]（[[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環状持株]]）の潜在的配信分配構造
- USDT（Tether）と Bitfinex の歴史的関係（条件非公開）

**典型的トリガータイミング**：配信協定は通常 3-5 年間 + 自動更新条項で締結される。USDC 事例では 2026-08 の協定更新が Circle と Coinbase 間のキーゲームポイントである。

**評価額への含意**：配信側（Coinbase）のステーブルコイン revenue は**協定の存続**に高度に依存する。協定解約があれば年収は 30-60% 下落しうる。これは [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブ]] の進化経路における重要な経済的動因であり、[[fintech/issuer-distributor-incentive-realignment-arc-strategy|Circle Arc 逆方向統合戦略]] 形成を直接推進している。


## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済]]
<!-- /wiki-links:managed -->

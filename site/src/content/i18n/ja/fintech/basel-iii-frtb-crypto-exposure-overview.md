---
source: fintech/basel-iii-frtb-crypto-exposure-overview
source_hash: 3de99393729c2f2a
lang: ja
status: machine
fidelity: ok
title: "Basel III FRTB 暗号エクスポージャー · BCBS SCO60 1,250% リスクウェイト概要"
translated_at: 2026-06-02T13:21:55.060Z
---
# Basel III FRTB 暗号エクスポージャー · BCBS SCO60 1,250% リスクウェイト概要

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあります。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読んでください。

> [!info] 要約
> BCBS（バーゼル銀行監督委員会）は 2022-12 に「Prudential treatment of cryptoasset exposures」基準（SCO60）を公表し、暗号資産を 2 グループに分類: **Group 1**（コンプライアントなトークン化または条件を満たす stablecoin）は既存のリスクウェイト 5-100% を適用 · **Group 2**（BTC/ETH を含むその他の暗号資産）は **1,250% リスクウェイト + 1% エクスポージャー上限** を適用。2025-01-01 を各国の実装目標日とした。

## 主要事実

- BCBS SCO60 公表: 2022-12-16 ^[extracted]
- グローバル実装目標日: 2025-01-01 ^[extracted]
- Group 2 のエクスポージャー上限: Tier 1 capital の 1% ^[extracted]
- 上限超過時の処理: 上限以上は 1,250% × 2 = 実効 2,500% のリスクウェイト ^[extracted]
- EU / HK / JP / SG / CH: 2025-01 ～ 2025-04 に全面実装 ^[extracted]
- UK: 2026-01-01 に実装 ^[extracted]
- USA: 2025-07 を 2026-07 に延期 · 銀行業界のロビーによる延期 ^[extracted]

## 仕組み

**BCBS SCO60 の 4 グループ分類**:
- **Group 1a（トークン化 TradFi）**: トークン化債券・株式・コモディティ。基礎資産と同じ RW（5-100%）を適用。例: BUIDL / OUSG / ONDO。償還可能性と法的執行力が必須。
- **Group 1b（適格 SC）**: 完全準備 + リアルタイム償還。償還リスクとベーシスリスク（≤10bp で時間の 99%）のテスト通過が条件。候補: USDC PPSI / EURC / USDB。不適格: DAI / FRAX / USDT。
- **Group 2a（ヘッジ済み）**: BTC/ETH をデリバティブでヘッジ。1,250% RW + 資本軽減。
- **Group 2b（その他）**: 1,250% RW = 100% の資本裏付け。1% エクスポージャー上限。

Basel III の公式: RWA = エクスポージャー × リスクウェイト × 12.5 、資本 = RWA × 8%。$100  の BTC エクスポージャーでは、RWA = $100  × 1250% = $1,250 、資本 = $100となり、すなわち 1:1  の資本控除に近い。実効効果として、銀行は BTC ポジションに対し自己資本を 1:1 で対応させなければならず、通常の信用に対する ROE は約 12.5倍毀損する。USDC Group 1b と比べると、準備資産は短期国債 + 現金で、適用される短期国債リスクウェイトは 0-20%、必要資本は約 10%にとどまり、はるかに安価である。HK 側の準備資産フレームワークは SCO60 と直接接続されており、詳細は [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]] 参照。

## 起源と展開

BCBS は 2019 年に暗号資産 協議 を開始、2021 年の第 2 ラウンド CP で Group 1/2 分類の原型を導入。2022-06 に最終 CP、2022-12-16 に SCO60 基準を公表。各国は 2024 年上半期に国内 BCBS 実装案を完成させ、2025-01 を世界実装目標とした。米国 エンドゲーム 提案ではメガバンクのロビーが BTC/ETH ETF の部分免除を要求しており、Trump 2.0 は 軽規制 寄り、2026-Q3 の 最終規則 では 1,250% が ~150-300% にソフト化される可能性。資本伝達経路が USDC vs USDT の銀行選択に与える暗黙的影響は [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]] 参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
<!-- /wiki-links:managed -->

## 出典

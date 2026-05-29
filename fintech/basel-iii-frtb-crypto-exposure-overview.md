---
title: Basel III FRTB 暗号エクスポージャー · BCBS SCO60 1,250% リスクウェイト概要
aliases: [basel-iii-frtb-overview, BCBS SCO60, crypto risk weight, 1250 RW]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, basel, bcbs, frtb, bank, capital-requirement]
sources:
  - https://www.bis.org/bcbs/publ/d545.htm
  - https://www.bis.org/basel_framework/chapter/SCO/60.htm
  - https://www.bis.org/bcbs/
  - https://www.eba.europa.eu/regulation-and-policy/single-rulebook
  - https://www.federalreserve.gov/supervisionreg/topics/cryptoasset.htm
status: candidate
---

# Basel III FRTB 暗号エクスポージャー · BCBS SCO60 1,250% リスクウェイト概要

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BCBS（バーゼル銀行監督委員会）は 2022-12 に「Prudential treatment of cryptoasset exposures」基準（SCO60）を公表し、暗号資産を 2 グループに分類: **Group 1**（コンプライアントなトークン化または条件を満たす stablecoin）は既存のリスクウェイト 5-100% を適用 · **Group 2**（BTC/ETH を含むその他の暗号資産）は **1,250% リスクウェイト + 1% エクスポージャー上限** を適用。2025-01-01 を各国の実装目標日とした。

## Key facts

- BCBS SCO60 公表: 2022-12-16 ^[extracted]
- グローバル実装目標日: 2025-01-01 ^[extracted]
- Group 2 のエクスポージャー上限: Tier 1 capital の 1% ^[extracted]
- 上限超過時の処理: 上限以上は 1,250% × 2 = 実効 2,500% のリスクウェイト ^[extracted]
- EU / HK / JP / SG / CH: 2025-01 ～ 2025-04 に全面実装 ^[extracted]
- UK: 2026-01-01 に実装 ^[extracted]
- USA: 2025-07 を 2026-07 に延期 · 銀行業界のロビーによる延期 ^[extracted]

## Mechanism / How it works

**BCBS SCO60 の 4 グループ分類**:
- **Group 1a (Tokenized TradFi)**: tokenized bonds/equities/commodities · underlying と同じ RW（5-100%）· 例: BUIDL / OUSG / ONDO · 償還可能性 + 法的執行力が必須
- **Group 1b (Qualifying SC)**: 完全準備 + リアルタイム償還 · redemption risk + basis risk（≤10bp で時間の 99%）の通過が条件 · 候補: USDC PPSI / EURC / USDB · 不適格: DAI / FRAX / USDT
- **Group 2a (Hedged)**: BTC/ETH をデリバティブでヘッジ · 1,250% RW + 資本軽減
- **Group 2b (その他)**: 1,250% RW = 100% capital backing · 1% エクスポージャー上限

Basel III の公式: RWA = Exposure × Risk Weight × 12.5 · Capital = RWA × 8%。$100 BTC エクスポージャー → RWA = $100 × 1250% = $1,250 → Capital = $100、すなわち 1:1 の capital deduction。実効効果 = 銀行は BTC ポジションに対し自己資本を 1:1 で対応させなければならず、通常の信用に対する ROE が ~12.5x 棄損する。USDC Group 1b との対比: reserve = 短期国債 + 現金 · 適用される短期国債リスクウェイトは 0-20% · Capital は ~10%、はるかに安価。HK 側の reserve フレームワークは SCO60 と直接接続されており、詳細は [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]] 参照。

## Origin & evolution

BCBS は 2019 年に暗号資産 consultation を開始、2021 年の第 2 ラウンド CP で Group 1/2 分類の原型を導入。2022-06 に最終 CP、2022-12-16 に SCO60 基準を公表。各国は 2024 年上半期に国内 BCBS 実装案を完成させ、2025-01 を世界実装目標とした。米国 Endgame 提案ではメガバンクのロビーが BTC/ETH ETF の部分免除を要求しており、Trump 2.0 は light-touch 寄り、2026-Q3 の final rule では 1,250% が ~150-300% にソフト化される可能性。資本伝達経路が USDC vs USDT の銀行選択に与える暗黙的影響は [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]] 参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
<!-- /wiki-links:managed -->

## Sources

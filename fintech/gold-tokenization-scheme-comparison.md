---
title: 日本におけるトークン発行スキーム比較
aliases: []
domain: fintech
kind: knowledge
created: 2026-04-14
last_updated: 2026-05-03
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: possible
tags: [needs-review]
status: candidate
sources: []
---

# 日本におけるトークン発行スキーム比較

> [!info] TL;DR
> 日本で実物資産裏付けトークンを発行する際、主に3つのスキームが存在する。

## 案A: 暗号資産型
- 資金決済法に基づく（→ [[fintech/japan-financial-regulation|日本金融規制]]）
- 暗号資産交換業者（CAESP）による上場・流通（CEX 側の典型集成は [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX 預金トークン/SC 統合]]）
- 上場後の流動性が高い
- 規制が比較的明確
- 適合: 流動性重視・既存取引所活用

## 案B: セキュリティトークン（ST）型
- 金商法に基づく電子記録移転有価証券表示権利等
- PTS（私設取引システム）or 取扱業者による流通
- 機関投資家アクセス可能（参照: [[exchanges/rwa-tokenization-cex-integration|CEX RWA トークン化統合]]）
- コンプライアンス負荷が高い
- 適合: 機関投資家向け・大口取引

## 案C: 信託型
- 信託業法に基づく受益権トークン化
- 信託銀行との連携が必要（同型 SC 設計は [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]）
- 投資家保護が最も厚い
- 設計自由度が高いが組成に時間がかかる
- 適合: 保守的スキーム・信託銀行パートナーあり

## 選択基準

スキーム選択は以下の要素で決まる:
1. ターゲット投資家層（リテール vs 機関）
2. 流動性要件（即時上場 vs 長期保有）
3. 規制対応コスト許容度
4. パートナー金融機関の有無

参照: [[fintech/japan-financial-regulation|日本金融規制]] · ステーブルコイン側の制度配置は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] 参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
<!-- /wiki-links:managed -->

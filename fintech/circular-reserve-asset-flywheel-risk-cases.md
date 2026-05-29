---
title: 準備金インターロック・フライホイール · 三層システミックリスク・シナリオ
aliases: [circular reserve asset flywheel risk cases, BUIDL USDC concentration risk, reserve recursion risk]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, systemic-risk, stablecoin, reserve-concentration, genius-504, tokenized-mmf]
sources:
  - https://www.blackrock.com/us/individual/products/335977/buidl
  - https://www.circle.com/en/transparency
  - https://www.congress.gov/bill/119th-congress/senate-bill/394
  - https://www.federalreserve.gov/publications/financial-stability-report.htm
  - https://app.rwa.xyz/treasuries
status: candidate
---

# 準備金インターロック・フライホイール · 三層システミックリスク・シナリオ

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BUIDL ↔ USDC インターロック・フライホイールのリスクは資産品質(国債は risk-free)ではなく、三層の構造的問題にある:**償還時の二次市場流動性 vs 準備金簿価** · **規制が「トークン化 MMF 集中度」フレームを未定義** · **利息フローの反射性が集中度を継続的に押し上げる**。2023.03 SVB 事件では USDC が準備金 8.25% を SVB に集中していたため一時的にデペッグした · BUIDL パスのリスク機構は同一。

## Key facts

- 2023.03 USDC は準備金 8.25% を SVB 一社に集中していたため一時的にデペッグ ^[extracted]
- GENIUS Act §504 は準備金構成の月次開示を要求するが「トークン化国債経由の保有」は禁止せず ^[extracted]
- SEC Rule 2a-7 は伝統的 MMF の相互保有を 5% 超で禁止するが、トークン化 MMF には適用されない ^[extracted]

## Mechanism / How it works

**リスク 1 · 流動性取り付けシナリオ**:USDC 大規模償還 → Circle が [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] を売却せざるを得ない → BUIDL 二次流動性に衝撃 → BUIDL NAV が一時的に乖離 → 他の保有者(取引所 / 機関)がパニック → BUIDL AUM 減少 → 逆に Circle 準備金信認問題を悪化させる。SVB 危機と同一の機構 —— 集中度問題は資産品質ではなく、償還時の二次流動性にある。

**リスク 2 · 規制「reserve concentration」の再定義**:GENIUS §504 はトークン化 MMF への集中保有を禁止していない · OCC / FRB は 2026 年以降に新設する可能性:単一トークン化 MMF は準備金の X% 超を保有不可 / 提供者と発行者は資本関係を持ってはならない / システミックなインターロック構造は独立したリスク管理隔離を構築すること。BUIDL ↔ USDC は現時点で最大規模かつ最も透明なインターロック事例 · 規制サンプルとなる可能性が極めて高い —— これは [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB ステーブルコイン準備金資本フレームワーク]] のクロスボーダー側における反射動作と相互に呼応する。

**リスク 3 · 利息フローの反射性**:50% 自社保有利息が継続的に BUIDL に再投資 · 比率は単調に上昇 · 外力が介入するまで続く([[fintech/issuer-distributor-incentive-realignment-50-50-model|50/50 分配モデル]] の利息フロー方向を参照)。

## Origin & evolution

2008 GSE システミックリスク(Fannie Mae / Freddie Mac のインターロックが救済を招いた)が歴史的先例を提供。SEC Rule 2a-7 は 2008 年以降 MMF 相互保有制限を強化(< 5%)。トークン化 MMF 時代の stablecoin 準備金にはまだ対応する規制フレームが存在しない —— **BUIDL ↔ USDC はそのフレームを創造する最初のデータポイント**。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金インターロック・フライホイール · 概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist 強制令]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配エコノミクス]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 · ARM アナロジー]]
<!-- /wiki-links:managed -->

## Sources

- SEC Rule 2a-7 · バーゼル III · GENIUS Act §504(2025.07)
- 2023.03 USDC デペッグ事件レビュー

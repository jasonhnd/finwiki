---
title: BIS Project Agorá 概要 · 7 G10 中央銀行 + 40 商業銀行による共同トークン化実験
aliases: [bis-project-agora-overview, Project Agora, Agorá 概要]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, bis, cbdc, tokenization, cross-border, wholesale, g10]
sources:
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
  - https://www.bis.org/press/p240403.htm
  - https://www.bis.org/innovation_hub.htm
  - https://www.iif.com/
  - https://www.newyorkfed.org/aboutthefed/nyic
status: candidate
---

# BIS Project Agorá 概要

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Agorá（古代ギリシャ語で「広場」の意）は BIS Innovation Hub が 2024.04 に立ち上げた旗艦プロジェクト — 7 つの G10 中央銀行（米 FRBNY / 英 BoE / 仏 BdF / 日 BoJ / 韓 BoK / メキシコ Banxico / スイス SNB） + 40+ の商業銀行が、統一されたプログラマブル・プラットフォーム上で wholesale CBDC + トークン化された商業銀行預金を同時に実験するもので、多国間トークン化インフラの de facto 標準候補と位置付けられる。

## Key facts

- 7 G10 中央銀行: FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ の商業銀行参加者: JPM / Citi / HSBC / [[megabanks/mufg|MUFG]] / SWIFT / Mastercard / Visa など ^[extracted]
- 2024.04 立ち上げ、2024.09 に民間機関リストを公表 ^[extracted]
- 2025 Phase 1 = 概念実証（クロスボーダー wholesale 決済） ^[extracted]
- 2025-2026 Phase 2 = ライブ・プロトタイプ（まだ稼働開始していない） ^[extracted]
- BIS Innovation Hub は Cecilia Skingsley が統括、Agorá は Hyun Song Shin チームが設計 ^[extracted]
- テスト焦点: PvP（payment-vs-payment）、DvP（delivery-vs-payment）、クロスカレンシー・アトミック決済 ^[extracted]

## Mechanism / How it works

Agorá のアーキテクチャは単一のブロックチェーンではなく、BIS が「協調レイヤー仕様」を提供する。**二層構造を並行実験**: 中央銀行は wholesale CBDC（M0 中央銀行マネー）を発行、商業銀行はトークン化預金（M1 商業銀行マネー）を発行、両者が同一プログラマブル・プラットフォーム上で相互運用される。中核テストシナリオ: クロスボーダー wholesale 決済における PvP（2 つの決済レッグのアトミック交換）/ DvP（決済レッグ vs 資産レッグのアトミック交換）/ クロスカレンシー決済（USD ↔ EUR の直接交換、SWIFT correspondent banking 仲介を経由しない）。

**真の「グローバル CBDC」ではない**: 7 中央銀行はそれぞれ wholesale CBDC を発行し、Agorá が提供するのは「相互運用レイヤー仕様」であり、単一の技術スタックや単一通貨を強制するものではない。商業銀行が Agorá プラットフォーム上でトークン化預金を発行することは、実質的には現行の correspondent banking をプログラマブル版に書き直すことを意味する。

## Origin & evolution

2021 年に [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]（BIS + 中 / 香港 / タイ / UAE）が立ち上がる → 2024.10 BIS が mBridge から撤退（技術は PBoC + HKMA に移管）。BIS の mBridge 撤退とほぼ同時に Agorá を立ち上げ（2024.04）、業界では「BIS は政治的に西側主導版を持たざるを得なかった」と広く解釈された。2024.09 に 40+ の商業銀行リストを公表、参加の深さは mBridge をはるかに上回る。2025 年に Phase 1 概念実証に入る。三円 MRA（欧 [[fintech/mica-overview|MiCA]] + 米 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]] · 2026-2027 ローンチ予定）が成立すれば、Agorá wholesale CBDC はクロスボーダー stablecoin 償還の最終的な決済アンカーとなり得る — stablecoin → 商業銀行トークン化預金 → wholesale CBDC の三層パススルー。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## Sources

- https://www.bis.org/about/bisih/topics/cbdc/agora.htm

---
source: fintech/bis-project-agora-overview
source_hash: e031c34ab57a839c
lang: ja
status: machine
fidelity: ok
title: "BIS Project Agorá 概要"
translated_at: 2026-06-02T13:21:55.076Z
---

# BIS Project Agorá 概要

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。隣接文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> Agorá（古代ギリシャ語で「広場」の意）は BIS Innovation Hub が 2024.04 に立ち上げた旗艦プロジェクト — 7 つの G10 中央銀行（米 FRBNY / 英 BoE / 仏 BdF / 日 BoJ / 韓 BoK / メキシコ Banxico / スイス SNB） + 40+ の商業銀行が、統一されたプログラマブル・プラットフォーム上で wholesale CBDC + トークン化された商業銀行預金を同時に実験するもので、多国間トークン化インフラの de facto 標準候補と位置付けられる。

## 主要事実

- 7 G10 中央銀行: FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ の商業銀行参加者: JPM / Citi / HSBC / [[JapanFG/mufg|MUFG]] / SWIFT / Mastercard / Visa など ^[extracted]
- 2024.04 立ち上げ、2024.09 に民間機関リストを公表 ^[extracted]
- 2025 Phase 1 = 概念実証（クロスボーダー wholesale 決済） ^[extracted]
- 2025-2026 Phase 2 = ライブ・プロトタイプ（まだ稼働開始していない） ^[extracted]
- BIS Innovation Hub は Cecilia Skingsley が統括、Agorá は Hyun Song Shin チームが設計 ^[extracted]
- テスト焦点: PvP（payment-vs-payment）、DvP（delivery-vs-payment）、クロスカレンシー・アトミック決済 ^[extracted]

## メカニズム / 仕組み

Agorá のアーキテクチャは単一のブロックチェーンではなく、BIS が「協調レイヤー仕様」を提供する。**二層構造を並行実験**: 中央銀行は wholesale CBDC（M0 中央銀行マネー）を発行、商業銀行はトークン化預金（M1 商業銀行マネー）を発行、両者が同一プログラマブル・プラットフォーム上で相互運用される。中核テストシナリオ: クロスボーダー wholesale 決済における PvP（2 つの決済レッグのアトミック交換）/ DvP（決済レッグ vs 資産レッグのアトミック交換）/ クロスカレンシー決済（USD ↔ EUR の直接交換、SWIFT correspondent 銀行 仲介を経由しない）。

**真の「グローバル CBDC」ではない**: 7 中央銀行はそれぞれ wholesale CBDC を発行し、Agorá が提供するのは「相互運用レイヤー仕様」であり、単一の技術スタックや単一通貨を強制するものではない。商業銀行が Agorá プラットフォーム上でトークン化預金を発行することは、実質的には現行の correspondent 銀行 をプログラマブル版に書き直すことを意味する。

## 起源と進化

2021 年に [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]（BIS + 中 / 香港 / タイ / UAE）が立ち上がる → 2024.10 BIS が mBridge から撤退（技術は PBoC + HKMA に移管）。BIS の mBridge 撤退とほぼ同時に Agorá を立ち上げ（2024.04）、業界では「BIS は政治的に西側主導版を持たざるを得なかった」と広く解釈された。2024.09 に 40+ の商業銀行リストを公表、参加の深さは mBridge をはるかに上回る。2025 年に Phase 1 概念実証に入る。三円 MRA（欧 [[fintech/mica-overview|MiCA]] + 米 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]] · 2026-2027 ローンチ予定）が成立すれば、Agorá wholesale CBDC はクロスボーダー stablecoin 償還の最終的な決済アンカーとなり得る — stablecoin → 商業銀行トークン化預金 → wholesale CBDC の三層パススルー。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## 出典

- https://www.bis.org/about/bisih/topics/cbdc/agora.htm

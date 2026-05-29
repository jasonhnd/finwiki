---
title: HKMA Project Ensemble 概要 · 香港トークン化マネー・サンドボックス
aliases: [bis-project-ensemble-overview, hkma-ensemble, Project Ensemble]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, hkma, hong-kong, tokenized-deposits, sandbox, hsbc, anchorpoint]
sources:
  - https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/research-and-applications/project-ensemble/
  - https://www.hkma.gov.hk/eng/news-and-media/press-releases/
  - https://www.bis.org/about/bisih/locations/hong_kong_sar.htm
  - https://www.hsbc.com.hk/
  - https://www.hkma.gov.hk/eng/
status: candidate
---

# HKMA Project Ensemble 概要

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Project Ensemble は香港金融管理局（HKMA）が 2024.03 に立ち上げたトークン化マネー・サンドボックスで、香港域内におけるトークン化銀行預金 + wholesale CBDC の応用を中心にテストする。第 1 陣は HSBC / Standard Chartered / BoCHK / Hang Seng;2024.08 に Anchorpoint（非伝統的銀行）が加入。Ensemble + mBridge のデュアル・トラックにより、香港はアジアで唯一、ローカル・トークン化決済 + クロスボーダー CBDC コリドーを同時に有する金融センターとなった。

## Key facts

- 2024.03 立ち上げ、第 1 陣は 4 行（HSBC / Standard Chartered / BoCHK / Hang Seng） + HKEX + PolyU ^[extracted]
- 2024.08 Anchorpoint 加入、非伝統的銀行参加者に拡張 ^[extracted]
- サンドボックスは retail には開放されず、純粋に機関間実験 ^[extracted]
- HKMA は同時に e-HKD リテール CBDC（独立プロジェクト）を推進 ^[extracted]
- 4 大テーマ: トークン化資産決済 / PvP / DvP / グリーン・ファイナンス ^[extracted]

## Mechanism / How it works

Ensemble のアーキテクチャは「トークン化香港ドル預金」を中心とし、商業銀行は HKMA 監督下のサンドボックスでトークン化預金トークンを発行、機関間がそのトークンを通じて決済を完了する。**4 大テーマ**:
1. トークン化資産決済 — 債券 / ファンドのセカンダリー市場トークン化取引
2. PvP (Payment-vs-Payment) — 香港ドル・トークン化預金 vs 外貨のアトミック・スワップ
3. DvP (Delivery-vs-Payment) — トークン化資産 vs トークン化香港ドル決済
4. グリーン・サステナブル・ファイナンス — カーボン・クレジット・トークン化と気候融資

**Anchorpoint の戦略的意義**: 元 HSBC / Goldman の幹部が創業し、トークン化インフラ・サービス・プロバイダーとして位置付けられる。Ensemble への入選は、HKMA が「フィンテック + 伝統的銀行」のハイブリッド参加を受け入れる姿勢を示すもの → サンドボックスは大手銀行の実験場だけでなく、新型インフラ・プロバイダーの入場券でもある。JPM Kinexys / Citi Token Services との間で「独立 vs 銀行組み込み」のトークン化経路の対比を形成（deposit token のテーゼは [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token のテーゼ]] 参照）。

## Origin & evolution

2021 HKMA は BIS と共同で [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] を立ち上げ → 2024.10 BIS 撤退後、HKMA + PBoC が引き継ぎ。2024.03 Ensemble 立ち上げ → HKMA は「域内 + クロスボーダー」のデュアル・トラック戦略を実現: Ensemble でローカル金融機関にトークン化預金の know-how を習得させ、mBridge で香港ドルをクロスボーダー CBDC コリドーの「必須通貨」とする。2024.08 Anchorpoint 加入で非銀行参加者に拡張。2025-2026 [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] のライセンス発行後、Ensemble サンドボックスは事前ウォームアップの場となる — ライセンス取得済み stablecoin 発行体は、Ensemble を通じてトークン化香港ドル預金との相互運用性をテスト可能。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble × mBridge HKMA デュアル・トラック戦略]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
<!-- /wiki-links:managed -->

## Sources

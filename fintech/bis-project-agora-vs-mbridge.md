---
title: Agorá vs mBridge · 2026+ クロスボーダー決済デュアル・トラック制の戦略比較
aliases: [bis-project-agora-vs-mbridge, Agora mBridge comparison, クロスボーダー決済デュアル・トラック制]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, bis, mbridge, agora, cbdc, geopolitics, cross-border-settlement]
sources:
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
  - https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
  - https://www.bis.org/press/p240403.htm
  - https://www.bis.org/innovation_hub.htm
  - https://www.pbc.gov.cn/en/3688110/index.html
status: candidate
---

# Agorá vs mBridge · クロスボーダー決済デュアル・トラック制の戦略比較


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> mBridge（2021- · BIS + 中国・香港・タイ・UAE · BIS は 2024.10 撤退）と Agorá（2024.04- · BIS + 7 G10 中央銀行）は、2026+ におけるクロスボーダー決済デュアル・トラック制の de facto な分水嶺となっている。両者の最大の政治的差異は、FRBNY が Agorá には深く関与する一方で mBridge には全く関与していない点で、「米ドル・アンカー + G10 コンセンサス」 vs 「BRICS + 中東 + 香港」という 2 つの地政学的軸を体現する。

## Key facts

- mBridge は 2021 に立ち上げ、2024.10 BIS 撤退（技術は PBoC + HKMA に移管） ^[extracted]
- Agorá は 2024.04 に立ち上げ、2024.09 に参加者を公表 ^[extracted]
- mBridge 通貨: CNY / HKD / THB / AED ^[extracted]
- Agorá 通貨: USD / GBP / EUR / JPY / KRW / MXN / CHF ^[extracted]
- 米国 FRBNY は Agorá に参加するが mBridge には参加しない ^[extracted]
- mBridge は商業銀行の参加度が限定的（中央銀行主導） ^[extracted]
- Agorá は商業銀行が深く関与（40+ 行） ^[extracted]

## Mechanism / How it works

両プロジェクトは実際には平行するクロスボーダー決済インフラだが、2 つの異なる政治的コンセンサスを体現する:

**mBridge モデル**: 中央銀行間プロジェクトが主導、BIS は初期協調後に撤退（2024.10）し、PBoC + HKMA が引き継ぎ。技術スタックは初期 BIS Innovation Hub Hong Kong Centre 設計に基づく。商業銀行はエンドユーザーとして受動的に接続する。**地政学的中核特徴**: 中国 + 香港 + 中東（UAE） + タイの軸を組み、米ドル correspondent banking をバイパスする明確な経路。

**Agorá モデル**: BIS の現役旗艦プロジェクト、7 G10 中央銀行 + 40+ のグローバル大手銀行が深く共同構築。商業銀行が深く設計に関与（JPM / Citi / HSBC / SWIFT / Mastercard / Visa）。**地政学的中核特徴**: 米ドルを中心に + 西側 G10 コンセンサス + 韓国 / メキシコの 2 つのアジア / 米州接続点。

**デュアル・トラック制の含意**: 2026+ のクロスボーダー決済はもはや「SWIFT 一本」や「Visa / Mastercard 一本」ではなく、[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]（東側） + Agorá（西側） + [[fintech/cross-border-sc-via-swift-api|SWIFT API]]（伝統） + stablecoin（民間 · 詳細は [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]）の 4 トラック並行となる。商業銀行は複数トラックに同時接続する必要があり、stablecoin 発行体はマルチトラック・アーキテクチャ下で決済アンカーとしての位置付けを定める必要がある。

## Origin & evolution

2017-2020 BIS Innovation Hub がシンガポール、香港、スイス、ロンドンの 4 か所にセンターを設置 → マルチ CBDC のクロスボーダー決済が研究の重点となる。2021 mBridge 立ち上げ（BIS Hong Kong Centre 主導）。2022 ロシア準備凍結事件 → 米ドルの中立性仮定が揺らぐ → BRICS + 中東で脱ドル化クロスボーダー決済のニーズが急増。2024.10 BIS は地政学的圧力下で mBridge から撤退し、ほぼ同時に（2024.04）Agorá を立ち上げ → BIS は実質的に「東側版」を PBoC に移管し、自身は「西側版」を運営する。2025-2026 でデュアル・トラック構造が明確化。

## Counterpoints

- 「デュアル・トラック」物語は過度に政治化されている可能性 — 実際には商業銀行が双方に同時接続し、明確な陣営選択がない可能性
- mBridge は BIS 撤退後も技術的中立性を維持できるかは疑問（PBoC 引き継ぎ後も依然として G10 国家のアクセスを開放しているか?）
- FRBNY の Agorá 参加は米国公式のコミットメントを意味せず、OCC / Fed Board の政策不確実性の影響を依然受ける
- 第 3 のトラック（IMF 主導の可能性ある CBDC プロトコル）または第 4 のトラック（地政学的に中立な SWIFT 近代化）が構図を変える可能性

## Open questions

- mBridge はいつ商用化するか? 他の BRICS 諸国（ロシア / ブラジル / インド / 南アフリカ）に拡張するか?
- Agorá Phase 2 がローンチした後、mBridge の経路を取り込むか（技術的相互接続）?
- 中国は mBridge を迂回して独自の CBDC 相互運用フレームワーク（SWIFT を代替する CIPS 類似）を打ち出すか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá 概要]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト · 通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources


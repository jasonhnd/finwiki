---
title: FATF 評価のクロスボーダー・コンプライアンス含意 · §501(d) 入リスト資格の前置フィルター層
aliases: [fatf-cross-border-implications, FATF grey list MRA, FATF stablecoin gatekeeper]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [fintech, law, regulation, aml, fatf, mra, stablecoin, jurisdiction]
sources:
  - https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html
  - https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html
  - https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions
  - https://www.fincen.gov/resources/statutes-and-regulations
  - https://www.imf.org/external/np/leg/amlcft/eng/
status: active
---

# FATF 評価のクロスボーダー・コンプライアンス含意 · §501(d) 入リスト資格の前置フィルター層

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> FATF グレー / ブラックリストは **基底にあるテクニカル・フィルター**（AML/CFT コンプライアンス）であり、SC issuer / OCC charter / §501(d) 入リスト資格の潜在的な前置ゲートを決定する。グレーリスト国の SC issuer が US/EU MRA を通過するのは事実上不可能。FATF は jurisdiction-list-monetary-protectionism の necessary but not sufficient 条件であり、暗号ドル化陣営の線引きはここから始まる。

## Key facts

- FATF Grey list 国は IMF Article IV 評価のリスク格付けが自動的に引き下げられる ^[extracted]
- 国際銀行の correspondent banking 関係の引き締め（de-risking）が直接的な連鎖反応となる ^[extracted]
- FedWire / SWIFT のアクセス基準が引き上げられ、OCC / EBA / FSA が該当法域の issuer 申請を拒否 ^[extracted]
- Türkiye は 2024-Q3 にグレーリスト脱却 → MoonPay 等が改めてトルコの入り口を構築 ^[extracted]
- UAE は 2024-02 に脱却 → Binance MENA HQ + Tether HK の申請審査が解錠 ^[extracted]
- Cayman は 2023-10 に脱却 → Sky DAO + 多数の DeFi protocol が改めてコンプライアンス化 ^[extracted]

## Mechanism / How it works

FATF 評価が SC コンプライアンスに与える伝達連鎖: **グレーリスト国** → IMF Article IV レポートでのリスク格付け引き下げ → 国際銀行の correspondent banking 関係の引き締め（de-risking） → FedWire / SWIFT アクセス基準の引き上げ → OCC / EBA / FSA が該当法域の issuer 申請を拒否 → §501(d) / MiCA equivalent 資格が基本的に断絶。

SC issuer の立地選定への具体影響: HK / SG / US / EU / Switzerland / Japan / UK は FATF 最上位国であり、すべての OCC 等価 charter はここに集中する。Cayman / BVI は灰には入っていないが FATF 評価は中位、DAO 系プロジェクトは Switzerland (Zug) / Singapore に転向。Tether HK 申請の隠れたボトルネックは、HK FSA が Tether の過去の BVI/El Salvador 業務が FATF R.15/R.16 に違反していないことを確認する必要がある点（詳細は [[fintech/hkma-stablecoin-licensing-implications|HKMA ライセンス戦略含意]]）。HK SFC VASP 側のライセンス整備は [[exchanges/hk-sfc-vasp-licensing-overview|HK SFC VASP ライセンス概要]] 参照。

## Origin & evolution

2019-10 の G20 大阪での暗号資産分野への拡張後、FATF 評価は SC 規制における gatekeeper ツールとして初めて位置付けられた。FSB の 2023-07「High-level Recommendations for Crypto Asset Activities」は FATF を直接引用、IOSCO の 2023-11「Policy Recommendations for Crypto and Digital Asset Markets」も同期し、三者で「FATF（マネロン対策） + FSB（金融安定） + IOSCO（市場行為）」の三角形が形成された。2024-2025 の多数国によるグレーリスト脱却ラッシュ（UAE / Türkiye / Cayman / Philippines）は SC 市場の流動性を直接的に解放しており、[[fintech/gray-market-dollar-network-formalization|グレーマーケット・ドル正式化]] と同期して推進されている。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト型通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources

---
title: EU MiCA · Markets in Crypto-Assets Regulation 概要
aliases: [mica-overview, MiCA EU, EU stablecoin regulation]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-23
review_by: 2026-09-21
confidence: certain
tags: [fintech, law, regulation, eu, stablecoin, mica]
sources:
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114
  - https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica
  - https://www.eba.europa.eu/regulation-and-policy/markets-crypto-assets-mica
  - https://finance.ec.europa.eu/digital-finance/crypto-assets_en
status: active
---

# EU MiCA · Markets in Crypto-Assets Regulation 概要

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> MiCA は EU 統一の暗号資産/ステーブルコイン規制法であり、2023-06 通過、2024-06 SC(ART / EMT)部分施行、2024-12 全面施行。MiCA は米国 GENIUS Act §501 と協調し U.S.-EU MRA の基盤を形成。これは三円 MRA の EU 柱であり、欧州を USDC / EURC 二軌コンプラ市場に変貌させる。

## Key facts

- MiCA は 2023-06 通過 / 2024-12 全面施行 ^[extracted]
- 第 1 弾 MiCA EMT ライセンス取得者は約 10-15 社 ^[extracted]
- EURC 2026-05 流通 €280M(vs USDC EU 流通 ~$8B、差は 300x から ~20x まで縮小)^[extracted] · 詳細は [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026-05]] および [[fintech/circle-usdc-stablecoin|Circle USDC / EURC issuer]] を参照
- 大型 ART > €5B の issuer 制限条項により USDT のような米ドル系 SC の EU 拡大を抑制 ^[extracted]
- USDT の EU シェア 2024-12 ~28% → 2026-05 ~3% ^[extracted]
- algorithmic stablecoins は MiCA で明文禁止(UST 崩壊の結果)^[extracted]
- ESMA Q&A 2.7:issuer 不在の DAI/USDS/LUSD は MiCA に該当しないが、offer to public 不可 ^[extracted]

## Mechanism / How it works

**MiCA 2 種類 SC フレームワーク**:
| 種別 | 名称 | 規制階層 | 例 |
|---|---|---|---|
| EMT(E-Money Token) | 単一法定通貨ペッグ | EBA + 国家中央銀行 | USDC(Circle Europe) / EURC / PYUSD |
| ART(Asset-Referenced Token) | バスケット資産 / マルチ法定通貨ペッグ | EBA(特殊規制) | 大規模コンプラ ART はほぼなし |

**重要な洞察**:MiCA はステーブルコインを「単一法定通貨ペッグか否か」で分類し、**大多数のプロジェクトを EMT に追い込む**。ART は規制負担が過大 → ほぼ採用されない。これは GENIUS §501 の「チェーンレベル Denylist 強制」と同型 —— ルールでプロダクトを形状づける。MiCA CASP ライセンスの具体的実施詳細は [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概要]] を、HK / SG / JP との横断比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。

**コア条項**:準備金 100%(短期国債 + 中央銀行預金)+ 準備金を第三者カストディ + 月次監査開示 + 発行者が EU 内にエンティティを保有 + 資本要件 + 流通量上限(大型 ART > €5B 制限 + 大型 EMT の一部制限)+ ホワイトリスト(EU ライセンス発行者のみが EU で商用流通可能)+ GENIUS §501 と協調(freeze 機能 + AML/CFT 必須)。

## Origin & evolution

MiCA は 2020-09 EU Commission Digital Finance Package の一部提案。2023-06 通過(Regulation (EU) 2023/1114)。2024-06 SC 部分(ART / EMT)施行。2024-12 全面施行。圧力プレイヤー:Tether / USDT(MiCA 非受容 + Article 17 大型 SC 制限 → EU 流通量制限) · DAI / LUSD / FRAX(issuer 不在 SC 制限) · algorithmic stablecoins(UST 崩壊の結果 · 明文禁止)。受益プレイヤー:Circle(USDC EU + EURC ダブルブランド) · Société Générale(STBL EUR ペッグ) · BBVA / Santander(EUR SC 発行予定) · MiCA コンプラ取引所(Kraken / Bitstamp / Coinbase EU)。MiCA は [[fintech/dora-eu-digital-operational-resilience-overview|DORA]] と「事業 + レジリエンス」二軌規制フレームワークを形成。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC issuer]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026-05]]
<!-- /wiki-links:managed -->

## Sources

---

**Last refresh** (2026-05-26): synced EURC 2026-05 numbers (€280M) with `eu-mica-implementation-status-2026`; added Circle USDC and implementation-status wikilinks.

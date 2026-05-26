---
title: 二通貨アービトラージ · §501 リーガル hack と規制脆弱性
aliases: [dual currency stablecoin arbitrage legal hack, stablecoin swap not fx business, §501 fx regulatory hack]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, fx, legal-hack, genius-501, mica, japan-psa, stablecoin]
sources:
  - https://www.congress.gov/bill/119th-congress/senate-bill/394
  - https://www.fsa.go.jp/en/news/index.html
  - https://www.esma.europa.eu/policy-activities/crypto-assets-mica
  - https://www.circle.com/en/eurc
  - https://www.circle.com/en/usdc
status: candidate
---

# 二通貨アービトラージ · §501 リーガル hack と規制脆弱性


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 二通貨ステーブルコイン・アービトラージの合法性は、一つのリーガル hack に立脚している:**「2 つの独立した payment stablecoin 間の atomic swap は FX 業務ではない」**。これがオンチェーン FX に法的余地を与えている。しかし hack の脆弱点は、米国 / EU / 日本のいずれかの規制当局が「二通貨 swap」を「FX 業務」として再定義した瞬間 → 全構造が無効になることである。SEC / OCC / FCA / FSA の告知を継続的にモニターする必要がある。

## Key facts

- GENIUS Act §501 は「保有 ↔ swap 経由」のクロスカレンシーを禁止していない · 発行体による FX 業務のみ禁止 ^[extracted]
- MiCA Title IV は既に EUR-stablecoin の複数発行体を認めており = オンチェーン EUR FX 流動性の奨励に等しい ^[extracted]
- 日本 PSA 2023 改正は stablecoin を「電子決済手段」と定義 · swap を FX に分類することは明示せず ^[extracted]
- SocGen EURCV / Lugh EURL 等のユーロ stablecoin が規制の多元化を提供 ^[extracted]
- DEX プールによるマーケットメイク ≠ OTC FX desk · これが現状の法的境界における重要論点 ^[inferred]

## Mechanism / How it works

**三層論証 · なぜ FX 業務ではないか**:

1. **個人 / 企業が 2 つの独立した 1:1 stablecoin を自主的に相互交換** = 自主的な資産配分 · FX 免許不要
2. **DEX がプール流動性を提供** = 自動マーケットメイク · OTC FX desk ではない
3. **mint/burn は発行体のみ実施** = 発行体が行うのは「償還」· 「両替」ではない

この全構造は GENIUS §501 + MiCA Title IV + 日本 PSA の三フレームワーク下で同時に合法だが · いずれかの規制再定義により崩壊する。

**なぜ §501 が余地を与えたか**:GENIUS Act §501 の主要制約 = payment stablecoin は 1:1 fiat-reserved 必須 · 発行体は IDI / NCBA / QC NTI · FX 業務の直接実施は不可(ECF 1934 規制との衝突回避)。だが**「2 つの独立した stablecoin の swap = FX」とは明言せず** → 法的空白。

**MiCA の能動的奨励**:Title IV(EMT)は複数発行体を許可 · Circle 単一依存を低減 · EU が能動的にオンチェーン FX 流動性に余地を残す(政治的意図 = USD-stablecoin 依存の低減)。

## Origin & evolution

2024 年以前 = オンチェーン FX 実現不可(USDC 一強)。2024 [[fintech/mica-overview|MiCA]] Title IV 施行 + EURC 流通量上昇 + SocGen / Lugh の上場 = ユーロ側の複数発行体構造が形成。2025 [[JapanFG/jpyc|JPYC]] が日本資金決済法の新フレーム下で初の円 stablecoin に。2026.05 三角アービトラージが DEX 上で初めて実稼働 = リーガル hack が理論からプロダクトへ。

## Counterpoints

規制 critics の主張:「ユーザー自主」論は無効 —— あらゆる facilitator (DEX / aggregator)が routing / pricing アルゴリズムを持てば、実質的にマーケットメイカーであり · FX / commodity 規制を受けるべき。SEC は既に Uniswap に Wells Notice を発出(2024)· 道筋は不透明。日本 FSA も stablecoin swap を FX 類とみなす可能性あり · 為替レート discovery を伴うため。規制の最終的な落とし所は「である vs ない」ではなく · 「scope の広さ + 報告義務の重さ」となる可能性があり、最終的には [[fintech/fx-onchain-as-stablecoin-final-boss|FX オンチェーン化 = ステーブルコインのラスボス]] の実装スピードに影響を与える。

## Open questions

どの規制当局(SEC / OCC / FCA / FSA)が最初に声明を出すか?米国一国が再定義したら · EU / 日本は追随するか?DEX は FX dealer 登録を要求されるか?経路上の aggregator (LiFi / Stargate / Squid)の責任配分は?3 発行体(Circle / JPYC Inc. / SocGen)は能動的に self-regulatory MOU を結ぶか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|二通貨アービトラージ · 概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本ステーブルコイン規制全景]]
- [[fintech/three-circles-stablecoin-mra-framework|三円ステーブルコイン MRA フレームワーク]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## Sources

- GENIUS Act §501 / MiCA Title IV / 日本 PSA(2023 改正)
- SEC Uniswap Wells Notice(2024)

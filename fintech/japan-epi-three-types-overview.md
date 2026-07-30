---
title: 日本 EPI 三型アーキテクチャ · 信託型 / 銀行型 / 資金移動業者型 概要
aliases: [japan-epi-overview, Japan EPI, 日本資金決済法, 信託型, 銀行型, 資金移動業者型]
domain: fintech
created: 2026-05-18
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-09-22
confidence: certain
tags: [fintech, law, regulation, japan, stablecoin, epi]
sources:
  - https://www.fsa.go.jp/policy/virtual_currency02/index.html
  - https://www.fsa.go.jp/news/r4/sonota/20230526/20230526.html
  - https://elaws.e-gov.go.jp/document?lawid=421AC0000000059
status: active
---

# 日本 EPI 三型アーキテクチャ · 信託型 / 銀行型 / 資金移動業者型 概要

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 2023-06 施行の改正資金決済法は、法定通貨連動型の電子決済手段と、その仲介を行う電子決済手段等取引業を制度化した。発行主体として銀行、資金移動業者、信託会社等の経路が想定されるが、上限・償還・利用者保護は各業法、登録類型、商品設計で異なる。プロジェクト発表だけで発行済み・登録済みとは判断しない。

## Key facts

- 改正法は 2022-06 に成立し、電子決済手段関連の枠組みは 2023-06 に施行された。
- 電子決済手段の発行経路と、電子決済手段等取引業者による売買・交換・管理の登録は区別する。
- 資金移動業には第一種・第二種・第三種があり、金額上限を全商品一律の「100 万円 / 件」と要約できない。
- 信託型・銀行型・資金移動業者型の具体例は、金融庁の登録一覧、各発行主体の開示、信託・銀行・資金移動業の適用関係で確認する。

## Mechanism / How it works

**EPI 発行経路の比較**:

下表は [金融庁の電子決済手段等に関する制度資料](https://www.fsa.go.jp/policy/virtual_currency02/index.html) と [資金決済法](https://elaws.e-gov.go.jp/document?lawid=421AC0000000059) に基づく制度整理である。個別商品の発行・登録状況は金融庁の最新一覧と発行主体の開示を優先する。

| 発行経路 | 発行主体 | 主な法的枠組み | 金額・流通条件 | 例の扱い |
|---|---|---|---|---|
| 信託型 | 信託会社・信託銀行等 | 信託業法 / 兼営法、資金決済法上の電子決済手段 | 信託財産、償還条件、受益権設計に従う。包括的な「上限なし」とは断定しない | Progmat 等は構想・基盤と、実際の発行案件を分けて確認 |
| 銀行型 | 銀行 | 銀行法、資金決済法上の電子決済手段 | 銀行の負債・商品条件・監督上の要件に従う | 実証・計画の公表を商用発行と同一視しない |
| 資金移動業者型 | 登録資金移動業者 | 資金決済法（第一種・第二種・第三種） | 類型、滞留規制、履行保証、商品条件により異なる | JPYC 等は最新の登録・商品開示で確認 |

この三分類は発行主体の制度経路であり、特定チェーン、対象顧客、流通量、ガバナンス比率を自動的に決めるものではない。[[payment-firms/progmat|Progmat]]、銀行の実証、[[payment-firms/jpyc|JPYC]] は、それぞれ最新の発行・登録・商品資料で検証する。

## Origin & evolution

電子決済手段に関する改正法は 2022-06 に成立し、関係する政府令・事務ガイドラインとともに 2023-06 に施行された。制度の経緯と現行資料は [金融庁の案内](https://www.fsa.go.jp/news/r4/sonota/20230526/20230526.html) で確認する。個別プロジェクトは、構想発表、発行主体の業法上の資格、仲介事業者の登録、実際の商品発行を分け、最新の金融庁一覧と事業者開示で追跡する。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 規制全景]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
<!-- /wiki-links:managed -->

## Sources

- 金融庁 — 電子決済手段・暗号資産等に関する制度情報: https://www.fsa.go.jp/policy/virtual_currency02/index.html
- 金融庁 — 改正資金決済法等の施行に伴う政府令・事務ガイドライン: https://www.fsa.go.jp/news/r4/sonota/20230526/20230526.html
- e-Gov 法令検索 — 資金決済に関する法律（平成21年法律第59号）: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059

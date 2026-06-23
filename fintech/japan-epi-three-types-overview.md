---
title: 日本 EPI 三型アーキテクチャ · 信託型 / 銀行型 / 資金移動業者型 概要
aliases: [japan-epi-overview, Japan EPI, 日本資金決済法, 信託型, 銀行型, 資金移動業者型]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [fintech, law, regulation, japan, stablecoin, epi]
sources:
  - https://www.fsa.go.jp/policy/virtual_currency02/index.html
  - https://www.fsa.go.jp/news/r4/sonota/20230526/20230526.html
  - https://elaws.e-gov.go.jp/document?lawid=421AC0000000059
  - https://www.boj.or.jp/paym/digital/index.htm
status: active
---

# 日本 EPI 三型アーキテクチャ · 信託型 / 銀行型 / 資金移動業者型 概要

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 日本「資金決済法」改正(2023)は**世界で最も nuanced なステーブルコイン・フレームワーク**を構築 —— EPI(Electronic Payment Instrument)三型アーキテクチャ:信託型(Progmat XJPY)/ 銀行型(みんなの銀行 + 福岡 FG)/ 資金移動業者型(JPYC)。三型は規制負担、柔軟性、流通制限がそれぞれ大きく異なる。日本はステーブルコインの法的地位を明文で定義した世界初の主要経済国である(GENIUS Act より 2 年先行)。

## Key facts

- 「資金決済法」改正は 2023 通過 / 2023-06 施行 ^[extracted]
- GENIUS Act より約 2 年先行 ^[extracted]
- Progmat 信託型は non-MUFG-controlled に設計(単一最大株主 49% + ガバナンス 51% の多元化)^[extracted]
- JPYC は日本唯一の資金移動業者型 SC 保有者 ^[extracted]
- JPYC 2026-Q1 流通 21 億円 + 6 万 holders + 3 か月で 2.6 倍成長 ^[extracted]
- SBI Circle Holdings 2025-08 設立 · 50/50 折半出資 · USDC の日本独占分配 ^[extracted]
- Project Pax = 日本三大銀行 + Datachain のクロスボーダー SC プロジェクト · SWIFT 互換性のみ解決 ^[extracted]
- 資金移動業者型の流通上限:¥100 万 / 件(一部)^[extracted]

## Mechanism / How it works

**EPI 三型比較**:
| 種別 | 発行人 | 規制 | 柔軟性 | 流通上限 | 代表例 |
|---|---|---|---|---|---|
| 信託型 | 信託銀行 | 信託業法 + EPI | 高(任意額発行可) | なし | Progmat XJPY(MUFG 信託 + 三井住友信託 + みずほ信託) |
| 銀行型 | 銀行 | 銀行業法 + EPI | 中(預金と連動) | 銀行 BS にリンク | みんなの銀行 SC(Solana ルート) |
| 資金移動業者型 | 資金移動業者 | 資金決済法 | 低(小額クロスボーダー一部 ¥100 万制限) | ¥100 万 / 件(一部) | JPYC(岡部典孝) |

**信託型**([[payment-firms/progmat|Progmat]] XJPY):三菱 UFJ + 三井住友 + みずほ 三大銀行 + Datachain 合弁、non-MUFG-controlled 設計(単一最大株主 49% + ガバナンス 51% の多元化)、B2B 大口資金が対象。**銀行型**(みんなの銀行):福岡 FG / みんなの銀行 + Solana ルート、銀行顧客リテール対象。**資金移動業者型**([[payment-firms/jpyc|JPYC]]):岡部典孝主導、日本唯一の資金移動業者型 SC 保有者、3 か月で 2.6 倍成長。

## Origin & evolution

2017「資金決済法」改正で「仮想通貨」を初めて定義。2019-04 改正資金決済法で「暗号資産」概念を導入。2022-06 改正案通過で EPI 三型フレームワークを導入。2023-06 施行、日本はステーブルコインの法的地位を明文で定義した世界初の主要経済国となる。2025-08 SBI Circle Holdings 設立で構図が変化:USDC の日本独占分配 + JPYC / Progmat / みんなの銀行 と合わせて 4 陣営を形成、詳細は [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]] を参照。日本 VASP 総覧は [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]] を参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 規制全景]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

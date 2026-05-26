---
title: CBDC 多層アーキテクチャ概要 · 二層 / 直接 / token-based の三パラダイム
aliases: [cbdc-multi-tier-architecture-overview, CBDC tiered architecture overview, 多層 CBDC 概要]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, cbdc, e-cny, drex, digital-euro, monetary-architecture]
sources:
  - https://www.bis.org/publ/othp33.htm
  - https://www.bis.org/publ/arpdf/ar2021e3.htm
  - https://www.ecb.europa.eu/paym/digital_euro/html/index.en.html
  - https://www.bcb.gov.br/en/financialstability/drex_en
  - https://www.pbc.gov.cn/en/3688110/index.html
status: candidate
---

# CBDC 多層アーキテクチャ概要


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> CBDC（中央銀行デジタル通貨）は発行アーキテクチャにより 3 つのパラダイムに分類される: **二層アーキテクチャ**（中央銀行 → 商業銀行 → ユーザー · 中国 e-CNY など）、**直接 CBDC**（中央銀行が直接ユーザーへ · 理論上のみ）、**token-based 多層アーキテクチャ**（中央銀行 + 商業銀行トークン化預金の分層 · ブラジル DREX / デジタル・ユーロなど）。アーキテクチャ選択は中央銀行による金融仲介の存続 / 通貨主権 / プライバシー / クロスボーダー相互運用性に対する根本的判断を反映する。

## Key facts

- 2025 年末時点で世界 130+ の中央銀行が CBDC を研究、30+ が Pilot 段階に入る ^[extracted]
- リテール CBDC を正式に発行したのは 4 か国のみ（中国 / ブラジル / ナイジェリア / ジャマイカ） ^[extracted]
- すべての G10 中央銀行が **二層または多層アーキテクチャ** を選択、直接 CBDC を採用したものはない ^[extracted]
- ブラジル DREX は token-based 多層パラダイムにおける最も完成度の高い商業的実験 ^[extracted]
- 中国 e-CNY は二層アーキテクチャの最大規模実証ケース（2025 年累計 ¥7 兆元超） ^[extracted]
- デジタル・ユーロの保有上限 €3000-4000（銀行預金流出を回避） ^[extracted]

## Mechanism / How it works

3 種類のアーキテクチャの中核的差異は **アカウントの階層** にある:

| 次元 | 二層 | 直接 | token-based 多層 |
|---|---|---|---|
| 中央銀行口座数 | 少（商業銀行向け） | 多（国民全員） | 中（商業銀行 + トークンプール向け） |
| 商業銀行の役割 | 完結（KYC + 配布） | 周縁化または消失 | トークン化預金発行体へと進化 |
| プライバシー | 商業銀行は見える、中央銀行は制限 | 中央銀行は完全に可視 | 暗号レイヤーで調整可能 |
| 技術 | アカウント中心 | アカウントまたはトークン | トークン + スマートコントラクト |
| クロスボーダー | 弱い | 極めて弱い | 強い（ホールセール CBDC との相互運用） |

**アーキテクチャ選択の政治的含意**: 直接 CBDC は商業銀行を周縁化する → 金融仲介の崩壊 → 中央銀行が信用配分を担う → 政治的に受け入れ不可能。**主要な中央銀行はすべて銀行預金基盤の保護を選択する**（二層または多層）。token-based 多層は新興の中間路線であり、商業銀行にトークン化預金を発行させることで仲介を保持しつつプログラマビリティを導入する — [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token のテーゼ]] のロジックと同型構造。

## Origin & evolution

2014 中国 PBoC が e-CNY 研究を開始（グローバル最古の大規模 CBDC プロジェクト）。2017-2019 BIS / IMF などの多国間組織が「中央銀行デジタル通貨」概念枠組みを提唱。2020 ECB がデジタル・ユーロ報告書を発表し、「二層 / 直接」二分法を確立。2022.04 中国 e-CNY 試験運用が 23 都市に拡大、二層アーキテクチャが大規模に検証された。2023-2024 ブラジル DREX（Hyperledger Besu ベース） + デジタル・ユーロ立法スタート → token-based 多層パラダイムが成熟。2025-2026 G10 中央銀行は [[fintech/bis-project-agora-overview|Agorá]] を通じて wholesale CBDC を協調、リテール CBDC は各国独自に推進 → 「アーキテクチャ選択が主権空間を決定する」が中央銀行間のコンセンサスに。日本側 DC-JPY 試験運用は [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]] 参照。

## Counterpoints

- 「すべての G10 が二層 / 多層を選択」は 2026 年スナップショット — デジタル・ユーロなどは依然として直接 CBDC モデルに近づける可能性
- 中国 e-CNY のユーザーアクティビティデータは混乱（¥7 兆元は累計取引額、実際のアクティブウォレット数は宣伝よりはるかに低い）
- ブラジル DREX 試験運用は限定的、商業化のタイムテーブルは繰り返し延期
- 直接 CBDC は小国（ナイジェリア eNaira など）で実際に試行されており、失敗率は高いが理論上完全に不可能とは限らない

## Open questions

- 米国は最終的に wholesale CBDC + 民間 stablecoin の組み合わせ（実質的にリテール CBDC の代替）を選ぶか?
- token-based 多層アーキテクチャの規制複雑性における実際のコストは?
- 中国 e-CNY の二層アーキテクチャは token-based 多層要素を取り込む方向に進化するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム · e-CNY / DREX / デジタル・ユーロ]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## Sources


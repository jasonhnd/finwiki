---
source: fintech/cbdc-multi-tier-architecture-overview
source_hash: 3a6a0b57603d5355
lang: ja
status: machine
fidelity: ok
title: "CBDC 多層アーキテクチャ概要"
translated_at: 2026-06-02T13:21:55.031Z
---
# CBDC 多層アーキテクチャ概要

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> CBDC（中央銀行デジタル通貨）は発行アーキテクチャにより 3 つのパラダイムに分類される: **二層アーキテクチャ**（中央銀行 → 商業銀行 → ユーザー · 中国 e-CNY など）、**直接 CBDC**（中央銀行が直接ユーザーへ · 理論上のみ）、**token-based 多層アーキテクチャ**（中央銀行 + 商業銀行トークン化預金の分層 · ブラジル DREX / デジタル・ユーロなど）。アーキテクチャ選択は中央銀行による金融仲介の存続 / 通貨主権 / プライバシー / クロスボーダー相互運用性に対する根本的判断を反映する。

## 主要事実

- 2025 年末時点で世界 130+ の中央銀行が CBDC を研究、30+ が 実証 段階に入る ^[extracted]
- リテール CBDC を正式に発行したのは 4 か国のみ（中国 / ブラジル / ナイジェリア / ジャマイカ） ^[extracted]
- すべての G10 中央銀行が **二層または多層アーキテクチャ** を選択、直接 CBDC を採用したものはない ^[extracted]
- ブラジル DREX は token-based 多層パラダイムにおける最も完成度の高い商業的実験 ^[extracted]
- 中国 e-CNY は二層アーキテクチャの最大規模実証ケース（2025 年累計 ¥7 兆元超） ^[extracted]
- デジタル・ユーロの保有上限 €3000-4000（銀行預金流出を回避） ^[extracted]

## 仕組み

3 種類のアーキテクチャの中核的差異は **アカウントの階層** にある:

| 次元 | 二層 | 直接 | token-based 多層 |
|---|---|---|---|
| 中央銀行口座数 | 少（商業銀行向け） | 多（国民全員） | 中（商業銀行 + トークンプール向け） |
| 商業銀行の役割 | 完結（KYC + 配布） | 周縁化または消失 | トークン化預金発行体へと進化 |
| プライバシー | 商業銀行は見える、中央銀行は制限 | 中央銀行は完全に可視 | 暗号レイヤーで調整可能 |
| 技術 | アカウント中心 | アカウントまたはトークン | トークン + スマートコントラクト |
| クロスボーダー | 弱い | 極めて弱い | 強い（ホールセール CBDC との相互運用） |

**アーキテクチャ選択の政治的含意**: 直接 CBDC は商業銀行を周縁化する → 金融仲介の崩壊 → 中央銀行が信用配分を担う → 政治的に受け入れ不可能。**主要な中央銀行はすべて銀行預金基盤の保護を選択する**（二層または多層）。token-based 多層は新興の中間路線であり、商業銀行にトークン化預金を発行させることで仲介を保持しつつプログラマビリティを導入する — [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token のテーゼ]] のロジックと同型構造。

## 起源と発展

2014 中国 PBoC が e-CNY 研究を開始（グローバル最古の大規模 CBDC プロジェクト）。2017-2019 BIS / IMF などの多国間組織が「中央銀行デジタル通貨」概念枠組みを提唱。2020 ECB がデジタル・ユーロ報告書を発表し、「二層 / 直接」二分法を確立。2022.04 中国 e-CNY 試験運用が 23 都市に拡大、二層アーキテクチャが大規模に検証された。2023-2024 ブラジル DREX（Hyperledger Besu ベース） + デジタル・ユーロ立法スタート → token-based 多層パラダイムが成熟。2025-2026 G10 中央銀行は [[fintech/bis-project-agora-overview|Agorá]] を通じて wholesale CBDC を協調、リテール CBDC は各国独自に推進 → 「アーキテクチャ選択が主権空間を決定する」が中央銀行間のコンセンサスに。日本側 DC-JPY 試験運用は [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]] 参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム · e-CNY / DREX / デジタル・ユーロ]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## 出典

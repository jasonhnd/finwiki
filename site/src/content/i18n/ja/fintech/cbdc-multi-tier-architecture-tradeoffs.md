---
source: fintech/cbdc-multi-tier-architecture-tradeoffs
source_hash: 67c33bd5b5347093
lang: ja
status: machine
fidelity: ok
title: "CBDC アーキテクチャ選択の 4  大トレードオフ"
translated_at: 2026-06-02T13:21:55.047Z
---
# CBDC アーキテクチャ選択の 4  大トレードオフ

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる。隣接文脈として [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界として [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> 中央銀行が CBDC アーキテクチャを選択する際、4 つの核心的トレードオフに直面する: **金融仲介の存続 vs 中央銀行ダイレクト**（商業銀行の運命を決定）、**通貨主権 vs クロスボーダー相互運用性**（ホールセール CBDC コリドーとの関係を決定）、**プライバシー vs マネロン対策**（中央銀行の可視性を決定）、**イノベーション余地 vs システム安定**（プログラマビリティを決定）。すべての現役 CBDC 設計はこの 4 トレードオフの異なる組み合わせ。

## 主要事実

- 直接 CBDC は商業銀行を周縁化 → 政治的に受け入れ不可能 → G10 中央銀行で採用なし ^[extracted]
- 二層アーキテクチャは域内に強い、クロスボーダーに弱い → ホールセール CBDC コリドー（mBridge / Agorá）が必要 ^[extracted]
- token-based 多層は自然にクロスボーダー親和的だが、主権通貨階層を脅かす ^[extracted]
- 直接 CBDC は中央銀行に最強の AML 能力を与えるが、プライバシーはゼロ ^[extracted]
- 二層は商業銀行が KYC を担い、中央銀行は直接ユーザーを見ない ^[extracted]
- token-based 多層は暗号レイヤーでプライバシー調整可能だが、コンプライアンス・コスト高 ^[extracted]
- スマートコントラクトのプログラマビリティは token-based 多層の主要なイノベーション余地 ^[extracted]

## 仕組み / どのように機能するか

**1. 金融仲介の存続 vs 中央銀行ダイレクト**: 直接 CBDC は商業銀行を周縁化 → 金融仲介の崩壊 → 中央銀行が信用配分を担うよう強いられる（企業に直接貸付） → 政治的に受け入れ不可能。主要な中央銀行はすべて銀行預金基盤を保護（二層または多層）。これが G10 中央銀行で直接 CBDC を採用したものがいない理由。

**2. 通貨主権 vs クロスボーダー相互運用性**: 二層アーキテクチャは域内に強い（完全な中央銀行 → 商業銀行 → ユーザーのコントロール連鎖）が、クロスボーダーには弱い（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] などホールセール CBDC コリドーを借りる必要）。token-based 多層は自然にクロスボーダー親和的（トークン規格の相互運用）だが、主権通貨階層を脅かす（自国のトークン化預金が海外で流通する可能性）。これが e-CNY が二層 + mBridge クロスボーダー補完を選択するロジック。

**3. プライバシー vs マネロン対策**: 直接 CBDC = 中央銀行が完全に可視、AML 最強だがプライバシーはゼロ（欧州の反対最大）。二層 = 商業銀行が KYC を担い、中央銀行は直接ユーザーを見ない、現行の金融プライバシー規範に整合。token-based 多層 = 暗号レイヤー（ゼロ知識証明 / 閾値署名）でプライバシー調整可能だが、コンプライアンス・コストが高く、規制側の学習曲線が急。

**4. イノベーション余地 vs システム安定**: token-based 多層（スマートコントラクト）はイノベーション余地が最大だが、新世代のインフラ（EVM / トークン規格 / チェーン・ネイティブ開発スタック）が必要。二層は最も安定だがイノベーションの天井が低い（アカウント・システムは本質的にプログラマブルではない）。e-CNY が二層を選択したのは安定優先、DREX が token-based を選択したのはイノベーション優先。

## 起源と変遷

2017-2020 BIS / IMF の初期 CBDC 枠組みはほぼ「直接 vs 二層」の二分法のみを議論、イノベーション次元は浮上せず。2020-2022 Hyperledger / Corda などエンタープライズ DLT が PoC 段階でプログラマビリティを検証 → 「token-based 多層」が第 3 の選択肢として浮上。2022-2024 各中央銀行は自身の政治 / 規制選好に基づいてトレードオフ: 中国は安定優先（e-CNY 二層）、ブラジルはイノベーション優先（DREX token-based）、ユーロ圏は仲介保護とプログラマビリティのあいだで妥協（デジタル・ユーロのハイブリッド + 保有上限）。2026+ 三円 MRA（欧 [[fintech/mica-overview|MiCA]] + 米 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]]） + ホールセール CBDC コリドー（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] + [[fintech/bis-project-agora-overview|Agorá]]）がアーキテクチャ選択余地をさらに制約する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト · 通貨保護主義]]
<!-- /wiki-links:managed -->

## 出典

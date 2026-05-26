---
title: CBDC アーキテクチャ選択 4 大トレードオフ · 仲介 / 主権 / プライバシー / イノベーション
aliases: [cbdc-multi-tier-architecture-tradeoffs, CBDC architecture tradeoffs, CBDC 4 トレードオフ]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, cbdc, monetary-architecture, tradeoffs, financial-disintermediation]
sources:
  - https://www.bis.org/publ/othp33.htm
  - https://www.bis.org/publ/arpdf/ar2021e3.htm
  - https://www.federalreserve.gov/publications/money-and-payments-discussion-paper.htm
  - https://www.ecb.europa.eu/paym/digital_euro/html/index.en.html
  - https://www.imf.org/en/Topics/fintech/central-bank-digital-currency
status: candidate
---

# CBDC アーキテクチャ選択 4 大トレードオフ


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 中央銀行が CBDC アーキテクチャを選択する際、4 つの核心的トレードオフに直面する: **金融仲介の存続 vs 中央銀行ダイレクト**（商業銀行の運命を決定）、**通貨主権 vs クロスボーダー相互運用性**（ホールセール CBDC コリドーとの関係を決定）、**プライバシー vs マネロン対策**（中央銀行の可視性を決定）、**イノベーション余地 vs システム安定**（プログラマビリティを決定）。すべての現役 CBDC 設計はこの 4 トレードオフの異なる組み合わせ。

## Key facts

- 直接 CBDC は商業銀行を周縁化 → 政治的に受け入れ不可能 → G10 中央銀行で採用なし ^[extracted]
- 二層アーキテクチャは域内に強い、クロスボーダーに弱い → ホールセール CBDC コリドー（mBridge / Agorá）が必要 ^[extracted]
- token-based 多層は自然にクロスボーダー親和的だが、主権通貨階層を脅かす ^[extracted]
- 直接 CBDC は中央銀行に最強の AML 能力を与えるが、プライバシーはゼロ ^[extracted]
- 二層は商業銀行が KYC を担い、中央銀行は直接ユーザーを見ない ^[extracted]
- token-based 多層は暗号レイヤーでプライバシー調整可能だが、コンプライアンス・コスト高 ^[extracted]
- スマートコントラクトのプログラマビリティは token-based 多層の主要なイノベーション余地 ^[extracted]

## Mechanism / How it works

**1. 金融仲介の存続 vs 中央銀行ダイレクト**: 直接 CBDC は商業銀行を周縁化 → 金融仲介の崩壊 → 中央銀行が信用配分を担うよう強いられる（企業に直接貸付） → 政治的に受け入れ不可能。主要な中央銀行はすべて銀行預金基盤を保護（二層または多層）。これが G10 中央銀行で直接 CBDC を採用したものがいない理由。

**2. 通貨主権 vs クロスボーダー相互運用性**: 二層アーキテクチャは域内に強い（完全な中央銀行 → 商業銀行 → ユーザーのコントロール連鎖）が、クロスボーダーには弱い（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] などホールセール CBDC コリドーを借りる必要）。token-based 多層は自然にクロスボーダー親和的（トークン規格の相互運用）だが、主権通貨階層を脅かす（自国のトークン化預金が海外で流通する可能性）。これが e-CNY が二層 + mBridge クロスボーダー補完を選択するロジック。

**3. プライバシー vs マネロン対策**: 直接 CBDC = 中央銀行が完全に可視、AML 最強だがプライバシーはゼロ（欧州の反対最大）。二層 = 商業銀行が KYC を担い、中央銀行は直接ユーザーを見ない、現行の金融プライバシー規範に整合。token-based 多層 = 暗号レイヤー（ゼロ知識証明 / 閾値署名）でプライバシー調整可能だが、コンプライアンス・コストが高く、規制側の学習曲線が急。

**4. イノベーション余地 vs システム安定**: token-based 多層（スマートコントラクト）はイノベーション余地が最大だが、新世代のインフラ（EVM / トークン規格 / チェーン・ネイティブ開発スタック）が必要。二層は最も安定だがイノベーションの天井が低い（アカウント・システムは本質的にプログラマブルではない）。e-CNY が二層を選択したのは安定優先、DREX が token-based を選択したのはイノベーション優先。

## Origin & evolution

2017-2020 BIS / IMF の初期 CBDC 枠組みはほぼ「直接 vs 二層」の二分法のみを議論、イノベーション次元は浮上せず。2020-2022 Hyperledger / Corda などエンタープライズ DLT が PoC 段階でプログラマビリティを検証 → 「token-based 多層」が第 3 の選択肢として浮上。2022-2024 各中央銀行は自身の政治 / 規制選好に基づいてトレードオフ: 中国は安定優先（e-CNY 二層）、ブラジルはイノベーション優先（DREX token-based）、ユーロ圏は仲介保護とプログラマビリティのあいだで妥協（デジタル・ユーロのハイブリッド + 保有上限）。2026+ 三円 MRA（欧 [[fintech/mica-overview|MiCA]] + 米 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]]） + ホールセール CBDC コリドー（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] + [[fintech/bis-project-agora-overview|Agorá]]）がアーキテクチャ選択余地をさらに制約する。

## Counterpoints

- 「金融仲介の存続」は商業銀行に代替不可能な信用配分能力があると仮定するが、中央銀行直接 QE 時代にはこの仮定は部分的に揺らいでいる
- 「中央銀行ダイレクト」は小国（ナイジェリア eNaira）で実際に試行され失敗したが、完全に不可能とは言えない
- プライバシーのトレードオフはしばしば「中央銀行が見える vs 見えない」に単純化され、多 stakeholder（税務 / 規制 / 司法）の異なる要請を見落とす
- 「イノベーション余地」は実際に展開されるスマートコントラクト・エコシステムに依存、DREX の実際のプログラマビリティ利用率は期待値に達せず

## Open questions

- 中央集権的 AML（直接 CBDC）はテロ資金供与圧力下で一部国に再受け入れされるか?
- token-based 多層アーキテクチャ下で、トークン化預金発行体（商業銀行）はクロスボーダー対立時に主権要請にどう応答するか?
- スマートコントラクト CBDC（DREX 等）のプログラム化金融政策（自動 QE / マイナス金利）は登場するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト · 通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources


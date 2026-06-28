---
source: fintech/frax-frxusd-defi-stablecoin
source_hash: 90722eb01b8c51f9
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Frax frxUSD · DeFi ネイティブ・ステーブルコインの「半コンプライアンス化」ルート"
translated_at: 2026-06-26T08:29:33.003Z
---
# Frax frxUSD · DeFi ネイティブ・ステーブルコインの「半コンプライアンス化」ルート

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> Frax Finance v3 アップグレード (2024-Q2) で frxUSD が旧 FRAX を代替、「**100% UST 準備金 + DAO ガバナンス**」の二軌を採用 —— 前者は §501 コンプライアンス準備金要件を満たし、後者は DeFi ネイティブの分散型ガバナンスを維持する。frxUSD 時価総額 **$1.2B** (2026-Q1) は Sky USDS より遥かに小さいが、sfrxUSD (ステーキング版) の **7-9% APY** は DeFi ネイティブ SC で最高。**2026-Q2 frxUSD は BlackRock BUIDL ~$200M を接続**、初めて DeFi プロトコルが BUIDL を直接保有 → §501 時代における「半コンプライアンス化」の代表方案。

## 主要事実

- frxUSD 時価総額 **$1.2B** (2026-Q1) · sfrxUSD APY **7-9%** (SOFR + Frax 内部収益に追従) ^[extracted]
- RWA 担保 ~$1.0B (うち BUIDL ~$200M · 2026-Q2 接続) ^[extracted]
- Fraxtal L2 TVL **$450M** (Frax 自前 L2 · Optimism Superchain メンバー · 2024-02 ローンチ) ^[extracted]
- FXS トークン時価総額 ~$300M · veFXS ロック ~6500 万 FXS (流通の 45%) ^[extracted]
- Frax プロトコル年間収益 ~**$45M** (2025 推定) ^[extracted]
- Frax Ether (frxETH) 時価総額 ~$700M · FPI (Frax CPI アンカー) 時価総額 ~$80M ^[extracted]
- v3 アップグレード 3 つの手:frxUSD で FRAX を置換 / sfrxUSD ステーキング / Fraxtal L2 ^[extracted]

## 仕組み

Frax は中道路線を行く:**準備金コンプライアンス ([[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + UST) + ガバナンス分散化 (veFXS DAO)**。Circle/Paxos の完全コンプライアンス (分散ジーンを失う) とは異なり、Sky USDS の完全分散化 (コンプライアンスチャネルを失う) とも異なる。Sam Kazemian は 2024-09 に「frxUSD は ハイブリッド・ルートを行く」と公式表明。メカニズム:ユーザーが frxUSD を預ける → sfrxUSD を受取 → 自動 7-9% yield (SOFR + Frax 内部 yield 戦略 + BUIDL 直接保有収益から)。Fraxtal L2 = frxUSD を ネイティブ gas 資産として利用、**内部循環で流動性をロック** —— ユーザーは Fraxtal 上の送金で ETH ではなく frxUSD を gas として消費し、Frax プロトコルが全 gas 経済を取り込む、[[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークン戦略のトリレンマ]] における「自チェーン内取り込み」極と一致。[[fintech/sky-usds-decentralized-stablecoin|Sky USDS]] とミラーを形成:Sky は Subdao 分散規制を行き、Frax は準備金で BUIDL に寄せる —— 両者は §501 時代の DeFi SC における 2 つの生存戦略を代表する。

## 起源と発展

Frax の旧 FRAX は 2020 ローンチ (部分準備金 + アルゴリズム安定通貨 hybrid)。2022-2023 UST/Luna 崩壊後にアルゴリズム SC への市場警戒が高まったことを受け、Frax はアルゴリズム部分から能動的に撤退。**2024-Q2 v3 アップグレード**:frxUSD で FRAX を置換、準備金を USDC + アルゴリズムから 100% UST + RWA に移行。**2024-02 Fraxtal L2 ローンチ** (旧 Frax Chain · OP Superchain メンバー)。2025 sfrxUSD 7-9% APY が同類の分散型 SC を凌駕。**2026-Q2 frxUSD ボールト が BUIDL ~$200M を直接保有** = 初めて DeFi プロトコルが BUIDL を直接保有 (RWA 経由の間接ボールト ではない)。これにより frxUSD は「半コンプライアンス・ホワイト圏」の端まで進んだ —— **準備金 100% はホワイト圏資産にあるが、発行体は veFXS DAO**、[[fintech/genius-act-501-denylist-mandate|GENIUS §501]] グレーコンプライアンス。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC 発行会社採用マトリクス]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 加密文化の分離]]
<!-- /wiki-links:managed -->

## 出典

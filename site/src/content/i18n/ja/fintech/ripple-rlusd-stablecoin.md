---
source: fintech/ripple-rlusd-stablecoin
source_hash: 5d88b253b5010392
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Ripple RLUSD · 銀行級コンプライアンス優先ステーブルコイン · XRPL + Ethereum 2 チェーン"
translated_at: 2026-06-26T08:29:01.757Z
---
# Ripple RLUSD · 銀行級コンプライアンス優先ステーブルコイン · XRPL + Ethereum 2 チェーン

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> Ripple RLUSD は 2024-12-17 に XRPL + Ethereum **2 チェーン同時ローンチ**、Standard カストディ（Ripple 子会社、NY DFS 信託ライセンス）が発行、**銀行級コンプライアンス優先**の位置付け。2026-05 時点時価総額 **$700M+**、2027 年に $3B 突破が目標。RLUSD は Ripple が「クロスボーダー決済ソフトウェア」から「エンドツーエンド清算スタック」（RLUSD + ODL + XRPL DEX + RippleNet）へと完成させる鍵となる製品 —— GENIUS Act フレームワーク下では「コンプライアンス優先 / 成長は二次」の典型例である。

## 主要事実

- 時価総額 **$700M+**（2026-05）· 2 チェーン同時ローンチ 2024-12-17 ^[extracted]
- 発行体 Standard カストディ（Ripple 子会社、2024-04 取得の NY DFS 信託ライセンス、元 Anchorage チーム）^[extracted]
- 準備金 100% UST（1-3M）+ 現金 · BDO USA による月次 attestation ^[extracted]
- 主要取引所 Bitstamp / Bitso / Independent Reserve / Uphold ^[extracted]
- XRPL との関係：ネイティブ資産 · DEX ネイティブサポート · IOU モデル ^[extracted]
- ODL との関係：2025-Q2 より一部 ODL 回廊で RLUSD が XRP ブリッジを代替 ^[extracted]
- 2026-Q1 Ripple が OCC 国法銀行免許 を申請（進捗未定）^[extracted]

## 仕組み

RLUSD と USDC/USDT のコア差別化は、**DeFi 流動性深度を追求しない**（USDC の強み）、**グレーゾーン流通規模を追求しない**（USDT の強み）一方で、**機関向けクロスボーダー決済清算に専念**する点である —— Ripple ODL（2018 開始）+ XRPL ネイティブ DEX（2018）+ RippleNet 銀行ネットワーク（200+ 行）を重ね合わせる。これにより Ripple はソフトウェア層 → 流動性層 → ステーブルコイン層 → 完全クローズドループという進化経路を完成させる：クロスボーダー銀行が RippleNet メッセージング層を使用 → ODL チャネルで RLUSD が XRP ブリッジを代替 → XRPL 上で sub-3-秒決済 → 受取行が現地通貨に償還。清算スタック全体が**USDC + SWIFT** より緊密で（発行体 + ブリッジ資産 + DEX + 銀行メッセージングがすべて Ripple 自社系列）、[[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] と同一の戦場における異なる打ち方となる。

## 起源と発展

2012-2018 ソフトウェア層（RippleNet · 200+ 行）。2018 以降流動性層（ODL · XRP をブリッジに）。2020-2023 SEC との訴訟（XRP は証券か）。2023-07 裁判所判決により XRP は公開取引所では証券に該当せず。2024-04 Standard カストディ（NY DFS 信託ライセンス）を買収。**2024-12-17 RLUSD を XRPL + Ethereum で同時ローンチ**。2025-Q3 RLUSD が Bitstamp（Robinhood に買収された取引所）に参入、リテール接点が大幅拡大。2026-Q1 Ripple が OCC 国法銀行免許 を申請（[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC 信託銀行連邦アービトラージ]] 経路を辿る）。[[fintech/protocol-hedge-strategy-stripe-pattern|Stripe Tempo プロトコル対冲戦法]] / Coinbase Arc とミラー的な三脚を形成：**Ripple = 「クロスボーダーコンプライアンス清算」/ Stripe = 「EC 決済」/ Coinbase = 「DeFi 流動性」**。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/cross-border-sc-via-swift-api|ステーブルコインクロスボーダー via SWIFT API]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA フレームワーク]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコインクロスボーダー B2B 成長]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号資産ネットワーク中立]]
<!-- /wiki-links:managed -->

## 出典

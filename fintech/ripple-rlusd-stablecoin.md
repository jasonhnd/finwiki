---
title: Ripple RLUSD · 銀行級コンプライアンス優先ステーブルコイン · XRPL + Ethereum 2 チェーン
aliases: [ripple-rlusd-stablecoin, RLUSD, Ripple USD]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, stablecoin, ripple, rlusd, xrpl, cross-border, compliance-first]
sources:
  - https://ripple.com/stablecoin/
  - https://ripple.com/insights/
  - https://www.dfs.ny.gov/industry_guidance/industry_letters/il20241210_ripple_usd
  - https://xrpl.org/
  - https://ripple.com/press-releases/
status: candidate
---

# Ripple RLUSD · 銀行級コンプライアンス優先ステーブルコイン · XRPL + Ethereum 2 チェーン


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Ripple RLUSD は 2024-12-17 に XRPL + Ethereum **2 チェーン同時ローンチ**、Standard Custody（Ripple 子会社、NY DFS 信託ライセンス）が発行、**銀行級コンプライアンス優先**の位置付け。2026-05 時点 MCap **$700M+**、2027 年に $3B 突破が目標。RLUSD は Ripple が「クロスボーダー決済ソフトウェア」から「エンドツーエンド清算スタック」（RLUSD + ODL + XRPL DEX + RippleNet）へと完成させる鍵となる製品 —— GENIUS Act フレームワーク下では「コンプライアンス優先 / 成長は二次」の典型例である。

## Key facts

- MCap **$700M+**（2026-05）· 2 チェーン同時ローンチ 2024-12-17 ^[extracted]
- 発行体 Standard Custody（Ripple 子会社、2024-04 取得の NY DFS Trust ライセンス、元 Anchorage チーム）^[extracted]
- 準備金 100% UST（1-3M）+ 現金 · BDO USA による月次 attestation ^[extracted]
- 主要取引所 Bitstamp / Bitso / Independent Reserve / Uphold ^[extracted]
- XRPL との関係：native asset · DEX ネイティブサポート · IOU モデル ^[extracted]
- ODL との関係：2025-Q2 より一部 ODL 回廊で RLUSD が XRP ブリッジを代替 ^[extracted]
- 2026-Q1 Ripple が OCC National Bank Charter を申請（進捗未定）^[extracted]

## Mechanism / How it works

RLUSD と USDC/USDT のコア差別化は、**DeFi 流動性深度を追求しない**（USDC の強み）、**グレーゾーン流通規模を追求しない**（USDT の強み）一方で、**機関向けクロスボーダー決済清算に専念**する点である —— Ripple ODL（2018 開始）+ XRPL ネイティブ DEX（2018）+ RippleNet 銀行ネットワーク（200+ 行）を重ね合わせる。これにより Ripple はソフトウェア層 → 流動性層 → ステーブルコイン層 → 完全クローズドループという進化経路を完成させる：クロスボーダー銀行が RippleNet メッセージング層を使用 → ODL チャネルで RLUSD が XRP ブリッジを代替 → XRPL 上で sub-3-second 決済 → 受取行が現地通貨に償還。清算スタック全体が**USDC + SWIFT** より緊密で（発行体 + ブリッジ資産 + DEX + 銀行メッセージングがすべて Ripple 自社系列）、[[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] と同一の戦場における異なる打ち方となる。

## Origin & evolution

2012-2018 ソフトウェア層（RippleNet · 200+ 行）。2018 以降 流動性層（ODL · XRP をブリッジに）。2020-2023 SEC との訴訟（XRP は証券か）。2023-07 裁判所判決により XRP は公開取引所では証券に該当せず。2024-04 Standard Custody（NY DFS Trust ライセンス）を買収。**2024-12-17 RLUSD を XRPL + Ethereum で同時ローンチ**。2025-Q3 RLUSD が Bitstamp（Robinhood に買収された取引所）に参入、リテール接点が大幅拡大。2026-Q1 Ripple が OCC National Bank Charter を申請（[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC 信託銀行連邦アービトラージ]] 経路を辿る）。[[fintech/protocol-hedge-strategy-stripe-pattern|Stripe Tempo プロトコル対冲戦法]] / Coinbase Arc とミラー的な三脚を形成：**Ripple = 「クロスボーダーコンプライアンス清算」/ Stripe = 「EC 決済」/ Coinbase = 「DeFi 流動性」**。

## Counterpoints

RLUSD $700M は USDC / USDT より依然遥かに小さく、ODL 回廊数の成長も 2024-2025 で停滞している（主因は米国の輸出規制 + 一部新興市場の規制摩擦）。「コンプライアンス優先」の位置付けにより、RLUSD は DeFi 統合深度では**永続的に USDC に劣後する**。機関クロスボーダー清算市場は SWIFT API + マルチ SC アービトラージモデルにより分流され、RLUSD が独占することは困難。XRPL DEX の流動性は相対的に薄く、償還経路は Bitstamp 等の中央集権的場所に依存。Ripple の OCC National Bank Charter 申請が却下されれば、RLUSD は「米国コンプライアンス昇格」の経路を失う。

## Open questions

Ripple の OCC National Bank Charter はいつ承認 / 却下されるか？RLUSD が XRP ブリッジを代替する ODL 回廊の比率は 2027 年に 50% を超えられるか？RLUSD は EU MiCA フレームワーク下で EMT/ART 資格を取得し、三円白圈の完全カバーを実現できるか？

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/cross-border-sc-via-swift-api|ステーブルコインクロスボーダー via SWIFT API]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA フレームワーク]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコインクロスボーダー B2B 成長]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号資産ネットワーク中立]]
<!-- /wiki-links:managed -->

## Sources


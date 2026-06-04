---
title: 為替 onchain 化はステーブルコイン領域の「ラスボス」 — プライムブローカー消失と Herstatt Risk 解消
aliases: [fx-onchain, stablecoin-final-boss, herstatt-risk-elimination]
domain: fintech
kind: knowledge
topic: fx-onchain-as-stablecoin-final-boss
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-12
confidence: possible
evidence_count: 3
challenges: 0
status: confirmed
tags: [fintech, stablecoin, fx, settlement-risk]
sources:
  - "BIS / CPMI public materials on foreign-exchange settlement risk and payment-versus-payment."
  - "Public CLS and central-bank materials on FX settlement and Herstatt risk."
  - "Public stablecoin / tokenized-deposit disclosures related to cross-border settlement."
---

# 為替 onchain 化はステーブルコイン領域の「ラスボス」 — プライムブローカー消失と Herstatt Risk 解消


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 円ステーブルコイン × ドルステーブルコインの 24/365 即時決済が実現すれば、(1) FX 市場のプライムブローカー層が機能不要化し、(2) 時差決済リスク（Herstatt Risk）が消滅する。これがステーブルコイン業界全体での最大の上場利益であり、機関投資家市場における「最終的に向かう先（ラスボス）」。

## Conclusion

機関決済における FX onchain 化のメリットは三つ:

1. **プライムブローカー層の消失** — 現状、[[fintech/jpmorgan-jpmd-coin|JPM]]/ゴールドマン/モルスタ/[[megabanks/mufg|三菱]] と複数行で為替決済する機関投資家は、プライムブローカーに束ねを依頼してコスト払い。SC 直接決済ならこの中間層が不要
2. **Herstatt Risk の消滅** — 円は日銀、ドルは Fed で別々に決済され、時差で 12-14 時間ギャップ。この間に決済相手が倒産すると片側支払い済の損失発生（1974 Continental Illinois Bank 倒産が歴史的事例）。24/365 同時決済なら時差ゼロ（クロスチェイン PvP 設計は [[systems/cross-chain-five-pole-comparison-matrix|跨链五極対比マトリクス]] を参照）
3. **資本効率改善** — 銀行は決済リスク分の資本を積む義務があり、決済リスクが消えれば資本を別用途に解放可能 — 経営効率に直接効く

## Reasoning

- 「ラスボス」と表現される構造的な最終課題
- 機関投資家市場の最大の use case であり、最大の bottleneck でもある
- ETF 流動性決済（数十億規模）は「クリーンなユースケース」だがスケールしない、本命は FX
- BIS Herstatt Risk は 1974 年 Bank Herstatt 倒産事例で命名された業界用語、解消手段は決済サイクル短縮しかなかった
- ブロックチェーンによる即時決済が「決済時差そのものを消す」という質的飛躍

## Applicable When

- 機関投資家向けステーブルコイン pitch の長期 vision を設計するとき
- 「ステーブルコインの上場利益はどこか？」議論で短期 use case にとどまらず本質を語るとき
- 機関 B2B SC 戦略（[[fintech/jp-stablecoin-progmat|Project Pax / Progmat]] 等）を組み立てるとき
- 規制当局向け説明で「銀行発行 SC の社会的価値」を論証するとき
- 既存 FX 市場の非効率性を root cause で語るとき

## Source

- 歴史的事実: 1974 Continental Illinois Bank 倒産 → Herstatt Risk の業界呼称定着
- BIS Herstatt Risk 公式定義（公開文献）
- 整合: [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]] B2B FX corridor 議論

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンス分離]]
- [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]]
<!-- /wiki-links:managed -->

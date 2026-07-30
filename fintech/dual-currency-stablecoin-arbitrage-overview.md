---
title: 二通貨ステーブルコイン交換 · オンチェーン FX の実行経路と制約
aliases: [dual currency stablecoin arbitrage overview, USDC EURC JPYC FX, on-chain fx triangular]
domain: fintech
created: 2026-05-18
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-09-22
confidence: likely
tags: [fintech, fx, stablecoin, usdc, eurc, jpyc, cross-border, interchange]
sources:
  - https://www.circle.com/en/usdc
  - https://www.circle.com/en/eurc
  - https://developers.circle.com/circle-mint
  - https://developers.circle.com/circle-mint/supported-chains-and-currencies
  - https://jpyc.jp/
  - https://www.congress.gov/bill/119th-congress/senate-bill/394
  - https://www.bis.org/cpmi/publ/d220.htm
status: active
---

# 二通貨ステーブルコイン交換 · オンチェーン FX の実行経路と制約

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> USDC・EURC・JPYC の交換は、複数の発行体、法定通貨口座、取引所または DEX、KYC/AML 管理をまたぐ。Circle Mint は適格な機関顧客に USDC / EURC の発行・償還と通貨交換機能を提供するが、JPYC は別発行体・別アクセス経路であり、三角取引の流動性や裁定利益を保証しない。GENIUS Act も、個別の交換を一律に「合法な FX」と認定するものではない。

## Key facts

- Circle Mint は適格な機関顧客向けで、USDC と EURC の 1:1 発行・償還および通貨交換を提供する。個人向けサービスではない。
- USDC / EURC の対応チェーンは Circle が一覧で管理する。JPYC の対応チェーン、償還条件、取扱事業者は JPYC の公開情報で別途確認する必要がある。
- DEX のスリッページ、ガス、取引手数料、法定通貨 FX、入出金時間を合算しなければ、従来型送金とのコスト比較はできない。
- 2026-05 時点の公開一次資料から、USDC–EURC–JPYC の常設三角プールや恒常的な裁定幅は確認できない。

## Mechanism / How it works

**実行候補経路**: USDC ↔ EURC は Circle Mint の適格性・対応地域・FX 見積りに従う。[[payment-firms/jpyc|JPYC]] を含むレッグは、JPYC の発行・償還条件と実際の取引所 / DEX 板を別に確認する。

下表は取引手順の分析用チェックリストであり、実在する一つのプールや固定コストを示すものではない。根拠は [Circle Mint](https://developers.circle.com/circle-mint)、[対応通貨・チェーン一覧](https://developers.circle.com/circle-mint/supported-chains-and-currencies)、[JPYC 公式情報](https://jpyc.jp/)。

| ステップ | 操作候補 | 実行前に確認するコスト / 制約 |
|---|---|---|
| 1 | USDC と EURC の交換 | Circle Mint の利用資格、提示 FX レート、銀行入出金費用、対応地域 |
| 2 | EURC と JPYC の交換 | 実在する取引会場、板の厚さ、スリッページ、ガス、相手方リスク |
| 3 | JPYC と USDC の交換 | JPYC の発行・償還経路、取引所手数料、送金・決済時間 |
| 全体 | クロスカレンシー取引 | 全レッグの同時約定可能性、価格変動、KYC/AML、税務・各国 FX 規制 |

したがって、比較すべきなのは「オンチェーン対 SWIFT」という抽象的な二択ではなく、同一金額・同一通貨ペア・同一利用者条件における全費用と最終着金時間である。

## Origin & evolution

USDC、EURC、JPYC はそれぞれ異なる法域・発行体・償還経路を持つ。MiCA、日本の改正資金決済法、米国の GENIUS Act は発行・仲介・準備資産などの枠組みを整えるが、複数通貨トークンの交換に適用される FX、送金、税務その他の義務を消去しない。公開一次資料で特定の市場稼働を確認できるまでは、三角取引は実装済み商品ではなく分析シナリオとして扱う。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|二通貨ステーブルコインの法的分析]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange モデル]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
<!-- /wiki-links:managed -->

## Sources

- Circle Mint — https://developers.circle.com/circle-mint
- Circle Mint supported chains and currencies — https://developers.circle.com/circle-mint/supported-chains-and-currencies
- JPYC — https://jpyc.jp/
- BIS CPMI, cross-border payments — https://www.bis.org/cpmi/publ/d220.htm

---
title: Tether (USDT) のビジネスモデル = ユーザー資金で短期米国債を買って金利を直接利益化、年間 1.5 兆円・40 人体制
aliases: [tether-business-model, usdt-economics]
domain: fintech
kind: knowledge
topic: tether-business-model-short-treasury-yield
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-12
confidence: possible
evidence_count: 3
challenges: 0
source: session
status: confirmed
tags: [fintech, stablecoin, business-model]
---

# Tether (USDT) のビジネスモデル = ユーザー資金で短期米国債を買って金利を直接利益化、年間 1.5 兆円・40 人体制

> [!info] TL;DR
> Tether (USDT 発行体) は、預かったユーザー資金を短期米国債で運用し、その金利をそのまま利益として計上することで、40 人体制で年間約 1.5 兆円の利益を稼ぐ。起源は BTC/ETH を担保化して USDT を発行するグレーゾーン的スタートだったが、結果オーライで規模化。ただし KYC レイヤー不一致で機関投資家市場には参入不可。

## Conclusion

| 項目 | 数値 / 仕組み |
|---|---|
| 体制人員 | ~40 人 |
| 年間利益 | ~1.5 兆円 |
| 利益源 | ユーザーが預けたドル相当資金 → 短期米国債運用 → 金利が直接利益 |
| 起源 | BTC/ETH 等の暗号資産を受領して USDT を発行（USD 直接受領ではない） |
| 副次運用 | 金、米国債、他 → 値上がりで追加収益 |
| 弱点 | パーミッションレス前提の KYC レイヤー → 機関投資家市場の決済水準と不一致、institutional には参入不可 |

## Reasoning

- 業界関係者の評価: 「結果オーライで儲かってる」「最初は詐欺みたいなビジネス」と評される起源
- ステーブルコイン市場における短期金利の「直接利益化」構造は、規制ステーブルコイン（USDC・JPYC・銀行発行預金トークン）も同様に持つが、Tether は規模 × KYC コスト最小化で利益率最大化
- 米国短期金利上昇期（2023-2025）の追い風で利益急増、日本円金利上昇が鈍い間は日本 SC 発行体には同等の利益構造を作れない
- 機関投資家市場には [[fintech/institutional-stablecoin-deposit-token-thesis|預金トークン論]] により構造的に入れず、リテール / 取引所内 / 海外送金が主用途

## Applicable When

- ステーブルコイン経済性を議論するとき（円建て SC 発行設計 / 商業決済設計）
- 「日本円 SC は儲かるのか？」議論 → 日本円短期金利が低い間は同じビジネスモデルは成立しない、SC 経済性は金利環境依存
- ユーザー資金の運用先設計議論 → 銀行発行 SC は「資金は預金、運用は銀行業務」と同一構造
- USDT を持ち込もうとする提案を分析する際 → 機関市場には入れない理由として活用

## Source

- 公開: Tether 公開財務（年間利益・運用構成）
- 公開: Tether 設立経緯（BTC/ETH 担保化スタート）
- 整合: [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 三層構造]] USDT 言及部分

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
<!-- /wiki-links:managed -->

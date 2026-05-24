---
title: ブロックチェーン業界は「オンチェーンファイナンス」と「クリプト」に DNA レベルで分離した
aliases: [onchain-vs-crypto, blockchain-bifurcation]
domain: fintech
kind: knowledge
topic: onchain-finance-vs-crypto-bifurcation
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-12
confidence: possible
evidence_count: 3
challenges: 0
status: confirmed
tags: [fintech, blockchain, stablecoin]
sources:
  - "https://docs.digitalasset.com/integrate/devnet/canton-network-overview/index.html"
  - "https://progmat.co.jp/about/"
  - "Public DTCC, Nasdaq, Broadridge, Circle, and institutional tokenization disclosures."
---

# ブロックチェーン業界は「オンチェーンファイナンス」と「クリプト」に DNA レベルで分離した


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 2024 年以降、ブロックチェーン技術は「クリプト（イデオロギー駆動・パーミッションレス・分散化）」と「オンチェーンファイナンス（純粋テクノロジー駆動・決済効率化）」に完全分離。同じ「ブロックチェーン」という単語でも、文脈次第で全く別物を指す。両者を同じ議論で扱うと話が噛み合わない。

## Conclusion

クリプトとオンチェーンファイナンスは「DNA が違う」。両者は **もう相容れない**。

| 観点 | クリプト | オンチェーンファイナンス |
|---|---|---|
| 駆動原理 | イデオロギー（permissionless, decentralization, finality） | 純粋テクノロジー（決済効率化） |
| リード企業 | Tether (USDT), Circle (USDC クリプト系) | Digital Asset (Canton Network), Circle (Arc Network 系統合) |
| 提携先 | 暗号資産交換業者 | DTCC・Nasdaq・Broadridge・三メガ・[[banking/minna-bank-baas-model|信託銀行群]] |
| KYC | パーミッションレス前提 | 機関投資家グレード KYC 必須 |
| 文化 | アンチ既存金融 | アンチクリプト（Canton 系は完全 anti-crypto 立ち上げ） |

## Reasoning

- 単一の「ブロックチェーン」議論は 2023 年以前のもの。2024-2025 で技術スタックも企業群も価値観も完全分岐
- クリプトの「みんな chain で誰でも触れる」は機関投資家決済とは構造的に両立しない（→ [[fintech/institutional-stablecoin-deposit-token-thesis|institutional-stablecoin-deposit-token-thesis]]）
- [[systems/canton-overview|Canton Network]] を運営する Digital Asset 社は「クリプトの使い方は間違っている」と明言して立ち上がっている

## Applicable When

- ブロックチェーン関連の戦略議論を始める前、相手がどちらの軌道で話しているか確認する必要があるとき
- USDT/USDC を機関投資家 use case に持ち込む議論が出たとき（参照: [[fintech/wall-street-crypto-network-neutrality|Wall Street × Crypto 中立軍火商]]）
- 新規 SC プロジェクトのターゲット市場を decompose するとき
- ステークホルダーへのプレゼンで「ブロックチェーン」という単語を使う前

## Source

- 整合: [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]] (Project Pax = institutional vs JPYC/USDC retail = 同じ分離軸)
- 整合: [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]] (B2B 軌道の独立性)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場のステーブルコイン = 預金トークン]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール用ステーブルコインの構造的二律背反]]
- [[fintech/fx-onchain-as-stablecoin-final-boss|為替 onchain 化 = ステーブルコイン領域のラスボス]]
<!-- /wiki-links:managed -->

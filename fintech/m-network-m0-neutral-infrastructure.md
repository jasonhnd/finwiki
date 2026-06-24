---
title: M^0 / M Network · 中立ステーブルコイン・インフラ · 「スイス銀行モデル」
aliases: [m-network-m0-neutral-infrastructure, M^0, M Network, M zero, neutral stablecoin infra]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [fintech, stablecoin-infra, m-network, m0, neutral-infra, blackrock, goldman, long-tail]
sources:
  - https://m0.org/
  - https://docs.m0.org/
  - https://www.m0.foundation/
  - https://github.com/m0-foundation
status: active
---

# M^0 / M Network · 中立ステーブルコイン・インフラ · 「スイス銀行モデル」

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> M^0(M Network)は自社ブランドのステーブルコインを発行せず、複数の issuer に対し**共有・標準化された準備金/鋳造/ガバナンス・インフラ**を提供する。「スイス銀行モデル」とのアナロジー:ブランド競争に巻き込まれず、中立的な金庫のみを提供する。投資家は BlackRock + Goldman + Bain Capital + Pantera、2025 H2 調達 **$40M+**。M^0 は §501 後ステーブルコイン業界における**階層論理**の中核サンプル:ブランド層(USDC / USDB / PYUSD)は競争を続け、インフラ層(M^0 / BUIDL / Bridge)は中立化し、**ロングテール・ステーブルコイン**市場の形成を加速させる。

## Key facts

- 調達 **$40M+**(2025 H2)· 投資家 BlackRock + Goldman + Bain Capital + Pantera ^[extracted]
- Token:$M(DAO ガバナンス)^[extracted]
- チェーン:Ethereum + Base + Arbitrum + Solana(予定)^[extracted]
- 準備金資産接続:BUIDL + UST + 現金 ^[extracted]
- スマートコントラクト監査:OpenZeppelin + Trail of Bits + Certora ^[extracted]
- Issuer 名簿(2026-05)~8 社(欧州 2 銀行 + 日本 1 Fintech + US 3 RWA プロトコル · 一部非公開)^[extracted]
- 総管理ステーブルコイン MCap ~**$300M**(2026-05 · 急成長)^[extracted]
- 共同創業者 Greg Di Prisco(ex-MakerDAO コア)+ Luca Prosperi ^[extracted]

## Mechanism / How it works

伝統モデル = issuer が準備金管理 + スマートコントラクト + 自社分配を同時に行う(Circle / Paxos / Tether は全て垂直統合)。**M^0 の階層中立モデル**:(1)**Infrastructure Layer** = M^0 が [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]]/UST/現金準備金を統一接続 + 統一スマートコントラクト(EVM 互換) + DAO による issuer 資格検証;(2)**Brand Layer** = 複数の issuer が M^0 インフラを共有しつつ、各自のブランドを保持(銀行 X の SC / Fintech Y の SC / クロスボーダー決済会社 Z の SC)。ステーブルコイン発行を望む機関 / Fintech / 銀行は**車輪を再発明する必要がなく** —— 直接 M^0 のコンプラ・テンプレート + 準備金接続 + スマートコントラクト監査 + DAO ガバナンスにプラグインし、数週間でコンプラ・ステーブルコインを稼働させられる。発行規模に対して bps で課金(BUIDL の 20bps 管理費に類似)、ブランド競争に巻き込まれない。[[fintech/wall-street-crypto-network-neutrality|ウォール街暗号ネットワーク中立]] と同一戦略ポジションを共有する。

## Origin & evolution

2024-10 M^0 v1 メインネット稼働。2025 H2 に **BlackRock + Goldman + Bain Capital + Pantera** $40M+ 調達完了 = トークン化 MMF 首位 + 一流投資銀行 + 一流 crypto VC の三方裏付けを同時取得。2026-Q1 Bridge(Stripe)と「インフラ連合」共同構築を議論(進捗不明)。**$M トークン設計は MakerDAO MKR に類似**:保有者が issuer 資格検証 + リスクパラメータ・ガバナンスに参加。Greg Di Prisco の MakerDAO 経歴が M^0 に DAO ガバナンス遺伝子を直接提供。**BlackRock × Goldman × M^0 の暗黙の閉ループ**:BlackRock が M^0 に投資 + BUIDL を M^0 デフォルト準備金として → 「BlackRock 準備金 + M^0 インフラ」の閉ループを形成;Goldman は M^0 に投資 + BlackRock と $1B 即時償還ファシリティを共同構築 → yield infrastructure に T+0 流動性を提供。両社は M^0 を通じて**ロングテール・ステーブルコイン・インフラ**を共同主導。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 採用マトリクス]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
<!-- /wiki-links:managed -->

## Sources

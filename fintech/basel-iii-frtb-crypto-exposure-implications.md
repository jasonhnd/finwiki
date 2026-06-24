---
title: Basel III FRTB 戦略的含意 · USDC の暗黙的な資本プレミアム + BUIDL の銀行チャネル
aliases: [basel-iii-frtb-implications, BCBS USDC moat, BUIDL bank channel]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [fintech, law, regulation, basel, bank, stablecoin, usdc, buidl, capital]
sources:
  - https://www.bis.org/bcbs/publ/d545.htm
  - https://www.bis.org/basel_framework/
  - https://www.circle.com/en/transparency
  - https://securitize.io/products/buidl
  - https://www.federalreserve.gov/supervisionreg/topics/cryptoasset.htm
status: active
---

# Basel III FRTB 戦略的含意 · USDC の暗黙的な資本プレミアム + BUIDL の銀行チャネル

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BCBS SCO60 の Group 1b vs Group 2 の資本差は、**銀行が USDT より USDC を保有する資本経済性** を決定する — USDC PPSI 後の銀行カストディコストは ~10% の capital backing で済むのに対し、USDT の Group 1b 資格は疑問視されており ~100% を要する。これが USDC のバリュエーション・プレミアムの hidden moat であり、BUIDL が $1B AUM を突破した銀行チャネルの法的根拠でもある。BCBS は三円 MRA における国際的な資本協調メカニズムである。

## Key facts

- USDC PPSI 後の Group 1b 資格見込み: 高（コンプライアンス設計が完全に整合） ^[likely]
- USDT の Group 1b 資格見込み: 低（reserve composition + transparency が不十分） ^[likely]
- BUIDL の Group 1a 資格見込み: 極めて高（短期国債を直接トークン化） ^[likely]
- BUIDL は 2024-Q4 に $1B AUM 突破 · 2026-05 時点 ~$3B AUM ^[extracted]

## Mechanism / How it works

**USDC vs USDT の資本ロジック**: 銀行が $1B USDC（Group 1b）を保有するには ~$100M の capital backing が必要、$1B USDT（Group 1b 資格疑問）の保有には ~$1B の capital backing が必要、このスプレッドこそが **銀行が USDT ではなく USDC を選ぶ資本経済性の根本要因**。これが USDC バリュエーション・プレミアムの hidden moat であり、Circle / Bridge / Anchorage / Coinbase Custody など「コンプライアンス・チャネル」の法的モート（堀）である。

**BUIDL ケース**: Group 1a（tokenized 短期国債）= 銀行が大規模に保有可能 → BUIDL の $1B AUM 突破（2024-Q4）+ 2026-05 ~$3B AUM 成長をトリガーした。銀行セクターとの間で「機関 SC オルタナティブ」チャネルが形成され、B2B 大口資金が USDT/USDC から BUIDL へ部分的に移行している。機関 SC vs deposit token の二項対立的分析は [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token のテーゼ]] 参照。

**cbBTC / WBTC**: 1,250% RW により銀行による保有が制限され、主たる利用シナリオは DeFi 担保（オンチェーン）となり、伝統的な銀行のバランスシートからは切り離されている。これが cbBTC が銀行カストディではなく Base 上の DeFi で主に使われる理由である。

## Origin & evolution

2022-12 の SCO60 公表後、各メガバンクのリスク部門は 2023 年から Group 資格の事前判定を開始 → 2024 年に BlackRock と BNY Mellon が連携して BUIDL を立ち上げ、Group 1a 資格成立に賭けた。Circle は 2024-Q4 から PPSI 開示を強化し、USDC が 2025-Q3 の BCBS 実装後に Group 1b を取得することを目標とした。Tether の反応は保守的で、2025 Q4 時点で依然として Group 1b 基準に達していない。HK FRTB consultation（2026-04）は SCO60 を直接マッピング（詳細は [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]）しており、アジアで初めて SC issuer 向けの国際資本フレームワークの実装事例となる。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概要]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token]]
<!-- /wiki-links:managed -->

## Sources

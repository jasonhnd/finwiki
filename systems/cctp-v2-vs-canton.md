---
title: CCTP V2 vs Canton · 公開チェーン路線 vs プライベートチェーン路線の根本対峙
aliases: [cctp-vs-canton, public-vs-private-stablecoin-rails, circle-vs-jpm]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [systems, bridge, dlt, stablecoin, cctp, canton, comparison]
sources:
  - https://developers.circle.com/stablecoins/docs/cctp-getting-started
  - https://www.canton.network/
status: active
---

# CCTP V2 vs Canton · 公開チェーン路線 vs プライベートチェーン路線の根本対峙

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM Kinexys は 2026-01 に CCTP V2 を統合しないと明言(`kinexys/technology.md §4.2`) ^[extracted]
- CCTP V2 は公開チェーン連合(Circle + Arc + 18 チェーン)の清算インフラ ^[extracted]
- Canton はプライベートチェーン連合(GS + BNY + JPM + DTCC)の清算インフラ ^[extracted]
- Arc チェーンは CCTP V2 のネイティブホーム、USDC は Arc の gas ^[extracted]

## Mechanism / How it works

2 経路の根本的差異:

| 次元 | CCTP V2(公開チェーン路線) | Canton(プライベートチェーン路線) |
|---|---|---|
| 流動性主権 | Circle 単独 mint/burn | 銀行連合内部での記帳 |
| クロスチェーン方式 | burn-and-mint(wrapped なし) | DAML のアプリケーション間アトミック呼び出し |
| プライバシー | 公開チェーン全公開 + denylist フィルタ | Sub-transaction privacy デフォルト |
| 価値の帰属 | Circle + 公開チェーンエコシステム | 銀行連合(GS/BNY/JPM/DTCC) |
| 監督モデル | Circle 自己コンプライアンス + §501 denylist | Regulator Node を内蔵 |
| ユーザータイプ | 暗号ネイティブ + 一部機関 | 純機関顧客 |

**JPM Kinexys の選択**:[[fintech/jpmorgan-jpmd-coin|JPMD]] は CCTP V2 を統合せず Canton に回帰 —— 理由は(1) Coinbase Custody 顧客の Base 上の holdings はチェーン解析で逆推定可能;(2) Canton は multi-party atomic settlement をネイティブサポート;(3) DAML は Solidity より金融契約に適する;(4) JPM が Canton 創設メンバーである戦略的整合性。

**Circle Arc の選択**:Arc チェーンは直接 CCTP V2 + USDC を gas として + §501 コンプライアンス物語に賭け、**Coinbase Base への利益配分($200M/年)を回避** —— これは Circle の脱 Coinbase 化の中核施策。

## Origin & evolution

2024-2025 年は機関 tokenization の路線選択の窓口期に入った。Circle 経路(CCTP V1 → V2 → Arc)と JPM 経路(JPMD on Base → JPMD on Canton)は並行進化したが方向は逆。2026-01 JPM が主戦場を Canton に移すと公表し、公開/プライベートチェーン分裂が正式に定型化した。

予想される今後 5 年:**公開チェーン路線**(CCTP V2 + Arc + Base + [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]])が暗号ネイティブ + DeFi + 越境リテールを主導;**プライベートチェーン路線**(Canton + JPMD + GS DAP + BNY LiquidityDirect)が機関 collateral management + 大口清算を主導。2 経路は §501 入榜地条項の制約下で、**「米ドルコンプライアンス圏」内部の並列体系を形成**する([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] 参照)。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Canton Network (Digital Asset) — https://www.canton.network/

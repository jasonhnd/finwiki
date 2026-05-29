---
title: Canton MMF 連合 · JPM + GS + BNY + DTCC による反 BlackRock 公開チェーン路線
aliases: [canton-mmf-coalition, gs-dap, bny-liquiditydirect, dtcc-project-ion]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, dlt, canton, mmf, tokenization, jpm, goldman, bny, dtcc]
sources:
  - https://www.canton.network/
status: candidate
---

# Canton MMF 連合 · JPM + GS + BNY + DTCC による反 BlackRock 公開チェーン路線


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM:JPMD(cash leg)+ MONY/JLTXX MMF を Canton にデプロイ ^[extracted]
- GS:GS DAP プラットフォーム + 5 つの MMF が入居(BlackRock / BNY Dreyfus / Federated / Fidelity / GSAM) ^[extracted]
- BNY:LiquidityDirect(custody + 顧客インタフェース)+ Dreyfus MMF ^[extracted]
- DTCC:Project Ion(Treasury tokenization on Canton)は 2026-10 にプラットフォーム全体ローンチ ^[extracted]
- BlackRock / Fidelity / Federated は GS DAP に受動的に入居する資産運用会社にすぎない ^[extracted]

## Mechanism / How it works

機関 tokenization の「2 経路」対峙:

| 経路 | 公開チェーン経路(BlackRock BUIDL) | プライベートチェーン経路(Canton 連合) |
|---|---|---|
| プラットフォーム | Ethereum + 7+ 公開チェーン | Canton Network |
| 入口 | Securitize(中立プラットフォーム) | BNY LiquidityDirect(銀行チャネル) |
| プライバシー | 公開 + Securitize KYC | Sub-transaction privacy |
| 価値の帰属 | 資産運用会社 + 公開チェーンエコシステム | 銀行(GS/BNY/JPM/DTCC) |
| 顧客タイプ | DeFi + 暗号ネイティブ + 機関の混合 | 純機関 + 伝統的 collateral mgmt |

**鍵となる洞察**:Canton 連合の設計により、「機関 MMF の全ライフサイクル」の各段階が連合メンバーに支配される —— cash([[fintech/jpmorgan-jpmd-coin|JPM JPMD]])+ 資産(GS DAP)+ custody(BNY)+ underlying Treasury(DTCC)。[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] は MMF 発行体として、Canton 上では GS DAP 上の MMF 選択肢の 1 つに過ぎず、**価値帰属も顧客関係も BlackRock の手中にない**。これは公開チェーン経路で BlackRock が顧客と直接接し、Securitize と利益分配する構図と鮮明に対比([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] と対照)。

## Origin & evolution

2024-2025 年は機関 tokenization の「路線選択」の窓口期に入った。BlackRock は BUIDL(2024-03 ローンチ)で公開チェーン経路の先発を確保し、2025 年中ごろに BUIDL TVL は $1B を突破。Canton 連合の反応:GS DAP は 2024-2025 年にかけて順次 MMF が入居 → BNY LiquidityDirect は 2025 年に銀行顧客向けに開放 → JPM Kinexys は 2026-01 に JPMD の主戦場を Canton へ移行すると発表 → DTCC Project Ion は 2026-10 にプラットフォーム全体ローンチ。

時系列的にこれは **対応策**である —— Canton 連合は BlackRock が公開チェーンの高地を占拠した後、逆方向に閉ループスタックを構築し、価値を銀行体系内に再ロックする戦略を取った。

## Counterpoints

Canton 連合の弱点:**リテール/DeFi 入口の欠如**。機関顧客の collateral management は規模は大きいがユーザーベースは小さい;BlackRock BUIDL は Securitize を経由して、少なくとも暗号ネイティブユーザーと将来潜在的な DeFi 統合シナリオに到達できる。長期的には、次世代金融の「ユーザーマインドシェア」を誰が押さえるかが鍵となる。さらに Canton 連合内部の利益配分は非公開で、JPM/GS/BNY/DTCC 間の調整コストは連合が謳う「シームレス」より高い可能性。

## Open questions

- DTCC Project Ion の 2026-10 ローンチ後、実際の Treasury tokenization 規模は?
- BlackRock は反撃するか —— 例えば Securitize 上で「BlackRock 自営 custody」をローンチするなど?
- Canton 連合は EU の銀行(Deutsche Bank / BNP)まで拡大するか?
- 長期 5-10 年視野で、機関 MMF におけるプライベートチェーン vs 公開チェーン経路の市場シェアは?
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED プライベートクレジット tokenization]] 等の RWA は順次 Canton 連合を選び、公開チェーンを避けるのか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-daml-technical-spec|DAML Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Project Ion announcements
- Canton Network (Digital Asset) — https://www.canton.network/

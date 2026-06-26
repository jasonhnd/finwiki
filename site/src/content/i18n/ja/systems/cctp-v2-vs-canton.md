---
source: systems/cctp-v2-vs-canton
source_hash: b9f333306f5f0e91
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "CCTP V2 vs Canton · 公開チェーン路線 vs プライベートチェーン路線の根本対峙"
translated_at: 2026-06-26T08:29:17.594Z
---
# CCTP V2 vs Canton · 公開チェーン路線 vs プライベートチェーン路線の根本対峙
## ウィキ上の位置づけ

この項目は[[systems/INDEX|systems index]]の下に位置づけられる。同種 / 対比の文脈として[[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]]、より広いシステム / 規制境界として[[fintech/INDEX|fintech index]]とあわせて読む。

## 主要事実

- JPM Kinexysは2026-01 にCCTP V2 を統合しないと明言（`kinexys/technology.md §4.2`）^[extracted]
- CCTP V2 は公開チェーン連合（Circle + Arc + 18 チェーン）の清算インフラ ^[extracted]
- Cantonはプライベートチェーン連合（GS + BNY + JPM + DTCC）の清算インフラ ^[extracted]
- ArcチェーンはCCTP V2 のネイティブホームであり、USDCはArcのgas ^[extracted]

## 仕組み

2 経路の根本的差異:

| 次元 | CCTP V2(公開チェーン路線) | Canton(プライベートチェーン路線) |
|---|---|---|
| 流動性主権 | Circle単独のmint / burn | 銀行連合内部での記帳 |
| クロスチェーン方式 | burn-and-mint（wrappedなし） | DAMLのアプリケーション間アトミック呼び出し |
| プライバシー | 公開チェーンで全公開 + denylistフィルタ | Sub-transaction privacyがデフォルト |
| 価値の帰属 | Circle + 公開チェーンエコシステム | 銀行連合（GS / BNY / JPM / DTCC） |
| 監督モデル | Circle自己コンプライアンス + §501 denylist | Regulator Nodeを内蔵 |
| ユーザータイプ | 暗号ネイティブ + 一部機関 | 純機関顧客 |

**JPM Kinexysの選択**: [[fintech/jpmorgan-jpmd-coin|JPMD]]はCCTP V2 を統合せずCantonに回帰した。理由は、(1) Coinbase カストディ顧客のBase上のholdingsはチェーン解析で逆推定可能であること、(2) Cantonがmulti-party atomic 決済をネイティブにサポートすること、(3) DAMLがSolidityより金融契約に適すること、(4) JPMがCanton創設メンバーであるという戦略的整合性である。

**Circle Arcの選択**: Arcチェーンは、CCTP V2 を直接採用し、USDCをgasとし、§501 コンプライアンス物語に賭けることで、**Coinbase Baseへの利益配分（$200M/年）を回避**する。これはCircleの脱Coinbase化の中核施策である。

## 起源と展開

2024-2025 年は、機関tokenizationにおける路線選択の窓口期に入った。Circle経路（CCTP V1 → V2 → Arc）とJPM経路（JPMD on Base → JPMD on Canton）は並行進化したが、方向は逆である。2026-01 にJPMが主戦場をCantonへ移すと公表し、公開 / プライベートチェーン分裂が正式に定型化した。

予想される今後5 年: **公開チェーン路線**（CCTP V2 + Arc + Base + [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]）が暗号ネイティブ + DeFi + 越境リテールを主導し、**プライベートチェーン路線**（Canton + JPMD + GS DAP + BNY LiquidityDirect）が機関collateral management + 大口清算を主導する。2 経路は§501 入榜地条項の制約下で、**「米ドルコンプライアンス圏」内部の並列体系を形成**する（[[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]参照）。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
<!-- /wiki-links:managed -->

## 出典

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Canton Network (Digital Asset) — https://www.canton.network/

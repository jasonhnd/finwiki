---
source: systems/canton-mmf-coalition
source_hash: 437925e68e594dbf
lang: ja
status: machine
fidelity: ok
title: ""
translated_at: 2026-06-03T00:53:08.285Z
---

#カントンMMF連合・JPM + GS + BNY + DTCCによる反BlackRock公開チェーン路線

## ウィキ上の位置づけ

このエントリは [[systems/INDEX|systems index]] の下にあります。 ピア/コントラストのコンテキストについては [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] と照らし合わせて、より広範なシステム/規制の境界については [[fintech/INDEX|fintech index]] と照らし合わせて読んでください。

## 主要事実

- JPM:JPMD(キャッシュレッグ)+MONY/JLTXX MMFをカントンにデプロイ ^[extracted]
- GS:GS DAP プラットフォーム + 5  の MMF が入居(BlackRock / BNY Dreyfus / Federated / Fidelity / GSAM) ^[extracted]
- BNY:LiquidityDirect(カストディ + カスタマーインターフェース)+ Dreyfus MMF ^[extracted]
- DTCC:Project Ion(Treasury tokenization on Canton)は 2026-10  にプラットフォーム全体ローンチ ^[extracted]
- BlackRock / Fidelity / Federated は GS DAP に受動的に居住する資産運用会社にすぎない ^[extracted]

## 仕組み / どのように機能するか

機関 tokenization の「2 経路」対峙:

| 経路 | 公開チェーン経路(BlackRock BUIDL) | プライベートチェーン経路(Canton 連合) |
|---|---|---|
| プラットフォーム | イーサリアム + 7+ 公開チェーン | カントンネットワーク |
| 入口 | Securitize(中立プラットフォーム) | BNY LiquidityDirect(銀行チャネル) |
| プライバシー | 公開 + KYC のセキュリティ化 | サブトランザクションのプライバシー |
| 価値の帰属 | 資産運用会社 + 公開チェーンエコシステム | 銀行(GS/BNY/JPM/DTCC) |
| 顧客タイプ | DeFi + 暗号ネイティブ + 機関の混合 | 純機関 + 伝統的 collateral mgmt |

**鍵となる洞察**:カントン連合の設計により、「機関MMFの全ライフサイクル」の各段階が連合メンバーに支配される —— 現金([[fintech/jpmorgan-jpmd-coin|JPM JPMD]])+資産(GS DAP)+カストディ(BNY)+基礎財務省(DTCC)。[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]はMMF発行体として、カントン上ではGS DAP上のMMF選択肢の 1 __忘れず、**価値帰属も顧客関係もBlackRockの手中にない**。これは公開チェーン経路でBlackRockが顧客と直接接し、Securitizeと利益配分計画することを念頭に対比([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]と対照)。

## 起源と展開

2024-2025 年 は機関 tokenization の「路線選択」の窓口期に入りました。BlackRock は BUIDL（2024-03  ローンチ）で公開チェーン経路の先行者地位を確保し、2025 年 中ごろに BUIDL TVL は $1B を突破しました。Canton 連合の反応として、GS DAP は 2024-2025 年 にかけて順次 MMF を受け入れ、BNY LiquidityDirect は 2025 年 に銀行顧客向けに開放され、JPM Kinexys は 2026-01  に JPMD の主戦場を Canton へ移すと発表し、DTCC Project Ion は 2026-10  にプラットフォーム全体をローンチしました。

時系列的にこれは **対応策**である —— Canton 連合は BlackRock が公開チェーンの高地を占拠した後、逆方向に閉ループスタックを構築し、価値を銀行体系内に再ロックする戦略を取った。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-daml-technical-spec|DAML Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## 出典

- DTCC プロジェクト イオンの発表
- Canton Network (デジタル資産) — https://www.canton.network/

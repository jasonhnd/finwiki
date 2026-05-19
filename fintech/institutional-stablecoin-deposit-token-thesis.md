---
title: 機関投資家市場のステーブルコイン = 銀行発行の預金トークンのみが構造的に解
aliases: [institutional-deposit-token, deposit-token-thesis]
domain: fintech
kind: knowledge
topic: institutional-stablecoin-deposit-token-thesis
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-12
confidence: possible
evidence_count: 4
challenges: 0
source: session
status: confirmed
tags: [fintech, stablecoin, institutional]
---

# 機関投資家市場のステーブルコイン = 銀行発行の預金トークンのみが構造的に解

> [!info] TL;DR
> 200-300 億円規模の機関決済では、ステーブルコインの KYC・規制水準が決済相手の水準と一致しなければ運用できない。パーミッションレスな USDC/USDT は構造上この市場に入れない。**JPM・三菱・三井住友・JP モルガン等の銀行発行預金トークンが、機関投資家向けステーブルコインの唯一の解**になる。

## Conclusion

機関投資家市場のステーブルコインは、暗号資産マーケットとは完全に別市場で、プレイヤーも違う。

| 観点 | リテール SC（USDC 等） | 機関投資家 SC（預金トークン） |
|---|---|---|
| 発行体 | クリプト企業 | 銀行（JPM・三菱 UFJ・三井住友等） |
| KYC | パーミッションレス | 銀行口座 KYC = 機関投資家グレード |
| 規模 | 小口 | 200-300 億円単位 / 案件 |
| 決済対象 | リテール送金・暗号資産取引 | 米国債、社債、レポ市場、有価証券、FX |
| プラットフォーム | Ethereum / Solana 等公開チェーン | Canton Network, Arc Network 等機関向け |

## Reasoning

- 米国債を 200 億円買う機関投資家が、ステーブルトークン単位で「この KYC 大丈夫か」を毎回チェックすることは不可能 → 同じ KYC レイヤーの発行体である必要
- イランの人が米国債トークンを持てない（米国 SEC 規制下）→ 発行体側で KYC を完了済の預金トークンでしか決済できない
- JPM Coin / Project Pax 等の「銀行発行預金トークン」が技術的・規制的に整合する唯一の形態
- DTCC・Nasdaq・Broadridge が米国債・株式の onchain 化アグリーメント進行中 → これらは全て機関向け、リテール SC は接続しない
- 「USDC を機関市場で使えるか？」答えは構造的に "No" — プレイヤーが違うから

## Applicable When

- 機関投資家向けの SC 設計議論（商業設計、institutional pitch 等）
- 「リテール SC + 機関 SC」を一発で設計しようとする提案を見たとき → 構造的に不可能と即否定
- 規制議論で「ステーブルコイン」と一括りにする論調を見たとき → 二つは別市場と分離して話す
- 預金トークンを論じる文脈（[[banking/minna-bank-baas-model|TD/SC]] 等）

## Source

- 整合: [[fintech/japan-stablecoin-regulatory-landscape|Project Pax]] (MUFG×SMBC×みずほ 機関向け B2B SC)
- 公開: Broadridge / DTCC / Nasdaq onchain 化アグリーメント (2024-2025)
- 整合: [[banking/minna-bank-baas-model|みんなの銀行 TD 戦略]] (TD = Tokenized Deposit と同じ系譜)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンスとクリプトの DNA 分離]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->

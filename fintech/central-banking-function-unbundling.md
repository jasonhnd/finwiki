---
title: 中央銀行機能のアンバンドリング 5 層 — 通貨インフラ再編のマクロ構造
aliases: [中央銀行アンバンドリング, 5-layer unbundling, central banking function unbundling]
domain: fintech
kind: framework
topic: central-banking-function-unbundling
created: 2026-05-16
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-16
confidence: certain
tags: [fintech, stablecoin, central-banking, macro-framework, geopolitics]
status: candidate
sources:
  - https://www.bis.org/publ/arpdf/ar2023e3.htm
  - https://www.bis.org/publ/othp33.htm
  - https://www.federalreserve.gov/aboutthefed/structure-federal-reserve-system.htm
  - https://www.imf.org/en/Topics/fintech
  - https://www.bis.org/cpmi/index.htm
---

# 中央銀行機能のアンバンドリング 5 層


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|米 / 欧 / 日「三大円」stablecoin グローバル・コンプライアンス・アーキテクチャ（MRA 相互承認）]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> ブレトンウッズ体制（1944）が構築した暗黙の前提は、**中央銀行が通貨システムの 5 つの機能を同時に担う** こと、かつそれらの機能が **抱き合わせ販売される** ことだった。2022 年以降、5 つの機能のうち 4 つ（#2-#5）が個別に民営化、商品化、チェーン・ネイティブ化、多極化された。中央銀行は計算単位（#1）を残し、その他のアンバンドリング・プロセスは過去 80 年で最大の金融インフラ再編である。

## 5 機能の定義

| # | 機能 | 1944-2022 担い手 | 2022-2030 進化 |
|---|---|---|---|
| 1 | **計算単位**（Unit of Account） | 中央銀行が独占 | 依然主権（USD/EUR/JPY 等） |
| 2 | **決済媒体**（Settlement Medium） | 中央銀行準備 + 商業銀行預金 | **民営化** → SC / TD / MMF 三層が網状に交錯 |
| 3 | **決済管路**（Payment Rails） | SWIFT + 中央銀行 RTGS + 商業銀行クリアリング | **多極化** → IPS / 民間 DLT / 中央銀行連邦 / カードネットワーク / 新型 L1 の 7-8 セグメントが並行 |
| 4 | **アイデンティティ / KYC**（Identity） | 銀行 KYC + 主権 ID | **商品化** → OCC charter / FIDO / Anchorage / チェーン・レベル KYA |
| 5 | **執行**（Enforcement） | OFAC + SWIFT 制裁 + 銀行報告 | **チェーン・ネイティブ化** → §501 Denylist / chain-level freeze / Travel Rule |

## アンバンドリングのトリガー

**2022 年に 3 つの独立した事象がほぼ同時に発生し、アンバンドリングをトリガーした**:

| 事象 | アンバンドリングした対象 |
|---|---|
| 米国債金利の正常化（4-5%） | #2 の民営化に経済モデルを提供 — stablecoin 準備の国債利息が初めて事業として成立 |
| ロシア準備 $300B+ の凍結 | #1 の中立性仮定を破る → 米ドルが政治ツールと理解される → #3 多極化に政治的正当性 |
| ChatGPT の一般公開 | #4 を「人 vs 機関」から「人 vs 機関 vs Agent」の三元へ変革 → プロトコル層の再構築 |

参照: [[2022-three-variable-cascade-thesis|2022 三変数カスケード]]

## レイヤー間ネットワーク効果

```
        顧客基盤（#4）
           ↑↓
   ┌───────┴───────┐
   ↓               ↓
決済媒体（#2）  決済管路（#3）
   ↓               ↓
   └───────┬───────┘
           ↓
        執行層（#5）
        （規制者が提供）
```

**最強経路**: 先に #4（顧客） + #5（規制側親和性）を持つプレイヤーが、下位に #3 と #2 を構築する。
**最弱経路**: #2（プロダクト）単点からスタートし、上位に顧客と規制を探しに行く。

## 主要プレイヤーのレイヤー別カバレッジ

| プレイヤー | #2 | #3 | #4 | #5 |
|---|---|---|---|---|
| **Coinbase / Base** | USDC 依存 + 自社 token は発行待ち | Base L2 + [[fintech/cbbtc-institutional-btc-wrapper|cbBTC]] クローズドループ | リテール KYC + Prime 機関 | OFAC 協力 |
| **Stripe / Tempo+Bridge+Privy** | USDB | [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Tempo + Connect]] | Bridge OCC + 加盟店ネットワーク | OCC compliance |
| **Circle / Arc** | USDC | [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc]] | OCC 申請中 + USDC ブランド | §501 day-1 |
| **JPMorgan / Kinexys** | [[fintech/jpmorgan-jpmd-coin|JPMD + MONY/JLTXX]] | Kinexys + [[systems/canton-overview|Canton]] | 銀行 KYC 100 年 | 中央銀行直接接続 + OCC 母行 |

**JPMorgan は隠れた巨人**: #2-#5 すべてで主権を close しており、crypto エコシステムに依存しない。唯一の弱点は crypto-native でない点だが、TD 経路には §501 SC 資格が不要。

## 応用

以下の分析に活用できる:

- 任意の「金融インフラ再編」事象（CBDC ローンチ、SWIFT 代替、クロスボーダー決済再構築など)
- 単一プレイヤーの「レイヤー版図」診断（強弱の識別）
- レイヤーをまたぐ M&A の戦略的含意（弱いレイヤーの補強 vs 強いレイヤーのさらなる強化）

**繰り返し出現する構造**:
- 1944 ブレトンウッズ確立 = 5 層が初めて中央銀行連合に同時に担われた
- 1971 ブレトンウッズ崩壊 = #1 と #2 の連動解除
- 2008 中央銀行 QE = 中央銀行が #2 で #1 に介入
- 2022- 進行中 = 4 層の民営化

## 関連

- [[stablecoin-chain-sovereign-currency-divide|5 極地政学対立]]
- [[occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter 裁定]]
- [[three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[2022-three-variable-cascade-thesis|2022 三変数カスケード]]

---


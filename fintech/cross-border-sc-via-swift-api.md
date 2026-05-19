---
title: 跨境 SC via SWIFT API —— Project Pax / Project Agorá 与 SWIFT 集成パターン
aliases: [cross-border SC via SWIFT API, SWIFT API + blockchain settlement, Project Pax pattern]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, stablecoin, cross-border, swift, tokenized-deposit, ibc, japan]
status: candidate
sources: []
---

# 跨境 SC via SWIFT API

> [!info] TL;DR
> 跨境 SC 普及最大の阻害は「銀行 workflow / AML/CFT との非互換性」。これを解く現代パターンは **SWIFT API を front-end に置き、blockchain settlement を back-end で実行する hybrid 構造**。Project Pax(Progmat + Datachain · 2024-09)と BIS Project Agorá がこの構造の代表実装。**TD(Tokenized Deposit) は SWIFT API 互換性で先行**、**SC は §501(d) 互操作 ライセンス次第で接続パターンが分岐**。

## 基本パターン

```
銀行(MUFG / SMBC / Mizuho 等)
       ↓ SWIFT MT103 / ISO 20022 メッセージ
SWIFT API mock layer(Datachain)
       ↓ 解析 → settlement instruction
Progmat Coin contract(信託型 SC)
       ↓ on-chain transaction
IBC + LCP(cross-chain bridge)
       ↓
Ethereum / Polygon / Avalanche / Cosmos
       ↓ TOKI 流動性プールで cross-chain swap
受信側銀行 → 受信側通貨で着金
```

## なぜ SWIFT API を前面に置くのか

| 理由 | 内容 |
|---|---|
| **既存 workflow 保護** | 銀行内部システム / corporate ERP は SWIFT 前提で 50 年運用 |
| **AML/CFT 互換** | OFAC / FATF Travel Rule は SWIFT で運用ノウハウ蓄積 |
| **監督当局の安心** | FSA / 金融庁は SWIFT 経由なら審査済とみなしやすい |
| **段階移行可能** | full on-chain は遠い未来 · SWIFT で銀行を巻き込み徐々に on-chain 比率を上げる |

## TD vs SC の跨境パス分岐

| 項目 | TD(JPM Kinexys / KDP)| 信託型 SC(Progmat / Project Pax)|
|---|---|---|
| 法的性質 | 銀行預金型 | 第 3 号 EPI 信託型 |
| SWIFT API | **既存 SWIFT 直接利用** | SWIFT API mock layer 経由 |
| Cross-border 商用化 | **既に $1.5T/月**(KDP)| 2026-H2 目標(遅延中)|
| §501(d) 必須? | **不要**(TD は SC 規制外)| 必要(将来取得待ち)|
| 互操作 partner | 米系 banking partner 既存 | アジア partner 確定不足 |
| 利息 | 預金利息銀行帰属 | 信託受託報酬 |

**含義**:Kinexys は TD path で **§501 規制を回避** しつつ商用化に到達済。Progmat は SC path で §501(d) tier を取らない限り Kinexys に cross-border 大口で構造的劣勢。

## Project Pax の技術構成

| Layer | 構成要素 | 提供者 |
|---|---|---|
| Application | SWIFT API mock + corporate wallet | Datachain |
| Settlement instruction | Progmat Coin contract | Progmat + Datachain |
| Cross-chain | IBC + LCP middleware | Datachain(Hyperledger Lab)|
| Liquidity | TOKI cross-chain pool | TOKI(Datachain 子会社)|
| Chains | Ethereum / Polygon / Avalanche / Cosmos | 各 chain |
| Compliance | OFAC / Travel Rule / KYC API | Progmat 共通 |

## BIS Project Agorá との比較

| 項目 | Project Pax | BIS Project Agorá |
|---|---|---|
| 主導 | Progmat(民間 · 日本)| BIS(国際的 · 7 央行)|
| 目的 | 日本発 SC を SWIFT に乗せる | 卸売 CBDC + commercial bank money 統合 |
| Settlement asset | 信託型 SC | wholesale CBDC + TD |
| 技術 | Avalanche L1 + IBC | Unified Ledger(BIS 設計)|
| 商用 timeline | 2026-H2 | 2027+(実証段階)|
| §501(d) との関係 | 個別 SC 互操作 | 主権ネットワーク基盤 |

**両者は補完関係**:Agorá は **国家間骨格** を作り、Pax は **個別 SC ↔ SWIFT の最後の1マイル** を解く。

## 限界 / リスク

- **§501(d) 通道未確立**:USDC 等米国合規 SC との直接 swap は現状不可
- **遅延履歴**:Pax は 2025 末当初目標を達成できず → 技術リスク露見
- **アジア partner 不足**:HK / SG / 韓国 counter-party 確定遅延
- **SWIFT 依存**:SWIFT 自身が将来 ISO 20022 + onchain native に移行すれば mock layer が陳腐化
- **JPM Kinexys との競合**:TD path で同種機能を既に商用化

## 応用

- 任何 "blockchain + 既存 banking workflow" 統合議論で参照可能
- SWIFT 改革(ISO 20022 / GPI / GPI for Corporates)と SC の関係読み解き
- アジア発の cross-border SC 設計議論(韓国 KRW1 · タイ Project Inthanon · シンガポール Project Ubin)
- [[cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]] と組み合わせて多 chain SC 移転設計

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/stablecoin-crossborder-b2b-growth|Stablecoin Cross-border B2B 成长]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->

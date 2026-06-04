---
title: 多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式
aliases: [multi-megabank consortium governance, megabank consortium fintech, Progmat governance pattern]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, governance, japan, progmat, bis, consortium, megabank, td]
status: candidate
sources:
  - https://progmat.co.jp/
  - https://www.mufg.jp/english/
  - https://www.smfg.co.jp/english/
  - https://www.mizuho-fg.com/index.html
---

# 多巨行联合体治理


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Fintech 基础设施を「単一銀行」「複数銀行 JV」「独立企業 + 銀行少数持株」の **3 つの治理モデル** で比較すると、**Progmat 型(独立企業 + non-controlling stake 設計)が最も拡張性が高い**。JPMorgan Kinexys は単一銀行型、BIS Project Agorá は中央銀行コンソーシアム型、Progmat は独立企業型 —— 各々が要求する規制環境と意思決定速度のトレードオフが異なる。

## 3 つの治理モデル

| モデル | 代表事例 | 所有構造 | 意思決定速度 | 規制要件 | 拡張性 |
|---|---|---|---|---|---|
| **単一銀行所有** | JPM Kinexys / GS DAP | 銀行 100% 子会社 | 高速 | 銀行規制内 | 低(銀行 brand 縛り) |
| **複数銀行 JV** | DTCC / 旧 SWIFT 構造 | 銀行間平等出資 | 低速(全員合意) | 銀行協調規制 | 中 |
| **独立企業 + non-controlling** | **Progmat / NTT Data 共同** | 独立法人 · 銀行少数持株 | 中速 | 独立 fintech 規制 | **高** |

## Progmat 構造の精緻設計

**MUTB 49% stake 設計の核心意図**:

```
MUTB([[megabanks/mufg|三菱 UFJ 信託銀行]])     49.0%   ← 単独最大株主だが過半数 NG
SMBC グループ ([[megabanks/smfg|SMFG]])      ~15%   ← 重要 partner
Mizuho 信託銀行           ~15%   ← 重要 partner
NTT Data                  ~10%   ← 技術 partner
JPX                       ~5%    ← 取引所 partner
Datachain                 ~3%    ← 技術 partner
他                          ~3%
```

**設計原則**:
- **49% は意図的**(FSA の指導):**MUFG が支配的にならない non-MUFG-controlled** 設計
- **三大行が同等格**(MUTB 49% を除けば実質的に対等)→ 中立性確保
- **NTT Data / JPX が技術 / 取引所側**から参加 → 銀行以外の正当性

**これにより**:
- SMBC / Mizuho は MUFG 子会社では使えないが、independent 法人なら使える
- FSA は MUFG だけのプロジェクトと見做さず、業界共通インフラとして承認
- 共通 SC(JPYW)を作る場合も MUFG 単独提案では難しいが、Progmat 経由なら可能

## 多巨行型ガバナンス成立の条件

| 条件 | 内容 | Progmat の達成度 |
|---|---|---|
| **中立的 chairperson / CEO** | どの銀行にも偏らない人物 | 齊藤達哉(三菱 UFJ 出身だが独立 CEO 兼務)|
| **過半数閾値超え NG** | 単独銀行が過半数を持たない | MUTB 49% で達成 |
| **政府 / 規制側の祝福** | 中央銀行 / 監督当局が業界共通と認定 | FSA PIP 主導 |
| **技術 partner 中立性** | 銀行以外の技術 partner が中立的 | NTT Data + Datachain |
| **競合銀行が gain** | 三大行が同時に benefit | 客户基盤 30 万社共通アクセス |
| **退出オプション** | 各銀行が自社路線も併走可能 | SMBC は SBI / Mizuho は Solana 併走 |

## BIS Project Agorá との対比

| 軸 | Progmat | BIS Project Agorá |
|---|---|---|
| 主導 | 民間(信託銀行協調)| 国際(BIS + 7 央行)|
| 規制 | FSA 監督 + 信託法 | BIS 協調 + 各国央行法 |
| Settlement asset | 信託型 SC | wholesale CBDC + TD |
| Decision speed | 株主間契約ベース(中速)| 7 央行合意(低速)|
| Geographic scope | 日本国内中心 → 拡大検討中 | グローバル設計だが pilot 中 |
| Exit option | 株主としての売却可能 | 国家 commitment 解除不可 |

**含義**:[[fintech/bis-project-agora-overview|Agorá]] は **公的 commitment と規制統合が強い** が **速度が遅い**。[[payment-firms/progmat|Progmat]] は **速度と柔軟性が高い** が **国際的正統性が Agorá より弱い**。両者は補完的:Agorá が国際骨格を作り、Progmat が国別実装を担う構造が長期的に成立する可能性。

## 共通リスク

| リスク | 内容 |
|---|---|
| **戦略不一致** | 加盟銀行が独自路線(SMBC × SBI など)で離反する可能性 |
| **意思決定遅延** | 全員合意要件で重要決定が timing を逃す |
| **覇権争い** | MUTB が 49% → 実質支配で他行が骨抜きにする可能性 |
| **新参加銀行の交渉力低下** | 後発加盟銀行は既存 49% 設計を変更できない |
| **海外連携の正当性** | 各銀行の海外子会社が個別に Kinexys 等と提携 → 一貫性崩れ |

## 応用

- 任何 "複数 megabank 共通 fintech インフラ" 議論の構造分析
- 韓国 / 台湾 / アジア他国の SC コンソーシアム設計参考
- mBridge / Project Nexus / IPS-RTGS 相互接続の governance 比較
- DTCC / Visa / Mastercard 等 既存「業界共通インフラ」の進化系として
- 中央銀行コンソーシアム + 民間 SC コンソーシアムの 2 層構造設計

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

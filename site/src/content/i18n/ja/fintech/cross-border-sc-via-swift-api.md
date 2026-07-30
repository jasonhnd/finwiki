---
source: fintech/cross-border-sc-via-swift-api
source_hash: 66bf01bac654620e
lang: ja
model: source-language-sync
status: machine
fidelity: ok
title: "クロスボーダー SC via Swift API"
translated_at: 2026-07-29T17:52:19.233Z
---

# クロスボーダー SC via Swift API


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Project Pax は、Swift の API モック／シミュレーション環境に適応したクロスボーダー・ステーブルコイン送金基盤のプロトタイプを Progmat と Datachain が検証する構想として、2024-09-05 に公表された。公表資料が示すのは、銀行からの指図を想定する API 面と、IBC、LCP、共同開発したステーブルコイン・コントラクト、TOKI の流動性プールを使うクロスチェーン面である。商用稼働、特定銀行の本番接続、特定チェーンへの配備、受取銀行での最終着金は、この資料だけでは確認できない。^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

## 基本パターン

```
銀行からの指図を想定
       ↓
Swift API モック／シミュレーション環境に適応
       ↓
Progmat / Datachain 共同開発のステーブルコイン・コントラクト
       ↓
IBC + LCP によるクロスチェーン機能
       ↓
TOKI が提供する流動性プール
```

この図は Datachain の 2024-09-05 発表に記載された検証構成だけを表す。メッセージ規格、参加銀行、配備チェーン、法的な発行類型、最終的な口座記帳を補ってはいけない。^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

## なぜ SWIFT API を前面に置くのか

下表は Progmat / Datachain の共同発表に記載された目的と検証範囲に限定する。規制承認や AML/CFT 適合を API 接続だけから推定してはいけない。^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

| 理由 | 内容 |
|---|---|
| **既存業務との連続性** | 銀行が利用する Swift の既存 API 枠組みから Progmat に指図する構想 |
| **指図と価値移転の分離** | API モック／シミュレーション面とブロックチェーン上の送金面を分けて検証 |
| **運用の重複を抑える狙い** | Project Pax は銀行の法定通貨送金オペレーションとの二重化と追加投資の抑制を目的に掲げる |
| **検証可能な段階導入** | API mock / simulation と PoC で接続、規制、ウォレット利用等の論点を検証してから次段階へ進む |

## 他の仕組みとの比較境界

Project Pax の発表は、銀行預金台帳や他社の決済ネットワークと「同じ機能」であること、またはそれらと競争関係にあることを立証しない。金銭の法的性質、運営主体、参加条件、稼働段階が異なる仕組みは、それぞれの直接資料で評価する。

## Project Pax の技術構成

構成要素は 2024-09 の Progmat / Datachain 共同発表に基づく。発表は設計と実証目標であり、全チェーン・流動性・コンプライアンス機能の本番提供を意味しない。^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

| Layer | 構成要素 | 提供者 |
|---|---|---|
| 銀行指図 | Swift API mock / simulation environment | Progmat / Datachain が検証 |
| 送金基盤 | Progmat Coin 連携とクロスボーダー送金機能 | Progmat + Datachain |
| Cross-chain | IBC + LCP middleware | Datachain |
| 流動性 | Cross-chain conversion / transfer 用 pool | TOKI |
| Stablecoin contract | Progmat / Datachain 共同開発 contract | Progmat + Datachain |
| 金融機関レビュー | 実務・規制・運用論点の検証 | 共同発表が示す金融機関レビュー |

## BIS Project Agorá との比較

両プロジェクトの公式発表に基づく比較。Agorá は Swift を含む40超の民間参加者を持つが、Project Pax の上位ネットワークとして設計されたものではない。^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/innovation_hub/projects/agora_list_participants.pdf]

| 項目 | Project Pax | BIS Project Agorá |
|---|---|---|
| 主導 | Progmat + Datachain | BIS + IIF + 8中央銀行 + 40超の規制金融機関 |
| 目的 | Swift API 経由の指図とステーブルコイン送金を接続 | トークン化預金と中央銀行準備を使う卸売クロスボーダー決済 |
| Settlement asset | 接続対象の民間ステーブルコイン | Tokenised commercial-bank deposits + tokenised central-bank reserves |
| 技術 | API mock、IBC、LCP、stablecoin contract、TOKI pool | 預金の unifying layer と法域別の中央銀行準備 ledger |
| 2026-07-30時点 | 日韓 Phase 2 の実証段階 | Prototype 完了、限定的 real-value testing へ進む計画 |
| 関係 | 独立した民間実証 | 独立した公共・民間研究プロジェクト |

両者は目的、参加者、決済資産、検証段階が異なる。引用資料は、Agorá が Project Pax の基盤であること、Project Pax が Agorá の末端機能であること、または一方の実装が他方に依存することを示していない。

## 限界 / リスク

- **商用状態未確認**: Phase 2 実証の完了、料金、SLA、取引量は公式発表で確認する必要がある
- **規制は別途必要**: Swift API 接続は発行、送金、販売、AML/CFT の認可を代替しない
- **参加範囲**: 金融機関名や対象法域は、各段階の直接発表で確認する必要がある
- **技術範囲**: メッセージ規格、配備チェーン、最終口座記帳は 2024-09-05 発表から推定しない

## 応用

- 「ブロックチェーン + 既存の銀行業務フロー」の統合を検討する際の事例
- API 指図面とブロックチェーン価値移転面を分ける設計の確認
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]] と併せたクロスチェーン技術の比較

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/stablecoin-crossborder-b2b-growth|Stablecoin Cross-border B2B 成长]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
<!-- /wiki-links:managed -->

## Sources

- [Datachain — Progmat and Datachain Launch Project Pax (2024-09-05)](https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax)
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm)

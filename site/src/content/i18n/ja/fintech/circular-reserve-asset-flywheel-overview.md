---
source: fintech/circular-reserve-asset-flywheel-overview
source_hash: 8ecae0bb8fd3b901
lang: ja
status: machine
fidelity: ok
title: "準備金インターロック・フライホイール · BUIDL ↔ USDC システミックな循環依存"
translated_at: 2026-06-02T13:21:55.084Z
---

# 準備金インターロック・フライホイール · BUIDL ↔ USDC システミックな循環依存

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置する。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> BlackRock BUIDL(トークン化国債 MMF)は Circle USDC 準備金の中核構成要素となった。Circle が保有する BUIDL から発生する利息が再び BUIDL に流入 → BUIDL AUM を押し上げる → Circle 準備金をさらに「BUIDL 化」させる。これは**利息→準備金→AUM→利息**の自己フィードバック型システミック・インターロック・フライホイールであり、2026 年以降は stablecoin 規制が「reserve concentration risk」を定義する際のサンプル事例となる可能性が高い。

## 主要事実

- BUIDL 2024.03 ローンチ · 2025 年中に AUM が 4-5× 成長(推定 $2.5-3B) ^[extracted]
- Circle は BUIDL 初期最大の機関 LP の一つ(Circle 2025.04 に公式表明) ^[extracted]
- Circle 2024 年利息収入 $1.7-1.8B · うち ~$905M を Coinbase に分配 ^[extracted]

## 仕組み / 作動方法

インターロック構造 = 自己フィードバック・ループ:

```
[Circle USDC 準備金 $40B+] ──保有──> [BlackRock BUIDL]
        │                                          │
        │ 利息(4.5% APY)                          │ AUM 成長
        ↓                                          ↑
[Circle 純利息収入] ──Coinbase に 50% 分配 + BUIDL に再投資──┘
```

Circle が BUIDL に $1 預けるごとに → BlackRock が 0.5% の運用手数料を取得 → 純 4% の利息が Circle に戻る → 50% を Coinbase に分配 + 50% を自社保有 → 自社保有分が再び BUIDL を買う。「自社保有→再投資」比率 > 0 である限り、BUIDL が準備金に占める比率は**単調に上昇し**、外力(規制 cap / Circle 自発的な分散化 / 競合 MMF のシェア奪取)が介入するまで続く。同じ反射性ループは [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL × SC issuer マトリクス]] における他の issuer 関係(USDB / USDtb / sfrxUSD / OUSG)にも現れる。

## 起源と発展

2024.03 BUIDL ローンチ · Circle 初期からポジション構築するも規模は限定的。2024-2025 AUM 4-5× 成長期に Circle 保有が急拡大 · 2025.04 Circle 公式表明。2025.07 [[fintech/genius-act-501-denylist-mandate|GENIUS Act]] §504 は準備金構成の月次開示を義務付けたが「トークン化国債経由の保有」は禁止せず → フライホイールは規制グレーゾーン内で稼働を継続。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|準備金インターロック · 三層リスクシナリオ]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|Coinbase ↔ Circle 50/50 モデル]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配エコノミクス]]
<!-- /wiki-links:managed -->

## 出典

- Circle 2024 年次報告 + 目論見書 · BUIDL 2024.03 ローンチ告知

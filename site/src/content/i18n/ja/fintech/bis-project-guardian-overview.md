---
source: fintech/bis-project-guardian-overview
source_hash: b416ab4ebd6b24f0
lang: ja
status: machine
fidelity: ok
title: "MAS Project Guardian 概要"
translated_at: 2026-06-02T13:21:55.030Z
---
# MAS Project Guardian 概要

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> Project Guardian はシンガポール金融管理局（MAS）が 2022.05 に立ち上げたトークン化資産産業実証プロジェクト — 25+ のグローバル金融機関（DBS / Citi / JPM / Standard Chartered / HSBC / UBS / Franklin Templeton など）が MAS 監督下のサンドボックスで、トークン化された債券、ファンド、外国為替、カーボン・クレジットを試験運用している。アジア主導のトークン化協調センターで、Agorá / Ensemble と共に「アジア三極」のトークン化インフラ分業を形成する。

## 主要事実

- 2022.05 立ち上げ、第 1 陣は DBS / JPM / Marketnode ^[extracted]
- 2022.11 実証 1: JPM が円 / シンガポールドルの外国為替をトークン化（Aave Arc の許可型プール上） ^[extracted]
- 2024.03 25+ 機関に拡大、新たにファンド / 外国為替 / カーボン・クレジット領域を追加 ^[extracted]
- 2024.11 Guardian Wholesale Network 稼働（機関間決済レイヤー） ^[extracted]
- 5 大 実証 方向: 債券 / トークン化ファンド / 外国為替 / 貿易金融 / カーボン・クレジット ^[extracted]
- MAS は BIS Agorá にも同時参加 ^[extracted]
- DBS / JPM / Standard Chartered が最も深く関与（3+ 実証 をカバー） ^[extracted]
- 全 実証 が MAS 監督下のサンドボックス内、retail エクスポージャーなし ^[extracted]

## 仕組み

Guardian は「トークン化資産のラボ」で、MAS という単一の規制当局が主導するため、中央銀行アライアンスの協調コストが発生しない。25+ 機関が監督下のサンドボックスで **資産クラスごとにライン分けして試行**:

1. **債券**: UBS / Citi のトークン化債券セカンダリー流通
2. **トークン化ファンド**: Franklin Templeton / Schroders / Fidelity International
3. **外国為替**: JPM / DBS / SBI のクロスカレンシー・アトミック決済
4. **貿易金融**: Standard Chartered / Ant International
5. **カーボン・クレジット**: シンガポール Climate Impact X (CIX) と連携

**Guardian Wholesale Network**（2024.11 稼働）は MAS 主導の機関決済レイヤーで、ソブリン CBDC に依存せず、「トークン化資産対トークン化資産」の機関決済インフラを実質的に提供する。**MAS 単一規制当局 = 意思決定が速い**: [[fintech/bis-project-agora-overview|Agorá]] の 7 中央銀行協調コストと比較して、Guardian は年 1 マイルストーン のペース。MAS のリテール / 機関 SC ライセンスの整備は [[fintech/singapore-mas-payment-services-act-overview|MAS PS Act 概要]] と [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT ライセンス概要]] 参照。

## 起源と発展

2020 MAS がフィンテック・サンドボックス・フレームワークを公表、2022 に Project Orchid（リテール CBDC 研究） + Project Ubin（ホールセール CBDC 初期実験）の 2 ラインを推進。2022.05 Project Guardian を立ち上げ、「トークン化資産」に絞った差別化ポジショニング（mBridge / Ensemble の「トークン化マネー」との分業）。2022-2024 で 実証 数は 3 から 5 領域に、機関数は 3 行から 25+ 行に拡大。2024.11 Guardian Wholesale Network 稼働 → 「実験」から「事実上の 決済レイヤー」へとアップグレード。2025 BIS Agorá との相互接続実験（MAS は同時参加）、Guardian のトークン化資産標準が Agorá のマネー・インフラ上で決済可能となる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agorá アジア三極分業]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
<!-- /wiki-links:managed -->

## 出典

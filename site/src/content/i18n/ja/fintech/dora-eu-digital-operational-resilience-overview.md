---
source: fintech/dora-eu-digital-operational-resilience-overview
source_hash: 0da23cb12232d763
lang: ja
status: machine
fidelity: ok
title: "DORA · EU Digital Operational Resilience Act 概観"
translated_at: 2026-06-02T13:21:55.047Z
---
# DORA · EU Digital Operational Resilience Act 概観

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる。隣接文脈として [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界として [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> DORA(Regulation (EU) 2022/2554)は 2025-01-17 に全面施行され、EU 全ての金融機関 + その critical ICT 第三者サプライヤー(cloud / wallet provider / blockchain infrastructure を含む)に 5 本柱の要件を課す:ICT risk management / incident reporting / digital operational resilience testing / third-party risk / information sharing。MiCA と相まって「業務 + レジリエンス」二軌監督を形成する。

## 主要事実

- DORA 採択:2022-12-14(Regulation (EU) 2022/2554)^[extracted]
- DORA 施行:2025-01-17(全条項)^[extracted]
- 適用範囲:EU 金融機関約 22,000 社 + ICT サプライヤー 3,000+ 社 ^[extracted]
- 罰金上限:金融機関は世界売上の 1% + ICT サプライヤーは売上の 1% ^[extracted]
- ESAs は 2024-07 に 9 セットの Level 2 RTS/ITS を公表 ^[extracted]
- Major incident は 4 時間以内に初報 + 72 時間以内に詳報 ^[extracted]
- TLPT フレームワーク:約 5 年で全 significant 金融機関をカバー ^[extracted]
- DORA Joint Committee は EBA + ESMA + EIOPA の三者構成 ^[extracted]

## 仕組み / どのように機能するか

**五本柱**:
- **ICT Risk Management (Art. 5-16)**:ガバナンスフレーム · CEO / Board に直接責任 · 資産 inventory + リスク評価 · Business Continuity Plan + Disaster Recovery
- **ICT-関連項目 Incident Reporting (Art. 17-23)**:Major incident は 4 時間以内に初報 + 72 時間以内に詳報 · EU 共通テンプレート(ESAs 2024-07 RTS)
- **Digital Operational Resilience Testing (Art. 24-27)**:3 年ごとに Threat-Led Penetration Testing (TLPT) · TIBER-EU フレームワークに基づく · クロスボーダー協調テスト
- **ICT Third-Party Risk (Art. 28-44)**:Critical Third-Party Provider (CTPP) は ESAs が直接監督 · cloud / blockchain infra / wallet provider をカバー — 詳細は [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP 第三者リスク]] を参照
- **Information Sharing (Art. 45)**:任意の脅威インテリジェンス共有 · US FS-ISAC に類似

## 起源と変遷

DORA は 2020-09 の EU Commission Digital Finance Package の一部として提案され、[[fintech/mica-overview|MiCA]] と同時期に推進された。2022-12 採択、2025-01 全面施行。ESAs(EBA + ESMA + EIOPA)が 2024-07 に 9 セットの Level 2 RTS/ITS を公表し、9 つのサブ領域を落とし込んだ。**米国対応**:FFIEC IT Handbook · NYDFS Part 500 · OCC Heightened Standards · MRA の次元で USA-EU MRA には DORA-equivalent 条項を含める必要があり、詳細は [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]] を参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP 第三者リスク]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## 出典

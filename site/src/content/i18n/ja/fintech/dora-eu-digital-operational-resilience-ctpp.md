---
source: fintech/dora-eu-digital-operational-resilience-ctpp
source_hash: 9898acae9bcc86d8
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "DORA CTPP 第三者リスク · AWS/Anchorage を金融規制下に間接的に取り込む"
translated_at: 2026-06-26T08:29:01.751Z
---

# DORA CTPP 第三者リスク · AWS/Anchorage を金融規制下に間接的に取り込む

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] を、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] を参照。

> [!info] 要約
> DORA 第 28-44 条の重要第三者プロバイダー（Critical Third-Party Provider、CTPP）メカニズムは、EU がクラウド / Anchorage / Coinbase カストディ等の SC 重要インフラを「間接的に監督下に取り込む」法的ツールである。あらゆる EU SC 発行体 / CASP / カストディアンは二重コンプライアンス（MiCA + DORA）が必須。2026-Q2 の第一回 CTPP リストには AWS / Azure / GCP / Anchorage / Coinbase カストディ / Chainalysis / TRM Labs / Fireblocks / Circle Europe が含まれる見込み。

## 主要事実

- ESAs による CTPP 評価基準:システム重要性 + 依存度 + 代替可能性 + 既識別リスク ^[extracted]
- CTPP oversight fee:€500K(中規模)~ €5M(大規模クラウド) ^[extracted]
- EU 法人または EU representative の設立が必須 ^[extracted]
- ESAs は financial entity に契約終了を強制可能 ^[extracted]
- オンサイト検査 + 遠隔監査権 ^[extracted]
- 2026-Q2 に AWS / Azure / GCP は自動的に選定される見込み ^[likely]
- Anchorage / Coinbase カストディ / Fireblocks / Chainalysis / TRM Labs が予想リストに ^[likely]
- Circle Europe は二重身分:EMT 発行体 + 潜在 CTPP ^[likely]

## 仕組み

**ESAs 評価プロセス(DORA Art. 31)**:
- システム重要性 + 金融機関依存度 + 代替可能性 + 既識別リスクの定量化
- CTPP リスト入り後:EBA / ESMA / EIOPA Lead Overseer による直接監督
- EU 法人または EU representative の設立が必須
- 年次 oversight fee €0.5M-€5M
- オンサイト検査 + 遠隔監査権
- ESAs は financial entity に契約終了を強制可能

**実際のインパクトチェーン**: Circle Europe（[[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT]]）は同時に DORA 準拠する必要あり → その AWS サプライヤーが自動的に CTPP 化 → AWS は EU 法人を設立し ESAs 監督に応じる必要あり → Solana 上の BUIDL が EU 顧客にリーチ → BlackRock Europe + Solana バリデーターも影響を受ける。

## 起源と展開

CTPP コンセプトは 2018-2021 の欧州銀行業におけるクラウド集中度懸念（AWS が EU 金融クラウドの 40%+ を占有）に源流を持つ。EBA 2017《クラウドサービスプロバイダーへの外部委託に関する勧告》が初期の試み。DORA 2022 通過により CTPP はソフトガイダンスからハード規制に格上げ。2024-07 ESAs Level 2 RTS で定量基準を明確化。**初の「非金融テック企業が金融規制対象に」**: AWS / Azure / GCP が自動 CTPP 化 → ESAs が直接監督 = EU 主権クラウド要求の強化（Gaia-X / EuroStack）を招き、オンショア・データセンター建設ブームを誘発する。[[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概観]] と相まって EU 暗号資産における「業務 + レジリエンス」二軌監督を構成。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## 出典

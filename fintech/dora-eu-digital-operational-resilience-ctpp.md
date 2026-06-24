---
title: DORA CTPP 第三者リスク · AWS/Anchorage を金融規制下に間接的に取り込む
aliases: [dora-ctpp, DORA critical third-party provider, cloud crypto custody EU]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [fintech, law, regulation, eu, dora, ctpp, cloud, custody, mica]
sources:
  - https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022R2554
  - https://www.esma.europa.eu/policy-activities/digital-finance/digital-operational-resilience-act-dora
  - https://www.eba.europa.eu/regulation-and-policy/operational-risk
  - https://aws.amazon.com/financial-services/security-compliance/
status: active
---

# DORA CTPP 第三者リスク · AWS/Anchorage を金融規制下に間接的に取り込む

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> DORA Art. 28-44 の Critical Third-Party Provider (CTPP) メカニズムは、EU が cloud / Anchorage / Coinbase Custody 等の SC 重要インフラを「間接的に監督下に取り込む」法的ツールである。あらゆる EU SC issuer / CASP / カストディアンは二重コンプライアンス(MiCA + DORA)が必須。2026-Q2 の第一回 CTPP リストには AWS / Azure / GCP / Anchorage / Coinbase Custody / Chainalysis / TRM Labs / Fireblocks / Circle Europe が含まれる見込み。

## Key facts

- ESAs による CTPP 評価基準:システム重要性 + 依存度 + 代替可能性 + 既識別リスク ^[extracted]
- CTPP oversight fee:€500K(中規模)~ €5M(大規模クラウド) ^[extracted]
- EU 法人または EU representative の設立が必須 ^[extracted]
- ESAs は financial entity に契約終了を強制可能 ^[extracted]
- オンサイト検査 + 遠隔監査権 ^[extracted]
- 2026-Q2 に AWS / Azure / GCP は自動的に選定される見込み ^[likely]
- Anchorage / Coinbase Custody / Fireblocks / Chainalysis / TRM Labs が予想リストに ^[likely]
- Circle Europe は二重身分:EMT issuer + 潜在 CTPP ^[likely]

## Mechanism / How it works

**ESAs 評価プロセス(DORA Art. 31)**:
- システム重要性 + 金融機関依存度 + 代替可能性 + 既識別リスクの定量化
- CTPP リスト入り後:EBA / ESMA / EIOPA Lead Overseer による直接監督
- EU 法人または EU representative の設立が必須
- 年次 oversight fee €0.5M-€5M
- オンサイト検査 + 遠隔監査権
- ESAs は financial entity に契約終了を強制可能

**実際のインパクトチェーン**:Circle Europe([[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT]])は同時に DORA 準拠する必要あり → その AWS サプライヤーが自動的に CTPP 化 → AWS は EU 法人を設立し ESAs 監督に応じる必要あり → BUIDL on Solana が EU 顧客にリーチ → BlackRock Europe + Solana validator も影響を受ける。

## Origin & evolution

CTPP コンセプトは 2018-2021 の欧州銀行業におけるクラウド集中度懸念(AWS が EU 金融クラウドの 40%+ を占有)に源流を持つ。EBA 2017《Recommendations on outsourcing to cloud service providers》が初期の試み。DORA 2022 通過により CTPP はソフトガイダンスからハード規制に格上げ。2024-07 ESAs Level 2 RTS で定量基準を明確化。**初の「非金融テック企業が金融規制対象に」**:AWS / Azure / GCP が自動 CTPP 化 → ESAs が直接監督 = EU sovereignty cloud 要求の強化(Gaia-X / EuroStack)を招き、オンショア・データセンター建設ブームを誘発する。[[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概観]] と相まって EU 暗号資産における「業務 + レジリエンス」二軌監督を構成。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

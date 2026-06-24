---
title: FATF Travel Rule · R.16 VASP $1,000 KYC 情報伝達 概観
aliases: [fatf-travel-rule-overview, FATF R.16, VASP travel rule]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [fintech, law, regulation, fatf, travel-rule, vasp, kyc, aml]
sources:
  - https://www.fatf-gafi.org/en/topics/virtual-assets.html
  - https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html
  - https://www.fincen.gov/resources/statutes-and-regulations
  - https://www.fatf-gafi.org/content/dam/fatf-gafi/recommendations/Updated-Guidance-VA-VASP.pdf
  - https://www.notabene.id/travel-rule
status: active
---

# FATF Travel Rule · R.16 VASP $1,000 KYC 情報伝達

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> FATF Recommendation 16 はグローバル VASP 業界の AML/CFT 統一情報伝達基準 —— VASP 送金が USD/EUR 1,000 以上の場合、sender + receiver の KYC 情報共有が必須。1996 BSA Travel Rule を暗号資産に移植したもの。Notabene / TRISA / Sygna / TRP 等の BTS 層は強制コンプライアンス基盤となり —— Travel Rule プロトコルへの接続がなければ VASP 業務資格を得られない。

## Key facts

- FATF 1989 G7 設立 · 40 加盟国 + 9 地域組織 ^[extracted]
- R.15 + R.16 暗号拡張は 2019-06 G20 Osaka summit ^[extracted]
- R.16 閾値:USD/EUR 1,000 グローバル floor ^[extracted]
- 1996 BSA Travel Rule (31 CFR §1010.410(f)) はもともと ≥ $3,000 wire のみカバー ^[extracted]
- 2019-05 FinCEN FIN-2019-G001 が BSA Travel Rule の CVC 適用を明確化 ^[extracted]
- 2024 米国 FATF MER は "Largely Compliant" ^[extracted]
- 2026-Q3 FinCEN は米国閾値を $3,000 から $1,000 に引下案 (FATF と整合) ^[extracted]

## Mechanism / How it works

R.16 は VASP 送金 ≥ USD/EUR 1,000 で以下の共有を要求:**Originator** name + account number / wallet address、**Beneficiary** name + account number / wallet address。VASP-to-VASP の情報共有を強制。最大の技術的課題:CVC 送金はしばしば wallet address に送られ institution には送られない → 「receiving financial institution」概念の欠如により BTS (Business-To-Service) プロトコル層が誕生。

**主要 BTS プロトコル**:
- **Notabene** (米国 2020 · 最大シェア):Bitstamp / Luno / OKX
- **TRISA** (オープンソース · 分散型 TLS):Binance 一部
- **Sygna Bridge** (CoolBitX · アジア太平洋優先):韓国 / 台湾 VASP
- **TRP** (TRP Group · OpenAPI):Coinbase / Kraken / Gemini
- **Shyft** (Token インセンティブ · オンチェーン discovery):初期プレイヤー
- **OpenVASP** (欧州 · EVM-based):初期欧州

相互運用問題:プロトコル相互非互換 → 複数接続または大ネットワーク選択が必須。Notabene + TRP の二プロトコルが 2026 年グローバル VASP 流量の約 80% をカバー。日本 VASP 自主規制側における Travel Rule の落とし込みは [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制概観]]、日本 VASP タイムラインは [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]] を参照。

## Origin & evolution

1996 FinCEN + Fed が BSA Travel Rule (31 CFR §1010.410(f)) を共同発表、もともと ≥ $3,000 wire のみカバー。2019-05 FinCEN FIN-2019-G001 が BSA Travel Rule の CVC 適用を明確化。2019-06 G20 Osaka summit で FATF が R.15 + R.16 暗号拡張を発表 → グローバル floor 確立。2024-12-30 EU TFR 2023/1113 が EU 閾値を EUR 0 に設定 (最厳格)。2026-Q3 FinCEN は米国閾値を $3,000 から $1,000 に引下案 (FATF と整合)。クロスボーダー四層 stack 詳細は [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー stack]] を参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー四層 stack]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
<!-- /wiki-links:managed -->

## Sources

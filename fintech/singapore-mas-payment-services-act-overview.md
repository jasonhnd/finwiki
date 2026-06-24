---
title: Singapore MAS Payment Services Act + SCS フレームワーク概観
aliases: [mas-ps-act-overview, MAS PS Act, Singapore stablecoin, DPT, SCS, DTSP]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [fintech, law, regulation, singapore, mas, stablecoin, dpt, scs]
sources:
  - https://www.mas.gov.sg/regulation/acts/payment-services-act
  - https://www.mas.gov.sg/regulation/payments
  - https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework
  - https://sso.agc.gov.sg/Act/PSA2019
status: active
---

# Singapore MAS Payment Services Act + SCS フレームワーク概観

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> シンガポール MAS Payment Services Act（2019）+ Stablecoin Framework（2023-08 SCS カテゴリ）+ DTSP Regime（2024-04 改正）= アジア最も完成された暗号決済立法スタック。SCS（Single-Currency Stablecoin）カテゴリは 100% reserve + daily attestation + AAA-rated assets を要求し、HKMA より厳しく、なおかつ早い。2026-03 シンガポール - 米国財務省間で MRA 締結 = §501(d) 第一波のアジア入榜。

## Key facts

- PS Act 2019：6 種類の payment service の法的基礎 ^[extracted]
- SCS Framework 2023-08：アジア初の完全な SC サブフレームワーク（HKMA より 2 年先行）^[extracted]
- DTSP Regime 2024-04：「シンガポール法人がグローバル顧客にサービス提供」のグレーゾーンを閉鎖 ^[extracted]
- DPT 主要ライセンス保有者（2026-05）：DBS Vickers / Independent Reserve / HashKey / Coinbase Singapore / Crypto.com / Sygnum Singapore / Anchorage Digital Singapore / StraitsX（Xfers）^[extracted]
- SCS ライセンス保有者：StraitsX XSGD（2023-12）/ Paxos USDP（オフショア子会社申請中）^[extracted]
- 2026-03：Singapore-US MRA 締結 → §501(d) 第一波アジア入榜 ^[extracted]
- 資本 / 流通残高閾値：S$5M（HKMA HKD 100M より遥かに低い）→ 中堅 issuer に優しい ^[extracted]
- 税務：capital gains 0%（individual）^[extracted]

## Mechanism / How it works

**MAS 3 層暗号規制スタック**：
- **PS Act 2019**：6 種類の payment service（Account issuance · domestic/cross-border money transfer · Merchant acquisition · e-money issuance · Digital Payment Token (DPT) service）
- **SCS Framework 2023-08**：ステーブルコインサブフレームワーク · SGD または G10 単一法定通貨にペッグ必須 · 100% reserve · daily attestation · AAA-rated assets · 流通額 ≥ S$5M で MAS license が必要 · 「MAS-regulated SCS」商標表示
- **DTSP Regime 2024-04**：グレーゾーン閉鎖 · 「シンガポール法人が海外サービス提供」をカバー · KYC + AML + Travel Rule の強制

**DPT vs SCS vs USDC の取扱差異**：
- DPT service license：売買 / OTC / ウォレット管理 → Major Payment Institution / Standard Payment Institution
- SCS license：SGD-pegged または G10-pegged ステーブルコインの発行 → MAS-regulated 必須
- シンガポールでの USDC：Circle Singapore（DPT-licensed）経由で流通、ただし USDC 自体の発行は GENIUS §501 規制下にあり MAS SCS ではない

DPT ライセンス体系の詳細な機関階層は [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT ライセンス概観]] 参照。

## Origin & evolution

2019 PS Act 制定により 6 種類の payment service の法的基礎を確立。2020-2022 DPT licensing 始動、Coinbase / Crypto.com / StraitsX 等が順次ライセンス取得。2023-08 SCS Framework 公表（アジア初の完全な SC サブフレームワーク、[[fintech/hkma-stablecoin-licensing-overview|HKMA]] より 2 年先行）。2024-04 DTSP Regime 改正により「シンガポールハブで海外サービス提供」のグレーゾーンを閉鎖、USDT 等の非コンプライアンス勢力がハブ戦略から撤退。2026-03 Singapore-US MRA 締結 → §501(d) 第一波アジア入榜。アジア / グローバル VASP の横断比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリックス]] 参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 戦略的含意 + HK との対比]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコインライセンス概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/circle-usdc-stablecoin|Circle USDC issuer · DPT 流通主体]]
<!-- /wiki-links:managed -->

## Sources

---

**Last refresh** (2026-05-25): refreshed `last_tended` only; added Circle USDC cross-link as DPT-licensed flow context.

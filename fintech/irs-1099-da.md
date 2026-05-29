---
title: IRS 1099-DA · 米国暗号資産税務報告の義務化
aliases: [irs-1099-da, 1099-DA, IRS crypto tax form]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, us, irs, tax, anonymity, defi]
sources:
  - https://www.irs.gov/forms-pubs/about-form-1099-da
  - https://www.irs.gov/pub/irs-drop/td-10000.pdf
  - https://www.federalregister.gov/documents/2024/07/09/2024-14004/gross-proceeds-and-basis-reporting-by-brokers-and-determination-of-amount-realized-and-basis-for
  - https://home.treasury.gov/news/press-releases/jy2110
  - https://www.oecd.org/tax/exchange-of-tax-information/crypto-asset-reporting-framework-and-amendments-to-the-common-reporting-standard.htm
status: candidate
---

# IRS 1099-DA · 米国暗号資産税務報告の義務化

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> IRS Form 1099-DA(Digital Assets)は米国の暗号資産強制税務報告フォームであり、2025-01 に発効、2026 年申告年度から本格稼働する。すべての broker(取引所/ウォレット/DeFi フロントエンド/一部決済チャネルを含む)は顧客の暗号取引を IRS に報告する義務を負う。CARF(OECD クロスボーダー)との協調 = **クロスボーダー暗号匿名性の完全終焉**。1099-DA + CARF + GENIUS §501 のチェーンレベル freeze = 三重監視ループ。

## Key facts

- IRS 1099-DA 2023 final rule + 2024 amendments + 2025-01 発効 ^[extracted]
- 2026 年申告年度から本格稼働(2027-04 が申告期限)^[extracted]
- DeFi broker の定義は 2024-2026 にかけて複数回改定され、現時点では完全分散型プロトコルは一部免除 ^[extracted]
- CARF との協調により OECD 約 50 か国をカバー ^[extracted]
- broker の範囲:取引所/ウォレット(custodial は必須)/DeFi フロントエンド/SC issuer/決済プロセッサー ^[extracted]
- 報告内容:取引額 + 時間 + 資産種別 + 顧客 KYC + 取得原価 + 保有期間 + 推定キャピタルゲイン ^[extracted]
- 唯一の免除:完全分散型プロトコル + admin key 不在 + フロントエンド企業不在 ^[extracted]

## Mechanism / How it works

**broker の定義(IRS 2023 final rule + 2024 amendments)**:
- 取引所(Coinbase / Kraken / Binance.US 等)
- ウォレットサービス(custodial は必須 · non-custodial は一部)
- DeFi フロントエンド(争点あり → 2026 final rule で一部免除)
- ステーブルコイン発行者(Circle / Tether の一部)
- 決済プロセッサー(Stripe Bridge / Privy 等)
- クロスボーダー取引(CARF と協調)

**CARF との協調(クロスボーダー匿名性の終焉)**:
| 軸 | 1099-DA(米国内) | CARF(OECD クロスボーダー) |
|---|---|---|
| 適用 | 米国 broker | グローバル ~50 か国の broker |
| 報告先 | IRS | 各国税務当局間で相互交換 |
| 開始 | 2025-01 | 2026-2027 に各国が段階的に |
| 連携 | 重複により米国顧客のクロスボーダー部分もカバー | グローバル暗号 KYC を閉ループ化 |

**三重監視ループ**:1099-DA(米国内税務)+ CARF(クロスボーダー情報交換)+ GENIUS §501(チェーンレベル freeze)= 2026 年以降、いかなる「暗号匿名性」のナラティブも無効化。チェーンレベル執行の実例は [[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]] を参照。

## Origin & evolution

2014 IRS Notice 2014-21 で暗号資産を property と定義 → キャピタルゲイン報告を強制化。2021 Infrastructure Investment and Jobs Act で 1099-DA の法的根拠を創設。2023 IRS final rule + 2024 amendments で broker 定義を精緻化。2025-01 に 1099-DA が発効。2024-2026 にかけて DeFi の定義は複数回改定され、現時点では完全分散型プロトコルは一部免除。OECD CARF との協調(2026-2027 に各国が段階的に実装、詳細は [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 暗号匿名性の終焉]] を参照)= グローバル暗号税務の透明化。米国 VASP 規制の全体像は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 暗号匿名性の終焉]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概要]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概要]]
<!-- /wiki-links:managed -->

## Sources

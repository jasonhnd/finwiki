---
title: HKMA ステーブルコイン準備金要件 · FRTB との境界
aliases: [hk-frtb-reserve, HKMA stablecoin reserve, HK FRTB boundary]
domain: fintech
created: 2026-05-18
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-10-30
confidence: confirmed
tags: [fintech, law, regulation, hk, hkma, stablecoin, reserve, frtb]
sources:
  - https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/
  - https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf
  - https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Explanatory_Notes_on_Licensing_of_Stablecoin_Issuers_eng.pdf
  - https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf
  - https://www.bis.org/bcbs/publ/d457.htm
status: active
---

# HKMA ステーブルコイン準備金要件 · FRTB との境界

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]], [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB overview]], and [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole comparison]].

> [!info] TL;DR
> 香港の Stablecoins Ordinance は 2025-08-01 に施行され、HKMA の監督指針は完全裏付け、高品質・高流動性の準備資産、通貨ミスマッチ管理、分別・信託保全、定期的な独立 attestation、年次監査、および最低 HK$25 million の払込資本を要求する。これは stablecoin issuer rule であり、銀行の trading book market-risk framework である FRTB を issuer reserve に直接適用した制度ではない。指針に出る Banking (Capital) Rules の参照は、一定の債務証券を信用リスク標準的手法の 0% risk weight で適格化する条件であり、「FRTB SA 適用」と同義ではない。 ^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf] ^[https://www.bis.org/bcbs/publ/d457.htm]

## 確認できる準備金要件

HKMA の最終 Supervisory Guideline（draft ではない）に基づく。

- 各 stablecoin の準備資産 pool の時価は、流通残高の額面以上を常時維持する。
- リスクに応じて full-backing を超える適切な buffer を持つ。
- 適格資産は、現金、満期 3 か月以内の銀行預金、一定の市場性債券、適格担保付き overnight reverse repo の受取金、専用 investment fund、または HKMA が認める資産。
- 市場性債券は、政府・中央銀行等による発行または保証、残存 1 年以内、高流動性などの条件を満たす。
- 原則として reserve currency と reference currency を一致させる。例外は HKMA の事前書面承認が必要。
- reserve pool は他の pool と分離し、issuer の他の資産から分け、他債権者の請求から保護する。

^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf]

## 開示・監査・資本

- 日次で流通額面、準備資産の時価・構成 statement を作成し、HKMA の要求に応じて提出可能にする。
- HKMA と別途合意しない限り、同情報を週次で HKMA に報告し、ウェブサイトを更新する。
- HKMA が認める qualified independent external auditor による定期 attestation を行い、報告書を HKMA に提出し公開する。頻度は HKMA が認める頻度であり、一律の「月次」とは断定しない。
- 年次財務監査は reserve assets を対象に含める。
- 最低払込資本は HK$25 million、または HKMA が認める同等の financial resources。個別 licence condition により追加資本を要求しうる。

^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf]

## 要件マップ

下表は最終指針の reserve、reporting、capital 各節と FRTB の制度境界を対応させたもの。 ^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf] ^[https://www.bis.org/bcbs/publ/d457.htm]

| 項目 | HKMA stablecoin issuer rule | FRTB との関係 |
|---|---|---|
| Full backing | 額面以上の reserve market value を常時維持 | issuer reserve 自体への FRTB 適用ではない |
| 市場性債券 | 残存 1 年以内、0% credit-risk weight 等の適格条件 | credit-risk eligibility reference を FRTB market-risk charge と混同しない |
| 通貨リスク | 原則 reference currency と reserve currency を一致 | mismatch は issuer risk-management 問題 |
| 独立検証 | 定期 attestation と年次監査 | bank trading-book capital calculation とは別 |
| 最低資本 | HK$25 million または同等額、追加条件あり得る | 原文の HK$100 million 説は誤り |

## FRTB ではない理由

FRTB は Basel Committee の trading-book market-risk 改革であり、銀行の market-risk capital を扱う。HKMA の stablecoin guideline は licensed issuer の reserve quality、liquidity、custody、redemption、governance を扱う。銀行が reserve custodian、deposit taker、または asset holder として関与する場合、銀行側の prudential rules が別途問題になり得るが、それは issuer reserve regime 全体を「FRTB framework」と呼ぶ根拠にはならない。

以前の「アジア初 FRTB 対応 stablecoin reserve」「HKMA が reserve を trading book とみなす」「2026-04 FRTB consultation」といった記述は、引用された公式資料で確認できないため撤回した。

## ライセンス日付の修正

HKMA の 2025 Annual Report は、制度が 2025-08-01 に施行され、最初の 2 issuer licences が 2026-04 に公表されたと記録する。以前の 2026-05-21 説や 9 社から 2 社という数値は採用しない。 ^[https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコイン・ライセンス概観]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概観]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極比較]]
<!-- /wiki-links:managed -->

## Sources

- HKMA · Stablecoin issuers: https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/
- HKMA · Guideline on Supervision of Licensed Stablecoin Issuers: https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf
- HKMA · Explanatory Note on Licensing: https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Explanatory_Notes_on_Licensing_of_Stablecoin_Issuers_eng.pdf
- HKMA · 2025 Annual Report, International Financial Centre: https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf
- BCBS · Minimum capital requirements for market risk: https://www.bis.org/bcbs/publ/d457.htm

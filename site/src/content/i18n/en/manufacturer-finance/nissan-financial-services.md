---
source: manufacturer-finance/nissan-financial-services
source_hash: b58be4ece16e6d8c
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Nissan Financial Services (Nissan captive auto-finance arm / Nissan Motor Acceptance Company)"
translated_at: 2026-07-29T00:29:28.090Z
---

# Nissan Financial Services (日産系 captive auto-finance arm / Nissan Motor Acceptance Company)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] and is the third pillar of the Japanese-OEM auto-captive trio alongside [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] and [[manufacturer-finance/honda-finance|Honda Finance]]. Read it against [[manufacturer-finance/toyota-motor|Toyota Motor]] for the parent-OEM contrast, and against [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], [[manufacturer-finance/sony-group-finance-arm|Sony FG]], [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] for peer industrial-conglomerate finance arms. For the captive-finance mechanism itself see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and for the dealer-inventory side see [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]. The securitization layer Nissan's captive funds through is documented in [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the broader regulatory boundary.

## TL;DR

The Nissan-camp captive auto-finance centers on **Nissan Motor Acceptance Company LLC (NMAC) in the Americas** and the domestic **Nissan Financial Services Co., Ltd. (NFS)**. From a manufacturing standpoint, the axes worth reading are **(1) the significance of managing sales finance separately from manufacturing and sales; (2) the connection between retail / lease / inventory finance; (3) funding via corporate bonds, bank borrowings, and securitization; and (4) the Keepwell Agreement with the parent company**. Nissan continuously discloses the current structure and funding policy of its sales finance companies in its official IR.

## 1. Corporate structure and the manufacturing standpoint

| Item | Details |
|---|---|
| Parent | Nissan Motor Co., Ltd. / Nissan Motor Co., Ltd. (TSE PRIME 7201) |
| Americas captive | Nissan Motor Acceptance Company LLC (NMAC) |
| Former name / reorganization | Nissan Motor Acceptance Corporation → as of 2022-04-01 reorganized and renamed to a Delaware LLC, "Nissan Motor Acceptance Company LLC" (the former base was California) |
| Luxury-brand division | Infiniti Financial Services (IFS) — a DBA / division of NMAC |
| Americas oversight | Under Nissan North America, Inc. (NNA), supporting NNA's sales activities from a financial standpoint |
| Domestic captive | Nissan Financial Services Co., Ltd. (NFS, 100% Nissan-group ownership) |
| Domestic captive's business | Auto credit, car leasing, cards, insurance agency, inventory finance |
| Group finance | Nissan Group Finance Co., Ltd. (100% Nissan-group ownership) |
| Main business | retail installment, leasing, dealer inventory finance (floorplan / wholesale) |
| Credit support | NFS, NMAC, etc. have concluded a Keepwell Agreement with Nissan Motor |

Sources: ^[Nissan「Major Subsidiaries and Affiliates in Japan」(2026-03-31): https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/; Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/; Nissan FY2025 Annual Securities Report: https://www.nissan-global.com/EN/IR/FINANCIAL_RESULTS/ASSETS/FR/2025/PDF/fr2025.pdf.]

### Group structure from a manufacturing standpoint

```
Nissan Motor Co., Ltd. (日産自動車 7201, 製造業本体)
  ├── 四輪 (Nissan / Infiniti ブランド) 製造販売
  ├── R&D / 生産 / グローバル販売網
  ├── Nissan North America, Inc. (NNA, 米州統括)
  │     └── Nissan Motor Acceptance Company LLC (NMAC)
  │           ├── 小売割賦・リース (Nissan ブランド)
  │           ├── Infiniti Financial Services (IFS, 高級ブランド部門)
  │           ├── ディーラー floorplan (wholesale) 与信
  │           └── 証券化子会社 (NARC / NARC II / NARF)
  └── 国内: 日産系オートクレジット・リース
```

### Relationship with Nissan Motor parent

- Because NMAC and domestic Nissan-camp finance are consolidated subsidiaries, they are disclosed on an aggregated basis as Nissan Motor's **"Sales Financing business" segment** in the securities reports.
- In residual-value loans (residual-value credit) and leases, Nissan Motor's parent **fixes the "new-car sales profit" first**, while the used-car price-fluctuation risk is concentrated on the captive's (NMAC / domestic Nissan-camp) balance sheet. This is the same captive design as [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] / [[manufacturer-finance/honda-finance|Honda Finance]].
- NMAC buys new- and used-car retail installment contracts and lease contracts from dealers and simultaneously extends credit on **the dealer's inventory itself (floorplan)**. The structure in which the captive holds both the upstream (inventory) and downstream (consumer) of sales is the core of the OEM's sales-channel dominance. For the general mechanism, see [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]].

## 2. Product / business lines × significance from a manufacturing standpoint

| Business line | Details | Significance from Nissan Motor's manufacturing standpoint |
|---|---|---|
| Auto loans (new and used cars) | Americas, domestic | Maintaining the new-car sales channel, dealer loyalty |
| Leasing (individual residual-value credit + corporate fleet) | Centered on the Americas, domestic | Residual-risk concentration, controlling the replacement cycle |
| Infiniti Financial Services (IFS) | Americas (luxury brand) | Credit and product differentiation for Infiniti customers |
| Dealer inventory finance (floorplan / wholesale) | Americas, domestic | Dealer support, adjusting production and shipment timing |
| Bundled auto insurance and extended warranty | Americas | Longer customer relationships |

Sources: ^[Nissan「Major Subsidiaries and Affiliates in Japan」: https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/; Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/.]

### Connection to auto ABS

Nissan explicitly states a policy of diversifying its sales finance companies' funding sources across capital markets, bank borrowings, and securitization of financial assets. Whether receivables are derecognized in accounting upon securitization depends on the requirements of the applicable standards; ABS issuance alone does not automatically achieve off-balance-sheet treatment. For details, see [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]].

## 3. Key metrics (qualitative + public-basis)

| Metric | Details | Source |
|---|---|---|
| NMAC legal form | Delaware LLC (reorganized 2022-04-01) | NMAC company profile |
| Luxury-brand division | Infiniti Financial Services (IFS) | Nissan USA / NMAC |
| Americas business | NMAC is responsible for the US sales finance business | Nissan IR |
| Domestic business | NFS is responsible for auto credit, leasing, cards, insurance agency, and inventory finance | Nissan company profile |
| Domestic ownership | NFS / Nissan Group Finance are both 100% Nissan-group owned | Nissan company profile |
| Credit support | Keepwell Agreement between NFS, NMAC, etc. and Nissan Motor | Nissan IR / FY2025 securities report |
| Funding policy | Diversified use of capital markets, bank borrowings, and securitization of financial assets | Nissan financial plan |

Sources: ^[Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/; Nissan「Major Subsidiaries and Affiliates in Japan」: https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/; Nissan「Financial Plan」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/PLAN/; Nissan FY2025 Annual Securities Report: https://www.nissan-global.com/EN/IR/FINANCIAL_RESULTS/ASSETS/FR/2025/PDF/fr2025.pdf.]

## 4. Strategy (Residual Value + EV + Brand-Split + Wholesale)

- **Residual-value risk management**: Residual-value credit and leases are directly tied to the used-car market price, and the technological renewal of BEVs (Leaf / Ariya, etc.) (battery degradation, generational change) makes residual-value assessment difficult. The captive updates its residual-value model with used-car price data. For the general mechanism, see the residual-value section of [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]].
- **Financial separation of the Infiniti brand**: For the luxury brand Infiniti, it sets up **Infiniti Financial Services (IFS)** as an NMAC division, differentiating credit and product design from the Nissan mass brand. This is the same brand-split as Honda's Acura Financial Services.
- **Scale of the Americas captive**: In the US market, it is on a scale comparable with Ford Motor Credit / Ally Financial and is an issuer in the US auto-ABS market. That it runs securitization through dedicated SPVs is also common with the Toyota / Honda captives.
- **Emphasis on Wholesale (floorplan)**: NMAC carries not only consumer-facing retail but also the wholesale credit on dealer inventory, supporting the entire sales network from a financial standpoint. For details, see [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]].
- **Captive in the EV / mobility era**: The trend of redesigning captive products to match the shift from ownership to usage (subscription, leasing) is in the same direction as Toyota's KINTO and Honda.

## 5. Regulation and policy

- **Domestic**: Financial Services Agency (FSA), the Money Lending Business Act, the Installment Sales Act, the Insurance Business Act. Domestic Nissan-camp finance is under their supervision.
- **US**: the Consumer Financial Protection Bureau (CFPB), state financial supervision. NMAC conducts securitization disclosure as a registered issuer that raises funds via ABS / bonds.
- **Recent policy topics**:
  - 2024– transparency of EV residual-value assessment models (consumer protection)
  - 2025– the US CFPB's trend of strengthening APR disclosure in auto finance
  - 2024– personal-data protection in connected-car data × finance
  - trends in the ABS market (securitization regulation) for the captive's funding

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/toyota-motor|Toyota Motor]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] · [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/sony-group-finance-arm|Sony FG]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] · [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- Nissan Motor Co., Ltd.「Investor Relations」: https://www.nissan-global.com/EN/IR/
- Nissan「Major Subsidiaries and Affiliates in Japan」: https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/
- Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/
- Nissan「Financial Plan」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/PLAN/
- Nissan USA「Finance & Online Payment Options」: https://www.nissanusa.com/finance/financing-online-bill-payment-options.html
- NMAC (Nissan Finance) アカウント管理ポータル: https://www.nissanfinance.com/s/
- Nissan「EMTN Program」開示 (NMAC / NARC / NARC II / NARF 記載): https://www.nissan-global.com/EN/DOCUMENT/PDF/emtn_program_06.pdf
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] Proofreading status
> confidence: **likely**. As of 2026-07-29, re-verified Nissan's list of major affiliates as of 2026-03-31, the sales finance company page, the funding policy, and the FY2025 annual securities report. Removed the old EMTN SPV chronology and the unsubstantiated competitor rankings from the main tables.

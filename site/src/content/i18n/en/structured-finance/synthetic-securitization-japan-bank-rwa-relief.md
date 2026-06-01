---
source: structured-finance/synthetic-securitization-japan-bank-rwa-relief
source_hash: b48f54355b9c15fc
lang: en
status: machine
fidelity: ok
title: "Synthetic securitisation in Japan — bank RWA relief via CLN / CDS on reference loan portfolios"
translated_at: 2026-06-01T04:15:40.135Z
---

# Synthetic securitisation in Japan — bank RWA relief via CLN / CDS on reference loan portfolios

## TL;DR

Synthetic securitisation — where a bank transfers credit risk on a reference loan portfolio to outside investors via a **credit-default swap (CDS)** or **credit-linked note (CLN)** structure without selling the underlying loans — is the modern Basel III tool for **risk-weighted asset (RWA) relief** on bank balance sheets. In Japan, the three megabanks ([[JapanFG/mufg|MUFG]], [[JapanFG/smfg|SMFG]], [[JapanFG/mizuho-fg|Mizuho FG]]) have used synthetic securitisations selectively to free capital on **corporate-loan**, **project-finance**, and **infrastructure-finance** portfolios. Compared to European peer-bank deal flow, Japanese megabank synthetic-SRT (Significant Risk Transfer) issuance has been smaller and less frequent — Japanese banks historically have had ample capital buffers and have only intermittently needed RWA-relief deals. Investor base is dominated by global specialist credit-investor funds (hedge funds, structured-credit funds, some pension funds), which can absorb the junior or mezzanine risk-transfer tranches. [[structured-finance/credit-rating-methodology-jcr-r-and-i|FSA capital-relief approval]] requires the deal to demonstrate true credit-risk transfer under specific accounting and capital tests.

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **bank-capital-management** securitisation node. Read against [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] (true-sale ABS as the alternative to synthetic), [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] for the legal structure layer, and [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the underlying credit-derivative infrastructure. System frame: [[finance/INDEX|finance index]] for the broader bank-capital context, and institution anchors: [[JapanFG/mufg|MUFG]], [[JapanFG/smfg|SMFG]], [[JapanFG/mizuho-fg|Mizuho FG]].

## 1. The problem — bank capital constraints on loan growth

Under Basel III rules, banks must hold regulatory capital against the credit risk of their loan book:
- Corporate loans typically carry 50–100%+ risk-weight (varying by borrower rating)
- Capital ratios (CET1, Tier 1, Total) set the maximum leverage
- High-quality loans to lower-rated borrowers consume more capital than higher-rated borrowers

For a megabank seeking to grow lending volume in a particular sector or geography (e.g., project-finance lending into infrastructure, leveraged-finance corporate loans, or trade finance into emerging markets), **the RWA constraint can bite before the funding constraint**.

## 2. The two paths to RWA relief

| Path | Mechanism | Trade-off |
|---|---|---|
| **True-sale securitisation** | Sell the underlying loans to an SPV; loans leave the balance sheet | Customer-relationship implications; servicing handover; possible accounting/disclosure complexity |
| **Synthetic securitisation** | Keep loans on balance sheet; transfer credit risk only via CDS / CLN | Customer relationship preserved; simpler operational handover; but capital relief depends on regulatory approval of risk transfer |

For most large bank-customer relationships (where the bank wants to keep the relationship live for future lending, advisory, and cross-sell), synthetic securitisation is preferred — it relieves capital while preserving the customer-facing loan.

## 3. Synthetic securitisation structure

```
+---------------------------------+
|       Originating bank          |
|  - Holds reference loan         |
|     portfolio on balance sheet  |
|  - Pays protection premium      |
+----+----------------------+----+
     |                      |
   CDS/CLN              Capital relief
   protection           (FSA-approved
   premium              SRT)
     |                      
     v                      
+----+----------------------------+
|   Protection-selling SPV       |
|    or direct investor          |
|  - Funds collateral by issuing |
|     CLN tranches to investors  |
|  - Bears reference-portfolio    |
|     credit loss up to defined   |
|     attachment point            |
+----+----------------------+----+
     |                      |
   Junior tranche       Senior tranche
   (first-loss to        (higher loss
    investor)            attachment)
     |                      |
     v                      v
+----+-------+    +---------+--------+
|Specialist  |    |Pension /         |
|credit fund |    |insurer / less    |
|(hedge fund)|    |risk-tolerant inv |
+------------+    +------------------+
```

Key structural elements:
- **Reference portfolio**: a defined pool of bank loans (e.g., 100–300 named corporate borrowers, or a portfolio of project-finance loans, or a thematic basket like trade-finance loans)
- **Tranching**: typically a junior / first-loss tranche (most expensive protection but greatest capital-relief benefit), a mezzanine tranche, and a senior tranche (often retained by the bank or sold to lower-risk investors)
- **Funded vs unfunded**: CLN is "funded" (investor pays cash up-front; SPV holds collateral); CDS can be "unfunded" (bilateral; counterparty-credit-risk considerations apply)
- **Tenor**: typically 5–7 years matching average loan-portfolio life
- **Reference obligations**: usually a static pool, sometimes a replenishable pool

## 4. FSA capital-relief approval — the structural test

For the originating bank to count synthetic securitisation as **true risk transfer** (and thus take RWA reduction), the deal must satisfy regulatory tests:
- Significant Risk Transfer (SRT) requirement — meaningful credit risk must have moved off the bank's balance sheet
- The bank must not retain disproportionate retained tranche / first-loss
- The protection seller (SPV / counterparty) must be reliable for the protection it sells
- Accounting treatment must reflect the risk-transfer (or there must be specific Basel-allowed deconsolidation treatment)

The FSA reviews each deal individually for SRT compliance. This is a meaningful structuring friction — deals that work in EU markets may need adjustment for Japanese approval.

## 5. Japanese megabank synthetic-SRT activity

Japanese megabank synthetic-SRT issuance has been **smaller and less frequent** than European peer-bank flow:
- European banks (BNP Paribas, Deutsche Bank, Santander, Crédit Agricole, Barclays, others) have been heavy users of synthetic-SRT for over a decade, with frequent multi-billion-euro deals
- Japanese megabanks have used synthetic structures more selectively, partly because:
  - Capital ratios have been comfortably above regulatory minimums
  - Loan growth has been moderate, not requiring constant capital-relief deal flow
  - Cultural / relationship factors favour retaining loans visibly on the balance sheet
- When megabanks have issued synthetic-SRT deals, the reference portfolios have tended to be **project-finance loans, infrastructure loans, leveraged-finance corporate loans, or specific geographic-exposure books** rather than core domestic-corporate lending

The market has been growing in recent years as Basel finalisation (Basel III/IV, output floor) increases capital pressure even on well-capitalised banks.

## 6. Investor base

The protection-seller side is dominated by:
- **Specialist credit-investor funds** (hedge funds, structured-credit funds, dedicated SRT-investor funds)
- **Pension funds and insurers** (some) for the more senior tranches
- **Sovereign wealth funds** for selected large-ticket transactions
- **Fund-of-funds** vehicles aggregating investor commitments

Japanese investor base for synthetic-SRT is small — most investors are global firms with US / EU teams that book SRT transactions from offices in London, NY, or Hong Kong.

## 7. Comparison to true-sale ABS

| Dimension | True-sale ABS | Synthetic securitisation |
|---|---|---|
| Loan ownership | Transferred to SPV | Retained by bank |
| Customer relationship | Servicer-managed (often back to originating bank) | Fully retained |
| Capital relief | Full (loan off balance sheet) | Partial (RWA reduction) |
| Funding | Yes (cash from sale) | None (or partial via funded CLN structure) |
| Operational complexity | Higher (loan transfer, servicer handover) | Lower (no loan transfer) |
| Investor base | Banks, insurers, broad fixed-income | Specialist credit funds (often US / EU) |
| Tax / accounting | True-sale accounting | Derivative-based accounting |
| Typical use | Funding + capital | Capital-only |

For pure RWA management on a relationship-sensitive corporate loan book, synthetic is the clear choice. For funding diversification on a granular consumer loan book, true-sale is the clear choice.

## 8. Recent illustrative themes (descriptive only)

Without naming specific transactions, recent themes in Japanese megabank synthetic-securitisation issuance include:
- **Project-finance and infrastructure-loan portfolios** — useful because these loans are large-ticket and capital-intensive
- **Leveraged-finance corporate loan portfolios** — capital-intensive, with cyclical credit exposure that fund investors are willing to take
- **Cross-border trade-finance portfolios** — often regulatory-capital-driven for political-risk-weighted lending
- **ESG-linked variants** — emerging interest in structures tied to sustainability metrics

The pace of new issuance has been increasing as Basel finalisation effective dates approach.

## 9. Counterpoints

- **"Regulatory-capital arbitrage"** — Critics argue synthetic-SRT can be used to optimise reported capital ratios without materially changing the bank's risk profile if the retained portions and first-loss positions are structured to flatter regulatory ratios
- **"Concentration in specialist investors"** — The SRT-investor base is small; if global SRT-investor capital tightens, Japanese megabanks may struggle to place new issuance economically
- **"FSA approval friction"** — The case-by-case SRT-approval process creates execution uncertainty; deals can be re-structured during approval, affecting economics
- **"Counterparty-credit risk on unfunded structures"** — Unfunded CDS structures expose the bank to credit risk on the protection-seller; funded CLN structures avoid this but require larger investor capital
- **"Tail-risk transfer questioned"** — In severe credit stress, whether the SPV / fund counterparty can actually pay claims is a real concern; AIG-style protection-seller failure is the classic example
- **"Limited public disclosure"** — Synthetic-SRT deals are often not publicly announced or are described in deliberately vague terms in Pillar 3 disclosures, making market analysis difficult

## 10. Open questions

- The pace of Japanese megabank synthetic-SRT issuance under Basel finalisation pressure (output-floor effective dates, etc.)
- Whether [[JapanFG/japan-post-bank|Japan Post Bank]] or large regional banks issue synthetic-SRT (so far the activity is concentrated in the megabanks)
- Whether the FSA approval process becomes more standardised over time, reducing structuring friction
- Whether Japanese institutional investors (life insurers, pension funds) develop appetite for the senior tranches of synthetic-SRT deals
- The interaction between synthetic-SRT and [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft]] / [[structured-finance/ship-financing-japan-megabank|ship]] / [[structured-finance/project-finance-spv-japan-renewable|project-finance]] loan books — capital-intensive specialty loan portfolios are natural candidates
- The treatment of ESG-linked synthetic-SRT structures and whether they gain regulatory or investor-demand traction

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit]]
- [[structured-finance/repackaging-note-japan|repackaging note]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japan CLO investment]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing]]
- [[structured-finance/ship-financing-japan-megabank|ship financing]]
- [[structured-finance/project-finance-spv-japan-renewable|renewable project finance]]
- [[structured-finance/infrastructure-finance-spv-japan|infrastructure finance SPV]]
- [[structured-finance/npl-securitization-japan|NPL securitisation Japan]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch/Moody's/S&P Japan criteria]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]] · [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/norinchukin|Norinchukin]] · [[JapanFG/japan-post-bank|Japan Post Bank]] · [[JapanFG/japan-exchange-group|JPX]]

## Sources

- FSA capital-adequacy framework disclosures
- Megabank IR / Pillar 3 disclosures — MUFG (https://www.mufg.jp/english/), SMFG (https://www.smfg.co.jp/english/), Mizuho FG (https://www.mizuho-fg.com/index.html)
- BOJ Financial System Report — https://www.boj.or.jp/en/
- JCR / R&I credit-linked note rating commentaries
- BIS Basel framework documentation — https://www.bis.org/

---

> [!info] Review status
> confidence: **likely**. Synthetic-SRT mechanics, Basel-rule requirements, and Japanese-megabank relative activity vs European peers are well-documented in BIS papers and bank IR disclosures. Specific Japanese-megabank transactions are abstracted because public disclosure is often deliberately vague at the deal level. The European-peer comparison is industry-standard discussion.

---
source: structured-finance/repackaging-note-japan
source_hash: eb11f1726543d0fa
lang: en
status: machine
fidelity: ok
title: "Repackaging note in Japan (repackaged bonds) — SPV-wrapped bond / loan repackaging"
translated_at: 2026-06-01T04:15:40.106Z
---
# Repackaging note in Japan (repackaged bonds) — SPV-wrapped bond / loan repackaging

## TL;DR

A **repackaging note (repackaged bond, "repack")** is a structured-credit product in which an [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV]] purchases an underlying debt asset (a bond, a loan, a basket of bonds), enters into derivative overlays (currency swap, interest-rate swap, sometimes credit-default swap), and reissues new notes to investors with a different combination of currency, coupon structure, maturity, or credit profile. The Japanese market has both **institutional repacks** (typically large-ticket, sold by megabank-securities arms and foreign investment banks to Japanese life insurers, regional banks, [[JapanFG/japan-post-bank|JPost]], pension funds, asset managers — converting USD corporate bonds into JPY fixed-rate notes, for example) and **retail repacks** (smaller-denomination, distributed through retail brokerage networks of [[JapanFG/nomura-securities|Nomura]], [[JapanFG/daiwa-securities|Daiwa]], regional securities firms — typically high-coupon notes linked to FX or rate triggers, often involving emerging-market sovereign bond underlying). The dealer franchise is split between **Japanese megabank securities subsidiaries** ([[JapanFG/mufg-securities|MUFG MS]], [[JapanFG/smbc-nikko|SMBC Nikko]], [[JapanFG/mizuho-securities|Mizuho Securities]]) and **foreign investment banks** (Goldman, Morgan Stanley, J.P. Morgan, Citi, BNP Paribas, others) which were historically the originators of the repack franchise in Japan.

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **derivative-overlay-style structured-product** node. Read against [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] for the legal structure, [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] for the rating-pass-through dynamics, and [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for credit-derivative-wrapped variants. System frame: [[finance/INDEX|finance index]] for the broader credit-market context. Related: [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] (repack is a structurally distinct product but uses similar SPV / rating infrastructure).

## 1. The repack — basic mechanics

```text
Underlying asset
(e.g., USD investment-grade
 corporate bond bought
 from secondary market)
        |
        v
+---------------------------------+
|      Repackaging SPV            |
|       (TK / GK or cell of       |
|        master-trust)            |
|  - Buys underlying bond         |
|  - Enters cross-currency swap   |
|     (pays USD coupon, receives  |
|     JPY coupon)                 |
|  - Enters interest-rate swap   |
|     (optional, e.g., fixed↔FRN) |
|  - Issues new notes in JPY     |
+----+-----------+----------+----+
     |           |          |
   Coupon /    Swap MTM    Notes
   principal    flows       proceeds
     |           |          |
     v           v          v
+----+----+  +---+-----+ +----+----+
|Investor|   |Swap    | |Investor|
|notes   |   |counter-| |        |
|        |   |party   | |        |
+--------+   +--------+ +--------+
```

Key features:
- **Underlying asset** is typically pulled from a buying dealer's inventory or from the open market
- **Derivative overlays** transform the cash-flow profile to investor demand (currency, coupon shape, callability)
- **Note investors** see a yen-denominated (or other-target-currency-denominated) note with the credit risk of the underlying issuer
- **Swap counterparty** is typically the dealer or an affiliate, providing the hedging infrastructure
- **Rating** of the note typically passes through the rating of the underlying bond (subject to swap-counterparty risk considerations)

## 2. Institutional vs retail repacks

| Dimension | Institutional repack | Retail repack |
|---|---|---|
| Ticket size | JPY several billion to tens of billions | JPY ~1m to several hundred million per investor |
| Underlying | Large IG corporate bond, sometimes sovereign | Often emerging-market sovereign bond, sometimes structured equity-linked |
| Investor | Life insurer, regional bank, JPost, pension, asset manager | Retail HNW via brokerage, regional securities customer base |
| Coupon | Often fixed or simple FRN | Often high coupon with FX / rate trigger |
| Distribution | Direct to institution by dealer | Brokerage network |
| Dealer | Megabank securities + foreign IB | Megabank + Nomura / Daiwa + regional securities |
| Disclosure | Institutional disclosure standards | Retail disclosure standards (more prescriptive) |
| Risk to investor | Underlying credit, swap-counterparty, principal-protection | Adds FX / rate trigger risk, sometimes principal-at-risk |

The retail repack market in Japan is particularly large and has historically been a meaningful distribution channel for emerging-market sovereign credit (Turkish, South African, Brazilian, Mexican sovereign bonds repackaged into yen notes).

## 3. Use cases — what gets repackaged

| Use case | Example structure | Investor demand driver |
|---|---|---|
| **USD bond → JPY note** | Buy USD IG corp bond, cross-currency-swap to JPY, issue JPY note | Yen-funded investor wants exposure without FX risk |
| **Fixed → floating** | Buy fixed-coupon bond, IRS to floating, issue FRN | Investor wants FRN exposure to underlying credit |
| **Long → short** | Buy 10y bond, issue 3y note with rollover swap or callable | Investor wants shorter-tenor exposure |
| **Single issuer → basket** | Pool several bonds in SPV, issue tranched notes | Diversification / yield enhancement |
| **CDS-wrapped** | Buy reference bond, layer CDS, issue credit-protected note | Credit-protection structuring |
| **EM sovereign retail** | Buy EM sovereign bond, FX swap, issue high-coupon JPY note (often with FX-trigger early-redemption feature) | Retail demand for yield with sovereign-credit exposure |

## 4. Dealer franchise — megabank securities vs foreign IB

**Foreign investment banks** (Goldman, Morgan Stanley, J.P. Morgan, Citi, BNP Paribas, Société Générale, others) were historically the originators of the repack franchise in Japan — they brought the structuring expertise, the derivative infrastructure, and the cross-currency-swap capacity that made the products feasible.

**Japanese megabank securities subsidiaries** built repack businesses over time:
- [[JapanFG/mufg-securities|MUFG Morgan Stanley Securities]] (joint venture)
- [[JapanFG/smbc-nikko|SMBC Nikko Securities]]
- [[JapanFG/mizuho-securities|Mizuho Securities]]

The split today is roughly:
- Institutional repack: foreign IB strong in cross-currency complex deals; Japanese megabank securities strong in simpler institutional repackages and in relationship-driven placements
- Retail repack: Japanese securities firms ([[JapanFG/nomura-securities|Nomura]], [[JapanFG/daiwa-securities|Daiwa]], regional brokerages) dominate distribution

## 5. SPV / legal structure

Most Japanese-distributed repacks use one of:
- **TK / GK structure** ([[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]) for domestic-law SPV
- **Cayman / Jersey SPV** with note issuance into Japanese investor base via private placement
- **Multi-issuance master-trust** structure where one SPV issues multiple series of notes against different underlying assets

The structuring choice depends on tax efficiency, investor base, and dealer preference.

## 6. Rating treatment

Rating agencies ([[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] and the global agencies) typically rate a repack at:
- **Pass-through rating** of the underlying bond, **adjusted for swap-counterparty risk**
- If the swap-counterparty is rated equal to or higher than the underlying, the repack note typically gets the underlying rating
- If the swap-counterparty is rated lower, the repack note may be rated at the lower of the two

This is why the dealer's own credit rating matters for repack issuance — a higher-rated dealer can offer repacks that retain the underlying bond's rating.

## 7. The post-2008 evolution

The 2008 crisis exposed several repack risks:
- **Swap-counterparty failure** — Lehman's bankruptcy triggered repack-note disputes where Lehman was the swap counterparty
- **Collateral disputes** — Some SPV collateral arrangements were litigated
- **Investor losses** — Some retail-distributed repacks with EM exposure suffered material losses

Post-2008 reforms:
- Standard CSA (collateral support annex) on swap counterparties
- Stronger SPV-level collateral segregation
- Tighter disclosure standards
- FSA scrutiny of retail repack distribution practices

The repack market continued post-2008 but with more conservative structuring and clearer regulatory boundaries.

## 8. Comparison to direct bond investment

| Dimension | Direct bond investment | Repackaged bond |
|---|---|---|
| Issuer credit | Yes | Yes (pass-through) |
| Currency | As issued | Restructured by swap |
| Coupon | As issued | Restructured by swap |
| Swap-counterparty risk | None | Yes |
| Pricing | Market clearing | Issued at structured spread |
| Liquidity | Secondary market | Often more limited (private placement) |
| Yield | Underlying YTM | Underlying YTM minus structuring cost |

The "structuring cost" (dealer margin) reduces the yield to the investor relative to direct purchase, but the convenience of customisation often justifies the spread.

## 9. Counterpoints

- **"Retail repacks are mis-sold"** — Critics have long argued that retail repackages with FX-trigger features (so-called "knock-out" or "callable" structures) are mis-sold to investors who do not fully understand the embedded option / trigger risk; FSA has issued guidance and tightened disclosure
- **"Swap-counterparty concentration"** — Most repack notes carry credit exposure to a small number of large dealer swap-counterparties; this creates systemic concentration in the structured-credit market
- **"Liquidity is illusory"** — Repack notes typically trade only with the originating dealer; secondary-market liquidity outside the issuer dealer is limited
- **"Tax-treatment uncertainty"** — TK / GK structures interact with cross-border tax rules in ways that occasionally create unwelcome surprises for investors
- **"Yield pickup small after costs"** — For institutional investors, the dealer margin embedded in repack pricing can leave only modest yield pickup vs alternative structures (e.g., cross-currency hedge on direct purchase)

## 10. Open questions

- The size of the retail repack market under [[JapanFG/boj|BOJ]] rate normalisation — whether higher domestic yields reduce demand for high-coupon retail structures
- Whether ESG-linked repacks (e.g., green-bond underlying repackaged into yen) gain meaningful share
- The pace of foreign-IB market-share evolution in Japanese repack vs domestic megabank securities arms
- Whether the [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] and global-agency methodology divergence affects repack issuance economics
- Whether emerging-market sovereign retail repack faces tightened FSA regulation after periods of EM stress

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/japan-post-bank|Japan Post Bank]] · [[JapanFG/japan-exchange-group|JPX]]

## Sources

- JSDA bond market statistics — https://www.jsda.or.jp/en/
- MUFG Morgan Stanley Securities IR (parent disclosure)
- SMBC Nikko Securities IR (parent disclosure)
- Mizuho Securities IR (parent disclosure)
- FSA structured-products disclosure framework
- JCR / R&I public rating commentaries on repackaging notes

---

> [!info] Verification status
> confidence: **likely**. Repack mechanism, dealer franchise split, and post-2008 evolution are well-documented in industry commentary and JSDA / FSA disclosures. Specific issuance volume and tranche data are not publicly aggregated at the repack-specific level; descriptions above use directional language. Retail-mis-selling debate is a matter of public regulatory commentary.

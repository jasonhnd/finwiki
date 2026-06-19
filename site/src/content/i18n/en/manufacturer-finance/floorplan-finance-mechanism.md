---
source: manufacturer-finance/floorplan-finance-mechanism
source_hash: 8e95169052f1063a
lang: en
status: machine
fidelity: ok
title: "Floorplan / Wholesale Finance Mechanism"
translated_at: 2026-06-19T06:09:18.057Z
---

# Floorplan / Wholesale Finance Mechanism

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as a **mechanism page**, focused on the *upstream* (dealer-inventory) half of manufacturer finance. It is the wholesale-side complement to the *downstream* (consumer) [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and a sibling to [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The OEM finance arms that run floorplan programs are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]], and — for heavy equipment — [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]. The bank-affiliated leasing companies that compete on wholesale credit are [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Floorplan finance (also called wholesale finance)** is the arrangement whereby the credit at the stage where a dealer (retail outlet) procures inventory (new cars, used cars, construction machinery, ships, etc.) is supported by a manufacturer captive or a financial institution through a committed line. It corresponds to the **upstream (distribution stage)** of the retail finance ([[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]) that a captive extends to consumers. In essence, **the lender advances funds for the "manufacturer → dealer → consumer" distribution inventory during the period until it is sold**. The lender pays the manufacturer/auction directly and takes the **inventory itself as collateral**. Repayment is fundamentally **pay-as-sold (repay once sold)**, and long-stagnant inventory is subject to **curtailment (partial prepayment of principal)**. From a manufacturing perspective, the core point is that by holding both retail and wholesale, the captive can **control the sales channel from upstream**.

## 1. What floorplan finance is

| Perspective | Content |
|---|---|
| Credit target | The dealer (distribution stage). Not the consumer |
| Collateral | The inventory asset itself (vehicles, construction machinery, ships, etc.), often as a security interest in movables |
| Flow of funds | The lender pays the manufacturer/auction directly, and the dealer receives the inventory |
| Repayment model | **pay-as-sold (the credit for a given inventory item is repaid from the proceeds of selling that item)** + accrued interest |
| Stagnation handling | **curtailment**: at fixed intervals, part of the principal is prepaid |
| Audit | Periodic **inventory inspection (floor check / audit)** by the lender |
| Provider | Manufacturer captive, bank, independent wholesale lender |

Floorplan is the counterpart concept to retail (consumer-facing); together the two let the captive control the entire distribution from the financing side. For the mechanism on the retail side, see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]].

## 2. Why floorplan is needed (dealer view / manufacturer view)

- **Dealer view**: Procuring inventory with cash ties up a huge amount of working capital. Floorplan lets the dealer **secure inventory with no / minimal down payment** and defer payment until it is sold. Liquidity and procurement capacity improve, and the assortment and demand response become faster.
- **Manufacturer view**: When the captive provides floorplan, **the manufacturer can book sales at the point of shipment** (because the dealer takes the inventory). This leads to smoothing of production / shipment, securing dealer loyalty, and maintaining the sales network. When the captive runs retail and wholesale as one, it can hold both customer referral and credit from upstream to downstream.
- **Trade-off**: For the manufacturer captive, floorplan is a business that bears the dealer's credit risk, inventory-stagnation risk, and fraud (sold-out-of-trust = selling but not repaying) risk. These are managed via curtailment and audit.

## 3. curtailment and audit (managing stagnation / fraud)

The core risks of floorplan are that **inventory remains unsold for a long time** and that **it is sold but not repaid**. The lender manages these as follows.

- **Curtailment (partial repayment of principal)**: When inventory remains unsold for a fixed period (e.g., 30 / 60 / 90 / 120  days), the dealer prepays part of the principal (typically on the order of 5–20% of the original credit amount). This gradually reduces the credit balance on stagnant inventory and curbs the risk of obsolescence and price decline. The curtailment schedule differs by lender / product.
- **Floor check / audit (inventory inspection)**: The lender checks the physical inventory on a periodic and surprise basis and reconciles it against the ledger. It verifies whether the collateral still exists and whether it has already been sold, preventing **sold-out-of-trust** (the fraud of not repaying floorplan despite having sold the item).
- **Interest / fees**: Interest accrues according to the inventory-holding period and may be reduced by the manufacturer's sales-promotion campaign (interest subsidy for a fixed period = floorplan subvention). This is a sales-promotion tool of the same type as lease subvention on the retail side.

## 4. Floorplan provision patterns by provider

| Provider | Example | Characteristics |
|---|---|---|
| **OEM captive (automotive)** | [[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|AHFC]] / [[manufacturer-finance/nissan-financial-services|NMAC]] | The captive extends wholesale credit on the inventory of its own dealer network. Operated as one with retail |
| **OEM captive (construction / heavy machinery)** | [[manufacturer-finance/komatsu-captive-finance|Komatsu Financial]] | Provides wholesale / retail / lease to 30+ distributors and customers |
| **Bank / independent wholesale lender** | Bank / specialist wholesale finance | Extends credit on the dealer inventory of manufacturers that have no / complement a captive |
| **Bank-affiliated leasing company** | [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] | Competes / partners with the captive in leasing and inventory finance |

The contrast between the "captive runs its own floorplan" type (Toyota / Honda / Nissan / Komatsu) and the "delegate to bank-affiliated / independent" type is one of the analytical axes of this domain. For the type that has no captive, see [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]].

## 5. Regulation / policy / funding

- **Security interest in movables / registration (domestic)**: Because inventory (movables) is taken as collateral, security-interest law such as the registration of assignment of movables is involved. On the installment-sale / money-lending side, it can fall under the Installment Sales Act and the Money Lending Business Act.
- **Supervision (US)**: floorplan lending is examined as a lending category in bank supervision (the FDIC examination policy has a floor plan lending item). The captive is subject to securitization disclosure.
- **funding (securitization)**: wholesale (floorplan) receivables are sometimes securitized in a dealer floorplan ABS / master trust structure, and are one of the captive's funding means. For the relationship with retail auto ABS, see [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]].
- **Accounting**: Whether the manufacturer can book sales at the time of shipment to the dealer depends on the judgment of transfer of control over the inventory (revenue-recognition standard).

## Related

- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] (downstream / retail sibling) · [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]
- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]] · [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- FDIC "Floor Plan Lending" (examination policy): https://www.fdic.gov/risk-management-manual-examination-policies/floor-plan-lending
- DLL "Floor plan financing in the construction, transportation and industrial sectors": https://www.dllgroup.com/us/en-us/blog/latest/Floor-plan-financing-in-the-construction-transportation-and-industrial-sectors
- AutoFinance "What is Dealer Floor Plan Financing?": https://www.autofinance.com/insights/floorplan-financing/
- EDINET (segment disclosures of manufacturers / captives): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] Proofreading status
> confidence: **likely**. The mechanisms of floorplan / wholesale finance, pay-as-sold, curtailment, floor check (audit), and sold-out-of-trust are descriptions of arrangements based on published industry explanations (DLL / AutoFinance), the FDIC examination policy, and the general operation of OEM captives. The curtailment ratios (5–20% / 30・60・90・120  days) are general industry rules of thumb; actual terms differ by lender / product. Specific firms' floorplan balances / interest rates are not handled on this page and are left to per-company entries. Mechanism knowledge is prioritized over fragile financial figures.

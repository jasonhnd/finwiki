---
source: manufacturer-finance/floorplan-finance-mechanism
source_hash: dfab25e1e3afc968
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Floorplan / Wholesale Finance Mechanism (floorplan / inventory finance)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Floorplan / Wholesale Finance Mechanism (フロアプラン・在庫金融の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as a **mechanism page**, focused on the *upstream* (dealer-inventory) half of manufacturer finance. It is the wholesale-side complement to the *downstream* (consumer) [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and a sibling to [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The OEM finance arms that run floorplan programs are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]], and — for heavy equipment — [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]. The bank-affiliated leasing companies that compete on wholesale credit are [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]]. Pair with [[JapanFG/INDEX|JapanFG index]] for the regulatory boundary.

## TL;DR

**Floorplan finance (floorplan / inventory finance, also called wholesale finance)** is the mechanism by which a manufacturer captive or a financial institution supports, via a commitment line, **the credit at the stage where a dealer procures inventory (new cars, used cars, construction equipment, ships, etc.)**. It is the **upstream (distribution stage)** of the retail finance that a captive extends to consumers ([[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]). Its essence is that **the lender advances the "manufacturer → dealer → consumer" distribution inventory until it sells**. The lender pays the manufacturer/auction directly and takes **the inventory itself as collateral**. Repayment is fundamentally **pay-as-sold**, and **curtailment (partial early repayment of principal)** is imposed on long-aged inventory. From a manufacturing standpoint, the core is that by holding both retail and wholesale, the captive can **dominate the sales channel from upstream**.

## 1. What is floorplan finance

| Aspect | Details |
|---|---|
| Credit target | The dealer (distribution stage). Not the consumer |
| Collateral | The inventory asset itself (vehicles, construction equipment, ships, etc.), often chattel collateral |
| Flow of funds | The lender pays the manufacturer/auction directly, and the dealer receives the inventory |
| Repayment model | **pay-as-sold (repay that credit with the proceeds of the individual unit that sold)** + accrued interest |
| Aging response | **curtailment**: partial early repayment of principal at set intervals |
| Audit | Periodic **inventory inspection (floor check / audit)** by the lender |
| Provider | Manufacturer captive, bank, independent wholesale lender |

Floorplan is the counterpart concept to retail (consumer-facing); together, the captive controls the entire distribution from a financial standpoint. For the retail-side mechanism, see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]].

## 2. Why floorplan is needed (dealer standpoint / manufacturer standpoint)

- **Dealer standpoint**: Procuring inventory with cash ties up huge working capital. With floorplan, the dealer can **secure inventory with no / a small down payment** and defer payment until it sells. Liquidity and procurement capacity improve, and the assortment and demand response become faster.
- **Manufacturer standpoint**: When the captive provides floorplan, **the manufacturer can book the sale at the point of shipment** (because the dealer takes the inventory). This leads to smoothing production and shipment, securing dealer loyalty, and maintaining the sales network. When the captive runs retail and wholesale as one, it can hold both the lead-generation and the credit from upstream to downstream.
- **Trade-off**: For the manufacturer captive, floorplan is a business that bears the dealer's credit risk, inventory-aging risk, and fraud (sold-out-of-trust = not repaying despite having sold) risk. These are managed with curtailment and audit.

## 3. curtailment and audit (managing aging and fraud)

The core risks of floorplan are that **inventory sits unsold for a long time** and that **it sells but is not repaid**. The lender manages these as follows.

- **Curtailment (partial principal repayment)**: When inventory remains unsold for a set period (e.g., 30 / 60 / 90 / 120 days), the dealer repays part of the principal early (typically around 5〜20% of the original credit amount). This gradually reduces the credit balance on aged inventory and restrains obsolescence and price-decline risk. The curtailment schedule differs by lender / product.
- **Floor check / audit (inventory inspection)**: The lender checks the physical inventory periodically and by surprise, reconciling it against the ledger. It verifies whether the collateral still exists or has already been sold, to prevent **sold-out-of-trust** (the fraud of not repaying floorplan despite having sold).
- **Interest and fees**: Interest accrues according to the inventory-holding period and may be mitigated by the manufacturer's promotional campaigns (interest subsidy for a set period = floorplan subvention). This is a promotional tool of the same type as the lease subvention on the retail side.

## 4. Floorplan-provision patterns by provider

| Provider | Example | Characteristics |
|---|---|---|
| **OEM captive (automotive)** | [[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|AHFC]] / [[manufacturer-finance/nissan-financial-services|NMAC]] | The captive extends wholesale credit on its own dealer network's inventory. Run as one with retail |
| **OEM captive (construction / heavy equipment)** | [[manufacturer-finance/komatsu-captive-finance|Komatsu Financial]] | Provides wholesale / retail / lease to 30+ distributors and customers |
| **Bank / independent wholesale lender** | Bank, dedicated wholesale finance | Extends credit on the dealer inventory of manufacturers that lack / supplement a captive |
| **Bank-affiliated leasing company** | [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] | Competes / partners with captives on leasing and inventory finance |

The contrast between the "captive runs floorplan in-house" type (Toyota / Honda / Nissan / Komatsu) and the "delegate to bank-affiliated / independent" type is one of this domain's analytical axes. For the type that does not hold a captive, see [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]].

## 5. Regulation, policy, and funding

- **Chattel collateral and registration (domestic)**: Because inventory (chattel) is taken as collateral, collateral law such as chattel-assignment registration is involved. On the installment-sales and money-lending side, it can become subject to the Installment Sales Act and the Money Lending Business Act.
- **Supervision (US)**: floorplan lending is examined as a lending category in banking supervision (the FDIC's examination policy has an item on floor plan lending). The captive becomes subject to securitization disclosure.
- **Funding (securitization)**: wholesale (floorplan) receivables can also be securitized in a dealer floorplan ABS / master trust structure, one of the captive's funding tools. For the relationship with retail auto ABS, see [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]].
- **Accounting**: Whether the manufacturer can book the sale at the time of shipment to the dealer depends on the judgment of the transfer of control over the inventory (the revenue-recognition standard).

## Related

- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] (downstream / retail sibling) · [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]
- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]] · [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## Sources

- FDIC「Floor Plan Lending」(検査方針): https://www.fdic.gov/risk-management-manual-examination-policies/floor-plan-lending
- DLL「Floor plan financing in the construction, transportation and industrial sectors」: https://www.dllgroup.com/us/en-us/blog/latest/Floor-plan-financing-in-the-construction-transportation-and-industrial-sectors
- AutoFinance「What is Dealer Floor Plan Financing?」: https://www.autofinance.com/insights/floorplan-financing/
- EDINET (メーカー / captive のセグメント開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] Proofreading status
> confidence: **likely**. The floorplan / wholesale finance, pay-as-sold, curtailment, floor check (audit), and sold-out-of-trust mechanisms are a description of the mechanism based on public industry commentary (DLL / AutoFinance), the FDIC examination policy, and the general operation of OEM captives. The curtailment ratios (5〜20% / 30, 60, 90, 120 days) are general industry rules of thumb, and the actual terms differ by lender / product. Specific companies' floorplan balances and interest rates are not covered on this page and are left to company-specific entries. Prioritizing mechanism knowledge over fragile financial figures.

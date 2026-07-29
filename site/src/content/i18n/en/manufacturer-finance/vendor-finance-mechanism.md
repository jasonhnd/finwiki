---
source: manufacturer-finance/vendor-finance-mechanism
source_hash: 4aba467d72fc6f18
lang: en
status: machine
fidelity: ok
title: "Captive / Vendor Finance Mechanism (the mechanism of captive / vendor finance)"
translated_at: 2026-07-29T00:31:04.407Z
---

# Captive / Vendor Finance Mechanism (the mechanism of captive / vendor finance)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind the domain's company profiles. The OEM finance arms that *run* this mechanism are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], and [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]. For the cross-border variant — exporting capital goods with ECA support — see the sibling mechanism page [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The funding layer that captives rely on is securitization: [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] and [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]]. Pair with [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] for the bank-affiliated leasing companies that compete with — and partner with — captives, and [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Captive finance** is a **mechanism in which a manufacturer (OEM / vendor) provides financing to the purchasers of its own products through a consolidated finance subsidiary (captive) outside the main entity**. **Vendor finance** is a mechanism in which equipment / machinery vendors support customers' purchases via installments, leasing, and the like, including forms that use partner financial institutions in addition to an in-house captive. The OEM can design sales channels, residual-value and credit risk, customer relationships, and funding as a unit. However, securitization via ABS does not mean automatic off-balance treatment; the accounting treatment depends on whether the derecognition requirements for financial assets are met.

## 1. Definition of captive and vendor finance

| Term | Principal | Customer | Typical products |
|---|---|---|---|
| **Captive finance** | A finance subsidiary directly under the OEM (e.g., [[manufacturer-finance/toyota-financial-services|TFS]], [[manufacturer-finance/honda-finance|AHFC]]) | Mainly individuals (B2C) + dealers | Auto loans, residual-value loans, leasing, cards |
| **Vendor finance** | Equipment / facility vendors (+ partner leasing companies) | Mainly corporations (B2B) | Equipment leasing, installment payment, SaaS subscription |
| **Floorplan / inventory finance** | Captive or partner finance | Dealers (distribution stage) | Short-term revolving credit for inventory vehicles / inventory equipment |
| **Bank-affiliated leasing** | Bank-affiliated / independent leasing companies | Corporations and individuals | Leasing in general (competitor / complement to captives) |

Sources: ^[J.D. Power「OEMs and Captive Finance Solutions」: https://www.jdpowervalues.com/oems-and-captive-finance-solutions; OECD「Export credits」: https://www.oecd.org/en/topics/export-credits.html.]

The contrast between the "captive-owning type" (Toyota / Honda) and the "type that runs without a captive, via bank affiliates and partnerships" (Panasonic / MHI) is the main axis of analysis in this domain. For the latter, see [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] and [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]].

## 2. Why manufacturers have captives (4  motives)

1. **Control of sales channels and customer-referral power**: at the point of a new-vehicle / new-equipment purchase, they can offer "product + loan + lease + insurance" as a package, and their advantage over bank-affiliated auto loans is **instant credit screening at the point of sale**. The captive reinforces the OEM's brand loyalty from the financial side.
2. **Intra-group aggregation of residual-value risk (residual value)**: as discussed below, leases and residual-value loans are products that bet on the future price of used vehicles / used equipment. It is common to design things so that the OEM main entity locks in new-vehicle sales profit first, while price-fluctuation risk is aggregated on the captive's B/S.
3. **Long-term customer relationships and data**: through loans, leases, and cards, they acquire purchasing and usage data and leverage it for replacement cycles and cross-selling.
4. **Funding and risk transfer**: they securitize the accumulating accounts-receivable / installment / lease receivables via ABS, aiming at fund recovery and risk transfer to investors. Derecognition for accounting purposes depends on the transaction terms and applicable standards; where the requirements are not met, the receivables continue to be recognized and the consideration received is recognized as a financial liability (connecting to [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS]] / [[structured-finance/japan-equipment-lease-abs|equipment lease ABS]]).

## 3. The mechanism of residual-value (residual value) risk

The core of leasing and residual-value-set loans is the **residual value (RV) = the assumed remaining value at lease maturity**. The mechanism is as follows.

- At contract time, the captive estimates the **used price at maturity (RV)** and deducts that portion from the monthly payment. The higher the RV is set, the lower the monthly payment, making the lease easier to sell.
- When the actual used price at maturity is **below the RV**, a **residual loss** arises for the captive. Conversely, if it is above, it is a gain.
- OEM captives often **deliberately set the RV somewhat high (lease subvention)** to lower the monthly payment, moving inventory and maintaining brand loyalty. This is a trade-off between sales promotion and residual-value risk.
- **BEV / EV risk**: due to the rapidity of technological renewal (battery degradation, generational change), it is difficult to predict used prices, and refining the RV model is a challenge. The residual-value trend of returned EV lease vehicles is an important industry talking point (analyzed by Deloitte and others).
- The same type of RV risk exists in vendor finance for facilities / equipment. One must read separately the return / purchase options in the product, the lessor's residual-value burden, and the accounting treatment for the lessee and the lessor respectively. Under IFRS 16, the lessee in principle recognizes a right-of-use asset and a lease liability, so one cannot generalize that "operating lease = lessee's off-balance". For details, see [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]].

## 4. Funding: how captives raise funds

Because captives themselves do not hold deposits (except for some that hold a banking license), they raise the funds for lending from the market. The main means are as follows.

| Funding means | Details |
|---|---|
| **ABS (securitization)** | ABS are issued with reference to auto loans, leases, and installment receivables. Used for fund recovery and diversification of funding sources, but derecognition of the receivables depends on the transfer terms and accounting standards. |
| **Bonds / CP** | Bonds and commercial paper in the captive's name. Funding costs are held down by parent-company credit support (Keepwell Agreement, etc.). |
| **Parent guarantee / Keepwell** | The parent OEM promises to maintain the captive's liquidity / net assets, granting higher creditworthiness than the captive alone (often not a legal guarantee). AHFC of [[manufacturer-finance/honda-finance|Honda Finance]] is a typical example. |
| **Bank-syndicate lending / syndicate** | Commitment lines from megabanks and regional banks. |
| **Via partner leasing companies** | A type that keeps its own captive light and entrusts lease origination to [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] and others (parts of Panasonic / Hitachi). |

Sources: ^[IFRS Foundation「IFRS 9 Financial Instruments」: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/; IFRS Foundation「IFRS 16 Leases」: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/.]

## 5. Regulation / policy

- **Installment Sales Act / Money Lending Business Act (domestic)**: credit screening for installment payments / loans is subject to the Installment Sales Act and money-lending registration.
- **Insurance Business Act / Banking Act**: where the captive group holds insurance / banking (parts of Sony / Toyota), they are under the supervision of the respective business acts.
- **Securitization regulation**: ABS funding is subject to each country's securitization regulation, such as risk retention (self-retention obligation).
- **Consumer protection**: transparency of residual-value valuation models, APR (annual percentage rate) disclosure (US CFPB, etc.), and accountability for EV residual values are recent talking points.
- **Accounting standards**: lease accounting (IFRS 16  / Japan's new lease standard) affects the true-lease / finance-lease distinction and on/off-balance treatment, directly tied to the design of vendor finance.

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]
- [[manufacturer-finance/export-finance-mechanism|export finance mechanism]] (cross-border sibling mechanism)
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/toyota-motor|Toyota Motor]] · [[manufacturer-finance/seiko-epson|Seiko Epson]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- OECD "Export credits" (international-framework context of captive / vendor finance): https://www.oecd.org/en/topics/export-credits.html
- Deloitte "Electric Vehicle Lease Returns: Market Analysis" (EV residual-value risk): https://www.deloitte.com/us/en/Industries/consumer/articles/electric-vehicle-lease-returns-market-analysis.html
- J.D. Power "OEMs and Captive Finance Solutions": https://www.jdpowervalues.com/oems-and-captive-finance-solutions
- EDINET (each company's "financial services business" segment disclosure): https://disclosure2.edinet-fsa.go.jp/
- IFRS Foundation "IFRS 9 Financial Instruments": https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/
- IFRS Foundation "IFRS 16 Leases": https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/

---

> [!info] Proofreading status
> confidence: **likely**. As of 2026-07-29, the general explanation of captive / vendor finance was re-verified, and expressions that treated ABS and leasing as automatic off-balance means were revised to match the boundaries of IFRS 9 / IFRS 16.

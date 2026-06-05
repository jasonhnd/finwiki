---
source: manufacturer-finance/vendor-finance-mechanism
source_hash: bbf3279f1db374eb
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Captive / Vendor Finance Mechanism (the mechanism of captive / vendor finance)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Captive / Vendor Finance Mechanism (captive・vendor finance の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind the domain's company profiles. The OEM finance arms that *run* this mechanism are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], and [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]. For the cross-border variant — exporting capital goods with ECA support — see the sibling mechanism page [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The funding layer that captives rely on is securitization: [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] and [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]]. Pair with [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] for the bank-affiliated leasing companies that compete with — and partner with — captives, and [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Captive finance** is the mechanism by which a manufacturer (OEM / vendor) **provides finance for the buyers of its own products through a consolidated finance subsidiary (captive) outside the parent**. **Vendor finance** is its B2B version, in which an equipment / machinery vendor supports a customer's (a corporation's) purchase via installments, leasing, or subscription. The essence of both is to **vertically integrate "selling the product" and "lending / leasing its price" within the same group**. This lets the OEM design as one: (1) maintenance of the sales channel and lead-generation power, (2) intra-group concentration of residual-value risk, (3) long-term customer relationships and data acquisition, and (4) off-balance-sheet treatment of receivables via ABS. FinWiki's manufacturer-finance domain describes, company by company, **who runs this mechanism and how**. This page, as their common **mechanism definition**, organizes the components of captive / vendor / floorplan / residual value / ABS funding.

## 1. Definitions of captive and vendor finance

| Term | Provider | Customer | Typical products |
|---|---|---|---|
| **Captive finance** | An OEM's direct finance subsidiary (e.g., [[manufacturer-finance/toyota-financial-services|TFS]], [[manufacturer-finance/honda-finance|AHFC]]) | Mainly individuals (B2C) + dealers | Auto loans, residual-value credit, leasing, cards |
| **Vendor finance** | An equipment / facility vendor (+ a partner leasing company) | Mainly corporations (B2B) | Equipment leasing, installments, SaaS subscriptions |
| **Floorplan / inventory finance** | A captive or a partner financier | Dealers (distribution stage) | Short-term revolving credit on inventory vehicles / equipment |
| **Bank-affiliated leasing** | Bank-affiliated / independent leasing companies | Corporations, individuals | Leasing in general (a captive's competitor / complement) |

The contrast between the "type that holds a captive" (Toyota / Honda) and the "type that runs without a captive via bank-affiliates / partnerships" (Panasonic / MHI) is this domain's main analytical axis. For the latter, see [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] and [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]].

## 2. Why a manufacturer holds a captive (four motives)

1. **Sales-channel dominance and lead-generation power**: At the point of new-car / new-equipment purchase, it can pitch "product + loan + lease + insurance" as a bundle, and its advantage over bank-affiliated auto loans is **on-the-spot credit at the point of sale**. The captive strengthens the OEM's brand loyalty from a financial standpoint.
2. **Intra-group concentration of residual-value risk**: As described below, leasing and residual-value credit are products that bet on the future price of used cars / used equipment. It is the general design that the OEM parent fixes the new-car sales profit first and concentrates the price-fluctuation risk on the captive's B/S.
3. **Long-term customer relationships and data**: Through loans, leases, and cards, it acquires purchase and usage data and leverages it for the replacement cycle and cross-selling.
4. **Capital efficiency and ABS funding**: It securitizes and moves off-balance-sheet, via ABS, the accumulating trade, installment, and lease receivables, restraining the group's overall leverage (connecting to [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS]] / [[structured-finance/japan-equipment-lease-abs|equipment lease ABS]]).

## 3. The mechanism of Residual Value (RV) risk

The core of leasing and residual-value loans is the **residual value (RV) = the assumed remaining value at lease maturity**. The mechanism is as follows.

- At contract time, the captive estimates the **used price at maturity (RV)** and deducts that amount from the monthly payment. The higher the RV is set, the lower the monthly payment, making the lease easier to sell.
- If the actual used price at maturity **falls below the RV**, the captive incurs a **residual loss**. Conversely, if it exceeds, it is a gain.
- The OEM captive often **deliberately sets the RV somewhat high (lease subvention)** to lower the monthly payment, move inventory, and maintain brand loyalty. This is a trade-off between sales promotion and residual-value risk.
- **BEV / EV risk**: Because of the speed of technological renewal (battery degradation, generational change), the used price is hard to predict, and refining the RV model is a challenge. The residual-value trend of returned EV lease vehicles is an important industry topic (analyzed by Deloitte, etc.).
- Equipment / machinery vendor finance has the same type of RV risk, and **the distinction between true-lease (operating lease, where the vendor bears the residual-value risk) and finance-lease (finance lease, effectively installment)** splits accounting and risk allocation. For details, see [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]].

## 4. Funding: how the captive raises funds

Because the captive itself does not hold deposits (except for some that hold a banking license), it raises its lending funds from the market. The main means are as follows.

| Funding means | Details |
|---|---|
| **ABS (securitization)** | Transfers auto-loan, lease, and installment receivables to an SPV and sells them via ABS. Achieves off-balance-sheet treatment and fund recovery simultaneously. US captives issue regularly via SEC-registered owner-trust series. |
| **Bonds / CP** | Bonds and commercial paper in the captive's name. Restrains the funding cost via the parent's credit enhancement (Keepwell Agreement, etc.). |
| **Parent guarantee / Keepwell** | The parent OEM commits to maintain the captive's liquidity and net worth, granting it higher creditworthiness than the captive alone (often not a legal guarantee). AHFC of [[manufacturer-finance/honda-finance|Honda Finance]] is the archetype. |
| **Syndicated bank lending / syndicate** | Commitment lines from megabanks and regional banks. |
| **Via a partner leasing company** | The type that keeps the in-house captive light and delegates lease structuring to [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]], etc. (part of Panasonic / Hitachi). |

## 5. Regulation and policy

- **Installment Sales Act / Money Lending Business Act (domestic)**: Credit for installments and loans is subject to the Installment Sales Act and money-lending registration.
- **Insurance Business Act / Banking Act**: When the captive group holds insurance or a bank (part of Sony / Toyota), it is under the supervision of each business act.
- **Securitization regulation**: ABS funding is subject to each country's securitization regulation, such as risk retention (the self-holding obligation).
- **Consumer protection**: Transparency of residual-value assessment models, APR (annual rate) disclosure (US CFPB, etc.), and accountability for EV residual value are recent topics.
- **Accounting standards**: Lease accounting (IFRS 16 / Japan's new lease standard) governs the true-lease / finance-lease distinction and on/off-balance-sheet treatment, directly affecting the design of vendor finance.

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]
- [[manufacturer-finance/export-finance-mechanism|export finance mechanism]] (cross-border sibling mechanism)
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/toyota-motor|Toyota Motor]] · [[manufacturer-finance/seiko-epson|Seiko Epson]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- OECD「Export credits」(captive / vendor finance の国際枠組み文脈): https://www.oecd.org/en/topics/export-credits.html
- Deloitte「Electric Vehicle Lease Returns: Market Analysis」(EV 残価リスク): https://www.deloitte.com/us/en/Industries/consumer/articles/electric-vehicle-lease-returns-market-analysis.html
- J.D. Power「OEMs and Captive Finance Solutions」: https://www.jdpowervalues.com/oems-and-captive-finance-solutions
- EDINET (各社「金融サービス事業」セグメント開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] Proofreading status
> confidence: **likely**. The captive / vendor finance, residual value, floorplan, and ABS funding mechanisms are a description of the general mechanism based on public OEM IR segment disclosure, industry analysis (Deloitte / J.D. Power), and the OECD framework. Specific companies' financial figures are not covered on this page and are left to company-specific entries ([[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|Honda Finance]], etc.). The policy is to prioritize mechanism knowledge over fragile financial figures.

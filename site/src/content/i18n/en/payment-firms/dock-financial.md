---
source: payment-firms/dock-financial
source_hash: 30d0e0946679c698
lang: en
status: machine
fidelity: ok
title: "SB Payment Service (SoftBank Payment Service)"
translated_at: 2026-05-31T15:29:03.885Z
---
# SB Payment Service (SoftBank Payment Service)

> [!note] Naming note
> This page was originally requested under the dock-financial slot. Because no independent Japanese financial group named Dock Financial Group could be confirmed from public sources, the page uses **SB Payment Service (SBPS)**, SoftBank Group payment-processing subsidiary, as the relevant operating-company anchor for SoftBank financial functions.

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]] as the **operating-company anchor** for SB Payment Service (SBPS), the SoftBank Corp. payment-processing and financial-services subsidiary. Read it against [[megabanks/paypay-fg|PayPay Financial Group]] for the sister SoftBank-affiliated payment / fintech cluster, [[megabanks/au-fh|au Financial Holdings]] for the telco-captive financial group peer, [[megabanks/ndfg|NTT docomo FG]] for the telco-financial-group peer, [[payments/INDEX|payments index]] for the PSP / merchant-payment-service context, and [[payments/cashless-jp-landscape|Japan cashless payment landscape]] for system-level positioning.

## TL;DR

SB Payment Service Corp. is the payment service provider (PSP) subsidiary of SoftBank Corp. (TSE PRIME 9434). Established in 2004 and wholly owned by SoftBank, it provides a multi-payment processing platform for e-commerce merchants, including credit cards, convenience-store payments, electronic money, QR-code payments including [[payments/paypay|PayPay]], carrier billing, and bank-transfer rails. In Japan domestic e-commerce payments, SBPS sits among the major PSP operators alongside [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] and [[payment-firms/digital-garage|Digital Garage / VeriTrans]]. Direct B2C financial functions are handled mainly by [[megabanks/paypay-fg|PayPay Financial Group]]; SBPS specializes in B2B / B2B2C merchant payment-processing infrastructure.^[likely]

## 1. Entity overview

| Item | Content |
|---|---|
| Legal name | SB Payment Service Corp. ^[extracted] |
| English name | SB Payment Service Corp. |
| Abbreviation | SBPS |
| Established | **2004-10** ^[extracted] |
| Parent company | SoftBank Corp. (TSE PRIME 9434; 100% subsidiary) |
| Head office | Tokyo Port City Takeshiba, Kaigan 1-7-1, Minato-ku, Tokyo |
| Business type | Comprehensive credit-purchase intermediary under the Installment Sales Act + prepaid payment instrument issuer under the Payment Services Act + funds transfer service provider under the Payment Services Act + merchant PSP |
| Main services | **Online payment services** integrating credit cards, convenience-store payments, electronic money, carrier billing, QR payments, and bank transfers |

### 2.1 Online payment services（PSP）

| Payment method | Coverage |
|---|---|
| **Credit cards** | Visa / Mastercard / JCB / American Express / Diners |
| **Convenience-store payments** | Seven-Eleven, Lawson, FamilyMart, and other major chains |
| **Electronic money** | [[payments/suica-prepaid-jr-east|Suica]], PASMO, Rakuten Edy, WAON, and other transport / retail stored-value schemes |
| **QR-code payments** | **[[payments/paypay|PayPay]]** within the parent group, Rakuten Pay, d-Barai, au PAY, LINE Pay, and others |
| **Carrier billing** | SoftBank carrier billing, NTT docomo carrier billing, and au easy payment |
| **Bank transfer / direct debit** | Online banking payments and direct-debit payments |
| **Deferred payment** | BNPL linkage such as NP Atobarai |

### 2.2 Merchant scale

- Distribution strength from the telecom parent plus major e-commerce platform links, including Yahoo! Shopping and LOHACO.
- Strong QR-payment positioning through overlap with the **PayPay merchant base**.

### 2.3 Subsegments

- **Electronic ticketing**: payment processing for events and entertainment ticket sales.
- **Recurring billing**: monthly and annual billing for SaaS and subscription services.
- **Corporate invoice / expense-settlement payments**: B2B corporate payment use cases.

## 3. Parent-company relationship within the SoftBank financial structure

```
SoftBank Group Corp. (TSE PRIME 9984)
  +-- Overseas investment, including SVF and fund businesses
  +-- SoftBank Corp. (TSE PRIME 9434; core telecom business)
        +-- Telecom business: mobile, FTTH, and corporate ICT
        +-- Yahoo / LINE integrated business through LY Corporation
        +-- PayPay Financial Group ([[megabanks/paypay-fg]])
        |     +-- [[payment-firms/paypay|PayPay Corp.]] -- QR-code payments
        |     +-- [[banking/paypay-bank|PayPay Bank]] -- internet bank
        |     +-- [[card-issuers/paypay-card|PayPay Card]] -- card issuer
        |     +-- [[securities-firms/paypay-securities|PayPay Securities]] -- securities
        +-- **SB Payment Service** (this page; PSP)
        +-- Other financial subsidiaries, including finance and leasing
```

### Division of roles: SBPS vs [[megabanks/paypay-fg|PayPay Financial Group]]

| Function | SBPS | PayPay Financial Group |
|---|---|---|
| Target | **B2B merchant payment-processing infrastructure** | **B2C consumer payments, banking, cards, and securities** |
| Licenses | Comprehensive credit-purchase intermediary + prepaid instruments + funds transfer service + PSP | QR payments, funds transfer service, banking, cards, and securities |
| Parent-group position | 100% subsidiary of SoftBank Corp. | SoftBank + Yahoo + LINE integrated group |
| Main revenue | Merchant payment-processing fees | Merchant fees + interest income + investment / asset-management revenue |

=> **PayPay faces consumers; SBPS faces merchants.** SoftBank group payment functions are split across that line.

## 4. KPIs based on public information

| Metric | Indicative scale |
|---|---|
| **Merchant count** | Detailed figure not disclosed; industry observation places SBPS among the major domestic PSP operators. |
| **Processed payment value** | Trillion-yen scale, including B2B processing related to PayPay transactions.^[likely] |
| Employees | 348 (gBizINFO registration; corporate number 4010401058731) |
| Position inside SoftBank | Payment subsidiary within the enterprise-business orbit |
| PSP market share | One of the major domestic PSP operators, alongside [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] and [[payment-firms/digital-garage|Digital Garage / VeriTrans]] |

> Detailed financial KPIs are disclosed in SoftBank Corp. segment reporting. Use official IR for current figures.

### 5.1 Position among the major domestic PSP operators

Domestic PSP competitors include:
- **[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]** (TSE PRIME 3769; largest dedicated PSP)
- **[[payment-firms/digital-garage|Digital Garage / VeriTrans]]** (TSE PRIME 4819; media + PSP operator)
- **SBPS** (this page; SoftBank-affiliated PSP with PayPay linkage)

SBPS differentiates through **SoftBank / Yahoo / LINE / PayPay group channels and connectivity to PayPay QR-payment merchants**.

### 5.2 B2B foundation of the [[payments/paypay|PayPay]] ecosystem

- SBPS sells multi-payment acceptance, including PayPay QR payments, through a unified API that lets merchants consolidate payment UX.
- It functions as a payment-processing component within the parent group.

### 5.3 E-commerce platform linkage

- Yahoo! Shopping, LOHACO, and Z Holdings / LY Corporation e-commerce platforms
- ZOZOTOWN（Z Holdings 系）
- Large-company owned e-commerce sites, including manufacturer D2C and brand e-commerce
- B2B e-commerce, including wholesale and industrial e-commerce

### 5.4 BNPL and electronic-ticketing expansion

- Expansion of BNPL linkage such as NP Atobarai.
- Expansion into non-standard e-commerce categories such as electronic ticketing and recurring subscription billing.
- Response to diversifying merchant-side payment needs.

## 6. Regulation and supervision

| Item | Content |
|---|---|
| Regulator | FSA under the Payment Services Act + METI under the Installment Sales Act |
| Licenses | Comprehensive credit-purchase intermediary registration with METI + prepaid payment instrument issuer registration with FSA + type-II funds transfer service registration with FSA |
| PCI DSS | International security standard for credit-card processing |
| Personal information protection | Act on the Protection of Personal Information and information-protection duties under the Installment Sales Act |
| Listing | Unlisted; parent SoftBank Corp. is listed on TSE PRIME 9434 |

## Related

- SoftBank Corp. (parent company; TSE PRIME 9434)
- [[megabanks/paypay-fg]] ? group sibling and B2C financial group
- [[payment-firms/paypay]] ? QR-payment merchant linkage
- [[banking/paypay-bank]] ? group bank
- [[card-issuers/paypay-card]] ? group card issuer
- [[payment-firms/gmo-payment-gateway]] ? major PSP competitor within [[payment-firms/INDEX]]
- [[payment-firms/digital-garage]] ? major PSP competitor
- [[megabanks/au-fh]] ? telecom financial-group peer
- [[megabanks/ndfg]] ? telecom financial-group peer
- [[payments/cashless-jp-landscape]] ? Japan cashless-payment overview
- [[payments/INDEX]] — payments namespace index
- [[payment-firms/INDEX]] — JapanFG namespace index

## Sources

- SBPS official company overview (profile/)
- SBPS official history (history/)
- SoftBank official group-company list (softbank.jp/corp/group/sb/)
- FSA funds-transfer service provider list
- METI Installment Sales Act registered operator lists
- **gBizINFO (METI corporate data): SB Payment Service Corp.** (corporate number 4010401058731; 348 employees; established 2004-10-01; head office Kaigan 1-7-1, Minato-ku, Tokyo) https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010401058731
- Wikipedia: SB Payment Service (public information, extracted 2026-05-25)

---

> [!info] Verification status

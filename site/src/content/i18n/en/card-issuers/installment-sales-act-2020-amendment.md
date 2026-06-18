---
source: card-issuers/installment-sales-act-2020-amendment
source_hash: 04e6be00f953cc71
lang: en
status: machine
fidelity: ok
title: "Installment Sales Act 2020  Amendment"
translated_at: 2026-06-18T23:33:48.319Z
---

# Installment Sales Act 2020  Amendment

## TL;DR

The 2020年 amended Installment Sales Act (令和2年 Act No. 第64号) is an amendment that, in step with the digitalization of credit cards / deferred payment / BNPL, established (1) certified comprehensive credit purchase intermediary operators, (2) registered small-amount comprehensive credit purchase intermediary operators, (3) card-number management on the payment-agency / acquiring side, (4) the digitization of document delivery, and (5) business-suspension orders.

For JapanFG, this is the foundational legislation for reading BNPL such as [[payment-firms/paidy]], card issuance / merchant networks such as [[card-issuers/jcb]], credit-sales companies such as [[card-issuers/orico]] / [[card-issuers/jaccs]], and the credit / installment license layer of [[financial-licenses/INDEX]]. An important boundary is that **BNPL ≠ automatically a registered small-amount comprehensive credit purchase intermediary operator**. In METI's list of registered operators, as of the end of 令和8年4月 the number of registered small-amount comprehensive credit purchase intermediary operators is 0 社, and in the 2024年 administrative-disposition materials, Paidy is treated as a registered comprehensive credit purchase intermediary operator (Kanto (Comprehensive) 第122号).

## Regime Map

| Layer | What it covers | JapanFG reading |
|---|---|---|
| 割賦販売 (installment sales) | A transaction in which an operator sells designated goods, etc. to a consumer in installments of 2 months or more and 3 or more payments | Traditional installment sales. A separate layer from BNPL / card acquiring |
| ローン提携販売 (loan-tied sales) | A structure in which the seller, etc. guarantees the borrowing of funds for purchasing goods | The boundary with purpose-specific loans becomes an issue |
| 包括信用購入あっせん (comprehensive credit purchase intermediation) | A business that advances the sale price via credit card, etc., and collects it from the consumer over more than 2 months | [[card-issuers/jcb]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[payment-firms/paidy]] |
| 個別信用購入あっせん (individual credit purchase intermediation) | Credit sales / shopping credit for individual goods / services | Important for credit-sales companies, durable consumer goods, and education / beauty loans, etc. |
| クレジットカード番号等取扱契約締結事業者 (operators concluding contracts for handling credit-card numbers, etc.) | Those who conclude contracts permitting merchants to handle cards. Acquirers and some PSPs | The regulatory aspect of acquiring / PSP / merchant onboarding |
| カード番号等取扱業者 (operators handling card numbers, etc.) | Entities bearing the duty to appropriately manage card numbers, etc. | PCI DSS, non-retention, fraud prevention |

The METI FAQ organizes the regulatory targets in the deferred-payment field into "installment-sales operators," "loan-tied-sales operators," "credit purchase intermediary operators," "operators handling credit-card numbers, etc.," and "operators concluding contracts for handling credit-card numbers, etc."

## 2020  Amendment

METI explains the background of the 2020年 amendment as "small-amount, high-frequency deferred-payment services," "entry into deferred payment by companies from other industries," and "the expansion of settlement via the internet and smartphone devices." Promulgation was on 2020-06-24, and enforcement on 2021-04-01.

### 1. Certified comprehensive credit purchase intermediary operators

A special exception that uses a credit-screening method per operator in place of the conventional uniform "comprehensive payable-amount-estimate investigation." While certified operators can use their own data and technology, they bear the management of expected delinquency rates and actual delinquency rates, periodic reporting, and the risk of improvement orders.

### 2. Registered small-amount comprehensive credit purchase intermediary operators

A registration system for operators conducting comprehensive credit purchase intermediation businesses with a credit limit of 10万円 or less. Although regulation was rationalized with "small-amount, high-frequency, smartphone-completed" deferred-payment services such as BNPL in mind, in METI's list of registered operators as of the end of 2026-04, the registered operators in this category number 0 社.

For this reason, when reading [[payment-firms/paidy]], it is necessary to separate "the 2020 amendment created a system mindful of BNPL" from "Paidy is actually a registered small-amount operator." At least in the Kanto Bureau of Economy, Trade and Industry materials of 2024-10-03, Paidy received an administrative disposition as a registered comprehensive credit purchase intermediary operator.

### 3. Expansion of the entities managing card numbers, etc.

The 2020 amendment also broadened the entities bearing the duty to appropriately manage card numbers, etc. Payment-agency operators, code-payment operators, services that store and reuse card numbers, and operators that provide card numbers in deferred-payment settlement, among others, can become subject to it.

In practice, the acquiring / PSP boundary is important. The METI FAQ explains that where a PSP is comprehensively authorized by an acquirer and holds the substantive final decision-making authority over merchant contracts and merchant management, registration is required on the PSP side. On the other hand, where the PSP performs only the initial screening and the registered acquirer reserves the final judgment, registration on the PSP side may become unnecessary.

### 4. Digitization

In step with smartphone- and PC-completed services, document-delivery regulation was adjusted in the direction of permitting the electronic provision of usage statements, membership terms, etc. However, out of consideration for the digital divide, notification that a request for document delivery is possible, etc., is required.

### 5. Administrative dispositions

Supervisory means such as business-suspension orders were established for registered comprehensive credit purchase intermediary operators and registered small-amount comprehensive credit purchase intermediary operators. The 2024-10-03 improvement order against Paidy is a case showing that this layer actually takes effect on BNPL / deferred-payment operators.

## JapanFG Relevance

- [[payment-firms/paidy]]: Because BNPL / deferred payment has a structure of advancing the sale price of goods and collecting it from the consumer at a later date, a regulatory analysis of comprehensive credit purchase intermediation is necessary. In the 2024年 administrative disposition, deficiencies in the operation of the comprehensive payable-amount-estimate investigation and the over-extension-of-credit prevention duty became an issue.
- [[card-issuers/jcb]]: Depending on which of the issuer / acquirer / network functions one holds, multiple layers — comprehensive credit purchase intermediary operator, operator concluding contracts for handling card numbers, etc., and operator handling card numbers, etc. — overlap.
- [[card-issuers/orico]] / [[card-issuers/jaccs]]: Credit-sales companies tend to have both comprehensive and individual credit purchase intermediation aspects. The 2020 amendment broadened the scope for AI / data-driven credit, but supervision over delinquency rates, designated credit information agencies, and over-extension-of-credit prevention remains.
- [[financial-licenses/INDEX]]: The core of the "deferred payment / installment / card credit" licenses, alongside the Banking Act, the Money Lending Business Act, and the Payment Services Act. Where it is structured not as lending but as advance payment / credit purchase intermediation, METI jurisdiction comes to the fore, not just the FSA.

## Boundary Cases

| Case | Likely treatment | Watch point |
|---|---|---|
| Next-month lump-sum BNPL | Depends on the period and contract form. Confirm whether it falls under credit purchase intermediation collecting over more than 2 months | Look at the legal payment period and advance-payment structure, not the "BNPL" trademark / UX |
| 3-installment / 6-installment / 12-installment deferred payment | Approaches comprehensive credit purchase intermediation | Payable-amount estimate, designated credit information agencies, over-extension-of-credit prevention |
| Virtual-card-type BNPL | Easily falls under comprehensive credit purchase intermediation regulation as the issuance / granting of a card, etc. | In the Paidy administrative disposition, the credit-limit management of cards, etc. became an issue |
| PSP performs merchant screening on behalf of others | Whether registration is required changes depending on who holds the final decision-making authority | The actual contractual relationship between the acquirer and the PSP |
| Purpose-specific loan | Even a monetary loan can become individual credit purchase intermediation if it has a close connection with the sales contract | Tie-up with the seller, solicitation, integration of procedures |
| Code-payment linkage | The duty of storage, linkage, and fraud prevention for card numbers, etc., becomes an issue | Non-retention, PCI DSS, EMV 3-D Secure, etc. |

## Related

- [[payment-firms/paidy]]
- [[card-issuers/jcb]]
- [[card-issuers/orico]]
- [[card-issuers/jaccs]]
- [[card-issuers/credit-saison]]
- [[payment-firms/bnpl-landscape]]
- [[financial-licenses/INDEX]]

## Sources

- METI, Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- METI, Overview / FAQ of the Installment Sales Act (deferred-payment field): https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI, On the Act Partially Amending the Installment Sales Act (令和2年 Act No. 第64号): https://www.meti.go.jp/policy/economy/consumer/credit/R2kaiseinogaiyou.pdf
- METI, Publication of "Average Delinquency Rate" and "Upper-Limit Delinquency Rate": https://www.meti.go.jp/policy/economy/consumer/credit/210414heikinentairituoyobijougenentairitu.html
- METI, List of Registered Operators: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI, List of Registered Comprehensive Credit Purchase Intermediary Operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI, Status of Administrative Dispositions Based on the Installment Sales Act (deferred-payment credit): https://www.meti.go.jp/policy/economy/consumer/credit/atobaraigyouseisyobunnojoukyou.html
- Kanto METI / METI, Administrative Disposition Against a Registered Comprehensive Credit Purchase Intermediary Operator (Paidy Inc.) 2024-10-03: https://www.meti.go.jp/policy/economy/consumer/credit/20241003.pdf

---

> [!info] 校核状态
> confidence: **likely** (2026-05-19). The outline of the 2020 amendment, the enforcement date, the small-amount registration system, the acquiring / PSP boundary, and the Paidy administrative disposition are confirmed in METI / Kanto Bureau of Economy, Trade and Industry materials. The applicability of individual companies' current services on a service-by-service basis requires additional confirmation of terms, registration information, and service specifications.

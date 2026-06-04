---
source: payments/japan-bank-api-incident-and-fraud-control
source_hash: 0687dee20b12eea6
lang: en
status: machine
fidelity: ok
title: "Japan bank API incident and fraud-control map"
translated_at: 2026-06-01T03:31:12.313Z
---

# Japan bank API incident and fraud-control map

## Overview

Bank API risk in Japan is not only a cybersecurity issue. It is a control chain across bank authentication, customer consent, electronic payment agency registration, API contracts, unauthorized withdrawal response, suspicious-transaction monitoring, reimbursement / complaint handling, and downstream reconciliation.

Use this page with [[payments/japan-bank-api-payment-agency-route|Japan bank API route]], [[payments/account-to-account-payment-japan|Japan account-to-account payment route]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant account-direct acquiring]], [[payments/psp-merchant-settlement-risk|PSP settlement risk]], [[banking/quick-deposit-four-methods|quick deposit methods]], and [[financial-licenses/INDEX|JapanFG legal / financial licenses]].

## Incident Surface

| Incident type | First question | Route to check |
|---|---|---|
| Account-information leak | Was the service read-only account aggregation or payment-instruction capable? | Electronic payment agency registration, bank API contract, consent log. |
| Unauthorized instruction | Who accepted the instruction and who executed bank-account movement? | Bank authentication, API scope, app login, transaction confirmation, customer notice. |
| Bank API outage | Is the failure at bank API, electronic payment agency, app, or downstream accounting / payroll route? | Bank status notice, API SLA / contract, reconciliation exceptions. |
| Account takeover | Was login compromised at bank, app, device, or shared credential layer? | Device / IP / login anomaly, step-up authentication, bank fraud desk. |
| Synthetic / mule account flow | Is the account being used as a pass-through for suspicious transactions? | FSA suspicious-transaction reference cases, bank AML monitoring. |
| Refund / reversal break | Did a payment instruction settle but merchant or accounting state fail? | A2A payment route, PSP reconciliation, merchant contract. |

## Control Stack

| Layer | Control |
|---|---|
| Legal registration | Check whether the operator is in the FSA electronic payment agency registry. |
| Supervisory control | Check FSA supervisory guideline / security-enhancement materials for electronic payment agency risk points. |
| Bank contract | Confirm the bank / electronic payment agency API contract, service scope, and public disclosure. |
| Customer consent | Record consent timing, scope, purpose, and revocation route. |
| Strong authentication | Separate bank authentication, app authentication, and transaction confirmation. |
| API scope control | Minimize read / write permission, payment-initiation scope, and token lifetime. |
| Transaction monitoring | Watch test remittances, device / IP anomalies, unusual salary-like inflows, and mule-account patterns. |
| Reconciliation | Compare bank ledger, app state, merchant / accounting state, and user notification state. |
| Incident response | Preserve logs, freeze suspicious routes, notify bank / user / merchant, and route complaints. |

## Why The Boundary Matters

The same checkout or accounting UX can sit on different legal rails:

- a bank-account information service routed through [[payments/japan-bank-api-payment-agency-route|electronic payment agency]];
- an account-to-account transfer routed through [[payments/account-to-account-payment-japan|Cotra / Bank Pay / J-Debit style rails]];
- a wallet balance routed through [[payments/funds-transfer-vs-prepaid-boundary|funds transfer or prepaid classification]];
- a merchant PSP settlement problem routed through [[payments/psp-merchant-settlement-risk|PSP settlement risk]];
- an embedded-bank product routed through [[banking/baas-japan-landscape|BaaS Japan landscape]] or [[banking/mercari-bank-license-stack|Mercari Bank license stack]].

Do not describe all of these as "bank API fraud." The operational evidence and legal responsibility can differ sharply.

## JapanFG Relevance

- [[megabanks/mufg-bank|MUFG Bank]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], [[megabanks/mizuho-bank|Mizuho Bank]], [[megabanks/resona-bank|Resona Bank]], and large regional banks matter because they operate the bank-account side of the API / authentication / complaint route.
- [[payment-firms/money-forward|Money Forward]] and [[payment-firms/freee|freee]] are useful accounting / account-aggregation comparison anchors.
- [[payment-firms/merpay|Merpay]], [[payment-firms/paypay|PayPay]], [[card-issuers/rakuten-card|Rakuten Card]], and [[payment-firms/au-payment|au PAY]] need split analysis across bank API, wallet, prepaid, funds-transfer, and merchant rails.
- [[payment-firms/sb-payment-service|SB Payment Service]], [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], and [[payment-firms/netstars|Netstars]] matter when API failure flows into merchant checkout, settlement, or reconciliation.

## Investigation Checklist

1. Identify the exact legal entity, user-facing service, bank partner, and API function.
2. Check FSA electronic payment agency registration and the bank's public API / electronic payment agency disclosure.
3. Separate read-only account information from payment-instruction or transfer-related capability.
4. Reconstruct the timeline across app login, consent, bank authentication, instruction, bank ledger posting, merchant state, and notification.
5. Compare transaction monitoring signals against FSA suspicious-transaction reference cases.
6. Check whether the same incident also triggers funds-transfer, prepaid, PSP, merchant-acquiring, card, or AML reporting routes.
7. Record only public facts in FinWiki; keep incident-specific private data out of this public repository.

## Related

- [[payments/INDEX]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[banking/quick-deposit-four-methods]]
- [[banking/baas-japan-landscape]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: electronic payment agency registration guidance and registry.
- FSA: electronic payment agency supervisory and security-enhancement materials.
- FSA: reference cases on suspicious transactions.
- FSA: public user-warning materials on illegal withdrawals / unknown transactions.
- Japanese Bankers Association: model API contract document.
- FISC / JEPPO: API and Bank Pay public control materials.
- FAPI association: public regulatory / technical standard link collection.

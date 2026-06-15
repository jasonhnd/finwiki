---
source: payments/japan-payment-fraud-incident-timeline-2023-2025
source_hash: dcaeb8256a115a81
lang: en
status: machine
fidelity: ok
title: "Japan payment fraud incident timeline 2023-2025"
translated_at: 2026-06-01T03:31:12.240Z
---

# Japan payment fraud incident timeline 2023-2025

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the chronological incident-and-enforcement page that pairs with [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] for the J-CSC guideline 6.0 / 6.1 control framework, with [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud control]] for the bank-rail specific fraud surface, and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class context. Compare with [[payments/japan-card-issuer-acquirer-processor-split|card role split]] for which party bears chargeback risk on each incident class, with [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] for PSP-onboarding failure cases, and with [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] for cash-out-via-pay-later abuse. Card-brand context is [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]], [[payment-firms/mastercard-japan|Mastercard Japan]], [[card-issuers/jcb|JCB]]; major card-issuer anchors are [[card-issuers/mufg-nicos|MUFG NICOS]], [[card-issuers/rakuten-card|Rakuten Card]], [[card-issuers/aeon-financial-service|AEON Financial Service]].

## TL;DR

The 2023-2025 period in Japan payment fraud was defined by **four converging surfaces**: (1) credit-card EC fraud driven by leaked / phished card numbers used at online merchants, leading to the MET 6.0 / 6.1 J-CSC guideline tightening and the **EMV 3-DS mandatory** requirement for EC card payments from 2025-03; (2) **smishing-led bank API unauthorized instructions** where victims received SMS purporting to be from a financial institution, entered credentials on a phishing site, and lost funds via legitimate-looking bank-app or bank-API debit; (3) **code-payment unauthorized-use cases** crossing across PayPay / d払い / au PAY / 楽天ペイ, often tied to account-takeover from credential-stuffing or social engineering; (4) **PSP merchant-onboarding failures** where insufficient KYM (know-your-merchant) controls allowed fraudulent merchants to acquire card transactions and disappear before chargeback. FSA, METI, the National Police Agency, and the Japanese Bankers Association coordinated public warning campaigns; the cumulative regulatory response set a sharply higher 2025 baseline for both control standards and merchant / PSP onboarding rigor.

## Aggregate fraud-loss context

The aggregate Japan payment-fraud loss picture in this period needs to be read with care because each class is reported under a different statistical regime:

| Source | Scope | Pattern |
|---|---|---|
| Japan Credit Association | Credit card fraud loss (issuer-side) | Annual loss figure recorded; non-face-to-face (EC) fraud the dominant category through the period |
| National Police Agency cybercrime statistics | Phishing, smishing, unauthorized account access | Substantial increase in phishing-related cybercrime reports across the period |
| Japanese Bankers Association | Internet banking unauthorized transfer | Periodic alerts on smishing-led unauthorized transfer waves |
| FSA Newsroom | Administrative actions against operators | Multiple enforcement events across banks, card issuers, PSPs, and prepaid issuers |
| Consumer Affairs Agency | Consumer warnings | Regular alerts on phishing, fake-merchant, BNPL cash-out, and code-payment social-engineering schemes |

The picture is that **Japan card fraud loss reached historically elevated levels in the EC channel** through 2023 and 2024, and **smishing-led bank-account intrusions rose substantially**, which together drove both the J-CSC guideline tightening and the bank-API-side authentication / device-binding enforcement.

## 2023 events

| Event class | What happened | Regulatory / industry response |
|---|---|---|
| EC card-fraud loss continues elevated | Card-number compromises through merchant breaches and phishing routes drove sustained EC unauthorized-use volume; non-face-to-face channel remained the dominant fraud loss class | METI / Japan Credit Association moved toward mandating EMV 3-DS for all EC card acceptance; J-CSC guideline 5.0 → 6.0 revision pipeline accelerated |
| Smishing waves against major banks | SMS-based phishing impersonating MUFG, SMBC, Mizuho, Rakuten Bank, etc. directed victims to credential-harvesting sites; subsequent unauthorized bank-app or internet-banking transfers | Japanese Bankers Association issued continuing public warnings; FSA pushed banks to strengthen device-binding, app-installation verification, and high-value-transfer authentication |
| Code-payment account takeover cases | Account-takeover attempts via credential stuffing and SIM-swap routes triggered unauthorized code-payment spending in multiple wallets | Wallet operators tightened device-change re-authentication and high-value-transaction OTP enforcement |
| FSA enforcement actions | Periodic administrative actions against banks, card issuers, and prepaid issuers for AML / fraud-control deficiencies | Public newsroom releases per operator |

## 2024 events

| Event class | What happened | Regulatory / industry response |
|---|---|---|
| Bank-API unauthorized instructions wave | A specific surface emerged where smishing-driven phishing redirected victims to fake bank-login pages, with credentials then used to issue legitimate-looking bank-API transfer instructions or bank-app activations on attacker-controlled devices | Japanese Bankers Association issued elevated alerts; participating banks strengthened device-binding, biometric-step-up, and 24-hour cooling-period on new-device transfer enablement |
| Smishing surface expansion | SMS impersonating tax authorities, delivery services, and government agencies (in addition to financial institutions) directed victims to fake-payment screens; volume and creativity increased substantially | National Police Agency public statistics confirmed the rise; mobile carrier filtering improved but did not eliminate the surface |
| Card-issuer breach incidents | Specific card-issuer cases involved compromise of cardholder data, leading to forced card reissuance and chargeback wave | J-CSC guideline 6.0 published with tightened non-retention rules and expanded vulnerability-scan obligations |
| EMV 3-DS deployment acceleration | EC merchants accelerated EMV 3-DS deployment ahead of the 2025-03 mandate; mid-tier merchants and PSPs faced execution pressure | METI / J-Credit guidance materials and J-CSC 6.0 / 6.1 timeline pushed deployment |
| PSP merchant-onboarding failures | Cases emerged where PSPs onboarded fraudulent merchants under insufficient KYM controls; merchants accepted card transactions for fictitious goods, disappeared before chargeback adjudication, leaving acquirer / PSP / issuer holding loss | METI tightened PSP / merchant-contracting party obligations; PSP industry tightened internal KYM frameworks |

## 2025 events

| Event class | What happened | Regulatory / industry response |
|---|---|---|
| EMV 3-DS mandatory for EC card payments | From 2025-03, EC card acceptance required EMV 3-DS authentication under J-CSC guideline 6.0 / 6.1 framework | Industry-wide compliance pressure; non-compliant EC merchants risked loss of card-payment acceptance |
| Continued bank-API smishing | The bank-API unauthorized-instruction surface persisted into 2025 despite tightened authentication; attacker techniques evolved (including AI-generated voice-call follow-ups to phishing-site captures) | Banks and FSA continued public alerts; coordinated cross-bank monitoring strengthened |
| Code-payment fraud cases | Continued account-takeover and social-engineering cases against PayPay, d払い, au PAY, 楽天ペイ wallets; some cases involved coordinated cross-wallet attacks on the same victim | Wallet operators continued strengthening device-binding and high-value transaction controls |
| FSA enforcement on multiple operators | Continued enforcement against banks, card issuers, PSPs, and prepaid issuers for control deficiencies | Public newsroom releases per operator |
| Tax-authority / government-impersonation smishing | Particularly elevated volume around tax-deadline windows; consumer-facing warnings escalated | Consumer Affairs Agency and NPA continued public warning campaigns |

## Cross-cutting attack patterns

| Pattern | How it works | Targeted scheme |
|---|---|---|
| Smishing → phishing-site credential harvest | SMS impersonates trusted brand; victim enters credentials on attacker-controlled page | Bank account, card account, wallet account |
| SMS one-time code interception | Attacker convinces victim to share SMS OTP or uses SIM-swap to intercept OTP | Bank API, card 3-D Secure, wallet OTP |
| Device-binding bypass via remote-control malware | Victim installs malware that lets attacker operate the victim's device | Bank app, wallet app |
| Card-number harvest via merchant breach or skimmer | Card numbers exfiltrated from EC merchant compromise or POS skimmer; reused at other merchants | EC card payment (chiefly) |
| Account takeover via credential stuffing | Reused credentials from other-site breaches tried against wallet / card portals | Wallet, card portal |
| Fake-merchant PSP onboarding | Fraudster passes weak KYM; accepts card transactions for fake goods; absconds before chargeback resolution | Card class; PSP / acquirer bears loss |
| Cash-out via BNPL / pay-later abuse | Fraudster uses stolen identity to open pay-later account; defaults after cash-equivalent purchase | BNPL, code-payment pay-later, installment |

## Who bears the loss

| Surface | Primary loss bearer |
|---|---|
| Card EC fraud without 3-D Secure | Merchant (chargeback liability) |
| Card EC fraud with 3-D Secure successfully completed | Issuer (liability shift) |
| Bank API unauthorized debit on consumer account | Bank (under 預金者保護法 framework when consumer non-negligent) |
| Code-payment unauthorized use | Wallet operator per T&C; varies by case-specific evidence |
| Card-issuer breach reissuance | Issuer |
| PSP merchant-onboarding failure | PSP / acquirer / sometimes brand absorbing portion |
| Smishing-led credential disclosure | Often consumer if found to have voluntarily disclosed; banks have applied more flexible interpretation in elaborate-impersonation cases |

The **liability shift dynamic** matters because it shapes investment incentive: when issuers bear residual loss, they invest in fraud-monitoring and 3-D Secure adoption; when merchants bear loss, they invest in merchant-side anti-fraud screening; when consumers bear loss, regulatory and political pressure mounts for the financial-service operator to revise the framework. The 2023-2025 period saw all three dynamics simultaneously in motion.

## Regulatory response architecture

The Japan regulatory response to 2023-2025 fraud is layered across multiple agencies and self-regulatory bodies:

| Body | Role |
|---|---|
| FSA (Financial Services Agency) | Bank / card issuer / prepaid issuer / wallet operator supervision and enforcement |
| METI (Ministry of Economy, Trade and Industry) | Installment Sales Act administration; card-payment / EC-merchant security guideline (with J-Credit) |
| Japan Credit Association | Card-payment security guideline (J-CSC), industry coordination |
| National Police Agency | Cybercrime statistics, smishing / phishing investigation, criminal enforcement |
| Consumer Affairs Agency | Consumer warning, public alert |
| Japanese Bankers Association | Bank-side coordination, public warning |
| Payment Services Act PSP and electronic payment agency framework | Bank API and account-information access rules |

The cross-agency coordination is increasingly tight — most major incidents in 2024-2025 triggered coordinated public alerts across FSA, NPA, and the relevant industry body within days.

## Consumer-protection framework comparison

The protection framework differs materially across surfaces, which is one reason the same consumer can face very different outcomes depending on which scheme was used in the fraud event:

| Scheme | Primary consumer-protection lever | Strength |
|---|---|---|
| Card EC (with 3-D Secure) | Brand chargeback rules + Installment Sales Act 抗弁の接続 for installment contracts | Strong |
| Card EC (without 3-D Secure) | Brand chargeback rules; merchant liability shift | Strong but merchant-route-dependent |
| Bank API unauthorized debit | 預金者保護法 framework when consumer not grossly negligent | Strong when applicable |
| Bank-app login compromise via consumer credential disclosure | Bank T&C and case-by-case interpretation under 預金者保護法 | Variable — depends on what consumer disclosed |
| Code-payment unauthorized use | Wallet operator T&C; no statutory chargeback framework | Weaker than card / bank |
| Prepaid e-money unauthorized use | Issuer T&C; refund only on issuance discontinuation | Weakest |
| BNPL / pay-later identity fraud | Provider T&C + general consumer-credit framework | Variable |

The variability across surfaces creates **structural pressure on operators to align T&C with the strongest framework** (card / bank) to avoid the consumer-trust gap, but this alignment is not statutorily required for code-payment and prepaid surfaces, so it remains uneven across operators.

## Smishing operational mechanics

The 2024-2025 smishing surface has been a sustained source of consumer-side loss. Understanding its mechanics matters because the operator-side controls that can detect or block it depend on which step of the attack chain is targeted:

| Attack chain step | Operator-side detection / control surface |
|---|---|
| 1. Attacker harvests phone numbers | Outside operator scope; mobile-carrier monitoring partial |
| 2. SMS sent impersonating bank / card / wallet / government | Mobile-carrier filtering (carrier-grade); SMS-sender authentication standards |
| 3. Victim clicks link, lands on phishing site | URL-blocklist coordination; consumer browser warnings |
| 4. Victim enters credentials | Operator-side cannot detect at this step; phishing site impersonates operator |
| 5. Attacker uses credentials to log into operator system | **Operator detection point 1**: device-binding, IP / location anomaly, behavioral monitoring |
| 6. Attacker initiates high-value transaction | **Operator detection point 2**: transaction-pattern monitoring, step-up authentication |
| 7. Funds move to attacker-controlled mule account | **Operator detection point 3**: receiving-account pattern, AML / CFT monitoring on credit side |
| 8. Mule cashes out funds | Bank / wallet AML monitoring at withdrawal point |

The principal operator-side leverage points are steps 5-7. The 2024-2025 enhancements at major banks have concentrated on device-binding (preventing step 5 from a new device without secondary verification) and transaction-pattern monitoring (delaying / blocking step 6 when patterns deviate from cardholder / accountholder baseline). The persistent challenge is that **legitimate-looking sessions from victim-controlled devices** (where the attacker remotes into the victim's device via malware or social-engineering call) bypass device-binding controls.

## Related

- [[payments/INDEX]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/cashless-jp-landscape]]
- [[card-issuers/jcb]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/aeon-financial-service]]
- [[payment-firms/paypay]]
- [[payment-firms/au-payment]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Newsroom (令和5 / 令和6 / 令和7); ordinary public warnings.
- Japan Credit Association: security guideline document page; J-CSC 6.0 publication PDF.
- METI: card security guideline revision press release (2024-03).
- National Police Agency: cybercrime statistics portal.
- Consumer Affairs Agency: internet / payment trouble warning portal.
- Payments Japan Association: publications index.
- Japanese Bankers Association: news / public-warning archive.

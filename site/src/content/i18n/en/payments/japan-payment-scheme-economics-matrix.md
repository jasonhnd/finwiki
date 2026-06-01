---
source: payments/japan-payment-scheme-economics-matrix
source_hash: 4f18f84cf77d9029
lang: en
status: machine
fidelity: ok
title: "Japan payment scheme economics matrix"
translated_at: 2026-06-01T03:31:12.250Z
---
# Japan payment scheme economics matrix

## TL;DR

Japan retail payment now runs on four parallel scheme classes — **card** (Visa / Mastercard / JCB / Amex / Diners), **code** (PayPay / d払い / au PAY / 楽天ペイ / メルペイ / FamiPay), **account-to-account** (Bank Pay / J-Debit / Cotra), and **prepaid electronic money** (Suica / PASMO / WAON / nanaco / Edy). Each sits on a different license stack, a different settlement venue, and a different fee economy, so consumer-visible UX similarity hides material differences in who funds the points, who eats the chargeback, and who controls the merchant relationship. This entry is the side-by-side comparison page that other [[payments/INDEX|payments index]] entries point to when a reader needs to see all four economic stacks at once.

## Wiki route

This sits under [[payments/INDEX|payments index]] as the cross-scheme reference page. Read it alongside [[payments/cashless-jp-landscape|Japan cashless landscape]] for the market-share view, [[payments/japan-card-issuer-acquirer-processor-split|card role split]] and [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] for card-class detail, [[payments/japan-code-payment-competitive-map|code-payment competitive map]] for wallet-class detail, [[payments/account-to-account-payment-japan|A2A payment route]] for bank-direct detail, and [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the wallet / prepaid line. License routing for all four classes is in [[JapanFG/legal-financial-licenses/payment-license-stack|Japan payment license stack]].

## Four-class scheme map

The four classes do not differ mainly in how the consumer taps, scans, or holds a card — they differ in the **balance layer** the value moves through and the **license route** the operator carries.

| Class | Examples | Balance layer | Primary license route |
|---|---|---|---|
| Card payment | Visa, Mastercard, [[JapanFG/jcb\|JCB]], Amex, Diners | Issuer credit line (post-pay) | Installment Sales Act (信販 / 包括信用購入あっせん) + brand rules |
| Code payment | [[JapanFG/paypay\|PayPay]], d払い, [[JapanFG/au-payment\|au PAY]], 楽天ペイ, メルペイ, FamiPay | Funds-transfer balance / prepaid sub-balance / card-link / bank-debit (mixed) | Funds Transfer Service + Prepaid Payment Instrument (Payment Services Act) |
| Account-to-account (A2A) | Bank Pay, J-Debit, Cotra-linked apps | Bank deposit account (direct debit) | Banking Act + JEPPO infrastructure + electronic payment agency (電子決済等代行業) where third-party |
| Prepaid electronic money | Suica, PASMO, [[JapanFG/aeon-card\|WAON]], nanaco, [[JapanFG/rakuten-edy\|Edy]] | Prepaid stored value (closed-loop or quasi-open) | Prepaid Payment Instrument (Payment Services Act) |

Each class has a **scheme operator** (the entity that owns the network rules and settlement venue) and a **license under Japan law** that determines what consumer-protection rules, fund safeguarding, and refund mechanics apply.

## Scheme operator and settlement venue

| Class | Scheme operator pattern | Where money actually settles |
|---|---|---|
| Card | International brand (Visa / Mastercard / Amex / Diners) or domestic brand ([[JapanFG/jcb\|JCB]]); 4-party scheme separates issuer / acquirer; 3-party scheme (Amex / Diners / some JCB cards) collapses them into one | Issuer ↔ acquirer settlement through brand-rules clearing; net positions ultimately move through the banking system (often via [[payments/japan-payment-clearing-and-settlement-infrastructure\|Zengin / BOJ-NET]] for yen legs) |
| Code | Wallet operator (PayPay Corp, NTT docomo, KDDI, Rakuten Pay, Mercari, etc.); the wallet operator typically owns the merchant contract OR delegates aggregation to a QR-gateway PSP such as Netstars | Internal wallet ledger first; periodic net settlement to merchant bank account through Zengin transfer |
| A2A | JEPPO for Bank Pay / J-Debit; Zengin-Net + Cotra system for instant P2P-and-merchant transfers | Direct deposit-account debit; final settlement clears twice-daily through Zengin / Cotra batch windows |
| Prepaid e-money | Issuer (JR East for Suica, PASMO Co. for PASMO, AEON for WAON, Seven Card Service for nanaco, Rakuten Edy for Edy) | Issuer's stored-value ledger; merchant payout flows through issuer ↔ merchant contracted settlement schedule via Zengin |

The 4-party vs 3-party card distinction matters because in a 3-party scheme there is no interchange fee — the brand earns the full merchant fee net of acquirer cost since the brand IS the issuer-acquirer.

## License under Japan law

The license question is downstream of the balance layer, not the UX. A page reader should not call PayPay "a credit card competitor" without first identifying which sub-balance the transaction touched.

| Class | License stack | Key obligations |
|---|---|---|
| Card | Installment Sales Act registration (包括信用購入あっせん業者 / 包括信用購入あっせん業 etc.); separate registration for issuer vs merchant-contracting party (アクワイアラ) vs PSP under METI 115 list | Cardholder credit screening, security guideline (J-CSC), PCI DSS for merchants / PSPs, EMV 3-DS for EC, chargeback rules from brand |
| Code | Funds Transfer Service registration (Type I / II / III) for transfer-capable balance; Prepaid Payment Instrument issuer registration for stored-value sub-balance; multiple licenses often held in parallel by the same operator | User-fund safeguarding (deposit / trust / guarantee), AML / CFT, unauthorized-transaction handling under Payment Services Act |
| A2A | Banking Act for the account itself; JEPPO infrastructure rules; electronic payment agency (電子決済等代行業) registration where a third-party initiates payment instructions on bank API | Authentication / device-binding under bank API contract, account-information access rules, unauthorized debit compensation (預金者保護法 framework) |
| Prepaid | Prepaid Payment Instrument issuer notification (自家型) or registration (第三者型) under Payment Services Act; FSA 803-row [[payments/prepaid-payment-instrument-issuers-japan-index\|third-party prepaid registry]] | 50% of unused-balance amount required to be safeguarded with deposit / trust / guarantee; refund process at discontinuation; expiry / unused-balance accounting |Boundaries between these are not stable — operators frequently move balance from prepaid sub-ledger to funds-transfer sub-ledger when they add P2P transfer features, which forces a fresh license analysis. See [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] for the test.

## Acquirer model (single-acquirer vs multi-acquirer)

| Class | Acquirer structure |
|---|---|
| Card | **Multi-acquirer.** A merchant can pick from multiple acquirers per brand (SMBC Card, MUFG NICOS, JCB, AEON Financial Service, Rakuten Card Merchant Service, GMO-PG as PF acquirer, etc.); merchant fee is negotiated per acquirer, per brand, sometimes per MCC. For Amex / Diners (3-party) the brand is effectively the sole acquirer. |
| Code | **Single-acquirer per wallet.** PayPay merchants contract with PayPay (or via a gateway like Netstars that wholesales the connection); d払い merchants contract with NTT docomo. Multi-wallet acceptance is achieved by signing multiple wallet contracts OR by signing one QR-gateway aggregator. |
| A2A | **Single-scheme acquirer.** Bank Pay merchants contract with JEPPO; J-Debit merchants contract with JEPPO. No alternative acquirer exists for the same scheme. |
| Prepaid e-money | **Single-acquirer per scheme.** Suica acceptance is contracted via JR East (and PASMO group reciprocity); WAON via AEON; nanaco via Seven Card Service; Edy via Rakuten Edy. Cross-acceptance exists between Suica / PASMO via the inter-railway 10 IC mutual-use scheme. |

The single-acquirer pattern in non-card classes is one reason METI and JFTC view code and prepaid merchant fees as harder to discipline through competition than card merchant fees.

## Merchant fee range (MDR + per-transaction)

These are public-reported ranges. Actual merchant fees vary by MCC, ticket size, ECR vs MPM QR, on-us vs off-us, and negotiation power.

| Class | Typical merchant fee (MDR) | Per-transaction fixed |
|---|---|---|
| Card | JFTC 2022: simple-average ~2.70%, weighted-average ~1.66%; Payments Japan 2022 roadmap: Category I avg 2.63%, Category II avg 2.89% | Usually none in classic MDR; PSP-layer may add per-tx fee |
| Code (PayPay et al.) | Small-merchant MPM QR has historically been 0% (PayPay zero-fee promo 2018-2021) → now ~1.6% to 1.98% MPM and ~1.98% to 2.95% CPM for general merchants; large-chain negotiated rates lower | Some wallets add fixed yen per-tx for sub-300-yen tickets |
| A2A (Bank Pay) | Public published rate range similar to or below code payment; merchant bears bank-side processing fee under JEPPO schedule | Account-debit processing fee per transaction |
| Prepaid e-money | Typically 2-3% range; transit-zone Suica merchant fee historically lower in railway-owned retail; WAON / nanaco fees set by issuer | Per-tap processing fee sometimes embedded |The METI merchant-fee disclosure pressure (see [Recent regulatory pressure](#recent-regulatory-pressure)) explicitly targets card class first, where disclosure is most advanced — JCB has disclosed allocation rate between issuer and acquirer since the 2023-06-01 METI/JFTC release.

## Issuer fee / interchange — who earns what

| Class | Interchange or issuer-side share | Where it sits |
|---|---|---|
| Card (4-party) | Visa / Mastercard / JCB Japan standard interchange rates published since 2023 (Payments Japan roadmap 2023); Payments Japan 2022 roadmap recorded **issuer fee = 1.56% in both Category I and Category II** | Acquirer pays issuer interchange out of merchant fee; brand also takes scheme fee |
| Card (3-party Amex / Diners) | No interchange — brand is issuer and acquirer | Brand keeps full merchant-fee margin after PSP / processor cost |
| Code | No formal interchange in the card sense; instead **funding-source fee** to the upstream layer: card-funded code payment passes card MDR through, bank-debit funded passes bank fee, prepaid-balance funded keeps margin internal | Wallet operator keeps balance-funded margin; card-funded leaks margin to the card class |
| A2A | Bank-side processing fee paid to debit-account bank; JEPPO scheme fee | Bank keeps account-debit revenue; merchant relationship owned by JEPPO |
| Prepaid | No external interchange; issuer keeps merchant fee minus processing cost; **negative-float economics** if value is loaded but unspent | Issuer earns float yield + breakage on unredeemed balance |

A 4-party card transaction at a typical ~2.5% MDR will pay roughly 1.5-1.6% interchange to the issuer (Japan number from Payments Japan), ~0.3-0.5% brand fee, with remainder split between acquirer and PSP. See [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] for the source pack.

## Settlement cycle

| Class | Merchant settlement | Consumer billing |
|---|---|---|
| Card | T+M (monthly batch) traditional; major PSPs offer T+5 to next-day settlement at premium | Cardholder billed mid-month following purchase month (typical 1-2 month float for issuer credit) |
| Code | T+1 to T+M depending on wallet plan; PayPay Bank-linked settlement can be next-day; non-bank settlement weekly/monthly | Funding event (charge from bank / card / cash) happens before or at transaction depending on funding rail |
| A2A | T+0 to T+1 (instant debit at consumer side, batch credit at merchant side via twice-daily Zengin / Cotra settlement) | Instant — bank account debited at transaction |
| Prepaid | T+1 to T+M depending on issuer's merchant contract | Value pre-loaded; consumer is "billed" at load event |

The card class is the only one where the **consumer enjoys structural credit float** — every other class debits at or near transaction time, which is a major reason credit cards still hold the majority of cashless **value** even though code payments dominate transaction **count**.

## Chargeback handling

| Class | Chargeback / dispute path | Consumer protection lever |
|---|---|---|
| Card | Brand-rules chargeback (Visa Dispute, Mastercard Chargeback, JCB Dispute, Amex Dispute); merchant evidence flow through acquirer → brand → issuer; reason codes standardized | Strong — Installment Sales Act 抗弁の接続 for installment, plus brand chargeback rules |
| Code | Wallet-operator dispute desk; no standardized inter-wallet chargeback framework; refund typically negotiated through merchant or wallet customer support | Weaker — depends on wallet T&C; no statutory chargeback right |
| A2A | Bank unauthorized-debit framework (預金者保護法 for cash card; bank API rules for Bank Pay); reversal flows through bank dispute process | Strong for unauthorized; weak for merchant disputes (consumer must pursue merchant directly) |
| Prepaid | Issuer refund policy under Payment Services Act termination process; no merchant-dispute chargeback | Weak — refund only on instrument discontinuation, not for individual disputed purchases |

Chargeback strength is a major reason card payment is still the default in high-ticket EC, travel, and B2C subscription — the consumer has a path back if the merchant fails to deliver.

## Acceptance footprint

| Class | Domestic offline | Domestic online | Cross-border |
|---|---|---|---|
| Card | Universal (POS, EMV contact / contactless) | Universal | Yes — international brand network |
| Code | High (convenience stores, restaurants, drugstores, 商店街); MPM QR cheap to deploy | Growing but less universal than card for high-ticket EC | Limited — bilateral with Alipay+, WeChat Pay routes through gateway PSPs |
| A2A (Bank Pay / J-Debit) | Limited acceptance; concentrated in supermarkets, drugstores, some chains | Limited | None — domestic-only bank rail |
| Prepaid e-money | Very high in transit (Suica / PASMO), mall (WAON), convenience store (nanaco); cap at low-ticket due to charge ceiling | Limited (Suica internet, Edy on EC) | None — closed domestic scheme |

The cross-border lane is where card class retains an essentially unique position — inbound tourist payment and outbound consumer payment both default to international brand networks despite all the domestic-only competition.

## Authentication / fraud control stack

| Class | Primary auth at transaction | Secondary controls |
|---|---|---|
| Card | EMV contact / contactless + PIN at POS; **EMV 3-DS** for EC (mandatory from 2025-03 for EC card payments under METI / J-CSC guideline 6.0); tokenization for in-app | PCI DSS for merchants / PSPs, non-retention rule, J-CSC vulnerability scanning, brand fraud-monitoring |
| Code | Device-binding to wallet app + biometric (Face ID / Touch ID / Android equivalent) + 4-digit PIN; OTP at high-value events | Wallet AML monitoring, KYC at registration / upgrade tier, transaction-velocity limits, device-change re-authentication |
| A2A | Bank app login + biometric + bank-side device-binding; bank API access controlled by electronic payment agency contract | Bank fraud-monitoring, daily debit cap, unauthorized-debit reversal (預金者保護法) |
| Prepaid | None at tap for low-value (Suica / PASMO unattended cap typically JPY 20,000); PIN for higher-value or refill | Issuer-side fraud monitoring, ID-binding for mobile-app variants (Mobile Suica, WAON app) |

The EMV 3-DS requirement for EC is the single biggest 2025 control change — see [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] for the full guideline 6.0 timeline.

## Loyalty / point economics

This dimension is uniquely complex in Japan because point programs operate as a **parallel currency layer** that overlaps but does not align with the payment-scheme layer.

| Class | Who funds the points | Cross-scheme exchangeability |
|---|---|---|
| Card | Issuer-funded (Rakuten Card → Rakuten Point, SMBC Card → V Point, JCB Card → Oki Doki Point, AEON Card → WAON POINT) | High through 共通ポイント (V Point, Rakuten Point, d Point, PayPay Point, Ponta) — see [[loyalty/japan-points-landscape\|Japan points landscape]] |
| Code | Platform-funded (PayPay Point from PayPay budget, d Point from NTT docomo, au PAY Point from KDDI, 楽天ポイント from Rakuten) — campaign subsidies historically aggressive | V Point ↔ T Point (integrated 2024); PayPay Point and Rakuten Point are closed to in-group; d Point and au PAY Point have selective cross-merchant acceptance |
| A2A | None or minimal (Bank Pay / J-Debit don't run a point currency) | N/A |
| Prepaid | Issuer-funded (WAON POINT, nanaco point, Suica reward via JRE POINT, Edy reward via Edy program) | Limited — typically convertible within owner group |

The point layer is **not free margin** — it is a deliberate budget line. PayPay's prolonged subsidy phase (2018-2022) and Rakuten's flywheel both rely on point economics that may not be sustainable without payment-scheme-level revenue, which is why the [[payments/japan-code-payment-competitive-map|code-payment competitive map]] tracks campaign-cost ratios.

## Cross-scheme exchangeability and interoperability

| Lane | Mechanism | Reality |
|---|---|---|
| Card brand cross-acceptance | EMV + brand rules | High — any brand-acquired terminal accepts that brand globally |
| Code-payment cross-wallet | QR-gateway aggregation (Netstars JPQR, SBPS) | Partial — merchant can accept multiple wallets via one gateway, but each wallet still routes through its own scheme |
| Prepaid IC mutual-use | 10 IC card mutual-use agreement (Suica, PASMO, Kitaca, manaca, TOICA, SUGOCA, hayakaken, nimoca, ICOCA, PiTaPa) | High within transit zone; merchant-side acceptance varies |
| A2A interop | Cotra system bridges deposit-taking institutions and funds-transfer operators | Growing — adoption depends on participating apps |
| Point cross-redemption | 共通ポイント agreements + V Point ↔ T Point merger | Selective — not all points convert to all others |

The Suica / PASMO 10 IC mutual-use scheme is the strongest interoperability story in the prepaid class but is constrained by the transit-zone footprint. The code-payment class has nothing comparable — QR gateways aggregate acceptance for the merchant but do not create a true mutual-use scheme between wallets.

## BoJ-NET / Zengin / Cotra dependency

| Class | Settlement infrastructure dependency |
|---|---|
| Card | Net-position settlement ultimately moves through bank accounts → Zengin domestic transfer → BOJ-NET for inter-bank final settlement |
| Code | Wallet operator settles merchant payout via Zengin transfer; user-funding charge from bank account uses Zengin or bank API |
| A2A | Direct dependency — Bank Pay / J-Debit are JEPPO services; Cotra is operated by Zengin-Net |
| Prepaid | Merchant payout via Zengin transfer; load events via Zengin or bank API |

Every Japan payment scheme is ultimately a Zengin / BOJ-NET dependent system because every scheme eventually needs to move yen between commercial bank accounts. See [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] for the full clearing map.

## Stablecoin / EPI overlap

A potential fifth scheme class is emerging around tokenized money. It is not yet at scale but the legal route is now defined.

| Tokenized money type | Sits next to | Scheme analogy |
|---|---|---|
| JPYC (electronic payment instrument under EPI route) | Prepaid + funds-transfer hybrid | Closer to prepaid economics but with on-chain transferability |
| Progmat coin (trust-type stablecoin) | Funds-transfer / banking-trust | Bank-issued deposit-token analog |
| USDC via SBI VC Trade (electronic payment instrument exchange service / ECISB route) | Foreign-issued EPI, traded via VASP-adjacent exchange | Cross-border-capable scheme analog |
| Deposit token (DCJPY) | Banking | Tokenized bank deposit |

See [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] for the regulatory classification. For payment-scheme purposes, these add a sixth balance layer that does not yet have a defined merchant-acceptance footprint or chargeback regime, so they are excluded from the four-class matrix above.

## Recent regulatory pressure

| Date | Source | What changed |
|---|---|---|
| 2022-04-08 | JFTC | Report on credit-card merchant fees: documented size-based fee dispersion, called for greater interchange transparency |
| 2023-06-01 | METI + JFTC | JCB disclosed allocation rate of card merchant fee between issuer and acquirer (first major brand to do so in Japan) |
| 2023 | Payments Japan roadmap | Visa, Mastercard, UnionPay published Japan credit-card standard interchange rates |
| 2024-2025 | METI 6.0 / 6.1 guideline | EMV 3-DS mandatory for EC card payments; non-retention rules tightened; vulnerability-scan obligations expanded for EC merchants |
| 2025-2026 | METI cashless ratio release | 2025 cashless ratio 58.0% / JPY 162.7 trillion; pressure for fee disclosure extends from card class toward code and prepaid classes |
| Ongoing | JFTC | Periodic investigations into merchant-fee opacity, single-acquirer pricing power in code and prepaid classes |

The disclosure pressure is currently concentrated on card class (which is also where the public-data depth is greatest) but is extending toward code-payment fee disclosure as code-payment share of cashless value continues to grow.

## Cross-section: micro-merchant access (商店街 economics)

The four classes look dramatically different at the **sub-3-person small-merchant** end of the market — a 個人商店 in a 商店街.

| Class | Small-merchant onboarding | Hardware cost | All-in cost for a JPY 500 transaction |
|---|---|---|---|
| Card | Acquirer / PSP underwriting; KYC; minimum monthly fee in some plans; EMV-capable terminal required | JPY 0 (PSP-provided tablet reader) to JPY 50,000+ (full POS) | ~JPY 12.50 to JPY 14.75 MDR + terminal amortization + monthly fee |
| Code (MPM QR) | Wallet app account + bank account; minimal docs; printed QR sticker | JPY 0 (printed QR) | ~JPY 8 to JPY 14.75 MDR; sometimes 0 in promo periods |
| A2A (Bank Pay) | Bank account + JEPPO merchant agreement | JPY 0 (printed QR for MPM) | Bank-side processing fee + merchant fee |
| Prepaid (Suica / WAON / etc.) | Issuer underwriting; FeliCa reader required | JPY 30,000+ FeliCa reader | ~JPY 10 to JPY 15 MDR + reader hardware |

The MPM QR economics of the code class is the only scheme that gives a 商店街 micro-merchant **near-zero onboarding cost** — this is why code payment penetrated the small-merchant segment faster than any prior cashless wave. The card class is structurally disadvantaged at this end because of hardware cost and underwriting friction; the prepaid e-money class requires a FeliCa reader that most micro-merchants cannot justify; A2A acceptance among micro-merchants is still narrow.This micro-merchant cost gap is also where the **JFTC merchant-fee investigations** are most politically charged — METI's cashless policy explicitly recognizes that small-merchant fee burden is the bottleneck for moving Japan's cashless ratio from the 2025 baseline of 58.0% toward the 2030 target of 65%.

## Related

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/account-to-account-payment-japan]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payments/psp-merchant-settlement-risk]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[fintech/japan-epi-three-types-overview]]
- [[JapanFG/jcb]]
- [[JapanFG/paypay]]
- [[JapanFG/au-payment]]
- [[INDEX|FinWiki index]]

## Sources

- Payments Japan Association: publications index and 2022 / 2023 cashless roadmap.
- Payments Japan Association: code-payment trend survey (2026-03-30 publication page).
- METI: cashless payment policy portal and 2025 cashless ratio release (58.0% / JPY 162.7 trillion).
- METI / JFTC: 2023-06-01 release on JCB merchant-fee allocation-rate disclosure.
- METI: Installment Sales Act registration lists; credit-purchase / post-pay FAQ.
- BOJ: payment and settlement system portal and outline.
- JFTC: 2022 credit-card merchant-fee report and release.
- FSA: funds-transfer service provider registry; third-party prepaid issuer registry; prepaid policy page.
- Zengin-Net: Cotra system linkage explanation.
- Cotra: official service page.
- JEPPO: Bank Pay official page.
- JCB: brand / payment-network public materials.

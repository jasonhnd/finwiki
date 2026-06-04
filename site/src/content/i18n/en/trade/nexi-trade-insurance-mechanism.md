---
source: trade/nexi-trade-insurance-mechanism
source_hash: 57167883d625676e
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "貿易保険 (export-credit insurance) — the NEXI trade-insurance mechanism that backstops cross-border non-payment"
translated_at: 2026-06-05T00:00:00.000Z
---
# 貿易保険 (export-credit insurance) — the NEXI trade-insurance mechanism that backstops cross-border non-payment

## Wiki route

This entry sits under [[trade/INDEX|trade INDEX]] and explains the **insurance layer** that sits beside trade settlement. Read it against its same-domain peer [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]] — where collections leave the exporter holding buyer-default risk, **貿易保険 (trade insurance)** is how that residual risk gets covered. The triad context is in [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. For the institution itself and its product catalogue, cross into [[policy-finance/INDEX|policy-finance INDEX]] and [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]].

## TL;DR

**貿易保険 (export-credit insurance / trade insurance)** is an insurance policy that pays the exporter (or its financing bank) a claim when an overseas buyer fails to pay for reasons the seller cannot control — buyer insolvency, sovereign default, war, expropriation, or inability to transfer currency. In Japan it is written principally by **NEXI (株式会社日本貿易保険, Nippon Export and Investment Insurance)**, the Japanese state's **export-credit agency (ECA)**. It is *not* a payment guarantee like a letter of credit; it is a **post-loss indemnity** that turns an otherwise un-bankable cross-border exposure into a coverable risk.

The mechanism matters because most world trade settles on **open account** (ship now, pay later) rather than on a bank undertaking — and open-account trade is only safe when the non-payment risk is insured. That is the gap export-credit insurance fills.

## Why trade insurance exists: the two risk buckets

An export sale carries risks no domestic sale does. Export-credit insurance splits them into two buckets:

| Bucket | Japanese term | Examples | Why uninsurable commercially |
|---|---|---|---|
| **Commercial risk** | 信用危険 (shin'yō kiken) | Buyer insolvency, buyer refusal/default, protracted default | Hard for a private insurer to price across emerging-market corporates with thin disclosure |
| **Political / country risk** | 非常危険 (hijō kiken) | Sovereign default, war/civil unrest, expropriation, foreign-exchange transfer restriction (送金リス​ク) | Catastrophic, correlated, and tied to government action — outside normal commercial appetite |

The political/country bucket is the historical reason ECAs are **state-backed**: a single sovereign event can wipe out an entire portfolio at once, a correlation private reinsurance struggles to absorb. Government backing lets the ECA hold that tail risk and keep premiums affordable, which in turn lets domestic exporters compete on payment terms with rivals from other ECA-backed countries.

## How the mechanism works

1. **Underwriting.** Before shipment, the exporter (or the bank financing the buyer) applies for cover. NEXI assesses the **buyer's creditworthiness** and the **buyer-country risk classification**, then offers a policy with a coverage ratio (typically high but not 100%), a premium, and a country limit.
2. **Premium.** The exporter pays a risk-priced premium up front. Pricing reflects the buyer-country category and tenor, anchored to international minimums (see OECD below).
3. **Shipment / credit period.** The exporter ships on open account or against a deferred-payment draft; the policy runs over the credit period.
4. **Loss event.** If the buyer fails to pay (commercial) or a sovereign event blocks payment (political), and the cause is an insured peril, the exporter files a claim after the waiting period.
5. **Indemnity + subrogation.** NEXI pays the insured percentage of the loss, then **subrogates** — it pursues recovery from the defaulting buyer or sovereign, often through inter-governmental (Paris Club) channels for sovereign debt.

The structural contrast with a bank instrument is sharp: an L/C **prevents** the loss by substituting bank credit for buyer credit *before* payment is due; trade insurance **absorbs** the loss *after* it happens. That is why an exporter can use both at once — an insured buyer-credit loan, for example.

## Trade insurance vs the letter of credit

| Dimension | 貿易保険 (export-credit insurance) | Letter of credit (UCP 600) |
|---|---|---|
| Legal nature | Insurance indemnity (pays on a defined loss) | Bank payment undertaking (pays against complying documents) |
| Who is protected | Exporter or its financing bank | Beneficiary (exporter) |
| Trigger | Buyer/sovereign default after the credit period | Presentation of complying documents |
| Covers political risk? | **Yes** — sovereign, war, transfer | No (the issuing bank's own credit, not country risk per se) |
| Underlying settlement | Works *with* open account or D/A collection | Is itself the settlement method |
| Cost form | Premium (risk-priced) | Issuance / confirmation / discrepancy fees |

Because export-credit insurance lets sellers trade safely on **open account**, it is the instrument that supports the migration "down" the settlement-method spectrum described in [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]] — from L/C → collection → open account — without the exporter simply accepting more naked risk.

## The OECD discipline — why ECAs do not undercut each other

State-backed ECAs could, in principle, subsidise their exporters by offering below-cost premiums and below-market interest on tied loans — a race to the bottom funded by taxpayers. To prevent that, OECD members operate the **Arrangement on Officially Supported Export Credits**, which sets **minimum premium rates**, a common **country-risk classification**, and limits on **tenor and down-payment**. NEXI prices within this consensus. The full mechanism is documented in [[policy-finance/oecd-export-credit-arrangement|the OECD Export Credit Arrangement]], and the supervisory framing of Japan's trade-control orbit sits with [[financial-regulators/jbic|JBIC]] and METI.

## Where it plugs into the Japanese export stack

NEXI's trade insurance rarely operates alone. On a financed export it typically **wraps a bank loan**: a commercial bank or [[financial-regulators/jbic|JBIC]] extends buyer credit, and NEXI insures the lender against buyer/sovereign default, lowering the bank's capital cost and widening syndication. The product-level catalogue (普通貿易保険, buyer-credit, supplier-credit, overseas-investment insurance) is mapped in [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]]; the institutional split among promotion, insurance, and financing is in [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]].

## Boundary cases

- **Not cargo insurance.** Trade insurance covers *payment* risk, not loss of the goods in transit — that is marine cargo / P&I cover ([[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]]). Exporters often buy both.
- **Not a guarantee.** A claim pays *after* a loss event and waiting period, and usually at less than 100% — it is not an on-demand promise to pay.
- **Coverage gaps.** High-risk sovereigns may be off-cover or capped; premiums on long tenors into weak countries can be material; and the insured ratio leaves the exporter with a retained share of every loss.

## Related

- [[trade/INDEX|trade INDEX]]
- [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC comparison]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]]
- [[policy-finance/oecd-export-credit-arrangement|OECD Export Credit Arrangement]]
- [[financial-regulators/jbic|JBIC]]
- [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- NEXI official site (English): https://www.nexi.go.jp/en/
- NEXI product catalogue: https://www.nexi.go.jp/en/product/
- METI Trade Control (external economy / trade-control orbit): https://www.meti.go.jp/english/policy/external_economy/trade_control/index.html
- OECD — Officially supported export credits: https://www.oecd.org/trade/topics/export-credits/

> [!info] 校核状态
> confidence: likely. The mechanism (commercial vs political risk split, indemnity-not-guarantee nature, OECD premium discipline, lender-wrap usage) is public institutional knowledge from NEXI / METI / OECD. No specific premium figures, country limits, or coverage ratios are asserted — those are deal- and year-specific and are described only as shape, not snapshot.

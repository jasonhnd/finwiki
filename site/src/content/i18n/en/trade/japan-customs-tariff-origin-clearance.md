---
source: trade/japan-customs-tariff-origin-clearance
source_hash: 1f58dfd136a45264
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "通関・関税・原産地証明 (customs clearance, tariff, certificate of origin) — the gate every cross-border shipment passes"
translated_at: 2026-06-05T00:00:00.000Z
---
# 通関・関税・原産地証明 (customs clearance, tariff, certificate of origin) — the gate every cross-border shipment passes

## Wiki route

This entry sits under [[trade/INDEX|trade INDEX]] and documents the **border-clearance layer** that sits underneath every trade transaction. Read it against its same-domain peer [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] — the Incoterms rule fixes *who is responsible for clearing* the goods (export and import customs), and this entry explains *what that clearance actually involves*. The preferential-tariff payoff of origin rules is developed in [[trade/japan-fta-epa-rcep-utilization|FTA / EPA / RCEP utilization]]. For the promotion body that publishes tariff and procedure guidance, cross into the METI orbit via [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] and the broader [[policy-finance/INDEX|policy-finance INDEX]].

## TL;DR

Before any imported good can move into a country, it must clear **customs (通関)**: the shipment is **declared**, **classified** under a tariff code, **valued**, charged the applicable **tariff/duty (関税)** and import consumption tax, and released. Three documents do most of the work — the **HS classification**, the **customs value**, and (where a preferential rate is claimed) the **certificate of origin (原産地証明)**. In Japan the gatekeeper is **税関 (Japan Customs)** under the Ministry of Finance. Getting classification, valuation, or origin wrong is the most common cause of delayed shipments, back-duty assessments, and lost preferential rates.

This layer is invisible until it bites — but it determines landed cost and is the precondition for everything the trade-finance instruments settle.

## The three questions customs asks every shipment

| Question | Mechanism | Why it matters |
|---|---|---|
| **What is it?** | **HS classification** — a 6-digit Harmonized System code (WCO), extended to 9 digits in Japan's tariff schedule | The code determines the duty rate and any quota / licensing / safeguard regime |
| **What is it worth?** | **Customs valuation** — normally the WTO transaction value (price actually paid, with adjustments for freight, insurance, royalties, etc.) | Duty and import tax are levied *ad valorem* on this value, so the Incoterms delivery point affects it |
| **Where is it from?** | **Rules of origin** — substantial-transformation / value-content tests deciding the economic nationality of the good | Origin decides whether a preferential (FTA/EPA) rate applies and whether anti-dumping / safeguard duties attach |

These three determinations together set the **landed cost** — the price after duty and import tax that actually competes in the destination market.

## HS classification — the universal product language

The **Harmonized System (HS)**, maintained by the **World Customs Organization (WCO)**, is a global nomenclature in which every traded good has a code. The first **6 digits are internationally common**; countries add national digits (Japan uses up to 9). Classification is not arbitrary — it follows the General Rules of Interpretation — but borderline goods (composite articles, sets, parts vs finished items) generate genuine disputes. A wrong code means a wrong duty rate, and customs can re-classify and assess back-duty. Japan Customs operates an **advance ruling (事前教示)** system so importers can lock a classification before shipment.

## Tariff (関税) — the duty layered on import

The applicable duty rate is read off Japan's **tariff schedule (実行関税率表)** by HS code. Several rate columns may apply to the same good:

| Rate type | Applies to |
|---|---|
| **General rate (基本税率)** | Statutory baseline |
| **WTO bound / MFN rate (協定税率)** | Most-favoured-nation rate for WTO members |
| **Preferential rate (特恵税率)** | GSP for eligible developing countries |
| **EPA/FTA rate (EPA税率)** | Lowest, but only with a qualifying [[trade/japan-fta-epa-rcep-utilization|certificate of origin under an EPA]] |

On import into Japan the good also bears **import consumption tax (輸入消費税)**, collected by customs alongside the duty. The order of preference and eligibility is precisely why **origin documentation** is worth the administrative effort — the EPA column can be **zero**, but only if origin is proven.

## Certificate of origin (原産地証明) — proving economic nationality

A **certificate of origin** attests where a good was produced under the relevant rules of origin. Two broad families:

1. **Non-preferential CO** — proves origin for general purposes (e.g., country-of-origin marking, anti-dumping scope). In Japan these are issued by the **chambers of commerce (商工会議所)**.
2. **Preferential CO** — proves the good *qualifies* for an FTA/EPA preferential rate. Modern Japanese EPAs increasingly use **self-certification (自己申告)** by the exporter/importer rather than a third-party certificate, and **RCEP** allows certification by approved exporters.

The substance behind the certificate is the **rules of origin**: a good must be either **wholly obtained** in the country or have undergone **substantial transformation** there — tested by a **change in tariff classification (CTC)**, a **regional value content (RVC)** threshold, or a specific processing rule. These tests, and how Japanese firms actually use them, are the subject of [[trade/japan-fta-epa-rcep-utilization|FTA / EPA / RCEP utilization]].

## How clearance interacts with the Incoterms rule

Customs clearance is not a free-floating step — the **Incoterms 2020** rule allocates it:

- Under **EXW**, the buyer handles *export* clearance (awkward, since the buyer is foreign to the seller's customs).
- Under **DDP**, the seller handles *import* clearance and pays the destination duty — taking on the classification/valuation/origin risk in a foreign customs regime.
- Most rules put export clearance on the seller and import clearance on the buyer.

So the choice of delivery term in [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] directly assigns who bears the customs administrative burden and duty cost documented here. The customs value, in turn, depends on which costs (freight, insurance) the term bundles into the price.

## Boundary cases and pitfalls

- **Misclassification.** The single most common error; advance rulings (事前教示) mitigate it.
- **Undervaluation / related-party pricing.** Customs can challenge the transaction value where buyer and seller are related; transfer-pricing and customs valuation can pull in opposite directions.
- **Origin failure.** Claiming an EPA rate without a valid origin basis triggers loss of preference plus back-duty; self-certification shifts the proof burden onto the trader's records.
- **Not the same as export control.** Tariff/origin is about *duty and trade preference*; **security export control** (dual-use, end-user) is a separate METI licensing regime under 外為法 and is out of scope here.

## Related

- [[trade/INDEX|trade INDEX]]
- [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020 trade-terms framework]]
- [[trade/japan-fta-epa-rcep-utilization|FTA / EPA / RCEP utilization]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC comparison]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- 税関 Japan Customs (English): https://www.customs.go.jp/english/
- Japan Customs — Tariff schedule overview: https://www.customs.go.jp/english/summary/tariff.htm
- JETRO — trade and tariff information portal: https://www.jetro.go.jp/en/
- WCO — Harmonized System nomenclature: https://www.wcoomd.org/en/topics/nomenclature/overview.aspx

> [!info] 校核状态
> confidence: likely. HS classification, the WTO transaction-value method, Japan's multi-column tariff schedule (基本/協定/特恵/EPA), import consumption tax collection at the border, chamber-issued vs self-certified origin, and the advance-ruling (事前教示) system are public procedural facts from 税関 / WCO / JETRO. No specific duty rates are quoted — rate columns vary by HS line and change with each EPA and annual tariff revision.

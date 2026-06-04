---
source: japanfg/boj-payment-settlement-dept
source_hash: 9e37873cb25b2d42
lang: zh
status: machine
fidelity: ok
title: "決済機構局 (BoJ Payment and Settlement Systems Department)"
translated_at: 2026-05-31T11:13:44.918Z
---

# 決済機構局 (BoJ Payment and Settlement Systems Department)

## Wiki ??
????? [[JapanFG/INDEX|JapanFG index]]. ??? [[financial-regulators/boj-financial-markets-dept|金融市場局]] for the BoJ market-operations counterpart and [[financial-regulators/boj-financial-system-dept|金融機構局]] for the prudential-side bureau. For the broader settlement system, anchor through [[banking/INDEX|banking landscape]] and [[financial-regulators/boj-monetary-policy|BoJ monetary policy]].

## TL;DR

The Payment and Settlement Systems Department (決済機構局) is the Bank of Japan's internal bureau in charge of BOJ-NET operation, settlement-system policy, and oversight of major financial market infrastructures (FMIs) in Japan. It is the bureau that operates the country's central-bank money rail and coordinates with the Zengin system on retail funds settlement.

For JapanFG, this bureau is the official counterpart of every payment, settlement, BaaS, and tanshi page that depends on BOJ-NET — i.e. essentially every interbank flow above the retail layer.

## 1. Function / scope

The BoJ's English organization chart lists the Payment and Settlement Systems Department as the bureau responsible for:

- Operation of BOJ-NET (the Bank of Japan Financial Network System), which provides RTGS settlement for current-account transfers and DvP settlement for JGBs.
- Policy on the settlement-system architecture: liquidity-saving features, operating hours, BCP, and the connection design between BOJ-NET and external FMIs.
- Oversight of FMIs that are systemically important for Japan, including the Zengin-Net retail funds-transfer system, JSCC clearing, and the JGB book-entry transfer system at JASDEC and the BoJ.
- Publication of payment / settlement statistics, including the *Payment and Settlement Statistics* release and the irregular *Payment and Settlement Systems Report*.
- Cross-border settlement coordination with major central banks on issues such as PvP, CLS, and FX settlement risk; this overlaps with [[financial-regulators/boj-international-dept|国際局]] on BIS-CPMI work.

Internal coordination is dense: the bureau supplies the operational layer that lets [[financial-regulators/boj-financial-markets-dept|金融市場局]] execute open-market operations, and supports the settlement-risk monitoring done by [[financial-regulators/boj-financial-system-dept|金融機構局]].

## 2. Counterparty / interaction

Counterparties cluster in three layers:

- **BOJ-NET participants**: banks, securities firms, tanshi firms, and other current-account holders who settle through the system. This includes most of the JapanFG bank / securities universe and the tanshi pages [[financial-regulators/tokyo-tanshi|Tokyo Tanshi]], [[financial-regulators/central-tanshi|Central Tanshi]], [[financial-regulators/ueda-yagi-tanshi|Ueda Yagi Tanshi]].
- **Domestic FMI operators**: Zengin-Net, JSCC, JASDEC, the Tokyo Financial Exchange, and related clearing / settlement utilities. The bureau's oversight role here is policy-level rather than statutory supervision (statutory supervision sits with the FSA — see [[financial-regulators/fsa-supervision-bureau|監督局]]).
- **External coordination**: foreign central banks on cross-border settlement; BIS-CPMI on principles for financial market infrastructures; CLS Bank for FX settlement.

Retail-facing payment instruments (cards, prepaid, code payment, BaaS rails) are NOT operated by this bureau but are downstream users of the interbank settlement layer it runs. For the retail-rail map, route to [[banking/baas-japan-landscape|BaaS Japan landscape]] and [[banking/quick-deposit-four-methods|quick deposit four methods]].

## 3. Why this page matters

- It is the BoJ-side anchor for any JapanFG page that touches interbank settlement, BOJ-NET, JGB DvP, or Zengin coordination.
- It separates "settlement operator" (this bureau, central-bank money) from "settlement supervisor" (FSA, statutory supervision) — a distinction that matters whenever a page discusses systemic-risk or operational-resilience policy.
- It gives the right anchor for BaaS / payment pages to refer upstream when they need to ground retail flows in central-bank money settlement.
- It is the cleanest home for BOJ-NET operating-hour changes, FMI oversight reports, and CBDC-experiment work (where applicable) without conflating with the monetary-policy bureau.

## ????
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]
- [[financial-regulators/boj-financial-markets-dept|金融市場局 (Financial Markets Department)]]
- [[financial-regulators/boj-financial-system-dept|金融機構局 (Financial System and Bank Examination Department)]]
- [[financial-regulators/boj-international-dept|国際局 (International Department)]]
- [[banking/INDEX|Banking landscape]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[banking/quick-deposit-four-methods|Quick deposit four methods]]
- [[money-market/japan-money-market|Japan money market]]

## ??

- Bank of Japan, "Organization" (English) — https://www.boj.or.jp/en/about/organization/index.htm
- Bank of Japan, "Bank of Japan Financial Network System (BOJ-NET)" — https://www.boj.or.jp/en/paym/bojnet/index.htm
- Bank of Japan, "Payment and Settlement Systems" (outline) — https://www.boj.or.jp/en/paym/outline/index.htm
- Bank of Japan, "Payment and Settlement Releases" — https://www.boj.or.jp/en/paym/release/index.htm
- Bank of Japan, "Publications" (Annual Review) — https://www.boj.or.jp/en/about/publication/

---

> [!info] 校核状態
> confidence: **likely**. Bureau scope is described from BoJ's public payment-system pages. CBDC-experiment work is run by this bureau in coordination with others but is not asserted here in detail; refresh when the next *Payment and Settlement Systems Report* is published.

---
source: exchanges/jp-vasp-incident-history
source_hash: 8ff3ab837d160b52
lang: en
status: machine
fidelity: ok
title: "Japan Domestic VASP Crypto Asset Breach History (2014-2026)"
translated_at: 2026-07-29T11:50:43.000Z
---

# Japan Domestic VASP Crypto Asset Breach History (2014-2026)

## Overview

This entry organizes major asset-loss incidents affecting Japanese exchange operators or domestic customers, limited to amounts, asset quantities, and outcomes confirmed by public authorities and the companies involved. It presents the chronology of incidents, legislation, and self-regulation, but does not claim that a single incident caused a specific rule unless an official source states that relationship.

## Major Incident Timeline

Amounts are contemporaneous estimates; crypto-asset quantities and yen conversions are kept distinct. The table uses public materials for Mt.Gox, Coincheck, Zaif, BITPoint, and DMM Bitcoin. A Liquid incident from a different period is excluded because it could not be established on the same basis. ^[Sources: https://www.fsa.go.jp/news/30/virtual_currency/20180308.html; https://www.fsa.go.jp/news/30/virtual_currency/20180925.html; https://www.remixpoint.co.jp/corporate/press/2019/; https://www.npa.go.jp/bureau/cyber/koho/caution/caution20241224.html; https://www.dmm.com/bitcoin/news/20241202_01.html.]

| Date | VASP | Breach scale | Outcome |
|------|------|---------|------|
| 2014-02 | Mt.Gox | About 850,000 BTC (reported as about 750,000 customer BTC and 100,000 company BTC) | Legal proceedings followed, ultimately under civil rehabilitation |
| 2018-01 | [[exchanges/jp-exchange-coincheck]] | About 523 million XEM, then approximately ¥58 billion | FSA business-improvement order; later acquired by Monex Group |
| 2018-09 | [[exchanges/jp-exchange-zaif]] (former Tech Bureau) | Approximately ¥6.7 billion | FSA business-improvement order; Zaif business transferred to Fisco Cryptocurrency Exchange |
| 2019-07 | BITPoint Japan | Approximately ¥3.02 billion | Then-parent Remixpoint disclosed the incident and implemented service suspension and resumption measures |
| 2024-05 | [[exchanges/jp-exchange-dmm-bitcoin]] | 4,502.9 BTC, then approximately ¥48.2 billion | NPA and partners attributed the theft to TraderTraitor; customer accounts and entrusted assets transferred to SBI VC Trade |

## Regulatory Reflection (3  Phases)

1. **2017 Payment Services Act amendment** — Introduced the registration framework for crypto-asset exchange operators
2. **2018-2020 self-regulation and operator rules** — JVCEA became a certified association under the Payment Services Act; legislation and self-regulation developed customer-asset management and performance-guarantee crypto assets corresponding to online holdings
3. **2020 FIEA and related amendments** — Brought crypto-asset derivatives into the Financial Instruments and Exchange Act framework and amended customer-asset rules for exchange operators

These phases show the order in which the frameworks took effect, not a one-to-one causal relationship with individual incidents.

## Significance of the Lazarus Attribution

For the DMM Bitcoin incident, Japan's National Police Agency published a joint statement with the FBI and the US Department of Defense Cyber Crime Center attributing the activity to TraderTraitor, associated with North Korean authorities. The statement describes attackers approaching an employee of contractor [[exchanges/jp-custody-ginco]] under the guise of recruitment, inducing execution of a malicious Python script, and abusing session information from a communications system to manipulate a transaction request. It does not state that the signing key itself was stolen.

## Related

- [[exchanges/jp-exchange-coincheck]] · [[exchanges/jp-exchange-zaif]] · [[exchanges/jp-exchange-custodiem]] · [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-foreign-exchange-bitforex]] — Record of an overseas operator warned for unregistered business in Japan
- [[fintech/japan-financial-regulation]] — Payment Services Act / FIEA framework
- [[exchanges/jp-custody-ginco]] — DMM incident intrusion vector

Sources: Compiled from public information (FSA business improvement orders and administrative actions, JVCEA announcements, IR releases and press conferences and third-party committee investigation reports of the relevant entities, National Police Agency / Cyber Police Bureau announcements, Chainalysis / Elliptic public research)

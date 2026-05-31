---
source: exchanges/jp-vasp-incident-history
source_hash: ef95a12cb2378e51
lang: en
status: machine
fidelity: ok
title: "Japan Domestic VASP Crypto Asset Breach History (2014-2026)"
translated_at: 2026-05-31T06:16:15.688Z
---

# Japan Domestic VASP Crypto Asset Breach History (2014-2026)

## Overview

The history of domestic VASPs in Japan has been shaped by major asset breach incidents that have driven regulatory progress. Mt.Gox (2014) triggered the amendment of the Payment Services Act; Coincheck (2018) was the starting point for the establishment of the self-regulatory organization JVCEA and the mandatory cold storage ratio requirement; DMM Bitcoin (2024) was a large-scale incident in which the North Korean Lazarus attribution was officially confirmed by public authorities, leading to the transfer of business to SBI VC Trade. Breaches have not been isolated events — they have recurred in a cycle accompanied by "regulatory reflection" in the form of hot wallet 5% caps and mandatory segregation of client assets.

## Major Incident Timeline

| Date | VASP | Breach scale | Outcome |
|------|------|---------|------|
| 2014-02  | Mt.Gox | Approx. 850,000  BTC (approx. 470 億円 at the time) | Civil rehabilitation → bankruptcy → ongoing legal resolution; triggered 2017  Payment Services Act amendment |
| 2018-01  | [[exchanges/jp-exchange-coincheck]] | Approx. 580 億円 (5.2 億 XEM) | Establishment of JVCEA (2018-04), FSA business improvement order, acquisition by Monex Group |
| 2018-09  | [[exchanges/jp-exchange-zaif]] (formerly Tech Bureau) | Approx. 70 億円 | Business transferred to Fisco Digital Asset Group |
| 2019-07  | BITPoint Japan | Approx. 35 億円 | Rebuilt under Laser Tech |
| 2019-09  | Liquid (QUOINE) | Approx. 105 億円 (two-stage breach) | Acquired by FTX → FTX collapse → business succeeded by [[exchanges/jp-exchange-custodiem]] |
| 2024-05  | [[exchanges/jp-exchange-dmm-bitcoin]] | 4,502.9  BTC approx. 482 億円 | FBI / National Police Agency jointly attributed to Lazarus / TraderTraitor; cessation of business → transfer to SBI VC Trade (2025) |

## Regulatory Reflection (3  Phases)

1. **Phase 1 (2017  Payment Services Act amendment)** — In response to Mt.Gox, introduced VASP registration system and defined crypto assets as a "payment method"
2. **Phase 2 (2018-2020  self-regulation + operator discipline)** — Following the successive Coincheck/Zaif incidents, JVCEA was designated a certified self-regulatory organization. Hot wallet client asset 5% cap, cold storage 95% requirement, and mandatory segregation of assets (trust or individual management) introduced
3. **Phase 3 (2020  Financial Instruments and Exchange Act amendment)** — Crypto asset derivatives brought under the FIEA framework; internal management systems and cyber-resilience requirements strengthened

## Significance of the Lazarus Attribution

The DMM Bitcoin incident (2024-05) is the first large-scale Japanese VASP case officially attributed to the North Korean Lazarus Group's sub-unit TraderTraitor through a joint statement by the FBI, the US Treasury Department, and the National Police Agency. The attack method was a social-engineering plus supply-chain hybrid: attackers impersonated recruiters on LinkedIn to infiltrate an engineer at outsourced contractor [[exchanges/jp-custody-ginco]], then stole signing keys. Unlike risks from unregistered overseas operators, this incident exposed the risk of key exfiltration from within registered VASPs — a distinct category of "compliance boundary-external risk."

## Related

- [[exchanges/jp-exchange-coincheck]] · [[exchanges/jp-exchange-zaif]] · [[exchanges/jp-exchange-custodiem]] · [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-foreign-exchange-bitforex]] — Overseas exit scam parallel cases
- [[fintech/japan-financial-regulation]] — Payment Services Act / FIEA framework
- [[exchanges/jp-custody-ginco]] — DMM incident intrusion vector

Sources: Compiled from public information (FSA business improvement orders and administrative actions, JVCEA announcements, IR releases and press conferences and third-party committee investigation reports of the relevant entities, National Police Agency / Cyber Police Bureau announcements, Chainalysis / Elliptic public research)

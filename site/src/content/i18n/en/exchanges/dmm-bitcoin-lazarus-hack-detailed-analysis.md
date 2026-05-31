---
source: exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis
source_hash: 8c69901545d0ab8d
lang: en
status: machine
fidelity: ok
title: "DMM Bitcoin outflow incident detailed analysis（2024-05）— 4,502.9 BTC attributed to Lazarus"
translated_at: 2026-05-31T03:19:56.501Z
---

# DMM Bitcoin outflow incident detailed analysis（2024-05）— 4,502.9 BTC attributed to Lazarus


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM 580 億円流出事件 詳細分析 (2018-01)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. Incident overview

On the evening of 2024-05-31, **4,502.9 BTC（equivalent to approx. 482 億円）was illicitly drained** from DMM Bitcoin. At the time, it was the largest domestic outflow incident after the [[exchanges/jp-exchange-coincheck]] NEM incident（2018, 580 億円）. It was later attributed, in a joint statement by the FBI + the National Police Agency + DC3 （the US Department of Defense Cyber Crime Center）in 2024-12 , to **TraderTraitor**（a unit under North Korea's Lazarus）.

## 2. Technical cause (within publicly available information)

- The presumed path was a social-engineering attack via a **contractor / outsourced-vendor system**
- An operational error in the **hot-key management process** was a contributing factor
- The detailed intrusion path is undisclosed as the investigation continues
- Segregated management of customer assets was functioning; the outflow was limited to the company's own assets (per DMM's claim)

## 3. Emergency response + protection of customer assets

- **2024-05-31** Halted all crypto-asset trading
- **2024-06-05** DMM Bitcoin raised funds from its own group and procured, in the market, BTC equivalent to the customer-asset portion to safeguard it
- **2024-09** [[exchanges/fsa-business-improvement-orders-history]] issued a business-improvement order
- **2024-12-01** Full service suspension + announcement of business closure
- **2025-03-08** Transfer of customer assets / accounts to [[exchanges/jp-exchange-sbi-vc-trade]] completed; the DMM Bitcoin legal entity dissolved

## 4. Attribution confirmation (Lazarus / TraderTraitor)

- **2024-12-23** A joint statement by the FBI + the National Police Agency + DC3  formally attributed it as "carried out by TraderTraitor（under Lazarus）"
- As a North Korea state-linked crypto-asset theft, it was among the largest in scale for 2024 年
- In coordination with forensic vendors such as Chainalysis, fund-flow tracing continues
- Blocking off-ramping via mixers is a challenge

## 5. Institutional significance

- The **business-closure + transfer-to-competitor model** — this is the 3  pattern（Coincheck 2018 = absorbed via subsidiary-ization; FTX Japan 2023 = survived through segregated management + 100% returns; DMM 2024 = closure + transfer）
- Highlighted **contractor / outsourcing risk**（an argument running parallel to the EU CTPP / DORA）
- Domestic substantiation of the global Lazarus threat
- Regulatory revision underway（strengthening outsourcing management toward 2026 ）

## Related

- [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-exchange-sbi-vc-trade]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/coincheck-nem-hack-detailed-analysis]]（comparison）
- [[exchanges/fsa-business-improvement-orders-history]]
- [[exchanges/jp-vasp-ma-consolidation-history]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus ハック詳細分析]]
- [[exchanges/global-crypto-forensics-vendor-layer|グローバル crypto forensics ベンダーレイヤー]]

Source: compilation of public information（DMM Bitcoin/SBI VC Trade IR disclosures, FSA business-improvement order, National Police Agency/NPA announcements, Chainalysis/Elliptic public traces, Lazarus-group tracking reports）

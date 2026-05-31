---
source: exchanges/coincheck-nem-hack-detailed-analysis
source_hash: cb218e049dd30a3c
lang: en
status: machine
fidelity: ok
title: "Coincheck NEM 580 億円 outflow incident detailed analysis (2018-01)"
translated_at: 2026-05-31T03:19:56.394Z
---

# Coincheck NEM 580 億円 outflow incident detailed analysis (2018-01)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. Incident overview

In the early hours of 2018-01-26, **approximately 5.2 億 XEM (worth about 580 億円 at the time)** flowed out of Coincheck's NEM (XEM) hot wallet to external addresses. At the time this was the **largest crypto-asset theft in history**, drawing international attention as an amount exceeding Mt.Gox (2014). Although the **mosaic-tag tracking** developed by the NEM Foundation made the flow of the leaked funds traceable in real time, it could not fully prevent cash-out via dark-web DEXes, and an estimated 60% worth is said to have been laundered into other currencies.

## 2. Technical cause

- **Hot-wallet 100% operation**: at the time of the outflow the offline (cold) custody ratio for XEM was 0%. All assets were always in an online state
- **Multisig not implemented**: XEM already supported multisig at the time, but Coincheck ran **single-signature operation**, citing implementation cost
- **Weakness in private-key management**: single-key hot-wallet configuration + undocumented key-management process
- **Intrusion path**: malware infection via a spear-phishing email to a business PC (later attributed, in a National Police Agency investigation, presumptively to **North Korea's Lazarus / APT38**)

## 3. Compensation scheme

- **2018-01-28 (2  days after the outflow)**: officially announced **full JPY compensation** to 26 万 customers + worth about 580 億円
- **2018-03-12**: compensation completed (**1 XEM = 88.549 円** conversion)
- **Funded from Coincheck's own capital** (the independent period before becoming a Monex subsidiary)
- Voluntary compensation at a stage where the legal repayment obligation had not been established was **highly unusual globally** — a rare case of continuing business without bankruptcy

## 4. Regulatory reflection

- **2018-03**: FSA conducted simultaneous on-site inspections of 16 社 domestic VASPs + issued a **business-improvement order** to Coincheck
- **2018-04**: **JVCEA established** (the self-regulatory body was launched)
- **2018-04**: **Monex Group made Coincheck a wholly owned subsidiary** (36 億円)
- **2020-05**: the amended FIEA + supervisory guidelines institutionalized the **segregated-management obligation of hot wallet 5% / cold wallet 95%**

## 5. International comparison

Compared with the later **Mt.Gox** (2014  outflow · repayment still continuing in 2026  after 12  years had passed) and **FTX International** (2022  · partial repayment as of the point 3  years had passed), Coincheck **completed full JPY compensation in 50  days**. As a voluntary response outside the framework of system design, it ultimately became a **proof-of-concept case** for domestic regulation (95% cold-wallet obligation + JVCEA).

## Cross-links

- [[exchanges/jp-exchange-coincheck]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[exchanges/fsa-business-improvement-orders-history]]
- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-ma-consolidation-history]] (Monex subsidiarization)
- [[exchanges/mtgox-bankruptcy-processing-timeline]]
- [[exchanges/ftx-japan-100pct-return-case-study]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus ハック詳細分析]]

来源: 公開情報整理 (Coincheck/マネックスグループ IR 開示、FSA 業務改善命令・記者会見、警察庁 NEM 流出事案関連発表、Chainalysis/Elliptic 公開トレース、Lazarus グループ追跡レポート)

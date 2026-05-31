---
source: exchanges/bybit-lazarus-hack-detailed-analysis
source_hash: e158825ae10af916
lang: en
status: machine
fidelity: ok
title: "Bybit Lazarus $14.6 億 hack detailed analysis (2025-02) — largest crypto-asset outflow in history"
translated_at: 2026-05-31T03:19:56.481Z
---

# Bybit Lazarus $14.6 億 hack detailed analysis (2025-02) — largest crypto-asset outflow in history

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. Incident overview

2025-02-21, approximately **$14.6 億 (about 2,200 億円)** equivalent of ETH + stETH + mETH and others flowed out of Bybit's ETH cold wallet. This is the **largest crypto-asset theft in history**, exceeding in nominal-conversion terms the 850,000 BTC of the Mt.Gox 2014  incident. Chainalysis + Elliptic + ZachXBT immediately attributed it via public forensics to the **Lazarus Group (North Korea state-sponsored hackers)** right after the incident. Bybit is a top-3 global CEX (a leader in derivatives trading volume) headquartered in Dubai, UAE.

## 2. Technical cause (public information)

Not a genuine cold-wallet intrusion but a **man-in-the-middle attack on the signing UI (supply-chain attack)**:

- In the **cold → hot multisig signing process**, the **Safe (formerly Gnosis Safe) frontend** was tampered with, and the signers approved a forged destination transaction
- The attacker breached Safe's web infrastructure and presented the forged UI only to the Bybit signers
- The signers approved on a UI displaying the legitimate destination → in reality they signed a transfer to the attacker's wallet
- Identified as a **supply-chain attack via shared infrastructure (Safe)** → exposing an industry-wide risk

## 3. Immediate response

- **2025-02-21** Bybit CEO Ben Zhou responded with a **live stream** within hours of the incident being discovered (exceptional transparency)
- **30 minutes after** the incident, began requesting Tether + Circle + major CEXs to freeze OFAC-related addresses
- **2025-02-22** Bybit officially announced a **guarantee of full customer make-whole** using its own funds + a partner bridge loan
- **Trading and withdrawal operations continued** without suspension → demonstrating operational continuity capability (liquidity + transparency)
- Curbed bank-run risk and limited long-term reputation damage

## 4. OFAC chain-level freeze precedent

The incident became a **demonstration case of US chain-level economic sanction power**:

- **End of 2025-02 ** OFAC added 200+ attack-related wallet addresses to the SDN list
- Major CEXs such as Tether / Circle / Coinbase / Binance executed freezes
- **Within 30 minutes of the incident, froze approximately $500M of outflowed funds** = the fastest chain-level response in history
- Through the cooperation of USDT / USDC issuers, proved the feasibility of instant freezing at the stablecoin layer
- However, native assets such as ETH are difficult to freeze → the bulk was laundered via mixers / cross-chain bridges

## 5. Strategic implications

- Bybit limited reputation damage through **CEO transparency + business continuity** (retained its top-3 CEX position after the incident)
- The materialization of **supply-chain attack** risk (shared infrastructure such as Safe) → drove the entire industry to strengthen signing-UI verification
- **End of 2026-03 ** Bybit completely terminated services for Japan residents (after 3 warnings from the FSA) → the direct causal relationship with the withdrawal from the Japan market is unclear, but it is a symbol of global regulatory pressure
- Reaffirmed Lazarus's continuing threat (a major case on par with [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]])

## Cross-links

- [[exchanges/jp-foreign-exchange-bybit]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[exchanges/coincheck-nem-hack-detailed-analysis]]
- [[exchanges/mtgox-bankruptcy-processing-timeline]]
- [[exchanges/uae-vara-licensing-overview]]
- [[exchanges/global-cex-top10-comparison]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]]
- [[exchanges/global-crypto-forensics-vendor-layer|グローバル crypto forensics ベンダーレイヤー]]

Source: 2026-05-19 jp-crypto-exchange-research Phase 5

---
source: exchanges/cex-wazirx-india
source_hash: 91b3e8114a895696
lang: en
status: machine
fidelity: ok
title: "WazirX — Indian CEX / July 2024 cyberattack overview"
translated_at: 2026-07-29T12:18:13.000Z
---

# WazirX — Indian CEX / July 2024 cyberattack overview

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/cex-coindcx-india|CoinDCX]] for the closest India peer / contrast context, [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] for parallel North Korean attribution pattern, and [[exchanges/global-crypto-exchange-bankruptcy-comparison|グローバル CEX 破綻比較]] for the restructuring / scheme-of-arrangement framework.

> Established in March 2018 · Indian INR spot CEX · **one multisig wallet was attacked on 2024-07-18, with more than US$230 million stolen** · the amended Scheme of Arrangement became effective on 2025-10-15

## 1. Entity / shareholders

- Trade name: **Zanmai Labs Private Limited** (India operating company)
- Parent: **Zettai Pte. Ltd.** (Singapore entity, group holding company)
- Established: 2018-03 (Mumbai, India)
- Founders: Nischal Shetty (CEO), Sameer Mhatre (CTO), Siddharth Menon (COO)
- Shareholder composition:
  - **Binance**: announced acquisition of WazirX 2019-11  — but a **public dispute** between the two companies over the scope of the acquisition (Binance: "acquired only the IP / app / trademarks, did not acquire the operating entity")
  - **Tiger Global**, etc.: early investors
  - Nischal Shetty / co-founders: continued shareholding
- **Peculiarity of the Binance relationship**: in 2023 年, Binance clarified on its official blog that "Zanmai Labs operates WazirX independently of Binance" → understood in the industry as a de facto **dissociation**

## 2. Registration / licensing status (India framework)

- **FIU-IND PMLA reporting entity**: registered (in 2024 年)
- **1% TDS / 30% capital gains**: complies with tax obligations as does [[exchanges/cex-coindcx-india|CoinDCX]]
- **Singapore side**: the Singapore High Court sanctioned the amended Scheme of Arrangement on 2025-10-13, and it became effective on 2025-10-15

## 3. Supported assets

- INR spot market
- Listings changed across the incident and restructuring, so this entry does not fix an asset count
- USDT market co-located
- **After the 2024-07 incident**: product, deposit, and withdrawal availability changed over time and should be checked in current WazirX notices with an as-of date

## 4. Scope of business

- Spot trading (INR / USDT pairs)
- P2P trading (for India-domestic users)
- staking: limited
- Fiat deposits: via India-domestic bank accounts (IMPS / UPI / NEFT, restricted depending on banks' stance)
- **Since the 2024-07 incident**: trading, deposit, and withdrawal functions changed in stages. Status after the Scheme became effective in 2025-10 should be checked in official notices

## 5. How to read scale information

- Market share, 24h volume, rank, and user count vary sharply with the as-of date and service state before and after the incident, so this entry does not adopt fixed values
- Comparison with [[exchanges/cex-coindcx-india|CoinDCX]] should align the period, INR market, and product scope
- This entry does not infer a transfer of market share or current rank from the 2024-07 incident

## 6. History / major events

Source: The entire table is based on WazirX's official [cyberattack update](https://wazirx.com/blog/important-update-cyber-attack-incident-and-measures-to-protect-your-assets/), [court-sanction announcement](https://wazirx.com/blog/singapore-court-sanctions-wazirx-restructuring-scheme/), [Scheme effectiveness announcement](https://wazirx.com/blog/the-scheme-of-arrangement-is-now-effective/), and [Fireblocks integration announcement](https://wazirx.com/blog/wazirx-integrates-fireblocks-to-enhance-digital-asset-custody/), checked on 2026-07-29.

| Period | Item |
|------|------|
| 2024-07-18 | A cyberattack targeted one multisig wallet and stole more than US$230 million in crypto assets; deposits, withdrawals, and trading were temporarily paused |
| 2025-10-13 | The Singapore High Court sanctioned the amended Scheme of Arrangement |
| 2025-10-15 | The amended Scheme of Arrangement became effective |
| 2026-01 | WazirX integrated Fireblocks as its digital-asset custody infrastructure |

## 7. Strategic developments

- **Dispute over the cause of the Liminal hack**: WazirX argues it was a **problem with the multi-sig wallet of Liminal Custody ([[exchanges/global-crypto-forensics-vendor-layer|crypto custody / forensics vendor layer]])**. Liminal argues it was a **key-management problem on WazirX's side**. The two companies' official statements conflict, and responsibility has not been fully established
- **Attribution boundary**: analysis by onchain-forensics providers is distinct from a final public-authority attribution. This entry does not infer identity with the [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit hack]]
- **Creditor response**: recovery and distribution terms should be checked in the court-sanctioned Scheme documents and WazirX's official notices
- **Scheme of Arrangement**: the Singapore High Court sanctioned the amended Scheme on 2025-10-13, and it became effective on 2025-10-15
- **Binance relationship**: the historical acquisition announcement and public statements about the operating entity are distinct; this entry does not infer current legal or economic responsibility
- **Custody rebuild**: WazirX announced the Fireblocks integration in 2026-01

## 8. Position within the industry

WazirX is a CEX-resilience case for examining, in sequence, the 2024-07 incident targeting one multisig wallet, the Singapore High Court Scheme, and the custody-infrastructure rebuild. Comparison separates **custody-provider multisig implementation / key management / attack detection**.

In the context of [[exchanges/global-crypto-exchange-bankruptcy-comparison|グローバル CEX 破綻比較]], unlike the **FTX-bankruptcy type (fraud + co-mingling)**, it is a bankruptcy pattern close to the [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck]] / [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin]] type of **hack-caused + cross-border restructuring**. However, in mediating through a Singapore entity, it is not a purely domestic case but a typical example of **Asian cross-border restructuring**.

## Related

- [[exchanges/cex-coindcx-india]] — Indian CEX / FIU-IND registration comparison (most important cross-link)
- [[exchanges/bybit-lazarus-hack-detailed-analysis]] — Lazarus attack-pattern comparison
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]] — Same Lazarus attack-pattern comparison
- [[exchanges/coincheck-nem-hack-detailed-analysis]] — Comparison with a same-scale Japan hack case
- [[exchanges/global-crypto-exchange-bankruptcy-comparison]] — Global CEX bankruptcy comparison
- [[exchanges/global-crypto-forensics-vendor-layer]] — Liminal / Chainalysis / Elliptic layer
- [[exchanges/global-cex-top10-comparison]] — Global CEX top 10
- [[exchanges/INDEX]] — Exchange domain index

## Sources

- Compilation of public information (WazirX official IR / About / Hack response, wazirx.com)
- Compilation of public information (Binance 2019-11  WazirX acquisition announcement / 2023  dissociation official statement, binance.com Blog)
- Compilation of public information (Liminal Custody 2024-07  multi-sig wallet incident official statement)
- Compilation of public information (Zettai Pte. Ltd. Singapore High Court Moratorium / Scheme of Arrangement public materials)
- Compilation of public information (WazirX restructuring proposal 2024-10  / 2025  reporting, Reuters / CoinDesk / The Block)
- Compilation of public information (North Korean Lazarus-related onchain forensics analysis, Chainalysis / Elliptic / TRM Labs public reports)
- Compilation of public information (India Enforcement Directorate WazirX-related account freeze 2022-08  reporting)

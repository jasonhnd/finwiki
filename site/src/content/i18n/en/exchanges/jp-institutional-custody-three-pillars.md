---
source: exchanges/jp-institutional-custody-three-pillars
source_hash: 859bd23a621bd35b
lang: en
status: machine
fidelity: ok
title: "Japan Institutional Custody Three-Pillar Structure — Komainu / Ginco / Fireblocks Japan Comparison"
translated_at: 2026-07-29T11:50:43.000Z
---

# Japan Institutional Custody Three-Pillar Structure — Komainu / Ginco / Fireblocks Japan Comparison

## Overview

This entry compares Komainu, Ginco, and Fireblocks—three institutional custody or wallet-infrastructure providers referenced by Japanese businesses—only on technical methods and functions confirmed in their official materials. It is not a domestic market-share or ranking comparison, and it distinguishes the legal custodian from a technology vendor.

## Three Company Profiles

### Komainu Holdings (Jersey)
- Established in 2018 by Nomura Holdings, CoinShares, and Ledger [[exchanges/jp-custody-komainu]]
- Its official technical description combines HSMs and MPC with a QR-based signing flow in an offline environment
- Provides institutional custody; specific customer relationships should be checked in primary disclosures as of their publication dates

### Ginco, Inc. (Japan)
- Provides Ginco Enterprise Wallet and Ginco Node [[exchanges/jp-custody-ginco]]
- Its official description says private keys are distributed in HSMs and dedicated offline signing terminals are used; this entry does not label the method as MPC
- Provides corporate wallet and node infrastructure; individual customers and capital relationships should be checked in each disclosure

### Fireblocks Japan (Japanese business layer of an overseas vendor)
- Japanese corporate or business layer providing the Fireblocks platform [[exchanges/jp-custody-fireblocks-japan]]
- **MPC-based wallet infrastructure + Policy Engine + workflows**
- Fireblocks' global customer count changes by disclosure date and is not used here as a fixed domestic rank or market-size measure

## Technology / Business Model Comparison

The following is a snapshot of official technical and service descriptions reviewed on 2026-07-29. Product configurations and implementations may change. ^[Sources: https://komainu.com/about/; https://komainu.com/expertise/custody-technology/; https://komainu.com/services/custody/; https://www.ginco.co.jp/en/service/enterprise-wallet--en; https://developers.fireblocks.com/docs/what-is-fireblocks.]

| Axis | Komainu | Ginco | Fireblocks |
|---|---|---|---|
| Key management confirmed in official material | HSM + MPC, offline QR signing | Distributed storage in HSMs, dedicated offline signing terminals | MPC-based wallet infrastructure |
| Main functions | Institutional custody | Enterprise Wallet and node services | Policy Engine and transfer / treasury workflows |
| Entity / origin | Jersey company established by Nomura, CoinShares, and Ledger in 2018 | Japanese company Ginco | Fireblocks' global technology platform |

## Regulatory Positioning

It is not valid to conclude categorically that registration is unnecessary merely because a service is B2B infrastructure. The regulatory assessment depends on the entity managing crypto-assets as a business, control of keys, and the contractual structure. Check the [[exchanges/fsa-vasp-registration-system|FSA registration framework]] and the current registration of the exact contracting entity. This entry does not determine the three providers' Japanese licensing obligations.

## Competitive Landscape (International Comparison)

Functional comparisons with overseas providers such as Anchorage, Coinbase Custody, BitGo, and Fidelity Digital Assets are outside this entry's scope. Availability and partnerships in Japan change over time and should be checked in each provider's current official materials.

---
Sources: Official corporate and technical materials from Komainu, Ginco, and Fireblocks

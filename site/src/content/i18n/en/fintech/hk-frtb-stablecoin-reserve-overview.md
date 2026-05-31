---
source: fintech/hk-frtb-stablecoin-reserve-overview
source_hash: c1346985e5ff1cb8
lang: en
status: machine
fidelity: ok
title: "HK FRTB Stablecoin Reserve Requirements · HKMA Reserve Framework"
translated_at: 2026-05-31T06:16:15.686Z
---

# HK FRTB Stablecoin Reserve Requirements · HKMA Reserve Framework

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The reserve provisions of HKMA's 2025-08  stablecoin legislation constitute Asia's first stablecoin reserve framework aligned with the Basel III FRTB (Fundamental Review of the Trading Book) standard. Core requirements: 100% 1: 1  fiat reserve + Tier 1  assets (HKD/USD short-term government bonds + HKMA deposits) + third-party custody + monthly audit + paid-up capital HKD 100M+. Together with GENIUS §501 (≤93 -day T-bills) + MiCA EMT (≥30% bank deposits), these form the third differentiating coordinate in the three-circle architecture.

## Key facts

- HKMA stablecoin legislation: Stablecoin Ordinance adopted 2025-08  ^[extracted]
- Capital threshold: HKD 100M+ (materially higher than MAS S$5M / MiCA EMT minimum capital €350K) ^[extracted]
- Reserve bond maturity: ≤1  years (intermediate between GENIUS 93  days and MiCA's no restriction) ^[extracted]
- Tier 1  stringency: aligned with Basel III FRTB Standardised Approach · first in Asia ^[extracted]
- 100% 1: 1  fiat reserve (HKD-pegged or USD-pegged) ^[extracted]
- Independent third-party custody (licensed TCSP/Trust) + monthly audit + quarterly public disclosure ^[extracted]
- Bankruptcy-remote segregation ^[extracted]
- e-CNY boundary demarcation: mainland China retail customers not accepted · hard political-balance clause ^[extracted]

## Mechanism / How it works

**Core of the HKMA stablecoin reserve**: 100% 1: 1  fiat reserve (HKD / USD pegged) + Tier 1  asset composition (HKD cash + HKMA central-bank deposits + HKD/USD short-term government bonds ≤1  years + limited proportion of commercial paper) + independent third-party custody (licensed TCSP/Trust) + monthly audit + quarterly public disclosure + bankruptcy-remote segregation + HKD 100M+ paid-up capital.

**FRTB connection**: HKMA treats stablecoin reserves as analogous to bank trading-book assets → applies Basel III FRTB Standardised Approach (SA). Market-risk capital calculation covers: interest rate risk + currency risk + credit spread risk. This is the world's first regulatory design explicitly incorporating stablecoin reserves into the Basel capital framework. The implied USDC-vs-USDT premium logic arising from capital calculation flowing through to the bank end is addressed in [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]].

**Three-circle architecture comparison**:
| Dimension | HKMA | GENIUS §501  | MiCA EMT |
|---|---|---|---|
| Reserve ratio | 100% 1: 1  | 100% 1: 1  | 100% 1: 1  |
| Bond maturity | ≤1  years | ≤93 -day T-bill | No restriction |
| Bank deposits | No cap | ≤50% cap | ≥30% floor |
| Central-bank deposits | HKMA direct | Fed master account (contested) | National central bank |
| Capital requirement | HKD 100M | Determined by OCC charter | EMI capital + ratio |
| Capital framework | Basel III FRTB | Banking Act + PCAOB | CRR/CRD VI |

## Origin & evolution

HKMA initiated stablecoin consultation in 2022-12 ; the second consultation paper in 2023-12  established a sandbox (ZA Bank / Standard Chartered / HSBC / Animoca × HKT consortium); the Stablecoin Ordinance was adopted in 2025-08 . In 2026-04 , HKMA's Consultation Paper "Capital treatment for licensed stablecoins" directly cited BCBS SCO60  as the parent standard. First licence decision 2026-05-21: of 9 社 applications, only 2 件 were in fact approved (HSBC + StanChart Anchorpoint); for strategic implications see [[fintech/hkma-stablecoin-licensing-implications|HKMA ライセンス戦略的含意]]. For Asia / global cross-comparison see [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコイン・ライセンス概観]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概観]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

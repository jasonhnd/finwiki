---
source: fintech/japan-bittrade-listing-process
source_hash: d02ee234071bb66a
lang: en
status: machine
fidelity: ok
title: "Japan BitTrade Listing Process — 8  Stage Structure of Registered Exchange Listing"
translated_at: 2026-05-31T11:13:44.860Z
---

# Japan BitTrade Listing Process — 8  Stage Structure of Registered Exchange Listing


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] Core cognition `[V?]`
> The listing process of Japan's registered exchanges (BitTrade, etc.) is not essentially a matter of ``listing once the business is finalized,'' but rather a process of converting a certain token into a financial product that can be operated for a long period of time within the Japanese regulatory system. JVCEA autonomous regulations + FSA supervision + legal opinion + technical safety examination + AML/KYC + liquidity stability 6  heavy examination must be cleared at the same time.

## Validation status legend

|label|meaning|
|------|------|
|`[V?]`|Not verified — provisional user notes|
|`[V~]`|partially verified|
|`[V✓]`|Confirmed|
|`[V✗]`|Disproved|

Verification priority: Actual listings → JVCEA/FSA official documents → BitTrade internal contacts → Consultants/Law firms.

## Panoramic view of 8  stage

```
1. Initial Business Contact (Business Screening)
   ↓
2. Project Due Diligence Company/Token/Market 3  layer
   ↓
3. Legal / Compliance examination (Token classification + securities judgment)
   ↓
4. 技術安全審査 (Smart Contract + Chain Risk)
   ↓
5. JVCEA / FSA compatible (autonomous examination + Financial Services Agency negotiation)
   ↓
6. Liquidity and Market Making (MM Agreement + Initial Depth)
   ↓
7. Listing execution (Go Live · Technical cooperation + public relations)
   ↓
8. Post Listing Monitoring
```

## Stage 1 : Initial business contact `[V?]`

**Project Submissions**: Whitepaper · Tokenomics · Team · Funding Information · GitHub · Audit Report · Legal Structure · Token Usage.

**BitTrade judgment criteria** (significantly different from overseas CEX): Japanese user base · Trading volume / OTC capacity · IEO suitability · Possibility of long-term collaboration · **Is it difficult to be crushed by FSA**?

> What Japanese exchanges are most concerned about is not whether they are popular, but whether they can explain their products to regulatory authorities and whether they will cause accidents.

## Phase 2 : Project Due Deli `[V?]`

- **Company layer**: Registered entity · Stock composition · UBO · Directors · Sanctions list · Bank transactions · Past lawsuits
- **Token layer**: Total amount · Issuance authority · Admin Key · Freeze · Blacklist · Mint/Burn · Vesting · Unlock — Emphasis on **freeze ability / upgrade authority / owner boundary** (see USDC / JPYC / XAU₮)
- **Market Layer**: Market Makers · Liquidity Sources · OTC Backups · Crash/Wash Trade Risk (FSA is extremely sensitive to market manipulation)

## Stage 3 : Legal / Compliance Examination `[V~]`

> Token classification table = `[V✓]` (Fund Settlement Act / Financial Instruments and Exchange Act / Electronic payment method Sanki has been verified by multiple sources) · “Fake Utility, True Securities” Red Line = `[V?]`

|type|regulatory law|Actual regulatory body|
|------|--------|--------------|
|crypto assets|Fund settlement law|Kanto Local Finance Bureau Cryptocurrency exchange business|
|Securities / ST|FIEA|第一種金商業 or PTS|
|Electronic payment method (stable coin)|Electronic payment means trading business|2026  system|
|Prepaid type|prepaid payment instrument|Restricted use|

See [[fintech/japan-financial-regulation|日本金融規制 — 三法体系]] for details.

### “Fake Utility, Real Securities” Red Line

Danger signals (easily judged by securities): distribution, principal guarantee, repurchase promise, fixed yield, NAV correspondence, debt mapping.

> ``You cannot contractually promise a buyback'' is a typical rule of thumb for avoiding securities classification in Japan.

## Stage 4 : Technical safety review `[V?]`

- **Smart Contract**: Audit report (required) · Upgradeability / Proxy · MultiSig · Emergency Pause · Reentrancy · Oracle Risk
- **Chain Risk**: Public chain safety · Possibility of chain outage · Bridge risk · Cross-chain complexity

> Japanese institutions prefer **per-chain issuance** to bridge (clear demarcation of liability for regulatory incidents).

## Stage 5 : JVCEA / FSA compatible `[V?]`

**Common Misconception**: “Japanese exchanges decide listings on their own” → ❌

```
BitTrade → JVCEA (Autonomous Examination) → FSA (Financial Services Agency)
```

**List of submitted materials**: Risk explanation · User protection measures · AML risk analysis · Market manipulation risk assessment · Token classification legal opinion · Technical risk explanation · Liquidity plan. See [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]] for an overview of the JVCEA autonomous examination, and [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]] for the FSA registration process.

## Stage 6 : Liquidity and Market Making `[V?]`

**The point at which many projects die**. Points to note: post-listing volume · spread · OTC underwriting · MM stability.

Typical requirements: MM agreement · Liquidity provider lockup · Initial depth commitment · Guaranteed market making funds.

## Stage 7 : Listing execution `[V?]`

- **Technical collaboration**: Wallet integration · Deposit / Withdrawal · Memo/tag · Hot/Cold wallet · Monitoring · Travel Rule
- **Public Relations**: Press Release · AMA · Campaign · OTC Promotion · Japan KOL

## Stage 8 : Continuous monitoring after listing `[V?]`

**In Japan, "listing is not the end"** Continuous monitoring: Token unlock schedule · Whale remittances · Market manipulation · Legislative changes · Project operations · Treasury health.

Measures to take in serious situations: Suspension of withdrawals → Delisting → Risk notification.

## IEO additional layer `[V?]`

IEO adds 1  layers to the standard listing process: Funding structure design · Sales rules for Japanese users · Lockup · Vesting schedule · Investor protection · Offering manual · Risk disclosure.

## 日本 vs 海外 上場比較 `[V?]`

|項目|Japan BitTrade|Overseas general CEX|
|------|---------------|--------------|
|legal review|extremely heavy|Light|
|JVCEA/FSA involvement|can be|none|
|Securities judgment|extremely strict|loose|
|AML requirements|extremely heavy|Moderate level|
|technical audit|deep|case by case|
|Listing speed|Slow (several months ~ 1 years+)|fast (weeks)|
|Listing cost|expensive|middle|
|sustainability|strong|Large fluctuation|

## 7  indicators that BitTrade really cares about `[V?]`

Many projects mistakenly believe that if their technology is excellent, they can go public. Actual priority:

1. Can it survive for a long time?
2. Will it cause a regulatory accident?
3. Will the trading post be reprimanded by the FSA?
4. Will it cause user complaints?
5. Is your AML clean?
6. Is the Token price stable?
7. Is it difficult to define it as a security?

## Applicable When

- Evaluation of projects that require listing on Japanese registered exchanges
- Response frame when asked by an overseas token project, “How long/difficult will it take to list in Japan?”
- Self-assessment of whether your token design touches the securitization red line
- Self-check before first business contact with registered exchanges such as BitTrade / bitbank / Coincheck etc.
- See [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]] for background on Japan VASP regulation timeline

## Unverified items

- [ ] Actual period required for JVCEA examination
- [ ] Trigger conditions for FSA involvement
- [ ] Standard terms of MM agreement (initial depth / spread / duration)
- [ ] Actual rejection rate of listing applications
- [ ] Composition of BitTrade Internal Review Committee
- [ ] IEO vs direct listing cost/time difference

## Sources

- Publication: JVCEA Autonomous Regulations / FSA Supervisory Guidelines / Fund Settlement Act
- Industry general: Japanese registered CEX listing practices

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス]]
<!-- /wiki-links:managed -->

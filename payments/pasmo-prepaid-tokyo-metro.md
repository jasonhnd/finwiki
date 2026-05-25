---
title: "PASMO: Tokyo private-rail and bus consortium prepaid IC"
aliases:
  - "pasmo-prepaid-tokyo-metro"
  - "PASMO 電子マネー"
  - "PASMO Co Ltd"
  - "パスモ 前払式支払手段"
  - "Mobile PASMO Apple Pay"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, prepaid, electronic-money, transit, felica, pasmo, tokyo-metro, private-rail]
status: active
sources:
  - "https://www.pasmo.co.jp/"
  - "https://www.tokyometro.jp/"
  - "https://www.kotsu.metro.tokyo.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.felicanetworks.co.jp/"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/"
---

# PASMO: Tokyo private-rail and bus consortium prepaid IC

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Tokyo private-rail / bus consortium prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid e-money economics]] for the 10 IC mutual-use scheme context. Compare with [[payments/suica-prepaid-jr-east|Suica]] (JR East counterpart and largest mutual-use peer), [[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]] (retail-anchored FeliCa), and [[payments/edy-rakuten-prepaid|Rakuten Edy]] (platform-agnostic FeliCa). The PASMO consortium covers Tokyo Metro, Toei Subway, and major private railways (Tokyu, Odakyu, Keio, Tobu, Seibu, Keisei, Sotetsu, Yokohama Minatomirai, Tama Monorail, etc.) plus the metropolitan bus network — see [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] for the full operator list and Cyberne inter-issuer settlement.

## TL;DR

**PASMO** is the **prepaid IC e-money operated by the Tokyo private-rail and bus consortium** — a multi-operator consortium centered on **株式会社パスモ (PASMO Co Ltd)** that pools issuance and settlement across Tokyo Metro, Toei Subway, and major private-rail / bus operators (Tokyu, Odakyu, Keio, Tobu, Seibu, Keisei, Sotetsu, Yokohama Minatomirai Railway, etc.). Launched 2007-03-18 to interoperate with [[payments/suica-prepaid-jr-east|Suica]] from day one, PASMO joined the **10 IC mutual-use scheme** in 2013-03-23 and is the principal non-JR transit IC in the Greater Tokyo area. PASMO runs on **FeliCa** contactless IC, is registered as a **第三者型前払式支払手段** under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]], and has cross-merchant retail acceptance across Tokyo and at any 10-IC-accepting POS nationwide. **Mobile PASMO** launched 2020-03 on Android Osaifu Keitai and 2020-10 on Apple Pay — meaningfully later than Mobile Suica's 2016 Apple Pay launch, reflecting the consortium-coordination cost of multi-operator agreement.

## Issuer and consortium structure

| Dimension | Reading |
|---|---|
| Operating company | 株式会社パスモ (PASMO Co Ltd) |
| Consortium members | Tokyo Metro, Toei Subway, Tokyu, Odakyu, Keio, Tobu, Seibu, Keisei, Sotetsu, Yokohama Minatomirai Railway, Tama Monorail, Keikyu, Tokyo Monorail, Saitama Railway, Tsukuba Express, Hokuso Railway, and others; full list at pasmo.co.jp |
| Bus consortium members | Tokyu Bus, Odakyu Bus, Keio Bus, Tobu Bus, Seibu Bus, Keisei Bus, Yokohama City Bus, etc. |
| FSA prepaid issuer | PASMO Co Ltd appears as 第三者型前払式支払手段 issuer in FSA `daisan.xlsx` |
| Launch year | 2007-03-18 (physical card), 2020-03 (Mobile PASMO Android), 2020-10 (Apple Pay) |
| Technology | FeliCa contactless IC |
| Mobile rail | Mobile PASMO (Osaifu Keitai → Apple Pay / Google Pay) |
| Charge ceiling | ¥20,000 (typical PASMO card) |
| Inter-issuer settlement | Cyberne system across 10 IC issuers |

## Legal basis: 前払式支払手段

PASMO is registered as a **第三者型前払式支払手段** under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 because acceptance extends beyond consortium-member operators to **third-party retail merchants** (convenience stores, vending, retail, ekinaka shops). Key regulatory consequences:

- PASMO Co Ltd appears in [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]].
- Half-yearly **unused-balance deposit** obligation (供託) with Legal Affairs Bureau.
- **No refunding to original payer except at issuance discontinuation** — PASMO does provide a service-refund path at consortium counters for a fee.
- **Breakage** — tourist-purchased PASMO cards not returned generate float and breakage to issuer.
- AML / KYC carve-outs under PSA prepaid thresholds.

## Consortium-coordination vs single-issuer comparison

PASMO's principal structural distinction from [[payments/suica-prepaid-jr-east|Suica]] is that it is a **multi-operator consortium** rather than a single-issuer product:

| Dimension | PASMO (consortium) | Suica (single JR East issuer) |
|---|---|---|
| Issuance authority | PASMO Co Ltd (consortium-owned) | JR East directly |
| Mobile rail rollout speed | Slower — consortium coordination required | Faster — single issuer decision |
| Apple Pay launch | 2020-10 | 2016-10 |
| Cross-operator acceptance (within Tokyo Metro / private rail) | All consortium members from day one | Mutual-use scheme (2013) |
| Group card co-brand | Operator-specific (TOKYU CARD, OPクレジット, etc.) | View Card (JR East) |
| Loyalty integration | Operator-specific (TOKYU POINT, OPポイント, etc.) | JRE POINT |
| Mobile Suica vs Mobile PASMO interoperability | Both work on Apple Pay; cannot hold same balance simultaneously | Same |

The **consortium structure** is a strength for breadth of operator coverage but a coordination tax on speed of product evolution; Apple Pay's 4-year delay relative to Mobile Suica reflects this.

## The 10 IC mutual-use scheme

PASMO and Suica's mutual-use was the foundational 2007 launch event — these two were interoperable from PASMO's day one, three years before the broader 2013 10 IC mutual-use scheme. Full mutual-use participant list is in [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]. Inter-issuer settlement runs through Cyberne.

## Mobile PASMO generations

| Generation | Year | Key features |
|---|---|---|
| Physical PASMO only | 2007-2020 | Card-based; charge at consortium-member ticket machines |
| Mobile PASMO Android | 2020-03 | Osaifu Keitai FeliCa Android devices |
| Apple Pay PASMO | 2020-10 | iPhone 7 onward; major overseas-iPhone integration enabled |
| Google Pay PASMO | 2023 onward | Android non-Osaifu Keitai devices |

The Apple Pay PASMO launch was particularly important for **non-JR commuters** who had previously been forced to choose between staying with physical PASMO or migrating to Mobile Suica (which works on JR East and consortium-member networks but doesn't carry over a PASMO commuter pass).

## KPI snapshot

| Metric | Reading (public disclosure) |
|---|---|
| Cumulative PASMO issuance | Tens of millions (PASMO Co Ltd disclosure) |
| Daily transit-tap count | Second-largest single transit-IC issuer in Greater Tokyo after Suica |
| Consortium-member rail / bus operators | Multi-dozen (rail + bus combined) |
| Mobile PASMO accounts | Growing post-2020 launch; consortium reports incremental milestones |
| Outstanding prepaid balance | Material multi-billion-yen scale |

Exact period KPI is in PASMO Co Ltd / consortium-member disclosure rather than centralized investor reporting.

## Strategy: consortium-anchored Tokyo cashless

PASMO's strategic logic at the consortium level:

1. **Consortium efficiency** — single IC across many private-rail / bus operators avoids per-operator IC issuance cost.
2. **JR East coexistence** — interoperability with Suica from day one was strategic, not optional; non-mutual-use would have been commercially fatal in commuter Tokyo.
3. **Mobile rail catch-up** — 2020 Mobile PASMO + Apple Pay closed a 4-year disadvantage vs Mobile Suica and was critical to retaining non-JR commuters' wallet position.
4. **Inbound tourist** — Mobile PASMO via Apple Pay enables overseas-iPhone users in Tokyo to choose either PASMO or Suica wallet; convergence has favored Suica for tourist defaulting but PASMO retains significant share among non-JR-rail-using tourists.
5. **Operator-specific co-brand cards** — TOKYU CARD, OPクレジット, Keio Pasport Card, etc. anchor per-operator commuter and loyalty integration without centralizing under one credit-card issuer.

## Counterpoints

- "PASMO is only Tokyo Metro." PASMO covers ~20 rail operators (Tokyo Metro, Toei Subway, plus all major private rails) and the metropolitan bus network — not Tokyo Metro alone.
- "Suica covers PASMO networks anyway, so PASMO is redundant." Suica is a JR East product; while it works on PASMO-network gates via mutual-use, the **commuter pass (定期券)** must be issued by the operator that owns the rail line, and that constraint is what keeps PASMO sticky for private-rail commuters.
- "Mobile PASMO came too late." 2020 vs 2016 Mobile Suica is real, but the consortium structure made coordinated mobile launch slower; the catch-up has restored competitive parity.
- "PASMO is not a real cashless platform." PASMO's third-party-prepaid registration and cross-merchant retail acceptance make it a full PSA-registered prepaid issuer, not a single-operator commuter card.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/suica-prepaid-jr-east]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- PASMO official site (pasmo.co.jp).
- Tokyo Metro corporate site (tokyometro.jp).
- Toei Subway / Tokyo Metropolitan Bureau of Transportation site (kotsu.metro.tokyo.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (PASMO Co Ltd entry).
- FSA prepaid payment instruments policy page.
- FeliCa Networks corporate site (felicanetworks.co.jp).
- METI cashless policy page.

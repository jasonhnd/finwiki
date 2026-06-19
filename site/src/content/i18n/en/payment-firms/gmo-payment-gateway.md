---
source: payment-firms/gmo-payment-gateway
source_hash: ac10b6c103dd93b4
lang: en
status: machine
fidelity: ok
title: "GMO ペイメントゲートウェイ"
translated_at: 2026-06-19T06:09:18.063Z
---

# GMO ペイメントゲートウェイ

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[payment-firms/famima-digital-one|ファミマデジタルワン (FamiMa Digital One)]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

## TL;DR

One of the largest domestic payment service providers (PSP). It provides EC merchants a one-stop offering of card payment such as Visa/Master/JCB/Amex + convenience-store payment + bank transfer + electronic money. Established as "Card Commerce Co., Ltd." in 1995-03-25, renamed in 2000 , listed on the TSE Mothers in 2005 , and listed on the TSE First Section in 2008  (now PRIME 3769). A consolidated subsidiary of the GMO Internet Group. Its strategic alliance with Sumitomo Mitsui Card ([[megabanks/smfg]] affiliated) and its Asia expansion (Vietnam's NextPay / Taiwan's ECPay, etc.) are the pillars of its mid-term plan. ^[extracted]

## 1. Company overview

**Official name**: GMO ペイメントゲートウェイ株式会社 ^[extracted]
**English name**: GMO Payment Gateway, Inc.
**Securities code**: TSE PRIME 3769 ^[extracted]
**Establishment**: 1995-03-25 (former Card Commerce Co., Ltd.) ^[extracted]
**Head office**: Shibuya-ku, Tokyo
**Parent company**: [[business/gmo-internet-group|gmo-internet-group]] (consolidated subsidiary) ^[extracted]
**Business type**: payment service provider (PSP)

## 2. Business segment map

| Segment | Main service | Characteristics |
|---|---|---|
| EC payment processing | credit card (Visa/Master/JCB/Amex) + convenience-store payment + bank transfer + electronic money | active stores 171,257 店 (as of 2026-03 ; 829,062 店 when including fincode byGMO, etc.) |
| BtoB payment | inter-corporate invoice payment / deferred payment | credit / collection handled in one |
| Simple-payment SDK | Pay.JP | for developers; heavily adopted by startups |
| Overseas payment | global payment gateway | competes with Stripe / Adyen |
| Asia expansion | NextPay (Vietnam) / ECPay (Taiwan) / Thailand | investment / JV-based |
| Adjacent businesses | financial services / remittance / transaction lending | lending using merchant data |

## 3. Corporate history

| Year/Month | Event |
|---|---|
| 1995-03-25 | Card Commerce Co., Ltd. established ^[extracted] |
| 2000 | renamed GMO Payment Gateway ^[extracted] |
| 2005 | listed on TSE Mothers ^[extracted] |
| 2008 | listed on TSE First Section ^[extracted] |
| 2015 | established the joint venture SMBC GMO PAYMENT with Sumitomo Mitsui Banking Corporation (reached a basic agreement on a next-generation payment platform with Sumitomo Mitsui Card in 2019 ) |
| 2015〜 | Asia expansion (investment in Taiwan's Neweb Technologies / Z.com Payment, etc.) |

### Domestic strategy

- **EC merchant base**: a merchant network of active stores 171,257 店 (as of 2026-03 ; 829,062 店 when including fincode byGMO, etc.) is the moat
- **Sumitomo Mitsui Card strategic alliance**: deepening relations with the [[megabanks/smfg]]-affiliated card company; SMBC GMO PAYMENT (a JV with SMBC, established 2015 ; reorganized in 2021  to Sumitomo Mitsui Card 50% / GMO-PG 40% / Sumitomo Mitsui Banking Corporation 10%) is also developed
- **Pay.JP**: a developer-facing simple-payment SDK to rival Stripe

### Overseas strategy

- **Asia concentration**: investment / JV in Vietnam's NextPay / Taiwan's ECPay / Thailand, etc.

### Competitive map

| Competitor | Strength | Positioning |
|---|---|---|
| SB Payment Service | [[megabanks/paypay-fg]] / SoftBank group / PayPay coordination | one of the largest domestically, QR-payment affinity |
| DG Financial Technology (former VeriTrans) | Digital Garage affiliated / veteran PSP | EC long-established merchants |
| SMBC GMO PAYMENT | SMBC × GMO-PG JV | bank-affiliated channel |
| Stripe / Adyen | global developer-first | cross-border EC |
| Square (Block) | POS + online integration | SMB physical-goods sales |

## 5. Regulation / policy

- **Supervising authority**: FSA / Ministry of Economy, Trade and Industry (Installment Sales Act / Payment Services Act)
- **Business type**: payment-processing business (not a registration system, but merchant contracts / PCI DSS compliance are a de facto barrier to entry)
- **Regulatory points**:

## 6. Counterpoints

> Subjective counterpoints (parent-company dependence vs independence / customer-cannibalization argument with SMBC GMO PAYMENT) are isolated in `.opinions/JapanFG/gmo-payment-gateway.md` (2026-05-29).

## 7. Open questions

- What is the precise breakdown (active vs dormant) of the over-30 万-store merchant count?
- What are the details of the numerical targets (revenue / operating profit / overseas ratio) of the 2024  mid-term plan?
- What is GMO-PG's positioning under the stablecoin regime (response to Progmat, etc.)?
- What is the scenario for full-scale competition with Stripe / Adyen?
- What is the cross-shareholding / dividend policy with the parent GMO Internet Group?

## 8. Related

- [[megabanks/smfg]] (Sumitomo Mitsui Card alliance / SMBC GMO PAYMENT JV parent)
- [[megabanks/paypay-fg]] (SB Payment Service competitor)
- [[card-issuers/jcb]] (card international brands)
- [[megabanks/mufg]] (card industry via Mitsubishi UFJ NICOS)
- [[payment-firms/money-forward]] · [[payment-firms/freee]] (accounting-SaaS coordination)
- [[payment-firms/paidy]] (deferred-payment competitor / complement)
- [[payment-firms/mercari-hd]] (EC customer base)

## Sources

- **Wikipedia: GMO Payment Gateway** (https://ja.wikipedia.org/wiki/GMOペイメントゲートウェイ, extracted 2026-05-19)
- **GMO Payment Gateway official IR** (corp.gmo-pg.com, refer 2026-05-19)
- GMO Internet Group securities report (consolidated-subsidiary information)
- GMO Payment Gateway IR FAQ — active stores 171,257 店 (as of 2026-03 , including fincode byGMO 829,062 店) — https://www.gmo-pg.com/en/ir/faq/
- GMO-PG × Sumitomo Mitsui Card next-generation payment platform basic agreement (2019) — https://www.gmo-pg.com/en/news/press/gmo-paymentgateway/2019/0212.html
- GMO-PG Taiwan Neweb Technologies business and capital alliance (2015) — https://www.gmo-pg.com/corp/newsroom/press/gmo-paymentgateway/2015/0819.html

---

> [!info] Verification status
> confidence: **likely** (based on public information / created 2026-05-19; on 2026-05-29 the active-store count / SMBC JV / Taiwan investment were confirmed via the official IR). The active stores 171,257 店 are the official figures as of 2026-03  (subject to point-in-time variation; for the latest, refer to GMO-PG IR quarterly materials). The establishment year / listing history / parent-company relationship / SMBC GMO PAYMENT JV are confirmed by public information.

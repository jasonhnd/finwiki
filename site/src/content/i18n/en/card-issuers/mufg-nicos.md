---
source: card-issuers/mufg-nicos
source_hash: 419f352a4cb516c6
lang: en
status: machine
fidelity: ok
title: "Mitsubishi UFJ NICOS"
translated_at: 2026-06-15T03:48:21.919Z
---

# Mitsubishi UFJ NICOS

## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]] (its domain route). Read it against [[card-issuers/smbc-card|三井住友カード]] and [[card-issuers/jcb|JCB]] for megabank-affiliated peer / contrast, and against [[financial-regulators/fsa|the FSA]] plus [[payments/INDEX|payments]] for the supervisory / system boundary. The governing acquiring statute is [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]].

## TL;DR

Mitsubishi UFJ NICOS Co., Ltd. is the card / consumer-credit operating company of the [[megabanks/mufg|MUFG]] group. Its official company overview explicitly states its registration number as a **comprehensive credit purchase intermediary operator** and its registration number as a **credit-card-number handling contract operator** (card-number merchant contracts), which is important for reading the issuer / acquirer / installment-credit boundary. Historically it is MUFG's retail / merchant payment surface, formed by consolidating several card brands and consumer-credit companies.

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal entity | Mitsubishi UFJ NICOS Co., Ltd. / Mitsubishi UFJ NICOS Co., Ltd. |
| Group | [[megabanks/mufg|MUFG]] (Mitsubishi UFJ Financial Group) |
| Card / credit lane | Comprehensive credit purchase intermediation under the Installment Sales Act (card installments / installment payment / revolving) |
| Acquiring lane | Registration as a credit-card-number handling contract operator (merchant contracts / card-number management) |
| Cash-advance lane | Card loans / cash-advance lines fall under the Money Lending Business Act framework |
| Supervision | Financial Services Agency (banking group / money lending) + Ministry of Economy, Trade and Industry (Installment Sales Act); self-regulation by [[card-issuers/installment-sales-act-2020-amendment|日本クレジット協会]] |

## 2. Operating model

As MUFG's retail / merchant payment surface, Mitsubishi UFJ NICOS handles both card issuing and merchant acceptance (merchant acquiring). The content of installments comprises lump-sum, installment payment (installments), and revolving (revolving credit), plus card loans and merchant services. It is a historical consolidation point of Japan's card-brand and consumer-credit business, and the fact that it holds both issuing and acquiring within a single company forms the comparison axis against the brand-and-license trinity-type [[card-issuers/jcb|JCB]] and the SMFG-hub [[card-issuers/smbc-card|三井住友カード]].

## 3. Why this page matters

- It establishes that Mitsubishi UFJ NICOS is not merely a "brand under MUFG" but a regulated operating company with its own registration numbers (comprehensive credit purchase intermediation / card-number merchant contracts), customer contracts, merchant rules, and credit / fraud-control workflow.
- As a typical example of two registration tracks — issuer (installments) and acquirer (card-number merchant contracts) — coexisting in one company, it becomes a concrete anchor for [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]].
- Together with [[card-issuers/smbc-card|SMBC Card]] and [[card-issuers/jcb|JCB]] it provides a peer anchor for megabank-affiliated issuers.

## Related

- [[megabanks/mufg|MUFG]]
- [[card-issuers/smbc-card|三井住友カード]]
- [[card-issuers/jcb|JCB]]
- [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]]
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]
- [[card-issuers/INDEX|card-issuers INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Mitsubishi UFJ NICOS company overview.
- METI: registered operators under the Installment Sales Act (包括信用購入あっせん).
- 日本クレジット協会 (Japan Consumer Credit Association): industry self-regulation reference.

> [!info] Verification status
> confidence: likely. It is a public fact that Mitsubishi UFJ NICOS is the card / consumer-credit company of the MUFG group and that its official company overview displays registration numbers for comprehensive credit purchase intermediation and card-number merchant contracts. Because specific registration numbers and transaction volumes can change, this page does not cite figures and describes only the institutional positioning.

---
source: cooperative-banks/shinkin-network-services
source_hash: b5c3476ac652cb53
lang: en
status: machine
fidelity: ok
title: "Shinkin Network Services (Shinkin Network Services)"
translated_at: 2026-06-18T23:33:48.363Z
---

# Shinkin Network Services (Shinkin Network Services)

## Wiki route

This entry sits under [[cooperative-banks/INDEX|cooperative-banks INDEX]]. Read it against [[cooperative-banks/shinkin-central|信金中央金庫]] for the operational central-bank counterpart that anchors the shinkin system, against [[financial-regulators/zenshin-kyo|全国信用金庫協会]] for the industry-body / policy layer, and against [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]] for the full member-population route. The cooperative-system comparison anchor sits at [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]].

## TL;DR

Shinkin Network Services (SNS, commonly known as the "Shinkin Joint Center") is the core IT-infrastructure operating entity of the Shinkin Central Bank group, an IT service provider for cooperative organizations that operates the **ATM network, the core-banking joint center, and the electronic-payment systems** jointly used by 254 shinkin banks nationwide (as of FSA 2025-11-06). Because the shinkin-bank industry is dominated by small and mid-sized banks that cannot undertake large-scale IT investment on their own, scale economies through the aggregation of common infrastructure are key to the industry's survival. SNS is its substantive carrier, providing the shinkin joint ATM service (Shinkin ATM Network / Shinkin Cash Service, SCS), the core-banking joint center for shinkin banks, the internet-banking infrastructure, the Zengin-net connection gateway, and the like.

## 1. Legal / group boundary

| Item | Notes |
|---|---|
| Legal name | Shinkin Network Services Co., Ltd. (a stock company, affiliated with the Shinkin Central Bank) |
| Group route | An IT joint-infrastructure company affiliated with the Shinkin Central Bank group |
| Member base | 254 行shinkin banks nationwide (as of FSA 2025-11-06) + the Shinkin Central Bank |
| Wiki role | Anchor entry for the **joint IT-infrastructure operating company** of the shinkin-bank industry |
| Counterpart at federation layer | [[financial-regulators/zenshin-kyo|全国信用金庫協会]] (policy / industry body) |
| Counterpart at central-bank layer | [[cooperative-banks/shinkin-central|信金中央金庫]] (central liquidity / clearing) |

## 2. Business content

Shinkin Network Services operates and provides common infrastructure such as the following:

1. **Shinkin ATM Network (Shinkin Cash Service, SCS)**
   - A mutual-use ATM network among 254 shinkin banks nationwide.
   - Makes shinkin-bank cash cards usable through tie-ups at any shinkin-bank ATM nationwide.
   - The industry-side counterpart to ATM mutual-use tie-ups with megabanks / regional banks (see [[banking/atm-network-japan|Japan ATM network]]).

2. **Shinkin Joint Center (core-banking joint use)**
   - Provides a common core-banking system to small and mid-sized shinkin banks that cannot hold a core-banking system on their own.
   - Each shinkin bank uses it in a tenant fashion, sharing the operating costs.
   - Major shinkin banks (such as [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]] and [[cooperative-banks/osaka-shinkin|大阪信用金庫]]) may have their own core-banking systems, but many mid-tier and smaller banks depend on the joint center.

3. **Internet-banking / mobile-banking infrastructure**
   - A common foundation for personal / corporate internet banking for shinkin banks.
   - Each shinkin bank differentiates only the branding; the back end is common.

4. **Zengin-net / Zengin EDI / Zengin-system connection**
   - Operates a gateway connecting the entire shinkin-bank industry to [[banking/zengin-network|全銀ネット]].
   - Rather than individual shinkin banks connecting directly to Zengin-net, connections are aggregated via SNS / Shinkin Central Bank.

5. **AML/CFT common system / identity-verification (eKYC) common foundation**
   - Industry-wide commonization of anti-money-laundering and identity-verification systems.
   - Provides compliance IT, difficult to build at the scale of an individual shinkin bank, on an aggregated basis.

6. **Cashless-payment support**
   - Common infrastructure for cashless support oriented to shinkin banks, such as debit functions for shinkin-bank cash cards and smartphone-payment linkages.

## 3. Strategic positioning (Why this entity matters)

### The scale-economy problem of cooperative financial institutions

The shinkin-bank industry has seen consolidation progress from a peak of over 400 行 in the 1990 年s → 254 行 as of 2025-11-06, yet even so the average asset size of an individual shinkin bank is only a fraction of a regional bank's. Meanwhile, the renewal cost of bank IT infrastructure (core banking, AML/CFT, cashless) rises year by year, making it **structurally difficult for an individual shinkin bank to continue IT investment on its own**. Aggregation by a joint-infrastructure company such as SNS has become a precondition for the industry's survival.

### Comparison with megabanks / regional banks

- **Megabanks ([[megabanks/mufg]] / [[megabanks/smfg]] / [[megabanks/mizuho-fg]])**: Hold and operate their own core-banking, AML/CFT, and mobile-banking infrastructure, with IT investment on the order of several hundred billion yen per year.
- **Regional banks**: Many depend on regional-bank joint centers (regional-bank joint-use systems by NTT Data, Hitachi, etc.), but there is considerable room for customization by each regional bank.
- **Shinkin banks**: Have the highest degree of dependence on industry-wide common infrastructure such as SNS, with limited room for individual customization. This embodies the "industry-unified operation" inherent to the cooperative model.

### Division of labor with [[cooperative-banks/shinkin-central|信金中金]]

- **Shinkin Central Bank**: Liquidity pool, surplus-fund management, intra-system funds adjustment, final Zengin-net connection.
- **SNS / Shinkin Joint Center**: Joint operation of business IT (ATM, core banking, IB, AML foundation).
- The two divide functions within the Shinkin Central Bank group; SNS bears the core of IT operations, and the Shinkin Central Bank the core of financial operations.

### Division of labor with [[financial-regulators/zenshin-kyo|全信協]]

- **Zenshinkyo**: Policy proposals, industry standards, formulation of self-regulatory guidelines, government liaison.
- **SNS**: Substantive operation of business infrastructure.
- A division-of-labor structure in which Zenshinkyo is the "deciding layer" and SNS the "moving layer."

## 4. Related / system-risk issues

### Concentration risk

The fact that 254 行 of the industry depends on common infrastructure means that a system failure at SNS / the Shinkin Joint Center poses a risk of cascading across the entire industry. This is a challenge common to the banking industry (as the repeated system failures at megabank [[megabanks/mizuho-fg|みずほ FG]] show), but in the case of shinkin banks the possibility of "the entire industry halting simultaneously" is structurally inherent.

### Adaptation to the cashless trend

The ATM network (SCS) faces increasing operating-cost burdens amid declining cash use, and an industry-wide strategic shift toward reducing the number of installed ATMs / shifting to smartphone payments is underway. SNS is also the carrier of this shift.

### Cybersecurity

To the extent that individual shinkin banks' security investment is limited, SNS's defense level substantively determines the industry-wide security standard. It is also important as the entity to which the FSA / Financial Services Agency's industry-wide cybersecurity guidelines apply.

## Related

- [[cooperative-banks/INDEX|cooperative-banks INDEX]]
- [[cooperative-banks/shinkin-central|信金中央金庫]]
- [[financial-regulators/zenshin-kyo|全国信用金庫協会]]
- [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]]
- [[cooperative-banks/osaka-shinkin|大阪信用金庫]]
- [[cooperative-banks/jonan-shinkin|城南信用金庫]]
- [[cooperative-banks/yokohama-shinkin|横浜信用金庫]]
- [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]]
- [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]]
- [[banking/cooperative-banking-japan|Cooperative banking in Japan]]
- [[banking/zengin-network|全銀ネット]]
- [[banking/atm-network-japan|Japan ATM network]]
- [[banking/INDEX|banking index]]

## Sources

- National Association of Shinkin Banks (Zenshin-kyo) official site: https://www.shinkin.org/
- Shinkin Central Bank official site: https://www.shinkin-central-bank.jp/
- Shinkin Network Services-related: https://www.shinkin.co.jp/network/
- Zenshinkyo "About Zenshinkyo": https://www.shinkin.org/zenshinkyo/about/
- FSA: list of shinkin-bank licenses (2025-11-06): https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx

---

> [!info] Confidence note
> confidence: **likely**. SNS is the industry's joint IT-infrastructure company affiliated with the Shinkin Central Bank group, and its business scope — the Shinkin Cash Service, the Shinkin Joint Center, the Zengin-connection gateway, etc. — is verifiable from public information (Zenshinkyo / Shinkin Central Bank official sites, industry disclosure magazines). However, since precise figures on the details of its corporate status, the latest business scope, and its capital structure are centered on disclosure within the Shinkin Central Bank group, the granularity of primary materials available externally is limited. For the latest values, refer to the Shinkin Central Bank disclosure magazine and materials published by Zenshinkyo.

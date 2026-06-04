---
source: japanfg/shinkin-network-services
source_hash: a3f7124e5690f517
lang: en
status: machine
fidelity: ok
title: "Shinkin Network Services"
translated_at: 2026-06-01T02:31:57.134Z
---
# Shinkin Network Services

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[cooperative-banks/shinkin-central|信金中央金庫]] for the operational central-bank counterpart that anchors the shinkin system, against [[financial-regulators/zenshin-kyo|全国信用金庫協会]] for the industry-body / policy layer, and against [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]] for the full member-population route. The cooperative-system comparison anchor sits at [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]].

## TL;DR

Shinkin Network Services (SNS, commonly "Shinkin Joint Center") is a core IT infrastructure operating entity in the Shinkin Central Bank group. It is an IT service provider for cooperative financial institutions, operating the **ATM network, shared core-banking center, and electronic settlement systems** jointly used by the nationwide 254  shinkin banks as of FSA 2025-11-06. Because the shinkin-bank industry is dominated by small and mid-sized institutions that cannot each make large-scale IT investments alone, economies of scale from shared infrastructure aggregation are a key condition for the industry's survival. SNS is the practical carrier of that infrastructure, providing the shinkin-bank joint ATM service (Shinkin ATM Network / Shinkin Cash Service, SCS), shared core-banking center for shinkin banks, internet-banking platform, Zengin-Net connection gateway, and related functions.

## 1. Legal / group boundary

| Item | Notes |
|---|---|
| Legal name | Shinkin Network Services Co., Ltd. (stock company; Shinkin Central Bank affiliate) |
| Group route | IT shared-infrastructure company in the Shinkin Central Bank group |
| Member base | Nationwide shinkin banks 254 行 as of FSA 2025-11-06 + Shinkin Central Bank |
| Wiki role | Anchor entry for the shinkin-bank industry's **shared IT infrastructure operator** |
| Counterpart at federation layer | [[financial-regulators/zenshin-kyo|全国信用金庫協会]] (policy / industry body) |
| Counterpart at central-bank layer | [[cooperative-banks/shinkin-central|信金中央金庫]] (central liquidity / clearing) |

## 2. Business scope

Shinkin Network Services operates and provides the following shared infrastructure:

1. **Shinkin ATM Network (Shinkin Cash Service, SCS)**
   - ATM mutual-use network among the nationwide 254  shinkin banks.
   - Enables shinkin-bank cash cards to be used on an affiliated basis at any shinkin-bank ATM nationwide.
   - Industry-side counterpart for ATM mutual-use alliances with megabanks and regional banks; see [[banking/atm-network-japan|Japan ATM network]].

2. **Shinkin joint center (shared core-banking use)**
   - Provides common core-banking systems to small and mid-sized shinkin banks that cannot maintain their own core systems alone.
   - Each shinkin bank uses the system on a tenant model and shares operating costs.
   - Large shinkin banks such as [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]] and [[cooperative-banks/osaka-shinkin|大阪信用金庫]] may have independent core systems, but many mid-sized and smaller shinkin banks depend on the joint center.

3. **Internet-banking / mobile-banking platform**
   - Common platform for personal and corporate internet banking for shinkin banks.
   - Each shinkin bank differentiates mainly through branding, while the backend is shared.

4. **Zengin-Net / Zengin EDI / Zengin system connection**
   - Gateway operations connecting the overall shinkin-bank industry to [[banking/zengin-network|全銀ネット]].
   - Individual shinkin banks do not connect directly to Zengin-Net; connections are aggregated through SNS / Shinkin Central Bank.

5. **Common AML/CFT system and identity-verification (eKYC) platform**
   - Industry standardization of anti-money-laundering and identity-verification systems.
   - Aggregated provision of compliance IT that would be difficult for individual shinkin banks to build at their own scale.

6. **Cashless payment support**
   - Common infrastructure for shinkin-bank cashless support, including debit functionality for shinkin-bank cash cards and smartphone-payment linkage.

## 3. Strategic positioning (Why this entity matters)

### Economies-of-scale problem for cooperative financial institutions

The shinkin-bank industry has continued consolidating from more than 400 行 institutions at its 1990 年s peak to 254 行 as of 2025-11-06, but even so the average asset scale of each shinkin bank remains only a fraction of regional banks. Meanwhile, renewal costs for bank IT infrastructure, including core banking, AML/CFT, and cashless systems, keep rising every year, making it **structurally difficult for individual shinkin banks to continue independent IT investment**. Aggregation through shared-infrastructure companies such as SNS has become a precondition for the industry's survival.

### Contrast with megabanks / regional banks

- **Megabanks ([[mufg]], [[smfg]], [[mizuho-fg]])**: own and operate core-banking, AML/CFT, and mobile-banking platforms internally; annual IT investment is on the order of several hundred billion yen.
- **Regional banks**: many depend on regional-bank joint centers such as NTT Data / Hitachi shared regional-bank systems, but individual regional banks retain considerable customization room.
- **Shinkin banks**: dependence on industry-wide shared infrastructure such as SNS is highest, while room for individual customization is limited. This embodies "industry-integrated operations" arising from the cooperative-organization model.

### Division of roles with [[cooperative-banks/shinkin-central|信金中金]]

- **Shinkin Central Bank**: liquidity pool, surplus-fund investment, intra-system funding adjustment, and final Zengin-Net connection.
- **SNS / Shinkin joint center**: shared operation of business IT, including ATM, core banking, internet banking, and AML platforms.
- The two divide functions within the Shinkin Central Bank group: SNS carries the core of IT operations, while Shinkin Central Bank carries the core of financial operations.

### Division of roles with [[financial-regulators/zenshin-kyo|全信協]]

- **Zenshin-kyo**: policy advocacy, industry standards, self-regulatory guideline development, and administrative response.
- **SNS**: practical operation of business infrastructure.
- The division is that Zenshin-kyo is the "decision layer" and SNS is the "operating layer."

## 4. Related / system-risk issues

### Concentration risk

The fact that the industry's 254 行 depends on shared infrastructure means that a system failure at SNS / the shinkin joint center could propagate across the whole industry. This is a common issue in banking, as repeated system failures at megabank [[mizuho-fg|みずほ FG]] show, but for shinkin banks the possibility that the **whole industry stops at the same time** is structurally embedded.

### Adaptation to cashless trends

The ATM network (SCS) faces increasing operating-cost burdens as cash use declines, while the industry is shifting strategy toward reducing the number of ATMs and moving toward smartphone payments. SNS is also the carrier of this transition.

### Cybersecurity

Because security investment by individual shinkin banks is limited, SNS's defense level effectively determines the security level of the entire industry. It is also important as an entity to which FSA / Financial Services Agency cross-industry cybersecurity guidelines apply.

## Related

- [[JapanFG/INDEX|JapanFG index]]
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
- Shinkin Network Services related page: https://www.shinkin.co.jp/network/
- Zenshin-kyo, "About Zenshin-kyo": https://www.shinkin.org/zenshinkyo/about/
- FSA: shinkin-bank license list (2025-11-06): https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx

---

> [!info] Confidence note
> confidence: **likely**. SNS is an industry shared IT infrastructure company in the Shinkin Central Bank group, and the business scope of Shinkin Cash Service, the shinkin joint center, and the Zengin connection gateway can be confirmed from public information such as Zenshin-kyo, Shinkin Central Bank official sites, and industry disclosure magazines. However, granular primary-source detail on corporate form, latest business scope, and ownership structure is limited from outside because disclosures are centered within the Shinkin Central Bank group. Latest figures should be checked against Shinkin Central Bank disclosure magazines and Zenshin-kyo published materials.

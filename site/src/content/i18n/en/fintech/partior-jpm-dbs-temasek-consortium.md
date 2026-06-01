---
source: fintech/partior-jpm-dbs-temasek-consortium
source_hash: 68c870bbc2b6face
lang: en
status: machine
fidelity: ok
title: "Partior ? JPM / DBS / StanChart / Temasek consortium ? Singapore-anchored cross-border wholesale settlement"
translated_at: 2026-05-31T11:13:44.910Z
---

# Partior ? JPM / DBS / StanChart / Temasek consortium ? Singapore-anchored cross-border wholesale settlement

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/fnality-wholesale-settlement|Fnality]] for the Anglo-American / European multibank wholesale route and [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] for the single-bank tokenized-deposit route; together they form the wholesale-settlement consortium triangle. Pair it with [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS strategic implications]] to understand Partior's Singapore anchor.

> [!info] TL;DR
> Partior Pte Ltd is a Singapore wholesale cross-border settlement company jointly founded in 2021-04 by **JPMorgan + DBS + Temasek**. In 2024, **Standard Chartered** became the fourth major shareholder, while fintech participants such as **iFAST** broadened the ecosystem. The mainnet went live in 2021-08, initially on the USD / SGD corridor, and later expanded to USD / SGD / EUR / GBP / JPY. Partior is a product of [[fintech/multi-megabank-consortium-governance|multi-megabank federal governance]] plus [[fintech/singapore-mas-payment-services-act-overview|MAS PSA regulation]]. It forms the Asian wholesale-settlement route against Fnality in the UK / Europe and the [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] single-bank tokenized-deposit route.

## Key facts

- Jurisdiction: Singapore; founded 2021-04 by JPMorgan, DBS, and Temasek, with roughly $33M seed commitment from each founding party.^[extracted]
- Mainnet: live from 2021-08; first USD-SGD cross-border settlement ran 24/7 and in real time.^[extracted]
- 2024 Standard Chartered 出資 = 第 4 主要株主(~$80M Series B)^[extracted]
- 2025-Q3: iFAST plus multiple Asian banks and FX providers joined the network, taking membership above 30.^[extracted]
- 対応通貨:USD / SGD / EUR / GBP / JPY(2026-Q1 INR / IDR 追加予定)^[extracted]
- Cumulative cross-border settlement: approximately $1.5T since launch, based on 2026-Q1 data.^[extracted]
- Technology stack: Hyperledger Fabric-derived architecture with modular PvP, DvP, and atomic FX-swap modules.^[extracted]
- CEO:Humphrey Valenbreder(元 SWIFT) · 総従業員 ~80(2026-Q1)^[extracted]

## Mechanism / How it works

Partior's core model is a **24/7 real-time network for Asian cross-border wholesale settlement**. Unlike [[fintech/fnality-wholesale-settlement|Fnality]], which is anchored in on-chain central-bank reserves, Partior does **not** directly tokenize central-bank reserves. It achieves quasi-settlement through commercial-bank deposits and mutual balance-sheet locking across JPMorgan, DBS, and Standard Chartered. Each cross-border payment combines a debit / credit leg in the sending and receiving currencies with an atomic PvP commitment on the Partior network, producing T+0 finality. The main innovation is replacing multiday SWIFT + nostro / vostro workflows with a commercial-bank consortium and on-chain atomic settlement.

The technology stack is Hyperledger Fabric-derived, forming an Asia-versus-West stack contrast with JPMorgan Onyx Quorum, Fnality Besu, and Canton. Interoperability with [[systems/canton-overview|Canton Network]] and [[systems/cosmos-ibc-for-financial-institutions|Cosmos IBC]] remains a cross-chain coordination question. Partior's 2024-Q3 atomic FX-swap module creates 24/7 cross-currency PvP and competes directly with [[fintech/fnality-wholesale-settlement|Fnality]] cross-currency PvP, but through commercial-bank deposits rather than central-bank reserves.

Strategically, Partior is a commercialization sample from the MAS Project Ubin / Project Guardian lineage ([[fintech/bis-project-guardian-overview|BIS Project Guardian]]). Singapore positions itself as an international hub for Asian wholesale settlement and tokenized assets, and Partior supplies the settlement layer in that strategy. Unlike [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]], which is led by central banks in China, Hong Kong, Thailand, and the UAE, Partior is commercial-bank-led; the two routes compete in Asian cross-border payments as central-bank multi-CBDC versus commercial-bank consortium under a Singapore MAS license.

## Origin & evolution

From 2017 to 2020, JPMorgan Onyx, DBS DigiBank, and Temasek separately experimented with wholesale settlement and tokenized assets. In 2021-04 they jointly established Partior Pte Ltd as a Singapore MAS-regulated wholesale payment network operator. The mainnet launched in 2021-08 on USD / SGD, with EUR / GBP added in 2022. **Standard Chartered made a strategic investment in 2024-Q1**, moving the company from a three-party founding group to a four-party international multibank network. The 2024-Q3 atomic FX-swap release enabled 24/7 cross-currency PvP. By 2025-Q3, iFAST and other fintech members broadened the network from a bank-only venue toward a bank + fintech + asset-manager network. By 2026-Q1, cumulative settlement reached roughly $1.5T, comparable in order of magnitude to [[fintech/jpm-onyx-wholesale-network|JPM Onyx Kinexys]], but Partior remains the multi-bank consortium route. Planned INR / IDR support in 2026-Q1 signals an attempt to address emerging-Asia corridors and to offer a commercial-bank Asian alternative alongside [[fintech/india-anti-dollar-dpi-alliance|India DPI]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/multi-megabank-consortium-governance|Multi-megabank federal governance]]
- [[fintech/singapore-mas-payment-services-act-overview|Singapore MAS PSA]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 戦略含意]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]
- [[fintech/central-banking-function-unbundling|Five-layer unbundling of central-banking functions]]
- [[fintech/india-anti-dollar-dpi-alliance|India DPI]]
<!-- /wiki-links:managed -->

## Sources

- https://www.partior.com/ ? Partior official website
- https://www.partior.com/news ? Partior news
- https://www.mas.gov.sg/news/media-releases/2021/partior-launch ? MAS official Partior launch release
- https://www.dbs.com/newsroom/Partior_launch ? DBS Partior announcement
- https://www.standardchartered.com/news/partior ? Standard Chartered Partior investment announcement

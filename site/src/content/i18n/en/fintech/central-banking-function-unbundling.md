---
source: fintech/central-banking-function-unbundling
source_hash: f0aecec9ef460b87
lang: en
status: machine
fidelity: ok
title: "Five-layer unbundling of central-banking functions"
translated_at: 2026-07-30T00:00:00+09:00
---

# Five-layer unbundling of central-banking functions


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]] for peer and contrast context, and [[fintech/japan-financial-regulation|Japan's financial-regulation framework for tokens, cryptoassets, and payments]] for the broader system and regulatory boundary.

> [!info] TL;DR
> The “five layers” in this entry are an analytical taxonomy that separates a monetary and payment system into **(1) the sovereign unit of account and monetary anchor, (2) liabilities and assets used for settlement, (3) messaging, clearing, and settlement infrastructure, (4) identity, access, and compliance operations, and (5) policy, supervision, legal enforcement, and technical controls**. It is not a factual claim that central banks historically provided all five layers as one bundle, that four layers have been privatized since 2022, or that they will be replaced by a particular year. In the two-tier monetary system described by the BIS, central bank money, commercial-bank deposits, and private services divide responsibilities; central banks, commercial banks, PSPs, and private networks can overlap within the same function.

## Using the five functions as an analytical taxonomy

| # | Function under analysis | Institutional role established by public materials | Evidence boundary |
|---|---|---|---|
| 1 | **Unit of account and monetary anchor** | The BIS explains that the central bank issues the economy's unit of account and that trust in central bank money supports the singleness of money | Privately issued deposits, e-money, and stablecoins can also be denominated in a sovereign currency. Do not conflate use of the denomination with the issuer or legal liability |
| 2 | **Settlement liability and settlement asset** | Central bank reserves, commercial-bank deposits, cash, regulated e-money, and tokenized money give holders claims against different issuers | Do not treat “digital,” “tokenized,” or “1:1” as establishing the same credit risk, redemption right, deposit insurance, or settlement finality |
| 3 | **Messaging, clearing, and settlement rails** | Central banks, private operators, banks, and PSPs may operate or connect different segments such as RTGS, instant payments, clearing, cards, messaging, and DLT | Separate front-end transfer, message delivery, clearing, and final settlement; do not treat connectivity or an experiment as production adoption |
| 4 | **Identity, access, and compliance operations** | Banks and regulated PSPs perform onboarding, KYC / AML, transaction monitoring, and permission management according to applicable law and customer relationships | Identity technology, wallet permissions, bank KYC, and legal customer-due-diligence duties are distinct. Do not determine regulatory compliance from protocol specifications alone |
| 5 | **Policy, supervision, legal enforcement, and technical controls** | Central banks, supervisors, sanctions authorities, law-enforcement agencies, and regulated firms have different legal powers and duties. Private issuers / networks may also have freeze, denylist, and upgrade keys | Do not equate a private technical control with sovereign enforcement power; identify the authority, legal basis, scope, appeal mechanism, and audit trail |

Sources: [BIS Annual Economic Report 2023, Chapter III](https://www.bis.org/publ/arpdf/ar2023e3.htm), [BIS central banks and payments report](https://www.bis.org/publ/othp33.htm), [structure and functions of the Federal Reserve System](https://www.federalreserve.gov/aboutthefed/structure-federal-reserve-system.htm), [IMF fintech topic](https://www.imf.org/en/Topics/fintech), and [BIS CPMI](https://www.bis.org/cpmi/index.htm). These sources describe public- and private-sector roles and the scope of payments, market infrastructures, and fintech; they do not establish a historical five-layer “bundle” or the privatization of four layers.

## Evidence checklist for testing a claim

| Analytical question | Primary evidence required | Inference to avoid |
|---|---|---|
| Whose liability is it? | Statute, product terms, and issuer financial / reserve disclosures | Treating instruments as the same money merely because they use the same currency denomination or chain |
| Where does final settlement occur? | System rulebook, central-bank / operator materials, and the legal status of the ledger / account | Equating processing speed, block finality, or message completion with legal finality |
| Who operates and changes the infrastructure? | Governance documents, validators / operators, upgrade keys, incident procedures, and SLA | Inferring control of the full workflow or production integration from an acquisition, partnership, or PoC alone |
| Who may use it and who bears compliance duties? | Terms of use, registrations / licenses, customer eligibility, KYC / AML, sanctions, and monitoring procedures | Inferring legal compliance or supervisory approval from a “permissioned” technical label |
| What explains a change over time? | Dated disclosures using consistent definitions and periods, decision materials, and a causal explanation from the parties | Constructing a single 2022 trigger from the co-occurrence of interest rates, sanctions, and an AI release, or stating a 2030 outcome as fact |

Source note: the table is the analytical procedure used in this entry. Refer to the preceding BIS / Federal Reserve / IMF / CPMI materials for institutional roles and add each operator's primary materials for a specific product.

The years 1944, 1971, 2008, and 2022 may each provide important historical context, but the sources cited here do not establish a linear causal timeline in which five layers were bundled and then separated. Add primary evidence for each event, institution, and function before making a historical claim.

## Overlapping roles by type of actor

| Actor | Functions that may overlap | Boundary to verify |
|---|---|---|
| Central bank | Unit of account, central-bank liabilities, RTGS / settlement services, financial stability, and payment-system oversight | The mandate and actual operating scope in each jurisdiction. A central bank does not necessarily perform customer KYC or operate a private network |
| Commercial bank | Deposit issuance, settlement access, customer onboarding, KYC / AML, and payment services | Connection to central bank money, the depositor's claim, participant eligibility, operating hours, and final settlement |
| PSP / fintech | Customer interface, payment initiation, routing, wallets, and KYC / monitoring for regulated activities | Whether the firm is an issuer or intermediary, whether it holds funds, and which rail and settlement asset it depends on |
| Private network / protocol | Message transport, ledger, validators, smart contracts, and token controls | Legal operator, governance, upgrade / freeze powers, external settlement, and the allocation of responsibility with regulated firms |

This table does not rank actors by strength or prescribe an integration sequence. In practice, one actor may perform several functions, while several actors may jointly provide a single function.

## Verification examples using public products

| Product / provider | What official materials establish | Evidence boundary this entry does not cross |
|---|---|---|
| **Coinbase / Base** | Base is an Ethereum L2 incubated within Coinbase. Coinbase's official description says ETH is the gas token and that there are no plans to issue a new Base network token. USDC is available on Base but is issued by Circle | Do not equate Coinbase customer verification and regulatory obligations with chain-level enforcement across every application on Base |
| **Stripe / Bridge** | Stripe announced that it completed the Bridge acquisition on 2025-02-04. This shows integration of stablecoin infrastructure with Stripe's payment and merchant rails. [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Related analysis]] | The acquisition announcement alone does not prove "USDB" issuance, OCC approval, or a uniform KYC / enforcement scope for all users |
| **Circle / Arc** | Circle issues USDC and announced Arc as an open EVM-compatible L1 in 2025, launching its public testnet in October of that year | Issuer, chain, and regulatory applications are separate questions. Do not infer approval status or a statutory denylist requirement from Arc's technical description |
| **J.P. Morgan / Kinexys** | J.P. Morgan's current official page describes JPM Coin as a USD-denominated bank deposit token issued on Base, an Ethereum Layer 2, for vetted institutional clients and 24/7 settlement. [[fintech/jpmorgan-jpmd-coin|Related JPM Coin / JPMD note]] | Do not infer from this specific product that every deposit token is issued on a public chain, has the same access conditions, or belongs in the same legal category as a stablecoin |

Sources: [Coinbase's description of Base](https://help.coinbase.com/en/coinbase/other-topics/other/base), [Stripe's announcement that it completed the Bridge acquisition](https://stripe.com/en-fr/newsroom/news/stripe-completes-bridge-acquisition), [Circle's Arc announcement](https://www.circle.com/es/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance), and [J.P. Morgan's description of JPM Coin](https://www.jpmorgan.com/kinexys/digital-payments/jpm-coin). This table is a verification map of public product surfaces, not a ranking or list of regulatory approvals.

"Layer coverage" in this framework is not a score of market control, sovereignty, authorization, legal advantage, or investment attractiveness. For a commercial-bank deposit arrangement such as JPM Coin, identify the issuer liability and access conditions rather than automatically placing it in the same regulatory category as a stablecoin.

## Application procedure

- Record the product's unit of account, issuer liability, and redemption right first
- Do not combine messaging, clearing, settlement, and finality into one “rail”; identify each operator and rulebook
- Track onboarding, KYC / AML, sanctions handling, wallet / key controls, and legal-enforcement authority in separate fields
- Do not treat a PoC, testnet, completed acquisition, commercial launch, and regulatory approval as the same maturity state
- Compare the same reference date, jurisdiction, and user scope; require party materials and additional evidence for causation or forecasts

## Related

- [[fintech/stablecoin-chain-sovereign-currency-divide|five-pole geopolitical conflict]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter arbitrage]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]

---

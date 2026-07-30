---
source: fintech/stablecoin-chain-token-strategy-trilemma
source_hash: c9a71247a0f45199
lang: en
status: machine
fidelity: ok
title: "Token strategy for public stablecoin chains"
translated_at: 2026-07-30T00:00:00+09:00
---

# Token strategy for public stablecoin chains — verifiable design axes, not three fixed states


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/stablecoin-revenue-split-economics|stablecoin interest-distribution economics]] and [[systems/cross-chain-five-pole-comparison-matrix|the five-pole cross-chain comparison matrix]].

> [!info] TL;DR
> A payment chain's token strategy cannot be described only by three fixed states: "issue," "do not issue," or "undecided." At minimum, analysis must separate the **gas-payment asset, consensus asset, governance rights, sale and distribution stage, and issuing entity**. Official materials available as of 2026-07-30 say that Base uses ETH for gas and currently has no plan to issue a new network token. Tempo has no native token and lets users pay fees with supported stablecoins. Arc has disclosed private-presale contracts for ARC tokens, but those contracts are not the same as a public listing or complete distribution.

## Three currently verifiable cases

| Network | Status verifiable in official materials | Fee / network asset | Disclosure caution |
|---|---|---|---|
| Base | Coinbase Help says there is "currently no plan to issue a new network token" | ETH is the native gas token | A "current plan" is not a permanent contractual promise never to issue |
| Tempo | Official protocol documentation states that "Tempo has no native token" | Gas and priority fees can be paid in supported USD-denominated TIP-20 stablecoins | A design without a native volatile token is different from a promise that the design can never change |
| Arc | Circle disclosed private-placement contracts for 740 million ARC in May 2026 and another 67.5 million ARC in June | ARC is described as a network-coordination asset after a future transition to PoS / delegated PoS | A presale contract does not mean public listing, immediate delivery, or completion of the transition |

Sources: [Coinbase Help — Base](https://help.coinbase.com/en/coinbase/other-topics/other/base), [Tempo transaction fees](https://docs.tempo.xyz/protocol/fees), [Tempo TIP-20](https://docs.tempo.xyz/learn/tempo/native-stablecoins), [Circle 2026-Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm), and [Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm).

## Why a simple "three-state" model is insufficient

Even when a "token exists," its role and maturity stage may differ.

1. **Gas asset**: What asset does a user pay transaction fees in?
2. **Validator / consensus asset**: What asset does a validator stake?
3. **Governance asset**: What grants voting rights over protocol changes?
4. **Coordination / incentive asset**: What is used to incentivize network participants?
5. **Distribution state**: Distinguish unissued, presale contracted, delivered, transfer-restricted, and publicly circulating.
6. **Issuer and control**: Which entity — operating company, foundation, or protocol governance — controls issuance and changes?

In Arc's case, Circle's SEC filings disclose a private placement and a future consensus transition. Purchasers are subject to a lock-up of at least one year from the transition date, and repayment rights may arise if token delivery or the PoS / delegated-PoS transition is not completed by 2028-05-08, among other conditions. The single phrase "issued" should therefore not collapse sale contract, delivery, transferability, and network operation into one state.

Source: [Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm).

## Verification framework

When comparing network-token strategies, review primary materials in this order.

| Verification item | Material to inspect | Information to record |
|---|---|---|
| Fees | Protocol specification | Fee unit, permitted assets, and the asset received by validators |
| Consensus | Architecture / whitepaper / filing | Current mechanism and transition conditions |
| Issuance | Issuer filing / token purchase agreement | Quantity sold, price, delivery conditions, and refund conditions |
| Transfer | Purchase agreement / protocol rules | Lock-up, vesting, and transfer restrictions |
| Governance | Governance documentation | Proposal, voting, and upgrade powers |
| Current official position | Issuer / operator statement | Date of the wording and whether it is a "current plan" or a binding promise |

Source: the primary comparison materials are [Base's official description](https://help.coinbase.com/en/coinbase/other-topics/other/base), the [Tempo fee specification](https://docs.tempo.xyz/protocol/fees), and the [Circle SEC filing](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm). The table is an analytical procedure for reading those materials together.

## Analytical boundary

- Token presence alone cannot rank regulatory burden as "lowest" or "highest." Legal treatment depends on the sale method, rights, purchasers, issuing entity, and jurisdictions of use.
- A private presale's proceeds or implied fully diluted valuation do not guarantee network utility or a public-market price.
- "No current plan" is an updateable corporate position, not a ten-year no-issuance commitment.
- Connecting token issuance to a parent's losses, litigation, or a particular person's multiple roles requires direct disclosure from the relevant parties.
- The cited materials do not establish a game-theory equilibrium in which one competitor's change necessarily causes others to issue tokens.

This page therefore does not assert "three stable equilibria." It is a verification framework for avoiding misreadings of token design and distribution state in public materials.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|Stablecoin interest-distribution economics]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

## Sources

- [Coinbase Help — Introducing Base](https://help.coinbase.com/en/coinbase/other-topics/other/base)
- [Tempo — Transaction Fees](https://docs.tempo.xyz/protocol/fees)
- [Tempo — TIP-20 Tokens](https://docs.tempo.xyz/learn/tempo/native-stablecoins)
- [Circle 2026-Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm)
- [Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)

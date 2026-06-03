---
title: "Etherscan verified-source poisoning — why \"verified\" is not \"the bytecode\""
aliases:
  - "verified source poisoning"
  - "block explorer verification trust gap"
  - "Etherscan verified ソース汚染"
domain: security
slug: etherscan-verified-source-poisoning
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [security, smart-contract, verification, etherscan, sourcify, bytecode, forensic]
status: active
sources:
  - "https://docs.sourcify.dev/docs/full-vs-partial-match/"
  - "https://docs.sourcify.dev/blog/talk-about-onchain-metadata-hash/"
  - "https://docs.soliditylang.org/en/latest/metadata.html"
  - "https://ethereum.org/en/developers/docs/smart-contracts/verifying/"
---

# Etherscan verified-source poisoning — why "verified" is not "the bytecode"

## Wiki route

This entry sits under [[security/INDEX|security domain]]. Read it with [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] as the hands-on counterpart, and against [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]] for the case where the shown source is genuine but the *next* implementation is not.

> [!info] TL;DR
> A green "Contract Source Code Verified" badge means a block explorer recompiled some source and got bytecode that **matches what is deployed** — usually allowing differences in comments, variable names, and metadata. It does **not** mean the source is benign, that it is the *binding* logic of a proxy, or that the match is byte-exact. Treating the badge as proof-of-safety is the trust gap; "verified source poisoning" is the family of techniques that exploit it. Ground truth is on-chain bytecode plus the upgrade graph, not the rendered source pane.

## What "verified" actually asserts

Verification recompiles submitted source under declared compiler settings and compares the output to the deployed bytecode. The strength of that assertion varies by tool and match type:

| Match type | What is guaranteed | What is NOT guaranteed |
|---|---|---|
| Full / exact match (Sourcify) | Deployed bytecode is byte-for-byte equal to recompilation, **including** the appended metadata hash — so the exact source bytes are pinned | Nothing about intent; benign-looking source can still be malicious |
| Partial match (Sourcify) / typical explorer "verified" | Runtime behavior matches; bytecode equal **except** the metadata hash region | Comments, variable names, source paths, and other metadata fields may differ from what the author actually compiled |
| Unverified | — | No source assertion at all |

The Solidity compiler appends the IPFS hash of the contract metadata to the bytecode; that hash is a fingerprint of the exact compilation. Full match checks it; many explorer "verified" flows do not. So a partial-match badge is consistent with source whose *names and comments have been edited to look safe* while compiling to the same behavior — the cosmetic layer is exactly the poisoning surface.

## Poisoning techniques the badge does not catch

- **Proxy indirection.** The verified contract is a proxy; the *implementation* it delegates to may be separately (un)verified, and can be swapped — see [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]]. The user reads the proxy's source, but logic executes in the implementation.
- **Metadata-region edits.** Under a partial match, comments and identifiers are unconstrained. Sympathetic naming (`SafeVault`, `onlyTrustedRelayer`) can mask a behavior the reviewer skims past.
- **Constructor vs runtime confusion.** Verification targets runtime bytecode; constructor-time effects and immutables are easy to under-inspect.
- **"Looks like a known good fork."** Source rendered to resemble an audited upstream while diverging in a red-line area — the precise failure mode that [[security/fork-and-rebrand-5-layer-audit-framework|the fork-and-rebrand five-layer audit]] is built to catch (Layer 1 upstream diff, Layer 3 bytecode fingerprint).

## Cross-checking the badge (public, reproducible)

1. Pull deployed runtime bytecode (`eth_getCode(addr, "latest")`) and strip the trailing metadata hash before any comparison.
2. Recompile the submitted source locally with the declared `solc` version and optimizer settings; diff against (1). A non-empty diff after metadata stripping is a hard signal.
3. Prefer a **full/exact** match (e.g. [Sourcify](https://docs.sourcify.dev/docs/full-vs-partial-match/)) over a partial match when the source's comments/names matter to your review.
4. If the target is a proxy, resolve the implementation from the ERC-1967 slot and verify *that*, then enumerate prior implementations from `Upgraded(address)` events.
5. For selector-level checks on unverified code, recover the 4-byte dispatcher and reverse selectors — the Layer 2 technique in [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]].

## Why this matters

- DeFi reviewers and listing teams who use "verified on Etherscan" as a gate — the badge is necessary, not sufficient.
- Incident attribution: post-hack analyses of exchange events such as [[exchanges/bybit-lazarus-hack-detailed-analysis|the Bybit Lazarus hack]] repeatedly surface unverified or shallowly-verified relay/helper contracts in the attack path.
- Regulated VASP onboarding, where verification expectations interlock with [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]] disclosure requirements.

## When the badge is good enough

- A **full/exact** match on a non-proxy, immutable contract whose source you have actually read — the assertion is strong and the logic cannot change.
- Low-risk read-only/view contracts where worst-case impact is negligible.

## Related

- [[security/INDEX|Security domain index]]
- [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]]
- [[security/proxy-upgrade-rug-pattern|Proxy-upgrade rug pattern]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]

## Sources

- Sourcify — Full vs Partial Match — https://docs.sourcify.dev/docs/full-vs-partial-match/
- Sourcify — We Need to Talk About the On-Chain Metadata Hash — https://docs.sourcify.dev/blog/talk-about-onchain-metadata-hash/
- Solidity docs — Contract Metadata (appended IPFS hash / metadata format) — https://docs.soliditylang.org/en/latest/metadata.html
- ethereum.org — Verifying smart contracts — https://ethereum.org/en/developers/docs/smart-contracts/verifying/

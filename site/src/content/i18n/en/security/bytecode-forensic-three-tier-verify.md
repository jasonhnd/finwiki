---
source: security/bytecode-forensic-three-tier-verify
source_hash: caf4af4d08ca77d8
lang: en
status: machine
fidelity: ok
title: "Smart Contract Bytecode Forensics — Three-Tier Verify Technique"
translated_at: 2026-05-30T15:08:51.567Z
---

# Smart Contract Bytecode Forensics — Three-Tier Verify Technique

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> When the project's verified contract does not match the GitHub source, the bytecode is the ground truth. Three-tier verify: (1) compare the on-chain deployed bytecode against the compilation result of the GitHub source; (2) reverse out the 4-byte PUSH4-EQ dispatcher to extract fn selectors and cross-check the interface of an unverified contract; (3) pin down team identity via a cross-chain verified twin fingerprint.

### Layer 1: Deployed vs Compiled diff

- Use eth_getCode(addr, "latest") to obtain the on-chain runtime bytecode
- Compile locally using the GitHub source + the solc version explicitly stated by the project + the optimizer settings
- A non-empty diff = the on-chain version and the GitHub version do not match = a signal
- Note the point of stripping out the diffs in immutable / constructor args / metadata hash before comparing

### Layer 2: Reversing the 4-byte PUSH4-EQ dispatcher

- An EVM contract branches at dispatcher entry with the PUSH4 selector EQ JUMPI pattern
- Even if the contract is not verified, all selectors can be extracted from the opcode sequence (4-byte)
- Reverse-look up the fn signature via 4byte.directory / openchain.xyz
- A hit on a sensitive interface such as ERC-20  / pause / blacklist / migrate = a signal

### Layer 3: Cross-chain verified twin fingerprint

- When the same team deploys to multiple chains, the case where one side is verified and the other is unverified appears frequently
- Use the runtime bytecode of the verified side (after stripping the metadata hash) as a fingerprint
- On the unverified-chain side, perform bytecode similarity matching (SimHash / k-gram, etc.)
- A hit = the same team = an identity anchor — commercial [[exchanges/global-crypto-forensics-vendor-layer|オンチェーン forensics vendor]] has commercialized this layer as a cross-chain cluster-label library

## When to Use

- Cases where a core contract (bridge / vault / governance) is intentionally left unverified
- Cases where the project's GitHub has already been deleted but the contract is still operating
- Cases where, in a cross-chain project, you want to distinguish "the public-facing structure vs the real development team"
- Cases where you suspect the existence of a backdoor / emergency pause / blacklist interface — in exchange incidents like [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] or [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]], there are cases where the attacker deployed an unverified relay contract

## When NOT to Use

- A contract that is already fully verified and whose source is trustworthy (reading the source directly is sufficient) — in this case a spec-first approach such as [[systems/formal-spec-implementation-codesign|formal-spec implementation co-design]] is more effective
- A proxy contract (do this after identifying the implementation from the EIP-1967 storage slot)
- A purely read-only view contract (low risk)

## Provenance

- Case study: on-chain, some core contracts were verified, but part of the bridge / vault family was closed-source · using three-tier verify, the interface of the unverified contract was reversed out, and team identity was locked via a cross-chain twin fingerprint

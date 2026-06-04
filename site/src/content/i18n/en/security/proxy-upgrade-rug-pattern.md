---
source: security/proxy-upgrade-rug-pattern
source_hash: efb549811e484feb
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Proxy-upgradeable contract rug pattern — admin upgrade rights as a backdoor"
translated_at: 2026-06-05T00:00:00.000Z
---

# Proxy-upgradeable contract rug pattern — admin upgrade rights as a backdoor

## Wiki route

This entry sits under [[security/INDEX|security domain]]. Read it against [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] for the on-chain verification mechanics it depends on, and against [[systems/erc-4337-overview|ERC-4337 overview]] for the broader smart-account context where upgradeable proxies are now the default deployment shape.

> [!info] TL;DR
> An upgradeable proxy splits a contract into a thin **proxy** (holds state + storage) and a swappable **implementation** (holds logic). Whoever controls the upgrade key can repoint the proxy to *new* logic at any time — including logic that drains, pauses, or blacklists. The "verified, audited" source a user reads is only the *current* implementation; the rug is the **next** one. This entry frames upgrade rights as a standing backdoor and gives a public, reproducible procedure to size that risk before depositing.

## Mechanism: where the upgrade key lives

The proxy delegates all calls (`delegatecall`) to an implementation address stored at a fixed storage slot. [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) standardizes those slots so tools can find them deterministically:

| Slot purpose | Storage slot (ERC-1967) | Derivation |
|---|---|---|
| Implementation | `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` | `keccak256('eip1967.proxy.implementation') - 1` |
| Admin | `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103` | `keccak256('eip1967.proxy.admin') - 1` |
| Beacon | `0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50` | `keccak256('eip1967.proxy.beacon') - 1` |

The `- 1` trick yields a slot with no known keccak256 preimage, so application storage cannot accidentally collide with it. **The admin slot is the rug surface**: read it, and you know exactly who can swap the logic.

## Two proxy shapes, two control locations

| Pattern | Upgrade logic lives in | Admin / upgrader | Forensic note |
|---|---|---|---|
| Transparent proxy | the **proxy** itself | ERC-1967 admin slot | Admin calls are routed to upgrade logic; non-admin calls fall through to implementation |
| UUPS ([ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)) | the **implementation** | a function (often `upgradeTo`) guarded by an `onlyOwner`-style modifier in the implementation | Lighter/cheaper, but the guard is *in code that can itself be upgraded away* — read the current implementation's auth, not just the proxy |
| Beacon proxy | a shared **beacon** contract | beacon owner | A single beacon upgrade can repoint *many* proxies at once — blast radius is the whole family |

OpenZeppelin's `UUPSUpgradeable` adds a guard that refuses upgrades to a non-UUPS-compliant implementation (to avoid bricking upgradeability), but that guard does not constrain *what* a permitted upgrader may install. Authorization is the only real control, and authorization is mutable.

## The rug sequence

1. Deploy a benign, audited implementation `V1`. Get it verified on a block explorer and (ideally) [Sourcify](https://docs.sourcify.dev/docs/full-vs-partial-match/). Users read clean source.
2. Accumulate deposits / TVL while the upgrade key sits with an EOA or a 1-of-1 "multisig".
3. At chosen time, the upgrade key installs `V2` containing a withdraw-all, mint, pause, or balance-rewrite path.
4. Execute, then optionally repoint back to `V1` to muddy the post-mortem.

Steps 1 and 4 are why a point-in-time source read is insufficient — the malicious code may never be the *currently shown* implementation. This is the same "the shown artifact is not the binding artifact" failure mode covered for explorers in [[security/etherscan-verified-source-poisoning|Etherscan verified-source poisoning]].

## Public risk-sizing checklist

Reproducible with a public RPC node and a block explorer; no private data required.

- [ ] Read the ERC-1967 admin slot (`eth_getStorageAt(proxy, <admin slot>)`). Is the upgrader an EOA, a single-key wallet, or a real multisig?
- [ ] If UUPS, fetch the current implementation and inspect the `upgradeTo`/`_authorizeUpgrade` guard — who passes it?
- [ ] Is there a **timelock** between scheduling and executing an upgrade? No timelock = instant rug capability.
- [ ] Is upgrade authority renounced, or held behind a known governance process? Compare against [[systems/hook-enforced-compliance|hook-enforced compliance]] where policy is bound into the call path rather than left to discretionary admin keys.
- [ ] Has the implementation address *already* changed since deployment? Block explorers and the ERC-1967 `Upgraded(address)` event log every prior implementation — enumerate them.
- [ ] For beacon proxies, identify the beacon owner and how many proxies share it (blast radius).

## When this matters most

- Bridges, vaults, and staking contracts holding pooled funds behind a single upgradeable proxy.
- "Audited" protocols where the audit covered `V1` but the upgrade key is an unaudited EOA.
- Agent-callable and account-abstraction contracts: smart accounts under [[systems/erc-4337-overview|ERC-4337]] and delegated EOAs under [[systems/erc-7702-overview|ERC-7702]] are frequently upgradeable, so the same admin-key analysis applies to the [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] before granting it spending permissions.

## When NOT to over-index on this

- Genuinely immutable (non-proxy) contracts with no upgrade slot — there is no upgrade rug surface (other risks remain).
- Upgrades gated behind a long timelock *plus* a credible multisig — risk is materially lower (users can exit during the delay).
- Permissioned / non-EVM settings such as [[systems/canton-overview|Canton]], where contract evolution follows a template-governance path rather than an EVM proxy slot — analyze the governance route instead.

## Related

- [[security/INDEX|Security domain index]]
- [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]]
- [[security/etherscan-verified-source-poisoning|Etherscan verified-source poisoning]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]

## Sources

- ERC-1967: Proxy Storage Slots — standardized implementation/admin/beacon slots — https://eips.ethereum.org/EIPS/eip-1967
- ERC-1822: Universal Upgradeable Proxy Standard (UUPS) — upgrade logic in the implementation — https://eips.ethereum.org/EIPS/eip-1822
- OpenZeppelin Contracts — Proxy API (Transparent, UUPS, Beacon) — https://docs.openzeppelin.com/contracts/4.x/api/proxy
- ethereum.org — Upgrading smart contracts (proxy patterns overview) — https://ethereum.org/en/developers/docs/smart-contracts/upgrading/

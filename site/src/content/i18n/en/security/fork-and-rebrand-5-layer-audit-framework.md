---
source: security/fork-and-rebrand-5-layer-audit-framework
source_hash: 1149b0aa7ce1325b
lang: en
status: machine
fidelity: ok
title: "A Five-Layer Audit Framework for Fork-and-Rebrand Projects"
translated_at: 2026-05-30T15:08:51.569Z
---

# A Five-Layer Audit Framework for Fork-and-Rebrand Projects


## Wiki route

This entry sits under [[security/bytecode-forensic-three-tier-verify|smart-contract bytecode forensics ? three-layer verification technique]]. Read it against [[systems/INDEX|systems index]] for peer / contrast context and [[INDEX|FinWiki index]] for the broader system / regulatory boundary.

> [!info] TL;DR
> When a project copies (Forks) a well-known open-source protocol (Uniswap, Compound, GMX, etc.) and swaps the brand (Rebrand) before launching the service, a traditional monolithic code audit produces a large number of blind spots. The **Five-Layer Audit Framework (5-Layer Audit Framework)** is a systematic security / provenance audit method designed specifically for this kind of project, covering code diff, inherited known vulnerabilities, compilation fingerprint, team relatedness, and on to compliance risk.

## Core Mechanism

The core idea of the Fork-and-Rebrand audit is **"what matters is not the code that did not change, but what was changed, what was inherited, and what was hidden."**

```
Layer 5: Compliance & License Audit (License & Copyleft Verification)
  └── Layer 4: Team & Deployer Provenance
        └── Layer 3: Compilation Fingerprint & Bytecode Diff (Compilation Fingerprint & Diff)
              └── Layer 2: Inherited Known Vulnerabilities & Fixes (Inherited Vulnerability Scan)
                    └── Layer 1: Upstream Codebase Comparison (Upstream Source Diff)
```

---

### Layer 1: Upstream Codebase Comparison (Upstream Source Diff)
- **Purpose**: Strictly identify the per-1行 diff between the fork code and the original code.
- **Method**:
  - Determine the fork's exact Commit node with `git merge-base`.
  - Strip out pure rename substitutions (e.g., replacing `UniswapV3` wholesale with `BrandSwap`) before comparing logic diffs.
  - **Red line**: cases where there are modifications to core math libraries (Math/SafeMath), permission-control Modifiers, or state-transition logic.

### Layer 2: Inherited Known Vulnerabilities & Fixes (Inherited Vulnerability Scan)
- **Purpose**: Verify whether known vulnerabilities disclosed in the original protocol after the fork point have been fixed in this project.
- **Method**:
  - Search all vulnerability disclosures, audit reports, and GitHub Security Advisories that arose in the upstream protocol after the fork commit.
  - Designate and inspect the corresponding code fragments within this project.
  - **Typical failure case**: many Compound V2  Fork projects inherited, in 2023-2024年, the Read-only Oracle Manipulation vulnerability that the original had already fixed. For the analogous point on the Japanese VASP side, see the mandatory disclosure requirements of [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全監査認証体系]].

### Layer 3: Compilation Fingerprint & Bytecode Diff (Compilation Fingerprint & Diff)
- **Purpose**: Use [[security/bytecode-forensic-three-tier-verify|三層 verify 技術]] to verify whether the Bytecode actually deployed on-chain matches exactly the open-source code the project claims.
- **Method**:
  - After stripping the Metadata Hash (Swarm/IPFS compilation fingerprint), compare the similarity of the Runtime Bytecode.
  - Verify the compatibility diff between the compiler version (solc version) and the EVM target version (e.g., the opcode anomaly when Solidity 0.8.20 or higher is force-deployed on a chain that does not support PUSH0).

### Layer 4: Team & Deployer Provenance
- **Purpose**: Identify the true academic / security-field background of the development team behind the project, and its past record.
- **Method**:
  - Extract the funding-source chain of the Deployer Address using [[security/forensic-identity-anchor-chain|forensic-grade identity-anchor chain]].
  - Use the past web pages preserved by [[security/wayback-machine-as-forensic-tool|Wayback Machine]], and the committer email and PGP signatures of early GitHub commit records, to identify the team's past record.
  - Bytecode matching of unverified contracts with extremely high cross-chain similarity (Twin Fingerprint Mapping).

### Layer 5: Compliance & License Audit (License & Copyleft Verification)
- **Purpose**: Audit the open-source license restrictions of the original protocol (Business Source License, BSL 1.1 , etc.) to prevent exposure to the risk of legal injunction or liquidity freeze through infringement.
- **Method**:
  - Confirm whether the BSL restriction period (e.g., the 2-year BSL period of Uniswap V3) has expired.
  - Confirm the contagiousness of GPL Copyleft: where the original is GPL, whether this project has published, as required, the entirety of the modified code.

---

## Application Scenarios

- **DeFi-lego aggregation operators**: before integrating a new lending / DEX protocol, evaluate whether it is a low-quality Fork.
- **Security audit firms**: provide a fork-specialized security / compliance report to the project. In a regulated-infrastructure scenario, detection can also be moved forward to runtime by referring to the [[systems/hook-enforced-compliance|hook-enforced compliance]] pattern.
- **Judicial / loss-recovery forensics**: after a hacker attack, determine whether the victim project was harmed through inheritance of an upstream known vulnerability, and organize the attribution of responsibility. For major incidents, see historical paradigms such as [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] or [[exchanges/mtgox-bankruptcy-processing-timeline|Mt.Gox 破産処理 timeline]].

## Related Constraints and Boundaries

- **Zero-knowledge / non-EVM chains**: on non-EVM chains such as Solana and Aptos, bytecode comparison and fingerprint extraction require an entirely different toolchain (Anchor build verification, etc.). On permissioned / privacy-preserving chains such as the DAML model of [[systems/canton-overview|Canton]], contract-template-level diff comparison is further required.
- **Obfuscating compilers**: where the project uses its own obfuscation technique, or has modified the solc compiler, the similarity-matching effectiveness of Layer 3 drops significantly.

## Sources

- Uniswap v3-core LICENSE（Layer 5 的代表例: Business Source License 1.1、Change Date 2023-04-01、Change License GPL v2.0+） — https://github.com/Uniswap/v3-core/blob/main/LICENSE
- Compound Protocol repository, the widely forked Compound V2 codebase used for Layer 1/2 upstream comparison and inherited-vulnerability analysis ? https://github.com/compound-finance/compound-protocol
- GitHub Advisory Database, the official database referenced by Layer 2 for GitHub Security Advisories ? https://github.com/advisories

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[security/bytecode-forensic-three-tier-verify|smart-contract bytecode forensics ? three-layer verification technique]]
- [[security/forensic-identity-anchor-chain|forensic-grade identity-anchor chain ? physical / on-chain hybrid attribution inference]]
- [[security/wayback-machine-as-forensic-tool|standard procedure for using the Wayback Machine as a forensic tool]]
- [[security/module-path-confusion-supply-chain-attack.md|module-path spoofing supply-chain attack ? precision poisoning mechanism]]
<!-- /wiki-links:managed -->

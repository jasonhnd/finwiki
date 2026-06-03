---
title: "Security domain"
aliases:
  - "security INDEX"
  - "forensics domain"
  - "セキュリティ domain"
domain: "security"
created: 2026-05-24
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-11-20
confidence: certain
tags: [security, index, forensics, supply-chain, bytecode, wayback, audit, proxy, upgradeable, typosquatting, verification]
status: active
sources:
  - "https://web.archive.org/"
  - "https://docs.soliditylang.org/en/latest/metadata.html"
  - "https://etherscan.io/verifiedSignatures"
  - "https://owasp.org/www-project-top-ten/"
  - "https://snyk.io/learn/typosquatting-attacks/"
---

# Security domain

## TL;DR

This domain routes **investigation / forensic techniques** for crypto and software-supply-chain incidents: smart-contract bytecode verification, identity-anchor chains across multiple sources, recovery of de-published content, package supply-chain attack patterns, and a structured audit framework for fork-and-rebrand projects.

The unifying frame is *adversarial verification* — every entry assumes the published record has been edited, redirected, or stripped, and gives a procedure to recover the truth anyway. For incident-context entries on specific exchanges, see [[exchanges/INDEX|exchanges]]; for the broader systems context, see [[systems/INDEX|systems]] when those INDEXes are present.

## Entries

Nine entries. The original five carry `status: candidate`; the four added 2026-06-03 carry `status: active`. The column below reports each entry's `confidence:` level, not its lifecycle status. Note that **fork-and-rebrand-5-layer-audit-framework** is `confidence: certain` while still `status: candidate` — high confidence in the technique, but the page itself is not yet promoted past candidate.

| Confidence | Slug | Title | Why it exists |
|---|---|---|---|
| possible | [[security/bytecode-forensic-three-tier-verify\|bytecode-forensic-three-tier-verify]] | Smart contract bytecode forensic — three-tier verify technique | How to verify deployed contract bytecode against claimed source across three levels |
| possible | [[security/forensic-identity-anchor-chain\|forensic-identity-anchor-chain]] | Team-real-identity forensic anchor chain — multi-source fingerprint stitching | How to reconstruct true team identity from scattered weak signals |
| possible | [[security/wayback-machine-as-forensic-tool\|wayback-machine-as-forensic-tool]] | Actively de-published content recovery — Wayback Machine as forensic weapon | How to recover content the publisher has tried to erase |
| possible | [[security/module-path-confusion-supply-chain-attack\|module-path-confusion-supply-chain-attack]] | Module path confusion + LICENSE strip = supply chain attack triple-play | Concrete supply-chain attack pattern combining three techniques |
| certain | [[security/fork-and-rebrand-5-layer-audit-framework\|fork-and-rebrand-5-layer-audit-framework]] | Fork-and-Rebrand five-layer audit framework | Structured audit checklist for projects that fork an existing repo and rebrand |
| likely | [[security/proxy-upgrade-rug-pattern\|proxy-upgrade-rug-pattern]] | Proxy-upgradeable contract rug pattern — admin upgrade rights as a backdoor | How to size the standing rug risk of an upgradeable proxy from public on-chain state |
| likely | [[security/etherscan-verified-source-poisoning\|etherscan-verified-source-poisoning]] | Etherscan verified-source poisoning — why "verified" is not "the bytecode" | Why a "verified" badge is necessary but not sufficient, and how to cross-check it |
| likely | [[security/git-history-rewrite-detection\|git-history-rewrite-detection]] | Git history rewrite detection — recovering squashed and force-pushed states | Source-code analogue of Wayback: recover commits a force-push tried to erase |
| likely | [[security/typosquatting-package-detection-checklist\|typosquatting-package-detection-checklist]] | Typosquatting package detection checklist — npm / PyPI / Go name-confusion triage | Reusable, registry-agnostic checklist generalizing the module-path-confusion pattern |

## Start here

For a first-time investigator, read in this order:

1. [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]] — set up the people / org layer first.
2. [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]] — verify the on-chain artifact actually matches the public claim.
3. [[security/wayback-machine-as-forensic-tool|Wayback Machine as forensic tool]] — recover deleted prior statements before anchoring conclusions.
4. [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]] — apply when the project is a derivative work.
5. [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]] — the concrete attack pattern these techniques most often surface.

For deeper dives once the basics are in place: [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]] and [[security/etherscan-verified-source-poisoning|verified-source poisoning]] extend the bytecode track; [[security/git-history-rewrite-detection|git history rewrite detection]] extends the Wayback track; [[security/typosquatting-package-detection-checklist|typosquatting detection checklist]] generalizes the supply-chain track.

## Cross-technique pairing

| Pairing | Use when |
|---|---|
| [[security/forensic-identity-anchor-chain\|identity anchor]] + [[security/wayback-machine-as-forensic-tool\|Wayback]] | Founder / team has scrubbed early bios, LinkedIn, or company history |
| [[security/bytecode-forensic-three-tier-verify\|bytecode verify]] + [[security/fork-and-rebrand-5-layer-audit-framework\|fork-and-rebrand audit]] | A "new" protocol turns out to be a fork of a known codebase |
| [[security/module-path-confusion-supply-chain-attack\|module path confusion]] + [[security/fork-and-rebrand-5-layer-audit-framework\|fork-and-rebrand audit]] | A dependency or template has been silently rerouted to a malicious source |
| [[security/proxy-upgrade-rug-pattern\|proxy-upgrade rug]] + [[security/etherscan-verified-source-poisoning\|verified-source poisoning]] | A contract shows clean "verified" source but holds funds behind an upgradeable proxy admin key |
| [[security/git-history-rewrite-detection\|git history rewrite]] + [[security/wayback-machine-as-forensic-tool\|Wayback]] | A repo's history was squashed/force-pushed and the web record was also de-published |
| [[security/typosquatting-package-detection-checklist\|typosquatting checklist]] + [[security/forensic-identity-anchor-chain\|identity anchor]] | A squatted package needs both name-distance triage and attribution to a publisher |

## Research control

When expanding this domain:

1. Every technique entry should be **reproducible** — name the tool, command, or query that a third party can re-run.
2. Cite the *primary tool* (Wayback, Etherscan, Sourcify, snyk, OSV) directly. Do not rely on secondary write-ups for forensic claims.
3. Forensic conclusions on named entities should be stated with the matching `confidence:` level (`possible` / `likely` / `certain`), and any reversed claim must update the entry with a new `last_tended:` date.
4. Keep exchange-specific incident pages in [[exchanges/INDEX|exchanges]] when that domain has the page; this domain stays at the *technique* level.

## Related domains

- [[exchanges/INDEX|exchanges INDEX]] — exchange-specific incident write-ups that apply these techniques.
- [[systems/INDEX|systems INDEX]] — smart-contract and AA-stack systems context for bytecode-level work.
- [[agent-economy/INDEX|agent-economy INDEX]] — agent-callable contracts (ERC-7715 permissions, AP2 settlement adapters) inherit the same supply-chain attack surface analyzed here.
- [[business/INDEX|business INDEX]] — named-individual / company case studies frequently rely on identity-anchor-chain methodology.
- [[INDEX|FinWiki index]] — top-level navigation.

## Backlog

**All four previously-planned pages were created on 2026-06-03** and now appear in the Entries table above:

| Priority | Page | Status |
|---|---|---|
| P1 | [[security/proxy-upgrade-rug-pattern\|proxy-upgrade-rug-pattern]] | Created 2026-06-03 — pairs with bytecode forensic. |
| P1 | [[security/etherscan-verified-source-poisoning\|etherscan-verified-source-poisoning]] | Created 2026-06-03 — "verified source" vs on-chain bytecode. |
| P2 | [[security/git-history-rewrite-detection\|git-history-rewrite-detection]] | Created 2026-06-03 — source-code companion to Wayback. |
| P2 | [[security/typosquatting-package-detection-checklist\|typosquatting-package-detection-checklist]] | Created 2026-06-03 — reusable package-typosquat checklist. |

No new planned pages are currently queued. Candidate future directions: non-EVM (Solana/Move) bytecode-fingerprint forensics, and a timelock-governance pattern entry to pair with proxy-upgrade-rug.

## Sources

- web.archive.org — Wayback Machine, the primary forensic recovery tool.
- docs.soliditylang.org/en/latest/metadata.html — Solidity metadata format used in bytecode verification.
- etherscan.io/verifiedSignatures — Etherscan verified-contract surface.
- owasp.org/www-project-top-ten — OWASP Top Ten as supply-chain framing.
- snyk.io/learn/typosquatting-attacks — typosquatting attack reference.

---
source: security/forensic-identity-anchor-chain
source_hash: 72fad4deb2919683
lang: en
status: machine
fidelity: ok
title: "Forensic Identity Anchor Chain for a Team's True Identity — Synthesizing Multi-Source Fingerprints"
translated_at: 2026-05-30T15:08:51.568Z
---

# Forensic Identity Anchor Chain for a Team's True Identity — Synthesizing Multi-Source Fingerprints

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/bytecode-forensic-three-tier-verify|bytecode forensic]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> When the public-facing structure (LinkedIn company page / official site about / PR release) does not match the people actually writing the code, synthesize 6 independent fingerprint sources → build a single-thesis identity chain → lock the separation structure of "public-facing vs real team." Combined with the cluster labels of [[exchanges/global-crypto-forensics-vendor-layer|商用オンチェーンforensics vendor]], a complete attribution can be formed.

## 6 Independent Fingerprint Sources

1. **TLS certificate SANs** — the Subject Alternative Names within a domain certificate · the same ops base tends to share the same certificate or issuing authority
2. **Concentration of GitHub account registration times** — multiple accounts registered consecutively within 1 hours = a sock-puppet signal
3. **Email domain preference** — ProtonMail / iCloud / own domain vs Gmail · the team's overall preference tends to align
4. **Language of names on the LinkedIn company page** — a mix of West African / Southeast Asian / Indian / Chinese / Japanese names
5. **Language of the GitHub commit author name** — the name field of actual commits (contrasted with the public-facing names on LinkedIn)
6. **Exposure from CLI / config paths** — config paths in the home directory, remnants of SSH known-hosts, document metadata, the author field of PDFs

## Synthesis logic

- **Public-facing vs real-team determination**: source 4 (LinkedIn name) ≠ source 5 (commit author name) + source 3 (email domain preference) → a binary separation
- **Sock-puppet determination**: source 2 (concentration of registration times) + source 5 (email overlap between "independent" accounts) → multiple accounts of the same person — attribution inference for large exchange incidents like [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] relies precisely on this kind of multi-account cluster-overlap analysis
- **Individual identity anchor**: source 1 (TLS) ∩ source 6 (CLI path) → a single-thesis dev identity — the result of this layer can connect directly to the sanctions-list matching process of [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze precedent]]

## Anti-pattern

Do not assert identity on a single thesis (e.g., concluding from LinkedIn1件 alone) · always cross-check with 3 or more independent sources.

## When to Use

- Cases where a project claims to be a "global team," but the code style / comment language is inconsistent
- Cases where the same email appears in the commits of multiple "independent companies / outsourcers"
- Cases where the LinkedIn name and the Whitepaper author / commit author name are in completely different languages

## When NOT to Use

- The project is public and transparent (GPG-signed / has a public identity)
- An individual's open-source project (no need to contrast against a public face)
- Cases where you only do code-quality DD and do not verify the team's authenticity

## Provenance

- Case study (vaporware audit): multiple GitHub accounts registered in a concentrated short window + the language of names on the LinkedIn company page vs the language of the commit author name did not match + the metadata author of the Whitepaper PDF + CLI path remnants + own-domain email · the separation of public-facing / real team was locked through cross-checking of multiple anchors
- The same kind of technique is also applied to ex post attribution inference: see the leads for attacker tracing in [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack 帰属分析]] or [[exchanges/jp-vasp-incident-history|JP VASP incident history]]

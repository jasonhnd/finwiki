---
title: "Typosquatting package detection checklist — npm / PyPI / Go name-confusion triage"
aliases:
  - "typosquatting detection checklist"
  - "package name confusion triage"
  - "タイポスクワッティング検出チェックリスト"
domain: security
slug: typosquatting-package-detection-checklist
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [security, supply-chain, dependency, typosquatting, npm, pypi, go, checklist]
status: active
sources:
  - "https://docs.npmjs.com/threats-and-mitigations/"
  - "https://owasp.org/www-project-top-ten/"
  - "https://google.github.io/osv-scanner/"
  - "https://osv.dev/"
---

# Typosquatting package detection checklist — npm / PyPI / Go name-confusion triage

## Wiki route

This entry sits under [[security/INDEX|security domain]]. It generalizes the concrete attack in [[security/module-path-confusion-supply-chain-attack|module path confusion + LICENSE strip supply chain attack]] into a reusable, registry-agnostic triage checklist, and it shares its evidence layer with [[security/forensic-identity-anchor-chain|forensic identity anchor chain]] when a squatted package needs to be tied back to a publisher.

> [!info] TL;DR
> Typosquatting publishes a malicious package under a name that *resembles* a popular one, betting on a developer's typo or a copy-paste error. It is distinct from **dependency confusion** (identical internal name, exploiting build-time namespace resolution) and from **slopsquatting** (names an LLM is likely to hallucinate). This entry is a fixed checklist to triage a suspect dependency name across npm, PyPI, and Go before it lands in a lockfile, plus the public tooling to automate it.

## Three confusion families (don't conflate them)

| Family | Attacker name vs target | Exploits | Primary defense |
|---|---|---|---|
| Typosquatting | *similar* but not identical | a typing / copy error | name-distance check + registry reputation |
| Dependency confusion | *identical* to an internal package | build-system namespace resolution preferring public registry | namespace reservation / scoped registries / pinned source |
| Slopsquatting | a *plausible-sounding* invented name | an LLM hallucinating a package that does not exist | verify the package actually exists and is widely used before installing |

The module-path / `replace` hijack documented in [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]] is a Go-flavored cousin: the *module path* (not just the display name) impersonates upstream while a `replace` directive reroutes to a fork.

## Common squatting name transforms

Attackers favor predictable mutations, so a candidate name can be triaged by pattern:

- **Transposition** — `reqeusts` → `requests`, `urlib3` → `urllib3`
- **Omission / addition** — `boto` vs `boto3`; `colourama` → `colorama`
- **Homoglyph / substitution** — `0`↔`o`, `1`↔`l`, `rn`↔`m`
- **Separator confusion** — hyphen vs underscore vs nothing (`python-dateutil` vs `python_dateutil`)
- **Authoritative-sounding suffix** — `requests-utils`, `<lib>-core`, `<lib>-extended` posing as an official extension

## Triage checklist (per suspect dependency)

- [ ] **Edit distance to a popular name.** Is the name within 1–2 character edits of a well-known package in the same ecosystem? If yes, treat as suspect until cleared.
- [ ] **Does the legit target exist, and is this it?** Confirm the *intended* package's exact canonical name on the registry; compare character-by-character (watch separators and homoglyphs).
- [ ] **Maturity signals.** Download counts, age, release cadence, repository stars, and number of maintainers. A near-name with near-zero history is a red flag.
- [ ] **Source ↔ registry linkage.** Does the package link to a real, matching source repo? For Go, does the **module path** match the actual repo URL, and are there `replace` directives? (cross-ref the module-path entry).
- [ ] **Provenance / signing.** Is the package published with provenance attestation or a signature, or anonymously?
- [ ] **Install-time scripts.** npm `preinstall`/`postinstall` (or PyPI `setup.py` execution) that fetch or run code at install time — high-risk, inspect before installing.
- [ ] **LICENSE present and coherent.** A missing or mismatched license alongside copied code is the legal-surface tell from the supply-chain triple-play.
- [ ] **Cross-check advisories.** Query [OSV](https://osv.dev/) / OSV-Scanner and the registry's own advisories for the exact name and known squats.

## Tooling that automates the checklist

| Tool | Covers |
|---|---|
| OSV / OSV-Scanner | Language-agnostic advisory lookup across npm, PyPI, Go modules, and more |
| Registry-native protections | npm typosquat blocking on publish; PyPI automated typosquat detection; namespace reservation |
| Lockfile + provenance | Pinning exact versions and verifying provenance shrinks the install-time window |

Frame the whole exercise as a supply-chain instance of the [OWASP](https://owasp.org/www-project-top-ten/) software-and-data-integrity-failures category, and route findings on regulated build pipelines through [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]] where third-party dependency risk is in scope.

## When to use

- Adding a new transitive or direct dependency whose name is close to a well-known package.
- Auditing a lockfile after a copy-paste install or an AI-suggested package name (slopsquatting check).
- Vendor / OSS-license review where dependency provenance and licensing must be evidenced.

## When NOT to over-apply

- First-party / internal packages installed from a *private, scoped* registry with namespace reservation — the relevant threat is dependency confusion, handled by registry configuration, not name-distance.
- An exact, well-established package with strong maturity signals — name-distance alarms are false positives here.
- Closed-source binaries with no package-registry surface — a different supply-chain control applies.

## Related

- [[security/INDEX|Security domain index]]
- [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]]
- [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]

## Sources

- npm Docs — Threats and mitigations (typosquatting, install scripts) — https://docs.npmjs.com/threats-and-mitigations/
- OWASP Top Ten — software and data integrity failures framing — https://owasp.org/www-project-top-ten/
- OSV-Scanner — language-agnostic vulnerability / advisory scanning — https://google.github.io/osv-scanner/
- OSV — open source vulnerability database — https://osv.dev/

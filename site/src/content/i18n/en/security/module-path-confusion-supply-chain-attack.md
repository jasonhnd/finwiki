---
source: security/module-path-confusion-supply-chain-attack
source_hash: 7cb8194d1583f458
lang: en
status: machine
fidelity: ok
title: "Module path confusion + LICENSE strip = the three-hit combo of a supply-chain attack"
translated_at: 2026-05-30T15:08:51.569Z
---

# Module path confusion + LICENSE strip = the three-hit combo of a supply-chain attack

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader dependency boundary.

> [!info] TL;DR
> A combination of 3 independent operations forms a supply-chain attack: (1) spoof the upstream (e.g., github.com/cosmos/...) in the module path of go.mod / package.json; (2) hijack the spoofed path to one's own fork with a replace directive; (3) delete the LICENSE of the main repository. When a downstream user imports the "legitimate" path, what actually executes is the fork. On the regulated VASP route, this kind of attack surface is partially covered by the [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全審計認証]] system.

### 1. Module path confusion

- Go: module github.com/cosmos/cosmos-sdk, but the actual repository is github.com/<rebrand>/x
- npm: name @cosmos/sdk, but the scope is not owned by the company itself
- When a user runs go get github.com/cosmos/cosmos-sdk, they may obtain the spoofed fork via GOPROXY

### 2. Replace hijack

- go.mod contains replace github.com/cosmos/cosmos-sdk => ./fork
- When an upstream user pulls in the project, the replace passes through transparently and they are forced to use the fork
- Combined with the module path, this constitutes a double spoof

### 3. LICENSE strip

- No LICENSE file is placed in the main repository
- Even if the original project is a fork of Apache 2.0, downstream users are, legally, using it without a license
- This step is easily overlooked, yet it markedly expands the legal surface

## Identification checklist

- [ ] Does the module path on line 1行 of go.mod match the GitHub URL?
- [ ] Is there a replace directive in go.mod?
- [ ] Is there a LICENSE / LICENSE.md / LICENSE.txt at the root of the main repository?
- [ ] Does the name field of package.json match the actual scope on the npm registry?
- [ ] Has the original fork name slipped into a commit message (e.g., a self-incriminating string like "for <upstream-project>")?

## When to Use

- Cases where a project claims to be "fully developed in-house" but the repository structure closely resembles a fork
- Cases where a downstream user riding on this dependency conducts a supply-chain risk audit — in major incidents like [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]], the real risk of social-engineering / build-toolchain attacks on the third-party-dependency side is fully exposed
- Cases where the legal side evaluates "which OSS this company uses / whether the licensing is appropriate"

## When NOT to Use

- A project that explicitly states "fork of X" and retains the original LICENSE — this qualifies as a legitimate fork
- A purely application-layer project with no module-path concept
- A closed-source, un-auditable project (which must be addressed via another route) — for example, a case like [[systems/canton-overview|Canton]] on a permissioned chain must follow a governance + auditor route rather than source diff

## Provenance

- Case study (vaporware audit): a case where most of the code was directly copied from an upstream public-chain project, the upstream module path was spoofed in go.mod, it was hijacked to a local fork with replace, the LICENSE of the main repository was deleted, and the upstream project name leaked into a commit message, self-incriminating the project

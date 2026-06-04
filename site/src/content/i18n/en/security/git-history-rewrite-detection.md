---
source: security/git-history-rewrite-detection
source_hash: 1976c318ed86639c
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Git history rewrite detection — recovering squashed and force-pushed states"
translated_at: 2026-06-05T00:00:00.000Z
---

# Git history rewrite detection — recovering squashed and force-pushed states

## Wiki route

This entry sits under [[security/INDEX|security domain]]. It is the source-code analogue of [[security/wayback-machine-as-forensic-tool|Wayback Machine as a forensic tool]] (which recovers de-published *web* content), and it feeds the people-layer work in [[security/forensic-identity-anchor-chain|forensic identity anchor chain]] by recovering committer emails and timestamps that a rewrite tried to erase.

> [!info] TL;DR
> A force-push or squash *rewrites* a branch pointer, but Git does not immediately delete the old commits — they survive as unreachable ("dangling") objects until garbage collection, and any clone, fork, or CI checkout taken before the rewrite still holds them. On GitHub, the Events API independently logs the pre-rewrite commit SHAs. So "we cleaned that up" is a recoverable claim: enumerate dangling objects, replay the reflog, and read PushEvent history. The rewrite itself is a signal that someone wanted a prior state gone.

## Why rewritten history is recoverable

| Mechanism | What it preserves | Public command / endpoint |
|---|---|---|
| Dangling objects | Commits unreferenced after a rewrite stay in the object DB until `gc` | `git fsck --lost-found` / `git fsck --unreachable` |
| Reflog | A local log of where `HEAD`/branches pointed, default ~90-day retention | `git reflog` (and `git reflog show <branch>`) |
| Pre-rewrite clones/forks/CI | Any copy taken before the push has the old graph in full | inspect that copy's `git log --all` |
| GitHub Events API | `PushEvent` records the SHAs of pushed commits, independent of later rewrites | `GET /repos/{owner}/{repo}/events` |

A force-push moves the remote branch pointer to the new history; the displaced commits become orphans but persist until the next GC cycle. Locally, `git reflog` still remembers the exact prior commit hash, and `git fsck` enumerates the unreachable objects. Remotely, the [GitHub Events API](https://docs.github.com/en/rest/activity/events) returns recent `PushEvent`s carrying the before/after SHAs — effectively a remote reflog you do not control.

## Detection procedure (public, reproducible)

1. **Look for force-push fingerprints.** Non-linear timestamps, a sudden drop in commit count, or a single squashed "Initial commit" replacing a known longer history are tells. A "for `<upstream-project>`" string surviving in a commit message is the kind of self-incrimination noted in [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]].
2. **Enumerate dangling objects.** In any clone you hold: `git fsck --lost-found` and inspect `dangling commit <sha>` entries with `git show <sha>`.
3. **Replay the reflog.** `git reflog` / `git reflog show <branch>` reveals prior tips even after an "overwrite," within the retention window.
4. **Query the remote event log.** `GET /repos/{owner}/{repo}/events` and read `PushEvent` payloads for pre-rewrite SHAs; cross-reference against what the current branch shows. (See [GitHub event types](https://docs.github.com/en/rest/using-the-rest-api/github-event-types) for the `PushEvent` shape.)
5. **Diff recovered vs current.** Treat any removed file (LICENSE, an earlier README, a deleted contract, leaked config) as evidence — the *removal*, plus its timestamp, is the finding.
6. **Preserve.** Snapshot recovered objects to an out-of-band store; a publisher can later GC the remote or rewrite again.

## Companion to Wayback

| Layer | Tool | Recovers |
|---|---|---|
| Published web pages / docs / PDFs | [[security/wayback-machine-as-forensic-tool|Wayback Machine]] | De-published site content and prior statements |
| Source repository state | this entry (`git fsck` / reflog / Events API) | Squashed/force-pushed commits, deleted files, committer metadata |

Run both: the web layer recovers the *claim*, the git layer recovers the *code and authorship* behind it.

## When to use

- A project's repo shows a suspiciously short or squashed history while marketing implies long development.
- A LICENSE, audit report, or sensitive contract "was never there" but a prior clone/fork suggests otherwise.
- Recovering committer emails / author names erased by a rewrite, to feed [[security/forensic-identity-anchor-chain|identity anchor chain]] cross-checks.

## When NOT to use

- No pre-rewrite copy exists *and* the remote has already GC'd *and* the reflog window has expired — recovery may be impossible (note the gap rather than overclaim).
- Legitimate, disclosed history rewrites (e.g. removing an accidentally committed secret) — a rewrite is a signal, not proof of bad intent; corroborate before attributing.
- Non-Git VCS or fully closed-source projects — use a different evidence route.

## Related

- [[security/INDEX|Security domain index]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machine as a forensic tool]]
- [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]]
- [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]

## Sources

- git-scm — git-fsck (unreachable / dangling object enumeration) — https://git-scm.com/docs/git-fsck
- git-scm — git-reflog (local history of branch tips, retention window) — https://git-scm.com/docs/git-reflog
- GitHub Docs — REST API endpoints for events (PushEvent before/after SHAs) — https://docs.github.com/en/rest/activity/events
- GitHub Docs — GitHub event types (PushEvent payload) — https://docs.github.com/en/rest/using-the-rest-api/github-event-types

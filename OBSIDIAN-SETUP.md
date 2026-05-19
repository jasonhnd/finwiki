# Obsidian setup for FinWiki

This file documents recommended Obsidian configuration for `FinWiki` as a
standalone vault copied from the source workspace public knowledge base wiki.

Related: [[INDEX|FinWiki index]] · [[SCHEMA|frontmatter schema]] · [[log|activity log]]

## Open links

- Open vault by path: [Open FinWiki](obsidian://open?path=FinWiki)
- Open vault by name after it has been registered once in Obsidian: [Open FinWiki vault](obsidian://open?vault=FinWiki)
- Local folder path:
  `FinWiki`

## Link convention

FinWiki uses Obsidian wikilinks relative to the vault root:

```md
[[fintech/mica-overview]]
[[JapanFG/INDEX]]
[[exchanges/jvcea-self-regulatory-overview|JVCEA]]
```

Do not use the original source workspace subtree prefix in new notes:

```md
\[\[wiki/fintech/mica-overview]]
```

> **Auto-applied by v1.8.1**: if `.obsidian/graph.json` existed when
> `setup-public-knowledge-base.sh` ran (auto-invoked by SessionStart hook), a wiki
> color group was added automatically. A backup was saved to
> `.obsidian/graph.json.lifeos-backup-<timestamp>` before any edit.
> If you don't use Obsidian's graph view, this is a no-op.

## Recommended plugin set

| Plugin | Why | Source |
|---|---|---|
| **Dataview** | Query frontmatter: list all entries where `confidence` is `unlikely` or `possible`, sort by `last_tended`, group by `status`. The single biggest UX win for the wiki. | Community Plugins → "Dataview" |
| **Graph Analysis** | Find hub entries (high in-degree) and orphan entries (zero links). Use to plan link-density improvements. | Community Plugins → "Graph Analysis" |
| **Templater** | Spawn new wiki entries from `.templates/wiki-entry-template.md` with one keystroke (vs hand-typing frontmatter every time). | Community Plugins → "Templater" |
| Excalidraw (optional) | Hand-drawn diagrams attached to wiki entries. Use when text alone won't carry the model. | Community Plugins → "Excalidraw" |

Install via Settings → Community Plugins → Browse → search the name.

## What the auto-applied graph color group does

The patched `.obsidian/graph.json` now has an entry like:

```jsonc
{
  "query": "path:fintech/ OR path:exchanges/ OR path:JapanFG/",
  "color": { "a": 1, "rgb": 4737228 }
}
```

Result: selected FinWiki domains show in blue (#4842cc) in graph view.
To customize the color, edit the `rgb` value (decimal RGB integer; pick any
color you prefer) and reload the graph view.

To revert: restore the backup file `.obsidian/graph.json.lifeos-backup-*`.

## Useful Dataview queries (paste into any note)

```dataview
TABLE confidence, last_tended, status
FROM ""
WHERE (confidence = "unlikely" OR confidence = "possible") AND status = "candidate"
SORT last_tended DESC
```

```dataview
TABLE length(file.outlinks) as outlinks, length(file.inlinks) as inlinks
FROM ""
WHERE length(file.outlinks) = 0 AND length(file.inlinks) = 0
```
(orphan entries — no incoming or outgoing wikilinks; candidates for either
better integration or deprecation)

```dataview
TABLE last_tended, review_by
FROM ""
WHERE review_by != null AND date(review_by) <= date(today)
SORT review_by ASC
```
(entries flagged for review — `wiki-decay` re-surfaces these on next run.
Empty result = nothing currently due.)

```dataview
TABLE last_tended
FROM ""
WHERE date(today) - date(last_tended) > dur(180 days)
SORT last_tended ASC
```
(stale entries — not actively reviewed in 180+ days; consider re-tending or
deprecating.)

## Template usage

The `.templates/wiki-entry-template.md` file contains a SCHEMA-compliant
frontmatter stub + standard H2 sections. With Templater installed, bind it to
a hotkey (Settings → Templater → Hotkey) and inserting a new wiki entry
becomes one keystroke.

## Audit your link graph

Run a link audit after large edits. FinWiki currently uses Obsidian
wikilinks, so the key check is whether `[[domain/slug]]` resolves to an
existing `domain/slug.md` or `domain/slug/INDEX.md`.

For a standalone link-only pass:

- Slash command: `/wiki-link-audit`
- Natural language: "wiki link audit" / "查 wiki 哪些链接断了"

Suggested cadence: monthly, or after any large import / reorganization.

## What this doesn't do

- Doesn't reorganize your existing FinWiki tree
- Doesn't enforce wikilinks (you can keep using markdown `[name](path.md)`
  if you prefer; Obsidian renders both)
- Doesn't change your `.obsidian/app.json` or `.obsidian/appearance.json`
- Doesn't install plugins for you (Obsidian community plugins are user-
  consent only; you decide what runs in your vault)

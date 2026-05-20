# Obsidian Setup for FinWiki

This file documents generic Obsidian settings for reading FinWiki as a local vault. It intentionally avoids machine-specific paths, account names, and private sync locations.

Related: [[INDEX|FinWiki index]] · [[SCHEMA|frontmatter schema]]

## Open Links

- Open by vault name after registering the folder once in Obsidian: [Open FinWiki vault](obsidian://open?vault=FinWiki)
- If your local vault name is different, update only your local Obsidian settings. Do not commit personal filesystem paths.

## Link Convention

FinWiki uses Obsidian wikilinks relative to the vault root:

```md
[[fintech/mica-overview]]
[[JapanFG/INDEX]]
[[exchanges/jvcea-self-regulatory-overview|JVCEA]]
```

Do not use local filesystem paths or private source-tree prefixes in public notes.

## Recommended Plugin Set

| Plugin | Why | Source |
|---|---|---|
| Dataview | Query frontmatter, review status, source coverage, and stale entries. | Community Plugins |
| Graph Analysis | Find hub entries and orphan entries for link maintenance. | Community Plugins |
| Templater | Create new wiki entries from `.templates/wiki-entry-template.md`. | Community Plugins |
| Excalidraw | Optional visual diagrams attached to wiki entries. | Community Plugins |

Install plugins from Obsidian Settings -> Community Plugins. Plugin installation is a local user choice and should not be required for reading the repository on GitHub.

## Useful Dataview Queries

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

```dataview
TABLE last_tended, review_by
FROM ""
WHERE review_by != null AND date(review_by) <= date(today)
SORT review_by ASC
```

## Template Usage

The `.templates/wiki-entry-template.md` file contains a schema-compatible frontmatter stub and standard H2 sections. With Templater installed, bind it to a hotkey and insert the template when creating a new entry.

## Public-Surface Reminder

Before committing Obsidian-related files:

- Do not include local paths.
- Do not include vault paths containing personal names or email addresses.
- Do not include private sync-provider metadata.
- Do not include `.obsidian/` configuration unless it has been reviewed for local identifiers.

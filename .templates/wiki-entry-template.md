---
title: "<one-line title; max 80 chars>"
aliases: []                # alternative names — Obsidian uses these for `[[wikilink]]` resolution
domain: <domain-from-existing-list>
created: <%+ tp.date.now("YYYY-MM-DD") %>
last_updated: <%+ tp.date.now("YYYY-MM-DD") %>
last_tended: <%+ tp.date.now("YYYY-MM-DD") %>   # last time you actively reviewed this entry (vs cosmetic edit)
review_by: <%+ tp.date.now("YYYY-MM-DD") %>     # when wiki-decay should re-surface this entry; default = +180d
confidence: possible       # enum: impossible | unlikely | possible | likely | certain  (was 0.0–1.0 float in v1.7)
tags: [<domain>, <topic-tag>]
status: candidate          # candidate | confirmed | deprecated
sources: []                # plural array — public URLs, public documents, or public-source descriptions only
---

# <title>

## TL;DR
<2-3 sentences>

## Wiki route
This entry sits under [[<domain>/INDEX|<domain>]]. Read it with [[<peer-entry>|<peer label>]] for adjacent context and [[<system-or-regulatory-entry>|<system label>]] for the broader system boundary.

## Key facts
<!--
Each fact may be tagged with a provenance marker:
  ^[extracted]  — quoted/paraphrased verbatim from a sources[] entry
  ^[inferred]   — your synthesis, not directly stated in any source
  ^[ambiguous]  — sources disagree or evidence is mixed
Untagged claims default to ^[extracted].
-->
- <fact-1> ^[extracted]
- <fact-2> ^[inferred]

## Mechanism / How it works
<paragraph>

## Origin & evolution
<paragraph>

## Counterpoints
<2-4 bullets — what's the opposing view? Even if "none found", note that.>

## Open questions
<2-4 bullets — what this entry can't answer>

## Related
- `[[<other-wiki-entry>]]`
- `[[<other-wiki-entry>]]`

## Sources
<!-- Mirror the sources[] frontmatter array as a human-readable list. -->
- <full URL or citation>

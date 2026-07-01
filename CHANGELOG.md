# CHANGELOG

## Maintenance Principles

### 日本語

- 本ファイルは `README.md` と同様に、日本語と英語を同時に維持します。
- 説明と作業記録は、日本語を先に置き、英語を後に置きます。
- 重要な作業ごとに、短い要約だけでなく詳細なタイムラインを残します。
- 各記録には、可能な限り JST 時刻、背景、影響範囲、主要ファイルまたはディレクトリ、実行手順、検証結果、残タスクを含めます。
- 本リポジトリ本文には公開インターネット情報、公的資料、公開開示、または公開情報に基づく分析のみを残します。

### English

- This file, like `README.md`, is maintained in Japanese and English together.
- Explanatory text and work records put Japanese first and English second.
- Important work must leave a detailed timeline rather than only a short summary.
- Each record should include JST time, background, scope, main files or directories, execution steps, validation results, and follow-up items whenever possible.
- Body content in this repository is limited to public internet information, official materials, public disclosures, or analysis based on public sources.

## 2026-07-01 - i18n bilingual site cutover (#126)

### 日本語

- **2026-07-01 18:57:08 JST / 背景:** Issue #126 に従い、公開サイトの i18n model を日本語 source + English mirror の bilingual 構成へ移行する。退役 locale の mirror corpus と route family は削除し、旧 locale URL には redirect や stub を置かない。
- **範囲:** 退役 locale mirror corpus の削除、`site/src/i18n` の language source-of-truth、translation scripts、i18n status / stale classifier / link remap / release tooling、Astro route / layout / switcher、root homepage、README / INDEX / CHANGELOG / AI discovery surfaces。
- **非対象:** root Japanese source corpus と existing Japanese / English mirror corpus は編集しない。design tokens、`docs/**`、`CONTRIBUTING.md` も変更しない。
- **実行手順:** i18n architecture と ADR-010 を確認し、退役 mirror corpus を `git rm` で削除。`langCodes`、`languages`、`Lang`、domain / group labels、root editorial config を ja/en に縮約。translation pipeline と post-build wikilink localization を English mirror 専用へ変更。root homepage と README / CHANGELOG を bilingual へ更新し、generator を ja/en 前提へ修正。
- **検証結果:** `bun tools/release.ts --check --strict`、`bun run i18n:status`、`bun run docs:audit`、`bun run wiki:audit:ci`、`cd site && bun install && bun run build`、`bun run html:check`、`git diff --check` はすべて PASS。build output は `/ja/` と `/en/` の route family のみを生成し、retired locale directory / route residue scan も PASS。
- **残タスク:** PR を `pre` 向けに開き、review と merge を待つ。self-merge / self-close はしない。

### English

- **2026-07-01 18:57:08 JST / Background:** Per issue #126, the public site i18n model moves to bilingual Japanese source plus English mirror. The retired locale mirror corpus and route family are removed; old-locale URLs receive no redirect or stub.
- **Scope:** Delete the retired mirror corpus, update the `site/src/i18n` language source of truth, translation scripts, i18n status / stale classifier / link remap / release tooling, Astro route / layout / switcher behavior, the root homepage, and README / INDEX / CHANGELOG / AI discovery surfaces.
- **Out of scope:** The root Japanese source corpus and existing Japanese / English mirror corpus are not edited. Design tokens, `docs/**`, and `CONTRIBUTING.md` are not changed.
- **Steps:** Checked the i18n architecture and ADR-010, removed the retired mirror corpus with `git rm`, reduced `langCodes`, `languages`, `Lang`, domain / group labels, and root editorial config to ja/en, made the translation pipeline and post-build wikilink localization English-mirror-only, updated the root homepage and README / CHANGELOG to bilingual, and adjusted generators for ja/en.
- **Validation:** `bun tools/release.ts --check --strict`, `bun run i18n:status`, `bun run docs:audit`, `bun run wiki:audit:ci`, `cd site && bun install && bun run build`, `bun run html:check`, and `git diff --check` all passed. The build output generated only the `/ja/` and `/en/` route families, and the retired-locale directory / route residue scan passed.
- **Follow-up:** Open the PR into `pre` and wait for review and merge. Do not self-merge or self-close.

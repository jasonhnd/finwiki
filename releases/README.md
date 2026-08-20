# リリース状態台帳 / Release State Registry / 发布状态台账

- [v2026.08.20-2](./v2026.08.20-2.md) — bilingual README / CHANGELOG / releases (#316)
- [v2026.08.20](./v2026.08.20.md) — reading-path typesetting (#300–#312)
- [v2026.08.16](./v2026.08.16.md) — entity deepening batch 03 (#296)
- [v2026.08.15](./v2026.08.15.md) — entity deepening batch 02 (#292)
- [v2026.08.14-4](./v2026.08.14-4.md) — compact human-site read surface (#287)
- [v2026.08.14-3](./v2026.08.14-3.md) — freshness calibration + entity batch 01 + Horizon specs (#278–#281)
- [v2026.08.14-2](./v2026.08.14-2.md) — weekly freshness overdue sweep (#277)
- [v2026.08.14](./v2026.08.14.md) — Astro dependency highs + three-circles freshness recheck (#276, #277)
- [v2026.07.30-2](./v2026.07.30-2.md) — table provenance batches 10–14 + opinions quarantine (#240–#244, #193)

## 日本語

この台帳は、`releases/v*.md`、Git tag、GitHub Release の関係を明示します。release note の basename と tag / GitHub Release の tag は同じ version を使います。

### 公開済み

- 下記の staging record を除く既存 `releases/v*.md` は、同名の Git tag と GitHub Release に一対一で対応します。
- `v2026.05.29` は GitHub Release body から repository note を復元し、tag / Release は変更していません。
- `v2026.07.28-9` は、2026-07-28 の `pre → main` catch-up promotion と同じ main merge commit を target にする統合 release です。
- `v2026.07.29` は、Issue #195 の entry-discovery build graph と cache invalidation 修復を公開する release です。
- `v2026.07.29-2` は、Issue #217 の fact-freshness event inference 精度改善を公開する release です。
- `v2026.07.29-3` は、Issue #218 の反復事実整合性監査の精度改善と公開事実の校正を公開する release です。
- `v2026.07.29-4` は、Issue #220 の agent infrastructure 3 entry の candidate lifecycle 再検証と active status 更新を公開する release です。
- `v2026.07.29-5` は、Issue #219 の table-level provenance proximity 校正、complete JSON output、residual content routing を公開する release です。
- `v2026.07.29-6` は、Issue #221 の 17 low-marker warnings を公式一次資料で校正して 15 source entries / ja / en mirrors を同期し、Issue #247 の URL-bearing provenance marker 翻訳保護を修復する release です。
- `v2026.07.29-7` は、Issue #222 の 13 low-marker warnings を公式一次資料で校正し、11 target entries と Toyota Financial Services duplicate route、ja / en mirrors を同期する release です。
- `v2026.07.29-8` は、Issue #223 の 11 low-marker warnings を公式一次資料で校正し、決済事業者・BNPL・PSP・前払式電子マネーの 9 target entries と ja / en mirrors を同期する release です。
- `v2026.07.29-9` は、Issue #224 の残存 15 low-marker warnings を公式一次資料で校正し、地域銀行 6、retail matrix 1、証券会社 6 の合計 13 target entries と ja / en mirrors を同期する release です。
- `v2026.07.29-10` は、Issue #231 の table-related warnings 124 件を 6 domain / 73 source entries で公開一次資料と正式仕様へ校正し、ja / en 146 mirrors を同期する release です。
- `v2026.07.29-11` は、Issue #232 の table-related warnings 168 件を asset manager、financial conglomerate、manufacturer finance、megabank、trading-company finance、trust bank の 89 source entries で公開一次資料へ校正し、ja / en 178 mirrors を同期する release です。
- `v2026.07.29-12` は、Issue #233 の table-related warnings 146 件を banking / cooperative-banks の 69 source entries で公開一次資料へ校正し、法人・法令・数量級の誤りを修正して ja / en 138 mirrors を同期する release です。
- `v2026.07.29-13` は、Issue #234 の table-related warnings 114 件を business / corporate-strategy / retail の 32 source entries で公開一次資料へ校正し、取引状態・所有境界・税務条件を修正して ja / en 64 mirrors を同期する release です。
- `v2026.07.29-14` は、Issue #235 の table-related warnings 132 件を card issuer、consumer finance、leasing、loyalty の 64 source entries で公開一次資料へ校正し、法人・株主・沿革・登録・point / accounting boundary を修正して ja / en 128 mirrors を同期する release です。
- `v2026.07.29-15` は、Issue #236 の table-related warnings 196 件を derivatives / structured-finance の 54 source entries で公開一次資料へ校正し、contract specification、benchmark fallback、JHF MBS、vehicle / tax boundary を修正して ja / en 108 mirrors を同期する release です。
- `v2026.07.29-16` は、Issue #237 の table-related warnings 123 件を exchanges の 81 source entries で公開一次資料へ校正して 0 件へ減らし、運営法人、規制 status、service lifecycle、incident と dynamic market / custody comparison の境界を修正して ja / en 162 mirrors を同期する release です。
- `v2026.07.29-17` は、Issue #238 の table-related warnings 233 件を finance / real-estate-finance の 49 source entries で公開一次資料へ校正して 0 件へ減らし、法定 threshold、model assumption、J-REIT の統計口径、issuer-specific metric を修正して ja / en 98 mirrors を同期する release です。
- `v2026.07.30` は、Issue #239 の table-related warnings 162 件を fintech の 65 source entries で公開一次資料へ校正して 0 件へ減らし、法令・licence・pilot・issuer / reserve・redemption・market metric の境界を修正して ja / en 130 mirrors を同期する release です。
- `v2026.08.20` は、Issue #300〜#312 の人間向け読者経路（ホーム、領域、条目、領域総表、全項目、ルート、検索）の組版を `pre` から `main` へ公開する release です。
- `v2026.08.20-2` は、Issue #316 で README / CHANGELOG / releases から中文を外し、公開文書を日英だけにする release です。

### 個別には公開しない staging record

次の note は `pre` で作成された作業単位の詳細記録です。個別 tag / GitHub Release は作成せず、`v2026.07.28-9` に包含します。

- `v2026.05.25`、`v2026.05.25-2`、`v2026.05.25-3`、`v2026.05.25-4`、`v2026.05.25-5`
- `v2026.06.22-1`
- `v2026.07.27`、`v2026.07.27-1`、`v2026.07.27-2`、`v2026.07.27-3`、`v2026.07.27-4`、`v2026.07.27-5`、`v2026.07.27-6`
- `v2026.07.28`、`v2026.07.28-1`、`v2026.07.28-2`、`v2026.07.28-3`、`v2026.07.28-4`、`v2026.07.28-5`、`v2026.07.28-6`、`v2026.07.28-7`、`v2026.07.28-8`

### 詳細履歴

2026-07-01 の i18n cutover で root `CHANGELOG.md` から外れた 6,127 行の旧詳細 timeline は、immutable Git history の [cutover 直前 CHANGELOG](https://github.com/jasonhnd/finwiki/blob/528c39e81be2faf3e7d17c1197da9a5569985e51/CHANGELOG.md) に保存されています。現行 CHANGELOG はこの archive link と cutover 後の詳細記録を維持します。

## English

This registry makes the relationship among `releases/v*.md`, Git tags, and GitHub Releases explicit. A published note uses the same version for its basename, Git tag, and GitHub Release tag.

### Published

- Every existing `releases/v*.md` except the staging records listed below maps one-to-one to a same-named Git tag and GitHub Release.
- The repository note for `v2026.05.29` was restored from the existing GitHub Release body; its tag and Release were not changed.
- `v2026.07.28-9` is the consolidated Release targeting the same main merge commit as the 2026-07-28 `pre → main` catch-up promotion.
- `v2026.07.29` publishes the entry-discovery build graph and cache-invalidation repair from Issue #195.
- `v2026.07.29-2` publishes the fact-freshness event-inference precision repair from Issue #217.
- `v2026.07.29-3` publishes the repeated factual-consistency audit calibration and public-fact corrections from Issue #218.
- `v2026.07.29-4` publishes the candidate-lifecycle recheck and active-status updates for three agent-infrastructure entries from Issue #220.
- `v2026.07.29-5` publishes Issue #219's table-level provenance-proximity calibration, complete JSON output, and residual content routing.
- `v2026.07.29-6` publishes Issue #221's official-primary-source corrections for 17 low-marker warnings across 15 source entries and their ja/en mirrors, plus Issue #247's translation-protection fix for URL-bearing provenance markers.
- `v2026.07.29-7` publishes Issue #222's official-primary-source corrections for 13 low-marker warnings, synchronizing 11 target entries, the Toyota Financial Services duplicate route, and their ja/en mirrors.
- `v2026.07.29-8` publishes Issue #223's official-primary-source corrections for 11 low-marker warnings, synchronizing nine payment-company, BNPL, PSP, and prepaid-e-money target entries and their ja/en mirrors.
- `v2026.07.29-9` publishes Issue #224's official-primary-source corrections for the final 15 low-marker warnings, synchronizing six regional-bank entries, one retail matrix, six securities-firm entries, and their ja/en mirrors.
- `v2026.07.29-10` publishes Issue #231's primary-source and formal-specification corrections for 124 table-related warnings across six domains and 73 source entries, synchronizing 146 ja/en mirrors.
- `v2026.07.29-11` publishes Issue #232's public-primary-source corrections for 168 table-related warnings across 89 source entries in asset managers, financial conglomerates, manufacturer finance, megabanks, trading-company finance, and trust banks, synchronizing 178 ja/en mirrors.
- `v2026.07.29-12` publishes Issue #233's public-primary-source corrections for 146 table-related warnings across 69 banking / cooperative-banks source entries, correcting entity, statute, and order-of-magnitude errors and synchronizing 138 ja/en mirrors.
- `v2026.07.29-13` publishes Issue #234's public-primary-source corrections for 114 table-related warnings across 32 business / corporate-strategy / retail source entries, correcting transaction status, ownership boundaries, and tax conditions while synchronizing 64 ja/en mirrors.
- `v2026.07.29-14` publishes Issue #235's public-primary-source corrections for 132 table-related warnings across 64 card-issuer, consumer-finance, leasing, and loyalty source entries, correcting entity, shareholder, chronology, registration, and point / accounting boundaries while synchronizing 128 ja/en mirrors.
- `v2026.07.29-15` publishes Issue #236's public-primary-source corrections for 196 table-related warnings across 54 derivatives / structured-finance source entries, correcting contract specifications, benchmark fallbacks, JHF MBS mechanics, and vehicle / tax boundaries while synchronizing 108 ja/en mirrors.
- `v2026.07.29-16` publishes Issue #237's public-primary-source corrections that reduce 123 table-related warnings to zero across 81 exchange source entries, correcting operating-entity, regulatory-status, service-lifecycle, incident, and dynamic market / custody-comparison boundaries while synchronizing 162 ja/en mirrors.
- `v2026.07.29-17` publishes Issue #238's public-primary-source corrections that reduce 233 table-related warnings to zero across 49 finance / real-estate-finance source entries, correcting statutory thresholds, model assumptions, J-REIT statistical denominators, and issuer-specific metrics while synchronizing 98 ja/en mirrors.
- `v2026.07.30` publishes Issue #239's public-primary-source corrections that reduce 162 table-related warnings to zero across 65 fintech source entries, correcting boundaries among statutes, licences, pilots, issuer and reserve structures, redemption, and market metrics while synchronizing 130 ja/en mirrors.
- `v2026.08.20` publishes the human-site reading-path typesetting from Issues #300–#312, promoting home, domain, entry, domain list, browse, root, and search from `pre` to `main`.
- `v2026.08.20-2` publishes Issue #316: drop Chinese from README, CHANGELOG, and releases so public docs match the ja/en human site.

### Staging records not published individually

The following notes are detailed work-unit records created on `pre`. They intentionally receive no individual tag or GitHub Release and are incorporated into `v2026.07.28-9`.

- `v2026.05.25`, `v2026.05.25-2`, `v2026.05.25-3`, `v2026.05.25-4`, `v2026.05.25-5`
- `v2026.06.22-1`
- `v2026.07.27`, `v2026.07.27-1`, `v2026.07.27-2`, `v2026.07.27-3`, `v2026.07.27-4`, `v2026.07.27-5`, `v2026.07.27-6`
- `v2026.07.28`, `v2026.07.28-1`, `v2026.07.28-2`, `v2026.07.28-3`, `v2026.07.28-4`, `v2026.07.28-5`, `v2026.07.28-6`, `v2026.07.28-7`, `v2026.07.28-8`

### Detailed history

The 6,127-line detailed timeline removed from the root `CHANGELOG.md` during the 2026-07-01 i18n cutover remains preserved in immutable Git history at the [pre-cutover CHANGELOG](https://github.com/jasonhnd/finwiki/blob/528c39e81be2faf3e7d17c1197da9a5569985e51/CHANGELOG.md). The current CHANGELOG retains this archive link and detailed records from the cutover forward.
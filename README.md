# FinWiki 📚💴🧭

## 日本語 🇯🇵

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、公開企業・公開人物の戦略ケースを扱う Markdown ナレッジベースです。主なリンク形式は Obsidian の `[[wikilink]]` で、全体入口は [INDEX.md](INDEX.md) です。

Homepage は人間が入口を理解するために整えていますが、wiki 本文 corpus は人間が順番に通読するためではなく、AI が読み取り、検索し、引用し、接続するための knowledge graph として設計しています。

このリポジトリは公開前提の知識ベースです。記載対象は、公開ウェブ情報、公的資料、企業開示、規制当局資料、公開市場情報、またはそれらをもとにした公開可能な整理に限定します。個人情報、ローカル環境情報、非公開会話、顧客・相手方情報、内部案件メモは置きません。

公開サイトの現行本番は GitHub Pages で配信していますが、Vercel 影子デプロイ用の root 設定も用意しています: [finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 📊 数字で見る FinWiki

| 指標 | 現在値 | 集計口径 |
| --- | ---: | --- |
| Markdown files | 1566 | `.git` を除外し、release notes / control docs / templates を含む repository-wide `.md` files |
| Topical domains | 40 | `INDEX.md` domain map の主要テーマ領域 |
| Link-audited entries | 1485 | `tools/wiki_link_audit.ts` が確認する public wiki entries |
| Unresolved link issues | 0 | body route / peer / system link audit と dead wikilink target audit の未解決 issue |
| Text volume | 約1107万字 | Markdown 全体の空白除外 UTF-8 文字数（約 11,065,281） |
| Word-like tokens | 約178万 | English / CJK mixed corpus の近似 token count |

> 集計基準: 2026-06-15 JST 時点の current repository snapshot。公開サイトへの反映は `origin/main` push と現行本番配信後に確認します。Vercel への DNS cutover は shadow deployment 検証後に別途行います。

> i18n / 語彙品質 / CI 品質: 2026-06-03 JST の ja 翻訳層完了後、`site/src/content/i18n` は ja 1380 / zh 1380 / en 1380 ファイルです。2026-06-01 JST の zh/en GPT 翻訳完了後、v2026.06.01-7 では 10 並列 GPT/Codex worker による日英中語彙監査・修復・最終 polish を実施し、大学学部水準を超える専門語彙へ寄せました。v2026.06.02 では Astro build 後の duplicate HTML id gate を追加し、`site/dist` 4147 pages を checked=4147 / duplicate_ids=0 で確認しました。GitHub Actions は `actions/checkout@v6`、`actions/upload-pages-artifact@v5`、`actions/deploy-pages@v5` へ更新し、Node.js 24 runtime 系へ寄せています。v2026.06.02-2 では deploy step に限定して Node deprecation notice を抑制し、上流 action 由来の `punycode` warning も公開ログから除去します。v2026.06.02-3 では残存していた `fidelity: needs_review` 54 件を 10 並列 GPT/Codex worker と手動検証で 0 件まで解消し、QZX placeholder 破損と mojibake 残差を修復しました。v2026.06.02-4 では wikilink target 実在性 gate を追加し、agent の過大な `*/INDEX` 置換を戻したうえで 144 件の明示 alias と 7 件の非金融背景リンク plain text 化により entries_checked=1411 / entries_with_issues=0 / dead_wikilink_references=0 / dead_wikilink_targets=0 を確認しました。v2026.06.02-5 では Vercel shadow deployment 用の `vercel.json`、`bun tools/vercel_build.ts`、`tools/assemble_static_publish.ts` を追加し、Astro HTML と raw Markdown / AI discovery surface を `_vercel_public` に同時出力できるようにしました。v2026.06.02-6 では Pagefind による静的全文検索を追加し、build 後に `/pagefind/*` を生成して三語の現在言語別検索を提供します。v2026.06.02-7 では root release / discovery / audit / publish tooling を Bun + TypeScript に統一し、GitHub Pages と Vercel が同じ Bun pipeline を使います。v2026.06.02-8 では静的サイト構造 Phase 1 として root domain corpus 直読、canonical route helper、domain landing、build-time wikilink localization を導入し、`site/src/content/entries` mirror / sync step を build input から外しました。v2026.06.03 では ja 機械翻訳 layer 1380 件を追加し、`prep-parallel --langs ja` は 0 jobs、`fidelity: needs_review` は 0 件、Astro build は 4219 pages、duplicate_ids=0 で PASS しました。

> 日本語表示層: v2026.06.03-3 では `/ja/` を日語ユーザー目線で見直し、header / footer / root page / browse / domain / entry chrome、confidence 表示、title fallback、build 後 wikilink 表示ラベルを日本語化しました。`localize-wikilinks` は ja HTML の `data-wl` label を ja i18n title へ置換し、build log では ja-labels=17603 を確認しています。

> package metadata: v2026.06.03-4 では root `package.json` に version、description、repository、bugs、homepage などの公開メタデータを追加し、npm / GitHub 側の project metadata と repository entry を揃えました。

> 開発文書・生成面 drift 監査: 2026-06-08 JST では `docs/` 全体系、root control docs、source `canonical_anchor`、AI discovery/API surface を再監査しました。`documentation-drift-audit.md` を追加し、JapanFG split design を実際の 17 新領域 + 40 domains + `JapanFG/INDEX` umbrella に同期、旧 `JapanFG/<entity>` canonical_anchor を現行 entity path へ更新、`api/entries/` の旧 slug JSON を生成時に清掃するようにし、`docs/` 相対リンクを AI surface の markdown_links から除外しました。Deployment / incident / maintenance runbook も local build、Vercel shadow、GitHub Actions watch、public URL spot-check まで拡張しました。

> AI タスク入口: v2026.06.03-5 では手動管理の `llms-tasks.txt` を現行スナップショットへ同期しました。entry の改名・再編で生じた 10 件の死リンク（money-market / derivatives / payments / policy-finance / securities / systems）を現存 entry へ再マッピングし、Snapshot 行を `1,472 files / 1,411 link-audited entries / 23 domains / ~9.99M non-space chars`（2026-06-03 JST）へ更新しました。`.txt` は `wiki:audit` の対象外で死リンクが潜在していたため、160 件の link target を実在性照合しました。本 release で release notes を追加したことで corpus は 1,471 から 1,472 files になり、discovery surface を再生成しました。fresh clone は fs mtime を一律 reset するため、commit 済み `sitemap.xml` の lastmod から各ページの mtime を復元してから再生成し、既存 1,469 ページの lastmod を保持しています。`bun tools/release.ts --check --strict` は link audit PASS（entries=1411 / issues=0）と counts in sync を確認しています。

> 内容整理: v2026.06.03-6 では並列 subagent で全領域を棚卸しし、内容品質を保ったまま整理しました。2026-05-25 の拡充以降 stale だった 8 領域 INDEX（corporate-strategy / loyalty / money-market / manufacturing / retail / governance / trade / security）を実際の entry へ同期（漏れていた entry の追加、`single entry` 等の古い記述修正、stale backlog 整理）。Bun 移行後に残っていた `tools/*.py` 参照を `SCHEMA.md` / `INDEX.md` / convention / proposal で `.ts` へ修正、`HOW-TO-NAVIGATE.md` の count drift（1465+/24+ → 1,400+/23）を是正、孤立していた 5 件の convention/proposal 文書を `INDEX.md` Control Documents に収録、security INDEX の Status 列ラベルを confidence へ修正しました。Lawson TOB 価格は公開開示に基づき ¥4,952 → ¥10,360 へ統一しました（web 照合）。link audit は entries=1411 / issues=0 で PASS、wiki 本文の死リンクは 0 のままです。

> 構造整理: v2026.06.03-7 では並列 subagent で構造系の整理 B/C/D を落地しました。(B) mislabel だった governance（実体は非営利・公益法人）と manufacturing（実体は manufacturer-finance）の INDEX に scope/disambiguation を追加（corporate governance は finance/securities/exchanges、entity ページは JapanFG、ABS は structured-finance へ案内）。(C) 631 件が flat だった JapanFG に frontmatter tags 駆動で 9 件の機構類型別 sub-INDEX（megabanks-and-fg / regional-banks / cooperative-finance / trust / insurance / securities-and-asset-management / payments-cards-leasing-finance / foreign-institutions / regulators-sro-policy、計 609 entry）を新設し、`JapanFG/INDEX` に類型別導航ブロックを追加。file は一切移動せず（Option A）既存リンク・URL を保全。(D) canonical_anchor proposal の Phase 0 を落地: `canonical_anchor` を SCHEMA の optional field と canonical key order に追加、Saison / Toyota Financial Services の 2 mirror pair に pilot 設定、proposal を status: active へ更新（Phase 1 の audit tooling は後続）。link audit は entries=1420 / issues=0 で PASS（新 sub-INDEX の wikilink 全 resolve、死リンク 0）。

> INDEX 件数校正: v2026.06.05-4 では root `INDEX.md` の reader-facing domain table を disk 実数へ同期しました。13 テーマ領域（exchanges / fintech / systems / agent-economy / banking / policy-finance / insurance / finance / payments / securities / derivatives / real-estate-finance / structured-finance）が各 +1 で表示されていたため、non-INDEX `.md` file 数へ補正し、冒頭 snapshot も link-audited entries 1485 へ更新しました。wiki 本文・site 設定・entry 数は不変。v2026.06.05-3 の GitHub Actions は `Deploy FinWiki | success`（HEAD `2a88e6c9`）を確認済み。検証: domain_count_mismatches=0、`--check --strict` EXIT=0、`dead=0 / drift=0 / issues=0 / domains=40`。

> 開発ドキュメントの監査: 2026-06-08 JST では `docs/` ディレクトリ内の内部文書およびルート制御文書の Markdown リンク監査ツール `tools/docs_link_audit.ts` を追加しました。これにより、開発者向けドキュメント間の整合性を自動的に維持できるようになりました。

> .txt 公開入口の監査: 2026-06-08 JST では AI 発見ファイル（llms.txt, llms-full.txt, llms-tasks.txt）のルート監査ツール `tools/txt_route_audit.ts` を追加しました。これにより、AI エージェントが利用するテキストベースの発見面において、リンク切れや古いパスを機械的に検出できるようになりました。初回監査で 450 件以上の不整合を検出し、今後の修复フェーズの基盤を構築しました。

> P2 深化（第 1 批）: v2026.06.05-3 では JapanFG 拆分域の <250 語存根 110 件のうち **58 件**を実体ページへ深化しました（`regional-banks` 48 + `cooperative-banks` 10）。各行に免許種別/監管定位（銀行法・信用金庫法/FSA・財務局/地銀協・信金中金）、業務モデル、group/system 文脈、4+ core-body wikilink を追加。**無捏造を厳守**——具体数値（設立年/証券コード/親会社等）は web 照合できたものだけ記載、照合不能は agent が削除。58 件すべて split取り残しの旧 `[[JapanFG/INDEX]]` route を新域 INDEX へ修正。並列 subagent（regional A/B/C の 3 agent + 前 batch の cooperative）。残り ~51 件（11 域）は backlog（P2 継続）。検証: `dead=0 / drift=0 / issues=0`、`--check --strict` EXIT=0。内容は subagent 生成ゆえ事実精度は抽查推奨（ADR-006、spot-check 済み）。

> P4 i18n: v2026.06.05-2 では v12（43）+ P3（12）の計 55 content entry に ja/zh/en 翻訳 mirror **165 file** を生成しました。**鍵不要**——v05-1 で「`translate.mjs` が `ANTHROPIC_API_KEY` 必要で未実行」としたのは誤りで、あの script は standalone で別の Haiku を API 呼びするから鍵が要るだけ。本 release は subagent（Claude 自身）が直接翻訳（8 並列・domain 別）。mirror は pipeline 形式を再現（`source_hash=sha256(body).slice(0,16)`、`.passthrough()` schema、`status: machine`）。i18n は link audit 外のため、全 165 mirror の `[[link]]`/数値が source と byte 一致を検証（mismatch=0）。17 新ドメイン INDEX は mirror 不要（landing は config 生成）。検証: link_mismatches=0、`--check --strict` EXIT=0（corpus 不変）、最終は CI Astro build。

> P3 内容拡充: v2026.06.05-1 では roadmap P3 の最薄 2 領域を並列 subagent で拡充しました。`non-profit` 6→12（社会福祉 / 学校 / 医療 / 宗教法人・公益法人会計基準・助成財団）、`trade` 6→12（NEXI 貿易保険・通関関税原産地・FTA/EPA/RCEP・電子提単 MLETR・フォーフェイティング/国際ファクタリング・SCF）。計 +12 公開情報 entry。検証: `--check --strict` EXIT=0、entries 1473→1485 / issues=0 / dead=0 / canonical_drift=0、md=1559 / domains=40 / counts in sync。**P4（i18n 翻訳）は未完**——翻訳パイプライン（`site/scripts/translate.mjs`）は `ANTHROPIC_API_KEY` が必要で現環境に未設定のため未実行。

> JapanFG 分割 後始末: v2026.06.04-5 では v04-4 の「次の作業」2 件を消化しました。`site/src/lib/siteIndex.mjs` の `DOMAIN_TITLES` に 17 ドメインの ja/zh/en 表示名を追加（site が slug 表示から正式名へ）、`tools/wiki_link_audit.ts` の domain route map に 17 ドメインを追加（JapanFG の旧 `legal-financial-licenses/INDEX` 参照も `financial-licenses/INDEX` へ修正）。corpus / entity 構造は不変。検証: `--check --strict` EXIT=0、entries=1473 / issues=0 / dead=0 / canonical_drift=0、domains=40、`siteIndex.mjs` import OK。

> JapanFG 分割（23→40 領域）: v2026.06.04-4 では巨大で平坦だった `JapanFG/`（約 620 entity）を **17 個の機関類型別トップレベルドメインへ物理分割**しました（megabanks / regional-banks / cooperative-banks / trust-banks / life-insurers / non-life-insurers / securities-firms / asset-managers / payment-firms / card-issuers / leasing-firms / consumer-finance / trading-company-finance / financial-conglomerates / foreign-financial-institutions / financial-regulators / financial-licenses）。628 entity/license を移動、約 53,600 件の `[[JapanFG/…]]` wikilink を新ドメインへ書換、i18n ミラー 1,887（ja/zh/en）も同期。9 sub-INDEX membership + frontmatter tag で 617 を自動マップ、11 を手動裁定（評価は ADR-008、`docs/04-architecture/japanfg-split-design.md`）。これは ADR-004 の知情推翻（移動コスト承知）。**公開 URL が約 620 ページ分変わる**（旧 JapanFG/ URL は 404、`JapanFG/INDEX` のみ umbrella hub として存続）。並列 10 agent が 17 ドメイン INDEX を執筆 + 35 件 missing_peer_link を修復。検証: `--check --strict` EXIT=0、entries=1473 / issues=0 / dead=0 / canonical_drift=0、md=1545 / domains=40 / counts in sync。

> canonical_anchor Phase 2 hard requirement（drift gate）: v2026.06.04-3 で P1（canonical_anchor Phase 2）を完了しました。残っていた「hard requirement + audit gate 化」を落地。評価結論（ADR-007）: 「全 mirror が `canonical_anchor` を必須宣言」は**機械 gate 不能**（mirror か否かは編集判断で列挙不能。実測で宣言済み 12 件中 anchor と同 slug は 4 件のみ、残り 8 件は異 slug、同 slug 跨域対は 4/4 宣言済み、slug 启发式 recall≈33% で violation 0）。よって機械 gate は**宣言の有効性（drift）**に置き、**mirror 必須は `SCHEMA.md` + entry-authoring + review** で担保。`tools/wiki_link_audit.ts` に `--fail-on-canonical-drift`（`canonical_anchor_drift>0` → EXIT=1）を追加し、`tools/release.ts` が常にこの flag を渡すため毎リリースで drift=0 を gate。flag 無しでは従来どおり report-only（ADR-002 既定を保持）。検証: 正例 drift=0→EXIT=0 / 負例（壊れ anchor）→EXIT=1 / 対照（flag 無）→EXIT=0、`--check --strict` EXIT=0、entries=1466 / issues=0 / canonical_drift=0、md=1538 / counts in sync。wiki 本文 `.md` は不変。

> canonical_anchor Phase 2（discovery entity edge）: v2026.06.04-2 では canonical_anchor を report-only audit（Phase 1）から discovery 出力の機械可読 entity edge（Phase 2）へ昇格しました。`ai-index.json` に `entities[]`（同一実体を指す page を束ねる 12 件の edge: `anchor` / `anchor_url` / `anchor_resolves` / `members[relation: canonical | mirror]`）を新設し、各 entry に `canonical_anchor` 字段を付与、`llms-full.txt` の各 mirror page に `Canonical anchor: … -> URL` 行（12 行）、`llms.txt` snapshot に entity anchor 数行 + AI 読解規則を追加。per-entry API は curated subset のため意図的に未変更（entity edge は ai-index.json / llms-full.txt で完全露出）。wiki 本文 `.md` は不変（entries=1466 据え置き、md は本 release notes で +1）。検証: `bun tools/release.ts --check --strict` EXIT=0、entries=1466 / issues=0、entity_anchors=12 / drift=0、counts in sync、lastmod 汚染 0。

> 開発文書の専門化整理: v2026.06.04-1 では docs/ を 11 文書・3 分類（参考型 / 規範・方法型 / 進度・規劃型）へ専門化整理しました。新規 entry-authoring.md（entry 執筆規範）と parallel-development.md（並列 subagent 開発手册）を追加、roadmap / backlog / domains を v13 の最新状態へ更新、decisions に ADR-006（並列 Agent 開発）、gotchas に block-no-verify 誤判・rate-limit/双批 の 2 項を追記、README 索引を 3 分類へ再編。docs/ は corpus 排除済みで公開計数・発見面に不影響。あわせて discovery surface を 2026-06-04 現在へ再同期。検証: `--check --strict` EXIT=0、entries=1466 / issues=0、counts in sync。

> canonical_anchor Phase 2 back-fill: v2026.06.03-13 では mirror page 4 件に canonical_anchor を追加しました（banking/au-jibun-bank→JapanFG/au-jibun-bank、insurance/kampo-japan-post-insurance→JapanFG/kampo-life、insurance/sony-life-group-life-operating-model→JapanFG/sony-life、insurance/ja-kyosai-zenkyoren-overview→JapanFG/ja-kyosairen）。各 mirror の core body に anchor への cross-link を確保し drift を回避。canonical_anchor_checked 8→12、drift=0。rakuten-bank / paypay-bank / TSE 等は対応する同一実体の JapanFG entity が無い（または親子関係で≠同一実体）ため保守的に skip。検証: wiki_link_audit EXIT=0、entries=1466 / issues=0、dead 0。

> 並列 10 領域開発: v2026.06.03-12 では docs/01-strategy/roadmap.md の P2/P3 に基づき、10 領域へ並列 subagent で公開情報の金融 entry 46 件を追加しました（security +4・business +6・corporate-strategy +6・loyalty +6・manufacturer-finance +6・money-market +6・JapanFG +3・non-profit +3・trade +3・retail +3）。各 agent は厳格な file-scope 隔離（自領域のみ）+ 全 wikilink の実在検証で動作。検証: link audit entries 1420→1466 / issues=0 → PASS、死リンク 0、md=1533 / domains=23、counts in sync、lastmod 汚染 0、敏感情報 0。

> 開発進度ドキュメントと canonical_anchor Phase 2 起動: v2026.06.03-11 では (1) docs/ に進度・規劃型の 4 文書（roadmap / backlog / decisions(ADR) / domains）を追加し README 索引を「参考型 / 進度・規劃型」に再編、(2) canonical_anchor Phase 2 の最初の一手として Saison drift を解消した（`insurance/saison-automobile-fire` の core body に canonical anchor `JapanFG/saison-automobile-fire-insurance` への cross-link を追加、Related footer 依存を解消）。検証: wiki_link_audit EXIT=0、canonical_anchor_drift 1→0、entries=1420 / issues=0、dead 0。docs/ は排除済みのため計数・発見面には不影響。

> 開発文書システム: v2026.06.03-10 では repo 内部の開発者向け文書を `docs/` に新設しました（README 索引 / architecture / toolchain / release-process / gotchas の 5 件）。アーキテクチャ、ツールチェーン、リリース SOP、落とし穴集を集約。`docs/` は `lib/markdown_helpers.ts` の `EXCLUDED_WALK_DIRS` と `tools/wiki_link_audit.ts` の `IGNORED_DIRS` に登録し、corpus（md / entries 計数）・sitemap / llms / ai-index / api・Astro サイト・死リンク監査のいずれにも含めない内部専用としました。検証: `bun tools/release.ts --check --strict` EXIT=0、md=1485 据え置き（docs 5 件は不計）、entries=1420 / domains=23、sitemap / llms / ai-index の docs URL は 0。`AGENTS.md` にも docs/ を公開しない旨の規則を三語で追記。

> 領域物理改名（C-A）: v2026.06.03-9 では mislabel だった 2 領域を実体に合わせて物理ディレクトリ改名しました。`governance/` → `non-profit/`（実体は非営利・公益法人 4 ページ）、`manufacturing/` → `manufacturer-finance/`（実体は製造業金融・captive finance 8 ページ）。root + i18n（ja/zh/en）を `git mv`、約 460 件の path wikilink を精確置換（`governance/…`→`non-profit/…` 等、正文の語や historical CHANGELOG/releases の史実記述は不変）、frontmatter `domain`、site build 設定（`content.config.ts`・`siteIndex.mjs` の `ENTRY_DOMAIN_DIRS` + `DOMAIN_TITLES`、`i18n/groups.ts` の super-group）、`wiki_link_audit.ts` の domain 配置、root INDEX domain 表、discovery surface を一括同期。表示名は「非営利 / Non-Profit / 非营利」「製造業金融 / Manufacturer Finance / 厂商金融」。link audit は entries=1420 / issues=0 で PASS（死リンク 0）、sitemap は non-profit 4 / manufacturer-finance 8 URL、旧 `governance/`・`manufacturing/` URL は 0、lastmod 汚染 0。**公開 URL が変わります**（`/ja/governance/x`→`/ja/non-profit/x` 等、旧 URL は消滅）。site/ に node_modules が無く Astro build を本地検証できないため、build 健全性は GitHub Actions で検証します。

> canonical_anchor 全量化: v2026.06.03-8 では canonical_anchor の back-fill と Phase 1 audit を落地しました。mirror page 6 件に設定: `manufacturer-finance/sony-group-finance-arm`→`JapanFG/sony-fg`、banking の net bank 4 件（`ui-bank` / `daiwa-next-bank` / `sony-bank` / `gmo-aozora-net-bank`）→各 JapanFG entity anchor、`JapanFG/japan-post-bank`→`JapanFG/yucho`（計 8 件 = Phase 0 pilot 2 + 今回 6）。`tools/wiki_link_audit.ts` に report-only の canonical_anchor 整合性検査を追加: 各 anchor が resolve するか + 宣言ページが core body で cross-link するかを検証し `canonical_anchor_checked` / `canonical_anchor_drift` counter を出力（既存 counter・exit code には一切影響しない）。現状 checked=8 / drift=1（Saison pilot が anchor を Related footer のみで参照、report-only のため gate を阻害せず）。`bun tools/wiki_link_audit.ts --fail-on-issues` は EXIT=0、link audit は entries=1420 / issues=0 で PASS。

> 表示テーマ: v2026.06.03-2 では human site の CSS token を暖色紙面・赭色系から、冷灰の紙面、青緑の primary action、低彩度の補助色へ変更しました。CSS の実質的な theme template は `site/src/styles/global.css` の `:root` と `[data-theme="dark"]` にある custom properties です。

### 🚪 まず見る場所

| 入口 | 用途 |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | 現行本番ルート。GitHub Pages で配信中で、Vercel shadow deployment 設定も repository root に用意済み。Astro の `/` カバーホームページから `/ja/`、`/en/`、`/zh/`、領域別閲覧、AI discovery surface へ案内します。root `index.html` は repository discovery 用の内容地図として同期します。 |
| Site search | 各 human page の header で `検索` / `Search` / `搜索` を押すか `Ctrl/Cmd+K` を使います。Pagefind が build 後に生成する `/pagefind/*` の静的 index を使い、`/ja/`、`/en/`、`/zh/` の現在言語ごとに検索します。 |
| [INDEX.md](INDEX.md) | 全体索引。テーマ別にエントリーを探すためのメイン入口。 |
| [llms.txt](llms.txt) | AI / LLM 向けの短い案内。entry points、URL rules、domain routes、current counts を記録します。 |
| [llms-full.txt](llms-full.txt) | AI が全公開ページを辿るための full page manifest。title、URL、source path、summary、headings、resolved wikilinks を含みます。 |
| [ai-index.json](ai-index.json) | programmatic traversal / retrieval 用の machine-readable JSON manifest。 |
| [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) | crawler / search engine / AI browser 向けの discoverability surface。 |
| [SCHEMA.md](SCHEMA.md) | wiki エントリーの構造、frontmatter、管理ルール。 |
| [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) | 本文内 `[[wikilink]]` の密度、経路・同格・制度背景リンク、dead target 実在性の監査レポート。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Obsidian で読む・検索するための汎用セットアップ。 |
| [CHANGELOG.md](CHANGELOG.md) | 詳細な作業履歴、同期記録、変更理由、検証結果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex がこのリポジトリで守る運用ルール。 |
| [docs/README.md](docs/README.md) | 内部開発文書の単一入口。BRD / PRD / ARD / FSD / NFR / RTM、UI/UX principles、theme system、visual QA、次期開発計画、コード/文書整合性監査、文書 drift 監査、モデル分担 task packet、実装、品質、運用の文書体系を案内します。 |

### 🗺️ コンテンツマップ

| 領域 | ディレクトリ | 内容 |
| --- | --- | --- |
| 🏦 日本金融機関 | [JapanFG/](JapanFG/) | メガバンク、地方銀行、保険会社、証券会社、銀行免許と BaaS 境界、資金移動・前払式支払手段・電子決済手段の登録、金融商品取引業、保険業免許とソルベンシー、政策金融、決済会社、消費者金融、自動車金融、外資金融機関、外国銀行支店登録簿、国際証券決済機関（ICSD）、インド・タイ・豪州・ニュージーランド回廊、豪州・台湾・インドネシア・フィリピン・ブラジル回廊、台湾・パキスタン・UBAF の残登録行収束、57 / 57 行の外国銀行支店が持つ単独ページまたは包括ページ、専門信託銀行、信託会社登録簿、38 / 38 行の信託会社が持つ単独ページまたは既存 group route、商工中金の現行名称、ペット・アウトドア・通信・旅行・賃貸住宅・外資系の専門保険会社。 |
| 💳 フィンテック・決済 | [fintech/](fintech/), [payments/](payments/) | ステーブルコイン、CBDC、EPI、MiCA、GENIUS、シンガポール金融管理局（MAS）、香港金融管理局（HKMA）、オンチェーン金融、銀行 API、電子決済等代行業、銀行 API の不正利用対策、カード発行会社・加盟店管理会社・処理会社の分担、インターチェンジ手数料と加盟店手数料、清算・決済インフラ、カード認証、BNPL と信用購入あっせんの境界、前払式支払手段、資金移動業、クレジットカード登録簿、口座間決済、口座直結型加盟店決済、コード決済競争、決済代行事業者の加盟店精算リスク。 |
| 🪙 取引所・VASP | [exchanges/](exchanges/) | 日本・海外の暗号資産交換業者、集中型取引所（CEX）、分散型取引所（DEX）、暗号資産サービス事業者（VASP）規制、JVCEA、カストディ、IEO、セキュリティ事案。 |
| ⚙️ システム | [systems/](systems/) | Canton、CCTP、EigenLayer、Hyperlane、BFT、クロスチェーン、L1/L2 基盤。 |
| 🧩 エージェント経済 | [agent-economy/](agent-economy/) | AI エージェント決済、x402、AP2、組み込みウォレット、エージェント商取引の決済インフラ。 |
| 🏛️ 銀行・政策金融 | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS、BaaS の運営モデル、ネット銀行、ネット銀行の競争地図、信託銀行とカストディ基盤、信託銀行カストディの運営比較、地方銀行の API 連携、JA バンク、JF マリンバンク、協同組織金融機関の登録簿、住宅金融支援機構、信用保証、JICA、JBIC、NEXI、JOGMEC 等。 |
| 📊 金融・資本市場 | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A、買収ファイナンス、アクティビスト投資家とエンゲージメント、TOB と上場会社支配、MBO とスクイーズアウト、大量保有報告、フェア・ディスクロージャーとインサイダー取引規制、株主提案と株主総会、資本市場、IPO 開示、セキュリティトークン二次市場、NISA、オンライン証券競争、最良執行、SOR、PTS、PTS 流動性、信用取引と証券金融、空売り・株券貸借規制、株券貸借、プライム・ブローカレッジと機関投資家向け金融、引受、市場インフラ、金融商品取引業者登録簿、短期金融市場、日銀オペレーション。 |
| 🧾 事業・会社ケース | [business/](business/), [corporate-strategy/](corporate-strategy/) | 公開企業・公開人物の事業ケース、親会社文脈、スピンオフ設計。 |
| 🛡️ セキュリティ | [security/](security/) | フォレンジック、サプライチェーン攻撃、バイトコード検証、Wayback 保存確認。 |
| 🛍️ その他産業 | [retail/](retail/), [manufacturing/](manufacturer-finance/), [insurance/](insurance/), [loyalty/](loyalty/) | 小売、製造、保険（大手生命保険 4 社、大手損害保険 3 グループ、地震保険の官民制度、保険代理店・保険仲立人）、ポイント経済などの周辺領域。 |
| 📐 デリバティブ | [derivatives/](derivatives/) | 日本・グローバルのデリバティブ市場。金利（IRS / OIS / 国債先物）、為替（クロスカレンシーベーシス / FX オプション / 店頭 FX）、信用（CDS / 仕組債 / EB ノックイン）、株式ボラティリティ（JPX-VI）、OTC 清算インフラ（JSCC、取引情報蓄積機関）、ディーラー銀行の収益構成。 |
| 🏢 不動産金融 | [real-estate-finance/](real-estate-finance/) | 日本・グローバルの不動産金融。J-REIT（時価総額上位 10 法人マトリックス、スポンサー利益相反、米国 REIT とのガバナンス比較）、証券化（CMBS / RMBS / ブリッジファンド / GK-TK SPV / 鑑定評価）、デベロッパー金融（三井不動産 / 三菱地所 / イオンモール / 三菱商業不動産融資）、キャップレート圧縮、外国人投資家・税制。 |
| 🧱 ストラクチャード・ファイナンス | [structured-finance/](structured-finance/) | 日本・グローバルのストラクチャード・ファイナンス。ABS（オート / 消費者 / RMBS / CMBS）、JHF MBS、CLO、不良債権証券化、プロジェクトファイナンス SPV（再エネ）、航空機 / 船舶 / インフラ金融、RWA 軽減目的の合成型証券化、SPV ビークル（TK / GK / TMK）、格付け方法（JCR / R&I）。 |

### 🔐 公開面ルール

| 保持してよいもの | 削除するもの |
| --- | --- |
| 公的機関、企業 IR、規制当局、法令、登録簿、公開ニュース、公開市場情報 | ローカルパス、メールアドレス、個人口座・所得・資産額、非公開会話、顧客名、相手方名、内部案件名 |
| 公開人物や公開企業に関する、関連性のある公開情報 | 私的な判断ログ、ユーザー発言、未公開プロジェクトの経緯 |
| 公開情報に基づく比較表、制度整理、時系列、推論 | 出所が私的で、匿名化しても意味が残らないメモ |

### 🔍 使い方

1. **全体から探す**: まず [INDEX.md](INDEX.md) を開き、関心領域の章へ移動します。🧭
2. **本文リンクを辿る**: 各 Markdown の本文内 `[[wikilink]]` を優先して、経路、同格項目、制度・規制背景へ進みます。🔗
3. **根拠レベルを見る**: `confidence`、`sources`、`^[extracted]`、`^[inferred]` などで、事実と推論を分けて読みます。🧪
4. **更新時は履歴を残す**: 重要な追加・削除・再編では、必ず [CHANGELOG.md](CHANGELOG.md) に詳細記録を残します。🕒

### 🛠️ 運用ルール

1. **README は日本語、英語、中国語の順に置きます。** 🇯🇵➡️🌐➡️🇨🇳
2. `README.md` と `CHANGELOG.md` は、常に日本語、英語、中国語の3言語を同時に維持します。
3. 公開面・構造・索引・同期状態・リリース・維持ルールを変える場合は、同じ作業内で `README.md`、`CHANGELOG.md`、リリースノート / GitHub Release を更新します。
4. 個人情報や非公開情報を含む可能性がある内容は、公開面に載せる前に削除または公開情報だけに書き換えます。
5. `origin/main` へ push するたびに、詳細な `README.md` / `CHANGELOG.md` / Releases の更新を同時に行います。
6. 同期前後には `git status --short --branch` とリモート HEAD を確認します。
7. push 前に `bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues` を実行し、本文内の経路・同格・制度背景リンクと全 wikilink target 実在性に未解決 issue を残しません。
8. wiki 内容、索引、領域数、公開スナップショットを更新した場合は、同じ作業内で root `index.html` も現在の内容地図として更新します。
9. wiki 内容、索引、領域数、公開スナップショットを更新した場合は、同じ作業内で `bun tools/generate_ai_discovery.ts` を実行し、`robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json` を同期します。

### 📦 GitHub Releases

FinWiki の GitHub Releases は、ソフトウェアのバイナリ配布ではなく、**知識ベースの公開スナップショット**として使います。📌

| 項目 | ルール |
| --- | --- |
| 言語順 | Release body は必ず日本語を先、次に英語、その後に中国語を置く。 |
| タグ形式 | 原則 `vYYYY.MM.DD`。同日に複数回出す場合は `vYYYY.MM.DD-2` のように枝番を付ける。 |
| Release title | 日本語のみ。他の言語のタイトルは併記しない。 |
| Release body | 概要、対象範囲、主要変更、検証結果、既知の注意点、次の作業を明記する。 |
| Push 連動 | `origin/main` へ push するたびに、release notes ファイルと GitHub Release を更新する。 |
| 公開面 | release notes にも個人情報・ローカル情報・内部案件情報を含めない。 |
| History rewrite | 公開面の個人情報削除で履歴を書き換えた場合は、branch / tag を強制更新し、GitHub 上の cached view / dangling commit purge が必要か確認する。 |

### 🌐 Hosting / Vercel 移行

| 項目 | 状態 |
| --- | --- |
| 公開ドメイン | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| 現行 DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`, DNS only。Vercel cutover までは維持 |
| 現行本番 | GitHub Pages workflow。`main` push 後に `_site` を配信 |
| Vercel shadow 設定 | repository root の [vercel.json](vercel.json)。Install: `cd site && bun install --frozen-lockfile` / Build: `bun run vercel:build` / Output: `_vercel_public` |
| Vercel 出力 | Astro HTML (`site/dist`) と Pagefind 検索 bundle (`/pagefind/*`)、raw Markdown、`llms.txt`、`llms-full.txt`、`ai-index.json`、`sitemap.xml`、`robots.txt`、`api/entries/*.json` を同じ静的出力に組み立て |
| Cutover 手順 | Vercel preview / production URL で `/`, `/ja/`, `/en/`, `/zh/`, `/llms.txt`, `/ai-index.json`, `api/entries/index.json` を確認後、Cloudflare の `finwiki` CNAME を Vercel 指定 target へ変更 |
| Rollback | DNS を `jasonhnd.github.io` へ戻せば GitHub Pages へ復帰可能。Vercel 200 / SSL / AI surface 反映確認までは GitHub Pages workflow を残す |
| カスタムドメイン | GitHub Pages 用 `CNAME` file に `finwiki.zksc.io` を保持。Vercel cutover 完了後に扱いを再判断 |
| ホームページ | GitHub Actions で Astro の `/` カバーホームページを公開し、root `index.html` は repository discovery 用の内容地図として同期 |
| HTTPS | 現行は GitHub Pages 側。Vercel cutover 後は Vercel の certificate provisioning を確認 |

### 🚀 推奨同期フロー

```bash
git status --short --branch
bun tools/generate_ai_discovery.ts
bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues
bun tools/vercel_build.ts
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<日本語タイトル>" --notes-file releases/<tag>.md
```

## English 🌐

FinWiki is a public Markdown knowledge base covering finance, payments, stablecoins, crypto assets, capital markets, Japanese financial institutions, policy finance, and strategic corporate cases. It organizes content using Obsidian-style `[[wikilink]]` connections, and the main entry point is [INDEX.md](INDEX.md).

The homepage is designed for humans to understand the entrance, but the wiki corpus itself is designed primarily as a knowledge graph for AI agents to read, search, retrieve, cite, and connect rather than as a linear human reading product.

This repository is maintained as a strictly public knowledge base. The content is restricted to public web information, official records, corporate filings, regulatory disclosures, public market data, or synthesis based on such public sources. It does not contain any personal information, local environment paths, private conversations, customer or counterparty details, or internal advisory case notes.

The current production site is served by GitHub Pages, and Vercel shadow-deployment configuration is now prepared at the repository root: [finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 📊 FinWiki by the Numbers

| Metric | Current Value | Counting Basis |
| --- | ---: | --- |
| Markdown files | 1566 | Repository-wide `.md` files excluding `.git`, including release notes, control documents, and templates |
| Topical domains | 40 | Major topic areas in the `INDEX.md` domain map |
| Link-audited entries | 1485 | Public wiki entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Open body route / peer / system-link and dead wikilink-target audit issues |
| Text volume | ~11.07M chars | ~11,065,281 non-space UTF-8 characters across Markdown |
| Word-like tokens | ~1.78M | Approximate English / CJK mixed-corpus token count |

> Counting basis: current repository snapshot as of 2026-06-15 JST. Public-site reflection is verified after push to `origin/main` and the current production deployment. Vercel DNS cutover is handled separately after shadow-deployment validation.

> i18n / lexical / CI quality: after the 2026-06-03 JST ja translation-layer completion, `site/src/content/i18n` contains 1380 ja files, 1380 zh files, and 1380 en files. After the 2026-06-01 JST zh/en GPT translation completion, v2026.06.01-7 ran 10 parallel GPT/Codex workers for Japanese / English / Chinese lexical audit, repair, and final polish, raising wording toward post-undergraduate specialist register. v2026.06.02 adds a rendered HTML duplicate-id gate after Astro build; the local `site/dist` scan checked 4147 pages with duplicate_ids=0. GitHub Actions now uses `actions/checkout@v6`, `actions/upload-pages-artifact@v5`, and `actions/deploy-pages@v5` on the Node.js 24 runtime generation. v2026.06.02-2 scopes Node deprecation suppression to the deploy step so the upstream `punycode` warning no longer appears in public deployment logs. v2026.06.02-3 clears the remaining 54 `fidelity: needs_review` i18n files to 0 through 10 parallel GPT/Codex workers plus manual verification, including QZX placeholder corruption and mojibake-residue repairs. v2026.06.02-4 adds wikilink target-existence gating, reverts overbroad agent-generated `*/INDEX` replacements, then resolves the graph with 144 explicit aliases and 7 non-financial background links converted to plain text; the final audit reports entries_checked=1411 / entries_with_issues=0 / dead_wikilink_references=0 / dead_wikilink_targets=0. v2026.06.02-5 adds Vercel shadow-deployment config through `vercel.json`, `bun tools/vercel_build.ts`, and `tools/assemble_static_publish.ts`, assembling Astro HTML plus raw Markdown / AI discovery surfaces into `_vercel_public`. v2026.06.02-6 adds Pagefind static full-text search, generating `/pagefind/*` after the build and exposing language-scoped search across the trilingual human site. v2026.06.02-7 unifies root release / discovery / audit / publish tooling on Bun + TypeScript, so GitHub Pages and Vercel now share the same Bun pipeline. v2026.06.02-8 completes static-site architecture Phase 1: Astro reads the root domain corpus directly, routes are centralized through canonical helpers, domain landing pages are generated, and wikilinks are localized at build time. The deprecated `site/src/content/entries` mirror and sync step are no longer build inputs. v2026.06.03 adds the complete ja machine-translation layer, with `prep-parallel --langs ja` at 0 jobs, `fidelity: needs_review` at 0 files, Astro build at 4219 pages, and duplicate_ids=0.

> Japanese display layer: v2026.06.03-3 reviews `/ja/` from a Japanese-reader perspective and localizes the header, footer, root page, browse / domain / entry chrome, confidence labels, title fallback, and rendered wikilink labels. `localize-wikilinks` now rewrites ja HTML `data-wl` labels to ja i18n titles; the build log reports ja-labels=17603.

> Package metadata: v2026.06.03-4 adds public metadata to the root `package.json`, including version, description, repository, bugs, and homepage fields, aligning npm / GitHub project metadata with the repository entry point.

> AI task entry: v2026.06.03-5 syncs the manually maintained `llms-tasks.txt` to the current snapshot. It remaps 10 dead links (across money-market / derivatives / payments / policy-finance / securities / systems) left by entry renames and reorganizations to their existing targets, and updates the snapshot line to `1,472 files / 1,411 link-audited entries / 23 domains / ~9.99M non-space chars` (2026-06-03 JST). Because `.txt` files fall outside the `wiki:audit` scope these dead links had stayed latent, so all 160 link targets were existence-checked. Adding the release notes moves the corpus from 1,471 to 1,472 files, so the discovery surfaces were regenerated; since a fresh clone resets every fs mtime, page mtimes were first restored from the committed `sitemap.xml` lastmod values, preserving the lastmod of all 1,469 existing pages. `bun tools/release.ts --check --strict` confirms link audit PASS (entries=1411 / issues=0) and counts in sync.

> Content cleanup: v2026.06.03-6 audited every domain with parallel subagents and tidied the corpus without changing content quality. The 8 domain INDEXes that had gone stale since the 2026-05-25 expansion (corporate-strategy / loyalty / money-market / manufacturing / retail / governance / trade / security) were synced to their real entries (adding omitted entries, fixing stale "single entry" wording, cleaning stale backlogs). Lingering post-Bun-migration `tools/*.py` references in `SCHEMA.md` / `INDEX.md` / convention / proposal were corrected to `.ts`; the `HOW-TO-NAVIGATE.md` count drift (1465+/24+ → 1,400+/23) was fixed; the 5 orphaned convention/proposal docs were added to the `INDEX.md` Control Documents; and the security INDEX "Status" column was relabeled to confidence. The Lawson TOB price was unified to ¥10,360 (from an erroneous ¥4,952) per public disclosure (web-verified). Link audit passes at entries=1411 / issues=0 with zero dead links in the wiki body.

> Structural cleanup: v2026.06.03-7 landed the structural tasks B/C/D with parallel subagents. (B) Added scope/disambiguation to the mislabeled governance (actually non-profit / public-interest) and manufacturing (actually manufacturer-finance) INDEXes, routing corporate governance to finance/securities/exchanges, entity pages to JapanFG, and ABS to structured-finance. (C) Gave the flat 631-entry JapanFG domain 9 institution-type sub-indexes driven by frontmatter tags (megabanks-and-fg / regional-banks / cooperative-finance / trust / insurance / securities-and-asset-management / payments-cards-leasing-finance / foreign-institutions / regulators-sro-policy; 609 entries grouped) plus a navigation block in `JapanFG/INDEX` — with zero file moves (Option A), preserving every existing link and URL. (D) Landed Phase 0 of the canonical_anchor proposal: added `canonical_anchor` as an optional SCHEMA field and to the canonical key order, set it as a pilot on the Saison and Toyota Financial Services mirror pairs, and marked the proposal status: active (Phase 1 audit tooling is future work). Link audit passes at entries=1420 / issues=0 (every new sub-index wikilink resolves; zero dead links).

> INDEX count calibration: v2026.06.05-4 synchronized the reader-facing root `INDEX.md` domain table to disk reality. 13 thematic domains (exchanges / fintech / systems / agent-economy / banking / policy-finance / insurance / finance / payments / securities / derivatives / real-estate-finance / structured-finance) were displayed at +1 versus their non-INDEX `.md` file counts, so the table was corrected and the top snapshot was updated to 1485 link-audited entries. No wiki body facts, site config, or entry count changed. The prior v2026.06.05-3 GitHub Actions run is confirmed `Deploy FinWiki | success` at HEAD `2a88e6c9`. Checks: domain_count_mismatches=0, `--check --strict` EXIT=0, `dead=0 / drift=0 / issues=0 / domains=40`.

> .txt Public Entry Audit: Added a route audit tool `tools/txt_route_audit.ts` for AI discovery files (`llms.txt`, `llms-full.txt`, `llms-tasks.txt`) on 2026-06-08 JST. This tool enables automated detection of broken links and stale paths across text-based AI discovery surfaces. The initial audit identified over 450 inconsistencies, providing a foundation for future repair phases.

> P2 deepening (batch 1): v2026.06.05-3 deepened **58** of the 110 sub-250-word registry stubs in the JapanFG-split domains (`regional-banks` 48 + `cooperative-banks` 10) into proper entity pages — license type / regulatory positioning (銀行法・信用金庫法 / FSA・財務局 / 地銀協・信金中金), institution-type business model, group/system context, 4+ core-body wikilinks each. **Strict no-fabrication**: specific numbers (founding year/ticker/parent) added only when web-verified; unverifiable claims removed by the agents. All 58 had their split-leftover stale `[[JapanFG/INDEX]]` route fixed to the new-domain INDEX. Parallel subagents (3 agents for regional A/B/C + cooperative from a prior batch). The remaining ~51 stubs (11 domains) go to the backlog (P2 continues). Verification: `dead=0 / drift=0 / issues=0`, `--check --strict` EXIT=0. Content is subagent-generated, so facts warrant spot-check (ADR-006; spot-checked).

> P4 i18n: v2026.06.05-2 generated **165 translation mirror files** (ja/zh/en) for the 55 content entries from v12 (43) + P3 (12). **No API key needed** — v05-1's claim that `translate.mjs` needs `ANTHROPIC_API_KEY` (so P4 is "blocked") was wrong; that script needs the key only because it's a standalone program calling a *separate* Haiku over the API. This release had subagents (Claude itself) translate directly (8 parallel, per-domain). Mirrors replicate the pipeline format (`source_hash=sha256(body).slice(0,16)`, `.passthrough()` schema, `status: machine`). Since i18n is outside the link audit, every one of the 165 mirrors was verified to have `[[link]]` targets / numbers byte-identical to its source (mismatches=0). The 17 new-domain INDEX pages need no mirror (landings are generated from config). Verification: link_mismatches=0, `--check --strict` EXIT=0 (corpus unchanged); final check is the CI Astro build.

> P3 content expansion: v2026.06.05-1 expanded the two thinnest roadmap-P3 domains via parallel subagents. `non-profit` 6→12 (social-welfare / school / medical / religious corporations, 公益法人会計基準, grant-making foundations) and `trade` 6→12 (NEXI trade insurance, customs / tariff / origin, FTA / EPA / RCEP, electronic bill of lading / MLETR, forfaiting / international factoring, supply-chain finance). +12 public-information entries. Verification: `--check --strict` EXIT=0, entries 1473→1485 / issues=0 / dead=0 / canonical_drift=0, md=1559 / domains=40 / counts in sync. **P4 (i18n translation) is not done** — the pipeline (`site/scripts/translate.mjs`) needs `ANTHROPIC_API_KEY`, unset in the current environment.

> JapanFG split follow-up: v2026.06.04-5 cleared the two v04-4 follow-ups — added ja/zh/en `DOMAIN_TITLES` for the 17 domains (site shows proper names instead of slugs) in `site/src/lib/siteIndex.mjs`, and added the 17 domains to the `tools/wiki_link_audit.ts` domain route map (also fixed the JapanFG stale `legal-financial-licenses/INDEX` → `financial-licenses/INDEX`). Corpus / entity structure unchanged. Verification: `--check --strict` EXIT=0, entries=1473 / issues=0 / dead=0 / canonical_drift=0, domains=40, `siteIndex.mjs` imports OK.

> JapanFG split (23→40 domains): v2026.06.04-4 physically split the formerly flat `JapanFG/` domain (~620 entities) into **17 institution-type top-level domains** (megabanks / regional-banks / cooperative-banks / trust-banks / life-insurers / non-life-insurers / securities-firms / asset-managers / payment-firms / card-issuers / leasing-firms / consumer-finance / trading-company-finance / financial-conglomerates / foreign-financial-institutions / financial-regulators / financial-licenses). Moved 628 entity/license files, rewrote ~53,600 `[[JapanFG/…]]` wikilinks to their new domains, and synced 1,887 i18n mirrors (ja/zh/en). 617 entities auto-mapped by the 9 sub-INDEX memberships + frontmatter tags; 11 resolved by hand (evaluation in ADR-008 / `docs/04-architecture/japanfg-split-design.md`). This is an informed override of ADR-004 (move cost accepted). **~620 public URLs change** (old `JapanFG/` URLs 404; only `JapanFG/INDEX` survives as an umbrella hub). 10 parallel agents authored the 17 domain INDEX pages and fixed 35 missing_peer_link entries. Verification: `--check --strict` EXIT=0, entries=1473 / issues=0 / dead=0 / canonical_drift=0, md=1545 / domains=40 / counts in sync.

> canonical_anchor Phase 2 hard requirement (drift gate): v2026.06.04-3 completes P1 (canonical_anchor Phase 2) by landing the remaining "hard requirement + gate the audit" item. Evaluation outcome (ADR-007): "every mirror must declare `canonical_anchor`" **cannot be a mechanical gate** — mirror-ness is editorial and not enumerable (of 12 declared mirrors only 4 are same-slug as their anchor, the other 8 are editorial, all 4 same-slug cross-domain pairs are already declared, slug heuristic recall ≈33% with 0 findable violations). So the mechanical gate enforces **declaration validity (drift)**, while **"mirror pages must declare" is enforced via `SCHEMA.md` + entry-authoring + review**. Added `--fail-on-canonical-drift` to `tools/wiki_link_audit.ts` (`canonical_anchor_drift>0` → EXIT=1); `tools/release.ts` always passes it, so every release gates drift=0. Without the flag, drift stays report-only (ADR-002 default preserved). Verification: positive drift=0→EXIT=0 / negative (broken anchor)→EXIT=1 / control (no flag)→EXIT=0, `--check --strict` EXIT=0, entries=1466 / issues=0 / canonical_drift=0, md=1538 / counts in sync. Wiki `.md` content unchanged.

> canonical_anchor Phase 2 (discovery entity edges): v2026.06.04-2 promoted canonical_anchor from report-only audit (Phase 1) to machine-readable entity edges in the discovery output (Phase 2). Added an `entities[]` array to `ai-index.json` (12 edges grouping pages that point at the same entity: `anchor` / `anchor_url` / `anchor_resolves` / `members[relation: canonical | mirror]`), a `canonical_anchor` field on every entry, a `Canonical anchor: … -> URL` line on each mirror page in `llms-full.txt` (12 lines), and an entity-anchor snapshot line + AI reader rule in `llms.txt`. The per-entry API is intentionally unchanged (curated subset; the edges are fully exposed via ai-index.json / llms-full.txt). No wiki `.md` content changed (entries=1466 held; md +1 from this release note). Verification: `bun tools/release.ts --check --strict` EXIT=0, entries=1466 / issues=0, entity_anchors=12 / drift=0, counts in sync, 0 lastmod pollution.

> Developer-docs professionalization: v2026.06.04-1 reorganized docs/ into 11 docs across 3 tiers (reference / standards-method / progress-planning). Added entry-authoring.md (entry authoring standard) and parallel-development.md (parallel-subagent playbook); updated roadmap/backlog/domains to the v13 state; added decisions ADR-006 (parallel Agent development) and two gotchas (block-no-verify misfire, rate-limit/double-batch); restructured the README index into 3 tiers. docs/ is corpus-excluded so public counts/discovery are unaffected. Also re-synced discovery surfaces to 2026-06-04. Verification: `--check --strict` EXIT=0, entries=1466 / issues=0, counts in sync.

> canonical_anchor Phase 2 back-fill: v2026.06.03-13 set canonical_anchor on 4 mirror pages (banking/au-jibun-bank→JapanFG/au-jibun-bank, insurance/kampo-japan-post-insurance→JapanFG/kampo-life, insurance/sony-life-group-life-operating-model→JapanFG/sony-life, insurance/ja-kyosai-zenkyoren-overview→JapanFG/ja-kyosairen). Each mirror's core body cross-links its anchor to avoid drift. canonical_anchor_checked 8→12, drift=0. Conservatively skipped rakuten-bank / paypay-bank / TSE etc. (no same-entity JapanFG anchor, or parent-child ≠ same entity). Verification: wiki_link_audit EXIT=0, entries=1466 / issues=0, 0 dead.

> Parallel 10-domain development: v2026.06.03-12 added 46 public-information financial entries across 10 domains via parallel subagents per docs/01-strategy/roadmap.md P2/P3 (security +4, business +6, corporate-strategy +6, loyalty +6, manufacturer-finance +6, money-market +6, JapanFG +3, non-profit +3, trade +3, retail +3). Each agent ran under strict file-scope isolation (own domain only) and verified the existence of every wikilink. Verification: link audit entries 1420→1466 / issues=0 → PASS, 0 dead links, md=1533 / domains=23, counts in sync, 0 lastmod pollution, 0 sensitive data.

> Dev-progress docs + canonical_anchor Phase 2 kickoff: v2026.06.03-11 (1) adds 4 progress/planning docs under docs/ (roadmap / backlog / decisions(ADR) / domains) and reorganizes the docs index into "reference / progress-planning", and (2) as the first step of canonical_anchor Phase 2, resolves the Saison drift by adding a core-body cross-link from `insurance/saison-automobile-fire` to its canonical anchor `JapanFG/saison-automobile-fire-insurance` (no longer Related-footer-only). Verification: wiki_link_audit EXIT=0, canonical_anchor_drift 1→0, entries=1420 / issues=0, 0 dead. docs/ is excluded, so counts / discovery surfaces are unaffected.

> Developer docs system: v2026.06.03-10 adds an internal developer-documentation tree under `docs/` (5 files: README index / architecture / toolchain / release-process / gotchas) covering architecture, the toolchain, the release SOP, and gotchas. `docs/` is registered in `EXCLUDED_WALK_DIRS` (`lib/markdown_helpers.ts`) and `IGNORED_DIRS` (`tools/wiki_link_audit.ts`), making it internal-only: excluded from the corpus (md / entries counts), sitemap / llms / ai-index / api, the Astro site, and the dead-link audit. Verification: `bun tools/release.ts --check --strict` EXIT=0, md=1485 unchanged (the 5 docs files are not counted), entries=1420 / domains=23, 0 docs URLs in sitemap / llms / ai-index. `AGENTS.md` also gained a trilingual rule that docs/ is not published.

> Domain physical rename (C-A): v2026.06.03-9 physically renamed the two mislabeled domains to match their actual scope. `governance/` → `non-profit/` (real scope: non-profit / public-interest foundations, 4 pages) and `manufacturing/` → `manufacturer-finance/` (real scope: manufacturer / captive finance, 8 pages). `git mv` for root + i18n (ja/zh/en), ~460 path wikilinks precisely rewritten (`governance/…`→`non-profit/…` etc.; prose words and the historical CHANGELOG/releases records left intact), plus frontmatter `domain`, the site build config (`ENTRY_DOMAIN_DIRS` + `DOMAIN_TITLES` in `content.config.ts`/`siteIndex.mjs`, the super-group in `i18n/groups.ts`), the `wiki_link_audit.ts` domain map, the root INDEX domain table, and discovery surfaces — all synced. Display names are now "非営利 / Non-Profit / 非营利" and "製造業金融 / Manufacturer Finance / 厂商金融". Link audit PASSES at entries=1420 / issues=0 (0 dead links); the sitemap carries 4 non-profit / 8 manufacturer-finance URLs, 0 old `governance/` or `manufacturing/` URLs, 0 lastmod pollution. **Public URLs change** (`/en/governance/x`→`/en/non-profit/x` etc.; old URLs disappear rather than 301). site/ has no node_modules so the Astro build can't be verified locally — build health is validated on GitHub Actions.

> canonical_anchor adoption: v2026.06.03-8 landed the canonical_anchor back-fill and Phase 1 audit. Set it on 6 mirror pages: `manufacturer-finance/sony-group-finance-arm`→`JapanFG/sony-fg`, four banking net banks (`ui-bank` / `daiwa-next-bank` / `sony-bank` / `gmo-aozora-net-bank`) → their JapanFG entity anchors, and `JapanFG/japan-post-bank`→`JapanFG/yucho` (8 total = 2 Phase-0 pilots + 6 new). Extended `tools/wiki_link_audit.ts` with a REPORT-ONLY canonical_anchor integrity check: for each page declaring `canonical_anchor`, it verifies the anchor resolves and that the page core-body cross-links it, emitting `canonical_anchor_checked` / `canonical_anchor_drift` counters without touching any existing counter or exit code. Currently checked=8 / drift=1 (the Saison pilot references its anchor only in the Related footer; report-only, so it never blocks the gate). `bun tools/wiki_link_audit.ts --fail-on-issues` is EXIT=0 and link audit passes at entries=1420 / issues=0.

> Site presentation: v2026.06.03-2 changes the human-site CSS tokens from warm paper / ochre tones to cool gray surfaces, teal-blue primary actions, and restrained secondary colors. The practical theme template is the custom-property block in `site/src/styles/global.css` under `:root` and `[data-theme="dark"]`.

> Developer-doc and generated-surface drift audit: on 2026-06-08 JST, the full `docs/` system, root control docs, source `canonical_anchor` fields, and AI discovery/API surfaces were re-audited. Added `documentation-drift-audit.md`, synchronized the JapanFG split design with the actual 17 new domains + 40-domain state + retained `JapanFG/INDEX` umbrella, updated old `JapanFG/<entity>` canonical anchors to current entity paths, made API generation clear stale `api/entries/` JSON before rewriting, and filtered `docs/` relative links out of AI-surface `markdown_links`. Deployment / incident / maintenance runbooks now cover local build, Vercel shadow validation, GitHub Actions watch, and public URL spot checks.

### 🚪 Primary Entrances

| Entrance | Purpose |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | Current production root. It is still served by GitHub Pages, with Vercel shadow-deployment configuration prepared at the repository root. The Astro `/` cover homepage directs readers to `/ja/`, `/en/`, `/zh/`, domain browsing, and AI discovery surfaces; root `index.html` remains the synchronized content map for repository discovery. |
| Site search | Use the header `Search` control or `Ctrl/Cmd+K` on human pages. Pagefind generates a static `/pagefind/*` index after build and searches within the current language on `/ja/`, `/en/`, and `/zh/`. |
| [INDEX.md](INDEX.md) | Global Index. The main entrance to find entries by theme. |
| [llms.txt](llms.txt) | Short AI / LLM guide with entry points, URL rules, domain routes, and current counts. |
| [llms-full.txt](llms-full.txt) | Full page manifest for AI traversal, including title, URL, source path, summary, headings, and resolved wikilinks. |
| [ai-index.json](ai-index.json) | Machine-readable JSON manifest for programmatic traversal and retrieval. |
| [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) | Discoverability surface for crawlers, search engines, and AI browsers. |
| [SCHEMA.md](SCHEMA.md) | Schema for wiki entries, frontmatter guidelines, and maintenance conventions. |
| [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) | Audit report for body `[[wikilink]]` density, route / peer / system links, and dead-target existence. |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Generic setup guide for reading and searching in Obsidian. |
| [CHANGELOG.md](CHANGELOG.md) | Detailed timeline of operations, sync logs, and validation results. |
| [AGENTS.md](AGENTS.md) | Local agent rules and constraints in this repository. |
| [docs/README.md](docs/README.md) | Single entry point for internal developer documentation, including BRD / PRD / ARD / FSD / NFR / RTM, UI/UX principles, theme system, visual QA, the next development plan, code/docs alignment audit, documentation drift audit, model-role task packets, implementation, quality, and operations docs. |

### 🗺️ Content Map

| Domain | Directory | Scope |
| --- | --- | --- |
| 🏦 Japanese Financial Groups | [JapanFG/](JapanFG/) | Mega banks, regional banks, insurers, securities firms, bank license / BaaS boundary, payment license stack, securities license stack, insurance license / solvency route, foreign-bank branch / agency / adjacent-license routes, ICSD / India / Thailand / ANZ corridor strategic exceptions, Australia / Taiwan / Indonesia / Philippines / Brazil corridor anchors, Taiwan / Pakistan / UBAF registry-only closure anchors, 57 / 57 foreign-bank branch routes, specialty trust-bank / CCI current-name anchors, 38 / 38 trust-company standalone or existing group routes, priority-A / B / C trust-company anchors, pet / outdoor / telco-linked / travel / rental-housing / foreign-affiliated specialty insurers, policy finance, payments, consumer finance, auto finance, foreign subsidiaries, the foreign-bank branch registry, and the trust-company registry. |
| 💳 Fintech & Payments | [fintech/](fintech/), [payments/](payments/) | Stablecoins, CBDC, EPI, MiCA, GENIUS, MAS, HKMA, on-chain finance, bank API / electronic payment agency, bank API incident controls, card issuer / acquirer / processor split, interchange / merchant-fee stack, payment clearing / settlement infrastructure, card security / authentication controls, BNPL / credit-purchase boundary, prepaid / funds-transfer / credit-card registries, account-to-account payment, account-direct acquiring, code-payment competition, and PSP settlement risk. |
| 🪙 Exchanges & VASP | [exchanges/](exchanges/) | Global and Japanese CEX/DEX, VASP regulations, JVCEA, custody, IEO, security incidents. |
| ⚙️ Systems & Infrastructure | [systems/](systems/) | Canton/DAML, CCTP, EigenLayer, Hyperlane, BFT, cross-chain, L1/L2 foundations. |
| 🧩 Agent Economy | [agent-economy/](agent-economy/) | AI agent payment protocols, x402, AP2, embedded wallets, agent-commerce infrastructure. |
| 🏛️ Banking & Policy Finance | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS, BaaS operating models, net banks, net-bank competition map, trust-bank / custody infrastructure, trust-bank custody operating comparison, regional bank API partnerships, JA Bank / JF Marine Bank system, cooperative-banking registries, JHF, credit guarantees, JICA, JBIC, NEXI, JOGMEC, etc. |
| 📊 Capital Markets | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A, acquisition finance, activist / engagement playbook, TOB / public-company control, MBO / squeeze-out process, large-shareholding disclosure, fair disclosure / insider trading controls, shareholder proposal / AGM voting route, capital markets, IPO listing disclosure, security-token secondary market, NISA, online brokerage competition, best execution / SOR / PTS, PTS liquidity data, margin trading / securities finance, short-selling / stock-loan controls, stock lending, prime brokerage / institutional financing, underwriting, market infrastructure, FIEA operator registry, call markets, BoJ open-market operations. |
| 🧾 Strategic Cases | [business/](business/), [corporate-strategy/](corporate-strategy/) | Public company/person strategic business cases, spin-off designs, parent entity contexts. |
| 🛡️ Security & Forensics | [security/](security/) | Forensics, supply-chain attacks, bytecode verification, Wayback time stamps. |
| 🛍️ Peripheral Industries | [retail/](retail/), [manufacturing/](manufacturer-finance/), [insurance/](insurance/), [loyalty/](loyalty/) | Retail groups, captive finance, insurance operating models, life / non-life comparison pages, public-private earthquake insurance, agency / brokerage, and point loyalty liabilities. |
| 📐 Derivatives | [derivatives/](derivatives/) | Japan + global derivatives markets — interest rate (IRS / OIS / JGB futures), FX (cross-currency basis / FX options / retail FX), credit (CDS / structured bond / EB knock-in), equity volatility (JPX-VI), OTC clearing infrastructure (JSCC, trade repository), and dealer-bank revenue mix. |
| 🏢 Real-Estate Finance | [real-estate-finance/](real-estate-finance/) | Japan + global real-estate finance — J-REIT (top 10 matrix, sponsor-conflict, governance vs US REIT), securitization (CMBS / RMBS / bridge fund / GK-TK SPV / appraisal), developer financing (Mitsui Fudosan / Mitsubishi Estate / AEON Mall / Mitsubishi commercial real-estate lending), cap-rate compression, foreign-investor / tax. |
| 🧱 Structured Finance | [structured-finance/](structured-finance/) | Japan + global structured finance — ABS (auto / consumer / RMBS / CMBS), JHF MBS, CLO, NPL securitization, project finance SPV (renewable), aircraft / ship / infrastructure finance, synthetic securitization for RWA relief, SPV vehicles (TK / GK / TMK), and credit rating methodology (JCR / R&I). |

### 🔐 Public Surface Policy

| Allow on Public Surface | Must Remove / Sanitize |
| --- | --- |
| Public records, corporate filings, regulatory registers, laws, official news, public market data | Local paths, emails, personal accounts/income/assets, private conversations, customer/counterparty names, internal code names |
| Relevant public information regarding public figures or public corporations | Private judgment logs, user quotes, unpublished project development details |
| Comparison tables, structured diagrams, timelines, and synthesis based on public records | Private source notes that lose meaning once anonymized |

### 🔍 How to Use

1. **Start from the Index**: Open [INDEX.md](INDEX.md) and jump to the domain of your interest. 🧭
2. **Follow Body Links**: Prefer body `[[wikilink]]` paths that connect each entry to routes, peers, and system / regulatory context. 🔗
3. **Check the Confidence Level**: Look for tags like `confidence`, `sources`, `^[extracted]`, `^[inferred]` to differentiate between hard facts and structured synthesis. 🧪
4. **Log Your Edits**: When making major additions, deletions, or structural updates, always write detailed records in [CHANGELOG.md](CHANGELOG.md). 🕒

### 🛠️ Operation Rules

1. **README presentation order:** README maintains sections in Japanese, English, and Chinese in that order. 🇯🇵➡️🌐➡️🇨🇳
2. **Maintenance synchrony:** README, CHANGELOG, and Releases are kept fully consistent.
3. **Snapshot releases:** Push commits trigger updating of the release notes file and the corresponding GitHub Release.
4. **Privacy filtration:** Ensure all private and local variables are completely stripped before pushing.
5. **Wiki graph check:** Before push, run `bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues` and leave no unresolved body route / peer / system or dead-target issue.
6. **Homepage synchrony:** When wiki content, indexes, domain counts, or public snapshots change, update root `index.html` in the same work as the current content map.
7. **AI discovery synchrony:** When wiki content, indexes, domain counts, or public snapshots change, run `bun tools/generate_ai_discovery.ts` and update `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and `ai-index.json` in the same work.

### 📦 GitHub Releases

FinWiki uses GitHub Releases as **public snapshots of the knowledge base**, rather than software binary distributions. 📌

| Item | Rule |
| --- | --- |
| Language order | Release bodies are written Japanese first, English second, Chinese third. |
| Tag format | Standard `vYYYY.MM.DD`. For multiple releases on the same day, append suffixes like `vYYYY.MM.DD-2`. |
| Release title | Japanese only. Do not append English or Chinese translations in the title. |
| Release body | Explicitly state overview, affected scope, major changes, validation results, known notes, and next steps. |
| Push coupling | Every git push to `origin/main` must synchronously update the release notes file and the GitHub Release. |

### 🌐 Hosting / Vercel Migration

| Item | Status |
| --- | --- |
| Public domain | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| Current DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`, DNS only. Keep this until Vercel cutover |
| Current production | GitHub Pages workflow, publishing `_site` after `main` pushes |
| Vercel shadow config | Root [vercel.json](vercel.json). Install: `cd site && bun install --frozen-lockfile` / Build: `bun run vercel:build` / Output: `_vercel_public` |
| Vercel output | Assembles Astro HTML (`site/dist`), the Pagefind search bundle (`/pagefind/*`), raw Markdown, `llms.txt`, `llms-full.txt`, `ai-index.json`, `sitemap.xml`, `robots.txt`, and `api/entries/*.json` into one static output |
| Cutover step | After checking the Vercel preview / production URL for `/`, `/ja/`, `/en/`, `/zh/`, `/llms.txt`, `/ai-index.json`, and `api/entries/index.json`, change the Cloudflare `finwiki` CNAME to the target Vercel provides |
| Rollback | Point DNS back to `jasonhnd.github.io` to return to GitHub Pages. Keep the GitHub Pages workflow until Vercel 200 / SSL / AI-surface checks pass |
| Custom domain file | Keep the GitHub Pages `CNAME` file until Vercel cutover is verified |

### 🚀 Recommended Synchronization Flow

```bash
git status --short --branch
bun tools/generate_ai_discovery.ts
bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues
bun tools/vercel_build.ts
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<Japanese Title>" --notes-file releases/<tag>.md
```

## 中文 🇨🇳

FinWiki 是一个覆盖金融、支付、稳定币、加密资产、资本市场、日本金融机构、政策金融、公开公司与公开人物战略案例的 Markdown 知识库。仓库主要使用 Obsidian 风格的 `[[wikilink]]` 组织内容，总入口是 [INDEX.md](INDEX.md)。

首页是给人理解入口用的，但 wiki 正文 corpus 主要不是给人按顺序通读，而是作为给 AI 读取、检索、引用和连接的 knowledge graph 来设计。

这个仓库按公开发布标准维护。内容只保留互联网公开信息、公文资料、公司披露、监管资料、公开市场信息，以及基于这些公开材料整理出的可公开分析。这里不保留个人信息、本地环境信息、非公开对话、客户/相手方信息或内部案件笔记。

当前生产站点仍通过 GitHub Pages 发布，同时仓库根目录已经准备好 Vercel 影子部署配置：[finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 📊 用数字看 FinWiki

| 指标 | 当前值 | 统计口径 |
| --- | ---: | --- |
| Markdown files | 1566 | 排除 `.git`，包含 release notes、控制文档、模板在内的全仓库 `.md` 文件 |
| Topical domains | 40 | `INDEX.md` domain map 中的主要主题领域 |
| Link-audited entries | 1485 | `tools/wiki_link_audit.ts` 覆盖的 public wiki entries |
| Unresolved link issues | 0 | body route / peer / system link audit 与 dead wikilink target audit 的未解决 issue |
| Text volume | 约1107万字 | 全库 Markdown 空白除外 UTF-8 字符数（约 11,065,281） |
| Word-like tokens | 约178万 | English / CJK mixed corpus 的近似 token count |

> 统计口径：2026-06-05 JST 当前 repository snapshot。公开站点反映会在 push 到 `origin/main` 并完成当前生产部署后确认。Vercel DNS cutover 会在 shadow deployment 验证后单独执行。

> i18n / 词汇质量 / CI 质量：2026-06-03 JST 的 ja 翻译层完成后，`site/src/content/i18n` 为 ja 1380 / zh 1380 / en 1380 文件。2026-06-01 JST 的 zh/en GPT 翻译完成后，v2026.06.01-7 已用 10 路并行 GPT/Codex worker 完成日 / 英 / 中词汇审计、修复和最终 polish，把措辞推向超过大学本科层级的专业语域。v2026.06.02 增加 Astro build 后的 duplicate HTML id gate；本地 `site/dist` 扫描 checked=4147 / duplicate_ids=0。GitHub Actions 已更新到 `actions/checkout@v6`、`actions/upload-pages-artifact@v5`、`actions/deploy-pages@v5`，对应 Node.js 24 runtime 世代。v2026.06.02-2 仅在 deploy step 范围内抑制 Node deprecation notice，清掉上游 action 的 `punycode` warning 日志噪音。v2026.06.02-3 已用 10 路并行 GPT/Codex worker 加人工核验，把剩余 54 个 `fidelity: needs_review` i18n 文件清到 0，并修复 QZX placeholder 破损与 mojibake 残留。v2026.06.02-4 增加 wikilink target 实在性 gate，先回滚 agent 过度生成的 `*/INDEX` 替换，再用 144 个显式 alias 和 7 个非金融背景链接 plain text 化把图谱修到 entries_checked=1411 / entries_with_issues=0 / dead_wikilink_references=0 / dead_wikilink_targets=0。v2026.06.02-5 新增 Vercel shadow deployment 配置：`vercel.json`、`bun tools/vercel_build.ts`、`tools/assemble_static_publish.ts`，把 Astro HTML 和 raw Markdown / AI discovery surface 一起组装到 `_vercel_public`。v2026.06.02-6 新增 Pagefind 静态全文搜索，build 后生成 `/pagefind/*`，并在三语 human site 上按当前语言检索。v2026.06.02-7 将 root release / discovery / audit / publish 工具统一到 Bun + TypeScript，GitHub Pages 与 Vercel 共用同一套 Bun pipeline。v2026.06.02-8 完成静态站点架构 Phase 1：Astro 直接读取 root domain corpus，路由统一走 canonical helper，新增 domain landing pages，并在 build time 本地化 wikilink。废弃的 `site/src/content/entries` mirror 和 sync step 不再作为 build input。v2026.06.03 新增完整 ja 机器翻译层，`prep-parallel --langs ja` 为 0 jobs，`fidelity: needs_review` 为 0，Astro build 生成 4219 pages，duplicate_ids=0。

> 日文显示层：v2026.06.03-3 从日语用户视角重新检查 `/ja/`，把 header / footer / root page / browse / domain / entry chrome、confidence 显示、标题 fallback、构建后的 wikilink 显示标签改为日文。`localize-wikilinks` 现在会把 ja HTML 的 `data-wl` label 替换成 ja i18n title；build log 显示 ja-labels=17603。

> package metadata：v2026.06.03-4 在 root `package.json` 中补充 version、description、repository、bugs、homepage 等公开元数据，让 npm / GitHub 项目元信息与仓库入口一致。

> 开发文档与生成面漂移审计：2026-06-08 JST 已重新审计整个 `docs/` 体系、root control docs、source `canonical_anchor` 字段和 AI discovery/API surface。新增 `documentation-drift-audit.md`；把 JapanFG split design 同步为实际 17 个新领域 + 40 domains + 保留 `JapanFG/INDEX` umbrella；把旧 `JapanFG/<entity>` canonical_anchor 更新为当前 entity path；让 API 生成在写入前清理旧 `api/entries/` JSON；并把指向 `docs/` 的相对 Markdown links 从 AI surface 的 `markdown_links` 中过滤掉。Deployment / incident / maintenance runbook 也已扩展到 local build、Vercel shadow、GitHub Actions watch 和 public URL spot-check。

> AI 任务入口：v2026.06.03-5 把手动维护的 `llms-tasks.txt` 同步到当前快照。将 entry 改名 / 重组遗留的 10 个死链（涉及 money-market / derivatives / payments / policy-finance / securities / systems）逐个重映射到现存目标，并把 Snapshot 行更新为 `1,472 files / 1,411 link-audited entries / 23 domains / ~9.99M non-space chars`（2026-06-03 JST）。由于 `.txt` 不在 `wiki:audit` 范围内、这些死链此前一直潜伏，本次对全部 160 个 link target 做了实在性核对。新增 release notes 使 corpus 从 1,471 增至 1,472 files，因此重新生成了 discovery surface；由于 fresh clone 会重置所有 fs mtime，本次先从已提交的 `sitemap.xml` lastmod 恢复各页面 mtime 再重新生成，保持了既有 1,469 个页面的 lastmod。`bun tools/release.ts --check --strict` 确认 link audit PASS（entries=1411 / issues=0）、counts in sync。

> 内容整理：v2026.06.03-6 用并行 subagent 盘点了全部领域，在不改变内容质量的前提下做了整理。把 2026-05-25 扩充后 stale 的 8 个领域 INDEX（corporate-strategy / loyalty / money-market / manufacturing / retail / governance / trade / security）同步到实际 entry（补全漏列 entry、修正 `single entry` 等过时表述、清理 stale backlog）。修正了 Bun 迁移后遗留在 `SCHEMA.md` / `INDEX.md` / convention / proposal 中的 `tools/*.py` 引用为 `.ts`；纠正 `HOW-TO-NAVIGATE.md` 的 count drift（1465+/24+ → 1,400+/23）；把 5 个孤立的 convention/proposal 文档收录进 `INDEX.md` 的 Control Documents；并把 security INDEX 的 Status 列改标为 confidence。依据公开披露（已 web 核实）把 Lawson TOB 价格从错误的 ¥4,952 统一为 ¥10,360。link audit 通过 entries=1411 / issues=0，wiki 正文死链保持 0。

> 结构整理：v2026.06.03-7 用并行 subagent 落地了结构类任务 B/C/D。(B) 给 mislabel 的 governance（实为非营利 / 公益法人）和 manufacturing（实为厂商金融）INDEX 加 scope/disambiguation，把 corporate governance 路由到 finance/securities/exchanges、entity 页到 JapanFG、ABS 到 structured-finance。(C) 给 631 个 entry 扁平的 JapanFG 用 frontmatter tags 驱动新建 9 个机构类型 sub-index（megabanks-and-fg / regional-banks / cooperative-finance / trust / insurance / securities-and-asset-management / payments-cards-leasing-finance / foreign-institutions / regulators-sro-policy，分组 609 个 entry），并在 `JapanFG/INDEX` 加类型导航块 —— 零文件移动（Option A），保全所有既有链接与 URL。(D) 落地 canonical_anchor proposal 的 Phase 0：把 `canonical_anchor` 加为 SCHEMA optional 字段和 canonical key order，在 Saison / Toyota Financial Services 两个 mirror pair 设 pilot，并把 proposal 标为 status: active（Phase 1 的 audit tooling 留作后续）。link audit 通过 entries=1420 / issues=0（新 sub-index 的 wikilink 全部 resolve、零死链）。

> INDEX count 校准: v2026.06.05-4 把 root `INDEX.md` 的读者可见 domain table 同步到 disk 实数。13 个主题域（exchanges / fintech / systems / agent-economy / banking / policy-finance / insurance / finance / payments / securities / derivatives / real-estate-finance / structured-finance）比 non-INDEX `.md` 文件数各高 1，现已修正，顶部 snapshot 也更新为 1485 个 link-audited entries。wiki 正文事实、site 配置和 entry 数都不变。已确认上一版 v2026.06.05-3 的 GitHub Actions 为 `Deploy FinWiki | success`（HEAD `2a88e6c9`）。验证：domain_count_mismatches=0、`--check --strict` EXIT=0、`dead=0 / drift=0 / issues=0 / domains=40`。

> .txt 公开入口审计：2026-06-08 JST 增加了针对 AI 发现文件（llms.txt, llms-full.txt, llms-tasks.txt）的路由审计工具 `tools/txt_route_audit.ts`。该工具实现了对文本类 AI 发现面中坏链和陈旧路径的自动检测。首次审计发现了 450 多个不一致项，为后续修复阶段打下了基础。

> P2 深化（第 1 批）: v2026.06.05-3 把 JapanFG 拆分域里 110 个 <250 词登记簿存根中的 **58 个**深化成实体页（`regional-banks` 48 + `cooperative-banks` 10）——补免许种别/监管定位（银行法·信用金庫法 / FSA·财务局 / 地银协·信金中金）、机构类型业务模型、group/system 语境、每页 4+ core-body wikilink。**严守无捏造**：具体数字（设立年/证券代码/母公司等）只在 web 核实后才加，核实不了的被 agent 删除。58 个都修复了 split 残留的旧 `[[JapanFG/INDEX]]` 路由 → 各自新域 INDEX。并行 subagent（regional A/B/C 的 3 个 agent + 前批的 cooperative）。剩余 ~51 个（11 域）记入 backlog（P2 继续）。验证：`dead=0 / drift=0 / issues=0`、`--check --strict` EXIT=0。内容由 subagent 生成，事实建议抽查（ADR-006、已 spot-check）。

> P4 i18n: v2026.06.05-2 给 v12（43）+ P3（12）共 55 个 content entry 生成了 ja/zh/en 翻译镜像 **165 个文件**。**不需要密钥**——v05-1 说「`translate.mjs` 需要 `ANTHROPIC_API_KEY` 所以 P4 阻塞」是错的；那个脚本需要密钥只因它是独立程序、通过 API 调另一个 Haiku。本 release 改为 subagent（Claude 自己）直接翻译（8 并行、按域）。镜像复刻流水线格式（`source_hash=sha256(body).slice(0,16)`、`.passthrough()` schema、`status: machine`）。因 i18n 不在 link audit 内，全部 165 个镜像都验证了 `[[link]]` 目标/数字与 source byte 一致（mismatch=0）。17 个新域 INDEX 不需要镜像（landing 由 config 生成）。验证：link_mismatches=0、`--check --strict` EXIT=0（corpus 不变）；最终看 CI Astro build。

> P3 内容扩充: v2026.06.05-1 用并行 subagent 扩充 roadmap P3 最薄的两个域。`non-profit` 6→12（社会福祉 / 学校 / 医疗 / 宗教法人、公益法人会计基准、助成财团），`trade` 6→12（NEXI 贸易保险、通关关税原产地、FTA/EPA/RCEP、电子提单 MLETR、福费廷/国际保理、供应链金融）。共 +12 公开信息 entry。验证：`--check --strict` EXIT=0、entries 1473→1485 / issues=0 / dead=0 / canonical_drift=0、md=1559 / domains=40 / counts in sync。**P4（i18n 翻译）未完成**——流水线（`site/scripts/translate.mjs`）需要 `ANTHROPIC_API_KEY`，当前环境未设置。

> JapanFG 拆分收尾: v2026.06.04-5 消化 v04-4 的两项「下一步」——在 `site/src/lib/siteIndex.mjs` 的 `DOMAIN_TITLES` 给 17 个域补 ja/zh/en 显示名（站点从 slug 显示改为正式名），并把 17 个域加入 `tools/wiki_link_audit.ts` 的 domain route map（顺带把 JapanFG 过时的 `legal-financial-licenses/INDEX` 改为 `financial-licenses/INDEX`）。corpus / entity 结构不变。验证：`--check --strict` EXIT=0、entries=1473 / issues=0 / dead=0 / canonical_drift=0、domains=40、`siteIndex.mjs` import OK。

> JapanFG 拆分（23→40 领域）: v2026.06.04-4 把原本平坦的巨大 `JapanFG/` 域（约 620 entity）**物理拆分为 17 个机构类型顶级域**（megabanks / regional-banks / cooperative-banks / trust-banks / life-insurers / non-life-insurers / securities-firms / asset-managers / payment-firms / card-issuers / leasing-firms / consumer-finance / trading-company-finance / financial-conglomerates / foreign-financial-institutions / financial-regulators / financial-licenses）。移动 628 个 entity/license 文件，把约 53,600 条 `[[JapanFG/…]]` wikilink 改到新域，并同步 1,887 个 i18n 镜像（ja/zh/en）。用 9 个 sub-INDEX 成员 + frontmatter tag 自动映射 617 个，11 个人工裁定（评估见 ADR-008、`docs/04-architecture/japanfg-split-design.md`）。这是对 ADR-004 的知情推翻（承知移动成本）。**约 620 个公开 URL 改变**（旧 JapanFG/ URL 404；仅 `JapanFG/INDEX` 作为 umbrella hub 保留）。10 个并行 agent 撰写 17 个域 INDEX + 修复 35 个 missing_peer_link。验证：`--check --strict` EXIT=0、entries=1473 / issues=0 / dead=0 / canonical_drift=0、md=1545 / domains=40 / counts in sync。

> canonical_anchor Phase 2 hard requirement（drift gate）: v2026.06.04-3 完成 P1（canonical_anchor Phase 2），落地剩余的「hard requirement + audit 升 gate」。评估结论（ADR-007）：「每个 mirror 必须声明 `canonical_anchor`」**无法机械 gate**——mirror 与否是编辑判断、不可枚举（12 个已声明 mirror 里只有 4 个与 anchor 同 slug，其余 8 个异 slug，同 slug 跨域对 4/4 已声明，slug 启发式 recall≈33% 且 0 可发现 violation）。故机械 gate 落在**声明有效性（drift）**，**「mirror 必填」靠 `SCHEMA.md` + entry-authoring + review** 兜底。`tools/wiki_link_audit.ts` 加 `--fail-on-canonical-drift`（`canonical_anchor_drift>0` → EXIT=1），`tools/release.ts` 始终带此 flag，每次发布 gate drift=0；不带 flag 时仍 report-only（保持 ADR-002 默认）。验证：正例 drift=0→EXIT=0 / 负例（损坏 anchor）→EXIT=1 / 对照（无 flag）→EXIT=0，`--check --strict` EXIT=0、entries=1466 / issues=0 / canonical_drift=0、md=1538 / counts in sync。wiki 正文 `.md` 不变。

> canonical_anchor Phase 2（discovery 实体边）: v2026.06.04-2 把 canonical_anchor 从 report-only audit（Phase 1）升级为 discovery 输出里的机器可读 entity edge（Phase 2）。在 `ai-index.json` 新增 `entities[]`（把指向同一实体的页面聚成 12 条 edge：`anchor` / `anchor_url` / `anchor_resolves` / `members[relation: canonical | mirror]`），给每个 entry 加 `canonical_anchor` 字段，在 `llms-full.txt` 每个 mirror page 加 `Canonical anchor: … -> URL` 行（12 行），`llms.txt` snapshot 加 entity anchor 数行 + 面向 AI 的阅读规则。per-entry API 因是 curated subset 刻意不动（entity edge 已在 ai-index.json / llms-full.txt 完整暴露）。wiki 正文 `.md` 不变（entries=1466 保持，md 因本 release notes +1）。验证：`bun tools/release.ts --check --strict` EXIT=0、entries=1466 / issues=0、entity_anchors=12 / drift=0、counts in sync、0 lastmod 污染。

> 开发文档专业化整理: v2026.06.04-1 把 docs/ 整理为 11 文档、3 分类（参考型 / 规范·方法型 / 进度·规划型）。新增 entry-authoring.md（entry 写作规范）和 parallel-development.md（并行 subagent 开发手册）；把 roadmap/backlog/domains 更新到 v13 最新状态；decisions 加 ADR-006（并行 Agent 开发），gotchas 加 block-no-verify 误判、rate-limit/双批 两项；README 索引重组为 3 分类。docs/ 已排除出 corpus，公开计数/发现面不受影响。同时把 discovery surface 重新同步到 2026-06-04。验证：`--check --strict` EXIT=0、entries=1466 / issues=0、counts in sync。

> canonical_anchor Phase 2 back-fill: v2026.06.03-13 给 4 个 mirror page 设了 canonical_anchor（banking/au-jibun-bank→JapanFG/au-jibun-bank、insurance/kampo-japan-post-insurance→JapanFG/kampo-life、insurance/sony-life-group-life-operating-model→JapanFG/sony-life、insurance/ja-kyosai-zenkyoren-overview→JapanFG/ja-kyosairen）。每个 mirror 的 core body 都 cross-link 其 anchor 以避免 drift。canonical_anchor_checked 8→12、drift=0。保守跳过 rakuten-bank / paypay-bank / TSE 等（无同实体 JapanFG anchor，或父子≠同实体）。验证：wiki_link_audit EXIT=0、entries=1466 / issues=0、零死链。

> 并行 10 领域开发: v2026.06.03-12 按 docs/01-strategy/roadmap.md 的 P2/P3，用并行 subagent 给 10 个领域加了 46 个公开信息金融 entry（security +4、business +6、corporate-strategy +6、loyalty +6、manufacturer-finance +6、money-market +6、JapanFG +3、non-profit +3、trade +3、retail +3）。每个 agent 严格 file-scope 隔离（仅自领域）+ 验证每个 wikilink 实在性。验证：link audit entries 1420→1466 / issues=0 → PASS、零死链、md=1533 / domains=23、counts in sync、0 lastmod 污染、0 敏感数据。

> 开发进度文档 + canonical_anchor Phase 2 起步: v2026.06.03-11 (1) 在 docs/ 加 4 个进度/规划文档（roadmap / backlog / decisions(ADR) / domains），README 索引重整为「参考型 / 进度·规划型」；(2) 作为 canonical_anchor Phase 2 第一步，修复 Saison drift（在 `insurance/saison-automobile-fire` 的 core body 加指向 canonical anchor `JapanFG/saison-automobile-fire-insurance` 的 cross-link，不再仅依赖 Related footer）。验证：wiki_link_audit EXIT=0、canonical_anchor_drift 1→0、entries=1420 / issues=0、dead 0。docs/ 已排除，计数 / 发现面不受影响。

> 开发文档系统: v2026.06.03-10 在 `docs/` 新建 repo 内部开发者文档（5 个文件：README 索引 / architecture / toolchain / release-process / gotchas），汇集架构、工具链、发布 SOP、陷阱集。`docs/` 已注册进 `lib/markdown_helpers.ts` 的 `EXCLUDED_WALK_DIRS` 与 `tools/wiki_link_audit.ts` 的 `IGNORED_DIRS`，设为内部专用：不计入 corpus（md / entries 计数），也不进 sitemap / llms / ai-index / api、Astro 站点或死链审计。验证：`bun tools/release.ts --check --strict` EXIT=0、md=1485 不变（docs 5 文件不计）、entries=1420 / domains=23、sitemap / llms / ai-index 的 docs URL 均为 0。`AGENTS.md` 也三语追加 docs/ 不发布的规则。

> 领域物理改名（C-A）：v2026.06.03-9 把两个 mislabel 的领域按实体物理改名目录。`governance/` → `non-profit/`（实体是非营利・公益法人 4 页）、`manufacturing/` → `manufacturer-finance/`（实体是厂商金融・captive finance 8 页）。root + i18n（ja/zh/en）`git mv`、约 460 处 path wikilink 精确置换（`governance/…`→`non-profit/…` 等；正文词语与 historical CHANGELOG/releases 的史实记述不变）、frontmatter `domain`、site build 配置（`content.config.ts`・`siteIndex.mjs` 的 `ENTRY_DOMAIN_DIRS` + `DOMAIN_TITLES`、`i18n/groups.ts` 的 super-group）、`wiki_link_audit.ts` 的 domain 配置、root INDEX domain 表、discovery surface 全部同步。显示名为「非営利 / Non-Profit / 非营利」「製造業金融 / Manufacturer Finance / 厂商金融」。link audit 通过 entries=1420 / issues=0（死链 0）；sitemap 含 non-profit 4 / manufacturer-finance 8 个 URL，旧 `governance/`・`manufacturing/` URL 为 0，lastmod 污染 0。**公开 URL 会变**（`/zh/governance/x`→`/zh/non-profit/x` 等；旧 URL 消失而非 301）。site/ 无 node_modules 无法本地验证 Astro build，build 健全性由 GitHub Actions 验证。

> canonical_anchor 全量化：v2026.06.03-8 落地了 canonical_anchor 的 back-fill 与 Phase 1 audit。在 6 个 mirror page 上设：`manufacturer-finance/sony-group-finance-arm`→`JapanFG/sony-fg`、4 个 banking 网络银行（`ui-bank` / `daiwa-next-bank` / `sony-bank` / `gmo-aozora-net-bank`）→各自 JapanFG entity anchor、`JapanFG/japan-post-bank`→`JapanFG/yucho`（共 8 个 = Phase 0 pilot 2 + 本次 6）。给 `tools/wiki_link_audit.ts` 加了 report-only 的 canonical_anchor 整合性检查：校验每个 anchor 是否 resolve + 声明页面 core body 是否 cross-link，输出 `canonical_anchor_checked` / `canonical_anchor_drift` counter（不触碰任何现有 counter 与 exit code）。当前 checked=8 / drift=1（Saison pilot 只在 Related footer 引用 anchor；report-only 不阻塞 gate）。`bun tools/wiki_link_audit.ts --fail-on-issues` 为 EXIT=0，link audit 通过 entries=1420 / issues=0。

> 站点视觉主题：v2026.06.03-2 将 human site 的 CSS token 从暖纸面 / 赭色系改为冷灰纸面、青蓝 primary action 和低饱和辅助色。实际可复用的 theme template 是 `site/src/styles/global.css` 中 `:root` 与 `[data-theme="dark"]` 的 custom properties。

### 🚪 优先入口

| 入口 | 用途 |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | 当前生产根入口，仍由 GitHub Pages 发布；Vercel shadow deployment 配置已经放在 repository root。Astro 的 `/` 封面主页会引导读者进入 `/ja/`、`/en/`、`/zh/`、领域浏览和 AI discovery surface；root `index.html` 继续作为 repository discovery 的内容地图同步。 |
| 站内搜索 | 在 human page 的 header 使用 `搜索` / `Search` / `検索`，或按 `Ctrl/Cmd+K`。Pagefind 会在 build 后生成静态 `/pagefind/*` 索引，并在 `/ja/`、`/en/`、`/zh/` 当前语言内检索。 |
| [INDEX.md](INDEX.md) | 全库索引。按主题查找条目的主入口。 |
| [llms.txt](llms.txt) | 面向 AI / LLM 的短说明，记录入口、URL 规则、领域路径和当前数字。 |
| [llms-full.txt](llms-full.txt) | 供 AI 遍历全站的 full page manifest，包含 title、URL、source path、summary、headings、resolved wikilinks。 |
| [ai-index.json](ai-index.json) | 供程序化遍历和检索使用的 machine-readable JSON manifest。 |
| [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) | 面向 crawler、search engine、AI browser 的 discoverability surface。 |
| [SCHEMA.md](SCHEMA.md) | wiki 条目的结构、frontmatter 与管理规则。 |
| [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) | 正文 `[[wikilink]]` 密度、路径、同类项、制度背景链接与 dead target 实在性的审计报告。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | 在 Obsidian 中阅读和搜索的通用设置说明。 |
| [CHANGELOG.md](CHANGELOG.md) | 详细工作历史、同步记录、变更原因和验证结果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex 在本仓库必须遵守的本地规则。 |
| [docs/README.md](docs/README.md) | 内部开发文档唯一入口，覆盖 BRD / PRD / ARD / FSD / NFR / RTM、UI/UX principles、theme system、visual QA、下一阶段开发计划、代码/文档切合度审计、文档漂移审计、模型分工 task packet、实施、质量和运维文档。 |

### 🗺️ 内容地图

| 领域 | 目录 | 内容 |
| --- | --- | --- |
| 🏦 日本金融机构 | [JapanFG/](JapanFG/) | 大型银行、地方银行、保险公司、证券公司、银行牌照与 BaaS 边界、资金移转、预付式支付工具、电子支付手段登记、证券牌照、保险牌照与偿付能力、政策金融、支付公司、消费金融、汽车金融、外资金融机构、外国银行支店登记簿、国际证券结算机构（ICSD）、印度/泰国/澳新金融通道、澳大利亚/台湾/印尼/菲律宾/巴西通道、台湾/巴基斯坦/UBAF 剩余登记行收束、57 / 57 行外国银行支店都有独立页面或总括页面、专业信托银行、38 / 38 行信托公司都有独立页面或现有 group route、商工中金现行名称、宠物/户外/通信/旅行/租赁住宅/外资系专业保险公司、信托公司登记簿。 |
| 💳 金融科技与支付 | [fintech/](fintech/), [payments/](payments/) | 稳定币、CBDC、EPI、MiCA、GENIUS、新加坡金融管理局（MAS）、香港金融管理局（HKMA）、链上金融、银行 API、电子支付等代行业、银行 API 风险控制、发卡方/收单方/处理方分工、交换费与商户手续费、清算与结算基础设施、卡认证、BNPL 与信用购买中介边界、预付式支付工具、资金移转业、信用卡登记簿、账户直连支付、账户直连收单、二维码支付竞争、支付服务商的商户结算风险。 |
| 🪙 交易所与 VASP | [exchanges/](exchanges/) | 日本与海外加密资产交易所、集中式交易所（CEX）、去中心化交易所（DEX）、虚拟资产服务商（VASP）监管、JVCEA、托管、IEO、安全事件。 |
| ⚙️ 系统基础设施 | [systems/](systems/) | Canton、CCTP、EigenLayer、Hyperlane、BFT、跨链、L1/L2 基础设施。 |
| 🧩 智能体经济 | [agent-economy/](agent-economy/) | AI 智能体支付、x402、AP2、嵌入式钱包、智能体商务支付基础设施。 |
| 🏛️ 银行与政策金融 | [banking/](banking/), [policy-finance/](policy-finance/) | BaaS、BaaS 运营模式、网络银行、网络银行竞争地图、信托银行与托管基础设施、信托银行托管运营比较、地方银行 API 合作、JA 银行、JF 海洋银行、协同组织金融登记簿、住宅金融支援机构、信用保证、JICA、JBIC、NEXI、JOGMEC 等。 |
| 📊 金融与资本市场 | [finance/](finance/), [securities/](securities/), [money-market/](money-market/) | M&A、收购融资、激进投资者与股东沟通、TOB 与上市公司控制权、MBO 与 squeeze-out、大量持股披露、公平披露与内幕交易监管、股东提案与股东大会、资本市场、IPO 披露、证券型代币二级市场、NISA、网络券商竞争、最佳执行、SOR、PTS、PTS 流动性、信用交易与证券金融、卖空和股票借贷监管、股票借贷、主经纪业务与机构融资、承销、市场基础设施、金融商品交易业者登记簿、短期金融市场、日本央行操作。 |
| 🧾 商业与公司案例 | [business/](business/), [corporate-strategy/](corporate-strategy/) | 公开公司、公开人物、母公司背景和分拆设计。 |
| 🛡️ 安全 | [security/](security/) | 取证、供应链攻击、字节码验证、Wayback 保存验证。 |
| 🛍️ 其他产业 | [retail/](retail/), [manufacturing/](manufacturer-finance/), [insurance/](insurance/), [loyalty/](loyalty/) | 零售、制造、保险经营模型、寿险四大、损保三大、地震保险公私合作制度、保险代理与经纪、积分经济等周边领域。 |
| 📐 衍生品 | [derivatives/](derivatives/) | 日本与全球衍生品市场。利率（IRS / OIS / JGB 国债期货）、外汇（跨币种基差 / 外汇期权 / 零售外汇）、信用（CDS / 结构化债券 / EB 敲入）、股票波动率（JPX-VI）、OTC 清算基础设施（JSCC、交易报告库）、做市银行收入结构。 |
| 🏢 房地产金融 | [real-estate-finance/](real-estate-finance/) | 日本与全球房地产金融。J-REIT（前 10 大市值矩阵、发起人利益冲突、与美国 REIT 的治理对比）、证券化（CMBS / RMBS / 桥梁基金 / GK-TK SPV / 估值）、开发商融资（三井不动产 / 三菱地所 / AEON Mall / 三菱商业地产贷款）、资本化率压缩、外国投资者与税制。 |
| 🧱 结构化融资 | [structured-finance/](structured-finance/) | 日本与全球结构化融资。ABS（汽车 / 消费者 / RMBS / CMBS）、JHF MBS、CLO、不良债权证券化、项目融资 SPV（可再生能源）、飞机 / 船舶 / 基础设施融资、用于 RWA 缓释的合成型证券化、SPV 工具（TK / GK / TMK）、信用评级方法（JCR / R&I）。 |

### 🔐 公开面规则

| 可以保留 | 必须删除 |
| --- | --- |
| 公共机构、公司 IR、监管机构、法律法规、登记簿、公开新闻、公开市场信息 | 本地路径、邮箱地址、个人账户/收入/资产额、非公开对话、客户名、相手方名、内部项目名 |
| 与条目相关的公开人物、公开公司信息 | 私人判断日志、用户原话、未公开项目过程 |
| 基于公开信息整理的比较表、制度图谱、时间线、推论 | 来源本身是私有的，且匿名化后仍无法成立的笔记 |

### 🔍 使用方式

1. **从全图开始**：先打开 [INDEX.md](INDEX.md)，按主题进入对应章节。🧭
2. **优先沿正文链接深挖**：通过每篇文章正文里的 `[[wikilink]]` 进入路径、同类项、制度与监管背景。🔗
3. **区分事实和推论**：用 `confidence`、`sources`、`^[extracted]`、`^[inferred]` 判断材料可靠性。🧪
4. **更新必须留痕**：重要新增、删除、目录调整或同步后，必须更新 [CHANGELOG.md](CHANGELOG.md)。🕒

### 🛠️ 维护规则

1. **README 按日文、英文、中文的顺序排列。** 🇯🇵➡️🌐➡️🇨🇳
2. `README.md` 和 `CHANGELOG.md` 保持多语言（日文、英文、中文）同步维护。
3. 修改公开面、结构、索引、同步状态、发布或维护规则时，必须在同一轮工作里更新 `README.md`、`CHANGELOG.md`、发布说明 / GitHub Release。
4. 任何可能包含个人信息或非公开信息的内容，发布前必须删除，或改写成只基于公开信息的版本。
5. 每次 push 到 `origin/main`，都必须同步更新详细的 `README.md` / `CHANGELOG.md` / Releases。
6. 同步前后都要检查 `git status --short --branch` 与远端 HEAD。
7. push 前执行 `bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues`，不留下正文路径、同类项、制度背景链接或 wikilink target 实在性的未解决 issue。
8. 今后每次更新 wiki 内容、索引、领域数量或公开快照时，必须在同一轮工作里同步更新根目录 `index.html`，把它重写为最新内容地图。
9. 今后每次更新 wiki 内容、索引、领域数量或公开快照时，必须在同一轮工作里执行 `bun tools/generate_ai_discovery.ts`，同步更新 `robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json`。

### 📦 GitHub Releases

FinWiki 的 GitHub Releases 不是软件二进制分发，而是作为**知识库公开快照**来使用。📌

| 项目 | 规则 |
| --- | --- |
| 语言顺序 | Release body 必须日文在前，英文在中，中文在后。 |
| 标签格式 | 原则使用 `vYYYY.MM.DD`。如果同一天发布多次，用 `vYYYY.MM.DD-2` 这样的后缀区分。 |
| Release title | 只使用日文，不附其他语言标题。 |
| Release body | 必须写清楚概要、影响范围、主要变更、验证结果、已知注意事项和下一步。 |
| Push 联动 | 每次 push 到 `origin/main`，都要更新 release notes 文件和 GitHub Release。 |
| 公开面 | release notes 也不能包含个人信息、本地信息或内部案件信息。 |
| History rewrite | 如果为了删除公开面的个人信息而重写历史，必须强制更新 branch / tag，并确认 GitHub cached view / dangling commit 是否还需要 purge。 |

### 🌐 Hosting / Vercel 迁移

| 项目 | 状态 |
| --- | --- |
| 公开域名 | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| 当前 DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`，DNS only。Vercel cutover 前保持不变 |
| 当前生产 | GitHub Pages workflow，`main` push 后发布 `_site` |
| Vercel shadow 配置 | 仓库根目录 [vercel.json](vercel.json)。Install: `cd site && bun install --frozen-lockfile` / Build: `bun run vercel:build` / Output: `_vercel_public` |
| Vercel 输出 | 把 Astro HTML (`site/dist`)、Pagefind 搜索 bundle (`/pagefind/*`)、raw Markdown、`llms.txt`、`llms-full.txt`、`ai-index.json`、`sitemap.xml`、`robots.txt`、`api/entries/*.json` 组装成同一个静态输出 |
| Cutover 步骤 | 在 Vercel preview / production URL 验证 `/`、`/ja/`、`/en/`、`/zh/`、`/llms.txt`、`/ai-index.json`、`api/entries/index.json` 后，把 Cloudflare 的 `finwiki` CNAME 改到 Vercel 给出的目标 |
| Rollback | DNS 改回 `jasonhnd.github.io` 即可回到 GitHub Pages。Vercel 200 / SSL / AI surface 验证通过前保留 GitHub Pages workflow |
| 自定义域名文件 | GitHub Pages 用 `CNAME` 文件继续保存 `finwiki.zksc.io`；Vercel cutover 确认后再决定是否删除 |
| 首页 | GitHub Actions 发布 Astro 的 `/` 封面主页；root `index.html` 继续作为 repository discovery 的内容地图同步 |
| HTTPS | 当前由 GitHub Pages 处理；Vercel cutover 后确认 Vercel certificate provisioning |

### 🚀 推荐同步流程

```bash
git status --short --branch
bun tools/generate_ai_discovery.ts
bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues
bun tools/vercel_build.ts
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<日文标题>" --notes-file releases/<tag>.md
```

# FinWiki 📚💴🧭

## 日本語 🇯🇵

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、公開企業・公開人物の戦略ケースを扱う Markdown ナレッジベースです。主なリンク形式は Obsidian の `[[wikilink]]` で、全体入口は [INDEX.md](INDEX.md) です。

Homepage は人間が入口を理解するために整えていますが、wiki 本文 corpus は人間が順番に通読するためではなく、AI が読み取り、検索し、引用し、接続するための knowledge graph として設計しています。

このリポジトリは公開前提の知識ベースです。記載対象は、公開ウェブ情報、公的資料、企業開示、規制当局資料、公開市場情報、またはそれらをもとにした公開可能な整理に限定します。個人情報、ローカル環境情報、非公開会話、顧客・相手方情報、内部案件メモは置きません。

公開サイトは GitHub Pages で配信します: [finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 📊 数字で見る FinWiki

| 指標 | 現在値 | 集計口径 |
| --- | ---: | --- |
| Markdown files | 1449 | `.git` を除外し、release notes / control docs / templates を含む repository-wide `.md` files |
| Topical domains | 23 | `INDEX.md` domain map の主要テーマ領域 |
| Link-audited entries | 1411 | `tools/wiki_link_audit.py` が確認する public wiki entries |
| Unresolved link issues | 0 | body route / peer / system link audit の未解決 issue |
| Text volume | 約980万字 | Markdown 全体の空白除外 UTF-8 文字数（約 9,800,799） |
| Word-like tokens | 約156万 | English / CJK mixed corpus の近似 token count |

> 集計基準: 2026-05-30 JST 時点の current repository snapshot。公開サイトへの反映は `origin/main` push と GitHub Pages 配信後に確認します。

### 🚪 まず見る場所

| 入口 | 用途 |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | GitHub Pages の公開入口。`index.html` は、数値カード、短い紹介カード、展開式の領域カードを持つ、読みやすい現在の内容地図として更新します。 |
| [INDEX.md](INDEX.md) | 全体索引。テーマ別にエントリーを探すためのメイン入口。 |
| [llms.txt](llms.txt) | AI / LLM 向けの短い案内。entry points、URL rules、domain routes、current counts を記録します。 |
| [llms-full.txt](llms-full.txt) | AI が全公開ページを辿るための full page manifest。title、URL、source path、summary、headings、resolved wikilinks を含みます。 |
| [ai-index.json](ai-index.json) | programmatic traversal / retrieval 用の machine-readable JSON manifest。 |
| [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) | crawler / search engine / AI browser 向けの discoverability surface。 |
| [SCHEMA.md](SCHEMA.md) | wiki エントリーの構造、frontmatter、管理ルール。 |
| [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) | 本文内 `[[wikilink]]` の密度と、経路・同格・制度背景リンクの監査レポート。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Obsidian で読む・検索するための汎用セットアップ。 |
| [CHANGELOG.md](CHANGELOG.md) | 詳細な作業履歴、同期記録、変更理由、検証結果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex がこのリポジトリで守る運用ルール。 |

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
| 🛍️ その他産業 | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | 小売、製造、保険（大手生命保険 4 社、大手損害保険 3 グループ、地震保険の官民制度、保険代理店・保険仲立人）、ポイント経済などの周辺領域。 |
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
7. push 前に `python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues` を実行し、本文内の経路・同格・制度背景リンクに未解決 issue を残しません。
8. wiki 内容、索引、領域数、公開スナップショットを更新した場合は、同じ作業内で root `index.html` も現在の内容地図として更新します。
9. wiki 内容、索引、領域数、公開スナップショットを更新した場合は、同じ作業内で `python3 tools/generate_ai_discovery.py` を実行し、`robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json` を同期します。

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

### 🌐 GitHub Pages

| 項目 | 状態 |
| --- | --- |
| 公開ドメイン | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`, DNS only |
| Pages 配信元 | `main` branch `/ (root)` |
| カスタムドメイン | `CNAME` file に `finwiki.zksc.io` を保持 |
| ホームページ | `index.html` を Pages の最初に表示されるページとして使用し、wiki 更新ごとに現在の内容地図へ同期 |
| HTTPS | 証明書発行後に GitHub 側で enforce 可能になる想定 |

### 🚀 推奨同期フロー

```bash
git status --short --branch
python3 tools/generate_ai_discovery.py
python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues
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

The public site is deployed via GitHub Pages at: [finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 📊 FinWiki by the Numbers

| Metric | Current Value | Counting Basis |
| --- | ---: | --- |
| Markdown files | 1449 | Repository-wide `.md` files excluding `.git`, including release notes, control documents, and templates |
| Topical domains | 23 | Major topic areas in the `INDEX.md` domain map |
| Link-audited entries | 1411 | Public wiki entries checked by `tools/wiki_link_audit.py` |
| Unresolved link issues | 0 | Open body route / peer / system-link audit issues |
| Text volume | ~9.80M chars | ~9,800,799 non-space UTF-8 characters across Markdown |
| Word-like tokens | ~1.56M | Approximate English / CJK mixed-corpus token count |

> Counting basis: current repository snapshot as of 2026-05-30 JST. Public-site reflection is verified after push to `origin/main` and GitHub Pages deployment.

### 🚪 Primary Entrances

| Entrance | Purpose |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | GitHub Pages public entrance. `index.html` is maintained as a readable current content map with metric cards, short concept cards, and expandable domain cards. |
| [INDEX.md](INDEX.md) | Global Index. The main entrance to find entries by theme. |
| [llms.txt](llms.txt) | Short AI / LLM guide with entry points, URL rules, domain routes, and current counts. |
| [llms-full.txt](llms-full.txt) | Full page manifest for AI traversal, including title, URL, source path, summary, headings, and resolved wikilinks. |
| [ai-index.json](ai-index.json) | Machine-readable JSON manifest for programmatic traversal and retrieval. |
| [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) | Discoverability surface for crawlers, search engines, and AI browsers. |
| [SCHEMA.md](SCHEMA.md) | Schema for wiki entries, frontmatter guidelines, and maintenance conventions. |
| [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) | Audit report for body `[[wikilink]]` density plus route / peer / system links. |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | Generic setup guide for reading and searching in Obsidian. |
| [CHANGELOG.md](CHANGELOG.md) | Detailed timeline of operations, sync logs, and validation results. |
| [AGENTS.md](AGENTS.md) | Local agent rules and constraints in this repository. |

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
| 🛍️ Peripheral Industries | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | Retail groups, captive finance, insurance operating models, life / non-life comparison pages, public-private earthquake insurance, agency / brokerage, and point loyalty liabilities. |
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
5. **Wiki graph check:** Before push, run `python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues` and leave no unresolved body route / peer / system link issue.
6. **Homepage synchrony:** When wiki content, indexes, domain counts, or public snapshots change, update root `index.html` in the same work as the current content map.
7. **AI discovery synchrony:** When wiki content, indexes, domain counts, or public snapshots change, run `python3 tools/generate_ai_discovery.py` and update `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and `ai-index.json` in the same work.

### 📦 GitHub Releases

FinWiki uses GitHub Releases as **public snapshots of the knowledge base**, rather than software binary distributions. 📌

| Item | Rule |
| --- | --- |
| Language order | Release bodies are written Japanese first, English second, Chinese third. |
| Tag format | Standard `vYYYY.MM.DD`. For multiple releases on the same day, append suffixes like `vYYYY.MM.DD-2`. |
| Release title | Japanese only. Do not append English or Chinese translations in the title. |
| Release body | Explicitly state overview, affected scope, major changes, validation results, known notes, and next steps. |
| Push coupling | Every git push to `origin/main` must synchronously update the release notes file and the GitHub Release. |

### 🚀 Recommended Synchronization Flow

```bash
git status --short --branch
python3 tools/generate_ai_discovery.py
python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues
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

公开站点通过 GitHub Pages 发布：[finwiki.zksc.io](http://finwiki.zksc.io/) 🌐

### 📊 用数字看 FinWiki

| 指标 | 当前值 | 统计口径 |
| --- | ---: | --- |
| Markdown files | 1449 | 排除 `.git`，包含 release notes、控制文档、模板在内的全仓库 `.md` 文件 |
| Topical domains | 23 | `INDEX.md` domain map 中的主要主题领域 |
| Link-audited entries | 1411 | `tools/wiki_link_audit.py` 覆盖的 public wiki entries |
| Unresolved link issues | 0 | body route / peer / system link audit 的未解决 issue |
| Text volume | 约980万字 | 全库 Markdown 空白除外 UTF-8 字符数（约 9,800,799） |
| Word-like tokens | 约156万 | English / CJK mixed corpus 的近似 token count |

> 统计口径：2026-05-30 JST 当前 repository snapshot。公开站点反映会在 push 到 `origin/main` 并完成 GitHub Pages 配信后确认。

### 🚪 优先入口

| 入口 | 用途 |
| --- | --- |
| [finwiki.zksc.io](http://finwiki.zksc.io/) | GitHub Pages 公开入口。`index.html` 以数字卡、短介绍卡、可展开领域卡的形式，维护为更易读的当前内容地图。 |
| [INDEX.md](INDEX.md) | 全库索引。按主题查找条目的主入口。 |
| [llms.txt](llms.txt) | 面向 AI / LLM 的短说明，记录入口、URL 规则、领域路径和当前数字。 |
| [llms-full.txt](llms-full.txt) | 供 AI 遍历全站的 full page manifest，包含 title、URL、source path、summary、headings、resolved wikilinks。 |
| [ai-index.json](ai-index.json) | 供程序化遍历和检索使用的 machine-readable JSON manifest。 |
| [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) | 面向 crawler、search engine、AI browser 的 discoverability surface。 |
| [SCHEMA.md](SCHEMA.md) | wiki 条目的结构、frontmatter 与管理规则。 |
| [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) | 正文 `[[wikilink]]` 密度，以及路径、同类项、制度背景链接的审计报告。 |
| [OBSIDIAN-SETUP.md](OBSIDIAN-SETUP.md) | 在 Obsidian 中阅读和搜索的通用设置说明。 |
| [CHANGELOG.md](CHANGELOG.md) | 详细工作历史、同步记录、变更原因和验证结果。 |
| [AGENTS.md](AGENTS.md) | agent / Codex 在本仓库必须遵守的本地规则。 |

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
| 🛍️ 其他产业 | [retail/](retail/), [manufacturing/](manufacturing/), [insurance/](insurance/), [loyalty/](loyalty/) | 零售、制造、保险经营模型、寿险四大、损保三大、地震保险公私合作制度、保险代理与经纪、积分经济等周边领域。 |
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
7. push 前执行 `python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues`，不留下正文路径、同类项、制度背景链接的未解决 issue。
8. 今后每次更新 wiki 内容、索引、领域数量或公开快照时，必须在同一轮工作里同步更新根目录 `index.html`，把它重写为最新内容地图。
9. 今后每次更新 wiki 内容、索引、领域数量或公开快照时，必须在同一轮工作里执行 `python3 tools/generate_ai_discovery.py`，同步更新 `robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt`、`ai-index.json`。

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

### 🌐 GitHub Pages

| 项目 | 状态 |
| --- | --- |
| 公开域名 | [finwiki.zksc.io](http://finwiki.zksc.io/) |
| DNS | Cloudflare `CNAME finwiki -> jasonhnd.github.io`，DNS only |
| Pages 来源 | `main` branch `/ (root)` |
| 自定义域名 | `CNAME` 文件保存 `finwiki.zksc.io` |
| 首页 | 使用 `index.html` 作为 Pages 首页，并随每次 wiki 更新同步为当前内容地图 |
| HTTPS | GitHub 签发证书后再启用 enforce HTTPS |

### 🚀 推荐同步流程

```bash
git status --short --branch
python3 tools/generate_ai_discovery.py
python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues
git add README.md CHANGELOG.md <changed-files>
git diff --cached --stat
git commit -m "docs: ..."
git push
git ls-remote origin refs/heads/main
gh release create <tag> --target main --title "<日文标题>" --notes-file releases/<tag>.md
```

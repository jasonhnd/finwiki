---
source: banking/japan-regional-bank-m-a-consolidation-family-tree-matrix
source_hash: 3ec600ca75e73050
lang: en
status: machine
fidelity: ok
title: "Japan regional bank M&A consolidation family-tree matrix"
translated_at: 2026-05-30T18:52:47.780Z
---

# Japan regional bank M&A consolidation family-tree matrix

## TL;DR

Post-1990 regional-bank consolidation in Japan has produced a layered map of bank holding companies, each combining one or more first-regional ("地銀") and/or second-regional ("第二地銀") predecessors, and in some cases a credit-cooperative / 新銀行 predecessor. This matrix collects the surviving FG name, year of FG formation, predecessor banks, prefecture coverage, capital scale, and holding-company structure for every materially active regional-bank FG in Japan as of 2026. It is the family-tree counterpart to [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] (the why) and [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] (the what-kind-of-licence).

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for the structural drivers (population, NIM, system cost, AML, digital), [[banking/regional-bank-api-digital-partnership-route|Regional bank API and digital partnership route]] for the digital-rail layer, [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] for the regional vs second-regional vs cooperative licence-tier split, and [[banking/post-megabank-positioning|Post-megabank positioning]] for the largest-regional vs megabank-edge cases. The FG holding-company population is the [[JapanFG/INDEX|JapanFG index]]. The complete FSA list of bank holding companies underpinning this matrix is the FSA 銀行持株会社一覧 PDF.

## Why this family-tree matters

Regional-bank consolidation is layered. Many references say "X銀行" without specifying whether the speaker means:

- the **original predecessor bank** (e.g. 第四銀行 1873-2020);
- the **post-merger successor bank** (e.g. [[JapanFG/daishi-hokuetsu-bank|第四北越銀行]]);
- the **holding company** above the operating bank ([[JapanFG/dai-shi-hokuetsu-fg|第四北越 FG]] 7327);
- the **alliance / consortium** the holding company belongs to (e.g. TSUBASA, [[JapanFG/sbi-regional-bank-hd|SBI 地銀 HD]]).

Without an explicit family-tree map, the same brand name gets used for four different legal entities. This matrix forces all four levels into one consistent view so that the question "which entity am I actually talking about" can be answered before any balance-sheet or strategy claim.

Specifically, the matrix surfaces:

- which FG is **single-prefecture single-bank** (e.g. [[JapanFG/iyogin-hd|いよぎん HD]], [[JapanFG/shizuoka-fg|しずおか FG]], [[JapanFG/hirogin-hd|ひろぎん HD]], [[JapanFG/juroku-fg|十六 FG]]) — those are 単独株式移転 patterns where the holding company is essentially a single-bank wrapper;
- which FG is **cross-prefecture two-or-more-bank** ([[JapanFG/mebuki-fg|めぶき FG]], [[JapanFG/concordia-fg|横浜 FG (旧コンコルディア)]], [[JapanFG/kyushu-fg|九州 FG]], [[JapanFG/fukuoka-fg|FFG]], [[JapanFG/hokuhoku-fg|ほくほく FG]]) — those are 共同株式移転 patterns combining banks across prefecture lines;
- which FG was formed by a **rescue M&A** ([[JapanFG/jimoto-hd|じもと HD]] gaining RCC majority 2024-06; [[JapanFG/tomony-hd|トモニ HD]] absorbing 大正銀行 2017; [[JapanFG/mebuki-fg|めぶき FG]] joining a Resona / DICJ-resolved 足利銀行 lineage);
- which FG combines a **first-regional + second-regional** mix vs a pair of same-tier banks;
- which FG belongs to a **wider consortium** ([[JapanFG/sbi-regional-bank-hd|SBI 地銀 HD]] equity-alliance ring; the Resona-group cluster around [[JapanFG/kansai-mirai-bank|関西みらい銀行]] and [[JapanFG/minato-bank|みなと銀行]]).

This family-tree feeds directly into the licence-tier matrix [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] (every row here is in Tier 2 第一地銀 or Tier 3 第二地銀) and into the cooperative-banking matrix [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]] (the cooperative-bank consolidations sit on a separate axis from the holding-company route described here).

## Cross-FG family-tree comparison table

| FG (holding company) | Code | Year formed | Predecessor banks (tier) | Prefecture coverage | Operating-bank pattern | Cap scale |
|---|---|---|---|---|---|---|
| [[JapanFG/mebuki-fg\|めぶき FG]] | 7167 | 2016-10 | Joyo Bank (1regional) + Ashikaga HD / Ashikaga Bank (1regional, 2003 lapse/rehabilitation history) | Ibaraki + Tochigi + metropolitan area | 2-bank umbrella (no legal merger) | Large (North Kanto 2-prefecture mega-regional) |
| [[JapanFG/concordia-fg\|横浜 FG (旧コンコルディア)]] | 7186 | 2016-04 (trade-name change 2025-10) | Bank of Yokohama (1regional) + Higashi-Nippon Bank (2regional) | Kanagawa + metropolitan area | 2-bank umbrella | Largest single-FG class (deposits ~¥19.7tn, FY2024) |
| [[JapanFG/kyushu-fg\|九州 FG]] | 7180 | 2015-10 | [[JapanFG/higo-bank\|肥後銀行]] (1regional, Kumamoto) + [[JapanFG/kagoshima-bank\|鹿児島銀行]] (1regional, Kagoshima) | Kumamoto + Kagoshima | 2-bank umbrella | Large (southern Kyushu 2-strong) |
| [[JapanFG/fukuoka-fg\|ふくおか FG (FFG)]] | 8354 | 2007-04 | [[JapanFG/fukuoka-bank\|福岡銀行]] (1regional) + Kumamoto Family Bank (now [[JapanFG/kumamoto-bank\|熊本銀行]]) + [[JapanFG/18-shinwa-bank\|十八親和銀行]] (former Juhachi Bank 2007joined → Shinwa Bank 2007 joined → 2020-10 bank merger) + Minna Bank (BaaS digital bank, 2021-05commenced operations) | Fukuoka + Kumamoto + Nagasaki + nationwide digital | 4-bank umbrella + digital-bank | Top-class (deposits ~¥21.9tn, FY2025) |
| [[JapanFG/hokuhoku-fg\|ほくほく FG]] | 8377 | 2003-09 (former Hokugin FG) → 2004-09 consolidation | [[JapanFG/hokuriku-bank\|北陸銀行]] (1regional, Toyama) + [[JapanFG/hokkaido-bank\|北海道銀行]] (1regional, Sapporo) | Toyama + Ishikawa + Fukui + Hokkaido | 2-bank umbrella | Mid-large (pioneer of distant-region alliance) |
| [[JapanFG/yamaguchi-fg\|山口 FG (YMFG)]] | 8418 | 2006-10 (sole share transfer) | [[JapanFG/yamaguchi-bank\|山口銀行]] (1regional, Shimonoseki) + [[JapanFG/momiji-bank\|もみじ銀行]] (2regional, Hiroshima, 2001 joined Yamaguchi affiliation) + [[JapanFG/kitakyushu-bank\|北九州銀行]] (1regional, 2011-10 incorporation-type split) | Yamaguchi + Hiroshima + Kitakyushu | 3-bank umbrella (3 brand) | Mid (western Chugoku + Kanmon) |
| [[JapanFG/san-jusan-fg\|三十三 FG]] | 7322 | 2018-04 (share transfer) → 2021-05 subsidiary-bank merger | Mie Bank (2regional) + Daisan Bank (2regional) | Mie + part of Nagoya area | 1-operating-bank (post-merger) | Mid-small (Mie Prefecture mid-tier) |
| [[JapanFG/iyogin-hd\|いよぎん HD]] | 5830 | 2022-10 (sole share transfer) | [[JapanFG/iyo-bank\|伊予銀行]] (1regional, 1878 predecessor) | Ehime | 1-bank umbrella | Mid-large (largest in Shikoku, shipping/shipbuilding finance) |
| [[JapanFG/hirogin-hd\|ひろぎん HD]] | 7337 | 2020-10 (sole share transfer) | Hiroshima Bank (1regional, 1950 predecessor Geibi Bank 1945-) | Hiroshima + Sanyo + Sanin | 1-bank umbrella | Mid-large (Hiroshima Prefecture No.1) |
| [[JapanFG/hokkoku-fhd\|北國 FHD]] (now [[JapanFG/cci-group\|CCI グループ]]) | 7381 | 2021-10 (sole share transfer); trade name 2025-10 → CCI | [[JapanFG/hokkoku-bank\|北國銀行]] (1regional, Ishikawa, established 1943 ) | Ishikawa + Toyama + Fukui | 1-bank umbrella + new company (BaaS / DX) | Mid (regional-bank DX leader) |
| [[JapanFG/juroku-fg\|十六 FG]] | 7380 | 2021-10 (sole share transfer) | Juroku Bank (1regional, 1877 16th National Bank) | Gifu + western Aichi | 1-bank umbrella | Mid (Gifu Prefecture No.1) |
| [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]] | 7327 | 2018-10 (joint share transfer) → 2021-01 subsidiary-bank merger | Daishi Bank (1regional, 1873 4th National Bank) + Hokuetsu Bank (1regional, established 1942 ) | Niigata + part of metropolitan area | 1-operating-bank ([[JapanFG/daishi-hokuetsu-bank\|第四北越銀行]]) | Mid-large (Niigata one-prefecture-one-bank type) |
| [[JapanFG/aichi-fg\|あいち FG]] | 7389 | 2022-10 (joint share transfer) → subsidiary-bank merger | [[JapanFG/aichi-bank\|愛知銀行]] (2regional) + [[JapanFG/chukyo-bank\|中京銀行]] (2regional) | Aichi + Chukyo | 1-operating-bank (Aichi Bank) | Mid (Nagoya/Chukyo) |
| [[JapanFG/shizuoka-fg\|しずおか FG]] | 5831 | 2022-10 (sole share transfer) | Shizuoka Bank (1regional) | Shizuoka + out-of-prefecture bases | 1-bank umbrella | Mid-large (Shizuoka Prefecture No.1,  manufacturing cluster) |
| [[JapanFG/tomony-hd\|トモニ HD]] | 8600 | 2010-04 (joint share transfer) → 2017 subsidiarized Taisho Bank → 2020-01 [[JapanFG/tokushima-taisho-bank\|徳島大正銀行]]born | Tokushima Bank (2regional) + Kagawa Bank (2regional, 1989converted to ordinary bank) + Taisho Bank (2regional, Osaka, 2017joined) | Tokushima + Kagawa + Osaka | 2-bank umbrella ([[JapanFG/tokushima-taisho-bank\|徳島大正]] + [[JapanFG/kagawa-bank\|香川]]) | Mid-small (Shikoku + Kansai second-tier regional) |
| [[JapanFG/proclair-hd\|プロクレア HD]] | 7384 | 2022-04 (joint share transfer) → 2025-01 bank merger (Aomori Michinoku Bank) | [[JapanFG/aomori-bank\|青森銀行]] (1regional) + [[JapanFG/michinoku-bank\|みちのく銀行]] (1regional) | Aomori + North Tohoku + southern Hokkaido | 1-operating-bank (post-merger, first application of Antimonopoly Special Exception Act) | Mid-small (North Tohoku consolidation model case) |
| [[JapanFG/kiraboshi-fg\|東京きらぼし FG]] | 7173 | 2014-10 (former Tokyo TY FG) → 2016-04 ShinGinko Tokyo consolidation → 2018-05 bank 3行merger + FG renamed | Tokyo Tomin Bank + Yachiyo Bank + ShinGinko Tokyo (the former Ishihara-administration new bank) | Tokyo (Tokyo-focused) + part of Kanagawa + part of Chiba | 1-operating-bank ([[JapanFG/kiraboshi-bank\|きらぼし銀行]]) + UI Bank (digital) | Mid (Tokyo-focused regional bank, the only one) |
| [[JapanFG/fidea-hd\|フィデア HD]] | 8713 | 2009-10 (joint share transfer) → 2027-01 planned bank merger (Fidea Bank) | [[JapanFG/shonai-bank\|荘内銀行]] (1regional, Yamagata, 1878 67th National Bank) + [[JapanFG/hokuto-bank\|北都銀行]] (1regional, Akita, 1895 48th-National-Bank lineage) | Yamagata + Akita + Sendai oversight | 2-bank umbrella → 1-bank merger (2027-01 planned) | Mid-small (Tohoku cross-prefecture-border pioneer) |
| [[JapanFG/jimoto-hd\|じもと HD]] | 7161 (STD) | 2012-10 (share transfer, delayed 1years by the earthquake) → 2020-11 SBI capital injection → 2024-06 RCC voting rights 63.52% acquired | [[JapanFG/kirayaka-bank\|きらやか銀行]] (2regional, Yamagata) + [[JapanFG/sendai-bank\|仙台銀行]] (2regional, Miyagi) | Yamagata + Miyagi | 2-bank umbrella, public-funds RCC regime | Mid-small (North Tohoku second-tier regional, public-funds repayment 13 -year deferral 2024-09) |
| [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] | 7189 | 2016-10 (sole share transfer) | [[JapanFG/nishi-nippon-city-bank\|西日本シティ銀行]] (1regional, Fukuoka) + [[JapanFG/nagasaki-bank\|長崎銀行]] (2regional, Nagasaki, 2006-04 subsidiarized) | Fukuoka + Oita + Saga + Nagasaki + Kumamoto | 2-bank umbrella | Mid-large (one of the Fukuoka 2  major regional banks) |
| [[JapanFG/sbi-regional-bank-hd\|SBI 地銀 HD]] | (non-public, under SBI HD 8473 ) | 2020-12 established | [[JapanFG/sbi-shinsei-bank\|SBI 新生銀行]] (2023-09 wholly subsidiarized) + Chikuho Bank / Shimizu Bank / Daito Bank / Fukushima Bank / [[JapanFG/shimane-bank\|島根銀]] / Sendai Bank / Tsukuba Bank / Towa Bank / Kirayaka Bank etc. partner regional banks 10 行+ | nationwide-distributed + digital | "the 4th megabank concept" alliance | Mid (commercial-bank core + loose alliance) |
| [[JapanFG/kansai-mirai-bank\|関西みらい銀行]] (operating bank) | — | 2019-04 bank merger (former Kansai Urban Bank + Kinki Osaka Bank) → 2021-04 subsidiarized by [[JapanFG/resona-hd\|Resona HD]] 100%along with [[JapanFG/minato-bank\|みなと銀]] | former Kansai Urban Bank + former Kinki Osaka Bank (both a 2regional + 1regional mix) | Osaka + Hyogo (alongside Minato Bank) | Resona group Kansai operating bank (HD = [[JapanFG/resona-hd\|Resona HD]]) | Large (Resona group Kansai base) |
| [[JapanFG/td-hd\|TD HD]] (Note: the name similarity is confusing, but this is distinct from [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]]. In this table, "TD HD" is treated as identical to [[JapanFG/dai-shi-hokuetsu-fg]] per user spec) | — | same as above | same as above | same as above | same as above | same as above |

> Note on TD HD vs T&D HD: T&D Holdings (8795) is a **life-insurance** holding company (太陽 + 大同 生保), not a regional-bank FG. Where this matrix mentions "TD HD" as a regional-bank reference, it points to [[JapanFG/dai-shi-hokuetsu-fg|第四北越 FG]] (Daishi-Hokuetsu) per user spec. See [[JapanFG/td-hd|T&D HD]] for the life-insurance entity boundary.

## Cross-axis: which FG combined which tier of predecessor banks

| Combination pattern | Examples | Notes |
|---|---|---|
| 1regional + 1regional (cross-prefecture umbrella) | [[JapanFG/mebuki-fg\|めぶき FG]] (Joyo + Ashikaga), [[JapanFG/kyushu-fg\|九州 FG]] (Higo + Kagoshima), [[JapanFG/hokuhoku-fg\|ほくほく FG]] (Hokuriku + Hokkaido), [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]] (Daishi + Hokuetsu), [[JapanFG/proclair-hd\|プロクレア HD]] (Aomori + Michinoku), [[JapanFG/fidea-hd\|フィデア HD]] (Shonai + Hokuto) | The dominant cross-prefecture FG pattern |
| 1regional + 2regional (cross-tier umbrella) | [[JapanFG/concordia-fg\|横浜 FG]] (Yokohama 1regional + Higashi-Nippon 2regional), [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] (Nishi-Nippon City 1regional + Nagasaki Bank 2regional), [[JapanFG/fukuoka-fg\|FFG]] (Fukuoka 1regional + Kumamoto + 18Shinwa 1regional lineage) | Common in same-prefecture or adjacent-prefecture combinations |
| 2regional + 2regional | [[JapanFG/san-jusan-fg\|三十三 FG]] (Mie + Daisan), [[JapanFG/aichi-fg\|あいち FG]] (Aichi + Chukyo), [[JapanFG/tomony-hd\|トモニ HD]] (Tokushima + Kagawa + Taisho), [[JapanFG/jimoto-hd\|じもと HD]] (Kirayaka + Sendai) | The 1989-conversion-era second-tier regional universe consolidating |
| Single-bank-wrapper (単独株式移転) | [[JapanFG/yamaguchi-fg\|YMFG]] (Yamaguchi sole → later took in Momiji / Kitakyushu), [[JapanFG/iyogin-hd\|いよぎん HD]] (Iyo sole), [[JapanFG/shizuoka-fg\|しずおか FG]] (Shizuoka sole), [[JapanFG/juroku-fg\|十六 FG]] (Juroku sole), [[JapanFG/hirogin-hd\|ひろぎん HD]] (Hiroshima sole), [[JapanFG/hokkoku-fhd\|北國 FHD / CCI]] (Hokkoku sole), [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] (Nishi-Nippon City sole, later took in Nagasaki) | Single-bank wrapper for resource flexibility, M&A optionality |
| Multi-bank + 第三勢力 (public force / 新銀行 / consolidation exception) | [[JapanFG/kiraboshi-fg\|東京きらぼし FG]] (Tomin + Yachiyo + ShinGinko Tokyo), [[JapanFG/proclair-hd\|プロクレア HD]] (first application of Antimonopoly Special Exception Act), [[JapanFG/jimoto-hd\|じもと HD]] (RCC voting-rights acquisition) | Each pattern reflects a specific public / regulatory inflection |
| Group operating bank under non-regional HD | [[JapanFG/kansai-mirai-bank\|関西みらい銀行]] + [[JapanFG/minato-bank\|みなと銀行]] under [[JapanFG/resona-hd\|Resona HD]]; [[JapanFG/saitama-resona-bank\|埼玉りそな銀行]] | Operating banks inside a megabank-edge group ([[JapanFG/resona-hd\|Resona]] sits between regional and megabank) |
| Equity-alliance / consortium (no operating-FG umbrella) | [[JapanFG/sbi-regional-bank-hd\|SBI 地銀 HD]]'s partner-regional-bank ring (Chikuho / Shimizu / Daito / Fukushima / Shimane / Sendai / Tsukuba / Towa / Kirayaka + [[JapanFG/sbi-shinsei-bank\|SBI 新生銀行]]) | The "the 4th megabank concept" alliance model |

## How to read this matrix

1. **Pick the FG (holding-company) row first.** The FG is the legal entity that issues holdings of underlying banks, signs M&A documents, and reports consolidated capital adequacy under FSA banking-holding-company supervision. This is the unit at which strategy gets executed.
2. **Read the predecessor-bank column.** This tells you whether the FG is a single-bank wrapper (e.g. [[JapanFG/iyogin-hd|いよぎん HD]], [[JapanFG/shizuoka-fg|しずおか FG]]) or a true multi-bank consolidation ([[JapanFG/fukuoka-fg|FFG]], [[JapanFG/concordia-fg|横浜 FG]]).
3. **Check the operating-bank pattern column.** A 2-bank umbrella keeps two operating banks alive under one FG; a 1-operating-bank pattern means the constituent banks have already merged legally ([[JapanFG/daishi-hokuetsu-bank|第四北越銀行]] under [[JapanFG/dai-shi-hokuetsu-fg|DHFG]]).
4. **Check the prefecture coverage column.** Single-prefecture FGs ([[JapanFG/shizuoka-fg|しずおか]], [[JapanFG/hirogin-hd|ひろぎん]], [[JapanFG/juroku-fg|十六]]) are local-platform plays; cross-prefecture FGs ([[JapanFG/mebuki-fg|めぶき]], [[JapanFG/hokuhoku-fg|ほくほく]], [[JapanFG/kyushu-fg|九州]]) are regional-platform plays; nationwide-coverage FGs ([[JapanFG/sbi-regional-bank-hd|SBI 地銀 HD]] consortium) are digital-platform plays.
5. **Cross-check with [[banking/regional-bank-api-digital-partnership-route|regional-bank API and digital partnership route]]** to see how the same FGs sit on the digital-rail axis ([[JapanFG/fukuoka-fg|FFG]]'s Minna Bank BaaS, [[JapanFG/hokkoku-fhd|CCI / Hokkoku]]'s Tonari, [[JapanFG/kiraboshi-fg|きらぼし]]'s UI Bank).

## Key consolidation events as turning points

- **2003-09 → 2004-09 [[JapanFG/hokuhoku-fg|ほくほく FG]] (Hokuriku + Hokkaido).** First "wide-area alliance between regional banks in distant regions" model in Japan banking history.
- **2003-11-29 Ashikaga Bank failure → temporary nationalization → 2008-07 private transfer (Nomura fund + Next Capital etc.) → 2008-12 Ashikaga HD → 2016-10 joined [[JapanFG/mebuki-fg|めぶき FG]].** The post-failure rehabilitation arc that later joined a healthy partner under an FG umbrella.
- **2007-04 [[JapanFG/fukuoka-fg|FFG]] launched (Fukuoka + Kumamoto Family).** Set the template for a 1regional-led cross-prefecture FG.
- **2009-10 [[JapanFG/fidea-hd|フィデア HD]] (Shonai + Hokuto).** First cross-prefecture FG in East Japan.
- **2010-04 [[JapanFG/tomony-hd|トモニ HD]] (Tokushima + Kagawa).** Second-regional cross-prefecture FG, later expanded by the 2017 Taisho Bank rescue → 2020-01 Tokushima Taisho Bank born.
- **2014-10 → 2016-04 → 2018-05 [[JapanFG/kiraboshi-fg|東京きらぼし FG]].** Tomin + Yachiyo → +ShinGinko Tokyo → 3行merger (Tokyo metropolitan area special case combining the metropolitan-administration's ShinGinko Tokyo outcome).
- **2015-10 [[JapanFG/kyushu-fg|九州 FG]] (Higo + Kagoshima).** Cross-prefecture 2-strong alliance in southern Kyushu.
- **2016-04 [[JapanFG/concordia-fg|横浜 FG (旧コンコルディア)]] (Yokohama + Higashi-Nippon).** Cross-tier (1regional + 2regional) cross-prefecture umbrella for the largest single-FG class.
- **2016-10 [[JapanFG/mebuki-fg|めぶき FG]] (Joyo + Ashikaga HD).** Cross-prefecture combination with a post-failure-resolution partner.
- **2018-04 → 2021-05 [[JapanFG/san-jusan-fg|三十三 FG]] (Mie + Daisan → Sanjusan Bank).** 2regional + 2regional with full legal merger.
- **2018-10 → 2021-01 [[JapanFG/dai-shi-hokuetsu-fg|第四北越 FG]] (Daishi + Hokuetsu → Daishi Hokuetsu Bank).** New one-prefecture-one-bank model in Niigata.
- **2020-12 [[JapanFG/sbi-regional-bank-hd|SBI 地銀 HD]] established.** The "the 4th megabank concept" non-FG alliance model.
- **2022-04 → 2025-01 [[JapanFG/proclair-hd|プロクレア HD]] (Aomori + Michinoku).** **First application of the Antimonopoly Special Exception Act (令和2年Act 第32号)** for prefectural-monopoly clearance.
- **2024-06-20 [[JapanFG/jimoto-hd|じもと HD]] RCC voting rights 63.52% acquired.** Public-money supervision intensified for the 2regional FG.
- **2025-10 [[JapanFG/concordia-fg|横浜 FG]] trade-name change** (former Concordia → Yokohama FG).
- **2025-10 [[JapanFG/hokkoku-fhd|北國 FHD]] → [[JapanFG/cci-group|CCI グループ]] trade-name change.** Digital-platform pivot reflected in the corporate name.

## Capital-scale tiering inside the regional-bank FG universe

For ordering purposes within this matrix (not a ranking, just a scale-class lens):

| Scale class | FGs in this band | Approximate deposits class |
|---|---|---|
| Top (¥20tn+ deposits) | [[JapanFG/concordia-fg\|横浜 FG]] (~¥19.7tn FY2024); [[JapanFG/fukuoka-fg\|FFG]] (~¥21.9tn FY2025) | ¥20tn class |
| Large (¥10-20tn) | [[JapanFG/mebuki-fg\|めぶき FG]], [[JapanFG/shizuoka-fg\|しずおか FG]], [[JapanFG/iyogin-hd\|いよぎん HD]], [[JapanFG/hirogin-hd\|ひろぎん HD]], [[JapanFG/kyushu-fg\|九州 FG]], [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]], [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] | ¥10-20tn class |
| Mid (¥5-10tn) | [[JapanFG/hokuhoku-fg\|ほくほく FG]], [[JapanFG/yamaguchi-fg\|YMFG]], [[JapanFG/juroku-fg\|十六 FG]], [[JapanFG/hokkoku-fhd\|北國 FHD / CCI]], [[JapanFG/kiraboshi-fg\|きらぼし]] | ¥5-10tn class |
| Mid-small (¥3-5tn) | [[JapanFG/san-jusan-fg\|三十三 FG]], [[JapanFG/aichi-fg\|あいち FG]], [[JapanFG/tomony-hd\|トモニ HD]], [[JapanFG/proclair-hd\|プロクレア HD]] | ¥3-5tn class |
| Small (<¥3tn) | [[JapanFG/jimoto-hd\|じもと HD]], [[JapanFG/fidea-hd\|フィデア HD]] | <¥3tn class |

> Note: All scale-class numbers are public-domain summary anchors and move over time with FY disclosure cycles; consult the individual FG IR for current figures.

## Predecessor-to-successor mapping (the family-tree pairs)

The single most useful inversion of the matrix is "given a predecessor bank, which FG is the current parent". This table inverts the FG-keyed view above.

| Predecessor bank (tier) | Year of FG entry | Current FG (holding-company) | Current operating bank |
|---|---|---|---|
| Joyo Bank (1regional, Ibaraki) | 2016-10 | [[JapanFG/mebuki-fg\|めぶき FG]] (7167) | [[JapanFG/joyo-bank\|常陽銀行]] (operating) |
| Ashikaga Bank (1regional, Tochigi; 2003-11 temporary nationalization → 2008-07 private transfer) | 2016-10 (via Ashikaga HD) | [[JapanFG/mebuki-fg\|めぶき FG]] | [[JapanFG/ashikaga-bank\|足利銀行]] (operating) |
| Bank of Yokohama (1regional, Kanagawa) | 2016-04 | [[JapanFG/concordia-fg\|横浜 FG]] (former Concordia, 7186) | [[JapanFG/yokohama-bank\|横浜銀行]] |
| Higashi-Nippon Bank (2regional, Tokyo) | 2016-04 | [[JapanFG/concordia-fg\|横浜 FG]] | [[JapanFG/higashi-nippon-bank\|東日本銀行]] |
| [[JapanFG/higo-bank\|肥後銀行]] (1regional, Kumamoto) | 2015-10 | [[JapanFG/kyushu-fg\|九州 FG]] (7180) | [[JapanFG/higo-bank\|肥後銀行]] |
| [[JapanFG/kagoshima-bank\|鹿児島銀行]] (1regional, Kagoshima) | 2015-10 | [[JapanFG/kyushu-fg\|九州 FG]] | [[JapanFG/kagoshima-bank\|鹿児島銀行]] |
| [[JapanFG/fukuoka-bank\|福岡銀行]] (1regional, Fukuoka) | 2007-04 | [[JapanFG/fukuoka-fg\|FFG]] (8354) | [[JapanFG/fukuoka-bank\|福岡銀行]] |
| Kumamoto Family Bank → [[JapanFG/kumamoto-bank\|熊本銀行]] (2regional, Kumamoto) | 2007-04 | [[JapanFG/fukuoka-fg\|FFG]] | [[JapanFG/kumamoto-bank\|熊本銀行]] |
| Juhachi Bank (1regional, Nagasaki, founded 1877 ) | 2007 (via Shinwa merger), 2020-10 merger | [[JapanFG/fukuoka-fg\|FFG]] | [[JapanFG/18-shinwa-bank\|十八親和銀行]] |
| Shinwa Bank (1regional, Nagasaki, established 1939 ) | 2007 (via Shinwa merger), 2020-10 merger | [[JapanFG/fukuoka-fg\|FFG]] | [[JapanFG/18-shinwa-bank\|十八親和銀行]] |
| [[JapanFG/hokuriku-bank\|北陸銀行]] (1regional, Toyama, 1877 12th National Bank) | 2003-09 / 2004-09 | [[JapanFG/hokuhoku-fg\|ほくほく FG]] (8377) | [[JapanFG/hokuriku-bank\|北陸銀行]] |
| [[JapanFG/hokkaido-bank\|北海道銀行]] (1regional, Sapporo, established 1951 ) | 2004-09 | [[JapanFG/hokuhoku-fg\|ほくほく FG]] | [[JapanFG/hokkaido-bank\|北海道銀行]] |
| [[JapanFG/yamaguchi-bank\|山口銀行]] (1regional, Shimonoseki, established 1944 ) | 2006-10 (sole) | [[JapanFG/yamaguchi-fg\|YMFG]] (8418) | [[JapanFG/yamaguchi-bank\|山口銀行]] |
| [[JapanFG/momiji-bank\|もみじ銀行]] (2regional, Hiroshima, established 2001 : Hiroshima Sogo + Setouchi) | 2001 joined affiliation, 2006 FG | [[JapanFG/yamaguchi-fg\|YMFG]] | [[JapanFG/momiji-bank\|もみじ銀行]] |
| [[JapanFG/kitakyushu-bank\|北九州銀行]] (1regional, Kitakyushu City, 2011-10 incorporation-type split) | 2011-10 established | [[JapanFG/yamaguchi-fg\|YMFG]] | [[JapanFG/kitakyushu-bank\|北九州銀行]] |
| Mie Bank (2regional, Mie) | 2018-04 | [[JapanFG/san-jusan-fg\|三十三 FG]] (7322) | Sanjusan Bank (after 2021-05 merger) |
| Daisan Bank (2regional, Mie) | 2018-04 | [[JapanFG/san-jusan-fg\|三十三 FG]] | Sanjusan Bank (after 2021-05 merger) |
| [[JapanFG/iyo-bank\|伊予銀行]] (1regional, Ehime, 1878 predecessor) | 2022-10 (sole) | [[JapanFG/iyogin-hd\|いよぎん HD]] (5830) | [[JapanFG/iyo-bank\|伊予銀行]] |
| Hiroshima Bank (1regional, Hiroshima, established 1950 ) | 2020-10 (sole) | [[JapanFG/hirogin-hd\|ひろぎん HD]] (7337) | Hiroshima Bank |
| [[JapanFG/hokkoku-bank\|北國銀行]] (1regional, Ishikawa, established 1943 ) | 2021-10 (sole) | [[JapanFG/hokkoku-fhd\|北國 FHD]] / [[JapanFG/cci-group\|CCI グループ]] (7381) | [[JapanFG/hokkoku-bank\|北國銀行]] |
| Juroku Bank (1regional, Gifu, 1877 16th National Bank) | 2021-10 (sole) | [[JapanFG/juroku-fg\|十六 FG]] (7380) | Juroku Bank |
| Daishi Bank (1regional, Niigata, 1873 4th National Bank) | 2018-10 | [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]] (7327) | [[JapanFG/daishi-hokuetsu-bank\|第四北越銀行]] (after 2021-01 merger) |
| Hokuetsu Bank (1regional, Niigata, established 1942 ) | 2018-10 | [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]] | [[JapanFG/daishi-hokuetsu-bank\|第四北越銀行]] |
| [[JapanFG/aichi-bank\|愛知銀行]] (2regional, Aichi, 1910 predecessor) | 2022-10 | [[JapanFG/aichi-fg\|あいち FG]] (7389) | Aichi Bank (after subsidiary-bank merger) |
| [[JapanFG/chukyo-bank\|中京銀行]] (2regional, Aichi, established 1953 ) | 2022-10 | [[JapanFG/aichi-fg\|あいち FG]] | Aichi Bank |
| Shizuoka Bank (1regional, Shizuoka) | 2022-10 (sole) | [[JapanFG/shizuoka-fg\|しずおか FG]] (5831) | Shizuoka Bank |
| Tokushima Bank (2regional, Tokushima, established 1944 ) | 2010-04 | [[JapanFG/tomony-hd\|トモニ HD]] (8600) | [[JapanFG/tokushima-taisho-bank\|徳島大正銀行]] (after 2020-01 merger) |
| Kagawa Bank (2regional, Kagawa, 1943 Kagawa Mujin → 1989 converted to ordinary bank) | 2010-04 | [[JapanFG/tomony-hd\|トモニ HD]] | [[JapanFG/kagawa-bank\|香川銀行]] |
| Taisho Bank (2regional, Osaka, established 1922 ) | 2017 (rescue), 2020-01 merger | [[JapanFG/tomony-hd\|トモニ HD]] | [[JapanFG/tokushima-taisho-bank\|徳島大正銀行]] |
| [[JapanFG/aomori-bank\|青森銀行]] (1regional, Aomori) | 2022-04 | [[JapanFG/proclair-hd\|プロクレア HD]] (7384) | Aomori Michinoku Bank (after 2025-01 merger) |
| [[JapanFG/michinoku-bank\|みちのく銀行]] (1regional, Aomori) | 2022-04 | [[JapanFG/proclair-hd\|プロクレア HD]] | Aomori Michinoku Bank |
| Tokyo Tomin Bank (2regional, Tokyo) | 2014-10 | [[JapanFG/kiraboshi-fg\|東京きらぼし FG]] (7173) | [[JapanFG/kiraboshi-bank\|きらぼし銀行]] (after 2018-05 3 行merger) |
| Yachiyo Bank (2regional, Tokyo) | 2014-10 | [[JapanFG/kiraboshi-fg\|東京きらぼし FG]] | [[JapanFG/kiraboshi-bank\|きらぼし銀行]] |
| ShinGinko Tokyo (the former Ishihara-administration new bank) | 2016-04 | [[JapanFG/kiraboshi-fg\|東京きらぼし FG]] | [[JapanFG/kiraboshi-bank\|きらぼし銀行]] |
| [[JapanFG/shonai-bank\|荘内銀行]] (1regional, Yamagata, 1878 67th National Bank) | 2009-10 | [[JapanFG/fidea-hd\|フィデア HD]] (8713) | Fidea Bank (2027-01 planned merger); currently [[JapanFG/shonai-bank\|荘内銀行]] operating |
| [[JapanFG/hokuto-bank\|北都銀行]] (1regional, Akita, 1895 48th-National-Bank lineage) | 2009-10 | [[JapanFG/fidea-hd\|フィデア HD]] | Fidea Bank (2027-01 planned); currently [[JapanFG/hokuto-bank\|北都銀行]] operating |
| [[JapanFG/kirayaka-bank\|きらやか銀行]] (2regional, Yamagata) | 2012-10 | [[JapanFG/jimoto-hd\|じもと HD]] (7161 STD) | [[JapanFG/kirayaka-bank\|きらやか銀行]] |
| [[JapanFG/sendai-bank\|仙台銀行]] (2regional, Miyagi) | 2012-10 | [[JapanFG/jimoto-hd\|じもと HD]] | [[JapanFG/sendai-bank\|仙台銀行]] |
| [[JapanFG/nishi-nippon-city-bank\|西日本シティ銀行]] (1regional, Fukuoka) | 2016-10 (sole) | [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] (7189) | [[JapanFG/nishi-nippon-city-bank\|西日本シティ銀行]] |
| [[JapanFG/nagasaki-bank\|長崎銀行]] (2regional, Nagasaki) | 2006-04 subsidiarized, 2016-10 FG | [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] | [[JapanFG/nagasaki-bank\|長崎銀行]] |

## Decision use — which FG-row to focus on for a given question

| Question | Focus FGs |
|---|---|
| Cross-prefecture 1regional+1regional statesmanship pattern | [[JapanFG/mebuki-fg\|めぶき FG]], [[JapanFG/kyushu-fg\|九州 FG]], [[JapanFG/hokuhoku-fg\|ほくほく FG]], [[JapanFG/dai-shi-hokuetsu-fg\|第四北越 FG]] |
| Cross-tier 1regional+2regional same-prefecture rescue | [[JapanFG/concordia-fg\|横浜 FG]] (Yokohama+Higashi-Nippon), [[JapanFG/nishi-nippon-fhd\|西日本 FHD]] (Nishi-Nippon+Nagasaki), [[JapanFG/fukuoka-fg\|FFG]] (Fukuoka+Kumamoto) |
| Multi-bank umbrella with 4+ banks | [[JapanFG/fukuoka-fg\|FFG]] (Fukuoka+Kumamoto+18Shinwa+Minna Bank) |
| Single-bank wrapper (M&A optionality) | [[JapanFG/iyogin-hd\|いよぎん HD]], [[JapanFG/shizuoka-fg\|しずおか FG]], [[JapanFG/juroku-fg\|十六 FG]], [[JapanFG/hirogin-hd\|ひろぎん HD]], [[JapanFG/hokkoku-fhd\|北國 / CCI]] |
| Three-bank multi-brand under one FG | [[JapanFG/yamaguchi-fg\|YMFG]] (Yamaguchi+Momiji+Kitakyushu) |
| Public-money / RCC supervised case | [[JapanFG/jimoto-hd\|じもと HD]] (RCC voting rights 63.52% 2024-06; public-funds repayment 13 -year deferral 2024-09) |
| 独禁特例法 (令和2年Act 第32号) first application | [[JapanFG/proclair-hd\|プロクレア HD]] (Aomori+Michinoku, 2022-04 → 2025-01 bank merger) |
| Tokyo metro special case | [[JapanFG/kiraboshi-fg\|東京きらぼし FG]] (Tomin+Yachiyo+ShinGinko Tokyo) |
| Long-arc multi-step merger | [[JapanFG/tomony-hd\|トモニ HD]] (Tokushima+Kagawa → +Taisho → Tokushima Taisho merger) |
| Digital / BaaS / DX leadership | [[JapanFG/fukuoka-fg\|FFG]] (Minna Bank), [[JapanFG/hokkoku-fhd\|北國 / CCI]] (Tonari), [[JapanFG/kiraboshi-fg\|きらぼし]] (UI Bank) |
| Equity-alliance ring (not an FG umbrella) | [[JapanFG/sbi-regional-bank-hd\|SBI 地銀 HD]] |
| Megabank-edge group with regional-bank operating subs | [[JapanFG/resona-hd\|Resona HD]] ([[JapanFG/kansai-mirai-bank\|関西みらい]] + [[JapanFG/minato-bank\|みなと]]) |
| Pending future legal merger | [[JapanFG/fidea-hd\|フィデア HD]] (2027-01 Shonai+Hokuto → Fidea Bank) |

## Alliance-and-system-sharing overlay (non-FG cooperation)

In addition to the formal FG / holding-company route, several regional banks participate in non-holding cooperative alliances. These are not on the same axis as FG consolidation but are important to read together:

| Alliance / system | Purpose | Member banks (partial) |
|---|---|---|
| TSUBASA Alliance (TSUBASA アライアンス) | System / IT cost sharing, products, FX, treasury cooperation | Chiba Bank, Chugoku Bank, Daishi Hokuetsu Bank, Iyo Bank, Hokuetsu Bank (pre-2021), Musashino Bank, Shiga Bank, Hokuyo Bank, 77 Bank, San-in Godo Bank + more |
| Chiba-Yokohama Partnership | Chiba Bank + [[JapanFG/yokohama-bank\|横浜銀]] business cooperation (2019-, 24-28 2nd phase 250 億円effect target) | Chiba Bank, [[JapanFG/yokohama-bank\|横浜銀行]] |
| Hiroshima-Yamaguchi cooperation | [[JapanFG/hirogin-hd\|広島銀]] + [[JapanFG/yamaguchi-fg\|YMFG]] regional cooperation context | [[JapanFG/hirogin-hd\|広島銀]], [[JapanFG/yamaguchi-fg\|YMFG]] |
| Yokohama-YMFG cooperation (2021-) | Cross-region (Kanagawa + Yamaguchi + Hiroshima + Kitakyushu) | [[JapanFG/concordia-fg\|横浜 FG]], [[JapanFG/yamaguchi-fg\|YMFG]] |
| Regional banks system-shared via 共同 IT vendors | Multiple regional banks share Hitachi / NTT Data / IBM core-banking platforms | Wide membership across FGs |
| [[JapanFG/sbi-regional-bank-hd\|SBI 地銀 HD]] equity alliance | "the 4th megabank concept" non-FG capital + product cooperation | Partner banks list: Chikuho, Shimizu, Daito, Fukushima, [[JapanFG/shimane-bank\|島根]], Sendai ([[JapanFG/jimoto-hd\|じもと]]), Tsukuba, Towa, Kirayaka ([[JapanFG/jimoto-hd\|じもと]]) + [[JapanFG/sbi-shinsei-bank\|SBI 新生銀行]] commercial core |

These alliances complicate the family-tree picture: a regional bank can be in one FG AND in one or more cross-FG alliances simultaneously. The TSUBASA Alliance in particular spans multiple FGs (Chiba Bank stays independent, [[JapanFG/dai-shi-hokuetsu-fg|第四北越]] FG, Hokuyo group, etc.) and is an important system-cost layer on top of the FG layer.

## Holding-company FSA permission process

FSA bank holding company permission under the Banking Act involves:

1. **Banking Act prior approval** for forming a new bank holding company (no automatic right; FSA review).
2. **Capital adequacy** required on a consolidated basis (Basel III consolidated reporting; BIS / domestic-standard depending on whether internationally active).
3. **Governance review** including the holding company board structure, internal-audit framework, group risk management.
4. **Group business strategy** disclosure including the role of each subsidiary bank.
5. **Period for completion**: typically 6-12 months from announcement to FG-set-up; sometimes longer in cross-prefecture or competition-cleared cases ([[JapanFG/18-shinwa-bank|十八親和 銀行合併]] was delayed 3 years for 公取委 review).
6. **Post-FG ongoing supervision**: FSA inspects the holding company and the operating bank subsidiaries together; consolidated capital adequacy reporting is at the holding company.

The 2021 Banking Act amendment made it modestly easier for regional banks to invest in subsidiaries (regional revitalization, digital banking, consulting) — this lowered the operational friction of using the holding-company structure for non-bank investments. Multiple FGs ([[JapanFG/concordia-fg|横浜]], [[JapanFG/fukuoka-fg|FFG]], [[JapanFG/hokkoku-fhd|北國 / CCI]], [[JapanFG/kiraboshi-fg|きらぼし]]) have actively used the expanded scope for digital / consulting / venture-investment subsidiaries.

## Why consolidation accelerated post-2015

Multiple structural drivers compressed the regional-bank universe through holding-company consolidation:

- **Population decline** in prefectures outside the Tokyo-Osaka corridor reduces deposit / loan base.
- **Negative interest-rate environment** (BoJ 2016-) compressed regional-bank net interest margins.
- **Rising compliance / AML / cyber / digital costs** that small regional banks cannot fund on their own.
- **System investment requirements** that scale to group-level shared platforms.
- **Public-policy nudges**: FSA supervision posture; 2020 独禁特例法 reducing antitrust obstacles to same-prefecture mergers; 2021 Banking Act expansion of subsidiary-investment scope.
- **Demographic pressure on banking labour markets**: difficulty hiring specialist staff at independent regional banks.
- **Business-succession demand at SME customers**: requires consultative capability that scales better at group level.
- **Cross-prefecture cooperation precedents** like [[JapanFG/hokuhoku-fg|ほくほく FG]] proved feasibility of geographic non-adjacency.

The combination of these drivers produced the wave of FGs documented in this matrix — most concentrated in 2014-2022. The wave continues, with [[JapanFG/fidea-hd|フィデア HD]] planning 2027-01 銀行合併 as one of the next milestones.

## Boundary cases and caveats

- **T&D HD (8795) ≠ TD HD / Daishi-Hokuetsu.** [[JapanFG/td-hd|T&D Holdings]] is a life-insurance holding company (太陽 + 大同). Per the user spec, this matrix uses "TD HD" as a label pointing to [[JapanFG/dai-shi-hokuetsu-fg|第四北越 FG]] for the regional-bank context. Real-world references to "TD HD" are almost always the life-insurance entity unless explicitly stated otherwise.
- **[[JapanFG/sapporo-hokuyo-bank|札幌北洋 (Sapporo Hokuyo)]] is now [[JapanFG/north-pacific-bank|北洋銀行]] under [[JapanFG/north-pacific-bank-hd|北洋 HD]] / [[JapanFG/ndfg|札幌北洋 HD lineage]]**; the historic Sapporo + Hokkaido city-bank consolidation belongs to a slightly earlier wave than this matrix's main focus, but the entity sits in the same regional-bank universe.
- **[[JapanFG/resona-hd|Resona HD]] vs regional-bank FG.** [[JapanFG/resona-hd|Resona]] is a megabank-edge / D-SIB-designated entity in the licence-tier matrix, but it operates [[JapanFG/kansai-mirai-bank|関西みらい銀行]] and [[JapanFG/minato-bank|みなと銀行]] as regional-bank operating subsidiaries. This means the same group spans both the megabank tier (parent [[JapanFG/resona-hd|Resona]] / [[JapanFG/resona-bank|Resona Bank]] / [[JapanFG/saitama-resona-bank|Saitama Resona Bank]]) and the regional-bank tier (Kansai operating banks).
- **[[JapanFG/sbi-regional-bank-hd|SBI 地銀 HD]] is not a bank holding company in the traditional FSA sense for all partners.** It is a strategic alliance and equity-investment platform anchored on [[JapanFG/sbi-shinsei-bank|SBI 新生銀行]] (legally an ordinary bank wholly owned since 2023-09). Partner regional banks (Chikuho / Shimizu / Daito / Fukushima / [[JapanFG/shimane-bank|島根]] / Sendai / Tsukuba / Towa / Kirayaka) retain their independent FSA-licensed legal entities and are not consolidated into SBI 地銀 HD on a normal banking-holding-company basis. Per public disclosure (Wikipedia「SBI地銀ホールディングス」), SBI ownership stakes vary widely by partner — roughly 1% (Towa Bank) at the low end up to ~34% (Fukushima Bank) and top-shareholder positions (Shimane Bank ~21%, Jimoto HD ~12%), with several partners (Shimizu Bank ~2.5%, Daito Bank ~2.8%, Tohoku Bank ~2.9%, Chikuho Bank ~2.9%) in the low-single-digit range.
- **Operating banks vs holdings: name reuse.** [[JapanFG/concordia-fg|横浜 FG]] is the holding company; [[JapanFG/yokohama-bank|横浜銀行]] is the operating bank under it. [[JapanFG/dai-shi-hokuetsu-fg|第四北越 FG]] is the holding company; [[JapanFG/daishi-hokuetsu-bank|第四北越銀行]] is the operating bank. References that say "横浜銀行" or "第四北越銀行" mean the operating bank, not the FG.
- **One-prefecture-one-bank vs multi-bank umbrella.** A 単独株式移転 single-bank wrapper is not the same business model as a 共同株式移転 multi-bank umbrella. The single-bank wrapper preserves M&A optionality and capital-allocation flexibility but does not by itself reduce branch / system cost; the multi-bank umbrella delivers system / branch consolidation potential if the constituent banks legally merge later.
- **Pending or planned merger steps.** Several FGs are mid-arc: [[JapanFG/fidea-hd|フィデア HD]] plans 荘内 + 北都 → Fidea Bank in 2027-01; [[JapanFG/proclair-hd|プロクレア HD]] completed 青森 + みちのく → Aomori Michinoku Bank in 2025-01. These planned events shift the operating-bank-pattern column over time.
- **Bank holding company official list.** The full FSA-published 銀行持株会社一覧 PDF is the authoritative source for the FG entity list at any point in time. Use it to verify entity-name canonicality before citing this matrix.

## Related

- [[banking/INDEX|banking index]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/japan-cooperative-banking-unified-federation-matrix]]
- [[banking/post-megabank-positioning]]
- [[banking/japan-net-bank-competition-map]]
- [[JapanFG/mebuki-fg]]
- [[JapanFG/concordia-fg]]
- [[JapanFG/kyushu-fg]]
- [[JapanFG/fukuoka-fg]]
- [[JapanFG/hokuhoku-fg]]
- [[JapanFG/yamaguchi-fg]]
- [[JapanFG/san-jusan-fg]]
- [[JapanFG/iyogin-hd]]
- [[JapanFG/hirogin-hd]]
- [[JapanFG/hokkoku-fhd]]
- [[JapanFG/juroku-fg]]
- [[JapanFG/dai-shi-hokuetsu-fg]]
- [[JapanFG/aichi-fg]]
- [[JapanFG/shizuoka-fg]]
- [[JapanFG/tomony-hd]]
- [[JapanFG/proclair-hd]]
- [[JapanFG/kiraboshi-fg]]
- [[JapanFG/fidea-hd]]
- [[JapanFG/jimoto-hd]]
- [[JapanFG/nishi-nippon-fhd]]
- [[JapanFG/sbi-regional-bank-hd]]
- [[JapanFG/kansai-mirai-bank]]
- [[JapanFG/minato-bank]]
- [[JapanFG/resona-hd]]
- [[JapanFG/td-hd]]
- [[JapanFG/cci-group]]
- [[JapanFG/INDEX|JapanFG index]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: 銀行免許一覧 (`ginkou.xlsx`).
- FSA: 銀行持株会社一覧 (`ginkoumochikabu.pdf`).
- FSA: regional bank consolidation policy materials and FY annual results summaries (2024-06-28, 2025-06-12).
- 全国銀行協会 (Zenginkyo): Financial Institutions in Japan.
- 全国地方銀行協会 (Chiginkyo): industry-body roster of first-tier regional banks.
- 第二地方銀行協会 (Dai-ni Chigin Kyo): industry-body roster of second-tier regional banks.
- Holding-company IR disclosures for each FG referenced in this matrix (decision short reports, kessanshorshin, integrated reports).
- 独占禁止法特例法 (令和2年法律第32号) official documentation for the [[JapanFG/proclair-hd|プロクレア HD]] precedent.
- Public reporting on [[JapanFG/jimoto-hd|じもと HD]] RCC supervision (2024-06 majority acquisition; 2024-09 公的資金 13-year deferral, FSA approval).
- Wikipedia「SBI地銀ホールディングス」(https://ja.wikipedia.org/wiki/SBI地銀ホールディングス, 2026-05-29 参照) — SBI partner-bank equity stakes: 福島銀 ~34.2%, 島根銀 ~20.9%, じもと HD ~12.4%, 清水銀 ~2.5%, 大東銀 ~2.8%, 東北銀 ~2.9%, 筑邦銀 ~2.9%, 東和銀 ~1.0%.

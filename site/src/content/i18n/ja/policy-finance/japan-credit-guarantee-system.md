---
source: policy-finance/japan-credit-guarantee-system
source_hash: c9b2db821694efdb
lang: ja
status: machine
fidelity: ok
title: "日本の信用保証制度"
translated_at: 2026-06-19T06:09:18.123Z
---

# 日本の信用保証制度

## Wiki route

この項目は [[policy-finance/INDEX|policy-finance index]] の下に、中小企業金融のメカニズム・ページとして位置する。調整機関の観点として [[policy-finance/national-federation-credit-guarantee-corporations|Japan Federation of Credit Guarantee Corporations (JFG)]] と、より広範なパーィミターとして [[policy-finance/japan-policy-finance-system|Japan policy finance system]] と、セクター別のカウンターパートとして [[policy-finance/agriculture-credit-guarantee-system|agriculture]]／[[policy-finance/fisheries-credit-guarantee-system|fisheries]] と併せて読むこと。地域の例には [[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]]、[[policy-finance/tokyo-credit-guarantee-corp|Tokyo CGC]]、[[policy-finance/osaka-credit-guarantee-corp|Osaka CGC]]、[[policy-finance/aichi-credit-guarantee-corp|Aichi CGC]]、[[policy-finance/hyogo-credit-guarantee-corp|Hyogo CGC]] が含まれる。

## TL;DR

日本の信用保証制度（信用保証制度）は、日本における中小企業および小規模事業者の資金調達を支える公的信用インフラである。これは階層化されたシステムである：(1) 51 の都道府県／市レベルの**信用保証協会**（Credit Guarantee Corporations, CGCs）が、金融機関からの適格な中小企業の借入を保証する；(2) **全国信用保証協会連合会**（JFG）が 51 の CGC を調整し、責任共有の負担をプールする；(3) **信用保険**（credit insurance）の層は [[financial-regulators/jfc|Japan Finance Corporation (JFC)]] によって運営され、CGC の保証を再保険することで、最終的な残余損失が CGC の層を崩壊させるのではなく公的信用インフラに帰着するようにする。これらを合わせて**信用補完制度**（credit-supplementation system）となる。これは単一の貸し手ではない；公的信用のアーキテクチャである。2020–2022 の ZeroZero 融資（実質無利子・無担保融資）特別プログラムはこのシステムを通じて運用され、代位弁済のサイクルにおいて 2024–2026 へと引き続きアンワインドしている。

## 1. システム・アーキテクチャ（信用補完制度のスタック）

| Layer | Role | FinWiki route |
|---|---|---|
| 中小企業／小規模事業者の借り手 | 金融機関および保証ルートを通じて事業資金を申請する。 | ここのシステム・ルート |
| 金融機関（貸し手） | 融資を実行し、該当するスキームの下で責任を共有する。 | 該当する [[banking/regional-bank-consolidation-pattern]] ／ 信用金庫 ／ 信用組合のページ |
| 地域の信用保証協会（51） | 適格な中小企業の債務を保証する；代位弁済／回収を処理する。 | このシステム + 戦略的な場合の地域 CGC ページ（例：[[policy-finance/hokkaido-credit-guarantee-corp]]） |
| 全国信用保証協会連合会（JFG） | 51 の CGC を調整する；責任共有システムの財務フローを管理する。 | [[policy-finance/national-federation-credit-guarantee-corporations]] |
| 信用保険（credit insurance）— JFC | CGC の保証を再保険する；CGC の代位弁済後の残余損失を吸収する。 | [[financial-regulators/jfc]] |
| 経済産業省（METI）／中小企業庁（SME Agency） | 政策監督者；プログラム設計、適格性、危機モードの授権を設定する。 | [[policy-finance/INDEX]] |
| 都道府県／市町村 | 地方自治体 — 地域プログラムを共同出資し、地域緊急事態を指定し、補助金を提供する。 | 地方自治体のルート |

したがってこのシステムは**垂直的な公的信用パイプライン**である：借り手 → 貸し手 → 地域 CGC（ファースト・ロス）→ JFG の調整 → JFC 信用保険（再保険）→ METI の政策バックストップ。

## 2. 機関概要 — 地域の信用保証協会

| 項目 | 内容 |
|---|---|
| 法令 | 信用保証協会法 (1953) |
| 法的形態 | 特別法上の認可法人 (special-law authorized entities; public-credit institution) |
| 数 | 51 (47都道府県 + 4市 — 横浜市・川崎市・名古屋市・岐阜市) |
| 所管 | 経済産業省 (METI) / 中小企業庁 (SME Agency) / 都道府県 |
| 共通 ANCHOR | 全国信用保証協会連合会 (JFG) |
| 再保険 | JFC 信用保険業務 |

## 3. 主要保証商品 (system-level menu)

- **一般保証** — **責任共有制度**（responsibility-sharing system；通常のプログラムでは典型的に 80% 保証／20% 貸し手保有）の下での標準的な中小企業の銀行融資保証。
- **マル経保証** — 小規模事業者経営改善資金保証（商工会・商工会議所推薦案件）。
- **創業関連保証** — スタートアップ／新規事業保証。
- **事業承継特別保証** — 事業承継保証。
- **経営革新等支援保証** — 経営革新／事業転換保証。
- **借換保証** — 借換／統合保証。
- **流動資産担保融資保証 (ABL)** — 売掛債権／在庫担保保証。
- **セーフティネット保証 (1号〜8号)** — 業種の苦境の指定事象保証で、強化された条件を伴う。（§5 を参照。）
- **危機関連保証** — 国家緊急事態の枠組み；宣言された危機において最大 100% 保証。
- **災害関係保証** — 災害復旧保証。
- **新型コロナウイルス感染症対応 ZeroZero 融資** — コロナ禍の実質無利子・無担保特別保証（2020-05 の立ち上げ；2021-03に新規組成を停止；2026+ を通じてサービシング／アンワインドが継続）。（§6 を参照。）

## 4. 保証比率のメカニクス (責任共有制度)

**責任共有制度**（responsibility-sharing system）— 2007-10 に導入 — は、100% 保証ではなく、定められた割合のリスクを貸し付ける金融機関に残す：

- **標準（一般保証, 通常）**：CGC が融資の **80%** を保証する；貸し手が **20%** の残余リスクを保有する（またはパリパス損失分担バリアント）。これは 2007 以降のデフォルトである。
- **全部保証（100%）の例外**：特定の政策プログラム（セーフティネット 1号・2号・3号、危機関連保証、条件付きの創業、条件付きのマル経、危機設計における ZeroZero）は、貸し手保有なしの 100% 保証を保持する。
- **パリパス損失分担バリアント**：責任共有制度の下で、貸し手は (a) 80% 保証構造、または (b) CGC と貸し手が定められた算式の下で損失をパリパスに分担する損失分担構造のいずれかを選択できる。

責任共有の 2007 導入は、2007 以前の 100%保証レジームにおけるモラルハザードへの懸念の後、貸し手の審査規律を回復するための意図的な政策シフトであった。

## 5. セーフティネット保証プログラム (セーフティネット保証)

**セーフティネット保証**の枠組みには 8 の番号付きの指定があり、それぞれ異なる苦境のシナリオをカバーし、強化された条件（しばしば 100% 保証 + 借り手の通常の保証枠の外の別枠）を提供する：

- **1号** — 大企業の再編の影響（下流の中小企業に影響を与える大企業の破綻／再編に基づく METI からのみなし事象）。
- **2号** — 大企業の事業ショック（例：サプライチェーンへの影響を伴う工場閉鎖）。
- **3号** — 銀行の破綻／金融機関の清算による借り手中小企業への影響。
- **4号** — 自然災害／広域緊急事態（台風、地震、洪水について頻繁に発動）。
- **5号** — 業界全体の構造的苦境；マクロ／金融状況に基づき METI が四半期ごとに特定の業種を指定する。（インフレ／パンデミック／エネルギー・ショック期に多用される。）
- **6号** — 金融機関の破綻（3号 からの特定の範囲）。
- **7号** — 協同組織金融への影響を伴う大企業の再編。
- **8号** — RCC（整理回収機構）の請求の影響。

**危機関連保証**（セーフティネットとは別）は、100% 保証を伴うより広範な国家緊急事態の枠組みであり、稀な全国的危機の指定（COVID-19, 2008 GFC 同等の閾値など）においてのみ発動される点に注意。

## 6. ZeroZero 融資のアンワインド状況 (2020 → 2026)

**ZeroZero 融資**（実質無利子・無担保融資）プログラムは、COVID-19 への中心的な危機金融対応であった：

| Phase | Period | Status |
|---|---|---|
| 組成の立ち上げ | 2020-03 → 2020-07 | METI が 2020-05に信用保証制度を通じて民間部門の ZeroZero を開始する；数か月で兆円規模に達する急速な利用。JFC は並行する ZeroZero プログラムを直接運営する。 |
| 持続的な組成 | 2020-08 → 2021-03 | 全国の 51 の CGC を通じた大規模な保証組成の継続。 |
| 組成の終了 | 2021-03 → 2022 | 民間部門の ZeroZero が新規申請を停止（狭いカテゴリーについては限定的な延長を伴う）。JFC の ZeroZero も同様に 2022 を通じて終了。 |
| 据置期間 | 2020 の組成 + 3年の据置 | 借り手は典型的に元本据置期間を有していた（一般に元本については最大 5 年で、初期期間中は利子補給を伴う）。2020ヴィンテージの融資の大半は 2023–2024を通じて返済開始に入った。 |
| 代位弁済の波 | 2023–2026 | 返済開始がトリガーとなると、CGC による代位弁済（代位弁済）が立ち上がる。複数の業界紙の報道が、2023 後半以降の全国的な代位弁済（代位弁済）量の明確な増加を示している。 |
| ポストコロナの出口枠組み | 2022–2025 | METI／中小企業庁が、ZeroZero 借り手のワークアウト／リファイナンス（借換保証／経営改善の商品提供；「事業者ごとの粘り強い支援」のフレーミング）に関する統一的なガイダンスについて JFG と調整した。 |
| 継続的なテール | 2026+ | 残りの 2020ヴィンテージの融資が返済を完了するにつれて代位弁済のテールが伸びる；破産統計は 2024–2026を通じて ZeroZero 関連の破産を追跡対象のサブカテゴリーとして示している。 |

ZeroZero のアンワインドは、信用保証制度にとって**近年を特徴づけるストレス事象**であり、全国の CGC の代位弁済統計に表れている。アンワインドの地域レベルのカバレッジは、戦略的な場合に [[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]] およびその他の地域ページに表れる。

## 7. 資金源

各地域の CGC は、次の組み合わせを通じて資本が拠出される：

- **国（国）の拠出** — METI／中小企業庁の資本および補助金。
- **都道府県／市（都道府県・市）の拠出** — 地方自治体の資本；地域の中小企業政策の優先度を反映する。
- **貸し手の拠出（金融機関拠出）** — 提携銀行／信用金庫／信用組合がそれぞれの地域 CGC に資本を拠出する。
- **保証料収入（保証料）** — 保証元本に対する年率で、典型的には一桁台前半パーセントの範囲（政策プログラムの補助金を伴う）。
- **連合会のプール基金** — システム・レベルの調整を裏付ける JFG 管理の準備金。
- **JFC 信用保険** — [[financial-regulators/jfc|JFC 信用保険業務]] の勘定を通じた代位弁済事象に対する再保険の補填。

**公的信用のリスク負担のウォーターフォール**は：借り手からの回収 → CGC の準備金 → JFC の再保険 → 国の財政バックストップ、である。

## 8. デフォルト／代位弁済のフロー

1. 借り手が保証付き融資をデフォルトする。
2. 貸し手が保証の下で請求する；CGC は保証部分について貸し手に**代位弁済（subrogation）**を支払う（責任共有の下で典型的に 80%；危機スキームの下で 100%）。
3. CGC は借り手／担保／個人保証人に対して**求償（recovery）**を追及する。
4. CGC は信用保険契約の下で JFC に保険請求を行う；JFC は CGC に保険金を支払う。
5. 残余損失（回収 + JFC 保険の後）は CGC の準備金によって吸収される；準備金の枯渇が懸念される場合、連合会／国の資本注入がバックストップする。

回収率は地域、セクター、担保の種類によって異なる — 都市部の CGC（東京、大阪）は、商業用不動産および設備のセカンダリー市場が厚いため、地方の CGC（北海道、東北、九州の地方）よりも典型的に高い回収率を有する。

## 9. 年次の変遷

| Year | Event |
|---|---|
| 1937 | 東京信用保証協会 — 最初の信用保証協会が設立される。 |
| 1953 | 信用保証協会法 制定；全国的な CGC 枠組み。 |
| 1958 | 中小企業信用保険公庫 設立（後に JFC に統合）。 |
| 2007-10 | 責任共有制度 導入 — 100% 保証から 80% ／ 20% 貸し手保有へとデフォルトとして移行。 |
| 2008–2009 | GFC 緊急対応 — セーフティネット 5号 が広く発動；緊急保証プログラム（近未来 100% 枠組み）。 |
| 2011 | 東北地震 — 災害関係保証 + 4号 が広く発動。 |
| 2020-05 | ZeroZero（実質無利子・無担保）民間部門プログラムが CGC システムを通じて開始。 |
| 2021-03 | ZeroZero 民間部門の組成が終了（限定的な延長を伴う）。 |
| 2023+ | 2020ヴィンテージの据置期間が終了するにつれて ZeroZero の代位弁済の波が立ち上がる。 |
| 2024–2025 | ワークアウト／借換の商品ミックスの拡大；「粘り強い支援」のフレーミング。 |
| 2025 | 継続的なアンワインド；破産統計は ZeroZero 関連のサブカテゴリーのテールを示す。 |

## 10. 境界事例

- **システム vs 連合会** — このページはメカニズムを説明する；[[policy-finance/national-federation-credit-guarantee-corporations]] は全国の調整機関を説明する。
- **保証 vs 融資** — CGC は信用を保証する；融資は金融機関によって行われる。CGC は貸し手ではない。
- **システム vs 単一の CGC** — このページはシステムをカバーする；地域 CGC ページは特定の都道府県／市の協会をカバーする。
- **中小企業 vs 農業／漁業** — 農業は [[policy-finance/agriculture-credit-guarantee-system]] を用いる；漁業は [[policy-finance/fisheries-credit-guarantee-system]] を用いる。
- **CGC vs JFC の直接貸付** — JFC は中小企業に直接融資も行う；CGC システムは直接貸付プログラムではなく、民間貸付に対する保証のメカニズムである。

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/national-federation-credit-guarantee-corporations]]
- [[policy-finance/agriculture-credit-guarantee-system]]
- [[policy-finance/fisheries-credit-guarantee-system]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/hokkaido-credit-guarantee-corp]]
- [[policy-finance/tokyo-credit-guarantee-corp]]
- [[policy-finance/osaka-credit-guarantee-corp]]
- [[policy-finance/aichi-credit-guarantee-corp]]
- [[policy-finance/hyogo-credit-guarantee-corp]]
- [[financial-regulators/jfc]]
- [[financial-regulators/shoko-chukin]]
- [[banking/shinkin-bank-registry-japan]]
- [[banking/credit-cooperative-registry-japan]]
- [[banking/regional-bank-consolidation-pattern]]
- [[INDEX|FinWiki index]]

## Sources

- 全国信用保証協会連合会、「信用保証協会と信用保証制度」(https://www.zenshinhoren.or.jp/guarantee-system/)。
- 全国信用保証協会連合会、「信用保証制度を支えるしくみ」(https://www.zenshinhoren.or.jp/guarantee-system/hokan/)。
- 全国信用保証協会連合会、「ご利用条件」(https://www.zenshinhoren.or.jp/guarantee-system/riyojoken/)。
- 中小企業庁、「中小企業の資金繰り支援」(https://www.chusho.meti.go.jp/kinyu/shikinguri/index.html)。
- 中小企業庁、セーフティネット保証 1号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_1gou.html)。
- 中小企業庁、セーフティネット保証 2号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_2gou.html)。
- JFC、中小企業金融のページ (https://www.jfc.go.jp/n/finance/sme/index.html)。

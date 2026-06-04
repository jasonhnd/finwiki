---
source: policy-finance/japan-credit-guarantee-system
source_hash: 81dceee92ff7c1de
lang: ja
status: machine
fidelity: ok
title: "日本の信用保証制度"
translated_at: 2026-06-03T00:53:08.349Z
---
# 日本の信用保証制度

## ウィキ上の位置づけ

この項目は[[policy-finance/INDEX|policy-finance index]]の下に置かれる、中小企業金融メカニズムのページである。調整機関の視点は[[policy-finance/national-federation-credit-guarantee-corporations|Japan Federation of Credit Guarantee Corporations (JFG)]]、より広い周辺領域は[[policy-finance/japan-policy-finance-system|Japan policy finance system]]、セクター別の対応項目は[[policy-finance/agriculture-credit-guarantee-system|agriculture]] / [[policy-finance/fisheries-credit-guarantee-system|fisheries]]と照らして読む。地域例には[[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]]、[[policy-finance/tokyo-credit-guarantee-corp|Tokyo CGC]]、[[policy-finance/osaka-credit-guarantee-corp|Osaka CGC]]、[[policy-finance/aichi-credit-guarantee-corp|Aichi CGC]]、[[policy-finance/hyogo-credit-guarantee-corp|Hyogo CGC]]が含まれる。

## 要約

日本の信用保証制度は、日本の中小企業・小規模事業者の資金調達を支える公的信用インフラである。これは階層化された制度である。(1) 51 都道府県 / 市レベルの**信用保証協会**（Credit Guarantee Corporations、CGC）が、金融機関からの適格な中小企業借入を保証する。(2) **全国信用保証協会連合会**（JFG）が、51 の CGC を調整し、責任共有に伴う負担をプールする。(3) **信用保険**レイヤーは[[financial-regulators/jfc|Japan Finance Corporation (JFC)]]が運営し、CGC 保証を再保険することで、最終的な残余損失が CGC レイヤーを崩壊させるのではなく、公的信用インフラに落ちるようにしている。これらを合わせたものが**信用補完制度**である。これは単一の貸手ではなく、公的信用アーキテクチャである。2020から2022 の ZeroZero 融資（実質無利子・無担保融資）特別プログラムはこの制度を通じて実施され、2024から2026 の代位弁済サイクルへ引き続き巻き戻されている。

## 1. システムアーキテクチャ（信用補完制度スタック）

| レイヤー | 役割 | FinWiki 経路 |
|---|---|---|
| 中小企業 / 小規模事業者の借手 | 金融機関と保証ルートを通じて事業資金を申し込む。 | このシステム経路 |
| 金融機関（貸手） | 融資を実行し、適用制度のもとで責任を共有する。 | 関連する場合は[[banking/regional-bank-consolidation-pattern]] / 信金 / 信組ページ |
| 地方信用保証協会（51） | 適格な中小企業債務を保証し、代位弁済 / 回収を扱う。 | この制度 + 戦略的に重要な地域 CGC ページ（例: [[policy-finance/hokkaido-credit-guarantee-corp]]） |
| 全国信用保証協会連合会（JFG） | 51 の CGC を調整し、責任共有制度の資金フローを管理する。 | [[policy-finance/national-federation-credit-guarantee-corporations]] |
| 信用保険 — JFC | CGC 保証を再保険し、CGC 代位弁済後の残余損失を吸収する。 | [[financial-regulators/jfc]] |
| METI / 中小企業庁 | 政策監督者。制度設計、適格性、危機時の認定を設定する。 | [[policy-finance/INDEX]] |
| 都道府県 / 市町村 | 地方政府。地域制度を共同負担し、地域緊急事象を認定し、補助金を提供する。 | 地方政府経路 |

したがって、この制度は**垂直型の公的信用パイプライン**である。借手 → 貸手 → 地方 CGC（第一損失） → JFG 調整 → JFC 信用保険（再保険） → METI 政策バックストップ、という流れである。

## 2. 機関概要 — 地方信用保証協会

| 項目 | 内容 |
|---|---|
| 法令 | 信用保証協会法（1953） |
| 法的形態 | 特別法上の認可法人（公的信用機関） |
| 数 | 51 （47都道府県 + 4市 — 横浜市、川崎市、名古屋市、岐阜市など） |
| 所管 | 経済産業省（METI） / 中小企業庁 / 都道府県 |
| 共同アンカー | 全国信用保証協会連合会（JFG） |
| 再保険 | JFC 信用保険業務 |

## 3. 主要保証商品（制度レベルのメニュー）

- **一般保証** — **責任共有制度**の下での標準的な中小企業向け銀行融資保証（通常、普通制度では80%保証 / 20%貸手負担）。
- **マル経保証** — 小規模事業者経営改善資金保証（商工会・商工会議所推薦案件）。
- **創業関連保証** — 創業 / 新事業向け保証。
- **事業承継特別保証** — 事業承継向け保証。
- **経営革新等支援保証** — 経営革新 / 事業転換向け保証。
- **借換保証** — 借換 / 融資一本化向け保証。
- **流動資産担保融資保証（ABL）** — 売掛債権 / 在庫担保付き保証。
- **セーフティネット保証（1号から8号）** — 業況悪化業種・認定事象向けの条件強化保証。（§5参照。）
- **危機関連保証** — 国家緊急事態の枠組み。宣言された危機では最大100%保証。
- **災害関係保証** — 災害復旧保証。
- **新型コロナウイルス対応 ZeroZero 融資** — COVID 期の実質無利子・無担保の特別保証（2020-05 に拡大。2021-03に新規受付終了。2026+ までサービシング / 巻き戻しが継続）。（§6参照。）

## 4. 保証割合のメカニクス（責任共有制度）

**責任共有制度**は、2007-10 に導入され、リスク全体を100%保証にするのではなく、一定割合を貸付金融機関に残す制度である。

- **標準（一般保証、通常）**: CGC は融資の**80%**を保証し、貸手は残余リスク**20%**を保持する（または pari-passu 型の損失共有方式）。これは2007 後の標準である。
- **全額保証（100%）の例外**: 一部の政策プログラム（セーフティネット1号・2号・3号、危機関連保証、条件付きの創業、条件付きのマル経、危機対応設計における ZeroZero）は、貸手負担なしの100%保証を維持する。
- **Pari-passu 損失共有方式**: 責任共有制度では、貸手は (a) 80%保証構造、または (b) 定められた算式の下で CGC と貸手が pari-passu で損失を共有する構造のいずれかを選べる。

2007 における責任共有の導入は、2007 以前の100%保証制度でモラルハザードへの懸念が生じた後、貸手の審査規律を回復するための意図的な政策転換だった。

## 5. セーフティネット保証制度

**セーフティネット保証**の枠組みには8 の号認定があり、それぞれ異なる業況悪化シナリオを対象とし、条件を強化する（多くは100%保証 + 借手の通常保証枠とは別枠）。

- **1号** — 大企業の再編による影響（大企業の破綻 / 再編が下流の中小企業に影響すると METI が認定する事象）。
- **2号** — 大企業の事業ショック（例: サプライチェーン影響を伴う工場閉鎖）。
- **3号** — 銀行破綻 / 金融機関清算が中小企業借手へ与える影響。
- **4号** — 自然災害 / 広域緊急事態（台風、地震、洪水で頻繁に発動）。
- **5号** — 業界全体の構造的業況悪化。METI がマクロ / 財務状況に基づき特定業種を四半期ごとに指定する。（インフレ / パンデミック / エネルギーショック期に多用。）
- **6号** — 金融機関の破綻（3号に基づく特定範囲）。
- **7号** — 協同組織金融に影響する大企業再編。
- **8号** — RCC（整理回収機構）による求償等の影響。

なお、**危機関連保証**（セーフティネット保証とは別）は、100%保証を持つより広い国家緊急事態の枠組みであり、COVID-19, 2008 や GFC 相当の閾値など、まれな全国危機認定でのみ発動される。

## 6. ZeroZero 融資の巻き戻し状況（2020 →2026）

**ZeroZero 融資**（実質無利子・無担保融資）は、COVID-19に対する中心的な危機金融対応だった。

| フェーズ | 期間 | 状況 |
|---|---|---|
| 組成拡大 | 2020-03 →2020-07 | METI が2020-05に信用保証制度を通じた民間 ZeroZero を開始。急速に利用され、数カ月で数兆円規模に到達。JFC は並行する ZeroZero プログラムを直接運営。 |
| 組成継続 | 2020-08 →2021-03 | 全国51 CGC を通じて大規模な保証組成が継続。 |
| 組成終了 | 2021-03 →2022 | 民間 ZeroZero は新規申請を終了（一部の狭いカテゴリで限定的延長あり）。JFC ZeroZero も2022までに同様に終了。 |
| 据置期間 | 2020 組成 + 3年据置 | 借手には通常、元本据置期間（元本は一般に最大5 年、初期期間は利子補給）があった。2020年ビンテージ融資の大部分は、2023から2024にかけて返済開始に入った。 |
| 代位弁済波 | 2023から2026 | 返済開始をきっかけに、CGC による代位弁済が増加。複数の業界紙報道は、2023 後半以降、全国で代位弁済額が明確に増加したことを示している。 |
| コロナ後出口枠組み | 2022から2025 | METI / 中小企業庁は JFG と連携し、ZeroZero 借手のワークアウト / 借換（借換保証 / 経営改善商品の提供、「事業者との粘り強い支援」の枠組み）について統一的な指針を整備。 |
| 継続するテール | 2026+ | 残存する2020年ビンテージ融資が返済を終えるにつれて代位弁済のテールが続く。倒産統計は2024から2026にかけて ZeroZero 関連倒産を追跡サブカテゴリとして示している。 |

ZeroZero の巻き戻しは、信用保証制度にとって**直近の決定的なストレス事象**であり、全国の CGC 代位弁済統計に表れている。巻き戻しの地域レベルの扱いは、戦略的に重要な場合、[[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]]およびその他の地域ページに現れる。

## 7. 資金源

各地方 CGC は以下の組み合わせで資本化される。

- **国の出資** — METI / 中小企業庁の資本と補助。
- **都道府県 / 市の出資** — 地方政府の資本。地域の中小企業政策上の優先度を反映。
- **貸手出捐** — 提携銀行 / 信金 / 信組が地域 CGC に資本を拠出。
- **保証料収入** — 保証元本に対する年率。通常は低い一桁%の範囲（政策プログラム補助あり）。
- **連合会のプール資金** — JFG が管理する、制度レベルの調整を支える準備金。
- **JFC 信用保険** — [[financial-regulators/jfc|JFC 信用保険業務]]勘定を通じた代位弁済事象での再保険支払。

**公的信用リスク負担のウォーターフォール**は、借手からの回収 → CGC 準備金 → JFC 再保険 → 国の財政バックストップである。

## 8. デフォルト / 代位弁済フロー

1. 借手が保証付き融資でデフォルトする。
2. 貸手が保証に基づき請求する。CGC は保証部分について貸手に**代位弁済**を行う（通常は責任共有下で80%、危機制度では100%）。
3. CGC は借手 / 担保 / 個人保証人に対して**求償（回収）**を行う。
4. CGC は信用保険契約に基づき JFC に保険金を請求する。JFC は CGC に保険金を支払う。
5. 残余損失（回収 + JFC 保険後）は CGC 準備金が吸収する。準備金枯渇が懸念される場合、連合会 / 国の資本注入がバックストップとなる。

回収率は地域、業種、担保種別によって異なる。都市部の CGC（東京、大阪）は、商業不動産や設備の二次市場が厚いため、農村部の CGC（北海道、東北、九州の地方）より回収率が高い傾向がある。

## 9. 年次の進化

| 年 | 出来事 |
|---|---|
| 1937 | 東京信用保証協会 — 最初の信用保証協会が設立。 |
| 1953 | 信用保証協会法が制定され、全国的な CGC 枠組みが整備。 |
| 1958 | 中小企業信用保険公庫が設立（後に JFC へ統合）。 |
| 2007-10 | 責任共有制度が導入され、100%保証から80% / 20%の貸手負担を標準とする形へ移行。 |
| 2008から2009 | GFC 緊急対応 — セーフティネット5号が広く発動。緊急保証プログラム（未来100%枠組み）。 |
| 2011 | 東北地震 — 災害関係保証 + 4号が広く発動。 |
| 2020-05 | ZeroZero（実質無利子・無担保）民間プログラムが CGC 制度を通じて開始。 |
| 2021-03 | ZeroZero 民間組成が終了（限定延長あり）。 |
| 2023+ | 2020年ビンテージの据置期間終了に伴い、ZeroZero 代位弁済波が拡大。 |
| 2024から2025 | ワークアウト / 借換商品の組み合わせが拡大。「粘り強い支援」の枠組み。 |
| 2025 | 巻き戻し継続。倒産統計は ZeroZero 関連サブカテゴリのテールを示す。 |

## 10. 境界事例

- **制度と連合会** — このページはメカニズムを説明する。[[policy-finance/national-federation-credit-guarantee-corporations]]は全国調整機関を説明する。
- **保証と融資** — CGC は信用を保証する。融資は金融機関が実行する。CGC は貸手ではない。
- **制度と単一 CGC** — このページは制度を扱う。地域 CGC ページは特定の都道府県 / 市の法人を扱う。
- **中小企業と農業 / 漁業** — 農業は[[policy-finance/agriculture-credit-guarantee-system]]を、漁業は[[policy-finance/fisheries-credit-guarantee-system]]を使う。
- **CGC と JFC 直接融資** — JFC は中小企業へ直接融資も行う。CGC 制度は直接融資プログラムではなく、民間融資への保証メカニズムである。

## 関連項目

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

## 出典

- Japan Federation of Credit Guarantee Corporations, "信用保証協会と信用保証制度" (https://www.zenshinhoren.or.jp/guarantee-system/).
- Japan Federation of Credit Guarantee Corporations, "信用保証制度を支えるしくみ" (https://www.zenshinhoren.or.jp/guarantee-system/hokan/).
- Japan Federation of Credit Guarantee Corporations, "ご利用条件" (https://www.zenshinhoren.or.jp/guarantee-system/riyojoken/).
- 中小企業庁, "中小企業の資金繰り支援" (https://www.chusho.meti.go.jp/kinyu/shikinguri/index.html).
- 中小企業庁, セーフティネット保証 1号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_1gou.html).
- 中小企業庁, セーフティネット保証 2号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_2gou.html).
- JFC, SME finance pages (https://www.jfc.go.jp/n/finance/sme/index.html).

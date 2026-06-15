---
source: structured-finance/japan-securitization-product-matrix
source_hash: ff2e0b2bf28d5bb3
lang: ja
status: machine
fidelity: ok
title: "日本の証券化プロダクト・マトリクス"
translated_at: 2026-06-15T04:09:41.192Z
---

# 日本の証券化プロダクト・マトリクス

## 要点

本マトリクスは、日本で発行される **主要な ABS クラスの証券化プロダクト** を、単一の指標群で比較する。すなわち、典型的な発行体／スポンサー、オリジネーターの資産プール、SPV ビークルの選択（TMK / GK-TK / TK のみ / 信託受益権 / なし）、典型的な AAA トランシェ格付、格付機関の分担（JCR / R&I / S&P / Moody's）、トランシェ構造の深さ、典型的な年間発行量、適用される規制レジーム（銀行法 / 金商法 / 資産流動化法 / 個別業法）、そして販売チャネル（メガバンク証券部門 / 地域ディーラー会社 / 外資系投資銀行 / 直接私募）である。

13 のプロダクトクラスを比較する：**JHF MBS**（エージェンシー RMBS）、**プライベート RMBS**（メガバンクオリジネートのジャンボ案件）、**CMBS**（シングルボロワー型およびコンデュイット型）、**オートローン ABS**、**消費者ローン ABS**、**クレジットカード債権 ABS**、**リース債権 ABS**、**CLO**（米国／欧州の BSL CLO に対する投資家としての日本の銀行）、**NPL 証券化**、**プロジェクトファイナンス SPV**（再生可能エネルギー）、**航空機ファイナンス／船舶ファイナンス ABS**、**カバードボンド**（MUFG / SMBC による UCITS 準拠プログラム）、そして **シンセティック証券化**（銀行 RWA 軽減のための CLN / CDS）。

これらのプロダクトは、**オリジネーターがどのようにリスクを移転するか**（真正売買かシンセティックか、オンバランスかオフバランスか）、**どの法的ビークルが資産を保有するか**（資産流動化法に基づく TMK か、一般会社法に基づく GK-TK か、信託法に基づく信託受益権か、カバードボンドのようにビークルなしか）、**シニアトランシェがどのように格付されるか**（高い投資適格が典型だが、機関選択とトランシェの深さに顕著な差がある）、そして **誰がそのペーパーを購入・販売するか**（国内販売はメガバンク証券子会社が支配的、クロスボーダー仕組みは外資系投資銀行が支配的）によって異なる。本マトリクスを仕組み金融ドメインの単一表リファレンスとして用いること —— 市場の形状に関するナラティブは [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] を参照。

## Wiki 経路

この項目は [[structured-finance/INDEX|structured-finance index]] の配下に、[[structured-finance/japan-abs-market-overview|Japan ABS market overview]] のナラティブな概観を補完する **単一表のプロダクトクラス・マスターマトリクス** として位置づけられる。各プロダクトの深掘りには次を用いること：[[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]], [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]], [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]], [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan]], [[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan ABS Japan]], [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]], [[structured-finance/npl-securitization-japan|NPL securitization Japan]], [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan (renewable)]], [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan]], [[structured-finance/ship-financing-japan-megabank|ship financing Japan megabank]], [[structured-finance/japan-covered-bond-mufg-smbc|Japan covered bond MUFG SMBC]], [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]], [[structured-finance/repackaging-note-japan|repackaging note Japan]]。

SPV ビークルの選択と税務上の取扱いについては：[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]], [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose-company mechanics]], [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]。格付機関の方法論については：[[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]], [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]。スプレッド／プライシングの文脈については：[[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]。システムアンカーは JHF プログラムについて [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]]。

## 1. プロダクト・マトリクス —— 単一表マスター

| プロダクトクラス | 典型的な発行体／スポンサー | オリジネーター・プール | ビークル | 典型的な AAA トランシェ | 典型的な格付機関の分担 | トランシェの深さ | 年間発行量（概算） | 規制上の所管 | 販売者 |
|---|---|---|---|---|---|---|---|---|---|
| **JHF MBS（エージェンシー RMBS）** | [[policy-finance/japan-housing-finance-agency\|JHF (Japan Housing Finance Agency)]] | オリジネーター銀行から買い取った Flat-35 の長期固定金利住宅ローン | JHF 信託スキーム（法定信託、JHF が受託者／発行体） | AAA 相当（政府支援のシニアクラス） | JCR / R&I（国内）; 一部 Moody's / S&P のカバレッジ | 単一シニアクラス構造（従来の意味でのマルチトランシェの信用ウォーターフォールはなし; シニアクラスは政府支援） | 年間数兆円（円建て仕組みペーパーで最大のクラス） | JHF 法（法定）+ 金商法ディスクロージャー | メガバンク証券子会社（[[securities-firms/mufg-securities\|MUFG MS]], [[securities-firms/smbc-nikko\|SMBC Nikko]], [[securities-firms/mizuho-securities\|Mizuho Securities]]）+ 買い手としての生保／地方銀行 |
| **プライベート RMBS** | メガバンク（[[megabanks/mufg\|MUFG]], [[megabanks/smfg\|SMFG]], [[megabanks/mizuho-fg\|Mizuho FG]]）、一部の信託銀行（[[trust-banks/sumitomo-mitsui-trust\|SMTB]]） | メガバンクオリジネートのジャンボ住宅ローン（Flat-35 の代替、変動金利、固定期間選択型ローン） | 主として信託受益権; 時に GK-TK | AAA（信用補完付き） | JCR / R&I（国内）; クロスボーダー・トランシェには時折 S&P / Moody's | シニア／メザニン／エクイティ（典型的には 3～4 のクラス） | 控えめ —— 時折の公募案件; ほとんどは私募 | 金商法 + 信託法 | メガバンク証券部門; 国内機関投資家向けの私募 |
| **CMBS —— シングルボロワー** | 不動産スポンサー（三井不動産、三菱地所、森トラスト、外資系スポンサー）; アレンジャーとしてのメガバンク | 単一資産または小規模プールの商業不動産（オフィス、物流、ホテル、リテール）—— 一スポンサーの特定ポートフォリオ | TMK（上場債に好まれる）または GK-TK | AAA（劣後付き）; 案件固有 | JCR / R&I; クロスボーダー案件には一部 S&P / Moody's のカバレッジ | シニア／メザニン／劣後／エクイティ（マルチクラスが典型） | 2008後は小規模; 2020年代に回復（物流倉庫、オフィスのシングルボロワー） | 資産流動化法（TMK 用）+ 金商法 | メガバンク証券部門 + 外資系投資銀行（ゴールドマン、モルガン・スタンレー） |
| **CMBS —— コンデュイット** | メガバンクがアレンジした複数の無関係な CRE ローンのプール | 借り手をまたいだ複数の相関のない商業モーゲージローン | TMK または GK-TK | AAA（劣後付き）; プール分散の信用 | JCR / R&I; 一部 S&P / Moody's のカバレッジ | シニア／メザニン／劣後／エクイティ（マルチクラスが典型） | 極めて小規模 —— コンデュイット構造は 2008 後の混乱以来、日本では稀 | 資産流動化法 + 金商法 | メガバンク証券部門 |
| **オートローン ABS** | キャプティブ金融子会社：[[card-issuers/toyota-finance\|Toyota Finance]], [[leasing-firms/toyota-financial\|Toyota Financial]]（クロスボーダー）、ホンダファイナンス、日産クレジット; 銀行系：三菱 UFJ キャピタル・オートローン ABS、SMBC オートサービス | 消費者オートローンの粒度の細かいプール（数万件のローン） | GK-TK | AAA（劣後付き） | JCR / R&I; トヨタファイナンシャルのクロスボーダー案件は S&P / Moody's を使用 | シニア／メザニン／エクイティ（3 のクラスが典型） | キャプティブからの反復発行; 累計の年間発行量は穏当な兆円規模 | 金商法 + 割賦販売法 | メガバンク証券部門; キャプティブ自身のディーラー網 |
| **消費者ローン ABS** | 消費者金融会社：[[consumer-finance/acom\|Acom]], [[consumer-finance/aiful\|Aiful]], [[card-issuers/orico\|Orico]], [[card-issuers/jaccs\|JACCS]], [[card-issuers/aplus\|Aplus]] | 無担保の消費者割賦ローン、ショッピングクレジットの粒度の細かいプール | GK-TK | AAA（プールリスクを踏まえた深い劣後付き） | JCR / R&I（国内が支配的） | シニア／メザニン／劣後／エクイティ（3～4 のクラス; オート ABS より深い劣後） | 控えめ; 貸金業法改正後の消費者金融のデレバレッジで発行が減少 | 貸金業法 + 金商法 + 割賦販売法 | メガバンク証券部門 |
| **クレジットカード債権 ABS** | カード発行体：[[card-issuers/jcb\|JCB]], [[card-issuers/credit-saison\|Credit Saison]], [[card-issuers/mufg-nicos\|MUFG NICOS]], [[card-issuers/aeon-financial-service\|AEON Financial Service]], [[card-issuers/jaccs\|JACCS]] | リボルビングのクレジットカード債権（ショッピング + リボ + キャッシング） | リボルビング・プール構造の GK-TK | AAA（劣後付き） | JCR / R&I（国内） | シニア／メザニン／エクイティ; コントロールド・アモチゼーション付きのリボルビング・プール | 控えめ; オート ABS より小規模 | 金商法 + 割賦販売法 | メガバンク証券部門 |
| **リース債権 ABS** | リース会社：[[leasing-firms/mitsubishi-hc-capital\|Mitsubishi HC Capital]], [[leasing-firms/fuyo-lease\|Fuyo Lease]]、東京センチュリー、三井住友ファイナンス＆リース、オリックス | 設備リースおよびファイナンスリースの債権（産業、IT、車両フリート）; 残価エクスポージャーのあるプールは追加のストラクチャリングを要する | GK-TK | AAA（劣後付き; 残価エクスポージャーのある案件はシニアクラスが浅い場合あり） | JCR / R&I（国内が支配的） | シニア／メザニン／エクイティ（3 のクラスが典型）; 該当時は残価トランシェを分離 | 控えめ; より小さい ABS サブセグメントの一つ | 金商法 | メガバンク証券部門; リース会社の銀行系列ディーラー |
| **CLO（投資家としての日本の銀行）** | オリジネーター：米国／欧州の広範にシンジケートされたローンの CLO マネージャー（カーライル、KKR、GSO、CIFC、Ares 等）—— 日本は国内 CLO オリジネーション市場ではない | 原資産：米国／欧州の広範にシンジケートされたレバレッジドローン | ケイマン／アイルランド SPV（クロスボーダー・ビークル）; 日本籍ではない | AAA（米国／欧州 CLO の AAA トランシェ） | S&P / Moody's / Fitch（米国／欧州の機関）—— JCR / R&I は通常クロスボーダー CLO を格付しない | シニア AAA / AA / A / BBB / BB / エクイティ（米国／欧州 CLO の深いマルチトランシェ構造） | 日本の銀行による円換算投資 —— [[cooperative-banks/norinchukin\|Norinchukin]], [[regional-banks/japan-post-bank\|Japan Post Bank]], 地方銀行; 日本の発行ではなく投資家需要を反映 | 米国 CFTC / SEC / ドッド・フランクのリテンション規則 + BIS バーゼル枠組み | 外資系投資銀行（ゴールドマン、モルガン・スタンレー、JPM、シティ、BNP 等）が日本の機関投資家に販売 |
| **NPL 証券化** | メガバンクの NPL 移転; サービサー（サービサー会社、債権回収会社、外資系不良債権バイヤー） | オリジネート銀行から買い取ったデフォルト／サブパフォーミングローン | TMK または GK-TK | AAA は深い劣後と外部信用補完がある場合にのみ可能; メザニン／エクイティのクラスがより典型的 | JCR / R&I; クロスボーダー案件には一部 S&P / Moody's | 非常に深い劣後を伴うシニア／メザニン／エクイティ | 循環的; NPL 処理時に急増（1997 の銀行危機後、2008 の GFC 後） | 資産流動化法 + 金商法 + サービサー法 | 外資系不良債権バイヤー; メガバンク証券部門; 私募 |
| **プロジェクトファイナンス SPV（再生可能エネルギー）** | 再生可能エネルギー事業者（レノバ、ユーラスエナジー、外資系スポンサー）; 貸し手としてのメガバンクと生保; 政策金融としての [[policy-finance/dbj\|DBJ]] / JBIC | 再生可能エネルギープロジェクトのキャッシュフロー（固定価格買取制度下の太陽光 PV、陸上／洋上風力、バイオマス、地熱） | GK-TK（最も一般的）; 時に TMK | プロジェクトファイナンスローンは通常公募 AAA を格付されない; 債券が公募される場合に格付 | 格付される場合は JCR / R&I; メガバンクの内部格付 | シニアのプロジェクトローン + 劣後; 債券発行は時にトランシェ化 | 拡大中; FIT 主導の太陽光ブーム 2012～2017, 、現在は洋上風力と FIT 後のコーポレート PPA 案件 | 金商法 + 電気事業法 + 再生可能エネルギー特別措置法 | メガバンクのシンジケートローン・デスク; 債券発行はメガバンク証券部門を通じて |
| **航空機／船舶ファイナンス ABS** | 総合商社のリース部門（[[financial-conglomerates/mitsubishi-corp\|Mitsubishi Corp]], [[financial-conglomerates/sumitomo-corp\|Sumitomo Corp]], [[financial-conglomerates/mitsui-co\|Mitsui & Co]]、丸紅、伊藤忠）; JOL / JOLCO のスポンサー; 外資系レッサー（AerCap、Avolon 等）; メガバンクの船舶ファイナンス・デスク | 航空機オペレーティングリースのポートフォリオ; 船舶モーゲージ／用船料債権 | ケイマン／アイルランド SPV（クロスボーダー）; 日本籍の JOLCO には時に GK-TK | 航空機 ABS：担保分散により AAA も可能; 船舶 ABS：循環的なセクターのため通常はより低い格付 | クロスボーダー案件は S&P / Moody's / Fitch; JCR / R&I は稀 | クロスボーダー ABS はシニア／メザニン／エクイティ; JOL / JOLCO は格付 ABS ではなく私募の税レバレッジ構造 | クロスボーダー発行であり日本国内ではない; JOL / JOLCO は税主導の日本投資家向けプロダクト | 金商法（日本の投資家サイド）+ 外国法域の発行レジーム | 外資系投資銀行（クロスボーダー）; メガバンク証券部門 + 総合商社のリース部門（JOLCO の販売） |
| **カバードボンド（UCITS 準拠）** | [[megabanks/mufg\|MUFG]]（MUFG 銀行のカバードボンド・プログラム）、[[megabanks/smfg\|SMFG]]（SMBC のカバードボンド・プログラム） | オンバランスで保有する住宅ローンのカバープール（デュアルリコース構造）; 真正売買なし | なし —— カバープールは法定または契約上のリングフェンスを伴い発行体のバランスシートに残る | AAA（発行体格付に対するカバードボンドの格上げ） | S&P / Moody's / Fitch（外貨建て UCITS 案件は外国機関の格付を要する） | シリーズあたり単一トランシェ（カバードボンドは ABS の意味でトランシェ化されない; カバープールがリコースを提供） | 控えめ; 散発的な EUR / USD 発行 | UCITS（欧州）枠組み + 日本の銀行法（発行体サイドの規制） | 欧州／グローバルの機関投資家への EUR / USD 販売のための外資系投資銀行 |
| **シンセティック証券化** | メガバンク（[[megabanks/mufg\|MUFG]], [[megabanks/smfg\|SMFG]], [[megabanks/mizuho-fg\|Mizuho FG]]）; オリジネーターは原資産ローンをオンバランスで保持するが CDS / CLN を通じて信用リスクを移転 | 参照ローンポートフォリオ（典型的には大企業、中小企業、時に特殊プール）; 資産移転なし | SPV への資産移転なし; 参照プール定義を伴う CDS / CLN 構造; CLN の発行は SPV 経由（多くはケイマン） | 該当する場合は AAA（典型的にはシニアの参照トランシェを保持; ジュニア CLN を売却） | 日本籍 CLN の場合は JCR / R&I; クロスボーダー CLN の場合は S&P / Moody's | シニア参照／メザニン参照（CLN 売却）／ジュニア参照（時に保持） | 散発的; 資本軽減主導; メガバンクがバーゼル III の RWA を最適化するなか 2020年代に拡大 | FSA 自己資本規制枠組み + バーゼル III 証券化枠組み（RWA の取扱い）+ 金商法（CLN サイド） | 外資系投資銀行（クロスボーダー CLN の販売）; メガバンク証券部門（日本籍 CLN） |

**マトリクスに関する留意点**：発行量は、正確な兆円の数値ではなく、定性的に記述したおおよその桁オーダー（大／控えめ／小／循環的）である。AAA トランシェのラベルは典型的なシニアクラスの結果を反映する; 実際の格付は案件ごと、また時期によって異なる。格付機関の分担は、公開された格付アクションの開示から観察される典型的なカバレッジ・パターンを反映する; 一部の案件にはここで捉えきれていない追加の機関カバレッジがある。ビークルの割当は典型的な構造を反映する; 一部の案件は多層のビークルスタックを用いる（例：GK-TK に流し込まれる信託受益権; 受益権レイヤーを伴う TMK）。販売者の特定は典型的なブックランナー／アレンジャーのプロフィールを反映する; セカンダリーの販売はより広範でありうる。

## 2. ビークル選択マトリクス —— どの SPV が用いられるか

| ビークル | 典型的なプロダクトクラス | 選ばれる理由 |
|---|---|---|
| **TMK**（特定目的会社、資産流動化法に基づく特定目的会社） | CMBS（シングルボロワーに好まれる）、一部の NPL 証券化、プロジェクトファイナンス債 | 法定の税のパススルー; 資産流動化法のもとで規制される; 上場債の発行に好まれる; より明確なディスクロージャー・レジーム |
| **GK-TK**（合同会社 + 匿名組合のオーバーレイ） | ほとんどの ABS —— オート、消費者、カード、リース、プロジェクトファイナンス、シングルボロワー CMBS の各型、NPL | 標準的な私募構造; TK 匿名組合を通じた税のパススルー; 柔軟; オフバランス基準が通常満たされる |
| **信託受益権** | プライベート RMBS（主たる用途）、上流レイヤーとしての一部のオート／消費者 ABS | 信託法が分別財産の取扱いを提供する; 受託者としての信託銀行; オリジネーターからのクリーンな真正売買の分離 |
| **なし（オンバランスのカバープール）** | カバードボンド | カバープール構造は、オンバランスで保有する住宅ローンの周りの法定または契約上のリングフェンスに依拠する; SPV への真正売買なし |
| **ケイマン／アイルランド SPV（クロスボーダー）** | CLO（米国／欧州 CLO への日本の投資家）、航空機／船舶ファイナンス ABS、クロスボーダー CLN | 非日本籍の資産プールに用いられる外国籍 SPV; 発行体法域の規制に服する |
| **JHF 信託スキーム（法定）** | JHF MBS | JHF 法に基づく法定の発行体／受託者スキーム |

詳細な法的ビークルの比較は [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]], [[structured-finance/tmk-special-purpose-company-mechanics|TMK mechanics]], [[structured-finance/japan-trust-beneficial-interest-vs-spv|trust beneficial interest vs SPV]] を参照。

## 3. 格付機関分担マトリクス

| 格付機関クラスター | プロダクトのカバレッジ | 理由 |
|---|---|---|
| **JCR + R&I（国内が支配的）** | JHF MBS、プライベート RMBS、国内オート ABS、消費者 ABS、カード ABS、リース ABS、国内 NPL 証券化、国内プロジェクトファイナンス債、日本籍 CLN | 日本の機関投資家に販売される円建て仕組みペーパーに特化した国内信用格付機関; 日本の信用格付目的で FSA に登録 |
| **JCR + R&I + 選択的な S&P / Moody's** | 一部のシングルボロワー CMBS、クロスボーダー NPL 証券化、大規模で反復的なキャプティブ金融オート ABS（トヨタファイナンシャルのクロスボーダー） | クロスボーダー投資家は国内機関の格付に加えて国際的に認知された機関の格付を要する |
| **S&P / Moody's / Fitch（外国機関が支配的）** | 日本の銀行によるクロスボーダー CLO 投資、航空機／船舶ファイナンス ABS（クロスボーダー）、カバードボンド（UCITS）、クロスボーダー CLN | 原発行体またはビークルが外国籍; 投資家は発行法域に整合した外国機関の格付を要する |

**JCR / R&I の分担** は日本特有の顕著な特徴である。両者とも FSA 登録の国内信用格付機関である; 両者とも国内仕組みペーパーの大半を格付する; 個々の案件における具体的な機関の選択は、オリジネーターの選好とディーラーの慣行を反映する。方法論の深さは [[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]] と [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]] を参照。

## 4. 販売チャネル・マトリクス

| 販売チャネル | プロダクトのカバレッジ |
|---|---|
| **メガバンク証券子会社**（[[securities-firms/mufg-securities\|MUFG MS]], [[securities-firms/smbc-nikko\|SMBC Nikko]], [[securities-firms/mizuho-securities\|Mizuho Securities]]） | JHF MBS、プライベート RMBS、CMBS、オート ABS、消費者 ABS、カード ABS、リース ABS、プロジェクトファイナンス債、日本籍 CLN、リパッケージ・ノート（機関投資家向け） |
| **外資系投資銀行**（ゴールドマン、モルガン・スタンレー、JPM、シティ、BNP パリバ、バークレイズ、他） | 日本の銀行に販売されるクロスボーダー CLO、航空機／船舶ファイナンス ABS、カバードボンド（EUR / USD）、クロスボーダー・シンセティック証券化 CLN、外資系スポンサーを伴うシングルボロワー CMBS、外資系不良債権バイヤーを伴う NPL 証券化 |
| **リテール証券会社**（[[securities-firms/nomura-securities\|Nomura]], [[securities-firms/daiwa-securities\|Daiwa]]、地域証券会社） | リテール向けリパッケージ・ノート; 一部のリテール販売の仕組みプロダクト |
| **メガバンクのシンジケートローン・デスク** | プロジェクトファイナンス SPV（再生可能エネルギー）ローン、インフラファイナンス SPV ローン（債券ではない） |
| **総合商社のリース部門 + メガバンク証券** | 日本の投資家への航空機／船舶ファイナンス JOL / JOLCO の販売（レッサーサイド）; グローバル投資家へのクロスボーダー ABS 債の販売（デットサイド） |

仕組みプロダクト全般における、メガバンク証券子会社と外資系投資銀行とのディーラー・フランチャイズの分担は [[structured-finance/repackaging-note-japan|repackaging note Japan]] を参照。

## 5. 規制上の所管マトリクス

| 規制レジーム | プロダクトのカバレッジ |
|---|---|
| **資産流動化法 + 金商法** | TMK ベースの案件：ほとんどのシングルボロワー CMBS、一部の NPL 証券化、TMK を用いたプロジェクトファイナンス債 |
| **金商法（一般的な証券規制）+ 信託法／会社法** | GK-TK および信託受益権の案件：ほとんどのオート ABS、消費者 ABS、カード ABS、リース ABS、プライベート RMBS、コンデュイット CMBS、GK-TK を用いたプロジェクトファイナンス債 |
| **JHF 法（法定）** | JHF MBS —— 独自の法定枠組みを持つエージェンシー RMBS プログラム |
| **銀行法 + バーゼル III + FSA 自己資本規制枠組み** | シンセティック証券化（RWA 軽減が明示的なドライバー; 構造は証券発行枠組みのみではなく銀行資本枠組みを通じて規制される） |
| **UCITS（欧州）+ 銀行法（発行体サイド）** | カバードボンド：欧州のカバードボンド枠組みのもとでの EUR / USD 発行; 発行体は日本の銀行法のもとで規制される |
| **割賦販売法 + 貸金業法**（金商法に加えて） | 消費者ローン ABS、オートローン ABS、カード債権 ABS —— 原資産の消費者信用事業に対するオリジネーターサイドの規制 |
| **電気事業法 + 再生可能エネルギー特別措置法**（金商法に加えて） | 再生可能エネルギーのプロジェクトファイナンス SPV —— 原資産のプロジェクト活動が独自の規制レジームを持つ |
| **サービサー法**（金商法に加えて） | NPL 証券化 —— サービサー／債権回収機能がサービサー法のもとで独自の規制レジームを持つ |
| **外国法域の発行レジーム（米国／欧州／ケイマン／アイルランド）** | クロスボーダー CLO 投資、航空機／船舶ファイナンス ABS、クロスボーダー CLN —— ビークルが外国籍であり発行体法域のレジームに服する |

## 6. リスク移転タイプ・マトリクス

マトリクスの有用な切り直しは、**リスクがオリジネーターから投資家へどのように移るか** による：

| リスク移転タイプ | プロダクトのカバレッジ | 備考 |
|---|---|---|
| **完全な信用移転を伴う真正売買** | JHF MBS、プライベート RMBS、CMBS、オート ABS、消費者 ABS、カード ABS、リース ABS、NPL 証券化、クロスボーダー ABS | 資産が SPV へ移る; オリジネーターの信用エクスポージャーが除去される（保持トランシェおよび表明保証の例外に服する）。標準的な ABS パターン。 |
| **保持された信用補完を伴う真正売買** | ほとんどの国内 ABS クラスは、信用補完とスキン・イン・ザ・ゲーム遵守のため、オリジネーターが保有する劣後トランシェ／エクイティを保持する | オリジネーターは真正売買の後も残余の信用損失エクスポージャーを保持する; このパターンは規制上のリテンション規則と格付機関の期待を反映する。 |
| **移転なし、デュアルリコース構造** | カバードボンド（UCITS 準拠） | カバープールは発行体のバランスシートに残る; 投資家は発行体とリングフェンスされたカバープールの双方にリコースを持つ。資金調達主導の構造であり、バランスシート軽減の構造ではない。 |
| **移転なし、シンセティックな信用移転** | シンセティック証券化（CLN / CDS 構造） | 原資産ローンはオリジネーターのバランスシートに残る; 信用リスクはデリバティブの参照構造を通じて移転される。資本軽減主導であり、資金調達主導ではない。 |
| **原資産のラッピング／リストラクチャリング** | リパッケージ・ノート | SPV が既存の債券／ローンを購入し、デリバティブ・オーバーレイを適用し、異なる通貨／クーポン／構造でノートを再発行する。投資家プロダクト主導であり、オリジネーター主導ではない。 |

リスク移転タイプの切り口は、オリジネーターまたは発行体が各プロダクトクラスを選ぶ **理由** に最も直接的に対応する：
- 資金調達アクセスが真正売買 ABS とカバードボンドを駆動する。
- 資本軽減がシンセティック証券化を駆動する。
- 投資家プロダクト／利回りエンジニアリングがリパッケージ・ノートを駆動する。
- 特殊資産の処分が NPL 証券化を駆動する。

### 投資家サイドのアペタイト・マトリクス

発行体サイドのフレーミングを、各プロダクトクラスの **典型的な投資家基盤** と対にすると、どの日本国内の機関投資家プールがどの証券化アウトプットを吸収するかが見えてくる：

| 投資家クラスター | 典型的な保有プロダクト |
|---|---|
| 国内生保（[[life-insurers/nippon-life\|Nippon Life]], [[life-insurers/dai-ichi-life\|Dai-ichi Life]]、明治安田生命、住友生命、他） | JHF MBS のシニアクラス、プライベート RMBS のシニアクラス、プロジェクトファイナンス債、カバードボンド、時折の CMBS シニア |
| 国内地方銀行（地方銀行／第二地銀） | JHF MBS、オート ABS、消費者 ABS、カード ABS、リース ABS、一部のプライベート RMBS |
| 国内年金基金（GPIF および企業／公的年金基金） | JHF MBS、プライベート RMBS のシニアクラス、プロジェクトファイナンス債; 直接の ABS エクスポージャーは限定的 |
| 農林中央金庫、ゆうちょ銀行 | クロスボーダー CLO（AAA トランシェ）、JHF MBS、リパッケージ・ノート |
| 国内アセットマネージャー（野村 AM、大和 AM、アセットマネジメント One 等） | ファンドのマンデートに応じて ABS クラス間で分散 |
| 外国機関投資家 | 選択的なクロスボーダー CMBS、航空機ファイナンス ABS、船舶ファイナンス ABS、カバードボンド（EUR / USD）、CLN |
| 日銀（従来の ETF / J-REIT プログラム —— 直接の ABS プログラムはなし） | 直接の ABS 保有者ではない |

この投資家クラスターのマッピングは、なぜ JHF MBS が発行量で支配的かを説明する —— 生保、地方銀行、年金基金にまたがってテイクダウンされる、最も広く保有される国内 ABS クラスだからである。

## 7. トランシェ深度マトリクス

| トランシェの深さ | プロダクトのカバレッジ |
|---|---|
| **単一クラス（ウォーターフォールなし）** | JHF MBS（政府支援のシニアクラス構造）; カバードボンド（シリーズあたり単一トランシェ; カバードボンドは ABS の意味でウォーターフォール・トランシェ化されない） |
| **3クラス（シニア／メザニン／エクイティ）** | オートローン ABS、リース債権 ABS、カード債権 ABS（典型的な日本国内構造） |
| **4クラス（シニア／メザニン／劣後／エクイティ）** | プライベート RMBS、消費者ローン ABS（より高いプール信用リスクによる、より深い劣後）、一部の CMBS |
| **深いマルチトランシェ（5＋ クラス）** | 日本の銀行が保有する米国／欧州 CLO（米国 BSL CLO 市場に典型的な、深い AAA / AA / A / BBB / BB / エクイティ構造）; 複雑なスポンサー構造を伴う一部のシングルボロワー CMBS |
| **シンセティックな信用トランシング（資産移転トランシェではなく参照プールのクラス）** | シンセティック証券化 —— シニア／メザニン／ジュニアの参照トランシェ; CLN は典型的にメザニンクラスで発行される |

## 8. 発行量ランクの要約

マスターマトリクスにおける定性的な発行量バンドは、おおよそ次の相対的なランク順位に翻訳される（代表的なもの; 実データは年ごとに変動する）：

| ランククラスター | プロダクトクラス |
|---|---|
| 非常に大（年間発行が複数兆円） | JHF MBS —— 支配的な単一クラス; 円建て仕組みペーパーの最大の発行体で、大差をつけている |
| 大（累計の年間発行が兆円規模） | オートローン ABS（トヨタファイナンス、ホンダファイナンス、日産クレジット、銀行系オート金融会社からの累計）; 日本の銀行によるクロスボーダー CLO 保有（円換算ベースであり、日本の発行ではない） |
| 控えめ（年間発行が数千億円） | プライベート RMBS、リース債権 ABS、カード債権 ABS、プロジェクトファイナンス債（セクター循環的） |
| 小（年間発行が数百億円または散発的） | CMBS（2008 後の非常に小さい水準から回復中）、NPL 証券化（循環的）、シンセティック証券化（資本軽減主導、散発的）、カバードボンド（散発的な EUR / USD 発行） |
| ニッチ／クロスボーダーのみ | 航空機／船舶ファイナンス ABS（グローバル投資家へのクロスボーダー発行; 日本の投資家への JOL / JOLCO の販売は異なるメカニズムで動く） |

**日本の銀行によるクロスボーダー CLO 保有** は、バイサイドの投資家保有についての円換算の数字である点に留意; これは日本国内の発行ではない。これを JHF MBS やオート ABS の発行と同じスケールで数えるのは技術的にはリンゴとオレンジの比較だが、それは日本の機関投資家の資本がどれだけ仕組みクレジット・プロダクトに投じられているかを反映する —— そしてサイクルの特定の局面（とりわけ 2018～2019 年）では、日本の銀行による CLO 購入は米国 BSL CLO の AAA トランシェ吸収の有意なシェアを占めた。

## 9. プライシングと利回りスプレッドの文脈

無リスク金利および同種プロダクトのスプレッドに対するこれらのプロダクトのプライシングは、それ自体が別ページに値する厚いトピックである（[[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]] を参照）。要約レベルでは：

| プロダクトクラス | 典型的なプライシングの文脈 |
|---|---|
| JHF MBS シニアクラス | 円建て仕組みペーパーで最もタイトなスプレッド; 政府支援のシニア; JGB カーブ＋穏当なスプレッドのごく近傍でのプライシング |
| プライベート RMBS シニアクラス | JHF MBS より広い; 政府支援ではなく信用補完構造を反映 |
| オート／消費者／カード／リース ABS シニアクラス | プライベート RMBS より広い; 資産クラスのリスクとプール信用の特性を反映 |
| CMBS シニアクラス | さらに広い; 商業不動産サイクルへのエクスポージャーとプールの集中を反映 |
| 日本の銀行が保有するクロスボーダー CLO の AAA トランシェ | USD / EUR のプライシング —— スプレッド面では円建て仕組みペーパーより広いが、USD での絶対利回りは歴史的に利回り追求の日本の投資家にとって魅力的 |
| カバードボンド シニアトランシェ | タイト; UCITS 準拠のカバードボンドは発行体クレジット＋穏当なスプレッドでプライシングされ、しばしばシニア無担保の内側 |
| シンセティック CLN メザニン | 広い; 資本軽減構造におけるジュニアの信用エクスポージャーを反映 |

スプレッド関係のマトリクスはバイサイドのアロケーション判断に最も有用である; セルサイドのプライシングは、マスターマトリクスに捉えられた格付・構造の特徴と同じ階層を反映する。

## マトリクスの読み方

本マトリクスは日本の証券化市場の **プロダクトクラス・リファレンス** である。いくつかの読み方が最も有用である：

### 真正売買かシンセティックかが第一の構造的な切り口

これらのプロダクトの最も深い構造的な分かれ目は、**オリジネーターがどのようにリスクを移転するか** である：
- **真正売買**（資産が SPV へ移る）：JHF MBS、プライベート RMBS、CMBS、オート／消費者／カード／リース ABS、NPL 証券化、プロジェクトファイナンス債、クロスボーダー ABS。
- **真正売買なし、リスク移転なし**（オンバランスのカバープール）：カバードボンド。
- **真正売買なし、シンセティックなリスク移転**（CDS / CLN 参照構造）：シンセティック証券化。

真正売買は教科書的な ABS 構造である。カバードボンドとシンセティック構造は、特定の規制上または戦略上の目的に資する代替手段として発展した（カバードボンドは発行体クレジット＋プール格付での安定した資金調達アクセスのため; シンセティックは資金フローを伴わない資本軽減のため）。

### 国内かクロスボーダーかが第二の切り口

マトリクスは、**円建ての国内販売** プロダクト（JHF MBS、プライベート RMBS、ほとんどの ABS サブクラス、日本籍 CLN、国内プロジェクトファイナンス）を、**クロスボーダーの外貨建て** プロダクト（日本の銀行による CLO 投資、航空機／船舶ファイナンス ABS、EUR / USD のカバードボンド、クロスボーダー CLN）から切り分ける。国内サイドは JCR / R&I の格付、メガバンク証券部門の販売、TMK / GK-TK / 信託受益権のビークルが支配的である。クロスボーダーサイドは S&P / Moody's / Fitch の格付、外資系投資銀行の販売、ケイマン／アイルランドのビークルに依拠する。

### ビークルの選択は資産クラスと上場の意図を追う

TMK は、資産流動化法レジームのもとでの正式な上場債発行が望まれる場合に好まれる（シングルボロワー CMBS が最も明確）。GK-TK は ABS クラス全般の私募案件のデフォルトである。信託受益権は、信託法の分別財産の取扱いが重要なプライベート RMBS に好まれる。ビークルの選択が投資家主導であることは稀である; それはストラクチャラー／オリジネーター／アレンジャー主導であり、税のパススルー、オフバランス基準、上場の選好、資産クラスを反映する。[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]] を参照。

### 格付機関の分担はベニューの選択である

JCR / R&I は国内仕組みペーパーの格付を支配する。S&P / Moody's / Fitch はクロスボーダー仕組みペーパーの格付を支配する。この分担は格付の質に関するものではなく、ベニューと投資家基盤に関するものである。日本国内の投資家（生保、地方銀行、[[regional-banks/japan-post-bank|JPost]]、年金基金）は、円建てペーパーについて JCR / R&I の格付を権威あるものとして扱う; クロスボーダー CLO やカバードボンドに投資するグローバル投資家は外国機関に依拠する。一部の大規模で反復的な発行体（トヨタファイナンシャルのクロスボーダー）は、投資家のリーチを最大化するために複数機関のカバレッジを求める。

### 販売者のアイデンティティはフランチャイズの問題である

メガバンク証券子会社が国内販売の仕組みプロダクトの支配的なシェアを保持する。外資系投資銀行はクロスボーダー仕組みを支配し、歴史的にはシンセティック／リパッケージ／クロスボーダー CLO の日本への販売のオリジネーターであった。これら二つのチャネル間の競争環境は長年にわたり安定している; メガバンク証券部門のフランチャイズは国内販売の深さをカバーし、外資系投資銀行のフランチャイズはクロスボーダー・プロダクトのオリジネーションと複雑なストラクチャリングをカバーする。リパッケージ・ノートにおける同じディーラー・フランチャイズの分担は [[structured-finance/repackaging-note-japan|repackaging note Japan]] を参照。

### 発行量はセクターの活動を教えてくれる

マトリクスは発行量を定性的（大／控えめ／小／循環的）に並べるが、覚えておくべき **構造的な特徴** は、JHF MBS が円建て仕組みペーパーで大差をつけて最大のクラスであること; プライベート RMBS、オート ABS、CMBS は控えめから小の範囲にあること; 日本の銀行による CLO 投資は円換算では大きいが日本国内の発行ではなくバイサイドの活動を表すこと; NPL 証券化とシンセティック証券化は循環的でイベント主導であること、である。プライシング関係の次元は [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]] を参照。

### オリジネーター対投資家のフレーミングはプロダクト分類より重要である

有用な再フレーミング：マトリクスの各行は、(a) 日本のオリジネーターが資金調達、資本軽減、またはバランスシート管理を得るために資産プールを移転する **オリジネーター主導のプロダクト** —— JHF MBS、プライベート RMBS、オート ABS、消費者 ABS、カード ABS、リース ABS、プロジェクトファイナンス、NPL 証券化、シンセティック証券化、カバードボンド —— か、(b) 日本の機関投資家の資本が、しばしば外国資産において、仕組みクレジットの利回りエクスポージャーを求める **投資家主導のプロダクト** —— クロスボーダー CLO 保有、航空機／船舶ファイナンス ABS の応募、リパッケージ・ノート —— のいずれかを表す。**クロスボーダー仕組みクレジットの買い手** としての日本の銀行／生保／年金基金／[[regional-banks/japan-post-bank|Japan Post Bank]] のマップは、その国の全体的な証券化市場のフットプリントを理解するうえで、**国内仕組みクレジットの発行体** としての日本のマップと少なくとも同程度に重要である。

### このマトリクスが教えてくれないこと

- 任意の特定四半期の **リアルタイムの発行量** —— JSDA、JHF IR、ASF Japan から取得すること。
- **特定案件のプライシング** または **特定案件のパフォーマンス** —— JCR / R&I の格付アクション、ディーラーのセカンダリー市場コメンタリー、日銀「金融システムレポート」の定期開示から取得すること。
- **スポンサー固有の構造的バリエーション** —— 一部のスポンサーは非標準のウォーターフォール、リザーブ口座、または余剰スプレッドのメカニクスで案件を組成する; 案件固有の読み込みが必要。
- **税務上の取扱いの詳細** —— ビークルの税務上の取扱いはレジーム主導だがケース固有である; 枠組みは [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]] を、実際の取扱いは案件固有の税務メモを参照すること。

## 10. ソース管理チェックリスト

マトリクスの要素を再現するには、次の公開ソースが必要である：

| 質問 | 公開ソース |
|---|---|
| JHF MBS の月次発行量 | JHF IR —— 月次 MBS 発行のアナウンスメント |
| プライベート RMBS の案件パイプライン | メガバンク IR + JCR / R&I の格付アクションのアナウンスメント + JSDA の仕組み金融統計 |
| CMBS の案件パイプライン | JCR / R&I の格付アクションのアナウンスメント; アレンジャーサイドの開示についてはメガバンク証券 IR |
| オート／消費者／カード／リース ABS の発行 | JCR / R&I の格付アクション; キャプティブ金融および消費者金融会社の IR |
| 日本の銀行の CLO 保有 | 農林中金 IR、ゆうちょ銀行 IR、地方銀行の証券開示; 第 3 の柱の開示 |
| シンセティック証券化の量 | メガバンクの第 3 の柱の開示; 日銀「金融システムレポート」の定期コメンタリー |
| カバードボンド・プログラムの発行 | MUFG / SMBC の EUR / USD 案件のアナウンスメント; ECBC カバードボンド・イヤーブック |
| プロジェクトファイナンス債の発行 | JCR / R&I の格付アクション; ローンサイドについてはメガバンクのシンジケートローン・リーグテーブル |
| 航空機／船舶ファイナンス ABS | S&P / Moody's / Fitch のクロスボーダー格付アクション; 外資系投資銀行の案件アナウンスメント |
| ビークル選択のパターン | FSA / JSDA の法的ビークルのガイダンス; 案件ごとの法的開示 |
| 格付機関のカバレッジ分担 | JCR / R&I / S&P / Moody's / Fitch の公開格付アクションのアーカイブ |

このチェックリストは、公開ソースのみからの再現可能な日本の証券化市場分析を支える。

## 関連

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan ABS Japan]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]]
- [[structured-finance/npl-securitization-japan|NPL securitization Japan]]
- [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan]]
- [[structured-finance/ship-financing-japan-megabank|ship financing Japan megabank]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japan covered bond MUFG SMBC]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[structured-finance/repackaging-note-japan|repackaging note Japan]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose-company mechanics]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit Japan megabank]]
- [[structured-finance/infrastructure-finance-spv-japan|infrastructure finance SPV Japan]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]]
- [[policy-finance/INDEX|policy-finance index]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS/RMBS securitization]]
- [[banking/INDEX|banking index]]
- [[card-issuers/toyota-finance|Toyota Finance]]
- [[card-issuers/orico|Orico]]
- [[card-issuers/jaccs|JACCS]]
- [[card-issuers/jcb|JCB]]
- [[card-issuers/credit-saison|Credit Saison]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]
- [[cooperative-banks/norinchukin|Norinchukin Bank]]
- [[regional-banks/japan-post-bank|Japan Post Bank]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]]
- [[INDEX|FinWiki index]]

## 出典

- JHF（住宅金融支援機構）—— IR および法定開示。
- JCR（日本格付研究所）—— 日本籍の仕組み金融案件に関する公開格付アクション。
- R&I（格付投資情報センター）—— 日本籍の仕組み金融案件に関する公開格付アクション。
- JSDA（日本証券業協会）—— 仕組み金融の発行統計。
- FSA —— 証券開示枠組み、銀行自己資本規制枠組み、サービサー法／貸金業法／割賦販売法の参照。
- 日銀「金融システムレポート」—— 定期的なシンセティック証券化および仕組み金融のコメンタリー。
- メガバンク IR ／第 3 の柱の開示（MUFG、SMFG、みずほ FG）。
- 農林中金 IR、ゆうちょ銀行 IR —— CLO および仕組みペーパーの保有開示。
- トヨタファイナンス IR —— オートローン ABS の発行開示。
- ECBC（欧州カバードボンド協議会）—— UCITS カバードボンド枠組みの参照。
- ARES —— CMBS における不動産金融のオーバーラップについて。

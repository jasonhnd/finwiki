---
source: structured-finance/japan-securitization-product-matrix
source_hash: bfe3fcd07d528342
lang: ja
status: machine
fidelity: ok
title: "日本の証券化商品マトリックス"
translated_at: 2026-06-03T00:53:08.305Z
---

# 日本の証券化商品マトリックス

## 要約

このマトリックスは、日本で発行された **主要な ABS クラスの証券化商品**を単一の次元で比較しています: 典型的な発行体 / スポンサー、オリジネーター資産プール、SPV ビークルの選択 (TMK / GK-TK / TK のみ / 信託受益権 / なし)、典型的な AAA トランシェ格付け、格付け会社分割 (JCR / R&I / S&P / ムーディーズ)、トランシェ構造の深さ、典型的な年間発行量、規制制度（銀行法 / 金商法 / 資産証券化法 / 専門法）、および販売代理店チャネル（メガバンク証券部門 / 地域ディーラー会社 / 外資系投資銀行 / 直接私募）。

13 の商品クラスが比較されます: **JHF MBS** (代理店 RMBS)、**民間 RMBS** (メガバンク発のジャンボ取引)、**CMBS** (単独借り手および導管型)、**オートローン ABS**、**消費者ローン ABS**、**クレジットカード債権 ABS**、**リース債権 ABS**、**CLO** (投資家としての日本の銀行)米国/EU BSL CLO）、**不良債権証券化**、**プロジェクトファイナンスSPV**（再生可能エネルギー）、**航空機ファイナンス/船舶ファイナンスABS**、**カバードボンド**（MUFG / SMBCによるUCITS準拠プログラム）、**合成証券化**（銀行RWA救済のためのCLN / CDS）。

これらの商品は、*オリジネーターがリスクを移転する方法** (実際の販売とシンセティック、オンバランスシートとオフバランスシート)、**どの法的手段が資産を保有しているのか** (資産証券化法に基づくTMKと一般会社法に基づくGK-TK、信託法に基づく信託受益権とカバードボンドのビークルなし)、**シニアトランシェの格付け方法** (典型的には高い投資適格だが、代理店の選択とトランシェの深さに顕著な違いがある)、そして**紙の購入と配布は誰が行うか** (メガバンクの証券子会社が国内流通を支配しており、外国投資銀行が国境を越えた構造を支配している)。このマトリックスは、ストラクチャード・ファイナンス領域の単一表の参照として使用してください。市場の形状については、[[structured-finance/japan-abs-market-overview|Japan ABS market overview]] を参照してください。

## ウィキ上の位置づけ

このエントリは、[[structured-finance/INDEX|structured-finance index]] の説明の概要を補完する **単一テーブルの製品クラス マスター マトリックス**として [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] の下にあります。製品ごとの詳細を使用するには: [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]、[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、[[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]、[[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan]]、[[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan ABS Japan]]、[[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]]、[[structured-finance/npl-securitization-japan|NPL securitization Japan]]、[[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan (renewable)]]、[[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan]]、[[structured-finance/ship-financing-japan-megabank|ship financing Japan megabank]]、[[structured-finance/japan-covered-bond-mufg-smbc|Japan covered bond MUFG SMBC]]、[[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]、 [[structured-finance/repackaging-note-japan|repackaging note Japan]]。

SPV 車両の選択と税制の場合: [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]]、[[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose-company mechanics]]、[[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]。格付け機関の方法論の場合: [[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]]、[[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]。スプレッド/価格設定のコンテキスト: [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]。システムアンカー: JHF プログラムの [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]]。

## 1。製品マトリックス — 単一テーブルマスター

| 商品クラス | 典型的な発行体 / スポンサー | オリジネーター資産プール | ビークル | 典型的な AAA トランシェ | 典型的な格付機関の分担 | トランシェの深さ | 年間発行額 (概算) | 所管規制 | 販売会社 |
|---|---|---|---|---|---|---|---|---|---|
| **JHF MBS（代理店RMBS）** | [[policy-finance/japan-housing-finance-agency\|JHF (Japan Housing Finance Agency)]] | Flat-35 オリジネーター銀行から購入した長期固定金利住宅ローン | 住宅金融支援機構信託スキーム（法定信託、住宅金融支援機構を受託者・発行者とする） | AAA相当（政府支援シニアクラス） | JCR/R&I（国内）；ムーディーズ/S&P の一部の報道 | 単一のシニアクラス構造（従来の意味でのマルチトランシェクレジットのウォーターフォールはありません。シニアクラスは政府の支援を受けています） | 年間数兆円（円建て構造紙クラス最大） | 住宅金融支援機構法（法定）＋金商法開示 | メガバンク証券子会社（[[JapanFG/mufg-securities\|MUFG MS]]、[[JapanFG/smbc-nikko\|SMBC Nikko]]、[[JapanFG/mizuho-securities\|Mizuho Securities]]）＋生保・地方銀行をバイヤーとする |
| **プライベートRMBS** | メガバンク（[[JapanFG/mufg\|MUFG]]、[[JapanFG/smfg\|SMFG]]、[[JapanFG/mizuho-fg\|Mizuho FG]]）、一部信託銀行（[[JapanFG/sumitomo-mitsui-trust\|SMTB]]） | メガバンク発のジャンボ住宅ローン（フラット35 オルタナティブ、変動金利・固定期間住宅ローン） | 主に信託受益権（信託受益権）を信託します。時々GK-TK | AAA（信用補完あり） | JCR/R&I（国内）；時折、国境を越えたトランシェのためにS&P / ムーディーズを利用 | シニア / メザニン / エクイティ (通常、3-4  クラス) | 控えめ — 時折公開取引を行う。ほとんど私募 | 金商法＋信託法 | メガバンク証券部門。国内機関投資家向け私募 |
| **CMBS — 単一借り手** | 不動産スポンサー（三井不動産、三菱地所、森トラスト、海外スポンサー）アレンジャーとしてのメガバンク | 単一資産または小規模プールの商業用不動産 (オフィス、物流、ホテル、小売) — 1 つのスポンサーの特定のポートフォリオ | TMK（上場債券に優先）またはGK-TK | AAA (従属あり);取引固有の | JCR / R&I; S&P / ムーディーズが国境を越えた取引を一部カバー | シニア / メザニン / 劣後 / 株式 (マルチクラス典型) | 小型ポスト2008。 2020sで復活（物流倉庫、事務所単体借り手） | 資産流動化法（TMK向け）＋金商法 | メガバンク証券部門＋外資系投資銀行（ゴールドマン、モルガン・スタンレー） |
| **CMBS — 導管** | メガバンクが手配した複数の関連性のないCREローンのプール | 借り手間で相関関係のない複数の商業用住宅ローン | TMKまたはGK-TK | AAA (従属あり);プール分散クレジット | JCR / R&I; S&P / ムーディーズの一部報道 | シニア / メザニン / 劣後 / 株式 (マルチクラス典型) | 非常に小さい - 2008 脱臼後、日本では導管構造はまれになりました | 資産流動化法＋金商法 | メガバンク証券部門 |
| **オートローン ABS** | キャプティブファイナンス子会社: [[JapanFG/toyota-finance\|Toyota Finance]]、[[JapanFG/toyota-financial\|Toyota Financial]] (クロスボーダー)、Honda Finance、Nissan Credit。銀行系：三菱UFJ キャピタルオートローン ABS、SMBCオートサービス | 消費者向け自動車ローンの多様化されたプール (数万件のローン) | GK-TK | AAA（従属あり） | JCR / R&I;トヨタファイナンシャルの国境を越えた取引はS&P / ムーディーズを利用 | シニア / メザニン / エクイティ (3  クラスが代表的) | 捕獲からの再発行。年間継続発行額は中程度の兆円規模 | 金商法＋割賦販売法 | メガバンク証券部門。キャプティブ独自のディーラーネットワーク |
| **消費者ローン ABS** | 消費者金融会社: [[JapanFG/acom\|Acom]]、[[JapanFG/aiful\|Aiful]]、[[JapanFG/orico\|Orico]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/aplus\|Aplus]] | 無担保消費者割賦ローン、ショッピング クレジットの細分化されたプール | GK-TK | AAA (プールリスクを考慮した深い従属あり) | JCR / R&I（国内ドミナント） | シニア / メザニン / 劣後 / 株式 (3-4  クラス; 自動 ABS よりも深い従属) | 控えめな;消費者金融のデレバレッジ 貸金業法改正後の発行額削減 | 貸金業法＋金商法＋割賦販売法 | メガバンク証券部門 |
| **クレジットカード受取可能なABS** | カード発行会社: [[JapanFG/jcb\|JCB]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/jaccs\|JACCS]] | クレジットカードのリボ債権（ショッピング＋リボ＋キャッシング） | 回転プール構造のGK-TK | AAA（従属あり） | JCR/R&I（国内） | シニア/メザニン/エクイティ;制御された償却による回転プール | 控えめな;オートABSより小さい | 金商法＋割賦販売法 | メガバンク証券部門 |
| **リース可能ABS** | リース会社：[[JapanFG/mitsubishi-hc-capital\|Mitsubishi HC Capital]]、[[JapanFG/fuyo-lease\|Fuyo Lease]]、東京センチュリー、三井住友ファイナンス&リース、オリックス | 機器リースおよびファイナンリース債権（産業、IT、車両）。残存価値にさらされたプールには追加の構造化が必要 | GK-TK | AAA (劣後あり。残存価値にさらされる取引は、より浅い上級クラスを持つ可能性があります) | JCR / R&I（国内ドミナント） | シニア / メザニン / エクイティ (3  クラスが典型的);該当する場合は残価トランシェを分離 | 控えめな; ABS の小さなサブセグメントの 1 つ | 金商法 | メガバンク証券部門。リース会社の銀行グループディーラー |
| **CLO（投資家としての日本の銀行）** | オリジネーター: 米国/EU の広域シンジケートローン CLO マネージャー (カーライル、KKR、GSO、CIFC、アレスなど) — 日本は国内の CLO オリジネーション市場ではありません | 基礎となるもの: 米国/EU の広範なシンジケート ローン レバレッジド ローン | ケイマン/アイルランドのSPV（国境を越える車両）。日本に本籍がない | AAA (米国/EU CLO AAA トランシェ) | S&P / ムーディーズ / フィッチ (米国/EU 機関) — JCR / R&I は通常、国境を越えた CLO を評価していません | シニア AAA / AA / A / BBB / BB / 株式 (深いマルチトランシェ US / EU CLO 構造) | 日本の銀行による円換算投資 - [[JapanFG/norinchukin\|Norinchukin]]、[[JapanFG/japan-post-bank\|Japan Post Bank]]、地方銀行。日本の発行ではなく、投資家の需要を反映している | 米国CFTC / SEC / ドッド・フランク保持ルール + BISバーゼルフレームワーク | 外国投資銀行（ゴールドマン、モルガン・スタンレー、JPM、シティ、BNPなど）が日本の機関投資家に販売 |
| **不良債権の証券化** | メガバンクの不良債権譲渡。サービサー（債権回収会社、債権回収会社、外国不良債権買い手） | 融資元の銀行から購入したデフォルト/不良債権 | TMKまたはGK-TK | AAA は、深い従属と外部の信用サポートによってのみ可能です。メザニン/株式クラスの方が一般的 | JCR / R&I;国境を越えた取引には一部の S&P / ムーディーズ | 非常に深い従属関係を持つシニア/メザニン/株式 | 周期的;不良債権ワークアウト中のスパイク（1997 銀行危機後、2008 GFC後） | 資産流動化法＋金商法＋サービサー法 | 外国の不良債権買い手。メガバンク証券部門。私募 |
| **プロジェクトファイナンスSPV（再生可能エネルギー）** | 再生可能エネルギー事業者（レノバ、ユーラスエナジー、海外スポンサー）貸し手としてのメガバンクと生命保険会社。 [[policy-finance/dbj\|DBJ]] / 政策金融機関としてのJBIC | 再生可能エネルギープロジェクトのキャッシュフロー（固定価格買取制度下の太陽光発電、陸上・洋上風力発電、バイオマス、地熱） | GK-TK (最も一般的)。時々TMK | プロジェクトファイナンスローンは通常、公的格付けAAAではありません。債券が公的に発行される場合に格付けされる | JCR / R&I が格付けされている場合。メガバンクの内部格付け | シニアプロジェクトローン+劣後ローン。債券発行は時々トランザクされる | 成長中。 FIT による太陽光発電ブーム 2012-2017,  現在の洋上風力発電と FIT 後の企業向け PPA 取引 | 金商法＋電気事業法＋再生可能エネルギー特別措置法 | メガバンクのシンジケートローンデスク。メガバンク証券部門による社債発行 |
| **航空機/船舶向けABS** | 総合商社リースアームズ（[[JapanFG/mitsubishi-corp\|Mitsubishi Corp]]、[[JapanFG/sumitomo-corp\|Sumitomo Corp]]、[[JapanFG/mitsui-co\|Mitsui & Co]]、丸紅、伊藤忠商事）; JOL / JOLCO スポンサー;外国の貸し手 (AerCap、Avolon など)。メガバンクのシップファイナンスデスク | 航空機のオペレーティングリースポートフォリオ。船舶ローン/チャーター債権 | ケイマン / アイルランドの SPV (国境を越えた);時々、日本本土のJOLCOのGK-TK | 航空機 ABS: 担保の多様化により AAA が可能。船舶 ABS: 景気循環セクターを考慮すると、通常はより低く評価される | 国境を越えた取引の場合は S&P / ムーディーズ / フィッチ。 JCR / R&I まれに | クロスボーダーABSのシニア/メザニン/エクイティ。 JOL / JOLCO は格付 ABS ではなく民間の税金を活用した構造です | 日本国内ではなく国境を越えた発行。 JOL / JOLCO は税金を原動力とする日本の投資家向け商品です | 金商法（日本の投資家側）＋外国管轄発行制度 | 外国投資銀行（国境を越えた）。メガバンク証券部門＋総合商社リース部門（JOLCO分配） |
| **カバードボンド (UCITS 準拠)** | [[JapanFG/mufg\|MUFG]]（三菱UFJ銀行カバードボンドプログラム）、[[JapanFG/smfg\|SMFG]]（SMBCカバードボンドプログラム） | 貸借対照表上に保有されている住宅ローンのプールをカバーする（デュアルリコース構造）。本当の販売はありません | なし — 法的または契約上のリングフェンスにより、カバープールは発行者の貸借対照表に残る | AAA (発行体格付けに対するカバードボンド格付けの引き上げ) | S&P / ムーディーズ / フィッチ (外貨建UCITS取引には外国機関の格付けが必要) | シリーズごとに 1 つのトランシェ (カバード ボンドは ABS の意味でトランシェされません。カバー プールが求償権を提供します) | 控えめな;一時的なユーロ/米ドルの発行 | UCITS（欧州）の枠組み＋日本銀行法（発行者側規制） | 外資系投資銀行による欧州/世界の機関投資家へのユーロ/米ドル分配 |
| **合成証券化** | メガバンク ([[JapanFG/mufg\|MUFG]]、[[JapanFG/smfg\|SMFG]]、[[JapanFG/mizuho-fg\|Mizuho FG]]);オリジネーターは裏付ローンを貸借対照表上に保持するが、信用リスクを CDS / CLN 経由で移転する | 参照ローンポートフォリオ（通常は大企業、中小企業、場合によっては専門プール）。資産譲渡なし | SPV 資産移転はありません。参照プール定義を含む CDS / CLN 構造。 SPV (多くの場合ケイマン) を介した CLN 発行 | AAA（該当する場合）（通常はシニア参照トランシェを保有、ジュニアCLNは売却） | JCR / R&I は日本に本拠を置く CLN です。 S&P / ムーディーズによるクロスボーダー CLN | シニアリファレンス / メザニンリファレンス (CLN 販売) / ジュニアリファレンス (場合によっては保持) | エピソード的;資本救済主導。メガバンクがバーゼルIII RWAを最適化するにつれて、2020が増加 | 金融庁の自己資本規制フレームワーク＋バーゼルⅢ証券化フレームワーク（RWA処理）＋金商法（CLN側） | 外国投資銀行 (国境を越えた CLN 流通);メガバンク証券部門（日本本土CLN） |

**マトリックスに関する注意事項**: 発行額は、正確な数兆円の数字ではなく、定性的に記述されたおおよその規模 (大きい / 控えめ / 小さい / 周期的) です。 AAA トランシェのラベルは、典型的な上級クラスの成果を反映しています。実際の評価は取引ごとに、また時間の経過とともに変化します。格付け会社間の分割は、公的格付けアクションの開示から観察された典型的なカバレッジパターンを反映しています。一部の取引には、ここに掲載されていない追加の代理店の報道が含まれています。車両の割り当ては典型的な構造を反映しています。一部の取引では、多層ビークルスタック（例：GK-TK に供給される信託受益権、受益権層を備えた TMK）を使用します。ディストリビューターの識別は、典型的なブックランナー/アレンジャーのプロフィールを反映しています。二次配布はより広範囲に及ぶ可能性があります。

## 2。車両選択マトリックス — どのSPVが使用されるか

| ビークル | 代表的な製品クラス | 選ばれた理由 |
|---|---|---|
| **TMK**（特定目的会社、資産流動化法に基づく特定目的会社） | CMBS (単一借り手優先)、一部の不良債権証券化、プロジェクトファイナンス債 | 法定の税転嫁。資産証券化法に基づいて規制されています。上場債券の発行が好ましい。より明確な開示制度 |
| **GK-TK** (合同会社 + 匿名組合匿名組合オーバーレイ) | ほとんどの ABS — 自動車、消費者、カード、リース、プロジェクトファイナンス、単一借り手 CMBS バリアント、不良債権 | 標準的な私募構造。 TK匿名組合による税転嫁。フレキシブル;オフバランスシート基準は通常満たされている |
| **信託受益権(信託受益権)** | プライベート RMBS (プライマリ)、上流層として一部の自動車/消費者向け ABS | 信託法は個別財産の扱いを規定しています。信託銀行を受託者とする。オリジネーターからの完全な本当の販売分離 |
| **なし（貸借対照表上のカバープール）** | カバードボンド | カバープール構造は、貸借対照表に計上されている住宅ローンを囲む法定または契約上のリングフェンスに依存しています。 SPV への本当の販売はありません |
| **ケイマン/アイルランドのSPV (国境を越えた)** | CLO（米国/EU CLOの日本人投資家）、航空機・船舶ファイナンスABS、クロスボーダーCLN | 外国に居住するSPVは日本以外に居住する資産プールに使用されます。発行者の管轄規制の対象となる |
| **住宅金融支援機構信託制度（法定）** | JHF MBS | 住宅金融支援機構法に基づく法定発行者・受託者制度 |

合法車両の詳細な比較については、[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]]、[[structured-finance/tmk-special-purpose-company-mechanics|TMK mechanics]]、および [[structured-finance/japan-trust-beneficial-interest-vs-spv|trust beneficial interest vs SPV]] を参照してください。

## 3。格付け会社分割マトリックス

| 格付け会社クラスター | 対象商品 | 理由 |
|---|---|---|
| **JCR+R&I（国内ドミナント）** | 機構MBS、民間RMBS、国内自動車ABS、消費者ABS、カードABS、リースABS、国内不良債権証券化、国内プロジェクトファイナンス債、日本本国CLN | 国内の信用格付け会社は、日本の機関投資家に販売される円建てのストラクチャード・ペーパーに焦点を当てていました。日本の信用格付けを目的として金融庁に登録されています |
| **JCR + R&I + 選択的 S&P / ムーディーズ ** | 一部の単一借り手CMBS、クロスボーダー不良債権証券化、大規模リピートキャプティブファイナンスオートABS（トヨタフィナンシャルクロスボーダー） | 国境を越えた投資家には、国内機関の格付けに加えて、国際的に認められた機関の格付けが必要です |
| **S&P / ムーディーズ / フィッチ (外資系優位)** | 邦銀によるクロスボーダーCLO投資、航空機・船舶ファイナンスABS（クロスボーダー）、カバードボンド（UCITS）、クロスボーダーCLN | 基礎となる発行者または車両が外国に居住している。投資家は発行管轄区域と一致する外国機関の格付けを必要とする |

**JCR / R&I 分割**は、日本特有の注目すべき特徴です。両社とも金融庁登録の国内信用格付会社です。どちらも国内の構造化紙の大部分を評価しています。個々の取引における特定の代理店の選択は、オリジネーターの好みとディーラーの慣行を反映しています。方法論の詳細については、[[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]] および [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]] を参照してください。

## 4。ディストリビュータチャネルマトリックス

| 販売代理店チャネル | 対象商品 |
|---|---|
| **メガバンク証券子会社** ([[JapanFG/mufg-securities\|MUFG MS]]、[[JapanFG/smbc-nikko\|SMBC Nikko]]、[[JapanFG/mizuho-securities\|Mizuho Securities]]) | 機構MBS、民間RMBS、CMBS、自動車ABS、消費者ABS、カードABS、リースABS、プロジェクトファイナンス債、日本本籍CLN、リパッケージングノート（制度） |
| **外資系投資銀行** (ゴールドマン、モルガン・スタンレー、JPM、シティ、BNP パリバ、バークレイズ、他) | 日本の銀行に販売されたクロスボーダーCLO、航空機/船舶ファイナンスABS、カバードボンド(EUR/USD)、クロスボーダー合成証券化CLN、外国スポンサーとの単一借り手CMBS、外国の不良債権買い手との不良債権証券化 |
| **個人向け証券会社** ([[JapanFG/nomura-securities\|Nomura]]、[[JapanFG/daiwa-securities\|Daiwa]]、地方証券会社) | 小売再梱包に関する注意事項。一部の小売店で流通する構造化された製品 |
| **メガバンクのシンジケートローンデスク** | プロジェクトファイナンスSPV（再生可能エネルギー）ローン、インフラファイナンスSPVローン（社債ではない） |
| **総合商社リースアームズ＋メガバンク証券** | 航空機・船舶ファイナンス 日本の投資家へのJOL/JOLCO分配（貸手側）。世界の投資家への国境を越えたABS債券の分配（債務側） |

仕組み商品全般に関するメガバンク証券子会社と外資系投資銀行との間のディーラー・フランチャイズ分割については、[[structured-finance/repackaging-note-japan|repackaging note Japan]]を参照。

## 5. Regulatory-home matrix

| 規制体制 | 対象商品 |
|---|---|
| **資産流動化法+金商法** | TMKベースの取引: ほとんどの単一借り手CMBS、一部の不良債権証券化、TMKとのプロジェクトファイナンス債 |
| **金商法（一般証券規制）＋信託法・会社法** | GK-TK および信託受益権取引: ほとんどの自動車 ABS、消費者 ABS、カード ABS、リース ABS、プライベート RMBS、コンジット CMBS、GK-TK とのプロジェクトファイナンス債 |
| **住宅金融支援機構法（法定）** | JHF MBS — 独自の法的枠組みを備えた政府機関の RMBS プログラム |
| **銀行法 + バーゼル III + FSA の自己資本規制の枠組み** | 合成証券化（RWA救済が明示的な推進力である；構造は証券発行フレームワークのみではなく、銀行資本フレームワークを通じて規制される） |
| **UCITS (ヨーロッパ) + 銀行法 (発行者側)** | カバードボンド: 欧州のカバードボンドの枠組みに基づくユーロ/米ドルの発行。発行者は日本の銀行法で規制されている |
| **割賦販売法＋貸金業法**（金商法に加え） | 消費者ローン ABS、オートローン ABS、カード受取可能 ABS — 基礎となる消費者信用ビジネスのオリジネーター側の規制 |
| **電気事業法＋再生可能エネルギー特別措置法**（金商法に加え） | 再生可能エネルギー向けのプロジェクトファイナンス SPV — 基礎となるプロジェクト活動には独自の規制制度があります |
| **サービサー法** (金商法に加えて) | 不良債権証券化 — サービサー/債権回収機能にはサービサー法に基づく独自の規制制度がある |
| **外国管轄の発行制度 (米国 / EU / ケイマン / アイルランド)** | 国境を越えたCLO投資、航空機/船舶ファイナンスABS、国境を越えたCLN — 車両は外国に居住しており、発行者の管轄制度の対象となる |

## 6. Risk-transfer-type matrix

マトリックスを有用に再分割すると、**リスクがどのようにオリジネーターから投資家に移動するか**になります。

| リスク移転タイプ | 対象商品 | 注記 |
|---|---|---|
| **全額クレジット振込による本物の販売** | 機構MBS、民間RMBS、CMBS、自動車ABS、消費者ABS、カードABS、リースABS、不良債権証券化、クロスボーダーABS | 資産は SPV に移動します。オリジネーターの信用エクスポージャーは削除されます (留保トランシェおよび保証の例外の対象となります)。スタンダードなABSパターン。 |
| **クレジットサポートを維持した真の販売** | ほとんどの国内 ABS クラスは、信用サポートとスキン・イン・ザ・ゲームのコンプライアンスのために、オリジネーターが保有する劣後トランシェ/株式を保持します。 | オリジネーターは、実際の売却後も信用損失のエクスポージャーを残存します。このパターンは、規制上の保持ルールと格付け会社の期待を反映しています。 |
| **転送なし、デュアルリコース構造** | カバードボンド（UCITS準拠） | カバープールは発行体の貸借対照表に残ります。投資家は発行会社とリングフェンスで囲まれたカバープールの両方に頼ることになります。バランスシート救済構造ではなく、資金調達主導の構造。 |
| **転送なし、合成クレジット転送** | 合成証券化（CLN / CDS構造） | 基礎となるローンはオリジネーターの貸借対照表に残ります。デリバティブ参照構造を介して転送される信用リスク。資金調達主導ではなく資本救済主導。 |
| **基礎となるもののラッピング/再構築** | 再パッケージ化に関するメモ | SPV は既存の債券/ローンを購入し、デリバティブ オーバーレイを適用し、異なる通貨/クーポン/構造で債券を再発行します。オリジネーター主導ではなく、投資家製品主導。 |

リスク移転タイプのカットは、オリジネーターまたは発行者が各商品クラスを選択する**理由**に最も直接的に対応するものです。
- 資金調達へのアクセスにより、実際のセール ABS とカバードボンドが推進されます。
- 資本救済は総合的な証券化を推進します。
- 投資家向けの製品/利回りエンジニアリングにより、ノートのリパッケージが促進されます。
- 特殊な資産処理が不良債権の証券化を推進します。

### 投資家側の食欲マトリックス

各商品クラスの発行体側の枠組みと**典型的な投資家ベース**を組み合わせると、どの日本国内の機関投資家がどの証券化成果を吸収しているかがわかります。

| 投資家クラスター | 典型的な保有商品 |
|---|---|
| 国内生命保険会社（[[JapanFG/nippon-life\|Nippon Life]]、[[JapanFG/dai-ichi-life\|Dai-ichi Life]]、明治安田生命、住友生命、他） | 住宅金融支援機構MBSシニアクラス、民間RMBSシニアクラス、プロジェクトファイナンスボンド、カバードボンド、不定期CMBSシニア |
| 国内地方銀行（地方銀行・第二銀行） | JHF MBS、オートABS、コンシューマABS、カードABS、リースABS、一部民間RMBS |
| 国内年金基金（GPIFおよび企業・公的年金基金） | JHF MBS、民間RMBSシニアクラス、プロジェクトファイナンス債。 ABS への直接暴露は限定的 |
| 農林中央金庫、ゆうちょ銀行 | クロスボーダーCLO（AAAトランシェ）、JHF MBS、リパッケージングノート |
| 国内資産運用会社（野村AM、大和AM、アセットマネジメントOneなど） | ファンドの使命に応じて ABS クラスを多様化 |
| 外国機関投資家 | 選択的クロスボーダーCMBS、航空機ファイナンスABS、船舶ファイナンスABS、カバードボンド（EUR / USD）、CLN |
| 日銀 (従来の ETF / J-REIT プログラム - 直接的な ABS プログラムなし) | 直接ABSホルダーではありません |

この投資家クラスターのマッピングは、住宅金融支援機構 MBS が取引高で優勢である理由を説明しています。住宅金融支援機構 MBS は国内で最も広く保有されている ABS クラスであり、生命保険会社、地方銀行、年金基金全体で取引が行われています。

## 7. Tranche-depth matrix

| トランシェの深さ | 対象商品 |
|---|---|
| **シングルクラス (ウォーターフォールなし)** | JHF MBS (政府支援のシニアクラス構造)。カバードボンド（シリーズごとに単一のトランシェ。カバードボンドは ABS の意味でウォーターフォールトランシェではありません） |
| **3 クラス (シニア / メザニン / エクイティ)** | オートローンABS、リース債権ABS、カード受取ABS（日本国内の代表的な構造） |
| **4クラス（シニア/メザニン/劣後/株式）** | 民間RMBS、消費者ローンABS（プール信用リスクが高いためより深い劣後）、一部のCMBS |
| **ディープマルチトランシェ (5+ クラス)** | 日本の銀行が保有する米国/EU CLO (米国BSL CLO市場に典型的な深いAAA/AA/A/BBB/BB/株式構造)。複雑なスポンサー構造を持つ一部の単一借り手 CMBS |
| **合成信用トランシェ（資産移転トランシェではなく、参照プールクラス）** | 合成証券化 — シニア/メザニン/ジュニア参照トランシェ。 CLN は通常、メザニン クラスで発行されます |

## 8。発行高ランキング概要

マスター マトリックスの定性的なボリューム バンドは、おおよそ次の相対的なランク順に変換されます (代表的なもの。ライブ データは年ごとに変化します)。

| 順位帯 | 商品クラス |
|---|---|
| 非常に規模が大きい（年間発行額は数兆円） | JHF MBS — 有力なシングルクラス。大差を付けて円建て最大手のストラクチャードペーパー発行会社 |
| 大規模（年間累計発行額兆円規模） | オートローンABS（トヨタファイナンス、ホンダファイナンス、日産クレジット、銀行系自動車金融会社累計）日本の銀行によるクロスボーダーCLO保有額（日本での発行額ではなく、日本円相当額） |
| 控えめ（年間発行額数千億円） | プライベートRMBS、リース債権ABS、カード受取ABS、プロジェクトファイナンス債（セクター循環） |
| 小規模（数百億円またはエピソード的） | CMBS（2008 ベース以降の非常に小規模なものから復活）、不良債権証券化（周期的）、合成証券化（資本救済主導、一時的）、カバードボンド（一時的ユーロ/米ドル発行） |
| ニッチ/国境を越えた限定 | 航空機 / 船舶ファイナンス ABS (世界の投資家への国境を越えた発行、日本の投資家への JOL / JOLCO の分配は別の仕組みで行われます) |

**日本の銀行によるクロスボーダー CLO 保有額**は、バイサイド投資家の保有額を日本円で換算した数値であることに注意してください。これは日本国内での発行ではありません。これをJHF MBSや自動ABS発行と同じ規模でカウントすることは、厳密にはリンゴからオレンジまでだが、これは日本の機関資本がどれだけ仕組みクレジット商品に投入されているかを反映しており、サイクルの特定の時点（特に2018～2019 ）では、邦銀のCLO購入が米国BSL CLO AAAトランシェ吸収のかなりのシェアを占めていた。

## 9. Pricing-and-yield-spread context

リスクフリーレートおよび同等商品のスプレッドと比較したこれらの商品の価格設定自体は、別のページに値する分厚いトピックです ([[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]] を参照)。概要レベルでは次のようになります。

| 商品クラス | 典型的な価格設定のコンテキスト |
|---|---|
| JHF MBS シニアクラス | 円建てストラクチャードペーパーのスプレッドは最も狭い。政府支援の上級者。国債カーブに非常に近い価格設定と適度なスプレッド |
| プライベートRMBSシニアクラス | JHF MBSよりも広い。政府の支援ではなく信用補完構造を反映している |
| オート/コンシューマ/カード/リース ABS シニアクラス | プライベートRMBSよりも広い。資産クラスのリスクとプールクレジットの特性を反映 |
| CMBSシニアクラス | さらに広い。商業用不動産のサイクルエクスポージャーとプールの集中を反映 |
| 日本の銀行が保有するクロスボーダーCLO AAAトランシェ | 米ドル/ユーロの価格設定 — スプレッドでは日本円のストラクチャード・ペーパーよりも広いが、米ドルでの絶対利回りは歴史的に利回りを求める日本の投資家にとって魅力的である |
| カバードボンドシニアトランシェ | タイト; UCITS準拠のカバードボンドの価格は、発行者の信用に適度なスプレッドを加えたもので、多くの場合シニア無担保の範囲内にあります。 |
| 合成 CLN メザニン | ワイド;資本救済構造におけるジュニア信用エクスポージャーを反映 |

スプレッド関係マトリックスは、バイサイドの配分決定に最も役立ちます。セルサイドの価格設定には、マスター マトリックスに取り込まれた格付けと構造の特徴と同じ階層が反映されます。

## マトリックスの読み方

このマトリックスは、日本の証券化市場の**商品クラスのリファレンス**です。いくつかの読み取り値が最も役立ちます。

### 本物の販売と合成品は最初の構造的削減です

これらの製品間の構造上の最も深い分裂は、**オリジネーターがどのようにリスクを移転するか**です。
- **本当の売却** (資産はSPVに移動): JHF MBS、プライベートRMBS、CMBS、自動車/消費者/カード/リースABS、不良債権証券化、プロジェクトファイナンス債、クロスボーダーABS。
- **実際の売却なし、リスク移転なし** (貸借対照表上のカバープール): カバードボンド。
- **実際の販売はなく、合成リスク移転** (CDS / CLN 参照構造): 合成証券化。

本当の売りは教科書通りのABS構造。カバードボンドとシンセティックストラクチャーは、特定の規制または戦略的目的を果たす代替手段として進化しました（発行体クレジットプラスプール格付けでの安定した資金アクセスのためのカバードボンド、資金の流れのない資本救済のためのシンセティックボンド）。

### 国内と国境を越えた第 2 のカット

マトリックスは、**円建て国内流通**商品（機構MBS、民間RMBS、ほとんどのABSサブクラス、日本本土CLN、国内プロジェクトファイナンス）と**クロスボーダー外貨**商品（日本の銀行によるCLO投資、航空機/船舶ファイナンスABS、ユーロ/米ドルのカバードボンド、クロスボーダーCLN）を分離しています。国内側はJCR/R&Iの格付け、メガバンク・証券部門の分配、TMK・GK-TK・信託受益権ビークルが占めている。国境を越えた側は、S&P / ムーディーズ / フィッチの格付け、外資系投資銀行の流通、およびケイマン / アイルランドの車両に依存しています。

### 車両の選択は資産クラスと上場意図を追跡します

TMK は、資産証券化法制度に基づく正式な上場債券の発行が望まれる場合に好まれます (単一借り手 CMBS が最も明確です)。 GK-TK は、ABS クラスにわたる私募取引のデフォルトです。信託法の別財産扱いが重要な私募RMBSでは、信託受益権が優先されます。ビークルの選択が投資家主導で行われることはほとんどありません。これはストラクチャーラー/オリジネーター/アレンジャー主導であり、税転嫁、オフバランスシート基準、上場優先、および資産クラスを反映しています。 [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]]を参照してください。

### 格付け会社との分割は会場の選択による

国内ストラクチャードペーパー格付けではJCR/R&Iがトップを走る。 S&P / ムーディーズ / フィッチが国境を越えたストラクチャードペーパー格付けを独占しています。この分割は格付けの質に関するものではなく、開催地と投資家ベースに関するものである。日本国内の投資家（生命保険会社、地方銀行、[[JapanFG/japan-post-bank|JPost]]、年金基金）は、JCR / R&I の格付けを円建てペーパーに対して権威あるものとして扱っています。国境を越えたCLOやカバードボンドに投資する世界の投資家は、外国機関に依存しています。一部の大手リピート発行会社（トヨタ・フィナンシャル・クロスボーダー）は、投資家へのリーチを最大化するために複数の機関をカバーすることを求めています。

### 販売代理店のアイデンティティはフランチャイズの問題です

国内流通仕組商品はメガバンクの証券子会社が圧倒的なシェアを握る。外国の投資銀行は国境を越えた構造を支配しており、歴史的には日本への合成/リパッケージ/国境を越えたCLO販売の創始者でした。これら 2 つのチャネル間の競争環境は長年にわたり安定しています。メガバンクと証券部門のフランチャイズは国内の流通深度をカバーし、外国投資銀行のフランチャイズは国境を越えた商品の組成と複雑な構造をカバーします。再パッケージに関するメモの同じディーラーとフランチャイズの分割については、[[structured-finance/repackaging-note-japan|repackaging note Japan]] を参照してください。

### 発行量からセクターの活動がわかる

このマトリックスは発行量を定性的に（大きい / 控えめ / 小さい / 循環的）順序付けしていますが、覚えておくべき **構造上の特徴** は、住宅金融支援機構 MBS が円建てストラクチャード ペーパー クラスとしては大差を付けて最大であることです。プライベート RMBS、自動 ABS、および CMBS は中程度から小規模の範囲内にあります。日本の銀行による CLO 投資は円換算で多額ですが、日本国内での発行ではなくバイサイド活動を表しています。不良債権証券化と合成証券化は周期的でイベント駆動型です。価格関係のディメンションについては、[[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]] を参照してください。

### 製品分類よりも、オリジネーターと投資家の枠組みが重要

有益な再構成: マトリックスの各行は、(a) 日本のオリジネーターが資金調達、資本救済、バランスシート管理を得るために資産プールを移転する **オリジネーター主導の商品** — 住宅金融支援機構 MBS、民間 RMBS、自動車 ABS、消費者 ABS、カード ABS、リース ABS、プロジェクトファイナンス、不良債権証券化、合成証券化、カバードボンド — または (b) **投資家主導の商品 ** (日本人が機関投資家は、多くの場合、国境を越えた CLO 保有、航空機/船舶金融 ABS の申し込み、リパッケージ債など、海外資産にストラクチャード・クレジット・イールド・エクスポージャーを求めています。 **国境を越えたストラクチャード・クレジットの買い手**としての日本の銀行/生命保険会社/年金基金/[[JapanFG/japan-post-bank|Japan Post Bank]]の地図は、日本の証券化市場全体のフットプリントを理解する上で、**国内ストラクチャード・クレジットの発行者**としての日本の地図と少なくとも同じくらい重要である。

### このマトリックスでは分からないこと

- **特定の四半期の現在の発行額** - JSDA、JHF IR、および ASF Japan から取得。
- **特定の取引価格** または **特定の取引パフォーマンス** — JCR / R&I の格付けアクション、ディーラー流通市場の解説、日銀金融システムレポートの定期開示から取得。
- **スポンサー固有の構造のバリエーション** - 一部のスポンサーの構造は、非標準のウォーターフォール、リザーブ口座、または超過スプレッドの仕組みを扱っています。取引固有の読み取りが必要です。
- **税金処理の詳細** - 自動車税の処理は制度に基づいて行われますが、ケースごとに異なります。枠組み、実際の扱いについては取引固有の税務メモについては、[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]] を参照してください。

## 10. Source-control checklist

行列要素を再現するには、次の公開サーフェス ソースが必要です。

| 問い | 公開情報面 |
|---|---|
| 住宅金融支援機構MBS月次発行額 | JHF IR — 毎月のMBS発行のお知らせ |
| プライベートRMBS取引パイプライン | メガバンクIR + JCR / R&I格付けアクション発表 + JSDAストラクチャード・ファイナンス統計 |
| CMBS取引パイプライン | JCR / R&I の格付けアクションの発表。メガバンク証券IR アレンジャー側開示 |
| 自動車/民生/カード/リース ABS発行 | JCR / R&I の格付けアクション。キャプティブファイナンス・消費者金融会社IR |
| 邦銀CLO保有数 | 農林中金IR、ゆうちょ銀行IR、地方銀行有価証券開示。柱 3  開示情報 |
| 合成証券化ボリューム | メガバンクの柱 3  の開示。日銀金融システムレポート定期解説 |
| カバードボンドプログラムの発行 | MUFG / SMBC EUR / USD 取引の発表。 ECBC カバードボンド年鑑 |
| プロジェクトファイナンス債の発行 | JCR / R&I の格付けアクション。メガバンクのシンジケートローン融資側リーグ表 |
| 航空機/船舶向けABS | S&P / ムーディーズ / フィッチの国境を越えた格付けアクション。外国投資銀行との取引に関する発表 |
| 車両選択パターン | FSA / JSDA 合法車両ガイダンス。ケースバイケースの法的開示 |
| 格付け会社によるカバレッジの分割 | JCR / R&I / S&P / ムーディーズ / フィッチ公開格付アクションアーカイブ |

このチェックリストは、公的情報源のみからの再現可能な日本の証券化市場分析をサポートしています。

## 関連項目

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
- [[JapanFG/INDEX|JapanFG index]]
- [[JapanFG/toyota-finance|Toyota Finance]]
- [[JapanFG/orico|Orico]]
- [[JapanFG/jaccs|JACCS]]
- [[JapanFG/jcb|JCB]]
- [[JapanFG/credit-saison|Credit Saison]]
- [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]]
- [[JapanFG/norinchukin|Norinchukin Bank]]
- [[JapanFG/japan-post-bank|Japan Post Bank]]
- [[JapanFG/sumitomo-mitsui-trust|SMTB]]
- [[INDEX|FinWiki index]]

## 出典

- JHF (Japan Housing Finance Agency) — IR and statutory disclosures.
- JCR (Japan Credit Rating Agency) — public rating actions on Japan-domiciled structured-finance deals.
- R&I (Rating and Investment Information) — public rating actions on Japan-domiciled structured-finance deals.
- JSDA (Japan Securities Dealers Association) — structured-finance issuance statistics.
- FSA — securities-disclosure framework, bank capital-adequacy framework, Servicer Act / Moneylending Business Act / Installment Sales Act references.
- BoJ Financial System Report — periodic synthetic-securitization and structured-finance commentary.
- Megabank IR / Pillar 3 disclosures (MUFG, SMFG, Mizuho FG).
- Norinchukin IR, Japan Post Bank IR — CLO and structured-paper holdings disclosures.
- Toyota Finance IR — auto-loan ABS issuance disclosures.
- ECBC (European Covered Bond Council) — UCITS covered-bond framework reference.
- ARES — for the real-estate-finance overlap on CMBS.

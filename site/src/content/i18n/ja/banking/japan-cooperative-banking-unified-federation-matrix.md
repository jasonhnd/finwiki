---
source: banking/japan-cooperative-banking-unified-federation-matrix
source_hash: 7be0b189d0744fa7
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "日本の協同組織金融 統合連合会マトリクス"
translated_at: 2026-07-29T03:30:48.104Z
---

# 日本の協同組織金融 統合連合会マトリクス

## TL;DR

日本の「協同組織金融」は単一のシステムではない。本ページで用いる基準日付き公開スナップショットでは、**JA バンク**（2025-04-01 時点で 497 JA + 31 信農連 + [[cooperative-banks/norinchukin|農林中央金庫]]）、**JF マリンバンク**（同日時点で 71 JF + 10 信漁連 + 農林中央金庫）、**信用金庫**（引用した FSA 一覧で 254 金庫）、**信用組合**（同一覧で 143 組合）、**労働金庫**（同一覧で 13 金庫）を区別する。機関数、法的役割、アクセス経路は恒久的な呼称ではなく、基準日付きの事実として管理する。 ^[Sources: https://www.nochubank.or.jp/about/features.html; https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx; https://www.fsa.go.jp/menkyo/menkyoj/shinkumi.xlsx; https://www.fsa.go.jp/menkyo/menkyoj/rokin.xlsx.]

## Wiki route

本エントリは [[banking/INDEX|banking index]] の下に位置し、ライセンスティアのサーフェス [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] に対する協同組織システム側の対応物である。レーンの一般的な枠組みは [[banking/cooperative-banking-japan|Cooperative banking in Japan]] にある。5 つの組合員母集団インデックスは [[banking/ja-bank-system-japan|JA Bank system]]、[[banking/jf-marine-bank-system-japan|JF Marine Bank system]]、[[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]]、[[banking/credit-cooperative-registry-japan|Japan credit cooperative registry]]、および [[banking/rokin-bank-registry-japan|Japan rokin bank registry]] である。中央機関は [[cooperative-banks/norinchukin|農林中央金庫]]、[[cooperative-banks/shinkin-central|信金中央金庫]]、[[cooperative-banks/zenshin-kumi|全国信用協同組合連合会]]、および [[cooperative-banks/rokin-renraku|労働金庫連合会]] である。JA の非信用連合会は [[cooperative-banks/ja-zenchu|JA 全中]]、[[cooperative-banks/ja-zen-noh|JA 全農]]、および [[non-life-insurers/ja-kyosairen|JA 共済連]] に；JF の非信用連合会は [[cooperative-banks/jf-shingyoren|JF 信漁連]]（連合会レイヤーの経路）と [[cooperative-banks/jf-zengyoren|JF 全漁連]] にある。預金保険のアンカーは、信金 / 信組 / 労金 については [[financial-regulators/yokin-hoken-kiko|預金保険機構 (DICJ)]] であり、JA / JF については **農水産業協同組合貯金保険機構** の並行制度である。

## なぜこのマトリクスが重要か

「協同組織金融」を一つのカテゴリーとして扱うことは、日本の金融システム・マッピングにおいて単一で最も一般的な誤りである。5 つのシステムは、法令を共有せず、監督者を共有せず、中央機関を共有せず、預金保険の経路を共有しない。[[banking/ja-bank-system-japan|JA]] のキャッシュフローに関する確度判断は、農林中央金庫法 + 農協法 から始めなければならない；[[banking/shinkin-bank-registry-japan|shinkin]] のキャッシュフローに関する確度判断は、信用金庫法 + FSA 中小・地域 ガイドライン から始めなければならない。この 2 つの問いは、異なる省庁、異なる検査プログラム、異なる流動性バックストップによって答えられる。

具体的には、本マトリクスが重要なのは以下の理由による:

- **法令** がほぼ他のすべてのフィールドを規定する（資本フロア、ガバナンス、持株会社の経路、BoJ アクセス）；
- **監督者の組み合わせ** が、その機関がどの省庁ガイドライン / 検査サイクルの下にあるかを決定する（FSA のみ、FSA + 農水省、FSA + 厚労省、FSA + 都道府県）；
- **中央機関の法的形態**は根拠法と会員構成によって異なる。[[cooperative-banks/norinchukin|農林中央金庫]] は、自らを特殊法人ではなく、農林中央金庫法に基づく協同組織の金融機関と説明している。
- **預金保険の経路** が異なる — 信金 / 信組 / 労金 については DICJ；JA / JF については 農水産業貯金保険機構 — そしてそれが開示における預金者保護の文言に影響する；
- **日銀との取引経路**は一律ではない。日銀は信用金庫を対象となり得る区分として掲げ、最新の取引先一覧には個別信用金庫も含める一方、信用組合、労働金庫、農業協同組合については中央機関を通じる経路を説明している。
- 中央機関の貸借対照表数値は定義と基準日が異なるため、同一期間の AUM ランキングとして扱わない。

本エントリは、ライセンスティア・マトリクス [[banking/japan-banking-license-tier-comparison-matrix|Japan banking-license tier comparison matrix]] と併読されるべきである — ライセンスティア・マトリクスは預金取扱ユニバース全体をライセンスの形で水平にスライスする一方、本マトリクスは協同組織レーンを連合会システムで垂直にスライスする。

## システム横断比較表

| 次元 | JA バンク（[[banking/ja-bank-system-japan|農協系統]]） | JF マリンバンク（[[banking/jf-marine-bank-system-japan|漁協系統]]） | 信用金庫（[[banking/shinkin-bank-registry-japan|shinkin]]） | 信用組合（[[banking/credit-cooperative-registry-japan|shinkumi]]） | 労働金庫（[[banking/rokin-bank-registry-japan|rokin]]） |
|---|---|---|---|---|---|
| **法令（組合員レイヤー）** | 農業協同組合法（1947） | 水産業協同組合法（1948） | 信用金庫法（1951） | 中小企業等協同組合法（1949） + 協同組合による金融事業に関する法律（1949） | 労働金庫法（1953） |
| **法令（中央レイヤー）** | 農林中央金庫法（1923  / 1986  / 2001） | 農林中央金庫法（共有） | 信用金庫法 | 中小企業等協同組合法 + 協同組合による金融事業 | 労働金庫法 |
| **主たる監督者** | FSA + 農林水産省（共管） | FSA + 農林水産省（共管） | FSA + 財務局 | FSA + 都道府県 | FSA + 厚生労働省（共管） |
| **組合員協同組合数** | 497 JA（2025-04 [[cooperative-banks/norinchukin\|農中]] 開示時点） | 71 JF | 254 信金（FSA 令和7年11月6日） | 143 信組（FSA 令和8年2月20日） | 13 労金 |
| **連合会 / 都道府県レイヤー** | 31 都道府県 JA 信農連（信連） | 10 JF 信漁連（信漁連） | 都道府県の信用レイヤーには無し（信金は信金中金へ直接） | 都道府県の信用レイヤーには無し（信組は全信組連へ直接） | 都道府県の信用レイヤーには無し（労金は労金連へ直接） |
| **全国中央機関** | [[cooperative-banks/norinchukin\|農林中央金庫]] | [[cooperative-banks/norinchukin\|農林中央金庫]]（JA と共有） | [[cooperative-banks/shinkin-central\|信金中央金庫]] | [[cooperative-banks/zenshin-kumi\|全国信用協同組合連合会 (全信組連)]] | [[cooperative-banks/rokin-renraku\|労働金庫連合会 (労金連)]] |
| **中央機関の法的形態** | 農林中央金庫法に基づく協同組織の全国金融機関 | JA と同じ農林中央金庫を共有 | 協同組織金融機関 | 協同組織金融機関 | 協同組織金融機関 |
| **組合員資格** | 農業協同組合（農協の組合員資格: 農家 + 准組合員） | 漁業協同組合（漁協の組合員資格: 漁業者 + 准組合員） | 業域 / 地域 / 職域（営業地区内の居住者、勤務者、または事業者） | 業域 / 地域 / 職域（しばしばより厳格 — 単一業種 / 地域 / 職業） | 労働組合、生活協同組合、組合員関係者 |
| **預金の呼称** | 貯金（ちょちく / ちょきん） | 貯金（JA と共有） | 預金（よきん、通常の銀行と同様） | 預金 | 預金 |
| **預金保険の経路** | 農水産業協同組合貯金保険機構 | 農水産業協同組合貯金保険機構（共有） | [[financial-regulators/yokin-hoken-kiko\|DICJ]] | [[financial-regulators/yokin-hoken-kiko\|DICJ]] | [[financial-regulators/yokin-hoken-kiko\|DICJ]] |
| **保険の保護限度** | 元本 1,000 万円 + 利息（DICJ と並行する構造） | 1,000 万円 + 利息 | 1,000 万円 + 利息（DICJ 標準） | 1,000 万円 + 利息 | 1,000 万円 + 利息 |
| **貸出範囲** | 組合員の農業 / 家計 / 事業 + 上限に服する員外 | 組合員の漁業 / 家計 / 事業 + 上限に服する員外 | 組合員の中小企業 / 家計 + 歴史的に 50% の員外上限 | 組合員の中小企業 / 家計（より厳格な組合員規則） | 組合員の家計 + 職域金融（住宅ローン / 教育 / ライフイベント） |
| **日銀当座預金経路** | 農林中央金庫が中央経路。他の法人は日銀の最新一覧で確認 | JA と同じ中央経路 | 個別信用金庫が直接取引する場合もあり、中央機関のサービスも利用される | 日銀資料が中央機関経由を説明 | 日銀資料が中央機関経由を説明 |
| **持株会社の記載ルール** | 通常の銀行法上の持株会社経路を推定せず、適用法を確認 | 同左 | 同左 | 同左 | 同左 |
| **地理的制約** | 地域 JA = 市町村 / 地域；信農連 = 都道府県；農中 = 全国 | 地域 JF = 漁港 / 地域；信漁連 = 都道府県；農中 = 全国 | 法定の営業地区 = 市町村 / 都道府県 | 法定の営業地区（しばしば業種 / コミュニティ） | 13 地域労金が日本を共同でカバー（重複なし） |
| **基準日付き規模情報** | 農林中央金庫の連結総資産 ¥83.293tn（2025-09-30）、JA 貯金 ¥107.2463tn（2025-03-31） | 農林中央金庫は JA と共有。JF の規模には別の基準日付き JF 開示を使用 | 信金中央金庫の総資産 ¥46.5596tn（2026-07-24）。業界合計には同一基準日の資料が必要 | 全信組連または業界の最新開示を、定義と基準日付きで使用 | 労金連の資金量 ¥6.2093tn（2025-03-31）。業界合計には別の基準日付き資料が必要 |
| **統合の証拠** | 日付の公式会員数シリーズを比較する | 日付の公式会員数シリーズを比較する | 日付のある FSA ワークブックのスナップショットを比較する | 日付のある FSA ワークブックのスナップショットを比較する | 日付のある FSA ワークブックのスナップショットを比較する |
| **非信用の姉妹連合会** | [[cooperative-banks/ja-zenchu\|JA 全中]]（監査 / 代表）、[[cooperative-banks/ja-zen-noh\|JA 全農]]（商業）、[[non-life-insurers/ja-kyosairen\|JA 共済連]]（共済） | [[cooperative-banks/jf-zengyoren\|JF 全漁連]]（代表 / 商業） | 業界団体: [[financial-regulators/zenshin-kyo\|全国信用金庫協会]] | 業界団体: 全国信用組合中央協会 | 業界団体: 全国労働金庫協会 |

出典: システム数と JA / JF の構造は、引用した農林中央金庫および FSA 資料に基づく。保護経路は預金保険機構と農水産業協同組合貯金保険機構、日銀との取引経路は日銀の対象区分説明と最新一覧で確認する。規模欄は各資料の定義と基準日を保持する。 ^[Sources: https://www.nochubank.or.jp/about/features.html; https://www.nochubank.or.jp/about/profile.html; https://www.shinkin-central-bank.jp/about/profile/company.html; https://www.rokinren.com/about/profile.html; https://www.dic.go.jp/; https://www.sic.or.jp/afc/about/summary/summary/mechanism-insurance-savings/; https://www.boj.or.jp/en/about/education/oshiete/kess/i08.htm; https://www.boj.or.jp/paym/torihiki/ichiran.pdf.]

## JA バンク — 農業協同組合系統（[[banking/ja-bank-system-japan|JA Bank system]]）

- **法令。** 地域 JA と都道府県信農連の信用事業については 農業協同組合法（1947年 法律第 132 号）；[[cooperative-banks/norinchukin|農林中央金庫]] については 農林中央金庫法（現行の統合 1986, 、主要改正 2001）。
- **監督者。** FSA + 農林水産省 の共管 — 主たる規制当局が FSA のみ**でない** 協同組織銀行システム。実務上の監督は、検査（信用事業 JA / 信農連 については FSA 主導）と政策 / 協同組合認可の側面（農水省 主導）に分かれる。
- **レイヤー数（2025-04, [[cooperative-banks/norinchukin|農中]] 開示）。** 地域レイヤーに 497 JA、都道府県レイヤーに 31 信農連、全国レイヤーに 1 [[cooperative-banks/norinchukin|農中]]。
- **中央機関。** [[cooperative-banks/norinchukin|農林中央金庫]] は、農林中央金庫法に基づく協同組織の金融機関であり、農林水産業の協同組織を会員とする全国金融機関である。公式プロフィールの連結総資産は ¥83.293tn（2025-09-30）。これは貸借対照表上の数値であり、顧客 AUM と同一視しない。
- **組合員タイプ。** 地域 JA は農家組合員（正組合員）と准組合員（准組合員 — JA サービスを利用する非農業の居住者）にサービスを提供する。信用事業 JA が協同組織金融の入口として機能する。
- **預金の呼称。** 預金ではなく 貯金 を使用し、これは銀行法の 預金 とは異なる協同組合法令の用語に遡る。利用者にとっては機能的に等価。
- **預金保険。** 農水産業協同組合貯金保険機構 — [[financial-regulators/yokin-hoken-kiko|DICJ]] とは別個の並行制度だが、元本 1,000 万円 + 利息という同等の原則で設計されている。
- **貸出範囲。** 主に組合員に紐づく（農業金融、組合員向けの家計金融、地域中小企業）に加え、全国レイヤーの [[cooperative-banks/norinchukin|農中]] ポートフォリオがあり、これはマンデートにより主要な債券 / クロスボーダー投資家である。
- **非信用の姉妹連合会。** [[cooperative-banks/ja-zenchu|JA 全中]]（監査、代表、農業政策の提唱）；[[cooperative-banks/ja-zen-noh|JA 全農]]（商業連合会 — 肥料 / 飼料 / 産品）；[[non-life-insurers/ja-kyosairen|JA 共済連]]（協同組合共済保険）。
- **最近の/注目すべき出来事。** 資本政策、ポートフォリオ再構築、および損失は、該当する日付の農林中金決算リリースから引用する必要があります。このページではそれらの歴史的重要性をランク付けしません。

## JF マリンバンク — 漁業協同組合系統（[[banking/jf-marine-bank-system-japan|JF Marine Bank system]]）

- **法令。** 信用事業 JF と JF 信漁連 については 水産業協同組合法（1948年 法律第 242 号）；[[cooperative-banks/norinchukin|農中]] については 農林中央金庫法（JA と共有）。
- **監督者。** FSA + 農林水産省 の共管（JA バンク・レーンと共有する規制アーキテクチャ）。
- **レイヤー数（2025-04, [[cooperative-banks/norinchukin|農中]] 開示）。** 地域レイヤーに 71 信用事業 JF、都道府県 / 地域レイヤーに 10 [[cooperative-banks/jf-shingyoren|JF Shingyoren (信漁連)]]、全国レイヤーに 1 [[cooperative-banks/norinchukin|農中]]（JA と共有）。
- **中央機関。** JA と同じ [[cooperative-banks/norinchukin|農林中央金庫]]。JF 側の都道府県相当レイヤーは [[cooperative-banks/jf-shingyoren|JF 信漁連]]；非信用の全国連合会は [[cooperative-banks/jf-zengyoren|JF 全漁連]]（販売、代表）。
- **組合員タイプ。** 地域漁業協同組合（漁港 / 漁業地域別に組織）。組合員は漁業世帯、漁業事業者、および漁業コミュニティの構成員。
- **預金の呼称。** 貯金（JA の協同組合用語と共有）。
- **預金保険。** 農水産業協同組合貯金保険機構（JA と共有 — 同じ並行システムであり、[[financial-regulators/yokin-hoken-kiko|DICJ]] ではない）。
- **貸出範囲。** 漁業金融、船舶ファイナンス、漁業世帯金融、加工 / 販売協同組合金融、加えて全国の [[cooperative-banks/norinchukin|農中]] ポートフォリオ。
- **地理的制約。** 地域 JF = 漁港 / 沿岸地域；JF 信漁連 = 都道府県；[[cooperative-banks/norinchukin|農中]] = 全国。
- **なぜ別個のシステムなのか。** JA と JF は頂点で [[cooperative-banks/norinchukin|農中]] を共有するが、法令が異なり（水協法 ≠ 農協法）、JF の代表連合会 [[cooperative-banks/jf-zengyoren|JF 全漁連]] は [[cooperative-banks/ja-zenchu|JA 全中]] の一部ではなく、都道府県の [[cooperative-banks/jf-shingyoren|JF 信漁連]] は JA 信農連 とは構造的に異なる。この 2 つのシステムは、オペレーティング分析において「農林系統」に平板化されるべきではない。

## 信用金庫 — 信金システム（[[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]]）

- **法令。** 信用金庫法（1951年 法律第 238 号；包括的施行 1958）。
- **監督者。** FSA + 財務局（FSA の 中小・地域金融機関 監督指針 第 V 部 協同組織金融機関 の下）。農水省 / 厚労省 の共管制度ではない — 信金は完全に FSA の協同組織金融レーンの内側に位置する。
- **レイヤー数。** 254 免許信金（FSA 信用金庫免許一覧、令和7年11月6日 時点）+ 1 [[cooperative-banks/shinkin-central|信金中央金庫]] 中央機関。信用金庫法 の手続きの下での継続的な信金間合併を通じて、1990年代のピーク（約 400+）から減少。
- **中央機関。** [[cooperative-banks/shinkin-central|信金中央金庫 (Shinkin Central Bank, SCB)]] は協同組織金融機関で、公式会社概要は会員 254 信用金庫、総資産 ¥46.5596tn（2026-07-24）を掲げる。日銀は対象となる個別信用金庫にも当座預金取引を認めているため、SCB を全信用金庫に唯一の経路とは記載しない。
- **組合員タイプ。** 組合員は、信金の法定の営業地区内に居住、勤務、または事業を有していなければならない。地域の中小企業と家計金融に注力。
- **預金の呼称。** 預金（JA / JF の 貯金 とは異なり、銀行法の用語）。
- **預金保険。** [[financial-regulators/yokin-hoken-kiko|DICJ]] — 標準的な銀行預金保険制度が適用される。
- **貸出範囲。** 組合員資格のある地域中小企業、組合員世帯、組合員地域の決済と消費者金融。歴史的な 50% の員外貸出上限が構造的なアンカー（適用除外あり）。
- **業界団体。** 業界代表については [[financial-regulators/zenshin-kyo|全国信用金庫協会 (Zenshin-kyō)]]。
- **最近の / 注目すべき論点。** 同じ 2021  銀行法時代の協同組織金融改革が関連会社の範囲を拡大；継続的なシステム全体の統合が 254  の数を圧縮し続けている。複数の個別信金が FSA の業務改善監督下に入った；システム安定性のバックストップは [[cooperative-banks/shinkin-central|信金中金]] の支援と DICJ の破綻処理ツールを通じる。

## 信用組合 — 信組システム（[[banking/credit-cooperative-registry-japan|Japan credit cooperative registry]]）

- **法令。** 中小企業等協同組合法（1949年 法律第 181 号）に加え 協同組合による金融事業に関する法律（1949年 法律第 183 号）。協同組合の信用事業の二法令構造は、信金の単一法令構造とは異なる。
- **監督者。** FSA + 都道府県（都道府県当局）。実務上の検査は、システム監督については FSA 主導、協同組合認可と組合員資格の側面については都道府県主導。FSA と都道府県の二監督者の分担は、信金（FSA のみ）とは異なる。
- **レイヤー数。** 143 認可信組（FSA 信用組合認可一覧、令和8年2月20日 時点）+ 1 [[cooperative-banks/zenshin-kumi|全国信用協同組合連合会 (全信組連)]] 中央機関。協同組合間合併を通じて、はるかに大きな歴史的基盤から減少。
- **中央機関。** [[cooperative-banks/zenshin-kumi|全国信用協同組合連合会 (Zenshinkumiren / 全信組連)]] — 協同組織金融機関（143 信組による組合員所有）であり、信組システムにとって [[cooperative-banks/shinkin-central|信金中金]] と形態的に並行する。
- **組合員タイプ。** 業種（業域 — 単一業種 / 業界団体の協同組合）、地域（地域）、または職業（職域）別に組織された協同組合の組合員。組合員資格は信金より厳格。業種特化の協同組合（例: 運送協同組合、在日韓国・在日中国系の商業協同組合、医師 / 歯科医師の専門職協同組合）を含む。
- **預金の呼称。** 預金。
- **預金保険。** [[financial-regulators/yokin-hoken-kiko|DICJ]] の保護が標準条件で適用される。
- **融資範囲。** 会員・員外取引の上限は、適用法令と各組合の開示で確認する。本ページでは、根拠のない「会員限定」という絶対表現を用いない。
- **地理的 / 職業的制約。** 法定の事業地域。多くの信組は、地理的な都道府県ではなく、特定の職業または業種にサービスを提供する。
- **業界団体。** 全国信用組合中央協会（全信組連 の中央銀行業務エンティティとは別個の代表 / 業界団体）。

## 労働金庫 — 労金システム（[[banking/rokin-bank-registry-japan|Japan rokin bank registry]]）

- **法令。** 労働金庫法（1953年 法律第 227 号）。
- **監督者。** FSA + 厚生労働省 の共管。厚労省 の共管の形は、預金取扱ユニバースの内側で独特である — 他のどの協同組織金融レーンも 厚労省 の監督を持たない。
- **レイヤー数。** 13 免許地域労金（FSA 労働金庫免許一覧）+ 1 [[cooperative-banks/rokin-renraku|労働金庫連合会 (労金連 / Rokinren Bank)]] 中央機関。13地域労金マップ（中央労金、近畿労金、東海労金、北海道労金、東北労金、新潟県労金、長野県労金、静岡県労金、北陸労金、中国労金、四国労金、九州労金、沖縄労金）が、1998-2003 年の地域労金合併ウェーブを通じて、従前の 47都道府県労金マップを置き換えた。
- **中央機関。** [[cooperative-banks/rokin-renraku|労働金庫連合会 (Rokinren Bank)]] — 協同組織金融機関（13 労金による組合員所有）であり、[[cooperative-banks/shinkin-central|信金中金]] / 全信組連 と形態的に並行する。資金量 ¥6.2兆（2025-03  開示）および 出資金 ¥1,600億；金融機関コード 2950。
- **組合員タイプ。** 組合員は労働組合、生活協同組合、および組合員組織に関係する者。個人預金者は、自らの組合員組織を通じて加入する。
- **預金の呼称。** 預金。
- **預金保険。** [[financial-regulators/yokin-hoken-kiko|DICJ]] の保護が適用される。
- **融資範囲。** 労働金庫の公式資料は、住宅ローンなど、労働者・会員の生活資金融資を掲げる。信用金庫・信用組合との比較には、同一期間・同一定義のポートフォリオデータが必要である。
- **地理的制約。** 各地域労金は、一つまたは複数の都道府県を一つのブロックとして共同でカバーする（13 労金間に重複なし）。
- **なぜ 厚労省 の共管なのか。** 労働組合の組合員構造と職域 / 消費者保護の範囲が、FSA と並ぶ自然な共同監督者として 厚労省 を位置付ける。

## 中央機関比較（頂点レイヤー）

| フィールド | [[cooperative-banks/norinchukin\|農中]]（JA + JF） | [[cooperative-banks/shinkin-central\|信金中金]] | [[cooperative-banks/zenshin-kumi\|全信組連]] | [[cooperative-banks/rokin-renraku\|労金連]] |
|---|---|---|---|---|
| 法令 | 農林中央金庫法 | 信用金庫法 | 中協法 + 協金法 | 労働金庫法 |
| 法的形態 | 農林中央金庫法に基づく協同組織金融機関 | 協同組織金融機関 | 協同組織金融機関 | 協同組織金融機関 |
| 設立 | 1923年。現在の準拠法は 2001 年法律第 93 号です。 | 1950 | 現在の公式プロフィールから確認する | 1955-03-23 |
| 組合員 | 系統団体出資（JA グループ + JF グループ + 森林） | 254 信金 | 143 信組 | 13 労金 |
| 日付付きスケールフィールド | 連結資産 ¥83.293tn (2025-09-30) | 総資産 ¥46.5596tn (2026-07-24) | 現在の公式貸借対照表と日付を使用する | 資金 ¥6.2093tn (2025-03-31) |
| 日銀との取引 | 法人・取引種別を最新一覧で確認 | 法人・取引種別を最新一覧で確認 | 中央機関経由 | 中央機関経由 |
| 海外拠点 | 2025年9月30日現在、海外支店3ヶ所と駐在員事務所1ヶ所。場所についてはプロフィールを参照してください | 現在の会社概要には複数の海外拠点が記載されています。支店と駐在員事務所を区別する | 現在の公式プロフィールを使用する | 現在の公式プロフィールを使用する |
| 公開された役割 | 食品・農業、小売、投資、法人事業 | 個人金融機関業務に会員信用金庫サポート・セーフティネット機能をプラス | 現在の正式な事業内容を使用する | 13ろうきんの中央金融機関 |
| 業界団体の姉妹 | [[cooperative-banks/ja-zenchu\|JA 全中]] / [[cooperative-banks/jf-zengyoren\|JF 全漁連]] | [[financial-regulators/zenshin-kyo\|全信協]] | 全信中協 | 全国労働金庫協会 |

出典: 法的形態、設立日、最新規模、会員、拠点は法人ごとに異なり、基準日付きで確認する。本表は 4 中央機関を順位付けしない。 ^[Sources: https://www.nochubank.or.jp/about/profile.html; https://www.nochubank.or.jp/about/business/; https://www.shinkin-central-bank.jp/about/profile/company.html; https://www.rokinren.com/about/profile.html; https://www.shinkumi.co.jp/.]

## 預金保険経路の比較

| 経路 | カバーされる機関 | 法令 | 保護 |
|---|---|---|---|
| [[financial-regulators/yokin-hoken-kiko\|DICJ]] | 信金、信組、労金、通常の銀行、信託銀行、ネット銀行、ゆうちょ銀行 | 預金保険法 | 元本 1,000 万円 + 利息；決済用預金は全額保護 |
| 農水産業協同組合貯金保険機構（別個の並行システム） | 地域 JA、JA 信農連、地域 JF、JF 信漁連、[[cooperative-banks/norinchukin\|農中]] | 農水産業協同組合貯金保険法 | 1,000 万円 + 利息（並行設計、別個の基金） |
| 母国制度 | 外国銀行支店（銀行法 第 IX 章） | DICJ ではない；JA/JF システムではない | 預金者は母国の保護に依存；銀行により異なる |

出典: 預金保険機構は国内銀行および対象となる協同組織金融機関を、農水産業協同組合貯金保険機構は信用事業を行う JA / JF、その信用連合会、農林中央金庫を対象とする。対象外商品と全額保護される決済用預金・貯金の条件は、各制度の資料で確認する。 ^[Sources: https://www.dic.go.jp/; https://www.sic.or.jp/afc/about/summary/summary/mechanism-insurance-savings/.]

二経路の設計が存在するのは、農業 / 漁業の協同組合システムが 預金（銀行法の用語）ではなく 貯金（協同組合法令の用語）を使用し、歴史的な制度設計が協同組織側の保険システムを銀行側の DICJ から別個に維持したためである。保護の経済性は等価（元本 1,000 万円 + 利息）だが、法的メカニズム、基金、および監督当局は異なる。

## システムレベルの AUM と統合パターン

| システム | 中央機関の日付フィールド | セクターの日付フィールド | 更新方法 |
|---|---|---|---|
| JA バンク | 農林中央金庫の連結総資産 ¥83.293tn（2025-09-30） | JA 貯金 ¥107.2463tn（2025-03-31） | 農林中央金庫と JA 系統の定義を分け、会員数も別途更新 |
| JF マリンバンク | JA と共有する農林中央金庫の貸借対照表 | 基準日付き JF 系統開示を使用 | 共有する中央機関の貸借対照表から JF の規模を推定しない |
| 信用金庫 | 信金中央金庫の総資産 ¥46.5596tn（2026-07-24） | 同一基準日の業界系列を使用 | FSA の機関数と業界系列を別々に更新 |
| 信用組合 | 全信組連の最新開示を使用 | 引用した業界概要の預金 ¥23.9tn（2025-03-31） | FSA の機関数と業界系列を別々に更新 |
| 労働金庫 | 労金連の資金量 ¥6.2093tn（2025-03-31） | 業界預金には基準日付きの全国団体資料が必要 | FSA の機関数と業界系列を別々に更新 |

出典: 数値は元資料の指標定義と基準日を保持する。中央機関の資産、系統預金・貯金、「資金量」は相互に置き換えられないため、本表では規模順位を示さない。 ^[Sources: https://www.nochubank.or.jp/about/profile.html; https://www.jabank.org/about/jyokyo/; https://www.shinkin-central-bank.jp/about/profile/company.html; https://www.shinyokumiai.or.jp/credit_cooperative/outline.html; https://www.rokinren.com/about/profile.html.]

## このマトリクスの読み方

1. **法令の行** から始める — 問いが協同組織金融エンティティに関するものであれば、それがほぼ他のすべてのフィールドを決定する。
2. 次に **監督者の行** を読む — FSA のみ（信金）、FSA + 都道府県（信組）、FSA + 厚労省 の共管（労金）、FSA + 農水省 の共管（JA / JF） — それがどの検査 / ガイドライン制度が適用されるかを決定する。
3. **預金の呼称の行** を確認する。貯金 は JA / JF（協同組合法令）を含意し、預金 は信金 / 信組 / 労金（銀行法に並行）を含意する。
4. **預金保険の経路** を確認する。JA / JF は 農水産業 協同組合経路を使用する；信金 / 信組 / 労金 は [[financial-regulators/yokin-hoken-kiko|DICJ]] を使用する。
5. **日銀との取引経路**を日銀の最新一覧で確認する。個別信用金庫が直接取引する場合もあり、日銀は信用組合、労働金庫、農業協同組合について中央機関を通じる経路を説明している。
6. **非信用連合会の姉妹** を確認する。JA は特に、「JA バンク」に平板化されるべきではない、異例に大きな非銀行連合会のサーフェス（[[cooperative-banks/ja-zenchu|全中]]、[[cooperative-banks/ja-zen-noh|全農]]、[[non-life-insurers/ja-kyosairen|共済連]]）を持つ。

## 監督者の組み合わせの読み方

| システム | FSA の役割 | 共同監督者 | 協同組合認可当局 | 検査サイクル |
|---|---|---|---|---|
| JA バンク | 信用事業の主たる検査 | 農林水産省（協同組合政策 + 農業認可の側面） | 農水省 + 都道府県（協同組合の側面） | FSA の協同組織金融検査プログラム；協同組合認可の側面に農水省が関与 |
| JF マリンバンク | 信用事業の主たる検査 | 農林水産省（漁業政策 + 漁業認可の側面） | 農水省 + 都道府県（協同組合の側面） | JA バンクの監督制度に並行 |
| 信用金庫 | 主たる検査（財務局） | FSA の協同組織金融ライン以外には無し | FSA | 標準的な協同組織金融検査サイクル |
| 信用組合 | 主たる検査（財務局） | 都道府県（協同組合認可と組合員資格の都道府県当局） | FSA + 都道府県 | 共同監督の分担 |
| 労働金庫 | 主たる検査 | 厚生労働省（職域 / 労働組合の側面） | 厚労省 | FSA の検査プログラムに 厚労省 の職域 / 消費者保護監督を重ねる |

出典: 監督者マトリックスは、関連法令および現在の FSA 協同組合金融ガイダンスに基づいたナビゲーションの概要です。正確に委任された権限と試験責任が機関と管轄区域に対してチェックされなければなりません。 ^[Sources: https://www.fsa.go.jp/common/law/guide/chusho/index.html; https://www.fsa.go.jp/common/law/guide/chusho/05.html.]

スーパーバイザ ミックス行によって、どの省庁のガイドライン更新が各システムに流入するかが決まります。 FSAの中小・地域金融機関の監督ガイドラインの変更は、銀行監督層の5つすべてに影響を与える。農林水産省の協同組合方針の変更はJA・JFには影響するが、しんきん・しんくみ・ろうきんには影響しない。厚生労働省の労働政策の変更は、特に労働金庫に影響を与える可能性があります。

## 持株会社ルート — 出版境界

これらのシステムは、株式会社銀行に見られる通常の銀行持株会社のパターンではなく、協同組合のメンバーシップと中央機関の構造を採用しています。構造が法的に不可能であるという断定的な声明には、法令固有の分析が必要であり、現在の実務だけから推測すべきではありません。出版物では、実際の合併、再編、またはグループのメカニズムを特定し、その承認文書を引用する必要があります。

## システム横断の重複と非重複

| 質問 | 証拠が必要です | 出版境界 |
|---|---|---|
| JA/JF会員の重複 | メンバーの定義と日付付きの公式メンバーシップ データセット | 別々の法人や法律は世帯の重複を定量化しない |
| しんきん・しんくみコンペティション | 同一エリアの店舗、対象会員、商品、日付の貸出・預金データ | さまざまな法令だけでは競争を測ることはできません |
| ろうきん・しんきん・しんくみ重複 | 同じ地域の製品と顧客データ | メンバーチャネルの違いは「限定的な」重複を確立しない |
| 地方銀行との重複 | 同県内中小企業・世帯のポートフォリオと価格データ | 一般銀行の法的地位だけでは市場の重複を測ることはできない |
| メガバンクの重複 | 比較可能な顧客、製品、地理データ | 市場が定義されていない「限定された」または「広範な」ラベルを避ける |
| 外国銀行の支店分類 | FSAの外国支店リストと適用法令 | 外国の支部は協同組合の規約の対象外です。これは分類であり、競合分析ではありません |

出典: この表は研究プロトコルです。法令と登記簿は事業体を分類します。競合と顧客の重複には、個別の比較可能なデータが必要です。 ^[Sources: https://www.fsa.go.jp/menkyo/menkyo.html; https://www.fsa.go.jp/common/law/guide/chusho/index.html; https://www.shinkin.org/shinkin/seido/index.html; https://www.jabank.org/about/sikumi/.]

## 法的更新プロトコル

銀行法の改正をすべての協同組合法規に自動的に適用しないでください。主張する各改革について、改正法、影響を受ける法令と条文、発効日、実施命令または監督通知、および対象となる機関の種類を記録します。預金保険機構と農業・漁業保護の分割は、2 つの保険制度に対して個別にチェックされます。

## BoJ 相手方の仕組み

| システム | 日銀の公的ルート | 公開される可能性のあるもの | 要チェック |
|---|---|---|---|
| JAバンク | 中央金融機関ルートスルー [[cooperative-banks/norinchukin\|農林中央金庫]] | 農林中金は現在の取引先およびシステムの中核機関である | 現在のリスト内のエンティティ固有の例外を確認します。 |
| JFマリンバンク | 農林中央金庫を通じた中央共通ルート | JAと同じ中央機関 | JF システムの役割を明確に保つ |
| 信用金庫 | 個人信用金庫が対象となります。しんきん中央も中心的な役割を果たす | 現在のリストに存在する名前のみの直接ステータスを公開します | すべての信用金庫が直接的であるとか、すべてが間接的であるとは述べないでください。 |
| 信用組合 | 中央金融機関ルートスルー [[cooperative-banks/zenshin-kumi\|全信組連]] | 日銀の公的説明では、個々の信用組合は一般に直接アクセスできないとしている | 現在のリストとサービス固有の決済チェーンを確認する |
| 労働金庫 | 中央金融機関ルートスルー [[cooperative-banks/rokin-renraku\|労金連]] | 日銀の公的説明では、個々の労働銀行は一般に直接アクセスできないとしている | 現在のリストとサービス固有の決済チェーンを確認する |

出典：日銀は対象となるカテゴリーを実際の取引相手から区別している。その公開説明には、適格機関に信用金庫が明示的に含まれており、信用組合、労働銀行、農業協同組合に対する中央機関サービスについても記載されています。 ^[Sources: https://www.boj.or.jp/en/about/education/oshiete/kess/i08.htm; https://www.boj.or.jp/paym/torihiki/ichiran.pdf.]

## 境界事例と留意点

- **JA バンク ≠ [[cooperative-banks/norinchukin|農中]]。** [[cooperative-banks/norinchukin|農林中央金庫]] は JA バンクシステムの中央機関だが、システムとしての JA バンクは地域 JA + 信農連 レイヤーもカバーする。[[cooperative-banks/norinchukin|農中]] をあたかも JA バンクシステム全体であるかのように扱うことが、最も一般的な誤りである。
- **JF マリンバンクは [[cooperative-banks/norinchukin|農中]] を共有するが別個のシステムである。** 法令は農協法ではなく水協法；代表連合会は [[cooperative-banks/jf-zengyoren|JF 全漁連]] であり、[[cooperative-banks/ja-zenchu|JA 全中]] ではない。中央機関を共有する姉妹システムとして扱うこと。
- **信金 ≠ 信組。** どちらも 協同組織 の協同組織金融機関だが、法令、中央機関、監督者の組み合わせ、および組合員資格規則はすべて異なる。これらを混同することは、[[banking/shinkin-bank-registry-japan|254-shinkin]] と [[banking/credit-cooperative-registry-japan|143-shinkumi]] の母集団を一つの誤ったカテゴリーに平板化する。
- **労金 ≠ 信金 / 信組。** 労金は、独特の労働組合 / 消費者協同組合の組合員構造、法令（労働金庫法）、および 厚労省 の共管を持つ。13労金マップもまた、254信金 / 143信組 のロングテール母集団とは構造的に異なる。
- **JA 非信用連合会は銀行エンティティではない。** [[cooperative-banks/ja-zenchu|JA 全中]] は 一般社団法人（代表 / 監査団体）、[[cooperative-banks/ja-zen-noh|JA 全農]] は商業連合会（肥料 / 飼料 / 農産品）、[[non-life-insurers/ja-kyosairen|JA 共済連]] は協同組合共済保険連合会である。[[cooperative-banks/norinchukin|農中]] のみが銀行側の中央機関である。これらを預金取扱ユニバースに列挙してはならない。
- **森林組合（JForest / 森林組合）。** [[cooperative-banks/norinchukin|農中]] は森林組合システム（JForest）の中央機関でもあるが、JForest は JA / JF に匹敵する意味のある規模の信用事業連合会レイヤーを持たない。JForest は [[cooperative-banks/norinchukin|農中]] の 系統 マンデートの 4番目の協同組合の脚であり、本マトリクス上の 5番目の協同組織金融レーンではない。
- **業界団体 対 中央機関。** 各システムは、組合員銀行中央機関（銀行 / 財務 / 投資 / 清算）AND 業界団体（代表 / 政策 / 研修）の両方を持つ。信金についてはこれらは [[cooperative-banks/shinkin-central|信金中金]] 対 [[financial-regulators/zenshin-kyo|全信協]]。信組についてはこれらは [[cooperative-banks/zenshin-kumi|全信組連]] 対 全信中協。労金についてはこれらは [[cooperative-banks/rokin-renraku|労金連]] 対 全国労働金庫協会。両者を混同してはならない。
- **地域 JA / 信農連 / 信漁連 の数は時間とともに変動する。** 上記で引用した 497  / 31  / 71  / 10  のレイヤー数は 2025-04 [[cooperative-banks/norinchukin|農中]] 開示を反映している；長期的な統合がこれらの数を圧縮し続けている。
- **スケール数値。** 総資産、預金、資金量は異なる指標です。ソースの日付と定義を保持し、それらを AUM ランキングに組み合わせないでください。

## Related

- [[banking/INDEX|banking index]]
- [[banking/cooperative-banking-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/ja-bank-system-japan]]
- [[banking/jf-marine-bank-system-japan]]
- [[banking/shinkin-bank-registry-japan]]
- [[banking/credit-cooperative-registry-japan]]
- [[banking/rokin-bank-registry-japan]]
- [[banking/regional-bank-consolidation-pattern]]
- [[cooperative-banks/norinchukin]]
- [[cooperative-banks/shinkin-central]]
- [[cooperative-banks/zenshin-kumi]]
- [[cooperative-banks/rokin-renraku]]
- [[cooperative-banks/ja-zenchu]]
- [[cooperative-banks/ja-zen-noh]]
- [[non-life-insurers/ja-kyosairen]]
- [[cooperative-banks/jf-shingyoren]]
- [[cooperative-banks/jf-zengyoren]]
- [[financial-regulators/zenshin-kyo]]
- [[financial-regulators/yokin-hoken-kiko]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: 信用金庫免許一覧。
- FSA: 信用組合認可一覧。
- FSA: 労働金庫免許一覧。
- FSA: 中小・地域金融機関向けの総合的な監督指針、第 V 部 協同組織金融機関。
- 信用金庫法 / 中小企業等協同組合法 / 協同組合による金融事業に関する法律 / 労働金庫法 / 農業協同組合法 / 水産業協同組合法 / 農林中央金庫法（日本法令外国語訳ポータル）。
- 全国信用金庫協会: 信用金庫の制度。
- [[cooperative-banks/norinchukin|農林中央金庫]] 公式: 農林中央金庫の特徴（JA バンク / JF マリンバンクのレイヤー数、2025-04 時点）。
- JA バンク: JAバンクのしくみ / JAバンクシステム。
- JF マリンバンク: 基本方針 / システム概要。
- [[cooperative-banks/shinkin-central|信金中央金庫]] ディスクロージャー誌。
- [[cooperative-banks/rokin-renraku|労働金庫連合会]] 公式プロフィール（2025-03  開示）。
- JA グループ ファクトブック（org.ja-group.jp）。
- DICJ: 預金保険機構 公式サイト。
- 農水産業協同組合貯金保険機構（並行する協同組織金融保険制度）。
- 日本銀行: 対象となる当座預金のカテゴリーと現在の取引先リスト。
- 農林中央金庫 組織概要 (連結総資産 ¥83.293兆, 2025-09-30): https://www.nochubank.or.jp/about/profile.html
- JAバンク 貯貸金動向（JA 貯金残高 約 ¥107兆、2025-03末）: https://www.jabank.org/about/jyokyo/
- 信金中央金庫 会社概要 (総資産 ¥46.5596兆, 2026-07-24): https://www.shinkin-central-bank.jp/about/profile/company.html
- 全国信用組合中央協会 信用組合業界概況（預金積金 ¥23.9兆、2025-03末）: https://www.shinyokumiai.or.jp/credit_cooperative/outline.html
- 全国労働金庫協会 数字で知るろうきん / 2024年度決算概況（預金 ¥23.0兆、FY2024）: https://all.rokin.or.jp/about/accounts.html

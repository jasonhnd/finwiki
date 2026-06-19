---
source: policy-finance/japan-project-finance-stack-diagram
source_hash: 8654ee6cf4aa61f1
lang: ja
status: machine
fidelity: ok
title: "日本のプロジェクトファイナンス・スタック図 (JOGMEC / JBIC / NEXI / メガバンク / SPV)"
translated_at: 2026-06-19T06:09:18.066Z
---

# 日本のプロジェクトファイナンス・スタック図 (JOGMEC / JBIC / NEXI / メガバンク / SPV)

## Wiki ルート

本項目は [[policy-finance/INDEX|policy-finance index]] の下に位置する、日本が海外の資源およびインフラのプロジェクトをどのようにファイナンスするかの機関横断マップである。各機関を単独で見るには [[financial-regulators/jbic]]、[[policy-finance/nexi]]、[[policy-finance/jogmec]] と、公的条件の規制上の上限については [[policy-finance/oecd-export-credit-arrangement]] と、同じメガバンクが政策金融のペリメーターの外で民間シンジケート・デットをどのように組成するかについては [[finance/japan-acquisition-finance]] と併せて読むこと。

## TL;DR

典型的な日本の海外資源またはインフラのプロジェクトは、1 つのバランスシートの上には乗らない。リスクは、スポンサー SPV の背後に積み上げられた 4 つの公的および民間の層にスライスされる: [[policy-finance/jogmec|JOGMEC]] は上流層でエクイティと探鉱／地質リスクを取り、[[financial-regulators/jbic|JBIC]] はソブリンと整合した海外投資ローン、アンタイドローン、輸出バイヤーズクレジットを貸し付け、[[policy-finance/nexi|NEXI]] は商業銀行融資の上で政治リスクと商業リスクを保険し、メガバンク・シンジケート（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG / SMBC]]、[[megabanks/mizuho-fg|Mizuho FG]]）は商業ローンを提供し、しばしば 1 行がエージェント／ファシリティ・バンクとなる。このスタックが存在するのは、いかなる単一のバランスシート —— 公的であれ民間であれ —— も、探鉱リスク、ソブリンリスク、政治リスク、および長期の商業リスクのフルバンドルを単独で担うことができないからである。

## スタックの ASCII 図

```
                         +---------------------------------------+
                         |        SPONSOR SPV / PROJECT CO       |
                         |  (trading houses, oil majors, IPP /   |
                         |   miners; equity sponsors;             |
                         |   limited-recourse borrower)           |
                         +-------------------+-------------------+
                                             ^
                                             |  equity + senior debt
                                             |
       +----------+   equity / +-------------+-------------+   commercial loan
       |          |  ex-risk   |       FINANCING STACK     |   tranche
       |  JOGMEC  |----------->|                           |<------------------+
       |          |  resource  |   senior debt  |  equity  |                   |
       +----------+  equity    |   tranches     |  layer   |                   |
            ^                  +---+-----+------+----+-----+                   |
            |  policy /            |     |           |                         |
            |  energy security     |     |           |                         |
            |                      v     v           v                         |
       +----+----+        +--------+   +-------+   +---------+        +--------+--------+
       |  METI / |        |  JBIC  |   | NEXI  |   |  Other  |        |    Megabank    |
       |  MOFA   |        | (ECA   |   |(ECA   |   | ECAs /  |        |    syndicate   |
       |  policy |        | direct |   |insur- |   | MDBs    |        | MUFG / SMBC /  |
       +---------+        | loan / |   |ance)  |   | (co-fin)|        |    Mizuho      |
                          | untied |   |       |   |         |        | (commercial    |
                          | loan / |   |       |   |         |        |  loans, agent  |
                          | buyer  |   |       |   |         |        |  bank, hedges) |
                          | credit)|   |       |   |         |        +--------+-------+
                          +---+----+   +---+---+   +----+----+                 |
                              |            |            |                      |
                              |  loan      |  insurance |  co-financing        | commercial
                              |  proceeds  |  cover     |                      | loan
                              v            v            v                      v
                         +----+------------+------------+----------------------+----+
                         |               COMMON TERMS / INTERCREDITOR              |
                         |  OECD Arrangement minimum premia + tenor caps;          |
                         |  Equator Principles ESG screen; common security trust   |
                         +----------------------------+---------------------------+
                                                      |
                                                      v
                                                Project cash flows
                                          (LNG offtake, mining offtake,
                                           power PPA, infra availability)
```

この図は様式化されている。実際のディールは順序を入れ替える —— 例えば、JBIC はその特別業務勘定を介して直接エクイティ・ステークを取ることがあり、NEXI は輸出契約ではなく商業ローンの一部をラップすることがあり、マルチラテラル（ADB、世界銀行、AIIB）または同業 ECA（K-EXIM、US EXIM、EDC、KfW IPEX）がしばしば日本のスタックと並んで位置する。

### JOGMEC — エクイティ／探鉱リスク

[[policy-finance/jogmec|JOGMEC]] は資源安全保障のノードである。プロジェクトファイナンス・スタックの上で、それは他の貸し手が引き受けを拒否するリスクを担う: FID 前の探鉱、地質および埋蔵量のリスク、そして上流の石油、ガス、重要鉱物資産へのエクイティ参加。手段には、日本の商社および電力会社の資源開発子会社へのエクイティ資本注入、資産取得支援、および探鉱借入のための債務保証が含まれる。JOGMEC のキャップテーブル上のプレゼンスは、しばしば [[financial-regulators/jbic|JBIC]] とメガバンク・シンジケートが前進することを可能にするシグナルである —— 埋蔵量が証明され、プロジェクトがバンカブルになると、シニア・デット層をサイジングできる。

### JBIC — ソブリンと整合した海外投資ローン、アンタイドローン、輸出バイヤーズクレジット

[[financial-regulators/jbic|JBIC]] は海外プロジェクトのための日本の国家の直接貸付部門である。スタックの上で、それは通常、次の 1 つまたは複数として現れる: 日本の機器（例: タービン、液化トレイン、鉄道システム）の外国の買い手への **輸出バイヤーズクレジット**; メガバンクと並んで協調融資する日本系の SPV への **海外投資ローン**; または、日本への長期の資源輸入を確保するためのソブリンまたはソブリンに隣接する借り手への **アンタイドローン**。JBIC の役割は、部分的にはソブリンと整合したテナー（資源とインフラについて 15–25  年）をもたらすことであり、部分的には商業銀行がその背後に座ることのできる国家のカウンターパーティを提供することである。

### NEXI — 政治リスク／商業リスク保険

[[policy-finance/nexi|NEXI]] は、商業の貸し手が裸では取らないリスクをラップする。プロジェクトファイナンス・スタック上のコア製品は、**海外投資保険**（エクイティ投資に対する収用、戦争、送金制限、および契約違反をカバー）; **貿易・投資保険のバイヤーズクレジット向け**（外国の買い手への商業銀行ローンに対する政治的および商業的デフォルトリスクをカバー）; および **ローン保険**（海外貸付に対する政治的／商業的デフォルトをカバー）である。NEXI のカバーがあれば、メガバンク・トランシェは、リスクウェイト資産の目的およびカントリーリミットの目的のために、実質的に部分的に国家保証される。

### メガバンク・シンジケート — 商業銀行ローン、エージェント・バンクの役割

日本のメガバンク三社 —— [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG / SMBC]]、[[megabanks/mizuho-fg|Mizuho FG]] —— は商業ローン・トランシェを提供し、大型 LNG および鉱業ディールではほぼ常に外国の銀行（フランス、シンガポール、米国、オーストラリア）と並んで提供する。1 行が通常 **エージェント／ファシリティ・エージェント** の役割を取り、インタークレジターのメカニクスを運営し、ドローダウンとウォーターフォールを管理する。メガバンクはまた付随サービスを提供する: FX および金利のヘッジ、運転資金ライン、オフテイク・フローのための貿易金融、そして COD 後のボンドまたはサステナビリティ・リンク市場への借り換え。政策金融のペリメーターの外で、同じ銀行が純粋な民間ディールを組成する —— 同じシンジケート機構が LBO および企業 M&A のためにどのように再利用されるかについては [[finance/japan-acquisition-finance|Japan acquisition finance]] を参照。

### スポンサー SPV — プロジェクト会社、エクイティ・スポンサー

記録上の借り手は、単一目的のプロジェクト会社である。エクイティ・スポンサーは通常、次のコンソーシアムである: 日本の商社（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] はエクイティ・スポンサーではない —— 商社は: 三井、三菱商事、住友商事、伊藤忠、丸紅、双日 である）、日本の電力会社（JERA、東京ガス、大阪ガス、関西電力）、ホスト国の国営石油会社または国営鉱業会社、および 1 社以上の国際的な資源メジャー（例: TotalEnergies、Shell、BHP、Rio Tinto）。SPV はリミテッド・リコースである: 貸し手は主としてプロジェクトのキャッシュフローを見るのであって、スポンサーのバランスシートを見るのではない。

## 典型的なディールフローのタイムライン

| Stage | Months from start | What happens | Who is driving |
|---|---|---|---|
| Concept / LOI | 0–6 | Pre-feasibility, resource identification, host-country MOU, term sheet between sponsors | Trading houses, JOGMEC scoping |
| Pre-FEED / FEED | 6–24 | Engineering studies, environmental and social impact assessment, fiscal regime negotiation | Sponsors, EPC contractors |
| Bankability work | 18–36 | Lenders' technical advisor, market consultant, legal due diligence, insurance broker bind structure | Megabanks, JBIC, NEXI underwriters |
| FID | ~24–36 | Final investment decision by sponsors conditional on financing | Sponsor boards |
| Financial close | 24–42 | Common terms agreement, intercreditor agreement, ECA documentation, security trust | Agent bank, lenders' counsel |
| Drawdown / construction | 36–84 | Pro-rata drawdowns across JBIC, NEXI-covered commercial tranches, sponsor equity | EPC, owner's engineer |
| COD / first cargo | ~7 years | Mechanical completion, lender reliability test, switch from sponsor support to project cash flow | Project Co operations |
| Operations / refinance | 7+ years | Senior debt repayment from offtake revenues; potential bond refinancing of commercial tranche | Treasurer / agent bank |

実際のディールはずれ込む。LNG メガプロジェクトは、しばしば FID から初出荷まで 5–8  年を要し、シニア・デットの完済までにさらに 10–15  年を要する。

## 最近の例示的な事例

公に発表された関与のみがここで挙げられる; トランシェの規模と構造は簡略化されている。

- **モザンビーク LNG（Area 1）** — JBIC はマルチ ECA パッケージの一部としてシニア・ローンをアレンジした; NEXI は商業銀行トランシェに保険カバーを提供した; 日本のメガバンクは US EXIM、UKEF、その他の ECA と並んで商業トランシェに参加した。スポンサー・コンソーシアムには TotalEnergies（オペレーター）、三井、ONGC Videsh、その他が含まれた。このプロジェクトは、2021  のセキュリティ・インシデント後のフォースマジュール・ストレス下での ECA スタッキングを例示する。
- **オーストラリア LNG（Ichthys、Wheatstone、およびより早期の North West Shelf 拡張）** — 複数の日本主導の LNG 開発が、JBIC 直接貸付、NEXI カバー付き商業銀行トランシェ、およびメガバンク・シンジケートでファイナンスされた。スポンサーには INPEX（Ichthys オペレーター）、Chevron、Shell、および日本の商社／電力会社のエクイティ・スライスが含まれる。
- **銅／リチウム鉱業** — JOGMEC は日本の商社を通じて銅、ニッケル、リチウムのプロジェクトへのエクイティ参加を公に発表してきた（例: チリおよびオーストラリアの銅、カナダおよびオーストラリアのリチウム、インドネシアのニッケルへの過去の投資）—— 典型的な JOGMEC のステークは、日本のスポンサーの背後にあるマイノリティのエクイティ・ラインであり、商業デットは JOGMEC の外にある。
- **インフラ: 電力と鉄道** — JBIC の海外投資ローンに NEXI バイヤーズクレジット保険を加えたものが、南および東南アジアの日本主導の IPP プロジェクト（ガス火力および再生可能エネルギー）、および日本の鉄道メーカーに結びついた車両／都市鉄道のパッケージ（例: MRT / メトロの納入）を支援してきた。

特定のトランシェ規模については、正確なファシリティ名と日付について JBIC および NEXI のプレスリリースに対して確認すること。

## これが純粋な商業シンジケートローンとどう異なるか

純粋な商業シンジケートローン —— 日本の国内買収または企業の借り換えのための —— は、JOGMEC、JBIC、または NEXI を必要としない。メガバンクは、しばしばレバレッジとインタレスト・カバレッジに結びついたコベナンツとともに、企業のバランスシートに対して自らのブックで貸し付け、テナーは 5–10  年である。その構造については [[finance/japan-acquisition-finance|Japan acquisition finance]] を参照。

プロジェクトファイナンス・スタックは、5 つの点で異なる:
1. **リスクのスライス**: 各層は、1 つのバランスシートがすべてを吸収するのではなく、定義されたスライス（探鉱、ソブリンのテナー、政治リスク、商業信用）を取る。
2. **テナー**: ECA トランシェは、民間シンジケートが支援する範囲を超えて、シニア・デットを 15–25  年へと押し上げる。
3. **プライシング・ディシプリン**: [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]] の下での最低プレミアおよび CIRR フロアが、ECA の価格競争がマージンを崩壊させることを防ぐ。
4. **リコース**: フル・コーポレート・リコースではなく、プロジェクトのキャッシュフローと定義されたスポンサーサポートのエンベロープに限定される。
5. **ドキュメンテーションの重さ**: コモンタームズ・アグリーメント、インタークレジター・アグリーメント、および ECA 固有のコベナンツが、ドキュメンテーション・パッケージを国内シンジケートローンより一桁重くする。

## なぜ各層が存在するか — 市場の失敗のフレーミング

- **探鉱リスク（JOGMEC）**: 上流の地質リスクは、ヘビーテールの損失分布と長いリードタイムを持つ。民間のエクイティ資本だけでは、限界的なリターンの重要鉱物のために、地政学的にセンシティブな法域での FID 前の探鉱をファンドすることに消極的である。国家のエクイティ／リスクシェアリングのビークルが、日本の政策目的（資源安全保障）が要求する価格でそのリスクの唯一の買い手である。
- **ソブリンテナーの貸付（JBIC）**: 商業銀行は、20 年のヘッジされていないソブリン・エクスポージャーの貸付を経済的に魅力のないものにする、バーゼルのリスクウェイトと預金者テナーのミスマッチに直面する。政府に裏付けられたファンディングへのアクセスを持つ国家の貸し手が、政治的に許容可能な価格でそのテナーを延長できる。
- **政治リスク保険（NEXI）**: 民間の政治リスク保険市場（Lloyd's、MIGA、民間シンジケート）は、国ごと、ペリルごとにキャパシティの上限を持つ。フロンティア国での数十億ドルの LNG プロジェクトについては、民間のキャパシティは不十分である; 国家の保険がそのギャップを埋める。
- **商業銀行シンジケート（メガバンク）**: ECA のバッキングがあってさえ、付随サービス（ヘッジ、エージェントの役割、運転資金）のため、そして純粋な国家金融が欠くであろう市場プライシングのディシプリンを提供するために、民間銀行が必要である。[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]] のプレゼンスはまた、国家機関も参照する Equator Principles の ESG デューデリジェンスにプロジェクトをコンプライアントに保つ。
- **SPV / スポンサー**: プロジェクトの失敗が商社または電力会社の親会社の格付けされたバランスシートを毀損しないように、リミテッド・リコースのビークルが必要である。これが、親会社が複数の並行プロジェクトに参加することを可能にするものである。

各層は、その下の層が価格付けできないリスクを吸収する。いずれか 1 つの層を取り除けば、ディールは構築されない —— あるいは、競合の政策金融スタックによってのみ構築される。

## Related

- [[policy-finance/INDEX]]
- [[financial-regulators/jbic]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/japan-policy-finance-system]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## Sources

- JBIC official site (https://www.jbic.go.jp/en/) — institutional role, lending products, overseas investment loan / untied loan / export buyer credit definitions.
- NEXI official site (https://www.nexi.go.jp/en/) — Overseas Investment Insurance, Trade and Investment Insurance, Loan Insurance product descriptions.
- JOGMEC official site (https://www.jogmec.go.jp/english/) — equity participation, asset acquisition support, exploration / development risk-sharing mandate.
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/) — minimum premia, repayment-term caps, sector understandings including the Coal Sector Understanding.
- JBIC and project-sponsor public press releases for Mozambique LNG financing.
- METI export and investment insurance overview (https://www.meti.go.jp/english/policy/trade_and_invest/export_invest.html) — policy framing of NEXI / JBIC roles.

---
source: derivatives/structured-bond-japan-retail-issuance
source_hash: 642523bec383e99a
lang: ja
status: machine
fidelity: ok
title: "ストラクチャード債 日本リテール発行"
translated_at: 2026-06-18T23:33:48.345Z
---

# ストラクチャード債 日本リテール発行

## TL;DR

「仕組債」（*shikumisai*）は、デリバティブのペイオフを組み込んだリテール向けの債券型商品を指す日本語の包括的用語であり — 典型的にはノックインバリアを伴うエクイティ連動ノート（EB、*Equity Bond*）、通貨連動預金、プットストライク・アット・ディスカウントを伴うリバースコンバーチブル債、そしてデジタル／レンジアクルアルノートである。これらの商品は、日本の長引く低利回り環境下で、メガバンク系列の証券会社（[[securities-firms/smbc-nikko|SMBC Nikko]]、[[megabanks/mizuho-bank|Mizuho]] 証券、MUFG / MUMSS）、独立系リテール証券会社（[[securities-firms/daiwa-sg|Daiwa]]、[[securities-firms/nomura-hd|Nomura]]）、そして地方銀行によって、**利回りを追い求めるリテール投資家**に対して大規模に販売された。**2022-2023 の FSA の取り締まり**は、適合性および開示について行われ、[[securities-firms/nomura-hd|Nomura]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]] の子会社に対する行政命令という結果をもたらし、主要な販売会社に対し高齢者／知識の乏しいリテールへの仕組債販売の停止または制限を強い、**適合性および開示**を構造的な規制上の優先事項へと引き上げた。新規のリテール発行は 2023 以降、急激に縮小した。

## Wiki ルート

本エントリは [[derivatives/INDEX|derivatives index]] の配下にリテールストラクチャード商品の販売ページとして位置し、最も深いシングルネーム EB 分析である [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in structured product mechanics]] と対になる。信用デリバティブの構成要素（一部のストラクチャード債はクレジットリンクのトランシェを組み込む）については [[derivatives/japan-cds-market-overview|Japan CDS market overview]] と、信用スプレッドの構成ブロックについては [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] と、金利のアンダーレイについては [[derivatives/japan-irs-market|Japan IRS market]] と、FX 連動商品とのファンディングカーブの相互作用については [[derivatives/yen-basis-swap-market|yen basis swap market]] と併せて読むこと。

より広範な資本市場のコンテキストについては [[finance/INDEX|finance index]]、機関投資家向けのエクイティ連動カウンターパートについては [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]、メガバンクの販売コンテキストについては [[banking/INDEX|banking index]]、機関投資家向けの外貨／ストラクチャード資産の利用については [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]、そしてディーラー側のヘッジプラミングについては [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] をクロスリファレンスのこと。

### コアのストラクチャード債カテゴリー

| Product | Japanese term | Payoff core |
|---|---|---|
| ノックインバリア付きエクイティボンド（EB） | EB債 / 株価連動債 | 原株がノックインバリアを突破しない限り額面 + クーポンを支払い、突破した場合は株式またはバリア化された金額で支払う |
| オートコーラブル EB / エクスプレス | オートコーラブル | 原資産が観察日にオートコールしきい値を突破した場合、加速されたクーポンと全額償還を支払う; さもなければ継続 |
| リバースコンバーチブル | リバース・コンバーチブル | プットオプションのショートを組み込んだ高クーポン債; 株がストライクを下回ると株式で償還 |
| 通貨連動預金（二重通貨預金） | 二重通貨預金 / デュアルカレンシー | 預金は高い円利回りを支払う; 元本は所定のレートで非円通貨により償還（通貨ショートを組み込み） |
| パワーリバースデュアルカレンシーノート（PRDC） | パワーリバース | 長期の FX 連動の円支払い／ドル支払いノート; 複雑なバミューダンコーラブル構造 |
| クレジットリンクノート（CLN） | クレジット・リンク債 | 参照クレジットがデフォルトしないことを条件に増強されたクーポンを支払う債券 |
| レンジアクルアルノート | レンジアクルアル | 参照レート／FX／インデックスがレンジ内にとどまる日にのみクーポンが累積する |
| デジタル／ワンタッチノート | デジタル | 参照がしきい値にタッチ／超過した場合に大きなクーポンを支払い、さもなければ無し |
| エクイティインデックス連動ノート（バスケット） | バスケット型 | ワーストオブバスケットに連動するペイオフ（典型的には Nikkei 225, 、S&P 500, 、EuroStoxx 50） |

EB ノックイン（とりわけ単一の日本株またはワーストオブバスケットに対するオートコーラブル）は、ピークの 2018-2022 期間中、ボリュームでリテール販売の主力商品であった。

### 構造のバリエーション

| Feature | Description |
|---|---|
| 単一ネームの原資産 | 大半の販売されたリテール EB は単一の日本上場株を参照（例：トヨタ、ソニー、ソフトバンク、NTT） |
| ワーストオブバスケット | 三〜五の参照資産; ペイオフはワーストオブで、リスクが増大 |
| オートコールしきい値 | 通常は初期参照の 100 パーセント（観察日に上昇していれば額面 + クーポンで返済） |
| ノックインバリア | 通常は初期参照の 50-70 パーセント |
| クーポン | 条件付きクーポン（ノックイントリガーがない場合にのみ支払い）または無条件の固定クーポン |
| 満期 | 通常 3-5 年; オートコール機能が期待存続期間を短縮する |
| 通貨 | 日本のリテール向けには JPY で発行; 一部は通貨オーバーレイのバリアントとして USD または EUR で発行 |
| コーラブル機能 | 一部の構造ではバミューダンコーラブル |

### 発行体セット

| Issuer type | Role |
|---|---|
| グローバル銀行（特別目的ビークル） | Goldman、JPMorgan、Morgan Stanley、BNP Paribas、Credit Suisse（歴史的に）、HSBC、Citi、Barclays が SPV プログラムを通じて発行 |
| 日本籍のメガバンクプログラム | [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（SMFG 経由）、[[megabanks/mizuho-bank|Mizuho]]（みずほ FG 経由）が専用プログラムを通じて発行 |
| 欧州銀行の発行体 | Société Générale、BNP、Credit Suisse、UBS がストラクチャード商品の組成で歴史的に支配的 |
| 米銀の発行体 | Goldman、JPM、MS、Citi |
| 東京上場の特別目的発行ビークル | あまり一般的でない; 大半のストラクチャード債は税務／規制上の効率性のためオフショアで発行 |

### 販売チャネル

| Distributor | Distribution model |
|---|---|
| [[securities-firms/smbc-nikko|SMBC Nikko]] | メガバンク系列のフルサービス証券会社; 2022 を通じて主要な販売会社 |
| みずほ証券（[[megabanks/mizuho-bank|Mizuho]] FG 経由） | メガバンク系列のフルサービス証券会社; 2022 を通じて主要な販売会社 |
| MUFG / MUMSS（[[megabanks/mufg|MUFG]] 経由） | メガバンク／グローバル JV 証券会社; 主要な販売会社 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 独立系リテール証券会社; 歴史的にストラクチャード債の販売で非常にアクティブ |
| [[securities-firms/nomura-hd|Nomura Securities]] | 最大のリテール証券会社; 相応の販売会社 |
| 地方銀行（サブ販売） | メガバンク証券パートナーからのストラクチャード商品をサブ販売 |
| オンライン証券会社 | 複雑なストラクチャード債にはあまりアクティブでない; 一部のプレーンバニラのストラクチャード預金 |

### アレンジャー手数料

ストラクチャード債のアレンジャーおよび販売会社の手数料は、歴史的に商品エコノミクスの相応の部分を占め、発行価格対フェアバリューのギャップに組み込まれていた。**手数料負担**（通常は想定元本の 3-10 パーセント、複雑な構造ではときにそれ以上）は、FSA の取り締まりの主要な要素となった。

## ヘッジメカニクス

発行体は通常、組み込まれたデリバティブをディーラーとバックトゥバックでヘッジする。

| Position | Hedge |
|---|---|
| 発行体は債券のロング、組み込みデリバティブのショート（ノックインプット、オートコールコール、FX オプション、など） | 発行体は反対のポジションを取るディーラーとバックトゥバックのデリバティブトレードを締結 |
| ディーラーウェアハウス | ディーラーはエクスポージャーを集約し、エクイティ／FX／クレジット市場でデルタ／ベガ／バリアガンマのヘッジを運営 |
| リスクリサイクリング | ディーラーはインデックストレード、上場オプション、OTC インターディーラートレードを通じてリスクを再分配しうる |

日本のシングルネーム EB については、多くのノートが同じ参照ネームを共有する場合（例：集中したソフトバンク EB の発行はソフトバンク株の相応のヘッジフローを生み出す）、原株におけるディーラーのヘッジが相応のフローになりうる。

### メカニクス

| Feature | Description |
|---|---|
| 元本通貨 | JPY（預金） |
| 利回り | 当時の JPY 預金金利に対する増強された JPY クーポン（例：年率 3-8 パーセント） |
| 償還オプション | 満期において、発行体は額面で JPY により償還する、または所定の為替レートで非円通貨により償還する |
| 発行体の選択 | 発行体は発行体にとってより安い方で償還する（すなわち、投資家はより価値の低い方を受け取る） |
| 組み込みデリバティブ | 投資家は暗黙的に JPY プット／非円コールオプションのショート |

一般的な参照通貨：USD、AUD、NZD、EUR、GBP、ZAR、TRY（歴史的により高利回りのテール）。TRY 連動のバリアントは、トルコリラのボラティリティを踏まえてエンフォースメントと消費者保護の注目を集めた。

### リスク

非円通貨がストライクに対して JPY に対して大幅に減価した場合、投資家は当初の JPY 元本よりも価値の低い非円通貨を受け取る。損失は相当なものになりうる。

### 販売

通貨連動預金は、歴史的にメガバンクのリテールカウンター、地方銀行、そして郵便局チャネルを通じて販売された。ラッパーのシンプルさ（「預金」というフレーミング）は、リテール投資家にとって組み込まれたオプションショートのリスクをしばしば覆い隠した。

### メカニクス

| Feature | Description |
|---|---|
| クーポン | 存続期間を通じて支払われる固定の高クーポン |
| 満期のペイオフ | 参照株がストライクを上回る場合 → 額面償還; 下回る場合 → ストライクで株式を引渡し（すなわち、投資家は額面より価値の低い株式を受け取る） |
| 組み込みデリバティブ | 投資家はストライクにおける参照株のプットオプションのショート |
| 参照 | 単一株またはワーストオブバスケット |

メカニズム的には EB に類似するが、プット行使がノックインバリアを通じた期中ではなく通常満期に行われるという点で、より債券的にフレーミングされる。

### 背景

FSA は、2017, 以来の**「顧客本位」**（顧客本位の業務運営、*kokyaku honi no gyōmu un'ei*）イニシアチブのもとで、複雑な商品のリテール販売をますます精査してきた。調査は、ストラクチャード債の複雑さとリテール投資家の知識／経験との間の広範なミスマッチを明らかにした。

### 2022 の FSA の所見

FSA の公開資料（2022年 10 月）および JSDA の自主規制アップデートは以下を文書化した。

| Finding | Concern |
|---|---|
| 知識のミスマッチ | リテールの買い手はしばしばバリアオプションのメカニクスとテールリスクの理解を欠いていた |
| 手数料の開示 | アレンジャー／販売会社の手数料負担が十分に開示されていなかった |
| 適合性の失敗 | 高齢の退職者、知識の乏しい顧客、商品リスクにミスマッチな保守的な投資家に販売された |
| 集中 | 同じ顧客への類似商品の繰り返しの販売が集中したテールエクスポージャーを生み出した |
| 代替手段との比較 | 同様の利回り増強を達成するより安価／よりシンプルな代替手段を提示することの失敗 |

### 行政命令

2022 の終盤から 2023, にかけて、FSA は複数の主要販売会社に対し業務改善命令と行政処分を発出した。

| Distributor | Action category |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | ストラクチャード債の販売プロセスに関する業務改善命令 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 業務改善命令; 上級経営陣の説明責任 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 業務改善命令; 適合性プロセスのレビュー |
| 複数の地方銀行証券部門 | ローカライズされた行政処分 |

販売会社は、リテールへのストラクチャード債販売を自主的に停止または大幅に制限した。いくつかの会社はリテールのストラクチャード債業務から完全に撤退し、または適格投資家チャネルに制限した。

### JSDA の自主規制

[[securities/japan-prime-brokerage-and-institutional-financing|JSDA]] は、ストラクチャード債の適合性に関する自主規制ガイダンスを厳格化した。

| Area | Guidance change |
|---|---|
| 適合性評価 | より厳格な知識／経験テスト; 書面による確認要件 |
| 開示 | 標準化されたリスク開示テンプレート; 明示的な「損失シナリオ」の図示 |
| クーリングオフ | 強化されたクーリングオフとリコースチャネル |
| 記録 | 販売会話の記録／文書化の義務化 |
| シニア顧客の保護 | 定められた年齢しきい値を超える顧客に対する特別な手続 |

### ボリュームへの影響

公開の JSDA / FSA の集計データは、リテールのストラクチャード債の販売ボリュームが 2022 から 2023にかけて非常に大幅に縮小したことを示した。販売は「ノックイン EB」商品から、よりシンプルなストラクチャード預金および／またはより高格付けのプレーンバニラ債へとシフトした。

## グローバルなストラクチャード商品リテール市場との比較

| Jurisdiction | Retail structured-product market character |
|---|---|
| 日本（2023以前） | 非常に大規模なリテールボリューム; メガバンク系列の証券会社が支配的な販売会社 |
| 日本（2023以降） | 大幅に縮小; 高齢者／知識の乏しいリテールに対する制限 |
| EU（PRIIPs 2018以降） | KID 開示が義務化; ボリュームは回復したが開示負担が上昇 |
| 英国（FCA 2014以降） | 適合性ルールが厳格化; ボリュームが実質的に縮小 |
| 香港（リーマン・ミニボンド 2008以降） | 厳格な適合性および集中ルールが導入された |
| 米国 | 大部分が機関投資家／適格投資家向け; リテールのストラクチャード商品は特定の販売チャネル経由 |

日本の 2023 の取り締まりは、独自の規制アプローチというよりも、グローバルなリテール保護基準への相応のキャッチアップを表している。

## 機関投資家向けストラクチャード債市場

リテールを超えて、機関投資家向けのストラクチャード債市場は以下のために継続する。

- 利回り増強型の信用商品を求める年金基金と生命保険会社（ESR ／会計上の制約を条件とする、[[insurance/japan-life-insurance-alm-overview|life ALM]] を参照）;
- ストラクチャードな負債または資産のラッパーを用いる事業会社のトレジャリー業務;
- 特定のオーバーレイまたは利回り増強の目的のためのアセットマネージャーのポートフォリオ。

機関投資家向けストラクチャード債は、異なる適合性基準（FIEA のもとでの適格機関投資家の枠組み）の対象となり、限定的な規制上の摩擦で継続する。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Customer First operating-principles policy materials; 2022-2023 supervisory action public releases.
- FSA: business-improvement order public releases on major distributors.
- JSDA: self-regulatory updates on structured-bond distribution; member rules and disclosure templates.
- BOJ: deposit and money-market statistics relevant to structured-deposit yield benchmarks.
- SMBC Nikko, Daiwa, Nomura: public IR materials on retail wealth-management business segment trends.

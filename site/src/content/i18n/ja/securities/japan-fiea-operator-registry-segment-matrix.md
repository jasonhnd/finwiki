---
source: securities/japan-fiea-operator-registry-segment-matrix
source_hash: a0256b53cee7ac10
lang: ja
status: machine
fidelity: ok
title: "日本 FIEA 業者登録セグメント・マトリクス"
translated_at: 2026-06-19T13:13:22.620Z
---

# 日本 FIEA 業者登録セグメント・マトリクス

## TL;DR

日本の金融商品取引法（FIEA / 金融商品取引法）は、**2026-04-30時点で 1,945 の金融商品取引業者（金融商品取引業者）** の単一の登録簿を管理しているが、その単一の登録簿は、資本フロア、許容業務の範囲、監督当局のルーティング、自主規制機関（SRO）への加盟、業者プロファイルが大きく異なる、機能的に区別される 9 つのセグメントを覆い隠している。本マトリクスは、FIBO 登録簿を 9 つの実務セグメント——**第一種金商業者、第二種金商業者、投資助言・代理業、投資運用業、第一種少額電子募集取扱業、電子取引基盤運営業、適格機関投資家等特例業務（第 63条）、暗号資産関連業務、PTS 認可**——に、加えて **適格機関投資家（QII）** の届出のみのカウンターパーティ層に分解する——「金融商品取引業者」に言及する wiki エントリが、戦略・資本・ガバナンスの問いが問われる前に、正しいセグメントへとルーティングされうるように。

## Wiki route

本ページは、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] のセグメント分解ルートとして [[securities/INDEX|securities index]] の下に位置する。法的スタックのマッピングについては [[financial-licenses/securities-license-stack|securities license stack]] と、投資運用業レーンについては [[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]] と、第一種のリテール・ブローカー・レーンについては [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] と、第一種の機関投資家・ホールセール・レーンについては [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage and institutional financing]] とあわせて読むこと。その下に位置する取引所 / PTS / 清算インフラは [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] にある。

## なぜこのマトリクスが重要か

「FSA 登録の金融商品取引業者」という一括りの言及は、ほぼすべての公開サーフェスのフィールドを左右する差異を覆い隠す：

- 業者がどの **法令条項** の下で登録されているか（FIEA 第 28 条第 1, 2, 3, または 4項；あるいは第 33, 63, 63-9, 条など）;
- どの **最低払込資本** フロアが適用されるか（セグメントに応じて ¥50 百万から ¥500 百万まで）;
- 業者が加盟しなければならない、または加盟しうる **JSDA、JIAA、JITA、または 暗号資産取引業協会** のいずれの自主規制機関か;
- どの **FSA の局または財務局** が監督するか;
- どの **投資家保護レジーム** が適用されるか（[[JapanFG/jiipf|Japan Investor Protection Fund]] の分別保管ルートは第一種を覆うが第二種は覆わない）;
- 業者がリテール投資家に勧誘できるか、適格機関投資家のみか、または特定投資家のカウンターパーティのみか;
- 業者が顧客資産を保有できるか、媒介のみか、または助言のみか。

セグメントレベルの分解がなければ、10人の投資助言・代理業のショップと、5,000人の第一種メガバンク証券部門が、同じ FIBO 登録簿の行のように見える。それらは同じビジネスではない。

## 登録簿全体のスナップショット

| 指標（FSA 2026-04-30 ワークブック時点） | 読み方 |
|---|---:|
| FIBO 業者総数 | 1,945 |
| 第一種金商業者（第一種金融商品取引業） | 291 |
| 第二種金商業者（第二種金融商品取引業） | 1,223 |
| 投資助言・代理業（investment advisory / agency） | 994 |
| 投資運用業（investment management） | 463 |
| 第一種少額電子募集取扱業（Type I small e-offering） | 70 |
| 電子取引基盤運営業（PTS-equivalent electronic trading） | 6 |
| 適格機関投資家等特例業務（第 63 条の届出） | 数千件（登録ではなく届出） |
| 暗号資産関連業務（暗号資産デリバティブ等） | オーバーラップ・セグメント、変動 |
| PTS 認可の行（別個の認可） | 11 |
| 適格機関投資家（QII） | 届出のみの特別なカウンターパーティ層 |

FSA は、1 つの業者が複数の登録を保有しうることを明示的に注記しているため、セグメントの小計は業者総数に合算されない。例えば、メガバンク証券部門は典型的に、1 つの法人内に 第一種 + 第二種 + 投資助言・代理業 + 投資運用業 を保有する。

管轄ルーティング（合計 1,945 ）：**金融庁 413, 北海道財務局 21, 東北財務局 14, 関東財務局 1,192, 東海財務局 56, 北陸財務局 10, 近畿財務局 152, 中国財務局 22, 四国財務局 14, 九州財務局 8, 福岡財務支局 41, 沖縄総合事務局 2**。関東財務局への集中は、金融サービス人口の構造的な東京 / 関東本社バイアスである。

## セグメント 1 — 第一種金商業者（第一種金融商品取引業）

- **法令。** FIEA 第 28 条第 1項；第 29条に基づき登録；資本フロアと行為規制は FIEA 第 III 章。
- **業者数。** FSA ワークブック上、登録された第一種業者は 291 。
- **資本フロア。** FIEA 内閣府令に基づく最低払込資本のベースラインは ¥50 百万で、**特定の業務にはより高いフロア**：PTS 相当の業者は ¥300 百万；引受適格な第一種会社は業務範囲に応じてさらに高い；自己資本規制比率（自己資本規制比率）は ≥ 120% を維持しなければならない（¥150% が監督上のトリガー、≥ 200% がターゲット）。
- **許容業務。** **流動性の高い証券**（上場株式、債券、ETF、ETN、REIT、上場デリバティブ、FX 証拠金取引、CFD、STO スキームの下で発行されたセキュリティトークン）のディーリング、ブローカレッジ、媒介、代理、引受。顧客資産の保管が許される（分別）。証券の引受は第一種に留保される。
- **監督当局。** 本店所在の都道府県に対応する財務局（大半 関東財務局 = 東京）；大規模なメガバンク / グローバル IB の第一種業者は 金融庁 の直接監督下にある。
- **自主規制への加盟。** [[financial-regulators/jsda|JSDA (日本証券業協会)]] が支配的な SRO である；FX 証拠金に注力する会社は 金融先物取引業協会（FFAJ）に加盟する；両方に加盟するものもある。JSDA への加盟は、リテール証券の第一種業者にとって実務上必須である。
- **投資家保護。** [[JapanFG/jiipf|Japan Investor Protection Fund (JIPF)]] のカバーが適用される——分別保管された顧客資産は、JSDA 会員の第一種破綻事象において顧客 1 名あたり ¥10 百万まで保護される。
- **典型的な業者プロファイル。** 総合証券会社——メガバンク証券部門（[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]]）、独立系 IB（[[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa SG]]）、オンライン・ブローカー（[[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]]、[[securities-firms/monex-group|Monex]]、[[securities-firms/gmo-click-securities|GMO Click]]、[[securities-firms/dmm-com-securities|DMM.com]]、[[securities-firms/paypay-securities|PayPay Securities]]）、外国 IB（[[securities-firms/goldman-sachs-japan|GS Japan]]、[[securities-firms/morgan-stanley-japan|MS Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JPM Japan]]、[[foreign-financial-institutions/citigroup-japan|Citi Japan]]、[[foreign-financial-institutions/bank-of-america-japan|BofA Japan]]、[[foreign-financial-institutions/ubs-japan|UBS Japan]]、[[foreign-financial-institutions/barclays-japan|Barclays Japan]]、[[foreign-financial-institutions/bnp-paribas-japan|BNP Paribas Japan]]、[[foreign-financial-institutions/deutsche-japan|Deutsche Japan]]、[[foreign-financial-institutions/socgen-japan|SocGen Japan]]）、FX / デリバティブのショップ（[[securities-firms/traders-securities|Traders Securities]]、[[securities-firms/saxo-bank-securities|Saxo Bank Securities]]、[[securities-firms/sbi-fx-trade|SBI FX Trade]]）。

第一種は最も広範な範囲である——上場市場のブローカレッジ、引受、ほとんどのリテール証券販売へのゲートである。

## セグメント 2 — 第二種金商業者（第二種金融商品取引業）

- **法令。** FIEA 第 28 条第 2項；第 29条に基づき登録；行為規制は第 III 章。
- **業者数。** 1,223 の第二種業者——群を抜いて最大の単一セグメント。
- **資本フロア。** 通常の第二種では最低払込資本 ¥10 百万；第 2 条第 2項に基づくファンド持分の「自己募集」（自己募集 / 自己私募）取扱業者には **最低 ¥50 百万**；FX 証拠金取扱業者は別個の内閣府令フロアを負う。
- **許容業務。** **第 2 項証券** の勧誘、ブローカレッジ、媒介、代理、自己募集——集団投資スキーム持分（FIEA 第 2 条第 2 項第 5 号および第 6号に基づくファンド持分）、外国信託の受益証券、モーゲージ担保証券、未上場株式、ファンド持分のセキュリティトークン、および集団投資スキームにおける類似の持分。**上場証券の取扱いや引受はできない**（それらは第一種を要する）。
- **監督当局。** 本店所在の都道府県別の財務局；関東財務局 に高い集中。
- **自主規制への加盟。** [[JapanFG/jiaa|Type II Financial Instruments Firms Association (第二種金融商品取引業協会, JIAA)]] が第二種業者の SRO である；加盟は、FSA の監督実務の下で、自己募集およびエクイティ・クラウドファンディング隣接業務にとって **事実上必須** である。
- **投資家保護。** JIPF は、第一種と同じ形では第二種に及ばない；分別保管規則は適用されるが、セーフティネットは構造的により弱い。
- **典型的な業者プロファイル。** プライベート不動産ファンド、インフラファンド、プライベートエクイティファンド、ヘッジファンド、農業ファンド、アニメ / コンテンツファンド、太陽光 / 再生可能エネルギーファンドの LP 持分を自己募集するファンド GP および運用会社系列、エクイティ・クラウドファンディング・プラットフォーム（[[JapanFG/funds-incorporated|Funds]]、[[JapanFG/crowdcredit-incorporated|Crowd Credit]]隣接）、信託受益権の媒介業者、およびセキュリティ・トークン・オファリングの販売プラットフォーム。

1,223 の第二種人口は、**日本のプライベート証券業務のロングテール** である——小規模な GP / ファンド運用ショップ、不動産 AM 系列、専門の販売プラットフォーム。

## セグメント 3 — 投資助言・代理業（Investment Advisory / Agency Business）

- **法令。** FIEA 第 28 条第 3項；第 29条に基づき登録；行為規制は投資助言 / 代理に関する FIEA 第 III 章のサブセクション。
- **業者数。** 994 の投資助言・代理業の業者。
- **資本フロア。** 最低払込資本 ¥5 百万——業者が顧客資産を一切保有しないため、**FIEA ユニバースで最も低い資本フロア**。
- **許容業務。** 投資助言（投資助言業）——レポート、ニュースレター、モデルポートフォリオ、または一対一のコンサルテーションを通じて提供される、証券、デリバティブ、投資判断に関する有償の助言；**および** 投資運用業の業者に代わっての代理 / 媒介（代理・媒介）（すなわち、投資一任契約のために IFA 相当の紹介者として行動する）。**顧客資産の運用や顧客の金銭 / 証券の保有はできない**——それらの業務は 投資運用業（セグメント 4）または第一種（セグメント 1）を要する。
- **監督当局。** 本店別の財務局；小規模業者は地方財務局に広く分布するが、東京が支配的なままである。
- **自主規制への加盟。** [[JapanFG/jiaa-advisory|Japan Investment Advisers Association (日本投資顧問業協会, JIAA)]]——同じ JIAA の略称が第二種の SRO と混同されうることに注意；助言の JIAA は 投資助言業 と 投資一任 / 投資運用業 の助言・代理を覆う。加盟は有力な助言業者の運用上の規範である。
- **投資家保護。** JIPF のカバーなし——業者は顧客資産を保有しないため、分別保管すべき資産がない。リスクは誤った助言 / 適合性 / 受託者責任のリスクである。
- **典型的な業者プロファイル。** **IFA プラットフォーム**（独立系ファイナンシャル・アドバイザー——オンライン・ブローカーとの提携を通じてますます有力に）、ブティックの投資ニュースレター発行者、ロボアドバイス媒介業者（運用ではなく助言する場合）、プラン資産配分を助言する年金コンサルタント、小規模なヘッジファンド・リサーチ・ショップ、投資一任 のマンデートを運用せずに紹介する外国 AM の日本紹介オフィス、および一人の 投資助言 個人事業主。

これは **規制上のエントリーポイント・セグメント** である——資本フロアが軽く、業務範囲が明確に定義されているため、多くの証券起業家がここから始める。

## セグメント 4 — 投資運用業（Investment Management Business）

- **法令。** FIEA 第 28 条第 4項；第 29 条に基づき、第 29-4-2 条の追加的なプルーデンス要件とともに登録；行為規制は投資運用に関する FIEA 第 III 章のサブセクション。
- **業者数。** 463 の投資運用業の業者。
- **資本フロア。** FIEA 内閣府令に基づく最低払込資本のベースラインは ¥50 百万；その上に純資産要件が重ねられる。マスマーケットの 公募投信 を運用するより大規模な 投資運用業 の業者は、追加的な開示およびリスク管理の要件を負う。
- **許容業務。** 投資一任運用（投資一任業）、投資信託の運用（投資信託委託業）、およびファンド資産の運用（ファンド運用業）——業者が顧客の金銭 / 証券に対して **投資の裁量を行使** する。資産の保管は一般に信託銀行に分離される（信託受託）。
- **監督当局。** より大規模な AM（レーン 1 のメガバンク AM クラスター——[[asset-managers/nomura-asset-management|Nomura AM]]、[[asset-managers/asset-management-one|AM-One]]、[[asset-managers/mufg-asset-management|MUFG AM]]、[[asset-managers/smd-am|SMD AM]]、[[asset-managers/daiwa-asset-management|Daiwa AM]]、[[asset-managers/nikko-asset-management|Nikko AM]]）およびグローバルな親会社（BlackRock Japan、JPMAM Japan、Fidelity Japan）は 金融庁 の直接監督に傾く；より小規模な国内 AM は 関東財務局 の下にある。
- **自主規制への加盟。** 公募投信 / 私募投信 を運用する AM には [[JapanFG/jita|Japan Investment Trusts Association (投資信託協会, JITA)]]；投資一任業 には JIAA。加盟はリテール公募ファンドの AM にとって実務上必須である。
- **投資家保護。** JIPF なし——顧客資産は AM ではなく信託銀行のカストディアンに置かれるため、分別保管は証券投資家保護ではなく信託業法（信託業法）を通じて流れる。
- **典型的な業者プロファイル。** アセットマネジャー——メガバンク系 AM、保険系 AM（[[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]] のレーン 2 ）、独立系 / オンライン AM（[[asset-managers/sbi-asset-management|SBI AM]]、楽天投信投資顧問、スパークス・グループ）、外資系 AM（BlackRock Japan、JPMAM Japan、Fidelity Japan、Schroders Japan、T. Rowe Price Japan、Pictet Japan）、年金 / 基金の投資一任マネジャー、日本国内で 投資一任 のマンデートを運用するヘッジファンド GP。

日本の投資運用ブックを運用する全 463業者の人口を反映する。

## セグメント 5 — 第一種少額電子募集取扱業（Type I Small Electronic Offering Handling Business）

- **法令。** FIEA 第 29-4-2 条（サブパラグラフ指定とともに第 29 条に基づき登録）；エクイティ・クラウドファンディング規制は 2014 の FIEA 改正により追加された。
- **業者数。** FSA ワークブックによると、第一種少額電子募集取扱業の業者は 70 。
- **資本フロア。** 最低払込資本 ¥10 百万（業務が狭いため通常の第一種より低い）；募集規模の上限は内閣府令で規制される。
- **許容業務。** 未上場株式証券の少額の公募の **オンライン媒介** というエクイティ・クラウドファンディング型——発行体の資金調達は **1 回の調達ラウンドあたり ¥100 百万、投資家 1 名あたり発行体ごとに年間 ¥500,000 を上限とする**。狭められた業務範囲は、フル第一種と比べた、より低い資本フロアとより軽いプルーデンス上の取扱いとのトレードオフである。
- **監督当局。** 関東財務局 の支配；FSA の直接監督はまれ。
- **自主規制への加盟。** [[financial-regulators/jsda|JSDA]] のエクイティ・クラウドファンディング・サブ SRO レジーム；第一種規則が当該業務のスライスに適用される。
- **投資家保護。** 業者が第一種登録者である限りで JIPF のカバーが適用される；顧客資産の分別保管規則が適用される。
- **典型的な業者プロファイル。** エクイティ・クラウドファンディング・プラットフォーム——[[JapanFG/funds-incorporated|FUNDINNO]]、[[JapanFG/securite-crowdfunding|Securite]]（エクイティ・クラウドファンディングの範囲内のとき）、日本クラウドキャピタル のレガシー事業体、[[securities-firms/sbi-securities|SBI Securities]] のエクイティ・クラウドファンディング・デスク（SBI Issuance Market）、CAMPFIRE Angels、Ichigon Cloud Funding、FUEL Online、および類似の発行体資金調達媒介業者。証券業務ではない、非 FIEA の「寄付」/「特典」型リワード・クラウドファンディングとは区別される。

小さいが戦略的に重要なセグメントである——日本のエクイティ・クラウドファンディング業界の法的足場である。

## セグメント 6 — 電子取引基盤運営業（Electronic Trading Platform Operation）

- **法令。** FIEA 第 28 条第 8 項第 4 号（2016 の改正により追加された電子取引基盤運営業）；行為規制は電子取引基盤に関する内閣府令。
- **業者数。** FSA ワークブックによると、電子取引基盤運営業の行は 6 。
- **資本フロア。** 業者が市場インフラの配管を運営するため、通常の第二種より高い内閣府令の資本フロア；自己資本規制比率が適用される。
- **許容業務。** 特定の店頭デリバティブのための **電子取引基盤** の運営——クレジット・デフォルト・スワップの参照指数、第 40-7, 条の電子取引義務の範囲内の店頭金利商品、および内閣府令で指定された類似の店頭商品。これは PTS とは **別個のライセンス** である（PTS は第 30条に基づくエクイティ類似の商品向け）——セグメント 9 を参照。
- **監督当局。** FSA の直接監督（市場インフラ業務）。
- **自主規制への加盟。** 単一の SRO マッピングなし；債券が取引される場合は JSDA のホールセール債券規則が適用される。
- **投資家保護。** リテール保護フレームワークではなくカウンターパーティレベルのもの——参加者は 適格機関投資家 / 特定投資家 の機関投資家のみ。
- **典型的な業者プロファイル。** ホールセール店頭デリバティブ電子取引基盤の運営者——グローバル IDB / ホールセール・ブローカーの子会社（Tradeweb Japan、MarketAxess Japan、BGC Partners Japan、Tullett Prebon Japan の相当、ライセンスを受けている場合の Bloomberg L.P. のトレーディングサービス日本系列）。非常に小さい業者人口で、インフラ上重要。

店頭デリバティブの透明性にとってレバレッジの高いセグメントである。

## セグメント 7 — 適格機関投資家等特例業務（第 63 条 QII 限定特例届出業務）

- **法令。** FIEA 第 63条；**フル登録ではなく届出レジーム**——業者は 金融商品取引業者 として登録されるのではなく、FSA に届け出る。
- **業者数。** **届出は歴史的に数千件に上る**——FSA は定期的に届出ブックを報告する；多くのシェル GP およびファンド運用ビークルがこのレジームを用いる。届出人口は 1,945 の FIBO 登録者数の一部ではない。
- **資本フロア。** 第 63 条自体に資本フロアはないが、**投資家側の制限** は厳格：少なくとも 1 名の投資家が 適格機関投資家（QII）でなければならず、ファンド内の非 QII 投資家は 49 の特定の者に制限される（各種制限）。
- **許容業務。** QII アンカーと 49-非 QII 上限の規則に従い、正式な第二種 / 投資運用業 の登録の外で 業務 として運営する GP による **集団投資スキーム持分** の自己募集および運用。**リテールに自由に勧誘することはできない**。
- **監督当局。** 関東財務局 がほとんどの届出を受理する；FSA は集計統計を監視する。
- **自主規制への加盟。** 第 63 条自体に基づく必須の SRO 加盟はない。
- **投資家保護。** 限定的——投資家は QII または適格・適切な特定の者でなければならない；レジームはリテール保護規則ではなくプロ投資家の洗練度に依拠する。
- **典型的な業者プロファイル。** 単一マンデートのプライベートエクイティ GP ビークル、単一ファンドのヘッジファンド GP、不動産ファンド SPV、資産担保金融 SPV、ファミリーオフィス投資ビークル、外国 GP の日本販売媒介業者（QII アンカーを中心に組成される場合）。FSA は、QII 限定とされたファンドでのリテール投資家の損失の後、2015〜2016 にレジームを大幅に厳格化した；それ以降のさらなる厳格化が悪用を狭めてきた。

生の件数では最大の **届出のみ** のセグメントであるが——レジームが構造的に機関投資家向けであるため、リテール投資家のエクスポージャーでは最小である。

## セグメント 8 — 暗号資産関連業務（Crypto-Asset-Related FIEA Business）

- **法令。** FIEA の暗号資産デリバティブ規則は 2019 の FIEA 改正により追加された（2020年 5 月施行）；暗号資産の現物取引は FIEA ではなく、資金決済法 暗号資産交換業 ライセンスの下で別個に規制される。
- **業者数。** **オーバーラップ・セグメント**——変動する；特定の第一種および第二種の業者が、暗号資産証拠金取引または暗号資産 CFD を取り扱うために追加の暗号資産デリバティブ・サブライセンスを登録する。
- **資本フロア。** 基礎となる第一種 / 第二種のフロアが適用される；その上に行為規制が重ねられる（暗号サブライセンス自体に別個の独立した資本フロアはない）。
- **許容業務。** 暗号資産デリバティブ——証拠金取引、CFD、Bitcoin / Ethereum およびその他の指定された暗号資産に関する先物類似の商品。現物の暗号取引は [[fintech/japan-stablecoin-and-crypto-regulation|PSA 暗号資産交換業]] のレジームの下にとどまる；STO / セキュリティトークン業務は、トークンが第 2 条第 3項に基づく証券を表す場合、FIEA の第一種（セグメント 1）の下で別個に規制される。
- **監督当局。** システミックリスクへの懸念を踏まえ、FSA の直接監督が支配的である。
- **自主規制への加盟。** [[JapanFG/jvcea|Japan Virtual and Crypto-Assets Exchange Association (JVCEA)]] が PSA 側の SRO である；FIEA の暗号デリバティブ業者は、オーバーラップする行為規制について JVCEA と相互作用する。
- **投資家保護。** 第一種の JIPF のカバーが適用される；暗号資産特有の顧客資産分別保管規則（コールドウォレット比率、ホットウォレット・エクスポージャー上限）が重ねられる。
- **典型的な業者プロファイル。** [[securities-firms/sbi-securities|SBI Securities]]（限定的な暗号デリバティブ・スリーブ）、[[securities-firms/gmo-click-securities|GMO Click Securities]]（暗号 CFD 商品）、[[securities-firms/dmm-com-securities|DMM.com Securities]] の DMM Bitcoin への隣接、および暗号 CFD ラインを追加した一握りの FX 証拠金会社。

小さいが戦略的に注視されるセグメントである——FIEA と PSA の境界に位置する。

## セグメント 9 — PTS 認可および 適格機関投資家（QII）届出層

- **法令。** FIEA 第 30 条第 1 項に基づく **PTS 認可**——スタンドアロンの FIBO セグメントではなく、第一種金商業者 の登録の上の **追加のサブ認可** として付与される。FIEA 第 2 条第 3 項第 1 号に基づく **適格機関投資家（QII）** の届出——ライセンスではなく、カウンターパーティ・ステータスの届出。
- **PTS 業者数。** FSA ワークブック上、PTS 認可の行は 11 。運営中の PTS ベニューには [[securities/japannext-securities|Japannext Securities]]（およびその J-Market / Cboe Japan / Chi-X Japan の歴史）、[[securities/osaka-digital-exchange|Osaka Digital Exchange (ODX)]]、SBI Japannext 隣接のベニュー、および少数の追加的なライセンスを受けた PTS 業者（一部は登録簿に残された休止 / 清算された認可）が含まれる。
- **QII 人口。** 数千の QII 届出済み事業体——生命保険会社、損害保険会社、銀行、証券会社、信託銀行、投資信託、年金基金、大規模基金、および資産規模 / プロ投資家の閾値を満たす適格な事業会社。QII 人口は、第 63 条（セグメント 7）、私募 ファンドの販売、および機関投資家保護のカーブアウトを支える。
- **資本フロア。** PTS 認可は基礎となる第一種を要する（内閣府令により PTS 相当の運営には ¥300 百万）。QII ステータスは資本フロアではなく、資産規模と適格事業体ステータスに基づく。
- **許容業務。** PTS——上場株式、ETF、REIT、上場社債のための私設取引システムの運営で、FIEA に基づく執行と価格形成の規則を伴う。QII——カウンターパーティを特定のリテール投資家保護規則から免除し、第 63 条のファンド・アンカリングを可能にするカウンターパーティ・ステータス。
- **監督当局。** PTS については FSA の直接監督（市場インフラのシステミックリスクへの懸念）；QII 届出については 関東財務局。
- **自主規制への加盟。** PTS 業者は、その第一種の親ライセンスを通じて JSDA 会員である；QII ステータスは SRO 加盟義務を伴わない。
- **投資家保護。** PTS のカウンターパーティはほとんど機関投資家である；PTS 業者の JIPF のカバーは基礎となる第一種の親登録から流れる。QII ステータスは、QII カウンターパーティ側のリテール保護のカバーを除去する。
- **典型的な業者プロファイル。** PTS——[[securities/japannext-securities|Japannext PTS]]、[[securities/osaka-digital-exchange|ODX]]、および少数の追加的なライセンスを受けた PTS 業者。QII——生命 / 損害保険会社（Nippon Life、Dai-ichi Life、Tokio Marine、Sompo、MS&AD）、メガバンク（SMBC、MUFG、Mizuho）、メガバンク証券部門（[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]]）、信託銀行（MUTB、SMTB）、AM（[[asset-managers/nomura-asset-management|Nomura AM]]、[[asset-managers/asset-management-one|AM-One]]）、公的年金基金（GPIF、KKR）、およびより広範な機関投資家ユニバース。

## セグメント横断比較表

| 観点 | 第一種金商業者 | 第二種金商業者 | 投資助言・代理業 | 投資運用業 | 第一種少額電子募集取扱業 | 電子取引基盤運営業 | 適格機関投資家等特例業務（第 63条） | 暗号資産関連（オーバーレイ） | PTS 認可（サブライセンス） | 適格機関投資家（QII 届出） |
|---|---|---|---|---|---|---|---|---|---|---|
| **FIEA 条項** | 第 28 条¶1 / 第 29 条| 第 28 条¶2 / 第 29 条| 第 28 条¶3 / 第 29 条| 第 28 条¶4 / 第 29 条 + 第 29-4-2 条| 第 29-4-2 条 サブパラグラフ | 第 28 条¶8-4 | 第 63 条（届出） | FIEA デリバティブ + 暗号サブ規則 | 第 30 条 サブ認可 | 第 2 条¶3 号 1 （届出） |
| **業者数** | 291 | 1,223 | 994 | 463 | 70 | 6 | 数千（届出） | オーバーレイ；変動 | 11 | 数千（届出） |
| **最低資本フロア** | ¥50百万 ベースライン；¥300百万 PTS；業務に応じてより高い | ¥10百万 ベースライン；¥50百万 自己募集 | ¥5百万（資産の保管なし） | ¥50百万 + 純資産要件 | ¥10百万 | 内閣府令 > 第二種 | なし（届出レジーム） | 基礎となる第一種 / 第二種のフロア | 基礎となる第一種 ¥300百万 | 該当なし（資産規模ステータス） |
| **自己資本規制比率** | ≥ 120%（200% ターゲット） | より軽い | なし | 純資産要件 | 第一種経由で適用 | 適用 | なし | 親ライセンスに準ずる | 親の第一種に準ずる | 該当なし |
| **許容業務** | 上場証券のディーリング、ブローカレッジ、引受、保管、FX 証拠金、デリバティブ | ファンド持分の自己募集、第 2 項証券の勧誘 | 投資助言 + 代理 / 媒介 のみ | 投資一任運用、ファンド運用、投資信託の運用 | エクイティ・クラウドファンディング（≤¥100百万の調達、≤¥500千 / 投資家） | 店頭デリバティブの電子取引基盤の運営 | QII アンカー時の自己募集 + 運用、49-非 QII 上限 | 暗号デリバティブ・サブライン | 上場株式 / 債券の PTS の運営 | カウンターパーティ・ステータスのみ |
| **顧客資産の保管** | あり（分別） | 限定的 / 構造化 | **なし** | 一般になし（信託銀行カストディアン） | あり（第一種の分別） | なし（カウンターパーティレベル） | ファンド経由で間接的 | 親ライセンスに準ずる | あり（第一種の親経由） | 該当なし |
| **監督当局** | 本店別の財務局；システミックなものは FSA | 本店別の財務局；関東 が支配的 | 本店別の財務局；広く分布 | FSA + 財務局；大規模 AM は FSA 直接 | 関東財務局 が支配的 | FSA 直接 | 関東財務局 がほとんどを受理 | FSA 直接 | FSA 直接 | 関東財務局 |
| **JSDA 加盟** | 実務上必須 | 該当なし（JIAA 会員） | 該当なし（JIAA 助言会員） | 該当なし（JITA + JIAA 助言） | 第一種の親経由 | 該当する場合は第一種の親経由 | 該当なし | 親経由 | 第一種の親経由 | 該当なし |
| **その他の SRO** | FX 証拠金には FFAJ | [[JapanFG/jiaa\|JIAA Type II]] | [[JapanFG/jiaa-advisory\|JIAA advisory]] | [[JapanFG/jita\|JITA]] + JIAA 助言 | JSDA エクイティ・クラウドファンディング・サブ SRO | 必須のものなし | 必須のものなし | JVCEA のオーバーラップ | 親経由の JSDA | 必須のものなし |
| **JIPF 投資家保護** | あり（¥10百万の分別） | なし / 限定的 | なし（資産なし） | なし（信託銀行カストディ） | 第一種経由であり | なし（機関投資家のみ） | なし | 第一種経由であり | 親経由であり | 該当なし |
| **リテール勧誘** | あり | あり（第 2 項証券） | あり（助言） | あり（公募 ファンド） | あり（上限内） | なし（機関投資家のみ） | なし（QII + ≤49 の特定の者） | あり（第一種の親が許す場合） | 間接的（第一種ベニュー経由） | 該当なし |
| **典型的な業者プロファイル** | メガバンク証券部門、IB、オンライン・ブローカー、FX ブローカー | プライベートファンド GP、不動産 AM 系列、クラウドファンディング隣接 | IFA プラットフォーム、助言の発行者、ロボアドバイス媒介業者 | アセットマネジャー（メガバンク、保険、独立系、外国） | エクイティ・クラウドファンディング・プラットフォーム | ホールセール店頭電子取引基盤 | 単一マンデートの PE/HF/RE/ファミリーオフィス GP | FIEA 側の暗号デリバティブ・デスク | [[securities/japannext-securities\|Japannext]]、[[securities/osaka-digital-exchange\|ODX]] | 保険会社、銀行、AM、年金基金、大企業 |
| **クロスドメイン・リンク** | [[securities/japan-prime-brokerage-and-institutional-financing-matrix\|prime brokerage matrix]]、[[securities/japan-online-brokerage-competition\|online brokerage competition]] | [[securities/japan-underwriting-market-structure\|underwriting market]] プライベートファンドのフロー | IFA / ロボアドバイス・チャネル | [[securities/japan-asset-manager-landscape-matrix\|AM landscape matrix]] | NISA 隣接のリテール発行体チャネル | [[securities/japan-best-execution-sor-pts\|best-execution / SOR / PTS]] 店頭層 | [[securities/japan-underwriting-market-structure\|private placement]] アンカー | [[fintech/japan-stablecoin-and-crypto-regulation\|PSA crypto regulation]] 隣接 | [[securities/japan-pts-liquidity-data-guide\|PTS liquidity data guide]] | [[securities/japan-asset-manager-landscape-matrix\|AM landscape matrix]] 機関投資家カウンターパーティ |

## セグメント別トップ 30 業者（例示アンカー）

これは公開アンカー・リストである——FinWiki のクロスリンクのために各セグメントを実質的に支える機関名。行レベルのランキングではなく、現在の登録状況については FSA の一次ワークブックとあわせて読まれるべきである。

| セグメント | アンカー業者（例示、ランキングではない） |
|---|---|
| **第一種 — 独立系 IB** | [[securities-firms/nomura-hd\|Nomura]]、[[securities-firms/daiwa-sg\|Daiwa Securities Group]] |
| **第一種 — メガバンク部門** | [[securities-firms/smbc-nikko\|SMBC Nikko]]、[[securities-firms/mizuho-securities\|Mizuho Securities]]、[[securities-firms/mufg-mums\|MUMSS]] |
| **第一種 — オンライン・ブローカー** | [[securities-firms/sbi-securities\|SBI Securities]]、[[securities-firms/rakuten-securities\|Rakuten Securities]]、[[securities-firms/monex-group\|Monex]]、[[securities-firms/mufg-esmart-securities\|au Kabucom (MUFG eSmart)]]、[[securities-firms/paypay-securities\|PayPay Securities]]、[[securities-firms/gmo-click-securities\|GMO Click]]、[[securities-firms/dmm-com-securities\|DMM.com]] |
| **第一種 — 外国 IB** | [[securities-firms/goldman-sachs-japan\|GS Japan]]、[[securities-firms/morgan-stanley-japan\|MS Japan]]、[[foreign-financial-institutions/jpmorgan-japan\|JPM Japan]]、[[foreign-financial-institutions/citigroup-japan\|Citi Japan]]、[[foreign-financial-institutions/bank-of-america-japan\|BofA Japan]]、[[foreign-financial-institutions/ubs-japan\|UBS Japan]]、[[foreign-financial-institutions/barclays-japan\|Barclays Japan]]、[[foreign-financial-institutions/bnp-paribas-japan\|BNP Paribas Japan]]、[[foreign-financial-institutions/deutsche-japan\|Deutsche Japan]]、[[foreign-financial-institutions/socgen-japan\|SocGen Japan]] |
| **第一種 — FX / デリバティブ・ブローカー** | [[securities-firms/traders-securities\|Traders Securities]]、[[securities-firms/saxo-bank-securities\|Saxo Bank Securities]]、[[securities-firms/sbi-fx-trade\|SBI FX Trade]] |
| **第二種 — ファンド GP / 不動産 AM** | 不動産ファンド GP、インフラファンド GP、アニメ / コンテンツファンド GP、農業ファンド GP、再生可能エネルギーファンド GP（1,223のロングテール） |
| **投資助言・代理業 — IFA / 助言** | IFA プラットフォーム運営者（[[securities-firms/sbi-securities\|SBI Securities]]-IFA 提携、[[securities-firms/rakuten-securities\|Rakuten Securities]]-IFA 提携）、投資助言 ニュースレター発行者、外国 AM の日本紹介オフィス |
| **投資運用業 — メガバンク AM** | [[asset-managers/nomura-asset-management\|Nomura AM]]、[[asset-managers/asset-management-one\|AM-One]]、[[asset-managers/mufg-asset-management\|MUFG AM]]、[[asset-managers/smd-am\|SMD AM]]、[[asset-managers/daiwa-asset-management\|Daiwa AM]]、[[asset-managers/nikko-asset-management\|Nikko AM]] |
| **投資運用業 — 独立系 / オンライン** | [[asset-managers/sbi-asset-management\|SBI AM]]、楽天投信投資顧問、スパークス・グループ |
| **投資運用業 — 外資系** | BlackRock Japan、JPMorgan AM Japan、Fidelity Investments Japan、Schroders Japan、T. Rowe Price Japan、Pictet AM Japan |
| **第一種少額電子募集取扱業** | [[JapanFG/funds-incorporated\|FUNDINNO / Funds]]、日本クラウドキャピタル のレガシー事業体、エクイティ・クラウドファンディング・プラットフォーム運営者 |
| **電子取引基盤運営業** | ホールセール店頭電子取引基盤の運営者（≈6 の行） |
| **適格機関投資家等特例業務** | 数千の単一マンデートの PE / HF / RE / ファミリーオフィス GP ビークル |
| **暗号資産関連（オーバーレイ）** | [[securities-firms/sbi-securities\|SBI Securities]]（暗号デリバティブ・スリーブ）、[[securities-firms/gmo-click-securities\|GMO Click Securities]]（暗号 CFD）、[[securities-firms/dmm-com-securities\|DMM.com Securities]]（DMM Bitcoin への隣接） |
| **PTS 認可** | [[securities/japannext-securities\|Japannext PTS]]、[[securities/osaka-digital-exchange\|ODX]] |
| **QII 届出** | 生命保険会社、損害保険会社、メガバンク、証券部門、信託銀行、AM、年金基金（GPIF、KKR、PFA） |

AUM / 市場シェアによる行レベルの業者ランキングについては、[[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]]（投資運用）と [[securities/japan-online-brokerage-competition|Japan online brokerage competition]]（第一種リテール）へとルーティングすること——それらが実務上の競争マトリクスである。

## マルチライセンスのスタッキング

大規模な FIBO 業者のかなりの割合が、**1 つの法人内に複数の登録** を保有する。一般的なスタック：

| 業者タイプ | 典型的なスタック |
|---|---|
| メガバンク証券部門（[[securities-firms/smbc-nikko\|SMBC Nikko]]、[[securities-firms/mizuho-securities\|Mizuho Securities]]、[[securities-firms/mufg-mums\|MUMSS]]） | 第一種 + 第二種 + 投資助言・代理業 + 投資運用業 |
| 独立系 IB（[[securities-firms/nomura-hd\|Nomura]]、[[securities-firms/daiwa-sg\|Daiwa SG]]） | 第一種 + 第二種 + 投資助言・代理業 + 投資運用業（しばしば子会社の AM で） |
| オンライン・ブローカー（[[securities-firms/sbi-securities\|SBI Securities]]、[[securities-firms/rakuten-securities\|Rakuten Securities]]、[[securities-firms/monex-group\|Monex]]） | 第一種 + 第二種 + 投資助言・代理業（一部は子会社の AM で 投資運用業 を保有） |
| 外国 IB（[[securities-firms/goldman-sachs-japan\|GS Japan]]、[[foreign-financial-institutions/jpmorgan-japan\|JPM Japan]]、[[securities-firms/morgan-stanley-japan\|MS Japan]]） | 第一種 + 第二種 + 投資運用業（子会社の AM で）；別個の FX / コモディティ事業体 |
| スタンドアロン AM（[[asset-managers/nomura-asset-management\|Nomura AM]]、[[asset-managers/asset-management-one\|AM-One]]） | 投資運用業 + 投資助言・代理業 + 第二種（ファンドの自己募集のため） |
| エクイティ・クラウドファンディング・プラットフォーム | 第一種少額電子募集取扱業 + 第一種（狭いブローカレッジ・セグメントのため） |
| PTS 業者 | 第一種 + PTS サブ認可 |
| 暗号デリバティブ業者 | 基礎となる第一種 + 暗号資産関連 サブライン |

このマルチライセンスのスタッキングこそが、セグメントの小計（291 + 1,223 + 994 + 463 + 70 + 6 = 3,047）が、1,945 のユニークな業者総数を大きく上回る理由である。1.57倍のオーバーカウントは、FIEA の柔軟なスタッキング設計の構造的な現実である。

## セグメント横断 SRO マップ

| 自主規制機関 | カバレッジ |
|---|---|
| [[financial-regulators/jsda\|JSDA (日本証券業協会)]] | 第一種金商業者（実務上必須）；PTS 業者の親；エクイティ・クラウドファンディング・サブ SRO |
| [[JapanFG/jiaa\|JIAA Type II (第二種金融商品取引業協会)]] | 第二種金商業者（自己募集およびクラウドファンディング隣接業務に事実上必須） |
| [[JapanFG/jiaa-advisory\|JIAA advisory (日本投資顧問業協会)]] | 投資助言・代理業 + 投資一任 / 投資運用業 の助言・代理 |
| [[JapanFG/jita\|JITA (投資信託協会)]] | 公募投信 / 私募投信 を運用する 投資運用業 の業者 |
| FFAJ（金融先物取引業協会） | FX 証拠金および上場金融先物の第一種業者 |
| [[JapanFG/jvcea\|JVCEA (Japan Virtual and Crypto-Assets Exchange Association)]] | PSA 側の暗号交換業者；FIEA 暗号デリバティブ業者はオーバーラップで相互作用する |

## 境界事例と留意点

- **マルチライセンスのオーバーカウント。** 1,945 のユニークな業者が、1,945 をはるかに上回る登録を保有する。単一のメガバンク証券部門が、1 つの事業体内に 第一種 + 第二種 + 投資助言・代理業 + 投資運用業 を保有しうる。業者人口を推定するためにセグメントの小計を合算してはならない。
- **第一種 vs 第二種。** この区分は **商品タイプ** による（第一種 = 流動性の高い上場市場；第二種 = 第 2 項のファンド持分 / 未上場）のであって、業者の規模によるのではない。大規模な未上場ファンドの AM が第二種のみでありうるし、小規模なオンライン・ブローカーが第一種でありうる。
- **投資助言・代理業 vs 投資運用業。** 助言と媒介のみ（セグメント 3）≠ 投資一任運用（セグメント 4）。多くの規制上のエンフォースメント・アクションは、業者がセグメント 4  の登録なしに事実上の投資一任運用へと一線を越えたかどうかに懸かる。
- **第一種少額電子募集取扱業 vs 通常の第一種。** 狭い業務範囲と引き換えのより低い資本フロア；「より軽い第一種」ではない——業務の境界（¥100百万の発行体上限、¥500千の投資家上限）はハードである。
- **電子取引基盤運営業 vs PTS 認可。** PTS（第 30, 条、セグメント 9）は、取引所類似の価格形成規則の下で **上場株式と債券** を取り扱う；電子取引基盤運営業（第 28 条第 8 項第 4, 号、セグメント 6）は、異なる透明性規則の下で **店頭デリバティブ** を取り扱う。互換性はない。
- **適格機関投資家等特例業務（第 63条）≠ 登録。** 第 63 条のレジームは登録ではなく **届出** である；業者は 1,945 の FIBO 登録者数に現れない。FSA は 2015 のリテール投資家損失事例の後にレジームを厳格化した——現在の規則は非 QII 投資家を ≤49 の特定の者に制限する。
- **暗号資産 の現物 vs デリバティブ。** 暗号資産の **現物取引** は [[fintech/japan-stablecoin-and-crypto-regulation|PSA 暗号資産交換業]] のライセンス（FIEA ではない）の下で規制される。暗号資産の **デリバティブ** は FIEA 第 2 条第 24項型のデリバティブ規則（本セグメント 8）の下にある。単一の企業グループが、別個の法人で両方のライセンスを保有しうる。
- **STO / セキュリティトークン業務。** トークンが FIEA 第 2 条第 3 項に基づく証券を表す場合（例えば第 3 項の「トークン化された権利」）、その業務は内閣府令のセキュリティトークン規則とともに **第一種（セグメント 1）** の下で規制される。別個のセグメントではない。
- **QII 届出 ≠ FIBO 登録。** QII ステータス（第 2 条第 3 項第 1号）はカウンターパーティ・ステータスであって、金融商品取引業を営むためのライセンスではない。QII は金融商品取引業者でありうるし、しばしばそうである（保険会社、銀行、AM、年金基金）が、2 つの登録は独立している。
- **投資家保護の非対称性。** [[JapanFG/jiipf|JIPF]] のカバーは構造的に第一種である；第二種 / 投資助言・代理業 / 投資運用業 / 第 63 条 は同じ保護フロアを有しない。この非対称性は、FIEA セグメント分類についてリテール投資家が理解すべき最も重要な区別の 1 つである。
- **登録簿の基準日のドリフト。** 1,945 の数は 2026-04-30時点の FSA ワークブックによるものである。月次の更新は、新規登録、登録抹消、ライセンス状況の変更により、セグメントの小計を ±1〜2% 動かしうる。業者レベルの主張については、常に現在の `kinyushohin.xlsx` に照らして再検証すること。

## Related

- [[securities/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[financial-licenses/securities-license-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/mufg-mums]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities-firms/monex-group]]
- [[securities-firms/goldman-sachs-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/bank-of-america-japan]]
- [[asset-managers/nomura-asset-management]]
- [[asset-managers/asset-management-one]]
- [[asset-managers/mufg-asset-management]]
- [[asset-managers/sbi-asset-management]]
- [[INDEX|FinWiki index]]

## Sources

- FSA、金融商品取引業者登録一覧、`kinyushohin.xlsx`、2026-04-30時点。
- FSA 英語版、"Financial Instruments Business Operators (FIBO)" registry `fibo.xlsx` / `fibo.pdf`。
- FSA、「金融商品取引法のあらまし」（FIEA outline）および英語版 FIEA 翻訳。
- FSA、FIEA 第 06 条（金融商品取引業者）に関する FAQ。
- FSA、金融商品取引業者登録規則 内閣府令（登録規則）。
- FSA、主要行等向けの総合的な監督指針、金融商品取引業者等向けの総合的な監督指針。
- JSDA（日本証券業協会）、会員会社ディレクトリおよび自主規制規則ページ。
- JIAA（第二種金融商品取引業協会）、会員ディレクトリ。
- JIAA 助言（日本投資顧問業協会）、会員ディレクトリおよび 投資一任 / 投資助言 統計集計。
- JITA（投資信託協会）、会員ディレクトリおよび業界統計。
- JVCEA（Japan Virtual and Crypto-Assets Exchange Association）、FIEA 暗号デリバティブ業者との会員オーバーラップ。
- Japanese Law Translation ポータル（japaneselawtranslation.go.jp）、金融商品取引法の英語翻訳。

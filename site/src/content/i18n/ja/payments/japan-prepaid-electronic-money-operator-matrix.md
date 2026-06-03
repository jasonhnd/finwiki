---
source: payments/japan-prepaid-electronic-money-operator-matrix
source_hash: 49a848dac84c8502
lang: ja
status: machine
fidelity: ok
title: "日本のプリペイド電子マネー事業者マトリックス"
translated_at: 2026-06-02T16:33:58.521Z
---

# 日本のプリペイド電子マネー事業者マトリックス

## 要約

日本のプリペイド電子マネーの状況は**単一の業界ではない**。決済時の見え方は似ていても、少なくとも小売プリペイド、交通プリペイド、デジタルウォレット型プリペイドという 3 つの異なるスタックに分かれ、資金決済法上の**前払ライセンス区分**、**技術基盤**（FeliCa、MIFARE、純デジタル）、**グループ企業構造**（小売 FG、交通・鉄道 FG、EC 系 FG）が異なる。Edy、nanaco、WAON、Suica、PASMO、ICOCA、Kitaca、TOICA、manaca、nimoca、SUGOCA を一つの箱にまとめると、払戻方針、モバイル連携の深さ、加盟店網の経済性、各発行者のグループ銀行がフロートをどう支えるかを読み誤る。このエントリは、加盟店側または消費者側の分析に入る前に、**特定ブランドが実際にどのプリペイド電子マネー事業者に属するか**を確認するために、[[payments/INDEX|payments index]]の他ページが参照する横並び比較面である。後払い / クレジット側は[[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]]と比較する。

## ウィキ上の位置づけ

これは下にあります[[payments/INDEX|payments index]]カテゴリを超えたプリペイド電子マネーのリファレンスとして。と一緒に読んでください[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers JP index]]発行者ごとのレジストリ ソースの場合、[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]各事業者がどのライセンスを保有するかを決定する規制境界線については、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]トランジット側の詳細については、[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]小売側の詳細については、[[payments/famipay-valucreate-strategy|FamiPay ValuCreate strategy]]コンビニ-FGプリペイドレーンの場合、[[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]]クロススキームの経済性について、そして[[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]QR / コード決済オーバーレイでは、これらのプリペイド ブランドが時々上位に表示されます。グループエンティティのアンカーは、[[JapanFG/rakuten-edy|Rakuten Edy]], [[JapanFG/seven-card-service|Seven Card Service]](nanacoオペレーター)、および[[JapanFG/aeon-financial-service|AEON Financial Service]](WAON オペレーター)、より広いグループ サーフェスを備えた[[loyalty/japan-points-landscape|JP points landscape]], [[retail/seven-and-i-hd|Seven & i HD]]、 そして[[retail/aeon-group|AEON Group]].

## このマトリックスが重要な理由

日本のプリペイド電子マネーは**円です25-兆クラスの決済層** (全決済層の年間取引高)11+ブランド）、および発行者ごとの違いは、（a）**プリペイド残高フロートの経済学** — 発行者のバランスシートにどのくらいの円がどのくらいの期間留まるか、および資金決済法に基づいてどのような規制上の預金/保証義務が適用されるか、（b）**販売者側の受け入れ経済学** — Suica/PASMOの受け入れは交通機関のFG運営コストによってレート制限される一方、WAON/nanacoの受け入れは小売FGグループによってレート制限される(c) **モバイル統合の深さ** — Apple Pay / Google Pay のサポートはブランドごとに異なる順序で導入され、モバイル FeliCa とデジタルウォレットのみのルートは分岐しています、(d) **返金 / 消費者保護制度** – 純粋なプリペイド ブランドには欠けていることが多いカード紛失 / 返金手順を交通機関ブランドが確立しています、および (e) **グループ銀行のバックストップ** – フロート負債は親グループの銀行またはによって暗黙的または明示的にバックストップされています。銀行に隣接するエンティティ。

以下のマトリックスは、読者が「Suica は銀行法に隣接し、JR 東日本の貸借対照表をサポートする交通機関発行会社」、「nanaco は資金決済法に準拠し、セブン銀行 / セブン＆アイ グループをサポートする第三者型前払発行会社」、「楽天 Edy は資金決済法に基づく、楽天 FG スーパーストア内の第三者型前払発行会社」を区別できるように、これらの側面を示しています。これは、FeliCa-tap UX を共有する 3 つの構造的に異なるオペレーター プロファイルです。

## 発行者別プロフィール

### Edy — 楽天Edy（楽天グループ）4755)

**運営者**: [[JapanFG/rakuten-edy|Rakuten Edy Co., Ltd.]]（Rakuten Group 子会社、TSE Prime 4755）。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（Edy IC チップ、Apple Pay / Google Pay / Osaifu-Keitai 向け Mobile FeliCa）。**開始**: 2001 に bitWallet が開始し、楽天が2010, に買収、2012に Rakuten Edy へリブランド。**提供形態**: 物理 Edy カード、Mobile FeliCa、Apple Pay Edy、Google Pay Edy。**加盟店網**: 約1.1M ポイントで、プリペイドブランドの中でも広い。**モバイル連携**: Apple Pay は2016-10, 、Google Pay は2018-05, に Edy に対応し、Osaifu-Keitai は開始時から中核だった。**払戻方針**: 楽天Edy窓口で残高払戻が可能だが、手続き負担は重い。**グループ銀行による支え**: Rakuten Bank（TSE Prime 5838）がグループのネット銀行であり、Edy のフロートは Rakuten FG のバランスシートが支える。**グループ内連携**: Rakuten Points と連携し、Edy でポイントを貯める / 使うことができる。スキーム横断比較は[[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]]を参照。

### nanaco — セブンカードサービス（セブン＆アイHD）3382)

**運営者**: [[JapanFG/seven-card-service|Seven Card Service Co., Ltd.]]（[[retail/seven-and-i-hd|Seven & i HD]]内の子会社、TSE Prime 3382）。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（nanaco カード + Mobile FeliCa）。**開始**: 2007-04 、初日から7-Eleven 全国店舗で利用可能。**提供形態**: 物理 nanaco カード、nanaco モバイル（Android Osaifu-Keitai）、Apple Pay nanaco。**加盟店網**: 約0.7M ポイントで、7-Eleven、Ito-Yokado、SOGO/Seibu 旧店舗、Denny's など Seven & i Group 店舗に大きく偏る。**モバイル連携**: Apple Pay は2019-10に nanaco 対応。**払戻方針**: Seven Bank 窓口で残高払戻が可能で、Seven Bank ATM が現金入出金レールになる。**グループ銀行による支え**: [[JapanFG/seven-bank|Seven Bank]]（TSE Prime 8410）がグループ銀行であり、nanaco の現金入出金は Seven Bank ATM が主チャネルである。これは、多くのブランドが第三者コンビニや提携銀行 ATM を使う中で構造的に独特である。**グループ内連携**: nanaco Points（Seven & i Group 購入で1.0%、標準0.5%）と[[payments/funds-transfer-service-providers-japan-index|funds-transfer]]、Seven Card Service 内のクレジットカード導線を統合する。詳細比較は[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]を参照。

### WAON — イオングループ（イオン）8267 / イオンフィナンシャルサービス8570)

**運営者**: [[JapanFG/aeon-financial-service|AEON Financial Service Co., Ltd.]]（[[retail/aeon-group|AEON Group]]内の子会社、親会社 AEON Co. は TSE Prime 8267、AEON Financial Service も TSE Prime 8570に上場）。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（WAON カード + Mobile FeliCa）。**開始**: 2007-04 、nanaco と実質的に同じ開始月で、小売プリペイド競争を意識した開始。**提供形態**: 物理 WAON カード、モバイル WAON（Android Osaifu-Keitai）、Apple Pay WAON。**加盟店網**: 約1.0M ポイントで、AEON Mall、MaxValu、MiniStop、AEON Pharmacy、daiei など AEON Group 店舗に大きく偏る。**モバイル連携**: Apple Pay は2021-05 に WAON 対応し、nanaco より遅かった。**払戻方針**: AEON サービスカウンターで残高払戻が可能。**グループ銀行による支え**: [[JapanFG/aeon-bank|AEON Bank]]（グループネット銀行）と AEON Financial Service のバランスシートが WAON フロートを共同で支える。**グループ内連携**: WAON Points + AEON Card オートチャージ連携。AEON 利用者の主要 UX は AEON Card に紐づく **WAON 自動チャージ**である。[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]を参照。

### Suica — JR東日本（東日本旅客鉄道）9020)

**運営者**: East Japan Railway Company（JR East、TSE Prime 9020）。Suica は別子会社ではなく **JR East が直接運営**しており、この点で上記の小売プリペイド発行者と構造的に異なる。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（Suica IC + 交通カードの中で最も広い Apple Pay / Google Pay / Mobile FeliCa 対応を持つ Mobile Suica）。**開始**: 2001-11 、当初は交通専用の運賃支払カードとして開始し、2004-03に買い物支払いへ拡張。**提供形態**: 物理 Suica カード、Mobile Suica（Android）、Apple Pay Suica（2016-10 以降、日本の iOS 決済開始を象徴）、Google Pay Suica。**加盟店網**: 約1.6M ポイントで、プリペイド電子マネーの中でも最も広く、全国相互利用に対応する交通カード加盟店を含む。**モバイル連携**: 最も深く、Apple Pay Suica は2016-10 に日本の iOS 決済で大きな出来事となった。**払戻方針**: 確立済みで、JR East 緑の窓口で Suica 残高と500 円のデポジットを払戻でき、記名 Suica は残高を保持した紛失再発行も可能。**グループ銀行による支え**: JR East は銀行を持たず、Suica フロートは資金決済法上の発行保証に基づく前払負債として JR East 連結バランスシートに載る。**グループ内連携**: JRE POINT 連携、Atre / NewDays / Beck's Coffee shop 網、えきねっと、JR East Bank Card（Mizuho 提携）との共同ブランド。Suica は、10 の主要交通カードを相互のネットワークで使えるようにする全国相互利用スキームの**相互運用基盤**である。[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]を参照。

### バンド - バンド株式会社

**運営者**: PASMO Co., Ltd.。東京圏の25以上の私鉄・バス事業者（Tokyu、Odakyu、Keio、Tobu、Seibu、Keisei、Tokyo Metro、Toei など）が保有する共同発行会社である。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（PASMO カード + Mobile PASMO）。**開始**: 2007-03 、Suica-PASMO 全国相互利用開始の 1 か月前。**提供形態**: 物理 PASMO カード、Mobile PASMO（Android、2020-10）、Apple Pay PASMO（2020-10 、Mobile PASMO Android と同時開始）。**加盟店網**: Suica と同じ全国相互利用ネットワーク（約1.6M ポイント）。**モバイル連携**: Apple Pay PASMO は2020-10, に、**Apple Pay Suica から4 年後**に登場した。この遅れは、JR East が単独意思決定者であるのに対し、25以上の利害関係事業者をそろえる共同事業の調整コストを反映する。**払戻方針**: 発行鉄道会社の窓口で残高払戻（手続きは発行鉄道により異なる）、記名 PASMO は残高を保持した再発行が可能。**グループ銀行による支え**: 各加盟鉄道がフロート負債を比例的に負担し、単一の銀行バックストップはない。**グループ内連携**: Tokyu TOKYU POINT、Odakyu OdakyuPoints、Tokyo Metro To Me Card など加盟鉄道ごとのロイヤルティ。PASMO は共有鉄道技術だが、ロイヤルティは発行鉄道ごとに分かれる。[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]を参照。

### ICOCA — JR西日本（西日本旅客鉄道）9021)

**運営者**: West Japan Railway Company（JR West、TSE Prime 9021）が直接運営。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（ICOCA カード + Mobile ICOCA）。**開始**: 2003-11。**提供形態**: 物理 ICOCA カード、Mobile ICOCA（Android 2023-06）、Apple Pay ICOCA（2023-06 、JR West の技術投資タイミングにより Suica より大幅に遅れて開始）。**加盟店網**: 同じ全国相互利用ネットワーク。**モバイル連携**: Apple Pay ICOCA は2023-06 （Suica から約7 年後）。**払戻方針**: JR West 窓口で残高払戻、記名 ICOCA は再発行可能。**グループ銀行による支え**: JR West バランスシート（グループ銀行なし）。**グループ内連携**: ICOCA POINT と J-WEST Card（SMBC 提携）。[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]を参照。

### Kitaca — JR Hokkaido

**運営者**: Hokkaido Railway Company（JR Hokkaido、非上場の特殊会社で政府関係色がある）。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（Kitaca カード。2026時点で Mobile Kitaca なし）。**開始**: 2008-10。**提供形態**: 物理カードのみ（モバイル連携なし）。**加盟店網**: 全国相互利用により広域ネットワークで利用可能。**モバイル連携**: **なし**。Kitaca は、主要10 交通カードの中で Mobile / Apple Pay / Google Pay に対応しない唯一のカードであり、JR Hokkaido の厳しい財務状況を反映する。**払戻方針**: JR Hokkaido 窓口で残高払戻。**グループ銀行による支え**: JR Hokkaido バランスシート。**グループ内連携**: ロイヤルティの深さは限定的。

### TOICA — JR東海（東海旅客鉄道）9022)

**運営者**: Central Japan Railway Company（JR Central、TSE Prime 9022）が直接運営。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（TOICA カード。2026時点では Mobile TOICA は試験的 / 限定的）。**開始**: 2006-11。**提供形態**: 物理カード、モバイルは未本格展開。**加盟店網**: 全国相互利用に対応。**モバイル連携**: Suica / PASMO と比べて限定的かつ遅い。JR Central は歴史的に Mobile TOICA よりも EX-IC、SmartEX など新幹線運賃統合を優先してきた。**払戻方針**: 駅窓口で払戻。**グループ銀行による支え**: JR Central バランスシート。**グループ内連携**: JR Central Tower / JR Tokai 関連小売、Tokaido shinkansen 予約の EX-IC 連携。

### manaca — Meitetsu / Nagoya Tetsudo

**運営者**: 株式会社エムアイシー（MIC, Meitetsu IC Card）。Meitetsu（Nagoya Tetsudo）と Nagoya City Transportation Bureau の合弁会社である。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（manaca カード。広範なモバイル連携なし）。**開始**: 2011-02。**提供形態**: 物理カード。**加盟店網**: 全国相互利用に対応。**モバイル連携**: 限定的。**払戻方針**: 駅窓口で払戻。**グループ銀行による支え**: Meitetsu バランスシート + Nagoya City Transportation Bureau。**グループ内連携**: Meitetsu MEMBERS、Nagoya City Transit Card のレガシー。

### nimoca — Nishitetsu / Nishi-Nippon Railroad

**運営者**: 株式会社ニモカ（Nimoca Co., Ltd.）。Nishi-Nippon Railroad（Nishitetsu）が支配する合弁会社である。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（nimoca カード）。**開始**: 2008-05。**提供形態**: 物理カード。**加盟店網**: 全国相互利用に対応。**モバイル連携**: 限定的。**払戻方針**: 駅窓口で払戻。**グループ銀行による支え**: Nishitetsu バランスシート。**グループ内連携**: nimoca Points、福岡都市圏の Nishitetsu バス / 鉄道連携。

### SUGOCA — JR Kyushu (Kyushu Railway9142)

**運営者**: Kyushu Railway Company（JR Kyushu、TSE Prime 9142）が直接運営。**ライセンス**: 資金決済法上の第三者型前払式支払手段発行者。**技術**: FeliCa（SUGOCA カード）。**開始**: 2009-03。**提供形態**: 物理カード。**加盟店網**: 全国相互利用に対応。**モバイル連携**: 2026 時点では限定的（JR Kyushu shinkansen 連携は別の EX-IC ルート）。**払戻方針**: 駅窓口で払戻。**グループ銀行による支え**: JR Kyushu バランスシート。**グループ内連携**: JR Kyushu の小売・旅行ロイヤルティ。

## 大型比較マトリックス表

| ブランド | 運営者 | 親グループ | ライセンス（資金決済法） | 技術 | 開始 | 加盟店網（概算） | Apple Pay 対応開始 | 払戻方針 | グループ銀行による支え | グループ内連携 | スタック階層 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Edy** | [[JapanFG/rakuten-edy\|Rakuten Edy]] | 楽天グループ（4755) | 第三者型前払 | FeliCa（モバイルフェリカ） | 2001  | ~1.1M | 2016-10  | オフィス（事務処理） | 楽天銀行（5838) | 楽天ポイント | 小売/電子商取引 |
| **ナナコ** | [[JapanFG/seven-card-service\|Seven Card Service]] | [[retail/seven-and-i-hd\|Seven & i HD]] (3382) | 第三者型前払 | FeliCa（モバイルフェリカ） | 2007-04  | ~0.7M | 2019-10  | セブン銀行窓口 | [[JapanFG/seven-bank\|Seven Bank]] (8410) | nanacoポイント+7＆アイグループ | 小売 (CVS 中心) |
| **WAON** | [[JapanFG/aeon-financial-service\|AEON Financial Service]] (8570) | [[retail/aeon-group\|AEON Group]] (8267) | 第三者型前払 | FeliCa（モバイルフェリカ） | 2007-04  | ~1.0M | 2021-05  | イオンサービスカウンター | [[JapanFG/aeon-bank\|AEON Bank]] | WAONポイント＋イオンカードオートチャージ | 小売（モール中心） |
| **スイカ** | JR東日本（直営） | JR東日本（9020) | 第三者型前払 | FeliCa（モバイルフェリカ） | 2001-11  | ~1.6M | 2016-10  | 緑の窓口 (well-established) | JR東日本貸借対照表（グループ銀行なし） | JRE POINT＋えきねっと＋アトレ | 交通機関（東京-東） |
| **バンド** | BAND株式会社（JV）25+鉄道) | 首都圏私鉄 | 第三者型前払 | FeliCa（モバイルフェリカ） | 2007-03  | ~1.6M（共用） | 2020-10  | 発行会社ごとの鉄道事務所 | 加盟鉄道の貸借対照表 | 鉄道ごとのロイヤルティ（TOKYU POINTなど） | 交通機関（東京メトロ私鉄） |
| **クリア** | JR西日本（直営） | JR西日本（9021) | 第三者型前払 | FeliCa（モバイルフェリカ） | 2003-11  | ~1.6M（共用） | 2023-06  | JR西日本のきっぷうりば | JR西日本の貸借対照表 | ICOCAポイント＋J-WESTカード（SMBC提携） | 乗り継ぎ（関西） |
| **本** | JR北海道（直営） | JR Hokkaido (特殊会社) | 第三者型前払 | ハッピー | 2008-10  | お互いを活かし合う | **なし** | JR北海道きっぷうりば | JR北海道の貸借対照表 | 最小限の | 乗り継ぎ（北海道） |
| **トイカ** | JR東海（直営） | JR東海（9022) | 第三者型前払 | ハッピー | 2006-11  | お互いを活かし合う | 限定/後期 | JR東海きっぷうりば | JR東海の貸借対照表 | EX-IC新幹線統合 | トランジット（東海） |
| **食べる** | エムアイシー (MIC) | Meitetsu + Nagoya City | 第三者型前払 | ハッピー | 2011-02  | お互いを活かし合う | 限定 | 事業者ごとのオフィス | 名鉄＋都市局 | 名鉄メンバーズ | トランジット（名古屋） |
| **nimoca** | ニモカ社 | Nishitetsu (Nishi-Nippon Railroad) | 第三者型前払 | FeliCa | 2008-05  | 相互利用 | 限定的 | 事業者ごとの窓口 | Nishitetsu バランスシート | nimoca Points + Nishitetsu 連携 | 交通（福岡） |
| **待っている** | JR九州（直通） | JR九州（9142) | 第三者型前払 | ハッピー | 2009-03  | お互いを活かし合う | 限定 | JR九州きっぷ​​うりば | JR九州の貸借対照表 | JR九州旅行・小売 | 乗り継ぎ（九州） |

## 横断軸：小売系 FG vs 交通・鉄道系 FG vs EC 系 FG

上記のマトリックスは次のとおりです11 ブランドはさまざまですが、クロスリンクの経済性、返金手続きの複雑さ、グループ銀行のバックストップ体制を決定する **3 つの事業者のカテゴリ**に分類されます。

### 小売系 FG プリペイド（小売グループ金融子会社による発行）

- **nanaco** — セブン＆アイ HD 内のセブン カード サービスが発行
- **WAON** — イオングループ内のイオンフィナンシャルサービスが発行

**特徴**: 加盟店ネットワークは親グループの店舗に集中しており、親グループの銀行ATM（nanacoの場合はセブン銀行）または親店舗のカウンター（WAONの場合はイオン）を介したキャッシュオン/オフランプ、親グループのショッピング行動と深く統合されたロイヤルティプログラム、親グループのクレジットカードにリンクされたオートチャージ（イオンカード→WAONオートチャージ）、ユニットエコノミクスの主要な推進力としてのグループ内のクレジットカードのクロスセル。リテール FG プリペイドは **運用上はプリペイド ラッパーを備えたリテール ロイヤルティ プログラム**です。前払い負債は金融子会社の貸借対照表に載っていますが、経済的論理は支払いマージンの抽出ではなく、買い物客の頻度の獲得です。見る[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]直接的な詳細については。

### 交通・鉄道系 FG プリペイド（鉄道事業者による発行）

- **Suica** — JR東日本
- **PASMO** — 東京メトロ私鉄共同事業体
- **ICOCA** — JR西日本
- **Kitaca** — JR Hokkaido
- **TOICA** — JR東海
- **神** — 名鉄 + 名古屋市
- **nimoca** — Nishitetsu
- **SUGOCA** — JR Kyushu

**特徴**: 運賃収受インフラの延長として発行されるプリペイド、確立された払い戻し手順 (小売り FG プリペイドが苦労するカード紛失/払い戻しフローを鉄道の切符売り場ネットワークが処理)、全国相互利用の相互相互運用性バックボーン接続10 主要ブランドを単一の受け入れネットワークに統合、モバイル統合のタイミングは通信事業者ごとの技術予算に依存 (最初は Suica、ICOCA)7 数年経っても、Kitaca はまだまったくありません）、ほとんどの場合、グループ銀行はありません（鉄道の貸借対照表にはフロート負債が直接含まれています）。トランジット FG プリペイドは **運用上は小売店での受け入れに拡張された交通決済システム**です。本来の目的はタップして乗車することであり、小売店での受け入れは副産物です。見る[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]トランジット側のディープダイビング用。

### EC 系 FG プリペイド

- **Edy** — 楽天グループ内の楽天Edy

**特徴の定義**: 親会社の FG はインターネット / 電子商取引の複合企業であり、プリペイドはマルチ製品ウォレット スタック内で QR / コード決済 (楽天ペイ)、カード (楽天カード)、ポイント (楽天ポイント) と並んでおり、実店舗のタッチポイントは電子商取引の親会社のオンライン プレゼンスを補完し、ロイヤルティ プログラムは親会社の広範な電子商取引エコシステムと緊密に統合されています。 Edy は **この事業者カテゴリーにおける唯一の主要な JP プリペイド電子マネー**であり、これは歴史的な順序を反映しています — Edy は 2016 年に発売されました2001 （楽天買収前）小売りFGと交通機関FGのプリペイドがまだ市場に参入していなかったため、その後楽天のスーパーストア戦略に吸収された。

## 相互利用の基盤 — 全国相互利用

10 の主要交通カードブランド（Suica、PASMO、Kitaca、TOICA、manaca、ICOCA、PiTaPa、nimoca、SUGOCA、はやかけん）は、2013-03 に開始された**全国相互利用スキーム**で接続されている。参加する交通機関や加盟店端末の互換リーダーに 1 回タップすれば、カードのブランドを問わず利用できる。これにより、約1.6M ポイント規模の単一共有加盟店網が全10 ブランドを横断して形成され、世界でも最大級の非接触プリペイド加盟店網の一つになっている。

経済効果としては、小規模な交通ブランド発行会社（Kitaca、TOICA、manaca、nimoca、SUGOCA）が、構築にかかる取得コストを全額負担することなく、ネットワーク全体にアクセスできるようになるということです。 Suica の発行者としての JR 東日本は、事実上のネットワーク バックボーン プロバイダーであり、これが JR 東日本の Suica プラットフォームへの投資が公共財として構造的に過小評価されている理由の 1 つです。

なお **PiTaPa**（関西圏の私鉄系プリペイドとして扱われがちだが、Surutto KANSAI が発行）は、上のプリペイド電子マネー事業者マトリックスには含めていない。PiTaPa はプリペイドではなく、月末に請求される**ポストペイ**モデルを使うためである。構造的にはプリペイドカードではなく、鉄道レール上のクレジットカードであり、第三者型前払ではなく個別信用購入あっせん / 包括信用購入あっせんとして登録される。ポストペイ分類は[[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]]を参照。

## 境界事例

- **日本市場における FeliCa と MIFARE** — このマトリックスの全ブランドは **FeliCa ベース**であり、MIFARE ではない。MIFARE は London Oyster、香港 Octopus の Visa オーバーレイ前、Singapore EZ-Link、NYC OMNY などで使われる非接触交通の主要グローバル標準だが、日本の交通プリペイドスタックにはほぼ存在しない。FeliCa の選択は、2004 前後の NTT DoCoMo の Osaifu-Keitai 構想と JR East の早期 Suica-FeliCa 採用により行われ、日本市場は約25 年間にわたり FeliCa に固定された。これが、日本のプリペイド IC が交通 + 小売でシームレスに動く一方、Visa Touch / EMV Contactless などのオーバーレイなしにはグローバルな MIFARE 系交通システムと容易に相互運用できない構造的理由である。
- **Suica の規制上の分類** — Suica は資金決済法上の第三者型前払式支払手段として登録されているが、JR East は銀行法上の銀行でも資金移動業者でもない。Suica フロート（全残高合計で任意時点に JPY 200B+ 規模と推定）は、銀行システム保護ではなく、法定の発行保証金規定を伴う JR East の前払負債に載る。このため、Suica の払戻手続きは預金保険側ではなく運営者側の手続きになる。
- **PASMO の合弁会社フロート配分** — PASMO のフロート負債は、世界全体に分散されます。25+ 会員鉄道発行者は発行額に比例します。東急の駅でチャージされた残高は、その後東京メトロの駅で使用された場合でも、東急の貸借対照表上の負債となります。加盟鉄道間で内部和解が発生します。これは、JR東日本・JR西日本・JR九州の単体モデルとは構造的に異なります。
- **競争指標としての Apple Pay サポートのギャップ** — Apple Pay サポートのタイミング (Suica2016-10 →ナナコ2019-10 → バンド2020-10 → WAON2021-05 → クレンジング2023-06 →その他はまだ）は競合マーカーです。 iOSとJPの統合におけるSuicaの先行者としての優位性は、東京メトロのデジタルネイティブの間での優位性を確固たるものとした。 ICOCAの7- 年の遅れは、関西側のデジタルプリペイドの採用に目に見えて影響を与えました。
- **nanaco のセブン銀行 ATM キャッシュレールの独自性** — nanaco は、キャッシュオン/オフランプが **専用のグループ銀行 ATM ネットワークをプライマリ チャネルとして使用しているマトリックス内で唯一のブランドです** (セブン銀行 ATM はすべての銀行内にあります)7-イレブン）。その他の小売ブランド (Edy、WAON) は、親会社の顧客サービス カウンターまたはサードパーティのコンビニエンス ストアの ATM を使用します。これが構造的に、nanaco のリロード UX が JR の遠方の顧客の小売プリペイド セグメントで最もスムーズである理由です。
- **WAON 自動チャージ (オートチャージ) の統合** — イオンカードにリンクされた WAON のオートチャージは、イオンの買い物客にとって支配的な UX であり、イオンカード所有者がカードとの関係を維持する最もよく挙げられる理由の 1 つです。これは、グループ内にクレジット カード発行会社を持たない純粋なプリペイド ブランドでは再現できない構造的な相互リンクです。
- **Rakuten Edy の e コマース FG の位置付け** — Edy は、親 FG が小売 FG や交通機関 FG ではなく **e コマース / インターネット複合企業**であるマトリックス内で唯一のプリペイド電子マネーです。楽天エコシステム内での楽天 Edy の役割の一部は、楽天ペイ (QR/コード決済) と楽天カード (クレジット カード) を補完する実店舗タッチポイントを提供することです。[[payments/japan-code-payment-competitive-map|JP code-payment competitive map]].
- **Kitaca のモバイル未対応ギャップ** — Kitaca は、2026時点で Mobile / Apple Pay / Google Pay 商品を持たない唯一の主要全国相互利用メンバーである。モバイル連携の投資負担が理由として挙げられており、JR Hokkaido の厳しい財務状況が裁量的な技術投資を制約している。
- **破損および未償還残高の経済学** — すべてのプリペイド電子マネー発行者は**破損**責任（残高はロードされているが使用されていない）を負っており、決済サービス法では、発行者に少なくとも5000円の発行保証金（発行保証金）を維持することを義務付けています。50%半年の締め日における未償還残高。ブレークラインは小売店プリペイド (WAON、nanaco、Edy) にとって重要な利益要因ですが、ユーザーが少額のチャージを頻繁に行う交通系プリペイド (Suica、PASMO) ではそれほどではありません。このディメンションはマトリックスの列行には含まれていませんが (公的ソース マトリックスとしては推定に依存しすぎている)、プリペイド発行者のビジネス モデルの背後にある重要な経済ストーリーです。[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]規制上の預金メカニズム向け。
- **Mobile FeliCa の Android + Apple Pay へのロックイン** — Mobile FeliCa は、対応 NFC チップを持つ Android 端末（実質的に2010期以降の Osaifu-Keitai 以降の日本市場向け Android）と、iPhone 7 以降（2016 の Apple Pay 日本開始に合わせたもの）で動作する。Mobile FeliCa は日本市場外の Android 端末では利用できず、これが訪日客向け UX がモバイルではなく Visit Suica / Welcome Suica などの物理カード商品に限られる理由の一つである。
- **QR / コード支払いオーバーレイ**: これらのプリペイド ブランドのいくつかは、QR / コード支払いオーバーレイ経由でアクセスすることが増えています (たとえば、楽天ペイは資金源の 1 つとして Edy チャージを経由します。nanaco はさまざまな QR レール経由でロードできます)。したがって、「プリペイド電子マネー ブランド」と「QR コード決済ブランド」の間の明確な分離は損なわれつつあります。[[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]オーバーレイ風景用。

## プリペイド残高規模のおおまかな順位

公的情報源から導き出された、未償還プリペイド残高の任意の時点での大まかな順序 (数値は半年のカットオフによって異なり、発行者間で同一の形式で一貫して開示されているわけではありません):

1. **Suica** — 日本最大の単一ブランドプリペイドフロート、日本円200-300Bレンジ
2. **WAON** — 円100-200Bレンジ
3. **バンダン** - 日本円100-200B 範囲 (全域に分布)25+ 加盟鉄道の貸借対照表)
4. **nanaco** — 円100-200Bレンジ
5. **Edy** — 円50-100Bレンジ
6. **ICOCA** — 円50-100Bレンジ
7. **TOICA/manaca/nimoca/SUGOCA/Kitaca** — 各円以下50B

**すべての前払いフロートの合計10+ブランドは円です1-1.5 いつでも兆クラス**。資金決済法に基づき、発行者は少なくとも最寄りの法務局に発行保証金（発行保証金）を保管しなければなりません。50%半年の期限未償還残高のうち、**約円を意味します500-750 数十億の発行保証金は、プリペイド ユーザーの保護として日本政府に預けられています**。これは、JP の金融システムにおける最大の消費者保護預金プールの 1 つであり、資金決済法の前払い制度が厳しく規制されている構造的な理由です。見る[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]規制の詳細については。

## グループ銀行による支えの姿勢

マトリックスの「グループ銀行バックストップ」列は、より微妙な次元の 1 つであり、拡張する価値があります。

- **グループ内銀行を備えたリテール FG** (nanaco/セブン銀行、WAON/イオン銀行、Edy/楽天銀行) - グループ内銀行は、ATM を介したオン/オフランプの営業キャッシュと、前払い債務ストレスを吸収するバランスシート能力を提供します。
- **グループ銀行を持たない交通 FG**（Suica / JR East、ICOCA / JR West、SUGOCA / JR Kyushu、TOICA / JR Central、nimoca / Nishitetsu など） — 鉄道事業者のバランスシートが前払負債を直接負担する。現金入出金は提携銀行 ATM を使う（Suica は Mizuho-JR East 提携、ICOCA は SMBC-JR West 提携）。
- **PASMO 合弁事業** —25+ 加盟鉄道の貸借対照表には比例責任が伴います。単一のバックストップエンティティはありません
- **Kitaca / 北海道のエッジケース** — JR北海道は政府の支援を受けた特殊会社です。完全民営化されたJR本州3社（東・西・中央）とは異なり、前払い債務は部分的に政府の支援を受けた事業者内にある。

グループ内銀行の存在の有無は、(a) 発行体が外部ブリッジファイナンスなしで前払い債務ストレスイベントをどの程度迅速に方向転換できるか、(b) 規制上の関与がどのようなものであるか (グループ銀行の支援を受けた発行体は新たに始めるのではなく、銀行の既存の金融庁/日銀監督チャンネルを通じて対話をルーティングできる)、(c) 発行体が隣接するフィンテック機能をどれだけ容易に実験できるか (グループクレジットカードによる自動チャージにはグループクレジットカードの協力が必要であり、グループ内での方が容易である) に影響する。統合小売-FG）。

## 資金決済法上の供託義務

このマトリックスに含まれる全11 ブランドは、資金決済法上の**第三者型前払式支払手段発行者**として登録されており、同法は次の義務を課している。

- **発行保証金 (issuance guarantee deposit)** — at each half-year cutoff (3-31 そして9-30）、発行者は少なくとも最寄りの法務局に供託する必要があります。50%半期末の未償還残高を現金、国債、または銀行保証で受け取る。デポジットは、発行者が破産した場合のユーザー保護として機能します。
- **業務報告書** — 前払残高、取扱高、払戻指標を含む年次報告を FSA に提出する。
- **苦情処理 (苦情処理)** — 指定苦情処理機関 (ADR) への会員登録が必要
- **加盟店管理** - サードパーティ発行者の場合 (単一加盟店プリペイドではなく)、発行会社は参加加盟店との関係を管理する義務を負います。
- **業務改善命令** — FSA can issue business-improvement orders if compliance issues arise

サードパーティ タイプと独自タイプの区別は構造的なものです。サードパーティ タイプは、「多くの加盟店で受け入れられる汎用」モデルです（すべての販売者が受け入れます）。11 一方、自家型は「発行会社の自社店舗でのみ使用できる」モデル（例：デパートのプリペイドカードはそのデパートでのみ使用可能）です。自家型制度は規制の負担が軽い。境界チェックは、プリペイドが発行者のグループ外の「サードパーティ」販売業者で受け入れられるかどうかです。「」を参照してください。[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]境界の詳細については。

## 資金移動業制度との比較

JP 決済に慣れていない読者は、**プリペイド電子マネー** と **資金移動業 (資金移動業)** をよく混同します。これらはウォレット残高の UX を共有していますが、実質的に異なるルールを持つ異なるライセンスの下にあります。

| 寸法 | プリペイド型サードパーティタイププリペイド | 資金移動資金移動業 |
|---|---|---|
| 残高を現金に返金可能 | 限定的（決済サービス法に基づく）20条 改正時代の規則。ほとんどのブランドでは、サービス カウンターを通じて限定的なキャッシュバックを提供しています） | はい — オペレーターは銀行口座への残高引き出しを有効にする必要があります |
| Inter-user transfer (送金) | 通常、前払い制度では許可されません | はい — 資金移動業の決定的な能力 |
| トランザクションごとの制限 | ライセンスで指定されていない (発行者のポリシーによって異なります) | ライセンスの種類ごとに階層化されています (タイプ1 / 2 / 3) キャップ付き |
| ユーザー資金の保護 | 発行保証金50%デポジット | 完全な分離 + 信頼または保証 |
| 例 | Suica、WAON、nanaco、Edy、PASMO、ICOCAなど | メルペイ、PayPay、楽天ペイ（ユーザー間の送金に対応している場合）、LINE Pay、Kyash |

境界線はますます曖昧になってきています。PayPay やメルペイなどの製品は、**複数のライセンス スタック** を同時に実行します (基本ウォレットは前払い、送金機能は資金移動業で、機能ごとに適切なライセンスが有効化されます)。一部のプリペイド ブランド製品は、転送機能を有効にするために資金移動業に静かに移行しています。見る[[payments/funds-transfer-service-providers-japan-index|funds-transfer service providers JP index]]資金移動側にとって。

## Mobile FeliCa エコシステムの進化

モバイル FeliCa の展開パターンは、どのプリペイド ブランドがモバイル ファーストの使用を支配するかを形作りました。

| 年 | イベント | インパクト |
|---|---|---|
| 2001  | Suica物理カードの発売 | 輸送中の FeliCa の前例を確立 |
| 2004  | NTTドコモ/フェリカネットワークスによるモバイルFeliCaの提供開始 | JPモバイル決済をFeliCa規格にロック |
| 2006-01  | Mobile Suica Android (FOMA Osaifu-Keitai) | 初のモバイル トランジット プリペイド |
| 2007-04  | nanaco+WAONスタート | 小売店向けプリペイド FeliCa の採用 |
| 2010  | 楽天がEdyを買収 | EコマースFGがプリペイドに参入 |
| 2016-10  | Suica + Edy による Apple Pay JP の提供開始 | iPhoneがJPプリペイドエコシステムに参入 |
| 2018-05  | Suica + EdyでGoogle Pay JPを開始 | Android 非おサイフケータイパスがオープン |
| 2019-10  | Apple Payにnanacoが追加される | 小売りプリペイドiPhoneが追いつく |
| 2020-10  | Apple Pay＋モバイルPASMOの提供開始（同時） | 東京私鉄がモバイルに参入 |
| 2021-05  | Apple PayにWAONが追加されました | iPhone で小売店で全額前払い |
| 2023-06  | Apple PayにICOCA＋モバイルICOCAが追加 | その後関西が追いつく7-年遅れ |
| 保留中 | TOICA / manaca / nimoca / SUGOCA / モバイルキット | 小規模な交通事業者は依然として物理的のみまたは部分的なサービスを提供している |

Apple Pay のサポート時期の差は、JP プリペイド分析で最も引用される競争指標の 1 つです。7- Suica との年の差 (2016）とICOCA（2023）は、関西側のデジタルプリペイド導入ペースに重大な影響を与え、Kitaca がモバイル / Apple Pay から撤退し続けることで、北海道側のプリペイドデジタルネイティブ変換が制限されます。

## 加盟店経済の論点

JP のプリペイド電子マネーの加盟店受付手数料は通常 ** です。2-3%MDR (加盟店割引率)** 発行会社と加盟店の交渉に応じて、完全なクレジット カードの MDR よりも低くなります (3-4%標準レートの場合）ただし、QR / コード支払い MDR よりも高い（1-2%一般的に、時々0%プロモーション期間中）。の3階層 MDR 構造は、加盟店が単一の主要な支払い方法を選択するのではなく、複数の支払い方法を受け入れる理由の 1 つです。各方法は異なる手数料プロファイルを提供します。

プリペイド発行会社にとっての経済的影響は次のとおりです。
- **Retail-FG プリペイド (nanaco、WAON、Edy)** — 親グループの店舗で取引が行われる場合、加盟店手数料はほとんどが親グループ内に内部化されるため、グループ内取引の有効な MDR は独立企業間の手数料よりも移転価格協定に近いものとなります。これが、グループ内での受け入れがボリュームを占める構造的な理由の 1 つです
- **Transit-FG プリペイド (Suica、PASMO、ICOCA など)** — MDR は、発行鉄道にとっての本物の第三者料金収入であり、JR 東日本と PASMO コンソーシアムにとって、運賃徴収用途を超えて Suica/PASMO を経済的に魅力的なものにする路線の 1 つです。
- **ブランド間相互利用手数料の配分** — 全国相互利用を介して WAON 加盟店で Suica のタップが発生した場合、発行者間決済により手数料の一部が Suica の発行会社 (JR 東日本) に、一部が取得インフラに割り当てられます。料金配分ルールは参加発行会社には秘密ですが、一般に端末インフラストラクチャが使用されているブランドを優先します。

加盟店手数料の側面は、一部のプリペイド発行会社が加盟店ネットワークを積極的に拡大し続ける理由 (トランジット FG) と、他のプリペイド発行会社がグループ内の統合の深さに重点を置く理由 (リテール FG) を理解するための重要な文脈です。

## 未利用残高収益の論点

**損益** — ロードされたものの使用されなかったプリペイド残高の部分 — は、プリペイド発行会社にとって重要な利益ラインです。正確な数字は発行会社間で同一の形式で開示されていませんが、構造パターンは次のとおりです。

- リテール FG プリペイド (WAON、nanaco、Edy) は、ユーザーが高額な金額をチャージする頻度が低く、めったに使用されないカードに少額の残高が残るため、*損害額が高くなる**傾向があります。
- Transit-FG プリペイド (Suica、PASMO、ICOCA) は、ユーザーが毎日の通勤支出として少額のチャージを頻繁に行い、残高は通常数日または数週間以内に消費されるため、**損害額が低い**傾向があります。

違約金は、発行者の選択に応じて異なる会計処理に基づいて収益として認識されます。統計的な予想支出モデルに基づいて半年のカットオフで認識する場合もあれば、確認された非償還事象（払い戻し請求のないカードの有効期限など）のみで認識する場合もあります。資金決済法は、特定の破損の認識方法を義務付けていません。

## 訪日客 UX のギャップ

マトリックス上の全ブランドは、**訪日客 UX の根本的なギャップ**を共有している。Mobile FeliCa は日本市場向け端末（Android Osaifu-Keitai + Apple Pay 対応 iPhone）でのみ動作し、日本国外で購入された端末では動作しない。そのため訪日客は、通常カードの期間限定の観光客向け派生商品である **物理カード商品**、すなわち Welcome Suica / Visit Suica（JR East）、PASMO PASSPORT（PASMO Co.）、ICOCA & HARUKA bundle（JR West）に限定される。

この UX のギャップは、**Visa Touch / EMV Contactless オーバーレイの展開** の背後にある構造的要因の 1 つであり、JR 東日本、JR 九州、南海などが FeliCa リーダーの上に重ねることを開始しています。EMV-Contactless カードを持つ海外旅行者は、日本市場の FeliCa デバイスに切り替えることなく、乗車したり買い物をしたりできます。オーバーレイは技術的には付加的ですが（同じリーダーが FeliCa と EMV の両方を処理します）、海外の EMV カードでタップする観光客はプリペイド フロートを完全に回避するため、商業的には既存のプリペイド発行会社の収益モデルを破壊します。見る[[payments/cashless-jp-landscape|JP cashless landscape]]より広範な非接触型展開のストーリーについては、

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[JapanFG/rakuten-edy]]
- [[JapanFG/seven-card-service]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/seven-bank]]
- [[JapanFG/aeon-bank]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[retail/seven-and-i-hd]]
- [[retail/aeon-group]]
- [[INDEX|FinWiki index]]

## 出典

- FSA 前払い保険ポータル: https://www.fsa.go.jp/policy/prepaid/
- FSA 全国の前払式支払手段発行者一覧 (registered prepaid issuers): https://www.fsa.go.jp/menkyo/menkyoj/zenshikoukinrishou.pdf
- FSA 第三者型前払式支払手段発行者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/zendaisanshakogata.pdf
- 楽天グループ企業サイト：https://corp.rakuten.co.jp/
- セブン＆アイ・ホールディングスコーポレートサイト：https://www.7andi.com/
- イオングループ企業サイト：https://www.aeon.info/
- JR東日本企業サイト：https://www.jreast.co.jp/
- PASMO株式会社コーポレートサイト：https://www.pasmo.co.jp/
- JR西日本企業サイト（JRおでかけ）：https://www.jr-odekake.net/
- JR北海道企業サイト：https://www.jrhokkaido.co.jp/
- JR東海企業サイト：https://jr-central.co.jp/
- 名鉄コーポレートサイト：https://www.meitetsu.co.jp/
- Nishitetsu (Nishi-Nippon Railroad) corporate site: https://www.nishitetsu.jp/
- JR九州企業サイト：https://www.jrkyushu.co.jp/
- 日本銀行の決済システムポリシー: https://www.boj.or.jp/
- 各事業者の前払フロートおよび未償還残高のIR開示：JR東日本、JR西日本、JR東海、JR九州（東証プライム上場）。楽天グループ、イオン株式会社／イオンフィナンシャルサービス、セブン&アイHD（東証プライム上場）、民間事業者（PASMO株式会社、Nimoca株式会社、総務省、JR北海道）規制当局への届出に基づく

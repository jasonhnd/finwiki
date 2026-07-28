---
source: payments/japan-prepaid-electronic-money-operator-matrix
source_hash: 7306bce2dcae7dde
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の前払い電子マネー事業者マトリクス"
translated_at: 2026-07-28T20:15:36Z
---

# 日本の前払い電子マネー事業者マトリクス

## TL;DR

日本の前払い電子マネーのランドスケープは**単一の産業ではない**。少なくとも小売前払い、交通前払い、デジタルウォレット前払いという異なるスタックがあり、レジでは似て見えても、資金決済法上の区分、技術基盤、グループ法人構造が異なる。Edy、nanaco、WAON、Suica、PASMO、ICOCA、Kitaca、TOICA、manaca、nimoca、SUGOCA を一括りにすると、返金方針、モバイル対応、加盟店ネットワークの経済性、そして前払式支払手段の法的責任を負う法人を読み違える。本項目は、加盟店側・消費者側の分析に入る前に、**各ブランドの実際の発行・運営主体**を横断比較するための入口である。

## ウィキ上の位置づけ

これはクロスカテゴリの前払い電子マネー参照として [[payments/INDEX|payments index]] の下に位置する。発行者別の登録ソースについては [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 JP index]]、各事業者がどのライセンスを保有するかを決める規制境界については [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]、交通サイドの深掘りについては [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit 前払式 Suica/PASMO/ICOCA economics]]、小売サイドの深掘りについては [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail 前払式 comparison]]、コンビニ FG 前払いレーンについては [[payments/famipay-valucreate-strategy|FamiPay ValuCreate strategy]]、クロススキームのエコノミクスについては [[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]]、そしてこれらの前払いブランドが時にその上に乗る QR / コード決済オーバーレイについては [[payments/japan-code-payment-competitive-map|JP コード決済 competitive map]] と併せて読まれたい。グループエンティティのアンカーは [[payment-firms/rakuten-edy|Rakuten Edy]]、[[card-issuers/seven-card-service|Seven Card Service]]（nanaco 事業者）、そして [[card-issuers/aeon-financial-service|AEON Financial Service]]（WAON 事業者）であり、より広範なグループの面は [[loyalty/japan-points-landscape|JP points landscape]]、[[retail/seven-and-i-hd|Seven & i HD]]、[[retail/aeon-group|AEON Group]] にある。

## なぜこのマトリクスが重要か

発行者別の違いは、(a) 前払残高と法定保全義務、(b) 加盟店受入の経済性、(c) モバイル対応、(d) 返金・消費者保護、(e) 公開資料で確認できる発行者責任と現金・チャージ経路に影響する。グループ銀行の ATM や口座チャージ機能は、公開資料に明示的な保証がない限り、法的・財務的な「バックストップ」と表現しない。

下記のマトリクスは、Suica の発行者である JR 東日本、nanaco の運営会社とセブン銀行 ATM のチャージ機能、楽天グループ内の登録発行者である楽天Edyを区別する。いずれも FeliCa のタップ操作を共有するが、責任主体と資金経路は異なる。

## 発行者別プロファイル

### Edy — 楽天 Edy（楽天グループ 4755）

**事業者**：[[payment-firms/rakuten-edy|楽天Edy株式会社]]（楽天ペイメントの完全子会社）。**登録**：第三者型前払式支払手段発行者（法人番号 3010901038102、関東財務局長 第 00692 号、2016-07-21 登録）。**技術**：FeliCa。**沿革**：前身が 2001-11 に Edy 本格サービスを開始し、現法人が 2016-10 に事業を承継。**モバイル**：対応 Android のおサイフケータイ / Google ウォレット。公式 FAQ は iPhone 非対応としている。**返金**：原則として現金払戻し不可。**グループ関係**：楽天ペイメントの所有、楽天ポイント・楽天カード連携は確認できるが、楽天銀行によるフロート保証は今回確認した公開資料からは確認できない。^[楽天Edy 会社概要: https://edy.rakuten.co.jp/company/company.html; サービス情報: https://edy.rakuten.co.jp/terms/info.html; 対応端末 FAQ: https://support.rakuten-edy.co.jp/faq/show/1179; 金融庁登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf]

### nanaco — セブン・カードサービス（セブン&アイ HD 3382）

**事業者**：[[card-issuers/seven-card-service|セブン・カードサービス]]。**登録**：第三者型前払式支払手段発行者。**技術**：FeliCa（カード、Android nanaco モバイル、Apple Pay nanaco）。**ローンチ**：2007-04。**モバイル**：Apple Pay 対応開始は **2021-10-21**で、2019 年ではない。**返金**：チャージ済み金額は通常、現金で返金できない。**グループ関係**：セブン銀行 ATM は現金チャージと残高確認を提供するが、これはチャージ経路であり、残高保証の根拠ではない。^[セブン&アイ Apple Pay 開始発表: https://www.7andi.com/company/news/release/20489.html; nanaco 現金チャージ案内: https://www.nanaco-net.jp/how-to/charge/cash.html]

### WAON — イオングループ（イオン 8267 / イオンフィナンシャルサービス 8570）

**ブランド / 発行者**：イオン株式会社が WAON ブランドを管理し、発行法人はカードごとに異なる。金融庁登録一覧にはイオンリテール株式会社（関東財務局長 第 00087 号）が第三者型前払式支払手段発行者として掲載される。**技術**：FeliCa（物理カード、Android モバイル WAON、Apple Pay WAON）。**ローンチ**：2007-04。**モバイル**：Apple Pay 対応開始は **2021-10-21**で、2021-05 ではない。**返金**：利用規約・法令上の例外を除き、チャージ済み金額は原則返金不可。**グループ関係**：イオンカード / 銀行口座オートチャージ、イオン銀行 ATM チャージは資金投入経路であり、全発行者の共同保証を意味しない。^[金融庁登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf; イオン Apple Pay 開始発表: https://www.aeon.info/news/release_33536/; WAON 利用約款: https://www.waon.net/stipulation/49000/]

### Suica — JR 東日本（東日本旅客鉄道 9020）

**事業者**：東日本旅客鉄道株式会社（JR 東日本、TSE Prime 9020） — Suica は **JR 東日本によって直接運営される**（別個の子会社によってではない）。これは上記の小売前払い発行者とは構造的に異なる。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（Suica IC + Mobile Suica、交通カードの中で最も広範な Apple Pay / Google Pay / Mobile FeliCa サポート）。**ローンチ**：2001-11 （当初は交通専用の運賃支払いカードとして；買い物支払いに 2004-03に拡大）。**配布**：物理 Suica カード、Mobile Suica（Android）、Apple Pay Suica（2016-10 以来 — 日本における iOS の目玉ローンチ）、Google Pay Suica。**加盟店ネットワーク**：約 1.6M ポイント（前払い電子マネーの中で最も広範）、すべての相互運用可能な全国相互利用の交通カード受容加盟店を含む。**モバイル統合**：最も深い — Apple Pay Suica 2016-10 は日本における iOS の主要なローンチイベントであった。**返金ポリシー**：確立されている — JR 東日本緑の窓口（Midori-no-Madoguchi）の切符カウンターで Suica 残高と 500 円のデポジットを返金、加えて残高保存付きの記名 Suica の紛失カード再発行。**グループ銀行のバックストップ**：JR 東日本は銀行を運営しない；Suica フロートは資金決済法が義務付ける引当を伴う前払い負債として JR 東日本の連結バランスシート上に乗る。**グループのクロスリンク**：JRE POINT（JR 東日本のロイヤルティプログラム）統合、アトレ / NewDays / ベックスコーヒーの店舗ネットワーク、えきねっと（オンライン切符）統合、JR 東日本バンクカード（パートナーみずほ）コブランド。Suica は 10 主要交通カードを互いのネットワークにまたがって機能させる全国相互利用スキームの**相互運用性のバックボーン**である；[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit 前払式 Suica/PASMO/ICOCA economics]] 参照。

### PASMO — PASMO 株式会社

**事業者**：株式会社 PASMO（25+ 東京都市圏の私鉄・バス事業者が保有する合弁発行者、東急、小田急、京王、東武、西武、京成、東京メトロ、都営、その他を含む）。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（PASMO カード + Mobile PASMO）。**ローンチ**：2007-03 （Suica-PASMO 全国相互利用がローンチされる 1 か月前）。**配布**：物理 PASMO カード、Mobile PASMO（Android、2020-10）、Apple Pay PASMO（2020-10  — Mobile PASMO Android と同時にローンチ）。**加盟店ネットワーク**：Suica と同じ相互運用可能な全国相互利用ネットワーク（約 1.6M ポイント）。**モバイル統合**：Apple Pay PASMO は 2020-10, に到来し、**Apple Pay Suica の 4 年後** — このラグは、単一の意思決定者である JR 東日本に対し、25+ のステークホルダー事業者を足並み揃えさせる合弁の調整コストを反映している。**返金ポリシー**：発行鉄道の切符オフィスで残高返金（手続きは発行鉄道により異なる）、残高保存付きの記名 PASMO 再発行。**グループ銀行のバックストップ**：各メンバー鉄道がフロート負債の比例配分シェアを負う；単一の銀行バックストップはない。**グループのクロスリンク**：メンバー鉄道別のロイヤルティプログラム（東急 TOKYU POINT、小田急 OdakyuPoints、東京メトロ To Me Card 等） — PASMO は共有される鉄道技術だが、ロイヤルティは発行鉄道によって断片化する。[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit 前払式 Suica/PASMO/ICOCA economics]] 参照。

### ICOCA — JR 西日本（西日本旅客鉄道 9021）

**事業者**：西日本旅客鉄道株式会社（JR 西日本、TSE Prime 9021）、直接運営。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（ICOCA カード + Mobile ICOCA）。**ローンチ**：2003-11。**配布**：物理 ICOCA カード、Mobile ICOCA（Android 2023-06）、Apple Pay ICOCA（2023-06  — JR 西日本の技術投資のタイミングのため Suica よりはるかに遅い）。**加盟店ネットワーク**：同じ相互運用可能な全国相互利用ネットワーク。**モバイル統合**：Apple Pay ICOCA 2023-06 （Suica の約 7 年後）。**返金ポリシー**：JR 西日本の切符オフィスで残高返金、記名 ICOCA 再発行。**グループ銀行のバックストップ**：JR 西日本のバランスシート（グループ銀行なし）。**グループのクロスリンク**：ICOCA POINT（ロイヤルティ）と J-WEST カード（パートナー SMBC）。[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit 前払式 Suica/PASMO/ICOCA economics]] を参照されたい。

### Kitaca — JR 北海道

**事業者**：北海道旅客鉄道株式会社（JR 北海道）。第三者型前払式支払手段発行者（北海道財務局長 第 00134 号、2008-12-25 登録）。**技術 / 提供形態**：現在の Kitaca 公式ページは物理カード、全国相互利用、再発行、窓口払戻しを案内し、ネイティブの Mobile Kitaca / Apple Pay / Google Pay は掲載していない。**今後**：JR 北海道と JR 東日本は、Kitaca エリアで利用できる Mobile Suica 定期券を 2027 年春以降に開始予定と発表した。発表は Mobile Kitaca がない理由を JR 北海道の財務状況に帰属させていない。^[JR 北海道 Kitaca: https://www.jrhokkaido.co.jp/kitaca/; JR 北海道 / JR 東日本 モバイル計画: https://www.jrhokkaido.co.jp/CM/Info/press/pdf/20250709_KO_KitacaSuica.pdf; 金融庁登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf]

### TOICA — JR 東海（東海旅客鉄道 9022）

**事業者**：東海旅客鉄道株式会社（JR 東海、TSE Prime 9022）、直接運営。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（TOICA カード；2026時点で Mobile TOICA はパイロット/限定）。**ローンチ**：2006-11。**配布**：物理カード、モバイルは保留中。**加盟店ネットワーク**：全国相互利用で相互運用可能。**モバイル統合**：Suica/PASMO に比べ限定的 / 遅い — JR 東海は歴史的に Mobile TOICA よりも新幹線運賃の統合（EX-IC、SmartEX）を優先してきた。**返金ポリシー**：切符オフィスでの返金。**グループ銀行のバックストップ**：JR 東海のバランスシート。**グループのクロスリンク**：JR セントラルタワー / JR 東海関連の小売、東海道新幹線予約のための EX-IC 統合。

### manaca — 名鉄 / 名古屋鉄道

**事業者**：株式会社エムアイシー（MIC、名鉄 IC カード） — 名鉄（名古屋鉄道）と名古屋市交通局の合弁。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（manaca カード；広範なモバイル統合なし）。**ローンチ**：2011-02。**配布**：物理カード。**加盟店ネットワーク**：全国相互利用で相互運用可能。**モバイル統合**：限定的。**返金ポリシー**：切符オフィスでの返金。**グループ銀行のバックストップ**：名鉄のバランスシート + 名古屋市交通局。**グループのクロスリンク**：名鉄ロイヤルティ（名鉄 MEMBERS）、名古屋市交通カードのレガシー。

### nimoca — 西鉄 / 西日本鉄道

**事業者**：株式会社ニモカ（Nimoca Co., Ltd.） — 西日本鉄道（西鉄）が支配する合弁。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（nimoca カード）。**ローンチ**：2008-05。**配布**：物理カード。**加盟店ネットワーク**：全国相互利用で相互運用可能。**モバイル統合**：限定的。**返金ポリシー**：切符オフィスでの返金。**グループ銀行のバックストップ**：西鉄のバランスシート。**グループのクロスリンク**：nimoca ポイント、福岡都市圏における西鉄バス / 鉄道の統合。

### SUGOCA — JR 九州（九州旅客鉄道 9142）

**事業者**：九州旅客鉄道株式会社（JR 九州、TSE Prime 9142）、直接運営。**ライセンス**：資金決済法第三者型前払式支払手段発行者。**技術**：FeliCa（SUGOCA カード）。**ローンチ**：2009-03。**配布**：物理カード。**加盟店ネットワーク**：全国相互利用で相互運用可能。**モバイル統合**：2026 時点で限定的（JR 九州の新幹線統合は別の EX-IC ルート経由）。**返金ポリシー**：切符オフィスでの返金。**グループ銀行のバックストップ**：JR 九州のバランスシート。**グループのクロスリンク**：JR 九州の小売・旅行ロイヤルティ。

## 大比較マトリクス表

| ブランド | 事業者 | 親グループ | ライセンス（資金決済法） | 技術 | ローンチ | 加盟店ネットワーク（概算） | モバイル / Apple Pay | 返金方針 | 確認済みの資金・責任関係 | グループ連携 | スタック階層 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Edy** | [[payment-firms/rakuten-edy\|楽天Edy]] | 楽天ペイメント / 楽天グループ | 第三者型前払 | FeliCa（Mobile FeliCa） | 2001-11 ブランド / 2016-10 現法人承継 | 現行公式件数は本表で不使用 | Android おサイフケータイ / Google ウォレット；iPhone 非対応 | 原則不可 | 楽天Edyが発行責任；楽天カード等のチャージ連携 | 楽天ポイント | 小売 / e コマース |
| **nanaco** | [[card-issuers/seven-card-service\|セブン・カードサービス]] | [[retail/seven-and-i-hd\|Seven & i HD]]（3382） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2007-04 | 現行公式件数は本表で不使用 | Apple Pay 2021-10-21 | チャージ済み金額は現金返金不可 | セブン・カードサービスが運営；セブン銀行 ATM はチャージ経路 | nanaco ポイント + 7&アイ | 小売（CVS） |
| **WAON** | カード別に発行者が異なる；イオンリテールは登録発行者 | [[retail/aeon-group\|AEON Group]]（8267） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2007-04 | 現行公式件数は本表で不使用 | Apple Pay 2021-10-21 | 原則不可 | 責任は発行者ごと；イオン銀行 ATM / 口座チャージ | WAON POINT + イオンカード自動チャージ | 小売（モール） |
| **Suica** | JR 東日本（直接運営） | JR 東日本（9020） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2001-11 | 約 1.6M | 2016-10 | 緑の窓口（確立済み） | JR 東日本のバランスシート（グループ銀行なし） | JRE POINT + えきねっと + アトレ | 交通（東京・東日本） |
| **PASMO** | PASMO 株式会社（25+ 鉄道の JV） | 都市圏私鉄 | 第三者型前払 | FeliCa（Mobile FeliCa） | 2007-03 | 約 1.6M（相互利用） | 2020-10 | 発行鉄道別オフィス | メンバー鉄道のバランスシート | 鉄道別ロイヤルティ（TOKYU POINT 等） | 交通（東京メトロ私鉄） |
| **ICOCA** | JR 西日本（直接運営） | JR 西日本（9021） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2003-11 | 約 1.6M（相互利用） | 2023-06 | JR 西日本の切符オフィス | JR 西日本のバランスシート | ICOCA POINT + J-WEST カード（SMBC パートナー） | 交通（関西） |
| **Kitaca** | JR 北海道（直接運営） | JR 北海道（特殊会社） | 第三者型前払 | FeliCa | 2008-10 | 全国相互利用 | ネイティブ製品なし；Mobile Suica 定期券を 2027 年春以降予定 | JR 北海道窓口 | JR 北海道が発行責任 | 全国相互利用 | 交通（北海道） |
| **TOICA** | JR 東海（直接運営） | JR 東海（9022） | 第三者型前払 | FeliCa | 2006-11 | 相互利用 | 限定的 / 遅い | JR 東海の切符オフィス | JR 東海のバランスシート | EX-IC 新幹線統合 | 交通（東海） |
| **manaca** | エムアイシー（MIC） | 名鉄 + 名古屋市 | 第三者型前払 | FeliCa | 2011-02 | 相互利用 | 限定的 | 事業者別オフィス | 名鉄 + 市交通局 | 名鉄 MEMBERS | 交通（名古屋） |
| **nimoca** | ニモカ社 | 西鉄（西日本鉄道） | 第三者型前払 | FeliCa | 2008-05 | 相互利用 | 限定的 | 事業者別オフィス | 西鉄のバランスシート | nimoca ポイント + 西鉄統合 | 交通（福岡） |
| **SUGOCA** | JR 九州（直接運営） | JR 九州（9142） | 第三者型前払 | FeliCa | 2009-03 | 相互利用 | 限定的 | JR 九州の切符オフィス | JR 九州のバランスシート | JR 九州の旅行/小売 | 交通（九州） |

## クロス軸：小売 FG vs 交通鉄道 FG vs e コマース FG

上記のマトリクスは 11 ブランドを列挙するが、それらはクロスリンクの経済性、返金手続き、発行者責任・チャージ経路を決める**3 つの事業者カテゴリ**に収斂する。

### 小売 FG 前払い（小売グループの金融子会社が発行）

- **nanaco** — セブン&アイ HD 内のセブン・カードサービスが発行
- **WAON** — イオングループ内のイオンフィナンシャルサービスが発行

**定義的な特徴**：加盟店ネットワークは親グループの店舗に大きく集中、現金の入出金口は親グループの銀行 ATM（nanaco のセブン銀行）または親店舗のカウンター（WAON のイオン）経由、ロイヤルティプログラムは親グループの買い物行動と深く統合、オートチャージは親グループのクレジットカードに紐づく（イオンカード → WAON オートチャージ）、グループ内クレジットカードのクロスセルが支配的なユニットエコノミクスのドライバー。小売 FG 前払いは**運用上、前払いのラッパーを持つ小売ロイヤルティプログラム**である — 前払い負債は金融子会社のバランスシートに乗るが、経済ロジックは決済マージンの抽出ではなく買い物客の頻度の捕捉である。直接対決の詳細については [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail 前払式 comparison]] を参照されたい。

### 交通鉄道 FG 前払い（鉄道事業者が発行）

- **Suica** — JR 東日本
- **PASMO** — 東京メトロ私鉄の JV
- **ICOCA** — JR 西日本
- **Kitaca** — JR 北海道
- **TOICA** — JR 東海
- **manaca** — 名鉄 + 名古屋市
- **nimoca** — 西鉄
- **SUGOCA** — JR 九州

**定義的な特徴**：運賃収受インフラの拡張として発行され、鉄道窓口が払戻し・再発行を扱い、全国相互利用が 10 主要ブランドを一つの受入ネットワークに接続する。モバイル開始時期は事業者ごとに異なり、Suica が先行、ICOCA は 2023 年に対応した。Kitaca の現行ページにはネイティブのモバイル製品がなく、Kitaca エリアで使える Mobile Suica 定期券は 2027 年春以降を予定する。前払負債は該当する鉄道発行者・参加事業者が負う。

### e コマース FG 前払い

- **Edy** — 楽天グループ内の楽天 Edy

**定義的な特徴**：親 FG はインターネット / e コマースのコングロマリット、前払いはマルチプロダクトのウォレットスタック内で QR / コード決済（楽天 Pay）、カード（楽天カード）、ポイント（楽天ポイント）と並ぶ、e コマースの親会社のオンラインプレゼンスを補完する物理店舗のタッチポイント、親会社のより広範な e コマース経済圏との深いロイヤルティプログラム統合。Edy はこの事業者カテゴリで**唯一の主要な日本前払い電子マネー**であり、歴史的な順序を反映している — Edy は小売 FG と交通 FG の前払いがまだ市場に参入していなかった 2001 に（楽天買収前に）ローンチし、その後楽天のスーパーストア戦略に吸収された。

## 相互運用性のバックボーン — 全国相互利用（Nationwide Mutual Use）

10 主要交通カードブランド（Suica、PASMO、Kitaca、TOICA、manaca、ICOCA、PiTaPa、nimoca、SUGOCA、はやかけん）は **全国相互利用スキーム**（2013-03 にローンチ）を介して接続されている — 互換性のあるリーダー上の単一のタップが、参加するいずれの交通または加盟店端末でも、カードがどのブランドに属するかに関わらず機能する。これは全 10 ブランドにわたる**約 1.6M ポイントの単一の共有受容ネットワーク**を生み出し、世界最大級の非接触前払い受容ネットワークの一つである。

経済的な効果は、より小規模な交通ブランド発行者（Kitaca、TOICA、manaca、nimoca、SUGOCA）が、それを構築する完全な獲得コストを負うことなくフルネットワークへのアクセスを得ることである。Suica の発行者としての JR 東日本は事実上のネットワークバックボーン提供者であり、これが JR 東日本の Suica プラットフォーム投資が公共財として構造的に低く価格付けられている理由の一つである。

**PiTaPa**（関西エリアの私鉄前払い、スルッと KANSAI が発行）が上記の前払い電子マネー事業者マトリクスに**ない**唯一の主要交通カードブランドであることに注意されたい。これは PiTaPa が前払いではなく**ポストペイ**モデル（月末にクレジット請求）を用いるからである。PiTaPa は構造的に前払いカードではなく鉄道上のクレジットカードであり、第三者型前払ではなく個別信用購入あっせん / 包括信用購入あっせんとして登録されている — ポストペイの分類については [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit 事業者 matrix]] 参照。

## 境界事例

- **日本市場における FeliCa vs MIFARE** — このマトリクスのすべてのブランドは MIFARE ではなく **FeliCa ベース**である。MIFARE は交通の非接触のグローバルな支配的標準である（ロンドンの Oyster、香港の Octopus の Visa オーバーレイ前、シンガポールの EZ-Link、NYC の OMNY 等で使用）が、日本の交通前払いスタックからは本質的に欠けている。FeliCa の選択は 2004 頃の NTT ドコモのおサイフケータイ・イニシアチブと JR 東日本の早期の Suica-FeliCa の選定によって行われ、日本市場を約 25 年間 FeliCa にロックインした。これが、日本の前払い IC が交通 + 小売をまたいでシームレスに機能する（単一チップ標準）が、オーバーレイなしにはグローバルな MIFARE ベースの交通システムと容易に相互運用できない構造的な理由である（Visa Touch / EMV Contactless のオーバーレイが、その回避策として鉄道ごとに今展開されつつある）。
- **Suica の規制上の分類** — Suica は資金決済法のもとで第三者型前払式支払手段として登録されているが、JR 東日本は**銀行法上の銀行でも資金移動業の資金移動事業者でもない**。Suica フロート（全残高にわたり任意の時点で推定 > JPY 200B+）は、銀行システムの保護のもとではなく、法定の供託保証規定を伴う JR 東日本の前払い負債として乗る。これが Suica の返金手続きが預金保険サイドではなく事業者サイドである理由である。
- **PASMO の合弁フロート配分** — PASMO のフロート負債は 25+ のメンバー鉄道発行者にわたり発行に比例して配分される。東急駅でロードされた残高は、その後東京メトロ駅で使われたとしても東急のバランスシート負債であり、メンバー鉄道間で内部決済が発生する。これは JR 東日本 / JR 西日本 / JR 九州の単一エンティティモデルとは構造的に異なる。
- **Apple Pay の時系列** — 今回校正したブランドの確認済み導入順は、Suica（2016-10）、PASMO（2020-10）、nanaco と WAON（いずれも 2021-10-21）、ICOCA（2023-06）である。楽天 Edy の現行公式サポートページは、対応する Android おサイフケータイ端末を案内し、iPhone は非対応としている。
- **nanaco のセブン銀行 ATM チャージ経路** — セブン銀行 ATM は nanaco の現金チャージと残高確認に対応する。これは入金・チャージ機能であり、現金返金経路でも、財務的なバックストップの根拠でもない。
- **WAON 自動チャージ（オートチャージ）統合** — イオンカードに紐づく WAON のオートチャージはイオン買い物客にとって支配的な UX であり、イオンカード保有者がカード関係を維持する最も引用される理由の一つである。これは、グループ内クレジットカード発行者のない純粋前払いブランドが複製できない構造的なクロスリンクである。
- **楽天 Edy の e コマース FG ポジショニング** — Edy は、マトリクスの中で親 FG が小売 FG または交通鉄道 FG ではなく **e コマース / インターネットのコングロマリット**である唯一の前払い電子マネーである。楽天経済圏内での楽天 Edy の役割は、部分的に楽天 Pay（QR / コード決済）と楽天カード（クレジットカード）を補完する物理店舗のタッチポイントを提供することである — [[payments/japan-code-payment-competitive-map|JP コード決済 competitive map]] 参照。
- **Kitaca の現行モバイル境界** — JR 北海道の現行製品ページには、ネイティブの Mobile Kitaca / Apple Pay / Google Pay 製品は掲載されていない。JR 北海道と JR 東日本の共同発表では、2027年春以降に Kitaca エリアで利用できる Mobile Suica 定期券が計画されているが、財務状況を理由としては挙げていない。
- **ブレッケージと未償還残高のエコノミクス** — すべての前払い電子マネー発行者は**ブレッケージ**負債（ロードされたが決して使われない残高）を抱えており、資金決済法は発行者に半年の締日における未償還残高の少なくとも 50% の発行保証金を維持することを義務付ける。ブレッケージの項目は小売前払い（WAON、nanaco、Edy）にとって重大な利益ドライバーだが、ユーザーがより頻繁に少額をトップアップする交通前払い（Suica、PASMO）にとってはそうではない。この次元はマトリクスの列の行にはない（公開ソースのマトリクスにとって推定依存が大きすぎる）が、前払い発行者のビジネスモデルの背後にある重大な経済の物語である — 規制上の供託メカニクスについては [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]] を参照されたい。
- **Mobile FeliCa の Android + Apple Pay へのロックイン** — Mobile FeliCa は適切な NFC チップサポートを持つ Android 携帯（本質的に 2010時代のおサイフケータイ以降のすべての日本市場向け Android）と、iPhone 7 （Apple Pay 日本ローンチを伴う 2016）以降の iPhone で機能する。Mobile FeliCa は**日本市場向け以外の Android 携帯では利用できない**。これが、これらの前払いブランドのインバウンド観光客の UX が、モバイルではなく Visit Suica / Welcome Suica の物理カード製品に限られる理由の一つである。
- **QR / コード決済オーバーレイ**：これらの前払いブランドのいくつかは、ますます QR / コード決済オーバーレイを介してアクセスされている（例：楽天 Pay は Edy チャージをその資金源の一つとして経由する；nanaco は様々な QR レール経由でロードできる）。したがって「前払い電子マネーブランド」と「QR コード決済ブランド」の間のクリーンな分離は侵食されつつある — オーバーレイのランドスケープについては [[payments/japan-code-payment-competitive-map|JP コード決済 competitive map]] 参照。

## フロートサイズの概算順位任意の時点での未償還前払い残高の公開ソース由来の概算順位（数字は半年の締日により変動し、発行者間で同一の形式で一貫して開示されているわけではない）：

1. **Suica** — 日本最大の単一ブランド前払いフロート、JPY 200-300B レンジ
2. **WAON** — JPY 100-200B レンジ
3. **PASMO** — JPY 100-200B レンジ（25+ のメンバー鉄道のバランスシートにわたり分散）
4. **nanaco** — JPY 100-200B レンジ
5. **Edy** — JPY 50-100B レンジ
6. **ICOCA** — JPY 50-100B レンジ
7. **TOICA / manaca / nimoca / SUGOCA / Kitaca** — 各々 JPY 50B 未満全 10+ ブランドにわたる集計**前払いフロートは任意の時点で JPY 1-1.5 兆円クラス**である。資金決済法のもとで、発行者は最寄りの法務局に半年締日の未償還残高の少なくとも 50% の発行保証金（issuance guarantee deposit）を維持しなければならず、これは**おおよそ JPY 500-750 億円の発行保証金が前払いユーザーの保護として日本政府に供託される**ことを意味する。これは日本の金融システムにおける最大級の消費者保護の供託プールの一つであり、資金決済法の前払い制度が厳しく規制される構造的な理由である。規制の詳細については [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]] を参照されたい。

## 発行者責任と確認済みの現金・チャージ経路

本比較では、前払式支払手段について法的責任を負う主体と、チャージに使われる銀行・ATM・カードを分けて扱う：

- **Edy** — 登録発行者は楽天 Edy であり、楽天カードその他の対応手段がチャージ経路を提供する。今回確認した公開資料は、楽天銀行が前払い残高を財務的にバックストップすることを示していない
- **nanaco** — 運営主体はセブン・カードサービスであり、セブン銀行 ATM は現金チャージと残高確認を提供する。チャージ済み残高は通常、現金で払い戻されない
- **WAON** — 発行者はカードによって異なる。イオン銀行 ATM、銀行口座チャージ、イオンカードのオートチャージは資金供給経路であり、全発行者に対する共同保証の根拠ではない
- **交通系カード** — 該当する鉄道発行者または参加事業者が前払い負債を負い、公表された払い戻し・再発行手続きを運営する

この区別により、運用上のチャージ関係を保証やバランスシート上のコミットメントとして過大に表現することを防ぐ。

## 資金決済法のもとでの規制上の供託義務マトリクスの全 11 ブランドは、資金決済法（資金決済法）のもとで **第三者型前払式支払手段発行者**（third-party-type 前払式発行会社）として登録されており、以下を課す：

- **発行保証金（issuance guarantee deposit）** — 各半年の締日（3-31 と 9-30）に、発行者は最寄りの法務局に半年末の未償還残高の少なくとも 50% を、現金、国債、または銀行保証で供託しなければならない。供託は発行者の破綻時のユーザー保護の役割を果たす
- **業務報告書（business report）** — 前払い残高、取引高、返金指標を伴う金融庁への年次提出
- **苦情処理（complaint handling）** — 指定された苦情処理機関（ADR）への加入が必要
- **加盟店管理（加盟店 management）** — 第三者型発行者（vs 自家型の単一加盟店前払い）の場合、発行者は参加加盟店の関係を管理する義務を負う
- **業務改善命令** — コンプライアンスの問題が生じた場合、金融庁は業務改善命令を発出できる

第三者型 vs 自家型の区別は構造的である：第三者型は「多くの加盟店で受容される汎用」モデル（このマトリクスの全 11 ブランド）であり、自家型は「発行者自身の店舗でのみ受容される」モデル（例：その百貨店でのみ使われる百貨店前払いカード）である。自家型の制度は規制負荷が軽い。境界チェックは、前払いが発行者のグループ外の「第三者」加盟店で受容されるかどうかである — 境界の詳細については [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]] を参照されたい。

## 資金移動制度との比較日本の決済に不慣れな読者はしばしば**前払い電子マネー**を**資金移動（資金移動業）**と混同する — 両者はウォレット残高の UX を共有するが、重大に異なるルールを持つ異なるライセンスのもとに位置する：

| 次元 | 前払い第三者型前払 | 資金移動資金移動業 |
|---|---|---|
| 現金への残高返金可能性 | 商品ごとに異なり制限される。Edy / nanaco / WAON は通常、チャージ済み残高を現金で払い戻さず、交通系商品は別個の払い戻し手続きを公表している | はい — ライセンス対象サービスが引き出し可能残高を提供する場合、事業者は出金を可能にしなければならない |
| ユーザー間移転（送金） | 前払い制度のもとでは一般に許可されない | はい — 資金移動業の定義的な能力 |
| 取引あたりの限度 | ライセンスで特定されない（発行者ポリシーにより異なる） | ライセンスタイプ（第 1 / 2 / 3種）により段階的に上限あり |
| ユーザー資金保護 | 発行保証金 50% 供託 | 完全分別 + 信託または保証 |
| 例 | Suica、WAON、nanaco、Edy、PASMO、ICOCA 等 | Merpay、PayPay、楽天 Pay（ユーザー間移転をサポートする場合）、LINE Pay、Kyash |

その線はますます曖昧になっている — PayPay や Merpay のような製品は**複数のライセンススタックを同時に**運用する（基本ウォレットには前払い、移転機能には資金移動業、機能ごとに適切なライセンスを有効化）。一部の前払いブランドの製品は、移転機能を可能にするために静かに資金移動業の基盤へと移行しつつある。資金移動サイドについては [[payments/funds-transfer-service-providers-japan-index|資金移動 service providers JP index]] を参照されたい。

## Mobile FeliCa 経済圏の進化

Mobile FeliCa の展開パターンは、どの前払いブランドがモバイルファースト利用を支配したかを形作った。以下の日付行は、公式なネイティブ商品の開始と、隣接するウォレット・定期券経路を区別する。^[Apple Japan Suica 発表: https://www.apple.com/jp/newsroom/2016/09/apple-pay-coming-to-japan-with-iphone-7/; 楽天 Edy Google ウォレット案内: https://edy.rakuten.co.jp/howto/google/pay/; PASMO 沿革: https://www.pasmo.co.jp/corporate/history/; Seven & i nanaco Apple Pay 発表: https://www.7andi.com/company/news/release/20489.html; AEON WAON Apple Pay 発表: https://www.aeon.info/news/release_33536/; JR 西日本 ICOCA 発表: https://www.westjr.co.jp/press/article/2023/06/page_22773.html; JR 北海道 / JR 東日本モバイル計画: https://www.jrhokkaido.co.jp/CM/Info/press/pdf/20250709_KO_KitacaSuica.pdf]

| 年 | 事象 | 影響 |
|---|---|---|
| 2001 | Suica 物理カードローンチ | FeliCa-on-transit の先例を設定 |
| 2004 | NTT ドコモ / FeliCa ネットワークスによる Mobile FeliCa ローンチ | 日本のモバイル決済を FeliCa 標準にロック |
| 2006-01 | Mobile Suica Android（FOMA おサイフケータイ） | 最初のモバイル交通前払い |
| 2007-04 | nanaco + WAON ローンチ | 小売前払い FeliCa 採用 |
| 2010-01 | bitWallet が楽天グループに参画 | e コマース FG が前払いに参入 |
| 2016-10 | Apple Pay 日本版が Suica とともに開始 | iPhone が日本の交通系前払いに参入 |
| 2018 | Edy が対応 Android 端末で Google Pay（後の Google Wallet）経路に対応 | Android ウォレットからの利用経路が拡大 |
| 2020-10 | Apple Pay + Mobile PASMO ローンチ（同時） | 東京の私鉄がモバイルに参入 |
| 2021-10-21 | nanaco と WAON が Apple Pay 対応を開始 | 主要小売前払いブランドが iPhone に参入 |
| 2023-06 | Apple Pay が ICOCA + Mobile ICOCA を追加 | 関西が 7年のラグの後に追いつく |
| 2027年春以降（予定） | Kitaca エリアで Mobile Suica 定期券が利用可能になる | ネイティブの Mobile Kitaca ではなく、Mobile Suica を使うデジタル定期券経路 |

確認済みの時系列は、ネイティブ商品と隣接するウォレット経路を区別する。Edy は Android 中心であり、nanaco と WAON は 2021-10-21 に同時に Apple Pay に入り、JR 北海道が発表した 2027年の経路はネイティブの Mobile Kitaca ではなく Mobile Suica 定期券を使う。

## 加盟店エコノミクスの項目日本の前払い電子マネーの加盟店受容手数料は、発行者-加盟店の交渉に応じて通常 **2-3% の MDR（加盟店 discount rate）** に位置し、フルクレジットカードの MDR（標準レートで 3-4%）より低いが、QR / コード決済の MDR（一般に 1-2%、プロモーション期間には時に 0%）より高い。3段階の MDR 構造は、加盟店が単一の支配的なものを選ぶのではなく複数の決済手段を受け入れる理由の一つである — それぞれの手段が異なる手数料プロファイルに対応する。

前払い発行者にとっての経済的含意は：
- **小売 FG 前払い（nanaco、WAON、Edy）** — 取引が親グループの店舗で発生するとき、加盟店手数料はほとんど親グループ内で内部化されるため、グループ内取引の実効 MDR はアームズレングスの手数料よりも振替価格の取り決めに近い。これがグループ内受容がボリュームを支配する構造的な理由の一つである
- **交通 FG 前払い（Suica、PASMO、ICOCA 等）** — MDR は発行鉄道にとって真の第三者手数料収益であり、これが Suica/PASMO を運賃収受の利用を超えて JR 東日本と PASMO コンソーシアムにとって経済的に魅力的にする項目の一つである
- **クロスブランド相互運用性の手数料配分** — Suica のタップが全国相互利用経由で WAON 受容加盟店で発生するとき、発行者間決済は手数料の一部を Suica の発行者（JR 東日本）に、一部を取得インフラに配分する。手数料配分のルールは参加発行者に対し機密だが、一般に使われている端末インフラのブランドを優遇する

加盟店手数料の次元は、なぜ一部の前払い発行者が加盟店ネットワークを積極的に拡大し続ける（交通 FG）一方で、他が（小売 FG）グループ内統合の深さにフォーカスするかを理解するための重大なコンテキストである。

## ブレッケージの次元

**ブレッケージ** — ロードされたが決して使われない前払い残高の部分 — は前払い発行者にとって重大な利益項目である。正確な数字は発行者間で同一の形式で開示されていないが、構造的なパターンは：

- 小売 FG 前払い（WAON、nanaco、Edy）は、ユーザーがより大きな額をより頻度低くトップアップし、わずかな残余残高がめったに使われないカードに残されるため、**より高いブレッケージ**を持つ傾向がある
- 交通 FG 前払い（Suica、PASMO、ICOCA）は、ユーザーが日々の通勤支出のためにより小さな額をより頻繁にトップアップし、残余残高が一般に数日または数週間以内に消費されるため、**より低いブレッケージ**を持つ傾向がある

ブレッケージは発行者の選択に応じて異なる会計処理のもとで収益として認識される — 一部は半年の締日に統計的な期待支出モデルに基づいて認識し、他は確認された非償還事象（例：返金請求のないカード失効）でのみ認識する。資金決済法は特定のブレッケージ認識方法を義務付けていない。

## インバウンド観光客の UX ギャップマトリクスレベルのブランドはすべて**根本的なインバウンド観光客の UX ギャップ**を共有する：Mobile FeliCa は日本市場向けの携帯（Android おサイフケータイ + Apple Pay 日本 iPhone）でのみ機能し、日本国外で購入された携帯では機能しない。したがってインバウンド観光客は**物理カード製品** — Welcome Suica / Visit Suica（JR 東日本）、PASMO PASSPORT（PASMO 株式会社）、ICOCA & HARUKA バンドル（JR 西日本） — に限られる。これらは通常のカードの期間限定の観光客向けバリアントである。

この UX ギャップは、JR 東日本、JR 九州、南海、その他が FeliCa リーダーの上に重ね始めた **Visa Touch / EMV Contactless オーバーレイ展開**の背後にある構造的なドライバーの一つである — EMV-Contactless カードを持つ国際観光客は、日本市場向けの FeliCa デバイスに変換することなく乗り、買い物ができる。オーバーレイは技術的に付加的（同じリーダーが FeliCa と EMV の両方を処理する）だが、観光客が海外の EMV カードでタップすると前払いフロートを完全にバイパスするため、既存の前払い発行者の収益モデルにとって商業的に破壊的である。より広範な非接触展開の物語については [[payments/cashless-jp-landscape|JP cashless landscape]] を参照されたい。

## 関連

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
- [[payment-firms/rakuten-edy]]
- [[card-issuers/seven-card-service]]
- [[card-issuers/aeon-financial-service]]
- [[regional-banks/seven-bank]]
- [[card-issuers/aeon-bank]]
- [[financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[retail/seven-and-i-hd]]
- [[retail/aeon-group]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁前払いポリシーポータル：https://www.fsa.go.jp/policy/prepaid/
- 金融庁全国の前払式支払手段発行者一覧（登録前払い発行者）：https://www.fsa.go.jp/menkyo/menkyoj/zenshikoukinrishou.pdf
- 金融庁第三者型前払式支払手段発行者登録一覧：https://www.fsa.go.jp/menkyo/menkyoj/zendaisanshakogata.pdf
- 楽天グループコーポレートサイト：https://corp.rakuten.co.jp/
- セブン&アイ・ホールディングスコーポレートサイト：https://www.7andi.com/
- イオングループコーポレートサイト：https://www.aeon.info/
- JR 東日本コーポレートサイト：https://www.jreast.co.jp/
- PASMO 株式会社コーポレートサイト：https://www.pasmo.co.jp/
- JR 西日本コーポレートサイト（JR おでかけ）：https://www.jr-odekake.net/
- JR 北海道コーポレートサイト：https://www.jrhokkaido.co.jp/
- JR 東海コーポレートサイト：https://jr-central.co.jp/
- 名鉄コーポレートサイト：https://www.meitetsu.co.jp/
- 西鉄（西日本鉄道） コーポレートサイト：https://www.nishitetsu.jp/
- JR 九州コーポレートサイト：https://www.jrkyushu.co.jp/
- 日本銀行決済システム政策：https://www.boj.or.jp/
- 前払いフロートと未償還残高に関する各事業者の IR 開示：JR 東日本、JR 西日本、JR 東海、JR 九州（TSE Prime 上場）；楽天グループ、イオン株式会社 / イオンフィナンシャルサービス、セブン&アイ HD（TSE Prime 上場）；非公開事業者（PASMO 株式会社、ニモカ社、MIC、JR 北海道）は規制上の届出による

---
source: loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison
source_hash: 046e45c8844f6138
lang: ja
status: machine
fidelity: ok
title: "JAL マイレージバンク vs ANA マイレージクラブ ― 積算、特典交換、提携ネットワーク、ステータス階層、繰延収益会計"
translated_at: 2026-06-19T06:09:18.088Z
---

# JAL マイレージバンク vs ANA マイレージクラブ ― 積算、特典交換、提携ネットワーク、ステータス階層、繰延収益会計

## Wiki route

この項目は、日本の二大航空ロイヤルティプログラムについての **フリークエント・フライヤー・プログラム（FFP）比較ページ** として [[loyalty/INDEX|loyalty index]] の下に位置する。横断的ロイヤルティ・エコシステムの文脈については [[loyalty/japan-points-landscape|Japan points landscape]] と、共通ポイントプログラムとは大きく異なる IFRS 15 契約負債の取扱いについては [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] と、JAL マイレージバンク ↔ Pontaポイント 間の双方向交換関係については [[loyalty/ponta-points-deep-dive|Ponta points deep dive]] と、航空マイルと相互交換する共通ポイントの同業者については [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]] および [[loyalty/v-point-smbc-ccc-case|V Point case]] と、JAL 側のカード発行および決済インフラのスタックについては [[card-issuers/jal-card|JAL Card]] および [[payment-firms/jal-payment-port|JAL Payment Port]] と、ウォレット隣接の文脈については [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]] と組み合わせて読むこと。

## TL;DR

**JAL マイレージバンク（JMB）** と **ANA マイレージクラブ（AMC）** は、日本の二大航空フリークエント・フライヤー・プログラムである。両者とも IFRS 15 / ASBJ 実務対応報告第 29 号（「重要な権利」枠組みの下での契約負債）に基づく **マイル建ての繰延収益型ロイヤルティプログラム** であり、共通ポイントプログラム（dポイント、Pontaポイント、V Point、PayPay Points、楽天ポイント）とは三つの点で構造的に区別される：① **マイル建ての通貨** で、特典交換は主に航空座席在庫に対して行われる（小売購入価値に対してではない）；② 搭乗実績収益マイル（FOP / PP）の閾値に基づく **ステータス階層のダイナミクス** が、ラウンジ利用、アップグレード優先度、サービス階層を決定する；③ **アライアンス相互運用性**（JAL → ワンワールド、ANA → スターアライアンス）が、航空会社をまたぐマイル積算と特典交換を開く。両プログラムの積算側は、提携クレジットカード（[[card-issuers/jal-card|JAL Card]]、ANA Card シリーズ）、提携加盟店のスキャンキャンペーン、共通ポイントプログラムとの双方向交換を通じて、**非搭乗での獲得** へと大きく拡大している。マイル負債の会計処理は、現金同等のポイントとは大きく異なる ― IFRS 15, の下で、航空会社は特典座席 / 賞品の **独立販売価格** を用いて、付与されたマイルにチケット収益の一部を配分し、その後マイルが特典交換されるか、または失効（breakage）として認識されるにつれて収益を解放する。これは、航空会社のバランスシート上に大規模で持続的な契約負債残高を生む（JAL と ANA 合計で通常は数千億円規模）。

## プログラム規模とアイデンティティ層

| 項目 | JAL マイレージバンク（JMB）| ANA マイレージクラブ（AMC）|
|---|---|---|
| 運営者 | [[card-issuers/jal-card|日本航空 (JAL) ]] | ANA Holdings 全日本空輸 (ANA) |
| アライアンス | **ワンワールド**（創設メンバー）| **スターアライアンス**（創設メンバー）|
| マイル有効期限 | 積算月から 36 か月（従来のデフォルト）| 積算月から 36 か月 |
| ステータス階層指標 | 搭乗実績収益マイルに基づく **FLY ON POINT (FOP)** | 搭乗実績収益マイルに基づく **PREMIUM POINT (PP)** |
| 会員基盤（日本 + グローバル）| 数千万口座（JMB + JGC 合計）| 数千万口座（AMC + SFC 合計）|
| 生涯ステータス相当 | **JAL Global Club (JGC)** ― FOP 閾値を一度満たし JGC 対象の JAL カードを保有することで得られる永続的な認定階層 | **Super Flyers Club (SFC)** ― 同じモデルで、PP 閾値を一度満たし SFC 対象の ANA カードを保有することによる永続的な認定 |
| プレミアムステータス階層 | **JMB Diamond**（最上位の年次資格者；FOP 閾値）| **AMC Diamond**（最上位の年次資格者；PP 閾値）|
| アンカー提携カード発行体 | [[card-issuers/jal-card|JAL Card]]（株式会社JALカード, JAL 100% 子会社）| ANA Card シリーズ ― 提携カード会社（JCB / VISA / Master / AmEx / Diners）が共同ブランドで発行 |
| マイルプログラム運営者 | JAL 内部（別個の運営会社なし）| ANA 内部（別個の運営会社なし）|

**JGC / SFC の永続ステータス機構** は日本の FFP 特有の機能である：会員が単一の暦年で FOP / PP 閾値を満たすと、JAL Global Club または Super Flyers Club のクレジットカードを申し込むことができ（「生涯チケット」パターン）、そのカードを保有し続け年会費を支払う限り、その後の年の搭乗実績にかかわらずサービス階層（Sapphire / Gold 相当）を維持する。これは、日本以外の FFP では同じ規模では存在しない、構造的に大きな「元・搭乗者」ステータス保有者基盤を生み出す。

### 搭乗積算

| キャビン / 運賃 | JMB 積算率 | AMC 積算率 |
|---|---|---|
| ファースト / J クラス / ビジネス（正規プレミアム運賃）| 飛行距離の 100-150% | 飛行距離の 100-150% |
| エコノミー（正規公示運賃）| 飛行距離の 70-100% | 飛行距離の 70-100% |
| 割引エコノミー | 飛行距離の 30-70% | 飛行距離の 30-70% |
| 特典航空券 | 0% | 0% |
| 提携航空会社便（ワンワールド / スターアライアンス）| 提携先ごと、運賃ブッキングクラス依存で変動 | 提携先ごと、運賃ブッキングクラス依存で変動 |

両プログラムは詳細な運賃クラス別の積算率表を公表している。構造的パターンは類似しており（運賃ブッキングクラスが高いほど積算 % が高い）、ステータス保有者にはボーナスがある。

### 非搭乗積算

現在、より大きな量のマイル発行は非搭乗ソースから生じており、主に提携クレジットカードと提携交換によるものである：

| 非搭乗ソース | JMB | AMC |
|---|---|---|
| **提携カード** | [[card-issuers/jal-card|JAL Card]]（JCB / VISA / Master / AmEx / Diners、すべて 5 国際ブランド）| ANA Card シリーズ（JCB / VISA / Master / AmEx / Diners、提携発行）|
| **カード利用積算** | カード階層に応じて標準 0.5-1% マイル/¥；「ショッピングマイル・プレミアム」任意 ¥3,300/年 の追加で 1% へ倍増 | 標準 0.5-1% マイル/¥；「10マイルコース」任意の手数料体系で積算が倍増 |
| **プレミアムカード階層** | JAL Card CLUB-A ゴールド, JAL Card プラチナ, JAL アメリカン・エキスプレス・カード CLUB-A ゴールド | ANA ワイドゴールドカード, ANA カード プレミアム, ANA アメリカン・エキスプレス・プレミアム・カード |
| **共通ポイント双方向交換** | **Pontaポイント ↔ JMB**（2 Pontaポイント → 1 マイル、Pontaポイント→マイル方向の交換比率；[[loyalty/ponta-points-deep-dive|Ponta points deep dive]] 参照）；**dポイント ↔ JMB**（類似の双方向）；歴史的に他の提携先 | **楽天ポイント → AMC**（変動交換）；**Tポイント → AMC**（旧）；**Pontaポイント → AMC**（標準の直接ルートではない）；各種提携ポイント交換 |
| **モール・ショッピングポータル** | 「JAL ショッピングマイル・プログラム」+「JAL Mall」| 「ANA Mall」+「ANAマイレージモール」|
| **ホテル提携積算** | JAL ABC, JAL ホテル, 提携グローバルホテルチェーン（ワンワールド + 非アライアンスのホテル提携先）| ANA インターコンチネンタル, ANA Crowne Plaza, 提携グローバルホテルチェーン |
| **その他** | レンタカー、レストラン、レジャー提携プログラム | レンタカー、レストラン、レジャー提携プログラム |

**最も深い構造的相違** は **共通ポイント双方向交換** 側にある：**JAL マイレージバンクは Pontaポイント と特に強い関係を持つ**（ロイヤリティマーケティング運営、三菱系）。これは JAL が Pontaポイント アライアンスのメンバーであることによって強化されている。**ANA マイレージクラブは 楽天ポイント および歴史的に Tポイント とより強い関係を持つ**。これは異なる商業上の提携交渉を反映している。[[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|2024 Lawson + Mitsubishi take-private]] の下では、JAL ↔ Pontaポイント ↔ ローソン の横断的エコシステムがより一貫した三角形になる。

## マイル特典交換 ― 座席在庫が支配的

両プログラムの支配的な特典交換モードは、航空会社が管理する特典座席在庫に対する **特典航空券** である：

| 特典タイプ | JMB のパターン | AMC のパターン |
|---|---|---|
| **国内往復特典** | シーズン / 路線に応じて約 12,000-20,000 マイル | シーズン / 路線に応じて約 12,000-21,000 マイル |
| **国際エコノミー特典（アジア）** | シーズン / 路線に応じて約 30,000-50,000 マイル | シーズン / 路線に応じて約 30,000-50,000 マイル |
| **国際エコノミー特典（太平洋横断）** | 約 50,000-80,000 マイル | 約 50,000-90,000 マイル |
| **国際ビジネス特典（太平洋横断）** | 約 80,000-150,000 マイル | 約 85,000-165,000 マイル |
| **アップグレード特典** | 利用可能；マイルコストは変動 | 利用可能；マイルコストは変動 |
| **提携航空会社特典（アライアンス）** | ワンワールド提携先（BA, AA, QF, CX, JL, IB 等）| スターアライアンス提携先（UA, LH, SQ, AC, NH, OZ 等）|
| **非搭乗特典交換** | 限定的（電子マネー / 提携商品）| 限定的（電子マネー / 提携商品）|
| **マイル → 電子マネー交換** | **JAL ペイ**（JAL Pay；マイルを JAL Pay 残高に交換し、ePay 経由で還元）| **ANA Pay**（マイルを ANA Pay 残高に交換）|

特典交換経済性の経験則は、国際プレミアムキャビン特典交換で **1 マイルあたり 2-3¥相当の価値**（両プログラムの典型的な「スイートスポット」）であり、ローシーズンの国内エコノミーでは **約 1¥/マイル** である。これは共通ポイントの特典交換価値（約 1¥/ポイント）よりも大幅に高く、これがマイルを共通ポイントや現金に換えるのではなく蓄積する経済的根拠である。

**マイル → 電子マネー交換** ルート（JAL Pay、ANA Pay）は現金的な出口を提供するが、通常はプレミアムキャビン特典交換よりも不利な交換比率である ― 経済的には、主要な特典交換目標というより「ソフトな下限」として機能する。

## ステータス階層のダイナミクス ― FOP / PP と JGC / SFC

| ステータス階層 | JMB（FOP 閾値）| AMC（PP 閾値）| サービス階層相当 |
|---|---|---|---|
| 最上位（Diamond / Premier）| JMB Diamond（約 100,000 FOP）| AMC Diamond（約 100,000 PP）| ファーストクラスラウンジ、すべて最優先 |
| プレミアム（Sapphire）| JMB Sapphire（約 50,000 FOP）| AMC Platinum（約 50,000 PP）| ビジネスクラスラウンジ、ワンワールド Sapphire / スター Gold |
| Crystal / Bronze | JMB Crystal（約 30,000 FOP）| AMC Bronze（約 30,000 PP）| Ruby / Silver 相当 |
| カードによる生涯永続 | **JGC (JAL Global Club)** ― カードを基盤とする Sapphire 相当の認定 | **SFC (Super Flyers Club)** ― カードを基盤とする Platinum 相当の認定 | カードを基盤とすれば永続 |

両プログラムは毎年（暦年ベース）リセットされるが、**JGC / SFC の永続ステータス機構** が最も重要な日本特有の機能である。経済的含意は、**JGC / SFC カード保有者が永続ロイヤルティ会員のロングテールを形成する** ことであり、彼らの繰延マイル負債は搭乗が減っても持続し、彼らのカード利用は航空会社が契約負債に対して積み立てなければならない安定したマイル発行フローを生み出す。

## 繰延収益会計 ― IFRS 15 契約負債

JAL と ANA はいずれも IFRS / J-GAAP 整合基準の下で報告しており、**未交換マイルを IFRS 15 「重要な権利」枠組みの下で契約負債（繰延収益）として扱う**：

| 事象 | 会計処理 |
|---|---|
| **顧客がマイルを獲得するチケットを購入** | チケットサービス義務とマイル付与義務の間で取引価格を、独立販売価格（SSP）を用いて配分する；チケットサービス部分を搭乗完了時に収益として認識；マイル部分を契約負債として認識 |
| **顧客がマイルを獲得するチケット関連付随サービスを購入**（例：有料座席アップグレード）| 同じ処理 ― SSP で取引価格を分割 |
| **顧客が提携カード利用または提携加盟店積算からマイルを獲得** | マイル発行体（JAL / ANA）は購入されたマイルの対価としてカード発行体または提携先から現金を受け取る；受領した現金額で契約負債として認識 |
| **顧客がマイルを特典航空券に交換** | 対応する契約負債を、交換日（または航空会社の認識方針に応じて搭乗時）に認識収益へ解放 |
| **マイルが未交換のまま失効** | 失効（breakage）の仮定に基づき契約負債を解放（通常は過去の交換パターンの統計モデルで推定）；失効は IFRS 15 の下で実際の交換パターンに比例して認識される |

JAL と ANA 双方の **契約負債残高** は、公開 IR 開示に基づき **数千億円規模** である（正確な残高は年ごとに変動し、連結バランスシートの「その他の負債」/「契約負債」項目で開示される）。失効の仮定は毎年見直され、JAL の COVID 期および COVID 後の開示は、パンデミック期の認識方針（マイル有効期限の延長、特別な失効の仮定）が報告収益にどれほど大きな影響を与えたかを示している。

**[[loyalty/d-point-detailed-ecosystem|dポイント]]** との対比は、NTT docomo の契約負債開示が dポイント を電気通信収益の繰延額と統合しているのに対し、**JAL と ANA は明確に識別可能な契約負債項目でマイル負債を開示している**（航空会社にとってマイルが支配的な非搭乗繰延収益義務であるため）点にある。より広い枠組みは [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に記載されている。

## 提携ネットワークの深さ ― アライアンスを超えて

**ワンワールド vs スターアライアンス** の配分が航空会社をまたぐ積算 / 特典交換の表面を決定するが、両プログラムともそのアライアンスを超えて大幅に広い提携ネットワークを構築している：

| 提携カテゴリ | JMB の深さ | AMC の深さ |
|---|---|---|
| **アライアンス航空会社** | ワンワールド（BA, AA, QF, CX, IB, MH, S7, 等）| スターアライアンス（UA, LH, SQ, AC, OZ, EVA, TG 等）|
| **コードシェアのみの提携航空会社（非アライアンス）** | エミレーツ（コードシェア）、各種地域 | TUI 等 |
| **ホテル** | JAL ホテルチェーン + 提携チェーン（ヒルトン、IHG、マリオット、マイル交換経由）| インターコンチネンタル ホテルズ グループ、ヒルトン、マリオット |
| **レンタカー** | ハーツ、エイビス 等 | ハーツ、エイビス 等 |
| **共通ポイント双方向交換** | **Pontaポイント**（アンカー）、dポイント、その他 | **楽天ポイント**（アンカー）、Tポイント（旧）、その他 |
| **提携カード** | [[card-issuers/jal-card|JAL Card]]（5 国際ブランド）| ANA Card シリーズ（提携発行体経由で 5 国際ブランド）|
| **百貨店 / 電子マネー** | JR 東日本 ビューカード（限定）、各種小売 | au PAY（限定）、各種小売 |
| **チャリティ寄付** | JMB チャリティプログラム | AMC チャリティプログラム |

## 競争上のポジショニング

| FFP | アンカー航空会社 | アライアンス | 会員規模 | アンカー共通ポイント提携先 | 提携カード |
|---|---|---|---|---|---|
| **JMB** | JAL | ワンワールド | 数千万 | Pontaポイント | [[card-issuers/jal-card|JAL Card]] |
| **AMC** | ANA | スターアライアンス | 数千万 | 楽天ポイント（アンカー）、過去の Tポイント | ANA Card |
| Skywards（エミレーツ）| エミレーツ | なし（独立）| グローバル | 日本ではなし | EK エミレーツ |
| MileagePlus（UA）| ユナイテッド | スターアライアンス | グローバル | 日本ではなし | UA 提携カード |
| AAdvantage（アメリカン）| AA | ワンワールド | グローバル | 日本ではなし | AA 提携カード |
| BAEC（BA）| BA | ワンワールド | グローバル | 日本ではなし | BA 提携カード |

JMB と AMC が日本以外の FFP に対して持つ構造的な強みは、外国市場では同じ規模で存在しない **日本の共通ポイント双方向交換ネットワーク** である。Pontaポイント と 楽天ポイント は、日本居住の会員にとって非搭乗での獲得の足跡を大幅に拡大する。

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/t-point-v-point-post-2024-merger|T Point + V Point post-2024 merger detail]]
- [[loyalty/jre-point-and-jre-bank-ecosystem|JRE Point + JRE Bank ecosystem]]
- [[loyalty/au-pay-loyalty-ecosystem-deep|au PAY loyalty ecosystem deep]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB / Yahoo / PayPay unified points]]
- [[card-issuers/jal-card|JAL Card]]
- [[payment-firms/jal-payment-port|JAL Payment Port]]
- [[card-issuers/jr-east-financial|JR-East Financial Subsidiaries]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[INDEX|FinWiki index]]

## Sources

- JAL マイレージバンク公式サイト: https://www.jal.co.jp/jp/ja/jalmile/
- JAL マイレージバンク（英語）: https://www.jal.co.jp/jp/en/jmb/
- ANA マイレージクラブ公式サイト: https://www.ana.co.jp/ja/jp/amc/
- ANA マイレージクラブ（英語）: https://www.ana.co.jp/en/us/amc/
- JAL カード公式サイト: https://www.jal.co.jp/jp/ja/jalcard/
- ANA カード公式サイト: https://www.ana.co.jp/ja/jp/amc/anacard/
- JAL インベスター・リレーションズ: https://www.jal.com/ja/investor/
- ANA インベスター・リレーションズ: https://www.ana.co.jp/group/investors/
- ワンワールド アライアンス公式サイト: https://www.oneworld.com/
- スターアライアンス公式サイト: https://www.staralliance.com/

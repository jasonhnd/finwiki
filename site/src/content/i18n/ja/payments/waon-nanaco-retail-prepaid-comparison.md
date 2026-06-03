---
source: payments/waon-nanaco-retail-prepaid-comparison
source_hash: 23c09c2a5fc481f3
lang: ja
status: machine
fidelity: ok
title: "WAON対nanaco: 小売系プリペイド電子マネー比較"
translated_at: 2026-06-03T00:53:08.253Z
---
# WAON対nanaco: 小売系プリペイド電子マネー比較

## ウィキ上の位置づけ

この項目は、[[payments/INDEX|payments index]]配下のAEON対Seven & iの小売系プリペイド比較ページである。FSA登録の第三者型前払式支払手段の視点では[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]]、4類型スキーム比較では[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]と組み合わせる。鉄道を軸にしたピアは[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid scheme economics]]、プラットフォーム非依存のFeliCaプリペイド代替は[[JapanFG/rakuten-edy|Rakuten Edy]]、コンビニ系コード決済の対応物は[[payments/famipay-valucreate-strategy|FamiPay]]と比較する。グループ軸の企業文脈は[[retail/aeon-group|AEON Group]]と[[retail/seven-and-i-hd|Seven & i HD]]、決済運営者のアンカーは[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/aeon-bank|AEON Bank]]、[[JapanFG/seven-card-service|Seven Card Service]]、[[JapanFG/seven-payment-service|Seven Payment Service]]、[[JapanFG/seven-bank|Seven Bank]]である。

## 要約

**WAON**（AEONが運営し、AEONモール／スーパー／コンビニ網を軸にする）と**nanaco**（Seven Card Serviceが運営し、Seven & i GroupのコンビニとIto-Yokadoスーパーを軸にする）は、日本の主要な**小売系プリペイド電子マネー・ブランド**である。どちらもFeliCa（[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|Suica / PASMO / ICOCA]]と同じ技術スタック）で稼働し、どちらもFSAの下で第三者型前払式支払手段として登録され、どちらも親会社の小売グループのロイヤルティプログラム（WAON POINTとnanacoポイント）に深く統合されている。また、どちらもチャージ／ATM利便性のためにグループ銀行（AEON Bank、Seven Bank）と組み合わされている。競争の力学は、オープン加盟店型のコード決済競争ではなく、**グループ小売内のクローズドループ**である。FamiPayに近いが、QRコードではなくFeliCaプリペイドで実行されている。導入済み基盤の粘着性は高いが、コード決済（[[JapanFG/paypay|PayPay]]、[[JapanFG/au-payment|au PAY]]、楽天ペイ、d払い）が限界的な新規ユーザー層を獲得したため、成長は鈍化している。

## 発行体の横並び概観

| 次元 | WAON | nanaco |
|---|---|---|
| ブランド所有者 | AEON Co Ltd | Seven & i Holdings |
| 発行体（FSA登録の第三者型前払式支払手段） | [[JapanFG/aeon-financial-service\|AEON Financial Service]] / WAON運営 | [[JapanFG/seven-card-service\|Seven Card Service]] |
| グループ銀行 | [[JapanFG/aeon-bank\|AEON Bank]] | [[JapanFG/seven-bank\|Seven Bank]] |
| 決済／支払サービス | AEON Financial Service group | [[JapanFG/seven-payment-service\|Seven Payment Service]] |
| 開始年 | 2007 | 2007 |
| 技術 | FeliCa | FeliCa |
| 主な受入アンカー | AEONモール、MaxValu、AEONスーパー、ministopコンビニ | 7-Eleven、Ito-Yokado、Sogo & Seibu、Akachan Honpo、Denny's Japan |
| グループ外加盟店の広がり | AEON外での受入も相応に広い（ドラッグストア、ファストフード、以前のMcDonald'sなど） | Seven外での受入も相応に広い（Tower Records、以前のAEON Cinemaなど） |
| モバイル経路 | Osaifu KeitaiのMobile WAON、Apple Pay上のWAON（一部端末）、AEON PayアプリQR | Osaifu KeitaiのMobile nanaco、nanacoアプリ |
| チャージ上限 | ¥50,000 | ¥50,000 |
| 1取引あたり上限 | 多くのカテゴリで残高上限と同じ | 同じ |
| グループ銀行からのオートチャージ | あり、AEON Bank連携 | あり、Seven Bank連携 |
| グループカードからのオートチャージ | あり、AEON Card | あり、セブンカード・プラス |
| グループポイント通貨 | WAON POINT | nanacoポイント |
| ポイントから残高への交換 | 1 point = WAON残高1 yen | 1 point = nanaco残高1 yen |

## チャージ／資金供給レール比較

小売系プリペイドの経済モデルは、消費者がプリペイド残高へ入金する際に使う資金供給レールに大きく依存する。各レールは発行体にとって異なるコスト／マージン構造を持つ。

| 資金供給レール | WAON対応 | nanaco対応 |
|---|---|---|
| レジでの現金チャージ | あり、AEONグループ全店 | あり、7-Eleven / Ito-Yokado全店 |
| グループATMでの現金チャージ | あり、AEON Bank ATM | あり、Seven Bank ATM |
| グループ銀行からのオートチャージ | あり、AEON Bank | あり、Seven Bank |
| グループカードからのオートチャージ | あり、AEON Card | あり、セブンカード・プラス |
| その他クレジットカードチャージ | 限定的。歴史的にはポイント面でAEON Cardが優先 | 限定的。セブンカード・プラスが優先 |
| 非グループ口座からの銀行振込 | 限定的 | 限定的 |
| モバイルアプリチャージ | Osaifu KeitaiまたはAEON Pay経由 | Osaifu Keitaiまたはnanaco mobile経由 |

グループ銀行とグループカードを強く優先することは意図的である。資金調達コストをグループ内に保ち、外部カード発行会社へのインターチェンジ流出を避け、ポイント付与をグループのロイヤルティ経済内に集中させるためである。PayPay級ウォレットと比べると、資金源ミックスははるかに多様であり、銀行口座からの直接引落と外部カードチャージの双方をかなり大きな割合で含む。

## グループ小売との統合

小売系プリペイドの主要な経済的意義は、単独ウォレットの収益性ではなく、**グループ小売事業における頻度とマージンの押し上げ**である。

### AEON / WAONの統合接点

| 接点 | 統合内容 |
|---|---|
| AEON、MaxValu、AEON Styleスーパー | WAON受入、AEON Card優待価格、WAON POINTの高倍率付与 |
| AEON Mallフードコート／専門店テナント | テナントミックス全体で広範にWAONを受入 |
| Ministopコンビニ | WAON受入、ブランド内統合 |
| Welciaドラッグストア（AEON子会社） | WAON受入 |
| Maxvalu / KASUMI / United Super Markets | グループスーパー各ブランドでWAON受入 |
| AEON Cinema | WAON受入とAEON Card割引 |
| AEON Bank | オートチャージ連携、預金 ↔ WAON交換 |
| AEON Financial Service | AEON Card発行、BNPL／分割、保険クロスセル |
| AEONのお客さま感謝デー（毎月20日・30日の5%割引） | AEON Card／WAON利用に連動 |

### Seven & i / nanacoの統合接点

| 接点 | 統合内容 |
|---|---|
| 7-Eleven Japan | nanaco受入、nanaco ポイント付与 |
| Ito-Yokado | nanaco受入、グループ銀行預金との相互作用 |
| Sogo & Seibu（百貨店） | 百貨店ロイヤルティと組み合わせたnanaco受入 |
| Akachan Honpo（ベビー用品） | ファミリー向けロイヤルティと組み合わせたnanaco受入 |
| Denny's Japan | nanaco受入 |
| Seven Bank | オートチャージ連携、ATM現金チャージ、グループ銀行預金 |
| Seven Bank ATM network | 全国でnanaco対応ATM現金チャージ |
| セブンカード・プラス | nanaco統合チャージ機能を持つ提携カード |
| 7iDエコシステム | nanacoと結びついたSeven & i Groupの統一顧客IDシステム |
| 国税納付（nanacoによる納税） | 7-Elevenレジでnanaco残高を使う納税。歴史的機能 |

**nanaco経由の国税納付**機能は、消費者がクレジットカードでnanacoへチャージし（カードポイントを獲得）、その後7-Elevenレジでnanacoを使って税金を支払うという、複数商品をまたぐ注目すべきユースケースだった。これは、クレジットカードポイントで賄う納税ルートである。Seven Card Serviceは時間の経過とともにこのルールを厳格化した。この機能は、小売系プリペイドの受入が、当初の商品意図と一致しないサイドチャネル最適化を生み得ることを示している。

## Rakuten Edyとの比較

Edy（[[JapanFG/rakuten-edy|Rakuten Edy]]が運営）は、特定小売グループの自社店舗網に**依存しない**最も近いピアである。Edyは2001 に開始され（WAONとnanacoの双方に先行）、プラットフォーム型の加盟店受入戦略を追求した。FeliCaプリペイド受入を希望する加盟店は、Edyリーダーを設置し、Rakuten Edyと契約できる。このため、WAONやnanacoより広い加盟店横断の受入を実現したが、同じグループ小売の経済的アンカーは持たなかった。

| 次元 | WAON | nanaco | Edy |
|---|---|---|---|
| 小売アンカー | AEON group | Seven & i group | なし。オープン加盟店ネットワーク |
| グループ銀行資金供給 | AEON Bank | Seven Bank | Rakuten Bank（RakutenによるEdy取得2009後） |
| グループカード資金供給 | AEON Card | セブンカード・プラス | Rakuten Card（取得後） |
| ポイント通貨 | WAON POINT | nanacoポイント | 楽天ポイント（取得後の統合） |
| モバイル経路 | Osaifu Keitai、AEON Pay | Osaifu Keitai、nanaco mobile | Osaifu Keitai、Edy app、Apple Pay（一部） |
| 加盟店横断受入 | 広いがAEONがアンカー | 広いが7-Elevenがアンカー | 広く、単一アンカーなし |
| コード決済への移行経路 | AEON Pay（QRアプリ。FeliCa WAONとは別） | Seven & i内部のコード決済実験 | 楽天ペイ（別建てのRakuten QRウォレット） |

3つの小売系プリペイドブランドはいずれも、FeliCaを廃止するのではなく、**隣接するQR／コード決済商品**を立ち上げてきた。FeliCaの既存加盟店基盤は捨てるには価値が大きすぎる一方、コード決済の波が限界的な新規ユーザー層を取り込んでいることを認識しているためである。AEON Pay、Seven Pay（一時的。セキュリティ事故後の2019 に終了）、楽天ペイは、この並行戦略を示している。

## 前払式支払手段法制上の取扱い

WAONとnanacoはいずれも、資金決済法上の**第三者型前払式支払手段**として登録されている。交通系プリペイドと同じ義務が適用される。

| 義務 | 詳細 |
|---|---|
| 利用者資金の保全 | 3月末および9月末時点の未使用残高額の50%を保全しなければならない |
| 払戻しは廃止時のみ | 未使用残高は請求に応じて現金払戻しできない。発行業務の廃止時のみ |
| 終了手続 | 廃止する場合、払戻手続は資金決済法上の手続に従う必要がある |
| 利用者間送金なし | 残高をピアツーピアで送ることはできない |
| 有効期限ルール | 発行体規約で定める |

ブレークエージの経済性は存在するが、WAONとnanacoは一回限り利用の旅行者ではなく、安定した支出パターンを持つ国内消費者が主に保有するため、交通系プリペイドほど重要ではない。

## 廃止されたSeven Pay 2019

との比較2019-07 のSeven Pay開始と、セキュリティ事故による急速な撤退は、Seven & iがその後の数年間に新たな独自コード決済商品の投入に非常に慎重だった理由を理解するうえで重要な参照点である。一方で、nanacoのFeliCaプリペイドの系譜は、同グループの主要な独自キャッシュレス接点として残った。Seven Payは、PayPayやその他QRウォレットに対抗するコード決済として構想された。しかし事故により、認証／2FAリセットの根本的な弱点が露呈し、不正なアカウント乗っ取りと残高利用を許した。Seven & iは数カ月で同商品を廃止し、7-Elevenでの第三者ウォレット受入（ユニバーサルQRウォレット受入）とnanacoへの継続投資を軸にキャッシュレス戦略を再構築した。

AEON Payとの対比は示唆的である。AEON Payは、Seven Pay撤退後に、そのセキュリティ失敗モードを観察したうえで投入されたAEONのQRコードウォレットである。AEONはWAONを置き換えるのではなく、WAONへの継続投資と並行してAEON Payを投入し、AEON Payは開始時からより強い認証／端末紐付けを設計した。FamilyMartで保守的な認証設計のもと[[payments/famipay-valucreate-strategy|FamiPay]]が投入されたことにも同じパターンが見られる。

## グループ銀行による資金調達コスト優位

WAONとnanacoにとって、**グループ銀行との結びつき**の経済的重要性は、繰り返し過小評価されがちな点である。消費者がAEON Bank口座からWAONへオートチャージする場合、発行体（AEON Financial Service／WAON運営）にとっての資金調達コストは実質的にゼロである。銀行からウォレットへの流れがAEONグループ内部で完結するためである。比較すると次の通りである。

| 資金供給レール比較 | WAON ex-AEON Bank | WAON ex-external credit card |
|---|---|---|
| 発行体の資金調達コスト | グループ内移転コストのみ | カードMDRのパススルー（例: 約1.5-2.5%） |
| その後の小売支出で保持されるマージン | 小売加盟店手数料の全額 | カード資金調達コストのパススルー分だけ減少 |
| ロイヤルティ統合 | 強い（AEON Card + AEON Bank + WAON POINTの三重連携） | 限定的 |
| 消費者の手数料負担 | ゼロ | ゼロ（コストは発行体側） |

同じ論理は、nanaco / Seven Bank / セブンカード・プラスにも当てはまる。グループ銀行との結びつきは、構造的な資金調達コスト優位である。グループ銀行を持たない純粋なプラットフォーム型コード決済ウォレットは、銀行口座からの直接オートチャージによってこれを再現しなければならない。PayPayはPayPay Bank連携で、楽天ペイはRakuten Bankで、au PAYはau じぶん銀行でこれを実現している。

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/japan-code-payment-competitive-map]]
- [[JapanFG/rakuten-edy]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/aeon-bank]]
- [[JapanFG/seven-card-service]]
- [[JapanFG/seven-payment-service]]
- [[JapanFG/seven-bank]]
- [[JapanFG/paypay]]
- [[retail/aeon-group]]
- [[retail/seven-and-i-hd]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- WAON official site (waon.net).
- AEON Co Ltd: sustainability / cashless explanation pages.
- AEON Bank: official site.
- AEON Financial Service: official site.
- nanaco official site (nanaco-net.jp).
- Seven Card Service: official site.
- Seven Bank: official site.
- FSA: prepaid policy portal; third-party prepaid issuer registry.
- METI: cashless payment policy portal.

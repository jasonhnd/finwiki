---
source: loyalty/japan-points-landscape
source_hash: a7e1c10fb71768c3
lang: ja
status: machine
fidelity: ok
title: "日本のポイント・ロイヤルティ全体像"
translated_at: 2026-06-02T16:33:58.511Z
---
# 日本のポイント・ロイヤルティ全体像

## 要約

日本のポイント経済は、単なる値引き習慣ではなく、**決済流通システム**である。楽天ポイント、Vポイント、dポイント、PayPayポイント、WAON POINT、nanacoポイント、カードポイントは、どのウォレット、カード、銀行、携帯キャリア、小売アプリが最初に開かれるかを決めている。

重要な分岐は次のとおり。

1. **オープンな共通ポイント**。多くの加盟店やアプリを横断して使われる。
2. **小売グループポイント**。店舗エコシステムを深める。
3. **決済アプリポイント**。コード決済の利用頻度を補助する。
4. **クレジットカードポイント**。カード収益を守る。
5. **プリペイド / 電子マネーポイント**。資金決済法境界の近くに位置する。
6. **データマーケティングポイント**。顧客 ID グラフを商業的に価値あるものにする。

## 主要プログラム

| プログラム | スポンサー / エコシステム | 中核的役割 | 金融との隣接性 |
|---|---|---|---|
| Rakuten Point | Rakuten Group | EC + カード + 銀行 + 証券 + モバイルのフライホイール | [[payment-firms/rakuten-fg|Rakuten FG]]、Rakuten Card、Rakuten Bank、Rakuten Securities |
| V Point | T Point + V Point 統合後の CCCMK / SMBC Card 連合 | 共通ポイント + SMBC クレジットカードと Olive への隣接性。[[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] で 2024-04-22 統合の詳細を、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] で失効益 / IFRS 15 処理を参照 | [[megabanks/smfg|SMFG]]、SMBC Card、小売パートナー |
| d Point | NTT docomo | 通信 ID + d払い + d Card + 予定される [[megabanks/ndfg|NDFG]] 金融統合 | NTT docomo finance、d Card、d払い、銀行 / 証券 / 保険ルート |
| PayPay Point | PayPay / SoftBank / LY | コード決済の利用頻度とキャンペーン経済 | [[megabanks/paypay-fg|PayPay FG]]、PayPay Card、PayPay Bank、PayPay Securities |
| WAON POINT | AEON | モール / スーパー / AEON Card / WAON の継続利用 | [[retail/aeon-group|Aeon Group]]、[[card-issuers/aeon-bank|Aeon Bank / AFS]] |
| nanaco point | Seven & i | コンビニ / スーパー / nanaco / Seven Card の継続利用 | [[retail/seven-and-i-hd|Seven & i]]、[[regional-banks/seven-bank|Seven Bank]] |
| Credit card points | JCB、SMBC、MUFG、Saison、AEON、Rakuten、PayPay Card | イシュアのロイヤルティとインターチェンジ防衛レイヤー | [[card-issuers/jcb|JCB]]、[[card-issuers/credit-saison|Credit Saison]] |

## 法務 / 会計境界

すべての「ポイント」が法的に同一だと仮定してはいけない。

| ポイント種別 | 顧客からの見え方 | 法的 / 経済的な問い |
|---|---|---|
| 購入後に付与されるリワードポイント | 「ポイントを獲得した」 | 通常はロイヤルティ負債とマーケティング費用。規約、有効期限、移転可能性、失効率の仮定を確認する。 |
| 現金で購入またはチャージされるポイント | 「価値をチャージした」 | 償還可能性と移転可能性によって、前払式支払手段または資金移動分析に近づく。 |
| 電子マネー残高 | 「WAON / nanaco / 交通系 IC にチャージした」 | 通常のロイヤルティ会計よりも、資金決済法上のプリペイドレイヤーが中心になる。 |
| コード決済キャンペーンポイント | 「キャッシュバックを受けた」 | 多くは販促費 + ウォレットロックイン。法的扱いは、現金同等か用途限定リワードかによって変わる。 |
| カードリワードポイント | 「カード利用でポイントが貯まる」 | イシュア経済、リワード負債、インターチェンジ / 分割払い経済、加盟店キャンペーン負担が絡み合う。 |
| プログラム横断交換 | 「ポイントを交換した」 | 為替に似たレート設定、負債移転、パートナー精算、不正利用対策が重要になる。 |

## 戦略パターン

ポイントが機能するのは、四つのシステムを一つのユーザー行動に圧縮するからである。

1. **決済選択**: ユーザーが PayPay、Rakuten Pay、d払い、AEON Pay、nanaco、クレジットカードのどれを使うかをポイントが決める。
2. **加盟店獲得**: 加盟店は送客、クーポン、キャンペーンにアクセスするためにポイントネットワークに参加する。
3. **金融流通**: ポイントは、グループのカード、銀行口座、証券口座、アプリを持つ理由を作る。
4. **データグラフ**: 購買、位置、決済、キャンペーン反応データが、販売可能なマーケティング基盤になる。

### Rakuten

Rakuten Point は、最も分かりやすいフルエコシステムのループである。買い物でポイントが貯まり、カード利用でポイントが貯まり、ポイントは将来の買い物や携帯料金を補助でき、金融商品が同じアカウントグラフを補強する。このため、[[payment-firms/rakuten-fg|Rakuten FG]] は単なる金融セグメントではなく流通システムとして読むべきである。

### V Point / SMBC

T Point と SMBC V Point の 2024 統合により、SMBC Card と Olive に接続した、より強い共通ポイントレイヤーが生まれた。JapanFG の作業では、V Point は楽天と PayPay に対する最重要の「銀行主導共通ポイント」の対抗軸である。

### d Point / NDFG

d Point は [[megabanks/ndfg|NDFG]] の仮説の中心にある。通信 ID がユーザーを決済、カード、銀行、証券、保険、サブスクリプション束へ誘導できるためである。未解決の問いは、NTT が分かりやすさを失わずに、ポイントを金融スーパーアプリへ変換できるかである。

### WAON / nanaco

WAON と nanaco は、まず小売オペレーティングシステムである。日常の食品スーパー / コンビニ行動を決済と金融に結びつけるが、最も強いユースケースは、汎用アプリ支配ではなく、グループ店舗の利用頻度と店舗固有の経済性である。

## JapanFG での関連性

| JapanFG の問い | ポイントレイヤーからの答え |
|---|---|
| どの金融グループが獲得コストを下げられるか | すでに高頻度のポイントアカウントを持つグループ。 |
| どのリテール銀行が日常利用の足場を持つか | WAON / nanaco と店舗トラフィックを通じた [[card-issuers/aeon-bank|Aeon Bank]] と [[regional-banks/seven-bank|Seven Bank]]。 |
| どの通信金融グループが最良のクロスセル基盤を持つか | d Point + d払い + d Card がきれいに統合されれば [[megabanks/ndfg|NDFG]]。 |
| どの PSP が間接的に恩恵を受けるか | 加盟店が複数決済の受け入れとキャンペーンルーティングを必要とするため、[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] とその他 PSP。 |
| どの法務ページを確認すべきか | ポイントが現金類似または移転可能になる場合は [[financial-licenses/INDEX|legal / financial licenses]]。 |

## 関連項目

- [[loyalty/INDEX|loyalty INDEX]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[retail/aeon-group|Aeon Group]]
- [[retail/seven-and-i-hd|Seven & i]]
- [[megabanks/ndfg|NDFG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[card-issuers/aeon-bank|Aeon Bank / AFS]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[INDEX|FinWiki index]]

## 出典

- Rakuten Point Club 公式ガイダンス。
- V Point 統合に関する CCC / SMBC Card プレスリリース、2024-01-09。
- d Point Club 公式サイト。
- WAON 公式ポイントガイダンス。
- nanaco 公式紹介およびポイントガイダンス。

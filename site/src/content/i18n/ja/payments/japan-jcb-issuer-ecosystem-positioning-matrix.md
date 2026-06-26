---
source: payments/japan-jcb-issuer-ecosystem-positioning-matrix
source_hash: 30c59b4d778c8339
lang: ja
status: machine
fidelity: ok
title: "日本の JCB イシュアー・経済圏・ポジショニングマトリクス"
translated_at: 2026-06-22T07:08:50.155Z
---

# 日本の JCB イシュアー・経済圏・ポジショニングマトリクス

## TL;DR

「JCB」は単一のカード会社ではない — それは **(a) 日本国内のカードブランドかつ国際的な決済ネットワーク**（株式会社ジェーシービー / JCB Co., Ltd.）**と (b) 自らが発行するカードに JCB ブランドを載せる日本のイシュアーの集団** である。このブランドはハイブリッドな 3-party / 4-party の形をとっている：「真正な」JCB カード（JCB 発行・JCB アクワイア）については 3-party ブランドとして機能する一方、パートナー / コブランド / 提携 JCB カード（JCB ブランド・パートナー発行・JCB アクワイアまたはパートナーアクワイア）については内部インターチェンジを伴う 4-party ブランドとして機能する。このマトリクスは、日本における主要な JCB 発行事業者を — 銀行系 FG（[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]）、小売系 FG（[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/epos-card|EPOS Card]]）、信販（[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]）、3-party スタイル（[[payment-firms/diners-club-japan|Diners Club Japan]]）、旅行コブランド（JR ビュー、ANA、JAL）— イシュアーの経済性と JCB のブランド戦略にとって重要な軸に沿って配置する。それは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] の発行者別のコンパニオンであり、[[payments/jcb-three-party-operating-model|JCB three-party operating model]] のイシュアー側のコンパニオンである。

## ウィキ上の位置づけ

これは [[payments/INDEX|payments index]] の配下にあり、JCB 側のクロスイシュアーのリファレンスである。ブランドメカニクスの視点については [[payments/jcb-three-party-operating-model|JCB three-party operating model]] と、役割分離のフレームワークについては [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]] と、イシュアーの行動を駆動する取引あたりの経済性については [[payments/japan-interchange-and-merchant-fee-stack|interchange and 加盟店 fee stack]] と、このエントリが意図的に補完するクロススキームの視点については [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] と、METI 割賦販売法の登録の足跡については [[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]] と、ブランド主体については [[card-issuers/jcb|JCB]] と、海外のレグについては [[payment-firms/jcb-international|JCB International]] と、そしてイシュアーのアンカー [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/epos-card|EPOS Card]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[payment-firms/diners-club-japan|Diners Club Japan]]、[[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]、[[payment-firms/mastercard-japan|Mastercard Japan]] と併せて読むこと。

## このマトリクスが重要な理由

JCB 経済圏は 3 つの一般的な仕方で誤って読まれる。第一に、読者は「ブランドとしての JCB」を「イシュアーとしての株式会社ジェーシービー」と混同する — JCB はブランドネットワークとしても、多くのイシュアーの中の（大きな）ひとつのイシュアーとしても機能するため、両者は同じではない。第二に、読者は日本のすべての JCB ブランドのカードが 3-party であると仮定する — そうではなく、ほとんどのパートナー発行の JCB カードは、パートナーイシュアーと JCB-アクワイアラーとの間のインターチェンジを伴う 4-party の経済形態で動くため、そうではない。第三に、読者は **小売系 FG のイシュアー**（[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/epos-card|EPOS Card]]）を過小評価する。それらは合わせて銀行系 FG のイシュアーの合計よりも多くの JCB ブランドのカードを発行し、[[payments/japan-interchange-and-merchant-fee-stack|interchange disclosure pressure]] のもとで加盟店側の手数料の政治を形作る。このマトリクスは 3 つの読解すべてを表面に押し出す。

### 株式会社ジェーシービー（JCB Co., Ltd.）

株式会社ジェーシービーはブランドオーナー、ネットワーク事業者、**かつ** 日本最大の JCB ブランドの「真正な」カード（JCB オリジナルシリーズ — JCB CARD W、JCB ゴールド、JCB プラチナ、JCB ザ・クラス）の直接イシュアーである。それはまた日本における JCB ブランド加盟店の主要なアクワイアラーでもある。3-party の運営形態は JCB 発行 + JCB アクワイアの取引に適用される；それ以外のすべては 4-party のインターチェンジを通ってルーティングされる。JCB は非上場であり、その 1961  マルチバンクの創業を反映する銀行系 FG の株主（[[card-issuers/jcb|JCB entry]] による [[megabanks/mufg|MUFG]] 側と [[megabanks/smfg|SMFG]] 側）を持つ。グローバルな 5 大ブランド（Visa、Mastercard、Amex、Discover、JCB）の中で唯一の日本の国際カードブランドとして、JCB の戦略的ポジションは、日本のアウトバウンド旅行者のアクセプタンスおよび日本のインバウンド加盟店のブランドプレゼンスに構造的に結びついている。

重要な対比点：JCB はこのマトリクスの他のすべてのエントリと同時に **競合し、かつパートナーになる** — それは [[card-issuers/rakuten-card|Rakuten Card]] / [[card-issuers/smbc-card|SMBC Card]] / [[card-issuers/mufg-nicos|MUFG NICOS]] の真正なカードと直接カードホルダーをめぐって競合する一方、それらと同じイシュアーにパートナー発行の JCB カードのためにブランドをライセンスする。これがマトリクスが表面化させる中心的な 3-party 対 4-party の緊張である。

### MUFG NICOS — JCB 発行ライン

[[card-issuers/mufg-nicos|MUFG NICOS]]（三菱UFJニコス）は [[megabanks/mufg|MUFG]] グループのカード発行子会社であり、UFJ カード、NICOS、DC カード、三菱 UFJ カードの相次ぐ合併を通じて形成された。それは MUFG ブランドの商品（MUFG カード、DC カードライン）と提携先小売店向けのパートナー発行にわたって、Visa / Mastercard と JCB ブランドの両方のカードを発行する。[[megabanks/mufg|MUFG]] 側のイシュアーとして、それは 4-party の JCB 形態に座り、JCB ブランドの取引でスキーム事業者としての JCB にインターチェンジを支払う。MUFG NICOS は METI 登録包括信用購入あっせん業者リストにおける割賦販売法のもとの包括信用購入あっせん業者であり、METI クレジットカード番号等取扱契約締結事業者リストにおける加盟店契約事業者である。

### 三井住友カード — JCB 発行ライン

[[card-issuers/smbc-card|SMBC Card / 三井住友カード]] は [[megabanks/smfg|SMFG]] グループの旗艦カードイシュアーであり、歴史的に日本のリーディング Visa イシュアーとして Visa にアンカーされている。その JCB 発行ラインは Visa のブックに比して小さいが、JCB 専用の加盟店ポケット（日本国内の小規模加盟店ネットワーク、特定の交通 / チケット加盟店との関係）とペアになるように設計されたカードのために存在する。SMBC カードはそれ自体が主要なアクワイアラーでもあり、加盟店のアクセプタンスをめぐって JCB と競合する — これは SMBC カードが JCB と二重の関係を持つことを意味する：JCB ブランドのライセンシー（イシュアー）として、かつ競合するアクワイアラー（加盟店側）として。V ポイント / SMBC ポイントの経済圏は、JCB の Oki Doki ポイントとは独立に [[loyalty/japan-points-landscape|Japan points landscape]] にカードホルダーの経済性を結びつける。

### イオンフィナンシャルサービス — JCB 発行ライン

[[card-issuers/aeon-financial-service|AEON Financial Service / イオン銀行 + イオンクレジットサービス]] は、はるかに大きい Visa / Mastercard イオンカードのブックと並んで JCB ブランドのイオンカード商品を発行する。JCB ラインは、JCB と結びついた小規模加盟店ネットワークでの JCB アクセプタンスを好むカードホルダーをターゲットとする。イオンフィナンシャルサービスの特徴的なポジションは **小売系 FG のアンカー** である — イオンカードは根本的に [[card-issuers/aeon-bank|AEON Bank]] / イオン小売グループのためのロイヤルティメカニズムであり、決済の経済性はカード側のインターチェンジ単独に依存するのではなく、小売ポイントマージン（WAON POINT）によって補助される。小売系 FG のクロスプロダクトのロジックについては [[payments/waon-nanaco-retail-prepaid-comparison|WAON / nanaco retail 前払式 comparison]] と照らし合わせて読むこと。

### 楽天カード — JCB 発行ライン

[[card-issuers/rakuten-card|Rakuten Card]] は日本最大のカードホルダー数のカードイシュアー（37  万人以上の保有者）であり、Visa、Mastercard、JCB、American Express のブランドにわたって発行する。その JCB 発行は、楽天カードの総ブックの小さなシェアであっても絶対値では意味がある。楽天カードの経済エンジンは [[payment-firms/rakuten-fg|Rakuten FG]] のポイントフライホイール（楽天ポイント）であり、これはカードブランドの選択をカードホルダーにとってポイントとキャッシュバックのオファーよりも重要でないものにする。JCB の視点からは、楽天カードは **単一最大の 4-party 形態の JCB イシュアー** であり、楽天発行の JCB カードをめぐる加盟店側の手数料の政治は [[payments/japan-interchange-and-merchant-fee-stack|interchange disclosure]] の議論における重要なデータポイントである。

### クレディセゾン — JCB 発行ライン

[[card-issuers/credit-saison|Credit Saison / クレディセゾン]]（TSE PRIME 8253）は、特徴的な **永久不滅ポイント**（恒久 / 無期限ポイント）プログラムを持つ独立系のマルチブランドカードイシュアー（Visa / Mastercard / JCB / American Express）である。その JCB 発行ラインは Visa / Mastercard のラインに比して小さいが、JCB アクセプタンスを好む加盟店チェーンとのパートナー発行のために存在する。クレディセゾンのもうひとつの次元は **非銀行系 FG の独立性** である — NICOS（MUFG）、SMBC カード（SMFG）、またはイオンフィナンシャルサービス（イオン小売系 FG）と異なり、アクイジションコストを補助する親を持たないため、よりイシュアー側のスプレッドの経済性に大きく依存する。クレディセゾンはまた個別信用購入あっせんの登録を通じた信販でもある。

### エポスカード — JCB 発行ライン

[[card-issuers/epos-card|EPOS Card / エポスカード]] は丸井グループ（丸井グループ）のカード発行部門であり、歴史的に Visa にアンカーされている。その JCB 発行ラインは小さいが、特定のコブランド商品のために存在する。エポスカードの経済的ポジションはイオンカードに似ている — **小売系 FG にアンカーされ**、決済の経済性は丸井の小売マージンと積立 / ファッション小売のポイント経済性によって補助される。エポスにとっての JCB 発行の問いは、Visa のアンカーを考えると JCB ラインを維持する価値がオペレーションコストに見合うかどうかである；それは特に JCB を好むカードホルダーのために持続している。

### オリコ — JCB 発行ライン

[[card-issuers/orico|Orico / オリエントコーポレーション]]（TSE PRIME 8585）はまず信販 / 個別信用購入あっせん業者（国内の自動車ローン第 1  位、[[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit 事業者 comparison matrix]] を参照）であり、二次的にカードイシュアーである。その JCB 発行ラインは、JCB アクセプタンスをオリコの自動車金融 / ショッピングクレジットの顧客ベースとペアにするオリコカード商品をカバーする。オリコの親会社の株主は [[megabanks/mizuho-fg|Mizuho FG]] と伊藤忠であり、NICOS（MUFG）と SMBC カード（SMFG）の銀行系 FG のアンカーとは異なる、みずほに隣接したポジショニングを与えている。信販ファーストのアイデンティティは、オリコの JCB ブックがスタンドアロンのカードアクイジションの経済性よりも、自動車 / ショッピングクレジットの顧客へのクロスセルに関するものであることを意味する。

### JACCS — JCB 発行ライン

[[card-issuers/jaccs|JACCS / ジャックス]]（TSE PRIME 8584）は、[[megabanks/mufg|MUFG]] の持分法株主リンケージを持つマルチラインの信販（自動車ローン、教育ローン、リフォームローン、ショッピングクレジット）である。その JCB 発行ラインは、マルチライセンスの信販モデルのカード商品としての表現である — JCB ブランドの JACCS カードは JACCS の自動車ローンまたはショッピングクレジットのクロスセルとペアにすることができ、信販ビジネスを定義するマルチプロダクトの顧客関係を生み出す。JACCS の銀行系 FG への隣接性（MUFG の持分法）は、純粋な銀行系 FG の NICOS と独立系のクレディセゾンに対して、それを興味深い中間ポジションに置く。

### ダイナースクラブジャパン — JCB と共存する 3-party ブランド

[[payment-firms/diners-club-japan|Diners Club Japan]] はグローバルなダイナースクラブブランドの日本ライセンスであり、現在は三井住友トラストグループのもとで運営されている（かつてシティ所有、その後 2014 頃に SMTH に売却）。ダイナースクラブは古典的な意味での **3-party ブランド** である — イシュアー、アクワイアラー、ブランドが同じである。それは日本市場で「インターチェンジのないプレミアムセグメントのブランド」のピアとして JCB と共存し、歴史的に JCB はダイナース（および American Express、1989  Amex パートナーシップについては [[card-issuers/jcb|JCB]] を参照）とパートナーシップのアレンジを持ってきた。このマトリクスにおけるダイナースクラブの位置は **JCB のハイブリッドなアイデンティティを定義する対比** としてである — ダイナースは純粋な 3-party ブランドであり、JCB は 3-party（真正な）と 4-party（パートナー発行）の両方のモードを持つ。

### JR ビューカード — JCB 発行ライン

JR ビューカード（株式会社ビューカード、100% JR 東日本子会社）は、JR 東日本に付随する交通小売系 FG のカードイシュアーである。その JCB 発行ラインは Visa / Mastercard のラインより小さいが、JCB アクセプタンスをモバイル Suica / Suica オートチャージの機能性とペアにするように設計されたカードのために存在する。カードの経済エンジンは、JR 東日本の鉄道 / 駅小売 / ルミネ小売の消費に結びついた JRE POINT のロイヤルティプログラムであり、イオンカードやエポスカードと形が似ている。JCB の視点からは、JR ビューは、交通プリペイドのアンカー（Suica）が純粋なカードイシュアーには真似できない取引の粘着性を生み出す戦略的パートナーを表す。交通側の文脈については [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|Japan transit 前払式 Suica / PASMO / ICOCA economics]] と照らし合わせて読むこと。

### ANA / JAL JCB コブランド

ANA JCB カードと JAL JCB カードは、JCB と ANA（全日空）/ JAL（日本航空）の間で共同設計されたコブランド商品であり、カード支出を通じたマイレージの積み立てを望む頻繁な旅行者のカードホルダーをターゲットとする。所与の ANA JCB または JAL JCB カードの背後の実際のイシュアーは異なる — 一部は JCB が直接発行し、他は [[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、またはその他のパートナーが JCB ブランドのもとで ANA / JAL のコブランドのオーバーレイ付きで発行する。マイレージ・ロイヤルティのレイヤーは、これらのカードをイシュアー・ロイヤルティのカードとは経済的に区別する：カードホルダーはポイント・キャッシュバックではなくマイレージを買っているため、ポイントによるイシュアーマージンの圧縮は構造的により圧力が少ない。ANA マイレージクラブと JAL マイレージバンクのロイヤルティプログラムは、カードイシュアーのレイヤーの上に座る。

### その他のパートナーイシュアー（概観）

上記の名前のあるイシュアーを超えて、JCB は日本全国の **多くの地域銀行系 FG、信用金庫、パートナー企業のイシュアー** にブランドをライセンスする — 地域銀行の JCB カード、大学 / 同窓会のコブランド JCB カード、専門職団体の JCB カード、各種の小売コブランド JCB ライン。JCB 発行事業者の全集団は METI 登録包括信用購入あっせん業者リスト（[[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]] で参照されるレジストリによれば 2026-04  月末時点での 241  登録）によって境界づけられ、そのうち JCB 発行のサブセットが大多数である。これらのパートナー / 地域イシュアーは個別には小さなブックを持つが、集合的には JCB ブランドのカードストックと加盟店の取引件数の意味あるシェアを構成する。

## 大比較マトリクステーブル

| イシュアー | ブランドの役割 | グループアンカー | 上場 | カードポートフォリオ規模（カードホルダー） | ターゲットセグメント | 主要な経済エンジン | JCB 側の関係 | クロスブランド発行 | 加盟店ネットワークのレバレッジ | 3-party 対 4-party のポジション |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[card-issuers/jcb\|JCB Co.]]** | ブランド + 直接イシュアー + アクワイアラー | マルチバンクコンソーシアム（MUFG / SMFG / SMTB 側） | 非上場 | JCB ブランドのカード ~140 M+ グローバル（パートナー発行含む）；JCB 真正ブック数百万 | プレミアム（ザ・クラス、プラチナ）、マス（CARD W） | ブランドフィー + 3-party MDR（真正） + パートナーからのスキームフィー | 自身 | JCB のみ発行 | 直接 JCB 加盟店ネットワーク + Discover / UnionPay / Amex とのアライアンス | 真正については 3-party、4-party パートナーについてはスキーム事業者 |
| **[[card-issuers/mufg-nicos\|MUFG NICOS]]** | イシュアー | [[megabanks/mufg\|MUFG]] 100% | 非上場（子会社） | Large multi-brand portfolio | マス / 銀行系 FG カードホルダー | イシュアーインターチェンジ + キャッシュアドバンス + リボルビング | ブランドライセンシー；パートナーイシュアー | Visa + Mastercard + JCB | 自社加盟店ブックを含むマルチアクワイアラー | 4-party（JCB インターチェンジを支払う） ^[METI registered-operator lists; JCB brand business-area source] |
| **[[card-issuers/smbc-card\|SMBC Card]]** | イシュアー + アクワイアラー | [[megabanks/smfg\|SMFG]] 100% | 非上場（子会社） | Large Visa-anchored multi-brand portfolio | マス / プレミアム V ポイント経済圏 | イシュアーインターチェンジ + V ポイント経済圏 + アクワイアラー収益 | ブランドライセンシー；パートナーイシュアー；競合アクワイアラー | Visa（アンカー） + Mastercard + JCB | SMBC チャネルを通じた強いアクワイアラーのフットプリント | 4-party（JCB インターチェンジを支払う） ^[METI registered-operator lists; JCB brand business-area source] |
| **[[card-issuers/aeon-financial-service\|AEON Financial Service]]** | イシュアー | イオン小売系 FG | TSE PRIME 8570 | ~30 M カードホルダー | マス / ファミリー / 郊外小売 | 小売ロイヤルティ補助 + カードイシュアースプレッド | ブランドライセンシー；パートナーイシュアー | Visa + Mastercard + JCB | イオン小売の自社アクセプタンス + オープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[card-issuers/rakuten-card\|Rakuten Card]]** | イシュアー | [[payment-firms/rakuten-fg\|Rakuten FG]] | 子会社 | ~37 M+ カードホルダー、日本で保有者数 #1  | マス / 楽天経済圏 | 楽天ポイントフライホイール + カードスプレッド | ブランドライセンシー；パートナーイシュアー；最大の 4-party JCB イシュアー | Visa + Mastercard + JCB + AMEX | 楽天 EC アンカー；外部ではオープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[card-issuers/credit-saison\|Credit Saison]]** | イシュアー + 信販 | 独立系 | TSE PRIME 8253 | 累計 ~36 M 枚発行 | マス / 永久不滅ポイントロイヤルティ | イシュアースプレッド + 永久不滅のリテンション + 信販クロスセル | ブランドライセンシー；パートナーイシュアー | Visa + Mastercard + JCB + AMEX | 丸井隣接 + オープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[card-issuers/epos-card\|EPOS Card]]** | イシュアー | 丸井グループ（8252） | 子会社 | ~7 M+ カードホルダー | マス / 丸井小売 / ファッション | 丸井小売ロイヤルティ補助 + カードスプレッド | ブランドライセンシー（小） | Visa（アンカー） + JCB（小） | 丸井小売の自社アクセプタンス + オープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[card-issuers/orico\|Orico]]** | 信販 + イシュアー | [[megabanks/mizuho-fg\|Mizuho]] + 伊藤忠 | TSE PRIME 8585 | 信販ローンブックに比して小さいカードブック | 自動車 / ショッピングクレジットのクロスセル | 信販ローンスプレッド + カードクロスセル + JCB アクセプタンス | ブランドライセンシー；パートナーイシュアー | Visa + Mastercard + JCB | ディーラーシップ / 加盟店チャネル | 4-party（JCB インターチェンジを支払う） |
| **[[card-issuers/jaccs\|JACCS]]** | 信販 + イシュアー | [[megabanks/mufg\|MUFG]] 持分法 | TSE PRIME 8584 | 信販ブックに比して中規模のカードブック | 自動車 / 教育 / リフォームのクロスセル | マルチラインの信販 + カードクロスセル | ブランドライセンシー；パートナーイシュアー | Visa + Mastercard + JCB | 加盟店（自動車ディーラーシップ、教育）チャネル | 4-party（JCB インターチェンジを支払う） |
| **[[payment-firms/diners-club-japan\|Diners Club Japan]]** | イシュアー + アクワイアラー（3-party） | 三井住友トラスト | 子会社 | 小；プレミアムのみ | プレミアム / 法人 / T&E | 3-party MDR + プレミアム年会費 | ピアブランド（ライセンシーではない）；歴史的アライアンス | ダイナースのみ | プレミアム加盟店フォーカス | 純粋な 3-party（JCB インターチェンジなし） |
| **JR ビューカード / ビューカード** | イシュアー | JR 東日本 100% | 子会社 | 数百万；Suica アンカー | 交通 / ルミネ / JRE POINT | 交通 + 駅小売ロイヤルティ + カードスプレッド | ブランドライセンシー；パートナーイシュアー（小さい JCB シェア） | Visa（アンカー） + JCB + Mastercard | JR 東日本の交通 + ルミネ小売 + モバイル Suica | 4-party（JCB インターチェンジを支払う） |
| **ANA JCB コブランド** | 複数のイシュアーバックエンド上のコブランド | ANA HD + JCB または他のイシュアー | バックエンドに応じて子会社またはライセンシー | Mileage-card portfolio across multiple brands | 頻繁な旅行者 / マイレージ | マイレージ積立 + プレミアムティアの年会費 | ブランドライセンシー；JCB と共同設計のコブランド | ブランドは異なる（ANA は Visa / Mastercard / Amex バージョンも持つ） | ANA 空港 + ANA Sky Web + プレミアム加盟店 | ほとんど 4-party；3-party 形態のための一部 JCB 直接発行 ^[JCB brand business-area source; METI registered-operator lists] |
| **JAL JCB コブランド** | 複数のイシュアーバックエンド上のコブランド | JAL + JCB または他のイシュアー | バックエンドに応じて子会社またはライセンシー | Mileage-card portfolio across multiple brands | 頻繁な旅行者 / マイレージ | マイレージ積立 + プレミアムティアの年会費 | ブランドライセンシー；JCB と共同設計のコブランド | ブランドは異なる（JAL は Visa / Mastercard / Amex バージョンも持つ） | JAL 空港 + プレミアム加盟店 | ほとんど 4-party；一部 JCB 直接発行 ^[JCB brand business-area source; METI registered-operator lists] |

### サイド軸 — ポイント / ロイヤルティ + 3DS / セキュリティ

| イシュアー | 主要ポイント通貨 | ポイントのクロス交換 | EMV 3-DS の準備状況（2025-03  マンデート） | J-CSC ガイドライン遵守 |
|---|---|---|---|---|
| **[[card-issuers/jcb\|JCB Co.]]** | Oki Doki ポイント | JCB パートナーネットワーク内 | ネイティブ（ブランド事業者） | ネイティブ（ブランド事業者） |
| **[[card-issuers/mufg-nicos\|MUFG NICOS]]** | グローバルポイント / MUFG カードポイント | MUFG グループ + 選択的 | あり | あり |
| **[[card-issuers/smbc-card\|SMBC Card]]** | V ポイント（T ポイント 2024 と統合） | V ポイントを通じて強い | あり | あり（重い直接加盟店ブックもカバー） |
| **[[card-issuers/aeon-financial-service\|AEON]]** | WAON POINT | イオン小売 + 選択的 | あり | あり |
| **[[card-issuers/rakuten-card\|Rakuten Card]]** | 楽天ポイント | 楽天経済圏内で強い | あり | あり |
| **[[card-issuers/credit-saison\|Credit Saison]]** | 永久不滅ポイント（無期限） | 選択的パートナー | あり | あり |
| **[[card-issuers/epos-card\|EPOS Card]]** | EPOS POINT | 丸井隣接 | あり | あり |
| **[[card-issuers/orico\|Orico]]** | オリコポイント / 暮らスマイル | 選択的 | あり | あり |
| **[[card-issuers/jaccs\|JACCS]]** | JACCS ポイント | 選択的 | あり | あり |
| **[[payment-firms/diners-club-japan\|Diners]]** | ダイナース報酬（T&E フォーカス） | プレミアム加盟店パートナー | あり（3-party 直接） | あり（3-party 直接） |
| **JR ビュー** | JRE POINT | JR 東日本 + ルミネ + Suica | あり | あり |
| **ANA JCB** | ANA マイレージ | ANA マイレージプログラム | あり（バックエンドイシュアー） | あり（バックエンドイシュアー） |
| **JAL JCB** | JAL マイレージ | JAL マイレージプログラム | あり（バックエンドイシュアー） | あり（バックエンドイシュアー） |

## JCB 内の 3-party 対 4-party の緊張

このマトリクスにおける唯一最も重要な構造的パターンは、**JCB が 3-party と 4-party のスキーム経済性を同時にまたいでいる** ことである — これは Visa / Mastercard（純粋に 4-party）も Amex / ダイナース（純粋に 3-party）も行わない。その帰結：

- **JCB Co. の収益構成について：** 真正な JCB カード（JCB 発行、JCB アクワイア）は、PSP コストを差し引いた完全な 3-party MDR マージンを生み出す。パートナー発行の JCB カードは、スキームフィー + アクワイアラー収益（JCB がアクワイアラーの場合）、または スキームフィーのみ（別のアクワイアラーが加盟店を扱う場合）を生み出す。したがって真正対パートナー発行の取引のミックスが、JCB が金融的なレベルで Amex / ダイナースのブランドのように見えるか、それとも Visa / Mastercard のブランドのように見えるかを決定する。
- **パートナーイシュアーについて：** JCB ブランドのカードを発行する [[card-issuers/rakuten-card|Rakuten Card]] または [[card-issuers/mufg-nicos|MUFG NICOS]] は、各取引でアクワイアラーからインターチェンジを受け取り、Visa / Mastercard のインターチェンジと同じ形である。パートナーイシュアーの視点からは、JCB は 4-party ブランドのように見え、そのイシュアー側のカード経済性は [[payments/japan-interchange-and-merchant-fee-stack|interchange and 加盟店 fee stack]] によって統治される。
- **加盟店について：** アクセプタンスの経済性は、どの JCB カードがタップされるかに応じて異なる。真正な JCB カードのタップは、パートナー発行の JCB カードのタップとは異なる実効加盟店コストでクリアされうる。後者はインターチェンジを通ってルーティングされるが、前者はそうではないためである。
- **規制上の開示について：** METI / JFTC の加盟店手数料の開示圧力（2023-06-01 のリリースについては [[payments/japan-interchange-and-merchant-fee-stack|interchange and 加盟店 fee stack]] を参照）は、この 3-party / 4-party のハイブリッドが公的な配分率の開示へと強制された最初の主要なケースである。なぜなら、その区別は何が「インターチェンジ」対「ブランドマージン」としてカウントされるかにとって重要だからである。

このデュアリティは、JCB が Amex（イシュアー主導の 3-party）や Visa（4-party スキーム事業者）のように「イシュアー主導」または「アクワイアラー主導」のブランドのいずれかとしてきれいに分類できない理由でもある。JCB はカードに応じて両方である。

## クロスイシュアーの競争ダイナミクス

| 次元 | 銀行系 FG イシュアー（NICOS、SMBC カード） | 小売系 FG イシュアー（イオン、楽天、エポス、JR ビュー） | 信販イシュアー（オリコ、JACCS、クレディセゾン） | プレミアム 3-party ブランド（JCB 真正、ダイナース、Amex） |
|---|---|---|---|---|
| **顧客アクイジションチャネル** | 銀行支店 + 銀行オンライン + 法人給与振込バンドル | チェックアウトでの小売ロイヤルティ登録 | 自動車ディーラーシップ / 加盟店のオンボーディング | プレミアムダイレクトマーケティング + 招待 |
| **年会費の構造** | ほとんど無料または低料金のマスカード | ほとんど無料の小売連動カード | ほとんど年会費免除のしきい値付き低料金 | 高い年会費のアンカー |
| **キャッシュアドバンスライン** | 典型的 | 典型的 | 強い（信販ルーツ） | 限定的 / プレミアムのみ |
| **リボルビングクレジット** | 典型的 | 典型的 | 強い（信販ルーツ） | 歴史的にチャージカード構造 |
| **ポイントプログラムの資金供給** | イシュアー資金 | 小売系 FG のクロス補助 | イシュアー資金 | プレミアム加盟店パートナーの拠出 |
| **デフォルトエクスポージャー** | 銀行系 FG クオリティのブック | マス / 郊外顧客のブック | 信販ルーツの高利回り・高デフォルトのブック | プレミアムスクリーニングの低デフォルトのブック |
| **証券化ルート** | SPC 経由のカード債権 ABS | SPC 経由の ABS（楽天カード ABS、イオン ABS） | 重い信販ローン ABS の重複 | 限定的；バランスシート保有 |

## 境界ケース

- **「[[card-issuers/rakuten-card|Rakuten Card]] が発行する JCB ブランドのカードは楽天カードか JCB カードか？」** 両方である。ブランドは JCB（ネットワークルール、ブランドアクセプタンス、スキームフィー）。イシュアーは楽天（カードホルダー関係、信用スクリーニング、請求、債権計上、ポイントプログラム）。楽天（インターチェンジ）と JCB（スキームフィー）の間の加盟店手数料の配分は 4-party ルールに従う。これは JCB 経済圏内で適用される標準的な 4-party 形態である。
- **「JCB Co. はイシュアーかブランドか？」** 両方である。JCB Co. は JCB ブランドのもとで JCB オリジナルシリーズを直接発行する一方、ブランドを他のイシュアーにもライセンスする。オリジナルシリーズは JCB Co. に直接のカードホルダー関係の経済性を与える；ブランドライセンシングは、パートナー発行のボリュームからのスキームフィー収益を与える。
- **「JCB-Amex / JCB-Discover / JCB-UnionPay のアライアンスはどこに位置するか？」** これらは、JCB ブランドのカードが日本国外でパートナーネットワーク上で受け入れられる（およびその逆）ことを可能にする国際的なアクセプタンスのアライアンスである。それらは日本国内の発行構造を変えないが、カードホルダーの海外アクセプタンスのフットプリントを決定する。アライアンスのタイムラインについては [[card-issuers/jcb|JCB entry]] を参照。
- **「ANA JCB または JAL JCB はコブランドカードかブランドカードか？」** 構造的には両方である。ANA / JAL はコブランドのマーク；JCB はネットワークブランド；カードの背後のイシュアーは JCB 直接またはパートナーイシュアー（しばしば [[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、その他）でありうる。カードホルダー契約はすべての関連当事者を名指す。
- **「[[payment-firms/diners-club-japan|Diners Club Japan]] が JCB カードを発行するからこのマトリクスにあるのか？」** いいえ — ダイナースは **対比ブランド** として含まれている。ダイナースは日本のプレミアムカードセグメントで JCB と共存するが JCB ブランドのカードを発行しない 3-party ブランドである。それは JCB のハイブリッドモデルの隣で純粋な 3-party モデルがどのように見えるかを示すためにマトリクスにある。
- **「このマトリクスは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] とどう関係するか？」** あのマトリクスはスキームクラスのレベルでカード対コード対 A2A 対プリペイドをカバーする。このマトリクスは、ひとつの特定のブランド（JCB）について **カード** クラスをイシュアーの次元に沿って分解する。JCB の市場ポジションを読むには両方の視点が必要である。
- **「なぜ [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]] と [[payment-firms/mastercard-japan|Mastercard Japan]] は関連セクションにあるがマトリクスにはないのか？」** マトリクスのスコープが JCB 発行事業者だからである。Visa と Mastercard はネットワークレベルで JCB と競合するブランド事業者だが、JCB イシュアーではない。それらの位置は 4-party のカードランドスケープを読むためのアップストリームのフレームワークである。

## 最近の規制圧力

| 日付 | ソース | 何が変わったか |
|---|---|---|
| 2010-06 | FSA / METI | 改正貸金業法が完全に施行；カードのキャッシュアドバンス（キャッシング）ラインが今や 20% 金利上限 + 1/3  総量規制の対象に。JCB 発行事業者のカードイシュアー側がキャッシュアドバンスの経済性を再形成 |
| 2018 | METI | 改正割賦販売法が、JCB のパートナーイシュアーのアクワイアリングレーンを含むカードアクワイアラーの加盟店調査義務を強化 |
| 2020  改正 | METI | 改正割賦販売法が認定包括信用購入あっせん / 少額包括信用購入あっせんのフレームワークを導入 — JCB 発行カード事業者のパートナー BNPL 拡張に影響 |
| 2022-04-08 | JFTC | クレジットカード加盟店手数料報告 — 規模ベースの手数料分散を文書化；より大きなインターチェンジの透明性を求め、それは JCB のパートナーイシュアーのインターチェンジ開示に直接影響する |
| 2023-06-01 | METI + JFTC | JCB がカード加盟店手数料のイシュアーとアクワイアラー間の配分率を開示 — 日本でこれを公表した最初の主要ブランドであり、パートナーイシュアーの開示の前例を設定した |
| 2024 | METI / CAA | BNPL 明確化ラウンド；BNPL スタイルの機能（PayPay カード経由の PayPay あと払い等）を拡張する JCB パートナーイシュアーに関連 |
| 2025-03 | METI / J-CSC | J-CSC ガイドライン 6.0  のもとで EC カード決済に EMV 3-DS が必須 — すべての JCB 発行事業者（真正およびパートナー）にとっての完全な遵守の負担 |
| 継続中 | JFTC | 加盟店手数料の不透明性、特に 3-party（真正 JCB）の加盟店経済性に関連する単一アクワイアラーのプライシングパワーへの定期的な調査 |

## 他のマトリクスとの JCB 経済圏のクロスリファレンス

このマトリクスは他の FinWiki マトリクスエントリを特定の仕方で補完する：

- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：あのマトリクスはスキームクラスのレベルでカード対コード対 A2A 対プリペイドをカバーする。このマトリクスは、ひとつの特定のブランド（JCB）についてカードクラスをイシュアーの次元に沿って分解する。読者は、JCB が PayPay / d払い（コード）および Suica / WAON（プリペイド）に対してどこに座るかの完全な像のために両方を参照すべきである。
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]]**：あのエントリは役割分離のフレームワーク（イシュアー、ブランド、アクワイアラー、PSP、加盟店）を確立する。このマトリクスは、特に JCB ブランドのカードについてイシュアーの列を満たす。JCB 内の 3-party / 4-party の緊張は、まさに役割分離のフレームワークが崩壊し（3-party：イシュアー = アクワイアラー = ブランド）、再び現れる（4-party：イシュアー ≠ アクワイアラー、ブランドは独立して機能する）ケースである。
- vs **[[payments/japan-interchange-and-merchant-fee-stack|interchange and 加盟店 fee stack]]**：あのエントリは取引あたりの手数料の経済性をカバーする。このマトリクスは、4-party 形態のパートナー JCB 取引で誰がインターチェンジを支払う / 受け取るかのイシュアー別の視点を与える。JFTC 2022  報告と METI / JFTC 2023-06-01 開示リリースはこの交点に座る。
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit 事業者 comparison matrix]]**：あのマトリクスは消費者信用事業者を 9 つのカテゴリ（カード / 消費者金融 / 信販 / BNPL / 自動車 / 住宅 / 教育 / マイクロクレジット / PSP 隣接）にわたって分類する。このマトリクスは、特に JCB 発行事業者についてカードカテゴリへのサブカテゴリのズームである — 信販側の JCB イシュアー（オリコ、JACCS）とカードイシュアー側の JCB イシュアー（NICOS、SMBC カード、楽天カード、イオンフィナンシャルサービス）が両方のサーフェスに現れる。
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]]**：あのエントリは METI 登録包括信用購入あっせん業者（および個別）の登録のレジストリの足跡のサーフェスである。このマトリクスは、そのレジストリから特定の JCB 発行事業者を名指し、ブランド関係、グループアンカー、経済エンジンの軸に沿ってそれらを配列する。

## 銀行系 FG 対小売系 FG 対信販系 FG 対独立系 — イシュアーシェアのレンズマトリクスの有用な追加の読解は、JCB 発行事業者の **親 FG** によるものである。なぜなら親 FG が、イシュアーに利用可能な資金コスト、ポイントプログラムの補助の仕組み、加盟店アクイジションチャネルを決定するからである：

| 親 FG のタイプ | JCB 発行事業者 | 合算の概算カードホルダーフットプリント | 特徴的な経済エンジン |
|---|---|---|---|
| **銀行系 FG** | [[card-issuers/mufg-nicos\|MUFG NICOS]]（[[megabanks/mufg\|MUFG]]）、[[card-issuers/smbc-card\|SMBC Card]]（[[megabanks/smfg\|SMFG]]） | 数千万枚のカード（全ブランドにわたって；JCB シェアはサブセット） | 銀行系 FG の資金コスト + 銀行チャネルのカードホルダーアクイジション |
| **小売系 FG** | [[card-issuers/aeon-financial-service\|AEON Financial Service]]（イオン）、[[card-issuers/rakuten-card\|Rakuten Card]]（[[payment-firms/rakuten-fg\|Rakuten FG]]）、[[card-issuers/epos-card\|EPOS Card]]（丸井）、JR ビュー（JR 東日本） | 数千万枚のカード（楽天カード単独で ~37 M）；JCB シェアは意味あるマイノリティ | 小売ロイヤルティ補助 + 経済圏クロスセル + ポイントフライホイール |
| **信販系 FG** | [[card-issuers/orico\|Orico]]（[[megabanks/mizuho-fg\|Mizuho]] + 伊藤忠）、[[card-issuers/jaccs\|JACCS]]（[[megabanks/mufg\|MUFG]] 持分法）、[[card-issuers/credit-saison\|Credit Saison]]（独立系） | 全ブランドにわたって数千万枚のカード；カードは信販ローン / キャッシュローンの中のひとつの商品 | マルチラインの信販 + カードクロスセル + 加盟店チャネル |
| **3-party プレミアムブランド** | [[card-issuers/jcb\|JCB Co.]]（真正）、[[payment-firms/diners-club-japan\|Diners Club Japan]]（3-party ピア） | 数百万枚の真正 JCB + より小さいプレミアムダイナースブック | 3-party MDR + プレミアム年会費 + T&E 加盟店関係 |
| **コブランド / マイレージ** | ANA JCB コブランド、JAL JCB コブランド | 全ブランドにわたって数百万枚の ANA + JAL カード | マイレージ積立 + プレミアムティアの年会費 + 航空会社側のロイヤルティ |

JCB ブランドの競争ポジションをスキャンする読者は、イシュアー名で止まるべきではない；親 FG のタイプが、イシュアーが引けるどの経済レバー（例えば、小売系 FG のカードは銀行系 FG のカードが真似できない小売マージンからのポイントバックを補助できる）を予測し、JCB-the-brand が展開できる加盟店交渉を形作る。

## JCB の国際的なフットプリントとブランド戦略のレンズ

このマトリクスは日本のイシュアー経済圏にフォーカスするが、日本における JCB のブランド戦略の選択は [[payment-firms/jcb-international|JCB International]] を通じてその国際的なフットプリントに緊密に結合されている。日本で発行された JCB ブランドのカードは、JCB の加盟店ネットワークに加えてパートナーアライアンスのネットワーク（北米の Discover、中国の UnionPay、選択された国の American Express — 1989  Amex パートナーシップと 2006  UnionPay パートナーシップについては [[card-issuers/jcb|JCB]] エントリを参照）を通じて国際的に受け入れられる。JCB ジャパン戦略にとっての構造的な問いは、国内発行のスケールを保ちながら国際的なアクセプタンスを延ばし続ける方法である — パートナーイシュアーのモデル（4-party 形態）は国内でより多くのスケールを与え、真正カードのモデル（3-party 形態）はカードホルダーあたりより多くの収益を与える。所与の任意の商品ラインについてのこれらの間の選択が、上記のマトリクスのエントリを形作る。

## 国際ブランドに対する JCB 側の競争ポジショニング日本国内で、JCB はカードホルダーシェアと加盟店アクセプタンスの両方をめぐって、国際的な 4-party ブランド（[[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]] と [[payment-firms/mastercard-japan|Mastercard Japan]]）および 3-party プレミアムブランド（[[payment-firms/diners-club-japan|Diners Club Japan]] と American Express Japan）と競合する。それぞれの競争サーフェスは構造的に異なる：

- **vs Visa / Mastercard（4-party）**：JCB のパートナー発行は Visa / Mastercard のパートナー発行と真っ向から競合する — [[card-issuers/rakuten-card|Rakuten Card]] のカードホルダーは類似のカードホルダー経済性を持つ Visa、Mastercard、または JCB ブランドの楽天カードを携帯しうるが、主に海外アクセプタンスのフットプリントと日本での JCB と結びついた加盟店プロモーションによって差別化される。JCB の優位はその国内加盟店ネットワークとブランドアフィニティ；その不利は Visa / Mastercard に対する海外アクセプタンスの広さである。
- **vs ダイナースクラブ / American Express（3-party）**：JCB の真正カードライン（JCB オリジナルシリーズ、ザ・クラス、プラチナ）は、年会費 + 特典 + トラベルパークのパッケージでダイナースおよび Amex とプレミアム / T&E セグメントで競合する。これは JCB が純粋な 3-party ブランドとして機能するレーンであり、経済性はダイナース / Amex に近く整合する。
- **vs 国内の 4-party 直接競合**：カードホルダーが銀行系 FG の関係にアンカーされている銀行系 FG のカードホルダー（[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]）については、ブランドの選択はイシュアー FG の主要ブランドアライメントによって決定される（NICOS は MUFG カードラインに傾く；SMBC カードは Visa に傾く）。これらの銀行系 FG チャネルを通じた JCB のパートナー発行は存在するが、それらのより広いブランドミックスのサブセットである。

ハイブリッドな 3-party / 4-party のアイデンティティは **優位かつ摩擦の両方** である：優位なのは JCB が両方の経済モデルにわたって収益を捉えられるから；摩擦なのはカードホルダーと加盟店が JCB を一貫していないものとして経験するから（同じブランド、カードに応じて異なる手数料メカニクス）。

## 加盟店側でマトリクスを読む

任意のイシュアー側のマトリクスの裏側は、加盟店が JCB を受け入れるときに何を経験するかである。加盟店の視点から：

| 加盟店の問い | マトリクスが支える答え |
|---|---|
| 私の POS で最も一般的に提示されるのはどのイシュアーの JCB カードか？ | 地理 + 顧客のデモグラフィックに依存する。郊外のイオンにアンカーされたエリアではより多くの [[card-issuers/aeon-financial-service\|AEON]] JCB；楽天にエンゲージしたデモグラフィックではより多くの [[card-issuers/rakuten-card\|Rakuten Card]] JCB；銀行系 FG のカードホルダーではより多くの [[card-issuers/mufg-nicos\|NICOS]] / [[card-issuers/smbc-card\|SMBC Card]] JCB。 |
| 提示される JCB カード間で加盟店手数料はどう異なるか？ | アクワイアラー契約あたりの名目 MDR は同じだが、イシュアー（インターチェンジ）と JCB（スキームフィー）の間の配分は異なる；JFTC + METI 2023-06-01 開示リリースがこの配分を JCB について公開した。 |
| 真正な JCB カードはパートナー発行の JCB カードより私にとって高いか安いか？ | 構造的に真正な JCB の取引にはインターチェンジがない（3-party）ため、ブランドがより多くのマージンを保つ；パートナー発行の JCB にはインターチェンジがある（4-party）。これが加盟店 MDR の差に変換されるかどうかはアクワイアラー側のプライシングに依存する。 |
| どのチャージバック / ディスピュートのメカニズムが適用されるか？ | JCB ディスピュートルールがすべての JCB ブランドのカードに適用される；パートナー発行の JCB については、ディスピュートは JCB Co. を直接ではなくパートナーイシュアーを通ってルーティングされる。 |
| どの JCB カードがより高い取引あたりの平均額を駆動するか？ | プレミアムセグメントのカード（[[card-issuers/jcb\|JCB]] 真正に加えて信販ルーツの高ティアのカード、[[payment-firms/diners-club-japan\|Diners]] 対比ブランド）がより高い取引あたりを駆動する；小売系 FG のマスカードがより低い取引あたり・より高い頻度を駆動する。 |
| 私の POS でどの JCB と結びついたロイヤルティプログラムがカードホルダーの選択に影響するか？ | Oki Doki ポイント（JCB）、楽天ポイント（[[card-issuers/rakuten-card\|Rakuten Card]]）、WAON POINT（[[card-issuers/aeon-financial-service\|AEON]]）、V ポイント（[[card-issuers/smbc-card\|SMBC Card]]）、JRE POINT（JR ビュー）、マイレージ（ANA / JAL コブランド）。クロス交換の像は [[loyalty/japan-points-landscape\|Japan points landscape]] に座る。 |

## 関連

- [[payments/INDEX]]
- [[payments/jcb-three-party-operating-model]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[card-issuers/jcb]]
- [[payment-firms/jcb-international]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/smbc-card]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/credit-saison]]
- [[card-issuers/epos-card]]
- [[card-issuers/orico]]
- [[card-issuers/jaccs]]
- [[payment-firms/diners-club-japan]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/mastercard-japan]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- JCB：ブランド事業エリア（公開情報） — https://www.global.jcb/ja/about-us/business-area/brand/
- JCB：コーポレートサイト — https://www.jcb.co.jp/
- JCB：会社概要 — https://www.jcb.co.jp/corporate/
- JCB：加盟店規約およびルール — https://www.jcb.co.jp/merchant/regulation/
- METI：登録事業者リストポータル — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI：登録包括信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI：クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- 日本クレジット協会（J-Credit）：https://www.j-credit.or.jp/
- 日本クレジット協会：セキュリティガイドライン文書 — https://www.j-credit.or.jp/security/document/index.html
- キャッシュレス推進協議会（Payments Japan Association）：刊行物 — https://paymentsjapan.or.jp/category/publications/
- FSA：免許 / 登録事業者ポータル — https://www.fsa.go.jp/menkyo/menkyo.html
- イシュアーのコーポレートサイトおよび IR（公開分）：[[card-issuers/aeon-financial-service|AEON Financial Service]]（TSE PRIME 8570）、[[card-issuers/credit-saison|Credit Saison]]（TSE PRIME 8253）、[[card-issuers/orico|Orico]]（TSE PRIME 8585）、[[card-issuers/jaccs|JACCS]]（TSE PRIME 8584）、[[card-issuers/rakuten-card|Rakuten Card]]（楽天グループ連結）

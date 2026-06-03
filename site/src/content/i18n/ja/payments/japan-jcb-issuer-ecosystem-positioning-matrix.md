---
source: payments/japan-jcb-issuer-ecosystem-positioning-matrix
source_hash: ea71aff494d72dcc
lang: ja
status: machine
fidelity: ok
title: "日本の JCB 発行者エコシステム位置づけマトリクス"
translated_at: 2026-06-02T16:33:58.484Z
---
# 日本の JCB 発行者エコシステム位置づけマトリクス

## 要約

「JCB」は単一のカード会社ではありません。**(a) 日本国内のカードブランドかつ国際決済ネットワーク**（株式会社ジェーシービー / JCB Co., Ltd.）であると同時に、**(b) 自社発行カードに JCB ブランドを載せる日本の発行者群** でもあります。このブランドは、3-party / 4-party の混合形態にあります。「プロパー」JCB カード（JCB 発行、JCB アクワイアリング）では 3-party ブランドとして機能し、提携 / 共同ブランド / 提携 JCB カード（JCB ブランド、提携先発行、JCB または提携先アクワイアリング）では内部インターチェンジを伴う 4-party ブランドとして機能します。このマトリクスは、日本の主要な JCB 発行事業者を、発行者の経済性と JCB のブランド戦略に重要な軸に沿って整理します。対象は、銀行 FG（[[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]）、小売 FG（[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/epos-card|EPOS Card]]）、信販（[[JapanFG/orico|Orico]]、[[JapanFG/jaccs|JACCS]]）、3-party 型（[[JapanFG/diners-club-japan|Diners Club Japan]]）、旅行共同ブランド（JR-View、ANA、JAL）です。これは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] の発行者別 companion であり、[[payments/jcb-three-party-operating-model|JCB three-party operating model]] の発行者側 companion です。

## ウィキ上の位置づけ

この項目は、JCB 側の発行者横断リファレンスとして [[payments/INDEX|payments index]] 配下にあります。ブランドメカニクスの見方は [[payments/jcb-three-party-operating-model|JCB three-party operating model]]、役割分離フレームワークは [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]、発行者行動を動かす取引別経済性は [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]]、この項目が意図的に補完するスキーム横断ビューは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、METI 割賦販売法登録の証跡は [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]、ブランド主体は [[JapanFG/jcb|JCB]]、海外側は [[JapanFG/jcb-international|JCB International]]、発行者アンカーは [[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/epos-card|EPOS Card]]、[[JapanFG/orico|Orico]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/diners-club-japan|Diners Club Japan]]、[[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]]、[[JapanFG/mastercard-japan|Mastercard Japan]] とあわせて読んでください。

## このマトリクスが重要な理由

JCB エコシステムは、三つの典型的な読み違いをされます。第一に、読者は「ブランドとしての JCB」と「発行者としての JCB Co., Ltd.」を混同します。両者は同じではありません。JCB はブランドネットワークであると同時に、多数ある発行者のうちの一つ（大手）でもあるためです。第二に、日本の JCB ブランドカードはすべて 3-party だと想定されがちですが、実際にはそうではありません。提携先発行の JCB カードの多くは、提携発行者とアクワイアラーとしての JCB の間にインターチェンジを伴う 4-party の経済形態で動きます。第三に、**小売 FG 発行者**（[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/epos-card|EPOS Card]]）が過小評価されがちです。これらは合計で銀行 FG 発行者を上回る JCB ブランドカードを発行し、[[payments/japan-interchange-and-merchant-fee-stack|interchange disclosure pressure]] の下で加盟店側手数料の政治を形づくっています。このマトリクスは、三つの読み方すべてを表面化させます。

### JCB Co., Ltd.（株式会社ジェーシービー）

JCB Co., Ltd. はブランド所有者、ネットワーク運営者、**かつ** 日本最大の JCB ブランド「プロパー」カード（JCB Original Series — JCB CARD W、JCB ゴールド、JCB プラチナ、JCB ザ・クラス）の直接発行者です。また、日本国内の JCB ブランド加盟店にとって主要なアクワイアラーでもあります。JCB 発行 + JCB アクワイアリング取引には 3-party の運営形態が適用され、それ以外は 4-party インターチェンジを通じて処理されます。JCB は非上場で、銀行 FG 株主（[[JapanFG/mufg|MUFG]] 側と [[JapanFG/smfg|SMFG]] 側、[[JapanFG/jcb|JCB entry]] による）が並び、1961  の複数銀行創業を反映しています。世界五大国際カードブランド（Visa、Mastercard、Amex、Discover、JCB）の中で唯一の日本発国際カードブランドとして、JCB の戦略的位置は、日本人海外渡航者の受入網と訪日加盟店におけるブランド存在感に構造的に結びついています。

重要な対比点は、JCB がこのマトリクスの他のすべての項目と同時に **競争し、提携している** ことです。JCB は [[JapanFG/rakuten-card|Rakuten Card]] / [[JapanFG/smbc-card|SMBC Card]] / [[JapanFG/mufg-nicos|MUFG NICOS]] のプロパーカードと直接カード会員を奪い合う一方、それら同じ発行者に対して提携発行 JCB カード向けにブランドをライセンスします。これが、このマトリクスが浮かび上がらせる中心的な 3-party-vs-4-party の緊張関係です。

### MUFG NICOS — JCB 発行ライン

[[JapanFG/mufg-nicos|MUFG NICOS]]（三菱UFJニコス）は [[JapanFG/mufg|MUFG]] group のカード発行子会社であり、UFJ Card、NICOS、DC Card、Mitsubishi UFJ Card の段階的な合併を経て形成されました。MUFG ブランド商品（MUFG Card、DC Card 系列）と系列小売向け提携発行の双方で、Visa / Mastercard と JCB ブランドカードを発行しています。[[JapanFG/mufg|MUFG]] 側の発行者として、JCB ブランド取引ではスキーム運営者である JCB にインターチェンジを支払う 4-party JCB 形態に位置します。MUFG NICOS は、METI 登録包括信用購入あっせん業者一覧上の割賦販売法に基づく包括信用購入あっせん業者であり、METI クレジットカード番号等取扱契約締結事業者一覧上の加盟店契約事業者でもあります。

### Sumitomo Mitsui Card — JCB 発行ライン

[[JapanFG/smbc-card|SMBC Card / 三井住友カード]] は [[JapanFG/smfg|SMFG]] group の旗艦カード発行者であり、日本の主要 Visa 発行者として歴史的に Visa をアンカーとしてきました。JCB 発行ラインは Visa 残高に比べて小さいものの、JCB だけに強い加盟店領域（日本国内の小規模加盟店ネットワーク、一部交通 / チケット加盟店関係）と組み合わせるカード向けに存在します。SMBC Card は自社でも主要なアクワイアラーであり、加盟店受入で JCB と競争します。つまり SMBC Card は、JCB ブランドライセンシー（発行者）であると同時に、競合アクワイアラー（加盟店側）でもあるという二重関係を JCB と持ちます。V Point / SMBC ポイントエコシステムは、カード会員の経済性を JCB Oki Doki Point から独立して [[loyalty/japan-points-landscape|Japan points landscape]] に結びつけます。

### AEON Financial Service — JCB 発行ライン

[[JapanFG/aeon-financial-service|AEON Financial Service / イオン銀行 + イオンクレジットサービス]] は、より大きな Visa / Mastercard の AEON Card 残高と並行して、JCB ブランドの AEON Card 商品を発行しています。JCB ラインは、JCB と結びついた小規模加盟店ネットワークでの JCB 受入を好むカード会員を対象とします。AEON Financial Service の特徴的な位置づけは **小売 FG アンカー** です。AEON Card は根本的に [[JapanFG/aeon-bank|AEON Bank]] / AEON 小売グループのロイヤルティ機構であり、決済経済性はカード側インターチェンジだけに依存するのではなく、小売ポイントマージン（WAON POINT）によって補助されます。小売 FG の横断商品ロジックは [[payments/waon-nanaco-retail-prepaid-comparison|WAON / nanaco retail prepaid comparison]] とあわせて読んでください。

### Rakuten Card — JCB 発行ライン

[[JapanFG/rakuten-card|Rakuten Card]] はカード会員数で日本最大の発行者（37  百万人超）であり、Visa、Mastercard、JCB、American Express の各ブランドで発行しています。JCB 発行は Rakuten Card 全体の一部であっても、絶対規模では意味があります。Rakuten Card の経済エンジンは [[JapanFG/rakuten-fg|Rakuten FG]] points flywheel（Rakuten Point）であり、カード会員にとってブランド選択はポイントと還元提案ほど重要ではありません。JCB から見ると、Rakuten Card は **最大の単一 4-party 形態 JCB 発行者** であり、Rakuten 発行 JCB カードをめぐる加盟店側手数料の政治は [[payments/japan-interchange-and-merchant-fee-stack|interchange disclosure]] 議論の重要なデータ点です。

### Credit Saison — JCB 発行ライン

[[JapanFG/credit-saison|Credit Saison / クレディセゾン]]（TSE PRIME 8253）は、Visa / Mastercard / JCB / American Express を扱う独立系マルチブランドカード発行者で、特徴的な **永久不滅ポイント**（有効期限のないポイント）プログラムを持ちます。JCB 発行ラインは Visa / Mastercard ラインに比べて小さいものの、JCB 受入を好む加盟店チェーンとの提携発行向けに存在します。Credit Saison のもう一つの側面は **非銀行 FG の独立性** です。NICOS（MUFG）、SMBC Card（SMFG）、AEON Financial Service（AEON 小売 FG）とは異なり、獲得コストを補助する親会社を持たないため、発行者側のスプレッド経済性により強く依存します。Credit Saison は個別信用購入あっせん登録を持つ信販会社でもあります。

### EPOS Card — JCB 発行ライン

[[JapanFG/epos-card|EPOS Card / エポスカード]] は Marui Group（丸井グループ）のカード発行部門で、歴史的には Visa をアンカーとしてきました。JCB 発行ラインは小さいものの、一部の共同ブランド商品向けに存在します。EPOS Card の経済的位置は AEON Card に似ており、**小売 FG アンカー** で、決済経済性は Marui 小売マージンと積立 / ファッション小売ポイントの経済性で補助されます。EPOS にとっての JCB 発行の論点は、Visa アンカーを持つ中で JCB ラインを維持する運営コストに見合うかです。それでも JCB を特に好むカード会員向けに存続しています。

### Orico — JCB 発行ライン

[[JapanFG/orico|Orico / オリエントコーポレーション]]（TSE PRIME 8585）は、まず信販 / 個別信用購入あっせん業者（国内自動車ローン #1 、[[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]] 参照）であり、カード発行者としてはその次に位置します。JCB 発行ラインは、Orico の自動車金融 / ショッピングクレジット顧客基盤に JCB 受入を組み合わせる Orico Card 商品をカバーします。Orico の親株主は [[JapanFG/mizuho-fg|Mizuho FG]] と Itochu であり、NICOS（MUFG）や SMBC Card（SMFG）の銀行 FG アンカーとは異なる Mizuho 隣接の位置づけを持ちます。信販ファーストの性格により、Orico の JCB 残高は単独カード獲得の経済性よりも、自動車 / ショッピングクレジット顧客へのクロスセルに関わります。

### JACCS — JCB 発行ライン

[[JapanFG/jaccs|JACCS / ジャックス]]（TSE PRIME 8584）は、自動車ローン、教育ローン、リフォームローン、ショッピングクレジットを持つ複線型信販会社で、[[JapanFG/mufg|MUFG]] との持分法株主関係があります。JCB 発行ラインは、複数ライセンスを持つ信販モデルのカード商品表現です。JACCS Card に JCB ブランドを載せることで、JACCS の自動車ローンやショッピングクレジットとのクロスセルを組み合わせ、信販事業を定義する複数商品型の顧客関係を生みます。JACCS の銀行 FG 隣接性（MUFG 持分法）は、純粋な銀行 FG の NICOS と独立系 Credit Saison の中間に置きます。

### Diners Club Japan — JCB と併存する 3-party ブランド

[[JapanFG/diners-club-japan|Diners Club Japan]] はグローバル Diners Club ブランドの日本ライセンスであり、現在は Sumitomo Mitsui Trust group の下で運営されています（以前は Citi 保有、その後 2014 頃に SMTH へ売却）。Diners Club は古典的な意味で **3-party ブランド** です。発行者、アクワイアラー、ブランドが同一です。日本市場では、JCB と同じ「インターチェンジのないプレミアムセグメントブランド」の比較対象として併存しており、歴史的に JCB は Diners とも提携関係を持ってきました（American Express については [[JapanFG/jcb|JCB]] の 1989 Amex 提携を参照）。このマトリクスにおける Diners Club の位置づけは、**JCB の混合的アイデンティティを定義する対照軸** です。Diners は純粋な 3-party ブランドであり、JCB は 3-party（プロパー）と 4-party（提携発行）の両モードを持ちます。

### JR-View Card — JCB 発行ライン

JR-View Card（株式会社ビューカード、100% JR East 子会社）は JR East に紐づく交通・小売 FG カード発行者です。JCB 発行ラインは Visa / Mastercard ラインより小さいものの、Mobile Suica / Suica オートチャージ機能と JCB 受入を組み合わせるカード向けに存在します。このカードの経済エンジンは、JR East の鉄道 / 駅小売 / lumine 消費に結びつく JRE POINT ロイヤルティプログラムであり、AEON Card や EPOS Card と形が似ています。JCB から見ると、JR-View は交通前払アンカー（Suica）が純粋なカード発行者にはない取引粘着性を生む戦略的パートナーです。交通側の文脈は [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|Japan transit prepaid Suica / PASMO / ICOCA economics]] とあわせて読んでください。

### ANA / JAL JCB 共同ブランド

ANA JCB Card と JAL JCB Card は、カード利用を通じてマイルを貯めたい頻繁利用者を対象に、JCB と ANA（全日空）/ JAL（日本航空）が共同設計した共同ブランド商品です。個別の ANA JCB または JAL JCB カードの実際の発行者はさまざまで、一部は JCB 直接発行、その他は JCB ブランドに ANA / JAL 共同ブランドを重ね、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/mufg-nicos|MUFG NICOS]]、その他の提携先が発行します。マイレージロイヤルティ層により、これらのカードは発行者ロイヤルティカードとは経済性が異なります。カード会員はポイント還元ではなくマイルを買っているため、ポイントによる発行者マージン圧縮は構造的に小さくなります。ANA Mileage Club と JAL Mileage Bank のロイヤルティプログラムは、カード発行者層の上に位置します。

### その他の提携発行者（概観）

上記の発行者以外にも、JCB は日本全国の **多数の地方銀行 FG、信用金庫、提携企業発行者** にブランドをライセンスしています。地方銀行 JCB カード、大学 / 同窓会共同ブランド JCB カード、職能団体 JCB カード、各種小売共同ブランド JCB ラインなどです。JCB 発行事業者全体は、METI 登録包括信用購入あっせん業者一覧（241  登録、2026-04  月末時点、[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] で参照した登録簿による）で境界づけられ、そのうち JCB 発行サブセットが多数を占めます。これらの提携 / 地域発行者は個別には小規模ですが、合計では JCB ブランドカード残高と加盟店取引件数の意味ある部分を構成します。

## 大型比較マトリクス表

| 発行者 | ブランド上の役割 | グループアンカー | 上場 | カードポートフォリオ規模（会員数） | 対象セグメント | 主要な経済エンジン | JCB 側との関係 | 複数ブランド発行 | 加盟店ネットワークの活用 | 3-party vs 4-party 上の位置 |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[JapanFG/jcb\|JCB Co.]]** | ブランド + 直接発行者 + アクワイアラー | 複数銀行コンソーシアム（MUFG / SMFG / SMTB 側） | 非上場 | 世界で ~140M+ の JCB ブランドカード（提携発行含む）。JCB プロパー残高は数百万 | プレミアム（ザ・クラス、プラチナ）、マス（CARD W） | ブランド手数料 + 3-party MDR（プロパー）+ 提携先からのスキーム手数料 | 自社 | JCB のみ発行 | 直接 JCB 加盟店網 + Discover / UnionPay / Amex との提携 | プロパーでは 3-party、4-party 提携先向けのスキーム運営者 |
| **[[JapanFG/mufg-nicos\|MUFG NICOS]]** | 発行者 | [[JapanFG/mufg\|MUFG]] 100% | 非上場（子会社） | 全ブランド合計で数千万枚 | マス / 銀行 FG カード会員 | 発行者インターチェンジ + キャッシング + リボ | ブランドライセンシー、提携発行者 | Visa + Mastercard + JCB | 自社加盟店残高を含むマルチアクワイアラー | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/smbc-card\|SMBC Card]]** | 発行者 + アクワイアラー | [[JapanFG/smfg\|SMFG]] 100% | 非上場（子会社） | 数千万枚規模。Visa が主導 | マス / プレミアム V Point エコシステム | 発行者インターチェンジ + V Point エコシステム + アクワイアラー収益 | ブランドライセンシー、提携発行者、競合アクワイアラー | Visa（アンカー）+ Mastercard + JCB | SMBC チャネル経由の強いアクワイアラー網 | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/aeon-financial-service\|AEON Financial Service]]** | 発行者 | AEON 小売 FG | TSE PRIME 8570 | ~30M 会員 | マス / ファミリー / 郊外小売 | 小売ロイヤルティ補助 + カード発行者スプレッド | ブランドライセンシー、提携発行者 | Visa + Mastercard + JCB | AEON 小売自社受入 + オープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/rakuten-card\|Rakuten Card]]** | 発行者 | [[JapanFG/rakuten-fg\|Rakuten FG]] | 子会社 | ~37M+ 会員、国内会員数 #1  | マス / Rakuten エコシステム | Rakuten Point flywheel + カードスプレッド | ブランドライセンシー、提携発行者、最大の 4-party JCB 発行者 | Visa + Mastercard + JCB + AMEX | Rakuten EC アンカー、外部はオープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/credit-saison\|Credit Saison]]** | 発行者 + 信販 | 独立系 | TSE PRIME 8253 | 累計発行 ~36M 枚 | マス / 永久不滅ポイントロイヤルティ | 発行者スプレッド + 永久不滅による維持 + 信販クロスセル | ブランドライセンシー、提携発行者 | Visa + Mastercard + JCB + AMEX | Marui 隣接 + オープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/epos-card\|EPOS Card]]** | 発行者 | Marui Group（8252） | 子会社 | ~7M+ 会員 | マス / Marui 小売 / ファッション | Marui 小売ロイヤルティ補助 + カードスプレッド | ブランドライセンシー（小規模） | Visa（アンカー）+ JCB（小規模） | Marui 小売自社受入 + オープンネットワーク | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/orico\|Orico]]** | 信販 + 発行者 | [[JapanFG/mizuho-fg\|Mizuho]] + Itochu | TSE PRIME 8585 | 信販ローン残高に比べカード残高は小さい | 自動車 / ショッピングクレジットのクロスセル | 信販ローンスプレッド + カードクロスセル + JCB 受入 | ブランドライセンシー、提携発行者 | Visa + Mastercard + JCB | ディーラー / 加盟店チャネル | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/jaccs\|JACCS]]** | 信販 + 発行者 | [[JapanFG/mufg\|MUFG]] 持分法 | TSE PRIME 8584 | 信販残高に比べカード残高は中規模 | 自動車 / 教育 / リフォームのクロスセル | 複線型信販 + カードクロスセル | ブランドライセンシー、提携発行者 | Visa + Mastercard + JCB | 加盟店（自動車ディーラー、教育）チャネル | 4-party（JCB インターチェンジを支払う） |
| **[[JapanFG/diners-club-japan\|Diners Club Japan]]** | 発行者 + アクワイアラー（3-party） | Sumitomo Mitsui Trust | 子会社 | 小規模、プレミアム専用 | プレミアム / 法人 / T&E | 3-party MDR + プレミアム年会費 | ピアブランド（ライセンシーではない）、歴史的提携 | Diners のみ | プレミアム加盟店中心 | 純粋な 3-party（JCB インターチェンジなし） |
| **JR-View Card / ビューカード** | 発行者 | JR East 100% | 子会社 | 数百万枚規模、Suica アンカー | 交通 / lumine / JRE POINT | 交通 + 駅小売ロイヤルティ + カードスプレッド | ブランドライセンシー、提携発行者（JCB 比率は小さい） | Visa（アンカー）+ JCB + Mastercard | JR East 交通 + lumine 小売 + Mobile Suica | 4-party（JCB インターチェンジを支払う） |
| **ANA JCB co-brand** | 複数発行者基盤上の共同ブランド | ANA HD + JCB またはその他発行者 | 発行基盤により子会社またはライセンシー | 全ブランド合計で数百万枚の ANA カード | フリークエントフライヤー / マイル | マイル付与 + プレミアム階層年会費 | ブランドライセンシー、JCB と共同ブランド設計 | ブランドは多様（ANA には Visa / Mastercard / Amex 版もある） | ANA 空港 + ANA Sky Web + プレミアム加盟店 | ほとんどは 4-party。一部 JCB 直接発行では 3-party 形態 |
| **JAL JCB co-brand** | 複数発行者基盤上の共同ブランド | JAL + JCB またはその他発行者 | 発行基盤により子会社またはライセンシー | 全ブランド合計で数百万枚の JAL カード | フリークエントフライヤー / マイル | マイル付与 + プレミアム階層年会費 | ブランドライセンシー、JCB と共同ブランド設計 | ブランドは多様（JAL には Visa / Mastercard / Amex 版もある） | JAL 空港 + プレミアム加盟店 | ほとんどは 4-party。一部 JCB 直接発行 |

### 補助軸 — ポイント / ロイヤルティ + 3DS / セキュリティ

| 発行者 | 主要ポイント通貨 | ポイント相互交換 | EMV 3-DS 対応（2025-03  義務化） | J-CSC ガイドライン対応 |
|---|---|---|---|---|
| **[[JapanFG/jcb\|JCB Co.]]** | Oki Doki Point | JCB パートナーネットワーク内 | ネイティブ（ブランド運営者） | ネイティブ（ブランド運営者） |
| **[[JapanFG/mufg-nicos\|MUFG NICOS]]** | グローバルポイント / MUFG card point | MUFG グループ + 選択的 | 対応済み | 対応済み |
| **[[JapanFG/smbc-card\|SMBC Card]]** | V Point（2024 に T Point と統合） | V Point 経由で強い | 対応済み | 対応済み（重い自社加盟店残高も対象） |
| **[[JapanFG/aeon-financial-service\|AEON]]** | WAON POINT | AEON 小売 + 選択的 | 対応済み | 対応済み |
| **[[JapanFG/rakuten-card\|Rakuten Card]]** | Rakuten Point | Rakuten エコシステム内で強い | 対応済み | 対応済み |
| **[[JapanFG/credit-saison\|Credit Saison]]** | 永久不滅ポイント（期限なし） | 選択的パートナー | 対応済み | 対応済み |
| **[[JapanFG/epos-card\|EPOS Card]]** | EPOS POINT | Marui 隣接 | 対応済み | 対応済み |
| **[[JapanFG/orico\|Orico]]** | Orico Point / 暮らスマイル | 選択的 | 対応済み | 対応済み |
| **[[JapanFG/jaccs\|JACCS]]** | JACCS Point | 選択的 | 対応済み | 対応済み |
| **[[JapanFG/diners-club-japan\|Diners]]** | Diners reward（T&E 中心） | プレミアム加盟店パートナー | 対応済み（3-party 直接） | 対応済み（3-party 直接） |
| **JR-View** | JRE POINT | JR East + lumine + Suica | 対応済み | 対応済み |
| **ANA JCB** | ANA mileage | ANA mileage program | 対応済み（発行基盤側） | 対応済み（発行基盤側） |
| **JAL JCB** | JAL mileage | JAL mileage program | 対応済み（発行基盤側） | 対応済み（発行基盤側） |

## JCB 内の 3-party vs 4-party の緊張

このマトリクスで最も重要な構造パターンは、**JCB が 3-party と 4-party のスキーム経済性を同時にまたいでいる** ことです。Visa / Mastercard（純粋な 4-party）にも、Amex / Diners（純粋な 3-party）にもない形です。その帰結は次のとおりです。

- **JCB Co. の収益構成:** プロパー JCB カード（JCB 発行、JCB アクワイアリング）は、PSP コストを差し引いた完全な 3-party MDR マージンを生みます。提携発行 JCB カードは、スキーム手数料 + アクワイアラー収益（JCB がアクワイアラーの場合）、またはスキーム手数料のみ（他のアクワイアラーが加盟店を扱う場合）を生みます。したがって、プロパー取引と提携発行取引の構成比によって、JCB が財務上 Amex / Diners 型に近く見えるか、Visa / Mastercard 型に近く見えるかが決まります。
- **提携発行者にとって:** [[JapanFG/rakuten-card|Rakuten Card]] や [[JapanFG/mufg-nicos|MUFG NICOS]] が JCB ブランドカードを発行する場合、各取引でアクワイアラーからインターチェンジを受け取ります。形は Visa / Mastercard のインターチェンジと同一です。提携発行者から見ると、JCB は 4-party ブランドに見え、発行者側カード経済性は [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] に支配されます。
- **加盟店にとって:** どの JCB カードがタップされたかで受入経済性は異なります。プロパー JCB カードのタップは、提携発行 JCB カードのタップとは異なる実効加盟店コストで清算される可能性があります。後者はインターチェンジを通るためです。
- **規制開示にとって:** METI / JFTC の加盟店手数料開示圧力（[[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] で扱う 2023-06-01 リリース）は、この 3-party / 4-party 混合形態が公的な配分率開示に押し出された最初の主要事例です。「インターチェンジ」と「ブランドマージン」のどちらに当たるかが重要だからです。

この二重性により、JCB は Amex（発行者主導の 3-party）や Visa（4-party スキーム運営者）のように、単純な「発行者主導」または「アクワイアラー主導」ブランドとして分類できません。カードによって JCB は両方になります。

## 発行者横断の競争力学

| 観点 | 銀行 FG 発行者（NICOS、SMBC Card） | 小売 FG 発行者（AEON、Rakuten、EPOS、JR-View） | 信販発行者（Orico、JACCS、Credit Saison） | プレミアム 3-party ブランド（JCB プロパー、Diners、Amex） |
|---|---|---|---|---|
| **顧客獲得チャネル** | 銀行支店 + 銀行オンライン + 給与振込企業バンドル | 小売レジでのロイヤルティ登録 | 自動車ディーラー / 加盟店オンボーディング | プレミアム直接マーケティング + 招待 |
| **年会費構造** | ほぼ無料または低年会費のマスカード | ほぼ無料の小売連動カード | 年会費無料条件付きの低年会費が中心 | 高年会費アンカー |
| **キャッシング枠** | 一般的 | 一般的 | 強い（信販由来） | 限定的 / プレミアム中心 |
| **リボルビング信用** | 一般的 | 一般的 | 強い（信販由来） | 歴史的にはチャージカード構造 |
| **ポイントプログラム原資** | 発行者負担 | 小売 FG による横断補助 | 発行者負担 | プレミアム加盟店パートナーの貢献 |
| **デフォルトエクスポージャー** | 銀行 FG 品質の残高 | マス / 郊外顧客残高 | 信販由来の高利回り・高デフォルト残高 | プレミアム審査済みで低デフォルト |
| **証券化ルート** | SPC 経由のカード債権 ABS | SPC 経由の ABS（Rakuten Card ABS、AEON ABS） | 信販ローン ABS との重なりが大きい | 限定的。バランスシート保有 |

## 境界事例

- **「[[JapanFG/rakuten-card|Rakuten Card]] が発行した JCB ブランドカードは Rakuten カードか JCB カードか」** 両方です。ブランドは JCB（ネットワークルール、ブランド受入、スキーム手数料）です。発行者は Rakuten（カード会員関係、与信審査、請求、債権計上、ポイントプログラム）です。Rakuten（インターチェンジ）と JCB（スキーム手数料）の間の加盟店手数料配分は 4-party ルールに従います。これは JCB エコシステム内で適用される標準的な 4-party 形態です。
- **「JCB Co. は発行者かブランドか」** 両方です。JCB Co. は JCB Original Series を JCB ブランドで直接発行し、同時に他の発行者へブランドをライセンスしています。Original Series は JCB Co. に直接のカード会員関係経済性を与え、ブランドライセンスは提携発行ボリュームからのスキーム手数料収入を与えます。
- **「JCB-Amex / JCB-Discover / JCB-UnionPay 提携はどこに位置づくか」** これらは、日本国外で JCB ブランドカードを提携ネットワーク上で受け入れ可能にする（またその逆も可能にする）国際受入提携です。日本国内の発行構造は変えませんが、カード会員の海外受入フットプリントを決めます。提携タイムラインは [[JapanFG/jcb|JCB entry]] を参照してください。
- **「ANA JCB や JAL JCB は共同ブランドカードかブランドカードか」** 構造的には両方です。ANA / JAL は共同ブランド表示、JCB はネットワークブランドであり、カードの背後にいる発行者は JCB 直接または提携発行者（しばしば [[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/mufg-nicos|MUFG NICOS]]、その他）です。カード会員契約には関連当事者がすべて記載されます。
- **「[[JapanFG/diners-club-japan|Diners Club Japan]] は JCB カードを発行しているからこのマトリクスに入っているのか」** いいえ。Diners は **対照ブランド** として含まれています。Diners は、日本のプレミアムカードセグメントで JCB と併存する 3-party ブランドですが、JCB ブランドカードは発行しません。JCB の混合モデルの隣に、純粋な 3-party モデルがどのようなものかを示すために入れています。
- **「このマトリクスは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] とどう関係するか」** そのマトリクスは、カード vs コード vs A2A vs 前払をスキーム分類レベルで扱います。このマトリクスは、一つの特定ブランド（JCB）について **カード** 分類を発行者軸に分解します。JCB の市場位置を読むには両方の見方が必要です。
- **「なぜ [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] と [[JapanFG/mastercard-japan|Mastercard Japan]] は関連項目にあるがマトリクスにないのか」** マトリクスの範囲は JCB 発行事業者だからです。Visa と Mastercard はネットワークレベルで JCB と競争するブランド運営者ですが、JCB 発行者ではありません。これらの位置づけは、4-party カード市場を読む上流フレームワークです。

## 近年の規制圧力

| 日付 | 出典 | 変更点 |
|---|---|---|
| 2010-06 | FSA / METI | 改正貸金業法が完全施行。カードキャッシング枠は 20% 金利上限 + 1/3  総量規制の対象になった。JCB 発行事業者のカード発行側キャッシング経済性が再形成された |
| 2018 | METI | 改正割賦販売法が、JCB 提携発行者のアクワイアリングレーンを含むカードアクワイアラーの加盟店調査義務を強化 |
| 2020 改正 | METI | 改正割賦販売法が認定包括信用購入あっせん / 少額包括信用購入あっせんの枠組みを導入。JCB 発行事業者による提携 BNPL 拡張に影響 |
| 2022-04-08 | JFTC | クレジットカード加盟店手数料レポート。規模別手数料格差を文書化し、インターチェンジ透明性の向上を求めた。JCB 提携発行者インターチェンジ開示に直接影響 |
| 2023-06-01 | METI + JFTC | JCB がカード加盟店手数料の発行者・アクワイアラー間配分率を開示。日本の主要ブランドとして初めてこれを公表し、提携発行者開示の先例を作った |
| 2024 | METI / CAA | BNPL 明確化ラウンド。BNPL 型機能を拡張する JCB 提携発行者（PayPay あと払い via PayPay Card など）に関係 |
| 2025-03 | METI / J-CSC | EC カード決済の EMV 3-DS が、J-CSC ガイドライン 6.0  の下で義務化。プロパーと提携先を含む全 JCB 発行事業者に完全対応負担 |
| 継続中 | JFTC | 加盟店手数料の不透明性と単一アクワイアラー価格決定力への定期調査。とくに 3-party（プロパー JCB）加盟店経済性に関連 |

## 他のマトリクスとの JCB エコシステム横断参照

このマトリクスは、他の FinWiki マトリクス項目を次の具体的な形で補完します。

- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: そのマトリクスは、カード vs コード vs A2A vs 前払をスキーム分類レベルで扱います。このマトリクスは、一つの特定ブランド（JCB）についてカード分類を発行者軸に分解します。JCB が PayPay / d払い（コード）や Suica / WAON（前払）に対してどこに位置するかを完全に把握するには、両方を参照する必要があります。
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**: その項目は、発行者、ブランド、アクワイアラー、PSP、加盟店の役割分離フレームワークを定義します。このマトリクスは、JCB ブランドカードに特化して発行者列を埋めます。JCB 内の 3-party / 4-party の緊張は、役割分離フレームワークがいったん崩れ（3-party: 発行者 = アクワイアラー = ブランド）、再び現れる（4-party: 発行者 ≠ アクワイアラー、ブランドは独立運営）まさにその事例です。
- vs **[[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]]**: その項目は取引別の手数料経済性を扱います。このマトリクスは、4-party 形態の提携 JCB 取引で誰がインターチェンジを支払い / 受け取るかを発行者別に示します。JFTC 2022  レポートと METI / JFTC 2023-06-01 開示リリースは、この交点に位置します。
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit operator comparison matrix]]**: そのマトリクスは、消費者信用事業者を九つのカテゴリ（カード / 消費者金融 / 信販 / BNPL / 自動車 / 住宅 / 教育 / マイクロクレジット / PSP 隣接）に分類します。このマトリクスは、JCB 発行事業者に特化してカードカテゴリをさらに拡大したものです。信販側 JCB 発行者（Orico、JACCS）とカード発行者側 JCB 発行者（NICOS、SMBC Card、Rakuten Card、AEON Financial Service）は、両方の面に現れます。
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]**: その項目は、METI 登録包括信用購入あっせん業者（および個別）登録の証跡面です。このマトリクスは、その登録簿から具体的な JCB 発行事業者名を挙げ、ブランド関係、グループアンカー、経済エンジンの軸で並べます。

## 銀行 FG vs 小売 FG vs 信販 FG vs 独立系 — 発行者シェアの見方

マトリクスを読む有用な追加方法は、JCB 発行事業者の **親 FG** 別に見ることです。親 FG は、発行者が利用できる資金調達コスト、ポイントプログラム補助の仕組み、加盟店獲得チャネルを決定するためです。

| 親 FG 種別 | JCB 発行事業者 | 合計の概算カード会員フットプリント | 特徴的な経済エンジン |
|---|---|---|---|
| **銀行 FG** | [[JapanFG/mufg-nicos\|MUFG NICOS]]（[[JapanFG/mufg\|MUFG]]）、[[JapanFG/smbc-card\|SMBC Card]]（[[JapanFG/smfg\|SMFG]]） | 全ブランド合計で数千万枚（JCB 比率は一部） | 銀行 FG の資金調達コスト + 銀行チャネルでのカード会員獲得 |
| **小売 FG** | [[JapanFG/aeon-financial-service\|AEON Financial Service]]（AEON）、[[JapanFG/rakuten-card\|Rakuten Card]]（[[JapanFG/rakuten-fg\|Rakuten FG]]）、[[JapanFG/epos-card\|EPOS Card]]（Marui）、JR-View（JR East） | 全ブランド合計で数千万枚（Rakuten Card だけで ~37M）。JCB 比率は意味ある少数派 | 小売ロイヤルティ補助 + エコシステムクロスセル + ポイントフライホイール |
| **信販 FG** | [[JapanFG/orico\|Orico]]（[[JapanFG/mizuho-fg\|Mizuho]] + Itochu）、[[JapanFG/jaccs\|JACCS]]（[[JapanFG/mufg\|MUFG]] 持分法）、[[JapanFG/credit-saison\|Credit Saison]]（独立系） | 全ブランド合計で数千万枚。カードは信販ローン / キャッシングローンの中の一商品 | 複線型信販 + カードクロスセル + 加盟店チャネル |
| **3-party プレミアムブランド** | [[JapanFG/jcb\|JCB Co.]]（プロパー）、[[JapanFG/diners-club-japan\|Diners Club Japan]]（3-party ピア） | 数百万枚のプロパー JCB + より小規模なプレミアム Diners 残高 | 3-party MDR + プレミアム年会費 + T&E 加盟店関係 |
| **共同ブランド / マイレージ** | ANA JCB co-brand、JAL JCB co-brand | 全ブランド合計で数百万枚の ANA + JAL カード | マイル付与 + プレミアム階層年会費 + 航空会社側ロイヤルティ |

JCB ブランドの競争位置を読む読者は、発行者名だけで止まるべきではありません。親 FG 種別は、発行者が使える経済レバーを予測します。たとえば小売 FG カードは、小売マージンからポイント還元を補助でき、銀行 FG カードはそれに合わせにくい場合があります。また、親 FG 種別は JCB ブランド側が展開できる加盟店交渉も形づくります。

## JCB の国際フットプリントとブランド戦略の見方

このマトリクスは日本の発行者エコシステムに焦点を当てていますが、JCB の日本におけるブランド戦略上の選択は、[[JapanFG/jcb-international|JCB International]] を通じて国際フットプリントと強く結びついています。日本で発行された JCB ブランドカードは、JCB 加盟店ネットワークに加え、提携ネットワーク（北米の Discover、中国の UnionPay、一部国の American Express — [[JapanFG/jcb|JCB]] の項目で扱う 1989 Amex 提携と 2006 UnionPay 提携）を通じて海外で受け入れられます。JCB の日本戦略上の構造的な問いは、国内発行規模を維持しつつ国際受入をどう拡張するかです。提携発行モデル（4-party 形態）は国内規模を大きくし、プロパーカードモデル（3-party 形態）はカード会員あたり収益を大きくします。各商品ラインでどちらを選ぶかが、上記マトリクスの項目を形づくります。

## 国際ブランドに対する JCB 側の競争位置

日本国内では、JCB は国際 4-party ブランド（[[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] と [[JapanFG/mastercard-japan|Mastercard Japan]]）および 3-party プレミアムブランド（[[JapanFG/diners-club-japan|Diners Club Japan]] と American Express Japan）と、カード会員シェアと加盟店受入の双方で競争します。それぞれの競争面は構造的に異なります。

- **vs Visa / Mastercard（4-party）**: JCB の提携発行は、Visa / Mastercard の提携発行と正面から競争します。[[JapanFG/rakuten-card|Rakuten Card]] カード会員は、類似したカード会員経済性を持つ Visa、Mastercard、JCB ブランドの Rakuten Card を持ち得ます。差別化要因は主に海外受入フットプリントと日本国内の JCB 連動加盟店プロモーションです。JCB の強みは国内加盟店網とブランド親和性であり、弱みは Visa / Mastercard に対する海外受入の広さです。
- **vs Diners Club / American Express（3-party）**: JCB のプロパーカードライン（JCB Original Series、ザ・クラス、プラチナ）は、プレミアム / T&E セグメントで Diners と Amex と競争します。年会費 + 特典 + 旅行優待パッケージが競争軸です。ここでは JCB は純粋な 3-party ブランドとして機能し、経済性は Diners / Amex とかなり近くなります。
- **vs 国内 4-party 直接競争**: 銀行 FG カード会員（[[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]）の場合、カード会員は銀行 FG 関係にアンカーされており、ブランド選択は発行者 FG の主ブランド方針で決まります。NICOS は MUFG カードラインに寄り、SMBC Card は Visa に寄ります。これら銀行 FG チャネル経由の JCB 提携発行は存在しますが、より広いブランド構成の一部にすぎません。

3-party / 4-party の混合アイデンティティは **強みであると同時に摩擦** でもあります。強みは、JCB が両方の経済モデルから収益を得られることです。摩擦は、同じブランドなのにカードによって手数料メカニクスが異なり、カード会員や加盟店が JCB を一貫しないものとして経験することです。

## 加盟店側からマトリクスを読む

発行者側マトリクスの裏面は、加盟店が JCB 受入時に何を経験するかです。加盟店の観点では次のようになります。

| 加盟店の問い | このマトリクスが支える答え |
|---|---|
| 自分の POS で最もよく提示される JCB カードはどの発行者のものか。 | 地理 + 顧客属性による。郊外の AEON アンカー地域では [[JapanFG/aeon-financial-service\|AEON]] JCB が多く、Rakuten 利用者層では [[JapanFG/rakuten-card\|Rakuten Card]] JCB が多く、銀行 FG カード会員では [[JapanFG/mufg-nicos\|NICOS]] / [[JapanFG/smbc-card\|SMBC Card]] JCB が多い。 |
| 提示される JCB カードごとに加盟店手数料はどう異なるか。 | アクワイアラー契約上の名目 MDR は同じでも、発行者（インターチェンジ）と JCB（スキーム手数料）の配分は異なる。JFTC + METI 2023-06-01 開示リリースは、JCB についてこの配分を公開した。 |
| JCB プロパーカードは提携発行 JCB カードより高いのか低いのか。 | 構造上、プロパー JCB 取引にはインターチェンジがない（3-party）ため、ブランド側がより多くのマージンを保持する。提携発行 JCB にはインターチェンジがある（4-party）。これが加盟店 MDR の違いに反映されるかはアクワイアラー側価格設定による。 |
| どのチャージバック / 紛争処理メカニズムが適用されるか。 | すべての JCB ブランドカードに JCB Dispute ルールが適用される。提携発行 JCB の場合、紛争は JCB Co. 直接ではなく提携発行者を通じて処理される。 |
| どの JCB カードがより高い取引単価を生むか。 | プレミアムセグメントカード（[[JapanFG/jcb\|JCB]] プロパーと信販由来の高階層カード、[[JapanFG/diners-club-japan\|Diners]] 対照ブランド）は高単価になりやすい。小売 FG マスカードは低単価・高頻度になりやすい。 |
| どの JCB 連動ロイヤルティプログラムが POS でのカード会員選択に影響するか。 | Oki Doki Point（JCB）、Rakuten Point（[[JapanFG/rakuten-card\|Rakuten Card]]）、WAON POINT（[[JapanFG/aeon-financial-service\|AEON]]）、V Point（[[JapanFG/smbc-card\|SMBC Card]]）、JRE POINT（JR-View）、マイル（ANA / JAL 共同ブランド）。相互交換の全体像は [[loyalty/japan-points-landscape\|Japan points landscape]] にある。 |

## 関連項目

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
- [[JapanFG/jcb]]
- [[JapanFG/jcb-international]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/smbc-card]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/credit-saison]]
- [[JapanFG/epos-card]]
- [[JapanFG/orico]]
- [[JapanFG/jaccs]]
- [[JapanFG/diners-club-japan]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/mastercard-japan]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- JCB: brand business area（公開情報）— https://www.global.jcb/ja/about-us/business-area/brand/
- JCB: corporate site — https://www.jcb.co.jp/
- JCB: corporate overview — https://www.jcb.co.jp/corporate/
- JCB: merchant regulations and rules — https://www.jcb.co.jp/merchant/regulation/
- METI: registered operator lists portal — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: 登録包括信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI: クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- Japan Credit Association (J-Credit): https://www.j-credit.or.jp/
- Japan Credit Association: security guideline documents — https://www.j-credit.or.jp/security/document/index.html
- Payments Japan Association: publications — https://paymentsjapan.or.jp/category/publications/
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- 発行者の企業サイトおよび IR（公開分）: [[JapanFG/aeon-financial-service|AEON Financial Service]]（TSE PRIME 8570）、[[JapanFG/credit-saison|Credit Saison]]（TSE PRIME 8253）、[[JapanFG/orico|Orico]]（TSE PRIME 8585）、[[JapanFG/jaccs|JACCS]]（TSE PRIME 8584）、[[JapanFG/rakuten-card|Rakuten Card]]（Rakuten Group 連結）

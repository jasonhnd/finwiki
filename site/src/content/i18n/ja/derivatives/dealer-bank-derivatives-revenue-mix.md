---
source: derivatives/dealer-bank-derivatives-revenue-mix
source_hash: b83a2669ce10205a
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ディーラー銀行のデリバティブ収益構成 — 日本のメガバンクと外国 IB"
translated_at: 2026-06-26T08:29:25.266Z
---

# ディーラー銀行のデリバティブ収益構成 — 日本のメガバンクと外国 IB

## 要約日本のディーラー銀行のデリバティブフランチャイズは **三つの構造的な階層** に分かれており、それぞれがレート、為替、エクイティ、クレジットのデリバティブの間で異なる収益構成を持つ:

1. **メガバンクのユニバーサルバンクフランチャイズ — [[megabanks/mufg-bank|MUFG]] / [[megabanks/sumitomo-mitsui-banking-corp|SMBC]] / [[megabanks/mizuho-bank|Mizuho]]** — 日本のディーラー対事業会社およびディーラー対機関投資家のフローのために最大の円 IRS、OIS、ベーシススワップ、為替デリバティブのブックを運用する銀行・証券の統合事業体。レートと為替がメガバンクのデリバティブ収益構成を支配する;エクイティデリバティブはより小さく証券子会社に集中している;クレジットデリバティブは銀行勘定のヘッジと限定的なディーラー CDS の活動に集中している;

2. **独立系日本 IB フランチャイズ — [[securities-firms/nomura-hd|Nomura]] / [[securities-firms/daiwa-sg|Daiwa SG]]** にメガバンク証券部門([[securities-firms/smbc-nikko|SMBC Nikko]] / [[securities-firms/mizuho-securities|Mizuho Securities]])を加えたもの — 銀行のみの事業体より **より広範なエクイティデリバティブ能力** を持つ証券会社ベースのディーラーフランチャイズであり、プライマリーディーラーの JGB 活動を中心に構築された強力なレート / クレジットデリバティブのブックを持つ;

3. **外国 IB フランチャイズ — [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]]、[[securities-firms/morgan-stanley-japan|Morgan Stanley Japan / MUMSS]]、[[foreign-financial-institutions/jpmorgan-japan|JPMorgan Japan]]、[[foreign-financial-institutions/citigroup-japan|Citi Japan]]** — 完全な日本ディーラー事業体を持つグローバル IB であり、特徴的な **グローバルなクロスマージニングとクロスボーダーのデリバティブブック統合**、深いエクイティ OTC および仕組み商品の能力、ならびにその日本ブックに重なるグローバルな FX プライム / レートプライムのフランチャイズを持つ。

**日本固有のボルカールール相当の禁止は、米国ボルカールールと同じ明示的な形では存在しない** が、日本の規制枠組みは異なる仕組みを通じて同様の結果に達する:**FIEA / 銀行法のもとでの子会社化を通じた銀行業務と証券業務の分離**、**銀行事業体による自己勘定取引のリスクテイクの厳格な監督**、**バーゼル枠組みの資本およびレバレッジの制限**、**FSA によるマーケットメイクおよび自己勘定取引のコンダクト監督**。構造的な効果は、日本における「ディーラーフランチャイズ」が真にマーケットメイクと顧客対応であり、自己勘定取引型の投機的なブックは銀行事業体にとって実質的に制約されている(独自の資本およびコンダクト規則を持つ証券会社事業体にとっては制約はより小さい)ということである。

この項目は、各階層の収益構成、資産クラス別の内訳(レート / 為替 / エクイティ / クレジット)、その内訳の構造的理由、クロスボーダーの外国 IB の日本収益シェア、ならびにボルカー相当の自己勘定取引の制約枠組みを扱う。

## ウィキ上の位置づけ

この項目は OTC インフラのクラスター内で [[derivatives/INDEX|derivatives index]] の下に位置する。トレード後の清算レールについては [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]] と、執行の場のレールについては [[derivatives/swap-execution-facility-japan|Japan SEF-equivalent ETP regime]] と、レート商品の背景については [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] と、エクイティデリバティブのエンドユーザー側については [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI]] および [[derivatives/equity-volatility-hedging-corporates-japan|equity vol hedging by corporates]] と、関連する機関投資家向けファイナンスのフランチャイズについては [[securities/japan-prime-brokerage-and-institutional-financing-matrix|Japan prime 証券仲介 matrix]] とあわせて参照のこと。事業会社のエンドユーザー側は [[finance/japan-corporate-fx-and-rate-hedge-policy|Japan corporate FX and rate hedge policy]] にある。

## なぜ収益構成が重要か

ディーラー銀行のデリバティブフランチャイズは、**最も高マージンで、最も規制集約的で、最もグローバルに統合された** ホールセールバンキングの事業ラインのひとつである。レート / 為替 / エクイティ / クレジットにわたる収益構成は:

- **各ディーラーの構造的な強みがどこにあるか** を明らかにし、これがデリバティブの取引相手を選定する事業会社およびアセットマネージャーの顧客カバレッジの選択を左右する;
- **資本配分とバランスシートの利用** を左右する ── 各デリバティブ商品クラスは RWA、レバレッジ、清算証拠金の異なる組み合わせを消費する;
- **技術投資** を左右する ── 電子執行プラットフォーム、リスクシステム、価格設定インフラはデスク間で不均等に分布している;
- **規制対応** を左右する ── レート・為替フランチャイズは 2008 後に最も重く規制されている(清算義務、ETP 規則、TR 報告);エクイティデリバティブは異なるコンダクト監督の強度を持つ;クレジットデリバティブは独自の清算範囲と CDS 固有の規則を負う。

日本の上場金融グループにとって、開示された収益構成は [[finance/japan-listed-financial-groups-investable-universe|investable-universe analysis]] のための **主要な公開情報源のインプット** である ── グローバルマーケットセグメントのレート・為替シェアは、日銀の政策正常化、円の動き、グローバルなボラティリティ局面に対する感応度の高い営業レバレッジの変数である。

### MUFG、SMBC、みずほ

三つの日本のメガバンクは日本で最大のディーラーデリバティブブックを運用しており、**銀行事業体の円レートおよび為替フランチャイズ** に支えられ、証券子会社がエクイティデリバティブおよび証券対応の機関投資家顧客を扱う。

| メガバンク | 銀行事業体 | 証券部門 | 合弁パートナー |
|---|---|---|---|
| **[[megabanks/mufg-bank|MUFG Bank]]** | 三菱 UFJ 銀行 | [[securities-firms/morgan-stanley-japan|MUMSS]](三菱 UFJ モルガン・スタンレー証券、合弁);三菱 UFJ 証券ホールディングスの非合弁事業も | モルガン・スタンレー(MUMSS の構造において) |
| **[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]** | 三井住友銀行 | [[securities-firms/smbc-nikko|SMBC Nikko Securities]] | Jefferies(提携)、Moelis(アドバイザリー提携)など |
| **[[megabanks/mizuho-bank|Mizuho Bank]]** | みずほ銀行 | [[securities-firms/mizuho-securities|Mizuho Securities]];みずほグループにはみずほ信託銀行も含まれる | Greenhill(アドバイザリー買収の経緯) |

### メガバンクのおおよその収益構成(公開情報源からの推論)

各社ごとのデリバティブ収益の内訳がデスクセグメントのレベルで常に開示されているわけではない ── MUFG、SMFG、みずほ FG の IR を通じて公開で開示されるのは、複数の活動にわたって集計された **グローバルマーケットセグメントの収益** である。推論されるおおまかな構成(例示であり、公表数値ではない):

| 資産クラス | デリバティブ収益構成のおおよそのシェア |
|---|---|
| **レート(IRS、OIS、ベーシススワップ、JGB 先物隣接のヘッジ、スワップション)** | 支配的なシェア ── メガバンクのディーラーおよびエンドユーザーフローにとって最大の単一デリバティブ商品ファミリー。LIBOR 後の TONA 参照 OIS への移行、日銀の政策正常化の再開、円レートカーブの活動が、構造的に大きなレートデリバティブの収益基盤を牽引する。 |
| **為替(為替フォワード、為替スワップ、円クロスカレンシーベーシススワップのフローを含む為替オプション)** | 二番目に大きいシェア ── メガバンクは事業会社のエンドユーザーの円為替ヘッジフロー(日本の事業会社のクロスボーダー M&A および貿易金融の為替ヘッジ需要)を支配する。クロスカレンシーベーシススワップのフローは QQE 時代の円調達ストレス以降、特に大きい。 |
| **エクイティ(JPX 上場デリバティブ、OTC エクイティオプション、仕組みエクイティ、ボラティリティヘッジ)** | 銀行事業体レベルでより小さいシェア(銀行・証券分離規則により制約される) ── 証券子会社に集中している。 |
| **クレジット(シングルネームおよびインデックス CDS、クレジットデリバティブのヘッジ)** | 四つのうち最小のシェア ── 日本のクレジットデリバティブ市場は米国 / EU より構造的に小さい;銀行勘定のクレジットヘッジ活動は有意であるが大きな収益を生み出すものではない。 |

### なぜメガバンクではレートと為替が支配的か

メガバンクのデリバティブ収益のレートと為替への集中は次を反映する:

- **銀行事業体の顧客構成** ── 為替(輸出入を原資とする)の事業会社トレジャリーヘッジ、ローンポートフォリオの金利ヘッジ、事業会社の取引相手向けの仕組みレートソリューション;
- **銀行ライセンスの制約** ── リテールまたは事業会社のエンドユーザーとのエクイティデリバティブの仲介は、銀行事業体ではなく [[financial-regulators/japan-exchange-group|FIEA-licensed]] 証券子会社に集中している;
- **信託銀行系列の能力** ── 信託で包んだエクスポージャー(従業員信託株式、仕組み投資家ビークル)を必要とする商品については、信託銀行子会社が法的なラッパーを扱い、銀行 / 証券事業体がデリバティブを提供する;
- **JGB プライマリーディーラーの地位** ── メガバンク系列の証券部門([[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/morgan-stanley-japan|MUMSS]])は JGB プライマリーディーラーであり、構造的なレートデリバティブのアンカーを生み出す。

### 野村 HD、大和 SG

[[securities-firms/nomura-hd|Nomura]] と [[securities-firms/daiwa-sg|Daiwa Securities Group]] は **二つの大きな独立系の日本本拠の投資銀行** であり ── メガバンク親会社を持たずに完全なディーラー銀行のデリバティブ能力を運営する証券会社根の フランチャイズである。

### 野村 / 大和のおおよその収益構成(公開情報源からの推論)

| 資産クラス | おおよそのシェア |
|---|---|
| **レート** | 大きなシェア ── JGB プライマリーディーラーの地位が Tier-1 のレートデリバティブフランチャイズを支える;円 IRS / OIS のディーラーブックは規模でメガバンクのフランチャイズに匹敵する。 |
| **為替** | 実質的なシェア ── 野村のグローバル為替フランチャイズ(Nomura International、Nomura NY)は東京拠点の円為替ディーリングと統合されている;大和はより小さいグローバル為替のフットプリントだが、中核的な日本の事業会社の為替カバレッジを持つ。 |
| **エクイティ** | **メガバンクに比べて特徴的に大きいシェア** ── 野村は日本本拠のいかなるフランチャイズの中でも最も深い **国内エクイティデリバティブ** のブックを運用する(シングルストック OTC スワップ、仕組みエクイティ商品、持ち合い解消関連のデリバティブ);大和は同様だがより小規模。 |
| **クレジット** | メガバンクに匹敵する実質的なシェア;トップの米国外国 IB よりグローバルなクレジット CDS フランチャイズは小さい。 |

### なぜ独立系 IB ではエクイティが特徴的に大きいか

構造的な理由:独立系 IB のフランチャイズは **歴史的に銀行業務ではなく証券および資本市場の活動を中心に構築された**。それらのエクイティデリバティブ、仕組み商品、OTC エクイティオプションのブックは次の深い顧客カバレッジを反映する:

- [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding]] のための国内の事業会社顧客;
- ボラティリティオーバーレイおよび仕組みエクイティ商品のための国内のアセットマネージャー;
- ALM 起点の仕組みエクイティエクスポージャーのための国内の保険会社;
- 証券子会社のチャネルを通じたリテール配分の仕組み商品。

メガバンク系列の証券部門([[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]])は匹敵するがやや狭いエクイティデリバティブの能力を構築してきた ── メガバンクグループの資本配分の枠組みによって経済的に制約されている。

### ゴールドマン・サックス・ジャパン、モルガン・スタンレー・ジャパン / MUMSS、JP モルガン・ジャパン、シティ・ジャパン、BofA ジャパン外国 IB 階層は、単独の日本のみのブックではなく、クロスボーダーのグローバルなデリバティブブックに参加する **完全に統合された東京ディーラー業務** を運営する。

### 外国 IB のおおよその収益構成(公開情報源からの推論、グループレベルを日本に集計)

| 外国 IB | 日本における特徴的なデリバティブ収益の傾き |
|---|---|
| **[[securities-firms/goldman-sachs-japan|GS Japan]]** | 外国 IB の中で最も深いエクイティ OTC および仕組み商品のフランチャイズ;強力なレートと為替;クロスボーダーのグローバルな資本市場の統合。エクイティボラティリティと OTC エクイティスワップが特徴的なフランチャイズ。 |
| **[[securities-firms/morgan-stanley-japan|MS Japan / MUMSS]]** | 二チャネル構造(完全子会社の MS ジャパン + MUFG との MUMSS 合弁) ── グローバル IB の能力をレート / 為替のための MUFG グループのバランスシートと組み合わせる;MS ジャパンで深いエクイティ OTC;四つの資産クラスすべてで競争力。 |
| **[[foreign-financial-institutions/jpmorgan-japan|JPM Japan]]** | 特徴的に強力な為替プライムおよびレートデリバティブのフランチャイズ(為替およびレートにおける JPM のグローバルな市場シェアの先導を反映);強力なカストディ・銀行業務の統合;競争力のあるエクイティ OTC。 |
| **[[foreign-financial-institutions/citigroup-japan|Citi Japan]]** | 特徴的に強力な為替プライムおよびレートのフランチャイズ(シティのグローバルな市場シェアの先導);シティバンク東京支店を通じた銀行勘定の為替統合;競争力のあるエクイティ OTC。 |
| **[[foreign-financial-institutions/jpmorgan-japan|BofA Japan]](BofA 証券ジャパン)** | 資産クラスをまたいで競争力;GS / MS / JPM / シティより小さいアジアフランチャイズ;FICC およびエクイティ OTC の能力。 |

### なぜ外国 IB は日本ディーラー事業体を維持するか

一部のリテールおよび商業銀行のセグメントにおける 2010 [[banking/foreign-bank-japan-retreat|foreign-bank Japan retreat]]にもかかわらず、トップの外国 IB は構造的な理由から完全な日本ディーラー業務を維持した:

- **グローバルな事業会社の顧客カバレッジ** ── 日本に事業を持つ多国籍の事業会社顧客は円デリバティブサービスを必要とする;
- **グローバルなヘッジファンド顧客の日本スリーブ** ── 日本戦略を運用するグローバルなマルチストラテジーファンドは外国 IB の東京ディーラー事業体を通じてルーティングする;
- **クロスボーダーの商品能力** ── 円-米ドルクロスカレンシーベーシススワップ、JGB 先物対米ドルレートのレラティブバリュー、JPX 対 S&P のレラティブバリュー、日本の事業会社のクロスボーダー M&A 為替ヘッジ ── すべてが統合された東京 + ロンドン + NY のフランチャイズを必要とする;
- **規制上の同等性** ── [[derivatives/otc-clearing-jp-trade-repository|EMIR / Title-VII equivalence]] のもとで、登録された東京ディーラー事業体を持つ外国 IB は、資本効率的な扱いを失うことなく、日本清算適格の商品を本国管轄の顧客に提供できる。

### 日本のデリバティブ収益に占める外国 IB のシェア日本のディーラーデリバティブ市場における外国 IB の合計シェアは、多くの商品でメガバンク + 独立系 IB の階層に対して **実質的だが二次的** である:

- **円 IRS / OIS** ── メガバンク + 野村 / 大和が想定元本残高を支配する;外国 IB は競争するが下位にランクする;
- **円-米ドルクロスカレンシーベーシススワップ** ── 外国 IB(特に [[foreign-financial-institutions/jpmorgan-japan|JPM]] と [[foreign-financial-institutions/citigroup-japan|Citi]])は、その米ドル調達側のフランチャイズゆえに構造的に重要である;
- **日本のシングルネームに対する OTC エクイティデリバティブ** ── [[securities-firms/goldman-sachs-japan|GS]] と [[securities-firms/morgan-stanley-japan|MS]] は野村と競争する特徴的に深いフランチャイズを持つ;
- **円為替オプション** ── グローバル IB(特に [[foreign-financial-institutions/jpmorgan-japan|JPM]]、[[foreign-financial-institutions/citigroup-japan|Citi]])はグローバルに Tier-1 であり東京で競争力がある;
- **日本の参照事業体に対する CDS および iTraxx Japan** ── 外国 IB は、より小さい国内 CDS フランチャイズを踏まえ、歴史的に重要な取引相手であった。

正確な市場シェアの数値は日本セグメントのレベルで常に利用可能とは限らないディーラーレベルの開示を必要とする;したがって各社ごとのサイジングは、グローバルなリーグテーブルのデータ、BIS の日本取引相手統計、JSCC の清算データの集計に基づいて、必然的に示唆的なものとなる。

## 日本におけるボルカー相当の自己勘定取引の制約

**米国ボルカールール**(ドッド・フランク法第 619 条)は、銀行事業体が自己勘定取引に従事することを禁止し、ヘッジファンドおよびプライベートエクイティファンドへの投資を制限するが、マーケットメイク、引受、ヘッジ、一定の国債取引に対する適用除外がある。

日本には「ボルカールール」という名の **直接的な立法上の同等物はない** が、規制枠組みは異なる仕組みを通じて同等の結果に達する:

| 仕組み | 効果 |
|---|---|
| **銀行法 / FIEA の銀行業務と証券業務の分離** | 銀行事業体の自己勘定取引は構造的に制約される ── 大半のマーケットメイクおよびディーラー活動は銀行事業体ではなく [[banking/japan-banking-license-tier-comparison-matrix|FIEA-licensed securities-arm subsidiary]] に置かれる。 |
| **バーゼル枠組みの資本およびレバレッジ** | 自己勘定取引のリスクウェイト資産およびレバレッジ比率エクスポージャーに対する資本賦課が、純粋な投機的なポジションテイクを大規模には経済的に魅力のないものにする。 |
| **FSA の監督枠組み** | 主要行に対する FSA のコンダクト監督には、トレーディングブックのリスクテイク、内部統制の適切性、マーケットメイク対自己勘定取引の境界の精査が含まれる。 |
| **内部ガバナンス** | メガバンクの内部ガバナンスはマーケットメイク(顧客対応、ヘッジ運用)を自己勘定取引(自己勘定の方向性のあるリスクテイク)から区別する;内部限度が自己勘定の活動を制約する。 |
| **JFSA / 日銀のマクロプルーデンス監視** | 主要行の集計トレーディングブックエクスポージャーはグループレベルで監視される。 |

構造的な効果:**日本の主要行は顧客対応のマーケットメイクおよびエンドユーザーカバレッジのデリバティブフランチャイズを運営しており、大きな方向性のある自己勘定取引のブックではない**。日本の上場日本金融グループにおける最大の自己勘定取引フランチャイズは、歴史的に独自の資本構造を持つ非銀行の証券子会社に置かれていた(そこでさえ、資本およびレバレッジの制約が自己勘定の規模を制限する)。

経済的な効果:**メガバンクのデリバティブフランチャイズの収益構成は、投機的なポジションテイクの損益ではなく顧客フロー**(事業会社ヘッジ、機関投資家のディーラー活動、為替の事業会社フロー)によって支配される。これが、メガバンクのグローバルマーケットセグメントの収益が、歴史的な自己勘定取引時代の米国 IB の銀行事業体のリターンより構造的により安定しているが低マージンである理由である。

## クロスプロダクトのフランチャイズ統合一部のデリバティブ商品クラスは **クロスプロダクトのフランチャイズ統合** を牽引する:

- **クロスカレンシーベーシススワップ(円-米ドル)** ── レート・為替の交点に位置する;事業会社の為替ヘッジと JGB-円レートヘッジの共同カバレッジを牽引する;[[megabanks/mufg-bank|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho]]、[[securities-firms/nomura-hd|Nomura]]、およびグローバルな為替の外国 IB における主要なフランチャイズ;
- **JGB 現物、JGB 先物、JGB レポ、JGB-OIS のヘッジコンプレックス** ── プライマリーディーラーの JGB 活動に支えられた統合されたレートデリバティブのカバレッジを牽引する;
- **エクイティデリバティブ + 持ち合い解消** ── 証券会社階層における事業会社トレジャリー + 資本市場 + 仕組み商品の活動の統合されたカバレッジを牽引する;
- **クレジット CDS + 債券現物 + 仕組みクレジット** ── ディーラー銀行のクレジットデスクにおける統合されたクレジット商品のカバレッジを牽引する。

これらの統合は、ディーラー銀行の開示において **デリバティブデスクの収益が現物、レポ、仕組み商品の収益からきれいに分離できることがめったにない** 構造的な理由である。メガバンクの「レートデリバティブ収益」のラインは、レートデリバティブのディーリング **に加えて** JGB 現物、JGB レポ、レート仕組み商品の収益を反映する ── それらを公開情報源の開示から正確に分離することは近似的である。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/swap-execution-facility-japan]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/jgb-futures-curve]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-best-execution-sor-pts]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/foreign-bank-japan-retreat]]
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[INDEX|FinWiki index]]

## 出典

- MUFG、SMFG、みずほ FG、野村 HD、大和証券グループ ── IR 資料、セグメント開示、年次報告書。
- ゴールドマン・サックス、モルガン・スタンレー、JP モルガン・チェース、シティグループ ── グループレベルの IR 資料(日本 / アジアの説明)。
- FSA、英語版 FIEA 枠組みページ ── 銀行・証券分離、市場コンダクト監督、ETP および OTC デリバティブ規則。
- 日銀、決済 / 市場統計 ── 日本の OTC デリバティブ集計想定元本および総市場価値。
- ISDA ── SwapsInfo 集計データ、OTC デリバティブ商品分類、市場規模の刊行物。
- JSCC、英語版の清算統計の刊行物。

---
source: payments/japan-transit-prepaid-suica-pasmo-icoca-economics
source_hash: 5d37a4ae9275e2b6
lang: ja
status: machine
fidelity: ok
title: "日本の交通系プリペイド電子マネー: Suica / PASMO / ICOCA / 地域 IC の経済性"
translated_at: 2026-06-02T16:33:58.527Z
---
# 日本の交通系プリペイド電子マネー: Suica / PASMO / ICOCA / 地域 IC の経済性

## ウィキ上の位置づけ

このエントリは、交通系プリペイドスキームの参照ページとして [[payments/INDEX|payments index]] 配下に位置する。FSA 登録済み前払式支払手段発行者の視点では [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]]、四分類スキーム比較では [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、Mobile Suica の払戻 / 移転可能性の問いでは [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]、Cyberne 経由の発行体間精算視点では [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] と組み合わせる。非交通系 FeliCa プリペイドの [[payment-firms/rakuten-edy|Rakuten Edy]]、交通系プリペイドの小売タッチ決済量の一部を侵食してきた代替スキームの [[payments/japan-code-payment-competitive-map|code-payment competitive map]] と比較する。モバイル鉄道の Apple Pay / おサイフケータイのルーティングは、トークン化の扱いで [[payments/japan-card-security-authentication-controls|card security and authentication controls]] と交差する。

## 要約

日本の交通系プリペイド電子マネーは、FeliCa (Sony の非接触 IC 技術)、**10 IC カード相互利用協定** (2013 から)、発行体間精算システム **Cyberne** を軸とする**単一の相互利用スキーム**で動いている。10カードのうち9つは鉄道事業者発行である。**Suica** ([[card-issuers/jr-east|JR East]])、**PASMO** (PASMO Co — 東京の私鉄 / バス連合)、**ICOCA** ([[JapanFG/jr-west|JR West]])、**Kitaca** ([[JapanFG/jr-hokkaido|JR Hokkaido]])、**TOICA** ([[JapanFG/jr-central|JR Central]])、**manaca** (名古屋 — Meitetsu + 名古屋市交通局)、**nimoca** (Nishitetsu, 福岡)、**SUGOCA** ([[JapanFG/jr-kyushu|JR Kyushu]])、**HAYAKAKEN** (福岡市交通局) である。PiTaPa (Surutto KANSAI) は10番目であり、プリペイドではなく後払いとして運用される。9つのプリペイドカードはすべて、各発行体の前払式支払手段登録の下で、鉄道間タッチ受入と広範な小売加盟店受入を共有する。Apple Pay / おサイフケータイ経由の Mobile Suica は、2016  (Apple Pay 開始) 前後にスキームをカード専用からスマートフォンネイティブへ転換した。Mobile PASMO は 2020 に続いた。全体のスキームは資金決済法の前払式支払手段フレームワークで規律され、発行終了時のみ払戻可能である。特に観光客が購入し返却しないカードについて、**失効益の経済性** (未使用残高が時間とともに発行体に帰属すること) が発行体 P&L に寄与する。

## 10 IC 相互利用スキーム

10 IC カード相互利用協定 (10カード相互利用) は 2013-03-23 に開始され、カード保有者は10カードのいずれでも全国の参加鉄道・バス網および参加小売加盟店で利用できるようになった。2013, 以前は、各カードは発行体の鉄道地域に制限されていた。相互利用の開始は、日本の小売決済における最大級の単一相互運用イベントの一つだった。

| カード | 発行体 | 地域 | 事業者タイプ | プリペイド / 後払い |
|---|---|---|---|---|
| Suica | [[card-issuers/jr-east\|JR East]] | 首都圏 / 北日本 | JR グループ | プリペイド |
| PASMO | PASMO Co Ltd | 首都圏 | 私鉄 + バス連合 | プリペイド |
| ICOCA | [[JapanFG/jr-west\|JR West]] | 関西 / 西日本 | JR グループ | プリペイド |
| Kitaca | [[JapanFG/jr-hokkaido\|JR Hokkaido]] | 北海道 | JR グループ | プリペイド |
| TOICA | [[JapanFG/jr-central\|JR Central]] | 東海 / 名古屋 | JR グループ | プリペイド |
| manaca | Meitetsu + 名古屋市交通局 | 名古屋 / 中部 | 私鉄 + 公営 | プリペイド |
| PiTaPa | Surutto KANSAI | 関西 (ICOCA と重複) | 私鉄連合 | **後払い** |
| nimoca | Nishitetsu | 福岡 / 九州 | 私鉄 | プリペイド |
| SUGOCA | [[JapanFG/jr-kyushu\|JR Kyushu]] | 九州 | JR グループ | プリペイド |
| HAYAKAKEN | 福岡市交通局 | 福岡市地下鉄 | 公営 | プリペイド |

PiTaPa は構造上の例外である。事前チャージではなく、銀行口座振替でカード保有者に月次請求する**後払い**スキームであるため、他の9カードより [[payments/japan-card-issuer-acquirer-processor-split|card-style credit]] の経済性に近い。PiTaPa とプリペイド9カードの相互運用は片方向に限られる (PiTaPa は関西圏内の Suica / PASMO 等の受入場所で使えるが、Suica / PASMO は PiTaPa 専用後払い加盟店では使えない)。

## FeliCa 技術スタック

10カードすべては **FeliCa**、すなわち Sony 独自の非接触 IC 技術 (ISO/IEC 18092  での NFC-F) 上で動く。これは Visa Touch / Mastercard Contactless が使う EMV contactless / NFC-A/B とは異なる。FeliCa の交通向け主要技術特性は以下の通りである。

| 機能 | 重要な理由 |
|---|---|
| 200ms 読取サイクル | 鉄道改札の処理能力を可能にする。乗客は止まらずに改札を通過できる |
| カードとリーダー間の相互認証 | カード複製やリプレイ攻撃の余地を減らす |
| セキュアエレメント実行によるローカル暗号化 | 各タッチでバックエンド照会せず、カード側で残高計算できる |
| 1タップ残高引き落とし | オフライン改札運用でオンライン承認が不要 |

**FeliCa Networks** の合弁会社 (Sony + NTT docomo + JR East) が技術スタックを開発・ライセンスしている。EMV contactless ではなく FeliCa が選ばれたことが、海外観光客の Visa / Mastercard contactless カードが日本の鉄道改札で使えない主因である。逆に、Apple が iPhone 8 以降 FeliCa ハードウェアをグローバルに搭載したため、世界で購入された iPhone でも Suica の Apple Pay 実装は FeliCa 対応小売加盟店で取引できる。

## Cyberne 精算システム

10 IC カード間の発行体間精算は、**Cyberne** (鉄道業界パートナーが運営する集中精算システム) を通じて処理される。Suica 保有者が JR East で入場し、JR Tokai で出場した場合、2つの鉄道事業者間の運賃収入配分は Cyberne を通じて計算・精算される。発行体をまたぐ小売加盟店精算も同じ仕組みで処理される。たとえば manaca 保有者が Suica 加盟店で購入した場合、価値は manaca 発行体 → Cyberne → Suica アクワイアラ → 加盟店へ流れる。

Cyberne システムは最終的に、他の日本の決済スキームと同じく、全銀振込を通じて発行体の銀行口座間で円資金を移動させる。エンドツーエンドの清算マップについては [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] を参照。

## モバイル鉄道: Apple Pay とおサイフケータイ

プリペイド IC スキームには、主要なモバイルデバイスレールが二つある。

| レール | デバイス | 対応範囲 |
|---|---|---|
| Apple Pay 経由の Mobile Suica | iPhone 7+ (日本モデル)、iPhone 8+ (FeliCa 搭載グローバルモデル)、Apple Watch Series 3+ | Suica、PASMO、ICOCA (2023 追加) |
| おサイフケータイ | FeliCa 搭載の日本市場向け Android 端末 | Suica、PASMO、ICOCA、WAON、nanaco、Edy、iD、QUICPay |

Mobile Suica は Apple Pay より早く存在していた (JR East が 2006  に FeliCa 搭載の日本国内フィーチャーフォン向けに開始) が、2016  の Apple Pay 開始が転換点だった。これにより Suica はフィーチャーフォンのニッチから、主流のスマートフォン決済面へ転換した。2024,  までに、モバイル版取引は新規 Suica 発行の過半を占めるようになったが、カード版も広く使われ続けている。

Apple Pay 実装にはトークン化レイヤー (Apple Pay がデバイス固有のトークン PAN を生成) が含まれるが、基礎となる鉄道乗車は、デバイス上の FeliCa セキュアエレメントとオフライン残高引き落としの意味論を引き続き使う。Apple Pay は鉄道改札で JR East へのオンライン承認を導入しない。

## 前払式支払手段としての扱い

9つのプリペイド IC カードはすべて、資金決済法上の**第三者型前払式支払手段**として登録されている (FSA 登録)。これにより以下が発生する。

| 義務 | 詳細 |
|---|---|
| 利用者資金保全 | 毎年3月末・9月末の残高基準日に、未使用残高額の 50% を供託 / 信託 / 保証で保全しなければならない |
| 発行終了時のみ払戻 | 通常運用中は未使用残高を要求に応じて現金払戻しできない。発行終了時のみ払戻可能 (これが資金移動業との法的区別) |
| 終了手続 | 発行体が終了する場合、払戻手続は資金決済法の手順に従う必要がある |
| 利用者間送金なし | プリペイド残高を他の利用者に送ることはできない (資金移動残高との法的境界) |
| 有効期限ルール | 発行体は有効期限を設定でき、期限後の未使用残高は発行体の規約に従って扱われる |

払戻不可である点が、**失効益の経済性**の主要な源泉である。訪日観光客が購入し、使い切らずに持ち帰るカード (典型例: 到着時に ¥3,000  の Suica カードを買い、¥2,400,  を使い、¥600  の未使用残高と ¥500  のデポジットを残して出国) は、時間とともに発行体 P&L に帰属する失効益を生む。JR East は Suica の失効益を明示的には開示してこなかったが、訪日観光客数はコロナ前に約 32 百万人でピークを付け、2024  までに同等水準へ回復しており、意味のある失効益寄与を示唆する。

交通系プリペイドが資金移動業登録ではなくプリペイド区分にとどまる理由が、要求払い戻し不可のルールである点については [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] を参照。

## 加盟店受入範囲

交通系プリペイドカードは、鉄道改札の外にも大きな小売加盟店範囲を持つ。

| 受入ゾーン | 対応範囲 |
|---|---|
| 鉄道・バス | 10 IC スキーム全域で利用可能 |
| 駅ナカ・駅周辺小売 | 非常に高い — コンビニ、キオスク、自動販売機、駅近隣店舗 |
| コンビニチェーン | 7-Eleven、FamilyMart、Lawson、Ministop で利用可能 |
| ドラッグストア、スーパー | 高い — Welcia、Tsuruha、Sundrug、AEON (WAON も受入)、Ito-Yokado (nanaco も受入) |
| ファストフード、カジュアル飲食 | 高い |
| 自動販売機 | 駅構内で高く、駅外でも拡大中 |
| EC オンライン | 限定的 — Mobile Suica は一部 EC 加盟店向けに Suica インターネット決済をサポートするが、取扱量は小さい |
| クロスボーダー | なし — 日本国内の閉じたスキーム |

小売受入範囲は、主に JR East の Suica アクワイアラ側オペレーションと、PASMO Co の東京圏私鉄加盟店パートナーシップによって構築された。単一アクワイアラ構造のため、加盟店手数料は、競合する複数アクワイアラを通じてではなく、発行体との相対交渉で決まる ([[payments/japan-card-issuer-acquirer-processor-split|card class multi-acquirer]] 構造と対比)。

## Mobile Suica デポジット廃止 (2024)

JR East は、Apple Pay 経由で発行される Mobile Suica について、早期展開時に ¥500  のデポジット要件を廃止した。一方、カード型 Suica ではデポジットが残っている。このカード型 Suica と Mobile Suica の扱いの分裂は、「Suica」が単一商品ではなく、形態によってデポジット、払戻、有効期限、受入ルールが異なるファミリーであることを示している。PASMO と ICOCA のモバイル版にも同じことが当てはまる。

## 加盟店手数料の経済性 — 単一アクワイアラ構造

各交通系プリペイドカードには**単一の主要アクワイアラ** (発行体自身) があるため、加盟店手数料の経済性は、カードクラスの複数アクワイアラ価格設定とは構造的に異なる。

| 観点 | 交通系プリペイド (Suica / PASMO / ICOCA 等) | カード (Visa / Mastercard / JCB) |
|---|---|---|
| アクワイアラ選択 | 単一 — 発行体または認定アクワイアラ・パートナーと契約 | 複数 — 加盟店がライセンスを持つアクワイアラから選択 |
| 手数料開示 | 加盟店手数料表の公開開示は限定的 | JFTC / Payments Japan による公開ベンチマーク |
| 手数料ベンチマーク | 困難 — アクワイアラ横断比較がない | 可能 — 複数アクワイアラ競争が規律する |
| 端末コスト | 加盟店は FeliCa リーダー (¥30,000+) を設置する必要がある | PSP 提供端末により比較的軽い |
| タッチごとのコスト | MDR に内包され、加盟店階層により異なる | MDR ベース。PSP の取引ごと手数料もあり得る |
| 交渉力 | 大手チェーンレベルに集中 | 分散。小規模加盟店は公表レートを受け入れる |

単一アクワイアラ構造は、**JFTC の加盟店手数料開示圧力**が歴史的にまずカードクラスへ集中した構造的理由の一つである。カードクラスには規律付けに使える競争がより多い。プリペイドクラスの手数料透明性への圧力は、発行体兼アクワイアラを個別手数料要素へ容易に分解できないという構造的障害に直面する。

## JR East の Suica における企業上の持分

[[card-issuers/jr-east|JR East]] の Suica フランチャイズは、Suica を決済手段であると同時に顧客データ基盤として使う、多セグメントの小売 / 駅 / 交通サービス事業の中に位置する。モバイル版への転換分を含め約 100 百万枚の Suica 基盤は、JR East に日本最大級の囲い込みプリペイド人口と、それに対応する交通、駅ナカ小売、都市部コンビニ・スーパーの一部にまたがるデータシグナルを与える。企業戦略上、Suica は単体の決済サービス P&L ではなく**戦略的プラットフォーム資産**として扱われる。これが、JR East が Mobile Suica プラットフォーム開発、訪日観光客向け Suica Welcome、JRE POINT 統合に投資してきた理由の一つである。

## Suica 次世代プラットフォームの方向性

JR East は、Suica のより長期的なプラットフォーム方向性を示してきた。歴史的な FeliCa セキュアエレメントによるオフラインタップモデルと、新しいサーバー管理型アカウント残高モデルの双方を支える Suica へ向かう構想である。動機には、歴史的な残高上限の緩和、より複雑な複数発行体ルーティングのサポート、スマートフォンネイティブなレールとのよりきれいな統合、鉄道を超えた横断モビリティ商品 (タクシー、自転車シェア、マイクロモビリティ等) の基盤づくりが含まれる。この方向性は公開の場で議論されているが、完全な運用アーキテクチャはまだ定義中であり、中期的には日本のプリペイドスキームにおける重要な構造変化の一つである。

## 発行体横断協力のガバナンス

10 IC 相互利用スキーム全体の協力は、単一の支配的ルール設定者を持たない複数発行体ガバナンスによって行われる。

| ガバナンスの観点 | 仕組み |
|---|---|
| 相互利用スキーム規則 | 10発行体間の業界合意。コンセンサスで改定 |
| Cyberne 精算システム | 鉄道業界パートナーが運営。技術変更は発行体横断で調整 |
| 共通タッチ受入標準 | FeliCa 仕様準拠 + スキーム規則の拡張 |
| 小売加盟店相互運用 | 発行体ごと。各発行体は相互合意の下で自社加盟店に他発行体カードを受け入れられる |
| 新機能展開 (モバイル、デポジット変更、有効期限ルール) | 各発行体が独立して決定。スキームレベルの新機能には複数発行体の合意が必要 |

このコンセンサス型ガバナンスは、追加カードへのモバイル鉄道展開のようなスキーム全体の変更が、全体同時ではなく段階的に展開されがちな理由の一つである。Mobile Suica は Mobile PASMO に 14 年先行し、ICOCA の Apple Pay 対応は 2023 に実現した。

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/cashless-jp-landscape]]
- [[payment-firms/rakuten-edy]]
- [[card-issuers/aeon-bank]]
- [[regional-banks/seven-bank]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- JR East: Suica 公式サイトおよび Mobile Suica サイト。
- PASMO Co Ltd: 公式サイト。
- JR West: ICOCA 公式サイト。
- JR Hokkaido: Kitaca サイト。
- JR Central: TOICA サイト。
- Meitetsu / 名古屋市交通局: manaca サイト。
- Nishitetsu: nimoca サイト。
- JR Kyushu: SUGOCA サイト。
- FSA: 前払式支払手段政策ポータルおよび第三者型前払式支払手段発行者登録一覧。
- METI: キャッシュレス決済政策ポータル。
- BOJ: 決済・市場インフラ関連ポータル。
- FeliCa Networks: 技術 / 会社ページ。

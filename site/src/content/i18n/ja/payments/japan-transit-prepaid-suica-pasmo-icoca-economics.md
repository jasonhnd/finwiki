---
source: payments/japan-transit-prepaid-suica-pasmo-icoca-economics
source_hash: ee4c4213c64ed479
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Japan transit-前払式電子マネー: Suica / PASMO / ICOCA / regional IC economics"
translated_at: 2026-06-26T08:29:40.677Z
---

# Japan transit-前払式電子マネー: Suica / PASMO / ICOCA / regional IC economics

## ウィキ上の位置づけ

この項目は [[payments/INDEX|payments index]] の配下にある交通系プリペイドスキームのリファレンスページであり、FSA 登録のプリペイド発行者ビューは [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]]、4 クラスのスキーム比較は [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、モバイル Suica の払い戻し／譲渡可能性の問題は [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]、Cyberne 経由の発行者間決済ビューは [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment 清算 and 決済 infrastructure]] と組み合わせる。[[payment-firms/rakuten-edy|Rakuten Edy]]（非交通系 FeliCa プリペイド）および交通系プリペイドの小売タップ量の一部を侵食してきた代替スキームの [[payments/japan-code-payment-competitive-map|コード決済 competitive map]] と比較すること。モバイル鉄道の Apple Pay／おサイフケータイのルーティングは、トークン化の取扱いについて [[payments/japan-card-security-authentication-controls|card security and authentication controls]] に交差する。

## TL;DR

日本の交通系プリペイド電子マネーは、FeliCa（ソニーの非接触 IC 技術）、**10 IC カード相互利用協定**（2013以来）、および **Cyberne** 発行者間決済システムにアンカーされた **単一の相互利用スキーム** 上で動いている。10 枚のカードのうち 9 枚は鉄道事業者の発行：**Suica**（[[card-issuers/jr-east|JR East]]）、**PASMO**（PASMO 社 — 東京の私鉄／バスのコンソーシアム）、**ICOCA**（[[JapanFG/jr-west|JR West]]）、**Kitaca**（[[JapanFG/jr-hokkaido|JR Hokkaido]]）、**TOICA**（[[JapanFG/jr-central|JR Central]]）、**manaca**（名古屋 — 名鉄 + 名古屋市交通局）、**nimoca**（西鉄、福岡）、**SUGOCA**（[[JapanFG/jr-kyushu|JR Kyushu]]）、**HAYAKAKEN**（福岡市交通局）。PiTaPa（スルッと KANSAI）は 10 番目で、プリペイドではなくポストペイとして運用される。9 枚のプリペイドカードはすべて、各発行者の前払式支払手段登録の下で、鉄道間のタップ受付と相当な小売加盟店受付を共有している。Apple Pay／おサイフケータイ経由のモバイル Suica は、2016 頃（Apple Pay の開始）にスキームをカードのみからスマートフォンネイティブへと転換させた；モバイル PASMO は 2020に続いた。スキーム全体は資金決済法の前払式支払手段の枠組みの下で規律されている — 発行停止時にのみ払い戻し可能であり、**breakage の経済性**（未償還残高が時間とともに発行者に帰属する）が、特に観光客が購入して返却されないカードについて、発行者の損益に寄与する。

## 10 IC 相互利用スキーム

10 IC カード相互利用協定（10カード相互利用）は 2013-03-23 に開始され、カード保有者が全国の参加鉄道またはバスネットワークのいずれか、および参加小売加盟店のいずれかで、10 枚のカードのいずれかを使用できるようにした。2013, 以前は、各カードはその発行者の鉄道地域に制限されていた；相互利用の開始は、日本の小売決済における最大級の単一相互運用イベントの一つであった。

| カード | 発行者 | 地域 | 事業者タイプ | プリペイド／ポストペイ |
|---|---|---|---|---|
| Suica | [[card-issuers/jr-east\|JR East]] | 首都圏／東日本北部 | JR グループ | プリペイド |
| PASMO | PASMO 株式会社 | 首都圏 | 私鉄 + バスのコンソーシアム | プリペイド |
| ICOCA | [[JapanFG/jr-west\|JR West]] | 関西／西日本 | JR グループ | プリペイド |
| Kitaca | [[JapanFG/jr-hokkaido\|JR Hokkaido]] | 北海道 | JR グループ | プリペイド |
| TOICA | [[JapanFG/jr-central\|JR Central]] | 東海／名古屋 | JR グループ | プリペイド |
| manaca | 名鉄 + 名古屋市交通局 | 名古屋／中部 | 私鉄 + 自治体 | プリペイド |
| PiTaPa | スルッと KANSAI | 関西（ICOCA と重複） | 私鉄コンソーシアム | **ポストペイ** |
| nimoca | 西鉄 | 福岡／九州 | 私鉄 | プリペイド |
| SUGOCA | [[JapanFG/jr-kyushu\|JR Kyushu]] | 九州 | JR グループ | プリペイド |
| HAYAKAKEN | 福岡市交通局 | 福岡市地下鉄 | 自治体 | プリペイド |

PiTaPa は構造的な例外である — それは、カード保有者が価値を事前にロードするのではなく、銀行口座の口座振替を介して毎月請求される **ポストペイ** スキームである。これにより、他の 9 枚よりも [[payments/japan-card-issuer-acquirer-processor-split|card-style credit]] の経済性に近づく。PiTaPa とプリペイドの 9 枚との相互運用は一方向のみで機能する（PiTaPa は関西ゾーン内の Suica／PASMO 等を受け付ける場所で使用できるが、Suica／PASMO は PiTaPa 専用のポストペイ加盟店では使用できない）。

## FeliCa 技術スタック

10 枚すべてのカードは、ソニー独自の非接触 IC 技術である **FeliCa**（ISO/IEC 18092 の用語では NFC-F）上で動いている — Visa Touch／Mastercard Contactless が使用する EMV 非接触／NFC-A/B とは異なる。交通向けの FeliCa の主要な技術的特徴は：

| 特徴 | なぜ重要か |
|---|---|
| 200ms の読み取りサイクル | 改札のスループットを可能にする — 乗客は止まらずに改札を通過する |
| カードとリーダー間の相互認証 | クローンカードとリプレイ攻撃の表面を低減する |
| セキュアエレメント実行によるローカル暗号化 | 各タップでバックエンドへの問い合わせなしに、カード側で残高を計算 |
| 1タップの残高引落し | オフラインの交通改札動作にオンライン承認が不要 |

**FeliCa Networks** の合弁会社（ソニー + NTT docomo + JR 東日本）が技術スタックを開発しライセンスする。EMV 非接触ではなく FeliCa を選択したことが、国際的な観光客の Visa／Mastercard の非接触カードが日本の交通改札で機能しない主な理由である — そして逆に、Suica の Apple Pay 実装が世界中で購入された FeliCa 搭載の小売加盟店で機能する理由でもある。iPhone が取引できるのは、Apple が iPhone 8から FeliCa ハードウェアをグローバルに出荷したためである。

## Cyberne 決済システム

10 IC カード間の発行者間決済は、**Cyberne**（鉄道業界のパートナーが運用する集中決済システム）を通じて処理される。Suica カード保有者が JR 東日本で入場し JR 東海で出場するとき、2 つの鉄道事業者間の運賃収入の配分が計算され、Cyberne を通じて決済される。同じメカニズムが発行者をまたぐ小売加盟店の決済を処理する：manaca カード保有者が Suica がアクワイアした加盟店で購入する場合、価値は発行者 manaca → Cyberne → アクワイアラー Suica → 加盟店へと流れる。

Cyberne システムは最終的に、全銀振込を介して発行者の銀行口座間で円を動かす — 他のすべての日本の決済スキームと同じである。エンドツーエンドのクリアリングマップについては [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment 清算 and 決済 infrastructure]] を参照。

## モバイル鉄道：Apple Pay とおサイフケータイプリペイド IC スキームには 2 つの主要なモバイルデバイスのレールがある：

| レール | デバイス | カバレッジ |
|---|---|---|
| Apple Pay 経由のモバイル Suica | iPhone 7+（日本モデル）、iPhone 8+（FeliCa 搭載のグローバルモデル）、Apple Watch Series 3+ | Suica、PASMO、ICOCA（2023追加） |
| おサイフケータイ | FeliCa 搭載の日本市場向け Android スマートフォン | Suica、PASMO、ICOCA、WAON、nanaco、Edy、iD、QUICPay |

モバイル Suica は Apple Pay に先行する（JR 東日本は FeliCa 搭載の日本国内向けフィーチャーフォン向けに 2006 に開始した）が、2016 の Apple Pay の開始が転換点であった — それは Suica をフィーチャーフォンのニッチからメインストリームのスマートフォン決済サーフェスへと転換させた。2024, までに、モバイル版の取引が新規 Suica 発行の大半を占めたが、カード版も依然として広く使用されている。

Apple Pay 実装にはトークン化層が関与する（Apple Pay はデバイス固有のトークン PAN を生成する）が、基礎となる交通乗車は依然としてデバイス上の FeliCa セキュアエレメントをオフライン残高引落しのセマンティクスで使用する — Apple Pay は改札で JR 東日本へのオンライン承認を導入しない。

## 前払式支払手段法の取扱い

9 枚すべてのプリペイド IC カードは、資金決済法の下で **第三者型前払式支払手段** として登録されている（FSA 登録）。これは次を発動する：

| 義務 | 詳細 |
|---|---|
| 利用者資金の保全 | 未使用残高額の 50% を、各 3 月末および 9 月末の残高基準日に、供託／信託／保証で保全しなければならない |
| 発行停止時のみの払い戻し | 未使用残高は、通常運用中に要求に応じて現金で払い戻されることは*ない* — 発行停止時のみ（これが資金移動業との法的区別である） |
| 終了手続き | 発行者が停止する場合、払い戻しプロセスは資金決済法の手続きに従わなければならない |
| 利用者間の譲渡なし | プリペイド残高は別の利用者に送ることができない（これが資金移動の残高との法的境界である） |
| 有効期限ルール | 発行者は有効期限を設定できる；有効期限後の未使用残高は発行者の規約の下で扱われる |

払い戻し不可の点が、**breakage の経済性** の主要な源泉である。インバウンド観光客が購入し使い切らないカード（典型的なケース：観光客が到着時に ¥3,000 の Suica カードを購入し、¥2,400, を使い、¥600 の未償還分に ¥500 のデポジットを加えて日本を離れる）は、時間とともに発行者の損益に帰属する breakage を生み出す。JR 東日本は歴史的に Suica の breakage の数値を明示的に開示していないが、インバウンド観光の量 — COVID 前にピークの約 32 百万に達し、2024 までに同等の水準に回復した — は、意味のある breakage の寄与を示唆する。

要求に応じて払い戻せないというルールが、交通系プリペイドを資金移動業の登録を発動させるのではなくプリペイドのカテゴリーに留めているものである理由については [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]] を参照。

## 加盟店受付のフットプリント交通系プリペイドカードは、交通改札を超えた相当な小売加盟店のフットプリントを持つ：

| 受付ゾーン | カバレッジ |
|---|---|
| 電車とバス | 10 IC スキーム全体で普遍的 |
| 駅周辺小売 | 非常に高い — コンビニ、キオスク、駅構内／駅近の自動販売機 |
| コンビニチェーン | 7-イレブン、ファミリーマート、ローソン、ミニストップで普遍的 |
| ドラッグストア、スーパー | 高い — ウエルシア、ツルハ、サンドラッグ、イオン（WAON も受付）、イトーヨーカドー（nanaco も） |
| ファストフード、カジュアルダイニング | 高い |
| 自動販売機 | 駅構内で高く、駅外でも増加中 |
| EC オンライン | 限定的 — モバイル Suica は一部の EC 加盟店向けに Suica インターネット決済をサポートするが、量は小さい |
| クロスボーダー | なし — 閉じた日本国内スキーム |

小売受付のフットプリントは、主に JR 東日本の Suica アクワイアラー側の運営と、PASMO 社の東京エリアの私鉄加盟店パートナーシップを通じて構築された。単一アクワイアラーのダイナミクスは、加盟店手数料が競合するアクワイアラーを通じてではなく、発行者と二者間で交渉されることを意味する（[[payments/japan-card-issuer-acquirer-processor-split|card class multi-アクワイアラ]] の構造と対比）。

## モバイル Suica のデポジット撤廃（2024）

JR 東日本は、より早い展開で Apple Pay 経由で発行されるモバイル Suica の ¥500 のデポジット要件を撤廃した；カードベースの Suica についてはデポジットが残る。カード Suica とモバイル Suica の間のこの分かれた取扱いは、「Suica」が単一の製品ではなく、フォームファクターに応じて異なるデポジット、払い戻し、有効期限、受付のルールを持つファミリーであることを思い出させる。同じことが PASMO と ICOCA のモバイルバリアントにも当てはまる。

## 加盟店手数料の経済性 — 単一アクワイアラーのダイナミクス各交通系プリペイドカードは **単一の主要アクワイアラー**（発行者エンティティ自身）を持つため、加盟店手数料の経済性は、カードクラスのマルチアクワイアラーのプライシングとは構造的に異なる：

| 観点 | 交通系プリペイド（Suica／PASMO／ICOCA 他） | カード（Visa／Mastercard／JCB） |
|---|---|---|
| アクワイアラーの選択 | 単一 — 発行者またはその認可アクワイアラー・パートナーとの契約 | 複数 — 加盟店が免許を持つアクワイアラーの中から選ぶ |
| 手数料開示 | 加盟店手数料スケジュールの公的開示は限定的 | JFTC／Payments Japan を介した公的ベンチマーク |
| 手数料ベンチマーキング | 困難 — アクワイアラー横断の比較がない | 可能 — マルチアクワイアラーの競争が規律する |
| ハードウェアコスト | 加盟店は FeliCa リーダーを設置しなければならない（¥30,000+） | PSP 提供の端末を介した控えめなコスト |
| タップあたりのコスト | MDR に埋め込まれている；加盟店のティアによって異なる | MDR ベース；PSP のトランザクションあたりの手数料が可能 |
| 交渉力 | 大手チェーンのレベルのみに集中 | 分散；小規模加盟店は公表レートを受け入れる |

単一アクワイアラーのダイナミクスは、**JFTC の加盟店手数料開示の圧力** が歴史的にまずカードクラスに集中した構造的な理由である — そこには規律する競争がより多くある。プリペイドクラスの手数料の透明性への圧力は、アクワイアラーとしての発行者を別々の手数料コンポーネントに容易に分解できないという構造的な障害に直面するであろう。

## Suica における JR 東日本の企業的利害

[[card-issuers/jr-east|JR East]] の Suica フランチャイズは、Suica を決済手段と顧客データプラットフォームの両方として使用するマルチセグメントの小売／駅／交通サービス事業の中に位置する。Suica のインストールベース — モバイル版への転換を含めて約 100 百万枚のカード — は、JR 東日本に日本最大級のキャプティブなプリペイド人口と、それに対応する交通、駅小売、および都市のコンビニとスーパーの商取引の一部にわたるデータシグナルを与える。企業戦略は Suica をスタンドアロンの決済サービスの損益としてではなく **戦略的なプラットフォーム資産** として扱っており、これが、JR 東日本がプリペイド手段の直接のスタンドアロンの収益化を要求することなく、モバイル Suica プラットフォーム開発、Suica Welcome の観光客アウトリーチ、JRE POINT 統合に投資することをいとわなかった理由の一つである。

## Suica 次世代プラットフォームの方向性

JR 東日本は、Suica のより長期的なプラットフォームの方向性を伝えてきた — 歴史的な FeliCa セキュアエレメントのオフラインタップモデルと、新しいサーバー管理のアカウント残高モデルの両方をサポートする Suica に向かう。動機には、歴史的な残高上限を緩めること、より複雑なマルチ発行者ルーティングをサポートすること、スマートフォンネイティブのレールとよりクリーンに統合すること、そして鉄道を超えたクロスモーダルなモビリティ製品（タクシー、自転車シェア、マイクロモビリティ等）の基盤を作ることが含まれる。この方向性は公的に議論されているが、完全な運用アーキテクチャはまだ定義されつつある；これは中期的に最も重要な日本のプリペイドスキームの構造的シフトの一つである。

## 発行者間協力のガバナンス

10 IC 相互利用スキーム全体の協力は、単一の支配的なルール設定者がいないマルチ発行者のガバナンスを伴う：

| ガバナンスの次元 | どのように機能するか |
|---|---|
| 相互利用スキームのルール | 10 の発行者間の業界合意；合意により改定される |
| Cyberne 決済システム | 鉄道業界のパートナーが運用；技術的変更は発行者横断で調整される |
| 共通のタップ受付標準 | FeliCa 仕様への準拠 + スキームルールの拡張 |
| 小売加盟店の相互運用性 | 発行者ごと；発行者は相互協定の下で自らの加盟店で他の発行者のカードを受け付けることができる |
| 新機能の展開（モバイル、デポジット変更、有効期限ルール） | 各発行者が独立して決定する；スキームレベルの新機能はマルチ発行者の合意を必要とする |

合意ベースのガバナンスパターンは、スキーム全体の変更（追加のカードへのモバイル鉄道展開の拡大など）がスキーム全体で同時にではなく段階的に展開する傾向がある理由の一つである — モバイル Suica はモバイル PASMO に 14 年先行した；ICOCA の Apple Pay サポートは 2023に来た。

## 関連

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

## Sources

- JR East: Suica official site and Mobile Suica site.
- PASMO Co Ltd: official site.
- JR West: ICOCA official site.
- JR Hokkaido: Kitaca site.
- JR Central: TOICA site.
- Meitetsu / Nagoya City Transportation: manaca site.
- Nishitetsu: nimoca site.
- JR Kyushu: SUGOCA site.
- FSA: prepaid policy portal and third-party prepaid issuer registry.
- METI: cashless payment policy portal.
- BOJ: payment and settlement systems portal.
- FeliCa Networks: technology / corporate page.

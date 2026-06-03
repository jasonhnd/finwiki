---
source: payments/jcb-three-party-operating-model
source_hash: 1a79013f46f90bb1
lang: ja
status: machine
fidelity: ok
title: "JCBの3者間ブランド運営モデル"
translated_at: 2026-06-02T16:33:58.463Z
---
# JCBの3者間ブランド運営モデル

## ウィキ上の位置づけ

この項目は [[payments/INDEX|payments index]] の配下に置く JCB 固有の運営モデルページであり、ブランド横断の役割マップである [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]]、4分類の比較ビューである [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] と対になる。JCB は、ブランドネットワーク、主たるアクワイアラー、イシュアーへのライセンス付与機能を一つの企業グループ内で継続的に組み合わせている唯一の国内ブランドである。そのため、役割分担は Visa / Mastercard の 4者間スキームの振る舞いとは実質的に異なる。手数料フローへの影響は [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]]、[[payments/japan-card-security-authentication-controls|card security and authentication controls]]（J-CSC / EMV 3-DS レイヤー）と合わせて読む。法人アンカーは [[JapanFG/jcb|JCB Co Ltd]] と [[JapanFG/jcb-international|JCB International]]、主要な提携イシュアーは [[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/rakuten-card|Rakuten Card]]、ブランドピアは [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]]、[[JapanFG/mastercard-japan|Mastercard Japan]]、[[JapanFG/american-express-international-japan|American Express International Japan]] である。

## 要約

JCB は、JCB Co Ltd がブランドネットワーク規則を保有し、主たるアクワイアラー業務を運営し、提携カード会社にイシュアー権をライセンスする **3者間ブランドモデル**を運営している。これは、ブランドネットワーク主体がイシュアーおよびアクワイアラーから分離され、それぞれからスキーム手数料やインターチェンジを得る Visa / Mastercard の **4者間スキーム**とは構造的に異なる。JCB の役割統合型モデルでは、JCB がアクワイアラーでもイシュアーでもあるオンユー取引では経済的なインターチェンジ支払いが発生せず、ブランドが加盟店ルールの執行を直接管理し、イシュアーライセンス先（MUFG NICOS、AEON、Rakuten Card、およそ 30  社のその他パートナー）はブランドピアになることなく JCB ネットワークへ接続する。JCB による 2023  のイシュアー側 / アクワイアラー側手数料配分率の開示は、日本の主要ブランドとして初めてのものであり、JCB が分割の両側を支配しているからこそ可視化できた。

## 3者間スキームと4者間スキームの違い

違いは、一つの取引に何人の当事者が関与するかではなく、ブランドネットワーク主体がイシュアー役割およびアクワイアラー役割から分離されているかどうかにある。

| スキーム種別 | ブランドネットワーク主体 | イシュアー主体 | アクワイアラー主体 | 例 |
|---|---|---|---|---|
| 4者間（オープン） | 分離 | 複数のライセンス済みイシュアー | 複数のライセンス済みアクワイアラー | Visa、Mastercard、UnionPay |
| 3者間（クローズド / 統合型） | 主たるイシュアー + アクワイアラーと同一グループ | ブランド主体自身 + ライセンス下の提携イシュアー | ブランド主体自身（および一部パートナー） | American Express、Diners Club、JCB（ハイブリッド層あり） |

JCB はハイブリッドな位置にある。主要アーキテクチャとしては **3者間スキーム**（ブランド = 主たるアクワイアラー = イシュアーライセンサー）を運営する一方、約 30  社の提携カード会社にイシュアー権をライセンスしており、3者間の基盤の上に部分的な4者間類似レイヤーを作っている。共同発行モデルでは、パートナーがライセンスのもとで JCB カードを発行するが、JCB Co Ltd 自身のブランドピアにはならない。

## 法人分担: JCB Co Ltd と JCB International

JCB Co Ltd と JCB International は、同じブランドの下で異なる事業面を扱う法人であり、相互に置き換えられる名称ではない。

| 法人 | 範囲 | 主な役割 |
|---|---|---|
| JCB Co Ltd（株式会社ジェーシービー） | 日本国内 | ブランド運営者 + 日本の主たるアクワイアラー + 日本側イシュアー + 提携会社向けイシュアーライセンス管理 |
| JCB International Co Ltd（株式会社ジェーシービー・インターナショナル） | 国際（日本国外） | 国際アクワイアリング / 加盟店ネットワーク + 国際イシュアーライセンス + クロスボーダー精算 |

日本で「JCB を受け入れる」加盟店は、JCB Co Ltd（またはそのアクワイアラー提携会社の一つ）と契約する。シンガポールや韓国で「JCB を受け入れる」加盟店は、JCB International（またはその国際アクワイアラー提携会社）と契約する。日本で [[JapanFG/mufg-nicos|MUFG NICOS]] が発行した JCB カードを持つカード会員が海外で利用する場合、イシュアーとしての JCB Co Ltd と、国際アクワイアリングネットワークの相手方としての JCB International の両方に接続する。この分担は、国際アクワイアラー側のコスト構造が日本国内と異なるため加盟店手数料の経済性に影響し、クロスボーダー紛争が JCB International のルールを通じて流れるためチャージバック / 紛争処理にも影響する。

## JCB ライセンス下のイシュアーエコシステム

JCB Co Ltd は、日本で JCB ブランドカードを自社の Visa / Mastercard 発行と並行して、または代替として発行する約 30  社の提携カード会社にイシュアー権をライセンスしている。これは JCB スキームの日本固有の主要特徴の一つである。提携イシュアーはブランドピアではなく、ブランドネットワークの議決権も持たないが、カード会員関係に関するイシュアー信用リスクを負う。

主な JCB ブランド提携イシュアーは次のとおり。

| 提携イシュアー | グループアンカー | 商品プロファイル |
|---|---|---|
| [[JapanFG/mufg-nicos\|MUFG NICOS]] | MUFG | MUFG / NICOS / DC JCB 共同ブランドカード。主要アクワイアラーでもある |
| [[JapanFG/aeon-financial-service\|AEON Financial Service]] | AEON | AEON JCB / AEON CARD Select JCB |
| [[JapanFG/rakuten-card\|Rakuten Card]] | Rakuten | Rakuten Card（JCB オプション） |
| JR 関連イシュアー | JR East、JR West 等 | VIEW JCB、J-WEST JCB |
| Credit Saison | Saison HD | SAISON JCB cards |
| Orient Corporation (Orico) | Orico | Orico JCB cards |
| JACCS | JACCS | JACCS JCB cards |
| FFG Card、Hokkoku Credit、地域銀行系関連会社 | 地域銀行 | 銀行チャネル JCB カード |
| Lifecard | Aiful group | Lifecard JCB |

提携イシュアーは、自社発行ポートフォリオについて JCB Co Ltd にイシュアーライセンス / ネットワーク手数料を支払い、[[payments/japan-consumer-credit-operator-comparison-matrix|consumer credit operator]] 義務に基づき自社でカード会員の与信審査を行い、債権を自社バランスシートに計上し、経済的イシュアーとしてチャージバック / 不正損失を負担する。JCB Co Ltd は、これと並行して自社直接発行ポートフォリオを保有する。

## 加盟店アクワイアリング管理と4者間スキーム

JCB はブランド機能と主たるアクワイアラー機能を組み合わせているため、加盟店ルールの執行は Visa / Mastercard の 4者間スキームと構造的に異なる。

| 観点 | JCB 3者間 | Visa / Mastercard 4者間 |
|---|---|---|
| 加盟店ルール設定者 | JCB Co Ltd（ブランド = 主たるアクワイアラー） | Visa / Mastercard のルールセット。各ライセンス済みアクワイアラーが執行 |
| 加盟店によるアクワイアラー選択 | 限定的。通常は JCB Co Ltd 直接、一部でパートナー（MUFG NICOS 等）との共同加盟店 arrangements | 広い。加盟店は複数のライセンス済みアクワイアラーから選ぶ |
| アクワイアラー間競争 | JCB 直接加盟店では低い | ライセンス済みアクワイアラー間で高い |
| 加盟店手数料の規律 | JCB との二者間交渉 | アクワイアラー側の競争で規律づけられる |
| ブランド手数料 | 内包型。アクワイアラー向けの別建てスキーム手数料はない | 明示型。アクワイアラーがブランドにスキーム手数料を支払う |
| インターチェンジ | オンユー（イシュアー = アクワイアラー）ではなし。提携発行カードでは適用 | 常にイシュアーとアクワイアラーの間で適用 |

「オンユーではインターチェンジなし」という特徴は、JCB 直接発行カード会員が JCB 直接加盟店で支払う場合、別法人間のインターチェンジとスキーム手数料配分ではなく、JCB Co Ltd 内の単一の内部会計処理になることを意味する。提携発行の JCB カード（例: MUFG NICOS 発行の JCB カードを持つカード会員が JCB 直接加盟店で支払う場合）では、JCB Co Ltd がアクワイアラーとして MUFG NICOS へイシュアーとしてインターチェンジを支払う。

## 2023 手数料配分率の開示

JCB の加盟店手数料におけるイシュアー側・アクワイアラー側の配分率開示に関する 2023-06-01 の METI / JFTC 共同発表は、3者間モデルの直接的な結果である。JCB Co Ltd は両端を支配しているため、法的に独立した複数のアクワイアラーと調整することなく機械的に分割を開示できる日本で唯一のブランドである。Visa / Mastercard は 2023 Payments Japan ロードマップで日本標準のインターチェンジレートを公表したが、個別アクワイアラーのイシュアー / アクワイアラー手数料配分は、4者間モデルでは中央から公表できない。JFTC の 2022  加盟店手数料報告書は、日本のカード決済における主要な競争上の懸念の一つとしてイシュアー / アクワイアラー分割の透明性不足を挙げ、JCB の開示は初期のベンチマークになった。

## 4者間が世界的に優勢でも3者間が残る理由

世界のキャッシュレス取扱高では4者間（Visa、Mastercard）が優勢であるにもかかわらず、3者間スキーム（Amex、Diners、JCB）が存続しているのは偶然ではない。3者間モデルには、特定の用途で構造的な利点がある。

| 利点 | 表れ方 |
|---|---|
| カード会員 + 加盟店関係の一気通貫管理 | ブランドがカードをプレミアム / ステータス商品として位置づけ、加盟店体験を一体的に管理できる |
| ルール変更にイシュアー / アクワイアラー間の政治調整が不要 | 複数アクワイアラーの承認を待たず、新商品機能や手数料変更を展開できる |
| プレミアム / 戦略アカウントでの直接加盟店関係 | ブランドが二者間条件を交渉し、戦略アカウントをアクワイアラー乗り換えから守れる |
| ロイヤルティ / ポイントプログラムを一法人内で明快に運営 | イシュアー側でカード会員リワードが分断されない |
| イシュアーとアクワイアラーの P&L 間で相互補助が可能 | ブランドはイシュアー側の与信 / リワード経済性を支えるため、アクワイアラー側マージン圧縮を吸収できる |

構造的な不利点は、Visa / Mastercard と比べた加盟店受入れ網の限定性、および自社発行外のイシュアーエコシステムの限定性である。これが、3者間ブランドが通常、万能決済ネットワークではなくプレミアム / 専門型として位置づけられる主な理由である。JCB は上記の**提携イシュアーモデル**によってこの課題に対応しており、Amex / Diners より大きなイシュアー網を獲得しつつ、3者間の管理アーキテクチャを保持している。

## 国内ブランドと国際ブランドの二重性

JCB は、日本市場で他のブランドが完全には共有しない特別な位置を占める。JCB は**日本国内ブランドであると同時に国際カードブランド**でもある。Visa / Mastercard / Amex / Diners はいずれも日本国内で事業を行う国際ブランドであり、UnionPay は日本で受け入れられる中国国内ブランドである。JCB は、**本社、ブランドアイデンティティ、主要なルール制定権限が日本にありながら、JCB International を通じて国際受入れネットワークを運営する唯一のブランド**である。

この点は複数の面に影響する。

| 観点 | JCB の二重ポジションが持つ意味 |
|---|---|
| インバウンド観光客の受入れ | JCB International の地域アクワイアラー構築を反映し、日本発行カードの中では韓国、台湾、香港、東南アジアの一部で相対的に受け入れられやすい |
| 国内規制対話 | METI / JFTC は JCB と直接対話できる。国際ブランドの場合、対話は日本国内代表拠点を通じる |
| 国内加盟店手数料開示 | JCB は日本国内の開示判断を単独で行える。国際ブランドはグローバル本部と調整する |
| プレミアム性と汎用性 | 日本・アジアでの JCB のプレミアム性は、ブランドとアクワイアラーの二重アーキテクチャに一部依存する |
| イシュアー共同ブランド提携 | 日本の発行パートナー（MUFG NICOS、AEON、Rakuten Card 等）は、JCB の国内の強さと Visa / Mastercard の国際的な汎用性を組み合わせ、JCB + Visa / JCB + Mastercard の二重ネットワークカードを発行することが多い |

## クロスボーダーアクワイアリング提携

JCB International は歴史的に、各市場で直接加盟店網を構築するよりも、提携を通じて国際アクワイアリング網を広げてきた。

| 地域 | アクワイアリング提携モデル |
|---|---|
| 北米 | Discover Global Network（提携 — JCB カードが Discover 加盟店で受け入れられ、その逆も可能） |
| 欧州 | UnionPay International および二者間アクワイアラー提携 |
| アジア（日本除く） | JCB International による直接加盟店開拓 + 現地アクワイアラー提携（例: 台湾の CTBC、韓国の KB Kookmin） |
| 中国 | UnionPay および直接提携 |

Discover 提携は特に重要であり、JCB International が米国の個別加盟店を自ら引き受けなくても、実質的な米国受入れを得られる。インバウンド観光客用途（中国、韓国、台湾からの訪日客が日本で JCB カードを使う場合）では、日本側の主たるアクワイアラーは JCB Co Ltd である。日本からのアウトバウンド観光客用途では、JCB International が渡航先国の提携ネットワークを通じて取引をルーティングする。

## 3者間運営モデルにおけるチャージバック / 紛争

JCB の3者間モデルにおけるカード会員紛争は、4者間スキームの紛争より構造的に単純な経路を通る。

| 紛争ステップ | JCB 3者間 | Visa / Mastercard 4者間 |
|---|---|---|
| カード会員が紛争を申告 | イシュアー（JCB Co Ltd 直接または提携イシュアー）へ | イシュアーへ |
| イシュアー調査 | イシュアーが JCB 紛争ルールに照らして評価 | イシュアーがブランドのチャージバックルールに照らして評価 |
| アクワイアラー通知 | オンユーでは直接内部ルート。提携発行では法人間ルート | ブランドネットワークを通じてアクワイアラーへ通知 |
| 加盟店通知 | JCB 直接アクワイアリングまたは提携アクワイアラーを通じる | ライセンス済みアクワイアラーを通じる |
| 解決 | オンユーでは JCB ルール内の内部仲裁。提携発行ではパートナー協力 | ブランド仲裁レイヤーへのエスカレーションが可能 |

この単純な経路はオンユー案件の解決速度における構造的な利点である。一方、カード会員側とイシュアー内部のアクワイアラー側で紛争取引の解釈が衝突する場合、独立したブランド仲裁がないことは制約になる。実務上、JCB は内部ガバナンス構造の中でブランド仲裁レイヤーに近い紛争処理インフラを構築している。

## JCB が関係する取引の調査チェックリスト

JCB 受入れを含む日本のカード取引または加盟店関係を分析する場合、手数料経済性、紛争責任、競争上の位置づけについて結論を出す前に、役割統合により複数のレイヤーを区別する必要がある。

1. イシュアーは JCB Co Ltd 直接か、提携イシュアー（[[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/rakuten-card|Rakuten Card]] 等）か。
2. アクワイアラーは JCB Co Ltd 直接か、JCB と協力する提携アクワイアラーか。
3. 取引はオンユー（同一のイシュアー / アクワイアラー / ブランド）か、オフユー（イシュアーとアクワイアラーが異なる）か。
4. 加盟店関係は JCB Co Ltd 契約下か、提携アクワイアラー契約下か。
5. 取引は国内（JCB Co Ltd が処理）か、国際（JCB International + 海外アクワイアラーパートナーが処理）か。
6. 商品に分割払い、リボ、BNPL 機能が含まれ、ブランドネットワーク上の扱いとは別に [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] の論点が生じるか。

これらの答えによって、手数料経済性、チャージバックの流れ、規制上の開示、紛争解決経路が決まる。これらはいずれも、JCB ブランドマークだけから推定することはできない。

## 関連項目

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[JapanFG/jcb]]
- [[JapanFG/jcb-international]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/mastercard-japan]]
- [[JapanFG/american-express-international-japan]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- JCB Co Ltd: ブランド、イシュアー、アクワイアラー事業領域の公開ページ。
- JCB Co Ltd: 加盟店規約の公開ページ。
- JCB Co Ltd: 企業グループ構造ページ。
- METI / JFTC: JCB 加盟店手数料配分率開示に関する 2023-06-01 共同発表。
- METI: 割賦販売法登録一覧（115条）— JCB Co Ltd、JCB International、提携イシュアー。
- JFTC: 2022 credit-card merchant-fee report.
- Payments Japan Association: 2023 cashless roadmap（インターチェンジ開示セクション）。

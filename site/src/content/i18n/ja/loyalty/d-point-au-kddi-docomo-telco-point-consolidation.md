---
source: loyalty/d-point-au-kddi-docomo-telco-point-consolidation
source_hash: e787578a033e7318
lang: ja
status: machine
fidelity: ok
title: "dポイント (NTT docomo) vs au PAY ポイント (KDDI) — 通信キャリア起点の日本ポイント統合"
translated_at: 2026-06-02T16:33:58.488Z
---
# dポイント (NTT docomo) vs au PAY ポイント (KDDI) — 通信キャリア起点の日本ポイント統合

## ウィキ上の位置づけ

この項目は [[loyalty/INDEX|loyalty INDEX]] の下に位置し、金融起点の [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] に対する通信キャリア起点の対応項目である。エコシステム横断マップは [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] は失効益と IFRS-15 処理、ポイントが重なるウォレット層は [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] とあわせて読む。

## 要約

日本の三大「共通ポイント」プログラムは、**アンカー事業**の軸で分かれる。

| プログラム | アンカー | 提携先 | 決済統合 | 金融グループ統合 |
|---|---|---|---|---|
| **d Point** | NTT docomo の通信加入者 | Lawson, McDonald's, Matsumoto Kiyoshi, ENEOS など | d払い（d-barai QR）, d Card credit, d Card Prepaid | NTT Docomo 金融部門 → [[JapanFG/ndfg|NDFG]]（SMBC 信託ルートを含む統合を予定） |
| **au PAY ポイント（旧 Ponta）** | KDDI / au 通信加入者 + Recruit Holdings 共同アンカー連合 | Lawson, GEO, Shell SS（出光昭和シェル）, Recruit Group services（じゃらん, Hot Pepper など） | au PAY（QR）, au PAY カード, au PAY プリペイドカード | [[JapanFG/au-fh|au FH (KDDI 金融持株)]] + [[JapanFG/au-payment|au Payment]] |
| **V Point** | SMBC Group 金融加入者 + CCC データベース | T-Card legacy network（CCC）, SMBC card 会員, Olive 口座 | Olive一体型, SMBC card, V NEAR PAY | [[JapanFG/smfg|SMFG]] / SMBC card |

通信キャリア起点の二つのプログラムと銀行起点の V Point の戦略的な違いは、**本人識別の起点**にある。

- **d Point / au PAY ポイント** は **携帯回線の本人性**（SIM、契約者、端末）から始まる。請求可能な加入者関係が防御力である。
- **V Point** は **銀行 / カードの本人性**（SMBC 口座、Olive、V Point Card）から始まる。金融商品関係が防御力である。

どちらのアンカーも、最終的には全国規模の QR 決済 + カード + 銀行 + 証券 + 保険バンドルという同じ下流面に収束しようとしている。ただし、顧客獲得ファネルの出発点が異なる。

## 通信キャリア起点モデル — 加入者本人性がもたらすもの

通信キャリアのアンカーは、純粋な金融サービスのアンカーにはない四つの資産を持つ。

1. **契約済み請求関係** — 毎月の口座振替 / クレジットカード徴収があり、決済成功率が高く解約率が低い。
2. **確認済みの本人性** — 携帯回線契約時に KYC が済んでおり、住所、氏名、本人確認書類が既に検証されている。
3. **端末に紐づくアトリビューション** — SIM、スマートフォン、アプリ環境が一つの顧客 ID に結び付く。
4. **日常利用のテレメトリー面** — 同意がある範囲で、位置情報、アプリ利用、閲覧文脈がマーケティング向けアトリビューションデータになる。

これら四つの資産は、**隣接金融商品**の顧客獲得ファネルを圧縮する。登録済みクレジットカードで毎月の携帯料金を支払っている docomo 加入者は、未接触の見込み客よりも、d Card 保有者、d払い利用者、dアカウント銀行顧客、NISA 口座開設者へ転換するコストがはるかに低い。

**au 側の対応構造**も似ている。au が旧 Ponta プログラム（現在は au PAY ポイントとして統合）をめぐって Recruit Holdings と連合を組むことで、通信以外の日常利用面（じゃらん旅行、Hot Pepper 飲食、Air Regi POS）が加わる。Recruit、CCC、au、KDDI の資本・提携の統合史は、KDDI と Recruit のプレスリリースで公開されている。

## 横並び比較

| 観点 | d Point（NTT docomo） | au PAY ポイント（KDDI） | V Point（SMBC × CCC） |
|---|---|---|---|
| アンカー | NTT docomo 通信 | KDDI au 通信 + Recruit 連合 | SMBC + CCC（T-Card legacy） |
| 現行形態の開始 | 2015 （docomo Premier Club から改称） | 2010 （Ponta 開始）→ 2024-12 に au PAY ポイントへ統合 | 2024-04-22 統合 V Point（T Point + SMBC V Point 統合） |
| 概算会員 ID 基盤 | 100M+ d-account ID（NTT docomo 公開開示） | 100M+ Ponta ID / au ID 合算（KDDI / Recruit 公開資料） | 130M+ 統合時点（CCC + SMBC 公開資料） |
| ウォレット統合 | d払い（QR） | au PAY（QR） | V NEAR PAY（NFC）+ Olive一体型 |
| カード | d Card / d Card GOLD（NTT docomo 発行） | au PAY カード（au Financial Service 発行） | SMBC card / Olive一体型（SMBC） |
| 銀行 | （NDFG 統合予定、現状は提携銀行） | au じぶん銀行（[[JapanFG/au-fh|au FH]] 子会社） | SMBC + Olive |
| 証券 | （SMBC 提携から NTT ルートへ向かう予定経路） | au カブコム証券（au FH 子会社） | SMBC日興証券 |
| 保険 | （NTT docomo 保険販売 + NDFG への巻き取り予定） | [[JapanFG/au-insurance|au 損害保険]] + au アセットマネジメント | 提携保険ルート |
| 主要小売 | Lawson, McDonald's, Matsumoto Kiyoshi, ENEOS | Lawson, GEO, 出光, Recruit ecosystem | T-card legacy network（Tsutaya, スーパーなど） |
| モバイルキャリア | NTT docomo（mobile, ahamo, irumo） | au, UQ mobile, povo | （なし） |

## Lawson 問題 — 重複する小売アンカー

d Point と au PAY ポイント（Ponta）はどちらも Lawson で使える。さらに Lawson と KDDI の提携（KDDI が 2024, に Lawson の支配的持分を取得、[[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]で文書化）により、Lawson は特に競争の激しいロイヤルティ面になっている。

- Lawson は歴史的に Ponta ポイントを付与してきた（Recruit / au 連合）。
- d Point も連合横断契約により Lawson で貯められる。
- KDDI の 2024 Lawson 買収後、KDDI の戦略的インセンティブは au PAY / Ponta 統合を優先する。d Point 付与は資本関係ではなく提携関係になる。

同じ小売面が二つの競合ポイントプログラムへポイントを付与するのは日本でも珍しく、ポイント連合が競争上の堀ではなくマーケティング手段として扱われてきた歴史を反映している。KDDI による Lawson 買収は、この重複を実際の戦略的緊張に変え始めている。

## NTT docomo — NDFG のフロントエンドとしての d Point

d Point プログラムは、NTT docomo が進めるより広い **金融持株会社** 構造の消費者向けレイヤーである。組み立てられている統合構造は [[JapanFG/ndfg|NDFG (NTT docomo financial group)]] を参照。戦略の流れは次のとおり。

1. **d-account** を、docomo、d払い、d Card、dアカウント銀行パートナー、dアカウント NISA パートナーを横断する単一顧客 ID とする。
2. **d Point** を、体験全体を結び付けるロイヤルティ通貨とする。
3. **NDFG 持株会社** を、銀行、証券、保険、信託子会社を一つの金融グループ傘下に統合する規制上の器とする。
4. **SMBC 信託ルート** を、NTT / SMBC 発表で公開された具体的な統合レバーの一つとする。

NTT の公開資料が示唆する最終形は、ポイント・決済・金融サービス統合バンドルで [[JapanFG/rakuten-fg|Rakuten FG]] や [[JapanFG/paypay-fg|PayPay FG]] と競う **通信キャリア起点の金融スーパーグループ** であり、基礎アンカーは **通信加入キャッシュフロー** である。

## KDDI — au FH 内の au Point

KDDI の並行構造は、金融面では NTT よりも **既に統合済み** に近い。[[JapanFG/au-fh|au FH (au Financial Holdings)]] は既に以下を保有する。

- au じぶん銀行（インターネット銀行、MUFG との旧提携経緯）
- au カブコム証券
- au 損害保険 / [[JapanFG/au-insurance|au 損害保険]]
- au アセットマネジメント
- [[JapanFG/au-payment|au Payment]]（au PAY の運営者）
- au Pay Card

au PAY ポイントプログラムは、これらの子会社を一つの顧客ファネル物語に結び付ける **ロイヤルティ通貨** として機能する。Ponta を通じた Recruit の連合提携は、その上に旅行、飲食、サービスなど通信以外の面を加える。

## V Point との対比 — 金融起点 vs 通信キャリア起点

V Point（[[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] 参照）との構造比較は、d Point と au PAY ポイントを読むうえで最も有益である。

| 質問 | 通信キャリア起点（d, au） | 金融起点（V Point） |
|---|---|---|
| 顧客 ID はどこから始まるか。 | 携帯契約申込 | 銀行 / カード申込 |
| 継続請求関係は何か。 | 毎月の携帯料金 | 毎月のカード明細 |
| KYC 経路は何か。 | SIM 購入時 | 口座開設時 |
| クロスセルの向きは何か。 | 通信 → 金融 → ウォレット | カード / 銀行 → ウォレット → 小売 |
| データグラフは何か。 | 位置情報 + アプリ + 通信利用 | 支出 + 口座フロー + CCC 小売データベース |
| 競争上の堀は何か。 | 携帯回線乗換えの粘着性 | 銀行口座乗換えの粘着性 |
| 規制アンカーは何か。 | 電気通信事業法 + 資金決済法（決済） | 銀行法 + 割賦販売法 + 資金決済法 |
| 金融グループの最終状態は何か。 | 通信キャリア起点の金融持株会社（[[JapanFG/ndfg|NDFG]], [[JapanFG/au-fh|au FH]]） | 銀行主導グループ（[[JapanFG/smfg|SMFG]] / Olive） |

二つのアンカー型は、カード、銀行、証券、保険、決済、小売メディアという同じ下流商品に収束する。しかし到達経路となる顧客獲得ファネルと、防御的な経済性は異なる。通信キャリアのアンカーは基礎サブスクリプションの解約率が低く、金融アンカーはアクティブ関係あたり収益が高い。

## 発行・付与メカニクス

二つの通信キャリア系プログラムの目に見える違いは、還元率や提携ネットワークといった消費者面にある。裏側の会計・運用メカニクスは構造的に似ている。

| メカニクス | d Point | au PAY ポイント |
|---|---|---|
| 自社サービスでの標準付与率 | docomo 料金 / d払い / d Card で 1% | au 料金 / au PAY / au PAY カードで 1% |
| 主要提携先でのボーナス付与 | 変動制、キャンペーン期に 1-3% 追加となることが多い | 変動制、キャンペーン期に 1-2% 追加となることが多い |
| プレミアムカード倍率 | d Card GOLD が docomo 料金に追加倍率を付ける | au PAY ゴールドカードが au 料金に倍率を付ける |
| 利用価値 | 多くの小売提携先および d払い / au PAY で 1 point = 1 yen | 同じ |
| 有効期限方針 | 通常ポイントは一定期間後に失効することが多く、キャンペーンポイントは有効期限が短いことが多い | 同じ |
| 移転可能性 | ルール内で限定的な個人間移転 | 限定的 |
| 負債会計 | 発行時にロイヤルティ負債を計上し、失効益を見積もって IFRS-15  / J-GAAP に基づき期間配分して取り崩す | 同じ |

ポイント負債の論点、すなわち期限切れ / 失効ポイントを収益として戻すべきか、どの比率で戻すべきかは、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に記載される重要な会計問題である。NTT docomo と KDDI はどちらも連結貸借対照表上に重要なロイヤルティ負債を抱え、失効率の仮定は報告収益に直接影響する。

## 連合提携先メカニクス

どの提携先がどのポイントを受け入れるか、誰が発行原資を負担するか、誰が償還を負担するかという連合構造は、あらゆる共通ポイントプログラムの運用中核である。

| 観点 | d Point | au PAY ポイント |
|---|---|---|
| 発行原資 | NTT docomo または提携加盟店が、その場所で発行されるポイントを負担する | KDDI または提携加盟店が、その場所で発行されるポイントを負担する |
| 償還原資 | ポイント利用時点の提携加盟店が負担し、連合内でネット精算する | 同じ |
| 提携先別経済条件 | 二者間で交渉され、大型提携先は優遇条件を得る | 同じ |
| 提携カード | d Card が一部提携先と提携（例: d Card Lawson PONTA） | au PAY カードが一部提携先と提携 |
| 精算サイクル | docomo と提携先の間で定期的にネット精算 | KDDI と提携先の間で定期的にネット精算 |
| 連合横断交換 | 一部方向で可能（例: d Point ↔ JAL マイル）、固定レート | 可能（例: au PAY ポイント ↔ JAL マイル）、固定レート |

提携先が連合に参加する経済的インセンティブは、提携先負担のポイント原資と引き換えに **追加来店と追加買上額** を得ることにある。この計算は、追加来店がポイント負担コストを上回ると提携先が確信できる場合にのみ成立する。そのため、コンビニ、ドラッグストア、燃料のような高頻度 / 衝動購買型小売が最も受け入れやすく、そのセグメントの争奪が最も激しい。

## 戦略的な読み方

- **通信キャリア起点のポイントプログラムは、日本で最もコスト効率の高いクロスセル基盤である**。携帯契約が KYC、顧客獲得、継続請求レールの費用を既に負担しており、ロイヤルティ層は支払済みの関係を収益化するためである。
- **d Point / au PAY ポイントの競争は数十年単位の争いである**。両アンカーは全国展開し、統合金融持株を持ち、どちらにも構造的なコスト劣位がない。PayPay のエコシステム（[[JapanFG/paypay-fg|PayPay FG]]）は別の出発点（携帯回線アンカーではなく LY / SoftBank / Yahoo データ資産）から運営され、第三の軸で競争する。
- **コード決済浸透は、より深い金融グループ競争の可視層である**。ウォレット側の見方は [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] を参照。d払いと au PAY は、主に取引単位データを取得し、カード / 銀行 / 保険 / 証券へのクロスセル基盤を広げるために存在する。
- **ポイント負債会計の論点は通信キャリア規模でより重要になる**。d Point と au PAY ポイントはいずれも数百億円規模の未払ロイヤルティ負債を抱え、重要な失効率仮定を持つ。IFRS-15  / J-GAAP の処理は [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に記載される。
- **小売買収（Lawson、ENEOS、Matsumoto Kiyoshi）はもはやコモディティではない**。KDDI の [[retail/lawson-kddi-retail-finance|Lawson]] の動きは、複数ポイント提携のコスト基盤を変える。NTT docomo が小売アンカーに対して同様の資本施策を取るか注視する。

## 関連項目

- [[loyalty/INDEX|loyalty INDEX]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[JapanFG/ndfg|NDFG (NTT docomo financial group)]]
- [[JapanFG/au-fh|au FH (au Financial Holdings)]]
- [[JapanFG/au-payment|au Payment]]
- [[JapanFG/au-insurance|au 損害保険]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]
- [[retail/INDEX|retail INDEX]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[INDEX|FinWiki index]]

## 出典

- d Point Club 公式サイト: https://dpoint.docomo.ne.jp/
- au PAY ポイント（旧 Ponta）official: https://aupay.wallet.auone.jp/contents/static/point/
- KDDI corporate news releases（au FH consolidation, Lawson acquisition）: https://www.kddi.com/corporate/newsrelease/
- NTT docomo プレスリリース（NDFG 統合発表）: https://www.docomo.ne.jp/info/news_release/
- Recruit Holdings ニュースルーム（Ponta の歴史と au 連合）: https://www.recruit.co.jp/newsroom/

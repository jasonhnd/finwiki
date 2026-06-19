---
source: loyalty/d-point-au-kddi-docomo-telco-point-consolidation
source_hash: 66b30eea4589ecf4
lang: ja
status: machine
fidelity: ok
title: "dポイント（NTT docomo）vs au PAY ポイント（KDDI） — 通信キャリアを起点とする日本のポイント統合"
translated_at: 2026-06-19T06:09:18.030Z
---

# dポイント（NTT docomo）vs au PAY ポイント（KDDI） — 通信キャリアを起点とする日本のポイント統合

## Wiki ルート

このエントリは [[loyalty/INDEX|loyalty INDEX]] の下に位置し、金融を起点とする [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] の通信キャリア起点版である。クロスエコシステムマップについては [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]、ブレッケージ / IFRS-15 の処理については [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]、そしてポイントがその上に乗るウォレット層オーバーレイについては [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] と併せて読まれたい。

## TL;DR

日本の三大「共通ポイント」プログラムは、**アンカー事業**の軸に沿って分かれる：

| プログラム | アンカー | 連合パートナー | 決済統合 | 金融グループ統合 |
|---|---|---|---|---|
| **d Point** | NTT docomo 通信契約者 | ローソン、マクドナルド、マツモトキヨシ、ENEOS 等 | d払い（d-barai QR）、d Card クレジット、d Card プリペイド | NTT Docomo 金融部門 → [[megabanks/ndfg|NDFG]]（SMBC 信託ルートを含む計画中の統合） |
| **au PAY ポイント（旧 Ponta）** | KDDI / au 通信契約者 + リクルートホールディングス共同アンカーの連合 | ローソン、GEO、Shell SS（出光昭和シェル）、リクルートグループのサービス（じゃらん、Hot Pepper 等） | au PAY（QR）、au PAY カード、au PAY プリペイドカード | [[megabanks/au-fh|au FH (KDDI 金融持株)]] + [[payment-firms/au-payment|au Payment]] |
| **V Point** | SMBC グループ金融契約者 + CCC データベース | T-Card レガシーネットワーク（CCC）、SMBC カード保有者、Olive 口座 | Olive 一体型、SMBC カード、V NEAR PAY | [[megabanks/smfg|SMFG]] / SMBC カード |

2 つの通信キャリア起点プログラムと銀行起点の V Point の戦略的な違いは、**アイデンティティの起源**にある：

- **d Point / au PAY ポイント** は **モバイル回線アイデンティティ**（SIM、契約者、デバイス）から始まる — 課金可能な契約者関係がモートである。
- **V Point** は **銀行 / カードアイデンティティ**（SMBC 口座、Olive、V Point Card）から始まる — 金融商品の関係がモートである。

いずれのアンカータイプも、同じ下流の面に収斂しようとする：全国的な QR 決済 + カード + 銀行 + 証券 + 保険のバンドルである。両者は顧客獲得ファネルの異なる端から始まっている。

## 通信キャリア起点モデル — 契約者アイデンティティが買うもの

通信キャリアのアンカーは、純粋な金融サービスのアンカーが欠く 4 つの資産をもたらす：

1. **契約済みの課金関係** — 月次の口座振替 / クレジットカード集金で、高い決済成功率と低い解約率
2. **検証済みの個人アイデンティティ** — モバイル回線契約時に KYC 完了；住所、氏名、本人確認書類はすでに検証済み
3. **デバイスを起点とするアトリビューション** — SIM、スマートフォン、アプリ環境はすべて 1 つの顧客 ID に紐づく
4. **日常利用のテレメトリ面** — ロケーション、アプリ利用、ブラウジングコンテキスト（同意が許す範囲で）がマーケティングのアトリビューションデータになる

これら 4 つの資産は、**隣接する金融商品**の顧客獲得ファネルを圧縮する：登録済みのクレジットカードですでに月次の電話料金を支払っている docomo 契約者は、コールド・プロスペクトよりも、d Card 保有者、d払いユーザー、d-account 銀行顧客、または NISA 口座開設者へと転換させるのがはるかに安価である。

**au サイドの対応物**は構造的に類似している — レガシー Ponta プログラム（現在は au PAY ポイントとして統合）をめぐる au とリクルートホールディングスの連合は、追加の非通信キャリア系の日常利用面（じゃらん旅行、Hot Pepper レストラン、Air Regi POS）をもたらす。統合の歴史 — リクルート・CCC・au・KDDI のクロス出資の動き — は、KDDI とリクルートのプレスリリースを通じて公的に文書化されている。

## サイドバイサイド比較

| 次元 | d Point（NTT docomo） | au PAY ポイント（KDDI） | V Point（SMBC × CCC） |
|---|---|---|---|
| アンカー | NTT docomo 通信キャリア | KDDI au 通信キャリア + リクルート連合 | SMBC + CCC（T-Card レガシー） |
| ローンチ（現行形態） | 2015 （docomo Premier Club からリブランド） | 2010 （Ponta ローンチ）→ 2024-12 au PAY ポイントに統合 | 2024-04-22 統合 V Point（T Point + SMBC V Point 合併） |
| 概算会員 ID 基盤 | 100M+ d-account ID（NTT docomo 公開開示） | 100M+ Ponta ID / au ID 合計（KDDI / リクルート公開資料） | 130M+ 統合（統合時の CCC + SMBC 公開資料） |
| ウォレット統合 | d払い（QR） | au PAY（QR） | V NEAR PAY（NFC）+ Olive 一体型 |
| カード | d Card / d Card GOLD（NTT docomo 発行） | au PAY カード（au Financial Service 発行） | SMBC カード / Olive 一体型（SMBC） |
| 銀行 | （NDFG 統合計画中；現在はパートナー銀行） | au じぶん銀行（[[megabanks/au-fh|au FH]] の子会社） | SMBC + Olive |
| 証券 | （SMBC アライアンス経由で NTT ルートへの計画ルート） | au カブコム証券（au FH の子会社） | SMBC日興証券 |
| 保険 | （NTT docomo 保険販売 + NDFG ロールアップ計画中） | [[non-life-insurers/au-insurance|au 損害保険]] + au アセットマネジメント | パートナー保険ルート |
| 小売フラッグシップ | ローソン、マクドナルド、マツモトキヨシ、ENEOS | ローソン、GEO、出光、リクルートエコシステム | T-card レガシーネットワーク（ツタヤ、スーパー等） |
| モバイルキャリア | NTT docomo（モバイル、ahamo、irumo） | au、UQ mobile、povo | （なし） |

## ローソン問題 — 重複する小売アンカー

d Point と au PAY ポイント（Ponta）はいずれもローソンで利用でき、ローソンの KDDI アライアンス（KDDI は 2024, にローソンの支配的持分を取得、[[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]] に文書化）により、ローソンは特に争われるロイヤルティ面となっている：

- ローソンは歴史的に Ponta ポイントを付与してきた（リクルート / au 連合）
- d Point はクロス連合契約を通じてローソンで貯められる
- KDDI の 2024 のローソン買収後、KDDI の戦略的インセンティブは au PAY / Ponta 統合を優先する；d Point の獲得可能性は資本関係ではなくパートナーシップ関係になる

同じ小売面が 2 つの競合するポイントプログラムに払い出すことは日本では異例であり、ポイント連合が競争上のモートではなくマーケティングツールとして扱われてきたという歴史的事実を反映している。KDDI のローソン買収は、これらの重複を真の戦略的緊張にし始めている。

## NTT docomo — NDFG のフロントエンドとしての d Point

d Point プログラムは、**金融持株グループ**構造に向けた NTT docomo のより広範な推進の消費者向け層である — 組み立てられている統合構造については [[megabanks/ndfg|NDFG (NTT docomo financial group)]] 参照。戦略的な弧：

1. **d-account** を docomo、d払い、d Card、d-account 銀行パートナー、d-account NISA パートナーにまたがる単一の顧客 ID として
2. **d Point** を体験を結びつけるロイヤルティ通貨として
3. **NDFG 持株会社** を、銀行・証券・保険・信託子会社を 1 つの金融グループの傘下に統合する規制上のラッパーとして
4. **SMBC 信託ルート** を、NTT / SMBC の発表で公的に開示された 1 つの具体的な統合レバーとして

NTT の公開資料が示唆する最終状態は、**通信キャリアを起点とする金融スーパーグループ**であり、統合されたポイント・決済・金融サービスのバンドリングにおいて [[payment-firms/rakuten-fg|Rakuten FG]] と [[megabanks/paypay-fg|PayPay FG]] に対抗し、**通信契約のキャッシュフローを基盤のアンカーとする**。

## KDDI — au FH 内の au Point

KDDI の並行構造は、金融サイドで NTT よりも**すでに統合されている**。[[megabanks/au-fh|au FH (au Financial Holdings)]] はすでに以下を保有する：

- au じぶん銀行（au Jibun Bank — インターネット銀行、MUFG レガシーアライアンス）
- au カブコム証券（au Kabu.com Securities）
- au 損害保険 / [[non-life-insurers/au-insurance|au 損害保険]]
- au アセットマネジメント
- [[payment-firms/au-payment|au Payment]]（au PAY の運営者）
- au Pay Card

au PAY ポイントプログラムは、これらすべての子会社を 1 つの顧客ファネルの物語に結びつける**ロイヤルティ通貨**として位置する。リクルートの Ponta を通じた連合パートナーシップが、その上に非通信キャリア系の面（旅行、ダイニング、サービス）を追加する。

## V Point との対比 — 金融起点 vs 通信キャリア起点

V Point との構造的比較（[[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] 参照）は、d Point と au PAY ポイントの両方を読み解く最も有益な方法である：

| 問い | 通信キャリア起点（d、au） | 金融起点（V Point） |
|---|---|---|
| 顧客 ID はどこに起源するか？ | モバイル契約のサインアップ | 銀行 / カードの申込 |
| 経常的な課金関係は何か？ | 月次の電話料金 | 月次のカード明細 |
| KYC の経路は何か？ | SIM 購入時 | 口座開設時 |
| クロスセルの方向は何か？ | 通信キャリア → 金融 → ウォレット | カード / 銀行 → ウォレット → 小売 |
| データグラフは何か？ | ロケーション + アプリ + 通信キャリア利用 | 支出 + 口座フロー + CCC 小売データベース |
| 競争上のモートは何か？ | モバイル回線スイッチングの粘着性 | 銀行口座スイッチングの粘着性 |
| 規制上のアンカーは何か？ | 電気通信事業法 + 資金決済法（決済について） | 銀行法 + 割賦販売法 + 資金決済法 |
| 金融グループの最終状態は何か？ | 通信キャリア起点の金融持株（[[megabanks/ndfg|NDFG]]、[[megabanks/au-fh|au FH]]） | 銀行主導グループ（[[megabanks/smfg|SMFG]] / Olive） |

2 つのアンカータイプは同じ下流商品（カード、銀行、証券、保険、決済、リテールメディア）に収斂するが、異なる獲得ファネルを通じてそこに到達し、異なる防衛的エコノミクスを持つ。通信キャリアのアンカーは基盤となる契約の低い解約率を享受し、金融のアンカーはアクティブな関係あたりの高い収益を享受する。

## 発行と付与のメカニクス

2 つの通信キャリアプログラムの目に見える違いは、消費者の面（キャッシュバック率、パートナーネットワーク）にある。その下にある会計および運用のメカニクスは構造的に類似している：

| メカニクス | d Point | au PAY ポイント |
|---|---|---|
| 自社サービスでの標準付与率 | docomo 請求 / d払い / d Card で 1% | au 請求 / au PAY / au PAY カードで 1% |
| フラッグシップパートナーでのボーナス付与 | 変動、プロモ期間にしばしば 1-3%追加 | 変動、プロモ期間にしばしば 1-2%追加 |
| プレミアムカード乗数 | d Card GOLD は docomo 請求にさらなるポイント乗数を追加 | au PAY ゴールドカードは au 請求に乗数を追加 |
| 償還価値 | ほとんどの小売パートナーおよび d払い / au PAY で 1 ポイント = 1 円 | 同じ |
| 有効期限ポリシー | 標準ポイントは通常指定期間後に失効；キャンペーンポイントはしばしばより短い有効期限 | 同じ |
| 移転可能性 | 限定的な個人間移転（ルール内で） | 限定的 |
| 負債会計 | 発行時にロイヤルティ負債を計上；ブレッケージは IFRS-15 / J-GAAP に従って推定され時間とともに取り崩される | 同じ |

ポイント負債の問題 — 失効 / 没収されたポイントを収益（ブレッケージ）として取り崩すべきか、どの率でか — は、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に文書化された非自明な会計問題である。NTT docomo と KDDI はともに連結バランスシート上に多額のロイヤルティ負債を抱えており、ブレッケージ率の前提は報告収益に直接影響する。

## 連合パートナーのメカニクス

連合構造 — どのパートナーがどのポイントを受け入れるか、誰が発行を負担するか、誰が償還を支払うか — は、あらゆる共通ポイントプログラムの運用上の核である。

| 側面 | d Point | au PAY ポイント |
|---|---|---|
| 発行の資金負担 | NTT docomo またはパートナー加盟店が自店で発行されたポイントを負担 | KDDI またはパートナー加盟店が自店で発行されたポイントを負担 |
| 償還の資金負担 | 償還時点でパートナー加盟店が負担；連合全体でネット決済 | 同じ |
| パートナー別エコノミクス | 二者間で交渉；大規模パートナーは優遇条件を得る | 同じ |
| コブランドカード | d Card は選定パートナーとコブランド（例：d Card Lawson PONTA） | au PAY カードは選定パートナーとコブランド |
| 決済サイクル | docomo とパートナー間の定期的なネット決済 | KDDI とパートナー間の定期的なネット決済 |
| クロス連合交換 | 一部の方向で許可（例：d Point ↔ JAL マイル）固定レートで | 許可（例：au PAY ポイント ↔ JAL マイル）固定レートで |

パートナーが連合に参加する経済的インセンティブは、パートナーが負担するポイント発行と引き換えに得る**増分のトラフィックと増分のバスケットサイズ**である。この算術は、増分のトラフィックがポイント負担コストを上回るとパートナーが確信できる場合にのみ成立する — だからこそ高頻度 / 衝動購買の小売（コンビニ、ドラッグストア、燃料）が最も受容的なセグメントであり、そうしたセグメントをめぐる競争が最も激しいのである。

## 戦略的な読み解き

- **通信キャリア起点のポイントプログラムは日本で最もコスト効率の高いクロスセルプラットフォームである**。なぜならモバイル契約が KYC、顧客獲得、そして経常的な課金レールの費用を負担しているからである；ロイヤルティ層はすでに費用が支払われた関係をマネタイズする。
- **d Point / au PAY ポイントの競合は数十年にわたる争いである**。なぜなら両アンカーは全国的なフットプリントを持ち、両者は統合された金融持株を持ち、いずれも構造的なコスト上の不利を持たないからである。PayPay のエコシステム（[[megabanks/paypay-fg|PayPay FG]]）は異なる出発点（モバイル回線アンカーではなく LY / SoftBank / Yahoo のデータ資産）から運営され、第三の軸で競争する。
- **コード決済の浸透は、より深い金融グループ競争の目に見える層である** — ウォレットサイドの見方については [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] 参照；d払いと au PAY はいずれも、主としてトランザクションレベルのデータを捕捉し、カード / 銀行 / 保険 / 証券へのクロスセル基盤を広げるために存在する。
- **ポイント負債の会計問題は通信キャリアの規模ではより重要である** — d Point と au PAY ポイントはいずれも数百億円規模の計上済みロイヤルティ負債を、相当なブレッケージ前提とともに抱えている。IFRS-15 / J-GAAP の処理は [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に文書化されている。
- **小売の獲得（ローソン、ENEOS、マツモトキヨシ）はもはやコモディティではない** — KDDI の [[retail/lawson-kddi-retail-finance|Lawson]] の動きは、マルチポイントパートナーシップのコストベースを変える。NTT docomo による小売アンカーへの同様の資本の動きに注目されたい。

## 関連

- [[loyalty/INDEX|loyalty INDEX]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[megabanks/ndfg|NDFG (NTT docomo financial group)]]
- [[megabanks/au-fh|au FH (au Financial Holdings)]]
- [[payment-firms/au-payment|au Payment]]
- [[non-life-insurers/au-insurance|au 損害保険]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]
- [[retail/INDEX|retail INDEX]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[INDEX|FinWiki index]]

## 出典

- d Point Club 公式サイト：https://dpoint.docomo.ne.jp/
- au PAY ポイント（旧 Ponta）公式：https://aupay.wallet.auone.jp/contents/static/point/
- KDDI コーポレートニュースリリース（au FH 統合、ローソン買収）：https://www.kddi.com/corporate/newsrelease/
- NTT docomo プレスリリース（NDFG 統合発表）：https://www.docomo.ne.jp/info/news_release/
- リクルートホールディングス ニュースルーム（Ponta の歴史と au 連合）：https://www.recruit.co.jp/newsroom/

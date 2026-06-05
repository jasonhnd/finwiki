---
source: business/rakuten-group-mobile-finance-bundling-case
source_hash: c0d5e2c325b5463f
lang: ja
status: machine
fidelity: ok
title: "楽天グループのモバイル・金融バンドリング事例 — カード / 銀行 / 証券の利益が通信事業のキャッシュバーンを内部補助する"
translated_at: 2026-06-02T11:47:37.282Z
---

# 楽天グループのモバイル・金融バンドリング事例 — カード / 銀行 / 証券の利益が通信事業のキャッシュバーンを内部補助する

## ウィキ上の位置づけ

このエントリは上場企業の戦略事例として [[business/INDEX|business INDEX]] の下に位置する。逆に通信が金融を補助する対照パターンについては [[business/ntt-docomo-d-point-telco-finance-case|NTT Docomo d-Point telco-finance case]] と、インターネットから金融へのコングロマリットの並行例については [[business/gmo-internet-group|GMO Internet Group]] と、対照的な独立系 FG の経路については [[business/kitao-yoshitaka-sbi-independent-strategy-case|Kitao Yoshitaka SBI independent strategy]] と併せて読むこと。エンティティのカバレッジについては [[business/INDEX|business INDEX]] と組み合わせること。

## 要約

楽天グループ(TSE 4755)は、**収益性の高い金融子会社が、深刻な赤字のモバイルネットワーク事業者を内部補助する**コングロマリットとして運営されている。中核エンジン — [[card-issuers/rakuten-card|Rakuten Card]](取扱高で日本最大のクレジットカード発行体)、[[JapanFG/rakuten-bank|Rakuten Bank]](日本最大のインターネット銀行、2023-04に IPO)、[[securities-firms/rakuten-securities|Rakuten Securities]](上位 3 のオンライン証券)、楽天保険 / 楽天 Edy — が、楽天モバイルのネットワーク展開に資金を供給する営業キャッシュを生み出す(2019以降の累積損失は ¥1兆超と推定)。

2023-2025 の資本再編の動き — 楽天銀行 IPO、楽天証券のみずほへの一部売却、複数の普通社債 / 転換社債の発行 — は、モバイル / EC / 決済 / 金融のスーパーアプリが単独の競合には得られないネットワーク効果を複利化できる、というコングロマリットの論理を依然として維持しようとしつつ、スローモーションでデレバレッジを進める親会社を浮き彫りにする。

## 1. グループアーキテクチャ

| セグメント | 代表的なエンティティ | 利益の状況(2024-2025) |
|---|---|---|
| インターネットサービス | 楽天市場(EC)、楽天トラベル | 収益性が高く、成熟した成長 |
| モバイル | 楽天モバイル(RMK)、楽天 Symphony | 大幅な営業損失、インフラ設備投資 |
| 金融 | [[card-issuers/rakuten-card|Rakuten Card]]、[[JapanFG/rakuten-bank|Rakuten Bank]]、[[securities-firms/rakuten-securities|Rakuten Securities]]、楽天ペイ | 高収益;成長 + クロスセルエンジン |
| 保険 | 楽天生命、楽天損保、楽天インシュアランス HD | わずかに黒字 |
| ロイヤルティ | 楽天ポイント(~120百万会員) | セグメント横断の接着剤 |

構造的パターン:金融セグメントの利益がモバイルセグメントの損失を支払い、親会社の株式が資本調達を通じてタイミングのブリッジを提供する。

## 2. モバイルのキャッシュバーン — 内部補助の制約

楽天モバイルは 2019-2020 に第 4のキャリアとして日本の MNO 市場に参入し、ソフトウェア仮想化されたコア(Open RAN)を用いて自社の 4G/5G ネットワークをゼロから構築した。これには次が必要だった:

- 基地局展開にわたる数兆円規模の設備投資
- 顧客獲得コスト(無料枠のプロモーション価格)
- 加入者基盤が 5-6百万ユーザー(楽天の開示による推定損益分岐規模)を下回る間の営業損失

2024-2025, までに楽天モバイルは ~7-8百万回線に達したが、依然として損失を出していた。2019 以降の累積モバイルセグメント損失は、広く ¥1兆超と推定されている。

## 3. 金融の利益エンジン

| 子会社 | 役割 | 内部補助への寄与 |
|---|---|---|
| **[[card-issuers/rakuten-card|Rakuten Card]]** | 日本で取引高第 1 位の発行体 | 加盟店インターチェンジ + リボ払い金利 + 楽天ポイントエンジン;年間取扱高は ¥20兆超と推定 |
| **[[JapanFG/rakuten-bank|Rakuten Bank]]** | 第 1 位のインターネット銀行、2023-04 に IPO(TSE 5838) | 純金利収入、手数料収入;IPO 時の一部売却で現金を調達 |
| **[[securities-firms/rakuten-securities|Rakuten Securities]]** | 上位 3 のオンライン証券(SBI、松井に対して) | 売買手数料、信用貸付;みずほへの一部売却 |
| 楽天ペイ / 楽天 Edy | QR コード + プリペイド電子マネー | キャッシュレスエコシステムの連携、[[payments/cashless-jp-landscape|cashless landscape]] 参照 |
| 楽天インシュアランス HD | 生保 + 損保 | より小さな内部補助への寄与 |

経済的なフライホイール:EC がカード取引を駆動する → カード取引がポイント発行を駆動する → ポイントのロックインが銀行預金獲得 + 証券口座開設を駆動する → それらすべてがモバイルに資金を供給する手数料 / 金利の利益を生み出す。

## 4. 2023-2025 の資本再編の動き

| 日付 | アクション | 目的 |
|---|---|---|
| 2023-04 | 楽天銀行 IPO(TSE 5838) | 現金調達、株式価値の顕在化、支配権の維持 |
| 2023-Q4 | 楽天証券のみずほへの一部売却(~19.99%) | みずほの戦略的出資 + 親会社への現金 |
| 2024-Q1 | 複数の社債発行(普通 + 転換) | 社債の満期の壁をリファイナンス |
| 2024 | 楽天 Symphony(5G ソフトウェアベンダー)の外部顧客獲得 | 楽天外でのテックスタックの収益化 |
| 2024-2025 | 楽天カードの債務発行 / 証券化 | 運転資本の最適化 |
| 2025 | モバイル加入者の継続的成長、(依然マイナスだが)縮小したモバイル損失 | 損益分岐への接近 |

各資本再編は、内部補助のチェーンを断ち切ることなく、コングロマリットを純損失から純黒字へと転換することへさらに近づける。

## 5. 内部補助パターンの比較

| グループ | 内部補助の方向 | フロー例 |
|---|---|---|
| **楽天** | 金融 → モバイル(本事例) | カード / 銀行 / 証券の利益がモバイル損失を埋める |
| **NTT ドコモ** | 通信 → 金融(次のエントリ) | モバイル加入者基盤が d ポイント / d カード / d 払いの成長を駆動、[[business/ntt-docomo-d-point-telco-finance-case|d-Point case]] 参照 |
| **KDDI / au** | 通信 → 金融 | au PAY / au じぶん銀行 / au 保険がモバイルプランにバンドルされる |
| **SoftBank / PayPay** | 通信 + 資本 → 金融 | SoftBank の後ろ盾を伴う [[megabanks/paypay-fg|PayPay FG]]、[[megabanks/paypay-fg|PayPay FG]] 参照 |
| **GMO インターネットグループ** | インターネットインフラ → 金融 | インターネット基盤の上にレイヤー化された [[business/gmo-internet-group|GMO Internet Group]] の決済 / 銀行 / FX |
| **SBI ホールディングス** | 独立戦略 | [[business/kitao-yoshitaka-sbi-independent-strategy-case|Kitao Yoshitaka SBI]] — コングロマリットの内部補助なし、金融のピュアプレー |

楽天は補助の方向において独特である:金融の利益が赤字の通信ユニットを補助しており、これはグローバルなほとんどのスーパーアプリ構造の逆である。

## 6. なぜ内部補助が続くのか

1. **ネットワーク効果のテーゼ** — モバイル + EC + カード + 銀行 + 証券 + トラベル + 保険 + ポイントが一つの ID 上にあることで、単独の競合には得られない複利効果が可能になる。(実証的証拠はまちまち。)
2. **埋没した設備投資** — モバイルネットワークの構築コストは大部分が埋没している;放棄すれば資産を減損し、資本規律の欠如を示すことになる
3. **ロイヤルティ / ブランドの結束** — 単一通貨としての楽天ポイントがサービス横断でユーザーを結びつける;モバイルはポイントエンゲージメントを駆動する「常時オン」のサービスである
4. **創業者のコミットメント** — 三木谷浩史(CEO / 創業者)はモバイルの成功に複数年にわたり公にコミットしている
5. **オプショナリティ** — モバイルが損益分岐に加えて利益に達すれば、連結エンティティのバリュエーション倍率は大幅に拡大する

## 7. 内部補助モデルへのリスク

- **金融子会社のキャッシュフロー途絶** — カード / 銀行 / 証券への規制的または競争的なショック(例:FSA による自己資本規制の厳格化 — [[exchanges/fsa-vasp-registration-system|FSA reach]] テンプレート参照)が資金供給のチェーンを断ち切りうる
- **社債の満期の壁** — 金利が高止まりした場合の親会社レベルの債務のリファイナンスリスク
- **モバイル競争** — ドコモ / KDDI / SoftBank はカバレッジが優れている;楽天モバイルはローミング契約の経済性に依存する
- **クロスデフォルトのシナリオ** — モバイルがさらに低調な場合、グループ全体の社債コベナンツが発動しうる
- **強制的な売却** — 資本再編の動きが続けば、金融子会社が段階的に売却され(証券 → みずほは既に発生)、コングロマリットが空洞化する可能性がある

## 8. 比較:楽天銀行 IPO vs その他のカーブアウト

| ディール | 手段 | 親会社の保有維持 | 税務上の取扱い |
|---|---|---|---|
| **楽天銀行 2023** | IPO による一部売り出し | IPO 後 ~63%(ロックアップは段階的解除) | 売却部分のキャピタルゲイン |
| [[business/sony-fg-partial-spinoff-case|Sony FG 2025 (planned)]] | 一部スピンオフ(株式分配) | <20% | [[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff regime]] の下で繰り延べ |
| [[business/softbank-vision-fund-arm-ipo-template|Arm 2023]] | IPO による一部売り出し | ~90% | 売却部分のキャピタルゲイン |

楽天が一部スピンオフではなく IPO を選んだのは、現金調達が単なるバリュエーションの顕在化ではなく親会社の資本再編ニーズの中核だったからである。完全な選択肢のセットについては [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]] を参照。

## 9. 反論

- 「スーパーアプリ」のテーゼは主張されているが、この規模のモバイル損失を正当化するのに必要なレベルでは実証的に確立されていない
- 金融子会社を売却すること(銀行 IPO、証券一部売却)は、時間とともに内部補助エンジンを段階的に弱める
- モバイルの損益分岐規模は繰り返し後ろ倒しされてきた — 6百万加入者と予測されたものが 7-8百万になり、さらに増えた
- 金融子会社における競争上の堀はポイントと EC のトラフィックに依存する;単独のバリュエーションはより低くなるだろう
- 創業者 CEO の固定化は、モバイルを合理的に中止する能力を制限する

## 10. 未解決の問い

- 楽天モバイルはいつ営業損益分岐に達するのか、そもそも達するのか?
- 親会社は最終的にモバイルを売却(NTT / KDDI / SoftBank へ売却)し、賭けが失敗したと認めざるを得なくなるのか?
- 段階的な金融子会社の IPO / 一部売却の動きは、[[securities-firms/rakuten-securities|Rakuten Securities]] におけるみずほの戦略的ポジションにどう影響するか?
- いずれかの主要セグメントが売却された場合、ポイントロイヤルティエンジンはセグメント横断の接着剤を維持できるか?
- 親会社レベルの信用ストレスを踏まえ、FSA はカード / 銀行の自己資本充実度への規制上の精査を強化するか?

## 関連項目

- [[business/INDEX|business INDEX]]
- [[business/ntt-docomo-d-point-telco-finance-case|NTT Docomo d-Point telco-finance case]]
- [[business/gmo-internet-group|GMO Internet Group]]
- [[business/kitao-yoshitaka-sbi-independent-strategy-case|Kitao Yoshitaka SBI independent strategy]]
- [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]]
- [[business/softbank-vision-fund-arm-ipo-template|SoftBank Vision Fund Arm IPO template]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[card-issuers/rakuten-card|Rakuten Card]]
- [[JapanFG/rakuten-bank|Rakuten Bank]]
- [[securities-firms/rakuten-securities|Rakuten Securities]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[INDEX|FinWiki index]]

## 出典

- 楽天グループ企業戦略: https://corp.rakuten.co.jp/about/strategy/
- 楽天グループ IR: https://global.rakuten.com/corp/investors/
- 楽天モバイルネットワークサイト: https://network.mobile.rakuten.co.jp/en/
- 楽天グループプレスリリース: https://global.rakuten.com/corp/news/press/
- FSA 英語ポータル: https://www.fsa.go.jp/en/

---

> [!info] 校閲ステータス
> confidence: **likely**。コングロマリット構造、セグメント業績、資本再編の動きは、楽天グループの IR 資料および FSA / TSE 開示書類で公に開示されている。将来予測としての内部補助の持続可能性は本質的に予測である。

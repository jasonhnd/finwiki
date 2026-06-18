---
source: derivatives/japan-irs-market
source_hash: 620e9585f44b81d4
lang: ja
status: machine
fidelity: ok
title: "日本円金利スワップ（IRS）市場"
translated_at: 2026-06-18T23:33:48.344Z
---

# 日本円金利スワップ（IRS）市場

## TL;DR

円金利スワップ（IRS）市場は、二つのカウンターパーティが、定められたテナーにわたって、固定の JPY 建て利息支払いのストリームを変動金利の JPY 支払いのストリームと交換する OTC デリバティブの場である。これは、日本の銀行、生命保険会社、事業会社、そして JPY エクスポージャーを管理する外国人投資家にとって、最も主要な金利ヘッジ手段である。

変動の参照は、歴史的には 1ヶ月、3ヶ月、または 6ヶ月の TIBOR であった; LIBOR 廃止後は、カーブのうち増大するシェアが TONA 後決め複利（OIS 市場と重複する — [[derivatives/ois-tona-curve]] を参照）を参照する。テナーは 1Y から 30Y 以上まで取引される; 最も流動性の高いポイントは 2Y、3Y、5Y、7Y、10Y、20Y、30Y に集中する。

FinWiki にとって、本エントリは固定-変動スワップのメカニクス、TIBOR から TONA への移行と継続する TIBOR-IRS、想定元本残高、ディーラーバンクのフランチャイズ構造、JSCC クリアリングのマンデート、そしてエンドユーザー構成（事業会社 対 金融機関）をカバーする。

## Wiki ルート

本エントリは [[derivatives/INDEX|derivatives index]] の配下に位置する。割引カーブおよび短テナー RFR 側については [[derivatives/ois-tona-curve]] と、取引所上場のヘッジ代替手段については [[derivatives/jgb-futures-curve]] と、クロスカレンシーの交差については [[derivatives/yen-basis-swap-market]] と併せて読むこと。キャッシュ市場は [[money-market/japan-money-market]] である; 事業会社エンドユーザーの視点は [[finance/japan-corporate-fx-and-rate-hedge-policy]] である。

## 商品メカニクス

標準的な JPY IRS は、定められた想定元本にわたってスワップされる二つのレッグを持つ（元本の交換はない）。

| Element | Detail |
|---|---|
| 固定レッグ | 定期的に支払われる固定金利（「スワップレート」）（TIBOR 変動 IRS では通常半年ごと、TONA-OIS スタイルの IRS では年ごと）。 |
| 変動レッグ | 各期間ごとに変動参照（1M、3M、または 6M TIBOR; あるいは後決め複利 TONA）にリセット。日数計算は JPY では通常 ACT/365 。 |
| 想定元本 | 交換されない。利息支払いの計算にのみ使用。 |
| テナー | 最も流動性の高いポイント：1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y。40Y までのテナーは生命保険会社のヘッジ向けに取引される。 |
| 決済 | 各クーポン日のネット支払い（二つのレッグ間の差額のみが決済される）。 |
| 担保 | 担保化された取引については JPY 現金での日次 VM を伴う標準的な CSA; 非清算のバイラテラルについては UMR フェーズインの IM。 |
| クリアリング | 標準化されたテナーと参照インデックスは FIEA クリアリングマンデートのもとで JSCC でクリアされる。 |

経済的な内容：固定金利の支払い手はテナーにわたって既知のファンディングコストをロックインし、変動キャッシュフローを受け取る; 変動金利の支払い手はその逆を行う。双方が金利変動に対するバランスシートエクスポージャーをヘッジできる。

## TIBOR 対 TONA の移行

JPY IRS の参照金利は IBOR 移行を通じて進化してきた。

| Reference rate | Status | Typical use |
|---|---|---|
| 1ヶ月 TIBOR | アクティブ; JBATA が運営 | 一部のローン連動 IRS、ストラクチャード商品。 |
| 3ヶ月 TIBOR | アクティブ; JBATA が運営 | レガシーおよび新規の JPY IRS の相当なシェア、とりわけ事業会社ローン連動のヘッジ。 |
| 6ヶ月 TIBOR | アクティブ; JBATA が運営 | 長テナー IRS、とりわけ保険連動。 |
| TONA（後決め複利） | リスクフリーレート（RFR）; LIBOR 廃止後に指定 | 新規 OIS、および増大する新規の短〜中テナー IRS; 割引カーブの参照（[[derivatives/ois-tona-curve]] を参照）。 |
| JPY LIBOR（1M、3M、6M） | 2021 末に廃止（シンセティックフェーズアウト 2023） | レガシー契約は ISDA フォールバックプロトコルを通じて TONA + CAS に修正された。 |
| ユーロ円 TIBOR（Z-TIBOR） | 2024 年 12 月に廃止 | 歴史的使用のみ。 |

この移行が重要であるのは：

1. 新規 JPY IRS の発行は、清算された標準化スワップについて、ますます TONA 複利を参照する。
2. TIBOR 参照の IRS は、ターム固定のローンヘッジ用途のために引き続き共存する。
3. TIBOR-TONA ベーシス（ベーシスポイント）は、TIBOR の信用-銀行ファンディング成分対リスクフリーの TONA を補償する、取引可能なクォートである。
4. ディーラーは、アウトライトの IRS ポジションと並んで TIBOR-OIS および TIBOR-TONA ベーシスのブックを運営する。

このデュアルレートの世界は運用上複雑であるが、グローバルな RFR ベースのプライシングへの推進と並んで、日本のローン市場の一部のセグメントにおけるターム固定の参照への根強い需要を反映している。

## 想定元本残高

JPY 金利デリバティブ（IRS + OIS の合算）は、BIS の OTC デリバティブ統計、および BoJ の調査の日本部分において半年ごとに報告される。

| Metric | Magnitude (illustrative — cite current BIS release for exact figures) |
|---|---|
| グロス想定元本残高、JPY 単一通貨金利デリバティブ | BIS の集計 JPY IRS / OIS / FRA カテゴリーにおいて数十兆 USD 相当。 |
| JPY におけるグローバル IRS 想定元本のシェア | 四大通貨（USD、EUR、GBP、JPY）の一つ; JPY のシェアは相応の規模だが USD と EUR よりは小さい。 |
| グロス市場価値 | 想定元本のごく一部（通常は低い一桁パーセント）、ディーラーブック全体での相殺ポジションを反映。 |

標準的な注意点：想定元本残高は契約サイズのストック尺度である; グロス市場価値は経済的エクスポージャーに近いプロキシである; ネットエクスポージャーは、ネッティング契約後にはさらにはるかに小さい。BIS と BoJ の双方が半年ごとのリリースでこれら三つの尺度すべてを公表する。いかなる足元の分析についても、数値は年に二回更新されるため、正確な調査ヴィンテージを引用すること。

新規 JPY IRS の相応のシェアが JSCC でクリアされる; FSA のクリアリングマンデートが発効して以来、クリアリングシェアは伸びている。

## ディーラーバンクの収益分割

JPY IRS のディーラーフランチャイズは、日本のメガバンク系列の証券会社にグローバル投資銀行を加えたものによって支配される。

| Dealer category | Representative firms |
|---|---|
| 日本のメガバンク証券系列 | MUFG 証券、SMBC 日興、みずほ証券（および親証券エンティティ内のその JPY-IRS マーケットメイキングデスク）。 |
| 独立系日本証券会社 | 野村（メガバンク系以外で最大のフランチャイズ）、大和証券。 |
| JPY でアクティブなグローバル投資銀行 | JPMorgan、Goldman Sachs、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS。 |
| インターディーラーブローカー | ICAP / Tradition / BGC / Tullett Prebon — 匿名の IDB 執行とインディケーティブな価格発見を提供。 |

JPY IRS マーケットメイキングからの収益は、ディーラーバンクの IR においてそのホールセール／マーケット業務内の「フィクスト・インカム」または「レーツ」の一部として報告される。公開開示は JPY-IRS の P&L をより広範なレーツ業務から個別に切り分けないが、MUFG、SMFG、みずほ FG の IR 資料におけるフランチャイズコメンタリーは、JPY レーツが彼らのグローバルマーケット収益への相応の貢献者であることを示している。

フランチャイズのエコノミクスは以下に依存する。

- クライアントフローに対する双方向のビッド-アスクキャプチャ。
- ウェアハウスされたポジションからの在庫キャリーとランレート収益。
- JGB キャッシュ、レポ、CCBS、FX フォワード業務とのクロスプロダクトシナジー。
- 規制上のドラッグとしてのバランスシートコスト（RWA、LR、NSFR）。

親グループの開示レイヤーについては [[banking/INDEX]] および JapanFG アンカーページを参照のこと; ディーラー活動を規律する FIEA 登録については [[banking/japan-banking-license-tier-comparison-matrix]] を参照のこと。

## 事業会社 対 金融機関のエンドユーザー

| End-user category | Use case | Direction (typical) |
|---|---|---|
| メガバンク（トレジャリー） | JPY ローンのリプライシング、JPY 債券ポートフォリオのデュレーション、ALM ギャップ管理をヘッジ。 | 受け取り固定（資産が変動の場合）; 支払い固定（資産が固定の場合）。 |
| 地方銀行 | JPY 債券ポートフォリオのデュレーションをヘッジ; IRRBB（銀行勘定の金利リスク）を管理。 | 混在; しばしばデュレーションを安価に延ばすため受け取り固定。 |
| 信託銀行 / カストディ銀行 | ALM および年金関連の JPY レートヘッジ。 | 混在。 |
| 生命保険会社 | 長テナーの JPY 保険準備金負債をヘッジ（長デュレーション負債に対する実効的な短デュレーション → 長テナーの受け取り固定スワップへの需要）。 | 長テナー（10Y、20Y、30Y、40Y）で受け取り固定。 |
| 損害保険会社 | より小規模な ALM ヘッジ。 | 混在。 |
| 事業会社（非金融） | JPY 建て変動金利ローンエクスポージャーを固定にヘッジ; 固定クーポンの JPY 債券発行を変動に転換; 外貨建て債券発行で円へのスワップバックを行う。 | 変動金利ローンをヘッジする際は支払い固定; 固定クーポン債券を変動にスワップする際は受け取り固定。 |
| 外国人投資家 | 日本の金利に対するビューを取る; 日本 対 その他主要通貨カーブのレラティブバリュー; JGB キャッシュのデュレーションをヘッジ。 | 高度に方向性かつ機動的。 |
| アセットマネージャー / 年金基金 | JPY フィクスト・インカムマンデートのデュレーション管理。 | 混在。 |

生命保険会社は、その長デュレーションの保険準備金が資産側に対するデュレーションギャップを生み出すため、構造的に長テナー JPY IRS 受け取り固定需要の最大の単一カテゴリーである。このアンカー需要が、20Y および 30Y テナーにおける深い流動性を説明する。

事業会社のエンドユーザーフローの詳細は [[finance/japan-corporate-fx-and-rate-hedge-policy]] でカバーされる。

## JSCC クリアリングマンデート

FSA は FIEA のもとで、標準化された JPY IRS のクリアリングマンデートを実施し、対象カウンターパーティ間の適格取引が JSCC でクリアされることを求めた。

| Element | Detail |
|---|---|
| CCP | Japan Securities Clearing Corporation（JSCC）。 |
| 義務化された商品 | 主要テナーにおける標準化された JPY IRS、クリアされる参照インデックスを伴う; 複数のルールサイクルにわたって拡大。 |
| 対象カウンターパーティ | 主要な日本の金融機関; 時とともにより多くのエンティティを含むよう拡大。 |
| マージン | JSCC のポートフォリオマージニング手法のもとでの IM と VM; JPY 現金で決済。 |
| デフォルト管理 | JSCC のウォーターフォール（デフォルト者のマージン → デフォルト者の拠出 → JSCC 資本トランシェ → 非デフォルトメンバーファンド → 追加のリソース）。 |

JSCC における JPY IRS のクリアリングシェアは実質的に伸びている。クリアされた取引は以下の便益を受ける。

- グロスエクスポージャーを低減する多者間ネッティング。
- バイラテラル交渉の摩擦を取り除く標準化されたマージン手法。
- バイラテラルのカウンターパーティリスクの除去; CCP リスクは集中させられ、ストレステストされる。
- 非清算取引と比較した資本軽減（バーゼル枠組みのもとで）。

非清算のバイラテラル JPY IRS は以下のために継続する：非標準テナー、非標準リセット慣行、ストラクチャードトレード、そしてマンデートの対象とならないカウンターパーティ。非清算取引は UMR（非清算マージン規制）フェーズインの IM 要件の対象となる。

クリアリングコーポレーションのインフラについては [[securities/japan-securities-clearing-corp]] を、より広範な市場インフラのコンテキストについては [[securities/japan-market-infrastructure-map]] を参照のこと。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate derivatives notional and market value).
- Bank of Japan: Japan portion of BIS OTC derivatives survey; JPY interest-rate derivatives statistical release.
- Japan Securities Clearing Corporation: JPY IRS clearing scope, mandated product list, margin methodology.
- Financial Services Agency: FIEA clearing mandate scope and supervisory guidance.
- ISDA: SwapsInfo aggregated weekly transactions; 2020 IBOR Fallbacks Protocol.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: TONA adoption and TIBOR-TONA coexistence reports.
- Dealer-bank IR releases: MUFG, SMFG, Mizuho FG, Nomura HD, Daiwa Securities Group quarterly markets-segment commentary.

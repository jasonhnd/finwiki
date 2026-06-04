---
source: money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending
source_hash: 58564395aead7d5e
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本のレポ取引の仕組み：現先 vs 現金担保付債券貸借"
translated_at: 2026-06-05T00:00:00.000Z
---
# 日本のレポ取引の仕組み：現先 vs 現金担保付債券貸借

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。これが掘り下げる市場レベルの概観については [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] を、有担保 vs 無担保の境界については [[money-market/japan-uncollateralized-vs-collateralized-call-market|uncollateralized vs collateralized call market]] をあわせて参照してください。証券貸借との重なりは [[securities/japan-stock-lending-market-route|the stock-lending market route]] へ振り向けてください。クリアリングの層は [[securities/japan-securities-clearing-corp|JSCC]] です。

## TL;DR

日本では「レポ」（レポ）という語は、ともに債券を裏付けとする有担保短期調達を実現する、法的に異なる2つの契約形態の総称です。

- **現先（現先 / 買戻条件付売買）**：売戻し / 買戻し取引 —— 証券が売却されると同時に、将来の期日に固定価格でそれを買い戻す合意がなされる。経済的には有担保ローン、法的には2件のアウトライト取引の組。
- **現金担保付債券貸借（現金担保付債券貸借）、歴史的には *現担（げんたん）* レポと呼ばれる**：借り手が現金を担保として差し入れ、貸借料またはリベートを支払う / 受け取る証券貸借。法的には売買ではなく貸借契約。

いずれも **GC（ジェネラル・コラテラル）** 資金調達取引にも **SC（スペシャル・コラテラル）** 銘柄特定取引にもなりうる —— そのオーバーレイは [[money-market/jgb-repo-market-japan|repo market overview]] で扱う。FinWikiにとって、重要な読み方のルールは、*法的形態*（現先 vs 現金担保付貸借）と *担保の特定性*（GC vs SC）が2つの独立した軸であり、日本のレポデータは両方を混在させているということです。

## 2つの法的形態

| 次元 | 現先（現先） | 現金担保付債券貸借（現金担保付債券貸借） |
|---|---|---|
| 法的性質 | 買戻し合意付きの売買（2件のアウトライト取引）。 | 現金担保で保全された証券貸借。 |
| プライシングの表現 | 開始 / 終了価格の差に埋め込まれたレポレート。 | 現金担保にかかる貸借料（貸借料）またはリベートレート。 |
| 資金サイド | 買い手が債券に対して現金を支払う。満期に反転する。 | 現金の借り手が、借り入れた債券に対して現金を担保として差し入れる。 |
| ドキュメンテーション | 債券買戻し取引のための標準契約。更新形態については、グローバルなGMRA型マスター契約に整合する。 | 現金担保条件付きの債券貸借契約。 |
| 歴史的役割 | 従来の日本の買戻し形態。 | 1989年に、*貸借* 契約のもとでレポの経済性を提供し、当時適用されていた有価証券取引税を回避するために考案された。 |

現金担保付貸借形態（現担）が支配的になったのは、まさにそれがアウトライト売却に適用される有価証券取引税を回避したためです。取引税が廃止され、レポのドキュメンテーション枠組みが近代化された後、日本の慣行を国際的なレポ基準（クローズアウト・ネッティング、マージン授受、サブスティテューション）に整合させるべく、更新された「新現先」（新現先）形態が推進されました。両形態とも引き続き活発に使われており、これが日本のレポ市場が、2つの契約レールを持つ1つの経済市場として読まれる理由です。

## 新現先 vs かつての慣行

「新現先」（新現先）改革が重要だったのは、かつての日本の買戻し慣行に、グローバルなレポで標準的な機能が欠けていたためです。

- **マージン授受 / 時価評価**：担保価値の変動を管理するための変動証拠金の授受。
- **クローズアウト・ネッティング**：カウンターパーティのデフォルト時に執行可能なネッティング。
- **サブスティテューション**：取引中に担保を入れ替える能力。
- **事後的な担保割当**：単一の指定銘柄ではなく、銘柄群が取引を裏付けるバスケット型の割当 —— GC資金調達の主力。

これらの機能は、日本の現先をGMRAでドキュメント化された国際レポに近づけました。これはクロスボーダーの参加にとって、また、ディーラーのバランスシートおよび [[derivatives/japan-irs-market|rate-derivative]] のヘッジ帳簿がJGB在庫をどう資金調達するかにとって重要です。

## 両形態にまたがるGCとSC

ジェネラル・コラテラル vs スペシャル・コラテラルの区別（[[money-market/jgb-repo-market-japan|repo overview]] で詳述）は、*両方の* 法的形態に適用されます。

| | GC（ジェネラル・コラテラル） | SC（スペシャル・コラテラル） |
|---|---|---|
| 目的 | 資金調達。許容されるいずれの銘柄でもよい。 | 特定のJGB銘柄を借り入れる。 |
| レートのシグナル | 広範な資金調達コスト。短期金利環境を追う。 | 銘柄のスペシャル性。需要が高いとき、リッチなSC銘柄はスペシャルで取引されうる（より低いレポレート）。 |
| 両形態 | GC取引は現先にも現金担保付貸借にもなりうる。 | SC取引も同様にいずれの形態にもなりうる。 |

したがってストレスを読むには、*どちらの軸* が動いたかを確認する必要があります。GC全体の資金調達のひっ迫は、1つのJGB銘柄がSCでスペシャルになることとは別のシグナルです。

## 決済とクリアリング

| 要素 | 読み方 |
|---|---|
| 決済 | JGBのレッグは、中央のJGB振替および資金振替の配管を通じて決済される。資金・証券のDVPレールについては [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET FTS / RTGS settlement]] を参照。 |
| 決済サイクル | 日本のJGBの資金およびレポの決済は短縮サイクルで運用される（市場はアウトライトJGBについてT+1へ、それに応じて短縮されたレポサイクルへ移行した）。これによりフェイルのリスクと日中流動性のタイミングが圧縮される。 |
| 中央清算 | JGBレポは [[securities/japan-securities-clearing-corp|JSCC]]（旧JGBCC機能）に債務引受されうる。これは清算されたJGBおよびJGBレポ取引について、債務を引き受け、カウンターパーティ・リスクを相互化する。 |
| 仲介 | [[money-market/tanshi-company-business-model|Tanshi companies]] と [[financial-regulators/japan-securities-finance|Japan Securities Finance]] が、ディーラーデスクと並んで債券レポおよび現先を仲介する。 |

## なぜこれがFinWikiにとって重要か

- **データの解釈**：日銀の証券金融統計は、貸借料 / リベートレートを調整したうえで、レポと現金担保付債券貸借を集計する。したがって、代表値としての「レポ」残高は両方の法的形態を混ぜ合わせている。
- **クロスマーケットの読み**：レポレートは、無担保の [[money-market/call-market-structure|call rate]] の傍らに位置する有担保の資金調達コストである。GCレポ対コールのスプレッドは、注視される資金調達シグナル。
- **担保の伝達**：この層は [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]、JGB市場の機能、ディーラーのバランスシート許容度を結びつける。日銀の国債補完供給オペ（証券貸付ファシリティ）は、とくにSCの希少性と相互作用する。

## 読み方のチェックリスト

1. *法的形態*（現先 vs 現金担保付貸借）を *担保の軸*（GC vs SC）から切り分ける。両者は独立している。
2. 出典が「現担（げんたん）」と言う場合、それを現金担保付債券貸借の形態として読む。「新現先 / 新現先」は近代化された買戻し形態である。
3. レポレートを無担保コールレートとして扱わない —— 両者は異なる商品であり、異なるリスクである。
4. スペシャル性については、GCの資金調達水準ではなく、SCレポおよび証券貸付ファシリティの利用を見る。
5. 現行の残高を引用する際には、特定の日銀証券金融リリースを引用する。数値は時点固有である。

## JapanFG関連

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] は、中核的な債券レポおよび現先の仲介者であり、証券金融の専門会社である。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は、コールおよびCPの活動に隣接して債券レポを仲介する。
- 証券会社の [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]] は、現先および現金担保付貸借を通じてJGB在庫を資金調達する。
- メガバンクの [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、担保管理および準備残高を通じてエクスポージャーを持つ。
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] は、両形態の下にある短期金利環境および担保枠組みを駆動する。

## 境界事例

- **現先 vs 現金担保付貸借**：売戻し / 買戻し vs 現金で保全された証券貸借。同じ経済性、異なる法的構造とプライシングの慣行。
- **レポ vs 有担保コール**：どちらも有担保だが、レポは証券金融取引（売戻し / 買戻し、または現金で保全された貸借）である一方、有担保コールは担保を差し入れる有担保の銀行間貸出である。[[money-market/japan-uncollateralized-vs-collateralized-call-market|the call segmentation page]] を参照。
- **GC vs SC**：資金調達主導 vs 銘柄主導。いずれの法的形態の上にも乗るオーバーレイ。
- **レポ vs 株式の貸株**：JGBレポと株式の証券貸借は別の市場である。株式の貸株は [[securities/japan-stock-lending-market-route|the stock-lending route]] へ振り向ける。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/boj-net-funds-transfer-system-rtgs-settlement]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[derivatives/japan-irs-market]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/japan-securities-finance]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行：日本の証券金融取引に関する統計の説明（レポおよび現金担保付債券貸借の範囲、貸借料 / リベートの調整）。
- 日本銀行：マネーマーケット概要のサーフェス。
- ICMA：アジア・レポ市場ガイド —— 日本（現先、現担 / 現金担保付貸借、新現先、GC / SC、ドキュメンテーション）。
- 日本証券金融株式会社：債券レポおよび現先取引の業務説明。
- 日本証券クリアリング機構：JGB清算商品（JGBおよびJGBレポ取引の債務引受）。

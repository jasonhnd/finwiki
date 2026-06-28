---
source: money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending
source_hash: e1fbce229372a7dc
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本のレポ取引ストラクチャー：現先と現金担保付債券貸借の対比"
translated_at: 2026-06-26T08:29:40.673Z
---

# 日本のレポ取引ストラクチャー：現先と現金担保付債券貸借の対比

## ウィキ内の位置づけ

本項目は [[money-market/INDEX|money-market index]] の下に位置する。本項目が掘り下げる市場レベルの概観として [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] と対照し、有担保・無担保の境界については [[money-market/call-market-structure|uncollateralized vs collateralized call market]] と対照して読み、証券貸借との重複は [[securities/japan-stock-lending-market-route|the stock-lending market route]] へとたどること。クリアリング層は [[securities/japan-securities-clearing-corp|JSCC]] である。

## 要点（TL;DR）

日本では「レポ」（レポ）という語は、いずれも債券を裏付けとした有担保の短期資金調達を実現する、法的に異なる二つの契約形態を包括する総称である。

- **現先（現先 / 買戻条件付売買）**：売却・買戻取引——証券を売却すると同時に、将来の一定日に固定価格で買い戻す合意を行う。経済的には有担保貸付であり、法的には一対の完全売買である。
- **現金担保付債券貸借、歴史的には*現担（げんたん）*レポと呼ばれる**：借り手が現金を担保として差し入れ、貸借料またはリベートを支払う／受け取る証券貸付。法的には売買ではなく貸借契約である。

いずれも **GC（ジェネラル・コラテラル、general collateral）**の資金調達取引にも、**SC（スペシャル・コラテラル、special collateral）**の銘柄特定取引にもなり得る——その重ね合わせの軸は [[money-market/jgb-repo-market-japan|repo market overview]] で扱う。FinWiki にとって肝心な読み方の原則は、*法的形態*（現先と現金担保付貸借）と*担保の特定性*（GC と SC）が二つの独立した軸であり、日本のレポ・データは両者を混在させているという点である。

## 二つの法的形態

| 観点 | 現先（現先） | 現金担保付債券貸借（現金担保付債券貸借） |
|---|---|---|
| 法的性質 | 買戻条件付の売却（二件の完全売買）。 | 現金担保で保全された証券貸付。 |
| 価格の表現 | レポ・レートは期初・期末の価格差に織り込まれる。 | 現金担保に対する貸借料、またはリベート・レート。 |
| キャッシュ・レッグ | 買い手が債券に対し現金を支払い、満期に反対売買で戻す。 | 現金の借り手が、借り入れた債券に対して現金を担保として差し入れる。 |
| 契約書 | 債券現先取引の標準契約書。更新後の形態は、グローバルな GMRA 型のマスター契約と整合する。 | 現金担保条件を備えた債券貸借契約書。 |
| 歴史的役割 | 日本の従来型の買戻形態。 | 1989 に考案され、*貸借*契約のもとでレポの経済性を実現し、当時適用されていた有価証券取引税を回避するためのもの。 |

現金担保付貸借形態（現担）が主流となったのは、まさに完全売却に課されていた有価証券取引税を回避できたからである。取引税が廃止され、レポの契約書枠組みが近代化された後、更新版の「新現先」（新現先）形態が、日本の実務を国際的なレポ標準（クローズアウト・ネッティング、証拠金授受、銘柄差替え）と整合させるために推進された。両形態は今なお現役で使われており、それゆえ日本のレポ市場は、二本の契約レールを持つ一つの経済的市場として読み解かれる。

## 新現先と旧来の実務

「新現先」（新現先）改革が重要だったのは、旧来の日本の買戻実務に、グローバルなレポでは標準となっている諸機能が欠けていたためである。

- **証拠金授受／時価評価（mark-to-market）**：担保価値の変動を管理するための変動証拠金の授受。
- **クローズアウト・ネッティング**：取引相手方の破綻時に強制執行可能なネッティング。
- **銘柄差替え（substitution）**：取引期間中に担保を入れ替える機能。
- **事後的な担保配分**：単一の指定銘柄ではなく、一群の銘柄が取引を裏付けるバスケット型の配分——GC 資金調達の主力。

これらの機能により、日本の現先は GMRA で文書化された国際レポに近づき、それはクロスボーダーでの参加、ならびにディーラーのバランスシートや [[derivatives/japan-irs-market|rate-derivative]] のヘッジ・ブックが JGB 在庫をどう資金繰りするかにとって重要となる。

## 両形態にまたがる GC と SC

ジェネラル・コラテラルとスペシャル・コラテラルの区別（[[money-market/jgb-repo-market-japan|repo overview]] で詳述）は、*両方の*法的形態に適用される。

| | GC（ジェネラル・コラテラル） | SC（スペシャル・コラテラル） |
|---|---|---|
| 目的 | 現金の資金調達；受入可能な銘柄であれば何でもよい。 | 特定の JGB 銘柄を借り入れること。 |
| レートのシグナル | 広い意味での資金調達コスト；短期金利環境を追随する。 | 銘柄のスペシャルネス；需要の高い希少な SC 銘柄は、スペシャル（より低いレポ・レート）で取引され得る。 |
| 両形態 | GC 取引は現先にも現金担保付貸付にもなり得る。 | SC 取引も同様にいずれの形態にもなり得る。 |

したがってストレスを読み解くには、*どちらの軸*が動いたかを確認する必要がある。GC 全般の資金調達逼迫は、ある JGB 銘柄が SC でスペシャル化することとは異なるシグナルである。

## 決済とクリアリング

| 要素 | 読み方 |
|---|---|
| 決済 | JGB のレッグは中央の JGB 振替決済・資金移動の基盤を通じて決済される；現金・証券の DVP レールについては [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET FTS / RTGS 決済]] を参照。 |
| 決済サイクル | 日本の JGB 現物およびレポの決済は短縮化されたサイクルで運用されている（市場は完全売買の JGB について T+1 へ移行し、レポ・サイクルもそれに対応して短縮された）。これにより、フェイル・リスクと日中流動性のタイミングが圧縮される。 |
| 中央清算 | JGB レポは [[securities/japan-securities-clearing-corp|JSCC]]（旧 JGBCC の機能）へ更改（ノベーション）され得る。同機関は債務を引き受け、清算された JGB および JGB レポ取引について取引相手方リスクを相互化（ミューチュアライズ）する。 |
| 仲介 | [[money-market/tanshi-company-business-model|Tanshi companies]] と [[financial-regulators/japan-securities-finance|Japan Securities Finance]] が、ディーラー・デスクと並んで債券レポおよび現先を仲介する。 |

## なぜこれが FinWiki にとって重要か

- **データの解釈**：日銀の証券貸借取引統計は、貸借料／リベート・レートを調整したうえで、レポと現金担保付債券貸借を合算している。したがって、表面上の「レポ」残高は両方の法的形態を混在させている。
- **市場横断の読み**：レポ・レートは、無担保の [[money-market/call-market-structure|call rate]] と並ぶ有担保の資金調達コストである；GC レポ対コールのスプレッドは、注視される資金調達シグナルである。
- **担保の伝達**：この層は [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]、JGB 市場の機能、ディーラーのバランスシート許容力を結びつける。日銀の国債補完供給（証券貸借ファシリティ）は、とりわけ SC の希少性と相互作用する。

## 読み方チェックリスト

1。*法的形態*（現先と現金担保付貸借）と*担保の軸*（GC と SC）を区別すること；両者は独立している。
2。資料が「現担（gentan）」と言う場合は、現金担保付債券貸借形態として読むこと；「新現先（shin-gensaki / new gensaki）」は近代化された買戻形態である。
3。レポ・レートを無担保のコール・レートと同一視しないこと——それらは異なる商品であり、異なるリスクである。
4。スペシャルネスについては、GC の資金調達水準ではなく、SC レポと証券貸借ファシリティの利用状況を見ること。
5。現在の残高を引用する際は、具体的な日銀の証券貸借リリースを引用すること；数値は時点固有のものである。

## 日本の金融グループ（JapanFG）との関連

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] は中核的な債券レポ・現先の仲介者であり、証券金融の専門機関である。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は、コールや CP の活動に隣接して債券レポを仲介する。
- 証券会社の [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]] は、現先および現金担保付貸借を通じて JGB 在庫を資金繰りする。
- メガバンクの [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、担保管理と準備金残高を通じてエクスポージャーを負う。
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] は短期金利環境と、両形態の下にある担保枠組みを駆動する。

## 境界事例

- **現先と現金担保付貸借**：売却・買戻と、現金で保全された証券貸付；経済性は同じだが、法的構造と価格慣行が異なる。
- **レポと有担保コール**：いずれも有担保だが、レポは証券金融取引（売却買戻または現金担保付貸付）であるのに対し、有担保コールは担保を差し入れる有担保のインターバンク貸借である；[[money-market/call-market-structure|the call segmentation page]] を参照。
- **GC と SC**：資金調達主導か銘柄主導か；いずれの法的形態の上にも重なる軸である。
- **レポと株式の貸株**：JGB レポと株式の証券貸借は別個の市場である；株式の貸株は [[securities/japan-stock-lending-market-route|the stock-lending route]] へとたどる。

## 関連項目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
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

- 日本銀行：「日本の証券貸借取引に関する統計」の説明（レポおよび現金担保付債券貸借の範囲、貸借料／リベート調整）。
- 日本銀行：短期金融市場の概観ページ。
- ICMA：『アジア・レポ市場ガイド——日本』（現先、現担／現金担保付貸借、新現先、GC／SC、契約書）。
- 日本証券金融株式会社：債券レポ・現先取引の業務説明。
- 日本証券クリアリング機構：JGB クリアリング・プロダクト（JGB および JGB レポ取引の債務引受）。

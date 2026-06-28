---
source: money-market/boj-net-funds-transfer-system-rtgs-settlement
source_hash: c387fc73ac1d4331
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日銀ネット資金決済システムとRTGS決済"
translated_at: 2026-06-26T08:29:17.577Z
---
# 日銀ネット資金決済システムとRTGS決済

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。この決済レールを通じて資金サイドが決済される市場については [[money-market/call-market-structure|Call market structure]] と [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|repo transaction structures]] を、中央銀行がそこを流れる準備預金をどのように供給・吸収するかについては [[money-market/boj-open-market-operations|BoJ open market operations]] をあわせて参照してください。制度上の運営主体は [[financial-regulators/boj-payment-settlement-dept|the BoJ Payment and 決済 Systems Department]] です。

## TL;DR

**日銀ネット資金決済システム（BOJ-NET FTS）** は、日本銀行が **日銀に保有される当座預金（当座預金）** を通じて円建ての支払いを決済するためのオンラインネットワークです。これは日本のマネーマーケットを支える決済基盤です。コールローンが返済されるとき、レポの資金サイドが動くとき、あるいは日銀のオペが資金を供給するとき、その資金は最終的に日銀ネット上で日銀当座預金間の振替として動きます。

これを特徴づける構造的な事実が2つあります。

- **RTGSが唯一の決済方式である。** 支払指図は、十分な資金が利用可能であることを条件に、即時かつ個別に処理されます（即時グロス決済）—— これらのフローに日中終了時点でのネット決済は存在しません。
- **日銀当座預金が決済資産である。** 同じ口座が、[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility]] が利息を付す **準備預金 / 超過残高** を保有しており、*配管*（決済）と*価格*（金利の下限）を結びつけています。

FinWikiにとって、これはあらゆるマネーマーケット取引について「資金は実際にどこへ行くのか」に答えるページであり、日銀当座預金へのアクセスに関するINDEXのバックログ・ノートを埋めるものです。

## 日銀ネットが決済するもの

| フロー | 日銀ネットを通じて決済される理由… |
|---|---|
| [[money-market/call-market-structure|Call loans]] | 無担保コールの資金サイドは、バリュー日における日銀当座預金間の振替である。 |
| [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|JGB repo]] の資金サイド | レポ / 現先の資金は、JGBの受渡しに対してDVP（受渡しと支払いの同時履行）ベースで決済される。 |
| [[money-market/boj-open-market-operations|BoJ operations]] | 資金供給オペと資金吸収オペが、準備預金を当座預金へ / から移動させる。 |
| 銀行間および大口決済 | 金融機関間の高額な円建て債務。 |
| 他システムからのネットポジション | クリアリングシステム（例：手形 / 小切手交換）からのネット結果が、日銀ネットを通じてRTGSベースで決済される。 |

証券サイドには、JGBの振替決済のための付随サービス **BOJ-NET JGB Services** があります。両者を組み合わせることでDVPが可能になり、JGBの受渡しと資金の支払いが連結され、レポおよびJGBのアウトライト決済における元本リスクが除去されます。

## なぜRTGSなのか、そして流動性とのトレードオフ

RTGSは、各支払いを処理された瞬間にファイナリティをもって決済することで、決済リスクを除去します。日中の大きなエクスポージャーを残すことになる日末でのネッティングではなく、その都度決済するのです。トレードオフは **流動性の集約度** です。グロス決済では、参加者が日中を通じて資金を利用可能にしておく必要があります。

日銀はそのトレードオフを2つの仕組みで管理しています。

- **日中当座貸越ファシリティ**：日銀が（担保に対して）日中信用を供与し、金融機関が受取資金の到着前に支払いを行えるようにして、日中流動性を平準化する。
- **流動性節約機能**：日銀ネットFTS内の待ち行列・相殺の仕組みで、反対方向の支払いをマッチングし、各決済が消費する流動性を節約する。

これはマネーマーケットのタイミングに直接関係します。日中ポジションのひっ迫が、金融機関が日銀当座預金残高を調整するなかで、日末の [[money-market/call-market-structure|call-market]] 取引を促すことがあるからです。

## 次世代RTGS（RTGS-XG）

日銀は段階的に日本をRTGSへ移行させ、その後 **次世代RTGS（RTGS-XG）** プロジェクトのもとでこれを強化しました。

- 日銀ネットFTSに **流動性節約機能** を導入した。
- 従来、民間部門の全銀データ通信システムおよび外国為替円決済制度が扱っていた大口決済を、日銀ネットFTSのRTGS環境へ取り込んだ。

その効果は、システム上重要な大口の円建て決済を、流動性節約機能を組み込んだ中央銀行のRTGSレールに集中させることでした —— グロス決済の流動性コストを制御しつつ、決済の安全性を強化したのです。

## 当座預金：配管と価格が交わる場日銀当座預金は二重の役割を果たしており、この2つの役割を混同することはよくある誤りです。

| 役割 | 意味 |
|---|---|
| 決済資産 | 日銀ネットFTSを通じた支払いの決済に用いられる残高。 |
| 準備 / 政策残高 | 同じ残高が準備預金である。[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] のもとで、その階層は補完当座預金制度の金利を得て、コールレートをアンカーする。 |

したがって、*決済システム*（日銀ネット）と*金利の下限*（準備預金への付利）は **同じ口座残高** の上で機能します。コール市場で貸すか、準備預金を保有するか、レポで資金調達するかを判断する銀行は、決済ニーズ、準備金利、市場調達コストを同時に最適化しているのです。

## 読み方のチェックリスト

1. 日銀ネットFTSを資金決済レール、BOJ-NET JGB Servicesを証券決済レールとして扱う。両者でDVPが成立する。
2. RTGSはグロス・即時・ファイナルな決済を意味し、日末のネット決済ではないことを忘れない。
3. 日銀当座預金の*決済*の役割と*準備 / 政策*の役割を区別する。両者は1つの残高を共有する。
4. 日中流動性のひっ迫を、単独のシグナルとしてではなく、日末のコール市場活動の駆動要因として読む。
5. 大口の円建て決済については、RTGS-XGが従来の民間部門のフローを日銀ネットFTSに集中させたことを思い出す。

## JapanFG関連

- [[financial-regulators/boj-payment-settlement-dept|BoJ Payment and 決済 Systems Department]] が日銀ネットを運営・監督する。
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] が、レールを通じて移動する準備預金を供給・吸収し、準備金利の下限を設定する。
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Department]] が、ここで資金が決済される市場操作を実施する。
- メガバンクの [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、自社および顧客の大口円建てフローを決済する直接の当座預金保有者である。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は、その資金サイドが日銀ネットを通じて決済されるコールおよびレポ取引を仲介する。

## 境界事例

- **日銀ネットFTS vs BOJ-NET JGB Services**：資金振替レール vs JGB振替レール。DVPによるレポ / JGB決済には両方が必要。
- **RTGS vs ネット決済**：日銀ネットはグロスかつ即時に決済する。民間のリテールシステムはネッティングを行い、そのネットポジションが日銀ネットを通じて決済される。
- **当座預金 vs 準備預金**：同じ残高、2つの役割（決済資産と政策 / 準備残高）。
- **日銀ネット vs 全銀**：全銀データ通信システムは民間部門の国内資金振替ネットワークである。大口フローはRTGS-XGのもとで日銀ネットFTSへ取り込まれたが、全銀はリテール / マス決済の層として残っている。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[money-market/tanshi-company-business-model]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[financial-regulators/boj-payment-settlement-dept]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/boj-financial-markets-dept]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行：決済システムの概要（日銀当座預金、日銀ネット、決済の役割）。
- 日本銀行：RTGS（即時グロス決済）ページ（唯一の決済方式としてのRTGS、日中当座貸越、流動性節約機能）。
- 日本銀行：日銀ネット資金決済システムの概要（RTGS-XG、日銀ネットFTSに取り込まれた支払いの範囲）。
- 日本銀行：マネーマーケット概要のサーフェス。
- BIS CPMI：日本の決済システム（日銀ネット、RTGS、当座預金決済の文脈）。

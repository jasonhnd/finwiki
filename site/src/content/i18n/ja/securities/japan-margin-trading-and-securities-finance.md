---
source: securities/japan-margin-trading-and-securities-finance
source_hash: ccaa5cd761a08c3a
lang: ja
status: machine
fidelity: ok
title: "日本の信用取引と証券金融"
translated_at: 2026-06-03T00:53:08.343Z
---
# 日本の信用取引と証券金融

## 概要

日本の信用取引は、単なる個人投資家向けレバレッジ商品ではない。証券会社、東京証券取引所規則、日本証券金融、担保、株券貸借、清算、決済、空売り圧力、投資家リスク管理をつなぐ、市場インフラ兼証券金融の経路である。

このページは、[[securities/INDEX|securities domain]]、[[financial-regulators/japan-securities-finance|Japan Securities Finance]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、および [[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]] などの証券会社ページとあわせて読む。

## システムマップ

| レイヤー | 役割 |
|---|---|
| 投資家 / 顧客 | 証券会社に担保を差し入れ、信用取引で買いまたは売りを行う。 |
| 証券会社 | 顧客に資金または有価証券を貸し、担保、追証、返済、商品適合性を管理する。 |
| TSE / JPX 規則 | 制度信用取引、対象銘柄、貸借銘柄、規制、権利処理、公告を定める。 |
| [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | 制度信用取引の決済と、より広い証券金融サービスのため、証券会社に資金と株式を供給する。 |
| [[securities/japan-securities-clearing-corp|JSCC]] / [[securities/japan-securities-depository-center|JASDEC]] | 市場取引と担保 / 受渡の配管を担う清算・振替決済レイヤー。 |
| 貸し手 / 外部株主 | 貸株需要が内部供給を上回る場合、入札型の品貸料メカニズムなどを通じて借株を供給できる。 |

## 制度信用と一般信用

JPX の信用取引概要は、制度信用取引と一般信用取引を分けている。

| 次元 | 制度信用取引 | 一般信用取引 |
|---|---|---|
| 対象銘柄 | TSE 規則に基づき選定される。 | 原則として全上場銘柄。ただし証券会社の条件と規則に従う。 |
| 返済期限 | 最長六か月。 | 顧客と証券会社の間で決定される。 |
| 品貸料 | 取引所規則の枠組みに基づき公表 / 処理される。 | 顧客と証券会社の間で決定される。 |
| 権利処理 | TSE が方法を指定する。 | 顧客と証券会社の間で決定される。 |
| 貸借取引 | 利用可能。 | 同じ形では利用できない。 |

この境界が重要なのは、[[financial-regulators/japan-securities-finance|JSF]] が制度信用 / 貸借取引経路において最も中心的である一方、一般信用は証券会社のバランスシート、担保方針、商品条件への依存が大きいからである。

## 証券金融の役割

JPX は、証券金融会社が制度信用取引の決済を支えるために証券会社へ資金と株式を供給し、TSE が日本証券金融を証券金融会社として指定していると説明している。JSF 自身の公開資料では、同社は FIEA に基づく信用取引貸付業務の免許を持つ日本唯一の証券金融会社とされ、事業分野には証券金融、一般信用関連貸付、一般貸株、株式レポ、債券レポ / 現先、リテール向け貸付が含まれる。

FinWiki では、これは JSF が単なる別のノンバンク金融会社ではないことを意味する。JSF は以下の市場配管ノードである。

- 信用買いへの資金融通
- 信用売り / ショートポジション向けの株式調達
- 品貸料と規制を通じた特殊な需給圧力の管理
- 個人向け証券会社の需要と、証券貸借・機関投資家在庫の接続
- 株式市場の流動性と短期金融 / レポ文脈の橋渡し

## 取引と資金の流れ

```text
信用買い投資家
  -> 証券会社が担保に対して資金を貸す
  -> 株式が購入され、証券決済スタック内で保有 / 担保化される
  -> 証券会社は証券金融会社の貸付経路を使う場合がある

信用売り投資家
  -> 証券会社が担保に対して株式を貸す
  -> 株式が市場で売却される
  -> 必要に応じて証券会社 / 証券金融会社が株式を調達する
  -> 買戻しまたは同一銘柄の引渡しで返済する
```

重要なのは、個人の信用取引が、顧客担保、証券会社の信用供与、証券金融貸付、借株、清算、振替決済の連鎖になりうる点である。このため信用取引は、オンライン証券分析だけでなく [[securities/japan-market-infrastructure-map|market infrastructure]] にも属する。

## 市場シグナル

| シグナル | 有用な読み方 | 注意点 |
|---|---|---|
| 信用取引残高 | 個人 / 証券会社のレバレッジとポジション圧力。 | TSE の信用残と JSF の貸付残高は同一ではない。 |
| 融資残高 / 貸株残高 | JSF 経路を通じた資金需要と借株需要。 | すべての一般信用や証券会社の自己資金ポジションを含まない。 |
| 品貸料 | 借株不足とショート側圧力のシグナル。 | 銘柄固有かつ一時的な場合がある。 |
| 信用取引規制 | 取引所 / 証券金融によるリスク管理介入。 | 必ずしも発行体のファンダメンタル見解ではない。 |
| 日々公表 / 注意喚起措置 | 過熱取引や不均衡の監視シグナル。 | 出来高、浮動株、ニュース、証券会社フローの文脈が必要。 |
| PTS 信用取引の取扱い | 取引施設固有・証券会社固有の経路。 | [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] とあわせて読む。 |

## JapanFG 上の重要性

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] は、機関的な証券金融機能の基点ページである。
- [[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]]、[[securities-firms/matsui-sec|Matsui Securities]]、[[securities-firms/gmo-click-securities|GMO Click Securities]]、[[securities-firms/dmm-com-securities|DMM.com Securities]] は、信用金利、担保規則、商品制限、アクティブトレーダー向け収益性を通じて接続される。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]] は、機関投資家向け証券貸借、プライムブローカレッジ隣接領域、フルサービス金融の文脈で重要である。
- [[money-market/jgb-repo-market-japan|Japan JGB repo market]] と [[money-market/INDEX|money-market domain]] は、証券金融が担保と資金調達コストの問題になるときに隣接する。

## リスク管理

| リスク | 管理経路 |
|---|---|
| 顧客のレバレッジ損失 | 委託保証金率、追証、強制決済、商品開示。 |
| 借株不足 | 品貸料、貸株規制、入札、外部株主からの借入。 |
| 決済不履行 | 清算、振替機関、証券金融会社の決済管理。 |
| 市場過熱 | TSE の日々公表、規制措置、証券会社の制限。 |
| 証券会社のバランスシート逼迫 | 証券会社の資金調達方針、信用リスク、集中、担保流動性。 |
| 顧客の誤解 | 現物取引、制度信用、一般信用、有価証券担保ローン、デリバティブの明確な区別。 |

## 調査チェックリスト

1. 商品が現物取引、制度信用、一般信用、有価証券担保ローン、FX / CFD、またはデリバティブ証拠金のどれかを特定する。
2. 証券会社の信用取引商品開示と担保規則を確認する。
3. 銘柄別の信用データが重要な場合は、TSE の対象銘柄 / 規制 / 権利処理経路を確認する。
4. 証券金融上の圧力が重要な場合は、JSF の融資残高 / 貸株 / 品貸料経路を確認する。
5. TSE の信用取引残高と JSF の貸付を慎重に比較する。両者は異なる指標である。
6. 証券会社収益を評価する際は、信用取引の収益性を [[securities/japan-online-brokerage-competition|online brokerage competition]] と [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] に結び直す。

## 関連項目

- [[securities/INDEX]]
- [[financial-regulators/japan-securities-finance]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[money-market/jgb-repo-market-japan]]
- [[INDEX|FinWiki index]]

## 出典

- JPX: overview of margin transactions.
- JPX: purpose and mechanism of margin transactions.
- JPX: restrictions on margin trading and loans for margin trading.
- JPX: outline PDF for margin trading system.
- JSF: corporate message and securities-financing business pages.
- FSA: licensed / registered institutions portal.

---
source: securities/japan-stock-lending-market-route
source_hash: 041c74af30c284e1
lang: ja
status: machine
fidelity: ok
title: "日本の貸株市場経路"
translated_at: 2026-06-03T00:53:08.354Z
---
# 日本の貸株市場経路

## 概要

日本の貸株は、カストディアン、機関投資家、証券会社、証券金融会社、信用取引、空売り、担保、清算、決済、コーポレートアクションをつなぐ市場インフラ上の経路である。弱気シグナルとして分析する前に、まず配管として分析する。

このページは[[securities/INDEX|securities domain]]、[[securities/japan-short-selling-and-stock-loan-controls|short-selling and stock-loan controls]]、[[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]、[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]]、[[financial-regulators/japan-securities-finance|Japan Securities Finance]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[money-market/jgb-repo-market-japan|JGB repo market]]と合わせて使う。

## 経路地図

| 参加者 | 役割 |
|---|---|
| 資産保有者 | 経済的に証券を保有する主体。年金、投資信託、保険会社、機関投資家口座を通じることが多い。 |
| カストディアン / 信託銀行 | 証券を保管し、コーポレートアクションを処理し、指図に基づいて貸株プログラムを支援することがある。 |
| 証券会社 | 顧客の信用取引、マーケットメイク、ヘッジ、決済手当、プライムブローカレッジ類似の需要のために証券を借りる。 |
| [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | 制度信用取引およびより広い証券金融活動のため、証券会社に資金と証券を供給する。 |
| 清算 / 振替機関 | [[securities/japan-securities-clearing-corp|JSCC]]および[[securities/japan-securities-depository-center|JASDEC]]が約定後決済の配管を支える。 |
| 担保提供者 | 貸借契約と市場慣行に応じて、現金または証券担保を提供する。 |

## フローの種類

| フロー | 説明 | 公開情報上の重要性 |
|---|---|---|
| 信用取引連動の貸株 | 制度信用売りを支えるために供給される証券。 | 個人の信用取引と JSF データ解釈の中心。 |
| 機関投資家の貸株 | カストディ / 資産保有者の証券が証券会社その他の借り手に貸し出される。 | 受益者に追加収益を生み得る。 |
| 決済手当 | 受渡不履行を回避するための借入。 | 業務上の処理であり、必ずしも方向感を示さない。 |
| マーケットメイク / ヘッジ用借株 | 流動性供給やヘッジのための借入。 | デリバティブや顧客フローに結びつくことが多い。 |
| 特別 / 希少な借株 | 銘柄固有の希少性が手数料 / 品貸料に反映される。 | 踏み上げ、規制、監視シグナルを生み得る。 |

## カストディとの接続

信託銀行とカストディ銀行が重要なのは、法的名義、受益者、貸出指図、担保、コーポレートアクション、議決権の経路が分離しているためである。信託銀行の名義人として表示される口座から貸株供給を解釈する前に、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]を読む。

## 確認すべき問い

| 問い | 公開情報上の重要性 |
|---|---|
| 受益者は誰か。 | カストディアン名だけでは経済的所有者は分からない。 |
| 貸株は制度信用取引に紐づくのか、OTC の貸株なのか。 | JSF / TSE データと機関投資家貸株データは別の表面である。 |
| どの担保が差し入れられているか。 | 担保リスクは短期金融市場とレポ分析につながる。 |
| 誰が株式をリコールできるか。 | コーポレートアクション、議決権、決済タイミングが重要になる。 |
| 借株は希少か。 | 希少性は品貸料、空売りの採算、銘柄規制に影響し得る。 |
| 貸株プログラムは開示されているか。 | 公開される詳細はカストディアン、ファンド、資産保有者ごとに異なる。 |

## JapanFG での関連性

- [[trust-banks/custody-bank|Custody Bank of Japan]]および[[trust-banks/master-trust-bank|Master Trust Bank of Japan]]は国内の資産管理と名義人インフラとして重要である。
- [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]および[[foreign-financial-institutions/state-street-japan|State Street Japan]]はグローバルカストディと海外投資家経路に重要である。
- [[financial-regulators/japan-securities-finance|Japan Securities Finance]]は専用の証券金融ノードである。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]]は証券会社 / ディーラー側のアンカーである。

## リサーチチェックリスト

1. 問いが貸株供給、借株需要、空売り、信用取引、決済手当のどれに関するものかを判定する。
2. カストディアン名義と受益者を切り分ける。
3. 貸株が信用取引連動であれば、JSF / JPX の銘柄別規制と信用取引データを確認する。
4. 貸株プログラムが重要であれば、カストディアン / ファンド / 資産保有者の開示を確認する。
5. 短期金融市場の論点は[[money-market/jgb-repo-market-japan|repo / collateral context]]へ接続する。

## 関連項目

- [[securities/INDEX]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-regulators/japan-securities-finance]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[INDEX|FinWiki index]]

## 出典

- JSF: securities-financing business and corporate message pages.
- JSDA: borrowing and lending transaction guidelines for share certificates.
- JPX: margin trading overview and restrictions.
- JASDEC / JSCC / JPX: DVP, depository, clearing, and settlement public pages.

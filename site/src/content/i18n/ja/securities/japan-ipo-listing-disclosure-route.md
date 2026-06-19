---
source: securities/japan-ipo-listing-disclosure-route
source_hash: 18d3cdbca6909e40
lang: ja
status: machine
fidelity: ok
title: "日本 IPO 上場開示ルート"
translated_at: 2026-06-19T12:43:19.976Z
---

# 日本 IPO 上場開示ルート

## 概要

日本の IPO 記録は、取引所の上場審査、有価証券届出による開示、引受／ブックビルディング、上場承認、TDnet 適時開示、EDINET 法定開示、上場後のコーポレートガバナンス記録を組み合わせたものである。本ページは、発行体が TSE 上場市場へ参入する公開ルートを記録する。

本ページは [[securities/INDEX|securities domain]] に属し、[[finance/INDEX|finance domain]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[financial-regulators/japan-exchange-group|Japan Exchange Group]]、[[securities/japan-underwriting-market-structure|Japan underwriting market structure]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[finance/japan-ib-league-table|Japan IB league table]]、[[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] にリンクする。

## ルートマップ

| レイヤー | 公開ソースルート | 公開記録フィールド |
|---|---|---|
| 上場会場 | JPX／TSE 上場ページ | 市場区分、上場基準、上場スケジュール、上場承認。 |
| 上場審査 | 日本取引所自主規制法人／TSE ルート | 形式基準、実質審査、市場別ガイドブックルート。 |
| 有価証券開示 | EDINET／有価証券届出書 | 発行体、募集条件、財務諸表、リスク要因、資金使途。 |
| 引受 | 証券会社／主幹事／JSDA ルート | 主幹事、シンジケート団、ブックビルディング、募集価格。 |
| 上場承認 | JPX 新規上場ページおよび発行体公表 | 上場承認日、上場日、新規上場銘柄の初期書類。 |
| 適時開示 | TDnet | 上場承認、訂正、ガバナンス、上場後の公表。 |
| コーポレートガバナンス | JPX ガバナンス報告書および発行体開示 | ガバナンス体制、独立取締役、株主総会書類。 |
| 上場後市場データ | TSE／市場データベンダー／発行体リリース | 初値、出来高、時価総額、ロックアップ開示。 |

## 上場運営者および審査フィールド

TSE／JPX が新規上場ルートを運営する。JPX-R は TSE から委託を受けて上場審査を実施する。公開ソースの経路には、JPX の上場予定者ハブ、新規上場ガイドブック、市場別上場基準、新規上場ページが含まれる。

新規上場基準は区分により異なる。JPX は Prime、Standard、Growth、外国株ルートそれぞれについて別個の基準およびガイドブック資料を公表している。ページレベルのソーススナップショットは、参照されている市場区分を特定する。

## 公開上場ルート

| ステージ | 公開記録フィールド |
|---|---|
| 上場準備 | 監査状況、内部統制システム、ガバナンス、資本政策、主幹事、上場区分。 |
| 申請 | 上場申請ルート、取引所／JPX-R 審査、提出書類。 |
| 上場審査 | 形式基準、実質基準、事業継続性、ガバナンス、開示統制、株主構成。 |
| 上場承認 | 承認日、上場日、新規上場銘柄概要、JPX 新規上場ページ上の公開書類。 |
| 募集／ブックビルディング | ブックビルディングレンジ、募集／売出、オーバーアロットメント、主幹事、シンジケート団、募集価格。 |
| 初日取引 | 初値、始値、出来高、時価総額、開示されている場合のロックアップ参照。 |
| 上場後開示 | TDnet、EDINET、コーポレートガバナンス報告書、決算開示、株主総会資料。 |

## 新規上場書類フィールド

JPX の公開新規上場ページは、継続的に更新される発行体記録を提供する。ソースパックは、新規上場ページで一般的に閲覧可能な以下の公開書類リンクを記録する：

| 書類／フィールド | 公開コンテンツルート |
|---|---|
| 上場日 | JPX 新規上場ページ。 |
| 上場承認日 | JPX 新規上場ページ。 |
| 新規上場銘柄概要 | 上場銘柄サマリー。 |
| 新規上場申請のための有価証券報告書（Ⅰの部） | 事業、財務、リスク、ガバナンス、株主開示。 |
| コーポレートガバナンス報告書 | ガバナンス体制およびガバナンスコード開示。 |
| 決算短信 | 提供されている場合の発行体決算／財務開示。 |
| 確認書 | 発行体確認書類ルート。 |

## TDnet ルート

TDnet は上場会社の適時開示のための取引所開示レールである。JPX は、上場会社が上場規則により適時開示に TDnet を使用することを義務付けられていると述べている。TDnet の公開サーフェスには、適時開示情報閲覧サービス／`適時開示情報閲覧サービス`、東証上場会社情報サービス／`東証上場会社情報サービス`、有料の TDnet データベースサービスが含まれる。

JPX は、TDnet に掲載された開示は TDnet 開示と同時に公衆縦覧に供され、重要事実および一定の公開買付け事実についてインサイダー取引上の公表措置を完了し得ると述べている。これは IPO／上場記録を [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] に結び付ける。

## タイミングフィールド

| ソースルート | タイミングフィールド |
|---|---|
| JPX 上場スケジュールページ | キックオフから上場まで会社の社内体制次第で約 1 年。 |
| JPX 上場スケジュールページ | 2 営業年度の監査が必要。 |
| JPX 上場スケジュールページ | 外国会社の上場審査には約 3 か月を要する。 |
| JPX 上場スケジュールページ | 外国会社の申請の場合、上場承認後 IPO 手続きに約 1 か月を要する。 |

ソースパックで閲覧した JPX 上場スケジュールページは、2022-04-03 の更新日を示していた。タイミングフィールドは、発行体固有の実際のタイムラインではなく、スケジュールページのフィールドとして記録される。

## IPO 書類フィールド

| フィールド | 書類ルート |
|---|---|
| 発行体法定名称 | EDINET 届出書および JPX 上場通知。 |
| 市場区分 | TSE 上場承認／JPX 上場ページ。 |
| 上場審査ルート | JPX-R／TSE ガイドブックおよび区分基準。 |
| 主幹事 | 届出書、目論見書、会社公表。 |
| 募集タイプ | 新規発行、売出、オーバーアロットメント、国内／グローバルオファリング。 |
| 募集価格およびブックビルディングレンジ | 引受／目論見書開示。 |
| リスク要因 | 有価証券届出書。 |
| 資金使途 | 有価証券届出書。 |
| ロックアップ | 届出書／目論見書。 |
| ガバナンス体制 | コーポレートガバナンス報告書および発行体書類。 |

## 引受との接続

[[securities/japan-underwriting-market-structure|Japan underwriting market structure]] は、IPO／PO／債券の引受機能、主幹事の役割、ブックビルディング、JSDA 規則、EDINET、リーグテーブルの解釈を記録する。[[finance/japan-ib-league-table|Japan IB league table]] は、ベンダー固有のランキングフィールドおよび期間を記録する。

## JapanFG リンク

- 証券引受会社：[[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/smbc-nikko]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]。
- オンライン証券による販売：[[securities/japan-online-brokerage-competition]]。
- 取引所／インフラ：[[financial-regulators/japan-exchange-group]]、[[securities/tokyo-stock-exchange]]、[[securities/japan-securities-clearing-corp]]、[[securities/japan-securities-depository-center]]。

## 関連

- [[securities/INDEX]]
- [[finance/INDEX]]
- [[securities/tokyo-stock-exchange]]
- [[financial-regulators/japan-exchange-group]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-licenses/securities-license-stack]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-large-shareholding-disclosure]]
- [[INDEX|FinWiki index]]

## ソース

- JPX：上場予定者ハブ。
- JPX：新規上場ガイドブックおよび Prime ガイドブック。
- JPX：新規上場基準。
- JPX：上場スケジュール。
- JPX：新規上場ページ。
- JPX：適時開示概要および TDnet ページ。
- EDINET：法定開示システム。
- JSDA：協会概要および引受／会員コンテキスト。
- FSA：金融商品取引業者一覧。

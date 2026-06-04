---
source: securities/japan-ipo-listing-disclosure-route
source_hash: 1419594bf90b45ff
lang: ja
status: machine
fidelity: ok
title: "日本の IPO 上場開示ルート"
translated_at: 2026-06-03T00:53:08.333Z
---
# 日本の IPO 上場開示ルート

## 概要

日本の IPO 記録は、取引所の上場審査、有価証券届出書による開示、引受 / ブックビルディング、上場承認、TDnet 適時開示、EDINET 法定開示、上場後のコーポレートガバナンス記録を組み合わせたものである。このページは、発行体が TSE 上場市場へ入るための公開ルートを記録する。

このページは [[securities/INDEX|securities domain]] に属し、[[finance/INDEX|finance domain]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[financial-regulators/japan-exchange-group|Japan Exchange Group]]、[[securities/japan-underwriting-market-structure|Japan underwriting market structure]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[finance/japan-ib-league-table|Japan IB league table]]、[[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] にリンクする。

## ルートマップ

| レイヤー | 公開情報ルート | 公開記録フィールド |
|---|---|---|
| 上場市場 | JPX / TSE 上場ページ | 市場区分、上場基準、上場スケジュール、上場承認。 |
| 上場審査 | Japan Exchange Regulation / TSE ルート | 形式基準、実質審査、市場別ガイドブックのルート。 |
| 証券開示 | EDINET / 有価証券届出書 | 発行体、募集条件、財務諸表、リスク要因、資金使途。 |
| 引受 | 証券会社 / 主幹事 / JSDA ルート | 主幹事、シンジケート、ブックビルディング、公開価格。 |
| 上場承認 | JPX 新規上場ページおよび発行体発表 | 上場承認日、上場日、新規上場申請書類。 |
| 適時開示 | TDnet | 上場承認、訂正、ガバナンス、上場後発表。 |
| コーポレートガバナンス | JPX ガバナンス報告書および発行体開示 | ガバナンス構造、独立役員、株主総会資料。 |
| 上場後市場データ | TSE / 市場データベンダー / 発行体リリース | 初値、出来高、時価総額、開示される場合のロックアップ。 |

## 上場運営者と審査領域

TSE / JPX が初期上場ルートを運営する。JPX-R は、TSE から委任された上場審査を行う。公開情報の経路には、JPX の上場希望会社向けハブ、新規上場ガイドブック、市場別上場基準、新規上場会社ページが含まれる。

初期上場基準は市場区分ごとに異なる。JPX は Prime、Standard、Growth、外国株ルートについて、個別の基準とガイドブック資料を公表している。ページ単位のソーススナップショットは、参照している市場区分を特定する。

## 公開上場ルート

| 段階 | 公開記録フィールド |
|---|---|
| 上場前準備 | 監査状況、内部統制システム、ガバナンス、資本政策、主幹事、上場区分。 |
| 申請 | 上場申請ルート、取引所 / JPX-R 審査、提出書類。 |
| 上場審査 | 形式基準、実質基準、事業継続性、ガバナンス、開示統制、株主構成。 |
| 上場承認 | 承認日、上場日、新規上場銘柄概要、JPX 新規上場ページ上の公開書類。 |
| 募集 / ブックビルディング | ブックビルディング仮条件、募集 / 売出し、オーバーアロットメント、主幹事、シンジケート、公開価格。 |
| 初日取引 | 初値、始値、出来高、時価総額、開示される場合のロックアップ参照。 |
| 上場後開示 | TDnet、EDINET、コーポレートガバナンス報告書、決算開示、株主総会資料。 |

## 新規上場書類フィールド

JPX の公開新規上場ページは、発行体記録を順次提供する。ソースパックは、新規上場ページで一般に見える次の公開書類リンクを記録する。

| 書類 / フィールド | 公開内容ルート |
|---|---|
| 上場日 | JPX 新規上場ページ。 |
| 上場承認日 | JPX 新規上場ページ。 |
| 新規上場銘柄概要 | 上場銘柄の概要。 |
| 新規上場申請のための有価証券報告書（I の部） | 事業、財務、リスク、ガバナンス、株主の開示。 |
| コーポレートガバナンス報告書 | ガバナンス構造とガバナンスコード開示。 |
| 決算短信 | 提供される場合の発行体の決算 / 財務開示。 |
| 確認書 | 発行体の確認書類ルート。 |

## TDnet ルート

TDnet は、上場会社の適時開示のための取引所開示レールである。JPX は、上場会社が上場規則により適時開示に TDnet を使用することを求められていると説明している。TDnet の公開面には、Company Announcements Disclosure Service / `適時開示情報閲覧サービス`、Listed Company Search / `東証上場会社情報サービス`、有料 TDnet データベースサービスが含まれる。

JPX は、TDnet に掲載された開示は TDnet 開示と同時に公衆縦覧可能となり、重要事実および一定の公開買付事実について、インサイダー取引規制上の公表措置を完了しうると説明している。これにより、IPO / 上場記録は [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] と接続する。

## タイミングフィールド

| ソースルート | タイミングフィールド |
|---|---|
| JPX 上場スケジュールページ | キックオフから上場まで、会社内部体制によりおおむね 1 年。 |
| JPX 上場スケジュールページ | 2 事業年度分の監査が必要。 |
| JPX 上場スケジュールページ | 外国会社の上場審査には約 3 か月。 |
| JPX 上場スケジュールページ | 外国会社申請では、上場承認後、IPO 手続に約 1 か月が必要。 |

ソースパックで閲覧した JPX 上場スケジュールページには、更新日 2022-04-03 が表示されていた。タイミングフィールドはスケジュールページ上のフィールドとして記録しており、発行体固有の実際のタイムラインではない。

## IPO 書類フィールド

| フィールド | 書類ルート |
|---|---|
| 発行体の法的名称 | EDINET 有価証券届出書および JPX 上場通知。 |
| 市場区分 | TSE 上場承認 / JPX 上場ページ。 |
| 上場審査ルート | JPX-R / TSE ガイドブックおよび区分別基準。 |
| 主幹事 | 届出書、目論見書、会社発表。 |
| 募集形態 | 公募、売出し、オーバーアロットメント、国内 / グローバルオファリング。 |
| 公開価格とブックビルディング仮条件 | 引受 / 目論見書開示。 |
| リスク要因 | 有価証券届出書。 |
| 資金使途 | 有価証券届出書。 |
| ロックアップ | 届出書 / 目論見書。 |
| ガバナンス構造 | コーポレートガバナンス報告書および発行体書類。 |

## 引受との接続

[[securities/japan-underwriting-market-structure|Japan underwriting market structure]] は IPO / PO / 債券引受機能、主幹事役、ブックビルディング、JSDA ルール、EDINET、リーグテーブル解釈を記録する。[[finance/japan-ib-league-table|Japan IB league table]] はベンダー固有のランキングフィールドと日付範囲を記録する。

## JapanFG リンク

- 証券引受会社: [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/smbc-nikko]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]。
- オンライン証券の販売: [[securities/japan-online-brokerage-competition]]。
- 取引所 / インフラ: [[financial-regulators/japan-exchange-group]]、[[securities/tokyo-stock-exchange]]、[[securities/japan-securities-clearing-corp]]、[[securities/japan-securities-depository-center]]。

## 関連項目

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

## 出典

- JPX: 上場希望会社向けハブ。
- JPX: 新規上場ガイドブックおよび Prime ガイドブック。
- JPX: 新規上場基準。
- JPX: 上場スケジュール。
- JPX: 新規上場会社ページ。
- JPX: 適時開示概要および TDnet ページ。
- EDINET: 法定開示システム。
- JSDA: 協会概要および引受 / 会員文脈。
- FSA: 金融商品取引業者一覧。

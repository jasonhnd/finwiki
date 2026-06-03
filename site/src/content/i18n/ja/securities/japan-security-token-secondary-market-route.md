---
source: securities/japan-security-token-secondary-market-route
source_hash: 0219c0c14a8b06fb
lang: ja
status: machine
fidelity: ok
title: "日本のセキュリティトークン流通市場ルート"
translated_at: 2026-06-03T00:53:08.334Z
---
# 日本のセキュリティトークン流通市場ルート

## 概要

日本のセキュリティトークン流通市場の記録は、金融商品取引法上の登録、第一種金融商品取引業、PTS / 代替取引施設機能、トークンプラットフォーム・インフラ、証券会社による販売、カストディ / 記録管理、発行体開示を結びつける。このページは、公開開示されたセキュリティトークン流通取引の市場構造ルートを記録する。

このページは [[securities/INDEX|securities domain]] に属し、[[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[securities/osaka-digital-exchange|Osaka Digital Exchange]]、[[JapanFG/progmat|Progmat]]、[[JapanFG/jsda|JSDA]]、[[JapanFG/japan-exchange-group|Japan Exchange Group]]、[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] にリンクする。

## ルートマップ

| レイヤー | 公開カテゴリ | 公開記録フィールド |
|---|---|---|
| セキュリティトークン | 該当する場合のトークン化証券 / 電子記録移転権利 | 発行体開示およびプラットフォーム資料。 |
| 証券会社 | 第一種金融商品取引業者または関連する FIEA 登録 | FSA 金融商品取引業者一覧。 |
| 取引施設 | 該当する場合の PTS / 代替取引施設ルート | ODX / START 公開資料および FSA / JSDA 文脈。 |
| 自主規制ルート | JSDA 非上場有価証券 PTS ルールと Japan STO Association の議論文脈 | ルール範囲、投資家保護目的、対象銘柄の定義。 |
| プラットフォーム / トークン・インフラ | トークン発行 / ライフサイクル・プラットフォーム | Progmat およびその他プラットフォーム開示。 |
| 投資家販売 | 証券会社 / ブローカー・ルート | 商品書類およびブローカー開示。 |
| 決済 / カストディ | カストディ、移転、記録管理、受託者 / プラットフォーム役割 | 商品開示、信託 / カストディ書類、プラットフォーム規約。 |

## 政策・ルールルート

2022-06-22 日付の FSA Market System Working Group 中間報告は、セキュリティトークンを含む非上場有価証券の PTS 機能を通じた円滑な流通を扱った。JSDA 資料は、FSA 中間報告および Japan STO Association との議論を経て、非上場有価証券の PTS 取引ルールが作られたと説明している。

JSDA は、ルールの目的を、PTS における非上場有価証券の公正かつ円滑な取引、投資家保護、流通市場の発展としている。JSDA 資料は、`特定投資家向け銘柄を含む非上場承認 PTS 銘柄` の範囲に、トークン化証券および一定の特定投資家向け有価証券が含まれると特定している。

## ODX / START ルート

[[securities/osaka-digital-exchange|Osaka Digital Exchange]] とその START セキュリティトークン市場は、公開流通市場でのセキュリティトークン取引に関する FinWiki の主要ルートである。ODX は、START が 2023-12-25 に運営を開始したと発表し、これをセキュリティトークンの国内初の流通市場 / PTS と説明した。

START での取引は、ODX が取引参加者として受け入れた証券会社を通じて行われる。ODX の公開資料は、ODX 自身が非プロ投資家に直接サービスを提供しないと説明している。START 商品は、取引所上場規則ではなく ODX 独自の規則に従うが、商品と仲介者は FIEA 関連の開示・規制ルート内に残る。

## Progmat ルート

[[JapanFG/progmat|Progmat]] は、公開資料が接続を支える範囲で、セキュリティトークン、ステーブルコイン、ユーティリティトークン、プラットフォーム・インフラに結びつくトークン化プラットフォーム・ルートである。セキュリティトークンの商品ページは、開示される場合、発行体、資産、ブローカー、信託 / カストディ、移転メカニクスを特定する。

Progmat の公開コンセプトページのソースパックには、次の市場規模フィールドが記録されていた。

| フィールド | ソースパック上の値 |
|---|---|
| 国内累計セキュリティトークン案件数 | 87 |
| Progmat 取扱累計案件数 | 45 |
| 国内残高 | JPY 667.4  billion 超 |
| Progmat 取扱残高 | JPY 452.2  billion 超 |

これらのフィールドは Progmat の公開ページに紐づいており、時間に敏感な要約で使う場合は、表示ページ日付が必要である。

## JPX / BOOSTRY の隣接関係

JPX は March 2023 に、BOOSTRY への出資とセキュリティトークン事業提携を公表した。JPX はセキュリティトークン型デジタル債に関する取り組みも公開している。これらの記録は START 取引施設の記録ではなく、発行 / インフラの隣接関係である。

主流の JPX 現物株は、取引施設、清算、決済の役割が取引所、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]] に分離される比較基準を提供する。

## 公開記録フィールド

| フィールド | ソースルート |
|---|---|
| 発行体 / 資産タイプ | 商品開示および発行体資料。 |
| トークンプラットフォーム | Progmat / プラットフォーム公開ページ。 |
| 証券会社 | FSA FIBO 登録簿およびブローカー商品ページ。 |
| 取引施設 | ODX / START 公開ページおよび PTS 関連資料。 |
| 取引参加者 | ODX 参加者開示および証券会社商品ルート。 |
| ルールルート | JSDA 非上場有価証券 PTS ルールおよび FSA 市場制度資料。 |
| 適格性 / 投資家区分 | 商品書類およびブローカー規約。 |
| 取引時間 / マッチング方式 | 取引施設公開ページ。 |
| 決済 / カストディ構造 | 商品書類、受託者 / カストディアン / プラットフォーム開示。 |
| 流通市場ステータス | 取引施設通知、商品ページ、発行体発表。 |

## 決済調査フィールド

| フィールド | ソースルート |
|---|---|
| 現金レッグ | 証券会社規約、信託銀行 / 銀行ルート、開示される場合のトークン化預金 / ステーブルコイン実験ページ。 |
| トークン移転 | プラットフォーム開示および商品規約。 |
| DvP 状況 | 公開されている ODX / プラットフォーム / 銀行実験発表。 |
| カストディ / 記録管理 | 商品書類および受託者 / カストディアン開示。 |
| 投資家明細ルート | 証券会社および商品書類。 |

## 関連項目

- [[securities/INDEX]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[JapanFG/progmat]]
- [[JapanFG/jsda]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/sbi-securities]]
- [[JapanFG/mufg-mums]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: Market System Working Group 中間報告およびワーキンググループ索引。
- JSDA: 非上場有価証券 PTS 自主規制規則および用語定義。
- ODX: START 開始および会社ページ。
- Progmat: 公開コンセプトページ。
- JPX: BOOSTRY 提携およびデジタル債発表。
- JPX: 現物株の清算 / 決済概要および機関ページ。
- FSA: 金融商品取引業者一覧。

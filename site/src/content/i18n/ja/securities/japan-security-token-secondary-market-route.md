---
source: securities/japan-security-token-secondary-market-route
source_hash: 6cf03985180be745
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本のセキュリティトークン流通市場ルート"
translated_at: 2026-06-26T08:28:46.069Z
---

# 日本のセキュリティトークン流通市場ルート

## 概要日本のセキュリティトークン流通市場の記録は、金融商品取引法上の登録、第一種金融商品取引業、PTS / 代替取引venue機能、トークンプラットフォーム基盤、証券会社による販売、カストディ / 記録管理、および発行体ディスクロージャーを結びつける。本ページは、公開開示されたセキュリティトークンの流通取引について、市場構造のルートを記録する。

本ページは [[securities/INDEX|securities domain]] に属し、[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[securities/osaka-digital-exchange|Osaka Digital Exchange]]、[[payment-firms/progmat|Progmat]]、[[financial-regulators/jsda|JSDA]]、[[financial-regulators/japan-exchange-group|Japan Exchange Group]]、[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] にリンクする。

## ルートマップ

| Layer | Public category | Public record field |
|---|---|---|
| Security token | 該当する場合、トークン化された証券 / 電子記録移転権利 | 発行体ディスクロージャーおよびプラットフォーム資料。 |
| Securities firm | 第一種 FIBO または関連する FIEA 登録 | FSA の金融商品取引業者リスト。 |
| Trading venue | 該当する場合、PTS / 代替 venue ルート | ODX / START の公開資料および FSA / JSDA の文脈。 |
| Self-regulatory route | JSDA の非上場有価証券 PTS ルールおよび日本 STO 協会の議論の文脈 | ルールの範囲、投資家保護の目的、適格銘柄の定義。 |
| Platform / token infrastructure | トークン発行 / ライフサイクル・プラットフォーム | Progmat およびその他のプラットフォームのディスクロージャー。 |
| Investor distribution | 証券会社 / ブローカールート | 商品資料およびブローカーのディスクロージャー。 |
| 決済 / カストディ | カストディ、移転、記録管理、受託者 / プラットフォームの役割 | 商品ディスクロージャー、信託 / カストディ資料、プラットフォーム規約。 |

## 政策・ルートルート

2022-06-22付の FSA 市場制度ワーキング・グループ中間報告は、PTS 機能を通じた、セキュリティトークンを含む非上場有価証券のより円滑な流通について扱った。JSDA 資料は、非上場有価証券の PTS 取引に関するルールが、FSA 中間報告および日本 STO 協会との議論の後に策定されたと述べている。

JSDA は、ルールの目的を、PTS における非上場有価証券の公正かつ円滑な取引、投資家保護、および流通市場の発展と説明している。JSDA 資料は、`非上場承認 PTS 銘柄`の範囲がトークン化された証券および特定の特定投資家向け証券を含むことを特定している。

## ODX / START ルート

[[securities/osaka-digital-exchange|Osaka Digital Exchange]] およびその START セキュリティトークン市場は、公開された流通市場でのセキュリティトークン取引のための主要な FinWiki ルートである。ODX は START が 2023-12-25に運用を開始したと発表し、それを日本初のセキュリティトークンの流通取引市場 / PTS と説明した。

START 上の取引は、ODX が取引参加者として受け入れた証券会社を通じてルーティングされる。ODX の公開資料は、ODX 自体は非プロ投資家に直接サービスを提供しないと述べている。START 商品は取引所上場ルールではなく ODX 自身のルールに従うが、その金融商品および仲介者は FIEA 関連のディスクロージャーおよび規制ルートの内側にとどまる。

## Progmat ルート

[[payment-firms/progmat|Progmat]] は、公開資料がその関連を裏付ける場合に、セキュリティトークン、ステーブルコイン、ユーティリティトークン、およびプラットフォーム基盤にリンクするトークン化プラットフォームのルートである。セキュリティトークン商品ページは、開示されている場合に、発行体、資産、ブローカー、信託 / カストディ、および移転メカニクスを特定する。

Progmat の公開コンセプトページのソースパックは、以下の市場規模フィールドを記録した：

| Field | Value in source pack |
|---|---|
| Domestic cumulative security-token cases | 87 |
| Progmat-handled cumulative cases | 45 |
| Domestic outstanding balance | Over JPY 667.4 billion |
| Progmat-handled outstanding balance | Over JPY 452.2 billion |

これらのフィールドは Progmat の公開ページに紐づいており、時点依存の要約に用いる際には表示されているページ日付を要する。

## JPX / BOOSTRY の隣接

JPX は 2023年 3 月に BOOSTRY への出資およびセキュリティトークン事業提携を公開発表した。JPX はまた、セキュリティトークンベースのデジタル債の取り組みも公開発表した。これらの記録は、START の venue 記録ではなく、発行 / 基盤の隣接である。

主流の JPX 現物株式は、取引 venue、清算、決済の役割が取引所 venue、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]] にわたって分離されている比較ベースラインを提供する。

## 公開記録フィールド

| Field | Source route |
|---|---|
| 発行会社 / asset type | 商品ディスクロージャーおよび発行体資料。 |
| Token platform | Progmat / プラットフォームの公開ページ。 |
| Securities firm | FSA FIBO レジストリおよびブローカー商品ページ。 |
| Trading venue | ODX / START の公開ページおよび PTS 関連資料。 |
| Trading participant | ODX 参加者ディスクロージャーおよび証券会社の商品ルート。 |
| Rule route | JSDA の非上場有価証券 PTS ルールおよび FSA の市場制度資料。 |
| Eligibility / investor category | 商品資料およびブローカー規約。 |
| Trading hours / matching method | Venue の公開ページ。 |
| 決済 / カストディ structure | 商品資料、受託者 / カストディアン / プラットフォームのディスクロージャー。 |
| Secondary-market status | Venue の通知、商品ページ、および発行体のお知らせ。 |

## 決済リサーチ・フィールド

| Field | Source route |
|---|---|
| Cash leg | 証券会社の規約、信託銀行 / 銀行ルート、開示されている場合のトークン化預金 / ステーブルコイン実験ページ。 |
| Token transfer | プラットフォームのディスクロージャーおよび商品規約。 |
| DvP status | 公開されている場合の ODX / プラットフォーム / 銀行の実験のお知らせ。 |
| カストディ / recordkeeping | 商品資料および受託者 / カストディアンのディスクロージャー。 |
| Investor statement route | 証券会社および商品資料。 |

## Related

- [[securities/INDEX]]
- [[financial-licenses/securities-license-stack]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[payment-firms/progmat]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/mufg-mums]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Market System Working Group interim report and working-group index.
- JSDA: unlisted securities PTS self-regulatory rules and term definition.
- ODX: START launch and corporate pages.
- Progmat: public concept page.
- JPX: BOOSTRY alliance and digital bond announcements.
- JPX: cash equity clearing / settlement outline and institution pages.
- FSA: financial instruments business operator list.

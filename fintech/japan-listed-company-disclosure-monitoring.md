---
title: 日本上場会社 開示情報モニタリング SOP（17 チャネル）
aliases: []
domain: fintech
kind: knowledge
created: 2026-04-24
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-08-08
confidence: likely
tags: [fintech, disclosure, listed-company]
status: confirmed
evidence_count: 1
type: wiki
sources:
  - "https://www.release.tdnet.info/inbs/I_main_00.html"
  - "https://disclosure2.edinet-fsa.go.jp/"
  - "https://www2.jpx.co.jp/tseHpFront/JJK010010Action.do"
  - "https://www.jpx.co.jp/english/corporate/news/news-releases/0060/20241009-01.html"
  - "https://www.jpx.co.jp/english/equities/trading/domestic/01.html"
  - "https://www.jpx.co.jp/equities/listing/disclosure/tdnet/"
  - "https://www.jpx.co.jp/glossary/ra/566.html"
---

# 日本上場会社 開示情報モニタリング SOP（17 チャネル）

> [!info] コア認知
> 日本上場会社の適時開示（[[fintech/japan-third-party-allotment-5-step-flow|第三者割当]]・決算・買収・IR 等）を追跡するための**公式情報 + 第三者サービス + 海外向け情報**の三層監視マップ。

TDnet は開示イベントに応じて随時更新され、全社共通の「15:00 発表」時刻はない。東京証券取引所の現物市場は 2024-11-05 から 15:30 終了であり、監視は固定時刻ではなく対象会社の予定と実際の開示イベントに合わせる。^[https://www.jpx.co.jp/equities/listing/disclosure/tdnet/; https://www.jpx.co.jp/english/corporate/news/news-releases/0060/20241009-01.html]

## 三層構造

### 一層: 公式情報（Primary）

下表は発行会社・提出者が利用する公的な開示／検索面である。TDnet は開示と同時に掲載され、無料閲覧面の掲載期間は開示日を含む31日間。過去資料は東証上場会社情報サービス（過去10年）または有料の TDnet データベースで確認する。EDINET と JPX の更新時刻・収録範囲は各サービスの表示を優先する。^[https://www.jpx.co.jp/equities/listing/disclosure/tdnet/index.html; https://www.jpx.co.jp/listing/co-search/index.html]

| # | チャネル | URL 検索パターン | 用途 |
|---|---------|---------------|-----|
| 1 | [TDnet 適時開示情報閲覧サービス](https://www.release.tdnet.info/inbs/I_main_00.html) | `release.tdnet.info/inbs/I_main_00.html` | 取引所の適時開示。掲載と同時に閲覧でき、無料面は開示日を含む31日分 |
| 2 | [EDINET（金融庁）](https://disclosure2.edinet-fsa.go.jp/) | `disclosure2.edinet-fsa.go.jp/` | 金商法に基づく有価証券届出書・臨時報告書・大量保有報告書等 |
| 3 | [東証上場会社情報サービス](https://www2.jpx.co.jp/tseHpFront/JJK010010Action.do) | `www2.jpx.co.jp/tseHpFront/JJK010010Action.do` | 上場会社の基本情報、適時開示・ファイリング、コーポレートガバナンス情報 |

### 二層: 第三者サービス（Secondary）

以下は検索性・履歴・可視化・説明会記録などを補う第三者サービスであり、一次開示の代替ではない。数値、日時、会社名、法的ステータスは必ず TDnet / EDINET / JPX または発行会社資料へ戻って確認する。

| # | チャネル | URL パターン | 特徴 |
|---|---------|------------|-----|
| 4 | [Yahoo! Finance Japan](https://finance.yahoo.co.jp/) | `finance.yahoo.co.jp/quote/{code}.T/disclosure` | 銘柄別の開示・ニュース閲覧 |
| 5 | [日経 会社情報 DIGITAL](https://www.nikkei.com/nkd/) | `nikkei.com/nkd/company/disclose/?scode={code}` | 会社情報と開示資料の分類閲覧 |
| 6 | [Kabutan 株探](https://kabutan.jp/) | `kabutan.jp/stock/?code={code}` | 銘柄ニュース・開示・市場データの集約 |
| 7 | [Minkabu みんかぶ](https://minkabu.jp/) | `minkabu.jp/stock/{code}` | 銘柄情報と利用者予想の集約 |
| 8 | [会社四季報オンライン](https://shikiho.toyokeizai.net/) | `shikiho.toyokeizai.net/stocks/{code}/corporate` | 会社情報・業績・四季報記事（契約条件あり） |
| 9 | [Buffett Code](https://www.buffett-code.com/) | `buffett-code.com/company/{code}/` | 財務データの可視化・比較 |
| 10 | [FISCO 企業情報](https://web.fisco.jp/) | `web.fisco.jp/platform/companies/{code}` | 企業ニュース・市場分析 |
| 11 | [Logmi Finance](https://finance.logmi.jp/) | `finance.logmi.jp/companies/{id}` | 公開されている決算説明会等の書き起こし |
| 12 | [株主優待ガイド（大和 IR）](https://yutai-guide.daiwair.co.jp/) | `yutai-guide.daiwair.co.jp/stock/detail/{code}` | 掲載会社の株主優待情報 |
| 13 | [Ullet](https://www.ullet.com/) | `ullet.com/{code}/EDINET/ranking/stock` | EDINET 等を基にした大株主・財務情報の集約 |

### 三層: 海外向け情報（Tertiary）

英語表示や海外投資家向けの検索導線を補う層であり、一次開示の正確性や完全性を保証するものではない。

| # | チャネル | URL パターン |
|---|---------|------------|
| 14 | CNBC | `cnbc.com/quotes/{code}.T-JP` |
| 15 | Bloomberg Terminal / Web | `bloomberg.com/quote/{code}:JP` |
| 16 | Google Finance | `google.com/finance/quote/{code}:TYO` |
| 17 | Yahoo Finance（US 版） | `finance.yahoo.com/quote/{code}.T/` |

## 時系列 SOP（大型開示日）

### T-1 日（前日）

- [ ] ブラウザブックマーク「{code} 開示監視」フォルダ作成
- [ ] TDnet + Yahoo! Japan 適時開示 + EDINET 3 核心リンク保存
- [ ] 事前情報（三方比率・発行価格等）の整理

### 当日（T=0）

1. **寄り付き前 8:00**: TDnet、発行会社 IR、EDINET の更新と当日予定を確認
2. **取引時間中（9:00〜11:30、12:30〜15:30）**: 対象会社の決定・発生事実に応じて TDnet を継続監視
3. **開示直後**:
   - TDnet で会社コードまたは会社名検索 → 原文 PDF 保存
   - 事前情報と開示内容の照合（比率・価格・目的・効力発生日）
4. **開示後**: 法令上の提出事由に該当する場合に限り、EDINET で有価証券届出書や臨時報告書等を確認
5. **当日夜**: 第三者サービスの要約や掲示板反応を参考確認し、事実関係は一次資料へ戻って照合

臨時報告書は、金融商品取引法第24条の5と企業内容等の開示に関する内閣府令が定める提出事由に該当する場合の法定書類である。TDnet の適時開示と提出要件は同一ではなく、すべての適時開示に臨時報告書が伴うわけではない。^[https://www.jpx.co.jp/glossary/ra/566.html; https://faq.jpx.co.jp/disclo/tse/web/knowledge6736.html]

### T+1 日〜 T+3 日

- 東証における株価・出来高反応の確認
- 発行会社の英文開示がある場合は日本語原文との同時性・要約範囲を確認
- 大量保有報告書更新 → Ullet 確認

### T+7 日〜 T+30 日

- 払込完了報告
- 登記変更公告
- 株価 30 日 VWAP 動向

## ファイル保存の推奨

開示当日の保存物:
- `research/{date}_disclosure-tdnet-original.pdf` — TDnet 原文
- `research/{date}_disclosure-edinet-filing.pdf` — EDINET 届出書
- `research/{date}_price-reaction.md` — 当日・T+1・T+3 株価反応記録

## 適用場面

1. **投資先の開示追跡**: 第三者割当・増資・合併・業績予想修正
2. **競合情報取得**: 同業他社の決算・戦略発表
3. **M&A デューデリジェンス**: 買収候補の過去 5 年開示履歴 — TOB 規制との接続は [[finance/japan-tender-offer-process|日本公開買付プロセス]]
4. **IR コンプライアンス**: 自社発行案件の公表前シミュレーション
5. **大量保有報告監視**: 5% rule 専門 — [[finance/japan-large-shareholding-disclosure|日本大量保有報告制度]]

## 注意事項

1. **TDnet は 31 日間保存のみ**（それ以降は有料検索サービス要）
2. **EDINET は提出書類のみ**（社内議事録等は掲載なし）
3. **第三者サービスや掲示板は一次開示ではない**（数値・日時・法的状態は公式資料で再確認）
4. **固定の開示時刻を前提にしない**（TDnet は開示時刻に掲載され、現物市場の午後立会は15:30まで）

## 関連

- [[fintech/japan-third-party-allotment-5-step-flow|第三者割当 5 段階フロー]] — 開示の前後文脈となるプロセス
- [[fintech/japan-financial-regulation|日本金融規制]] — 資金決済法・金商法・信託業法

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
<!-- /wiki-links:managed -->

## Sources

- [JPX — TDnet の概要](https://www.jpx.co.jp/equities/listing/disclosure/tdnet/)
- [JPX — 現物株式の取引時間](https://www.jpx.co.jp/english/equities/trading/domestic/01.html)
- [JPX — 2024-11-05 の arrowhead 更新と取引時間延長](https://www.jpx.co.jp/english/corporate/news/news-releases/0060/20241009-01.html)
- [JPX — 臨時報告書の法定提出範囲](https://www.jpx.co.jp/glossary/ra/566.html)
- [TDnet 適時開示情報閲覧サービス](https://www.release.tdnet.info/inbs/I_main_00.html)
- [EDINET](https://disclosure2.edinet-fsa.go.jp/)
- [東証上場会社情報サービス](https://www2.jpx.co.jp/tseHpFront/JJK010010Action.do)

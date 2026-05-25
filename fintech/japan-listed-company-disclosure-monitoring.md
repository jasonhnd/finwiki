---
title: 日本上場会社 開示情報モニタリング SOP（17 チャネル）
aliases: []
domain: fintech
kind: knowledge
created: 2026-04-24
last_updated: 2026-05-18
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: possible
tags: [needs-review]
status: confirmed
evidence_count: 1
type: wiki
sources:
  - "https://www.release.tdnet.info/inbs/I_main_00.html"
  - "https://disclosure2.edinet-fsa.go.jp/"
  - "https://www2.jpx.co.jp/tseHpFront/JJK010010Action.do"
---

# 日本上場会社 開示情報モニタリング SOP（17 チャネル）

> [!info] コア認知
> 日本上場会社の適時開示（[[fintech/japan-third-party-allotment-5-step-flow|第三者割当]]・決算・買収・IR 等）をリアルタイム監視するための**公式 + 聚合 + 海外** 三層の監視渠道 map。

適切な渠道選択により、**公告 15:00 発表から数分以内の補足 + 翌日の舆情動向把握**までを効率的にカバーできる。

## 三層構造

### 一層: 官方源（Primary · 最権威）

**信頼度 100% · 当日リアルタイム**

| # | チャネル | URL 検索パターン | 用途 |
|---|---------|---------------|-----|
| 1 | TDnet 適時開示情報閲覧サービス | `release.tdnet.info/inbs/I_main_00.html` | JPX 公式 · 15:00 後即公表 · 31 日間保存 |
| 2 | EDINET（金融庁） | `disclosure2.edinet-fsa.go.jp/` | 有価証券届出書・臨時報告書・大量保有報告書 |
| 3 | JPX 上場会社検索 | `www2.jpx.co.jp/tseHpFront/JJK010010Action.do` | 上場区分・発行株数・基本情報 |

### 二層: 聚合器（Secondary · 易用性）

**信頼度 95% · 散户視点・舆情含み**

| # | チャネル | URL パターン | 特徴 |
|---|---------|------------|-----|
| 4 | Yahoo! Finance Japan 適時開示 | `finance.yahoo.co.jp/quote/{code}.T/disclosure` | 散户最活用 · 履歴長 |
| 5 | 日経 会社情報 DIGITAL 開示 | `nikkei.com/nkd/company/disclose/?scode={code}` | 定款・株主総会等分類 |
| 6 | Kabutan 株探 | `kabutan.jp/stock/?code={code}` | 散户速報 · 留言板舆情 |
| 7 | Minkabu みんかぶ | `minkabu.jp/stock/{code}` | 買い/売り予想比率 |
| 8 | 会社四季報オンライン | `shikiho.toyokeizai.net/stocks/{code}/corporate` | 四季報視点定性評価 |
| 9 | Buffett Code | `buffett-code.com/company/{code}/` | 財務可視化 · 決算比較 |
| 10 | FISCO 企業情報 | `web.fisco.jp/platform/companies/{code}` | 日文財務分析専業 |
| 11 | Logmi Finance | `finance.logmi.jp/companies/{id}` | 決算説明会文字記録 |
| 12 | 株主優待ガイド（大和 IR） | `yutai-guide.daiwair.co.jp/stock/detail/{code}` | 優待発行時のみ有効 |
| 13 | Ullet（大量保有報告） | `ullet.com/{code}/EDINET/ranking/stock` | 5% rule 専門 |

### 三層: 海外通道（Tertiary · 外盤参考）

**信頼度 80% · 英語情報・外国投資家視点**

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

1. **開盤前 8:00**: Yahoo!・Kabutan 夜間異動ニュース確認
2. **15:00 前**: TDnet メインページ standby · リフレッシュ準備
3. **15:00 後**:
   - TDnet で会社コードまたは会社名検索 → 原文 PDF 保存
   - 事前情報と公告内容の照合（三方比率・価格・目的）
4. **当日 17:00 前**: EDINET で届出書確認（臨時報告書提出の有無）
5. **当日夜**: Yahoo・Kabutan・Minkabu 留言板舆情 sweep

### T+1 日〜 T+3 日

- 株価反応監視（日本二級市場）
- 海外盤反応（香港・新加坡電子盤）
- 大量保有報告書更新 → Ullet 確認

### T+7 日〜 T+30 日

- 払込完了報告
- 登記変更公告
- 株価 30 日 VWAP 動向

## ファイル保存建議

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
3. **散户舆情は偏り注意**（Kabutan 留言板は悲観バイアス強め）
4. **海外盤情報はラグあり**（日本時間 15:00 → 海外即時反映まで 1-3h）

## 関連

- [[fintech/japan-third-party-allotment-5-step-flow|第三者割当 5 段階フロー]] — 開示の前後文脈となるプロセス
- [[fintech/japan-financial-regulation|日本金融規制]] — 資金決済法・金商法・信託業法

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
<!-- /wiki-links:managed -->

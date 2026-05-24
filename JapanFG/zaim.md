---
title: "Zaim (ザイム)"
aliases:
  - "Zaim"
  - "ザイム"
  - "株式会社 Zaim"
  - "Zaim Inc."
domain: JapanFG
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, fintech, pfm, household-finance, kddi]
status: active
sources:
  - "https://content.zaim.net/"
  - "https://content.zaim.net/company/"
  - "https://news.kddi.com/kddi/corporate/newsrelease/2022/04/14/6014.html"
---

# Zaim (ザイム)

## Wiki route

This entry sits under the [[JapanFG/INDEX|JapanFG index]] as a **PFM (Personal Financial Management)** app sitting next to the much larger [[JapanFG/money-forward|Money Forward]] ME peer. Read it with the [[JapanFG/bnpl-landscape|Japan BNPL landscape]] for adjacent consumer-finance context, the [[JapanFG/freee|freee]] / [[JapanFG/smartbank|SmartBank]] sibling household-finance set, and the [[JapanFG/au-fh|au フィナンシャル HD]] corporate context for the KDDI-affiliated branch story. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] and [[payments/credit-purchase-card-operators-japan-index|credit-purchase registry]] page sit one layer down the regulatory stack, while the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] explains why PFM apps depend on account-API economics.

## TL;DR

Zaim は 2011 年公開の国内最古参クラスの **家計簿アプリ**。[[JapanFG/money-forward|Money Forward]] ME と並び個人向け PFM カテゴリを形成してきた fintech 残量で、2022-04 に **KDDI 子会社化** され au 経済圏 ([[JapanFG/au-fh|au フィナンシャル HD]]) のデータ起点アセットとして再配置された。レシート OCR + 銀行・カード API 連携 + 自治体給付金検索という機能セットが特徴。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社 Zaim |
| Group | **KDDI 100% 子会社**（2022-04 完全子会社化）、[[JapanFG/au-fh|au フィナンシャル HD]] 経済圏内 |
| Product | Zaim 家計簿アプリ（iOS / Android / Web）|
| 規制ルート | 銀行 API 経由のデータ連携で **電子決済等代行業者** として金融庁登録（[[JapanFG/money-forward|Money Forward]] と同枠）。^[inferred] |

## 2. Business role

- レシート撮影 + OCR + 自動カテゴリ分類 + 銀行・カード明細自動連携によって家計を可視化する PFM アプリ。^[extracted]
- 自治体給付金 / 公的支援サービス検索など、家計外延の **生活情報レイヤー** を持つ点が [[JapanFG/money-forward|Money Forward]] ME と差別化軸。^[extracted]
- KDDI 子会社化以降、au 経済圏 ([[JapanFG/au-fh|au FH]] / au PAY / au じぶん銀行) との連動が戦略軸に位置付けられる。^[inferred]

## 3. Why this standalone page matters

PFM カテゴリは [[JapanFG/money-forward|Money Forward]] ME 一強と見られがちだが、Zaim は **独立創業 → KDDI 完全子会社化** という稀有なエグジット経路を辿り、通信キャリア経済圏内 fintech 残量の典型例として独立ページが必要。

## 4. 监管与政策

- **電子決済等代行業**: 銀行法改正（2017）以降、銀行 API 連携の法的根拠としての登録が前提。^[inferred]
- **個人情報保護法**: 家計データ・レシートデータ・口座連携データの取扱いと、KDDI 親会社へのデータ共有範囲が論点。^[inferred]
- **キャッシュレス / マイナンバー連携**: 自治体給付金検索機能はマイナンバー / 公金受取口座制度との連動余地あり。^[inferred]
- **資金決済法 / 割賦販売法**: 直接的な決済 / 与信プロダクトは保有しないため、両法の主体規制対象外（提携先がカバー）。^[inferred]

## Counterpoints

- 「[[JapanFG/money-forward|Money Forward]] ME 一強構造」: PFM 市場は ME が 1500 万 UB 超の規模で先行しており、Zaim は KDDI バックアップを得てもギャップを縮めにくい。^[inferred]
- 「KDDI 子会社化のシナジー効果は限定的か」: 通信契約データと家計データの統合は理論上強力だが、個人情報保護法上の同意取得・データガバナンスでの摩擦は残る。^[ambiguous]
- 「銀行アプリ内製 PFM との競合」: 各銀行が自社アプリで PFM 機能を強化中で、横断連携の付加価値が長期的に薄まる構造リスク（[[JapanFG/money-forward|Money Forward]] と共通）。^[inferred]

## Open questions

- KDDI 子会社化（2022-04）以降の Zaim MAU / 有料転換率は公表されているか?
- au 経済圏 ([[JapanFG/au-payment|au ペイメント]] / au じぶん銀行) との具体的データ連携・プロダクト統合の進度は?
- [[JapanFG/money-forward|Money Forward]] ME との市場シェア差分は経年でどう推移しているか?
- 自治体給付金検索機能のマイナンバー / 公金受取口座連携の今後の戦略は?

## Related

- [[JapanFG/money-forward]]
- [[JapanFG/freee]]
- [[JapanFG/smartbank]]
- [[JapanFG/au-fh]]
- [[JapanFG/au-payment]]
- [[JapanFG/bnpl-landscape]]
- [[JapanFG/famima-digital-one]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## Sources

- Zaim corporate site: https://content.zaim.net/
- Zaim company profile: https://content.zaim.net/company/
- KDDI 2022-04-14 press release on Zaim becoming a wholly owned subsidiary: https://news.kddi.com/kddi/corporate/newsrelease/2022/04/14/6014.html

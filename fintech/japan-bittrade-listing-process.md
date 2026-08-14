---
title: 日本の暗号資産取扱開始プロセス · BitTrade を含む公開資料ベースの境界
aliases: [bittrade-listing, jp-cex-listing, 日本上場プロセス]
domain: fintech
created: 2026-05-13
last_updated: 2026-08-14
last_tended: 2026-08-14
review_by: 2026-11-12
confidence: likely
tags: [fintech, needs-verification]
status: active
sources:
  - https://www.bittrade.co.jp/
  - https://jvcea.or.jp/guidelines/
  - https://jvcea.or.jp/cms/wp-content/themes/jvcea/images/pdf/public/public_20240510-02.pdf
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf
  - https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html
  - https://www.fsa.go.jp/news/r6/20240830/resultsandplans.pdf
  - https://www.bittrade.co.jp/news/
---

# 日本の暗号資産取扱開始プロセス · BitTrade を含む公開資料ベースの境界


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本のステーブルコイン法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> 日本の登録暗号資産交換業者（BitTrade 等）が新規銘柄を取り扱う際は、業者自身の社内審査、JVCEA の自主規制規則に基づく確認・届出、当局への届出・報告を区別して追う必要がある。公開資料だけから BitTrade 固有の「8 段階」「所要期間」「費用」「マーケットメイク条件」を確定することはできない。

## 公開資料で確認できる制度境界

下表は [金融庁の登録暗号資産交換業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf)、[金融庁の電子決済手段・暗号資産サービス仲介業に関する申請案内](https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html)、[JVCEA 規則・ガイドライン](https://jvcea.or.jp/guidelines/)、および [暗号資産の取扱いに関する規則・ガイドライン](https://jvcea.or.jp/cms/wp-content/themes/jvcea/images/pdf/public/public_20240510-02.pdf) に基づく制度上の区分である。個別 token の該当性は事実関係ごとに判断される。

| 種別 | 主な法源 | 監督当局 | 取扱事業者に必要となる主な登録・許可 |
|---|---|---|---|
| 暗号資産 | 資金決済法 | 金融庁 / 所管財務局 | 暗号資産交換業者の登録。BitTrade は金融庁の登録一覧で現在の登録内容を確認する |
| 有価証券 / ST | 金融商品取引法 | 金融庁 / 所管財務局 | 業務設計に応じた第一種金融商品取引業等の登録。PTS 業務は別途認可を要する場合がある |
| 電子決済手段（法定通貨連動型等） | 資金決済法 | 金融庁 / 所管財務局 | 売買・交換・管理等を行う電子決済手段等取引業者の登録。発行主体側の業法上の資格とは分けて確認する |
| 前払式支払手段 | 資金決済法 | 金融庁 / 所管財務局 | 自家型の届出または第三者型の登録など、発行・利用形態に応じた手続。暗号資産交換業の登録とは別制度 |

詳細は [[fintech/japan-financial-regulation|日本金融規制 — 三法体系]] を参照。

暗号資産、有価証券 / ST、電子決済手段、前払式支払手段では、適用法と取扱事業者の資格が異なる。商品名や「utility」という表示だけで分類せず、法的権利、償還、利益分配、発行・管理権限を確認する。

## 公開資料から確認できる取扱開始フロー

下表は [JVCEA の取扱規則](https://jvcea.or.jp/cms/wp-content/themes/jvcea/images/pdf/public/public_20240510-02.pdf) と [金融庁 2024 事務年度金融行政方針](https://www.fsa.go.jp/news/r6/20240830/resultsandplans.pdf) に基づく。CASC の適用や本邦初銘柄 / IEO などで手続は異なるため、単純な一律承認フローとして扱わない。

| 区分 | 公開資料で確認できる内容 | 公開資料だけでは確定できない内容 |
|---|---|---|
| 交換業者の審査 | 発行、取引、利用、関係者、台帳技術、リスク、利用者への情報提供を確認 | BitTrade 固有の採点、社内委員会、案件別優先順位 |
| JVCEA | 自主規制規則に基づく確認、届出、報告の経路 | 個別案件の非公開照会内容、確約された所要日数 |
| 当局関係 | 登録交換業者は金融庁・財務局の監督下にあり、必要な届出・報告を行う | 金融庁が全銘柄を一律に個別承認するという直列手続 |
| 取扱開始 | 事業者が取扱銘柄、開始日、注意事項を公表する | 公表前の確定日、費用、流動性・マーケットメイク契約 |
| 継続対応 | 自主規制規則、法令、事業者開示に従い情報提供とリスク管理を続ける | 非公開の監視しきい値や契約条件 |

JVCEA 自主規制の全景は [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制概要]]、交換業登録は [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]] を参照する。

## BitTrade 固有情報の境界

[金融庁の登録一覧](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) で登録事業者を、[BitTrade 公式サイト](https://www.bittrade.co.jp/) と [ニュース](https://www.bittrade.co.jp/news/) で公開済み取扱銘柄・開始日・注意事項を確認する。これらは、未公表案件の審査期間、費用、採用確率、マーケットメイク条件を示さない。

## Applicable When

- 日本の登録暗号資産交換業者による取扱いを検討するプロジェクトの初期評価
- 海外 token プロジェクトから日本での所要時間や難易度を聞かれ、公開情報と未確認事項を分けて答えるとき
- token の法的分類と、取扱事業者に必要な資格を整理するとき
- BitTrade / bitbank / Coincheck 等との接触前に、公開制度と事業者開示を確認するとき
- 日本 VASP 規制のタイムライン背景は [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]] を参照

## 公開資料だけでは確定できない項目

- 個別案件における JVCEA 確認・届出の所要期間
- 個別案件で追加照会や当局報告が必要になる条件
- 流動性・マーケットメイク契約の条件
- 申請・相談案件の採用率
- IEO と通常の取扱開始における案件別の費用・時間差

## Sources

- 金融庁 — 暗号資産交換業者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA — 規則・ガイドライン: https://jvcea.or.jp/guidelines/
- JVCEA — 暗号資産の取扱いに関する規則・ガイドライン: https://jvcea.or.jp/cms/wp-content/themes/jvcea/images/pdf/public/public_20240510-02.pdf
- 金融庁 — 2024 事務年度金融行政方針: https://www.fsa.go.jp/news/r6/20240830/resultsandplans.pdf
- BitTrade — 公式サイト: https://www.bittrade.co.jp/
- BitTrade — ニュース: https://www.bittrade.co.jp/news/

## Related
<!-- wiki-links:managed -->
- [[INDEX|ウィキ索引]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本のステーブルコイン法制度の三層構造]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス]]
<!-- /wiki-links:managed -->

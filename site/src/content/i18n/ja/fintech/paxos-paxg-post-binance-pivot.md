---
source: fintech/paxos-paxg-post-binance-pivot
source_hash: 78272fff069c0659
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "BUSD 後の Paxos — PYUSD / USDG / USDP / PAXG と USDL の終了"
translated_at: 2026-07-29T17:58:52.645Z
---
# BUSD 後の Paxos — PYUSD / USDG / USDP / PAXG と USDL の終了

## TL;DR

New York DFS は、Binance との関係における監督上の問題が解消されていないとして、Paxos に Paxos 発行 BUSD の新規発行を 2023 の二月に停止するよう命じた。OCC は **Paxos Trust Company, N.A.** への転換を承認し、**2025-12-12** に効力発生済みとした。現行の PYUSD・PAXG 商品 / 規約資料は Paxos Trust Company, N.A. と OCC の監督境界を記載し、過去の BUSD 発行は New York DFS 時代の記録として残る。Paxos は USDP とシンガポール発行の USDG も継続した。商品地図には、以前のページが欠いていた方向転換も記録する必要がある。Paxos は USDL の終了を 2025 の十月に発表し、新規発行を直ちに終了し、2025-12-08 に利回りと償還を停止して、適格な残高を USDG へ転換した。したがって USDL は、稼働中の $80M 成長商品ではなかった（2026五月時点）。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。[[fintech/paypal-pyusd-stablecoin|PYUSD]]、[[fintech/global-stablecoin-regulatory-five-pole-matrix|世界のステーブルコイン規制]]、[[fintech/tokenized-mmf-wisdomtree-hashnote|トークン化キャッシュ商品]] とあわせて読む。

## BUSD 事象の境界

[New York DFS の通知](https://www.dfs.ny.gov/consumers/alerts/Paxos_and_Binance) は次を確認する。

- DFS は Paxos に Paxos 発行 BUSD の新規発行停止を命じた。
- Paxos は BUSD に関する Binance との関係を終了すると 2023-02-13 に顧客へ通知した。
- DFS が認可した Paxos BUSD は Ethereum 上に存在した。
- 他チェーンの「Binance-Peg BUSD」は DFS の認可を受けず、Paxos が発行したものではなかった。
- DFS は、リスクベースのコンプライアンス手順を強化した上で秩序ある償還を監視した。

この資料は、規制下の終了を裏付ける。以前の社内人員数、取締役会の意図、「経営失敗」、収益配分の物語は裏付けない。

## 現行 / 過去の商品マトリクス

下表は [OCC 転換記録](https://apps.occ.gov/CAS/home/details?FilingID=342828&FilingSubtypeID=1117&FilingTypeID=23)、[PYUSD ページ](https://www.paxos.com/pyusd)、[現行 USD Stablecoin Terms](https://www.paxos.com/terms-and-conditions/stablecoin-terms-conditions)、[USDG 文書](https://docs.paxos.com/guides/stablecoin/usdg)、[USDP ページ](https://www.paxos.com/usdp)、[PAXG 規約](https://www.paxos.com/terms-and-conditions/pax-gold-terms-conditions)、[USDL 終了通知](https://www.paxos.com/newsroom/winding-down-usdl-lift-dollar) に基づく 2026-07-30 時点の商品状況地図である。

| 商品 | Paxos が記載する発行会社 / 監督 | 裏付け / 請求権 | 状況の境界 |
|---|---|---|---|
| PYUSD | Paxos Trust Company, N.A.。現行ページは OCC 監督を記載 | USD に 1:1 で裏付けられた決済用ステーブルコイン | 稼働中の商品。現行ページは N.A. を発行会社として記載 |
| USDP | 現行 USD Stablecoin Terms は Paxos Trust Company, N.A. を記載。一部の補助的なサービス / privacy 文書は文書固有の役割について Paxos Trust Company, LLC を記載 | USD に 1:1 で裏付けられたステーブルコイン | 稼働中の商品。文書の日付と役割を確認せず、単一の法人表示を推定しない |
| USDG | Paxos Digital Singapore。MAS 監督下の Major Payment Institution | USD に 1:1 で裏付けられた単一通貨ステーブルコイン。分別管理された準備資産 | 稼働中の商品。現在のチェーン一覧は Paxos 文書で確認 |
| PAXG | Paxos Trust Company, N.A.。現行 PAXG 規約は OCC の承認を記載 | トークンごとに割り当てられた London Good Delivery 金の純金一トロイオンス | 稼働中の商品。月次証明 |
| USDL | 運営時は Paxos International / ADGM FSRA | 利回り付き USD トークン | 終了を 2025-10-08 に発表。通知に従い新規発行とプログラムを終了 |
| Paxos 発行 BUSD | 過去の発行期間は New York DFS 監督下の Paxos Trust Company, LLC | USD に 1:1 で裏付けられたステーブルコイン | 2023に新規発行を停止。Paxos 以外の Binance-Peg BUSD および後の N.A. 転換と区別 |

## 連邦転換と文書固有の法人境界

[OCC Corporate Applications Search の記録](https://apps.occ.gov/CAS/home/details?FilingID=342828&FilingSubtypeID=1117&FilingTypeID=23) は、申請が承認され、**2025-12-12** に実行 / 効力発生済みであると記録する。現行 [PYUSD 資料](https://www.paxos.com/pyusd) は **Paxos Trust Company, N.A.** を発行会社として記載し、PYUSD の発行と準備資産が OCC の監督対象であるとする。現行 [PAXG 規約](https://www.paxos.com/terms-and-conditions/pax-gold-terms-conditions) は最終更新日が **2025-12-12** であり、Paxos Trust Company, N.A. を PAXG の manager とし、PAXG の発行が OCC の個別承認に基づくと記載する。

法人名は文書、日付、役割ごとに読む必要がある。現行 [USD Stablecoin Terms](https://www.paxos.com/terms-and-conditions/stablecoin-terms-conditions) は最終更新日が **2026-06-30** であり、Paxos Trust Company, N.A. を USDP と PYUSD の manager・発行会社として記載する。一方、[GLBA Privacy Notice](https://www.paxos.com/terms-and-conditions/glba-privacy-notice) は米国消費者の非公開個人情報の収集・共有という当該文書の役割について Paxos Trust Company, LLC を記載し、現行 PYUSD ページも PayPal / Venmo 向けの一部 custody、trading、transfer service について LLC を別途記載する。いずれの補助的役割も、ここで現行 USDP 発行会社として読み替えない。表示の違いは文書固有であり、このページの発行会社欄は商品規約を優先する。

## PAXG：検証済みの内容

[Paxos の PAXG ページ](https://www.paxos.com/pax-gold) と [developer guide](https://docs.paxos.com/guides/stablecoin/paxg) は Paxos Trust Company, N.A. を記載し、各トークンがロンドンの LBMA 保管庫に保管された純金一トロイオンスで裏付けられると述べる。対応する自己管理アドレスについて、Paxos はシリアル番号、重量、保管庫情報の照会を提供する。[透明性ページ](https://www.paxos.com/paxg-transparency) は月次証明を公開し、2025-02-28 以後の報告を KPMG が、それ以前を Withum が発行したと記載する。

下表は、検証済みの商品機能と、外部の日付付きデータセットを必要とする市場主張を分ける。

| 質問 | 一次資料 | 追加で必要な証拠 |
|---|---|---|
| 金の権利 | PAXG ごとに純金一トロイオンス | 現在の現物償還最低額と手数料の条件 |
| 割当て | 割り当てられた London Good Delivery 金 | 金塊照会に使えるウォレット / カストディアンの適格性 |
| 証明 | 月次報告 | 比較日時点の正確なトークン供給量 |
| 規制 | Paxos Trust Company, N.A.。現行規約は OCC の個別承認を記載 | 法域ごとの投資家向け取扱い |
| 市場順位 | 商品ページでは確認できない | PAXG と XAUT の同日供給量 / 流動性データセット |

PAXG が「より明確な NY DFS 構造」によって確実に優位である、Tether が準備資産の固定 3% を PAXG で保有する、PAXG の時価総額が約 $700M だった（2026-05 時点）、という以前の主張は、引用された Paxos ページが裏付けなかったため削除した。

## USDG と Global Dollar Network

[Paxos の開始発表](https://www.paxos.com/newsroom/paxos-introduces-global-dollar-usdg) は Paxos Digital Singapore を発行会社、DBS を開始時の銀行提携先として特定し、USD 預金 / 短期米国政府証券 / 現金同等物を適格な裏付け資産として挙げる。[USDG 文書](https://docs.paxos.com/guides/stablecoin/usdg) は 1:1 償還と月次の準備資産 / 証明報告を記載する。

Global Dollar Network の開始時には Anchorage Digital、Bullish、Galaxy Digital、Kraken、Nuvei、Paxos、Robinhood が挙げられた。「共有された経済性」という説明は、一律の固定 50/50 分配、特定提携先の収益、現在の流通量を証明しない。

## USDL の修正

Paxos は、適格市場向けの ADGM 規制下の利回り付きトークンとして USDL を 2024 の六月に開始した。その後の [Paxos 終了通知](https://www.paxos.com/newsroom/winding-down-usdl-lift-dollar) が支配的な状況を示す。

- 新規発行は 2025-10-08 に終了した。
- 日次リベースと Paxos による償還は 2025-12-08 に終了した。
- $1 を超える適格な残高は、コンプライアンス確認を条件に USDG へ転換される予定だった。
- 終了は FSRA の監督下で実施された。

その日以後も USDL を稼働中と説明するページは古い。

## 複数法域比較のガードレール

以下の表は、商品の発行会社と監督者を比較するためのチェックリストであり、「免許数 = 参入障壁」という評価結論ではない。資料は [Paxos 商品文書](https://docs.paxos.com/guides/stablecoin/usdg) と各規制当局 / 発行会社の通知である。

| 次元 | 確認事項 |
|---|---|
| 法的な発行会社 | 条件と準備資産報告に記載された正確な事業体 |
| 監督者 | 現在の免許 / チャーターと商品範囲 |
| 準備資産の所有者 | 分別された現金 / 証券を保有する事業体 |
| 償還 | 償還できる者、所要時間、最低額、手数料 |
| ネットワーク | 現在の公式コントラクトアドレス一覧 |
| 状況 | 稼働中、制限付き、償還のみ、または終了済み |

## ここでいう「プラットフォーム発行会社」

[Paxos の発行ページ](https://www.paxos.com/stablecoin-issuance) は、独自ブランドでの発行、既存 Paxos 資産の統合、Global Dollar Network への参加を提供する。これは Paxos を発行 / インフラ事業者と説明する根拠になる。以前の正確な準備資産運用会社の配分、全商品にわたる監査法人の割当て、社内許容幅、採用の変化、未発表の提携話は裏付けない。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界のステーブルコイン規制マトリクス]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|発行会社 / 分配者の経済性]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|ステーブルコイン発行会社の統合]]
- [[fintech/tokenized-mmf-wisdomtree-hashnote|トークン化キャッシュ商品]]

## Sources

- New York DFS — Paxos / Binance notice: https://www.dfs.ny.gov/consumers/alerts/Paxos_and_Binance
- OCC — Paxos Trust Company conversion record、2025-12-12 に承認・効力発生: https://apps.occ.gov/CAS/home/details?FilingID=342828&FilingSubtypeID=1117&FilingTypeID=23
- Paxos — PYUSD 現行商品ページ: https://www.paxos.com/pyusd
- Paxos — PYUSD docs: https://docs.paxos.com/guides/stablecoin/pyusd
- Paxos — USD Stablecoin Terms: https://www.paxos.com/terms-and-conditions/stablecoin-terms-conditions
- Paxos — GLBA Privacy Notice（privacy role の LLC 表示）: https://www.paxos.com/terms-and-conditions/glba-privacy-notice
- Paxos — USDG docs: https://docs.paxos.com/guides/stablecoin/usdg
- Paxos — USDP: https://www.paxos.com/usdp
- Paxos — PAXG: https://www.paxos.com/pax-gold
- Paxos — PAXG developer guide: https://docs.paxos.com/guides/stablecoin/paxg
- Paxos — PAXG Terms: https://www.paxos.com/terms-and-conditions/pax-gold-terms-conditions
- Paxos — PAXG transparency: https://www.paxos.com/paxg-transparency
- Paxos — USDL wind-down: https://www.paxos.com/newsroom/winding-down-usdl-lift-dollar
- Paxos — Stablecoin issuance: https://www.paxos.com/stablecoin-issuance

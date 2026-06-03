---
source: finance/jftc-merger-control-process
source_hash: 6ccbff4d58ea0ebc
lang: ja
status: machine
fidelity: ok
title: "JFTC 企業結合審査プロセス"
translated_at: 2026-06-02T13:21:55.052Z
---
# JFTC 企業結合審査プロセス

## 概要

JFTC（公正取引委員会）の企業結合審査は、[[finance/japan-tender-offer-process|FIEA tender offer route]] と並行して機能する独占禁止法上のゲートである。国内売上高の閾値を超える支配権取引は、独占禁止法（AMA）に基づき JFTC へ**事前届出**を行い、完了前にクリアランスを得る必要がある。これは [[finance/INDEX|finance]] に属する。[[finance/cross-border-m-a-japan|cross-border M&A in Japan]] および [[finance/japan-acquisition-finance|acquisition-financed]] 案件における主要な規制上の拒否権だからである。

本ページは [[finance/japan-mbo-and-squeeze-out-process|MBO and squeeze-out process]]、[[finance/japan-activist-investor-playbook|activist playbook]]、[[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、[[JapanFG/legal-financial-licenses/securities-license-stack|securities license stack]]、およびルーティング用のより広い [[INDEX|FinWiki index]] と併せて読む。

## 届出閾値（2010 改正後）

| 取引 | 国内売上高トリガー |
|---|---|
| 株式取得（>20% / >50%） | 取得会社グループ **>20 bn JPY** かつ対象会社グループ **>5 bn JPY** |
| 合併 / 会社分割 | 結合する各グループが同等の売上高ラインを超えること |
| 事業 / 資産譲渡 | 取得対象事業部門の売上高が 3 bn JPY 超（取得会社グループ >20 bn JPY） |
| 共同株式移転 | 2 つのグループがそれぞれ売上高ラインを超えること |

日本関連売上のある foreign-to-foreign 取引も、国内売上高ラインを満たす場合は捕捉される。JFTC は EU / 中国 SAMR / 米国 HSR と並行する域外適用管轄を持つ。

## Phase I / Phase II 審査

| 段階 | 法定時計 | 内容 |
|---|---|---|
| 事前相談 | 非公式、数週間から数カ月 | 任意のホワイトペーパー面談、HHI / 市場画定の範囲に関する議論。 |
| 届出提出 | Day 0 | 取得会社が JFTC へ様式を提出。JFTC サイトで公表。 |
| **Phase I 待機期間** | **30 days** | JFTC が審査。短縮または延長され得る。クリアランスまたは Phase II へ移行。 |
| Phase II 報告等要請 | Day 30 → 発動 | JFTC が要請を発出。時計は完全回答から 90 days、または届出から 120 days のいずれか遅い日までリセットされる。 |
| 問題解消措置の交渉 | Phase II 中 | 構造的措置（事業譲渡）または行動的措置。合意命令もあり得る。 |
| クリアランスまたは禁止 | Phase II 終了時 | 措置が不十分な場合、JFTC は排除措置命令を出す。案件はブロックまたは再設計される。 |

## ガンジャンピング禁止

クリアランス前の統合は、AMA 第 10 条 / 第 15 条 / 第 16条で禁止される。JFTC が警告する実務上のガンジャンピングリスクは次のとおり。

- 審査継続中の取得会社と対象会社の間の**価格協調**
- クリアランス前の**顧客 / 仕入先割当**の協議
- clean team プロトコルなしの**機微情報交換**（価格表、顧客パイプライン、入札戦略）
- **時期尚早の業務統合**（共同 IT、共同調達、共同営業部隊）

対応策は、clean team / 外部弁護士レビューのフィルター、hold-separate 条項、JFTC が受け入れ得る情報遮断措置である。これは [[finance/japan-fair-disclosure-and-insider-trading-controls|insider trading controls]] で使われる、FIEA 第 166条に基づくものと同じ設計思想である。

## 最近の事例マップ

| 年 | 事例 | 結果 | 読み方 |
|---|---|---|---|
| 2021 | Z Holdings / LINE 統合 | メッセージアプリのデータに関する行動的コミットメント後にクリア | KFTC / TFTC と並行するクロスボーダー届出 |
| 2024 | 日本製鉄 / US Steel（米国側は CFIUS により阻止） | JFTC は制約条件ではなく、CFIUS / 国家安全保障が優先 | [[finance/cross-border-m-a-japan|cross-border]] FDI 拒否権がある場合、JFTC クリアランス ≠ 案件完了であることを示す |
| 2024 | Seven & i Holdings / Couche-Tard のインバウンド提案 | [[finance/japan-takeover-defense-poison-pill|takeover-defense]] + 国家安全保障指定プロセスで防衛 | 独禁分析は政府指定オーバーレイの二次論点 |
| 2024-25 | 各種半導体 / EV バッテリー JV | 重複製品ラインで Phase II の問題解消措置 | チップ / バッテリー重複では構造的事業譲渡が出やすいパターン |

## JFTC ファイルから抽出する事項

1. **取得会社グループ / 対象会社グループの定義** — AMA 第 10
条に基づく最終親会社までの捕捉
2. **国内売上高数値** — 直近事業年度の売上、日本配分分
3. **影響を受ける商品市場** — JFTC の市場画定手法（SSNIP に近い考え方）
4. **HHI と HHI-delta** — セーフハーバー閾値（HHI<2500  + delta<250,  など）
5. **提示された問題解消措置** — 構造的措置と行動的措置、monitoring trustee 設計
6. **他法域での並行届出** — US HSR、EU EUMR、中国 SAMR、KFTC

## 調査チェックリスト

1. 取引について、JFTC プレスリリースを [[finance/japan-ib-league-table|IB league-table]] M&A アドバイザー情報と照合する。
2. 公表されている場合は、事前相談の概要を取得する。
3. 届出日を [[finance/japan-tender-offer-process|TOB timeline]] と照合する。JFTC クリアランスは TOB の前提条件となることが多い。
4. 当該年の執行優先事項と Phase II 移行率を確認するため、JFTC 年次報告書を読む。
5. 銀行、通信、エネルギーなどで [[JapanFG/legal-financial-licenses/securities-license-stack|sector-license]] の承認も必要かを確認する。

## 関連項目

- [[finance/INDEX]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## 出典

- JFTC: 独占禁止法ガイドラインおよび届出規則（英語）。
- JFTC: M&A 審査執行ページおよび年次プレスリリース。
- JFTC: 2021 Z Holdings / LINE 統合の相談報告書。
- METI: 手続整合のための公正 M&A ガイドライン（2019, 改訂 2023）。

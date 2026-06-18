---
source: finance/jftc-merger-control-process
source_hash: 2f26627679677f5e
lang: ja
status: machine
fidelity: ok
title: "JFTC 企業結合審査プロセス"
translated_at: 2026-06-18T23:59:13.037Z
---

# JFTC 企業結合審査プロセス

## 概要

JFTC（公正取引委員会）の企業結合審査は、[[finance/japan-tender-offer-process|FIEA tender offer route]] と並行して存在する独占禁止法上のゲートである：国内売上高の閾値を超えるあらゆる支配権取得取引は、独占禁止法（AMA）のもとで JFTC に**事前届出**を行い、完了前にクリアランスを得なければならない。これは [[finance/cross-border-m-a-japan|cross-border M&A in Japan]] および [[finance/japan-acquisition-finance|acquisition-financed]] 案件に対する主要な規制上の拒否権であるため、[[finance/INDEX|finance]] に属する。

このページは、ルーティングのために [[finance/japan-mbo-and-squeeze-out-process|MBO and squeeze-out process]]、[[finance/japan-activist-investor-playbook|activist playbook]]、[[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、[[financial-licenses/securities-license-stack|securities license stack]]、およびより広範な [[INDEX|FinWiki index]] と併せて読まれたい。

## 届出閾値（2010 改正後）

| 取引 | 国内売上高のトリガー |
|---|---|
| 株式取得（>20% ／ >50%） | 取得企業グループ **>20 億円** かつ 対象企業グループ **>5 億円** |
| 合併／会社分割 | 結合する各グループが同等の売上高ラインを超過 |
| 事業／資産譲渡 | 取得事業セグメントの売上高が 3 億円超（かつ取得企業グループ >20 億円） |
| 共同株式移転 | 2つのグループがそれぞれ売上高ラインを超過 |

日本に関連する売上を有する外国対外国取引は、国内売上高ラインを満たす場合に捕捉される — JFTC は EU／中国 SAMR／米国 HSR と並行して域外管轄権を有する。

## フェーズ I／フェーズ II 審査

| 段階 | 法定の期間 | 内容 |
|---|---|---|
| 事前届出相談 | 非公式、数週間〜数か月 | 任意のホワイトペーパー会合、HHI／市場画定の論点の範囲についての協議。 |
| 届出 | 0 日目 | 取得者が JFTC に届出書を提出；JFTC サイトで公示。 |
| **フェーズ I 待機期間** | **30 日** | JFTC が審査；短縮または延長されうる；クリアランスまたはフェーズ II への移行。 |
| フェーズ II の報告等要請 | 30 日目 → トリガー時 | JFTC が要請を発出；期間は完全な回答から 90 日、または届出から 120 日のいずれか遅い方にリセットされる。 |
| 是正措置の交渉 | フェーズ II 中 | 構造的（事業譲渡）または行動的な是正措置；同意審決もありうる。 |
| クリアランスまたは禁止 | フェーズ II の終了時 | 是正措置が不十分な場合 JFTC は排除措置命令を発出；案件はブロックまたは再構成される。 |

## ガン・ジャンピングの禁止

クリアランス前の統合は AMA 第 10 条／第 15 条／第 16条のもとで禁止される。JFTC が警告する実務上のガン・ジャンピングのリスク：

- 審査係属中の取得者と対象会社間の**価格協調**
- クリアランス前の**顧客／サプライヤーの割り当て**に関する協議
- クリーン・チーム・プロトコルなしでの**機微情報の交換**（価格表、顧客パイプライン、入札戦略）
- **時期尚早の業務統合**（共同 IT、共同調達、販売部隊の共有）

是正策：クリーン・チーム／外部弁護士によるレビュー・フィルター、ホールド・セパレート条項、そして JFTC が受容可能な情報隔壁 — FIEA 第 166条のもとで [[finance/japan-fair-disclosure-and-insider-trading-controls|insider trading controls]] に用いられるのと同じアーキテクチャである。

## 最近の事例マップ

| 年 | 事例 | 結果 | 参照 |
|---|---|---|---|
| 2021  | Z ホールディングス／ LINE 合併 | メッセージング・アプリのデータに関する行動的コミットメントを経てクリアランス | KFTC／ TFTC と並行のクロスボーダー届出 |
| 2024  | 日本製鉄／ US スチール（米国側は CFIUS によりブロック） | JFTC が拘束的な制約ではなかった；CFIUS／国家安全保障が優越 | [[finance/cross-border-m-a-japan|cross-border]] の対内投資（FDI）拒否権が存在する場合、JFTC のクリアランス≠案件成立であることを示す |
| 2024  | セブン＆アイ・ホールディングス／クシュタール（Couche-Tard）による対内提案 | [[finance/japan-takeover-defense-poison-pill|takeover-defense]] ＋国家安全保障指定プロセスを通じて防衛 | 独占禁止法の分析は政府による指定のオーバーレイに対して副次的 |
| 2024-25  | 各種半導体／ EV バッテリー JV | 重複する製品ラインに対するフェーズ II 是正措置 | チップ／バッテリーの重複に対する構造的事業譲渡のパターン |

## JFTC ファイルから抽出すべき事項

1. **取得企業グループ／対象企業グループの定義** — AMA 第 10
条のもとでの究極親会社の完全な捕捉。2. **国内売上高の数値** — 直近事業年度の売上、日本に配分された分。
3. **影響を受ける製品市場** — JFTC の市場画定手法（SSNIP 近似）
4. **HHI と HHI デルタ** — セーフハーバー閾値（HHI<2500 ＋デルタ<250, 等）
5. **提示された是正措置** — 構造的か行動的か、モニタリング・トラスティの設計
6. **法域横断の並行届出** — 米国 HSR、EU EUMR、中国 SAMR、KFTC

## リサーチ・チェックリスト

1. JFTC のプレスリリースを当該取引の [[finance/japan-ib-league-table|IB league-table]] M&A アドバイザーと突合する。
2. 公表されている場合は事前届出相談の概要を入手する。
3. 届出日を [[finance/japan-tender-offer-process|TOB timeline]] に対してマッピングする — JFTC のクリアランスはしばしば TOB の前提条件である。
4. その年の執行上の優先事項とフェーズ II 比率について JFTC の年次報告書を読む。
5. 当該案件が [[financial-licenses/securities-license-stack|sector-license]] 承認（銀行、通信、エネルギー）も要するかどうかを確認する。

## 関連

- [[finance/INDEX]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## 出典

- JFTC：独占禁止法ガイドラインと届出規則（英語）。
- JFTC：M&A 審査の執行ページと年次プレスリリース。
- JFTC：2021 Z ホールディングス／ LINE 合併の相談報告書。
- 経済産業省：手続上の整合のための公正な M&A ガイドライン（2019, 、2023改訂）。

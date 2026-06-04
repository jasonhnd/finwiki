---
source: money-market/jgb-repo-market-japan
source_hash: e3b47a7512bf13ea
lang: ja
status: machine
fidelity: ok
title: "日本の JGB レポ市場"
translated_at: 2026-06-02T16:33:58.461Z
---
# 日本の JGB レポ市場

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] の配下に置く。ピア比較・対比の文脈では [[money-market/boj-open-market-operations|BoJ open market operations]] と、より広い制度・規制上の境界では [[money-market/japan-money-market|Japan money market]] と合わせて読む。

## 要約

JGB レポ市場は、日本における担保付短期資金調達と担保ファイナンスのレイヤーである。無担保コール市場とは異なる。レポ取引では、証券を現金と交換し、後日に同一または類似の担保を買い戻す約束を伴う。一方、コール取引は短期の無担保貸借である。

FinWiki では、レポ市場は BOJ の政策運営、JGB 市場の流動性、ディーラーのバランスシート、証券貸借、短期金利の波及をつなぐため重要である。JGB 市場機能が改善しているのか、ストレスを受けているのかを観察する場としても有用である。

## 市場メカニクス

| 要素 | 説明 |
|---|---|
| レポ取引 | 証券その他の金融資産を現金と交換し、将来の期日に同一または類似の担保を固定価格で買い戻す約束を伴う取引。 |
| JGB レポ | 証券・担保が日本国債で、現金側が円であることが多いレポ。 |
| 現金借入側 | 証券提供者 / レポ側。担保を差し入れて現金を受け取る。 |
| 現金貸付側 | 証券受入者 / リバースレポ側。現金を提供し、担保を受け取る。 |
| 現金担保付証券貸借 | 経済的にレポに近く、BOJ の証券ファイナンス統計に含まれる。 |
| レポレート | BOJ 統計では、貸借料やリベートレートを調整したうえで、レポ取引と現金担保付証券貸借を用いて出来高加重レポレートを算出する。 |

## GC と SC

| 種類 | 意味 | 典型的な用途 |
|---|---|---|
| GC レポ | 一般担保。証券銘柄を特定しない。 | 主に資金調達とキャッシュマネジメント。 |
| SC レポ | 特定担保。証券銘柄を特定する。 | 特定の JGB 銘柄の借入、または特定担保ニーズのファイナンス。 |

ストレスを読む際にはこの区別が重要である。広範な資金調達問題は GC 条件に表れやすく、特定の JGB 銘柄の不足は SC 需要、特殊性、証券貸出ファシリティの利用に表れやすい。

## データ面

BOJ の証券ファイナンス統計は、FSB のデータ収集枠組みに基づき FSA と BOJ が収集したレポ取引および証券貸借取引を対象とする。公表データセットには次が含まれる。

- 新規取引の日次フローデータ。
- 取引相手・通貨別の月次残高データ。
- 日本国債を担保とする円建て取引。
- JGB と円を含む証券貸借取引。
- レポレート系列。

対象範囲は有用だが完全ではない。報告は日本所在の主要金融機関に重点があり、一部の内部取引、個人取引、中央銀行取引、助言のみの取引は除外される。

## BOJ と市場機能

BOJ の証券貸出ファシリティは、市場参加者に JGB を一時的・補完的に供給し、流動性と円滑な市場機能を支える。2025  の BOJ Review は、SLF 借入の急増とその後の減少を、JGB 市場流動性、現物 / 先物 / レポ市場の機能、BOJ 買入減額、レポレートの安定化、投資家ポジションの変化と結びつけて説明している。

分析上、SLF 利用は市場機能のシグナルとして読むべきであり、単独の政策目標として扱うべきではない。

## JapanFG との関係

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] は市場オペレーション、JGB 保有、短期金利期待を通じてレポに影響する。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は、レポレイヤーをより広い短期金融市場インフラに接続する。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] などのメガバンクは、JGB 保有、担保管理、準備預金残高、ホールセール調達を通じてエクスポージャーを持つ。
- [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/nomura-hd]] などの証券会社は、ディーラー在庫、マーケットメイク、担保ファイナンスを通じてエクスポージャーを持つ。

## 読み方のルール

- レポレートを無担保コール翌日物金利と同一の商品として扱わない。
- 資金調達需要と特定証券の希少性を分けて考える。
- 問題が GC 資金調達、SC の特殊性、証券貸借、BOJ SLF 利用、より広い JGB 現物市場流動性のどれにあるかを確認する。
- 現在データを使う場合、数値は時点固有で後日訂正される可能性があるため、BOJ の月次公表資料を正確に引用する。

## 関連項目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/local-bond-market]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- Bank of Japan: Statistics on Securities Financing Transactions in Japan の説明。
- Bank of Japan: Statistics on Securities Financing Transactions in Japan の公表ページ。
- Bank of Japan Review 2025-E-3: JGB market functioning and Securities Lending Facility usage.
- Bank of Japan: Securities Lending Facility.

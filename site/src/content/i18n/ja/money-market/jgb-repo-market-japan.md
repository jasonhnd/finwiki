---
source: money-market/jgb-repo-market-japan
source_hash: 5f35bd7094913e98
lang: ja
status: machine
fidelity: ok
title: "JGB repo market in Japan"
translated_at: 2026-06-19T06:09:18.192Z
---

# JGB repo market in Japan

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/boj-open-market-operations|BoJ open market operations]] for peer / contrast context and [[money-market/japan-money-market|Japan money market]] for the broader system / regulatory boundary.

## TL;DR

JGB レポ市場は、日本の有担保の短期資金調達・担保ファイナンス層である。無担保のコール市場とは別物で、レポ取引は同一または類似の担保を後で買い戻す約定のもとで証券を現金と交換するのに対し、コール取引は短期の無担保の貸付・借入である。

FinWiki にとってレポ市場が重要なのは、それが日銀の政策運営、JGB 市場の流動性、ディーラーのバランスシート、証券貸借、短期金利の波及をつなぐからである。また、JGB 市場の機能が改善しているのかストレス下にあるのかを観察するのに最適な場所の一つでもある。

## Market Mechanics

| Element | Explanation |
|---|---|
| Repo transaction | 証券その他の金融資産が現金と引き換えに提供され、同一または類似の担保を将来の期日に固定価格で買い戻す約定が伴う。 |
| JGB repo | 証券・担保が日本国債であり、現金サイドがしばしば円であるレポ。 |
| Cash borrowing side | 証券の提供側／レポサイド。担保と引き換えに現金を受け取る。 |
| Cash lending side | 証券の受領側／リバースレポサイド。現金を提供し担保を受け取る。 |
| Securities lending with cash collateral | 経済的にレポに隣接し、日銀の証券ファイナンス統計に含まれる。 |
| Repo rate | 日銀統計は、貸借料率またはリベート料率を調整したうえで、レポ取引および現金担保付き証券貸借を用いて出来高加重のレポレートを算出する。 |

## GC vs SC

| Type | Meaning | Typical use |
|---|---|---|
| GC repo | ジェネラルコラテラル：証券は特定されない。 | 主に資金調達と資金繰り。 |
| SC repo | スペシャルコラテラル：証券が特定される。 | 特定の JGB 銘柄の借入、または特定の担保ニーズのファイナンス。 |

この区別はストレスを読むうえで重要である。広範な資金調達の問題は GC の状況に表れうる一方、特定の JGB 銘柄の希少性は SC 需要、スペシャルネス、または証券貸借ファシリティの利用を通じて表れうる。

## Data Surface

日銀の証券ファイナンス統計は、FSB のデータ収集枠組みのもとで FSA と日銀が収集するレポ取引および証券貸借取引をカバーする。公表されるデータセットには以下が含まれる：

- 新規取引の日次フローデータ；
- カウンターパーティ別・通貨別の月次残高データ；
- 日本国債を用いた円建て取引；
- JGB と円を伴う証券貸借取引；
- レポレートの系列。

その範囲は有用だが完全ではない。報告は日本に所在する主要な金融機関に重点を置いており、一部の内部取引、個人取引、中央銀行取引、助言のみの取引を除外している。

## BoJ and Market Functioning

日銀の国債補完供給（Securities Lending Facility）は、流動性を支え市場機能を円滑にするために、市場参加者に対し一時的かつ補完的な JGB の供給源を提供する。2025 BoJ Review は、SLF 借入の以前の急増とその後の減少を、JGB 市場の流動性、現物／先物／レポ市場の機能、日銀の買入れ減額、レポレートの安定化、投資家のポジショニングの変化と関連づけた。

分析上、SLF の利用は単独の政策目標ではなく、市場機能のシグナルとして読むべきである。

## JapanFG Relevance

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] は市場操作、JGB 保有、短期金利の予想を通じてレポに影響する。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] はレポ層をより広範な短期金融市場インフラに接続する。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] などのメガバンクは、JGB 保有、担保管理、準備預金残高、ホールセール調達を通じてエクスポージャーを有する。
- [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/nomura-hd]] などの証券会社は、ディーラー在庫、マーケットメイク、担保ファイナンスを通じてエクスポージャーを有する。

## Reading Rules

- レポレートを無担保の翌日物コールレートと同じ商品として扱わないこと。
- 資金調達需要と特定銘柄の希少性を区別すること。
- 問題が GC ファンディングなのか、SC のスペシャルネスなのか、証券貸借なのか、日銀 SLF の利用なのか、それともより広範な JGB 現物市場の流動性なのかを確認すること。
- 現在のデータを用いる際は、数値が時点固有であり後に訂正されうるため、正確な日銀の月次公表を引用すること。

## Related

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

## Sources

- Bank of Japan: explanation of Statistics on Securities Financing Transactions in Japan.
- Bank of Japan: Statistics on Securities Financing Transactions in Japan release surface.
- Bank of Japan Review 2025-E-3: JGB market functioning and Securities Lending Facility usage.
- Bank of Japan: Securities Lending Facility.

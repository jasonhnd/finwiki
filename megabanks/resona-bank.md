---
title: "りそな銀行 (Resona Bank)"
aliases:
  - "Resona Bank"
  - "りそな銀行"
  - "株式会社りそな銀行"
  - "りそなぎんこう"
domain: megabanks
created: 2026-05-20
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-12-05
confidence: likely
tags: [JapanFG, bank, resona, operating-company]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
  - "https://www.resonabank.co.jp/about/gaiyo/"
  - "https://www.resona-gr.co.jp/holdings/about/group/"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: supervisory_authority
    source: "https://www.fsa.go.jp/"
    as_of: 2026-06-21
    confidence: likely
  - relation: holds_license
    target: financial-licenses/bank-license-and-baas-boundary
    evidence: banking_license_context
    source: "https://www.fsa.go.jp/menkyo/menkyo.html"
    as_of: 2026-06-21
    confidence: likely
  - relation: subsidiary_of
    target: megabanks/resona-hd
    evidence: group_profile
    source: "public company profile / IR source listed in this page sources"
    as_of: 2026-06-21
    confidence: likely
---

# りそな銀行 (Resona Bank)

## Wiki route

This entry sits under [[megabanks/INDEX|megabanks INDEX]] (its domain route). Read it against [[megabanks/saitama-resona-bank|埼玉りそな銀行 (Saitama Resona Bank)]] for peer / contrast (its separately licensed Saitama-market sibling), and against [[financial-regulators/fsa|the FSA]] for the supervisory / regulatory boundary. The group / parent view lives on [[megabanks/resona-hd|りそな HD]].

## TL;DR

りそな銀行 (Resona Bank, Limited) は [[megabanks/resona-hd|りそな HD]] の中核銀行法人。メガ 3 行とは別の地域・信託兼営型 bank franchise で、FSA の銀行免許リスト上は「株式会社りそな銀行」(都市銀行) として掲載され、銀行コードは 0010。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 株式会社りそな銀行 |
| English name | Resona Bank, Limited |
| License route | 銀行法上の銀行免許 (都市銀行); FSA bank license list |
| Bank code | 0010 |
| Parent boundary | [[megabanks/resona-hd|りそな HD]] 傘下 bank operating company |
| Distinctive point | 商業銀行機能に加え信託・年金関連機能を兼営する都市銀行系モデル |

## 2. Operating model

- 大阪・東京を中心に retail / SME / corporate banking と国内決済・為替を担う、りそなグループ最大の bank entity。
- 信託兼営により、預金・貸出・決済の商業銀行ライセンスに加え、信託・年金関連サービスを銀行単体で扱う点が、メガ 3 行 (信託を別法人に分離) と対照的。
- グループ内では別免許の [[megabanks/saitama-resona-bank|埼玉りそな銀行]] と並ぶ中核銀行。海外投資銀行色は強くなく、国内 retail / SME / trust-adjacent services に厚い。

## 3. Why standalone page matters

[[megabanks/resona-hd|りそな HD]] の上場持株会社分析だけでは、りそな銀行単体の銀行免許、店舗網、信託兼営、グループ内地域銀行との役割分担を追いにくい。銀行 operating company として分けることで、関西・首都圏 retail franchise と Resona group strategy を切り分けられる。地域銀行統合の curve は [[banking/regional-bank-consolidation-pattern|地域銀行統合パターン]] を参照。

## Related

- [[megabanks/INDEX|megabanks INDEX]]
- [[megabanks/resona-hd]]
- [[megabanks/saitama-resona-bank]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/post-megabank-positioning]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, "銀行免許一覧", `ginkou.xlsx` (都市銀行; 株式会社りそな銀行; bank code 0010).
- Resona Bank, "会社概要".
- Resona Holdings, "グループ会社".

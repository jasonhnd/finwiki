---
title: "三井住友銀行 (SMBC)"
aliases:
  - "SMBC"
  - "Sumitomo Mitsui Banking Corporation"
  - "三井住友銀行"
  - "株式会社三井住友銀行"
  - "みついすみともぎんこう"
domain: megabanks
created: 2026-05-20
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-12-05
confidence: likely
tags: [JapanFG, bank, megabank, operating-company]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: subsidiary_of
    target: megabanks/smfg
    evidence: official_profile
    source: https://www.smbc.co.jp/aboutus/profile/group.html
    as_of: 2026-06-22
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: official_registry
    source: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx
    as_of: 2026-06-22
    confidence: likely
  - relation: member_of_sro
    target: financial-regulators/zenginkyo
    evidence: industry_body_member_list
    source: https://www.zenginkyo.or.jp/en/members/
    as_of: 2026-06-22
    confidence: likely
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
  - "https://www.smbc.co.jp/aboutus/profile/gaiyo.html"
  - "https://www.smbc.co.jp/aboutus/profile/group.html"
---

# 三井住友銀行 (SMBC)

## Wiki route

This entry sits under [[megabanks/INDEX|megabanks INDEX]] (its domain route). Read it against [[megabanks/mufg-bank|三菱UFJ銀行 (MUFG Bank)]] for peer / contrast (another 都市銀行 megabank operating company), and against [[financial-regulators/fsa|the FSA]] for the supervisory / regulatory boundary. The group / parent view lives on [[megabanks/smfg|SMFG]]; the trust and securities siblings on [[trust-banks/smbc-trust-bank|SMBC信託銀行]] and [[securities-firms/smbc-nikko|SMBC日興証券]].

## TL;DR

三井住友銀行 (Sumitomo Mitsui Banking Corporation) は [[megabanks/smfg|SMFG / SMBC グループ]] の商業銀行中核法人。FSA の銀行免許リスト上は「株式会社三井住友銀行」(都市銀行) として掲載され、銀行コードは 0009。親会社 SMFG、[[trust-banks/smbc-trust-bank|SMBC信託銀行]]、[[securities-firms/smbc-nikko|SMBC日興証券]] とは別の licensed bank layer を持つ。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 株式会社三井住友銀行 |
| English name | Sumitomo Mitsui Banking Corporation |
| License route | 銀行法上の銀行免許 (都市銀行); FSA bank license list |
| Bank code | 0009 |
| Parent boundary | [[megabanks/smfg|SMFG]] 傘下 bank operating company |

## 2. Operating model

- SMBC グループの預金受入・貸出・国内/外国為替・決済・グローバル法人金融を担う銀行法人。
- bank-license layer は、[[trust-banks/smbc-trust-bank|SMBC信託銀行]] (信託 / PRESTIA / 外貨・不動産・信託機能) と [[securities-firms/smbc-nikko|SMBC日興証券]] の brokerage / underwriting layer から機能的に分離される。
- 三井住友カード、SMBC コンシューマーファイナンスとの連携で、銀行単体を超えた retail / wealth / payment funnel を作る。

## 3. Why standalone page matters

[[megabanks/smfg|SMFG]] は上場持株会社だが、銀行法上の預金受入・貸出・為替取引の主語は三井住友銀行。Olive、法人決済、海外支店、SMBC Trust との銀行代理・信託代理構造を分析するには、SMFG ページだけでは粒度が粗い。

## Related

- [[megabanks/INDEX|megabanks INDEX]]
- [[megabanks/smfg]]
- [[trust-banks/smbc-trust-bank]]
- [[securities-firms/smbc-nikko]]
- [[asset-managers/smd-am]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, "銀行免許一覧", `ginkou.xlsx` (都市銀行; 株式会社三井住友銀行).
- SMBC, "会社概要".
- SMBC, "主要子会社・関連会社".

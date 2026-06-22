---
title: "野村アセットマネジメント"
aliases:
  - "Nomura Asset Management"
  - "野村アセットマネジメント"
  - "野村アセットマネジメント株式会社"
  - "NAM"
  - "asset-managers/nomura-am"
domain: asset-managers
created: 2026-05-20
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, asset-management, fiea-operator, nomura]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: subsidiary_of
    target: securities-firms/nomura-hd
    evidence: official_profile
    source: https://www.nomura-am.co.jp/corporate/gaiyo/gaiyo.html
    as_of: 2026-06-22
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: official_registry
    source: https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx
    as_of: 2026-06-22
    confidence: likely
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.nomura-am.co.jp/corporate/gaiyo/gaiyo.html"
  - "https://www.nomura-am.co.jp/corporate/philosophy.html"
---

# 野村アセットマネジメント

## Wiki route

This entry sits under [[asset-managers/INDEX|asset-managers INDEX]] (its domain route). Read it against [[asset-managers/daiwa-asset-management|大和アセットマネジメント]] for the other major securities-affiliated 運用会社 peer / contrast, and against [[financial-regulators/fsa|the FSA]] plus [[securities/financial-instruments-business-operators-japan-index|FSA 金商業者 index]] for the supervisory / registry boundary over 投資運用業 operators.

## TL;DR

野村アセットマネジメント株式会社は、金融商品取引法上の **投資運用業** 登録を持つ [[securities-firms/nomura-hd|野村 HD]] の運用会社。FSA 金融商品取引業者一覧では「野村アセットマネジメント株式会社」、関東財務局長(金商)第373号として掲載される。公募投信・ETF・年金 / 機関投資家向け運用を担う、日本最大級の証券系運用会社の一角。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 野村アセットマネジメント株式会社 / Nomura Asset Management Co., Ltd. |
| License route | 金融商品取引法上の **投資運用業**・**投資助言・代理業**・第二種; 関東財務局長(金商)第373号 |
| Parent boundary | [[securities-firms/nomura-hd|野村 HD]] グループの asset-management arm (securities-affiliated) |
| Supervision | [[financial-regulators/fsa|FSA]] + 投資信託協会 / 日本投資顧問業協会 |
| Wiki role | 野村系 運用会社 anchor |

## 2. Operating model

投資運用業者として、(1) 公募投信の **投資信託委託** (組成・運用)、(2) ETF / index products、(3) **投資一任** (年金・機関投資家 discretionary mandate)、(4) 投資助言を担う。証券グループの brokerage / investment banking とは分離された **fee-based asset-management pillar**。[[trust-banks/nomura-trust-bank|野村信託銀行]] とともに証券グループの wealth / asset formation stack を構成する。低コスト index / ETF の手数料競争では [[asset-managers/daiwa-asset-management|大和アセット]] や系列系大手と直接ぶつかる。監督は FSA + 自主規制機関の二層構造。

## 3. Why this page matters

- 野村グループを brokerage だけで見ると見えにくい **ETF / index / active / institutional mandate** の運用機能を切り出す。
- 資産運用立国・NISA・ETF 市場・信託銀行 custody との接続点を確定する。
- 証券系ピア ([[asset-managers/daiwa-asset-management|大和アセット]] / [[asset-managers/nikko-asset-management|日興→Amova]]) との比較起点を提供する。

## Related

- [[asset-managers/INDEX|asset-managers INDEX]]
- [[securities-firms/nomura-hd|野村 HD]]
- [[trust-banks/nomura-trust-bank|野村信託銀行]]
- [[asset-managers/daiwa-asset-management|大和アセット]]
- [[securities/nisa-2024-flow|NISA 2024 flow]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, "金融商品取引業者登録一覧", `kinyushohin.xlsx`.
- Nomura Asset Management, "会社概要".
- Nomura Asset Management, "投資理念".

> [!info] 校核状態
> confidence: likely. 法人名・登録番号・野村 HD 系列は公開情報。具体的 AUM / ファンド本数 / シェアは記載しない。

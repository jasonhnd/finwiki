---
title: "三菱UFJアセットマネジメント"
aliases:
  - "Mitsubishi UFJ Asset Management"
  - "三菱UFJアセットマネジメント"
  - "三菱UFJアセットマネジメント株式会社"
  - "MUAM"
  - "asset-managers/mitsubishi-ufj-am"
  - "asset-managers/mitsubishi-ufj-asset-management"
domain: asset-managers
created: 2026-05-20
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, asset-management, fiea-operator, mufg]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.am.mufg.jp/corp/about/gaiyou.html"
  - "https://www.am.mufg.jp/corp/our_company/"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: registered_as
    target: financial-licenses/securities-license-stack
    evidence: investment_management_registration
    source: "https://www.fsa.go.jp/menkyo/menkyo.html"
    as_of: 2026-06-21
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: supervisory_authority
    source: "https://www.fsa.go.jp/"
    as_of: 2026-06-21
    confidence: likely
---

# 三菱UFJアセットマネジメント

## Wiki route

This entry sits under [[asset-managers/INDEX|asset-managers INDEX]] (its domain route). Read it against [[asset-managers/asset-management-one|アセットマネジメントOne]] (a Mizuho + Dai-ichi Life JV) for the contrast in ownership model, and against [[financial-regulators/fsa|the FSA]] plus [[securities/financial-instruments-business-operators-japan-index|FSA 金商業者 index]] for the supervisory / registry boundary over 投資運用業 operators.

## TL;DR

三菱UFJアセットマネジメント株式会社は、金融商品取引法上の **投資運用業** 登録を持つ [[megabanks/mufg|MUFG]] の運用会社。FSA 金融商品取引業者一覧では「三菱UFJアセットマネジメント株式会社」、関東財務局長(金商)第404号として掲載される。**メガバンク完全子会社**として公募投資信託・投資一任・投資助言を扱い、eMAXIS / eMAXIS Slim 等の低コスト index fund ブランドで知られる。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 三菱UFJアセットマネジメント株式会社 / Mitsubishi UFJ Asset Management Co., Ltd. |
| License route | 金融商品取引法上の **投資運用業**・**投資助言・代理業**・第二種; 関東財務局長(金商)第404号 |
| Parent boundary | [[megabanks/mufg|MUFG]] グループの asset-management 子会社 (megabank-affiliated) |
| Supervision | [[financial-regulators/fsa|FSA]] + 投資信託協会 / 日本投資顧問業協会 |
| Wiki role | MUFG 系 運用会社 anchor |

## 2. Operating model

投資運用業者として、(1) 公募投信の **投資信託委託** (組成・運用)、(2) **投資一任** (機関投資家・年金 discretionary)、(3) 投資助言を担う。販売は [[megabanks/mufg-bank|三菱UFJ銀行]] の銀行チャネル、[[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] の信託チャネル、[[securities-firms/mufg-mums|MUMSS]] の証券チャネルを横断する。eMAXIS Slim 等の低コスト index fund 競争は本ページの分析対象。出資構造は JV 型の [[asset-managers/asset-management-one|アセマネOne]] と対照される。監督は FSA + 自主規制機関の二層構造。

## 3. Why this page matters

- MUFG の収益を銀行・証券だけでなく **資産運用フィー** にまで広げて見るために運用会社を切り出す。
- NISA・投信販売・低コスト index fund competition・グループ cross-sell の交差点を確定する。
- 系列系ピア ([[asset-managers/asset-management-one|アセマネOne]] / [[asset-managers/smd-am|三井住友DS AM]]) との出資・出自比較の起点を提供する。

## Related

- [[asset-managers/INDEX|asset-managers INDEX]]
- [[megabanks/mufg|MUFG]]
- [[megabanks/mufg-bank|三菱UFJ銀行]]
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]]
- [[securities-firms/mufg-mums|MUMSS]]
- [[securities/nisa-2024-flow|NISA 2024 flow]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, "金融商品取引業者登録一覧", `kinyushohin.xlsx`.
- Mitsubishi UFJ Asset Management, "会社概要".
- Mitsubishi UFJ Asset Management, "はじめまして、三菱UFJアセットマネジメントです".

> [!info] 校核状態
> confidence: likely. 法人名・登録番号・MUFG 系列は公開情報。具体的 AUM / ファンド本数 / シェアは記載しない。

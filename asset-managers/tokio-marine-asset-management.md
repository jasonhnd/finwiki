---
title: "東京海上アセットマネジメント (Tokio Marine AM)"
aliases: ["Tokio Marine Asset Management", "東京海上アセットマネジメント", "東京海上アセットマネジメント株式会社", "TMAM"]
domain: asset-managers
created: 2026-05-24
last_updated: 2026-06-21
last_tended: 2026-06-21
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, asset-management, fiea-operator, tokio-marine, non-life]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.tokiomarineam.co.jp/company/profile.html"
  - "https://www.tokiomarineam.com/who_we_are/"
  - "https://www.tokiomarinehd.com/group_company/"
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

# 東京海上アセットマネジメント (Tokio Marine AM)

## Wiki route

This entry sits under [[asset-managers/INDEX|asset-managers INDEX]]. Read it against [[asset-managers/asset-management-one|アセットマネジメントOne]] for peer / contrast context, [[financial-licenses/securities-license-stack|securities license stack]] for the FIEA license boundary, and [[securities/financial-instruments-business-operators-japan-index|FSA 金商業者 index]] for the registry layer.

## TL;DR

東京海上アセットマネジメント (TMAM) は [[non-life-insurers/tokio-marine|東京海上ホールディングス]] の asset-management operating company。FSA 金融商品取引業者一覧では「東京海上アセットマネジメント株式会社」、関東財務局長(金商)第361号として掲載される。**3 メガ損保 (東京海上 / [[non-life-insurers/msad|MS&AD]] / [[non-life-insurers/sompo|SOMPO]]) の筆頭 [[non-life-insurers/tokio-marine|東京海上 HD]] の運用機能** を担う損保系運用会社で、損保責任準備金・年金運用を主軸とし、近年は公募投信・NISA 商品にも展開。メガバンク系運用会社 ([[asset-managers/mufg-asset-management|MUAM]] / [[asset-managers/asset-management-one|アセマネOne]]) や生保系運用会社 ([[asset-managers/nissay-asset-management|ニッセイ AM]]) とは異なる**損保系運用会社**カテゴリの代表。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal name | 東京海上アセットマネジメント株式会社 |
| 英名 | Tokio Marine Asset Management Co., Ltd. |
| FSA registration | 関東財務局長(金商)第361号 |
| FIEA scope | 第二種金融商品取引業、投資助言・代理業、投資運用業 |
| Parent boundary | [[non-life-insurers/tokio-marine|東京海上 HD]] 100% asset-management 子会社 |
| 本社 | 東京都千代田区 |

## 2. Business role

- **損害保険責任準備金運用**、**年金運用**、**公募投信運用**、**投資一任** を担う [[non-life-insurers/tokio-marine|東京海上 HD]] の運用会社。
- 損保 FG の運用機能として、長期負債 (損保責任準備金) のデュレーション・マッチング運用が中核。
- 公募投信・NISA 商品にも展開し、生保・銀行販売チャネル経由で個人投資家向けに販売。

## 3. 出資・統治構造

```
東京海上ホールディングス (上場 8766)
  ├── 東京海上日動火災保険 (損保コア)
  ├── 東京海上日動あんしん生命 (生保)
  └── 東京海上アセットマネジメント (100%)
        ├── 損保責任準備金運用 (親会社向け)
        ├── 年金運用 (DB / DC)
        ├── 公募投信運用
        └── 投資一任 (機関投資家向け)
```

- [[non-life-insurers/tokio-marine|東京海上 HD]] 100% 子会社、メガバンク系 AM のような JV 構造ではない

## 4. #26 deepening: insurer-group asset manager and channel role

TMAM の公式会社概要は、2026-04-01 時点で投資顧問 7兆1,924億円、投資信託 2兆4,453億円の運用資産残高を掲げ、金融商品取引業者、宅地建物取引業者、取引一任代理等の認可を並べる。金融商品取引業の種別は投資運用業、投資助言・代理業、第二種金融商品取引業であり、単なる保険グループの treasury desk ではなく、外部顧客向けの運用商品・一任運用・不動産関連機能を持つ operating asset manager として扱う。

英語サイトは、TMAM が pension funds、financial institutions、sovereign wealth funds などの機関投資家向け fiduciary / investment-management services と、日本国内個人向け公募投信を提供すると説明する。したがって、このページの読み筋は、(1) 東京海上グループ内の保険負債・資産運用機能、(2) 年金・金融法人・SWF 向けの institutional mandate、(3) NISA / 公募投信市場に出る retail fund provider、という 3 層で分けると誤読しにくい。

group relationship では、東京海上 HD 100% 子会社であることが重要である。[[asset-managers/asset-management-one|アセットマネジメントOne]] のような銀行・保険 JV ではなく、[[non-life-insurers/tokio-marine|東京海上]] の損保・生保・海外保険ポートフォリオを背景にした insurer-owned AM であり、[[asset-managers/nissay-asset-management|ニッセイ AM]] や [[asset-managers/t-and-d-asset-management|T&D AM]] と比較すると、損保グループ由来のリスク・資本・サステナビリティ文脈が強い。

## 5. Why standalone page matters

[[non-life-insurers/tokio-marine|東京海上 HD]] は損保 3 メガの筆頭で時価総額・海外比率ともに業界トップだが、運用機能を担う **TMAM** は独立分析単位として重要：

1. **損保系運用会社カテゴリの代表**：[[non-life-insurers/msad|MS&AD]] や [[non-life-insurers/sompo|SOMPO]] 系運用会社と並ぶが、東京海上の海外展開・ESG リーダーシップが運用方針に反映
2. **NISA 拡充 + 公募投信競争** の損保系プレイヤー：銀行系 ([[asset-managers/mufg-asset-management|MUAM]]) / 証券系 ([[asset-managers/nomura-asset-management|野村アセット]]) / 信託系 ([[asset-managers/smt-am|SMT-AM]]) との競合
3. **損保責任準備金運用 (約 30 兆円規模) の運用方針** が中堅金融市場 (国内債・株式・オルタナティブ) に与える影響

## 6. 競合・peer

| Peer | 系譜 | 差別化軸 |
|---|---|---|
| [[asset-managers/nissay-asset-management|ニッセイ AM]] | [[life-insurers/nippon-life|日本生命]] 系 | 生保責任準備金運用 + 公募投信 |
| [[asset-managers/t-and-d-asset-management|T&D AM]] | [[life-insurers/td-hd|T&D HD]] 系 | 中堅生保 FG の運用機能 |
| [[asset-managers/asset-management-one|アセマネOne]] | みずほ + 第一生命 JV | 銀行 + 生保 JV |
| [[asset-managers/mufg-asset-management|MUAM]] | [[megabanks/mufg|MUFG]] 系 | メガバンク総合運用 |
| [[asset-managers/smt-am|SMT-AM]] | [[trust-banks/sumitomo-mitsui-trust|SuMi TRUST]] 系 | 信託専業独立系 |

## Related

- [[non-life-insurers/tokio-marine]]
- [[non-life-insurers/msad]]
- [[non-life-insurers/sompo]]
- [[asset-managers/nissay-asset-management]]
- [[asset-managers/t-and-d-asset-management]]
- [[asset-managers/asset-management-one]]
- [[asset-managers/smt-am]]
- [[securities/nisa-2024-flow]]
- [[securities/financial-instruments-business-operators-japan-index]]

## Sources

- FSA, "金融商品取引業者登録一覧", `kinyushohin.xlsx` (公開エクセル一覧).
- 東京海上アセットマネジメント株式会社, "会社概要" (公式コーポレートサイト).
- Tokio Marine Asset Management, "Who We Are" (official English site).
- 東京海上ホールディングス, "グループ会社一覧".

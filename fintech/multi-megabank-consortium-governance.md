---
title: 多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式
aliases: [multi-megabank consortium governance, megabank consortium fintech, Progmat governance pattern]
domain: fintech
created: 2026-05-18
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-09-22
confidence: likely
tags: [fintech, governance, japan, progmat, bis, consortium, megabank, td]
status: active
sources:
  - https://progmat.co.jp/press/pdf/press231002_01.pdf
  - https://www.tr.mufg.jp/ippan/release/pdf_mutb/230911_1.pdf
  - https://progmat.co.jp/about/
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
  - https://www.bis.org/publ/othp110.pdf
---

# 多巨行联合体治理


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 公開資料から確認できる Progmat の事実は、2023-10-02 に設立された独立法人で、三菱 UFJ 信託銀行 49.0% を筆頭に、IT、銀行、取引所関連の 8 社が出資したことである。これは多主体の所有構造を示すが、意思決定速度、金融庁の「非支配」指導、顧客基盤、拡張性首位を証明しない。BIS Project Agorá は会社の共同所有モデルではなく、BIS / IIF が convene する中央銀行・民間金融機関の public-private project であり、2026 年に prototype report を公表した。両者は governance の比較材料にはなるが、同じ法人類型や競争関係ではない。^[source:Progmat corporate release 2023-10-02; BIS Project Agorá project page and report 2026-05-27]

## 公開記録で確認できる形態

| ケース | 法的・組織的形態 | 公開資料で確認できる参加構造 | この資料だけでは判定できないこと |
|---|---|---|---|
| Progmat | 2023-10-02 設立の株式会社 | 8 株主。三菱 UFJ 信託銀行 49.0%、NTT データ 13.5%、その他 6 社 | 意思決定速度、実質支配、FSA の設計意図、他モデルより高い拡張性 |
| BIS Project Agorá | BIS / IIF による public-private project。finished product ではなく prototype | BIS の 2026 project page は 8 central banks と 40 超の金融機関を記載 | 株式所有、恒久的法人、商用 launch、各参加者の exit 制約 |

Source note: Progmat facts come from its [2023-10-02 corporate release](https://progmat.co.jp/press/pdf/press231002_01.pdf). Agorá facts come from the current [BIS project page](https://www.bis.org/about/bisih/topics/fmis/agora.htm) and [2026 prototype report](https://www.bis.org/publ/othp110.pdf).

## Progmat 設立時の株主構成

| 株主 | 2023-10-02 公表出資比率 |
|---|---:|
| [[megabanks/mufg|三菱 UFJ 信託銀行]] | 49.0% |
| NTT データ | 13.5% |
| みずほ信託銀行 | 7.5% |
| 三井住友信託銀行 | 7.5% |
| [[megabanks/smfg|三井住友 FG]] | 7.5% |
| SBI PTS | 5.0% |
| JPX 総研 | 5.0% |
| Datachain | 5.0% |

Source note: exact company names and percentages are reproduced from Progmat's [new-management and disclosure release](https://progmat.co.jp/press/pdf/press231002_01.pdf). They describe the disclosed formation-date cap table; current ownership must be rechecked if a later primary disclosure is published.

## 所有構造から推定してはいけないこと

- 49.0% が過半数未満であることだけでは、会計・会社法・契約上の「支配」を確定できない。
- 公開資料には「49% は FSA の指導で意図的に設定した」との裏付けがない。
- 株主構成は、FSA が特定 stablecoin や共通インフラを承認したことを意味しない。
- DCC 会員数、顧客数、取引量、競合銀行の便益、退出オプションは、それぞれ別の資料で確認する必要がある。
- 「単一銀行所有」「銀行間 JV」「独立会社」の速度や拡張性を順位付けするには、共通指標と観測期間が必要である。

## BIS Project Agorá との対比

| 軸 | Progmat | BIS Project Agorá |
|---|---|---|
| 組織 | 日本の株式会社 | BIS / IIF が convene する public-private project |
| 参加の形 | 株主 8 社（設立時公表） | BIS page: 8 central banks and over 40 financial institutions |
| 公開された対象 | デジタルアセット発行・管理基盤の会社 | tokenised central bank reserves と tokenised commercial bank deposits を使う wholesale cross-border prototype |
| 2026-07 時点の出力 | 継続企業。個別プロダクトの status は別途確認 | 2026-05-27 report / prototype。BIS は finished product ではないと明記 |
| 比較上の限界 | 株式会社の cap table と product governance は別 | project participation は株式 ownership ではない |

Source note: Progmat's form and formation cap table use its [corporate release](https://progmat.co.jp/press/pdf/press231002_01.pdf); Agorá's participant count, asset model, and prototype boundary use the [BIS current project page](https://www.bis.org/about/bisih/topics/fmis/agora.htm).

## 共通リスク

以下は発生済み事実ではなく、multi-party governance を調査する際の analytical checklist である。

- **意思決定権**: 株式比率だけでなく、取締役指名権、拒否権、reserved matters を確認する。
- **経済的利益**: 配当、利用料、IP、データ、商品別収益の帰属を確認する。
- **参加と退出**: 株式譲渡制限、project participation、service contract の終了条件を分ける。
- **規制責任**: platform company、issuer、trustee、distributor、participant の責任を分ける。
- **実績**: launch、volume、availability、latency、cost などの outcome は、governance form から推定しない。

## 応用

- 任何 "複数 megabank 共通 fintech インフラ" 議論の構造分析
- 韓国 / 台湾 / アジア他国の SC コンソーシアム設計参考
- mBridge / Project Nexus / IPS-RTGS 相互接続の governance 比較
- DTCC / Visa / Mastercard 等 既存「業界共通インフラ」の進化系として
- 中央銀行コンソーシアム + 民間 SC コンソーシアムの 2 層構造設計

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

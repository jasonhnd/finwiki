---
source: fintech/jp-stablecoin-progmat
source_hash: ceee19dc7622ed14
lang: ja
model: source-language-sync
status: machine
fidelity: ok
title: "株式会社Progmat — デジタルアセットプラットフォーム概要"
translated_at: 2026-07-29T17:52:19.235Z
---

# 株式会社Progmat — デジタルアセットプラットフォーム概要


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> 公式にはデジタルアセット発行・管理プラットフォームを提供する法人。2026-07-30 に確認した FSA の暗号資産交換業者・電子決済手段等取引業者の各登録一覧、および JVCEA 会員一覧には Progmat, Inc. の掲載がない。ただし、各一覧の非掲載だけから、同社の全業務範囲、個別商品の発行体、取引・保管の可否を結論づけてはならない。

## 1. 法人・株主

- **商号**: 株式会社Progmat（英文: Progmat, Inc.）
- **設立日**: 2023年10月2日
- **本店所在地**: 〒100-0005 東京都千代田区丸の内1-6-5 丸の内北口ビルディング9階（WeWork内）
- **代表取締役 Founder and CEO**: 齊藤 達哉（Tatsuya Saito）

**株主情報の境界**:

公式の 2023-10-02 会社設立リリースは設立参加企業を示すが、このページが以前記載していた持株比率を裏付ける current cap table は公式 About ページに掲載されていない。したがって「MUTB 49%、SMBC 15%、みずほ 15%」などの概算値と、「FSA 指導で 49% にした」という推測は撤回する。下表は公式ページで確認できる company facts のみを示す。 ^[https://progmat.co.jp/about/] ^[https://progmat.co.jp/press/pdf/press231002_01.pdf]

| 項目 | 公式表示 |
|---|---|
| 社名 | 株式会社Progmat（Progmat, Inc.） |
| 設立日 | 2023-10-02 |
| Founder and CEO | 齊藤 達哉 |
| 所在地 | 東京都千代田区丸の内1-6-5 丸の内北口ビルディング9階 |

現任 team は変動し得るため、[[payment-firms/progmat|company anchor]] と公式 About ページで都度確認する。

---

## 2. 登録・会員資格・発行体の区別

下表の登録・会員資格の欄は 2026-07-30 に確認した各公式一覧に基づく。個別ステーブルコインの欄は、一覧の非掲載から商品固有の法的地位を推定しないための確認境界である。^[https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf] ^[https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.pdf] ^[https://jvcea.or.jp/member/]

| 確認面 | 2026-07-30 時点の確認 | 何を意味するか |
|---|---|---|
| FSA 暗号資産交換業者登録一覧 | Progmat, Inc. の掲載なし | Progmat 自身が当該登録一覧上の暗号資産交換業者ではないことを示す。別法人や別の法的資格には外挿しない |
| FSA 電子決済手段等取引業者登録一覧 | Progmat, Inc. の掲載なし | Progmat 自身が当該登録一覧上の電子決済手段等取引業者ではないことを示す。発行体資格とは別問題 |
| JVCEA 会員一覧 | Progmat, Inc. の掲載なし | 協会会員資格のスナップショットであり、法定登録そのものではない |
| 個別ステーブルコイン | 商品ごとに未確定 | 法的類型、委託者、受託者、発行者、仲介者を token-specific release と登録記録で確認する |

FSA の登録は法定の事業者資格、JVCEA の掲載は自主規制団体の会員資格、ステーブルコインの発行体は個別スキーム上の主体であり、同一ではない。Progmat の直接資料は同社をプラットフォーム提供者・共同開発者として示すが、すべての Progmat 関連トークンが同じ法的類型または同じ発行体になるとは限らない。^[https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf] ^[https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.pdf] ^[https://jvcea.or.jp/member/] ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

---

## 3. 取扱通貨（発行支援するデジタルアセット種別）

Progmat の直接資料は、ST / UT / SC に関するプラットフォーム提供・発行支援の役割を説明する。発行者と法的類型は token / product ごとに確認する:

### ST（セキュリティトークン / デジタル証券）

Progmat は不動産や社債等の digital securities を扱う。2026-07-13 の公式 release は、Avalanche 連携への移行対象となった Progmat 上の digital securities が **JPY 452 billion 超**と述べる。この数値は同 release の対象時点に限定し、国内市場全体の件数・シェアには外挿しない。 ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

### SC（ステーブルコイン / Progmat Coin）

- 2024-09-05: Datachain と Project Pax pilot を公表。
- 2025-02-17: 日韓 PoC に向けた MOU を公表。
- 2025-03-21: 香港–日本貿易送金 PoC の検討を公表。
- 2026-05-08: tokenized JGB / on-chain repo joint study を公表。

これらは platform、pilot、PoC、study の発表であり、特定の XJPY / XUSD token が発行済みであることや、三行共同 issuer / reserve / auditor structure を証明しない。 ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax] ^[https://progmat.co.jp/wp-content/uploads/2025/02/20250217_PR_02.pdf] ^[https://progmat.co.jp/wp-content/uploads/2025/10/20250321_press-release_Progmat-IDA-and-Datachain-Join-Forces-to-Explore-Stablecoin-Based-Remittances-for-Hong-Kong-Japan-Trade-Efficiency.pdf] ^[https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf]

### UT（ユーティリティトークン / デジタル権利証）

Progmat は UT を digital rights / utility use cases の product family として説明する。累計件数を使う場合は、公式 Concept ページの current snapshot と取得日を併記する。 ^[https://progmat.co.jp/concept/]

---

## 4. 業務範囲

### Progmat の直接資料で確認できる役割 — platform / support（発行者は商品別に確認）

以下はプラットフォーム提供・実装支援の役割を示す例示図であり、すべての Progmat 関連 token に共通する発行主体、契約、または法的類型を示すものではない。

```
[商品ごとに確認する発行主体]
    │ 商品別の契約・役割分担
    ▼
[Progmat] ← 公開資料で確認できる platform / implementation support
    │ トークン技術
    ▼
[ブロックチェーン基盤]
    │ 発行
    ▼
[投資家・決済参加者]
```

**主要サービス（2024-11 発表 "Progmat SaaS"）**:
- トークン発行・管理基盤のSaaS提供（金融機関向け）
- 実装支援サービス（サービス設計・規制対応・技術実装）
- DCC（デジタルアセット共創コンソーシアム）の事務局運営。参加数は公式 Consortium ページの current 表示を snapshot date とともに確認する。 ^[https://progmat.co.jp/consortium/]

2024-11-01 の直接リリースは Progmat SaaS と導入支援サービスの提供開始を示す。FSA 登録一覧や JVCEA 会員一覧への非掲載だけを理由に、「取引・交換・保管はすべて業務外」と因果づけない。個別行為の主体と必要資格を案件ごとに確認する。^[https://progmat.co.jp/wp-content/uploads/2024/11/press241101_01.pdf]

**Project Pax（クロスボーダー）** — SWIFT API 互換通道の詳細は [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]] 参照:
- 2024-09-05: Progmat / Datachain が cross-border stablecoin transfer platform の pilot を公表。
- 2025-02-17: 日韓 PoC に向けた MOU を公表。
- 2025-03-21: IDA、Progmat、Datachain、TOKI が香港–日本 trade remittance PoC の検討を公表。

**最新展開（2026）**:
- 2026-05-08: トークン化国債「オンチェーン・レポ取引」共同検討開始
- 2026-07-13: Progmat 上の digital securities の Avalanche integration 完了を公表

^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax] ^[https://progmat.co.jp/wp-content/uploads/2025/02/20250217_PR_02.pdf] ^[https://progmat.co.jp/wp-content/uploads/2025/10/20250321_press-release_Progmat-IDA-and-Datachain-Join-Forces-to-Explore-Stablecoin-Based-Remittances-for-Hong-Kong-Japan-Trade-Efficiency.pdf] ^[https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf] ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

---

## 5. 実績の読み方

2026-07-13 の公式 release は、Avalanche integration の移行対象となった Progmat 上の digital securities が JPY 452 billion を超えると述べる。ただし、国内市場全体の同日・同定義の denominator を示していないため、52% / 68% market share や「事実上の市場標準」という順位には変換しない。 ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

**SC（ステーブルコイン）市場**:
- 公式アーカイブは pilot、development、joint study を継続的に公表している。
- 発行済み stablecoin の名称、issuer、supply、reserve を確認する場合は token-specific release が必要。
- 競合順位や「唯一無二」の position は、同一基準の market data がないため付与しない。

個別リリースで参加者や対象利用者が明示されない限り、「主な顧客層」や retail / institutional の比率は推定しない。

---

## 6. 沿革・重大事件

下表は公式 About ページと各日付付き直接リリースで確認できる主要項目に限定する。 ^[https://progmat.co.jp/about/] ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

| 年月 | 出来事 |
|---|---|
| **2023-10-02** | **株式会社Progmat として独立法人化** |
| 2024-09-05 | Project Pax pilot を公表（Datachain 連携クロスボーダー SC 送金基盤） |
| 2024-11-01 | 「Progmat SaaS」と導入支援サービスの提供開始を公表 |
| 2025-02-17 | Project Pax の日韓 PoC に向けた MOU を公表 |
| 2025-03-21 | 香港–日本 trade remittance PoC の検討を公表 |
| 2026-05-08 | トークン化国債のオンチェーン・レポ取引共同検討開始 |
| 2026-07-13 | Progmat 上の digital securities の Avalanche integration 完了 |

「行政処分なし」は網羅的 regulator search を伴うため、会社のリリースだけからは断定しない。

---

## 7. 戦略動向

直接 release から確認できる方向は、(1) ST / UT / SC platform、(2) Progmat SaaS と implementation support、(3) Project Pax の段階的 PoC、(4) public-chain integration、(5) tokenized JGB / repo の joint study である。IPO、tokenized-stock launch、DCC の政策的位置付けは、対応する一次資料なしに確定ロードマップとして扱わない。 ^[https://progmat.co.jp/wp-content/uploads/2024/11/press241101_01.pdf] ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax] ^[https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf] ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

---

## 8. 関連人物

公式 About ページの current team 表示を参照する。人事は変動するため snapshot date は 2026-07-30。 ^[https://progmat.co.jp/about/]

| 氏名 | 公式表示の役職 |
|---|---|
| 齊藤 達哉 | 代表取締役 Founder and CEO |
| 石山 進 | 取締役 CFO and CRO |
| 田中 利宏 | 代表取締役（非常勤） |
| 戸辺 勝俊 | CTO |
| 川端 明 | Vice President, Japan Business Development |

取締役・監査役を含む完全な current roster は公式 About ページを正とする。

---

## Related

- [[payment-firms/progmat|株式会社Progmat]] — JapanFG company anchor
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — regulated trust-bank boundary
- [[fintech/jp-trust-type-sc-architecture|信託型 / 第3号 EPI の一般的なアーキテクチャ]] — Progmat 関連 token の該当性は商品ごとに確認する
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — consortium governance analysis
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — JPYC・DCJPY・Progmat Coinの制度的位置付け比較
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — GMOあおぞら銀行発行・銀行型（第1号EPI）との比較対象
- [[exchanges/jp-exchange-jpyc|JPYC]] — 資金移動業者型（第2種）との比較対象

---

## Sources

- [Progmat 会社概要（About Us）](https://progmat.co.jp/about/)（取得 2026-07-30）
- [Progmat Concept](https://progmat.co.jp/concept/)（取得 2026-07-30）
- [Progmat Consortium（DCC）](https://progmat.co.jp/consortium/)（取得 2026-07-30）
- [Progmat 設立リリース](https://progmat.co.jp/press/pdf/press231002_01.pdf)
- [FSA 暗号資産交換業者登録一覧](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf)（取得 2026-07-30）
- [FSA 電子決済手段等取引業者登録一覧](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.pdf)（取得 2026-07-30）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/)（取得 2026-07-30）
- [Datachain / Progmat — Project Pax（2024-09-05）](https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax)
- [Progmat SaaS / 導入支援サービス（2024-11-01）](https://progmat.co.jp/wp-content/uploads/2024/11/press241101_01.pdf)
- [Project Pax 日韓 PoC MOU（2025-02-17）](https://progmat.co.jp/wp-content/uploads/2025/02/20250217_PR_02.pdf)
- [香港–日本貿易送金 PoC 検討（2025-03-21）](https://progmat.co.jp/wp-content/uploads/2025/10/20250321_press-release_Progmat-IDA-and-Datachain-Join-Forces-to-Explore-Stablecoin-Based-Remittances-for-Hong-Kong-Japan-Trade-Efficiency.pdf)
- [Tokenized JGB / on-chain repo 共同検討（2026-05-08）](https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf)
- [Avalanche integration 完了（2026-07-13）](https://progmat.co.jp/en/news/2026-07-13-press_en/)

---

**最終更新**（2026-07-30）：根拠のない持株比率、市場シェア推計、将来のローンチ、人事上の役割に関する推論を削除し、日付付きの公式資料を同期した。

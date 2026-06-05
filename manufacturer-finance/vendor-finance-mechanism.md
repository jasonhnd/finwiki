---
title: "Captive / Vendor Finance Mechanism (captive・vendor finance の仕組み)"
aliases:
  - "vendor-finance-mechanism"
  - "captive finance mechanism"
  - "vendor finance mechanism"
  - "captive vendor finance"
  - "captive finance"
  - "vendor finance"
  - "キャプティブファイナンス"
  - "ベンダーファイナンス"
  - "顧客金融の仕組み"
domain: "manufacturer-finance"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [manufacturing, captive-finance, vendor-finance, residual-value, floorplan, abs, mechanism, japan, global]
status: active
sources:
  - "https://www.oecd.org/en/topics/export-credits.html"
  - "https://www.deloitte.com/us/en/Industries/consumer/articles/electric-vehicle-lease-returns-market-analysis.html"
  - "https://www.jdpowervalues.com/oems-and-captive-finance-solutions"
  - "https://disclosure2.edinet-fsa.go.jp/"
---

# Captive / Vendor Finance Mechanism (captive・vendor finance の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind the domain's company profiles. The OEM finance arms that *run* this mechanism are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], and [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]. For the cross-border variant — exporting capital goods with ECA support — see the sibling mechanism page [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The funding layer that captives rely on is securitization: [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] and [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]]. Pair with [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] for the bank-affiliated leasing companies that compete with — and partner with — captives, and [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Captive finance** とは、メーカー (OEM / ベンダー) が **自社製品の購入者に対する金融を、本体外の連結金融子会社 (captive) で提供する仕組み**。**Vendor finance** はその B2B 版で、設備・機器ベンダーが顧客 (法人) の購入を分割・リース・サブスクで支える。両者の本質は **「製品を売る」と「その代金を貸す/リースする」を同一グループ内で垂直統合する** こと。これにより OEM は (1) 販売チャネルの維持・送客力、(2) 残価リスク (residual value) のグループ内集約、(3) 顧客との長期関係とデータ取得、(4) ABS による債権のオフバランス化、を一体で設計できる。FinWiki の manufacturer-finance ドメインは、この仕組みを **誰が・どう運用しているか** を企業別に記述する。本ページはその共通の **mechanism 定義** として、captive / vendor / floorplan / residual value / ABS funding の各部品を整理する。

## 1. captive と vendor finance の定義

| 用語 | 主体 | 顧客 | 典型商品 |
|---|---|---|---|
| **Captive finance** | OEM 直系の金融子会社 (例: [[manufacturer-finance/toyota-financial-services|TFS]], [[manufacturer-finance/honda-finance|AHFC]]) | 主に個人 (B2C) + ディーラー | 自動車ローン、残クレ、リース、カード |
| **Vendor finance** | 機器・設備ベンダー (+ 提携リース会社) | 主に法人 (B2B) | 設備リース、分割払い、SaaS サブスク |
| **Floorplan / 在庫金融** | captive または提携金融 | ディーラー (流通段階) | 在庫車・在庫機器の短期回転与信 |
| **Bank-affiliated leasing** | 銀行系・独立系リース会社 | 法人・個人 | リース全般 (captive の競合 / 補完) |

「captive を持つ型」(Toyota / Honda) と「captive を持たず銀行系・提携で回す型」(Panasonic / MHI) の対比は、本ドメインの主要な分析軸。後者は [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] と [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] を参照。

## 2. なぜメーカーは captive を持つのか (4 つの動機)

1. **販売チャネルの支配と送客力**: 新車・新機器購入の現場で「製品 + ローン + リース + 保険」を一括提案でき、銀行系オートローンに対する優位性は **販売現場の即時与信**。captive は OEM のブランドロイヤルティを金融面から強化する。
2. **残価リスクのグループ内集約 (residual value)**: 後述の通り、リース・残クレは中古車/中古機器の将来価格に賭ける商品。OEM 本体は新車販売利益を先に確定し、価格変動リスクは captive の B/S に集約する設計が一般的。
3. **顧客との長期関係とデータ**: ローン・リース・カードを通じて購買・利用データを取得し、買い替えサイクルやクロスセルに活かす。
4. **資本効率と ABS funding**: 積み上がる売掛・割賦・リース債権を ABS で証券化・オフバランス化し、グループ全体のレバレッジを抑える ([[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS]] / [[structured-finance/japan-equipment-lease-abs|equipment lease ABS]] と接続)。

## 3. Residual Value (残価) リスクの仕組み

リース・残価設定型ローンの中核は **residual value (RV) = リース満了時の想定残存価値**。仕組みは次の通り。

- captive は契約時に **満了時の中古価格 (RV)** を見積もり、その分を月額から控除する。RV を高く設定するほど月額が下がり、リースが売れやすくなる。
- 満了時の実際の中古価格が **RV を下回る** と、captive に **残価損 (residual loss)** が発生する。逆に上回れば益。
- OEM captive はしばしば **RV を意図的にやや高く設定 (lease subvention)** して月額を下げ、在庫を動かしブランドロイヤルティを維持する。これは販売促進と残価リスクのトレードオフ。
- **BEV / EV のリスク**: 技術更新の速さ (バッテリー劣化・世代交代) で中古価格の予測が難しく、RV モデルの精緻化が課題。EV リース返却車の残価動向は業界の重要論点 (Deloitte 等が分析)。
- 設備・機器の vendor finance でも同型の RV リスクがあり、**true-lease (オペレーティングリース、残価リスクをベンダー側が負う) と finance-lease (ファイナンスリース、実質割賦) の区別** が会計・リスク配分を分ける。詳細は [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]] 参照。

## 4. Funding: captive はどう資金を調達するか

captive 自身は預金を持たない (銀行免許を持つ一部を除く) ため、貸出原資を市場から調達する。主な手段は次の通り。

| funding 手段 | 内容 |
|---|---|
| **ABS (証券化)** | 自動車ローン・リース・割賦債権を SPV に譲渡し ABS で売却。オフバランス化と資金回収を同時に実現。米 captive は SEC 登録の owner trust シリーズで定期発行。 |
| **社債 / CP** | captive 名義の社債・コマーシャルペーパー。親会社の信用補完 (Keepwell Agreement 等) で調達コストを抑える。 |
| **親会社保証 / Keepwell** | 親 OEM が captive の流動性・正味純資産維持を約束し、captive 単独より高い信用力を付与 (法的保証ではない場合が多い)。[[manufacturer-finance/honda-finance|Honda Finance]] の AHFC が典型例。 |
| **銀行団融資 / シンジケート** | メガバンク・地銀のコミットメントライン。 |
| **提携リース会社経由** | 自前 captive を軽くし、[[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] 等にリース組成を委ねる型 (Panasonic / Hitachi の一部)。 |

## 5. 規制・政策

- **割賦販売法・貸金業法 (国内)**: 分割払い・ローンの与信は割賦販売法、貸金業登録の対象。
- **保険業法・銀行法**: captive グループ内に保険・銀行を持つ場合 (Sony / Toyota の一部) は各業法の監督下。
- **証券化規制**: ABS funding はリスク・リテンション (自己保有義務) など各国証券化規制の対象。
- **消費者保護**: 残価評価モデルの透明化、APR (年率) 開示 (米 CFPB 等)、EV 残価の説明責任が直近論点。
- **会計基準**: リース会計 (IFRS 16 / 日本の新リース基準) は true-lease / finance-lease の区分とオン/オフバランスを左右し、vendor finance の設計に直結する。

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]
- [[manufacturer-finance/export-finance-mechanism|export finance mechanism]] (cross-border sibling mechanism)
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/toyota-motor|Toyota Motor]] · [[manufacturer-finance/seiko-epson|Seiko Epson]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- OECD「Export credits」(captive / vendor finance の国際枠組み文脈): https://www.oecd.org/en/topics/export-credits.html
- Deloitte「Electric Vehicle Lease Returns: Market Analysis」(EV 残価リスク): https://www.deloitte.com/us/en/Industries/consumer/articles/electric-vehicle-lease-returns-market-analysis.html
- J.D. Power「OEMs and Captive Finance Solutions」: https://www.jdpowervalues.com/oems-and-captive-finance-solutions
- EDINET (各社「金融サービス事業」セグメント開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> confidence: **likely**。captive / vendor finance・residual value・floorplan・ABS funding の各機構は、公開された OEM IR セグメント開示・業界アナリシス (Deloitte / J.D. Power) ・OECD 枠組みに基づく一般的な仕組みの記述。特定社の財務数値は本ページでは扱わず、企業別エントリ ([[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|Honda Finance]] 等) に委ねる。脆い financial figures より mechanism 知識を優先する方針。

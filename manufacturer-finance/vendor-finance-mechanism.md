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
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: likely
tags: [manufacturing, captive-finance, vendor-finance, residual-value, floorplan, abs, mechanism, japan, global]
status: active
sources:
  - "https://www.oecd.org/en/topics/export-credits.html"
  - "https://www.deloitte.com/us/en/Industries/consumer/articles/electric-vehicle-lease-returns-market-analysis.html"
  - "https://www.jdpowervalues.com/oems-and-captive-finance-solutions"
  - "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/"
  - "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/"
  - "https://disclosure2.edinet-fsa.go.jp/"
---

# Captive / Vendor Finance Mechanism (captive・vendor finance の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind the domain's company profiles. The OEM finance arms that *run* this mechanism are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], and [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]. For the cross-border variant — exporting capital goods with ECA support — see the sibling mechanism page [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The funding layer that captives rely on is securitization: [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] and [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]]. Pair with [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] for the bank-affiliated leasing companies that compete with — and partner with — captives, and [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Captive finance** とは、メーカー (OEM / ベンダー) が **自社製品の購入者に対する金融を、本体外の連結金融子会社 (captive) で提供する仕組み**。**Vendor finance** は設備・機器ベンダーが顧客の購入を分割・リース等で支える仕組みで、自社 captive のほか提携金融機関を使う形も含む。OEM は販売チャネル、残価・信用リスク、顧客関係、資金調達を一体で設計できる。ただし、ABS による証券化は自動的なオフバランス化を意味せず、金融資産の消滅認識要件を満たすかで会計処理が分かれる。

## 1. captive と vendor finance の定義

| 用語 | 主体 | 顧客 | 典型商品 |
|---|---|---|---|
| **Captive finance** | OEM 直系の金融子会社 (例: [[manufacturer-finance/toyota-financial-services|TFS]], [[manufacturer-finance/honda-finance|AHFC]]) | 主に個人 (B2C) + ディーラー | 自動車ローン、残クレ、リース、カード |
| **Vendor finance** | 機器・設備ベンダー (+ 提携リース会社) | 主に法人 (B2B) | 設備リース、分割払い、SaaS サブスク |
| **Floorplan / 在庫金融** | captive または提携金融 | ディーラー (流通段階) | 在庫車・在庫機器の短期回転与信 |
| **Bank-affiliated leasing** | 銀行系・独立系リース会社 | 法人・個人 | リース全般 (captive の競合 / 補完) |

Sources: ^[J.D. Power「OEMs and Captive Finance Solutions」: https://www.jdpowervalues.com/oems-and-captive-finance-solutions; OECD「Export credits」: https://www.oecd.org/en/topics/export-credits.html.]

「captive を持つ型」(Toyota / Honda) と「captive を持たず銀行系・提携で回す型」(Panasonic / MHI) の対比は、本ドメインの主要な分析軸。後者は [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] と [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] を参照。

## 2. なぜメーカーは captive を持つのか (4 つの動機)

1. **販売チャネルの支配と送客力**: 新車・新機器購入の現場で「製品 + ローン + リース + 保険」を一括提案でき、銀行系オートローンに対する優位性は **販売現場の即時与信**。captive は OEM のブランドロイヤルティを金融面から強化する。
2. **残価リスクのグループ内集約 (residual value)**: 後述の通り、リース・残クレは中古車/中古機器の将来価格に賭ける商品。OEM 本体は新車販売利益を先に確定し、価格変動リスクは captive の B/S に集約する設計が一般的。
3. **顧客との長期関係とデータ**: ローン・リース・カードを通じて購買・利用データを取得し、買い替えサイクルやクロスセルに活かす。
4. **資金調達とリスク移転**: 積み上がる売掛・割賦・リース債権を ABS で証券化し、資金回収と投資家へのリスク移転を図る。会計上の消滅認識は取引条件と適用基準次第で、要件を満たさない場合は債権を認識し続け、受取対価を金融負債として認識する ([[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS]] / [[structured-finance/japan-equipment-lease-abs|equipment lease ABS]] と接続)。

## 3. Residual Value (残価) リスクの仕組み

リース・残価設定型ローンの中核は **residual value (RV) = リース満了時の想定残存価値**。仕組みは次の通り。

- captive は契約時に **満了時の中古価格 (RV)** を見積もり、その分を月額から控除する。RV を高く設定するほど月額が下がり、リースが売れやすくなる。
- 満了時の実際の中古価格が **RV を下回る** と、captive に **残価損 (residual loss)** が発生する。逆に上回れば益。
- OEM captive はしばしば **RV を意図的にやや高く設定 (lease subvention)** して月額を下げ、在庫を動かしブランドロイヤルティを維持する。これは販売促進と残価リスクのトレードオフ。
- **BEV / EV のリスク**: 技術更新の速さ (バッテリー劣化・世代交代) で中古価格の予測が難しく、RV モデルの精緻化が課題。EV リース返却車の残価動向は業界の重要論点 (Deloitte 等が分析)。
- 設備・機器の vendor finance でも同型の RV リスクがある。商品上の返却・購入選択、貸手の残価負担、借手・貸手それぞれの会計処理を分けて読む必要がある。IFRS 16 では借手は原則として使用権資産とリース負債を認識するため、「operating lease = 借手の off-balance」と一般化できない。詳細は [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]] 参照。

## 4. Funding: captive はどう資金を調達するか

captive 自身は預金を持たない (銀行免許を持つ一部を除く) ため、貸出原資を市場から調達する。主な手段は次の通り。

| funding 手段 | 内容 |
|---|---|
| **ABS (証券化)** | 自動車ローン・リース・割賦債権を参照して ABS を発行。資金回収・資金源分散に使うが、債権の消滅認識は譲渡条件と会計基準次第。 |
| **社債 / CP** | captive 名義の社債・コマーシャルペーパー。親会社の信用補完 (Keepwell Agreement 等) で調達コストを抑える。 |
| **親会社保証 / Keepwell** | 親 OEM が captive の流動性・正味純資産維持を約束し、captive 単独より高い信用力を付与 (法的保証ではない場合が多い)。[[manufacturer-finance/honda-finance|Honda Finance]] の AHFC が典型例。 |
| **銀行団融資 / シンジケート** | メガバンク・地銀のコミットメントライン。 |
| **提携リース会社経由** | 自前 captive を軽くし、[[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] 等にリース組成を委ねる型 (Panasonic / Hitachi の一部)。 |

Sources: ^[IFRS Foundation「IFRS 9 Financial Instruments」: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/; IFRS Foundation「IFRS 16 Leases」: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/.]

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
- IFRS Foundation「IFRS 9 Financial Instruments」: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/
- IFRS Foundation「IFRS 16 Leases」: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/

---

> [!info] 校正ステータス
> confidence: **likely**。2026-07-29 時点で一般的な captive / vendor finance の説明を再確認し、ABS とリースを自動的な off-balance 手段として扱っていた表現を IFRS 9 / IFRS 16 の境界に合わせて修正した。

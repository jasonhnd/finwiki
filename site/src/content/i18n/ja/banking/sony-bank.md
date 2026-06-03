---
source: banking/sony-bank
source_hash: 15c9669a525f00c0
lang: ja
status: machine
fidelity: ok
title: "ソニー銀行 事業プロファイル(ソニー銀行)"
translated_at: 2026-06-02T11:47:37.295Z
---

# ソニー銀行 事業プロファイル(ソニー銀行)

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] の下に、[[JapanFG/sony-bank|ソニー銀行 (Sony Bank) entity anchor]] のエンティティ・アンカーに対応する事業プロファイルの伴侶として位置する。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のネット銀行セグメントマップの中で、親会社グループの文脈は [[JapanFG/sony-fg|Sony Financial Group]]、エコシステムおよび証券隣接のポジショニングについてはピアの [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[JapanFG/ssnb|住信SBIネット銀行 / NEOBANK]] · [[banking/daiwa-next-bank|Daiwa Next Bank]] と照らし合わせて読まれたい。ライセンス境界については [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] および [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] を経由されたい。

## 1. アイデンティティと所有

| 項目 | 内容 |
|---|---|
| 法人名 | ソニー銀行株式会社 |
| 英文名 | Sony Bank Incorporated |
| 設立 | 2001-04 (日本のインターネット銀行の第一波の一つ) |
| 銀行免許の区分 | 普通銀行(銀行法上の普通銀行)、FSAの「その他の銀行」に分類 |
| 親会社 | [[JapanFG/sony-fg|Sony Financial Group]](100%) |
| 最終親会社 | ソニーグループ株式会社(東証 6758) — ソニーFGは 2020 年のTOBで再取得された;ソニーFGは 2025-09-29 に日本初の部分スピンオフ(partial spin-off)を通じて東証プライムに再上場(ソニーグループは〜20%を保有、80%超を株主に現物分配) |
| 本社 | 東京 |
| 顧客向けブランド | **MoneyKit**(オンラインサービスブランド、moneykit.net) |
| 旗艦商品ブランド | **Sony Bank WALLET**(多通貨デビット / キャッシュカード) |
| 主要規制当局 | 金融庁(FSA) |

### ソニー銀行が親会社の中でどこに位置するか

```
ソニーグループ株式会社(東証 6758, 、最終親会社)
  └── ソニーフィナンシャルグループ(TOBを通じて 2020 年に再連結;部分スピンオフを通じて 2025-09-29 に東証プライムに再上場、ソニーグループは〜20%を保有)
        ├── ソニー銀行株式会社(本ページの項目)
        ├── [[JapanFG/sony-life|Sony Life Insurance]]
        ├── [[JapanFG/sony-insurance|Sony Insurance (P&C)]]
        └── その他の金融子会社
```

ソニーFGは以前は上場していたが、2020 年にソニーグループがTOBを開始しソニーFGを非公開化した。2025-09-29 に、ソニーグループはソニーFGを、日本初の「部分スピンオフ」を通じて東証プライム市場に再上場させた — 保有するソニーFG株式の80%超を現物でソニーグループの株主に分配しつつ、おおむね20%を保有し続けるものであり、これによりソニー銀行の保有持分の経済性についての公開市場の参照が再導入された(ソニーFGの初値は205円)。ソニー銀行自体は、ソニーFGの下の非上場の銀行営業会社のままである。

### 多通貨預金 + FXのコア

ソニー銀行の外貨預金商品は、より広い [[banking/japan-net-bank-competition-map|net bank universe]] と比べて最も特徴的な機能である:

| 機能 | ソニー銀行のアプローチ |
|---|---|
| 通貨メニュー | 公式のMoneyKit FXページによると、12 の外貨(USD、EUR、GBP、AUD、NZD、CAD、CHF、HKD、BRL、CNH、ZAR、SEK) |
| FXコスト | メガバンク店頭のリテールFXに対してタイトな顧客向けスプレッド |
| デビットカードのFX | **Sony Bank WALLET** は海外で外貨残高から直接支払う — スワイプ時に円 → FX のレッグがない |
| 定期預金のFX | 海外金利に連動する利回りの外貨定期預金 |
| 預金の安全性 | 円預金は預金保険機構で保護;外貨預金は預金保険の対象外 |

FXデビットの機能は、旅行頻度の高いユーザーおよび在外邦人に近いユーザーの獲得レバーである — メガバンクの店頭が、より高いスプレッドとより遅い口座フローのために、きれいに対応できないセグメントである。

### 投資商品の販売

MoneyKitプラットフォームは、投信(投資信託)を販売し、証券口座の隣接性をサポートする。[[JapanFG/ssnb|SSNB]] の [[JapanFG/sbi-securities|SBI Securities]] への深い連携、または [[banking/au-jibun-bank|au Jibun Bank]] の [[JapanFG/au-kabucom-securities|au Kabucom]] への連携と比べると、ソニー銀行の証券連携は比較的薄い — しかしFXの強みが外貨投信の販売を補完する。

### カードおよび決済の隣接性

| 商品 | 役割 |
|---|---|
| Sony Bank WALLET | 多通貨デビットカード + キャッシュカード;旗艦商品 |
| クレジットカードの提携 | ソニー銀行は、大規模な自前のクレジットカードのフランチャイズを運営するのではなく、外部のカード発行体と協働する |
| ダイレクト決済 | 全銀システムを通じたソニー銀行の口座間振込 |

### ソニー銀行が競合する領域

| 軸 | ポジション |
|---|---|
| FX / 外貨預金 | HNW向けバンキングのゲーティングなしにリテールがアクセスできる日本の銀行の中で **トップ** |
| 住宅ローンの組成 | 強い(注目すべきネット銀行の組成業者) |
| 多通貨の旅行 / 海外利用 | Sony Bank WALLET を通じて **トップ** |
| 資産形成 / 投信の販売 | 堅実だが、SBI / SSNB のエコシステムほど深くはない |
| 給与口座への転換 | [[banking/rakuten-bank|Rakuten Bank]] / [[banking/paypay-bank|PayPay Bank]] / [[banking/au-jibun-bank|au Jibun Bank]] のエコシステムのカバレッジより軽い |
| カード / 決済頻度 | 軽い — 楽天 / PayPay / au に匹敵するポイント経済のエコシステムはない |

### 顧客セグメンテーション

ソニー銀行の顧客基盤は次の層に傾いている:

- 海外旅行または海外資産のエクスポージャーを持つ都市部の専門職;
- FXの分散を伴う相当規模の投資ポートフォリオを構築する家計;
- 金利とオンライン申込の利便性で選ぶ住宅ローンの借り手。

## 4. KPIの形状とフランチャイズの規模

ソニー銀行の公開開示(「ディスクロージャー誌」シリーズおよび四半期決算)は、数兆円規模の預金基盤 — 2025-09-30 時点で総預金 4,536.9 億円(円 3,800.6億円 + 外貨 736.2億円) — を、増加する顧客数および相当規模の住宅ローンの貸出帳とともに示している。粒度の細かい時点のKPI(口座数、住宅ローン残高、ROE)は定期開示サイクルに属する;本ページはすべての数値を追うのではなく、フランチャイズの形状を追う。

### 近年の開示サイクルにわたるパターン

| 指標 | パターン |
|---|---|
| 預金残高 | 数兆円のレンジ;円および外貨の両商品を通じて成長 |
| 外貨預金比率 | メガバンクや他のネット銀行のピアより大幅に高い |
| 住宅ローン残高 | ネット銀行の中でより高い住宅ローンの貸出帳の一つ |
| 口座数 | 楽天 / PayPay / auじぶん / SSNB より小さい;富裕層セグメントへの焦点を反映 |
| 資本 | 銀行法の最低水準を十分に上回る |

## 5. 規制の境界

| レイヤー | 法令 / 規制当局 | ソニー銀行への含意 |
|---|---|---|
| 銀行監督 | 銀行法、金融庁 監督指針 | 標準的な普通銀行の監督 |
| 外貨業務 | FSA + 日銀統計の下での外国為替関連ルール | 多通貨商品にFX開示およびAMLが適用される |
| 預金保険 | 預金保険機構 | 円預金は保護;外貨預金は明示的に対象外 |
| 証券商品の販売 | 金融商品取引法 — 投信の販売向け | 標準的な適合性および開示の義務 |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 | 円のみの銀行に比べて国境を越える決済のAMLが高い |
| 住宅ローンの組成 | 銀行法 + 貸金業関連規制 + 住宅ローン関連ガイダンス | 標準的な銀行側の住宅ローン監督 |

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[banking/daiwa-next-bank]]
- [[banking/quick-deposit-four-methods]]
- [[JapanFG/sony-bank]]
- [[JapanFG/sony-fg]]
- [[JapanFG/sony-life]]
- [[JapanFG/sony-insurance]]
- [[JapanFG/ssnb]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
- [[fintech/japan-stablecoin-regulatory-landscape]]

## 出典

- MoneyKit / ソニー銀行 顧客向けサイト(https://moneykit.net/)。
- ソニー銀行 会社概要(https://moneykit.net/visitor/co/)。
- ソニー銀行 ディスクロージャー資料(https://moneykit.net/visitor/co/disc.html)。
- Sony Bank WALLET 商品ページ(https://moneykit.net/visitor/sbw/)。
- ソニーフィナンシャルグループ 企業サイト(https://www.sonyfg.co.jp/)。
- FSAの免許銀行一覧(https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx)。
- ソニー銀行 外貨預金ページ — 12通貨のメニュー(https://moneykit.net/visitor/fx/)。
- ソニー銀行 中間期ディスクロージャー誌 2025.09.30  — 総預金 4,536.9億円(https://sonybank.jp/corporate/pdf/disclosure2025h.pdf)。
- 日経 — ソニーフィナンシャルグループの東証プライムへのスピンオフ再上場 2025-09-29、初値 205 円(https://www.nikkei.com/article/DGXZQOTG282HO0Y5A920C2000000/)。

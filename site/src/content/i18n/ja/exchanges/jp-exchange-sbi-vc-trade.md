---
source: exchanges/jp-exchange-sbi-vc-trade
source_hash: 79e73834e59aedb5
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "SBI VCトレード株式会社 — 日本暗号資産交換業者概要"
translated_at: 2026-07-29T12:22:29.000Z
---

# SBI VCトレード株式会社 — 日本暗号資産交換業者概要


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。比較・対照の文脈では [[exchanges/jp-exchange-coincheck|コインチェック株式会社 — 日本暗号資産交換業者]]、より広いシステム上・規制上の境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読む。

> FSA 登録番号関東財務局第00011号 · JVCEA 会員 #1011 · 登録日 2017-12-01

## 1. 法人・株主

- **商号**：SBI VCトレード株式会社
- **英語表記**：SBI VC Trade Co., Ltd.
- **設立**：2017年5月26日
- **本店所在地**：〒106-6021 東京都港区六本木1-6-1 泉ガーデンタワー
- **資本金**：63億5,000万円
- **株主**：SBIグループ 100%（親会社：SBIホールディングス株式会社、東証プライム上場・証券コード 8473）

## 2. 牌照・登録状況

同社の公式会社情報には、暗号資産交換業・第一種金融商品取引業・電子決済手段等取引業の3登録が掲載されている。「国内唯一」とする比較主張は、他社の登録変更で変動し得るためここでは採用しない。

以下の登録番号は、同社の会社情報と金融庁の各登録一覧に基づく。 ^[Sources: https://www.sbivc.co.jp/company-profile; https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx; https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx.]

| 業種 | 登録番号 | 備考 |
|------|---------|------|
| 暗号資産交換業 | 関東財務局長第00011号 | 登録 2017-12-01 |
| 第一種金融商品取引業（暗号資産デリバティブ） | 関東財務局長（金商）第3247号 | OTC 派生対応 |
| 電子決済手段等取引業 | 関東財務局長（電代）第00001号 | USDC を取扱電子決済手段として掲載 |

- **JVCEA 会員種類**：第一種（会員番号 1011）
- **加入協会**：日本暗号資産等取引業協会（JVCEA）、日本暗号資産ビジネス協会（JCBA）、日本デジタル経済連盟、日本デジタル分散型金融協会、JPCrypto-ISAC

### 電子決済手段 / USDC 相互参照

金融庁の電子決済手段等取引業者登録一覧では、SBI VCトレードが関東財務局長第00001号の登録業者として記載され、取扱電子決済手段は USDC とされている。したがって同社は単なる暗号資産交換業者ではなく、日本の電子決済手段 / stablecoin 実装を読む際の primary route でもある。

関連するステーブルコイン経路: [[fintech/japan-ecisb-license]], [[fintech/japan-stablecoin-regulatory-landscape]], [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]], [[payment-firms/jpyc]], [[payment-firms/progmat]].

## 3. 取扱通貨

2026年5月18日に取得した公式商品ページでは BTC・ETH・XRP・SOL 等の暗号資産と、電子決済手段として **USDC** を確認した。対象は変動するため、固定的な総数や国内順位は置かない。

特色：
- **USDC**（ユーエスディーシー）を 2025年3月25日に一般向け取引開始。電子決済手段等取引業登録（第00001号）に基づく日本円⇔USDC スポット交換と、2026年3月18日開始の **USDC レンディングサービス**を提供する。
- **ステーキング対応銘柄**（ETH・SOL 等）あり。
- **NIDT**（ニッポンアイドルトークン）・**FLR**（フレア）・**XDC** など国内他社に比べやや幅広い上場ラインナップ。

## 4. 業務範囲

以下は同社の公式サービス一覧と USDC ページに基づくサービス区分である。具体的な対象銘柄、料率、税務上の取扱いは変動し得るため、利用時点の契約書面で確認する必要がある。 ^[Sources: https://www.sbivc.co.jp/; https://www.sbivc.co.jp/usdc.]

| サービス | 概要 |
|---------|------|
| 現物販売所 | 対日本円スプレッド取引 |
| 現物取引所（板取引） | Maker/Taker 手数料制、PC 向け VCTRADE Web 提供 |
| レバレッジ取引（OTC デリバティブ） | 最大 2 倍（個人）、JVCEA 定める倍率（法人） |
| 貸コイン（レンディング） | 個人・法人向け暗号資産消費貸借 |
| 積立 | 定額自動積立 |
| ステーキング | ETH 等 PoS 銘柄 |
| SBI Web3 ウォレット | セルフカストディ連携 |
| SBIVC for Prime | 大口・法人向け OTC 専用サービス |
| USDC レンディング | USDC の貸コインサービス |

**法定通貨入金チャネル**：銀行振込・クイック入金（ペイジー等）。口座管理費・年会費・円入出金手数料・暗号資産入出庫手数料は無料。

## 5. 市占・取引高

2026年3月末の自己資本規制比率は同社 IR の時点値であり、取引高・口座数の市場比較には使わない。2026年7月29日に確認した公式資料には、同一基準で比較できる会社別の口座数・月間取引高が含まれないため、本項では国内順位や移管口座規模を推定しない。

## 6. 沿革・重大事件

以下の表は、SBI グループおよび SBI VCトレードの公式発表、金融庁登録一覧で確認できる法人再編・登録・移管の節目に限定する。発表時点で予定だった事項と、後に効力が発生した事項を区別する。 ^[Sources: https://www.sbigroup.co.jp/news/2021/0901_12622.html; https://www.sbivc.co.jp/dmm_vct; https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx; https://www.sbigroup.co.jp/news/2026/0130_16072.html; https://www.sbivc.co.jp/company-profile.]

| 時期 | 事項 |
|------|------|
| 2017-12-01 | 暗号資産交換業関東財務局長第00011号登録 |
| 2021-09-01 | SBI VCトレードと TaoTao 株式会社の合併決議発表（存続会社：TaoTao、消滅会社：SBI VCトレード；その後商号変更により現在の SBI VCトレード株式会社として継続） |
| 2021-12-01 | TaoTao と旧 SBI VCトレードの合併効力発生 |
| 2024-12-02 | DMM Bitcoin との口座・預かり資産移管に向けた**基本合意**締結 |
| 2025-03 | **電子決済手段等取引業者**として関東財務局長（電代）第00001号に登録 |
| 2025-03-08 | DMM Bitcoin の口座・預かり資産を SBI VCトレードへ移管 |
| 2026-01-30 | SBI VCトレードと株式会社ビットポイントジャパンの合併決議発表（SBI VCトレードが存続会社、効力発生日 2026年4月1日予定） |
| 2026-04-01 | ビットポイントジャパンの吸収合併効力発生 |

## 7. 戦略動向

- **3 登録の業務構造**：公式会社情報には、暗号資産交換業（現物）・第一種金融商品取引業（デリバティブ）・電子決済手段等取引業（USDC）が掲載されている。他社比較による唯一性は主張しない。
- **SBI グループ内の法人関係**：SBI 証券（金商第44号、JVCEA #1041）・SBI FXトレード（金商第2635号、JVCEA #1026）は同グループ傘下の金融商品取引業者である。法人関係だけからサービス連携や統合を推定しない。SBI ホールディングスは Ripple Labs（XRP 関連）への出資・提携関係を持つ。
- **ビットポイントジャパン合併**（2026-04 効力発生）は、金融商品取引法による暗号資産規制強化を見据えたグループ内経営資源集中を目的とする（公式発表より）。合併後も VCTRADE と BITPOINT の 2 ブランドを当面維持。
- **MTGOX 債権者向け対応窓口**を設置しており、マウントゴックス清算絡みの資産返還にも関与（詳細は公開情報の範囲内）。

## 8. 関連人物

- **代表取締役会長**：尾崎文紀（2026年5月時点）
- **代表取締役社長**：近藤智彦（2026年5月時点）
- **取締役**：北尾吉孝（SBI ホールディングス代表取締役 CEO）、日下部聡恵、久場健太郎、小川裕之
- **監査役**：北原勝美

## 関連項目

- [[fintech/japan-financial-regulation]] — 日本金融規制全体
- [[fintech/japan-ecisb-license]] — 電子決済手段等取引業制度解説
- [[fintech/japan-stablecoin-regulatory-landscape]] — 関連 stablecoin 制度
- [[fintech/jp-trust-type-sc-architecture]] — 関連 SC 制度
- [[payment-firms/jpyc]] — 資金移動業者型 JPY stablecoin 発行会社
- [[payment-firms/progmat]] — trust-type stablecoin / tokenization platform company anchor
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]] — SBI × JPYC スタブコインチャネル
- [[exchanges/jp-exchange-binance-japan]] — 同業他社概要（Binance Japan）
- [[exchanges/jp-exchange-gmo-coin]] — 同業他社概要（GMO コイン）
- [[megabanks/sbi-hd]] — SBI ホールディングス親会社プロファイル
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX deposit トークン / stablecoin integration
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — グローバル stablecoin 規制 5 極比較

## 出典

- [SBI VCトレード 会社概要](https://www.sbivc.co.jp/company-profile)（取得 2026-05-18）
- [SBI VCトレード USDC 特設ページ](https://www.sbivc.co.jp/usdc)（取得 2026-05-18）
- [SBI VCトレード DMM Bitcoin 移管特設サイト](https://www.sbivc.co.jp/dmm_vct)（取得 2026-05-18）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/)（取得 2026-05-18）
- [FSA 暗号資産交換業者登録一覧](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx)（スナップショット 令和8年4月1日 = 2026-04-01 参照）
- [CoinPost: SBIHD傘下の暗号資産交換業者、SBI VCトレードとTAOTAOが合併へ](https://coinpost.jp/?p=272806)（取得 2026-05-18）
- [CoinPost: SBI VCトレードとビットポイントジャパンが合併へ、今年4月に統合予定](https://coinpost.jp/?p=685228)（取得 2026-05-18）

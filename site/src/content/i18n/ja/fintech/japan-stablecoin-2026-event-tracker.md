---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: 49ad69ff450cb0cc
lang: ja
status: machine
fidelity: ok
title: "日本 Stablecoin 2026 イベント・トラッカー · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 改正"
translated_at: 2026-06-02T13:21:55.064Z
---
# 日本 Stablecoin 2026 イベント・トラッカー · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI 改正

## 要約

2026 年は日本ステーブルコイン業界の **"PoC → メインネット"** への転換期。**JPYC** は 2025-Q4 に正式メインネット (Ethereum + Polygon + Astar) でローンチし 2026-05 流通 **約 ¥9.2B (~$60M)** に到達; **Progmat** は 2026-Q2 にメガバンク信託主導の **USD 連動 第3号 EPI** (Progmat USD) ローンチ予定; **DCJPY (DeCurret)** は 2026-Q1 に大手商社 + 電力会社 + 流通業のクローズドコンソーシアム本番運用に移行; **SBI VC Trade USDC** は流通 **約 ¥45B (~$295M)** で日本国内 USDC の唯一の正規流通チャネル (→ [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]); **KDDI au Wallet × NTT Docomo dpay × LINE Finance × PayPay** の少なくとも 2 社が 2026-Q3-Q4 に EPI サービスプロバイダー 申請を検討中。**FSA EPI 改正 (第二弾)** は 2026-Q2 にパブリックコメント開始予定で、信託型 SC の組成・分配ルール明確化 + 海外 SC の流通範囲拡大 + 機関投資家向け 利回り付き SC の取扱いが論点。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあります。規制枠組みは [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]]、分類体系は [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]、競争環境は [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] とあわせて読んでください。主要発行体・流通体は [[payment-firms/jpyc|JPYC株式会社]]、[[payment-firms/progmat|株式会社Progmat]]、[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] を参照。

## 2026 主要事件タイムライン

| 月 | 事件 | 関連エンティティ | 含意 |
|---|---|---|---|
| 2025-Q4 | JPYC 正式メインネット稼働 | JPYC株式会社 | "EPI 第1号" 始動 (改正資金決済法後) |
| 2025-12 | DCJPY コンソーシアム本番運用移行 | DeCurret + 三菱商事 + 関西電力 + イオン | 商社・電力・流通の B2B 決済本番 |
| 2026-01 | SBI VC Trade USDC 取扱拡大 (法人向けOTC追加) | SBI VC Trade + Circle | 国内 USDC 流通 ¥30B 突破 |
| 2026-Q1 | Progmat × MUTB × SMBC × Mizuho **第3号 EPI USD 連動** 設計完了 (公表) | Progmat + 三大メガバンク信託 | 信託型 USD SC 設計完成 |
| 2026-Q2 | Progmat USD ローンチ (予定) | Progmat | 日本初の信託型 USD SC メインネット |
| 2026-Q2 | FSA EPI 改正第二弾 パブコメ開始 (予定) | 金融庁 | 信託型 SC 規制明確化 + 海外 SC 流通拡大 |
| 2026-Q2 | JPYC 流通 ¥10B 突破 (予測) | JPYC株式会社 | EPI 第1号の規模ベンチマーク |
| 2026-Q3 | KDDI au Wallet が EPI サービスプロバイダー 申請検討 (報道) | KDDI + au PAY | キャリア系第1社の参入観測 |
| 2026-Q3 | NTT Docomo dpay が暗号資産対応再検討 (報道) | NTT Docomo | キャリア系第2社の動向 |
| 2026-Q4 | LINE Finance × LINE Pay の SC 戦略明示 (予測) | LINE Finance + Z Holdings | LINE Xenon JPY SC との連動可能性 |
| 2026-Q4 | PayPay × ソフトバンクの SC 関与方針発表 (予測) | PayPay | 国内最大 QR 決済による参入観測 |

## JPYC メインネット 拡張

**現状 (2026-05)**:

- 流通 ¥9.2B (~$60M) 、2025-Q4 メインネットローンチから 6 か月で 7.5x 拡大
- 展開チェーン: Ethereum (主流) + Polygon + Astar + Avalanche (順次)
- ユーザー数 (ウォレット保有) 約 12 万件
- 主要ユースケース: DeFi (Aave / Compound JPY pair) / クロスボーダー 送金 (フィリピン / ベトナム) / 加密交易所 JPY pair (Bitbank / BITPoint / 一部海外取引所) / 法人 B2B 給与・経費精算 (限定実証)
- 規制ステータス: FSA funds-transfer 第二種登録 (関東財務局長 第00099号), 2024 年改正資金決済法後の "EPI 第1号" 位置づけ (→ [[fintech/japan-epi-three-types-overview|EPI 三類型概要]])

**2026 H2 計画**:

1. **送金限度額の段階引上げ**: 現行 ¥1M/件 → ¥3M/件 (申請中)
2. **JPYC v2** 公開 (EIP-3009 / Permit + USDC-style ERC-20Permit + Multi-chain 標準ブリッジ 標準化)
3. **法人パートナー 50 社突破**: 給与・経費精算・小口決済の本番運用拡大
4. **海外取引所への正式上場**: Binance Japan (もし上場すれば EPI 範疇内) / KuCoin / Bybit など、ただし国内 EPI サービスプロバイダー を経由する必要性は不明
5. **Stripe / Square 風 API 提供**: JPYC 直接接続 SDK の整備
6. **DeFi 統合**: Aave + Compound + Curve JPY プール深化 + Uniswap v4 hook 経由のスポット流動性

JPYC は典型的な **資金移動型 EPI** (改正資金決済法第二種) のため、信託型 SC (Progmat) や 電子決済手段等取引業者経由 SC とは規制パスが異なる。詳細は [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] と [[fintech/japan-ecisb-license|日本 ECISB 牌照]]。

## Progmat USD ローンチ (信託型 USD SC)

**位置づけ**: Progmat (→ [[payment-firms/progmat|株式会社Progmat]]) はメガバンク信託銀行 (MUTB 49% + SMBC 15% + Mizuho 15%) + NTT Data + JPX 出資のデジタルアセットプラットフォーム。発行体は信託銀行、Progmat はプラットフォーム提供者。

**Progmat USD の設計コンセプト** (2026-Q1 公表ベース):

- **発行体**: 三菱UFJ信託銀行 (主幹事) + みずほ信託銀行 (共同) + 三井住友信託銀行 (共同) の信託共同スキーム
- **法的位置づけ**: 改正資金決済法上の **特定信託受益権 (第3号 EPI)** で USD 連動
- **裏付資産**: 米国短期国債 + USD 預金 (MUFG NY 支店 / 米国コルレス銀行) + USD 現金
- **第三者監査**: 月次 PwC アラタ + Deloitte トーマツ
- **チェーン**: Ethereum + Polygon + Avalanche + JPX-DLT (Hyperledger Besu, 国内機関向け プライベートネットワーク)
- **ターゲット**: 機関投資家 + 大手企業の USD 決済・FX ヘッジ・クロスボーダー B2B 決済
- **流通スキーム**: SBI VC Trade などの EPI サービスプロバイダー を介する 流通、海外取引所への直接上場は当面しない

**Project Pax との連動**: Progmat USD は SWIFT MT 103 → blockchain ベースのクロスボーダー USD 決済を可能にする "Project Pax" (MUFG + SBI 共同実証) の本番版とも位置づけられる。Progmat USD = "信託型 SC + SWIFT 互換 + 機関グレード USD 決済" の三位一体。

**意義**: これは [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]] の最初の **USD 建て** 実装。これまでの Progmat は JPY 系 ST + 不動産・社債 ST が中心だったが、USD SC により国際的な機関投資家ユースケースが解禁される。

## DCJPY (DeCurret) コンソーシアム本番

**DCJPY** は DeCurret Holdings (旧 DeCurret 株式会社) が運営する民間 SC。**特徴**: 銀行発行型 (各銀行が JPY ベースの "デジタル通貨" を発行 + DCJPY ネットワーク上で互換流通する) → [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細ページ]] を参照。

**2025-12 → 2026-Q1 本番運用移行 (公表ベース)**:

- **参加銀行 (発行体)**: 三菱UFJ銀行 / みずほ銀行 / 三井住友銀行 / りそな銀行 / その他地銀 (順次)
- **参加コンソーシアム (利用体)**: 三菱商事 + 関西電力 + イオン + JR東日本 + NTT東日本 + 大手商社・物流企業
- **ユースケース**: B2B 決済 (商社↔メーカー 部品代金) + 電力卸取引決済 + 流通サプライチェーン (イオン × 卸 業者間)
- **規模 (2026-05)**: 月次流通 ~¥150B (~$1B-equivalent)

**重要な区別**: DCJPY は技術的には JPYC や Progmat とは別系統 ("銀行発行 + コンソーシアム互換" モデル)、規制上は **第3号 EPI** 適用かどうか論点 (信託スキームではないため一部論者は別カテゴリ扱い)。FSA は現状 DCJPY を "銀行による電子決済手段の自主管理" として黙認的に許容している。FSA EPI 改正第二弾でこの曖昧さが解消される可能性。

## SBI VC Trade USDC 拡大

**SBI VC Trade** (→ [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade 詳細ページ]]) は **EPI サービスプロバイダー** (関東財務局長 第00001号) で、USDC を日本国内で取り扱う唯一の正規ライセンシー。

**2026 H1 拡大**:

- 流通残高 ¥45B (~$295M, 2026-05)、2025-12 の ¥18B から 2.5x 拡大
- 法人向け OTC サービス開始 (2026-01) → 日系企業の USDC 直接保有経路が解禁
- DeFi 連携 (限定的): 一部の合規プロトコルへの USDC 預入経路を SBI VC Trade 経由で間接的に提供
- スマートコントラクトを介した自動 KYC + Travel Rule 対応の自社開発が進行
- Circle Japan との直接コルレス関係を 2026-Q2 公表予定

**SBI x JPYC リングの含意**: SBI と JPYC は資本関係はないが、SBI VC Trade が USDC を扱い、SBI ホールディングス が JPYC を含む邦内 EPI 業界全体への投資・支援姿勢を見せている。これは [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]] で詳述。

## キャリア・QR 決済勢の参入観測

**観測対象 4 社** (2026 H2 動向):

### KDDI au Wallet / au PAY

- 報道 (2026-04 日経): "KDDI が EPI サービスプロバイダー 申請を検討、au PAY 残高の SC 化を視野"
- 戦略: au ユーザー (~4,500 万 ID) を 1 つの SC エコシステムに統合
- 課題: 既存の前払式支払手段 (au Wallet) との法的整理、KDDI 単独で SC 発行するか SBI VC Trade のような分配体になるか

### NTT Docomo dpay / d 払い

- 報道 (2026-03): "Docomo は 2024 年に暗号資産部門を縮小したが、2026 で再検討"
- 戦略: d 払い (~5,000 万 ID) + Docomo 銀行 (新生銀行統合後) の SC 化
- 課題: 過去の Coincheck 系 (Monex Group 系列) との関係整理

### LINE Finance / LINE Pay / LINE Xenon

- LINE Xenon JPY SC は過去 (2020-2022) の PoC 段階で停止状態
- Z Holdings (LINE + Yahoo Japan + PayPay 親会社) 再編後の SC 戦略は未定
- 報道 (2026-05): "Z Holdings 内で SC 統合戦略を再検討中"
- 戦略: LINE Pay (~9,000 万 ID, 主にアジア圏) を SC 経由でクロスボーダー化

### PayPay

- 国内最大 QR 決済 (~6,000 万 ID, 月次決済 ¥3T+)
- ソフトバンクの資本関係から SC 戦略の方向性が複雑
- 公表ベースでは SC 関与は未表明、ただし業界観測では "PayPay → SC 連携 OR 自社 SC 発行" が 2027 までに具現化する可能性

**含意**: 4 社のいずれか 1 社が EPI サービスプロバイダー または信託型 SC 発行体として参入すると、日本の SC 市場は一気に "数千万ユーザー規模" に拡大する。これは [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] における "キャリア・QR 決済 第4陣営" の確立を意味する。

## FSA EPI 改正第二弾 (2026-Q2 パブコメ予定)

**論点 1: 信託型 SC の組成・分配ルール明確化**

- Progmat USD のような信託型 USD SC の発行・流通に関する詳細ルール
- 信託受託銀行と分配体 (EPI サービスプロバイダー) の責任分担
- 海外信託 (例: BNY Mellon の USD 信託) の利用可否

**論点 2: 海外 SC の流通範囲拡大**

- 現在 SBI VC Trade が USDC のみ取扱い → USDT / EURC / PYUSD など他の海外 SC の流通可否
- ホワイトリスト方式 (FSA 認定 SC のみ可) vs ブラックリスト方式 (禁止 SC を明示)
- 取扱基準 (発行体の規制ステータス + 透明性 + 監査) の明文化

**論点 3: 機関投資家向け 利回り付き SC**

- USDM (M0) / sUSDe (Ethena) / USDY (Ondo) などの 利回り付き SC の取扱
- 現状は 資金移動型 EPI 枠組みでは利息付与は不可、信託型 EPI 枠組みでは部分許容
- 機関投資家向け Reg-D 506(c) 類似制度の検討

**論点 4: DeFi 連携の規制**

- JPYC / SBI VC Trade USDC を介した DeFi 連携 (Aave / Compound) の合規性
- スマートコントラクト経由の Travel Rule 対応 (FATF Recommendation 16 への日本固有解釈)
- "DeFi の DEX 取引" を EPI サービスプロバイダー 業務と見なすかどうか

**含意**: FSA EPI 改正第二弾は、JPYC 中心の現状を破って Progmat (信託型) + SBI VC Trade (海外 SC) + キャリア系 (新規参入) の **4 陣営並立構造** を制度的に明文化する。

## 関連項目

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]
- [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]]
- [[fintech/jp-stablecoin-progmat|Progmat 詳細]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細]]
- [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]
- [[payment-firms/jpyc|JPYC株式会社]]
- [[payment-firms/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済の法体系]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026]]

## 出典

- 金融庁 — 暗号資産・電子決済手段関連政策 https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- 金融庁 — 電子決済手段等取引業者登録一覧 https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC株式会社 — ニュースリリース https://jpyc.co.jp/news
- 株式会社Progmat — News https://progmat.co.jp/news
- DeCurret DCJPY — official site https://www.dcjpy.jp/
- SBI VC Trade — USDC https://www.sbivc.co.jp/usdc
- KDDI — Corporate news release https://www.kddi.com/corporate/newsrelease/
- NTT Docomo — News release https://www.docomo.ne.jp/info/news_release/
- LINE Corporation — Press Release https://linecorp.com/en/pr/
- PayPay — News release https://about.paypay.ne.jp/press/
- 日経新聞 2026-04 報道 (KDDI EPI 申請検討、公開記事)
- 日経新聞 2026-03 報道 (Docomo 暗号資産再検討、公開記事)

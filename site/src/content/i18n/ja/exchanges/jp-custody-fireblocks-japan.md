---
source: exchanges/jp-custody-fireblocks-japan
source_hash: 01cf73e2747511b3
lang: ja
status: machine
fidelity: ok
title: "Fireblocks — グローバル MPC カストディ・インフラプロバイダー（日本展開）"
translated_at: 2026-06-02T12:19:04.241Z
---
﻿
# Fireblocks — グローバル MPC カストディ・インフラプロバイダー（日本展開）


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。隣接文脈は [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]]、より広いシステム境界は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] とあわせて読む。

> FSA 暗号資産交換業登録なし · JVCEA 非加盟 · B2B インフラベンダー · 米国本社（ニューヨーク）· 東京拠点あり（社員 5 名前後 · LinkedIn 確認）

## 1. 法人・株主

- **商号（グローバル）**: Fireblocks Inc.
- **英文名**: Fireblocks
- **日本拠点**: 正式法人設立は未確認（2026-05 時点）。LinkedIn では Tokyo ベースの社員が 5 名前後在籍確認
- **グローバル本社**: New York City, USA（登記上）。R&D・創業は イスラエル Tel Aviv
- **設立**: 2018 年（イスラエル発、その後米国 HQ に移行）
- **形態**: 非上場プライベートカンパニー
- **主要株主**: Sequoia Capital（Series D 共同リード）、Paradigm（Series B リード）、BNY Mellon（出資参加 2021-03）、Google Ventures ほか複数 VC
- **直近バリュエーション**: $8 billion（2022-01 Series E 時点）

## 2. 牌照・登録状況

- **日本 FSA 暗号資産交換業**: 登録なし（インフラ SaaS ベンダーとして日本 VASP に B2B 提供）
- **JVCEA 会員**: 非加盟
- **米国内ライセンス**: Fireblocks Trust Company（米国信託会社）を保有（2024 年以降）
- **EU**: MiCA 対応インフラとして欧州銀行・機関への提供を拡大中
- **日本規制上の位置づけ**: 日本国内の VASP・銀行・信託銀行向けにシステム・インフラを提供する外資系ソフトウェアベンダー。暗号資産を自ら保管・取り扱う事業者ではないため、日本暗号資産交換業登録は不要の構造

## 3. 対応アセット

- BTC・ETH・EVM 系 altcoin 全般、Solana、Sui ほか主要 L1/L2
- ステーブルコイン（USDC・USDT・各行発行の電子決済手段）
- トークン化 RWA（不動産・コモディティ・有価証券）
- NFT 管理（B2B インフラレベル）
- 公表対応チェーン数：50+ ブロックチェーン（定期拡張中）

## 4. 業務範囲・主要プロダクト

- **MPC カストディ（Multi-Party Computation）**: 秘密鍵を分散保管。ハードウェアアイソレーション + MPC の組み合わせ。グローバル金融機関向けに産業標準レベルのセキュリティを提供
- **Policy Engine**: 送金ルール・承認フロー・コンプライアンスゲートを設定可能なガバナンスレイヤー
- **Treasury Management**: 取引所・カウンターパーティとのデジタル資産送受信を秘密鍵露出なしで実行する Fireblocks Network
- **ウォレット-as-a-Service (WaaS)**: 企業向け非カストディアル・カストディアル MPC ウォレットの API 提供
- **Embedded ウォレット**: コンシューマー向け白ラベルウォレット（Dynamic 社買収で強化）
- **Tokenization Engine**: RWA のミント・移転・スマートコントラクト管理
- **Fireblocks Network for Payments**: ステーブルコイン決済特化ネットワーク（2025-09 提供開始）
- **DeFi Access**: policy engine と連動した DeFi プロトコル接続
- **COR Compliance**: MiCA・AML/CFT 対応コンプライアンスパッケージ

## 5. 市場ポジション・競合比較

### グローバル institutional カストディ市場

| ベンダー | 特徴 | ポジション |
|---|---|---|
| **Fireblocks** | MPC + policy engine、SaaS、2,400+ 機関 | グローバルシェア最大級の機関向け MPC インフラ |
| BitGo | 信託 + MPC 併用、米国規制対応 | 機関向け老舗。直接カストディ も |
| Anchorage Digital | 連邦銀行 charter 保有（米国唯一） | 規制準拠型、米国中心 |
| Ledger Enterprise | HSM + Vault、フランス発 | 大型銀行向け HW 重視 |
| Komainu | 野村 + Ledger + CoinShares 系 | 機関向け、アジア展開（詳細は [[exchanges/jp-custody-komainu]] 参照） |

### 日本国内競合・住み分け

**vs. [[exchanges/jp-custody-ginco|Ginco]]（国内独立系）**:
- Ginco は「日本国内シェア No.1 暗号資産ビジネス向けウォレット」を掲げ、国内 VASP・金融機関の MPC ウォレット需要を獲得。日本語サポート・FSA 規制対応ノウハウ・国産 HSM 連携が強み（業界配置は [[exchanges/jp-institutional-custody-three-pillars|JP institutional カストディ三本柱]] 参照）
- Fireblocks は同一領域で競合するが、グローバルネットワーク（Fireblocks Network）・豊富な DeFi 統合・policy engine の完成度で差別化。大手メガバンク・外資系機関の選定実績を積む
- 実際に STIR（国内 Web3 コンサル）が Fireblocks を用いた CoinTrade 向けステーキングシステム構築支援を担い（2024-02）、国内ベンダー経由での採用も進む

**vs. Komainu（Nomura 系）**:
- Komainu は機関向け規制準拠型カストディアンとして直接カストディ（ Jersey TCSP ライセンス・Dubai VARA ライセンス）を提供。自社がカストディアンになる
- Fireblocks は「インフラ SaaS」として金融機関が自ら カストディ業務を担うための道具を提供。ビジネスモデルが異なり、競合というより住み分け
- ただし信託銀行・VASP の自社カストディ強化案件では、Fireblocks vs Komainu の検討が並立することがある

## 6. 沿革・日本展開

| 年月 | 出来事 |
|---|---|
| 2017 | Lazarus Group による韓国取引所 $200M 窃取事件を調査中、Michael Shaulov ら Check Point 出身者が危機感 |
| 2018 | Fireblocks Inc. 設立（イスラエル）|
| 2019-06 | ステルスから $16M 調達で正式発表 |
| 2020-11 | Series B $30M（Paradigm リード） |
| 2021-03 | Series C $133M・BNY Mellon 出資参加 |
| 2021-07 | Series D $310M（Sequoia 共同リード）、バリュエーション $2.2B |
| 2022-01 | Series E $550M、バリュエーション $8B |
| 2022 | First Digital（イスラエル stablecoin 決済）を $100M で買収。FIS との機関向け共同展開 |
| 2023 | BlockFold（オーストラリア、スマートコントラクト）買収 |
| 2024-02 | 日本：STIR が Fireblocks MPC を活用した CoinTrade ステーキングシステム構築支援 |
| 2025-04 | 日本：三井住友フィナンシャルグループ・三井住友銀行・TIS・Ava Labs・Fireblocks の 5 社がステーブルコイン商用化を共同検討（発表 2025-04-07） |
| 2025-09 | Fireblocks Network for Payments ローンチ（ステーブルコイン決済専用ネットワーク） |
| 2025-10 | Dynamic（米国、ウォレット技術）を $90M で買収 |
| 2026-01 | TRES Finance（暗号資産会計）を $130M で買収 |
| 2026-05 | 日本：AndGo ウォレット（国産 HW ウォレット）との統合実証完了（インタートレードらと共同） |

**日本早期関与**:
- みんなの銀行・TIS・Solana Japan との stablecoin + Web3 ウォレット事業化共同検討（時期未確定、2024-2025 頃）
- Mitsui & Co. Digital Commodities（MDC）：三井物産が設立した RWA トークン会社。Fireblocks を multi-chain 展開基盤として採用。Zipangcoin（金担保）・プラチナ・銀担保トークンを発行。MDC は JPY 39 億円の発行上限を開示（2022-02 以降稼働）

## 7. 直近動向（2025-2026）

- **2026-05 時点でグローバル 2,400 機関**が Fireblocks を利用（$10T+ 取引、550M+ ウォレット）
- **Asian Banker Business Achievement Awards 2026** で "Best Blockchain Technology Platform (Digital Assets)" 受賞（Kuala Lumpur、2026）
- 欧州銀行 12 行コンソーシアム「Qivalis」が EUR ステーブルコイン発行基盤として採用（2026）
- Western Union が $USDPT ステーブルコインの 決済インフラとして採用（フィリピン・ボリビア先行展開）
- **日本**: 2026-05 に CoinPost CEO インタビュー「Fireblocks CEOが語る日本市場戦略」報道あり（詳細内容は公開記事要確認）
- IPO 観測あり：Bloomberg 2025-11「Fireblocks が社員持分買い戻し向けの資金調達を検討中」と報道

## 8. 経営陣・日本拠点

**グローバル創業者 3 名**:
- **Michael Shaulov** — CEO・共同創業者（イスラエル出身、Check Point 元社員）
- **Pavel Berengoltz** — CTO・共同創業者
- **Idan Ofrat** — CPO・共同創業者

**日本拠点**:
- LinkedIn で Tokyo ベースの社員 5 名前後を確認（2026-05 時点）
- 日本拠点代表・Country Manager の氏名は公表確認できず（公表なし）
- 拠点の法人登記形態（支店 / 合同会社 / 連絡事務所など）は未確認

## 関連項目

- [[exchanges/jp-custody-komainu]] — Nomura 系機関向け カストディ競合
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade（Fireblocks 顧客候補）
- [[agent-economy/embedded-wallet-network-effects-moat]] — embedded ウォレット競争論
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge]] — ウォレット × KYC 設計
- [[fintech/japan-stablecoin-regulatory-landscape]] — 日本 stablecoin 規制
- [[fintech/jp-trust-type-sc-architecture]] — 信託型 SC アーキテクチャ
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional カストディ三本柱
- [[exchanges/global-institutional-custody-five-pillars]] — グローバル institutional カストディ 5 本柱
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — JP VASP cold storage 分別管理ルール

## 出典

- [Fireblocks About](https://www.fireblocks.com/about/)（取得 2026-05-19）
- [Fireblocks Mitsui Customer Story](https://www.fireblocks.com/customers/mitsui/)（取得 2026-05-19）
- [Fireblocks — Wikipedia](https://en.wikipedia.org/wiki/Fireblocks)（取得 2026-05-19）
- [Fireblocks LinkedIn](https://www.linkedin.com/company/fireblocks/)（取得 2026-05-19）
- [CoinPost Fireblocks 検索結果](https://coinpost.jp/?s=Fireblocks)（取得 2026-05-19）
- [あたらしい経済 Fireblocks 三井住友](https://www.neweconomy.jp/?s=Fireblocks+%E4%B8%89%E4%BA%95%E4%BD%8F%E5%8F%8B)（取得 2026-05-19）
- [CoinPost: 三井住友銀行・Fireblocks・Ava Labs・TIS ステーブルコイン検討](https://coinpost.jp/?s=Fireblocks+SMBC)（取得 2026-05-19）
- [Ginco Inc. 公式](https://www.ginco.co.jp/en)（取得 2026-05-19、競合比較用）

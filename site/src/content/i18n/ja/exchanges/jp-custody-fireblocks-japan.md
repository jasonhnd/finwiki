---
source: exchanges/jp-custody-fireblocks-japan
source_hash: ac7e1edb62622928
lang: ja
status: machine
fidelity: ok
title: "Fireblocks — グローバル MPC カストディ・インフラプロバイダー（日本展開）"
translated_at: 2026-07-29T11:02:23.000Z
---
﻿
# Fireblocks — グローバル MPC カストディ・インフラプロバイダー（日本展開）


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。隣接文脈は [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]]、より広いシステム境界は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] とあわせて読む。

> Fireblocks 公式が示す digital asset infrastructure platform · 日本関連の公開事例は Mitsui & Co. Digital Commodities customer story を参照

## 1. 法人・株主

- **商号（グローバル）**: Fireblocks Inc.
- **英文名**: Fireblocks
- **日本関連の公開範囲**: 公式 customer story で Mitsui & Co. Digital Commodities の事例を確認できる。国内拠点の法人形態や人数は、この項目では推定しない
- **グローバル本社**: New York City, USA（登記上）。R&D・創業は イスラエル Tel Aviv
- **設立**: 2018 年（イスラエル発、その後米国 HQ に移行）
- **形態**: 非上場プライベートカンパニー
- **主要株主**: Sequoia Capital（Series D 共同リード）、Paradigm（Series B リード）、BNY Mellon（出資参加 2021-03）、Google Ventures ほか複数 VC
- **直近バリュエーション**: $8 billion（2022-01 Series E 時点）

## 2. 牌照・登録状況

- **日本での規制上の位置づけ**: Fireblocks は公式資料で digital asset infrastructure platform と説明される。特定 service に登録が必要かは提供主体と業務実態に依存するため、FSA の現行一覧と専門家確認を要する
- **業界団体**: JVCEA などの現行 membership は各団体の公式会員一覧で確認し、この項目では未掲載を根拠に否定しない
- **米国内ライセンス**: Fireblocks Trust Company（米国信託会社）を保有（2024 年以降）
- **EU**: MiCA 対応インフラとして欧州銀行・機関への提供を拡大中

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

## 5. 公式サイトで確認できる製品領域

出典: 表全体は [Fireblocks About](https://www.fireblocks.com/about/) の製品ナビゲーションと説明（2026-07-29 確認）に基づく。

| 製品領域 | 公式サイト上の位置づけ |
|---|---|
| Wallets | Treasury management、Wallet-as-a-Service、embedded wallets、wallet connectors |
| Security & governance | Security、Policy Engine、DeFi security suite |
| Financial applications | Tokenization、Earn、Staking、Off Exchange |
| Reconciliation & compliance | Compliance integrations、COR Compliance、Financial Data |
| Network | デジタル資産エコシステム向け connectivity layer |

競合順位、シェア、個社採用、国内拠点人数はライブな個別調査事項であり、この製品表から推定しない。

## 6. 公式資料で確認できる沿革・日本事例

出典: 表全体は [Fireblocks About](https://www.fireblocks.com/about/) と [Mitsui customer story](https://www.fireblocks.com/customers/mitsui/)（2026-07-29 確認）に基づく。

| 年月 | 出来事 |
|---|---|
| 2017 | 後の共同創業者が Check Point 在籍中に韓国取引所への Lazarus Group 攻撃を調査 |
| 2018 | Fireblocks を設立 |
| 2022-02-17 | Mitsui & Co. Digital Commodities が事業を開始し、Zipangcoin を発行 |
| 2023 | MDC が platinum / silver-backed token を追加 |
| 公表時点 | MDC は multi-chain 展開の infrastructure provider として Fireblocks を選定 |

**日本関連の直接確認例**: Fireblocks の [Mitsui customer story](https://www.fireblocks.com/customers/mitsui/) は、Mitsui & Co. Digital Commodities が multi-chain 展開の infrastructure provider として Fireblocks を選定したと説明している。

## 7. 更新境界

顧客数、処理額、対応 chain 数、資金調達、買収、IPO 観測は時点依存であるため、本ページの比較表では固定しない。更新時は Fireblocks の現行 About、product page、customer story、当事者 release を直接確認する。

## 8. 経営陣・日本拠点

**グローバル創業者 3 名**:
- **Michael Shaulov** — CEO・共同創業者（イスラエル出身、Check Point 元社員）
- **Pavel Berengoltz** — CTO・共同創業者
- **Idan Ofrat** — CPO・共同創業者

**日本関連情報**:
- 日本の法人形態、代表者、headcount は、公式な会社開示または登記資料を取得した時点で更新する。SNS だけから固定値や不存在を推定しない

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
- [CoinPost Fireblocks 検索結果](https://coinpost.jp/?s=Fireblocks)（取得 2026-05-19）
- [あたらしい経済 Fireblocks 三井住友](https://www.neweconomy.jp/?s=Fireblocks+%E4%B8%89%E4%BA%95%E4%BD%8F%E5%8F%8B)（取得 2026-05-19）
- [CoinPost: 三井住友銀行・Fireblocks・Ava Labs・TIS ステーブルコイン検討](https://coinpost.jp/?s=Fireblocks+SMBC)（取得 2026-05-19）
- [Ginco Inc. 公式](https://www.ginco.co.jp/en)（取得 2026-05-19、競合比較用）

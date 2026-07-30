---
source: fintech/onchain-finance-vs-crypto-bifurcation
source_hash: 4345096a47b28357
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "オンチェーンファイナンスとクリプト · 連続体としての比較フレーム"
translated_at: 2026-07-29T16:47:45.885Z
---
# オンチェーンファイナンスとクリプト · 連続体としての比較フレーム


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本のステーブルコイン法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> ブロックチェーン案件は、公開参加型ネットワークから許可型の機関金融基盤まで連続的に分布する。「クリプト」と「オンチェーンファイナンス」の二分類は議論を整理する分析フレームとして有用だが、Circle のように複数領域で活動する企業やハイブリッド設計もあり、完全分離を示す事実分類ではない。

## 結論

公開参加性、本人確認、法的決済資産、運営主体を分解して比較する。二つの列は理想型であり、個別ネットワークを自動的にどちらかへ分類しない。

下表は [Canton Network の公開資料](https://docs.digitalasset.com/integrate/devnet/canton-network-overview/index.html)、[Progmat の概要](https://progmat.co.jp/about/)、[DTCC Digital Assets](https://www.dtcc.com/digital-assets) を参照した分析用の両極モデルである。

| 観点 | 公開参加型の一例 | 許可型・機関金融型の一例 |
|---|---|---|
| 参加 | プロトコル上は公開。アプリ、発行体、取引所で制限される場合がある | 参加者・ノード・取引可視性を契約と権限で管理 |
| 主な目的 | オープンな資産移転、取引、担保利用 | 規制対象資産の発行、決済、照合、プライバシー管理 |
| 代表的な運営形態 | 財団、DAO、民間発行体、分散した検証者 | 金融機関コンソーシアム、技術事業者、規制対象事業者 |
| KYC | 基盤層にない場合でも、法定通貨接続・発行・取引所で実施され得る | 参加・口座・資産移転の各層で組み込まれることが多い |
| 相互運用 | 公開チェーン、ブリッジ、取引所 | 許可型ネットワーク、既存市場基盤、限定的な外部接続 |

## 根拠

- 「ブロックチェーン」という語だけでは、参加権、法的請求権、決済資産、データ可視性を特定できない。
- 公開チェーンでも発行体・取引所レベルの KYC は可能であり、許可型基盤でも外部ネットワークとの接続を設計できる。
- [[systems/canton-overview|Canton Network]] などの資料は機関向けプライバシーと相互運用を説明するが、「反クリプト」という価値判断までは根拠付けない。

## 利用場面

- ブロックチェーン関連の戦略議論を始める前、相手がどちらの軌道で話しているか確認する必要があるとき
- USDT/USDC を機関投資家 use case に持ち込む議論が出たとき（参照: [[fintech/wall-street-crypto-network-neutrality|Wall Street × Crypto 中立軍火商]]）
- 新規 SC プロジェクトのターゲット市場を decompose するとき
- ステークホルダーへのプレゼンで「ブロックチェーン」という単語を使う前

## 関連する内部項目

- 整合: [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]] (Project Pax = institutional vs JPYC/USDC retail = 同じ分離軸)
- 整合: [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]] (B2B 軌道の独立性)

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|ウィキ索引]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場のステーブルコイン = 預金トークン]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール用ステーブルコインの構造的二律背反]]
- [[fintech/fx-onchain-as-stablecoin-final-boss|為替 onchain 化 = ステーブルコイン領域のラスボス]]
<!-- /wiki-links:managed -->

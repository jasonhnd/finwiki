---
source: fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage
source_hash: 740cc46b4eec7aad
lang: ja
status: machine
fidelity: ok
title: "OCC 信託銀行チャーターを活用した連邦ステーブルコイン銀行アービトラージ・ルート"
translated_at: 2026-06-02T13:21:55.095Z
---

# OCC 信託銀行チャーターを活用した連邦ステーブルコイン銀行アービトラージ・ルート


## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]配下に位置づけられる。隣接する文脈は[[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は[[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]とあわせて読む。

> [!info] 要約
> OCC(Office of the Comptroller of the Currency)が発行する **信託銀行チャーターの条件付き承認** = 連邦レベルの「ステーブルコイン銀行」であり、**50 州の 送金業ライセンス（MTL） を免除**しつつ **FedWire 直接接続**を備える。Bridge は 2026-02 に取得、フィンテック 史上初めてこのルートに到達したステーブルコイン発行者で、競合が短期に複製できないコンプラ堀を構成する。

**コアメカニズム**:

1. OCC 信託銀行チャーターは連邦レベル、**優越条項により各州 MTL 制度に優先**
2. 条件付き承認段階では即座の預金受入 / 貸付提供は不要(銀行持株会社法のトリガー回避)
3. **FedWire / Fedwire Securities / FedNow** に直接接続、JPMorgan / BofA と同等の決済階層
4. 準備金は Fed マスターアカウントにカストディ可能、**仲介保管行のカウンターパーティ・リスクを排除**
5. 州際業務に州別申告不要、**≥50 州 × 2-5 年のコンプラ・コストを節約(推定 $30-100M)**

**Bridge ケース・タイムライン**:

| 時点 | イベント |
|---|---|
| 2023-2024 | Bridge がステーブルコイン・インフラ企業として始動 |
| 2025-Q1 | Sequoia 等がリード、バリュエーション $2.2B |
| 2025-Q3 | Stripe が $1.1B で Bridge を買収(Sequoia は 2 か月で 5 倍 exit) |
| 2026-02 | OCC 信託銀行チャーターの条件付き承認 取得 |
| 2026-Q3 予定 | GENIUS Act 実施細則発表、Bridge ルートが参照事例に |

**他ルートとの比較**:

| ルート | 連邦裏付け | MTL 免除 | FedWire | 時間コスト | 資本要件 |
|---|---|---|---|---|---|
| OCC 信託銀行チャーター | あり | あり | あり | 12–24 か月 | $5–20M tier 1 |
| 各州 MTL を州別申請 | なし | なし | なし | 3–5 年(48–50 州) | $100k–500k/州 保証債券 |
| NYDFS BitLicense | NY 州のみ | なし | なし | 18–36 か月 | $5M |
| 信用組合 / 工業銀行 charter | 部分 | 部分 | 部分 | 24–48 か月 | $10–50M |
| オフショア 電子マネーライセンス | なし | なし | なし | 6–12 か月 | $2–5M |

**トリガー条件**:

- 業務に USD オンチェーン・トークン化 + 米国内決済が必要
- 準備金規模 / 顧客基盤が OCC 審査を引きつける(通常 >$500M AUM または大型戦略株主の裏付け)
- 戦略株主 / 親会社が銀行持株会社法コンプラ能力を備える(Stripe = 重要)

**汎用性 / 適用可能**:

- USDC(Circle)は類似ルートを既に申請(First Citizens 関係)
- PYUSD(PayPal)は Paxos 経由で間接接続可能
- USD ペッグ・ステーブルコイン発行者全般
- 将来の RWA トークン化 プラットフォーム(BlackRock BUIDL、Apollo ACRED)

SEC / CFTC 管轄背景は [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC 暗号管轄争い]] を、各国ステーブルコイン・ライセンスの横断比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。

**反例 / 境界**:

- 非 USD ステーブルコインには適用不可(EUR、JPY、SGD は各々の連邦規制ルート要)
- 政治サイクル変化時に OCC が 条件付き承認 を撤回する可能性(2024-2025 に複数の先例)
- 信託銀行 ≠ フルバンク:要求払預金受入不可、貸付提供不可
- 銀行持株会社法トリガー後、Stripe グループ全体が Fed 規制下に入り、**エコシステム・コストがコンプラ便益を上回る可能性**

**バリュエーション / 意思決定含意**:

- Bridge バリュエーションの 25–35% は OCC charter 独占性に由来(Stripe 買収プレミアムのコア説明)
- 競合(USDC、PYUSD、USD1)バリュエーションは「ルート遅延」割引が必要
- 投資判断:今後 18 か月で OCC charter 数上限(OCC 実績 5–10 件 / 年)= 希少性プレミアム
- M&A シグナル:非上場ステーブルコイン企業が OCC conditional ステージに到達した場合、**買収プレミアム 3–5×**(規制ウィンドウ論理は [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前戦略買収]] を参照)


## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前戦略買収]]
<!-- /wiki-links:managed -->

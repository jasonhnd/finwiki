---
source: fintech/stablecoin-chain-token-strategy-trilemma
source_hash: 8288a84e91d68e6d
lang: ja
status: machine
fidelity: ok
title: "ステーブルコイン公開チェーン・トークン戦略 3 状態ゲーム"
translated_at: 2026-06-02T13:21:55.096Z
---

# ステーブルコイン公開チェーン・トークン戦略 3 状態ゲーム


## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]配下に位置づけられる。隣接する文脈は[[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は[[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]とあわせて読む。

> [!info] 要約
> ステーブルコインおよび決済公開チェーンの「ネイティブトークン を発行するか」の意思決定は、3 つの戦略均衡として現れる：**揺らぎ中（Base モデル）** / **明確な不発行（Tempo モデル）** / **発行済み（Arc モデル）**。それぞれの状態は異なる資本クラスター、規制 トレードオフ、時間ウィンドウ制約と紐づき、**一度選択すると 3-5 年は反転困難**である。

**3 状態意思決定マトリックス**：

| 次元 | 揺らぎ中 | 明確な不発行 | 発行済み |
|---|---|---|---|
| 典型事例 | Base | [[fintech/protocol-hedge-strategy-stripe-pattern|Tempo]] | [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc]] |
| 結びつく資本 | リテール（エアドロップ 期待）+ 投資家（発行動作次第）| マーチャント + 伝統機関 | ウォール街 機関 |
| 規制抵抗 | 中程度（親会社のステータス次第）| 最低 | 最高（トークン の定性次第）|
| 短期キャッシュアウトウィンドウ | 中（将来の発行への賭け）| 0（10 年市場捕捉への賭け）| 高（プライベートラウンド + listing レバレッジ）|
| 不可逆性 | 一度発行すれば撤回不可 | 一度不発行を約束すれば再発行困難 | 一度発行すれば回収不可 |

**主要な洞察**：

1. **3 状態すべてが安定均衡**であり、「明らかに優れた」戦略は存在しない —— 選択は親会社のステータス（上場企業 vs 私有 vs 規制ネイティブ）、資本市場のナラティブニーズ、規制ウィンドウの開閉に依存する。
2. **時間的不可逆性**：Coinbase の上場企業ステータスは Base の初期段階で発行能力を制約したが、2025-09 SEC 訴訟取り下げ、Hester Peirce 就任後、当該ウィンドウは開いた。
3. **ゲーム理論的含意**：N 社の競合のうち 1 社が突如戦略を変更した場合（例：Base が揺らぎから発行へ転換）、残りの状態は再計算を強いられる（Tempo は不発行を維持できるか？Arc は vesting を加速すべきか？）。

**トリガー条件**：

- 親会社の財務圧力（純損失が トークン・ナラティブによる評価額支持を必要とする）→ 揺らぎ → 発行
- 規制ウィンドウが開く（SEC 訴訟取り下げ / 政権交代）→ 揺らぎ → 発行
- キーパーソンの多重ステータスの切り分け → 不発行 → 揺らぎ（例：Matt Huang の 3 重ステータスが将来切り分けられれば、Tempo はその立場を再評価する可能性がある）

**反例 / 例外**：Ethereum L2（Arbitrum / Optimism / zkSync 等）の多くは既に発行済みだが、ステーブルコイン・決済公開チェーンとの「内部化収入」動機は異なる。本フレームワークは**ステーブルコインネイティブ / 決済位置付け**の公開チェーンにのみ適用される。より広範なクロスチェーン比較は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極比較マトリックス]] 参照。


## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

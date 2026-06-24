---
title: ステーブルコイン公開チェーン token 戦略 3 状態ゲーム（発行 / 不発行 / 発行済み）
aliases: [token trilemma, stablecoin chain token strategy, L1 token game theory]
domain: fintech
kind: framework
topic: stablecoin-chain-token-strategy-trilemma
created: 2026-05-13
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-08-08
confidence: likely
tags: [fintech, blockchain, token, game-theory, framework]
status: active
sources:
  - https://www.circle.com/en/arc
  - https://www.base.org/
  - https://tether.to/en/news/
  - https://ethereum.org/en/
  - https://solana.com/news
---

# ステーブルコイン公開チェーン token 戦略 3 状態ゲーム


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> ステーブルコインおよび決済公開チェーンの「native token を発行するか」の意思決定は、3 つの戦略均衡として現れる：**揺らぎ中（Base モデル）** / **明確な不発行（Tempo モデル）** / **発行済み（Arc モデル）**。それぞれの状態は異なる資本クラスター、規制 trade-off、時間ウィンドウ制約と紐づき、**一度選択すると 3-5 年は反転困難**である。

**3 状態意思決定マトリックス**：

| 次元 | 揺らぎ中 | 明確な不発行 | 発行済み |
|---|---|---|---|
| 典型事例 | Base | [[fintech/protocol-hedge-strategy-stripe-pattern|Tempo]] | [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc]] |
| 結びつく資本 | リテール（airdrop 期待）+ 投資家（発行動作次第）| マーチャント + 伝統機関 | Wall Street 機関 |
| 規制抵抗 | 中程度（親会社のステータス次第）| 最低 | 最高（token の定性次第）|
| 短期キャッシュアウトウィンドウ | 中（将来の発行への賭け）| 0（10 年市場捕捉への賭け）| 高（プライベートラウンド + listing レバレッジ）|
| 不可逆性 | 一度発行すれば撤回不可 | 一度不発行を約束すれば再発行困難 | 一度発行すれば回収不可 |

**主要な洞察**：

1. **3 状態すべてが安定均衡**であり、「明らかに優れた」戦略は存在しない —— 選択は親会社のステータス（上場企業 vs 私有 vs 規制ネイティブ）、資本市場のナラティブニーズ、規制ウィンドウの開閉に依存する。
2. **時間的不可逆性**：Coinbase の上場企業ステータスは Base の初期段階で発行能力を制約したが、2025-09 SEC 訴訟取り下げ、Hester Peirce 就任後、当該ウィンドウは開いた。
3. **ゲーム理論的含意**：N 社の競合のうち 1 社が突如戦略を変更した場合（例：Base が揺らぎから発行へ転換）、残りの状態は再計算を強いられる（Tempo は不発行を維持できるか？Arc は vesting を加速すべきか？）。

**トリガー条件**：

- 親会社の財務圧力（純損失が token ナラティブによる評価額支持を必要とする）→ 揺らぎ → 発行
- 規制ウィンドウが開く（SEC 訴訟取り下げ / 政権交代）→ 揺らぎ → 発行
- キーパーソンの多重ステータスの切り分け → 不発行 → 揺らぎ（例：Matt Huang の 3 重ステータスが将来切り分けられれば、Tempo はその立場を再評価する可能性がある）

**反例 / 例外**：Ethereum L2（Arbitrum / Optimism / zkSync 等）の多くは既に発行済みだが、ステーブルコイン・決済公開チェーンとの「内部化収入」動機は異なる。本フレームワークは**ステーブルコインネイティブ / 決済位置付け**の公開チェーンにのみ適用される。より広範なクロスチェーン比較は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極比較マトリックス]] 参照。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

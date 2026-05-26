---
title: チェーン・レベル OFAC freeze = 米ドルのチェーン・レベル覇権（Bybit Hack 30 分前例）
aliases: [chain-level OFAC freeze, dollar chain hegemony, Bybit hack USDC freeze]
domain: fintech
kind: knowledge
topic: chain-level-ofac-freeze-precedent
created: 2026-05-13
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-13
confidence: certain
tags: [fintech, OFAC, sanction, freeze, stablecoin, USDC]
status: candidate
sources:
  - https://ofac.treasury.gov/recent-actions
  - https://home.treasury.gov/policy-issues/financial-sanctions
  - https://www.circle.com/en/transparency
  - https://www.coindesk.com/policy/2022/08/08/us-sanctions-crypto-tool-tornado-cash/
  - https://www.bybit.com/en/news
---

# チェーン・レベル OFAC freeze = 米ドルのチェーン・レベル覇権


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> GENIUS Act §§504、Travel Rule、OFAC real-time feed が連携することで **前例のないチェーン・レベル金融制裁能力** が生まれた。**Bybit Hack 後 30 分以内に Circle は $45M USDC を凍結** — これは伝統的な SWIFT・銀行制裁体系では到底達成できない応答速度。「チェーン・レベル OFAC」は 2026 年以降の金融規制の新ベースラインとなり、すべてのコンプライアント stablecoin issuer は day-1 でサポートを提供する必要がある。

**Bybit Hack 事例（2025-02）**:

- 攻撃発生: ハッカーが Safe multisig UI のサプライチェーン攻撃で約 $1.46B の資産を窃取
- 30 分以内: Circle がオンチェーンで識別された USDC アドレスを凍結、$45M の USDC が移動不能に
- 数時間以内: OFAC SDN List 更新;Chainalysis / TRM Labs / Elliptic のオンチェーン追跡が関連アドレスをロック
- 数日以内: 複数の取引所が協調して凍結
- 比較: 伝統的な SWIFT 制裁は 24-72 時間を要し、銀行による人手レビューに依存

**技術的実装**:

1. **issuer-level blacklist**: USDC コントラクト内の `blacklisted[address]` mapping
2. **chain-level Denylist**: [[fintech/genius-act-501-denylist-mandate|GENIUS §§501 が必須化]] — issuer はチェーン・レベルでアドレス凍結を実行できる必要がある
3. **OFAC real-time feed**: SDN List が API 経由で issuer システムにプッシュ
4. **オンチェーン forensics ツール**: TRM Labs / Chainalysis Reactor / Elliptic がリアルタイムで mixer と bridge の資金流向を識別

**含意**:

1. **stablecoin はすでに「暗号原理主義」陣営に属さない**: USDC / PYUSD / RLUSD が issuer freeze 権限を受け入れることはコンプライアンス上の妥協だが、市場シェアのリターンは大きい。
2. **DAI / LUSD など分散型 stablecoin の真の価値** = 検閲耐性 + グレーマーケット流通だが、TVL は 5% 以下に抑え込まれる。
3. **Tether は依然として一部の自主権を保持**: 選択的 freeze（執行と連携） + 選択的 ignore（地政学的顧客） — これが USDT が新興市場で覇権を維持し続ける根本理由（詳細は [[fintech/em-market-crypto-dollarization-pattern|新興市場 暗号ドル化]]）。
4. **暗号 OG カルチャーと規制現実の分裂**: Cypherpunk vs Wall Street の最終的分水嶺。

**他チェーンへの含意**:

- **Tempo / Arc / Base** はチェーン・レベル freeze をサポートする必要がある（GENIUS Act の強制）
- **Ethereum L1** は依然として「中立インフラ」だが、Ethereum 上の USDC は freeze を受け入れる
- **freeze 能力を完全に持たないチェーン**（Bitcoin、Monero、ZK プライバシーチェーン等）はグレーマーケットの避難所となる

**業界実装含意**:

- オンチェーン決済と stablecoin 事業は day-1 で OFAC コンプライアンス・モジュールを組み込む必要がある
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 チェーン・レベル Denylist]] と直接連動
- VASP 側の整備は [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] と [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリックス]] 参照


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン・レベル Denylist]]
- [[fintech/three-circles-stablecoin-mra-framework|三円コンプライアンス・アーキテクチャ]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]
<!-- /wiki-links:managed -->

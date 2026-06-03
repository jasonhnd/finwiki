---
source: systems/bft-validator-economy-tempo-vs-arc
source_hash: 89b2cb80292de2f7
lang: ja
status: machine
fidelity: ok
title: "Tempo vs Arc · 機関チェーン validator 設計の2経路"
translated_at: 2026-06-03T00:53:08.347Z
---
# Tempo vs Arc · 機関チェーン validator 設計の2経路

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] の下に位置づけられる。同業 / 対比の文脈は [[systems/eigenlayer-l1-bootstrapping|EigenLayer による新 L1 起動期セキュリティ支援 · Tempo/Arc 潜在経路]]、より広いシステム / 規制上の境界は [[fintech/INDEX|fintech index]] と照らして読む。

## 主要事実

- Tempo 外部 validator 数 = 4(厳選機関) ^[extracted]
- Tempo BFT 耐障害性 = ⌊(4-1)/3⌋ = 1(悪意あるノードまたは停止 1 個まで許容) ^[extracted]
- Tempo の中本聡係数は極めて低く、規制上の単一障害点リスクが顕著 ^[extracted]
- Arc フェーズ 1 = PoA(チーム + 創設機関ホワイトリスト) ^[extracted]
- Arc フェーズ 2 = 許可付き PoS(20-50 KYC validator) ^[extracted]
- Arc フェーズ 3 = ガバナンス PoS(理論的目標、達成されない可能性あり) ^[extracted]
- 三段階テンプレートは Kinexys / Mony が引用 ^[extracted]

## 仕組み / 作動方法

**Tempo · 4 外部 validator モデル**:Tempo チーム内部 validator + 4 つの厳選外部機関(大手カストディアン / 大手 staking サービスプロバイダ / ソブリンファンド運用 / 戦略的提携)。各 validator は KYC + 法的合意で拘束される → 責任追及可能。インフレ報酬なし、yield はプロトコル手数料分配。MEV なし(機関 OTC が注文フローを主導)。設計哲学:**少数の高資格 > 数による分散**、非中央集権性を犠牲にしてパフォーマンスと責任を確保する。

**Arc · 三段階の進化**:フェーズ 1 PoA は中央集権だが高速反復;フェーズ 2 で KYC validator 集合を 20-50 社に拡大し、ステーキング経済を導入するが参入は制御;フェーズ 3 ではガバナンスにより validator 集合の拡大を決定し、長期目標は完全な非中央集権化。設計哲学:**機関チェーン初期は中央集権が必須であることを認め、明確なロードマップでエコシステムの信頼を獲得する**。

比較次元:

| 次元 | Tempo | Arc |
|---|---|---|
| validator 数 | 4 厳選 | 進化中(PoA → 20-50 → ?) |
| 非中央集権経路 | 追求しない | 三段階漸進 |
| 集中度 | 公然と承認 | ロードマップで隠蔽 |
| BFT 耐障害性 | 1/4(脆弱) | フェーズ依存 |
| 中核トレードオフ | パフォーマンス + 信頼性 | コンプライアンス起動 + 漸進的開放 |

## 起源と進化

2024 Aave Arc / JPM Onyx の初期許可プール → 「機関チェーン初期は許可制が必須」が共識化。2025.04 Tempo が 4 外部 validator 設計を公表 → ミニマムモデルが顕在化。2025 Circle が Arc 三段階ロードマップを公表 → 漸進的非中央集権化テンプレートが成立。2025-2026 [[fintech/jpmorgan-jpmd-coin|Kinexys / JPMD]] / Mony / 多数のトークン化預金プロジェクトが Arc 三段階テンプレートを引用。2 経路が共存する根本的理由:Tempo はリテール加盟店(パフォーマンスに極めて敏感)に、Arc は機関顧客(コンプライアンス物語に極めて敏感)にサービスを提供する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/bft-validator-economy-overview|総覧]]
- [[systems/bft-validator-economy-four-variables|4変数詳解]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル]]
<!-- /wiki-links:managed -->

## 出典

- Tempo 公式サイト（4 外部 validator / 決済 L1 設計）— https://tempo.xyz/
- Arc 公式サイト（Circle 機関級 L1）— https://www.arc.io/
- Circle「Introducing Arc」公式発表（漸進的非中央集権化 / Malachite）— https://www.circle.com/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance
- Canton Network（Kinexys 系の許可型機関チェーン）— https://www.canton.network/

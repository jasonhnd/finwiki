---
source: agent-economy/skyfire-closed-loop-agent-issuer
source_hash: 7753cc75d717bba9
lang: ja
status: machine
fidelity: ok
title: "Skyfire · クローズドループ型カードネットワーク・エージェント決済発行体"
translated_at: 2026-06-02T11:47:37.271Z
---

# Skyfire · クローズドループ型カードネットワーク・エージェント決済発行体

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]] の配下にある。ピア / 対比については [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 stablecoin rail]] と [[agent-economy/ap2-overview|AP2 · Google mandate protocol]]、カードネットワークのフレーミングについては [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic-commerce pilots]]、より広範な規制境界については [[payments/INDEX|payments index]] と照らし合わせて読むこと。

## 主要な事実

- Skyfire は 2024-2025 にシリーズ A を調達し、**エージェント決済発行体** — AI エージェントがアイデンティティ + 資金供給されたバーチャルカードを取得するクローズドループプラットフォーム — として運営する
- カードレールおよび Visa Trusted Agent Protocol との整合のための **Visa** とのパートナーシップ
- Skyfire のエージェントアイデンティティ層を経由してルーティングされる Stripe / Visa 発行のバーチャルカード
- [[agent-economy/x402-http-payment-overview|x402]]（HTTP + USDC ステーブルコイン）および [[agent-economy/ap2-overview|AP2]]（複数レールにわたるマンデート VC）との対比
- クローズドループ = Skyfire がエージェントアイデンティティを発行（mint）し、カードを発行し、支出上限を設定し、マーチャント承認を 1 つのバンドルで監視する

## メカニズム — ここでクローズドループが意味するもの

Skyfire のアーキテクチャは、3 つの機能を 1 つの運用者に圧縮する：

1. **エージェントアイデンティティ / KYA（Know-Your-Agent）** — Skyfire がエージェントをオンボードし、制御する本人を検証し、アイデンティティ証明を保管する
2. **バーチャルカード発行** — マーチャントカテゴリホワイトリスト、取引ごとの上限、日次 / 月次の上限を備えた Visa ネットワークカード
3. **承認ゲートウェイ** — エージェントがマーチャント API を呼び出すと、Skyfire がスコープ付きルールに対してリアルタイムで承認する

**オープンプロトコルスタック** との比較：

| 層 | オープンスタック（x402 + AP2 + ERC-7715） | Skyfire クローズドループ |
|---|---|---|
| エージェントアイデンティティ | ウォレット / OS（Coinbase CDP、Privy、Solana Mobile）が発行 | Skyfire が発行 |
| 権限付与マンデート | AP2 W3C VC | Skyfire 内部のカード管理ルール |
| 決済レール | Base 上の USDC（x402）または Google Pay / カード（AP2） | Visa カードレール、法定通貨 |
| ディスカバリ | [[agent-economy/x402-http-payment-overview|x402 Bazaar MCP]] | Skyfire マーチャントディレクトリ |
| 信頼アンカー | Coinbase / Cloudflare ファシリテーター + チェーンコンセンサス | 単一の信頼ハブとしての Skyfire |

クローズドループモデルは、**相互運用性** を **高速オンボーディング + クリーンな責任** と引き換えにする。マーチャントは Skyfire 経由のカードを通常のカード取引として受け入れ、チャージバック / 紛争は標準的な Visa レールに従う（責任のフレーミングについては [[agent-economy/agent-actorship-debate|agent actorship debate]] を参照）。

## 七つのプロトコルマップにおける Skyfire の位置

- **HTTP トランスポート**：意見を持たない（任意のエージェントランタイム上で動作する）
- **権限付与層**：独自仕様（AP2 の W3C VC 標準に対して）
- **決済層**：Visa カードレール（x402 の USDC、AP2 のマルチレールに対して）
- **アイデンティティ層**：Skyfire KYA（[[agent-economy/erc-7715-overview|ERC-7715]] を介した分散型エージェントアイデンティティに対して）

実務上の含意：Skyfire は **「エージェントが、どのマーチャントもすでに受け入れている決済手段を持つ」ための最速の経路** である — しかしエージェントを Skyfire のリスク境界の内側にロックする。クローズドループの意見付けなしに発行プリミティブを提供する [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] との対比。

## 競争上のポジショニング

| プレーヤー | アプローチ | トレードオフ |
|---|---|---|
| **Skyfire** | クローズドループ型エージェント発行体 + Visa パートナー | 高速なマーチャント受容、狭いレール |
| **Stripe Agent Toolkit**（[[agent-economy/stripe-agent-toolkit-position|see entry]]） | あらゆるエージェントビルダー向けの Issuing-as-a-service | ビルダーがクローズドループを所有、より多くの作業 |
| **Visa Trusted Agent Protocol** | ネットワークレベルのエージェント認証標準 | カードネットワークが必要とする認証ハンドシェイクを標準化 |
| **AP2**（[[agent-economy/ap2-overview|see entry]]） | W3C VC マンデート、レール非依存 | オープン標準、受容曲線は緩やか |
| **x402**（[[agent-economy/x402-http-payment-overview|see entry]]） | HTTP ネイティブ USDC | ステーブルコインレール、カードネットワークをバイパス |

## 起源と進化

Skyfire は、Stripe Agent Toolkit、Visa の Trusted Agent Protocol 発表、そして [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] エージェント SDK と並んで、2024 の「エージェントは決済手段を必要とする」波から生まれた。その賭けは次のとおりである。カードネットワークは今後何年もマーチャント受容のデフォルトであり続けるため、エージェントをカードネットワークネイティブな発行層で包むことは、たとえ x402 / ステーブルコインレールがその下で成長しても、実在のビジネスである。

シリーズ A の投資家 / パートナー（Visa、過去の Anthropic エコシステムのシグナリング）は、**エンタープライズ発行体ディストリビューション** の論点を指し示す。すなわち、AI エージェントを購入するエンタープライズは、USDC ウォレットではなく、1 つの請求書、監査証跡、ポリシー制御されたカードを望む。Skyfire はその調達フレンドリーなスロットを埋める。

## 関連項目

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots]]
- [[agent-economy/stripe-agent-toolkit-position]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/agent-actorship-debate]]
- [[payments/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- skyfire.xyz 製品ページおよびドキュメント。
- Visa：エージェンティックコマースプログラムおよび Trusted Agent Protocol の発表。
- Stripe ニュースルーム：エージェント発行パートナープログラムの参照。
- シリーズ A 資金調達および Visa パートナーシップの報道。

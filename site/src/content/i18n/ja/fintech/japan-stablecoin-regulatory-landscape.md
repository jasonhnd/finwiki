---
source: fintech/japan-stablecoin-regulatory-landscape
source_hash: ad06c97be66ba246
lang: ja
status: machine
fidelity: ok
title: "日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）"
translated_at: 2026-06-18T23:59:13.101Z
---

# 日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）

> [!info] TL;DR
> 改正資金決済法（→ [[fintech/japan-financial-regulation|日本金融規制]]）により、日本の stablecoin / 電子決済手段（EPI）の分析では、**発行体**、**流通業者 / EPI サービス提供者**、**プラットフォーム提供者**、そして **ウォレット / 決済経路** を区別しなければならない。

## 現状マップ（出典更新 2026-05-21）

| Lane | 現在のアンカー | 押さえるべき点 |
|---|---|---|
| 資金移動型の円 stablecoin 発行体 | [[payment-firms/jpyc|JPYC株式会社]] / [[exchanges/jp-exchange-jpyc|JPYC detailed page]] | JPYC は FSA の資金移動業登録に関東財務局長 第00099号 として登録されている。従来型の暗号資産取引所と取り違えてはならない。 |
| 外国 stablecoin の流通 / EPI サービス提供者 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] | FSA の EPI サービス提供者リストには事業者が1社含まれる：SBI VC Trade、登録番号 関東財務局長 第00001号、USDC を取り扱う。 |
| 信託型 stablecoin / トークン化プラットフォーム | [[payment-firms/progmat|株式会社Progmat]] / [[fintech/jp-stablecoin-progmat|Progmat detailed page]] | Progmat はプラットフォーム提供者である。発行体 / 受託者の役割は、規制対象の信託銀行および参加金融機関が担う。 |

## 含意

この wiki における stablecoin のカバレッジは、次のように振り分けるべきである：

- 発行体 / 規制対象会社のページ：`JapanFG/`
- 取引所 / EPI 流通業者のページ：`exchanges/`
- 法的アーキテクチャおよびトークン化モデルのページ：`fintech/`
- 決済 / ウォレット経路のページ：`payments/`

これにより、stablecoin の発行体、EPI サービス提供者、トークン化プラットフォームを同じ種類の金融機関として扱うという、よくある誤りを避けられる。

## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照——专为"不碰资金的交易路由中介"设计的轻量牌照]]
- [[payment-firms/jpyc|JPYC株式会社]]
- [[payment-firms/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
<!-- /wiki-links:managed -->

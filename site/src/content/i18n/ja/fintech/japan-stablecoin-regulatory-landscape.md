---
source: fintech/japan-stablecoin-regulatory-landscape
source_hash: db6813d841884540
lang: ja
status: machine
fidelity: ok
title: "日本ステーブルコイン法制度の三層構造（JPYC・USDC・Project Pax）"
translated_at: 2026-06-02T13:21:55.072Z
---

# 日本ステーブルコイン法制度の三層構造（JPYC・USDC・Project Pax）

> [!info] 要約
> 改正資金決済法（→ [[fintech/japan-financial-regulation|日本金融規制]]）により、日本のステーブルコイン / 電子決済手段（EPI）の分析では、**発行体**、**流通業者 / EPIサービス提供者**、**プラットフォーム提供者**、**ウォレット / 決済経路**を分けて扱う必要がある。

## 現在の整理（ソース更新 2026-05-21）

| 区分 | 現在のアンカー | 押さえる点 |
|---|---|---|
| 資金移動業者型JPYステーブルコイン発行体 | [[JapanFG/jpyc|JPYC株式会社]] / [[exchanges/jp-exchange-jpyc|JPYC detailed page]] | JPYCはFSAの資金移動業者登録簿に関東財務局長 第00099号として掲載されている。通常の暗号資産取引所と混同してはならない。 |
| 外国ステーブルコイン流通 / EPIサービス提供者 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] | FSAのEPIサービス提供者リストには1事業者が掲載されている:SBI VC Trade、登録番号は関東財務局長 第00001号、USDCを取り扱う。 |
| 信託型ステーブルコイン / トークン化プラットフォーム | [[JapanFG/progmat|株式会社Progmat]] / [[fintech/jp-stablecoin-progmat|Progmat detailed page]] | Progmatはプラットフォーム提供者である。 発行体 / 受託者の役割は、規制対象の信託銀行および参加金融機関に置かれる。 |

## 含意

このwikiでのステーブルコイン関連項目は次のようにルーティングする。

- 発行体 / 規制対象会社ページ: `JapanFG/`
- 取引所 / EPI分配者ページ: `exchanges/`
- 法的アーキテクチャとトークン化モデルページ: `fintech/`
- 決済 / ウォレット経路ページ: `payments/`

これにより、ステーブルコイン発行体、EPIサービス提供者、トークン化プラットフォームを同じ種類の金融機関として扱う一般的な誤りを避けられる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照——专为"不碰资金的交易路由中介"设计的轻量牌照]]
- [[JapanFG/jpyc|JPYC株式会社]]
- [[JapanFG/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
<!-- /wiki-links:managed -->

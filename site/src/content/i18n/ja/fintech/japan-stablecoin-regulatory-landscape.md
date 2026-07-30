---
source: fintech/japan-stablecoin-regulatory-landscape
source_hash: bda93442c6264fd4
lang: ja
status: machine
fidelity: ok
title: "日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）"
translated_at: 2026-07-30T00:00:00+09:00
---

# 日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）

> [!info] TL;DR
> 改正資金決済法（→ [[fintech/japan-financial-regulation|日本金融規制]]）により、日本の stablecoin / 電子決済手段（EPI）の分析では、**発行体**、**流通業者 / EPI サービス提供者**、**プラットフォーム提供者**、そして **ウォレット / 決済経路** を区別しなければならない。

## 現状マップ（出典更新 2026-07-30）

| Lane | 現在のアンカー | 押さえるべき点 |
|---|---|---|
| 資金移動型の円 stablecoin 発行体 | [[payment-firms/jpyc|JPYC株式会社]] / [[exchanges/jp-exchange-jpyc|JPYC detailed page]] | JPYC は FSA の資金移動業登録に関東財務局長 第00099号 として登録されている。従来型の暗号資産取引所と取り違えてはならない。 |
| 外国・国内 EPI の流通 / EPI サービス提供者 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] | 現行の FSA 一覧に掲載されている事業者は SBI VC Trade 1 社で、登録番号は関東財務局長 第00001号、取扱電子決済手段欄には USDC、RLUSD、JPYSC が記載されている。一覧は、掲載が FSA による価値保証または推奨を意味しないことも明記している。 |
| 信託型 stablecoin / トークン化プラットフォーム | [[payment-firms/progmat|株式会社Progmat]] / [[fintech/jp-stablecoin-progmat|Progmat detailed page]] | Progmat はプラットフォーム提供者である。発行体 / 受託者の役割は、規制対象の信託銀行および参加金融機関が担う。 |

出典注記：登録事実は、2026-07-30 に取得した FSA の [資金移動業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf) と [電子決済手段等取引業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx) の時点情報である。プラットフォームの役割に関する用語は、Progmat の [会社概要](https://progmat.co.jp/about/) と [コンセプトページ](https://progmat.co.jp/concept/) で確認した。

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
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス]]
- [[payment-firms/jpyc|JPYC株式会社]]
- [[payment-firms/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/ai-payment-two-tracks|AI 産業の二つの決済レール：Stripe 型と stablecoin 型]]
<!-- /wiki-links:managed -->

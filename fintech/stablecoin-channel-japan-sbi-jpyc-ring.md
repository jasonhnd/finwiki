---
title: SBI × JPYC × Circle 環状持株 — 日本ステーブルコイン配信チャネル
aliases: [sbi-jpyc-circle-ring, SBI Circle Holdings, jpy-usdc-channel, 日本ステーブルコイン環状チャネル]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, stablecoin, sbi, jpyc, circle, japan, usdc, channel]
sources:
  - https://www.sbigroup.co.jp/news/
  - https://jpyc.co.jp/
  - https://www.circle.com/en/press
  - https://www.sbivc.co.jp/
status: candidate
---

# SBI × JPYC × Circle 環状持株 — 日本ステーブルコイン配信チャネル


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> SBI × Circle × JPYC が形成する**環状持株構造**は 2025-2026 年の日本ステーブルコインにおける最重要な配信チャネル —— SBI Circle Holdings（2025-08 折半出資 50/50）が USDC の国内独占発行チャネルを保有、Circle が JPYC を 3.51% 保有、JPYC が Circle Partner SC として、三者が相互ロックして **§501(d) 入榜後のクロスボーダーコンプライアンス覇者アーキテクチャ**を形成。日本 4 陣営評価では当該チャネルは v2 評価 **#1 ★★★★★**で、Progmat 信託型コンソーシアム（クロスボーダーチャネルなし）を大きく上回る。

## Key facts

- **2025-08**：SBI Holdings + Circle Internet Financial が折半出資で **SBI Circle Holdings** 設立（50/50 JV）
- **環状持株**：Circle が [[JapanFG/jpyc|JPYC]] を約 3.51% 保有；JPYC ∈ Circle Partner SC；SBI は SBI Circle Holdings 経由で JPYC と間接関連
- **国内チャネル**：[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]] = 国内第 1 号 EPI 業者（2025-03-04 認可）· USDC 国内取扱開始（2025-03-26）
- **資本投資**：SBI HD + SBI 新生 合計 $50M を Circle IPO に投資（2025-06-05 NYSE 上場）
- **Progmat 不参加**：北尾吉孝 2026-02 X 投稿「画一的・競争制限的・護送船団的」—— Progmat 信託型コンソーシアムに加入しないと明言
- **JPYSC による補完**：SBI 新生信託銀行 × Startale 「JPYSC」信託型 SC（2026-Q2 上線）が「日本円側」を補完
- **アプラス 接続**：2026 春 リアル店舗 USDC 決済の実証実験

## Mechanism / How it works

```
        Circle Internet Financial（USDC 発行体）
              │  50%
              │           3.51%
              ├─────────────> JPYC Inc.（資金移動業 EPI）
              │                  │ Circle Partner SC
              ▼                  │
  SBI Circle Holdings ◀──────────┤ 環状相互参照
              │  50%             │
        SBI Holdings ────────────┘
              │
              ├── SBI VC トレード（EPI #1）→ USDC 国内
              ├── アプラス → リアル店舗 決済
              ├── SBI 新生信託 × Startale → JPYSC（2026-Q2）
              └── Arc グローバル決済網日本独立チャネル
```

**チャネル機能**：
1. **USDC 入口**：SBI VC トレード の国内独占 EPI チャネル
2. **JPY 側**：JPYC（資金移動業）+ JPYSC（信託型）の二重の日本円ステーブルコインオプション
3. **クロスボーダーコンプライアンス**：§501(d) 入榜後の USDC ↔ JPYC 双方向コンプライアンスチャネル
4. **リテール接点**：アプラス クレジットカード + リアル店舗シーン

## Origin & evolution

```
2023-11-27  SBI HD + Circle 業務提携基本合意書
2025-03-04  SBI VC トレード = 国内第 1 号 EPI 業者
2025-03-25  SBI HD + Circle 合弁会社設立契約
2025-03-26  SBI VC トレード = USDC 国内取扱開始
2025-06-05  Circle NYSE 上場 · SBI 合計 $50M 投資
2025-08     SBI Circle Holdings 設立（50/50）
2025-12-16  SBI HD + Startale「JPYSC」信託型 SC 発表
2026-02     北尾吉孝 X：「Progmat ジョイン拒絶」
```

**v1 → v2 評価ジャンプ**：§501(d) 公布前、SBI 陣営は「独立路線 / #3」と見られていた。公布後、USDC ↔ JPY クロスボーダーコンプライアンスチャネルの価値が急騰し、SBI Circle Holdings は **#1 ★★★★★** に昇格 —— [[JapanFG/progmat|Progmat]]（3 メガバンク信託型）は #3 に降格、理由は「クロスボーダーコンプライアンスチャネルなし」、詳細は [[fintech/multi-megabank-consortium-governance|複数メガバンク連邦ガバナンス]] 参照。

## Counterpoints

- **集中リスク**：USDC の国内独占は日本ステーブルコインのライフラインを単一の米国側発行体に縛ることに等しい —— Circle にコンプライアンスインシデント（§501(d) からの転落等）が発生すれば、日本側は断流する
- **JPYSC 代替論**：SBI 自社の JPYSC（信託型）が 2026-Q2 上線、USDC 経路への依存度を低下させる可能性（北尾「両賭け」の実質）
- **Progmat の反撃**：3 メガバンクの Project Pax クロスボーダープロジェクト（2026 H2）はまだ完成していない。成功すれば「クロスボーダーチャネルなし」の弱点は部分的に補われる
- **環状持株の安定性**：3.51% の Circle→JPYC 持株は極めて薄く、重要時に完全 disclosure をトリガーするかは観察待ち
- **リテール浸透不足**：日本における USDC のリテール浸透度はステーブルコイン現地ナラティブよりも遥かに低い（JPYC 実流通も依然小さい）

## Open questions

- アプラス × USDC 実証が失敗した場合、環状チャネルへの実質的ダメージは
- JPYC が独立 IPO 経路を選ぶか（vs SBI/Circle 環状内に残るか）
- Project Pax 2026 H2 着地後、3 メガバンクが環状外のユースケースを一部奪取できるか
- §501(d) 後に GENIUS Act が rulemaking 段階に入った際、USDC チャネル再配分への影響
- JPYSC 信託型と Progmat XJPY の市場位置付けの重複度

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン × チェーン × ソブリン通貨 3 層分流]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA ステーブルコインフレームワーク]]
- [[fintech/japan-financial-regulation|日本金融規制]]
<!-- /wiki-links:managed -->

## Sources

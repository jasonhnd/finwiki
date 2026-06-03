---
source: systems/cctp-v2-technical-spec
source_hash: debba25bb3b731d6
lang: ja
status: machine
fidelity: ok
title: "CCTP V2 技術仕様 ・高速転送 ・フック ・認証サービス"
translated_at: 2026-06-03T00:53:08.317Z
---

# CCTP V2 技術仕様 ・高速転送 ・フック ・認証サービス
## ウィキ上の位置づけ
この項目は [[systems/INDEX|systems index]] の下にあります。ピア/コントラストのコンテキストについては [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]]、より広範なシステム/規制の境界については [[fintech/INDEX|fintech index]] と照らし合わせて読み取ってください。
## 重要な事実
- 高速転送のレイテンシは < 1  秒(V1  は ~13  秒) ^[extracted]
- 高速転送の資金源:Circle IPO 後の $4.34B 財務 ^[extracted]
- フックはmintと同じtxで宛先チェーン契約をトリガー、1-txでのクロスチェーンスワップ/ローンをサポート ^[extracted]
- Circle Attestation Service はオフチェーン署名者ネットワーク・非中央集権 oracle ではない ^[extracted]
- Circleは特定アドレスへの選択を拒否可能(Tornado Cashの事例) ^[extracted]
## 仕組み・仕組み
**高速転送フロー**:
1. ユーザーがソースチェーンでUSDCをburn
2. Circleがバーンイベントを監視・ソースチェーンファイナリティを待たずに即座に先にチェーンでmint(Circleはトレジャリーでファイナリティリスクを保証)
3. ソースチェーンファイナリティ到達後、Circle内部で境界整合、権利を解除
**フックフロー**:
1. burn tx の calldata にフックターゲット + ペイロードを含める
2. 宛先チェーン mint 後、EntryPoint コントラクトが自動的にターゲットをフック(mint された USDC + ペイロードを渡す)
3. フック契約は同一TX内でスワップ/入金/ローンを完了可能
**認証サービス**:
- オフチェーンのCircleノードがサポート対象全チェーンのバーンイベントを監視
- 存在にはソースチェーンID + 宛先チェーンID + 金額 + 受信者 + nonceが含まれる
- 宛先チェーンの MintBurnTokenMessenger 契約が主体的に検証してから mint
**§501 拒否リストとの統合**:Attestation Service はアイコン前にCircleの拒否リストを照する会 —— 受信者または送信元アドレスがリスト上であれば表示を拒否、USDC はソースチェーンで書き込みですが先先チェーンではmintできない。[[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]のコンプライアンスノード設計と対照)。
## 起源と進化
V2 開発期間中、Circleの重要なプロダクト判断は「高速転送を完全に非中央集権化するか」であった —— 最終的に中央集権保障モデルを選択した。 理由は非中央集権スキーム(チャレンジャーウォッチタワー、ステークベースの保税バリデーター)はユーザーコストとレイテンシを増やす、Circle自身のコンプライアンス役割が既にUSDC発掘アンカーとなっているため、追加で非中央集権層を追加したのは冗長だったからだ。
Hooks の設計インスピレーションは部分的に [[systems/erc-4337-overview|ERC-4337]] の UserOp モデルに由来します —— 「チェーン A 操作 + チェーン B 操作」をアトミックなセマンティクスでパッケージし、UX 複雑度を低下させます。
## 関連項目項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[agent-economy/ap2-technical-spec|AP2(USDC settlement adapter)]]
<!-- /wiki-links:managed -->
## 出典
- Circle CCTP V2 docs(developers.circle.com)
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

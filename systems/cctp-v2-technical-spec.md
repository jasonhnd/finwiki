---
title: CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service
aliases: [cctp-v2-spec, cctp-v2-fast-transfer, cctp-v2-hooks]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, bridge, stablecoin, usdc, circle, cctp, technical-spec]
sources: []
status: candidate
---

# CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Fast Transfer のレイテンシは < 1 秒(V1 は ~13 秒) ^[extracted]
- Fast Transfer の資本源:Circle IPO 後の $4.34B treasury ^[extracted]
- Hooks は mint と同一 tx で宛先チェーン契約をトリガー、1-tx でのクロスチェーンスワップ/ローンをサポート ^[extracted]
- Circle Attestation Service は off-chain signer ネットワーク · 非中央集権 oracle ではない ^[extracted]
- Circle は特定アドレスへの署名を拒否可能(Tornado Cash の事例) ^[extracted]

## Mechanism / How it works

**Fast Transfer フロー**:
1. ユーザーがソースチェーンで USDC を burn
2. Circle が burn イベントを監視 · ソースチェーン finality を待たずに即座に宛先チェーンで mint(Circle は treasury で finality リスクを担保)
3. ソースチェーン finality 到達後、Circle 内部で勘定整合、担保を解除

**Hooks フロー**:
1. burn tx の calldata に hook target + payload を含める
2. 宛先チェーン mint 後、EntryPoint コントラクトが自動的に hook target を呼び出し(mint された USDC + payload を渡す)
3. hook コントラクトは同一 tx 内で swap / deposit / loan を完了可能

**Attestation Service**:
- off-chain の Circle ノードがサポート対象全チェーンの burn イベントを監視
- 署名には source chain id + destination chain id + amount + recipient + nonce が含まれる
- 宛先チェーンの MintBurnTokenMessenger コントラクトが署名検証後に mint

**§501 denylist との統合**:Attestation Service は署名前に Circle の denylist を照会する —— recipient または source アドレスがリスト上にあれば署名を拒否、USDC はソースチェーンで burn 済みだが宛先チェーンでは mint できない。**これはプロトコル層のコンプライアンス執行通路**である([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] のコンプライアンスノード設計と対照)。

## Origin & evolution

V2 開発期間中、Circle の重要なプロダクト判断は「Fast Transfer を完全に非中央集権化するか」であった —— 最終的に中央集権担保モデルを選択した。理由は非中央集権スキーム(challenger watchtower、stake-based bonded validator)はユーザーコストとレイテンシを増やし、Circle 自身のコンプライアンス役割が既に USDC の信頼アンカーとなっているため、追加で非中央集権層を加えるのは redundant だったから。

Hooks の設計インスピレーションは部分的に [[systems/erc-4337-overview|ERC-4337]] の UserOp モデルに由来 —— 「チェーン A 操作 + チェーン B 操作」をアトミックなセマンティクスでパッケージし、UX 複雑度を低下させる。

## Counterpoints

**単一信頼批判**:Circle Attestation Service は N 個の Circle 自営ノードのマルチシグ —— 本質的に Circle 1 社の管理下にある。Circle が国家により強制接収された場合(Tornado Cash OFAC 案後の USDC 凍結判断に類似)、CCTP V2 の全トラフィックは Circle 単独の判断に従う。これは LayerZero の DVN multi-source モデルと対照的 —— LayerZero は少なくともプロトコル層でマルチシグの非中央集権化設計を行っている。

**Fast Transfer の資本リスク**:Circle treasury $4.34B は十分に見えるが、ソースチェーンで大規模 reorg が発生した場合(ETH メインネットは確率極めて低いが、L2 reorg は既に発生)、Circle は瞬時に数千万の損失を負う可能性がある。

## Open questions

- Circle Attestation Service の具体的なノード数と地理的分布は?
- Hooks の V2 ローンチ後 1 年内の実際の使用率は?
- Circle が担保する reorg 損失が treasury 許容を超えた場合、メカニズムはどう degrade するか?
- CCTP V2 は stake-based challenger を導入して非中央集権化を強めるか?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] の各スキームの信頼前提と対比)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[agent-economy/ap2-technical-spec|AP2(USDC settlement adapter)]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 docs(developers.circle.com)

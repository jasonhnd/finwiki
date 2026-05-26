---
type: wiki
kind: technique
slug: bytecode-forensic-three-tier-verify
domain: security
title: "スマートコントラクト bytecode フォレンジック — 三層 verify 技術"
aliases: []
status: candidate
confidence: possible
evidence_count: 2
challenges: 0
created: 2026-05-12
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-08
related:
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[wayback-machine-as-forensic-tool]]"
  - "[[forensic-identity-anchor-chain]]"
tags: [security/forensic, security/smart-contract, security/dd]
sources:
  - "https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode"
  - "https://docs.soliditylang.org/en/latest/metadata.html"
  - "https://docs.etherscan.io/contract-verification/"
---

# スマートコントラクト bytecode フォレンジック — 三層 verify 技術

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> プロジェクト側のverified contractとGitHubソースが一致しない場合、bytecodeこそがground truthとなる。三層verify:(1) オンチェーンdeployed bytecodeとGitHub sourceのコンパイル結果を比較、(2) 4-byte PUSH4-EQ dispatcherを逆推してfn selectorを抽出し、unverifiedコントラクトのインターフェイスを照合、(3) クロスチェーンverified twin fingerprintでチーム身元を特定する。

## 三層 technique

### Layer 1: Deployed vs Compiled diff

- eth_getCode(addr, "latest") でオンチェーンruntime bytecodeを取得
- GitHubソース + プロジェクト側が明示したsolcバージョン + optimizer settingsでローカルコンパイル
- diffが空でない = オンチェーン版とGitHub版が不一致 = シグナル
- immutable / constructor args / metadata hashの差分は剥離して比較する点に注意

### Layer 2: 4-byte PUSH4-EQ dispatcherの逆推

- EVM contractはdispatcher進入時にPUSH4 selector EQ JUMPIパターンで分岐
- contractがverifyされていなくても、opcode列から全selectorを抽出可能(4-byte)
- 4byte.directory / openchain.xyzでfn signatureを逆引き
- ERC-20 / pause / blacklist / migrate等のセンシティブなインターフェイスにヒット = シグナル

### Layer 3: クロスチェーン verified twin fingerprint

- 同一チームが複数チェーンへデプロイした際、一方はverified、他方はunverifiedというケースは頻出
- verified側のruntime bytecode(metadata hash剥離後)をfingerprintとして利用
- unverifiedチェーン側ではbytecode類似度マッチング(SimHash / k-gram等)を実施
- ヒット = 同一チーム = 身元アンカー — 商用 [[exchanges/global-crypto-forensics-vendor-layer|オンチェーン forensics vendor]] はこの層をクロスチェーンclusterラベルライブラリとして商品化している

## When to Use

- 中核となるコントラクト(bridge / vault / governance)が意図的にverifyされていないケース
- プロジェクト側のGitHubは既に削除されたがコントラクトはまだ稼働しているケース
- クロスチェーン・プロジェクトで「表向きの体制 vs 真の開発チーム」を識別したいケース
- backdoor / 緊急pause / blacklistインターフェイスの存在を疑うケース — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] や [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] のような取引所事件では、攻撃者がunverifiedな中継コントラクトをデプロイした事例が存在

## When NOT to Use

- 既に完全にverifiedかつソースが信頼できるコントラクト(直接ソースを読めば足りる)— この場合は [[systems/formal-spec-implementation-codesign|formal-spec implementation co-design]] 等の仕様優先アプローチがより有効
- proxyコントラクト(EIP-1967 storage slotからimplementationを特定したうえで実施)
- 純粋にread-onlyのviewコントラクト(リスクが低い)

## Counterpoints

> [!question] Open questions
> - Layer 2でselectorヒット後、signatureだけでなくfnの実際の挙動をどうverifyするか
> - bytecode類似度がどの程度であれば「同一チーム」と認定できるか(業界にhard thresholdは存在しない)

## Provenance

- ケーススタディ:オンチェーンで一部の中核コントラクトはverifiedだが、bridge / vault系の一部はクローズドソース · 三層verifyでunverifiedコントラクトのインターフェイスを逆推し、クロスチェーンtwin fingerprintでチーム身元をロックした

---
source: security/bytecode-forensic-three-tier-verify
source_hash: caf4af4d08ca77d8
lang: ja
status: machine
fidelity: ok
title: "スマートコントラクト bytecode フォレンジック — 三層 verify 技術"
translated_at: 2026-06-03T00:53:08.282Z
---

# スマートコントラクト bytecode フォレンジック — 三層 verify 技術

## ウィキ上の位置づけ

このエントリは [[INDEX|FinWiki index]] の下にあります。 ピア コンテキストについては [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]]、より広範なインフラストラクチャ境界については [[systems/INDEX|systems index]] として読み取ってください。

> [!info] 要約
> プロジェクト側の verified contract と GitHub ソースが一致しない場合、bytecode こそが ground truth になります。三層 verify: (1) オンチェーン deployed bytecode と GitHub source のコンパイル結果を比較し、(2) 4-byte PUSH4-EQ dispatcher を逆推して fn selector を抽出し、unverified コントラクトのインターフェイスを照合し、(3) クロスチェーン verified twin fingerprint でチームの実体を特定します。

### レイヤー 1: デプロイされたものとコンパイルされたものの差分

- eth_getCode(addr, "latest") でオンチェーンランタイムのバイトコードを取得
- GitHub出典 + プロジェクト側が知ったsolcバージョン + オプティマイザー設定でローカルコンパイル
- diffが空でない = オンチェーン版とGitHub版が不一致 = シグナル
- immutable / コンストラクター引数 / メタデータハッシュ差分は剥離して比較する点に注意

### レイヤー 2: 4 バイト PUSH4-EQ ディスパッチャの逆推

- EVM コントラクトはディスパッチャー進入時にPUSH4 selector EQ JUMPIパターンで分岐
- 契約が検証されていなくても、オペコード列から全セレクターを抽出可能(4-byte)
- 4byte.directory / openchain.xyzでfn署名を逆引き
- ERC-20 /一時停止/ブラックリスト/移行等のセンシティブナインターフェイスにヒット =

### レイヤー 3: クロスチェーンで検証されたツイン フィンガープリント

- 同一チームが複数チェーンへデプロイした際、一方はverified、他方はunverifiedというケースは頻出
- 検証済み側のランタイムバイトコード(メタデータハッシュ剥離後)をフィンガープリントとして利用
- unverifiedチェーン側ではbytecode類似度マッチング(SimHash / k-gram等)を実施
- ヒット = 同一チーム = 身元アンカー — 商用 [[exchanges/global-crypto-forensics-vendor-layer|オンチェーン forensics vendor]] はこの層をクロスチェーンclusterラベルライブラリとして商品化している

## 使う場面

- 中核となる契約(ブリッジ/保管庫/ガバナンス)が意図的に検証されていない
- プロジェクト側のGitHubは既に削除されたがコントラクトはまだ稼働しているケース
- クロスチェーン・プロジェクトで「表向きの体制 vs 真の開発チーム」を識別したいケース
- バックドア/緊急一時停止/ブラックリストインターフェイスの存在を疑うケース — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] や [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] のような取引所事件では、攻撃者が未確認の中継契約をデプロイした事例が存在

## 使わない場面

- 既に完全にverifiedかつ出典が信頼できるコントラクト(直接出典を読めば足りる)— この場合は [[systems/formal-spec-implementation-codesign|formal-spec implementation co-design]] 等の仕様優先アプローチがより有効
- プロキシ契約(EIP-1967 ストレージスロットから実装を特定した交渉実施)
- 純粋にread-onlyのviewコントラクト(リスクが低い)

## 根拠

- ケーススタディ:オンチェーンで一部の中核コントラクトは検証済みだが、ブリッジ/ボールト系の一部はクローズド出典・三層検証で未検証コントラクトのインターフェイスを逆推し、クロスチェーンツイン指紋でチーム元をロックした

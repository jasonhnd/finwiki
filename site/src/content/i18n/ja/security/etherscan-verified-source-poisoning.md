---
source: security/etherscan-verified-source-poisoning
source_hash: e5ab5a671959ab92
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Etherscan verified ソース汚染 — なぜ「verified」は「バイトコード」ではないのか"
translated_at: 2026-06-05T00:00:00.000Z
---

# Etherscan verified ソース汚染 — なぜ「verified」は「バイトコード」ではないのか

## Wiki ルート

このエントリは [[security/INDEX|security domain]] の配下にある。実地の対応物として [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] と併せて読み、表示されているソースが本物であっても *次の* implementation がそうではないケースについては [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]] と併せて読むとよい。

> [!info] TL;DR
> 緑色の "Contract Source Code Verified" バッジは、ブロックエクスプローラが何らかのソースを再コンパイルし、**デプロイされているものと一致する** バイトコードを得たことを意味する — 通常はコメント、変数名、メタデータの差異を許容する。それはソースが良性であること、それがプロキシの *拘束力ある* ロジックであること、あるいは一致がバイト単位で厳密であることを意味し **ない**。バッジを安全性の証明として扱うことが信頼のギャップであり、「verified ソース汚染」はそれを悪用する技術の総称である。グラウンドトゥルースは、レンダリングされたソースペインではなく、オンチェーンのバイトコードとアップグレードグラフである。

## 「verified」が実際に主張すること

検証は、提出されたソースを宣言されたコンパイラ設定の下で再コンパイルし、その出力をデプロイされたバイトコードと比較する。その主張の強さはツールと一致の種類によって異なる:

| 一致の種類 | 何が保証されるか | 何が保証され *ない* か |
|---|---|---|
| Full / exact match (Sourcify) | デプロイされたバイトコードが、付加されたメタデータハッシュを **含めて** 再コンパイル結果とバイト単位で等しい — つまり正確なソースバイトが固定される | 意図については何も。良性に見えるソースでも依然として悪意あり得る |
| Partial match (Sourcify) / 典型的なエクスプローラの "verified" | ランタイムの挙動が一致し、メタデータハッシュ領域 **を除いて** バイトコードが等しい | コメント、変数名、ソースパス、その他のメタデータフィールドが、著者が実際にコンパイルしたものと異なり得る |
| Unverified | — | ソースに関する主張は一切なし |

Solidity コンパイラは、コントラクトメタデータの IPFS ハッシュをバイトコードに付加する。そのハッシュは正確なコンパイルのフィンガープリントである。Full match はそれをチェックするが、多くのエクスプローラの "verified" フローはチェックしない。したがって partial-match バッジは、同じ挙動にコンパイルされる一方で *名前とコメントが安全に見えるよう編集された* ソースと整合する — その装飾的なレイヤーこそがまさに汚染の表面である。

## バッジが捕捉しない汚染技術

- **プロキシによる間接化。** verified なコントラクトはプロキシであり、それが委譲する *implementation* は別途（未）検証であり得て、差し替え可能である — [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]] を参照。ユーザーはプロキシのソースを読むが、ロジックは implementation で実行される。
- **メタデータ領域の編集。** partial match の下では、コメントと識別子は制約されない。同情を誘う命名（`SafeVault`、`onlyTrustedRelayer`）は、レビュアーが読み飛ばす挙動を覆い隠し得る。
- **コンストラクタ vs ランタイムの混同。** 検証はランタイムバイトコードを対象とする。コンストラクタ時の作用や immutable は過小検査されやすい。
- **「既知の良いフォークのように見える」。** 監査済みの上流に似せてレンダリングされながら、レッドラインの領域で乖離しているソース — まさに [[security/fork-and-rebrand-5-layer-audit-framework|the fork-and-rebrand five-layer audit]] が捕捉するために作られた失敗モード（Layer 1 上流 diff、Layer 3 バイトコードフィンガープリント）。

## バッジのクロスチェック（公開・再現可能）

1. デプロイされたランタイムバイトコード（`eth_getCode(addr, "latest")`）を取得し、いかなる比較の前にも末尾のメタデータハッシュを除去する。
2. 提出されたソースを、宣言された `solc` バージョンと optimizer 設定でローカルに再コンパイルし、(1) と diff する。メタデータ除去後に空でない diff があれば、それは強いシグナルである。
3. ソースのコメント/名前がレビューにとって重要な場合、partial match よりも **full/exact** match（例: [Sourcify](https://docs.sourcify.dev/docs/full-vs-partial-match/)）を優先する。
4. 対象がプロキシの場合、ERC-1967 スロットから implementation を解決し *それ* を検証してから、`Upgraded(address)` イベントから過去の implementation を列挙する。
5. 未検証コードのセレクタレベルのチェックについては、4 バイトのディスパッチャを復元しセレクタを逆引きする — [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] における Layer 2 の技術。

## なぜこれが重要か

- 「Etherscan で verified」をゲートとして使う DeFi のレビュアーや上場チーム — バッジは必要条件であって十分条件ではない。
- インシデントの帰属: [[exchanges/bybit-lazarus-hack-detailed-analysis|the Bybit Lazarus hack]] のような取引所イベントの事後分析は、攻撃経路において未検証または浅く検証された relay/helper コントラクトを繰り返し浮かび上がらせる。
- 規制対象 VASP のオンボーディング。検証の期待値が [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]] の開示要件と連動する。

## バッジで十分な場合

- 実際にソースを読んだ、非プロキシでイミュータブルなコントラクトにおける **full/exact** 一致 — 主張は強く、ロジックは変化し得ない。
- 最悪ケースの影響が無視できる、低リスクの read-only/view コントラクト。

## 関連

- [[security/INDEX|Security domain index]]
- [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]]
- [[security/proxy-upgrade-rug-pattern|Proxy-upgrade rug pattern]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]

## ソース

- Sourcify — Full vs Partial Match — https://docs.sourcify.dev/docs/full-vs-partial-match/
- Sourcify — We Need to Talk About the On-Chain Metadata Hash — https://docs.sourcify.dev/blog/talk-about-onchain-metadata-hash/
- Solidity docs — Contract Metadata (appended IPFS hash / metadata format) — https://docs.soliditylang.org/en/latest/metadata.html
- ethereum.org — Verifying smart contracts — https://ethereum.org/en/developers/docs/smart-contracts/verifying/

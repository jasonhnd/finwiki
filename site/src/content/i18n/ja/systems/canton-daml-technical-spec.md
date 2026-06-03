---
source: systems/canton-daml-technical-spec
source_hash: b6de27f58e402f69
lang: ja
status: machine
fidelity: ok
title: "Canton DAML 技術仕様：関数型契約言語 + Sub-transaction Privacy"
translated_at: 2026-06-03T00:53:08.273Z
---
# Canton DAML 技術仕様：関数型契約言語 + Sub-transaction Privacy

## ウィキ上の位置づけ

この項目は[[systems/INDEX|systems index]]の配下に置かれる。ピア比較・対照の文脈では[[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]]、より広い制度・規制上の境界については[[fintech/INDEX|fintech index]]と併せて読む。

## 主要事実

- DAML は functional + obligation-based な契約言語であり、命令型ではない。^[extracted]
- Sub-transaction privacy はデフォルトで有効であり、各参加者は自分に関係する部分だけを参照する。^[extracted]
- multi-party atomic transactions をネイティブにサポートする。^[extracted]
- Regulator Node はプロトコル級のファーストクラス市民であり、事後調査ではない。^[extracted]
- アプリケーション横断の呼び出しはアトミックであり、ブリッジや wrapped token は不要である。^[extracted]

## 仕組み / 動作方法

DAML と Solidity の次元比較。

| 次元 | Solidity(EVM) | DAML(Canton) |
|---|---|---|
| プログラミングパラダイム | 命令型 + state mutation | Functional + 複数当事者の権利義務モデリング |
| プライバシー | 全公開。オンチェーンで全て可視 | Sub-transaction privacy（デフォルトで秘匿） |
| 複数当事者アトミック性 | 複雑な契約組み合わせが必要 | multi-party atomic transactions をネイティブにサポート |
| 監督ノード | 概念上はない | Regulator Node モデル。監督者を参加者として組み込む |
| 適用シナリオ | DeFi + 汎用 dApp | 金融契約 + 機関間清算 |

DAML の「権利義務モデリング」の具体例では、債券契約を「issuer は義務 X を負う、holder は権利 Y を持つ、custodian は監査義務 Z を負う」と明示的に記述できる。これは伝統的金融の法的契約セマンティクスに直接対応する（[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]で表現される商品構造との対照）。Solidity では、これらの役割関係をプログラム自身がコーディングする必要があり、誤りが起きやすい。

Sub-transaction privacy の実装では、各 transaction は sub-events に分解され、各 sub-event は関係する参加者だけに暗号化されてブロードキャストされる。Global Synchronizer は順序付けだけを担当し、内容は復号しない。

## 起源と進化

DAML は Digital Asset の2014-2017 年の初期 POC に起源を持ち、2017 年に OSS 化（GitHub）され、2019 年に Canton Network の標準契約言語となった。2020-2024 年に継続的なイテレーションが進み、DAML 3.x では、より細粒度のプライバシープリミティブとアプリケーション横断 choreography のサポートが追加された。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## 出典

- DAML language reference(digitalasset.com)
- Canton Network (Digital Asset) — https://www.canton.network/

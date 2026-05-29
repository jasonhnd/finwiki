---
title: Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy
aliases: [canton-daml, daml-spec, canton-technical-spec, daml-vs-solidity]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, dlt, daml, smart-contracts, privacy, canton]
sources:
  - https://www.canton.network/
status: candidate
---

# Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- DAML は functional + obligation-based な契約言語 · 命令型ではない ^[extracted]
- Sub-transaction privacy はデフォルトで有効 · 各参加者は自身に関係する部分のみを参照する ^[extracted]
- multi-party atomic transactions をネイティブにサポート ^[extracted]
- Regulator Node はプロトコル級のファーストクラス市民 · 事後監査ではない ^[extracted]
- アプリケーション横断呼び出しはアトミック · ブリッジや wrapped token は不要 ^[extracted]

## Mechanism / How it works

DAML vs Solidity の次元比較:

| 次元 | Solidity(EVM) | DAML(Canton) |
|---|---|---|
| プログラミングパラダイム | 命令型 + state mutation | Functional + 多者の権利義務モデリング |
| プライバシー | 全公開(オンチェーン全可視) | Sub-transaction privacy(デフォルトで隔離) |
| 多者アトミック | 複雑な契約組み合わせが必要 | multi-party atomic transactions をネイティブサポート |
| 監督ノード | 概念なし | Regulator Node モデル——監督者を参加者として組み込み |
| 適用シナリオ | DeFi + 汎用 dApp | 金融契約 + 機関間清算 |

DAML の「権利義務モデリング」の具体例:債券契約には「issuer は義務 X を負う · holder は権利 Y を持つ · custodian は監査義務 Z を負う」と明示的に記述される——これは伝統的金融の法的契約セマンティクスに直接対応する([[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] が DAML 上で表現する商品構造と対照)。Solidity ではこれらの役割関係をプログラマ自身がコーディングする必要があり、誤りが起きやすい。

Sub-transaction privacy の実装:各 transaction は sub-events に分解され、各 sub-event は関係する参加者のみに暗号化ブロードキャストされる。Global Synchronizer は順序付けのみを担当(内容は復号しない)。

## Origin & evolution

DAML は Digital Asset の 2014-2017 年の初期 POC に起源を持ち、2017 年に OSS 化(GitHub)、2019 年に Canton Network の標準契約言語となった。2020-2024 年に継続的にイテレーション、DAML 3.x ではより細粒度のプライバシープリミティブとアプリケーション横断 choreography のサポートが追加された。

## Counterpoints

DAML の学習曲線は急峻 —— 大半のブロックチェーン開発者は Solidity/Move/Rust に習熟しており、DAML への転換は新言語の学習に等しい。これは Canton が公開チェーンエコシステムから開発者を引き付けにくい根本的理由。さらに DAML のクローズドソース期(2014-2017)と初期の特許戦略により OSS コミュニティの一部は警戒しており、現在は Apache 2.0 ではあるものの、エコシステム内での認知シェアは依然 EVM を大きく下回る。

## Open questions

- DAML 4.x のロードマップに EVM 互換層は追加されるか?
- Sub-transaction privacy は Global Synchronizer 妥協時の実際の保護強度は?
- DAML 形式検証ツールチェーン(Move Prover、Certora 類似)の発展は?
- [[fintech/bis-project-agora-overview|BIS Agora]] 等のクロス CBDC パイロットで、DAML は契約層の標準となるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## Sources

- DAML language reference(digitalasset.com)
- Canton Network (Digital Asset) — https://www.canton.network/

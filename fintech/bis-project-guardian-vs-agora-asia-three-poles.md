---
title: アジア・トークン化インフラ三極 · Guardian × Ensemble × Agorá-via-BoJ
aliases: [bis-project-guardian-vs-agora-asia-three-poles, asia tokenization three poles, アジア三極分業]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, mas, hkma, boj, guardian, ensemble, agora, asia, tokenization]
sources:
  - https://www.mas.gov.sg/schemes-and-initiatives/project-guardian
  - https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/research-and-applications/project-ensemble/
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
  - https://www.boj.or.jp/en/paym/digital/index.htm
  - https://www.bis.org/innovation_hub.htm
status: candidate
---

# アジア・トークン化インフラ三極


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> アジアのトークン化インフラは機能別に三極に分かれる: MAS Guardian（トークン化資産 · グローバル機関共同実験）、HKMA Ensemble（トークン化預金 · 香港ローカル・サンドボックス + mBridge 接続）、BoJ-via-Agorá（ソブリン・マネー側 · 日本が G10 協調にアクセス）。三極は **互補的で重ならず**、トークン化時代におけるアジア金融センターの差別化された位置付けを反映している。

## Key facts

- MAS Guardian = トークン化資産（債券 / ファンド / FX / カーボン・クレジット） ^[extracted]
- HKMA Ensemble = トークン化預金（香港ドル + mBridge クロスボーダー） ^[extracted]
- BoJ は BIS Agorá 経由でソブリン・マネー・トークン化（JPY wholesale CBDC）に参加 ^[extracted]
- 3 者は資産側 / 通貨側 / ソブリン側をカバーし、分業が明確 ^[inferred]
- MAS の規制哲学: 単一規制当局主導、意思決定が速い ^[extracted]
- HKMA の規制哲学: サンドボックス + クロスボーダーのデュアル・トラック ^[extracted]
- BoJ の規制哲学: 多国間協調、G10 コンセンサスに従属 ^[extracted]

## Mechanism / How it works

**三極の分業ロジック**:

| 極 | 機能 | 主要特徴 |
|---|---|---|
| MAS Guardian | 資産側 | グローバル機関共同、迅速な実験 |
| HKMA Ensemble | 通貨側 | 香港ローカル・トークン化預金 + mBridge 接続 |
| BoJ-via-Agorá | ソブリン側 | 日本が G10 多国間協調に接続 |

**互補関係**:
- Guardian で実験されたトークン化資産標準 → Ensemble のトークン化預金上で決済可能 → クロスボーダー時には [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] または Agorá wholesale CBDC で出口
- 三層パススルー: トークン化資産（Guardian） → トークン化預金（Ensemble） → wholesale CBDC（Agorá）
- **3 者すべてが Agorá に参加**（MAS / HKMA / BoJ はそれぞれ 7 G10 中央銀行の内外で何らかのコネクションを持つ） → アジア三極が G10 コンセンサス下で統合され、日本側の実装基盤は [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ概要]] 参照

**中核的差異**: Guardian は産業ラボ（機関は多いがソブリン・マネー・レイヤーなし）、Ensemble はソブリン・サンドボックス（香港ドル + クロスボーダー CBDC）、Agorá は G10 ソブリン協調（日本が接続）。3 者単独では完全なインフラを構成しないが、合わせると = アジア・トークン化フルスタック。

## Origin & evolution

2017-2020 MAS / HKMA / BoJ はそれぞれ初期トークン化 / CBDC プロジェクトを立ち上げ（MAS Ubin / HKMA-PBoC CBDC / BoJ Digital Yen 研究）。2021 mBridge 立ち上げ → HKMA がクロスボーダー位置を先取り。2022.05 MAS Guardian 立ち上げ → MAS が資産側を占有。2024.03 HKMA Ensemble 立ち上げ → ローカル・トークン化預金の弱点を補完。2024.04 BIS Agorá 立ち上げ、BoJ が参加 → BoJ は G10 経由でソブリン側に接続。2025+ 三極が相互接続実験を開始（MAS は Agorá にも参加、HKMA Ensemble は 2026 年以降に Agorá と接続する可能性） → アジア三極が G10 コンセンサス下で統合。

## Counterpoints

- 「三極互補」は理想化されており、実際には 3 者間に競争がある（MAS / HKMA の国際化ランキングを巡る長年の争い、BoJ は一貫して保守的にフォロー）
- 中国本土の不在 → 「アジア三極」は実質的に「アジア西側陣営三極」であり、アジア全体を代表しない
- インド / 韓国が将来独自のトークン化インフラを推進した場合、三極構造を崩す可能性
- BoJ は Agorá において主導者ではなく参加者であり、厳密には「BoJ-via-Agorá」を独立した一極とみなすのは難しい

## Open questions

- 三極はいつ相互運用性の技術的接続を実現するか?
- 中国本土は mBridge または独自方式を通じて「第 4 の極」を形成するか?
- インド RBI は MAS に倣って独自の Guardian 型プロジェクトを推進するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian 概要]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
<!-- /wiki-links:managed -->

## Sources


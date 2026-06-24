---
title: Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン
aliases: [canton-overview, canton-network-overview, digital-asset-canton]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [systems, dlt, privacy, canton, daml, institutional]
sources:
  - https://www.canton.network/
status: active
---

# Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-daml-technical-spec|Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 創設メンバー 23+ 社:Digital Asset + Goldman Sachs + JPMorgan + DTCC + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank 等 ^[extracted]
- Global Synchronizer は 2025 稼働 · Canton 全体を統合する調整層 ^[extracted]
- $6T+ tokenized assets · 600+ 機関(2026-Q1 自己開示) ^[extracted]
- Sub-transaction privacy はアプリケーション級のデータ隔離 · zero-knowledge proofs ではない ^[extracted]
- DAML 契約はアプリケーションを跨いで呼び出し可能 —— GS DAP の MMF 持分が Kinexys JPMD とアトミック決済可能 ^[extracted]

## Mechanism / How it works

Canton は公開チェーンでも単一銀行のプライベートチェーンでもなく、**機関内部清算のための DLT 連合**である:

- **データモデル**:application-level data confidentiality —— 各参加者は自分に関係する取引のみを見ることができ、他の参加者は当該取引の存在自体を認知できない
- **Global Synchronizer**:Canton 全体の統合調整層、Digital Asset が共同運営し、アプリケーション横断の transaction ordering を担う
- **Regulator Node モデル**:監督者を参加者として組み込み、認可された範囲内の取引を観察可能
- **アプリケーション間相互運用**:DAML 契約はアプリケーションを跨いでアトミック呼び出しが可能(GS DAP MMF 持分 ↔ Kinexys JPMD cash leg のアトミック決済)

公開チェーンとの根本的差異:Canton はデフォルト隔離 · 公開チェーンはデフォルト公開。この設計は機関顧客の「商業機密 + 監督可視性」の双方要求に直接対応する。

## Origin & evolution

Digital Asset 社は 2014 年に Sunil Hirani(ICAP)と Yuval Rooz により創立、初期は金融機関の DLT POC に専念。2017-2019 年はオーストラリア証券取引所(ASX)向けに CHESS replacement を開発(後にキャンセル)、その期間中に DAML が成熟。2019-2023 年に Canton Network のコンセプトが徐々に成熟、2024-2025 年に商業化が加速、2026-Q1 で「機関 tokenization プライベートチェーン経路」代表プラットフォームの地位に至る。

JPM Kinexys の移行経路は Canton 商業化の重要なマイルストーン:2025-11 から 2026-01 の間 [[fintech/jpmorgan-jpmd-coin|JPMD]] は Base 上で ~$200M 流通 → 2026-01 に Canton 移行を発表 → 2026-Q2 までに $500M+ 移行済、$1.5B+ が移行中、2026-Q4 に完了予定。Base 残余 $50-100M は Coinbase Custody 顧客のみ。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-daml-technical-spec|Canton DAML Technical Spec]]
- [[systems/canton-mmf-coalition|Canton MMF 連合]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton(公開/プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## Sources

- Digital Asset Canton Network whitepaper
- Canton Network (Digital Asset) — https://www.canton.network/

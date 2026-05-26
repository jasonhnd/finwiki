---
title: 日本 ECISB ライセンス —— 「資金に触れない取引ルーティング仲介」専用の軽量ライセンス
aliases: []
domain: fintech
kind: knowledge
topic: japan-ecisb-license
created: 2026-04-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-10-30
confidence: likely
tags: [fintech, needs-verification]
status: candidate
sources:
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://www.fsa.go.jp/news/r5/sonota/20231121/2023_paymentservices.html
  - https://www.fsa.go.jp/common/law/index.html
  - https://www.fsa.go.jp/en/news/
  - https://elaws.e-gov.go.jp/document?lawid=421AC0000000059
note: 2026-06 全面施行日付は会話中の推測であり、公式ソースで未確認
---

# 日本 ECISB ライセンス


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> ⚠️ **未検証**:2026 年 6 月の施行日付は会話中の議論での推測であり、金融庁/資金決済法改正公告の公式ソースで未確認。利用前に確認要。

2025 年 6 月に成立、**2026 年 6 月に全面施行(未検証)**される「資金決済法」改正案により、「電子支払手段及び暗号資産仲介業」(ECISB)ライセンスが導入された。

## 位置づけ


## レッドライン

**利用者資金の受入・カストディは絶対禁止。** 業務が利用者資金の一時的保管(ネッティング過程の暫定プール含む)に関与する場合はレッドラインを越えており、フルライセンスが必要となる。

## コア義務

- 情報セキュリティ管理
- 委託先監督
- 利用者保護
- 利用者資金に触れない

## AML 義務

ECISBO は「犯罪収益移転防止法」(APTCP)上の直接的 KYC/AML 義務を負わない。これらの責任は「所属方」(EPIESP や銀行等のメインライセンス保有者)が負う。日本 VASP 規制の全景は [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]] を参照。

## 申請プロセスとタイムライン

1. **事前面談**(3-4 か月):ギャップ分析 + 業務モデル審査
2. **正式面接**:文書審査
3. **正式申請**

### タイムライン・ブリッジ

| 時点 | アクション |
|---------|------|
| 2026 Q2 | 法案全面施行(6 月)。同時に ECISB 事前調査を開始 |
| 2026 Q2-Q3 | 事前面談(3-4 か月) |
| 2026 Q3-Q4 | 正式申請 |
| 2027 Q1 | 取得目標 |

2026 年 4 月時点で成功事例なし(法案は 2026 年 6 月の全面施行を待つ)。最初の取得 = 先行コンプラ・アドバンテージ。

## 決済系アプリへの適合

ノンカストディアル決済系アプリの 3 層適合:

1. **Gateway**(集金接続):未署名の取引指示のみを構築し、資金には触れない → ECISB 情報ルーティングの範疇
2. **Clearing**(清算):請求書集計、ネット差引額の計算、スマートコントラクト呼出指示の生成、self-custody ウォレットの署名で決済 → ECISB 情報ルーティングの範疇

self-custody 原則(秘密鍵に触れず、資金をカストディしない)は設計理念であるだけでなく、ECISB 軽量ライセンスを使用するための前提条件である。

## 所属方要件

ECISBO は EPIESP または CAESP ライセンスを保有する主体を「所属方」として必要とする。

**候補:登録 CEX**(暗号資産交換業登録を保有する登録交易所は CAESP 資格を備え、所属方条件を満たす)— 詳細な登録制度は [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]] を、自律規則は [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]] を参照。日本ライセンス体系の総合インデックス [[JapanFG/legal-financial-licenses/INDEX|日本金融ライセンス・インデックス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互換市場 —— $33 兆軌道上の 0.01% ビジネス]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
<!-- /wiki-links:managed -->

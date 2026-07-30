---
source: fintech/national-license-private-stablecoin-with-dpi-export
source_hash: 7353f599606f64c7
lang: ja
model: source-language-sync
status: machine
fidelity: ok
title: "DPI とデジタル通貨輸出 —— 検証済みレイヤーと民間ステーブルコイン仮説"
translated_at: 2026-07-30T02:03:00+09:00
---

# DPI とデジタル通貨輸出


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> インドには UPI、Aadhaar、RBI のデジタル・ルピー（e₹）という確認可能なデジタル公共インフラがある。一方、2026 年 7 月 30 日時点で参照した当局・運営主体の一次資料からは、「ARC token × Polygon」が政府認可の民間ステーブルコインとして 2026-Q1 に稼働したこと、UPI / Aadhaar / MOSIP と統合されたこと、または反ドル連盟へ輸出されることを確認できない。本稿は、確認済みの DPI と未検証の民間ステーブルコイン構想を分離する。

## 確認済みの構成要素

以下の表は [RBI の e₹ FAQ](https://www.rbi.org.in/scripts/FAQView.aspx?Id=169)、[NPCI の UPI 統計](https://www.npci.org.in/product/upi/product-statistics)、[UIDAI の認証情報](https://uidai.gov.in/en/ecosystem/authentication-ecosystem.html)、[MOSIP の公式説明](https://www.mosip.io/mosip_project) に基づく。各レイヤーは運営主体・法的性質・機能が異なり、自動的に一つの製品を構成するものではない。

| レイヤー | 確認できる状態 | この資料だけでは言えないこと | 出典 |
|---|---|---|---|
| UPI | NPCI が運営する銀行口座ベースの即時決済インターフェース。公式統計は参加銀行、件数、金額を月次で公表する | UPI 自体がブロックチェーンまたはステーブルコインであること | [NPCI](https://www.npci.org.in/product/upi/product-statistics) |
| Aadhaar | UIDAI が管理するインドの本人確認基盤。認証・eKYC の利用には法令、同意、認可された主体などの条件がある | 任意の民間トークンが Aadhaar に直接接続できること | [UIDAI](https://uidai.gov.in/en/ecosystem/authentication-ecosystem.html) |
| e₹ | RBI が発行する中央銀行デジタル通貨。リテールとホールセールのパイロットがあり、e₹ と UPI は法的・機能的に別物 | 民間発行ステーブルコイン、または Polygon 上の ARC token であること | [RBI](https://www.rbi.org.in/scripts/FAQView.aspx?Id=169) |
| MOSIP | 各国が基礎 ID システムを構築するためのモジュール型オープンソース・プラットフォーム | MOSIP がインドの Aadhaar そのもの、または ARC token の KYC 基盤であること | [MOSIP](https://www.mosip.io/mosip_project) |
| 民間ルピー・ステーブルコイン | 本稿が検討する仮説レイヤー | 政府認可、発行主体、準備資産、チェーン、稼働日、DPI 統合 | 一次資料未確認 |

## e₹ と UPI の関係

RBI は e₹ をルピーのデジタル形態、UPI を支払手段として区別している。e₹ ウォレットで UPI QR を読み取る相互運用性があっても、UPI の銀行預金が e₹ に変わるわけではなく、NPCI が e₹ を発行するわけでもない。評価時には次を分ける必要がある。

- **通貨・債務者**: 中央銀行通貨、商業銀行預金、民間発行者債務のどれか。
- **アクセス・本人確認**: UIDAI、銀行・ノンバンク、ウォレット提供者がどの役割を負うか。
- **決済メッセージと決済資産**: UPI のインターフェースと、実際に移転する e₹・銀行預金・トークンを混同しない。
- **輸出対象**: ソフトウェア、標準、運用ノウハウ、法制度、通貨そのものを区別する。

## 「国家ライセンス型民間ステーブルコイン」を検証する最低条件

このモデルを実在案件として記載するには、少なくとも次の一次資料が必要である。

1. 中央銀行または金融監督当局による発行者の認可・登録。
2. 発行主体、償還請求権、準備資産、監査、破綻時隔離を定める法令または商品開示。
3. 使用チェーンとコントラクトを結び付ける発行者の公式情報。
4. UPI / Aadhaar / MOSIP の各運営主体による統合確認。
5. クロスボーダー利用について、相手国当局と運営主体が公表した合意。

これらがない段階で「世界初」「単一発行者」「30 か国以上の協定」「35% の世界 GDP」「反米ドル連盟」などの数値や政策目的を事実として扱わない。

## 分析上の利用範囲

DPI とデジタル通貨を組み合わせる設計は比較研究の対象になり得る。ただし、インドの e₹、ブラジルの DREX、ナイジェリアの eNaira、BIS の mBridge は発行主体、法的性質、参加者、実装段階が異なる。「CBDC が伸び悩んだため民間ステーブルコインへ転換した」「外部 L1 を採用した」「非ドル圏を形成する」といった因果は、各当局の公表で確認してから記載する。

[IMF の India Stack 分析](https://www.imf.org/en/Publications/fintech-notes/Issues/2023/06/29/Stacking-up-the-Benefits-Lessons-from-Indias-Digital-Journey-520125) は、ID、決済、データ交換などの公共レイヤーを組み合わせる効果と政策課題を検討しているが、特定の民間ステーブルコインを承認する資料ではない。DPI 輸出を評価する場合も、技術採用、政府間協力、商用導入、通貨圏形成を別々の証拠で追跡する。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン 5 極地政学対立]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号ドル化]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
<!-- /wiki-links:managed -->

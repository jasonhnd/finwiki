---
title: インド反ドル DPI 連合 — UPI / MOSIP / ARC 三軸ナラティブ
aliases: [india-anti-dollar-dpi, upi-mosip-arc-alliance, インド反ドル連合, india-dpi-anti-usd]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [fintech, india, dpi, upi, mosip, arc, polygon, anti-dollar, digital-sovereignty]
sources:
  - https://www.npci.org.in/what-we-do/upi/product-statistics
  - https://www.mosip.io/
  - https://polygon.technology/blog
  - https://www.rbi.org.in/Scripts/PublicationsView.aspx?id=22329
  - https://www.imf.org/en/Publications/fintech-notes/Issues/2023/06/29/Stacking-up-the-Benefits-Lessons-from-Indias-Digital-Journey-520125
status: active
---

# インド反ドル DPI 連合 — UPI / MOSIP / ARC 三軸ナラティブ

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> インドの米ドル・ステーブルコインへの公式反対立場は孤立した姿勢ではなく、**完全な反ドル DPI 連合ナラティブ**の一部である:**UPI クロスボーダー化**(既に 8 カ国へ拡大)+ **MOSIP グローバル輸出**(20 カ国展開)+ **ARC ルピー・ステーブルコイン**(Polygon オンチェーン、政府背景)= 新興市場における USDT/USDC の完全な代替方案を提供。これは米国 GENIUS Act §501 / 三円 MRA フレームと直接ヘッジする「デジタル非同盟」(Digital Non-Alignment)ルートである。

## Key facts

- **UPI クロスボーダー**: インド-シンガポール回廊年間取引額 >$10 億;UPI 受入国 8 カ国(UAE / シンガポール / ブータン / ネパール / モルディブ / モーリシャス / フランス / スリランカ)
- **UPI 国内ボリューム**: 2026-03 単月 226.4 億件 · 29.53 兆ルピー(IMF 認定 = グローバル・リアルタイム決済の 49%)
- **MOSIP 輸出**: 20 カ国展開(エチオピア / フィリピン / モロッコ / シエラレオネ / トーゴ / スリランカ …)· アクティブユーザー 1.21 億
- **ARC ステーブルコイン**: Polygon × Anq 共同開発 · 2026-Q1 ローンチ · 企業アカウントのみ mint · RBI LRS と互換
- **政策姿勢**: 2023 インド G20 議長国として IMF-FSB 統合論文を推進したが、GENIUS Act の単純な模倣は拒否
- **Sandeep Nailwal**: Polygon CEO + ARC オペレーター、X フォロワー 250 万人超、本連合の人格的代弁者
- **Nithin Kamath(Zerodha)**: 2026-05-12 公式表明「米ドル背景のステーブルコインはインドにとって悪いアイデア」 —— インドのトップ fintech KOL が共鳴
- **JioCoin**: Reliance Jio 4.5 億ユーザーの Polygon オンチェーンロイヤルティ Token、「非取引性」分類で 30% キャピタルゲイン税を回避

## Mechanism / How it works

```
        インド反ドル DPI 連合(三軸)
        │
   ┌────┼──────┬────────────────┐
   ▼    ▼      ▼                ▼
  UPI   MOSIP  ARC          政策フレーム
  │     │      │            │
  決済  ID     ステーブル    反 GENIUS
  │     │      │            │
 クロス 8  20 カ国 Polygon × Anq  RBI / 財務省協調
  カ国   輸出   2026-Q1        DPI 優先
```

**三軸インターロック・ロジック**:

1. **UPI(決済層)**: クロスボーダー直結で「ドル仲介が必要」なシナリオを除去。インド-UAE / シンガポール回廊は既に USD を迂回
2. **MOSIP(ID 層)**: Aadhaar 技術をグローバルサウス 20 カ国にオープンソース化、中国「デジタル・シルクロード」と対照を形成 —— 新興市場の ID 基盤インフラを掴む
3. **ARC(通貨層)**: Polygon オンチェーン INR ステーブルコイン、**企業アカウントのみ mint + ホワイトリスト swap + LRS 互換** —— RBI に「USDT/USDC 代替」のコンプライアンス回答を提供、財務省が米ドル・ステーブルコイン合法化を推進する政治圧力を弱める

**反ドル・ロジックチェーン**:USDT/USDC がインドで「事実上のドル化」チャネルとなる → ルピー購買力を弱める → 通貨主権に影響 → 国内(ARC)とクロスボーダー(UPI)で双方向に堰き止めねばならない。具体的な国家許可型ステーブルコイン + DPI 輸出モデルは [[fintech/national-license-private-stablecoin-with-dpi-export|国家許可型民間ステーブルコイン + DPI 輸出]] を参照。

## Origin & evolution

```
2010 年代   Aadhaar 推進 → 14.3 億登録
2016       UPI ローンチ(NPCI / RBI)
2018       MOSIP 開始(IIITB ホスト)
2023-02    UPI × Singapore PayNow クロスボーダー連携
2023       インド G20 議長国 · IMF-FSB 統合論文
2024-02    UPI × UAE AANI 協定
2025-01    Polygon × Jio 4.5 億ユーザーの独占協業
2025-06    Sandeep Nailwal が Polygon Foundation CEO に就任
2025-07    UPI-PayNow 拡大、インド銀行 19 行追加
2025-10    Coinbase インド再上陸(USDC 主導)
2026-01    Polygon Open Money Stack 発表
2026-Q1    ARC ルピー・ステーブルコイン ローンチ(Polygon × Anq)
2026-05-12 Nithin Kamath(Zerodha)反 USD ステーブルコイン公式表明
```

**戦略的進化**: 初期(2010 年代-2023)は国内 DPI 構築;2023 インド G20 議長国後に**対外輸出**を開始;2025-2026 Polygon × ARC が「オンチェーン層」を補完、ここから DPI 連合は「国家決済基盤インフラ」から「完全な反ドル金融スタック」へとアップグレード。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[business/sandeep-nailwal-polygon-india-dpi-pattern|Sandeep Nailwal · Polygon × インド DPI モデル]]
- [[fintech/three-circles-stablecoin-mra-framework|三円ステーブルコイン MRA フレームワーク]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン × チェーン × 主権通貨三層分流]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

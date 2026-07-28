---
source: fintech/three-circles-mra-2030-economic-scale
source_hash: 104a250f961f22c4
lang: ja
model: canonical-ja-source-sync
status: machine
fidelity: ok
title: "三円規制圏の 2030 シナリオ分析 · MRA 未成立を前提にした試算"
translated_at: 2026-07-28T19:25:32.800Z
---

# 三円規制圏の 2030 シナリオ分析 · MRA 未成立を前提にした試算

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 本稿の **$130B** と **$384B** は、公式予測や観測済みフローではなく、米国・EU・日本の規制圏が将来相互接続される場合を考えるためのシナリオ入力である。確認できる公式事実は、米国で GENIUS Act（S.1582）が 2025-07-18 に成立し、EU で MiCA が適用され、日本が電子決済手段制度を運用していること、そして日米当局がデジタル資産を含む対話や国際的に整合的な監督枠組みの必要性を公表していることまでである。今回確認した公式資料には、米日・米欧・三者間のステーブルコイン相互承認協定（MRA）の署名、発効日、または自動 passporting は記載されていない。^[GENIUS Act status: https://www.congress.gov/bill/119th-congress/senate-bill/1582; MiCA: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114; FSA-SEC dialogue (2026-02-27): https://www.fsa.go.jp/en/news/2026/20260227/20260227.html; FSA minister remarks (2026-04-17): https://www.fsa.go.jp/en/conference/minister/2026/20260417.html]

## Key facts

- **分析入力 A**: 2030 年の規制圏残高を米国 $80B + EU $15B + 日本 $35B = $130B と仮置きする。これは公式予測ではない。^[FinWiki scenario assumption; not an observed value or official forecast.]
- **分析入力 B**: 比較用の $384B/年も仮置きであり、国別の実測フローとして引用してはならない。^[FinWiki scenario assumption; not an observed value or official forecast.]
- **公式ベースライン**: GENIUS Act、MiCA、日本の電子決済手段制度は別個の制度として存在するが、確認済み資料は三者間 MRA の成立を示していない。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114; https://www.fsa.go.jp/en/policy/sftl/index.html]

## Mechanism / How it works

コンプライアンスサークルとグレーサークルの市場切り分けメカニズム：

```
規制圏シナリオ($130B / 2030):      圏外フロー仮説($384B / 年):
├── 機関カストディ(BUIDL/銀行)     ├── 制裁回避(ロシア/イラン)
├── CME 証拠金                     ├── リテール送金(ナイジェリア/フィリピン)
├── 銀行 RTGS 相互接続             ├── グレー商人決済
├── §501 チェーン級 denylist 強制  ├── USDT on Tron P2P
└── 強い KYC / AML                 └── KYC なしのオンチェーン送金

切り分けロジック：規制要件 + ユーザーシーン + チャネル粘着性が hard wall を形成
                  · 三円拡張はグレーサークルを「食う」ことはない —— 2 つの市場
```

**観測事実と仮説を分離する**：
- 2026-02 の FSA-SEC 対話では暗号資産・デジタル資産と多国間連携が議題になったが、ステーブルコイン MRA の署名は公表されていない。^[https://www.fsa.go.jp/en/news/2026/20260227/20260227.html]
- 2026-04 の金融担当相発言は、国際的に整合的な規制・監督枠組みの議論が必要だと述べた段階である。^[https://www.fsa.go.jp/en/conference/minister/2026/20260417.html]
- 相互承認、passporting、2027-2028 の成立時期は将来シナリオであり、確定した政策日程ではない。

## Origin & evolution

[[fintech/genius-act-501-denylist-mandate|GENIUS Act]] は S.1582 として 2025-07-18 に Public Law 119-27 となり、[[fintech/mica-overview|MiCA]] と日本の電子決済手段制度とは別の国内・地域制度として運用される。本稿の $130B は「将来、比較可能な制度判断と相互接続が進む」という未確定条件を置いた試算であり、$80-100B の下方ケースも同じくモデル出力である。MRA が成立した事実や成立予定を示す数値として利用してはならない。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114; https://www.fsa.go.jp/en/policy/sftl/index.html]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン級 Denylist]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号 USD 化]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
<!-- /wiki-links:managed -->

## Sources

- U.S. Congress — GENIUS Act, S.1582 / Public Law 119-27: https://www.congress.gov/bill/119th-congress/senate-bill/1582
- EUR-Lex — Regulation (EU) 2023/1114 (MiCA): https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114
- Japan FSA — stablecoin / funds-settlement policy materials: https://www.fsa.go.jp/en/policy/sftl/index.html
- Japan FSA / SEC dialogue (2026-02-27): https://www.fsa.go.jp/en/news/2026/20260227/20260227.html
- Japan FSA minister remarks (2026-04-17): https://www.fsa.go.jp/en/conference/minister/2026/20260417.html
- The $130B / $384B values in this entry are FinWiki scenario assumptions, not source-reported observations.

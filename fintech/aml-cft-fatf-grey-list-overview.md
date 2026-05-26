---
title: FATF グレーリスト / ブラックリスト · AML/CFT 国別評価メカニズム概要
aliases: [fatf-grey-list-overview, FATF jurisdiction list, AML/CFT 評価概要]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, aml, cft, fatf, jurisdiction]
sources:
  - https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html
  - https://www.fatf-gafi.org/en/publications/Mutualevaluations/Mutual-evaluations.html
  - https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html
  - https://www.imf.org/external/np/leg/amlcft/eng/
  - https://www.worldbank.org/en/topic/financialmarketintegrity
status: candidate
---

# FATF グレーリスト / ブラックリスト · AML/CFT 国別評価メカニズム概要


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> FATF（金融活動作業部会）は 40 Recommendations + 11 Immediate Outcomes により各国の AML/CFT 体系を評価し、年 2 回 jurisdiction list を更新する: **Black list**（Call for Action · 北朝鮮 / イラン / ミャンマー 2026-05）、**Grey list**（Increased Monitoring · 23 か国 2026-05）。Recommendation 15（VASP） + 16（Travel Rule $1k threshold）は暗号領域を直接的に拘束する 2 つの中核条項。

## Key facts

- FATF は 1989 年に G7 が設立 · パリに事務局 · 41 加盟国 + 9 地域機関（FSRB） ^[extracted]
- 法的地位は non-binding だが、IMF/World Bank の Article IV + 二国間制裁を通じた de facto enforcement を実現 ^[extracted]
- 評価サイクル: 各国 ~7-10 年ごとに Mutual Evaluation Report (MER) + 中間 follow-up ^[extracted]
- 2026-05 リスト: 黒 3（DPRK / Iran / Myanmar） + 灰 23 ^[extracted]
- 香港 2019 MER: TC 35/40 + Effectiveness 9/11 · グローバル最上位層 ^[extracted]
- シンガポール 2016 MER: TC 36/40 + Effectiveness 10/11 ^[extracted]
- USA 2016 MER: TC 31/40 + Effectiveness 7/11（中位）· 2024-25 follow-up 完了 ^[extracted]

## Mechanism / How it works

FATF 評価のデュアル・トラック・アーキテクチャ: **技術的コンプライアンス (TC)** は 40 Recommendations の法的実装状況を評価、**有効性 (Effectiveness)** は 11 Immediate Outcomes の実効性を評価する。各国は約 7-10 年ごとに 1 回 Mutual Evaluation Report (MER) を完了し、その間に follow-up を挟む。2 つのリストの更新ロジック: **Call for Action (Black list)** は強制的な対抗措置 + 強化デューデリ; **Increased Monitoring (Grey list)** は継続モニタリング + action plan による是正。

暗号関連の中核条項は 2 つ: **R.15 (Virtual Assets, 2019-10 改訂)** は VASP（取引所 / ウォレットカストディ / ICO プラットフォーム / SC issuer）に対しライセンス取得 / 登録を要求 · R.10-21 の AML/CFT フルセットを適用。**R.16 (Travel Rule)** は USD/EUR 1,000 以上の VA 移転に対し originator + beneficiary 情報の伝達を要求 · VASP-to-VASP の情報共有が強制（詳細は [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概要]]）。VASP のグローバル横断比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリックス]] 参照。

## Origin & evolution

FATF は 1989 年 G7 パリ・サミットで設立、初期はマネロン対策に焦点。2001 年の 911 以降、テロ資金供与対策へ拡張。2012 年に 40+9 を統合し 40 Recommendations を発行。2019-10 G20 大阪で暗号資産分野への拡張（R.15 + R.16 の改訂）を発表し、VASP をグローバル AML/CFT フレームワークに組み込んだ。2025-09 の FATF Targeted Update on VA は、75% の法域が依然として R.15/R.16 を完全実装していないと指摘、self-hosted wallet + DeFi リスクに焦点を当て、RegTech によるクロスボーダー Travel Rule 通信標準を推進している。日本側の VASP 規制タイムラインは [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]] 参照。

## Counterpoints

- FATF 評価の技術性 ≠ 実際の規制能力 · 一部の高評価国でも執行レベルでは依然として脆弱
- 「Grey list」脱却は時に政治的圧力の結果（トルコ 2024 脱却プロセスには G20 外交ゲームが含まれる）
- VASP 定義のあいまい化により、純粋なスマートコントラクト DeFi はいまだに灰色領域に残存

## Open questions

- 2026 年後半に FATF は米国を follow-up enhanced に格上げするか（2016 年 MER 中位評価のため）?
- self-hosted wallet 規制基準は R.15 の強制条項に書き込まれるか?
- DeFi は独立した R 条項でカバーされるのか、VASP として解釈し続けるのか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List クロスボーダー・コンプライアンス含意]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト型通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources


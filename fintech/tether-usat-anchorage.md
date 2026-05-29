---
title: Tether USAT · Anchorage 提携の米国コンプライアンスブランチ · USDT 国際/国内デュアルライン分離
aliases: [tether-usat-anchorage, USAT, Tether USA, Tether USAT stablecoin, Anchorage USAT]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: possible
tags: [fintech, stablecoin, tether, usat, anchorage, genius-501, us-compliance, usdt-bifurcation, federal-charter]
status: candidate
sources:
  - https://tether.to/en/
  - https://tether.to/en/transparency
  - https://www.anchorage.com/
  - https://www.coindesk.com/policy/2024/tether-anchorage-usat-announcement
  - https://www.theblock.co/post/tether-usat-anchorage-genius-act
  - https://www.occ.gov/topics/charters-and-licensing/interpretations-and-actions/
---

# Tether USAT · Anchorage 提携の米国コンプライアンスブランチ · USDT 国際/国内デュアルライン分離

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/tether-business-model-short-treasury-yield|Tether USDT 経済学]] for the parent product whose bifurcation USAT represents, and with [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the U.S. regulatory framework that forced Tether to design a separate U.S.-compliant entity.

> [!info] TL;DR
> **USAT** は Tether が 2024-2025 年に発表した米国コンプライアンスブランチステーブルコインで、**Anchorage Digital**（米国初の連邦ライセンス保有暗号銀行、OCC が 2021 年に conditional national trust charter を付与）と提携して発行、目標は [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] フレームワーク下で米国コンプライアンスホワイトサークル資格を取得することにある。これにより USDT は「単一グローバルオフショア商品」→「USDT（国際オフショア）+ USAT（米国コンプライアンス）」デュアルライン分離となる。USAT 準備金は Anchorage 米国カストディ + Cantor Fitzgerald ポートフォリオ運用を経由、**USDT 国際版とは資産分離**される。2026-05 時点で USAT は依然製品ローンチ初期（mainnet ローンチ時期は未確定）だが、発表自体が Tether の米国規制圧力への戦略的対応であり、USAT は USDC / USDB / PYUSD と「四角ホワイトサークル」構図を形成する。

## Key facts

- 公表：2024-Q4 Tether と Anchorage Digital が共同で USAT を発表、目標は GENIUS Act 準拠発行 ^[extracted]
- 発行構造：Anchorage Digital Bank N.A.（OCC 連邦国家信託銀行）が issuer of record として · Tether がブランド + 技術を提供 ^[extracted]
- ポートフォリオ運用：**Cantor Fitzgerald**（Tether の歴史的準備金 Custodian、USDT メイン UST ブローカーでもある）^[extracted]
- 準備金：100% 短期国債 + 現金 · Anchorage 直接カストディ · **USDT 国際版とは資産完全分離** ^[extracted]
- USDT 国際版（legacy）：流通 **$145B+**（2026-Q2 でグローバル 1 位）· 登記地 英領バージン諸島 / エルサルバドル（2024 本社を SV へ移転）^[extracted]
- USAT と USDT 国際版の「二者択一」ユーザー配信：米国 KYC ユーザー → USAT、非米国 / permissionless ユーザー → USDT ^[extracted]
- Anchorage Digital：OCC 2021-01 に conditional national trust charter を付与、米国初の連邦ライセンス保有暗号銀行 ^[extracted]
- Tether 戦略提携パートナーの 2024-2025 拡張：SoftBank（CEO Masayoshi Son）、Howard Lutnick（Cantor Fitzgerald、後にトランプ政権商務長官入閣）^[extracted]

## Mechanism / How it works

USAT のコアモデル = **「Tether が米国連邦銀行を通じてコンプライアンスホワイトサークル資格を取得」** —— Tether 自身が非米国法人である以上、GENIUS §501 資格を直接取得できない（[[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] は「適格発行体」を米国登記銀行 / 連邦特許 PSP / OCC 信託銀行と明示）、**Anchorage を issuer of record とする** ことで米国連邦ライセンスを借りる。これは [[fintech/circle-usdc-stablecoin|Circle USDC]]（自社で NY DFS BitLicense + IPO 経路を取得）との対比となる：Circle は「自営米国コンプライアンス」、Tether USAT は「借殻米国コンプライアンス」。

経済モデル上、USAT と USDT 国際版の主要差異：
- **準備金完全分離**：USAT 準備金は Anchorage 米国カストディ、USDT 準備金は Cantor の複数司法管轄 → **USDT 国際版の法的リスク / 政治的リスクが USAT に伝染することを回避**
- **償還経路**：USAT ユーザー（米国 KYC）は Anchorage に直接償還可能；USDT ユーザー（非米国 / permissionless）は Tether 既存の償還経路を辿る
- **流通チャネル**：USAT は米国 KYC/AML に適合するオンチェーン USD として設計され、主に米国ライセンス CEX / ライセンスフィンテック向け；USDT 国際版はグローバルオフショア + 新興市場リテールツールとして継続
- **OFAC コンプライアンス**：USAT は OFAC の厳格な凍結を実装する必要があり、[[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze]] は USAT 上で USDT 国際版よりも厳しい

戦略上、USAT は Tether が [[fintech/genius-act-501-denylist-mandate|GENIUS §501 denylist mandate]] に対する的を絞った応答 —— **USAT を作らなければ、USDT 国際版は米国ライセンス CEX / フィンテックで完全に上場廃止される可能性があり**、Tether の USD 市場における構造的喪失を引き起こす。[[fintech/regulatory-reset-2025-usa-crypto-policy|2025 米国暗号資産政策 reset]] のタイムラインと整合する。

## Origin & evolution

2014 Tether 創業（Bitfinex 関連法人）→ 長期にわたりオフショアステーブルコインとして運営。2017-2023 多回の規制摩擦（NY AG 調査 / 準備金充足性論争）→ ただし流通量は依然 $1B → $90B+。**2023-09 Tether が本社を正式にエルサルバドルへ移転**（Bukele 政権が monetary openness 規制環境を提供）。2024-Q1 Cantor Fitzgerald（Howard Lutnick）が Tether 準備金の主要運用者 + UST ブローカーであることを公式確認。**2024-Q4 Tether と Anchorage Digital が共同で USAT を発表** = 米国コンプライアンスブランチ戦略。2025-01 Howard Lutnick がトランプ政権商務長官に就任 → Tether の米国政治関係が歴史的ピークへ。2025-09 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 施行]] → USAT 設計は §501 資格要件に適合する必要。2026 USAT mainnet ローンチ時期は依然未確定（Tether 公式は複数回延期）。[[fintech/jpmorgan-jpmd-coin|JPMD]] / [[fintech/stripe-usdb-bridge-stablecoin|USDB]] と米国コンプライアンスホワイトサークル市場で「四角構図」を形成：**USDC（老舗）+ JPMD（銀行 TD）+ USDB（決済会社）+ USAT（Anchorage コンプライアンス借入）**、すべて GENIUS §501 後の米国コンプライアンスホワイトサークル市場シェアを争奪している。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/tether-business-model-short-treasury-yield|Tether グレーゾーン / USDT 経済学]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC 信託銀行連邦アービトラージ]]
- [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze 先例]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|2025 米国暗号資産政策 reset]]
- [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号 USD 化パターン]]
<!-- /wiki-links:managed -->

## Sources

- https://tether.to/en/ — Tether 公式ホームページ
- https://tether.to/en/transparency — Tether transparency / reserve attestations
- https://www.anchorage.com/ — Anchorage Digital ホームページ
- https://www.coindesk.com/policy/2024/tether-anchorage-usat-announcement — CoinDesk USAT 公表報道
- https://www.theblock.co/post/tether-usat-anchorage-genius-act — The Block GENIUS Act と USAT 分析
- https://www.occ.gov/topics/charters-and-licensing/interpretations-and-actions/ — OCC charter actions（Anchorage charter を含む）

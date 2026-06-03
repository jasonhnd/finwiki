---
source: fintech/fatf-travel-rule-overview
source_hash: ce86c0827eac721b
lang: ja
status: machine
fidelity: ok
title: "FATF Travel Rule · R.16  VASP $1,000  KYC情報伝達"
translated_at: 2026-06-02T13:21:55.070Z
---

# FATF Travel Rule · R.16  VASP $1,000  KYC情報伝達

## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられる。隣接する文脈では[[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]と、より広いシステム境界では[[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]と併読する。

> [!info] 要約
> FATF Recommendation 16 は、グローバルVASP業界のAML/CFT統一情報伝達基準である。VASP送金がUSD/EUR 1,000 以上の場合、送金人と受取人のKYC情報共有が必須となる。これは1996 BSA Travel Ruleを暗号資産に移植したものである。Notabene / TRISA / Sygna / TRPなどのBTS層は強制コンプライアンス基盤となり、Travel Ruleプロトコルへ接続しなければVASP業務資格を得られない。

## 主要事実

- FATF 1989 G7 設立 · 40 加盟国 + 9 地域組織 ^[extracted]
- R.15 + R.16 暗号拡張は 2019-06 G20 Osaka summit ^[extracted]
- R.16 閾値: USD/EUR 1,000 のグローバル最低線 ^[extracted]
- 1996 BSA Travel Rule（31 CFR §1010.410(f)）は、もともと$3,000 以上のwireのみをカバー ^[extracted]
- 2019-05 FinCEN FIN-2019-G001 がBSA Travel RuleのCVC適用を明確化 ^[extracted]
- 2024 米国FATF MERは「Largely Compliant」 ^[extracted]
- 2026-Q3 FinCEN は米国閾値を $3,000 から $1,000 に引下案 (FATF と整合) ^[extracted]

## 仕組み / 動作原理

R.16 は、USD/EUR 1,000 以上のVASP送金について、**送金人**の氏名 + 口座番号 / ウォレットアドレス、**受取人**の氏名 + 口座番号 / ウォレットアドレスの共有を要求する。VASP間の情報共有を強制する点が中核である。最大の技術的課題は、CVC送金がしばしば金融機関ではなくウォレットアドレスへ送られることであり、「受取金融機関」という概念の欠如がBTS（Business-To-Service）プロトコル層を生んだ。

**主要 BTS プロトコル**:
- **Notabene** (米国 2020 · 最大シェア):Bitstamp / Luno / OKX
- **TRISA** (オープンソース · 分散型 TLS):Binance 一部
- **Sygna Bridge** (CoolBitX · アジア太平洋優先):韓国 / 台湾 VASP
- **TRP** (TRP Group · OpenAPI):Coinbase / Kraken / Gemini
- **Shyft** (Token インセンティブ · オンチェーン 探索):初期プレイヤー
- **OpenVASP** (欧州 · EVMベース):初期欧州

相互運用問題:プロトコル相互非互換 → 複数接続または大ネットワーク選択が必須。Notabene + TRP の二プロトコルが 2026 年グローバル VASP 流量の約 80% をカバー。日本 VASP 自主規制側における Travel Rule の落とし込みは [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制概観]]、日本 VASP タイムラインは [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]] を参照。

## 起源と展開

1996 にFinCEN + FedがBSA Travel Rule（31 CFR §1010.410(f)）を共同発表し、当初は$3,000 以上のwireのみをカバーした。2019-05 にFinCEN FIN-2019-G001 がBSA Travel RuleのCVC適用を明確化した。2019-06 のG20 Osaka summitでFATFがR.15  + R.16 暗号拡張を発表し、グローバル最低線が確立した。2024-12-30 EU TFR 2023/1113 はEU閾値をEUR 0 に設定した（最厳格）。2026-Q3 にFinCENは米国閾値を$3,000 から$1,000 へ引き下げる案を示した（FATFと整合）。クロスボーダー四層スタックの詳細は[[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー stack]]を参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー四層 stack]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
<!-- /wiki-links:managed -->

## 出典

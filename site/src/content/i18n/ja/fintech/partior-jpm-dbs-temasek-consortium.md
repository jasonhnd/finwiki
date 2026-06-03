---
source: fintech/partior-jpm-dbs-temasek-consortium
source_hash: 68c870bbc2b6face
lang: ja
status: machine
fidelity: ok
title: "Partior · JPM / DBS / StanChart / Temasek コンソーシアム · シンガポール錨地のクロスボーダー・ホールセール決済"
translated_at: 2026-06-02T13:21:55.043Z
---

# Partior · JPM / DBS / StanChart / Temasek コンソーシアム · シンガポール錨地のクロスボーダー・ホールセール決済

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] に位置づけられる。[[fintech/fnality-wholesale-settlement|Fnality]]（英米側マルチバンク・ホールセール）と [[fintech/jpm-onyx-wholesale-network|JPM Onyx]]（シングルバンク TD）で ホールセール決済コンソーシアムの三角形を読み、さらに [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 戦略含意]] と合わせて Partior のシンガポール錨地構造を読む。

> [!info] 要約
> Partior Pte Ltd は 2021-04 に **JPMorgan + DBS + Temasek** の 3 者が共同設立したシンガポールのホールセール・クロスボーダー決済会社で、2024 年に **Standard Chartered** が第 4 主要株主として出資、**iFAST** 等フィンテック企業も加入してエコシステムを拡大。メインネットは 2021-08 稼働、初期は USD / SGD チャネル、現在は USD / SGD / EUR / GBP / JPY の 5 通貨に拡張。Partior は [[fintech/multi-megabank-consortium-governance|複数大手銀行連邦]] + [[fintech/singapore-mas-payment-services-act-overview|MAS PSA 規制]] の産物で、**Fnality（英米 / 欧州）と「アジア・ホールセール決済」ルートを形成**し、[[fintech/jpm-onyx-wholesale-network|JPM Onyx]] シングルバンク TD ルートと対比される。

## 主要事実

- 登記地: Singapore · 2021-04 創設(JPMorgan + DBS + Temasek の 3 者各 ~$33M シード)^[extracted]
- メインネット稼働:2021-08 · 初の USD ↔ SGD クロスボーダー決済 24×7 即時 ^[extracted]
- 2024 Standard Chartered 出資 = 第 4 主要株主(~$80M シリーズ B)^[extracted]
- 2025-Q3 iFAST + 多数のアジア銀行 / FX プロバイダーがネットワークに加入(メンバー 30+)^[extracted]
- 対応通貨:USD / SGD / EUR / GBP / JPY(2026-Q1 INR / IDR 追加予定)^[extracted]
- 累計クロスボーダー決済:~$1.5T(稼働以来累計、2026-Q1 データ)^[extracted]
- 技術スタック:Hyperledger Fabric 派生 + モジュール式 PvP / DvP / アトミック FX スワップ ^[extracted]
- CEO: Humphrey Valenbreder（元 SWIFT） · 総従業員 ~80（2026-Q1）^[extracted]

## 仕組み

Partior のコアモデル = **「アジア・クロスボーダー・ホールセール決済の 24×7 即時ネットワーク」**だが、[[fintech/fnality-wholesale-settlement|Fnality]]（オンチェーン中央銀行準備金）と異なり、Partior は**中央銀行準備金を直接トークン化せず**、商業銀行預金 + JP Morgan / DBS / StanChart のバランスシート相互ロック方式で「準決済」を実現する（TD に類似するが、複数銀行のコンソーシアムをまたぐ）。各クロスボーダー決済は、送付行の自国通貨貸方記帳 + 受取行の目的通貨借方記帳 + Partior ネットワーク上の原子的 PvP コミットメントを同時に行い、T+0 ファイナリティを発生させる。**重要なイノベーション**: 単一 RTGS に依存せず、**商業銀行コンソーシアム + オンチェーン原子的決済で SWIFT + Nostro/Vostro の多日決済を置換**する。

技術スタックは Hyperledger Fabric 派生（JPMorgan Onyx Quorum / Fnality Besu / Canton と「アジア vs 欧米」技術スタック分流を形成）で、[[systems/canton-overview|Canton Network]] / [[systems/cosmos-ibc-for-financial-institutions|Cosmos IBC]] とのクロスチェーン調整にブリッジング要件がある。Partior の「原子的 FX スワップ」モジュール（2024-Q3 稼働）= 24×7 クロス通貨 PvP は、**[[fintech/fnality-wholesale-settlement|Fnality]] のクロス通貨 PvP と直接競合**するが、ルートは異なる（Partior = 商業銀行預金、Fnality = 中央銀行準備金）。

戦略上、Partior は MAS Project Guardian / Ubin シリーズ（[[fintech/bis-project-guardian-overview|BIS Project Guardian]]）の商用化サンプルである。シンガポールは自身を **「アジアのホールセール決済とトークン化資産の国際ハブ」** として位置づけ、Partior は同戦略における決済層を担う。[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]（CN/HK/Thailand/UAE 中央銀行主導）と異なり、Partior は商業銀行主導であり、**両者はアジア・クロスボーダー決済市場で実質的に競合**する。mBridge は「中央銀行 multi-CBDC」ルート、Partior は「商業銀行コンソーシアム + Singapore MAS ライセンス」ルートを進む。

## 起源と展開

2017-2020 年 JPMorgan Onyx + DBS DigiBank + Temasek が各々ホールセール決済 / トークン化資産を実験。**2021-04 3 者が共同で Partior Pte Ltd を設立**し、シンガポール MAS 規制下のホールセール決済ネットワーク運営者として登記。2021-08 メインネット稼働、USD/SGD 双通貨。2022 EUR/GBP 追加。**2024-Q1 Standard Chartered 戦略出資**により、「3 者」から「4 者」へ拡大し、Partior はシンガポールを錨地とする国際マルチバンク・ネットワークとなる。2024-Q3 アトミック FX スワップ稼働 = 24×7 クロス通貨 PvP。2025-Q3 iFAST 等フィンテック・ネットワークメンバーが拡張し、Partior を純銀行ネットワークから「銀行 + フィンテック + アセットマネージャー」混合ネットワークへ進化させる目標。2026-Q1 累計クロスボーダー決済額 ~$1.5T、[[fintech/jpm-onyx-wholesale-network|JPM Onyx Kinexys]] $1.5T 累計と同オーダー、**ただし Partior はマルチバンク・コンソーシアムであり、ここがルート差異**。2026-Q1 INR / IDR 追加計画は、Partior が「新興アジア」（インド / インドネシア）クロスボーダー・チャネルへの対応を試みる兆しで、[[fintech/india-anti-dollar-dpi-alliance|India DPI 反米ドル連盟]] に対して「アジア商業銀行代替案」を探っている。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]]
- [[fintech/singapore-mas-payment-services-act-overview|Singapore MAS PSA]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 戦略含意]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
- [[fintech/india-anti-dollar-dpi-alliance|India DPI]]
<!-- /wiki-links:managed -->

## 出典

- https://www.partior.com/ — Partior 公式ホームページ
- https://www.partior.com/news — Partior ニュース
- https://www.mas.gov.sg/news/media-releases/2021/partior-launch — MAS の Partior 始動公式発表
- https://www.dbs.com/newsroom/Partior_launch — DBS の Partior 発表
- https://www.standardchartered.com/news/partior — Standard Chartered の Partior 出資発表

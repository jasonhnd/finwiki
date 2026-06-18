---
source: financial-regulators/boj-payment-settlement-dept
source_hash: e35fcfe6936048b7
lang: ja
status: machine
fidelity: ok
title: "決済機構局 (BoJ Payment and Settlement Systems Department)"
translated_at: 2026-06-18T23:59:13.068Z
---

# 決済機構局 (BoJ Payment and Settlement Systems Department)

## ウィキ経路
本項目は [[financial-regulators/INDEX|financial-regulators INDEX]] の下に位置する。日銀の市場オペレーションの対応部局として [[financial-regulators/boj-financial-markets-dept|金融市場局]] と、プルーデンス側の局として [[financial-regulators/boj-financial-system-dept|金融機構局]] と併せて読むこと。より広い決済システムについては、[[banking/INDEX|banking landscape]] と [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] を経由してアンカーすること。

## 要約

決済機構局（Payment and Settlement Systems Department）は、日本銀行の内部部局であり、日銀ネットの運営、決済システム政策、および日本における主要な金融市場インフラ（FMI）の監視を担う。日本の中央銀行マネーのレールを運営し、リテール資金決済について全銀システムと連携する部局である。

JapanFG にとって、本部局は日銀ネットに依存するすべての決済・清算・BaaS・短資（タンシ）ページの公式の対応先である。すなわち、リテール層より上のほぼすべてのインターバンク・フローの対応先となる。

## 1. 機能 / スコープ

日銀の英文組織図は、決済機構局を以下を担う部局として掲げている。

- 日銀ネット（Bank of Japan Financial Network System）の運営。これは当座預金振替の RTGS 決済および JGB の DvP 決済を提供する。
- 決済システム・アーキテクチャに関する政策。流動性節約機能、稼働時間、BCP、および日銀ネットと外部 FMI との接続設計を含む。
- 日本にとってシステミックに重要な FMI の監視。全銀ネットのリテール資金移動システム、JSCC のクリアリング、ならびに JASDEC および日銀における JGB 振替決済システムを含む。
- 決済・清算統計の公表。『決済動向（Payment and Settlement Statistics）』のリリース、および不定期の『決済システムレポート（Payment and Settlement Systems Report）』を含む。
- 主要中央銀行との、PvP・CLS・FX 決済リスクといった論点に関するクロスボーダー決済の連携。これは BIS-CPMI の作業に関して [[financial-regulators/boj-international-dept|国際局]] と重なる。

内部連携は密である。本部局は [[financial-regulators/boj-financial-markets-dept|金融市場局]] が公開市場操作を執行することを可能にするオペレーション層を供給し、また [[financial-regulators/boj-financial-system-dept|金融機構局]] が行う決済リスク・モニタリングを支える。

## 2. カウンターパーティ / 相互作用

カウンターパーティは三つの層にクラスター化する。

- **日銀ネット参加者**: システムを通じて決済を行う銀行、証券会社、短資会社、その他の当座預金保有者。これには JapanFG の銀行 / 証券ユニバースの大半、ならびに短資のページ [[financial-regulators/tokyo-tanshi|Tokyo Tanshi]]、[[financial-regulators/central-tanshi|Central Tanshi]]、[[financial-regulators/ueda-yagi-tanshi|Ueda Yagi Tanshi]] が含まれる。
- **国内 FMI 運営者**: 全銀ネット、JSCC、JASDEC、東京金融取引所、および関連するクリアリング / 決済ユーティリティ。ここでの本部局の監視の役割は、法定の監督ではなく政策レベルのものである（法定の監督は FSA にある — [[financial-regulators/fsa-supervision-bureau|監督局]] を参照）。
- **対外連携**: クロスボーダー決済に関する外国中央銀行；金融市場インフラの原則に関する BIS-CPMI；FX 決済に関する CLS 銀行。

リテール向けの決済手段（カード、プリペイド、コード決済、BaaS レール）は本部局によって運営されているのではなく、本部局が運営するインターバンク決済層の下流の利用者である。リテールレールのマップについては、[[banking/baas-japan-landscape|BaaS Japan landscape]] と [[banking/quick-deposit-four-methods|quick deposit four methods]] へ経路をとること。

## 3. なぜこのページが重要か

- インターバンク決済、日銀ネット、JGB の DvP、または全銀との連携に触れる、あらゆる JapanFG ページにとって、日銀側のアンカーである。
- 「決済オペレーター」（本部局、中央銀行マネー）を「決済監督者」（FSA、法定の監督）から切り分ける — これは、ページがシステミックリスクやオペレーショナル・レジリエンス政策を論じる際に常に重要となる区別である。
- BaaS / 決済ページが、リテール・フローを中央銀行マネー決済に根拠づける必要があるときに、上流を参照するための適切なアンカーを与える。
- 金融政策の部局と混同することなく、日銀ネットの稼働時間変更、FMI 監視レポート、および（該当する場合には）CBDC 実験の作業にとって、最もクリーンな受け皿である。

## 関連
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]
- [[financial-regulators/boj-financial-markets-dept|金融市場局 (Financial Markets Department)]]
- [[financial-regulators/boj-financial-system-dept|金融機構局 (Financial System and Bank Examination Department)]]
- [[financial-regulators/boj-international-dept|国際局 (International Department)]]
- [[banking/INDEX|Banking landscape]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[banking/quick-deposit-four-methods|Quick deposit four methods]]
- [[money-market/japan-money-market|Japan money market]]

## 出典

- Bank of Japan, "Organization" (English) — https://www.boj.or.jp/en/about/organization/index.htm
- Bank of Japan, "Bank of Japan Financial Network System (BOJ-NET)" — https://www.boj.or.jp/en/paym/bojnet/index.htm
- Bank of Japan, "Payment and Settlement Systems" (outline) — https://www.boj.or.jp/en/paym/outline/index.htm
- Bank of Japan, "Payment and Settlement Releases" — https://www.boj.or.jp/en/paym/release/index.htm
- Bank of Japan, "Publications" (Annual Review) — https://www.boj.or.jp/en/about/publication/

---

> [!info] 校核状態
> confidence: **likely**. 部局のスコープは日銀の公開された決済システム関連ページから記述している。CBDC 実験の作業は本部局が他部局と連携して実施しているが、ここでは詳細には断定していない。次回の『決済システムレポート』が公表された際に更新すること。
